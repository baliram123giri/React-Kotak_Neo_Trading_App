import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { HP, WP } from '@/utils/helpers'
import { darkBlue } from '@/constants/Colors'
import { useRouter } from 'expo-router'


type Props = {}

const LoginOtp = (props: Props) => {
    const { navigate } = useRouter()

    //redirect
    function loginPageRedirect() {
        navigate("/login")
    }
    function inputHandler() {

    }
    return (
        <View className='flex-1 bg-white justify-between' style={{ paddingHorizontal: HP(3.5), paddingBottom: HP(3.5) }}>
            <View>
                <Text style={{ fontSize: HP(1.8), lineHeight: HP(2.3) }} className='text-neutral-500 font-medium'>
                    Welcome Back, enter the OTP sent to your registered number (***** **71) and email ID
                    (GI*******@GMAIL.COM)
                </Text>

                {/* //optp box  */}
                <View className='flex-row' style={{ gap: WP(2), marginTop: HP(6) }}>
                    <TextInput keyboardType='number-pad' className='border border-neutral-200 text-center flex-row justify-center items-center rounded-xl' style={{ height: HP(7), width: HP(7) }} />
                    <TextInput keyboardType='number-pad' className='border border-neutral-200 text-center flex-row justify-center items-center rounded-xl' style={{ height: HP(7), width: HP(7) }} />
                    <TextInput keyboardType='number-pad' className='border border-neutral-200 text-center flex-row justify-center items-center rounded-xl' style={{ height: HP(7), width: HP(7) }} />
                    <TextInput keyboardType='number-pad' className='border border-neutral-200 text-center flex-row justify-center items-center rounded-xl' style={{ height: HP(7), width: HP(7) }} />
                </View>
                {/* //reset  */}
                <View style={{ gap: WP(2), marginTop: HP(1.8) }} className='flex-row items-center'>
                    <Text style={{ fontSize: HP(1.8), lineHeight: HP(2.3) }} className='text-neutral-600 font-semibold'>
                        Didn't get an OTP?
                    </Text>
                    <Text style={{ fontSize: HP(1.8), lineHeight: HP(2.3) }} className='text-neutral-500 font-medium'>
                        Resend OTP
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={loginPageRedirect} style={{ height: HP(7), gap: WP(2) }} className='flex-row items-center justify-center rounded-xl'>
                <Text style={{ fontSize: HP(2), color: darkBlue }} className='font-medium'>Enter With M-PIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginOtp