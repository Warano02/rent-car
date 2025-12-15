import assets from '@/assets';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View, ViewStyle } from 'react-native';

interface IReviewComponent {
    containerStyle?: ViewStyle;
    fromReview?: boolean;
    ratingCount?: number;
}

const ReviewComponent = ({
    containerStyle,
    fromReview,
    ratingCount = 4,
}: IReviewComponent) => {

    return (
        <Pressable className='bg-white border border-border  rounded-xl p-4' style={[{ width: 300, marginHorizontal: 8 }, containerStyle]}>
            <View className='flex-row items-center gap-6'>
                <View className='flex-row items-center  gap-2'>
                    <View>
                        <Image source={assets.person} height={5} width={2} resizeMode="cover" />
                    </View>
                    <Text className='text-[14px] font-semibold'>John Doe</Text>
                </View>
                <View className='flex-row items-center gap-2 flex-1 justify-end'>
                    {!fromReview && <Text className='text-[14px] font-bold'>5.0</Text>}
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum alias
                accusantium qui rerum iste perferendis consectetur non voluptatibus,
            </Text>
        </Pressable>
    );
};


export default ReviewComponent;
