import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Animated, TouchableWithoutFeedback } from 'react-native'
import ControlLayout from '../components/ControlLayout'
import PlayPause from './PlayPause'

const InfoPlayer = props => {

    const { show } = props

    const [opacity] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            opacity,
            {
                toValue: show ? 1 : 0
            }
        ).start()
    }, [show])

    return (
        <TouchableWithoutFeedback
            style={[
                styles.container
            ]}
            touchSoundDisabled
            onPress={props.onPress}
        >
            <Animated.View style={[
                styles.overlay,
                {
                    opacity: opacity
                }
            ]}>
                <ControlLayout>
                    <PlayPause
                        onPress={props.onPlayPause}
                        paused={props.paused}
                    />
                    <Text>progress bar |</Text>
                    <Text>time left |</Text>
                    <Text>fullscreen</Text>
                </ControlLayout>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.75)',
    },
})

export default InfoPlayer
