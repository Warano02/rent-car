import { ICarBooking, TBookingDates, TBookingUser, TLocation, TPaymentMethod } from "@/types";
import { RelativePathString, useRouter } from "expo-router";
import React, { createContext, useEffect, useMemo, useState } from "react";

export const CarBookingContext = createContext<ICarBooking | null>(null);

export const CarBookingProvider = ({ children, }: { children: React.ReactNode; }) => {
    const router = useRouter()
    const [location, setLocation] = useState<TLocation | undefined>();
    const [dailyPrice, setDailyPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState<TPaymentMethod>("om")
    const [bookingUser, setBookingUser] = useState<TBookingUser>({ fullName: "", email: "", contact: "", gender: "m" })
    const [bookWDriver, setBookWDriver] = useState(false)

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

    const SelectCar = (id: string, link?: RelativePathString): void => {
        try {
            // When api will be, i'll send the request to the backend to get car details


        } catch (e) {
            console.log("Error occured while trying to select the car ", e)
        }
    }

    const value: ICarBooking = { SelectCar, location, bookWDriver, setBookWDriver, bookingUser, setBookingUser, setLocation, date, setDate, dailyPrice, setDailyPrice, numberOfDays, totalPrice, paymentMethod, setPaymentMethod };
    useEffect(() => {
        console.log("Booking user ", bookingUser)
    }, [bookingUser])
    return (
        <CarBookingContext.Provider value={value}>
            {children}
        </CarBookingContext.Provider>
    );
};
