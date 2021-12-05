import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type Props = { name: React.ComponentProps<typeof Ionicons>['name'] };

const Icon: React.FC<Props> = (props) => (
  <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />
);

export default Icon;
