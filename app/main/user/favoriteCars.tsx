import { icons } from '@/assets'
import Header from '@/components/Header'
import { useApp } from '@/lib/hooks/useApp'
import { cars } from '@/lib/mocks/Cars'
import { TCars } from '@/types'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SingleCar } from '../../(tabs)/search'

const FavoriteCars = () => {
  const insets = useSafeAreaInsets()
  const [isLoading, setIsLoading] = useState(true)
  const [favoriteCars, setFavoriteCars] = useState<TCars>([])
  const { favCar } = useApp()
  useEffect(() => {
    setTimeout(() => {
      if (!favCar.length) return setIsLoading(false)
      const data = [...favCar.map(el => cars.find((e) => e.id == el)).filter(e => e !== undefined)]
      setFavoriteCars(data)
      setIsLoading(false)
    }, 500);
  }, [])
  return (
    <View className="flex-1 my-6 " style={{ paddingBottom: insets.bottom + 1 }}>
      <Header title='Favorite car' />
      <View className='flex-1 px-2 py-4 gap-2'>
        {isLoading ? <View className='flex-1 flex-row justify-center items-center gap-2'>
          <ActivityIndicator />
          <Text>Preparing Your Favorite List ...</Text>
        </View> :
          !favoriteCars.length ? <NoFavorite /> :
            <View className='flex-1 gap-2'>
              <Text className='text-center my-4 font-semibold text-placeholder'>Here are the cars you wanted to favorite for potential later rental </Text>
              <View className="flex-row flex-wrap justify-between">
                {favoriteCars.slice(0, 4).map((c, index) => (
                  <View key={index} className="mb-4">
                    <SingleCar cover={c.images[0]} id={c.id} name={c.name} price={c.price} rating={c.rating} location={c.location.name} />
                  </View>
                ))}
              </View>
            </View>
        }
      </View>

    </View>
  )
}

const NoFavorite = () => {
  const router = useRouter()
  return (
    <>
      <View className='flex-1 justify-center items-center'>
        <View className='gap-6 items-center' style={{ width: 290, height: 270 }}>
          <View className='bg-white rounded-full justify-center items-center relative border-border' style={{ width: 170, height: 170 }}>
            <Image source={icons.noFav} style={{ width: 80, height: 82 }} />
          </View>

          <View className='gap-2 justify-center items-center'>
            <Text className='font-bold text-xl'>No FAVORITE</Text>
            <Text className='text-placeholder text-center text-[14px] font-semibold'>You Don't Add Some Cars As Your Favorite For Now.</Text>
          </View>
        </View>
      </View>

      <Pressable onPress={() => router.replace("/(tabs)/search")} className={`rounded-full items-center flex-row justify-center p-4 bg-button`} >
        <Text className="text-white font-semibold text-xl">
          Browse Cars
        </Text>
      </Pressable>
    </>
  )
}

export default FavoriteCars