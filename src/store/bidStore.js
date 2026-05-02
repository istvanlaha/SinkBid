import { create } from 'zustand'

export const SUBCATEGORIES = {
  orak: ['All Watches', "Men's Watches", "Ladies' Watches", 'Antique Watches', 'Pocket Watches', 'Sports Watches', 'Luxury Watches'],
  ekszer: ['All Jewellery', 'Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Brooches', 'Antique Jewellery'],
  divat: ['All Fashion', 'Handbags', 'Shoes', 'Clothing', 'Accessories', 'Designer', 'Vintage Fashion'],
  jarmuvek: ['All Vehicles', 'Cars', 'Motorcycles', 'Boats & Yachts', 'Aircraft', 'Classic Cars', 'Sports Cars'],
  muveszet: ['All Art', 'Paintings', 'Sculptures', 'Prints', 'Photography', 'Ceramics', 'Silver & Gold'],
  butor: ['All Furniture', 'Chairs & Seating', 'Tables', 'Storage', 'Lighting', 'Mirrors', 'Antique Furniture'],
  mobil: ['All Phones', 'iPhone', 'Samsung', 'Google Pixel', 'Luxury Phones', 'Vintage Phones', 'Accessories'],
  muszaki: ['All Electronics', 'Cameras', 'Audio', 'TV & Video', 'Kitchen', 'Smart Home', 'Vintage Electronics'],
  szamtech: ['All Computing', 'Laptops', 'Desktops', 'Tablets', 'Software', 'Accessories', 'Vintage Computing'],
  gyujtheto: [
    'All Collectibles', 'Coins & Stamps', 'Sports Memorabilia', 'Toys & Games', 'Trading Cards', 'Wine & Spirits', 'Manuscripts',
    'Vinyl Records — All', 'Vinyl Records — Rock & Pop', 'Vinyl Records — Jazz & Blues', 'Vinyl Records — Classical', 'Vinyl Records — Electronic', 'Vinyl Records — World Music', 'Vinyl Records — First Pressings',
  ],
  jatekok: ['All Games', 'Video Games', 'Board Games', 'Trading Cards', 'Vintage Games', 'Consoles', 'Limited Editions'],
  sport: ['All Sport', 'Golf', 'Tennis', 'Cycling', 'Winter Sports', 'Water Sports', 'Fitness Equipment'],
  otthon: ['All Home', 'Decorative Objects', 'Rugs & Carpets', 'Clocks', 'Candles & Fragrance', 'Textiles', 'Garden'],
  konyvek: ['All Books', 'First Editions', 'Manuscripts', 'Art Books', 'Signed Copies', 'Antique Books', 'Maps & Atlases'],
  ipari: ['All Industrial', 'Machinery', 'Tools', 'Scientific Instruments', 'Vintage Industrial', 'Signs & Displays', 'Factory Equipment'],
  szepseg: ['All Beauty', 'Skincare', 'Perfume', 'Vintage Cosmetics', 'Grooming', 'Spa Equipment', 'Vintage Perfume'],
  ingatlan: [
    'All Properties',
    'Spain — Apartment', 'Spain — Villa', 'Spain — Penthouse', 'Spain — Land', 'Spain — Holiday Home',
    'Italy — Apartment', 'Italy — Villa', 'Italy — Farmhouse', 'Italy — Penthouse', 'Italy — Land',
    'France — Apartment', 'France — Chateau', 'France — Villa', 'France — Farmhouse', 'France — Land',
    'Hungary — Apartment', 'Hungary — House', 'Hungary — Land', 'Hungary — Holiday Home', 'Hungary — Vineyard',
    'Portugal — Apartment', 'Portugal — Villa', 'Portugal — Land', 'Portugal — Holiday Home',
    'Greece — Villa', 'Greece — Island Property', 'Greece — Apartment', 'Greece — Holiday Home',
    'Croatia — Villa', 'Croatia — Waterfront Property', 'Croatia — Apartment', 'Croatia — Island Property',
    'Austria — Apartment', 'Austria — Chalet', 'Austria — House', 'Austria — Land',
    'Germany — Apartment', 'Germany — House', 'Germany — Commercial', 'Germany — Land',
    'UAE — Apartment', 'UAE — Villa', 'UAE — Penthouse', 'UAE — Commercial',
    'USA — House', 'USA — Apartment', 'USA — Ranch', 'USA — Commercial', 'USA — Land',
    'Thailand — Villa', 'Thailand — Apartment', 'Thailand — Resort Property',
    'Maldives — Resort', 'Maldives — Private Island',
    'Switzerland — Apartment', 'Switzerland — Chalet', 'Switzerland — Villa',
    'Monaco — Apartment', 'Monaco — Penthouse',
    'UK — House', 'UK — Apartment', 'UK — Country Estate', 'UK — Commercial',
  ],
}

