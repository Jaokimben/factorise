/**
 * Services Data for Factor AI Platform
 * Complete service offerings with detailed descriptions
 * Bilingual FR/EN support
 */

const servicesData = {
  fr: {
    hero: {
      title: "Nos Services IA",
      subtitle: "Des solutions IA sur mesure pour transformer votre entreprise",
      description: "De la stratégie à l'implémentation, nous vous accompagnons dans votre transformation IA avec des solutions éprouvées qui génèrent des résultats concrets."
    },
    services: [
      {
        id: "ai-agents",
        title: "Développement d'Agents IA",
        icon: "fa-robot",
        tagline: "Automatisez vos processus métier avec des agents intelligents",
        description: "Créez des agents IA conversationnels qui automatisent vos tâches répétitives, améliorent l'expérience client et accélèrent la croissance de votre entreprise.",
        features: [
          "Génération de leads automatisée",
          "Qualification intelligente des prospects",
          "Communication client personnalisée 24/7",
          "Voice bots multilingues",
          "Solutions sur mesure adaptées à vos besoins"
        ],
        benefits: [
          "Réduction de 60% du temps de traitement",
          "Taux de conversion augmenté de 40%",
          "Disponibilité 24/7 sans coût supplémentaire",
          "Scalabilité illimitée"
        ],
        useCases: [
          "Service client automatisé",
          "Prospection commerciale",
          "Support technique niveau 1",
          "Prise de rendez-vous"
        ],
        metrics: {
          timeSaved: "60%",
          costReduction: "$500K/an",
          satisfaction: "92%"
        }
      },
      {
        id: "workflow-automation",
        title: "Automatisation de Workflows",
        icon: "fa-project-diagram",
        tagline: "Optimisez vos opérations avec l'automatisation intelligente",
        description: "Éliminez les tâches manuelles répétitives et connectez vos systèmes pour créer des workflows fluides et efficaces.",
        features: [
          "Automatisation de processus métier",
          "Gestion CRM intelligente",
          "Qualification automatique des leads",
          "Intégrations multi-plateformes",
          "Systèmes de web scraping avancés"
        ],
        benefits: [
          "Économie de 40 heures/semaine par équipe",
          "Réduction de 80% des erreurs manuelles",
          "ROI positif en moins de 3 mois",
          "Intégration transparente avec vos outils existants"
        ],
        useCases: [
          "Synchronisation CRM automatique",
          "Traitement de documents",
          "Gestion de commandes",
          "Reporting automatisé"
        ],
        metrics: {
          timeSaved: "40h/semaine",
          errorReduction: "80%",
          roi: "3 mois"
        }
      },
      {
        id: "chatbots",
        title: "Développement de Chatbots",
        icon: "fa-comments",
        tagline: "Engagez vos clients avec des conversations intelligentes",
        description: "Des chatbots intelligents entraînés avec votre ton de voix, capables de comprendre le contexte et de fournir des réponses pertinentes qui améliorent l'expérience client.",
        features: [
          "Chatbots personnalisés à votre marque",
          "Compréhension du langage naturel (NLU)",
          "Multi-canal (web, WhatsApp, Messenger, SMS)",
          "Apprentissage continu",
          "Escalade intelligente vers humains"
        ],
        benefits: [
          "Réponse instantanée 24/7",
          "Réduction de 70% du volume de support",
          "Taux de résolution de 85% en première interaction",
          "Augmentation de 25% des conversions"
        ],
        useCases: [
          "Support client",
          "FAQ automatisées",
          "Qualification de leads",
          "Recommandations produits"
        ],
        metrics: {
          responseTime: "< 1 sec",
          resolutionRate: "85%",
          conversionBoost: "25%"
        }
      },
      {
        id: "voice-ai",
        title: "Agents IA Vocaux",
        icon: "fa-microphone-alt",
        tagline: "Service client vocal automatisé et personnalisé",
        description: "Agents vocaux IA qui comprennent, conversent et résolvent les demandes clients par téléphone avec une qualité proche de l'humain.",
        features: [
          "Reconnaissance vocale multilingue",
          "Voix naturelles et personnalisables",
          "Gestion d'appels entrants et sortants",
          "Intégration téléphonie cloud",
          "Analytics et insights en temps réel"
        ],
        benefits: [
          "Économies de 1M$/an en moyenne",
          "Amélioration de 84% du temps de résolution",
          "Augmentation de 35% de la satisfaction client",
          "Gestion de milliers d'appels simultanés"
        ],
        useCases: [
          "Centre d'appels automatisé",
          "Prise de rendez-vous",
          "Enquêtes de satisfaction",
          "Rappels et notifications"
        ],
        metrics: {
          costSavings: "$1M/an",
          resolutionImprovement: "84%",
          satisfaction: "35%+"
        }
      },
      {
        id: "krs",
        title: "Systèmes de Récupération de Connaissances (KRS)",
        icon: "fa-database",
        tagline: "Accédez instantanément à toutes vos données d'entreprise",
        description: "Une interface IA conversationnelle qui se connecte à toutes vos sources de données pour fournir des réponses précises et des insights actionnables.",
        features: [
          "Interface de chat IA locale ou cloud",
          "Connexion à toutes vos bases de données",
          "Présentation insights (texte, graphiques, tableaux)",
          "Entrée vocale et textuelle",
          "Réponses contextuelles intelligentes",
          "Support multilingue"
        ],
        benefits: [
          "Temps de recherche d'information réduit de 90%",
          "Accès démocratisé aux données pour tous",
          "Sécurité et confidentialité garanties (local/on-premise)",
          "ROI mesurable sur la productivité"
        ],
        useCases: [
          "Recherche documentaire",
          "Business intelligence",
          "Support technique interne",
          "Onboarding employés"
        ],
        metrics: {
          searchTimeReduction: "90%",
          dataAccess: "100%",
          security: "On-premise"
        }
      },
      {
        id: "consulting-individual",
        title: "Conseil Individuel IA",
        icon: "fa-user-tie",
        tagline: "Accompagnement personnalisé pour entrepreneurs et agences",
        description: "Coaching et conseil stratégique pour comprendre comment l'IA peut transformer votre activité et identifier les opportunités à fort impact.",
        features: [
          "Planification stratégique IA",
          "Évaluation de faisabilité",
          "Identification de cas d'usage",
          "Workshops pour propriétaires d'agences",
          "Roadmap personnalisée"
        ],
        benefits: [
          "Clarté sur votre stratégie IA",
          "Priorisation des initiatives à fort ROI",
          "Éviter les erreurs coûteuses",
          "Accélération de l'adoption IA"
        ],
        useCases: [
          "Audit de maturité IA",
          "Définition de stratégie",
          "Formation équipes",
          "Sélection de technologies"
        ],
        metrics: {
          sessionDuration: "2-4h",
          deliverables: "Roadmap + Plan",
          followUp: "3 mois"
        }
      },
      {
        id: "consulting-enterprise",
        title: "Conseil PME & Entreprises",
        icon: "fa-building",
        tagline: "Transformation IA complète pour organisations",
        description: "Conseil stratégique de bout en bout pour intégrer l'IA dans toute votre organisation, de la stratégie à l'implémentation et au changement culturel.",
        features: [
          "Audit complet de maturité IA",
          "Stratégie IA alignée business",
          "Architecture et gouvernance",
          "Implémentation et intégration",
          "Change management et formation",
          "Mesure du ROI et optimisation continue"
        ],
        benefits: [
          "Augmentation de 30-50% de la productivité",
          "Réduction des coûts opérationnels de 20-40%",
          "Amélioration de la compétitivité",
          "Culture d'innovation renforcée"
        ],
        useCases: [
          "Transformation digitale IA",
          "Optimisation opérationnelle",
          "Innovation produit",
          "Excellence client"
        ],
        metrics: {
          productivity: "30-50%",
          costReduction: "20-40%",
          engagement: "6-12 mois"
        }
      }
    ],
    process: {
      title: "Notre Processus Éprouvé",
      subtitle: "Une approche en 3 étapes pour des résultats garantis",
      steps: [
        {
          number: 1,
          title: "Consultation Gratuite",
          icon: "fa-handshake",
          description: "Nous comprenons vos besoins et objectifs business",
          details: [
            "Analyse de vos défis actuels",
            "Identification des opportunités IA",
            "Évaluation du potentiel ROI",
            "Recommandations initiales"
          ],
          duration: "30-60 min",
          output: "Rapport d'opportunités"
        },
        {
          number: 2,
          title: "Diagramme de Flux & POC",
          icon: "fa-project-diagram",
          description: "Validation rapide avec un proof-of-concept",
          details: [
            "Création de diagrammes de processus",
            "Développement POC en 1-2 semaines",
            "Tests avec données réelles",
            "Validation de la faisabilité technique"
          ],
          duration: "1-2 semaines",
          output: "POC fonctionnel + Documentation"
        },
        {
          number: 3,
          title: "Lancement Projet",
          icon: "fa-rocket",
          tagline: "Transformation IA complète",
          description: "Déploiement et intégration dans votre infrastructure",
          details: [
            "Intégration avec votre stack existant",
            "Architecture scalable et sécurisée",
            "Formation de vos équipes",
            "Support et optimisation continue"
          ],
          duration: "4-12 semaines",
          output: "Solution IA en production"
        }
      ]
    },
    cta: {
      title: "Prêt à Transformer Votre Entreprise avec l'IA ?",
      subtitle: "Planifiez votre consultation gratuite aujourd'hui",
      primaryButton: "Réserver une consultation",
      secondaryButton: "Télécharger nos cas d'usage",
      guarantee: "Sans engagement. Résultats garantis ou remboursé."
    }
  },
  en: {
    hero: {
      title: "Our AI Services",
      subtitle: "Custom AI solutions to transform your business",
      description: "From strategy to implementation, we guide you through your AI transformation with proven solutions that deliver concrete results."
    },
    services: [
      {
        id: "ai-agents",
        title: "AI Agents Development",
        icon: "fa-robot",
        tagline: "Automate your business processes with intelligent agents",
        description: "Build conversational AI agents that automate repetitive tasks, improve customer experience, and accelerate your business growth.",
        features: [
          "Automated lead generation",
          "Intelligent prospect qualification",
          "24/7 personalized customer communication",
          "Multilingual voice bots",
          "Custom solutions tailored to your needs"
        ],
        benefits: [
          "60% reduction in processing time",
          "40% increase in conversion rates",
          "24/7 availability at no extra cost",
          "Unlimited scalability"
        ],
        useCases: [
          "Automated customer service",
          "Sales prospecting",
          "Level 1 technical support",
          "Appointment scheduling"
        ],
        metrics: {
          timeSaved: "60%",
          costReduction: "$500K/year",
          satisfaction: "92%"
        }
      },
      {
        id: "workflow-automation",
        title: "Workflow Automation",
        icon: "fa-project-diagram",
        tagline: "Optimize your operations with intelligent automation",
        description: "Eliminate repetitive manual tasks and connect your systems to create smooth and efficient workflows.",
        features: [
          "Business process automation",
          "Intelligent CRM management",
          "Automatic lead qualification",
          "Multi-platform integrations",
          "Advanced web scraping systems"
        ],
        benefits: [
          "Save 40 hours/week per team",
          "80% reduction in manual errors",
          "Positive ROI in under 3 months",
          "Seamless integration with existing tools"
        ],
        useCases: [
          "Automatic CRM synchronization",
          "Document processing",
          "Order management",
          "Automated reporting"
        ],
        metrics: {
          timeSaved: "40h/week",
          errorReduction: "80%",
          roi: "3 months"
        }
      },
      {
        id: "chatbots",
        title: "Chatbot Development",
        icon: "fa-comments",
        tagline: "Engage your customers with intelligent conversations",
        description: "Intelligent chatbots trained in your brand voice, capable of understanding context and providing relevant responses that enhance customer experience.",
        features: [
          "Brand-personalized chatbots",
          "Natural Language Understanding (NLU)",
          "Multi-channel (web, WhatsApp, Messenger, SMS)",
          "Continuous learning",
          "Intelligent escalation to humans"
        ],
        benefits: [
          "Instant 24/7 response",
          "70% reduction in support volume",
          "85% first-contact resolution rate",
          "25% increase in conversions"
        ],
        useCases: [
          "Customer support",
          "Automated FAQs",
          "Lead qualification",
          "Product recommendations"
        ],
        metrics: {
          responseTime: "< 1 sec",
          resolutionRate: "85%",
          conversionBoost: "25%"
        }
      },
      {
        id: "voice-ai",
        title: "Voice AI Agents",
        icon: "fa-microphone-alt",
        tagline: "Automated and personalized voice customer service",
        description: "AI voice agents that understand, converse, and resolve customer requests over the phone with near-human quality.",
        features: [
          "Multilingual voice recognition",
          "Natural and customizable voices",
          "Inbound and outbound call handling",
          "Cloud telephony integration",
          "Real-time analytics and insights"
        ],
        benefits: [
          "Average savings of $1M/year",
          "84% improvement in resolution time",
          "35% increase in customer satisfaction",
          "Handle thousands of simultaneous calls"
        ],
        useCases: [
          "Automated call center",
          "Appointment booking",
          "Satisfaction surveys",
          "Reminders and notifications"
        ],
        metrics: {
          costSavings: "$1M/year",
          resolutionImprovement: "84%",
          satisfaction: "35%+"
        }
      },
      {
        id: "krs",
        title: "Knowledge Retrieval Systems (KRS)",
        icon: "fa-database",
        tagline: "Instant access to all your enterprise data",
        description: "A conversational AI interface that connects to all your data sources to provide accurate answers and actionable insights.",
        features: [
          "Local or cloud AI chat interface",
          "Connect to all your databases",
          "Present insights (text, charts, tables)",
          "Voice and text input",
          "Intelligent contextual responses",
          "Multilingual support"
        ],
        benefits: [
          "90% reduction in information search time",
          "Democratized data access for everyone",
          "Guaranteed security and privacy (local/on-premise)",
          "Measurable productivity ROI"
        ],
        useCases: [
          "Document search",
          "Business intelligence",
          "Internal technical support",
          "Employee onboarding"
        ],
        metrics: {
          searchTimeReduction: "90%",
          dataAccess: "100%",
          security: "On-premise"
        }
      },
      {
        id: "consulting-individual",
        title: "Individual AI Consulting",
        icon: "fa-user-tie",
        tagline: "Personalized coaching for entrepreneurs and agencies",
        description: "Strategic coaching and consulting to understand how AI can transform your business and identify high-impact opportunities.",
        features: [
          "AI strategic planning",
          "Feasibility assessment",
          "Use case identification",
          "Workshops for agency owners",
          "Personalized roadmap"
        ],
        benefits: [
          "Clarity on your AI strategy",
          "Prioritization of high-ROI initiatives",
          "Avoid costly mistakes",
          "Accelerated AI adoption"
        ],
        useCases: [
          "AI maturity audit",
          "Strategy definition",
          "Team training",
          "Technology selection"
        ],
        metrics: {
          sessionDuration: "2-4h",
          deliverables: "Roadmap + Plan",
          followUp: "3 months"
        }
      },
      {
        id: "consulting-enterprise",
        title: "SME & Enterprise Consulting",
        icon: "fa-building",
        tagline: "Complete AI transformation for organizations",
        description: "End-to-end strategic consulting to integrate AI across your entire organization, from strategy to implementation and cultural change.",
        features: [
          "Complete AI maturity audit",
          "Business-aligned AI strategy",
          "Architecture and governance",
          "Implementation and integration",
          "Change management and training",
          "ROI measurement and continuous optimization"
        ],
        benefits: [
          "30-50% increase in productivity",
          "20-40% reduction in operational costs",
          "Improved competitiveness",
          "Strengthened innovation culture"
        ],
        useCases: [
          "AI digital transformation",
          "Operational optimization",
          "Product innovation",
          "Customer excellence"
        ],
        metrics: {
          productivity: "30-50%",
          costReduction: "20-40%",
          engagement: "6-12 months"
        }
      }
    ],
    process: {
      title: "Our Proven Process",
      subtitle: "A 3-step approach for guaranteed results",
      steps: [
        {
          number: 1,
          title: "Free Consultation",
          icon: "fa-handshake",
          description: "We understand your business needs and goals",
          details: [
            "Analysis of your current challenges",
            "Identification of AI opportunities",
            "ROI potential assessment",
            "Initial recommendations"
          ],
          duration: "30-60 min",
          output: "Opportunities report"
        },
        {
          number: 2,
          title: "Flow Diagram & POC",
          icon: "fa-project-diagram",
          description: "Rapid validation with a proof-of-concept",
          details: [
            "Process diagram creation",
            "POC development in 1-2 weeks",
            "Testing with real data",
            "Technical feasibility validation"
          ],
          duration: "1-2 weeks",
          output: "Functional POC + Documentation"
        },
        {
          number: 3,
          title: "Project Kick-off",
          icon: "fa-rocket",
          description: "Deployment and integration into your infrastructure",
          details: [
            "Integration with your existing stack",
            "Scalable and secure architecture",
            "Team training",
            "Ongoing support and optimization"
          ],
          duration: "4-12 weeks",
          output: "AI solution in production"
        }
      ]
    },
    cta: {
      title: "Ready to Transform Your Business with AI?",
      subtitle: "Schedule your free consultation today",
      primaryButton: "Book a consultation",
      secondaryButton: "Download our use cases",
      guarantee: "No commitment. Results guaranteed or money back."
    }
  }
};

// Helper function to get services data
function getServicesData(lang = 'fr') {
  return servicesData[lang] || servicesData.fr;
}

// Helper function to get specific service
function getServiceById(serviceId, lang = 'fr') {
  const data = getServicesData(lang);
  return data.services.find(s => s.id === serviceId);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { servicesData, getServicesData, getServiceById };
}
