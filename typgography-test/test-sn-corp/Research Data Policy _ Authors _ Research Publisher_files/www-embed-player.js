(function(){var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={qa:!0},ea={};try{ea.__proto__=da;ca=ea.qa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.o=b.prototype}
for(var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ka=ia,la=["Reflect",
"construct"],ma=0;ma<la.length-1;ma++){var na=la[ma];na in ka||(ka[na]={});ka=ka[na]}var oa=la[la.length-1];ja!=ka[oa]&&null!=ja&&ha(ka,oa,{configurable:!0,writable:!0,value:ja});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function u(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function pa(){}
function qa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==qa(a)}
function ra(a){var b=qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function sa(a){return"function"==qa(a)}
function ta(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ua="closure_uid_"+(1E9*Math.random()>>>0),va=0;function wa(a,b,c){return a.call.apply(a.bind,arguments)}
function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=wa:x=xa;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function A(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Va=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(B,Error);B.prototype.name="CustomError";var ya=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function za(a){if(!Aa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ea,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Fa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ga,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ha,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ia,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ja,"&#0;"));return a}
var Ea=/&/g,Fa=/</g,Ga=/>/g,Ha=/"/g,Ia=/'/g,Ja=/\x00/g,Aa=/[\x00&<>"']/;function Ka(a,b){return a<b?-1:a>b?1:0}
function La(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ma=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Oa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Pa(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Qa(a,b){var c=Ma(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ta;a:{var Ua=p.navigator;if(Ua){var Va=Ua.userAgent;if(Va){Ta=Va;break a}}Ta=""}function D(a){return-1!=Ta.indexOf(a)}
;function Wa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Xa(a,b){var c=ra(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function $a(a){for(var b in a)return!1;return!0}
function ab(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function bb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<cb.length;f++)c=cb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function eb(a,b){var c=fb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var gb=D("Opera"),E=D("Trident")||D("MSIE"),hb=D("Edge"),ib=D("Gecko")&&!(-1!=Ta.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),jb=-1!=Ta.toLowerCase().indexOf("webkit")&&!D("Edge");function lb(){var a=p.document;return a?a.documentMode:void 0}
var mb;a:{var nb="",ob=function(){var a=Ta;if(ib)return/rv\:([^\);]+)(\)|;)/.exec(a);if(hb)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jb)return/WebKit\/(\S+)/.exec(a);if(gb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ob&&(nb=ob?ob[1]:"");if(E){var pb=lb();if(null!=pb&&pb>parseFloat(nb)){mb=String(pb);break a}}mb=nb}var qb=mb,fb={};
function F(a){return eb(a,function(){for(var b=0,c=ya(String(qb)).split("."),d=ya(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Ka(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Ka(0==g[2].length,0==h[2].length)||Ka(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var rb;var sb=p.document;rb=sb&&E?lb()||("CSS1Compat"==sb.compatMode?parseInt(qb,10):5):void 0;var tb=!E||9<=Number(rb);!ib&&!E||E&&9<=Number(rb)||ib&&F("1.9.1");E&&F("9");function ub(){this.b="";this.g=vb}
ub.prototype.V=!0;ub.prototype.I=function(){return this.b};
function wb(a){return a instanceof ub&&a.constructor===ub&&a.g===vb?a.b:"type_error:TrustedResourceUrl"}
var vb={};function G(){this.b="";this.g=xb}
G.prototype.V=!0;G.prototype.I=function(){return this.b};
function yb(a){return a instanceof G&&a.constructor===G&&a.g===xb?a.b:"type_error:SafeUrl"}
var zb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ab(a){if(a instanceof G)return a;a=a.V?a.I():String(a);zb.test(a)||(a="about:invalid#zClosurez");return Bb(a)}
var xb={};function Bb(a){var b=new G;b.b=a;return b}
Bb("about:blank");function Cb(){this.b=""}
Cb.prototype.V=!0;Cb.prototype.I=function(){return this.b};
function Db(a){var b=new Cb;b.b=a;return b}
Db("<!DOCTYPE html>");Db("");Db("<br>");function Eb(a,b){var c=b instanceof G?b:Ab(b);a.href=yb(c)}
function Fb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?wb(b):b instanceof ub?wb(b):b instanceof G?yb(b):Ab(b).I()}
function Gb(a,b){a.src=wb(b)}
;function Hb(a,b){this.width=a;this.height=b}
l=Hb.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ib(a){var b=document;return r(a)?b.getElementById(a):a}
function Jb(a,b){Wa(b,function(b,d){b&&b.V&&(b=b.I());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Kb.hasOwnProperty(d)?a.setAttribute(Kb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Kb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Lb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!tb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',za(g.name),'"');if(g.type){f.push(' type="',za(g.type),'"');var h={};db(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Jb(f,g));2<d.length&&Mb(e,f,d);return f}
function Mb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!ra(f)||ta(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(ta(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(sa(f)){g="function"==typeof f.item;break a}}g=!1}C(g?Ra(f):f,d)}}}
function Nb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ob(a){Pb();var b=new ub;b.b=a;return b}
var Pb=pa;var Qb=document,H=window;function Rb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Sb=(new Date).getTime();function Tb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ub(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;v=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],k=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var v=1518500249}else m=d^f^h,v=1859775393;else 60>c?(m=d&f|h&(d|f),v=2400959708):(m=d^f^h,v=3395469782);m=((a<<5|a>>>27)&4294967295)+m+k+v+b[c]&4294967295;k=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64;for(;d<c;)if(f[m++]=a[d++],v++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64}
function d(){var a=[],d=8*v;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,v;a();return{reset:a,update:c,digest:d,sa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Vb(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Wb(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Wb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Wb(a){var b=Ub();b.update(a);return b.sa().toLowerCase()}
;function Xb(a){this.b=a||{cookie:""}}
l=Xb.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ya(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ya(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Yb=new Xb("undefined"==typeof document?null:document);Yb.g=3950;function Zb(){var a=[],b=Tb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Xb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Xb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Vb(Tb(d),b,a||null)].join(" "):null}return null}
;function $b(a,b,c){this.h=c;this.f=a;this.i=b;this.g=0;this.b=null}
$b.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.f();return a};
function ac(a,b){a.i(b);a.g<a.h&&(a.g++,b.next=a.b,a.b=b)}
;function bc(a){p.setTimeout(function(){throw a;},0)}
var cc;
function dc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ha;c.ha=null;a()}};
return function(a){d.next={ha:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function ec(){this.g=this.b=null}
var gc=new $b(function(){return new fc},function(a){a.reset()},100);
ec.prototype.add=function(a,b){var c=gc.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};
ec.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.g=null),a.next=null);return a};
function fc(){this.next=this.scope=this.b=null}
fc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
fc.prototype.reset=function(){this.next=this.scope=this.b=null};function hc(a,b){ic||jc();kc||(ic(),kc=!0);lc.add(a,b)}
var ic;function jc(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);ic=function(){a.then(mc)}}else ic=function(){var a=mc;
!sa(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(cc||(cc=dc()),cc(a)):p.setImmediate(a)}}
var kc=!1,lc=new ec;function mc(){for(var a;a=lc.remove();){try{a.b.call(a.scope)}catch(b){bc(b)}ac(gc,a)}kc=!1}
;function I(){this.g=this.g;this.B=this.B}
I.prototype.g=!1;I.prototype.dispose=function(){this.g||(this.g=!0,this.l())};
function nc(a,b){a.g?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?x(b,void 0):b))}
I.prototype.l=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function oc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function pc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ra(d)?pc.apply(null,d):oc(d)}}
;function qc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function rc(a,b){if(a.classList)var c=a.classList.contains(b);else c=qc(a),c=0<=Ma(c,b);return c}
function sc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):rc(a,"inverted-hdpi")&&(a.className=Na(qc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var tc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function uc(){}
uc.prototype.next=function(){throw tc;};
uc.prototype.S=function(){return this};
function vc(a){if(a instanceof uc)return a;if("function"==typeof a.S)return a.S(!1);if(ra(a)){var b=0,c=new uc;c.next=function(){for(;;){if(b>=a.length)throw tc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function wc(a,b){if(ra(a))try{C(a,b,void 0)}catch(c){if(c!==tc)throw c;}else{a=vc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==tc)throw c;}}}
function xc(a){if(ra(a))return Ra(a);a=vc(a);var b=[];wc(a,function(a){b.push(a)});
return b}
;E&&F("9");!jb||F("528");ib&&F("1.9b")||E&&F("8")||gb&&F("9.5")||jb&&F("528");ib&&!F("8")||E&&F("9");(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",pa,b);p.removeEventListener("test",pa,b);return a})();function yc(a){var b=[];zc(new Ac,a,b);return b.join("")}
function Ac(){}
function zc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),zc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Bc(d,c),c.push(":"),zc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Bc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Dc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Bc(a,b){b.push('"',a.replace(Dc,function(a){var b=Cc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Cc[a]=b);return b}),'"')}
;function Ec(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Fc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function J(a,b){this.b=0;this.m=void 0;this.h=this.g=this.f=null;this.i=this.j=!1;if(a!=pa)try{var c=this;a.call(b,function(a){Gc(c,2,a)},function(a){Gc(c,3,a)})}catch(d){Gc(this,3,d)}}
function Hc(){this.next=this.context=this.g=this.h=this.b=null;this.f=!1}
Hc.prototype.reset=function(){this.context=this.g=this.h=this.b=null;this.f=!1};
var Ic=new $b(function(){return new Hc},function(a){a.reset()},100);
function Jc(a,b,c){var d=Ic.get();d.h=a;d.g=b;d.context=c;return d}
function Kc(a){return new J(function(b,c){c(a)})}
function Lc(a,b,c){Mc(a,b,c,null)||hc(y(b,a))}
function Nc(a){return new J(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Lc(e,b,c)})}
function Oc(a){return new J(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{aa:!0,value:f}:{aa:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Lc(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
J.prototype.then=function(a,b,c){return Pc(this,sa(a)?a:null,sa(b)?b:null,c)};
Ec(J);function Qc(a,b){var c=Jc(b,b,void 0);c.f=!0;Rc(a,c);return a}
function Sc(a,b){return Pc(a,null,b,void 0)}
J.prototype.cancel=function(a){0==this.b&&hc(function(){var b=new Tc(a);Uc(this,b)},this)};
function Uc(a,b){if(0==a.b)if(a.f){var c=a.f;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Uc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Vc(c),Wc(c,e,3,b)))}a.f=null}else Gc(a,3,b)}
function Rc(a,b){a.g||2!=a.b&&3!=a.b||Xc(a);a.h?a.h.next=b:a.g=b;a.h=b}
function Pc(a,b,c,d){var e=Jc(null,null,null);e.b=new J(function(a,g){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.g=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Tc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.f=a;Rc(a,e);return e.b}
J.prototype.u=function(a){this.b=0;Gc(this,2,a)};
J.prototype.A=function(a){this.b=0;Gc(this,3,a)};
function Gc(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Mc(c,a.u,a.A,a)||(a.m=c,a.b=b,a.f=null,Xc(a),3!=b||c instanceof Tc||Yc(a,c)))}
function Mc(a,b,c,d){if(a instanceof J)return Rc(a,Jc(b||pa,c||null,d)),!0;if(Fc(a))return a.then(b,c,d),!0;if(ta(a))try{var e=a.then;if(sa(e))return Zc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Zc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Xc(a){a.j||(a.j=!0,hc(a.B,a))}
function Vc(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.h=null);return b}
J.prototype.B=function(){for(var a;a=Vc(this);)Wc(this,a,this.b,this.m);this.j=!1};
function Wc(a,b,c,d){if(3==c&&b.g&&!b.f)for(;a&&a.i;a=a.f)a.i=!1;if(b.b)b.b.f=null,$c(b,c,d);else try{b.f?b.h.call(b.context):$c(b,c,d)}catch(e){ad.call(null,e)}ac(Ic,b)}
function $c(a,b,c){2==b?a.h.call(a.context,c):a.g&&a.g.call(a.context,c)}
function Yc(a,b){a.i=!0;hc(function(){a.i&&ad.call(null,b)})}
var ad=bc;function Tc(a){B.call(this,a)}
A(Tc,B);Tc.prototype.name="cancel";function K(a){I.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.m=!!a}
A(K,I);l=K.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function bd(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Pa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.C(b)}}
l.C=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=pa):(c&&Qa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.F=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];cd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.C(c)}}return 0!=e}return!1};
function cd(a,b,c){hc(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.C,this),delete this.f[a])}else this.b.length=0,this.f={}};
l.l=function(){K.o.l.call(this);this.clear();this.h.length=0};function dd(a){this.b=a}
dd.prototype.set=function(a,b){q(b)?this.b.set(a,yc(b)):this.b.remove(a)};
dd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
dd.prototype.remove=function(a){this.b.remove(a)};function ed(a){this.b=a}
A(ed,dd);function fd(a){this.data=a}
function gd(a){return!q(a)||a instanceof fd?a:new fd(a)}
ed.prototype.set=function(a,b){ed.o.set.call(this,a,gd(b))};
ed.prototype.g=function(a){a=ed.o.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ed.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function hd(a){this.b=a}
A(hd,ed);hd.prototype.set=function(a,b,c){if(b=gd(b)){if(c){if(c<z()){hd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}hd.o.set.call(this,a,b)};
hd.prototype.g=function(a,b){var c=hd.o.g.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<z()||!!d&&d>z()}if(d)hd.prototype.remove.call(this,a);else return c}};function id(a){this.b=a}
A(id,hd);function jd(){}
;function kd(){}
A(kd,jd);kd.prototype.clear=function(){var a=xc(this.S(!0)),b=this;C(a,function(a){b.remove(a)})};function ld(a){this.b=a}
A(ld,kd);l=ld.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.S=function(a){var b=0,c=this.b,d=new uc;d.next=function(){if(b>=c.length)throw tc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function md(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(md,ld);function nd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(nd,ld);function od(a){if(!sa(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function pd(){var a=null;return Sc(new J(function(b,c){a=od(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var qd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function L(a){return a.match(qd)}
function rd(a){return a?decodeURI(a):a}
function sd(a,b,c){if(w(b))for(var d=0;d<b.length;d++)sd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function td(a){var b=[],c;for(c in a)sd(c,a[c],b);return b.join("&")}
function ud(a,b){var c=td(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var vd=!1,wd="";function xd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(vd=!0,a.description)){wd=xd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){vd=!0;wd="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],vd=!(!a||!a.enabledPlugin))){wd=xd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");vd=!0;wd=xd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");vd=!0;wd="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),vd=!0,wd=xd(b.GetVariable("$version"))}catch(c){}})();
var yd=vd,zd=wd;function Ad(a,b){var c="script";c=void 0===c?"":c;var d=a.createElement("link");Fb(d,b,"preload");c&&(d.as=c);(c=a.getElementsByTagName("head")[0])&&c.appendChild(d)}
;var Bd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ed=/\.(cn|com\.bi|do|sl)$/;function Fd(a){return Bd.test(a)&&!Ed.test(a)}
var Gd=p;function Hd(a){a="https://adservice"+a+(M[3]?"/generate_204":"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];N[3]>=z()&&b.push("adsid="+encodeURIComponent(N[1]));return a+"?"+b.join("&")}
var N,M;function Id(){Gd=p;N=Gd.googleToken=Gd.googleToken||{};var a=z();N[1]&&N[3]>a&&0<N[2]||(N[1]="",N[2]=-1,N[3]=-1,N[4]="");M=Gd.googleIMState=Gd.googleIMState||{};Fd(M[1])||(M[1]=".google.com");"boolean"==typeof M[3]||(M[3]=!1);w(M[5])||(M[5]=[]);"boolean"==typeof M[6]||(M[6]=!1);w(M[7])||(M[7]=[]);"number"==typeof M[8]||(M[8]=0)}
function Jd(){Id();return N[1]}
var O={ja:function(){return 0<M[8]},
Ia:function(){M[8]++},
Ja:function(){0<M[8]&&M[8]--},
Ka:function(){M[8]=0},
shouldRetry:function(){return!1},
ia:function(){return M[5]},
ga:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ea:function(){if(!O.ja()){var a=p.document,b=function(b){var c=Hd(b);Ad(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return p.processGoogleToken({},2)};
M[3]&&(b.onload=function(){var a={};return p.processGoogleToken((a.newToken="FBA",a))});
c=Ob(c);Gb(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),O.Ia()}catch(f){}},c=M[1];
b(c);".google.com"!=c&&b(".google.com");p.setTimeout(function(){return p.processGoogleToken({},1)},1E3)}}};
function Kd(a){Id();var b=Gd.googleToken[5]||0;a&&(0!=b||N[3]>=z()?O.ga(a):(O.ia().push(a),O.ea()));N[3]>=z()&&N[2]>=z()||O.ea()}
function Ld(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g=parseInt(b.freshLifetimeSecs||"",10)||3600,h=parseInt(b.validLifetimeSecs||"",10)||86400;b=b["1p_jar"]||"";Id();1==e?O.Ka():O.Ja();if(1E-5>Math.random()){var k="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e;p.google_image_requests||(p.google_image_requests=[]);var m=p.document.createElement("img");m.src=k;p.google_image_requests.push(m)}if(!f&&
O.shouldRetry())Fd(".google.com")&&(M[1]=".google.com"),O.ea();else{k=Gd.googleToken=Gd.googleToken||{};m=0==e&&f&&r(f)&&0<g&&0<h&&r(b);var v=!(N[3]>=z())&&(5==e||4==e||2==e);if(m||v)m=z(),k[5]=e,k[1]=f,k[2]=m+1E3*g,k[3]=m+1E3*h,k[4]=b,Id();if(f||!O.ja()){e=O.ia();for(f=0;f<e.length;f++)O.ga(e[f]);e.length=0}}};
Kd(a)}
;function Md(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var P=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Nd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Nd,void 0);function Q(a){Md(Nd,arguments)}
function R(a,b){return a in Nd?Nd[a]:b}
function S(a){return R(a,void 0)}
;function Od(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){T(b)}}:a}
function T(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=R("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),Q("ERRORS",c))}
;function U(a){return R("EXPERIMENT_FLAGS",{})[a]}
;function Pd(a){a&&(a.dataset?a.dataset[Qd("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Rd(a,b){return a?a.dataset?a.dataset[Qd(b)]:a.getAttribute("data-"+b):null}
var Sd={};function Qd(a){return Sd[a]||(Sd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function V(a,b){sa(a)&&(a=Od(a));return window.setTimeout(a,b)}
;var Td=u("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.C;K.prototype.publish=K.prototype.F;K.prototype.clear=K.prototype.clear;t("ytPubsubPubsubInstance",Td,void 0);var Ud=u("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",Ud,void 0);var Vd=u("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Vd,void 0);var Wd=u("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Wd,void 0);
function Xd(a,b){var c=Yd();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Ud[d]&&b.apply(window,c)};
try{Wd[a]?f():V(f,0)}catch(g){T(g)}},void 0);
Ud[d]=!0;Vd[a]||(Vd[a]=[]);Vd[a].push(d);return d}return 0}
function Zd(a){var b=Yd();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Ud[a]}))}
function $d(a,b){var c=Yd();c&&c.publish.apply(c,arguments)}
function ae(a){var b=Yd();if(b)if(b.clear(a),a)be(a);else for(var c in Vd)be(c)}
function Yd(){return u("ytPubsubPubsubInstance")}
function be(a){Vd[a]&&(a=Vd[a],C(a,function(a){Ud[a]&&delete Ud[a]}),a.length=0)}
;var ce=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,de=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ee(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ce,""),c=c.replace(de,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else fe(a,b)}
function fe(a,b){var c=ge(a),d=document.getElementById(c),e=d&&Rd(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Xd(c,b);var g=""+(b[ua]||(b[ua]=++va));he[g]=e}f||(d=ie(a,c,function(){Rd(d,"loaded")||(Pd(d),$d(c),V(y(ae,c),0))}))}}
function ie(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Gb(d,Ob(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function je(a){a=ge(a);var b=document.getElementById(a);b&&(ae(a),b.parentNode.removeChild(b))}
function ke(a,b){if(a&&b){var c=""+(b[ua]||(b[ua]=++va));(c=he[c])&&Zd(c)}}
function ge(a){var b=document.createElement("a");Eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+La(a)}
var he={};var le=null;function me(){var a=R("BG_I",null),b=R("BG_IU",null),c=R("BG_P",void 0);b?ee(b,function(){window.botguard?ne(c):(je(b),T(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?ne(c):T(Error("Unable to load Botguard from JS"),"WARNING"))}
function ne(a){le=new window.botguard.bg(a);U("botguard_periodic_refresh")&&P()}
function oe(){return null!=le}
function pe(){return le?le.invoke():null}
;z();var qe=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function re(){if(!qe)return null;var a=qe();return"open"in a?a:null}
function se(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function te(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Sa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function ue(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=te(d[1]||"");for(var e in b)d[e]=b[e];return ud(a,d)+c}
;var ve={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},we=!1;
function xe(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=L(a)[1]||null,e=rd(L(a)[3]||null);d&&e?(d=c,c=L(a),d=L(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?rd(L(c)[3]||null)==e&&(Number(L(c)[4]||null)||null)==(Number(L(a)[4]||null)||null):!0;for(var f in ve){if((e=d=R(ve[f]))&&!(e=c)){e=f;var g=R("CORS_HEADER_WHITELIST")||{},h=rd(L(a)[3]||null);e=h?(g=g[h])?0<=Ma(g,e):!1:!0}e&&(b[f]=d)}return b}
function ye(a,b){var c=R("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Ya&&(!rd(L(a)[3]||null)||b.withCredentials||rd(L(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.w&&b.w[c])}
function ze(a,b){var c=b.format||"JSON";b.xa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=R("XSRF_FIELD_NAME",void 0),e=R("XSRF_TOKEN",void 0),f=b.Ta;f&&(f[d]&&delete f[d],a=ue(a,f||{}));f=b.postBody||"";var g=b.w;ye(a,b)&&(g||(g={}),g[d]=e);g&&r(f)&&(d=te(f),db(d,g),f=b.ka&&"JSON"==b.ka?JSON.stringify(d):td(d));d=f||g&&!$a(g);!we&&d&&"POST"!=b.method&&(we=!0,T(Error("AJAX request with postData should use POST")));var h=
!1,k,m=Ae(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d=se(a),e=null;if(d||400<=a.status&&500>a.status)e=Be(c,a,b.Xa);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||p;d?b.J&&b.J.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Da&&b.Da.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.W&&0<b.timeout&&(k=V(function(){h||(h=!0,m.abort(),window.clearTimeout(k),b.W.call(b.context||p,m))},b.timeout))}
function Be(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ce(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=De(a)})}c&&Ee(d);
return d}
function Ee(a){if(ta(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Db(a[b]);a[c]=d}else Ee(a[b])}}
function Ce(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function De(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Fe(a,b){b.method="POST";b.w||(b.w={});ze(a,b)}
function Ae(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Od(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=re();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=xe(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var Ge={},He=0;function Ie(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ta,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Lb("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)):e?Ae(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ae(a,b,"GET","",d):Je(a,b))}
function Je(a,b){var c=new Image,d=""+He++;Ge[d]=c;c.onload=c.onerror=function(){b&&Ge[d]&&b();delete Ge[d]};
c.src=a}
;var Ke={},Le=0;
function Me(a,b,c,d,e,f){f=f||{};f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Le)){e=a.stacktrace;c=a.columnNumber;d=u("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(Ba){h="Not available",g=!0}try{var k=
a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(Ba){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(Ke[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=e;h={Ta:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),
line:h,level:void 0===b?"ERROR":b,"client.name":f.name},w:{url:R("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);k&&(h.w.stack=k);for(var m in f)h.w["client."+m]=f[m];if(m=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var v in m)h.w[v]=m[v];ze("/error_204",h);Ke[a.message]=!0;Le++}}}
;var Ne=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",Ne,void 0);function Oe(a){Md(Ne,arguments)}
;function Pe(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):V(a,c||0)}
function Qe(a){if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
;var Re=[],Se=!1;function Te(){function a(){Se=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)}
ee("//static.doubleclick.net/instream/ad_status.js",a);Re.push(Pe(function(){Se||"google_ad_status"in window||(ke("//static.doubleclick.net/instream/ad_status.js",a),Q("DCLKSTAT",3))},1))}
function Ue(){return parseInt(R("DCLKSTAT",0),10)}
;var Ve=0;t("ytDomDomGetNextId",u("ytDomDomGetNextId")||function(){return++Ve},void 0);var We={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Xe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in We||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Xe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Xe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Xe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=u("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Za,void 0);var Ye=u("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",Ye,void 0);function Ze(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function $e(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ze(a,b,c,d);if(e)return e;e=++Ye.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Xe(d);if(!Nb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Xe(b);
b.currentTarget=a;return c.call(a,b)};
g=Od(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d];return e}
function af(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Za){var b=Za[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[a]}}))}
;function bf(){if(null==u("_lact",window)){var a=parseInt(R("LACT"),10);a=isFinite(a)?z()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&cf();$e(document,"keydown",cf);$e(document,"keyup",cf);$e(document,"mousedown",cf);$e(document,"mouseup",cf);Xd("page-mouse",cf);Xd("page-scroll",cf);Xd("page-resize",cf)}}
function cf(){null==u("_lact",window)&&bf();var a=z();t("_lact",a,window);-1==u("_fact",window)&&t("_fact",a,window);(a=u("ytglobal.ytUtilActivityCallback_"))&&a()}
function df(){var a=u("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;function ef(a,b,c,d,e){this.f=a;this.i=b;this.h=c;this.g=d;this.b=e}
var ff=1;function gf(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.g&&(b.elementIndex=a.g));void 0!==a.b&&(b.dataElement=gf(a.b));return b}
;var hf={log_event:"events",log_interaction:"interactions"},jf=Object.create(null);jf.log_event="GENERIC_EVENT_LOGGING";jf.log_interaction="INTERACTION_LOGGING";var kf={},lf={},mf=0,X=u("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",X,void 0);var nf=u("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",nf,void 0);var of=u("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",of,void 0);
t("ytytLoggingTransportCapturedTime_",u("ytLoggingTransportCapturedTime_")||{},void 0);function pf(a,b){lf[a.endpoint]=b;if(a.U){var c=a.U;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);nf[a.U.token]=d;c=qf(a.endpoint,a.U.token)}else c=qf(a.endpoint);c.push(a.payload);c.length>=(Number(U("web_logging_max_batch")||0)||20)?rf():sf()}
function rf(){window.clearTimeout(mf);if(!$a(X)){for(var a in X){var b=kf[a];if(!b){var c=lf[a];if(!c)continue;b=new c;kf[a]=b}c=void 0;var d=a,e=b,f=hf[d],g=of[d]||{};of[d]=g;b=Math.round(P());for(c in X[d]){var h=e.b;h={client:{hl:h.Aa,gl:h.za,clientName:h.ya,clientVersion:h.innertubeContextClientVersion}};R("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});h={context:h};h[f]=qf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;
h.requestTimeMs=b;var k=nf[c];if(k)a:{var m=h,v=c;if(k.videoId)var Ba="VIDEO";else if(k.playlistId)Ba="PLAYLIST";else break a;m.credentialTransferTokenTargetId=k;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:v,scope:Ba}]}delete nf[c];tf(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete X[a]}$a(X)||
sf()}}
function sf(){window.clearTimeout(mf);mf=V(rf,R("LOGGING_BATCH_TIMEOUT",1E4))}
function qf(a,b){b||(b="");X[a]=X[a]||{};X[a][b]=X[a][b]||[];return X[a][b]}
;function uf(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||P());f[a]=b;f.context={lastActivityMs:String(d?-1:df())};pf({endpoint:"log_event",payload:f,U:e},c)}
;function vf(a,b,c){wf(xf,{attachChild:{csn:a,parentVisualElement:gf(b),visualElements:[gf(c)]}})}
function wf(a,b,c){b.eventTimeMs=c?c:Math.round(P());b.lactMs=df();pf({endpoint:"log_interaction",payload:b},a)}
;function yf(){if(!zf&&!Af||!window.JSON)return null;try{var a=zf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=Af.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var Af,Bf=new md;Af=Bf.isAvailable()?new id(Bf):null;var zf,Cf=new nd;zf=Cf.isAvailable()?new id(Cf):null;function Df(){var a=R("ROOT_VE_TYPE",void 0);return a?new ef(void 0,a,void 0):null}
function Ef(){var a=R("client-screen-nonce")||R("EVENT_ID");return a?a:null}
;function Ff(a,b,c){Yb.set(""+a,b,c,"/","youtube.com",!1)}
;function Gf(a){if(a){a=a.itct||a.ved;var b=u("yt.logging.screen.storeParentElement");a&&b&&b(new ef(a))}}
;function Hf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=rd(L(window.location.href)[3]||null);f&&e.push(f);f=rd(L(d)[3]||null);if(0<=Ma(e,f)||!f&&0==d.lastIndexOf("/",0))if(U("autoescape_tempdata_url")&&(e=document.createElement("a"),Eb(e,d),d=e.href),d){f=L(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Ef();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+La(d).toString(36),e=b?td(b):"",Ff(d,e,h||5),Gf(b))}else h="ST-"+La(d).toString(36),d=b?td(b):"",Ff(h,d,5),Gf(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var v=void 0===v?window:v;c=v.location;a=ud(a,k)+m;a=a instanceof G?a:Ab(a);c.href=yb(a)}return!0}
;t("yt.abuse.botguardInitialized",u("yt.abuse.botguardInitialized")||oe,void 0);t("yt.abuse.invokeBotguard",u("yt.abuse.invokeBotguard")||pe,void 0);t("yt.abuse.dclkstatus.checkDclkStatus",u("yt.abuse.dclkstatus.checkDclkStatus")||Ue,void 0);t("yt.player.exports.navigate",u("yt.player.exports.navigate")||Hf,void 0);t("yt.util.activity.init",u("yt.util.activity.init")||bf,void 0);t("yt.util.activity.getTimeSinceActive",u("yt.util.activity.getTimeSinceActive")||df,void 0);
t("yt.util.activity.setTimestamp",u("yt.util.activity.setTimestamp")||cf,void 0);function If(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function xf(a){this.b=a||{apiaryHost:S("APIARY_HOST"),Ua:S("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:!!R("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:S("GAPI_HINT_PARAMS"),innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),ya:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),Aa:S("INNERTUBE_CONTEXT_HL"),za:S("INNERTUBE_CONTEXT_GL"),xhrApiaryHost:S("XHR_APIARY_HOST")||"",Ba:S("INNERTUBE_HOST_OVERRIDE")||""}}
function tf(a,b,c){var d={};!R("VISITOR_DATA")&&.01>Math.random()&&T(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":R("VISITOR_DATA","")},w:c,ka:"JSON",W:d.W,J:function(a,b){d.J&&d.J(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=Zb();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=R("SESSION_INDEX",0));var g="",h=a.b.Ba;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);Fe(""+g+If(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey,e)}
;function Jf(a){a=a||{};this.url=a.url||"";this.args=a.args||bb(Kf);this.assets=a.assets||{};this.attrs=a.attrs||bb(Lf);this.params=a.params||bb(Mf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Kf={enablejsapi:1},Lf={},Mf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Nf(a){a instanceof Jf||(a=new Jf(a));return a}
function Of(a){var b=new Jf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==qa(d)?bb(d):d}return b}
;function Pf(){I.call(this);this.b=[]}
n(Pf,I);Pf.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.Wa)}I.prototype.l.call(this)};var Qf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Rf(a){a=a||"";if(window.spf){var b=a.match(Qf);spf.style.load(a,b?b[1]:"",void 0)}else Sf(a)}
function Sf(a){var b=Tf(a),c=document.getElementById(b),d=c&&Rd(c,"loaded");d||c&&!d||(c=Uf(a,b,function(){Rd(c,"loaded")||(Pd(c),$d(b),V(y(ae,b),0))}))}
function Uf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ob(a);Fb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Tf(a){var b=document.createElement("A");a=Bb(a);Eb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+La(b)}
;var Vf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Wf;var Xf=Ta;Xf=Xf.toLowerCase();if(-1!=Xf.indexOf("android")){var Yf=Xf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Yf)Wf=parseFloat(Yf[1]);else{var Zf=[],$f=0,ag;for(ag in Vf)Zf[$f++]=ag;var bg=Xf.match("("+Zf.join("|")+")");Wf=bg?Vf[bg[0]]:0}}else Wf=void 0;var cg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],dg=['audio/mp4; codecs="mp4a.40.2"'];var eg=u("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",eg,void 0);var fg=0;function gg(a){eg[a]=eg[a]||{count:0};var b=eg[a];b.count++;b.time=P();fg||(fg=Pe(hg,0));return 10<b.count?(11==b.count&&Me(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function hg(){var a=P(),b;for(b in eg)6E4<a-eg[b].time&&delete eg[b];fg=0}
;function ig(a,b){this.version=a;this.args=b}
;function jg(a){this.topic=a}
jg.prototype.toString=function(){return this.topic};var kg=u("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.C;K.prototype.publish=K.prototype.F;K.prototype.clear=K.prototype.clear;t("ytPubsub2Pubsub2Instance",kg,void 0);t("ytPubsub2Pubsub2SubscribedKeys",u("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",u("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",u("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function lg(a,b){var c=u("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function mg(){var a=R("TIMING_TICK_EXPIRATION");a||(a={},Q("TIMING_TICK_EXPIRATION",a));return a}
function ng(){var a=mg(),b;for(b in a)Qe(a[b]);Q("TIMING_TICK_EXPIRATION",{})}
;function og(a,b){ig.call(this,1,arguments)}
n(og,ig);function pg(a,b){ig.call(this,1,arguments)}
n(pg,ig);var tg=new jg("aft-recorded"),ug=new jg("timing-sent");var Y=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var vg=z().toString();var wg={vc:!0},xg={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",plid:"videoId",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},yg="ap c cver ei srt yt_fss yt_li ba vpil vpni vpst yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),zg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),Ag=!1;
function Bg(a){if("_"!=a[0]){var b=a;Y.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),Y.mark(b))}b=Cg();var c=P();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=mg();if(c=b[a])Qe(c),b[a]=0;Dg()["tick_"+a]=void 0;P();U("csi_on_gel")?(b=Eg(),"_start"==a?gg("baseline_"+b)||uf("latencyActionBaselined",{clientActionNonce:b},xf,void 0,void 0):gg("tick_"+a+"_"+b)||uf("latencyActionTicked",{tickName:a,clientActionNonce:b},xf,void 0,void 0),a=!0):a=!1;if(a=!a)a=!u("yt.timing.pingSent_");if(a&&
(b=S("TIMING_ACTION"),a=Cg(),u("ytglobal.timingready_")&&b&&a._start&&(b=Fg()))){U("tighter_critical_section")&&!Ag&&(lg(tg,new og(Math.round(b-a._start),void 0)),Ag=!0);b=!0;c=R("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Gg()}}
function Hg(){var a=Ig().info.yt_lt="hot_bg";Dg().info_yt_lt=a;if(U("csi_on_gel"))if("yt_lt"in xg){var b={},c=xg.yt_lt;0<=Ma(zg,c)&&(a=!!a);c=c.split(".");for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=Eg();c=Object.keys(b).join("");gg("info_"+c+"_"+a)||(b.clientActionNonce=a,uf("latencyActionInfo",b,xf,void 0,void 0))}else 0<=Ma(yg,"yt_lt")||T(Error("Unknown label yt_lt logged with GEL CSI."))}
function Fg(){var a=Cg();if(a.aft)return a.aft;for(var b=R("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Gg(){ng();if(!U("csi_on_gel")){var a=Cg(),b=Ig().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&w(a[d])){var e=d.slice(1);if(e in wg){var f=Oa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=u("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Jg(f,e),Kg(),Lg(),Mg(!1,void 0),R("TIMING_ACTION")&&Q("PREVIOUS_ACTION",R("TIMING_ACTION")),Q("TIMING_ACTION","")}else{var g=R("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:R("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+u("ytplayer.config.assets.js");(k=Y.getEntriesByName?Y.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=Fg();Ng()&&"youtube"==g&&(Hg(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=P();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=u("ytdebug.logTiming"))&&a(f,b);Jg(f,e,void 0);lg(ug,new pg(b.aft+(h||0),void 0))}}}
var Lg=x(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||pa,Y);
function Jg(a,b,c){if(U("debug_csi_data")){var d=u("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Ie(a,void 0,void 0,void 0,f)}catch(g){Ie(a,void 0,void 0,void 0,f)}}else Ie(a);Mg(!0,c)}
function Eg(){var a=Ig().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=z();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(vg)for(b=1,c=0;c<vg.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^vg.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Ig().nonce=a}return a}
function Cg(){return Ig().tick}
function Dg(){var a=Ig();"gel"in a||(a.gel={});return a.gel}
function Ig(){return u("ytcsi.data_")||Kg()}
function Kg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Mg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Ng(){var a=Cg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Ig().info.yt_pvis}
;function Og(a,b){I.call(this);this.m=this.P=a;this.H=b;this.u=!1;this.f={};this.N=this.G=null;this.A=new K;nc(this,y(oc,this.A));this.i={};this.L=this.O=this.h=this.Z=this.b=null;this.K=!1;this.j=this.D=null;this.R={};this.oa=["onReady"];this.Y=null;this.fa=NaN;this.M={};Pg(this);this.T("WATCH_LATER_VIDEO_ADDED",x(this.Ea,this));this.T("WATCH_LATER_VIDEO_REMOVED",x(this.Fa,this));this.T("onAdAnnounce",x(this.ra,this));this.pa=new Pf;nc(this,y(oc,this.pa))}
n(Og,I);l=Og.prototype;
l.da=function(a,b){if(!this.g){this.Z=a;this.b=Of(a);this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.H,this.b.attrs.id=this.H);this.m.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.H;this.O||(this.O=Qg(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;var c=this.b.attrs.width;c&&(this.m.style.width=Rb(Number(c)||c));if(c=this.b.attrs.height)this.m.style.height=Rb(Number(c)||c);
if(!this.g){if(!b&&!q(this.b.disable.html5)){c=!0;void 0!=this.b.args.deviceHasDisplay&&(c=this.b.args.deviceHasDisplay);if(2.2==Wf)var d=!0;else{a:{var e=c;c=u("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),t("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?cg:dg;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d=d&&(Rg(this)||this.b.assets.js);this.b.disable.html5=!d;d||(this.b.args.html5_unavailable=
"1")}Sg(this)}this.u&&Tg(this)}};
l.ua=function(){return this.Z};
function Tg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Rg(a){var b=!0,c=Ug(a);c&&a.b&&(a=a.b,b=Rd(c,"version")==a.assets.js);return b&&!!u("yt.player.Application.create")}
function Sg(a){if(!a.K){var b=Rg(a);if(b&&"html5"==(Ug(a)?"html5":null))a.L="html5",a.u||a.X();else if(Vg(a),a.L="html5",b&&a.j)a.P.appendChild(a.j),a.X();else{a.b.loaded=!0;var c=!1;a.D=x(function(){c=!0;var a=Of(this.b);u("yt.player.Application.create")(this.P,a);this.X()},a);
a.K=!0;b?a.D():(ee(a.b.assets.js,a.D),Rf(a.b.assets.css),Wg(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function Ug(a){var b=Ib(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
l.X=function(){if(!this.g){var a=Ug(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b){if(this.K=!1,!a.isNotServable||!a.isNotServable(this.b.args.video_id)){Pg(this);this.u=!0;a=Ug(this);a.addEventListener&&(this.G=Xg(this,a,"addEventListener"));a.removeEventListener&&(this.N=Xg(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=Xg(this,a,d))}for(var e in this.i)this.G(e,
this.i[e]);Tg(this);this.O&&this.O(this.f);this.A.F("onReady",this.f)}}else this.fa=V(x(this.X,this),50)}};
function Xg(a,b,c){var d=b[c];return function(){try{return a.Y=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Y=e,T(e,"WARNING"))}}}
function Pg(a){a.u=!1;if(a.N)for(var b in a.i)a.N(b,a.i[b]);for(var c in a.M)window.clearTimeout(parseInt(c,10));a.M={};a.G=null;a.N=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=x(a.T,a);a.f.removeEventListener=x(a.La,a);a.f.destroy=x(a.dispose,a);a.f.getLastError=x(a.va,a);a.f.getPlayerType=x(a.wa,a);a.f.getCurrentVideoConfig=x(a.ua,a);a.f.loadNewVideoConfig=x(a.da,a);a.f.isReady=x(a.Ca,a)}
l.Ca=function(){return this.u};
l.T=function(a,b){if(!this.g){var c=Qg(this,b);if(c){if(!(0<=Ma(this.oa,a)||this.i[a])){var d=Yg(this,a);this.G&&this.G(a,d)}this.A.subscribe(a,c);"onReady"==a&&this.u&&V(y(c,this.f),0)}}};
l.La=function(a,b){if(!this.g){var c=Qg(this,b);c&&bd(this.A,a,c)}};
function Qg(a,b){var c=b;if("string"==typeof b){if(a.R[b])return a.R[b];c=function(){var a=u(b);a&&a.apply(p,arguments)};
a.R[b]=c}return c?c:null}
function Yg(a,b){var c="ytPlayer"+b+a.H,d=x(function(a){if("html5"==(Ug(this)?"html5":null)){var c=this.b&&this.b.args&&this.b.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.A.F(b,a);return}}var d=V(x(function(){if(!this.g){this.A.F(b,a);var c=this.M,e=String(d);e in c&&delete c[e]}},this),0);
ab(this.M,String(d))},a);
a.i[b]=c;p[c]=d;return c}
l.ra=function(a){$d("a11y-announce",a)};
l.Ea=function(a){$d("WATCH_LATER_VIDEO_ADDED",a)};
l.Fa=function(a){$d("WATCH_LATER_VIDEO_REMOVED",a)};
l.wa=function(){return this.L||(Ug(this)?"html5":null)};
l.va=function(){return this.Y};
function Vg(a){Bg("dcp");a.cancel();Pg(a);a.L=null;a.b&&(a.b.loaded=!1);var b=Ug(a);"html5"==(Ug(a)?"html5":null)&&(Rg(a)||!Wg(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.P;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.D&&ke(this.b.assets.js,this.D);window.clearTimeout(this.fa);this.K=!1};
l.l=function(){Vg(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){T(b)}this.R=null;for(var a in this.i)p[this.i[a]]=null;this.Z=this.b=this.f=null;delete this.P;delete this.m;I.prototype.l.call(this)};
function Wg(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Zg={},$g="player_uid_"+(1E9*Math.random()>>>0);function ah(a){var b="player";b=r(b)?Ib(b):b;a=Nf(a);var c=$g+"_"+(b[ua]||(b[ua]=++va)),d=Zg[c];if(d)return d.da(a),d.f;d=new Og(b,c);Zg[c]=d;$d("player-added",d.f);nc(d,y(bh,d));V(function(){d.da(a)},0);
return d.f}
function bh(a){delete Zg[a.H]}
;function ch(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function dh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return eh(a)}
function eh(a,b,c){if(ta(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function fh(a,b,c,d){if(ta(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function gh(a){var b=a.video_id||a.videoId;if(r(b)){var c=yf()||{},d=yf()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=Af;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function hh(a){I.call(this);this.f=a;this.f.subscribe("command",this.la,this);this.h={};this.i=!1}
A(hh,I);l=hh.prototype;l.start=function(){this.i||this.g||(this.i=!0,ih(this.f,"RECEIVING"))};
l.la=function(a,b){if(this.i&&!this.g){var c=b||{};switch(a){case "addEventListener":if(r(c.event)&&(c=c.event,!(c in this.h))){var d=x(this.Na,this,c);this.h[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":r(c.event)&&jh(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=kh(a,b||{}),c=this.b[a].apply(this.b,c),(c=lh(a,c))&&this.i&&!this.g&&ih(this.f,a,c))}}};
l.Na=function(a,b){this.i&&!this.g&&ih(this.f,a,this.ba(a,b))};
l.ba=function(a,b){if(null!=b)return{value:b}};
function jh(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
l.l=function(){var a=this.f;a.g||bd(a.b,"command",this.la,this);this.f=null;for(var b in this.h)jh(this,b);hh.o.l.call(this)};function mh(a,b){hh.call(this,b);this.b=a;this.start()}
A(mh,hh);mh.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
mh.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function kh(a,b){switch(a){case "loadVideoById":return b=eh(b),gh(b),[b];case "cueVideoById":return b=eh(b),gh(b),[b];case "loadVideoByPlayerVars":return gh(b),[b];case "cueVideoByPlayerVars":return gh(b),[b];case "loadPlaylist":return b=fh(b),gh(b),[b];case "cuePlaylist":return b=fh(b),gh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function lh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
mh.prototype.ba=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return mh.o.ba.call(this,a,b)};
mh.prototype.l=function(){mh.o.l.call(this);delete this.b};function nh(a,b,c,d){I.call(this);this.f=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=x(this.A,this);window.addEventListener("message",this.m)}
n(nh,I);nh.prototype.A=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.u=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Ma(this.j,b.func))&&this.i(b.func,b.args)}}};
nh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=yc(a);c.postMessage(d,this.u)}catch(e){T(e,"WARNING")}}};
nh.prototype.l=function(){window.removeEventListener("message",this.m);I.prototype.l.call(this)};function oh(a,b,c){nh.call(this,a,b,c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(oh,nh);function ph(){var a=this.g=new oh(!!R("WIDGET_ID_ENFORCE")),b=x(this.Ha,this);a.i=b;a.j=null;this.g.channel="widget";if(a=R("WIDGET_ID"))this.g.sessionId=a;this.h=[];this.j=!1;this.i={}}
l=ph.prototype;l.Ha=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,qh(this,c)),this.i[c]=!0)}else this.na(a,b)};
l.na=function(){};
function qh(a,b){return x(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.ta=function(){this.j=!0;this.sendMessage("initialDelivery",this.ca());this.sendMessage("onReady");C(this.h,this.ma,this);this.h=[]};
l.ca=function(){return null};
function rh(a,b){a.sendMessage("infoDelivery",b)}
l.ma=function(a){this.j?this.g.sendMessage(a):this.h.push(a)};
l.sendMessage=function(a,b){this.ma({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.g=null};function sh(a){ph.call(this);this.b=a;this.f=[];this.addEventListener("onReady",x(this.Ga,this));this.addEventListener("onVideoProgress",x(this.Ra,this));this.addEventListener("onVolumeChange",x(this.Sa,this));this.addEventListener("onApiChange",x(this.Ma,this));this.addEventListener("onPlaybackQualityChange",x(this.Oa,this));this.addEventListener("onPlaybackRateChange",x(this.Pa,this));this.addEventListener("onStateChange",x(this.Qa,this))}
A(sh,ph);l=sh.prototype;l.na=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&ch(a)){var c=b;if(ta(c[0])&&!w(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=eh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=dh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=fh.apply(window,c)}c=d}gh(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);ch(a)&&rh(this,this.ca())}};
l.Ga=function(){var a=x(this.ta,this);this.g.b=a};
l.addEventListener=function(a,b){this.f.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ca=function(){if(!this.b)return null;var a=this.b.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
l.Qa=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());rh(this,a)};
l.Oa=function(a){rh(this,{playbackQuality:a})};
l.Pa=function(a){rh(this,{playbackRate:a})};
l.Ma=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.Sa=function(){rh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.Ra=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());rh(this,a)};
l.dispose=function(){sh.o.dispose.call(this);for(var a=0;a<this.f.length;a++){var b=this.f[a];this.b.removeEventListener(b.eventType,b.listener)}this.f=[]};function th(){I.call(this);this.b=new K;nc(this,y(oc,this.b))}
A(th,I);th.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
th.prototype.C=function(a){return this.g?!1:this.b.C(a)};
th.prototype.j=function(a,b){this.g||this.b.F.apply(this.b,arguments)};function uh(a,b,c){th.call(this);this.f=a;this.h=b;this.i=c}
A(uh,th);function ih(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(yc(a),d.h))}}
uh.prototype.l=function(){this.h=this.f=null;uh.o.l.call(this)};function vh(a,b,c){I.call(this);this.b=a;this.h=c;this.i=$e(window,"message",x(this.j,this));this.f=new uh(this,a,b);nc(this,y(oc,this.f))}
A(vh,I);vh.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,r(a))){try{a=JSON.parse(a)}catch(d){return}a.command&&(b=this.f,b.g||b.j("command",a.command,a.data))}};
vh.prototype.l=function(){af(this.i);this.b=null;vh.o.l.call(this)};function wh(){var a=Xa(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||R("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||U("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=bb(xh);return new J(function(c,d){b.J=function(a){se(a)?c(a):d(new yh("Request failed, status="+a.status,"net.badstatus"))};
b.onError=function(){d(new yh("Unknown request error","net.unknown"))};
b.W=function(){d(new yh("Request timed out","net.timeout"))};
ze(a,b)})}
function yh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(yh,B);function zh(a){this.f=void 0===a?null:a;this.g=0;this.b=null}
zh.prototype.then=function(a,b,c){return this.f?this.f.then(a,b,c):1===this.g&&a?(a=a.call(c,this.b),Fc(a)?a:Ah(a)):2===this.g&&b?(a=b.call(c,this.b),Fc(a)?a:Bh(a)):this};
zh.prototype.getValue=function(){return this.b};
Ec(zh);function Bh(a){var b=new zh;a=void 0===a?null:a;b.g=2;b.b=void 0===a?null:a;return b}
function Ah(a){var b=new zh;a=void 0===a?null:a;b.g=1;b.b=void 0===a?null:a;return b}
;function Ch(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Dh;this.isTimeout=a instanceof yh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Tc}
n(Ch,B);Ch.prototype.name="BiscottiError";function Dh(){B.call(this,"Biscotti ID is missing from server")}
n(Dh,B);Dh.prototype.name="BiscottiMissingError";var xh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Eh=null;function Fh(){if("1"===Xa(R("PLAYER_CONFIG",{}),"args","privembed"))return Kc(Error("Biscotti ID is not available in private embed mode"));Eh||(Eh=Sc(wh().then(Gh),function(a){return Hh(2,a)}));
return Eh}
function Gh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Dh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Dh;a=a.id;Ih(a);Eh=Ah(a);Jh(18E5,2);return a}
function Hh(a,b){var c=new Ch(b);Ih("");Eh=Bh(c);0<a&&Jh(12E4,a-1);throw c;}
function Jh(a,b){V(function(){Sc(wh().then(Gh,function(a){return Hh(b,a)}),pa)},a)}
function Ih(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function Kh(){try{var a=u("yt.ads.biscotti.getId_");return a?a():Fh()}catch(b){return Kc(b)}}
;function Lh(a){B.apply(this,arguments)}
n(Lh,B);Lh.prototype.name="MutsuError";function Mh(){var a=new Lh("ID is missing"),b=new Lh("Timeout"),c=null,d=!1;Ld(function(){c=Jd();d=!0});
if(d)return c?Ah(c):Bh(a);var e=new J(function(b,c){Ld(function(){var d=Jd();d?b(d):c(a)})}),f=pd().then(function(){return Kc(b)});
return Qc(Nc([e,f]),function(){return f.cancel()})}
;function Nh(a){if("1"!==Xa(R("PLAYER_CONFIG",{}),"args","privembed")){a&&!u("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",Fh,void 0);try{var b=Kh();if(U("enable_mutsu")){u("yt.ads.mutsu.getId_")||(Id(),M[3]=!0,t("yt.ads.mutsu.getId_",Mh,void 0));try{var c=u("yt.ads.mutsu.getId_")()}catch(d){c=Kc(d)}}else c=Kc(new Lh("unimplemented"));Oc([b,c]).then(function(a){var b=a[0];a=a[1];if(b.aa||a.aa){b=b.value;a=a.value;var c={};c.dt=Sb;c.flash=zd||"0";a:{try{var d=window.top.location.href}catch(kb){d=
2;break a}d=null!=d?d==window.document.location.href?0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?H:h;try{var k=h.history.length}catch(kb){k=0}d.u_his=k;d.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(d.u_h=H.screen.height,d.u_w=H.screen.width,d.u_ah=H.screen.availHeight,d.u_aw=H.screen.availWidth,d.u_cd=H.screen.colorDepth);H.navigator&&H.navigator.plugins&&(d.u_nplug=H.navigator.plugins.length);
H.navigator&&H.navigator.mimeTypes&&(d.u_nmime=H.navigator.mimeTypes.length);d.ca_type=yd?"flash":"image";if(U("enable_server_side_search_pyv")||U("enable_server_side_mweb_search_pyv")){k=window;try{var m=k.screenX;var v=k.screenY}catch(kb){}try{var Ba=k.outerWidth;var qg=k.outerHeight}catch(kb){}try{var rg=k.innerWidth;var sg=k.innerHeight}catch(kb){}m=[k.screenLeft,k.screenTop,m,v,k.screen?k.screen.availWidth:void 0,k.screen?k.screen.availTop:void 0,Ba,qg,rg,sg];v=window.top;try{if(v.document&&
!v.document.body)var W=new Hb(-1,-1);else{var Ca=(v||window).document,Cd="CSS1Compat"==Ca.compatMode?Ca.documentElement:Ca.body;W=(new Hb(Cd.clientWidth,Cd.clientHeight)).round()}var Da=W}catch(kb){Da=new Hb(-12245933,-12245933)}W={};Ca=0;p.SVGElement&&p.document.createElementNS&&(Ca|=1);W.bc=Ca;W.bih=Da.height;W.biw=Da.width;W.brdim=m.join();Da=(W.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Qb.webkitVisibilityState||Qb.mozVisibilityState||Qb.visibilityState||""]||0,W.wgl=!!H.WebGLRenderingContext,
W);for(var Dd in Da)d[Dd]=Da[Dd]}void 0!==b&&(d.bid=b);void 0!==a&&(d.mutsuid=a);d.bsq=Oh++;Fe("//www.youtube.com/ad_data_204",{xa:!1,w:d})}});
V(Nh,18E5)}catch(d){T(d)}}}
var Oh=0;var Z=u("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Ph(){this.b=R("ALT_PREF_COOKIE_NAME","PREF");var a=Yb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
l=Ph.prototype;l.get=function(a,b){Qh(a);Rh(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
l.set=function(a,b){Qh(a);Rh(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
l.remove=function(a){Qh(a);Rh(a);delete Z[a]};
l.save=function(){var a=this.b,b=[],c;for(c in Z)b.push(c+"="+encodeURIComponent(String(Z[c])));Ff(a,b.join("&"),63072E3)};
l.clear=function(){for(var a in Z)delete Z[a]};
function Rh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Qh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Sh(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ph.b=void 0;Ph.getInstance=function(){return Ph.b?Ph.b:Ph.b=new Ph};var Th=null,Uh=null,Vh=null,Wh={};function Xh(a){uf(a.payload_name,a.payload,xf,void 0,void 0)}
function Yh(a){var b=a.id;a=a.ve_type;var c=ff++;a=new ef(void 0,a,c,void 0,void 0);Wh[b]=a;b=Ef();c=Df();b&&c&&vf(b,c,a)}
function Zh(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Q("client-screen-nonce",b),Q("ROOT_VE_TYPE",a),a=Df()))for(var c in Wh){var d=Wh[c];d&&vf(b,a,d)}}
function $h(a){Wh[a.id]=new ef(a.tracking_params)}
function ai(a){var b=Ef();a=Wh[a.id];b&&a&&wf(xf,{click:{csn:b,visualElement:gf(a)}})}
function bi(a){a=a.ids;var b=Ef();if(b)for(var c=0;c<a.length;c++){var d=Wh[a[c]];if(d){var e=b,f=xf;U("interaction_logging_on_gel_web")?uf("visualElementShown",{csn:e,ve:gf(d),eventType:1},f):wf(f,{visibilityUpdate:{csn:e,visualElements:[gf(d)]}},void 0)}}}
function ci(){var a=Th;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",Q,void 0);t("yt.config.set",Q,void 0);t("yt.setMsg",Oe,void 0);t("yt.msgs.set",Oe,void 0);t("yt.logging.errors.log",Me,void 0);
t("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);Nh(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=R("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);R("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&gh(a.args);Th=a=ah(a);a.addEventListener("onScreenChanged",Zh);a.addEventListener("onLogClientVeCreated",Yh);a.addEventListener("onLogServerVeCreated",$h);a.addEventListener("onLogToGel",Xh);
a.addEventListener("onLogVeClicked",ai);a.addEventListener("onLogVesShown",bi);a.addEventListener("onReady",ci);b=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Vh=new sh(a):R("ENABLE_POST_API")&&r(b)&&r(c)&&(Uh=new vh(window.parent,b,c),Vh=new mh(a,Uh.f));R("BG_P")&&(R("BG_I")||R("BG_IU"))&&me();Te()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){Ie(a+"mac_204?action_fcts=1");return!0},void 0);
var di=Od(function(){Bg("ol");var a=Ph.getInstance(),b=!!((Sh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&rc(document.body,"exp-invert-logo"))if(c&&!rc(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):rc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&rc(document.body,"inverted-hdpi")&&sc();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Sh(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),ei=Od(function(){var a=Th;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&(le=null);a=0;for(var b=Re.length;a<b;a++)Qe(Re[a]);Re.length=0;je("//static.doubleclick.net/instream/ad_status.js");Se=!1;Q("DCLKSTAT",0);pc(Vh,Uh);if(a=Th)a.removeEventListener("onScreenChanged",Zh),a.removeEventListener("onLogClientVeCreated",Yh),a.removeEventListener("onLogServerVeCreated",$h),a.removeEventListener("onLogToGel",Xh),a.removeEventListener("onLogVeClicked",ai),a.removeEventListener("onLogVesShown",bi),a.removeEventListener("onReady",
ci),a.destroy();Wh={}});
window.addEventListener?(window.addEventListener("load",di),window.addEventListener("unload",ei)):window.attachEvent&&(window.attachEvent("onload",di),window.attachEvent("onunload",ei));}).call(this);
