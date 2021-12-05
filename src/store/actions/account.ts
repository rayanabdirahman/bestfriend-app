import { SignInModel, SignUpModel } from '../../domain/interfaces/account';
import AccountService from '../../infrastructure/services/account';
import { AccountActionType } from '../types';
import { async } from './asyncAction';

export const signInUserAction = (model: SignInModel) => {
  return async(AccountActionType.SIGN_IN, AccountService.signIn, model);
};

export const signUpUserAction = (model: SignUpModel) => {
  return async(AccountActionType.SIGN_UP, AccountService.signUp, model);
};

export const signOutUserAction = () => {
  return async(AccountActionType.SIGN_OUT, AccountService.signOut);
};

export const setCurrentUserAction = () => {
  return async(
    AccountActionType.SET_CURRENT_USER,
    AccountService.setCurrentUser
  );
};
