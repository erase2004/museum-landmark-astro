type DefaultSite = {
  title: string,
  url: string,
  disabled: false
}

type DisabledSite = {
  title: string,
  url: null,
  disabled: true
}

export type Site = DefaultSite | DisabledSite;

export type SiteList = Record<number, Site[]>;