import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { HP, WP } from '@/utils/helpers'
import { darkBlue } from '@/constants/Colors'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
type Props = {}

const UserSetup = (props: Props) => {
    return (
        <View>
            <View style={{ paddingHorizontal: WP(3.5) }}>
                <Text style={{ color: darkBlue, fontSize: HP(1.9) }} className='font-semibold'>Other account on this device</Text>
                {/* //user  */}
                <View style={{ marginTop: HP(2) }} className='flex-row items-center justify-between'>
                    <View style={{ gap: WP(2) }} className='flex-row  items-center'>
                        <TouchableOpacity style={{ width: HP(5), height: HP(5) }} className='bg-red-100 rounded-full flex justify-center items-center' >
                            <FontAwesome5 name="user-alt" size={HP(2.2)} color="red" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: HP(2) }}>BALIRAM</Text>
                    </View>
                    <TouchableOpacity >
                        <MaterialCommunityIcons name="close-circle" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: HP(0.1), width: WP(100), marginTop: HP(2) }} className='bg-neutral-200'></View>
            <TouchableOpacity >
                <View
                    className="flex-row  rounded-md items-center gap-1"
                    style={{ marginTop:HP(2), paddingHorizontal: WP(5) }}
                >
                    <FontAwesome5
                        name="user-plus"
                        size={HP(1.8)}
                        color={darkBlue}
                    />
                    <Text
                        style={{ fontSize: HP(1.8) }}
                        className="text-blue-900  font-medium"
                    >
                        Add another account
                    </Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default UserSetup