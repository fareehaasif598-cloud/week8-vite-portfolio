/* =============================================================
   WEEK 8 STARTER — src/projects.js
   Your projects array, card template, and render function —
   moved here from app.js. Everything used outside this file
   must have `export` in front of it.

   HOW TO USE THIS FILE:
   🔨 Replace the sample projects with your real ones.
   🔨 Write projectCard() — same logic as your Week 6 version.
   🔨 Write renderProjects() — same logic as your Week 6 version.
   ============================================================= */


/* =============================================================
   PROJECT DATA ✏️
   Replace with your real projects. Each object needs:
     title  — the project name (string)
     tech   — ONE OF: 'html' | 'css' | 'javascript'
     week   — the week number (number)
     desc   — a short description (string)
   ============================================================= */
export const projects = [
  {
    title: 'Portfolio v1',
    tech: 'html',
    week: 1,
    desc: 'Write a short description of your Week 1 project here.'
  },
  {
    title: 'Styled Profile Page',
    tech: 'css',
    week: 2,
    desc: 'Write a short description of your Week 2 project here.'
  },
  {
    title: 'Interactive Quiz App',
    tech: 'javascript',
    week: 5,
    desc: 'Write a short description of your Week 5 project here.'
  }
  // TIP: add more objects here as you build more projects!
];


/* =============================================================
   PROJECT CARD TEMPLATE 🔨
   Takes ONE project object, returns ONE HTML string.
   Use the classes already in src/style.css:
     .card  .tag  .card-title  .card-desc
   ============================================================= */
export const projectCard = (p) => ``;


/* =============================================================
   RENDER FUNCTION 🔨
   Takes any array of projects, fills in #project-grid.
   If the array is empty, show a friendly message instead
   (the .empty-state class is already styled for you).
   ============================================================= */
export function renderProjects(list) {

}
