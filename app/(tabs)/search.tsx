import assets, { icons } from '@/assets'
import Header from '@/components/Header'
import FilterCars from '@/components/search/FilterCars'
import TitleSection from '@/components/TitleSection'
import { useApp } from '@/lib/hooks/useApp'
import { useBooking } from '@/lib/hooks/useCarBooking'
import { useCurrency } from '@/lib/hooks/useCurrency'
import { useSearchCar } from '@/lib/hooks/useSearchCar'
import { cars } from '@/lib/mocks/Cars'
import { TCars } from '@/types'
import { FontAwesome, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, ImageSourcePropType, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Search = () => {
  const { searchTerm, setSearchTerm, results, loading } = useSearchCar()
  const [cars, setCars] = useState<TCars>([])
  const [sFilter, setSfilter] = useState(false)
  const insets = useSafeAreaInsets()

  const handleX = () => {
    if (loading && searchTerm) return setSearchTerm("")
    setSfilter(true)
  }


  const clearFilter = () => {
    setCars(results)
    setSfilter(false)
  }

  useEffect(() => {
    if (loading) return
    setCars(results)
  }, [loading])

  return (
    <View className="flex-1 my-6" style={{ paddingBottom: insets.bottom + 16 }}>
      <Header title="Search" />

      <View className="flex-row px-6 gap-2 my-4">
        <View className="flex-1 bg-white border-gray rounded-lg h-14 flex-row items-center">
          {!searchTerm.length && (
            <View className="w-12 h-14 items-center justify-center">
              <Octicons name="search" size={20} color="#767676" />
            </View>
          )}

          <TextInput
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="Search your dream car..."
            className="flex-1 text-[16px]"
            returnKeyType="search"
          />
        </View>

        <View className="w-12 h-12 bg-white border-border items-center justify-center rounded-full">

          <Pressable onPress={handleX}>
            {searchTerm && loading ? <Octicons name="x" size={20} color="#767676" /> : <Image source={icons.sorter} className="h-6 w-6" />}
          </Pressable>

        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-2" contentContainerStyle={{ paddingBottom: 42, flexGrow: 1 }}>
        <View className='flex-1'>
          {!searchTerm && <RecomandCars />}
          {loading && (
            <View className='flex-1 flex-row items-center justify-center gap-2' >
              <ActivityIndicator />
              <Text>Searching your car...</Text>
            </View>
          )}
          {
            !loading && !cars.length && searchTerm && (
              <View className='flex-1 items-center justify-center gap-2'>
                <Text> <MaterialCommunityIcons name="car-off" size={82} color="black" /></Text>
                <Text className='font-bold text-xs text-placeholder'>No result for <Text className='text-black'>{searchTerm}</Text> </Text>
              </View>
            )
          }
          {
            !loading && cars.length && searchTerm && (
              <View className="flex-row flex-wrap justify-between">
                {cars.map((c, index) => (
                  <View key={index} className="mb-4">
                    <SingleCar cover={c.images[0]} id={c.id} name={c.name} price={c.price} rating={c.rating} location={c.location.name} />
                  </View>
                ))}
              </View>
            )
          }

        </View>

        <View className="mt-4">
          <TitleSection title="Our Popular Cars" link="./main/" />
          <FlatList
            data={Array(8).fill(null)}
            horizontal
            showsHorizontalScrollIndicator={false}
            //  @ts-ignore 
            keyExtractor={(_, idx) => idx}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            renderItem={({ item }) => (
              <SinglePopularCar />
            )}
          />
        </View>
      </ScrollView>


      <FilterCars clearFilter={clearFilter} sFilter={sFilter} setSfilter={setSfilter} cars={cars} setCars={setCars} />
    </View>
  )
}



const RecomandCars = () => {

  return (
    <>
      <View className="flex-row justify-between my-6">
        <Text className="text-[16px] font-semibold">
          Recommend For You
        </Text>
        <Pressable>
          <Text className="text-[14px] text-placeholder">View All</Text>
        </Pressable>
      </View>

      <View className="flex-row flex-wrap justify-between">
        {cars.slice(0, 4).map((c, index) => (
          <View key={index} className="mb-4">
            <SingleCar cover={c.images[0]} id={c.id} name={c.name} price={c.price} rating={c.rating} location={c.location.name} />
          </View>
        ))}
      </View>
    </>
  )
}

interface ISCar {
  id: string,
  name: string,
  price: number,
  location: string,
  rating: number,
  cover: ImageSourcePropType
}

const SingleCar = ({ id, name, price, location, rating, cover }: ISCar) => {
  const { formatAmount } = useCurrency()
  const { isFav, toggleFavoriteCar } = useApp()
  const { SelectCar } = useBooking()
  const handleClick = (w: "img" | "booking") => SelectCar(id, w == "img" ? "/main/car" : "/main/booking")
  return (
    <View className='rounded-lg border border-border bg-btnBorder overflow-hidden' style={{ width: 186, height: 265 }}>
      <View className="flex-row  items-end mt-2  px-6 justify-end">
        <Pressable onPress={() => toggleFavoriteCar(id)} className={` ${isFav(id) ? "bg-bgTab" : "bg-white"} justify-center items-center rounded-full`} style={{ height: 30, width: 30 }}>
          <Text>
            <FontAwesome name={isFav(id) ? "heart" : "heart-o"} size={18} color={isFav(id) ? "red" : "#767676"} />
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={() => handleClick("img")} className='flex-row justify-center items-center'>
        <Image source={typeof cover == "string" ? { uri: cover } : cover} style={{ height: 88, width: 186 }} resizeMode="center" />
      </Pressable>

      <View className='flex-1 bg-white gap-2 px-4'>
        <Text className="font-bold text-xl mt-2">{name}</Text>
        <View className="flex-row gap-2 ">
          <Text className="text-placeholder">{rating.toFixed(1)} </Text>
          <Text className="text-xs">⭐</Text>
        </View>

        <View className=" flex-row items-center">
          <Ionicons name="location-outline" size={18} color={"#767676"} />
          <Text className="text-xs text-gray-500">
            {location}
          </Text>
        </View>
        <View className='flex-row justify-between items-center'>
          <Text className='text-placeholder text-[14px]'>{formatAmount(price)} </Text>
          <Pressable onPress={() => handleClick("booking")} className='rounded-lg bg-bgTab justify-center items-center ' style={{ width: 76, height: 30 }}>
            <Text className='text-xs font-bold text-white'>Book Now</Text>
          </Pressable>
        </View>
      </View>

    </View>)
}


const SinglePopularCar = () => {
  const { formatAmount } = useCurrency()
  return (
    <View className='rounded-lg items-center px-2 bg-btnBorder flex-row gap-2' style={{ width: 256, height: 90 }}>
      <Image source={assets.white_ferari} style={{ width: 118, height: 70 }} resizeMode='center' />

      <View className='gap-2'>
        <Text className='font-bold'>Ferrari LaFerrari </Text>
        <View className='flex-row gap-2'>
          <Text className="text-placeholder">5.0</Text>
          <Text className="text-xs">⭐</Text>
        </View>
        <Text className="text-bgTab text-xs">
          {formatAmount(200)}/Day
        </Text>

      </View>
    </View>
  )
}
export default Search