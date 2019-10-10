import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
import colors from '../../config/colors';

interface Props {
  name: string;
  focused: boolean;
}
const TabBarIcon = ({name, focused}: Props) => {
  return (
    <Icon
      name={name}
      size={26}
      style={{marginBottom: -3}}
      color={focused ? colors.tabIconSelected : colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;
