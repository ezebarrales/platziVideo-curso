import React, { useRef, useEffect } from 'react'
import { FlatList, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import SuggestionListLayout from '../../videos/components/SuggestionListLayout'
import Empty from '../../videos/components/Empty'
import VerticalSeparator from '../../videos/components/VerticalSeparator'
import Suggestion from '../../videos/components/Suggestion'
import { NavigationActions } from 'react-navigation'

const Category = props => {

    const { list } = props

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

    const viewMovie = (item) => {
        props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item,
            }
        })

        props.navigation.dispatch(NavigationActions.navigate({
            routeName: 'Movie'
        }))
    }

    const renderEmpty = () => <Empty text="No hay sugerencias :(" />

    const itemSeparator = () => <VerticalSeparator />

    const renderSuggestion = ({ item }) => (
        <Suggestion {...item} onPress={() => viewMovie(item)} />
    )

    const keyExtractor = item => {
        return item.id.toString()
    }

    return (
        <SuggestionListLayout title={props.navigation.getParam('genre', 'Categoría')}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <FlatList
                keyExtractor={keyExtractor}
                data={list}
                ListEmptyComponent={renderEmpty}
                ItemSeparatorComponent={itemSeparator}
                renderItem={renderSuggestion}
            />
        </SuggestionListLayout>
    )
}

const mapStateToProps = ({ videosReducer }) => {
    return {
        list: videosReducer.categoryList
    }
}

export default connect(mapStateToProps)(Category)
