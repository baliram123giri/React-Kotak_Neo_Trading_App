import { View, Text, Image } from 'react-native'
import React from 'react'
import { HP } from '@/utils/helpers'

type Props = {
    sourse: any,
    aspects: number,
}

const MyImage = ({ aspects, sourse }: Props) => {
    return (
        <View style={{ height: HP(aspects), width: HP(aspects) }}>
            <Image style={{ objectFit: "contain", width: "100%", height: "100%" }} source={sourse} />
        </View>
    )
}

export default MyImage