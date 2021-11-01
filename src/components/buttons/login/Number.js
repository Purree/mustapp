import React from 'react';
import {Button} from '@ui-kitten/components';
import {AuthContext} from "../../../context/auth-context";

export const NumberLoginButton = ({navigation}) => {
    const authContext = React.useContext(AuthContext);

    const onSuccessfulVerification = (token) => {
        authContext.setToken(token)
    }

    const navigateNumber = () => {
        navigation.navigate('LoginWithNumber', {onSuccessfulVerification});
    };

    return <Button appearance='outline' status='basic' onPress={navigateNumber}>
        Номер телефона
    </Button>
};