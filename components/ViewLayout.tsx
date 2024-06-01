import { View } from 'react-native'
import React from 'react'
import { HP } from '@/utils/helpers'


type Props = {
    children: React.ReactNode
}

const ViewLayout = ({ children }: Props) => {
    return (
        <View style={{ paddingHorizontal: HP(3.5), paddingBottom: HP(3.5) }}>{children}</View>
    )
}

export default ViewLayout