import {BottomNavigation, BottomNavigationTab, Divider, Icon} from '@ui-kitten/components';

import React from 'react';

import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from "../../components/main/screens/Profile";
import Notifications from "../../components/main/screens/Notifications";
import {Popular} from "../../components/main/screens/Popular";
import Search from "../../components/main/screens/Search";
import Serials from "../../components/main/screens/Serials";

const {Navigator, Screen} = createBottomTabNavigator();

const ProfileIcon = (props) => (
    <Icon {...props} name='person-outline'/>
);

const PopularIcon = (props) => (
    <Icon {...props} name='compass-outline'/>
);

const SerialsIcon = (props) => (
    <Icon {...props} name='monitor-outline'/>
);

const NotificationsIcon = (props) => (
    <Icon {...props} name='bell-outline'/>
);

const SearchIcon = (props) => (
    <Icon {...props} name='search-outline'/>
);

const BottomTabBar = ({navigation, state}) => (
    <View>
        <BottomNavigation
            appearance='noIndicator'
            selectedIndex={state.index}
            onSelect={index => navigation.navigate(state.routeNames[index])}>
            <BottomNavigationTab icon={ProfileIcon}/>
            <BottomNavigationTab icon={PopularIcon}/>
            <BottomNavigationTab icon={SerialsIcon}/>
            <BottomNavigationTab icon={NotificationsIcon}/>
            <BottomNavigationTab icon={SearchIcon}/>
        </BottomNavigation>
    </View>

);

export const BottomTabsNavigator = () => (
    <Navigator screenOptions={{
        headerShown: false,
    }} tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Profile' component={Profile}/>
        <Screen name='Notifications' component={Notifications}/>
        <Screen name='Popular' component={Popular}/>
        <Screen name='Search' component={Search}/>
        <Screen name='Serials' component={Serials}/>
    </Navigator>
);