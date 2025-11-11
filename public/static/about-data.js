/**
 * About Data for Factor AI Platform
 * Company vision, mission, team, and technologies
 * Bilingual FR/EN support
 */

const aboutData = {
  fr: {
    hero: {
      title: "À Propos de Factor AI",
      subtitle: "Votre Partenaire de Transformation IA",
      description: "Nous construisons des solutions IA qui génèrent des résultats concrets. Avec plus de 200 agents IA développés et des économies moyennes de 1M$/an pour nos clients, nous sommes le partenaire de confiance pour votre transformation IA."
    },
    vision: {
      title: "Notre Vision",
      content: "Démocratiser l'intelligence artificielle pour que chaque entreprise, quelle que soit sa taille, puisse bénéficier de la puissance de l'IA pour automatiser, optimiser et innover.",
      icon: "fa-eye"
    },
    mission: {
      title: "Notre Mission",
      content: "Accompagner les entreprises dans leur transformation IA avec une approche pragmatique, centrée sur le ROI et les résultats concrets. Nous ne vendons pas de l'IA pour l'IA, mais des solutions qui résolvent de vrais problèmes business.",
      icon: "fa-bullseye"
    },
    values: [
      {
        title: "Résultats Concrets",
        description: "Nous mesurons notre succès au vôtre. Pas de théorie, uniquement des solutions qui génèrent un ROI mesurable.",
        icon: "fa-chart-line"
      },
      {
        title: "Pragmatisme",
        description: "POC rapide en 1-2 semaines pour valider la faisabilité avant tout investissement majeur. Pas de projets flous qui durent des mois.",
        icon: "fa-hands-helping"
      },
      {
        title: "Expertise Technique",
        description: "200+ agents IA développés, maîtrise des dernières technologies (GPT-4, LangChain, Dialogflow, etc.) et veille constante sur les innovations.",
        icon: "fa-code"
      },
      {
        title: "Transparence",
        description: "Communication claire sur ce qui est possible, les délais réalistes, et les coûts. Pas de promesses marketing irréalistes.",
        icon: "fa-handshake"
      },
      {
        title: "Accompagnement",
        description: "Nous ne livrons pas juste une solution, nous formons vos équipes et assurons le support pour garantir l'adoption et le succès à long terme.",
        icon: "fa-user-friends"
      },
      {
        title: "Innovation Continue",
        description: "Nous testons et intégrons les dernières avancées IA (GPT-4, Claude, Gemini, etc.) pour vous offrir toujours les meilleures solutions du marché.",
        icon: "fa-lightbulb"
      }
    ],
    stats: [
      {
        value: "200+",
        label: "Agents IA Développés",
        icon: "fa-robot"
      },
      {
        value: "50+",
        label: "Clients Satisfaits",
        icon: "fa-users"
      },
      {
        value: "1M$",
        label: "Économies Moyennes/An",
        icon: "fa-dollar-sign"
      },
      {
        value: "84%",
        label: "Amélioration Performance",
        icon: "fa-chart-bar"
      },
      {
        value: "3-6",
        label: "Mois pour ROI Positif",
        icon: "fa-clock"
      },
      {
        value: "24/7",
        label: "Disponibilité Solutions",
        icon: "fa-sync"
      }
    ],
    team: {
      title: "Notre Équipe",
      subtitle: "Des experts passionnés par l'IA et la transformation business",
      members: [
        {
          name: "Dr. Jean Dupont",
          role: "CEO & Fondateur",
          bio: "PhD en IA, ex-Google Brain. 15 ans d'expérience en Machine Learning et NLP. Passionné par l'application concrète de l'IA aux problèmes business.",
          avatar: "JD",
          linkedin: "#",
          expertise: ["Strategy", "AI Research", "NLP"]
        },
        {
          name: "Marie Lambert",
          role: "CTO",
          bio: "Ex-Lead Engineer chez Microsoft. Spécialiste en architecture cloud scalable et déploiement de systèmes IA en production.",
          avatar: "ML",
          linkedin: "#",
          expertise: ["Cloud Architecture", "MLOps", "System Design"]
        },
        {
          name: "Thomas Rousseau",
          role: "Head of AI Agents",
          bio: "10 ans d'expérience en développement de chatbots et agents conversationnels. A construit plus de 150 agents IA pour diverses industries.",
          avatar: "TR",
          linkedin: "#",
          expertise: ["Conversational AI", "NLU", "Dialogue Systems"]
        },
        {
          name: "Sophie Chen",
          role: "Head of Voice AI",
          bio: "Ex-Amazon Alexa team. Experte en reconnaissance vocale et synthèse de parole. Pionnière des agents IA vocaux en France.",
          avatar: "SC",
          linkedin: "#",
          expertise: ["Voice AI", "Speech Recognition", "TTS"]
        },
        {
          name: "Alexandre Martin",
          role: "Lead Solutions Architect",
          bio: "Architecte solutions avec 12 ans d'expérience. Spécialiste en intégration de systèmes complexes et automatisation de workflows.",
          avatar: "AM",
          linkedin: "#",
          expertise: ["System Integration", "Automation", "API Design"]
        },
        {
          name: "Isabelle Dubois",
          role: "Head of Customer Success",
          bio: "15 ans en consulting stratégique. Aide les entreprises à identifier les opportunités IA à fort impact et assure leur succès.",
          avatar: "ID",
          linkedin: "#",
          expertise: ["Strategy", "Change Management", "ROI Optimization"]
        }
      ]
    },
    technologies: {
      title: "Technologies que Nous Maîtrisons",
      subtitle: "Les meilleurs outils IA du marché",
      categories: [
        {
          name: "LLMs & NLP",
          icon: "fa-brain",
          tools: [
            { name: "OpenAI GPT-4", logo: "" },
            { name: "Anthropic Claude", logo: "" },
            { name: "Google Gemini", logo: "" },
            { name: "LangChain", logo: "" },
            { name: "LlamaIndex", logo: "" }
          ]
        },
        {
          name: "Conversational AI",
          icon: "fa-comments",
          tools: [
            { name: "Dialogflow CX", logo: "" },
            { name: "Rasa", logo: "" },
            { name: "Botpress", logo: "" },
            { name: "Microsoft Bot Framework", logo: "" },
            { name: "Voiceflow", logo: "" }
          ]
        },
        {
          name: "Voice AI",
          icon: "fa-microphone",
          tools: [
            { name: "Google Speech-to-Text", logo: "" },
            { name: "Amazon Polly", logo: "" },
            { name: "ElevenLabs", logo: "" },
            { name: "Twilio", logo: "" },
            { name: "Deepgram", logo: "" }
          ]
        },
        {
          name: "Cloud & Infrastructure",
          icon: "fa-cloud",
          tools: [
            { name: "AWS", logo: "" },
            { name: "Google Cloud", logo: "" },
            { name: "Azure", logo: "" },
            { name: "Cloudflare", logo: "" },
            { name: "Docker/Kubernetes", logo: "" }
          ]
        },
        {
          name: "Databases & Vector Stores",
          icon: "fa-database",
          tools: [
            { name: "Pinecone", logo: "" },
            { name: "Weaviate", logo: "" },
            { name: "ChromaDB", logo: "" },
            { name: "PostgreSQL", logo: "" },
            { name: "MongoDB", logo: "" }
          ]
        },
        {
          name: "Integration & Automation",
          icon: "fa-project-diagram",
          tools: [
            { name: "Zapier", logo: "" },
            { name: "Make (Integromat)", logo: "" },
            { name: "n8n", logo: "" },
            { name: "REST APIs", logo: "" },
            { name: "WebSockets", logo: "" }
          ]
        }
      ]
    },
    methodology: {
      title: "Notre Méthodologie Éprouvée",
      subtitle: "Une approche testée sur 50+ projets",
      steps: [
        {
          phase: "Discovery",
          title: "Consultation Gratuite",
          description: "Nous comprenons vos défis business, analysons vos processus actuels, et identifions les opportunités IA à fort ROI.",
          duration: "30-60 minutes",
          deliverables: ["Rapport d'opportunités", "Estimation ROI préliminaire", "Recommandations initiales"]
        },
        {
          phase: "Validation",
          title: "POC Rapide",
          description: "Nous créons un Proof of Concept fonctionnel en 1-2 semaines avec vos vraies données pour valider la faisabilité technique et mesurer les résultats réels.",
          duration: "1-2 semaines",
          deliverables: ["POC fonctionnel", "Résultats mesurés", "Architecture détaillée", "Estimation projet complet"]
        },
        {
          phase: "Development",
          title: "Développement & Intégration",
          description: "Nous développons la solution complète, l'intégrons à vos systèmes existants, et préparons le déploiement en production.",
          duration: "4-12 semaines",
          deliverables: ["Solution complète", "Intégrations", "Tests complets", "Documentation"]
        },
        {
          phase: "Deployment",
          title: "Déploiement & Formation",
          description: "Nous déployons la solution en production, formons vos équipes, et assurons une adoption réussie avec un support dédié.",
          duration: "1-2 semaines",
          deliverables: ["Déploiement production", "Formation équipes", "Documentation utilisateur", "Support 30 jours"]
        },
        {
          phase: "Optimization",
          title: "Support & Optimisation Continue",
          description: "Nous monitorizons les performances, optimisons les résultats, et ajoutons de nouvelles fonctionnalités selon vos besoins.",
          duration: "En continu",
          deliverables: ["Monitoring", "Optimisations", "Nouvelles features", "Support prioritaire"]
        }
      ]
    },
    certifications: {
      title: "Certifications & Partenariats",
      items: [
        { name: "Google Cloud Partner", icon: "fa-certificate" },
        { name: "AWS Advanced Partner", icon: "fa-certificate" },
        { name: "OpenAI Enterprise Partner", icon: "fa-certificate" },
        { name: "Microsoft AI Partner", icon: "fa-certificate" },
        { name: "ISO 27001 (Sécurité)", icon: "fa-shield-alt" },
        { name: "RGPD Compliant", icon: "fa-lock" }
      ]
    },
    cta: {
      title: "Prêt à Transformer Votre Entreprise ?",
      subtitle: "Rejoignez les 50+ entreprises qui nous font confiance",
      primaryButton: "Réserver une consultation gratuite",
      secondaryButton: "Voir nos cas clients",
      stats: "200+ agents IA développés • 1M$ économies moyennes • 84% amélioration performance"
    }
  },
  en: {
    hero: {
      title: "About Factor AI",
      subtitle: "Your AI Transformation Partner",
      description: "We build AI solutions that deliver concrete results. With 200+ AI agents developed and average savings of $1M/year for our clients, we are the trusted partner for your AI transformation."
    },
    vision: {
      title: "Our Vision",
      content: "Democratize artificial intelligence so that every company, regardless of size, can benefit from the power of AI to automate, optimize, and innovate.",
      icon: "fa-eye"
    },
    mission: {
      title: "Our Mission",
      content: "Guide companies through their AI transformation with a pragmatic approach, focused on ROI and concrete results. We don't sell AI for AI's sake, but solutions that solve real business problems.",
      icon: "fa-bullseye"
    },
    values: [
      {
        title: "Concrete Results",
        description: "We measure our success by yours. No theory, only solutions that generate measurable ROI.",
        icon: "fa-chart-line"
      },
      {
        title: "Pragmatism",
        description: "Rapid POC in 1-2 weeks to validate feasibility before any major investment. No vague projects that last months.",
        icon: "fa-hands-helping"
      },
      {
        title: "Technical Expertise",
        description: "200+ AI agents developed, mastery of latest technologies (GPT-4, LangChain, Dialogflow, etc.) and constant innovation monitoring.",
        icon: "fa-code"
      },
      {
        title: "Transparency",
        description: "Clear communication about what's possible, realistic timelines, and costs. No unrealistic marketing promises.",
        icon: "fa-handshake"
      },
      {
        title: "Support",
        description: "We don't just deliver a solution, we train your teams and provide support to ensure adoption and long-term success.",
        icon: "fa-user-friends"
      },
      {
        title: "Continuous Innovation",
        description: "We test and integrate the latest AI advances (GPT-4, Claude, Gemini, etc.) to always offer you the best market solutions.",
        icon: "fa-lightbulb"
      }
    ],
    stats: [
      {
        value: "200+",
        label: "AI Agents Built",
        icon: "fa-robot"
      },
      {
        value: "50+",
        label: "Happy Clients",
        icon: "fa-users"
      },
      {
        value: "$1M",
        label: "Average Savings/Year",
        icon: "fa-dollar-sign"
      },
      {
        value: "84%",
        label: "Performance Improvement",
        icon: "fa-chart-bar"
      },
      {
        value: "3-6",
        label: "Months to Positive ROI",
        icon: "fa-clock"
      },
      {
        value: "24/7",
        label: "Solution Availability",
        icon: "fa-sync"
      }
    ],
    team: {
      title: "Our Team",
      subtitle: "Experts passionate about AI and business transformation",
      members: [
        {
          name: "Dr. Jean Dupont",
          role: "CEO & Founder",
          bio: "PhD in AI, ex-Google Brain. 15 years of experience in Machine Learning and NLP. Passionate about practical application of AI to business problems.",
          avatar: "JD",
          linkedin: "#",
          expertise: ["Strategy", "AI Research", "NLP"]
        },
        {
          name: "Marie Lambert",
          role: "CTO",
          bio: "Ex-Lead Engineer at Microsoft. Specialist in scalable cloud architecture and deployment of AI systems in production.",
          avatar: "ML",
          linkedin: "#",
          expertise: ["Cloud Architecture", "MLOps", "System Design"]
        },
        {
          name: "Thomas Rousseau",
          role: "Head of AI Agents",
          bio: "10 years of experience in developing chatbots and conversational agents. Built 150+ AI agents for various industries.",
          avatar: "TR",
          linkedin: "#",
          expertise: ["Conversational AI", "NLU", "Dialogue Systems"]
        },
        {
          name: "Sophie Chen",
          role: "Head of Voice AI",
          bio: "Ex-Amazon Alexa team. Expert in voice recognition and speech synthesis. Pioneer of voice AI agents in France.",
          avatar: "SC",
          linkedin: "#",
          expertise: ["Voice AI", "Speech Recognition", "TTS"]
        },
        {
          name: "Alexandre Martin",
          role: "Lead Solutions Architect",
          bio: "Solutions architect with 12 years of experience. Specialist in complex system integration and workflow automation.",
          avatar: "AM",
          linkedin: "#",
          expertise: ["System Integration", "Automation", "API Design"]
        },
        {
          name: "Isabelle Dubois",
          role: "Head of Customer Success",
          bio: "15 years in strategic consulting. Helps companies identify high-impact AI opportunities and ensures their success.",
          avatar: "ID",
          linkedin: "#",
          expertise: ["Strategy", "Change Management", "ROI Optimization"]
        }
      ]
    },
    technologies: {
      title: "Technologies We Master",
      subtitle: "The best AI tools on the market",
      categories: [
        {
          name: "LLMs & NLP",
          icon: "fa-brain",
          tools: [
            { name: "OpenAI GPT-4", logo: "" },
            { name: "Anthropic Claude", logo: "" },
            { name: "Google Gemini", logo: "" },
            { name: "LangChain", logo: "" },
            { name: "LlamaIndex", logo: "" }
          ]
        },
        {
          name: "Conversational AI",
          icon: "fa-comments",
          tools: [
            { name: "Dialogflow CX", logo: "" },
            { name: "Rasa", logo: "" },
            { name: "Botpress", logo: "" },
            { name: "Microsoft Bot Framework", logo: "" },
            { name: "Voiceflow", logo: "" }
          ]
        },
        {
          name: "Voice AI",
          icon: "fa-microphone",
          tools: [
            { name: "Google Speech-to-Text", logo: "" },
            { name: "Amazon Polly", logo: "" },
            { name: "ElevenLabs", logo: "" },
            { name: "Twilio", logo: "" },
            { name: "Deepgram", logo: "" }
          ]
        },
        {
          name: "Cloud & Infrastructure",
          icon: "fa-cloud",
          tools: [
            { name: "AWS", logo: "" },
            { name: "Google Cloud", logo: "" },
            { name: "Azure", logo: "" },
            { name: "Cloudflare", logo: "" },
            { name: "Docker/Kubernetes", logo: "" }
          ]
        },
        {
          name: "Databases & Vector Stores",
          icon: "fa-database",
          tools: [
            { name: "Pinecone", logo: "" },
            { name: "Weaviate", logo: "" },
            { name: "ChromaDB", logo: "" },
            { name: "PostgreSQL", logo: "" },
            { name: "MongoDB", logo: "" }
          ]
        },
        {
          name: "Integration & Automation",
          icon: "fa-project-diagram",
          tools: [
            { name: "Zapier", logo: "" },
            { name: "Make (Integromat)", logo: "" },
            { name: "n8n", logo: "" },
            { name: "REST APIs", logo: "" },
            { name: "WebSockets", logo: "" }
          ]
        }
      ]
    },
    methodology: {
      title: "Our Proven Methodology",
      subtitle: "An approach tested on 50+ projects",
      steps: [
        {
          phase: "Discovery",
          title: "Free Consultation",
          description: "We understand your business challenges, analyze your current processes, and identify high-ROI AI opportunities.",
          duration: "30-60 minutes",
          deliverables: ["Opportunities report", "Preliminary ROI estimate", "Initial recommendations"]
        },
        {
          phase: "Validation",
          title: "Rapid POC",
          description: "We create a functional Proof of Concept in 1-2 weeks with your real data to validate technical feasibility and measure real results.",
          duration: "1-2 weeks",
          deliverables: ["Functional POC", "Measured results", "Detailed architecture", "Full project estimate"]
        },
        {
          phase: "Development",
          title: "Development & Integration",
          description: "We develop the complete solution, integrate it with your existing systems, and prepare for production deployment.",
          duration: "4-12 weeks",
          deliverables: ["Complete solution", "Integrations", "Comprehensive tests", "Documentation"]
        },
        {
          phase: "Deployment",
          title: "Deployment & Training",
          description: "We deploy the solution to production, train your teams, and ensure successful adoption with dedicated support.",
          duration: "1-2 weeks",
          deliverables: ["Production deployment", "Team training", "User documentation", "30-day support"]
        },
        {
          phase: "Optimization",
          title: "Support & Continuous Optimization",
          description: "We monitor performance, optimize results, and add new features according to your needs.",
          duration: "Ongoing",
          deliverables: ["Monitoring", "Optimizations", "New features", "Priority support"]
        }
      ]
    },
    certifications: {
      title: "Certifications & Partnerships",
      items: [
        { name: "Google Cloud Partner", icon: "fa-certificate" },
        { name: "AWS Advanced Partner", icon: "fa-certificate" },
        { name: "OpenAI Enterprise Partner", icon: "fa-certificate" },
        { name: "Microsoft AI Partner", icon: "fa-certificate" },
        { name: "ISO 27001 (Security)", icon: "fa-shield-alt" },
        { name: "GDPR Compliant", icon: "fa-lock" }
      ]
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Join the 50+ companies who trust us",
      primaryButton: "Book a free consultation",
      secondaryButton: "See our client cases",
      stats: "200+ AI agents built • $1M average savings • 84% performance improvement"
    }
  }
};

// Helper function to get about data
function getAboutData(lang = 'fr') {
  return aboutData[lang] || aboutData.fr;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { aboutData, getAboutData };
}
