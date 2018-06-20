!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=n(4),o="[{}()[\\]|<>=\\_\"'«»„“#$^%&*+-:;.,?!]",a=new RegExp("([А-ЯЁа-яё])[а-яё]+(?![а-яё]|\\.[  \t]+([а-яё]|[А-ЯЁ]{2}|"+o+")|\\."+o+")","g");e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dictionary=new i}return r(e,[{key:"lint",value:function(e,t){var n=this,r=[];return e&&this._hasEYo(e)?(e.replace(a,function(t){var i=arguments[arguments.length-2],o=n.dictionary.restoreWord(t);return o!==t?(r.push({before:t,after:o,position:n._getPosition(e,i)}),o):t}),t&&(r.sort(this._sort),r=this._delDuplicates(r)),r):[]}},{key:"restore",value:function(e){var t=this;return e&&this._hasEYo(e)?e=e.replace(a,function(e){var n=t.dictionary.restoreWord(e);return n===e?e:n}):e||""}},{key:"_hasEYo",value:function(e){return e.search(/[ЕЁеё]/)>-1}},{key:"_getPosition",value:function(e,t){var n=e.substr(0,t).split(/\r?\n/);return{line:n.length,column:n[n.length-1].length+1,index:t}}},{key:"_delDuplicates",value:function(e){var t={},n={},r=[];e.forEach(function(e){var r=e.before;t[r]?t[r]++:t[r]=1,n[r]||(n[r]=[]),n[r].push(e.position)});var i={};return e.forEach(function(e){var o=e.before;i[o]||(e.count=t[o],e.position=n[o],r.push(e),i[o]=!0)}),r}},{key:"_sort",value:function(e,t){var n=e.before,r=t.before,i=n.toLowerCase(),o=r.toLowerCase();return n[0]!==r[0]&&i[0]===o[0]?n>r?1:-1:i>o?1:i<o?-1:0}}]),e}()},function(e,t){},,function(e,t,n){},function(e,t,n){"use strict";(function(t){var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=n(1),o=n(1);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._dict={}}return r(e,[{key:"load",value:function(e,t){var n=this;i.readFile(e,"utf8",function(e,r){e||n.set(r),t(e,r)})}},{key:"loadSync",value:function(e){var t=i.readFileSync(e,"utf8");this.set(t)}},{key:"loadSafe",value:function(e){var n=o.resolve(t,"../dict/safe.txt");this.load(n,e)}},{key:"loadSafeSync",value:function(){var e=o.resolve(t,"../dict/safe.txt");this.loadSync(e)}},{key:"loadNotSafe",value:function(e){var n=o.resolve(t,"../dict/not_safe.txt");this.load(n,e)}},{key:"loadNotSafeSync",value:function(){var e=o.resolve(t,"../dict/not_safe.txt");this.loadSync(e)}},{key:"clear",value:function(){this._dict={}}},{key:"restoreWord",value:function(e){return this._dict[this._replaceYo(e)]||e}},{key:"addWord",value:function(e){if(e.search(/\(/)>-1)for(var t=e.split(/[(|)]/),n=1,r=t.length-1;n<r;n++)this._addWord(t[0]+t[n]);else this._addWord(e)}},{key:"_addWord",value:function(e){var t=this._replaceYo(e);this._dict[t]=e,-1===e.search(/^[А-ЯЁ]/)&&(this._dict[this._capitalize(t)]=this._capitalize(e))}},{key:"removeWord",value:function(e){var t=this._replaceYo(e);delete this._dict[t],-1===e.search(/^[А-ЯЁ]/)&&delete this._dict[this._capitalize(t)]}},{key:"set",value:function(e){if(this.clear(),e){var t=Array.isArray(e)?e:e.trim().split(/\r?\n/),n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;this.addWord(s)}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}}},{key:"get",value:function(){return this._dict}},{key:"_capitalize",value:function(e){return e.substr(0,1).toUpperCase()+e.substr(1)}},{key:"_replaceYo",value:function(e){return e.replace(/Ё/g,"Е").replace(/ё/g,"е")}}]),e}()}).call(this,"/")},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r);n(3);({init:function(){var e=this;this._input=document.querySelector(".eyo__input"),this._input.focus(),this._button=document.querySelector(".eyo__button"),document.querySelector(".eyo__example").addEventListener("click",function(){e._input.innerText=["Не стекло и не хрусталь,","А блестит, как будто сталь.","Занесешь в тепло, домой.","Станет сразу он водой.","Холод от него идет.","Ну конечно это...","(Лед)"].join("\n")},!1),this._safeReplacement=document.querySelector(".eyo__safe"),this._unsafeReplacement=document.querySelector(".eyo__unsafe"),this._safeEyo=new i.a,this._unsafeEyo=new i.a,this._button.addEventListener("click",this._onClick.bind(this),!1),document.addEventListener("keyup",function(t){13===t.keyCode&&t.ctrlKey&&e._onClick()},!1),this.loadDicts()},loadDicts:function(){var e=this;this._safeReq=new XMLHttpRequest,this._safeReq.responseType="text",this._safeReq.addEventListener("load",function(){e._safeEyo.dictionary.set(e._safeReq.responseText)}),this._safeReq.open("GET","./dist/safe.txt",!0),this._safeReq.send(),this._unsafeReq=new XMLHttpRequest,this._unsafeReq.responseType="text",this._unsafeReq.addEventListener("load",function(){e._unsafeEyo.dictionary.set(e._unsafeReq.responseText)}),this._unsafeReq.open("GET","./dist/not_safe.txt",!0),this._unsafeReq.send()},_prepareLintData:function(e){var t=this._safeEyo.lint(e),n=this._unsafeEyo.lint(e),r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){a.value.unsafe=!0}}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return[].concat(t,n).sort(function(e,t){var n=e.position,r=t.position;return n.line>r.line?1:n.line<r.line?-1:n.column>r.column?1:-1})},_onClick:function(){var e=this._input.innerText,t=this._prepareLintData(e),n=0,r=0,i="";if(t.length){var o=0,a=!0,s=!1,u=void 0;try{for(var c,l=t[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var f=c.value,d=f.position,h=this.highlight(f.before,f.after,f.unsafe);i=i+e.substring(o,d.index)+h.word,o=d.index+f.before.length,f.unsafe?r+=h.count:n+=h.count}}catch(e){s=!0,u=e}finally{try{!a&&l.return&&l.return()}finally{if(s)throw u}}i+=e.substring(o)}else i=e;this._input.innerHTML=i.replace(/\r?\n/g,"<br/>\n"),this._safeReplacement.innerHTML='Замен: <span class="eyo__safe-count">'+n+"</span>",this._unsafeReplacement.innerHTML='Предупреждений: <span class="eyo__unsafe-count">'+r+"</span>"},highlight:function(e,t,n){for(var r=0,i="",o=0;o<e.length;o++)e[o]!==t[o]?(i+=n?'<span class="eyo__unsafe-word" title="Небезопасная замена на «'+t+'»">'+e[o]+"</span>":'<span class="eyo__safe-word" title="Безопасная замена">'+t[o]+"</span>",r++):i+=e[o];return{word:i,count:r}}}).init()}]);