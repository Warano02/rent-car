import { IAppProviders } from "@/types";
import React, { createContext, useState } from "react";

const notifs = Array(10).fill('').map((_, idx) => ({ id: "11255" + idx.toString(), title: "Account Activate", containt: "Your account has been activate successfully !", isRead: false }))

export const AppContext = createContext<IAppProviders | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const AppName = "Ngue"
    const [notifications, setNotifications] = useState(notifs)


    const DeleteNotifications = async (notifs: string[]) => {
        notifs.forEach(notif => {
            setNotifications(prev => prev.filter(e => e.id !== notif))
        })

        // send request to the backend
    }

    const value = { AppName, notifications,DeleteNotifications }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};


