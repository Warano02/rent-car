import assets from '@/assets'
import { useChat } from '@/lib/hooks/useChat'
import { pickImages } from '@/lib/utils/PickImage'
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ImageBackground, Pressable, Text, TextInput, View } from 'react-native'
import { BottomSheet } from '../BottomSheet'

const ChatInput = () => {
    const [iText, setItext] = useState("")
    const [images, setImages] = useState<string[]>([])
    const { sendMessage, isSending } = useChat()
    const handleImageSelection = async () => {
        const selectedImages = await pickImages()
        setImages(selectedImages)
    }

    const go = () => {
        sendMessage({ type: "text", text: iText })
    }

    return (
        <View className='flex-row px-2 gap-1'>
            <View className='rounded-2xl bg-white border border-border flex-row gap-2 items-center px-2 flex-1'>
                <TextInput onChangeText={setItext} className='flex-1 text-[16px]' placeholder='Message' />

                <Pressable onPress={handleImageSelection} className='items-center justify-center' style={{ height: 30, width: 30 }}>
                    <Ionicons name="camera-outline" size={24} color="black" />
                </Pressable>
            </View>
            <Pressable onPress={go} disabled={iText.length == 0} className={`rounded-full items-center justify-center  ${iText.length ? "bg-white" : ""}`} style={{ height: 50, width: 50 }} >
                <MaterialCommunityIcons name="send" size={24} color={iText.length ? "black" : "#7F7F7F"} />
            </Pressable>
            <ShowSelectedImages images={images} visible={images.length > 0} setImages={setImages} />
        </View>
    )
}

interface ISSImage {
    visible: boolean,
    images: string[],
    setImages: (imgs: string[]) => void
}

interface IImage {
    url: string,
    caption: string
}

const ShowSelectedImages = ({ visible, images, setImages }: ISSImage) => {
    const { privateChat, sendMessage, isSending } = useChat()
    const [data, setData] = useState<IImage[]>([])
    const [bgI, setbgI] = useState(0)

    const handlePress = (idx: number) => {
        if (idx !== bgI) return setbgI(idx)
        const newImages = images.filter((_, i) => i !== bgI)
        setImages(newImages)
        setbgI(Math.max(0, bgI - 1))
    }

    const handleSending = async () => {
        if (!data.length) return
        sendMessage({ type: "image", images: data })

    }
    const updateCaption = (text: string) => setData(prev => prev.map((el, idx) => idx == bgI ? { ...el, caption: text } : el))



    useEffect(() => {
        setData(() => images.map((url) => ({ url, caption: "" })))
    }, [])
    return (
        <BottomSheet visible={visible} setVisible={() => console.log("trying to close images preview")} >
            <ImageBackground source={{ uri: images[bgI] }} className='gap-2 flex-1 py-6 px-6'>
                <View className=' justify-center px-6' style={{ height: 50 }}>
                    <Pressable onPress={() => setImages([])} className='rounded-full bg-button justify-center items-center' style={{ height: 50, width: 50 }}>
                        <MaterialCommunityIcons name="window-close" size={24} color="white" />
                    </Pressable>
                </View>
                <View className='flex-1' />

                <View className='flex-row justify-center items-center gap-2'>
                    {
                        images.map((img, idx) => (
                            <Pressable key={idx} onPress={() => handlePress(idx)}>
                                <ImageBackground className='rounded-lg' source={{ uri: img }} style={{ width: 60, height: 60 }}>
                                    {bgI == idx && <ImageBackground className='flex-1 justify-center items-center border border-white' source={assets.overlayBg}>
                                        <FontAwesome6 name="trash-can" size={24} color="white" />
                                    </ImageBackground>}
                                </ImageBackground>
                            </Pressable>
                        ))
                    }
                </View>

                <View className='flex-row'>
                    <View className='rounded-2xl bg-white border border-border flex-row gap-2 items-center px-2 flex-1'>
                        <TextInput value={data[bgI]?.caption} onChangeText={updateCaption} className='flex-1 text-[16px]' placeholder='Add Caption...' />
                    </View>
                </View>

                <View className='flex-row justify-between items-center '>
                    <View className='px-4 bg-button rounded-lg items-center justify-center' style={{ height: 30 }}>
                        <Text className='text-white font-semibold text-xs' >{privateChat?.user.name} </Text>
                    </View>

                    <Pressable disabled={isSending} onPress={handleSending} className='rounded-full bg-button justify-center items-center' style={{ height: 50, width: 50 }}>
                        {!isSending ? <MaterialCommunityIcons name="send" size={24} color="white" /> : <ActivityIndicator />}
                    </Pressable>
                </View>
            </ImageBackground>
        </BottomSheet>
    )
}

export default ChatInput