(self.webpackJsonp=self.webpackJsonp||[]).push([[3],{291:function(t,e,n){"use strict";var o=[];function r(t,e){"start"===t?o.unshift(e):o.push(e),1===o.length&&setTimeout((function(){for(;o.length>0;)o.shift()()}),0)}var c=!1;function l(){c=!0,r("end",(function(){c=!1}))}function d(t){var e=t.currentTarget;r("start",(function(){c||(e.dataset.focus="")}))}function h(t){delete t.currentTarget.dataset.focus}e.a={bind:function(t){t.addEventListener("mousedown",l),t.addEventListener("click",l),t.addEventListener("focus",d),t.addEventListener("blur",h)},unbind:function(t){t.removeEventListener("mousedown",l),t.removeEventListener("click",l),t.removeEventListener("focus",d),t.removeEventListener("blur",h)}}},292:function(t,e,n){var content=n(405);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("3ff323c4",content,!0,{sourceMap:!1})},403:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAzNiAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIHg9Ii0yMC4zJSIgeT0iLTMyLjUlIiB3aWR0aD0iMTQwLjYlIiBoZWlnaHQ9IjE2NSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yIDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlPjxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iIzJGQjFGMCIgZD0iTTEwIDBsMTAgMTAtMTAgMTBMMCAxMHoiLz48cGF0aCBmaWxsPSIjMUQ3Q0FBIiBkPSJNMjIgMGwxMCAxMC0xMCAxMC0xMC0xMHoiLz48cGF0aCBmaWxsPSIjMUQ3Q0FBIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6Y29sb3ItZG9kZ2UiIGQ9Ik0xNiA2bDQgNC00IDQtNC00eiIvPjwvZz48L3N2Zz4K"},404:function(t,e,n){"use strict";var o=n(292);n.n(o).a},405:function(t,e,n){(e=n(65)(!1)).push([t.i,':root{font-weight:300;line-height:1.6;padding:0 1em;font-size:16px}@media screen and (min-width:320px){:root{font-size:calc(16px + 8*(100vw - 320px)/1600)}}@media screen and (min-width:1920px){:root{font-size:24px}}h1,h2{font-weight:400;opacity:.5}.logo{max-width:60%;width:240px;margin:2em auto .25em;height:auto;display:block}.wrapper{max-width:55ch;margin:auto}.header{display:flex;justify-content:space-between;margin:2.5em 0 1em}.footer{font-size:.85em;margin:2.5em 0 3em}.back-link{display:flex;align-items:center;text-decoration:none}.back-link svg{width:auto;height:.85em;margin-right:.25em}.github-link{text-decoration:none}.github-link svg{height:1.25em;margin-right:.25em;transform:translate(.2em,.2em)}.switch{position:relative;display:inline-block;width:2.7em;height:1.4em}.switch__moon,.switch__sun{position:absolute;top:.2em;margin:.075em;width:.85em;height:.85em;color:var(--foreground)}.switch__sun{left:.2em}.switch__moon{right:.2em}.switch__input{opacity:0;width:0;height:0}.switch__slider{position:absolute;z-index:1;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--shadow);border-radius:1.4em;transition:all .2s}.switch__slider:before{position:absolute;content:"";height:1em;width:1em;left:.2em;bottom:.2em;background-color:var(--foreground);border-radius:50%;transition:all .2s}.switch__input[data-focus]+.switch__slider:before{box-shadow:0 0 0 2px var(--background),0 0 0 4px var(--highlight-strong)}.switch__input:checked+.switch__slider:before,:root[data-theme=dark] .switch:not(.switch--ready) .switch__slider:before{transform:translateX(1.3em)}',""]),t.exports=e},660:function(t,e,n){"use strict";n.r(e);n(13);var o={directives:{focusRing:n(291).a},data:function(){return{mounted:!1}},computed:{darkMode:{get:function(){return"dark"===this.$store.state.theme.name},set:function(t){var e=t?"dark":"light";window.localStorage.setItem("theme",e),this.$store.commit("theme/set",e)}}},mounted:function(){},methods:{toTheApp:function(t){document.referrer==="".concat(window.location.origin,"/")&&window.history.length>1&&(t.preventDefault(),window.history.back())}},head:function(){return{title:"About Diffr"}}},r=(n(404),n(32)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("header",{staticClass:"header"},[o("a",{directives:[{name:"focus-ring",rawName:"v-focus-ring"}],staticClass:"link back-link",attrs:{href:t.PUBLIC_PATH},on:{click:t.toTheApp}},[o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[o("path",{attrs:{fill:"currentColor",d:"M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"}})]),t._v("\n      to the Diffr App\n    ")]),t._v(" "),o("label",{staticClass:"switch",class:{"switch--ready":t.mounted}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.darkMode,expression:"darkMode"},{name:"focus-ring",rawName:"v-focus-ring"}],staticClass:"switch__input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.darkMode)?t._i(t.darkMode,null)>-1:t.darkMode},on:{change:function(e){var n=t.darkMode,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&(t.darkMode=n.concat([null])):c>-1&&(t.darkMode=n.slice(0,c).concat(n.slice(c+1)))}else t.darkMode=r}}}),t._v(" "),o("span",{staticClass:"switch__slider"}),t._v(" "),o("svg",{staticClass:"switch__sun",attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M256 143.7c-61.8 0-112 50.3-112 112.1s50.2 112.1 112 112.1 112-50.3 112-112.1-50.2-112.1-112-112.1zm0 192.2c-44.1 0-80-35.9-80-80.1s35.9-80.1 80-80.1 80 35.9 80 80.1-35.9 80.1-80 80.1zm256-80.1c0-5.3-2.7-10.3-7.1-13.3L422 187l19.4-97.9c1-5.2-.6-10.7-4.4-14.4-3.8-3.8-9.1-5.5-14.4-4.4l-97.8 19.4-55.5-83c-6-8.9-20.6-8.9-26.6 0l-55.5 83-97.8-19.5c-5.3-1.1-10.6.6-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.4L90 187 7.1 242.5c-4.4 3-7.1 8-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3L90 324.6l-19.4 97.9c-1 5.2.6 10.7 4.4 14.4 3.8 3.8 9.1 5.5 14.4 4.4l97.8-19.4 55.5 83c3 4.5 8 7.1 13.3 7.1s10.3-2.7 13.3-7.1l55.5-83 97.8 19.4c5.4 1.2 10.7-.6 14.4-4.4 3.8-3.8 5.4-9.2 4.4-14.4L422 324.6l82.9-55.5c4.4-3 7.1-8 7.1-13.3zm-116.7 48.1c-5.4 3.6-8 10.1-6.8 16.4l16.8 84.9-84.8-16.8c-6.6-1.4-12.8 1.4-16.4 6.8l-48.1 72-48.1-71.9c-3-4.5-8-7.1-13.3-7.1-1 0-2.1.1-3.1.3l-84.8 16.8 16.8-84.9c1.2-6.3-1.4-12.8-6.8-16.4l-71.9-48.1 71.9-48.2c5.4-3.6 8-10.1 6.8-16.4l-16.8-84.9 84.8 16.8c6.5 1.3 12.8-1.4 16.4-6.8l48.1-72 48.1 72c3.6 5.4 9.9 8.1 16.4 6.8l84.8-16.8-16.8 84.9c-1.2 6.3 1.4 12.8 6.8 16.4l71.9 48.2-71.9 48z"}})]),t._v(" "),o("svg",{staticClass:"switch__moon",attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M448.964 365.617C348.188 384.809 255.14 307.765 255.14 205.419c0-58.893 31.561-112.832 82.574-141.862 25.83-14.7 19.333-53.859-10.015-59.28A258.114 258.114 0 0 0 280.947 0c-141.334 0-256 114.546-256 256 0 141.334 114.547 256 256 256 78.931 0 151.079-35.924 198.85-94.783 18.846-23.22-1.706-57.149-30.833-51.6zM280.947 480c-123.712 0-224-100.288-224-224s100.288-224 224-224c13.984 0 27.665 1.294 40.94 3.745-58.972 33.56-98.747 96.969-98.747 169.674 0 122.606 111.613 214.523 231.81 191.632C413.881 447.653 351.196 480 280.947 480z"}})])])]),t._v(" "),o("img",{staticClass:"logo",attrs:{alt:"The Diffr logo: two slightly overlapping diamond shapes",src:n(403)}}),t._v(" "),o("h1",[t._v("About Diffr")]),t._v(" "),o("p",[t._v("\n    Diffr is a tool for comparing text files. It was created out of\n    dissatisfaction with existing diffing tools (and a certain amount of\n    paranoia because virtually every diffing tool has to send your data to\n    their server to compare). In Diffr, all the work happens locally and your\n    data never leaves the browser.\n  ")]),t._v(" "),o("h2",[t._v("Features")]),t._v(" "),t._m(0),t._v(" "),o("h2",[t._v("Drawbacks")]),t._v(" "),t._m(1),t._v(" "),o("hr",{staticClass:"ruler"}),t._v(" "),o("footer",{staticClass:"footer"},[t._v("\n    The Diffr App is Open Source software under the MIT license. Feel free to\n    leave feedback or contribute improvements in our\n    "),o("a",{directives:[{name:"focus-ring",rawName:"v-focus-ring"}],staticClass:"link github-link",attrs:{href:"https://github.com/loilo/diffr"}},[o("svg",{staticClass:"option-icon",attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"}},[o("path",{attrs:{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}})]),t._v("\n\n      GitHub repository")]),t._v(".\n  ")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"list"},[e("li",[this._v("\n      Fully local diffing removes the need for a network connection — once the\n      app is loaded, it will continue to work even when you're offline.\n    ")]),this._v(" "),e("li",[this._v("Share your diffs with others by just copying the current URL.")]),this._v(" "),e("li",[this._v("\n      Drag&Drop files from your filesystem into the editor to compare\n      them.\n    ")]),this._v(" "),e("li",[this._v("Full support for dark and light mode.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"list"},[e("li",[this._v("\n      The editor which Diffr uses under the hood does not currently support\n      mobile devices running Android. For that reason, Diffr can not support\n      those targets either.\n    ")]),this._v(" "),e("li",[this._v("\n      Bringing the editor and diffing experience entirely into the browser\n      requires quite some bandwidth, which means that the whole site is pretty\n      heavyweight (roughly 3 MB). This does not hurt past initial load\n      since the app is cached and not loaded again on further visits, but the\n      initial load may be an issue for users with an unstable connection or a\n      limited data plan.\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);