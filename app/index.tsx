import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.navigate("./welcome")
    }, 2000);
  }, [])
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Start your app with <Text className="text-fuchsia-700">Calvino Pro 🤖</Text>
      </Text>
    </View>
  );
}
