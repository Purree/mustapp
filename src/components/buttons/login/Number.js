import React from 'react';
import {Button} from '@ui-kitten/components';

export const NumberLoginButton = ({navigation}) => {
    const navigateNumber = () => {
        navigation.navigate('LoginWithNumber');
    };

    return <Button appearance='outline' status='basic' onPress={navigateNumber}>
        Номер телефона
    </Button>
};