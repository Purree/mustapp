import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginWithNumberScreen } from '../components/login/LoginWithNumber';
import LoginPage from "../components/login/LoginPage";
import ConfirmNumber from "../components/login/ConfirmNumber";


const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
    <Navigator screenOptions={{
        headerShown: false
    }}>
        <Screen name='Login' component={LoginPage}/>
        <Screen name='LoginWithNumber' component={LoginWithNumberScreen}/>
        <Screen name='NumberConfirmation' component={ConfirmNumber}/>
    </Navigator>
);

export const LoginNavigator = () => (
    <NavigationContainer>
        <MainNavigator/>
    </NavigationContainer>
);
