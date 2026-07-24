/* =========================================================
   IRT GOLD — Central Config
   แก้ไฟล์นี้ไฟล์เดียว มีผลกับทุกหน้า (register / update / check)
   ========================================================= */

const IRT_CONFIG = {

  /* ---------- Backend (Google Apps Script Web App) ---------- */
  // Apps Script : "IRT GOLD — Master API"
  // แก้โค้ดแล้วให้ Deploy → Manage deployments → แก้ deployment เดิม (URL จะได้ไม่เปลี่ยน)
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzt7UQx8lCPzwqX9EGJL_j7HatOIpTziZJGkHaYRWZn13osTPKiKEdJ1f6RgMIpf0H-Dg/exec',

  /* ---------- Product & Version ---------- */
  VERSION: 'V.8.0',

  // ราคาแต่ละแพ็กเกจ — แก้ตรงนี้ที่เดียว
  PACKAGES: {
    pc: {
      code:  'PC',
      name:  'IRT GOLD PC V.8.0',
      desc:  'สำหรับ MetaTrader 5 บนคอมพิวเตอร์',
      price: 3290,
      needMT5: true,
      needTV:  false,
      icon: 'monitor'
    },
    mb: {
      code:  'MB',
      name:  'IRT GOLD Mobile V.8.0',
      desc:  'สำหรับ TradingView บนมือถือและเว็บ',
      price: 3290,
      needMT5: false,
      needTV:  true,
      icon: 'phone'
    },
    combo: {
      code:  'Combo',
      name:  'IRT GOLD PC + MB V.8.0',
      desc:  'ครบชุด ใช้ได้ทั้งคอมพิวเตอร์และมือถือ',
      price: 3290,
      needMT5: true,
      needTV:  true,
      icon: 'devices',
      badge: 'BEST SELLER'
    }
  },

  // ค่าอัปเกรดสำหรับลูกค้าเก่า (0 = ฟรี)
  UPGRADE_PRICE: 0,

  /* ---------- ข้อมูลการชำระเงิน ---------- */
  BANK: {
    name:        'ธนาคารกสิกรไทย',
    nameEn:      'KASIKORNBANK',
    accountNo:   '216-8-19894-1',
    accountRaw:  '2168198941',
    accountName: 'หจก. เลิศฐาชัย 1994',
    qrName:      'นาย ศุภวัสส์ เลิศฐาชัยพรกุล',
    logo:        'Kb2.png',
    qr:          'Qkb.png'
  },

  /* ---------- ช่องทางติดต่อ ---------- */
  CONTACT: {
    line:      'https://lin.ee/sYM0jZJ',
    messenger: 'https://m.me/Meedee.Indi',
    email:     'irtgold18@gmail.com'
  },

  /* ---------- กฎการตรวจข้อมูล ---------- */
  VALIDATION: {
    MT5_MIN_DIGITS: 5,
    MT5_MAX_DIGITS: 12,
    SLIP_MAX_MB:    5,
    TV_PATTERN:     /^[A-Za-z0-9_]{3,25}$/   // TradingView username
  },

  /* ---------- Google Analytics ---------- */
  GA_ID: 'G-ZCBMS32BKS'
};

/* ---------- โหลด Google Analytics อัตโนมัติ ---------- */
(function loadGA() {
  if (!IRT_CONFIG.GA_ID) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + IRT_CONFIG.GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', IRT_CONFIG.GA_ID);
})();
