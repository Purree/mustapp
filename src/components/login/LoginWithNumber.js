import React, {useState} from 'react';
import {
    SafeAreaView, StyleSheet, View, StatusBar, TouchableOpacity
} from 'react-native';
import {Divider, Layout, TopNavigation, Icon, TopNavigationAction, Text} from '@ui-kitten/components';
import PhoneInput from "react-native-phone-number-input";
import {Colors} from "react-native/Libraries/NewAppScreen";
import NumberInput from "../inputes/NumberInput";

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back'/>
);

export const LoginWithNumberScreen = ({navigation}) => {

    const [number, setNumber] = useState();

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation title='Введите номер телефона' alignment='center' accessoryLeft={BackAction}/>
            <Divider/>
            <Layout style={styles.container}>
                <NumberInput/>
                <Text style={styles.warningText}>Нажимая кнопку "Подтвердить номер телефона", вы соглашаетесь получить SMS.
                    За его отправку и обмен может взыматься плата.</Text>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10
        },
        warningText: {
            marginTop: 30
        }
    }
);