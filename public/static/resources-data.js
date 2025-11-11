// Downloadable Resources Data
const resourcesData = {
  fr: {
    guides: [
      {
        id: "implementation-guide",
        title: "Guide d'Implémentation IA",
        description: "Guide complet pour démarrer votre transformation IA",
        icon: "fa-book",
        type: "PDF",
        size: "2.5 MB",
        pages: "45 pages",
        downloadUrl: "/resources/guide-implementation-ia-fr.pdf"
      },
      {
        id: "governance-framework",
        title: "Framework de Gouvernance IA",
        description: "Template et best practices pour la gouvernance IA",
        icon: "fa-shield-alt",
        type: "PDF",
        size: "1.8 MB",
        pages: "32 pages",
        downloadUrl: "/resources/framework-gouvernance-ia-fr.pdf"
      },
      {
        id: "mlops-best-practices",
        title: "MLOps Best Practices",
        description: "Guide pratique pour industrialiser vos modèles IA",
        icon: "fa-cogs",
        type: "PDF",
        size: "3.2 MB",
        pages: "58 pages",
        downloadUrl: "/resources/mlops-best-practices-fr.pdf"
      }
    ],
    templates: [
      {
        id: "ai-strategy-template",
        title: "Template Stratégie IA",
        description: "Modèle PowerPoint pour votre stratégie IA",
        icon: "fa-file-powerpoint",
        type: "PPTX",
        size: "1.2 MB",
        downloadUrl: "/resources/template-strategie-ia-fr.pptx"
      },
      {
        id: "roi-calculator",
        title: "Calculateur ROI IA",
        description: "Feuille Excel pour calculer le ROI de vos projets IA",
        icon: "fa-file-excel",
        type: "XLSX",
        size: "0.8 MB",
        downloadUrl: "/resources/calculateur-roi-ia-fr.xlsx"
      },
      {
        id: "maturity-roadmap",
        title: "Roadmap Maturité IA",
        description: "Template pour planifier votre évolution vers la maturité IA",
        icon: "fa-road",
        type: "PDF",
        size: "1.5 MB",
        downloadUrl: "/resources/roadmap-maturite-ia-fr.pdf"
      }
    ],
    casestudies: [
      {
        id: "retail-case",
        title: "Cas Client : Retail",
        description: "Transformation IA d'un retailer européen",
        icon: "fa-shopping-cart",
        type: "PDF",
        size: "2.1 MB",
        industry: "Retail",
        downloadUrl: "/resources/case-study-retail-fr.pdf"
      },
      {
        id: "finance-case",
        title: "Cas Client : Finance",
        description: "IA pour la détection de fraude bancaire",
        icon: "fa-university",
        type: "PDF",
        size: "1.9 MB",
        industry: "Finance",
        downloadUrl: "/resources/case-study-finance-fr.pdf"
      },
      {
        id: "manufacturing-case",
        title: "Cas Client : Industrie",
        description: "Maintenance prédictive par IA dans l'industrie",
        icon: "fa-industry",
        type: "PDF",
        size: "2.3 MB",
        industry: "Manufacturing",
        downloadUrl: "/resources/case-study-manufacturing-fr.pdf"
      }
    ]
  },
  en: {
    guides: [
      {
        id: "implementation-guide",
        title: "AI Implementation Guide",
        description: "Comprehensive guide to start your AI transformation",
        icon: "fa-book",
        type: "PDF",
        size: "2.5 MB",
        pages: "45 pages",
        downloadUrl: "/resources/ai-implementation-guide-en.pdf"
      },
      {
        id: "governance-framework",
        title: "AI Governance Framework",
        description: "Template and best practices for AI governance",
        icon: "fa-shield-alt",
        type: "PDF",
        size: "1.8 MB",
        pages: "32 pages",
        downloadUrl: "/resources/ai-governance-framework-en.pdf"
      },
      {
        id: "mlops-best-practices",
        title: "MLOps Best Practices",
        description: "Practical guide to industrialize your AI models",
        icon: "fa-cogs",
        type: "PDF",
        size: "3.2 MB",
        pages: "58 pages",
        downloadUrl: "/resources/mlops-best-practices-en.pdf"
      }
    ],
    templates: [
      {
        id: "ai-strategy-template",
        title: "AI Strategy Template",
        description: "PowerPoint template for your AI strategy",
        icon: "fa-file-powerpoint",
        type: "PPTX",
        size: "1.2 MB",
        downloadUrl: "/resources/ai-strategy-template-en.pptx"
      },
      {
        id: "roi-calculator",
        title: "AI ROI Calculator",
        description: "Excel spreadsheet to calculate AI project ROI",
        icon: "fa-file-excel",
        type: "XLSX",
        size: "0.8 MB",
        downloadUrl: "/resources/ai-roi-calculator-en.xlsx"
      },
      {
        id: "maturity-roadmap",
        title: "AI Maturity Roadmap",
        description: "Template to plan your AI maturity evolution",
        icon: "fa-road",
        type: "PDF",
        size: "1.5 MB",
        downloadUrl: "/resources/ai-maturity-roadmap-en.pdf"
      }
    ],
    casestudies: [
      {
        id: "retail-case",
        title: "Case Study: Retail",
        description: "AI transformation of a European retailer",
        icon: "fa-shopping-cart",
        type: "PDF",
        size: "2.1 MB",
        industry: "Retail",
        downloadUrl: "/resources/case-study-retail-en.pdf"
      },
      {
        id: "finance-case",
        title: "Case Study: Finance",
        description: "AI for banking fraud detection",
        icon: "fa-university",
        type: "PDF",
        size: "1.9 MB",
        industry: "Finance",
        downloadUrl: "/resources/case-study-finance-en.pdf"
      },
      {
        id: "manufacturing-case",
        title: "Case Study: Manufacturing",
        description: "Predictive maintenance with AI in manufacturing",
        icon: "fa-industry",
        type: "PDF",
        size: "2.3 MB",
        industry: "Manufacturing",
        downloadUrl: "/resources/case-study-manufacturing-en.pdf"
      }
    ]
  }
};

function getResources(lang = 'fr') {
  return resourcesData[lang] || resourcesData['fr'];
}

// Simulate download (in real app, would trigger actual download)
function downloadResource(url, title) {
  // In production, this would initiate file download
  // For now, show message
  alert(`Téléchargement de: ${title}\n\nNote: Dans la version production, ce fichier serait automatiquement téléchargé depuis: ${url}`);
  
  // Track download analytics
  console.log(`Resource downloaded: ${url}`);
}
