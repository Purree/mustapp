import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { Text } from "@ui-kitten/components";
import Match from "../../../films/components/SheetComponents/Match";

const InformationBlock = ( { actions, setBottomSheetContent, bottomSheetModalRef } ) => {
    const onMatch = (item) => {
        setBottomSheetContent(<Match matchData={item.match} bottomSheetModalRef={bottomSheetModalRef}/>)
        bottomSheetModalRef.current?.present()
    }


    const DataBlock = ( { item } ) => {
        return (
            <Pressable onPress={item.onPress || (item.isMatch ? ()=>onMatch(item) : ()=>{})}>
                <Text style={styles.userStatsCount}>{item.count}</Text>
                <Text style={styles.userStatsLabel}>{item.title}</Text>
            </Pressable>
        )
    }

    const renderComponent = ( { item } ) => {
        return <DataBlock item={item}/>
    }

    return (
        <FlatList
            horizontal={true}
            contentContainerStyle={ styles.container }
            keyboardShouldPersistTaps={"always"}
            showsHorizontalScrollIndicator={false}
            data={actions}
            renderItem={renderComponent}
            ListEmptyComponent={<Text>Пока тут пусто</Text>}
            keyExtractor={item => item.title}
        />
    );
}

const styles = StyleSheet.create( {
    container: {
        width: '100%',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    userStatsCount: {
        color: 'darkgray',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    userStatsLabel: {
        color: 'darkgray',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    }
} )

export default InformationBlock;
