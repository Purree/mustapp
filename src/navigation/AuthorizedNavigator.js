import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabsNavigator} from "./authNavigation/BottomTabsNavigator";

const {Navigator, Screen} = createStackNavigator();

export const AuthorizedNavigator = () => (
    <NavigationContainer>
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen name='Home' component={BottomTabsNavigator}/>
        </Navigator>
    </NavigationContainer>
);