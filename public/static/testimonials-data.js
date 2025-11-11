/**
 * Testimonials and Case Studies Data for Factor AI Platform
 * Real success stories and client results
 * Bilingual FR/EN support
 */

const testimonialsData = {
  fr: {
    hero: {
      title: "Nos Réussites Clients",
      subtitle: "Découvrez comment nous avons aidé des entreprises comme la vôtre à transformer leurs opérations avec l'IA",
      stats: [
        { value: "200+", label: "Agents IA Développés" },
        { value: "1M$", label: "Économies Moyennes/An" },
        { value: "84%", label: "Amélioration Résolution" },
        { value: "50+", label: "Clients Satisfaits" }
      ]
    },
    testimonials: [
      {
        id: "ecommerce-chatbot",
        clientName: "Marie Dubois",
        clientRole: "Directrice E-commerce",
        companyName: "FashionHub",
        companyIndustry: "E-commerce Mode",
        companySize: "50-200 employés",
        avatar: "MD",
        quote: "Le chatbot IA de Factor AI a transformé notre service client. Nous gérons maintenant 3x plus de conversations avec la même équipe, et nos clients adorent les réponses instantanées 24/7.",
        rating: 5,
        metrics: {
          responseTime: "< 1 seconde",
          costReduction: "65%",
          satisfaction: "+40%"
        },
        services: ["Chatbot Development", "Workflow Automation"],
        featured: true
      },
      {
        id: "financial-voice-ai",
        clientName: "Thomas Laurent",
        clientRole: "COO",
        companyName: "FinanceConnect",
        companyIndustry: "Services Financiers",
        companySize: "200-500 employés",
        avatar: "TL",
        quote: "L'agent IA vocal gère maintenant 70% de nos appels entrants. Nous avons réduit nos coûts de centre d'appels de 900K€/an tout en améliorant la satisfaction client. Un ROI impressionnant en seulement 4 mois.",
        rating: 5,
        metrics: {
          callsHandled: "70%",
          costSavings: "€900K/an",
          roi: "4 mois"
        },
        services: ["Voice AI Agents", "Consulting Enterprise"],
        featured: true
      },
      {
        id: "realestate-workflow",
        clientName: "Sophie Martin",
        clientRole: "Fondatrice",
        companyName: "ImmoTech Pro",
        companyIndustry: "Immobilier",
        companySize: "10-50 employés",
        avatar: "SM",
        quote: "L'automatisation des workflows a libéré 35 heures par semaine pour mon équipe. Nous pouvons maintenant nous concentrer sur la relation client plutôt que sur les tâches administratives répétitives.",
        rating: 5,
        metrics: {
          timeSaved: "35h/semaine",
          productivity: "+55%",
          errorReduction: "82%"
        },
        services: ["Workflow Automation", "AI Agents Development"],
        featured: true
      },
      {
        id: "saas-krs",
        clientName: "Alexandre Chen",
        clientRole: "CTO",
        companyName: "DataFlow SaaS",
        companyIndustry: "Software/SaaS",
        companySize: "100-200 employés",
        avatar: "AC",
        quote: "Le système KRS a révolutionné notre accès aux données. Notre équipe trouve maintenant n'importe quelle information en quelques secondes au lieu de fouiller pendant des heures dans nos bases de données.",
        rating: 5,
        metrics: {
          searchTime: "-90%",
          dataAccess: "Universel",
          adoption: "95%"
        },
        services: ["Knowledge Retrieval Systems", "Consulting Enterprise"],
        featured: false
      },
      {
        id: "agency-consulting",
        clientName: "Julie Rousseau",
        clientRole: "CEO",
        companyName: "Digital Boost Agency",
        companyIndustry: "Marketing Digital",
        companySize: "5-10 employés",
        avatar: "JR",
        quote: "Le coaching individuel m'a aidé à identifier 5 cas d'usage IA pour mon agence. En 3 mois, nous avons automatisé notre prospection et doublé notre génération de leads qualifiés.",
        rating: 5,
        metrics: {
          leadsGenerated: "2x",
          timeToImplement: "3 mois",
          newRevenue: "+€150K/an"
        },
        services: ["Individual Consulting", "AI Agents Development"],
        featured: false
      },
      {
        id: "retail-multiservice",
        clientName: "Pierre Bertrand",
        clientRole: "Directeur Opérations",
        companyName: "RetailMax Group",
        companyIndustry: "Retail/Distribution",
        companySize: "500+ employés",
        avatar: "PB",
        quote: "Factor AI nous a accompagnés sur une transformation IA complète : chatbots en magasin, automatisation logistique, et KRS pour nos équipes. Un partenaire de confiance qui comprend vraiment nos enjeux business.",
        rating: 5,
        metrics: {
          projectScope: "Multi-services",
          operationalEfficiency: "+45%",
          roi: "6 mois"
        },
        services: ["Chatbot Development", "Workflow Automation", "KRS", "Consulting Enterprise"],
        featured: true
      }
    ],
    caseStudies: [
      {
        id: "case-ecommerce-automation",
        title: "E-commerce : Automatisation Service Client et Ventes",
        industry: "E-commerce",
        client: "FashionHub",
        challenge: "FashionHub faisait face à un volume croissant de demandes clients (500+ conversations/jour) avec une petite équipe de 5 personnes. Les temps de réponse étaient longs (4-6h) et le taux d'abandon élevé (35%).",
        solution: "Déploiement d'un chatbot IA multicanal (site web, WhatsApp, Messenger) capable de : gérer les FAQs automatiquement, recommander des produits personnalisés, traiter les retours/remboursements simples, qualifier les demandes complexes pour escalade.",
        results: [
          "Temps de réponse réduit de 6h à < 1 seconde",
          "70% des conversations gérées automatiquement",
          "Taux d'abandon réduit de 35% à 12%",
          "Conversions augmentées de 28%",
          "ROI positif en 2 mois"
        ],
        metrics: {
          before: { responseTime: "6 heures", automation: "0%", abandon: "35%", conversions: "Baseline" },
          after: { responseTime: "< 1 sec", automation: "70%", abandon: "12%", conversions: "+28%" }
        },
        testimonialQuote: "Notre chatbot est devenu le meilleur membre de l'équipe. Toujours disponible, jamais fatigué, et nos clients l'adorent !",
        duration: "6 semaines (POC 1 semaine + Déploiement 5 semaines)",
        technologies: ["GPT-4", "Dialogflow", "WhatsApp Business API", "Shopify API"],
        images: []
      },
      {
        id: "case-finance-voice-ai",
        title: "Services Financiers : Centre d'Appels IA Vocal",
        industry: "Finance",
        client: "FinanceConnect",
        challenge: "Centre d'appels gérant 10,000 appels/mois avec 25 agents. Coûts élevés (€1.2M/an), temps d'attente longs (moyenne 8 min), et turnover important des agents (40%/an).",
        solution: "Déploiement d'agents IA vocaux pour gérer : vérification d'identité, consultation de solde/transactions, blocage de carte, FAQ produits, prise de rendez-vous. Escalade intelligente vers agents humains pour cas complexes.",
        results: [
          "70% des appels gérés par IA (7,000/mois)",
          "Économies de €900K/an sur coûts centre d'appels",
          "Temps d'attente réduit de 8 min à < 30 sec",
          "Satisfaction client augmentée de 68% à 89%",
          "Disponibilité 24/7 sans coûts supplémentaires"
        ],
        metrics: {
          before: { calls: "10K/mois (100% humains)", cost: "€1.2M/an", waitTime: "8 min", satisfaction: "68%" },
          after: { calls: "7K/mois IA + 3K humains", cost: "€300K/an", waitTime: "< 30 sec", satisfaction: "89%" }
        },
        testimonialQuote: "Nos clients ne font plus la différence entre l'IA et un agent humain. C'est bluffant et nos économies sont massives.",
        duration: "12 semaines (POC 2 semaines + Intégration téléphonie 4 semaines + Déploiement progressif 6 semaines)",
        technologies: ["Dialogflow CX", "Google Cloud Speech-to-Text/Text-to-Speech", "Twilio", "Salesforce Integration"],
        images: []
      },
      {
        id: "case-saas-krs",
        title: "SaaS : Système de Récupération de Connaissances",
        industry: "Software/SaaS",
        client: "DataFlow SaaS",
        challenge: "100+ employés perdaient 5-10h/semaine à chercher des informations éparpillées dans 15+ outils (Confluence, Notion, GitHub, Databases, Slack). Onboarding nouveaux employés très lent (3 mois).",
        solution: "Déploiement d'un KRS on-premise connecté à toutes les sources de données avec : interface chat IA pour poser des questions en langage naturel, génération automatique de réponses avec sources citées, visualisations graphiques pour données chiffrées, support multilingue FR/EN.",
        results: [
          "Temps de recherche réduit de 90% (30 min → 3 min)",
          "Productivité générale +25%",
          "Onboarding réduit de 3 mois à 3 semaines",
          "Taux d'adoption de 95% en 1 mois",
          "ROI de 400% la première année"
        ],
        metrics: {
          before: { searchTime: "30 min/requête", onboarding: "3 mois", dataAccess: "Fragmenté", productivity: "Baseline" },
          after: { searchTime: "3 min/requête", onboarding: "3 semaines", dataAccess: "Centralisé", productivity: "+25%" }
        },
        testimonialQuote: "C'est comme avoir un collègue qui connaît absolument tout sur l'entreprise et répond instantanément. Un game-changer total.",
        duration: "8 semaines (POC 1 semaine + Intégration 15 sources 5 semaines + Formation 2 semaines)",
        technologies: ["LangChain", "Pinecone Vector DB", "GPT-4", "Custom Connectors", "Python FastAPI"],
        images: []
      }
    ],
    logos: {
      title: "Ils nous font confiance",
      subtitle: "Des entreprises de toutes tailles et secteurs",
      companies: [
        { name: "FashionHub", industry: "E-commerce" },
        { name: "FinanceConnect", industry: "Finance" },
        { name: "ImmoTech Pro", industry: "Immobilier" },
        { name: "DataFlow SaaS", industry: "Software" },
        { name: "Digital Boost", industry: "Marketing" },
        { name: "RetailMax", industry: "Retail" },
        { name: "HealthCare Plus", industry: "Santé" },
        { name: "LogiTech Systems", industry: "Logistique" }
      ]
    },
    cta: {
      title: "Prêt à Rejoindre Nos Clients à Succès ?",
      subtitle: "Obtenez les mêmes résultats transformateurs",
      primaryButton: "Démarrer votre projet",
      secondaryButton: "Télécharger études de cas",
      guarantee: "Consultation gratuite • POC rapide • ROI garanti"
    }
  },
  en: {
    hero: {
      title: "Our Client Success Stories",
      subtitle: "Discover how we've helped companies like yours transform their operations with AI",
      stats: [
        { value: "200+", label: "AI Agents Built" },
        { value: "$1M", label: "Average Savings/Year" },
        { value: "84%", label: "Resolution Improvement" },
        { value: "50+", label: "Happy Clients" }
      ]
    },
    testimonials: [
      {
        id: "ecommerce-chatbot",
        clientName: "Marie Dubois",
        clientRole: "E-commerce Director",
        companyName: "FashionHub",
        companyIndustry: "Fashion E-commerce",
        companySize: "50-200 employees",
        avatar: "MD",
        quote: "Factor AI's AI chatbot transformed our customer service. We now handle 3x more conversations with the same team, and our customers love the instant 24/7 responses.",
        rating: 5,
        metrics: {
          responseTime: "< 1 second",
          costReduction: "65%",
          satisfaction: "+40%"
        },
        services: ["Chatbot Development", "Workflow Automation"],
        featured: true
      },
      {
        id: "financial-voice-ai",
        clientName: "Thomas Laurent",
        clientRole: "COO",
        companyName: "FinanceConnect",
        companyIndustry: "Financial Services",
        companySize: "200-500 employees",
        avatar: "TL",
        quote: "The voice AI agent now handles 70% of our inbound calls. We've reduced our call center costs by $900K/year while improving customer satisfaction. Impressive ROI in just 4 months.",
        rating: 5,
        metrics: {
          callsHandled: "70%",
          costSavings: "$900K/year",
          roi: "4 months"
        },
        services: ["Voice AI Agents", "Enterprise Consulting"],
        featured: true
      },
      {
        id: "realestate-workflow",
        clientName: "Sophie Martin",
        clientRole: "Founder",
        companyName: "ImmoTech Pro",
        companyIndustry: "Real Estate",
        companySize: "10-50 employees",
        avatar: "SM",
        quote: "Workflow automation freed up 35 hours per week for my team. We can now focus on client relationships rather than repetitive administrative tasks.",
        rating: 5,
        metrics: {
          timeSaved: "35h/week",
          productivity: "+55%",
          errorReduction: "82%"
        },
        services: ["Workflow Automation", "AI Agents Development"],
        featured: true
      },
      {
        id: "saas-krs",
        clientName: "Alexandre Chen",
        clientRole: "CTO",
        companyName: "DataFlow SaaS",
        companyIndustry: "Software/SaaS",
        companySize: "100-200 employees",
        avatar: "AC",
        quote: "The KRS system revolutionized our data access. Our team now finds any information in seconds instead of searching for hours in our databases.",
        rating: 5,
        metrics: {
          searchTime: "-90%",
          dataAccess: "Universal",
          adoption: "95%"
        },
        services: ["Knowledge Retrieval Systems", "Enterprise Consulting"],
        featured: false
      },
      {
        id: "agency-consulting",
        clientName: "Julie Rousseau",
        clientRole: "CEO",
        companyName: "Digital Boost Agency",
        companyIndustry: "Digital Marketing",
        companySize: "5-10 employees",
        avatar: "JR",
        quote: "Individual coaching helped me identify 5 AI use cases for my agency. In 3 months, we automated our prospecting and doubled our qualified lead generation.",
        rating: 5,
        metrics: {
          leadsGenerated: "2x",
          timeToImplement: "3 months",
          newRevenue: "+$150K/year"
        },
        services: ["Individual Consulting", "AI Agents Development"],
        featured: false
      },
      {
        id: "retail-multiservice",
        clientName: "Pierre Bertrand",
        clientRole: "Operations Director",
        companyName: "RetailMax Group",
        companyIndustry: "Retail/Distribution",
        companySize: "500+ employees",
        avatar: "PB",
        quote: "Factor AI guided us through a complete AI transformation: in-store chatbots, logistics automation, and KRS for our teams. A trusted partner who truly understands our business challenges.",
        rating: 5,
        metrics: {
          projectScope: "Multi-service",
          operationalEfficiency: "+45%",
          roi: "6 months"
        },
        services: ["Chatbot Development", "Workflow Automation", "KRS", "Enterprise Consulting"],
        featured: true
      }
    ],
    caseStudies: [
      {
        id: "case-ecommerce-automation",
        title: "E-commerce: Customer Service and Sales Automation",
        industry: "E-commerce",
        client: "FashionHub",
        challenge: "FashionHub faced growing customer inquiry volumes (500+ conversations/day) with a small team of 5 people. Response times were long (4-6h) and abandonment rate high (35%).",
        solution: "Deployment of a multi-channel AI chatbot (website, WhatsApp, Messenger) capable of: handling FAQs automatically, recommending personalized products, processing simple returns/refunds, qualifying complex requests for escalation.",
        results: [
          "Response time reduced from 6h to < 1 second",
          "70% of conversations handled automatically",
          "Abandonment rate reduced from 35% to 12%",
          "Conversions increased by 28%",
          "Positive ROI in 2 months"
        ],
        metrics: {
          before: { responseTime: "6 hours", automation: "0%", abandon: "35%", conversions: "Baseline" },
          after: { responseTime: "< 1 sec", automation: "70%", abandon: "12%", conversions: "+28%" }
        },
        testimonialQuote: "Our chatbot has become the best team member. Always available, never tired, and our customers love it!",
        duration: "6 weeks (1 week POC + 5 weeks Deployment)",
        technologies: ["GPT-4", "Dialogflow", "WhatsApp Business API", "Shopify API"],
        images: []
      },
      {
        id: "case-finance-voice-ai",
        title: "Financial Services: Voice AI Call Center",
        industry: "Finance",
        client: "FinanceConnect",
        challenge: "Call center handling 10,000 calls/month with 25 agents. High costs ($1.2M/year), long wait times (average 8 min), and high agent turnover (40%/year).",
        solution: "Deployment of voice AI agents to handle: identity verification, balance/transaction inquiries, card blocking, product FAQs, appointment scheduling. Intelligent escalation to human agents for complex cases.",
        results: [
          "70% of calls handled by AI (7,000/month)",
          "Savings of $900K/year on call center costs",
          "Wait time reduced from 8 min to < 30 sec",
          "Customer satisfaction increased from 68% to 89%",
          "24/7 availability at no additional cost"
        ],
        metrics: {
          before: { calls: "10K/month (100% human)", cost: "$1.2M/year", waitTime: "8 min", satisfaction: "68%" },
          after: { calls: "7K/month AI + 3K human", cost: "$300K/year", waitTime: "< 30 sec", satisfaction: "89%" }
        },
        testimonialQuote: "Our customers can't tell the difference between AI and a human agent. It's amazing and our savings are massive.",
        duration: "12 weeks (2 weeks POC + 4 weeks Telephony integration + 6 weeks Progressive deployment)",
        technologies: ["Dialogflow CX", "Google Cloud Speech-to-Text/Text-to-Speech", "Twilio", "Salesforce Integration"],
        images: []
      },
      {
        id: "case-saas-krs",
        title: "SaaS: Knowledge Retrieval System",
        industry: "Software/SaaS",
        client: "DataFlow SaaS",
        challenge: "100+ employees spent 5-10h/week searching for information scattered across 15+ tools (Confluence, Notion, GitHub, Databases, Slack). Very slow onboarding for new employees (3 months).",
        solution: "Deployment of an on-premise KRS connected to all data sources with: AI chat interface to ask questions in natural language, automatic answer generation with cited sources, graphical visualizations for numerical data, multilingual FR/EN support.",
        results: [
          "Search time reduced by 90% (30 min → 3 min)",
          "Overall productivity +25%",
          "Onboarding reduced from 3 months to 3 weeks",
          "95% adoption rate in 1 month",
          "400% ROI in first year"
        ],
        metrics: {
          before: { searchTime: "30 min/query", onboarding: "3 months", dataAccess: "Fragmented", productivity: "Baseline" },
          after: { searchTime: "3 min/query", onboarding: "3 weeks", dataAccess: "Centralized", productivity: "+25%" }
        },
        testimonialQuote: "It's like having a colleague who knows absolutely everything about the company and answers instantly. A total game-changer.",
        duration: "8 weeks (1 week POC + 5 weeks Integration of 15 sources + 2 weeks Training)",
        technologies: ["LangChain", "Pinecone Vector DB", "GPT-4", "Custom Connectors", "Python FastAPI"],
        images: []
      }
    ],
    logos: {
      title: "They trust us",
      subtitle: "Companies of all sizes and sectors",
      companies: [
        { name: "FashionHub", industry: "E-commerce" },
        { name: "FinanceConnect", industry: "Finance" },
        { name: "ImmoTech Pro", industry: "Real Estate" },
        { name: "DataFlow SaaS", industry: "Software" },
        { name: "Digital Boost", industry: "Marketing" },
        { name: "RetailMax", industry: "Retail" },
        { name: "HealthCare Plus", industry: "Healthcare" },
        { name: "LogiTech Systems", industry: "Logistics" }
      ]
    },
    cta: {
      title: "Ready to Join Our Successful Clients?",
      subtitle: "Get the same transformative results",
      primaryButton: "Start your project",
      secondaryButton: "Download case studies",
      guarantee: "Free consultation • Rapid POC • Guaranteed ROI"
    }
  }
};

// Helper function to get testimonials data
function getTestimonialsData(lang = 'fr') {
  return testimonialsData[lang] || testimonialsData.fr;
}

// Helper function to get featured testimonials
function getFeaturedTestimonials(lang = 'fr') {
  const data = getTestimonialsData(lang);
  return data.testimonials.filter(t => t.featured);
}

// Helper function to get specific case study
function getCaseStudyById(caseId, lang = 'fr') {
  const data = getTestimonialsData(lang);
  return data.caseStudies.find(c => c.id === caseId);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testimonialsData, getTestimonialsData, getFeaturedTestimonials, getCaseStudyById };
}
