(self.AMP=self.AMP||[]).push({n:"amp-vk",v:"0",f:(function(AMP,_){
var g;function h(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};self.log=self.log||{user:null,dev:null,userForEmbed:null};var k=self.log;function l(){if(!k.user)throw Error("failed to call initLogConstructor");return k.user};function m(a){return a||{}};function p(a){a=q(a);a=q(a);a=a.isSingleDoc()?a.win:a;return r(a,"viewer")}function q(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,b=b.__AMP_TOP||b;a=r(b,"ampdoc").getAmpDoc(a)}return a}function r(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
m({c:!0,v:!0,a:!0,ad:!0});function t(a,b){var c;if(!b)return a;var d=a.split("#",2),e=d[0].split("?",2),f=e[0]+(e[1]?c?"?"+b+"&"+e[1]:"?"+e[1]+"&"+b:"?"+b);return f+=d[1]?"#"+d[1]:""}function u(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))}return b.join("&")};var v;function y(a,b){var c=void 0,d=a,e=b,f;f=function(a){try{return e(a)}catch(w){throw self.reportError(w),w;}};var x=z(),n=!1;c&&(n=c.capture);d.addEventListener("message",f,x?c:n);return function(){d&&d.removeEventListener("message",f,x?c:n);f=d=e=null}}function z(){if(void 0!==v)return v;v=!1;try{var a={get capture(){v=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return v};function A(a,b){return y(a,b)};var B={POST:"post",POLL:"poll"};function C(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;a.C=0;a.l=null;a.h=null;a.w=null;a.B=null;a.o=null;a.m=null;a.A=null;return a}h(C,AMP.BaseElement);g=C.prototype;g.preconnectCallback=function(a){this.preconnect.url("https://vk.com",a)};function D(a){var b=Date.now().toString(16),c;"post"===a.h?c=E(a):"poll"===a.h&&(c=F(a));return c.then(function(a){return t(a,b)})}
function E(a){return p(a.element).getReferrerUrl().then(function(b){var c=a.element.offsetWidth,d=a.getAmpDoc().getUrl(),e="https://vk.com/widget_post.php",f=m({app:"0",width:"100%",_ver:"1",owner_id:a.w,post_id:a.B,hash:a.o,amp:"1",startWidth:c,url:d,referrer:b,title:"AMP Post"});return t(e,u(f))})}
function F(a){return p(a.element).getReferrerUrl().then(function(b){var c=a.getAmpDoc().getUrl();b=m({app:a.m,width:"100%",_ver:"1",poll_id:a.A,amp:"1",url:c,title:"AMP Poll",description:"",referrer:b});return t("https://vk.com/al_widget_poll.php",u(b))})}
g.buildCallback=function(){this.h=l().assert(this.element.getAttribute("data-embedtype"),"The data-embedtype attribute is required for <amp-vk> %s",this.element);l().assertEnumValue(B,this.h,"data-embedtype");"post"===this.h?(this.w=l().assert(this.element.getAttribute("data-owner-id"),"The data-owner-id attribute is required for <amp-vk> Post %s",this.element),this.B=l().assert(this.element.getAttribute("data-post-id"),"The data-post-id attribute is required for <amp-vk> Post %s",this.element),this.o=
l().assert(this.element.getAttribute("data-hash"),"The data-hash attribute is required for <amp-vk> Post %s",this.element)):"poll"===this.h&&(this.m=l().assert(this.element.getAttribute("data-api-id"),"The data-api-id attribute is required for <amp-vk> Poll %s",this.element),this.A=l().assert(this.element.getAttribute("data-poll-id"),"The data-poll-id attribute is required for <amp-vk> Poll %s",this.element))};
g.layoutCallback=function(){var a=this,b=this.element.ownerDocument.createElement("iframe");this.j=b;this.l=A(this.win,this.D.bind(this));return D(this).then(function(c){b.src=c;b.setAttribute("name","fXD");b.setAttribute("scrolling","no");b.setAttribute("frameborder","0");b.setAttribute("allowfullscreen","true");a.applyFillContent(b);a.element.appendChild(b);return a.loadPromise(b)})};
g.D=function(a){if("https://vk.com"===a.origin&&a.source===this.j.contentWindow){var b=a.data;if(b){var c=/\[\"resize",\[(\d+)\]]/;if((a=c.exec(b))&&a[1]){var d=parseInt(a[1],10);this.C!==d&&(this.C=d,this.changeHeight(d))}}}};g.isLayoutSupported=function(a){return"responsive"===a||"flex-item"===a||"fixed"===a};g.unlayoutOnPause=function(){return!0};g.unlayoutCallback=function(){if(this.j){var a=this.j;a.parentElement&&a.parentElement.removeChild(a);this.j=null}this.l&&this.l();return!0};
(function(a){a.registerElement("amp-vk",C)})(self.AMP);
})});
//# sourceMappingURL=amp-vk-0.1.js.map

