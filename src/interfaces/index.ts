export interface IListItem {
    id?: string
    Title: String
    Prompt: String
    Image: any
    Name: string
    Email: String
}

export interface CardItemT extends IListItem {    
    userPrincipalName: string,
    onDelete: () => void
}

export interface IAuth {
    displayName: string 
    userPrincipalName: string
}

export interface IDeleteListItem  {
    Id: string
    onDelete: () => void
}
