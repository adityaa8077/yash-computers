/**
 * Google Translate Language Switcher Utility for Yash Computers
 * Allows seamless 1-click toggling between English and Hindi (हिन्दी)
 */

export type SupportedLanguage = 'en' | 'hi';

export const getCurrentLanguage = (): SupportedLanguage => {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/googtrans=\/en\/([a-z]+)/);
  if (match && match[1] === 'hi') {
    return 'hi';
  }
  return (localStorage.getItem('yash_lang') as SupportedLanguage) || 'en';
};

export const setLanguage = (lang: SupportedLanguage) => {
  if (typeof window === 'undefined') return;

  localStorage.setItem('yash_lang', lang);

  // Set Google Translate cookie
  const hostname = window.location.hostname;
  document.cookie = `googtrans=/en/${lang}; path=/;`;
  if (hostname && hostname !== 'localhost') {
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${hostname};`;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=.${hostname};`;
  }

  // Attempt to trigger the select element in the Google Translate iframe/container
  const selectElement = document.querySelector<HTMLSelectElement>('.goog-te-combo');
  if (selectElement) {
    selectElement.value = lang;
    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
  } else {
    // If element not rendered yet, reload with updated cookie
    window.location.reload();
  }
};
