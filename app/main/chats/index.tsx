import assets from '@/assets'
import ChatInput from '@/components/chat/ChatInput'
import SingleMessage from '@/components/chat/SingleMessage'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Image, KeyboardAvoidingView, Platform, Pressable, Text, View } from 'react-native'

const PrivateChat = () => {
  const router = useRouter()
  return (
    <KeyboardAvoidingView style={{ flex: 1,paddingVertical:6 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View className='flex-row justify-between items-center mb-6  px-6'>
        <View className='flex-row gap-2'>
          <Pressable onPress={() => router.back()} className='w-12 h-12 bg-white border border-border flex-row justify-center items-center rounded-full'>
            <Ionicons name="chevron-back-sharp" size={24} color={"#767676"} />
          </Pressable>
          <View className='flex-row justify-center items-center gap-2'>
            <View className='flex-row relative' style={{ height: 50, width: 50 }}>
              <Image source={assets.person} className='rounded-full' style={{ height: 50, width: 50 }} />
              <View className='rounded-full bg-online absolute bottom-0 right-1' style={{ height: 10, width: 10 }} />
            </View>
            <View>
              <Text className='text-xl font-bold'>Hela Quintin</Text>
              <Text className='text-xs'>Online</Text>
            </View>
          </View>
        </View>
        <View className='w-12 h-12 bg-white border border-border flex-row justify-center items-center rounded-full'>
          <Entypo name="dots-three-horizontal" size={24} color={"#767676"} />
        </View>
      </View>

      <FlatList
        style={{ flex: 1, marginVertical: 4 }}
        data={Array(40).fill("")}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => <SingleMessage />}
        showsVerticalScrollIndicator={false}
      />

      <ChatInput />
    </KeyboardAvoidingView>

  )
}

export default PrivateChat