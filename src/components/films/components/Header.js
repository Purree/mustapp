import React from 'react';
import { Text, TopNavigation} from '@ui-kitten/components';

const Header = (props) => {
    const title = props.title ?? 'undefined'

    return (
        <TopNavigation
            alignment='center'
            title={() => <Text style={{ fontWeight: 'bold', fontSize: 16}}>{title}</Text>}
        />
    );
}

export default Header;
