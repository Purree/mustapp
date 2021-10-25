import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from "../components/Home";


const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
    <Navigator screenOptions={{
        headerShown: false,
        animationEnabled: false,
    }}>
        <Screen name='Home' component={Home}/>

    </Navigator>
);

export const HomeNavigator = () => (
    <NavigationContainer>
        <MainNavigator/>
    </NavigationContainer>
);
