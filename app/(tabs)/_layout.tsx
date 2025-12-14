import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: insets.bottom + 12,
          flexDirection: "row",
          height: 60,
          borderRadius: 60,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1F2A2E",
          borderTopWidth: 0,
          marginHorizontal:6,
          paddingHorizontal: 18,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.25,
          shadowRadius: 16,
          elevation: 12,
        },

        tabBarItemStyle: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {tab("home", "home")}
      {tab("search", "search")}
      {tab("inbox", "mail")}
      {tab("notifications", "notifications")}
      {tab("profile", "person")}
    </Tabs>
  );
}


function tab(name: string, icon: string) {
  return (
    <Tabs.Screen
      name={name}
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            // @ts-ignore
            name={focused ? icon : `${icon}-outline`}
            size={24}
            color={focused ? "#FFFFFF" : "rgba(255,255,255,0.55)"}
          />
        ),
      }}
    />
  );
}
