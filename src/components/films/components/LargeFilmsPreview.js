import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import {Text, useTheme} from "@ui-kitten/components";
import {TouchableOpacity} from "react-native-gesture-handler";
import FilmStatus from "./FilmStatus";


const filmContainer = (item, themeStyles, navigation) => {
    item = item.item
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("Film", {filmData: item})} style={styles.filmContainer}>
            <Image style={styles.filmImage} source={{uri: item.photoUrl}}/>
            <Text style={[styles.filmText, {color: themeStyles['text-hint-color']}]}>{item.filmName}</Text>
            <FilmStatus item={item} />
        </TouchableOpacity>
    )
}

const LargeFilmsPreview = ({title, navigation}) => {
    const DATA = [
        {
            id: '12',
            filmName: 'История о одной маленькой пицце, очень маленькой пицце, однажды она решила выйти из печи и оказалась в России, прожила она там не долго, в итоге её съели',
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Vladimir_Putin_11-10-2020_%28cropped%29.jpg',
            filmStatus: 3, // - посмотрен
            filmMark: 1, // - оценка фильма
            title: 'Базз Лайтер',
            releaseDate: '16 июня, 2022',
            description: '"Базз Лайтер" расскажет не о персонаже, известном поклонникам основной серии мультфильмов, а о вымышленном космонавте, на основе которого и начали выпускать те самые игрушки.',
            type: 1, // 1 - фильм, 2 - сериал
            watched: 1, // 1 - не посмотрен, 2 - посмотрю, 3 - посмотрен, 4 - смотрю (ТОЛЬКО ДЛЯ СЕРИАЛОВ)
            statistics: [
                {
                    count: '77%',
                    title: 'Match',
                    isMatch: true,
                    match: {
                        percent: 0.77,
                        userRating: 6.7
                    }
                },
                {
                    count: 3,
                    title: 'Посмотрят',
                    onPress: () => navigation.navigate( 'Subscribes', { title: 'Посмотрят', type: 4 } )
                },
                {
                    count: 12,
                    title: 'Посмотрели',
                    onPress: () => navigation.navigate( 'FilmReviews', { title: 'Посмотрели' } )
                },
                {
                    count: 0,
                    title: 'Отзывы',
                    onPress: () => navigation.navigate( 'FilmReviews', { title: 'Отзывы' } )
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
                    description: 'Режисёр&Актёр',
                    viewed: 1,
                    total: 10,
                    fans: 11,
                    rating: 7.7,
                    director: [
                        {
                            id: 1,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Kate_%28film%2C_2021%29.jpg/1200px-Kate_%28film%2C_2021%29.jpg'
                        },
                        {
                            id: 2,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/4/44/%D0%92%D0%BE%D1%81%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2021%29.jpeg'
                        },
                        {
                            id: 3,
                            mark: 3,
                        },
                        {
                            id: 4,
                            filmMark: 3,
                        },
                    ],
                    actor: [
                        {
                            id: 1,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Kate_%28film%2C_2021%29.jpg/1200px-Kate_%28film%2C_2021%29.jpg'
                        },
                        {
                            id: 2,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/4/44/%D0%92%D0%BE%D1%81%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2021%29.jpeg'
                        },
                        {
                            id: 3
                        },
                    ],
                    isFollow: true,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png'
                },
                {
                    id: 2,
                    name: 'Трубен Фельдшер',
                    description: 'Жиресёр',
                    viewed: 0,
                    total: 100,
                    fans: 110,
                    rating: 10,
                    isFollow: false,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png'
                },
            ],
            friendsRatings: [
                {
                    userId: 1,
                    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png',
                    userMark: 7,
                    name: 'Фиколай Нлитов',
                    date: '25 декабря, 2020',
                    comment: 'Классный фильм, всё понравилось, ставлю 1 звезду',
                    likes: 0,
                    comments: [
                        {
                            userId: 1,
                            userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/230px-Vladimir_Lenin.jpg',
                            filmMark: 7,
                            comments: [
                                {
                                    commentId: 1,
                                    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
                                },
                                {
                                    commentId: 2,
                                    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
                                },
                                {
                                    commentId: 3,
                                    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
                                },
                            ]
                        },
                        {
                            userId: 2,
                            userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/230px-Vladimir_Lenin.jpg',
                            comments: [
                                {
                                    commentId: 1,
                                    text: 'Текст 123 ☺'
                                }
                            ]
                        }
                    ]
                },
                {
                    userId: 2,
                    date: '25 декабря, 2020',
                    name: 'Тест',
                    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png',
                    likes: 0,
                    userMark: 10
                }
            ],
        },
        {
            id: '123543',
            filmName: 'Я бы его депутатом каким-нибудь сделал',
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB_%D0%9C%D0%B8%D1%88%D1%83%D1%81%D1%82%D0%B8%D0%BD_%2806-09-2021%29_%28cropped%29.png',
            filmStatus: 2,
            title: 'Базз Лайтер',
            releaseDate: '16 июня, 2022',
            description: '"Базз Лайтер" расскажет не о персонаже, известном поклонникам основной серии мультфильмов, а о вымышленном космонавте, на основе которого и начали выпускать те самые игрушки.',
            type: 1, // 1 - фильм, 2 - сериал
            watched: 1, // 1 - не посмотрен, 2 - посмотрю, 3 - посмотрен, 4 - смотрю (ТОЛЬКО ДЛЯ СЕРИАЛОВ)
            statistics: [
                {
                    count: '77%',
                    title: 'Match',
                    isMatch: true,
                    match: {
                        percent: 0.77,
                        userRating: 6.7
                    }
                },
                {
                    count: 3,
                    title: 'Посмотрят',
                    onPress: () => navigation.navigate( 'Subscribes', { title: 'Посмотрят', type: 4 } )
                },
                {
                    count: 12,
                    title: 'Посмотрели',
                    onPress: () => navigation.navigate( 'FilmReviews', { title: 'Посмотрели' } )
                },
                {
                    count: 0,
                    title: 'Отзывы',
                    onPress: () => navigation.navigate( 'FilmReviews', { title: 'Отзывы' } )
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
                    description: 'Режисёр&Актёр',
                    viewed: 1,
                    total: 10,
                    fans: 11,
                    rating: 7.7,
                    director: [
                        {
                            id: 1,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Kate_%28film%2C_2021%29.jpg/1200px-Kate_%28film%2C_2021%29.jpg'
                        },
                        {
                            id: 2,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/4/44/%D0%92%D0%BE%D1%81%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2021%29.jpeg'
                        },
                        {
                            id: 3,
                            mark: 3,
                        },
                        {
                            id: 4,
                            filmMark: 3,
                        },
                    ],
                    actor: [
                        {
                            id: 1,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Kate_%28film%2C_2021%29.jpg/1200px-Kate_%28film%2C_2021%29.jpg'
                        },
                        {
                            id: 2,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/4/44/%D0%92%D0%BE%D1%81%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2021%29.jpeg'
                        },
                        {
                            id: 3
                        },
                    ],
                    isFollow: true,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png'
                },
                {
                    id: 2,
                    name: 'Трубен Фельдшер',
                    description: 'Жиресёр',
                    viewed: 0,
                    total: 100,
                    fans: 110,
                    rating: 10,
                    isFollow: false,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png'
                },
            ],
            friendsRatings: [
                {
                    userId: 1,
                    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png',
                    userMark: 7,
                    name: 'Фиколай Нлитов',
                    date: '25 декабря, 2020',
                    comment: 'Классный фильм, всё понравилось, ставлю 1 звезду',
                    likes: 0,
                    comments: [
                        {
                            userId: 1,
                            userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/230px-Vladimir_Lenin.jpg',
                            filmMark: 7,
                            comments: [
                                {
                                    commentId: 1,
                                    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
                                },
                                {
                                    commentId: 2,
                                    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
                                },
                                {
                                    commentId: 3,
                                    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
                                },
                            ]
                        },
                        {
                            userId: 2,
                            userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/230px-Vladimir_Lenin.jpg',
                            comments: [
                                {
                                    commentId: 1,
                                    text: 'Текст 123 ☺'
                                }
                            ]
                        }
                    ]
                },
                {
                    userId: 2,
                    date: '25 декабря, 2020',
                    name: 'Тест',
                    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png',
                    likes: 0,
                    userMark: 10
                }
            ],
        },
        {
            id: '12312',
            filmName: '',
            photoUrl: 'https://starpri.ru/wp-content/uploads/2019/08/61608321_698009707318046_7691408875708017308_n.jpg',
            title: 'Базз Лайтер',
            releaseDate: '16 июня, 2022',
            description: '"Базз Лайтер" расскажет не о персонаже, известном поклонникам основной серии мультфильмов, а о вымышленном космонавте, на основе которого и начали выпускать те самые игрушки.',
            type: 1, // 1 - фильм, 2 - сериал
            watched: 1, // 1 - не посмотрен, 2 - посмотрю, 3 - посмотрен, 4 - смотрю (ТОЛЬКО ДЛЯ СЕРИАЛОВ)
            statistics: [
                {
                    count: '77%',
                    title: 'Match',
                    isMatch: true,
                    match: {
                        percent: 0.77,
                        userRating: 6.7
                    }
                },
                {
                    count: 3,
                    title: 'Посмотрят',
                    onPress: () => navigation.navigate( 'Subscribes', { title: 'Посмотрят', type: 4 } )
                },
                {
                    count: 12,
                    title: 'Посмотрели',
                    onPress: () => navigation.navigate( 'FilmReviews', { title: 'Посмотрели' } )
                },
                {
                    count: 0,
                    title: 'Отзывы',
                    onPress: () => navigation.navigate( 'FilmReviews', { title: 'Отзывы' } )
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
                    description: 'Режисёр&Актёр',
                    viewed: 1,
                    total: 10,
                    fans: 11,
                    rating: 7.7,
                    director: [
                        {
                            id: 1,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Kate_%28film%2C_2021%29.jpg/1200px-Kate_%28film%2C_2021%29.jpg'
                        },
                        {
                            id: 2,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/4/44/%D0%92%D0%BE%D1%81%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2021%29.jpeg'
                        },
                        {
                            id: 3,
                            mark: 3,
                        },
                        {
                            id: 4,
                            filmMark: 3,
                        },
                    ],
                    actor: [
                        {
                            id: 1,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Kate_%28film%2C_2021%29.jpg/1200px-Kate_%28film%2C_2021%29.jpg'
                        },
                        {
                            id: 2,
                            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/4/44/%D0%92%D0%BE%D1%81%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2021%29.jpeg'
                        },
                        {
                            id: 3
                        },
                    ],
                    isFollow: true,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png'
                },
                {
                    id: 2,
                    name: 'Трубен Фельдшер',
                    description: 'Жиресёр',
                    viewed: 0,
                    total: 100,
                    fans: 110,
                    rating: 10,
                    isFollow: false,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png'
                },
            ],
            friendsRatings: [
                {
                    userId: 1,
                    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png',
                    userMark: 7,
                    name: 'Фиколай Нлитов',
                    date: '25 декабря, 2020',
                    comment: 'Классный фильм, всё понравилось, ставлю 1 звезду',
                    likes: 0,
                    comments: [
                        {
                            userId: 1,
                            userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/230px-Vladimir_Lenin.jpg',
                            filmMark: 7,
                            comments: [
                                {
                                    commentId: 1,
                                    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
                                },
                                {
                                    commentId: 2,
                                    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
                                },
                                {
                                    commentId: 3,
                                    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
                                },
                            ]
                        },
                        {
                            userId: 2,
                            userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/230px-Vladimir_Lenin.jpg',
                            comments: [
                                {
                                    commentId: 1,
                                    text: 'Текст 123 ☺'
                                }
                            ]
                        }
                    ]
                },
                {
                    userId: 2,
                    date: '25 декабря, 2020',
                    name: 'Тест',
                    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png',
                    likes: 0,
                    userMark: 10
                }
            ],
        },
    ];
    const themeStyles = useTheme()

    title = title ?? ''

    return (
        <View>
            <Text style={[styles.blockTitle, {color: themeStyles['text-hint-color']}]}>{title}</Text>
            <FlatList
                horizontal={true}
                data={DATA}
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => filmContainer(item, themeStyles, navigation)}
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
