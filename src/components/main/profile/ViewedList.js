import React from 'react';
import { Layout} from "@ui-kitten/components";
import { FlatList, Image, StyleSheet, View } from 'react-native';
import EmptyList from "./EmptyList";
import config from '../../../../config.json'
import If from "../../If";
import FilmStatus from "../../films/components/FilmStatus";

export const FilmsContainer = ( { item } ) => {
    const filmMark = item?.filmMark

    const validateLink = ( link ) => {
        return link ? link : config.unknownFilmUrl;
    }

    return (
        <Layout style={styles.block}>
            <If condition={filmMark}>
                <View style={styles.mark}>
                    <FilmStatus item={{ ...item, filmStatus: 3 }} />
                </View>
            </If>
            <Image
                style={styles.image}
                source={{
                    uri: validateLink( item?.photoUrl )
                }}
            />
        </Layout>
    )
}


const ViewedList = ( { films, header } ) => (
    <FlatList
        numColumns={2}
        columnWrapperStyle={styles.container}
        data={films}
        renderItem={FilmsContainer}
        keyExtractor={item => item.id}
        ListEmptyComponent={<EmptyList/>}
        ListHeaderComponent={header}
    />
)


const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
    block: {
        width: '48%',
        marginBottom: 20
    },
    image: {
        height: 300,
        borderWidth: 1
    },
    mark: {
        zIndex: 1,
        elevation: 1,
        position: "absolute",
        top: 2.5,
        right: 0,
    }
} )

export default ViewedList;
