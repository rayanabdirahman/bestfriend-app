import { UIActionType } from '../types';

export const setLoading = (isLoading: boolean, action: string) => ({
  type: isLoading ? UIActionType.SET_LOADING_ON : UIActionType.SET_LOADING_OFF,
  payload: isLoading,
  status: action
});
