import { create } from 'zustand'

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
  { id: 'bakelit', key: 'bakelit' },
  { id: 'jatekok', key: 'jatekok' },
  { id: 'konyvek', key: 'konyvek' },
  { id: 'film', key: 'film' },
  { id: 'ipari', key: 'ipari' },
  { id: 'szepseg', key: 'szepseg' },
]

export const INITIAL_PRODUCTS = [
  {
    id: 1,
    category: 'orak',
    name: 'Omega Seamaster Diver 300m 42mm',
    description: 'Acél szíj, kék számlap, automatikus szerkezet. 2023-as gyártás, eredeti dobozban.',
    originalPrice: 5600,
    
    entryFee: 20,
    emoji: '⌚',
    image: null,
  },
  {
    id: 2,
    category: 'ekszer',
    name: 'Tiffany & Co. Soleste Gyűrű',
    description: '18K fehér arany, 0.85ct gyémánt, eredeti dobozban, tanúsítvánnyal.',
    originalPrice: 8000,
    
    entryFee: 20,
    emoji: '💎',
    image: null,
  },
  {
    id: 3,
    category: 'muveszet',
    name: 'Magyar szecessziós festmény, 1920',
    description: 'Ismeretlen mester — olaj, vászon, eredeti kerettel. Szakértői vélemény mellékelt.',
    originalPrice: 5000,
    
    entryFee: 20,
    emoji: '🎨',
    image: null,
  },
  {
    id: 4,
    category: 'muszaki',
    name: 'Sony A7R V Full-Frame Tükör nélküli',
    description: '61 MP szenzor, 8K videó, dupla kártyafoglalat. Dobozos, 500 expozícióval.',
    originalPrice: 3800,
   
    entryFee: 20,
    emoji: '📷',
    image: null,
  },
  {
    id: 5,
    category: 'divat',
    name: 'Hermès Birkin 30 — Togo Bőr',
    description: 'Caramel színű, palládium vasalat. 2022-es gyártás, teli garnitúrával.',
    originalPrice: 12000,
   
    entryFee: 20,
    emoji: '👜',
    image: null,
  },
  {
    id: 6,
    category: 'bakelit',
    name: 'Pink Floyd — The Wall (1979, 1. kiadás)',
    description: 'Eredeti Columbia kiadás, VG+ állapot, mindkét lemez hibátlan.',
    originalPrice: 480,
    bidStep: 4.80,
    entryFee: 5,
    emoji: '🎵',
    image: null,
  },
]

export function getBidStep(price) {
  if (price <= 1000) return 10
  if (price <= 10000) return 20
  if (price <= 100000) return 50
  if (price <= 1000000) return 100
  if (price <= 2000000) return 200
  return 500
}

function computeCurrentPrice(product, biddersCount) {
  const step = getBidStep(product.originalPrice)
  const drop = biddersCount * step
  return Math.max(0, product.originalPrice - drop)
}
}

const initialBidStates = {}
INITIAL_PRODUCTS.forEach(p => {
  const biddersCount = Math.floor(Math.random() * 40) + 5
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

  setCategory: (cat) => set({ activeCategory: cat }),
  setLang: (lang) => set({ lang }),

  joinBid: (productId) => {
    const state = get().bidStates[productId]
    if (state.joined) return
    const product = get().products.find(p => p.id === productId)
    const newCount = state.biddersCount + 1
    set(s => ({
      bidStates: {
        ...s.bidStates,
        [productId]: {
          ...s.bidStates[productId],
          joined: true,
          biddersCount: newCount,
          currentPrice: computeCurrentPrice(product, newCount),
        }
      }
    }))
  },

  externalBid: (productId) => {
    const state = get().bidStates[productId]
    if (state.sold) return
    const product = get().products.find(p => p.id === productId)
    const newCount = state.biddersCount + 1
    set(s => ({
      bidStates: {
        ...s.bidStates,
        [productId]: {
          ...s.bidStates[productId],
          biddersCount: newCount,
          currentPrice: computeCurrentPrice(product, newCount),
        }
      }
    }))
  },

  startBuy: (productId) => {
    set(s => ({
      bidStates: {
        ...s.bidStates,
        [productId]: {
          ...s.bidStates[productId],
          buying: true,
          timerSeconds: 300,
        }
      }
    }))
  },

  cancelBuy: (productId) => {
    set(s => ({
      bidStates: {
        ...s.bidStates,
        [productId]: {
          ...s.bidStates[productId],
          buying: false,
          timerSeconds: 300,
        }
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
          [productId]: {
            ...s.bidStates[productId],
            buying: false,
            timerSeconds: 300,
          }
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
}))
