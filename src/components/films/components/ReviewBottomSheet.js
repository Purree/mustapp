import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Icon, Input, Layout, Text, useTheme } from '@ui-kitten/components';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetFlatList
} from '@gorhom/bottom-sheet';
import DividerWithMargin from "../../main/settings/components/DividerWithMargin";

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

function Review( { filmInfo, themeStyles, useInputState, bottomSheetModalRef, setWatched } ) {
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
        setWatched(3)
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
                                                 style={styles.marksButton} onPress={() => setMark( 'x' )}>{'x'}</Button>}
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


const ReviewBottomSheet = ( { bottomSheetModalRef, filmInfo, setWatched } ) => {

    const useInputState = ( initialValue = '' ) => {
        const [value, setValue] = React.useState( initialValue );
        return { value, onChangeText: setValue };
    };

    const themeStyles = useTheme()
    const backgroundColor = themeStyles[ 'background-basic-color-2' ]

    const snapPoints = useMemo( () => ['45%', '45%'], [] );
    return (
        <BottomSheetModalProvider>
            <View>
                <BottomSheetModal
                    enablePanDownToClose={true}
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    detached={true}
                    backgroundStyle={{ backgroundColor: backgroundColor }}
                    handleIndicatorStyle={{ backgroundColor: themeStyles[ 'background-alternative-color-2' ] }}
                >
                    <Layout style={[styles.contentContainer, { backgroundColor: backgroundColor }]}>
                        <Review filmInfo={filmInfo} setWatched={setWatched} themeStyles={themeStyles} bottomSheetModalRef={bottomSheetModalRef}
                                useInputState={useInputState}/>
                    </Layout>
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    );
};

const styles = StyleSheet.create( {
    contentContainer: {
        marginHorizontal: 15
    },
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

export default ReviewBottomSheet;

// TODO: Разбить это по компонентам