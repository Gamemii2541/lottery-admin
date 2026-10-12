// ===== Mock Data =====
const banks = [
  'กสิกรไทย','ไทยพาณิชย์','กรุงเทพ','กรุงไทย','กรุงศรีอยุธยา','ทหารไทยธนชาต','ออมสิน',
  'ธ.ก.ส. (เพื่อการเกษตร)','ซีไอเอ็มบี ไทย','ยูโอบี','แลนด์ แอนด์ เฮ้าส์','ทิสโก้',
  'เกียรตินาคินภัทร','ไอซีบีซี (ไทย)','ไทยเครดิต','เมกะ สากลพาณิชย์','อิสลามแห่งประเทศไทย',
  'เอเอ็นแซด (ANZ)','สแตนดาร์ดชาร์เตอร์ด','เอชเอสบีซี (HSBC)','ธนาคารแห่งประเทศจีน',
  'ซูมิโตโม มิตซุย','มิซูโฮ'
];

const members = [
  { id:1, username:'somchai88', fullname:'สมชาย ใจดี', phone:'081-234-5678', credit:15200, bank:'กสิกรไทย', account:'123-4-56789-0', created:'2025-11-12', status:'active' },
  { id:2, username:'nongploy', fullname:'พลอย สวยงาม', phone:'089-111-2222', credit:8500, bank:'ไทยพาณิชย์', account:'456-7-89012-3', created:'2025-12-01', status:'active' },
  { id:3, username:'boss999', fullname:'บอส มหาชน', phone:'062-333-4444', credit:0, bank:'กรุงเทพ', account:'789-0-12345-6', created:'2026-01-15', status:'banned' },
  { id:4, username:'mama55', fullname:'มาลี รักดี', phone:'095-555-6666', credit:32000, bank:'กรุงไทย', account:'321-0-98765-4', created:'2025-10-20', status:'active' },
  { id:5, username:'tiger77', fullname:'เสือ ดำรงค์', phone:'086-777-8888', credit:4500, bank:'กรุงศรีอยุธยา', account:'654-3-21098-7', created:'2026-02-08', status:'active' },
  { id:6, username:'lucky99', fullname:'โชคดี มีสุข', phone:'098-999-0000', credit:1200, bank:'ออมสิน', account:'111-2-33344-5', created:'2026-03-01', status:'active' },
];

const transactions = [
  { id:1, time:'2026-10-12 23:45', user:'somchai88', type:'deposit', amount:5000, bank:'กสิกรไทย', ref:'DP20261012001', status:'success' },
  { id:2, time:'2026-10-12 23:30', user:'nongploy', type:'withdraw', amount:2000, bank:'ไทยพาณิชย์', ref:'WD20261012015', status:'pending' },
  { id:3, time:'2026-10-12 22:15', user:'mama55', type:'deposit', amount:10000, bank:'กรุงไทย', ref:'DP20261012002', status:'success' },
  { id:4, time:'2026-10-12 21:50', user:'tiger77', type:'withdraw', amount:1500, bank:'กรุงศรีอยุธยา', ref:'WD20261012014', status:'success' },
  { id:5, time:'2026-10-12 20:30', user:'lucky99', type:'deposit', amount:3000, bank:'ออมสิน', ref:'DP20261012003', status:'success' },
  { id:6, time:'2026-10-12 19:45', user:'somchai88', type:'withdraw', amount:8000, bank:'กสิกรไทย', ref:'WD20261012013', status:'pending' },
  { id:7, time:'2026-10-12 18:20', user:'boss999', type:'withdraw', amount:500, bank:'กรุงเทพ', ref:'WD20261012012', status:'rejected' },
  { id:8, time:'2026-10-12 17:10', user:'nongploy', type:'deposit', amount:2000, bank:'ไทยพาณิชย์', ref:'DP20261012004', status:'success' },
  { id:9, time:'2026-10-12 16:00', user:'mama55', type:'withdraw', amount:5000, bank:'กรุงไทย', ref:'WD20261012011', status:'pending' },
  { id:10, time:'2026-10-12 15:30', user:'tiger77', type:'deposit', amount:1500, bank:'กรุงศรีอยุธยา', ref:'DP20261012005', status:'success' },
];

