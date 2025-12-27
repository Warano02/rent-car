import { useApp } from '@/lib/hooks/useApp';
import { useBooking } from '@/lib/hooks/useCarBooking';
import { FontAwesome } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Image, ImageSourcePropType, Pressable, View } from 'react-native';

const { width } = Dimensions.get('window');

const ImageSlider = ({ images }: { images: ImageSourcePropType[] }) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const handleScroll = (event: any) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };
    const { isFav, toggleFavoriteCar } = useApp()
    const { details } = useBooking()
    return (
        <View className='bg-btnBorder pb-6'>
            <View className='flex-end w-full ' style={{ height: 50 }}>
                <View className="flex-row  items-end mt-2  px-6 justify-end">
                    <Pressable onPress={() => toggleFavoriteCar(details.id)} className={` ${isFav(details.id) ? "bg-bgTab" : "bg-white"} justify-center items-center rounded-full`} style={{ height: 30, width: 30 }}>
                        <FontAwesome name={isFav(details.id) ? "heart" : "heart-o"} size={18} color={isFav(details.id) ? "red" : "#767676"} />
                    </Pressable>
                </View>
            </View>
            <FlatList
                ref={flatListRef}
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image
                        source={item}
                        style={{ width: 360, height: 220 }}
                        resizeMode="contain"
                    />
                )}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false, listener: handleScroll },
                )}
            />

            <View className='flex-row justify-center mt-6'>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            [
                                {
                                    backgroundColor: index === currentIndex ? '#333' : '#bbb',
                                },
                                {
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    marginHorizontal: 5,
                                },
                            ],
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

export default ImageSlider;
