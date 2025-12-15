//Car details page
import assets from '@/assets'
import FeatureComponent from '@/components/car/FeatureComponent'
import ImageSlider from '@/components/car/ImageSlider'
import ReviewComponent from '@/components/car/ReviewComponent'
import Header from '@/components/Header'
import TitleSection from '@/components/TitleSection'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'

const CarDetails = () => {
  const [images, setImages] = useState(['https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ])

  const router = useRouter()
  return (
    <View className='my-4 flex-1'>
      <Header title='Car Details' />


      <ScrollView showsVerticalScrollIndicator={false} className='flex-1 '>
        <ImageSlider images={images} />

        <View className=' flex-1 bg-white justify-between' style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30, paddingHorizontal: 18, paddingVertical: 18, }}>
          <View>
            <View className="flex-row justify-between items-center gap-4">
              <View className='flex-1'>
                <Text className='text-xl font-semibold'>Tesla Model S</Text>
                <Text className='text-[12px] font-medium'>A car with high specs that are rented ot an affordable price</Text>
              </View>

              <View>
                <View className='flex-row items-center gap-4'>
                  <Text className='text-xl font-bold'>5.0</Text>
                  <FontAwesome
                    name="star"
                    size={18}
                    color={'#FF8F3A'}
                  />
                </View>
                <Text className='text-placeholder text-[14px]'>
                  (100+ Reviews)
                </Text>
              </View>
            </View>

            {/* Host profile */}
            <View className='mt-12 flex-row items-center justify-between gap-6'>
              <View className='flex-row items-center gap-6'>
                <Image source={assets.person} height={42} width={42} resizeMode='cover' />
                <Text className='text-xl font-bold'>Felix Warano</Text>
              </View>

              <View className='flex-row items-center gap-6'>
                {/* <Pressable className='border border-btnBorder rounded-full items-center justify-center'>
                  <Feather name="phone" size={22} color={'#767676'} />
                </Pressable> */}

                {/* Redirect user to chat with the hoster */}
                <Pressable className='border p-4 border-btnBorder rounded-full items-center justify-center'>
                  <AntDesign
                    name="message"
                    size={24}
                    color={'#767676'}
                  />
                </Pressable>
              </View>
            </View>

            <View className='mt-6'>
              <Text className='text-xl font-bold'>Car Features</Text>

              <View className='mt-4 flex-row items-center gap-6'>
                <FeatureComponent />
                <FeatureComponent />
                <FeatureComponent />
              </View>
              <View className='mt-4 flex-row items-center gap-6'>
                <FeatureComponent />
                <FeatureComponent />
                <FeatureComponent />
              </View>
            </View>
            {/* @ts-ignore is a valid link but i don'r know why ts reject it  */}
            <TitleSection title='Reviews (125)' link={`/main/car/reviews`} />
          
          <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3]}
              renderItem={() => <ReviewComponent/>}
            />
          </View>
        </View>

      </ScrollView>


      <View className='px-6'>
        <Pressable className='bg-button rounded-full items-center flex-row gap-2 justify-center p-4'>
          <Text className="text-white font-semibold text-xl">
            Book Now
          </Text>
          <AntDesign name="arrow-right" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  )
}

export default CarDetails