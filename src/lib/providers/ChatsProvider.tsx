import { ConversationMessages, IChatProvider } from "@/types";
import { createContext, useEffect, useState } from "react";
import { MOCK_CONVERSATIONS } from "../mocks/Chats";

export const ChatContext = createContext<IChatProvider | null>(null);

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [chats, setChats] = useState<ConversationMessages>([])

    useEffect(() => {
        setChats(MOCK_CONVERSATIONS)
    }, [])

    const value: IChatProvider = { chats }
    return <ChatContext.Provider value={value}>
        {children}
    </ChatContext.Provider>
}

export default ChatProvider