// Here, user process to the payment
import assets, { icons } from '@/assets'
import StepperComponent from '@/components/book/StepperComponent'
import Header from '@/components/Header'
import { useBooking } from '@/lib/hooks/useCarBooking'
import { useCurrency } from '@/lib/hooks/useCurrency'
import { Entypo, EvilIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useMemo } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

const ConfirmPayment = () => {
  const { date, location, totalPrice, paymentMethod } = useBooking()
  const { formatAmount } = useCurrency()

  const fee = useMemo(() => {
    return Math.round(totalPrice * 0.05)
  }, [])

  const totalAmount = useMemo(() => Math.round(totalPrice + fee), [])

  const router = useRouter()
  return (
    <View className='my-4 flex-1'>
      <Header title='Confirmation' />
      <ScrollView className='flex-1 px-6'>
        <StepperComponent active={3} />

        <View className='flex-row justify-center items-center my-6'>
          <Image source={assets.testla_s} height={224} width={360} resizeMode='cover' />
        </View>

        <View className='gap-6 px-6'>
          <View className='flex-row justify-between '>
            <Text className='text-xl font-bold'>Tesla Model S</Text>
            <View className='flex-row gap-4 justify-center items-center'>
              <Text className='text-xl font-bold'>5.0</Text>
              <Entypo name="star" size={24} color="#FF8F3A" />
            </View>
          </View>

          <View className='flex-row  gap-6 justify-between'>
            <Text className='text-[14px] text-placeholder' style={{ width: 200 }}>A car with high specs that are rented an affordable price.</Text>
            <Text className='text-[14px] text-placeholder'>(100+ Reviews)</Text>
          </View>
        </View>

        <View className='bg-placeholder my-6' style={{ width: 360, height: 1 }} />

        <View className='mt-2 '>
          <Text className='text-xl font-bold'>Booking informational</Text>

          <View className='flex-row justify-between my-4'>
            <View className='flex-row gap-2 justify-center items-center'>
              <View className='bg-placeholder rounded-full' style={{ height: 5, width: 5 }} />
              <Text className='text-[14px] text-placeholder'>Booking ID</Text>
            </View>
            <View className='flex-row gap-2'>
              <Text className='text-[14px] text-placeholder'>00451</Text>
            </View>
          </View>

          <View className='flex-row justify-between my-4'>
            <View className='flex-row gap-2 justify-center items-center'>
              <View className='bg-placeholder rounded-full' style={{ height: 5, width: 5 }} />
              <Text className='text-[14px] text-placeholder'>Name</Text>
            </View>
            <View className='flex-row gap-2'>
              <Text className='text-[14px] text-placeholder'>Felix Warano</Text>
            </View>
          </View>

          <View className='flex-row justify-between my-4'>
            <View className='flex-row gap-2 justify-center items-center'>
              <View className='bg-placeholder rounded-full' style={{ height: 5, width: 5 }} />
              <Text className='text-[14px] text-placeholder'>Pick up Date</Text>
            </View>
            <View className='flex-row gap-2'>
              <Text className='text-[14px] text-placeholder'>
                {new Date(date.startDate).toDateString()}
              </Text>
            </View>
          </View>

          <View className='flex-row justify-between my-4'>
            <View className='flex-row gap-2 justify-center items-center'>
              <View className='bg-placeholder rounded-full' style={{ height: 5, width: 5 }} />
              <Text className='text-[14px] text-placeholder'>Return Date</Text>
            </View>
            <View className='flex-row gap-2'>
              <Text className='text-[14px] text-placeholder'>
                {new Date(date.endDate).toDateString()}
              </Text>
            </View>
          </View>

          <View className='flex-row justify-between my-4'>
            <View className='flex-row gap-2 justify-center items-center'>
              <View className='bg-placeholder rounded-full' style={{ height: 5, width: 5 }} />
              <Text className='text-[14px] text-placeholder'>Location</Text>
            </View>
            <View className='flex-row '>
              <EvilIcons name="location" size={24} color="#7F7F7F" />
              <Text className='text-[14px] flex-1 text-placeholder'>
                {location?.label || "Ngaoundéré, Cameroun"}
              </Text>
            </View>
          </View>


        </View>

        <View className='bg-placeholder my-6' style={{ width: 360, height: 1 }} />

        <View className='mt-2'>
          <Text className='text-xl font-bold'>Payment</Text>

          <View className='flex-row justify-between my-4'>
            <View className='flex-row gap-2 justify-center items-center'>
              <View className='bg-placeholder rounded-full' style={{ height: 5, width: 5 }} />
              <Text className='text-[14px] text-placeholder'>Transaction ID</Text>
            </View>
            <View className='flex-row gap-2'>
              <Text className='text-[14px] font-bold'>#141mtslv5254d58</Text>
            </View>
          </View>

          <View className='flex-row justify-between my-4'>
            <View className='flex-row gap-2 justify-center items-center'>
              <View className='bg-placeholder rounded-full' style={{ height: 5, width: 5 }} />
              <Text className='text-[14px] text-placeholder'>Amount</Text>
            </View>
            <View className='flex-row gap-2'>
              <Text className='text-[14px] font-bold'>{formatAmount(totalPrice)} </Text>
            </View>
          </View>

          <View className='flex-row justify-between my-4'>
            <View className='flex-row gap-2 justify-center items-center'>
              <View className='bg-placeholder rounded-full' style={{ height: 5, width: 5 }} />
              <Text className='text-[14px] text-placeholder'>Service fee</Text>
            </View>
            <View className='flex-row gap-2'>
              <Text className='text-[14px] font-bold'>{formatAmount(fee)} </Text>
            </View>
          </View>
        </View>

        <View className="my-6" style={{ width: 360, height: 1, borderWidth: 1, borderColor: "#D1D5DB", borderStyle: "dashed", }} />

        <View className='flex-row justify-between my-4'>
          <View className='flex-row gap-2 justify-center items-center'>
            <Text className='text-xl font-bold'>Total Amount</Text>
          </View>
          <View className='flex-row gap-2'>
            <Text className='text-xl font-bold'>{formatAmount(totalAmount)} </Text>
          </View>
        </View>

        <View className='flex-row justify-between my-4'>
          <View className='flex-row gap-2 justify-center items-center'>
            <Text className='text-xl font-bold text-placeholder'>Payment with</Text>
          </View>
          <View className='flex-row justify-center gap-2'>
            <Image source={paymentMethod == "card" ? icons.card_i : paymentMethod == "om" ? assets.om : assets.momo} style={{ width: 40, height: 30 }} resizeMode='center' />
          </View>
        </View>
        <View>

        </View>

        <Pressable
          onPress={() => router.push("/main/booking/decision")}
          className={`rounded-full items-center flex-row justify-center p-4 bg-button`}
        >
          <Text className="text-white font-semibold text-xl">
            Continue
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default ConfirmPayment