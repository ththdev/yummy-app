import * as React from 'react'
import { View, StatusBar, Alert } from 'react-native'
import styled from 'styled-components/native'
import { NavigationStackProp } from 'react-navigation-stack'

// Components
import BackButton from '../../../../components/BackButton'
import { PasswordForm, SubmitButton } from '../../../../components/auth/RegisterForm'

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

const Main = styled.View`
  width: 100%;
  align-items: center;
`

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
    navigation: NavigationStackProp
}

const Password = ({ navigation }: Props) => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <BackButton navigation={navigation} />
            <Container behavior="padding">
                <Main>
                  <Title>Register</Title>
                  <SubTitle>Please enter your paaword</SubTitle>
                  <PasswordForm />
                </Main>
                <SubmitButton navigation={navigation} path='Main' />
            </Container>
        </SafeAreaView>
    )
}

export default Password