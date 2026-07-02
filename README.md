# Milyemim — Web Sitesi

Kuyumculara özel canlı altın & döviz fiyat ekranı için tanıtım sitesi.
**Tamamen statik** (HTML + CSS + JS) — sunucu/backend gerektirmez.

## Dosyalar
| Dosya | Açıklama |
|-------|----------|
| `index.html` | Ana sayfa (hero, hizmetler, özellikler, fiyatlandırma, SSS, iletişim) |
| `kariyer.html` | Kariyer sayfası (LinkedIn ilan linki) |
| `styles.css` | Tüm stiller (logo renklerine uyumlu: altın · siyah · antrasit) |
| `script.js` | Fiyat ekranı animasyonu, SSS akordeon, menü |
| `logo-mark.png` | Şeffaf arka planlı logo (site içi kullanım) |
| `logo.png` | Orijinal logo |
| `favicon.png` | Site ikonu |

## İletişim bilgileri (sitede bağlı)
- **WhatsApp mesaj:** https://wa.me/905312233125
- **Telefon / Arama:** 0531 223 31 25
- **LinkedIn şirket:** https://www.linkedin.com/company/milyemim
- **Kariyer ilanı:** https://www.linkedin.com/jobs/view/4432302767

## Yerelde açmak
`index.html` dosyasına çift tıklamak yeterli. (Ya da: `python3 -m http.server` → http://localhost:8000)

## Yayınlama — EN UCUZ YOL: Cloudflare Pages (ÜCRETSİZ)
1. https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages**
2. "Upload assets" ile bu klasördeki dosyaları sürükle-bırak (siteicerik.pdf hariç).
3. Yayınlandıktan sonra **Custom domains** → `milyemim.com` ekle.
4. Alan adı panelinden Cloudflare'in verdiği kayıtları gir → SSL otomatik gelir.

> Alternatif ücretsiz: GitHub Pages veya Netlify (aynı dosyaları sürükle-bırak).

## Not: Fiyat ekranındaki rakamlar
Ana sayfadaki canlı fiyat kartındaki sayılar **örnek/demo** amaçlıdır (JS animasyonu).
Gerçek canlı altın/döviz verisi istenirse bir API + backend gerekir (bu sizin sattığınız asıl ürün).
