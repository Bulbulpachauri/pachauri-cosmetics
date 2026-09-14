// Mock data for UI demonstration. Swap `image` URLs with real product
// photography and connect to your commerce API / CMS when ready.

export const BRAND = {
  name: "Pachauri Cosmetics",
  tagline: "Beauty that feels like second skin",
  phone: "8171306923",
  email: "bulbulpachauri0705@gmail.com",
};

export const CATEGORIES = [
  { id: "makeup", name: "Makeup", desc: "Second-skin base, blush and eyes that last from desk to dinner.", image: "/Makeup.jpg" },
  { id: "skincare", name: "Skincare", desc: "Barrier-first serums, creams and treatments for calm, glowing skin.", image: "/skincare1.jpg" },
  { id: "haircare", name: "Haircare", desc: "Gentle cleansers and oils that bring softness back to every strand.", image: "/haircare.jpg" },
  { id: "lip-care", name: "Lip Care", desc: "Balms, tints and satin lipsticks with real comfort built in.", image: "/lip-care.jfif" },
  { id: "fragrance", name: "Fragrance", desc: "Layerable eau de parfums composed of clean, long-wear accords.", image: "/fragrance.jfif" },
  { id: "beauty-tools", name: "Beauty Tools", desc: "Brushes, rollers and applicators that make the ritual effortless.", image: "/Slidshow_Banners_2.webp" },
];

export const PRODUCTS = [
  {
    id: "p1", name: "Silk Veil Liquid Foundation", category: "Makeup", categoryId: "makeup",
    price: 599, compareAt: 799, rating: 4.8, reviews: 412, discount: 25,
    image: "/Silk Veil Liquid Foundation.jfif",
    tags: ["featured", "bestseller"],
    description: "A weightless, buildable liquid foundation that mimics real skin texture. Medium buildable coverage with a natural satin finish that lasts through a full desk-to-dinner day.",
  },
  {
    id: "p2", name: "Rose Hour Eyeshadow Palette", category: "Makeup", categoryId: "makeup",
    price: 699, compareAt: 899, rating: 4.9, reviews: 288, discount: 22,
    image: "/Rose Hour Eyeshadow Palette.webp",
    tags: ["featured", "new"],
    description: "Twelve blendable mattes and shimmers in warm rose and terracotta tones, formulated with silky micro-milled pigment for smudge-proof wear.",
  },
  {
    id: "p3", name: "Dew Drop Vitamin C Serum", category: "Skincare", categoryId: "skincare",
    price: 599, compareAt: 799, rating: 4.7, reviews: 721, discount: 25,
    image: "/Dew Drop Vitamin C Serum.webp",
    tags: ["featured", "bestseller"],
    description: "A brightening, barrier-friendly serum with stabilised vitamin C and hyaluronic acid to even tone and lock in moisture without irritation.",
  },
  {
    id: "p4", name: "Glow Repair Hair Oil", category: "Haircare", categoryId: "haircare",
    price: 399, compareAt: 549, rating: 4.8, reviews: 264, discount: 27,
    image: "/Glow Repair Hair Oil.jfif",
    tags: ["featured"],
    description: "A lightweight finishing oil with argan and camellia to smooth frizz and add mirror-shine without weighing hair down.",
  },
  {
    id: "p5", name: "Petal Glow Cream Blush", category: "Makeup", categoryId: "makeup",
    price: 449, compareAt: 599, rating: 4.6, reviews: 193, discount: 25,
    image: "/Petal Glow Cream Blush.jfif",
    tags: ["bestseller"],
    description: "A cream-to-powder blush that melts into skin for a flushed, second-skin finish that builds without patching.",
  },
  {
    id: "p6", name: "Cloud Cream Barrier Moisturiser", category: "Skincare", categoryId: "skincare",
    price: 499, compareAt: 699, rating: 4.8, reviews: 508, discount: 29,
    image: "/Cloud Cream Barrier Moisturiser.jfif",
    tags: ["bestseller"],
    description: "A rich, ceramide-based cream that restores the moisture barrier and calms redness — ideal for sensitive, dry or reactive skin.",
  },
  {
    id: "p7", name: "Night Renew 0.5% Retinal", category: "Skincare", categoryId: "skincare",
    price: 699, compareAt: 899, rating: 4.7, reviews: 246, discount: 22,
    image: "/Night.jpg.jpg",
    tags: ["new"],
    description: "An encapsulated retinal treatment that smooths fine lines and texture overnight, buffered to minimise irritation.",
  },
  {
    id: "p8", name: "Silk Mask Deep Treatment", category: "Haircare", categoryId: "haircare",
    price: 499, compareAt: 699, rating: 4.6, reviews: 140, discount: 29,
    image: "/haircare.jpg",
    tags: ["new"],
    description: "A weekly deep-conditioning mask with silk amino acids that rebuilds strength and softness in damaged, colour-treated hair.",
  },
  {
    id: "p9", name: "Glass Shine Plumping Gloss", category: "Lip Care", categoryId: "lip-care",
    price: 349, compareAt: 449, rating: 4.4, reviews: 277, discount: 22,
    image: "/lip-care.jfif",
    tags: ["new"],
    description: "A non-sticky, high-shine gloss with a mild plumping complex for a glassy, comfortable finish that layers over any lip colour.",
  },
  {
    id: "p10", name: "Rose Hour Parfum", category: "Fragrance", categoryId: "fragrance",
    price: 68, compareAt: 88, rating: 4.7, reviews: 165, discount: 23,
    image: "/fragrance.jpg",
    tags: [],
    description: "A warm, layerable eau de parfum built on rose, amber and soft musk — designed to be worn alone or under any Pachauri Cosmetics fragrance.",
  },
  {
    id: "p11", name: "Second Skin Brush Set", category: "Beauty Tools", categoryId: "beauty-tools",
    price: 44, compareAt: 58, rating: 4.9, reviews: 98, discount: 24,
    image: "/Slidshow_Banners_2.webp",
    tags: [],
    description: "A five-piece vegan-bristle brush set for base, blush and eyes, with rose-gold handles designed for a soft, no-drag application.",
  },
  {
    id: "p12", name: "Satin Comfort Lipstick", category: "Lip Care", categoryId: "lip-care",
    price: 349, compareAt: 449, rating: 4.6, reviews: 331, discount: 22,
    image: "/lipistic.jpg",
    tags: ["bestseller"],
    description: "A satin-finish lipstick with a built-in comfort balm core, formulated to feel weightless while delivering true, buildable colour.",
  },
];

