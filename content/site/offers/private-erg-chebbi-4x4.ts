import type { ExperienceOffer } from '@/types/offer';

const offer: ExperienceOffer = {
  "slug": "private-erg-chebbi-4x4",
  "category": "tour",
  "featured": true,
  "title": {
    "en": "Private 4x4 Erg Chebbi Tour",
    "fr": "Tour privé en 4x4 à Erg Chebbi",
    "es": "Tour privado en 4x4 por Erg Chebbi",
    "ar": "جولة خاصة 4×4 في عرق الشبي"
  },
  "subtitle": {
    "en": "A comfortable private circuit beyond the main dune edge",
    "fr": "Un circuit privé confortable au-delà des dunes principales",
    "es": "Un circuito privado y cómodo más allá del borde principal",
    "ar": "مسار خاص ومريح يتجاوز الحافة الرئيسية للكثبان"
  },
  "description": {
    "en": "Explore villages, panoramic points, and open desert tracks with a private driver-guide.",
    "fr": "Découvrez des villages, points de vue et pistes ouvertes avec un chauffeur-guide privé.",
    "es": "Explora pueblos, miradores y pistas abiertas con conductor-guía privado.",
    "ar": "اكتشف القرى ونقاط المشاهدة والمسارات الصحراوية مع سائق ومرشد خاص."
  },
  "duration": {
    "en": "3 hours",
    "fr": "3 heures",
    "es": "3 horas",
    "ar": "3 ساعات"
  },
  "audience": {
    "en": "Families, private groups, comfort-focused travelers",
    "fr": "Familles, groupes privés, voyageurs en quête de confort",
    "es": "Familias, grupos privados, viajeros que priorizan el confort",
    "ar": "العائلات والمجموعات الخاصة ومحبو الراحة"
  },
  "fromPrice": 180,
  "pricingModel": "per_vehicle",
  "location": "Erg Chebbi region",
  "coverImage": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  "gallery": [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80"
  ],
  "includes": {
    "en": [
      "Private vehicle",
      "Driver-guide",
      "Tea stop"
    ],
    "fr": [
      "Véhicule privé",
      "Chauffeur-guide",
      "Pause thé"
    ],
    "es": [
      "Vehículo privado",
      "Conductor-guía",
      "Parada para té"
    ],
    "ar": [
      "سيارة خاصة",
      "سائق ومرشد",
      "استراحة شاي"
    ]
  },
  "addons": [
    {
      "key": "gnawa_music_stop",
      "label": {
        "en": "Cultural music stop",
        "fr": "Pause musique culturelle",
        "es": "Parada musical cultural",
        "ar": "توقف موسيقي ثقافي"
      },
      "price": 35
    }
  ]
};

export default offer;
