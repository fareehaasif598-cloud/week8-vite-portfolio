/* =============================================================
   WEEK 8 STARTER — src/main.js
   The ONLY file imported directly by index.html. Its job is to
   import the pieces from the other modules and wire them up on
   page load — it should NOT contain its own rendering or fetch
   logic.

   HOW TO USE THIS FILE:
   ✅  The CSS import below is already done — leave it as is.
   🔨 Import projects, projectCard, renderProjects from './projects.js'.
   🔨 Import fetchRepos, repoCard from './api.js'.
   🔨 Set USERNAME to your real GitHub username.
   🔨 Write initRepos() — fetch, render, handle loading/error states.
   🔨 Call renderProjects(projects) and initRepos() inside
       DOMContentLoaded.
   ============================================================= */

import './style.css';
import { projects, projectCard, renderProjects } from './projects.js';
import { fetchRepos, repoCard } from './api.js';

// TODO — import from './projects.js' and './api.js'


const USERNAME = 'fareehaasif598-cloud'; // ← change this!


/* =============================================================
   initRepos() 🔨
   1. Call fetchRepos(USERNAME) inside a try block.
   2. On success: call repoCard on each repo, join, set as the
      #repo-grid innerHTML.
   3. On failure (catch): show an error message in #repo-grid.
   4. In finally: hide #loading-indicator either way.
   ============================================================= */
async function initRepos() {
   const repoGrid = document.getElementById('repo-grid');
   const loadingIndicator = document.getElementById('loading-indicator');

   try {
      loadingIndicator.classList.remove('hidden'); 
      const repos = await fetchRepos(USERNAME);
      repoGrid.innerHTML = repos.map(repoCard).join('');

   }
   catch (error) {
      repoGrid.innerHTML = `
      <div class="error-state">
         <p>⚠️</p>
         <p>Error: ${error.message}</p>
       </div>
       `;
   }
   finally {
      loadingIndicator.classList.add('hidden');
   }
}


document.addEventListener('DOMContentLoaded', () => {
   renderProjects(projects);
   initRepos();
});
