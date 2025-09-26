import type { Data } from "../../types"

const baseUrl = 'https://r22-museum.acgn-stock.com/company/detail'

const data: Data[] = [
  {
    name: '64',
    ext: 'mp4',
    companyName: '喜多郁代',
    width: 600,
    height: 600,
    color: '#aa6258',
    url: `${baseUrl}/L2nenXjFA2u6Age9y`,
    isVideo: true
  },
  {
    name: '65',
    ext: 'jpg',
    companyName: '春日野穹',
    width: 300,
    height: 300,
    color: '#e0d7d2',
    url: `${baseUrl}/ZDKmWx2rPM9m95wZZ`
  },
  {
    name: '66',
    ext: 'png',
    companyName: '黑貓(五更琉璃)',
    width: 900,
    height: 900,
    color: '#dcc4cd',
    url: `${baseUrl}/bG2Ejf96PneGJcMei`
  }
]

export default data
