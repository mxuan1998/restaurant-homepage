!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=document.querySelector("#content");var c=()=>{const e=(e=>{const t=document.createElement("h2");return t.innerHTML=e,t})("Welcome to Xuan's restaurant<br>the best restaurant in the world!"),t=(e=>{const t=document.createElement("p");return t.textContent=e,t})('"Amazing experience at this restaurant!" - J');r.innerHTML="",r.classList.remove("backdrop"),r.appendChild(e),r.appendChild(t)};const o=document.querySelector("#content"),d=[["Stir fried beef","minced beef, celery, salt, cumin, soy sauce"],["Egg fried rice","eggs, rice, soy sauce, salt"],["Boiled broccoli","broccoli, water, salt"],["Fried potato","potato, cumin, salt"],["Fried tomato & eggs","eggs, tomato, salt"],["Beef stew","beef cubes, radish, water, salt"],["Fried chicken","chicken, cumin, salt"]],a=e=>{const t=document.createElement("td");return t.textContent=e,t},i=e=>{d.forEach(t=>{e.appendChild((e=>{const t=document.createElement("tr");return t.appendChild(a(e[0])),t.appendChild(a(e[1])),t})(t))})},l=()=>{const e=document.createElement("table");return e.classList.add("menu-table"),(e=>{const t=document.createElement("tr"),n=document.createElement("th"),r=document.createElement("th");n.textContent="Menu",r.textContent="Ingredients",t.appendChild(n),t.appendChild(r),e.appendChild(t)})(e),i(e),e};var s=()=>{const e=document.createElement("div");e.classList.add("menu-container");const t=l(),n=(()=>{const e=document.createElement("img");return e.setAttribute("src","assets/food.png"),e})();e.appendChild(n),e.appendChild(t),o.classList.add("backdrop"),o.innerHTML="",o.appendChild(e)};const u=document.querySelector("#content"),m=(e,t)=>{const n=document.createElement("tr");return n.appendChild((e=>{const t=document.createElement("th");return t.innerHTML=e,t})(e)),n.appendChild((e=>{const t=document.createElement("td");return t.innerHTML=date,t})()),n};var p=()=>{const e=(e=>{const t=document.createElement("h2");return t.textContent=e,t})("Contact us"),t=(()=>{const e=document.createElement("table");return e.classList.add("contact-table"),e.appendChild(m("Email")),e.appendChild(m("Phone number")),e.appendChild(m("Address")),e})();u.classList.add("backdrop"),u.innerHTML="",u.appendChild(e),u.appendChild(t)};document.querySelectorAll(".nav-item");const f=document.querySelector("#home-button"),h=document.querySelector("#menu-button"),b=document.querySelector("#contact-button"),v=(document.querySelector("#content"),e=>{navButtons.forEach(t=>{t==e?t.classList.add("nav-item-selected"):t.classList.remove("nav-item-selected")})});f.addEventListener("click",()=>{v(void 0),c()}),h.addEventListener("click",()=>{v(void 0),s()}),b.addEventListener("click",()=>{v(void 0),p()}),contactDiv.addEventListener("animationend",()=>{(void 0).classList.remove("down-end-active")}),c()}]);