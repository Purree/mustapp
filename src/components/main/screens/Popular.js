import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {Text, Layout, Divider} from "@ui-kitten/components";
import Header from "../../films/components/Header";
import LargeFilmsPreview from "../../films/components/LargeFilmsPreview";
import MediumFilmsPreview from "../../films/components/MediumFilmsPreview";
import Collections from "../../films/components/Collections";

export const Popular = ({navigation}) => {
    return (

        <Layout>
            <Header title='Фильмы'/>
            <Divider/>
            <View style={styles.container}>
                <ScrollView>
                    <LargeFilmsPreview navigation={navigation} title='Популярно сейчас'/>
                    {/*Here must be Video block, but if you want to watch youtube videos you need to get apiKeyУ м
                    so apiKey can get only by certificated apps*/}
                    <MediumFilmsPreview title='Доступен стриминг' navigation={navigation}/>
                    <MediumFilmsPreview title='Сейчас в кинотеатрах' navigation={navigation}/>
                    <MediumFilmsPreview title='Скоро в кинотеатрах' navigation={navigation}/>
                    <Collections navigation={navigation}/>
                </ScrollView>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 120
    },
    collectionsContainer: {
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 120
    }
})
