
import React from 'react'
import { Stack } from 'expo-router'
import { Text, View } from 'react-native'
import Goback from '@/components/Goback'
import LoginHeader from '@/components/Headers/LoginHeader'


type Props = {}

const _layout = (props: Props) => {

    return (
        <Stack>
            <Stack.Screen name="login" options={{ header: () => <LoginHeader /> }} />
        </Stack>
    )
}

export default _layout