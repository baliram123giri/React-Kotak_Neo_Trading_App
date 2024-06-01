import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { HP } from '@/utils/helpers'
import { useRouter } from 'expo-router'


type Props = {}

const ForgetPin = (props: Props) => {
    const { navigate } = useRouter()
    function LinkSendHandler() {
        navigate("/link-sent")
    }
    return (
        <View className='flex-1 bg-white justify-between' style={{ paddingHorizontal: HP(3.5), paddingBottom: HP(3.5) }}>
            <View>
                <Text style={{ fontSize: HP(3) }} className='text-blue-900 font-semibold'>Let's reset your M-PIN</Text>
                <Text style={{ fontSize: HP(2) }} className='text-neutral-600 '>Please enter your credentials for verification</Text>

                {/* //inputs  */}
                <View className='border border-neutral-200 bg-white rounded-xl' style={{ height: HP(7.5), marginTop: HP(4) }}>
                    <TextInput keyboardType="number-pad" style={{ fontSize: HP(2) }} placeholder='Registered mobile number ' className='h-full placeholder:text-black   placeholder:font-semibold px-2 border-none outline-none' />
                </View>
                <View className='border border-neutral-200 bg-white rounded-xl' style={{ height: HP(7.5), marginTop: HP(2) }}>
                    <TextInput style={{ fontSize: HP(2) }} placeholder='PAN ' className='h-full placeholder:text-black   placeholder:font-semibold px-2 border-none outline-none' />
                </View>
            </View>

            <TouchableOpacity onPress={LinkSendHandler} style={{ height: HP(7) }} className='flex-row items-center justify-center rounded-xl bg-slate-200'>
                <Text style={{ fontSize: HP(2.5), }} className='font-medium text-neutral-600'>Proceed</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgetPin