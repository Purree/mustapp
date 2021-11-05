import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Avatar, Text, useTheme } from "@ui-kitten/components";

const DATA = [
    {
        id: '1',
        userName: 'Nikolay Flitov',
        userAvatar: 'https://sun1-99.userapi.com/s/v1/ig2/6V0m6b9PqU3nP7cMHVJ_RVH1H0tpOOz16AM0D74_itFsDyXD43w9QVA91CLfUKTGs9R9dvC5DW7It8rOg5CrhBzE.jpg?size=50x50&quality=95&crop=6,0,2553,2553&ava=1',
        userAction: 'Подписался на вас'
    },
    {
        id: '2',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    }, {
        id: '3',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    }, {
        id: '4',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    }, {
        id: '5',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    }, {
        id: '6',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    }, {
        id: '7',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    }, {
        id: '8',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    }, {
        id: '9',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    }, {
        id: '10',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    }, {
        id: '11',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    }, {
        id: '12',
        userName: 'Fikolay Nlitov',
        userAvatar: 'https://memepedia.ru/wp-content/uploads/2020/06/shirokij-putin-idet-768x432.jpg',
        userAction: 'Теперь в Must'
    },
];

const Action = ( { item } ) => {
    return (
        <View style={styles.actionBlock}>
            <Avatar source={{ uri: item.userAvatar }}/>
            <View style={styles.actionTextBlock}>
                <Text style={styles.actionText}>{item.userName}</Text>
                <Text style={styles.actionText}>{item.userAction}</Text>
            </View>
        </View>
    )
}


const Actions = () => {
    const renderAction = ( item ) => {
        return <Action item={item.item}/>
    }

    return (
        <FlatList
            data={DATA}
            renderItem={renderAction}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create( {
    actionBlock: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center'
    },
    actionTextBlock: {
        marginLeft: 10
    },
    actionText: {
        fontWeight: 'bold'
    }
} )

export default Actions;
