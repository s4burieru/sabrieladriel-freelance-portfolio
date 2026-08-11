import { useState, useEffect } from "react";
import SectionHeader from "../shared/SectionHeader";
import BlogCard from "../shared/BlogCard";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/blog-posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 3)))
      .catch((err) => console.error("Error loading blog posts:", err));
  }, []);

  return (
    <section
      id="blog"
      className="py-16 md:py-24 px-6 sm:px-6 md:px-8 flex justify-center"
    >
      <div className="flex flex-col items-start w-full max-w-6xl">
        <SectionHeader
          label="WRITING"
          title="Recent Blog Posts."
          description="Insights on technology, practices, and lessons learned from exploring."
          link={{ href: "/blog", label: "View All Posts" }}
        />

        {/* Blog Posts Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.length > 0
            ? posts.map((post) => <BlogCard key={post.id} post={post} />)
            : // Skeleton loading placeholders
              [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse"
                >
                  <div className="w-full aspect-video bg-white/10"></div>
                  <div className="flex-1 p-4 sm:p-6">
                    <div className="h-3 bg-white/10 rounded w-1/2 mb-3"></div>
                    <div className="h-5 bg-white/10 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                    <div className="h-4 bg-white/10 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}