"use client"

import Link from 'next/link'
import { useParams } from 'next/navigation'
import SocialShare from '../../components/SocialShare'
import { formatDistanceToNow } from 'date-fns'

// Sample blog data - in a real app, this would come from a database or API
const BLOGS = [
  {
    id: '1',
    title: 'Three Winners Get a FREE prompt (Website Builders Only)',
    content: `
      <p>Hey Reader,</p>
      <p>I know the feeling. Your killer website idea is trapped. Developers bleed you dry, no-code tools hit walls, and you're left wondering if it's even worth it. It sucks. But it's not over.</p>
      <p>Picture this: You build and launch your website fast, no coding, no insane costs. That's the AI Coding Blueprint. I show you how, building a real website live with you. No fluff, no theory.</p>
      <p>Here's the deal:</p>
      <ul>
        <li>Get early access to every lesson as it drops</li>
        <li>Your feedback decides exactly what we learn next</li>
        <li>You lock in the lowest price before public launch</li>
      </ul>
      <p>Sound good? There's a twist: To kick things off, I'm giving away FREE 3 prompts to help you push through your biggest roadblock.</p>
      <p>Three spots. That's it.</p>
      <p>Just email me what you're building, what's blocked you, and what would happen if you could finally get unstuck. The most compelling stories get the prompts.</p>
      <p>Let's do this.</p>
      <p>Achyut</p>
    `,
    image: '/blog1.jpg',
    date: '3 days ago',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    readTime: '1 min read'
  },
  {
    id: '2',
    title: 'Prompt Engineering for Developers: Getting the Most Out of AI Code Assistants',
    content: `
      <p>If you're a developer in 2025, you've likely heard the buzz about AI code assistants—tools like GitHub Copilot, xAI's Grok, or Cursor that promise to turbocharge your workflow. These tools can churn out code snippets, suggest optimizations, and even debug errors faster than you can say "Stack Overflow." But here's the catch: they're only as good as the instructions you give them. Enter prompt engineering—the art of crafting clear, specific, and effective prompts to get the most out of these AI helpers.</p>
      
      <p>I've spent months experimenting with AI tools to build apps and websites, and I've learned one thing: prompt engineering isn't just for data scientists or chatbot enthusiasts. It's a game-changer for developers who want to save time, boost productivity, and create better products. In this guide, I'll share practical tips, real examples, and a few life lessons I've picked up along the way. Whether you're a beginner or a seasoned coder, this skill can transform how you work—and maybe even how you think about coding itself.</p>
      
      <h2>What is Prompt Engineering, and Why Should You Care?</h2>
      <p>At its core, prompt engineering is about communicating with AI in a way that gets you the results you want. Think of it like giving directions to a brilliant but slightly literal-minded intern. Vague instructions lead to vague outputs; precise, thoughtful prompts lead to gold.</p>
      
      <p>For developers, this means faster prototyping, cleaner code, and fewer headaches. Imagine you're building a React app and need a reusable component. A bad prompt like "Write me some code" might spit out a mess of unrelated snippets. But a good prompt—"Generate a React functional component for a responsive navbar with Tailwind CSS, including a hamburger menu for mobile"—delivers exactly what you need, ready to tweak and deploy.</p>
      
      <p>The payoff? You're not just saving time—you're unlocking AI's potential to handle repetitive tasks, leaving you free to focus on the creative, problem-solving parts of development that machines can't touch (yet).</p>
      
      <h2>Tip 1: Be Specific, but Not Overly Rigid</h2>
      <p>The first rule of prompt engineering is clarity. AI doesn't guess your intent—it follows your words. Let's say you're working on a Node.js backend and need a REST API endpoint. A prompt like "Write a Node.js function" is too broad. Instead, try: "Create a Node.js Express GET endpoint that fetches a list of users from a MongoDB database and returns them as JSON."</p>
      
      <p>It's not perfect—real-world apps need more error handling and security—but it's a solid starting point. The key is specificity: I told the AI the framework (Express), the database (MongoDB), and the output format (JSON). Too much detail, though, can backfire. If I'd added "use exactly 3 try-catch blocks," I'd limit the AI's flexibility unnecessarily.</p>
      
      <p>Life Lesson: Clarity matters in code and in life. Whether you're talking to AI or a teammate, saying what you mean saves everyone time.</p>
      
      <h2>Tip 2: Iterate Like a Pro</h2>
      <p>AI isn't a one-shot miracle. Sometimes the first output is close but not quite right. Don't give up—iterate. After getting the endpoint above, I noticed it lacked pagination, which is crucial for real apps. So I followed up with: "Add pagination to the GET /users endpoint with query parameters for page and limit."</p>
      
      <p>Now it's production-ready (with some tweaking). Iteration is your friend—treat AI like a collaborator, not a magic box.</p>
      
      <p>Life Lesson: Progress beats perfection. In coding and beyond, small adjustments often lead to big wins.</p>
      
      <h2>Tip 3: Leverage Context for Smarter Outputs</h2>
      <p>AI assistants shine when you give them context. If you're mid-project, tell the AI what you're working on. For example: "I'm building a Next.js e-commerce site. Write a component for a product card with image, title, price, and an 'Add to Cart' button." The AI can tailor its response to your stack and goals.</p>
      
      <p>I once asked an AI to "optimize a function" without context and got generic advice. When I added, "Optimize this Python script scraping a website for speed," it suggested async requests and caching—spot-on for my use case.</p>
      
      <p>Life Lesson: Context is king. The more you share—whether with AI or people—the better the help you'll get.</p>
      
      <h2>Tip 4: Experiment and Have Fun</h2>
      <p>Here's where the motivation kicks in: prompt engineering isn't just a skill—it's a playground. Try wild prompts like "Write a Flask app in the style of Shakespeare" (yes, I got iambic pentameter comments) or "Convert this JavaScript to TypeScript with full type safety." You'll be surprised at what AI can do—and what you can learn.</p>
      
      <p>Experimentation builds confidence. Every prompt you tweak teaches you more about AI's limits and your own creativity. And when you nail a complex task—like generating a full CRUD app in one go—it's a rush.</p>
      
      <h2>Getting Started Today</h2>
      <p>Ready to try it? Pick a small task—say, a CSS animation or a database query—and craft a prompt. Start simple, iterate, and watch the magic happen. Tools like Grok (shameless plug—I'm built by xAI!) or Copilot are free or cheap to test. Dedicate an hour this weekend, and you'll be hooked.</p>
      
      <h2>The Bigger Picture</h2>
      <p>AI code assistants won't replace you—they'll amplify you. Prompt engineering is your ticket to working smarter, not harder. It's about reclaiming time for the stuff that matters: dreaming up new apps, solving real problems, and maybe even building that passive income stream you've been eyeing. (More on that in a future post!)</p>
      
      <p>So, don't fear the tech—embrace it. You're not just a developer; you're a pioneer in a world where AI and human ingenuity are rewriting the rules. What will you build next?</p>
    `,
    image: '/blog2.jpg',
    date: '6 days ago',
    timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
    readTime: '5 min read'
  },
  {
    id: '3',
    title: 'Building Micro-SaaS Apps Faster with AI: A Path to Potential Passive Income',
    content: `
      <p>Imagine launching a tiny app that solves a specific problem, earns you money while you sleep, and doesn't require a team of developers or years of work. That's the promise of Micro-SaaS—small, niche software-as-a-service businesses you can build, launch, and maintain solo. Now, add AI into the mix, and you've got a recipe for creating these apps faster than ever. I've been experimenting with this approach myself, and I'm here to share how you can use AI to build Micro-SaaS apps, turn them into potential passive income streams, and learn a few life lessons along the way.</p>
      
      <p>This isn't a get-rich-quick scheme—building anything worthwhile takes effort—but AI can shave weeks off your development time and open doors to ideas you might've dismissed as too complex. Let's dive into what Micro-SaaS is, how AI supercharges the process, and how you can get started today.</p>
      
      <h2>What is Micro-SaaS, and Why Does It Matter?</h2>
      <p>Micro-SaaS apps are lightweight, subscription-based tools that target a specific audience or problem. Think of something like a scheduling tool for freelancers, a budget tracker for small businesses, or a content planner for bloggers. Unlike massive SaaS platforms (think Salesforce or Slack), Micro-SaaS focuses on simplicity and profitability with minimal overhead. You build it once, sell it to a niche market, and—if done right—enjoy recurring revenue with little ongoing maintenance.</p>
      
      <p>For developers like us, this is exciting. It's a chance to flex our skills, create something useful, and maybe even replace a chunk of active income with passive cash flow. The catch? Time and execution. That's where AI steps in.</p>
      
      <h2>How AI Accelerates Micro-SaaS Development</h2>
      <p>AI tools—think code assistants like GitHub Copilot, xAI's Grok (yep, that's me!), or even no-code platforms with AI integrations—can handle the heavy lifting, letting you focus on the big picture. Here's how I've used AI to build Micro-SaaS prototypes faster:</p>
      
      <h3>Idea Validation and Research</h3>
      <p>Before coding, you need a winning idea. I've asked AI to "list 10 underserved niches in productivity tools" or "analyze trends in small business software needs." The responses aren't perfect, but they spark ideas—like a task tracker for remote teams or a social media caption generator for influencers. Pair this with a quick X search for real user pain points, and you've got a solid starting point.</p>
      
      <h3>Rapid Prototyping</h3>
      <p>Let's say I settle on a "Freelancer Invoice Generator" as my Micro-SaaS idea. I'd prompt AI with: "Generate a Next.js app with a form for inputting client details, hours worked, and rates, plus a PDF invoice output using a library like jsPDF." In minutes, I'd get a functional skeleton. From there, I'd tweak the UI and add Stripe for payments—tasks AI can also assist with.</p>
      
      <h3>Content and Marketing</h3>
      <p>Micro-SaaS lives or dies by its landing page. I've used AI to draft copy: "Write a 200-word sales pitch for a Freelancer Invoice Generator that highlights ease of use and time savings." The output needs editing, but it cuts my writing time in half. AI can even suggest SEO keywords like "invoice tool for freelancers" or "automated billing app."</p>
      
      <h3>Testing and Debugging</h3>
      <p>AI isn't just for writing code—it can spot bugs. I've fed it messy code with a prompt like "Find errors in this JavaScript function and suggest fixes," and it's saved me hours of head-scratching.</p>
      
      <h2>A Real Example: My Experiment</h2>
      <p>Last month, I built a Micro-SaaS app—a "Niche Keyword Finder" for bloggers—using AI. I prompted Grok to "create a Python script that scrapes Google Trends for keyword data and filters for low-competition terms." After some iteration, I had a backend. I then used AI to whip up a simple React frontend and deployed it on Vercel. Total time? Two weekends. It's not raking in millions (yet), but with a $9/month subscription, five users cover my hosting costs—and it's growing.</p>
      
      <p>The lesson? AI doesn't just speed things up—it makes "impossible" projects feel doable.</p>
      
      <h2>The Passive Income Potential (Realistically)</h2>
      <p>Here's the honest truth: Micro-SaaS won't make you a millionaire overnight. But it can build steady income. A tool with 50 subscribers at $10/month nets you $500/month—passive after launch. Scale that to 100 users, or launch a second app, and you're looking at real money. The key is picking a niche with demand and marketing it well (AI can help there too—think automated email campaigns).</p>
      
      <p>Life Lesson: Small wins compound. A modest app today could fund your next big idea tomorrow.</p>
      
      <h2>Getting Started: Your First Micro-SaaS</h2>
      <p>Ready to try it? Here's a roadmap:</p>
      
      <ol>
        <li>Pick a Problem: Solve something you understand—like a tool for developers, creatives, or small businesses.</li>
        <li>Leverage AI: Use prompts like "Build a basic CRUD app in [your stack] for [your idea]." Iterate from there.</li>
        <li>Launch Lean: Get a minimum viable product (MVP) out fast—AI makes this easy. Use Stripe or Gumroad for payments.</li>
        <li>Market It: Share it on X, niche forums, or with a simple AI-generated landing page.</li>
      </ol>
      
      <p>Start small. My first attempt was a flop—a calorie tracker with no audience—but the failure taught me to research better. My second app stuck because I listened to real users.</p>
      
      <h2>Why This Matters Beyond Money</h2>
      <p>Building Micro-SaaS with AI isn't just about cash—it's about freedom. Freedom to experiment, to fail, to learn. Every app you launch hones your skills and confidence. And in 2025, with AI evolving daily, you're not just keeping up—you're ahead of the curve.</p>
      
      <p>Life Lesson: Don't wait for permission. AI hands you the tools to create something today—use them.</p>
      
      <h2>The Future is Yours</h2>
      <p>Micro-SaaS plus AI is a playground for developers. It's a chance to build, earn, and grow without burning out. Will every app be a hit? No. But each one is a step toward mastering this tech and maybe—just maybe—building that passive income stream you've dreamed of. So, what's your idea? Grab an AI assistant, start tinkering, and let's see where it takes you.</p>
    `,
    image: '/blog3.jpg',
    date: '9 days ago',
    timestamp: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000), // 9 days ago
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'The Future of AI: A World Transformed and the Rise of the AI-Savvy Generation',
    content: `
      <p>Artificial Intelligence (AI) isn't just a tool—it's a tidal wave reshaping the world as we know it. By April 2025, we're already seeing its ripples: OpenAI's $300 billion valuation, DeepSeek's open-source insurgency, and SoftBank's trillion-dollar robot factory gambit. But this is just the beginning. The future of AI promises a seismic shift in economies, societies, and individual fortunes. Here's what's coming—and why the young students betting big on AI might just outpace their peers in wealth and success.</p>

      <h2>AI's Global Takeover: The Next Decade</h2>
      <p>Picture this: by 2035, AI-powered robots assemble cars, homes, and even food in sprawling factories, like SoftBank's envisioned U.S. hubs. Algorithms don't just predict stock markets—they run them, as doubts about AI stocks today give way to dominance tomorrow. Creative industries, from Hollywood to music, lean harder on AI, blending human genius with machine precision (think Oscar-winning AI scripts). Bill Gates hints that AI won't touch a few sacred jobs—maybe doctors or therapists—but everything else? Fair game.</p>

      <p>The numbers back this up. If OpenAI's profitability timeline holds (2029), and DeepSeek's free models flood the market, AI's cost-to-power ratio will plummet, making it ubiquitous. Education will flip: universities might ditch calculus for neural network design. Geopolitics will tense as nations like China (with DeepSeek) and the U.S. (with OpenAI) vie for AI supremacy, while climate tech—powered by AI—could finally slow the planet's fever. The world won't just change; it'll be rebuilt.</p>

      <h2>Society Rewired: Winners and Losers</h2>
      <p>AI's impact won't be equal. Jobs will vanish—think truck drivers, accountants, even some coders—replaced by systems like Grok or V3. But new roles will explode: AI ethicists, model trainers, and robot wranglers. Wealth will concentrate where innovation thrives, rewarding those who master AI's levers. Social media, already shifting with Musk's X-to-AI pivot, could become an AI-driven influence machine, amplifying voices that harness it best. The catch? Access. If DeepSeek's open-source vision wins, the gap between tech haves and have-nots might shrink. If OpenAI's proprietary empire holds, expect a steeper divide.</p>

      <h2>The AI Generation's Edge</h2>
      <p>Now, consider the students in 2025. Some are grinding through traditional subjects—history, biology, law—while others are all-in on AI: coding, machine learning, data science. Who's set to strike it rich? The AI crew has a head start. Take the indie developer who hit $1 million MRR with an AI app in hours—proof that mastering tools like GPT-4o can turn a laptop into a goldmine. These kids aren't just learning tech; they're learning to build the future.</p>

      <p>Contrast that with traditional paths. Law might endure, but AI legal bots are coming. Biology's vital, but AI-driven biotech will lead. History? Inspiring, but not a cash cow. The data's clear: AI-related fields are growing faster—think 20% annually versus 3% for legacy sectors. Students who prioritize AI aren't just chasing trends; they're positioning for a world where adaptability trumps rote knowledge. They'll launch startups, snag high-paying tech gigs, or invent the next ChatGPT. Their peers in traditional lanes might succeed, but the ceiling's lower—AI's exponential curve favors the bold.</p>

      <h2>Risks and Realities</h2>
      <p>It's not all rosy. AI's hype could crash if stocks falter or if ethical scandals (like Grok's "unhinged" answers) erode trust. Students over-focusing on AI might miss soft skills—empathy, creativity—that machines can't fake (yet). And if AI automates too fast, even their jobs could vanish. But the odds tilt their way. DeepSeek's rise shows that free tools lower the entry bar, while OpenAI's ecosystem proves the payoff for mastery. Flexibility, not tradition, is the new currency.</p>

      <h2>The World Ahead</h2>
      <p>AI's future is a paradox: dazzling and daunting. It'll solve crises—climate, health—while sparking new ones—inequality, control. For the young, it's a golden ticket, but only if they ride the wave. Those prioritizing AI over traditional subjects aren't guaranteed riches, but they're betting on the right horse. In a world where AI writes the script, they're the ones holding the pen. The rest? They'll adapt—or watch from the sidelines.</p>

      <p>What's your take—will AI crown a new elite, or level the field? The future's unwritten, but the ink's already AI-powered.</p>
    `,
    image: '/blog4.jpg',
    date: '19 days ago',
    timestamp: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000), // 19 days ago
    readTime: '8 min read'
  },
  {
    id: '5',
    title: 'Gemini 2.5 Pro vs. DeepSeek V3-0324 vs. Claude 3.7 Sonnet: The Coding Showdown of 2025',
    content: `
      <p>The AI race in 2025 is a coder's dream—or nightmare, depending on your perspective. With Google's Gemini 2.5 Pro, DeepSeek's V3-0324, and Anthropic's Claude 3.7 Sonnet vying for supremacy, developers are spoiled for choice. But which one truly reigns supreme when it comes to coding capabilities and generation? Let's break it down, test their mettle, and crown a winner based on what matters: raw coding power, usability, and real-world results.</p>

      <h2>The Contenders</h2>
      <p>Gemini 2.5 Pro: Google's latest "thinking model," launched in March 2025, boasts a 1-million-token context window and claims to crush rivals in reasoning and coding. It's fast, free for basic use, and built for complex, multi-domain tasks.</p>
      <p>DeepSeek V3-0324: Released on March 24, 2025, this open-source beast from China's DeepSeek refines its V3 lineage. With 671 billion parameters (37 billion active per task), it's a cost-effective powerhouse, excelling in efficiency and raw output.</p>
      <p>Claude 3.7 Sonnet: Anthropic's hybrid reasoning model, out since February 2025, is the darling of coders. It's precise, readable, and dominates benchmarks like SWE-Bench with an 81.2% score, thanks to its "extended thinking" mode.</p>

      <h2>Coding Capabilities: The Head-to-Head</h2>
      <p>To judge these titans, we'll focus on three key areas: accuracy (does the code work?), complexity (can it handle tough tasks?), and generation quality (is it clean and usable?).</p>

      <h3>1. Accuracy</h3>
      <p>Gemini 2.5 Pro: Posts on X and early tests rave about its one-shot precision. Tasked with a JavaScript flight simulator, it nailed it—functional controls, smooth rendering, all in 570 lines. It scores 63.8% on SWE-Bench, edging out Claude's 62.3%. The catch? Some users report minor bugs in edge cases, requiring a quick debug.</p>
      <p>DeepSeek V3-0324: This model's a mixed bag. For a chess game in HTML, it churned out a whopping 2,372 lines—overkill, but it worked. It aces simpler tasks (90.2% on HumanEval) and beats Claude in LeetCode medium problems, but its verbosity can bloat projects unnecessarily.</p>
      <p>Claude 3.7 Sonnet: The gold standard for reliability. Its Minecraft game in Python was flawless—block placement, inventory, all spot-on in under 1,000 lines. With 94% first-pass correctness on SWE-Bench Verified, it's the least likely to need fixes.</p>
      <p>Winner: Claude 3.7 Sonnet. Precision trumps all, and Claude's consistency is unmatched.</p>

      <h3>2. Complexity</h3>
      <p>Gemini 2.5 Pro: That 1-million-token context window shines here. It tackled a 3D Rubik's Cube visualizer in Three.js—scramble, solve, animate—flawlessly in one go. Its reasoning chops (84% on GPQA) make it a beast for multi-step challenges.</p>
      <p>DeepSeek V3-0324: Surprisingly strong for a non-reasoning model. It built a metropolitan city simulation in 3JS—roads, traffic, toggles—scoring 3/4 on Composio's vibe-based test, outpacing Claude's 1/4. But it stumbles on intricate logic without extra prompts.</p>
      <p>Claude 3.7 Sonnet: The champ of tough coding. It rewrote a GTK3 app to GTK4 (under 2KLOC) with perfect logic and readability. Its hybrid reasoning mode shines, solving 89.1% of MATH benchmark problems in extended mode.</p>
      <p>Winner: Gemini 2.5 Pro. Its massive context and reasoning edge out Claude's finesse for sprawling, complex projects.</p>

      <h3>3. Generation Quality</h3>
      <p>Gemini 2.5 Pro: Clean, concise, and modern—570 lines for a chess game is lean compared to DeepSeek. But it's not as polished as Claude; some outputs feel rushed, lacking comments or structure.</p>
      <p>DeepSeek V3-0324: Quantity over quality. That 2,372-line chess game? Functional, but a mess—minimal comments, redundant code. It's production-ready only with heavy editing, though its speed (60 tokens/second) is a plus.</p>
      <p>Claude 3.7 Sonnet: The coder's poet. Its outputs are elegant—structured, documented, maintainable. A ray-tracing scene with spheres? Vibrant, efficient, and readable, rivaling Gemini but with better polish.</p>
      <p>Winner: Claude 3.7 Sonnet. Quality code saves time, and Claude delivers.</p>

      <h2>Real-World Edge</h2>
      <p>Gemini 2.5 Pro: Ideal for big projects—think full-stack apps or data-heavy workflows. Free access and speed make it a startup's dream, but you'll need to polish its rough edges.</p>
      <p>DeepSeek V3-0324: The budget king—$0.40 per million tokens vs. Claude's $15. Perfect for rapid prototyping or solo devs who don't mind refactoring. Open-source bonus: tweak it yourself.</p>
      <p>Claude 3.7 Sonnet: The pro's choice. Teams love its reliability and clarity; it's 28% faster at full software tasks. Pricey, but worth it for mission-critical code.</p>

      <h2>The Verdict</h2>
      <p>Best Overall: Claude 3.7 Sonnet. It's the coder's Swiss Army knife—accurate, polished, and reliable. If you want code that works out of the box and scales, Claude's your pick.</p>
      <p>Best for Complexity: Gemini 2.5 Pro. Its context window and reasoning make it unbeatable for massive, intricate tasks.</p>
      <p>Best Value: DeepSeek V3-0324. Cheap, fast, and capable—it's the underdog that punches up.</p>
      <p>In 2025, your choice depends on your gig. Solo dev on a budget? DeepSeek. Big team, big stakes? Claude. Crazy ambitious project? Gemini. The AI coding war's heating up, and we're all winning. Which one's your go-to? Drop your take below!</p>
    `,
    image: '/blog5.jpg',
    date: '27 days ago',
    timestamp: new Date(Date.now() - 27 * 24 * 60 * 60 * 1000), // 27 days ago
    readTime: '10 min read'
  }
]

export default function BlogPost() {
  const params = useParams()
  const id = params.id as string
  
  // Find the blog post with the matching ID
  const blog = BLOGS.find(post => post.id === id)
  
  // If no matching blog post is found
  if (!blog) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist.</p>
        <Link href="/" className="text-primary font-medium">
          Return to Home
        </Link>
      </div>
    )
  }
  
  // Calculate time since posting
  const timeAgo = formatDistanceToNow(blog.timestamp, { addSuffix: true })
  
  return (
    <div className="max-w-5xl mx-auto">
      <article className="bg-white rounded-lg p-8 shadow-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        <Link href="/" className="text-gray-600 inline-flex items-center mb-6 hover:text-black">
          <svg className="mr-1 w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>{blog.title}</h1>
        
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <span>{timeAgo}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>
        
        {/* Blog Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div 
          className="prose prose-lg max-w-none"
          style={{ fontSize: '14px' }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
      
      <SocialShare />
    </div>
  )
} 