/* ============================================================
   Milyemim — arayüz etkileşimleri
   ============================================================ */

/* ---------- Navbar scroll durumu ---------- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- Mobil menü ---------- */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

/* ---------- Yıl ---------- */
const yEl = document.getElementById('year');
if (yEl) yEl.textContent = new Date().getFullYear();

/* ============================================================
   FİYAT EKRANI — DEMO / TEST GÖRÜNÜMÜ
   ------------------------------------------------------------
   DİKKAT: Buradaki fiyatlar GERÇEK DEĞİLDİR. Yalnızca ekranın
   nasıl görüneceğini göstermek için örnek/test verisidir.
   (Küçük rastgele oynamalarla "canlı" his verilir.)
   ============================================================ */

const priceItems = [
  { name: 'Gram Altın',      ico: '🥇', buy: 6200,  sell: 6330  },
  { name: 'Bilezik 22 Ayar', ico: '💍', buy: 5665,  sell: 5980  },
  { name: '14 Ayar',         ico: '✨', buy: 3405,  sell: 5310  },
  { name: 'Çeyrek Altın',    ico: '🪙', buy: 10090, sell: 10500 },
  { name: 'Cumhuriyet',      ico: '🏅', buy: 41400, sell: 42550 },
  { name: 'USD / TRY',       ico: '💵', buy: 46.60, sell: 46.75 },
  { name: 'EUR / TRY',       ico: '💶', buy: 53.20, sell: 53.45 },
];

const priceList = document.getElementById('priceList');
if (priceList) {
  const fmt = (n) =>
    n >= 100
      ? n.toLocaleString('tr-TR', { maximumFractionDigits: 0 })
      : n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  priceList.innerHTML = priceItems.map((it, i) => `
    <div class="price-row" data-i="${i}">
      <div class="pr-name">
        <span class="pr-ico">${it.ico}</span>
        <span>
          <span class="pr-label">${it.name}</span>
          <span class="pr-trend" id="trend-${i}"></span>
        </span>
      </div>
      <div class="pr-col buy"><span class="lbl">Alış</span><span class="val" id="buy-${i}">${fmt(it.buy)}</span></div>
      <div class="pr-col sell"><span class="lbl">Satış</span><span class="val" id="sell-${i}">${fmt(it.sell)}</span></div>
    </div>`).join('');

  // Küçük rastgele dalgalanmalar (yalnızca görsel amaçlı — gerçek veri değildir).
  const tick = () => {
    const i = Math.floor(Math.random() * priceItems.length);
    const it = priceItems[i];
    const drift = (base) => Math.max(0.5, base * (1 + (Math.random() - 0.5) * 0.003));
    it.buy = drift(it.buy);
    it.sell = drift(it.sell);
    const up = Math.random() > 0.5;
    const pct = (Math.random() * 0.35).toFixed(2);
    ['buy', 'sell'].forEach((k) => {
      const el = document.getElementById(`${k}-${i}`);
      if (el) {
        el.textContent = fmt(it[k]);
        const row = el.closest('.price-row');
        row.classList.remove('flash'); void row.offsetWidth; row.classList.add('flash');
      }
    });
    const trEl = document.getElementById(`trend-${i}`);
    if (trEl) trEl.innerHTML = up
      ? `<span class="trend-up">▲ ${pct}%</span>`
      : `<span class="trend-down">▼ ${pct}%</span>`;
  };
  setInterval(tick, 1500);

  // Saat
  const clock = document.getElementById('clock');
  const upd = () => clock && (clock.textContent = new Date().toLocaleTimeString('tr-TR'));
  upd(); setInterval(upd, 1000);
}

/* ============================================================
   Sıkça Sorulan Sorular (içerik + akordeon)
   ============================================================ */
