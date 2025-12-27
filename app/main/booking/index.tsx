//Booking details
import DatePicker from '@/components/book/DatePicker'
import LocationPicker from '@/components/book/LocationPicker'
import StepperComponent from '@/components/book/StepperComponent'
import Header from '@/components/Header'
import { useBooking } from '@/lib/hooks/useCarBooking'
import { useCurrency } from '@/lib/hooks/useCurrency'
import { IDatePicker } from '@/types'
import { MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'

const BookingDetails = () => {
  const router = useRouter()

  const { location, date, totalPrice, setBookingUser, bookingUser, bookWDriver, setBookWDriver } = useBooking()
  const { formatAmount } = useCurrency()

  const [openLocationPicker, setOpenLocationPicker] = useState(false)
  const [datePicker, setDatePicker] = useState<IDatePicker>(null)
  return (
    <View className='my-4 flex-1'>
      <Header title='Booking Details' />
      <ScrollView className='flex-1 px-6'>
        <StepperComponent active={1} />

        <View className='mt-6 rounded-lg border border-border p-2 flex-row justify-between items-center'>
          <View className='gap-2'>
            <Text className='text-xl font-bold'>Book with driver</Text>
            <Text className='text-[12px] text-placeholder'>Don't have a driver? book with driver.</Text>
          </View>
          <Switch s={bookWDriver} setS={setBookWDriver} />
        </View>


        <View className='gap-2 mt-6'>
          <View className='flex-1 bg-white border-gray rounded-lg h-14 flex-row gap-2'>
            <View className='w-12 h-16 flex-row justify-center items-center'>
              <Octicons className='text-[#767676]' name="person" size={24} color="#767676" />
            </View>
            <TextInput value={bookingUser.fullName} onChangeText={(e) => setBookingUser((p) => ({ ...p, fullName: e }))} placeholder='Full Name*' autoComplete="family-name" keyboardType="name-phone-pad" className='flex-1 text-[17px]' />
          </View>
          <View className='flex-1 bg-white border-gray rounded-lg h-14 flex-row gap-2'>
            <View className='w-12 h-16 flex-row justify-center items-center'>
              <MaterialCommunityIcons name="email-outline" size={24} color="#767676" />
            </View>
            <TextInput value={bookingUser.email} onChangeText={(e) => setBookingUser((p) => ({ ...p, email: e }))} placeholder='Email Address*' autoComplete="email" keyboardType="email-address" className='flex-1 text-[17px]' />
          </View>
          <View className='flex-1 bg-white border-gray rounded-lg h-14 flex-row gap-2'>
            <View className='w-12 h-16 flex-row justify-center items-center'>
              <MaterialIcons name="phone" size={24} color="#767676" />
            </View>
            <TextInput value={bookingUser.contact} onChangeText={(e) => setBookingUser((p) => ({ ...p, contact: e }))} placeholder='Contact*' autoComplete="tel" keyboardType="numeric" className='flex-1 text-[17px]' />
          </View>
        </View>

        <View className='mt-6'>
          <Text className='text-xl font-bold my-2'>Gender</Text>
          <View className='flex-row gap-6'>
            <Pressable onPress={() => setBookingUser((p) => ({ ...p, gender: "m" }))} className={`rounded-xl flex-row justify-center items-center gap-2 ${bookingUser.gender === "m" ? "bg-black" : "border border-border"}`} style={{ height: 40, width: 100 }}>
              <MaterialCommunityIcons name="gender-male" size={24} color={bookingUser.gender == "m" ? "white" : "#7F7F7F"} />
              <Text className={`font-bold ${bookingUser.gender == "m" ? "text-white" : "text-placeholder"}`}> Male</Text>
            </Pressable>
            <Pressable onPress={() => setBookingUser((p) => ({ ...p, gender: "f" }))} className={`rounded-xl flex-row justify-center items-center gap-2 ${bookingUser.gender === "f" ? "bg-black" : "border border-border"}`} style={{ height: 40, width: 110 }}>
              <MaterialCommunityIcons name="gender-female" size={24} color={bookingUser.gender == "f" ? "white" : "#7F7F7F"} />
              <Text className={`font-bold ${bookingUser.gender == "f" ? "text-white" : "text-placeholder"}`}>Female</Text>
            </Pressable>
          </View>
        </View>

        <View className='mt-6'>
          <Text className='text-xl font-bold my-2'>Rental Date & Time</Text>
          <View className='mt-4 border border-border rounded-xl px-4 py-2 flex-row justify-between items-center'>
            <Pressable onPress={() => setDatePicker("pickup")} className='gap-2'>
              <Text className='text-[14px] font-bold'>Pick up Date</Text>
              <View className='flex-row gap-2 mt-2'>
                <MaterialIcons name="calendar-month" size={24} color={"#7F7F7F"} />
                <Text className='text-[12px] font-semibold'>{date.startDate || "01/07/2005"}</Text>
              </View>
            </Pressable>
            <View style={{ height: 40, width: 1 }} className='bg-placeholder' />
            <Pressable onPress={() => setDatePicker("return")} className='gap-2'>
              <Text className='text-[14px] font-bold'>
                Return Date
              </Text>
              <View className='flex-row gap-2 mt-2'>
                <MaterialIcons name="calendar-month" size={24} color={"#7F7F7F"} />
                <Text className='text-[12px] font-semibold'>
                  {date.endDate || "01/07/2005"}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>

        <Pressable onPress={() => setOpenLocationPicker(p => !p)}>
          <View className="bg-white border border-border rounded-lg h-14 flex-row items-center px-3 my-6">
            <SimpleLineIcons name="location-pin" size={22} color="#767676" />
            <Text className="ml-3 text-[16px] text-gray-800">
              {location?.label || "Choose Where You want to go"}
            </Text>
          </View>
        </Pressable>
      </ScrollView>

      <LocationPicker isOpen={openLocationPicker} setIsOpen={setOpenLocationPicker} />
      <DatePicker attr={datePicker} setAttr={setDatePicker} />

      <Pressable
        disabled={totalPrice === 0}
        onPress={() => router.push("/main/booking/payment")}
        className={`rounded-full items-center flex-row justify-center p-4 ${totalPrice === 0 ? "bg-gray" : "bg-button"}`}
      >
        <Text className="text-white font-semibold text-xl">
          {totalPrice > 0
            ? `${formatAmount(totalPrice)} Pay Now`
            : "Select dates "}
        </Text>
      </Pressable>

    </View>
  )
}

const Switch = ({ s, setS }: { s: boolean, setS: (p: boolean) => void }) => {
  return <Pressable onPress={() => setS(!s)} className={`rounded-xl  bg-border flex-row items-center ${s ? "justify-end" : "justify-start"}`} style={{ width: 50, height: 26, paddingHorizontal: 2 }} >
    <View className='rounded-full bg-white' style={{ height: 20, width: 20 }} />
  </Pressable>
}

export default BookingDetails