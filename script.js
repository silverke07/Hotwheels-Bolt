// === Dad's Hot Wheels 2025 Collector Shop ===

const STORAGE_CART = "hw-cart-v1";
const STORAGE_WISHLIST = "hw-wishlist-v1";
const ITEMS_PER_PAGE = 12;

const SERIES_TYPES = ["Mainline", "Premium", "Treasure Hunt", "Super Treasure Hunt"];

const carsRaw = typeof buildHwCarsRaw === "function" ? buildHwCarsRaw() : [];

function enrichCar(raw, index) {
  let series = "Mainline";
  if (index % 17 === 0) series = "Super Treasure Hunt";
  else if (index % 11 === 0) series = "Treasure Hunt";
  else if (index % 5 === 0) series = "Premium";

  const year = 2023 + (index % 3);

  const id = index + 1;
  const car = {
    ...raw,
    id,
    series,
    year,
    scale: "1:64",
    condition: "Mint on card",
    inStock: index % 23 !== 0,
    featured: index < 8 || index % 17 === 0,
  };
  car.img = typeof getCarImageUrl === "function" ? getCarImageUrl(car) : raw.img;
  return car;
}

const cars = carsRaw.map(enrichCar);

let cart = loadJson(STORAGE_CART, []);
let wishlist = loadJson(STORAGE_WISHLIST, []);
let currentPage = 1;
let activeView = "home";
let searchQuery = "";

const filters = {
  brands: new Set(),
  series: new Set(),
  maxPrice: 4500,
  sort: "name-asc",
  inStockOnly: true,
  treasureOnly: false,
};

// --- Storage & utils ---

function loadJson(key, fallback) {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return Array.isArray(data) ? data : fallback;
  } catch {
    return fallback;
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_CART, JSON.stringify(cart));
  updateBadges();
}

function saveWishlist() {
  localStorage.setItem(STORAGE_WISHLIST, JSON.stringify(wishlist));
  updateBadges();
}

function formatPrice(n) {
  return `${n.toLocaleString("hu-HU")} Ft`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getCarById(id) {
  return cars.find((c) => c.id === Number(id));
}

function seriesClass(series) {
  if (series === "Super Treasure Hunt") return "badge-sth";
  if (series === "Treasure Hunt") return "badge-th";
  if (series === "Premium") return "badge-premium";
  return "badge-mainline";
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const el = document.createElement("div");
  el.className = `toast toast-${type}`;
  el.textContent = message;
  container.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 300);
  }, 2800);
}

function setActiveNav(view) {
  activeView = view;
  document.querySelectorAll(".main-nav button[data-nav]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.nav === view);
  });
}

function updateBadges() {
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("wishlist-count").textContent = wishlist.length;
}

function scrollToContent() {
  document.getElementById("content").scrollIntoView({ behavior: "smooth", block: "start" });
}

// --- Filter & search ---

function getFilteredCars() {
  let list = [...cars];

  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.brand.toLowerCase().includes(q) ||
        c.series.toLowerCase().includes(q)
    );
  }

  if (filters.brands.size) {
    list = list.filter((c) => filters.brands.has(c.brand));
  }

  if (filters.series.size) {
    list = list.filter((c) => filters.series.has(c.series));
  }

  list = list.filter((c) => c.price <= filters.maxPrice);

  if (filters.inStockOnly) {
    list = list.filter((c) => c.inStock);
  }

  if (filters.treasureOnly) {
    list = list.filter(
      (c) => c.series === "Treasure Hunt" || c.series === "Super Treasure Hunt"
    );
  }

  switch (filters.sort) {
    case "name-desc":
      list.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "brand-asc":
      list.sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name));
      break;
    default:
      list.sort((a, b) => a.name.localeCompare(b.name));
  }

  return list;
}

function handleSearchInput(value) {
  searchQuery = value;
  if (activeView === "shop") renderShop(1);
}

function handleSearchSubmit(e) {
  e.preventDefault();
  renderShop(1);
  scrollToContent();
}

