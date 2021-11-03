import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Divider, Icon, Text, useTheme} from "@ui-kitten/components";
import MainStyles from "./components/MainStyles";
import CountryPickerBlock from "./components/CountryPickerBlock";

const RightIcon = (props) => {
    const themeStyles = useTheme()

    return <Icon fill={themeStyles['text-hint-color']} {...props} name='chevron-right-outline'/>
}

const onCountrySelect = (country) => {
    alert('Выбранная страна: ' + country.name)
}

const SettingsBlock = ({navigation}) => {
    return (
        <View>
            <Text style={MainStyles().BlockName}>Настройки</Text>
            <Divider style={{marginTop: 10}}/>
            <TouchableOpacity onPress={()=>navigation.navigate('Notifications')} style={styles.buttonsContainer}>
                <Text>Пуш-уведомления</Text>
                <RightIcon style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsContainer}>
                <CountryPickerBlock onCountrySelect={onCountrySelect}/>
                <RightIcon style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        width: 25,
        height: 25,
    }
})

export default SettingsBlock;
