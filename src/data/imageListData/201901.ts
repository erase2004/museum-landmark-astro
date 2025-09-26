import type { Data } from "../../types"

const baseUrl = 'https://r6-museum.acgn-stock.com/company/detail'

const data: Data[] = [
  {
    name: '16',
    ext: 'png',
    companyName: 'クロ',
    width: 2560,
    height: 1440,
    color: '#b9a8a7',
    url: `${baseUrl}/ohHbBESbFhZ3DMek3`
  },
  {
    name: '17',
    ext: 'png',
    companyName: '白 雪姫',
    width: 1600,
    height: 900,
    color: '#b2949b',
    url: `${baseUrl}/HYaRQSRNG4hv3KxrW`
  },
  {
    name: '18',
    ext: 'png',
    companyName: '矢澤日香',
    width: 1300,
    height: 1980,
    color: '#7b595fa2',
    url: `${baseUrl}/meD3b3uE6WDSWr7eh`
  }
]

export default data