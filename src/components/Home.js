import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import { ThemeContext } from '../context/theme-context';
import { AuthContext } from '../context/auth-context';

export const Home = ({ navigation }) => {

    const themeContext = React.useContext(ThemeContext);
    const authContext = React.useContext(AuthContext);

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ marginVertical: 4 }} onPress={navigateDetails}>OPEN DETAILS</Button>
                <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
                <Button style={{ marginVertical: 4 }} onPress={() => authContext.setToken('')}>LOGOUT</Button>
            </Layout>
        </SafeAreaView>
    );
};