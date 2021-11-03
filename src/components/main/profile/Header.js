import React from 'react';
import {
    Icon, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction
} from '@ui-kitten/components';
import {StyleSheet, ToastAndroid, Platform, Alert, Share} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {default as theme} from "../../../style/custom-theme.json";


const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical'/>
);

const CopyIcon = (props) => (
    <Icon {...props} name='copy-outline'/>
);

const ShareIcon = (props) => (
    <Icon {...props} name='share-outline'/>
);

export const Header = ({navigation, type}) => {

    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const copyLink = (profileId = null) => {
        Clipboard.setString('Тут должна быть ссылка ' + (profileId ?? ''))
        notifyMessage('Ссылка успешно скопированна')
    }

    const BackIcon = (props) => {
        if (type === 1) {
            return <Icon {...props} name='settings-2-outline'/>
        }

        return <Icon {...props} name='home-outline'/>
    };

    const notifyMessage = (message) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT)
        } else {
            Alert.alert(message);
        }
    }

    const shareLink = async (profileId = null) => {
        try {
            const result = await Share.share({
                message:
                    'Заходи сюда, пожалуйста' + 'Тут должна быть ссылка ' + (profileId ?? ''),
            });
        } catch (error) {
            // https://reactnative.dev/docs/share
        }
    }

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
    );

    const renderRightActions = () => (
        <React.Fragment>
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={CopyIcon} onPress={copyLink} title='Копировать ссылку'/>
                <MenuItem accessoryLeft={ShareIcon} onPress={shareLink} title='Поделиться'/>
            </OverflowMenu>
        </React.Fragment>
    );

    const renderBackAction = () => (
        <TopNavigationAction onPress={() => {
            if(type === 1)
                navigation.navigate('Settings')
            else
                navigation.navigate('Profile')
        }} icon={BackIcon}/>
    );

    return (
        <Layout style={{backgroundColor: 'red'}} level='1'>
            <TopNavigation
                accessoryLeft={renderBackAction}
                accessoryRight={renderRightActions}
            />
        </Layout>
    );
};