import { useContext } from "react"
import { RentOutCarContext } from "../providers/RentOutCarProvider"

export function useRentOutCar() {
    const context = useContext(RentOutCarContext)
    if (!context) {
        throw new Error('useRentOutCar must be used within RentOutCarProvider')
    }
    return context
}
