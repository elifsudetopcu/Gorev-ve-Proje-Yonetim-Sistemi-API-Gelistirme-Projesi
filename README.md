# TaskFlow API

TaskFlow, görevleri (tasks) yönetmek için Node.js ve Express.js ile geliştirilmiş basit bir REST API projesidir. Görev ekleme, listeleme, görüntüleme, güncelleme ve silme (CRUD) işlemlerini destekler.

## Projenin Amacı

- Node.js ve Express.js ile backend geliştirmeyi öğrenmek
- REST API mantığını, HTTP metotlarını ve status code'ları uygulamak
- JSON formatında veri alıp göndermek
- Middleware ve Express Router kullanmak
- API'yi Postman ile test etmek

## Kullanılan Teknolojiler

- JavaScript
- Node.js
- Express.js
- REST API / JSON
- Postman
- Git ve GitHub

## Özellikler

- Görev ekleme, listeleme, ID ile görüntüleme, güncelleme ve silme
- Express Router ile ayrı route dosyası
- Logger middleware (HTTP metodu, URL ve zaman bilgisi)
- Girdi doğrulama (başlık, açıklama, durum, öncelik ve ID)
- Geçersiz JSON ve geçersiz istek gövdeleri için hata yanıtları
- Anlaşılır JSON hata mesajları ve uygun HTTP status code'ları
- Silinen görev ID'lerinin tekrar kullanılmaması
- Görev listesinde sayfalama (`page` ve `limit` parametreleri)
- Node.js'in yerleşik test altyapısıyla API testleri

> **Not:** Veritabanı kullanılmaz. Görevler JavaScript dizisinde bellekte tutulur. Sunucu yeniden başlatıldığında yapılan değişiklikler sıfırlanır ve başlangıç verileri geri gelir.

## Klasör Yapısı

```text
taskflow-api/
├── data/
│   └── tasks.js
├── middleware/
│   └── logger.js
├── routes/
│   └── taskRoutes.js
├── test/
│   └── api.test.js
├── screenshots/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js