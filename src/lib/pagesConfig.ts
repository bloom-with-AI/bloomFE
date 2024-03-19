const pagesConfig = {
  '/': {
    showHeader: true,
    showFooter: true,
    title: 'Home',
  },
  '/map': {
    showHeader: true,
    showFooter: true,
    title: 'Map',
  },
  '/chat': {
    showHeader: true,
    showFooter: true,
    title: 'Chat',
  },
  '/search': {
    showHeader: true,
    showFooter: false,
    title: 'Search',
  },
  '/onboarding': {
    showHeader: true,
    showFooter: true,
    title: 'OnBoarding',
  },
  '/map/detail': {
    showHeader: true,
    showFooter: false,
    title: 'Map Detail',
  },
} as const

export default pagesConfig
