import React, { useState } from "react";
import { Avatar, Icon, Text, useTheme } from "@ui-kitten/components";
import { TouchableOpacity, View, StyleSheet } from "react-native";

export const Review = ( { item, navigation } ) => {
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
            <Text style={{ color: themeStyles['text-hint-color'] }}>{item.date}</Text>
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

const styles = StyleSheet.create({
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
    },
    fdRow: {
        flexDirection: 'row'
    },
})