"use client";

import React, { useState, useEffect } from "react";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import MainStatusCard from "@/components/MainStatusCard";
import MetricsCard from "@/components/MetricsCard";
import RecommendationCard from "@/components/RecommendationCard";
import { HumidityIcon, PopulationIcon } from "@/components/Icons";
import AlertModal from "@/components/AlertModal";
import PageTransition from "@/components/PageTransition";
import { useWeather } from "@/hooks/useWeather";

export default function Home() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [greeting, setGreeting] = useState("");

  // Data cuaca dari context global (satu fetch untuk seluruh app)
  const { weatherData, humidity, isLoading, isError, isHighHumidity } = useWeather();

  useEffect(() => {
    // Sapaan dinamis berdasarkan waktu lokal
    const hour = new Date().getHours();
    if (hour < 11) setGreeting("Selamat Pagi.");
    else if (hour < 15) setGreeting("Selamat Siang.");
    else if (hour < 19) setGreeting("Selamat Sore.");
    else setGreeting("Selamat Malam.");

    // Session cache alert
    const alertShown = sessionStorage.getItem("mosqita_alert_shown");
    if (!alertShown) {
      setIsAlertOpen(true);
      sessionStorage.setItem("mosqita_alert_shown", "true");
    }
  }, []);

  // Logika kelembapan — strict null/error check
  const dataAvailable = !isLoading && !isError && humidity !== null && humidity !== undefined;
  const humidityLabel = isLoading
    ? "..."
    : dataAvailable
    ? `${humidity}%`
    : "—";
  const humidityDesc = isLoading
    ? "Memuat data..."
    : dataAvailable
    ? (isHighHumidity ? "Kondisi: Lembap/Berawan" : "Kondisi: Kering/Ideal")
    : "Data tidak tersedia";
  const potencyValue = isLoading
    ? "..."
    : dataAvailable
    ? (isHighHumidity ? "Tinggi" : "Rendah")
    : "—";

  return (
    <div className="min-h-screen bg-[#121212] text-white w-full relative flex flex-col font-sans">
      <TopNavigation />

      <PageTransition>
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-32 flex flex-col gap-8 md:gap-10 overflow-y-auto scrollbar-hide">

          {/* Header Section */}
          <section className="flex flex-col gap-2 w-full relative">
            <p className="text-[#00BFA5] text-base md:text-lg font-medium leading-6 tracking-wide">
              {greeting}
            </p>
            <h2 className="text-stone-200 text-3xl md:text-4xl lg:text-4xl font-extrabold font-manrope md:leading-tight">
              Pemantauan Lingkungan<br className="md:hidden" /> Kota Malang
            </h2>
            <div className="mt-1">
              <p className="text-stone-400 text-sm font-medium">
                Analisis faktor risiko dan kondisi cuaca harian secara otomatis.
              </p>
            </div>
            <div className="hidden md:block absolute -top-10 -left-10 w-64 h-64 bg-[#00BFA5]/5 rounded-full blur-3xl pointer-events-none" />
          </section>

          {/* Dashboard Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">

            {/* Kartu Cuaca Utama */}
            <div className="lg:col-span-7 flex flex-col gap-6 w-full">
              <MainStatusCard
                weatherData={weatherData}
                isLoading={isLoading}
                isError={isError}
              />
            </div>

            {/* Kolom Samping */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full">
              {/* Kartu Metrik */}
              <section className="grid grid-cols-2 gap-4 w-full">
                <MetricsCard
                  icon={<HumidityIcon className="text-[#68D3FC]" />}
                  iconBgColor="bg-cyan-600/10"
                  title="KELEMBAPAN"
                  value={humidityLabel}
                  description={<span>{humidityDesc}</span>}
                />
                <MetricsCard
                  icon={
                    <PopulationIcon
                      className={isHighHumidity ? "text-red-300" : "text-teal-400"}
                    />
                  }
                  iconBgColor={isHighHumidity ? "bg-red-500/10" : "bg-teal-500/10"}
                  title="POTENSI PERKEMBANGBIAKAN"
                  value={potencyValue}
                  description={
                    <span>Berdasarkan parameter lingkungan saat ini.</span>
                  }
                />
              </section>

              {/* Kartu Rekomendasi */}
              <RecommendationCard />
            </div>

          </div>
        </main>
      </PageTransition>

      <BottomNavigation />
      <AlertModal isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)} />
    </div>
  );
}
