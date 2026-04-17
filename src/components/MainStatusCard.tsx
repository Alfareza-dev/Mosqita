import React from 'react';
import Image from 'next/image';

interface WeatherData {
  temp_c: number;
  humidity: number;
  condition: {
    text: string;
    icon: string;
  };
}

interface Props {
  weatherData: WeatherData | null;
  isLoading: boolean;
  isError: boolean;
}

// Map WeatherAPI condition text (in ID) to gradient & accent
function getWeatherTheme(conditionText: string) {
  const text = conditionText.toLowerCase();
  if (text.includes("cerah") || text.includes("sunny") || text.includes("clear")) {
    return {
      gradient: "from-amber-500/25 via-orange-400/10 to-transparent",
      glow: "bg-amber-400/15",
      accent: "text-amber-300",
      badge: "bg-amber-500/15 border-amber-500/30",
      badgeText: "text-amber-300",
    };
  }
  if (text.includes("hujan") || text.includes("rain") || text.includes("drizzle") || text.includes("thunder")) {
    return {
      gradient: "from-blue-500/25 via-sky-400/10 to-transparent",
      glow: "bg-blue-400/15",
      accent: "text-sky-300",
      badge: "bg-sky-500/15 border-sky-500/30",
      badgeText: "text-sky-300",
    };
  }
  if (text.includes("kabut") || text.includes("mist") || text.includes("fog")) {
    return {
      gradient: "from-slate-400/20 via-stone-300/5 to-transparent",
      glow: "bg-slate-400/10",
      accent: "text-slate-300",
      badge: "bg-slate-500/15 border-slate-400/30",
      badgeText: "text-slate-300",
    };
  }
  // Default: berawan / cloudy
  return {
    gradient: "from-teal-500/20 via-cyan-400/10 to-transparent",
    glow: "bg-teal-400/10",
    accent: "text-teal-300",
    badge: "bg-teal-500/15 border-teal-500/30",
    badgeText: "text-teal-300",
  };
}

// Skeleton pulsing placeholder
function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-stone-700/50 rounded-xl ${className}`} />
  );
}

export default function MainStatusCard({ weatherData, isLoading, isError }: Props) {
  const theme = weatherData ? getWeatherTheme(weatherData.condition.text) : getWeatherTheme("berawan");

  return (
    <div className={`w-full relative bg-stone-900 rounded-[32px] p-8 border border-stone-700/20 flex flex-col gap-6 overflow-hidden transition-all duration-700`}>
      
      {/* Dynamic gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} pointer-events-none rounded-[32px]`} />
      
      {/* Glow top-right */}
      <div className={`w-56 h-56 absolute -top-20 -right-16 rounded-full blur-3xl pointer-events-none ${theme.glow}`} />

      {/* Header */}
      <div className="flex justify-between items-start w-full relative z-10">
        <h2 className="text-stone-300 text-xs font-medium font-['Inter'] uppercase leading-4 tracking-wider">
          CUACA MALANG<br/>SAAT INI
        </h2>
        {isLoading ? (
          <div className="w-[50px] h-6 rounded-full bg-stone-700/30 animate-pulse border border-stone-600/20" />
        ) : isError ? (
          <div className="px-3 py-1 rounded-full flex items-center justify-center border bg-stone-700/50 border-stone-600/50">
            <span className="text-[10px] font-semibold font-['Inter'] uppercase leading-4 text-stone-400">
              Offline
            </span>
          </div>
        ) : (
          <div className={`px-3 py-1 rounded-full flex items-center justify-center border ${theme.badge}`}>
            <span className={`text-[10px] font-semibold font-['Inter'] uppercase leading-4 ${theme.badgeText}`}>
              Live
            </span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {isLoading && (
          <div className="flex items-end gap-5 mt-2">
            <SkeletonBlock className="w-16 h-16 rounded-2xl" />
            <div className="flex flex-col gap-2 pb-1">
              <SkeletonBlock className="w-32 h-14" />
              <SkeletonBlock className="w-24 h-4" />
            </div>
          </div>
        )}

        {isError && !isLoading && (
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-stone-400 text-sm">Gagal memuat data cuaca.</p>
            <p className="text-stone-500 text-xs">Server sedang Offline.</p>
          </div>
        )}

        {!isLoading && !isError && weatherData && (
          <div className="flex items-center gap-5 md:gap-6 mt-2">
            {/* Weather Icon from API */}
            <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0 drop-shadow-lg">
              <Image
                src={weatherData.condition.icon}
                alt={weatherData.condition.text}
                width={80}
                height={80}
                unoptimized
                className="w-full h-full object-contain"
              />
            </div>

            {/* Temp & Condition */}
            <div className="flex flex-col justify-center gap-1">
              <div className="flex items-end gap-2">
                <span className="text-stone-100 text-6xl md:text-7xl font-black font-['Manrope'] leading-none tracking-tight">
                  {weatherData.temp_c}°
                </span>
                <span className="text-stone-400 text-2xl font-bold mb-2">C</span>
              </div>
              <span className={`text-base font-semibold font-['Inter'] tracking-wide ${theme.accent}`}>
                {weatherData.condition.text}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
