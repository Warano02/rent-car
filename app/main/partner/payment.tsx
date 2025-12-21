import assets, { icons } from '@/assets'
import PaymentMethod from '@/components/book/PaymentMethod'
import { BottomSheet } from '@/components/BottomSheet'
import Header from '@/components/Header'
import { TPaymentMethod } from '@/types'
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { BannerImage } from '../booking/payment'

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState<TPaymentMethod>("om")
    const [showSelector, setShowSelector] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [isComplete, setIscomplete] = useState(true)
    const router = useRouter()


    const processPayment = () => {
        setIsProcessing(true)

    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <View className='my-4 flex-1'>
                <Header title='Payment receive methods' />

                <ScrollView className='flex-1 px-4'>
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

                    <View className='my-6'>
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

                    <Pressable disabled={isProcessing} onPress={processPayment} className={`rounded-full flex-row items-center justify-center gap-4 p-4 ${isProcessing ? "bg-[#585858] " : "bg-button"}`} >
                        {isProcessing && <ActivityIndicator />}
                        <Text className={` font-semibold text-xl ${isProcessing ? "text-placeholder " : "text-white"}`}>
                            {isProcessing ? "paying..." : " Process Payment"}
                        </Text>
                    </Pressable>
                </ScrollView>

                {
                    isComplete && (
                        <BottomSheet visible={true} setVisible={() => console.log("Trying to close")}>
                            <View className="bg-white rounded-t-xl pt-12 px-4 gap-6" style={{ height: "50%" }}>
                                <View className='justify-center items-center gap-4'>
                                    <Image source={assets.corner} />
                                    <Text className='text-xl font-bold'>Congratulations</Text>
                                </View>

                                <Text className='text-placeholder text-center leading-4'>
                                    Your car is ready for booking. Your listing has been successfully added to the platform. Get ready to start earning.
                                </Text>
                                <Pressable onPress={() => router.replace("/(tabs)/home")} className='rounded-full items-center justify-center p-4 bg-button'>
                                    <Text className="text-white font-semibold text-xl">
                                        Back to Home
                                    </Text>
                                </Pressable>
                            </View>
                        </BottomSheet>)
                }

                <PaymentMethod isVisible={showSelector} setIsVisible={setShowSelector} setP={setPaymentMethod} />
            </View>

        </KeyboardAvoidingView>
    )
}





export default Payment