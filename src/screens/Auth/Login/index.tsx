import React from 'react';
import {View, StatusBar, Alert, YellowBox} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import styled from 'styled-components/native';

// Components
import BackButton from '../../../components/BackButton';

// Ignore YelloBox
YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding-top: 60;
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

const Form = styled.View`
  width: 100%;
`;

const Label = styled.Text`
  font-size: 14;
  color: #c4c4c4;
`;

const Email = styled.TextInput`
  height: 48;
  width: 100%;
  font-size: 18;
  justify-content: center;
  border-bottom-width: 1;
  border-bottom-color: #f2f2f2;
  margin-bottom: 20;
`;

const Password = styled.TextInput`
  height: 48;
  width: 100%;
  font-size: 18;
  justify-content: center;
  border-bottom-width: 1;
  border-bottom-color: #f2f2f2;
`;

const Continue = styled.TouchableOpacity`
  height: 48;
  width: 100%;
  background-color: #095050;
  border-radius: 5;
  justify-content: center;
  align-items: center;
  margin-bottom: 60;
`;

const ContinueText = styled.Text`
  font-size: 18;
  color: white;
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
          <Form>
            <Label>Email Address</Label>
            <Email />
            <Label>Password</Label>
            <Password />
          </Form>
        </View>
        <Continue onPress={() => Alert.alert('Continue')}>
          <ContinueText>Continue</ContinueText>
        </Continue>
      </Container>
    </SafeAreaView>
  );
};

export default Login;
