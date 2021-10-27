import React from 'react';
import {
    Icon, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction
} from '@ui-kitten/components';
import {StyleSheet, ToastAndroid, Platform, Alert, Share} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

const BackIcon = (props) => (
    <Icon {...props} name='settings-2-outline'/>
);

const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical'/>
);

const CopyIcon = (props) => (
    <Icon {...props} name='copy-outline'/>
);

const ShareIcon = (props) => (
    <Icon {...props} name='share-outline'/>
);

export const Header = () => {

    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const copyLink = (profileId = null) => {
        Clipboard.setString('Тут должна быть ссылка ' + (profileId ?? ''))
        notifyMessage('Ссылка успешно скопированна')
    }

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
        <TopNavigationAction icon={BackIcon}/>
    );

    return (
        <Layout style={styles.container} level='1'>
            <TopNavigation
                accessoryLeft={renderBackAction}
                accessoryRight={renderRightActions}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 128,
    },
});