import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'

import Logo from '../../assets/images/logo.png'

const Header = (props) => {
    return (
        <View>
            <SafeAreaView style={styles.statusBar}>
                <View style={styles.container}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={styles.columnRight}>
                        { props.children }
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    statusBar: {
        backgroundColor: '#FFF'
    },
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain',
    },
    columnRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})

export default Header
