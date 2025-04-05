"use client"

import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

interface BlogPostProps {
  id: string
  title: string
  summary: string
  image: string
  date: string
  timestamp: Date
  readTime: string
  isReversed?: boolean
  isFeatured?: boolean
}

export default function BlogPost({
  id,
  title,
  summary,
  image,
  date,
  timestamp,
  readTime,
  isReversed = false,
  isFeatured = false
}: BlogPostProps) {
  const timeAgo = formatDistanceToNow(timestamp, { addSuffix: true })
  
  return (
    <div className={`blog-post bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${isFeatured ? 'border-l-4 border-primary' : ''}`} style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6`}>
        {/* Blog Image */}
        <div className="md:w-1/3">
          <div className="h-48 w-full overflow-hidden rounded-lg">
            <Image 
              src={image} 
              alt={title}
              width={400}
              height={250}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="md:w-2/3 flex flex-col gap-4">
          <h2 className="font-bold text-2xl">
            {title}
          </h2>
          
          <p className="text-gray-700" style={{ fontSize: '14px' }}>
            {summary}
          </p>
          
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-3 text-gray-500" style={{ fontSize: '14px' }}>
              <span>{timeAgo}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
            
            <Link href={`/post/${id}`} className="read-more inline-flex items-center">
              Read now
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 