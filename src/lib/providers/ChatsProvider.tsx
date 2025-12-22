import { ConversationMessages, IChatProvider, SingleConversation } from "@/types";
import { createContext, useEffect, useState } from "react";
import { MOCK_CONVERSATIONS } from "../mocks/Chats";

export const ChatContext = createContext<IChatProvider | null>(null);

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [chats, setChats] = useState<ConversationMessages>([])
    const [privateChat, setPrivateChat] = useState<SingleConversation>()

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

    const value: IChatProvider = { chats, privateChat, selectChat }
    return <ChatContext.Provider value={value}>
        {children}
    </ChatContext.Provider>
}

export default ChatProvider