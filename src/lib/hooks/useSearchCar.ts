import { TCars } from "@/types";
import { useEffect, useState } from "react";

// for now i fetch the car from the local mock
export const useSearchCar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<TCars[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCars = (term: string) => {
    try {
      setLoading(true);
      console.log("searching car...",term);
      
      const timeout = setTimeout(() => {}, 800);
      clearTimeout(timeout);
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
      fetchCars(searchTerm);
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
