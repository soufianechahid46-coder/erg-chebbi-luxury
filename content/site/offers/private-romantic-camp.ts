import type { ExperienceOffer } from '@/types/offer';

const offer: ExperienceOffer = {
  "slug": "private-romantic-camp",
  "category": "private",
  "featured": true,
  "title": {
    "en": "Private Romantic Camp Experience",
    "fr": "Expérience romantique privée au camp",
    "es": "Experiencia romántica privada en campamento",
    "ar": "تجربة مخيم رومانسية خاصة"
  },
  "subtitle": {
    "en": "A secluded premium setup for proposals, anniversaries, and intimate escapes",
    "fr": "Une mise en scène premium pour propositions, anniversaires et escapades intimes",
    "es": "Una propuesta premium para pedidas, aniversarios y escapadas íntimas",
    "ar": "إعداد فاخر للطلبات الخاصة وذكرى الزواج والهروب الحميمي"
  },
  "description": {
    "en": "A private atmosphere with curated dinner styling, soft lighting, and a memorable night in the dunes.",
    "fr": "Une atmosphère privée avec dîner mis en scène, lumière douce et nuit mémorable dans les dunes.",
    "es": "Una atmósfera privada con cena ambientada, luz suave y una noche memorable en las dunas.",
    "ar": "أجواء خاصة مع عشاء منسق وإضاءة ناعمة وليلة لا تنسى بين الكثبان."
  },
  "duration": {
    "en": "Evening + 1 night",
    "fr": "Soirée + 1 nuit",
    "es": "Tarde + 1 noche",
    "ar": "أمسية + ليلة واحدة"
  },
  "audience": {
    "en": "Couples, proposals, anniversaries",
    "fr": "Couples, demandes en mariage, anniversaires",
    "es": "Parejas, pedidas, aniversarios",
    "ar": "الأزواج وطلبات الزواج واحتفالات الذكرى"
  },
  "fromPrice": 420,
  "pricingModel": "fixed",
  "location": "Private luxury camp setting",
  "coverImage": "https://images.unsplash.com/photo-1515963157991-7f6d5f7fb143?auto=format&fit=crop&w=1600&q=80",
  "gallery": [
    "https://images.unsplash.com/photo-1515963157991-7f6d5f7fb143?auto=format&fit=crop&w=1600&q=80",
    "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ],
  "includes": {
    "en": [
      "Private dining styling",
      "Luxury tent",
      "Personalized hosting"
    ],
    "fr": [
      "Dîner privé scénographié",
      "Tente de luxe",
      "Accueil personnalisé"
    ],
    "es": [
      "Cena privada ambientada",
      "Tienda de lujo",
      "Atención personalizada"
    ],
    "ar": [
      "تنسيق عشاء خاص",
      "خيمة فاخرة",
      "استضافة مخصصة"
    ]
  },
  "addons": [
    {
      "key": "flowers_and_cake",
      "label": {
        "en": "Flowers and cake",
        "fr": "Fleurs et gâteau",
        "es": "Flores y pastel",
        "ar": "ورود وكعكة"
      },
      "price": 55
    }
  ]
};

export default offer;
