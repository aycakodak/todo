React.js Tabanlı Görev Yönetim Sistemi (ToDo App)
Proje Hakkında
Bu çalışma, modern web teknolojileri kullanılarak geliştirilmiş, bileşen tabanlı (Component-based architecture) bir görev yönetim uygulamasıdır. Yazılım geliştirme süreçlerinde temel kabul edilen CRUD (Create, Read, Update, Delete) operasyonlarının ReactJS ekosistemi içerisinde uygulanmasını temel alır.

Teknik Özellikler ve Mimari
Proje, verimlilik ve performans odaklı Vite araç seti üzerinde yapılandırılmıştır. Geliştirme sürecinde aşağıdaki teknik yaklaşımlar benimsenmiştir:

State Yönetimi: Uygulama verileri, React useState hook yapısı kullanılarak dinamik olarak yönetilmektedir.

Props Aktarımı: Bileşenler arası veri iletişimi ve fonksiyon yönetimi tek yönlü veri akışı (one-way data binding) prensibiyle sağlanmıştır.

Arayüz Tasarımı: Kullanıcı deneyimi (UX) odaklı, modern ve responsive bir arayüz için özelleştirilmiş CSS mimarisi tercih edilmiştir.

Modüler Yapı: Proje, sürdürülebilir kod prensipleri gereği Components, Pages ve Interfaces dizinleri altında katmanlı bir yapıda kurgulanmıştır.

İşlevsel Kapsam
Uygulama, bir görev yönetim sisteminde bulunması gereken temel fonksiyonları eksiksiz yerine getirmektedir:

Veri Girişi (Create): Benzersiz kimlik numaraları (ID) ile yeni görev tanımlama.

Veri Sunumu (Read): Mevcut görevlerin asenkron bir görünümle listelenmesi.

Veri Güncelleme (Update): Mevcut görev içeriklerinin düzenlenmesi ve durum değişikliği.

Veri Silme (Delete): Belirli kriterlere göre veri setinden kayıt kaldırılması.

Kullanılan Teknolojiler
Framework: React 18+

Programlama Dili: JavaScript (ES6+)

Stil Yönetimi: CSS3 (Flexbox & Grid)

Kütüphaneler: React Icons (Vektörel ikon desteği için)

Derleme Aracı: Vite

Kurulum ve Çalıştırma
Projeyi yerel ortamınızda test etmek için aşağıdaki adımları takip edebilirsiniz:

Bash
# Projeyi yerel makineye indirme
git clone https://github.com/aycakodak/todo-react.git

# Proje dizinine giriş
cd todo-react

# Gerekli bağımlılıkların yüklenmesi
npm install

# Uygulamanın geliştirme modunda başlatılması
npm run dev
Hazırlayan: Ayça Kodak



İletişim: GitHub/aycakodak