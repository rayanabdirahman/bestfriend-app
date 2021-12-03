import { UserModel } from '../domain/interfaces/account';
import { AlertModel } from '../domain/interfaces/alert';
import { AsyncActionStatus } from './types';

export interface StartedAsyncAction<T> {
  type: T;
  status: AsyncActionStatus.STARTED;
}

export interface SucceededAsyncAction<T, P = any> {
  type: string;
  status: AsyncActionStatus.SUCCEEDED;
  payload: P;
}

export interface FailedAsyncAction<T> {
  type: string;
  status: AsyncActionStatus.FAILED;
  payload: Error;
}

export type UIState = {
  isLoading: boolean;
  action: string | null;
};

export type SessionState = {
  user: UserModel | null;
  token: string | null;
};

export type AlertState = AlertModel[];
