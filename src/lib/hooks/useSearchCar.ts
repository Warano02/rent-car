import { useState } from "react";

export const useSearchCar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  return {
    loading,
    searchTerm,
    setSearchTerm,
  };
};
