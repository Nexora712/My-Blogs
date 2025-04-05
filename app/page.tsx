import Hero from './components/Hero'
import BlogList from './components/BlogList'
import SocialShare from './components/SocialShare'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BlogList />
      <SocialShare />
    </div>
  )
} 