# Backend API Gateway Service

Layanan REST API Gateway untuk Sistem Monitoring Ancaman (Threat Monitoring System). Dibangun menggunakan Node.js dan Express.js, terintegrasi dengan database spasial PostgreSQL + PostGIS, otentikasi JWT, serta webhook bot Telegram.

## Struktur Direktori

```text
backend/
├── src/
│   ├── config/              # Konfigurasi database PostGIS, JWT, dll.
│   ├── controllers/         # Handler logic request & response API
│   ├── middlewares/         # Middleware auth (JWT), validator, & error handler
│   ├── routes/              # Routing endpoint REST API
│   ├── services/            # Service integrasi (Telegram Webhook bot, dll.)
│   └── app.js               # Setup Express.js & registrasi routes
├── database/
│   └── init.sql             # Skrip SQL aktivasi PostGIS & struktur tabel
├── .env.example             # Contoh format environment variables
├── .gitignore               # Konfigurasi file yang diabaikan git
├── package.json             # Dependensi dan script runner
├── server.js                # Entry point server HTTP
└── README.md                # Dokumentasi proyek
```

## Prasyarat
- Node.js >= 18.x (Direkomendasikan Node.js v20+)
- PostgreSQL dengan ekstensi PostGIS

## Panduan Instalasi & Menjalankan

1. Masuk ke direktori backend:
   ```bash
   cd Backend
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Konfigurasi Environment Variables:
   Salin file `.env.example` menjadi `.env` lalu sesuaikan isinya:
   ```bash
   cp .env.example .env
   ```

4. Inisialisasi Database:
   Jalankan query pada `database/init.sql` pada database PostgreSQL Anda untuk mengaktifkan ekstensi PostGIS.

5. Jalankan server:
   - Mode Development (auto-reload):
     ```bash
     npm run dev
     ```
   - Mode Production:
     ```bash
     npm start
     ```

6. Uji Coba Server:
   Akses endpoint health check melalui browser atau curl:
   ```bash
   curl http://localhost:5000/api/health
   ```
