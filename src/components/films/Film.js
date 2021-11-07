import React from 'react';
import { View, ScrollView, Image, StyleSheet, LogBox } from 'react-native';
import { Text, useTheme, Button } from "@ui-kitten/components";
import Header from "../Header";
import InformationBlock from "../main/profile/components/InformationBlock";
import DividerWithMargin from "../main/settings/components/DividerWithMargin";
import Persons from "../main/profile/components/information/Persons";
import MediumFilmsPreview from "./components/MediumFilmsPreview";

const Film = ( { navigation, route } ) => {
    LogBox.ignoreLogs( [
        'Non-serializable values were found in the navigation state',
    ] );

    const themeStyles = useTheme()

    const DATA = route.params.filmData

    return (
        <>
            <Header navigation={navigation} title={DATA.title}/>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.imageBlock}>
                    <View style={styles.filmImageContainer}>
                        <Image style={styles.filmImage} source={{ uri: DATA.photoUrl }}/>
                    </View>
                </View>
                <Text style={styles.filmTitle}>{DATA.title}</Text>
                <Text style={[styles.filmText, { color: themeStyles[ 'text-hint-color' ] }]}>{DATA.releaseDate}</Text>
                <Button>СДЕЛАТЬ ПОЗЖЕ</Button>

                <View style={styles.informationBlock}>
                    <InformationBlock actions={DATA.statistics}/>
                </View>
                <DividerWithMargin/>

                <View>
                    <Text>ТУТ БУДУТ ОЦЕНКИ ДРУЗЕЙ И ТЕБЯ ЕСЛИ ТЫ СМОТРЕЛ</Text>
                </View>

                <View>
                    <Text style={styles.descriptionHeader}>Описание</Text>
                    <Text
                        style={[styles.descriptionText, { color: themeStyles[ 'text-hint-color' ] }]}>
                        {DATA.description ? DATA.description : 'Автор пока не угазал описание'}
                    </Text>
                </View>

                <View>
                    <Text>ТУТ БУДУТ ЖАНРЫ</Text>
                </View>

                <Persons title='Актёры и съёмочная группа' peoples={DATA.filmCrew} />

                <MediumFilmsPreview title='Похожие фильмы' navigation={navigation} />

            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create( {
    container: {
        margin: 25
    },
    imageBlock: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20
    },
    filmImageContainer: {
        height: 360,
        width: 240
    },
    filmImage: {
        height: 360,
        width: "100%",
        borderRadius: 10
    },
    filmText: {
        fontWeight: 'bold'
    },
    filmTitle: {
        fontWeight: 'bold',
        fontSize: 24
    },
    informationBlock: {
        marginVertical: 10
    },
    descriptionHeader: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    descriptionText: {
        fontWeight: 'bold'
    }
} )

export default Film;
