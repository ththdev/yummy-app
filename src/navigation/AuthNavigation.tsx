import * as React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import Start from '../screens/auth/start'
import Login from '../screens/auth/login'
import Name from '../screens/auth/register/name'
import Email from '../screens/auth/register/email'

const RegisterStack = createStackNavigator(
    {
        Name,
        Email
    },
    { headerMode: 'none' }
)

const AuthNavigator = createStackNavigator(
    {
        Start,
        Login,
        Register: RegisterStack
    },
    { headerMode: 'none' }
)

export default AuthNavigator