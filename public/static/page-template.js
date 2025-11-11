// Page template with i18n support
function createPageHTML(title, bodyContent) {
  const lang = getCurrentLang();
  
  return `
    <!DOCTYPE html>
    <html lang="${lang}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"></script>
        <script src="/static/lang-switcher.js"></script>
        <style>
          .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
          .card-hover:hover { transform: translateY(-5px); transition: all 0.3s; }
        </style>
    </head>
    <body class="bg-gray-50">
        ${bodyContent}
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    </body>
    </html>
  `;
}

function createNavbar(activePage = 'home') {
  const lang = getCurrentLang();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  
  return `
    <nav class="bg-white shadow-md fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="/" class="text-2xl font-bold text-indigo-600">Factorise.io</a>
                </div>
                <div class="flex items-center space-x-6">
                    <a href="#services" class="text-gray-700 hover:text-indigo-600">${t('nav_services', lang)}</a>
                    <a href="#about" class="text-gray-700 hover:text-indigo-600">${t('nav_about', lang)}</a>
                    <a href="#contact" class="text-gray-700 hover:text-indigo-600">${t('nav_contact', lang)}</a>
                    <div id="langSwitcher"></div>
                    ${user ? 
                      `<a href="/dashboard" class="text-gray-700 hover:text-indigo-600">${t('nav_dashboard', lang)}</a>
                       <button onclick="logout()" class="text-gray-700 hover:text-indigo-600">${t('nav_logout', lang)}</button>` :
                      `<a href="/login" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">${t('nav_login', lang)}</a>`
                    }
                </div>
            </div>
        </div>
    </nav>
  `;
}
