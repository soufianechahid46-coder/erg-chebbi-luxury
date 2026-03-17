import type { ExperienceOffer } from '@/types/offer';

const offer: ExperienceOffer = {
  "slug": "sunset-camel-trek",
  "category": "camel",
  "featured": true,
  "title": {
    "en": "Sunset Camel Trek",
    "fr": "Balade en chameau au coucher du soleil",
    "es": "Paseo en camello al atardecer",
    "ar": "رحلة بالجمل عند الغروب"
  },
  "subtitle": {
    "en": "A soft golden-hour crossing into the dunes",
    "fr": "Une traversée douce dans les dunes à l’heure dorée",
    "es": "Un cruce suave por las dunas en la hora dorada",
    "ar": "عبور هادئ للكثبان في الساعة الذهبية"
  },
  "description": {
    "en": "Ideal for first-time visitors seeking a classic Sahara moment with elegant pacing and warm hosting.",
    "fr": "Idéal pour une première immersion saharienne, avec un rythme élégant et un accueil chaleureux.",
    "es": "Ideal para una primera experiencia sahariana con ritmo elegante y atención cálida.",
    "ar": "مثالية للزوار لأول مرة الباحثين عن لحظة صحراوية كلاسيكية بضيافة دافئة."
  },
  "duration": {
    "en": "2 hours",
    "fr": "2 heures",
    "es": "2 horas",
    "ar": "ساعتان"
  },
  "audience": {
    "en": "Couples, photographers, first-time visitors",
    "fr": "Couples, photographes, premiers visiteurs",
    "es": "Parejas, fotógrafos y primeros visitantes",
    "ar": "الأزواج والمصورون والزوار لأول مرة"
  },
  "fromPrice": 45,
  "pricingModel": "per_person",
  "location": "Erg Chebbi, Merzouga",
  "coverImage": "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "gallery": [
    "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
  ],
  "includes": {
    "en": [
      "Camel guide",
      "Sunset tea stop",
      "Scenic dune route"
    ],
    "fr": [
      "Guide chamelier",
      "Pause thé au coucher du soleil",
      "Itinéraire panoramique"
    ],
    "es": [
      "Guía con camellos",
      "Pausa para té al atardecer",
      "Ruta panorámica"
    ],
    "ar": [
      "مرشد للجمال",
      "استراحة شاي عند الغروب",
      "مسار بانورامي بين الكثبان"
    ]
  },
  "addons": [
    {
      "key": "private_photo_stop",
      "label": {
        "en": "Private photo stop",
        "fr": "Arrêt photo privé",
        "es": "Parada fotográfica privada",
        "ar": "توقف خاص للتصوير"
      },
      "price": 25
    }
  ]
};

export default offer;
