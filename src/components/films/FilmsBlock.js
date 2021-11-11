import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from "../Header";
import { Text } from "@ui-kitten/components";
import MainStyles from "../main/settings/components/MainStyles";
import ViewedList from "../main/profile/ViewedList";

const films = [
    {
        id: 1,
        filmMark: 10,
    },
    {
        id: 2,
        filmMark: 7
    }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 },
]

const FilmsBlock = ( { navigation, route } ) => {
    const params = route.params

    return (
        <>
            <Header title={params.title} navigation={navigation}/>
            <View style={MainStyles().container}>
                <ViewedList films={films} header={
                    <Text style={styles.emoji}>{params.emoji}</Text>
                }/>
            </View>
        </>
    );
}

const styles = StyleSheet.create( {
    emoji: {
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 20
    }
} )

export default FilmsBlock;

// TODO: take the array of films outside
