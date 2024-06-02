import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { HP, WP } from '@/utils/helpers'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import AnimatedView, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import { AntDesign } from '@expo/vector-icons';
const { height: SCREEN_HEIGHT } = Dimensions.get("window")

type Props = { initialHeight: number, setInitialHeight: any, children?: React.ReactNode }

const maxTranslateY = -SCREEN_HEIGHT + 50
const BottomSheet = ({ initialHeight = 50, setInitialHeight, children }: Props) => {
    const translateY = useSharedValue(0)
    const context = useSharedValue({ y: 0 })

    const gesture = Gesture.Pan().onStart(() => {
        context.value = { y: translateY.value }
    }).onUpdate((event) => {

        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(translateY.value, maxTranslateY)

    }).onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 8) {
            translateY.value = withSpring(50)
        } else if (translateY.value < -SCREEN_HEIGHT / 2) {
            translateY.value = withSpring(-SCREEN_HEIGHT + 60)
        }
    })
    useEffect(() => {
        translateY.value = withSpring(initialHeight)
    }, [initialHeight])

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(translateY.value, [maxTranslateY + 50, maxTranslateY], [25, 0], Extrapolation.CLAMP)
        return {
            borderRadius,
            transform: [{ translateY: translateY.value }]
        }
    })

    return (

        <GestureDetector gesture={gesture} >
            <AnimatedView.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
                {/* <View style={styles.line}></View> */}
                <View className='flex-row justify-end pr-5 pt-3'>
                    <AntDesign onPress={() => setInitialHeight(50)} name="close" size={HP(3.5)} color="#808080" />
                </View>
                {children}
            </AnimatedView.View>
        </GestureDetector>
    )
}

export default BottomSheet

const styles = StyleSheet.create({
    bottomSheetContainer: {
        backgroundColor: "white",
        height: SCREEN_HEIGHT,
        borderTopColor: "#EEEEEE",
        borderTopWidth: 1,
        position: "absolute",
        width: WP(100),
        top: SCREEN_HEIGHT,
        borderRadius: 25
    },
    line: {
        width: WP(20),
        height: HP(0.5),
        alignSelf: "center",
        borderRadius: 25,
        marginTop: HP(2),
        backgroundColor: "gray"
    }
})