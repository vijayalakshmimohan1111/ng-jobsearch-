export interface Job {
    id: number,
    companyName:string,
    title: string,
    companyLogo: string,
    reference: string,
    isfavorite: boolean
}

export interface Detailed {
    id: number,
    companyName: string,
    title: string,
    companyLogo: string,
    reference: string,
    location: string[],
    industries:string[],
    types: string[],
    description: string
    publishDate: Date,
}
