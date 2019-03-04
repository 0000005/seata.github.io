!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=62)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.throttle=function(e,t){var n=null;return function(){for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];var i=this;clearTimeout(n),n=setTimeout(function(){e.apply(i,a)},t)}},t.getScrollTop=function(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},t.getLink=function(e){return(""+e).length>1&&/^\/[^\/]/.test(""+e)?""+window.rootPath+e:e},t.parseJSONStr=function(e){try{return JSON.parse(e)}catch(t){return e}}},function(e,t,n){e.exports=n(13)()},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={rootPath:"",port:8080,defaultLanguage:"en-us","en-us":{pageMenu:[{key:"home",text:"HOME",link:"/en-us/index.html"},{key:"docs",text:"DOCS",link:"/en-us/docs/overview/what_is_dragonfly.html"},{key:"blog",text:"BLOG",link:"/en-us/blog/index.html"},{key:"community",text:"COMMUNITY",link:"/en-us/community/index.html"}],vision:{title:"Vision",content:"Fescar is dedicated to improving the efficiency of large-scale file distribution, building the go-to solution and standards of container image distribution, and providing you with file and image distribution service which is efficient, easy-to-use, and of high availability."},documentation:{title:"Documentation",list:[{text:"What is Fescar?",link:"/en-us/docs/overview/what_is_dragonfly.html"},{text:"Quick Start",link:"/en-us/docs/quickstart.html"}]},resources:{title:"Resources",list:[{text:"Blog",link:"/en-us/blog/index.html"},{text:"Community",link:"/en-us/community/index.html"}]},copyright:"Copyright © 2019 Fescar"},"zh-cn":{pageMenu:[{key:"home",text:"首页",link:"/zh-cn/index.html"},{key:"docs",text:"文档",link:"/zh-cn/docs/overview/what_is_dragonfly.html"},{key:"blog",text:"博客",link:"/zh-cn/blog/index.html"},{key:"community",text:"社区",link:"/zh-cn/community/index.html"}],vision:{title:"愿景",content:"Fescar 致力于解决大规模文件分发的效率问题，打造容器镜像分发的第一解决方案和标准规范，并为用户提供高可用、高效率以及简单易用的文件及镜像分发服务。"},documentation:{title:"文档",list:[{text:"什么是 Fescar？",link:"/zh-cn/docs/overview/what_is_dragonfly.html"},{text:"快速开始",link:"/zh-cn/docs/quickstart.html"}]},resources:{title:"资源",list:[{text:"博客",link:"/zh-cn/blog/index.html"},{text:"社区",link:"/zh-cn/community/index.html"}]},copyright:"Copyright © 2019 Fescar"}}},function(e,t,n){var r,a;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===a)for(var s in r)o.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}var o={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(a=function(){return n}.apply(t,r))&&(e.exports=a))}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(2),f=r(c),d=n(4),p=r(d),h=n(1);n(10);var m={logo:f.default.string.isRequired,language:f.default.oneOf(["zh-cn","en-us"])},y=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.logo,n=e.language,r=p.default[n];return u.default.createElement("footer",{className:"footer-container"},u.default.createElement("div",{className:"footer-body"},u.default.createElement("img",{src:(0,h.getLink)(t)}),u.default.createElement("p",{className:"docsite-power"},"website powered by docsite"),u.default.createElement("div",{className:"cols-container"},u.default.createElement("div",{className:"col col-12"},u.default.createElement("h3",null,r.vision.title),u.default.createElement("p",null,r.vision.content)),u.default.createElement("div",{className:"col col-6"},u.default.createElement("dl",null,u.default.createElement("dt",null,r.documentation.title),r.documentation.list.map(function(e,t){return u.default.createElement("dd",{key:t},u.default.createElement("a",{href:(0,h.getLink)(e.link),target:e.target||"_self"},e.text))}))),u.default.createElement("div",{className:"col col-6"},u.default.createElement("dl",null,u.default.createElement("dt",null,r.resources.title),r.resources.list.map(function(e,t){return u.default.createElement("dd",{key:t},u.default.createElement("a",{href:(0,h.getLink)(e.link),target:e.target||"_self"},e.text))})))),u.default.createElement("div",{className:"copyright"},u.default.createElement("span",null,r.copyright))))}}]),t}(u.default.Component);y.propTypes=m,t.default=y},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),f=n(2),d=r(f),p=n(5),h=r(p),m=n(4),y=r(m),g=n(1);n(11);var b=[{text:"中",value:"en-us"},{text:"En",value:"zh-cn"}],v={baidu:{logo:"https://img.alicdn.com/tfs/TB1n6DQayLaK1RjSZFxXXamPFXa-300-300.png",url:"https://www.baidu.com/s?wd="},google:{logo:"https://img.alicdn.com/tfs/TB1REfuaCzqK1RjSZFjXXblCFXa-300-300.jpg",url:"https://www.google.com/search?q="}},w=function(){},E={currentKey:d.default.string,logo:d.default.string.isRequired,type:d.default.oneOf(["primary","normal"]),language:d.default.oneOf(["en-us","zh-cn"]),onLanguageChange:d.default.func},_={type:"primary",language:"en-us",onLanguageChange:w},x=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleMenu=function(){n.setState({menuBodyVisible:!n.state.menuBodyVisible})},n.switchLang=function(){var e=void 0;e="zh-cn"===n.state.language?"en-us":"zh-cn",n.setState({language:e}),n.props.onLanguageChange(e)},n.switchSearch=function(){var e=void 0;e="baidu"===n.state.search?"google":"baidu",n.setState({search:e})},n.toggleSearch=function(){n.setState({searchVisible:!n.state.searchVisible})},n.onInputChange=function(e){n.setState({searchValue:e.target.value})},n.state={menuBodyVisible:!1,language:e.language,search:y.default.defaultSearch,searchValue:"",inputVisible:!1},n}return s(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({language:e.language})}},{key:"goSearch",value:function(){var e=this.state,t=e.search,n=e.searchValue;window.open(""+v[t].url+window.encodeURIComponent(n+" site:"+y.default.domain))}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.goSearch()}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.logo,r=e.onLanguageChange,o=e.currentKey,i=this.state,s=i.menuBodyVisible,l=i.language,u=i.search,f=i.searchVisible;return c.default.createElement("header",{className:(0,h.default)(a({"header-container":!0},"header-container-"+t,!0))},c.default.createElement("div",{className:"header-body"},c.default.createElement("a",{href:(0,g.getLink)("/"+l+"/index.html")},c.default.createElement("img",{className:"logo",alt:y.default.name,title:y.default.name,src:(0,g.getLink)(n)})),y.default.defaultSearch?c.default.createElement("div",{className:(0,h.default)(a({search:!0},"search-"+t,!0))},c.default.createElement("span",{className:"icon-search",onClick:this.toggleSearch}),f?c.default.createElement("div",{className:"search-input"},c.default.createElement("img",{src:v[u].logo,onClick:this.switchSearch}),c.default.createElement("input",{autoFocus:!0,onChange:this.onInputChange,onKeyDown:this.onKeyDown})):null):null,r!==w?c.default.createElement("span",{className:(0,h.default)(a({"language-switch":!0},"language-switch-"+t,!0)),onClick:this.switchLang},b.find(function(e){return e.value===l}).text):null,c.default.createElement("div",{className:(0,h.default)({"header-menu":!0,"header-menu-open":s})},c.default.createElement("img",{className:"header-menu-toggle",onClick:this.toggleMenu,src:"primary"===t?(0,g.getLink)("/img/system/menu_white.png"):(0,g.getLink)("/img/system/menu_gray.png")}),c.default.createElement("ul",null,y.default[l].pageMenu.map(function(e){var n;return c.default.createElement("li",{className:(0,h.default)((n={"menu-item":!0},a(n,"menu-item-"+t,!0),a(n,"menu-item-"+t+"-active",o===e.key),n)),key:e.key},c.default.createElement("a",{href:(0,g.getLink)(e.link),target:e.target||"_self"},e.text))})))))}}]),t}(c.default.Component);x.propTypes=E,x.defaultProps=_,t.default=x},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),l=r(s),u=n(12),c=r(u),f=n(4),d=r(f),p=function(e){function t(){var e,n,r,i;a(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.onLanguageChange=function(e){var t=window.location.pathname,n=void 0;n="zh-cn"===e?"en-us":"zh-cn";var r=t.replace(window.rootPath+"/"+n,window.rootPath+"/"+e);c.default.set("docsite_language",e,{expires:365}),window.location=r},r.getLanguage=function(){var e=window.location.pathname.replace(window.rootPath||"","").split("/")[1],t=r.props.lang||e||c.default.get("docsite_language")||d.default.defaultLanguage;return"en-us"!==t&&"zh-cn"!==t&&(t=d.default.defaultLanguage),t!==c.default.get("docsite_language")&&c.default.set("docsite_language",t,{expires:365}),t},i=n,o(r,i)}return i(t,e),t}(l.default.Component);t.default=p},,function(e,t){},function(e,t){},function(e,t,n){var r,a;!function(o){var i=!1;if(r=o,void 0!==(a="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=a),i=!0,e.exports=o(),i=!0,!i){var s=window.Cookies,l=window.Cookies=o();l.noConflict=function(){return window.Cookies=s,l}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(n){function r(t,a,o){var i;if("undefined"!=typeof document){if(arguments.length>1){if(o=e({path:"/"},r.defaults,o),"number"==typeof o.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*o.expires),o.expires=s}o.expires=o.expires?o.expires.toUTCString():"";try{i=JSON.stringify(a),/^[\{\[]/.test(i)&&(a=i)}catch(e){}a=n.write?n.write(a,t):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var l="";for(var u in o)o[u]&&(l+="; "+u,!0!==o[u]&&(l+="="+o[u]));return document.cookie=t+"="+a+l}t||(i={});for(var c=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,d=0;d<c.length;d++){var p=c[d].split("="),h=p.slice(1).join("=");this.json||'"'!==h.charAt(0)||(h=h.slice(1,-1));try{var m=p[0].replace(f,decodeURIComponent);if(h=n.read?n.read(h,m):n(h,m)||h.replace(f,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){i=h;break}t||(i[m]=h)}catch(e){}}return i}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}return t(function(){})})},function(e,t,n){"use strict";function r(){}function a(){}var o=n(14);a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return g.iterable&&(t[Symbol.iterator]=function(){return t}),t}function a(e){this.map={},e instanceof a?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function o(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function i(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader,n=i(t);return t.readAsArrayBuffer(e),n}function l(e){var t=new FileReader,n=i(t);return t.readAsText(e),n}function u(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(g.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(g.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(g.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(g.arrayBuffer&&g.blob&&v(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!g.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!w(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):g.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},g.blob&&(this.blob=function(){var e=o(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?o(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=o(this);if(e)return e;if(this._bodyBlob)return l(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},g.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return E.indexOf(t)>-1?t:e}function p(e,t){t=t||{};var n=t.body;if(e instanceof p){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new a(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new a(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),a=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(a))}}),t}function m(e){var t=new a;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var a=n.join(":").trim();t.append(r,a)}}),t}function y(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new a(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var g={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(g.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(e){return e&&DataView.prototype.isPrototypeOf(e)},w=ArrayBuffer.isView||function(e){return e&&b.indexOf(Object.prototype.toString.call(e))>-1};a.prototype.append=function(e,r){e=t(e),r=n(r);var a=this.map[e];this.map[e]=a?a+","+r:r},a.prototype.delete=function(e){delete this.map[t(e)]},a.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},a.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},a.prototype.set=function(e,r){this.map[t(e)]=n(r)},a.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},a.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},a.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},a.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},g.iterable&&(a.prototype[Symbol.iterator]=a.prototype.entries);var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},f.call(p.prototype),f.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new a(this.headers),url:this.url})},y.error=function(){var e=new y(null,{status:0,statusText:""});return e.type="error",e};var _=[301,302,303,307,308];y.redirect=function(e,t){if(-1===_.indexOf(t))throw new RangeError("Invalid status code");return new y(null,{status:t,headers:{location:e}})},e.Headers=a,e.Request=p,e.Response=y,e.fetch=function(e,t){return new Promise(function(n,r){var a=new p(e,t),o=new XMLHttpRequest;o.onload=function(){var e={status:o.status,statusText:o.statusText,headers:m(o.getAllResponseHeaders()||"")};e.url="responseURL"in o?o.responseURL:e.headers.get("X-Request-URL");var t="response"in o?o.response:o.responseText;n(new y(t,e))},o.onerror=function(){r(new TypeError("Network request failed"))},o.ontimeout=function(){r(new TypeError("Network request failed"))},o.open(a.method,a.url,!0),"include"===a.credentials?o.withCredentials=!0:"omit"===a.credentials&&(o.withCredentials=!1),"responseType"in o&&g.blob&&(o.responseType="blob"),a.headers.forEach(function(e,t){o.setRequestHeader(t,e)}),o.send(void 0===a._bodyInit?null:a._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"zh-cn":{brand:{brandName:"Fescar",briefIntroduction:"Fescar是阿里巴巴开源的分布式事务中间件，以高效并且对业务0侵入的方式，解决微服务场景下面临的分布式事务问题",buttons:[{text:"快速入门",link:"/zh-cn/docs/quickstart.html",type:"primary"},{text:"Github",link:"https://github.com/alibaba/fescar",type:"normal"}]},introduction:{title:"什么是 Fescar？",desc:"Fescar是由阿里巴巴开源的基于Java的高性能、高吞吐量的分布式消息和流计算平台，于2016年捐赠给Apache Software Foundation，2017年9月25日成为Apache 顶级项目。前身是阿里巴巴2011年诞生的数据消息引擎 — MetaQ，并且于2012年对外开源为Fescar 3.0。低延时、高可靠、弹性扩缩等特性，使得Apache Fescar在分布式计算领域受到企业和个人用户青睐。",img:"https://img.alicdn.com/tfs/TB1rDpkJAvoK1RjSZPfXXXPKFXa-794-478.png"},features:{title:"特色功能",list:[{icon:"feature-1",title:"弹性扩缩",content:"Brokers, producers, consumers, name servers都采用了特殊的部署和处理方式，具备很强的横向扩展能力。"},{icon:"feature-2",title:"分布式事务",content:"TBD"},{icon:"feature-3",title:"快速存储和持久化",content:"TBD"},{icon:"feature-4",title:"消息过滤",content:"TBD"},{icon:"feature-5",title:"回溯消费",content:"TBD"},{icon:"feature-6",title:"定时消息",content:"TBD"}]}},"en-us":{brand:{brandName:"Fescar",briefIntroduction:"Fescar is a distributed transaction solution with high performance and ease of use for microservices architecture",buttons:[{text:"Get Started",link:"/en-us/docs/quickstart.html",type:"primary"},{text:"Github",link:"https://github.com/alibaba/fescar",type:"normal"}]},introduction:{title:"What is Fescar?",desc:"Fescar is a distributed messaging and streaming computing platform with high performance and high throughput. It is an open source project from Alibaba, which has been donated to the Apache Software Foundation in 2016. On September 25, 2017, it became an Apache top-level project. Its predecessor was MetaQ, a data messaging engine created by Alibaba in 2011. And it was created as an open source project known as Fescar 3.0 in 2012. Low latency, high reliability, and scalability make Apache Fescar popular among enterprises and individuals in the distributed computing field.",img:"https://img.alicdn.com/tfs/TB1rDpkJAvoK1RjSZPfXXXPKFXa-794-478.png"},features:{title:"Feature List",list:[{icon:"feature-1",title:"Scalability",content:"Brokers, producers, consumers, and name servers adopt special deployment and processing methods that bring strong scale-out ability. "},{icon:"feature-2",title:"Distributed transaction",content:"Fescar implements a function similar to distributed transaction processing of X/Open XA, which allows multiple resources to be accessed within the same transaction."},{icon:"feature-3",title:"Cache and Cache Maintenance",content:"Fescar makes the best use of system memory cache to maintain data to the file system through flushing either synchronously or asynchronously."},{icon:"feature-4",title:"Message filtering",content:"Apache Fescar supports flexible syntax expressions to filter messages, which reduces transmission of useless messages to consumers."},{icon:"feature-5",title:"Consumer offset",content:"Based on the message storage model of Apache Fescar, consumer offset can be reset by the time, accurate to a millisecond. Messages can be re-consumed from the earliest offset and the latest offset."},{icon:"feature-6",title:"Timed messaging",content:"Apache Fescar supports timed messaging, but the time precision has specific levels. "}]}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),s=n(2),l=r(s),u=n(5),c=r(u),f=n(1);n(63);var d={type:l.default.oneOf(["primary","normal"]),link:l.default.string,target:l.default.string},p={type:"primary",link:"",target:"_self"},h=function(e){return i.default.createElement("a",{className:(0,c.default)(a({button:!0},"button-"+e.type,!0)),target:e.target||"_self",href:(0,f.getLink)(e.link)},e.children)};h.propTypes=d,h.defaultProps=p,t.default=h},,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=r(a),i=n(56),s=r(i),l=function(e){var t=e.feature;return o.default.createElement("li",null,o.default.createElement(s.default,{type:t.icon}),o.default.createElement("div",null,o.default.createElement("h4",null,t.title),o.default.createElement("p",null,t.content)))};t.default=l},,,,,function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),s=n(2),l=r(s),u=n(5),c=r(u);n(64);var f={type:l.default.string.isRequired},d=function(e){var t=e.type;return i.default.createElement("i",{className:(0,c.default)(a({"docsite-icon":!0},"docsite-icon-"+t,!0))})};d.propTypes=f,t.default=d},,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(3),f=r(c);n(17);var d=n(1),p=n(7),h=r(p),m=n(42),y=r(m),g=n(6),b=r(g),v=n(8),w=r(v),E=n(50),_=r(E),x=n(41),k=r(x);n(55);var O=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={headerType:"primary",starCount:0,forkCount:0},n}return i(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){(0,d.getScrollTop)()>66?e.setState({headerType:"normal"}):e.setState({headerType:"primary"})}),fetch("//api.github.com/repos/alibaba/fescar").then(function(e){return e.json()}).then(function(t){e.setState({starCount:t.stargazers_count,forkCount:t.forks_count})})}},{key:"render",value:function(){var e=this.state,t=e.starCount,n=e.forkCount,r=this.getLanguage(),a=k.default[r],o=this.state.headerType,i="primary"===o?"https://img.alicdn.com/tfs/TB1aiRVJxTpK1RjSZFKXXa2wXXa-246-64.png":"https://img.alicdn.com/tfs/TB1t3pWJCzqK1RjSZFjXXblCFXa-246-64.png";return u.default.createElement("div",{className:"home-page"},u.default.createElement("section",{className:"top-section"},u.default.createElement(h.default,{currentKey:"home",type:o,logo:i,language:r,onLanguageChange:this.onLanguageChange}),u.default.createElement("div",{className:"top-body"},u.default.createElement("div",{className:"vertical-middle"},u.default.createElement("div",{className:"product-name"},u.default.createElement("h2",null,a.brand.brandName)),u.default.createElement("p",{className:"product-desc"},a.brand.briefIntroduction),u.default.createElement("div",{className:"button-area"},a.brand.buttons.map(function(e){return u.default.createElement(y.default,{type:e.type,key:e.type,link:e.link,target:e.target},e.text)})),u.default.createElement("div",{className:"github-buttons"},u.default.createElement("a",{href:"https://github.com/alibaba/fescar"},u.default.createElement("div",{className:"star"},u.default.createElement("img",{src:"https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png"}),u.default.createElement("span",{className:"type"},"Star"),u.default.createElement("span",{className:"line"}),u.default.createElement("span",{className:"count"},t))),u.default.createElement("a",{href:"https://github.com/alibaba/fescar/fork"},u.default.createElement("div",{className:"fork"},u.default.createElement("img",{src:"https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png"}),u.default.createElement("span",{className:"type"},"Fork"),u.default.createElement("span",{className:"line"}),u.default.createElement("span",{className:"count"},n))))),u.default.createElement("div",{className:"animation"},u.default.createElement("img",{className:"img1",src:"//img.alicdn.com/tfs/TB1evnpJhnaK1RjSZFBXXcW7VXa-702-312.png"}),u.default.createElement("img",{className:"img2",src:"//img.alicdn.com/tfs/TB1iau9JcbpK1RjSZFyXXX_qFXa-914-1156.png"}),u.default.createElement("div",{className:"outer-circle"}),u.default.createElement("div",{className:"rotate-circle"},u.default.createElement("svg",{viewBox:"0 0 404 404",xmlns:"http://www.w3.org/2000/svg"},u.default.createElement("defs",null,u.default.createElement("linearGradient",{id:"linear",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},u.default.createElement("stop",{offset:"0%",stopColor:"rgba(17, 186, 250, 1)"}),u.default.createElement("stop",{offset:"50%",stopColor:"rgba(17, 186, 250, 0.1)"}),u.default.createElement("stop",{offset:"50%",stopColor:"rgba(17, 186, 250, 1)"}),u.default.createElement("stop",{offset:"100%",stopColor:"rgba(17, 186, 250, 0.1)"}))),u.default.createElement("circle",{cx:"202",cy:"202",r:"200",fill:"rgba(0, 0, 0, 0)",stroke:"url(#linear)",strokeWidth:"4"}))),u.default.createElement("img",{className:"img3",src:"//img.alicdn.com/tfs/TB1EBu.JgHqK1RjSZJnXXbNLpXa-914-1156.png"}),u.default.createElement("img",{className:"img4",src:"//img.alicdn.com/tfs/TB115i2JmzqK1RjSZPxXXc4tVXa-186-78.png"}),u.default.createElement("img",{className:"img5",src:"//img.alicdn.com/tfs/TB115i2JmzqK1RjSZPxXXc4tVXa-186-78.png"})))),u.default.createElement("section",{className:"introduction-section"},u.default.createElement("div",{className:"introduction-body"},u.default.createElement("div",{className:"introduction"},u.default.createElement("h3",null,a.introduction.title),u.default.createElement("p",null,a.introduction.desc)),u.default.createElement("img",{src:(0,d.getLink)(a.introduction.img)}))),u.default.createElement("section",{className:"feature-section"},u.default.createElement("div",{className:"feature-container"},u.default.createElement("h3",null,a.features.title),u.default.createElement("ul",null,a.features.list.map(function(e,t){return u.default.createElement(_.default,{feature:e,key:t})})))),u.default.createElement(b.default,{logo:"https://img.alicdn.com/tfs/TB1VohYJwHqK1RjSZFgXXa7JXXa-278-72.png",language:r}))}}]),t}(w.default);document.getElementById("root")&&f.default.render(u.default.createElement(O,null),document.getElementById("root")),t.default=O},function(e,t){},function(e,t){}]);