import React from 'react';
import { Button as RNButton, ButtonProps } from 'react-native-elements';

export type Props = ButtonProps;

const Button: React.FC<Props> = (props) => <RNButton {...props} />;

export default Button;
