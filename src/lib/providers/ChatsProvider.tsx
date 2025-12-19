import { IChatProvider } from "@/types";
import { createContext } from "react";

export const ChatContext = createContext<IChatProvider | null>(null);

const ChatProvider=({children}:{children:React.ReactNode})=>{
    const value={}
    return <ChatContext.Provider value={value}>
        {children}
    </ChatContext.Provider>
}

export default ChatProvider