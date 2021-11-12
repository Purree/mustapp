import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Icon, Text, useTheme } from "@ui-kitten/components";
import { CollectionLikeButton } from "../../buttons/film/CollectionLikeButton";

const DATA = [
    {
        id: '12',
        collectionEmoji: '👤  💏  😗  🍌',
        collectionTitle: 'Новое на AmazonPrime. Апрель 2021',
        description: 'Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
        collectionCount: 34,
        collectionWatched: 0,
        collectionLikes: '148k',
        isLiked: true,
        films: [
            {id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},
        ]
    },
    {
        id: '123543',
        collectionEmoji: '👤  💚  💩',
        collectionTitle: 'Новое на Hue. Апрель 2021',
        description: 'На hue в апреле много интересного',
        collectionCount: 34,
        collectionWatched: 0,
        collectionLikes: '1k',
        isLiked: false
    },
    {
        id: '12312',
        collectionEmoji: '👨 📛',
        collectionTitle: 'Новое на Hulu. Апрель 2021',
        collectionCount: 34,
        collectionWatched: 0,
        collectionLikes: 322,
        isLiked: false
    },
    {
        id: '123122',
        collectionEmoji: '💚  💩',
        collectionTitle: 'Призёры "Выбор критиков" 2021',
        collectionCount: 34,
        collectionWatched: 0,
        collectionLikes: 228,
        isLiked: false
    },
];

const LikeIcon = ( { item, themeStyles } ) => (
    <Icon
        style={styles.icon}
        fill={themeStyles[ 'text-basic-color' ]}
        name={item.isLiked ? 'heart' : 'heart-outline'}
    />
);

const Collection = ( item, themeStyles, navigation ) => {
    return (
        <Pressable onPress={() => {
            navigation.navigate( 'FilmCollection', item )
        }} style={[styles.container, { backgroundColor: themeStyles[ 'background-basic-color-2' ] }]} key={item.id}>
            <View style={styles.likes}>
                <CollectionLikeButton item={item} />
            </View>
            <Text style={styles.emoji}>{item.collectionEmoji}</Text>
            <Text style={styles.title}>{item.collectionTitle}</Text>
            <Text
                style={[styles.watched, { color: themeStyles[ 'text-hint-color' ] }]}>
                {item.collectionWatched} из {item.collectionCount}
            </Text>
        </Pressable>
    )
}

const Collections = ( { navigation } ) => {
    const themeStyles = useTheme()

    return (
        <View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>Коллекции</Text>
                <Text
                    style={[styles.descriptionCount, { backgroundColor: themeStyles[ 'background-basic-color-3' ] }]}>278</Text>
            </View>
            {DATA.map( ( item ) => Collection( item, themeStyles, navigation ) )}
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        marginRight: 15,
        alignItems: 'center',
        marginBottom: 15,
        paddingVertical: 35
    },
    description: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: "center"
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    descriptionCount: {
        marginLeft: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20
    },
    likes: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    emoji: {
        fontSize: 30,
    },
    icon: {
        width: 15,
        height: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    watched: {
        fontWeight: 'bold'
    }
} )

export default Collections;
