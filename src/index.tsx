import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

// Types pour D1 Database
type Bindings = {
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS pour les API
app.use('/api/*', cors())

// Servir les fichiers statiques
app.use('/static/*', serveStatic({ root: './public' }))

// ==================== ROUTES API ====================

// API: Inscription utilisateur
app.post('/api/auth/register', async (c) => {
  try {
    const { email, password, firstName, lastName, company } = await c.req.json()
    
    // Validation basique
    if (!email || !password || !firstName || !lastName) {
      return c.json({ error: 'Tous les champs sont requis' }, 400)
    }

    // Vérifier si l'email existe déjà
    const existingUser = await c.env.DB.prepare(
      'SELECT id FROM users WHERE email = ?'
    ).bind(email).first()

    if (existingUser) {
      return c.json({ error: 'Cet email est déjà utilisé' }, 400)
    }

    // Créer l'utilisateur (en production, hasher le mot de passe!)
    const result = await c.env.DB.prepare(
      'INSERT INTO users (email, password, first_name, last_name, company) VALUES (?, ?, ?, ?, ?)'
    ).bind(email, password, firstName, lastName, company || '').run()

    return c.json({ 
      success: true, 
      userId: result.meta.last_row_id,
      message: 'Compte créé avec succès'
    })
  } catch (error) {
    return c.json({ error: 'Erreur lors de la création du compte' }, 500)
  }
})

// API: Connexion utilisateur
app.post('/api/auth/login', async (c) => {
  try {
    const { email, password } = await c.req.json()
    
    const user = await c.env.DB.prepare(
      'SELECT id, email, first_name, last_name, company FROM users WHERE email = ? AND password = ?'
    ).bind(email, password).first()

    if (!user) {
      return c.json({ error: 'Email ou mot de passe incorrect' }, 401)
    }

    return c.json({ 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        company: user.company
      }
    })
  } catch (error) {
    return c.json({ error: 'Erreur lors de la connexion' }, 500)
  }
})

// API: Créer une nouvelle évaluation
app.post('/api/assessments', async (c) => {
  try {
    const { userId, assessmentType } = await c.req.json()
    
    const result = await c.env.DB.prepare(
      'INSERT INTO assessments (user_id, assessment_type, status) VALUES (?, ?, ?)'
    ).bind(userId, assessmentType, 'in_progress').run()

    return c.json({ 
      success: true, 
      assessmentId: result.meta.last_row_id 
    })
  } catch (error) {
    return c.json({ error: 'Erreur lors de la création de l\'évaluation' }, 500)
  }
})

// API: Sauvegarder les réponses d'évaluation
app.post('/api/assessments/:id/answers', async (c) => {
  try {
    const assessmentId = c.req.param('id')
    const { answers } = await c.req.json()
    
    // Sauvegarder toutes les réponses
    for (const answer of answers) {
      await c.env.DB.prepare(
        'INSERT INTO assessment_answers (assessment_id, category, question_key, answer_value) VALUES (?, ?, ?, ?)'
      ).bind(assessmentId, answer.category, answer.questionKey, answer.value).run()
    }

    // Calculer le score global
    const totalScore = answers.reduce((sum: number, a: any) => sum + a.value, 0)
    const avgScore = Math.round((totalScore / answers.length) * 20)

    // Mettre à jour l'évaluation
    await c.env.DB.prepare(
      'UPDATE assessments SET status = ?, overall_score = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
    ).bind('completed', avgScore, assessmentId).run()

    return c.json({ 
      success: true, 
      score: avgScore 
    })
  } catch (error) {
    return c.json({ error: 'Erreur lors de la sauvegarde des réponses' }, 500)
  }
})

