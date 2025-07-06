![Gambar](public/images/portfolio-dashboard.png)

# Website Portofolio - Tampilan Dashboard

[![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/ichramsyah/portfolio-dashboard-style/actions)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.10-purple)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.19.2-pink)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)](https://greensock.com/gsap/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-0.522.0-orange)](https://lucide.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-orange)](https://vitejs.dev/)
[![Last Updated](https://img.shields.io/badge/Last%20Updated-July%2006,%202025,%2010:18%20PM%20WIB-lightgrey)](https://github.com/ichramsyah/portfolio-dashboard-style)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

[README.md](README-en.md) English Ver.

Selamat datang di proyek Website Portofolio - Tampilan Dashboard 🚀 Ini adalah situs web portofolio pribadi modern yang dibangun dengan tata letak dashboard, dirancang untuk memamerkan proyek, pencapaian, dan informasi pribadi. Didukung oleh React, Vite, Tailwind CSS, Framer Motion, GSAP, dan ikon Lucide React, proyek ini menawarkan pengalaman yang interaktif dan responsif.

## Daftar Isi

- [Pendahuluan](#pendahuluan)
- [Fitur](#fitur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Persyaratan](#persyaratan)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Konfigurasi](#konfigurasi)
- [Pengujian](#pengujian)
- [Penyebaran](#penyebaran)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)
- [Kontak](#kontak)

## Pendahuluan

Website Portofolio - Tampilan Dashboard adalah situs web pribadi yang dinamis dan menarik secara visual yang menyajikan antarmuka berbasis dashboard untuk memamerkan proyek, pencapaian, dan detail pribadi. Terinspirasi dari tren desain modern, proyek ini menekankan performa, responsivitas, dan praktik kode bersih menggunakan teknologi web canggih.

## Fitur

- **Tata Letak Dashboard Modern**: Bagian-bagian modular yang rapi seperti Beranda, Tentang, Pencapaian, Proyek, dan Kontak.
- **Desain Responsif**: Dioptimalkan sepenuhnya untuk perangkat mobile, tablet, dan desktop menggunakan Tailwind CSS.
- **Animasi Interaktif**: Transisi dan animasi halus dengan Framer Motion dan GSAP untuk meningkatkan keterlibatan pengguna.
- **Dukungan Tema & Bahasa**: Mode gelap dan dukungan multi-bahasa (Bahasa Inggris dan Bahasa Indonesia) melalui konteks React kustom.
- **Arsitektur Berbasis Komponen**: Kode yang mudah dikelola dengan komponen React yang dapat digunakan kembali.
- **Dapat Disesuaikan**: Mudah memodifikasi bagian, animasi, dan gaya berkat desain modularnya.

## Teknologi yang Digunakan

- **Frontend**: React 19.1.0, Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Animasi**: Framer Motion 12.19.2, GSAP 3.13.0
- **Ikon**: Lucide React
- **Manajemen State**: React Context API
- **Local Storage**: Custom hook untuk penyimpanan tema dan bahasa

## Persyaratan

Sebelum memulai, pastikan yang berikut ini telah terinstal:

- **Node.js**: Versi 22.14.0
- **Package Manager**: NPM (direkomendasikan) atau Yarn
- **Browser Modern**: Chrome, Firefox, Edge, atau Safari (versi terbaru)
- **IDE/Text Editor**: VS Code, Sublime Text, atau serupa

## Instalasi

Jalankan proyek secara lokal dengan langkah-langkah berikut:

1. **Klon Repository**:

   ```bash
   git clone https://github.com/ichramsyah/portfolio-dashboard-style.git
   cd portfolio-dashboard-style
   ```

2. **Instal Dependensi**:

   - Menggunakan NPM:
     ```bash
     npm install
     ```
   - Menggunakan Yarn:
     ```bash
     yarn install
     ```

3. **Jalankan Server Pengembangan**:
   - Menggunakan NPM:
     ```bash
     npm run dev
     ```
   - Menggunakan Yarn:
     ```bash
     yarn dev
     ```
     Aplikasi akan tersedia di [http://localhost:3000](http://localhost:3000) (atau port yang ditentukan oleh Vite).

## Penggunaan

Setelah instalasi, buka browser Anda ke URL pengembangan untuk menjelajahi dashboard portofolio. Server pengembangan mendukung hot reloading untuk umpan balik instan pada perubahan kode.

Untuk build produksi:

```bash
npm run build
```

Pratinjau build:

```bash
npm run preview
```

## Konfigurasi

- **Tema & Bahasa**:  
  Sesuaikan pengaturan tema dan bahasa di `src/contexts/ThemeContext.jsx` dan `src/contexts/LanguageContext.jsx`. Modifikasi objek `translations` di `src/data/translations.js` untuk menambahkan atau memperbarui bahasa.

- **Tailwind CSS**:  
  Kustomisasi gaya di `tailwind.config.js` dan perbarui kelas CSS di komponen sesuai kebutuhan.

- **Data Proyek**:  
  Edit detail proyek di `src/components/sections/projects/projectsData.js` untuk memperbarui judul, deskripsi, dan tautan.

## Pengujian

Untuk memastikan kualitas kode, jalankan perintah berikut (jika tes telah ditambahkan):

```bash
npm test
```

_(Catatan: Tambahkan skrip tes dan file seperti `src/__tests__/` jika Anda berencana menyertakan pengujian dengan Jest atau React Testing Library.)_

## Penyebaran

Sebarkan proyek ke layanan hosting:

- **Netlify**: Seret folder `dist` (setelah `npm run build`) atau hubungkan repository GitHub Anda.
- **Vercel**: Jalankan `vercel` setelah menginstal CLI Vercel, atau sebarkan melalui dashboard Vercel.
- **GitHub Pages**: Gunakan paket `gh-pages`:
  ```bash
  npm install gh-pages --save-dev
  npm run deploy
  ```
  Perbarui `homepage` di `package.json` dengan URL GitHub Pages Anda.

## Kontribusi

Kontribusi sangat dianjurkan! Ikuti langkah-langkah berikut:

1. **Fork Repository**: Buat salinan Anda sendiri.
2. **Buat Cabang**: Gunakan nama deskriptif (misalnya, `feature/peningkatan-animasi`).
3. **Lakukan Perubahan**: Komit dengan pesan yang jelas (`git commit -m "Tambah peningkatan animasi"`).
4. **Push Perubahan**: `git push origin feature/peningkatan-animasi`.
5. **Ajukan Pull Request**: Berikan deskripsi terperinci tentang perubahan Anda.
6. **Laporkan Masalah**: Buka isu untuk bug atau saran perbaikan.

Harap patuhi gaya kode proyek dan sertakan dokumentasi untuk fitur baru.

## Lisensi

Proyek ini dilisensikan di bawah [GNU General Public License v3.0 (GPL-3.0)](LICENSE.txt). Anda bebas menggunakan, memodifikasi, dan mendistribusikan perangkat lunak ini, selama Anda mematuhi ketentuan GPL-3.0. Lihat file [LICENSE](LICENSE.txt) untuk detailnya.

## Kontak

- **Penulis**: Ichramsyah
- **Email**: ichramsyahabdurrachman@gmail.com
