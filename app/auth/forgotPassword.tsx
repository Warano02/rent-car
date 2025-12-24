//Login page 
import AuthHeader from '@/components/auth/AuthHeader';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

const ForgotPassword = () => {
  const router = useRouter()
  return (
    <ScrollView className='flex-1 px-6 pt-8'>
      <AuthHeader/>

      <View className='my-4 flex-row justify-center'>
        <Text className='text-black text-3xl font-semibold'>Reset your password</Text>
      </View>

      <View className='my-6'>
        <Text className='text-xl text-gray text-center'>
          {"Enter the email address associated with your account and  we'll send you a code and  link  to reset your password."}
        </Text>
      </View>


      <View className='gap-2'>
        <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
          <TextInput placeholder='Email' className='font-semibold text-[16px] flex-1 text-black' />
        </View>
      </View>

      <View className='my-6 gap-2'>
        {/* @ts-ignore n */}
        <Pressable className="bg-button rounded-full items-center justify-center p-4" onPress={() => router.push("/auth/verifications")}>
          <Text className="text-white font-semibold text-xl">
            Continue
          </Text>
        </Pressable>

        <View className='mt-6 flex-row gap-2 justify-center'>
          <Text className='text-[17px] text-center text-secondary'>Return </Text>
          <Link href={"/auth"} className='text-[17px] text-center font-bold '>to Sign in</Link>
        </View>
      </View>


      <View className='mt-40 flex-row gap-2 justify-center'>
        <Text className='text-[17px] text-center text-secondary'>Create a</Text>
        <Link href={"/auth/signup"} className='text-[17px] text-center font-bold '>New account</Link>
      </View>
    </ScrollView>
  )
}

const Selector = () => {
  return <View>

  </View>
}

export default ForgotPassword