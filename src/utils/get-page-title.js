import defaultSettings from '@/settings'

const title = defaultSettings.title || 'ACG TALK'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