function populateFilterPanel() {
  const brands = [...new Set(cars.map((c) => c.brand))].sort();
  const brandContainer = document.getElementById("filter-brands");
  brandContainer.innerHTML = brands
    .map(
      (b) => `
      <label class="chip checkbox-chip">
        <input type="checkbox" value="${escapeHtml(b)}" ${filters.brands.has(b) ? "checked" : ""}
          onchange="toggleBrandFilter('${escapeHtml(b)}', this.checked)" />
        ${escapeHtml(b)}
      </label>`
    )
    .join("");

  const seriesContainer = document.getElementById("filter-series");
  seriesContainer.innerHTML = SERIES_TYPES.map(
    (s) => `
    <label class="chip checkbox-chip">
      <input type="checkbox" value="${escapeHtml(s)}" ${filters.series.has(s) ? "checked" : ""}
        onchange="toggleSeriesFilter('${escapeHtml(s)}', this.checked)" />
      ${escapeHtml(s)}
    </label>`
  ).join("");

  document.getElementById("filter-max-price").value = filters.maxPrice;
  document.getElementById("filter-sort").value = filters.sort;
  document.getElementById("filter-in-stock").checked = filters.inStockOnly;
  document.getElementById("filter-treasure-only").checked = filters.treasureOnly;
  updatePriceLabel();
}

function toggleBrandFilter(brand, on) {
  if (on) filters.brands.add(brand);
  else filters.brands.delete(brand);
}

function toggleSeriesFilter(series, on) {
  if (on) filters.series.add(series);
  else filters.series.delete(series);
}

function updatePriceLabel() {
  const val = Number(document.getElementById("filter-max-price").value);
  filters.maxPrice = val;
  document.getElementById("filter-price-label").textContent = formatPrice(val);
}

function applyFiltersFromPanel() {
  filters.maxPrice = Number(document.getElementById("filter-max-price").value);
  filters.sort = document.getElementById("filter-sort").value;
  filters.inStockOnly = document.getElementById("filter-in-stock").checked;
  filters.treasureOnly = document.getElementById("filter-treasure-only").checked;
}

function resetFilters() {
  filters.brands.clear();
  filters.series.clear();
  filters.maxPrice = 4500;
  filters.sort = "name-asc";
  filters.inStockOnly = true;
  filters.treasureOnly = false;
  searchQuery = "";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  populateFilterPanel();
  showToast("Filters cleared");
}

function applyFiltersAndClose() {
  applyFiltersFromPanel();
  toggleFilter(false);
  renderShop(1);
  showToast("Filters applied");
}

function toggleFilter(forceOpen) {
  const popup = document.getElementById("filter-popup");
  const open = typeof forceOpen === "boolean" ? forceOpen : popup.hidden;
  popup.hidden = !open;
  if (open) {
    populateFilterPanel();
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

// --- Cart & wishlist ---

function isInWishlist(id) {
  return wishlist.includes(id);
}

function toggleWishlist(id) {
  const numId = Number(id);
  if (isInWishlist(numId)) {
    wishlist = wishlist.filter((w) => w !== numId);
    showToast("Removed from wishlist", "info");
  } else {
    wishlist.push(numId);
    showToast("Added to wishlist ♥");
  }
  saveWishlist();
  refreshCurrentView();
}

function addToCart(id, qty = 1, silent = false) {
  const car = getCarById(id);
  if (!car) return false;
  if (!car.inStock) {
    if (!silent) showToast("Sorry — out of stock", "error");
    return false;
  }

  const existing = cart.find((item) => item.id === car.id);
  if (existing) existing.qty += qty;
  else cart.push({ id: car.id, qty });

  saveCart();
  if (!silent) showToast(`${car.name} added to cart`);
  return true;
}

function updateCartQty(id, delta) {
  const item = cart.find((i) => i.id === Number(id));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== Number(id));
    showToast("Item removed from cart", "info");
  }
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== Number(id));
  saveCart();
  showToast("Removed from cart", "info");
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  showToast("Cart cleared", "info");
  renderCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const car = getCarById(item.id);
    return sum + (car ? car.price * item.qty : 0);
  }, 0);
}

function copyOrderSummary() {
  if (!cart.length) {
    showToast("Cart is empty", "error");
    return;
  }

  const lines = cart.map((item) => {
    const car = getCarById(item.id);
    return `• ${car.name} × ${item.qty} — ${formatPrice(car.price * item.qty)}`;
  });

  const text = [
    "Hot Wheels order request",
    "========================",
    ...lines,
    "",
    `Total: ${formatPrice(getCartTotal())}`,
    "",
    "Please confirm availability. Thank you!",
  ].join("\n");

  navigator.clipboard
    .writeText(text)
    .then(() => showToast("Order summary copied — send it to Dad!"))
    .catch(() => showToast("Could not copy — select cart items manually", "error"));
}

