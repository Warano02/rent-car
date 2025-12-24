import { TImageMessage } from "@/types"
import { useState } from "react"
import { Dimensions, FlatList, Image, Pressable, View } from "react-native"
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
  const [url, setUrl] = useState<string | undefined>(undefined)
  return (
    <BottomSheet visible={visible} setVisible={setVisible}>
      <View>
        <FlatList
          data={images}

          pagingEnabled
          initialScrollIndex={index}
          keyExtractor={(_, id) => id.toString()}
          getItemLayout={(_, i) => ({
            length: width,
            offset: width * i,
            index: i,
          })}
          renderItem={({ item }) => (
            <Pressable onPress={()=>setUrl(item.url)} style={{ width, height: height * 0.5 }} className={`border-y px-1`} >
              <Image
                source={{ uri: item.url }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />

        <ImageView url={url} setUrl={setUrl} />
      </View>
    </BottomSheet>
  )
}

const ImageView = ({ url, setUrl }: { url: string | undefined, setUrl: (d: string | undefined) => void }) => {
  return <BottomSheet visible={!!url} setVisible={() => setUrl(undefined)} >
    <View className="flex-1">
      <Image source={{ uri: url }} resizeMode="cover" style={{ height: "100%", width: "100%" }} />
    </View>
  </BottomSheet>
}
export default VisualizeImages
