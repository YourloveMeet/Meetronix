const VITE_API_URL = import.meta.env.VITE_API_URL;
const isHttps = typeof window !== 'undefined' && window.location.protocol === 'https:';

// Automatically use relative paths (proxy) if we're on HTTPS but the API is HTTP
// This avoids "Mixed Content" blocks on Vercel
const BASE_URL = (isHttps && VITE_API_URL?.startsWith('http:')) 
  ? '' 
  : (VITE_API_URL || 'http://3.110.19.162:4000');

export const API = {
  blog: {
    all:      `${BASE_URL}/api/blog`,
    featured: `${BASE_URL}/api/blog/featured`,
    post:     (slug) => `${BASE_URL}/api/blog/${slug}`,
  },
  assets: {
    image: (path) => `${BASE_URL}${path}`,
  },
  health: `${BASE_URL}/health`,
}

export default API
