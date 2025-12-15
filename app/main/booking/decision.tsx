// After processing Confirmations, user is redirect here to download her facture
import assets from '@/assets'
import Header from '@/components/Header'
import { useBooking } from '@/lib/hooks/useCarBooking'
import { useCurrency } from '@/lib/hooks/useCurrency'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useMemo } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

const Decision = () => {
  const { date, totalPrice } = useBooking()
  const { formatAmount } = useCurrency()

  const fee = useMemo(() => {
    return Math.round(totalPrice * 0.05)
  }, [])

  const totalAmount = useMemo(() => Math.round(totalPrice + fee), [])

  const router = useRouter()
  return (
    <View className="flex-1 my-4">
      <Header title="Payment Status" end />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6" >
        <View className=" items-center justify-center">

          <Image source={assets.success} style={{ width: 275, height: 200 }} resizeMode="contain" />

          <Text className="mt-6 text-xl font-bold text-center">
            Payment Successful
          </Text>

          <Text className="mt-2 text-[14px] text-placeholder text-center">
            Your car rent has been successfull
          </Text>

        </View>

        <View className='mt-4 px-6 py-6 rounded-lg border border-border bg-white gap-6'>
          <Text className='font-bold'>Booking Information</Text>

          <View className='bg-border my-4' style={{ height: 1, width: "100%" }} />

          <View className='flex-row justify-between gap-6'>
            <Text className='text-placeholder'>Car Model</Text>
            <Text className='font-bold text-placeholder'>Tesla Model S</Text>
          </View>

          <View className='flex-row justify-between gap-6'>
            <Text className='text-placeholder'>Rental Date </Text>
            <Text className='font-bold text-placeholder'>{new Date(date.startDate).toLocaleString("en-En")} - {new Date(date.endDate).toLocaleString("en-En")} </Text>
          </View>

          <View className='flex-row justify-between gap-6'>
            <Text className='text-placeholder'>Name</Text>
            <Text className='font-bold text-placeholder'>Felix Warano</Text>
          </View>

        </View>

        <View className='bg-border my-4' style={{ height: 2, width: "100%" }} />

        <View className='mt-4 gap-6'>
          <Text className='font-bold text-xl'>Transaction detail </Text>

          <View className='flex-row justify-between gap-6'>
            <Text className='text-placeholder'>Name</Text>
            <Text className='font-bold '>#T000123B0J1</Text>
          </View>

          <View className='flex-row justify-between gap-6'>
            <Text className='text-placeholder'>Transaction Date</Text>
            <Text className='font-bold '>{new Date().toDateString()} </Text>
          </View>

        </View>

        <View className="my-6" style={{ width: 360, height: 1, borderWidth: 1, borderColor: "#D1D5DB", borderStyle: "dashed", }} />

        <View className=' my-2 gap-6'>

          <View className='flex-row justify-between '>
            <View className='flex-row gap-2 justify-center items-center'>
              <Text className='text-[14px] text-placeholder'> Amount</Text>
            </View>
            <View className='flex-row gap-2'>
              <Text className='text-[14px] font-bold'>{formatAmount(totalPrice)} </Text>
            </View>
          </View>

          <View className='flex-row justify-between '>
            <View className='flex-row gap-2 justify-center items-center'>
              <Text className='text-[14px] text-placeholder'> Service fee</Text>
            </View>
            <View className='flex-row gap-2'>
              <Text className='text-[14px] font-bold'>{formatAmount(fee)} </Text>
            </View>
          </View>

          <View className='flex-row justify-between '>
            <View className='flex-row gap-2 justify-center items-center'>
              <Text className='text-[14px] text-placeholder'> Tax</Text>
            </View>
            <View className='flex-row gap-2'>
              <Text className='text-[14px] font-bold'>{formatAmount(0)} </Text>
            </View>
          </View>

        </View>

        <View className="my-6" style={{ width: 360, height: 1, borderWidth: 1, borderColor: "#D1D5DB", borderStyle: "dashed", }} />

        <View className='flex-row justify-between '>
          <View className='flex-row gap-2 justify-center items-center'>
            <Text className='text-xl font-bold'> Total Amount</Text>
          </View>
          <View className='flex-row gap-2'>
            <Text className='text-xl font-bold'>{formatAmount(totalAmount)} </Text>
          </View>
        </View>


        <View className=' mt-6 gap-6'>
          <Pressable disabled className={`rounded-full items-center flex-row justify-center p-4 bg-btnBorder gap-2`} >
            <Feather name="download" size={24} color="#7F7F7F" />
            <Text className="text-placeholder font-semibold text-[15px]">
              Download Receipt
            </Text>
          </Pressable>
         
       
          <Pressable onPress={() => router.replace("/(tabs)/home")} className={`rounded-full items-center flex-row justify-center p-4 bg-button`} >
            <Text className="text-white font-semibold text-xl">
              Back to Home
            </Text>
          </Pressable>
        </View>

      </ScrollView>
    </View>
  )
}

export default Decision
