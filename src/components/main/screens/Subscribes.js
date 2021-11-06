import React, { useState } from 'react';
import Header from "../../Header";
import { Layout, Text, Divider, Input, Icon, Avatar, Modal, Button, Card, useTheme } from "@ui-kitten/components";
import { View, TouchableOpacity, FlatList } from 'react-native';
import If from "../../If";


const UnsubscribeModal = ( { visible, setVisible, id, isSubscribed } ) => {
    return <Modal
        visible={visible}
        backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onBackdropPress={() => setVisible( false )}>
        <Card disabled={true}>
            <If condition={isSubscribed}>
                <Button style={{ marginBottom: 10 }} onPress={() => alert( 'Тут логика отписки от user' + id )}>
                    Отписаться
                </Button>
            </If>
            <If condition={!isSubscribed}>
                <Button style={{ marginBottom: 10 }} onPress={() => alert( 'Тут логика подписки на user' + id )}>
                    Подписаться
                </Button>
            </If>
            <Button onPress={() => setVisible( false )}>
                Закрыть
            </Button>
        </Card>
    </Modal>
}

const SubscribedUser = ( { item, navigation } ) => {
    const [visible, setVisible] = useState( false );
    const styleTheme = useTheme();

    return (
        <View style={{
            marginVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>

            <TouchableOpacity style={{ flexDirection: 'row' }}
                              onPress={() => navigation.navigate( 'Profile', { type: 2, userId: item.id } )}>
                <Avatar
                    source={{ uri: item.photoUrl }}/>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, color: 'darkgray', fontWeight: 'bold' }}>{item.tag}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setVisible( true )}>
                <Icon style={{
                    width: 22,
                    height: 22,
                    backgroundColor: styleTheme[ 'text-basic-color' ],
                    borderRadius: 10
                }} name={item.isSubscribed ? 'checkmark-circle-2-outline': 'plus-circle-outline'}/>
            </TouchableOpacity>

            <UnsubscribeModal visible={visible} setVisible={setVisible} id={item.id} isSubscribed={item.isSubscribed}/>
        </View>
    )
}

const DATA = [
    {
        id: 1,
        name: 'Artur Maloy',
        tag: '@annzy',
        photoUrl: 'https://sun1-19.userapi.com/s/v1/ig2/YwaJQIjOU99SLyO8VeiK39K-i3bB_tgP5tMTvosXUzMZqdJ3z0whE42U6YfpOG9eXvj4PPCA6-_vPw_mIt3RIvKA.jpg?size=50x50&quality=95&crop=338,150,1122,1122&ava=1',
        isSubscribed: false
    }, {
        id: 2,
        name: 'Lena Golovach',
        tag: '@annzy',
        isSubscribed: true
    }
]

const Subscribes = ( { route, navigation } ) => {
    const { title, type } = route.params // type 1 - subscribers, type 2 - subscriptions, 3 - recommendations

    const SearchIcon = ( props ) => (
        <Icon {...props} name='search-outline'/>
    );

    const renderItem = ( { item } ) => {
        return (
            <SubscribedUser navigation={navigation} item={item}/>
        )
    }

    return (
        <>
            <Header title={title} navigation={navigation}/>
            <Divider/>
            <Layout style={{ flex: 1 }}>
                <View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 50 }}>
                    <Input
                        accessoryLeft={SearchIcon}
                        placeholder='Поиск'
                        onChangeText={query => console.log( query )}
                    />
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </Layout>
        </>
    );
}

export default Subscribes;
