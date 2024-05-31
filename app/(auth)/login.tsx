import { View, Text, Platform, Image, TextInput } from 'react-native'
import React from 'react'
import { HP } from '@/utils/helpers'
import MyImage from '@/components/MyImg/MyImage'
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {}

const Logo = (props: Props) => {

  return (
    <View className='flex-1 bg-white' style={{paddingVertical:HP(2.5), paddingHorizontal:HP(3.5)}}>
      <MyImage aspects={8} sourse={require(`@/assets/images/icon.png`)} />
      {/* //greetings  */}
      <View className='mt-3 flex-row items-center'>
        <MyImage aspects={5} sourse={require(`@/assets/images/hand.jpg`)} />
        <Text style={{ fontSize: HP(3) }} className='text-blue-900 font-semibold'>HI BALIRAM</Text>
      </View>
      <Text style={{ fontSize: HP(1.8) }} className='text-neutral-600'>
        Welcome Back 
      </Text>
      {/* //from  */}
      <View className='border border-neutral-200 bg-white rounded-xl' style={{ height: HP(6.2), marginTop: HP(4) }}>
        <TextInput keyboardType="number-pad" style={{ fontSize: HP(2) }} placeholder='Enter 6 digit M-PIN ' className='h-full placeholder:text-black  placeholder:font-semibold px-2 border-none outline-none' />
      </View>
      <View style={{ marginTop: HP(1) }} className='flex-row justify-between'>
        <Text style={{ fontSize: HP(1.8) }} className='text-blue-900 font-medium'>Forget M-PIN?</Text>
        <View className='flex-row items-center gap-1'>
          <FontAwesome5 name="user-plus"   size={HP(2.3)} color="#2C4E80" />
          <Text style={{ fontSize: HP(1.8) }} className='text-blue-900  font-medium'>Add Account</Text>
        </View>
      </View>
    </View>
  )
}

export default Logo