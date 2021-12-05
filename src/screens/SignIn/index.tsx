import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/elements/Button';
import Typography from '../../components/elements/Typography';
import BaseLayout from '../../components/layouts/BaseLayout';
import SignInForm from '../../components/screens/SignIn/SignInForm';
import { AuthScreenProps, AuthStackScreenNames } from '../../navigation/types';
import { signInUserAction } from '../../store/actions/account';
import { getSignInLoadingState } from '../../store/selectors/account';

type Props = AuthScreenProps<AuthStackScreenNames.SIGN_IN_SCREEN>;

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const signInLoadingState = useSelector(getSignInLoadingState);
  const initialValues = { email: '', password: '' };

  return (
    <BaseLayout>
      <Typography.Title h4>Welcome back!</Typography.Title>
      <Typography.Text type="secondary">
        Open up App.tsx to start working on your app!
      </Typography.Text>

      <SignInForm
        initialValues={initialValues}
        handleSubmit={(model) => dispatch(signInUserAction(model))}
        isLoading={signInLoadingState}
      />

      <Button
        title="Don’t have an account? Sign up"
        type="clear"
        onPress={() => navigation.navigate(AuthStackScreenNames.SIGN_UP_SCREEN)}
      />
    </BaseLayout>
  );
};

export default SignInScreen;
