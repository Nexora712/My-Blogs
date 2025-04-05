"use client"

import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function SocialShare() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  const socialLinks = [
    {
      name: 'Twitter',
      icon: <FaTwitter className="h-5 w-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Check out this blog by Achyut!')}`
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="h-5 w-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="h-5 w-5" />,
      url: `https://instagram.com`
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="h-5 w-5" />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this blog by Achyut! ${shareUrl}`)}`
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
            aria-label={`Share on ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
} 