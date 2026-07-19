/* =============================================================
   WEEK 8 STARTER — src/api.js
   Your Week 7 GitHub fetch logic, moved into its own module.
   The LOGIC doesn't change — only the file it lives in and the
   `export` keyword in front of each piece.

   HOW TO USE THIS FILE:
   🔨 Paste your fetchRepos() function from Week 7. Add `export`.
   🔨 Paste your repoCard() template function. Add `export`.
   ============================================================= */


/* =============================================================
   FETCH FUNCTION 🔨
   async function. Fetches the given user's repos, checks
   response.ok, and returns the parsed array. Throw an Error
   on a bad response — let the CALLER (main.js) catch it.
   ============================================================= */
export async function fetchRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);

  if (!response.ok) {
    throw new Error('Could not load repositories. Please try again later.');
}

const repos = await response.json();
return repos;
}


/* =============================================================
   REPO CARD TEMPLATE 🔨
   Takes ONE repo object, returns ONE HTML string.
   Handle null description and null language safely.
   Use the classes already in src/style.css:
     .card  .repo-card__header  .repo-card__stars  .card-desc  .tag
   ============================================================= */
export const repoCard = (repo) => {
  const description = repo.description ? repo.description : 'No description provided.';
  const language = repo.language ? repo.language : '';

  return `
    <article class="card repo-card">
      <div class="repo-card__header">
        <h3 class="card-title">${repo.name}</h3>
        <span class="repo-card__stars">⭐ ${repo.stargazers_count}</span>
      </div>

      <p class="card-desc">${description}</p>

      ${language ? `<span class="tag">${language}</span>` : ''}

      <a
        class="card-link" 
        href="${repo.html_url}" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Repository
      </a>
    </article>
  `;
};