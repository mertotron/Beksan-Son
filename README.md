2.07.2024 
_______________________________________________

saat: 16:07 paketlerin yüklenmesi tamamlandı
geliştirme süreci başladı
kurulan paketler 
    "body-parser": "^1.20.2",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-fileupload": "^1.5.0",
    "mysql": "^2.18.1",
    "nodemon": "^3.1.4"

saat: 16:17 projenin eski yedekten yüklemesi yapıldı hata gidermeye ve uyumlu hale geitirmeye başlıyorum

saat: 01:47 projenin ejs dosyalarının rotaları ayarlandı stylesheets dosyasından css dosyalarının yoları düzenlendi
-Gördüğüm tüm resimlerin yollarını tekrar düzenledim  artık resimler gözüküyor


PLANIM ŞÖYLE!!!!!!!!!!
TARİH 3.07.2024


Admin panelinin taslağının oluşturulması
----------------------------------------
user login sayfası ejs oluşturuldu 2.38 ✓
user login sayfası routes klasörüne rota oluşturuldu ✓
user login sayfası post işlemi eklenecek ve kontrol yapılacak ✓ !veritabanı eksik ✓

login hatası çözüldü işlem saat 2:15 de bitti ✓

tarih 4.07.2024 sıradaki işlemlere geçiliyor 3:16
----------------------------------------

user login sayfası için veritabanı oluşturuldu✓
- id_user✓
- username✓
- password✓

test kullanıcısı = INSERT INTO beksan_civata.users (id_user, username, password) VALUES (1, 'MRT', 'MRT1453'); ✓

özel bir adrese post atılınca gönderilen veriler veritabanına eklensin istiyorum kodları yazıyorum şu an ✓
Postman'den aşağıdaki gibi bir POST isteği gönderebilirsiniz:

URL: http://localhost:5000/users/addUser
Method: POST
Body: raw ve JSON olarak
json
{
    "id_user": 1,
    "username": "MRT",
    "password": "MRT1453"
}
tarih = 4.07.2024
--------------------------------
user şifresi hashlenecek ✓
04:37 admin paneli için giriş işlemi tamamlandı test girişi için tanımlanan 
 kullanıcı yukarıda bu gecelik bu kadar baba kaçar KAÇAOV




saat 16:52 de admin paneli için ön yüz tasarımına başladım

=> ürünler tablosu oluşturulacak ✓
-> ürün id si✓
-> ürün ismi ✓
-> ürün açıklaması ✓
-> ürün resminin dosya yolu ✓
-> urunler tablosuna urun kategorisi oluşturulacak
!-> tablonun dinamik hale getirilmesi gerekiyor admin panelden ekleme ✓ çıkarma yapılabilecek 
urunler tablosu oluşturuldu 

CREATE TABLE urunler (
    urun_id INT AUTO_INCREMENT PRIMARY KEY,
    urun_adi VARCHAR(255) NOT NULL,
    urun_resmi VARCHAR(255) NOT NULL,
    urun_aciklama TEXT,
    urun_sinif varchar(50) NOT NULL, 
);

Tabloyu yeniden oluşturmak için bunu gir


17:06 da tablo oluşturuldu şimdi formdan gelecek post istekleri yapılacak urun ekleme ile başlayalım✓




KULLANICI GİRİŞ SAYFASI -------------İF(TRUE SEND ADMİN PANEL) - ELSE(REFRESH PAGE)-----------> ADMİN PANEL✓

Not: veritabanının users kısmını burada oluşturabilirim ama şimdilik sabit değişkenlerle devam etmekte fayda var username = x psw = y ✓

YÖNLENDİRME SİSTEMİ TAMAMLANDIĞINDA GİRİŞ SAYFASI İÇİN VERİTABANI BAĞLANTISI YAPIP USER KONTROLU YAPILABİLİR ✓

----------------------------------------
saat ? da veritabanı diyagramını yapmaya başlayacağım ✓ gereg kalmadı

=> beksan database i kullanılarak <=
------------------------------------
=> kullanıcı tablosu oluşturulacak X
-> 3 adet kullanıcı profili oluşturulacak X
- ROOT kullanıcısı sitedeki herşeye serbest erişimi olacak X
- Admin kullanıcısı site sahibinin kullanacağı kullanıcı X
- Misafir kullanıcısı siteye test amaçlı eklenecek kullanıcı NOT: buna gerek  olmayabilir X


=> Her resmin adı zaman baz alınarak eşsiz bir şekilde sunucuya kaydedilecek ✓
!-> ürünler listesine yüklenecek ürünlerin resimleri public/products isimli dosyaya kaydedilecek ✓

tarih 8.07.2024  <= biten görevler => saat 14:01
------------------------------------------
->Admin panelinde silme işlemi tamamlandı ✓
->Sunucuya upload edilen dosyalar hem dosya sisteminden temizleniyor hem de veritabanından ürünler siliniyor ✓

-> Urunler.ejs de listeletme işlemi yapılacak


ekleme gerekirse buraya yap
----------------------------------------




