import { useContext } from "react";
import { CarBookingContext } from "../providers/CarBookingProvider";

export const useBooking = () => {
  const context = useContext(CarBookingContext);
  if (!context) {
    throw new Error('useBooking must be used inside CurrencyProvider');
  }
  return context;
};
