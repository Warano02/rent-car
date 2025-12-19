//Car details page
import { icons } from '@/assets'
import FeatureComponent from '@/components/car/FeatureComponent'
import ImageSlider from '@/components/car/ImageSlider'
import ReviewComponent from '@/components/car/ReviewComponent'
import Header from '@/components/Header'
import TitleSection from '@/components/TitleSection'
import { useBooking } from '@/lib/hooks/useCarBooking'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageSourcePropType, Pressable, ScrollView, Text, View } from 'react-native'

const CarDetails = () => {
  const { features, details, reviews, renter } = useBooking()
  const [images, setImages] = useState<ImageSourcePropType[]>([])
  useEffect(() => {
    setImages(details.images)
  })
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
                <Text className='text-xl font-semibold'>{details.name} </Text>
                <Text className='text-[12px] font-medium'>{details.description} </Text>
              </View>

              <View>
                <View className='flex-row items-center gap-4'>
                  <Text className='text-xl font-bold'>{(reviews.map((r) => r.rating).reduce((a, b) => a + b) / reviews.length).toFixed(1)} </Text>
                  <FontAwesome
                    name="star"
                    size={18}
                    color={'#FF8F3A'}
                  />
                </View>
                {reviews.length > 2 && <Text className='text-placeholder text-[14px]'>
                  ({reviews.length - 1} + Reviews)
                </Text>}
              </View>
            </View>

            {/* Host profile */}
            <View className='mt-12 flex-row items-center justify-between gap-2'>
              <View className='flex-row items-center gap-6'>
                <Image source={renter.profil} height={42} width={42} resizeMode='cover' />
                <Text className='text-xl font-bold'>{renter.name}
                  {"\t"}  <Image source={icons.verified} />
                </Text>
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

              <View className='mt-4 flex-row items-center gap-2'>
                <FeatureComponent title='Capacity' icon={icons.sofa} value={features.seats + " Seats"} />
                <FeatureComponent title='Engin Out' icon={icons.enginOut} value={features.enginOut} />
                <FeatureComponent title='Max Speed' icon={icons.maxSpeed} value={features.maxSpeed + "Km/h"} />
              </View>
              <View className='mt-4 flex-row items-center gap-6'>
                <FeatureComponent title='Advance' icon={icons.vitesse} value={features.advance} />
                <FeatureComponent title='Single charge' icon={icons.speed} value={features.enginCharge} />
                <FeatureComponent title='Parking' icon={icons.p} value={features.parking} />
              </View>
            </View>
            {/* @ts-ignore is a valid link but i don'r know why ts reject it  */}
            <TitleSection title={`Reviews ${reviews.length - 1}+`} link={`/main/car/reviews`} />

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={reviews.slice(0, 5)}
              keyExtractor={(item, idx) => idx.toString()}
              renderItem={({ item }) => (
                <ReviewComponent contain={item.contain} profil={item.profil} name={item.name} ratingCount={item.rating} />
              )}
            />

          </View>
        </View>

      </ScrollView>


      <View className='px-6'>
        <Pressable onPress={() => router.push(`/main/booking`)} className='bg-button rounded-full items-center flex-row gap-2 justify-center p-4'>
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