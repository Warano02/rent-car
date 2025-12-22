import { useChat } from '@/lib/hooks/useChat'
import { ChatMessage } from '@/types'
import React from 'react'
import { Image, Text, View } from 'react-native'
import ImageMessage from './ImageMessage'

type Props = {
    msg: ChatMessage
    index: number
    messages: ChatMessage[]
}

const SingleMessage = ({ msg, index, messages }: Props) => {
    const { privateChat } = useChat()

    const prevMessage = messages[index - 1]

    const showAvatar =
        !msg.fromMe &&
        (!prevMessage || prevMessage.fromMe)

    if (msg.type === "text") {
        return (
            <View className="my-1 px-2">
                <View
                    className={`flex-row items-end ${msg.fromMe ? "justify-end" : "justify-start"
                        }`}
                >
                    {/* Avatar (seulement sur x1) */}
                    {!msg.fromMe && (
                        <View style={{ width: 34 }}>
                            {showAvatar && (
                                <Image
                                    source={{ uri: privateChat?.user.profil }}
                                    style={{ width: 30, height: 30 }}
                                    className="rounded-full"
                                />
                            )}
                        </View>
                    )}

                    {/* Bubble */}
                    <View
                        className={`rounded-2xl px-3 py-2 ${msg.fromMe ? "bg-button" : "bg-white"
                            }`}
                        style={{ maxWidth: "75%" }}
                    >
                        <Text className={msg.fromMe ? "text-white" : "text-black"}>
                            {msg.content}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    return <ImageMessage images={msg.images} fromMe={msg.fromMe} />
}

export default SingleMessage
