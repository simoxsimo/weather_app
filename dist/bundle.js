!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){var r=n(1),a=n(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function c(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],s=t.base?i[0]+t.base:i[0],d=n[s]||0,u="".concat(s," ").concat(d);n[s]=d+1;var p=c(u),l={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(o[p].references++,o[p].updater(l)):o.push({identifier:u,updater:b(l,t),references:1}),r.push(u)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function l(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function b(e,t){var n,r,a;if(t.singleton){var i=f++;n=m||(m=d(t)),r=l.bind(null,n,i,!1),a=l.bind(null,n,i,!0)}else n=d(t),r=h.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=c(n[r]);o[a].references--}for(var i=s(e,t),d=0;d<n.length;d++){var u=c(n[d]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=i}}}},function(e,t,n){var r=n(3),a=n(4),i=n(5),o=n(6);(t=r(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Cairo&family=Nanum+Gothic&display=swap);"]);var c=a(i),s=a(o);t.push([e.i,"body {\r\n  overflow: hidden;\r\n  font-family: 'Nanum Gothic', sans-serif;\r\n}\r\n\r\np {\r\n  font-family: 'Cairo', sans-serif;\r\n}\r\n\r\n#app {\r\n  margin: 10vh 25vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  box-sizing: border-box;\r\n  border: 40px rgba(167, 167, 167, 0.061) solid;\r\n  border-radius: 10px;\r\n  background-color: rgba(87, 86, 86, 0.096);\r\n}\r\n\r\n#search {\r\n  display: block;\r\n  margin: auto;\r\n  border: none;\r\n  height: 30px;\r\n  width: 30px;\r\n  background: no-repeat url("+c+");\r\n  background-size: cover;\r\n}\r\n\r\n#weather-stats {\r\n  font-size: 20px;\r\n}\r\n\r\nh1,\r\nh3,\r\nh4 {\r\n  text-align: center;\r\n}\r\n\r\nh1 {\r\n  font-size: 100px;\r\n  margin: 50px 0;\r\n  text-shadow: -6px 0 18px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\nh3 {\r\n  display: inline;\r\n  margin: 10px;\r\n  font-size: 44px;\r\n  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\nh4 {\r\n  font-size: 34px;\r\n  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n#weather-extra-stats {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 17px;\r\n}\r\n\r\n#sun-stats {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#data-time {\r\n  font-size: 16px;\r\n  font-style: italic;\r\n  text-align: center;\r\n  margin-bottom: 0;\r\n}\r\n\r\ninput {\r\n  display: block;\r\n  height: 40px;\r\n  width: 40vw;\r\n  margin: auto;\r\n  border: 1px solid rgba(214, 214, 214, 0.609);\r\n  border-radius: 10px;\r\n  font-size: 24px;\r\n  background-color: rgba(214, 214, 214, 0.363);\r\n}\r\n\r\n@keyframes input-animation {\r\n  0% {\r\n    transform: scaleX(0.4);\r\n  }\r\n\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n#bg {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  background: url("+s+");\r\n  background-size: 100% 100%;\r\n  animation: kenburns-top 40s ease-out infinite both;\r\n  filter: blur(1px);\r\n}\r\n\r\n@keyframes kenburns-top {\r\n  0% {\r\n    transform: scale(1) translate(0, 0);\r\n    transform-origin: 16% 84%;\r\n  }\r\n\r\n  25% {\r\n    transform: scale(1.25) translate(-20px, 15px);\r\n    transform-origin: left bottom;\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1) translate(0, 0);\r\n    transform-origin: 84% 16%;\r\n  }\r\n\r\n  75% {\r\n    transform: scale(1.25) translate(20px, -15px);\r\n    transform-origin: right top;\r\n  }\r\n}\r\n\r\n#sunrise,\r\n#sunset {\r\n  margin-top: 10px;\r\n  margin-bottom: 0;\r\n  font-size: 28px;\r\n  text-shadow: -6px 0 18px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n#weather-header {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#temps-btns {\r\n  display: flex;\r\n  padding: 10px 0;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  margin: 50px 0;\r\n  margin-left: 30px;\r\n}\r\n\r\n#celsius-button,\r\n#fahrenheit-button {\r\n  border: 3px solid rgba(226, 225, 225, 0.657);\r\n  border-radius: 5px;\r\n  background: none;\r\n  font-family: 'Nanum Gothic', sans-serif;\r\n  font-size: 27px;\r\n  font-weight: bolder;\r\n}\r\n\r\n#celsius-button:hover,\r\n#fahrenheit-button:hover,\r\n#search:hover {\r\n  cursor: pointer;\r\n  color: rgb(75, 75, 75);\r\n}\r\n\r\nh2 {\r\n  font-size: 40px;\r\n  text-align: center;\r\n  color: rgb(211, 49, 49);\r\n  margin: 20vh 80px;\r\n  padding: 20px 0;\r\n  border: 4px solid rgb(195, 132, 132);\r\n}\r\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var o,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"search.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"bg.jpg"},function(e,t,n){"use strict";n.r(t);var r={renderErrors:e=>{const t=document.querySelector("#app"),n=document.querySelector("body");t&&t.remove();const r=document.createElement("section");r.setAttribute("id","errors");const a=document.createElement("h2");a.appendChild(document.createTextNode(e)),r.appendChild(a),n.prepend(r)}};var a=(()=>{const e=e=>e.city,t=e=>e.country;return{apiCall:()=>fetch("http://ip-api.com/json/").then(e=>e.json()).then(n=>({city:e(n),country:t(n)})).catch(()=>{r.renderErrors("Error!! can't get response from ip api")})}})();var i={apiCall:(e,t="metric")=>e.then(e=>fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.city}&units=${t}&appid=15609b3767af2a096f31de7e936b27ec`)).then(e=>e.json()).catch(()=>{r.renderErrors("Error!! can't get response from weather api")})};var o=(()=>{const e={body:document.querySelector("body")},t=t=>((t=>{e.locationHeader||(e.locationHeader=document.createElement("h3"),e.locationHeader.appendChild(document.createTextNode(t)),e.contentSection.prepend(e.locationHeader))})(`${t.city}, ${t.country}`),t),n=n=>n().then(t=>(e.searchButton||(e.searchButton=document.createElement("button"),e.searchButton.setAttribute("id","search"),e.contentSection.prepend(e.searchButton)),t)).then(e=>t(e)),r=(t,n)=>((t=>{e.weatherTempHeaderDiv=document.createElement("div"),e.weatherTempHeader=document.createElement("h1"),e.weatherTempHeaderDiv.setAttribute("id","weather-header"),e.weatherTempHeader.appendChild(document.createTextNode(t)),e.weatherTempHeaderDiv.appendChild(e.weatherTempHeader),e.weatherSection.appendChild(e.weatherTempHeaderDiv)})(`${Math.round(t.main.temp)} ${n}`),e.tempsBtnsDiv=document.createElement("div"),e.tempsBtnsDiv.setAttribute("id","temps-btns"),e.weatherTempHeaderDiv.appendChild(e.tempsBtnsDiv),e.celsiusButton=document.createElement("button"),e.celsiusButton.setAttribute("id","celsius-button"),e.celsiusButton.appendChild(document.createTextNode("℃")),e.tempsBtnsDiv.appendChild(e.celsiusButton),e.fahrenheitButton=document.createElement("button"),e.fahrenheitButton.setAttribute("id","fahrenheit-button"),e.fahrenheitButton.appendChild(document.createTextNode("℉")),e.tempsBtnsDiv.appendChild(e.fahrenheitButton),t),o=()=>{e.weatherSection.textContent=""},c=t=>((t=>{e.weatherTempDescription=document.createElement("h4"),e.weatherTempDescription.appendChild(document.createTextNode(t)),e.weatherSection.appendChild(e.weatherTempDescription)})(t.weather[0].description),t),s=(t,n)=>(((t,n)=>{e.weatherTempFeelsLike=document.createElement("p"),e.weatherTempFeelsLike.appendChild(document.createTextNode(`Feels Like: ${Math.round(t)} ${n}`)),e.weatherTempOtherStatsDiv.appendChild(e.weatherTempFeelsLike)})(t.main.feels_like,n),t),d=t=>((t=>{e.weatherPressure=document.createElement("p"),e.weatherPressure.appendChild(document.createTextNode(`Pressure: ${t} hPa(mb)`)),e.weatherTempOtherStatsDiv.appendChild(e.weatherPressure)})(t.main.pressure),t),u=t=>((t=>{e.weatherHumidity=document.createElement("p"),e.weatherHumidity.appendChild(document.createTextNode(`Humidity: ${t}%`)),e.weatherTempOtherStatsDiv.appendChild(e.weatherHumidity)})(t.main.humidity),t),p=t=>((t=>{e.weatherWindSpeed=document.createElement("p"),e.weatherWindSpeed.appendChild(document.createTextNode(`Wind: ${t} m/s`)),e.weatherTempOtherStatsDiv.appendChild(e.weatherWindSpeed)})(t.wind.speed),t),l=(t,n)=>(e.weatherTempOtherStatsDiv=document.createElement("div"),e.weatherTempOtherStatsDiv.setAttribute("id","weather-extra-stats"),e.weatherSection.appendChild(e.weatherTempOtherStatsDiv),s(t,n),d(t),u(t),p(t),t),h=e=>new Date(1e3*e).toLocaleString("en-US",{hour:"numeric",minute:"numeric"}),m=t=>(e.weatherTempSunTimerDiv=document.createElement("div"),e.weatherTempSunTimerDiv.setAttribute("id","sun-stats"),e.weatherSection.appendChild(e.weatherTempSunTimerDiv),(t=>{e.weatherSunriseTimer=document.createElement("p"),e.weatherSunriseTimer.setAttribute("id","sunrise"),e.weatherSunriseTimer.appendChild(document.createTextNode("Sunrise: "+h(t))),e.weatherTempSunTimerDiv.appendChild(e.weatherSunriseTimer)})(t.sys.sunrise+t.timezone),(t=>{e.weatherSunsetTimer=document.createElement("p"),e.weatherSunsetTimer.setAttribute("id","sunset"),e.weatherSunsetTimer.appendChild(document.createTextNode("Sunset: "+h(t))),e.weatherTempSunTimerDiv.appendChild(e.weatherSunsetTimer)})(t.sys.sunset+t.timezone),t),f=t=>((t=>{e.weatherDataTime=document.createElement("p"),e.weatherDataTime.setAttribute("id","data-time"),e.weatherDataTime.appendChild(document.createTextNode("Updated at "+h(t))),e.weatherSection.appendChild(e.weatherDataTime)})(t.dt+t.timezone),t),b=(e,t="℃")=>e.then(e=>r(e,t)).then(e=>c(e)).then(e=>l(e,t)).then(e=>m(e)).then(e=>f(e)).then(e=>(document.addEventListener("click",e=>{e.target&&("celsius-button"===e.target.id?(o(),b(i.apiCall(n(a.apiCall)))):"fahrenheit-button"===e.target.id&&(o(),b(i.apiCall(n(a.apiCall),"imperial"),"℉")))},{once:!0}),e)),v=t=>{t.preventDefault(),t.target&&"search"===t.target.id&&void 0===e.searchField?(e.searchField=document.createElement("input"),e.searchField.setAttribute("type","text"),e.searchField.placeholder="Enter a city...",e.contentSection.prepend(e.searchField),e.searchField.style.animation="input-animation 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"):t.target&&"search"!==t.target.id&&"INPUT"!==t.target.tagName&&void 0!==e.searchField&&(e.searchField.remove(),e.searchField=void 0)},g=t=>{var n;t.preventDefault(),13===t.keyCode&&((n=t.target).value||(n.placeholder="Please Fill this field",n.style.borderColor="red",0))&&(e.weatherSection.textContent="",e.locationHeader.textContent=t.target.value[0].toUpperCase()+t.target.value.slice(1),b(i.apiCall(Promise.resolve({city:t.target.value}))),t.target.value="")};return{run:()=>{e.contentSection=document.createElement("section"),e.contentSection.setAttribute("id","app"),e.body.prepend(e.contentSection),e.weatherSection=document.createElement("section"),e.weatherSection.setAttribute("id","weather-stats"),e.contentSection.prepend(e.weatherSection),(()=>{const t=document.createElement("div");t.setAttribute("id","bg"),e.body.appendChild(t)})(),b(i.apiCall(n(a.apiCall))),document.addEventListener("click",v,{once:!0}),document.addEventListener("keyup",g)}}})();n(0);o.run()}]);