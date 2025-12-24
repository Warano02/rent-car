//Enter the number for sending verifications code to whatsapp
import AuthHeader from '@/components/auth/AuthHeader';
import { BottomSheet } from '@/components/BottomSheet';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

const countries = [
    { code: 'CM', name: 'Cameroon', flag: '🇨🇲', ph: '+237' },
    { code: 'CF', name: 'Central African Republic', flag: '🇨🇫', ph: '+236' },
    { code: 'TD', name: 'Chad', flag: '🇹🇩', ph: '+235' },
    { code: 'CG', name: 'Republic of the Congo', flag: '🇨🇬', ph: '+242' },
    { code: 'CD', name: 'RDC', flag: '🇨🇩', ph: '+243' },
    { code: 'GQ', name: 'Equatorial Guinea', flag: '🇬🇶', ph: '+240' },
    { code: 'GA', name: 'Gabon', flag: '🇬🇦', ph: '+241' },
];

const EnterNumberForVerification = () => {
    
    const [isVisible, setIsVisible] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(countries[0])
    return (
        <ScrollView className='flex-1 px-6 pt-8'>
            <AuthHeader/>

            <View className='my-4 flex-row justify-center'>
                <Text className='text-black text-3xl font-semibold'>Verify your Phone number</Text>
            </View>

            <View className='my-6'>
                <Text className='text-[14px] text-gray '>
                    We have send you an Whatsapp Message with a code to number
                </Text>
            </View>


            <View className='gap-2'>
                <View>
                    <Pressable
                        onPress={() => setIsVisible(!isVisible)}
                        className='border border-border rounded-xl bg-white py-1 mt-2 flex-row items-center justify-between pr-12 h-14'>
                        <Text className='text-xl text-placeholder py-1 flex-1 ml-10'>
                            {selectedCountry?.flag}
                            {'\t\t'}
                            {selectedCountry?.name}
                        </Text>
                    </Pressable>
                    <BottomSheet visible={isVisible} setVisible={setIsVisible} >
                        <View className='bg-white flex-1/3 rounded-sm pt-11'>
                            <FlatList
                                data={countries}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <Pressable
                                        onPress={() => {
                                            setSelectedCountry(item);
                                            setIsVisible(false);

                                        }}
                                        className='py-4 px-2 '>
                                        <Text className='text-xl text-placeholder px-2 flex-1 ml-10'>
                                            {item?.flag} {'\t\t'}
                                            {item?.name}
                                        </Text>
                                    </Pressable>
                                )}
                            />
                        </View>
                    </BottomSheet>
                </View>


                <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
                    <View className='w-14 h-full flex-row items-center justify-center mr-2 '>
                        <Pressable onPress={() => setIsVisible(!isVisible)}>
                            <Text className='text-xl font-semibold ' >
                                {selectedCountry.ph}
                            </Text>
                        </Pressable>
                        <View className='w-[0.5px] mx-2 h-full bg-placeholder'></View>
                    </View>
                    <TextInput keyboardType='numeric' placeholder='Phone Number' className='font-semibold text-[16px] flex-1 text-black' />
                </View>
            </View>

            <View className='my-6 gap-2'>
                <Pressable className="bg-button rounded-full items-center justify-center p-4" onPress={() => router.push("/auth/verifications/otp")}>
                    <Text className="text-white font-semibold text-xl">
                        Continue
                    </Text>
                </Pressable>

                <View className='mt-6 flex-row gap-2 justify-center'>
                    <Text className='text-[17px] text-center text-secondary'>Return </Text>
                    <Link href={"/auth"} className='text-[17px] text-center font-bold '>to Sign in</Link>
                </View>
            </View>



        </ScrollView>
    )
}


export default EnterNumberForVerification