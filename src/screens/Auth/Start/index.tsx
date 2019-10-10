import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../config/colors';
import GoogleButton from '../../../components/GoogleButton';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  padding-top: 60;
  padding-right: 20;
  padding-left: 20;
  justify-content: space-between;
  padding-bottom: 44;
`;

const Header = styled.View`
  height: 44;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  padding-right: 20;
`;

const Login = styled.Text`
  font-size: 18;
  color: white;
  font-weight: bold;
`;

const Logo = styled.Image`
  width: 100;
  height: 100;
`;

const Title = styled.Text`
  margin-top: 30;
  font-size: 42;
  font-weight: bold;
  color: white;
`;

const Signup = styled.View`
  height: 48;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SignupText = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: white;
`;

interface Props {
  navigation: NavigationStackProp;
}

const Start = ({navigation}: Props) => {
  return (
    <LinearGradient
      colors={[colors.gradientTop, colors.gradientBottom]}
      style={{flex: 1}}>
      <SafeAreaView>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Login>Login</Login>
          </TouchableOpacity>
        </Header>
        <Container>
          <View>
            <Logo
              source={require('../../../assets/logo-white.png')}
              resizeMode="contain"
            />
            <Title>Welcome to{'\n'}Yummy</Title>
          </View>
          <View>
            <GoogleButton />
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Signup>
                <SignupText>Sign Up</SignupText>
              </Signup>
            </TouchableOpacity>
          </View>
        </Container>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Start;
