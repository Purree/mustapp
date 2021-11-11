import React, { useState } from 'react';
import Header from "../Header";
import { Layout, Text, Divider, Input, Icon} from "@ui-kitten/components";
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Review } from "./components/Review";


const DATA = [
    {
        id: 1,
        name: 'Artur Maloy',
        photoUrl: 'https://sun1-19.userapi.com/s/v1/ig2/YwaJQIjOU99SLyO8VeiK39K-i3bB_tgP5tMTvosXUzMZqdJ3z0whE42U6YfpOG9eXvj4PPCA6-_vPw_mIt3RIvKA.jpg?size=50x50&quality=95&crop=338,150,1122,1122&ava=1',
        score: 7,
        likes: 15,
        liked: false,
        date: '20 августа 1997',
        comment: 'Очень круто, мне понравилось, пишу как можно больше текста, чтобы посмотреть, как он будет переноситься, нужно сделать, чтобы влезало довольно много текста и всё переносилось на новую строчку, думаю, что столько будет достаточно, хотя нет, надо написать ещё немгого, буква, цифра 123 '
    }, {
        id: 2,
        name: 'Lena Golovach',
        score: 1,
        liked: true,
        date: '1 января 1970',
        likes: 1
    }
]

const FilmReviews = ( { route, navigation } ) => {
    const { title } = route.params

    const SearchIcon = ( props ) => (
        <Icon {...props} name='search-outline'/>
    );

    const renderItem = ( { item } ) => {
        return (
            <Review navigation={navigation} item={item}/>
        )
    }

    return (
        <>
            <Header title={title} navigation={navigation}/>
            <Divider/>
            <Layout style={styles.container}>
                <View style={styles.block}>
                    <Input
                        accessoryLeft={SearchIcon}
                        placeholder='Поиск'
                        onChangeText={query => console.log( query )}
                    />
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={<Text>Тут пока пусто</Text>}
                    />
                </View>
            </Layout>
        </>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1
    },
    block: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 50
    }
} )

export default FilmReviews;
