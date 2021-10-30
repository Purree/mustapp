import React, {useState} from 'react';
import Header from "../../Header";
import {Layout, Text, Divider, Input, Icon, Avatar} from "@ui-kitten/components";
import {View, ScrollView, TouchableOpacity} from 'react-native';


const SubscribedUser = () => {
    return (
        <TouchableOpacity style={{marginVertical: 10, flexDirection: 'row'}} onPress={()=>alert('Это на бэкендере')}>
            <Avatar
                source={{uri: 'https://sun1-19.userapi.com/s/v1/ig2/YwaJQIjOU99SLyO8VeiK39K-i3bB_tgP5tMTvosXUzMZqdJ3z0whE42U6YfpOG9eXvj4PPCA6-_vPw_mIt3RIvKA.jpg?size=50x50&quality=95&crop=338,150,1122,1122&ava=1'}}/>
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Nikolay Flitov</Text>
                <Text style={{fontSize: 14, color: 'darkgray', fontWeight: 'bold'}}>@flitov</Text>
            </View>

        </TouchableOpacity>
    )
}

const Subscribes = ({route, navigation}) => {
    const {title, type} = route.params // type 1 - subscribers, type 2 - subscriptions

    const SearchIcon = (props) => (
        <Icon {...props} name='search-outline'/>
    );

    return (
        <>
            <Header title={title} navigation={navigation}/>
            <Divider/>
            <Layout style={{flex: 1}}>
                <View style={{marginHorizontal: 20, marginTop: 10, marginBottom: 50}}>
                    <Input
                        accessoryLeft={SearchIcon}
                        placeholder='Поиск'
                        onChangeText={query => console.log(query)}
                    />
                    <ScrollView>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                        <SubscribedUser/>
                    </ScrollView>
                </View>
            </Layout>
        </>
    );
}

export default Subscribes;
