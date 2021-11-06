import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from "@ui-kitten/components";

const RecommendedUsers = ({navigation, themeStyles, styles}) => {
    styles = styles ?? defaultStyles
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Subscribes', {type: 3, title: 'Рекомендации'})}
                          style={styles.container}>
          <View style={[styles.iconContainer, {backgroundColor: themeStyles['background-alternative-color-4']}]}>
            <Icon style={styles.icon} fill={themeStyles['text-alternate-color']}
                  name='person-outline'/>
          </View>
          <View style={styles.textBlock}>
            <Text>Рекомендуемые пользователи</Text>
          </View>
        </TouchableOpacity>
    );
}


const defaultStyles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 20,
        height: 20
    },
    textBlock: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5
    }
})

export default RecommendedUsers;
