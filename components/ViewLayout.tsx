import { View } from 'react-native'
import React from 'react'
import { HP } from '@/utils/helpers'


type Props = {
    children: React.ReactNode
}

const ViewLayout = ({ children }: Props) => {
    return (
        <View style={{ paddingHorizontal: HP(2) }}>{children}</View>
    )
}

export default ViewLayout