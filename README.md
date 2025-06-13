# Campus Club Finder

## 📜 Deskripsi

Campus Club Finder adalah sebuah aplikasi web satu halaman (Single-Page Application) yang dibangun untuk membantu mahasiswa menemukan, mempelajari, dan bergabung dengan berbagai klub yang ada di kampus. Aplikasi ini murni berjalan di sisi klien (client-side) dan menggunakan Local Storage untuk menyimpan data klub yang telah diikuti oleh pengguna.

## 📸 Tampilan Aplikasi 

Berikut adalah beberapa tampilan dari halaman utama aplikasi:

**1. Halaman Utama (Home Page)**
*Tampilan hero section yang menyambut pengguna.*
![image](https://github.com/user-attachments/assets/18a0fe19-8c55-4122-8c4d-e9c3e22212b1)


**2. Halaman Daftar Klub (Clubs Page - Grid & List View)**
*Pengguna dapat melihat semua klub, melakukan sorting, dan mengubah tampilan antara grid dan list.*
![image](https://github.com/user-attachments/assets/47d341ca-c5f5-496c-b5bc-e29f885f697b)
![image](https://github.com/user-attachments/assets/88175fc2-b577-4e5e-b6fc-ef3dc4cb95b2)


**3. Halaman Detail Klub (Club Detail Page)**
*Menampilkan informasi lengkap tentang klub, acara, dan tombol untuk bergabung.*
![image](https://github.com/user-attachments/assets/1b494e00-e5cc-442b-93d5-242bbcabfe3c)


**4. Halaman About & 404**
*Halaman informasi dan halaman not found yang fungsional.*
![image](https://github.com/user-attachments/assets/0c8b27c2-520c-4d9b-9872-42510f0e53ce)
![image](https://github.com/user-attachments/assets/b478277e-2501-4127-a290-cd10f5820c98)


## ✨ Fitur-fitur

- **Menampilkan Daftar Klub:** Melihat 5 klub mahasiswa default yang tersedia.
- **Halaman Detail:** Setiap klub memiliki halaman detailnya sendiri dengan deskripsi lengkap dan daftar acara.
- **Sorting:** Mengurutkan daftar klub berdasarkan nama (A-Z atau Z-A).
- **View Toggle:** Ubah tampilan daftar klub antara mode Grid dan List.
- **Gabung Klub:** Pengguna dapat bergabung dengan klub, dan pilihan ini akan tersimpan di Local Storage browser.
- **Navigasi Mulus:** Berpindah antar halaman tanpa refresh menggunakan React Router.
- **Desain Responsif:** Tampilan yang dioptimalkan untuk perangkat mobile, tablet, dan desktop.

## 🛠️ Tech Stack

Proyek ini dibangun menggunakan teknologi modern berikut:

- **[Vite](https://vitejs.dev/):** Sebagai build tool dan development server yang sangat cepat.
- **[React](https://reactjs.org/):** Library JavaScript untuk membangun antarmuka pengguna.
- **[React Router](https://reactrouter.com/):** Untuk menangani routing di sisi klien.
- **[Tailwind CSS](https://tailwindcss.com/):** Kerangka kerja CSS utility-first untuk styling.
