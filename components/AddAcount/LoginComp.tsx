import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { HP } from '@/utils/helpers'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

type Props = {}

const LoginComp = (props: Props) => {
  const [showPass, setShowPass] = useState<boolean>(false)
  return (
    <View>
      {/* //from  */}
      <View className='border border-neutral-200 bg-white rounded-xl' style={{ height: HP(6), marginTop: HP(2) }}>
        <TextInput keyboardType="number-pad" style={{ fontSize: HP(2) }} placeholder='Mobile number' className='h-full placeholder:text-black   placeholder:font-normal px-4 border-none outline-none' />
      </View>
      <View className='border border-neutral-200 bg-white rounded-xl flex-row justify-between pr-2 items-center' style={{ height: HP(6), marginTop: HP(1) }}>
        <TextInput secureTextEntry={!showPass} style={{ fontSize: HP(2) }} placeholder='Password' className='h-full placeholder:text-black   placeholder:font-normal px-4 border-none outline-none  flex-1' />
        <View>
          {!showPass ? <SimpleLineIcons onPress={() => setShowPass(true)} name="eye" size={24} color="#808080" /> : <Ionicons onPress={() => setShowPass(false)} name="eye-off-outline" size={24} color="#808080" />}
        </View>
      </View>
    </View>
  )
}

export default LoginComp