import type { ExperienceOffer } from '@/types/offer';

const offer: ExperienceOffer = {
  "slug": "luxury-camp-1-night",
  "category": "camp",
  "featured": true,
  "title": {
    "en": "Luxury Desert Camp · 1 Night",
    "fr": "Camp de luxe dans le désert · 1 nuit",
    "es": "Campamento de lujo en el desierto · 1 noche",
    "ar": "مخيم صحراوي فاخر · ليلة واحدة"
  },
  "subtitle": {
    "en": "An elegant overnight stay beneath the Sahara stars",
    "fr": "Une nuit élégante sous les étoiles du Sahara",
    "es": "Una noche elegante bajo las estrellas del Sáhara",
    "ar": "إقامة أنيقة تحت نجوم الصحراء"
  },
  "description": {
    "en": "A refined camp escape with dinner, breakfast, atmospheric lighting, and the stillness of the dunes.",
    "fr": "Une parenthèse raffinée avec dîner, petit-déjeuner, lumière d’ambiance et silence des dunes.",
    "es": "Una escapada refinada con cena, desayuno, ambiente íntimo y el silencio de las dunas.",
    "ar": "إقامة راقية مع عشاء وفطور وأجواء هادئة وسط سكون الكثبان."
  },
  "duration": {
    "en": "1 night",
    "fr": "1 nuit",
    "es": "1 noche",
    "ar": "ليلة واحدة"
  },
  "audience": {
    "en": "Couples, honeymooners, private travelers",
    "fr": "Couples, lunes de miel, voyageurs privés",
    "es": "Parejas, lunas de miel, viajeros privados",
    "ar": "الأزواج وشهر العسل والمسافرون الباحثون عن الخصوصية"
  },
  "fromPrice": 180,
  "pricingModel": "nightly",
  "location": "Luxury Camp, Erg Chebbi",
  "coverImage": "https://images.pexels.com/photos/2487718/pexels-photo-2487718.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "gallery": [
    "https://images.pexels.com/photos/2487718/pexels-photo-2487718.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1515963157991-7f6d5f7fb143?auto=format&fit=crop&w=1600&q=80"
  ],
  "includes": {
    "en": [
      "Luxury tent",
      "Dinner and breakfast",
      "Campfire atmosphere"
    ],
    "fr": [
      "Tente de luxe",
      "Dîner et petit-déjeuner",
      "Ambiance feu de camp"
    ],
    "es": [
      "Tienda de lujo",
      "Cena y desayuno",
      "Ambiente junto al fuego"
    ],
    "ar": [
      "خيمة فاخرة",
      "عشاء وفطور",
      "أجواء نار المخيم"
    ]
  },
  "addons": [
    {
      "key": "private_dinner",
      "label": {
        "en": "Private dinner set-up",
        "fr": "Dîner privé",
        "es": "Cena privada",
        "ar": "ترتيب عشاء خاص"
      },
      "price": 60
    },
    {
      "key": "transfer_to_camp",
      "label": {
        "en": "Private transfer to camp",
        "fr": "Transfert privé au camp",
        "es": "Traslado privado al campamento",
        "ar": "نقل خاص إلى المخيم"
      },
      "price": 35
    }
  ]
};

export default offer;
