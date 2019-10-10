import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

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

const LoginForm = () => {
    return (
        <Form>
            <Label>Email</Label>
            <TextInput marginBottom={20}/>
            <Label>Password</Label>
            <TextInput secureTextEntry={true} />
        </Form>
    )
}

const SubmitButton = () => {
    return (
        <Submit>
            <SubmitText>Login</SubmitText>
        </Submit>
    )
}

export { LoginForm, SubmitButton }
