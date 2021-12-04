import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  SignUpScreen: undefined;
  SignInScreen: undefined;
};

export enum AuthStackScreenNames {
  SIGN_UP_SCREEN = 'SignUpScreen',
  SIGN_IN_SCREEN = 'SignInScreen'
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootTabParamList = {
  HomeScreen: undefined;
  FeedScreen: undefined;
  SettingsScreen: undefined;
};

export enum RootTabScreenNames {
  HOME_SCREEN = 'HomeScreen',
  FEED_SCREEN = 'FeedScreen',
  SETTINGS_SCREEN = 'SettingsScreen'
}
