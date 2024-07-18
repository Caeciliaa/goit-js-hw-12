import{S as w,i as u,a as S}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const g=document.querySelector(".gallery");function p(r){return r.map(({largeImageURL:t,webformatURL:o,tags:a,likes:e,views:s,comments:c,downloads:L})=>`<li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${o}"
          alt="${a}"
          width="340"
          height="200"
        />
      </a>
      <ul class="inform-container">
        <li class="inform-item">
          <h3 class="inform-title">Likes</h3>
          <p>${e}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Views</h3>
          <p>${s}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Comments</h3>
          <p>${c}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Downloads</h3>
          <p>${L}</p>
        </li>
      </ul>
    </li>`).join("")}function h(r){return u.error({message:r||"Sorry, an error occurred. Try again!",backgroundColor:"#ef4040",maxWidth:432,timeout:3e3,messageColor:"#fafafb",messageSize:"16",theme:"dark",progressBarColor:"#b51b1b",position:"topRight"})}const f=new w(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});f.on("show.simplelightbox",function(){});const C="44899470-dc00d504e23887fc09aa8b920",v="https://pixabay.com/api/";async function y(r,t,o){const a=`${v}?key=${C}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`;try{const e=await S.get(a);if(e.status!==200)throw new Error(e.status);return e.data}catch(e){throw new Error(e.response?e.response.status:e.message)}}u.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:"16px",titleColor:"#fff",titleLineHeight:"1.5",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"rgba(255, 182, 66, 0.8)"});let d="",n=1;const l=15,$=document.querySelector(".js-search-form"),m=document.querySelector(".loader"),b=document.querySelector(".gallery"),i=document.querySelector(".load-button");$.addEventListener("submit",E);i.addEventListener("click",q);async function E(r){if(r.preventDefault(),d=r.currentTarget.elements.query.value.trim(),d==="")return g.innerHTML="",h("Enter data to search");g.innerHTML="",n=1,m.classList.remove("hidden"),i.classList.add("hidden");try{const t=await y(d,n,l);if(console.log("API Response:",t),t.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");const o=p(t.hits);b.innerHTML=o,f.refresh(),i.classList.remove("hidden"),(t.hits.length<l||t.totalHits<=n*l)&&(i.classList.add("hidden"),u.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",maxWidth:432,timeout:3e3,messageColor:"#fafafb",messageSize:"16",theme:"dark",progressBarColor:"#b51b1b",position:"topRight"}))}catch(t){h(t.message)}finally{m.classList.add("hidden")}inputForm.reset()}async function q(){n+=1,m.classList.remove("hidden"),i.classList.add;try{const r=await y(d,n,l);console.log("API Response:",r);const t=p(r.hits);b.insertAdjacentHTML("beforeend",t),f.refresh(),i.classList.remove("hidden");const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),(r.hits.length<l||r.totalHits<=n*l)&&(i.classList.add("hidden"),u.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",maxWidth:432,timeout:3e3,messageColor:"#fafafb",messageSize:"16",theme:"dark",progressBarColor:"#b51b1b",position:"topRight"}))}catch(r){h(r.message)}finally{m.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
