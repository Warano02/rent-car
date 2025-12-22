import assets from "@/assets"
import { TImageMessage } from "@/types"
import { useState } from "react"
import { Image, ImageBackground, Pressable, Text, View } from "react-native"
import VisualizeImages from "./VisualizeImages"

interface IImageMessage {
    images?: TImageMessage[],
    fromMe: boolean
}
const ImageMessage = ({ images, fromMe }: IImageMessage) => {
    if (!images) return
    const [visible, setVisible] = useState(false)
    const [idx, setIdx] = useState(0)
    return (
        <View className={`my-2 flex-row rounded-lg  ${fromMe ? "justify-end pr-2" : "pl-2 justify-start"}`}>
            <View className={`${fromMe ? "bg-button" : "bg-white"} rounded-lg px-2 py-1`} style={{ width: 260, height: 260 }}>
                <View className="flex-1">
                    {
                        images.length == 1 && <Pressable onPress={() => setVisible(true)} className="flex-1">
                            <Image source={{ uri: images[0].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                        </Pressable>
                    }

                    {
                        images.length == 2 && <View className="flex-1 flex-row">
                            <Pressable onPress={() => setVisible(true)} className="flex-1">
                                <Image source={{ uri: images[0].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                            </Pressable>
                            <View className={`h-full w-1 ${fromMe ? "bg-button" : "bg-white"}`} />
                            <Pressable onPress={() => setVisible(true)} className="flex-1">
                                <Image source={{ uri: images[1].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                            </Pressable>
                        </View>
                    }

                    {
                        images.length == 3 && <View className="flex-1">
                            <Pressable onPress={() => setVisible(true)} className="flex-1">
                                <Image source={{ uri: images[0].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                            </Pressable>
                            <View className={`h-1 w-full ${fromMe ? "bg-button" : "bg-white"}`} />

                            <View className="flex-1 flex-row">
                                <Pressable onPress={() => setVisible(true)} className="flex-1">
                                    <Image source={{ uri: images[1].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                                </Pressable>
                                <View className={`h-full w-1 ${fromMe ? "bg-button" : "bg-white"}`} />
                                <Pressable onPress={() => setVisible(true)} className="flex-1">
                                    <Image source={{ uri: images[2].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                                </Pressable>
                            </View>
                        </View>
                    }

                    {
                        images.length == 4 && <View className="flex-1">
                            <View className="flex-1 flex-row">
                                <Pressable onPress={() => setVisible(true)} className="flex-1">
                                    <Image source={{ uri: images[0].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                                </Pressable>
                                <View className={`h-full w-1 ${fromMe ? "bg-button" : "bg-white"}`} />
                                <Pressable onPress={() => setVisible(true)} className="flex-1">
                                    <Image source={{ uri: images[1].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                                </Pressable>
                            </View>
                            <View className={`h-1 w-full ${fromMe ? "bg-button" : "bg-white"}`} />

                            <View className="flex-1 flex-row">
                                <Pressable onPress={() => setVisible(true)} className="flex-1">
                                    <Image source={{ uri: images[2].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                                </Pressable>
                                <View className={`h-full w-1 ${fromMe ? "bg-button" : "bg-white"}`} />
                                <Pressable onPress={() => setVisible(true)} className="flex-1">
                                    <Image source={{ uri: images[3].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                                </Pressable>
                            </View>
                        </View>
                    }
                    {
                        images.length > 4 && <View className="flex-1">
                            <View className="flex-1 flex-row">
                                <Pressable onPress={() => setVisible(true)} className="flex-1">
                                    <Image source={{ uri: images[0].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                                </Pressable>
                                <View className={`h-full w-1 ${fromMe ? "bg-button" : "bg-white"}`} />
                                <Pressable onPress={() => setVisible(true)} className="flex-1">
                                    <Image source={{ uri: images[1].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                                </Pressable>
                            </View>
                            <View className={`h-1 w-full ${fromMe ? "bg-button" : "bg-white"}`} />

                            <View className="flex-1 flex-row">
                                <Pressable onPress={() => setVisible(true)} className="flex-1">
                                    <Image source={{ uri: images[2].url }} resizeMode="cover" className="rounded-lg" style={{ width: "100%", height: "100%" }} />
                                </Pressable>
                                <View className={`h-full w-1 ${fromMe ? "bg-button" : "bg-white"}`} />
                                <Pressable onPress={() => setVisible(true)} className="flex-1 relative">
                                    <ImageBackground source={{ uri: images[3].url }} className="rounded-lg overflow-hidden" style={{ width: "100%", height: "100%", }}>
                                        <ImageBackground source={assets.overlayBg} className=" justify-center items-center" style={{ width: "100%", height: "100%" }}>
                                            <Text className="text-white font-bold">+{images.length - 4} </Text>
                                        </ImageBackground>
                                    </ImageBackground>
                                </Pressable>
                            </View>
                        </View>
                    }
                </View>
                {
                    images[0].caption && <Text className={`py-2  ${fromMe ? "text-white" : ""}`} >
                        {images[0].caption}
                    </Text>
                }
                <View className="flex-row justify-end">
                    <Text className={`text-xs ${fromMe ? "text-white" : "text-placeholder"}`} >18:4 pm </Text>
                </View>
            </View>
            <VisualizeImages images={images} index={idx} visible={visible} setVisible={setVisible} />
        </View>
    )
}

export default ImageMessage