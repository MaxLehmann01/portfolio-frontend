export type tProject = {
  name: string,
  descriptions: {
    lang: 'en' | 'de',
    content: string
  }[],
  repositories: {
    name: string,
    url: string
  }[],
  banner: string,
  version: string,
  urls: {
    name: string,
    url: string
  }[],
  techs: {
    name: string,
    icon: string,
    url: string
  }[]
  timestamp: string
}