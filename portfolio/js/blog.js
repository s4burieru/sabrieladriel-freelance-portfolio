// Load blog posts from JSON
async function loadBlogPostsData() {
  try {
    const response = await fetch('./data/blog-posts.json');
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

// Render blog posts in the featured blog section (homepage)
async function renderFeaturedBlogPosts() {
  const posts = await loadBlogPostsData();
  const container = document.getElementById('blog-posts-container');
  
  if (!container || posts.length === 0) return;

  container.innerHTML = posts.slice(0, 3).map(post => `
    <a href="blog.html?id=${post.id}" class="group flex flex-col h-full min-h-110 sm:min-h-120 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 hover:bg-white/10 transition">
      <!-- Thumbnail Aspect Ratio (16:9) -->
      <div class="relative w-full aspect-video rounded-none overflow-hidden group-hover:border-white/50 transition">
        <img 
          src="${post.image}" 
          alt="${post.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div class="absolute inset-0 group-hover:bg-black/50 transition"></div>
      </div>
      
      <!-- Blog Post Info -->
      <div class="flex-1 flex flex-col p-4 sm:p-6 md:p-7">
        <!-- Date and Read Time -->
        <div class="flex items-center gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
          <span class="flex items-center gap-1">
            <img src="./assets/icons/calendar.svg" alt="calendar" class="w-3.8 h-3.8"> ${post.date}
          </span>
          <span class="flex items-center gap-1">
            <img src="./assets/icons/clock.svg" alt="clock" class="w-4 h-4"> ${post.readTime} min read
          </span>
        </div>
        
        <!-- Title -->
        <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-600 transition">
          ${post.title}
        </h3>
        
        <!-- Excerpt -->
        <p class="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 flex-1">
          ${post.excerpt}
        </p>
        
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-4">
          ${post.tags.map(tag => `<span class="inline-block px-3 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition">${tag}</span>`).join('')}
        </div>
        
        <!-- Author Line Separator -->
        <div class="w-full h-px bg-gray-500/40 mb-3"></div>
        
        <!-- Author -->
        <p class="text-xs text-gray-500">By ${post.author}</p>
      </div>
    </a>
  `).join('');
}

// Render all blog posts (blog page)
async function renderAllBlogPosts() {
  const posts = await loadBlogPostsData();
  const container = document.getElementById('all-blog-posts-container');
  
  if (!container || posts.length === 0) return;

  container.innerHTML = posts.map(post => `
    <a href="blog.html?id=${post.id}" class="group flex flex-col h-full min-h-110 sm:min-h-120 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 hover:bg-white/10 transition">
      <!-- Thumbnail Aspect Ratio (16:9) -->
      <div class="relative w-full aspect-video rounded-none overflow-hidden group-hover:border-white/50 transition">
        <img 
          src="${post.image}" 
          alt="${post.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div class="absolute inset-0 group-hover:bg-black/50 transition"></div>
      </div>
      
      <!-- Blog Post Info -->
      <div class="flex-1 flex flex-col p-4 sm:p-6 md:p-7">
        <!-- Date and Read Time -->
        <div class="flex items-center gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
          <span class="flex items-center gap-1">
            <img src="./assets/icons/calendar.svg" alt="calendar" class="w-3.8 h-3.8"> ${post.date}
          </span>
          <span class="flex items-center gap-1">
            <img src="./assets/icons/clock.svg" alt="clock" class="w-4 h-4"> ${post.readTime} min read
          </span>
        </div>
        
        <!-- Title -->
        <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-600 transition">
          ${post.title}
        </h3>
        
        <!-- Excerpt -->
        <p class="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 flex-1">
          ${post.excerpt}
        </p>
        
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-4">
          ${post.tags.map(tag => `<span class="inline-block px-3 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition">${tag}</span>`).join('')}
        </div>
        
        <!-- Author Line Separator -->
        <div class="w-full h-px bg-gray-500/40 mb-3"></div>
        
        <!-- Author -->
        <p class="text-xs text-gray-500">By ${post.author}</p>
      </div>
    </a>
  `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Load featured posts if on homepage
  if (document.getElementById('blog-posts-container')) {
    renderFeaturedBlogPosts();
  }
  
  // Load all posts if on blog page
  if (document.getElementById('all-blog-posts-container')) {
    renderAllBlogPosts();
  }
});
