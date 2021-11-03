import React from 'react';
import {Divider, Layout, Text} from "@ui-kitten/components";
import {ScrollView} from "react-native";
import Header from "../../Header";
import BestUsers from "../top/BestUsers";
import AnotherUsers from "../top/AnotherUsers";


const UsersTop = ({navigation}) => {
    return (
        <Layout>
            <Header navigation={navigation} title='Топ'>Hello!</Header>
            <Divider/>
            <ScrollView>
                <BestUsers navigation={navigation}/>
                <AnotherUsers navigation={navigation}/>
            </ScrollView>
        </Layout>
    );
}

export default UsersTop;
