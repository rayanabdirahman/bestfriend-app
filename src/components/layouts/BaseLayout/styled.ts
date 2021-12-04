import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Props } from '.';

export const view = styled(SafeAreaView)<Props>`
  display: flex;
  flex: 1;
  padding: 0 20px;
`;
