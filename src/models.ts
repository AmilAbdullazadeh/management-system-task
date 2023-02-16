export interface IOrganizations {
    id: string
    orginzationName: string
    phoneNumber: string
    address: string
    userName: string
    email: string
    password: string
    isAdmin: boolean
    users: IUsers[] | []
    [x:string]: any;
}

export interface IUsers {
    id: string
    name: string
    surname: string
    email: string
    password: string
    tasks: ITasks[]
}

export interface ITasks{
    id: string
    title: string
    description: string
    deadline: string
    status: string[]
    // users: IUsers[]
}
