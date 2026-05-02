import { create } from 'zustand'
 
export const SUBCATEGORIES = {
  orak: ['All Watches', "Men's Watches", "Ladies' Watches", 'Antique Watches', 'Pocket Watches', 'Sports Watches', 'Luxury Watches'],
  ekszer: ['All Jewellery', 'Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Brooches', 'Antique Jewellery'],
  divat: ['All Fashion', 'Handbags', 'Shoes', 'Clothing', 'Accessories', 'Designer', 'Vintage Fashion'],
  jarmuvek: ['All Vehicles', 'Cars', 'Motorcycles', 'Boats and Yachts', 'Aircraft', 'Classic Cars', 'Sports Cars'],
  muveszet: ['All Art', 'Paintings', 'Sculptures', 'Prints', 'Photography', 'Ceramics', 'Silver and Gold'],
  butor: ['All Furniture', 'Chairs and Seating', 'Tables', 'Storage', 'Lighting', 'Mirrors', 'Antique Furniture'],
  mobil: ['All Phones', 'iPhone', 'Samsung', 'Google Pixel', 'Luxury Phones', 'Vintage Phones', 'Accessories'],
  muszaki: ['All Electronics', 'Cameras', 'Audio', 'TV and Video', 'Kitchen', 'Smart Home', 'Vintage Electronics'],
  szamtech: ['All Computing', 'Laptops', 'Desktops', 'Tablets', 'Software', 'Accessories', 'Vintage Computing'],
  gyujtheto: ['All Collectibles', 'Coins and Stamps', 'Sports Memorabilia', 'Toys and Games', 'Trading Cards', 'Wine and Spirits', 'Manuscripts', 'Vinyl Records All', 'Vinyl Records Rock Pop', 'Vinyl Records Jazz Blues', 'Vinyl Records Classical'],
  jatekok: ['All Games', 'Video Games', 'Board Games', 'Trading Cards', 'Vintage Games', 'Consoles', 'Limited Editions'],
  sport: ['All Sport', 'Golf', 'Tennis', 'Cycling', 'Winter Sports', 'Water Sports', 'Fitness Equipment'],
  otthon: ['All Home', 'Decorative Objects', 'Rugs and Carpets', 'Clocks', 'Candles and Fragrance', 'Textiles', 'Garden'],
  konyvek: ['All Books', 'First Editions', 'Manuscripts', 'Art Books', 'Signed Copies', 'Antique Books', 'Maps and Atlases'],
  ipari: ['All Industrial', 'Machinery', 'Tools', 'Scientific Instruments', 'Vintage Industrial', 'Signs and Displays', 'Factory Equipment'],
  szepseg: ['All Beauty', 'Skincare', 'Perfume', 'Vintage Cosmetics', 'Grooming', 'Spa Equipment', 'Vintage Perfume'],
  ingatlan: ['All Properties', 'Spain Apartment', 'Spain Villa', 'Spain Penthouse', 'Italy Apartment', 'Italy Villa', 'Italy Farmhouse', 'France Apartment', 'France Chateau', 'Hungary Apartment', 'Hungary House', 'Portugal Villa', 'Greece Villa', 'Croatia Villa', 'UAE Penthouse', 'USA House', 'Switzerland Chalet', 'UK Country Estate'],
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
  { id: 1, category: 'orak', name: 'Omega Seamaster Diver 300m 42mm', description: 'Steel bracelet, blue dial, automatic movement. 2023 production, original box.', originalPrice: 5600, image: 'https://source.unsplash.com/600x400/?omega,seamaster,watch' },
  { id: 2, category: 'orak', name: 'Rolex Datejust 36mm White Gold', description: 'White gold, diamond bezel, jubilee bracelet. Full set with papers.', originalPrice: 18500, image: 'https://source.unsplash.com/600x400/?rolex,watch,luxury' },
  { id: 3, category: 'orak', name: 'Patek Philippe Calatrava Vintage 1960s', description: 'Rose gold case, original leather strap, manual wind. Collector condition.', originalPrice: 42000, image: 'https://source.unsplash.com/600x400/?patek,philippe,watch,gold' },
  { id: 4, category: 'orak', name: 'Cartier Tank Must de Cartier Ladies', description: 'Gold plated, sapphire crown, original box and papers. Mint condition.', originalPrice: 3200, image: 'https://source.unsplash.com/600x400/?cartier,watch,gold,ladies' },
  { id: 5, category: 'orak', name: 'IWC Portugieser Chronograph', description: 'Stainless steel, silver dial, leather strap. IWC service history.', originalPrice: 7800, image: 'https://source.unsplash.com/600x400/?iwc,chronograph,watch,steel' },
  { id: 6, category: 'orak', name: 'Panerai Luminor Marina PAM01359', description: '44mm steel case, blue dial, leather strap. Manual wind, 3 days power reserve.', originalPrice: 8200, image: 'https://source.unsplash.com/600x400/?panerai,luminor,watch,italian' },
  { id: 7, category: 'orak', name: 'TAG Heuer Carrera Chronograph', description: '42mm steel case, black dial, racing heritage. Full set with papers.', originalPrice: 4800, image: 'https://source.unsplash.com/600x400/?tag,heuer,watch,racing,chronograph' },
  { id: 8, category: 'orak', name: 'Longines Master Collection Moonphase', description: '40mm steel, silver dial, moonphase display, alligator strap. Full set.', originalPrice: 2800, image: 'https://source.unsplash.com/600x400/?longines,watch,moonphase,elegant' },
  { id: 9, category: 'orak', name: 'Vacheron Constantin Patrimony', description: 'White gold, ultra-thin movement, alligator strap. 2020 production.', originalPrice: 28000, image: 'https://source.unsplash.com/600x400/?vacheron,watch,luxury,ultrathin' },
  { id: 10, category: 'ekszer', name: 'Tiffany and Co Soleste Engagement Ring', description: '18K white gold, 0.85ct diamond, original box and certificate.', originalPrice: 8000, image: 'https://source.unsplash.com/600x400/?tiffany,diamond,engagement,ring' },
  { id: 11, category: 'ekszer', name: 'Cartier Love Bracelet Yellow Gold', description: '18K yellow gold, 4 diamond version, original screwdriver and box.', originalPrice: 12500, image: 'https://source.unsplash.com/600x400/?cartier,love,bracelet,gold,jewellery' },
  { id: 12, category: 'ekszer', name: 'Van Cleef Alhambra Necklace', description: 'Yellow gold, malachite motifs, 20 motif long necklace.', originalPrice: 9800, image: 'https://source.unsplash.com/600x400/?gold,necklace,luxury,jewellery,pendant' },
  { id: 13, category: 'ekszer', name: 'Bulgari Serpenti Viper Ring', description: '18K rose gold, pave diamonds, size 54. Original packaging.', originalPrice: 7200, image: 'https://source.unsplash.com/600x400/?bulgari,ring,diamond,luxury,gold' },
  { id: 14, category: 'ekszer', name: 'Mikimoto Pearl Strand Necklace', description: '8.5mm Akoya pearls, 18K gold clasp, 45cm length.', originalPrice: 4800, image: 'https://source.unsplash.com/600x400/?pearl,necklace,mikimoto,strand,jewellery' },
  { id: 15, category: 'ekszer', name: 'Diamond Eternity Ring Platinum', description: 'Platinum, 2.5ct total diamond weight, F color VS1 clarity.', originalPrice: 9500, image: 'https://source.unsplash.com/600x400/?diamond,ring,platinum,eternity,luxury' },
  { id: 16, category: 'ekszer', name: 'Antique Art Deco Brooch 1920s', description: 'Platinum, old cut diamonds and sapphires. Excellent original condition.', originalPrice: 6500, image: 'https://source.unsplash.com/600x400/?art,deco,brooch,antique,jewellery' },
  { id: 17, category: 'ekszer', name: 'Sapphire and Diamond Earrings', description: '18K white gold, 3ct Ceylon sapphires, diamond halos. GIA certified.', originalPrice: 11000, image: 'https://source.unsplash.com/600x400/?sapphire,earrings,diamond,luxury,jewellery' },
  { id: 18, category: 'ekszer', name: 'Emerald Cut Diamond Pendant', description: '18K yellow gold, 1.2ct emerald cut diamond, GIA F VS1.', originalPrice: 5800, image: 'https://source.unsplash.com/600x400/?diamond,pendant,emerald,cut,gold' },
  { id: 19, category: 'divat', name: 'Hermes Birkin 30 Togo Caramel', description: 'Caramel togo leather, palladium hardware. 2022 production, full set.', originalPrice: 12000, image: 'https://source.unsplash.com/600x400/?hermes,birkin,luxury,bag,leather' },
  { id: 20, category: 'divat', name: 'Chanel Classic Flap Medium Caviar', description: 'Black caviar leather, gold hardware, double chain. Full set with card.', originalPrice: 9500, image: 'https://source.unsplash.com/600x400/?chanel,classic,flap,bag,black' },
  { id: 21, category: 'divat', name: 'Louis Vuitton Neverfull MM Monogram', description: 'Classic monogram canvas, beige lining, pouch included.', originalPrice: 1650, image: 'https://source.unsplash.com/600x400/?louis,vuitton,neverfull,monogram,bag' },
  { id: 22, category: 'divat', name: 'Gucci Horsebit 1955 Shoulder Bag', description: 'GG Supreme canvas, brown leather trim, gold horsebit detail.', originalPrice: 1890, image: 'https://source.unsplash.com/600x400/?gucci,shoulder,bag,luxury,fashion' },
  { id: 23, category: 'divat', name: 'Prada Re-Edition 2000 Nylon Mini Bag', description: 'Black nylon, triangle logo, adjustable strap. Like new condition.', originalPrice: 980, image: 'https://source.unsplash.com/600x400/?prada,nylon,bag,mini,black' },
  { id: 24, category: 'divat', name: 'Bottega Veneta Jodie Hobo', description: 'Intreccio weave, nude leather, knotted handle. Current season.', originalPrice: 2800, image: 'https://source.unsplash.com/600x400/?bottega,veneta,intrecciato,leather,bag' },
  { id: 25, category: 'divat', name: 'Christian Louboutin So Kate 120mm', description: 'Black patent leather, iconic red sole, size 38. Worn once.', originalPrice: 750, image: 'https://source.unsplash.com/600x400/?louboutin,heels,red,sole,luxury,shoes' },
  { id: 26, category: 'divat', name: 'Balenciaga Triple S Sneakers', description: 'White and grey colorway, size 42. Original box and receipt.', originalPrice: 680, image: 'https://source.unsplash.com/600x400/?balenciaga,triple,sneakers,fashion,shoes' },
  { id: 27, category: 'divat', name: 'Dior Lady Dior Medium Cannage', description: 'Black lambskin, gold hardware, full set with dustbag.', originalPrice: 5200, image: 'https://source.unsplash.com/600x400/?dior,lady,bag,black,luxury' },
  { id: 28, category: 'jarmuvek', name: 'Ferrari 488 GTB 2017', description: '3.9L twin-turbo V8, 670hp, red exterior, black interior. 18000km.', originalPrice: 185000, image: 'https://source.unsplash.com/600x400/?ferrari,488,red,supercar,italian' },
  { id: 29, category: 'jarmuvek', name: 'Porsche 911 Carrera S 2020', description: 'Guards Red, PDK, Sport Chrono Package. Full dealer history. 22000km.', originalPrice: 128000, image: 'https://source.unsplash.com/600x400/?porsche,911,carrera,sports,car' },
  { id: 30, category: 'jarmuvek', name: 'Ducati Panigale V4 S 2022', description: 'Red, Ohlins suspension, full titanium exhaust. 4500km.', originalPrice: 28000, image: 'https://source.unsplash.com/600x400/?ducati,motorcycle,red,italian,sports' },
  { id: 31, category: 'jarmuvek', name: 'Harley-Davidson Fat Boy 114 2021', description: 'Vivid Black, Milwaukee-Eight 114, only 6200km.', originalPrice: 22000, image: 'https://source.unsplash.com/600x400/?harley,davidson,motorcycle,american,classic' },
  { id: 32, category: 'jarmuvek', name: 'Sunseeker Predator 57 Yacht', description: '3 cabin, 2 bathroom, twin Volvo IPS 600. 2018 model. Full service.', originalPrice: 420000, image: 'https://source.unsplash.com/600x400/?yacht,luxury,boat,ocean,motor' },
  { id: 33, category: 'jarmuvek', name: 'Lamborghini Huracan Evo 2019', description: 'Arancio Borealis, LP 640-4, carbon fiber package. 14000km.', originalPrice: 210000, image: 'https://source.unsplash.com/600x400/?lamborghini,huracan,orange,supercar' },
  { id: 34, category: 'jarmuvek', name: 'Rolls-Royce Ghost 2021', description: 'Midnight Sapphire, starlight headliner, bespoke interior. 8000km.', originalPrice: 320000, image: 'https://source.unsplash.com/600x400/?rolls,royce,luxury,car,british' },
  { id: 35, category: 'jarmuvek', name: 'Cessna 172 Skyhawk 2015', description: 'Garmin G1000 avionics, 1200 hours TT. Hangared, excellent condition.', originalPrice: 285000, image: 'https://source.unsplash.com/600x400/?cessna,small,aircraft,plane,aviation' },
  { id: 36, category: 'jarmuvek', name: 'Bugatti Chiron Sport 2019', description: '8.0L quad-turbo W16, 1500hp, ceramic brakes. Only 2500km.', originalPrice: 2800000, image: 'https://source.unsplash.com/600x400/?bugatti,chiron,hypercar,luxury,fast' },
  { id: 37, category: 'muveszet', name: 'Hungarian Secession Oil Painting 1920', description: 'Unknown master, oil on canvas, original frame. Expert opinion included.', originalPrice: 5000, image: 'https://source.unsplash.com/600x400/?oil,painting,art,canvas,frame' },
  { id: 38, category: 'muveszet', name: 'Meissen Porcelain Figurine 18th Century', description: 'Blue crossed swords mark, shepherd and shepherdess pair. Mint condition.', originalPrice: 8500, image: 'https://source.unsplash.com/600x400/?porcelain,figurine,antique,meissen,ceramic' },
  { id: 39, category: 'muveszet', name: 'Sterling Silver Centerpiece 1890s', description: 'English hallmarked silver, elaborate floral design. 2.4kg total weight.', originalPrice: 4200, image: 'https://source.unsplash.com/600x400/?sterling,silver,antique,centerpiece,english' },
  { id: 40, category: 'muveszet', name: 'Large Abstract Oil Canvas 2021', description: 'Large format 150x200cm, oil on canvas. Signed certificate of authenticity.', originalPrice: 3800, image: 'https://source.unsplash.com/600x400/?abstract,art,canvas,painting,contemporary' },
  { id: 41, category: 'muveszet', name: 'Art Nouveau Bronze Female Figure', description: 'Patinated bronze, marble base, 45cm height. Signed by artist.', originalPrice: 12000, image: 'https://source.unsplash.com/600x400/?bronze,sculpture,art,nouveau,figure' },
  { id: 42, category: 'muveszet', name: 'Tiffany Style Stained Glass Lamp', description: 'Leaded glass shade, dragonfly motif, original patina base. 1920s.', originalPrice: 6800, image: 'https://source.unsplash.com/600x400/?stained,glass,lamp,tiffany,antique' },
  { id: 43, category: 'muveszet', name: 'Impressionist Landscape Watercolor', description: '40x60cm, framed, signed. Provenance documentation included.', originalPrice: 2800, image: 'https://source.unsplash.com/600x400/?watercolor,landscape,impressionist,art,framed' },
  { id: 44, category: 'muveszet', name: 'Japanese Edo Period Woodblock Print', description: 'Original Edo period, excellent condition, framed. Authentication certificate.', originalPrice: 4500, image: 'https://source.unsplash.com/600x400/?japanese,woodblock,print,edo,art' },
  { id: 45, category: 'muveszet', name: 'Antique Persian Miniature Painting', description: 'Manuscript page, 16th century, gouache on paper. Museum quality.', originalPrice: 7200, image: 'https://source.unsplash.com/600x400/?persian,miniature,painting,manuscript,antique' },
  { id: 46, category: 'butor', name: 'Louis XVI Gilded Console Table', description: 'Original 18th century, marble top, gilt wood. Fully restored.', originalPrice: 14000, image: 'https://source.unsplash.com/600x400/?antique,console,table,gilded,french' },
  { id: 47, category: 'butor', name: 'Eames Lounge Chair and Ottoman', description: 'Herman Miller original, rosewood veneer, black leather. 2019.', originalPrice: 6800, image: 'https://source.unsplash.com/600x400/?eames,lounge,chair,leather,midcentury' },
  { id: 48, category: 'butor', name: 'Art Deco Walnut Dining Set 1930s', description: 'Table and 8 chairs, original upholstery, minor restoration.', originalPrice: 9500, image: 'https://source.unsplash.com/600x400/?art,deco,dining,table,walnut,antique' },
  { id: 49, category: 'butor', name: 'Knoll Barcelona Chair and Ottoman', description: 'Original Knoll production, white leather, stainless frame. 2021.', originalPrice: 7200, image: 'https://source.unsplash.com/600x400/?barcelona,chair,design,leather,modern' },
  { id: 50, category: 'butor', name: 'Victorian Mahogany Bookcase', description: 'Original glass doors, adjustable shelves, key included. 210cm height.', originalPrice: 3200, image: 'https://source.unsplash.com/600x400/?victorian,bookcase,mahogany,antique,wood' },
  { id: 51, category: 'butor', name: 'Cassina LC4 Chaise Longue', description: 'Le Corbusier design, pony skin, chrome frame. Original Cassina.', originalPrice: 5400, image: 'https://source.unsplash.com/600x400/?chaise,longue,design,corbusier,modern' },
  { id: 52, category: 'butor', name: 'Biedermeier Cherry Wood Secretaire', description: 'Early 19th century, original fittings, excellent patina.', originalPrice: 7800, image: 'https://source.unsplash.com/600x400/?biedermeier,secretaire,antique,wood,furniture' },
  { id: 53, category: 'butor', name: 'Murano Glass Chandelier 24-light', description: 'Hand blown Murano glass, gold finish frame. 80cm diameter.', originalPrice: 4800, image: 'https://source.unsplash.com/600x400/?murano,glass,chandelier,italian,luxury' },
  { id: 54, category: 'butor', name: 'Mid-Century Teak Sideboard 1960s', description: 'Danish design, three sliding doors, original handles. Excellent condition.', originalPrice: 2800, image: 'https://source.unsplash.com/600x400/?teak,sideboard,danish,midcentury,design' },
  { id: 55, category: 'mobil', name: 'iPhone 15 Pro Max 256GB Titanium', description: 'Factory sealed, unlocked, international warranty. A17 Pro chip.', originalPrice: 1350, image: 'https://source.unsplash.com/600x400/?iphone,apple,smartphone,pro,titanium' },
  { id: 56, category: 'mobil', name: 'Samsung Galaxy S24 Ultra 512GB', description: 'Titanium Black, S Pen included, unlocked. Sealed box.', originalPrice: 1280, image: 'https://source.unsplash.com/600x400/?samsung,galaxy,ultra,android,smartphone' },
  { id: 57, category: 'mobil', name: 'Google Pixel 8 Pro 128GB', description: 'Obsidian, factory unlocked, 7 years of updates guaranteed.', originalPrice: 890, image: 'https://source.unsplash.com/600x400/?google,pixel,android,smartphone,obsidian' },
  { id: 58, category: 'mobil', name: 'OnePlus 12 256GB Silky Black', description: 'Snapdragon 8 Gen 3, 100W charging, Hasselblad camera. Sealed.', originalPrice: 780, image: 'https://source.unsplash.com/600x400/?oneplus,android,smartphone,black,fast' },
  { id: 59, category: 'mobil', name: 'Apple iPhone 14 Pro 128GB Purple', description: 'Unlocked, Dynamic Island, 48MP camera. Excellent condition.', originalPrice: 950, image: 'https://source.unsplash.com/600x400/?iphone,14,pro,purple,apple,smartphone' },
  { id: 60, category: 'mobil', name: 'Vertu Signature Touch For Bentley', description: 'Luxury phone, sapphire screen, crocodile leather. Collector item.', originalPrice: 8500, image: 'https://source.unsplash.com/600x400/?luxury,phone,leather,premium,exclusive' },
  { id: 61, category: 'mobil', name: 'Sony Xperia 1 V 256GB', description: '4K OLED display, Zeiss optics, 3.5mm jack. Sealed box.', originalPrice: 1100, image: 'https://source.unsplash.com/600x400/?sony,xperia,smartphone,camera,zeiss' },
  { id: 62, category: 'mobil', name: 'Motorola Edge 40 Pro 256GB', description: 'Interstellar Black, 125W TurboPower, 165Hz display.', originalPrice: 680, image: 'https://source.unsplash.com/600x400/?motorola,edge,android,smartphone,black' },
  { id: 63, category: 'mobil', name: 'Xiaomi 14 Ultra 512GB Black', description: 'Leica Summilux camera, Snapdragon 8 Gen 3, ceramic back. Sealed.', originalPrice: 1200, image: 'https://source.unsplash.com/600x400/?xiaomi,ultra,leica,camera,smartphone' },
  { id: 64, category: 'muszaki', name: 'Sony A7R V Full-Frame Camera', description: '61MP sensor, 8K video, dual card slot. Boxed, 500 exposures.', originalPrice: 3800, image: 'https://source.unsplash.com/600x400/?sony,mirrorless,camera,fullframe,professional' },
  { id: 65, category: 'muszaki', name: 'Canon EOS R5 Mirrorless Camera', description: '45MP, 8K RAW video, IBIS. Original box with accessories.', originalPrice: 3200, image: 'https://source.unsplash.com/600x400/?canon,eos,mirrorless,camera,professional' },
  { id: 66, category: 'muszaki', name: 'Bose 700 Noise Cancelling Headphones', description: 'Premium ANC, 20hr battery, voice assistant. Like new condition.', originalPrice: 380, image: 'https://source.unsplash.com/600x400/?bose,headphones,wireless,noise,cancelling' },
  { id: 67, category: 'muszaki', name: 'Sony WH-1000XM5 Headphones', description: 'Industry leading ANC, 30hr battery, multipoint. Sealed box.', originalPrice: 350, image: 'https://source.unsplash.com/600x400/?sony,headphones,wireless,premium,anc' },
  { id: 68, category: 'muszaki', name: 'Apple HomePod 2nd Generation', description: 'Spatial audio, room sensing, smart home hub. Sealed box.', originalPrice: 299, image: 'https://source.unsplash.com/600x400/?apple,smart,speaker,home,audio' },
  { id: 69, category: 'muszaki', name: 'Sonos Arc Premium Soundbar', description: 'Dolby Atmos, 11 drivers, WiFi and HDMI eARC. Sealed box.', originalPrice: 980, image: 'https://source.unsplash.com/600x400/?sonos,soundbar,speaker,dolby,atmos' },
  { id: 70, category: 'muszaki', name: 'Nikon Z9 Flagship Mirrorless', description: '45.7MP stacked CMOS, 8K video, no blackout shooting. Full set.', originalPrice: 5400, image: 'https://source.unsplash.com/600x400/?nikon,mirrorless,camera,professional,flagship' },
  { id: 71, category: 'muszaki', name: 'DJI Mavic 3 Pro Drone', description: 'Triple camera Hasselblad, 43min flight time. Fly More combo.', originalPrice: 2200, image: 'https://source.unsplash.com/600x400/?dji,drone,aerial,photography,mavic' },
  { id: 72, category: 'muszaki', name: 'Bang and Olufsen Beosound Level', description: 'Portable speaker, 16hr battery, premium Danish design.', originalPrice: 1200, image: 'https://source.unsplash.com/600x400/?bang,olufsen,speaker,danish,luxury,audio' },
  { id: 73, category: 'szamtech', name: 'Apple MacBook Pro 16 M3 Max', description: '16-core CPU, 40-core GPU, 64GB RAM, 1TB SSD. Sealed box.', originalPrice: 4200, image: 'https://source.unsplash.com/600x400/?macbook,pro,apple,laptop,m3' },
  { id: 74, category: 'szamtech', name: 'Dell XPS 15 OLED 2023', description: 'Intel i9, RTX 4070, 32GB RAM, 1TB SSD. Barely used.', originalPrice: 2800, image: 'https://source.unsplash.com/600x400/?dell,xps,laptop,oled,premium' },
  { id: 75, category: 'szamtech', name: 'iPad Pro 12.9 M2 256GB WiFi', description: 'Liquid Retina XDR, ProMotion, Apple Pencil 2 included.', originalPrice: 1400, image: 'https://source.unsplash.com/600x400/?ipad,pro,apple,tablet,retina' },
  { id: 76, category: 'szamtech', name: 'Apple Mac Studio M2 Ultra', description: '24-core CPU, 60-core GPU, 192GB RAM, 2TB SSD. Sealed.', originalPrice: 5800, image: 'https://source.unsplash.com/600x400/?apple,mac,studio,desktop,computer' },
  { id: 77, category: 'szamtech', name: 'Samsung Galaxy Tab S9 Ultra', description: '14.6 AMOLED, Snapdragon 8 Gen 2, S Pen included. 512GB.', originalPrice: 1200, image: 'https://source.unsplash.com/600x400/?samsung,tablet,android,amoled,spen' },
  { id: 78, category: 'szamtech', name: 'ASUS ROG Zephyrus G16 Gaming', description: 'RTX 4090, i9-13980HX, 32GB RAM, 2TB SSD. ROG seal intact.', originalPrice: 3600, image: 'https://source.unsplash.com/600x400/?gaming,laptop,rog,rgb,powerful' },
  { id: 79, category: 'szamtech', name: 'Apple Studio Display 27 inch', description: '5K Retina, 600 nits, built-in camera and speakers. Original box.', originalPrice: 1750, image: 'https://source.unsplash.com/600x400/?apple,monitor,display,5k,studio' },
  { id: 80, category: 'szamtech', name: 'Lenovo ThinkPad X1 Carbon Gen 11', description: 'Intel i7, 32GB RAM, 1TB SSD, 14 inch IPS. Enterprise spec.', originalPrice: 2200, image: 'https://source.unsplash.com/600x400/?lenovo,thinkpad,business,laptop,carbon' },
  { id: 81, category: 'szamtech', name: 'Sony PlayStation 5 Digital Edition', description: 'Factory sealed, with two DualSense controllers. Latest firmware.', originalPrice: 480, image: 'https://source.unsplash.com/600x400/?playstation,5,gaming,console,sony' },
  { id: 82, category: 'sport', name: 'Titleist TSR3 Driver', description: '9 degree loft, Tensei AV Blue shaft, headcover included.', originalPrice: 580, image: 'https://source.unsplash.com/600x400/?golf,driver,titleist,club,sport' },
  { id: 83, category: 'sport', name: 'Yeti Tundra 65 Hard Cooler', description: 'Premium insulated cooler, keeps ice 5 days, 65L capacity. Desert Tan.', originalPrice: 420, image: 'https://source.unsplash.com/600x400/?yeti,cooler,outdoor,adventure,camping' },
  { id: 84, category: 'sport', name: 'Trek Madone SLR 9 Road Bike', description: 'Carbon frame, Shimano Dura-Ace Di2, size 56. Race ready.', originalPrice: 12000, image: 'https://source.unsplash.com/600x400/?road,bike,carbon,cycling,race' },
  { id: 85, category: 'sport', name: 'Rossignol Hero Elite ST TI Skis', description: '170cm, Tyrolia bindings included, one season used.', originalPrice: 850, image: 'https://source.unsplash.com/600x400/?skis,alpine,skiing,winter,sport' },
  { id: 86, category: 'sport', name: 'Peloton Bike Plus', description: 'HD touchscreen, auto-resistance, weights included. Barely used.', originalPrice: 2200, image: 'https://source.unsplash.com/600x400/?peloton,indoor,cycling,fitness,bike' },
  { id: 87, category: 'sport', name: 'Callaway Apex Pro 21 Iron Set', description: '4-PW steel shafts, tour spec, mint condition with headcovers.', originalPrice: 1200, image: 'https://source.unsplash.com/600x400/?golf,irons,callaway,club,sport' },
  { id: 88, category: 'sport', name: 'O Neill Hyperfreak Fire Wetsuit', description: '4/3mm, chest zip, thermal lining. Size large, worn twice.', originalPrice: 480, image: 'https://source.unsplash.com/600x400/?wetsuit,surfing,ocean,neoprene,sport' },
  { id: 89, category: 'sport', name: 'Specialized S-Works Tarmac SL7', description: 'Carbon frame, SRAM Red AXS, size 56. Competition ready.', originalPrice: 9500, image: 'https://source.unsplash.com/600x400/?specialized,road,bike,carbon,race' },
  { id: 90, category: 'sport', name: 'Concept2 RowErg Performance Rower', description: 'Model D, PM5 monitor, black frame. Professional gym quality.', originalPrice: 1100, image: 'https://source.unsplash.com/600x400/?rowing,machine,gym,fitness,concept2' },
  { id: 91, category: 'otthon', name: 'Hermes Avalon Blanket Cashmere', description: 'Pure cashmere, iconic H pattern, cream and orange. Never used.', originalPrice: 1800, image: 'https://source.unsplash.com/600x400/?cashmere,blanket,luxury,hermes,home' },
  { id: 92, category: 'otthon', name: 'Antique Persian Tabriz Rug 4x6m', description: 'Hand-knotted wool, intricate floral pattern, 350 knots per sq in.', originalPrice: 8500, image: 'https://source.unsplash.com/600x400/?persian,rug,carpet,antique,luxury' },
  { id: 93, category: 'otthon', name: 'Georg Jensen Bernadotte Candleholder', description: 'Sterling silver, 1950s design, set of three. Original box.', originalPrice: 1200, image: 'https://source.unsplash.com/600x400/?silver,candleholder,danish,design,luxury' },
  { id: 94, category: 'otthon', name: 'Baccarat Crystal Vase Rouge', description: 'Mouth blown crystal, iconic red finish, 30cm height. Original box.', originalPrice: 1200, image: 'https://source.unsplash.com/600x400/?crystal,vase,red,luxury,baccarat' },
  { id: 95, category: 'otthon', name: 'Thomas Kinkade Original Oil Study', description: 'Original hand-painted study, cottage scene, 30x40cm. Signed.', originalPrice: 3200, image: 'https://source.unsplash.com/600x400/?oil,painting,cottage,landscape,signed' },
  { id: 96, category: 'otthon', name: 'Fornasetti Architettura Plate Set', description: 'Set of 6 decorative plates, black and white architecture motifs.', originalPrice: 1600, image: 'https://source.unsplash.com/600x400/?decorative,plates,architecture,black,white' },
  { id: 97, category: 'otthon', name: 'Lalique Crystal Vase Bacchantes', description: 'Clear crystal, dancing figures in relief, 24cm height. Signed.', originalPrice: 2800, image: 'https://source.unsplash.com/600x400/?crystal,vase,lalique,luxury,decor' },
  { id: 98, category: 'otthon', name: 'Vintage World Globe Replogle 1960s', description: '30cm diameter, original stand, cartographic detail. Very good condition.', originalPrice: 680, image: 'https://source.unsplash.com/600x400/?globe,world,vintage,antique,decor' },
  { id: 99, category: 'otthon', name: 'Christofle Malmaison Silver Set', description: '72 piece silver-plated cutlery, original case. Service for 12.', originalPrice: 4200, image: 'https://source.unsplash.com/600x400/?silver,cutlery,luxury,dining,christofle' },
  { id: 100, category: 'gyujtheto', name: 'First Edition The Great Gatsby 1925', description: 'F. Scott Fitzgerald, original dust jacket. Near fine condition.', originalPrice: 28000, image: 'https://source.unsplash.com/600x400/?rare,book,first,edition,collectible' },
  { id: 101, category: 'gyujtheto', name: 'Beatles White Album First Press UK', description: 'Original 1968 UK pressing, low number, both LPs VG plus.', originalPrice: 4200, image: 'https://source.unsplash.com/600x400/?vinyl,record,album,music,collectible' },
  { id: 102, category: 'gyujtheto', name: 'Michael Jordan 1986 Fleer Rookie Card', description: 'PSA 8 graded, centered, sharp corners. Investment grade.', originalPrice: 18000, image: 'https://source.unsplash.com/600x400/?sports,card,basketball,collectible,graded' },
  { id: 103, category: 'gyujtheto', name: 'Chateau Petrus 1982 Original Case', description: '12 bottles, original wooden case, provenance documentation.', originalPrice: 45000, image: 'https://source.unsplash.com/600x400/?wine,bordeaux,chateau,bottle,luxury' },
  { id: 104, category: 'gyujtheto', name: 'Match-Worn Ronaldo Jersey 2018', description: 'Portugal national team, signed, match worn. COA from UEFA. Framed.', originalPrice: 4800, image: 'https://source.unsplash.com/600x400/?football,jersey,signed,memorabilia,sport' },
  { id: 105, category: 'gyujtheto', name: 'Roman Silver Denarius 100 AD', description: 'Emperor Trajan, clear portrait, reverse Victory. NGC certified Fine.', originalPrice: 1200, image: 'https://source.unsplash.com/600x400/?roman,coin,ancient,silver,numismatic' },
  { id: 106, category: 'gyujtheto', name: 'Lego Millennium Falcon 75192', description: 'Complete sealed set, 7541 pieces. Factory sealed, current production.', originalPrice: 850, image: 'https://source.unsplash.com/600x400/?lego,star,wars,set,collectible' },
  { id: 107, category: 'gyujtheto', name: 'Miles Davis Kind of Blue Original', description: 'Columbia CL 1355 first pressing 1959. Six-eye label, VG plus condition.', originalPrice: 3200, image: 'https://source.unsplash.com/600x400/?jazz,vinyl,record,music,collectible' },
  { id: 108, category: 'gyujtheto', name: 'Signed Muhammad Ali Photography', description: 'Black and white 16x20, signed in blue marker. COA included.', originalPrice: 2800, image: 'https://source.unsplash.com/600x400/?boxing,signed,photo,sport,memorabilia' },
  { id: 109, category: 'jatekok', name: 'Nintendo Switch OLED Console', description: 'White version, factory sealed. Includes 3 games.', originalPrice: 380, image: 'https://source.unsplash.com/600x400/?nintendo,switch,gaming,console,handheld' },
  { id: 110, category: 'jatekok', name: 'Xbox Series X 1TB Console', description: 'Factory sealed, two controllers, 3 month Game Pass Ultimate.', originalPrice: 550, image: 'https://source.unsplash.com/600x400/?xbox,gaming,console,microsoft,series' },
  { id: 111, category: 'jatekok', name: 'Vintage Atari 2600 Wood Panel', description: 'Original 1977 model, with 20 cartridges, tested and working.', originalPrice: 480, image: 'https://source.unsplash.com/600x400/?retro,gaming,vintage,console,atari' },
  { id: 112, category: 'jatekok', name: 'Magic The Gathering Black Lotus Alpha', description: 'Power 9 card, moderately played condition. BGS graded 6.5.', originalPrice: 8500, image: 'https://source.unsplash.com/600x400/?trading,card,game,collectible,rare' },
  { id: 113, category: 'jatekok', name: 'First Edition Pokemon Base Set Booster Box', description: 'Sealed booster box, 36 packs. Shadowless edition. PSA authenticated.', originalPrice: 22000, image: 'https://source.unsplash.com/600x400/?pokemon,cards,collectible,rare,sealed' },
  { id: 114, category: 'jatekok', name: 'Monopoly Luxury Edition Wooden Box', description: 'Gold plated tokens, leather title cards, solid wood board.', originalPrice: 280, image: 'https://source.unsplash.com/600x400/?board,game,luxury,wooden,monopoly' },
  { id: 115, category: 'jatekok', name: 'Sega Mega Drive Original Console', description: 'Japanese version, complete with controller and 15 games. Tested.', originalPrice: 320, image: 'https://source.unsplash.com/600x400/?sega,retro,gaming,console,vintage' },
  { id: 116, category: 'jatekok', name: 'Nintendo Game Boy Original 1989', description: 'DMG-01, original grey, complete with Tetris. Excellent working condition.', originalPrice: 280, image: 'https://source.unsplash.com/600x400/?gameboy,nintendo,retro,handheld,gaming' },
  { id: 117, category: 'jatekok', name: 'Razer Blade 18 Gaming Laptop', description: 'RTX 4090, i9-13950HX, QHD 240Hz display, 32GB RAM. Mint.', originalPrice: 4200, image: 'https://source.unsplash.com/600x400/?gaming,laptop,rgb,razer,powerful' },
  { id: 118, category: 'konyvek', name: 'First Edition Harry Potter Philosophers Stone', description: 'J.K. Rowling, Bloomsbury 1997, first print. Fine condition.', originalPrice: 45000, image: 'https://source.unsplash.com/600x400/?rare,book,first,edition,vintage' },
  { id: 119, category: 'konyvek', name: 'Signed Hemingway Old Man and the Sea', description: 'First edition 1952, signed presentation copy. Near fine.', originalPrice: 28000, image: 'https://source.unsplash.com/600x400/?antique,book,signed,rare,vintage' },
  { id: 120, category: 'konyvek', name: 'Audubon Birds of America Folio', description: 'Double elephant folio reprint, 435 plates. Limited edition 250.', originalPrice: 8500, image: 'https://source.unsplash.com/600x400/?folio,antique,book,birds,illustration' },
  { id: 121, category: 'konyvek', name: 'Gutenberg Bible Leaf circa 1455', description: 'Single leaf from original Gutenberg Bible. COA from major auction house.', originalPrice: 65000, image: 'https://source.unsplash.com/600x400/?manuscript,bible,antique,rare,medieval' },
  { id: 122, category: 'konyvek', name: 'Complete Works Shakespeare Folio 1623', description: 'Facsimile of First Folio, limited edition 500. Scholar edition.', originalPrice: 4800, image: 'https://source.unsplash.com/600x400/?shakespeare,folio,antique,book,rare' },
  { id: 123, category: 'konyvek', name: 'First Edition James Bond Casino Royale', description: 'Ian Fleming 1953, original dust jacket. Near fine condition. COA included.', originalPrice: 38000, image: 'https://source.unsplash.com/600x400/?spy,thriller,rare,book,first,edition' },
  { id: 124, category: 'konyvek', name: 'Antique World Atlas Mercator 1623', description: 'Original copper engraved maps, hand colored. Full provenance.', originalPrice: 32000, image: 'https://source.unsplash.com/600x400/?antique,atlas,map,vintage,cartography' },
  { id: 125, category: 'konyvek', name: 'Darwin On the Origin of Species 1859', description: 'First edition, first issue. Rebound in period style. VG condition.', originalPrice: 185000, image: 'https://source.unsplash.com/600x400/?science,rare,book,antique,first,edition' },
  { id: 126, category: 'konyvek', name: 'Signed Tolkien Lord of the Rings Set', description: 'First edition three volume set, signed by Tolkien. Very Good condition.', originalPrice: 95000, image: 'https://source.unsplash.com/600x400/?fantasy,rare,book,signed,tolkien,vintage' },
  { id: 127, category: 'ipari', name: 'Leica M6 Film Camera Black', description: 'Classic rangefinder, 0.72 viewfinder, with 50mm Summicron. Serviced.', originalPrice: 4800, image: 'https://source.unsplash.com/600x400/?leica,film,camera,rangefinder,black' },
  { id: 128, category: 'ipari', name: 'Vintage Microscope Zeiss 1920s', description: 'Brass and steel, all original optics, working condition. Museum quality.', originalPrice: 2200, image: 'https://source.unsplash.com/600x400/?microscope,vintage,brass,scientific,antique' },
  { id: 129, category: 'ipari', name: 'Stanley No 45 Combination Plane', description: 'Complete set, all 23 cutters, original box. Excellent condition.', originalPrice: 850, image: 'https://source.unsplash.com/600x400/?vintage,tool,woodworking,plane,antique' },
  { id: 130, category: 'ipari', name: 'Vintage Petrol Pump Shell 1950s', description: 'Original Wayne pump, fully restored, display quality. 180cm height.', originalPrice: 4500, image: 'https://source.unsplash.com/600x400/?vintage,petrol,pump,restored,industrial' },
  { id: 131, category: 'ipari', name: 'Antique Typewriter Underwood No 5', description: 'Fully functional, cleaned and serviced. Original decals intact.', originalPrice: 680, image: 'https://source.unsplash.com/600x400/?typewriter,vintage,antique,underwood,retro' },
  { id: 132, category: 'ipari', name: 'Industrial Loft Pendant Light Set', description: 'Set of 6, factory style, Edison bulbs included. Adjustable height.', originalPrice: 1200, image: 'https://source.unsplash.com/600x400/?industrial,pendant,light,edison,loft' },
  { id: 133, category: 'ipari', name: 'Heidelberg Windmill Letterpress 1960s', description: 'Fully restored platen press, 10x15 inch, new rollers. Print ready condition.', originalPrice: 8500, image: 'https://source.unsplash.com/600x400/?letterpress,printing,press,vintage,machine' },
  { id: 134, category: 'ipari', name: 'Military Compass Brunton Professional', description: 'Surveying quality, lifetime warranty, leather case. Never used.', originalPrice: 420, image: 'https://source.unsplash.com/600x400/?compass,navigation,military,professional,brass' },
  { id: 135, category: 'ipari', name: 'Antique Cash Register NCR 1920s', description: 'Nickel plated brass, working mechanism, display quality.', originalPrice: 3200, image: 'https://source.unsplash.com/600x400/?cash,register,antique,brass,vintage' },
  { id: 136, category: 'szepseg', name: 'Chanel No 5 Vintage 1970s Parfum', description: 'Original sealed bottle, 30ml parfum. Excellent storage condition.', originalPrice: 850, image: 'https://source.unsplash.com/600x400/?chanel,perfume,vintage,bottle,luxury' },
  { id: 137, category: 'szepseg', name: 'Lumenis IPL Photorejuvenation Device', description: 'Professional grade IPL machine, 5 filters, 100000 flashes. Clinic quality.', originalPrice: 3800, image: 'https://source.unsplash.com/600x400/?beauty,machine,laser,professional,clinic' },
  { id: 138, category: 'szepseg', name: 'La Mer Creme Collection Set', description: 'Full size collection, 6 products. Limited holiday edition. Sealed.', originalPrice: 1200, image: 'https://source.unsplash.com/600x400/?skincare,luxury,cream,beauty,collection' },
  { id: 139, category: 'szepseg', name: 'Sisley Supremya Night Serum', description: 'Anti-aging night treatment, 50ml. Luxury skincare. Full unopened.', originalPrice: 580, image: 'https://source.unsplash.com/600x400/?serum,skincare,luxury,antiaging,beauty' },
  { id: 140, category: 'szepseg', name: 'Tom Ford Black Orchid Parfum', description: '250ml pure parfum, bottle edition. Limited production run.', originalPrice: 980, image: 'https://source.unsplash.com/600x400/?perfume,luxury,black,tom,ford,fragrance' },
  { id: 141, category: 'szepseg', name: 'NuFace Trinity Pro Facial Toning', description: 'Professional microcurrent device, 5 attachments, clinic grade. Sealed box.', originalPrice: 580, image: 'https://source.unsplash.com/600x400/?facial,beauty,device,professional,skincare' },
  { id: 142, category: 'szepseg', name: 'Augustinus Bader The Rich Cream', description: 'TFC8 technology, 100ml, full size. Celebrity favorite skincare.', originalPrice: 320, image: 'https://source.unsplash.com/600x400/?luxury,cream,skincare,premium,beauty' },
  { id: 143, category: 'szepseg', name: 'Frederic Malle Portrait of a Lady', description: '100ml EDP, original bottle. One of the world greatest perfumes.', originalPrice: 420, image: 'https://source.unsplash.com/600x400/?perfume,fragrance,luxury,bottle,parfum' },
  { id: 144, category: 'szepseg', name: 'Swiss Clinic Diamond Spa Set', description: 'Full professional spa treatment kit, 8 products. Hotel quality.', originalPrice: 780, image: 'https://source.unsplash.com/600x400/?spa,beauty,treatment,luxury,professional' },
  { id: 145, category: 'ingatlan', name: 'Marbella Beachfront Apartment', description: 'Spain, 120sqm, 3 bed, sea view, private pool. Golden Mile location.', originalPrice: 850000, image: 'https://source.unsplash.com/600x400/?marbella,spain,apartment,beach,luxury' },
  { id: 146, category: 'ingatlan', name: 'Tuscany Stone Farmhouse', description: 'Italy, 350sqm, 5 bed, 2ha land, olive grove. Fully restored.', originalPrice: 1200000, image: 'https://source.unsplash.com/600x400/?tuscany,farmhouse,italy,countryside,stone' },
  { id: 147, category: 'ingatlan', name: 'Paris 7th Arrondissement Apartment', description: 'France, 95sqm, 2 bed, Eiffel Tower view. Haussmann building.', originalPrice: 1850000, image: 'https://source.unsplash.com/600x400/?paris,apartment,eiffel,tower,france' },
  { id: 148, category: 'ingatlan', name: 'Budapest Castle District Penthouse', description: 'Hungary, 280sqm, 4 bed, rooftop terrace, panoramic view.', originalPrice: 980000, image: 'https://source.unsplash.com/600x400/?budapest,castle,penthouse,hungary,rooftop' },
  { id: 149, category: 'ingatlan', name: 'Algarve Cliffside Villa', description: 'Portugal, 400sqm, 6 bed, infinity pool, ocean view. Private plot.', originalPrice: 2400000, image: 'https://source.unsplash.com/600x400/?algarve,portugal,villa,cliff,ocean' },
  { id: 150, category: 'ingatlan', name: 'Santorini Caldera View Villa', description: 'Greece, 200sqm, 4 bed, private pool, caldera view. Oia location.', originalPrice: 1650000, image: 'https://source.unsplash.com/600x400/?santorini,greece,villa,caldera,oia' },
  { id: 151, category: 'ingatlan', name: 'Dubrovnik Waterfront Stone House', description: 'Croatia, 180sqm, 3 bed, private jetty, sea view. Historic old town.', originalPrice: 1100000, image: 'https://source.unsplash.com/600x400/?dubrovnik,croatia,waterfront,old,town' },
  { id: 152, category: 'ingatlan', name: 'Dubai Marina Penthouse', description: 'UAE, 450sqm, 5 bed, private pool, marina view. Fully furnished.', originalPrice: 3200000, image: 'https://source.unsplash.com/600x400/?dubai,marina,penthouse,luxury,uae' },
  { id: 153, category: 'ingatlan', name: 'Swiss Alps Chalet Verbier', description: 'Switzerland, 320sqm, 5 bed, ski in ski out, mountain views.', originalPrice: 4800000, image: 'https://source.unsplash.com/600x400/?verbier,chalet,alps,switzerland,ski' },
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
