function generateSlugId(title: string) {
  return title
    .toLowerCase()
    .replaceAll(',', '')
    .replaceAll(':', '')
    .replaceAll(' ', '-');
}

export const posts = [
  {
    slugId: generateSlugId('Amazing Adventures in Bali'),
    title: 'Amazing Adventures in Bali',
    description:
      'Explore the breathtaking beauty and thrilling activities on the island paradise of Bali.',
    img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Adventure',
    author: 'Álvaro Emanuel',
    createdAt: '12 hours',
  },
  {
    slugId: generateSlugId('A Taste of Italy: Culinary Delights'),
    title: 'A Taste of Italy: Culinary Delights',
    description:
      'Indulge in the mouthwatering cuisine of Italy, from pasta to gelato, and discover the flavors of this enchanting country.',
    img: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    category: 'Food',
    author: 'Álvaro Emanuel',
    createdAt: '12 hours',
  },
  {
    slugId: generateSlugId('Exploring the Wonders of Machu Picchu'),
    title: 'Exploring the Wonders of Machu Picchu',
    description:
      'Embark on a journey to the ancient Inca citadel of Machu Picchu, a UNESCO World Heritage Site.',
    img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
    category: 'History',
    author: 'Álvaro Emanuel',
    createdAt: '12 hours',
  },
  {
    slugId: generateSlugId('Safari Adventure in the Serengeti'),
    title: 'Safari Adventure in the Serengeti',
    description:
      "Witness the incredible wildlife of Africa's Serengeti National Park on an unforgettable safari adventure.",
    img: 'https://images.unsplash.com/photo-1618149496704-db8b9c49ac62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Wildlife',
    author: 'Álvaro Emanuel',
    createdAt: '12 hours',
  },
  {
    slugId: generateSlugId('Island Paradise: Maldives Getaway'),
    title: 'Island Paradise: Maldives Getaway',
    description:
      'Relax on the white sandy beaches and crystal-clear waters of the Maldives, a tropical paradise like no other.',
    img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
    category: 'Beach',
    author: 'Álvaro Emanuel',
    createdAt: '12 hours',
  },
  {
    slugId: generateSlugId('Cultural Immersion in Kyoto, Japan'),
    title: 'Cultural Immersion in Kyoto, Japan',
    description:
      'Immerse yourself in the rich traditions and heritage of Kyoto, from temples to tea ceremonies.',
    img: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    category: 'Culture',
    author: 'Álvaro Emanuel',
    createdAt: '12 hours',
  },
  {
    slugId: generateSlugId('Hiking the Inca Trail to Machu Picchu'),
    title: 'Hiking the Inca Trail to Machu Picchu',
    description:
      'Embark on a challenging yet rewarding trek along the historic Inca Trail...',
    img: 'https://images.unsplash.com/photo-1589087575290-519f528dfe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Adventure',
    author: 'Álvaro Emanuel',
    createdAt: '12 hours',
  },
  {
    slugId: generateSlugId('The Charm of Paris: A Romantic Getaway'),
    title: 'The Charm of Paris: A Romantic Getaway',
    description: 'Experience the romance and elegance of the City of Love...',
    img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    category: 'Romance',
    author: 'Álvaro Emanuel',
    createdAt: '12 hours',
  },
  {
    slugId: generateSlugId('Discovering the Greek Islands'),
    title: 'Discovering the Greek Islands',
    description:
      'Sail through the stunning Greek Islands, each with its unique beauty...',
    img: 'https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    category: 'Islands',
    author: 'Álvaro Emanuel',
    createdAt: '12 hours',
  },
];
