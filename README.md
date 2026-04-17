# 🦟 Mosqita

> **Platform Edukasi dan Pemantauan Transmisi Demam Berdarah Dengue (DBD) Terintegrasi Data.**

Mosqita adalah sebuah *dashboard* modern dan responsif yang dirancang untuk menjadi garda depan pusat informasi, status pemantauan cuaca, serta data epidemiologi terkait transmisi virus Dengue (DBD), khususnya untuk ruang lingkup Kota Malang. Proyek *open-source* ini dibangun sebagai manifestasi tugas pengabdian masyarakat (studi PPKn) dengan meramu teknologi ke tingkat rekayasa *frontend* kelas industri.

---

## 🎯 Latar Belakang Proyek

Wabah Demam Berdarah Dengue (DBD) kerap kali melonjak sangat tajam ketika intensitas curah hujan dipadukan dengan angka kelembapan udara yang tinggi (>70%). Permasalahan ini bukan sekadar musibah, melainkan fenomena yang sebenarnya bisa dimitigasi sedini mungkin. 

Mosqita diinisiasi dengan komitmen untuk mendobrak batasan *status quo* dengan pendekatan yang modern:
1. **Pusat Transparansi Data:** Menyajikan data angka kesembuhan, transmisi kuartal berjalan, hingga fatalitas DBD secara jernih dan dapat dipercaya.
2. **Peringatan Dini Cerdas:** Mengomunikasikan risiko ancaman transmisi nyamuk melalui analisis data cuaca dan kelembapan secara *real-time*.
3. **Kampanye 3M Plus 2.0:** Membungkus literasi kesehatan, edukasi perilaku pencegahan, dan langkah antisipatif ke dalam balutan antarmuka yang canggih dan tidak membosankan.

---

## ✨ Fitur Utama (Key Features)

- 🚨 **Global Warning System:** Mekanisme notifikasi adaptif yang terpampang di bagian *Top Navigation*. Fitur ini membaca *insight* harian, data meteorologis ekstrem, dan curah hujan untuk menyuarakan peringatan dini.
- 📈 **Dynamic Sparkline Chart:** Visualisasi metrik epidemiologi interaktif menggunakan *custom* SVG dengan skalabilitas ruang (viewBox scaling) dinamis, menghindari grafik yang kempes atau tumpang tindih.
- 📱 **iOS-style Transparency Center:** *Bottom Sheet Drawer* canggih dengan efek *glassmorphism backdrop* khas ekosistem Apple. Laci ini membongkar rincian sumber data, metodologi medis, hingga sanggahan klinis resmi.
- 🍱 **Bento Grid Architecture:** Tatanan visual asimetris yang optimal (*full-width* di *desktop* dan solid di perangkat seluler), memastikan pengalaman sentuhan (*thumb-zone*) pengguna serba empuk.
- ⛅ **Real-time Weather Hook:** Infrastruktur logika pusat yang disalurkan via `useWeather.tsx` dan React Context untuk perakitan data langsung.

---

## 💻 Tech Stack

- **Framework:** Next.js 14/15 
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Language:** TypeScript 
- **Icons:** Lucide React

---

## 📂 Struktur Proyek

Basis kode dirancang untuk menjadi *scalable*, mudah dibaca, dan modular:

```text
mosqita/
├── src/
│   ├── app/           # Sistem App Router Next.js (Halaman utama dan panel /data-dbd)
│   ├── components/    # Komponen Reusable UI (Cards, Drawer, SVG Sparklines, Timeline Sereh)
│   ├── data/          # Gudang sumber kebenaran statis agregat (epidemiologi, tips 3M Plus)
│   └── hooks/         # Infrastruktur dan logik data global (useWeather.tsx)
```

---

## 🚀 Cara Menjalankan (Getting Started)

### 1. Instalasi Node & Dependensi
Pastikan Anda memiliki *Node.js* (*v18+ recommended*) pada mesin lokal Anda. Lalu jalankan perintah instalasi standar:

```bash
git clone https://github.com/username/mosqita.git
cd mosqita
npm install
```

### 2. Variabel Lingkungan (Environment Variables)
Anda perlu menyediakan kredensial API Cuaca untuk menyalakan fitur peramalnya.
Salin dari format bawaan dengan membuat `.env.local` pada direktor *root* Mosqita Anda:

```env
NEXT_PUBLIC_WEATHER_API_KEY=kode_api_cuaca_anda_di_sini
```

### 3. Inisiasi Live Server
Setelah persiapan matang, luncurkan dasbor pembangunan dengan instruksi skrip:

```bash
npm run dev
```

Beralihlah ke peramban modern favorit Anda dan luncurkan tautan `http://localhost:3000` untuk berinteraksi langsung.

---

**Dibuat dengan ❤️ oleh [Alfareza](https://www.alfareza.site/)**
