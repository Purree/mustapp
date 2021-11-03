import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Divider, Layout} from "@ui-kitten/components";
import Header from "../../Header";
import UserPhoto from "../settings/UserPhoto";
import MainUserData from "../settings/MainUserData";
import FriendsAndFastEntrance from "../settings/FriendsAndFastEntrance";
import Confidentiality from "../settings/Confidentiality";
import SettingsBlock  from "../settings/SettingsBlock"
import DividerWithMargin from "../settings/components/DividerWithMargin";
import MainStyles from "../settings/components/MainStyles";

const Settings = ({navigation}) => {
    return (
        <>
            <Header navigation={navigation} title={'Настройки'}/>
            <Divider/>
            <ScrollView>
                <Layout style={MainStyles().container}>
                    <UserPhoto/>
                    <MainUserData navigation={navigation}/>
                    <DividerWithMargin/>
                    <FriendsAndFastEntrance navigation={navigation}/>
                    <Divider style={{marginBottom: 10}}/>
                    <Confidentiality/>
                    <DividerWithMargin/>
                    <SettingsBlock navigation={navigation} />
                </Layout>
            </ScrollView>
        </>
    );
}

export default Settings;
