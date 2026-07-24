/* =========================================================
   IRT GOLD — Shared Form Helpers
   ใช้ร่วมกันทุกหน้า ต้องโหลดหลัง config.js
   ========================================================= */

/* ---------------------------------------------------------
   ไอคอน SVG — เส้นบาง โทนพรีเมียม ใช้แทน emoji ทุกที่
   --------------------------------------------------------- */
const IRT_ICONS = {
  monitor:  '<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8.5 21h7M12 17v4"/>',
  phone:    '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 5.8h3"/><path d="M11 18.6h2"/>',
  devices:  '<rect x="1.5" y="4.5" width="13" height="10" rx="1.8"/><path d="M5.5 18.5h5M8 14.5v4"/><rect x="17" y="8.5" width="5.5" height="12" rx="1.5"/>',
  cart:     '<path d="M2.5 3h2.2l2.4 11.4a1.8 1.8 0 0 0 1.8 1.4h8.4a1.8 1.8 0 0 0 1.8-1.4L21 7H6"/><circle cx="9.5" cy="20" r="1.4"/><circle cx="17.5" cy="20" r="1.4"/>',
  refresh:  '<path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-8.1-5.1"/><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 8.1 5.1"/><path d="M20.2 3.4v4.8h-4.8M3.8 20.6v-4.8h4.8"/>',
  search:   '<circle cx="11" cy="11" r="7"/><path d="M16.2 16.2 21 21"/>',
  shield:   '<path d="M12 2.8 4.5 6v6c0 4.4 3.1 8.3 7.5 9.4 4.4-1.1 7.5-5 7.5-9.4V6z"/><path d="m9.2 12 2 2 3.6-3.8"/>',
  check:    '<path d="m4.5 12.5 5 5 10-11"/>',
  key:      '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.8 12.2 8.7-8.7M17 6l3 3M14.2 8.8l2.6 2.6"/>',
  mail:     '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6.5 9 6.5 9-6.5"/>',
  chat:     '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-2.8-.4L4 21l1.4-4.1A8.2 8.2 0 0 1 3 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 9 8.4z"/>',
  line:     '<path d="M21 10.4c0-4-4-7.3-9-7.3S3 6.4 3 10.4c0 3.6 3.2 6.6 7.5 7.2.3.06.7.2.8.46.1.24.06.6.03.84l-.13.78c-.04.23-.18.9.79.49s5.2-3.06 7.1-5.24C20.4 13.5 21 12 21 10.4z"/>',
  arrow:    '<path d="M5 12h14M13 6l6 6-6 6"/>',
  clock:    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.3l3.4 2"/>',
  download: '<path d="M12 3.5v11M7.5 10.5 12 15l4.5-4.5"/><path d="M3.5 16.5v2a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-2"/>',
  alert:    '<path d="M10.3 3.9 2.4 17.4A1.9 1.9 0 0 0 4 20.3h16a1.9 1.9 0 0 0 1.6-2.9L13.7 3.9a1.9 1.9 0 0 0-3.4 0z"/><path d="M12 9.2v4.2M12 17h.01"/>',
  info:     '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  copy:     '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5.5 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.5"/>',
  upload:   '<path d="M12 20.5v-11M7.5 13.5 12 9l4.5 4.5"/><path d="M3.5 7.5v-2a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2"/>',
  user:     '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  star:     '<path d="m12 3.5 2.6 5.4 5.9.85-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.85z"/>',
  help:     '<circle cx="12" cy="12" r="9"/><path d="M9.3 9.3a2.8 2.8 0 0 1 5.4.9c0 1.9-2.7 2.5-2.7 2.5"/><path d="M12 17h.01"/>',
  plus:     '<path d="M12 5.5v13M5.5 12h13"/>',
  chart:    '<path d="M3.5 20.5h17"/><path d="m4.5 15.5 4.5-5 3.5 3 6.5-7.5"/>',
  book:     '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v18H5.5A1.5 1.5 0 0 1 4 19.5z"/><path d="M4 17.5h15"/>',
  home:     '<path d="M3.5 10.5 12 3.5l8.5 7"/><path d="M5.5 9.5v11h13v-11"/><path d="M10 20.5v-6h4v6"/>',
  cash:     '<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 10v4M18 10v4"/>'
};

