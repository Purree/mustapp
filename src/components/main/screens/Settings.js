import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Divider, Layout} from "@ui-kitten/components";
import Header from "../../Header";
import UserPhoto from "../settings/UserPhoto";
import MainUserData from "../settings/MainUserData";
import FriendsAndFastEntrance from "../settings/FriendsAndFastEntrance";
import Confidentiality from "../settings/Confidentiality";

const Settings = ({navigation}) => {
    return (
        <>
            <Header navigation={navigation} title={'Настройки'}/>
            <Divider/>
            <ScrollView>
                <Layout style={styles.container}>
                    <UserPhoto/>
                    <MainUserData navigation={navigation}/>
                    <Divider style={{marginVertical: 10}}/>
                    <FriendsAndFastEntrance navigation={navigation}/>
                    <Divider style={{marginBottom: 10}}/>
                    <Confidentiality/>
                </Layout>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 25
    }
})

export default Settings;
