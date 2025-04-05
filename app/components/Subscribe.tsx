"use client"

import { useState } from 'react'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    // Simple email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }
    
    try {
      // Call our API route to subscribe the user
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Success!
      setIsSuccess(true)
      setEmail('')
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    } catch (err: any) {
      setError(err.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section className="py-8">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-display text-xl font-semibold mb-6">Get Weekly Insights</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={isSubmitting || isSuccess}
          />
          {error && <p className="text-red-500 text-left text-sm mt-1">{error}</p>}
          
          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? 'Subscribing...' : isSuccess ? 'Subscribed!' : 'Get Weekly Insights'}
          </button>
        </form>
      </div>
    </section>
  )
} 