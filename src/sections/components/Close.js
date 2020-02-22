import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const Close = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
        >
            <Text style={styles.button}>X</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#14B739',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        fontWeight: 'bold',
        color: '#FFF'
    }
})

export default Close
