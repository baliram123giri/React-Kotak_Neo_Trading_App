import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { HP } from '@/utils/helpers'
import { darkGreen } from '@/constants/Colors'

type Props = {
    data: { company: string, percent: number, amount: number, isNagative?: boolean }[]
}

const ShareList = ({ data }: Props) => {
    return (
        <ScrollView  >
            {data.map(({ amount, company, percent, isNagative }, index) => <View key={index} className='flex-row justify-between items-center px-4 border-b border-neutral-200/50' style={{ height: HP(8) }}>
                <Text>{company.toUpperCase()}</Text>
                <View>
                    <Text style={{ fontSize: HP(1.8) }} className='text-right'>
                        {amount.toFixed(2)}
                    </Text>
                    <Text style={{ fontSize: HP(1.8), fontWeight: 600, color: isNagative ? "red" : darkGreen }}>{isNagative ? "-" : "+"}{amount.toFixed(2)} ({isNagative ? "-" : "+"}{percent.toFixed(2)}%)</Text>
                </View>
            </View>)}
        </ScrollView>
    )
}

export default ShareList