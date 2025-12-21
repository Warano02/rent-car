import { Fontisto, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const ImagesSelecor = () => {

    return (
        <View className='gap-2'>
            <View className='border border-border bg-background px-4  flex-row items-center justify-between h-14 pr-4 rounded-xl'>
                <Text className='text-placeholder '>Upload Car Images</Text>

                <Pressable className='flex-row justify-end gap-4 items-center bg-btnBorder rounded-lg' style={{ height: 40, width: 140 }}>
                    <MaterialCommunityIcons name="camera-outline" size={24} color="#7F7F7F" />
                    <Octicons name="image" size={24} color="#7F7F7F" />
                    <View className='bg-white justify-center items-center rounded-lg border border-border' style={{ height: 40, width: 40 }}>
                        <Fontisto name="plus-a" size={24} color="#7F7F7F" />
                    </View>
                </Pressable>
            </View>

            
        </View>
    )
}

export default ImagesSelecor