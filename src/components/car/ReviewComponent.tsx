import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text, View, ViewStyle } from 'react-native';

interface IReviewComponent {
    containerStyle?: ViewStyle;
    fromReview?: boolean;
    ratingCount: number;
    name: string,
    profil: ImageSourcePropType,
    contain: string,
}

const ReviewComponent = ({ containerStyle, contain, profil, fromReview = false, ratingCount = 4, name, }: IReviewComponent) => {

    return (
        <Pressable className='bg-white border border-border  rounded-xl p-4 justify-between' style={[{ width: 300, marginHorizontal: 8 }, containerStyle]}>
            <View className='flex-row  items-center justify-between ' style={{ gap: 120 }}>
                <View className='flex-row items-center  gap-2'>
                    <View>
                        <Image source={profil} className='rounded-full' style={{ height: 40, width: 40 }} resizeMode="cover" />
                    </View>
                    <Text className='text-[14px] font-semibold'>{name} </Text>
                </View>
                <View className='flex-row items-center gap-2 flex-1 justify-end'>
                    {!fromReview && <Text className='text-[14px] font-bold'>{ratingCount.toFixed(1)} </Text>}
                    {fromReview && <Text className='text-placeholder text-[12px] font-medium'>Today</Text>}
                    {!fromReview && (
                        <FontAwesome name="star" size={18} color={'#FF8F3A'} />
                    )}
                </View>
            </View>
            {fromReview && (
                <View className='flex-row items-center gap-4 my-6 '>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FontAwesome
                            name="star"
                            size={16}
                            color={index < ratingCount ? '#FF8F3A' : '#C5C8D2'}
                        />
                    ))}
                </View>
            )}
            <Text className='text-[14px] text-placeholder font-medium'>
                {contain.length > 200 ? contain.slice(0, 198).concat("...") : contain}
            </Text>
        </Pressable>
    );
};


export default ReviewComponent;
