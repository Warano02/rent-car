import { useLocationSearch } from '@/lib/hooks/useLocationSearch'
import { TLocation } from '@/types'
import { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { FlatList, Pressable, Text, TextInput, useWindowDimensions, View } from 'react-native'
import { BottomSheet } from '../BottomSheet'

interface IFilter {
    sFilter: boolean,
    setSfilter: (b: boolean) => void
}



const FilterCars = ({ sFilter, setSfilter }: IFilter) => {
    const FuelTypes = ["electric", "petrol", "diesel", "hybrid"]
    const [type, setType] = useState<"all" | "regular" | "luxury" | string>("all")
    const [lPicker, setLPicker] = useState(false)
    const [location, setLocation] = useState<TLocation | null>(null)
    const [seats, setSeats] = useState(4)
    const [fuelType, setFuelType] = useState<typeof FuelTypes[number]>(FuelTypes[0])
    return (
        <BottomSheet visible={sFilter} setVisible={setSfilter}>
            <View className='flex-1 mt-6 bg-white rounded-xl py-4 gap-6 '>
                <View className='flex-row px-4 py-2 items-center border-b border-b-border relative'>
                    <Pressable onPress={() => setSfilter(false)} className='rounded-full border border-border flex-row items-center justify-center' style={{ height: 30, width: 30 }}>
                        <Feather name="x" size={18} color="black" />
                    </Pressable>
                    <Text className='flex-1 text-center font-bold text-xl'>
                        Filters
                    </Text>
                </View>
                <View className='flex-1 gap-4'>
                    <View className='px-4 my-2   gap-4 relative' style={{ height: 60 }} >
                        <Text className='font-bold text-[15px]'>Type of Cars</Text>
                        <View className='flex-1 rounded-lg flex-row relative ' >
                            {
                                [{ type: "all", label: "All Cars" }, { type: "regular", label: "Regular Cars" }, { type: "luxury", label: "Luxury Cars" }].map((el, idx) => (
                                    <Pressable onPress={() => setType(el.type)} key={idx} className={`rounded-full flex-1 items-center justify-center ${el.type == type ? "bg-bgTab" : ""}`} style={{ height: 46 }}>
                                        <Text className={`font-bold ${el.type == type ? "text-white" : ""}`}>{el.label} </Text>
                                    </Pressable>

                                ))
                            }
                        </View>
                    </View>



                    <View className='px-4 mt-4  gap-2  relative'>
                        <Text className='font-bold text-[15px]'>Car Location</Text>
                        <Pressable onPress={() => setLPicker(p => !p)}>
                            <View className="bg-white border border-border rounded-lg h-14 flex-row items-center px-3 ">
                                <SimpleLineIcons name="location-pin" size={22} color="#767676" />
                                <Text className="ml-3 text-[16px] text-gray-800">
                                    {location?.label || "Choose Where You want to go"}
                                </Text>
                            </View>
                        </Pressable>
                    </View>



                    <View className='px-4 my-2 gap-4 relative'>
                        <Text className='font-bold text-[15px]'>Siting Capacity</Text>
                        <View className='flex-row justify-between items-center'>
                            {
                                [2, 4, 6, 8].map((el, idx) => (
                                    <Pressable onPress={() => setSeats(el)} key={idx} className={`rounded-full justify-center items-center ${seats == el ? "bg-black" : "bg-white border border-border"}`} style={{ width: 80, height: 40 }} >
                                        <Text className={`font-bold ${seats == el ? "text-white" : "text-placeholder"}`} >{el} </Text>
                                    </Pressable>
                                ))
                            }
                        </View>
                    </View>

                    <View className='px-4 my-2 gap-4 relative'>
                        <Text className='font-bold text-[15px]'>Fuel Type </Text>
                        <View className='flex-row justify-between items-center'>
                            {
                                FuelTypes.map((el, idx) => (
                                    <Pressable onPress={() => setFuelType(el)} key={idx} className={`rounded-full justify-center items-center ${fuelType == el ? "bg-black" : "bg-white border border-border"}`} style={{ width: 80, height: 40 }} >
                                        <Text className={`font-bold ${fuelType == el ? "text-white" : "text-placeholder"}`} >{el[0].toLocaleUpperCase().concat(el.slice(1))} </Text>
                                    </Pressable>
                                ))
                            }
                        </View>
                    </View>

                </View>

                <View className='flex-row justify-between items-center px-2  border-t border-t-border' style={{ height: 70 }}>
                    <Pressable className=' rounded-full px-6 py-4 border border-border '>
                        <Text className='font-semibold text-placeholder'>Clear All</Text>
                    </Pressable>

                    <Pressable className='rounded-full px-6 py-4 bg-black'>
                        <Text className='text-white font-bold'>Show 100+ Cars</Text>
                    </Pressable>
                </View>

                <LocationPicker isOpen={lPicker} setIsOpen={setLPicker} setLocation={setLocation} />
            </View>
        </BottomSheet>
    )
}


interface ILocationPicker {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setLocation: (d: TLocation) => void
}

const LocationPicker = ({ isOpen, setIsOpen, setLocation }: ILocationPicker) => {
    const { query, setQuery, results, loading } = useLocationSearch();
    const { height } = useWindowDimensions();
    return (
        <BottomSheet visible={isOpen} setVisible={setIsOpen}>
            <View className="bg-white px-4 pt-4 rounded-t-2xl" style={{ height: height * 0.5 }}  >

                <TextInput
                    placeholder="Search address..."
                    value={query}
                    onChangeText={setQuery}
                    autoFocus
                    className="h-12 border border-border rounded-lg px-3 mb-4"
                />

                {loading && (
                    <Text className="text-center text-gray-400 mt-4">
                        Searching...
                    </Text>
                )}

                {!loading && query.length > 2 && results.length === 0 && (
                    <Text className="text-center text-gray-400 mt-4">
                        No results found
                    </Text>
                )}
                <FlatList
                    data={results}
                    keyExtractor={(item) => item.id}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <LocationResultItem
                            item={item}
                            onPress={() => {
                                setLocation({ label: item.description, lat: item.lat, long: item.lon })
                                console.log(item);
                                setIsOpen(false);
                            }}
                        />
                    )}
                />

            </View>
        </BottomSheet>
    );
};



interface Props {
    item: {
        id: string;
        label: string;
        description: string;
    };
    onPress: () => void;
}

const LocationResultItem = ({ item, onPress }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            className="mb-2"
            android_ripple={{ color: "#E5E7EB" }}
        >
            {({ pressed }) => (
                <View
                    className={`
            flex-row items-start gap-3 p-3 rounded-xl
            ${pressed ? "bg-gray-100" : "bg-white"}
          `}
                >
                    <View className="w-9 h-9 rounded-full bg-gray-100 items-center justify-center">
                        <Ionicons name="location-outline" size={18} color="#111827" />
                    </View>

                    <View className="flex-1">
                        <Text
                            numberOfLines={1}
                            className="text-[15px] font-semibold text-gray-900"
                        >
                            {item.label}
                        </Text>

                        <Text
                            numberOfLines={2}
                            className="text-[13px] text-gray-500 mt-0.5"
                        >
                            {item.description}
                        </Text>
                    </View>
                </View>
            )}
        </Pressable>
    );
};


export default FilterCars