// API: Récupérer les évaluations d'un utilisateur
app.get('/api/users/:userId/assessments', async (c) => {
  try {
    const userId = c.req.param('userId')
    
    const { results } = await c.env.DB.prepare(
      'SELECT id, assessment_type, status, overall_score, created_at FROM assessments WHERE user_id = ? ORDER BY created_at DESC'
    ).bind(userId).all()

    return c.json({ assessments: results })
  } catch (error) {
    return c.json({ error: 'Erreur lors de la récupération des évaluations' }, 500)
  }
})

// API: Récupérer les détails d'une évaluation
app.get('/api/assessments/:id', async (c) => {
  try {
    const assessmentId = c.req.param('id')
    
    const assessment = await c.env.DB.prepare(
      'SELECT * FROM assessments WHERE id = ?'
    ).bind(assessmentId).first()

    const { results: answers } = await c.env.DB.prepare(
      'SELECT * FROM assessment_answers WHERE assessment_id = ?'
    ).bind(assessmentId).all()

    return c.json({ assessment, answers })
  } catch (error) {
    return c.json({ error: 'Erreur lors de la récupération de l\'évaluation' }, 500)
  }
})

// ==================== ROUTES HTML ====================

// Page d'accueil
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Factorise.io - Transformation Digitale & IA</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"></script>
        <script src="/static/i18n-page.js"></script>
        <style>
          .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
          .card-hover:hover { transform: translateY(-5px); transition: all 0.3s; }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-md fixed w-full z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold text-indigo-600">Factorise.io</span>
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="#services" class="text-gray-700 hover:text-indigo-600">Services</a>
                        <a href="#about" class="text-gray-700 hover:text-indigo-600">À propos</a>
                        <a href="#contact" class="text-gray-700 hover:text-indigo-600">Contact</a>
                        <a href="/login" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                            Connexion
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <div class="gradient-bg text-white pt-32 pb-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-5xl font-bold mb-6">Transformez votre entreprise avec l'IA</h1>
                <p class="text-xl mb-8 opacity-90">Expertise en transformation digitale et intelligence artificielle</p>
                <div class="space-x-4">
                    <a href="/register" class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
                        Commencer l'évaluation
                    </a>
                    <a href="#services" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 inline-block">
                        En savoir plus
                    </a>
                </div>
            </div>
        </div>

        <!-- Services Section -->
        <section id="services" class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl font-bold text-center mb-12">Nos Services</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
                        <i class="fas fa-brain text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-2xl font-bold mb-4">Stratégie IA</h3>
                        <p class="text-gray-600">Définissez votre feuille de route IA avec nos experts certifiés</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
                        <i class="fas fa-chart-line text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-2xl font-bold mb-4">Évaluation de Maturité</h3>
                        <p class="text-gray-600">Analysez votre niveau de maturité IA et identifiez les opportunités</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
                        <i class="fas fa-cogs text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-2xl font-bold mb-4">Transformation Digitale</h3>
                        <p class="text-gray-600">Accompagnement complet dans votre transformation digitale</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="bg-gray-100 py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold mb-6">Plus de 20 ans d'expertise</h2>
                        <p class="text-gray-700 mb-4">
                            Expert en transformation digitale et IA, nous accompagnons les entreprises dans leur mutation numérique.
                        </p>
                        <p class="text-gray-700 mb-4">
                            Nos certifications : DeepLearning.AI, Harvard Data Science, MIT Cybersécurité, SAFe Agile Leadership.
                        </p>
                        <div class="flex space-x-4 mt-6">
                            <span class="bg-indigo-600 text-white px-4 py-2 rounded-lg">IA Générative</span>
                            <span class="bg-indigo-600 text-white px-4 py-2 rounded-lg">Data Science</span>
                            <span class="bg-indigo-600 text-white px-4 py-2 rounded-lg">Blockchain</span>
                        </div>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg">
                        <h3 class="text-2xl font-bold mb-6">Pourquoi nous choisir ?</h3>
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                <span>Expertise technique et vision stratégique</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                <span>Approche centrée sur l'humain</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                <span>Résultats mesurables et ROI prouvé</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                <span>Connaissance du marché européen</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="gradient-bg text-white py-16">
            <div class="max-w-4xl mx-auto text-center px-4">
                <h2 class="text-3xl font-bold mb-4">Prêt à transformer votre entreprise ?</h2>
                <p class="text-xl mb-8">Commencez votre évaluation gratuite de maturité IA dès maintenant</p>
                <a href="/register" class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
                    Démarrer l'évaluation gratuite
                </a>
            </div>
        </section>

        <!-- Footer -->
        <footer id="contact" class="bg-gray-900 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">Factorise.io</h3>
                        <p class="text-gray-400">Transformation Digitale & Intelligence Artificielle</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-4">Contact</h3>
                        <p class="text-gray-400">Île-de-France, France</p>
                        <p class="text-gray-400">contact@factorise.io</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-4">Suivez-nous</h3>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin text-2xl"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter text-2xl"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-github text-2xl"></i></a>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Factorise.io - Tous droits réservés</p>
                </div>
            </div>
        </footer>
    </body>
    </html>
  `)
})

// Page de connexion
app.get('/login', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Connexion - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"></script>
        <script src="/static/i18n-page.js"></script>
    </head>
    <body class="bg-gray-50">
        <div class="min-h-screen flex items-center justify-center py-12 px-4">
            <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900">Connexion</h2>
                    <p class="text-gray-600 mt-2">Accédez à votre espace personnel</p>
                </div>
                
                <form id="loginForm" class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" required
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                        <input type="password" id="password" required
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    </div>
                    
                    <div id="errorMessage" class="text-red-600 text-sm hidden"></div>
                    
                    <button type="submit" 
                            class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
                        Se connecter
                    </button>
                </form>
                
                <p class="text-center mt-6 text-gray-600">
                    Pas encore de compte ? 
                    <a href="/register" class="text-indigo-600 hover:text-indigo-700 font-semibold">S'inscrire</a>
                </p>
                <p class="text-center mt-2">
                    <a href="/" class="text-gray-600 hover:text-gray-700">← Retour à l'accueil</a>
                </p>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            document.getElementById('loginForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const errorDiv = document.getElementById('errorMessage');
                
                try {
                    const response = await axios.post('/api/auth/login', { email, password });
                    
                    if (response.data.success) {
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        window.location.href = '/dashboard';
                    }
                } catch (error) {
                    errorDiv.textContent = error.response?.data?.error || 'Erreur de connexion';
                    errorDiv.classList.remove('hidden');
                }
            });
        </script>
    </body>
    </html>
  `)
})

