import React from 'react';
import { Formik } from 'formik';
import Input from '../../../elements/Input';
import Icon from '../../../elements/Icon';
import { TextInput, View } from 'react-native';
import { SignUpModel } from '../../../../domain/interfaces/account';
import { SignUpValidationSchema } from '../../../../validation/account';
import Button from '../../../elements/Button';

type Props = {
  initialValues: SignUpModel;
  handleSubmit: (model: SignUpModel) => void;
  isLoading: boolean;
};

const SignUpForm: React.FC<Props> = (props) => {
  const nameInputRef = React.createRef<TextInput>();

  React.useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={SignUpValidationSchema}
      onSubmit={props.handleSubmit}
    >
      {(formik) => (
        <View style={{ marginTop: 32 }}>
          <Input
            innerRef={nameInputRef}
            placeholder="Name"
            leftIcon={<Icon name="person-outline" />}
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            errorMessage={formik.errors.name}
          />
          <Input
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
            title="Create account"
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

export default SignUpForm;
