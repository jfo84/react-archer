!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=void 0},function(e,t){e.exports=void 0},function(e,t,n){"use strict";(function(e){var n=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return function(){function t(){this.__entries__=[]}var n={size:{configurable:!0}};return n.size.get=function(){return this.__entries__.length},t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n+=1){var o=r[n];e.call(t,o[1],o[0])}},Object.defineProperties(t.prototype,n),t}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),i="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},a=2,s=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function s(){n&&(n=!1,e()),r&&u()}function c(){i(s)}function u(){var e=Date.now();if(n){if(e-o<a)return;r=!0}else n=!0,r=!1,setTimeout(c,t);o=e}return u}(this.refresh.bind(this),20)};u.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},u.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},u.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},u.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},u.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},u.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},u.prototype.onTransitionEnd_=function(e){var t=e.propertyName;void 0===t&&(t=""),s.some(function(e){return!!~t.indexOf(e)})&&this.refresh()},u.getInstance=function(){return this.instance_||(this.instance_=new u),this.instance_},u.instance_=null;var l=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n+=1){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},f=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},p=v(0,0,0,0);function h(e){return parseFloat(e)||0}function d(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return t.reduce(function(t,n){return t+h(e["border-"+n+"-width"])},0)}function y(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=f(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n+=1){var o=r[n],i=e["padding-"+o];t[o]=h(i)}return t}(r),i=o.left+o.right,a=o.top+o.bottom,s=h(r.width),c=h(r.height);if("border-box"===r.boxSizing&&(Math.round(s+i)!==t&&(s-=d(r,"left","right")+i),Math.round(c+a)!==n&&(c-=d(r,"top","bottom")+a)),!function(e){return e===f(e).document.documentElement}(e)){var u=Math.round(s+i)-t,l=Math.round(c+a)-n;1!==Math.abs(u)&&(s-=u),1!==Math.abs(l)&&(c-=l)}return v(o.left,o.top,s,c)}var b="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof f(e).SVGGraphicsElement}:function(e){return e instanceof f(e).SVGElement&&"function"==typeof e.getBBox};function m(e){return r?b(e)?function(e){var t=e.getBBox();return v(0,0,t.width,t.height)}(e):y(e):p}function v(e,t,n,r){return{x:e,y:t,width:n,height:r}}var g=function(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=v(0,0,0,0),this.target=e};g.prototype.isActive=function(){var e=m(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},g.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e};var w=function(e,t){var n=function(e){var t=e.x,n=e.y,r=e.width,o=e.height,i="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(i.prototype);return l(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}(t);l(this,{target:e,contentRect:n})},E=function(e,t,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r};E.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new g(e)),this.controller_.addObserver(this),this.controller_.refresh())}},E.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},E.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},E.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},E.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new w(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},E.prototype.clearActive=function(){this.activeObservations_.splice(0)},E.prototype.hasActive=function(){return this.activeObservations_.length>0};var _="undefined"!=typeof WeakMap?new WeakMap:new n,O=function(e){if(!(this instanceof O))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=u.getInstance(),n=new E(e,t,this);_.set(this,n)};["observe","unobserve","disconnect"].forEach(function(e){O.prototype[e]=function(){return(t=_.get(this))[e].apply(t,arguments);var t}});var x=void 0!==o.ResizeObserver?o.ResizeObserver:O;t.a=x}).call(this,n(9))},function(e,t,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var s,c,u,l=r(t),f=r(n);if(l&&f){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(l!=f)return!1;var p=t instanceof Date,h=n instanceof Date;if(p!=h)return!1;if(p&&h)return t.getTime()==n.getTime();var d=t instanceof RegExp,y=n instanceof RegExp;if(d!=y)return!1;if(d&&y)return t.toString()==n.toString();var b=o(t);if((c=b.length)!==o(n).length)return!1;for(s=c;0!=s--;)if(!i.call(n,b[s]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(s=c;0!=s--;)if(!("_owner"===(u=b[s])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(6)(!0)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n","",{version:3,sources:["/Users/JRF/forks/jfo84/react-archer/example/index.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,WAAW;EACX,wBAAwB;CACzB",file:"index.css",sourcesContent:["body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n"],sourceRoot:""}])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,c=[],u=n(8);function l(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function d(e){var t=document.createElement("style");return e.attrs.type="text/css",y(t,e.attrs),p(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;n=a||(a=d(t)),r=v.bind(null,n,c,!1),o=v.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",y(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=d(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return l(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&l(f(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=(n(4),n(2));function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"x",void 0),u(this,"y",void 0),this.x=t,this.y=n}return function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"substract",value:function(t){return new e(this.x-t.x,this.y-t.y)}}]),e}();var f=function(e){var t=e.startingPoint,n=e.startingAnchor,r=e.endingPoint,i=e.endingAnchor,a=e.strokeColor,s=e.arrowLength,c=e.strokeWidth,u=e.arrowLabel,l=e.arrowMarkerId,f=2*s,p=t.x,h=t.y,d=function(e,t,n,r,o){var i=function(e){switch(e){case"left":return{arrowX:-1,arrowY:0};case"right":return{arrowX:1,arrowY:0};case"top":return{arrowX:0,arrowY:-1};case"bottom":return{arrowX:0,arrowY:1};default:return{arrowX:0,arrowY:0}}}(o);return{xe:e+i.arrowX*n*r/2,ye:t+i.arrowY*n*r/2}}(r.x,r.y,f,c,i),y=d.xe,b=d.ye,m=function(e,t,n,r,o){return"top"===o||"bottom"===o?{xa1:e,ya1:t+(r-t)/2}:"left"===o||"right"===o?{xa1:e+(n-e)/2,ya1:t}:{xa1:e,ya1:t}}(p,h,y,b,n),v=m.xa1,g=m.ya1,w=function(e,t,n,r,o){return"top"===o||"bottom"===o?{xa2:n,ya2:r-(r-t)/2}:"left"===o||"right"===o?{xa2:n-(n-e)/2,ya2:r}:{xa2:n,ya2:r}}(p,h,y,b,i),E=w.xa2,_=w.ya2,O="M".concat(p,",").concat(h," ")+"C".concat(v,",").concat(g," ").concat(E,",").concat(_," ")+"".concat(y,",").concat(b),x=function(e,t,n,r){var o=Math.abs(n-e),i=Math.abs(r-t);return{xl:n>e?e:n,yl:r>t?t:r,wl:o,hl:i}}(p,h,y,b),C=x.xl,j=x.yl,A=x.wl,T=x.hl;return o.a.createElement("g",null,o.a.createElement("path",{d:O,style:{fill:"none",stroke:a,strokeWidth:c},markerEnd:"url(".concat(location.href,"#").concat(l,")")}),u&&o.a.createElement("foreignObject",{x:C,y:j,width:A,height:T},o.a.createElement("div",{style:{width:A,height:T,display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement("div",null,u))))};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={position:"absolute",width:"100%",height:"100%",top:0,left:0};function w(e){return new l(e.left,e.top)}var E=o.a.createContext({}),_=E.Provider,O=E.Consumer,x=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(m(m(n=function(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?m(e):t}(this,y(t).call(this,e)))),"arrowMarkerUniquePrefix",void 0),v(m(m(n)),"refreshScreen",function(){n.setState(h({},n.state))}),v(m(m(n)),"storeParent",function(e){n.state.parent||n.setState(function(t){return h({},t,{parent:e})})}),v(m(m(n)),"getRectFromRef",function(e){return e?e.getBoundingClientRect():null}),v(m(m(n)),"getParentCoordinates",function(){var e=n.getRectFromRef(n.state.parent);return e?w(e):new l(0,0)}),v(m(m(n)),"getPointCoordinatesFromAnchorPosition",function(e,t,r){var o=n.getRectFromRef(n.state.refs[t]);return o?function(e,t){switch(e){case"top":return w(t).add(new l(t.width/2,0));case"bottom":return w(t).add(new l(t.width/2,t.height));case"left":return w(t).add(new l(0,t.height/2));case"right":return w(t).add(new l(t.width,t.height/2));default:return new l(0,0)}}(e,o).substract(r):new l(0,0)}),v(m(m(n)),"registerTransitions",function(e,t){n.setState(function(n){return{sourceToTargetsMap:h({},n.sourceToTargetsMap,v({},e,t))}})}),v(m(m(n)),"unregisterTransitions",function(e){var t=h({},n.state.sourceToTargetsMap);delete t[e],n.setState(function(){return{sourceToTargetsMap:t}})}),v(m(m(n)),"registerChild",function(e,t){n.state.refs[e]||(n.state.observer.observe(t),n.setState(function(n){return{refs:h({},n.refs,v({},e,t))}}))}),v(m(m(n)),"unregisterChild",function(e){var t=n.state,r=t.refs;t.observer.unobserve(r[e]);var o=h({},r);delete o[e],n.setState(function(){return{refs:o}})}),v(m(m(n)),"getSourceToTargets",function(){var e=n.state.sourceToTargetsMap,t=Object.keys(e).map(function(t){return e[t]});return[].concat.apply([],t)}),v(m(m(n)),"computeArrows",function(){var e=n.getParentCoordinates();return n.getSourceToTargets().map(function(t){var r=t.source,i=t.target,a=t.label,s=t.style,c=s&&s.strokeColor||n.props.strokeColor,u=s&&s.arrowLength||n.props.arrowLength,l=s&&s.strokeWidth||n.props.strokeWidth,p=s&&s.arrowThickness||n.props.arrowThickness,h=r.anchor,d=n.getPointCoordinatesFromAnchorPosition(r.anchor,r.id,e),y=i.anchor,b=n.getPointCoordinatesFromAnchorPosition(i.anchor,i.id,e);return o.a.createElement(f,{key:JSON.stringify({source:r,target:i}),startingPoint:d,startingAnchor:h,endingPoint:b,endingAnchor:y,strokeColor:c,arrowLength:u,strokeWidth:l,arrowLabel:a,arrowThickness:p,arrowMarkerId:n.getMarkerId(r,i)})})}),v(m(m(n)),"getMarkerId",function(e,t){return"".concat(n.arrowMarkerUniquePrefix).concat(e.id).concat(t.id)}),v(m(m(n)),"generateAllArrowMarkers",function(){return n.getSourceToTargets().map(function(e){var t=e.source,r=e.target,i=(e.label,e.style),a=i&&i.strokeColor||n.props.strokeColor,s=i&&i.arrowLength||n.props.arrowLength,c=i&&i.arrowThickness||n.props.arrowThickness,u="M0,0 L0,".concat(c," L").concat(s-1,",").concat(c/2," z");return o.a.createElement("marker",{id:n.getMarkerId(t,r),key:n.getMarkerId(t,r),markerWidth:s,markerHeight:c,refX:"0",refY:c/2,orient:"auto",markerUnits:"strokeWidth"},o.a.createElement("path",{d:u,fill:a}))})}),v(m(m(n)),"svgContainerStyle",function(){return h({},g,n.props.svgContainerStyle)});var r=new s.a(function(){n.refreshScreen()});n.state={refs:{},sourceToTargetsMap:{},observer:r,parent:null};var i=Math.random().toString().slice(2);return n.arrowMarkerUniquePrefix="arrow".concat(i),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),function(e,t,n){t&&d(e.prototype,t),n&&d(e,n)}(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.refreshScreen)}},{key:"componentWillUnmount",value:function(){var e=this;Object.keys(this.state.refs).map(function(t){e.state.observer.unobserve(e.state.refs[t])}),window.removeEventListener("resize",this.refreshScreen)}},{key:"render",value:function(){var e=this.computeArrows();return o.a.createElement(_,{value:{registerTransitions:this.registerTransitions,unregisterTransitions:this.unregisterTransitions,registerChild:this.registerChild,unregisterChild:this.unregisterChild}},o.a.createElement("div",{style:h({},this.props.style,{position:"relative"}),className:this.props.className},o.a.createElement("svg",{style:this.svgContainerStyle()},o.a.createElement("defs",null,this.generateAllArrowMarkers()),e),o.a.createElement("div",{style:{height:"100%"},ref:this.storeParent},this.props.children)))}}]),t}();v(x,"defaultProps",{arrowLength:10,arrowThickness:6,strokeColor:"#f00",strokeWidth:2,svgContainerStyle:{}});var C=x,j=n(3),A=n.n(j);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return L(R(R(n=function(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?R(e):t}(this,(e=M(t)).call.apply(e,[this].concat(o))))),"registerTransitions",function(e){var t=n.generateSourceToTarget(e);if(!n.props.context.registerTransitions)throw new Error('Could not find "registerTransition" in the context of <ArcherElement>. Wrap the component in a <ArcherContainer>.');n.props.context.registerTransitions(n.props.id,t)}),L(R(R(n)),"generateSourceToTarget",function(e){var t=n.props.id;return e.map(function(e){var n=e.targetId,r=e.sourceAnchor,o=e.targetAnchor,i=e.label,a=e.style;return{source:{id:t,anchor:r},target:{id:n,anchor:o},label:i,style:a}})}),L(R(R(n)),"unregisterTransitions",function(){if(!n.props.context.unregisterTransitions)throw new Error('Could not find "unregisterTransitions" in the context of <ArcherElement>. Wrap the component in a <ArcherContainer>.');n.props.context.unregisterTransitions(n.props.id)}),L(R(R(n)),"onRefUpdate",function(e){if(e){if(!n.props.context.registerChild)throw new Error('Could not find "registerChild" in the context of <ArcherElement>. Wrap the component in a <ArcherContainer>.');n.props.context.registerChild(n.props.id,e)}}),L(R(R(n)),"unregisterChild",function(){if(!n.props.context.unregisterChild)throw new Error('Could not find "unregisterChild" in the context of <ArcherElement>. Wrap the component in a <ArcherContainer>.');n.props.context.unregisterChild(n.props.id)}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,o.a.Component),function(e,t,n){t&&S(e.prototype,t),n&&S(e,n)}(t,[{key:"componentDidUpdate",value:function(e){A()(e.relations,this.props.relations)||this.registerTransitions(this.props.relations)}},{key:"componentDidMount",value:function(){0!==this.props.relations.length&&this.registerTransitions(this.props.relations)}},{key:"componentWillUnmount",value:function(){this.unregisterChild(),this.unregisterTransitions()}},{key:"render",value:function(){return o.a.createElement("div",{style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){L(e,t,n[t])})}return e}({},this.props.style,{position:"relative"}),className:this.props.className,ref:this.onRefUpdate},this.props.children)}}]),t}();L(U,"defaultProps",{relations:[]});var I=function(e){return o.a.createElement(O,null,function(t){return o.a.createElement(U,k({},e,{context:t}))})},W={display:"flex",justifyContent:"center"},D={margin:"200px 0",display:"flex",justifyContent:"space-between"},B={padding:"10px",border:"1px solid black"},F=function(){return o.a.createElement("div",{style:{height:"500px",margin:"50px"}},o.a.createElement(C,{strokeColor:"red"},o.a.createElement("div",{style:W},o.a.createElement(I,{id:"root",relations:[{targetId:"element2",targetAnchor:"top",sourceAnchor:"bottom"}]},o.a.createElement("div",{style:B},"Root"))),o.a.createElement("div",{style:D},o.a.createElement(I,{id:"element2",relations:[{targetId:"element3",targetAnchor:"left",sourceAnchor:"right",style:{strokeColor:"blue",strokeWidth:1},label:o.a.createElement("div",{style:{marginTop:"-20px"}},"Arrow 2")}]},o.a.createElement("div",{style:B},"Element 2")),o.a.createElement(I,{id:"element3"},o.a.createElement("div",{style:B},"Element 3")),o.a.createElement(I,{id:"element4",relations:[{targetId:"root",targetAnchor:"right",sourceAnchor:"left",label:"Arrow 3"}]},o.a.createElement("div",{style:B},"Element 4")))))};function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H={display:"flex",justifyContent:"center"},Y={margin:"200px 0",display:"flex",justifyContent:"space-between"},$={padding:"10px",border:"1px solid black"},J=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return G(X(X(n=function(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?X(e):t}(this,(e=z(t)).call.apply(e,[this].concat(i))))),"state",{nbElements:3,labels:"hello"}),G(X(X(n)),"render",function(){return o.a.createElement("div",{style:{height:"500px",margin:"50px"}},o.a.createElement("div",null,o.a.createElement("div",null,"Change labels"),o.a.createElement("input",{type:"text",onChange:function(e){n.setState({labels:e.currentTarget.value})}})),o.a.createElement("div",null,o.a.createElement("div",null,"Add elements"),o.a.createElement("button",{onClick:function(){return n.setState({nbElements:n.state.nbElements+1})}},"+"),o.a.createElement("button",{onClick:function(){return n.setState({nbElements:n.state.nbElements-1})}},"-")),o.a.createElement(C,{strokeColor:"red"},o.a.createElement("div",{style:H},o.a.createElement(I,{id:"root"},o.a.createElement("div",{style:$},"Root"))),o.a.createElement("div",{style:Y},Array(n.state.nbElements).fill().map(function(e,t){return o.a.createElement(I,{key:"element".concat(t),id:"element".concat(t),relations:[{targetId:"root",targetAnchor:"bottom",sourceAnchor:"top",label:o.a.createElement("div",null,t," ",n.state.labels)}]},o.a.createElement("div",{style:$},"Element ",t))}))))}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,o.a.Component),t}();function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var te=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return ee(Z(Z(n=function(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?Z(e):t}(this,(e=K(t)).call.apply(e,[this].concat(i))))),"state",{currentExample:1}),ee(Z(Z(n)),"getExample",function(){switch(n.state.currentExample){case 1:return F;case 2:default:return J}}),ee(Z(Z(n)),"changeExample",function(e){return function(){n.setState({currentExample:e})}}),ee(Z(Z(n)),"render",function(){var e=n.getExample();return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",null,"Example ",n.state.currentExample),o.a.createElement("p",null,"Choose an example:"),o.a.createElement("button",{onClick:n.changeExample(1)},"Example 1"),o.a.createElement("button",{onClick:n.changeExample(2)},"Example 2")),o.a.createElement("hr",null),o.a.createElement(e,null))}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,o.a.Component),t}();a.a.render(o.a.createElement(te,null),document.getElementById("root"))}]);