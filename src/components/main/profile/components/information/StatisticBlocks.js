import React from 'react';
import { Text, useTheme } from '@ui-kitten/components'
import { ScrollView, View, TouchableOpacity, FlatList } from 'react-native';

const StatisticBlock = ( { item, navigation } ) => {
    return (
        <TouchableOpacity style={styles().block} disabled={!item.screenToNavigate}
                          onPress={() => navigation.navigate( item.screenToNavigate, item.navigationParams )}>
            <Text style={styles().statsCount}>{item.count}</Text>
            <Text style={styles().statsLabel}>{item.title}</Text>
        </TouchableOpacity>
    )
}


const StatisticBlocks = ( { navigation, statistics } ) => {

    const renderItem = ( { item } ) => {
        return <StatisticBlock item={item} navigation={navigation}/>
    }

    return (
        <FlatList
            horizontal={true}
            style={styles().container}
            keyboardShouldPersistTaps={"always"}
            showsHorizontalScrollIndicator={false}
            data={statistics}
            ListEmptyComponent={<Text style={styles().textOnEmpty}>Пока вы смотрели слишком мало фильмов.</Text>}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
    )
}

const styles = () => {
    const themeStyles = useTheme();

    return {
        container: {
            height: "13%"
        },
        block: {
            height: 150,
            backgroundColor: themeStyles[ 'background-basic-color-2' ],
            width: 150,
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
            color: themeStyles[ 'text-disabled-color' ]
        },
        textOnEmpty: {
            fontWeight: 'bold'
        }
    }
}

export default StatisticBlocks;
