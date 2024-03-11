var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire723b;function o(e){return e.map((e=>{let t="";for(let n=0;n<e.genres.length;n++)n<e.genres.length-1?t+=e.genres[n].name+", ":t+=e.genres[n].name;return`<li class="movie">\n          <div class="movie__box">\n            <img class="lazyload movie__img" id='${e.id}'\n              src="./images/Rectangle.png"\n              data-src="https://image.tmdb.org/t/p/w500${e.img}"\n              alt="${e.title}"\n            />\n          </div>\n          <div class="movie__desc">\n            <h3 class="movie__title">${e.title}</h3>\n            <p class="movie__genre">${t} | ${e.date.slice(0,4)}\n            <span class="movie__vote">${e.vote.toFixed(1)}</span></p>\n          </div>\n        </li>`})).join("")}function d(e){let t="";for(let n=0;n<e.genres.length;n++)n<e.genres.length-1?t+=e.genres[n].name+", ":t+=e.genres[n].name;return`\n    <img class="modal__img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}" />\n    <div class="modal__box">\n      <p class="modal__title">${e.title}</p>\n      <table class="modal__info">\n        <tbody>\n          <tr>\n            <td class="modal__item one">Vote / Votes</td>\n            <td class="votes one"><span class="vote">${e.vote_average.toFixed(1)}</span> / ${e.vote_count}</td>\n          </tr>\n          <tr>\n            <td class="modal__item center">Popularity</td>\n            <td class="popularity center">${e.popularity.toFixed(1)}</td>\n          </tr>\n          <tr>\n            <td class="modal__item center">Original Title</td>\n            <td class="original center">${e.original_title}</td>\n          </tr>\n          <tr>\n            <td class="modal__item">Genre</td>\n            <td class="genre">${t}</td>\n          </tr>\n        </tbody>\n      </table>\n      <p class="modal__about">About</p>\n      <p class="modal__description">${e.overview}</p>\n      <div class="modal__boxBtn">\n        <button class="modal__btn" type="button" data-delete>delete</button>\n      </div>\n    </div>`}null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequire723b=a);var l=a("caWkO"),i=a("5sIPK");const s=document.querySelector("[data-library]");async function r(e,t){if(!e)return;const n={closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal")};let a=0;try{const c=await(0,l.moviePageApi)(e);n.backdrop.classList.remove("is-hidden"),n.modal.innerHTML=d(c);const u=document.querySelector("[data-delete]");function r(){n.backdrop.classList.add("is-hidden"),a+=1}n.closeModalBtn.addEventListener("click",r),document.addEventListener("keydown",(e=>{"Escape"===e.code&&0===a&&(r(),console.log("Escape"))})),u.addEventListener("click",(function(){if("watched"===t){const e=i.default.load("watched").filter((e=>c.id!==e.id));i.default.save("watched",e),s.innerHTML=o(e)}if("queue"===t){const e=i.default.load("queue").filter((e=>c.id!==e.id));i.default.save("queue",e),s.innerHTML=o(e)}r()}))}catch(m){console.log(m)}}i=a("5sIPK");const c=document.querySelector("[data-watched]"),u=document.querySelector("[data-queue]"),m=document.querySelector("[data-library]");let v,p=0;function _(){v="watched",c.classList.add("activeBtn"),u.classList.remove("activeBtn");const e=i.default.load("watched")||[];if(0===e.length)return m.innerHTML="",void c.removeEventListener("click",_);m.innerHTML=o(e)}function g(){v="queue",u.classList.add("activeBtn"),c.classList.remove("activeBtn");const e=i.default.load("queue")||[];if(0===e.length)return m.innerHTML="",void u.removeEventListener("click",g);m.innerHTML=o(e)}0===p&&(p+=1,_()),c.addEventListener("click",(()=>{0===p&&(p+=1,_())})),u.addEventListener("click",(()=>{0!==p&&(p=0,g())})),m.addEventListener("click",(e=>r(e.target.id,v)));
//# sourceMappingURL=library.c14f96bd.js.map