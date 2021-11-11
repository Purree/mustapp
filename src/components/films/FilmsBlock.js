import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from "../Header";
import { Text } from "@ui-kitten/components";
import MainStyles from "../main/settings/components/MainStyles";

const FilmsBlock = ({navigation, route}) => {
    const params = route.params

    return (
        <>
            <Header title={params.title} navigation={navigation} />
            <View style={MainStyles().container}>
                <Text>{params.emoji}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({})

export default FilmsBlock;
