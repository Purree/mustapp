import React from 'react';
import {View} from 'react-native';
import {Avatar, Text, useTheme} from "@ui-kitten/components";

const UserContainer = ({place, name, tag, avatarPath}) => {

    return (
        <View style={styles().userContainer}>
            <Text style={styles().place}>{place}</Text>
            <View style={styles().userInfo}>
                <Avatar source={{uri: avatarPath}}/>
                <View style={styles().user}>
                    <Text style={styles().userName}>{name}</Text>
                    <Text style={styles().userTag}>{tag}</Text>
                </View>
            </View>
        </View>
    )
}

const AnotherUsers = () => {
    return (
        <View style={styles().container}>
            <Text style={styles().label}>Все пользователи</Text>

            <UserContainer place={4} name={"Mitch"} tag={"@g.mitch"}
                           avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg'}/>
            <UserContainer place={5} name={"Mitch"} tag={"@g.mitch"}
                           avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg'}/>
            <UserContainer place={6} name={"Mitch"} tag={"@g.mitch"}
                           avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg'}/>
            <UserContainer place={7} name={"Mitch"} tag={"@g.mitch"}
                           avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg'}/>
            <UserContainer place={8} name={"Mitch"} tag={"@g.mitch"}
                           avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg'}/>
            <UserContainer place={9} name={"Mitch"} tag={"@g.mitch"}
                           avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg'}/>
            <UserContainer place={10} name={"Mitch"} tag={"@g.mitch"}
                           avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg'}/>
            <UserContainer place={11} name={"Mitch"} tag={"@g.mitch"}
                           avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg'}/>
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
            color: themeStyle['text-hint-color'],
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
            color: themeStyle['text-hint-color'],
            fontWeight: 'bold'
        }
    }
}

export default AnotherUsers;
