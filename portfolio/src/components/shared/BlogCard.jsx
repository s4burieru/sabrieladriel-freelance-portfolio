/**
 * Reusable blog post card with thumbnail, meta info, excerpt, and tags.
 */
export default function BlogCard({ post }) {
  return (
    <a
      href={`/blog?id=${post.id}`}
      className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg hover:border-white/30 hover:bg-white/10 transition"
    >
      <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 group-hover:bg-black/50 transition duration-300"></div>
      </div>

      <div className="flex-1 flex flex-col p-4 sm:p-6 pb-6 sm:pb-8">
        {/* Post Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <img src="/assets/icons/calendar.svg" alt="calendar" className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assets/icons/clock.svg" alt="clock" className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-blue-600 transition">
          {post.title}
        </h3>

        <p className="text-sm sm:text-base text-gray-400 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author */}
        <div className="w-full h-px bg-gray-500/40 mt-6 mb-3"></div>
        <p className="text-xs text-gray-500">By {post.author}</p>
      </div>
    </a>
  );
}