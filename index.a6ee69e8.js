!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire723b;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire723b=o);var a=o("bpxeT"),c=o("2TvXO"),s=o("kvuk2");a=o("bpxeT"),c=o("2TvXO");function i(e,t){return t.filter((function(e){return null!==e.poster_path&&0!==e.genre_ids.length})).map((function(t){for(var n="",r=0;r<t.genre_ids.length;r++)for(var o=0;o<e.length;o++)e[o].id===t.genre_ids[r]&&(r<t.genre_ids.length-1?n+=e[o].name+", ":n+=e[o].name);return'<li class="movie">\n          <div class="movie__box">\n            <img class="movie__img" id=\''.concat(t.id,"'\n              src=\"https://image.tmdb.org/t/p/w500").concat(t.poster_path,'"\n              alt="').concat(t.title,'"\n            />\n          </div>\n          <div class="movie__desc">\n            <h3 class="movie__title">').concat(t.title,'</h3>\n            <p class="movie__genre">').concat(n," | ").concat(t.release_date.slice(0,4),"</p>\n          </div>\n        </li>")})).join("")}s=o("kvuk2");var l=document.querySelector(".pagination__start"),d=document.querySelector(".pagination__decorStart"),u=document.querySelector(".pagination__list"),m=document.querySelector(".pagination__end"),p=document.querySelector("#back"),v=document.querySelector(".movies"),f=document.querySelector(".pagination"),g=document.querySelector("#search-form"),_=document.querySelector("#trend"),h=document.querySelector("#logo");function y(e,t,n,r){return L.apply(this,arguments)}function L(){return L=e(a)(e(c).mark((function t(n,r,o,y){var L,b,k,q,x,S=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(q=function(e){return x.apply(this,arguments)},x=function(){return(x=e(a)(e(c).mark((function t(a){var s,f,g,_;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(a.target.id),"forward"===a.target.id||"right"===a.target.id||"back"===a.target.id||"left"===a.target.id){e.next=3;break}return e.abrupt("return");case 3:return"forward"!==a.target.id&&"right"!==a.target.id||(n+=1,p.classList.remove("none"),p.removeAttribute("disabled"),l.classList.remove("none"),d.classList.remove("none"),u.innerHTML=""),("back"===a.target.id||"left"===a.target.id)&&n>1&&(n-=1,u.innerHTML=""),e.prev=5,e.next=8,o();case 8:return s=e.sent,e.next=11,y(n,L);case 11:for(f=e.sent,console.log(f),v.innerHTML=i(s,f.results),u.innerHTML="",1===n&&(p.classList.add("none"),d.classList.add("none"),l.classList.add("none"),m.textContent="".concat(r),u.innerHTML=""),g=n;g<n+5;g++)(_=document.createElement("li")).textContent="".concat(g),_.textContent==="".concat(n)&&_.classList.add("pagination__item--active"),_.classList.add("pagination__item"),u.append(_);e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),console.log(e.t0);case 22:case"end":return e.stop()}}),t,null,[[5,19]])})))).apply(this,arguments)},L=S.length>4&&void 0!==S[4]?S[4]:"",f.classList.remove("none"),1===n){for(u.innerHTML="",b=n;b<n+5;b++)(k=document.createElement("li")).textContent="".concat(b),k.textContent==="".concat(n)&&k.classList.add("pagination__item--active"),k.classList.add("pagination__item"),u.append(k);p.classList.add("none"),d.classList.add("none"),l.classList.add("none"),m.textContent="".concat(r),f.addEventListener("click",q)}g.addEventListener("input",(function(){return f.removeEventListener("click",q)})),y===s.movieSearchApi&&(_.addEventListener("click",(function(){return f.removeEventListener("click",q)})),h.addEventListener("click",(function(){return f.removeEventListener("click",q)})));case 9:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}var b=document.querySelector("#search-form"),k=document.querySelector(".movies"),q=document.querySelector("[data-error]");function x(){return S.apply(this,arguments)}function S(){return(S=e(a)(e(c).mark((function t(){var n,r,o,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.elements.searchQuery.value="",q.classList.add("none"),n=1,r=0,e.prev=4,e.next=7,(0,s.genresList)();case 7:return o=e.sent,e.next=10,(0,s.moviesApi)(n);case 10:a=e.sent,console.log(a),a.total_pages>0&&(r=a.total_pages,k.innerHTML=i(o,a.results),y(n,r,s.genresList,s.moviesApi)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}}),t,null,[[4,15]])})))).apply(this,arguments)}a=o("bpxeT"),c=o("2TvXO"),s=o("kvuk2");var w=document.querySelector("#search"),T=document.querySelector("#search-form"),E=document.querySelector(".pagination"),M=document.querySelector(".movies"),A=document.querySelector("[data-error]");function H(){return(H=e(a)(e(c).mark((function t(n){var r,o,a,l,d;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),w.setAttribute("disabled",""),r=T.elements.searchQuery.value.trim(),console.log(r),r){e.next=7;break}return A.classList.remove("none"),e.abrupt("return");case 7:return o=1,a=0,e.prev=9,e.next=12,(0,s.genresList)();case 12:return l=e.sent,e.next=15,(0,s.movieSearchApi)(o,r);case 15:if(d=e.sent,console.log(d),0!==d.results.length){e.next=20;break}return A.classList.remove("none"),e.abrupt("return");case 20:a=d.total_pages,M.innerHTML=i(l,d.results),E.classList.remove("none"),y(o,a,s.genresList,s.movieSearchApi,r),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(9),console.log(e.t0);case 29:case"end":return e.stop()}}),t,null,[[9,26]])})))).apply(this,arguments)}var O=document.querySelector(".movies"),C=document.querySelector("#search"),Q=document.querySelector("[data-error]"),X=document.querySelector(".pagination"),B=document.querySelector("#search-form");a=o("bpxeT"),c=o("2TvXO");function D(e){for(var t="",n=0;n<e.genres.length;n++)n<e.genres.length-1?t+=e.genres[n].name+", ":t+=e.genres[n].name;return'\n    <img class="modal__img" src="https://image.tmdb.org/t/p/w500'.concat(e.poster_path,'" alt="').concat(e.title,'" />\n    <div class="modal__box">\n      <p class="modal__title">').concat(e.title,'</p>\n      <table class="modal__info">\n        <tbody>\n          <tr>\n            <td class="modal__item one">Vote / Votes</td>\n            <td class="votes one"><span class="vote">').concat(e.vote_average.toFixed(1),"</span> / ").concat(e.vote_count,'</td>\n          </tr>\n          <tr>\n            <td class="modal__item center">Popularity</td>\n            <td class="popularity center">').concat(e.popularity.toFixed(1),'</td>\n          </tr>\n          <tr>\n            <td class="modal__item center">Original Title</td>\n            <td class="original center">').concat(e.original_title,'</td>\n          </tr>\n          <tr>\n            <td class="modal__item">Genre</td>\n            <td class="genre">').concat(t,'</td>\n          </tr>\n        </tbody>\n      </table>\n      <p class="modal__about">About</p>\n      <p class="modal__description">').concat(e.overview,'</p>\n      <div class="modal__boxBtn">\n        <button class="modal__btn" type="button" data-add-watched>add to watched</button>\n        <button class="modal__btn" type="button" data-add-queue>add to queue</button>\n      </div>\n    </div>')}s=o("kvuk2");var F=o("8irT4");function N(e){return{id:e.id,title:e.title,img:e.poster_path,date:e.release_date,genres:e.genres,vote:e.vote_average}}function P(e){return R.apply(this,arguments)}function R(){return(R=e(a)(e(c).mark((function t(n){var r,o,a,i,l,d,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=function(){r.backdrop.classList.add("is-hidden")},d=function(){var e=F.default.load("watched")||[],t=e.map((function(e){return e.id}));console.log("onAddWatched"),t.includes(o.id)||(e.push(N(o)),F.default.save("watched",e)),a.removeEventListener("click",d)},u=function(){var e=F.default.load("queue")||[],t=e.map((function(e){return e.id}));console.log("onAddQueue"),t.includes(o.id)||(e.push(N(o)),F.default.save("queue",e)),i.removeEventListener("click",u)},r={closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal")},e.prev=4,e.next=7,(0,s.moviePageApi)(n);case 7:o=e.sent,console.log(o),r.backdrop.classList.remove("is-hidden"),r.modal.innerHTML=D(o),a=document.querySelector("[data-add-watched]"),i=document.querySelector("[data-add-queue]"),r.closeModalBtn.addEventListener("click",l),a.addEventListener("click",d),i.addEventListener("click",u),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(4),console.log(e.t0);case 24:case"end":return e.stop()}}),t,null,[[4,21]])})))).apply(this,arguments)}var U=document.querySelector("#trend"),V=document.querySelector("#logo"),j=document.querySelector("#search-form"),G=document.querySelector(".movies"),W=0;0===W&&(W+=1,x()),j.addEventListener("input",(function(){0!==W&&(W=0),C.removeAttribute("disabled"),O.innerHTML="",Q.classList.add("none"),X.classList.add("none"),console.log(B.elements.searchQuery.value)})),j.addEventListener("submit",(function(e){return H.apply(this,arguments)})),U.addEventListener("click",(function(){0===W&&(W+=1,x())})),V.addEventListener("click",(function(){0===W&&(W+=1,x())})),G.addEventListener("click",(function(e){return P(e.target.id)}))}();
//# sourceMappingURL=index.a6ee69e8.js.map
