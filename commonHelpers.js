(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();(()=>{const t=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=()=>{const e=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!e),t.classList.toggle("is-open")};n.addEventListener("click",r),s.addEventListener("click",r),window.matchMedia("(min-width: 1280px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),n.setAttribute("aria-expanded",!1))})})();window.addEventListener("load",()=>{const t=document.querySelector("[data-animation]");new IntersectionObserver((s,r)=>{s.forEach(e=>{e.isIntersecting&&t.setAttribute("data-animation","can-load")})},{threshold:.1}).observe(t)});document.getElementById("scrollDownToFooter").addEventListener("click",function(){const t=document.querySelector("footer");t&&t.scrollIntoView({behavior:"smooth"})});function c(){const t=document.querySelector("#register-form");t&&t.scrollIntoView({behavior:"smooth"})}document.getElementById("scrollDownToForm").addEventListener("click",c);document.getElementById("scrollDownToForm-lessons1").addEventListener("click",c);document.getElementById("scrollDownToForm-lessons2").addEventListener("click",c);document.getElementById("scrollDownToForm-lessons3").addEventListener("click",c);document.getElementById("scrollDownToForm-deal").addEventListener("click",c);
//# sourceMappingURL=commonHelpers.js.map
