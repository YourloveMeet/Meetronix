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
