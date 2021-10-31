import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Avatar, Icon, Text, useTheme} from "@ui-kitten/components";


// https://enappd.com/blog/pick-images-from-camera-gallery-in-react-native-app/78/
// https://www.npmjs.com/package/react-native-image-picker
// https://github.com/react-native-image-picker/react-native-image-picker
const UserPhoto = () => {
    const themeStyles = useTheme()

    return (
        <Pressable style={styles.photoContainer}>
            <Avatar style={styles.avatar} size='giant'
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg'}}/>
            <Icon style={styles.photoIcon}
                  fill={themeStyles['text-info-color']}
                  name={'camera-outline'}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    photoContainer: {
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        top: 0,
        right: 0
    },
    photoIcon: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 25,
        right: -25,
    }
})

export default UserPhoto;
