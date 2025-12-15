import { ICarBooking } from "@/types";
import React, { createContext } from "react";

export const CarBookingContext = createContext<ICarBooking | null>(null)

export const CarBookingProvider=({children}:{children:React.ReactNode})=>{
const value={}
return <CarBookingContext.Provider value={value}>
    {children}
</CarBookingContext.Provider>
}