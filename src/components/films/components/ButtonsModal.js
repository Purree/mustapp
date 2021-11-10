import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';

const ButtonFactory = ({item}) => {
    return (
        <Button appearance='ghost' status='basic' onPress={item.onPress}>{item.label}</Button>
    )
}

const ButtonsModal = ( { visible, setVisible, buttons } ) => {
    return (
        <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible( false )}>
            <Card style={styles.buttonsCard} disabled={true}>
                {buttons.map((item)=>{
                    return <ButtonFactory key={item.label} item={item}/>
                })}
                <Button appearance='ghost' status='basic' onPress={() => setVisible( false )}>
                    Закрыть
                </Button>
            </Card>
        </Modal>
    );
}

const styles = StyleSheet.create( {
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonsCard: {
        //
    }
} );

export default ButtonsModal;
