import assets from "@/assets";
import { useCurrency } from "@/lib/hooks/useCurrency";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
const SingleCar = () => {
    const { formatAmount } = useCurrency()
    const router = useRouter()
    const isFav = false
    return (
        <Pressable className='rounded-lg border border-border bg-btnBorder overflow-hidden' style={{ width: 186, height: 265 }}>
            <View className="flex-row  items-end mt-2  px-6 justify-end">
                <View className={` ${isFav ? "bg-bgTab" : "bg-white"} justify-center items-center rounded-full`} style={{ height: 30, width: 30 }}><FontAwesome name={isFav ? "heart" : "heart-o"} size={18} color={isFav ? "red" : "#767676"} /> </View>
            </View>
            <View className='flex-row justify-center items-center'>
                <Image source={assets.white_ferari} style={{ height: 88, width: 186 }} resizeMode="cover" />
            </View>

            <View className='flex-1 bg-white gap-2 px-2'>
                <Text className="font-bold text-xl mt-2">Tesla Model S</Text>
                <View className="flex-row gap-2 ">
                    <Text className="text-placeholder">5.0</Text>
                    <Text className="text-xs">⭐</Text>
                </View>
                <View className=" flex-row items-center">
                    <Ionicons name="location-outline" size={18} color={"#767676"} />
                    <Text className="text-xs text-gray-500">
                        Washington, DC
                    </Text>
                </View>
                <View className='flex-row justify-between items-center'>
                    <View className="flex-row gap-1">
                        <MaterialCommunityIcons name="sofa-outline" size={18} color="#7F7F7F" />
                        <Text className="text-[5px] text-placeholder">5 seats</Text>
                    </View>
                    <Text className='text-placeholder text-[12px]'>{formatAmount(200)}/Day </Text>

                </View>
            </View>
        </Pressable>
    );
};

export default SingleCar;
