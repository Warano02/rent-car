import { ImageProps, ImageSourcePropType } from "react-native";

export type TReview = {
  name: string;
  profil?: string | ImageProps;
  rating: number;
  contain: string;
  date: string;
};

export type TFeatures = {
  seats: number; // The number of person that the car can support
  enginOut: string;
  maxSpeed: number;
  advance: string;
  enginCharge: string;
  parking: string;
};

export type TRenter = {
  id: string;
  name: string;
  profil: ImageSourcePropType;
};

export type TColorCar = {
  name: "white" | "red" | "black" | "green" | "yellow";
  code: string;
};

type TCar = {
  id: string;
  name: string;
  price: number; // Daily price in FCFA
  images: ImageSourcePropType[];
  isBest: boolean;
  isPopular: boolean;
  color: TColorCar;
  location: {
    long: number;
    lat: number;
    name: string;
  };
  type: "luxury" | "regular";
  rating: number;
  fuelType: "petrol" | "diesel";
  reviews: TReview[];
  features: TFeatures;
  renter: TRenter;
};

export type TCars = TCar[];
