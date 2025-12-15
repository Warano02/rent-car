import assets from "@/assets";
import { useCurrency } from "@/lib/hooks/useCurrency";
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
const SingleCar = () => {
    const { formatAmount } = useCurrency()
    const router=useRouter()
    return (
        <Pressable onPress={()=>router.push(`/main/car`)} className="my-4 flex-1 bg-btnBorder border-border relative rounded-xl">
            <View className="flex-row  items-end mt-2 flex-1 px-6 justify-end">
                <FontAwesome name="heart-o" size={24} color={"#767676"} />
            </View>
            <View className="flex-row relative justify-center items-center overflow-hidden">
                <Image source={assets.white_ferari} height={88} width={186} resizeMode="center" />

            </View>
            <View className=" bg-white gap-4">
                <Text className="font-bold text-xl">Ferrari-FF</Text>
                <View className="flex-row gap-2 mt-4">
                    <Text className="text-placeholder">5.0</Text>
                    <Text className="text-xs">⭐</Text>
                </View>

                <View className=" flex-row items-center">
                    <Ionicons
                        name="location-outline"
                        size={24}
                        color={"#767676"}
                    />
                    <Text className="text-xs text-gray-500">
                        Washington DC
                    </Text>
                </View>

                <View className="flex-row justify-between ">
                    <View className="flex-row gap-1">
                        <MaterialCommunityIcons name="sofa" size={24} color={"#767676"} />
                        <Text className="text-placeholder text-xs">5 Seats</Text>
                    </View>
                    <View className="flex-row gap-1">
                        <MaterialIcons name="currency-franc" size={18} color={"#767676"} />
                        <Text className="text-[9px]"> {formatAmount(200)}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default SingleCar;
