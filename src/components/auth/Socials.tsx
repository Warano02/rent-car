import assets from '@/assets'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Button } from '../ui/button'

const Socials = ({ action }: { action: "Login" | "Signup" }) => {
    return (
        <View className='gap-2'>
            <Button className="bg-outlineButtonBg border border-button rounded-full items-center justify-center p-4">
                <AntDesign name="google" size={24} color="black" />
                <Text className="text-black  font-semibold text-xl">
                    Google
                </Text>
            </Button>
            <Button className="bg-outlineButtonBg border border-button rounded-full items-center justify-center p-4">
                <Image source={assets.sapjasha} className='h-6 w-6' />
                <Text className="text-black  font-semibold text-xl">
                    Sapjasha
                </Text>
            </Button>
        </View>
    )
}

export default Socials