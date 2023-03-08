export type CompanyType = { name: string; price: number };

export const getCompanyData: () => CompanyType[] = () => [
  { name: "1688", price: 18.3 },
  { name: "Ali Express", price: 12 }, 
  { name: "Alibaba", price: 16 }
]