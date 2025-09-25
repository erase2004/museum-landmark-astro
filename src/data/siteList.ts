import type { SiteList } from "../types"

const museumBaseUrl = 'museum.acgn-stock.com'

const siteList: SiteList = {
  2025: [
    {
      title: '(Η) 2025/03/30 ~ 2025/06/29',
      url: `https://r31-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(Ζ) 2024/12/29 ~ 2025/03/30',
      url: `https://r30-${museumBaseUrl}`,
      disabled: false
    }
  ],
  2024: [
    {
      title: '(Ε) 2024/09/29 ~ 2024/12/29',
      url: `https://r29-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(Δ) 2024/06/30 ~ 2024/09/29',
      url: `https://r28-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(Γ) 2024/03/31 ~ 2024/06/30',
      url: `https://r27-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(Β) 2023/12/31 ~ 2024/03/31',
      url: `https://r26-${museumBaseUrl}`,
      disabled: false
    }
  ],
  2023: [
    {
      title: '(Α) 2023/10/01 ~ 2023/12/31',
      url: `https://r25-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(ω) 2023/07/02 ~ 2023/10/01',
      url: `https://r24-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(ψ) 2023/04/02 ~ 2023/07/02',
      url: `https://r23-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(χ) 2023/01/01 ~ 2023/04/02',
      url: `https://r22-${museumBaseUrl}`,
      disabled: false
    }
  ],
  2022: [
    {
      title: '(φ) 2022/10/02 ~ 2023/01/01',
      url: `https://r21-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(υ) 2022/07/03 ~ 2022/10/02',
      url: `https://r20-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(τ) 2022/04/03 ~ 2022/07/03',
      url: `https://r19-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(σ) 2022/01/02 ~ 2022/04/03',
      url: `https://r18-${museumBaseUrl}`,
      disabled: false
    }
  ],
  2021: [
    {
      title: '(ρ) 2021/10/03 ~ 2022/01/02',
      url: `https://r17-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(π) 2021/07/04 ~ 2021/10/03',
      url: `https://r16-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(ο) 2021/04/04 ~ 2021/07/04',
      url: `https://r15-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(ξ) 2021/01/03 ~ 2021/04/04',
      url: `https://r14-${museumBaseUrl}`,
      disabled: false
    }
  ],
  2020: [
    {
      title: '(ν) 2020/10/04 ~ 2021/01/03',
      url: `https://r13-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(μ) 2020/07/05 ~ 2020/10/04 (資料遺失)',
      url: null,
      disabled: true
    },
    {
      title: '(λ) 2020/04/05 ~ 2020/07/05',
      url: `https://r11-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(κ) 2020/01/05 ~ 2020/04/05',
      url: `https://r10-${museumBaseUrl}`,
      disabled: false
    }
  ],
  2019: [
    {
      title: '(ι) 2019/10/06 ~ 2020/01/05',
      url: `https://r9-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(θ) 2019/07/07 ~ 2019/10/06',
      url: `https://r8-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(η) 2019/04/07 ~ 2019/07/07',
      url: `https://r7-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(ζ) 2019/01/06 ~ 2019/04/07',
      url: `https://r6-${museumBaseUrl}`,
      disabled: false
    }
  ],
  2018: [
    {
      title: '(ε) 2018/10/07 ~ 2019/01/06',
      url: `https://r5-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(δ) 2018/07/08 ~ 2018/10/07',
      url: `https://r4-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(γ) 2018/04/08 ~ 2018/07/08',
      url: `https://r3-${museumBaseUrl}`,
      disabled: false
    },
    {
      title: '(β) 2018/01/07 ~ 2018/04/08',
      url: `https://r12-${museumBaseUrl}`,
      disabled: false
    }
  ],
  2017: [
    {
      title: '(α) 2017/09/15 ~ 2017/12/31',
      url: `https://r1-${museumBaseUrl}`,
      disabled: false
    }
  ]
}

export default siteList;