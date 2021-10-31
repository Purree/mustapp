import React from 'react';
import { Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const Header = (props) => {
    const title = props.title ?? 'undefined'
    const navigation = props.navigation


    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back'/>
    );

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={()=>navigation.goBack()}/>
    );

    return (
        <TopNavigation
            accessoryLeft={BackAction}
            alignment='center'
            title={() => <Text style={{ fontWeight: 'bold', fontSize: 16}}>{title}</Text>}
        />
    );
}

export default Header;
