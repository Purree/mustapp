import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Button, Text} from '@ui-kitten/components';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {numberValidator, useStateWithValidation} from "../../hook/useStateWithValidation";

const CELL_COUNT = 6;


const SMSCodeConformingField = ({onSubmit}) => {
    const [value, setValue] = useStateWithValidation('', numberValidator);
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="numeric"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <View
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[styles.cellRoot, isFocused && styles.focusCell]}>
                        <Text style={styles.cellText}>
                            {symbol || (isFocused ? <Cursor/> : null)}
                        </Text>
                    </View>
                )}
            />
            <Button disabled={value.length<6} status='basic' style={styles.continueButton} onPress={()=>onSubmit(value)}>Продолжить</Button>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    root: {padding: 20},
    codeFieldRoot: {
        width: 280,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cellRoot: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    cellText: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
    },
    continueButton: {
        marginTop: 30
    }
});

export default SMSCodeConformingField;