// Page d'inscription
app.get('/register', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inscription - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"></script>
        <script src="/static/i18n-page.js"></script>
    </head>
    <body class="bg-gray-50">
        <div class="min-h-screen flex items-center justify-center py-12 px-4">
            <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900">Inscription</h2>
                    <p class="text-gray-600 mt-2">Créez votre compte gratuit</p>
                </div>
                
                <form id="registerForm" class="space-y-6">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                            <input type="text" id="firstName" required
                                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                            <input type="text" id="lastName" required
                                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" required
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Entreprise (optionnel)</label>
                        <input type="text" id="company"
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                        <input type="password" id="password" required
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    </div>
                    
                    <div id="errorMessage" class="text-red-600 text-sm hidden"></div>
                    
                    <button type="submit" 
                            class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
                        S'inscrire
                    </button>
                </form>
                
                <p class="text-center mt-6 text-gray-600">
                    Déjà un compte ? 
                    <a href="/login" class="text-indigo-600 hover:text-indigo-700 font-semibold">Se connecter</a>
                </p>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            document.getElementById('registerForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const data = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    company: document.getElementById('company').value,
                    password: document.getElementById('password').value
                };
                const errorDiv = document.getElementById('errorMessage');
                
                try {
                    const response = await axios.post('/api/auth/register', data);
                    
                    if (response.data.success) {
                        alert('Compte créé avec succès !');
                        window.location.href = '/login';
                    }
                } catch (error) {
                    errorDiv.textContent = error.response?.data?.error || 'Erreur lors de l\'inscription';
                    errorDiv.classList.remove('hidden');
                }
            });
        </script>
    </body>
    </html>
  `)
})

// Page dashboard (espace personnel)
app.get('/dashboard', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"></script>
        <script src="/static/i18n-page.js"></script>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold text-indigo-600">Factorise.io</span>
                    </div>
                    <div class="flex items-center space-x-6">
                        <span id="userName" class="text-gray-700"></span>
                        <button onclick="logout()" class="text-gray-700 hover:text-indigo-600">
                            <i class="fas fa-sign-out-alt mr-2"></i>Déconnexion
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 class="text-4xl font-bold mb-8">Bienvenue sur votre espace personnel</h1>
            
            <!-- Action Cards -->
            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <div class="bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-200 hover:border-indigo-400 cursor-pointer"
                     onclick="window.location.href='/assessment'">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-chart-line text-4xl text-indigo-600 mr-4"></i>
                        <h3 class="text-2xl font-bold">Nouvelle Évaluation</h3>
                    </div>
                    <p class="text-gray-600 mb-4">Évaluez votre maturité IA en 15 minutes</p>
                    <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                        Commencer <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
                
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-history text-4xl text-gray-600 mr-4"></i>
                        <h3 class="text-2xl font-bold">Mes Évaluations</h3>
                    </div>
                    <p class="text-gray-600 mb-4">Consultez vos évaluations précédentes</p>
                    <div id="assessmentsList" class="space-y-2">
                        <p class="text-gray-500 italic">Chargement...</p>
                    </div>
                </div>
            </div>
            
            <!-- Stats -->
            <div class="bg-white p-8 rounded-xl shadow-lg">
                <h3 class="text-2xl font-bold mb-6">Vos statistiques</h3>
                <div class="grid md:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-indigo-600" id="totalAssessments">0</div>
                        <div class="text-gray-600">Évaluations</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-green-600" id="avgScore">-</div>
                        <div class="text-gray-600">Score moyen</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-blue-600" id="completedCount">0</div>
                        <div class="text-gray-600">Complétées</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-orange-600" id="inProgressCount">0</div>
                        <div class="text-gray-600">En cours</div>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            // Vérifier l'authentification
            const user = JSON.parse(localStorage.getItem('user') || 'null');
            if (!user) {
                window.location.href = '/login';
            }
            
            document.getElementById('userName').textContent = user.firstName + ' ' + user.lastName;
            
            // Charger les évaluations
            async function loadAssessments() {
                try {
                    const response = await axios.get('/api/users/' + user.id + '/assessments');
                    const assessments = response.data.assessments;
                    
                    // Stats
                    document.getElementById('totalAssessments').textContent = assessments.length;
                    const completed = assessments.filter(a => a.status === 'completed');
                    document.getElementById('completedCount').textContent = completed.length;
                    document.getElementById('inProgressCount').textContent = assessments.length - completed.length;
                    
                    if (completed.length > 0) {
                        const avgScore = Math.round(completed.reduce((sum, a) => sum + a.overall_score, 0) / completed.length);
                        document.getElementById('avgScore').textContent = avgScore + '%';
                    }
                    
                    // Liste
                    const listDiv = document.getElementById('assessmentsList');
                    if (assessments.length === 0) {
                        listDiv.innerHTML = '<p class="text-gray-500 italic">Aucune évaluation pour le moment</p>';
                    } else {
                        listDiv.innerHTML = assessments.slice(0, 5).map(a => {
                            const date = new Date(a.created_at).toLocaleDateString('fr-FR');
                            const statusColor = a.status === 'completed' ? 'text-green-600' : 'text-orange-600';
                            const statusText = a.status === 'completed' ? 'Complétée' : 'En cours';
                            return '<div class="flex justify-between items-center py-2 border-b">' +
                                   '<span>' + date + ' - ' + (a.assessment_type === 'ia_maturity' ? 'Maturité IA' : 'Stratégie') + '</span>' +
                                   '<span class="' + statusColor + '">' + statusText + (a.overall_score ? ' (' + a.overall_score + '%)' : '') + '</span>' +
                                   '</div>';
                        }).join('');
                    }
                } catch (error) {
                    console.error('Erreur:', error);
                }
            }
            
            function logout() {
                localStorage.removeItem('user');
                window.location.href = '/';
            }
            
            loadAssessments();
        </script>
    </body>
    </html>
  `)
})

