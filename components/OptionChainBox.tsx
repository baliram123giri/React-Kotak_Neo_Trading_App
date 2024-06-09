import { View, Text } from 'react-native'
import React from 'react'
import { HP } from '@/utils/helpers'

type Props = {
    title: string,
    isExpiry?: boolean
}

const OptionChainBox = ({ title, isExpiry = false }: Props) => {
    return (
        <View style={{ gap: 5, padding: HP(1.8), marginTop: HP(1.8) }} className='bg-white shadow-md  shadow-blue-500 ml-2 rounded-md relative'>
            <Text style={{ fontSize: HP(1.9), fontWeight: 600 }} className='text-neutral-700'>{title}</Text>
            {isExpiry && <View className='absolute bg-orange-100 p-1 px-2 rounded-sm right-0 -top-2'  >
                <Text style={{ fontSize: HP(1.2), fontWeight: 600 }} className='text-red-400'>EXP</Text>
            </View>}
        </View>
    )
}

export default OptionChainBox