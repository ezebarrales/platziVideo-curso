import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

const Suggestion = props => (
    <TouchableOpacity
        onPress={props.onPress}
    >
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.cover} source={{uri: props.medium_cover_image}} />
                <View style={styles.genreContainer}>
                    <Text style={styles.genre}>{ props.genres[0] }</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{ props.title }</Text>
                <Text style={styles.year}>{ props.year }</Text>
                <Text style={styles.rating}>{ props.rating } / 10</Text>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    left: {
    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        color: '#44546B'
    },
    year: {
        backgroundColor: '#70B124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: '#FFF',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    },
    rating: {
        color: '#6B6B6B',
        fontSize: 14,
        fontWeight: 'bold',
    },
    genreContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#000',
    },
    genre: {
        color: '#FFF',
        fontSize: 11,
        paddingVertical: 5,
        paddingHorizontal: 7,
    }
})

export default Suggestion
