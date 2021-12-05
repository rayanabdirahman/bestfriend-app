import React from 'react';
import { Formik } from 'formik';
import Input from '../../../elements/Input';
import Icon from '../../../elements/Icon';
import { TextInput, View } from 'react-native';
import { SignInModel } from '../../../../domain/interfaces/account';
import { SignInValidationSchema } from '../../../../validation/account';
import Button from '../../../elements/Button';

type Props = {
  initialValues: SignInModel;
  handleSubmit: (model: SignInModel) => void;
  isLoading: boolean;
};

const SignInForm: React.FC<Props> = (props) => {
  const emailInputRef = React.createRef<TextInput>();

  React.useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={SignInValidationSchema}
      onSubmit={props.handleSubmit}
    >
      {(formik) => (
        <View style={{ marginTop: 32 }}>
          <Input
            innerRef={emailInputRef}
            placeholder="Email"
            leftIcon={<Icon name="mail-outline" />}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            errorMessage={formik.errors.email}
          />
          <Input
            placeholder="Password"
            leftIcon={<Icon name="lock-closed-outline" />}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            errorMessage={formik.errors.password}
            secureTextEntry={true}
          />
          <Button
            title="Sign in"
            onPress={() => formik.handleSubmit()}
            loading={props.isLoading}
            disabled={
              props.isLoading || !formik.isValid || !formik.dirty ? true : false
            }
          />
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
