// Use the enhanced V2 questions from assessment-questions-v2.js based on current language
const currentLang = getCurrentLang();
const assessmentQuestions = getAssessmentQuestionsV2(currentLang);

// Fallback for old structure (will be overridden by i18n version above)
const assessmentQuestionsOld = {
  vision: {
    title: "Vision & Stratégie IA",
    icon: "fa-lightbulb",
    questions: [
      {
        key: "q1",
        text: "Votre organisation a-t-elle une vision claire et documentée de l'utilisation de l'IA ?",
        description: "Une vision stratégique formalisée guide les initiatives IA"
      },
      {
        key: "q2",
        text: "Les objectifs business liés à l'IA sont-ils alignés avec la stratégie globale de l'entreprise ?",
        description: "L'alignement stratégique assure la cohérence des investissements IA"
      },
      {
        key: "q3",
        text: "Existe-t-il un budget dédié aux initiatives d'intelligence artificielle ?",
        description: "Un budget alloué démontre l'engagement de l'organisation"
      },
      {
        key: "q4",
        text: "Les dirigeants soutiennent-ils activement les projets d'IA ?",
        description: "Le sponsorship exécutif est crucial pour le succès des projets IA"
      }
    ]
  },
  data: {
    title: "Données & Gouvernance",
    icon: "fa-database",
    questions: [
      {
        key: "q1",
        text: "Vos données sont-elles centralisées et facilement accessibles pour les projets d'IA ?",
        description: "L'accessibilité des données est fondamentale pour l'IA"
      },
      {
        key: "q2",
        text: "Avez-vous mis en place une gouvernance des données (qualité, sécurité, conformité) ?",
        description: "La gouvernance assure la fiabilité et la conformité des données"
      },
      {
        key: "q3",
        text: "Disposez-vous d'une infrastructure de données moderne (data lake, data warehouse) ?",
        description: "L'infrastructure moderne facilite l'exploitation des données"
      },
      {
        key: "q4",
        text: "Vos données sont-elles de qualité suffisante pour entraîner des modèles d'IA ?",
        description: "La qualité des données détermine la performance des modèles"
      }
    ]
  },
  technologie: {
    title: "Technologies & Outils",
    icon: "fa-cogs",
    questions: [
      {
        key: "q1",
        text: "Utilisez-vous des plateformes ou outils d'IA (cloud IA, AutoML, MLOps) ?",
        description: "Les outils modernes accélèrent le développement de solutions IA"
      },
      {
        key: "q2",
        text: "Avez-vous des capacités de calcul adaptées (GPU, cloud computing) ?",
        description: "Les ressources de calcul sont essentielles pour l'IA"
      },
      {
        key: "q3",
        text: "Disposez-vous d'environnements de développement et production séparés ?",
        description: "La séparation des environnements assure la stabilité"
      },
      {
        key: "q4",
        text: "Avez-vous mis en place des processus MLOps pour industrialiser l'IA ?",
        description: "MLOps permet de scaler et maintenir les modèles en production"
      }
    ]
  },
  organisation: {
    title: "Organisation & Compétences",
    icon: "fa-users",
    questions: [
      {
        key: "q1",
        text: "Disposez-vous d'une équipe dédiée à l'IA (data scientists, ML engineers) ?",
        description: "Les compétences spécialisées sont nécessaires pour l'IA"
      },
      {
        key: "q2",
        text: "Vos équipes suivent-elles des formations régulières sur l'IA ?",
        description: "La formation continue maintient les compétences à jour"
      },
      {
        key: "q3",
        text: "La collaboration entre métiers et équipes techniques est-elle efficace ?",
        description: "La collaboration cross-fonctionnelle favorise l'adoption de l'IA"
      },
      {
        key: "q4",
        text: "Avez-vous une culture d'innovation et d'expérimentation autour de l'IA ?",
        description: "La culture d'innovation encourage l'adoption de l'IA"
      }
    ]
  },
  ethique: {
    title: "Éthique & Conformité",
    icon: "fa-balance-scale",
    questions: [
      {
        key: "q1",
        text: "Avez-vous défini des principes éthiques pour l'utilisation de l'IA ?",
        description: "L'éthique guide les décisions liées à l'IA"
      },
      {
        key: "q2",
        text: "Assurez-vous la transparence et l'explicabilité de vos modèles d'IA ?",
        description: "La transparence renforce la confiance dans l'IA"
      },
      {
        key: "q3",
        text: "Avez-vous des processus pour identifier et mitiger les biais dans l'IA ?",
        description: "La détection des biais assure l'équité des modèles"
      },
      {
        key: "q4",
        text: "Êtes-vous en conformité avec les régulations IA (RGPD, AI Act) ?",
        description: "La conformité réglementaire est obligatoire"
      }
    ]
  }
};

// État de l'application
let currentCategoryIndex = 0;
let assessmentId = null;
let answers = {};
const categories = Object.keys(assessmentQuestions);

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  // Vérifier l'authentification
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  if (!user) {
    window.location.href = '/login';
    return;
  }
  
  // Créer une nouvelle évaluation
  createAssessment(user.id);
  
  // Afficher la première catégorie
  renderCategory();
});

