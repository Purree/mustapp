import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabsNavigator} from "./authNavigation/BottomTabsNavigator";
import Subscribes from "../components/main/screens/Subscribes";
import {useTheme} from "@ui-kitten/components";

const {Navigator, Screen} = createStackNavigator();


export const AuthorizedNavigator = () => {
    const themeStyles = useTheme();
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: themeStyles['background-basic-color-1'],
        },
    };

    return (
    <NavigationContainer theme={MyTheme}>
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name='Home' component={BottomTabsNavigator}/>
            <Screen name='Subscribes' component={Subscribes} />
        </Navigator>
    </NavigationContainer>
)};