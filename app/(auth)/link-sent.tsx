import { View, Text } from 'react-native'
import React from 'react'
import MyImage from '@/components/MyImg/MyImage'
import { HP, WP } from '@/utils/helpers'
import { LinearGradient } from 'expo-linear-gradient';
import Goback from '@/components/Goback';
type Props = {}

const LinkSent = (props: Props) => {
    return (
        <View className='flex-1  justify-center items-center'>
            <LinearGradient
                // Background Linear Gradient
                colors={['#E3FEF7', 'transparent']}
                style={{ width: WP(100), height: HP(100) }}
                className=' flex-1'
            >
                <View  style={{marginTop:HP(8), marginLeft:WP(3)}}>
                    <Goback />
                </View>
                <View className='justify-center items-center flex-1'>
                    <MyImage aspects={15} sourse={require("@/assets/images/linkSent.png")} />
                    <View>
                        <Text style={{ fontSize: HP(2.5) }} className='text-green-600 text-center'>Link Sent</Text>
                        <View style={{ width: WP(70) }}>
                            <Text style={{ fontSize: HP(1.8), lineHeight: HP(2.2) }} className='text-neutral-500 font-medium text-center'>
                                We have sent a link to reset your M-PIN to your registered email ID
                            </Text>
                            <Text style={{ fontSize: HP(1.8), lineHeight: HP(2.2) }} className='text-neutral-500 font-medium text-center'>
                                (GI*******@GMAIL.COM)
                            </Text>
                        </View>
                    </View>
                </View>

            </LinearGradient>
        </View>
    )
}

export default LinkSent