export type AuthRequestType = {
  email: string,
  password: string,
  fullName?: string
}

export type AuthResponseType = {
  access_token: string
  user: User
}

export type RegisterResponseType = {

}

export type User = {
  id: number;
  email: string;
  fullName: string;
}