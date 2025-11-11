/**
 * FAQ Data for Factor AI Platform
 * Frequently Asked Questions with detailed answers
 * Bilingual FR/EN support
 */

const faqData = {
  fr: {
    hero: {
      title: "Questions Fréquentes",
      subtitle: "Trouvez les réponses aux questions les plus courantes sur nos services IA",
      searchPlaceholder: "Rechercher une question..."
    },
    categories: [
      {
        id: "general",
        name: "Général",
        icon: "fa-info-circle",
        questions: [
          {
            id: "what-is-factor-ai",
            question: "Qu'est-ce que Factor AI ?",
            answer: "Factor AI est votre partenaire de transformation IA. Nous construisons des solutions IA sur mesure qui automatisent vos processus métier, améliorent l'expérience client et accélèrent la croissance de votre entreprise. Avec plus de 200 agents IA développés, nous avons l'expertise pour transformer votre vision en réalité.",
            tags: ["entreprise", "services", "expertise"]
          },
          {
            id: "why-choose-factor-ai",
            question: "Pourquoi choisir Factor AI ?",
            answer: "Nous nous distinguons par notre approche pragmatique centrée sur le ROI. Contrairement aux consultants théoriques, nous livrons des solutions concrètes avec un POC rapide (1-2 semaines) pour valider la faisabilité avant tout investissement majeur. Nos clients économisent en moyenne 1M$/an avec nos solutions d'IA vocale et augmentent leur productivité de 30-50%.",
            tags: ["avantages", "ROI", "différenciation"]
          },
          {
            id: "industries-served",
            question: "Quels secteurs servez-vous ?",
            answer: "Nous travaillons avec des entreprises de tous secteurs : E-commerce, Services financiers, Santé, Immobilier, Consulting, Agences marketing, SaaS, Retail, Manufacturing, et plus. Nos solutions IA s'adaptent aux besoins spécifiques de chaque industrie.",
            tags: ["secteurs", "industries", "clients"]
          }
        ]
      },
      {
        id: "services",
        name: "Services",
        icon: "fa-cogs",
        questions: [
          {
            id: "ai-agents-explained",
            question: "Qu'est-ce qu'un agent IA et comment ça marche ?",
            answer: "Un agent IA est un système intelligent qui peut effectuer des tâches de manière autonome comme un employé virtuel. Par exemple, un agent IA peut qualifier des leads en posant les bonnes questions, prendre des rendez-vous, répondre aux emails clients, ou même gérer des appels téléphoniques. Il apprend de vos données et s'améliore continuellement pour fournir des résultats de plus en plus précis.",
            tags: ["agents IA", "automatisation", "fonctionnement"]
          },
          {
            id: "chatbot-vs-ai-agent",
            question: "Quelle est la différence entre un chatbot et un agent IA ?",
            answer: "Un chatbot traditionnel suit des scripts prédéfinis avec des réponses limitées. Un agent IA, en revanche, comprend le contexte, peut tenir des conversations naturelles, prendre des décisions complexes, et même interagir avec d'autres systèmes (CRM, bases de données, APIs). Les agents IA sont bien plus intelligents et peuvent gérer des tâches complexes de bout en bout.",
            tags: ["chatbot", "agent IA", "différences"]
          },
          {
            id: "workflow-automation-benefits",
            question: "Comment l'automatisation de workflows peut-elle m'aider ?",
            answer: "L'automatisation de workflows élimine les tâches répétitives et connecte vos systèmes. Par exemple : synchroniser automatiquement votre CRM avec vos emails, qualifier les leads automatiquement, générer des rapports sans intervention manuelle, ou traiter des commandes de A à Z. Nos clients économisent en moyenne 40 heures par semaine par équipe et réduisent les erreurs manuelles de 80%.",
            tags: ["workflows", "automatisation", "bénéfices"]
          },
          {
            id: "voice-ai-capabilities",
            question: "Que peuvent faire vos agents IA vocaux ?",
            answer: "Nos agents IA vocaux peuvent gérer des appels téléphoniques complets : répondre aux questions, prendre des rendez-vous, qualifier des leads, effectuer des enquêtes de satisfaction, faire des rappels, et même gérer des réclamations simples. Ils comprennent plusieurs langues, s'adaptent au ton de votre marque, et peuvent transférer à un humain si nécessaire. Disponibilité 24/7 sans limites.",
            tags: ["IA vocale", "téléphonie", "capacités"]
          }
        ]
      },
      {
        id: "process",
        name: "Processus & Délais",
        icon: "fa-clock",
        questions: [
          {
            id: "getting-started",
            question: "Comment démarrer avec Factor AI ?",
            answer: "C'est simple en 3 étapes : 1) Réservez une consultation gratuite de 30-60 min où nous comprenons vos besoins. 2) Nous créons un diagramme de flux et développons un POC en 1-2 semaines pour valider la faisabilité. 3) Si vous êtes satisfait, nous lançons le projet complet avec intégration dans votre infrastructure existante (4-12 semaines selon la complexité).",
            tags: ["démarrage", "processus", "étapes"]
          },
          {
            id: "timeline",
            question: "Combien de temps prend un projet typique ?",
            answer: "Cela dépend de la complexité : POC simple (1-2 semaines), Chatbot ou agent IA basique (3-4 semaines), Solution d'automatisation complète (6-8 semaines), Transformation IA entreprise (3-6 mois). Nous privilégions toujours les livrables rapides avec des POC fonctionnels avant tout engagement long terme.",
            tags: ["délais", "timeline", "durée"]
          },
          {
            id: "poc-importance",
            question: "Pourquoi insistez-vous sur un POC ?",
            answer: "Le POC (Proof of Concept) est crucial pour valider la faisabilité technique et le ROI réel avant tout investissement majeur. Beaucoup de projets IA échouent car les attentes ne correspondent pas à la réalité. Notre POC de 1-2 semaines permet de tester avec vos vraies données, mesurer les résultats, et ajuster l'approche. C'est votre garantie de succès.",
            tags: ["POC", "validation", "méthodologie"]
          }
        ]
      },
      {
        id: "pricing",
        name: "Tarification & ROI",
        icon: "fa-dollar-sign",
        questions: [
          {
            id: "pricing-model",
            question: "Comment sont structurés vos prix ?",
            answer: "Nous proposons 3 modèles : 1) Projet fixe - Prix défini après le POC pour une solution complète. 2) Abonnement mensuel - Pour maintenance, support et optimisation continue. 3) Conseil horaire - Pour accompagnement stratégique et workshops (€200-€500/h selon l'expertise). La consultation initiale et le POC initial sont offerts ou à prix réduit pour minimiser votre risque.",
            tags: ["tarifs", "pricing", "modèles"]
          },
          {
            id: "roi-timeline",
            question: "Quel est le ROI typique et en combien de temps ?",
            answer: "Nos clients obtiennent généralement un ROI positif en 3-6 mois. Exemples concrets : Agents IA vocaux = économies de $1M/an, Automatisation workflows = 40h/semaine économisées (≈$100K/an), Chatbots = réduction de 70% du volume de support. Le ROI exact dépend de votre contexte, c'est pourquoi nous l'évaluons lors de la consultation gratuite.",
            tags: ["ROI", "retour investissement", "rentabilité"]
          },
          {
            id: "ongoing-costs",
            question: "Y a-t-il des coûts récurrents après le projet ?",
            answer: "Oui, comme tout système informatique : Hébergement cloud (€50-€500/mois selon le volume), APIs IA (OpenAI, etc.) si utilisées (€100-€1000/mois), Maintenance et support (optionnel, 10-20% du coût projet/an), Évolutions et nouvelles fonctionnalités (à la demande). Nous optimisons toujours pour minimiser les coûts récurrents.",
            tags: ["coûts récurrents", "maintenance", "budget"]
          }
        ]
      },
      {
        id: "technical",
        name: "Questions Techniques",
        icon: "fa-code",
        questions: [
          {
            id: "integrations",
            question: "Pouvez-vous vous intégrer à nos systèmes existants ?",
            answer: "Absolument. Nous nous intégrons avec tous les systèmes majeurs : CRM (Salesforce, HubSpot, Pipedrive), Plateformes e-commerce (Shopify, WooCommerce), Outils de communication (Slack, Teams, Email), Bases de données (SQL, MongoDB, etc.), APIs personnalisées. Si vous avez une API ou une base de données, nous pouvons nous y connecter.",
            tags: ["intégrations", "compatibilité", "systèmes"]
          },
          {
            id: "data-security",
            question: "Comment gérez-vous la sécurité et la confidentialité des données ?",
            answer: "La sécurité est notre priorité n°1. Nous offrons : Hébergement on-premise ou cloud sécurisé (AWS, Azure, GCP), Chiffrement end-to-end des données, Conformité RGPD et autres régulations, Accès restreints avec authentification forte, Audits de sécurité réguliers. Pour les données ultra-sensibles, nous proposons des déploiements 100% on-premise (comme nos systèmes KRS).",
            tags: ["sécurité", "confidentialité", "RGPD"]
          },
          {
            id: "scalability",
            question: "Vos solutions sont-elles scalables ?",
            answer: "Oui, complètement. Nos architectures sont conçues pour scaler : Agents IA peuvent gérer des milliers de conversations simultanées, Voice AI gère des pics d'appels sans limites, Workflows automatisés s'adaptent au volume, Infrastructure cloud auto-scalable. Que vous ayez 10 ou 10,000 clients, nos solutions s'adaptent sans dégradation de performance.",
            tags: ["scalabilité", "performance", "croissance"]
          }
        ]
      },
      {
        id: "support",
        name: "Support & Formation",
        icon: "fa-life-ring",
        questions: [
          {
            id: "training",
            question: "Proposez-vous de la formation pour nos équipes ?",
            answer: "Oui, la formation fait partie intégrante de nos projets. Nous offrons : Formation utilisateurs (comment utiliser les nouveaux outils IA), Formation administrateurs (gestion et configuration), Workshops stratégiques (identifier de nouveaux cas d'usage), Documentation complète et vidéos tutorielles. L'objectif est de rendre vos équipes autonomes.",
            tags: ["formation", "training", "workshops"]
          },
          {
            id: "ongoing-support",
            question: "Quel support offrez-vous après le projet ?",
            answer: "Nous offrons plusieurs niveaux de support : Support basique (inclus 30 jours) - corrections de bugs critiques, Support standard (abonnement mensuel) - support email, mises à jour mineures, Support premium (abonnement premium) - support prioritaire, optimisations continues, nouvelles fonctionnalités. Vous pouvez aussi choisir le support à la demande (facturation horaire).",
            tags: ["support", "maintenance", "assistance"]
          },
          {
            id: "customization",
            question: "Pouvez-vous personnaliser vos solutions pour nos besoins spécifiques ?",
            answer: "Absolument ! Chaque entreprise est unique. Nous personnalisons tout : Ton de voix et personnalité des agents IA, Workflows selon vos processus métier, Intégrations avec vos outils spécifiques, Interface utilisateur à vos couleurs, Règles métier et logique personnalisée. Nous partons toujours de vos besoins réels, jamais de solutions 'one-size-fits-all'.",
            tags: ["personnalisation", "customisation", "sur-mesure"]
          }
        ]
      }
    ],
    cta: {
      title: "Vous ne trouvez pas la réponse à votre question ?",
      subtitle: "Notre équipe est là pour vous aider",
      buttonText: "Contactez-nous",
      alternativeText: "ou réservez une consultation gratuite"
    }
  },
  en: {
    hero: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to the most common questions about our AI services",
      searchPlaceholder: "Search for a question..."
    },
    categories: [
      {
        id: "general",
        name: "General",
        icon: "fa-info-circle",
        questions: [
          {
            id: "what-is-factor-ai",
            question: "What is Factor AI?",
            answer: "Factor AI is your AI transformation partner. We build custom AI solutions that automate your business processes, improve customer experience, and accelerate your company's growth. With over 200 AI agents developed, we have the expertise to turn your vision into reality.",
            tags: ["company", "services", "expertise"]
          },
          {
            id: "why-choose-factor-ai",
            question: "Why choose Factor AI?",
            answer: "We stand out through our pragmatic ROI-focused approach. Unlike theoretical consultants, we deliver concrete solutions with a rapid POC (1-2 weeks) to validate feasibility before any major investment. Our clients save an average of $1M/year with our voice AI solutions and increase productivity by 30-50%.",
            tags: ["benefits", "ROI", "differentiation"]
          },
          {
            id: "industries-served",
            question: "What industries do you serve?",
            answer: "We work with companies across all sectors: E-commerce, Financial services, Healthcare, Real estate, Consulting, Marketing agencies, SaaS, Retail, Manufacturing, and more. Our AI solutions adapt to the specific needs of each industry.",
            tags: ["sectors", "industries", "clients"]
          }
        ]
      },
      {
        id: "services",
        name: "Services",
        icon: "fa-cogs",
        questions: [
          {
            id: "ai-agents-explained",
            question: "What is an AI agent and how does it work?",
            answer: "An AI agent is an intelligent system that can perform tasks autonomously like a virtual employee. For example, an AI agent can qualify leads by asking the right questions, schedule appointments, respond to customer emails, or even handle phone calls. It learns from your data and continuously improves to provide increasingly accurate results.",
            tags: ["AI agents", "automation", "functionality"]
          },
          {
            id: "chatbot-vs-ai-agent",
            question: "What's the difference between a chatbot and an AI agent?",
            answer: "A traditional chatbot follows predefined scripts with limited responses. An AI agent, on the other hand, understands context, can hold natural conversations, make complex decisions, and even interact with other systems (CRM, databases, APIs). AI agents are much smarter and can handle complex end-to-end tasks.",
            tags: ["chatbot", "AI agent", "differences"]
          },
          {
            id: "workflow-automation-benefits",
            question: "How can workflow automation help me?",
            answer: "Workflow automation eliminates repetitive tasks and connects your systems. For example: automatically sync your CRM with your emails, automatically qualify leads, generate reports without manual intervention, or process orders from A to Z. Our clients save an average of 40 hours per week per team and reduce manual errors by 80%.",
            tags: ["workflows", "automation", "benefits"]
          },
          {
            id: "voice-ai-capabilities",
            question: "What can your voice AI agents do?",
            answer: "Our voice AI agents can handle complete phone calls: answer questions, schedule appointments, qualify leads, conduct satisfaction surveys, make reminders, and even handle simple complaints. They understand multiple languages, adapt to your brand tone, and can transfer to a human if needed. 24/7 availability without limits.",
            tags: ["voice AI", "telephony", "capabilities"]
          }
        ]
      },
      {
        id: "process",
        name: "Process & Timeline",
        icon: "fa-clock",
        questions: [
          {
            id: "getting-started",
            question: "How do I get started with Factor AI?",
            answer: "It's simple in 3 steps: 1) Book a free 30-60 min consultation where we understand your needs. 2) We create a flow diagram and develop a POC in 1-2 weeks to validate feasibility. 3) If you're satisfied, we launch the full project with integration into your existing infrastructure (4-12 weeks depending on complexity).",
            tags: ["getting started", "process", "steps"]
          },
          {
            id: "timeline",
            question: "How long does a typical project take?",
            answer: "It depends on complexity: Simple POC (1-2 weeks), Basic chatbot or AI agent (3-4 weeks), Complete automation solution (6-8 weeks), Enterprise AI transformation (3-6 months). We always prioritize rapid deliverables with functional POCs before any long-term commitment.",
            tags: ["timeline", "duration", "timeframe"]
          },
          {
            id: "poc-importance",
            question: "Why do you insist on a POC?",
            answer: "The POC (Proof of Concept) is crucial for validating technical feasibility and real ROI before any major investment. Many AI projects fail because expectations don't match reality. Our 1-2 week POC allows testing with your real data, measuring results, and adjusting the approach. It's your guarantee of success.",
            tags: ["POC", "validation", "methodology"]
          }
        ]
      },
      {
        id: "pricing",
        name: "Pricing & ROI",
        icon: "fa-dollar-sign",
        questions: [
          {
            id: "pricing-model",
            question: "How is your pricing structured?",
            answer: "We offer 3 models: 1) Fixed project - Price defined after POC for a complete solution. 2) Monthly subscription - For maintenance, support and continuous optimization. 3) Hourly consulting - For strategic coaching and workshops (€200-€500/h depending on expertise). Initial consultation and initial POC are free or discounted to minimize your risk.",
            tags: ["pricing", "rates", "models"]
          },
          {
            id: "roi-timeline",
            question: "What is the typical ROI and timeframe?",
            answer: "Our clients typically achieve positive ROI within 3-6 months. Concrete examples: Voice AI agents = $1M/year savings, Workflow automation = 40h/week saved (≈$100K/year), Chatbots = 70% reduction in support volume. Exact ROI depends on your context, which is why we evaluate it during the free consultation.",
            tags: ["ROI", "return on investment", "profitability"]
          },
          {
            id: "ongoing-costs",
            question: "Are there recurring costs after the project?",
            answer: "Yes, like any IT system: Cloud hosting (€50-€500/month depending on volume), AI APIs (OpenAI, etc.) if used (€100-€1000/month), Maintenance and support (optional, 10-20% of project cost/year), Evolutions and new features (on demand). We always optimize to minimize recurring costs.",
            tags: ["recurring costs", "maintenance", "budget"]
          }
        ]
      },
      {
        id: "technical",
        name: "Technical Questions",
        icon: "fa-code",
        questions: [
          {
            id: "integrations",
            question: "Can you integrate with our existing systems?",
            answer: "Absolutely. We integrate with all major systems: CRM (Salesforce, HubSpot, Pipedrive), E-commerce platforms (Shopify, WooCommerce), Communication tools (Slack, Teams, Email), Databases (SQL, MongoDB, etc.), Custom APIs. If you have an API or database, we can connect to it.",
            tags: ["integrations", "compatibility", "systems"]
          },
          {
            id: "data-security",
            question: "How do you handle data security and privacy?",
            answer: "Security is our #1 priority. We offer: On-premise or secure cloud hosting (AWS, Azure, GCP), End-to-end data encryption, GDPR and other regulatory compliance, Restricted access with strong authentication, Regular security audits. For ultra-sensitive data, we offer 100% on-premise deployments (like our KRS systems).",
            tags: ["security", "privacy", "GDPR"]
          },
          {
            id: "scalability",
            question: "Are your solutions scalable?",
            answer: "Yes, completely. Our architectures are designed to scale: AI agents can handle thousands of simultaneous conversations, Voice AI handles call spikes without limits, Automated workflows adapt to volume, Auto-scalable cloud infrastructure. Whether you have 10 or 10,000 customers, our solutions adapt without performance degradation.",
            tags: ["scalability", "performance", "growth"]
          }
        ]
      },
      {
        id: "support",
        name: "Support & Training",
        icon: "fa-life-ring",
        questions: [
          {
            id: "training",
            question: "Do you offer training for our teams?",
            answer: "Yes, training is an integral part of our projects. We offer: User training (how to use new AI tools), Administrator training (management and configuration), Strategic workshops (identifying new use cases), Complete documentation and tutorial videos. The goal is to make your teams autonomous.",
            tags: ["training", "workshops", "education"]
          },
          {
            id: "ongoing-support",
            question: "What support do you offer after the project?",
            answer: "We offer several support levels: Basic support (included 30 days) - critical bug fixes, Standard support (monthly subscription) - email support, minor updates, Premium support (premium subscription) - priority support, continuous optimizations, new features. You can also choose on-demand support (hourly billing).",
            tags: ["support", "maintenance", "assistance"]
          },
          {
            id: "customization",
            question: "Can you customize your solutions for our specific needs?",
            answer: "Absolutely! Every business is unique. We customize everything: Tone of voice and personality of AI agents, Workflows according to your business processes, Integrations with your specific tools, User interface in your colors, Custom business rules and logic. We always start from your real needs, never 'one-size-fits-all' solutions.",
            tags: ["customization", "personalization", "bespoke"]
          }
        ]
      }
    ],
    cta: {
      title: "Can't find the answer to your question?",
      subtitle: "Our team is here to help",
      buttonText: "Contact us",
      alternativeText: "or book a free consultation"
    }
  }
};

// Helper function to get FAQ data
function getFaqData(lang = 'fr') {
  return faqData[lang] || faqData.fr;
}

// Helper function to search questions
function searchFaqQuestions(query, lang = 'fr') {
  const data = getFaqData(lang);
  const results = [];
  
  query = query.toLowerCase();
  
  data.categories.forEach(category => {
    category.questions.forEach(q => {
      const matchQuestion = q.question.toLowerCase().includes(query);
      const matchAnswer = q.answer.toLowerCase().includes(query);
      const matchTags = q.tags.some(tag => tag.toLowerCase().includes(query));
      
      if (matchQuestion || matchAnswer || matchTags) {
        results.push({
          ...q,
          categoryName: category.name,
          categoryIcon: category.icon
        });
      }
    });
  });
  
  return results;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { faqData, getFaqData, searchFaqQuestions };
}
