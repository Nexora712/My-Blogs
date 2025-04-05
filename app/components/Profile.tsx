"use client"

import Image from 'next/image'

export default function Profile() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 py-16">
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
        <div className="inline-block bg-gray-100 p-2 rounded-xl shadow-md">
          <div className="h-40 w-40 rounded-full overflow-hidden bg-yellow-100">
            <Image 
              src="/profile.jpg" 
              alt="Achyut's Profile Picture" 
              width={160} 
              height={160} 
              className="object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-2/3 text-center md:text-left">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">profile</p>
        <h1 className="font-display text-title mb-3">Achyut</h1>
        <p className="font-sans text-subtitle text-gray-700 mb-4">
          I help developers and entrepreneurs turn ai into profitable apps.
        </p>
        <p className="font-sans text-body text-gray-600 mb-8 max-w-2xl">
          1st year college student trying to be a creator, now teaching AI & automation to founders. Every week, I send 1-2 emails with free prompts, tools and news. Guaranteed no spam.
        </p>
      </div>
    </section>
  )
} 