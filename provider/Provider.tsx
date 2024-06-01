import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from "expo-font"
import * as SplashScreen from 'expo-splash-screen';
type Props = {}
SplashScreen.preventAutoHideAsync();

const Provider = (props: Props) => {
    const [fontsLoaded, fontError] = useFonts({
        'Inter-normal': require('@/assets/fonts/Inter.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View onLayout={onLayoutRootView}>
            <Text>Provider</Text>
        </View>
    )
}

export default Provider