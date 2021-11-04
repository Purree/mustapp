import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Text, useTheme} from "@ui-kitten/components";

const DATA = [
    {
        id: '12',
        collectionEmoji: '👤  💏  😗  🍌',
        collectionTitle: 'Новое на AmazonPrime. Апрель 2021',
        collectionCount: 34,
        collectionWatched: 0,
        collectionLikes: '148k'
    },
    {
        id: '123543',
        collectionEmoji: '👤  💚  💩',
        collectionTitle: 'Новое на Hue. Апрель 2021',
        collectionCount: 34,
        collectionWatched: 0,
        collectionLikes: '1k'
    },
    {
        id: '12312',
        collectionEmoji: '👨 📛',
        collectionTitle: 'Новое на Hulu. Апрель 2021',
        collectionCount: 34,
        collectionWatched: 0,
        collectionLikes: 322
    },
    {
        id: '123122',
        collectionEmoji: '💚  💩',
        collectionTitle: 'Призёры "Выбор критиков" 2021',
        collectionCount: 34,
        collectionWatched: 0,
        collectionLikes: 228
    },
];

const LikeIcon = ({themeStyles}) => (
    <Icon
        style={styles.icon}
        fill={themeStyles['text-basic-color']}
        name='heart-outline'
    />
);

const Collection = (item, themeStyles) => {
    return (
        <View style={[styles.container, {backgroundColor: themeStyles['background-basic-color-2']}]} key={item.id}>
            <View style={[styles.likes, {backgroundColor: themeStyles['background-basic-color-4']}]}>
                <LikeIcon themeStyles={themeStyles}/>
                <Text>{item.collectionLikes}</Text>
            </View>
            <Text style={styles.emoji}>{item.collectionEmoji}</Text>
            <Text style={styles.title}>{item.collectionTitle}</Text>
            <Text style={[styles.watched, {color: themeStyles['text-hint-color']}]}>{item.collectionWatched} из {item.collectionCount}</Text>
        </View>
    )
}

const Collections = () => {
    const themeStyles = useTheme()

    return (
        <View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>Коллекции</Text>
                <Text style={[styles.descriptionCount, {backgroundColor: themeStyles['background-basic-color-3']}]}>278</Text>
            </View>
            {DATA.map((item) => Collection(item, themeStyles))}
        </View>
    );
}

const styles = StyleSheet.create({
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
        padding: 7,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
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
})

export default Collections;
