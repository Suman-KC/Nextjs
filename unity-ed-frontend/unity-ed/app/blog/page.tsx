"use client";

import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imagePlaceholder: string;
  tags: string[];
}
const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Beyond the Playground: Understanding the True Impact of Bullying",
    excerpt: "Explore how addressing bullying and its emotional impact fosters safer learning environments, nurturing empathy, confidence, and positive social connections among students.",
    author: "Jane Doe",
    date: "October 26, 2025",
    imagePlaceholder: "https://placehold.co/800x400/80C0D8/FFFFFF?text=Featured+Learning+Tech",
    tags: ["Wellbeing", "Inclusion", "Resilience"],
  },
  {
    id: 2,
    title: "5 Strategies to Boost Student Engagement with UnityEd",
    excerpt: "From using badge rewards effectively to integrating short, fun challenges, these proven strategies will help you maximize the impact of gamification in your classroom environment.",
    author: "Sam Chen",
    date: "October 18, 2025",
    imagePlaceholder: "https://placehold.co/800x400/F0B5C6/FFFFFF?text=Engagement+Strategies",
    tags: ["Education", "Tips", "Teacher"],
  },
  {
    id: 3,
    title: "Understanding Data Analytics in Game-Based Assessments",
    excerpt: "Learn how the data collected by UnityEd can provide deep insights into student progress, pinpointing areas where individual students need extra help or advanced instruction.",
    author: "Alex Smith",
    date: "September 30, 2025",
    imagePlaceholder: "https://placehold.co/800x400/98DD9F/FFFFFF?text=Data+Insights",
    tags: ["Analytics", "Assessment"],
  },
];

// Reusable components

const BlogCard: React.FC<BlogPost> = ({ title, excerpt, author, date, imagePlaceholder, tags }) => (
  // Blog Post Card
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8 transition-shadow hover:shadow-xl">
    
    {/* Post Image */}
    <img 
      src={imagePlaceholder} 
      alt={title} 
      className="w-full h-48 object-cover rounded-lg mb-4"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = "https://placehold.co/800x400/D0D0D0/333333?text=Image+Load+Error";
      }}
    />

    {/* Tags */}
    <div className="flex space-x-2 mb-3">
      {tags.map((tag) => (
        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
          {tag}
        </span>
      ))}
    </div>

    {/* Title and Summary */}
    <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-700 cursor-pointer">{title}</h2>
    <p className="text-gray-600 mb-4">{excerpt}</p>

    {/* Author and Date */}
    <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
      <span>By **{author}**</span>
      <span>{date}</span>
    </div>
  </div>
);

const FeaturedPostCard = () => (
  // Sidebar Featured Post
  <div className="bg-white p-6 rounded-xl shadow-2xl border-l-4 border-blue-600 sticky top-4 mb-6">
    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <span className="mr-2 text-2xl">🌟</span> Featured Post
    </h3>
    <p className="text-gray-600 mb-4">
      **How Bullying Impacts Student Well-Being**
      <br />
      A look into its emotional impact and the need for empathy-driven learning.
    </p>
    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold transition duration-150 flex items-center">
      Read More <span className="ml-1">→</span>
    </a>
  </div>
);

const NewsletterSignupCard = () => (
  // Sidebar Newsletter Form
  <div className="bg-gray-100 p-6 rounded-xl shadow-inner border border-gray-200">
    <h3 className="text-xl font-bold text-gray-800 mb-3">Subscribe</h3>
    <p className="text-gray-600 text-sm mb-4">Get the latest insights delivered straight to your inbox.</p>
    
    <input
      type="email"
      placeholder="Your email address"
      className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-blue-500 focus:border-blue-500 text-sm"
    />
    
    <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-150 shadow-md">
      Subscribe
    </button>
  </div>
);

// The Blog Headline/Hero Section (Not a header)
const BlogPageBanner = () => (
    <section className="bg-white py-16 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-3">UnityEd Insights</h1>
            <p className="text-xl text-gray-600">Your source for educational technology trends, teacher tips, and gamification studies.</p>
        </div>
    </section>
);


// --- 4. MAIN PAGE COMPONENT ---

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* B. PAGE BANNER/HERO SECTION (Headline) */}
      <BlogPageBanner />

      {/* C. MAIN CONTENT AREA (Blog Grid) */}
      <main className="flex-grow max-w-7xl mx-auto px-8 py-12">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Latest Articles</h2>

        {/* Two-Column Layout: Blog List (2/3) and Sidebar (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Blog List */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {mockPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <FeaturedPostCard />
            <NewsletterSignupCard />
            
            {/* Categories/Tags box */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Gamification", "EdTech", "Teacher Tips", "SocialEmotionalLearning", "EmpathyEducation", "StudentWellBeing"].map(tag => (
                    <span key={tag} className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer transition">
                        #{tag}
                    </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
};

export default BlogPage;

