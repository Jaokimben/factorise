/**
 * Use Cases Data for Factor AI Platform
 * Real-world application examples by industry
 * Bilingual FR/EN support
 */

const useCasesData = {
  fr: {
    hero: {
      title: "Cas d'Usage IA",
      subtitle: "Des solutions IA concrètes adaptées à votre industrie",
      description: "Découvrez comment l'IA transforme différents secteurs avec des cas d'usage réels et des résultats mesurables."
    },
    
    categories: [
      {
        id: "customer-service",
        name: "Service Client",
        icon: "fa-headset",
        color: "from-blue-500 to-cyan-500",
        description: "Automatisez et améliorez l'expérience client avec l'IA",
        useCases: [
          {
            title: "Assistant Client Intelligent 24/7",
            challenge: "Gestion du volume élevé de demandes clients et temps de réponse lents",
            solution: "Chatbot IA multilingue avec compréhension du contexte et escalade intelligente",
            benefits: [
              "Disponibilité 24/7 sans coûts supplémentaires",
              "Résolution de 70% des demandes sans intervention humaine",
              "Temps de réponse moyen < 2 secondes",
              "Support dans 15+ langues simultanément"
            ],
            technologies: ["GPT-4", "Dialogflow", "Sentiment Analysis", "NLU"],
            metrics: {
              "Réduction coûts": "-65%",
              "Satisfaction": "+42%",
              "Tickets résolus": "+300%"
            },
            industry: "E-commerce, SaaS, Télécoms"
          },
          {
            title: "Analyse Automatique des Feedbacks",
            challenge: "Milliers de retours clients non structurés impossibles à analyser manuellement",
            solution: "IA d'analyse de sentiment et extraction automatique d'insights",
            benefits: [
              "Classification automatique par catégorie et urgence",
              "Détection des tendances et problèmes récurrents",
              "Alertes en temps réel pour problèmes critiques",
              "Rapports d'insights actionnables"
            ],
            technologies: ["NLP", "Sentiment Analysis", "Topic Modeling", "ML Classification"],
            metrics: {
              "Temps analyse": "-85%",
              "Insights détectés": "+150%",
              "Réactivité": "+70%"
            },
            industry: "Retail, Hôtellerie, Services"
          }
        ]
      },
      
      {
        id: "sales-marketing",
        name: "Ventes & Marketing",
        icon: "fa-chart-line",
        color: "from-purple-500 to-pink-500",
        description: "Optimisez vos campagnes et accélérez les ventes avec l'IA",
        useCases: [
          {
            title: "Lead Scoring Prédictif",
            challenge: "Priorisation manuelle des leads avec faible taux de conversion",
            solution: "Modèle ML de scoring basé sur 50+ signaux comportementaux",
            benefits: [
              "Priorisation automatique des leads à fort potentiel",
              "Prédiction de la probabilité de conversion",
              "Recommandations d'actions personnalisées",
              "Intégration CRM temps réel"
            ],
            technologies: ["Machine Learning", "Predictive Analytics", "CRM Integration", "Feature Engineering"],
            metrics: {
              "Taux conversion": "+45%",
              "Temps commercial": "-30%",
              "ROI campaigns": "+120%"
            },
            industry: "B2B SaaS, Finance, Immobilier"
          },
          {
            title: "Génération de Contenu Marketing",
            challenge: "Production lente et coûteuse de contenu pour multiples canaux",
            solution: "Agent IA de création de contenu adapté à la marque et au canal",
            benefits: [
              "Génération de posts LinkedIn, tweets, emails en minutes",
              "Respect automatique du tone of voice de la marque",
              "Adaptation du contenu par canal et audience",
              "Planification et publication automatisées"
            ],
            technologies: ["GPT-4", "Fine-tuning", "Brand Voice AI", "Content Optimization"],
            metrics: {
              "Vitesse production": "+500%",
              "Coûts contenu": "-70%",
              "Engagement": "+35%"
            },
            industry: "Marketing Agencies, E-commerce, Media"
          }
        ]
      },
      
      {
        id: "operations",
        name: "Opérations & Logistique",
        icon: "fa-cogs",
        color: "from-green-500 to-teal-500",
        description: "Optimisez la chaîne logistique et les opérations",
        useCases: [
          {
            title: "Optimisation des Inventaires",
            challenge: "Sur-stock et ruptures de stock coûtant des millions",
            solution: "IA de prévision de la demande et optimisation multi-contraintes",
            benefits: [
              "Prévisions de demande avec 95%+ de précision",
              "Optimisation automatique des niveaux de stock",
              "Réduction des coûts de stockage et obsolescence",
              "Alertes préventives de rupture"
            ],
            technologies: ["Time Series Forecasting", "Optimization Algorithms", "Demand Planning AI"],
            metrics: {
              "Coûts stock": "-35%",
              "Ruptures": "-80%",
              "Rotation": "+45%"
            },
            industry: "Retail, Manufacturing, Distribution"
          },
          {
            title: "Maintenance Prédictive",
            challenge: "Pannes imprévues causant arrêts de production coûteux",
            solution: "ML de prédiction de défaillances basé sur IoT et données historiques",
            benefits: [
              "Détection précoce des anomalies (1-4 semaines avant panne)",
              "Planification optimale des interventions",
              "Réduction drastique des arrêts non planifiés",
              "Extension de la durée de vie des équipements"
            ],
            technologies: ["IoT Analytics", "Anomaly Detection", "Predictive ML", "Digital Twin"],
            metrics: {
              "Downtime": "-60%",
              "Coûts maintenance": "-40%",
              "Durée vie": "+25%"
            },
            industry: "Manufacturing, Transport, Énergie"
          }
        ]
      },
      
      {
        id: "hr-talent",
        name: "RH & Talents",
        icon: "fa-users",
        color: "from-orange-500 to-red-500",
        description: "Transformez le recrutement et la gestion des talents",
        useCases: [
          {
            title: "Screening Intelligent de CV",
            challenge: "1000+ candidatures par poste avec screening manuel lent et biaisé",
            solution: "IA de matching CV-poste avec ranking et insights explicables",
            benefits: [
              "Analyse de 1000+ CVs en quelques minutes",
              "Matching basé sur compétences réelles vs keywords",
              "Réduction des biais inconscients",
              "Recommandations de questions d'entretien personnalisées"
            ],
            technologies: ["NLP", "Semantic Matching", "Bias Detection", "Skills Extraction"],
            metrics: {
              "Temps screening": "-90%",
              "Qualité matches": "+55%",
              "Diversité": "+30%"
            },
            industry: "Tech Companies, RH Agencies, Grandes Entreprises"
          },
          {
            title: "Assistant Onboarding Personnalisé",
            challenge: "Onboarding standardisé peu engageant avec faible rétention",
            solution: "Agent IA adaptatif guidant chaque nouvel employé personnellement",
            benefits: [
              "Parcours onboarding personnalisé par rôle et profil",
              "Réponses instantanées aux questions fréquentes",
              "Suivi de progression et alertes managers",
              "Intégration HRIS et outils internes"
            ],
            technologies: ["Conversational AI", "Adaptive Learning", "HRIS Integration"],
            metrics: {
              "Satisfaction NPS": "+40 pts",
              "Time to productivity": "-45%",
              "Rétention 1 an": "+25%"
            },
            industry: "Scale-ups, Tech, Consulting"
          }
        ]
      },
      
      {
        id: "finance",
        name: "Finance & Comptabilité",
        icon: "fa-dollar-sign",
        color: "from-indigo-500 to-purple-500",
        description: "Automatisez les processus financiers et détectez les fraudes",
        useCases: [
          {
            title: "Traitement Automatique des Factures",
            challenge: "Saisie manuelle de milliers de factures avec erreurs fréquentes",
            solution: "OCR + IA d'extraction et validation automatiques",
            benefits: [
              "Extraction de données de tout format de facture",
              "Validation automatique contre bons de commande",
              "Détection d'anomalies et doublons",
              "Intégration ERP temps réel"
            ],
            technologies: ["OCR", "Document AI", "Data Extraction", "ERP Integration"],
            metrics: {
              "Temps traitement": "-85%",
              "Erreurs": "-95%",
              "Coûts processing": "-60%"
            },
            industry: "Toutes industries avec AP"
          },
          {
            title: "Détection de Fraude en Temps Réel",
            challenge: "Pertes de millions dues à fraudes non détectées",
            solution: "ML de détection d'anomalies sur transactions en temps réel",
            benefits: [
              "Analyse de 100% des transactions en <100ms",
              "Détection de patterns de fraude sophistiqués",
              "Faux positifs réduits de 70%",
              "Adaptation continue aux nouvelles fraudes"
            ],
            technologies: ["Real-time ML", "Anomaly Detection", "Graph Analytics", "Ensemble Models"],
            metrics: {
              "Fraudes détectées": "+250%",
              "Faux positifs": "-70%",
              "Pertes évitées": "5M€/an"
            },
            industry: "Banques, Fintech, E-commerce"
          }
        ]
      },
      
      {
        id: "healthcare",
        name: "Santé & Pharmaceutique",
        icon: "fa-heartbeat",
        color: "from-red-500 to-pink-500",
        description: "Améliorez les soins et accélérez la recherche",
        useCases: [
          {
            title: "Assistant Diagnostic Médical",
            challenge: "Surcharge des médecins et délais de diagnostic",
            solution: "IA d'aide au diagnostic basée sur imagerie et dossiers patients",
            benefits: [
              "Détection précoce d'anomalies sur radiographies/IRM",
              "Suggestions de diagnostics différentiels",
              "Priorisation des cas urgents",
              "Réduction de la charge cognitive du médecin"
            ],
            technologies: ["Computer Vision", "Medical AI", "Deep Learning", "DICOM Processing"],
            metrics: {
              "Détection précoce": "+35%",
              "Temps diagnostic": "-40%",
              "Précision": "94%"
            },
            industry: "Hôpitaux, Cliniques, Radiologie"
          },
          {
            title: "Optimisation des Essais Cliniques",
            challenge: "Recrutement lent et coûteux de patients éligibles",
            solution: "IA de matching patients-essais basée sur critères complexes",
            benefits: [
              "Identification rapide de patients éligibles dans EMR",
              "Prédiction de la probabilité de participation",
              "Optimisation du design des protocoles",
              "Réduction du temps de recrutement de 50%"
            ],
            technologies: ["EMR Analytics", "NLP Medical", "Patient Matching", "Predictive ML"],
            metrics: {
              "Temps recrutement": "-50%",
              "Taux rétention": "+30%",
              "Coûts essais": "-35%"
            },
            industry: "Pharma, CRO, Hôpitaux recherche"
          }
        ]
      }
    ],
    
    cta: {
      title: "Votre Cas d'Usage n'est pas Listé ?",
      subtitle: "Chaque entreprise est unique. Discutons de vos besoins spécifiques.",
      primaryButton: "Réserver une Consultation",
      secondaryButton: "Voir Tous les Services"
    }
  },
  
  en: {
    hero: {
      title: "AI Use Cases",
      subtitle: "Concrete AI solutions tailored to your industry",
      description: "Discover how AI transforms different sectors with real use cases and measurable results."
    },
    
    categories: [
      {
        id: "customer-service",
        name: "Customer Service",
        icon: "fa-headset",
        color: "from-blue-500 to-cyan-500",
        description: "Automate and improve customer experience with AI",
        useCases: [
          {
            title: "24/7 Intelligent Customer Assistant",
            challenge: "High volume of customer requests and slow response times",
            solution: "Multilingual AI chatbot with context understanding and smart escalation",
            benefits: [
              "24/7 availability with no additional costs",
              "70% of requests resolved without human intervention",
              "Average response time < 2 seconds",
              "Support in 15+ languages simultaneously"
            ],
            technologies: ["GPT-4", "Dialogflow", "Sentiment Analysis", "NLU"],
            metrics: {
              "Cost reduction": "-65%",
              "Satisfaction": "+42%",
              "Tickets resolved": "+300%"
            },
            industry: "E-commerce, SaaS, Telecoms"
          },
          {
            title: "Automated Feedback Analysis",
            challenge: "Thousands of unstructured customer feedback impossible to analyze manually",
            solution: "AI sentiment analysis and automatic insight extraction",
            benefits: [
              "Automatic classification by category and urgency",
              "Detection of trends and recurring issues",
              "Real-time alerts for critical problems",
              "Actionable insight reports"
            ],
            technologies: ["NLP", "Sentiment Analysis", "Topic Modeling", "ML Classification"],
            metrics: {
              "Analysis time": "-85%",
              "Insights detected": "+150%",
              "Reactivity": "+70%"
            },
            industry: "Retail, Hospitality, Services"
          }
        ]
      },
      
      {
        id: "sales-marketing",
        name: "Sales & Marketing",
        icon: "fa-chart-line",
        color: "from-purple-500 to-pink-500",
        description: "Optimize campaigns and accelerate sales with AI",
        useCases: [
          {
            title: "Predictive Lead Scoring",
            challenge: "Manual lead prioritization with low conversion rate",
            solution: "ML scoring model based on 50+ behavioral signals",
            benefits: [
              "Automatic prioritization of high-potential leads",
              "Conversion probability prediction",
              "Personalized action recommendations",
              "Real-time CRM integration"
            ],
            technologies: ["Machine Learning", "Predictive Analytics", "CRM Integration", "Feature Engineering"],
            metrics: {
              "Conversion rate": "+45%",
              "Sales time": "-30%",
              "Campaign ROI": "+120%"
            },
            industry: "B2B SaaS, Finance, Real Estate"
          },
          {
            title: "Marketing Content Generation",
            challenge: "Slow and expensive content production for multiple channels",
            solution: "AI agent creating brand-adapted content for each channel",
            benefits: [
              "Generate LinkedIn posts, tweets, emails in minutes",
              "Automatic brand tone of voice respect",
              "Content adaptation by channel and audience",
              "Automated scheduling and publishing"
            ],
            technologies: ["GPT-4", "Fine-tuning", "Brand Voice AI", "Content Optimization"],
            metrics: {
              "Production speed": "+500%",
              "Content costs": "-70%",
              "Engagement": "+35%"
            },
            industry: "Marketing Agencies, E-commerce, Media"
          }
        ]
      },
      
      {
        id: "operations",
        name: "Operations & Logistics",
        icon: "fa-cogs",
        color: "from-green-500 to-teal-500",
        description: "Optimize supply chain and operations",
        useCases: [
          {
            title: "Inventory Optimization",
            challenge: "Overstocking and stockouts costing millions",
            solution: "AI demand forecasting and multi-constraint optimization",
            benefits: [
              "Demand forecasts with 95%+ accuracy",
              "Automatic stock level optimization",
              "Reduced storage costs and obsolescence",
              "Preventive stockout alerts"
            ],
            technologies: ["Time Series Forecasting", "Optimization Algorithms", "Demand Planning AI"],
            metrics: {
              "Stock costs": "-35%",
              "Stockouts": "-80%",
              "Turnover": "+45%"
            },
            industry: "Retail, Manufacturing, Distribution"
          },
          {
            title: "Predictive Maintenance",
            challenge: "Unexpected failures causing costly production stops",
            solution: "ML failure prediction based on IoT and historical data",
            benefits: [
              "Early anomaly detection (1-4 weeks before failure)",
              "Optimal intervention planning",
              "Drastic reduction of unplanned downtime",
              "Extended equipment lifespan"
            ],
            technologies: ["IoT Analytics", "Anomaly Detection", "Predictive ML", "Digital Twin"],
            metrics: {
              "Downtime": "-60%",
              "Maintenance costs": "-40%",
              "Lifespan": "+25%"
            },
            industry: "Manufacturing, Transport, Energy"
          }
        ]
      },
      
      {
        id: "hr-talent",
        name: "HR & Talent",
        icon: "fa-users",
        color: "from-orange-500 to-red-500",
        description: "Transform recruitment and talent management",
        useCases: [
          {
            title: "Intelligent Resume Screening",
            challenge: "1000+ applications per position with slow and biased manual screening",
            solution: "AI resume-job matching with ranking and explainable insights",
            benefits: [
              "Analysis of 1000+ resumes in minutes",
              "Matching based on real skills vs keywords",
              "Reduction of unconscious bias",
              "Personalized interview question recommendations"
            ],
            technologies: ["NLP", "Semantic Matching", "Bias Detection", "Skills Extraction"],
            metrics: {
              "Screening time": "-90%",
              "Match quality": "+55%",
              "Diversity": "+30%"
            },
            industry: "Tech Companies, HR Agencies, Large Enterprises"
          },
          {
            title: "Personalized Onboarding Assistant",
            challenge: "Standardized onboarding with low engagement and retention",
            solution: "Adaptive AI agent personally guiding each new employee",
            benefits: [
              "Onboarding path personalized by role and profile",
              "Instant answers to frequently asked questions",
              "Progress tracking and manager alerts",
              "HRIS and internal tools integration"
            ],
            technologies: ["Conversational AI", "Adaptive Learning", "HRIS Integration"],
            metrics: {
              "NPS Satisfaction": "+40 pts",
              "Time to productivity": "-45%",
              "1-year retention": "+25%"
            },
            industry: "Scale-ups, Tech, Consulting"
          }
        ]
      },
      
      {
        id: "finance",
        name: "Finance & Accounting",
        icon: "fa-dollar-sign",
        color: "from-indigo-500 to-purple-500",
        description: "Automate financial processes and detect fraud",
        useCases: [
          {
            title: "Automated Invoice Processing",
            challenge: "Manual entry of thousands of invoices with frequent errors",
            solution: "OCR + AI for automatic extraction and validation",
            benefits: [
              "Data extraction from any invoice format",
              "Automatic validation against purchase orders",
              "Anomaly and duplicate detection",
              "Real-time ERP integration"
            ],
            technologies: ["OCR", "Document AI", "Data Extraction", "ERP Integration"],
            metrics: {
              "Processing time": "-85%",
              "Errors": "-95%",
              "Processing costs": "-60%"
            },
            industry: "All industries with AP"
          },
          {
            title: "Real-Time Fraud Detection",
            challenge: "Millions in losses due to undetected fraud",
            solution: "ML anomaly detection on real-time transactions",
            benefits: [
              "Analysis of 100% transactions in <100ms",
              "Detection of sophisticated fraud patterns",
              "False positives reduced by 70%",
              "Continuous adaptation to new fraud"
            ],
            technologies: ["Real-time ML", "Anomaly Detection", "Graph Analytics", "Ensemble Models"],
            metrics: {
              "Fraud detected": "+250%",
              "False positives": "-70%",
              "Losses avoided": "$5M/year"
            },
            industry: "Banks, Fintech, E-commerce"
          }
        ]
      },
      
      {
        id: "healthcare",
        name: "Healthcare & Pharma",
        icon: "fa-heartbeat",
        color: "from-red-500 to-pink-500",
        description: "Improve care and accelerate research",
        useCases: [
          {
            title: "Medical Diagnostic Assistant",
            challenge: "Physician overload and diagnostic delays",
            solution: "AI diagnostic aid based on imaging and patient records",
            benefits: [
              "Early anomaly detection on X-rays/MRIs",
              "Differential diagnosis suggestions",
              "Urgent case prioritization",
              "Reduced physician cognitive load"
            ],
            technologies: ["Computer Vision", "Medical AI", "Deep Learning", "DICOM Processing"],
            metrics: {
              "Early detection": "+35%",
              "Diagnostic time": "-40%",
              "Accuracy": "94%"
            },
            industry: "Hospitals, Clinics, Radiology"
          },
          {
            title: "Clinical Trial Optimization",
            challenge: "Slow and costly recruitment of eligible patients",
            solution: "AI patient-trial matching based on complex criteria",
            benefits: [
              "Rapid identification of eligible patients in EMR",
              "Participation probability prediction",
              "Protocol design optimization",
              "50% reduction in recruitment time"
            ],
            technologies: ["EMR Analytics", "Medical NLP", "Patient Matching", "Predictive ML"],
            metrics: {
              "Recruitment time": "-50%",
              "Retention rate": "+30%",
              "Trial costs": "-35%"
            },
            industry: "Pharma, CRO, Research Hospitals"
          }
        ]
      }
    ],
    
    cta: {
      title: "Your Use Case Not Listed?",
      subtitle: "Every business is unique. Let's discuss your specific needs.",
      primaryButton: "Book a Consultation",
      secondaryButton: "View All Services"
    }
  }
};

// Export function to get data by language
function getUseCasesData(lang = 'fr') {
  return useCasesData[lang] || useCasesData.fr;
}
