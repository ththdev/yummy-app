import * as React from 'react'
import { Alert } from 'react-native'
import styled from 'styled-components/native'
import { NavigationStackProp } from 'react-navigation-stack'

const Form = styled.View`
    width: 100%;
`

const Label = styled.Text`
  font-size: 14;
  color: #c4c4c4;
`;

const TextInput = styled.TextInput<{ marginBottom?: number}>`
  height: 48;
  width: 100%;
  font-size: 18;
  justify-content: center;
  border-bottom-width: 1;
  border-bottom-color: #f2f2f2;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

const Submit = styled.TouchableOpacity`
  height: 48;
  width: 100%;
  background-color: #095050;
  border-radius: 5;
  justify-content: center;
  align-items: center;
  margin-bottom: 60;
`;

const SubmitText = styled.Text`
  font-size: 18;
  color: white;
`;

const NameForm = () => {
    return (
        <Form>
            <Label>First Name</Label>
            <TextInput marginBottom={20}/>
            <Label>Last Name</Label>
            <TextInput />
        </Form>
    )
}

const EmailForm = () => {
    return (
        <Form>
            <Label>Email</Label>
            <TextInput marginBottom={20}/>
        </Form>
    )
}

interface SubmitButtonProps {
    navigation: NavigationStackProp,
    path: string,
    text?: 'Continue' | 'Register'
}

const SubmitButton = ({ navigation, path }: SubmitButtonProps) => {
    return (
        <Submit onPress={() => navigation.navigate(path)}>
            <SubmitText>Continue</SubmitText>
        </Submit>
    )
}

export { NameForm, EmailForm, SubmitButton }