// Page d'évaluation
app.get('/assessment', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Évaluation Maturité IA - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"></script>
        <script src="/static/assessment-questions.js"></script>
        <script src="/static/i18n-page.js"></script>
        <script src="/static/assessment.js"></script>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold text-indigo-600">Factorise.io</span>
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="/dashboard" class="text-gray-700 hover:text-indigo-600">
                            <i class="fas fa-arrow-left mr-2"></i>Retour au dashboard
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="bg-white rounded-xl shadow-lg p-8">
                <h1 class="text-4xl font-bold mb-4">Évaluation de Maturité IA</h1>
                <p class="text-gray-600 mb-8">
                    Répondez aux questions suivantes pour évaluer le niveau de maturité IA de votre organisation.
                    Utilisez l'échelle de 1 (pas du tout) à 5 (totalement).
                </p>
                
                <!-- Progress Bar -->
                <div class="mb-8">
                    <div class="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progression</span>
                        <span id="progressText">0%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                        <div id="progressBar" class="bg-indigo-600 h-3 rounded-full transition-all duration-300" style="width: 0%"></div>
                    </div>
                </div>
                
                <!-- Questions Container -->
                <div id="questionsContainer"></div>
                
                <!-- Navigation Buttons -->
                <div class="flex justify-between mt-8">
                    <button id="prevBtn" onclick="previousCategory()" 
                            class="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                            disabled>
                        <i class="fas fa-arrow-left mr-2"></i>Précédent
                    </button>
                    <button id="nextBtn" onclick="nextCategory()" 
                            class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                        Suivant <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    </body>
    </html>
  `)
})

// Page de résultats
app.get('/results', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Résultats de l'évaluation - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="/static/translations.js"></script>
        <script src="/static/i18n-page.js"></script>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold text-indigo-600">Factorise.io</span>
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="/dashboard" class="text-gray-700 hover:text-indigo-600">
                            <i class="fas fa-home mr-2"></i>Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <!-- Score principal -->
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-2xl p-12 mb-8 text-center">
                <h1 class="text-4xl font-bold mb-4">Résultats de votre évaluation</h1>
                <div class="flex items-center justify-center space-x-4">
                    <i class="fas fa-chart-line text-6xl"></i>
                    <div>
                        <div class="text-7xl font-bold" id="overallScore">-</div>
                        <div class="text-xl">Score de Maturité IA</div>
                    </div>
                </div>
                <p class="mt-6 text-xl" id="scoreInterpretation"></p>
            </div>

            <!-- Analyse par catégorie -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 class="text-3xl font-bold mb-6">Analyse détaillée par domaine</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <canvas id="radarChart"></canvas>
                    </div>
                    <div id="categoryScores" class="space-y-4"></div>
                </div>
            </div>

            <!-- Recommandations -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 class="text-3xl font-bold mb-6">
                    <i class="fas fa-lightbulb text-yellow-500 mr-3"></i>Recommandations prioritaires
                </h2>
                <div id="recommendations" class="space-y-4"></div>
            </div>

            <!-- Actions -->
            <div class="flex justify-center space-x-4">
                <button onclick="window.print()" 
                        class="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700">
                    <i class="fas fa-print mr-2"></i>Imprimer les résultats
                </button>
                <a href="/dashboard" 
                   class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 inline-block">
                    <i class="fas fa-home mr-2"></i>Retour au dashboard
                </a>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            const urlParams = new URLSearchParams(window.location.search);
            const assessmentId = urlParams.get('id');
            const overallScore = parseInt(urlParams.get('score'));
            
            // Afficher le score global
            document.getElementById('overallScore').textContent = overallScore + '%';
            
            // Interprétation du score
            let interpretation = '';
            if (overallScore < 30) {
                interpretation = '🔴 Niveau Initial - Votre organisation débute son parcours IA';
            } else if (overallScore < 50) {
                interpretation = '🟠 Niveau Émergent - Des bases solides sont en place';
            } else if (overallScore < 70) {
                interpretation = '🟡 Niveau Intermédiaire - Bonne progression, continuez vos efforts';
            } else if (overallScore < 85) {
                interpretation = '🟢 Niveau Avancé - Très bon niveau de maturité IA';
            } else {
                interpretation = '🏆 Niveau Expert - Excellence dans l\\'adoption de l\\'IA';
            }
            document.getElementById('scoreInterpretation').textContent = interpretation;
            
            // Charger les détails de l'évaluation
            loadAssessmentDetails();
            
            async function loadAssessmentDetails() {
                try {
                    const response = await axios.get('/api/assessments/' + assessmentId);
                    const { answers } = response.data;
                    
                    // Calculer les scores par catégorie
                    const categoryScores = calculateCategoryScores(answers);
                    displayCategoryScores(categoryScores);
                    createRadarChart(categoryScores);
                    generateRecommendations(categoryScores);
                } catch (error) {
                    console.error('Erreur:', error);
                }
            }
            
            function calculateCategoryScores(answers) {
                const categories = {
                    vision: { name: 'Vision & Stratégie', icon: 'fa-lightbulb', scores: [] },
                    data: { name: 'Données & Gouvernance', icon: 'fa-database', scores: [] },
                    technologie: { name: 'Technologies & Outils', icon: 'fa-cogs', scores: [] },
                    organisation: { name: 'Organisation & Compétences', icon: 'fa-users', scores: [] },
                    ethique: { name: 'Éthique & Conformité', icon: 'fa-balance-scale', scores: [] }
                };
                
                answers.forEach(answer => {
                    if (categories[answer.category]) {
                        categories[answer.category].scores.push(answer.answer_value);
                    }
                });
                
                // Calculer la moyenne pour chaque catégorie
                Object.keys(categories).forEach(key => {
                    const scores = categories[key].scores;
                    categories[key].average = scores.length > 0 
                        ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 20)
                        : 0;
                });
                
                return categories;
            }
            
            function displayCategoryScores(categoryScores) {
                const container = document.getElementById('categoryScores');
                container.innerHTML = Object.entries(categoryScores).map(([key, cat]) => {
                    const color = cat.average < 40 ? 'red' : cat.average < 60 ? 'orange' : cat.average < 80 ? 'yellow' : 'green';
                    return '<div class="border-l-4 border-' + color + '-500 pl-4">' +
                           '<div class="flex items-center justify-between mb-2">' +
                           '<span class="font-semibold"><i class="fas ' + cat.icon + ' mr-2 text-indigo-600"></i>' + cat.name + '</span>' +
                           '<span class="text-2xl font-bold text-' + color + '-600">' + cat.average + '%</span>' +
                           '</div>' +
                           '<div class="w-full bg-gray-200 rounded-full h-2">' +
                           '<div class="bg-' + color + '-500 h-2 rounded-full" style="width: ' + cat.average + '%"></div>' +
                           '</div>' +
                           '</div>';
                }).join('');
            }
            
            function createRadarChart(categoryScores) {
                const ctx = document.getElementById('radarChart').getContext('2d');
                
                new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: Object.values(categoryScores).map(c => c.name),
                        datasets: [{
                            label: 'Score de maturité',
                            data: Object.values(categoryScores).map(c => c.average),
                            backgroundColor: 'rgba(99, 102, 241, 0.2)',
                            borderColor: 'rgb(99, 102, 241)',
                            pointBackgroundColor: 'rgb(99, 102, 241)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(99, 102, 241)'
                        }]
                    },
                    options: {
                        scales: {
                            r: {
                                beginAtZero: true,
                                max: 100,
                                ticks: { stepSize: 20 }
                            }
                        },
                        plugins: {
                            legend: { display: false }
                        }
                    }
                });
            }
            
            function generateRecommendations(categoryScores) {
                const recommendations = [];
                
                Object.entries(categoryScores).forEach(([key, cat]) => {
                    if (cat.average < 60) {
                        let rec = {
                            category: cat.name,
                            icon: cat.icon,
                            priority: cat.average < 40 ? 'Haute' : 'Moyenne',
                            color: cat.average < 40 ? 'red' : 'orange',
                            actions: []
                        };
                        
                        if (key === 'vision') {
                            rec.actions = [
                                'Définir une stratégie IA claire alignée avec les objectifs business',
                                'Obtenir le sponsorship de la direction générale',
                                'Établir un budget dédié aux initiatives IA'
                            ];
                        } else if (key === 'data') {
                            rec.actions = [
                                'Mettre en place une gouvernance des données',
                                'Améliorer la qualité et l\\'accessibilité des données',
                                'Investir dans une infrastructure de données moderne'
                            ];
                        } else if (key === 'technologie') {
                            rec.actions = [
                                'Adopter des plateformes cloud IA (Azure ML, AWS SageMaker)',
                                'Mettre en place des pratiques MLOps',
                                'Provisionner des ressources de calcul adaptées'
                            ];
                        } else if (key === 'organisation') {
                            rec.actions = [
                                'Recruter ou former des data scientists et ML engineers',
                                'Créer une culture d\\'innovation autour de l\\'IA',
                                'Favoriser la collaboration entre métiers et technique'
                            ];
                        } else if (key === 'ethique') {
                            rec.actions = [
                                'Définir des principes éthiques pour l\\'IA',
                                'Mettre en place des processus de détection des biais',
                                'Assurer la conformité RGPD et AI Act'
                            ];
                        }
                        
                        recommendations.push(rec);
                    }
                });
                
                // Afficher les recommandations
                const container = document.getElementById('recommendations');
                if (recommendations.length === 0) {
                    container.innerHTML = '<p class="text-green-600 text-lg"><i class="fas fa-check-circle mr-2"></i>Excellent ! Votre organisation a un bon niveau de maturité sur tous les domaines.</p>';
                } else {
                    container.innerHTML = recommendations.map(rec => 
                        '<div class="border-l-4 border-' + rec.color + '-500 bg-' + rec.color + '-50 p-6 rounded-r-lg">' +
                        '<div class="flex items-center mb-3">' +
                        '<i class="fas ' + rec.icon + ' text-2xl text-' + rec.color + '-600 mr-3"></i>' +
                        '<h3 class="text-xl font-bold">' + rec.category + '</h3>' +
                        '<span class="ml-auto bg-' + rec.color + '-600 text-white px-3 py-1 rounded-full text-sm">Priorité ' + rec.priority + '</span>' +
                        '</div>' +
                        '<ul class="space-y-2">' +
                        rec.actions.map(action => '<li class="flex items-start"><i class="fas fa-arrow-right text-' + rec.color + '-600 mr-2 mt-1"></i><span>' + action + '</span></li>').join('') +
                        '</ul>' +
                        '</div>'
                    ).join('');
                }
            }
        </script>
    </body>
    </html>
  `)
})

export default app
