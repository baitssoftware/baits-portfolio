// This is a mock API file. In a real application, you would fetch data from your actual API or database.

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  content: string;
  date: string;
  author: string;
  categories: string[];
  featuredImage: string;
  gallery?: { url: string; alt: string }[];
}

const posts: BlogPost[] = [
  {
    id: '1',
    slug: 'salience-labs-secures-30m',
    title: 'Salience Labs Secures $30M to Redefine AI Infrastructure',
    subtitle: "Salience Labs lands $30M in Series A funding to break AI's biggest bottleneck.",
    content: `<p>Our client, Salience Labs has secured $30M in Series A funding, led by DAG PFGC Fund and supported by existing investors from Oxford Science and Khosla Ventures. Salience's unique and proven technology has been designed to use optical processing for faster, more efficient AI computation.</p>
                <p>Born from Oxford and MIT/EPFL research, Salience Labs is building one of AI's biggest breakthroughs. Their technology combines silicon photonics with advanced memory technology, allowing chip-fast frequency networking—unlocking next-gen AI performance.</p>
                <p>We worked closely with Salience Labs to craft a sleek high-impact brand that aligns with their breakthrough technology. From a refined identity and investor pitch deck to every touchpoint in between, we helped them tell the story of their mission: crafting a design and message that embodies the transformative effect of their solutions. Here's to a faster, more powerful AI future.</p>`,
    date: '08 Feb. 24',
    author: 'Kseniia Palamarchuk',
    categories: ['NEWS', 'PITCH DECK'],
    featuredImage: '/placeholder.svg?height=600&width=1400',
    gallery: [
      { url: '/placeholder.svg?height=400&width=400', alt: 'Salience Labs team' },
      { url: '/placeholder.svg?height=400&width=400', alt: 'AI infrastructure diagram' },
      { url: '/placeholder.svg?height=400&width=400', alt: 'Pitch deck slide' },
      { url: '/placeholder.svg?height=400&width=400', alt: 'Lab equipment' },
      { url: '/placeholder.svg?height=400&width=400', alt: 'Team meeting' },
      { url: '/placeholder.svg?height=400&width=400', alt: 'Product showcase' },
    ],
  },
  // Add more mock posts here...
];

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  // await new Promise((resolve) => setTimeout(resolve, 100));
  return posts.find((post) => post.slug === slug) || null;
}

export async function getRelatedPosts(currentPostId: string): Promise<BlogPost[]> {
  // Simulate API delay
  // await new Promise((resolve) => setTimeout(resolve, 100));
  return posts.filter((post) => post.id !== currentPostId).slice(0, 3);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  // await new Promise((resolve) => setTimeout(resolve, 100));
  return posts;
}
