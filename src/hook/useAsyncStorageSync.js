import React, {useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

/**
 * Save and get data from storage (cached sync)
 * Value can not be null
 *
 * @param key
 * @param defaultValue
 * @returns {[string, function, boolean, string]}
 */
const useAsyncStorageSync = (key, defaultValue) => {
    const [syncValue, setSyncValue] = useState(defaultValue)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const{getItem, setItem} = useAsyncStorage('@' + key)

    useEffect(() => {
        getItem().then(value => {
            if(value === null) {
                value = syncValue
            }

            setSyncValue(value)
            setIsLoading(false)
        }).catch(error => {
            setError(error)
            setIsLoading(false)
        })
    }, []);


    const setValue = (value) => {
        setItem(value).catch(e => {
            setSyncValue(syncValue)
            alert(e)
        })
        setSyncValue(value)
    }

    return [syncValue, setValue, isLoading, error]
}

export default useAsyncStorageSync;
