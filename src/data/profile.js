import { enLocale } from './locales/en';
import { zhLocale } from './locales/zh';

export const SUPPORTED_LANGUAGES = ['en', 'zh'];
export const DEFAULT_LANGUAGE = 'en';

const links = {
  // Put your resume PDF at: /public/Haoheng_Huang_Resume.pdf
  // If you rename the file, update this path.
  resumePdf: '/Haoheng_Huang_Resume.pdf',
  github: 'https://github.com/karma0929',
  linkedin: 'https://www.linkedin.com/in/haoheng-huang-158295390/',
  email: 'haohenghuang@ucmerced.edu',
};

function resolveLink(linkKey) {
  switch (linkKey) {
    case 'projects':
      return '#projects';
    case 'contact':
      return '#contact';
    case 'resume':
      return links.resumePdf;
    case 'email':
      return links.email;
    case 'github':
      return links.github;
    case 'linkedin':
      return links.linkedin;
    default:
      return linkKey;
  }
}

function resolveButtons(buttons = []) {
  return buttons.map((button) => ({
    ...button,
    href: resolveLink(button.link ?? button.href ?? ''),
  }));
}

function buildProfile(localeData) {
  return {
    ...localeData,
    links,
    hero: {
      ...localeData.hero,
      cta: resolveButtons(localeData.hero?.cta),
    },
    sections: {
      ...localeData.sections,
      contact: {
        ...localeData.sections.contact,
        buttons: resolveButtons(localeData.sections.contact?.buttons),
      },
    },
  };
}

const localizedProfiles = {
  en: buildProfile(enLocale),
  zh: buildProfile(zhLocale),
};

export function getProfileData(language = DEFAULT_LANGUAGE) {
  return localizedProfiles[language] ?? localizedProfiles[DEFAULT_LANGUAGE];
}

export { links as profileLinks };
