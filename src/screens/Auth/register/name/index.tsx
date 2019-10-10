import * as React from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { NavigationStackProp } from 'react-navigation-stack'

// Components
import BackButton from '../../../../components/BackButton'
import { NameForm, SubmitButton } from '../../../../components/auth/RegisterForm'

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

const Name = ({ navigation }: Props) => {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <BackButton navigation={navigation} toStart={true} />
        <Container behavior="padding">
            <Main>
              <Title>Register</Title>
              <SubTitle>What's your name?</SubTitle>
              <NameForm />
            </Main>
            <SubmitButton navigation={navigation} path='Email' />
        </Container>
      </SafeAreaView>
    )
}

export default Name