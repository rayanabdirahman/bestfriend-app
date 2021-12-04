import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './src/store';
import theme from './src/domain/constants/theme';
import SignInScreen from './src/screens/SignIn';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignInScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function (): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
