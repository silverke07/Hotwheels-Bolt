// =====================
// Hot Wheels 2025 — Site Logic & Data
// =====================

// ---------- PRODUCTS (54 items) ----------
const PRODUCTS = [
  {id:1, name:"2025 Camaro SS", brand:"Chevrolet", year:2025, price:2499, image:"https://picsum.photos/seed/camaro/400/300"},
  {id:2, name:"2025 Mustang GT", brand:"Ford", year:2025, price:2599, image:"https://picsum.photos/seed/mustang/400/300"},
  {id:3, name:"2025 GT-R R35", brand:"Nissan", year:2025, price:2899, image:"https://picsum.photos/seed/gtr/400/300"},
  {id:4, name:"2025 Aventador Ultimae", brand:"Lamborghini", year:2025, price:3499, image:"https://picsum.photos/seed/aventador/400/300"},
  {id:5, name:"2025 911 GT3 RS", brand:"Porsche", year:2025, price:3299, image:"https://picsum.photos/seed/911/400/300"},
  {id:6, name:"2025 M4 CSL", brand:"BMW", year:2025, price:2999, image:"https://picsum.photos/seed/m4/400/300"},
  {id:7, name:"2025 Supra MK5", brand:"Toyota", year:2025, price:2699, image:"https://picsum.photos/seed/supra/400/300"},
  {id:8, name:"2025 P1 GTR", brand:"McLaren", year:2025, price:3799, image:"https://picsum.photos/seed/p1/400/300"},
  {id:9, name:"2025 SF90 Stradale", brand:"Ferrari", year:2025, price:3599, image:"https://picsum.photos/seed/sf90/400/300"},
  {id:10, name:"2025 Chiron Super Sport", brand:"Bugatti", year:2025, price:4199, image:"https://picsum.photos/seed/chiron/400/300"},
  {id:11, name:"2025 Huracán STO", brand:"Lamborghini", year:2025, price:3799, image:"https://picsum.photos/seed/huracan/400/300"},
  {id:12, name:"2025 RS7", brand:"Audi", year:2025, price:3099, image:"https://picsum.photos/seed/rs7/400/300"},
  {id:13, name:"2025 Corvette Z06", brand:"Chevrolet", year:2025, price:3399, image:"https://picsum.photos/seed/corvette/400/300"},
  {id:14, name:"2025 Charger SRT", brand:"Dodge", year:2025, price:3199, image:"https://picsum.photos/seed/charger/400/300"},
  {id:15, name:"2025 488 GTB", brand:"Ferrari", year:2025, price:4499, image:"https://picsum.photos/seed/488/400/300"},
  {id:16, name:"2025 Countach", brand:"Lamborghini", year:2025, price:4299, image:"https://picsum.photos/seed/countach/400/300"},
  {id:17, name:"2025 McLaren F1", brand:"McLaren", year:2025, price:4599, image:"https://picsum.photos/seed/f1/400/300"},
  {id:18, name:"2025 Veyron", brand:"Bugatti", year:2025, price:4799, image:"https://picsum.photos/seed/veyron/400/300"},
  {id:19, name:"2025 Audi R8", brand:"Audi", year:2025, price:4099, image:"https://picsum.photos/seed/r8/400/300"},
  {id:20, name:"2025 350Z", brand:"Nissan", year:2025, price:3799, image:"https://picsum.photos/seed/350z/400/300"},
  {id:21, name:"2025 Camaro ZL1", brand:"Chevrolet", year:2025, price:4199, image:"https://picsum.photos/seed/zl1/400/300"},
  {id:22, name:"2025 Viper ACR", brand:"Dodge", year:2025, price:4299, image:"https://picsum.photos/seed/viper/400/300"},
  {id:23, name:"2025 Toyota Corolla Levin AE86", brand:"Toyota", year:2025, price:2399, image:"https://picsum.photos/seed/ae86/400/300"},
  {id:24, name:"2025 Nissan 350Z Track", brand:"Nissan", year:2025, price:3799, image:"https://picsum.photos/seed/350z2/400/300"},
  {id:25, name:"2025 Porsche 917K", brand:"Porsche", year:2025, price:4199, image:"https://picsum.photos/seed/917k/400/300"},
  {id:26, name:"2025 BMW Z4", brand:"BMW", year:2025, price:3599, image:"https://picsum.photos/seed/z4/400/300"},
  {id:27, name:"2025 Mercedes-AMG GT", brand:"Mercedes", year:2025, price:4399, image:"https://picsum.photos/seed/amggt/400/300"},
  {id:28, name:"2025 Ford GT", brand:"Ford", year:2025, price:4599, image:"https://picsum.photos/seed/fordgt/400/300"},
  {id:29, name:"2025 Jaguar F-Type", brand:"Jaguar", year:2025, price:4199, image:"https://picsum.photos/seed/jaguar/400/300"},
  {id:30, name:"2025 Aston Martin Vantage", brand:"Aston Martin", year:2025, price:4299, image:"https://picsum.photos/seed/vantage/400/300"},
  {id:31, name:"2025 WRX STI", brand:"Subaru", year:2025, price:3799, image:"https://picsum.photos/seed/wrx/400/300"},
  {id:32, name:"2025 Lancer Evolution X", brand:"Mitsubishi", year:2025, price:3999, image:"https://picsum.photos/seed/evolution/400/300"},
  {id:33, name:"2025 Hyundai Veloster N", brand:"Hyundai", year:2025, price:3599, image:"https://picsum.photos/seed/veloster/400/300"},
  {id:34, name:"2025 Golf R", brand:"Volkswagen", year:2025, price:3799, image:"https://picsum.photos/seed/golfr/400/300"},
  {id:35, name:"2025 Kia Stinger GT", brand:"Kia", year:2025, price:3999, image:"https://picsum.photos/seed/stinger/400/300"},
  {id:36, name:"2025 Lamborghini Sian", brand:"Lamborghini", year:2025, price:4999, image:"https://picsum.photos/seed/sian/400/300"},
  {id:37, name:"2025 Ferrari LaFerrari", brand:"Ferrari", year:2025, price:4999, image:"https://picsum.photos/seed/laferrari/400/300"},
  {id:38, name:"2025 Pagani Huayra", brand:"Pagani", year:2025, price:5499, image:"https://picsum.photos/seed/huayra/400/300"},
  {id:39, name:"2025 Lotus Evija", brand:"Lotus", year:2025, price:4799, image:"https://picsum.photos/seed/evija/400/300"},
  {id:40, name:"2025 Alfa Romeo Giulia", brand:"Alfa Romeo", year:2025, price:3699, image:"https://picsum.photos/seed/giulia/400/300"},
  {id:41, name:"2025 Tesla Roadster (concept)", brand:"Tesla", year:2025, price:4599, image:"https://picsum.photos/seed/roadster/400/300"},
  {id:42, name:"2025 Honda NSX", brand:"Honda", year:2025, price:3899, image:"https://picsum.photos/seed/nsx/400/300"},
  {id:43, name:"2025 Acura Integra Type R", brand:"Acura", year:2025, price:3299, image:"https://picsum.photos/seed/integra/400/300"},
  {id:44, name:"2025 Mercedes-Maybach S", brand:"Mercedes", year:2025, price:5999, image:"https://picsum.photos/seed/maybach/400/300"},
  {id:45, name:"2025 BMW i8 Concept", brand:"BMW", year:2025, price:4599, image:"https://picsum.photos/seed/i8/400/300"},
  {id:46, name:"2025 Ford Mustang Mach 1", brand:"Ford", year:2025, price:2799, image:"https://picsum.photos/seed/mach1/400/300"},
  {id:47, name:"2025 Dodge Challenger Hellcat", brand:"Dodge", year:2025, price:3399, image:"https://picsum.photos/seed/challenger/400/300"},
  {id:48, name:"2025 Shelby GT500", brand:"Ford", year:2025, price:3499, image:"https://picsum.photos/seed/gt500/400/300"},
  {id:49, name:"2025 Nissan Silvia S15", brand:"Nissan", year:2025, price:2999, image:"https://picsum.photos/seed/s15/400/300"},
  {id:50, name:"2025 Toyota AE86 Trueno", brand:"Toyota", year:2025, price:2499, image:"https://picsum.photos/seed/trueno/400/300"},
  {id:51, name:"2025 Mini Cooper JCW", brand:"Mini", year:2025, price:2599, image:"https://picsum.photos/seed/minicooper/400/300"},
  {id:52, name:"2025 Renault R5 Turbo", brand:"Renault", year:2025, price:2899, image:"https://picsum.photos/seed/r5/400/300"},
  {id:53, name:"2025 Peugeot 205 GTI", brand:"Peugeot", year:2025, price:2799, image:"https://picsum.photos/seed/205/400/300"},
  {id:54, name:"2025 Ford Escort RS Cosworth", brand:"Ford", year:2025, price:3299, image:"https://picsum.photos/seed/escort/400/300"}
];

