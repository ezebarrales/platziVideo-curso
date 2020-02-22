import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar,
} from 'react-native';
import Icon from '../../sections/components/Icon';

class Profile extends Component {

  handleLogout = () => {
    this.props.dispatch({
      type: 'REMOVE_USER',
    })
    this.props.navigation.navigate('Loading')
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content')
      StatusBar.setBackgroundColor('#FFF')
    })
  }

  componentWillUnmount() {
    this._navListener.remove()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <Text>{ this.props.userReducer.username }</Text>
        <Button
          title="Cerrar sesión"
          color="#67a52e"
          onPress={this.handleLogout}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

Profile.navigationOptions = () => {
  return {
    title: 'Perfil',
    tabBarIcon: <Icon icon="⭐" />,
    drawerIcon: <Icon icon="⭐" />,
  }
}

const mapStateToProps = ({ userReducer }) => {
  return {
    userReducer,
  }
}


export default connect(mapStateToProps)(Profile)