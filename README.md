# Achyut's Blog

A personal blog website with email newsletter subscription, built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design
- Blog posts with dynamic content
- Time-tracking for posts (automatically updates "3 days ago" to "4 days ago" etc.)
- Email subscription with Mailchimp integration
- Admin panel for blog management
- Social media sharing
- SEO optimized

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3003](http://localhost:3003) to see the website.

## Email Subscription Setup

This blog uses Mailchimp for managing email subscriptions. To set it up:

1. Create a Mailchimp account at [mailchimp.com](https://mailchimp.com)
2. Create an audience (list) for your subscribers
3. Get your API key from Account → Extras → API Keys
4. Find your List ID under Audience → Settings → Audience name and defaults
5. Find your Server prefix from your API key (e.g., us19)
6. Add these details to your `.env` file:

```
MAILCHIMP_API_KEY=your-api-key-here
MAILCHIMP_LIST_ID=your-list-id-here
MAILCHIMP_SERVER=your-server-prefix
```

## Adding Blog Posts

Currently, blog posts are stored in arrays within the codebase:

1. Open `app/components/BlogList.tsx` and add a new entry to the `ALL_BLOG_POSTS` array with:
   - id
   - title
   - summary
   - image
   - date
   - timestamp
   - readTime

2. Then open `app/post/[id]/page.tsx` and add the same post with full content to the `BLOGS` array.

## Admin Panel

The admin panel is accessible at [http://localhost:3003/admin](http://localhost:3003/admin).

Default password: `admin123`

Note: The admin panel has a demo form for adding blog posts, but it's not connected to a database. In a production environment, you would connect this to a database or CMS.

## Deployment

For production deployment, we recommend using Vercel:

1. Create a Vercel account
2. Link your GitHub repository
3. Add your environment variables in the Vercel dashboard
4. Deploy

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Mailchimp API](https://mailchimp.com/developer/) - Email subscription management
- [date-fns](https://date-fns.org/) - Date utility library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is licensed under the MIT License. 