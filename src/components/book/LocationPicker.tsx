import { useBooking } from '@/lib/hooks/useCarBooking';
import { useLocationSearch } from '@/lib/hooks/useLocationSearch';
import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import {
    FlatList,
    Pressable,
    Text,
    TextInput,
    View,
    useWindowDimensions,
} from 'react-native';
import { BottomSheet } from '../BottomSheet';

interface ILocationPicker {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationPicker = ({ isOpen, setIsOpen }: ILocationPicker) => {
    const { query, setQuery, results, loading } = useLocationSearch();
    const { height } = useWindowDimensions();
    const { setLocation } = useBooking()
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
                                setLocation({label:item.description,lat:item.lat,long:item.lon})
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
                    {/* Icon */}
                    <View className="w-9 h-9 rounded-full bg-gray-100 items-center justify-center">
                        <Ionicons name="location-outline" size={18} color="#111827" />
                    </View>

                    {/* Text */}
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


export default LocationPicker;
