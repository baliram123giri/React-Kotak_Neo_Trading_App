import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { HP, WP } from '@/utils/helpers'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { Colors, darkBlue,lighGray } from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';
type Props = {}

export const DashboardSearch = (props: Props) => {
    const { top } = useSafeAreaInsets()
    return (
        <View style={{ height: HP(10), marginTop: top, paddingHorizontal: WP(4.5) }} className='shadow-xl shadow-blue-500 flex-row items-center bg-white justify-between'>
            <View style={{ width: WP(57) }} className='border-neutral-200 border pl-1 rounded-xl h-[60%] flex-row items-center justify-between'>
                <Ionicons name="search" size={HP(3)} color={darkBlue} />
                <TextInput placeholder='Search Shares' className='h-full flex-1 mx-2' />
                <TouchableOpacity className='rounded-xl flex-row justify-center items-center' style={{ height: HP(5.5), width: HP(5.5), backgroundColor: Colors.light.background }}>
                    <Text style={{ fontSize: HP(2.3), color: darkBlue }} className='font-semibold'>BG</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity className='rounded-xl flex-row justify-center items-center p-1 px-4' style={{ height: HP(5.5), backgroundColor: lighGray, gap:WP(1.5) }}>
                <Entypo name="wallet" size={HP(3)} color={darkBlue} />
                <Text style={{ fontSize: HP(2), color: darkBlue }} className='font-semibold'>Funds</Text>
            </TouchableOpacity>
        </View>
    )
}

