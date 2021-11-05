import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab } from '@ui-kitten/components';
import { ScrollView, View, StyleSheet } from "react-native";
import Friends from "./screens/Friends";
import Actions from "./screens/Actions";

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ( { navigation, state } ) => {
    return (
        <>
            <View style={{ height: 60 }}>
                <TabBar
                    indicatorStyle={styles.indicator}
                    selectedIndex={state.index}
                    onSelect={index => {
                        navigation.navigate( state.routeNames[ index ] );
                    }}>
                    <Tab title='Друзья'/>
                    <Tab title='Действия'/>
                </TabBar>
            </View>
        </>
    )
};

const TabNavigator = ( userId = 0 ) => (
    <Navigator style={styles.container}
               screenOptions={{ tabBarScrollEnabled: true }}
               tabBar={props => <TopTabBar {...props} />}>
        <Screen userId={userId} name='Friends' component={Friends}/>
        <Screen userId={userId} name='Actions' component={Actions}/>
    </Navigator>
);

export const NotificationsTabBar = ( userId = 0 ) => (
    <TabNavigator userId={userId}/>
);


const styles = StyleSheet.create( {
    container: {
        marginTop: 10,
        marginHorizontal: 15
    },
    indicator: {}
} )