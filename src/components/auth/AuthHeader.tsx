import assets from '@/assets'
import { useApp } from '@/lib/hooks/useApp'
import React from 'react'
import { Image, Text, View } from 'react-native'

const AuthHeader = () => {
    const { AppName } = useApp()
    return (
        <View className='flex-row gap-4 items-center'>
            <Image source={assets.logo_black} className='h-16 w-16 ' />
            <Text className='text-4xl font-bold text-black'>{AppName} </Text>
        </View>
    )
}

export default AuthHeader