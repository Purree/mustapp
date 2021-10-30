import React from 'react';
import {Text, useTheme} from '@ui-kitten/components'
import {ScrollView, View, TouchableOpacity} from 'react-native';

const StatisticBlocks = ({navigation}) => {
    return (
        <View style={styles().container}>
            <ScrollView horizontal={true} keyboardShouldPersistTaps={"always"} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.navigate('Subscribes', {title: 'Подписки', type: 1})} style={styles().block}>
                    <Text style={styles().statsCount}>1</Text>
                    <Text style={styles().statsLabel}>Подписки</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Subscribes', {title: 'Подписчики', type: 2})} style={styles().block}>
                    <Text style={styles().statsCount}>1</Text>
                    <Text style={styles().statsLabel}>Подписчики</Text>
                </TouchableOpacity>
                <View style={styles().block}>
                    <Text style={styles().statsCount}>1.9</Text>
                    <Text style={styles().statsLabel}>Часов просмотра фильмов</Text>
                </View>
                <View style={styles().block}>
                    <Text style={styles().statsCount}>0</Text>
                    <Text style={styles().statsLabel}>Часов просмотра сериалов</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = () => {
    const themeStyles = useTheme();

    return {
        container: {
            height: "13%"
        },
        block: {
            height: "100%",
            backgroundColor: themeStyles['background-basic-color-2'],
            width: "23%",
            marginRight: 15,
            justifyContent: 'space-between'
        },
        statsCount: {
            paddingLeft: 10,
            paddingTop: 3,
            fontWeight: "bold",
            fontSize: 24
        },
        statsLabel: {
            paddingLeft: 10,
            paddingBottom: 10,
            fontWeight: "bold",
            fontSize: 12,
            color: themeStyles['text-disabled-color']
        }
    }
}

export default StatisticBlocks;
