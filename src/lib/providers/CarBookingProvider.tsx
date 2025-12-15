import { ICarBooking, TBookingDates, TLocation } from "@/types";
import React, { createContext, useMemo, useState } from "react";

export const CarBookingContext = createContext<ICarBooking | null>(null);

export const CarBookingProvider = ({ children, }: { children: React.ReactNode; }) => {
    const [location, setLocation] = useState<TLocation | undefined>();
    const [dailyPrice, setDailyPrice] = useState(0);

    const [date, setDate] = useState<TBookingDates>({
        startDate: "",
        endDate: "",
    });


    const numberOfDays = useMemo(() => {
        if (!date.startDate || !date.endDate) return 0;

        const start = new Date(date.startDate);
        const end = new Date(date.endDate);

        const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) || 1;
        console.log("Car rent for ", diff, " days")
        return diff;
    }, [date.startDate, date.endDate]);


    const totalPrice = useMemo(() => {
        if (!dailyPrice || numberOfDays === 0) return 0;
        console.log("You need to buy ", numberOfDays * dailyPrice, " XAF")
        return numberOfDays * dailyPrice;
    }, [dailyPrice, numberOfDays]);

    const value: ICarBooking = { location, setLocation, date, setDate, dailyPrice, setDailyPrice, numberOfDays, totalPrice, };

    return (
        <CarBookingContext.Provider value={value}>
            {children}
        </CarBookingContext.Provider>
    );
};
