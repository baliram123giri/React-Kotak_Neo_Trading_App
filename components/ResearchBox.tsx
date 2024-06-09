import { View, Text } from 'react-native'
import React from 'react'
import { HP, WP } from '@/utils/helpers'
import { MaterialCommunityIcons } from '@expo/vector-icons';
type Props = {
    title: string,
}

const ResearchBox = ({ title }: Props) => {
    return (
        <View style={{gap:WP(2)}} className='bg-white  w-full my-2 justify-center items-center rounded-xl shadow-sm shadow-blue-300 flex-row '>
            <MaterialCommunityIcons name="file-document-edit" size={24} color="#EF9C66" />
            <View className=' py-4' >
                <Text style={{ fontSize: HP(2.2), fontWeight: 600 }}>{title}</Text>
            </View>
        </View>
    )
}

export default ResearchBox