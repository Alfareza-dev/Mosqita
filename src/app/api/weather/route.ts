import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key tidak ditemukan di server." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Malang&lang=id`,
      { next: { revalidate: 600 } } // Cache 10 menit di server
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Gagal mengambil data dari WeatherAPI." },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Kembalikan hanya data yang diperlukan (tidak expose seluruh payload)
    return NextResponse.json({
      temp_c: Math.round(data.current.temp_c),
      humidity: data.current.humidity,
      condition: {
        text: data.current.condition.text,
        icon: "https:" + data.current.condition.icon,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Koneksi ke server cuaca gagal." },
      { status: 503 }
    );
  }
}
