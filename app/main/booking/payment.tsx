// User choose paiement method(Card | mobile money) and enter their informations
import assets, { icons } from '@/assets'
import PaymentMethod from '@/components/book/PaymentMethod'
import StepperComponent from '@/components/book/StepperComponent'
import Header from '@/components/Header'
import { useBooking } from '@/lib/hooks/useCarBooking'
import { TPaymentMethod } from '@/types'
import { Entypo, Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native'

const PaiementDetails = () => {
  const { paymentMethod, setPaymentMethod } = useBooking()
  const [showSelector, setShowSelector] = useState(false)
  const [checked, setChecked] = useState(false)
  const router = useRouter()
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <View className='my-4 flex-1'>
        <Header title='Payment Methods' />
        <ScrollView className='flex-1 px-4'>
          <StepperComponent active={2} />
          <BannerImage pm={paymentMethod} />

          <View className='mt-4'>
            <Text className='text-[16px] font-semibold'>Select payment method</Text>
            <Pressable onPress={() => setShowSelector(p => !p)} className='flex-row justify-between items-center p-4 rounded-lg border border-border mt-4'>
              <View className='flex-1 flex-row items-center gap-2'>
                <FontAwesome5 name="money-bill-wave" size={24} color="#767676" />
                <Text className='text-[14px] text-placeholder font-bold'>
                  {
                    paymentMethod == "om" ? "Orange Money Payment" : paymentMethod == "card" ? "Card Payment" : "Mobile Money Payment"
                  }
                </Text>
              </View>

              {
                paymentMethod == "om" && <View className='rounded-lg border-border bg-btnBorder flex-row justify-center items-center' style={{ width: 75, height: 30 }}>
                  <Text className='text-[14px] text-placeholder'>DEFAULT</Text>
                </View>
              }
            </Pressable>
          </View>

          <View className='mt-4'>
            <Text className='text-[16px] font-semibold'>{paymentMethod == "card" ? "Card information" : "Payment informations"} </Text>

            {
              paymentMethod == "card" ? <View className='mt-4 gap-4'>
                <View className='rounded-lg bg-white border border-border flex-row gap-2 px-2 ' style={{ width: 360, height: 55 }}>
                  <TextInput className='flex-1 text-[16px]' inputMode="text" textContentType="familyName" placeholder='Full Name' />
                </View>
                <View className='rounded-lg bg-white border border-border flex-row gap-2 px-2 ' style={{ width: 360, height: 55 }}>
                  <TextInput className='flex-1 text-[16px]' inputMode="email" textContentType="emailAddress" placeholder='Email Address' />
                </View>
                <View className='rounded-lg bg-white border border-border flex-row gap-2 px-2 items-center ' style={{ width: 360, height: 55 }}>
                  <TextInput className='flex-1 text-[16px]' inputMode="numeric" textContentType="creditCardNumber" placeholder='Number' />
                  <Image source={icons.cards} />
                </View>

                <View className='rounded-lg bg-white border border-border flex-row gap-2 px-2 items-center ' style={{ width: 360, height: 55 }}>
                  <TextInput className='flex-1 text-[16px]' inputMode="numeric" textContentType="creditCardNumber" placeholder='MM / YY' />
                  <View className='bg-placeholder' style={{ width: 2, height: 30 }} />
                  <View className='flex-1 flex-row justify-between items-center'>
                    <TextInput className='flex-1 text-[16px]' inputMode="numeric" textContentType="creditCardNumber" placeholder='CVC' />
                    <Entypo name="credit-card" size={24} color="#7F7F7F" />
                  </View>
                </View>
              </View>
                : <View className='mt-4 gap-4'>
                  <View className='rounded-lg bg-white border border-border flex-row gap-2 px-2 items-center ' style={{ width: 360, height: 55 }}>
                    <View className='flex-1 flex-row justify-between items-center'>
                      <Feather name="phone" size={24} color="#7F7F7F" />
                      <TextInput className='flex-1 text-[16px]' inputMode="numeric" textContentType="creditCardNumber" placeholder='Phone Number (exp: 6898***50)' />
                    </View>
                  </View>
                </View>
            }

          </View>

          <View className='flex-row justify-between items-center my-6'>
            <View className='flex-row gap-2'>
              <Pressable
                onPress={() => setChecked(!checked)}
                className='bg-checkBoxBg h-7 w-7 rounded-lg'>
                {checked && (
                  <MaterialIcons name="check" size={26} color="white" />
                )}
              </Pressable>
              <Text className='text-[15px] text-black '> Accept <Link href={"https://"}>Terms </Link> </Text>
            </View>
          </View>
        </ScrollView>
        <Pressable
          disabled={!checked}
          onPress={() => router.push("/main/booking/confirm")}
          className={`rounded-full items-center flex-row justify-center p-4 ${!checked ? "bg-gray" : "bg-button"}`}
        >
          <Text className="text-white font-semibold text-xl">
            Continue
          </Text>
        </Pressable>
        <PaymentMethod isVisible={showSelector} setIsVisible={setShowSelector} setP={setPaymentMethod} />
      </View>
    </KeyboardAvoidingView>
  )
}


const BannerImage = ({ pm }: { pm: TPaymentMethod }) => {
  return (
    <View
      className="mt-4 rounded-lg border border-border overflow-hidden"
      style={{ height: 218, width: 360 }}
    >

      <Image
        source={pm === "om" ? assets.om : pm == "card" ? assets.card : assets.momo}
        className="h-full w-full"
        resizeMode="cover"
      />

    </View>
  );
};


export default PaiementDetails