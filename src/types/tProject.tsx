import { tFile } from "./tFile"
import { tTech } from "./tTech"

export type tProject = {
  _id?: string,
  name: string,
  descriptions: {
    en: string,
    de: string
  },
  repositories: {
    name: string,
    url: string
  }[],
  banner?: tFile,
  version: string,
  urls: {
    name: string,
    url: string
  }[],
  techs: tTech[],
  timestamp?: string
}