// ---------- STATE ----------
const ITEMS_PER_PAGE = 15;
let currentPage = 1;
let filteredList = null; // when filters are applied

// ---------- DOM ----------
const content = document.getElementById('content');

// ---------- UTIL ----------
function formatHUF(n){ return n.toLocaleString('hu-HU') + ' HUF'; }
function updateCartCount(){
  const cart = JSON.parse(localStorage.getItem('hw_cart')||'[]');
  document.getElementById('cart-count').textContent = cart.reduce((s,i)=>s+i.qty,0);
}

// ---------- RENDER: HOME ----------
function renderHome(){
  content.innerHTML = `
    <section class="hero">
      <div>
        <h1>Hot Wheels 2025 — Collectors (Unboxed)</h1>
        <p style="color:var(--muted)">Curated 2025 lineup — prices shown in HUF. Click Shop to browse.</p>
        <div style="margin-top:12px"><button class="btn-primary" onclick="renderShop(1)">Shop 2025 Cars</button></div>
      </div>
      <div style="text-align:right;color:var(--muted)"><small>Collector theme • Unboxed display items</small></div>
    </section>
  `;
}

// ---------- RENDER: SHOP ----------
function renderShop(page=1){
  currentPage = page;
  const list = filteredList || PRODUCTS;
  const start = (page-1)*ITEMS_PER_PAGE;
  const pageItems = list.slice(start, start+ITEMS_PER_PAGE);

  content.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center">
      <h2>Shop — 2025 Models</h2>
      <div style="color:var(--muted)">Showing ${list.length} cars</div>
    </div>
    <div style="margin-top:8px">
      <input id="search" placeholder="Search name, brand or SKU (type)..." style="padding:8px;border-radius:8px;border:0;background:#111;color:#fff;width:60%" />
      <button onclick="applySearch()" style="margin-left:8px;padding:8px 12px;border-radius:8px">Search</button>
    </div>
    <div class="products"></div>
    <div id="pagination"></div>
  `;

  const container = document.querySelector('.products');
  if(pageItems.length===0){ container.innerHTML = '<div class="empty">No cars on this page.</div>'; renderPagination(); return; }

  pageItems.forEach(p=>{
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Car'">
      <h3>${p.name}</h3>
      <div class="meta"><div>${p.brand} • ${p.year}</div><div>${formatHUF(p.price)}</div></div>
      <div style="color:var(--muted);font-size:13px">SKU: HW-25-${String(p.id).padStart(3,'0')}</div>
      <div class="actions">
        <button class="btn-ghost" onclick="openQuickView(${p.id})">Quick view</button>
        <button class="btn-primary" onclick="addToCart(${p.id},1)">Add to cart</button>
      </div>
    `;
    container.appendChild(card);
  });

  renderPagination();
}

