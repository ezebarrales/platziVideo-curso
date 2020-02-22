import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const SearchInput = props => {

    return (
        <TextInput
            placeholder="Busca tu película favorita"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            onSubmitEditing={props.onSubmitEditing}
            onChangeText={props.onChangeText}
            style={styles.input}
            editable={props.editable}
            autoFocus={props.autoFocus}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#EAEAEA',
    },
})

export default SearchInput
