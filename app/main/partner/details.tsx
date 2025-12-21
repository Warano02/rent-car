import Header from '@/components/Header'
import BrandPicker from '@/components/partner/BrandPicker'
import ColorPicker from '@/components/partner/ColorPicker'
import ImagesSelecor from '@/components/partner/ImagesSelecor'
import { useApp } from '@/lib/hooks/useApp'
import { MaterialIcons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native'

const CarAndOwnerDetails = () => {
    const { AppName } = useApp()
    const fuelTypes = ["electric", "petrol", "diesel", "hybrid"]
    const [selectedFuelType, setSelectedFuelTpe] = useState<typeof fuelTypes[number]>(fuelTypes[0])
    const [desc, setDesc] = useState("")
    const [checked, setChecked] = useState(false)
    const router = useRouter()
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            className='my-4 flex-1 gap-4 '
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} // ajuster selon ton header
        >
            <Header title={`${AppName.toLocaleUpperCase()} Partner program`} />

            <ScrollView keyboardShouldPersistTaps="handled" className='px-4' showsVerticalScrollIndicator={false}>
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

                    <View className='border border-border bg-background px-2  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
                        <TextInput placeholder='Car Registration Number' className='font-semibold text-black text-[14px] flex-1' />
                    </View>
                </View>

                <ColorPicker />

                <View className='my-4 gap-4'>
                    <Text className='font-semibold text-xl'>Fuel Type</Text>
                    <View className='flex-row gap-4'>
                        {
                            fuelTypes.map((ft, idx) => (
                                <Pressable onPress={() => setSelectedFuelTpe(ft)} key={idx} className={`rounded-lg justify-center items-center ${selectedFuelType == ft ? "bg-black" : "bg-white border border-border"}`} style={{ width: 80, height: 40 }}>
                                    <Text className={`${selectedFuelType == ft ? "text-white" : "text-placeholder"}`} >
                                        {ft[0].toLocaleUpperCase().concat(ft.slice(1))}
                                    </Text>
                                </Pressable>
                            ))
                        }
                    </View>
                </View>

                <View className='my-4'>
                    <View className='bg-white rounded-lg border border-border px-4 p-2' style={{ height: 130 }}>
                        <TextInput
                            value={desc}
                            onChangeText={setDesc}
                            multiline={true}
                            placeholder="Describe your car..."
                            className='flex-1 '
                            maxLength={1000}
                            style={{ textAlignVertical: "top" }} />
                        <View className='flex-row justify-end '>
                            <Text className='text-placeholder text-xs'>{desc.length}/1000 </Text>
                        </View>
                    </View>
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
                <Pressable disabled={!checked} onPress={() => router.push("/main/partner/otpPartner")} className={`rounded-full items-center flex-row justify-center p-4 ${!checked ? "bg-gray" : "bg-button"}`}>
                    <Text className="text-white font-semibold text-xl">
                        Submit & Continue
                    </Text>
                </Pressable>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default CarAndOwnerDetails