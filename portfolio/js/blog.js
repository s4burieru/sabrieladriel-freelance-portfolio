// Get URL parameters
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return params;
}

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

// Render single blog post
async function renderSingleBlogPost() {
  const params = getUrlParams();
  const postId = parseInt(params.get('id'));
  const posts = await loadBlogPostsData();
  const post = posts.find(p => p.id === postId);
  
  if (!post) {
    window.location.href = 'blog.html';
    return;
  }

  const container = document.getElementById('single-blog-post-container');
  if (!container) return;

  container.innerHTML = `
    <div class="w-full">
      <!-- Post Header -->
      <div class="mb-8 md:mb-12">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
          ${post.title}
        </h1>
        
        <!-- Post Meta Info -->
        <div class="flex flex-wrap items-center gap-4 mb-8 text-sm md:text-base text-gray-400">
          <div class="flex items-center gap-2">
            <img src="./assets/icons/calendar.svg" alt="calendar" class="w-4 h-4">
            <span>${post.date}</span>
          </div>
          <div class="flex items-center gap-2">
            <img src="./assets/icons/clock.svg" alt="clock" class="w-4 h-4">
            <span>${post.readTime} min read</span>
          </div>
          <div class="flex items-center gap-2">
            <span>By ${post.author}</span>
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          ${post.tags.map(tag => `<span class="inline-block px-3 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full text-white">${tag}</span>`).join('')}
        </div>
      </div>

      <!-- Featured Image -->
      <div class="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-12 md:mb-16">
        <img 
          src="${post.image}" 
          alt="${post.title}" 
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Post Content -->
      <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-12 text-lg md:text-xl">
        ${post.content}
      </div>

      <!-- Content Divider -->
      <div class="w-full h-px bg-gray-700 my-12 md:my-16"></div>

      <!-- Author Info -->
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
        <h3 class="text-xl font-bold text-white mb-2">About the Author</h3>
        <p class="text-gray-400">${post.author}</p>
      </div>
    </div>
  `;

  // Show single post section and hide grid
  document.getElementById('single-blog-post').style.display = 'flex';
  document.getElementById('all-blog-posts').classList.add('hidden');
  document.getElementById('hero').classList.add('hidden');
  
  // Show back to posts link
  document.getElementById('back-to-posts-link').style.display = 'flex';
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
      <div class="flex-1 flex flex-col px-6 sm:px-6 md:px-6 py-6 sm:py-6 md:py-6">
        <!-- Date and Read Time -->
        <div class="flex items-center gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
          <span class="flex items-center gap-1">
            <img src="./assets/icons/calendar.svg" alt="calendar" class="w-4 h-4"> ${post.date}
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
      <div class="flex-1 flex flex-col px-6 sm:px-6 md:px-6 py-6 sm:py-6 md:py-6">
        <!-- Date and Read Time -->
        <div class="flex items-center gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
          <span class="flex items-center gap-1">
            <img src="./assets/icons/calendar.svg" alt="calendar" class="w-4 h-4"> ${post.date}
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
  const params = getUrlParams();
  const postId = params.get('id');

  // If an id parameter exists, show single post view
  if (postId) {
    renderSingleBlogPost();
  } else {
    // Load featured posts if on homepage
    if (document.getElementById('blog-posts-container')) {
      renderFeaturedBlogPosts();
    }
    
    // Load all posts if on blog page
    if (document.getElementById('all-blog-posts-container')) {
      renderAllBlogPosts();
    }
  }
});
