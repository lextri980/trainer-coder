export interface IAuthStore {
  loading: boolean;
  message: string;
  success: boolean;
}

export interface IAuth {
  username: string;
  password: string;
  name?: string;
}
