import { Image, StyleSheet, View } from "react-native";
import { Button, Icon, Input, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import DividerWithMargin from "../../../main/settings/components/DividerWithMargin";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

const marks = [
    {
        mark: 10,
        emoji: '😍'
    }, {
        mark: 9,
        emoji: '😀'
    }, {
        mark: 8,
        emoji: '😊'
    }, {
        mark: 7,
        emoji: '🙂'
    }, {
        mark: 6,
        emoji: '😐'
    }, {
        mark: 5,
        emoji: '😔'
    }, {
        mark: 4,
        emoji: '😞'
    }, {
        mark: 3,
        emoji: '😠'
    }, {
        mark: 2,
        emoji: '🤮'
    }, {
        mark: 1,
        emoji: '🤬'
    }
]


function Marks( { item, mark, setMark } ) {
    item = item.item
    return (
        <View>
            <Button appearance={item.mark === mark ? 'basic' : 'outline'}
                    status={item.mark === mark ? 'basic' : 'info'}
                    style={styles.marksButton} onPress={() => setMark( item.mark )}>{item.mark}</Button>
        </View>
    )
}

export function Review( { filmInfo, themeStyles, useInputState, bottomSheetModalRef, setWatched } ) {
    const multilineInputState = useInputState();
    const [mark, setMark] = useState( 'x' )

    const EmojiIcon = () => {
        return <Icon fill={themeStyles[ 'text-hint-color' ]} style={styles.smileIcon} name='smiling-face-outline'/>
    }

    const EmojiText = ( { mark } ) => {
        return <Text style={styles.smileEmoji}>{marks[ Math.abs( mark - 10 ) ].emoji}</Text>
    }

    const onReviewSubmit = () => {
        alert( 'На бэке' );
        setWatched( 3 )
        bottomSheetModalRef?.current.close()
    }

    return (
        <>
            <View style={styles.header}>
                <Image style={styles.filmImage} source={{ uri: filmInfo.photo }}/>
                <View>
                    <Text style={styles.title}>{filmInfo.title}</Text>
                    <Text style={{ color: themeStyles[ 'text-hint-color' ] }}>{filmInfo?.date}</Text>
                </View>
            </View>
            <DividerWithMargin/>
            <Input
                multiline={true}
                textStyle={styles.input}
                placeholder={'Напишите отзыв'}
                {...multilineInputState}
            />
            <View style={styles.marksContainer}>
                <View style={{ flexDirection: 'row' }}>
                    {Number.isInteger( mark ) ? <EmojiText mark={mark}/> : <EmojiIcon/>}
                    <Icon fill={themeStyles[ 'text-hint-color' ]} style={styles.smileIcon}
                          name={'arrow-ios-forward-outline'}/>
                </View>
                <BottomSheetFlatList
                    horizontal={true}
                    data={marks}
                    renderItem={( item ) => <Marks item={item} mark={mark} setMark={setMark}/>}
                    keyExtractor={item => item.mark}
                    ListHeaderComponent={<Button appearance={!Number.isInteger( mark ) ? 'basic' : 'outline'}
                                                 status={!Number.isInteger( mark ) ? 'basic' : 'info'}
                                                 style={styles.marksButton}
                                                 onPress={() => setMark( 'x' )}>{'x'}</Button>}
                    keyboardShouldPersistTaps={"always"}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <DividerWithMargin/>
            <Button onPress={() => {
                onReviewSubmit()
            }}>Сохранить</Button>
        </>);
}

const styles = StyleSheet.create( {
    header: {
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
        height: 60,
        alignItems: 'center'
    },
    filmImage: {
        width: 35,
        height: '100%',
        marginRight: 10
    },
    title: {
        fontWeight: 'bold'
    },
    input: {
        height: 70
    },
    smileIcon: {
        width: 30,
        height: 60,
        justifyContent: 'center'
    },
    smileEmoji: {
        fontSize: 30,
        marginTop: '5%',
        marginBottom: '-5%'
    },
    marksContainer: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    marksButton: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 50
    }
} );
