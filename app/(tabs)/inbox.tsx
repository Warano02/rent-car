import assets from '@/assets'
import SingleChat from '@/components/chat/singleChat'
import { useChat } from '@/lib/hooks/useChat'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'

const InboxMessages = () => {
  const router = useRouter()
  const { chats } = useChat()
  return (
    <View className='my-4 flex-1'>
      <View className='flex-row justify-between items-center mb-4  px-6'>
        <View className='flex-row gap-2'>
          <Pressable onPress={() => router.back()} className='w-12 h-12 bg-white border border-border flex-row justify-center items-center rounded-full'>
            <Ionicons name="chevron-back-sharp" size={24} color={"#767676"} />
          </Pressable>
          <View className='flex-row justify-center items-center gap-2'>
            <Image source={assets.person} className='rounded-full' style={{ height: 50, width: 50 }} />
            <Text className='text-xl font-bold'>Chats</Text>
          </View>
        </View>
        <View className='w-12 h-12 bg-white border border-border flex-row justify-center items-center rounded-full'>
          <Entypo name="dots-three-horizontal" size={24} color={"#767676"} />
        </View>
      </View>


      <FlatList
        className='px-6 flex-1'
        data={chats}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => <SingleChat chat={item} />}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}

export default InboxMessages