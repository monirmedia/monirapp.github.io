(self.AMP=self.AMP||[]).push({n:"amp-jwplayer",v:"0",f:(function(AMP,_){
var b;function e(a,c){function f(){}f.prototype=c.prototype;a.prototype=new f;a.prototype.constructor=a;for(var d in c)if(Object.defineProperties){var g=Object.getOwnPropertyDescriptor(c,d);g&&Object.defineProperty(a,d,g)}else a[d]=c[d]};self.log=self.log||{user:null,dev:null,userForEmbed:null};var h=self.log;function k(){if(!h.user)throw Error("failed to call initLogConstructor");return h.user};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function l(a){a=AMP.BaseElement.call(this,a)||this;a.h="";a.j="";a.c=null;return a}e(l,AMP.BaseElement);b=l.prototype;b.preconnectCallback=function(a){this.preconnect.url("https://content.jwplatform.com",a);this.preconnect.url("https://ssl.p.jwpcdn.com",a)};b.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
b.buildCallback=function(){this.h=k().assert(this.element.getAttribute("data-playlist-id")||this.element.getAttribute("data-media-id"),"Either the data-media-id or the data-playlist-id attributes must be specified for <amp-jwplayer> %s",this.element);this.j=k().assert(this.element.getAttribute("data-player-id"),"The data-player-id attribute is required for <amp-jwplayer> %s",this.element)};
b.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe"),c="https://content.jwplatform.com/players/"+encodeURIComponent(this.h)+"-"+encodeURIComponent(this.j)+".html";a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.src=c;this.applyFillContent(a);this.element.appendChild(a);this.c=a;return this.loadPromise(a)};b.pauseCallback=function(){this.c&&this.c.contentWindow&&this.c.contentWindow.postMessage("pause","https://content.jwplatform.com")};
b.unlayoutCallback=function(){if(this.c){var a=this.c;a.parentElement&&a.parentElement.removeChild(a);this.c=null}return!0};
b.createPlaceholderCallback=function(){if(this.element.hasAttribute("data-media-id")){var a=this.win.document.createElement("amp-img");this.propagateAttributes(["aria-label"],a);a.setAttribute("src","https://content.jwplatform.com/thumbs/"+encodeURIComponent(this.h)+"-720.jpg");a.setAttribute("layout","fill");a.setAttribute("placeholder","");a.setAttribute("referrerpolicy","origin");a.hasAttribute("aria-label")?a.setAttribute("alt","Loading video - "+a.getAttribute("aria-label")):a.setAttribute("alt",
"Loading video");return a}};(function(a){a.registerElement("amp-jwplayer",l)})(self.AMP);
})});
//# sourceMappingURL=amp-jwplayer-0.1.js.map

