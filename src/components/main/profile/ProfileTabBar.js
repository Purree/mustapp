import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabBar, Tab, Layout, Text, Icon} from '@ui-kitten/components';
import {ScrollView, View, StyleSheet, Pressable} from "react-native";
import Viewed from "./screens/Viewed";
import Serials from "./screens/Serials";
import Information from "./screens/Information";
import WillLook from "./screens/WillLook";

const {Navigator, Screen} = createMaterialTopTabNavigator();

const TopTabBar = ({navigation, state}) => (
    <View style={{height: 60, flexDirection: 'row', flexWrap: 'wrap',}}>
        <ScrollView horizontal={true} contentContainerStyle={{flexGrow: 1, height: '100%', alignItems: 'center'}}
        >
            <TabBar
                selectedIndex={state.index}
                onSelect={index => navigation.navigate(state.routeNames[index])}>
                <Tab title='Посмотрю'/>
                <Tab style={{marginLeft: 15}} title='Просмотрен'/>
                <Tab style={{paddingLeft: 15}} title='Сериалы'/>
                <Tab style={{paddingLeft: 15}} title='Информация'/>
            </TabBar>
        </ScrollView>
        <Pressable style={styles.filtersButton} onPress={()=>alert(1)}>
            <Icon
                style={{height: "75%", width: "75%"}}
                fill='gray'
                name='menu-2-outline'
            />
        </Pressable>
    </View>
);

const TabNavigator = (userId = 0) => (
    <Navigator screenOptions={{tabBarScrollEnabled: true}}
               tabBar={props => <TopTabBar {...props} />}>
        <Screen userId={userId} name='Will Look' component={WillLook}/>
        <Screen userId={userId} name='Viewed' component={Viewed}/>
        <Screen userId={userId} name='UserSerials' component={Serials}/>
        <Screen userId={userId} name='Information' component={Information}/>
    </Navigator>
);


const styles = StyleSheet.create({
    filtersButton: {
        height: "50%",
        width: '9%',
        marginTop: "4.5%",
        paddingLeft: 7,
        paddingTop: 3,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        marginLeft: 6
    }
})

export const ProfileTabBar = (userId = 0) => (
    <TabNavigator userId={userId}/>
);