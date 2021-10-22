import React from 'react';
import { Button, Icon } from '@ui-kitten/components';

const TwitterIcon = (props) => (
    <Icon name='twitter' {...props} />
);

export const TwitterLoginButton = () => (
    <Button accessoryLeft={TwitterIcon}>Войти с Twitter</Button>
);