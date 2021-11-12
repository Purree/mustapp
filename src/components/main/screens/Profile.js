import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { Divider, Layout, useTheme, Avatar, Text, Button } from '@ui-kitten/components';
import { Header } from "../profile/Header";
import defaultAvatar from '../../../pictures/users/avatars/unknownUser.png'
import { ProfileTabBar } from "../profile/ProfileTabBar";
import InformationBlock from "../profile/components/InformationBlock";
import If from "../../If";

export const Profile = ( { navigation, route } ) => {
    const themeStyles = useTheme();
    const type = route?.params?.type ?? 1; // 1 - current user, 2 - another user
    const userId = route?.params?.userId ?? 0;

    const user = {
        id: 1,
        name: 'puresh',
        photoPath: 'https://i.ytimg.com/vi/v33s0kTTSnM/maxresdefault.jpg'
    };

    const actions = [
        {
            count: 22705,
            title: 'Место',
            onPress: () => navigation.navigate( 'Top' )
        },
        {
            count: 3,
            title: 'Посмотрю',
            onPress: () => navigation.navigate( 'Will Look' )
        },
        {
            count: 12,
            title: 'Посмотрены',
            onPress: () => navigation.navigate( 'Viewed' )
        },
        {
            count: 0,
            title: 'Сериалы',
            onPress: () => navigation.navigate( 'UserSerials' )
        },
    ]

    const addToFriends = () => {
        alert('На бэке')
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header type={type} navigation={navigation}/>
            <Layout style={styles.container}>
                <If condition={type === 2}>
                    <Button onPress={addToFriends} style={{ marginVertical: 10 }}>Добавить в друзья</Button>
                </If>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: themeStyles[ 'text-basic-color' ],
                            fontSize: 26
                        }}>{user.name}</Text>
                        <Avatar size='giant' source={user.photoPath ? { uri: user.photoPath } : defaultAvatar}/>
                    </View>
                    <InformationBlock actions={actions}/>
                </View>
                <Divider style={{ backgroundColor: 'darkgray' }}/>
                <View style={{ flex: 5 }}>
                    <ProfileTabBar/>
                </View>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25
    }
} );