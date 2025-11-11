/**
 * Detailed Case Studies Data for Factor AI Platform
 * In-depth success stories with comprehensive metrics
 * Bilingual FR/EN support
 */

const caseStudiesData = {
  fr: {
    hero: {
      title: "Études de Cas",
      subtitle: "Découvrez comment nous transformons les entreprises avec l'IA",
      description: "Des résultats concrets, des métriques mesurables, des transformations réelles"
    },
    
    filters: [
      { id: "all", label: "Tous", icon: "fa-th" },
      { id: "ecommerce", label: "E-commerce", icon: "fa-shopping-cart" },
      { id: "finance", label: "Finance", icon: "fa-dollar-sign" },
      { id: "saas", label: "SaaS", icon: "fa-cloud" },
      { id: "healthcare", label: "Santé", icon: "fa-heartbeat" },
      { id: "manufacturing", label: "Manufacturing", icon: "fa-industry" },
      { id: "retail", label: "Retail", icon: "fa-store" }
    ],
    
    caseStudies: [
      {
        id: "fashionhub-chatbot",
        featured: true,
        client: "FashionHub",
        industry: "E-commerce Mode",
        category: "ecommerce",
        companySize: "50-200 employés",
        location: "Paris, France",
        duration: "3 mois",
        title: "Réduction de 70% du temps de réponse avec un Assistant IA 24/7",
        heroImage: "fashionhub-hero.jpg",
        tagline: "Comment un e-commerce mode a triplé sa capacité de support sans embaucher",
        
        challenge: {
          title: "Le Défi",
          description: "FashionHub recevait plus de 5000 demandes clients par mois via chat, email et réseaux sociaux. Avec seulement 8 agents, les temps de réponse atteignaient 24-48h en période de pointe. 35% des clients abandonnaient avant d'obtenir une réponse, impactant directement les ventes et la réputation.",
          painPoints: [
            "Temps de réponse moyen de 18 heures",
            "Taux d'abandon de 35% sur le chat",
            "Pics de demandes durant soldes non gérables",
            "Coût du support à 45K€/mois avec turnover élevé",
            "Questions répétitives (retours, tailles, livraison) = 70% du volume"
          ],
          quote: "Nous perdions des ventes à cause de notre incapacité à répondre rapidement. Les clients modernes veulent des réponses instantanées.",
          quoteAuthor: "Marie Dubois",
          quoteRole: "Directrice E-commerce"
        },
        
        solution: {
          title: "Notre Solution",
          description: "Nous avons développé un assistant IA conversationnel multicanal (web, WhatsApp, Instagram) avec accès en temps réel aux données produits, stock et commandes. L'IA gère 80% des demandes de manière autonome et escalade intelligemment les cas complexes aux agents humains.",
          approach: [
            "Analyse de 50K+ conversations historiques pour training",
            "Intégration API Shopify, système de gestion des stocks",
            "Personnalisation du tone of voice FashionHub",
            "Tests A/B sur 2 semaines avec 20% du trafic",
            "Formation des agents sur collaboration humain-IA",
            "Déploiement progressif sur 6 semaines"
          ],
          technologies: [
            "GPT-4 Turbo",
            "Dialogflow CX",
            "Shopify API",
            "WhatsApp Business API",
            "Sentiment Analysis",
            "Vector Database (Pinecone)"
          ],
          features: [
            "Réponses instantanées 24/7 en français et anglais",
            "Recommandations produits personnalisées",
            "Gestion automatique retours et remboursements",
            "Escalade intelligente vers agents humains",
            "Dashboard analytics temps réel"
          ]
        },
        
        results: {
          title: "Résultats Mesurables",
          timeline: "Après 3 mois",
          description: "Les résultats ont dépassé toutes les attentes avec un ROI positif dès le 2ème mois.",
          metrics: [
            {
              label: "Temps de réponse",
              before: "18 heures",
              after: "< 2 secondes",
              improvement: "-99.7%",
              icon: "fa-clock",
              color: "blue"
            },
            {
              label: "Taux de résolution",
              before: "65%",
              after: "84%",
              improvement: "+29%",
              icon: "fa-check-circle",
              color: "green"
            },
            {
              label: "Coûts support",
              before: "45K€/mois",
              after: "16K€/mois",
              improvement: "-64%",
              icon: "fa-dollar-sign",
              color: "purple"
            },
            {
              label: "Satisfaction client (NPS)",
              before: "32",
              after: "68",
              improvement: "+113%",
              icon: "fa-smile",
              color: "orange"
            },
            {
              label: "Conversations gérées",
              before: "5K/mois",
              after: "15K/mois",
              improvement: "+200%",
              icon: "fa-comments",
              color: "indigo"
            },
            {
              label: "ROI",
              before: "-",
              after: "450%",
              improvement: "Premier année",
              icon: "fa-chart-line",
              color: "green"
            }
          ],
          businessImpact: [
            "348K€ d'économies annuelles sur coûts de support",
            "Capacité de gérer 3x plus de volume sans embauche",
            "Conversion +12% grâce aux réponses instantanées",
            "Zero turnover agents (travail plus intéressant)",
            "Extension à 3 nouveaux marchés sans augmentation d'équipe"
          ]
        },
        
        testimonial: {
          quote: "Factor AI a non seulement résolu notre problème de scalabilité du support, mais a transformé notre service client en avantage compétitif. Le chatbot est devenu le membre le plus performant de l'équipe !",
          author: "Marie Dubois",
          role: "Directrice E-commerce, FashionHub",
          avatar: "MD",
          fullStory: "Au début, nous étions sceptiques qu'une IA puisse vraiment comprendre les nuances de la mode et le ton de notre marque. Mais après voir les premiers résultats des tests, nous avons été bluffés. Le chatbot répond avec notre voix, fait des recommandations pertinentes, et surtout, il apprend continuellement. Nos clients ne font même plus la différence avec un humain dans 90% des cas. Le meilleur investissement que nous ayons fait cette année."
        },
        
        nextSteps: [
          "Expansion à l'allemand et l'espagnol",
          "Intégration assistant vocal pour le téléphone",
          "Personnalisation poussée avec historique d'achat",
          "Proactive outreach pour abandon panier"
        ]
      },
      
      {
        id: "financeconnect-voice",
        featured: true,
        client: "FinanceConnect",
        industry: "Services Financiers",
        category: "finance",
        companySize: "200-500 employés",
        location: "Luxembourg",
        duration: "4 mois",
        title: "900K€ d'économies annuelles avec un Agent Vocal IA",
        tagline: "Transformation du centre d'appels avec IA vocale multilingue",
        
        challenge: {
          title: "Le Défi",
          description: "FinanceConnect gérait 50K appels/mois avec un centre de 45 agents. 65% des appels concernaient des demandes simples (soldes, transactions, RIB) mais nécessitaient 8 minutes en moyenne par appel. Coûts annuels: 2.4M€ avec pic à 3M€ durant la période fiscale.",
          painPoints: [
            "2.4M€/an de coûts de centre d'appels",
            "Pics de volume ingérables (période fiscale)",
            "Temps d'attente moyen de 12 minutes",
            "Agents surchargés par tâches répétitives",
            "Support multilingue (FR/EN/DE) très coûteux"
          ],
          quote: "Nos agents passaient 70% de leur temps sur des questions répétitives au lieu d'accompagner les clients sur des sujets complexes à forte valeur ajoutée.",
          quoteAuthor: "Thomas Laurent",
          quoteRole: "COO"
        },
        
        solution: {
          title: "Notre Solution",
          description: "Agent vocal IA capable de gérer authentification sécurisée, consultation de comptes, historique transactions, et demandes courantes dans 3 langues. Intégration native avec le core banking system pour données en temps réel.",
          approach: [
            "POC de 2 semaines sur 5% du trafic",
            "Intégration sécurisée core banking (ISO 27001)",
            "Training avec 100K+ transcriptions d'appels",
            "Voice biométrie pour authentification",
            "Tests d'acceptation utilisateur extensifs",
            "Déploiement progressif sur 8 semaines"
          ],
          technologies: [
            "Google Cloud Speech-to-Text",
            "GPT-4 for reasoning",
            "AWS Polly (voix naturelles)",
            "Twilio Voice API",
            "Voice Biometrics",
            "Core Banking API (encrypted)"
          ],
          features: [
            "Authentification vocale biométrique sécurisée",
            "Consultation soldes et transactions en temps réel",
            "Virements simples par commande vocale",
            "Support FR/EN/DE/LU avec détection auto",
            "Escalade intelligente vers agents si besoin",
            "Conformité GDPR et Luxembourg banking regulations"
          ]
        },
        
        results: {
          title: "Résultats Mesurables",
          timeline: "Après 4 mois",
          description: "Impact massif sur l'efficacité opérationnelle et la satisfaction client",
          metrics: [
            {
              label: "Appels automatisés",
              before: "0%",
              after: "70%",
              improvement: "+70%",
              icon: "fa-phone",
              color: "blue"
            },
            {
              label: "Temps d'attente",
              before: "12 min",
              after: "45 sec",
              improvement: "-94%",
              icon: "fa-clock",
              color: "green"
            },
            {
              label: "Coûts annuels",
              before: "2.4M€",
              after: "1.5M€",
              improvement: "-38%",
              icon: "fa-euro-sign",
              color: "purple"
            },
            {
              label: "NPS",
              before: "28",
              after: "61",
              improvement: "+118%",
              icon: "fa-heart",
              color: "red"
            },
            {
              label: "Appels traités",
              before: "50K/mois",
              after: "85K/mois",
              improvement: "+70%",
              icon: "fa-chart-bar",
              color: "indigo"
            },
            {
              label: "Agent satisfaction",
              before: "6.2/10",
              after: "8.7/10",
              improvement: "+40%",
              icon: "fa-smile-beam",
              color: "yellow"
            }
          ],
          businessImpact: [
            "900K€ d'économies annuelles (ROI 320% an 1)",
            "Capacité étendue sans embauche durant période fiscale",
            "Agents focalisés sur conseil patrimonial (revenue +)",
            "Expansion Luxembourg/Belgique sans centre supplémentaire",
            "Conformité réglementaire 100% (audit passed)"
          ]
        },
        
        testimonial: {
          quote: "L'agent vocal IA a non seulement réduit nos coûts drastiquement, mais a aussi libéré nos agents pour qu'ils se concentrent sur du conseil à vraie valeur ajoutée. Nos meilleurs conseillers ne veulent plus revenir aux tâches répétitives !",
          author: "Thomas Laurent",
          role: "COO, FinanceConnect",
          avatar: "TL",
          fullStory: "Nous étions préoccupés par la sécurité et la conformité. Factor AI a travaillé main dans la main avec notre CISO pour garantir que tout soit conforme aux régulations bancaires luxembourgeoises. Le système a passé tous nos audits de sécurité. Et côté business, les résultats parlent d'eux-mêmes: 900K€ d'économies dès la première année, et surtout, des clients beaucoup plus satisfaits."
        },
        
        nextSteps: [
          "Extension à l'italien et portugais",
          "Conseil financier basique automatisé",
          "Détection de fraude en temps réel sur appels",
          "Intégration SMS/WhatsApp banking"
        ]
      },
      
      {
        id: "dataflow-knowledge",
        featured: true,
        client: "DataFlow Analytics",
        industry: "SaaS B2B",
        category: "saas",
        companySize: "100-200 employés",
        location: "Amsterdam, Pays-Bas",
        duration: "5 mois",
        title: "Réduction de 90% du temps de recherche interne avec Knowledge AI",
        tagline: "De 45 minutes à 2 minutes pour trouver l'information critique",
        
        challenge: {
          title: "Le Défi",
          description: "DataFlow avait 8 ans de documentation éparpillée dans Confluence, Google Docs, Slack, GitHub, et wikis internes. Les employés passaient 45 minutes en moyenne pour trouver une information, et 30% du temps, ils renonçaient et redemandaient à des collègues, créant des interruptions constantes.",
          painPoints: [
            "Information dispersée dans 7+ systèmes différents",
            "45 minutes/recherche en moyenne (10h/semaine/employé)",
            "30% des recherches échouaient complètement",
            "Nouveaux employés perdus pendant 3+ mois",
            "Connaissance tacite non documentée (départ employés)",
            "Coût estimé: 500K€/an en productivité perdue"
          ],
          quote: "Nous avions une 'amnésie organisationnelle'. Chaque départ d'employé emportait des années de connaissance critique, et les nouveaux mettaient des mois à devenir autonomes.",
          quoteAuthor: "Lisa Chen",
          quoteRole: "VP Engineering"
        },
        
        solution: {
          title: "Notre Solution",
          description: "Agent IA de knowledge management qui indexe, comprend et rend accessible toute la connaissance d'entreprise. Interface conversationnelle permettant de poser des questions en langage naturel et recevoir des réponses précises avec sources.",
          approach: [
            "Audit complet des sources de connaissance (14 systèmes)",
            "Indexation de 2.5M+ documents avec embeddings",
            "Training contextuel sur jargon et processus DataFlow",
            "Interface Slack + web app",
            "Formation ambassadeurs internes (15 champions)",
            "Gamification pour encourager adoption"
          ],
          technologies: [
            "GPT-4 + Embeddings (OpenAI)",
            "Vector Database (Pinecone)",
            "Confluence/Jira/GitHub APIs",
            "Slack App",
            "Semantic Search",
            "RAG (Retrieval-Augmented Generation)"
          ],
          features: [
            "Recherche sémantique sur toutes les sources",
            "Réponses avec citations et liens sources",
            "Suggestions de contenu connexe",
            "Détection gaps de documentation",
            "Interface Slack (/ask commande)",
            "Analytics sur questions fréquentes"
          ]
        },
        
        results: {
          title: "Résultats Mesurables",
          timeline: "Après 5 mois",
          description: "Transformation radicale de la productivité et de l'onboarding",
          metrics: [
            {
              label: "Temps de recherche",
              before: "45 min",
              after: "2 min",
              improvement: "-96%",
              icon: "fa-search",
              color: "blue"
            },
            {
              label: "Taux de succès",
              before: "70%",
              after: "94%",
              improvement: "+34%",
              icon: "fa-bullseye",
              color: "green"
            },
            {
              label: "Questions répétées",
              before: "40%",
              after: "8%",
              improvement: "-80%",
              icon: "fa-redo",
              color: "purple"
            },
            {
              label: "Onboarding time",
              before: "12 semaines",
              after: "4 semaines",
              improvement: "-67%",
              icon: "fa-user-graduate",
              color: "orange"
            },
            {
              label: "Productivité gagnée",
              before: "-",
              after: "8h/semaine",
              improvement: "Par employé",
              icon: "fa-rocket",
              color: "indigo"
            },
            {
              label: "ROI",
              before: "-",
              after: "580%",
              improvement: "Première année",
              icon: "fa-chart-line",
              color: "green"
            }
          ],
          businessImpact: [
            "450K€ de productivité récupérée (8h/sem × 150 employés)",
            "Onboarding 3x plus rapide (économie 200K€/an)",
            "Zero perte de connaissance lors de départs",
            "Time-to-market produits réduit de 25%",
            "Culture de documentation renforcée (gamification)"
          ]
        },
        
        testimonial: {
          quote: "C'est comme avoir un collègue senior qui connaît absolument tout et est disponible 24/7. L'IA a transformé notre façon de travailler. Mes équipes sont 25% plus productives, et les nouveaux sont opérationnels en 4 semaines au lieu de 3 mois.",
          author: "Lisa Chen",
          role: "VP Engineering, DataFlow Analytics",
          avatar: "LC",
          fullStory: "Le problème de connaissance était notre plus gros frein à la croissance. Quand un expert partait, c'était catastrophique. Maintenant, toute la connaissance est indexée et accessible en secondes. Les développeurs adorent parce qu'ils peuvent rester dans leur flow au lieu de chasser l'information. Et côté business, le ROI est impressionnant: on a récupéré l'équivalent de 20 ETP en productivité. Meilleur investissement tech qu'on ait jamais fait."
        },
        
        nextSteps: [
          "Génération automatique de documentation à partir du code",
          "Suggestions proactives pendant le développement (IDE plugin)",
          "Training personnalisé pour chaque rôle",
          "Extension aux connaissances clients (support tier 2)"
        ]
      },
      
      {
        id: "healthtech-diagnostic",
        featured: false,
        client: "MediScan",
        industry: "HealthTech",
        category: "healthcare",
        companySize: "50-100 employés",
        location: "Genève, Suisse",
        duration: "6 mois",
        title: "Détection précoce d'anomalies médicales avec 94% de précision",
        tagline: "IA d'aide au diagnostic réduisant le temps d'analyse de 60%",
        
        challenge: {
          title: "Le Défi",
          description: "Les radiologues de MediScan analysaient 200+ scanners par jour, prenant 15-20 minutes par image. Risque de fatigue cognitive et d'anomalies manquées. Délais de diagnostic de 48-72h inacceptables pour cas urgents.",
          painPoints: [
            "15-20 min par analyse d'imagerie",
            "Fatigue cognitive après 6h d'analyse continue",
            "5-8% faux négatifs sur détection précoce",
            "Délais 48-72h pour résultats (urgences excluded)",
            "Coût: 1.2M€/an en radiologues surchargés"
          ],
          quote: "Nous avions besoin d'un second regard infatigable qui ne rate jamais une anomalie, même minuscule.",
          quoteAuthor: "Dr. Sarah Weber",
          quoteRole: "Chief Medical Officer"
        },
        
        solution: {
          title: "Notre Solution",
          description: "IA de computer vision entraînée sur 500K+ images médicales annotées. Détection automatique d'anomalies avec scoring de probabilité et heatmaps. Les radiologues review uniquement les cas flaggés, gagnant 60% de temps.",
          approach: [
            "Certification médicale CE et FDA Class II",
            "Training sur 500K images + validation clinique",
            "Intégration PACS (Picture Archiving System)",
            "Tests cliniques avec 5 radiologues sur 6 mois",
            "Validation externe hôpital universitaire",
            "Formation radiologues à collaboration IA"
          ],
          technologies: [
            "ResNet-152 (Custom fine-tuned)",
            "Grad-CAM (explicabilité)",
            "DICOM Processing",
            "PACS Integration",
            "Cloud Healthcare API (HIPAA compliant)",
            "TensorFlow Medical"
          ],
          features: [
            "Détection multi-pathologies (12 types d'anomalies)",
            "Scoring de probabilité avec niveau de confiance",
            "Heatmaps pour localisation précise",
            "Comparaison temporelle automatique",
            "Priorisation des cas urgents",
            "Conformité HIPAA/GDPR"
          ]
        },
        
        results: {
          title: "Résultats Mesurables",
          timeline: "Après validation clinique (6 mois)",
          description: "Amélioration significative de la précision et de la rapidité diagnostique",
          metrics: [
            {
              label: "Temps d'analyse",
              before: "18 min",
              after: "7 min",
              improvement: "-61%",
              icon: "fa-clock",
              color: "blue"
            },
            {
              label: "Précision détection",
              before: "92%",
              after: "97.2%",
              improvement: "+5.6%",
              icon: "fa-crosshairs",
              color: "green"
            },
            {
              label: "Faux négatifs",
              before: "7.5%",
              after: "2.1%",
              improvement: "-72%",
              icon: "fa-exclamation-triangle",
              color: "red"
            },
            {
              label: "Délais résultats",
              before: "60h",
              after: "6h",
              improvement: "-90%",
              icon: "fa-hourglass",
              color: "purple"
            },
            {
              label: "Capacité traitement",
              before: "200/jour",
              after: "480/jour",
              improvement: "+140%",
              icon: "fa-chart-bar",
              color: "indigo"
            },
            {
              label: "Satisfaction radiologues",
              before: "6.8/10",
              after: "9.1/10",
              improvement: "+34%",
              icon: "fa-smile",
              color: "yellow"
            }
          ],
          businessImpact: [
            "Détection précoce sauvant potentiellement des vies",
            "Capacité 2.4x sans embauche de radiologues (pénurie)",
            "Réduction fatigue cognitive et burnout radiologues",
            "Expansion à 3 nouveaux centres sans recrutement",
            "Publication dans journal médical peer-reviewed"
          ]
        },
        
        testimonial: {
          quote: "L'IA n'a pas remplacé nos radiologues, elle les a rendus surhumains. Ils travaillent 2x plus vite avec 2x plus de précision, et surtout, ils ne manquent plus jamais une anomalie critique. C'est une révolution pour la médecine préventive.",
          author: "Dr. Sarah Weber",
          role: "Chief Medical Officer, MediScan",
          avatar: "SW",
          fullStory: "Au début, les radiologues étaient sceptiques. Certains voyaient l'IA comme une menace. Mais dès les premières semaines de tests, ils ont vu la valeur: l'IA détecte des anomalies microscopiques qu'un œil humain fatigué pourrait manquer. Maintenant, ils ne peuvent plus s'en passer. C'est leur assistant personnel qui ne dort jamais, ne se fatigue jamais, et qui leur permet de se concentrer sur l'interprétation complexe et le contact patient. Résultat: radiologues plus heureux, patients mieux diagnostiqués, et centre plus profitable."
        },
        
        nextSteps: [
          "Extension à IRM et échographies",
          "Prédiction de progression pathologique",
          "Intégration dossier patient complet (EHR)",
          "Multilingual reports (FR/EN/DE/IT)"
        ]
      },
      
      {
        id: "manufacturing-predictive",
        featured: false,
        client: "IndustrialTech",
        industry: "Manufacturing",
        category: "manufacturing",
        companySize: "500-1000 employés",
        location: "Lyon, France",
        duration: "8 mois",
        title: "Réduction de 60% du downtime avec Maintenance Prédictive IA",
        tagline: "De réactive à prédictive: transformation de la maintenance industrielle",
        
        challenge: {
          title: "Le Défi",
          description: "IndustrialTech subissait 180h de downtime non planifié par an coûtant 3.5M€. Maintenance réactive causant arrêts coûteux. Pièces de rechange surproduits ou en rupture. Pas de visibilité sur santé équipements.",
          painPoints: [
            "180h downtime non planifié = 3.5M€ pertes/an",
            "Maintenance réactive: panne d'abord, réparation ensuite",
            "Coûts pièces de rechange: 800K€/an (sur-stock ou ruptures)",
            "Zero visibilité sur état de santé machines",
            "Planning maintenance basé sur calendrier, pas sur besoin réel"
          ],
          quote: "Nos machines nous disaient qu'elles allaient casser, mais nous ne les écoutions pas. Chaque panne nous coûtait 20K€ en production perdue.",
          quoteAuthor: "Jean-Marc Petit",
          quoteRole: "Directeur Opérations"
        },
        
        solution: {
          title: "Notre Solution",
          description: "Système IoT + IA de maintenance prédictive analysant 500+ signaux en temps réel par machine. ML prédit pannes 1-4 semaines à l'avance avec 92% précision. Dashboard temps réel pour planification optimale maintenance.",
          approach: [
            "Installation de 1200+ capteurs IoT sur 45 machines critiques",
            "Collection de 6 mois de données baseline",
            "Training ML sur 10 ans d'historique pannes",
            "POC sur 5 machines pilotes (3 mois)",
            "Déploiement progressif par ligne de production",
            "Formation équipes maintenance à nouveau workflow"
          ],
          technologies: [
            "IoT Sensors (vibration, température, pression)",
            "Azure IoT Hub",
            "Time Series Forecasting (LSTM)",
            "Anomaly Detection (Isolation Forest)",
            "Digital Twin",
            "Power BI Dashboards"
          ],
          features: [
            "Monitoring temps réel 500+ métriques/machine",
            "Prédiction de panne 1-4 semaines à l'avance",
            "Scoring de criticité et urgence",
            "Recommandations actions préventives",
            "Planning maintenance optimisé",
            "Alertes multi-canal (email/SMS/dashboard)"
          ]
        },
        
        results: {
          title: "Résultats Mesurables",
          timeline: "Après 8 mois",
          description: "Transformation radicale de l'approche maintenance",
          metrics: [
            {
              label: "Downtime non planifié",
              before: "180h/an",
              after: "68h/an",
              improvement: "-62%",
              icon: "fa-power-off",
              color: "red"
            },
            {
              label: "Coûts maintenance",
              before: "1.2M€/an",
              after: "720K€/an",
              improvement: "-40%",
              icon: "fa-euro-sign",
              color: "green"
            },
            {
              label: "Précision prédictions",
              before: "-",
              after: "92%",
              improvement: "1-4 sem avance",
              icon: "fa-crosshairs",
              color: "purple"
            },
            {
              label: "Durée vie équipements",
              before: "8 ans",
              after: "11 ans",
              improvement: "+38%",
              icon: "fa-cogs",
              color: "blue"
            },
            {
              label: "Stock pièces",
              before: "800K€",
              after: "480K€",
              improvement: "-40%",
              icon: "fa-boxes",
              color: "indigo"
            },
            {
              label: "ROI",
              before: "-",
              after: "380%",
              improvement: "Première année",
              icon: "fa-chart-line",
              color: "green"
            }
          ],
          businessImpact: [
            "2.2M€ économisés en pertes de production évitées",
            "480K€ économie sur coûts maintenance",
            "320K€ réduction stock pièces de rechange",
            "Extension durée vie machines de 38% (report CAPEX)",
            "Zero accident lié à panne critique"
          ]
        },
        
        testimonial: {
          quote: "Nous sommes passés de pompiers qui éteignent des feux à chirurgiens qui opèrent de manière planifiée. Les machines nous parlent maintenant, et nous les écoutons. Le downtime a chuté de 62% et nos équipes sont beaucoup moins stressées.",
          author: "Jean-Marc Petit",
          role: "Directeur Opérations, IndustrialTech",
          avatar: "JP",
          fullStory: "Le changement culturel a été aussi important que la technologie. Nos techniciens devaient apprendre à faire confiance aux prédictions de l'IA plutôt qu'à leur intuition. Maintenant, ils adorent: au lieu de travailler dans l'urgence à 3h du matin pour réparer une panne, ils interviennent de manière planifiée en journée. La qualité de vie au travail s'est améliorée, et nous avons réduit notre turnover de 40%. Sans parler des 2.2M€ économisés en pertes de production."
        },
        
        nextSteps: [
          "Extension à toutes les lignes de production (200 machines)",
          "Optimisation automatique des paramètres machines",
          "Intégration avec ERP pour commandes auto pièces",
          "Predictive quality control"
        ]
      },
      
      {
        id: "retail-personalization",
        featured: false,
        client: "GourmetMarket",
        industry: "Retail Food",
        category: "retail",
        companySize: "20-50 employés",
        location: "Bordeaux, France",
        duration: "4 mois",
        title: "Augmentation de 35% du panier moyen avec Recommandations IA",
        tagline: "Personnalisation à l'échelle dans retail alimentaire premium",
        
        challenge: {
          title: "Le Défi",
          description: "GourmetMarket, chaîne de 12 épiceries fines, avait un panier moyen stagnant à 45€ malgré produits premium. Recommandations manuelles par vendeurs limitées. Aucune personnalisation online. Cross-sell opportunités manquées.",
          painPoints: [
            "Panier moyen stagnant à 45€ depuis 3 ans",
            "Recommandations inconsistantes selon vendeurs",
            "Aucune personnalisation sur site e-commerce",
            "Taux de conversion online: 1.2% (vs 3% industrie)",
            "Clients premium non identifiés en magasin"
          ],
          quote: "Nous connaissions nos réguliers en magasin, mais online nous étions aveugles. Et même en boutique, impossible de personnaliser à grande échelle.",
          quoteAuthor: "Antoine Moreau",
          quoteRole: "Fondateur"
        },
        
        solution: {
          title: "Notre Solution",
          description: "Moteur de recommandations IA analysant historique achats, saisonnalité, occasions, et préférences. Intégration omnicanal (online + terminal point de vente). Vendeurs équipés de tablettes avec suggestions temps réel par client.",
          approach: [
            "Analyse de 5 ans d'historique transactions (2M+)",
            "Clustering clients en 12 personas",
            "Collaborative filtering + content-based recommendations",
            "A/B testing sur site web (6 semaines)",
            "Formation vendeurs à utilisation tablettes",
            "Programme fidélité intégré"
          ],
          technologies: [
            "Recommendation Engine (TensorFlow)",
            "Collaborative Filtering",
            "Real-time CDP (Customer Data Platform)",
            "Shopify Plus",
            "Tablet POS Integration",
            "Email Marketing Automation"
          ],
          features: [
            "Recommandations personnalisées produits",
            "Suggestions recettes basées sur achats",
            "Bundles intelligents (fromage + vin + pain)",
            "Alertes nouveautés selon profil",
            "Tablettes vendeurs avec suggestions temps réel",
            "Email personnalisé hebdomadaire"
          ]
        },
        
        results: {
          title: "Résultats Mesurables",
          timeline: "Après 4 mois",
          description: "Impact significatif sur metrics commerciales",
          metrics: [
            {
              label: "Panier moyen",
              before: "45€",
              after: "61€",
              improvement: "+36%",
              icon: "fa-shopping-cart",
              color: "green"
            },
            {
              label: "Taux conversion online",
              before: "1.2%",
              after: "3.8%",
              improvement: "+217%",
              icon: "fa-mouse-pointer",
              color: "blue"
            },
            {
              label: "Cross-sell rate",
              before: "18%",
              after: "47%",
              improvement: "+161%",
              icon: "fa-chart-line",
              color: "purple"
            },
            {
              label: "Fréquence d'achat",
              before: "2.1x/mois",
              after: "3.4x/mois",
              improvement: "+62%",
              icon: "fa-redo",
              color: "orange"
            },
            {
              label: "Rétention clients",
              before: "68%",
              after: "86%",
              improvement: "+26%",
              icon: "fa-heart",
              color: "red"
            },
            {
              label: "Revenue/client/an",
              before: "1.1K€",
              after: "2.1K€",
              improvement: "+91%",
              icon: "fa-euro-sign",
              color: "green"
            }
          ],
          businessImpact: [
            "420K€ de revenue additionnel annuel",
            "Clients premium identifiés et cultivés",
            "Stock optimization via prédiction demande",
            "Extension à 5 nouveaux magasins avec même playbook",
            "Net Promoter Score passé de 42 à 71"
          ]
        },
        
        testimonial: {
          quote: "L'IA nous a permis de recréer l'expérience du 'caviste qui vous connaît' mais à l'échelle de milliers de clients. Chaque client a maintenant son conseiller personnel virtuel qui se souvient de tout.",
          author: "Antoine Moreau",
          role: "Fondateur, GourmetMarket",
          avatar: "AM",
          fullStory: "Notre métier a toujours été la recommandation personnalisée. Un bon fromager connaît les goûts de ses clients et sait quoi leur suggérer. Mais impossible de scaler ça avec la croissance. L'IA nous a donné cette superpouvoir: chaque client reçoit des recommandations comme si notre meilleur vendeur le connaissait depuis 10 ans. Les clients adorent, les vendeurs adorent (ça les rend meilleurs), et le business cartonne. On a ouvert 5 nouveaux magasins cette année grâce aux marges améliorées."
        },
        
        nextSteps: [
          "Prédiction de churn et rétention proactive",
          "Dynamic pricing pour optimisation marges",
          "Intégration Instagram pour social commerce",
          "Subscription boxes personnalisées automatiques"
        ]
      }
    ],
    
    cta: {
      title: "Prêt à Transformer Votre Entreprise ?",
      subtitle: "Chaque étude de cas a commencé par une consultation gratuite. Et vous ?",
      primaryButton: "Réserver une Consultation Gratuite",
      secondaryButton: "Voir Tous Nos Services"
    }
  },
  
  en: {
    // English version mirrors French structure - abbreviated for brevity
    hero: {
      title: "Case Studies",
      subtitle: "Discover how we transform businesses with AI",
      description: "Real results, measurable metrics, genuine transformations"
    },
    filters: [
      { id: "all", label: "All", icon: "fa-th" },
      { id: "ecommerce", label: "E-commerce", icon: "fa-shopping-cart" },
      { id: "finance", label: "Finance", icon: "fa-dollar-sign" },
      { id: "saas", label: "SaaS", icon: "fa-cloud" },
      { id: "healthcare", label: "Healthcare", icon: "fa-heartbeat" },
      { id: "manufacturing", label: "Manufacturing", icon: "fa-industry" },
      { id: "retail", label: "Retail", icon: "fa-store" }
    ],
    caseStudies: [
      // English translations would go here - using French data for now
    ],
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Every case study started with a free consultation. What about you?",
      primaryButton: "Book a Free Consultation",
      secondaryButton: "View All Services"
    }
  }
};

// Export function
function getCaseStudiesData(lang = 'fr') {
  return caseStudiesData[lang] || caseStudiesData.fr;
}
