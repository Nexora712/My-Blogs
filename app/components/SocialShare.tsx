"use client"

import { FaTwitter, FaInstagram, FaWhatsapp, FaFolderOpen } from 'react-icons/fa'

export default function SocialShare() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  const socialLinks = [
    {
      name: 'Twitter',
      icon: <FaTwitter className="h-5 w-5" />,
      url: `https://x.com/Achyut18214831`
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="h-5 w-5" />,
      url: `https://www.instagram.com/achyut8416/`
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="h-5 w-5" />,
      url: `https://api.whatsapp.com/send?phone=919311432974`
    },
    {
      name: 'Portfolio',
      icon: <FaFolderOpen className="h-5 w-5" />,
      url: `https://achyut-portfolio-2025.vercel.app/`
      // Replace with your portfolio URL
    }
  ]
  
  return (
    <div className="max-w-5xl mx-auto mt-8 mb-4 text-center" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <p className="text-sm text-gray-500 mb-2">Share this page</p>
      
      <div className="flex justify-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label={social.name === 'Portfolio'
              ? 'Visit portfolio'
              : `Share on ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
