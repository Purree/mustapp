import React, {useEffect, useState} from 'react';
import {
    ApplicationProvider,
    IconRegistry
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {ThemeContext} from './src/context/theme-context';

import {Home} from "./src/components/Home";
import {LoginNavigator} from "./src/navigation/LoginNavigator";
import { useColorScheme } from 'react-native';
import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage';


function renderPage() {
    const colorScheme = useColorScheme();
    const [isSignedIn, setSignedIn] = useState(false);
    const [theme, setTheme] = useState(colorScheme ?? "dark")
    const{getItem, setItem} = useAsyncStorage('@theme')

    const readItemFromStorage = async () => {
        const item = await getItem()
        setTheme(item ?? theme);
    }

    const writeItemToStorage = async (newValue) => {
        await setItem(newValue)
        setTheme(newValue)
    }

    useEffect(()=>{
        readItemFromStorage();
    }, [])

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        writeItemToStorage(nextTheme);
    };

    useEffect(()=>{})

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ApplicationProvider {...eva} theme={eva[theme]}>
                <IconRegistry icons={EvaIconsPack}/>
                {isSignedIn ? (
                    <Home/>
                ) : (
                    <LoginNavigator/>
                )}
            </ApplicationProvider>
        </ThemeContext.Provider>
    )
}

export default renderPage;
