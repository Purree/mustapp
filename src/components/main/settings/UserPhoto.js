import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar, Icon, useTheme} from "@ui-kitten/components";
import PhotoModal from "./components/PhotoModal";


const UserPhoto = () => {
    const themeStyles = useTheme()
    const [visible, setVisible] = useState(false);

    return (
        <>
            <PhotoModal visible={visible} setVisible={setVisible}/>
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.photoContainer}>
                <Avatar style={styles.avatar} size='giant'
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Oleksandr_s1mple_Kostyliev.jpg/1200px-Oleksandr_s1mple_Kostyliev.jpg'}}/>
                <Icon style={styles.photoIcon}
                      fill={themeStyles['text-info-color']}
                      name={'camera-outline'}/>
            </TouchableOpacity>
        </>
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
