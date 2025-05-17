(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function n(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ia});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function r(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
function ra(){this.D=!1;this.m=null;this.j=void 0;this.i=1;this.s=this.o=0;this.A=this.l=null}
function sa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
ra.prototype.v=function(a){this.j=a};
function ta(a,b){a.l={sb:b,xb:!0};a.i=a.o||a.s}
ra.prototype.return=function(a){this.l={return:a};this.i=this.s};
function t(a,b,c){a.i=c;return{value:b}}
ra.prototype.u=function(a){this.i=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.s=c)}
function xa(a,b){a.i=b;a.o=0}
function ya(a){a.o=0;var b=a.l.sb;a.l=null;return b}
function za(a){a.A=[a.l];a.o=0;a.s=0}
function Aa(a){var b=a.A.splice(0)[0];(b=a.l=a.l||b)?b.xb?a.i=a.o||a.s:void 0!=b.u&&a.s<b.u?(a.i=b.u,a.l=null):a.i=a.s:a.i=0}
function Da(a){this.i=new ra;this.j=a}
function Ea(a,b){sa(a.i);var c=a.i.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.D=!1,e;var f=e.value}catch(g){return a.i.m=null,ta(a.i,g),Ga(a)}a.i.m=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.D=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,ta(a.i,c)}a.i.D=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.xb)throw b.sb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){sa(a.i);a.i.m?b=Fa(a,a.i.m.next,b,a.i.v):(a.i.v(b),b=Ga(a));return b};
this.throw=function(b){sa(a.i);a.i.m?b=Fa(a,a.i.m["throw"],b,a.i.v):(ta(a.i,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Da(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return la});
n("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.D=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.s()})}this.i.push(g)};
var e=da.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.s=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(p){k||(k=!0,m.call(h,p))}}
var h=this,k=!1;return{resolve:g(this.R),reject:g(this.s)}};
b.prototype.R=function(g){if(g===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.N(g):this.o(g)}};
b.prototype.N=function(g){var h=void 0;try{h=g.then}catch(k){this.s(k);return}"function"==typeof h?this.la(h,g):this.o(g)};
b.prototype.s=function(g){this.v(2,g)};
b.prototype.o=function(g){this.v(1,g)};
b.prototype.v=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.W();this.A()};
b.prototype.W=function(){var g=this;e(function(){if(g.L()){var h=da.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.L=function(){if(this.D)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.A=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.da=function(g){var h=this.m();g.Ha(h.resolve,h.reject)};
b.prototype.la=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(y,v){return"function"==typeof y?function(E){try{m(y(E))}catch(F){p(F)}}:v}
var m,p,u=new b(function(y,v){m=y;p=v});
this.Ha(k(g,m),k(h,p));return u};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ha=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.D=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=q(g),p=m.next();!p.done;p=m.next())d(p.value).Ha(h,k)})};
b.all=function(g){var h=q(g),k=h.next();return k.done?d([]):new b(function(m,p){function u(E){return function(F){y[E]=F;v--;0==v&&m(y)}}
var y=[],v=0;do y.push(void 0),v++,d(k.value).Ha(u(y.length-1),p),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=q(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ha(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return m(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),p=new a([[k,2],[m,3]]);if(2!=p.get(k)||3!=p.get(m))return!1;p.delete(k);p.set(m,4);return!p.has(k)&&4==p.get(m)}catch(u){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ea(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var p=h.data_[m];if(p&&ha(h.data_,m))for(h=0;h<p.length;h++){var u=p[h];if(k!==k&&u.key!==u.key||k===u.key)return{id:m,list:p,index:h,entry:u}}return{id:m,list:p,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),p=m.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=m.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!m.next().done?!1:!0}catch(u){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),p;!(p=m.next()).done;)p=p.value,h.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Object.setPrototypeOf",function(a){return a||qa});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push(b[d]);return c}});
var x=this||self;function z(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){a.ab=void 0;a.getInstance=function(){return a.ab?a.ab:a.ab=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ep=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Nb=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var yb;function zb(){if(void 0===yb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){x.console&&x.console.error(c.message)}yb=a}else yb=a}return yb}
;function Ab(a,b){this.l=a===Bb&&b||""}
Ab.prototype.j=!0;Ab.prototype.i=function(){return this.l};
function Cb(a){return new Ab(Bb,a)}
var Bb={};Cb("");var Db={};function Eb(a){this.l=Db===Db?a:"";this.j=!0}
Eb.prototype.i=function(){return this.l.toString()};
Eb.prototype.toString=function(){return this.l.toString()};function Fb(a,b){this.l=b===Gb?a:""}
Fb.prototype.j=!0;Fb.prototype.i=function(){return this.l.toString()};
Fb.prototype.toString=function(){return this.l+""};
function Hb(a){if(a instanceof Fb&&a.constructor===Fb)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Ib(a){var b=zb();a=b?b.createScriptURL(a):a;return new Fb(a,Gb)}
;var Jb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Kb(a,b){this.l=b===Nb?a:""}
Kb.prototype.j=!0;Kb.prototype.i=function(){return this.l.toString()};
Kb.prototype.toString=function(){return this.l.toString()};
function Ob(a){if(a instanceof Kb&&a.constructor===Kb)return a.l;Oa(a);return"type_error:SafeUrl"}
var Pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={};function Qb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
function B(a){return-1!=Qb().indexOf(a)}
;function Rb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")||B("Silk")}
;var Sb={};function Tb(a){this.l=Sb===Sb?a:"";this.j=!0}
Tb.prototype.i=function(){return this.l.toString()};
Tb.prototype.toString=function(){return this.l.toString()};function Ub(a,b){b instanceof Kb||b instanceof Kb||(b="object"==typeof b&&b.j?b.i():String(b),Pb.test(b)||(b="about:invalid#zClosurez"),b=new Kb(b,Nb));a.href=Ob(b)}
function Vb(a,b){a.rel="stylesheet";a.href=Hb(b).toString();(b=Wb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Xb(){return Wb("script[nonce]")}
var Yb=/^[\w+/_-]+[=]{0,2}$/;function Wb(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Yb.test(a)?a:"":""}
;function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function gc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function hc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var ic=/#|$/,jc=/[?&]($|#)/;function nc(a){for(var b=a.search(ic),c=0,d,e=[];0<=(d=hc(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.slice(c));return e.join("").replace(jc,"$1")}
;var oc={};function pc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function qc(a){qc[" "](a);return a}
qc[" "]=function(){};var rc=B("Opera"),sc=B("Trident")||B("MSIE"),tc=B("Edge"),uc=B("Gecko")&&!(-1!=Qb().toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),vc=-1!=Qb().toLowerCase().indexOf("webkit")&&!B("Edge"),wc=B("Android");function xc(){var a=x.document;return a?a.documentMode:void 0}
var yc;a:{var zc="",Ac=function(){var a=Qb();if(uc)return/rv:([^\);]+)(\)|;)/.exec(a);if(tc)return/Edge\/([\d\.]+)/.exec(a);if(sc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(vc)return/WebKit\/(\S+)/.exec(a);if(rc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ac&&(zc=Ac?Ac[1]:"");if(sc){var Bc=xc();if(null!=Bc&&Bc>parseFloat(zc)){yc=String(Bc);break a}}yc=zc}var Cc=yc,Dc;if(x.document&&sc){var Ec=xc();Dc=Ec?Ec:parseInt(Cc,10)||void 0}else Dc=void 0;var Fc=Dc;var Gc=pc()||B("iPod"),Hc=B("iPad");!B("Android")||Rb();Rb();var Ic=B("Safari")&&!(Rb()||B("Coast")||B("Opera")||B("Edge")||B("Edg/")||B("OPR")||B("Firefox")||B("FxiOS")||B("Silk")||B("Android"))&&!(pc()||B("iPad")||B("iPod"));var Jc={},Kc=null;
function Lc(a,b){Pa(a);void 0===b&&(b=0);if(!Kc){Kc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Jc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Kc[h]&&(Kc[h]=g)}}}b=Jc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Mc="undefined"!==typeof Uint8Array;var Nc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Oc(a,b){Object.isFrozen(a)||(Nc?a[Nc]|=b:void 0!==a.La?a.La|=b:Object.defineProperties(a,{La:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Pc(a){var b;Nc?b=a[Nc]:b=a.La;return null==b?0:b}
function Qc(a){Oc(a,1);return a}
function Rc(a){return Array.isArray(a)?!!(Pc(a)&2):!1}
function Sc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Oc(a,2)}
;function Tc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Uc,Yc=Object.freeze(Qc([]));function Zc(a){if(Rc(a.G))throw Error("Cannot mutate an immutable Message");}
var $c="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function ad(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function bd(a){x.setTimeout(function(){throw a;},0)}
;function cd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Mc&&null!=a&&a instanceof Uint8Array)return Lc(a)}return a}
;function dd(a,b){b=void 0===b?ed:b;return fd(a,b)}
function gd(a,b){if(null!=a){if(Array.isArray(a))a=fd(a,b);else if(Tc(a)){var c={},d;for(d in a)c[d]=gd(a[d],b);a=c}else a=b(a);return a}}
function fd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=gd(c[d],b);Array.isArray(a)&&Pc(a)&1&&Qc(c);return c}
function hd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=cd(a);return Array.isArray(a)?dd(a,hd):a}
function ed(a){return Mc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function id(a,b,c){return-1===b?null:b>=a.m?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.G[b+a.l]}
function C(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Zc(a);b<a.m&&!d?a.G[b+a.l]=c:(a.j||(a.j=a.G[a.m+a.l]={}))[b]=c;return a}
function jd(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=id(a,b,d);null==e&&(e=Yc);if(Rc(a.G))c&&(Sc(e),Object.freeze(e));else if(e===Yc||Rc(e))e=Qc(e.slice()),C(a,b,e,d);return e}
function kd(a,b,c,d){Zc(a);(c=ld(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),C(a,c));return C(a,b,d)}
function ld(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=id(a,e)&&(0!==c&&C(a,c,void 0,!1,!0),c=e)}return c}
function md(a,b,c,d,e){if(-1===c)return null;a.i||(a.i={});var f=a.i[c];if(f)return f;e=id(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Rc(a.G)&&Sc(b.G);return a.i[c]=b}
function nd(a,b,c,d){d=void 0===d?!1:d;a.i||(a.i={});var e=Rc(a.G),f=a.i[c];if(!f){d=jd(a,c,!0,d);f=[];e=e||Rc(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Sc(f[g].G);e&&(Sc(f),Object.freeze(f));a.i[c]=f}return f}
function D(a,b,c){var d=void 0===d?!1:d;Zc(a);a.i||(a.i={});var e=null!=c?c.G:c;a.i[b]=c;return C(a,b,e,d)}
function od(a,b,c,d){Zc(a);a.i||(a.i={});var e=null!=d?d.G:d;a.i[b]=d;kd(a,b,c,e)}
function pd(a,b,c,d){var e=void 0===e?!1:e;Zc(a);e=nd(a,c,b,e);c=null!=d?d:new c;a=jd(a,b);e.push(c);a.push(c.G)}
function qd(a,b){a=id(a,b);return null==a?"":a}
;function rd(a,b,c){a||(a=sd);sd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.l=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.G=a;a:{d=this.G.length;a=d-1;if(d&&(d=this.G[a],Tc(d))){this.m=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.m=Math.max(b,a+1-this.l),this.j=void 0):this.m=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.m)a+=this.l,(d=this.G[a])?Array.isArray(d)&&Qc(d):this.G[a]=Yc;else{d=this.j||(this.j=this.G[this.m+this.l]={});var e=d[a];e?Array.isArray(e)&&
Qc(e):d[a]=Yc}}
rd.prototype.toJSON=function(){var a=this.G;return Uc?a:dd(a,hd)};
rd.prototype.clone=function(){var a=dd(this.G);sd=a;a=new this.constructor(a);sd=null;td(a,this);return a};
rd.prototype.isMutable=function(a){if(a!==oc)throw Error("requires a valid immutable API token");return!Rc(this.G)};
rd.prototype.toString=function(){return this.G.toString()};
function ud(a,b){return cd(b)}
function td(a,b){b.s&&(a.s=b.s.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=nd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)td(f[g],e[g])}else(f=md(a,e.constructor,g,void 0,f))&&td(f,e)}}}}
var sd;function vd(){rd.apply(this,arguments)}
r(vd,rd);if($c){var wd={};Object.defineProperties(vd,(wd[Symbol.hasInstance]=ad(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),wd))};function I(){vd.apply(this,arguments)}
r(I,vd);if($c){var xd={};Object.defineProperties(I,(xd[Symbol.hasInstance]=ad(Object[Symbol.hasInstance]),xd))};function yd(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function zd(a){this.j=!1;var b=a.program;a=a.globalName;var c=new yd;this.l=c.promise;this.m=q((0,x[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Mb:d,vc:e})})},!0)).next().value;
this.uc=c.promise.then(function(){})}
zd.prototype.snapshot=function(a){if(this.j)throw Error("Already disposed");return this.l.then(function(b){var c=b.Mb;return new Promise(function(d){c(function(e){d(e)},[a.nb,
a.wc])})})};
zd.prototype.dispose=function(){this.j=!0;this.l.then(function(a){(a=a.vc)&&a()})};
zd.prototype.i=function(){return this.j};var Ad=window;Cb("csi.gstatic.com");Cb("googleads.g.doubleclick.net");Cb("partner.googleadservices.com");Cb("pubads.g.doubleclick.net");Cb("securepubads.g.doubleclick.net");Cb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Bd={};function Cd(){}
function Dd(a){this.i=a}
r(Dd,Cd);Dd.prototype.toString=function(){return this.i};
var Ed=new Dd("about:invalid#zTSz",Bd);function Fd(a){if(a instanceof Cd)if(a instanceof Dd)a=a.i;else throw Error("");else a=Ob(a);return a}
;function Gd(a,b){a.src=Hb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Hd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=Hd.prototype;l.clone=function(){return new Hd(this.x,this.y)};
l.equals=function(a){return a instanceof Hd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Id(a,b){this.width=a;this.height=b}
l=Id.prototype;l.clone=function(){return new Id(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Jd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Kd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ld(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Md(a){var b=Nd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Od(){var a=[];Md(function(b){a.push(b)});
return a}
var Nd={Nc:"allow-forms",Oc:"allow-modals",Pc:"allow-orientation-lock",Qc:"allow-pointer-lock",Rc:"allow-popups",Sc:"allow-popups-to-escape-sandbox",Tc:"allow-presentation",Uc:"allow-same-origin",Vc:"allow-scripts",Wc:"allow-top-navigation",Xc:"allow-top-navigation-by-user-activation"},Pd=cb(function(){return Od()});
function Qd(){var a=Rd(),b={};eb(Pd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Rd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Sd(a){this.isValid=a}
function Td(a){return new Sd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Xd=[Td("data"),Td("http"),Td("https"),Td("mailto"),Td("ftp"),new Sd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Yd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Zd=(new Date).getTime();function $d(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var ae="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");fa(ae);function be(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(u){for(var y=g,v=0;64>v;v+=4)y[v/4]=u[v]<<24|u[v+1]<<16|u[v+2]<<8|u[v+3];for(v=16;80>v;v++)u=y[v-3]^y[v-8]^y[v-14]^y[v-16],y[v]=(u<<1|u>>>31)&4294967295;u=e[0];var E=e[1],F=e[2],H=e[3],R=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var O=H^E&(F^H);var S=1518500249}else O=E^F^H,S=1859775393;else 60>v?(O=E&F|H&(E|F),S=2400959708):(O=E^F^H,S=3395469782);O=((u<<5|u>>>27)&4294967295)+O+R+S+y[v]&4294967295;R=H;H=F;F=(E<<30|E>>>2)&4294967295;E=u;u=O}e[0]=e[0]+u&4294967295;e[1]=e[1]+E&4294967295;e[2]=
e[2]+F&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+R&4294967295}
function c(u,y){if("string"===typeof u){u=unescape(encodeURIComponent(u));for(var v=[],E=0,F=u.length;E<F;++E)v.push(u.charCodeAt(E));u=v}y||(y=u.length);v=0;if(0==m)for(;v+64<y;)b(u.slice(v,v+64)),v+=64,p+=64;for(;v<y;)if(f[m++]=u[v++],p++,64==m)for(m=0,b(f);v+64<y;)b(u.slice(v,v+64)),v+=64,p+=64}
function d(){var u=[],y=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var v=63;56<=v;v--)f[v]=y&255,y>>>=8;b(f);for(v=y=0;5>v;v++)for(var E=24;0<=E;E-=8)u[y++]=e[v]>>E&255;return u}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,p;a();return{reset:a,update:c,digest:d,Qb:function(){for(var u=d(),y="",v=0;v<u.length;v++)y+="0123456789ABCDEF".charAt(Math.floor(u[v]/16))+"0123456789ABCDEF".charAt(u[v]%16);return y}}}
;function ce(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,de($d(d),a,c||null)].join(" "):null}
function de(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),ee(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=ee(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ee(a){var b=be();b.update(a);return b.Qb().toLowerCase()}
;var fe={};function ge(a){this.i=a||{cookie:""}}
l=ge.prototype;l.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Na:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.up;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Na}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Jb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Na:0,path:b,domain:c});return d};
l.Xa=function(){return he(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=he(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function he(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Jb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ie=new ge("undefined"==typeof document?null:document);function je(a){return!!fe.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ke(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;je(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new ge(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");je(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function le(a,b,c,d){(a=x[a])||(a=(new ge(document)).get(b));return a?ce(a,c,d):null}
function me(a){var b=void 0===b?!1:b;var c=$d(String(x.location.href)),d=[];if(ke(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new ge(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?ce(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&je(b)&&((b=le("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=le("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ne(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function oe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?oe.apply(null,d):ne(d)}}
;function J(){this.D=this.D;this.s=this.s}
J.prototype.D=!1;J.prototype.i=function(){return this.D};
J.prototype.dispose=function(){this.D||(this.D=!0,this.I())};
function pe(a,b){a.D?b():(a.s||(a.s=[]),a.s.push(b))}
J.prototype.I=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function qe(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
qe.prototype.stopPropagation=function(){this.l=!0};
qe.prototype.preventDefault=function(){this.defaultPrevented=!0};function re(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=se(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,te[c])c=te[c];else{c=String(c);if(!te[c]){var f=/function\s+([^\(]+)/m.exec(c);te[c]=f?f[1]:"[Anonymous]"}c=te[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function se(a,b){b||(b={});b[ue(a)]=!0;var c=a.stack||"";(a=a.Nb)&&!b[ue(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=se(a,b));return c}
function ue(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var te={};var ve=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",function(){},b),x.removeEventListener("test",function(){},b)}catch(c){}return a}();function we(a,b){qe.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Ya(we,qe);var xe={2:"touch",3:"pen",4:"mouse"};
we.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(uc){a:{try{qc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:xe[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&we.Y.preventDefault.call(this)};
we.prototype.stopPropagation=function(){we.Y.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
we.prototype.preventDefault=function(){we.Y.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ye="closure_listenable_"+(1E6*Math.random()|0);var ze=0;function Ae(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ka=e;this.key=++ze;this.wa=this.Ga=!1}
function Be(a){a.wa=!0;a.listener=null;a.proxy=null;a.src=null;a.Ka=null}
;function Ce(a){this.src=a;this.listeners={};this.i=0}
Ce.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=De(a,b,d,e);-1<g?(b=a[g],c||(b.Ga=!1)):(b=new Ae(b,this.src,f,!!d,e),b.Ga=c,a.push(b));return b};
Ce.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=De(e,b,c,d);return-1<b?(Be(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Ee(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(Be(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function De(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.wa&&f.listener==b&&f.capture==!!c&&f.Ka==d)return e}return-1}
;var Fe="closure_lm_"+(1E6*Math.random()|0),Ge={},He=0;function Ie(a,b,c,d,e){if(d&&d.once)Je(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ie(a,b[f],c,d,e);else c=Ke(c),a&&a[ye]?a.U(b,c,Qa(d)?!!d.capture:!!d,e):Le(a,b,c,!1,d,e)}
function Le(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Me(a);h||(a[Fe]=h=new Ce(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ne();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ve||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Oe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");He++}}
function Ne(){function a(c){return b.call(a.src,a.listener,c)}
var b=Pe;return a}
function Je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Ke(c),a&&a[ye]?a.m.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Le(a,b,c,!0,d,e)}
function Qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Ke(c),a&&a[ye])?a.m.remove(String(b),c,d,e):a&&(a=Me(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=De(b,c,d,e)),(c=-1<a?b[a]:null)&&Re(c))}
function Re(a){if("number"!==typeof a&&a&&!a.wa){var b=a.src;if(b&&b[ye])Ee(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Oe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);He--;(c=Me(b))?(Ee(c,a),0==c.i&&(c.src=null,b[Fe]=null)):Be(a)}}}
function Oe(a){return a in Ge?Ge[a]:Ge[a]="on"+a}
function Pe(a,b){if(a.wa)a=!0;else{b=new we(b,this);var c=a.listener,d=a.Ka||a.src;a.Ga&&Re(a);a=c.call(d,b)}return a}
function Me(a){a=a[Fe];return a instanceof Ce?a:null}
var Se="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ke(a){if("function"===typeof a)return a;a[Se]||(a[Se]=function(b){return a.handleEvent(b)});
return a[Se]}
;function Te(){J.call(this);this.m=new Ce(this);this.W=this;this.L=null}
Ya(Te,J);Te.prototype[ye]=!0;Te.prototype.addEventListener=function(a,b,c,d){Ie(this,a,b,c,d)};
Te.prototype.removeEventListener=function(a,b,c,d){Qe(this,a,b,c,d)};
function Ue(a,b){var c=a.L;if(c){var d=[];for(var e=1;c;c=c.L)d.push(c),++e}a=a.W;c=b.type||b;"string"===typeof b?b=new qe(b,a):b instanceof qe?b.target=b.target||a:(e=b,b=new qe(c,a),xb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=Ve(g,c,!0,b)&&e}b.l||(g=b.i=a,e=Ve(g,c,!0,b)&&e,b.l||(e=Ve(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=Ve(g,c,!1,b)&&e}
Te.prototype.I=function(){Te.Y.I.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Be(d[e]);delete a.listeners[c];a.i--}}this.L=null};
Te.prototype.U=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function Ve(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.wa&&g.capture==c){var h=g.listener,k=g.Ka||g.src;g.Ga&&Ee(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function We(a){Te.call(this);var b=this;this.A=this.l=0;this.T=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
S:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return w(function(e){return t(e,Xe(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Ye(this)}
r(We,Te);function Ze(){var a=$e;We.i||(We.i=new We(a));return We.i}
We.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.T.S(this.A);delete We.i};
We.prototype.H=function(){return this.j};
function Ye(a){a.A=a.T.M(function(){var b;return w(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):t(c,Xe(a),3):t(c,Xe(a),3);Ye(a);c.i=0})},3E4)}
function Xe(a,b){return a.v?a.v:a.v=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.l=a.T.M(function(){d.abort()},b||2E4)),t(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:za(h);a.v=void 0;a.l&&(a.T.S(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?Ue(a,"networkstatus-online"):Ue(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:ya(h),g=!1,h.u(3)}})})}
;var af={Qg:"EMBEDDED_PLAYER_MODE_UNKNOWN",Ng:"EMBEDDED_PLAYER_MODE_DEFAULT",Pg:"EMBEDDED_PLAYER_MODE_PFP",Og:"EMBEDDED_PLAYER_MODE_PFL"},bf={No:"WEB_DISPLAY_MODE_UNKNOWN",Jo:"WEB_DISPLAY_MODE_BROWSER",Lo:"WEB_DISPLAY_MODE_MINIMAL_UI",Mo:"WEB_DISPLAY_MODE_STANDALONE",Ko:"WEB_DISPLAY_MODE_FULLSCREEN"};function cf(){this.data_=[];this.i=-1}
cf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
cf.prototype.get=function(a){return!!this.data_[a]};
function df(a){-1===a.i&&(a.i=hb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function ef(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
ef.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function ff(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var gf;function hf(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var e=Kd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.lb;c.lb=null;e()}};
return function(e){d.next={lb:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function jf(){this.j=this.i=null}
jf.prototype.add=function(a,b){var c=kf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
jf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var kf=new ef(function(){return new lf},function(a){return a.reset()});
function lf(){this.next=this.scope=this.i=null}
lf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
lf.prototype.reset=function(){this.next=this.scope=this.i=null};function mf(a,b){nf||of();pf||(nf(),pf=!0);qf.add(a,b)}
var nf;function of(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);nf=function(){a.then(rf)}}else nf=function(){var b=rf;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!B("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(gf||(gf=hf()),gf(b)):x.setImmediate(b)}}
var pf=!1,qf=new jf;function rf(){for(var a;a=qf.remove();){try{a.i.call(a.scope)}catch(b){bd(b)}ff(kf,a)}pf=!1}
;function sf(a,b){this.i=a[x.Symbol.iterator]();this.j=b}
sf.prototype[Symbol.iterator]=function(){return this};
sf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function tf(a,b){return new sf(a,b)}
;function uf(){this.blockSize=-1}
;function vf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.s=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Ya(vf,uf);vf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function wf(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
vf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.s,f=this.j;d<b;){if(0==f)for(;d<=c;)wf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){wf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){wf(this,e);f=0;break}}this.j=f;this.m+=b}};
vf.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.s[c]=b&255,b/=256;wf(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function xf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function yf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function zf(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:xf(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function Af(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):zf(a,"inverted-hdpi")&&yf(a,Array.prototype.filter.call(a.classList?a.classList:xf(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Bf(){}
Bf.prototype.next=function(){return Cf};
var Cf={done:!0,value:void 0};function Df(a){return{value:a,done:!1}}
Bf.prototype.X=function(){return this};function Ef(a){if(a instanceof Ff||a instanceof Gf||a instanceof Hf)return a;if("function"==typeof a.next)return new Ff(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ff(function(){return a[Symbol.iterator]()});
if("function"==typeof a.X)return new Ff(function(){return a.X()});
throw Error("Not an iterator or iterable.");}
function Ff(a){this.j=a}
Ff.prototype.X=function(){return new Gf(this.j())};
Ff.prototype[Symbol.iterator]=function(){return new Hf(this.j())};
Ff.prototype.i=function(){return new Hf(this.j())};
function Gf(a){this.j=a}
r(Gf,Bf);Gf.prototype.next=function(){return this.j.next()};
Gf.prototype[Symbol.iterator]=function(){return new Hf(this.j)};
Gf.prototype.i=function(){return new Hf(this.j)};
function Hf(a){Ff.call(this,function(){return a});
this.l=a}
r(Hf,Ff);Hf.prototype.next=function(){return this.l.next()};function If(a,b){this.j={};this.i=[];this.ga=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof If)for(c=a.Xa(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=If.prototype;l.Xa=function(){Jf(this);return this.i.concat()};
l.has=function(a){return Kf(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Lf;Jf(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Lf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.ga=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Kf(this.j,a)?(delete this.j[a],--this.size,this.ga++,this.i.length>2*this.size&&Jf(this),!0):!1};
function Jf(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Kf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Kf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return Kf(this.j,a)?this.j[a]:b};
l.set=function(a,b){Kf(this.j,a)||(this.size+=1,this.i.push(a),this.ga++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.Xa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new If(this)};
l.keys=function(){return Ef(this.X(!0)).i()};
l.values=function(){return Ef(this.X(!1)).i()};
l.entries=function(){var a=this;return tf(this.keys(),function(b){return[b,a.get(b)]})};
l.X=function(a){Jf(this);var b=0,c=this.ga,d=this,e=new Bf;e.next=function(){if(c!=d.ga)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return Cf;var f=d.i[b++];return Df(a?f:d.j[f])};
return e};
function Kf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Mf(a){var b=[];Nf(new Qf,a,b);return b.join("")}
function Qf(){}
function Nf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Nf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Rf(d,c),c.push(":"),Nf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Rf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Sf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Tf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Rf(a,b){b.push('"',a.replace(Tf,function(c){var d=Sf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Sf[c]=d);return d}),'"')}
;function Uf(a){this.i=0;this.D=void 0;this.m=this.j=this.l=null;this.s=this.o=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){Vf(b,2,c)},function(c){Vf(b,3,c)})}catch(c){Vf(this,3,c)}}
function Wf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Wf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Xf=new ef(function(){return new Wf},function(a){a.reset()});
function Yf(a,b,c){var d=Xf.get();d.j=a;d.onRejected=b;d.context=c;return d}
function Zf(a){return new Uf(function(b,c){c(a)})}
Uf.prototype.then=function(a,b,c){return $f(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Uf.prototype.$goog_Thenable=!0;function ag(a,b){return $f(a,null,b)}
Uf.prototype.cancel=function(a){if(0==this.i){var b=new bg(a);mf(function(){cg(this,b)},this)}};
function cg(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?cg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):dg(c),eg(c,e,3,b)))}a.l=null}else Vf(a,3,b)}
function fg(a,b){a.j||2!=a.i&&3!=a.i||gg(a);a.m?a.m.next=b:a.j=b;a.m=b}
function $f(a,b,c,d){var e=Yf(null,null,null);e.i=new Uf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof bg?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;fg(a,e);return e.i}
Uf.prototype.A=function(a){this.i=0;Vf(this,2,a)};
Uf.prototype.L=function(a){this.i=0;Vf(this,3,a)};
function Vf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.A,f=a.L;if(d instanceof Uf){fg(d,Yf(e||bb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){hg(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.D=c,a.i=b,a.l=null,gg(a),3!=b||c instanceof bg||ig(a,c))}}
function hg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function gg(a){a.o||(a.o=!0,mf(a.v,a))}
function dg(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
Uf.prototype.v=function(){for(var a;a=dg(this);)eg(this,a,this.i,this.D);this.o=!1};
function eg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.s;a=a.l)a.s=!1;if(b.i)b.i.l=null,jg(b,c,d);else try{b.l?b.j.call(b.context):jg(b,c,d)}catch(e){kg.call(null,e)}ff(Xf,b)}
function jg(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ig(a,b){a.s=!0;mf(function(){a.s&&kg.call(null,b)})}
var kg=bd;function bg(a){$a.call(this,a)}
Ya(bg,$a);bg.prototype.name="cancel";function K(a){J.call(this);this.v=1;this.m=[];this.o=0;this.j=[];this.l={};this.A=!!a}
Ya(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.v;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.v=e+3;d.push(e);return e};
function lg(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ra(b)}}
l.ra=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&jb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.ha=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];mg(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.ra(c)}}return 0!=e}return!1};
function mg(a,b,c){mf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.ra,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.I=function(){K.Y.I.call(this);this.clear();this.m.length=0};function ng(a){this.i=a}
ng.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,Mf(b))};
ng.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ng.prototype.remove=function(a){this.i.remove(a)};function og(a){this.i=a}
Ya(og,ng);function pg(a){this.data=a}
function qg(a){return void 0===a||a instanceof pg?a:new pg(a)}
og.prototype.set=function(a,b){og.Y.set.call(this,a,qg(b))};
og.prototype.j=function(a){a=og.Y.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
og.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function rg(a){this.i=a}
Ya(rg,og);rg.prototype.set=function(a,b,c){if(b=qg(b)){if(c){if(c<Date.now()){rg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}rg.Y.set.call(this,a,b)};
rg.prototype.j=function(a){var b=rg.Y.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())rg.prototype.remove.call(this,a);else return b}};function sg(){}
;function tg(){}
Ya(tg,sg);tg.prototype[Symbol.iterator]=function(){return Ef(this.X(!0)).i()};
tg.prototype.clear=function(){var a=Array.from(this);a=q(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ug(a){this.i=a}
Ya(ug,tg);l=ug.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.X=function(a){var b=0,c=this.i,d=new Bf;d.next=function(){if(b>=c.length)return Cf;var e=c.key(b++);if(a)return Df(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Df(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function vg(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Ya(vg,ug);function wg(a,b){this.j=a;this.i=null;var c;if(c=sc)c=!(9<=Number(Fc));if(c){xg||(xg=new If);this.i=xg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),xg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Ya(wg,tg);var yg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xg=null;function zg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return yg[b]})}
l=wg.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(zg(a),b);Ag(this)};
l.get=function(a){a=this.i.getAttribute(zg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(zg(a));Ag(this)};
l.X=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Bf;d.next=function(){if(b>=c.length)return Cf;var e=c[b++];if(a)return Df(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Df(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ag(this)};
function Ag(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Bg(a,b){this.j=a;this.i=b+"::"}
Ya(Bg,tg);Bg.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Bg.prototype.get=function(a){return this.j.get(this.i+a)};
Bg.prototype.remove=function(a){this.j.remove(this.i+a)};
Bg.prototype.X=function(a){var b=this.j[Symbol.iterator](),c=this,d=new Bf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return Df(a?e.slice(c.i.length):c.j.get(e))};
return d};function Cg(a){I.call(this,a)}
r(Cg,I);Cg.prototype.getKey=function(){return id(this,1)};
Cg.prototype.getValue=function(){return id(this,2===ld(this,Dg)?2:-1)};
Cg.prototype.setValue=function(a){return kd(this,2,Dg,a)};
var Dg=[2,3,4,5,6];function Eg(a){I.call(this,a)}
r(Eg,I);function Fg(a){I.call(this,a)}
r(Fg,I);function Gg(a){I.call(this,a,-1,Hg)}
r(Gg,I);Gg.prototype.getPlayerType=function(){return id(this,36)};
Gg.prototype.setHomeGroupInfo=function(a){return D(this,81,a)};
var Hg=[9,66,24,32,86,100,101];function Ig(a){I.call(this,a,-1,Jg)}
r(Ig,I);var Jg=[15,26,28];function Kg(a){I.call(this,a)}
r(Kg,I);Kg.prototype.setToken=function(a){return C(this,2,a)};function Lg(a){I.call(this,a,-1,Mg)}
r(Lg,I);Lg.prototype.setSafetyMode=function(a){return C(this,5,a)};
var Mg=[12];function Ng(a){I.call(this,a,-1,Og)}
r(Ng,I);var Og=[12];function Pg(a){I.call(this,a,-1,Qg)}
r(Pg,I);function Rg(a){I.call(this,a)}
r(Rg,I);Rg.prototype.getKey=function(){return qd(this,1)};
Rg.prototype.getValue=function(){return qd(this,2)};
Rg.prototype.setValue=function(a){return C(this,2,a)};
var Qg=[4,5];function Sg(a){I.call(this,a)}
r(Sg,I);function Tg(a){I.call(this,a)}
r(Tg,I);var Ug=[2,3,4];function Vg(a){I.call(this,a)}
r(Vg,I);Vg.prototype.getMessage=function(){return qd(this,1)};function Wg(a){I.call(this,a)}
r(Wg,I);function Xg(a){I.call(this,a)}
r(Xg,I);function Yg(a){I.call(this,a,-1,Zg)}
r(Yg,I);var Zg=[10,17];function $g(a){I.call(this,a)}
r($g,I);function ah(a){I.call(this,a)}
r(ah,I);ah.prototype.P=function(a){C(this,1,a)};function bh(a){I.call(this,a)}
r(bh,I);function ch(a){I.call(this,a)}
r(ch,I);function dh(a){I.call(this,a)}
r(dh,I);function eh(a,b){D(a,1,b)}
dh.prototype.P=function(a){C(this,2,a)};
function fh(a){I.call(this,a)}
r(fh,I);function gh(a,b){D(a,1,b)}
;function hh(a){I.call(this,a,-1,ih)}
r(hh,I);hh.prototype.P=function(a){C(this,1,a)};
function jh(a,b){D(a,2,b)}
var ih=[3];function kh(a){I.call(this,a)}
r(kh,I);kh.prototype.P=function(a){C(this,1,a)};function lh(a){I.call(this,a)}
r(lh,I);lh.prototype.P=function(a){C(this,1,a)};function mh(a){I.call(this,a)}
r(mh,I);mh.prototype.P=function(a){C(this,1,a)};function nh(a){I.call(this,a)}
r(nh,I);function oh(a){I.call(this,a)}
r(oh,I);function ph(a){I.call(this,a,-1,qh)}
r(ph,I);function rh(a,b){return C(a,1,b)}
ph.prototype.getPlayerType=function(){var a=id(this,7);return null==a?0:a};
ph.prototype.setVideoId=function(a){return C(this,19,a)};
function sh(a,b){return C(a,25,b)}
function th(a,b){pd(a,68,uh,b)}
function uh(a){I.call(this,a)}
r(uh,I);uh.prototype.getId=function(){return qd(this,2)};
var qh=[83,68];function vh(a){I.call(this,a)}
r(vh,I);function wh(a){I.call(this,a)}
r(wh,I);function xh(a){I.call(this,a)}
r(xh,I);function yh(a){I.call(this,a,432)}
r(yh,I);
var zh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];var Ah={Mh:0,xh:1,Dh:2,Eh:4,Jh:8,Fh:16,Gh:32,Lh:64,Kh:128,zh:256,Bh:512,Ih:1024,Ah:2048,Ch:4096,yh:8192,Hh:16384};function Bh(a){I.call(this,a)}
r(Bh,I);function Ch(a){I.call(this,a)}
r(Ch,I);Ch.prototype.setVideoId=function(a){return kd(this,1,Dh,a)};
Ch.prototype.getPlaylistId=function(){return id(this,2===ld(this,Dh)?2:-1)};
var Dh=[1,2];function Eh(a){I.call(this,a,-1,Fh)}
r(Eh,I);var Fh=[3];function Gh(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Hh=x.window,Ih,Jh,Kh=(null==Hh?void 0:null==(Ih=Hh.yt)?void 0:Ih.config_)||(null==Hh?void 0:null==(Jh=Hh.ytcfg)?void 0:Jh.data_)||{};z("yt.config_",Kh);function Lh(){Gh(Kh,arguments)}
function L(a,b){return a in Kh?Kh[a]:b}
function Mh(){var a=Kh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Nh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Oh(a,b){a=Nh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ph(){return L("EXPERIMENTS_TOKEN","")}
function Nh(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function Qh(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Rh=[];function Sh(a){Rh.forEach(function(b){return b(a)})}
function Th(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Uh(b)}}:a}
function Uh(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Lh("ERRORS",e));Sh(a)}
function Vh(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Lh("ERRORS",e))}
;function Wh(){var a=Xh;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Yh(a){z("yt.ads.biscotti.lastId_",a)}
;var Zh=/^[\w.]*$/,$h={q:!0,search_query:!0};function ai(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=bi(f[0]||""),h=bi(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(u){var k=u,m=f[0],p=String(ai);k.args=[{key:m,value:f[1],query:a,method:ci==p?"unchanged":p}];$h.hasOwnProperty(m)||Vh(k)}}return c}
var ci=String(ai);function di(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ei(a){"?"==a.charAt(0)&&(a=a.substr(1));return ai(a,"&")}
function fi(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ei(1<a.length?a[1]:a[0])):{}}
function gi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ei(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return gc(a,e)+d}
function hi(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)==d&&(Number(bc(4,b))||null)==(Number(bc(4,a))||null):!0;return a}
function bi(a){return a&&a.match(Zh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ii(a){var b=ji;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Zd;e.flash="0";a:{try{var f=b.i.top.location.href}catch(ua){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ad:g;try{var h=g.history.length}catch(ua){h=0}e.u_his=h;var k;e.u_h=null==(k=Ad.screen)?void 0:k.height;var m;e.u_w=null==(m=Ad.screen)?void 0:m.width;var p;e.u_ah=null==(p=Ad.screen)?void 0:p.availHeight;var u;e.u_aw=
null==(u=Ad.screen)?void 0:u.availWidth;var y;e.u_cd=null==(y=Ad.screen)?void 0:y.colorDepth}catch(ua){}h=b.i;try{var v=h.screenX;var E=h.screenY}catch(ua){}try{var F=h.outerWidth;var H=h.outerHeight}catch(ua){}try{var R=h.innerWidth;var O=h.innerHeight}catch(ua){}try{var S=h.screenLeft;var ja=h.screenTop}catch(ua){}try{R=h.innerWidth,O=h.innerHeight}catch(ua){}try{var N=h.screen.availWidth;var Ba=h.screen.availTop}catch(ua){}v=[S,ja,v,E,N,Ba,F,H,R,O];try{var Na=(b.i.top||window).document,va="CSS1Compat"==
Na.compatMode?Na.documentElement:Na.body;var G=(new Id(va.clientWidth,va.clientHeight)).round()}catch(ua){G=new Id(-12245933,-12245933)}Na=G;G={};var Ca=void 0===Ca?x:Ca;va=new cf;Ca.SVGElement&&Ca.document.createElementNS&&va.set(0);E=Qd();E["allow-top-navigation-by-user-activation"]&&va.set(1);E["allow-popups-to-escape-sandbox"]&&va.set(2);Ca.crypto&&Ca.crypto.subtle&&va.set(3);Ca.TextDecoder&&Ca.TextEncoder&&va.set(4);Ca=df(va);G.bc=Ca;G.bih=Na.height;G.biw=Na.width;G.brdim=v.join();b=b.j;b=(G.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,G.wgl=!!Ad.WebGLRenderingContext,G);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ji=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return di(ii(a))});Date.now();var ki="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function li(){if(!ki)return null;var a=ki();return"open"in a?a:null}
function mi(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ni(a,b){"function"===typeof a&&(a=Th(a));return window.setTimeout(a,b)}
function oi(a){window.clearTimeout(a)}
;var pi={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},qi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa(ae)),ri=!1;
function si(a,b){b=void 0===b?{}:b;var c=hi(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in pi){var f=L(pi[e]);M("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=L("VISITOR_DATA"));!f||!c&&cc(a)||d&&void 0!==b[e]||!M("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!cc(a))b["X-YouTube-Ad-Signals"]=di(ii());return b}
function ti(a){var b=window.location.search,c=cc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!hi(a)||(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ei(b),f={};eb(qi,function(g){e[g]&&(f[g]=e[g])});
return gi(a,f||{},!1)}
function ui(a,b){var c=b.format||"JSON";a=vi(a,b);var d=Ri(a,b),e=!1,f=Si(a,function(k){if(!e){e=!0;h&&oi(h);var m=mi(k),p=null,u=400<=k.status&&500>k.status,y=500<=k.status&&600>k.status;if(m||u||y)p=Ti(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(p&&p.return_code,10);break a;case "RAW":m=!0;break a}m=!!p}p=p||{};u=b.context||x;m?b.onSuccess&&b.onSuccess.call(u,k,p):b.onError&&b.onError.call(u,k,p);b.onFinish&&b.onFinish.call(u,k,p)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=ni(function(){e||(e=!0,f.abort(),oi(h),g.call(b.context||x,f))},d)}return f}
function vi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=gi(a,b||{},!0);return a}
function Ri(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ei(e),xb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):fc(e));f=e||f&&!ob(f);!ri&&f&&"POST"!=b.method&&(ri=
!0,Uh(Error("AJAX request with postData should use POST")));return e}
function Ti(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Vh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ui(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Vi(g)})}d&&Wi(e);
return e}
function Wi(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Cb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=zb();d=e?e.createHTML(d):d;a[c]=new Tb(d)}else Wi(a[b])}}
function Ui(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Vi(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Si(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Th(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=li();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=ti(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=si(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Xi(a){var b=this;this.i=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c})}
function Yi(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Zi(a,b,c,d,e){ie.set(""+a,b,{Na:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function $i(a){return ie.get(""+a,void 0)}
function aj(){if(!ie.isEnabled())return!1;if(!ie.isEmpty())return!0;ie.set("TESTCOOKIESENABLED","1",{Na:60});if("1"!==ie.get("TESTCOOKIESENABLED"))return!1;ie.remove("TESTCOOKIESENABLED");return!0}
;var bj=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",bj);function cj(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=$i(this.i);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(bj[d]=c.toString())}}}
cj.prototype.get=function(a,b){dj(a);ej(a);a=void 0!==bj[a]?bj[a].toString():null;return null!=a?a:b?b:""};
cj.prototype.set=function(a,b){dj(a);ej(a);if(null==b)throw Error("ExpectedNotNull");bj[a]=b.toString()};
function fj(a){return!!((gj("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
cj.prototype.remove=function(a){dj(a);ej(a);delete bj[a]};
cj.prototype.clear=function(){for(var a in bj)delete bj[a]};
function ej(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function dj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function gj(a){a=void 0!==bj[a]?bj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ma(cj);var hj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ij={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},jj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},kj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function lj(){var a=x.navigator;return a?a.connection:void 0}
function mj(){var a=lj();if(a){var b=hj[a.type||"unknown"]||"CONN_UNKNOWN";a=hj[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function nj(){var a=lj();if(null!=a&&a.effectiveType)return kj.hasOwnProperty(a.effectiveType)?kj[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function oj(){return"INNERTUBE_API_KEY"in Kh&&"INNERTUBE_API_VERSION"in Kh}
function pj(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),Za:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ub:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ub:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),wb:L("INNERTUBE_CONTEXT_HL"),vb:L("INNERTUBE_CONTEXT_GL"),Vb:L("INNERTUBE_HOST_OVERRIDE")||"",Xb:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Wb:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function qj(a){var b={client:{hl:a.wb,gl:a.vb,clientName:a.ub,clientVersion:a.innertubeContextClientVersion,configInfo:a.Za}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Ph();""!==c&&(b.client.experimentsToken=c);c=Qh();0<c.length&&(b.request={internalExperimentFlags:c});rj(a,void 0,b);sj(void 0,b);tj(a,void 0,b);uj(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=q(Object.entries(ei(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=q(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function vj(a){var b=new Ng,c=new Gg;C(c,1,a.wb);C(c,2,a.vb);C(c,16,a.Ub);C(c,17,a.innertubeContextClientVersion);if(a.Za){var d=a.Za,e=new Eg;d.coldConfigData&&C(e,1,d.coldConfigData);d.appInstallData&&C(e,6,d.appInstallData);d.coldHashData&&C(e,3,d.coldHashData);d.hotHashData&&C(e,5,d.hotHashData);D(c,62,e)}(d=x.devicePixelRatio)&&1!=d&&C(c,65,d);d=Ph();""!==d&&C(c,54,d);d=Qh();if(0<d.length){e=new Ig;for(var f=0;f<d.length;f++){var g=new Cg;C(g,1,d[f].key);g.setValue(d[f].value);pd(e,15,Cg,g)}D(b,
5,e)}rj(a,c);sj(c);tj(a,c);uj(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Lg,C(a,3,L("DELEGATED_SESSION_ID")));a=q(Object.entries(ei(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=q(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?C(c,12,e):"cmodel"===d?C(c,13,e):"cbr"===d?C(c,87,e):"cbrver"===d?C(c,88,e):"cos"===d?C(c,18,e):"cosver"===d?C(c,19,e):"cplatform"===d&&C(c,42,e);D(b,1,c);return b}
function rj(a,b,c){a=a.ub;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=md(b,Fg,96)||new Fg;var d=Yi();d=Object.keys(bf).indexOf(d);d=-1===d?null:d;null!==d&&C(c,3,d);D(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Yi())}
function sj(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?C(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function tj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=md(b,Eg,62))?d:new Eg;C(c,6,a.appInstallData);D(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function uj(a,b){var c=mj();c&&(a?C(a,61,ij[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=nj())&&(a?C(a,94,jj[c]):b&&(b.client.effectiveConnectionType=c))}
function wj(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.cp||L("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().bp:b=me([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function xj(a){a=Object.assign({},a);delete a.Authorization;var b=me();if(b){var c=new vf;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=Lc(c.digest(),3)}return a}
;function yj(a){var b=new vg;(b=b.isAvailable()?a?new Bg(b,a):b:null)||(a=new wg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new rg(a):null;this.j=document.domain||window.location.hostname}
yj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Mf(b))}catch(f){return}else e=escape(b);Zi(a,e,c,this.j)};
yj.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=$i(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yj.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;ie.remove(""+a,"/",void 0===b?"youtube.com":b)};var zj=window,P=zj.ytcsi&&zj.ytcsi.now?zj.ytcsi.now:zj.performance&&zj.performance.timing&&zj.performance.now&&zj.performance.timing.navigationStart?function(){return zj.performance.timing.navigationStart+zj.performance.now()}:function(){return(new Date).getTime()};var Aj;function Bj(){Aj||(Aj=new yj("yt.innertube"));return Aj}
function Cj(a,b,c,d){if(d)return null;d=Bj().get("nextId",!0)||1;var e=Bj().get("requests",!0)||{};e[d]={method:a,request:b,authState:xj(c),requestTime:Math.round(P())};Bj().set("nextId",d+1,86400,!0);Bj().set("requests",e,86400,!0);return d}
function Dj(a){var b=Bj().get("requests",!0)||{};delete b[a];Bj().set("requests",b,86400,!0)}
function Ej(a){var b=Bj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=xj(wj(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Fj(a,d.method,e,{}));delete b[c]}}Bj().set("requests",b,86400,!0)}}
;function Gj(){}
function Hj(a,b){return Ij(a,0,b)}
Gj.prototype.M=function(a,b){return Ij(a,1,b)};
function Jj(a,b){Ij(a,2,b)}
function Kj(a){var b=A("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Lj(){Gj.apply(this,arguments)}
r(Lj,Gj);function Mj(){Lj.i||(Lj.i=new Lj);return Lj.i}
function Ij(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ni(a,c||0)}
Lj.prototype.S=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):oi(a)}};
Lj.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Lj.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};var $e=Mj();var Nj=Gc||Hc;function Oj(a){var b=Qb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Pj=function(){var a;return function(){a||(a=new yj("ytidb"));return a}}();
function Qj(){var a;return null==(a=Pj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Rj=[],Sj,Tj=!1;function Uj(){var a={};for(Sj=new Vj(void 0===a.handleError?Wj:a.handleError,void 0===a.logEvent?Xj:a.logEvent);0<Rj.length;)switch(a=Rj.shift(),a.type){case "ERROR":Sj.handleError(a.payload);break;case "EVENT":Sj.logEvent(a.eventType,a.payload)}}
function Yj(a){Tj||(Sj?Sj.handleError(a):(Rj.push({type:"ERROR",payload:a}),10<Rj.length&&Rj.shift()))}
function Zj(a,b){Tj||(Sj?Sj.logEvent(a,b):(Rj.push({type:"EVENT",eventType:a,payload:b}),10<Rj.length&&Rj.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
r(Q,Error);function ak(){try{return bk(),!0}catch(a){return!1}}
function bk(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function ck(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function dk(a){return a.substr(0,a.indexOf(":"))||a}
;var ek={},fk=(ek.AUTH_INVALID="No user identifier specified.",ek.EXPLICIT_ABORT="Transaction was explicitly aborted.",ek.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ek.MISSING_INDEX="Index not created.",ek.MISSING_OBJECT_STORES="Object stores not created.",ek.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ek.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",ek.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
ek.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ek.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ek.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ek.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ek),gk={},hk=(gk.AUTH_INVALID="ERROR",gk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",gk.EXPLICIT_ABORT="IGNORED",gk.IDB_NOT_SUPPORTED="ERROR",gk.MISSING_INDEX=
"WARNING",gk.MISSING_OBJECT_STORES="ERROR",gk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",gk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",gk.QUOTA_EXCEEDED="WARNING",gk.QUOTA_MAYBE_EXCEEDED="WARNING",gk.UNKNOWN_ABORT="WARNING",gk.INCOMPATIBLE_DB_VERSION="WARNING",gk),ik={},jk=(ik.AUTH_INVALID=!1,ik.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ik.EXPLICIT_ABORT=!1,ik.IDB_NOT_SUPPORTED=!1,ik.MISSING_INDEX=!1,ik.MISSING_OBJECT_STORES=!1,ik.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,ik.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,ik.QUOTA_EXCEEDED=!1,ik.QUOTA_MAYBE_EXCEEDED=!0,ik.UNKNOWN_ABORT=!0,ik.INCOMPATIBLE_DB_VERSION=!1,ik);function kk(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?fk[a]:c;d=void 0===d?hk[a]:d;e=void 0===e?jk[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,kk.prototype)}
r(kk,Q);function lk(a,b){kk.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},fk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,lk.prototype)}
r(lk,kk);function mk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,mk.prototype)}
r(mk,Error);var nk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function ok(a,b,c,d){b=dk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof kk)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new kk("QUOTA_EXCEEDED",a);if(Ic&&"UnknownError"===e.name)return new kk("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof mk)return new kk("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&nk.some(function(f){return e.message.includes(f)}))return new kk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new kk("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Ab:e.name})];e.level="WARNING";return e}
function pk(a,b,c){var d=Qj();return new kk("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function qk(a){if(!a)throw Error();throw a;}
function rk(a){return a}
function sk(a){this.i=a}
function tk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=q(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=q(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
tk.all=function(a){return new tk(new sk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ka:0};f.ka<a.length;f={ka:f.ka},++f.ka)uk(tk.resolve(a[f.ka]).then(function(g){return function(h){d[g.ka]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
tk.resolve=function(a){return new tk(new sk(function(b,c){a instanceof tk?a.then(b,c):b(a)}))};
tk.reject=function(a){return new tk(new sk(function(b,c){c(a)}))};
tk.prototype.then=function(a,b){var c=this,d=null!=a?a:rk,e=null!=b?b:qk;return new tk(new sk(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){vk(c,c,d,f,g)}),c.onRejected.push(function(){wk(c,c,e,f,g)})):"FULFILLED"===c.state.status?vk(c,c,d,f,g):"REJECTED"===c.state.status&&wk(c,c,e,f,g)}))};
function uk(a,b){a.then(void 0,b)}
function vk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof tk?xk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function wk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof tk?xk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function xk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof tk?xk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function yk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function zk(a){return new Promise(function(b,c){yk(a,b,c)})}
function Ak(a){return new tk(new sk(function(b,c){yk(a,b,c)}))}
;function Bk(a,b){return new tk(new sk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Ck(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Ck.prototype;l.add=function(a,b,c){return Dk(this,[a],{mode:"readwrite",O:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Dk(this,[a],{mode:"readwrite",O:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Dk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).count(b)})};
function Ek(a,b,c){a=a.i.createObjectStore(b,c);return new Fk(a)}
l.delete=function(a,b){return Dk(this,[a],{mode:"readwrite",O:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Dk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).get(b)})};
function Gk(a,b){return Dk(a,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(c){c=c.objectStore("LogsRequestsStore");return Ak(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Dk(a,b,c,d){var e,f,g,h,k,m,p,u,y,v,E,F;return w(function(H){switch(H.i){case 1:var R={mode:"readonly",O:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?R.mode=c:Object.assign(R,c);e=R;a.transactionCount++;f=e.O?3:1;g=0;case 2:if(h){H.u(3);break}g++;k=Math.round(P());wa(H,4);m=a.i.transaction(b,e.mode);R=new Hk(m);R=Ik(R,d);return t(H,R,6);case 6:return p=H.j,u=Math.round(P()),Jk(a,k,u,g,void 0,b.join(),e),H.return(p);case 4:y=ya(H);v=Math.round(P());E=ok(y,a.i.name,b.join(),a.i.version);
if((F=E instanceof kk&&!E.i)||g>=f)Jk(a,k,v,g,E,b.join(),e),h=E;H.u(2);break;case 3:return H.return(Promise.reject(h))}})}
function Jk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof kk&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Zj("QUOTA_EXCEEDED",{dbName:dk(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof kk&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),Zj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Kk(a,!1,d,f,b,g.tag),Yj(e)):Kk(a,!0,d,f,b,g.tag)}
function Kk(a,b,c,d,e,f){Zj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function Fk(a){this.i=a}
l=Fk.prototype;l.add=function(a,b){return Ak(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Ak(this.i.clear()).then(function(){})};
l.count=function(a){return Ak(this.i.count(a))};
function Lk(a,b){return Mk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Lk(this,a):Ak(this.i.delete(a))};
l.get=function(a){return Ak(this.i.get(a))};
l.index=function(a){try{return new Nk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new mk(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function Mk(a,b,c){a=a.i.openCursor(b.query,b.direction);return Ok(a).then(function(d){return Bk(d,c)})}
function Hk(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=kk;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Ik(a,b){var c=new Promise(function(d,e){try{uk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return q(d).next().value})}
Hk.prototype.abort=function(){this.i.abort();this.j=!0;throw new kk("EXPLICIT_ABORT");};
Hk.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Fk(a),this.l.set(a,b));return b};
function Nk(a){this.i=a}
l=Nk.prototype;l.count=function(a){return Ak(this.i.count(a))};
l.delete=function(a){return Pk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Ak(this.i.get(a))};
l.getKey=function(a){return Ak(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function Pk(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Ok(a).then(function(d){return Bk(d,c)})}
function Qk(a,b){this.request=a;this.cursor=b}
function Ok(a){return Ak(a).then(function(b){return b?new Qk(a,b):null})}
l=Qk.prototype;l.advance=function(a){this.cursor.advance(a);return Ok(this.request)};
l.continue=function(a){this.cursor.continue(a);return Ok(this.request)};
l.delete=function(){return Ak(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Ak(this.cursor.update(a))};function Rk(a,b,c){return new Promise(function(d,e){function f(){y||(y=new Ck(g.result,{closed:u}));return y}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.yc,p=c.upgrade,u=c.closed,y;g.addEventListener("upgradeneeded",function(v){try{if(null===v.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");v.dataLoss&&"none"!==v.dataLoss&&Zj("IDB_DATA_CORRUPTED",{reason:v.dataLossMessage||"unknown reason",dbName:dk(a)});var E=f(),F=new Hk(g.transaction);
p&&p(E,function(H){return v.oldVersion<H&&v.newVersion>=H},F);
F.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var v=g.result;k&&v.addEventListener("versionchange",function(){k(f())});
v.addEventListener("close",function(){Zj("IDB_UNEXPECTEDLY_CLOSED",{dbName:dk(a),dbVersion:v.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Sk(a,b,c){c=void 0===c?{}:c;return Rk(a,b,c)}
function Tk(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.i)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),t(g,zk(c),4);
if(2!=g.i)return xa(g,0);f=ya(g);throw ok(f,a,"",-1);})}
;function Uk(a){return new Promise(function(b){Jj(function(){b()},a)})}
function Vk(a,b){this.name=a;this.options=b;this.m=!0;this.o=this.s=0;this.j=500}
Vk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Sk(a,b,c)};
Vk.prototype.delete=function(a){a=void 0===a?{}:a;return Tk(this.name,a)};
function Wk(a,b){return new kk("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Xk(a,b){if(!b)throw pk("openWithToken",dk(a.name));return Yk(a)}
function Yk(a){function b(){var f,g,h,k,m,p,u,y,v,E;return w(function(F){switch(F.i){case 1:return g=null!=(f=Error().stack)?f:"",wa(F,2),t(F,a.l(a.name,a.options.version,d),4);case 4:h=F.j;for(var H=a.options,R=[],O=q(Object.keys(H.va)),S=O.next();!S.done;S=O.next()){S=S.value;var ja=H.va[S],N=void 0===ja.hc?Number.MAX_VALUE:ja.hc;!(h.i.version>=ja.Ua)||h.i.version>=N||h.i.objectStoreNames.contains(S)||R.push(S)}k=R;if(0===k.length){F.u(5);break}m=Object.keys(a.options.va);p=h.objectStoreNames();
if(a.o<Oh("ytidb_reopen_db_retries",0))return a.o++,h.close(),Yj(new kk("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:p})),F.return(b());if(!(a.s<Oh("ytidb_remake_db_retries",1))){F.u(6);break}a.s++;if(!M("ytidb_remake_db_enable_backoff_delay")){F.u(7);break}return t(F,Uk(a.j),8);case 8:a.j*=2;case 7:return t(F,a.delete(),9);case 9:return Yj(new kk("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:p})),F.return(b());
case 6:throw new lk(p,m);case 5:return F.return(h);case 2:u=ya(F);if(u instanceof DOMException?"VersionError"!==u.name:"DOMError"in self&&u instanceof DOMError?"VersionError"!==u.name:!(u instanceof Object&&"message"in u)||"An attempt was made to open a database using a lower version than the existing version."!==u.message){F.u(10);break}return t(F,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:y=F.j;v=y.i.version;if(void 0!==a.options.version&&v>a.options.version+1)throw y.close(),
a.m=!1,Wk(a,v);return F.return(y);case 10:throw c(),u instanceof Error&&!M("ytidb_async_stack_killswitch")&&(u.stack=u.stack+"\n"+g.substring(g.indexOf("\n")+1)),ok(u,a.name,"",null!=(E=a.options.version)?E:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw Wk(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,yc:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Zk=new Vk("YtIdbMeta",{va:{databases:{Ua:1}},upgrade:function(a,b){b(1)&&Ek(a,"databases",{keyPath:"actualName"})}});
function $k(a,b){var c;return w(function(d){if(1==d.i)return t(d,Xk(Zk,b),2);c=d.j;return d.return(Dk(c,["databases"],{O:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Ak(f.i.put(a,void 0)).then(function(){})})}))})}
function al(a,b){var c;return w(function(d){if(1==d.i)return a?t(d,Xk(Zk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function bl(a,b){var c,d;return w(function(e){return 1==e.i?(c=[],t(e,Xk(Zk,b),2)):3!=e.i?(d=e.j,t(e,Dk(d,["databases"],{O:!0,mode:"readonly"},function(f){c.length=0;return Mk(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function cl(a){return bl(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function dl(a,b,c){return bl(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function el(a){var b,c;return w(function(d){if(1==d.i)return b=bk("YtIdbMeta hasAnyMeta other"),t(d,bl(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var fl,gl=new function(){}(new function(){});
function hl(){var a,b,c,d;return w(function(e){switch(e.i){case 1:a=Qj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Nj)f=/WebKit\/([0-9]+)/.exec(Qb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Qb()),f=!(f&&602<=parseInt(f[1],10)));if(f||tc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return t(e,$k(d,gl),4);case 4:return t(e,al("yt-idb-test-do-not-use",gl),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function il(){if(void 0!==fl)return fl;Tj=!0;return fl=hl().then(function(a){Tj=!1;var b;if(null!=(b=Pj())&&b.i){var c;b={hasSucceededOnce:(null==(c=Qj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Pj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function jl(){return A("ytglobal.idbToken_")||void 0}
function kl(){var a=jl();return a?Promise.resolve(a):il().then(function(b){(b=b?gl:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var ll=0;function ml(a,b){ll||(ll=$e.M(function(){var c,d,e,f,g;return w(function(h){switch(h.i){case 1:return t(h,kl(),2);case 2:c=h.j;if(!c)return h.return();d=!0;wa(h,3);return t(h,dl(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return t(h,Tk(f.actualName),7);case 7:return t(h,al(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),Yj(g),d=!1;case 4:$e.S(ll),ll=0,d&&ml(a,b),h.i=0}})}))}
function nl(){var a;return w(function(b){return 1==b.i?t(b,kl(),2):(a=b.j)?b.return(el(a)):b.return(!1)})}
new yd;function ol(a){if(!ak())throw a=new kk("AUTH_INVALID",{dbName:a}),Yj(a),a;var b=bk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function pl(a,b,c,d){var e,f,g,h,k,m;return w(function(p){switch(p.i){case 1:return f=null!=(e=Error().stack)?e:"",t(p,kl(),2);case 2:g=p.j;if(!g)throw h=pk("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Yj(h),h;ck(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ol(a);wa(p,3);return t(p,$k(k,g),5);case 5:return t(p,Sk(k.actualName,b,d),6);case 6:return p.return(p.j);case 3:return m=ya(p),wa(p,7),t(p,al(k.actualName,g),9);case 9:xa(p,
8);break;case 7:ya(p);case 8:throw m;}})}
function ql(a,b,c){c=void 0===c?{}:c;return pl(a,b,!1,c)}
function rl(a,b,c){c=void 0===c?{}:c;return pl(a,b,!0,c)}
function sl(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.i)return t(e,kl(),2);if(3!=e.i){c=e.j;if(!c)return e.return();ck(a);d=ol(a);return t(e,Tk(d.actualName,b),3)}return t(e,al(d.actualName,c),0)})}
function tl(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.i?t(e,Tk(d.actualName,b),2):t(e,al(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ul(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.i)return t(d,kl(),2);if(3!=d.i){b=d.j;if(!b)return d.return();ck("LogsDatabaseV2");return t(d,cl(b),3)}c=d.j;return t(d,tl(c,a,b),0)})}
function vl(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.i)return t(d,kl(),2);if(3!=d.i){c=d.j;if(!c)return d.return();ck(a);return t(d,Tk(a,b),3)}return t(d,al(a,c),0)})}
;function wl(a){this.Fa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.na=function(){};
this.now=Date.now;this.ta=!1;var b;this.Hb=null!=(b=a.Hb)?b:100;var c;this.Fb=null!=(c=a.Fb)?c:1;var d;this.Db=null!=(d=a.Db)?d:2592E6;var e;this.Bb=null!=(e=a.Bb)?e:12E4;var f;this.Eb=null!=(f=a.Eb)?f:5E3;var g;this.C=null!=(g=a.C)?g:void 0;this.Ja=!!a.Ja;var h;this.Ia=null!=(h=a.Ia)?h:.1;var k;this.Pa=null!=(k=a.Pa)?k:10;a.handleError&&(this.handleError=a.handleError);a.na&&(this.na=a.na);a.ta&&(this.ta=a.ta);a.Fa&&(this.Fa=a.Fa);this.F=a.F;this.T=a.T;this.K=a.K;this.J=a.J;this.ba=a.ba;this.fb=
a.fb;this.eb=a.eb;xl(this)&&(!this.F||this.F("networkless_logging"))&&yl(this)}
function yl(a){xl(a)&&!a.ta&&(a.i=!0,a.Ja&&Math.random()<=a.Ia&&a.K.Ob(a.C),zl(a),a.J.H()&&a.ya(),a.J.U(a.fb,a.ya.bind(a)),a.J.U(a.eb,a.kb.bind(a)))}
l=wl.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(xl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.K.set(d,this.C).then(function(e){d.id=e;c.J.H()&&Al(c,d)}).catch(function(e){Al(c,d);
Bl(c,e)})}else this.ba(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(xl(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F&&this.F("nwl_skip_retry")&&(e.skipRetry=c);if(this.J.H()||this.F&&this.F("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.i)return t(k,d.K.set(e,d.C).catch(function(m){Bl(d,m)}),2);
f(g,h);k.i=0})}}this.ba(a,b,e.skipRetry)}else this.K.set(e,this.C).catch(function(g){d.ba(a,b,e.skipRetry);
Bl(d,g)})}else this.ba(a,b,this.F&&this.F("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(xl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.K.ma(d.id,c.C):e=!0;c.J.aa&&c.F&&c.F("vss_network_hint")&&c.J.aa(!0);f(g,h)};
this.ba(d.url,d.options);this.K.set(d,this.C).then(function(g){d.id=g;e&&c.K.ma(d.id,c.C)}).catch(function(g){Bl(c,g)})}else this.ba(a,b)};
l.ya=function(){var a=this;if(!xl(this))throw pk("throttleSend");this.j||(this.j=this.T.M(function(){var b;return w(function(c){if(1==c.i)return t(c,a.K.tb("NEW",a.C),2);if(3!=c.i)return b=c.j,b?t(c,Al(a,b),3):(a.kb(),c.return());a.j&&(a.j=0,a.ya());c.i=0})},this.Hb))};
l.kb=function(){this.T.S(this.j);this.j=0};
function Al(a,b){var c,d;return w(function(e){switch(e.i){case 1:if(!xl(a))throw c=pk("immediateSend"),c;if(void 0===b.id){e.u(2);break}return t(e,a.K.Yb(b.id,a.C),3);case 3:(d=e.j)?b=d:a.na(Error("The request cannot be found in the database."));case 2:if(Cl(a,b,a.Db)){e.u(4);break}a.na(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return t(e,a.K.ma(b.id,a.C),5);case 5:return e.return();case 4:b.skipRetry||(b=Dl(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return t(e,a.K.ma(b.id,a.C),8);case 8:a.ba(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Dl(a,b){if(!xl(a))throw pk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:g=El(f);if(!(a.F&&a.F("nwl_consider_error_code")&&g||a.F&&!a.F("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Pa)){m.u(2);break}if(!a.J.ca){m.u(3);break}return t(m,a.J.ca(),3);case 3:if(a.J.H()){m.u(2);break}c(e,f);if(!a.F||!a.F("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return t(m,a.K.gb(b.id,a.C,!1),6);case 6:return m.return();case 2:if(a.F&&a.F("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Pa)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.Fb?t(m,a.K.gb(b.id,a.C),12):t(m,a.K.ma(b.id,a.C),8);case 12:a.T.M(function(){a.J.H()&&a.ya()},a.Eb);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):t(h,a.K.ma(b.id,a.C),2);a.J.aa&&a.F&&a.F("vss_network_hint")&&a.J.aa(!0);d(e,f);h.i=0})};
return b}
function Cl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function zl(a){if(!xl(a))throw pk("retryQueuedRequests");a.K.tb("QUEUED",a.C).then(function(b){b&&!Cl(a,b,a.Bb)?a.T.M(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):t(c,a.K.gb(b.id,a.C),2);zl(a);c.i=0})}):a.J.H()&&a.ya()})}
function Bl(a,b){a.Jb&&!a.J.H()?a.Jb(b):a.handleError(b)}
function xl(a){return!!a.C||a.Fa}
function El(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Fl(a,b){this.version=a;this.args=b}
;function Gl(a,b){this.topic=a;this.i=b}
Gl.prototype.toString=function(){return this.topic};var Hl=A("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.ra;K.prototype.publish=K.prototype.ha;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",Hl);var Il=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Il);var Jl=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Jl);var Kl=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Kl);
z("ytPubsub2Pubsub2SkipSubKey",null);function Ll(a,b){var c=Ml();c&&c.publish.call(c,a.toString(),a,b)}
function Nl(a){var b=Ol,c=Ml();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Il[d])try{if(f&&b instanceof Gl&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ga){var m=new h;h.ga=m.version}var p=h.ga}catch(H){}if(!p||k.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{p=Reflect;var u=p.construct;
var y=k.args,v=y.length;if(0<v){var E=Array(v);for(k=0;k<v;k++)E[k]=y[k];var F=E}else F=[];f=u.call(p,h,F)}catch(H){throw H.message="yt.pubsub2.Data.deserialize(): "+H.message,H;}}catch(H){throw H.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+H.message,H;}a.call(window,f)}catch(H){Uh(H)}},Kl[b.toString()]?A("yt.scheduler.instance")?$e.M(g):ni(g,0):g())});
Il[d]=!0;Jl[b.toString()]||(Jl[b.toString()]=[]);Jl[b.toString()].push(d);return d}
function Pl(){var a=Ql,b=Nl(function(c){a.apply(void 0,arguments);Rl(b)});
return b}
function Rl(a){var b=Ml();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete Il[c]}))}
function Ml(){return A("ytPubsub2Pubsub2Instance")}
;function Sl(a,b){Vk.call(this,a,b);this.options=b;ck(a)}
r(Sl,Vk);function Tl(a,b){var c;return function(){c||(c=new Sl(a,b));return c}}
Sl.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.hb?rl:ql)(a,b,Object.assign({},c))};
Sl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.hb?vl:sl)(this.name,a)};
function Ul(a,b){return Tl(a,b)}
;var Vl;
function Wl(){if(Vl)return Vl();var a={};Vl=Ul("LogsDatabaseV2",{va:(a.LogsRequestsStore={Ua:2},a),hb:!1,upgrade:function(b,c,d){c(2)&&Ek(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return Vl()}
;function Xl(a){return Xk(Wl(),a)}
function Yl(a,b){var c,d,e,f;return w(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},t(g,Xl(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),t(g,Gk(d,e),3);f=g.j;c.zc=P();Zl(c);return g.return(f)})}
function $l(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},t(m,Xl(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,t(m,Dk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(p){return Pk(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(u){u.getValue()&&(k=u.getValue(),"NEW"===a&&(k.status="QUEUED",
u.update(k)))})}),3);
c.zc=P();Zl(c);return m.return(k)})}
function am(a,b){var c;return w(function(d){if(1==d.i)return t(d,Xl(b),2);c=d.j;return d.return(Dk(c,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Ak(f.i.put(g,void 0)).then(function(){return g})})}))})}
function bm(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.i)return t(e,Xl(b),2);d=e.j;return e.return(Dk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Ak(g.i.put(h,void 0)).then(function(){return h})):tk.resolve(void 0)})}))})}
function cm(a,b){var c;return w(function(d){if(1==d.i)return t(d,Xl(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function dm(a){var b,c;return w(function(d){if(1==d.i)return t(d,Xl(a),2);b=d.j;c=P()-2592E6;return t(d,Dk(b,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){return Mk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function em(){return w(function(a){return t(a,ul(),0)})}
function Zl(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Ll("nwl_transaction_latency_payload",a)}
;var fm={},gm=Ul("ServiceWorkerLogsDatabase",{va:(fm.SWHealthLog={Ua:1},fm),hb:!0,upgrade:function(a,b){b(1)&&Ek(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function hm(a){return Xk(gm(),a)}
function im(a){var b,c;return w(function(d){if(1==d.i)return t(d,hm(a),2);b=d.j;c=P()-2592E6;return t(d,Dk(b,["SWHealthLog"],{mode:"readwrite",O:!0},function(e){return Mk(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function jm(a){var b;return w(function(c){if(1==c.i)return t(c,hm(a),2);b=c.j;return t(c,b.clear("SWHealthLog"),0)})}
;var km={},lm=0;
function mm(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)Si(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Si(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new ab({url:a});if(d.l&&d.j||d.m){var e=ac(bc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(ic),h=hc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var p=!f;break b}}catch(y){}p=!1}if(p){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var u=!0;break b}}catch(y){}u=!1}b=u?!0:!1}else b=!1;b||nm(a)}}
function nm(a){var b=new Image,c=""+lm++;km[c]=b;b.onload=b.onerror=function(){delete km[c]};
b.src=a}
;function om(){this.i=new Map;this.j=!1}
function pm(){if(!om.i){var a=A("yt.networkRequestMonitor.instance")||new om;z("yt.networkRequestMonitor.instance",a);om.i=a}return om.i}
om.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
om.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
om.prototype.removeParams=function(a){return a.split("?")[0]};
om.prototype.removeParams=om.prototype.removeParams;om.prototype.isEndpointCFR=om.prototype.isEndpointCFR;om.prototype.requestComplete=om.prototype.requestComplete;om.getInstance=pm;var qm;function rm(){qm||(qm=new yj("yt.offline"));return qm}
function sm(a){if(M("offline_error_handling")){var b=rm().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);rm().set("errors",b,2592E3,!0)}}
function tm(){if(M("offline_error_handling")){var a=rm().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Q(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Uh(c)}rm().set("errors",{},2592E3,!0)}}}
;var um=Oh("network_polling_interval",3E4);function vm(){Te.call(this);var a=this;this.R=0;this.A=this.o=!1;this.l=this.Ya();M("use_shared_nsm")?(this.j=Ze(),M("use_shared_nsm_and_keep_yt_online_updated")&&(this.j.U("networkstatus-online",function(){a.l=!0;a.A&&tm()}),this.j.U("networkstatus-offline",function(){a.l=!1}))):(wm(this),xm(this))}
r(vm,Te);function ym(){if(!vm.i){var a=A("yt.networkStatusManager.instance")||new vm;z("yt.networkStatusManager.instance",a);vm.i=a}return vm.i}
l=vm.prototype;l.H=function(){if(M("use_shared_nsm")&&this.j){var a;return null==(a=this.j)?void 0:a.H()}return this.l};
l.aa=function(a){if(M("use_shared_nsm")&&this.j){var b;null!=(b=this.j)&&(b.j=a)}else a!==this.l&&(this.l=a)};
l.Zb=function(a){!M("use_shared_nsm")&&(this.o=!0,void 0===a?0:a)&&(this.R||zm(this))};
l.Ya=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Rb=function(){this.A=!0};
l.U=function(a,b){return M("use_shared_nsm")&&this.j?this.j.U(a,b):Te.prototype.U.call(this,a,b)};
function xm(a){window.addEventListener("online",function(){return w(function(b){if(1==b.i)return t(b,a.ca(),2);a.A&&tm();b.i=0})})}
function wm(a){window.addEventListener("offline",function(){return w(function(b){return t(b,a.ca(),0)})})}
function zm(a){a.R=Hj(function(){return w(function(b){if(1==b.i)return a.l?a.Ya()||!a.o?b.u(3):t(b,a.ca(),3):t(b,a.ca(),3);zm(a);b.i=0})},um)}
l.ca=function(a){var b=this;if(M("use_shared_nsm")&&this.j){var c=Xe(this.j,a);c.then(function(d){M("use_cfr_monitor")&&pm().requestComplete("generate_204",d)});
return c}return this.v?this.v:this.v=new Promise(function(d){var e,f,g,h;return w(function(k){switch(k.i){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,wa(k,2,3),e&&(b.N=$e.M(function(){e.abort()},a||2E4)),t(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:za(k);M("use_cfr_monitor")&&pm().requestComplete("generate_204",h);b.v=void 0;b.N&&$e.S(b.N);h!==b.l&&(b.l=h,b.l&&b.o?Ue(b,"ytnetworkstatus-online"):b.o&&Ue(b,"ytnetworkstatus-offline"));d(h);Aa(k);break;case 2:ya(k),h=!1,k.u(3)}})})};
vm.prototype.sendNetworkCheckRequest=vm.prototype.ca;vm.prototype.listen=vm.prototype.U;vm.prototype.enableErrorFlushing=vm.prototype.Rb;vm.prototype.getWindowStatus=vm.prototype.Ya;vm.prototype.monitorNetworkStatusChange=vm.prototype.Zb;vm.prototype.networkStatusHint=vm.prototype.aa;vm.prototype.isNetworkAvailable=vm.prototype.H;vm.getInstance=ym;function Am(a){a=void 0===a?{}:a;Te.call(this);var b=this;this.l=this.N=0;this.o="ytnetworkstatus-offline";this.v="ytnetworkstatus-online";M("use_shared_nsm")&&(this.o="networkstatus-offline",this.v="networkstatus-online");this.j=ym();var c=A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.qb);a.yb&&(c=A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=A("yt.networkStatusManager.instance.listen").bind(this.j))a.Ra?(this.Ra=a.Ra,c(this.v,
function(){Bm(b,"publicytnetworkstatus-online")}),c(this.o,function(){Bm(b,"publicytnetworkstatus-offline")})):(c(this.v,function(){Ue(b,"publicytnetworkstatus-online")}),c(this.o,function(){Ue(b,"publicytnetworkstatus-offline")}))}
r(Am,Te);Am.prototype.H=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Am.prototype.aa=function(a){var b=A("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Am.prototype.ca=function(a){var b=this,c;return w(function(d){c=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return M("skip_network_check_if_cfr")&&pm().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.aa((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.H())})):c?d.return(c(a)):d.return(!0)})};
function Bm(a,b){a.Ra?a.l?($e.S(a.N),a.N=$e.M(function(){a.A!==b&&(Ue(a,b),a.A=b,a.l=P())},a.Ra-(P()-a.l))):(Ue(a,b),a.A=b,a.l=P()):Ue(a,b)}
;var Cm;function Dm(){wl.call(this,{K:{Ob:dm,ma:cm,tb:$l,Yb:am,gb:bm,set:Yl},J:Em(),handleError:Uh,na:Vh,ba:Fm,now:P,Jb:sm,T:Mj(),fb:"publicytnetworkstatus-online",eb:"publicytnetworkstatus-offline",Ja:!0,Ia:.1,Pa:Oh("potential_esf_error_limit",10),F:M,ta:!(ak()&&Gm())});this.l=new yd;M("networkless_immediately_drop_all_requests")&&em();vl("LogsDatabaseV2")}
r(Dm,wl);function Hm(){var a=A("yt.networklessRequestController.instance");a||(a=new Dm,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&kl().then(function(b){a.C=b;yl(a);a.l.resolve();a.Ja&&Math.random()<=a.Ia&&a.C&&im(a.C);M("networkless_immediately_drop_sw_health_store")&&Im(a)}));
return a}
Dm.prototype.writeThenSend=function(a,b){b||(b={});ak()||(this.i=!1);wl.prototype.writeThenSend.call(this,a,b)};
Dm.prototype.sendThenWrite=function(a,b,c){b||(b={});ak()||(this.i=!1);wl.prototype.sendThenWrite.call(this,a,b,c)};
Dm.prototype.sendAndWrite=function(a,b){b||(b={});ak()||(this.i=!1);wl.prototype.sendAndWrite.call(this,a,b)};
Dm.prototype.awaitInitialization=function(){return this.l.promise};
function Im(a){var b;w(function(c){if(!a.C)throw b=pk("clearSWHealthLogsDb"),b;return c.return(jm(a.C).catch(function(d){a.handleError(d)}))})}
function Fm(a,b,c){M("use_cfr_monitor")&&Jm(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?mm(a):ui(a,b)}
function Em(){Cm||(Cm=new Am({yb:!0,qb:!0}));return Cm}
function Jm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){pm().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){pm().requestComplete(a,!0);d(e,f)}}
function Gm(){return M("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==cc(document.location.toString()):!0}
;var Km=!1,Lm=0,Mm=0,Nm,Om=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Km,potentialEsfErrorCounter:Mm};z("ytNetworklessLoggingInitializationOptions",Om);
function Pm(){var a;w(function(b){switch(b.i){case 1:return t(b,kl(),2);case 2:a=b.j;if(!a||!ak()&&!M("nwl_init_require_datasync_id_killswitch")||!Gm()){b.u(0);break}Km=!0;Om.isNwlInitialized=Km;if(!M("use_new_nwl_initialization")){b.u(4);break}return t(b,Hm().awaitInitialization(),5);case 5:return b.return();case 4:return t(b,vl("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return t(b,dm(a),8);case 8:return t(b,im(a),7);case 7:Qm();Rm().H()&&Sm();Rm().U("publicytnetworkstatus-online",
Sm);Rm().U("publicytnetworkstatus-offline",Tm);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return t(b,Um(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return t(b,em(),0);b.u(0)}})}
function Vm(a,b){function c(d){var e=Rm().H();if(!Wm()||!d||e&&M("vss_networkless_bypass_write"))Xm(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Yl(f,d).then(function(g){f.id=g;Rm().H()&&Ym(f)}).catch(function(g){Ym(f);
Rm().H()?Uh(g):sm(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?kl().then(function(d){c(d)}):c(jl())}
function Zm(a,b){function c(d){if(Wm()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&pm().requestComplete(e.url,!0);void 0!==e.id?cm(e.id,d):f=!0;M("vss_network_hint")&&Rm().aa(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){pm().requestComplete(e.url,!1);h(k,m)}}Xm(e.url,e.options);
Yl(e,d).then(function(k){e.id=k;f&&cm(e.id,d)}).catch(function(k){Rm().H()?Uh(k):sm(k)})}else Xm(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?kl().then(function(d){c(d)}):c(jl())}
function Sm(){var a=jl();if(!a)throw pk("throttleSend");Lm||(Lm=$e.M(function(){var b;return w(function(c){if(1==c.i)return t(c,$l("NEW",a),2);if(3!=c.i)return b=c.j,b?t(c,Ym(b),3):(Tm(),c.return());Lm&&(Lm=0,Sm());c.i=0})},100))}
function Tm(){$e.S(Lm);Lm=0}
function Ym(a){var b,c,d;return w(function(e){switch(e.i){case 1:b=jl();if(!b)throw c=pk("immediateSend"),c;if(void 0===a.id){e.u(2);break}return t(e,am(a.id,b),3);case 3:(d=e.j)?a=d:Vh(Error("The request cannot be found in the database."));case 2:if($m(a,2592E6)){e.u(4);break}Vh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return t(e,cm(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=an(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return t(e,cm(a.id,b),8);case 8:Xm(a.url,a.options,!!a.skipRetry),e.i=0}})}
function an(a){var b=jl();if(!b)throw pk("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&pm().requestComplete(a.url,!1);g=El(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&bn()<=Oh("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||pm().isEndpointCFR(a.url))){m.u(3);break}return t(m,Rm().ca(),3);case 3:if(Rm().H()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return t(m,bm(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&bn()>Oh("potential_esf_error_limit",10))return m.return();A("ytNetworklessLoggingInitializationOptions")&&Om.potentialEsfErrorCounter++;Mm++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?t(m,bm(a.id,b),12):t(m,cm(a.id,b),8);case 12:$e.M(function(){Rm().H()&&Sm()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return M("use_cfr_monitor")&&pm().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):t(h,cm(a.id,b),2);M("vss_network_hint")&&Rm().aa(!0);d(e,f);h.i=0})};
return a}
function $m(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function Qm(){var a=jl();if(!a)throw pk("retryQueuedRequests");$l("QUEUED",a).then(function(b){b&&!$m(b,12E4)?$e.M(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):t(c,bm(b.id,a),2);Qm();c.i=0})}):Rm().H()&&Sm()})}
function Um(){var a,b;return w(function(c){a=jl();if(!a)throw b=pk("clearSWHealthLogsDb"),b;return c.return(jm(a).catch(function(d){Uh(d)}))})}
function Rm(){if(M("use_new_nwl"))return Em();Nm||(Nm=new Am({yb:!0,qb:!0}));return Nm}
function Xm(a,b,c){c&&0===Object.keys(b).length?mm(a):ui(a,b)}
function Wm(){return A("ytNetworklessLoggingInitializationOptions")?Om.isNwlInitialized:Km}
function bn(){return A("ytNetworklessLoggingInitializationOptions")?Om.potentialEsfErrorCounter:Mm}
;function cn(a){var b=this;this.config_=null;a?this.config_=a:oj()&&(this.config_=pj());Hj(function(){Ej(b)},5E3)}
cn.prototype.isReady=function(){!this.config_&&oj()&&(this.config_=pj());return!!this.config_};
function Fj(a,b,c,d){function e(E){E=void 0===E?!1:E;var F;if(d.retry&&"www.youtube-nocookie.com"!=h&&(E||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(F=Cj(b,c,m,k)),F)){var H=g.onSuccess,R=g.onFetchSuccess;g.onSuccess=function(O,S){Dj(F);H(O,S)};
c.onFetchSuccess=function(O,S){Dj(F);R(O,S)}}try{E&&d.retry&&!d.zb.bypassNetworkless?(g.method="POST",d.zb.writeThenSend?M("use_new_nwl_wts")?Hm().writeThenSend(v,g):Vm(v,g):M("use_new_nwl_saw")?Hm().sendAndWrite(v,g):Zm(v,g)):(g.method="POST",g.postParams||(g.postParams={}),ui(v,g))}catch(O){if("InvalidAccessError"==O.name)F&&(Dj(F),F=0),Vh(Error("An extension is blocking network request."));
else throw O;}F&&Hj(function(){Ej(a)},5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Vh(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Uh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(E,F){if(d.onSuccess)d.onSuccess(F)},
onFetchSuccess:function(E){if(d.onSuccess)d.onSuccess(E)},
onError:function(E,F){if(d.onError)d.onError(F)},
onFetchError:function(E){if(d.onError)d.onError(E)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Vb)&&(h=f);var k=a.config_.Xb||!1,m=wj(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var p="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,u={alt:"json"},y=a.config_.Wb&&f;y=y&&f.startsWith("Bearer");y||(u.key=a.config_.innertubeApiKey);var v=gi(""+h+p,u||{},!0);M("use_new_nwl")&&Hm().i||!M("use_new_nwl")&&
Wm()?il().then(function(E){e(E)}):e(!1)}
;var dn={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},en={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var fn=0,gn=vc?"webkit":uc?"moz":sc?"ms":rc?"o":"";z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++fn});var hn={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function jn(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in hn||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function kn(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
jn.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
jn.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
jn.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=x.ytEventsEventsListeners||{};z("ytEventsEventsListeners",nb);var ln=x.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",ln);
function mn(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var nn=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function on(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=mn(a,b,c,d);if(e)return e;e=++ln.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new jn(h);if(!Ld(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new jn(h);
h.currentTarget=a;return c.call(a,h)};
g=Th(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),nn()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function pn(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?nn()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;var qn=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function rn(a){this.L=a;this.j=null;this.o=0;this.A=null;this.v=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.R=on(window,"mousemove",Wa(this.W,this));a=Wa(this.N,this);"function"===typeof a&&(a=Th(a));this.da=window.setInterval(a,25)}
Ya(rn,J);rn.prototype.W=function(a){void 0===a.i&&kn(a);var b=a.i;void 0===a.j&&kn(a);this.j=new Hd(b,a.j)};
rn.prototype.N=function(){if(this.j){var a=qn();if(0!=this.o){var b=this.A,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.v)/this.v)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.L();this.v=d}this.o=a;this.A=this.j;this.m=(this.m+1)%4}};
rn.prototype.I=function(){window.clearInterval(this.da);pn(this.R)};var sn={};
function tn(a){var b=void 0===a?{}:a;a=void 0===b.dc?!1:b.dc;b=void 0===b.Sb?!0:b.Sb;if(null==A("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&un();on(document,"keydown",un);on(document,"keyup",un);on(document,"mousedown",un);on(document,"mouseup",un);a?on(window,"touchmove",function(){vn("touchmove",200)},{passive:!0}):(on(window,"resize",function(){vn("resize",200)}),b&&on(window,"scroll",function(){vn("scroll",200)}));
new rn(function(){vn("mouse",100)});
on(document,"touchstart",un,{passive:!0});on(document,"touchend",un,{passive:!0})}}
function vn(a,b){sn[a]||(sn[a]=!0,$e.M(function(){un();sn[a]=!1},b))}
function un(){null==A("_lact",window)&&tn();var a=Date.now();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function wn(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var xn=x.ytPubsubPubsubInstance||new K,yn=x.ytPubsubPubsubSubscribedKeys||{},zn=x.ytPubsubPubsubTopicToKeys||{},An=x.ytPubsubPubsubIsSynchronous||{};function Bn(a,b){var c=Cn();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){yn[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{An[a]?f():ni(f,0)}catch(g){Uh(g)}},void 0);
yn[d]=!0;zn[a]||(zn[a]=[]);zn[a].push(d);return d}return 0}
function Dn(a){var b=Cn();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete yn[c]}))}
function En(a,b){var c=Cn();c&&c.publish.apply(c,arguments)}
function Fn(a){var b=Cn();if(b)if(b.clear(a),a)Gn(a);else for(var c in zn)Gn(c)}
function Cn(){return x.ytPubsubPubsubInstance}
function Gn(a){zn[a]&&(a=zn[a],eb(a,function(b){yn[b]&&delete yn[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.ra;K.prototype.publish=K.prototype.ha;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",xn);z("ytPubsubPubsubTopicToKeys",zn);z("ytPubsubPubsubIsSynchronous",An);z("ytPubsubPubsubSubscribedKeys",yn);var Xn=Oh("initial_gel_batch_timeout",2E3),wo=Math.pow(2,16)-1,xo=void 0;function yo(){this.l=this.i=this.j=0}
var zo=new yo,Ao=new yo,Bo=!0,Co=x.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Co);var Do=x.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Do);var Eo=x.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Eo);var Fo=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Fo);
function Go(a,b){if("log_event"===a.endpoint){var c=Ho(a),d=Co.get(c)||[];Co.set(c,d);d.push(a.payload);Io(b,d,c)}}
function Jo(a,b){if("log_event"===a.endpoint){var c=Ho(a,!0),d=Do.get(c)||[];Do.set(c,d);a=a.payload.toJSON();d.push(a);Io(b,d,c,!0)}}
function Io(a,b,c,d){d=void 0===d?!1:d;a&&(xo=new a);a=Oh("tvhtml5_logging_max_batch")||Oh("web_logging_max_batch")||100;var e=P(),f=d?Ao.l:zo.l;b.length>=a?Ko({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Lo(d),d?Ao.l=e:zo.l=e)}
function Mo(a,b){if("log_event"===a.endpoint){var c=Ho(a),d=new Map;d.set(c,[a.payload]);b&&(xo=new b);return new Uf(function(e,f){xo&&xo.isReady()?No(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function Oo(a,b){if("log_event"===a.endpoint){var c=Ho(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(xo=new b);return new Uf(function(e){xo&&xo.isReady()?Po(d,e,{bypassNetworkless:!0},!0):e()})}}
function Ho(a,b){var c="";if(a.sa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Ch;c.videoId?d.setVideoId(c.videoId):c.playlistId&&kd(d,2,Dh,c.playlistId);Fo[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Eo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Ko(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Uf(function(d,e){c?(oi(Ao.j),oi(Ao.i),Ao.i=0):(oi(zo.j),oi(zo.i),zo.i=0);if(xo&&xo.isReady())if(void 0!==b)if(c){e=new Map;var f=Do.get(b)||[];e.set(b,f);Po(e,d,a);Do.delete(b)}else{f=new Map;var g=Co.get(b)||[];f.set(b,g);No(f,d,e,a);Co.delete(b)}else c?(Po(Do,d,a),Do.clear()):(No(Co,d,e,a),Co.clear());else Lo(c),d()})}
function Lo(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!zo.i||a&&!Ao.i)){var b=ni(function(){Ko({writeThenSend:!0},void 0,a)},6E4);
a?Ao.i=b:zo.i=b}oi(a?Ao.j:zo.j);b=L("LOGGING_BATCH_TIMEOUT",Oh("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Bo&&(b=Xn);b=ni(function(){Ko({writeThenSend:!0},void 0,a)},b);
a?Ao.j=b:zo.j=b}
function No(a,b,c,d,e){var f=xo;d=void 0===d?{}:d;var g=Math.round(P()),h=a.size;a=q(a);for(var k=a.next();!k.done;k=a.next()){var m=q(k.value);k=m.next().value;var p=m.next().value;m=k;k=vb({context:qj(f.config_||pj())});k.events=p;(p=Eo[m])&&Qo(k,m,p);delete Eo[m];m="visitorOnlyApprovedKey"===m;Ro(k,g,m);So(d);p=function(){h--;h||b()};
var u=function(){h--;h||b()};
try{Fj(f,"log_event",k,To(d,m,p,u,e)),Bo=!1}catch(y){Uh(y),c()}}}
function Po(a,b,c,d){var e=xo;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var m=k=k.next().value;k=new Eh;var p=vj(e.config_||pj());D(k,1,p);m=Uo(m);for(p=0;p<m.length;p++)pd(k,3,yh,m[p]);(m=Fo[h])&&Vo(k,h,m);delete Fo[h];h="visitorOnlyApprovedKey"===h;Wo(k,f,h);So(c);a:{Uc=!0;try{var u=JSON.stringify(k.toJSON(),ud);break a}finally{Uc=!1}u=void 0}k=u;h=To(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;Fj(e,"log_event","",h);Bo=!1}}
function So(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function To(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,zb:a,sa:b,fp:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Ro(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=Xo(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Wo(a,b,c){C(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=Xo();var d=new Bh;C(d,1,b);C(d,2,c);D(a,5,d)}}
function Xo(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*wo/2));a++;a>wo&&(a=1);Lh("BATCH_CLIENT_COUNTER",a);return a}
function Qo(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Vo(a,b,c){if(id(c,1===ld(c,Dh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;D(a,4,c);a=md(a,Ng,1)||new Ng;c=md(a,Lg,3)||new Lg;var e=new Kg;e.setToken(b);C(e,1,d);pd(c,12,Kg,e);D(a,3,c)}
function Uo(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new yh(a[c]))}catch(d){Uh(new Q("Transport failed to deserialize "+String(a[c])))}return b}
;var Yo=x.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Yo);
function Zo(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(en[a]||dn[a])return}else if(M("lr_drop_other_payloads")&&en[a])return;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=wn();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.V&&(a=e.context,b=d.V,b={index:$o(b),groupKey:b},a.sequence=b,d.rb&&delete Yo[d.V]);(d.mc?Mo:Go)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
sa:d.sa},c)}
function ap(a){Ko(void 0,void 0,void 0===a?!1:a)}
function $o(a){Yo[a]=a in Yo?Yo[a]+1:0;return Yo[a]}
;function Xj(a,b,c){c=void 0===c?{}:c;var d=cn;L("ytLoggingEventsDefaultDisabled",!1)&&cn==cn&&(d=null);Zo(a,b,d,c)}
;var bp=[{cb:function(a){return"Cannot read property '"+a.key+"'"},
Oa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{cb:function(a){return"Cannot call '"+a.key+"'"},
Oa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{cb:function(a){return a.key+" is not defined"},
Oa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var dp={fa:[],ea:[{ia:cp,weight:500}]};function cp(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ep(){this.ea=[];this.fa=[]}
var fp;function gp(){if(!fp){var a=fp=new ep;a.fa.length=0;a.ea.length=0;dp.fa&&a.fa.push.apply(a.fa,dp.fa);dp.ea&&a.ea.push.apply(a.ea,dp.ea)}return fp}
;var hp=new K;function ip(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=jp(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=jp(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=jp(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function jp(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function kp(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=lp(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=ip(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?lp(e+".ve",f,g,h):0;d+=g;d+=lp(e,a[e],b,c);if(500<d)break}}else c[b]=mp(a),d+=c[b].length;else c[b]=mp(a),d+=c[b].length;return d}
function lp(a,b,c,d){c+="."+a;a=mp(b);d[c]=a;return c.length+a.length}
function mp(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var np=x.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",np);function op(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());C(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=wn();d=new xh;C(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.V){e=c.V;var f=$o(e),g=new wh;C(g,2,f);C(g,1,e);D(d,3,g);c.rb&&delete np[c.V]}D(a,33,d);(c.mc?Oo:Jo)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,sa:c.sa},b)}
;function pp(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&cn===cn&&(c=!0);op(a,c?null:cn,b)}
;function qp(a,b,c){var d=new yh;od(d,73,zh,a);c?op(d,c,b):pp(d,b)}
function rp(a,b,c){var d=new yh;od(d,78,zh,a);c?op(d,c,b):pp(d,b)}
function sp(a,b,c){var d=new yh;od(d,208,zh,a);c?op(d,c,b):pp(d,b)}
function tp(a,b,c){var d=new yh;od(d,156,zh,a);c?op(d,c,b):pp(d,b)}
function up(a,b,c){var d=new yh;od(d,215,zh,a);c?op(d,c,b):pp(d,b)}
function vp(a,b,c){var d=new yh;od(d,111,zh,a);c?op(d,c,b):pp(d,b)}
;var wp=new Set,xp=0,yp=0,zp=0,Ap=[],Bp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Wj(a){Cp(a)}
function Dp(a){Cp(a,"WARNING")}
function Cp(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=xp)){var m=Ap,p=re(a),u=p.message||"Unknown Error",y=p.name||"UnknownError",v=p.stack||a.j||"Not available";if(v.startsWith(y+": "+u)){var E=v.split("\n");E.shift();v=E.join("\n")}var F=p.lineNumber||"Not available",H=p.fileName||"Not available",R=v,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var S=0;S<a.args.length&&!(O=kp(a.args[S],"params."+S,g,O),500<=O);S++);else if(a.hasOwnProperty("params")&&
a.params){var ja=a.params;if("object"===typeof a.params)for(var N in ja){if(ja[N]){var Ba="params."+N,Na=mp(ja[N]);g[Ba]=Na;O+=Ba.length+Na.length;if(500<O)break}}else g.params=mp(ja)}if(m.length)for(var va=0;va<m.length&&!(O=kp(m[va],"params.context."+va,g,O),500<=O);va++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var G={message:u,name:y,lineNumber:F,fileName:H,stack:R,params:g,sampleWeight:1},Ca=Number(a.columnNumber);isNaN(Ca)||(G.lineNumber=G.lineNumber+
":"+Ca);if("IGNORED"===a.level)var ua=0;else a:{for(var Hn=gp(),In=q(Hn.fa),wi=In.next();!wi.done;wi=In.next()){var Jn=wi.value;if(G.message&&G.message.match(Jn.mp)){ua=Jn.weight;break a}}for(var Kn=q(Hn.ea),xi=Kn.next();!xi.done;xi=Kn.next()){var Ln=xi.value;if(Ln.ia(G)){ua=Ln.weight;break a}}ua=1}G.sampleWeight=ua;for(var Mn=q(bp),yi=Mn.next();!yi.done;yi=Mn.next()){var zi=yi.value;if(zi.Oa[G.name])for(var Nn=q(zi.Oa[G.name]),Ai=Nn.next();!Ai.done;Ai=Nn.next()){var On=Ai.value,Of=G.message.match(On.regexp);
if(Of){G.params["params.error.original"]=Of[0];for(var Bi=On.groups,Pn={},Vc=0;Vc<Bi.length;Vc++)Pn[Bi[Vc]]=Of[Vc+1],G.params["params.error."+Bi[Vc]]=Of[Vc+1];G.message=zi.cb(Pn);break}}}G.params||(G.params={});var Qn=gp();G.params["params.errorServiceSignature"]="msg="+Qn.fa.length+"&cb="+Qn.ea.length;G.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(G.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Cb("sample").constructor!==
Ab&&(G.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(G);if(0!==G.sampleWeight&&!wp.has(G.message)){if("ERROR"===h){hp.ha("handleError",G);if(M("record_app_crashed_web")&&0===zp&&1===G.sampleWeight)if(zp++,M("errors_via_jspb")){var Ci=new $g;C(Ci,1,1);if(!M("report_client_error_with_app_crash_ks")){var Rn=new Vg;C(Rn,1,G.message);var Sn=new Wg;D(Sn,3,Rn);var Tn=new Xg;D(Tn,5,Sn);var Un=new Yg;D(Un,9,Tn);D(Ci,4,Un)}var Vn=new yh;od(Vn,20,zh,Ci);pp(Vn)}else{var Wn=
{appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Wn.systemHealth={crashData:{clientError:{logMessage:{message:G.message}}}});Xj("appCrashed",Wn)}yp++}else"WARNING"===h&&hp.ha("handleWarning",G);if(M("kevlar_gel_error_routing"))a:{var Ud=h;if(M("errors_via_jspb")){if(Ep())var Yn=void 0;else{var Wc=new Sg;C(Wc,1,G.stack);G.fileName&&C(Wc,4,G.fileName);var rb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==rb.length&&(1!==rb.length||isNaN(Number(rb[0]))?
2!==rb.length||isNaN(Number(rb[0]))||isNaN(Number(rb[1]))||(C(Wc,2,Number(rb[0])),C(Wc,3,Number(rb[1]))):C(Wc,2,Number(rb[0])));var kc=new Vg;C(kc,1,G.message);C(kc,3,G.name);C(kc,6,G.sampleWeight);"ERROR"===Ud?C(kc,2,2):"WARNING"===Ud?C(kc,2,1):C(kc,2,0);var Di=new Tg;C(Di,1,!0);od(Di,3,Ug,Wc);var Lb=new Pg;C(Lb,3,window.location.href);for(var Zn=L("FEXP_EXPERIMENTS",[]),Ei=0;Ei<Zn.length;Ei++){var nt=Zn[Ei];Zc(Lb);jd(Lb,5).push(nt)}var Fi=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Mh()&&Fi)for(var $n=
q(Object.keys(Fi)),lc=$n.next();!lc.done;lc=$n.next()){var ao=lc.value,Gi=new Rg;C(Gi,1,ao);Gi.setValue(String(Fi[ao]));pd(Lb,4,Rg,Gi)}var Hi=G.params;if(Hi){var bo=q(Object.keys(Hi));for(lc=bo.next();!lc.done;lc=bo.next()){var co=lc.value,Ii=new Rg;C(Ii,1,"client."+co);Ii.setValue(String(Hi[co]));pd(Lb,4,Rg,Ii)}}var eo=L("SERVER_NAME"),fo=L("SERVER_VERSION");if(eo&&fo){var Ji=new Rg;C(Ji,1,"server.name");Ji.setValue(eo);pd(Lb,4,Rg,Ji);var Ki=new Rg;C(Ki,1,"server.version");Ki.setValue(fo);pd(Lb,
4,Rg,Ki)}var Pf=new Wg;D(Pf,1,Lb);D(Pf,2,Di);D(Pf,3,kc);Yn=Pf}var go=Yn;if(!go)break a;var ho=new yh;od(ho,163,zh,go);pp(ho)}else{if(Ep())var io=void 0;else{var Vd={stackTrace:G.stack};G.fileName&&(Vd.filename=G.fileName);var sb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==sb.length&&(1!==sb.length||isNaN(Number(sb[0]))?2!==sb.length||isNaN(Number(sb[0]))||isNaN(Number(sb[1]))||(Vd.lineNumber=Number(sb[0]),Vd.columnNumber=Number(sb[1])):Vd.lineNumber=Number(sb[0]));var Li={level:"ERROR_LEVEL_UNKNOWN",
message:G.message,errorClassName:G.name,sampleWeight:G.sampleWeight};"ERROR"===Ud?Li.level="ERROR_LEVEL_ERROR":"WARNING"===Ud&&(Li.level="ERROR_LEVEL_WARNNING");var ot={isObfuscated:!0,browserStackInfo:Vd},Xc={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(Xc.experimentIds=L("FEXP_EXPERIMENTS"));var Mi=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Mh()&&Mi)for(var jo=q(Object.keys(Mi)),mc=jo.next();!mc.done;mc=jo.next()){var ko=mc.value;Xc.kvPairs.push({key:ko,value:String(Mi[ko])})}var Ni=
G.params;if(Ni){var lo=q(Object.keys(Ni));for(mc=lo.next();!mc.done;mc=lo.next()){var mo=mc.value;Xc.kvPairs.push({key:"client."+mo,value:String(Ni[mo])})}}var no=L("SERVER_NAME"),oo=L("SERVER_VERSION");no&&oo&&(Xc.kvPairs.push({key:"server.name",value:no}),Xc.kvPairs.push({key:"server.version",value:oo}));io={errorMetadata:Xc,stackTrace:ot,logMessage:Li}}var po=io;if(!po)break a;Xj("clientError",po)}if("ERROR"===Ud||M("errors_flush_gel_always_killswitch"))M("web_fp_via_jspb")&&ap(!0),ap()}if(!M("suppress_error_204_logging")){var Wd=
G.params||{},Mb={urlParams:{a:"logerror",t:"jserror",type:G.name,msg:G.message.substr(0,250),line:G.lineNumber,level:h,"client.name":Wd.name},postParams:{url:L("PAGE_NAME",window.location.href),file:G.fileName},method:"POST"};Wd.version&&(Mb["client.version"]=Wd.version);if(Mb.postParams){G.stack&&(Mb.postParams.stack=G.stack);for(var qo=q(Object.keys(Wd)),Oi=qo.next();!Oi.done;Oi=qo.next()){var ro=Oi.value;Mb.postParams["client."+ro]=Wd[ro]}var Pi=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(Pi)for(var so=
q(Object.keys(Pi)),Qi=so.next();!Qi.done;Qi=so.next()){var to=Qi.value;Mb.postParams[to]=Pi[to]}var uo=L("SERVER_NAME"),vo=L("SERVER_VERSION");uo&&vo&&(Mb.postParams["server.name"]=uo,Mb.postParams["server.version"]=vo)}ui(L("ECATCHER_REPORT_HOST","")+"/error_204",Mb)}try{wp.add(G.message)}catch(Nu){}xp++}}}}
function Ep(){for(var a=q(Bp),b=a.next();!b.done;b=a.next())if(Oj(b.value.toLowerCase()))return!0;return!1}
function Fp(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,fa(b))}
;function Gp(){this.register=new Map}
function Hp(a){a=q(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.rp("ABORTED")}
Gp.prototype.clear=function(){Hp(this);this.register.clear()};
var Ip=new Gp;var Jp=Date.now().toString();
function Kp(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Jp)for(a=1,b=0;b<Jp.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Jp.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Lp=x.ytLoggingDocDocumentNonce_;Lp||(Lp=Kp(),z("ytLoggingDocDocumentNonce_",Lp));var Mp=Lp;var Np={Cg:0,qd:1,Ad:2,qk:3,Eg:4,Bo:5,jl:6,Lm:7,jm:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function Op(a){this.i=a}
function Pp(a){return new Op({trackingParams:a})}
Op.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
Op.prototype.getAsJspb=function(){var a=new bh;void 0!==this.i.trackingParams?C(a,1,this.i.trackingParams):(void 0!==this.i.veType&&C(a,2,this.i.veType),void 0!==this.i.veCounter&&C(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&C(a,3,this.i.elementIndex));if(void 0!==this.i.dataElement){var b=this.i.dataElement.getAsJspb();D(a,7,b)}void 0!==this.i.youtubeData&&D(a,8,this.i.jspbYoutubeData);return a};
Op.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Op.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function Qp(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Rp(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Sp(a){return L(Rp(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",Sp);function Tp(a){return(a=Sp(void 0===a?0:a))?new Op({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Up(){var a=L("csn-to-ctt-auth-info");a||(a={},Lh("csn-to-ctt-auth-info",a));return a}
function Vp(a){a=L(Qp(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",Vp);function Wp(a,b,c){var d=Up();(c=Vp(c))&&delete d[c];b&&(d[a]=b)}
function Xp(a){return Up()[a]}
z("yt_logging_screen.getCttAuthInfo",Xp);
function Yp(a,b,c,d){c=void 0===c?0:c;if(a!==L(Qp(c))||b!==L(Rp(c)))Wp(a,d,c),Lh(Qp(c),a),Lh(Rp(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new ch;C(e,1,Mp);C(e,2,a);M("use_default_heartbeat_client")?vp(e):vp(e,void 0,cn)}else e={clientDocumentNonce:Mp,clientScreenNonce:a},M("use_default_heartbeat_client")?Xj("foregroundHeartbeatScreenAssociated",e):Zo("foregroundHeartbeatScreenAssociated",e,cn)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):
b()}
z("yt_logging_screen.setCurrentScreen",Yp);var Zp=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Zp);function $p(a){Gh(Zp,arguments)}
;var aq={pd:3611,Cc:27686,Dc:85013,Ec:23462,Gc:42016,Hc:62407,Ic:26926,Fc:43781,Jc:51236,Kc:79148,Lc:50160,Mc:77504,Yc:87907,Zc:18630,bd:54445,cd:80935,dd:105675,ed:150723,fd:37521,gd:147285,hd:47786,jd:98349,kd:123695,ld:6827,md:29434,nd:7282,od:124448,sd:32276,rd:76278,td:147868,ud:147869,vd:93911,wd:106531,xd:27259,yd:27262,zd:27263,Bd:21759,Cd:27107,Dd:62936,Ed:49568,Fd:38408,Gd:80637,Hd:68727,Id:68728,Jd:80353,Kd:80356,Ld:74610,Md:45707,Nd:83962,Od:83970,Pd:46713,Qd:89711,Rd:74612,Sd:93265,Td:74611,
Ud:131380,Wd:128979,Xd:139311,Yd:128978,Vd:131391,Zd:105350,be:139312,ce:134800,ae:131392,ee:113533,ge:93252,he:99357,je:94521,ke:114252,le:113532,me:94522,ie:94583,ne:88E3,oe:139580,pe:93253,qe:93254,re:94387,se:94388,te:93255,ue:97424,de:72502,we:110111,xe:76019,ze:117092,Ae:117093,ye:89431,Be:110466,Ce:77240,De:60508,Ee:148123,Fe:148124,Ge:137401,He:137402,Ie:137046,Je:73393,Ke:113534,Le:92098,Me:131381,Ne:84517,Oe:83759,Pe:80357,Qe:86113,Re:72598,Se:72733,Te:107349,Ue:124275,Ve:118203,We:133275,
Xe:133274,Ye:133272,Ze:133273,af:133276,bf:144507,cf:143247,df:143248,ef:143249,ff:143250,gf:143251,hf:144401,kf:117431,jf:133797,lf:128572,mf:133405,nf:117429,pf:117430,qf:117432,rf:120080,sf:117259,tf:121692,uf:145656,vf:145655,wf:145653,xf:145654,yf:145657,zf:132972,Af:133051,Bf:133658,Cf:132971,Df:97615,Ff:143359,Ef:143356,Hf:143361,Gf:143358,Jf:143360,If:143357,Kf:142303,Lf:143353,Mf:143354,Nf:144479,Of:143355,Pf:31402,Rf:133624,Sf:146477,Tf:133623,Uf:133622,Qf:133621,Vf:84774,Wf:95117,Xf:150497,
Yf:98930,Zf:98931,ag:98932,cg:43347,dg:129889,eg:149123,fg:45474,gg:100352,hg:84758,ig:98443,jg:117985,kg:74613,lg:74614,mg:64502,ng:136032,og:74615,pg:74616,qg:122224,rg:74617,sg:77820,tg:74618,ug:93278,vg:93274,wg:93275,xg:93276,yg:22110,zg:29433,Ag:133798,Bg:132295,Dg:120541,Fg:82047,Gg:113550,Hg:75836,Ig:75837,Jg:42352,Kg:84512,Lg:76065,Mg:75989,Rg:16623,Sg:32594,Tg:27240,Ug:32633,Vg:74858,Xg:3945,Wg:16989,Yg:45520,Zg:25488,ah:25492,bh:25494,dh:55760,eh:14057,fh:18451,gh:57204,hh:57203,ih:17897,
jh:57205,kh:18198,lh:17898,mh:17909,nh:43980,oh:46220,ph:11721,qh:147994,rh:49954,sh:96369,th:3854,uh:151633,vh:56251,wh:25624,Nh:16906,Oh:99999,Ph:68172,Qh:27068,Rh:47973,Sh:72773,Th:26970,Uh:26971,Vh:96805,Wh:17752,Xh:73233,Yh:109512,Zh:22256,ai:14115,bi:22696,ci:89278,di:89277,fi:109513,gi:43278,hi:43459,ii:43464,ji:89279,ki:43717,li:55764,mi:22255,ni:147912,oi:89281,ri:40963,si:43277,ti:43442,vi:91824,wi:120137,xi:96367,yi:36850,zi:72694,Ai:37414,Bi:36851,Di:124863,Ci:121343,Ei:73491,Fi:54473,
Gi:43375,Hi:46674,Ii:143815,Ji:139095,Ki:144402,Li:149968,Mi:149969,Ni:32473,Oi:72901,Pi:72906,Qi:50947,Ri:50612,Si:50613,Ti:50942,Ui:84938,Vi:84943,Wi:84939,Xi:84941,Yi:84944,Zi:84940,aj:84942,bj:35585,cj:51926,dj:79983,ej:63238,fj:18921,gj:63241,hj:57893,ij:41182,jj:135732,kj:33424,lj:22207,mj:42993,nj:36229,oj:22206,pj:22205,qj:18993,rj:19001,sj:18990,tj:18991,uj:18997,vj:18725,wj:19003,xj:36874,yj:44763,zj:33427,Aj:67793,Bj:22182,Cj:37091,Dj:34650,Ej:50617,Fj:47261,Gj:22287,Hj:25144,Ij:97917,
Jj:62397,Kj:150871,Lj:150874,Mj:125598,Nj:137935,Oj:36961,Pj:108035,Qj:27426,Rj:27857,Sj:27846,Tj:27854,Uj:69692,Vj:61411,Wj:39299,Xj:38696,Yj:62520,Zj:36382,ak:108701,bk:50663,ck:36387,dk:14908,ek:37533,fk:105443,gk:61635,hk:62274,ik:133818,jk:65702,kk:65703,lk:65701,mk:76256,nk:37671,pk:49953,rk:36216,sk:28237,tk:39553,uk:29222,vk:26107,wk:38050,xk:26108,zk:120745,yk:26109,Ak:26110,Bk:66881,Ck:28236,Dk:14586,Ek:57929,Fk:74723,Gk:44098,Hk:44099,Kk:23528,Lk:61699,Ik:134104,Jk:134103,Mk:59149,Nk:101951,
Ok:97346,Pk:118051,Qk:95102,Rk:64882,Sk:119505,Tk:63595,Uk:63349,Vk:95101,Wk:75240,Xk:27039,Yk:68823,Zk:21537,al:83464,bl:75707,dl:83113,fl:101952,il:101953,kl:79610,ll:125755,ml:24402,nl:24400,ol:32925,pl:57173,ql:122502,rl:145268,sl:138480,ul:64423,vl:64424,wl:33986,xl:100828,yl:129089,zl:21409,Dl:135155,El:135156,Fl:135157,Gl:135158,Hl:135159,Il:135160,Jl:135161,Kl:135162,Ll:135163,Ml:135164,Nl:135165,Ol:135166,Al:11070,Bl:11074,Cl:17880,Pl:14001,Rl:30709,Sl:30707,Tl:30711,Ul:30710,Vl:30708,Ql:26984,
Wl:146143,Xl:63648,Yl:63649,Zl:51879,am:111059,bm:5754,cm:20445,dm:151152,fm:130975,em:130976,gm:110386,hm:113746,im:66557,km:17310,lm:28631,mm:21589,nm:68012,om:60480,pm:138664,qm:141121,rm:31571,sm:141978,tm:150105,um:150106,vm:150107,wm:150108,xm:76980,ym:41577,zm:45469,Am:38669,Bm:13768,Cm:13777,Dm:141842,Em:62985,Fm:4724,Gm:59369,Hm:43927,Im:43928,Jm:12924,Km:100355,Nm:56219,Om:27669,Pm:10337,Mm:47896,Qm:122629,Sm:139723,Rm:139722,Tm:121258,Um:107598,Vm:127991,Wm:96639,Xm:107536,Ym:130169,Zm:96661,
an:145188,bn:96658,cn:116646,dn:121122,en:96660,fn:127738,gn:127083,hn:147842,jn:104443,kn:96659,ln:147595,mn:106442,nn:134840,pn:63667,qn:63668,rn:63669,sn:130686,tn:147036,un:78314,vn:147799,wn:148649,xn:55761,yn:127098,zn:134841,An:96368,Bn:67374,Cn:48992,Dn:146176,En:49956,Fn:31961,Gn:26388,Hn:23811,In:5E4,Jn:126250,Kn:96370,Ln:47355,Mn:47356,Nn:37935,On:45521,Pn:21760,Qn:83769,Rn:49977,Sn:49974,Tn:93497,Un:93498,Vn:34325,Wn:140759,Xn:115803,Yn:123707,Zn:100081,ao:35309,bo:68314,co:25602,eo:100339,
fo:143516,ho:59018,jo:18248,ko:50625,lo:9729,mo:37168,no:37169,oo:21667,po:16749,qo:18635,ro:39305,so:18046,to:53969,uo:8213,vo:93926,wo:102852,xo:110099,yo:22678,zo:69076,Ao:137575,Co:139224,Do:100856,Eo:17736,Fo:3832,Go:147111,Ho:55759,Io:64031,Oo:93044,Po:93045,Qo:34388,Ro:17657,So:17655,To:39579,Uo:39578,Vo:77448,Wo:8196,Xo:11357,Yo:69877,Zo:8197,ap:82039};function bq(){var a=ub(cq),b;return ag(new Uf(function(c,d){a.onSuccess=function(e){mi(e)?c(new dq(e)):d(new eq("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new eq("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new eq("Request timed out","net.timeout",e))};
b=ui("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof bg&&b.abort();
return Zf(c)})}
function eq(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(eq,$a);function dq(a){this.xhr=a}
;function fq(){this.j=0;this.i=null}
fq.prototype.then=function(a,b,c){return 1===this.j&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:gq(a):2===this.j&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:hq(a):this};
fq.prototype.getValue=function(){return this.i};
fq.prototype.$goog_Thenable=!0;function hq(a){var b=new fq;a=void 0===a?null:a;b.j=2;b.i=void 0===a?null:a;return b}
function gq(a){var b=new fq;a=void 0===a?null:a;b.j=1;b.i=void 0===a?null:a;return b}
;function iq(){if(ke()||Nj&&Oj("applewebkit")&&!Oj("version")&&(!Oj("safari")||Oj("gsa/"))||wc&&Oj("version/"))return!0;if(M("enable_web_eom_visitor_data"))return L("EOM_VISITOR_DATA")?!1:!0;var a=L("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=$i("CONSENT"))?a.startsWith("YES+"):!0}
;function jq(a){var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){return"EMBEDDED_PLAYER_MODE_UNKNOWN"}if(b)a:{for(var c in af)if(af[c]==b.embeddedPlayerMode){b=af[c];break a}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN";return b}
;function kq(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof lq;this.isTimeout=a instanceof eq&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof bg}
r(kq,$a);kq.prototype.name="BiscottiError";function lq(){$a.call(this,"Biscotti ID is missing from server")}
r(lq,$a);lq.prototype.name="BiscottiMissingError";var cq={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},mq=null;
function Xh(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Zf(Error("Biscotti id fetching has been disabled entirely."));if(!iq())return Zf(Error("User has not consented - not fetching biscotti id."));var a=L("PLAYER_VARS",{});if("1"==qb(a))return Zf(Error("Biscotti ID is not available in private embed mode"));if(M("embeds_web_disable_ads_for_pfl")&&"EMBEDDED_PLAYER_MODE_PFL"===jq(a))return Zf(Error("Biscotti id fetching has been disabled for pfl."));mq||(mq=ag(bq().then(nq),
function(b){return oq(2,b)}));
return mq}
function nq(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new lq;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new lq;a=a.id;Yh(a);mq=gq(a);pq(18E5,2);return a}
function oq(a,b){b=new kq(b);Yh("");mq=hq(b);0<a&&pq(12E4,a-1);throw b;}
function pq(a,b){ni(function(){ag(bq().then(nq,function(c){return oq(b,c)}),bb)},a)}
function qq(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Xh()}catch(b){return Zf(b)}}
;function rq(a){if("1"!=qb(L("PLAYER_VARS",{}))){a&&Wh();try{qq().then(function(){},function(){}),ni(rq,18E5)}catch(b){Uh(b)}}}
;function sq(){this.xc=!0}
function tq(a){var b={},c=me([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Kh||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Kh&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var uq=Symbol("injectionDeps");function vq(a){this.name=a}
vq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function wq(){this.key=xq}
function yq(){this.providers=new Map;this.i=new Map}
yq.prototype.resolve=function(a){return a instanceof wq?zq(this,a.key,[],!0):zq(this,a,[])};
function zq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.Bc)var e=d.Bc;else if(d.Ac)e=d[uq]?Aq(a,d[uq],c):[],e=d.Ac.apply(d,fa(e));else if(d.Ib){e=d.Ib;var f=e[uq]?Aq(a,e[uq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(fa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.wp||a.i.set(b,e);
return e}
function Aq(a,b,c){return b?b.map(function(d){return d instanceof wq?zq(a,d.key,c,!0):zq(a,d,c)}):[]}
;var Bq;var Cq={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Dq=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Eq(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=fi(a).theme;return Dq.get(b)||null}catch(c){}return null}
;function Fq(){this.i={};if(this.j=aj()){var a=$i("CONSISTENCY");a&&Gq(this,{encryptedTokenJarContents:a})}}
Fq.prototype.handleResponse=function(a,b){var c,d;b=(null==(c=b.Z.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=q(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];Gq(this,a)}};
function Gq(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&Zi("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Hq=window.location.hostname.split(".").slice(-2).join(".");function Iq(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=Jq(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var Kq;Iq.getInstance=function(){Kq=A("yt.clientLocationService.instance");Kq||(Kq=new Iq,z("yt.clientLocationService.instance",Kq));return Kq};
Iq.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Iq.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=Jq(this))&&this.i.set("yt-location-playability-token",a,15552E3):Zi("YT_CL",JSON.stringify({loctok:a}),15552E3,Hq,!0))};
function Jq(a){return void 0===a.i?new yj("yt-client-location"):a.i}
Iq.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Iq.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Lq(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.xa&&(c=b.xa[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.Pb&&(d=b.Pb[a.continuationCommand.request]))return d();for(var e in a)if(b.mb[e]&&(a=b.mb[e]))return a()}
;function Mq(a){return function(){return new a}}
;var Nq={},Oq=(Nq.WEB_UNPLUGGED="^unplugged/",Nq.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Nq.WEB_UNPLUGGED_OPS="^unplugged/",Nq.WEB_UNPLUGGED_PUBLIC="^unplugged/",Nq.WEB_CREATOR="^creator/",Nq.WEB_KIDS="^kids/",Nq.WEB_EXPERIMENTS="^experiments/",Nq.WEB_MUSIC="^music/",Nq.WEB_REMIX="^music/",Nq.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Nq.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Nq);
function Pq(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Oq[b];if(c){var d=new RegExp(c),e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Oq).forEach(function(g){var h=q(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Qq(a,b){return{method:void 0===b?"POST":b,mode:hi(a)?"same-origin":"cors",credentials:hi(a)?"same-origin":"include"}}
;function Rq(){}
Rq.prototype.s=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Cq:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=vb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;cj.getInstance();var m="USER_INTERFACE_THEME_LIGHT";fj(165)?m="USER_INTERFACE_THEME_DARK":fj(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Eq()||m;h.userInterfaceTheme=k;if(!f){if(k=
mj())h.connectionType=k;M("web_log_effective_connection_type")&&(k=nj())&&(g.client.effectiveConnectionType=k)}var p;if(M("web_log_memory_total_kbytes")&&(null==(p=x.navigator)?0:p.deviceMemory)){var u;p=null==(u=x.navigator)?void 0:u.deviceMemory;g.client.memoryTotalKbytes=""+1E6*p}u=fi(x.location.href);!M("web_populate_internal_geo_killswitch")&&u.internalcountrycode&&(h.internalGeo=u.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},M("kevlar_woffle")&&
Xi.i&&(h.mainAppWebInfo.pwaInstallabilityStatus=Xi.i.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Yi(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(u=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:u})),u=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:u}));
if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var y=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Na){}y=void 0}y&&(h.timeZone=y)}(y=Ph())?h.experimentsToken=y:delete h.experimentsToken;y=Qh();Fq.i||(Fq.i=new Fq);h=Fq.i.i;u=[];p=0;for(var v in h)u[p++]=h[v];g.request=Object.assign({},g.request,{internalExperimentFlags:y,consistencyTokenJars:u});!M("web_prequest_context_killswitch")&&(v=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
v);y=cj.getInstance();v=fj(58);y=y.get("gsml","");g.user=Object.assign({},g.user);v&&(g.user.enableSafetyMode=v);y&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=Vp())&&(g.clientScreenNonce=f):!f&&(f=Vp())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=A("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&Iq.getInstance().setLocationOnInnerTubeContext(g);try{var E=ii(),F=E.bid;delete E.bid;g.adSignalsInfo={params:[],bid:F};
var H=q(Object.entries(E));for(var R=H.next();!R.done;R=H.next()){var O=q(R.value),S=O.next().value,ja=O.next().value;E=S;F=ja;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:E,value:""+F})}}catch(Na){Cp(Na)}H=g}else Cp(Error("Error: No InnerTubeContext shell provided in ytconfig.")),H={};H={context:H};if(R=this.i(a)){this.j(H,R,b);var N;b="/youtubei/v1/"+Pq(this.l());var Ba;(a=null==(N=a.commandMetadata)?void 0:null==(Ba=N.webCommandMetadata)?void 0:Ba.apiUrl)&&(b=a);N=b;(Ba=L("INNERTUBE_HOST_OVERRIDE"))&&
(N=String(Ba)+String(dc(N)));Ba={};Ba.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(Ba.prettyPrint="false");N=gi(N,Ba||{},!1);N={input:N,oa:Qq(N),Z:H,config:Object.assign({},void 0)};N.config.Ea?N.config.Ea.identity=c:N.config.Ea={identity:c};return N}Cp(new Q("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Rq.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Sq(){}
r(Sq,Rq);Sq.prototype.s=function(){return{input:"/getDatasyncIdsEndpoint",oa:Qq("/getDatasyncIdsEndpoint","GET"),Z:{}}};
Sq.prototype.l=function(){return[]};
Sq.prototype.i=function(){};
Sq.prototype.j=function(){};var Tq={},Uq=(Tq.GET_DATASYNC_IDS=Mq(Sq),Tq);function Vq(a){var b=Ja.apply(1,arguments);if(!Wq(a)||b.some(function(d){return!Wq(d)}))throw Error("Only objects may be merged.");
b=q(b);for(var c=b.next();!c.done;c=b.next())Xq(a,c.value);return a}
function Xq(a,b){for(var c in b)if(Wq(b[c])){if(c in a&&!Wq(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Xq(a[c],b[c])}else if(Yq(b[c])){if(c in a&&!Yq(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Zq(a[c],b[c])}else a[c]=b[c];return a}
function Zq(a,b){b=q(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Wq(c)?a.push(Xq({},c)):Yq(c)?a.push(Zq([],c)):a.push(c);return a}
function Wq(a){return"object"===typeof a&&!Array.isArray(a)}
function Yq(a){return"object"===typeof a&&Array.isArray(a)}
;function $q(a,b){Fl.call(this,1,arguments);this.timer=b}
r($q,Fl);var ar=new Gl("aft-recorded",$q);var br=window;function cr(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var T=br.performance||br.mozPerformance||br.msPerformance||br.webkitPerformance||new cr;var dr=!1,er={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(T.clearResourceTimings||T.webkitClearResourceTimings||T.mozClearResourceTimings||T.msClearResourceTimings||T.oClearResourceTimings||bb,T);function fr(a){var b=gr(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function hr(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null==T?void 0:null==(a=T.getEntriesByType)?void 0:null==(b=a.call(T,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=ir(e.requestStart),e.responseEnd=ir(e.responseEnd),e.redirectStart=ir(e.redirectStart),e.redirectEnd=ir(e.redirectEnd),e.domainLookupEnd=ir(e.domainLookupEnd),e.connectStart=ir(e.connectStart),e.connectEnd=ir(e.connectEnd),e.responseStart=ir(e.responseStart),
e.secureConnectionStart=ir(e.secureConnectionStart),e.domainLookupStart=ir(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=T.timing}else a=T.timing;return a}
function jr(){return M("csi_use_time_origin")&&T.timeOrigin?Math.floor(T.timeOrigin):T.timing.navigationStart}
function ir(a){return Math.round(jr()+a)}
function kr(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function lr(a){a=kr(a);a.info||(a.info={});return a.info}
function gr(a){a=kr(a);a.tick||(a.tick={});return a.tick}
function mr(a){a=kr(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function nr(a){a=mr(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function or(a){var b=kr(a).nonce;b||(b=Kp(),kr(a).nonce=b);return b}
function pr(a){var b=gr(a||""),c=fr(a);c&&!dr&&(Ll(ar,new $q(Math.round(c-b._start),a)),dr=!0)}
function qr(a,b){for(var c=q(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!qr(a[d],b[d]))return!1;return!0}
;function rr(){if(T.getEntriesByType){var a=T.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return ir(a.startTime)}a=T.timing;
return a.ac?Math.max(0,a.ac):0}
;function sr(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function tr(a){a=a||"";var b=A("ytcsi.reference");b||(sr(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=sr(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},ur=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U.browse="LATENCY_ACTION_BROWSE",U.cast_splash="LATENCY_ACTION_CAST_SPLASH",
U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
U.embed="LATENCY_ACTION_EMBED",U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.explore="LATENCY_ACTION_EXPLORE",U.home="LATENCY_ACTION_HOME",U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_ONBOARDING",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",U.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_LOGIN",U.reel_watch="LATENCY_ACTION_REEL_WATCH",U.results="LATENCY_ACTION_RESULTS",
U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.seek="LATENCY_ACTION_PLAYER_SEEK",U.settings="LATENCY_ACTION_SETTINGS",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",U.watch="LATENCY_ACTION_WATCH",U.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U),V={},vr=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",
V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",
V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",
V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm=
"shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",
V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),wr="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
xr={},yr=(xr.ccs="CANARY_STATE_",xr.mver="MEASUREMENT_VERSION_",xr.pis="PLAYER_INITIALIZED_STATE_",xr.yt_pt="LATENCY_PLAYER_",xr.pa="LATENCY_ACTION_",xr.ctop="TOP_ENTITY_TYPE_",xr.yt_vst="VIDEO_STREAM_TYPE_",xr),zr="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Ar(a){return ur[a]||"LATENCY_ACTION_UNKNOWN"}
function Br(a,b,c){c=mr(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in vr){c=vr[a];0<=db(wr,c)&&(b=!!b);a in yr&&"string"===typeof b&&(b=yr[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Vq({},d)}0<=db(zr,a)||Dp(new Q("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,
LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,
LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,
LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,
LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,
LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,
LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,
LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,
LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,
LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,
LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";
W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";
W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";
W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";
W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";
W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";
W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";
W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";
W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";
W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";
W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Cr={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Cr[Cr.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Cr[Cr.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Cr[Cr.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Dr={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Dr[Dr.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Dr[Dr.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Dr[Dr.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Dr[Dr.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Dr[Dr.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Dr[Dr.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Dr[Dr.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Dr[Dr.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Er={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Er[Er.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Er[Er.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Er[Er.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Er[Er.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Fr={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Fr[Fr.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Fr[Fr.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Gr={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Gr[Gr.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Gr[Gr.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Gr[Gr.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Gr[Gr.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Gr[Gr.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Gr[Gr.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Hr={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Hr[Hr.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Hr[Hr.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Hr[Hr.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Hr[Hr.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Ir={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Ir[Ir.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Ir[Ir.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Ir[Ir.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Jr={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Jr[Jr.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Jr[Jr.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Jr[Jr.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Kr="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Lr=x.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Lr);function Mr(){this.i=0}
function Nr(){Mr.i||(Mr.i=new Mr);return Mr.i}
Mr.prototype.tick=function(a,b,c,d){Or(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new vh,C(d,1,a),C(d,2,b),a=new yh,od(a,5,zh,d),pp(a,c)):Xj("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Mr.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Or(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Xj("latencyActionInfo",a,{cttAuthInfo:c}))};
Mr.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Or(this,"info_"+d+"_"+b)||(C(a,2,b),b={cttAuthInfo:c},c=new yh,od(c,7,zh,a),pp(c,b))};
Mr.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Or(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Xj("latencyActionSpan",a,{cttAuthInfo:c}))};
function Or(a,b){Lr[b]=Lr[b]||{count:0};var c=Lr[b];c.count++;c.time=P();a.i||(a.i=Hj(function(){var d=P(),e;for(e in Lr)Lr[e]&&6E4<d-Lr[e].time&&delete Lr[e];a&&(a.i=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Dp(c)),!0):!1}
;function Pr(){var a=["ol"];tr("").info.actionType="embed";a&&Lh("TIMING_AFT_KEYS",a);Lh("TIMING_ACTION","embed");Qr();a=lr();var b=nr();if("cold"===a.yt_lt||"cold"===b.loadType){var c=gr(),d=mr();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||Z(e,c[e]);e={};c=!1;d=q(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=Br(f,a[f]))&&!qr(nr(),f)&&(Vq(b,f),Vq(e,f),c=!0);c&&Rr(e)}z("ytglobal.timingready_",!0);a=L("TIMING_ACTION");A("ytglobal.timingready_")&&a&&"_start"in gr()&&
fr()&&pr()}
function Sr(a,b,c,d){null!==b&&(lr(c)[a]=b,(a=Br(a,b,c))&&Rr(a,c,d))}
function Rr(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=tr(b||""),Vq(c.info,a),Vq(nr(b),a),c=or(b),b=kr(b).cttAuthInfo,Nr().info(a,c,b);else{c=new ph;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":rh(c,W[a[e]]);break;case "clientActionNonce":C(c,2,a[e]);break;case "clientScreenNonce":C(c,4,a[e]);break;case "loadType":C(c,3,a[e]);break;case "isPrewarmedLaunch":C(c,92,a[e]);break;case "isFirstInstall":C(c,55,a[e]);break;case "networkType":C(c,
5,Cr[a[e]]);break;case "connectionType":C(c,26,X[a[e]]);break;case "detailedConnectionType":C(c,27,Y[a[e]]);break;case "isVisible":C(c,6,a[e]);break;case "playerType":C(c,7,Dr[a[e]]);break;case "clientPlaybackNonce":C(c,8,a[e]);break;case "adClientPlaybackNonce":C(c,28,a[e]);break;case "previousCpn":C(c,77,a[e]);break;case "targetCpn":C(c,76,a[e]);break;case "isMonetized":C(c,9,a[e]);break;case "isPrerollAllowed":C(c,16,a[e]);break;case "isPrerollShown":C(c,17,a[e]);break;case "adType":C(c,12,a[e]);
break;case "adTypesAllowed":C(c,36,a[e]);break;case "adNetworks":C(c,37,a[e]);break;case "previousAction":C(c,13,W[a[e]]);break;case "isRedSubscriber":C(c,14,a[e]);break;case "serverTimeMs":C(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":C(c,20,a[e]);break;case "targetVideoId":C(c,78,a[e]);break;case "adBreakType":C(c,21,Er[a[e]]);break;case "isNavigation":sh(c,a[e]);break;case "viewportHeight":C(c,29,a[e]);break;case "viewportWidth":C(c,30,a[e]);break;case "screenHeight":C(c,
84,a[e]);break;case "screenWidth":C(c,85,a[e]);break;case "browseId":C(c,31,a[e]);break;case "isCacheHit":C(c,32,a[e]);break;case "httpProtocol":C(c,33,a[e]);break;case "transportProtocol":C(c,34,a[e]);break;case "searchQuery":C(c,41,a[e]);break;case "isContinuation":C(c,42,a[e]);break;case "availableProcessors":C(c,43,a[e]);break;case "sdk":C(c,44,a[e]);break;case "isLocalStream":C(c,45,a[e]);break;case "navigationRequestedSameUrl":C(c,64,a[e]);break;case "shellStartupDurationMs":C(c,70,a[e]);break;
case "appInstallDataAgeMs":C(c,73,a[e]);break;case "latencyActionError":C(c,71,Fr[a[e]]);break;case "actionStep":C(c,79,a[e]);break;case "jsHeapSizeLimit":C(c,80,a[e]);break;case "totalJsHeapSize":C(c,81,a[e]);break;case "usedJsHeapSize":C(c,82,a[e]);break;case "sourceVideoDurationMs":C(c,90,a[e]);break;case "videoOutputFrames":C(c,93,a[e]);break;case "adPrebufferedTimeSecs":C(c,39,a[e]);break;case "isLivestream":C(c,47,a[e]);break;case "liveStreamMode":C(c,91,Gr[a[e]]);break;case "adCpn2":C(c,48,
a[e]);break;case "adDaiDriftMillis":C(c,49,a[e]);break;case "videoStreamType":C(c,53,Hr[a[e]]);break;case "playbackRequiresTap":C(c,56,a[e]);break;case "performanceNavigationTiming":C(c,67,a[e]);break;case "transactionType":C(c,74,Ir[a[e]]);break;case "playerRotationType":C(c,101,Jr[a[e]]);break;case "allowedPreroll":C(c,10,a[e]);break;case "shownPreroll":C(c,11,a[e]);break;case "getHomeRequestId":C(c,57,a[e]);break;case "getSearchRequestId":C(c,60,a[e]);break;case "getPlayerRequestId":C(c,61,a[e]);
break;case "getWatchNextRequestId":C(c,62,a[e]);break;case "getBrowseRequestId":C(c,63,a[e]);break;case "getLibraryRequestId":C(c,66,a[e]);break;default:Kr.includes(f)&&Uh(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Uh(Error("Codegen laipb translator failed to set "+f))}}Tr(c,b)}}
function Tr(a,b){var c=mr(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);tr(b||"").jspbInfo.push(a);c=or(b);b=kr(b).cttAuthInfo;Nr().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;T.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),T.mark(d))}tr(c||"").tick[a]=b||P();d=mr(c);d.gelTicks&&(d.gelTicks[a]=!0);d=gr(c);var e=b||P();d[a]=e;e=or(c);var f=kr(c).cttAuthInfo;if("_start"===a){var g=Nr();Or(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new nh,C(f,1,e),e=new yh,od(e,6,zh,f),pp(e,b)):Xj("latencyActionBaselined",{clientActionNonce:e},b))}else Nr().tick(a,e,b,f);pr(c);return d[a]}
function Ur(){var a=or();requestAnimationFrame(function(){setTimeout(function(){a===or()&&Z("ol",void 0,void 0)},0)})}
function Vr(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=gn+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Qr(){function a(f){var g=hr(),h=jr();h&&(Z("srt",g.responseStart),1!==f.prerender&&Z("_start",h,void 0));f=rr();0<f&&Z("fpt",f);f=hr();f.isPerformanceNavigationTiming&&Rr({performanceNavigationTiming:!0});Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,
void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=jr()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));T&&"getEntriesByType"in T&&Wr()}
var b=L("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=Xr(b);Tr(b);b=rh(sh(new ph,!0),W[Ar(L("TIMING_ACTION"))]);var c=L("PREVIOUS_ACTION");c&&C(b,13,W[Ar(c)]);(c=L("CLIENT_PROTOCOL"))&&C(b,33,c);(c=L("CLIENT_TRANSPORT"))&&C(b,34,c);(c=Vp())&&"UNDEFINED_CSN"!==c&&C(b,4,c);c=Vr();1!==c&&-1!==c||C(b,6,!0);c=lr();C(b,3,"cold");a(c);c=Yr();if(0<c.length){c=q(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new oh;C(e,1,d);pd(b,83,oh,e)}}Tr(b)}else{for(c in b)b.hasOwnProperty(c)&&Sr(c,b[c]);b=
{isNavigation:!0,actionType:Ar(L("TIMING_ACTION"))};if(c=L("PREVIOUS_ACTION"))b.previousAction=Ar(c);if(c=L("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=L("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=Vp())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=Vr();if(1===c||-1===c)b.isVisible=!0;c=lr();b.loadType="cold";a(c);c=Yr();if(0<c.length)for(b.resourceInfo=[],c=q(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});Rr(b)}}
function Xr(a){var b=new ph;a=q(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=q(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetGuide_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetHome_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetPlayer_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetSearch_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;
case "GetSettings_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetTrending_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetWatchNext_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "yt_red":C(b,14,!!d);break;case "yt_ad":C(b,9,!!d)}}return b}
function Zr(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Xb()&&a.setAttribute("nonce",Xb());return c?(a=T.getEntriesByName(c))&&a[0]&&(a=a[0],c=jr(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Yr(){var a=[];if(document.querySelector&&T&&T.getEntriesByName)for(var b in er)if(er.hasOwnProperty(b)){var c=er[b];Zr(b,c)&&a.push(c)}return a}
function Wr(){var a=window.location.protocol,b=T.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",ir(b.startTime)),Z("wffe",ir(b.responseEnd)))}
var $r=window;$r.ytcsi&&($r.ytcsi.info=Sr,$r.ytcsi.tick=Z);var as="tokens consistency mss client_location entities store".split(" ");function bs(a,b,c,d){this.s=a;this.J=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.xa||(a.xa={});a.xa=Object.assign({},Uq,a.xa)}
function cs(a,b,c,d){if(void 0!==bs.i){if(d=bs.i,a=[a!==d.s,b!==d.J,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else bs.i=new bs(a,b,c,d)}
function ds(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Cq:c;var d=Lq(b,a.s);if(!d)return Zf(new Q("Error: No request builder found for command.",b));var e=d.s(b,void 0,c);return e?new Uf(function(f){var g,h,k;return w(function(m){if(1==m.i){h="cors"===(null==(g=e.oa)?void 0:g.mode)?"cors":void 0;if(a.m.xc){var p=e.config,u;p=null==p?void 0:null==(u=p.Ea)?void 0:u.sessionIndex;u=tq({sessionIndex:p});k=Object.assign({},es(h),u);return m.u(2)}return t(m,fs(e.config,
h),3)}2!=m.i&&(k=m.j);f(gs(a,e,k));m.i=0})}):Zf(new Q("Error: Failed to build request for command.",b))}
function gs(a,b,c){var d,e,f,g,h,k,m,p,u,y,v,E,F,H,R,O,S,ja;return w(function(N){switch(N.i){case 1:N.u(2);break;case 3:if((d=N.j)&&!d.isExpired())return N.return(Promise.resolve(d.i()));case 2:if((f=null==(e=b.config)?void 0:e.sp)&&a.i.has(f)&&M("web_memoize_inflight_requests"))return N.return(a.i.get(f));if(null==(g=b)?0:null==(h=g.Z)?0:h.context)for(k=q([]),m=k.next();!m.done;m=k.next())p=m.value,p.qp(b.Z.context);if(null==(u=a.j)?0:u.vp(b.input,b.Z))return N.return(a.j.lp(b.input,b.Z));y=JSON.stringify(b.Z);
b.oa=Object.assign({},b.oa,{headers:c});v=Object.assign({},b.oa);"POST"===b.oa.method&&(v=Object.assign({},v,{body:y}));(null==(E=b.config)?0:E.ic)&&Z(b.config.ic);F=a.J.fetch(b.input,v,b.config);f&&a.i.set(f,F);return t(N,F,4);case 4:H=N.j;f&&a.i.has(f)&&a.i.delete(f);(null==(R=b.config)?0:R.jc)&&Z(b.config.jc);if(H||null==(O=a.j)||!O.gp(b.input,b.Z)){N.u(5);break}return t(N,a.j.kp(b.input,b.Z),6);case 6:H=N.j;case 5:if(H&&a.l)for(S=q(as),m=S.next();!m.done;m=S.next())ja=m.value,a.l[ja]&&a.l[ja].handleResponse(H,
b);return N.return(H)}})}
function fs(a,b){var c,d,e,f;return w(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Ea)?void 0:d.sessionIndex;var h=tq({sessionIndex:e});if(!(h instanceof Uf)){var k=new Uf(bb);Vf(k,2,h);h=k}return t(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},es(b),f)))})}
function es(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),M("forward_domain_admin_state_on_embeds")&&(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var hs=["share/get_web_player_share_panel"],is=["feedback"],js=["notification/modify_channel_preference"],ks=["browse/edit_playlist"],ls=["subscription/subscribe"],ms=["subscription/unsubscribe"];function ns(){}
r(ns,Rq);ns.prototype.l=function(){return ls};
ns.prototype.i=function(a){return a.subscribeEndpoint};
ns.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(ns.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function os(){}
r(os,Rq);os.prototype.l=function(){return ms};
os.prototype.i=function(a){return a.unsubscribeEndpoint};
os.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(os.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ps(){}
r(ps,Rq);ps.prototype.l=function(){return is};
ps.prototype.i=function(a){return a.feedbackEndpoint};
ps.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(ps.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function qs(){}
r(qs,Rq);qs.prototype.l=function(){return js};
qs.prototype.i=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
qs.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function rs(){}
r(rs,Rq);rs.prototype.l=function(){return ks};
rs.prototype.i=function(a){return a.playlistEditEndpoint};
rs.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function ss(){}
r(ss,Rq);ss.prototype.l=function(){return hs};
ss.prototype.i=function(a){return a.webPlayerShareEntityServiceEndpoint};
ss.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var xq=new vq("NETWORK_SLI_TOKEN");function ts(a){this.i=a}
ts.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.i&&(d=ac(bc(5,nc(a)))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Dp(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Dp(g)}))})};
ts.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Dp(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
ts[uq]=[new wq];var us=new vq("NETWORK_MANAGER_TOKEN");var vs;function ws(a){Fl.call(this,1,arguments);this.csn=a}
r(ws,Fl);var Ol=new Gl("screen-created",ws),xs=[],zs=ys,As=0;function Bs(a,b,c,d,e,f,g){function h(){Dp(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=zs();f=new Op({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,V:k};if(M("il_via_jspb")){var m=new dh;m.P(k);eh(m,f.getAsJspb());c&&c.visualElement?(f=new fh,c.clientScreenNonce&&C(f,2,c.clientScreenNonce),gh(f,c.visualElement.getAsJspb()),g&&C(f,4,Ah[g]),D(m,5,f)):c&&h();d&&C(m,3,d);tp(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?Zo("screenCreated",f,a,e):Xj("screenCreated",f,e);Ll(Ol,new ws(k));return k}
function Cs(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Xp(b),
V:b};d=q(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&Dp(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new hh;h.P(b);jh(h,c.getAsJspb());gb(e,function(k){k=k.getAsJspb();pd(h,3,bh,k)});
"UNDEFINED_CSN"==b?Ds("visualElementAttached",h,f):up(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:gb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Ds("visualElementAttached",c,f):a?Zo("visualElementAttached",c,a,f):Xj("visualElementAttached",c,f)}
function ys(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Lc(b,3)}
function Ds(a,b,c){xs.push({payloadName:a,payload:b,options:c});As||(As=Pl())}
function Ql(a){if(xs){for(var b=q(xs),c=b.next();!c.done;c=b.next()){var d=c.value;if(d.payload)if(M("il_via_jspb"))switch(d.payload.P(a.csn),d.payloadName){case "screenCreated":tp(d.payload,d.options);break;case "visualElementAttached":up(d.payload,d.options);break;case "visualElementShown":c=d.payload;d=d.options;var e=new yh;od(e,72,zh,c);pp(e,d);break;case "visualElementHidden":qp(d.payload,d.options);break;case "visualElementGestured":rp(d.payload,d.options);break;case "visualElementStateChanged":sp(d.payload,
d.options);break;default:Dp(new Q("flushQueue unable to map payloadName to JSPB setter"))}else d.payload.csn=a.csn,Zo(d.payloadName,d.payload,null,d.options)}xs.length=0}As=0}
;function Es(){this.j=new Set;this.i=new Set;this.l=new Map}
Es.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Ma(Es);function Fs(){this.s=[];this.D=[];this.i=[];this.m=[];this.o=[];this.j=new Set;this.v=new Map}
function Gs(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=Vp(c),f=Tp(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Cs(a.client,e,f,[Pp(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Cs(a.client,e,f,[Pp(d.playerResponse.trackingParams)])}})}
function Hs(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.s.push([b,c]);else{var e=Vp(d);c=c||Tp(d);e&&c&&Cs(a.client,e,c,[b])}}
Fs.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Vp(void 0===c?0:c)){a=this.client;var e=Pp(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:Xp(c),V:c};if(M("il_via_jspb")){var g=new kh;g.P(c);e=e.getAsJspb();D(g,2,e);C(g,4,Ah[f]);b&&D(g,3);"UNDEFINED_CSN"==c?Ds("visualElementGestured",g,d):rp(g,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?Ds("visualElementGestured",f,d):a?Zo("visualElementGestured",
f,a,d):Xj("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Is(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){Js(a,b,c);var f=Tp(c.layer);if(f){for(var g=q(a.s),h=g.next();!h.done;h=g.next())h=h.value,Hs(a,h[0],h[1]||f,c.layer);f=q(a.D);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Vp(g);var m=k[0]||Tp(g);if(h&&m){g=a.client;var p=k[1];k={cttAuthInfo:Xp(h),V:h};M("il_via_jspb")?(p=new mh,p.P(h),m=m.getAsJspb(),D(p,2,m),"UNDEFINED_CSN"==h?Ds("visualElementStateChanged",p,k):sp(p,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:p},"UNDEFINED_CSN"==h?Ds("visualElementStateChanged",m,k):g?Zo("visualElementStateChanged",m,g,k):Xj("visualElementStateChanged",m,k))}}}};
Vp(c.layer)||a.l();if(c.pb)for(var d=q(c.pb),e=d.next();!e.done;e=d.next())Gs(a,e.value,c.layer);else Cp(Error("Delayed screen needs a data promise."))}
function Js(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.cc?c.cc:c.layer;var e=Vp(d);d=Tp(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Bs(a.client,b,f,c.ob,c.cttAuthInfo,g,c.jp)}catch(m){Fp(m,{tp:b,rootVe:d,parentVisualElement:void 0,hp:e,np:f,ob:c.ob});Cp(m);return}Yp(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=q(Object.values(Np));for(f=b.next();!f.done;f=b.next())if(Vp(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:Xp(e),V:e,rb:g},M("il_via_jspb")?(h=new lh,h.P(e),d=d.getAsJspb(),D(h,2,d),C(h,4,g?16:8),"UNDEFINED_CSN"==e?Ds("visualElementHidden",h,f):qp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Ds("visualElementHidden",d,f):b?Zo("visualElementHidden",d,b,f):Xj("visualElementHidden",
d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");Rr({clientScreenNonce:k});Es.getInstance().clear();d=Tp(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e={cttAuthInfo:Xp(k),V:k},M("il_via_jspb")?(b=new lh,b.P(k),f=d.getAsJspb(),D(b,2,f),C(b,4,1),"UNDEFINED_CSN"==k?Ds("visualElementShown",b,e):(k=new yh,od(k,72,zh,b),pp(k,e))):(b={csn:k,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==k?Ds("visualElementShown",b,e):
Xj("visualElementShown",b,e)));a.j.delete(c.layer||0);a.l=void 0;e=q(a.v);for(k=e.next();!k.done;k=e.next())b=q(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Hs(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Cp(m)}}for(c=a.m.length=0;c<a.o.length;c++){e=a.o[c];try{e()}catch(m){Cp(m)}}}
;function Ks(){var a,b;return w(function(c){if(1==c.i)return a=bs.i,a?t(c,ds(a),2):(Dp(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Dp(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.ip);Dp(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var Ls=x.caches,Ms;function Ns(a){var b=a.indexOf(":");return-1===b?{Ab:a}:{Ab:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Os(){return w(function(a){if(void 0!==Ms)return a.return(Ms);Ms=new Promise(function(b){var c;return w(function(d){switch(d.i){case 1:return wa(d,2),t(d,Ls.open("test-only"),4);case 4:return t(d,Ls.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(Ms)})}
function Ps(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.i)return t(k,Os(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return t(k,Ls.keys(),3)}c=k.j;d=q(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Ns(f),h=g.datasyncId,!h||a.includes(h)||b.push(Ls.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(p){return p})}))})}
function Qs(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.i)return t(h,Os(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=bk("cache contains other");return t(h,Ls.keys(),3)}b=h.j;c=q(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Ns(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Rs(){try{return!!self.localStorage}catch(a){return!1}}
;function Ss(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Ts(a){if(Rs()){var b=Object.keys(window.localStorage);b=q(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ss(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Us(){if(!Rs())return!1;var a=bk(),b=Object.keys(window.localStorage);b=q(b);for(var c=b.next();!c.done;c=b.next())if(c=Ss(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Vs(){Ks().then(function(a){a&&(ml(a),Ps(a),Ts(a))})}
function Ws(){var a=new Am;$e.M(function(){var b,c,d,e;return w(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=bk("clear");if(b.startsWith("V")){var g=[b];ml(g);Ps(g);Ts(g);return f.return()}c=Us();return t(f,Qs(),3);case 3:return d=f.j,t(f,nl(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.H()?Vs():a.m.add("publicytnetworkstatus-online",Vs,!0,void 0,void 0),f.i=0}})})}
;function Xs(a){a&&(a.dataset?a.dataset[Ys("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Zs(a,b){return a?a.dataset?a.dataset[Ys(b)]:a.getAttribute("data-"+b):null}
var $s={};function Ys(a){return $s[a]||($s[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var at=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,bt=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ct(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(at,""),c=c.replace(bt,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else dt(a,b,c)}
function dt(a,b,c){c=void 0===c?null:c;var d=et(a),e=document.getElementById(d),f=e&&Zs(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Bn(d,b),b=""+Ra(b),ft[b]=f),g||(e=gt(a,d,function(){Zs(e,"loaded")||(Xs(e),En(d),ni(Xa(Fn,d),0))},c)))}
function gt(a,b,c,d){d=void 0===d?null:d;var e=Kd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gd(e,Ib(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ht(a){a=et(a);var b=document.getElementById(a);b&&(Fn(a),b.parentNode.removeChild(b))}
function jt(a,b){a&&b&&(a=""+Ra(b),(a=ft[a])&&Dn(a))}
function et(a){var b=document.createElement("a");Ub(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var ft={};var kt=[],lt=!1;function mt(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&iq()){var a=L("PLAYER_VARS",{});if(!("1"==qb(a)||M("embeds_web_disable_ads_for_pfl")&&"EMBEDDED_PLAYER_MODE_PFL"===jq(a))){var b=function(){lt=!0;"google_ad_status"in window?Lh("DCLKSTAT",1):Lh("DCLKSTAT",2)};
try{ct("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}kt.push($e.M(function(){if(!(lt||"google_ad_status"in window)){try{jt("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}lt=!0;Lh("DCLKSTAT",3)}},5E3))}}}
function pt(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function qt(){this.state=1;this.i=null}
qt.prototype.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Cb("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=zb())?f.createScript(e):e,e=(new Eb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Cb("From proto message. b/166824318"),d=Ib(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());
rt(this,e,d,a.program,b,c)}else Dp(Error("Cannot initialize botguard without program"))};
function rt(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,ct(c,function(){window[g]?st(a,d,g,e):(a.state=3,ht(c),Dp(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=Kd("SCRIPT"),f.textContent=b,f.nonce=Xb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?st(a,d,g,e):(a.state=4,Dp(new Q("Unable to load Botguard from JS")))):Dp(new Q("Unable to load VM; no url or JS provided"))}
qt.prototype.isInitialized=function(){return!!this.i};
function st(a,b,c,d){a.state=5;try{var e=new zd({program:b,globalName:c});e.uc.then(function(){a.state=6;d&&d(b)});
tt(a,e)}catch(f){a.state=7,f instanceof Error&&Dp(f)}}
qt.prototype.invoke=function(a){a=void 0===a?{}:a;if(this.i){var b=this.i;a={nb:a};if(b.j)throw Error("Already disposed");b=b.m([a.nb,a.wc])}else b=null;return b};
qt.prototype.dispose=function(){tt(this,null);this.state=8};
function tt(a,b){ne(a.i);a.i=b}
;var ut=new qt;function vt(){return ut.isInitialized()}
function wt(a){a=void 0===a?{}:a;return ut.invoke(a)}
;function xt(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Mj():d;this.m=c;this.l=d;this.j=new yd;this.i=a;a={};c=q(this.i.entries());for(d=c.next();!d.done;a={qa:a.qa,za:a.za},d=c.next()){var e=q(d.value);d=e.next().value;e=e.next().value;a.za=d;a.qa=e;d=function(f){return function(){f.qa.bb();b.i[f.za].Qa=!0;b.i.every(function(g){return!0===g.Qa})&&b.j.resolve()}}(a);
e=Ij(d,zt(this,a.qa));this.i[a.za]=Object.assign({},a.qa,{bb:d,Ma:e})}}
function At(a){var b=Array.from(a.i.keys()).sort(function(d,e){return zt(a,a.i[e])-zt(a,a.i[d])});
b=q(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.Ma||c.Qa||(a.l.S(c.Ma),Ij(c.bb,10))}
xt.prototype.cancel=function(){for(var a=q(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Ma||b.Qa||this.l.S(b.Ma),b.Qa=!0;this.j.resolve()};
function zt(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function Bt(a){this.state=a;this.plugins=[];this.o=void 0}
Bt.prototype.install=function(){this.plugins.push.apply(this.plugins,fa(Ja.apply(0,arguments)))};
Bt.prototype.transition=function(a,b){var c=this,d=this.D.find(function(f){return f.from===c.state&&f.B===a});
if(d){this.l&&(At(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ct(this,e,this.o),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ct(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
Mj();var g={};e=q(e);for(var h=e.next();!h.done;g={Aa:g.Aa},h=e.next())g.Aa=h.value,Kj(function(k){return function(){k.Aa.ia.apply(k.Aa,fa(d))}}(g));
f=f.map(function(k){var m;return{bb:function(){k.ia.apply(k,fa(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new xt(f))}}
da.Object.defineProperties(Bt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Dt(a){Bt.call(this,void 0===a?"document_active":a);var b=this;this.o=10;this.i=new Map;this.D=[{from:"document_active",B:"document_disposed_preventable",action:this.v},{from:"document_active",B:"document_disposed",action:this.m},{from:"document_disposed_preventable",B:"document_disposed",action:this.m},{from:"document_disposed_preventable",B:"flush_logs",action:this.s},{from:"document_disposed_preventable",B:"document_active",action:this.j},{from:"document_disposed",B:"flush_logs",action:this.s},
{from:"document_disposed",B:"document_active",action:this.j},{from:"document_disposed",B:"document_disposed",action:function(){}},
{from:"flush_logs",B:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(Dt,Bt);Dt.prototype.v=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Dt.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
Dt.prototype.s=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Dt.prototype.j=function(){this.i=new Map};function Et(a){Bt.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.D=[{from:"document_visibility_unknown",B:"document_visible",action:this.j},{from:"document_visibility_unknown",B:"document_hidden",action:this.i},{from:"document_visibility_unknown",B:"document_foregrounded",action:this.s},{from:"document_visibility_unknown",B:"document_backgrounded",action:this.m},{from:"document_visible",B:"document_hidden",action:this.i},{from:"document_visible",B:"document_foregrounded",action:this.s},
{from:"document_visible",B:"document_visible",action:this.j},{from:"document_foregrounded",B:"document_visible",action:this.j},{from:"document_foregrounded",B:"document_hidden",action:this.i},{from:"document_foregrounded",B:"document_foregrounded",action:this.s},{from:"document_hidden",B:"document_visible",action:this.j},{from:"document_hidden",B:"document_backgrounded",action:this.m},{from:"document_hidden",B:"document_hidden",action:this.i},{from:"document_backgrounded",B:"document_hidden",action:this.i},
{from:"document_backgrounded",B:"document_backgrounded",action:this.m},{from:"document_backgrounded",B:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(Et,Bt);Et.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Et.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Et.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Et.prototype.s=function(a,b){a(null==b?void 0:b.event)};function Ft(){this.i=new Dt;this.j=new Et}
Ft.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,fa(a));this.j.install.apply(this.j,fa(a))};function Gt(){Ft.call(this);var a={};this.install((a.document_disposed={ia:this.l},a));a={};this.install((a.flush_logs={ia:this.m},a))}
var Ht;r(Gt,Ft);Gt.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new ah,b=Vp();b&&a.P(b);b=new yh;od(b,380,zh,a);pp(b);M("web_fp_via_jspb_and_json")&&Xj("finalPayload",{csn:Vp()})}else Xj("finalPayload",{csn:Vp()})};
Gt.prototype.l=function(){Hp(Ip)};function It(){}
It.getInstance=function(){var a=A("ytglobal.storage_");a||(a=new It,z("ytglobal.storage_",a));return a};
It.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Jt()):d.return()})};
function Jt(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",It);function Vj(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=Oh("ytidb_transaction_ended_event_rate_limit",.02)}
Vj.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Kt(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function Kt(a,b){It.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Lt(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Lt(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function Lt(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Mt(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.channel="widget";this.L=!!a;this.A=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.L&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.v||0<=db(d.v,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.v=this.j=this.o=null;window.addEventListener("message",this.A)}
r(Mt,J);Mt.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Vh(d)}}};
Mt.prototype.I=function(){window.removeEventListener("message",this.A);J.prototype.I.call(this)};function Nt(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new Mt(!!L("WIDGET_ID_ENFORCE")),b=this.fc.bind(this);a.o=b;a.v=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=Nt.prototype;l.fc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,Ot(this,a)),this.l[a]=!0)):this.ib(a,b,c)};
l.ib=function(){};
function Ot(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Tb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Wa());this.sendMessage("onReady");eb(this.j,this.Gb,this);this.j=[]};
l.Wa=function(){return null};
function Pt(a,b){a.sendMessage("infoDelivery",b)}
l.Gb=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.Gb({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};function Qt(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Rt(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function St(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Tt(a){Nt.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.qc.bind(this));this.addEventListener("onVolumeChange",this.sc.bind(this));this.addEventListener("onApiChange",this.kc.bind(this));this.addEventListener("onPlaybackQualityChange",this.nc.bind(this));this.addEventListener("onPlaybackRateChange",this.oc.bind(this));this.addEventListener("onStateChange",this.pc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.tc.bind(this))}
r(Tt,Nt);l=Tt.prototype;
l.ib=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Qt(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Rt(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Rt(e);break;case "loadPlaylist":case "cuePlaylist":e=St(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Qt(a)&&Pt(this,this.Wa())}};
l.onReady=function(){var a=this.Tb.bind(this);this.i.j=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Wa=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.pc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Pt(this,a)};
l.nc=function(a){Pt(this,{playbackQuality:a})};
l.oc=function(a){Pt(this,{playbackRate:a})};
l.kc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.sc=function(){Pt(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.qc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Pt(this,a)};
l.tc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Pt(this,a)};
l.dispose=function(){Nt.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Ut(a){J.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Cb,this)}
r(Ut,J);l=Ut.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.ja("RECEIVING"))};
l.ja=function(a,b){this.started&&!this.i()&&this.connection.ja(a,b)};
l.Cb=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Vt(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Wt(a,c))&&this.ja(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.lc.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.lc=function(a,b){this.started&&!this.i()&&this.connection.ja(a,this.Va(a,b))};
l.Va=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.I=function(){var a=this.connection;a.i()||lg(a.j,"command",this.Cb,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);J.prototype.I.call(this)};function Xt(a,b){Ut.call(this,b);this.api=a;this.start()}
r(Xt,Ut);Xt.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Xt.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Vt(a,b){switch(a){case "loadVideoById":return a=Rt(b),[a];case "cueVideoById":return a=Rt(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=St(b),[a];case "cuePlaylist":return a=St(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Wt(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Xt.prototype.Va=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ut.prototype.Va.call(this,a,b)};
Xt.prototype.I=function(){Ut.prototype.I.call(this);delete this.api};function Yt(a){a=void 0===a?!1:a;J.call(this);this.j=new K(a);pe(this,Xa(ne,this.j))}
Ya(Yt,J);Yt.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
Yt.prototype.m=function(a,b){this.i()||this.j.ha.apply(this.j,arguments)};function Zt(a,b,c){Yt.call(this);this.l=a;this.destination=b;this.id=c}
r(Zt,Yt);Zt.prototype.ja=function(a,b){this.i()||this.l.ja(this.destination,this.id,a,b)};
Zt.prototype.I=function(){this.destination=this.l=null;Yt.prototype.I.call(this)};function $t(a,b,c){J.call(this);this.destination=a;this.origin=c;this.j=on(window,"message",this.l.bind(this));this.connection=new Zt(this,a,b);pe(this,Xa(ne,this.connection))}
r($t,J);$t.prototype.ja=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Mf(a),this.origin))};
$t.prototype.l=function(a){var b;if(b=!this.i())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.i()||c.m("command",b.command,b.data,a.origin))}};
$t.prototype.I=function(){pn(this.j);this.destination=null;J.prototype.I.call(this)};function au(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
au.prototype.clone=function(){var a=new au,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=ub(c):a[b]=c}return a};var bu=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function cu(a){a=a||"";if(window.spf){var b=a.match(bu);spf.style.load(a,b?b[1]:"",void 0)}else du(a)}
function du(a){var b=eu(a),c=document.getElementById(b),d=c&&Zs(c,"loaded");d||c&&!d||(c=fu(a,b,function(){Zs(c,"loaded")||(Xs(c),En(b),ni(Xa(Fn,b),0))}))}
function fu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ib(a);Vb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function eu(a){var b=Kd("A");Cb("This URL is never added to the DOM");Ub(b,new Kb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function gu(){J.call(this);this.j=[]}
r(gu,J);gu.prototype.I=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.ia,void 0)}J.prototype.I.call(this)};function hu(){gu.apply(this,arguments)}
r(hu,gu);function iu(a,b,c,d){J.call(this);var e=this;this.N=b;this.webPlayerContextConfig=d;this.Sa=!1;this.api={};this.Ba=this.v=null;this.R=new K;this.j={};this.da=this.Ca=this.elementId=this.Ta=this.config=null;this.W=!1;this.m=this.A=null;this.Da={};this.Kb=["onReady"];this.lastError=null;this.jb=NaN;this.L={};this.Lb=new hu(this);this.la=0;this.l=this.o=a;pe(this,Xa(ne,this.R));ju(this);ku(this);pe(this,Xa(ne,this.Lb));c?this.la=ni(function(){e.loadNewVideoConfig(c)},0):d&&(lu(this),mu(this))}
r(iu,J);l=iu.prototype;l.getId=function(){return this.N};
l.loadNewVideoConfig=function(a){if(!this.i()){this.la&&(oi(this.la),this.la=0);var b=a||{};b instanceof au||(b=new au(b));this.config=b;this.setConfig(a);mu(this);this.isReady()&&nu(this)}};
function lu(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.N,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.N:a.config.attrs.id=a.N);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.Ta=a;this.config=ou(a);lu(this);if(!this.Ca){var b;this.Ca=pu(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Yd(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Yd(Number(a)||a))};
function nu(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function qu(a){var b=!0,c=ru(a);c&&a.config&&(a=su(a),b=Zs(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function mu(a){if(!a.i()&&!a.W){var b=qu(a);if(b&&"html5"===(ru(a)?"html5":null))a.da="html5",a.isReady()||tu(a);else if(uu(a),a.da="html5",b&&a.m&&a.o)a.o.appendChild(a.m),tu(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=vu(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?ou(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);tu(a)};
a.W=!0;b?a.A():(ct(su(a),a.A),(b=wu(a))&&cu(b),xu(a)&&!c&&z("yt.player.Application.create",null))}}}
function ru(a){var b=Jd(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function tu(a){if(!a.i()){var b=ru(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!vu(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}yu(a)}else a.jb=ni(function(){tu(a)},50)}}
function yu(a){ju(a);a.Sa=!0;var b=ru(a);if(b){a.v=zu(a,b,"addEventListener");a.Ba=zu(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=zu(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.v&&a.v(g,a.j[g]);nu(a);a.Ca&&a.Ca(a.api);a.R.ha("onReady",a.api)}
function zu(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Dp(f))}}}
function ju(a){a.Sa=!1;if(a.Ba)for(var b in a.j)a.j.hasOwnProperty(b)&&a.Ba(b,a.j[b]);for(var c in a.L)a.L.hasOwnProperty(c)&&oi(Number(c));a.L={};a.v=null;a.Ba=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ta};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Sa};
function ku(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){En("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){En("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=pu(this,b);d&&(0<=db(this.Kb,a)||this.j[a]||(b=Au(this,a),this.v&&this.v(a,b)),this.R.subscribe(a,d),"onReady"===a&&this.isReady()&&ni(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=pu(this,b))&&lg(this.R,a,b)};
function pu(a,b){var c=b;if("string"===typeof b){if(a.Da[b])return a.Da[b];c=function(){var d=Ja.apply(0,arguments),e=A(b);if(e)try{e.apply(x,d)}catch(f){Cp(f)}};
a.Da[b]=c}return c?c:null}
function Au(a,b){var c="ytPlayer"+b+a.N;a.j[b]=c;x[c]=function(d){var e=ni(function(){if(!a.i()){a.R.ha(b,null!=d?d:void 0);var f=a.L,g=String(e);g in f&&delete f[g]}},0);
pb(a.L,String(e))};
return c}
l.getPlayerType=function(){return this.da||(ru(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function uu(a){a.cancel();ju(a);a.da=null;a.config&&(a.config.loaded=!1);var b=ru(a);b&&(qu(a)||!xu(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.A&&jt(su(this),this.A);oi(this.jb);this.W=!1};
l.I=function(){uu(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){Cp(b)}this.Da=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(x[this.j[a]]=null);this.Ta=this.config=this.api=null;delete this.o;delete this.l;J.prototype.I.call(this)};
function xu(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function su(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function wu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function vu(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===ai(c||"","&")[b]}
function ou(a){for(var b={},c=q(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var Bu={},Cu="player_uid_"+(1E9*Math.random()>>>0);function Du(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Jd(d):d;var e=Cu+"_"+Ra(d),f=Bu[e];if(f&&c)return Eu(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new iu(d,e,a,b);Bu[e]=f;En("player-added",f.api);pe(f,function(){delete Bu[f.getId()]});
return f.api}
function Eu(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Fu=null,Gu=null,Hu=null;function Iu(){var a=Fu.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Ju(a,b,c){a="ST-"+Zb(a).toString(36);b=b?fc(b):"";c=c||5;iq()&&Zi(a,b,c)}
;function Ku(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=cc(window.location.href);g&&f.push(g);g=cc(d);if(0<=db(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),Ub(f,d),d=f.href),d&&(d=dc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Vp()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Ju(d,b,h)}else Ju(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=gc(a,k)+m;var u=void 0===u?Xd:u;a:{u=void 0===u?Xd:u;for(k=0;k<u.length;++k)if(m=u[k],m instanceof Sd&&m.isValid(a)){u=new Dd(a,Bd);break a}u=void 0}c.href=Fd(u||Ed)}return!0}
;z("yt.setConfig",Lh);z("yt.config.set",Lh);z("yt.setMsg",$p);z("yt.msgs.set",$p);z("yt.logging.errors.log",Cp);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}rq(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=fi(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));Pr();if((c=L("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=fi(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Fu=Du(a,c,!1)}else Fu=Du(a);Fu.addEventListener("onVideoDataChange",Iu);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?Hu=new Tt(Fu):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Gu=new $t(window.parent,a,b),Hu=new Xt(Fu,Gu.connection));
mt();M("ytidb_create_logger_embed_killswitch")||Uj();a={};Ht||(Ht=new Gt);Ht.install((a.flush_logs={ia:function(){Ko()}},a));
M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?Hm():Pm());M("ytidb_clear_embedded_player")&&$e.M(function(){var e;if(!vs){Bq||(Bq=new yq);var f=Bq;var g={ec:us,Ib:ts};f.providers.set(g.ec,g);g={mb:{feedbackEndpoint:Mq(ps),modifyChannelNotificationPreferenceEndpoint:Mq(qs),playlistEditEndpoint:Mq(rs),subscribeEndpoint:Mq(ns),unsubscribeEndpoint:Mq(os),webPlayerShareEntityServiceEndpoint:Mq(ss)}};var h=M("web_enable_client_location_service")?Iq.getInstance():void 0,k={};h&&(k.client_location=
h);if(void 0===m){sq.i||(sq.i=new sq);var m=sq.i}void 0===e&&(e=f.resolve(us));cs(g,e,m,k);vs=bs.i}Ws()})});
var Lu=Th(function(){Ur();var a=cj.getInstance(),b=fj(119),c=1<window.devicePixelRatio;if(document.body&&zf(document.body,"exp-invert-logo"))if(c&&!zf(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!zf(d,"inverted-hdpi")){var e=xf(d);yf(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&zf(document.body,"inverted-hdpi")&&Af();if(b!=c){b="f"+(Math.floor(119/31)+1);d=gj(b)||0;d=c?d|67108864:d&-67108865;0==d?delete bj[b]:(c=d.toString(16),
bj[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in bj)d.push(f+"="+encodeURIComponent(String(bj[f])));Zi(b,d.join("&"),63072E3,a.j,c)}Fs.i||(Fs.i=new Fs);a=Fs.i;f=16623;var g=void 0===g?{}:g;Object.values(aq).includes(f)||(Dp(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.s=[];a.D=[];g.pb?Is(a,f,g):Js(a,f,g)}),Mu=Th(function(){Fu&&Fu.sendAbandonmentPing&&Fu.sendAbandonmentPing();
L("PL_ATT")&&ut.dispose();for(var a=$e,b=0,c=kt.length;b<c;b++)a.S(kt[b]);kt.length=0;ht("//static.doubleclick.net/instream/ad_status.js");lt=!1;Lh("DCLKSTAT",0);oe(Hu,Gu);Fu&&(Fu.removeEventListener("onVideoDataChange",Iu),Fu.destroy())});
window.addEventListener?(window.addEventListener("load",Lu),window.addEventListener("pagehide",Mu)):window.attachEvent&&(window.attachEvent("onload",Lu),window.attachEvent("onunload",Mu));z("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||vt);z("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||wt);z("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||pt);z("yt.player.exports.navigate",A("yt.player.exports.navigate")||Ku);
z("yt.util.activity.init",A("yt.util.activity.init")||tn);z("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||wn);z("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||un);}).call(this);