// --- Product card & modal ---

function renderProductCard(car) {
  const wished = isInWishlist(car.id);
  const inCart = cart.some((i) => i.id === car.id);

  return `
    <article class="card" data-id="${car.id}">
      <div class="card-media">
        <img src="${car.img}" alt="${escapeHtml(car.name)}" loading="lazy" decoding="async" />
        <span class="series-badge ${seriesClass(car.series)}">${escapeHtml(car.series)}</span>
        ${!car.inStock ? '<span class="stock-badge out">Sold out</span>' : ""}
        <button type="button" class="wish-btn ${wished ? "active" : ""}"
          aria-label="${wished ? "Remove from wishlist" : "Add to wishlist"}"
          onclick="toggleWishlist(${car.id})">${wished ? "♥" : "♡"}</button>
      </div>
      <div class="card-body">
        <h3>${escapeHtml(car.name)}</h3>
        <div class="meta">
          <span>${escapeHtml(car.brand)}</span>
          <span class="price">${formatPrice(car.price)}</span>
        </div>
        <p class="card-detail">${escapeHtml(car.scale)} · ${car.year} · ${escapeHtml(car.condition)}</p>
        <div class="actions">
          <button type="button" class="btn btn-ghost" onclick="openProductModal(${car.id})">Details</button>
          <button type="button" class="btn btn-primary ${inCart ? "in-cart" : ""}"
            ${car.inStock ? "" : "disabled"}
            onclick="addToCart(${car.id})">
            ${inCart ? "Add more" : "Add to cart"}
          </button>
        </div>
      </div>
    </article>`;
}

function openProductModal(id) {
  const car = getCarById(id);
  if (!car) return;

  const body = document.getElementById("product-modal-body");
  body.innerHTML = `
    <div class="modal-grid">
      <img src="${car.img}" alt="${escapeHtml(car.name)}" class="modal-img" />
      <div class="modal-info">
        <span class="series-badge ${seriesClass(car.series)}">${escapeHtml(car.series)}</span>
        <h2 id="modal-title">${escapeHtml(car.name)}</h2>
        <p class="modal-price">${formatPrice(car.price)}</p>
        <ul class="spec-list">
          <li><strong>Brand</strong> ${escapeHtml(car.brand)}</li>
          <li><strong>Year</strong> ${car.year}</li>
          <li><strong>Scale</strong> ${escapeHtml(car.scale)}</li>
          <li><strong>Condition</strong> ${escapeHtml(car.condition)}</li>
          <li><strong>Availability</strong> ${car.inStock ? "In stock" : "Out of stock"}</li>
        </ul>
        <p class="modal-note">Collector-grade listing from Dad's personal inventory. Message to reserve before it's gone.</p>
        <div class="actions">
          <button type="button" class="btn btn-ghost" onclick="toggleWishlist(${car.id}); openProductModal(${car.id})">
            ${isInWishlist(car.id) ? "♥ On wishlist" : "♡ Add to wishlist"}
          </button>
          <button type="button" class="btn btn-primary" ${car.inStock ? "" : "disabled"}
            onclick="addToCart(${car.id}); closeProductModal()">Add to cart</button>
        </div>
      </div>
    </div>`;

  const modal = document.getElementById("product-modal");
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  document.getElementById("product-modal").hidden = true;
  if (document.getElementById("filter-popup").hidden) {
    document.body.classList.remove("modal-open");
  }
}

// --- Views ---

function refreshCurrentView() {
  if (activeView === "home") renderHome();
  else if (activeView === "shop") renderShop(currentPage);
  else if (activeView === "cart") renderCart();
  else if (activeView === "wishlist") renderWishlist();
}

