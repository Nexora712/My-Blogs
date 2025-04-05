"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// In a real app, you'd have proper authentication
// This is just a simple mock for demonstration purposes
const ADMIN_PASSWORD = 'admin123'

export default function AdminPage() {
  const router = useRouter()
  const [showPasswordForm, setShowPasswordForm] = useState(true)
  const [showInstructions, setShowInstructions] = useState(false)
  const [showMailchimpInstructions, setShowMailchimpInstructions] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  
  // Check if authenticated in localStorage (not secure, just for demo)
  useEffect(() => {
    const auth = localStorage.getItem('blog_admin_auth')
    if (auth === 'true') {
      setShowPasswordForm(false)
    }
  }, [])
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setShowPasswordForm(false)
    } else {
      setError('Incorrect password')
    }
  }
  
  // Handle blog post submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title || !summary || !content) {
      setError('All fields are required')
      return
    }
    
    setIsSubmitting(true)
    setError('')
    
    // In a real app, you'd send this to an API
    setTimeout(() => {
      // Create a new blog post object
      const newPost = {
        id: Date.now().toString(), // Generate a unique ID
        title,
        summary,
        content,
        image: '',
        date: 'Just now',
        timestamp: new Date(),
        readTime: `${Math.max(1, Math.ceil(content.length / 2000))} min read` // Rough estimate
      }
      
      // Log the new post to console
      console.log('New blog post created:', newPost)
      
      setIsSubmitting(false)
      setSuccess(true)
      
      // Reset form
      setTitle('')
      setSummary('')
      setContent('')
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }, 1500)
  }
  
  const toggleInstructions = () => {
    setShowInstructions(!showInstructions)
  }
  
  const toggleMailchimpInstructions = () => {
    setShowMailchimpInstructions(!showMailchimpInstructions)
  }
  
  // If not authenticated, show login form
  if (showPasswordForm) {
    return (
      <div className="max-w-md mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Login</h1>
        
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter admin password"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button
            type="submit"
            className="bg-primary text-black px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Login
          </button>
        </form>
        
        <p className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </p>
      </div>
    )
  }
  
  // If authenticated, show blog post form
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Create New Blog Post</h2>
            <button
              onClick={toggleInstructions}
              className="text-primary font-medium flex items-center gap-1"
            >
              {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
              <svg className={`w-5 h-5 transition-transform ${showInstructions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          
          {showInstructions && (
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-bold mb-2">How to Add Blog Posts Permanently</h3>
              <p className="text-gray-700 mb-4">
                Note: The form below is for demo purposes only. Blog posts created here will not be saved permanently.
                To add blog posts that persist across page reloads, follow these steps:
              </p>
              
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Open <code className="bg-gray-200 px-1 rounded">app/components/BlogList.tsx</code></li>
                <li>Add a new entry to the <code className="bg-gray-200 px-1 rounded">ALL_BLOG_POSTS</code> array</li>
                <li>Follow the structure of existing blog posts with id, title, summary, image, date, etc.</li>
                <li>Then open <code className="bg-gray-200 px-1 rounded">app/post/[id]/page.tsx</code></li>
                <li>Add the full post content to the <code className="bg-gray-200 px-1 rounded">BLOGS</code> array</li>
                <li>Restart the server with <code className="bg-gray-200 px-1 rounded">npm run dev</code></li>
              </ol>
            </div>
          )}
          
          <div className="flex justify-between items-center mb-4 mt-8">
            <h2 className="text-xl font-bold">Email Subscription System</h2>
            <button
              onClick={toggleMailchimpInstructions}
              className="text-primary font-medium flex items-center gap-1"
            >
              {showMailchimpInstructions ? 'Hide Instructions' : 'Show Instructions'}
              <svg className={`w-5 h-5 transition-transform ${showMailchimpInstructions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          
          {showMailchimpInstructions && (
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-bold mb-2">How to Set Up Mailchimp Integration</h3>
              <p className="text-gray-700 mb-4">
                This blog has been configured to use Mailchimp for managing email subscriptions. Follow these steps to connect your Mailchimp account:
              </p>
              
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Sign up for a Mailchimp account at <a href="https://mailchimp.com" target="_blank" rel="noopener noreferrer" className="text-primary">mailchimp.com</a></li>
                <li>Create an audience (list) for your blog subscribers</li>
                <li>Get your API key from Account → Extras → API Keys</li>
                <li>Find your List ID under Audience → Settings → Audience name and defaults</li> 
                <li>Find your Server prefix from your API key (e.g., us19)</li>
                <li>Update the <code className="bg-gray-200 px-1 rounded">.env</code> file with your credentials:</li>
                <pre className="bg-gray-200 p-2 rounded mt-2 overflow-x-auto">
                  MAILCHIMP_API_KEY=your-api-key-here<br/>
                  MAILCHIMP_LIST_ID=your-list-id-here<br/>
                  MAILCHIMP_SERVER=your-server-prefix
                </pre>
                <li>Restart the server with <code className="bg-gray-200 px-1 rounded">npm run dev</code></li>
              </ol>
              
              <p className="text-gray-700 mt-4">
                Once configured, you'll be able to see new subscribers in your Mailchimp dashboard, send campaigns, and track engagement.
              </p>
            </div>
          )}
          
        </div>
        
        <h2 className="text-xl font-bold mb-4">Create New Blog Post (Demo Only)</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
              Summary (shown in blog preview)
            </label>
            <textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content (HTML supported)
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
              placeholder="<p>Hey Reader,</p>
<p>Your blog content here...</p>
<p>Sign off,</p>
<p>Achyut</p>"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-black px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? 'Publishing...' : 'Publish Post'}
            </button>
            
            {success && (
              <p className="mt-2 text-green-600">
                Post published successfully! Check console for details.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
} 