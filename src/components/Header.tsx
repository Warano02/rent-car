import { Entypo, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const Header = ({ title, end = false }: { title: string, end?: boolean }) => {
  const router = useRouter()
  return (
    <View className='flex-row justify-between items-center mb-4 border-b-2  border-b-gray px-6'>
      <Pressable onPress={() => !end?router.back():router.replace("/main/booking/payment")} className='w-12 h-12 bg-white border border-border flex-row justify-center items-center rounded-full'>
        <Ionicons name="chevron-back-sharp" size={24} color={"#767676"} />
      </Pressable>
      <Text className='text-xl font-bold'>{title} </Text>
      <View className='w-12 h-12 bg-white border border-border flex-row justify-center items-center rounded-full'>
        <Entypo name="dots-three-horizontal" size={24} color={"#767676"} />
      </View>
    </View>
  )
}

export default Header