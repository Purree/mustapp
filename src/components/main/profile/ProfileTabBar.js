import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabBar, Tab, Layout, Text} from '@ui-kitten/components';
import {ScrollView, View} from "react-native";
import Viewed from "./Viewed";
import Serials from "./Serials";
import Information from "./Information";
import WillLook from "./WillLook";

const {Navigator, Screen} = createMaterialTopTabNavigator();

const TopTabBar = ({navigation, state}) => (
    <View style={{height: 60}}>
        <ScrollView horizontal={true} contentContainerStyle={{flexGrow: 1, height: '100%', alignItems: 'center'}}
        >
            <TabBar
                selectedIndex={state.index}
                onSelect={index => navigation.navigate(state.routeNames[index])}>
                <Tab title='Посмотрю'/>
                <Tab style={{paddingLeft: 15}} title='Просмотрен'/>
                <Tab style={{paddingLeft: 15}} title='Сериалы'/>
                <Tab style={{paddingLeft: 15}} title='Информация'/>
            </TabBar>
        </ScrollView>
    </View>
);

const TabNavigator = (userId = 0) => (
    <Navigator screenOptions={{tabBarScrollEnabled: true}}
                      tabBar={props => <TopTabBar {...props} />}>
        <Screen userId={userId} name='Will Look' component={WillLook}/>
        <Screen userId={userId} name='Viewed' component={Viewed}/>
        <Screen userId={userId} name='Serials' component={Serials}/>
        <Screen userId={userId} name='Information' component={Information}/>
    </Navigator>
);

export const ProfileTabBar = (userId = 0) => (
    <TabNavigator userId={userId}/>
);