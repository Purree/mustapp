import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Avatar, Icon, Text, useTheme } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";

const Rating = ( { item, navigation, themeStyles, filmData } ) => {
    return (
        <TouchableOpacity containerStyle={styles.container}
                          onPress={() => navigation.navigate( 'FriendsReviews', { review: item, filmData } )}>
            <Avatar size='large' source={{ uri: item.userAvatar }}/>
            <View style={styles.markContainer}>
                <View style={[styles.mark, { backgroundColor: themeStyles[ 'background-basic-color-2' ] }]}>
                    <Icon style={styles.icon} fill={themeStyles[ 'text-basic-color' ]} name={'star'}/>
                    <Text>{item.userMark}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Ratings = ( { ratings, filmData, navigation } ) => {
    const themeStyles = useTheme()

    const renderComponent = ( { item } ) => {
        return <Rating item={item} filmData={filmData} navigation={navigation} themeStyles={themeStyles}/>
    }

    return (
        <FlatList
            horizontal={true}
            contentContainerStyle={{ marginBottom: 10 }}
            keyboardShouldPersistTaps={"always"}
            showsHorizontalScrollIndicator={false}
            data={ratings}
            renderItem={renderComponent}
            keyExtractor={item => item.userId}
        />
    );
}

const styles = StyleSheet.create( {
    container: {
        marginRight: 15
    },
    markContainer: {
        alignItems: 'center',
        marginTop: -10
    },
    mark: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 4,
        borderRadius: 10
    },
    icon: {
        width: 14,
        height: 14
    }
} )

export default Ratings;
