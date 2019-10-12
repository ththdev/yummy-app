import React, { useState, Dispatch, SetStateAction } from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'
import colors from '../../../config/colors'

const BackButton = styled.TouchableOpacity`
    width: 100%;
    height: 44;
    justify-content: center;
    padding-left: 10;
    border-bottom-width: 1;
    border-bottom-color: #f2f2f2;
`

interface Props {
    navigation: NavigationStackProp
}

const ProgressBar = ({navigation}: Props) => {
    const [ state, setState ] = useState({
        percent: 25,
    })
    return (
        <View>
            <BackButton onPress={() => setState({ percent: 50})}>
                <Icon name="chevron-left" size={32} />
            </BackButton>
            <Animated.View width={state.percent}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '25%',
        height: 44,
        backgroundColor: colors.tint
    }
})

export default ProgressBar