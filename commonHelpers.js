(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(a){const r="43845799-470caa65ff354fc4cfb98d159",n=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}`;return fetch(n).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>e).catch(e=>{throw new Error("Error fetching data: "+e.message)})}function i(a){const r=document.querySelector(".gallery");r.innerHTML="",a.forEach(n=>{const e=`
      <a href="${n.largeImageURL}" data-lightbox="gallery">
        <img src="${n.webformatURL}" alt="${n.tags}" />
      </a>
    `;r.insertAdjacentHTML("beforeend",e)}),new SimpleLightbox(".gallery a").refresh()}document.querySelector(".search-form").addEventListener("submit",function(a){a.preventDefault();const r=document.querySelector(".search-input").value.trim();if(r===""){iziToast.error({title:"Error",message:"Please enter a search term."});return}document.querySelector(".loader").style.display="block",c(r).then(o=>{if(document.querySelector(".loader").style.display="none",o.hits.length===0){i([]),iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}i(o.hits)}).catch(o=>{document.querySelector(".loader").style.display="none",console.error("Error fetching data:",o),iziToast.error({title:"Error",message:"An error occurred while fetching data. Please try again later."})})});
//# sourceMappingURL=commonHelpers.js.map
