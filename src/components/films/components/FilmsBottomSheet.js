import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Icon, Input, Layout, Text, useTheme } from '@ui-kitten/components';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetFlatList
} from '@gorhom/bottom-sheet';
import { Review } from './SheetComponents/Review'
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";


const CustomBackdrop = ({ animatedIndex, style }) => {
    // animated variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            animatedIndex.value,
            [1, 1],
            [1, 1],
            Extrapolate.CLAMP
        ),
    }));

    // styles
    const containerStyle = useMemo(
        () => [
            style,
            {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            containerAnimatedStyle,
        ],
        [style, containerAnimatedStyle]
    );

    return <Animated.View style={containerStyle} />;
};

const FilmsBottomSheet = ( { bottomComponent, bottomSheetModalRef } ) => {

    const themeStyles = useTheme()
    const backgroundColor = themeStyles[ 'background-basic-color-2' ]

    const snapPoints = useMemo( () => ['45%', '45%'], [] );
    return (
        <BottomSheetModalProvider>
            <View>
                <BottomSheetModal
                    enablePanDownToClose={true}
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    detached={true}
                    backdropComponent={CustomBackdrop}

                    backgroundStyle={{ backgroundColor: backgroundColor }}
                    handleIndicatorStyle={{ backgroundColor: themeStyles[ 'background-alternative-color-2' ] }}
                >
                    <Layout style={[styles.contentContainer, { backgroundColor: backgroundColor }]}>
                        {bottomComponent}
                    </Layout>
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    );
};

const styles = StyleSheet.create( {
    contentContainer: {
        marginHorizontal: 15
    }
} );

export default FilmsBottomSheet;