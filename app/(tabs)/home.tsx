// Home page of the app
import assets from '@/assets'
import { useApp } from '@/lib/hooks/useApp'
import { useAuth } from '@/lib/hooks/useAuth'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomePage = () => {
  const { AppName } = useApp()
  const insets = useSafeAreaInsets();
  const { user } = useAuth()
  const { notifications } = useApp()
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 96, paddingTop: insets.top, paddingHorizontal: 4 }} >
      <View className='flex-row justify-between px-6 border-b-[0.5px] border-b-border pb-6'>
        <View className='flex-row gap-4 items-center'>
          <Image source={assets.logo_black} className='h-12 w-12 ' />
          <Text className='text-2xl font-bold text-black'>{AppName} </Text>
        </View>
        <View className='flex-row gap-2'>
          <View className='h-12 w-12  bg-btnBorder border-border flex-row justify-center items-center rounded-full'>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={"#767676"}
            />
            <View className='w-5 h-5 bg-secondary absolute -top-1 -right-1 flex-row justify-center items-center rounded-full'>
              <Text className='text-white text-[12px] font-bold'>
                {notifications.filter((el) => {return !el.isRead}).length}
              </Text>
            </View>
          </View>
          <View className='h-12 w-12 rounded-full relative overflow-hidden'>
            <Image source={assets.person} className='h-full w-full object-cover' />
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default HomePage