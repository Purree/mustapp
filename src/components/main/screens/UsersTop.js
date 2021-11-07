import React from 'react';
import {Divider, Layout, Text} from "@ui-kitten/components";
import {ScrollView} from "react-native";
import Header from "../../Header";
import BestUsers from "../top/BestUsers";
import AnotherUsers from "../top/AnotherUsers";


const UsersTop = ({navigation}) => {
    return (
        <Layout>
            <Header navigation={navigation} title='Топ' />
            <Divider/>
            <AnotherUsers navigation={navigation}/>
        </Layout>
    );
}

export default UsersTop;
