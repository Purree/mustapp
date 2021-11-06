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


const FilmContainer = (item, themeStyles) => {
    item = item.item

    return (
        <TouchableOpacity onPress={() => alert("Потом")} style={styles.filmContainer}>
            {/*item.id*/}
            <Image style={styles.filmImage} source={{uri: item.filmPhoto}}/>
            <FilmStatus item={item} />
        </TouchableOpacity>
    )
}

const MediumFilmsPreview = ({title}) => {
    const themeStyles = useTheme()

    title = title ?? ''

    return (
        <View>
            <Text style={[styles.blockTitle, title ? {marginBottom: 10, marginTop: 15} : {}]}>{title}</Text>
            <FlatList
                horizontal={true}
                data={DATA}
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => FilmContainer(item, themeStyles)}
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
