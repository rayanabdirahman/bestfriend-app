import React from 'react';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import * as styled from './styled';

export type Props = SafeAreaViewProps;

const BaseLayout: React.FC<Props> = ({ children, ...props }) => (
  <styled.view {...props}>{children}</styled.view>
);

export default BaseLayout;
