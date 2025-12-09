import Provider from "@/lib/providers";
import { PortalHost, PortalProvider } from "@gorhom/portal";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import '../global.css';
export default function RootLayout() {
  return <Provider>
    <SafeAreaView className="flex-1 bg-secondary">
      <PortalProvider>
        <Stack screenOptions={{ headerShown: false, }} />
        <PortalHost name="root" />
      </PortalProvider>
    </SafeAreaView>
  </Provider>
}
