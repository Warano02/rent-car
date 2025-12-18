import assets, { persons } from "@/assets";
import { TCars } from "@/types";

export const cars: TCars = [
  {
    id: "_cars01",
    name: "Ferrari-FF",
    isBest: true,
    price: 2500,
    images: [assets.white_ferari],
    color: {
      name: "white",
      code: "#ffff",
    },
    location: {
      long: 7.25,
      lat: 13.5833,
      name: "Ngaoundéré",
    },
    type: "luxury",
    rating: 5,
    fuelType: "petrol",
    features: {
      seats: 4,
      enginCharge: "405 Miles",
      enginOut: "670 HP",
      maxSpeed: 250,
      advance: "AutoPilot",
      parking: "Auto Parking",
    },
    renter: {
      id: "_kliks",
      name: "Felix Warano",
      profil: assets.person,
    },
    reviews: [
      {
        name: "Soudays",
        profil: persons.soudays,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
      {
        name: "Azareel",
        profil: persons.aza,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "12-11-2025",
        rating: 4,
      },
      {
        name: "Aurélie",
        profil: persons.black,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-16-2025",
        rating: 4,
      },
      {
        name: "Joyce",
        profil: persons.joyce,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
      {
        name: "Ivora",
        profil: persons.ivora,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
    ],
    isPopular: true,
  },
  {
    id: "_cars02",
    name: "Tesla Model S",
    isBest: true,
    price: 2500,
    images: [assets.testla_s],
    color: {
      name: "black",
      code: "#0000",
    },
    location: {
      long: 7.25,
      lat: 13.5833,
      name: "Ngaoundéré",
    },
    type: "luxury",
    rating: 5,
    fuelType: "petrol",
    features: {
      seats: 4,
      enginCharge: "405 Miles",
      enginOut: "670 HP",
      maxSpeed: 250,
      advance: "AutoPilot",
      parking: "Auto Parking",
    },
    renter: {
      id: "_kliks",
      name: "Felix Warano",
      profil: assets.person,
    },
    reviews: [
      {
        name: "Soudays",
        profil: persons.soudays,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
      {
        name: "Azareel",
        profil: persons.aza,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "12-11-2025",
        rating: 4,
      },
      {
        name: "Aurélie",
        profil: persons.black,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-16-2025",
        rating: 4,
      },
      {
        name: "Joyce",
        profil: persons.joyce,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
      {
        name: "Ivora",
        profil: persons.ivora,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
    ],
    isPopular: true,
  },
  {
    id: "_cars03",
    name: "Ferrari",
    isBest: true,
    price: 2600,
    images: [assets.ferrari],
    color: {
      name: "red",
      code: "#0000",
    },
    location: {
      long: 7.25,
      lat: 13.5833,
      name: "Ngaoundéré",
    },
    type: "luxury",
    rating: 5,
    fuelType: "petrol",
    features: {
      seats: 4,
      enginCharge: "405 Miles",
      enginOut: "670 HP",
      maxSpeed: 250,
      advance: "AutoPilot",
      parking: "Auto Parking",
    },
    renter: {
      id: "_kliks",
      name: "Felix Warano",
      profil: assets.person,
    },
    reviews: [
      {
        name: "Soudays",
        profil: persons.soudays,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
      {
        name: "Azareel",
        profil: persons.aza,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "12-11-2025",
        rating: 4,
      },
      {
        name: "Aurélie",
        profil: persons.black,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-16-2025",
        rating: 4,
      },
      {
        name: "Joyce",
        profil: persons.joyce,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
      {
        name: "Ivora",
        profil: persons.ivora,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
    ],
    isPopular: true,
  },
  {
    id: "_cars03",
    name: "Ferrari",
    isBest: true,
    price: 2600,
    images: [assets.ferrari],
    color: {
      name: "red",
      code: "#0000",
    },
    location: {
      long: 7.25,
      lat: 13.5833,
      name: "Ngaoundéré",
    },
    type: "luxury",
    rating: 5,
    fuelType: "petrol",
    features: {
      seats: 4,
      enginCharge: "405 Miles",
      enginOut: "670 HP",
      maxSpeed: 250,
      advance: "AutoPilot",
      parking: "Auto Parking",
    },
    renter: {
      id: "_kliks",
      name: "Felix Warano",
      profil: assets.person,
    },
    reviews: [
      {
        name: "Soudays",
        profil: persons.soudays,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
      {
        name: "Azareel",
        profil: persons.aza,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "12-11-2025",
        rating: 4,
      },
      {
        name: "Aurélie",
        profil: persons.black,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-16-2025",
        rating: 4,
      },
      {
        name: "Joyce",
        profil: persons.joyce,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
      {
        name: "Ivora",
        profil: persons.ivora,
        contain:
          "The rental car was clean, reliable, and the service was quick and efficient. Overall, the experience was hassle-free and enjoyable.",
        date: "14-11-2025",
        rating: 4,
      },
    ],
    isPopular: true,
  },
];
