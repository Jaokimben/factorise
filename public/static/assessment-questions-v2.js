// Enhanced Assessment Questions - Professional AI Maturity Assessment
// Based on industry best practices and comprehensive frameworks

const assessmentQuestionsV2 = {
  fr: {
    strategy: {
      title: "Stratégie & Vision IA",
      icon: "fa-lightbulb",
      description: "Alignement stratégique des initiatives IA avec les objectifs business",
      questions: [
        {
          key: "q1",
          text: "Votre organisation a-t-elle une stratégie IA formalisée et documentée ?",
          description: "Une stratégie écrite avec objectifs, budget et timeline"
        },
        {
          key: "q2",
          text: "Les initiatives IA sont-elles alignées avec les objectifs business prioritaires ?",
          description: "Lien direct entre projets IA et KPIs métier"
        },
        {
          key: "q3",
          text: "Existe-t-il un sponsorship exécutif pour les initiatives IA ?",
          description: "Implication active de la direction générale"
        },
        {
          key: "q4",
          text: "Avez-vous défini des cas d'usage IA prioritaires avec ROI estimé ?",
          description: "Business cases chiffrés pour chaque initiative"
        }
      ]
    },
    governance: {
      title: "Gouvernance & Politique",
      icon: "fa-shield-alt",
      description: "Cadre de gouvernance pour une utilisation responsable de l'IA",
      questions: [
        {
          key: "q1",
          text: "Existe-t-il un comité de gouvernance IA au sein de l'organisation ?",
          description: "Instance dédiée aux décisions et supervision IA"
        },
        {
          key: "q2",
          text: "Avez-vous défini des principes éthiques et des guidelines pour l'IA ?",
          description: "Charte éthique formalisée et communiquée"
        },
        {
          key: "q3",
          text: "Des processus d'approbation sont-ils en place pour les projets IA ?",
          description: "Validation systématique avant déploiement"
        },
        {
          key: "q4",
          text: "Assurez-vous la conformité avec les régulations (RGPD, AI Act) ?",
          description: "Processus de conformité réglementaire actifs"
        }
      ]
    },
    data: {
      title: "Données & Infrastructure",
      icon: "fa-database",
      description: "Qualité, accessibilité et gouvernance des données",
      questions: [
        {
          key: "q1",
          text: "Vos données sont-elles centralisées dans une infrastructure moderne ?",
          description: "Data lake, data warehouse ou lakehouse opérationnel"
        },
        {
          key: "q2",
          text: "Avez-vous mis en place une gouvernance des données (qualité, catalogage) ?",
          description: "Processus de data quality et metadata management"
        },
        {
          key: "q3",
          text: "Les données sont-elles facilement accessibles aux équipes IA/ML ?",
          description: "APIs, outils en libre-service pour les data scientists"
        },
        {
          key: "q4",
          text: "Disposez-vous de pipelines de données automatisés et fiables ?",
          description: "ETL/ELT automatisés avec monitoring"
        }
      ]
    },
    models: {
      title: "Modèles & Développement",
      icon: "fa-brain",
      description: "Pratiques de développement et validation des modèles IA",
      questions: [
        {
          key: "q1",
          text: "Utilisez-vous des méthodologies structurées pour le développement IA ?",
          description: "CRISP-DM, agile ML ou frameworks similaires"
        },
        {
          key: "q2",
          text: "Les modèles sont-ils versionnés et leurs expériences trackées ?",
          description: "MLflow, Weights & Biases ou outils similaires"
        },
        {
          key: "q3",
          text: "Effectuez-vous une validation rigoureuse des modèles (test sets, validation croisée) ?",
          description: "Processus de validation avant déploiement"
        },
        {
          key: "q4",
          text: "Documentez-vous les modèles (architecture, performances, limitations) ?",
          description: "Model cards ou documentation équivalente"
        }
      ]
    },
    mlops: {
      title: "MLOps & Production",
      icon: "fa-cogs",
      description: "Industrialisation et opérationnalisation des modèles IA",
      questions: [
        {
          key: "q1",
          text: "Avez-vous mis en place des pipelines CI/CD pour les modèles ML ?",
          description: "Déploiement automatisé avec tests"
        },
        {
          key: "q2",
          text: "Les modèles en production sont-ils monitorés en continu ?",
          description: "Surveillance de la performance et data drift"
        },
        {
          key: "q3",
          text: "Disposez-vous de processus de rollback et de versioning en production ?",
          description: "Capacité à revenir à une version précédente"
        },
        {
          key: "q4",
          text: "Avez-vous des pratiques de réentraînement automatisé des modèles ?",
          description: "Pipelines d'automatisation du réentraînement"
        }
      ]
    },
    security: {
      title: "Sécurité & Confidentialité",
      icon: "fa-lock",
      description: "Protection des données et sécurité des modèles IA",
      questions: [
        {
          key: "q1",
          text: "Les données sensibles sont-elles protégées (chiffrement, anonymisation) ?",
          description: "Mesures de protection des données personnelles"
        },
        {
          key: "q2",
          text: "Avez-vous mis en place des contrôles d'accès pour les modèles et données ?",
          description: "IAM et gestion des permissions"
        },
        {
          key: "q3",
          text: "Les modèles sont-ils protégés contre les attaques adversariales ?",
          description: "Tests de robustesse et sécurité des modèles"
        },
        {
          key: "q4",
          text: "Effectuez-vous des audits de sécurité réguliers ?",
          description: "Revues de sécurité périodiques"
        }
      ]
    },
    talent: {
      title: "Talents & Organisation",
      icon: "fa-users",
      description: "Compétences, structure d'équipe et culture",
      questions: [
        {
          key: "q1",
          text: "Disposez-vous d'une équipe IA/ML dédiée avec les compétences nécessaires ?",
          description: "Data scientists, ML engineers, data engineers"
        },
        {
          key: "q2",
          text: "Des programmes de formation continue sur l'IA sont-ils en place ?",
          description: "Upskilling et reskilling réguliers"
        },
        {
          key: "q3",
          text: "La collaboration entre métiers et équipes techniques est-elle efficace ?",
          description: "Pratiques DevOps et agilité cross-fonctionnelle"
        },
        {
          key: "q4",
          text: "Avez-vous une culture d'innovation et d'expérimentation ?",
          description: "Encouragement de l'innovation et droit à l'erreur"
        }
      ]
    },
    measurement: {
      title: "Mesure & ROI",
      icon: "fa-chart-line",
      description: "Métriques, KPIs et mesure de la valeur créée",
      questions: [
        {
          key: "q1",
          text: "Suivez-vous des KPIs spécifiques pour mesurer l'impact des projets IA ?",
          description: "Métriques business et techniques définies"
        },
        {
          key: "q2",
          text: "Mesurez-vous le ROI des initiatives IA de manière systématique ?",
          description: "Calcul de retour sur investissement documenté"
        },
        {
          key: "q3",
          text: "Les performances des modèles en production sont-elles trackées ?",
          description: "Dashboards de monitoring opérationnel"
        },
        {
          key: "q4",
          text: "Effectuez-vous des post-mortems et retours d'expérience sur les projets ?",
          description: "Apprentissage continu et amélioration"
        }
      ]
    },
    adoption: {
      title: "Adoption & Change Management",
      icon: "fa-rocket",
      description: "Déploiement et adoption par les utilisateurs finaux",
      questions: [
        {
          key: "q1",
          text: "Avez-vous des processus pour faciliter l'adoption des solutions IA ?",
          description: "Change management et accompagnement utilisateurs"
        },
        {
          key: "q2",
          text: "Les utilisateurs finaux sont-ils formés aux outils IA déployés ?",
          description: "Formation et support utilisateur"
        },
        {
          key: "q3",
          text: "Collectez-vous les feedbacks utilisateurs pour améliorer les solutions ?",
          description: "Boucle de feedback active"
        },
        {
          key: "q4",
          text: "Les solutions IA sont-elles intégrées dans les processus métier existants ?",
          description: "Intégration seamless dans les workflows"
        }
      ]
    },
    ethics: {
      title: "Éthique & Responsabilité",
      icon: "fa-balance-scale",
      description: "IA responsable, biais et transparence",
      questions: [
        {
          key: "q1",
          text: "Effectuez-vous des évaluations de biais sur vos modèles IA ?",
          description: "Tests de fairness et détection de biais"
        },
        {
          key: "q2",
          text: "Assurez-vous l'explicabilité de vos modèles (XAI) ?",
          description: "Capacité à expliquer les décisions des modèles"
        },
        {
          key: "q3",
          text: "Avez-vous défini des processus pour gérer les impacts sociétaux de l'IA ?",
          description: "Évaluation d'impact social et environnemental"
        },
        {
          key: "q4",
          text: "Existe-t-il une transparence sur l'utilisation de l'IA auprès des parties prenantes ?",
          description: "Communication claire sur l'usage de l'IA"
        }
      ]
    }
  },
  
  en: {
    strategy: {
      title: "Strategy & AI Vision",
      icon: "fa-lightbulb",
      description: "Strategic alignment of AI initiatives with business objectives",
      questions: [
        {
          key: "q1",
          text: "Does your organization have a formalized and documented AI strategy?",
          description: "Written strategy with objectives, budget and timeline"
        },
        {
          key: "q2",
          text: "Are AI initiatives aligned with priority business objectives?",
          description: "Direct link between AI projects and business KPIs"
        },
        {
          key: "q3",
          text: "Is there executive sponsorship for AI initiatives?",
          description: "Active involvement from senior leadership"
        },
        {
          key: "q4",
          text: "Have you defined priority AI use cases with estimated ROI?",
          description: "Quantified business cases for each initiative"
        }
      ]
    },
    governance: {
      title: "Governance & Policy",
      icon: "fa-shield-alt",
      description: "Governance framework for responsible AI use",
      questions: [
        {
          key: "q1",
          text: "Is there an AI governance committee within the organization?",
          description: "Dedicated body for AI decisions and oversight"
        },
        {
          key: "q2",
          text: "Have you defined ethical principles and guidelines for AI?",
          description: "Formalized and communicated ethical charter"
        },
        {
          key: "q3",
          text: "Are approval processes in place for AI projects?",
          description: "Systematic validation before deployment"
        },
        {
          key: "q4",
          text: "Do you ensure compliance with regulations (GDPR, AI Act)?",
          description: "Active regulatory compliance processes"
        }
      ]
    },
    data: {
      title: "Data & Infrastructure",
      icon: "fa-database",
      description: "Data quality, accessibility and governance",
      questions: [
        {
          key: "q1",
          text: "Is your data centralized in modern infrastructure?",
          description: "Operational data lake, warehouse or lakehouse"
        },
        {
          key: "q2",
          text: "Have you implemented data governance (quality, cataloging)?",
          description: "Data quality and metadata management processes"
        },
        {
          key: "q3",
          text: "Is data easily accessible to AI/ML teams?",
          description: "APIs, self-service tools for data scientists"
        },
        {
          key: "q4",
          text: "Do you have automated and reliable data pipelines?",
          description: "Automated ETL/ELT with monitoring"
        }
      ]
    },
    models: {
      title: "Models & Development",
      icon: "fa-brain",
      description: "AI model development and validation practices",
      questions: [
        {
          key: "q1",
          text: "Do you use structured methodologies for AI development?",
          description: "CRISP-DM, agile ML or similar frameworks"
        },
        {
          key: "q2",
          text: "Are models versioned and experiments tracked?",
          description: "MLflow, Weights & Biases or similar tools"
        },
        {
          key: "q3",
          text: "Do you perform rigorous model validation (test sets, cross-validation)?",
          description: "Validation process before deployment"
        },
        {
          key: "q4",
          text: "Do you document models (architecture, performance, limitations)?",
          description: "Model cards or equivalent documentation"
        }
      ]
    },
    mlops: {
      title: "MLOps & Production",
      icon: "fa-cogs",
      description: "Industrialization and operationalization of AI models",
      questions: [
        {
          key: "q1",
          text: "Have you implemented CI/CD pipelines for ML models?",
          description: "Automated deployment with testing"
        },
        {
          key: "q2",
          text: "Are production models continuously monitored?",
          description: "Performance and data drift monitoring"
        },
        {
          key: "q3",
          text: "Do you have rollback and versioning processes in production?",
          description: "Ability to revert to previous version"
        },
        {
          key: "q4",
          text: "Do you have automated model retraining practices?",
          description: "Retraining automation pipelines"
        }
      ]
    },
    security: {
      title: "Security & Privacy",
      icon: "fa-lock",
      description: "Data protection and AI model security",
      questions: [
        {
          key: "q1",
          text: "Is sensitive data protected (encryption, anonymization)?",
          description: "Personal data protection measures"
        },
        {
          key: "q2",
          text: "Have you implemented access controls for models and data?",
          description: "IAM and permission management"
        },
        {
          key: "q3",
          text: "Are models protected against adversarial attacks?",
          description: "Model robustness and security testing"
        },
        {
          key: "q4",
          text: "Do you conduct regular security audits?",
          description: "Periodic security reviews"
        }
      ]
    },
    talent: {
      title: "Talent & Organization",
      icon: "fa-users",
      description: "Skills, team structure and culture",
      questions: [
        {
          key: "q1",
          text: "Do you have a dedicated AI/ML team with necessary skills?",
          description: "Data scientists, ML engineers, data engineers"
        },
        {
          key: "q2",
          text: "Are continuous AI training programs in place?",
          description: "Regular upskilling and reskilling"
        },
        {
          key: "q3",
          text: "Is collaboration between business and technical teams effective?",
          description: "DevOps practices and cross-functional agility"
        },
        {
          key: "q4",
          text: "Do you have a culture of innovation and experimentation?",
          description: "Encouraging innovation and right to fail"
        }
      ]
    },
    measurement: {
      title: "Measurement & ROI",
      icon: "fa-chart-line",
      description: "Metrics, KPIs and value measurement",
      questions: [
        {
          key: "q1",
          text: "Do you track specific KPIs to measure AI project impact?",
          description: "Defined business and technical metrics"
        },
        {
          key: "q2",
          text: "Do you systematically measure ROI of AI initiatives?",
          description: "Documented return on investment calculation"
        },
        {
          key: "q3",
          text: "Are production model performances tracked?",
          description: "Operational monitoring dashboards"
        },
        {
          key: "q4",
          text: "Do you conduct post-mortems and lessons learned on projects?",
          description: "Continuous learning and improvement"
        }
      ]
    },
    adoption: {
      title: "Adoption & Change Management",
      icon: "fa-rocket",
      description: "Deployment and end-user adoption",
      questions: [
        {
          key: "q1",
          text: "Do you have processes to facilitate AI solution adoption?",
          description: "Change management and user support"
        },
        {
          key: "q2",
          text: "Are end users trained on deployed AI tools?",
          description: "User training and support"
        },
        {
          key: "q3",
          text: "Do you collect user feedback to improve solutions?",
          description: "Active feedback loop"
        },
        {
          key: "q4",
          text: "Are AI solutions integrated into existing business processes?",
          description: "Seamless integration into workflows"
        }
      ]
    },
    ethics: {
      title: "Ethics & Responsibility",
      icon: "fa-balance-scale",
      description: "Responsible AI, bias and transparency",
      questions: [
        {
          key: "q1",
          text: "Do you perform bias assessments on your AI models?",
          description: "Fairness testing and bias detection"
        },
        {
          key: "q2",
          text: "Do you ensure model explainability (XAI)?",
          description: "Ability to explain model decisions"
        },
        {
          key: "q3",
          text: "Have you defined processes to manage AI societal impacts?",
          description: "Social and environmental impact assessment"
        },
        {
          key: "q4",
          text: "Is there transparency about AI use to stakeholders?",
          description: "Clear communication on AI usage"
        }
      ]
    }
  }
};

// Get enhanced assessment questions
function getAssessmentQuestionsV2(lang = 'fr') {
  return assessmentQuestionsV2[lang] || assessmentQuestionsV2['fr'];
}

// Maturity levels
const maturityLevels = {
  fr: {
    1: { name: "Initial / Ad Hoc", description: "Pas de processus formalisés, initiatives ponctuelles" },
    2: { name: "Répétable", description: "Quelques processus en place, reproductibles" },
    3: { name: "Défini", description: "Processus documentés et standardisés" },
    4: { name: "Géré", description: "Processus mesurés et contrôlés" },
    5: { name: "Optimisé", description: "Amélioration continue et innovation" }
  },
  en: {
    1: { name: "Initial / Ad Hoc", description: "No formalized processes, ad-hoc initiatives" },
    2: { name: "Repeatable", description: "Some processes in place, reproducible" },
    3: { name: "Defined", description: "Documented and standardized processes" },
    4: { name: "Managed", description: "Measured and controlled processes" },
    5: { name: "Optimized", description: "Continuous improvement and innovation" }
  }
};

function getMaturityLevel(score, lang = 'fr') {
  // Score is 0-100, map to level 1-5
  const level = Math.ceil(score / 20) || 1;
  return maturityLevels[lang][level];
}
