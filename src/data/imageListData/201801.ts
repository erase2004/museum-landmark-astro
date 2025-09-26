import type { Data } from "../../types"

const baseUrl = 'https://r2-museum.acgn-stock.com/company/detail'

const data: Data[] = [
  {
    name: '04',
    ext: 'png',
    companyName: '立華奏',
    width: 600,
    height: 600,
    color: '#5a5f6d',
    url: `${baseUrl}/ffCTnTtvNsG7kNA9o`
  },
  {
    name: '05',
    ext: 'jpeg',
    companyName: '厭戰(碧藍航線)',
    width: 1076,
    height: 1076,
    color: '#decbbe',
    url: `${baseUrl}/kQzBbkkQ3npSH57Qk`
  },
  {
    name: '06',
    ext: 'png',
    companyName: '園田海未',
    width: 1315,
    height: 1244,
    color: '#b2b3bb',
    url: `${baseUrl}/zRT3sAN7Dbwqa54rX`
  }
]

export default data
