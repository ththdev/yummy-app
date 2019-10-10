import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 48;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5;
  margin-bottom: 20;
`;

const Text = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: black;
  margin-left: 10;
`;

const GoogleButton = () => {
  return (
    <Container>
      <Icon name="logo-google" size={24} />
      <Text>Sign in with Google</Text>
    </Container>
  );
};

export default GoogleButton;
