import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { HP, WP } from '@/utils/helpers'
import { useRouter } from 'expo-router'


type Props = {}

const index = (props: Props) => {
    const router = useRouter()

    useEffect(() => {
        //redirect to the login page
        const redirectUrl = setTimeout(() => {
            router.navigate("/login")
        });
        return () => clearTimeout(redirectUrl)
    }, [])

    return (
        <View className='bg-white justify-center items-center flex-1 '>
            <View style={{ width: HP(30), height: WP(30) }} className='animate-bounce duration-1000'>
                <Image
                    style={{ objectFit: "contain", width: "100%", height: "100%" }}
                    source={require("@/assets/images/icon.png")}
                />
            </View>
        </View>
    )
}

export default index