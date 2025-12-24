//Login page 
import assets from '@/assets';
import AuthHeader from '@/components/auth/AuthHeader';
import Socials from '@/components/auth/Socials';
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
const Login = () => {
  const { eye } = assets;
  const [checked, setChecked] = useState(false);
  const [isSecure, setIsSecure] = useState(true);
  return (
    <ScrollView className='flex-1 px-6 pt-8'>
      <AuthHeader />
      <View className='my-4'>
        <Text className='text-black text-3xl font-semibold'>Welcome Back</Text>
        <Text className='text-black text-3xl font-semibold'>Ready to hit the road.</Text>
      </View>

      <View className='gap-2'>
        <View className='border border-border bg-background px-2 mt-2 flex-row items-center justify-between h-14 pr-4 rounded-xl'>
          <TextInput inputMode='text' autoComplete="email" placeholder='Email/Phone number' className='font-semibold text-[14px] flex-1' />
        </View>
       
        <View className='border border-border bg-background mt-2 flex-row items-center justify-between h-14 pr-4 rounded-xl'>
          <TextInput className='font-semibold text-[14px] text-black flex-1' secureTextEntry={isSecure} />
          <Pressable onPress={() => setIsSecure((prev) => !prev)}>
            <Image source={eye} resizeMode="contain" className='h-8 w-8' />
          </Pressable>
        </View>
      </View>

      <View className='flex-row justify-between items-center my-4'>
        <View className='flex-row gap-2'>
          <Pressable
            onPress={() => setChecked(!checked)}
            className='bg-checkBoxBg h-7 w-7 rounded-lg'>
            {checked && (
              <MaterialIcons name="check" size={26} color="white" />
            )}
          </Pressable>
          <Text className='text-[15px] text-black '>Remember Me</Text>
        </View>
        <Link href={"./auth/forgotPassword"} className='text-[15px] text-black'>Forgot Password</Link>
      </View>

      {/* List of pressable to controol form */}
      <View className='mb-6 gap-2'>
        <Pressable className="bg-button rounded-full items-center justify-center p-4">
          <Text className="text-white font-semibold text-xl">
            Log In
          </Text>
        </Pressable>
        {/* <Button onPress={() => router.push("/auth/signup")} className="bg-outlineButtonBg border border-button rounded-full items-center justify-center p-4">
          <Text className="text-black  font-semibold text-xl">
            Sign Up
          </Text>
        </Button> */}

      </View>

      <View className='flex-row items-center justify-between'>
        <View className='h-1 flex-1 bg-divider my-3' />
        <Text className='text-[12px] text-center w-6 font-semibold text-placeholder'>Or</Text>
        <View className='h-1 flex-1 bg-divider my-3' />
      </View>

      <Socials action="Login" />

      <View className='mt-6 flex-row gap-2 justify-center'>
        <Text className='text-[17px] text-center text-secondary'>{"Don't have an account ?"}</Text>
        <Link href={"/auth/signup"} className='text-[17px] text-center font-bold underline'>SignUp</Link>
      </View>
    </ScrollView>
  )
}


export default Login