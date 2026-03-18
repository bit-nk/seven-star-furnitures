/* ═══════════════════════════════════════════════
   7 STAR FURNITURES — PRODUCTS LISTING PAGE
   ═══════════════════════════════════════════════ */

// ── State ──
let currentCategory = null;
let currentSub = null;
let searchQuery = '';
let priceMin = 0;
let priceMax = Infinity;
let sortBy = 'featured';

// ── Parse & validate URL params ──
const params = new URLSearchParams(window.location.search);
const allCats = getAllCategories();
const validCategoryNames = Object.keys(allCats);

const rawCat = params.get('category');
if (rawCat && validCategoryNames.includes(rawCat)) {
  currentCategory = rawCat;
}

const rawSub = params.get('sub');
if (rawSub && currentCategory && allCats[currentCategory] && allCats[currentCategory].includes(rawSub)) {
  currentSub = rawSub;
}

// ── Build category filters ──
const categories = allCats;
const filterCatsEl = document.getElementById('filterCategories');
const filterSubsEl = document.getElementById('filterSubcategories');
const filterSubGroup = document.getElementById('filterSubGroup');

function buildCategoryFilters() {
  filterCatsEl.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-chip' + (!currentCategory ? ' active' : '');
  allBtn.textContent = 'All';
  allBtn.addEventListener('click', () => { currentCategory = null; currentSub = null; updateAll(); });
  filterCatsEl.appendChild(allBtn);

  for (const cat in categories) {
    const btn = document.createElement('button');
    btn.className = 'filter-chip' + (currentCategory === cat ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => { currentCategory = cat; currentSub = null; updateAll(); });
    filterCatsEl.appendChild(btn);
  }
}

function buildSubFilters() {
  if (!currentCategory || !categories[currentCategory]) {
    filterSubGroup.style.display = 'none';
    return;
  }
  filterSubGroup.style.display = 'block';
  filterSubsEl.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-chip' + (!currentSub ? ' active' : '');
  allBtn.textContent = 'All ' + escHtml(currentCategory);
  allBtn.addEventListener('click', () => { currentSub = null; updateAll(); });
  filterSubsEl.appendChild(allBtn);

  categories[currentCategory].forEach(sub => {
    const btn = document.createElement('button');
    btn.className = 'filter-chip' + (currentSub === sub ? ' active' : '');
    btn.textContent = sub;
    btn.addEventListener('click', () => { currentSub = sub; updateAll(); });
    filterSubsEl.appendChild(btn);
  });
}

// ── Filter & Sort ──
function getFilteredProducts() {
  let filtered = [...PRODUCTS];

  if (currentCategory) filtered = filtered.filter(p => p.category === currentCategory);
  if (currentSub) filtered = filtered.filter(p => p.subcategory === currentSub);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q)
    );
  }
  if (priceMin > 0) filtered = filtered.filter(p => p.price >= priceMin);
  if (priceMax < Infinity) filtered = filtered.filter(p => p.price <= priceMax);

  const validSorts = ['featured', 'price-low', 'price-high', 'rating', 'name'];
  const safeSortBy = validSorts.includes(sortBy) ? sortBy : 'featured';

  switch (safeSortBy) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  return filtered;
}

// ── Render product card (all data escaped) ──
function renderProductCard(product) {
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const safeId = encodeURIComponent(product.id);
  const safeName = escHtml(product.name);
  const safeCat = escHtml(product.category);
  const safeSub = escHtml(product.subcategory);
  const safeBadge = product.badge ? escHtml(product.badge) : '';
  const safeImg = imgPath(product.image);

  return `
    <a href="product.html?id=${safeId}" class="product-card">
      <div class="product-card-img">
        <img src="${safeImg}" alt="${safeName}" loading="lazy" />
        ${safeBadge ? `<span class="card-badge">${safeBadge}</span>` : ''}
        ${discount > 0 ? `<span class="card-discount">-${discount}%</span>` : ''}
      </div>
      <div class="product-card-body">
        <span class="card-sub">${safeCat} · ${safeSub}</span>
        <h3 class="card-title">${safeName}</h3>
        <div class="card-rating">
          ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
          <span class="card-reviews">(${parseInt(product.reviews)})</span>
        </div>
        <div class="card-pricing">
          <span class="card-price-current">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="card-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
      </div>
    </a>
  `;
}