const faqData = [
  {
    q: 'Milyemim tam olarak ne sunuyor?',
    a: 'Kuyumculara özel, markanıza göre tasarlanmış canlı altın ve döviz fiyat ekranı sunuyoruz. Hizmetimiz üç platformda çalışır: dükkanınızın ekranına yansıtabileceğiniz web sitesi, App Store için iOS uygulaması ve Google Play için Android uygulaması.'
  },
  {
    q: 'Fiyat ekranında hangi değerler yer alıyor?',
    a: 'Fiyat ekranlarımız, en popüler platformlarda (Harem Altın, Nadir Döviz vb.) bulunan bütün değerleri içerir: 24, 22, 14 ve 8 ayar altın, gram/çeyrek/cumhuriyet gibi altın türleri ve döviz kurları. Bu firmaların uygulamalarının aynısını size özel olarak tasarlıyoruz.'
  },
  {
    q: 'Fiyatlar ne sıklıkla güncelleniyor?',
    a: 'Altın ve döviz fiyatları saniyelik güncellemelerle anlık olarak yansıtılır. Güçlü sunucu altyapımız sayesinde verilere gecikme olmadan erişirsiniz.'
  },
  {
    q: 'Kendi renklerim, fontum ve logomla özelleştirebilir miyim?',
    a: 'Evet. İstediğiniz renk tonu, yazı fontu ve logonuzla web siteniz ve mobil uygulamalarınız tamamen markanıza özel hazır hale getirilir. Amacımız kendi markanızla oluşturulmuş bir dijital deneyim sunmak.'
  },
  {
    q: 'Kendi alış-satış fiyatlarımı / kâr marjımı belirleyebilir miyim?',
    a: 'Kesinlikle. İşletmenize özel alış ve satış fiyatları oluşturarak kâr marjlarınızı tümüyle kontrol edebilirsiniz. Belirlediğiniz marjlar hem web sitenize hem de mobil uygulamalarınıza uygulanır.'
  },
  {
    q: 'Verileriniz güvenilir ve doğru mu?',
    a: 'Doğruluğu teyit edilmiş verilerle çalışırsınız; böylece güvenle işlem yaparsınız. Ayrıca gelişmiş güvenlik teknolojileriyle verileriniz her zaman koruma altındadır.'
  },
  {
    q: 'Hem web sitesi hem de mobil uygulama alabilir miyim?',
    a: 'Evet. Yalnızca web sitesi alabilir, dilerseniz iOS ve Android mobil uygulamalarını da ekleyebilirsiniz. İhtiyacınıza göre paketleri birlikte veya ayrı tercih edebilirsiniz.'
  },
  {
    q: 'Uygulamalar App Store ve Google Play’de yayınlanıyor mu?',
    a: 'Evet. iOS uygulamanız App Store’da, Android uygulamanız Google Play’de yayınlanır. Böylece müşterileriniz uygulamanızı doğrudan mağazalardan indirip anlık fiyatları takip edebilir.'
  },
  {
    q: 'Süreç nasıl başlıyor?',
    a: 'WhatsApp üzerinden bizimle iletişime geçmeniz yeterli. İhtiyacınızı belirleyip size özel renk, font ve kâr marjlarıyla web sitenizi ve/veya mobil uygulamalarınızı hazır hale getiriyoruz.'
  },
];

const faqEl = document.getElementById('faq');
if (faqEl) {
  faqEl.innerHTML = faqData.map((f) => `
    <div class="faq">
      <button aria-expanded="false">
        <span>${f.q}</span>
        <span class="q-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg></span>
      </button>
      <div class="a"><p>${f.a}</p></div>
    </div>`).join('');

  faqEl.querySelectorAll('.faq').forEach((item) => {
    const btn = item.querySelector('button');
    const ans = item.querySelector('.a');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqEl.querySelectorAll('.faq').forEach((o) => {
        o.classList.remove('open');
        o.querySelector('.a').style.maxHeight = null;
        o.querySelector('button').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        ans.style.maxHeight = ans.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ============================================================
   Kaydırınca beliren animasyon (reveal)
   ============================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 90}ms`;
  io.observe(el);
});
