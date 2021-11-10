import React, { useState } from 'react';
import Header from "../Header";
import { Layout, Text, Divider, Input, Icon, Avatar, useTheme } from "@ui-kitten/components";
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Review = ( { item, navigation } ) => {
    const [isLiked, setIsLiked] = useState( item.liked ?? false )
    const [cachedLikes, setCachedLikes] = useState(item.likes)
    const themeStyles = useTheme()

    const onLike = () => {
        alert('На бэке')
        !isLiked ? setCachedLikes(cachedLikes+1) : setCachedLikes(cachedLikes-1)
        setIsLiked(!isLiked)
    }

    return (
        <View>
            <View style={styles.reviewsContainer}>
                <TouchableOpacity style={styles.fdRow}
                                  onPress={() => navigation.navigate( 'Profile', { type: 2, userId: item.id } )}>
                    <Avatar
                        source={{ uri: item.photoUrl }}/>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <View style={styles.fdRow}><StarsFactory filledCount={item.score}/></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onLike} style={styles.likesContainer}>
                    <Text style={[styles.likesText, {color: themeStyles[ 'text-hint-color' ]}]}>{cachedLikes}</Text>
                    <Icon style={styles.icon} fill={themeStyles[ 'text-hint-color' ]}
                          name={isLiked ? 'heart' : 'heart-outline'}/>
                </TouchableOpacity>
            </View>
            <Text>{item.comment}</Text>
        </View>
    )
}


const StarsFactory = ( { filledCount } ) => {
    const themeStyles = useTheme()

    let starsArray = [];
    for (let i = 0; i < 10; i++) {
        starsArray.push( i < filledCount )
    }


    return (
        starsArray.map( ( isFilled, index ) => {
                return <Icon key={index} style={styles.icon} fill={themeStyles[ 'text-hint-color' ]}
                             name={isFilled ? 'star' : 'star-outline'}/>
            }
        )
    )
}

const DATA = [
    {
        id: 1,
        name: 'Artur Maloy',
        photoUrl: 'https://sun1-19.userapi.com/s/v1/ig2/YwaJQIjOU99SLyO8VeiK39K-i3bB_tgP5tMTvosXUzMZqdJ3z0whE42U6YfpOG9eXvj4PPCA6-_vPw_mIt3RIvKA.jpg?size=50x50&quality=95&crop=338,150,1122,1122&ava=1',
        score: 7,
        likes: 15,
        liked: false,
        comment: 'Очень круто, мне понравилось, пишу как можно больше текста, чтобы посмотреть, как он будет переноситься, нужно сделать, чтобы влезало довольно много текста и всё переносилось на новую строчку, думаю, что столько будет достаточно, хотя нет, надо написать ещё немгого, буква, цифра 123 '
    }, {
        id: 2,
        name: 'Lena Golovach',
        score: 1,
        liked: true,
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
    fdRow: {
        flexDirection: 'row'
    },
    block: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 50
    },
    reviewsContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    icon: {
        width: 20,
        height: 20
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    likesText: {
        marginRight: 2,
        fontWeight: 'bold'
    }
} )

export default FilmReviews;
