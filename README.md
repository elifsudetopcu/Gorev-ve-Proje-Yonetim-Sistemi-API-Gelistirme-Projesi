# Görev ve Proje Yönetim Sistemi API (TaskFlow API)

Node.js ve Express.js kullanılarak geliştirilen, görevleri yönetmek için tasarlanmış bir REST API projesidir. Proje; görev oluşturma, listeleme, görüntüleme, güncelleme ve silme (CRUD) işlemlerini destekler.

## Projenin Amacı

- Node.js ve Express.js kullanarak backend geliştirme becerilerini geliştirmek.
- REST API yapısını ve HTTP metotlarını uygulamak.
- JSON formatında veri alışverişi gerçekleştirmek.
- Express Router ve middleware kullanımını öğrenmek.
- İstek doğrulama ve hata yönetimini uygulamak.
- API endpoint'lerini Postman ile test etmek.
- Sayfalama (pagination) mantığını uygulamak.

## Kullanılan Teknolojiler

- JavaScript
- Node.js
- Express.js
- REST API
- JSON
- Postman
- Git ve GitHub
- Node.js yerleşik test altyapısı (`node:test`)

## Özellikler

- Görev oluşturma, listeleme, ID ile görüntüleme, güncelleme ve silme.
- Express Router ile düzenlenmiş endpoint yapısı.
- HTTP isteklerini kaydeden logger middleware.
- Görev alanları için girdi doğrulama.
- Geçersiz JSON ve hatalı istek gövdeleri için hata yanıtları.
- Anlaşılır JSON yanıtları ve uygun HTTP durum kodları.
- Görev listesinde sayfalama desteği.
- Silinen görev ID'lerinin tekrar kullanılmaması.
- Otomatik API testleri için Node.js test altyapısı.

> **Veri saklama:** Bu projede veritabanı kullanılmamaktadır. Görevler JavaScript dizisinde bellekte tutulur. Sunucu yeniden başlatıldığında yapılan değişiklikler kaybolur ve başlangıç görevleri yeniden yüklenir.

## Proje Klasör Yapısı

```text
Gorev-ve-Proje-Yonetim-Sistemi-API-Gelistirme-Projesi/
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

## Projenin İndirilmesi, Kurulması ve Çalıştırılması

Bu bölümde projenin GitHub üzerinden bilgisayara nasıl indirileceği, gerekli bağımlılıkların nasıl kurulacağı ve API sunucusunun nasıl çalıştırılacağı adım adım açıklanmaktadır.

### Adım 1: Gerekli Araçların Kurulması

Projeyi çalıştırabilmek için bilgisayarında aşağıdaki araçların kurulu olması gerekir:

- **Node.js:** JavaScript kodlarını sunucu tarafında çalıştırmak için kullanılır.
- **npm:** Projenin bağımlılıklarını yüklemek için kullanılır.
- **Git:** Projeyi GitHub üzerinden indirmek için kullanılır.
- **Postman:** API endpoint'lerini test etmek için kullanılabilir.

Kurulumların doğru yapıldığını kontrol etmek için terminali aç ve aşağıdaki komutları çalıştır:

```bash
node -v
npm -v
git --version