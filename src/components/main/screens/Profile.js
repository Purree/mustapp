import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {Divider, Layout, useTheme, Avatar, Text} from '@ui-kitten/components';
import {Header} from "../profile/Header";
import defaultAvatar from '../../../pictures/users/avatars/unknownUser.png'
import {ProfileTabBar} from "../profile/ProfileTabBar";

export const Profile = ({navigation, route}) => {
    const themeStyles = useTheme();
    const type = route?.params?.type ?? 1; // 1 - current user, 2 - other user
    const userId = route?.params?.userId ?? 0;
    console.log(type, userId)
    console.log(navigation.canGoBack())

    const user = {
        id: 1,
        name: 'puresh',
        photoPath: 'https://i.ytimg.com/vi/v33s0kTTSnM/maxresdefault.jpg',
        place_in_top: 22705,
        will_look: 3,
        viewed: 12,
        serials: 0
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header type={type} navigation={navigation}/>
            <Layout style={styles.container}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: themeStyles['text-basic-color'],
                            fontSize: 26
                        }}>{user.name}</Text>
                        <Avatar size='giant' source={user.photoPath ? {uri: user.photoPath} : defaultAvatar}/>
                    </View>
                    <View style={{flexDirection: 'row',  justifyContent: 'space-between', paddingBottom: 10}}>
                        <Pressable onPress={()=>navigation.navigate('Top')}>
                            <Text style={styles.userStatsCount}>{user.place_in_top}</Text>
                            <Text style={styles.userStatsLabel}>Место</Text>
                        </Pressable>
                        <Pressable onPress={()=>navigation.navigate('Will Look')}>
                            <Text style={styles.userStatsCount}>{user.will_look}</Text>
                            <Text style={styles.userStatsLabel}>Посмотрю</Text>
                        </Pressable>
                        <Pressable onPress={()=>navigation.navigate('Viewed')}>
                            <Text style={styles.userStatsCount}>{user.viewed}</Text>
                            <Text style={styles.userStatsLabel}>Посмотрены</Text>
                        </Pressable>
                        <Pressable onPress={()=>navigation.navigate('UserSerials')}>
                            <Text style={styles.userStatsCount}>{user.serials}</Text>
                            <Text style={styles.userStatsLabel}>Сериалы</Text>
                        </Pressable>
                    </View>
                </View>
                <Divider style={{backgroundColor: 'darkgray'}}/>
                <View style={{flex: 5}}>
                    <ProfileTabBar/>
                </View>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25
    },
    userStatsCount: {
        color: 'darkgray',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    userStatsLabel: {
        color: 'darkgray',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    }
});