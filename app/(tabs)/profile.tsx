import assets from '@/assets'
import Header from '@/components/Header'
import { useApp } from '@/lib/hooks/useApp'
import { AntDesign, EvilIcons, Feather, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Profile = () => {
  const insets = useSafeAreaInsets()
  const { AppName } = useApp()

  const router = useRouter()
  return (
    <View className="flex-1 my-6 " style={{ paddingBottom: insets.bottom + 26 }}>
      <Header title='Profile' />

      <View className='my-4 flex-row px-6 items-center'>
        <View className='flex-1 flex-row gap-2 items-center'>
          <View className='' style={{ width: 85, height: 85 }}>
            <View className='rounded-full ' style={{ height: 80, width: 80 }}>
              <Image source={assets.person} style={{ width: "100%", height: "100%" }} resizeMode='cover' />
            </View>
            <View className='rounded-full border border-border bg-white absolute bottom-0 -right-1 justify-center items-center' style={{ width: 30, height: 30 }}>
              <Foundation name="camera" size={20} color="#7F7F7F" />
            </View>
          </View>

          <View className='gap-2'>
            <Text className='font-bold'>Felix Warano</Text>
            <Text className='text-placeholder'>carineteoi@gmail.com</Text>
          </View>
        </View>
        {/**@ts-ignore is the correct route */}
        <Pressable onPress={() => router.push("/main/settings")} className='gap-2 items-center'>
          <EvilIcons name="pencil" size={34} color="#7F7F7F" />
          <Text className='text-xs text-placeholder'>Edit Profile</Text>
        </Pressable>

      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-4 mt-4" contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}>
        <View className='my-2'>
          <Text className='font-bold text-xl'>General</Text>

          <Pressable className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Feather name="heart" size={24} color="#7F7F7F" />
              </View>
              <Text className='text-xl text-placeholder'>Favorite Cars</Text>
            </View>
            <AntDesign name="right" size={24} color="#7F7F7F" />
          </Pressable>

          <Pressable className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <MaterialIcons name="event-repeat" size={24} color="#7F7F7F" />              </View>
              <Text className='text-xl text-placeholder'>Previous Rant</Text>
            </View>
            <AntDesign name="right" size={24} color="#7F7F7F" />
          </Pressable>

          <Pressable onPress={() => router.push("/(tabs)/notifications")} className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Ionicons name="notifications-outline" size={24} color="#7F7F7F" />
              </View>
              <Text className='text-xl text-placeholder'>Notification</Text>
            </View>
            <AntDesign name="right" size={24} color="#7F7F7F" />
          </Pressable>

          <Pressable className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <MaterialCommunityIcons name="connection" size={24} color="#7F7F7F" />              </View>
              <Text className='text-xl text-placeholder'>Connected to  {AppName} Partnerships </Text>
            </View>
            <AntDesign name="right" size={24} color="#7F7F7F" />
          </Pressable>

        </View>

        <View className='my-2'>
          <Text className='font-bold text-xl'>Support</Text>

          <Pressable onPress={() => router.push('/main/settings/currency')} className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <MaterialIcons name="currency-exchange" size={24} color="#7F7F7F" />
              </View>
              <Text className='text-xl text-placeholder'>Currency </Text>
            </View>
            <AntDesign name="right" size={24} color="#7F7F7F" />
          </Pressable>

          <Pressable onPress={() => router.push("/main/settings/language")} className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Ionicons name="language" size={24} color="#7F7F7F" />
              </View>
              <Text className='text-xl text-placeholder'>Language </Text>
            </View>
            <AntDesign name="right" size={24} color="#7F7F7F" />
          </Pressable>

          <Pressable className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Fontisto name="persons" size={24} color="#7F7F7F" />
              </View>
              <Text className='text-xl text-placeholder'>Invite Friends </Text>
            </View>
            <AntDesign name="right" size={24} color="#7F7F7F" />
          </Pressable>

          <Pressable className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <MaterialIcons name="privacy-tip" size={24} color="#7F7F7F" />
              </View>
              <Text className='text-xl text-placeholder'>Privacy policy </Text>
            </View>
            <AntDesign name="right" size={24} color="#7F7F7F" />
          </Pressable>

          <Pressable className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <AntDesign name="logout" size={24} color="#7F7F7F" />
              </View>
              <Text className='text-xl text-placeholder'>Log Out </Text>
            </View>
            <AntDesign name="right" size={24} color="#7F7F7F" />
          </Pressable>


        </View>

      </ScrollView>

    </View>
  )
}

export default Profile