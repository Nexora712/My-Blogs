"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
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
    <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="md:w-1/4">
            <div className="rounded-full overflow-hidden bg-primary h-60 w-60 md:h-48 md:w-48 mx-auto">
              <Image 
                src="/profile.jpg" 
                alt="Achyut's Profile Picture" 
                width={240} 
                height={240} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="md:w-3/4 flex flex-col" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <h1 className="text-2xl font-bold mb-1 text-center md:text-left" style={{ fontSize: '24px', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>Achyut</h1>
            <p className="font-bold mb-4 text-center md:text-left" style={{ fontSize: '16px', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
              I Help Developers and Entrepreneurs Turn AI into Profitable Apps.
            </p>
            
            <p className="text-gray-700 mb-6 text-center md:text-left" style={{ fontSize: '14px' }}>
              1st year college student trying to be a creator, now teaching AI & automation to founders. Every week, I send 1-2 emails with free prompts, tools and news. Guaranteed no spam.
            </p>
            
            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none"
                  disabled={isSubmitting || isSuccess}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="bg-primary text-black font-medium px-6 py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Subscribing...' : isSuccess ? 'Subscribed!' : 'Get Weekly Insights'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 