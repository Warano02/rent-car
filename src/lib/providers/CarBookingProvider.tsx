import { ICarBooking, TLocation } from "@/types";
import React, { createContext, useState } from "react";

export const CarBookingContext = createContext<ICarBooking | null>(null)

export const CarBookingProvider = ({ children }: { children: React.ReactNode }) => {
    const [location,setLocation]=useState<TLocation|undefined>()
    const value = {location,setLocation}
    
    return <CarBookingContext.Provider value={value}>
        {children}
    </CarBookingContext.Provider>
}