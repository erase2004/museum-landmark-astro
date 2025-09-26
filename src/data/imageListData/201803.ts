import type { Data } from "../../types"

const baseUrl = 'https://r4-museum.acgn-stock.com/company/detail'

const data: Data[] = [
  {
    name: '10',
    ext: 'jpeg',
    companyName: 'ファルサリア',
    width: 640,
    height: 512,
    color: '#d5cbe2',
    url: `${baseUrl}/A2Tyog5G2kgKQLg7j`
  },
  {
    name: '11',
    ext: 'png',
    companyName: '園田海未',
    width: 2237,
    height: 3000,
    color: '#cacfdd',
    url: `${baseUrl}/FnCBpgLx3qB9LAn8w`
  },
  {
    name: '12',
    ext: 'jpeg',
    companyName: '近江 小々路',
    width: 1280,
    height: 720,
    color: '#d1b2a2',
    url: `${baseUrl}/LhEhqQjDg6J3a3Sy3`
  }
]

export default data