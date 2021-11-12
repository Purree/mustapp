import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native';
import { Avatar, Divider, Icon, Input, Text, useTheme } from "@ui-kitten/components";
import Header from "../Header";
import MainStyles from "../main/settings/components/MainStyles";
import DividerWithMargin from "../main/settings/components/DividerWithMargin";
import { Review } from "./components/Review";


const onCommentSubmit = () => {
    alert( 'На бэке' )
}

const renderIcon = ( props ) => (
    <TouchableWithoutFeedback onPress={onCommentSubmit}>
        <Icon {...props} name={'paper-plane'}/>
    </TouchableWithoutFeedback>
);


const Comment = ( { item, themeStyles } ) => {
    return <Text style={[styles.commentText, {backgroundColor: themeStyles['background-basic-color-2']}]}>{item.text}</Text>
}


const FriendsReviews = ( { navigation, route } ) => {
    const themeStyles = useTheme()
    const [commentText, setCommentText] = React.useState( '' );

    const review = route.params;


    const CommentUserInfo = ( { item, navigation, themeStyles } ) => {
        return (
            <View style={styles.commentContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate( 'Profile', { type: 2, userId: item.userId } )}>
                    <Avatar size={'small'} source={{ uri: item.userAvatar }}/>
                </TouchableOpacity>

                <View style={ styles.commentTextContainer }>
                    <Text
                        style={[styles.commentMarkText, { color: themeStyles[ 'text-hint-color' ] }]}>
                        {item.filmMark ? 'Оценил этот фильма на ' + item.filmMark : 'Не оценивал этот фильм'}
                    </Text>
                    {item.comments.map( ( item, index ) => {
                        return <View key={index}><Comment item={item} themeStyles={themeStyles}/></View>
                    } )}
                </View>
            </View>
        )
    }

    const renderComments = ( { item } ) => {
        return <CommentUserInfo item={item} navigation={navigation} themeStyles={themeStyles}/>
    }

    return (
        <>
            <Header navigation={navigation} title='Отзывы друзей'/>
            <Divider/>
            <View style={MainStyles().container}>
                <View style={styles.filmDataContainer}>
                    <Image style={styles.filmImage} source={{ uri: review.filmData.photoUrl }}/>
                    <Text style={styles.filmTitle}>{review.filmData.title}</Text>
                    <Text
                        style={[styles.filmDate, { color: themeStyles[ 'text-hint-color' ] }]}>{review.filmData.date}</Text>
                </View>
                <DividerWithMargin/>
                <Review navigation={navigation}
                        item={{
                            comment: review.review.comment,
                            photoUrl: review.review.userAvatar,
                            name: review.review.name,
                            score: review.review.userMark,
                            likes: review.review.likes
                        }}/>
                <DividerWithMargin/>
                <FlatList
                    style={{ marginBottom: 50 }}
                    data={review.review.comments}
                    renderItem={renderComments}
                    keyExtractor={item => item.userId}
                />
                <View style={styles.commentInput}>
                    <Input value={commentText}
                           onChangeText={nextValue => setCommentText( nextValue )}
                           placeholder='Оставьте комментарий' accessoryRight={renderIcon}/>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create( {
    filmDataContainer: {
        alignItems: 'center',
        height: '40%'
    },
    filmImage: {
        width: '45%',
        height: '85%',
        borderRadius: 10
    },
    filmTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5
    },
    filmDate: {
        fontWeight: 'bold',
        fontSize: 13
    },
    commentInput: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: '110%'
    },
    commentContainer: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    commentMarkText: {
        fontWeight: "bold",
        fontSize: 12
    },
    commentTextContainer: {
        marginLeft: 5,
        flexShrink: 1
    },
    commentText: {
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 5,
        borderRadius: 25
    }
} )

export default FriendsReviews;
