import React from "react";
import { Stack, useRouter } from "expo-router";
import { Platform, TouchableOpacity, View } from "react-native";
import LoginHeader from "@/components/Headers/LoginHeader";
import { HP } from "@/utils/helpers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { darkBlue } from "@/constants/Colors";

type Props = {};
const ios = Platform.OS === "ios";
const _layout = (props: Props) => {
    const { top } = useSafeAreaInsets();
    const { back } = useRouter();
    function GobckHandler() {
        return <View
            style={{
                paddingTop: ios ? top : top + 10,
                paddingHorizontal: HP(1.8),
                paddingBottom: HP(2),
            }}
        >
            <TouchableOpacity onPress={back}>
                <Ionicons name="arrow-back" size={24} color={darkBlue} />
            </TouchableOpacity>
        </View>
    }
    return (
        <Stack >
            <Stack.Screen name="login" options={{ header: () => <LoginHeader /> }} />
            <Stack.Screen
                name="login-otp"
                options={{ header: () => <LoginHeader /> }}
            />
            <Stack.Screen
                name="forget-pin"
                options={{
                    header: () => <GobckHandler />
                }}
            />
            <Stack.Screen
                name="link-sent"
                options={{
                    header: () => <GobckHandler />
                }}
            />
        </Stack>
    );
};

export default _layout;
