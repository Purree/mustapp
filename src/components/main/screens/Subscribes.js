import React, {useState} from 'react';
import Header from "../../Header";
import {Layout, Text, Divider, Input, Icon, Avatar, Modal, Button, Card, useTheme} from "@ui-kitten/components";
import {View, ScrollView, TouchableOpacity} from 'react-native';


const UnsubscribeModal = (props) => {
    const {visible, setVisible} = props

    return <Modal
        visible={visible}
        backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
            <Button style={{marginBottom: 10}} onPress={() => alert('Тут логика отписки')}>
                Отписаться
            </Button>
            <Button onPress={() => setVisible(false)}>
                Закрыть
            </Button>
        </Card>
    </Modal>
}


const SubscribedUser = () => {
    const [visible, setVisible] = useState(false);
    const styleTheme = useTheme();

    return (<>
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => alert('Это на бэкендере')}>
                    <Avatar
                        source={{uri: 'https://sun1-19.userapi.com/s/v1/ig2/YwaJQIjOU99SLyO8VeiK39K-i3bB_tgP5tMTvosXUzMZqdJ3z0whE42U6YfpOG9eXvj4PPCA6-_vPw_mIt3RIvKA.jpg?size=50x50&quality=95&crop=338,150,1122,1122&ava=1'}}/>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Nikolay Flitov</Text>
                        <Text style={{fontSize: 14, color: 'darkgray', fontWeight: 'bold'}}>@flitov</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <Icon style={{
                        width: 22,
                        height: 22,
                        backgroundColor: styleTheme['text-basic-color'],
                        borderRadius: 10
                    }} name='checkmark-circle-2-outline'/>
                </TouchableOpacity>
            </View>

            <UnsubscribeModal visible={visible} setVisible={setVisible}/>
        </>
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
