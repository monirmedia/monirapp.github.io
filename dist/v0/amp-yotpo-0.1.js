(self.AMP=self.AMP||[]).push({n:"amp-yotpo",v:"0",f:(function(AMP,_){
function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var e in b)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,e);d&&Object.defineProperty(a,e,d)}else a[e]=b[e]}function p(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ba=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function q(a){var b=Object.create(null);if(!a)return b;for(var c;c=ba.exec(a);){var e=p(c[1],c[1]),d=c[2]?p(c[2],c[2]):"";b[e]=d}return b};var v="";
function w(){var a=void 0,b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var e=!!(self.AMP_CONFIG||{}).test||!1,d=q(c.location.originalHash||c.location.hash),f=q(c.location.search);v||(v=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"010");c=b.AMP_MODE={localDev:!1,development:!("1"!=d.development&&!c.AMP_DEV_MODE),examiner:"2"==d.development,filter:d.filter,geoOverride:d["amp-geo"],minified:!0,lite:void 0!=f.amp_lite,test:e,log:d.log,version:"0",rtvVersion:v}}return c}
;self.log=self.log||{user:null,dev:null,userForEmbed:null};var x=self.log;function A(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function B(){if(x.dev)return x.dev;throw Error("failed to call initLogConstructor");};function C(a){return a||{}};function D(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,b=b.__AMP_TOP||b;a=E(b,"ampdoc").getAmpDoc(a)}return a}function F(a){a=D(a);return a.isSingleDoc()?a.win:a}function E(a,b){var c=a.services;c||(c=a.services={});var e=c;a=e[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function G(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function ca(a){a.parentElement&&a.parentElement.removeChild(a)};function J(a){this.w=a;this.l=this.m=0;this.h=Object.create(null)}J.prototype.has=function(a){return!!this.h[a]};J.prototype.get=function(a){var b=this.h[a];if(b)return b.access=++this.l,b.payload};J.prototype.put=function(a,b){this.has(a)||this.m++;this.h[a]={payload:b,access:this.l};if(!(this.m<=this.w)){B().warn("lru-cache","Trimming LRU cache");a=this.h;var c=this.l+1,e,d;for(d in a){var f=a[d].access;f<c&&(c=f,e=d)}void 0!==e&&(delete a[e],this.m--)}};var K=self.AMP_CONFIG||{},L={thirdParty:K.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:K.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof K.thirdPartyFrameRegex?new RegExp(K.thirdPartyFrameRegex):K.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:K.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof K.cdnProxyRegex?new RegExp(K.cdnProxyRegex):K.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:K.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:K.localDev||!1};C({c:!0,v:!0,a:!0,ad:!0});var M,N;
function O(a){var b;M||(M=self.document.createElement("a"),N=self.UrlCache||(self.UrlCache=new J(100)));var c=b?null:N,e=M;if(c&&c.has(a))a=c.get(a);else{e.href=a;e.protocol||(e.href=e.href);var d={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
e.origin&&"null"!=e.origin?e.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function da(a){"string"==typeof a&&(a=O(a));var b;(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b};function ea(a){for(var b=a.nodeName,c=0,e=0,d=a.previousElementSibling;d&&25>e&&100>c;)d.nodeName==b&&e++,c++,d=d.previousElementSibling;return 25>e&&100>c?"."+e:""};function P(a,b){try{return JSON.parse(a)}catch(c){b&&b(c)}};function Q(a,b){var c=R(a);return!!c[b]}
function R(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var e=a.AMP_CONFIG[c];"number"===typeof e&&0<=e&&1>=e&&(b[c]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var d=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(f){var g=
f.getAttribute("content").split(",");for(c=0;c<g.length;c++)-1!=d.indexOf(g[c])&&(b[g[c]]=!0)}}Object.assign(b,fa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=q(a.location.originalHash||a.location.hash);for(var h=0;h<c.length;h++){var k=a["e-"+c[h]];"1"==k&&(b[c[h]]=!0);"0"==k&&(b[c[h]]=!1)}}return b}
function fa(a){a:{var b;try{b=a.document.cookie}catch(g){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),e=c.indexOf("=");if(-1!=e&&"AMP_EXP"==p(c.substring(0,e).trim(),void 0)){a=c.substring(e+1).trim();a=p(a,a);break a}}a=null}var d=a,f=d?d.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};var S,T="Webkit webkit Moz moz ms O o".split(" ");function ga(a){var b,c;c=a.style;if(G("border","--"))c="border";else{S||(S=Object.create(null));var e=S.border;if(!e){e="border";if(void 0===c.border){var d;b:{for(d=0;d<T.length;d++){var f=T[d]+"Border";if(void 0!==c[f]){d=f;break b}}d=""}void 0!==c[d]&&(e=d)}S.border=e}c=e}c&&(a.style[c]=b?"none"+b:"none")};function ha(a){if(!U(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return B().error("MESSAGING","Failed to parse message: "+a,c),null}}function U(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function V(a,b,c){var e=a.listeningFors;!e&&c&&(e=a.listeningFors=Object.create(null));a=e||null;if(!a)return a;var d=a[b];!d&&c&&(d=a[b]=[]);return d||null}function ia(a,b){var c=!0,e=O(b.src).origin,d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=V(a,d,!0);for(var f,d=0;d<a.length;d++){var g=a[d];if(g.frame===b){f=g;break}}f||(f={frame:b,origin:e,events:Object.create(null)},a.push(f));return f.events}
function ja(a){for(var b=C({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var e=a[c];if(!e.frame.contentWindow){a.splice(c,1);var d=e.events,f;for(f in d)d[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function ka(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=la(b.data);if(c&&c.sentinel){var d;d=c.sentinel;var f=b.origin,g=b.source,h=V(a,d);if(h){for(var k,r=0;r<h.length;r++){var t=h[r],m=t.frame.contentWindow;if(m)if("amp"===d){if(t.origin===f&&m==g){k=t;break}}else{var l;if(!(l=g==m))b:{for(l=g;l&&l!=l.parent;l=l.parent)if(l==m){l=!0;break b}l=!1}if(l){k=t;break}}else setTimeout(ja,0,h)}d=k?k.events:null}else d=h;var H=d;if(H){var u=H[c.type];if(u)for(u=u.slice(),d=0;d<u.length;d++)(0,u[d])(c,
b.source,b.origin)}}}};a.addEventListener("message",b)}}function ma(a,b){function c(c,d,f){if(e||d==a.contentWindow)"unlisten"==c.sentinel?h():b(c,d,f)}var e,d="embed-size",f=a.ownerDocument.defaultView;ka(f);var f=ia(f,a),g=f[d]||(f[d]=[]),h;g.push(c);return h=function(){if(c){var a=g.indexOf(c);-1<a&&g.splice(a,1);b=g=c=null}}}
function la(a){"string"==typeof a&&(a="{"==a.charAt(0)?P(a,function(a){B().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:U(a)?ha(a):null);return a};function W(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};var X={};
function na(a,b){A().assert("yotpo","Attribute type required for <amp-ad>: %s",b);for(var c=0,e=a;e&&e!=e.parent;e=e.parent)c++;var c=String(c)+"-"+Y(a),d=e={},f=b.dataset,g;for(g in f)G(g,"vars")||(d[g]=f[g]);if(g=b.getAttribute("json")){g=P(g);if(void 0===g)throw A().createError("Error parsing JSON in json attribute in element %s",b);for(var h in g)d[h]=g[h]}h=e;e=Date.now();d=b.getAttribute("width");g=b.getAttribute("height");h=h?h:{};h.width=W(d);h.height=W(g);b.getAttribute("title")&&(h.title=
b.getAttribute("title"));var k=a.location.href;"about:srcdoc"==k&&(k=a.parent.location.href);var d=D(b),d=F(d),r=E(d,"documentInfo").get(),d=D(b),d=F(d),t=E(d,"viewer"),d=t.getUnconfirmedReferrerUrl(),m=b.getPageLayoutBox();g=h;var f=L.thirdParty+"/0/ampcontext-v0.js",l=r.sourceUrl,H=r.canonicalUrl,r=r.pageViewId,k={href:k},u=b.tagName,oa={localDev:!1,development:w().development,filter:w().filter,minified:!0,lite:w().lite,test:!1,log:w().log,version:w().version,rtvVersion:w().rtvVersion},
pa=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary),t=!t.isVisible(),m=m?{left:m.left,top:m.top,width:m.width,height:m.height}:null,qa=b.getIntersectionChangeEntry(),n;n=b;for(var I=[],y=0;n&&1==n.nodeType&&25>y;){var z="";n.id&&(z="/"+n.id);I.push(""+n.nodeName.toLowerCase()+z+ea(n));y++;n=n.parentElement}n=I.join();I=n.length;y=5381;for(z=0;z<I;z++)y=33*y^n.charCodeAt(z);g._context=C({ampcontextVersion:"0",ampcontextFilepath:f,sourceUrl:l,referrer:d,canonicalUrl:H,pageViewId:r,location:k,
startTime:e,tagName:u,mode:oa,canary:pa,hidden:t,initialLayoutRect:m,initialIntersection:qa,domFingerprint:String(y>>>0),experimentToggles:R(a),sentinel:c});(a=b.getAttribute("src"))&&(h.src=a);e=h;e.type="yotpo";Object.assign(e._context,void 0);return e}
function ra(a,b){var c={},e=c.disallowCustom,d=c.allowFullscreen,c=na(a,b),f=a.document.createElement("iframe");X[c.type]||(X[c.type]=0);X[c.type]+=1;var g=sa(a,e),h=O(g).hostname,k=JSON.stringify(C({host:h,type:c.type,count:X[c.type],attributes:c}));f.src=g;f.ampLocation=O(g);f.name=k;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);d&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");ga(f);f.onload=function(){this.readyState="complete"};
Q(a,"no-sync-xhr-in-ads")&&f.setAttribute("allow","sync-xhr 'none';");Q(a,"sandbox-ads")&&ta(f);f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}
function sa(a,b){var c=void 0,e=a.bootstrapBaseUrl;if(e)a=e;else{var d;d=c;var f=a.document.querySelector('meta[name="amp-3p-iframe-src"]');if(f)if(b)A().error("3p-frame","3p iframe url disabled for yotpo"),d=null;else{b=f.getAttribute("content");var g;g=void 0===g?"source":g;A().assert(null!=b,"%s %s must be available",f,g);A().assert(da(b)||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',f,g,b);A().assert(-1==
b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,f);g=O(b);A().assert("localhost"==g.hostname&&!d||g.origin!=O(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",b,g.origin,f);d=b+"?0"}else d=null;d||(a.defaultBootstrapSubDomain=a.defaultBootstrapSubDomain||"d-"+Y(a),d="https://"+
a.defaultBootstrapSubDomain+("."+L.thirdPartyFrameHost+"/0/")+"frame.html");a=a.bootstrapBaseUrl=d}return a}function Y(a){var b;if(a.crypto&&a.crypto.getRandomValues){var c=new Uint32Array(2);a.crypto.getRandomValues(c);b=String(c[0])+c[1]}else b=String(a.Math.random()).substr(2)+"0";return b}
function ta(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts".split(" "),e=0;e<b.length;e++){var d=b[e];if(!a.sandbox.supports(d)){B().info("3p-frame","Iframe doesn't support "+d);return}}a.sandbox=b.join(" ")+" "+c.join(" ")}};function Z(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;a.o=[];return a}aa(Z,AMP.BaseElement);Z.prototype.preconnectCallback=function(a){this.preconnect.url("https://staticw2.yotpo.com",a)};
Z.prototype.buildCallback=function(){var a=this;A().assert(this.element.getAttribute("data-app-key"),"The data-app-key attribute is required for <amp-yotpo> %s",this.element);A().assert(this.element.getAttribute("data-widget-type"),"The data-widget-type attribute is required for <amp-yotpo> %s",this.element);var b=ra(this.win,this.element);this.applyFillContent(b);var c=ma(b,function(b){a.attemptChangeHeight(b.height).catch(function(){})});this.o.push(c);this.element.appendChild(b);this.j=b;return this.loadPromise(b)};
Z.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};Z.prototype.unlayoutOnPause=function(){return!0};Z.prototype.unlayoutCallback=function(){this.o.forEach(function(a){return a()});this.o.length=0;this.j&&(ca(this.j),this.j=null);return!0};(function(a){a.registerElement("amp-yotpo",Z)})(self.AMP);
})});
//# sourceMappingURL=amp-yotpo-0.1.js.map

