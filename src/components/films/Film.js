import React, { useRef, useState } from 'react';
import { View, ScrollView, Image, StyleSheet, LogBox } from 'react-native';
import { Text, useTheme } from "@ui-kitten/components";
import Header from "../Header";
import InformationBlock from "../main/profile/components/InformationBlock";
import DividerWithMargin from "../main/settings/components/DividerWithMargin";
import Persons from "../main/profile/components/information/Persons";
import MediumFilmsPreview from "./components/MediumFilmsPreview";
import Ratings from "./components/Ratings";
import Genres from "./components/Genres";
import WatchedButton from "../buttons/film/WatchedButton";
import FilmsBottomSheet from "./components/FilmsBottomSheet";

const Film = ( { navigation, route } ) => {
    LogBox.ignoreLogs( [
        'Non-serializable values were found in the navigation state',
    ] );

    const themeStyles = useTheme()

    const bottomSheetModalRef = useRef( null );
    const [bottomSheetContent, setBottomSheetContent] = useState( <></> )

    const DATA = route.params.filmData

    const type = DATA.type
    const [cachedWatched, setCachedWatched] = useState( DATA.watched )

    const useInputState = ( initialValue = '' ) => {
        const [value, setValue] = React.useState( initialValue );
        return { value, onChangeText: setValue };
    };

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
                <WatchedButton setBottomSheetContent={setBottomSheetContent}
                               type={type} watched={cachedWatched} useInputState={useInputState} DATA={DATA}
                               setWatched={setCachedWatched} bottomSheetModalRef={bottomSheetModalRef}/>

                <View style={styles.informationBlock}>
                    <InformationBlock actions={DATA.statistics} setBottomSheetContent={setBottomSheetContent}
                                      bottomSheetModalRef={bottomSheetModalRef}/>
                </View>
                <DividerWithMargin/>

                <Ratings navigation={navigation} ratings={DATA.friendsRatings}
                         filmData={{ title: DATA.title, photoUrl: DATA.photoUrl, date: DATA.releaseDate }}/>

                <View>
                    <Text style={styles.descriptionHeader}>Описание</Text>
                    <Text
                        style={[styles.descriptionText, { color: themeStyles[ 'text-hint-color' ] }]}>
                        {DATA.description ? DATA.description : 'Автор пока не указал описание'}
                    </Text>
                </View>

                <Genres navigation={navigation} genres={DATA.genres} style={styles.descriptionHeader}/>

                <Persons navigation={navigation} title='Актёры и съёмочная группа' style={styles.descriptionHeader}
                         peoples={DATA.filmCrew}/>

                <MediumFilmsPreview title='Похожие фильмы' navigation={navigation}/>
            </ScrollView>
            <FilmsBottomSheet bottomSheetModalRef={bottomSheetModalRef}
                              bottomComponent={bottomSheetContent}/>
        </>
    );
}

const styles = StyleSheet.create( {
    container: {
        margin: 25,
        paddingBottom: 30
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
        fontWeight: 'bold',
        marginBottom: 15
    }
} )

export default Film;
// TODO: Refactor