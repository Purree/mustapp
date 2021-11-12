import React from 'react';
import ViewedList from "../ViewedList";


const WillLook = ({navigation}) => {
const films = [
    {
        id: 1,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Kate_%28film%2C_2021%29.jpg/1200px-Kate_%28film%2C_2021%29.jpg',
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
        id: 2,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/4/44/%D0%92%D0%BE%D1%81%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2021%29.jpeg',
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
        id: 3,
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
]
    return (
        <ViewedList navigation={navigation} films={films} />
    );
}

export default WillLook;
