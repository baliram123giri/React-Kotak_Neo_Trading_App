import { View, Text } from 'react-native'
import React from 'react'
import { HP, WP } from '@/utils/helpers'
import AnimatedText from './AnimatedText'
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
type Props = {
    title: string
    isNew?: boolean
    description: string[]
}

const InvesmentProducts = ({ description, title, isNew = false }: Props) => {
    return (
        <View style={{ justifyContent: "space-between" }} className='bg-white  w-full my-2 rounded-xl shadow-sm shadow-blue-300 flex-row '>
            <View className='pl-3 py-4 w-[65%]' >
                <Text style={{ fontSize: HP(2.2), fontWeight: 600 }}>{title}</Text>
                <AnimatedText messages={description} />

            </View>
            <View className={`h-full w-[33%] rounded-l-full flex-row items-center justify-center  ${title === "Mutual funds" ? "bg-green-300/20" : title === "Stockcase" ? "bg-red-300/20":  title === "IPO"  ? "bg-[#492E87]/20": "bg-blue-300/20"} rounded-xl `}>
                {title === "Mutual funds" ? <MaterialIcons name="savings" size={HP(4)} color="#40A578" /> : title === "Stockcase" ? <Octicons name="apps" size={HP(4)} color="#492E87" /> : title === "IPO" ? <AntDesign name="notification" size={HP(3.5)} color="#492E87"   /> :  <Fontisto name="shopping-basket" size={HP(3.5)} color="#492E87" />}
            </View>
        </View>
    )
}

export default InvesmentProducts