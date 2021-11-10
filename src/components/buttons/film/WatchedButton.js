import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from "@ui-kitten/components";
import If from "../../If";
import ReviewBottomSheet from "../../films/components/ReviewBottomSheet";
import ButtonsModal from "../../films/components/ButtonsModal";

const WatchedButton = ( { type, setType, watched, setWatched, bottomSheetModalRef } ) => {
    const [modalVisible, setModalVisible] = useState( false );
    const [modalButtons, setModalButtons] = useState( [] )

    const onWillWatch = () => {
        setWatched( 2 )
    }

    const onModalWatched = () => {
        setModalButtons( [
            {
                label: 'Переместить в Посмотрю',
                onPress: ()=>{
                    alert('На бэке')
                    setModalVisible(false)
                    onWillWatch()
                }
            },
            {
                label: 'Удалить из Просмотрен',
                onPress: ()=>{
                    alert('На бэке')
                    setModalVisible(false)
                    setWatched(1)
                }
            },
            {
                label: 'Редактировать отзыв',
                onPress: ()=>{
                    alert('На бэке')
                    setModalVisible(false)
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
                onPress: ()=>{
                    alert('На бэке')
                    setModalVisible(false)
                    handlePresentModalPress()
                }
            },
            {
                label: 'Удалить из Посмотрю',
                onPress: ()=>{
                    alert('На бэке')
                    setModalVisible(false)
                    setWatched(1)
                }
            }
        ] )
        setModalVisible( true )
    }

    const handlePresentModalPress = useCallback( () => {
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
