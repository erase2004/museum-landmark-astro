import type { Data } from "../../types"

const baseUrl = 'https://r1-museum.acgn-stock.com/company/detail'

const data: Data[] = [
  {
    name: '01',
    ext: 'jpeg',
    companyName: '波特‧古蘭克',
    width: 400,
    height: 509,
    color: '#999999',
    url: `${baseUrl}/FJ6Rpo9Adtw3wTuD7`
  },
  {
    name: '02',
    ext: 'gif',
    companyName: '千石撫子',
    width: 480,
    height: 224,
    color: '#e4d9d7',
    url: `${baseUrl}/udTtLazdpF5HAHA39`
  },
  {
    name: '03',
    ext: 'jpg',
    companyName: '園田海未',
    width: 853,
    height: 1200,
    color: '#945e4a',
    url: `${baseUrl}/Tt5yRc4nrbqkJhtmb`
  }
]

export default data
