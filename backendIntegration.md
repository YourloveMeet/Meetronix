# Meetronix Frontend — Blog API Integration

This document gives the frontend agent everything needed to integrate the live blog API into the Meetronix React site.

---

## 🌐 Live API Base URL

```
http://3.110.19.162:4000
```

---

## 📡 API Endpoints

| Purpose | Method | URL |
|---|---|---|
| Health check | GET | `http://3.110.19.162:4000/health` |
| All blog posts | GET | `http://3.110.19.162:4000/api/blog` |
| Featured posts only | GET | `http://3.110.19.162:4000/api/blog/featured` |
| Single post by slug | GET | `http://3.110.19.162:4000/api/blog/:slug` |

### All Slug Values
```
http://3.110.19.162:4000/api/blog/why-business-deserves-more-than-template
http://3.110.19.162:4000/api/blog/building-gearguard-production-saas-at-18
http://3.110.19.162:4000/api/blog/what-makes-web-design-feel-luxury
http://3.110.19.162:4000/api/blog/agentic-coding-workflow-with-cursor
http://3.110.19.162:4000/api/blog/why-i-always-design-before-writing-code
```

---

## 📦 Response Shapes

### `GET /api/blog` and `GET /api/blog/featured`
```json
{
  "success": true,
  "posts": [
    {
      "id": "why-business-deserves-more-than-template",
      "title": "Why Your Business Deserves More Than a Template Website",
      "excerpt": "Most businesses are invisible online — not because their product is weak, but because their website looks like everyone else's.",
      "category": "Design",
      "tags": ["Web Design", "Business", "Ecommerce", "Branding"],
      "readTime": "5 min read",
      "date": "2025-03-15",
      "featured": true,
      "coverImage": "/assets/images/blog/template-vs-custom.jpg",
      "slug": "why-business-deserves-more-than-template"
    }
  ]
}
```

### `GET /api/blog/:slug`
```json
{
  "success": true,
  "post": {
    "id": "why-business-deserves-more-than-template",
    "title": "Why Your Business Deserves More Than a Template Website",
    "excerpt": "...",
    "category": "Design",
    "tags": ["Web Design", "Business", "Ecommerce", "Branding"],
    "readTime": "5 min read",
    "date": "2025-03-15",
    "featured": true,
    "coverImage": "/assets/images/blog/template-vs-custom.jpg",
    "slug": "why-business-deserves-more-than-template",
    "content": "<h2>The Uncomfortable Truth...</h2><p>Full HTML article body here...</p>"
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Post not found"
}
```

---

## 🗂️ Files to Create

### 1. `src/config/api.js`
```js
const BASE_URL = import.meta.env.VITE_API_URL || 'http://3.110.19.162:4000'

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
```

---

### 2. `src/hooks/useBlog.js`
```js
import { useState, useEffect } from 'react'
import API from '../config/api'

// Fetch all blog posts
export function useBlogPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(API.blog.all)
      .then(r => r.json())
      .then(data => {
        if (data.success) setPosts(data.posts)
        else setError(data.error)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading, error }
}

// Fetch featured posts only
export function useFeaturedPost() {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(API.blog.featured)
      .then(r => r.json())
      .then(data => {
        if (data.success && data.posts.length > 0) setPost(data.posts[0])
        else setError(data.error || 'No featured post found')
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { post, loading, error }
}

// Fetch single post by slug
export function useBlogPost(slug) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return
    fetch(API.blog.post(slug))
      .then(r => r.json())
      .then(data => {
        if (data.success) setPost(data.post)
        else setError(data.error)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [slug])

  return { post, loading, error }
}
```

---

## 📄 Pages to Update

### `src/pages/Blog.jsx`

Replace any static `blogData` import with the live API hook.

```jsx
import { useBlogPosts, useFeaturedPost } from '../hooks/useBlog'
import API from '../config/api'

export default function Blog() {
  const { posts, loading, error } = useBlogPosts()
  const { post: featuredPost, loading: featuredLoading } = useFeaturedPost()

  // ... rest of component
}
```

**Loading state** — show 3 skeleton cards while `loading === true`:
```jsx
{loading && (
  <div className="grid grid-cols-3 gap-5">
    {[1,2,3].map(i => (
      <div key={i} className="rounded-2xl overflow-hidden animate-pulse">
        <div className="h-48 bg-[#F2EDE4]" />
        <div className="p-5 space-y-3">
          <div className="h-3 bg-[#F2EDE4] rounded w-1/3" />
          <div className="h-5 bg-[#F2EDE4] rounded w-3/4" />
          <div className="h-3 bg-[#F2EDE4] rounded w-full" />
          <div className="h-3 bg-[#F2EDE4] rounded w-2/3" />
        </div>
      </div>
    ))}
  </div>
)}
```

