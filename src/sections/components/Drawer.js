import React from 'react'
import { ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer';

const Drawer = props => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                />
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 23,
        resizeMode: 'contain',
        margin: 10,
    }
})

export default Drawer
