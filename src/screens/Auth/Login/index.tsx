import * as React from 'react';
import {View, StatusBar, Alert, YellowBox} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import styled from 'styled-components/native';

// Components
import BackButton from '../../../components/BackButton';
import { LoginForm, SubmitButton } from '../../../components/auth/LoginFrom'

// Ignore YelloBox
YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding-top: 20;
  align-items: center;
  justify-content: space-between;
  padding-left: 20;
  padding-right: 20;
`;

const Title = styled.Text`
  font-size: 36;
  font-weight: bold;
  margin-bottom: 10;
`;

const SubTitle = styled.Text`
  font-size: 18;
  margin-bottom: 30;
`;

interface Props {
  navigation: NavigationStackProp;
}

const Login = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <BackButton navigation={navigation} />
      <Container behavior="padding">
        <View style={{width: '100%', alignItems: 'center'}}>
          <Title>Welcome Back</Title>
          <SubTitle>Please enter your email</SubTitle>
          <LoginForm />
        </View>
        <SubmitButton />
      </Container>
    </SafeAreaView>
  );
};

export default Login;
