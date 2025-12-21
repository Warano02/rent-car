import assets from '@/assets'
import Header from '@/components/Header'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const VerifySuccess = () => {
    const router = useRouter()
    return (
        <View className='my-4 flex-1 gap-4'>
            <Header title='Verify Statues' />

            <View className='px-4 gap-6'>
                <View className='justify-center items-center gap-4'>
                    <View className='rounded-full justify-center items-center border border-border bg-[#BBF7D0]' style={{ height: 100, width: 100 }}>
                        <Image source={assets.success2} style={{ width: 50, height: 57 }} />
                    </View>
                    <Text className='text-xl font-bold'>Successful</Text>
                </View>

                <Text className='text-placeholder  text-center leading-6'>
                    Your OTP verification was successful. now You can proceed with your account setup or booking process.
                </Text>

                <Pressable onPress={() => router.push("/main/partner/payment")} className='rounded-full items-center justify-center p-4 bg-button'>
                    <Text className="text-white font-semibold text-xl">
                        Next
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default VerifySuccess