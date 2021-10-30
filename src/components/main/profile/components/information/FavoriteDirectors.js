import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Avatar, Text, useTheme} from '@ui-kitten/components'

const FavoriteDirectors = () => {
    return (
        <View style={styles().container}>
            <Text style={styles().mainText}>Любимые режиссеры</Text>
            <ScrollView horizontal={true} keyboardShouldPersistTaps={"always"}>
                <TouchableOpacity style={styles().actorsBlock} onPress={() => alert('Потом')}>
                    <Avatar size='giant' source={{uri: 'https://sun1-87.userapi.com/s/v1/if1/G4xihi1FT7BnS-Y0mUNUoLLVXT-48Vvd0EqjZFm_hnj4_KazXUExv8vvpCxm-y-wWkMQJJNR.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1'}}/>
                    <Text>Менингит Аппендицит</Text>
                    <Text style={styles().actorRating}>1 / 100%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles().actorsBlock} onPress={() => alert('Потом')}>
                    <Avatar size='giant' source={{uri: 'https://sun1-87.userapi.com/s/v1/if1/G4xihi1FT7BnS-Y0mUNUoLLVXT-48Vvd0EqjZFm_hnj4_KazXUExv8vvpCxm-y-wWkMQJJNR.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1'}}/>
                    <Text>Уэрта-дель-Рей Михайлович</Text>
                    <Text style={styles().actorRating}>1 / 100%</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}


const styles = () => {
    const themeStyles = useTheme();

    return {
        container: {
            marginTop: 20,
        },
        mainText: {
            marginBottom: 10,
            fontWeight: "bold",
            fontSize: 14,
            color: themeStyles['text-hint-color']
        },
        actorsBlock: {
            width: 90,
        },
        actorRating: {
            color: themeStyles['text-hint-color'],
            fontSize: 12,
        }
    }
}

export default FavoriteDirectors;
