"use client"

import { useState } from 'react'
import BlogPost from './BlogPost'

// All blog posts data
const ALL_BLOG_POSTS = [
  {
    id: '1',
    title: 'Three Winners Get a FREE premium prompt to make an absoultely amazing website (SUBSCRIBERS ONLY)',
    summary: 'Hey Reader, I know the feeling. Your killer app idea is trapped. Developers bleed you dry, no-code tools hit walls, and you\'re left wondering if it\'s even worth it. It sucks. But it\'s not over. Picture this: You build and launch your app fast, no coding, no insane costs.',
    image: '/blog1.jpg',
    date: '3 days ago',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    readTime: '1 min read'
  },
  {
    id: '2',
    title: 'Prompt Engineering for Developers: Getting the Most Out of AI Code Assistants',
    summary: 'If you\'re a developer in 2025, you\'ve likely heard the buzz about AI code assistants—tools like GitHub Copilot, xAI\'s Grok, or Cursor that promise to turbocharge your workflow.',
    image: '/blog2.jpg',
    date: '05/04/2025',
    timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
    readTime: '1 min read'
  },
  {
    id: '3',
    title: 'Building Micro-SaaS Apps Faster with AI: A Path to Potential Passive Income',
    summary: 'Imagine launching a tiny app that solves a specific problem, earns you money while you sleep, and doesn\'t require a team of developers or years of work. That\'s the promise of Micro-SaaS—small, niche software-as-a-service businesses you can build, launch, and maintain solo.',
    image: '/blog3.jpg',
    date: '9 days ago',
    timestamp: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000), // 9 days ago
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'The Future of AI: A World Transformed and the Rise of the AI-Savvy Generation',
    summary: 'Artificial Intelligence (AI) isn\'t just a tool—it\'s a tidal wave reshaping the world as we know it. By April 2025, we\'re already seeing its ripples: OpenAI\'s $300 billion valuation, DeepSeek\'s open-source insurgency, and SoftBank\'s trillion-dollar robot factory gambit. But this is just the beginning.',
    image: '/blog4.jpg',
    date: '19 days ago',
    timestamp: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000), // 19 days ago
    readTime: '8 min read'
  },
  {
    id: '5',
    title: 'Gemini 2.5 Pro vs. DeepSeek V3-0324 vs. Claude 3.7 Sonnet: The Coding Showdown of 2025',
    summary: 'The AI race in 2025 is a coder\'s dream—or nightmare, depending on your perspective. With Google\'s Gemini 2.5 Pro, DeepSeek\'s V3-0324, and Anthropic\'s Claude 3.7 Sonnet vying for supremacy, developers are spoiled for choice. But which one truly reigns supreme when it comes to coding capabilities and generation?',
    image: '/blog5.jpg',
    date: '27 days ago',
    timestamp: new Date(Date.now() - 27 * 24 * 60 * 60 * 1000), // 27 days ago
    readTime: '10 min read'
  },
]

// Initial blogs to display
const INITIAL_BLOGS = ALL_BLOG_POSTS.slice(0, 3);

// Posts per page
const POSTS_PER_PAGE = 2;

export default function BlogList() {
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const loadMorePosts = () => {
    setIsLoading(true);
    
    // Simulate fetching more posts
    setTimeout(() => {
      const startIndex = 3 + (currentPage - 1) * POSTS_PER_PAGE;
      const endIndex = startIndex + POSTS_PER_PAGE;
      const newPosts = ALL_BLOG_POSTS.slice(startIndex, endIndex);
      
      setBlogs([...blogs, ...newPosts]);
      setCurrentPage(currentPage + 1);
      setIsLoading(false);
    }, 1500);
  };
  
  // Check if there are more posts to load
  const hasMorePosts = 3 + (currentPage - 1) * POSTS_PER_PAGE < ALL_BLOG_POSTS.length;
  
  return (
    <div className="max-w-5xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="mb-8">
        <p className="text-sm uppercase tracking-wider text-gray-500">Posts</p>
      </div>
      
      <div className="flex flex-col gap-8">
        {blogs.map((blog, index) => (
          <BlogPost
            key={blog.id}
            id={blog.id}
            title={blog.title}
            summary={blog.summary}
            image={blog.image}
            date={blog.date}
            timestamp={blog.timestamp}
            readTime={blog.readTime}
            isReversed={false}
            isFeatured={index === 0}
          />
        ))}
      </div>
      
      {hasMorePosts && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={loadMorePosts}
            disabled={isLoading}
            className={`load-more px-6 py-3 rounded-md bg-white border border-gray-300 hover:bg-gray-50 flex items-center gap-2 ${isLoading ? 'loading' : ''}`}
            style={{ fontSize: '14px' }}
          >
            <span className="load-more-spinner w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full"></span>
            <span>{isLoading ? 'Loading...' : 'View more posts'}</span>
          </button>
        </div>
      )}
    </div>
  )
} 