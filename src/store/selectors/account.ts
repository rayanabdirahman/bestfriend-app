import { State } from '..';
import { AccountActionType } from '../types';
import { getLoadingState } from './ui';

const defaultUser = {};

export const getUser = (state: State) => state.session.user || defaultUser;

export const getToken = (state: State) => state.session.token;

export const getSignInLoadingState = getLoadingState(AccountActionType.SIGN_IN);

export const getSetCurrentUserLoadingState = getLoadingState(
  AccountActionType.SET_CURRENT_USER
);
