import { View, Text } from 'react-native'
import React from 'react'
import { HP } from '@/utils/helpers'
import { darkGreen } from '@/constants/Colors'

type Props = {
    title: string
    amount: number,
    percent: number,
    points: number,
    isNagative: boolean

}

const MarketIndices = ({ amount, isNagative, points, title, percent }: Props) => {
    return (
        <View style={{ width: HP(19), height: HP(12), gap: 5, marginTop: HP(0.5) }} className='bg-white shadow-md  shadow-blue-500 ml-2 rounded-xl p-3'>
            <Text style={{ fontSize: HP(1.8), fontWeight: 600 }} className='text-neutral-600'>{title}</Text>
            <Text style={{ fontSize: HP(1.9), fontWeight: 600 }}>{points.toFixed(2)}</Text>
            <Text style={{ fontSize: HP(1.8), fontWeight: 600, color: isNagative ? "red" : darkGreen }}>{isNagative ? "-" : "+"}{amount.toFixed(2)} ({isNagative ? "-" : "+"}{percent.toFixed(2)}%)</Text>
        </View>
    )
}

export default MarketIndices