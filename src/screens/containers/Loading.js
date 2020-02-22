import React, { useEffect, useRef } from 'react'
import Loader from './../../sections/components/Loader'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'

const Loading = props => {

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

    useEffect(() => {

        if(props.userReducer.username) {
            props.navigation.navigate('App')
        }
        else {
            props.navigation.navigate('Login')
        }
    })

    return (
        <>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <Loader />
        </>
    )
}

const mapStateToProps = ({ userReducer }) => {
    return {
        userReducer,
    }
}

export default connect(mapStateToProps)(Loading)
