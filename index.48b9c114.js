var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire723b;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire723b=o);var a=o("caWkO");function r(e,t){return t.filter((e=>null!==e.poster_path&&0!==e.genre_ids.length)).map((t=>{let n="";for(let o=0;o<t.genre_ids.length;o++)for(let a=0;a<e.length;a++)e[a].id===t.genre_ids[o]&&(o<t.genre_ids.length-1?n+=e[a].name+", ":n+=e[a].name);return`<li class="movie">\n          <div class="movie__box">\n            <img class="movie__img" id='${t.id}'\n              src="https://image.tmdb.org/t/p/w500${t.poster_path}"\n              alt="${t.title}"\n            />\n          </div>\n          <div class="movie__desc">\n            <h3 class="movie__title">${t.title}</h3>\n            <p class="movie__genre">${n} | ${t.release_date.slice(0,4)}</p>\n          </div>\n        </li>`})).join("")}a=o("caWkO");const i=document.querySelector(".pagination__start"),s=document.querySelector(".pagination__decorStart"),c=document.querySelector(".pagination__list"),l=document.querySelector(".pagination__end"),d=document.querySelector("#back"),u=document.querySelector(".movies"),m=document.querySelector(".pagination"),v=document.querySelector("#search-form"),g=document.querySelector("#trend"),p=document.querySelector("#logo");async function _(e,t,n,o,_=""){if(m.classList.remove("none"),1===e){c.innerHTML="";for(let t=e;t<e+5;t++){const n=document.createElement("li");n.textContent=`${t}`,n.textContent===`${e}`&&n.classList.add("pagination__item--active"),n.classList.add("pagination__item"),c.append(n)}d.classList.add("none"),s.classList.add("none"),i.classList.add("none"),l.textContent=`${t}`,m.addEventListener("click",L)}async function L(a){if(console.log(a.target.id),"forward"===a.target.id||"right"===a.target.id||"back"===a.target.id||"left"===a.target.id){"forward"!==a.target.id&&"right"!==a.target.id||(e+=1,d.classList.remove("none"),d.removeAttribute("disabled"),i.classList.remove("none"),s.classList.remove("none"),c.innerHTML=""),("back"===a.target.id||"left"===a.target.id)&&e>1&&(e-=1,c.innerHTML="");try{const a=await n(),m=await o(e,_);console.log(m),u.innerHTML=r(a,m.results),c.innerHTML="",1===e&&(d.classList.add("none"),s.classList.add("none"),i.classList.add("none"),l.textContent=`${t}`,c.innerHTML="");for(let t=e;t<e+5;t++){const n=document.createElement("li");n.textContent=`${t}`,n.textContent===`${e}`&&n.classList.add("pagination__item--active"),n.classList.add("pagination__item"),c.append(n)}}catch(e){console.log(e)}}}v.addEventListener("input",(()=>m.removeEventListener("click",L))),o===a.movieSearchApi&&(g.addEventListener("click",(()=>m.removeEventListener("click",L))),p.addEventListener("click",(()=>m.removeEventListener("click",L))))}const L=document.querySelector("#search-form"),f=document.querySelector(".movies");async function y(){L.elements.searchQuery.value="";let e=0;try{const t=await(0,a.genresList)(),n=await(0,a.moviesApi)(1);console.log(n),n.total_pages>0&&(e=n.total_pages,f.innerHTML=r(t,n.results),_(1,e,a.genresList,a.moviesApi))}catch(e){console.log(e)}}a=o("caWkO");const h=document.querySelector("#search"),b=document.querySelector("#search-form"),q=document.querySelector(".pagination"),S=document.querySelector(".movies");const k=document.querySelector(".movies"),w=document.querySelector("#search"),E=document.querySelector(".header__error"),$=document.querySelector(".pagination"),x=document.querySelector("#search-form");function T(e){let t="";for(let n=0;n<e.genres.length;n++)n<e.genres.length-1?t+=e.genres[n].name+", ":t+=e.genres[n].name;return`\n    <img class="modal__img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}" />\n    <div class="modal__box">\n      <p class="modal__title">${e.title}</p>\n      <table class="modal__info">\n        <tbody>\n          <tr>\n            <td class="modal__item one">Vote / Votes</td>\n            <td class="votes one"><span class="vote">${e.vote_average}</span> / ${e.vote_count}</td>\n          </tr>\n          <tr>\n            <td class="modal__item center">Popularity</td>\n            <td class="popularity center">${e.popularity}</td>\n          </tr>\n          <tr>\n            <td class="modal__item center">Original Title</td>\n            <td class="original center">${e.original_title}</td>\n          </tr>\n          <tr>\n            <td class="modal__item">Genre</td>\n            <td class="genre">${t}</td>\n          </tr>\n        </tbody>\n      </table>\n      <p class="modal__about">About</p>\n      <p class="modal__description">${e.overview}</p>\n      <div class="modal__boxBtn">\n        <button class="modal__btn" type="button" data-add-watched>add to watched</button>\n        <button class="modal__btn" type="button" data-add-queue>add to queue</button>\n      </div>\n    </div>`}a=o("caWkO");var M=o("5sIPK");function A(e){return{id:e.id,title:e.title,img:e.poster_path,date:e.release_date,genres:e.genres}}async function H(e){const t={closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal")};try{const n=await(0,a.moviePageApi)(e);console.log(n),t.backdrop.classList.remove("is-hidden"),t.modal.innerHTML=T(n);const o=document.querySelector("[data-add-watched]"),r=document.querySelector("[data-add-queue]");t.closeModalBtn.addEventListener("click",(function(){t.backdrop.classList.add("is-hidden")})),o.addEventListener("click",(function e(){const t=M.default.load("watched")||[],a=t.map((e=>e.id));if(console.log(a),a.includes(n.id))return void o.removeEventListener("click",e);t.push(A(n)),M.default.save("watched",t),o.removeEventListener("click",e)})),r.addEventListener("click",(function e(){const t=M.default.load("queue")||[];if(t.map((e=>e.id)).includes(n.id))return void r.removeEventListener("click",e);t.push(A(n)),M.default.save("queue",t),r.removeEventListener("click",e)}))}catch(e){console.log(e)}}const O=document.querySelector("#trend"),C=document.querySelector("#logo"),W=document.querySelector("#search-form"),B=document.querySelector(".movies");let D=0;0===D&&(D+=1,y()),W.addEventListener("input",(()=>{0!==D&&(D=0),w.removeAttribute("disabled"),k.innerHTML="",E.classList.add("none"),$.classList.add("none"),console.log(x.elements.searchQuery.value)})),W.addEventListener("submit",(async function(e){e.preventDefault(),h.setAttribute("disabled","");let t=b.elements.searchQuery.value.trim();if(console.log(t),!t)return void errorSeach.classList.remove("none");let n=0;try{const e=await(0,a.genresList)(),o=await(0,a.movieSearchApi)(1,t);if(console.log(o),0===o.results.length)return void errorSeach.classList.remove("none");n=o.total_pages,S.innerHTML=r(e,o.results),q.classList.remove("none"),_(1,n,a.genresList,a.movieSearchApi,t)}catch(e){console.log(e)}})),O.addEventListener("click",(()=>{0===D&&(D+=1,y())})),C.addEventListener("click",(()=>{0===D&&(D+=1,y())})),B.addEventListener("click",(e=>H(e.target.id)));
//# sourceMappingURL=index.48b9c114.js.map
