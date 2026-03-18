/* ═══════════════════════════════════════════════
   7 STAR FURNITURES — PRODUCT DETAIL PAGE
   All user-facing data is escaped via escHtml()
   ═══════════════════════════════════════════════ */

// ── Get product (validate ID exists) ──
const params = new URLSearchParams(window.location.search);
const rawId = params.get('id');
// Only allow alphanumeric + hyphens in product ID
const productId = rawId ? rawId.replace(/[^a-zA-Z0-9\-]/g, '') : '';
const product = getProductById(productId);

if (!product) {
  document.getElementById('productDetail').innerHTML = `
    <div style="text-align:center; padding:4rem 2rem;">
      <h2>Product not found</h2>
      <p style="color:var(--text-2); margin:1rem 0;">The product you're looking for doesn't exist or has been removed.</p>
      <a href="products.html" class="btn btn-primary">Browse All Products</a>
    </div>`;
} else {
  renderProduct(product);
  renderRelated(product);
}

function renderProduct(p) {
  // Title (safe — textContent assignment)
  document.title = `${p.name} - 7 Star Furnitures`;

  // Breadcrumb (safe — textContent + encodeURIComponent)
  document.getElementById('bcCategory').textContent = p.category;
  document.getElementById('bcCategory').href = `products.html?category=${encodeURIComponent(p.category)}`;
  document.getElementById('bcProduct').textContent = p.name;

  // Main image
  const mainImg = document.getElementById('mainImage');
  mainImg.src = imgPath(p.images[0]);
  mainImg.alt = p.name;

  // Thumbnails — escaped alt text, sanitized image paths
  const thumbsEl = document.getElementById('galleryThumbs');
  thumbsEl.innerHTML = p.images.map((img, i) => {
    const safeImgSrc = imgPath(img);
    const safeAlt = escHtml(p.name);
    return `
      <button class="thumb ${i === 0 ? 'active' : ''}" data-img="${safeImgSrc}">
        <img src="${safeImgSrc}" alt="${safeAlt} view ${i + 1}" />
      </button>`;
  }).join('');
  thumbsEl.querySelectorAll('.thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      mainImg.src = btn.dataset.img;
      thumbsEl.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Badge (safe — textContent)
  const badgeEl = document.getElementById('productBadge');
  if (p.badge) { badgeEl.textContent = p.badge; badgeEl.style.display = 'inline-block'; }
  else badgeEl.style.display = 'none';

  // Category tag (safe — textContent)
  document.getElementById('productCatTag').textContent = `${p.category} · ${p.subcategory}`;

  // Rating (safe — only numbers + static HTML)
  const safeRating = Math.min(5, Math.max(0, Math.floor(Number(p.rating) || 0)));
  const safeReviews = parseInt(p.reviews) || 0;
  document.getElementById('productRating').innerHTML = `
    ${'★'.repeat(safeRating)}${'☆'.repeat(5 - safeRating)}
    <span>${Number(p.rating) || 0}</span>
    <span class="review-count">(${safeReviews} reviews)</span>
  `;

  // Name (safe — textContent)
  document.getElementById('productName').textContent = p.name;

  // Pricing (safe — formatPrice returns sanitized strings, discount is a number)
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  document.getElementById('productPricing').innerHTML = `
    <span class="price-main">${formatPrice(p.price)}</span>
    ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
    ${discount > 0 ? `<span class="price-discount">Save ${parseInt(discount)}%</span>` : ''}
    <span class="price-note">Inclusive of all taxes. EMI available.</span>
  `;

  // Description (safe — textContent)
  document.getElementById('productDesc').textContent = p.description;

  // Colors (escaped)
  const colorOptionsEl = document.getElementById('colorOptions');
  colorOptionsEl.innerHTML = p.colors.map((c, i) => {
    const safeColor = escHtml(c);
    return `<button class="color-chip ${i === 0 ? 'active' : ''}" data-color="${safeColor}" title="${safeColor}">${safeColor}</button>`;
  }).join('');
  colorOptionsEl.querySelectorAll('.color-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      colorOptionsEl.querySelectorAll('.color-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Stock (safe — static HTML based on boolean)
  document.getElementById('productStock').innerHTML = p.inStock
    ? '<span class="in-stock">&#10003; In Stock - Ready to ship within 3-5 business days</span>'
    : '<span class="out-of-stock">&#10007; Currently out of stock</span>';

  // Specs table (all values escaped)
  document.getElementById('specsTable').innerHTML = `
    <tr><td>Category</td><td>${escHtml(p.category)} → ${escHtml(p.subcategory)}</td></tr>
    <tr><td>Dimensions</td><td>${escHtml(p.size)}</td></tr>
    <tr><td>Weight</td><td>${escHtml(p.weight)}</td></tr>
    <tr><td>Material</td><td>${escHtml(p.material)}</td></tr>
    <tr><td>Build</td><td>${escHtml(p.build)}</td></tr>
    <tr><td>Available Colors</td><td>${escHtml(p.colors.join(', '))}</td></tr>
  `;

  // Features (escaped)
  document.getElementById('featuresList').innerHTML = p.features.map(f => `<li>${escHtml(f)}</li>`).join('');
}

// ── Quantity (validated) ──
const qtyInput = document.getElementById('qtyInput');
document.getElementById('qtyMinus').addEventListener('click', () => {
  const v = parseInt(qtyInput.value) || 1;
  if (v > 1) qtyInput.value = v - 1;
});
document.getElementById('qtyPlus').addEventListener('click', () => {
  const v = parseInt(qtyInput.value) || 1;
  if (v < 10) qtyInput.value = v + 1;
});

// ── Cart actions (demo) ──
document.getElementById('addToCart').addEventListener('click', () => {
  const btn = document.getElementById('addToCart');
  btn.textContent = '✓ Added to Cart!';
  btn.style.background = '#28c840';
  setTimeout(() => {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> Add to Cart`;
    btn.style.background = '';
  }, 2000);
});

document.getElementById('buyNow').addEventListener('click', () => {
  alert('Redirecting to checkout... (Demo)');
});

// ── Related products (escaped) ──
function renderRelated(p) {
  const related = PRODUCTS
    .filter(item => item.category === p.category && item.id !== p.id)
    .slice(0, 4);

  const grid = document.getElementById('relatedGrid');
  grid.innerHTML = related.map(item => {
    const discount = item.oldPrice ? Math.round((1 - item.price / item.oldPrice) * 100) : 0;
    const safeId = encodeURIComponent(item.id);
    const safeName = escHtml(item.name);
    const safeCat = escHtml(item.category);
    const safeSub = escHtml(item.subcategory);
    const safeBadge = item.badge ? escHtml(item.badge) : '';
    const safeImg = imgPath(item.image);

    return `
      <a href="product.html?id=${safeId}" class="product-card">
        <div class="product-card-img">
          <img src="${safeImg}" alt="${safeName}" loading="lazy" />
          ${safeBadge ? `<span class="card-badge">${safeBadge}</span>` : ''}
        </div>
        <div class="product-card-body">
          <span class="card-sub">${safeCat} · ${safeSub}</span>
          <h3 class="card-title">${safeName}</h3>
          <div class="card-rating">
            ${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}
            <span class="card-reviews">(${parseInt(item.reviews)})</span>
          </div>
          <div class="card-pricing">
            <span class="card-price-current">${formatPrice(item.price)}</span>
            ${item.oldPrice ? `<span class="card-price-old">${formatPrice(item.oldPrice)}</span>` : ''}
          </div>
        </div>
      </a>
    `;
  }).join('');
}
