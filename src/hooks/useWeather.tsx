"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface WeatherData {
  temp_c: number;
  humidity: number;
  condition: {
    text: string;
    icon: string;
  };
}

interface WeatherContextValue {
  weatherData: WeatherData | null;
  humidity: number | null;
  isLoading: boolean;
  isError: boolean;
  isHighHumidity: boolean | null;
}

const WeatherContext = createContext<WeatherContextValue>({
  weatherData: null,
  humidity: null,
  isLoading: true,
  isError: false,
  isHighHumidity: null,
});

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch("/api/weather");
        if (!res.ok) throw new Error("Gagal mengambil data cuaca.");
        const data: WeatherData = await res.json();
        setWeatherData(data);
        setHumidity(data.humidity);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // null = data belum/gagal dimuat, true = lembap, false = kering
  const isHighHumidity = humidity !== null && humidity !== undefined 
    ? humidity > 70 
    : null;

  return (
    <WeatherContext.Provider
      value={{ weatherData, humidity, isLoading, isError, isHighHumidity }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
