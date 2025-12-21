import { IRentOutCarProvider } from "@/types"
import React, { createContext } from "react"

export const RentOutCarContext = createContext<IRentOutCarProvider | null>(null)

export const RentOutCarProvider = ({ children }: { children: React.ReactNode }) => {
    const value = {}
    return (
        <RentOutCarContext.Provider value={value}>
            {children}
        </RentOutCarContext.Provider>
    )
}
