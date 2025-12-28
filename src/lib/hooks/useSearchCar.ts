import { TCars } from "@/types";
import { useEffect, useState } from "react";
import { cars } from "../mocks/Cars";

// for now i fetch the car from the local mock
export const useSearchCar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<TCars>([]);
  const [loading, setLoading] = useState(false);

  const fetchCars = (term: string) => {
    try {
      setLoading(true);

      console.log("searching car...", term);

      setTimeout(() => {
        const data = cars.filter((car) => {
          return (
            car.name?.toLowerCase().includes(term) ||
            car.description?.toLowerCase().includes(term) ||
            car.renter?.name?.toLowerCase().includes(term) ||
            car.location?.name?.toLowerCase().includes(term)
          );
        });

        setResults(data);
        setLoading(false);
      }, 500);
    } catch (e) {
      console.log("error occured while trying to fetch car ", e);
    }
  };

  useEffect(() => {
    if (!searchTerm.length) {
      setResults([]);
      return;
    }
    const timeout = setTimeout(() => {
      fetchCars(searchTerm.trim().toLocaleLowerCase());
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchTerm]);
  return {
    loading,
    results,
    searchTerm,
    setSearchTerm,
  };
};
