// Assessment questions in French and English
const assessmentQuestionsI18n = {
  fr: {
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
  },
  
  en: {
    vision: {
      title: "Vision & AI Strategy",
      icon: "fa-lightbulb",
      questions: [
        {
          key: "q1",
          text: "Does your organization have a clear and documented vision for AI use?",
          description: "A formalized strategic vision guides AI initiatives"
        },
        {
          key: "q2",
          text: "Are AI-related business objectives aligned with the company's overall strategy?",
          description: "Strategic alignment ensures consistency in AI investments"
        },
        {
          key: "q3",
          text: "Is there a dedicated budget for artificial intelligence initiatives?",
          description: "An allocated budget demonstrates organizational commitment"
        },
        {
          key: "q4",
          text: "Do leaders actively support AI projects?",
          description: "Executive sponsorship is crucial for AI project success"
        }
      ]
    },
    data: {
      title: "Data & Governance",
      icon: "fa-database",
      questions: [
        {
          key: "q1",
          text: "Is your data centralized and easily accessible for AI projects?",
          description: "Data accessibility is fundamental for AI"
        },
        {
          key: "q2",
          text: "Have you implemented data governance (quality, security, compliance)?",
          description: "Governance ensures data reliability and compliance"
        },
        {
          key: "q3",
          text: "Do you have modern data infrastructure (data lake, data warehouse)?",
          description: "Modern infrastructure facilitates data exploitation"
        },
        {
          key: "q4",
          text: "Is your data of sufficient quality to train AI models?",
          description: "Data quality determines model performance"
        }
      ]
    },
    technologie: {
      title: "Technologies & Tools",
      icon: "fa-cogs",
      questions: [
        {
          key: "q1",
          text: "Do you use AI platforms or tools (AI cloud, AutoML, MLOps)?",
          description: "Modern tools accelerate AI solution development"
        },
        {
          key: "q2",
          text: "Do you have adequate computing capabilities (GPU, cloud computing)?",
          description: "Computing resources are essential for AI"
        },
        {
          key: "q3",
          text: "Do you have separate development and production environments?",
          description: "Environment separation ensures stability"
        },
        {
          key: "q4",
          text: "Have you implemented MLOps processes to industrialize AI?",
          description: "MLOps enables scaling and maintaining models in production"
        }
      ]
    },
    organisation: {
      title: "Organization & Skills",
      icon: "fa-users",
      questions: [
        {
          key: "q1",
          text: "Do you have a dedicated AI team (data scientists, ML engineers)?",
          description: "Specialized skills are necessary for AI"
        },
        {
          key: "q2",
          text: "Do your teams receive regular AI training?",
          description: "Continuous training keeps skills up to date"
        },
        {
          key: "q3",
          text: "Is collaboration between business and technical teams effective?",
          description: "Cross-functional collaboration promotes AI adoption"
        },
        {
          key: "q4",
          text: "Do you have a culture of innovation and experimentation around AI?",
          description: "Innovation culture encourages AI adoption"
        }
      ]
    },
    ethique: {
      title: "Ethics & Compliance",
      icon: "fa-balance-scale",
      questions: [
        {
          key: "q1",
          text: "Have you defined ethical principles for AI use?",
          description: "Ethics guide AI-related decisions"
        },
        {
          key: "q2",
          text: "Do you ensure transparency and explainability of your AI models?",
          description: "Transparency builds trust in AI"
        },
        {
          key: "q3",
          text: "Do you have processes to identify and mitigate bias in AI?",
          description: "Bias detection ensures model fairness"
        },
        {
          key: "q4",
          text: "Are you compliant with AI regulations (GDPR, AI Act)?",
          description: "Regulatory compliance is mandatory"
        }
      ]
    }
  }
};

// Get assessment questions for current language
function getAssessmentQuestions(lang = 'fr') {
  return assessmentQuestionsI18n[lang] || assessmentQuestionsI18n['fr'];
}
