import React, {useEffect, useState} from 'react';
import {
    ApplicationProvider, Button,
    IconRegistry, Text
} from '@ui-kitten/components';
import {Image, StyleSheet, useColorScheme, View} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import {LoginNavigator} from "./src/navigation/LoginNavigator";
import useAsyncStorageSync from "./src/hook/useAsyncStorageSync";
import {ThemeContext} from './src/context/theme-context';
import {AuthContext} from "./src/context/auth-context";
import {HomeNavigator} from "./src/navigation/HomeNavigator";
import {default as theme} from "./src/style/custom-theme.json";
import If from "./src/components/If";
import config from './config.json'


function renderPage() {
    const colorScheme = useColorScheme();

    const [theme, setTheme, themeLoading, themeError] = useAsyncStorageSync('theme', colorScheme ?? "dark")
    const [token, setToken, tokenLoading, tokenError] = useAsyncStorageSync('token', '')

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    };

    const isSignedIn = !tokenLoading && token;

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <AuthContext.Provider value={{token, setToken, tokenLoading, tokenError}}>
                <ApplicationProvider {...eva} theme={eva[theme]}>
                    <IconRegistry icons={EvaIconsPack}/>
                    <If condition={themeError}>
                        <Text>{themeError}</Text>
                    </If>
                    <If condition={tokenError}>
                        <Text>{tokenError}</Text>
                    </If>
                    <If condition={tokenLoading}>
                        <View style={styles.logoBlock}>
                            <Image style={styles.logo} source={require('./src/pictures/logo.png')}/>
                            <Text style={styles.logoText} category='h1'>{ config.title }</Text>
                            <Text style={styles.logoText} category='s1'>{ config.tagline }</Text>
                        </View>
                    </If>
                    <If condition={!tokenLoading}>
                        <If condition={isSignedIn}>
                            <HomeNavigator/>
                        </If>
                        <If condition={!isSignedIn}>
                            <LoginNavigator/>
                        </If>
                    </If>
                </ApplicationProvider>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    )
}

const styles = StyleSheet.create({
    logo: {
        maxWidth: 85,
        maxHeight: 85,
        flex: 1,
        justifyContent: "center"
    },
    logoBlock: {
        width: '100%',
        backgroundColor: theme["color-primary-500"],
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logoText: {
        color: '#ffffff',
        textAlign: 'center'
    },
});

export default renderPage;