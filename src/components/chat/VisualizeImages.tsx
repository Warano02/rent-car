import { TImageMessage } from "@/types"
import { Dimensions, FlatList, Image, View } from "react-native"
import { BottomSheet } from "../BottomSheet"

const { width, height } = Dimensions.get("window")

interface IVisualizeImages {
  images: TImageMessage[]
  visible: boolean
  setVisible: (b: boolean) => void
  index?: number
}

const VisualizeImages = ({
  images,
  visible,
  setVisible,
  index = 0,
}: IVisualizeImages) => {
  return (
    <BottomSheet visible={visible} setVisible={setVisible}>
      <FlatList
        data={images}
        
        pagingEnabled
        initialScrollIndex={index}
        keyExtractor={(_, id) => id.toString()}
        getItemLayout={(_, i) => ({
          length: width,
          offset: width * i,
          index: i,})}
        renderItem={({ item }) => (
          <View style={{ width, height: height * 0.5 }} className={`border-y px-1`} >
            <Image
              source={{ uri: item.url }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </BottomSheet>
  )
}

export default VisualizeImages
