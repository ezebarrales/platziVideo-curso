import React, { useEffect, useRef } from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'

import MovieLayout from '../components/MovieLayout'
import Player from '../../player/containers/Player'
import Header from '../../sections/components/Header'
import Close from '../../sections/components/Close'
import Details from '../../videos/components/Details'

const Movie = props => {
    
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
        <MovieLayout>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <Player />
            <Details {...props.selectedMovie} />
        </MovieLayout>
    )
}

Movie.navigationOptions = ({ navigation }) => ({
    header: () => (
        <Header>
            <Close
                onPress={() => navigation.goBack() }
            />
        </Header>
    )
})

const mapStateToProps = ({playerReducer}) => {
    return {
        selectedMovie: playerReducer.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie)
