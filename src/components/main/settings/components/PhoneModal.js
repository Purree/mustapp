import React from 'react';
import {Button, Card, Modal} from '@ui-kitten/components';

const PhoneModal = ({navigation, visible, setVisible}) => {

    const changeNumberNavigate = () => {
        navigation.navigate('PhoneChange', {onSuccessfulVerification})
        setVisible(false)
    }

    const onSuccessfulVerification = () => {
        navigation.navigate('Settings')
        alert('Логика, типо номер успешно сменён')
    }


    return (
        <Modal
            visible={visible}
            backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)',}}
            onBackdropPress={() => setVisible(false)}>
            <Card disabled={true}>
                <Button appearance='ghost' size='large' status='basic' onPress={() => changeNumberNavigate()}>
                    Изменить номер
                </Button>
                <Button appearance='ghost' size='large' status='basic' onPress={() => alert('Логика удаления')}>
                    Удалить номер
                </Button>
                <Button appearance='ghost' size='large' status='basic' onPress={() => setVisible(false)}>
                    Закрыть
                </Button>
            </Card>
        </Modal>
    );
}

export default PhoneModal;
