import React from 'react';
import { Button, Icon } from '@ui-kitten/components';

const FacebookIcon = (props) => (
    <Icon name='facebook' {...props} />
);

export const FacebookLoginButton = () => (
    <Button accessoryLeft={FacebookIcon}>Войти с Facebook</Button>
);