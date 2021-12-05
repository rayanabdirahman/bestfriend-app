import React from 'react';
import { TextInput } from 'react-native';
import { InputProps, Input as RNInput } from 'react-native-elements';

export type Props = InputProps & {
  innerRef?: React.RefObject<TextInput>;
};

const Input: React.FC<Props> = (props) => (
  <RNInput ref={props.innerRef} {...props} />
);

export default Input;
