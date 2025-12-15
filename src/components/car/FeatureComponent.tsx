import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const FeatureComponent = () => {
    return (
        <Pressable className='bg-outlineButtonBg p-4 flex-1  justify-between rounded-xl'>
            <Pressable className='bg-white h-12 w-12  rounded-full justify-center items-center'>
                <MaterialCommunityIcons
                    name="sofa-single-outline"
                    color={'#767676'}
                    size={20}
                />
            </Pressable>
            <View>
                <Text className='text-placeholder text-[14px] font-semibold'>Capacity</Text>
                <Text className='font-semibold text-[14px]'>5 Seats</Text>
            </View>
        </Pressable>
    )
}

export default FeatureComponent