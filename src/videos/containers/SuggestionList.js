import React, { Fragment } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import SuggestionListLayout from '../components/SuggestionListLayout'
import Empty from '../components/Empty'
import VerticalSeparator from '../components/VerticalSeparator'
import Suggestion from '../components/Suggestion'
import { NavigationActions, withNavigation } from 'react-navigation'

const SuggestionList = props => {

    const { list } = props

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
        <SuggestionListLayout title="Recomendado para tí">
            {/*<FlatList
                keyExtractor={keyExtractor}
                data={list}
                ListEmptyComponent={renderEmpty}
                ItemSeparatorComponent={itemSeparator}
                renderItem={renderSuggestion}
            />*/}
            {
                list.map(item => (
                    <Fragment key={item.id.toString()}>
                        <Suggestion {...item} onPress={() => viewMovie(item)} />
                        <VerticalSeparator />
                    </Fragment>
                ))
            }
            {
                (list.length === 0) &&
                <Empty text="No hay sugerencias" />
            }
        </SuggestionListLayout>
    )
}

const mapStateToProps = ({ videosReducer }) => {
    return {
        list: videosReducer.suggestionList
    }
}

export default connect(mapStateToProps)(withNavigation(SuggestionList))
