import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation, NavigationActions } from 'react-navigation'

import Empty from '../components/Empty'
import HorizontalSeparator from '../components/HorizontalSeparator'
import CategoryListLayout from '../components/CategoryListLayout'
import Category from '../components/Category'

const CategoryList = props => {

    const { list } = props

    const renderEmpty = () => <Empty text="No hay categorías :(" />

    const itemSeparator = () => <HorizontalSeparator />

    const viewCategory = item => {
        props.navigation.dispatch(NavigationActions.navigate({
            routeName: 'Category',
            params: {
                genre: item.genres[0]
            }
        }))
    }

    const renderCategory = ({ item }) => (
        <Category
            {...item}
            onPress={() => viewCategory(item)}
        />
    )

    const keyExtractor = item => {
        return item.id.toString()
    }

    return (
        <CategoryListLayout title="Categorías">
            <FlatList
                horizontal
                keyExtractor={keyExtractor}
                data={list}
                ListEmptyComponent={renderEmpty}
                ItemSeparatorComponent={itemSeparator}
                renderItem={renderCategory}
            />
        </CategoryListLayout>
    )

}

const mapStateToProps = ({ videosReducer }) => {

    return {
        list: videosReducer.categoryList
    }
}

export default connect(mapStateToProps)(withNavigation(CategoryList))