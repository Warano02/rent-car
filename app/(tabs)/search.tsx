import assets, { icons } from '@/assets'
import Header from '@/components/Header'
import TitleSection from '@/components/TitleSection'
import { useCurrency } from '@/lib/hooks/useCurrency'
import { useSearchCar } from '@/lib/hooks/useSearchCar'
import { FontAwesome, Ionicons, Octicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Search = () => {
  const { searchTerm, setSearchTerm } = useSearchCar()
  const insets = useSafeAreaInsets()
  return (
    <View className="flex-1 my-6" style={{ paddingBottom: insets.bottom + 16 }}>
      <Header title="Search" />

      {/* Search input */}
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
          {searchTerm.length ? (
            <Pressable onPress={() => setSearchTerm("")}>
              <Octicons name="x" size={20} color="#767676" />
            </Pressable>
          ) : (
            <Image source={icons.sorter} className="h-6 w-6" />
          )}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-2" contentContainerStyle={{ paddingBottom: 42 }}>
        {
          <RecomandCars />
        }

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
    </View>
  )
}


interface ISCar {
  isFav?: boolean
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
        {Array(4).fill(null).map((_, index) => (
          <View key={index} className="mb-4">
            <SingleCar />
          </View>
        ))}
      </View>
    </>
  )
}

const SingleCar = ({ isFav = false }: ISCar) => {
  const { formatAmount } = useCurrency()
  return (
    <View className='rounded-lg border border-border bg-btnBorder overflow-hidden' style={{ width: 186, height: 265 }}>
      <View className="flex-row  items-end mt-2  px-6 justify-end">
        <View className={` ${isFav ? "bg-bgTab" : "bg-white"} justify-center items-center rounded-full`} style={{ height: 30, width: 30 }}>
          <Text>
            <FontAwesome name={isFav ? "heart" : "heart-o"} size={18} color={isFav ? "red" : "#767676"} />
          </Text>
        </View>
      </View>
      <View className='flex-row justify-center items-center'>
        <Image source={assets.white_ferari} style={{ height: 88, width: 186 }} resizeMode="cover" />
      </View>

      <View className='flex-1 bg-white gap-2 px-4'>
        <Text className="font-bold text-xl mt-2">Tesla Model S</Text>
        <View className="flex-row gap-2 ">
          <Text className="text-placeholder">5.0</Text>
          <Text className="text-xs">⭐</Text>
        </View>

        <View className=" flex-row items-center">
          <Ionicons name="location-outline" size={18} color={"#767676"} />
          <Text className="text-xs text-gray-500">
            Chicago, USA
          </Text>
        </View>
        <View className='flex-row justify-between items-center'>
          <Text className='text-placeholder text-[14px]'>{formatAmount(200)} </Text>
          <Pressable className='rounded-lg bg-bgTab justify-center items-center ' style={{ width: 76, height: 30 }}>
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