// Load projects from JSON
async function loadProjects() {
  try {
    const response = await fetch('./data/projects.json');
    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

// Filter and sort projects
function filterAndSortProjects(projects, searchTerm, category) {
  let filtered = projects;

  // Filter by search term
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(project =>
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.technologies.some(tech => tech.toLowerCase().includes(term))
    );
  }

  // Filter by category
  if (category) {
    filtered = filtered.filter(project => project.category === category);
  }

  return filtered;
}

// Render projects with the generated HTML
function renderProjectsHTML(projects) {
  return projects.map(project => `
    <div class="group flex flex-col h-full min-h-110 sm:min-h-120 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 hover:bg-white/10 transition">
      <!-- Thumbnail Aspect Ratio (16:9) -->
      <div class="relative w-full aspect-video rounded-none overflow-hidden group-hover:border-white/50 transition">
        <img 
          src="${project.thumbnail}" 
          alt="${project.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div class="absolute inset-0 group-hover:bg-black/50 transition"></div>
        
        <!-- Project Link Buttons -->
        <div class="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
          ${project.website !== '#' ? `<a href="${project.website}" class="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-black rounded-lg font-semibold text-xs sm:text-sm hover:bg-gray-100 transition" title="View Website">View website</a>` : ''}
          ${project.source !== '#' ? `<a href="${project.source}" class="px-4 sm:px-5 py-2 sm:py-2.5 bg-white/20 border border-white text-white rounded-lg font-semibold text-xs sm:text-sm hover:bg-white/30 transition" title="View Source">View source</a>` : ''}
        </div>
      </div>
      
      <!-- Project Info -->
      <div class="flex-1 flex flex-col p-4 sm:p-6 md:p-7">
        <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">${project.title}</h3>
        <p class="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 flex-1">
          ${project.description}
        </p>
        
        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-2">
          ${project.technologies.map(tech => `
            <span class="inline-block px-3 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition">${tech}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Render featured projects (first 3)
async function renderFeaturedProjects() {
  const projects = await loadProjects();
  const container = document.getElementById('featured-projects-container');
  
  if (!container || projects.length === 0) return;

  container.innerHTML = renderProjectsHTML(projects.slice(0, 3));
}

// Render all projects with search and sort capability
async function renderAllProjects() {
  const projects = await loadProjects();
  const container = document.getElementById('projects-container');
  const searchInput = document.getElementById('search-input');
  const sortDropdown = document.getElementById('sort-dropdown');
  
  if (!container || projects.length === 0) return;

  // Function to update the display
  const updateDisplay = () => {
    const searchTerm = searchInput?.value || '';
    const category = sortDropdown?.value || '';
    const filtered = filterAndSortProjects(projects, searchTerm, category);
    
    if (filtered.length === 0) {
      container.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-gray-400">No projects found matching your criteria.</p></div>';
    } else {
      container.innerHTML = renderProjectsHTML(filtered);
    }
  };

  // Initial render
  updateDisplay();

  // Add event listeners for search and sort
  if (searchInput) {
    searchInput.addEventListener('input', updateDisplay);
  }
  
  if (sortDropdown) {
    sortDropdown.addEventListener('change', updateDisplay);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Load featured projects if on homepage
  if (document.getElementById('featured-projects-container')) {
    renderFeaturedProjects();
  }
  
  // Load all projects if on projects page
  if (document.getElementById('projects-container')) {
    renderAllProjects();
  }
});

