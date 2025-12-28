import { IAppProviders } from "@/types";
import React, { createContext, useState } from "react";

const notifs = Array(10).fill('').map((_, idx) => ({ id: "11255" + idx.toString(), title: "Account Activate", containt: "Your account has been activate successfully !", isRead: false }))

export const AppContext = createContext<IAppProviders | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const AppName = "Ngue"
    const [notifications, setNotifications] = useState(notifs)
    const [favCar, setFavCar] = useState<string[]>([])


    const isFav = (id: string) => favCar.includes(id)
    const toggleFavoriteCar = (id: string) => {
        try {
            setFavCar(prev => favCar.includes(id) ? prev.filter(el => el !== id) : [...prev, id])
            //request to the backend 
        } catch (e) {
            console.log("Error occured while trying to set favorite car ", e)
        }
    }

    const DeleteNotifications = async (notifs: string[]) => {
        notifs.forEach(notif => {
            setNotifications(prev => prev.filter(e => e.id !== notif))
        })
        // send request to the backend
    }

    const markNotifAsRead = (id: string) => {
        setNotifications(prev => prev.map(e => e.id == id ? { ...e, isRead: true } : e))
        //request the backend
    }

    const value = { AppName,markNotifAsRead, notifications, isFav, toggleFavoriteCar, favCar, DeleteNotifications }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};


