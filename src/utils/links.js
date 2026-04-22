const PLACEHOLDER_PATTERNS = [
  /your-/i,
  /example\.com/i,
  /your-linkedin-id/i,
  /placeholder/i,
  /username\/repo/i,
];

function isEmailLike(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function toMailto(value) {
  if (!value) {
    return '';
  }

  return value.startsWith('mailto:') ? value : `mailto:${value}`;
}

export function normalizeHref(rawHref, type = 'url') {
  if (!rawHref) {
    return '';
  }

  const href = rawHref.trim();

  if (type === 'email' || isEmailLike(href)) {
    return toMailto(href);
  }

  return href;
}

export function isExternalHref(href) {
  return /^(https?:|mailto:)/i.test(href);
}

export function isPlaceholderHref(href) {
  return PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(href));
}

export function resolveLink(rawHref, options = {}) {
  const { type = 'url', disableIfPlaceholder = true } = options;
  const href = normalizeHref(rawHref, type);

  if (!href) {
    return {
      href: '',
      isExternal: false,
      isMissing: true,
      isPlaceholder: false,
      isDisabled: true,
    };
  }

  const isPlaceholder = isPlaceholderHref(href);

  return {
    href,
    isExternal: isExternalHref(href),
    isMissing: false,
    isPlaceholder,
    isDisabled: disableIfPlaceholder && isPlaceholder,
  };
}
