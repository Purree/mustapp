import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button, Card, Modal} from "@ui-kitten/components";

const PhotoModal = ({visible, setVisible}) => {
    return (
        <Modal
            visible={visible}
            backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
            onBackdropPress={() => setVisible(false)}>
          <Card disabled={true}>
              {/*// https://enappd.com/blog/pick-images-from-camera-gallery-in-react-native-app/78/
              // https://www.npmjs.com/package/react-native-image-picker
              // https://github.com/react-native-image-picker/react-native-image-picker*/}
            <Button appearance='ghost' size='large' status='basic' onPress={() => launchImageLibrary({}, (test)=>{console.log(test)})}>
              Галерея
            </Button>
            <Button appearance='ghost' size='large' status='basic' onPress={() => launchCamera({}, (test)=>{console.log(test)})}>
              Сделать фото
            </Button>
            <Button appearance='ghost' size='large' status='basic' onPress={() => alert('Логика удаления фото')}>
              Удалить фото
            </Button>
            <Button appearance='ghost' size='large' status='basic' onPress={() => setVisible(false)}>
              Закрыть
            </Button>
          </Card>
        </Modal>
    );
}

export default PhotoModal;
