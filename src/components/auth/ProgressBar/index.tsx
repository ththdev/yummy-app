import React, { useState } from 'react'
import { View, Animated, StyleSheet, Alert, Dimensions } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'
import colors from '../../../config/colors'

const { width } = Dimensions.get('window')

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
        percent: new Animated.Value(1),
    })
    return (
        <View>
            <BackButton onPress={
                () => {
                    Animated.timing(state.percent, {
                        toValue: 2
                    }).start()
                }
            }>
                <Icon name="chevron-left" size={32} />
            </BackButton>
            <Animated.View 
                style={[
                    { 
                        width: state.percent.interpolate({
                            inputRange: [1, 2, 3, 4],
                            outputRange: [step(1), step(2), step(3), step(4)]
                        }) 
                    },
                    styles.progressBar,
                ]} 
            />
        </View>
    )
}

const step = (step: number) => {
    const depth = width / 4 * step
    return depth
}

const increase = () => {
    
}

const decrease = () => {
    Alert.alert('decrease')
}

const styles = StyleSheet.create({
    progressBar: {
        height: 1,
        backgroundColor: colors.tint
    }
})

export default ProgressBar