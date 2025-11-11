// Language switcher component
function createLangSwitcher() {
  const currentLang = getCurrentLang();
  
  return `
    <div class="flex items-center space-x-2">
      <button onclick="setLanguage('fr')" 
              class="px-3 py-1 rounded ${currentLang === 'fr' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}">
        FR
      </button>
      <button onclick="setLanguage('en')" 
              class="px-3 py-1 rounded ${currentLang === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}">
        EN
      </button>
    </div>
  `;
}

// Initialize language switcher on page load
document.addEventListener('DOMContentLoaded', () => {
  const langSwitchers = document.querySelectorAll('#langSwitcher');
  langSwitchers.forEach(el => {
    el.innerHTML = createLangSwitcher();
  });
});
