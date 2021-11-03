import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabsNavigator} from "./authNavigation/BottomTabsNavigator";
import Subscribes from "../components/main/screens/Subscribes";
import {useTheme} from "@ui-kitten/components";
import UsersTop from "../components/main/screens/UsersTop";
import Settings from "../components/main/screens/Settings";
import {LoginWithNumberScreen} from "../components/login/LoginWithNumber";
import ConfirmNumber from "../components/login/ConfirmNumber";
import Notifications from "../components/main/settings/components/Notifications";

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
            <Screen name='Top' component={UsersTop} />
            <Screen name='Settings' component={Settings}/>
            <Screen name='PhoneChange' component={LoginWithNumberScreen}/>
            <Screen name='NumberConfirmation' component={ConfirmNumber}/>
            <Screen name='Notifications' component={Notifications}/>
        </Navigator>
    </NavigationContainer>
)};

// TODO: Перенести PhoneChange и NumberConfirmation в другой файл навигации и импортировать его тут и в LoginNavigator
// TODO: Перенести всю навигацию настроек в другой файл