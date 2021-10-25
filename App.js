import React, {useEffect, useState} from 'react';
import {
    ApplicationProvider, Button,
    IconRegistry, Text
} from '@ui-kitten/components';
import {useColorScheme} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import {Home} from "./src/components/Home";
import {LoginNavigator} from "./src/navigation/LoginNavigator";
import useAsyncStorageSync from "./src/hook/useAsyncStorageSync";
import {ThemeContext} from './src/context/theme-context';
import {AuthContext} from "./src/context/auth-context";


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
                    {themeError ? <Text>{themeError}</Text> : <></>}
                    {tokenError ? <Text>{tokenError}</Text> : <></>}
                    {isSignedIn ? (
                        <Home/>
                    ) : (
                        <LoginNavigator/>
                    )}
                </ApplicationProvider>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    )
}

export default renderPage;