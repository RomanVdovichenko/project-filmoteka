!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire723b;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire723b=a);var o=a("bpxeT"),c=a("2TvXO"),s=a("kvuk2");o=a("bpxeT"),c=a("2TvXO");function i(e,t){return t.filter((function(e){return null!==e.poster_path&&0!==e.genre_ids.length})).map((function(t){for(var n="",r=0;r<t.genre_ids.length;r++)for(var a=0;a<e.length;a++)e[a].id===t.genre_ids[r]&&(r<t.genre_ids.length-1?n+=e[a].name+", ":n+=e[a].name);return'<li class="movie">\n          <div class="movie__box">\n            <img class="movie__img" id=\''.concat(t.id,"'\n              src=\"https://image.tmdb.org/t/p/w500").concat(t.poster_path,'"\n              alt="').concat(t.title,'"\n            />\n          </div>\n          <div class="movie__desc">\n            <h3 class="movie__title">').concat(t.title,'</h3>\n            <p class="movie__genre">').concat(n," | ").concat(t.release_date.slice(0,4),"</p>\n          </div>\n        </li>")})).join("")}s=a("kvuk2");var l=document.querySelector(".pagination__start"),d=document.querySelector(".pagination__decorStart"),u=document.querySelector(".pagination__list"),p=document.querySelector(".pagination__end"),m=document.querySelector("#back"),v=document.querySelector(".movies"),f=document.querySelector(".pagination"),g=document.querySelector("#search-form"),_=document.querySelector("#trend"),h=document.querySelector("#logo");function y(e,t,n,r){return L.apply(this,arguments)}function L(){return L=e(o)(e(c).mark((function t(n,r,a,y){var L,b,k,q,x,S=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(q=function(e){return x.apply(this,arguments)},x=function(){return(x=e(o)(e(c).mark((function t(o){var s,f,g,_;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(o.target.id),"forward"===o.target.id||"right"===o.target.id||"back"===o.target.id||"left"===o.target.id){e.next=3;break}return e.abrupt("return");case 3:return"forward"!==o.target.id&&"right"!==o.target.id||(n+=1,m.classList.remove("none"),m.removeAttribute("disabled"),l.classList.remove("none"),d.classList.remove("none"),u.innerHTML=""),("back"===o.target.id||"left"===o.target.id)&&n>1&&(n-=1,u.innerHTML=""),e.prev=5,e.next=8,a();case 8:return s=e.sent,e.next=11,y(n,L);case 11:for(f=e.sent,console.log(f),v.innerHTML=i(s,f.results),u.innerHTML="",1===n&&(m.classList.add("none"),d.classList.add("none"),l.classList.add("none"),p.textContent="".concat(r),u.innerHTML=""),g=n;g<n+5;g++)(_=document.createElement("li")).textContent="".concat(g),_.textContent==="".concat(n)&&_.classList.add("pagination__item--active"),_.classList.add("pagination__item"),u.append(_);e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),console.log(e.t0);case 22:case"end":return e.stop()}}),t,null,[[5,19]])})))).apply(this,arguments)},L=S.length>4&&void 0!==S[4]?S[4]:"",f.classList.remove("none"),1===n){for(u.innerHTML="",b=n;b<n+5;b++)(k=document.createElement("li")).textContent="".concat(b),k.textContent==="".concat(n)&&k.classList.add("pagination__item--active"),k.classList.add("pagination__item"),u.append(k);m.classList.add("none"),d.classList.add("none"),l.classList.add("none"),p.textContent="".concat(r),f.addEventListener("click",q)}g.addEventListener("input",(function(){return f.removeEventListener("click",q)})),y===s.movieSearchApi&&(_.addEventListener("click",(function(){return f.removeEventListener("click",q)})),h.addEventListener("click",(function(){return f.removeEventListener("click",q)})));case 9:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}var b=document.querySelector("#search-form"),k=document.querySelector(".movies");function q(){return x.apply(this,arguments)}function x(){return(x=e(o)(e(c).mark((function t(){var n,r,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.elements.searchQuery.value="",n=1,r=0,e.prev=3,e.next=6,(0,s.genresList)();case 6:return a=e.sent,e.next=9,(0,s.moviesApi)(n);case 9:o=e.sent,console.log(o),o.total_pages>0&&(r=o.total_pages,k.innerHTML=i(a,o.results),y(n,r,s.genresList,s.moviesApi)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),t,null,[[3,14]])})))).apply(this,arguments)}o=a("bpxeT"),c=a("2TvXO"),s=a("kvuk2");var S=document.querySelector("#search"),w=document.querySelector("#search-form"),T=document.querySelector(".pagination"),E=document.querySelector(".movies");function M(){return(M=e(o)(e(c).mark((function t(n){var r,a,o,l,d;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),S.setAttribute("disabled",""),r=w.elements.searchQuery.value.trim(),console.log(r),r){e.next=7;break}return errorSeach.classList.remove("none"),e.abrupt("return");case 7:return a=1,o=0,e.prev=9,e.next=12,(0,s.genresList)();case 12:return l=e.sent,e.next=15,(0,s.movieSearchApi)(a,r);case 15:if(d=e.sent,console.log(d),0!==d.results.length){e.next=20;break}return errorSeach.classList.remove("none"),e.abrupt("return");case 20:o=d.total_pages,E.innerHTML=i(l,d.results),T.classList.remove("none"),y(a,o,s.genresList,s.movieSearchApi,r),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(9),console.log(e.t0);case 29:case"end":return e.stop()}}),t,null,[[9,26]])})))).apply(this,arguments)}var A=document.querySelector(".movies"),H=document.querySelector("#search"),O=document.querySelector(".header__error"),C=document.querySelector(".pagination"),X=document.querySelector("#search-form");o=a("bpxeT"),c=a("2TvXO");function B(e){for(var t="",n=0;n<e.genres.length;n++)n<e.genres.length-1?t+=e.genres[n].name+", ":t+=e.genres[n].name;return'\n    <img class="modal__img" src="https://image.tmdb.org/t/p/w500'.concat(e.poster_path,'" alt="').concat(e.title,'" />\n    <div class="modal__box">\n      <p class="modal__title">').concat(e.title,'</p>\n      <table class="modal__info">\n        <tbody>\n          <tr>\n            <td class="modal__item one">Vote / Votes</td>\n            <td class="votes one"><span class="vote">').concat(e.vote_average,"</span> / ").concat(e.vote_count,'</td>\n          </tr>\n          <tr>\n            <td class="modal__item center">Popularity</td>\n            <td class="popularity center">').concat(e.popularity,'</td>\n          </tr>\n          <tr>\n            <td class="modal__item center">Original Title</td>\n            <td class="original center">').concat(e.original_title,'</td>\n          </tr>\n          <tr>\n            <td class="modal__item">Genre</td>\n            <td class="genre">').concat(t,'</td>\n          </tr>\n        </tbody>\n      </table>\n      <p class="modal__about">About</p>\n      <p class="modal__description">').concat(e.overview,'</p>\n      <div class="modal__boxBtn">\n        <button class="modal__btn" type="button" data-add-watched>add to watched</button>\n        <button class="modal__btn" type="button" data-add-queue>add to queue</button>\n      </div>\n    </div>')}s=a("kvuk2");var D=a("8irT4");function Q(e){return{id:e.id,title:e.title,img:e.poster_path,date:e.release_date,genres:e.genres}}function N(e){return P.apply(this,arguments)}function P(){return(P=e(o)(e(c).mark((function t(n){var r,a,o,i,l,d,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=function(){r.backdrop.classList.add("is-hidden")},d=function(){var e=D.default.load("watched")||[],t=e.map((function(e){return e.id}));console.log(t),t.includes(a.id)||(e.push(Q(a)),D.default.save("watched",e)),o.removeEventListener("click",d)},u=function(){var e=D.default.load("queue")||[];e.map((function(e){return e.id})).includes(a.id)||(e.push(Q(a)),D.default.save("queue",e)),i.removeEventListener("click",u)},r={closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal")},e.prev=4,e.next=7,(0,s.moviePageApi)(n);case 7:a=e.sent,console.log(a),r.backdrop.classList.remove("is-hidden"),r.modal.innerHTML=B(a),o=document.querySelector("[data-add-watched]"),i=document.querySelector("[data-add-queue]"),r.closeModalBtn.addEventListener("click",l),o.addEventListener("click",d),i.addEventListener("click",u),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(4),console.log(e.t0);case 24:case"end":return e.stop()}}),t,null,[[4,21]])})))).apply(this,arguments)}var R=document.querySelector("#trend"),U=document.querySelector("#logo"),V=document.querySelector("#search-form"),j=document.querySelector(".movies"),F=0;0===F&&(F+=1,q()),V.addEventListener("input",(function(){0!==F&&(F=0),H.removeAttribute("disabled"),A.innerHTML="",O.classList.add("none"),C.classList.add("none"),console.log(X.elements.searchQuery.value)})),V.addEventListener("submit",(function(e){return M.apply(this,arguments)})),R.addEventListener("click",(function(){0===F&&(F+=1,q())})),U.addEventListener("click",(function(){0===F&&(F+=1,q())})),j.addEventListener("click",(function(e){return N(e.target.id)}))}();
//# sourceMappingURL=index.dabb377a.js.map