const IRT = {

  /* ---------------- ไอคอน ---------------- */

  // คืนค่า SVG string — ใช้กับ innerHTML ได้เลย
  icon(name, size) {
    const paths = IRT_ICONS[name];
    if (!paths) return '';
    const s = size || 24;
    return `<svg class="icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">${paths}</svg>`;
  },

  // แปลง <i data-icon="search"></i> ใน HTML ให้กลายเป็น SVG อัตโนมัติ
  hydrateIcons(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(el => {
      el.innerHTML = IRT.icon(el.dataset.icon, el.dataset.size || 18);
      el.classList.add('ico');
      el.removeAttribute('data-icon');
    });
  },

  /* ---------------- ตรวจข้อมูล ---------------- */

  // เลขบัญชี MT5 : ตัวเลขล้วน 5-12 หลัก
  validMT5(v) {
    const s = String(v || '').trim();
    const { MT5_MIN_DIGITS: min, MT5_MAX_DIGITS: max } = IRT_CONFIG.VALIDATION;
    if (!/^\d+$/.test(s))              return { ok: false, msg: 'ต้องเป็นตัวเลขเท่านั้น (ห้ามมีชื่อโบรกเกอร์หรือเว้นวรรค)' };
    if (s.length < min)                return { ok: false, msg: `สั้นเกินไป ต้องมีอย่างน้อย ${min} หลัก` };
    if (s.length > max)                return { ok: false, msg: `ยาวเกินไป ต้องไม่เกิน ${max} หลัก` };
    return { ok: true, msg: 'รูปแบบถูกต้อง' };
  },

  // TradingView username
  validTV(v) {
    const s = String(v || '').trim();
    if (!s)                                            return { ok: false, msg: 'กรุณากรอกชื่อผู้ใช้ TradingView' };
    if (s.includes('@'))                               return { ok: false, msg: 'กรอก Username ไม่ใช่อีเมล (ไม่ต้องมี @)' };
    if (!IRT_CONFIG.VALIDATION.TV_PATTERN.test(s))     return { ok: false, msg: 'ใช้ได้เฉพาะ a-z A-Z 0-9 และ _ ความยาว 3-25 ตัว' };
    return { ok: true, msg: 'รูปแบบถูกต้อง' };
  },

  validEmail(v) {
    const s = String(v || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) return { ok: false, msg: 'รูปแบบอีเมลไม่ถูกต้อง' };
    return { ok: true, msg: 'รูปแบบถูกต้อง' };
  },

  validPhone(v) {
    const s = String(v || '').replace(/[-\s]/g, '');
    if (!/^0\d{8,9}$/.test(s)) return { ok: false, msg: 'เบอร์โทรไม่ถูกต้อง (ขึ้นต้นด้วย 0 ยาว 9-10 หลัก)' };
    return { ok: true, msg: 'รูปแบบถูกต้อง' };
  },

  /* ---------------- แสดงผลการตรวจใต้ช่องกรอก ---------------- */

  // ผูก input เข้ากับฟังก์ชันตรวจ ให้แสดงผลสด ๆ ตอนพิมพ์
  bindCheck(inputId, hintId, checkFn) {
    const input = document.getElementById(inputId);
    const hint  = document.getElementById(hintId);
    if (!input || !hint) return;

    const run = () => {
      const v = input.value.trim();
      if (!v) {
        input.classList.remove('input-ok', 'input-bad');
        hint.classList.remove('show', 'ok', 'bad');
        return true;
      }
      const r = checkFn(v);
      input.classList.toggle('input-ok',  r.ok);
      input.classList.toggle('input-bad', !r.ok);
      hint.innerHTML = IRT.icon(r.ok ? 'check' : 'alert', 14) + '<span>' + r.msg + '</span>';
      hint.classList.add('show');
      hint.classList.toggle('ok',  r.ok);
      hint.classList.toggle('bad', !r.ok);
      return r.ok;
    };

    input.addEventListener('input', run);
    input.addEventListener('blur',  run);
    return run;
  },

  // ตรวจว่าช่อง "ยืนยัน" ตรงกับช่องต้นฉบับไหม
  bindConfirm(srcId, confirmId, hintId, label) {
    const src  = document.getElementById(srcId);
    const conf = document.getElementById(confirmId);
    const hint = document.getElementById(hintId);
    if (!src || !conf || !hint) return;

    const run = () => {
      const a = src.value.trim();
      const b = conf.value.trim();
      if (!b) {
        conf.classList.remove('input-ok', 'input-bad');
        hint.classList.remove('show', 'ok', 'bad');
        return false;
      }
      const same = a === b;
      conf.classList.toggle('input-ok',  same);
      conf.classList.toggle('input-bad', !same);
      hint.innerHTML = IRT.icon(same ? 'check' : 'alert', 14) +
        '<span>' + (same ? label + 'ตรงกัน' : label + 'ไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง') + '</span>';
      hint.classList.add('show');
      hint.classList.toggle('ok',  same);
      hint.classList.toggle('bad', !same);
      return same;
    };

    src.addEventListener('input',  run);
    conf.addEventListener('input', run);
    conf.addEventListener('blur',  run);
    return run;
  },

  /* ---------------- ไฟล์สลิป ---------------- */

  slipFile: null,

  handleSlip(input, opts) {
    const o = Object.assign({
      placeholderId: 'slip-placeholder',
      wrapId:        'slip-preview-wrap',
      imgId:         'slip-preview',
      onError:       (m) => alert(m)
    }, opts || {});

    const file = input.files[0];
    if (!file) return;

    const maxBytes = IRT_CONFIG.VALIDATION.SLIP_MAX_MB * 1024 * 1024;
    if (file.size > maxBytes) {
      o.onError(`ไฟล์ใหญ่เกินไป (สูงสุด ${IRT_CONFIG.VALIDATION.SLIP_MAX_MB} MB)`);
      input.value = '';
      return;
    }
    if (!file.type.startsWith('image/')) {
      o.onError('รองรับเฉพาะไฟล์รูปภาพ (JPG, PNG)');
      input.value = '';
      return;
    }

    IRT.slipFile = file;
    const reader = new FileReader();
    reader.onloadend = () => {
      document.getElementById(o.placeholderId).classList.add('hidden');
      document.getElementById(o.wrapId).classList.remove('hidden');
      document.getElementById(o.imgId).src = reader.result;
    };
    reader.readAsDataURL(file);
  },

  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload  = () => resolve(reader.result.split(',')[1]);
      reader.onerror = () => reject(new Error('ไม่สามารถอ่านไฟล์ได้'));
      reader.readAsDataURL(file);
    });
  },

  /* ---------------- ส่งข้อมูลไป Apps Script ---------------- */

  // action: 'new' | 'upgrade' | 'check'
  async send(action, data) {
    if (IRT_CONFIG.SCRIPT_URL.includes('PASTE_YOUR_NEW_DEPLOYMENT_ID_HERE')) {
      throw new Error('ยังไม่ได้ตั้งค่า SCRIPT_URL ใน assets/js/config.js');
    }

    const payload = new FormData();
    payload.append('action', action);
    Object.keys(data).forEach(k => {
      if (data[k] !== undefined && data[k] !== null) payload.append(k, data[k]);
    });

    const res = await fetch(IRT_CONFIG.SCRIPT_URL, { method: 'POST', body: payload });
    if (!res.ok) throw new Error('เซิร์ฟเวอร์ไม่ตอบสนอง (HTTP ' + res.status + ')');

    const result = await res.json();
    if (!result.ok) throw new Error(result.error || 'ไม่สามารถบันทึกข้อมูลได้');
    return result;
  },

  /* ---------------- UI ทั่วไป ---------------- */

  setLoading(btnId, on, idleHTML) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    if (on) {
      btn.dataset.idle = btn.dataset.idle || idleHTML || btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner mr-2"></span> กำลังดำเนินการ...';
      btn.style.background = '#94a3b8';
      btn.style.cursor = 'not-allowed';
      btn.classList.remove('pulse-glow');
    } else {
      btn.disabled = false;
      btn.innerHTML = btn.dataset.idle || idleHTML || '';
      btn.style.background = '';
      btn.style.cursor = '';
      btn.classList.add('pulse-glow');
    }
  },

  showError(msg, elId) {
    const el = document.getElementById(elId || 'error-msg');
    if (!el) return alert(msg);
    const span = document.createElement('span');
    span.textContent = msg;
    el.innerHTML = IRT.icon('alert', 15);
    el.appendChild(span);
    el.classList.remove('hidden');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },

  hideError(elId) {
    const el = document.getElementById(elId || 'error-msg');
    if (el) el.classList.add('hidden');
  },

  copyText(text, btnId, doneLabel) {
    const btn = document.getElementById(btnId);
    const done = () => {
      if (!btn) return;
      const original = btn.dataset.orig || btn.innerHTML;
      btn.dataset.orig = original;
      btn.innerHTML = doneLabel || (IRT.icon('check', 15) + ' คัดลอกแล้ว!');
      setTimeout(() => { btn.innerHTML = original; }, 2000);
    };
    navigator.clipboard.writeText(text).then(done).catch(() => {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      done();
    });
  },

  baht(n) {
    return '฿' + Number(n).toLocaleString('th-TH');
  },

  today() {
    return new Date().toISOString().split('T')[0];
  }
};
