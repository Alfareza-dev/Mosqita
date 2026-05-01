"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Clock, Droplets, Activity } from "lucide-react";
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

          {/* Edukasi & Literasi Section */}
          <section className="w-full flex flex-col gap-6 mt-6 md:mt-10 relative z-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-stone-200 text-2xl md:text-3xl font-extrabold font-heading">
                Edukasi & Literasi
              </h2>
              <p className="text-stone-400 text-sm font-medium">
                Pahami ancaman dan ambil tindakan pencegahan yang tepat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Card 1: Full Width (Mengenal Musuh Tersembunyi) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="md:col-span-3 bg-white/5 backdrop-blur-xl border border-white/5 rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group"
              >
                <div className="bg-red-500/10 p-4 rounded-2xl shrink-0">
                  <ShieldAlert className="w-8 h-8 text-red-400" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-stone-100 text-xl md:text-2xl font-bold font-heading">Mengenal Musuh Tersembunyi</h3>
                  <p className="text-stone-400 text-sm md:text-base leading-relaxed">
                    DBD (Demam Berdarah Dengue) bukanlah sekadar demam biasa. Ia adalah invasi virus Dengue yang disuntikkan ke dalam aliran darah manusia melalui gigitan nyamuk betina <span className="italic">Aedes aegypti</span>. Di balik sayapnya yang transparan, terdapat risiko yang mengancam nyawa jika tidak dideteksi sejak dini.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Small (Profil Sang Pembawa Pesan) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[32px] p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-stone-100 text-lg font-bold font-heading leading-tight pr-4">Profil Sang Pembawa Pesan</h3>
                  <Clock className="w-6 h-6 text-teal-400 shrink-0" />
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <p className="text-stone-400 text-sm leading-relaxed">
                    <strong className="text-stone-300">Waktu Aktif:</strong> Berbeda dengan nyamuk biasa, <span className="italic">Aedes aegypti</span> adalah "pemburu siang". Puncak aktivitasnya terjadi pada pukul 08.00–10.00 pagi dan 15.00–17.00 sore.
                  </p>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    <strong className="text-stone-300">Habitat Preferensi:</strong> Mereka mencintai kemurnian. Air jernih yang tenang di dalam rumah seperti bak mandi, vas bunga, atau dispenser adalah tempat inkubasi favorit bagi telur-telur mereka.
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Medium (Mengapa Lingkungan Penting?) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[32px] p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-stone-100 text-lg font-bold font-heading leading-tight pr-4">Mengapa Lingkungan Penting?</h3>
                  <Droplets className="w-6 h-6 text-cyan-400 shrink-0" />
                </div>
                <p className="text-stone-400 text-sm leading-relaxed mt-2">
                  Kelembapan udara di atas 70% adalah "Rasio Emas" bagi perkembangbiakan nyamuk. Pada kondisi ini, telur nyamuk tidak akan mengering (desikasi) dan siklus dari larva hingga menjadi nyamuk dewasa berjalan jauh lebih cepat. Inilah alasan mengapa Mosqita memantau cuaca Kota Malang secara real-time untuk memberikan peringatan dini kepada Anda.
                </p>
              </motion.div>

              {/* Card 4: Small (Siklus Fase Kritis) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[32px] p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-stone-100 text-lg font-bold font-heading leading-tight pr-4">Memahami Siklus Penyakit</h3>
                  <Activity className="w-6 h-6 text-amber-400 shrink-0" />
                </div>
                <ul className="flex flex-col gap-3 mt-2">
                  <li className="text-stone-400 text-sm leading-relaxed">
                    <strong className="text-amber-400">Hari 1-3 (Fase Demam):</strong> Demam tinggi mendadak disertai nyeri sendi dan otot.
                  </li>
                  <li className="text-stone-400 text-sm leading-relaxed">
                    <strong className="text-red-400">Hari 4-5 (Fase Kritis):</strong> Suhu tubuh menurun secara menipu. Inilah titik krusial di mana risiko kebocoran plasma darah berada pada level tertinggi.
                  </li>
                  <li className="text-stone-400 text-sm leading-relaxed">
                    <strong className="text-teal-400">Hari 6-7 (Fase Penyembuhan):</strong> Penyerapan kembali cairan tubuh dan pemulihan kondisi fisik secara perlahan.
                  </li>
                </ul>
              </motion.div>

            </div>
          </section>

        </main>
      </PageTransition>

      <BottomNavigation />
      <AlertModal isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)} />
    </div>
  );
}
