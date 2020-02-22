import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const CategoryListLayout = props => {

    return (
        <ImageBackground style={styles.container} source={require('../../assets/images/background.png')}>
            <Text style={styles.title}>{ props.title }</Text>
            { props.children }
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    title: {
        color: '#4C4C4C',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    }
})

export default CategoryListLayout