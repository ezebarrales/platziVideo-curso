import React, { useRef, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native'
import Icon from '../../sections/components/Icon'

const About = props => {

  const _navListener = useRef()

  useEffect(() => {
    _navListener.current = props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content')
      StatusBar.setBackgroundColor('#022c43')
    })

    return () => {
      _navListener.current.remove()
    }
  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#022c43" />
      <Image
        source={{uri: 'https://static.platzi.com/media/achievements/badge-reactnative-9c23a814-e9c3-4041-afbd-ff8083fbf32f.png'}}
        style={styles.logo}
      />
      <Text style={styles.text}>Platzi Video es construido como una aplicación educativa para enseñar React Native y React Navigation</Text>
      <Text style={styles.text}>@LeonidasEsteban</Text>
      <Text style={styles.text}>2019</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#022c43',
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  }
})

About.navigationOptions = () => {
  return {
    title: 'Acerca',
    drawerIcon: <Icon icon="🤓" />,
    tabBarIcon: <Icon icon="🤓" />,
  }
}

export default About