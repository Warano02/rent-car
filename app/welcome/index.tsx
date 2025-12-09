import assets from "@/assets";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";

const Index = () => {
  const { logo, overlayBg, whiteCar } = assets;
  const router = useRouter()
  return (
    <ImageBackground source={whiteCar} resizeMode="cover" className="flex-1 bg-white" >
      <ImageBackground source={overlayBg} resizeMode="cover" className="flex-1 justify-between px-5 pt-3">
        <View>
          <View className="bg-white p-3 rounded-full self-start mt-8">
            <Image source={logo}resizeMode="contain" className="w-9 h-9"/>
          </View>
          <View className="mt-8">
            <Text className="text-white text-[40px] font-semibold">Welcome to</Text>
            <Text className="text-white text-[40px] font-semibold">Qent</Text>
          </View>
        </View>
        <Pressable onPress={() => router.push("./welcome/welcome")} className="bg-button rounded-full items-center justify-center p-6 mb-8">
          <Text className="text-white font-semibold text-xl">
            Next
          </Text>
        </Pressable>

      </ImageBackground>
    </ImageBackground>
  );
};

 
export default Index;
