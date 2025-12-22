import { TImageMessage } from "@/types"
import { FlatList, Image, View } from "react-native"
import { BottomSheet } from "../BottomSheet"

interface IVisualizeImages {
    images: TImageMessage[],
    visible: boolean,
    setVisible: (b: boolean) => void,
    index?: number
}
const VisualizeImages = ({ images, visible, setVisible, index }: IVisualizeImages) => {
    return (
        <BottomSheet visible={visible} setVisible={setVisible}>
            <FlatList
                data={images}
                keyExtractor={(_, id) => id.toString()}
                renderItem={({ item }) => (
                    <View className='my-1'>
                        <Image source={{ uri: item.url }} />
                    </View>
                )}
            />
        </BottomSheet>
    )
}

export default VisualizeImages