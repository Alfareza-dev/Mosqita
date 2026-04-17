import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { WeatherProvider } from "@/hooks/useWeather";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mosqita - Edukasi DBD",
  description: "Aplikasi edukasi dan pencegahan DBD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-stone-900 text-stone-200 antialiased selection:bg-red-500/30 selection:text-red-100">
        <WeatherProvider>
          {children}
        </WeatherProvider>
      </body>
    </html>
  );
}
