import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BaseLayout from '../../components/layouts/BaseLayout';
import { signInUserAction } from '../../store/actions/account';
import { getSignInLoadingState } from '../../store/selectors/account';

const SignInScreen: React.FC = () => {
  const dispatch = useDispatch();
  const signInLoadingState = useSelector(getSignInLoadingState);

  const model = {
    email: 'jacob@gmail.com',
    password: '12345678'
  };
  return (
    <BaseLayout>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Pressable onPress={() => dispatch(signInUserAction(model))}>
        <Text style={{ color: 'red' }}>
          {signInLoadingState ? <ActivityIndicator /> : 'Sign in'}
        </Text>
      </Pressable>
    </BaseLayout>
  );
};

export default SignInScreen;