export const BLOG_CATEGORIES = [
  { id: "skincare", name: "Skincare", color: "bg-rose-light/20 text-rose" },
  { id: "makeup", name: "Makeup", color: "bg-gold/10 text-gold" },
  { id: "haircare", name: "Haircare", color: "bg-navy/10 text-navy" },
  { id: "lifestyle", name: "Lifestyle", color: "bg-maroon/10 text-maroon" },
  { id: "ingredients", name: "Ingredients", color: "bg-blushdeep/30 text-ink" },
];

export const BLOG_POSTS = [
  {
    id: "b1",
    title: "The Science Behind Skin Tints: Why They Actually Work",
    excerpt: "A deep dive into the formulation tricks that make our Silk Veil Liquid Foundation feel like a second skin instead of heavy makeup.",
    content: "The key lies in multi-density pigment tech... (full article body)",
    author: "Bulbul Pachauri",
    date: "2025-03-12",
    readTime: 4,
    category: "skincare",
    image: "/Silk Veil Liquid Foundation.jfif",
    featured: true,
  },
  {
    id: "b2",
    title: "How to Layer Fragrance So It Lasts All Day",
    excerpt: "From parfum to pulse points, here's the step-by-step method our in-house perfumer uses to make scents last 12+ hours.",
    content: "Layering isn't just about quantity...",
    author: "Bulbul Pachauri",
    date: "2025-02-28",
    readTime: 5,
    category: "lifestyle",
    image: "/fragrance.jpg",
    featured: true,
  },
  {
    id: "b3",
    title: "Retinal vs Retinol: What Your Skin Really Needs",
    excerpt: "We decode the difference between retinal and retinol, and why Night Renew uses encapsulated retinal for faster results.",
    content: "The confusion around retinoids is real...",
    author: "Dr. Meera Patel",
    date: "2025-02-14",
    readTime: 6,
    category: "skincare",
    image: "/Night.jpg.jpg",
    featured: false,
  },
  {
    id: "b4",
    title: "The Truth About 'Clean Beauty' Labels",
    excerpt: "Not all clean beauty is created equal. Here's what ingredients to actually look for — and what marketers just want you to believe.",
    content: "Clean beauty has become a marketing term...",
    author: "Bulbul Pachauri",
    date: "2025-01-23",
    readTime: 7,
    category: "ingredients",
    image: "/skincare1.jpg",
    featured: false,
  },
  {
    id: "b5",
    title: "Five Steps to a Flawless No-Makeup Makeup Look",
    excerpt: "Master the art of looking like you're not wearing makeup while actually wearing six products. No filter needed.",
    content: "The no-makeup makeup look is about...",
    author: "Sara Whitfield",
    date: "2025-01-08",
    readTime: 3,
    category: "makeup",
    image: "/Petal Glow Cream Blush.jfif",
    featured: false,
  },
  {
    id: "b6",
    title: "Why Your Hair Oil Might Be Making Frizz Worse",
    excerpt: "Silicones vs natural oils: what actually smooths every strand without the buildup, and how to pick the right one.",
    content: "Hair oil is a tricky category...",
    author: "Bulbul Pachauri",
    date: "2024-12-19",
    readTime: 5,
    category: "haircare",
    image: "/Glow Repair Hair Oil.jfif",
    featured: false,
  },
];

export const REVIEWS = [
  { name: "Ananya Mehta", location: "Mumbai · Verified buyer", rating: 5, text: "The Silk Veil foundation is the first base that hasn't broken up on my combination skin by lunchtime. I've repurchased three times." },
  { name: "Priya Raghavan", location: "Bengaluru · Verified buyer", rating: 5, text: "Dew Drop serum genuinely faded my post-acne marks in about six weeks. No sting, no purge, just calmer skin." },
  { name: "Sara Whitfield", location: "London · Verified buyer", rating: 4, text: "Amber Bloom smells far more expensive than it is. It lasts all day on me and I get compliments constantly." },
  { name: "Ishita Kapoor", location: "Delhi · Verified buyer", rating: 5, text: "Beautiful packaging, fast delivery and the brush set is genuinely soft. This has become my default gift for friends." },
];

export const STATS = { rating: 4.8, count: "3,200+" };
