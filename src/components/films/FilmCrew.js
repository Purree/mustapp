import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Icon, Text, useTheme, Button, ButtonGroup } from "@ui-kitten/components";
import MainStyles from "../main/settings/components/MainStyles";
import Header from "../Header";
import {
    BottomSheetModal,
    BottomSheetModalProvider, BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import DividerWithMargin from "../main/settings/components/DividerWithMargin";
import If from "../If";
import { FilmsContainer } from "../main/profile/ViewedList";

export const FilmCrew = ( { navigation, route } ) => {
    const params = route.params.item
    const themeStyles = useTheme()
    const [cachedFans, setCachedFans] = useState( params.fans )
    const [isFollow, setIsFollow] = useState( params.isFollow )

    const addPersonToFavourite = () => {
        setCachedFans( isFollow ? cachedFans - 1 : cachedFans + 1 )
        setIsFollow( !isFollow )
    }

    const bottomSheetModalRef = useRef( null );

    const snapPoints = useMemo( () => ['100%'], [] );

    const handlePresentModalPress = useCallback( () => {
        bottomSheetModalRef.current?.present();
    }, [] );

    const LeftFansIcon = ( props ) => (
        <Icon {...props} name={isFollow ? 'heart' : 'heart-outline'}/>
    )


    return (
        <BottomSheetModalProvider>
            <Header navigation={navigation} title={params.name}/>
            <View>
                <ImageBackground resizeMode="cover"
                                 style={[styles.mainPersonInfo, { height: Dimensions.get( 'window' ).height - 110 }]}
                                 source={{ uri: params.photoUrl }}>
                    <View style={[MainStyles().container, { justifyContent: 'flex-end' }]}>
                        <Text style={styles.personName}>{params.name}</Text>
                        <View style={styles.statsContainer}>
                            <View style={styles.statsBlock}>
                                <Text style={styles.stats}>{params.viewed} из {params.total}</Text>
                                <Text style={[styles.statsDescription, { color: themeStyles[ 'text-hint-color' ] }]}>
                                    Просмотрен
                                </Text>
                            </View>
                            <View style={styles.statsBlock}>
                                <Text style={styles.stats}>{params.fans}</Text>
                                <Text style={[styles.statsDescription, { color: themeStyles[ 'text-hint-color' ] }]}>
                                    Фанаты в приложении
                                </Text>
                            </View>
                            <View style={styles.statsBlock}>
                                <Text style={styles.stats}>{params.rating}</Text>
                                <Text style={[styles.statsDescription, { color: themeStyles[ 'text-hint-color' ] }]}>
                                    Средний рейтинг
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <TouchableOpacity
                    onPress={handlePresentModalPress}
                    style={[styles.showMoreContainer, { backgroundColor: themeStyles[ 'background-basic-color-2' ] }]}

                >
                    <Icon fill={themeStyles[ 'text-basic-color' ]} style={styles.showMoreIcon}
                          name={'arrow-ios-upward'}/>
                    <Text>Фильмография</Text>
                </TouchableOpacity>
            </View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ backgroundColor: themeStyles[ 'background-basic-color-2' ] }}
                enablePanDownToClose={true}
                handleIndicatorStyle={{ backgroundColor: themeStyles[ 'background-alternative-color-1' ] }}
            >
                <View
                    style={[styles.modalContainer, MainStyles().container]}>
                    <BottomSheetScrollView>

                        <View>
                            <Text style={styles.personModalName}>{params.name}</Text>
                            <Text
                                style={[styles.personProfession, { color: themeStyles[ 'text-hint-color' ] }]}>
                                {params.description}
                            </Text>
                            <ButtonGroup status={isFollow ? 'info' : 'basic'}>
                                <Button onPress={addPersonToFavourite} accessoryLeft={LeftFansIcon}/>
                                <Button onPress={() => navigation.navigate( 'Subscribes', {
                                    type: 5, title: 'Фанаты'
                                } )}>{cachedFans + ' Фанатов'}</Button>
                            </ButtonGroup>
                            <DividerWithMargin/>
                            <If condition={params.director}>
                                <Text style={[styles.personFilmsProfession, { color: themeStyles[ 'text-hint-color' ] }]}>
                                    Режисёр
                                </Text>
                                <View style={styles.filmsContainer}>
                                    {params.director.map( ( item ) => {
                                        return <FilmsContainer key={item.id} item={item}/>
                                    } )}
                                </View>
                            </If>
                            <If condition={params.actor}>
                                <Text
                                    style={[styles.personFilmsProfession, { color: themeStyles[ 'text-hint-color' ] }]}>
                                    Актёр
                                </Text>
                                <View style={styles.filmsContainer}>
                                    {params.actor.map( ( item ) => {
                                        return <FilmsContainer key={item.id} item={item}/>
                                    } )}
                                </View>
                            </If>
                        </View>
                    </BottomSheetScrollView>
                </View>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
}

const styles = StyleSheet.create( {
    mainPersonInfo: {
        width: '100%'
    },
    statsContainer: {
        flexDirection: 'row'
    },
    personName: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    personModalName: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    personProfession: {
        fontWeight: "bold",
        fontSize: 20
    },
    statsBlock: {
        flexShrink: 1,
        alignItems: 'center',
        width: '100%'
    },
    stats: {
        fontWeight: 'bold'
    },
    statsDescription: {
        fontSize: 12
    },
    showMoreIcon: {
        width: 20,
        height: 20
    },
    showMoreContainer: {
        height: '100%',
        paddingTop: 10,
        marginTop: 10,
        alignItems: 'center'
    },
    modalContainer: {},
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    filmsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    personFilmsProfession: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 12
    }
} )

// TODO: Move bottom sheet to component