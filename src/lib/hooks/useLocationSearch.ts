import { useEffect, useState } from "react";

interface LocationResult {
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      searchLocation(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  const searchLocation = async (text: string) => {
    try {
      setLoading(true);
      setError(null);
      console.log("Start searching");
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          text
        )}&format=json&addressdetails=1&limit=10`
      );
      console.log(response);

      const data = await response.json();

      const formatted: LocationResult[] = data.map((item: any) => ({
        id: item.place_id.toString(),
        label: item.display_name.split(",")[0],
        description: item.display_name,
        lat: Number(item.lat),
        lon: Number(item.lon),
      }));

      setResults(formatted);
    } catch (err) {
      console.log("error occured ", err);
      setError("Unable to fetch locations");
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
    error,
  };
};
