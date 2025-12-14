//Login page 
import assets from '@/assets';
import AuthHeader from '@/components/auth/AuthHeader';
import Socials from '@/components/auth/Socials';
import { Button } from '@/components/ui/button';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

const Signup = () => {
  const {  eye } = assets;
 
  const [isSecure, setIsSecure] = useState(true);


  return (
    <ScrollView className='flex-1 px-6 pt-8'>
      <AuthHeader />
      <View className='my-4 flex-row justify-center'>
        <Text className='text-black text-3xl font-semibold'>SignUp</Text>
      </View>

      <View className='gap-2'>
        <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
          <TextInput placeholder='Full Name' className='font-semibold text-[16px] flex-1 text-black' />
        </View>
        <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
          <TextInput placeholder='Email/Phone number' className='font-semibold text-[16px] flex-1 text-black' />
        </View>
        <View className='border border-border bg-background mt-2 flex-row items-center justify-between h-14 pr-4 rounded-xl'>
          <TextInput className='font-semibold text-[16px] text-black flex-1' secureTextEntry={isSecure} />
          <Pressable onPress={() => setIsSecure((prev) => !prev)}>
            <Image source={eye} resizeMode="contain" className='h-6 w-6' />
          </Pressable>
        </View>
        <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
          <TextInput placeholder='Country ' className='font-semibold text-[16px] flex-1 text-black' />
        </View>

      </View>


      {/* List of pressable to controol form */}
      <View className='my-6 gap-2'>
        <Button className="bg-button rounded-full items-center justify-center p-4">
          <Text className="text-white font-semibold text-xl">
            SignUp
          </Text>
        </Button>
        {/* <Button onPress={() => router.push("/auth")} className="bg-outlineButtonBg border border-button rounded-full items-center justify-center p-4">
          <Text className="text-black  font-semibold text-xl">
            Login
          </Text>
        </Button> */}

      </View>

      <View className='flex-row items-center justify-between mb-1'>
        <View className='h-1 flex-1 bg-divider ' />
        <Text className='text-[12px] text-center w-6 font-semibold text-placeholder'>Or</Text>
        <View className='h-1 flex-1 bg-divider' />
      </View>

      <Socials action="Signup" />

      <View className='mt-6 flex-row gap-2 justify-center'>
        <Text className='text-[17px] text-center text-secondary'>Already Have an account ?</Text>
        <Link href={"/auth"} className='text-[17px] text-center font-bold underline'>Login</Link>
      </View>
    </ScrollView>
  )
}


export default Signup