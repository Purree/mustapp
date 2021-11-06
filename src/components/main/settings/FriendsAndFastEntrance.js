import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Text, Toggle, useTheme} from "@ui-kitten/components";
import {TouchableOpacity} from "react-native-gesture-handler";
import DividerWithMargin from "./components/DividerWithMargin";
import MainStyles from "./components/MainStyles";
import RecommendedUsers from "../../buttons/RecommendedUsers";


const EntranceMethodContainer = ({label, iconName, iconBackgroundColor}) => {
    const [checked, setChecked] = React.useState(false);

    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };

    return (
        <View style={authMethodStyles.container}>
            <View style={[authMethodStyles.iconContainer, {backgroundColor: iconBackgroundColor}]}>
                <Icon style={authMethodStyles.icon} fill='white' name={iconName}/>
            </View>
            <View style={authMethodStyles.textBlock}>
                <Text>{label}</Text>
                <Toggle checked={checked} onChange={onCheckedChange}/>
            </View>
        </View>
    )
}

const FriendsAndFastEntrance = ({navigation}) => {
    const themeStyles = useTheme()

    return (
        <View>
            <Text style={MainStyles().BlockName}>Друзья и быстрый вход</Text>
            <DividerWithMargin/>
            <RecommendedUsers themeStyles={themeStyles} navigation={navigation}/>
            <View style={{marginVertical: 10}}/>
            <EntranceMethodContainer label='Контакты' iconName='phone-outline' iconBackgroundColor={'#54DB65'}/>
            <View style={{marginVertical: 10}}/>
            <EntranceMethodContainer label='Facebook' iconName='facebook-outline' iconBackgroundColor={'#0078FF'}/>
            <View style={{marginVertical: 10}}/>
            <EntranceMethodContainer label='Twitter' iconName='twitter-outline' iconBackgroundColor={'#1CAEFF'}/>
            <View style={{marginVertical: 10}}/>
        </View>
    );
}

const authMethodStyles = StyleSheet.create({
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

export default FriendsAndFastEntrance;