// Créer une nouvelle évaluation
async function createAssessment(userId) {
  try {
    const response = await axios.post('/api/assessments', {
      userId: userId,
      assessmentType: 'ia_maturity'
    });
    assessmentId = response.data.assessmentId;
  } catch (error) {
    console.error('Erreur création évaluation:', error);
    alert('Erreur lors de la création de l\'évaluation');
  }
}

// Afficher une catégorie de questions
function renderCategory() {
  const categoryKey = categories[currentCategoryIndex];
  const category = assessmentQuestions[categoryKey];
  
  const container = document.getElementById('questionsContainer');
  container.innerHTML = `
    <div class="mb-8">
      <div class="flex items-center mb-4">
        <i class="fas ${category.icon} text-3xl text-indigo-600 mr-4"></i>
        <h2 class="text-2xl font-bold">${category.title}</h2>
      </div>
      <p class="text-gray-600 mb-6">Catégorie ${currentCategoryIndex + 1} sur ${categories.length}</p>
    </div>
    
    <div class="space-y-8">
      ${category.questions.map((q, idx) => `
        <div class="border-b pb-6">
          <p class="font-semibold mb-2">${idx + 1}. ${q.text}</p>
          <p class="text-sm text-gray-600 mb-4">${q.description}</p>
          
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">Pas du tout</span>
            <div class="flex space-x-3">
              ${[1, 2, 3, 4, 5].map(value => `
                <label class="cursor-pointer">
                  <input type="radio" 
                         name="${categoryKey}_${q.key}" 
                         value="${value}"
                         ${answers[categoryKey + '_' + q.key] == value ? 'checked' : ''}
                         onchange="saveAnswer('${categoryKey}', '${q.key}', ${value})"
                         class="hidden peer">
                  <div class="w-12 h-12 flex items-center justify-center border-2 rounded-lg 
                              peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600
                              hover:border-indigo-400 transition-all">
                    ${value}
                  </div>
                </label>
              `).join('')}
            </div>
            <span class="text-sm text-gray-500">Totalement</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  // Mettre à jour les boutons de navigation
  document.getElementById('prevBtn').disabled = currentCategoryIndex === 0;
  const nextBtn = document.getElementById('nextBtn');
  
  if (currentCategoryIndex === categories.length - 1) {
    nextBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Terminer l\'évaluation';
    nextBtn.onclick = submitAssessment;
  } else {
    nextBtn.innerHTML = 'Suivant <i class="fas fa-arrow-right ml-2"></i>';
    nextBtn.onclick = nextCategory;
  }
  
  updateProgress();
}

// Sauvegarder une réponse
function saveAnswer(category, questionKey, value) {
  answers[category + '_' + questionKey] = value;
  updateProgress();
}

// Catégorie suivante
function nextCategory() {
  // Vérifier que toutes les questions sont répondues
  const categoryKey = categories[currentCategoryIndex];
  const category = assessmentQuestions[categoryKey];
  const allAnswered = category.questions.every(q => 
    answers[categoryKey + '_' + q.key] !== undefined
  );
  
  if (!allAnswered) {
    alert('Veuillez répondre à toutes les questions avant de continuer');
    return;
  }
  
  currentCategoryIndex++;
  renderCategory();
  window.scrollTo(0, 0);
}

// Catégorie précédente
function previousCategory() {
  currentCategoryIndex--;
  renderCategory();
  window.scrollTo(0, 0);
}

// Mettre à jour la barre de progression
function updateProgress() {
  const totalQuestions = categories.reduce((sum, cat) => 
    sum + assessmentQuestions[cat].questions.length, 0
  );
  const answeredQuestions = Object.keys(answers).length;
  const progress = Math.round((answeredQuestions / totalQuestions) * 100);
  
  document.getElementById('progressBar').style.width = progress + '%';
  document.getElementById('progressText').textContent = progress + '%';
}

// Soumettre l'évaluation
async function submitAssessment() {
  // Vérifier que toutes les questions sont répondues
  const categoryKey = categories[currentCategoryIndex];
  const category = assessmentQuestions[categoryKey];
  const allAnswered = category.questions.every(q => 
    answers[categoryKey + '_' + q.key] !== undefined
  );
  
  if (!allAnswered) {
    alert('Veuillez répondre à toutes les questions avant de terminer');
    return;
  }
  
  // Formater les réponses pour l'API
  const formattedAnswers = [];
  for (const [key, value] of Object.entries(answers)) {
    const [category, questionKey] = key.split('_');
    formattedAnswers.push({
      category,
      questionKey,
      value: parseInt(value)
    });
  }
  
  try {
    const response = await axios.post(`/api/assessments/${assessmentId}/answers`, {
      answers: formattedAnswers
    });
    
    // Rediriger vers la page de résultats
    window.location.href = `/results?id=${assessmentId}&score=${response.data.score}`;
  } catch (error) {
    console.error('Erreur soumission:', error);
    alert('Erreur lors de la soumission de l\'évaluation');
  }
}
