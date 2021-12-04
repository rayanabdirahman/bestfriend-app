import React from 'react';
import { TextProps as RNETextProps } from 'react-native-elements';
import * as styled from './styled';

export type TitleProps = RNETextProps;

export type TextProps = {
  type?: 'primary' | 'secondary';
  strong?: boolean;
};

const Title: React.FC<TitleProps> = ({ children, ...props }) => (
  <styled.title {...props}>{children}</styled.title>
);

const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <styled.text {...props}>{children}</styled.text>
);

export default { Title, Text };
