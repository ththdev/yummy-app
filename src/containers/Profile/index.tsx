import * as React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  padding-top: 60;
  padding-left: 20;
  padding-right: 20;
`;

const Title = styled.Text`
  font-size: 36;
  font-weight: bold;
`;

interface Props {}

const Profile = ({}: Props) => {
  return (
    <SafeAreaView>
      <Container>
        <Title>Profile</Title>
      </Container>
    </SafeAreaView>
  );
};

export default Profile;
