import type { JournalArticle } from '@/types/journal';

const articles: JournalArticle[] = [
  {
    slug: 'best-time-for-merzouga',
    title: {
      en: 'When to visit Merzouga for golden light and cooler nights',
      fr: 'Quand visiter Merzouga pour une lumière dorée et des nuits plus douces',
      es: 'Cuándo visitar Merzouga para disfrutar de luz dorada y noches más frescas',
      ar: 'متى تزور مرزوكة للاستمتاع بالضوء الذهبي والليالي المعتدلة'
    },
    excerpt: {
      en: 'A refined guide to seasons, light, temperatures, and the mood of the dunes.',
      fr: 'Un guide raffiné sur les saisons, la lumière, les températures et l’ambiance des dunes.',
      es: 'Una guía refinada sobre estaciones, luz, temperaturas y la atmósfera de las dunas.',
      ar: 'دليل أنيق حول الفصول والضوء ودرجات الحرارة وأجواء الكثبان.'
    },
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'what-to-pack-for-sahara',
    title: {
      en: 'What to pack for a luxury Sahara camp stay',
      fr: 'Que prendre pour un séjour de luxe dans le Sahara',
      es: 'Qué llevar para una estancia de lujo en el Sáhara',
      ar: 'ماذا تحزم لإقامة فاخرة في الصحراء'
    },
    excerpt: {
      en: 'Elegant essentials for sunset rides, cool evenings, and stylish comfort.',
      fr: 'Les essentiels élégants pour les balades au coucher du soleil et les soirées fraîches.',
      es: 'Los esenciales elegantes para paseos al atardecer y noches frescas.',
      ar: 'أساسيات أنيقة لرحلات الغروب والأمسيات المنعشة.'
    },
    readTime: '4 min read',
    coverImage: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    slug: 'camel-vs-quad',
    title: {
      en: 'Camel trek or quad ride: which Merzouga experience suits you best?',
      fr: 'Balade à dos de chameau ou quad : quelle expérience vous convient le mieux ?',
      es: 'Paseo en camello o ruta en quad: ¿qué experiencia te conviene más?',
      ar: 'رحلة بالجمل أم جولة بالكواد: أي تجربة تناسبك أكثر؟'
    },
    excerpt: {
      en: 'Choose between romance, adventure, pace, and privacy across the dunes.',
      fr: 'Choisissez entre romantisme, aventure, rythme et intimité dans les dunes.',
      es: 'Elige entre romanticismo, aventura, ritmo y privacidad en las dunas.',
      ar: 'اختر بين الرومانسية والمغامرة والخصوصية عبر الكثبان.'
    },
    readTime: '6 min read',
    coverImage: 'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

export default articles;
