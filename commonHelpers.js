(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c="43845799-470caa65ff354fc4cfb98d159";async function l(a){const r=`https://pixabay.com/api/?key=${c}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`;try{return await(await fetch(r)).json()}catch(o){throw new Error("Error fetching data:",o)}}function u(a){const r=document.querySelector(".gallery");r.innerHTML="",a.reduce((e,t)=>{const n=document.createElement("img");n.src=t.webformatURL,n.alt=t.tags,n.addEventListener("click",()=>{new SimpleLightbox(".gallery a").refresh()});const i=document.createElement("a");return i.href=t.largeImageURL,i.setAttribute("data-lightbox","gallery"),i.appendChild(n),e.push(i),e},[]).forEach(e=>{r.appendChild(e)}),new SimpleLightbox(".gallery a").refresh()}document.querySelector(".search-form").addEventListener("submit",async function(a){a.preventDefault();const r=document.querySelector(".search-input").value.trim();if(r===""){iziToast.error({title:"Error",message:"Please enter a search term."});return}try{document.querySelector(".loader").style.display="block";const o=await l(r);if(document.querySelector(".loader").style.display="none",o.hits.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}u(o.hits)}catch(o){console.error("Error fetching data:",o),iziToast.error({title:"Error",message:"An error occurred while fetching data. Please try again later."})}});
//# sourceMappingURL=commonHelpers.js.map