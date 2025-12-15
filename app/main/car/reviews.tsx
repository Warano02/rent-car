// Single car reviews page
import ReviewComponent from '@/components/car/ReviewComponent'
import Header from '@/components/Header'
import { AntDesign, Octicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Pressable, Text, TextInput, View } from 'react-native'

const CarReviews = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const router=useRouter()
  return (
    <View className='my-4 flex-1'>
      <Header title='Reviews' />

      <View className='flex-1 '>
        <View className='flex-row justify-between px-6 gap-2 my-4'>
          <View className='flex-1 bg-white border-gray rounded-lg h-14 flex-row gap-2'>
            <View className='w-12 h-16 flex-row justify-center items-center'>
              <Octicons className='text-[#767676]' name="search" size={24} color="black" />
            </View>
            <TextInput onChangeText={(e) => setSearchTerm(e)} placeholder='Find a reviews...' keyboardType="web-search" className='flex-1 text-[17px]' />
          </View>
        </View>

        <View className='flex-1'>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <ReviewComponent
                key={index}
                containerStyle={{
                  width: '100%',
                  marginRight: 0,
                  marginTop: 14,
                }}
                fromReview
              />
            )}
          />
        </View>
      </View>
      <View className='px-4 '>
        <Pressable onPress={()=>router.push(`/main/booking`)} className='bg-button rounded-full items-center flex-row gap-2 justify-center p-4'>
          <Text className="text-white font-semibold text-xl">
            Book Now
          </Text>
          <AntDesign name="arrow-right" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  )
}

export default CarReviews