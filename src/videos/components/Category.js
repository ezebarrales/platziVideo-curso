import React from 'react'
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'

const Category = props => (
    <TouchableOpacity onPress={props.onPress}>
        <ImageBackground source={{uri: props.background_image}} style={styles.container}>
            <Text style={styles.genre}>{ props.genres[0] }</Text>
        </ImageBackground>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    genre: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0,.75)',
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        textShadowRadius: 10,
    },
})

export default Category
