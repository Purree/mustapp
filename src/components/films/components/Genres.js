import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Text, useTheme } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";


const Genre = ( { item, navigation, themeStyles } ) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate( 'FilmsBlock', { emoji: item.icon, title: item.genre } )
        }} style={[styles.genreBlock, { backgroundColor: themeStyles[ 'background-basic-color-2' ] }]}>
            <Text>{item.icon}{item.genre}</Text>
        </TouchableOpacity>
    )
}

const Genres = ( { genres, navigation, style } ) => {

    const themeStyles = useTheme()

    const renderComponent = ( { item } ) => {
        return <Genre item={item} navigation={navigation} themeStyles={themeStyles}/>
    }

    return (
        <>
            <Text style={style}>Жанры</Text>
            <FlatList
                horizontal={true}
                keyboardShouldPersistTaps={"always"}
                showsHorizontalScrollIndicator={false}
                data={genres}
                renderItem={renderComponent}
                ListEmptyComponent={<Text>Жанров не найдено.</Text>}
                keyExtractor={item => item.id}
            />
        </>
    );
}

const styles = StyleSheet.create( {
    genreBlock: {
        marginRight: 15,
        padding: 7.5,
        borderRadius: 50
    }
} )

export default Genres;
