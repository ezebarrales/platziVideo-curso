import React, { useRef, useEffect, createRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import SearchInput from '../../sections/containers/Search';
import Icon from '../../sections/components/Icon';

const Search = props => {

  const _navListener = useRef()

  useEffect(() => {
    _navListener.current = props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content')
      StatusBar.setBackgroundColor('#FFF')
    })

    return () => {
      _navListener.current.remove()
    }
  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Text>🍀</Text>
      <SearchInput autoFocus={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Search.navigationOptions = () => {
  return {
    title: 'Buscar',
    drawerIcon: <Icon icon="🔍" />,
    tabBarIcon: <Icon icon="🔍" />,
  }
}

export default Search