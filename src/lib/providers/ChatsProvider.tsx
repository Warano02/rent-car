import { ConversationMessages, IChatProvider, SingleConversation, TSendMessageProps } from "@/types";
import { createContext, useEffect, useState } from "react";
import { Alert, Vibration } from "react-native";
import { MOCK_CONVERSATIONS } from "../mocks/Chats";

export const ChatContext = createContext<IChatProvider | null>(null);

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [chats, setChats] = useState<ConversationMessages>([])
    const [privateChat, setPrivateChat] = useState<SingleConversation>()
    const [isSending, setIsSending] = useState(false)
    useEffect(() => {
        setChats(MOCK_CONVERSATIONS)
    }, [])

    const selectChat = (id: string) => {
        try {
            const selectedChat = chats.find(c => c.user.id === id)
            if (!selectedChat) return

            const updatedChat = { ...selectedChat, messages: selectedChat.messages.map(m => ({ ...m, isRead: true })) }

            setPrivateChat(updatedChat)

            setChats(prev => prev.map(chat => chat.user.id === id ? updatedChat : chat))

            // Sendind request to the backend to mark all the messages as read

        } catch (e) {
            console.log("Error occured when trying to select the chat ", e)
        }
    }

    const sendMessage = ({ type, text, images }: TSendMessageProps) => {
        if (!privateChat) return
        setIsSending(true)

        try {
            const formData = new FormData()
            formData.append("type", type)
            formData.append("chatId", privateChat.user.id)
            if (type == "text" && text) {
                formData.append("text", text)
            }
            
            if (type == "image" && images?.length) {
                images.forEach((img, idx) => {
                    formData.append('images', {
                        ...img,
                        name: `image_${idx}.jpg`,
                        type: 'image/jpeg',
                    } as any);
                });
            }

            //send message to the backend
        } catch (e) {
            console.log("Error occured while trying to send message ", e)
            Vibration.vibrate(300)
            Alert.prompt("Error occured while trying to send message")
        } finally {

            setIsSending(false)
        }
    }

    const value: IChatProvider = { chats, privateChat, selectChat, sendMessage, isSending }
    return <ChatContext.Provider value={value}>
        {children}
    </ChatContext.Provider>
}

export default ChatProvider