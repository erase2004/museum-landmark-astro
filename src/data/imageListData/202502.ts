import type { Data } from "../../types"

const baseUrl = 'https://r31-museum.acgn-stock.com/company/detail'

const data: Data[] = [
  {
    name: '91',
    ext: 'png',
    companyName: '倉田真白',
    width: 1200,
    height: 800,
    color: '#c6b4c2',
    url: `${baseUrl}/t6N2qmrvBCRctgubQ`
  },
  {
    name: '92',
    ext: 'jpeg',
    companyName: '天童愛麗絲',
    width: 1200,
    height: 849,
    color: '#77a0c5',
    url: `${baseUrl}/bq5P6YtHKDr27jt8h`
  },
  {
    name: '93',
    ext: 'png',
    companyName: '梅(艦これ)',
    width: 327,
    height: 450,
    color: '#a99f9d',
    url: `${baseUrl}/3N5BY5c4QaLaSGJyK`
  }
]

export default data