(self.webpackChunkmusic=self.webpackChunkmusic||[]).push([[476],{1476:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(7294),c=n(3379),o=n.n(c),a=n(4921);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var i=n(5209);const u=(0,i.Z)(r.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications"),l=(0,i.Z)(r.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,c,o,a=(c=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(c);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).state={menus:[{name:"Notifications",icon:u},{name:"Settings",icon:l}]},e}return t=i,(n=[{key:"getMenus",value:function(e){var t=this;return e.map((function(e,n){return t.getMenuItem(e,n)}))}},{key:"getMenuItem",value:function(e,t){var n=e.icon;return r.createElement("li",{key:t,className:"navbar__menu"},r.createElement(n,null))}},{key:"render",value:function(){return r.createElement("div",(n="navbar__left",(t="className")in(e={className:!0})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e),r.createElement("ul",{className:"navbar__menus"},this.getMenus(this.state.menus)),r.createElement("img",{src:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",className:"navbar__profile navbar__profile--size"}));var e,t,n}}])&&f(t.prototype,n),i}(r.Component)},4921:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3645),c=n.n(r)()((function(e){return e[1]}));c.push([e.id,".navbar__menus{display:flex;list-style:none}.navbar__menu{cursor:pointer;margin-left:30px}.navbar__left{display:flex;margin-left:auto;align-items:center}.navbar__profile{border-radius:20px;margin-left:30px;cursor:pointer}.navbar__profile--size{height:40px;width:40px}",""]);const o=c}}]);