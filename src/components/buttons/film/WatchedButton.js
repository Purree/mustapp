import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from "@ui-kitten/components";
import If from "../../If";
import FilmsBottomSheet from "../../films/components/FilmsBottomSheet";
import ButtonsModal from "../../films/components/ButtonsModal";
import { Review } from "../../films/components/SheetComponents/Review";

const WatchedButton = ( {
                            type,
                            setType,
                            watched,
                            setWatched,
                            bottomSheetModalRef,
                            setBottomSheetContent,
                            useInputState,
                            DATA
                        } ) => {
    const [modalVisible, setModalVisible] = useState( false );
    const [modalButtons, setModalButtons] = useState( [] )

    const themeStyles = useTheme()

    const onWillWatch = () => {
        setWatched( 2 )
    }

    const onModalWatched = () => {
        setModalButtons( [
            {
                label: 'Переместить в Посмотрю',
                onPress: () => {
                    alert( 'На бэке' )
                    setModalVisible( false )
                    onWillWatch()
                }
            },
            {
                label: 'Удалить из Просмотрен',
                onPress: () => {
                    alert( 'На бэке' )
                    setModalVisible( false )
                    setWatched( 1 )
                }
            },
            {
                label: 'Редактировать отзыв',
                onPress: () => {
                    alert( 'На бэке' )
                    setModalVisible( false )
                    handlePresentModalPress()
                }
            }
        ] )
        setModalVisible( true )
    }

    const onModalWillWatch = () => {
        setModalButtons( [
            {
                label: 'Переместить в Посмотрен',
                onPress: () => {
                    alert( 'На бэке' )
                    setModalVisible( false )
                    handlePresentModalPress()
                }
            },
            {
                label: 'Удалить из Посмотрю',
                onPress: () => {
                    alert( 'На бэке' )
                    setModalVisible( false )
                    setWatched( 1 )
                }
            }
        ] )
        setModalVisible( true )
    }

    const handlePresentModalPress = useCallback( () => {
        setBottomSheetContent(<Review
            filmInfo={{ photo: DATA.photoUrl, title: DATA.title, date: DATA.releaseDate }}
            setWatched={setWatched}
            themeStyles={themeStyles}
            bottomSheetModalRef={bottomSheetModalRef}
            useInputState={useInputState}/>)

            bottomSheetModalRef.current?.present();
    }, [] );

    return (
        <>
            <ButtonsModal buttons={modalButtons} setVisible={setModalVisible} visible={modalVisible}/>
            <View style={styles.buttonsBlock}>
                <If condition={watched === 1}>
                    <View style={styles.manyButtons}>

                        <Button style={[styles.button, styles.buttons]} appearance='outline'
                                onPress={onWillWatch}>
                            Посмотрю
                        </Button>
                        <Button style={[styles.button, styles.buttons]} appearance='outline'
                                onPress={handlePresentModalPress}>
                            Посмотрен
                        </Button>
                    </View>
                </If>
                <If condition={watched === 2}>
                    <Button style={styles.button}
                            onPress={onModalWillWatch}>Посмотрю</Button>
                </If>
                <If condition={watched === 3}>
                    <Button style={styles.button}
                            onPress={onModalWatched}>Посмотрен</Button>
                </If>
            </View>
        </>
    );
}

const styles = StyleSheet.create( {
    buttonsBlock: {
        marginTop: 20
    },
    button: {
        borderRadius: 50
    },
    manyButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttons: {
        width: '48%'
    }
} )

export default WatchedButton;

// TODO: REFACTOR!!!