export function getBidStep(price) {
  if (price <= 1000) return 10
  if (price <= 10000) return 20
  if (price <= 100000) return 50
  if (price <= 1000000) return 100
  if (price <= 2000000) return 200
  return 500
}

export function getEntryFee(price) {
  return getBidStep(price)
}

export const EUR_TO_USD = 1.08

export const CATEGORIES = [
  { id: 'all', key: 'all' },
  { id: 'orak', key: 'orak' },
  { id: 'ekszer', key: 'ekszer' },
  { id: 'divat', key: 'divat' },
  { id: 'muszaki', key: 'muszaki' },
  { id: 'jarmuvek', key: 'jarmuvek' },
  { id: 'muveszet', key: 'muveszet' },
  { id: 'szamtech', key: 'szamtech' },
  { id: 'mobil', key: 'mobil' },
  { id: 'sport', key: 'sport' },
  { id: 'otthon', key: 'otthon' },
  { id: 'butor', key: 'butor' },
  { id: 'gyujtheto', key: 'gyujtheto' },
  { id: 'jatekok', key: 'jatekok' },
  { id: 'konyvek', key: 'konyvek' },
  { id: 'ipari', key: 'ipari' },
  { id: 'szepseg', key: 'szepseg' },
  { id: 'ingatlan', key: 'ingatlan' },
]

