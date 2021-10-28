import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabBar, Tab, Layout, Text} from '@ui-kitten/components';
import {ScrollView, View} from "react-native";

const {Navigator, Screen} = createMaterialTopTabNavigator();

const UsersScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category='h1'>USERS</Text>
    </Layout>
);

const OrdersScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category='h1'>ORDERS</Text>
    </Layout>
);

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

const TabNavigator = () => (
    <Navigator screenOptions={{tabBarScrollEnabled: true}}
               tabBar={props => <TopTabBar {...props} />}>
        <Screen name='Users' component={UsersScreen}/>
        <Screen name='Orders' component={OrdersScreen}/>
        <Screen name='Drd' component={OrdersScreen}/>
        <Screen name='asd' component={OrdersScreen}/>
    </Navigator>
);

export const ProfileTabBar = () => (
    <TabNavigator/>
);