**Error state** — show a simple message if `error` is not null:
```jsx
{error && (
  <div className="text-center py-20">
    <p className="text-[#AFA099] text-sm">
      Could not load posts right now. Please try again later.
    </p>
  </div>
)}
```

**Image with fallback** — use `onError` on every cover image:
```jsx
<img
  src={API.assets.image(post.coverImage)}
  alt={post.title}
  className="w-full h-full object-cover"
  onError={(e) => {
    e.target.style.display = 'none'
    e.target.parentElement.style.background =
      post.category === 'Engineering'
        ? 'linear-gradient(135deg, #C8D8E8, #A8C4D4)'
        : 'linear-gradient(135deg, #F0D5C8, #E8C4A8)'
  }}
/>
```

---

### `src/pages/BlogPost.jsx` (create if it doesn't exist)

Individual article page — renders the full HTML content returned by the API.

```jsx
import { useParams } from 'react-router-dom'
import { useBlogPost } from '../hooks/useBlog'
import API from '../config/api'

export default function BlogPost() {
  const { slug } = useParams()
  const { post, loading, error } = useBlogPost(slug)

  if (loading) return <BlogPostSkeleton />
  if (error || !post) return <NotFound />

  return (
    <article>
      {/* Cover image */}
      <img
        src={API.assets.image(post.coverImage)}
        alt={post.title}
        onError={(e) => { e.target.style.display = 'none' }}
      />

      {/* Meta */}
      <span>{post.category}</span>
      <span>{post.readTime}</span>
      <span>{new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      })}</span>

      {/* Title */}
      <h1>{post.title}</h1>

      {/* Full article body — rendered from markdown-converted HTML */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      {post.tags.map(tag => <span key={tag}>{tag}</span>)}
    </article>
  )
}
```

**Important:** add a `prose` style in `index.css` for the article body so markdown HTML renders correctly:
```css
.prose h2 {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 500;
  color: var(--text-primary);
  margin: 2rem 0 0.75rem;
}
.prose p {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}
.prose strong {
  font-weight: 500;
  color: var(--text-primary);
}
.prose ul, .prose ol {
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
  color: var(--text-secondary);
}
.prose li {
  line-height: 1.8;
  margin-bottom: 0.4rem;
}
.prose code {
  font-family: monospace;
  font-size: 13px;
  background: var(--cream-dark);
  color: var(--terracotta);
  padding: 2px 6px;
  border-radius: 4px;
}
.prose pre {
  background: var(--charcoal);
  color: #FAF7F2;
  padding: 1.25rem;
  border-radius: 12px;
  overflow-x: auto;
  margin: 1.5rem 0;
  font-size: 13px;
  line-height: 1.7;
}
.prose a {
  color: var(--terracotta);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.prose hr {
  border: none;
  border-top: 1px solid var(--border);
  margin: 2.5rem 0;
}
```

---

### `src/App.jsx` — Add Blog Post Route

```jsx
import BlogPost from './pages/BlogPost'

// Add this route alongside existing routes:
<Route path="/blog/:slug" element={<BlogPost />} />
```

---

### Blog Card — Link to Article

Each blog card in the grid should link to the individual post:

```jsx
import { Link } from 'react-router-dom'

// Wrap card or "Read →" link with:
<Link to={`/blog/${post.slug}`}>
  Read Article →
</Link>
```

---

## 🌍 Environment Variables

### `.env` (local development)
```
VITE_API_URL=http://3.110.19.162:4000
```

### Vercel (production)
Add in Vercel Dashboard → Project Settings → Environment Variables:
```
Key:   VITE_API_URL
Value: http://3.110.19.162:4000
```

---

## ✅ Completion Checklist

- [ ] `src/config/api.js` created
- [ ] `src/hooks/useBlog.js` created with all 3 hooks
- [ ] `Blog.jsx` uses `useBlogPosts()` and `useFeaturedPost()` — no static data
- [ ] Loading skeleton shows while fetching
- [ ] Error state shows if API fails
- [ ] All cover images use `API.assets.image()` with `onError` fallback
- [ ] `BlogPost.jsx` created and renders `post.content` via `dangerouslySetInnerHTML`
- [ ] `/blog/:slug` route added in `App.jsx`
- [ ] Blog cards link to `/blog/:slug`
- [ ] `.prose` styles added to `index.css`
- [ ] `.env` has `VITE_API_URL` set
- [ ] Vercel environment variable set

---

*Meetronix v2 — Blog Integration. API live at http://3.110.19.162:4000*