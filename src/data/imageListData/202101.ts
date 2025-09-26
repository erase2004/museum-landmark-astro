import type { Data } from "../../types"

const baseUrl = 'https://r14-museum.acgn-stock.com/company/detail'

const data: Data[] = [
  {
    name: '40',
    ext: 'mp4',
    companyName: '小花',
    width: 854,
    height: 480,
    color: '#86baea',
    url: `${baseUrl}/wrQcnfX2rwYhgqeHH`,
    isVideo: true
  },
  {
    name: '41',
    ext: 'png',
    companyName: '花心星',
    width: 700,
    height: 393,
    color: '#6152d2',
    url: `${baseUrl}/PQD6vtY8no74jDSsu`
  },
  {
    name: '42',
    ext: 'jpeg',
    companyName: '四宮輝夜',
    width: 977,
    height: 977,
    color: '#745452',
    url: `${baseUrl}/hNYjr7ftN73rdFwmy`
  }
]

export default data