function renderHome() {
  setActiveNav("home");
  const content = document.getElementById("content");
  const featured = cars.filter((c) => c.featured && c.inStock).slice(0, 6);
  const thCount = cars.filter((c) => c.series.includes("Treasure")).length;

  content.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Welcome to the garage</p>
        <h1>Dad's Hot Wheels Shop</h1>
        <p class="lead">
          ${cars.length} die-cast legends — from Mainline haulers to Treasure Hunts.
          Browse, wishlist your grails, and build a cart to send Dad your picks.
        </p>
        <div class="hero-stats">
          <div class="stat"><strong>${cars.length}</strong><span>Cars listed</span></div>
          <div class="stat"><strong>${thCount}</strong><span>TH &amp; STH</span></div>
          <div class="stat"><strong>${[...new Set(cars.map((c) => c.brand))].length}</strong><span>Brands</span></div>
        </div>
        <div class="hero-actions">
          <button type="button" class="btn btn-primary" onclick="renderShop(1)">Shop all cars</button>
          <button type="button" class="btn btn-ghost" onclick="toggleFilter(true)">Filter collection</button>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="track-loop"></div>
        <span class="hero-car">🏎️</span>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Featured this week</h2>
        <button type="button" class="link-btn" onclick="renderShop(1)">View all →</button>
      </div>
      <div class="products">${featured.map(renderProductCard).join("")}</div>
    </section>

    <section class="info-grid">
      <article class="info-card">
        <h3>🎁 Gift-ready</h3>
        <p>Build a cart and copy an order summary to surprise Dad or ask which ones he'd trade.</p>
      </article>
      <article class="info-card">
        <h3>♥ Wishlist</h3>
        <p>Save dream cars without buying yet — perfect for birthday and holiday lists.</p>
      </article>
      <article class="info-card">
        <h3>🔍 Smart filters</h3>
        <p>Filter by brand, series, price, and Treasure Hunt status to hunt faster.</p>
      </article>
      <article class="info-card">
        <h3>📦 Collector details</h3>
        <p>Every listing shows scale, year, condition, and series badge on the card.</p>
      </article>
    </section>
  `;
}

function renderShop(page = 1) {
  setActiveNav("shop");
  currentPage = page;
  const content = document.getElementById("content");
  const filtered = getFilteredCars();
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  currentPage = Math.min(Math.max(1, page), totalPages);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageCars = filtered.slice(start, start + ITEMS_PER_PAGE);

  content.innerHTML = `
    <section class="shop-header">
      <div>
        <h1>Shop</h1>
        <p class="shop-meta">${filtered.length} car${filtered.length === 1 ? "" : "s"} found
          ${searchQuery ? ` · search: “${escapeHtml(searchQuery)}”` : ""}</p>
      </div>
      <div class="shop-toolbar">
        <button type="button" class="btn btn-ghost" onclick="toggleFilter(true)">Filters</button>
        <select class="sort-select" onchange="filters.sort=this.value; renderShop(1)">
          <option value="name-asc" ${filters.sort === "name-asc" ? "selected" : ""}>Name A → Z</option>
          <option value="name-desc" ${filters.sort === "name-desc" ? "selected" : ""}>Name Z → A</option>
          <option value="price-asc" ${filters.sort === "price-asc" ? "selected" : ""}>Price ↑</option>
          <option value="price-desc" ${filters.sort === "price-desc" ? "selected" : ""}>Price ↓</option>
          <option value="brand-asc" ${filters.sort === "brand-asc" ? "selected" : ""}>Brand</option>
        </select>
      </div>
    </section>
    ${
      pageCars.length
        ? `<div class="products">${pageCars.map(renderProductCard).join("")}</div>`
        : `<div class="empty"><p>No cars match your filters.</p><button type="button" class="btn btn-primary" onclick="resetFilters(); renderShop(1)">Reset filters</button></div>`
    }
    ${renderPaginationHtml(filtered.length, totalPages)}
  `;
  scrollToContent();
}

function renderPaginationHtml(totalItems, totalPages) {
  if (totalPages <= 1) return "";

  let buttons = "";
  const addBtn = (label, page, disabled = false, current = false) => {
    buttons += `<button type="button" class="page-btn ${current ? "current" : ""}"
      ${disabled ? "disabled" : ""} onclick="renderShop(${page})">${label}</button>`;
  };

  addBtn("‹", currentPage - 1, currentPage === 1);

  const windowSize = 5;
  let start = Math.max(1, currentPage - Math.floor(windowSize / 2));
  let end = Math.min(totalPages, start + windowSize - 1);
  start = Math.max(1, end - windowSize + 1);

  for (let i = start; i <= end; i++) {
    addBtn(String(i), i, false, i === currentPage);
  }

  addBtn("›", currentPage + 1, currentPage === totalPages);

  return `<nav class="pagination" aria-label="Pagination">${buttons}</nav>`;
}

function renderCart() {
  setActiveNav("cart");
  const content = document.getElementById("content");

  if (!cart.length) {
    content.innerHTML = `
      <div class="empty page-empty">
        <p>Your cart is empty.</p>
        <button type="button" class="btn btn-primary" onclick="renderShop(1)">Start shopping</button>
      </div>`;
    return;
  }

  const rows = cart
    .map((item) => {
      const car = getCarById(item.id);
      if (!car) return "";
      const lineTotal = car.price * item.qty;
      return `
        <div class="cart-row">
          <img src="${car.img}" alt="" class="cart-thumb" />
          <div class="cart-info">
            <strong>${escapeHtml(car.name)}</strong>
            <span class="muted">${escapeHtml(car.brand)} · ${formatPrice(car.price)} each</span>
          </div>
          <div class="qty-controls">
            <button type="button" aria-label="Decrease quantity" onclick="updateCartQty(${car.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button type="button" aria-label="Increase quantity" onclick="updateCartQty(${car.id}, 1)">+</button>
          </div>
          <div class="cart-line-total">${formatPrice(lineTotal)}</div>
          <button type="button" class="icon-btn" aria-label="Remove" onclick="removeFromCart(${car.id})">✕</button>
        </div>`;
    })
    .join("");

  const total = getCartTotal();
  const itemCount = cart.reduce((s, i) => s + i.qty, 0);

  content.innerHTML = `
    <section class="cart-page">
      <h1>Your cart</h1>
      <p class="shop-meta">${itemCount} item${itemCount === 1 ? "" : "s"}</p>
      <div class="cart-list">${rows}</div>
      <aside class="cart-summary">
        <h2>Order summary</h2>
        <div class="summary-row"><span>Subtotal</span><strong>${formatPrice(total)}</strong></div>
        <p class="summary-note">Demo checkout — copy your list and ask Dad to confirm stock &amp; pickup.</p>
        <button type="button" class="btn btn-primary full" onclick="copyOrderSummary()">Copy order for Dad</button>
        <button type="button" class="btn btn-ghost full" onclick="clearCart()">Clear cart</button>
        <button type="button" class="btn btn-ghost full" onclick="renderShop(1)">Continue shopping</button>
      </aside>
    </section>`;
}

function renderWishlist() {
  setActiveNav("wishlist");
  const content = document.getElementById("content");
  const items = wishlist.map(getCarById).filter(Boolean);

  if (!items.length) {
    content.innerHTML = `
      <div class="empty page-empty">
        <p>No cars on your wishlist yet.</p>
        <button type="button" class="btn btn-primary" onclick="renderShop(1)">Browse shop</button>
      </div>`;
    return;
  }

  content.innerHTML = `
    <section>
      <h1>Wishlist</h1>
      <p class="shop-meta">${items.length} saved car${items.length === 1 ? "" : "s"}</p>
      <div class="products">${items.map(renderProductCard).join("")}</div>
      <div class="wishlist-actions">
        <button type="button" class="btn btn-primary" onclick="addAllWishlistToCart()">Add all in-stock to cart</button>
        <button type="button" class="btn btn-ghost" onclick="clearWishlist()">Clear wishlist</button>
      </div>
    </section>`;
}

function addAllWishlistToCart() {
  let added = 0;
  wishlist.forEach((id) => {
    if (addToCart(id, 1, true)) added++;
  });
  if (added) showToast(`Added ${added} cars to cart`);
  else showToast("No in-stock items to add", "error");
}

function clearWishlist() {
  wishlist = [];
  saveWishlist();
  showToast("Wishlist cleared", "info");
  renderWishlist();
}

function toggleMobileNav() {
  const nav = document.getElementById("main-nav");
  const toggle = document.getElementById("nav-toggle");
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
}

// Close modals on backdrop click / Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggleFilter(false);
    closeProductModal();
  }
});

document.getElementById("filter-popup").addEventListener("click", (e) => {
  if (e.target.id === "filter-popup") toggleFilter(false);
});

document.getElementById("product-modal").addEventListener("click", (e) => {
  if (e.target.id === "product-modal") closeProductModal();
});

// --- Init ---
document.getElementById("year").textContent = new Date().getFullYear();
updateBadges();
renderHome();