const pendingWithdraws = [
  { id:1, time:'2026-10-12 23:30', user:'nongploy', amount:2000, bank:'ไทยพาณิชย์', account:'456-7-89012-3', name:'พลอย สวยงาม' },
  { id:2, time:'2026-10-12 19:45', user:'somchai88', amount:8000, bank:'กสิกรไทย', account:'123-4-56789-0', name:'สมชาย ใจดี' },
  { id:3, time:'2026-10-12 16:00', user:'mama55', amount:5000, bank:'กรุงไทย', account:'321-0-98765-4', name:'มาลี รักดี' },
  { id:4, time:'2026-10-12 14:20', user:'lucky99', amount:1000, bank:'ออมสิน', account:'111-2-33344-5', name:'โชคดี มีสุข' },
  { id:5, time:'2026-10-12 12:10', user:'tiger77', amount:3000, bank:'กรุงศรีอยุธยา', account:'654-3-21098-7', name:'เสือ ดำรงค์' },
];

const completedSlips = [
  { id:1, time:'2026-10-12 21:55', user:'tiger77', amount:1500, bank:'กรุงศรีอยุธยา', ref:'WD20261012014', by:'Admin' },
  { id:2, time:'2026-10-12 18:00', user:'somchai88', amount:3500, bank:'กสิกรไทย', ref:'WD20261012010', by:'Admin' },
  { id:3, time:'2026-10-12 14:30', user:'nongploy', amount:1200, bank:'ไทยพาณิชย์', ref:'WD20261012009', by:'Admin' },
  { id:4, time:'2026-10-11 22:10', user:'mama55', amount:7000, bank:'กรุงไทย', ref:'WD20261011008', by:'Admin' },
  { id:5, time:'2026-10-11 16:45', user:'lucky99', amount:800, bank:'ออมสิน', ref:'WD20261011007', by:'Admin' },
];

const creditHistory = [
  { time:'2026-10-12 20:00', user:'somchai88', type:'add', amount:1000, by:'Admin', note:'โปรโมชั่นเติมเงิน' },
  { time:'2026-10-11 15:30', user:'nongploy', type:'sub', amount:500, by:'Admin', note:'หักยอดผิดพลาด' },
  { time:'2026-10-10 11:00', user:'mama55', type:'add', amount:2000, by:'Admin', note:'โบนัสวันเกิด' },
];

const systemAccounts = [
  { id:1, bank:'กสิกรไทย', account:'123-4-56789-0', name:'บริษัท หวยออนไลน์ จำกัด', type:'ฝาก', balance:1250000, status:'active' },
  { id:2, bank:'ไทยพาณิชย์', account:'987-6-54321-0', name:'บริษัท หวยออนไลน์ จำกัด', type:'ฝาก', balance:890000, status:'active' },
  { id:3, bank:'กรุงเทพ', account:'555-1-23456-7', name:'บริษัท หวยออนไลน์ จำกัด', type:'ถอน', balance:450000, status:'active' },
  { id:4, bank:'กรุงไทย', account:'777-8-90123-4', name:'บริษัท หวยออนไลน์ จำกัด', type:'ฝาก', balance:320000, status:'inactive' },
];

// ===== Helpers =====
function formatMoney(n) {
  return '฿ ' + Number(n).toLocaleString('th-TH');
}

function statusBadge(status) {
  const map = {
    success: '<span class="badge bg-emerald-100 text-emerald-700">สำเร็จ</span>',
    pending: '<span class="badge bg-amber-100 text-amber-700">รอดำเนินการ</span>',
    rejected: '<span class="badge bg-red-100 text-red-700">ปฏิเสธ</span>',
    active: '<span class="badge bg-emerald-100 text-emerald-700">ใช้งาน</span>',
    banned: '<span class="badge bg-red-100 text-red-700">ระงับ</span>',
    inactive: '<span class="badge bg-slate-100 text-slate-500">ปิดใช้</span>',
  };
  return map[status] || status;
}

function typeBadge(type) {
  if (type === 'deposit') return '<span class="badge bg-emerald-100 text-emerald-700">ฝาก</span>';
  if (type === 'withdraw') return '<span class="badge bg-red-100 text-red-700">ถอน</span>';
  if (type === 'add') return '<span class="badge bg-blue-100 text-blue-700">+ เพิ่ม</span>';
  if (type === 'sub') return '<span class="badge bg-orange-100 text-orange-700">− ลด</span>';
  return type;
}

