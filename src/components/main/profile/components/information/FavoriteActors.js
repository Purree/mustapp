import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Avatar, Text, useTheme} from '@ui-kitten/components'

const FavoriteActors = () => {
    return (
        <View style={styles().container}>
            <Text style={styles().mainText}>Любимые актёры</Text>
            <ScrollView horizontal={true} keyboardShouldPersistTaps={"always"} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles().actorsBlock} onPress={() => alert('Потом')}>
                    <Avatar size='giant' source={{uri: 'https://sun1-56.userapi.com/s/v1/ig2/NmJozsGBrgIvXu8Splqf__gVkI6JCBQV23TQBeHiV_wJIXENk6XBEuXlGqlQPQG1YyzoH3U_P_3HDUiRhEzgrbov.jpg?size=50x50&quality=95&crop=1283,196,855,855&ava=1'}}/>
                    <Text>Николай Флитов</Text>
                    <Text style={styles().actorRating}>1 / 100%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles().actorsBlock} onPress={() => alert('Потом')}>
                    <Avatar size='giant' source={{uri: 'https://sun1-56.userapi.com/s/v1/ig2/NmJozsGBrgIvXu8Splqf__gVkI6JCBQV23TQBeHiV_wJIXENk6XBEuXlGqlQPQG1YyzoH3U_P_3HDUiRhEzgrbov.jpg?size=50x50&quality=95&crop=1283,196,855,855&ava=1'}}/>
                    <Text>Николай Флитов</Text>
                    <Text style={styles().actorRating}>1 / 100%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles().actorsBlock} onPress={() => alert('Потом')}>
                    <Avatar size='giant' source={{uri: 'https://sun1-56.userapi.com/s/v1/ig2/NmJozsGBrgIvXu8Splqf__gVkI6JCBQV23TQBeHiV_wJIXENk6XBEuXlGqlQPQG1YyzoH3U_P_3HDUiRhEzgrbov.jpg?size=50x50&quality=95&crop=1283,196,855,855&ava=1'}}/>
                    <Text>Николай Флитов</Text>
                    <Text style={styles().actorRating}>1 / 100%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles().actorsBlock} onPress={() => alert('Потом')}>
                    <Avatar size='giant' source={{uri: 'https://sun1-56.userapi.com/s/v1/ig2/NmJozsGBrgIvXu8Splqf__gVkI6JCBQV23TQBeHiV_wJIXENk6XBEuXlGqlQPQG1YyzoH3U_P_3HDUiRhEzgrbov.jpg?size=50x50&quality=95&crop=1283,196,855,855&ava=1'}}/>
                    <Text>Николай Флитов</Text>
                    <Text style={styles().actorRating}>1 / 100%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles().actorsBlock} onPress={() => alert('Потом')}>
                    <Avatar size='giant' source={{uri: 'https://sun1-56.userapi.com/s/v1/ig2/NmJozsGBrgIvXu8Splqf__gVkI6JCBQV23TQBeHiV_wJIXENk6XBEuXlGqlQPQG1YyzoH3U_P_3HDUiRhEzgrbov.jpg?size=50x50&quality=95&crop=1283,196,855,855&ava=1'}}/>
                    <Text>Николай Флитов</Text>
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

export default FavoriteActors;
