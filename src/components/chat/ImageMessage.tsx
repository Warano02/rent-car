import { TImageMessage } from "@/types"
import { useState } from "react"
import { Image, Text, View } from "react-native"
import VisualizeImages from "./VisualizeImages"

interface IImageMessage {
    images?: TImageMessage[],
    fromMe: boolean
}
const ImageMessage = ({ images, fromMe }: IImageMessage) => {
    if (!images) return
    const isSingle = images.length === 1
    const [visible, setVisible] = useState(false)
    const [idx, setIdx] = useState(0)
    return (
        <View className={`my-2 flex-row ${fromMe ? "justify-end" : "justify-start"}`}>
            <View
                className={`overflow-hidden rounded-lg border ${fromMe ? "border-button" : "border-border"
                    }`}
                style={{
                    width: isSingle ? 260 : 300,
                }}
            >
                {/* GRID */}
                <View className="flex-row flex-wrap">
                    {images.slice(0, 4).map((img, idx) => (
                        <View
                            key={idx}
                            style={{
                                width: images.length === 1 ? 260 : 150,
                                height: images.length === 1 ? 260 : 150,
                            }}
                        >
                            <Image
                                source={{ uri: img.url }}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%" }}
                            />

                            {/* OVERLAY +X */}
                            {idx === 3 && images.length > 4 && (
                                <View className="absolute inset-0 bg-black/60 justify-center items-center">
                                    <Text className="text-white text-2xl font-bold">
                                        +{images.length - 4}
                                    </Text>
                                </View>
                            )}
                        </View>
                    ))}
                </View>


                {images.length == 1 && images[0]?.caption && (
                    <View className={`${fromMe ? "bg-button" : "bg-white"}`} >
                        <Text className={` px-2 py-2 text-sm ${fromMe ? "text-white" : "text-placeholder"}`} >
                            {images[0].caption}
                        </Text>
                    </View>
                )}
            </View>
            <VisualizeImages images={images} visible={visible} setVisible={setVisible} />
        </View>
    )
}

export default ImageMessage