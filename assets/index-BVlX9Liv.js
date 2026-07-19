(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const a=[{title:"Portfolio v1",tech:"html",week:1,desc:"A personal portfolio page built with semantic HTML, sections, links, images, and basic page structure."},{title:"Styled Profile Page",tech:"css",week:2,desc:"A styled version of my profile page using custom fonts, colors, spacing, borders, shadows, and hover effects."},{title:"Interactive Quiz App",tech:"javascript",week:5,desc:"An interactive quiz app using JavaScript functions, arrays, DOM updates, click events, scoring, and a results screen."}],i=e=>`
  <article class="card" data-tech="${e.tech}">
    <span class="tag">Week ${e.week}</span>
    <h3 class="card-title">${e.title}</h3>
    <p class="card-desc">${e.desc}</p>
    <span class="tag">${e.tech}</span>
  </article>
  `;function d(e){const r=document.getElementById("project-grid");e.length===0?r.innerHTML=`
      <div class="empty-state">
        <p>No projects match your filter.</p>
      </div>
    `:r.innerHTML=e.map(i).join("")}async function l(e){const r=await fetch(`https://api.github.com/users/${e}/repos`);if(!r.ok)throw new Error("Could not load repositories. Please try again later.");return await r.json()}const p=e=>{const r=e.description?e.description:"No description provided.",o=e.language?e.language:"";return`
    <article class="card repo-card">
      <div class="repo-card__header">
        <h3 class="card-title">${e.name}</h3>
        <span class="repo-card__stars">⭐ ${e.stargazers_count}</span>
      </div>

      <p class="card-desc">${r}</p>

      ${o?`<span class="tag">${o}</span>`:""}

      <a
        class="card-link" 
        href="${e.html_url}" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Repository
      </a>
    </article>
  `},u="fareehaasif598-cloud";async function f(){const e=document.getElementById("repo-grid"),r=document.getElementById("loading-indicator");try{r.classList.remove("hidden");const o=await l(u);e.innerHTML=o.map(p).join("")}catch(o){e.innerHTML=`
      <div class="error-state">
         <p>⚠️</p>
         <p>Error: ${o.message}</p>
       </div>
       `}finally{r.classList.add("hidden")}}document.addEventListener("DOMContentLoaded",()=>{d(a),f()});
