import assets from "@/assets";
import { useApp } from "@/lib/hooks/useApp";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";

const BecomePartner = () => {
    const { AppName } = useApp()
    const { logo, overlayBg, partner } = assets;
    const router = useRouter()
    return (
        <ImageBackground source={partner} resizeMode="cover" className="flex-1 bg-white" >
            <ImageBackground source={overlayBg} resizeMode="cover" className="flex-1 justify-between px-5 pt-3">
                <View>
                    <View className="bg-white p-3 rounded-full self-start mt-8">
                        <Image source={logo} resizeMode="contain" className="w-9 h-9" />
                    </View>
                    <View className="mt-8 gap-4">
                        <Text className="text-white text-[40px] font-semibold">Welcome to</Text>
                        <Text className="text-white text-[30px] font-semibold">{AppName.toLocaleUpperCase()} Partner program </Text>
                    </View>
                </View>
                <View className="mt-[120px]">
                    <Text className="font-medium text-xl text-white">
                        Welcome to Our Community! We’re glad to have you as a partner in our car rental service. Ready to rent out your car? Let’s get started!
                    </Text>
                </View>

                <Pressable onPress={() => router.push("/main/partner/details")} className="bg-button rounded-full items-center justify-center p-6 mb-8">
                    <Text className="text-white font-semibold text-xl">
                        Next
                    </Text>
                </Pressable>

            </ImageBackground>
        </ImageBackground>
    )
}

export default BecomePartner