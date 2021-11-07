import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import {Icon, Text, useTheme} from "@ui-kitten/components";
import {TouchableOpacity} from "react-native-gesture-handler";
import FilmStatus from "./FilmStatus";

const DATA = [
    {
        id: '12',
        filmPhoto: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Vladimir_Putin_11-10-2020_%28cropped%29.jpg',
        filmStatus: 2 // - посмотрю
    },
    {
        id: '123543',
        filmPhoto: 'https://upload.wikimedia.org/wikipedia/commons/6/61/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB_%D0%9C%D0%B8%D1%88%D1%83%D1%81%D1%82%D0%B8%D0%BD_%2806-09-2021%29_%28cropped%29.png',
        filmStatus: 3, // - посмотрен
        filmMark: 10 // - оценка фильма
    },
    {
        id: '12312',
        filmPhoto: 'https://starpri.ru/wp-content/uploads/2019/08/61608321_698009707318046_7691408875708017308_n.jpg',
        filmStatus: 3 // - посмотрен, но не оценил
    },
    {
        id: '123122',
        filmPhoto: 'https://starpri.ru/wp-content/uploads/2019/08/61608321_698009707318046_7691408875708017308_n.jpg',
        filmStatus: 1 // - не посмотрен, указывать необязательно
    },
    {
        id: '123123213',
        filmPhoto: 'https://starpri.ru/wp-content/uploads/2019/08/61608321_698009707318046_7691408875708017308_n.jpg',
    },
];

const filmData = {
    title: 'Базз Лайтер',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/6/68/%D0%91%D0%B0%D0%B7%D0%B7_%D0%9B%D0%B0%D0%B9%D1%82%D0%B5%D1%80_%28%D0%A1%D0%B2%D0%B5%D1%82%D0%B8%D0%BA%29.jpg',
    releaseDate: '16 июня, 2022',
    description: '"Базз Лайтер" расскажет не о персонаже, известном поклонникам основной серии мультфильмов, а о вымышленном космонавте, на основе которого и начали выпускать те самые игрушки.',
    type: 1, // 1 - фильм, 2 - сериал
    watched: 1, // 1 - не посмотрен, 2 - посмотрю, 3 - посмотрю, 4 - смотрю (ТОЛЬКО ДЛЯ СЕРИАЛОВ)
    statistics: [
        {
            count: 22705,
            title: 'Место',
            onPress: () => alert( 'Потом' )
        },
        {
            count: 3,
            title: 'Посмотрю',
            onPress: () => alert( 'Потом' )
        },
        {
            count: 12,
            title: 'Посмотрены',
            onPress: () => alert( 'Потом' )
        },
        {
            count: 0,
            title: 'Отзывы',
            onPress: () => alert( 'Потом' )
        },
    ],
    genres: [
        {
            id: 1,
            genre: 'Боевик',
            icon: '👊'
        },
        {
            id: 2,
            genre: 'Научная фантастика',
            icon: '🚀'
        }
    ],
    filmCrew: [
        {
            id: 1,
            name: 'Рубен Флейшер',
            description: 'Режисёр',
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png'
        },
        {
            id: 2,
            name: 'Трубен Фельдшер',
            description: 'Жиресёр',
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png'
        },
    ],
    // similarMovies: []
}


const FilmContainer = (item, themeStyles, navigation) => {
    item = item.item

    return (
        <TouchableOpacity onPress={() => navigation.push("Film", {filmData})} style={styles.filmContainer}>
            <Image style={styles.filmImage} source={{uri: item.filmPhoto}}/>
            <FilmStatus item={item} />
        </TouchableOpacity>
    )
}

const MediumFilmsPreview = ({title, navigation}) => {
    const themeStyles = useTheme()

    title = title ?? ''

    return (
        <View>
            <Text style={[styles.blockTitle, title ? {marginBottom: 10, marginTop: 15} : {}]}>{title}</Text>
            <FlatList
                horizontal={true}
                data={DATA}
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => FilmContainer(item, themeStyles, navigation)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    filmContainer: {
        height: 175,
        width: 100,
        marginRight: 25
    },
    filmImage: {
        height: "100%",
        width: "100%",
        borderRadius: 10
    },
    blockTitle: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default MediumFilmsPreview;
