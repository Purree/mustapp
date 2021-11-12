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
import Film from "../components/films/Film";
import FilmReviews from "../components/films/FilmReviews";
import FriendsReviews from "../components/films/FriendsReviews";
import FilmsBlock from "../components/films/FilmsBlock";
import { FilmCrew } from "../components/films/FilmCrew";

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
            <Screen name='Film' component={Film} />
            <Screen name='FilmReviews' component={FilmReviews} />
            <Screen name='FriendsReviews' component={FriendsReviews} />
            <Screen name='FilmsBlock' component={FilmsBlock} />
            <Screen name='FilmCrew' component={FilmCrew} />
        </Navigator>
    </NavigationContainer>
)};

// TODO: Перенести PhoneChange и NumberConfirmation в другой файл навигации и импортировать его тут и в LoginNavigator
// TODO: Перенести всю навигацию настроек в другой файл
// TODO: Перенести всю навигацию фильмов в другой файл