import React from 'react';
import { Pressable, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BaseLayout from '../../components/layouts/BaseLayout';
import { signOutUserAction } from '../../store/actions/account';

const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <BaseLayout>
      <Text>Settings Screen</Text>
      <Pressable onPress={() => dispatch(signOutUserAction())}>
        <Text style={{ color: 'red' }}>Sign out</Text>
      </Pressable>
    </BaseLayout>
  );
};

export default SettingsScreen;
