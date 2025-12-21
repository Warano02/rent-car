import { CarBrand, ICar, IRentOutCarProvider } from "@/types"
import React, { createContext, useEffect, useState } from "react"
import CarsBrands from "../mocks/Brands"

export const RentOutCarContext = createContext<IRentOutCarProvider | null>(null)

export const RentOutCarProvider = ({ children }: { children: React.ReactNode }) => {
    const [carsBrands, setCarsBrands] = useState<CarBrand[]>([])

    const [car, setCar] = useState<ICar>()
    const value = { carsBrands, car }

    useEffect(() => {
        setCarsBrands(CarsBrands)
    }, [])

    return (
        <RentOutCarContext.Provider value={value}>
            {children}
        </RentOutCarContext.Provider>
    )
}
