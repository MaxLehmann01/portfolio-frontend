export type tProject = {
  name: string,
  descriptions: {
    lang: 'en' | 'de',
    content: string
  }[],
  repositories: string[],
  version: string,
  urls: string[],
  timestamp: string
}