import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Divider, Text, useTheme } from "@ui-kitten/components";
import Header from "../Header";
import MainStyles from "../main/settings/components/MainStyles";
import { CollectionLikeButton } from "../buttons/film/CollectionLikeButton";
import DividerWithMargin from "../main/settings/components/DividerWithMargin";
import ViewedList from "../main/profile/ViewedList";

const FilmCollection = ( { navigation, route } ) => {

    const params = route.params
    const themeStyles = useTheme()

    const background = { backgroundColor: themeStyles[ 'background-basic-color-2' ] }

    const onAddButtonPress = () => {
        alert('Бэк')
    }

    return (
        <>
            <Header navigation={navigation} title={params.collectionTitle}/>
            <Divider/>
            <View style={MainStyles().container}>
                <ViewedList header={
                    <>
                        <View style={styles.collectionHeader}>
                            <Text style={styles.collectionEmoji}>{params.collectionEmoji}</Text>
                            <Text
                                style={[styles.collectionCount, { color: themeStyles[ 'text-hint-color' ] }]}>
                                {params.collectionWatched} из {params.collectionCount}
                            </Text>
                            <Text style={styles.collectionDescription}>{params.description}</Text>
                        </View>
                        <View style={styles.collectionButtons}>
                            <Button onPress={onAddButtonPress} style={[styles.addButton, background]}>Добавить</Button>
                            <View>
                                <CollectionLikeButton item={params} background={background}/>
                            </View>
                        </View>
                        <DividerWithMargin />
                    </>
                } films={params.films} empty={<></>} />
            </View>
        </>
    );
}

const styles = StyleSheet.create( {
    addButton: {
        borderRadius: 50
    },
    collectionHeader: {
        alignItems: 'center'
    },
    collectionEmoji: {
        fontSize: 30
    },
    collectionCount: {
        fontWeight: "bold",
        fontSize: 20
    },
    collectionDescription: {
        marginVertical: 15
    },
    collectionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
} )

export default FilmCollection;
