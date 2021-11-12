import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Icon, useTheme } from "@ui-kitten/components";

const LikeIcon = ( { cachedIsLiked, themeStyles } ) => (
    <Icon
        style={styles.icon}
        fill={themeStyles[ 'text-basic-color' ]}
        name={cachedIsLiked ? 'heart' : 'heart-outline'}
    />
);

const onLikePress = ( cachedLikes, setCachedLikes ) => {
    alert( 'На бэке' )
    setCachedLikes( !cachedLikes )
}

export const CollectionLikeButton = ( { item, background } ) => {
    const themeStyles = useTheme()
    const [cachedIsLiked, setCachedIsLiked] = useState( item.isLiked ?? false )

    return (
        <TouchableOpacity
            onPress={() => onLikePress( cachedIsLiked, setCachedIsLiked )}
            style={[styles.likes, cachedIsLiked ?
                { backgroundColor: themeStyles[ 'color-danger-default' ] }
                : background ?? { backgroundColor: themeStyles[ 'background-basic-color-4' ] }]}>
            <LikeIcon cachedIsLiked={cachedIsLiked} themeStyles={themeStyles}/>
            <Text>{item.collectionLikes}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create( {
    icon: {
        width: 15,
        height: 15,
    },
    likes: {
        padding: 7,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
} )
