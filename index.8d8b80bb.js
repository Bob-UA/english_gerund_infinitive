const e=[{word:"acknowledge",type:"gerund"},{word:"accuse of",type:"gerund"},{word:"admit",type:"gerund"},{word:"anticipate",type:"gerund"},{word:"appreciate",type:"gerund"},{word:"avoid",type:"gerund"},{word:"complete",type:"gerund"},{word:"consider",type:"gerund"},{word:"defer",type:"gerund"},{word:"delay",type:"gerund"},{word:"deny",type:"gerund"},{word:"discuss",type:"gerund"},{word:"entail",type:"gerund"},{word:"look after",type:"gerund"},{word:"insist on",type:"gerund"},{word:"involve",type:"gerund"},{word:"justify",type:"gerund"},{word:"mention",type:"gerund"},{word:"plan on",type:"gerund"},{word:"postpone",type:"gerund"},{word:"recall",type:"gerund"},{word:"resent",type:"gerund"},{word:"recommend",type:"gerund"},{word:"resist",type:"gerund"},{word:"risk",type:"gerund"},{word:"sanction",type:"gerund"},{word:"suggest",type:"gerund"},{word:"tolerate",type:"gerund"},{word:"dislike",type:"gerund"},{word:"enjoy",type:"gerund"},{word:"finish",type:"gerund"},{word:"can’t help",type:"gerund"},{word:"keep",type:"gerund"},{word:"miss",type:"gerund"},{word:"mind",type:"gerund"},{word:"postpone",type:"gerund"},{word:"practice",type:"gerund"},{word:"quit",type:"gerund"},{word:"recollect",type:"gerund"},{word:"resent",type:"gerund"},{word:"stop",type:"gerund"},{word:"understand",type:"gerund"},{word:"afford",type:"infinitive"},{word:"agree",type:"infinitive"},{word:"appear",type:"infinitive"},{word:"arrange",type:"infinitive"},{word:"beg",type:"infinitive"},{word:"care",type:"infinitive"},{word:"claim",type:"infinitive"},{word:"consent",type:"infinitive"},{word:"decide",type:"infinitive"},{word:"demand",type:"infinitive"},{word:"deserve",type:"infinitive"},{word:"expect",type:"infinitive"},{word:"fail",type:"infinitive"},{word:"hesitate",type:"infinitive"},{word:"hope",type:"infinitive"},{word:"learn",type:"infinitive"},{word:"manage",type:"infinitive"},{word:"neglect",type:"infinitive"},{word:"need",type:"infinitive"},{word:"offer",type:"infinitive"},{word:"plan",type:"infinitive"},{word:"prepare",type:"infinitive"},{word:"pretend",type:"infinitive"},{word:"promise",type:"infinitive"},{word:"refuse",type:"infinitive"},{word:"seem",type:"infinitive"},{word:"struggle",type:"infinitive"},{word:"swear",type:"infinitive"},{word:"threaten",type:"infinitive"},{word:"volunteer",type:"infinitive"},{word:"wait",type:"infinitive"},{word:"want",type:"infinitive"},{word:"wish",type:"infinitive"},{word:"ask",type:"infinitive"},{word:"intend",type:"infinitive"},{word:"mean",type:"infinitive"},{word:"talk",type:"infinitive"},{word:"can’t bear",type:"gerund/infinitive"},{word:"advise",type:"gerund/infinitive"},{word:"begin",type:"gerund/infinitive"},{word:"continue",type:"gerund/infinitive"},{word:"forget",type:"gerund/infinitive"},{word:"hate",type:"gerund/infinitive"},{word:"like",type:"gerund/infinitive"},{word:"love",type:"gerund/infinitive"},{word:"prefer",type:"gerund/infinitive"},{word:"regret",type:"gerund/infinitive"},{word:"remember",type:"gerund/infinitive"},{word:"can’t stand",type:"gerund/infinitive"},{word:"start",type:"gerund/infinitive"},{word:"try",type:"gerund/infinitive"}],i=document.querySelector(".list");i.addEventListener("click",(function(e){const{localName:i,nextSibling:n,children:t,className:r}=e.target;if("li"!==i&&"p"!==i||""===r)return;if("p"===i)return n.className="type-text";t[1].className="type-text"}));const n=(e=>{for(let i=e.length-1;i>0;i--){const n=Math.floor(Math.random()*(i+1));[e[i],e[n]]=[e[n],e[i]]}return e})(e);const t=n.map((({word:e,type:i})=>`<li class="word_item">\n          <p class="text">${e}</p><div class="is_hidden"><p>${i}</p></div>\n        </li>`)).join("");i.insertAdjacentHTML("afterbegin",t);
//# sourceMappingURL=index.8d8b80bb.js.map
