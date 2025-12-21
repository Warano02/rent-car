import { useContext } from "react";
import { ChatContext } from "../providers/ChatsProvider";

export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) throw new Error("useChat must be used inside AppProvider");
    return context;
};