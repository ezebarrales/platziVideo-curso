import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const VerticalSeparator = props => <View style={[
    styles.separator,
    {
        borderTopColor: props.color || '#EAEAEA'
    }
]}></View>

const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1,
    }
})

export default VerticalSeparator