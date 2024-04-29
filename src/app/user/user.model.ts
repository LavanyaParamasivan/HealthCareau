export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IGuestCredentials {
  email: string;
  name:string;
  password: string;
}
