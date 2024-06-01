import { View, Text, Platform } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Goback from '../Goback'
import { HP } from '@/utils/helpers'
import MyImage from '../MyImg/MyImage'

type Props = {}
const ios = Platform.OS === 'ios'
const LoginHeader = (props: Props) => {
    const { top } = useSafeAreaInsets()
    return (
        <View style={{ paddingTop: ios ? top : top + 10, paddingHorizontal: HP(1.8) }}>
            <View style={{ marginBottom: HP(2.3) }}>
                <Goback />
            </View>
            <MyImage aspects={8} sourse={require(`@/assets/images/icon.png`)} />
            {/* //greetings  */}
            <View className='mt-3 flex-row items-center'>
                <MyImage aspects={5} sourse={require(`@/assets/images/hand.jpg`)} />
                <Text style={{ fontSize: HP(3) }} className='text-blue-900 font-semibold'>HI BALIRAM</Text>
            </View>

          
        </View>
    )
}

export default LoginHeader