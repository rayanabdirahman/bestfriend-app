import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/elements/Button';
import Typography from '../../components/elements/Typography';
import BaseLayout from '../../components/layouts/BaseLayout';
import SignUpForm from '../../components/screens/SignUp/SignUpForm';
import { AuthScreenProps, AuthStackScreenNames } from '../../navigation/types';
import { signUpUserAction } from '../../store/actions/account';
import { getSignUpLoadingState } from '../../store/selectors/account';

type Props = AuthScreenProps<AuthStackScreenNames.SIGN_UP_SCREEN>;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const signUpLoadingState = useSelector(getSignUpLoadingState);
  const initialValues = { name: '', email: '', password: '' };

  return (
    <BaseLayout>
      <Typography.Title h4>Let's get started!</Typography.Title>
      <Typography.Text type="secondary">
        Open up App.tsx to start working on your app!
      </Typography.Text>

      <SignUpForm
        initialValues={initialValues}
        handleSubmit={(model) => dispatch(signUpUserAction(model))}
        isLoading={signUpLoadingState}
      />

      <Button
        title="Already have an account? Sign in"
        type="clear"
        onPress={() => navigation.navigate(AuthStackScreenNames.SIGN_IN_SCREEN)}
      />
    </BaseLayout>
  );
};

export default SignUpScreen;
