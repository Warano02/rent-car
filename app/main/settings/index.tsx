import assets from '@/assets'
import Header from '@/components/Header'
import { EvilIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'

const EditProfile = () => {
  const router = useRouter()
  return (
    <View className='my-4 flex-1'>
      <Header title='Edit Profile' />

      <View className='px-4 gap-4'>

        <View className='gap-2 justify-center items-center'>

          <View className='flex-row relative' style={{ height: 85, width: 85 }} >
            <Image source={assets.person} style={{ width: 80, height: 80 }} />

            <Pressable className='bg-white justify-center items-center rounded-full border border-border absolute bottom-1 right-1' style={{ width: 30, height: 30 }}>
              <EvilIcons name="pencil" size={20} color="#7F7F7F" />
            </Pressable>
          </View>

          <Text className='font-bold text-xl'>Felix Warano</Text>
        </View>

        <View className='gap-2'>
          <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
            <TextInput placeholder='Felix' className='font-semibold text-black text-[14px] flex-1' />
          </View>

          <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
            <TextInput placeholder='Warano' className='font-semibold text-black text-[14px] flex-1' />
          </View>

          <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
            <TextInput placeholder='carineteoi@gmail.com' className='font-semibold text-black text-[14px] flex-1' />
          </View>

          <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
            <TextInput placeholder='+237689*****50' className='font-semibold text-black text-[14px] flex-1' />
          </View>

        </View>

        <Pressable onPress={() => router.replace("/(tabs)/profile")} className={`rounded-full items-center flex-row justify-center p-4 bg-button`} >
          <Text className="text-white font-semibold text-xl">
            Save Change
          </Text>
        </Pressable>

      </View>

    </View>
  )
}

export default EditProfile