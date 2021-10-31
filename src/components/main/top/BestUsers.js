import React from 'react';
import {View} from 'react-native';
import {Avatar, Icon, Text, useTheme} from "@ui-kitten/components";
import {numberValidator} from "../../../hook/useStateWithValidation";


const BestUserContainer = (props) => {
    const {place, name, count, avatarPath} = props;

    return (
        <View style={bestUsersStyles().userContainer}>
            <Text style={bestUsersStyles().place}>{place}</Text>
            <View style={bestUsersStyles(place).userInfoBlock}>
                <View style={bestUsersStyles().textInfo}>
                    <Text style={bestUsersStyles().userName}>{name}</Text>
                    <Text style={bestUsersStyles().userScore}>{count}</Text>
                </View>
                <View style={bestUsersStyles().userAvatar}>
                    <Avatar source={{uri: avatarPath}}/>
                </View>
            </View>
        </View>
    );
}


const BestUsers = () => {
    const themeStyle = useTheme();

    return (
        <View>
            <BestUserContainer place={1} name='Text' count={46230}
                               avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/200px-Wikipedia-logo-v2.svg.png'}/>
            <BestUserContainer place={2} name='Test' count={43474}
                               avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Vladimir_Putin_11-10-2020_%28cropped%29.jpg/250px-Vladimir_Putin_11-10-2020_%28cropped%29.jpg'}/>
            <BestUserContainer place={3} name='Tezt' count={34831}
                               avatarPath={'data:image/png;base64,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'}/>
            <View style={{alignItems: 'center'}}>
                <Icon name={'more-horizontal-outline'} style={{width: 30, height: 30}}
                      fill={themeStyle['text-hint-color']}/>
            </View>
            <BestUserContainer place={'1k'} name='Tezt' count={1}
                               avatarPath={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/200px-Wikipedia-logo-v2.svg.png'}/>
        </View>
    );
}

const bestUsersStyles = (place = 1) => {
    const themeStyle = useTheme();
    place = !Number.isInteger(place) || place > 4 ? 4 : place

    return {
        userContainer: {
            height: 55,
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5
        },
        place: {
            width: '15%',
            textAlign: 'center'
        },
        userInfoBlock: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            width: `${100 - place * 17}%`,
            backgroundColor: themeStyle['background-basic-color-3'],
            borderRadius: 50
        },
        textInfo: {
            marginLeft: 15
        },
        userName: {
            fontWeight: 'bold'
        },
        userScore: {
            fontWeight: 'bold',
            color: themeStyle['text-hint-color']
        },
        userAvatar: {
            marginRight: 5
        }
    }
}

export default BestUsers;
