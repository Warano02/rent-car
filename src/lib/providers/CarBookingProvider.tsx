import assets from "@/assets";
import { ICarBooking, TBookingDates, TBookingDetails, TBookingUser, TFeatures, TLocation, TPaymentMethod, TRenter, TReview } from "@/types";
import { RelativePathString, useRouter } from "expo-router";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { cars } from "../mocks/Cars";

export const CarBookingContext = createContext<ICarBooking | null>(null);

export const CarBookingProvider = ({ children, }: { children: React.ReactNode; }) => {
    const router = useRouter()
    //car infos
    const [dailyPrice, setDailyPrice] = useState(0);
    const [reviews, setReviews] = useState<TReview[]>([])
    const [features, setFutures] = useState<TFeatures>({ seats: 2, parking: "Auto Parking", enginCharge: "250 HP", enginOut: "255", maxSpeed: 250, advance: "" })
    const [details, setDetails] = useState<TBookingDetails>({ name: "", description: "", images: [] })
    const [renter, setRenter] = useState<TRenter>({ name: "", id: "", profil: assets.person })
    //User infos
    const [location, setLocation] = useState<TLocation | undefined>();
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
            const car = cars.find(x => x.id == id)
            if (!car) return
            setDailyPrice(car.price)
            setFutures(car.features)
            setReviews(car.reviews)
            setDetails({ name: car.name, description: car.description, images: car.images })
            setRenter(car.renter)
            router.push(link || "/main/car")

        } catch (e) {
            console.log("Error occured while trying to select the car ", e)
        }
    }

    const value: ICarBooking = { SelectCar, renter, details, reviews, features, location, bookWDriver, setBookWDriver, bookingUser, setBookingUser, setLocation, date, setDate, dailyPrice, setDailyPrice, numberOfDays, totalPrice, paymentMethod, setPaymentMethod };
    useEffect(() => {
        console.log("Booking user ", bookingUser)
    }, [bookingUser])
    return (
        <CarBookingContext.Provider value={value}>
            {children}
        </CarBookingContext.Provider>
    );
};
