import assets from "@/assets";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";

const Welcome = () => {
  const { logo, overlayBg, carBg } = assets;
  const router = useRouter()
  return (
    <ImageBackground source={carBg} resizeMode="cover" className="flex-1 bg-white" >
      <ImageBackground source={overlayBg} resizeMode="cover" className="flex-1 justify-between px-5 pt-3">
        <View>
          <View className="bg-white p-3 rounded-full self-start mt-8">
            <Image source={logo}resizeMode="contain" className="w-9 h-9"/>
          </View>
          <View className="mt-8">
            <Text className="text-white text-[40px] font-semibold">Lets Start</Text>
            <Text className="text-white text-[40px] font-semibold">A New Experience</Text>
            <Text className="text-white text-[40px] font-semibold">With Car rental.</Text>
          </View>
        </View>
        <View>
          <Text className="font-medium text-xl text-white">
             Discover your next adventure with Qent. we’re here to
          </Text>
          <Text className="font-medium text-xl text-white">
            provide you with a seamless car rental experience.
          </Text>
          <Text className="font-medium text-xl text-white">
            Let’s get started on your journey.
          </Text>
        </View>
        <Pressable onPress={() => router.push("../auth")} className="bg-button rounded-full items-center justify-center p-6 mb-8">
          <Text className="text-white font-semibold text-xl">
            Next
          </Text>
        </Pressable>

      </ImageBackground>
    </ImageBackground>
  );
};

 
export default Welcome;
