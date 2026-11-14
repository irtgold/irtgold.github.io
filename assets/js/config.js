/* =========================================================
   IRT GOLD — Central Config
   แก้ไฟล์นี้ไฟล์เดียว มีผลกับทุกหน้า (register / update / check)
   ========================================================= */

const IRT_CONFIG = {

  /* ---------- Backend (Google Apps Script Web App) ---------- */
  // Apps Script : "IRT GOLD — Master v2" (สลับจาก Master API เดิม 14 พ.ย. 69 · ย้อนกลับ = ใส่ URL เดิม AKfycbzt7UQx8lCPzwqX9EGJL_j7HatOIpTziZJGkHaYRWZn13osTPKiKEdJ1f6RgMIpf0H-Dg)
  // แก้โค้ดแล้วให้ Deploy → Manage deployments → แก้ deployment เดิม (URL จะได้ไม่เปลี่ยน)
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxsCD-l1vEfcT0hxODYvE1PHL8TMBegYgnkpB_8ymzh11vwwpDdohFzCe-7LckVw1KUtQ/exec',

  /* ---------- Product & Version ---------- */
  VERSION: 'V.8.0',

  // ราคาแต่ละแพ็กเกจ — แก้ตรงนี้ที่เดียว
  // เรียงจากถูกไปแพง : Mobile → PC → Combo
  // tier กำหนดสีการ์ด : basic (เขียว) · plus (ฟ้า) · premium (ทอง)
  PACKAGES: {
    mb: {
      hidden: true,        // ยกเลิกขาย (เปลี่ยนจาก TradingView เป็น IRT GOLD LAB · 14 พ.ย. 69) — คงไว้เพื่อลูกค้าเก่า
      code:  'MB',
      name:  'IRT GOLD Mobile V.8.0',
      desc:  'สำหรับ TradingView บนมือถือและเว็บ',
      price: 3290,
      needMT5: false,
      needTV:  true,
      icon:  'phone',
      tier:  'basic',
      label: 'เริ่มต้น'
    },
    pc: {
      code:  'PC',
      name:  'IRT GOLD PC V.8.0',
      desc:  'โปรแกรม MT5 พร้อมสัญญาณ BUY/SELL + เว็บ IRT GOLD LAB ใช้ฟรี 1 ปี',
      price: 3290,
      needMT5: true,
      needTV:  false,
      icon:  'devices',
      tier:  'premium',
      badge: 'ได้ทั้ง 2 ระบบ',
      note:  'IRT GOLD LAB มูลค่ารายปี รับฟรี · ต่ออายุทักทีมงาน'
    },
    combo: {
      hidden: true,        // รวมเข้าแพ็กเกจ PC แล้ว (เว็บแถมฟรี 1 ปี)
      code:  'Combo',
      name:  'IRT GOLD PC + MB V.8.0',
      desc:  'ครบชุด ใช้ได้ทั้งคอมพิวเตอร์และมือถือ',
      price: 3290,
      needMT5: true,
      needTV:  true,
      icon:  'devices',
      tier:  'premium',
      badge: 'BEST SELLER',
      note:  'ซื้อแยก ฿6,580 · ประหยัด ฿3,290'
    }
  },

  // ค่าอัปเกรดลูกค้าเก่า V.5.0 → V.8.0 + เว็บ IRT GOLD LAB 1 ปี (14 พ.ย. 69)
  UPGRADE_PRICE: 890,

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
    SLIP_MAX_MB:    10,
    TV_PATTERN:     /^[A-Za-z0-9_-]{3,30}$/   // TradingView username (มี - ได้ ยาวได้ถึง 30)
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
