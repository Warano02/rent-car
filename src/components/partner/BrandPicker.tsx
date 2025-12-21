import { useRentOutCar } from '@/lib/hooks/useRentOutCar'
import React, { useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'

const BrandPicker = () => {
    const [selector, setSelector] = useState<"model" | "brand">("brand")
    const { carsBrands } = useRentOutCar()
    return (
        <View className='my-2 gap-6'>

            <View className='flex-row border border-border rounded-lg p-2 justify-between'>
                <Pressable onPress={() => setSelector("brand")} className={`rounded-lg flex-1 justify-center items-center ${selector === "brand" && "bg-button"}`} style={{ width: 180, height: 40 }} >
                    <Text className={`font-bold ${selector === "brand" ? "text-white" : "text-placeholder"}`}>Car Brand</Text>

                </Pressable>
                <Pressable onPress={() => setSelector("model")} className={`rounded-lg flex-1 justify-center items-center ${selector === "model" && "bg-button"}`} style={{ width: 180, height: 40 }}>
                    <Text className={`font-bold ${selector === "model" ? "text-white" : "text-placeholder"}`}>Car Model</Text>
                </Pressable>
            </View>

            <View className='py-4 rounded-lg border border-border'>
                {
                    selector === "brand" ? <View className={`px-4 flex-row  justify-between  items-center`}>
                        <Text className='font-bold '>Regular Cars Brand</Text>
                        <Text className='font-bold '>Lucury Cars Brand</Text>
                    </View> :
                        <View className=' justify-between  items-center'>
                            <Text className='font-bold'>Select Your model</Text>
                        </View>
                }

                <View className='bg-border my-4' style={{ height: 1.5, width: "100%" }} />

                {selector === "brand" ? (
                    <View className='py-2 flex-row gap-1' style={{ maxHeight: 157 }}>
                        <FlatList
                            data={carsBrands.map(e => { const { models, ...r } = e; return r }).filter(d => d.type === "luxury")}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ index, item }) => <SingleBrand brand={item.name} />}
                        />


                        <View className='bg-border h-full' style={{ width: 1.5 }} />
                        <FlatList
                            data={carsBrands.map(e => { const { models, ...r } = e; return r }).filter(d => d.type === "regular")}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ index, item }) => <SingleBrand brand={item.name} />}
                        />
                    </View>
                ) : (
                    <View className='px-4  flex-1' style={{ maxHeight: 157 }}>
                        <FlatList
                            data={Array(13).fill("")}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item }) => <SingleModel />}
                        />

                    </View>
                )
                }
            </View>

        </View>
    )
}

interface ISingleBrand {
    brand: string,
    isSelected?: boolean
}

const SingleBrand = ({ brand = "Tesla", isSelected = false }: ISingleBrand) => {
    return (
        <Pressable className={`justify-center items-center ${isSelected ? "border border-border bg-btnBorder rounded-lg" : ""}`} style={{ width: "100%", height: 35 }}>
            <Text className={`${isSelected ? "font-bold" : "text-placeholder"}`}>{brand} </Text>
        </Pressable>
    )
}


interface ISingleModel {
    name?: string
    isSelected?: boolean
    onPress?: () => void
}

const SingleModel = ({ name = "class_C", isSelected = false, onPress }: ISingleModel) => {
    return (
        <Pressable
            onPress={onPress}
            className={`justify-center items-center rounded-lg border   my-2 ${isSelected ? "bg-button border-button" : "bg-background border-border"}`}
            style={{ width: "90%", height: 35 }}>
            <Text className={`font-semibold ${isSelected ? "text-white" : "text-black"}`}>
                {name}
            </Text>
        </Pressable>
    )
}


export default BrandPicker