import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/store';
import { signInUserAction } from './src/store/actions/account';
import { getSignInLoadingState } from './src/store/selectors/account';

function App() {
  const dispatch = useDispatch();
  const signInLoadingState = useSelector(getSignInLoadingState);

  const model = {
    email: 'jacob@gmail.com',
    password: '12345678'
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Pressable onPress={() => dispatch(signInUserAction(model))}>
        <Text style={{ color: 'red' }}>
          {signInLoadingState ? <ActivityIndicator /> : 'Sign in'}
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

export default function (): JSX.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
