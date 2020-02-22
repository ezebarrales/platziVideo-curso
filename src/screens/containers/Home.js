import React, { useEffect, useRef } from 'react'
import { StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import Api from '../../utils/api'
import Header from '../../sections/components/Header'
import SuggestionList from '../../videos/containers/SuggestionList'
import CategoryList from '../../videos/containers/CategoryList'
import Search from '../../sections/containers/Search'
import Icon from '../../sections/components/Icon'

const Home = props => {

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
        const getSuggestions = async () => {
            const suggestionList = await (await Api.getSuggestion(10)).movies

            props.dispatch({
                type: 'SET_SUGGESTION_LIST',
                payload: {
                    suggestionList
                }
            })
        }

        const getCategories = async () => {
            const categoryList = await (await Api.getMovies()).movies

            //setCategories(categories)
            props.dispatch({
                type: 'SET_CATEGORY_LIST',
                payload: {
                    categoryList
                }
            })
        }



        getSuggestions()
        getCategories()
    }, [])

    const goToSearch = () => {
        console.log(props)
        props.navigation.navigate('Search')
    }

    return (
        <ScrollView>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <TouchableOpacity onPress={goToSearch}>
                <Search editable={false} />
            </TouchableOpacity>
            <CategoryList />
            <SuggestionList />
        </ScrollView>
    )
}

Home.navigationOptions = () => {
    return {
        header: Header,
        title: 'Inicio',
        drawerIcon: <Icon icon="🏠" />,
        drawerIcon: <Icon icon="🏠" />,
    }
}

const mapStateToProps = ({playerReducer}) => {
    return {
        selectedMovie: playerReducer.selectedMovie
    }
}

export default connect(mapStateToProps)(Home)
