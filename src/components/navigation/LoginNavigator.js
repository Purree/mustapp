import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginWithNumberScreen } from '../login/LoginWithNumber';
import LoginPage from "../login/LoginPage";


const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
    <Navigator screenOptions={{
        headerShown: false
    }}>
        <Screen name='Login' component={LoginPage}/>
        <Screen name='LoginWithNumber' component={LoginWithNumberScreen}/>
    </Navigator>
);

export const LoginNavigator = () => (
    <NavigationContainer>
        <MainNavigator/>
    </NavigationContainer>
);
