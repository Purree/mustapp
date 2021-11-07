import React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { Avatar, Text, useTheme } from '@ui-kitten/components'

const PersonBlock = ( { item, themeStyles } ) => (
    <TouchableOpacity style={styles().personBlock} onPress={() => alert( 'Потом' )}>
        <Avatar size='giant'
                source={{ uri: item.photoUrl }}/>
        <Text>{item.name}</Text>
        <Text style={styles().personDescription}>{item.description}</Text>
    </TouchableOpacity>
)

const Persons = ( { peoples, title } ) => {
    title = title ?? ''
    const themeStyles = useTheme();

    const renderComponent = ( { item } ) => {
        return <PersonBlock item={item} themeStyles={themeStyles}/>
    }

    return <View style={styles().container}>
        <Text style={styles().mainText}>{title}</Text>
        <FlatList
            horizontal={true}
            keyboardShouldPersistTaps={"always"}
            showsHorizontalScrollIndicator={false}
            data={peoples}
            renderItem={renderComponent}
            ListEmptyComponent={<Text>Пока тут пусто</Text>}
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
        personBlock: {
            width: 80,
        },
        personDescription: {
            color: themeStyles[ 'text-hint-color' ],
            fontSize: 12,
        }
    }
}

export default Persons;
