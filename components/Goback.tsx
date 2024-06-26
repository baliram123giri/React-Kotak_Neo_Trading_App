import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { darkBlue } from '@/constants/Colors';

type Props = {}

const Goback = (props: Props) => {
    const router = useRouter()

    return (
        <View>
            <TouchableOpacity onPress={router.back}>
                <Ionicons name="arrow-back" size={24} color={darkBlue} />
            </TouchableOpacity>
        </View>
    )
}

export default Goback