import React from 'react'
import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native'

interface IFeatures {
    icon: ImageSourcePropType,
    title: string,
    value: string
}
const FeatureComponent = ({ icon, title, value }: IFeatures) => {
    return (
        <Pressable className='bg-outlineButtonBg p-4 flex-1  justify-between rounded-xl'>
            <Pressable className='bg-white h-12 w-12  rounded-full justify-center items-center'>
                <Image source={icon} style={{ width: 24, height: 24 }} />
            </Pressable>
            <View>
                <Text className='text-placeholder text-[14px] font-semibold'>{title} </Text>
                <Text className='font-semibold text-[14px]'>{value} </Text>
            </View>
        </Pressable>
    )
}

export default FeatureComponent