function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  const icon = toast.querySelector('i');
  document.getElementById('toastMsg').textContent = msg;
  icon.className = isError ? 'fas fa-exclamation-circle text-red-400' : 'fas fa-check-circle text-emerald-400';
  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
  toast.classList.add('opacity-100');
  setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 2800);
}

function openModal(title, html) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('modal').classList.add('flex');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('modal').classList.remove('flex');
}

// ===== Navigation =====
const pageTitles = {
  dashboard: 'แดชบอร์ด',
  transactions: 'รายการฝาก-ถอนทั้งหมด',
  'adjust-credit': 'ปรับเครดิตให้ลูกค้า',
  'pending-withdraw': 'ถอนติดดำเนินการ',
  'completed-slips': 'สลิปที่ถอนแล้วทั้งหมด',
  register: 'สมัครสมาชิก',
  members: 'ข้อมูลสมาชิก',
  accounts: 'บัญชีทั้งหมด',
};

function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  const link = document.querySelector(`.sidebar-link[data-page="${page}"]`);
  if (link) link.classList.add('active');
  document.getElementById('pageTitle').textContent = pageTitles[page] || page;

  // re-render if needed
  if (page === 'transactions') renderTransactions();
  if (page === 'pending-withdraw') renderPendingWithdraw();
  if (page === 'completed-slips') renderSlips();
  if (page === 'members') renderMembers();
  if (page === 'accounts') renderAccounts();
  if (page === 'adjust-credit') renderCreditHistory();
  if (page === 'dashboard') renderDashboard();
}

document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigate(link.dataset.page);
  });
});

// ===== Render functions =====
function renderDashboard() {
  const recent = transactions.slice(0, 5);
  document.getElementById('recentTxBody').innerHTML = recent.map(t => `
    <tr class="border-t border-slate-50 hover:bg-slate-50">
      <td class="px-5 py-3 text-slate-500">${t.time.split(' ')[1]}</td>
      <td class="px-5 py-3 font-medium">${t.user}</td>
      <td class="px-5 py-3">${typeBadge(t.type)}</td>
      <td class="px-5 py-3 text-right font-medium ${t.type==='deposit'?'text-emerald-600':'text-red-600'}">${formatMoney(t.amount)}</td>
      <td class="px-5 py-3 text-center">${statusBadge(t.status)}</td>
    </tr>
  `).join('');

  document.getElementById('urgentWithdrawBody').innerHTML = pendingWithdraws.slice(0,4).map(w => `
    <tr class="border-t border-slate-50 hover:bg-slate-50">
      <td class="px-5 py-3 font-medium">${w.user}</td>
      <td class="px-5 py-3 text-right font-medium text-red-600">${formatMoney(w.amount)}</td>
      <td class="px-5 py-3">${w.bank}</td>
      <td class="px-5 py-3 text-center">
        <button onclick="approveWithdraw(${w.id})" class="text-emerald-600 hover:text-emerald-800 mx-1" title="อนุมัติ"><i class="fas fa-check"></i></button>
        <button onclick="rejectWithdraw(${w.id})" class="text-red-500 hover:text-red-700 mx-1" title="ปฏิเสธ"><i class="fas fa-times"></i></button>
      </td>
    </tr>
  `).join('');
}

