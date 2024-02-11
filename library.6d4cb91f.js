var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire723b;function l(e){return e.map((e=>{let t="";for(let n=0;n<e.genres.length;n++)n<e.genres.length-1?t+=e.genres[n].name+", ":t+=e.genres[n].name;return`<li class="movie">\n          <div class="movie__box">\n            <img class="movie__img" id='${e.id}'\n              src="https://image.tmdb.org/t/p/w500${e.img}"\n              alt="${e.title}"\n            />\n          </div>\n          <div class="movie__desc">\n            <h3 class="movie__title">${e.title}</h3>\n            <p class="movie__genre">${t} | ${e.date.slice(0,4)}</p>\n          </div>\n        </li>`})).join("")}function a(e){let t="";for(let n=0;n<e.genres.length;n++)n<e.genres.length-1?t+=e.genres[n].name+", ":t+=e.genres[n].name;return`\n    <img class="modal__img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}" />\n    <div class="modal__box">\n      <p class="modal__title">${e.title}</p>\n      <table class="modal__info">\n        <tbody>\n          <tr>\n            <td class="modal__item one">Vote / Votes</td>\n            <td class="votes one"><span class="vote">${e.vote_average}</span> / ${e.vote_count}</td>\n          </tr>\n          <tr>\n            <td class="modal__item center">Popularity</td>\n            <td class="popularity center">${e.popularity}</td>\n          </tr>\n          <tr>\n            <td class="modal__item center">Original Title</td>\n            <td class="original center">${e.original_title}</td>\n          </tr>\n          <tr>\n            <td class="modal__item">Genre</td>\n            <td class="genre">${t}</td>\n          </tr>\n        </tbody>\n      </table>\n      <p class="modal__about">About</p>\n      <p class="modal__description">${e.overview}</p>\n      <div class="modal__boxBtn">\n        <button class="modal__btn" type="button" data-delete>delete</button>\n      </div>\n    </div>`}null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire723b=o);var d=o("caWkO"),i=o("5sIPK");const r=document.querySelector("#library");async function s(e,t){const n={closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal")};try{const s=await(0,d.moviePageApi)(e);console.log(s),n.backdrop.classList.remove("is-hidden"),n.modal.innerHTML=a(s);const c=document.querySelector("[data-delete]");function o(){n.backdrop.classList.add("is-hidden")}n.closeModalBtn.addEventListener("click",o),c.addEventListener("click",(function(){if(0===t){const e=i.default.load("watched").filter((e=>s.id!==e.id));i.default.save("watched",e),r.innerHTML=l(e)}if(1===t){const e=i.default.load("queue").filter((e=>s.id!==e.id));i.default.save("queue",e),r.innerHTML=l(e)}o()}))}catch(u){console.log(u)}}i=o("5sIPK");const c=document.querySelector("[data-watched]"),u=document.querySelector("[data-queue]"),m=document.querySelector("#library");let g;c.addEventListener("click",(function e(){g=0;const t=i.default.load("watched")||[];if(console.log("hello"),0===t.length)return m.innerHTML="",void c.removeEventListener("click",e);m.innerHTML=l(t)})),u.addEventListener("click",(function e(){g=1;const t=i.default.load("queue")||[];if(console.log("goodbay"),0===t.length)return m.innerHTML="",void u.removeEventListener("click",e);m.innerHTML=l(t)})),m.addEventListener("click",(e=>s(e.target.id,g)));
//# sourceMappingURL=library.6d4cb91f.js.map
