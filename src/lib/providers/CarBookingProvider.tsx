import { ICarBooking, TBookingDates, TLocation } from "@/types";
import React, { createContext, useState } from "react";

export const CarBookingContext = createContext<ICarBooking | null>(null)

export const CarBookingProvider = ({ children }: { children: React.ReactNode }) => {
    const [location, setLocation] = useState<TLocation | undefined>()
    const [date, setDate] = useState<TBookingDates>({ startDate: "", endDate: "" })

    const value = { location, setLocation ,date,setDate}

    return <CarBookingContext.Provider value={value}>
        {children}
    </CarBookingContext.Provider>
}