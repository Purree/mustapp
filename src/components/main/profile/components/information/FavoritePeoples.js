import React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { Avatar, Text, useTheme } from '@ui-kitten/components'

const FavoriteActorsBlock = ( { item, themeStyles } ) => (
    <TouchableOpacity style={styles().actorsBlock} onPress={() => alert( 'Потом' )}>
        <Avatar size='giant'
                source={{ uri: item.photoUrl }}/>
        <Text>{item.name}</Text>
        <Text style={styles().actorRating}>{item.count} / {item.percents}%</Text>
    </TouchableOpacity>
)

const FavoritePeoples = ( { peoples, title } ) => {
    title = title ?? ''
    const themeStyles = useTheme();

    const renderComponent = ( { item } ) => {
        return <FavoriteActorsBlock item={item} themeStyles={themeStyles}/>
    }

    return <View style={styles().container}>
        <Text style={styles().mainText}>{title}</Text>
        <FlatList
            horizontal={true}
            keyboardShouldPersistTaps={"always"}
            showsHorizontalScrollIndicator={false}
            data={peoples}
            renderItem={renderComponent}
            ListEmptyComponent={<Text>Пока у вас нет любимых актёров</Text>}
            keyExtractor={item => item.id}
        />
    </View>
}


const styles = () => {
    const themeStyles = useTheme();

    return {
        container: {
            marginTop: 20
        },
        mainText: {
            marginBottom: 10,
            fontWeight: "bold",
            fontSize: 14,
            color: themeStyles[ 'text-hint-color' ]
        },
        actorsBlock: {
            width: 90,
        },
        actorRating: {
            color: themeStyles[ 'text-hint-color' ],
            fontSize: 12,
        }
    }
}

export default FavoritePeoples;
