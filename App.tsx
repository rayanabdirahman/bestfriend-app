import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './src/store';
import theme from './src/domain/constants/theme';
import Navigation from './src/navigation';
import useCachedResources from './src/hooks/utilities/useCachedResources';
import { ActivityIndicator } from 'react-native';
import useAuthGuard from './src/hooks/utilities/useAuthGuard';

function App() {
  const { isAuthCheckComplete, isUserSignedIn } = useAuthGuard();
  if (!!isAuthCheckComplete) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <React.Suspense fallback={<ActivityIndicator />}>
      <Navigation isUserSignedIn={isUserSignedIn} />
      <StatusBar style="auto" />
    </React.Suspense>
  );
}

export default function (): JSX.Element {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
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
