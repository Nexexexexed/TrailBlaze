export interface User {
  email: string;
  password: string;
}

export interface UserState {
  data: User | null;
  isAuth: boolean;
}
