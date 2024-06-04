import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { HP, WP } from '@/utils/helpers'
import ViewLayout from '@/components/ViewLayout'
import { darkBlue, darkGreen, gray } from '@/constants/Colors'

import { Colors } from 'react-native/Libraries/NewAppScreen'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <ScrollView style={{ paddingVertical: HP(3) }}>
            <ViewLayout>
                <Text style={{ fontSize: HP(2.3), color: gray }} >Investment Summary</Text>
                <View style={{ marginTop: HP(2), gap:WP(3) }} className='bg-white rounded-xl p-3 shadow-sm shadow-black flex-row items-center'>
                    <TouchableOpacity className='rounded-xl flex-row justify-center items-center' style={{ height: HP(4.5), width: HP(4.5), backgroundColor: Colors.light.background }}>
                        <Text style={{ fontSize: HP(2.3), color: darkBlue }} className='font-semibold'>BG</Text>
                    </TouchableOpacity>
                    <View>
                        <View style={{ gap: WP(2) }} className='flex-row items-center'>
                            <Text style={{ fontSize: HP(1.8) }}>Equity</Text>
                            <Text style={{ fontSize: HP(2.1), fontWeight: 600 }}>1.60 lakhs</Text>
                        </View>
                        <View style={{ gap: WP(2) }} className='flex-row items-center'>
                            <Text style={{ fontSize: HP(1.8) }}>Today's P/L</Text>
                            <Text style={{ fontSize: HP(2.1), fontWeight: 600, color: darkGreen }}>+4,619 (+2.9%)</Text>
                        </View>
                    </View>
                </View>
            </ViewLayout>
        </ScrollView>
    )
}

export default Dashboard