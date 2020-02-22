import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Home from './screens/containers/Home'
import Movie from './screens/containers/Movie'
import Category from './screens/containers/Category'
import About from './screens/containers/About'
import Search from './screens/containers/Search'
import Profile from './screens/containers/Profile'
import Login from './screens/containers/Login'
import Loading from './screens/containers/Loading'
import Header from './sections/components/Header'
import Icon from './sections/components/Icon'
import Drawer from './sections/components/Drawer'



const AppStack = createStackNavigator(
    {
        Home,
        Category,
    },
    {
        defaultNavigationOptions: {
            header: () => <Header />,
            cardStyle: {
                backgroundColor: '#FFF'
            },
        }
    }
)

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: AppStack,
            navigationOptions: {
                title: 'Inicio',
                tabBarIcon: <Icon icon="🏠" />,
            }
        },
        About,
        Profile,
        Search,
    },
    {
        tabBarOptions: {
            activeTintColor: '#FFF',
            activeBackgroundColor: '#65A721',
        },
        backBehavior: 'history',
    }
)

const RootStack = createStackNavigator(
    {
        TabNavigator,
        Movie,
    },
    {
        mode: 'modal',
        headerMode: 'none',
        defaultNavigationOptions: {
            cardStyle: {
                backgroundColor: '#FFF',
            },
            gestureEnabled: true,
            gestureDirection: 'vertical'
        }
    }
)

const DrawerNavvigator = createDrawerNavigator(
    {
        Home: {
            screen: RootStack,
            navigationOptions: {
                title: 'Inicio',
                drawerIcon: <Icon icon="🏠" />,
            }
        },
        Sobre: {
            screen: About
        },
        Buscar: {
            screen: Search
        }
    },
    {
        drawerWidth: 200,
        drawerBackgroundColor: '#F6F6F6',
        contentOptions: {
            activeBackgroundColor: '#7ABA2F',
            activeTintColor: '#FFF',
            inactiveTintColor: '#828282',
            inactiveBackgroundColor: '#FFF',
            itemStyle: {
                borderBottomWidth: .5,
                borderBottomColor: 'rgba(0,0,0,.5)',
            },
            labelStyle: {
                marginHorizontal: 0,
            },
            iconContainerStyle: {
                marginHorizontal: 5,
            },
        },
        contentComponent: Drawer,
    }
)

const SwitchNavigator = createSwitchNavigator(
    {
        Loading: Loading,
        App: DrawerNavvigator,
        Login: Login,
    },
    {
        initialRouteName: 'Loading',
    }
)

export default createAppContainer(SwitchNavigator)