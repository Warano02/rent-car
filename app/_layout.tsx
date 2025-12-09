import Provider from "@/lib/providers";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import '../global.css';
export default function RootLayout() {
  return <Provider>
    <SafeAreaView className="flex-1 bg-secondary">
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  </Provider>
}
