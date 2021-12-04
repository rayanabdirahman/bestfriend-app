import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUserAction } from '../../store/actions/account';
import {
  getSetCurrentUserLoadingState,
  getToken
} from '../../store/selectors/account';

type ReturnType = {
  isAuthCheckComplete: boolean;
  isUserSignedIn: boolean;
};

export default function useAuthGuard(): ReturnType {
  const dispatch = useDispatch();
  // const [isAuthCheckComplete, setIsAuthCheckComplete] = React.useState(false);
  const token = useSelector(getToken);
  const isAuthCheckComplete = useSelector(getSetCurrentUserLoadingState);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      console.log('[useAuthGuard] - Authentication started');
      try {
        dispatch(setCurrentUserAction());
      } catch (e) {
        console.error(`[useAuthGuard] - error when authenticating user: ${e}`);
      } finally {
        // setIsAuthCheckComplete(true);
        console.log('[useAuthGuard] - Authentication completed');
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isAuthCheckComplete, isUserSignedIn: token ? true : false };
}
