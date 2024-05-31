import { View, Text, Platform } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Goback from '../Goback'
import { HP } from '@/utils/helpers'

type Props = {}
const ios = Platform.OS === 'ios'
const LoginHeader = (props: Props) => {
    const { top } = useSafeAreaInsets()
    return (
        <View style={{ paddingTop: ios ? top : top + 10, paddingHorizontal: HP(1), paddingBottom: HP(1) }}>
            <Goback />
        </View>
    )
}

export default LoginHeader