import React from 'react';
import { FlatList, View } from 'react-native';
import { Avatar, Text, useTheme } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import BestUsers from "./BestUsers";

const UserContainer = ( { navigation, item } ) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate( 'Profile', { type: 2, userId: 111 } )}
                          style={styles().userContainer}>
            <Text style={styles().place}>{item.place}</Text>
            <View style={styles().userInfo}>
                <Avatar source={{ uri: item.avatarPath }}/>
                <View style={styles().user}>
                    <Text style={styles().userName}>{item.name}</Text>
                    <Text style={styles().userTag}>{item.tag}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const DATA = [
    {
        id: 1,
        name: 'Mitch',
        tag: '@g.mitch',
        avatarPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg",
        place: 4
    },
    {
        id: 2,
        name: 'Mitch',
        tag: '@g.mitch',
        avatarPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg",
        place: 5
    },
    {
        id: 3,
        name: 'Mitch',
        tag: '@g.mitch',
        avatarPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg",
        place: 6
    },
    {
        id: 4,
        name: 'Mitch',
        tag: '@g.mitch',
        avatarPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg",
        place: 7
    },
    {
        id: 5,
        name: 'Mitch',
        tag: '@g.mitch',
        avatarPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg",
        place: 8
    },
    {
        id: 6,
        name: 'Mitch',
        tag: '@g.mitch',
        avatarPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg",
        place: 9
    },
    {
        id: 7,
        name: 'Mitch',
        tag: '@g.mitch',
        avatarPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg",
        place: 10
    },
    {
        id: 8,
        name: 'Mitch',
        tag: '@g.mitch',
        avatarPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg",
        place: 11
    },
]


const AnotherUsers = ( { navigation } ) => {

    const renderItem = ( { item } ) => {
        return <UserContainer navigation={navigation} item={item}/>
    }

    return (
        <View style={styles().container}>
            <FlatList
                data={DATA}
                ListHeaderComponent={<>
                    <BestUsers navigation={navigation}/>
                    <Text style={styles().label}>Все пользователи</Text>
                </>}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = () => {
    const themeStyle = useTheme()

    return {
        container: {
            marginTop: 20
        },
        label: {
            fontWeight: 'bold',
            color: themeStyle[ 'text-hint-color' ],
            textAlign: 'center',
            marginBottom: 20
        },
        userContainer: {
            height: 55,
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5
        },
        place: {
            width: '15%',
            textAlign: 'center'
        },
        userInfo: {
            flexDirection: 'row',
        },
        user: {
            marginLeft: 10
        },
        userName: {
            fontWeight: 'bold'
        },
        userTag: {
            color: themeStyle[ 'text-hint-color' ],
            fontWeight: 'bold'
        }
    }
}

export default AnotherUsers;
