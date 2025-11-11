/**
 * Navigation Component - Reusable navigation bar
 * Automatically translated via i18n-page.js
 */

function renderNavigation(currentPage = '') {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const lang = getCurrentLang();
  
  return `
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a href="/" class="text-2xl font-bold text-indigo-600 flex items-center">
              <i class="fas fa-brain mr-2"></i>
              Factor AI
            </a>
          </div>
          
          <div class="hidden md:flex items-center space-x-6">
            <a href="/" class="nav-link ${currentPage === 'home' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}" data-i18n="nav_home">Accueil</a>
            <a href="/services" class="nav-link ${currentPage === 'services' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}" data-i18n="nav_services">Services</a>
            <a href="/use-cases" class="nav-link ${currentPage === 'use-cases' || currentPage === 'case-studies' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}">Cas d'Usage</a>
            <a href="/about" class="nav-link ${currentPage === 'about' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}" data-i18n="nav_about">À propos</a>
            <a href="/testimonials" class="nav-link ${currentPage === 'testimonials' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}" data-i18n="nav_testimonials">Témoignages</a>
            <a href="/faq" class="nav-link ${currentPage === 'faq' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}" data-i18n="nav_faq">FAQ</a>
            <a href="/resources" class="nav-link ${currentPage === 'resources' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}" data-i18n="nav_resources">Ressources</a>
            ${user ? 
              `<a href="/dashboard" class="nav-link ${currentPage === 'dashboard' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}" data-i18n="nav_dashboard">Dashboard</a>
               <a href="/contact" class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors" data-i18n="nav_contact">Contact</a>` :
              `<a href="/login" class="text-gray-700 hover:text-indigo-600" data-i18n="nav_login">Connexion</a>
               <a href="/contact" class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors" data-i18n="nav_contact">Contact</a>`
            }
            
            <!-- Language Switcher -->
            <div class="flex items-center space-x-2 ml-4 border-l pl-4">
              <button onclick="setLanguage('fr')" class="px-2 py-1 rounded ${lang === 'fr' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}">FR</button>
              <button onclick="setLanguage('en')" class="px-2 py-1 rounded ${lang === 'en' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}">EN</button>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button id="mobile-menu-button" class="text-gray-700 hover:text-indigo-600 focus:outline-none">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
        <div class="px-4 pt-2 pb-4 space-y-2">
          <a href="/" class="block py-2 text-gray-700 hover:text-indigo-600" data-i18n="nav_home">Accueil</a>
          <a href="/services" class="block py-2 text-gray-700 hover:text-indigo-600" data-i18n="nav_services">Services</a>
          <a href="/use-cases" class="block py-2 text-gray-700 hover:text-indigo-600">Cas d'Usage</a>
          <a href="/about" class="block py-2 text-gray-700 hover:text-indigo-600" data-i18n="nav_about">À propos</a>
          <a href="/testimonials" class="block py-2 text-gray-700 hover:text-indigo-600" data-i18n="nav_testimonials">Témoignages</a>
          <a href="/faq" class="block py-2 text-gray-700 hover:text-indigo-600" data-i18n="nav_faq">FAQ</a>
          <a href="/resources" class="block py-2 text-gray-700 hover:text-indigo-600" data-i18n="nav_resources">Ressources</a>
          ${user ? 
            `<a href="/dashboard" class="block py-2 text-gray-700 hover:text-indigo-600" data-i18n="nav_dashboard">Dashboard</a>` :
            `<a href="/login" class="block py-2 text-gray-700 hover:text-indigo-600" data-i18n="nav_login">Connexion</a>`
          }
          <a href="/contact" class="block py-2 bg-indigo-600 text-white text-center rounded-lg" data-i18n="nav_contact">Contact</a>
          <div class="flex space-x-2 pt-2">
            <button onclick="setLanguage('fr')" class="flex-1 px-2 py-1 rounded ${lang === 'fr' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}">FR</button>
            <button onclick="setLanguage('en')" class="flex-1 px-2 py-1 rounded ${lang === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}">EN</button>
          </div>
        </div>
      </div>
    </nav>
    
    <script>
      // Mobile menu toggle
      document.getElementById('mobile-menu-button')?.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
      });
    </script>
  `;
}

// Cross-navigation component - shows related pages
function renderCrossNavigation(currentPage = '') {
  const pages = [
    { path: '/', label: 'Accueil', icon: 'fa-home', description: 'Retour à la page principale' },
    { path: '/services', label: 'Services', icon: 'fa-cogs', description: '7 services IA détaillés' },
    { path: '/use-cases', label: 'Cas d\'Usage', icon: 'fa-lightbulb', description: '18 exemples concrets' },
    { path: '/about', label: 'À Propos', icon: 'fa-users', description: 'Notre équipe et vision' },
    { path: '/testimonials', label: 'Témoignages', icon: 'fa-star', description: 'Avis clients' },
    { path: '/resources', label: 'Ressources', icon: 'fa-book', description: 'Guides et templates' },
    { path: '/contact', label: 'Contact', icon: 'fa-envelope', description: 'Nous contacter' },
    { path: '/faq', label: 'FAQ', icon: 'fa-question-circle', description: 'Questions fréquentes' }
  ];
  
  // Filter out current page
  const otherPages = pages.filter(p => p.path !== currentPage && p.path !== '/' + currentPage);
  
  // Show max 4 related pages
  const relatedPages = otherPages.slice(0, 4);
  
  return `
    <section class="bg-gradient-to-br from-gray-50 to-indigo-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Continuer votre exploration</h2>
        <div class="grid md:grid-cols-4 gap-6">
          ${relatedPages.map(page => `
            <a href="${page.path}" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all group">
              <div class="text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <i class="fas ${page.icon} text-4xl"></i>
              </div>
              <h3 class="text-lg font-bold mb-2 group-hover:text-indigo-600">${page.label}</h3>
              <p class="text-sm text-gray-600">${page.description}</p>
              <div class="mt-4 text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Découvrir →
              </div>
            </a>
          `).join('')}
        </div>
        <div class="text-center mt-12">
          <a href="/" class="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-lg">
            <i class="fas fa-home mr-2"></i> Retour à l'accueil
          </a>
        </div>
      </div>
    </section>
  `;
}

// Footer component with cross-navigation
function renderFooter(currentPage = '') {
  const currentYear = new Date().getFullYear();
  
  // Add cross-navigation before footer if currentPage is provided
  const crossNav = currentPage ? renderCrossNavigation(currentPage) : '';
  
  return crossNav + `
    <footer class="bg-gray-900 text-white mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-2xl font-bold mb-4">
              <i class="fas fa-brain mr-2 text-indigo-400"></i>
              Factor AI
            </h3>
            <p class="text-gray-400 mb-4" data-i18n="footer_desc">Transformation Digitale & Intelligence Artificielle</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-indigo-400"><i class="fab fa-linkedin text-xl"></i></a>
              <a href="#" class="text-gray-400 hover:text-indigo-400"><i class="fab fa-twitter text-xl"></i></a>
              <a href="#" class="text-gray-400 hover:text-indigo-400"><i class="fab fa-github text-xl"></i></a>
            </div>
          </div>
          
          <!-- Services -->
          <div>
            <h4 class="font-bold mb-4" data-i18n="footer_services">Services</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="/services" class="hover:text-indigo-400">Agents IA</a></li>
              <li><a href="/services" class="hover:text-indigo-400">Automatisation</a></li>
              <li><a href="/services" class="hover:text-indigo-400">Chatbots</a></li>
              <li><a href="/services" class="hover:text-indigo-400">IA Vocale</a></li>
              <li><a href="/services" class="hover:text-indigo-400">Conseil</a></li>
            </ul>
          </div>
          
          <!-- Company -->
          <div>
            <h4 class="font-bold mb-4" data-i18n="footer_company">Entreprise</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="/about" class="hover:text-indigo-400" data-i18n="nav_about">À propos</a></li>
              <li><a href="/testimonials" class="hover:text-indigo-400" data-i18n="nav_testimonials">Témoignages</a></li>
              <li><a href="/faq" class="hover:text-indigo-400" data-i18n="nav_faq">FAQ</a></li>
              <li><a href="/resources" class="hover:text-indigo-400" data-i18n="nav_resources">Ressources</a></li>
              <li><a href="/contact" class="hover:text-indigo-400" data-i18n="nav_contact">Contact</a></li>
            </ul>
          </div>
          
          <!-- Legal -->
          <div>
            <h4 class="font-bold mb-4" data-i18n="footer_legal">Légal</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-indigo-400" data-i18n="footer_privacy">Politique de confidentialité</a></li>
              <li><a href="#" class="hover:text-indigo-400" data-i18n="footer_terms">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; ${currentYear} Factor AI. <span data-i18n="footer_rights">Tous droits réservés</span>.</p>
        </div>
      </div>
    </footer>
  `;
}

// Render page with navigation and footer
function renderPageWithLayout(content, currentPage = '') {
  document.body.insertAdjacentHTML('afterbegin', renderNavigation(currentPage));
  document.body.insertAdjacentHTML('beforeend', renderFooter());
  
  // Insert main content
  const mainContainer = document.createElement('main');
  mainContainer.className = 'min-h-screen';
  mainContainer.innerHTML = content;
  document.body.insertBefore(mainContainer, document.querySelector('footer'));
}
