import assets from '@/assets'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const Socials = ({ action }: { action: "Login" | "Signup" }) => {
    return (
        <View className='gap-2'>
            <Pressable className="bg-outlineButtonBg border border-button rounded-full items-center justify-center p-4 flex-row gap-2">
                <AntDesign name="google" size={24} color="black" />
                <Text className="text-black  font-semibold text-xl">
                    Google
                </Text>
            </Pressable>
            <Pressable className="bg-outlineButtonBg border border-button rounded-full items-center justify-center p-4 flex-row gap-2">
                <Image source={assets.sapjasha} className='h-6 w-6' />
                <Text className="text-black  font-semibold text-xl">
                    Sapjasha
                </Text>
            </Pressable>
        </View>
    )
}

export default Socials