export const INITIAL_PRODUCTS = [
  { id: 1, category: 'orak', name: 'Omega Seamaster Diver 300m 42mm', description: 'Steel bracelet, blue dial, automatic movement. 2023 production, original box.', originalPrice: 5600, emoji: '⌚', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80' },
  { id: 2, category: 'orak', name: 'Rolex Datejust 36mm White Gold', description: 'White gold, diamond bezel, jubilee bracelet. Full set with papers.', originalPrice: 18500, emoji: '⌚', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80' },
  { id: 3, category: 'orak', name: 'Patek Philippe Calatrava Vintage 1960s', description: 'Rose gold case, original leather strap, manual wind. Collector condition.', originalPrice: 42000, emoji: '⌚', image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80' },
  { id: 4, category: 'orak', name: 'Cartier Tank Must de Cartier Ladies', description: 'Gold plated, sapphire crown, original box and papers. Mint condition.', originalPrice: 3200, emoji: '⌚', image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80' },
  { id: 5, category: 'orak', name: 'IWC Portugieser Chronograph', description: 'Stainless steel, silver dial, leather strap. IWC service history.', originalPrice: 7800, emoji: '⌚', image: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600&q=80'
  { id: 6, category: 'orak', name: 'Audemars Piguet Royal Oak Offshore', description: '44mm titanium case, black dial, rubber strap. Full set.', originalPrice: 38000, emoji: '⌚', image: 'https://images.unsplash.com/photo-1636618736351-4dde7bfed6a5?w=600&q=80'
  { id: 7, category: 'orak', name: 'Breitling Navitimer B01 Chronograph', description: '43mm steel, black dial, pilot bracelet. COSC certified.', originalPrice: 8900, emoji: '⌚',image: 'https://images.unsplash.com/photo-1622434641406-a158123450f2?w=600&q=80'
  { id: 8, category: 'orak', name: 'Jaeger-LeCoultre Reverso Classic Small', description: 'Stainless steel, white dial, alligator strap. Ladies model.', originalPrice: 6400, emoji: '⌚',image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&q=80'
  { id: 9, category: 'ekszer', name: 'Tiffany & Co. Soleste Engagement Ring', description: '18K white gold, 0.85ct diamond, original box and certificate.', originalPrice: 8000, emoji: '💎', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80' },
  { id: 10, category: 'ekszer', name: 'Cartier Love Bracelet Yellow Gold', description: '18K yellow gold, 4 diamond version, original screwdriver and box.', originalPrice: 12500, emoji: '💎', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80' },
  { id: 11, category: 'ekszer', name: 'Van Cleef Alhambra Necklace', description: 'Yellow gold, malachite motifs, 20 motif long necklace.', originalPrice: 9800, emoji: '💎', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
  { id: 12, category: 'ekszer', name: 'Bulgari Serpenti Viper Ring', description: '18K rose gold, pave diamonds, size 54. Original packaging.', originalPrice: 7200, emoji: '💎', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80' },
  { id: 13, category: 'ekszer', name: 'Mikimoto Pearl Strand Necklace', description: '8.5mm Akoya pearls, 18K gold clasp, 45cm length.', originalPrice: 4800, emoji: '💎', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80' },
  { id: 14, category: 'ekszer', name: 'Chopard Happy Hearts Bracelet', description: '18K white gold, moving hearts with diamonds. Certificate included.', originalPrice: 11200, emoji: '💎', image: 'https://images.unsplash.com/photo-1573408301185-9519f94815f6?w=600&q=80' },
  { id: 15, category: 'ekszer', name: 'Antique Art Deco Brooch 1920s', description: 'Platinum, old cut diamonds and sapphires. Excellent original condition.', originalPrice: 6500, emoji: '💎', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { id: 16, category: 'ekszer', name: 'Pomellato Nudo Rose Quartz Ring', description: '18K rose gold, large rose quartz cabochon. Original box.', originalPrice: 3800, emoji: '💎', image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80' },
  { id: 17, category: 'divat', name: 'Hermes Birkin 30 Togo Caramel', description: 'Caramel togo leather, palladium hardware. 2022 production, full set.', originalPrice: 12000, emoji: '👜', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80' },
  { id: 18, category: 'divat', name: 'Chanel Classic Flap Medium Caviar', description: 'Black caviar leather, gold hardware, double chain. Full set with card.', originalPrice: 9500, emoji: '👜', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80' },
  { id: 19, category: 'divat', name: 'Louis Vuitton Neverfull MM Monogram', description: 'Classic monogram canvas, beige lining, pouch included.', originalPrice: 1650, emoji: '👜', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80' },
  { id: 20, category: 'divat', name: 'Gucci Horsebit 1955 Shoulder Bag', description: 'GG Supreme canvas, brown leather trim, gold horsebit detail.', originalPrice: 1890, emoji: '👜', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80' },
  { id: 21, category: 'divat', name: 'Prada Re-Edition 2000 Nylon Mini Bag', description: 'Black nylon, triangle logo, adjustable strap. Like new condition.', originalPrice: 980, emoji: '👜', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80' },
  { id: 22, category: 'divat', name: 'Bottega Veneta Jodie Hobo Intrecciato', description: 'Intreccio weave, nude leather, knotted handle. Current season.', originalPrice: 2800, emoji: '👜', image: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=600&q=80' },
  { id: 23, category: 'divat', name: 'Christian Louboutin So Kate 120mm', description: 'Black patent leather, iconic red sole, size 38. Worn once.', originalPrice: 750, emoji: '👠', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80' },
  { id: 24, category: 'divat', name: 'Balenciaga Triple S Sneakers', description: 'White/grey colorway, size 42. Original box and receipt.', originalPrice: 680, emoji: '👟', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80' },
  { id: 25, category: 'jarmuvek', name: 'Ferrari 488 GTB 2017', description: '3.9L twin-turbo V8, 670hp, red exterior, black interior. 18,000km.', originalPrice: 185000, emoji: '🚗', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80' },
  { id: 26, category: 'jarmuvek', name: 'Porsche 911 Carrera S 2020', description: 'Guards Red, PDK, Sport Chrono Package. Full dealer history. 22,000km.', originalPrice: 128000, emoji: '🚗', image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&q=80' },
  { id: 27, category: 'jarmuvek', name: 'Ducati Panigale V4 S 2022', description: 'Red, Ohlins suspension, full titanium exhaust. 4,500km.', originalPrice: 28000, emoji: '🏍️', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id: 28, category: 'jarmuvek', name: 'Harley-Davidson Fat Boy 114 2021', description: 'Vivid Black, Milwaukee-Eight 114, only 6,200km.', originalPrice: 22000, emoji: '🏍️', image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80' },
  { id: 29, category: 'jarmuvek', name: 'Sunseeker Predator 57 Yacht', description: '3 cabin, 2 bathroom, twin Volvo IPS 600. 2018 model. Full service.', originalPrice: 420000, emoji: '🛥️', image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80' },
  { id: 30, category: 'jarmuvek', name: 'Lamborghini Huracan Evo 2019', description: 'Arancio Borealis, LP 640-4, carbon fiber package. 14,000km.', originalPrice: 210000, emoji: '🚗', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80' },
  { id: 31, category: 'jarmuvek', name: 'Cessna 172 Skyhawk 2015', description: 'Garmin G1000 avionics, 1,200 hours TT. Hangared, excellent condition.', originalPrice: 285000, emoji: '✈️', image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&q=80' },
  { id: 32, category: 'jarmuvek', name: 'Rolls-Royce Ghost 2021', description: 'Midnight Sapphire, starlight headliner, bespoke interior. 8,000km.', originalPrice: 320000, emoji: '🚗', image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&q=80' },
  { id: 33, category: 'muveszet', name: 'Hungarian Secession Oil Painting 1920', description: 'Unknown master, oil on canvas, original frame. Expert opinion included.', originalPrice: 5000, emoji: '🎨', image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&q=80' },
  { id: 34, category: 'muveszet', name: 'Meissen Porcelain Figurine 18th Century', description: 'Blue crossed swords mark, shepherd and shepherdess pair. Mint condition.', originalPrice: 8500, emoji: '🏺', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80' },
  { id: 35, category: 'muveszet', name: 'Sterling Silver Centerpiece 1890s', description: 'English hallmarked silver, elaborate floral design. 2.4kg total weight.', originalPrice: 4200, emoji: '🥈', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&q=80' },
  { id: 36, category: 'muveszet', name: 'Contemporary Abstract Canvas 2020', description: 'Large format 150x200cm, acrylic and mixed media. Signed certificate.', originalPrice: 3800, emoji: '🎨', image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80' },
  { id: 37, category: 'muveszet', name: 'Bronze Sculpture Art Nouveau Figure', description: 'Patinated bronze, marble base, 45cm height. Signed by artist.', originalPrice: 12000, emoji: '🗿',image: 'https://images.unsplash.com/photo-1561839561-b13bcfe95249?w=600&q=80'
  { id: 38, category: 'muveszet', name: 'Tiffany Style Stained Glass Lamp', description: 'Leaded glass shade, dragonfly motif, original patina base. 1920s.', originalPrice: 6800, emoji: '💡', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80'
  { id: 39, category: 'muveszet', name: 'Watercolor Landscape by Listed Artist', description: '40x60cm, framed, signed. Provenance documentation included.', originalPrice: 2800, emoji: '🎨', image: image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80'
  { id: 40, category: 'muveszet', name: 'Chinese Tang Dynasty Horse Replica', description: 'Museum quality reproduction, certificate of authenticity. 38cm.', originalPrice: 1800, emoji: '🏺', image: 'https://images.unsplash.com/photo-1618331835717-801e976234b8?w=600&q=80'
  { id: 41, category: 'butor', name: 'Louis XVI Gilded Console Table', description: 'Original 18th century, marble top, gilt wood. Fully restored.', originalPrice: 14000, emoji: '🪑', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
  { id: 42, category: 'butor', name: 'Eames Lounge Chair and Ottoman', description: 'Herman Miller original, rosewood veneer, black leather. 2019.', originalPrice: 6800, emoji: '🪑', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
  { id: 43, category: 'butor', name: 'Art Deco Walnut Dining Set 1930s', description: 'Table and 8 chairs, original upholstery, minor restoration.', originalPrice: 9500, emoji: '🍽️', image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=600&q=80' },
  { id: 44, category: 'butor', name: 'Knoll Barcelona Chair and Ottoman', description: 'Original Knoll production, white leather, stainless frame. 2021.', originalPrice: 7200, emoji: '🪑', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80' },
  { id: 45, category: 'butor', name: 'Victorian Mahogany Bookcase', description: 'Original glass doors, adjustable shelves, key included. 210cm height.', originalPrice: 3200, emoji: '📚', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
  { id: 46, category: 'butor', name: 'Cassina LC4 Chaise Longue', description: 'Le Corbusier design, pony skin, chrome frame. Original Cassina.', originalPrice: 5400, emoji: '🛋️', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80' },
  { id: 47, category: 'butor', name: 'Biedermeier Cherry Wood Secretaire', description: 'Early 19th century, original fittings, excellent patina.', originalPrice: 7800, emoji: '🪑', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80' },
  { id: 48, category: 'butor', name: 'Murano Glass Chandelier 24-light', description: 'Hand blown Murano glass, gold finish frame. 80cm diameter.', originalPrice: 4800, emoji: '💡', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80' },
  { id: 49, category: 'mobil', name: 'iPhone 15 Pro Max 256GB Natural Titanium', description: 'Factory sealed, unlocked, international warranty. A17 Pro chip.', originalPrice: 1350, emoji: '📱', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80' },
  { id: 50, category: 'mobil', name: 'Samsung Galaxy S24 Ultra 512GB', description: 'Titanium Black, S Pen included, unlocked. Sealed box.', originalPrice: 1280, emoji: '📱', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80' },
  { id: 51, category: 'mobil', name: 'Google Pixel 8 Pro 128GB', description: 'Obsidian, factory unlocked, 7 years of updates guaranteed.', originalPrice: 890, emoji: '📱', image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80' },
  { id: 52, category: 'mobil', name: 'OnePlus 12 256GB Silky Black', description: 'Snapdragon 8 Gen 3, 100W charging, Hasselblad camera. Sealed.', originalPrice: 780, emoji: '📱', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80' },
  { id: 53, category: 'mobil', name: 'Apple iPhone 14 Pro 128GB Deep Purple', description: 'Unlocked, Dynamic Island, 48MP camera. Excellent condition.', originalPrice: 950, emoji: '📱', image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80' },
  { id: 54, category: 'mobil', name: 'Vertu Signature Touch For Bentley', description: 'Luxury phone, sapphire screen, crocodile leather. Collector item.', originalPrice: 8500, emoji: '📱', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80' },
  { id: 55, category: 'mobil', name: 'Sony Xperia 1 V 256GB', description: '4K OLED display, Zeiss optics, 3.5mm jack. Sealed box.', originalPrice: 1100, emoji: '📱', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80' },
  { id: 56, category: 'mobil', name: 'Motorola Edge 40 Pro 256GB', description: 'Interstellar Black, 125W TurboPower, 165Hz display.', originalPrice: 680, emoji: '📱', image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80' },
  { id: 57, category: 'ingatlan', name: 'Marbella Beachfront Apartment', description: 'Spain, 120sqm, 3 bed, sea view, private pool. Golden Mile location.', originalPrice: 850000, emoji: '🏠', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80' },
  { id: 58, category: 'ingatlan', name: 'Tuscany Stone Farmhouse', description: 'Italy, 350sqm, 5 bed, 2ha land, olive grove. Fully restored.', originalPrice: 1200000, emoji: '🏡', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80' },
  { id: 59, category: 'ingatlan', name: 'Paris 7th Arrondissement Apartment', description: 'France, 95sqm, 2 bed, Eiffel Tower view. Haussmann building.', originalPrice: 1850000, emoji: '🏢', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80' },
  { id: 60, category: 'ingatlan', name: 'Budapest Castle District Penthouse', description: 'Hungary, 280sqm, 4 bed, rooftop terrace, panoramic view.', originalPrice: 980000, emoji: '🏙️', image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&q=80' },
  { id: 61, category: 'ingatlan', name: 'Algarve Cliffside Villa', description: 'Portugal, 400sqm, 6 bed, infinity pool, ocean view. Private plot.', originalPrice: 2400000, emoji: '🏖️', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80' },
  { id: 62, category: 'ingatlan', name: 'Santorini Caldera View Villa', description: 'Greece, 200sqm, 4 bed, private pool, caldera view. Oia location.', originalPrice: 1650000, emoji: '🏝️', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80' },
  { id: 63, category: 'ingatlan', name: 'Dubrovnik Waterfront Stone House', description: 'Croatia, 180sqm, 3 bed, private jetty, sea view. Historic old town.', originalPrice: 1100000, emoji: '⛵', image: 'https://images.unsplash.com/photo-1555990793-da11153b2473?w=600&q=80' },
  { id: 64, category: 'ingatlan', name: 'Dubai Marina Penthouse', description: 'UAE, 450sqm, 5 bed, private pool, marina view. Fully furnished.', originalPrice: 3200000, emoji: '🌆', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80' },
]

function computeCurrentPrice(product, biddersCount) {
  const step = getBidStep(product.originalPrice)
  const drop = biddersCount * step
  return Math.max(0, product.originalPrice - drop)
}

const initialBidStates = {}
INITIAL_PRODUCTS.forEach(p => {
  const biddersCount = Math.floor(Math.random() * 15) + 2
  initialBidStates[p.id] = {
    biddersCount,
    currentPrice: computeCurrentPrice(p, biddersCount),
    joined: false,
    buying: false,
    timerSeconds: 300,
    sold: false,
    soldPrice: null,
  }
})

export const useBidStore = create((set, get) => ({
  products: INITIAL_PRODUCTS,
  bidStates: initialBidStates,
  activeCategory: 'all',
  lang: 'hu',
  currency: 'EUR',

  setCategory: (cat) => set({ activeCategory: cat }),
  setLang: (lang) => set({ lang }),
  setCurrency: (currency) => set({ currency }),

  joinBid: (productId) => {
    const state = get().bidStates[productId]
    if (state.joined) return
    const product = get().products.find(p => p.id === productId)
    const step = getBidStep(product.originalPrice)
    set(s => ({
      bidStates: {
        ...s.bidStates,
        [productId]: {
          ...s.bidStates[productId],
          joined: true,
          biddersCount: s.bidStates[productId].biddersCount + 1,
          currentPrice: Math.max(0, s.bidStates[productId].currentPrice - step),
        }
      }
    }))
  },

  externalBid: (productId) => {
    const state = get().bidStates[productId]
    if (state.sold) return
    const product = get().products.find(p => p.id === productId)
    const step = getBidStep(product.originalPrice)
    set(s => ({
      bidStates: {
        ...s.bidStates,
        [productId]: {
          ...s.bidStates[productId],
          biddersCount: s.bidStates[productId].biddersCount + 1,
          currentPrice: Math.max(0, s.bidStates[productId].currentPrice - step),
        }
      }
    }))
  },

  startBuy: (productId) => {
    set(s => ({
      bidStates: {
        ...s.bidStates,
        [productId]: { ...s.bidStates[productId], buying: true, timerSeconds: 300 }
      }
    }))
  },

  cancelBuy: (productId) => {
    set(s => ({
      bidStates: {
        ...s.bidStates,
        [productId]: { ...s.bidStates[productId], buying: false, timerSeconds: 300 }
      }
    }))
  },

  tickTimer: (productId) => {
    const state = get().bidStates[productId]
    if (!state.buying) return
    const newVal = state.timerSeconds - 1
    if (newVal <= 0) {
      set(s => ({
        bidStates: {
          ...s.bidStates,
          [productId]: { ...s.bidStates[productId], buying: false, timerSeconds: 300 }
        }
      }))
    } else {
      set(s => ({
        bidStates: {
          ...s.bidStates,
          [productId]: { ...s.bidStates[productId], timerSeconds: newVal }
        }
      }))
    }
  },

  completePurchase: (productId) => {
    const state = get().bidStates[productId]
    set(s => ({
      bidStates: {
        ...s.bidStates,
        [productId]: {
          ...s.bidStates[productId],
          sold: true,
          buying: false,
          soldPrice: state.currentPrice,
        }
      }
    }))
  },

  getFiltered: () => {
    const { products, activeCategory } = get()
    if (activeCategory === 'all') return products
    return products.filter(p => p.category === activeCategory)
  },

  getByCategory: (catId) => {
    return get().products.filter(p => p.category === catId)
  },
}))
