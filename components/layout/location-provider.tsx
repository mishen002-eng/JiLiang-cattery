"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Location = "atlanta" | "toronto";

interface LocationContextType {
  location: Location;
  setLocation: (loc: Location) => void;
  currency: "USD" | "CAD";
  cityLabel: string;
  hydrated: boolean;
}

const LocationContext = createContext<LocationContextType>({
  location: "atlanta",
  setLocation: () => {},
  currency: "USD",
  cityLabel: "Atlanta",
  hydrated: false,
});

const STORAGE_KEY = "jiliang-location";

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocationState] = useState<Location>("atlanta");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Location | null;
    if (stored === "atlanta" || stored === "toronto") {
      setLocationState(stored);
    }
    setHydrated(true);
  }, []);

  const setLocation = (loc: Location) => {
    setLocationState(loc);
    localStorage.setItem(STORAGE_KEY, loc);
  };

  const currency = location === "toronto" ? "CAD" : "USD";
  const cityLabel = location === "toronto" ? "Toronto" : "Atlanta";

  return (
    <LocationContext.Provider value={{ location, setLocation, currency, cityLabel, hydrated }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
