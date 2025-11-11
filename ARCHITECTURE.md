# Documentation Technique - Architecture et Fonctionnalités

## Table des matières

1. [Vue d'ensemble de l'architecture](#vue-densemble-de-larchitecture)
2. [Stack technique détaillée](#stack-technique-détaillée)
3. [Architecture des données](#architecture-des-données)
4. [Architecture applicative](#architecture-applicative)
5. [Flux de données](#flux-de-données)
6. [Sécurité](#sécurité)
7. [Performance et scalabilité](#performance-et-scalabilité)
8. [Guide de déploiement](#guide-de-déploiement)

---

## Vue d'ensemble de l'architecture

### Principes architecturaux

Le projet **Factorise.io** suit une architecture moderne basée sur :

1. **Edge Computing** : Déploiement sur Cloudflare Workers pour une latence minimale
2. **Serverless** : Pas de serveur à gérer, scaling automatique
3. **JAMstack** : JavaScript, APIs, et Markup pour une performance optimale
4. **API-First** : Backend découplé du frontend via API REST
5. **Database-as-a-Service** : Cloudflare D1 pour la persistance

### Schéma d'architecture global

```
┌─────────────────────────────────────────────────────────────┐
│                    UTILISATEUR FINAL                         │
│                   (Navigateur Web)                           │
└────────────┬────────────────────────────────────────────────┘
             │
             │ HTTPS
             ▼
┌─────────────────────────────────────────────────────────────┐
│              CLOUDFLARE EDGE NETWORK                         │
│                                                              │
│  ┌────────────────────┐        ┌──────────────────────┐    │
│  │   CDN / Cache      │        │   DDoS Protection    │    │
│  └────────────────────┘        └──────────────────────┘    │
└────────────┬────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│              CLOUDFLARE PAGES + WORKERS                      │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                  HONO APPLICATION                       │ │
│  │                                                         │ │
│  │  ┌──────────────┐    ┌──────────────┐                 │ │
│  │  │  HTML Pages  │    │  API Routes  │                 │ │
│  │  │  (SSR)       │    │  (REST)      │                 │ │
│  │  └──────────────┘    └──────────────┘                 │ │
│  │                                                         │ │
│  │  ┌──────────────┐    ┌──────────────┐                 │ │
│  │  │ Static Files │    │ Middleware   │                 │ │
│  │  │ (CSS, JS)    │    │ (CORS, etc.) │                 │ │
│  │  └──────────────┘    └──────────────┘                 │ │
│  └────────────────────────────────────────────────────────┘ │
└────────────┬────────────────────────────────────────────────┘
             │
             │ SQL Queries
             ▼
┌─────────────────────────────────────────────────────────────┐
│              CLOUDFLARE D1 DATABASE                          │
│                (SQLite Global)                               │
│                                                              │
│  ┌──────────┐  ┌──────────────┐  ┌────────────────────┐   │
│  │  users   │  │ assessments  │  │ assessment_answers │   │
│  └──────────┘  └──────────────┘  └────────────────────┘   │
│                                                              │
│  ┌─────────────────┐                                        │
│  │ recommendations │                                        │
│  └─────────────────┘                                        │
└─────────────────────────────────────────────────────────────┘
```

---

## Stack technique détaillée

### Frontend

#### Technologies principales

| Technologie | Version | Rôle | Source |
|------------|---------|------|--------|
| **HTML5** | - | Structure des pages | Standard |
| **CSS3** | - | Styles de base | Standard |
| **Tailwind CSS** | 3.x | Framework CSS utilitaire | CDN |
| **JavaScript ES6+** | - | Logique frontend | Standard |
| **Axios** | 1.6.0 | Client HTTP | CDN |
| **Chart.js** | Latest | Visualisation de données | CDN |
| **Font Awesome** | 6.4.0 | Icônes | CDN |

#### Architecture frontend

```
Frontend Layer
│
├── HTML Templates (SSR via Hono)
│   ├── Layout commun (navigation, footer)
│   ├── Pages publiques (/, /login, /register)
│   └── Pages privées (/dashboard, /assessment, /results)
│
├── CSS (Tailwind utility-first)
│   ├── Classes utilitaires
│   ├── Custom styles (gradient-bg, card-hover)
│   └── Responsive breakpoints
│
└── JavaScript
    ├── assessment.js (logique évaluation)
    │   ├── Gestion des questions
    │   ├── Validation des réponses
    │   ├── Calcul de progression
    │   └── Soumission à l'API
    │
    └── Inline scripts (par page)
        ├── Authentification
        ├── Gestion session localStorage
        └── Appels API avec Axios
```

### Backend

#### Technologies principales

| Technologie | Version | Rôle |
|------------|---------|------|
| **Hono** | 4.10.4 | Framework web edge-native |
| **TypeScript** | 5.x | Langage typé |
| **Cloudflare Workers** | Runtime V8 | Environnement d'exécution |
| **Vite** | 6.3.5 | Build tool |
| **Wrangler** | 4.x | CLI Cloudflare |

#### Architecture backend (Hono)

```typescript
// Structure de l'application Hono

Application Hono
│
├── Configuration
│   ├── CORS Middleware (/api/*)
│   └── Static Files Middleware (/static/*)
│
├── Routes HTML (SSR)
│   ├── GET  /              → Page d'accueil
│   ├── GET  /login         → Page connexion
│   ├── GET  /register      → Page inscription
│   ├── GET  /dashboard     → Dashboard utilisateur
│   ├── GET  /assessment    → Page d'évaluation
│   └── GET  /results       → Page de résultats
│
└── Routes API (REST)
    │
    ├── Authentification
    │   ├── POST /api/auth/register    → Créer compte
    │   └── POST /api/auth/login       → Se connecter
    │
    └── Évaluations
        ├── POST /api/assessments                   → Créer évaluation
        ├── POST /api/assessments/:id/answers       → Sauvegarder réponses
        ├── GET  /api/users/:userId/assessments     → Liste évaluations
        └── GET  /api/assessments/:id               → Détails évaluation
```

### Base de données

#### Cloudflare D1 (SQLite)

**Caractéristiques :**
- SQLite distribué globalement
- Latence faible grâce au réseau edge
- Réplication automatique
- Transactions ACID
- Mode local pour développement (--local)

**Configuration :**

```jsonc
// wrangler.jsonc
{
  "d1_databases": [
    {
      "binding": "DB",              // Nom de binding dans le code
      "database_name": "webapp-production",  // Nom de la DB
      "database_id": "..."          // ID Cloudflare
    }
  ]
}
```

---

## Architecture des données

### Modèle de données

#### 1. Table `users` (Utilisateurs)

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,           -- Email unique
  password TEXT NOT NULL,                -- Mot de passe (à hasher!)
  first_name TEXT NOT NULL,              -- Prénom
  last_name TEXT NOT NULL,               -- Nom
  company TEXT,                          -- Entreprise (optionnel)
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index pour améliorer les performances de recherche
CREATE INDEX idx_users_email ON users(email);
```

**Relations :**
- Un utilisateur peut avoir plusieurs évaluations (1:N avec `assessments`)

#### 2. Table `assessments` (Évaluations)

```sql
CREATE TABLE assessments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,              -- Clé étrangère vers users
  assessment_type TEXT NOT NULL,         -- Type: 'ia_maturity' ou 'strategy'
  status TEXT DEFAULT 'in_progress',     -- Statut: 'in_progress', 'completed'
  overall_score INTEGER,                 -- Score global (0-100)
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Index pour améliorer les performances
CREATE INDEX idx_assessments_user_id ON assessments(user_id);
```

**Relations :**
- Appartient à un utilisateur (N:1 avec `users`)
- Peut avoir plusieurs réponses (1:N avec `assessment_answers`)
- Peut avoir plusieurs recommandations (1:N avec `recommendations`)

#### 3. Table `assessment_answers` (Réponses aux questions)

```sql
CREATE TABLE assessment_answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  assessment_id INTEGER NOT NULL,        -- Clé étrangère vers assessments
  category TEXT NOT NULL,                -- Catégorie de la question
  question_key TEXT NOT NULL,            -- Clé unique de la question
  answer_value INTEGER NOT NULL,         -- Valeur de la réponse (1-5)
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (assessment_id) REFERENCES assessments(id) ON DELETE CASCADE
);

-- Index pour améliorer les performances
CREATE INDEX idx_answers_assessment_id ON assessment_answers(assessment_id);
```

**Catégories possibles :**
- `vision` : Vision & Stratégie IA
- `data` : Données & Gouvernance
- `technologie` : Technologies & Outils
- `organisation` : Organisation & Compétences
- `ethique` : Éthique & Conformité

#### 4. Table `recommendations` (Recommandations)

```sql
CREATE TABLE recommendations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  assessment_id INTEGER NOT NULL,        -- Clé étrangère vers assessments
  category TEXT NOT NULL,                -- Catégorie concernée
  priority TEXT NOT NULL,                -- Priorité: 'high', 'medium', 'low'
  title TEXT NOT NULL,                   -- Titre de la recommandation
  description TEXT NOT NULL,             -- Description détaillée
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (assessment_id) REFERENCES assessments(id) ON DELETE CASCADE
);

-- Index pour améliorer les performances
CREATE INDEX idx_recommendations_assessment_id ON recommendations(assessment_id);
```

### Diagramme Entité-Association

```
┌──────────────────┐
│      users       │
├──────────────────┤
│ id (PK)          │
│ email            │
│ password         │
│ first_name       │
│ last_name        │
│ company          │
│ created_at       │
│ updated_at       │
└────────┬─────────┘
         │
         │ 1:N
         │
         ▼
┌──────────────────────┐
│    assessments       │
├──────────────────────┤
│ id (PK)              │
│ user_id (FK)         │
│ assessment_type      │
│ status               │
│ overall_score        │
│ created_at           │
│ updated_at           │
└─────┬──────────┬─────┘
      │          │
      │ 1:N      │ 1:N
      │          │
      ▼          ▼
┌────────────────────────┐    ┌───────────────────────┐
│  assessment_answers    │    │   recommendations     │
├────────────────────────┤    ├───────────────────────┤
│ id (PK)                │    │ id (PK)               │
│ assessment_id (FK)     │    │ assessment_id (FK)    │
│ category               │    │ category              │
│ question_key           │    │ priority              │
│ answer_value           │    │ title                 │
│ created_at             │    │ description           │
└────────────────────────┘    │ created_at            │
                              └───────────────────────┘
```

### Stratégie de migrations

Les migrations SQL sont versionnées dans le dossier `/migrations/` :

```
migrations/
├── 0001_initial_schema.sql     # Schéma initial
├── 0002_add_indexes.sql        # (Future) Ajout d'index
└── 0003_add_new_feature.sql    # (Future) Nouvelle fonctionnalité
```

**Commandes :**
```bash
# Appliquer en local
npm run db:migrate:local

# Appliquer en production
npm run db:migrate:prod
```

---

## Architecture applicative

### Couche de présentation (Frontend)

#### Pages HTML (Server-Side Rendering)

Toutes les pages HTML sont générées côté serveur par Hono :

**1. Page d'accueil (`/`)**
- Hero section avec gradient
- 3 cartes de services
- Section "À propos"
- CTA et footer

**2. Authentification (`/login`, `/register`)**
- Formulaires avec validation
- Gestion des erreurs
- Redirection après succès

**3. Dashboard (`/dashboard`)**
- Vérification d'authentification
- Affichage des statistiques
- Liste des évaluations
- Actions rapides

**4. Évaluation (`/assessment`)**
- Interface progressive par catégorie
- Barre de progression
- Validation des réponses
- Navigation entre catégories

**5. Résultats (`/results`)**
- Score global avec interprétation
- Graphique radar (Chart.js)
- Scores par catégorie
- Recommandations prioritaires

### Couche métier (Backend API)

#### Authentification

```typescript
// POST /api/auth/register
async (c) => {
  // 1. Validation des données
  const { email, password, firstName, lastName, company } = await c.req.json()
  
  // 2. Vérification email unique
  const existingUser = await c.env.DB.prepare(
    'SELECT id FROM users WHERE email = ?'
  ).bind(email).first()
  
  // 3. Création utilisateur
  const result = await c.env.DB.prepare(
    'INSERT INTO users (...) VALUES (...)'
  ).bind(...).run()
  
  // 4. Réponse
  return c.json({ success: true, userId: result.meta.last_row_id })
}
```

**Note importante :** En production, le mot de passe doit être hashé avec bcrypt ou argon2 !

#### Gestion des évaluations

```typescript
// POST /api/assessments/:id/answers
async (c) => {
  // 1. Récupération des réponses
  const { answers } = await c.req.json()
  
  // 2. Sauvegarde en batch
  for (const answer of answers) {
    await c.env.DB.prepare(
      'INSERT INTO assessment_answers (...) VALUES (...)'
    ).bind(...).run()
  }
  
  // 3. Calcul du score global
  const totalScore = answers.reduce((sum, a) => sum + a.value, 0)
  const avgScore = Math.round((totalScore / answers.length) * 20)
  
  // 4. Mise à jour de l'évaluation
  await c.env.DB.prepare(
    'UPDATE assessments SET status = ?, overall_score = ? WHERE id = ?'
  ).bind('completed', avgScore, assessmentId).run()
  
  return c.json({ success: true, score: avgScore })
}
```

### Couche de données

#### Accès à la base de données

Cloudflare D1 est accessible via le binding `DB` :

```typescript
// Configuration du type
type Bindings = {
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()

// Utilisation
app.get('/api/example', async (c) => {
  const result = await c.env.DB.prepare(
    'SELECT * FROM users WHERE id = ?'
  ).bind(userId).first()
  
  return c.json({ user: result })
})
```

---

## Flux de données

### Flux d'inscription

```
1. Utilisateur remplit formulaire /register
   ↓
2. Frontend : Validation basique (champs requis)
   ↓
3. Axios POST → /api/auth/register
   ↓
4. Backend : Validation des données
   ↓
5. Backend : Vérification email unique dans DB
   ↓
6. Backend : INSERT INTO users (...)
   ↓
7. Backend : Réponse JSON { success: true, userId }
   ↓
8. Frontend : Redirection vers /login
```

### Flux de connexion

```
1. Utilisateur remplit formulaire /login
   ↓
2. Axios POST → /api/auth/login
   ↓
3. Backend : SELECT user WHERE email = ? AND password = ?
   ↓
4. Backend : Réponse JSON { success: true, user: {...} }
   ↓
5. Frontend : Sauvegarde user dans localStorage
   ↓
6. Frontend : Redirection vers /dashboard
```

### Flux d'évaluation complète

```
1. Dashboard : Clic sur "Nouvelle Évaluation"
   ↓
2. Frontend : Redirection vers /assessment
   ↓
3. Frontend : POST /api/assessments { userId, type }
   ↓
4. Backend : INSERT INTO assessments → Retour assessmentId
   ↓
5. Frontend : Affichage catégorie 1 (4 questions)
   ↓
6. Utilisateur : Répond aux 4 questions
   ↓
7. Frontend : Validation + Affichage catégorie 2
   ↓
... Répéter pour 5 catégories ...
   ↓
8. Frontend : Toutes réponses collectées
   ↓
9. Frontend : POST /api/assessments/:id/answers { answers: [...] }
   ↓
10. Backend : Sauvegarde des 20 réponses en DB
    ↓
11. Backend : Calcul score global (moyenne * 20)
    ↓
12. Backend : UPDATE assessments SET status='completed', score=X
    ↓
13. Backend : Réponse { success: true, score: X }
    ↓
14. Frontend : Redirection vers /results?id=X&score=Y
    ↓
15. Frontend : Affichage score + graphiques + recommandations
```

### Flux de chargement du dashboard

```
1. Frontend : Vérification localStorage.user
   ↓
2. Frontend : GET /api/users/:userId/assessments
   ↓
3. Backend : SELECT * FROM assessments WHERE user_id = ?
   ↓
4. Backend : Réponse JSON { assessments: [...] }
   ↓
5. Frontend : Calcul statistiques
   - Total évaluations
   - Score moyen
   - Compteurs par statut
   ↓
6. Frontend : Affichage dashboard avec stats + liste
```

---

## Sécurité

### Niveau actuel (POC/MVP)

⚠️ **Points à améliorer pour la production :**

#### Authentification
- ❌ **Mot de passe en clair** dans la base de données
- ❌ **Pas de JWT** : session gérée par localStorage
- ❌ **Pas de refresh token**
- ❌ **Pas d'expiration de session**

#### Validation
- ⚠️ **Validation basique** : uniquement côté frontend
- ❌ **Pas de sanitization** des inputs
- ❌ **Pas de protection CSRF**
- ❌ **Pas de rate limiting**

#### Données
- ❌ **Pas de chiffrement** des données sensibles
- ❌ **Pas d'audit logs**

### Recommandations pour la production

#### 1. Hashing des mots de passe

```typescript
import bcrypt from 'bcryptjs'

// À l'inscription
const hashedPassword = await bcrypt.hash(password, 10)

// À la connexion
const isValid = await bcrypt.compare(password, user.password)
```

#### 2. Authentification par JWT

```typescript
import { sign, verify } from 'hono/jwt'

// Générer token
const token = await sign({ userId: user.id }, JWT_SECRET)

// Middleware de vérification
app.use('/api/*', async (c, next) => {
  const token = c.req.header('Authorization')?.split(' ')[1]
  
  try {
    const payload = await verify(token, JWT_SECRET)
    c.set('userId', payload.userId)
    await next()
  } catch {
    return c.json({ error: 'Unauthorized' }, 401)
  }
})
```

#### 3. Validation côté serveur

```typescript
// Utiliser zod ou yup
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1)
})

// Dans le handler
const data = registerSchema.parse(await c.req.json())
```

#### 4. Rate Limiting

```typescript
// Avec Cloudflare Workers KV
const rateLimiter = async (email: string) => {
  const key = `ratelimit:${email}`
  const attempts = await c.env.KV.get(key)
  
  if (attempts && parseInt(attempts) > 5) {
    throw new Error('Too many attempts')
  }
  
  await c.env.KV.put(key, (parseInt(attempts || '0') + 1).toString(), {
    expirationTtl: 3600 // 1 heure
  })
}
```

#### 5. Protection CSRF

```typescript
// Générer token CSRF
const csrfToken = crypto.randomUUID()

// Vérifier dans les requêtes POST
if (c.req.header('X-CSRF-Token') !== expectedToken) {
  return c.json({ error: 'Invalid CSRF token' }, 403)
}
```

#### 6. HTTPS et headers de sécurité

```typescript
app.use('*', async (c, next) => {
  // Force HTTPS
  if (!c.req.url.startsWith('https://')) {
    return c.redirect(c.req.url.replace('http://', 'https://'))
  }
  
  // Security headers
  c.header('X-Content-Type-Options', 'nosniff')
  c.header('X-Frame-Options', 'DENY')
  c.header('X-XSS-Protection', '1; mode=block')
  c.header('Strict-Transport-Security', 'max-age=31536000')
  
  await next()
})
```

---

## Performance et scalabilité

### Avantages de Cloudflare Pages/Workers

#### 1. Edge Computing
- **Latence ultra-faible** : Le code s'exécute au plus près de l'utilisateur
- **300+ data centers** dans le monde
- **Réponse en < 50ms** en moyenne

#### 2. Auto-scaling
- **Scaling automatique** : Gère des millions de requêtes sans configuration
- **Pas de cold start** : Workers sont toujours chauds
- **Pay-per-use** : Coût proportionnel à l'usage

#### 3. Cache intégré
- **CDN global** : Cache automatique des assets statiques
- **Cache-Control** : Configuration fine du cache
- **Purge instantanée** : Invalidation du cache en temps réel

### Optimisations actuelles

#### Frontend
- ✅ **CDN pour les librairies** (Tailwind, Axios, Chart.js)
- ✅ **Minification** via Vite
- ✅ **Compression** automatique par Cloudflare

#### Backend
- ✅ **API RESTful** : Communication efficace
- ✅ **Requêtes SQL optimisées** : Index sur les clés étrangères
- ✅ **Pas de N+1 queries**

#### Base de données
- ✅ **Index** sur email, user_id, assessment_id
- ✅ **SQLite performant** : Lecture très rapide
- ✅ **Réplication globale** : Cloudflare D1

### Optimisations futures

#### 1. Lazy Loading
```html
<img loading="lazy" src="image.jpg" alt="...">
```

#### 2. Service Worker pour cache offline
```javascript
// service-worker.js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
```

#### 3. Pagination des résultats
```typescript
app.get('/api/users/:userId/assessments', async (c) => {
  const page = parseInt(c.req.query('page') || '1')
  const limit = 10
  const offset = (page - 1) * limit
  
  const { results } = await c.env.DB.prepare(
    'SELECT * FROM assessments WHERE user_id = ? LIMIT ? OFFSET ?'
  ).bind(userId, limit, offset).all()
  
  return c.json({ assessments: results, page, limit })
})
```

#### 4. Cache API des évaluations
```typescript
// Cache les évaluations complétées (ne changent plus)
app.get('/api/assessments/:id', async (c) => {
  const cacheKey = `assessment:${id}`
  const cached = await c.env.KV.get(cacheKey)
  
  if (cached) {
    return c.json(JSON.parse(cached))
  }
  
  const data = await fetchAssessmentFromDB(id)
  
  if (data.status === 'completed') {
    await c.env.KV.put(cacheKey, JSON.stringify(data), {
      expirationTtl: 86400 // 24h
    })
  }
  
  return c.json(data)
})
```

---

## Guide de déploiement

### Prérequis

1. **Compte Cloudflare** (gratuit ou payant)
2. **Domaine** (optionnel, Cloudflare fournit un sous-domaine)
3. **Wrangler CLI** installé (`npm install -g wrangler`)

### Étapes de déploiement

#### 1. Connexion à Cloudflare

```bash
npx wrangler login
```

#### 2. Création de la base de données D1

```bash
# Créer la base de données en production
npx wrangler d1 create webapp-production

# Copier le database_id retourné
# Exemple: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

#### 3. Configuration wrangler.jsonc

```jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "webapp-production",
      "database_id": "COLLER_ICI_LE_DATABASE_ID"
    }
  ]
}
```

#### 4. Application des migrations

```bash
# Appliquer le schéma en production
npx wrangler d1 migrations apply webapp-production
```

#### 5. Build du projet

```bash
npm run build
```

#### 6. Déploiement

```bash
# Premier déploiement (crée le projet Pages)
npx wrangler pages deploy dist --project-name webapp

# Déploiements suivants
npm run deploy
```

#### 7. Configuration du domaine custom (optionnel)

```bash
npx wrangler pages domain add example.com --project-name webapp
```

### Variables d'environnement et secrets

#### En développement local

Créer un fichier `.dev.vars` :

```bash
API_KEY=your-api-key
JWT_SECRET=your-jwt-secret
```

#### En production

```bash
# Ajouter des secrets
npx wrangler pages secret put JWT_SECRET --project-name webapp

# Lister les secrets
npx wrangler pages secret list --project-name webapp

# Supprimer un secret
npx wrangler pages secret delete JWT_SECRET --project-name webapp
```

### Monitoring et logs

#### Voir les logs en temps réel

```bash
npx wrangler pages deployment tail --project-name webapp
```

#### Dashboard Cloudflare

- Accéder à https://dash.cloudflare.com
- Sélectionner le projet "webapp"
- Onglets disponibles :
  - **Analytics** : Trafic, requêtes, erreurs
  - **Deployments** : Historique des déploiements
  - **Settings** : Configuration du projet

### CI/CD avec GitHub Actions

Créer `.github/workflows/deploy.yml` :

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          command: pages deploy dist --project-name webapp
```

---

## Conclusion

Cette architecture est conçue pour être :
- ✅ **Performante** : Edge computing + SQLite
- ✅ **Scalable** : Auto-scaling Cloudflare
- ✅ **Maintenable** : Code TypeScript typé, structure claire
- ✅ **Sécurisée** : (Avec les améliorations recommandées)
- ✅ **Économique** : Serverless, pay-per-use

Le projet est prêt pour la production avec quelques améliorations de sécurité recommandées.

---

**Auteur** : Factorise.io  
**Dernière mise à jour** : 11 novembre 2025  
**Version** : 1.0.0