// ── Render grid ──
function renderGrid() {
  const products = getFilteredProducts();
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const count = document.getElementById('resultsCount');

  count.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;

  if (products.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'flex';
  } else {
    noResults.style.display = 'none';
    grid.innerHTML = products.map(renderProductCard).join('');
  }
}

// ── Update page header (safe — uses textContent for user-facing values) ──
function updateHeader() {
  const title = document.getElementById('pageTitle');
  const sub = document.getElementById('pageSub');
  const bcCat = document.getElementById('bcCategory');

  if (currentSub && currentCategory) {
    title.textContent = currentSub;
    sub.textContent = `Browse our ${currentSub.toLowerCase()} collection in ${currentCategory.toLowerCase()}.`;
    // Build breadcrumb safely with DOM methods
    bcCat.innerHTML = '';
    const a = document.createElement('a');
    a.href = `products.html?category=${encodeURIComponent(currentCategory)}`;
    a.textContent = currentCategory;
    const sep = document.createElement('span');
    sep.className = 'bc-sep';
    sep.textContent = '/';
    const span = document.createElement('span');
    span.textContent = currentSub;
    bcCat.appendChild(a);
    bcCat.appendChild(document.createTextNode(' '));
    bcCat.appendChild(sep);
    bcCat.appendChild(document.createTextNode(' '));
    bcCat.appendChild(span);
  } else if (currentCategory) {
    title.textContent = currentCategory;
    sub.textContent = `Browse our complete ${currentCategory.toLowerCase()} collection.`;
    bcCat.textContent = currentCategory;
  } else {
    title.textContent = 'All Products';
    sub.textContent = 'Browse our complete collection of premium furniture for every room in your home.';
    bcCat.textContent = 'Products';
  }
}

// ── Update all ──
function updateAll() {
  buildCategoryFilters();
  buildSubFilters();
  updateHeader();
  renderGrid();

  // Update URL without reload
  const url = new URL(window.location);
  if (currentCategory) url.searchParams.set('category', currentCategory); else url.searchParams.delete('category');
  if (currentSub) url.searchParams.set('sub', currentSub); else url.searchParams.delete('sub');
  window.history.replaceState({}, '', url);
}

// ── Event listeners ──
document.getElementById('filterSearch').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderGrid();
});

document.getElementById('filterSort').addEventListener('change', (e) => {
  sortBy = e.target.value;
  renderGrid();
});

document.getElementById('priceApply').addEventListener('click', () => {
  const min = parseInt(document.getElementById('priceMin').value) || 0;
  const max = parseInt(document.getElementById('priceMax').value) || Infinity;
  priceMin = Math.max(0, min);
  priceMax = max > 0 ? max : Infinity;
  renderGrid();
});

document.getElementById('filterClear').addEventListener('click', () => {
  currentCategory = null;
  currentSub = null;
  searchQuery = '';
  priceMin = 0;
  priceMax = Infinity;
  sortBy = 'featured';
  document.getElementById('filterSearch').value = '';
  document.getElementById('priceMin').value = '';
  document.getElementById('priceMax').value = '';
  document.getElementById('filterSort').value = 'featured';
  updateAll();
});

document.getElementById('resetFilters').addEventListener('click', () => {
  document.getElementById('filterClear').click();
});

// Mobile filter sidebar
const sidebar = document.getElementById('filtersSidebar');
document.getElementById('filterToggleMobile').addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
document.getElementById('filterCloseMobile').addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// ── Init ──
updateAll();
