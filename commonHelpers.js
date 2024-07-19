import{S as b,i as m,a as L}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const t={searchForm:document.querySelector(".js-search-form"),galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-button")};function u(r,a=!1){const s=r.map(({largeImageURL:l,webformatURL:e,tags:o,likes:n,views:p,comments:h,downloads:y})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${l}">
        <img class="gallery-image" src="${e}" alt="${o}" width="340" height="200"/>
      </a>
      <ul class="inform-container">
        <li class="inform-item">
          <h3 class="inform-title">Likes</h3>
          <p>${n}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Views</h3>
          <p>${p}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Comments</h3>
          <p>${h}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Downloads</h3>
          <p>${y}</p>
        </li>
      </ul>
    </li>`).join("");a?t.galleryContainer.insertAdjacentHTML("beforeend",s):t.galleryContainer.innerHTML=s}function c(r){m.error({message:r||"Sorry, an error occurred. Try again!",backgroundColor:"#ef4040",maxWidth:432,timeout:3e3,messageColor:"#fafafb",messageSize:"16",theme:"dark",progressBarColor:"#b51b1b",position:"topRight"})}function v(){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}const f=new b(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});f.on("show.simplelightbox",function(){});const S="44899470-dc00d504e23887fc09aa8b920",C="https://pixabay.com/api/",i={q:"",page:1,per_page:15};async function g(r,a,s){const l={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:s};return(await L.get(C,{params:l})).data}m.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:"16px",titleColor:"#fff",titleLineHeight:"1.5",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"rgba(255, 182, 66, 0.8)"});t.searchForm.addEventListener("submit",M);t.loadMoreBtn.addEventListener("click",B);let d;async function M(r){r.preventDefault();const a=r.target.query.value.trim();if(!a){c("Enter data to search");return}i.q=a,i.page=1,t.galleryContainer.innerHTML="",t.loadMoreBtn.classList.remove("visible"),t.loader.classList.add("visible");try{const s=await g(a,i.page,i.per_page);if(d=Math.ceil(s.totalHits/i.per_page),s.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}u(s.hits),f.refresh(),d>i.page&&(t.loadMoreBtn.classList.add("visible"),setTimeout(()=>{t.loadMoreBtn.classList.add("fade-in")},3e3))}catch(s){c(s.message)}finally{t.loader.classList.remove("visible"),t.searchForm.reset()}}async function B(){t.loader.classList.add("visible"),t.loadMoreBtn.classList.remove("visible"),i.page+=1;try{const r=await g(i.q,i.page,i.per_page);u(r.hits,!0),f.refresh(),v(),d===i.page?(t.loadMoreBtn.classList.remove("visible"),m.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",maxWidth:432,timeout:3e3,messageColor:"#fafafb",messageSize:"16",theme:"dark",progressBarColor:"#b51b1b",position:"topRight"})):t.loadMoreBtn.classList.add("visible")}catch(r){c(r.message)}finally{t.loader.classList.remove("visible")}}
//# sourceMappingURL=commonHelpers.js.map
