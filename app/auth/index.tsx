//Login page 
import assets from '@/assets';
import { useApp } from '@/lib/hooks/useApp';
import { MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
const Login = () => {
  const { logo_black, eye } = assets;
  const { AppName } = useApp()
  const [checked, setChecked] = useState(false);
  const router = useRouter()
  return (
    <ScrollView className='flex-1 px-6 pt-8'>
      <View className='flex-row gap-4 items-center'>
        <Image source={logo_black} className='h-16 w-16' />
        <Text className='text-4xl font-bold text-black'>{AppName} </Text>
      </View>
      <View className='my-16'>
        <Text className='text-black text-3xl font-semibold'>Welcome Back</Text>
        <Text className='text-black text-3xl font-semibold'>Ready to hit the road.</Text>
      </View>

      <View className='gap-8'>
        <View className='border border-border bg-background px-2 mt-4 flex-row items-center justify-between h-14 pr-4 rounded-xl'>
          <TextInput placeholder='Email/Phone number' className='font-semibold text-xl flex-1' />
        </View>
        <View className='border border-border bg-background mt-4 flex-row items-center justify-between h-14 pr-4 rounded-xl'>
          <TextInput className='font-semibold text-2xl flex-1' />
          <Pressable>
            <Image source={eye} resizeMode="contain" className='h-8 w-8' />
          </Pressable>
        </View>
      </View>

      <View className='flex-row justify-between items-center my-6'>
        <View className='flex-row gap-2'>
          <Pressable
            onPress={() => setChecked(!checked)}
            className='bg-checkBoxBg h-7 w-7 rounded-lg'>
            {checked && (
              <MaterialIcons name="check" size={22} color="white" />
            )}
          </Pressable>
          <Text className='text-[15px] text-black '>Remember Me</Text>
        </View>
        <Link href={"./auth/forgotPassword"} className='text-[15px] text-black'>Forgot Password</Link>
      </View>

      <Pressable onPress={() => router.push("./auth/signup")} className="bg-button rounded-full items-center justify-center p-6 mb-8">
        <Text className="text-white font-semibold text-xl">
          Log In
        </Text>
      </Pressable>

      <View className='flex-row items-center justify-between'>
        <View className='h-1 flex-1 bg-divider my-3'/>
        <Text className='text-[12px] text-center w-6 font-semibold text-placeholder'>Or</Text>
        <View className='h-1 flex-1 bg-divider my-3'/>
      </View>
    </ScrollView>
  )
}

export default Login