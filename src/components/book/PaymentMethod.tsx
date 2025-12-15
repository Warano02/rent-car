import assets from '@/assets';
import { TPaymentMethod } from '@/types';
import React from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { BottomSheet } from '../BottomSheet';

interface IPM {
    isVisible: boolean,
    setIsVisible: (b: boolean) => void,
    setP: (v: TPaymentMethod) => void
}

type TP = { label: string, v: TPaymentMethod, icon: any }
const PaymentMethod = ({ isVisible, setIsVisible, setP }: IPM) => {
  const data: TP[] = [
    { label: "Orange Money", v: "om", icon: assets.om },
    { label: "Mobile Money", v: "momo", icon: assets.momo },
    { label: "Card Payment", v: "card", icon: assets.card },
   
  ];

  return (
    <BottomSheet visible={isVisible} setVisible={setIsVisible}>
      <View className="bg-white rounded-t-xl pt-12 px-4" style={{ height: "50%" }}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.v}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setIsVisible(false);
                setP(item.v);
              }}
              className="flex-row items-center py-4 my-2 px-6 gap-4 rounded-lg border border-border"
            >
              <Image
                source={item.icon}
                className="w-12 h-12"
                resizeMode="contain"
              />

              <Text className="text-base text-gray-800 flex-1">
                {item.label}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </BottomSheet>
  );
};


export default PaymentMethod