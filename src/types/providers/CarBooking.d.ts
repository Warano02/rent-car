import { TPaymentMethod } from "..";

/** Where user wanna go with the car */
export type TLocation = {
  label: string;
  lat: number;
  long: number;
};

/**
 * Period of booking
 */
export type TBookingDates = {
  startDate: string;
  endDate: string;
};

/**
 * Who is booking the car
 */
export type TBookingUser = {
  fullName: string;
  email: string;
  contact: string;
  gender: "m" | "f";
};

export interface ICarBooking {
  location?: TLocation;
  setLocation: (location: TLocation) => void;
  date: TBookingDates;
  setDate: (d: TBookingDates) => void;
  dailyPrice: number; //Da
  setDailyPrice: (price: number) => void;
  numberOfDays: number;
  totalPrice: number;
  paymentMethod: TPaymentMethod;
  setPaymentMethod: React.Dispatch<React.SetStateAction<TPaymentMethod>>;
  bookingUser: TBookingUser;
  setBookingUser: React.Dispatch<React.SetStateAction<TBookingUser>>;
  bookWDriver: boolean;
  setBookWDriver: React.Dispatch<React.SetStateAction<boolean>>;
  SelectCar: (id: string, link?: RelativePathString) => void;
}
