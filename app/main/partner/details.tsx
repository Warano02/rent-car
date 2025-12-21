import Header from '@/components/Header'
import BrandPicker from '@/components/partner/BrandPicker'
import ImagesSelecor from '@/components/partner/ImagesSelecor'
import { useApp } from '@/lib/hooks/useApp'
import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'

const CarAndOwnerDetails = () => {
    const { AppName } = useApp()
    return (
        <View className='my-4 flex-1 gap-4 '>
            <Header title={`${AppName.toLocaleUpperCase()} Partner program`} />

            <ScrollView className='px-4'  showsVerticalScrollIndicator={false}>
                <View className='gap-4'>
                    <Text className='font-semibold text-xl'>Car owner information</Text>

                    <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
                        <TextInput placeholder='Full Name' className='font-semibold text-black text-[14px] flex-1' />
                    </View>

                    <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
                        <TextInput placeholder='Email Addresse' className='font-semibold text-black text-[14px] flex-1' />
                    </View>

                    <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
                        <TextInput placeholder='WhatsApp number' className='font-semibold text-black text-[14px] flex-1' />
                    </View>

                    <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
                        <TextInput placeholder='Driving licence Number' className='font-semibold text-black text-[14px] flex-1' />
                    </View>
                </View>

                <View className='gap-4 my-4'>
                    <Text className='font-semibold text-xl'>Car  information</Text>
                    <BrandPicker />
                    <ImagesSelecor />
                </View>

            </ScrollView>

        </View>
    )
}

export default CarAndOwnerDetails