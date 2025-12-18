import { ImageProps } from "react-native";

type TReview = {
  name: string;
  profil?: string | ImageProps;
  rating: number;
  contain: string;
  date: string;
};

type TCar = {
  id: string;
  name: string;
  price: number; // Daily price in FCFA
  images: string[];
  isBest: boolean;
  isPopular:boolean,
  color: {
    name: "white" | "red" | "black" | "green" | "yellow";
    code: string;
  };
  location: {
    long: number;
    lat: number;
    name?: string;
  };
  type: "luxury" | "regular";
  rating: number;
  fuelType: "petrol" | "diesel";
  reviews: TReview[];
  features: {
    seats: number; // The number of person that the car can support
    enginOut: string;
    maxSpeed: number;
    advance: string;
    enginCharge: string;
    parking: string;
  };
  renter: {
    id: string;
    name: string;
    profil: string | ImageProps;
  };
};

export type TCars = TCar[];
