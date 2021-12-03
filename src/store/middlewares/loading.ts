import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { setLoading } from '../actions/ui';
import { AsyncActionStatus } from '../types';

const onLoading =
  ({ dispatch }: { dispatch: ThunkDispatch<unknown, unknown, AnyAction> }) =>
  (next: any) =>
  (action: AnyAction) => {
    next(action);

    if (action.status === AsyncActionStatus.STARTED) {
      dispatch(setLoading(true, action.type));
    }

    if (
      action.status === AsyncActionStatus.SUCCEEDED ||
      action.status === AsyncActionStatus.FAILED
    ) {
      dispatch(setLoading(false, action.type));
    }
  };

export default onLoading;
