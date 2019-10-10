import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'

interface Props {
    navigation: NavigationStackProp
}

const AppLoading = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.navigate('Start')
    })
    
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default AppLoading
