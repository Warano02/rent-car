// Home page of the app
import assets, { icons } from '@/assets'
import SingleCar from '@/components/car/SingleCar'
import TitleSection from '@/components/TitleSection'
import { useApp } from '@/lib/hooks/useApp'
import { useAuth } from '@/lib/hooks/useAuth'
import { Ionicons, Octicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, ImageProps, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomePage = () => {
  const { AppName } = useApp()
  const insets = useSafeAreaInsets();
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState("")
  const { notifications } = useApp()
  const router = useRouter()
  return (
    <View style={{ paddingBottom: 96, paddingTop: insets.top, paddingHorizontal: 4 }}>
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
                {notifications.filter((el) => { return !el.isRead }).length}
              </Text>
            </View>
          </View>
          <Pressable onPress={()=>router.push("/(tabs)/profile")} className='h-12 w-12 rounded-full relative overflow-hidden'>
            <Image source={assets.person} className='h-full w-full object-cover' />
          </Pressable>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: insets.bottom + 50 }}>
        {/* Input and sort icons */}
        <View className='flex-row justify-between px-6 gap-2 my-4'>
          <View className='flex-1 bg-white border-gray rounded-lg h-14 flex-row gap-2'>
            {!searchTerm.length && <View className='w-12 h-16 flex-row justify-center items-center'>
              <Octicons className='text-[#767676]' name="search" size={24} color="black" />
            </View>}
            <TextInput onChangeText={(e) => setSearchTerm(e)} placeholder='Search your dream car...' keyboardType="web-search" className='flex-1 text-[17px]' />
          </View>
          <View className='w-12 h-12 bg-white border-border flex-row justify-center items-center rounded-full'>
            {searchTerm.length ? <View className='w-12 h-16 flex-row justify-center items-center'>
              <Octicons className='text-[#767676]' name="search" size={24} color="black" />
            </View> : <Image source={icons.sorter} className='h-6 w-6' />
            }
          </View>
        </View>

        <Brands />

        <View className='bg-white rounded-lg mt-6  '>
          <TitleSection title='Best Cars' link={"./(tabs)/home"} />
          <Text className='text-[17px] font-bold text-gray '>Avaible</Text>
          <View className=' flex-row gap-2 justify-between '>
            <SingleCar />
            <SingleCar />
          </View>

          <View className='gap-2'>
            <TitleSection title='Nearby' link={"./(tabs)/home"} />
            <Pressable onPress={() => router.push("/main/car")} className='bg-btnBorder p-6 rounded-lg'>
              <Image source={assets.m8} />
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </View>

  )
}

const ListBrands = [
  {
    icon: assets.tesla,
    name: "Ferrari"
  },
  {
    icon: assets.tesla,
    name: "Ferrari"
  },
  {
    icon: assets.tesla,
    name: "Ferrari"
  },
  {
    icon: assets.tesla,
    name: "Ferrari"
  },
]

type brandType = {
  icon: ImageProps,
  name: string
}

const Brands = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [brands, setBrands] = useState<brandType[]>(ListBrands)
  return (
    <View className='mt-2 px-6 my-6'>
      <Text className='text-2xl font-bold my-2'>Brands  </Text>
      <View className='flex-row gap-2 justify-between'>
        {
          brands.map((el, idx) => (
            <View key={idx} className='h-16 w-16 gap-2'>
              <View className='h-16 rounded-full bg-secondary flex-row justify-center items-center'>
                <Image source={el.icon} className='w-8 h-8' />
              </View>
              <Text className='text-center text-[17px] text-secondary '>{el.name} </Text>
            </View>
          ))
        }
      </View>
    </View>)
}
export default HomePage