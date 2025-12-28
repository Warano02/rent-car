import { icons } from '@/assets'
import Header from '@/components/Header'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const PreviousRent = () => {
  const insets = useSafeAreaInsets()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  return (
    <View className="flex-1 my-6 " style={{ paddingBottom: insets.bottom + 1 }}>
      <Header title='Previous Rent' />
      <View className='flex-1 px-2 py-4 gap-2'>
        {
          loading ? <View className='flex-1 flex-row justify-center items-center gap-2'>
            <ActivityIndicator />
            <Text>Getting your previous rents ...</Text>
          </View> : <NoPreviousRent />
        }
      </View>
    </View>
  )
}

const NoPreviousRent = () => {
  const router = useRouter()
  return (
    <>
      <View className='flex-1 justify-center items-center'>
        <View className='gap-6 items-center' style={{ width: 290, height: 270 }}>
          <View className='bg-white rounded-full justify-center items-center relative border-border' style={{ width: 170, height: 170 }}>
            <View className="bg-white border border-btnBorder items-center justify-center rounded-full absolute -top-1 right-2" style={{ height: 42, width: 42 }}>
              <Text className='font-bold'>0</Text>
            </View>
            <Image source={icons.noPrev} style={{ width: 80, height: 82 }} />
          </View>

          <View className='gap-2 justify-center items-center'>
            <Text className='font-bold text-xl'>No Previous Rent</Text>
            <Text className='text-placeholder text-center text-[14px] font-semibold'>Here Will Be Displayed The Rant You Have Recently Made.</Text>
          </View>
        </View>
      </View>

      <Pressable onPress={() => router.replace("/(tabs)/search")} className={`rounded-full items-center flex-row justify-center p-4 bg-button`} >
        <Text className="text-white font-semibold text-xl">
          Browse Cars To Rent
        </Text>
      </Pressable>
    </>
  )
}
export default PreviousRent