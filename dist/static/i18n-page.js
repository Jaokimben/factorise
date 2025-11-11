// I18n page handler - Translates page content dynamically
(function() {
  const lang = getCurrentLang();
  
  window.addEventListener('DOMContentLoaded', function() {
    // Add language switcher to navigation
    const navItems = document.querySelectorAll('nav .flex.items-center.space-x-6');
    navItems.forEach(nav => {
      if (!nav.querySelector('.lang-switcher')) {
        const langDiv = document.createElement('div');
        langDiv.className = 'lang-switcher flex items-center space-x-2';
        langDiv.innerHTML = `
          <button onclick="setLanguage('fr')" 
                  class="px-3 py-1 rounded text-sm font-medium ${lang === 'fr' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}">
            FR
          </button>
          <button onclick="setLanguage('en')" 
                  class="px-3 py-1 rounded text-sm font-medium ${lang === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}">
            EN
          </button>
        `;
        // Insert before login button
        const loginBtn = nav.querySelector('a[href="/login"], button');
        if (loginBtn) {
          nav.insertBefore(langDiv, loginBtn);
        } else {
          nav.appendChild(langDiv);
        }
      }
    });
    
    // Translate common navigation elements
    translateElement('a[href="#services"]', t('nav_services', lang));
    translateElement('a[href="#about"]', t('nav_about', lang));
    translateElement('a[href="#contact"]', t('nav_contact', lang));
    translateElement('a[href="/login"]', t('nav_login', lang));
    translateElement('button[onclick="logout()"]', t('nav_logout', lang));
    translateElement('a[href="/dashboard"]', t('nav_dashboard', lang));
    
    // Homepage specific translations
    if (window.location.pathname === '/') {
      // Hero
      translateElement('h1.text-5xl', t('hero_title', lang));
      translateElement('.text-xl.mb-8', t('hero_subtitle', lang));
      translateElement('a[href="/register"]', t('hero_cta_start', lang));
      translateElement('a[href="#services"].border-2', t('hero_cta_learn', lang));
      
      // Services
      translateElement('#services h2', t('services_title', lang));
      const services = document.querySelectorAll('#services .grid > div');
      if (services[0]) {
        services[0].querySelector('h3').textContent = t('service1_title', lang);
        services[0].querySelector('p').textContent = t('service1_desc', lang);
      }
      if (services[1]) {
        services[1].querySelector('h3').textContent = t('service2_title', lang);
        services[1].querySelector('p').textContent = t('service2_desc', lang);
      }
      if (services[2]) {
        services[2].querySelector('h3').textContent = t('service3_title', lang);
        services[2].querySelector('p').textContent = t('service3_desc', lang);
      }
      
      // About
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.querySelector('h2').textContent = t('about_title', lang);
        const aboutPs = aboutSection.querySelectorAll('p');
        if (aboutPs[0]) aboutPs[0].textContent = t('about_desc1', lang);
        if (aboutPs[1]) aboutPs[1].textContent = t('about_desc2', lang);
        
        const whyTitle = aboutSection.querySelector('.bg-white h3');
        if (whyTitle) whyTitle.textContent = t('about_why_title', lang);
        
        const whyLis = aboutSection.querySelectorAll('.bg-white li span');
        if (whyLis[0]) whyLis[0].textContent = t('about_why1', lang);
        if (whyLis[1]) whyLis[1].textContent = t('about_why2', lang);
        if (whyLis[2]) whyLis[2].textContent = t('about_why3', lang);
        if (whyLis[3]) whyLis[3].textContent = t('about_why4', lang);
      }
      
      // CTA
      const ctaSection = document.querySelector('.gradient-bg.text-white.py-16');
      if (ctaSection) {
        ctaSection.querySelector('h2').textContent = t('cta_title', lang);
        ctaSection.querySelector('p').textContent = t('cta_subtitle', lang);
        ctaSection.querySelector('a').textContent = t('cta_button', lang);
      }
      
      // Footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerPs = footer.querySelectorAll('p');
        if (footerPs[0]) footerPs[0].textContent = t('footer_desc', lang);
        if (footerPs[footerPs.length - 1]) {
          footerPs[footerPs.length - 1].innerHTML = `&copy; 2025 Factorise.io - ${t('footer_rights', lang)}`;
        }
        
        const footerH3s = footer.querySelectorAll('h3');
        if (footerH3s[1]) footerH3s[1].textContent = t('footer_contact', lang);
        if (footerH3s[2]) footerH3s[2].textContent = t('footer_follow', lang);
      }
    }
    
    // Login page
    if (window.location.pathname === '/login') {
      translateElement('.text-3xl.font-bold', t('auth_login_title', lang));
      translateElement('.text-gray-600.mt-2', t('auth_login_subtitle', lang));
      const labels = document.querySelectorAll('label');
      if (labels[0]) labels[0].textContent = t('auth_email', lang);
      if (labels[1]) labels[1].textContent = t('auth_password', lang);
      translateElement('button[type="submit"]', t('auth_login_button', lang));
      const linkText = document.querySelector('.text-center.mt-6');
      if (linkText) {
        linkText.innerHTML = `${t('auth_no_account', lang)} <a href="/register" class="text-indigo-600 hover:text-indigo-700 font-semibold">${t('auth_register_button', lang)}</a>`;
      }
      const backLink = document.querySelector('.text-center.mt-2 a');
      if (backLink) backLink.innerHTML = `← ${t('auth_back_home', lang)}`;
    }
    
    // Register page
    if (window.location.pathname === '/register') {
      translateElement('.text-3xl.font-bold', t('auth_register_title', lang));
      translateElement('.text-gray-600.mt-2', t('auth_register_subtitle', lang));
      const labels = document.querySelectorAll('label');
      if (labels[0]) labels[0].textContent = t('auth_firstname', lang);
      if (labels[1]) labels[1].textContent = t('auth_lastname', lang);
      if (labels[2]) labels[2].textContent = t('auth_email', lang);
      if (labels[3]) labels[3].textContent = t('auth_company', lang);
      if (labels[4]) labels[4].textContent = t('auth_password', lang);
      translateElement('button[type="submit"]', t('auth_register_button', lang));
      const linkText = document.querySelector('.text-center.mt-6');
      if (linkText) {
        linkText.innerHTML = `${t('auth_have_account', lang)} <a href="/login" class="text-indigo-600 hover:text-indigo-700 font-semibold">${t('auth_login_button', lang)}</a>`;
      }
    }
    
    // Dashboard page
    if (window.location.pathname === '/dashboard') {
      translateElement('h1.text-4xl', t('dash_welcome', lang));
      translateElement('.border-indigo-400 h3', t('dash_new_assessment', lang));
      translateElement('.border-indigo-400 p', t('dash_new_assessment_desc', lang));
      translateElement('.border-indigo-400 button', t('dash_start_button', lang));
      
      const myAssessDiv = document.querySelectorAll('.bg-white.p-8.rounded-xl.shadow-lg')[1];
      if (myAssessDiv) {
        myAssessDiv.querySelector('h3').textContent = t('dash_my_assessments', lang);
        myAssessDiv.querySelector('p').textContent = t('dash_my_assessments_desc', lang);
      }
      
      const statsDiv = document.querySelectorAll('.bg-white.p-8.rounded-xl.shadow-lg')[2];
      if (statsDiv) {
        statsDiv.querySelector('h3').textContent = t('dash_stats_title', lang);
        const statLabels = statsDiv.querySelectorAll('.text-gray-600');
        if (statLabels[0]) statLabels[0].textContent = t('dash_stats_total', lang);
        if (statLabels[1]) statLabels[1].textContent = t('dash_stats_avg', lang);
        if (statLabels[2]) statLabels[2].textContent = t('dash_stats_completed', lang);
        if (statLabels[3]) statLabels[3].textContent = t('dash_stats_progress', lang);
      }
    }
    
    // Assessment page  
    if (window.location.pathname === '/assessment') {
      translateElement('h1.text-4xl', t('assess_title', lang));
      const subtitle = document.querySelector('.text-gray-600.mb-8');
      if (subtitle) subtitle.textContent = t('assess_subtitle', lang);
      
      const progressText = document.querySelector('#progressText');
      if (progressText) progressText.parentElement.querySelector('span').textContent = t('assess_progress', lang);
      
      const prevBtn = document.querySelector('#prevBtn');
      if (prevBtn) prevBtn.innerHTML = `<i class="fas fa-arrow-left mr-2"></i>${t('assess_previous', lang)}`;
      
      const nextBtn = document.querySelector('#nextBtn');
      if (nextBtn) nextBtn.innerHTML = `${t('assess_next', lang)} <i class="fas fa-arrow-right ml-2"></i>`;
    }
    
    // Results page
    if (window.location.pathname === '/results') {
      translateElement('h1.text-4xl', t('results_title', lang));
      const scoreLabel = document.querySelector('.text-xl');
      if (scoreLabel) scoreLabel.textContent = t('results_maturity_score', lang);
      
      const detailTitle = document.querySelector('.bg-white h2');
      if (detailTitle) detailTitle.textContent = t('results_detailed_analysis', lang);
      
      const recoTitle = document.querySelectorAll('.bg-white h2')[1];
      if (recoTitle) recoTitle.innerHTML = `<i class="fas fa-lightbulb text-yellow-500 mr-3"></i>${t('results_recommendations', lang)}`;
      
      const printBtn = document.querySelector('button[onclick="window.print()"]');
      if (printBtn) printBtn.innerHTML = `<i class="fas fa-print mr-2"></i>${t('results_print', lang)}`;
      
      const backBtn = document.querySelector('a[href="/dashboard"]');
      if (backBtn) backBtn.innerHTML = `<i class="fas fa-home mr-2"></i>${t('results_back_dashboard', lang)}`;
    }
  });
  
  function translateElement(selector, text) {
    const el = document.querySelector(selector);
    if (el && text) el.textContent = text;
  }
})();
