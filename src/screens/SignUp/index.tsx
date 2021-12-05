import React from 'react';
import Button from '../../components/elements/Button';
import Typography from '../../components/elements/Typography';
import BaseLayout from '../../components/layouts/BaseLayout';
import SignUpForm from '../../components/screens/SignUp/SignUpForm';
import { AuthScreenProps, AuthStackScreenNames } from '../../navigation/types';

type Props = AuthScreenProps<AuthStackScreenNames.SIGN_UP_SCREEN>;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const initialValues = { name: '', email: '', password: '' };

  return (
    <BaseLayout>
      <Typography.Title h4>Let's get started!</Typography.Title>
      <Typography.Text type="secondary">
        Open up App.tsx to start working on your app!
      </Typography.Text>

      <SignUpForm
        initialValues={initialValues}
        handleSubmit={(model) => console.log(model)}
        isLoading={false}
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
