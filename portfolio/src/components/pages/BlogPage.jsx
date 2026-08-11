import { useState, useEffect } from "react";
import PageLayout from "../layout/PageLayout";
import BlogCard from "../shared/BlogCard";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [routeKey, setRouteKey] = useState(0);

  // Load blog posts on mount
  useEffect(() => {
    fetch("/data/blog-posts.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.error("Error loading blog posts:", err);
      });
  }, []);

  // Listen for route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setRouteKey((prev) => prev + 1);
    };

    window.addEventListener("react-route-change", handleRouteChange);
    return () =>
      window.removeEventListener("react-route-change", handleRouteChange);
  }, []);

  // Update selected post when route changes or posts load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");

    if (postId && posts.length > 0) {
      const post = posts.find((p) => p.id === parseInt(postId));
      setSelectedPost(post || null);
    } else {
      setSelectedPost(null);
    }
  }, [routeKey, posts]);

  // If a post is selected, show single post view
  if (selectedPost) {
    return (
      <PageLayout>
        {/* Single Blog Post Section */}
        <section
          id="single-blog-post"
          className="pt-40 md:pt-48 pb-16 md:pb-24 flex justify-center"
        >
          <div className="flex flex-col items-start w-full max-w-4xl px-6 sm:px-6 md:px-8">
            {/* Back to All Posts Link */}
            <a
              href="/blog"
              className="text-blue-500 hover:text-blue-400 transition mb-8 flex items-center gap-2"
            >
              <span>←</span> Back to All Posts
            </a>

            {/* Post Content Container */}
            <article className="w-full">
              {/* Post Header */}
              <div className="mb-8 md:mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                  {selectedPost.title}
                </h1>

                {/* Post Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm md:text-base text-gray-400">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/icons/calendar.svg"
                      alt="calendar"
                      className="w-4 h-4"
                    />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/icons/clock.svg"
                      alt="clock"
                      className="w-4 h-4"
                    />
                    <span>{selectedPost.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>By {selectedPost.author}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Image */}
              <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-12 md:mb-16">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post Content */}
              <div
                className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-12 text-lg md:text-xl"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              {/* Content Divider */}
              <div className="w-full h-px bg-gray-700 my-12 md:my-16"></div>

              {/* Author Info */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  About the Author
                </h3>
                <p className="text-gray-400">{selectedPost.author}</p>
              </div>
            </article>
          </div>
        </section>
      </PageLayout>
    );
  }

  // Show all blog posts
  return (
    <PageLayout>
      {/* Hero Section for Blog */}
      <section
        id="hero"
        className="flex items-center justify-center px-6 sm:px-6 md:px-8 pt-28 md:pt-24 pb-4 md:pb-8"
        style={{ minHeight: "50vh" }}
      >
        <div className="flex flex-col items-center max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center text-white">
            Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-2xl">
            Thoughts, experiences, and insights on technology, personal growth,
            and lessons learned from exploring.
          </p>
        </div>
      </section>

      {/* All Blog Posts Section */}
      <section
        id="all-blog-posts"
        className="pb-16 md:pb-24 px-6 sm:px-6 md:px-8 flex justify-center"
      >
        <div className="flex flex-col items-start w-full max-w-6xl">
          {/* Blog Posts Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {posts.length > 0
              ? posts.map((post) => <BlogCard key={post.id} post={post} />)
              : null}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}