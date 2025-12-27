import { useEffect, useState } from "react";

const API_KEY = "2e10a11c9e224c6b9917debb80867e61";

export interface LocationResult {
  id: string;
  label: string;
  description: string;
  lat: number;
  lon: number;
}

export const useLocationSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<LocationResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      fetchLocations(query);
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  const fetchLocations = async (text: string) => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
          text
        )}&limit=10&apiKey=${API_KEY}`
      );

      const json = await res.json();

      const formatted = json.features.map((item: any) => ({
        id: item.properties.place_id,
        label: item.properties.formatted.split(",")[0],
        description: item.properties.formatted,
        lat: item.properties.lat,
        lon: item.properties.lon,
      }));

      setResults(formatted);
    } catch (e) {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    setQuery,
    results,
    loading,
  };
};
