// Initialize i18n on page load
(function() {
  const lang = getCurrentLang();
  
  // Translate all elements with data-i18n attribute
  document.addEventListener('DOMContentLoaded', () => {
    translatePage(lang);
  });
  
  function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key, lang);
    });
    
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key, lang);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key, lang);
    });
  }
})();
