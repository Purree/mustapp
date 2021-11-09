import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from "@ui-kitten/components";
import If from "../../If";
import ReviewBottomSheet from "../../films/components/ReviewBottomSheet";

const WatchedButton = ( { type, setType, watched, setWatched, bottomSheetModalRef } ) => {

    const onWillWatch = () => {
        setWatched( 2 )
    }

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    return (
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
                <Button style={styles.button}>Посмотрю</Button>
            </If>
            <If condition={watched === 3}>
                <Button style={styles.button}>Посмотрен</Button>
            </If>
        </View>
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
