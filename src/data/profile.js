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

function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

function mergeLocalizedValue(baseValue, overrideValue) {
  if (Array.isArray(baseValue)) {
    if (!Array.isArray(overrideValue) || overrideValue.length === 0) {
      return baseValue;
    }

    const maxLength = Math.max(baseValue.length, overrideValue.length);
    return Array.from({ length: maxLength }, (_, index) =>
      mergeLocalizedValue(baseValue[index], overrideValue[index]),
    ).filter((item) => item !== undefined);
  }

  if (isPlainObject(baseValue)) {
    if (!isPlainObject(overrideValue)) {
      return baseValue;
    }

    const merged = { ...baseValue };
    Object.keys(overrideValue).forEach((key) => {
      merged[key] = mergeLocalizedValue(baseValue[key], overrideValue[key]);
    });
    return merged;
  }

  if (overrideValue === undefined || overrideValue === null || overrideValue === '') {
    return baseValue;
  }

  return overrideValue;
}

function getLocalizedBase(language) {
  if (language === 'zh') {
    return mergeLocalizedValue(enLocale, zhLocale);
  }

  return enLocale;
}

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

export function getProfileData(language = DEFAULT_LANGUAGE) {
  const normalizedLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
  return buildProfile(getLocalizedBase(normalizedLanguage));
}

export { links as profileLinks };
