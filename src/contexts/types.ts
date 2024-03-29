export interface IUser {
  token?: string
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>
  logout: () => void
  userDecrypt: any
}

export interface IAuthProvider {
  children: JSX.Element
}