function renderTransactions() {
  const type = document.getElementById('txFilterType')?.value || '';
  const status = document.getElementById('txFilterStatus')?.value || '';
  const search = (document.getElementById('txSearch')?.value || '').toLowerCase();

  let list = transactions.filter(t => {
    if (type && t.type !== type) return false;
    if (status && t.status !== status) return false;
    if (search && !t.user.toLowerCase().includes(search) && !t.ref.toLowerCase().includes(search)) return false;
    return true;
  });

  document.getElementById('txTableBody').innerHTML = list.map((t,i) => `
    <tr class="border-t border-slate-50 hover:bg-slate-50">
      <td class="px-5 py-3 text-slate-400">${i+1}</td>
      <td class="px-5 py-3 text-slate-500 whitespace-nowrap">${t.time}</td>
      <td class="px-5 py-3 font-medium">${t.user}</td>
      <td class="px-5 py-3">${typeBadge(t.type)}</td>
      <td class="px-5 py-3 text-right font-medium ${t.type==='deposit'?'text-emerald-600':'text-red-600'}">${formatMoney(t.amount)}</td>
      <td class="px-5 py-3">${t.bank}</td>
      <td class="px-5 py-3 text-slate-500 font-mono text-xs">${t.ref}</td>
      <td class="px-5 py-3 text-center">${statusBadge(t.status)}</td>
      <td class="px-5 py-3 text-center">
        <button onclick="viewTx(${t.id})" class="text-blue-600 hover:text-blue-800" title="ดูรายละเอียด"><i class="fas fa-eye"></i></button>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="9" class="px-5 py-8 text-center text-slate-400">ไม่พบรายการ</td></tr>';
}

function renderPendingWithdraw() {
  document.getElementById('pendingCount').textContent = `(${pendingWithdraws.length})`;
  document.getElementById('pendingBody').innerHTML = pendingWithdraws.map(w => `
    <tr class="border-t border-slate-50 hover:bg-slate-50">
      <td class="px-5 py-3 text-slate-500 whitespace-nowrap">${w.time}</td>
      <td class="px-5 py-3 font-medium">${w.user}</td>
      <td class="px-5 py-3 text-right font-medium text-red-600">${formatMoney(w.amount)}</td>
      <td class="px-5 py-3">${w.bank}<br><span class="text-xs text-slate-400 font-mono">${w.account}</span></td>
      <td class="px-5 py-3">${w.name}</td>
      <td class="px-5 py-3 text-center space-x-1">
        <button onclick="approveWithdraw(${w.id})" class="bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-lg">
          <i class="fas fa-check mr-1"></i>อนุมัติ
        </button>
        <button onclick="rejectWithdraw(${w.id})" class="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg">
          <i class="fas fa-times mr-1"></i>ปฏิเสธ
        </button>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="6" class="px-5 py-8 text-center text-slate-400">ไม่มีรายการรออนุมัติ</td></tr>';
}

function renderSlips() {
  const search = (document.getElementById('slipSearch')?.value || '').toLowerCase();
  let list = completedSlips.filter(s => {
    if (search && !s.user.toLowerCase().includes(search) && !s.ref.toLowerCase().includes(search)) return false;
    return true;
  });
  document.getElementById('slipsBody').innerHTML = list.map(s => `
    <tr class="border-t border-slate-50 hover:bg-slate-50">
      <td class="px-5 py-3 text-slate-500 whitespace-nowrap">${s.time}</td>
      <td class="px-5 py-3 font-medium">${s.user}</td>
      <td class="px-5 py-3 text-right font-medium text-red-600">${formatMoney(s.amount)}</td>
      <td class="px-5 py-3">${s.bank}</td>
      <td class="px-5 py-3 font-mono text-xs text-slate-500">${s.ref}</td>
      <td class="px-5 py-3">${s.by}</td>
      <td class="px-5 py-3 text-center">
        <button onclick="viewSlip(${s.id})" class="text-blue-600 hover:text-blue-800"><i class="fas fa-file-image"></i></button>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="7" class="px-5 py-8 text-center text-slate-400">ไม่พบสลิป</td></tr>';
}

function renderMembers() {
  const search = (document.getElementById('memberSearch')?.value || '').toLowerCase();
  let list = members.filter(m => {
    if (!search) return true;
    return m.username.toLowerCase().includes(search) ||
           m.fullname.toLowerCase().includes(search) ||
           m.phone.includes(search);
  });
  document.getElementById('membersBody').innerHTML = list.map(m => `
    <tr class="border-t border-slate-50 hover:bg-slate-50">
      <td class="px-5 py-3 font-medium">${m.username}</td>
      <td class="px-5 py-3">${m.fullname}</td>
      <td class="px-5 py-3">${m.phone}</td>
      <td class="px-5 py-3 text-right font-medium text-blue-600">${formatMoney(m.credit)}</td>
      <td class="px-5 py-3">${m.bank}</td>
      <td class="px-5 py-3 text-slate-500">${m.created}</td>
      <td class="px-5 py-3 text-center">${statusBadge(m.status)}</td>
      <td class="px-5 py-3 text-center space-x-2">
        <button onclick="viewMember(${m.id})" class="text-blue-600 hover:text-blue-800" title="ดู"><i class="fas fa-eye"></i></button>
        <button onclick="editCredit(${m.id})" class="text-amber-600 hover:text-amber-800" title="ปรับเครดิต"><i class="fas fa-coins"></i></button>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="8" class="px-5 py-8 text-center text-slate-400">ไม่พบสมาชิก</td></tr>';
}

function renderAccounts() {
  document.getElementById('accountsBody').innerHTML = systemAccounts.map(a => `
    <tr class="border-t border-slate-50 hover:bg-slate-50">
      <td class="px-5 py-3 font-medium">${a.bank}</td>
      <td class="px-5 py-3 font-mono text-sm">${a.account}</td>
      <td class="px-5 py-3">${a.name}</td>
      <td class="px-5 py-3">${a.type === 'ฝาก' ? '<span class="badge bg-emerald-100 text-emerald-700">ฝาก</span>' : '<span class="badge bg-red-100 text-red-700">ถอน</span>'}</td>
      <td class="px-5 py-3 text-right font-medium">${formatMoney(a.balance)}</td>
      <td class="px-5 py-3 text-center">${statusBadge(a.status)}</td>
      <td class="px-5 py-3 text-center">
        <button class="text-blue-600 hover:text-blue-800 mx-1" title="แก้ไข"><i class="fas fa-edit"></i></button>
        <button class="text-slate-400 hover:text-red-600 mx-1" title="ปิดใช้"><i class="fas fa-ban"></i></button>
      </td>
    </tr>
  `).join('');
}

function renderCreditHistory() {
  document.getElementById('creditHistoryBody').innerHTML = creditHistory.map(c => `
    <tr class="border-t border-slate-50 hover:bg-slate-50">
      <td class="px-5 py-3 text-slate-500 whitespace-nowrap">${c.time}</td>
      <td class="px-5 py-3 font-medium">${c.user}</td>
      <td class="px-5 py-3">${typeBadge(c.type)}</td>
      <td class="px-5 py-3 text-right font-medium ${c.type==='add'?'text-emerald-600':'text-red-600'}">${formatMoney(c.amount)}</td>
      <td class="px-5 py-3">${c.by}</td>
      <td class="px-5 py-3 text-slate-500">${c.note}</td>
    </tr>
  `).join('');
}

// ===== Actions =====
function approveWithdraw(id) {
  const idx = pendingWithdraws.findIndex(w => w.id === id);
  if (idx === -1) return;
  const w = pendingWithdraws.splice(idx, 1)[0];
  completedSlips.unshift({
    id: Date.now(),
    time: new Date().toISOString().slice(0,16).replace('T',' '),
    user: w.user,
    amount: w.amount,
    bank: w.bank,
    ref: 'WD' + Date.now().toString().slice(-10),
    by: 'Admin'
  });
  showToast(`อนุมัติถอน ${w.user} จำนวน ${formatMoney(w.amount)} เรียบร้อย`);
  renderPendingWithdraw();
  renderDashboard();
}

function rejectWithdraw(id) {
  const idx = pendingWithdraws.findIndex(w => w.id === id);
  if (idx === -1) return;
  const w = pendingWithdraws.splice(idx, 1)[0];
  showToast(`ปฏิเสธรายการถอนของ ${w.user}`, true);
  renderPendingWithdraw();
  renderDashboard();
}

function viewTx(id) {
  const t = transactions.find(x => x.id === id);
  if (!t) return;
  openModal('รายละเอียดรายการ', `
    <p><span class="text-slate-500">เลขอ้างอิง:</span> <span class="font-mono">${t.ref}</span></p>
    <p><span class="text-slate-500">เวลา:</span> ${t.time}</p>
    <p><span class="text-slate-500">ยูสเซอร์:</span> <strong>${t.user}</strong></p>
    <p><span class="text-slate-500">ประเภท:</span> ${typeBadge(t.type)}</p>
    <p><span class="text-slate-500">จำนวน:</span> <strong class="${t.type==='deposit'?'text-emerald-600':'text-red-600'}">${formatMoney(t.amount)}</strong></p>
    <p><span class="text-slate-500">ธนาคาร:</span> ${t.bank}</p>
    <p><span class="text-slate-500">สถานะ:</span> ${statusBadge(t.status)}</p>
  `);
}

function viewSlip(id) {
  const s = completedSlips.find(x => x.id === id);
  if (!s) return;
  openModal('สลิปถอนเงิน', `
    <div class="bg-slate-50 rounded-xl p-4 text-center mb-3">
      <i class="fas fa-file-invoice text-4xl text-slate-300 mb-2"></i>
      <p class="text-xs text-slate-400">สลิปตัวอย่าง (Mock)</p>
    </div>
    <p><span class="text-slate-500">เลขอ้างอิง:</span> <span class="font-mono">${s.ref}</span></p>
    <p><span class="text-slate-500">ยูสเซอร์:</span> <strong>${s.user}</strong></p>
    <p><span class="text-slate-500">จำนวน:</span> <strong class="text-red-600">${formatMoney(s.amount)}</strong></p>
    <p><span class="text-slate-500">ธนาคาร:</span> ${s.bank}</p>
    <p><span class="text-slate-500">อนุมัติโดย:</span> ${s.by}</p>
    <p><span class="text-slate-500">เวลา:</span> ${s.time}</p>
  `);
}

function viewMember(id) {
  const m = members.find(x => x.id === id);
  if (!m) return;
  openModal('ข้อมูลสมาชิก', `
    <p><span class="text-slate-500">ยูสเซอร์:</span> <strong>${m.username}</strong></p>
    <p><span class="text-slate-500">ชื่อ-นามสกุล:</span> ${m.fullname}</p>
    <p><span class="text-slate-500">เบอร์โทร:</span> ${m.phone}</p>
    <p><span class="text-slate-500">เครดิต:</span> <strong class="text-blue-600">${formatMoney(m.credit)}</strong></p>
    <p><span class="text-slate-500">ธนาคาร:</span> ${m.bank}</p>
    <p><span class="text-slate-500">เลขบัญชี:</span> <span class="font-mono">${m.account}</span></p>
    <p><span class="text-slate-500">วันที่สมัคร:</span> ${m.created}</p>
    <p><span class="text-slate-500">สถานะ:</span> ${statusBadge(m.status)}</p>
  `);
}

function editCredit(id) {
  const m = members.find(x => x.id === id);
  if (!m) return;
  navigate('adjust-credit');
  setTimeout(() => {
    document.getElementById('creditUser').value = m.username;
  }, 100);
}

function openAddAccountModal() {
  openModal('เพิ่มบัญชีใหม่', `
    <p class="text-slate-500 text-center py-6">ฟีเจอร์เพิ่มบัญชี (Mock) — สามารถเชื่อมต่อ Backend ได้ภายหลัง</p>
  `);
}

// ===== Forms =====
document.getElementById('creditForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const user = document.getElementById('creditUser').value.trim();
  const type = document.getElementById('creditType').value;
  const amount = Number(document.getElementById('creditAmount').value);
  const note = document.getElementById('creditNote').value.trim() || '-';

  if (!user || amount <= 0) {
    showToast('กรุณากรอกข้อมูลให้ครบ', true);
    return;
  }

  const member = members.find(m => m.username === user || m.phone === user);
  if (member) {
    if (type === 'add') member.credit += amount;
    else member.credit = Math.max(0, member.credit - amount);
  }

  creditHistory.unshift({
    time: new Date().toISOString().slice(0,16).replace('T',' '),
    user: user,
    type: type,
    amount: amount,
    by: 'Admin',
    note: note
  });

  showToast(`ปรับเครดิต ${user} ${type==='add'?'+':'-'}${formatMoney(amount)} สำเร็จ`);
  e.target.reset();
  renderCreditHistory();
});

document.getElementById('registerForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('regUsername').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const fullname = document.getElementById('regFullname').value.trim() || '-';
  const bank = document.getElementById('regBank').value || '-';
  const account = document.getElementById('regAccount').value.trim() || '-';
  const credit = Number(document.getElementById('regCredit').value) || 0;

  if (members.some(m => m.username === username)) {
    showToast('ยูสเซอร์นี้มีอยู่แล้ว', true);
    return;
  }

  members.unshift({
    id: Date.now(),
    username,
    fullname,
    phone,
    credit,
    bank,
    account,
    created: new Date().toISOString().slice(0,10),
    status: 'active'
  });

  showToast(`สมัครสมาชิก ${username} สำเร็จ`);
  e.target.reset();
});

// Filters
['txFilterType','txFilterStatus','txSearch'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', renderTransactions);
});
document.getElementById('memberSearch')?.addEventListener('input', renderMembers);
document.getElementById('slipSearch')?.addEventListener('input', renderSlips);

// Date
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('th-TH', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

// Init
renderDashboard();
renderTransactions();
renderPendingWithdraw();
renderSlips();
renderMembers();
renderAccounts();
renderCreditHistory();
