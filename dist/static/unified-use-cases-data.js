/**
 * Unified Use Cases Data for Factor AI Platform
 * Combines quick examples and detailed case studies
 * Inspired by Evidently AI structure
 * Bilingual FR/EN support
 */

const unifiedUseCasesData = {
  fr: {
    hero: {
      title: "Cas d'Usage IA",
      subtitle: "650+ exemples concrets d'applications IA",
      description: "Des solutions IA réelles avec métriques mesurables et implémentations détaillées"
    },
    
    stats: [
      { value: "18", label: "Cas d'usage détaillés", icon: "fa-lightbulb" },
      { value: "100+", label: "Entreprises", icon: "fa-building" },
      { value: "6", label: "Industries", icon: "fa-industry" },
      { value: "98%", label: "Taux de succès", icon: "fa-chart-line" }
    ],
    
    filters: [
      { id: "all", label: "Tous les cas", icon: "fa-th", count: 18 },
      { id: "customer-service", label: "Service Client", icon: "fa-headset", count: 3 },
      { id: "sales-marketing", label: "Ventes & Marketing", icon: "fa-chart-line", count: 3 },
      { id: "finance", label: "Finance", icon: "fa-dollar-sign", count: 3 },
      { id: "hr", label: "RH & Recrutement", icon: "fa-users", count: 2 },
      { id: "operations", label: "Opérations", icon: "fa-cogs", count: 3 },
      { id: "product-tech", label: "Produit & Tech", icon: "fa-code", count: 4 }
    ],
    
    // Type tags for filtering
    typeTags: [
      { id: "quick-win", label: "Quick Win", color: "green" },
      { id: "case-study", label: "Étude de Cas", color: "blue" },
      { id: "llm", label: "LLM", color: "purple" },
      { id: "ml", label: "Machine Learning", color: "orange" },
      { id: "automation", label: "Automation", color: "cyan" }
    ],
    
    useCases: [
      // ==================== SERVICE CLIENT ====================
      {
        id: "fashionhub-chatbot",
        type: "case-study",
        featured: true,
        category: "customer-service",
        tags: ["llm", "automation"],
        
        // Card info
        title: "Assistant Client IA 24/7",
        company: "FashionHub",
        companyLogo: "FH",
        industry: "E-commerce Mode",
        
        // Quick summary
        summary: "Réduction de 70% du temps de réponse avec chatbot IA multicanal",
        quickMetrics: {
          "Temps réponse": "-99.7%",
          "Satisfaction": "+42%",
          "Coûts support": "-65%"
        },
        
        // Detailed case study (for modal/detail view)
        detailed: {
          duration: "3 mois",
          teamSize: "3 personnes",
          budget: "40-60K€",
          
          challenge: {
            description: "FashionHub recevait 5000+ demandes/mois avec 8 agents. Temps de réponse de 18h, 35% d'abandon clients.",
            painPoints: [
              "Temps de réponse moyen de 18 heures",
              "35% taux d'abandon sur le chat",
              "Pics non gérables durant soldes",
              "Coût support à 45K€/mois",
              "70% de questions répétitives"
            ]
          },
          
          solution: {
            description: "Assistant IA conversationnel multicanal (web, WhatsApp, Instagram) avec accès temps réel aux données produits, stock et commandes.",
            approach: [
              "Analyse de 50K+ conversations historiques",
              "Intégration API Shopify + stock",
              "Personnalisation tone of voice",
              "Tests A/B sur 2 semaines",
              "Déploiement progressif"
            ],
            technologies: ["GPT-4 Turbo", "Dialogflow CX", "Shopify API", "WhatsApp Business", "Pinecone"],
            features: [
              "Réponses instantanées 24/7 FR/EN",
              "Recommandations produits personnalisées",
              "Gestion automatique retours",
              "Escalade intelligente vers humains"
            ]
          },
          
          results: {
            timeline: "3 mois",
            metrics: [
              { label: "Temps de réponse", before: "18h", after: "< 2s", improvement: "-99.7%" },
              { label: "Taux de résolution", before: "65%", after: "84%", improvement: "+29%" },
              { label: "Taux satisfaction", before: "72%", after: "91%", improvement: "+26%" },
              { label: "Volume traité", before: "5K/mois", after: "15K/mois", improvement: "+200%" },
              { label: "Coûts support", before: "45K€/mois", after: "16K€/mois", improvement: "-65%" },
              { label: "Revenue impact", before: "N/A", after: "+28% conversions", improvement: "+348K€/an" }
            ],
            businessImpact: [
              "348K€ d'économies annuelles",
              "Triplement de la capacité sans embauche",
              "28% d'augmentation des conversions"
            ]
          },
          
          testimonial: {
            quote: "Factor AI a transformé notre support client. Nous gérons maintenant 3x plus de demandes avec la moitié de l'équipe.",
            author: "Marie Dubois",
            role: "Directrice E-commerce",
            avatar: "MD"
          }
        }
      },
      
      {
        id: "customer-service-1",
        type: "quick-win",
        category: "customer-service",
        tags: ["llm"],
        
        title: "Analyse Automatique des Feedbacks",
        company: "Generic Retail",
        companyLogo: "GR",
        industry: "Retail",
        
        summary: "Analyse de sentiment et extraction d'insights de milliers de retours clients",
        quickMetrics: {
          "Temps analyse": "-85%",
          "Insights détectés": "+150%",
          "Réactivité": "+70%"
        },
        
        detailed: {
          duration: "1-2 mois",
          teamSize: "2 personnes",
          budget: "20-40K€",
          
          challenge: {
            description: "Milliers de retours clients non structurés impossibles à analyser manuellement.",
            painPoints: [
              "Volume élevé de feedbacks",
              "Données non structurées",
              "Délai d'analyse élevé",
              "Insights manqués"
            ]
          },
          
          solution: {
            description: "IA d'analyse de sentiment et extraction automatique d'insights actionnables.",
            technologies: ["NLP", "Sentiment Analysis", "Topic Modeling", "ML Classification"],
            features: [
              "Classification automatique par catégorie/urgence",
              "Détection des tendances",
              "Alertes temps réel problèmes critiques",
              "Rapports d'insights actionnables"
            ]
          },
          
          results: {
            timeline: "2 mois",
            metrics: [
              { label: "Temps analyse", before: "10h/semaine", after: "1.5h/semaine", improvement: "-85%" },
              { label: "Insights détectés", before: "5-10/mois", after: "25+/mois", improvement: "+150%" },
              { label: "Réactivité problèmes", before: "7 jours", after: "2 jours", improvement: "-70%" }
            ]
          }
        }
      },
      
      {
        id: "customer-service-2",
        type: "quick-win",
        category: "customer-service",
        tags: ["automation"],
        
        title: "Routage Intelligent des Tickets",
        company: "Tech Support Co",
        companyLogo: "TS",
        industry: "SaaS",
        
        summary: "Classification et routage automatique des demandes support vers le bon expert",
        quickMetrics: {
          "Temps résolution": "-40%",
          "Satisfaction": "+35%",
          "Productivité": "+60%"
        },
        
        detailed: {
          duration: "1 mois",
          teamSize: "2 personnes",
          budget: "15-30K€",
          
          challenge: {
            description: "Tickets mal routés, temps de résolution élevés, experts surchargés.",
            painPoints: [
              "Routage manuel des tickets",
              "50% mal assignés initialement",
              "Temps de résolution moyen 48h"
            ]
          },
          
          solution: {
            description: "ML de classification automatique des tickets avec analyse du contenu et routage vers l'expert approprié.",
            technologies: ["NLP", "Classification ML", "API Integration"],
            features: [
              "Analyse automatique du contenu",
              "Classification par type/urgence",
              "Routage vers bon expert",
              "Prédiction du temps de résolution"
            ]
          },
          
          results: {
            timeline: "1 mois",
            metrics: [
              { label: "Temps résolution", before: "48h", after: "29h", improvement: "-40%" },
              { label: "Tickets bien routés", before: "50%", after: "92%", improvement: "+84%" },
              { label: "Satisfaction", before: "68%", after: "92%", improvement: "+35%" }
            ]
          }
        }
      },
      
      // ==================== VENTES & MARKETING ====================
      {
        id: "sales-lead-scoring",
        type: "quick-win",
        category: "sales-marketing",
        tags: ["ml"],
        
        title: "Lead Scoring Prédictif",
        company: "B2B SaaS Inc",
        companyLogo: "BS",
        industry: "B2B SaaS",
        
        summary: "ML de scoring basé sur 50+ signaux pour prioriser les leads à fort potentiel",
        quickMetrics: {
          "Taux conversion": "+45%",
          "Temps commercial": "-30%",
          "ROI campaigns": "+120%"
        },
        
        detailed: {
          duration: "2 mois",
          teamSize: "3 personnes",
          budget: "30-50K€",
          
          challenge: {
            description: "Priorisation manuelle des leads avec faible taux de conversion.",
            painPoints: [
              "Pas de priorisation objective",
              "Commerciaux perdent du temps",
              "Faible taux de conversion"
            ]
          },
          
          solution: {
            description: "Modèle ML de scoring basé sur 50+ signaux comportementaux et firmographiques.",
            technologies: ["Machine Learning", "Predictive Analytics", "CRM Integration"],
            features: [
              "Scoring automatique des leads",
              "Prédiction probabilité de conversion",
              "Recommandations d'actions",
              "Intégration CRM temps réel"
            ]
          },
          
          results: {
            timeline: "2 mois",
            metrics: [
              { label: "Taux conversion", before: "12%", after: "17.4%", improvement: "+45%" },
              { label: "Temps commercial", before: "40h/semaine", after: "28h/semaine", improvement: "-30%" },
              { label: "ROI campaigns", before: "2.5x", after: "5.5x", improvement: "+120%" }
            ]
          }
        }
      },
      
      {
        id: "content-generation",
        type: "quick-win",
        category: "sales-marketing",
        tags: ["llm", "automation"],
        
        title: "Génération de Contenu Marketing",
        company: "Marketing Agency",
        companyLogo: "MA",
        industry: "Marketing",
        
        summary: "Agent IA de création de contenu adapté à la marque et au canal",
        quickMetrics: {
          "Vitesse production": "+500%",
          "Coûts contenu": "-70%",
          "Engagement": "+85%"
        },
        
        detailed: {
          duration: "1 mois",
          teamSize: "2 personnes",
          budget: "20-35K€",
          
          challenge: {
            description: "Production lente et coûteuse de contenu pour multiples canaux.",
            painPoints: [
              "Production lente",
              "Coûts élevés",
              "Inconsistance tone of voice"
            ]
          },
          
          solution: {
            description: "Agent IA de création de contenu avec respect automatique du tone of voice.",
            technologies: ["GPT-4", "Fine-tuning", "Brand Voice AI"],
            features: [
              "Génération posts LinkedIn/Twitter/emails",
              "Respect du tone of voice",
              "Adaptation par canal/audience",
              "Planification automatisée"
            ]
          },
          
          results: {
            timeline: "1 mois",
            metrics: [
              { label: "Vitesse production", before: "10 posts/semaine", after: "60 posts/semaine", improvement: "+500%" },
              { label: "Coûts", before: "8K€/mois", after: "2.4K€/mois", improvement: "-70%" },
              { label: "Engagement", before: "2.5%", after: "4.6%", improvement: "+85%" }
            ]
          }
        }
      },
      
      {
        id: "financeconnect-automation",
        type: "case-study",
        category: "sales-marketing",
        tags: ["automation", "ml"],
        featured: true,
        
        title: "Automatisation du Parcours Client",
        company: "FinanceConnect",
        companyLogo: "FC",
        industry: "Banque en Ligne",
        
        summary: "Réduction de 900K€/an des coûts avec automatisation intelligente du support",
        quickMetrics: {
          "Coûts": "-900K€/an",
          "Satisfaction": "+35%",
          "NPS": "+42 points"
        },
        
        detailed: {
          duration: "6 mois",
          teamSize: "5 personnes",
          budget: "80-120K€",
          
          challenge: {
            description: "50K+ demandes/mois, réglementation stricte, coûts support à 1.8M€/an.",
            painPoints: [
              "Volume énorme de demandes répétitives",
              "Réglementation bancaire stricte",
              "Coûts support à 1.8M€/an",
              "Temps traitement moyen 4 jours",
              "Satisfaction client en baisse"
            ]
          },
          
          solution: {
            description: "Système multi-agents IA avec conformité bancaire intégrée et validation automatique.",
            approach: [
              "Audit de 200K+ interactions",
              "Développement assistant bancaire conforme",
              "Intégration core banking system",
              "Tests conformité RGPD/KYC",
              "Déploiement progressif par fonction"
            ],
            technologies: ["GPT-4", "Compliance AI", "Banking APIs", "Fraud Detection", "Secure Encryption"],
            features: [
              "Assistant bancaire intelligent",
              "Validation automatique KYC/AML",
              "Détection fraude en temps réel",
              "Conformité RGPD intégrée",
              "Escalade réglementée"
            ]
          },
          
          results: {
            timeline: "6 mois",
            metrics: [
              { label: "Coûts support", before: "1.8M€/an", after: "900K€/an", improvement: "-50%" },
              { label: "Temps traitement", before: "4 jours", after: "2h", improvement: "-98%" },
              { label: "Satisfaction", before: "72%", after: "97%", improvement: "+35%" },
              { label: "Taux résolution", before: "78%", after: "94%", improvement: "+21%" },
              { label: "NPS", before: "35", after: "77", improvement: "+42 points" },
              { label: "Conformité", before: "Manual", after: "100% auto", improvement: "Automatisée" }
            ],
            businessImpact: [
              "900K€ d'économies annuelles",
              "98% de réduction du temps de traitement",
              "NPS +42 points"
            ]
          },
          
          testimonial: {
            quote: "L'automatisation par IA a révolutionné notre support tout en maintenant notre conformité bancaire.",
            author: "Jean Martin",
            role: "COO",
            avatar: "JM"
          }
        }
      },
      
      // ==================== FINANCE ====================
      {
        id: "invoice-processing",
        type: "quick-win",
        category: "finance",
        tags: ["automation", "ml"],
        
        title: "Traitement Automatique des Factures",
        company: "Accounting Firm",
        companyLogo: "AF",
        industry: "Comptabilité",
        
        summary: "OCR + IA pour extraction et saisie automatique des données de factures",
        quickMetrics: {
          "Temps traitement": "-90%",
          "Erreurs": "-95%",
          "Coûts": "-75%"
        },
        
        detailed: {
          duration: "1.5 mois",
          teamSize: "2 personnes",
          budget: "25-45K€",
          
          challenge: {
            description: "Saisie manuelle de 1000+ factures/mois avec erreurs et délais.",
            painPoints: [
              "Saisie manuelle laborieuse",
              "Taux d'erreur 5-8%",
              "Délai de traitement 3-5 jours",
              "Coûts élevés"
            ]
          },
          
          solution: {
            description: "OCR + ML pour extraction automatique des données et validation.",
            technologies: ["OCR", "Computer Vision", "NLP", "API Integration"],
            features: [
              "Extraction automatique données",
              "Validation intelligente",
              "Détection anomalies",
              "Intégration ERP"
            ]
          },
          
          results: {
            timeline: "1.5 mois",
            metrics: [
              { label: "Temps traitement", before: "4 jours", after: "6 heures", improvement: "-90%" },
              { label: "Taux d'erreur", before: "6%", after: "0.3%", improvement: "-95%" },
              { label: "Coûts", before: "12K€/mois", after: "3K€/mois", improvement: "-75%" }
            ]
          }
        }
      },
      
      {
        id: "fraud-detection",
        type: "quick-win",
        category: "finance",
        tags: ["ml"],
        
        title: "Détection de Fraude en Temps Réel",
        company: "Payment Processor",
        companyLogo: "PP",
        industry: "Paiements",
        
        summary: "ML pour détection proactive des transactions frauduleuses",
        quickMetrics: {
          "Fraudes détectées": "+85%",
          "Faux positifs": "-60%",
          "Pertes": "-2.4M€/an"
        },
        
        detailed: {
          duration: "3 mois",
          teamSize: "4 personnes",
          budget: "60-100K€",
          
          challenge: {
            description: "Système de détection basique avec taux élevé de faux positifs.",
            painPoints: [
              "Détection réactive",
              "40% de faux positifs",
              "Pertes fraude à 3M€/an"
            ]
          },
          
          solution: {
            description: "Modèle ML temps réel analysant 50+ signaux par transaction.",
            technologies: ["Machine Learning", "Real-time Processing", "Anomaly Detection"],
            features: [
              "Analyse en temps réel",
              "Scoring de risque",
              "Blocage automatique",
              "Apprentissage continu"
            ]
          },
          
          results: {
            timeline: "3 mois",
            metrics: [
              { label: "Fraudes détectées", before: "60%", after: "95%", improvement: "+85%" },
              { label: "Faux positifs", before: "40%", after: "16%", improvement: "-60%" },
              { label: "Pertes", before: "3M€/an", after: "600K€/an", improvement: "-2.4M€" }
            ]
          }
        }
      },
      
      {
        id: "financial-forecasting",
        type: "quick-win",
        category: "finance",
        tags: ["ml"],
        
        title: "Prévisions Financières Prédictives",
        company: "FinTech Startup",
        companyLogo: "FT",
        industry: "FinTech",
        
        summary: "Modèles ML pour prévisions de trésorerie et planification budgétaire",
        quickMetrics: {
          "Précision": "+45%",
          "Temps forecast": "-80%",
          "Décisions": "+3x rapides"
        },
        
        detailed: {
          duration: "2 mois",
          teamSize: "3 personnes",
          budget: "40-70K€",
          
          challenge: {
            description: "Prévisions manuelles imprécises avec Excel.",
            painPoints: [
              "Prévisions imprécises",
              "Processus manuel long",
              "Décisions retardées"
            ]
          },
          
          solution: {
            description: "Modèles ML de time series pour prévisions automatiques.",
            technologies: ["Time Series ML", "Predictive Analytics", "Data Visualization"],
            features: [
              "Prévisions automatiques",
              "Scénarios multiples",
              "Alertes proactives",
              "Dashboards temps réel"
            ]
          },
          
          results: {
            timeline: "2 mois",
            metrics: [
              { label: "Précision", before: "65%", after: "94%", improvement: "+45%" },
              { label: "Temps forecast", before: "2 jours", after: "30 min", improvement: "-80%" },
              { label: "Vitesse décisions", before: "5 jours", after: "1.5 jours", improvement: "+3x" }
            ]
          }
        }
      },
      
      // ==================== RH & RECRUTEMENT ====================
      {
        id: "cv-screening",
        type: "quick-win",
        category: "hr",
        tags: ["ml", "automation"],
        
        title: "Screening Automatique de CV",
        company: "TechCorp",
        companyLogo: "TC",
        industry: "Tech",
        
        summary: "IA pour analyse et classement automatique de milliers de CV",
        quickMetrics: {
          "Temps screening": "-85%",
          "Qualité candidats": "+60%",
          "Time-to-hire": "-40%"
        },
        
        detailed: {
          duration: "1.5 mois",
          teamSize: "2 personnes",
          budget: "25-40K€",
          
          challenge: {
            description: "500+ CV par poste avec screening manuel très long.",
            painPoints: [
              "Volume élevé de candidatures",
              "Screening manuel 2h/CV",
              "Biais inconscients",
              "Time-to-hire de 45 jours"
            ]
          },
          
          solution: {
            description: "IA d'analyse de CV avec matching compétences et scoring objectif.",
            technologies: ["NLP", "ML Classification", "Skill Matching"],
            features: [
              "Extraction automatique compétences",
              "Scoring objectif",
              "Matching poste-profil",
              "Détection biais"
            ]
          },
          
          results: {
            timeline: "1.5 mois",
            metrics: [
              { label: "Temps screening", before: "8h/poste", after: "1.2h/poste", improvement: "-85%" },
              { label: "Qualité candidats", before: "40% fit", after: "64% fit", improvement: "+60%" },
              { label: "Time-to-hire", before: "45 jours", after: "27 jours", improvement: "-40%" }
            ]
          }
        }
      },
      
      {
        id: "hr-chatbot",
        type: "quick-win",
        category: "hr",
        tags: ["llm", "automation"],
        
        title: "Assistant RH Interne",
        company: "Large Enterprise",
        companyLogo: "LE",
        industry: "Enterprise",
        
        summary: "Chatbot IA pour répondre aux questions RH des employés 24/7",
        quickMetrics: {
          "Tickets RH": "-70%",
          "Temps réponse": "-95%",
          "Satisfaction": "+50%"
        },
        
        detailed: {
          duration: "2 mois",
          teamSize: "3 personnes",
          budget: "35-55K€",
          
          challenge: {
            description: "2000+ employés, équipe RH surchargée de questions répétitives.",
            painPoints: [
              "Questions répétitives (congés, paie, avantages)",
              "Temps de réponse 24-48h",
              "Équipe RH surchargée",
              "Information dispersée"
            ]
          },
          
          solution: {
            description: "Assistant RH IA avec accès aux politiques, procédures et données employé.",
            technologies: ["GPT-4", "RAG", "HRIS Integration", "Secure Access"],
            features: [
              "Réponses instantanées 24/7",
              "Accès sécurisé données employé",
              "Escalade intelligente",
              "Multi-langue"
            ]
          },
          
          results: {
            timeline: "2 mois",
            metrics: [
              { label: "Tickets RH", before: "400/semaine", after: "120/semaine", improvement: "-70%" },
              { label: "Temps réponse", before: "36h", after: "< 2min", improvement: "-95%" },
              { label: "Satisfaction employés", before: "68%", after: "92%", improvement: "+50%" }
            ]
          }
        }
      },
      
      // ==================== OPÉRATIONS ====================
      {
        id: "dataflow-search",
        type: "case-study",
        category: "operations",
        tags: ["llm", "automation"],
        featured: true,
        
        title: "Recherche Intelligente Documentation",
        company: "DataFlow",
        companyLogo: "DF",
        industry: "SaaS Analytics",
        
        summary: "Réduction de 90% du temps de recherche avec IA sémantique",
        quickMetrics: {
          "Temps recherche": "-90%",
          "Productivité": "+25%",
          "Satisfaction": "+40%"
        },
        
        detailed: {
          duration: "2 mois",
          teamSize: "3 personnes",
          budget: "45-70K€",
          
          challenge: {
            description: "10K+ documents techniques, recherche inefficace, temps perdu énorme.",
            painPoints: [
              "10K+ docs techniques dispersés",
              "Recherche par mots-clés inefficace",
              "Temps moyen recherche: 2h/jour",
              "Information obsolète",
              "Onboarding lent nouveaux employés"
            ]
          },
          
          solution: {
            description: "Moteur de recherche sémantique IA avec RAG et génération de réponses.",
            approach: [
              "Indexation 10K+ documents",
              "Embeddings sémantiques",
              "RAG avec GPT-4",
              "Interface conversationnelle",
              "Déploiement progressif"
            ],
            technologies: ["GPT-4", "RAG", "Vector DB", "Semantic Search", "LangChain"],
            features: [
              "Recherche en langage naturel",
              "Réponses avec sources citées",
              "Suggestions contextuelles",
              "Détection contenu obsolète",
              "Multi-source aggregation"
            ]
          },
          
          results: {
            timeline: "2 mois",
            metrics: [
              { label: "Temps recherche", before: "2h/jour", after: "12min/jour", improvement: "-90%" },
              { label: "Productivité", before: "Baseline", after: "+25%", improvement: "+25%" },
              { label: "Satisfaction", before: "65%", after: "91%", improvement: "+40%" },
              { label: "Onboarding", before: "6 semaines", after: "3 semaines", improvement: "-50%" },
              { label: "Taux réponse trouvée", before: "45%", after: "87%", improvement: "+93%" }
            ],
            businessImpact: [
              "25% gain de productivité équipe",
              "50% réduction temps onboarding",
              "Économie estimée 180K€/an"
            ]
          },
          
          testimonial: {
            quote: "Nos développeurs trouvent maintenant les réponses en minutes au lieu d'heures. Game changer.",
            author: "Sophie Laurent",
            role: "CTO",
            avatar: "SL"
          }
        }
      },
      
      {
        id: "inventory-optimization",
        type: "quick-win",
        category: "operations",
        tags: ["ml"],
        
        title: "Optimisation des Stocks",
        company: "RetailMax",
        companyLogo: "RM",
        industry: "Retail",
        
        summary: "Prédiction de la demande et optimisation automatique des niveaux de stock",
        quickMetrics: {
          "Ruptures stock": "-60%",
          "Surstocks": "-35%",
          "Marge": "+18%"
        },
        
        detailed: {
          duration: "3 mois",
          teamSize: "4 personnes",
          budget: "50-80K€",
          
          challenge: {
            description: "Gestion de stock inefficace avec ruptures et surstocks fréquents.",
            painPoints: [
              "Ruptures de stock fréquentes",
              "Surstocks coûteux",
              "Prévisions manuelles imprécises",
              "Gaspillage produits périssables"
            ]
          },
          
          solution: {
            description: "ML de prévision de demande avec optimisation automatique des commandes.",
            technologies: ["Time Series ML", "Demand Forecasting", "Optimization Algorithms"],
            features: [
              "Prévision demande par produit",
              "Optimisation seuils commande",
              "Alertes proactives",
              "Recommandations promotions"
            ]
          },
          
          results: {
            timeline: "3 mois",
            metrics: [
              { label: "Ruptures stock", before: "15%", after: "6%", improvement: "-60%" },
              { label: "Surstocks", before: "28%", after: "18%", improvement: "-35%" },
              { label: "Marge", before: "Baseline", after: "+18%", improvement: "+18%" }
            ]
          }
        }
      },
      
      {
        id: "predictive-maintenance",
        type: "quick-win",
        category: "operations",
        tags: ["ml"],
        
        title: "Maintenance Prédictive",
        company: "Manufacturing Co",
        companyLogo: "MC",
        industry: "Manufacturing",
        
        summary: "Prédiction des pannes machines pour maintenance proactive",
        quickMetrics: {
          "Temps d'arrêt": "-55%",
          "Coûts maintenance": "-40%",
          "Productivité": "+28%"
        },
        
        detailed: {
          duration: "4 mois",
          teamSize: "5 personnes",
          budget: "70-110K€",
          
          challenge: {
            description: "Pannes imprévues coûteuses et temps d'arrêt élevés.",
            painPoints: [
              "Pannes imprévues fréquentes",
              "Maintenance réactive coûteuse",
              "Temps d'arrêt non planifiés",
              "Perte de production"
            ]
          },
          
          solution: {
            description: "IoT + ML pour prédiction des pannes basée sur données capteurs.",
            technologies: ["IoT Sensors", "Time Series ML", "Anomaly Detection", "Edge Computing"],
            features: [
              "Monitoring temps réel",
              "Prédiction pannes 7 jours",
              "Alertes proactives",
              "Planning maintenance optimal"
            ]
          },
          
          results: {
            timeline: "4 mois",
            metrics: [
              { label: "Temps d'arrêt", before: "12%", after: "5.4%", improvement: "-55%" },
              { label: "Coûts maintenance", before: "400K€/an", after: "240K€/an", improvement: "-40%" },
              { label: "Productivité", before: "Baseline", after: "+28%", improvement: "+28%" }
            ]
          }
        }
      },
      
      // ==================== PRODUIT & TECH ====================
      {
        id: "code-review-automation",
        type: "quick-win",
        category: "product-tech",
        tags: ["llm", "automation"],
        
        title: "Revue de Code Automatisée",
        company: "Tech Startup",
        companyLogo: "TS",
        industry: "Software",
        
        summary: "IA pour revue automatique de code et détection de bugs",
        quickMetrics: {
          "Bugs détectés": "+120%",
          "Temps review": "-70%",
          "Qualité code": "+45%"
        },
        
        detailed: {
          duration: "1.5 mois",
          teamSize: "2 personnes",
          budget: "30-50K€",
          
          challenge: {
            description: "Revues de code manuelles longues avec bugs non détectés.",
            painPoints: [
              "Revues manuelles chronophages",
              "Inconsistance des reviews",
              "Bugs non détectés",
              "Bottleneck développement"
            ]
          },
          
          solution: {
            description: "IA d'analyse de code avec détection bugs, vulnérabilités et suggestions.",
            technologies: ["Code Analysis", "LLM", "Static Analysis", "Pattern Recognition"],
            features: [
              "Analyse automatique PR",
              "Détection bugs/vulnérabilités",
              "Suggestions d'amélioration",
              "Standards enforcement"
            ]
          },
          
          results: {
            timeline: "1.5 mois",
            metrics: [
              { label: "Bugs détectés", before: "50/mois", after: "110/mois", improvement: "+120%" },
              { label: "Temps review", before: "4h/PR", after: "1.2h/PR", improvement: "-70%" },
              { label: "Qualité code", before: "Score 65", after: "Score 94", improvement: "+45%" }
            ]
          }
        }
      },
      
      {
        id: "bug-triage",
        type: "quick-win",
        category: "product-tech",
        tags: ["ml", "automation"],
        
        title: "Triage Automatique de Bugs",
        company: "Software Company",
        companyLogo: "SC",
        industry: "Software",
        
        summary: "Classification et priorisation automatique des tickets de bugs",
        quickMetrics: {
          "Temps triage": "-80%",
          "Priorisation": "+95%",
          "Résolution": "+40%"
        },
        
        detailed: {
          duration: "1 mois",
          teamSize: "2 personnes",
          budget: "20-35K€",
          
          challenge: {
            description: "Triage manuel de centaines de bugs par semaine.",
            painPoints: [
              "Volume élevé de tickets",
              "Triage manuel long",
              "Priorisation subjective",
              "Bugs critiques manqués"
            ]
          },
          
          solution: {
            description: "ML de classification automatique avec scoring de sévérité.",
            technologies: ["NLP", "ML Classification", "Priority Scoring"],
            features: [
              "Classification automatique",
              "Scoring de sévérité",
              "Détection duplicates",
              "Assignation intelligente"
            ]
          },
          
          results: {
            timeline: "1 mois",
            metrics: [
              { label: "Temps triage", before: "10h/semaine", after: "2h/semaine", improvement: "-80%" },
              { label: "Priorisation correcte", before: "60%", after: "95%", improvement: "+95%" },
              { label: "Vitesse résolution", before: "5 jours", after: "3 jours", improvement: "+40%" }
            ]
          }
        }
      },
      
      {
        id: "user-behavior-prediction",
        type: "quick-win",
        category: "product-tech",
        tags: ["ml"],
        
        title: "Prédiction du Churn Utilisateur",
        company: "SaaS Product",
        companyLogo: "SP",
        industry: "SaaS",
        
        summary: "ML pour identifier les utilisateurs à risque de désabonnement",
        quickMetrics: {
          "Rétention": "+32%",
          "Churn": "-45%",
          "LTV": "+58%"
        },
        
        detailed: {
          duration: "2 mois",
          teamSize: "3 personnes",
          budget: "40-65K€",
          
          challenge: {
            description: "Churn élevé sans capacité de prédiction.",
            painPoints: [
              "Churn à 8% mensuel",
              "Pas de signaux précoces",
              "Interventions réactives",
              "Perte de revenus"
            ]
          },
          
          solution: {
            description: "ML de prédiction de churn avec scoring et recommandations d'actions.",
            technologies: ["Machine Learning", "Behavioral Analytics", "Predictive Modeling"],
            features: [
              "Scoring de risque churn",
              "Alertes proactives",
              "Recommandations d'actions",
              "A/B testing rétention"
            ]
          },
          
          results: {
            timeline: "2 mois",
            metrics: [
              { label: "Rétention", before: "92%", after: "96.5%", improvement: "+32%" },
              { label: "Churn", before: "8%", after: "4.4%", improvement: "-45%" },
              { label: "LTV", before: "Baseline", after: "+58%", improvement: "+58%" }
            ]
          }
        }
      },
      
      {
        id: "personalization-engine",
        type: "quick-win",
        category: "product-tech",
        tags: ["ml"],
        
        title: "Moteur de Recommandation",
        company: "E-commerce Platform",
        companyLogo: "EP",
        industry: "E-commerce",
        
        summary: "Personnalisation en temps réel basée sur le comportement utilisateur",
        quickMetrics: {
          "Conversions": "+55%",
          "AOV": "+38%",
          "Engagement": "+72%"
        },
        
        detailed: {
          duration: "3 mois",
          teamSize: "4 personnes",
          budget: "60-95K€",
          
          challenge: {
            description: "Expérience générique sans personnalisation.",
            painPoints: [
              "Recommandations génériques",
              "Faible taux de conversion",
              "Panier moyen bas",
              "Engagement limité"
            ]
          },
          
          solution: {
            description: "ML de recommandation personnalisée basé sur collaborative filtering et comportement.",
            technologies: ["Recommendation Systems", "Collaborative Filtering", "Real-time ML"],
            features: [
              "Recommandations personnalisées",
              "Personnalisation temps réel",
              "A/B testing automatique",
              "Cross-sell intelligent"
            ]
          },
          
          results: {
            timeline: "3 mois",
            metrics: [
              { label: "Taux conversion", before: "2.2%", after: "3.4%", improvement: "+55%" },
              { label: "Panier moyen", before: "85€", after: "117€", improvement: "+38%" },
              { label: "Engagement", before: "3.5 min", after: "6 min", improvement: "+72%" }
            ]
          }
        }
      }
    ]
  },
  
  en: {
    // English version mirror structure (abbreviated for space)
    hero: {
      title: "AI Use Cases",
      subtitle: "650+ real-world AI applications",
      description: "Real AI solutions with measurable metrics and detailed implementations"
    },
    stats: [
      { value: "18", label: "Detailed use cases", icon: "fa-lightbulb" },
      { value: "100+", label: "Companies", icon: "fa-building" },
      { value: "6", label: "Industries", icon: "fa-industry" },
      { value: "98%", label: "Success rate", icon: "fa-chart-line" }
    ]
    // ... (same structure as FR but in English)
  }
};

function getUnifiedUseCasesData(lang = 'fr') {
  return unifiedUseCasesData[lang] || unifiedUseCasesData.fr;
}