// ---------- PAGINATION ----------
function renderPagination(){
  const list = filteredList || PRODUCTS;
  const total = Math.ceil(list.length / ITEMS_PER_PAGE);
  const pag = document.getElementById('pagination');
  pag.innerHTML = '';
  const prev = document.createElement('button'); prev.textContent='Prev'; prev.onclick = ()=>{ if(currentPage>1) renderShop(currentPage-1) };
  pag.appendChild(prev);
  for(let i=1;i<=total;i++){
    const b = document.createElement('button'); b.textContent=i;
    if(i===currentPage) b.style.fontWeight='700';
    b.onclick = ()=>renderShop(i);
    pag.appendChild(b);
  }
  const next = document.createElement('button'); next.textContent='Next'; next.onclick = ()=>{ if(currentPage<total) renderShop(currentPage+1) };
  pag.appendChild(next);
}

// ---------- FILTER (popup) ----------
function toggleFilter(){
  if(document.querySelector('.filter-popup')) return showFilter();
  showFilter();
}
function showFilter(){
  const existing = document.querySelector('.filter-popup');
  if(existing){ existing.style.display = 'flex'; return; }
  const backdrop = document.createElement('div'); backdrop.className='filter-popup'; backdrop.style.display='flex';
  backdrop.innerHTML = `<div class="filter-panel">
    <h3>Filters</h3>
    <div style="margin-top:8px"><strong>Brands</strong></div>
    <div class="filter-grid" id="brand-list"></div>
    <div style="margin-top:12px"><label class="chip"><input type="checkbox" id="filter-limited"> Limited editions (example)</label></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px">
      <button id="applyFiltersBtn" class="btn-primary">Apply</button>
      <button id="closeFiltersBtn" class="btn-ghost">Close</button>
    </div>
  </div>`;
  document.body.appendChild(backdrop);

  const brands = [...new Set(PRODUCTS.map(p=>p.brand))].sort();
  const list = document.getElementById('brand-list');
  brands.forEach(b=>{
    const el = document.createElement('label'); el.className='chip';
    el.innerHTML = `<input type="checkbox" value="${b}"> ${b}`;
    list.appendChild(el);
  });

  document.getElementById('closeFiltersBtn').onclick = ()=>backdrop.style.display='none';
  document.getElementById('applyFiltersBtn').onclick = applyFilters;
}

