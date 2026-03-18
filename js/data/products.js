/* ═══════════════════════════════════════════════
   7 STAR FURNITURES — PRODUCT DATABASE
   All prices in NPR (Nepalese Rupees)
   ═══════════════════════════════════════════════ */

function imgPath(filename) {
  // Sanitize: strip path traversal and allow only safe filename chars
  const safe = String(filename).replace(/\.\./g, '').replace(/[^a-zA-Z0-9._\-]/g, '');
  if (!safe) return '';
  const base = window.location.pathname.includes('/pages/') ? '../' : '';
  return base + 'assets/images/' + safe;
}

const PRODUCTS = [

  // ══════════════════════════════════════════════
  // CHAIRS — OFFICE
  // ══════════════════════════════════════════════
  {
    id: "chair-office-ergonomic-mesh",
    name: "ErgoFlex Pro Mesh Office Chair",
    category: "Chairs",
    subcategory: "Office",
    price: 18500,
    oldPrice: 22000,
    image: "ergonomic-chair.jpg",
    images: [
      "ergonomic-chair.jpg",
      "mesh-conference-chair.jpg"
    ],
    colors: ["Black", "Gray", "Blue"],
    size: "62cm x 60cm x 110-120cm (W x D x H)",
    weight: "14 kg",
    material: "Breathable mesh back, high-density foam seat, nylon base",
    build: "Steel frame with chrome gas lift, 360° swivel, tilt lock mechanism",
    description: "Designed for long work sessions, the ErgoFlex Pro features a contoured mesh backrest that promotes airflow and lumbar support. Adjustable armrests and seat height let you customize your perfect working position.",
    features: ["Adjustable lumbar support", "Breathable mesh back", "360° swivel", "Tilt lock mechanism", "Height adjustable armrests", "Heavy-duty nylon casters"],
    rating: 4.7,
    reviews: 234,
    inStock: true,
    badge: "Bestseller"
  },
  {
    id: "chair-office-executive-leather",
    name: "Prestige Executive Leather Chair",
    category: "Chairs",
    subcategory: "Office",
    price: 45000,
    oldPrice: 52000,
    image: "executive-chair.jpg",
    images: [
      "executive-chair.jpg",
      "conference-chair.jpg"
    ],
    colors: ["Black", "Brown", "Dark Brown"],
    size: "68cm x 70cm x 118-128cm (W x D x H)",
    weight: "22 kg",
    material: "Full grain Italian leather upholstery, cold-cure foam padding",
    build: "Reinforced steel frame, aluminium alloy base, class-4 gas lift",
    description: "Command respect with the Prestige Executive chair. Upholstered in premium Italian leather with generous padding, this chair combines boardroom elegance with all-day comfort. Perfect for executives and home offices.",
    features: ["Full grain Italian leather", "High-back design", "Padded armrests", "Synchronized tilt", "Aluminium alloy base", "Smooth-rolling casters"],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    badge: "Premium"
  },
  {
    id: "chair-office-conference",
    name: "SlimLine Conference Chair",
    category: "Chairs",
    subcategory: "Office",
    price: 8500,
    oldPrice: 10000,
    image: "conference-chair.jpg",
    images: [
      "conference-chair.jpg"
    ],
    colors: ["Black", "White", "Cream"],
    size: "55cm x 56cm x 95cm (W x D x H)",
    weight: "9 kg",
    material: "PU leather seat, chrome-plated steel legs",
    build: "Welded steel frame, stackable design, floor protector caps",
    description: "Sleek and professional, the SlimLine is ideal for conference rooms and meeting spaces. Stackable design makes storage easy, while the PU leather seat ensures comfort during long meetings.",
    features: ["Stackable design", "PU leather seat", "Chrome legs", "Floor protector caps", "Lightweight", "Easy to clean"],
    rating: 4.3,
    reviews: 89,
    inStock: true,
    badge: null
  },
  {
    id: "chair-office-mesh-mid",
    name: "AirFlow Mid-Back Task Chair",
    category: "Chairs",
    subcategory: "Office",
    price: 12000,
    oldPrice: null,
    image: "mesh-task-chair.jpg",
    images: [
      "mesh-task-chair.jpg"
    ],
    colors: ["Black", "Gray"],
    size: "58cm x 58cm x 98-108cm (W x D x H)",
    weight: "11 kg",
    material: "Mesh back, molded foam seat, polypropylene base",
    build: "Steel internal frame, pneumatic height adjustment, fixed armrests",
    description: "A reliable everyday task chair with a breathable mesh back. The AirFlow keeps you cool and comfortable throughout the work day at an affordable price point.",
    features: ["Breathable mesh", "Pneumatic height adjust", "Fixed armrests", "Swivel base", "Budget-friendly"],
    rating: 4.2,
    reviews: 312,
    inStock: true,
    badge: "Value Pick"
  },

  // ══════════════════════════════════════════════
  // CHAIRS — HOME
  // ══════════════════════════════════════════════
  {
    id: "chair-home-accent-velvet",
    name: "Velvet Accent Lounge Chair",
    category: "Chairs",
    subcategory: "Home",
    price: 15500,
    oldPrice: 18000,
    image: "single-metal-bed.jpg",
    images: [
      "single-metal-bed.jpg"
    ],
    colors: ["Emerald Green", "Navy Blue", "Dusty Rose", "Mustard Yellow"],
    size: "72cm x 75cm x 85cm (W x D x H)",
    weight: "12 kg",
    material: "Premium velvet upholstery, high-resilience foam, solid rubberwood legs",
    build: "Kiln-dried hardwood frame, sinuous spring support, tapered wooden legs",
    description: "Add a pop of color to your living room with this luxurious velvet accent chair. The deep seat and angled back create a cozy nook perfect for reading or relaxing.",
    features: ["Premium velvet fabric", "Deep comfortable seat", "Solid wood legs", "Stain-resistant treatment", "Multiple color options"],
    rating: 4.6,
    reviews: 178,
    inStock: true,
    badge: "Trending"
  },
  {
    id: "chair-home-rocking",
    name: "Classic Wooden Rocking Chair",
    category: "Chairs",
    subcategory: "Home",
    price: 19000,
    oldPrice: null,
    image: "mesh-conference-chair.jpg",
    images: [
      "mesh-conference-chair.jpg"
    ],
    colors: ["Walnut", "Teak", "Natural Oak"],
    size: "60cm x 85cm x 105cm (W x D x H)",
    weight: "15 kg",
    material: "Solid Sheesham wood, natural lacquer finish",
    build: "Mortise and tenon joinery, precision-sanded runners, contoured seat",
    description: "A timeless piece of premium quality furniture. This rocking chair is factory-built from solid Sheesham wood with smooth runners for a gentle, soothing rocking motion.",
    features: ["Solid Sheesham wood", "Precision-finished", "Contoured seat", "Smooth rocking motion", "Natural lacquer finish"],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    badge: "Artisan Style"
  },
  {
    id: "chair-home-recliner",
    name: "CloudRest Power Recliner",
    category: "Chairs",
    subcategory: "Home",
    price: 35000,
    oldPrice: 42000,
    image: "leather-sofa.jpg",
    images: [
      "leather-sofa.jpg"
    ],
    colors: ["Charcoal Gray", "Chocolate Brown", "Cream"],
    size: "85cm x 90cm x 105cm (W x D x H)",
    weight: "38 kg",
    material: "Top-grain leather, memory foam cushioning, steel reclining mechanism",
    build: "Hardwood and plywood frame, power motor reclining, USB charging port",
    description: "Sink into luxury with the CloudRest power recliner. One-touch electric reclining, built-in USB port, and sumptuous top-grain leather make this the ultimate relaxation chair.",
    features: ["Electric power recline", "USB charging port", "Top-grain leather", "Memory foam", "Zero-gravity position", "Side pocket"],
    rating: 4.8,
    reviews: 201,
    inStock: true,
    badge: "Premium"
  },

  // ══════════════════════════════════════════════
  // CHAIRS — BAR
  // ══════════════════════════════════════════════
  {
    id: "chair-bar-industrial",
    name: "Industrial Metal Bar Stool",
    category: "Chairs",
    subcategory: "Bar",
    price: 6500,
    oldPrice: 7500,
    image: "ergonomic-chair.jpg",
    images: [
      "ergonomic-chair.jpg"
    ],
    colors: ["Matte Black", "Rustic Bronze", "Silver"],
    size: "43cm x 43cm x 76cm (W x D x H)",
    weight: "5.5 kg",
    material: "Powder-coated steel, solid elm wood seat",
    build: "Welded steel frame, cross-brace reinforcement, anti-slip floor pads",
    description: "Rugged industrial charm meets everyday functionality. These stackable bar stools feature a solid elm wood seat atop a powder-coated steel frame, perfect for kitchen islands and bar counters.",
    features: ["Stackable", "Solid wood seat", "Powder-coated steel", "Anti-slip pads", "Indoor/outdoor use"],
    rating: 4.4,
    reviews: 145,
    inStock: true,
    badge: null
  },
  {
    id: "chair-bar-swivel-leather",
    name: "Milano Swivel Bar Stool",
    category: "Chairs",
    subcategory: "Bar",
    price: 11000,
    oldPrice: null,
    image: "executive-chair.jpg",
    images: [
      "executive-chair.jpg"
    ],
    colors: ["Black", "Tan", "White"],
    size: "45cm x 48cm x 95-115cm (W x D x H)",
    weight: "8 kg",
    material: "PU leather upholstery, brushed stainless steel base",
    build: "Gas lift height adjustment, 360° swivel, weighted base for stability",
    description: "Elevate your bar or kitchen counter with the Milano swivel stool. Adjustable height, smooth swivel, and a comfortable padded seat and backrest make it as functional as it is stylish.",
    features: ["Gas lift adjustable height", "360° swivel", "Padded backrest", "Footrest", "Weighted base"],
    rating: 4.5,
    reviews: 98,
    inStock: true,
    badge: null
  },
  {
    id: "chair-bar-wooden-counter",
    name: "Himalayan Solid Wood Counter Stool",
    category: "Chairs",
    subcategory: "Bar",
    price: 9500,
    oldPrice: 11000,
    image: "mesh-task-chair.jpg",
    images: [
      "mesh-task-chair.jpg"
    ],
    colors: ["Natural Teak", "Dark Walnut", "Honey Oak"],
    size: "40cm x 40cm x 65cm (W x D x H)",
    weight: "6 kg",
    material: "Solid teak wood, natural oil finish",
    build: "Dowel-joined construction, saddle-shaped seat, angled legs for stability",
    description: "Precision-manufactured from solid teak, this counter stool brings natural warmth to any space. The saddle seat is ergonomically shaped for surprising comfort.",
    features: ["Solid teak wood", "Saddle-shaped seat", "Natural oil finish", "Quality Imported", "Sustainable sourcing"],
    rating: 4.7,
    reviews: 56,
    inStock: true,
    badge: "Best Value"
  },

  // ══════════════════════════════════════════════
  // CHAIRS — DINING
  // ══════════════════════════════════════════════
  {
    id: "chair-dining-upholstered",
    name: "Everest Upholstered Dining Chair",
    category: "Chairs",
    subcategory: "Single Dining Chairs",
    price: 8500,
    oldPrice: null,
    image: "conference-chair.jpg",
    images: [
      "conference-chair.jpg"
    ],
    colors: ["Beige", "Gray", "Sage Green"],
    size: "48cm x 55cm x 90cm (W x D x H)",
    weight: "7 kg",
    material: "Linen-blend fabric, solid rubberwood legs, foam-padded seat",
    build: "Screwed and glued rubberwood frame, removable seat cover",
    description: "A versatile dining chair that blends comfort and style. The linen-blend fabric is soft yet durable, and the removable cover makes cleaning effortless.",
    features: ["Removable washable cover", "Solid wood legs", "Comfortable padding", "Non-scratch floor pads", "Easy assembly"],
    rating: 4.4,
    reviews: 267,
    inStock: true,
    badge: null
  },
  {
    id: "chair-dining-wooden-classic",
    name: "Heritage Carved Dining Chair",
    category: "Chairs",
    subcategory: "Single Dining Chairs",
    price: 12500,
    oldPrice: 14500,
    image: "mesh-conference-chair.jpg",
    images: [
      "mesh-conference-chair.jpg"
    ],
    colors: ["Mahogany", "Dark Walnut"],
    size: "50cm x 52cm x 100cm (W x D x H)",
    weight: "9.5 kg",
    material: "Solid Sheesham wood with carved detailing, fabric cushion seat",
    build: "Traditional mortise & tenon, carved back splat, French polish finish",
    description: "Inspired by heritage design traditions, each chair features a carved back splat with traditional motifs. A statement piece that connects your dining table to cultural artistry.",
    features: ["Carved detailing", "Solid Sheesham", "French polish", "Cultural motifs", "Heirloom quality"],
    rating: 4.9,
    reviews: 42,
    inStock: true,
    badge: "Artisan Style"
  },
  {
    id: "chair-dining-modern-metal",
    name: "Metro Slim Dining Chair",
    category: "Chairs",
    subcategory: "Single Dining Chairs",
    price: 5500,
    oldPrice: null,
    image: "ergonomic-chair.jpg",
    images: [
      "ergonomic-chair.jpg"
    ],
    colors: ["White", "Black", "Olive Green"],
    size: "46cm x 50cm x 84cm (W x D x H)",
    weight: "4 kg",
    material: "Powder-coated steel, polypropylene shell seat",
    build: "Welded steel frame, molded seat, anti-scratch leg caps",
    description: "Minimalist and lightweight, the Metro Slim pairs effortlessly with any dining table. Easy to clean and stackable for when you need extra floor space.",
    features: ["Stackable", "Lightweight", "Easy to clean", "Modern design", "Anti-scratch caps"],
    rating: 4.1,
    reviews: 190,
    inStock: true,
    badge: "Value Pick"
  },

  // ══════════════════════════════════════════════
  // TABLES — OFFICE
  // ══════════════════════════════════════════════
  {
    id: "table-office-executive",
    name: "Summit Executive Desk",
    category: "Tables",
    subcategory: "Office",
    price: 42000,
    oldPrice: 50000,
    image: "modern-dining-table.jpg",
    images: [
      "modern-dining-table.jpg"
    ],
    colors: ["Dark Walnut", "Mahogany"],
    size: "160cm x 80cm x 76cm (W x D x H)",
    weight: "55 kg",
    material: "Solid engineered wood top with walnut veneer, steel legs",
    build: "Engineered wood core with real wood veneer, cable management grommets, steel powder-coated legs",
    description: "The Summit Executive Desk commands attention in any office. Generous workspace, integrated cable management, and a real wood veneer top deliver both beauty and function.",
    features: ["Cable management grommets", "Real wood veneer", "Spacious surface", "Steel legs", "Scratch-resistant top", "Lockable drawer unit (sold separately)"],
    rating: 4.7,
    reviews: 88,
    inStock: true,
    badge: "Premium"
  },
  {
    id: "table-office-standing",
    name: "RisePro Electric Standing Desk",
    category: "Tables",
    subcategory: "Office",
    price: 38000,
    oldPrice: 45000,
    image: "ceramic-dining-table.jpg",
    images: [
      "ceramic-dining-table.jpg"
    ],
    colors: ["White Top/White Frame", "Bamboo Top/Black Frame", "Walnut Top/Black Frame"],
    size: "140cm x 70cm x 72-120cm (W x D x H)",
    weight: "32 kg",
    material: "MDF desktop with laminate finish, dual-motor steel frame",
    build: "Dual motor electric lift system, anti-collision sensor, 4 memory height presets",
    description: "Switch between sitting and standing with the press of a button. The RisePro features a whisper-quiet dual motor, anti-collision technology, and 4 programmable height presets.",
    features: ["Electric dual-motor lift", "4 memory presets", "Anti-collision sensor", "Whisper quiet (<45dB)", "Weight capacity 120kg", "Cable tray included"],
    rating: 4.8,
    reviews: 312,
    inStock: true,
    badge: "Bestseller"
  },
  {
    id: "table-office-compact",
    name: "NeatDesk Compact Workstation",
    category: "Tables",
    subcategory: "Office",
    price: 14000,
    oldPrice: null,
    image: "marble-dining-table.jpg",
    images: [
      "marble-dining-table.jpg"
    ],
    colors: ["White", "Light Oak"],
    size: "100cm x 55cm x 76cm (W x D x H)",
    weight: "18 kg",
    material: "Particle board with melamine finish, powder-coated steel legs",
    build: "KD flat-pack assembly, integrated shelf, steel frame",
    description: "Perfect for small home offices and apartments. The NeatDesk packs a surprising amount of workspace into a compact footprint, with a built-in shelf for extra storage.",
    features: ["Compact footprint", "Built-in shelf", "Easy assembly", "Melamine scratch-resistant top", "Adjustable feet"],
    rating: 4.3,
    reviews: 455,
    inStock: true,
    badge: null
  },

  // ══════════════════════════════════════════════
  // TABLES — HOME DESK
  // ══════════════════════════════════════════════
  {
    id: "table-homedesk-writing",
    name: "Pokhara Solid Wood Writing Desk",
    category: "Tables",
    subcategory: "Home Desk",
    price: 25000,
    oldPrice: 30000,
    image: "modern-dining-table.jpg",
    images: [
      "modern-dining-table.jpg"
    ],
    colors: ["Natural Teak", "Dark Walnut", "Honey"],
    size: "120cm x 60cm x 76cm (W x D x H)",
    weight: "28 kg",
    material: "Solid Sheesham wood, natural wax finish",
    build: "Dovetail drawer joints, tapered legs, brass drawer pulls",
    description: "A beautifully simple writing desk made from solid Sheesham wood. Two drawers with dovetail joints provide storage, while the clean lines suit any room style.",
    features: ["Solid Sheesham wood", "2 dovetail drawers", "Brass hardware", "Natural wax finish", "Quality Imported"],
    rating: 4.8,
    reviews: 76,
    inStock: true,
    badge: "Best Value"
  },
  {
    id: "table-homedesk-modern-l",
    name: "UrbanL Corner Home Desk",
    category: "Tables",
    subcategory: "Home Desk",
    price: 22000,
    oldPrice: null,
    image: "ceramic-dining-table.jpg",
    images: [
      "ceramic-dining-table.jpg"
    ],
    colors: ["Rustic Brown/Black", "White/White"],
    size: "140cm x 140cm x 76cm (L-shape)",
    weight: "25 kg",
    material: "Engineered wood top, powder-coated steel frame",
    build: "L-shaped modular design, adjustable feet, cable management holes",
    description: "Maximize your corner space with the UrbanL desk. The L-shape provides ample room for dual monitors, paperwork, and more, while the steel frame keeps everything rock-solid.",
    features: ["L-shaped design", "Dual monitor space", "Cable management", "Adjustable feet", "Modular assembly"],
    rating: 4.5,
    reviews: 198,
    inStock: true,
    badge: null
  },

  // ══════════════════════════════════════════════
  // TABLES — COMPUTER TABLE
  // ══════════════════════════════════════════════
  {
    id: "table-computer-gaming",
    name: "BattleStation RGB Gaming Desk",
    category: "Tables",
    subcategory: "Computer Table",
    price: 28000,
    oldPrice: 33000,
    image: "marble-dining-table.jpg",
    images: [
      "marble-dining-table.jpg"
    ],
    colors: ["Black/Red", "Black/Blue"],
    size: "140cm x 65cm x 76cm (W x D x H)",
    weight: "22 kg",
    material: "Carbon fiber textured surface, steel Z-frame",
    build: "Z-shaped steel frame, RGB LED strip (remote controlled), headphone hook, cup holder",
    description: "Designed for serious gamers. The BattleStation features a carbon-fiber textured surface, customizable RGB lighting, and integrated accessories for the ultimate gaming setup.",
    features: ["RGB LED lighting", "Carbon fiber surface", "Headphone hook", "Cup holder", "Cable management", "Controller rack", "Monitor riser compatible"],
    rating: 4.6,
    reviews: 421,
    inStock: true,
    badge: "Trending"
  },
  {
    id: "table-computer-basic",
    name: "StudyMate Computer Desk",
    category: "Tables",
    subcategory: "Computer Table",
    price: 9500,
    oldPrice: null,
    image: "modern-dining-table.jpg",
    images: [
      "modern-dining-table.jpg"
    ],
    colors: ["Maple", "White"],
    size: "110cm x 55cm x 76cm (W x D x H)",
    weight: "14 kg",
    material: "Particle board with PVC edge banding, steel legs",
    build: "KD assembly, keyboard tray, CPU stand, steel frame",
    description: "A practical computer desk for students and home users. Includes a pull-out keyboard tray and dedicated CPU stand to keep your workspace organized.",
    features: ["Keyboard tray", "CPU stand", "Compact design", "PVC edge protection", "Easy assembly"],
    rating: 4.1,
    reviews: 532,
    inStock: true,
    badge: "Value Pick"
  },

  // ══════════════════════════════════════════════
  // TABLES — TEA TABLE
  // ══════════════════════════════════════════════
  {
    id: "table-tea-marble",
    name: "Annapurna Marble Coffee Table",
    category: "Tables",
    subcategory: "Tea Table",
    price: 18000,
    oldPrice: 22000,
    image: "marble-dining-table.jpg",
    images: [
      "marble-dining-table.jpg"
    ],
    colors: ["White Marble/Gold", "Black Marble/Black"],
    size: "100cm x 60cm x 42cm (W x D x H)",
    weight: "25 kg",
    material: "Natural marble top, stainless steel base with gold/black PVD coating",
    build: "Solid marble slab top, welded stainless steel frame, adjustable feet",
    description: "A statement coffee table featuring a genuine marble top with natural veining. The stainless steel base with PVD coating adds a touch of modern luxury to your living room.",
    features: ["Natural marble top", "PVD coated steel", "Unique veining patterns", "Adjustable feet", "Heavy and stable"],
    rating: 4.7,
    reviews: 134,
    inStock: true,
    badge: "Premium"
  },
  {
    id: "table-tea-nesting",
    name: "Zen Nesting Side Tables (Set of 3)",
    category: "Tables",
    subcategory: "Tea Table",
    price: 12000,
    oldPrice: null,
    image: "ceramic-dining-table.jpg",
    images: [
      "ceramic-dining-table.jpg"
    ],
    colors: ["White/Gold", "Black/Black"],
    size: "Large: 50cm x 50cm x 55cm, Medium: 40x40x48, Small: 30x30x40",
    weight: "8 kg (set)",
    material: "Sintered stone tops, powder-coated steel frames",
    build: "Nesting design, welded frames, felt-padded bottoms",
    description: "Three elegant tables that nest together when not in use. Pull them out for guests, tuck them away to save space. The sintered stone tops resist heat and stains.",
    features: ["Set of 3 nesting tables", "Sintered stone tops", "Heat resistant", "Space saving", "Felt-padded base"],
    rating: 4.5,
    reviews: 203,
    inStock: true,
    badge: null
  },

  // ══════════════════════════════════════════════
  // TABLES — DINING SET
  // ══════════════════════════════════════════════
  {
    id: "table-dining-marble-6",
    name: "Everest 6-Seater Marble Dining Set",
    category: "Tables",
    subcategory: "Dining Set",
    price: 85000,
    oldPrice: 99000,
    image: "dining-set-6seater.jpg",
    images: [
      "dining-set-6seater.jpg",
      "marble-dining-table.jpg"
    ],
    colors: ["White Marble/Gold Legs", "Gray Marble/Black Legs"],
    size: "Table: 180cm x 90cm x 76cm; Chairs: 48cm x 55cm x 90cm",
    weight: "95 kg (complete set)",
    material: "Natural marble table top, stainless steel legs, PU leather chairs",
    build: "Solid marble slab, welded stainless steel frame, high-density foam chair seats",
    description: "The centrepiece of any dining room. This stunning 6-seater set pairs a natural marble table with elegantly upholstered chairs. Perfect for family dinners and hosting guests in style.",
    features: ["Natural marble top", "6 matching chairs included", "Stainless steel legs", "Stain-resistant surface", "Seats 6 comfortably", "White-glove delivery"],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    badge: "Bestseller"
  },
  {
    id: "table-dining-wood-4",
    name: "Thamel Solid Wood 4-Seater Dining Set",
    category: "Tables",
    subcategory: "Dining Set",
    price: 48000,
    oldPrice: 55000,
    image: "modern-dining-table.jpg",
    images: [
      "modern-dining-table.jpg"
    ],
    colors: ["Teak Natural", "Dark Walnut"],
    size: "Table: 130cm x 80cm x 76cm; Chairs: 45cm x 50cm x 88cm",
    weight: "60 kg (complete set)",
    material: "Solid Sheesham wood, natural lacquer finish, cotton-padded chair seats",
    build: "Mortise and tenon joinery throughout, precision-sanded, quality-controlled manufacturing",
    description: "Built with premium quality materials and precision manufacturing, this 4-seater dining set features solid Sheesham wood construction imported from China. Solid Sheesham ensures it lasts for generations.",
    features: ["Quality Imported", "Solid Sheesham wood", "4 chairs included", "Traditional joinery", "Natural lacquer", "Seats 4"],
    rating: 4.8,
    reviews: 89,
    inStock: true,
    badge: "Best Value"
  },
  {
    id: "table-dining-extendable-8",
    name: "Grand 8-Seater Extendable Dining Table",
    category: "Tables",
    subcategory: "Dining Set",
    price: 65000,
    oldPrice: null,
    image: "ceramic-dining-table.jpg",
    images: [
      "ceramic-dining-table.jpg"
    ],
    colors: ["Oak", "Walnut"],
    size: "180-240cm x 100cm x 76cm (extends with leaf)",
    weight: "48 kg (table only)",
    material: "Solid oak with engineered wood extension leaf, steel butterfly mechanism",
    build: "Butterfly extension mechanism, solid wood top, powder-coated steel legs",
    description: "Seats 6 daily, extends to 8 for gatherings. The butterfly extension leaf stores inside the table and deploys in seconds. Solid oak ensures decades of family meals.",
    features: ["Extends from 6 to 8 seats", "Butterfly extension", "Solid oak top", "Self-storing leaf", "Seats up to 8"],
    rating: 4.6,
    reviews: 112,
    inStock: true,
    badge: null
  },

  // ══════════════════════════════════════════════
  // BEDS — SINGLE
  // ══════════════════════════════════════════════
  {
    id: "bed-single-metal",
    name: "SturdyRest Metal Single Bed",
    category: "Beds",
    subcategory: "Single",
    price: 8500,
    oldPrice: 10000,
    image: "single-metal-bed.jpg",
    images: [
      "single-metal-bed.jpg",
      "metal-platform-bed.jpg"
    ],
    colors: ["Black", "White", "Silver"],
    size: "90cm x 190cm x 90cm (W x L x Headboard H)",
    weight: "18 kg",
    material: "Heavy-duty steel tubing, powder-coated finish",
    build: "Bolt-together steel frame, steel slat base, reinforced center support",
    description: "Built to last, this heavy-duty metal single bed is perfect for hostels, student rooms, and children's bedrooms. The powder-coated finish resists chips and rust.",
    features: ["Heavy-duty steel", "150kg weight capacity", "Steel slat base", "No-squeak design", "Easy assembly", "Under-bed storage space"],
    rating: 4.3,
    reviews: 567,
    inStock: true,
    badge: "Value Pick"
  },
  {
    id: "bed-single-wooden",
    name: "Lumbini Solid Wood Single Bed",
    category: "Beds",
    subcategory: "Single",
    price: 18000,
    oldPrice: null,
    image: "storage-double-bed.jpg",
    images: [
      "storage-double-bed.jpg"
    ],
    colors: ["Natural Pine", "Walnut Stain"],
    size: "100cm x 200cm x 95cm (W x L x Headboard H)",
    weight: "30 kg",
    material: "Solid pine wood, water-based lacquer",
    build: "Dowel and bolt assembly, solid wood slats, rounded corners for safety",
    description: "A warm, natural single bed made from solid pine. The slatted base promotes airflow for your mattress, and rounded corners make it safe for kids.",
    features: ["Solid pine wood", "Slatted base", "Rounded corners", "Under-bed clearance 25cm", "Water-based lacquer (low VOC)"],
    rating: 4.5,
    reviews: 198,
    inStock: true,
    badge: null
  },

  // ══════════════════════════════════════════════
  // BEDS — DOUBLE
  // ══════════════════════════════════════════════
  {
    id: "bed-double-upholstered",
    name: "DreamNest Upholstered Double Bed",
    category: "Beds",
    subcategory: "Double",
    price: 32000,
    oldPrice: 38000,
    image: "storage-double-bed.jpg",
    images: [
      "storage-double-bed.jpg"
    ],
    colors: ["Light Gray", "Charcoal", "Beige"],
    size: "145cm x 200cm x 110cm (W x L x Headboard H)",
    weight: "42 kg",
    material: "Linen fabric upholstery, solid wood frame, plywood slats",
    build: "Solid wood internal frame, padded headboard, center support leg",
    description: "Sleep in style with the DreamNest. The generously padded headboard is perfect for sitting up in bed, and the linen fabric adds a soft, modern touch to your bedroom.",
    features: ["Padded headboard", "Linen upholstery", "Solid wood frame", "Center support", "Mattress not included", "Fits 140cm mattress"],
    rating: 4.6,
    reviews: 234,
    inStock: true,
    badge: "Trending"
  },
  {
    id: "bed-double-metal-storage",
    name: "SmartStore Double Metal Bed with Storage",
    category: "Beds",
    subcategory: "Double",
    price: 22000,
    oldPrice: 26000,
    image: "double-metal-bed.jpg",
    images: [
      "double-metal-bed.jpg"
    ],
    colors: ["Black", "White"],
    size: "140cm x 200cm x 100cm (W x L x Headboard H)",
    weight: "30 kg",
    material: "Steel tube frame, powder-coated, metal mesh base",
    build: "Bolt assembly, 4 under-bed storage drawers (optional), reinforced corners",
    description: "Smart space management meets solid construction. This metal double bed has generous under-bed clearance and optional storage drawers for apartments where every centimetre counts.",
    features: ["Under-bed storage space", "200kg weight capacity", "Powder-coated steel", "No-noise design", "Optional storage drawers"],
    rating: 4.4,
    reviews: 312,
    inStock: true,
    badge: null
  },

  // ══════════════════════════════════════════════
  // BEDS — KING
  // ══════════════════════════════════════════════
  {
    id: "bed-king-platform",
    name: "Royal Platform King Bed",
    category: "Beds",
    subcategory: "King",
    price: 75000,
    oldPrice: 88000,
    image: "king-platform-bed.jpg",
    images: [
      "king-platform-bed.jpg",
      "king-leather-bed.jpg"
    ],
    colors: ["Dark Gray Velvet", "Cream White", "Navy Blue"],
    size: "193cm x 210cm x 120cm (W x L x Headboard H)",
    weight: "65 kg",
    material: "Solid wood frame, premium velvet upholstery, high-density foam headboard",
    build: "Solid wood platform with slats, deeply tufted headboard, no box spring needed",
    description: "Make a grand statement with the Royal Platform bed. The deeply tufted velvet headboard rises majestically, while the solid platform base means no box spring is needed.",
    features: ["No box spring needed", "Deeply tufted headboard", "Premium velvet", "Solid wood platform", "Fits 180cm king mattress", "LED underglow option"],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    badge: "Premium"
  },
  {
    id: "bed-king-leather",
    name: "Monarch Leather King Bed",
    category: "Beds",
    subcategory: "King",
    price: 95000,
    oldPrice: null,
    image: "king-leather-bed.jpg",
    images: [
      "king-leather-bed.jpg"
    ],
    colors: ["Ivory White", "Jet Black"],
    size: "200cm x 218cm x 105cm (W x L x Headboard H)",
    weight: "72 kg",
    material: "Top-grain leather, solid wood internal frame, memory foam headboard padding",
    build: "Solid hardwood frame, sprung slat system, leather-wrapped panels, USB side ports",
    description: "The Monarch is the ultimate luxury bed. Wrapped in top-grain leather with memory foam headboard padding and integrated USB charging, it redefines bedroom luxury.",
    features: ["Top-grain leather", "USB charging ports", "Memory foam headboard", "Sprung slat system", "Integrated nightstand ledges"],
    rating: 4.8,
    reviews: 45,
    inStock: true,
    badge: "Luxury"
  },

  // ══════════════════════════════════════════════
  // BEDS — QUEEN
  // ══════════════════════════════════════════════
  {
    id: "bed-queen-velvet",
    name: "Serenity Velvet Queen Bed",
    category: "Beds",
    subcategory: "Queen",
    price: 55000,
    oldPrice: 65000,
    image: "queen-velvet-bed.jpg",
    images: [
      "queen-velvet-bed.jpg"
    ],
    colors: ["Dark Gray", "Blush Pink", "Forest Green"],
    size: "165cm x 210cm x 115cm (W x L x Headboard H)",
    weight: "52 kg",
    material: "Premium velvet upholstery, eucalyptus wood frame",
    build: "Eucalyptus hardwood frame, channel-tufted headboard, wooden slat base",
    description: "The Serenity's channel-tufted headboard is a design showpiece. Upholstered in sumptuous velvet over a eucalyptus frame, it brings boutique hotel luxury home.",
    features: ["Channel-tufted headboard", "Premium velvet", "Eucalyptus wood frame", "Wooden slat base", "Fits 150cm queen mattress"],
    rating: 4.7,
    reviews: 178,
    inStock: true,
    badge: "Trending"
  },
  {
    id: "bed-queen-storage",
    name: "SpaceMax Queen Storage Bed",
    category: "Beds",
    subcategory: "Queen",
    price: 42000,
    oldPrice: 48000,
    image: "queen-storage-bed.jpg",
    images: [
      "queen-storage-bed.jpg"
    ],
    colors: ["Gray Fabric", "Beige Fabric"],
    size: "160cm x 205cm x 100cm (W x L x Headboard H)",
    weight: "58 kg",
    material: "Fabric upholstery, engineered wood frame, hydraulic lift mechanism",
    build: "Hydraulic gas-lift storage, engineered wood base, fabric-wrapped panels",
    description: "The entire mattress area lifts to reveal a massive hidden storage compartment. Perfect for Kathmandu apartments where closet space is at a premium.",
    features: ["Hydraulic lift storage", "Massive hidden compartment", "Gas-lift mechanism", "Fabric upholstery", "Fits 150cm mattress", "Easy one-hand lift"],
    rating: 4.6,
    reviews: 256,
    inStock: true,
    badge: "Space Saver"
  },

  // ══════════════════════════════════════════════
  // BEDS — ROUND
  // ══════════════════════════════════════════════
  {
    id: "bed-round-luxury",
    name: "Luna Round Luxury Bed",
    category: "Beds",
    subcategory: "Round",
    price: 120000,
    oldPrice: 145000,
    image: "king-platform-bed.jpg",
    images: [
      "king-platform-bed.jpg"
    ],
    colors: ["White Leather", "Black Leather", "Red Leather"],
    size: "220cm diameter x 85cm (Headboard H)",
    weight: "80 kg",
    material: "Italian synthetic leather, solid wood frame, LED lighting system",
    build: "Circular solid wood platform, integrated LED lighting, Bluetooth speaker headboard",
    description: "A showstopper. The Luna Round bed features integrated LED ambient lighting, Bluetooth speakers in the headboard, and Italian synthetic leather. For those who want the extraordinary.",
    features: ["Round 220cm design", "LED ambient lighting", "Bluetooth speakers", "Italian leather", "Wireless charging pad", "Remote control"],
    rating: 4.9,
    reviews: 23,
    inStock: true,
    badge: "Luxury"
  },
  {
    id: "bed-round-modern",
    name: "Orbit Modern Round Bed",
    category: "Beds",
    subcategory: "Round",
    price: 85000,
    oldPrice: null,
    image: "king-leather-bed.jpg",
    images: [
      "king-leather-bed.jpg"
    ],
    colors: ["Pearl White", "Charcoal"],
    size: "200cm diameter x 75cm (Headboard H)",
    weight: "65 kg",
    material: "Boucle fabric upholstery, plywood frame",
    build: "Circular plywood frame, fabric-wrapped, low-profile design",
    description: "A modern minimalist take on the round bed. Low-profile design with cozy boucle fabric creates a cloud-like sleeping experience.",
    features: ["200cm round design", "Boucle fabric", "Low-profile", "Includes round mattress topper", "Minimalist aesthetic"],
    rating: 4.5,
    reviews: 34,
    inStock: true,
    badge: null
  },

  // ══════════════════════════════════════════════
  // SOFAS — 5 SEATER
  // ══════════════════════════════════════════════
  {
    id: "sofa-5seat-modern",
    name: "CloudNine 5-Seater Fabric Sofa",
    category: "Sofas / Couches",
    subcategory: "5 Seater",
    price: 65000,
    oldPrice: 75000,
    image: "sectional-sofa.jpg",
    images: [
      "sectional-sofa.jpg"
    ],
    colors: ["Light Gray", "Beige", "Navy Blue"],
    size: "280cm x 90cm x 85cm (W x D x H)",
    weight: "55 kg",
    material: "Premium linen-blend fabric, high-resilience foam, solid wood frame",
    build: "Kiln-dried hardwood frame, sinuous spring + foam seat, removable back cushions",
    description: "The CloudNine seats 5 in plush comfort. Removable cushion covers make cleaning easy, while the solid hardwood frame ensures years of family movie nights.",
    features: ["Seats 5 comfortably", "Removable washable covers", "High-resilience foam", "Solid wood frame", "Sinuous spring support"],
    rating: 4.6,
    reviews: 234,
    inStock: true,
    badge: "Bestseller"
  },
  {
    id: "sofa-5seat-leather",
    name: "Milano 5-Seater Leather Sofa",
    category: "Sofas / Couches",
    subcategory: "5 Seater",
    price: 95000,
    oldPrice: null,
    image: "leather-sofa.jpg",
    images: [
      "leather-sofa.jpg"
    ],
    colors: ["Cognac Brown", "Black", "Cream"],
    size: "290cm x 95cm x 82cm (W x D x H)",
    weight: "68 kg",
    material: "Full-grain leather, pocket spring + foam cushions, solid wood frame",
    build: "Hardwood frame, pocket spring seats, precision-stitched leather, chrome legs",
    description: "Italian-inspired design meets premium quality construction. Full-grain leather develops a beautiful patina over time, making your sofa more characterful with age.",
    features: ["Full-grain leather", "Pocket spring seats", "Precision-stitched", "Chrome legs", "Develops patina over time"],
    rating: 4.8,
    reviews: 87,
    inStock: true,
    badge: "Premium"
  },

  // ══════════════════════════════════════════════
  // SOFAS — 7 SEATER
  // ══════════════════════════════════════════════
  {
    id: "sofa-7seat-sectional",
    name: "FamilyFirst 7-Seater Sectional",
    category: "Sofas / Couches",
    subcategory: "7 Seater",
    price: 88000,
    oldPrice: 105000,
    image: "sectional-sofa.jpg",
    images: [
      "sectional-sofa.jpg"
    ],
    colors: ["Warm Gray", "Camel", "Olive Green"],
    size: "340cm x 180cm x 85cm (3+2+2 configuration)",
    weight: "75 kg",
    material: "Chenille fabric, high-density foam, engineered wood frame",
    build: "Modular bolt-together design, reversible chaise, removable covers",
    description: "Designed for large families, the FamilyFirst 7-seater features modular sections that can be rearranged to suit your living room. The reversible chaise fits left or right.",
    features: ["7-seater capacity", "Modular design", "Reversible chaise", "Removable covers", "Anti-sag springs", "Kid-friendly fabric"],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    badge: "Family Pick"
  },

  // ══════════════════════════════════════════════
  // SOFAS — 10 SEATER
  // ══════════════════════════════════════════════
  {
    id: "sofa-10seat-grand",
    name: "Grand Living 10-Seater U-Shape Sofa",
    category: "Sofas / Couches",
    subcategory: "10 Seater",
    price: 145000,
    oldPrice: 170000,
    image: "leather-sofa.jpg",
    images: [
      "leather-sofa.jpg"
    ],
    colors: ["Charcoal", "Cream", "Deep Teal"],
    size: "420cm x 280cm x 85cm (U-shape)",
    weight: "110 kg",
    material: "Premium microfiber fabric, dual-density foam, solid hardwood frame",
    build: "U-shaped modular sections, bolt-together, center console with storage",
    description: "For grand living rooms and joint families, this U-shaped 10-seater creates a conversation pit that brings everyone together. Includes a center console with cup holders and storage.",
    features: ["Seats 10", "U-shape configuration", "Center console", "Cup holders", "Storage compartments", "Premium microfiber", "Anti-stain treatment"],
    rating: 4.6,
    reviews: 45,
    inStock: true,
    badge: "Grand"
  },

  // ══════════════════════════════════════════════
  // SOFAS — 15 SEATER
  // ══════════════════════════════════════════════
  {
    id: "sofa-15seat-modular",
    name: "Durbar 15-Seater Modular Sofa System",
    category: "Sofas / Couches",
    subcategory: "15 Seater",
    price: 225000,
    oldPrice: 265000,
    image: "sectional-sofa.jpg",
    images: [
      "sectional-sofa.jpg"
    ],
    colors: ["Neutral Gray", "Warm Beige"],
    size: "Custom layout (15 modular units, each 80cm x 80cm)",
    weight: "160 kg (complete system)",
    material: "Stain-proof performance fabric, cold-cure foam, steel connecting brackets",
    build: "15 individual modular units, steel bracket connection, infinite layout options",
    description: "Named after Nepal's historic Durbar squares, this modular system lets you design your own sofa layout. 15 units connect via hidden steel brackets - perfect for events, offices, and palatial living rooms.",
    features: ["15 modular units", "Infinite configurations", "Stain-proof fabric", "Steel brackets", "Individual units replaceable", "Commercial grade", "Event-ready"],
    rating: 4.5,
    reviews: 18,
    inStock: true,
    badge: "Commercial"
  },

  // ══════════════════════════════════════════════
  // SOFAS — L-SHAPED
  // ══════════════════════════════════════════════
  {
    id: "sofa-l-nordic",
    name: "Nordic L-Shaped Corner Sofa",
    category: "Sofas / Couches",
    subcategory: "L-Shaped",
    price: 78000,
    oldPrice: 90000,
    image: "corner-sofa.jpg",
    images: [
      "corner-sofa.jpg",
      "boucle-sofa.jpg"
    ],
    colors: ["Warm White", "Sage Green", "Dusty Blue"],
    size: "280cm x 180cm x 82cm (L-shape)",
    weight: "62 kg",
    material: "Boucle fabric, solid birch wood frame, feather-wrapped foam cushions",
    build: "Solid birch frame, sinuous springs, feather-foam cushions, reversible L-section",
    description: "Scandinavian simplicity meets everyday comfort. This L-shaped sofa features cloud-like feather-wrapped cushions and a cozy boucle fabric that invites you to sink in.",
    features: ["L-shaped design", "Reversible chaise", "Feather-foam cushions", "Boucle fabric", "Solid birch frame", "Minimal Scandinavian design"],
    rating: 4.8,
    reviews: 167,
    inStock: true,
    badge: "Trending"
  },
  {
    id: "sofa-l-leather-recliner",
    name: "Luxe L-Shaped Recliner Sofa",
    category: "Sofas / Couches",
    subcategory: "L-Shaped",
    price: 135000,
    oldPrice: 160000,
    image: "leather-sofa.jpg",
    images: [
      "leather-sofa.jpg"
    ],
    colors: ["Dark Brown", "Black"],
    size: "310cm x 200cm x 100cm (L-shape)",
    weight: "95 kg",
    material: "Top-grain leather, power recliner motors, cold-cure foam, hardwood frame",
    build: "Hardwood frame, 3 power recliners, USB ports, LED cup holder console",
    description: "The ultimate home theater sofa. Three power reclining seats, USB ports, LED-lit cup holders, and premium top-grain leather make every movie night a five-star experience.",
    features: ["3 power recliners", "USB charging ports", "LED cup holders", "Top-grain leather", "Home theater ready", "Wireless remote"],
    rating: 4.9,
    reviews: 78,
    inStock: true,
    badge: "Luxury"
  },
  {
    id: "sofa-l-boucle-cloud",
    name: "Boucle Cloud L-Sofa",
    category: "Sofas / Couches",
    subcategory: "L-Shaped",
    price: 68000,
    oldPrice: null,
    image: "boucle-sofa.jpg",
    images: [
      "boucle-sofa.jpg"
    ],
    colors: ["Cream White", "Taupe"],
    size: "260cm x 170cm x 75cm (L-shape)",
    weight: "48 kg",
    material: "Teddy boucle fabric, high-resilience foam, pine wood frame",
    build: "Pine frame, webbed base, deep foam cushions, low-profile design",
    description: "Instagram's favorite sofa, now available in Nepal. The Boucle Cloud's teddy-bear texture and low-slung silhouette create an irresistibly cozy corner in any living room.",
    features: ["Teddy boucle texture", "Low-profile design", "Deep cushions", "Instagram-worthy", "Cozy corner ready"],
    rating: 4.7,
    reviews: 289,
    inStock: true,
    badge: "Trending"
  }
];

// ── Helper functions ──
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
  return PRODUCTS.filter(p => p.category === category);
}

function getProductsBySubcategory(category, subcategory) {
  return PRODUCTS.filter(p => p.category === category && p.subcategory === subcategory);
}

function getAllCategories() {
  const cats = {};
  PRODUCTS.forEach(p => {
    if (!cats[p.category]) cats[p.category] = new Set();
    cats[p.category].add(p.subcategory);
  });
  const result = {};
  for (const cat in cats) result[cat] = [...cats[cat]];
  return result;
}

function formatPrice(price) {
  return 'Rs. ' + price.toLocaleString('en-NP');
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.subcategory.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.material.toLowerCase().includes(q)
  );
}
