import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

const Container = styled.View`
  height: 44;
  width: 100%;
  padding-left: 10;
`;

interface Props {
  navigation: NavigationStackProp;
  toStart?: boolean
}

const BackButton = ({navigation, toStart}: Props) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => 
        toStart ? navigation.navigate('Start') :navigation.goBack()}
      >
        <Icon name="chevron-left" size={32} />
      </TouchableOpacity>
    </Container>
  );
};

export default BackButton;
