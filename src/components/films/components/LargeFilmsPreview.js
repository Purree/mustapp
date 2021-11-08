import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import {Text, useTheme} from "@ui-kitten/components";
import {TouchableOpacity} from "react-native-gesture-handler";
import FilmStatus from "./FilmStatus";

const DATA = [
    {
        id: '12',
        filmName: 'История о одной маленькой пицце, очень маленькой пицце, однажды она решила выйти из печи и оказалась в России, прожила она там не долго, в итоге её съели',
        filmPhoto: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Vladimir_Putin_11-10-2020_%28cropped%29.jpg',
        filmStatus: 3, // - посмотрен
        filmMark: 1 // - оценка фильма
    },
    {
        id: '123543',
        filmName: 'Я бы его депутатом каким-нибудь сделал',
        filmPhoto: 'https://upload.wikimedia.org/wikipedia/commons/6/61/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB_%D0%9C%D0%B8%D1%88%D1%83%D1%81%D1%82%D0%B8%D0%BD_%2806-09-2021%29_%28cropped%29.png',
        filmStatus: 2
    },
    {
        id: '12312',
        filmName: '',
        filmPhoto: 'https://starpri.ru/wp-content/uploads/2019/08/61608321_698009707318046_7691408875708017308_n.jpg'
    },
];

const filmContainer = (item, themeStyles) => {
    item = item.item
    return (
        <TouchableOpacity onPress={()=>alert("Потом")} style={styles.filmContainer}>
            {/*item.id*/}
            <Image style={styles.filmImage} source={{uri: item.filmPhoto}}/>
            <Text style={[styles.filmText, {color: themeStyles['text-hint-color']}]}>{item.filmName}</Text>
            <FilmStatus item={item} />
        </TouchableOpacity>
    )
}

const LargeFilmsPreview = ({title}) => {
    const themeStyles = useTheme()

    title = title ?? ''

    return (
        <View>
            <Text style={[styles.blockTitle, {color: themeStyles['text-hint-color']}]}>{title}</Text>
            <FlatList
                horizontal={true}
                data={DATA}
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => filmContainer(item, themeStyles)}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Text>Пока тут пусто</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    filmContainer: {
        height:400,
        width: 240,
        marginRight: 25
    },
    filmImage: {
        height:360,
        width: "100%",
        borderRadius: 10
    },
    filmText: {
        fontWeight: 'bold'
    },
    blockTitle: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 24
    },
})

export default LargeFilmsPreview;
