import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Button, Divider, Layout} from '@ui-kitten/components';
import { ThemeContext } from '../../../context/theme-context';
import { AuthContext } from '../../../context/auth-context';
import {Header} from "../profile/Header";

export const Profile = ({ navigation }) => {

    const themeContext = React.useContext(ThemeContext);
    const authContext = React.useContext(AuthContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
                <Button style={{ marginVertical: 4 }} onPress={() => authContext.setToken('')}>LOGOUT</Button>
            </Layout>
        </SafeAreaView>
    );
};