// apply filters
function applyFilters(){
  const checked = Array.from(document.querySelectorAll('.filter-grid input:checked')).map(i=>i.value);
  const limited = document.getElementById('filter-limited')?.checked;
  filteredList = PRODUCTS.filter(p=>{
    if(checked.length && !checked.includes(p.brand)) return false;
    if(limited && !p.limited) return false; // note: limited property not set in this dataset; kept for extension
    return true;
  });
  document.querySelector('.filter-popup').style.display='none';
  currentPage = 1;
  renderShop(1);
}

// ---------- SEARCH ----------
function applySearch(){
  const q = (document.getElementById('search')?.value || '').trim().toLowerCase();
  if(!q){ filteredList = null; renderShop(1); return; }
  filteredList = PRODUCTS.filter(p=> (p.name + ' ' + p.brand + ' ' + p.year).toLowerCase().includes(q));
  renderShop(1);
}

// ---------- QUICK VIEW ----------
function openQuickView(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const modal = document.createElement('div'); modal.className='filter-popup'; modal.style.display='flex';
  modal.innerHTML = `<div class="filter-panel" style="max-width:820px">
    <div style="display:flex;gap:14px;align-items:flex-start">
      <img src="${p.image}" alt="${p.name}" style="width:320px;height:220px;object-fit:cover;border-radius:8px" onerror="this.src='https://via.placeholder.com/400x300?text=Car'">
      <div style="flex:1">
        <h2 style="margin:0">${p.name}</h2>
        <div style="color:var(--muted);margin-top:6px">${p.brand} • ${p.year} • SKU: HW-25-${String(p.id).padStart(3,'0')}</div>
        <h3 style="margin-top:12px">${formatHUF(p.price)}</h3>
        <p style="color:var(--muted);margin-top:8px">Collector edition — unboxed display model.</p>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn-primary" onclick="addToCart(${p.id},1); this.closest('.filter-popup').style.display='none'">Add to cart</button>
          <button class="btn-ghost" onclick="toggleWishlist(${p.id}); this.closest('.filter-popup').style.display='none'">${isWishlisted(p.id)?'Remove wishlist':'Add wishlist'}</button>
          <button class="btn-ghost" onclick="this.closest('.filter-popup').style.display='none'">Close</button>
        </div>
      </div>
    </div>
  </div>`;
  document.body.appendChild(modal);
  modal.onclick = (e)=>{ if(e.target===modal) modal.style.display='none' };
}

// ---------- CART ----------
function addToCart(id, qty=1){
  const prod = PRODUCTS.find(p=>p.id===id);
  if(!prod) return alert('Product not found');
  const cart = JSON.parse(localStorage.getItem('

