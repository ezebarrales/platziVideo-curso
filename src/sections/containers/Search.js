import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import SearchInput from '../components/SearchInput'
import api from '../../utils/api'

const Search = (props, ref) => {

    const [search, setSearch] = useState('')

    const handleSubmit = async () => {
        const movies = await api.searchMovie(search)
        const movie = await movies.movies[0]

        props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie
            }
        })
        props.navigation.navigate('Movie')
    }

    const handleChangeText = value => {
        setSearch(value)
    }

    return (
        <SearchInput
            onChangeText={handleChangeText}
            onSubmitEditing={handleSubmit}
            editable={'editable' in props ? props.editable : true}
            autoFocus={'autoFocus' in props ? props.autoFocus : false}
        />
    )
}

export default connect(null)(withNavigation(Search))
