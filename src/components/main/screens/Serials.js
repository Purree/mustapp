import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Layout, Text} from "@ui-kitten/components";
import Header from "../../films/components/Header";
import LargeFilmsPreview from "../../films/components/LargeFilmsPreview";
import MediumFilmsPreview from "../../films/components/MediumFilmsPreview";
import Collections from "../../films/components/Collections";

const Serials = () => {
    return (

        <Layout>
            <Header title='Сериалы'/>
            <Divider/>
            <View style={styles.container}>
                <ScrollView>
                    <MediumFilmsPreview title='Сериалы'/>
                    <Collections />
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

export default Serials;
