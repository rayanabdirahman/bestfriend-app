import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList, AuthStackScreenNames } from '../types';

const SignUpScreen = React.lazy(() => import('../../screens/SignUp'));
const SignInScreen = React.lazy(() => import('../../screens/SignIn'));

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={AuthStackScreenNames.SIGN_IN_SCREEN}>
      <Stack.Screen
        name={AuthStackScreenNames.SIGN_UP_SCREEN}
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AuthStackScreenNames.SIGN_IN_SCREEN}
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
