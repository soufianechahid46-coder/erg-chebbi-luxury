import type { ExperienceOffer } from '@/types/offer';

const offer: ExperienceOffer = {
  "slug": "quad-adventure-2-hours",
  "category": "quad",
  "featured": false,
  "title": {
    "en": "Quad Adventure · 2 Hours",
    "fr": "Aventure en quad · 2 heures",
    "es": "Aventura en quad · 2 horas",
    "ar": "مغامرة كواد · ساعتان"
  },
  "subtitle": {
    "en": "A broader dune circuit with deeper desert scenery",
    "fr": "Un circuit plus large au cœur des dunes",
    "es": "Un circuito más amplio con paisajes más profundos",
    "ar": "مسار أوسع داخل الكثبان بمناظر أكثر عمقاً"
  },
  "description": {
    "en": "A longer ride that reaches quieter sections of the dunes and gives more time for scenic pauses.",
    "fr": "Une expérience plus longue vers des secteurs plus calmes des dunes, avec davantage de pauses photos.",
    "es": "Una experiencia más larga que llega a zonas más tranquilas y ofrece más tiempo para paradas.",
    "ar": "جولة أطول تصل إلى مناطق أهدأ من الكثبان مع وقت إضافي للتوقفات التصويرية."
  },
  "duration": {
    "en": "2 hours",
    "fr": "2 heures",
    "es": "2 horas",
    "ar": "ساعتان"
  },
  "audience": {
    "en": "Adventure travelers, friends, private couples",
    "fr": "Voyageurs d’aventure, amis, couples privés",
    "es": "Viajeros aventureros, amigos, parejas privadas",
    "ar": "المغامرون والأصدقاء والأزواج"
  },
  "fromPrice": 120,
  "pricingModel": "per_person",
  "location": "Erg Chebbi wider dunes",
  "coverImage": "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80",
  "gallery": [
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
  ],
  "includes": {
    "en": [
      "Extended route",
      "Guide",
      "Helmet and goggles"
    ],
    "fr": [
      "Parcours étendu",
      "Guide",
      "Casque et lunettes"
    ],
    "es": [
      "Ruta extendida",
      "Guía",
      "Casco y gafas"
    ],
    "ar": [
      "مسار ممتد",
      "مرشد",
      "خوذة ونظارات"
    ]
  },
  "addons": [
    {
      "key": "sunset_upgrade",
      "label": {
        "en": "Sunset timing upgrade",
        "fr": "Option coucher du soleil",
        "es": "Opción al atardecer",
        "ar": "ترقية توقيت الغروب"
      },
      "price": 20
    }
  ]
};

export default offer;
