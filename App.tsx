import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './src/store';
import theme from './src/domain/constants/theme';
import Navigation from './src/navigation';

function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
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
