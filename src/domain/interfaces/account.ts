import { AccountRolesEnum } from '../enums/account';

export type SignInModel = {
  email: string;
  password: string;
};

export type SignUpModel = {
  name: string;
  email: string;
  password: string;
};

export type UserModel = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  createdAt: string;
  role: AccountRolesEnum[];
};

export type AccountAccessReturnType = {
  token: string;
  user: UserModel;
};
