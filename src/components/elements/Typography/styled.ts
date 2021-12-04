import styled from 'styled-components/native';
import { Text } from 'react-native-elements';
import { TitleProps, TextProps } from '.';

export const title = styled(Text)<TitleProps>`
  font-family: ${({ theme }) => theme.font.family.bold};
  color: ${({ theme }) => theme.color.black};
`;

export const text = styled(Text)<TextProps>`
  font-family: ${({ theme, strong }) =>
    strong ? theme.font.family.medium : theme.font.family.regular};
  color: ${({ theme, type }) =>
    type === 'secondary' ? theme.color.gray : theme.color.black};
`;
