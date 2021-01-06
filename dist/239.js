(self.webpackChunkmusic=self.webpackChunkmusic||[]).push([[239],{7838:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(7294);const r=(0,n(5209).Z)(o.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder")},1239:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var o=n(7294),r=n(3379),s=n.n(r),a=n(7437);s()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var i=n(5209);const c=(0,i.Z)(o.createElement("path",{d:"M6 6h12v12H6z"}),"Stop"),l=(0,i.Z)(o.createElement("path",{d:"M8 5v14l11-7z"}),"PlayArrow"),u=(0,i.Z)(o.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");var f=n(7838);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,r,s,a=(r=i,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(s){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={song:t.props.song},t.songStateChange=t.songStateChange.bind(_(t)),t.selectOrRemoveFromFavorite=t.selectOrRemoveFromFavorite.bind(_(t)),t}return t=i,(n=[{key:"songStateChange",value:function(){var e=this.state.song.isPlaying;this.setState({song:Object.assign({},this.state.song,{isPlaying:!e})})}},{key:"selectOrRemoveFromFavorite",value:function(){var e=this.state.song.isFavorite;this.setState({song:Object.assign({},this.state.song,{isFavorite:!e})})}},{key:"render",value:function(){var e=this.state.song,t=e.image,n=e.name,r=e.singer,s=e.duration,a=e.isPlaying,i=e.isFavorite,g=this;return o.createElement("li",{className:"song__item song__item--size song__item--theme",key:this.props.key,onClick:this.props.setCurrentSong.bind(this,this.props.song)},o.createElement("img",{src:t,className:"song__image"}),o.createElement("div",null,o.createElement("h5",{className:"song__name"},n),o.createElement("h5",{className:"song__singer"},r)),o.createElement("div",{className:"song__right"},o.createElement("span",{className:"song__duration"},s),a?o.createElement(c,{className:"song__play",onClick:g.songStateChange}):o.createElement(l,{className:"song__play",onClick:g.songStateChange}),i?o.createElement(f.Z,{className:"song__favorite",onClick:g.selectOrRemoveFromFavorite}):o.createElement(u,{className:"song__favorite",onClick:g.selectOrRemoveFromFavorite})))}}])&&m(t.prototype,n),i}(o.Component)},7437:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".song__item{display:flex;align-items:center;padding:10px 30px;cursor:pointer;margin-bottom:30px;box-shadow:0 1px 2px 0 gray}.song__item--size{height:80px;width:100%}.song__item--theme{background-color:#f3f3f3}.song__image{height:40px;width:40px;border-radius:20px}.song__name{margin-left:10px;font-weight:500}.song__singer{margin-left:10px}.song__right{margin-left:auto;display:flex;align-items:center;justify-content:space-between}.song__duration{font-size:12px;font-weight:bold}.song__play{margin-left:20px;color:#ff00e5}.song__favorite{margin-left:20px}",""]);const s=r}}]);