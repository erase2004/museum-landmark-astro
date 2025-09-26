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

export type Data = {
  name: string,
  ext: 'jpg' | 'jpeg' | 'png' | 'gif' | 'mp4',
  companyName: string,
  width: number,
  height: number,
  color: `#${string}`,
  url: string,
  isVideo?: true,
}