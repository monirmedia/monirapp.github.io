(self.AMP=self.AMP||[]).push({n:"amp-mustache",v:"0",f:(function(AMP,_){
function aa(b,a){function c(){}c.prototype=a.prototype;b.prototype=new c;b.prototype.constructor=b;for(var d in a)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(a,d);e&&Object.defineProperty(b,d,e)}else b[d]=a[d]}function ba(b,a){a=void 0===a?"":a;try{return decodeURIComponent(b)}catch(c){return a}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;self.log=self.log||{user:null,dev:null,userForEmbed:null};var p=self.log;function z(){if(!p.user)throw Error("failed to call initLogConstructor");return p.user};function fa(b){return b||{}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function C(b,a){return a.length>b.length?!1:0==b.lastIndexOf(a,0)};function ga(b,a){for(var c=0,d;void 0!==(d=b[c]);c++)a(d,c)};function F(b){this.B=b;this.l=this.m=0;this.j=Object.create(null)}F.prototype.has=function(b){return!!this.j[b]};F.prototype.get=function(b){var a=this.j[b];if(a)return a.access=++this.l,a.payload};
F.prototype.put=function(b,a){this.has(b)||this.m++;this.j[b]={payload:a,access:this.l};if(!(this.m<=this.B)){if(p.dev)b=p.dev;else throw Error("failed to call initLogConstructor");b.warn("lru-cache","Trimming LRU cache");b=this.j;var c=this.l+1,d,e;for(e in b){var f=b[e].access;f<c&&(c=f,d=e)}void 0!==d&&(delete b[d],this.m--)}};var G=self.AMP_CONFIG||{},ha={thirdParty:G.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:G.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof G.thirdPartyFrameRegex?new RegExp(G.thirdPartyFrameRegex):G.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:G.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof G.cdnProxyRegex?new RegExp(G.cdnProxyRegex):G.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:G.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:G.localDev||!1};var ia=fa({c:!0,v:!0,a:!0,ad:!0}),ja,ka,la=/[?&]amp_js[^&]*/,va=/[?&]amp_gsa[^&]*/,wa=/[?&]amp_r[^&]*/,xa=/[?&]usqp[^&]*/;
function J(b){var a;ja||(ja=self.document.createElement("a"),ka=self.UrlCache||(self.UrlCache=new F(100)));var c=a?null:ka,d=ja;if(c&&c.has(b))b=c.get(b);else{d.href=b;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(b,e);b=e}return b}function ya(b){"string"==typeof b&&(b=J(b));return ha.cdnProxyRegex.test(b.origin)}
function za(b){"string"==typeof b&&(b=J(b));if(!ya(b))return b.href;var a=b.pathname.split("/"),c=a[1];z().assert(ia[c],"Unknown path prefix in url %s",b.href);var d=a[2],e="s"==d?"https://"+decodeURIComponent(a[3]):"http://"+decodeURIComponent(d);z().assert(0<e.indexOf("."),"Expected a . in origin %s",e);a.splice(1,"s"==d?3:2);a=e+a.join("/");c=(c=b.search)&&"?"!=c?(c=c.replace(la,"").replace(va,"").replace(wa,"").replace(xa,"").replace(/^[?&]/,""))?"?"+c:"":"";return a+c+(b.hash||"")}
function Aa(b,a){"string"==typeof a&&(a=J(a));var c;if("function"==typeof URL)c=(new URL(b,a.href)).toString();else{c=b;var d=a;"string"==typeof d&&(d=J(d));c=c.replace(/\\/g,"/");var e=J(c);c=C(c.toLowerCase(),e.protocol)?e.href:C(c,"//")?d.protocol+c:C(c,"/")?d.origin+c:d.origin+d.pathname.replace(/\/[^/]*$/,"/")+c}return c}
function Ba(b){var a=J(b);var c=a.search,d=Object.create(null);if(c)for(var e;e=ca.exec(c);){var f=ba(e[1],e[1]);e=e[2]?ba(e[2],e[2]):"";d[f]=e}z().assert(!("__amp_source_origin"in d),"Source origin is not allowed in %s",b)};function Ca(b,a){for(var c=[],d=0,e=0;e<b.length;e++){var f=b[e];a(f,e,b)?(d<e&&(b[d]=f),d++):c.push(f)}d<b.length&&(b.length=d)};var Da=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function Ea(b){for(var a=[],c;c=Da.exec(b);){var d=c[1],e=void 0,f;if(c[2]){var h=c[3].toLowerCase();if("w"==h)e=parseInt(c[2],10);else if("x"==h)f=parseFloat(c[2]);else continue}else f=1;a.push({url:d,width:e,dpr:f})}return new Fa(a)}
function Fa(b){z().assert(0<b.length,"Srcset must have at least one source");this.h=b;for(var a=!1,c=!1,d=0;d<b.length;d++)var e=b[d],a=a||!!e.width,c=c||!!e.dpr;z().assert(!!(a^c),"Srcset must have width or dpr sources, but not both");b.sort(a?Ga:Ha);this.A=a}
Fa.prototype.select=function(b,a){if(this.A){a*=b;b=this.h;for(var c=0,d=Infinity,e=Infinity,f=0;f<b.length;f++){var h=b[f].width,t=Math.abs(h-a);if(t<=1.1*d||1.2<a/e)c=f,d=t,e=h;else break}}else for(b=this.h,c=0,d=Infinity,e=0;e<b.length;e++)if(f=Math.abs(b[e].dpr-a),f<=d)c=e,d=f;else break;a=c;return this.h[a].url};Fa.prototype.getUrls=function(){return this.h.map(function(b){return b.url})};
Fa.prototype.stringify=function(b){for(var a=[],c=this.h,d=0;d<c.length;d++){var e=c[d],f=e.url;b&&(f=b(f));f=this.A?f+(" "+e.width+"w"):f+(" "+e.dpr+"x");a.push(f)}return a.join(", ")};function Ga(b,a){z().assert(b.width!=a.width,"Duplicate width: %s",b.width);return b.width-a.width}function Ha(b,a){z().assert(b.dpr!=a.dpr,"Duplicate dpr: %s",b.dpr);return b.dpr-a.dpr};var Ia="a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(" "),
Ja="svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform audio canvas circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan video view vkern".split(" "),Ka="feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(" "),
Qa="math menclose merror mfenced mfrac mglyph mi mlabeledtr mmuliscripts mn mo mover mpadded mphantom mroot mrow ms mpspace msqrt mystyle msub msup msubsup mtable mtd mtext mtr munder munderover".split(" "),Ra=["#text"],Sa="accept action align alt autocomplete background bgcolor border cellpadding cellspacing checked cite class clear color cols colspan coords crossorigin datetime default dir disabled download enctype face for headers height hidden high href hreflang id integrity ismap label lang list loop low max maxlength media method min multiple name noshade novalidate nowrap open optimum pattern placeholder poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title type usemap valign value width xmlns".split(" "),
Ta="accent-height accumulate additivive alignment-baseline ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end fill fill-opacity fill-rule filter flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering specularconstant specularexponent spreadmethod stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale tabindex targetx targety transform text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(" "),
Ua="accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(" "),
Va=["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"];function K(b,a){for(var c=a.length;c--;)"string"===typeof a[c]&&(a[c]=a[c].toLowerCase()),b[a[c]]=!0;return b}function Wa(b){var a={},c=void 0;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);return a}
var Xa=/\{\{[\s\S]*|[\s\S]*\}\}/gm,Ya=/<%[\s\S]*|[\s\S]*%>/gm,Za=/^data-[\-\w.\u00B7-\uFFFF]/,$a=/^aria-[\-\w]+$/,ab=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,bb=/^(?:\w+script|data):/i,cb=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,db="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"===typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b};
function Y(b){if(Array.isArray(b)){for(var a=0,c=Array(b.length);a<b.length;a++)c[a]=b[a];return c}return Array.from(b)}
function eb(){function b(b){var a,u=void 0,d,e;c("beforeSanitizeAttributes",b,null);var f=b.attributes;if(f){var g={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:q};for(e=f.length;e--;){var y=a=f[e],A=y.name;a=a.value.trim();u=A.toLowerCase();g.attrName=u;g.attrValue=a;g.keepAttr=!0;c("uponSanitizeAttribute",b,g);a=g.attrValue;if("name"===u&&"IMG"===b.nodeName&&f.id)d=f.id,f=Array.prototype.slice.apply(f),t("id",b),t(A,b),f.indexOf(d)>e&&b.setAttribute("id",d.value);else if("INPUT"!==b.nodeName||
"type"!==u||"file"!==a||!q[u]&&D[u])"id"===A&&b.setAttribute(A,""),t(A,b);else continue;if(g.keepAttr&&(!Ma||"id"!==u&&"name"!==u||!(a in n||a in lb))){E&&(a=a.replace(Xa," "),a=a.replace(Ya," "));if(!k||!Za.test(u))if(!Q||!$a.test(u))if(!q[u]||D[u])continue;else if(!(Na[u]||L.test(a.replace(cb,""))||("src"===u||"xlink:href"===u)&&0===a.indexOf("data:")&&mb[b.nodeName.toLowerCase()]||l&&!bb.test(a.replace(cb,"")))&&a)continue;try{b.setAttribute(A,a),m.removed.pop()}catch(Gb){}}}c("afterSanitizeAttributes",
b,null)}}function a(b){var a;c("beforeSanitizeElements",b,null);if(e(b))return v(b),!0;a=b.nodeName.toLowerCase();c("uponSanitizeElement",b,{tagName:a,allowedTags:r});if(!r[a]||P[a]){if(ma&&!nb[a]&&"function"===typeof b.insertAdjacentHTML)try{b.insertAdjacentHTML("AfterEnd",b.innerHTML)}catch(kb){}v(b);return!0}!w||b.firstElementChild||b.content&&b.content.firstElementChild||!/</g.test(b.textContent)||(m.removed.push({element:b.cloneNode()}),b.innerHTML=b.innerHTML?b.innerHTML.replace(/</g,"&lt;"):
b.textContent.replace(/</g,"&lt;"));E&&3===b.nodeType&&(a=b.textContent,a=a.replace(Xa," "),a=a.replace(Ya," "),b.textContent!==a&&(m.removed.push({element:b.cloneNode()}),b.textContent=a));c("afterSanitizeElements",b,null);return!1}function c(b,a,c){x[b]&&x[b].forEach(function(b){b.call(m,a,c,na)})}function d(b){return"object"===("undefined"===typeof H?"undefined":db(H))?b instanceof H:b&&"object"===("undefined"===typeof b?"undefined":db(b))&&"number"===typeof b.nodeType&&"string"===typeof b.nodeName}
function e(b){return b instanceof oa||b instanceof pa?!1:"string"===typeof b.nodeName&&"string"===typeof b.textContent&&"function"===typeof b.removeChild&&b.attributes instanceof qa&&"function"===typeof b.removeAttribute&&"function"===typeof b.setAttribute?!1:!0}function f(b){return V.call(b.ownerDocument||b,b,R.SHOW_ELEMENT|R.SHOW_COMMENT|R.SHOW_TEXT,function(){return R.FILTER_ACCEPT},!1)}function h(b){var a=void 0;S&&(b="<remove></remove>"+b);if(I)try{a=(new da).parseFromString(b,"text/html")}catch(Fb){}if(!a||
!a.documentElement){var c=a=W.createHTMLDocument(""),d=c.body;d.parentNode.removeChild(d.parentNode.firstElementChild);d.outerHTML=b}return A.call(a,y?"html":"body")[0]}function t(b,a){try{m.removed.push({attribute:a.getAttributeNode(b),from:a})}catch(kb){m.removed.push({attribute:null,from:a})}a.removeAttribute(b)}function v(b){m.removed.push({element:b});try{b.parentNode.removeChild(b)}catch(La){b.outerHTML=""}}function M(b){"object"!==("undefined"===typeof b?"undefined":db(b))&&(b={});r="ALLOWED_TAGS"in
b?K({},b.ALLOWED_TAGS):ra;q="ALLOWED_ATTR"in b?K({},b.ALLOWED_ATTR):sa;P="FORBID_TAGS"in b?K({},b.FORBID_TAGS):{};D="FORBID_ATTR"in b?K({},b.FORBID_ATTR):{};T="USE_PROFILES"in b?b.USE_PROFILES:!1;Q=!1!==b.ALLOW_ARIA_ATTR;k=!1!==b.ALLOW_DATA_ATTR;l=b.ALLOW_UNKNOWN_PROTOCOLS||!1;w=b.SAFE_FOR_JQUERY||!1;E=b.SAFE_FOR_TEMPLATES||!1;y=b.WHOLE_DOCUMENT||!1;X=b.RETURN_DOM||!1;ta=b.RETURN_DOM_FRAGMENT||!1;Oa=b.RETURN_DOM_IMPORT||!1;S=b.FORCE_BODY||!1;Ma=!1!==b.SANITIZE_DOM;ma=!1!==b.KEEP_CONTENT;L=b.ALLOWED_URI_REGEXP||
L;E&&(k=!1);ta&&(X=!0);T&&(r=K({},[].concat(Y(Ra))),q=[],!0===T.html&&(K(r,Ia),K(q,Sa)),!0===T.svg&&(K(r,Ja),K(q,Ta),K(q,Va)),!0===T.svgFilters&&(K(r,Ka),K(q,Ta),K(q,Va)),!0===T.mathMl&&(K(r,Qa),K(q,Ua),K(q,Va)));b.ADD_TAGS&&(r===ra&&(r=Wa(r)),K(r,b.ADD_TAGS));b.ADD_ATTR&&(q===sa&&(q=Wa(q)),K(q,b.ADD_ATTR));b.ADD_URI_SAFE_ATTR&&K(Na,b.ADD_URI_SAFE_ATTR);ma&&(r["#text"]=!0);y&&K(r,["html","head","body"]);Object&&"freeze"in Object&&Object.freeze(b);na=b}function m(b){return eb(b)}var g=0<arguments.length&&
void 0!==arguments[0]?arguments[0]:"undefined"===typeof window?null:window;m.version="1.0.5";m.removed=[];if(!g||!g.document||9!==g.document.nodeType)return m.isSupported=!1,m;var N=g.document,I=!1,n=g.document,ea=g.DocumentFragment,H=g.Node,R=g.NodeFilter,O=g.NamedNodeMap,qa=void 0===O?g.NamedNodeMap||g.MozNamedAttrMap:O,oa=g.Text,pa=g.Comment,da=g.DOMParser;"function"===typeof g.HTMLTemplateElement&&(O=n.createElement("template"),O.content&&O.content.ownerDocument&&(n=O.content.ownerDocument));
var U=n,W=U.implementation,V=U.createNodeIterator,A=U.getElementsByTagName,Pa=U.createDocumentFragment,ua=N.importNode,x={};m.isSupported=W&&"undefined"!==typeof W.createHTMLDocument&&9!==n.documentMode;var L=ab,r=null,ra=K({},[].concat(Y(Ia),Y(Ja),Y(Ka),Y(Qa),Y(Ra))),q=null,sa=K({},[].concat(Y(Sa),Y(Ta),Y(Ua),Y(Va))),P=null,D=null,Q=!0,k=!0,l=!1,w=!1,E=!1,y=!1,B=!1,S=!1,X=!1,ta=!1,Oa=!1,Ma=!0,ma=!0,T={},nb=K({},"audio head math script style template svg video".split(" ")),mb=K({},["audio","video",
"img","source","image"]),Na=K({},"alt class for id label name pattern placeholder summary title value style xmlns".split(" ")),na=null,lb=n.createElement("form");m.isSupported&&function(){try{h('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">').querySelector("svg img")&&(I=!0)}catch(u){}}();var ob=function La(d){var e=void 0,g=f(d);for(c("beforeSanitizeShadowDOM",d,null);e=g.nextNode();)c("uponSanitizeShadowNode",e,null),a(e)||(e.content instanceof ea&&La(e.content),b(e));c("afterSanitizeShadowDOM",
d,null)};m.sanitize=function(c,e){var k=void 0,A=void 0,l=void 0;c||(c="\x3c!--\x3e");if("string"!==typeof c&&!d(c)){if("function"!==typeof c.toString)throw new TypeError("toString is not a function");c=c.toString();if("string"!==typeof c)throw new TypeError("dirty is not a string, aborting");}if(!m.isSupported){if("object"===db(g.toStaticHTML)||"function"===typeof g.toStaticHTML){if("string"===typeof c)return g.toStaticHTML(c);if(d(c))return g.toStaticHTML(c.outerHTML)}return c}B||M(e);m.removed=
[];if(c instanceof H)e=h("\x3c!--\x3e"),k=e.ownerDocument.importNode(c,!0),1===k.nodeType&&"BODY"===k.nodeName?e=k:e.appendChild(k);else{if(!X&&!y&&-1===c.indexOf("<"))return c;e=h(c);if(!e)return X?null:""}S&&v(e.firstChild);for(var n=f(e);c=n.nextNode();)3===c.nodeType&&c===A||a(c)||(c.content instanceof ea&&ob(c.content),b(c),A=c);if(X){if(ta)for(l=Pa.call(e.ownerDocument);e.firstChild;)l.appendChild(e.firstChild);else l=e;Oa&&(l=ua.call(N,l,!0));return l}return y?e.outerHTML:e.innerHTML};m.setConfig=
function(b){M(b);B=!0};m.clearConfig=function(){na=null;B=!1};m.addHook=function(b,a){"function"===typeof a&&(x[b]=x[b]||[],x[b].push(a))};m.removeHook=function(b){x[b]&&x[b].pop()};m.removeHooks=function(b){x[b]&&(x[b]=[])};m.removeAllHooks=function(){x={}};return m}var Z=eb();var fb={applet:!0,audio:!0,base:!0,embed:!0,frame:!0,frameset:!0,iframe:!0,img:!0,link:!0,meta:!0,object:!0,style:!0,video:!0},gb="a b br caption colgroup code del div em i ins li mark ol p q s small span strong sub sup table tbody time td th thead tfoot tr u ul".split(" "),hb="amp-fx fallback heights layout min-font-size max-font-size on option placeholder submitting submit-success submit-error validation-for verify-error visible-when-invalid href style text subscriptions-action subscriptions-actions subscriptions-decorate subscriptions-dialog subscriptions-display subscriptions-section subscriptions-service".split(" "),
ib={a:["rel","target"],div:["template"],form:["action-xhr","verify-xhr","custom-validation-reporting","target"],template:["type"]},jb={script:{attribute:"type",values:["application/json","application/ld+json"]}},pb=["_top","_blank"],qb=["javascript:","vbscript:","data:","<script","\x3c/script"],rb=fa({input:{type:/(?:image|button)/i}}),sb="form formaction formmethod formtarget formnovalidate formenctype".split(" "),tb=fa({input:sb,textarea:sb,select:sb}),ub=/!important|position\s*:\s*fixed|position\s*:\s*sticky/i,
vb={USE_PROFILES:{html:!0,svg:!0,svgFilters:!0}};
function wb(b){function a(b){M.forEach(function(b){delete v[b]});M.length=0;Ca(this.removed,function(a){if(a.from===b&&a.attribute){a=a.attribute;var c=a.value;if("on"===a.name.toLowerCase())return b.setAttribute("on",c),!1}return!0})}function c(b,a){function c(){v[d]||(v[d]=!0,M.push(d))}var e=b.nodeName.toLowerCase(),d=a.attrName,f=a.attrValue;v=a.allowedAttributes;var g=C(e,"amp-");if(g)c();else{if("a"==e&&"target"==d)var m=f.toLowerCase(),f=pb.includes(m)?m:"_top";var h=ib[e];h&&h.includes(d)&&
c()}var t="["==d[0]&&"]"==d[d.length-1];t&&(b.setAttribute("data-amp-bind-"+d.substring(1,d.length-1),f),b.setAttribute("i-amphtml-binding",""));xb(e,d,f)?f&&!C(d,"data-amp-bind-")&&(f=yb(e,d,f)):(z().error("purifier",'Removing "'+d+'" attribute with invalid '+("value in <"+e+" "+d+'="'+f+'">.')),a.keepAttr=!1);a.attrValue=f}function d(){t.forEach(function(b){delete h[b]});t.length=0}function e(b,a){var c=a.tagName;h=a.allowedTags;C(c,"amp-")&&(h[c]=!0);"a"===c&&b.hasAttribute("href")&&!b.hasAttribute("target")&&
b.setAttribute("target","_top");var e=jb[c];if(e){a=e;var d=a.attribute;a=a.values;b.hasAttribute(d)&&a.includes(b.getAttribute(d))&&(h[c]=!0,t.push(c))}}var f=Object.assign({},vb,{ADD_ATTR:hb,FORBID_TAGS:Object.keys(fb),FORCE_BODY:!0,RETURN_DOM:!0}),h,t=[],v,M=[];Z.addHook("uponSanitizeElement",e);Z.addHook("afterSanitizeElements",d);Z.addHook("uponSanitizeAttribute",c);Z.addHook("afterSanitizeAttributes",a);b=Z.sanitize(b,f);Z.removeAllHooks();return b}
function zb(b,a){a=void 0===a?self.document:a;var c;Z.addHook("uponSanitizeElement",function(b,a){var e=a.tagName;c=a.allowedTags;"template"===e&&(b=b.getAttribute("type"))&&"amp-mustache"===b.toLowerCase()&&(c.template=!0)});Z.addHook("afterSanitizeElements",function(){c.template=!1});var d=Z.sanitize(b,{ALLOWED_TAGS:gb,FORCE_BODY:!0,RETURN_DOM_FRAGMENT:!0});Z.removeAllHooks();var e=a.createElement("div");e.appendChild(d);return e.innerHTML}
function xb(b,a,c){var d=!0,d=void 0===d?!1:d;if(!d){if(C(a,"on")&&"on"!=a)return!1;if(c)for(var e=c.toLowerCase().replace(/[\s,\u0000]+/g,""),f=0;f<qb.length;f++)if(0<=e.indexOf(qb[f]))return!1}if("style"==a)return!ub.test(c);if("class"==a&&c&&/(^|\W)i-amphtml-/i.test(c))return!1;var h=tb[b];if(h&&-1!=h.indexOf(a))return!1;var t=rb[b];if(t){var v=t[a];if(v&&-1!=c.search(v))return!1}return!0}
function yb(b,a,c){b=b.toLowerCase();a=a.toLowerCase();return"src"==a||"href"==a||"srcset"==a?Ab(b,a,c):c}function Ab(b,a,c){var d=self.location;Ba(c);var e=ya(d),f=J(za(d));if("href"==a&&!C(c,"#"))return Aa(c,f);if("src"==a)return"amp-img"==b?Bb(c,f,e):Aa(c,f);if("srcset"==a){var h;try{h=Ea(c)}catch(t){return z().error("purifier","Failed to parse srcset: ",t),c}return h.stringify(function(b){return Bb(b,f,e)})}return c}
function Bb(b,a,c){b=J(Aa(b,a));return"data:"==b.protocol||ya(b)||!c?b.href:ha.cdn+"/i/"+("https:"==b.protocol?"s/":"")+encodeURIComponent(b.host)+b.pathname+(b.search||"")+(b.hash||"")};/*
 mustache.js - Logic-less {{mustache}} templates with JavaScript
 http://github.com/janl/mustache.js
*/
var Cb={};
(function mustacheFactory(a){function c(a){return"function"===typeof a}function d(a){return H(a)?"array":typeof a}function e(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function f(a,c){return null!=a&&"object"===typeof a&&Object.prototype.hasOwnProperty.call(a,c)}function h(a,c){return R.call(a,c)}function t(a){return!h(O,a)}function v(a){return String(a).replace(/[&<>"'`=\/]/g,function ua(a){return qa[a]})}function M(c,d){function f(){if(q&&!n)for(;h.length;)delete r[h.pop()];else h=
[];n=q=!1}function x(a){"string"===typeof a&&(a=a.split(pa,2));if(!H(a)||2!==a.length)throw Error("Invalid tags: "+a);P=new RegExp(e(a[0])+"\\s*");D=new RegExp("\\s*"+e(a[1]));Q=new RegExp("\\s*"+e("}"+a[1]))}if(!c)return[];var L=[],r=[],h=[],q=!1,n=!1,P,D,Q;x(d||a.tags);for(var k=new N(c),l,w,E,y,B;!k.eos();){c=k.pos;if(w=k.scanUntil(P)){l=0;for(var S=w.length;l<S;++l)E=w.charAt(l),t(E)?h.push(r.length):n=!0,r.push(["text",E,c,c+1]),c+=1,"\n"===E&&f()}if(!k.scan(P))break;q=!0;l=k.scan(W)||"name";
k.scan(oa);"="===l?(w=k.scanUntil(da),k.scan(da),k.scanUntil(D)):"{"===l?(w=k.scanUntil(Q),k.scan(U),k.scanUntil(D),l="&"):w=k.scanUntil(D);if(!k.scan(D))throw Error("Unclosed tag at "+k.pos);y=[l,w,c,k.pos];r.push(y);if("#"===l||"^"===l)L.push(y);else if("/"===l){B=L.pop();if(!B)throw Error('Unopened section "'+w+'" at '+c);if(B[1]!==w)throw Error('Unclosed section "'+B[1]+'" at '+c);}else if("name"===l||"{"===l||"&"===l)n=!0}if(B=L.pop())throw Error('Unclosed section "'+B[1]+'" at '+k.pos);return g(m(r))}
function m(a){for(var c=[],e,d,f=0,g=a.length;f<g;++f)if(e=a[f])"text"===e[0]&&d&&"text"===d[0]?(d[1]+=e[1],d[3]=e[3]):(c.push(e),d=e);return c}function g(a){for(var c=[],e=c,d=[],f,g,h=0,q=a.length;h<q;++h)switch(f=a[h],f[0]){case "#":case "^":e.push(f);d.push(f);e=f[4]=[];break;case "/":g=d.pop();g[5]=f[2];e=0<d.length?d[d.length-1][4]:c;break;default:e.push(f)}return c}function N(a){this.tail=this.string=a;this.pos=0}function I(a,c){this.view=a;this.cache={".":this.view};this.parent=c}function n(){this.cache=
{}}var ea=Object.prototype.toString,H=Array.isArray||function Pa(a){return"[object Array]"===ea.call(a)},R=RegExp.prototype.test,O=/\S/,qa={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},oa=/\s*/,pa=/\s+/,da=/\s*=/,U=/\s*\}/,W=/#|\^|\/|>|\{|&|=|!/;N.prototype.eos=function ua(){return""===this.tail};N.prototype.scan=function x(a){a=this.tail.match(a);if(!a||0!==a.index)return"";a=a[0];this.tail=this.tail.substring(a.length);this.pos+=a.length;return a};
N.prototype.scanUntil=function L(a){a=this.tail.search(a);var c;switch(a){case -1:c=this.tail;this.tail="";break;case 0:c="";break;default:c=this.tail.substring(0,a),this.tail=this.tail.substring(a)}this.pos+=c.length;return c};I.prototype.push=function r(a){return new I(a,this)};I.prototype.lookup=function ra(a){var e=this.cache,d;if(e.hasOwnProperty(a))d=e[a];else{for(var g=this,h,k,l=!1;g;){if(0<a.indexOf("."))for(d=g.view,h=a.split("."),k=0;null!=d&&k<h.length;){if(!f(d,h[k])){d=null;break}k===
h.length-1&&(l=!0);d=d[h[k++]]}else f(g.view,a)?(d=g.view[a],l=!0):d=null;if(l)break;g=g.parent}e[a]=d}c(d)&&(d=d.call(this.view));return d};n.prototype.clearCache=function q(){this.cache={}};n.prototype.parse=function sa(a,c){var d=this.cache,e=d[a];null==e&&(e=d[a]=M(a,c));return e};n.prototype.render=function P(a,c,d){var e=this.parse(a);c=c instanceof I?c:new I(c);return this.renderTokens(e,c,d,a)};n.prototype.renderTokens=function D(a,c,d,e){for(var f="",g,k,h,l=0,m=a.length;l<m;++l)h=void 0,
g=a[l],k=g[0],"#"===k?h=this.renderSection(g,c,d,e):"^"===k?h=this.renderInverted(g,c,d,e):">"===k?h=this.renderPartial(g,c,d,e):"&"===k?h=this.unescapedValue(g,c):"name"===k?h=this.escapedValue(g,c):"text"===k&&(h=this.rawValue(g)),void 0!==h&&(f+=h);return f};n.prototype.renderSection=function Q(a,d,e,f){function g(a){return h.render(a,d,e)}var h=this,k="",l=d.lookup(a[1]);if(l){if(H(l))for(var m=0,n=l.length;m<n;++m)k+=this.renderTokens(a[4],d.push(l[m]),e,f);else if("object"===typeof l||"string"===
typeof l||"number"===typeof l)k+=this.renderTokens(a[4],d.push(l),e,f);else if(c(l)){if("string"!==typeof f)throw Error("Cannot use higher-order sections without the original template");l=l.call(d.view,f.slice(a[3],a[5]),g);null!=l&&(k+=l)}else k+=this.renderTokens(a[4],d,e,f);return k}};n.prototype.renderInverted=function k(a,c,d,e){var f=c.lookup(a[1]);if(!f||H(f)&&0===f.length)return this.renderTokens(a[4],c,d,e)};n.prototype.renderPartial=function l(a,d,e){if(e&&(a=c(e)?e(a[1]):e[a[1]],null!=
a))return this.renderTokens(this.parse(a),d,e,a)};n.prototype.unescapedValue=function w(c,d){c=d.lookup(c[1]);if(null!=c)return a.sanitizeUnescaped?a.sanitizeUnescaped(c):c};n.prototype.escapedValue=function E(c,d){c=d.lookup(c[1]);if(null!=c)return a.escape(c)};n.prototype.rawValue=function y(a){return a[1]};a.name="mustache.js";a.version="2.2.0";a.tags=["{{","}}"];var V=new n;a.clearCache=function(){return V.clearCache()};a.parse=function(a,c){return V.parse(a,c)};a.render=function(a,c,e){if("string"!==
typeof a)throw new TypeError('Invalid template! Template should be a "string" but "'+d(a)+'" was given as the first argument for mustache#render(template, view, partials)');return V.render(a,c,e)};a.to_html=function B(d,e,f,g){d=a.render(d,e,f);if(c(g))g(d);else return d};a.escape=v;a.sanitizeUnescaped=null;a.setUnescapedSanitizer=function S(c){a.sanitizeUnescaped=c};a.Scanner=N;a.Context=I;a.Writer=n})(Cb);function Db(b,a){var c;c=AMP.BaseTemplate.call(this,b,a)||this;Cb.setUnescapedSanitizer(function(a){return zb(a,c.win.document)});return c}aa(Db,AMP.BaseTemplate);
Db.prototype.compileCallback=function(){if(!this.viewerCanRenderTemplates()){this.o={};var b;var a=this.element;if("content"in a)b=a.content.cloneNode(!0);else{b=a.ownerDocument.createDocumentFragment();for(var c=b.ownerDocument.createDocumentFragment(),a=a.firstChild;a;a=a.nextSibling)c.appendChild(a.cloneNode(!0));b.appendChild(c)}Eb(this,b);c=this.element.ownerDocument.createElement("div");c.appendChild(b);this.w=c.innerHTML;Cb.parse(this.w)}};
function Eb(b,a){var c=a.querySelectorAll("template");ga(c,function(a,c){c="__AMP_NESTED_TEMPLATE_"+c;b.o[c]=a.outerHTML;var d=b.element.ownerDocument.createTextNode("{{{"+c+"}}}");a.parentNode.replaceChild(d,a)})}Db.prototype.render=function(b){var a=b;if(!this.viewerCanRenderTemplates()){var c=b;"object"===typeof b&&(c=Object.assign({},b,this.o));a=Cb.render(this.w,c)}b=wb(a);a=this.win.document.createElement("div");a.innerHTML=b.innerHTML;return this.unwrap(a)};
AMP.registerTemplate("amp-mustache",Db);
})});
//# sourceMappingURL=amp-mustache-0.2.js.map

