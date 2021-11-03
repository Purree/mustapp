import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabBar, Tab, Layout, Text, Icon, Button, CheckBox, RadioGroup, Radio, Divider} from '@ui-kitten/components';
import {ScrollView, View, StyleSheet, Pressable} from "react-native";
import Viewed from "./screens/Viewed";
import Serials from "./screens/Serials";
import Information from "./screens/Information";
import WillLook from "./screens/WillLook";

const {Navigator, Screen} = createMaterialTopTabNavigator();


const CheckedElements = ({name}) => {

    const [checked, setChecked] = React.useState(false);

    return (
        <CheckBox style={{marginVertical: 10}} checked={checked} onChange={nextChecked => setChecked(nextChecked)}>
            {name}
        </CheckBox>
    )
}

const WillWatchFilter = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <View>
            <CheckedElements name='С непосмотренными эпизодами'/>
            <CheckedElements name='Законченные'/>
            <CheckedElements name='Скрыть невышедшие'/>

            <RadioGroup
                selectedIndex={selectedIndex}
                onChange={index => setSelectedIndex(index)}>
                <Radio>Непосмотренные эпизоды</Radio>
                <Radio>Дата выхода</Radio>
            </RadioGroup>
            <Button style={{borderRadius: 50, marginBottom: 10}} onPress={()=>{alert('Бэк :)')}}>Применить</Button>
            <Divider style={{marginBottom: 10}}/>
        </View>
    )
}

const WatchedFilter = () => (
    <View>
        <Text>¯\_(ツ)_/¯</Text>
    </View>
)


const TopTabBar = ({navigation, state}) => {
    const [isMenuActivate, setIsMenuActivate] = useState(false);
    const [index, setIndex] = useState(0)

    const filters = [<WillWatchFilter/>, <WatchedFilter/>, <WatchedFilter/>]

    return (
        <>
            <View style={{height: 60, flexDirection: 'row'}}>
                <ScrollView horizontal={true}
                            contentContainerStyle={{flexGrow: 1, height: '100%', alignItems: 'center'}}
                >
                    <TabBar
                        selectedIndex={state.index}
                        onSelect={index => {
                            navigation.navigate(state.routeNames[index]);
                            if (index === 3) setIsMenuActivate(false)
                            setIndex(index);
                        }}>
                        <Tab title='Посмотрю'/>
                        <Tab style={{marginLeft: 15}} title='Просмотрен'/>
                        <Tab style={{paddingLeft: 15}} title='Сериалы'/>
                        <Tab style={{paddingLeft: 15}} title='Информация'/>
                    </TabBar>
                </ScrollView>
                <Pressable
                    style={index !== 3 ? [styles.filtersButton, {backgroundColor: !isMenuActivate ? 'lightgray' : '#00c5ff'}] : {display: 'none'}}
                    onPress={() => {
                        if (index !== 3) setIsMenuActivate(!isMenuActivate)
                    }}>
                    <Icon
                        style={{height: "75%", width: "75%"}}
                        fill={!isMenuActivate ? 'gray' : 'blue'}
                        name='menu-2-outline'
                    />
                </Pressable>
            </View>
            <View style={isMenuActivate ? {width: '100%'} : {display: 'none'}}>{filters[index]}</View>
        </>
    )
};

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
        marginLeft: 6
    }
})

export const ProfileTabBar = (userId = 0) => (
    <TabNavigator userId={userId}/>
);