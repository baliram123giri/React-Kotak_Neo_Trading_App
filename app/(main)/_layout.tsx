
import React from 'react'
import { Stack } from 'expo-router'
import { DashboardSearch } from '@/components/Search/DashboardSearch'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <Stack>
             <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* <Stack.Screen name='dashboard' options={{ header: () => <DashboardSearch /> }} /> */}
        </Stack>
    )
}

export default MainLayout