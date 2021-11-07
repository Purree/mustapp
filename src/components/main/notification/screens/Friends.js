import React from 'react';
import { View, StyleSheet, Pressable, FlatList } from 'react-native';
import { Avatar, Icon, Text, Toggle, useTheme } from "@ui-kitten/components";
import RecommendedUsers from "../../../buttons/RecommendedUsers";
import DividerWithMargin from "../../settings/components/DividerWithMargin";
import { TouchableOpacity } from "react-native-gesture-handler";
import If from "../../../If";
import MediumFilmsPreview from "../../../films/components/MediumFilmsPreview";

const DATA = [
    {
        id: 1,
        userAvatar: 'https://www.davno.ru/assets/images/cards/big/birthday-1124.gif',
        userName: 'Test Testov',
        userAction: 'Testing',
        filmIds: [1, 2, 3]
    },
    {
        id: 2,
        userAvatar: 'https://www.davno.ru/assets/images/cards/big/birthday-1124.gif',
        userName: 'Test Testov',
        userAction: 'Testing',
        filmIds: [1, 2, 3]
    },
    {
        id: 3,
        userAvatar: 'https://www.davno.ru/assets/images/cards/big/birthday-1124.gif',
        userName: 'Test Testov',
        userAction: 'Testing',
        filmIds: [1, 2, 3]
    },
]

const Action = ( { navigation, item } ) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate( 'Profile', { type: 2, userId: 444 } )}
                              style={styles.actionBlock}>
                <Avatar source={{ uri: item.userAvatar }}/>
                <View style={styles.actionTextBlock}>
                    <Text style={styles.actionText}>{item.userName}</Text>
                    <Text style={styles.actionText}>{item.userAction}</Text>
                </View>
            </TouchableOpacity>
            <If condition={item.filmIds}>
                <View style={styles.actionFilms}>
                    <MediumFilmsPreview navigation={navigation}/>
                </View>
            </If>
        </>
    )
}

const Friends = ( { navigation } ) => {
    const themeStyles = useTheme()
    const [facebookChecked, setFacebookChecked] = React.useState( false );

    const onCheckedChange = ( isChecked ) => {
        setFacebookChecked( isChecked );
    };

    const renderAction = ( item ) => {
        return <Action item={item.item} navigation={navigation}/>
    }

    const ListHeader = () => {
        return (
            <>
                <Pressable onPress={() => {
                    alert( 'Логика на вас' )
                }} style={styles.iconContainer}>
                    <Icon
                        style={styles.icon}
                        fill='#8F9BB3'
                        name='close-outline'
                    />
                </Pressable>
                <View style={styles.findFriendsBlock}>
                    <Text style={[styles.boldText, { color: themeStyles[ 'text-hint-color' ], fontSize: 20 }]}>Найти
                        друзей</Text>
                    <Text style={[styles.boldText, { color: themeStyles[ 'text-hint-color' ] }]}>Узнайте, кто из ваших
                        друзей уже есть в Must.</Text>
                    <Text style={[styles.boldText, { color: themeStyles[ 'text-hint-color' ] }]}>Мы ничего не публекуем
                        без
                        разрешения.</Text>

                    <View style={styles.facebookContainer}>
                        <Text style={[styles.boldText, {
                            color: themeStyles[ 'text-hint-color' ],
                            marginRight: 10
                        }]}>Facebook</Text>
                        <Toggle checked={facebookChecked} onChange={onCheckedChange}/>
                    </View>
                </View>


                <DividerWithMargin/>
                <RecommendedUsers themeStyles={themeStyles} navigation={navigation}/>
                <DividerWithMargin/>
            </>
        )
    }


    return (
        <FlatList
            ListHeaderComponent={<ListHeader/>}
            data={DATA}
            renderItem={renderAction}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create( {
    findFriendsBlock: {
        alignItems: 'center'
    },
    facebookContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    boldText: {
        fontWeight: 'bold'
    },
    icon: {
        width: 16,
        height: 16
    },
    iconContainer: {
        alignItems: 'flex-end'
    },
    actionBlock: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center'
    },
    actionTextBlock: {
        marginLeft: 10
    },
    actionText: {
        fontWeight: 'bold'
    },
    actionFilms: {
        marginLeft: 50,
        marginTop: -25
    }
} )

export default Friends;
