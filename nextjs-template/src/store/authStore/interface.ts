export interface IAuthStore {
  loading: boolean;
  message: string;
}

export interface IAuth {
  username: string;
  password: string;
  name?: string;
}
