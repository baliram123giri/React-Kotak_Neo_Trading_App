import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { HP, WP } from '@/utils/helpers'
import { FontAwesome5 } from '@expo/vector-icons';
import { darkBlue, myColor } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


type Props = {}

const Logo = (props: Props) => {
  const { navigate } = useRouter()

  //redirect
  function OtpPageRedirect() {
    navigate("/login-otp")
  }
  function forgetRedirect() {
    navigate("/forget-pin")
  }

  return (
    <View className='flex-1 justify-between bg-white' style={{ paddingHorizontal: HP(3.5), paddingBottom: HP(3.5) }}>
      <View>
        <Text style={{ fontSize: HP(1.8) }} className='text-neutral-500 font-medium'>
          Welcome Back
        </Text>
        {/* //from  */}
        <View className='border border-neutral-200 bg-white rounded-xl' style={{ height: HP(7.5), marginTop: HP(4) }}>
          <TextInput keyboardType="number-pad" style={{ fontSize: HP(2) }} placeholder='Enter 6 digit M-PIN ' className='h-full placeholder:text-black   placeholder:font-semibold px-2 border-none outline-none' />
        </View>

        <View style={{ marginTop: HP(1.8) }} className='flex-row justify-between'>
          <TouchableOpacity onPress={forgetRedirect}>
            <Text style={{ fontSize: HP(1.8) }} className='text-blue-900 font-medium'>Forget M-PIN?</Text>
          </TouchableOpacity>
          <View className='flex-row items-center gap-1'>
            <FontAwesome5 name="user-plus" size={HP(2.3)} color={darkBlue} />
            <Text style={{ fontSize: HP(1.8) }} className='text-blue-900  font-medium'>Add Account</Text>
          </View>
        </View>
      </View>

      {/* //Login with figerprint or OTP */}
      <View>
        <TouchableOpacity style={{ ...myColor.light, height: HP(7), gap: WP(2) }} className='flex-row items-center justify-center rounded-xl'>
          <MaterialIcons name="fingerprint" size={HP(2.8)} color={darkBlue} />
          <Text style={{ fontSize: HP(2), color: darkBlue }} className='font-medium'>Login with fingerprint</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={OtpPageRedirect} style={{ height: HP(7), gap: WP(2) }} className='flex-row items-center justify-center rounded-xl'>
          <Text style={{ fontSize: HP(2), color: darkBlue }} className='font-medium'>Enter With OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Logo