import * as ImagePicker from "expo-image-picker";
import { Alert, Linking } from "react-native";

export const pickImages = async (): Promise<string[]> => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (status !== "granted") {
    Alert.alert(
      "Permision required",
      "Please allow us to access to your galeri.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Allow",
          onPress: () => Linking.openSettings(),
        },
      ]
    );
    return [];
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsMultipleSelection: true,
    selectionLimit: 10,
    quality: 0.8,
  });

  if (result.canceled) return [];

  return result.assets.map((asset) => asset.uri);
};
