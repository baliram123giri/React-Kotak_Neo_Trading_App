import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LoginHeader from '@/components/Headers/LoginHeader'
import MyImage from '@/components/MyImg/MyImage'
import { HP, WP } from '@/utils/helpers'
import { LinearGradient } from 'expo-linear-gradient'
import Goback from '@/components/Goback'
import LoginComp from '@/components/AddAcount/LoginComp'
import LoginPan from '@/components/AddAcount/LoginPanCom'

type Props = {}

const AddAccount = (props: Props) => {
    const [loginType, setLoginType] = useState<string>("mobile")

    const ActivebtnClss = 'bg-white h-full rounded-xl w-1/2 flex-row justify-center items-center shadow-lg border border-neutral-300'
    const deActiveBtnClss = 'h-full rounded-xl w-1/2 flex-row justify-center items-center'
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#E3FEF7', 'transparent']}
            style={{ width: WP(100), height: HP(100) }}
            className='flex-1'
        >
            <View style={{ marginTop: HP(8), marginLeft: WP(3) }}>
                <Goback />
            </View>
            <View style={{ paddingHorizontal: WP(7.5), marginTop: HP(2.5) }}>
                <MyImage sourse={require("@/assets/images/icon.png")} aspects={8} />
                <Text style={{ fontSize: HP(3), marginTop: HP(1) }} className='text-blue-900 font-semibold'>Welcome to the new age of investing</Text>
                {/* //Toglle  */}
                <View className='bg-neutral-200/70 rounded-xl flex-row' style={{ height: HP(5), marginTop: HP(2) }}>
                    <TouchableOpacity onPress={() => setLoginType("mobile")} className={loginType === "mobile" ? ActivebtnClss : deActiveBtnClss}>
                        <Text style={{ fontSize: HP(1.8) }} className='font-semibold text-neutral-700'>
                            Login with mobile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setLoginType("Pan")} className={loginType !== "mobile" ? ActivebtnClss : deActiveBtnClss}>
                        <Text style={{ fontSize: HP(1.8) }} className='font-semibold text-neutral-600'>
                            Login with PAN
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* //types  */}
                {loginType === "mobile" ? <LoginComp /> :
                    <LoginPan />}
            </View>

        </LinearGradient>
    )
}

export default AddAccount