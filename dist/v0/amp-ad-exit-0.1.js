(self.AMP=self.AMP||[]).push({n:"amp-ad-exit",v:"0",f:(function(AMP,_){
function g(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function l(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var m=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function n(a){var b=Object.create(null);if(!a)return b;for(var c;c=m.exec(a);){var d=l(c[1],c[1]),e=c[2]?l(c[2],c[2]):"";b[d]=e}return b};var q="";
function t(){var a,b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var d=!!(self.AMP_CONFIG||{}).test||!1,e=n(c.location.originalHash||c.location.hash),f=n(c.location.search);q||(q=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"010");c=b.AMP_MODE={localDev:!1,development:!("1"!=e.development&&!c.AMP_DEV_MODE),examiner:"2"==e.development,filter:e.filter,geoOverride:e["amp-geo"],minified:!0,lite:void 0!=f.amp_lite,test:d,log:e.log,version:"0",rtvVersion:q}}return c};var u=Object.prototype.toString;self.log=self.log||{user:null,dev:null,userForEmbed:null};var v=self.log;function w(){if(!v.user)throw Error("failed to call initLogConstructor");return v.user}function x(){if(v.dev)return v.dev;throw Error("failed to call initLogConstructor");};function y(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,c=z(b);if(b=b!=c&&A(b,"url-replace")?B(b,"url-replace"):null)return b}b=C(a);b=C(b);b=b.isSingleDoc()?b.win:b;return B(b,"url-replace")}function z(a){return a.__AMP_TOP||a}function C(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,b=z(b);a=B(b,"ampdoc").getAmpDoc(a)}return a}
function B(a,b){A(a,b);var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function A(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function D(a,b){var c,d;try{d=a.open(b,"_blank",c)}catch(e){x().error("DOM","Failed to open url on target: ","_blank",e)}d||a.open(b,"_top")};function E(a){this.J=a;this.A=this.D=0;this.j=Object.create(null)}E.prototype.has=function(a){return!!this.j[a]};E.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.A,b.payload};E.prototype.put=function(a,b){this.has(a)||this.D++;this.j[a]={payload:b,access:this.A};if(!(this.D<=this.J)){x().warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.A+1,d,e;for(e in a){var f=a[e].access;f<c&&(c=f,d=e)}void 0!==d&&(delete a[d],this.D--)}};var F,G;
function H(a){var b;F||(F=self.document.createElement("a"),G=self.UrlCache||(self.UrlCache=new E(100)));var c=b?null:G,d=F;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a};var I;function J(a,b){var c=void 0,d=a,e=b,f;f=function(a){try{return e(a)}catch(p){throw self.reportError(p),p;}};var k=K(),h=!1;c&&(h=c.capture);d.addEventListener("message",f,k?c:h);return function(){d&&d.removeEventListener("message",f,k?c:h);f=d=e=null}}function K(){if(void 0!==I)return I;I=!1;try{var a={get capture(){I=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return I};function L(a,b){return J(a,b)};function M(a,b){try{var c;a:{var d=(a.ownerDocument||a).defaultView;if(d&&d!=b&&z(d)==b)try{c=d.frameElement;break a}catch(f){}c=null}var e=c.parentElement;if("AMP-AD"==e.nodeName)return String(e.getResourceId())}catch(f){}return null};var aa={bg:"https://tpc.googlesyndication.com/b4a/b4a-runner.html",moat:"https://z.moatads.com/ampanalytics093284/iframe.html"};function Q(a,b){this.name=a;this.type=b}Q.prototype.filter=function(){};Q.prototype.onLayoutMeasure=function(){};function ba(a){w().assert("object"==typeof a);if(a.filters){var b=a.filters,c=["clickDelay","clickLocation","inactiveElement"],d;for(d in b)w().assert("object"==typeof b[d],"Filter specification '%s' is malformed",d),w().assert(-1!=c.indexOf(b[d].type),"Supported filters: "+c.join(", "))}else a.filters={};if(a.transport){var b=a.transport,e;for(e in b)w().assert("beacon"==e||"image"==e,"Unknown transport option: '"+e+"'"),w().assert("boolean"==typeof b[e])}else a.transport={};e=a.targets;w().assert("object"==
typeof e,"'targets' must be an object");for(var f in e)ca(f,e[f],a);return a}function ca(a,b,c){w().assert("string"==typeof b.finalUrl,"finalUrl of target '%s' must be a string",a);b.filters&&b.filters.forEach(function(a){w().assert(c.filters[a],"filter '%s' not defined",a)});if(b.vars){a=/^_[a-zA-Z0-9_-]+$/;for(var d in b.vars)w().assert(a.test(d),"'%s' must match the pattern '%s'",d,a)}}
function R(a){return w().assertString(aa[a],"Unknown or invalid vendor "+a+", note that vendor must use transport: iframe")};function S(a,b,c){Q.call(this,a,b.type);w().assert("clickDelay"==b.type&&"number"==typeof b.delay&&0<b.delay,"Invalid ClickDelay spec");this.spec=b;this.intervalStart=Date.now();b.startTimingEvent&&(c.performance&&c.performance.timing?void 0==c.performance.timing[b.startTimingEvent]?x().warn("amp-ad-exit","Invalid performance timing event type "+b.startTimingEvent+", falling back to now"):this.intervalStart=c.performance.timing[b.startTimingEvent]:x().warn("amp-ad-exit","Browser does not support performance timing, falling back to now"))}
g(S,Q);S.prototype.filter=function(){return Date.now()-this.intervalStart>=this.spec.delay};function T(a){var b=1E3;return{type:"clickDelay",delay:b,startTimingEvent:a}};function U(a,b,c){Q.call(this,a,b.type);w().assert("clickLocation"==b.type&&("undefined"===typeof b.left||"number"===typeof b.left)&&("undefined"===typeof b.right||"number"===typeof b.right)&&("undefined"===typeof b.top||"number"===typeof b.top)&&("undefined"===typeof b.bottom||"number"===typeof b.bottom)&&("undefined"===typeof b.relativeTo||"string"===typeof b.relativeTo),"Invaid ClickLocation spec");this.K=b.left||0;this.L=b.right||0;this.N=b.top||0;this.I=b.bottom||0;this.C=b.relativeTo;this.F=
c;this.c={}}g(U,Q);U.prototype.filter=function(a){return a.clientX>=this.c.left&&a.clientX<=this.c.right&&a.clientY>=this.c.top&&a.clientY<=this.c.bottom?!0:!1};
U.prototype.onLayoutMeasure=function(){var a=this;this.F.getVsync().measure(function(){var b=a.F.win;if(a.C){var c=b.document.querySelector(a.C);w().assert(c,"relativeTo element "+a.C+" not found.");var d=c.getBoundingClientRect();a.c.left=d.left;a.c.top=d.top;a.c.bottom=d.bottom;a.c.right=d.right}else a.c.left=0,a.c.top=0,a.c.bottom=b.innerHeight,a.c.right=b.innerWidth;a.c.left+=a.K;a.c.top+=a.N;a.c.right-=a.L;a.c.bottom-=a.I})};function V(a,b){Q.call(this,a,b.type);w().assert("inactiveElement"==b.type&&"string"==typeof b.selector,"Invalid InactiveElementspec");this.M=b.selector}g(V,Q);V.prototype.filter=function(a){a=a.target;var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return!(b&&b.call(a,this.M))};function W(a,b,c){switch(b.type){case "clickDelay":return new S(a,b,c.win);case "clickLocation":return new U(a,b,c);case "inactiveElement":return new V(a,b)}};function X(a){a=AMP.BaseElement.call(this,a)||this;a.G={};a.l=[];a.m={beacon:!0,image:!0};a.w={};a.registerAction("exit",a.exit.bind(a));a.H={};a.o=null;a.h=null;a.B={};return a}g(X,AMP.BaseElement);
X.prototype.exit=function(a){var b=a,c=b.args,b=b.event,d=this,e=this.G[c.target];w().assert(e,"Exit target not found: '"+c.target+"'");w().assert(b,"Unexpected null event");if(Y(this.l,b)&&Y(e.filters,b)){b.preventDefault();var f=da(this,c,b,e);e.trackingUrls&&e.trackingUrls.map(f).forEach(function(a){d.m.beacon&&d.win.navigator.sendBeacon&&d.win.navigator.sendBeacon(a,"")||!d.m.image||(d.win.document.createElement("img").src=a)});D(this.win,f(e.finalUrl))}};
function da(a,b,c,d){var e={CLICK_X:function(){return c.clientX},CLICK_Y:function(){return c.clientY}},f=y(a.getAmpDoc()),k={RANDOM:!0,CLICK_X:!0,CLICK_Y:!0};if(d.vars){var h={},r;for(r in d.vars)h.customVarName=r,"_"==h.customVarName[0]&&(h.customVar=d.vars[h.customVarName],h.customVar&&(e[h.customVarName]=function(c){return function(){if(c.customVar.iframeTransportSignal){var d=f.expandStringSync(c.customVar.iframeTransportSignal,{IFRAME_TRANSPORT_SIGNAL:function(b,c){if(!b||!c)return"";var d=a.H[b];
if(d&&c in d)return d[c]}});if(c.customVar.iframeTransportSignal=="IFRAME_TRANSPORT_SIGNAL"+d)x().error("amp-ad-exit","Invalid IFRAME_TRANSPORT_SIGNAL format:"+d+" (perhaps there is a space after a comma?)");else if(""!=d)return d}return c.customVarName in b?b[c.customVarName]:c.customVar.defaultValue}}(h),k[h.customVarName]=!0,h={customVar:h.customVar,customVarName:h.customVarName}))}return function(a){return f.expandUrlSync(a,e,void 0,k)}}
function Y(a,b){return a.every(function(a){var c=a.filter(b);w().info("amp-ad-exit","Filter '"+a.name+"': "+(c?"pass":"fail"));return c})}
X.prototype.buildCallback=function(){var a=this;this.element.setAttribute("aria-hidden","true");this.l.push(W("minDelay",T(),this));this.l.push(W("carouselBtns",{type:"inactiveElement",selector:".amp-carousel-button"},this));var b=this.element.children;w().assert(1==b.length,"The tag should contain exactly one <script> child.");b=b[0];w().assert("SCRIPT"==b.tagName&&b.hasAttribute("type")&&"APPLICATION/JSON"==b.getAttribute("type").toUpperCase(),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');
try{var c=ba(JSON.parse(b.textContent)),d;"[object Object]"===u.call(c.options)&&"string"===typeof c.options.startTimingEvent&&(d=c.options.startTimingEvent,this.l.splice(0,1,W("minDelay",T(c.options.startTimingEvent),this)));for(var e in c.filters){var f=c.filters[e];"clickDelay"==f.type&&(f.startTimingEvent=f.startTimingEvent||d);this.w[e]=W(e,f,this)}for(var k in c.targets){var h=c.targets[k];this.G[k]={finalUrl:h.finalUrl,trackingUrls:h.trackingUrls||[],vars:h.vars||{},filters:(h.filters||[]).map(function(b){return a.w[b]}).filter(function(a){return a})};
for(var r in h.vars)if(h.vars[r].iframeTransportSignal){var p=h.vars[r].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(p&&!(2>p.length)){var P=p[1],N=H(R(P)).origin;this.B[N]=this.B[N]||P}}}this.m.beacon=!1!==c.transport.beacon;this.m.image=!1!==c.transport.image}catch(O){throw this.user().error("amp-ad-exit","Invalid JSON config",O),O;}Z(this)};X.prototype.resumeCallback=function(){Z(this)};X.prototype.unlayoutCallback=function(){this.o&&(this.o(),this.o=null);return AMP.BaseElement.prototype.unlayoutCallback.call(this)};
function Z(a){"inabox"!=t().runtime&&(a.h=a.h||M(a.element,z(a.win)),a.h?a.o=L(a.getAmpDoc().win,function(b){if(a.B[b.origin]){var c;var d=b.data;if("string"==typeof d&&0==d.indexOf("amp-")&&-1!=d.indexOf("{")){var e=d.indexOf("{");try{c=JSON.parse(d.substr(e))}catch(k){x().error("MESSAGING","Failed to parse message: "+d,k),c=null}}else c=null;var f=c;f&&"iframe-transport-response"==f.type&&(c=f,b=b.origin,w().assert(c.message,"Received empty response from 3p analytics frame"),w().assert(c.creativeId,
"Received malformed message from 3p analytics frame: creativeId missing"),w().assert(c.vendor,"Received malformed message from 3p analytics frame: vendor missing"),d=H(R(c.vendor)),w().assert(d&&d.origin==b,"Invalid origin for vendor "+(c.vendor+": "+b)),f.creativeId==a.h&&(a.H[f.vendor]=f.message))}}):w().warn("amp-ad-exit","No friendly parent amp-ad element was found for amp-ad-exit; not in inabox case."))}X.prototype.isLayoutSupported=function(){return!0};X.prototype.onLayoutMeasure=function(){for(var a in this.w)this.w[a].onLayoutMeasure()};
(function(a){a.registerElement("amp-ad-exit",X)})(self.AMP);
})});
//# sourceMappingURL=amp-ad-exit-0.1.js.map

