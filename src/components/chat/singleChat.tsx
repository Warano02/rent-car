import { useChat } from '@/lib/hooks/useChat'
import { SingleConversation } from '@/types'
import { Foundation } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const SingleChat = ({ chat }: { chat: SingleConversation }) => {
    const [unread, setUnread] = useState(0)
    const [lastMessage, setLastMessage] = useState<{ isRead: boolean, type: "text" | "image", value?: string, time: number }>({ type: "text", value: "", isRead: true, time: 0 })
    const [date, setDate] = useState("")
    const { selectChat } = useChat()

    useEffect(() => {
        setUnread(chat.messages.filter(m => !m.isRead).length)

        const tab = [...chat.messages].sort((a, b) => b.createdAt - a.createdAt)[0]
        setLastMessage({ type: tab.type, value: tab.content, isRead: tab.isRead, time: tab.createdAt })

        const lastMessageDate = new Date(tab.createdAt)
        const hours = lastMessageDate.getHours().toString().padStart(2, '0')
        const minutes = lastMessageDate.getMinutes().toString().padStart(2, '0')
        setDate(`${hours}:${minutes}`)
    }, [chat])

    const router = useRouter()
    const handlePress = async (id: string) => {
        await selectChat(id)
        
        // @ts-ignore
        router.push("/main/chats")
    }
    return (
        <Pressable onPress={() => handlePress(chat.user.id)} className='px-4 my-1 items-center flex-row justify-between bg-white rounded-lg' style={{ height: 80 }}>
            <View className='flex-1 flex-row gap-2'>
                <Image className='rounded-full' source={{ uri: chat.user.profil }} style={{ height: 60, width: 60 }} />
                <View className='gap-2 justify-center'>
                    <Text className='text-xl font-bold'>{chat.user.name}</Text>
                    {lastMessage.type === "text" && lastMessage.value && (
                        <Text className={`${lastMessage.isRead ? 'text-placeholder' : 'font-bold'}`} >
                            {lastMessage.value.length > 42 ? lastMessage.value.slice(0, 38).concat("...") : lastMessage.value}
                        </Text>
                    )}
                    {lastMessage.type === "image" && (
                        <View className='flex-row items-center gap-2'>
                            <Foundation name="photo" size={18} color="black" />
                            <Text className={`${lastMessage.isRead ? 'text-placeholder' : 'font-bold'}`}>Photo</Text>
                        </View>
                    )}
                </View>
            </View>

            <View className='gap-2 justify-center items-center'>
                {unread > 0 && (
                    <View className='bg-bgTab justify-center items-center rounded-full' style={{ height: 20, width: 20 }}>
                        <Text className='text-xs text-white'>{unread}</Text>
                    </View>
                )}
                <Text className="text-placeholder">{date}</Text>
            </View>
        </Pressable>
    )
}

export default SingleChat
