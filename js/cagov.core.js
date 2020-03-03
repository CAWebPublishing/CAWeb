<<<<<<< HEAD
/*! modernizr (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-setclasses !*/
!function(ac,V,L){function Q(a,b){return typeof a===b}function U(){var h,p,f,m,g,d,c;for(var b in k){if(k.hasOwnProperty(b)){if(h=[],p=k[b],p.name&&(h.push(p.name.toLowerCase()),p.options&&p.options.aliases&&p.options.aliases.length)){for(f=0;f<p.options.aliases.length;f++){h.push(p.options.aliases[f].toLowerCase())}}for(m=Q(p.fn,"function")?p.fn():p.fn,g=0;g<h.length;g++){d=h[g],c=d.split("."),1===c.length?A[c[0]]=m:(!A[c[0]]||A[c[0]] instanceof Boolean||(A[c[0]]=new Boolean(A[c[0]])),A[c[0]][c[1]]=m),O.push((m?"":"no-")+c.join("-"))}}}}function M(c){var d=G.className,a=A._config.classPrefix||"";if(ah&&(d=d.baseVal),A._config.enableJSClass){var b=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");d=d.replace(b,"$1"+a+"js$2")}A._config.enableClasses&&(d+=" "+a+c.join(" "+a),ah?G.className.baseVal=d:G.className=d)}function Y(a,b){return !!~(""+a).indexOf(b)}function X(){return"function"!=typeof V.createElement?V.createElement(arguments[0]):ah?V.createElementNS.call(V,"http://www.w3.org/2000/svg",arguments[0]):V.createElement.apply(V,arguments)}function ag(a){return a.replace(/([a-z])-([a-z])/g,function(c,d,b){return d+b.toUpperCase()}).replace(/^-/,"")}function ab(a,b){return function(){return a.apply(b,arguments)}}function J(c,f,a){var d;for(var b in c){if(c[b] in f){return a===!1?c[b]:(d=f[c[b]],Q(d,"function")?ab(d,a||f):d)}}return !1}function ae(a){return a.replace(/([A-Z])/g,function(b,c){return"-"+c.toLowerCase()}).replace(/^ms-/,"-ms-")}function R(f,b,d){var e;if("getComputedStyle" in ac){e=getComputedStyle.call(ac,f,b);var c=ac.console;if(null!==e){d&&(e=e.getPropertyValue(d))}else{if(c){var a=c.error?"error":"log";c[a].call(c,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}}else{e=!b&&f.currentStyle&&f.currentStyle[d]}return e}function ad(){var a=V.body;return a||(a=X(ah?"svg":"body"),a.fake=!0),a}function W(m,x,b,g){var y,h,v,l,w="modernizr",n=X("div"),d=ad();if(parseInt(b,10)){for(;b--;){v=X("div"),v.id=g?g[b]:w+(b+1),n.appendChild(v)}}return y=X("style"),y.type="text/css",y.id="s"+w,(d.fake?d:n).appendChild(y),d.appendChild(n),y.styleSheet?y.styleSheet.cssText=m:y.appendChild(V.createTextNode(m)),n.id=w,d.fake&&(d.style.background="",d.style.overflow="hidden",l=G.style.overflow,G.style.overflow="hidden",G.appendChild(d)),h=x(n,m),d.fake?(d.parentNode.removeChild(d),G.style.overflow=l,G.offsetHeight):n.parentNode.removeChild(n),!!h}function F(d,b){var c=d.length;if("CSS" in ac&&"supports" in ac.CSS){for(;c--;){if(ac.CSS.supports(ae(d[c]),b)){return !0}}return !1}if("CSSSupportsRule" in ac){for(var a=[];c--;){a.push("("+ae(d[c])+":"+b+")")}return a=a.join(" or "),W("@supports ("+a+") { #modernizr { position: absolute; } }",function(f){return"absolute"==R(f,null,"position")})}return L}function I(x,i,b,N){function w(){z&&(delete B.style,delete B.modElem)}if(N=Q(N,"undefined")?!1:N,!Q(b,"undefined")){var E=F(x,b);if(!Q(E,"undefined")){return E}}for(var z,a,y,l,C,t=["modernizr","tspan","samp"];!B.style&&t.length;){z=!0,B.modElem=X(t.shift()),B.style=B.modElem.style}for(y=x.length,a=0;y>a;a++){if(l=x[a],C=B.style[l],Y(l,"-")&&(l=ag(l)),B.style[l]!==L){if(N||Q(b,"undefined")){return w(),"pfx"==i?l:!0}try{B.style[l]=b}catch(r){}if(B.style[l]!=C){return w(),"pfx"==i?l:!0}}}return w(),!1}function aa(f,h,c,g,d){var b=f.charAt(0).toUpperCase()+f.slice(1),a=(f+" "+q.join(b+" ")+b).split(" ");return Q(h,"string")||Q(h,"undefined")?I(a,h,g,d):(a=(f+" "+D.join(b+" ")+b).split(" "),J(a,h,c))}function Z(b,c,a){return aa(b,L,L,c,a)}var O=[],k=[],H={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(b,c){var a=this;setTimeout(function(){c(a[b])},0)},addTest:function(b,c,a){k.push({name:b,fn:c,options:a})},addAsyncTest:function(a){k.push({name:null,fn:a})}},A=function(){};A.prototype=H,A=new A;var G=V.documentElement,ah="svg"===G.nodeName.toLowerCase(),af="Moz O ms Webkit",q=H._config.usePrefixes?af.split(" "):[];H._cssomPrefixes=q;var D=H._config.usePrefixes?af.toLowerCase().split(" "):[];H._domPrefixes=D;var K={elem:X("modernizr")};A._q.push(function(){delete K.elem});var B={style:K.elem.style};A._q.unshift(function(){delete B.style}),H.testAllProps=aa,H.testAllProps=Z,A.addTest("flexbox",Z("flexBasis","1px",!0)),U(),M(O),delete H.addTest,delete H.addAsyncTest;for(var j=0;j<A._q.length;j++){A._q[j]()}ac.Modernizr=A}(window,document);$=jQuery.noConflict();
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?a(exports,require("jquery")):typeof define==="function"&&define.amd?define(["exports","jquery"],a):(b=b||self,a(b.bootstrap={},b.jQuery))}(this,function(aY,di){di=di&&di.hasOwnProperty("default")?di["default"]:di;function dk(dE,dC){for(var dB=0;dB<dC.length;dB++){var dD=dC[dB];dD.enumerable=dD.enumerable||false;dD.configurable=true;if("value" in dD){dD.writable=true}Object.defineProperty(dE,dD.key,dD)}}function cq(dC,i,dB){if(i){dk(dC.prototype,i)}if(dB){dk(dC,dB)}return dC}function cC(dC,i,dB){if(i in dC){Object.defineProperty(dC,i,{value:dB,enumerable:true,configurable:true,writable:true})}else{dC[i]=dB}return dC}function J(dE){for(var dC=1;dC<arguments.length;dC++){var dD=arguments[dC]!=null?arguments[dC]:{};var dB=Object.keys(dD);if(typeof Object.getOwnPropertySymbols==="function"){dB=dB.concat(Object.getOwnPropertySymbols(dD).filter(function(i){return Object.getOwnPropertyDescriptor(dD,i).enumerable}))}dB.forEach(function(i){cC(dE,i,dD[i])})}return dE}function cQ(dB,i){dB.prototype=Object.create(i.prototype);dB.prototype.constructor=dB;dB.__proto__=i}var c2="transitionend";var by=1000000;var ao=1000;function c8(i){return{}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase()}function cD(){return{bindType:c2,delegateType:c2,handle:function i(dB){if(di(dB.target).is(this)){return dB.handleObj.handler.apply(this,arguments)}return undefined}}}function bu(dB){var dC=this;var i=false;di(this).one(bV.TRANSITION_END,function(){i=true});setTimeout(function(){if(!i){bV.triggerTransitionEnd(dC)}},dB);return this}function aL(){di.fn.emulateTransitionEnd=bu;di.event.special[bV.TRANSITION_END]=cD()}var bV={TRANSITION_END:"bsTransitionEnd",getUID:function cU(i){do{i+=~~(Math.random()*by)}while(document.getElementById(i));return i},getSelectorFromElement:function w(dC){var dB=dC.getAttribute("data-target");if(!dB||dB==="#"){var i=dC.getAttribute("href");dB=i&&i!=="#"?i.trim():""}try{return document.querySelector(dB)?dB:null}catch(dD){return null}},getTransitionDurationFromElement:function R(dD){if(!dD){return 0}var i=di(dD).css("transition-duration");var dB=di(dD).css("transition-delay");var dC=parseFloat(i);var dE=parseFloat(dB);if(!dC&&!dE){return 0}i=i.split(",")[0];dB=dB.split(",")[0];return(parseFloat(i)+parseFloat(dB))*ao},reflow:function cx(i){return i.offsetHeight},triggerTransitionEnd:function aM(i){di(i).trigger(c2)},supportsTransitionEnd:function cG(){return Boolean(c2)},isElement:function b1(i){return(i[0]||i).nodeType},typeCheckConfig:function X(i,dB,dE){for(var dD in dE){if(Object.prototype.hasOwnProperty.call(dE,dD)){var dG=dE[dD];var dC=dB[dD];var dF=dC&&bV.isElement(dC)?"element":c8(dC);if(!new RegExp(dG).test(dF)){throw new Error(i.toUpperCase()+": "+('Option "'+dD+'" provided type "'+dF+'" ')+('but expected type "'+dG+'".'))}}}},findShadowRoot:function ap(dB){if(!document.documentElement.attachShadow){return null}if(typeof dB.getRootNode==="function"){var i=dB.getRootNode();return i instanceof ShadowRoot?i:null}if(dB instanceof ShadowRoot){return dB}if(!dB.parentNode){return null}return bV.findShadowRoot(dB.parentNode)}};aL();var a9="alert";var du="4.3.1";var dc="bs.alert";var cL="."+dc;var az=".data-api";var ay=di.fn[a9];var aa={DISMISS:'[data-dismiss="alert"]'};var bE={CLOSE:"close"+cL,CLOSED:"closed"+cL,CLICK_DATA_API:"click"+cL+az};var cO={ALERT:"alert",FADE:"fade",SHOW:"show"};var S=function(){function dF(dL){this._element=dL}var dG=dF.prototype;dG.close=function dK(dM){var dL=this._element;if(dM){dL=this._getRootElement(dM)}var dN=this._triggerCloseEvent(dL);if(dN.isDefaultPrevented()){return}this._removeElement(dL)};dG.dispose=function dI(){di.removeData(this._element,dc);this._element=null};dG._getRootElement=function dJ(dM){var dL=bV.getSelectorFromElement(dM);var dN=false;if(dL){dN=document.querySelector(dL)}if(!dN){dN=di(dM).closest("."+cO.ALERT)[0]}return dN};dG._triggerCloseEvent=function dC(dL){var dM=di.Event(bE.CLOSE);di(dL).trigger(dM);return dM};dG._removeElement=function dE(dM){var dN=this;di(dM).removeClass(cO.SHOW);if(!di(dM).hasClass(cO.FADE)){this._destroyElement(dM);return}var dL=bV.getTransitionDurationFromElement(dM);di(dM).one(bV.TRANSITION_END,function(dO){return dN._destroyElement(dM,dO)}).emulateTransitionEnd(dL)};dG._destroyElement=function dD(dL){di(dL).detach().trigger(bE.CLOSED).remove()};dF._jQueryInterface=function dB(dL){return this.each(function(){var dM=di(this);var dN=dM.data(dc);if(!dN){dN=new dF(this);dM.data(dc,dN)}if(dL==="close"){dN[dL](this)}})};dF._handleDismiss=function dH(dL){return function(dM){if(dM){dM.preventDefault()}dL.close(this)}};cq(dF,null,[{key:"VERSION",get:function i(){return du}}]);return dF}();di(document).on(bE.CLICK_DATA_API,aa.DISMISS,S._handleDismiss(new S()));di.fn[a9]=S._jQueryInterface;di.fn[a9].Constructor=S;di.fn[a9].noConflict=function(){di.fn[a9]=ay;return S._jQueryInterface};var aD="button";var P="4.3.1";var cm="bs.button";var da="."+cm;var a2=".data-api";var bn=di.fn[aD];var bg={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"};var H={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:'input:not([type="hidden"])',ACTIVE:".active",BUTTON:".btn"};var t={CLICK_DATA_API:"click"+da+a2,FOCUS_BLUR_DATA_API:"focus"+da+a2+" "+("blur"+da+a2)};var db=function(){function dC(dG){this._element=dG}var dB=dC.prototype;dB.toggle=function i(){var dJ=true;var dI=true;var dG=di(this._element).closest(H.DATA_TOGGLE)[0];if(dG){var dH=this._element.querySelector(H.INPUT);if(dH){if(dH.type==="radio"){if(dH.checked&&this._element.classList.contains(bg.ACTIVE)){dJ=false}else{var dK=dG.querySelector(H.ACTIVE);if(dK){di(dK).removeClass(bg.ACTIVE)}}}if(dJ){if(dH.hasAttribute("disabled")||dG.hasAttribute("disabled")||dH.classList.contains("disabled")||dG.classList.contains("disabled")){return}dH.checked=!this._element.classList.contains(bg.ACTIVE);di(dH).trigger("change")}dH.focus();dI=false}}if(dI){this._element.setAttribute("aria-pressed",!this._element.classList.contains(bg.ACTIVE))}if(dJ){di(this._element).toggleClass(bg.ACTIVE)}};dB.dispose=function dF(){di.removeData(this._element,cm);this._element=null};dC._jQueryInterface=function dE(dG){return this.each(function(){var dH=di(this).data(cm);if(!dH){dH=new dC(this);di(this).data(cm,dH)}if(dG==="toggle"){dH[dG]()}})};cq(dC,null,[{key:"VERSION",get:function dD(){return P}}]);return dC}();di(document).on(t.CLICK_DATA_API,H.DATA_TOGGLE_CARROT,function(dB){dB.preventDefault();var i=dB.target;if(!di(i).hasClass(bg.BUTTON)){i=di(i).closest(H.BUTTON)}db._jQueryInterface.call(di(i),"toggle")}).on(t.FOCUS_BLUR_DATA_API,H.DATA_TOGGLE_CARROT,function(dB){var i=di(dB.target).closest(H.BUTTON)[0];di(i).toggleClass(bg.FOCUS,/^focus(in)?$/.test(dB.type))});di.fn[aD]=db._jQueryInterface;di.fn[aD].Constructor=db;di.fn[aD].noConflict=function(){di.fn[aD]=bn;return db._jQueryInterface};var aA="carousel";var O="4.3.1";var ck="bs.carousel";var c9="."+ck;var a1=".data-api";var bm=di.fn[aA];var cl=37;var an=39;var dm=500;var cv=40;var Y={interval:5000,keyboard:true,slide:false,pause:"hover",wrap:true,touch:true};var bv={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"};var cp={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"};var r={SLIDE:"slide"+c9,SLID:"slid"+c9,KEYDOWN:"keydown"+c9,MOUSEENTER:"mouseenter"+c9,MOUSELEAVE:"mouseleave"+c9,TOUCHSTART:"touchstart"+c9,TOUCHMOVE:"touchmove"+c9,TOUCHEND:"touchend"+c9,POINTERDOWN:"pointerdown"+c9,POINTERUP:"pointerup"+c9,DRAG_START:"dragstart"+c9,LOAD_DATA_API:"load"+c9+a1,CLICK_DATA_API:"click"+c9+a1};var be={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item",POINTER_EVENT:"pointer-event"};var F={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",ITEM_IMG:".carousel-item img",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'};var b={TOUCH:"touch",PEN:"pen"};var aQ=function(){function dR(dX,dW){this._items=null;this._interval=null;this._activeElement=null;this._isPaused=false;this._isSliding=false;this.touchTimeout=null;this.touchStartX=0;this.touchDeltaX=0;this._config=this._getConfig(dW);this._element=dX;this._indicatorsElement=this._element.querySelector(F.INDICATORS);this._touchSupported="ontouchstart" in document.documentElement||navigator.maxTouchPoints>0;this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent);this._addEventListeners()}var dE=dR.prototype;dE.next=function dP(){if(!this._isSliding){this._slide(cp.NEXT)}};dE.nextWhenVisible=function dV(){if(!document.hidden&&di(this._element).is(":visible")&&di(this._element).css("visibility")!=="hidden"){this.next()}};dE.prev=function dO(){if(!this._isSliding){this._slide(cp.PREV)}};dE.pause=function dH(dW){if(!dW){this._isPaused=true}if(this._element.querySelector(F.NEXT_PREV)){bV.triggerTransitionEnd(this._element);this.cycle(true)}clearInterval(this._interval);this._interval=null};dE.cycle=function dL(dW){if(!dW){this._isPaused=false}if(this._interval){clearInterval(this._interval);this._interval=null}if(this._config.interval&&!this._isPaused){this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval)}};dE.to=function dC(dX){var dZ=this;this._activeElement=this._element.querySelector(F.ACTIVE_ITEM);var dW=this._getItemIndex(this._activeElement);if(dX>this._items.length-1||dX<0){return}if(this._isSliding){di(this._element).one(r.SLID,function(){return dZ.to(dX)});return}if(dW===dX){this.pause();this.cycle();return}var dY=dX>dW?cp.NEXT:cp.PREV;this._slide(dY,this._items[dX])};dE.dispose=function dU(){di(this._element).off(c9);di.removeData(this._element,ck);this._items=null;this._config=null;this._element=null;this._interval=null;this._isPaused=null;this._isSliding=null;this._activeElement=null;this._indicatorsElement=null};dE._getConfig=function dF(dW){dW=J({},Y,dW);bV.typeCheckConfig(aA,dW,bv);return dW};dE._handleSwipe=function dI(){var dW=Math.abs(this.touchDeltaX);if(dW<=cv){return}var dX=dW/this.touchDeltaX;if(dX>0){this.prev()}if(dX<0){this.next()}};dE._addEventListeners=function dD(){var dW=this;if(this._config.keyboard){di(this._element).on(r.KEYDOWN,function(dX){return dW._keydown(dX)})}if(this._config.pause==="hover"){di(this._element).on(r.MOUSEENTER,function(dX){return dW.pause(dX)}).on(r.MOUSELEAVE,function(dX){return dW.cycle(dX)})}if(this._config.touch){this._addTouchEventListeners()}};dE._addTouchEventListeners=function dG(){var dY=this;if(!this._touchSupported){return}var dZ=function dZ(d0){if(dY._pointerEvent&&b[d0.originalEvent.pointerType.toUpperCase()]){dY.touchStartX=d0.originalEvent.clientX}else{if(!dY._pointerEvent){dY.touchStartX=d0.originalEvent.touches[0].clientX}}};var dX=function dX(d0){if(d0.originalEvent.touches&&d0.originalEvent.touches.length>1){dY.touchDeltaX=0}else{dY.touchDeltaX=d0.originalEvent.touches[0].clientX-dY.touchStartX}};var dW=function dW(d0){if(dY._pointerEvent&&b[d0.originalEvent.pointerType.toUpperCase()]){dY.touchDeltaX=d0.originalEvent.clientX-dY.touchStartX}dY._handleSwipe();if(dY._config.pause==="hover"){dY.pause();if(dY.touchTimeout){clearTimeout(dY.touchTimeout)}dY.touchTimeout=setTimeout(function(d1){return dY.cycle(d1)},dm+dY._config.interval)}};di(this._element.querySelectorAll(F.ITEM_IMG)).on(r.DRAG_START,function(d0){return d0.preventDefault()});if(this._pointerEvent){di(this._element).on(r.POINTERDOWN,function(d0){return dZ(d0)});di(this._element).on(r.POINTERUP,function(d0){return dW(d0)});this._element.classList.add(be.POINTER_EVENT)}else{di(this._element).on(r.TOUCHSTART,function(d0){return dZ(d0)});di(this._element).on(r.TOUCHMOVE,function(d0){return dX(d0)});di(this._element).on(r.TOUCHEND,function(d0){return dW(d0)})}};dE._keydown=function i(dW){if(/input|textarea/i.test(dW.target.tagName)){return}switch(dW.which){case cl:dW.preventDefault();this.prev();break;case an:dW.preventDefault();this.next();break;default:}};dE._getItemIndex=function dT(dW){this._items=dW&&dW.parentNode?[].slice.call(dW.parentNode.querySelectorAll(F.ITEM)):[];return this._items.indexOf(dW)};dE._getItemByDirection=function dB(d2,dX){var dZ=d2===cp.NEXT;var d1=d2===cp.PREV;var d4=this._getItemIndex(dX);var d0=this._items.length-1;var dY=d1&&d4===0||dZ&&d4===d0;if(dY&&!this._config.wrap){return dX}var d3=d2===cp.PREV?-1:1;var dW=(d4+d3)%this._items.length;return dW===-1?this._items[this._items.length-1]:this._items[dW]};dE._triggerSlideEvent=function dQ(dX,d0){var dY=this._getItemIndex(dX);var dZ=this._getItemIndex(this._element.querySelector(F.ACTIVE_ITEM));var dW=di.Event(r.SLIDE,{relatedTarget:dX,direction:d0,from:dZ,to:dY});di(this._element).trigger(dW);return dW};dE._setActiveIndicatorElement=function dJ(dX){if(this._indicatorsElement){var dY=[].slice.call(this._indicatorsElement.querySelectorAll(F.ACTIVE));di(dY).removeClass(be.ACTIVE);var dW=this._indicatorsElement.children[this._getItemIndex(dX)];if(dW){di(dW).addClass(be.ACTIVE)}}};dE._slide=function dN(d9,d3){var d4=this;var dX=this._element.querySelector(F.ACTIVE_ITEM);var d8=this._getItemIndex(dX);var d7=d3||dX&&this._getItemByDirection(d9,dX);var d2=this._getItemIndex(d7);var d5=Boolean(this._interval);var d1;var d0;var dY;if(d9===cp.NEXT){d1=be.LEFT;d0=be.NEXT;dY=cp.LEFT}else{d1=be.RIGHT;d0=be.PREV;dY=cp.RIGHT}if(d7&&di(d7).hasClass(be.ACTIVE)){this._isSliding=false;return}var dW=this._triggerSlideEvent(d7,dY);if(dW.isDefaultPrevented()){return}if(!dX||!d7){return}this._isSliding=true;if(d5){this.pause()}this._setActiveIndicatorElement(d7);var ea=di.Event(r.SLID,{relatedTarget:d7,direction:dY,from:d8,to:d2});if(di(this._element).hasClass(be.SLIDE)){di(d7).addClass(d0);bV.reflow(d7);di(dX).addClass(d1);di(d7).addClass(d1);var d6=parseInt(d7.getAttribute("data-interval"),10);if(d6){this._config.defaultInterval=this._config.defaultInterval||this._config.interval;this._config.interval=d6}else{this._config.interval=this._config.defaultInterval||this._config.interval}var dZ=bV.getTransitionDurationFromElement(dX);di(dX).one(bV.TRANSITION_END,function(){di(d7).removeClass(d1+" "+d0).addClass(be.ACTIVE);di(dX).removeClass(be.ACTIVE+" "+d0+" "+d1);d4._isSliding=false;setTimeout(function(){return di(d4._element).trigger(ea)},0)}).emulateTransitionEnd(dZ)}else{di(dX).removeClass(be.ACTIVE);di(d7).addClass(be.ACTIVE);this._isSliding=false;di(this._element).trigger(ea)}if(d5){this.cycle()}};dR._jQueryInterface=function dK(dW){return this.each(function(){var dZ=di(this).data(ck);var dY=J({},Y,di(this).data());if(typeof dW==="object"){dY=J({},dY,dW)}var dX=typeof dW==="string"?dW:dY.slide;if(!dZ){dZ=new dR(this,dY);di(this).data(ck,dZ)}if(typeof dW==="number"){dZ.to(dW)}else{if(typeof dX==="string"){if(typeof dZ[dX]==="undefined"){throw new TypeError('No method named "'+dX+'"')}dZ[dX]()}else{if(dY.interval&&dY.ride){dZ.pause();dZ.cycle()}}}})};dR._dataApiClickHandler=function dM(dY){var dW=bV.getSelectorFromElement(this);if(!dW){return}var d0=di(dW)[0];if(!d0||!di(d0).hasClass(be.CAROUSEL)){return}var dX=J({},di(d0).data(),di(this).data());var dZ=this.getAttribute("data-slide-to");if(dZ){dX.interval=false}dR._jQueryInterface.call(di(d0),dX);if(dZ){di(d0).data(ck).to(dZ)}dY.preventDefault()};cq(dR,null,[{key:"VERSION",get:function dS(){return O}},{key:"Default",get:function dS(){return Y}}]);return dR}();di(document).on(r.CLICK_DATA_API,F.DATA_SLIDE,aQ._dataApiClickHandler);di(window).on(r.LOAD_DATA_API,function(){var dE=[].slice.call(document.querySelectorAll(F.DATA_RIDE));for(var dD=0,dB=dE.length;dD<dB;dD++){var dC=di(dE[dD]);aQ._jQueryInterface.call(dC,dC.data())}});di.fn[aA]=aQ._jQueryInterface;di.fn[aA].Constructor=aQ;di.fn[aA].noConflict=function(){di.fn[aA]=bm;return aQ._jQueryInterface};var ax="collapse";var M="4.3.1";var cj="bs.collapse";var c7="."+cj;var aZ=".data-api";var bl=di.fn[ax];var bN={toggle:true,parent:""};var ch={toggle:"boolean",parent:"(string|element)"};var q={SHOW:"show"+c7,SHOWN:"shown"+c7,HIDE:"hide"+c7,HIDDEN:"hidden"+c7,CLICK_DATA_API:"click"+c7+aZ};var bc={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"};var bA={WIDTH:"width",HEIGHT:"height"};var D={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'};var bz=function(){function dG(dS,dQ){this._isTransitioning=false;this._element=dS;this._config=this._getConfig(dQ);this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+dS.id+'"],'+('[data-toggle="collapse"][data-target="#'+dS.id+'"]')));var dT=[].slice.call(document.querySelectorAll(D.DATA_TOGGLE));for(var dR=0,dP=dT.length;dR<dP;dR++){var dU=dT[dR];var dO=bV.getSelectorFromElement(dU);var dV=[].slice.call(document.querySelectorAll(dO)).filter(function(dW){return dW===dS});if(dO!==null&&dV.length>0){this._selector=dO;this._triggerArray.push(dU)}}this._parent=this._config.parent?this._getParent():null;if(!this._config.parent){this._addAriaAndCollapsedClass(this._element,this._triggerArray)}if(this._config.toggle){this.toggle()}}var dI=dG.prototype;dI.toggle=function dF(){if(di(this._element).hasClass(bc.SHOW)){this.hide()}else{this.show()}};dI.show=function dL(){var dV=this;if(this._isTransitioning||di(this._element).hasClass(bc.SHOW)){return}var dO;var dT;if(this._parent){dO=[].slice.call(this._parent.querySelectorAll(D.ACTIVES)).filter(function(dX){if(typeof dV._config.parent==="string"){return dX.getAttribute("data-parent")===dV._config.parent}return dX.classList.contains(bc.COLLAPSE)});if(dO.length===0){dO=null}}if(dO){dT=di(dO).not(this._selector).data(cj);if(dT&&dT._isTransitioning){return}}var dU=di.Event(q.SHOW);di(this._element).trigger(dU);if(dU.isDefaultPrevented()){return}if(dO){dG._jQueryInterface.call(di(dO).not(this._selector),"hide");if(!dT){di(dO).data(cj,null)}}var dS=this._getDimension();di(this._element).removeClass(bc.COLLAPSE).addClass(bc.COLLAPSING);this._element.style[dS]=0;if(this._triggerArray.length){di(this._triggerArray).removeClass(bc.COLLAPSED).attr("aria-expanded",true)}this.setTransitioning(true);var dQ=function dQ(){di(dV._element).removeClass(bc.COLLAPSING).addClass(bc.COLLAPSE).addClass(bc.SHOW);dV._element.style[dS]="";dV.setTransitioning(false);di(dV._element).trigger(q.SHOWN)};var dW=dS[0].toUpperCase()+dS.slice(1);var dP="scroll"+dW;var dR=bV.getTransitionDurationFromElement(this._element);di(this._element).one(bV.TRANSITION_END,dQ).emulateTransitionEnd(dR);this._element.style[dS]=this._element[dP]+"px"};dI.hide=function dH(){var dX=this;if(this._isTransitioning||!di(this._element).hasClass(bc.SHOW)){return}var dV=di.Event(q.HIDE);di(this._element).trigger(dV);if(dV.isDefaultPrevented()){return}var dU=this._getDimension();this._element.style[dU]=this._element.getBoundingClientRect()[dU]+"px";bV.reflow(this._element);di(this._element).addClass(bc.COLLAPSING).removeClass(bc.COLLAPSE).removeClass(bc.SHOW);var dR=this._triggerArray.length;if(dR>0){for(var dW=0;dW<dR;dW++){var dQ=this._triggerArray[dW];var dS=bV.getSelectorFromElement(dQ);if(dS!==null){var dP=di([].slice.call(document.querySelectorAll(dS)));if(!dP.hasClass(bc.SHOW)){di(dQ).addClass(bc.COLLAPSED).attr("aria-expanded",false)}}}}this.setTransitioning(true);var dO=function dO(){dX.setTransitioning(false);di(dX._element).removeClass(bc.COLLAPSING).addClass(bc.COLLAPSE).trigger(q.HIDDEN)};this._element.style[dU]="";var dT=bV.getTransitionDurationFromElement(this._element);di(this._element).one(bV.TRANSITION_END,dO).emulateTransitionEnd(dT)};dI.setTransitioning=function dD(dO){this._isTransitioning=dO};dI.dispose=function dM(){di.removeData(this._element,cj);this._config=null;this._parent=null;this._element=null;this._triggerArray=null;this._isTransitioning=null};dI._getConfig=function dK(dO){dO=J({},bN,dO);dO.toggle=Boolean(dO.toggle);bV.typeCheckConfig(ax,dO,ch);return dO};dI._getDimension=function dN(){var dO=di(this._element).hasClass(bA.WIDTH);return dO?bA.WIDTH:bA.HEIGHT};dI._getParent=function dC(){var dR=this;var dQ;if(bV.isElement(this._config.parent)){dQ=this._config.parent;if(typeof this._config.parent.jquery!=="undefined"){dQ=this._config.parent[0]}}else{dQ=document.querySelector(this._config.parent)}var dO='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';var dP=[].slice.call(dQ.querySelectorAll(dO));di(dP).each(function(dT,dS){dR._addAriaAndCollapsedClass(dG._getTargetFromElement(dS),[dS])});return dQ};dI._addAriaAndCollapsedClass=function dE(dQ,dO){var dP=di(dQ).hasClass(bc.SHOW);if(dO.length){di(dO).toggleClass(bc.COLLAPSED,!dP).attr("aria-expanded",dP)}};dG._getTargetFromElement=function dJ(dP){var dO=bV.getSelectorFromElement(dP);return dO?document.querySelector(dO):null};dG._jQueryInterface=function dB(dO){return this.each(function(){var dR=di(this);var dQ=dR.data(cj);var dP=J({},bN,dR.data(),typeof dO==="object"&&dO?dO:{});if(!dQ&&dP.toggle&&/show|hide/.test(dO)){dP.toggle=false}if(!dQ){dQ=new dG(this,dP);dR.data(cj,dQ)}if(typeof dO==="string"){if(typeof dQ[dO]==="undefined"){throw new TypeError('No method named "'+dO+'"')}dQ[dO]()}})};cq(dG,null,[{key:"VERSION",get:function i(){return M}},{key:"Default",get:function i(){return bN}}]);return dG}();di(document).on(q.CLICK_DATA_API,D.DATA_TOGGLE,function(dD){if(dD.currentTarget.tagName==="A"){dD.preventDefault()}var dB=di(this);var i=bV.getSelectorFromElement(this);var dC=[].slice.call(document.querySelectorAll(i));di(dC).each(function(){var dE=di(this);var dG=dE.data(cj);var dF=dG?"toggle":dB.data();bz._jQueryInterface.call(dE,dF)})});di.fn[ax]=bz._jQueryInterface;di.fn[ax].Constructor=bz;di.fn[ax].noConflict=function(){di.fn[ax]=bl;return bz._jQueryInterface};var af=typeof window!=="undefined"&&typeof document!=="undefined";var ae=["Edge","Trident","Firefox"];var cr=0;for(var cy=0;cy<ae.length;cy+=1){if(af&&navigator.userAgent.indexOf(ae[cy])>=0){cr=1;break}}function bX(i){var dB=false;return function(){if(dB){return}dB=true;window.Promise.resolve().then(function(){dB=false;i()})}}function e(i){var dB=false;return function(){if(!dB){dB=true;setTimeout(function(){dB=false;i()},cr)}}}var cN=af&&window.Promise;var cR=cN?bX:e;function U(i){var dB={};return i&&dB.toString.call(i)==="[object Function]"}function c6(dB,dD){if(dB.nodeType!==1){return[]}var dC=dB.ownerDocument.defaultView;var i=dC.getComputedStyle(dB,null);return dD?i[dD]:i}function b6(i){if(i.nodeName==="HTML"){return i}return i.parentNode||i.host}function cZ(dD){if(!dD){return document.body}switch(dD.nodeName){case"HTML":case"BODY":return dD.ownerDocument.body;case"#document":return dD.body}var i=c6(dD),dE=i.overflow,dC=i.overflowX,dB=i.overflowY;if(/(auto|scroll|overlay)/.test(dE+dB+dC)){return dD}return cZ(b6(dD))}var al=af&&!!(window.MSInputMethodContext&&document.documentMode);var am=af&&/MSIE 10/.test(navigator.userAgent);function N(i){if(i===11){return al}if(i===10){return am}return al||am}function a0(i){if(!i){return document.documentElement}var dC=N(10)?document.body:null;var dB=i.offsetParent||null;while(dB===dC&&i.nextElementSibling){dB=(i=i.nextElementSibling).offsetParent}var dD=dB&&dB.nodeName;if(!dD||dD==="BODY"||dD==="HTML"){return i?i.ownerDocument.documentElement:document.documentElement}if(["TH","TD","TABLE"].indexOf(dB.nodeName)!==-1&&c6(dB,"position")==="static"){return a0(dB)}return dB}function cs(i){var dB=i.nodeName;if(dB==="BODY"){return false}return dB==="HTML"||a0(i.firstElementChild)===i}function a(i){if(i.parentNode!==null){return a(i.parentNode)}return i}function b9(dF,dE){if(!dF||!dF.nodeType||!dE||!dE.nodeType){return document.documentElement}var i=dF.compareDocumentPosition(dE)&Node.DOCUMENT_POSITION_FOLLOWING;var dH=i?dF:dE;var dB=i?dE:dF;var dC=document.createRange();dC.setStart(dH,0);dC.setEnd(dB,0);var dG=dC.commonAncestorContainer;if(dF!==dG&&dE!==dG||dH.contains(dB)){if(cs(dG)){return dG}return a0(dG)}var dD=a(dF);if(dD.host){return b9(dD.host,dE)}else{return b9(dF,a(dE).host)}}function dv(dD){var dC=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"top";var i=dC==="top"?"scrollTop":"scrollLeft";var dF=dD.nodeName;if(dF==="BODY"||dF==="HTML"){var dB=dD.ownerDocument.documentElement;var dE=dD.ownerDocument.scrollingElement||dB;return dE[i]}return dD[i]}function bJ(dC,dB){var dE=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var dD=dv(dB,"top");var dF=dv(dB,"left");var i=dE?-1:1;dC.top+=dD*i;dC.bottom+=dD*i;dC.left+=dF*i;dC.right+=dF*i;return dC}function bt(dD,dC){var dB=dC==="x"?"Left":"Top";var i=dB==="Left"?"Right":"Bottom";return parseFloat(dD["border"+dB+"Width"],10)+parseFloat(dD["border"+i+"Width"],10)}function bp(dD,i,dC,dB){return Math.max(i["offset"+dD],i["scroll"+dD],dC["client"+dD],dC["offset"+dD],dC["scroll"+dD],N(10)?parseInt(dC["offset"+dD])+parseInt(dB["margin"+(dD==="Height"?"Top":"Left")])+parseInt(dB["margin"+(dD==="Height"?"Bottom":"Right")]):0)}function s(dB){var i=dB.body;var dD=dB.documentElement;var dC=N(10)&&getComputedStyle(dD);return{height:bp("Height",i,dD,dC),width:bp("Width",i,dD,dC)}}var bW=function(i,dB){if(!(i instanceof dB)){throw new TypeError("Cannot call a class as a function")}};var c=function(){function i(dE,dC){for(var dB=0;dB<dC.length;dB++){var dD=dC[dB];dD.enumerable=dD.enumerable||false;dD.configurable=true;if("value" in dD){dD.writable=true}Object.defineProperty(dE,dD.key,dD)}}return function(dD,dB,dC){if(dB){i(dD.prototype,dB)}if(dC){i(dD,dC)}return dD}}();var cS=function(dC,i,dB){if(i in dC){Object.defineProperty(dC,i,{value:dB,enumerable:true,configurable:true,writable:true})}else{dC[i]=dB}return dC};var dA=Object.assign||function(dE){for(var dC=1;dC<arguments.length;dC++){var dD=arguments[dC];for(var dB in dD){if(Object.prototype.hasOwnProperty.call(dD,dB)){dE[dB]=dD[dB]}}}return dE};function ah(i){return dA({},i,{right:i.left+i.width,bottom:i.top+i.height})}function bx(dD){var dG={};try{if(N(10)){dG=dD.getBoundingClientRect();var dB=dv(dD,"top");var dC=dv(dD,"left");dG.top+=dB;dG.left+=dC;dG.bottom+=dB;dG.right+=dC}else{dG=dD.getBoundingClientRect()}}catch(dE){}var dL={left:dG.left,top:dG.top,width:dG.right-dG.left,height:dG.bottom-dG.top};var dK=dD.nodeName==="HTML"?s(dD.ownerDocument):{};var i=dK.width||dD.clientWidth||dL.right-dL.left;var dI=dK.height||dD.clientHeight||dL.bottom-dL.top;var dH=dD.offsetWidth-i;var dF=dD.offsetHeight-dI;if(dH||dF){var dJ=c6(dD);dH-=bt(dJ,"x");dF-=bt(dJ,"y");dL.width-=dH;dL.height-=dF}return ah(dL)}function bP(dC,dJ){var dF=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var i=N(10);var dG=dJ.nodeName==="HTML";var dH=bx(dC);var dN=bx(dJ);var dL=cZ(dC);var dM=c6(dJ);var dI=parseFloat(dM.borderTopWidth,10);var dK=parseFloat(dM.borderLeftWidth,10);if(dF&&dG){dN.top=Math.max(dN.top,0);dN.left=Math.max(dN.left,0)}var dE=ah({top:dH.top-dN.top-dI,left:dH.left-dN.left-dK,width:dH.width,height:dH.height});dE.marginTop=0;dE.marginLeft=0;if(!i&&dG){var dB=parseFloat(dM.marginTop,10);var dD=parseFloat(dM.marginLeft,10);dE.top-=dI-dB;dE.bottom-=dI-dB;dE.left-=dK-dD;dE.right-=dK-dD;dE.marginTop=dB;dE.marginLeft=dD}if(i&&!dF?dJ.contains(dL):dJ===dL&&dL.nodeName!=="BODY"){dE=bJ(dE,dJ)}return dE}function bo(dE){var dH=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var dG=dE.ownerDocument.documentElement;var dF=bP(dE,dG);var i=Math.max(dG.clientWidth,window.innerWidth||0);var dI=Math.max(dG.clientHeight,window.innerHeight||0);var dB=!dH?dv(dG):0;var dC=!dH?dv(dG,"left"):0;var dD={top:dB-dF.top+dF.marginTop,left:dC-dF.left+dF.marginLeft,width:i,height:dI};return ah(dD)}function cM(dB){var dC=dB.nodeName;if(dC==="BODY"||dC==="HTML"){return false}if(c6(dB,"position")==="fixed"){return true}var i=b6(dB);if(!i){return false}return cM(i)}function bD(i){if(!i||!i.parentElement||N()){return document.documentElement}var dB=i.parentElement;while(dB&&c6(dB,"transform")==="none"){dB=dB.parentElement}return dB||document.documentElement}function dy(dJ,dG,dK,dC){var dH=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var dE={top:0,left:0};var i=dH?bD(dJ):b9(dJ,dG);if(dC==="viewport"){dE=bo(i,dH)}else{var dL=void 0;if(dC==="scrollParent"){dL=cZ(b6(dG));if(dL.nodeName==="BODY"){dL=dJ.ownerDocument.documentElement}}else{if(dC==="window"){dL=dJ.ownerDocument.documentElement}else{dL=dC}}var dF=bP(dL,i,dH);if(dL.nodeName==="HTML"&&!cM(i)){var dD=s(dJ.ownerDocument),dM=dD.height,dB=dD.width;dE.top+=dF.top-dF.marginTop;dE.bottom=dM+dF.top;dE.left+=dF.left-dF.marginLeft;dE.right=dB+dF.left}else{dE=dF}}dK=dK||0;var dI=typeof dK==="number";dE.left+=dI?dK:dK.left||0;dE.top+=dI?dK:dK.top||0;dE.right-=dI?dK:dK.right||0;dE.bottom-=dI?dK:dK.bottom||0;return dE}function ci(dC){var dB=dC.width,i=dC.height;return dB*i}function bY(dI,i,dJ,dH,dD){var dK=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(dI.indexOf("auto")===-1){return dI}var dF=dy(dJ,dH,dK,dD);var dL={top:{width:dF.width,height:i.top-dF.top},right:{width:dF.right-i.right,height:dF.height},bottom:{width:dF.width,height:dF.bottom-i.bottom},left:{width:i.left-dF.left,height:dF.height}};var dE=Object.keys(dL).map(function(dM){return dA({key:dM},dL[dM],{area:ci(dL[dM])})}).sort(function(dN,dM){return dM.area-dN.area});var dC=dE.filter(function(dO){var dN=dO.width,dM=dO.height;return dN>=dJ.clientWidth&&dM>=dJ.clientHeight});var dB=dC.length>0?dC[0].key:dE[0].key;var dG=dI.split("-")[1];return dB+(dG?"-"+dG:"")}function Z(dD,dB,i){var dC=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var dE=dC?bD(dB):b9(dB,i);return bP(i,dE,dC)}function Q(dC){var dE=dC.ownerDocument.defaultView;var dD=dE.getComputedStyle(dC);var dB=parseFloat(dD.marginTop||0)+parseFloat(dD.marginBottom||0);var dF=parseFloat(dD.marginLeft||0)+parseFloat(dD.marginRight||0);var i={width:dC.offsetWidth+dF,height:dC.offsetHeight+dB};return i}function bR(i){var dB={left:"right",right:"left",bottom:"top",top:"bottom"};return i.replace(/left|right|bottom|top/g,function(dC){return dB[dC]})}function c3(dI,dB,dC){dC=dC.split("-")[0];var dH=Q(dI);var dD={width:dH.width,height:dH.height};var dJ=["right","left"].indexOf(dC)!==-1;var dF=dJ?"top":"left";var dG=dJ?"left":"top";var i=dJ?"height":"width";var dE=!dJ?"height":"width";dD[dF]=dB[dF]+dB[i]/2-dH[i]/2;if(dC===dG){dD[dG]=dB[dG]-dH[dE]}else{dD[dG]=dB[bR(dG)]}return dD}function bB(i,dB){if(Array.prototype.find){return i.find(dB)}return i.filter(dB)[0]}function dq(i,dD,dC){if(Array.prototype.findIndex){return i.findIndex(function(dE){return dE[dD]===dC})}var dB=bB(i,function(dE){return dE[dD]===dC});return i.indexOf(dB)}function bT(dC,dD,dB){var i=dB===undefined?dC:dC.slice(0,dq(dC,"name",dB));i.forEach(function(dE){if(dE["function"]){console.warn("`modifier.function` is deprecated, use `modifier.fn`!")}var dF=dE["function"]||dE.fn;if(dE.enabled&&U(dF)){dD.offsets.popper=ah(dD.offsets.popper);dD.offsets.reference=ah(dD.offsets.reference);dD=dF(dD,dE)}});return dD}function aj(){if(this.state.isDestroyed){return}var i={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};i.offsets.reference=Z(this.state,this.popper,this.reference,this.options.positionFixed);i.placement=bY(this.options.placement,i.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);i.originalPlacement=i.placement;i.positionFixed=this.options.positionFixed;i.offsets.popper=c3(this.popper,i.offsets.reference,i.placement);i.offsets.popper.position=this.options.positionFixed?"fixed":"absolute";i=bT(this.modifiers,i);if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(i)}else{this.options.onUpdate(i)}}function ak(i,dB){return i.some(function(dE){var dD=dE.name,dC=dE.enabled;return dC&&dD===dB})}function bk(dG){var dF=[false,"ms","Webkit","Moz","O"];var dD=dG.charAt(0).toUpperCase()+dG.slice(1);for(var dB=0;dB<dF.length;dB++){var dE=dF[dB];var dC=dE?""+dE+dD:dG;if(typeof document.body.style[dC]!=="undefined"){return dC}}return null}function ab(){this.state.isDestroyed=true;if(ak(this.modifiers,"applyStyle")){this.popper.removeAttribute("x-placement");this.popper.style.position="";this.popper.style.top="";this.popper.style.left="";this.popper.style.right="";this.popper.style.bottom="";this.popper.style.willChange="";this.popper.style[bk("transform")]=""}this.disableEventListeners();if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper)}return this}function cE(dB){var i=dB.ownerDocument;return i?i.defaultView:window}function aN(dF,dB,dE,dD){var i=dF.nodeName==="BODY";var dC=i?dF.ownerDocument.defaultView:dF;dC.addEventListener(dB,dE,{passive:true});if(!i){aN(cZ(dC.parentNode),dB,dE,dD)}dD.push(dC)}function de(i,dB,dC,dE){dC.updateBound=dE;cE(i).addEventListener("resize",dC.updateBound,{passive:true});var dD=cZ(i);aN(dD,"scroll",dC.updateBound,dC.scrollParents);dC.scrollElement=dD;dC.eventsEnabled=true;return dC}function bs(){if(!this.state.eventsEnabled){this.state=de(this.reference,this.options,this.state,this.scheduleUpdate)}}function g(i,dB){cE(i).removeEventListener("resize",dB.updateBound);dB.scrollParents.forEach(function(dC){dC.removeEventListener("scroll",dB.updateBound)});dB.updateBound=null;dB.scrollParents=[];dB.scrollElement=null;dB.eventsEnabled=false;return dB}function bF(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=g(this.reference,this.state)}}function bS(i){return i!==""&&!isNaN(parseFloat(i))&&isFinite(i)}function cn(i,dB){Object.keys(dB).forEach(function(dD){var dC="";if(["width","height","top","right","bottom","left"].indexOf(dD)!==-1&&bS(dB[dD])){dC="px"}i.style[dD]=dB[dD]+dC})}function cV(dB,i){Object.keys(i).forEach(function(dD){var dC=i[dD];if(dC!==false){dB.setAttribute(dD,i[dD])}else{dB.removeAttribute(dD)}})}function b3(i){cn(i.instance.popper,i.styles);cV(i.instance.popper,i.attributes);if(i.arrowElement&&Object.keys(i.arrowStyles).length){cn(i.arrowElement,i.arrowStyles)}return i}function dw(i,dC,dD,dF,dG){var dB=Z(dG,dC,i,dD.positionFixed);var dE=bY(dD.placement,dB,dC,i,dD.modifiers.flip.boundariesElement,dD.modifiers.flip.padding);dC.setAttribute("x-placement",dE);cn(dC,{position:dD.positionFixed?"fixed":"absolute"});return dD}function co(dH,dK){var dL=dH.offsets,dM=dL.popper,dC=dL.reference;var dP=Math.round,dJ=Math.floor;var dE=function dE(dQ){return dQ};var dB=dP(dC.width);var dG=dP(dM.width);var dN=["left","right"].indexOf(dH.placement)!==-1;var dD=dH.placement.indexOf("-")!==-1;var dF=dB%2===dG%2;var dO=dB%2===1&&dG%2===1;var dI=!dK?dE:dN||dD||dF?dP:dJ;var i=!dK?dE:dP;return{left:dI(dO&&!dD&&dK?dM.left-1:dM.left),top:i(dM.top),bottom:i(dM.bottom),right:dI(dM.right)}}var cK=af&&/Firefox/i.test(navigator.userAgent);function dd(dS,dC){var dI=dC.x,dH=dC.y;var dP=dS.offsets.popper;var dM=bB(dS.instance.modifiers,function(dT){return dT.name==="applyStyle"}).gpuAcceleration;if(dM!==undefined){console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")}var dL=dM!==undefined?dM:dC.gpuAcceleration;var i=a0(dS.instance.popper);var dN=bx(i);var dG={position:dP.position};var dE=co(dS,window.devicePixelRatio<2||!cK);var dR=dI==="bottom"?"top":"bottom";var dQ=dH==="right"?"left":"right";var dJ=bk("transform");var dD=void 0,dK=void 0;if(dR==="bottom"){if(i.nodeName==="HTML"){dK=-i.clientHeight+dE.bottom}else{dK=-dN.height+dE.bottom}}else{dK=dE.top}if(dQ==="right"){if(i.nodeName==="HTML"){dD=-i.clientWidth+dE.right}else{dD=-dN.width+dE.right}}else{dD=dE.left}if(dL&&dJ){dG[dJ]="translate3d("+dD+"px, "+dK+"px, 0)";dG[dR]=0;dG[dQ]=0;dG.willChange="transform"}else{var dB=dR==="bottom"?-1:1;var dO=dQ==="right"?-1:1;dG[dR]=dK*dB;dG[dQ]=dD*dO;dG.willChange=dR+", "+dQ}var dF={"x-placement":dS.placement};dS.attributes=dA({},dF,dS.attributes);dS.styles=dA({},dG,dS.styles);dS.arrowStyles=dA({},dS.offsets.arrow,dS.arrowStyles);return dS}function bC(i,dB,dC){var dG=bB(i,function(dI){var dH=dI.name;return dH===dB});var dE=!!dG&&i.some(function(dH){return dH.name===dC&&dH.enabled&&dH.order<dG.order});if(!dE){var dD="`"+dB+"`";var dF="`"+dC+"`";console.warn(dF+" modifier is required by "+dD+" modifier in order to work, be sure to include it before "+dD+"!")}return dE}function d(dT,dF){var dN;if(!bC(dT.instance.modifiers,"arrow","keepTogether")){return dT}var dO=dF.element;if(typeof dO==="string"){dO=dT.instance.popper.querySelector(dO);if(!dO){return dT}}else{if(!dT.instance.popper.contains(dO)){console.warn("WARNING: `arrow.element` must be child of its popper element!");return dT}}var dM=dT.placement.split("-")[0];var dD=dT.offsets,dQ=dD.popper,dH=dD.reference;var dI=["left","right"].indexOf(dM)!==-1;var dP=dI?"height":"width";var dE=dI?"Top":"Left";var dC=dE.toLowerCase();var dR=dI?"left":"top";var dB=dI?"bottom":"right";var dG=Q(dO)[dP];if(dH[dB]-dG<dQ[dC]){dT.offsets.popper[dC]-=dQ[dC]-(dH[dB]-dG)}if(dH[dC]+dG>dQ[dB]){dT.offsets.popper[dC]+=dH[dC]+dG-dQ[dB]}dT.offsets.popper=ah(dT.offsets.popper);var dS=dH[dC]+dH[dP]/2-dG/2;var dK=c6(dT.instance.popper);var i=parseFloat(dK["margin"+dE],10);var dJ=parseFloat(dK["border"+dE+"Width"],10);var dL=dS-dT.offsets.popper[dC]-i-dJ;dL=Math.max(Math.min(dQ[dP]-dG,dL),0);dT.arrowElement=dO;dT.offsets.arrow=(dN={},cS(dN,dC,Math.round(dL)),cS(dN,dR,""),dN);return dT}function dp(i){if(i==="end"){return"start"}else{if(i==="start"){return"end"}}return i}var cF=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var aC=cF.slice(3);function aP(dD){var dB=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var dC=aC.indexOf(dD);var i=aC.slice(dC+1).concat(aC.slice(0,dC));return dB?i.reverse():i}var c5={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function aO(dF,dB){if(ak(dF.instance.modifiers,"inner")){return dF}if(dF.flipped&&dF.placement===dF.originalPlacement){return dF}var i=dy(dF.instance.popper,dF.instance.reference,dB.padding,dB.boundariesElement,dF.positionFixed);var dD=dF.placement.split("-")[0];var dG=bR(dD);var dC=dF.placement.split("-")[1]||"";var dE=[];switch(dB.behavior){case c5.FLIP:dE=[dD,dG];break;case c5.CLOCKWISE:dE=aP(dD);break;case c5.COUNTERCLOCKWISE:dE=aP(dD,true);break;default:dE=dB.behavior}dE.forEach(function(dM,dR){if(dD!==dM||dE.length===dR+1){return dF}dD=dF.placement.split("-")[0];dG=bR(dD);var dQ=dF.offsets.popper;var dI=dF.offsets.reference;var dP=Math.floor;var dO=dD==="left"&&dP(dQ.right)>dP(dI.left)||dD==="right"&&dP(dQ.left)<dP(dI.right)||dD==="top"&&dP(dQ.bottom)>dP(dI.top)||dD==="bottom"&&dP(dQ.top)<dP(dI.bottom);var dH=dP(dQ.left)<dP(i.left);var dJ=dP(dQ.right)>dP(i.right);var dT=dP(dQ.top)<dP(i.top);var dL=dP(dQ.bottom)>dP(i.bottom);var dN=dD==="left"&&dH||dD==="right"&&dJ||dD==="top"&&dT||dD==="bottom"&&dL;var dS=["top","bottom"].indexOf(dD)!==-1;var dK=!!dB.flipVariations&&(dS&&dC==="start"&&dH||dS&&dC==="end"&&dJ||!dS&&dC==="start"&&dT||!dS&&dC==="end"&&dL);if(dO||dN||dK){dF.flipped=true;if(dO||dN){dD=dE[dR+1]}if(dK){dC=dp(dC)}dF.placement=dD+(dC?"-"+dC:"");dF.offsets.popper=dA({},dF.offsets.popper,c3(dF.instance.popper,dF.offsets.reference,dF.placement));dF=bT(dF.instance.modifiers,dF,"flip")}});return dF}function aX(dE){var dH=dE.offsets,dI=dH.popper,dC=dH.reference;var dD=dE.placement.split("-")[0];var dF=Math.floor;var dJ=["top","bottom"].indexOf(dD)!==-1;var dG=dJ?"right":"bottom";var dB=dJ?"left":"top";var i=dJ?"width":"height";if(dI[dG]<dF(dC[dB])){dE.offsets.popper[dB]=dF(dC[dB])-dI[i]}if(dI[dB]>dF(dC[dG])){dE.offsets.popper[dB]=dF(dC[dG])}return dE}function f(dE,i,dD,dB){var dF=dE.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var dH=+dF[1];var dI=dF[2];if(!dH){return dE}if(dI.indexOf("%")===0){var dC=void 0;switch(dI){case"%p":dC=dD;break;case"%":case"%r":default:dC=dB}var dG=ah(dC);return dG[i]/100*dH}else{if(dI==="vh"||dI==="vw"){var dJ=void 0;if(dI==="vh"){dJ=Math.max(document.documentElement.clientHeight,window.innerHeight||0)}else{dJ=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}return dJ/100*dH}else{return dH}}}function br(dF,dH,dC,dB){var dD=[0,0];var dJ=["right","left"].indexOf(dB)!==-1;var dI=dF.split(/(\+|\-)/).map(function(dK){return dK.trim()});var dG=dI.indexOf(bB(dI,function(dK){return dK.search(/,|\s/)!==-1}));if(dI[dG]&&dI[dG].indexOf(",")===-1){console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")}var dE=/\s*,\s*|\s+/;var i=dG!==-1?[dI.slice(0,dG).concat([dI[dG].split(dE)[0]]),[dI[dG].split(dE)[1]].concat(dI.slice(dG+1))]:[dI];i=i.map(function(dN,dK){var dM=(dK===1?!dJ:dJ)?"height":"width";var dL=false;return dN.reduce(function(dP,dO){if(dP[dP.length-1]===""&&["+","-"].indexOf(dO)!==-1){dP[dP.length-1]=dO;dL=true;return dP}else{if(dL){dP[dP.length-1]+=dO;dL=false;return dP}else{return dP.concat(dO)}}},[]).map(function(dO){return f(dO,dM,dH,dC)})});i.forEach(function(dL,dK){dL.forEach(function(dN,dM){if(bS(dN)){dD[dK]+=dN*(dL[dM-1]==="-"?-1:1)}})});return dD}function dn(dF,dG){var dD=dG.offset;var dE=dF.placement,dH=dF.offsets,dI=dH.popper,dC=dH.reference;var i=dE.split("-")[0];var dB=void 0;if(bS(+dD)){dB=[+dD,0]}else{dB=br(dD,dI,dC,i)}if(i==="left"){dI.top+=dB[0];dI.left-=dB[1]}else{if(i==="right"){dI.top+=dB[0];dI.left+=dB[1]}else{if(i==="top"){dI.left+=dB[0];dI.top-=dB[1]}else{if(i==="bottom"){dI.left+=dB[0];dI.top+=dB[1]}}}}dF.popper=dI;return dF}function bU(dI,dN){var dB=dN.boundariesElement||a0(dI.instance.popper);if(dI.instance.reference===dB){dB=a0(dB)}var dL=bk("transform");var dH=dI.instance.popper.style;var dK=dH.top,dG=dH.left,dD=dH[dL];dH.top="";dH.left="";dH[dL]="";var dC=dy(dI.instance.popper,dI.instance.reference,dN.padding,dB,dI.positionFixed);dH.top=dK;dH.left=dG;dH[dL]=dD;dN.boundaries=dC;var dF=dN.priority;var dJ=dI.offsets.popper;var i={primary:function dE(dO){var dP=dJ[dO];if(dJ[dO]<dC[dO]&&!dN.escapeWithReference){dP=Math.max(dJ[dO],dC[dO])}return cS({},dO,dP)},secondary:function dM(dO){var dQ=dO==="right"?"left":"top";var dP=dJ[dQ];if(dJ[dO]>dC[dO]&&!dN.escapeWithReference){dP=Math.min(dJ[dQ],dC[dO]-(dO==="right"?dJ.width:dJ.height))}return cS({},dQ,dP)}};dF.forEach(function(dP){var dO=["left","top"].indexOf(dP)!==-1?"primary":"secondary";dJ=dA({},dJ,i[dO](dP))});dI.offsets.popper=dJ;return dI}function A(dE){var dD=dE.placement;var i=dD.split("-")[0];var dF=dD.split("-")[1];if(dF){var dH=dE.offsets,dC=dH.reference,dI=dH.popper;var dJ=["bottom","top"].indexOf(i)!==-1;var dG=dJ?"left":"top";var dB=dJ?"width":"height";var dK={start:cS({},dG,dC[dG]),end:cS({},dG,dC[dG]+dC[dB]-dI[dB])};dE.offsets.popper=dA({},dI,dK[dF])}return dE}function cw(dC){if(!bC(dC.instance.modifiers,"hide","preventOverflow")){return dC}var i=dC.offsets.reference;var dB=bB(dC.instance.modifiers,function(dD){return dD.name==="preventOverflow"}).boundaries;if(i.bottom<dB.top||i.left>dB.right||i.top>dB.bottom||i.right<dB.left){if(dC.hide===true){return dC}dC.hide=true;dC.attributes["x-out-of-boundaries"]=""}else{if(dC.hide===false){return dC}dC.hide=false;dC.attributes["x-out-of-boundaries"]=false}return dC}function cB(dE){var dD=dE.placement;var dH=dD.split("-")[0];var dG=dE.offsets,dC=dG.popper,i=dG.reference;var dB=["left","right"].indexOf(dH)!==-1;var dF=["top","left"].indexOf(dH)===-1;dC[dB?"left":"top"]=i[dH]-(dF?dC[dB?"width":"height"]:0);dE.placement=bR(dD);dE.offsets.popper=ah(dC);return dE}var cu={shift:{order:100,enabled:true,fn:A},offset:{order:200,enabled:true,fn:dn,offset:0},preventOverflow:{order:300,enabled:true,fn:bU,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:true,fn:aX},arrow:{order:500,enabled:true,fn:d,element:"[x-arrow]"},flip:{order:600,enabled:true,fn:aO,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:false,fn:cB},hide:{order:800,enabled:true,fn:cw},computeStyle:{order:850,enabled:true,fn:dd,gpuAcceleration:true,x:"bottom",y:"right"},applyStyle:{order:900,enabled:true,fn:b3,onLoad:dw,gpuAcceleration:undefined}};var cJ={placement:"bottom",positionFixed:false,eventsEnabled:true,removeOnDestroy:false,onCreate:function dg(){},onUpdate:function df(){},modifiers:cu};var p=function(){function i(dF,dG){var dJ=this;var dH=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};bW(this,i);this.scheduleUpdate=function(){return requestAnimationFrame(dJ.update)};this.update=cR(this.update.bind(this));this.options=dA({},i.Defaults,dH);this.state={isDestroyed:false,isCreated:false,scrollParents:[]};this.reference=dF&&dF.jquery?dF[0]:dF;this.popper=dG&&dG.jquery?dG[0]:dG;this.options.modifiers={};Object.keys(dA({},i.Defaults.modifiers,dH.modifiers)).forEach(function(dK){dJ.options.modifiers[dK]=dA({},i.Defaults.modifiers[dK]||{},dH.modifiers?dH.modifiers[dK]:{})});this.modifiers=Object.keys(this.options.modifiers).map(function(dK){return dA({name:dK},dJ.options.modifiers[dK])}).sort(function(dL,dK){return dL.order-dK.order});this.modifiers.forEach(function(dK){if(dK.enabled&&U(dK.onLoad)){dK.onLoad(dJ.reference,dJ.popper,dJ.options,dK,dJ.state)}});this.update();var dI=this.options.eventsEnabled;if(dI){this.enableEventListeners()}this.state.eventsEnabled=dI}c(i,[{key:"update",value:function dC(){return aj.call(this)}},{key:"destroy",value:function dB(){return ab.call(this)}},{key:"enableEventListeners",value:function dE(){return bs.call(this)}},{key:"disableEventListeners",value:function dD(){return bF.call(this)}}]);return i}();p.Utils=(typeof window!=="undefined"?window:global).PopperUtils;p.placements=cF;p.Defaults=cJ;var aw="dropdown";var L="4.3.1";var cg="bs.dropdown";var c4="."+cg;var aW=".data-api";var bj=di.fn[aw];var ag=27;var a7=32;var b0=9;var aH=38;var dt=40;var cP=3;var bq=new RegExp(aH+"|"+dt+"|"+ag);var o={HIDE:"hide"+c4,HIDDEN:"hidden"+c4,SHOW:"show"+c4,SHOWN:"shown"+c4,CLICK:"click"+c4,CLICK_DATA_API:"click"+c4+aW,KEYDOWN_DATA_API:"keydown"+c4+aW,KEYUP_DATA_API:"keyup"+c4+aW};var ba={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"};var B={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"};var aK={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"};var bM={offset:0,flip:true,boundary:"scrollParent",reference:"toggle",display:"dynamic"};var cf={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"};var ad=function(){function dP(dU,dT){this._element=dU;this._popper=null;this._config=this._getConfig(dT);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();this._addEventListeners()}var dD=dP.prototype;dD.toggle=function dO(){if(this._element.disabled||di(this._element).hasClass(ba.DISABLED)){return}var dW=dP._getParentFromElement(this._element);var dV=di(this._menu).hasClass(ba.SHOW);dP._clearMenus();if(dV){return}var dT={relatedTarget:this._element};var dU=di.Event(o.SHOW,dT);di(dW).trigger(dU);if(dU.isDefaultPrevented()){return}if(!this._inNavbar){if(typeof p==="undefined"){throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)")}var dX=this._element;if(this._config.reference==="parent"){dX=dW}else{if(bV.isElement(this._config.reference)){dX=this._config.reference;if(typeof this._config.reference.jquery!=="undefined"){dX=this._config.reference[0]}}}if(this._config.boundary!=="scrollParent"){di(dW).addClass(ba.POSITION_STATIC)}this._popper=new p(dX,this._menu,this._getPopperConfig())}if("ontouchstart" in document.documentElement&&di(dW).closest(B.NAVBAR_NAV).length===0){di(document.body).children().on("mouseover",null,di.noop)}this._element.focus();this._element.setAttribute("aria-expanded",true);di(this._menu).toggleClass(ba.SHOW);di(dW).toggleClass(ba.SHOW).trigger(di.Event(o.SHOWN,dT))};dD.show=function dR(){if(this._element.disabled||di(this._element).hasClass(ba.DISABLED)||di(this._menu).hasClass(ba.SHOW)){return}var dT={relatedTarget:this._element};var dU=di.Event(o.SHOW,dT);var dV=dP._getParentFromElement(this._element);di(dV).trigger(dU);if(dU.isDefaultPrevented()){return}di(this._menu).toggleClass(ba.SHOW);di(dV).toggleClass(ba.SHOW).trigger(di.Event(o.SHOWN,dT))};dD.hide=function dI(){if(this._element.disabled||di(this._element).hasClass(ba.DISABLED)||!di(this._menu).hasClass(ba.SHOW)){return}var dT={relatedTarget:this._element};var dV=di.Event(o.HIDE,dT);var dU=dP._getParentFromElement(this._element);di(dU).trigger(dV);if(dV.isDefaultPrevented()){return}di(this._menu).toggleClass(ba.SHOW);di(dU).toggleClass(ba.SHOW).trigger(di.Event(o.HIDDEN,dT))};dD.dispose=function dS(){di.removeData(this._element,cg);di(this._element).off(c4);this._element=null;this._menu=null;if(this._popper!==null){this._popper.destroy();this._popper=null}};dD.update=function dG(){this._inNavbar=this._detectNavbar();if(this._popper!==null){this._popper.scheduleUpdate()}};dD._addEventListeners=function dB(){var dT=this;di(this._element).on(o.CLICK,function(dU){dU.preventDefault();dU.stopPropagation();dT.toggle()})};dD._getConfig=function dE(dT){dT=J({},this.constructor.Default,di(this._element).data(),dT);bV.typeCheckConfig(aw,dT,this.constructor.DefaultType);return dT};dD._getMenuElement=function dH(){if(!this._menu){var dT=dP._getParentFromElement(this._element);if(dT){this._menu=dT.querySelector(B.MENU)}}return this._menu};dD._getPlacement=function dC(){var dT=di(this._element.parentNode);var dU=aK.BOTTOM;if(dT.hasClass(ba.DROPUP)){dU=aK.TOP;if(di(this._menu).hasClass(ba.MENURIGHT)){dU=aK.TOPEND}}else{if(dT.hasClass(ba.DROPRIGHT)){dU=aK.RIGHT}else{if(dT.hasClass(ba.DROPLEFT)){dU=aK.LEFT}else{if(di(this._menu).hasClass(ba.MENURIGHT)){dU=aK.BOTTOMEND}}}}return dU};dD._detectNavbar=function dN(){return di(this._element).closest(".navbar").length>0};dD._getOffset=function dK(){var dT=this;var dU={};if(typeof this._config.offset==="function"){dU.fn=function(dV){dV.offsets=J({},dV.offsets,dT._config.offset(dV.offsets,dT._element)||{});return dV}}else{dU.offset=this._config.offset}return dU};dD._getPopperConfig=function dL(){var dT={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};if(this._config.display==="static"){dT.modifiers.applyStyle={enabled:false}}return dT};dP._jQueryInterface=function dJ(dT){return this.each(function(){var dV=di(this).data(cg);var dU=typeof dT==="object"?dT:null;if(!dV){dV=new dP(this,dU);di(this).data(cg,dV)}if(typeof dT==="string"){if(typeof dV[dT]==="undefined"){throw new TypeError('No method named "'+dT+'"')}dV[dT]()}})};dP._clearMenus=function dF(dT){if(dT&&(dT.which===cP||dT.type==="keyup"&&dT.which!==b0)){return}var dY=[].slice.call(document.querySelectorAll(B.DATA_TOGGLE));for(var dX=0,dZ=dY.length;dX<dZ;dX++){var d1=dP._getParentFromElement(dY[dX]);var dU=di(dY[dX]).data(cg);var d0={relatedTarget:dY[dX]};if(dT&&dT.type==="click"){d0.clickEvent=dT}if(!dU){continue}var dW=dU._menu;if(!di(d1).hasClass(ba.SHOW)){continue}if(dT&&(dT.type==="click"&&/input|textarea/i.test(dT.target.tagName)||dT.type==="keyup"&&dT.which===b0)&&di.contains(d1,dT.target)){continue}var dV=di.Event(o.HIDE,d0);di(d1).trigger(dV);if(dV.isDefaultPrevented()){continue}if("ontouchstart" in document.documentElement){di(document.body).children().off("mouseover",null,di.noop)}dY[dX].setAttribute("aria-expanded","false");di(dW).removeClass(ba.SHOW);di(d1).removeClass(ba.SHOW).trigger(di.Event(o.HIDDEN,d0))}};dP._getParentFromElement=function i(dU){var dV;var dT=bV.getSelectorFromElement(dU);if(dT){dV=document.querySelector(dT)}return dV||dU.parentNode};dP._dataApiKeydownHandler=function dM(dY){if(/input|textarea/i.test(dY.target.tagName)?dY.which===a7||dY.which!==ag&&(dY.which!==dt&&dY.which!==aH||di(dY.target).closest(B.MENU).length):!bq.test(dY.which)){return}dY.preventDefault();dY.stopPropagation();if(this.disabled||di(this).hasClass(ba.DISABLED)){return}var dX=dP._getParentFromElement(this);var dW=di(dX).hasClass(ba.SHOW);if(!dW||dW&&(dY.which===ag||dY.which===a7)){if(dY.which===ag){var dT=dX.querySelector(B.DATA_TOGGLE);di(dT).trigger("focus")}di(this).trigger("click");return}var dU=[].slice.call(dX.querySelectorAll(B.VISIBLE_ITEMS));if(dU.length===0){return}var dV=dU.indexOf(dY.target);if(dY.which===aH&&dV>0){dV--}if(dY.which===dt&&dV<dU.length-1){dV++}if(dV<0){dV=0}dU[dV].focus()};cq(dP,null,[{key:"VERSION",get:function dQ(){return L}},{key:"Default",get:function dQ(){return bM}},{key:"DefaultType",get:function dQ(){return cf}}]);return dP}();di(document).on(o.KEYDOWN_DATA_API,B.DATA_TOGGLE,ad._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API,B.MENU,ad._dataApiKeydownHandler).on(o.CLICK_DATA_API+" "+o.KEYUP_DATA_API,ad._clearMenus).on(o.CLICK_DATA_API,B.DATA_TOGGLE,function(i){i.preventDefault();i.stopPropagation();ad._jQueryInterface.call(di(this),"toggle")}).on(o.CLICK_DATA_API,B.FORM_CHILD,function(i){i.stopPropagation()});di.fn[aw]=ad._jQueryInterface;di.fn[aw].Constructor=ad;di.fn[aw].noConflict=function(){di.fn[aw]=bj;return ad._jQueryInterface};var av="modal";var K="4.3.1";var ce="bs.modal";var c1="."+ce;var aU=".data-api";var bi=di.fn[av];var aF=27;var bL={backdrop:true,keyboard:true,focus:true,show:true};var cd={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"};var n={HIDE:"hide"+c1,HIDDEN:"hidden"+c1,SHOW:"show"+c1,SHOWN:"shown"+c1,FOCUSIN:"focusin"+c1,RESIZE:"resize"+c1,CLICK_DISMISS:"click.dismiss"+c1,KEYDOWN_DISMISS:"keydown.dismiss"+c1,MOUSEUP_DISMISS:"mouseup.dismiss"+c1,MOUSEDOWN_DISMISS:"mousedown.dismiss"+c1,CLICK_DATA_API:"click"+c1+aU};var a8={SCROLLABLE:"modal-dialog-scrollable",SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"};var z={DIALOG:".modal-dialog",MODAL_BODY:".modal-body",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top"};var aI=function(){function i(dY,dX){this._config=this._getConfig(dX);this._element=dY;this._dialog=dY.querySelector(z.DIALOG);this._backdrop=null;this._isShown=false;this._isBodyOverflowing=false;this._ignoreBackdropClick=false;this._isTransitioning=false;this._scrollbarWidth=0}var dD=i.prototype;dD.toggle=function dR(dX){return this._isShown?this.hide():this.show(dX)};dD.show=function dU(dX){var dZ=this;if(this._isShown||this._isTransitioning){return}if(di(this._element).hasClass(a8.FADE)){this._isTransitioning=true}var dY=di.Event(n.SHOW,{relatedTarget:dX});di(this._element).trigger(dY);if(this._isShown||dY.isDefaultPrevented()){return}this._isShown=true;this._checkScrollbar();this._setScrollbar();this._adjustDialog();this._setEscapeEvent();this._setResizeEvent();di(this._element).on(n.CLICK_DISMISS,z.DATA_DISMISS,function(d0){return dZ.hide(d0)});di(this._dialog).on(n.MOUSEDOWN_DISMISS,function(){di(dZ._element).one(n.MOUSEUP_DISMISS,function(d0){if(di(d0.target).is(dZ._element)){dZ._ignoreBackdropClick=true}})});this._showBackdrop(function(){return dZ._showElement(dX)})};dD.hide=function dK(dZ){var dY=this;if(dZ){dZ.preventDefault()}if(!this._isShown||this._isTransitioning){return}var d0=di.Event(n.HIDE);di(this._element).trigger(d0);if(!this._isShown||d0.isDefaultPrevented()){return}this._isShown=false;var d1=di(this._element).hasClass(a8.FADE);if(d1){this._isTransitioning=true}this._setEscapeEvent();this._setResizeEvent();di(document).off(n.FOCUSIN);di(this._element).removeClass(a8.SHOW);di(this._element).off(n.CLICK_DISMISS);di(this._dialog).off(n.MOUSEDOWN_DISMISS);if(d1){var dX=bV.getTransitionDurationFromElement(this._element);di(this._element).one(bV.TRANSITION_END,function(d2){return dY._hideModal(d2)}).emulateTransitionEnd(dX)}else{this._hideModal()}};dD.dispose=function dW(){[window,this._element,this._dialog].forEach(function(dX){return di(dX).off(c1)});di(document).off(n.FOCUSIN);di.removeData(this._element,ce);this._config=null;this._element=null;this._dialog=null;this._backdrop=null;this._isShown=null;this._isBodyOverflowing=null;this._ignoreBackdropClick=null;this._isTransitioning=null;this._scrollbarWidth=null};dD.handleUpdate=function dI(){this._adjustDialog()};dD._getConfig=function dE(dX){dX=J({},bL,dX);bV.typeCheckConfig(av,dX,cd);return dX};dD._showElement=function dV(dZ){var d1=this;var d2=di(this._element).hasClass(a8.FADE);if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE){document.body.appendChild(this._element)}this._element.style.display="block";this._element.removeAttribute("aria-hidden");this._element.setAttribute("aria-modal",true);if(di(this._dialog).hasClass(a8.SCROLLABLE)){this._dialog.querySelector(z.MODAL_BODY).scrollTop=0}else{this._element.scrollTop=0}if(d2){bV.reflow(this._element)}di(this._element).addClass(a8.SHOW);if(this._config.focus){this._enforceFocus()}var dY=di.Event(n.SHOWN,{relatedTarget:dZ});var d0=function d0(){if(d1._config.focus){d1._element.focus()}d1._isTransitioning=false;di(d1._element).trigger(dY)};if(d2){var dX=bV.getTransitionDurationFromElement(this._dialog);di(this._dialog).one(bV.TRANSITION_END,d0).emulateTransitionEnd(dX)}else{d0()}};dD._enforceFocus=function dC(){var dX=this;di(document).off(n.FOCUSIN).on(n.FOCUSIN,function(dY){if(document!==dY.target&&dX._element!==dY.target&&di(dX._element).has(dY.target).length===0){dX._element.focus()}})};dD._setEscapeEvent=function dH(){var dX=this;if(this._isShown&&this._config.keyboard){di(this._element).on(n.KEYDOWN_DISMISS,function(dY){if(dY.which===aF){dY.preventDefault();dX.hide()}})}else{if(!this._isShown){di(this._element).off(n.KEYDOWN_DISMISS)}}};dD._setResizeEvent=function dN(){var dX=this;if(this._isShown){di(window).on(n.RESIZE,function(dY){return dX.handleUpdate(dY)})}else{di(window).off(n.RESIZE)}};dD._hideModal=function dS(){var dX=this;this._element.style.display="none";this._element.setAttribute("aria-hidden",true);this._element.removeAttribute("aria-modal");this._isTransitioning=false;this._showBackdrop(function(){di(document.body).removeClass(a8.OPEN);dX._resetAdjustments();dX._resetScrollbar();di(dX._element).trigger(n.HIDDEN)})};dD._removeBackdrop=function dF(){if(this._backdrop){di(this._backdrop).remove();this._backdrop=null}};dD._showBackdrop=function dG(d2){var dY=this;var d0=di(this._element).hasClass(a8.FADE)?a8.FADE:"";if(this._isShown&&this._config.backdrop){this._backdrop=document.createElement("div");this._backdrop.className=a8.BACKDROP;if(d0){this._backdrop.classList.add(d0)}di(this._backdrop).appendTo(document.body);di(this._element).on(n.CLICK_DISMISS,function(d3){if(dY._ignoreBackdropClick){dY._ignoreBackdropClick=false;return}if(d3.target!==d3.currentTarget){return}if(dY._config.backdrop==="static"){dY._element.focus()}else{dY.hide()}});if(d0){bV.reflow(this._backdrop)}di(this._backdrop).addClass(a8.SHOW);if(!d2){return}if(!d0){d2();return}var dX=bV.getTransitionDurationFromElement(this._backdrop);di(this._backdrop).one(bV.TRANSITION_END,d2).emulateTransitionEnd(dX)}else{if(!this._isShown&&this._backdrop){di(this._backdrop).removeClass(a8.SHOW);var d1=function d1(){dY._removeBackdrop();if(d2){d2()}};if(di(this._element).hasClass(a8.FADE)){var dZ=bV.getTransitionDurationFromElement(this._backdrop);di(this._backdrop).one(bV.TRANSITION_END,d1).emulateTransitionEnd(dZ)}else{d1()}}else{if(d2){d2()}}}};dD._adjustDialog=function dP(){var dX=this._element.scrollHeight>document.documentElement.clientHeight;if(!this._isBodyOverflowing&&dX){this._element.style.paddingLeft=this._scrollbarWidth+"px"}if(this._isBodyOverflowing&&!dX){this._element.style.paddingRight=this._scrollbarWidth+"px"}};dD._resetAdjustments=function dM(){this._element.style.paddingLeft="";this._element.style.paddingRight=""};dD._checkScrollbar=function dO(){var dX=document.body.getBoundingClientRect();this._isBodyOverflowing=dX.left+dX.right<window.innerWidth;this._scrollbarWidth=this._getScrollbarWidth()};dD._setScrollbar=function dQ(){var d1=this;if(this._isBodyOverflowing){var dZ=[].slice.call(document.querySelectorAll(z.FIXED_CONTENT));var dY=[].slice.call(document.querySelectorAll(z.STICKY_CONTENT));di(dZ).each(function(d3,d4){var d2=d4.style.paddingRight;var d5=di(d4).css("padding-right");di(d4).data("padding-right",d2).css("padding-right",parseFloat(d5)+d1._scrollbarWidth+"px")});di(dY).each(function(d3,d4){var d5=d4.style.marginRight;var d2=di(d4).css("margin-right");di(d4).data("margin-right",d5).css("margin-right",parseFloat(d2)-d1._scrollbarWidth+"px")});var dX=document.body.style.paddingRight;var d0=di(document.body).css("padding-right");di(document.body).data("padding-right",dX).css("padding-right",parseFloat(d0)+this._scrollbarWidth+"px")}di(document.body).addClass(a8.OPEN)};dD._resetScrollbar=function dL(){var dX=[].slice.call(document.querySelectorAll(z.FIXED_CONTENT));di(dX).each(function(d0,d1){var d2=di(d1).data("padding-right");di(d1).removeData("padding-right");d1.style.paddingRight=d2?d2:""});var dY=[].slice.call(document.querySelectorAll(""+z.STICKY_CONTENT));di(dY).each(function(d0,d1){var d2=di(d1).data("margin-right");if(typeof d2!=="undefined"){di(d1).css("margin-right",d2).removeData("margin-right")}});var dZ=di(document.body).data("padding-right");di(document.body).removeData("padding-right");document.body.style.paddingRight=dZ?dZ:""};dD._getScrollbarWidth=function dB(){var dY=document.createElement("div");dY.className=a8.SCROLLBAR_MEASURER;document.body.appendChild(dY);var dX=dY.getBoundingClientRect().width-dY.clientWidth;document.body.removeChild(dY);return dX};i._jQueryInterface=function dJ(dY,dX){return this.each(function(){var d0=di(this).data(ce);var dZ=J({},bL,di(this).data(),typeof dY==="object"&&dY?dY:{});if(!d0){d0=new i(this,dZ);di(this).data(ce,d0)}if(typeof dY==="string"){if(typeof d0[dY]==="undefined"){throw new TypeError('No method named "'+dY+'"')}d0[dY](dX)}else{if(dZ.show){d0.show(dX)}}})};cq(i,null,[{key:"VERSION",get:function dT(){return K}},{key:"Default",get:function dT(){return bL}}]);return i}();di(document).on(n.CLICK_DATA_API,z.DATA_TOGGLE,function(dD){var dF=this;var dE;var dB=bV.getSelectorFromElement(this);if(dB){dE=document.querySelector(dB)}var dC=di(dE).data(ce)?"toggle":J({},di(dE).data(),di(this).data());if(this.tagName==="A"||this.tagName==="AREA"){dD.preventDefault()}var i=di(dE).one(n.SHOW,function(dG){if(dG.isDefaultPrevented()){return}i.one(n.HIDDEN,function(){if(di(dF).is(":visible")){dF.focus()}})});aI._jQueryInterface.call(di(dE),dC,this)});di.fn[av]=aI._jQueryInterface;di.fn[av].Constructor=aI;di.fn[av].noConflict=function(){di.fn[av]=bi;return aI._jQueryInterface};var dj=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"];var cI=/^aria-[\w-]*$/i;var cH={"*":["class","dir","id","lang","role",cI],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};var ct=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;var ac=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function aE(dB,dD){var dG=dB.nodeName.toLowerCase();if(dD.indexOf(dG)!==-1){if(dj.indexOf(dG)!==-1){return Boolean(dB.nodeValue.match(ct)||dB.nodeValue.match(ac))}return true}var dE=dD.filter(function(i){return i instanceof RegExp});for(var dF=0,dC=dE.length;dF<dC;dF++){if(dG.match(dE[dF])){return true}}return false}function ai(dK,dF,dL){if(dK.length===0){return dK}if(dL&&typeof dL==="function"){return dL(dK)}var dI=new window.DOMParser();var dJ=dI.parseFromString(dK,"text/html");var dG=Object.keys(dF);var dB=[].slice.call(dJ.body.querySelectorAll("*"));var dC=function dC(dN,dM){var dO=dB[dN];var dR=dO.nodeName.toLowerCase();if(dG.indexOf(dO.nodeName.toLowerCase())===-1){dO.parentNode.removeChild(dO);return"continue"}var dP=[].slice.call(dO.attributes);var dQ=[].concat(dF["*"]||[],dF[dR]||[]);dP.forEach(function(i){if(!aE(i,dQ)){dO.removeAttribute(i.nodeName)}})};for(var dD=0,dE=dB.length;dD<dE;dD++){var dH=dC(dD,dE);if(dH==="continue"){continue}}return dJ.body.innerHTML}var au="tooltip";var I="4.3.1";var cc="bs.tooltip";var c0="."+cc;var bh=di.fn[au];var bw="bs-tooltip";var dl=new RegExp("(^|\\s)"+bw+"\\S+","g");var cT=["sanitize","whiteList","sanitizeFn"];var cb={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"};var l={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"};var bK={animation:true,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,selector:false,placement:"top",offset:0,container:false,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:true,sanitizeFn:null,whiteList:cH};var bQ={SHOW:"show",OUT:"out"};var m={HIDE:"hide"+c0,HIDDEN:"hidden"+c0,SHOW:"show"+c0,SHOWN:"shown"+c0,INSERTED:"inserted"+c0,CLICK:"click"+c0,FOCUSIN:"focusin"+c0,FOCUSOUT:"focusout"+c0,MOUSEENTER:"mouseenter"+c0,MOUSELEAVE:"mouseleave"+c0};var a6={FADE:"fade",SHOW:"show"};var y={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"};var aB={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"};var dr=function(){function dY(d6,d5){if(typeof p==="undefined"){throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)")}this._isEnabled=true;this._timeout=0;this._hoverState="";this._activeTrigger={};this._popper=null;this.element=d6;this.config=this._getConfig(d5);this.tip=null;this._setListeners()}var dE=dY.prototype;dE.enable=function dR(){this._isEnabled=true};dE.disable=function dC(){this._isEnabled=false};dE.toggleEnabled=function dM(){this._isEnabled=!this._isEnabled};dE.toggle=function dV(d6){if(!this._isEnabled){return}if(d6){var d7=this.constructor.DATA_KEY;var d5=di(d6.currentTarget).data(d7);if(!d5){d5=new this.constructor(d6.currentTarget,this._getDelegateConfig());di(d6.currentTarget).data(d7,d5)}d5._activeTrigger.click=!d5._activeTrigger.click;if(d5._isWithActiveTrigger()){d5._enter(null,d5)}else{d5._leave(null,d5)}}else{if(di(this.getTipElement()).hasClass(a6.SHOW)){this._leave(null,this);return}this._enter(null,this)}};dE.dispose=function d4(){clearTimeout(this._timeout);di.removeData(this.element,this.constructor.DATA_KEY);di(this.element).off(this.constructor.EVENT_KEY);di(this.element).closest(".modal").off("hide.bs.modal");if(this.tip){di(this.tip).remove()}this._isEnabled=null;this._timeout=null;this._hoverState=null;this._activeTrigger=null;if(this._popper!==null){this._popper.destroy()}this._popper=null;this.element=null;this.config=null;this.tip=null};dE.show=function d1(){var ee=this;if(di(this.element).css("display")==="none"){throw new Error("Please use show on visible elements")}var ef=di.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){di(this.element).trigger(ef);var eh=bV.findShadowRoot(this.element);var d9=di.contains(eh!==null?eh:this.element.ownerDocument.documentElement,this.element);if(ef.isDefaultPrevented()||!d9){return}var eg=this.getTipElement();var d7=bV.getUID(this.constructor.NAME);eg.setAttribute("id",d7);this.element.setAttribute("aria-describedby",d7);this.setContent();if(this.config.animation){di(eg).addClass(a6.FADE)}var ec=typeof this.config.placement==="function"?this.config.placement.call(this,eg,this.element):this.config.placement;var ed=this._getAttachment(ec);this.addAttachmentClass(ed);var d5=this._getContainer();di(eg).data(this.constructor.DATA_KEY,this);if(!di.contains(this.element.ownerDocument.documentElement,this.tip)){di(eg).appendTo(d5)}di(this.element).trigger(this.constructor.Event.INSERTED);this._popper=new p(this.element,eg,{placement:ed,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:y.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function ea(ei){if(ei.originalPlacement!==ei.placement){ee._handlePopperPlacementChange(ei)}},onUpdate:function d8(ei){return ee._handlePopperPlacementChange(ei)}});di(eg).addClass(a6.SHOW);if("ontouchstart" in document.documentElement){di(document.body).children().on("mouseover",null,di.noop)}var d6=function d6(){if(ee.config.animation){ee._fixTransition()}var ei=ee._hoverState;ee._hoverState=null;di(ee.element).trigger(ee.constructor.Event.SHOWN);if(ei===bQ.OUT){ee._leave(null,ee)}};if(di(this.tip).hasClass(a6.FADE)){var eb=bV.getTransitionDurationFromElement(this.tip);di(this.tip).one(bV.TRANSITION_END,d6).emulateTransitionEnd(eb)}else{d6()}}};dE.hide=function dQ(ea){var d7=this;var d8=this.getTipElement();var d9=di.Event(this.constructor.Event.HIDE);var d6=function d6(){if(d7._hoverState!==bQ.SHOW&&d8.parentNode){d8.parentNode.removeChild(d8)}d7._cleanTipClass();d7.element.removeAttribute("aria-describedby");di(d7.element).trigger(d7.constructor.Event.HIDDEN);if(d7._popper!==null){d7._popper.destroy()}if(ea){ea()}};di(this.element).trigger(d9);if(d9.isDefaultPrevented()){return}di(d8).removeClass(a6.SHOW);if("ontouchstart" in document.documentElement){di(document.body).children().off("mouseover",null,di.noop)}this._activeTrigger[aB.CLICK]=false;this._activeTrigger[aB.FOCUS]=false;this._activeTrigger[aB.HOVER]=false;if(di(this.tip).hasClass(a6.FADE)){var d5=bV.getTransitionDurationFromElement(d8);di(d8).one(bV.TRANSITION_END,d6).emulateTransitionEnd(d5)}else{d6()}this._hoverState=""};dE.update=function dJ(){if(this._popper!==null){this._popper.scheduleUpdate()}};dE.isWithContent=function dW(){return Boolean(this.getTitle())};dE.addAttachmentClass=function dL(d5){di(this.getTipElement()).addClass(bw+"-"+d5)};dE.getTipElement=function dZ(){this.tip=this.tip||di(this.config.template)[0];return this.tip};dE.setContent=function dH(){var d5=this.getTipElement();this.setElementContent(di(d5.querySelectorAll(y.TOOLTIP_INNER)),this.getTitle());di(d5).removeClass(a6.FADE+" "+a6.SHOW)};dE.setElementContent=function dU(d5,d6){if(typeof d6==="object"&&(d6.nodeType||d6.jquery)){if(this.config.html){if(!di(d6).parent().is(d5)){d5.empty().append(d6)}}else{d5.text(di(d6).text())}return}if(this.config.html){if(this.config.sanitize){d6=ai(d6,this.config.whiteList,this.config.sanitizeFn)}d5.html(d6)}else{d5.text(d6)}};dE.getTitle=function dN(){var d5=this.element.getAttribute("data-original-title");if(!d5){d5=typeof this.config.title==="function"?this.config.title.call(this.element):this.config.title}return d5};dE._getOffset=function dT(){var d5=this;var d6={};if(typeof this.config.offset==="function"){d6.fn=function(d7){d7.offsets=J({},d7.offsets,d5.config.offset(d7.offsets,d5.element)||{});return d7}}else{d6.offset=this.config.offset}return d6};dE._getContainer=function dB(){if(this.config.container===false){return document.body}if(bV.isElement(this.config.container)){return di(this.config.container)}return di(document).find(this.config.container)};dE._getAttachment=function d3(d5){return l[d5.toUpperCase()]};dE._setListeners=function dX(){var d5=this;var d6=this.config.trigger.split(" ");d6.forEach(function(d8){if(d8==="click"){di(d5.element).on(d5.constructor.Event.CLICK,d5.config.selector,function(ea){return d5.toggle(ea)})}else{if(d8!==aB.MANUAL){var d9=d8===aB.HOVER?d5.constructor.Event.MOUSEENTER:d5.constructor.Event.FOCUSIN;var d7=d8===aB.HOVER?d5.constructor.Event.MOUSELEAVE:d5.constructor.Event.FOCUSOUT;di(d5.element).on(d9,d5.config.selector,function(ea){return d5._enter(ea)}).on(d7,d5.config.selector,function(ea){return d5._leave(ea)})}}});di(this.element).closest(".modal").on("hide.bs.modal",function(){if(d5.element){d5.hide()}});if(this.config.selector){this.config=J({},this.config,{trigger:"manual",selector:""})}else{this._fixTitle()}};dE._fixTitle=function dI(){var d5=typeof this.element.getAttribute("data-original-title");if(this.element.getAttribute("title")||d5!=="string"){this.element.setAttribute("data-original-title",this.element.getAttribute("title")||"");this.element.setAttribute("title","")}};dE._enter=function dK(d6,d5){var d7=this.constructor.DATA_KEY;d5=d5||di(d6.currentTarget).data(d7);if(!d5){d5=new this.constructor(d6.currentTarget,this._getDelegateConfig());di(d6.currentTarget).data(d7,d5)}if(d6){d5._activeTrigger[d6.type==="focusin"?aB.FOCUS:aB.HOVER]=true}if(di(d5.getTipElement()).hasClass(a6.SHOW)||d5._hoverState===bQ.SHOW){d5._hoverState=bQ.SHOW;return}clearTimeout(d5._timeout);d5._hoverState=bQ.SHOW;if(!d5.config.delay||!d5.config.delay.show){d5.show();return}d5._timeout=setTimeout(function(){if(d5._hoverState===bQ.SHOW){d5.show()}},d5.config.delay.show)};dE._leave=function d2(d6,d5){var d7=this.constructor.DATA_KEY;d5=d5||di(d6.currentTarget).data(d7);if(!d5){d5=new this.constructor(d6.currentTarget,this._getDelegateConfig());di(d6.currentTarget).data(d7,d5)}if(d6){d5._activeTrigger[d6.type==="focusout"?aB.FOCUS:aB.HOVER]=false}if(d5._isWithActiveTrigger()){return}clearTimeout(d5._timeout);d5._hoverState=bQ.OUT;if(!d5.config.delay||!d5.config.delay.hide){d5.hide();return}d5._timeout=setTimeout(function(){if(d5._hoverState===bQ.OUT){d5.hide()}},d5.config.delay.hide)};dE._isWithActiveTrigger=function dD(){for(var d5 in this._activeTrigger){if(this._activeTrigger[d5]){return true}}return false};dE._getConfig=function dF(d5){var d6=di(this.element).data();Object.keys(d6).forEach(function(d7){if(cT.indexOf(d7)!==-1){delete d6[d7]}});d5=J({},this.constructor.Default,d6,typeof d5==="object"&&d5?d5:{});if(typeof d5.delay==="number"){d5.delay={show:d5.delay,hide:d5.delay}}if(typeof d5.title==="number"){d5.title=d5.title.toString()}if(typeof d5.content==="number"){d5.content=d5.content.toString()}bV.typeCheckConfig(au,d5,this.constructor.DefaultType);if(d5.sanitize){d5.template=ai(d5.template,d5.whiteList,d5.sanitizeFn)}return d5};dE._getDelegateConfig=function dP(){var d5={};if(this.config){for(var d6 in this.config){if(this.constructor.Default[d6]!==this.config[d6]){d5[d6]=this.config[d6]}}}return d5};dE._cleanTipClass=function dS(){var d6=di(this.getTipElement());var d5=d6.attr("class").match(dl);if(d5!==null&&d5.length){d6.removeClass(d5.join(""))}};dE._handlePopperPlacementChange=function dG(d6){var d5=d6.instance;this.tip=d5.popper;this._cleanTipClass();this.addAttachmentClass(this._getAttachment(d6.placement))};dE._fixTransition=function i(){var d6=this.getTipElement();var d5=this.config.animation;if(d6.getAttribute("x-placement")!==null){return}di(d6).removeClass(a6.FADE);this.config.animation=false;this.hide();this.show();this.config.animation=d5};dY._jQueryInterface=function dO(d5){return this.each(function(){var d7=di(this).data(cc);var d6=typeof d5==="object"&&d5;if(!d7&&/dispose|hide/.test(d5)){return}if(!d7){d7=new dY(this,d6);di(this).data(cc,d7)}if(typeof d5==="string"){if(typeof d7[d5]==="undefined"){throw new TypeError('No method named "'+d5+'"')}d7[d5]()}})};cq(dY,null,[{key:"VERSION",get:function d0(){return I}},{key:"Default",get:function d0(){return bK}},{key:"NAME",get:function d0(){return au}},{key:"DATA_KEY",get:function d0(){return cc}},{key:"Event",get:function d0(){return m}},{key:"EVENT_KEY",get:function d0(){return c0}},{key:"DefaultType",get:function d0(){return cb}}]);return dY}();di.fn[au]=dr._jQueryInterface;di.fn[au].Constructor=dr;di.fn[au].noConflict=function(){di.fn[au]=bh;return dr._jQueryInterface};var at="popover";var G="4.3.1";var ca="bs.popover";var cY="."+ca;var bf=di.fn[at];var bZ="bs-popover";var aT=new RegExp("(^|\\s)"+bZ+"\\S+","g");var bI=J({},dr.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'});var b8=J({},dr.DefaultType,{content:"(string|element|function)"});var a5={FADE:"fade",SHOW:"show"};var x={TITLE:".popover-header",CONTENT:".popover-body"};var k={HIDE:"hide"+cY,HIDDEN:"hidden"+cY,SHOW:"show"+cY,SHOWN:"shown"+cY,INSERTED:"inserted"+cY,CLICK:"click"+cY,FOCUSIN:"focusin"+cY,FOCUSOUT:"focusout"+cY,MOUSEENTER:"mouseenter"+cY,MOUSELEAVE:"mouseleave"+cY};var cz=function(dI){cQ(dE,dI);function dE(){return dI.apply(this,arguments)||this}var dJ=dE.prototype;dJ.isWithContent=function dG(){return this.getTitle()||this._getContent()};dJ.addAttachmentClass=function dK(dL){di(this.getTipElement()).addClass(bZ+"-"+dL)};dJ.getTipElement=function dF(){this.tip=this.tip||di(this.config.template)[0];return this.tip};dJ.setContent=function dC(){var dM=di(this.getTipElement());this.setElementContent(dM.find(x.TITLE),this.getTitle());var dL=this._getContent();if(typeof dL==="function"){dL=dL.call(this.element)}this.setElementContent(dM.find(x.CONTENT),dL);dM.removeClass(a5.FADE+" "+a5.SHOW)};dJ._getContent=function dH(){return this.element.getAttribute("data-content")||this.config.content};dJ._cleanTipClass=function dB(){var dM=di(this.getTipElement());var dL=dM.attr("class").match(aT);if(dL!==null&&dL.length>0){dM.removeClass(dL.join(""))}};dE._jQueryInterface=function dD(dL){return this.each(function(){var dN=di(this).data(ca);var dM=typeof dL==="object"?dL:null;if(!dN&&/dispose|hide/.test(dL)){return}if(!dN){dN=new dE(this,dM);di(this).data(ca,dN)}if(typeof dL==="string"){if(typeof dN[dL]==="undefined"){throw new TypeError('No method named "'+dL+'"')}dN[dL]()}})};cq(dE,null,[{key:"VERSION",get:function i(){return G}},{key:"Default",get:function i(){return bI}},{key:"NAME",get:function i(){return at}},{key:"DATA_KEY",get:function i(){return ca}},{key:"Event",get:function i(){return k}},{key:"EVENT_KEY",get:function i(){return cY}},{key:"DefaultType",get:function i(){return b8}}]);return dE}(dr);di.fn[at]=cz._jQueryInterface;di.fn[at].Constructor=cz;di.fn[at].noConflict=function(){di.fn[at]=bf;return cz._jQueryInterface};var ar="scrollspy";var E="4.3.1";var b7="bs.scrollspy";var cX="."+b7;var aS=".data-api";var bd=di.fn[ar];var bH={offset:10,method:"auto",target:""};var b5={offset:"number",method:"string",target:"(string|element)"};var j={ACTIVATE:"activate"+cX,SCROLL:"scroll"+cX,LOAD_DATA_API:"load"+cX+aS};var a4={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"};var v={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"};var dh={OFFSET:"offset",POSITION:"position"};var V=function(){function dF(dO,dN){var dP=this;this._element=dO;this._scrollElement=dO.tagName==="BODY"?window:dO;this._config=this._getConfig(dN);this._selector=this._config.target+" "+v.NAV_LINKS+","+(this._config.target+" "+v.LIST_ITEMS+",")+(this._config.target+" "+v.DROPDOWN_ITEMS);this._offsets=[];this._targets=[];this._activeTarget=null;this._scrollHeight=0;di(this._scrollElement).on(j.SCROLL,function(dQ){return dP._process(dQ)});this.refresh();this._process()}var dJ=dF.prototype;dJ.refresh=function dI(){var dR=this;var dP=this._scrollElement===this._scrollElement.window?dh.OFFSET:dh.POSITION;var dN=this._config.method==="auto"?dP:this._config.method;var dQ=dN===dh.POSITION?this._getScrollTop():0;this._offsets=[];this._targets=[];this._scrollHeight=this._getScrollHeight();var dO=[].slice.call(document.querySelectorAll(this._selector));dO.map(function(dS){var dV;var dT=bV.getSelectorFromElement(dS);if(dT){dV=document.querySelector(dT)}if(dV){var dU=dV.getBoundingClientRect();if(dU.width||dU.height){return[di(dV)[dN]().top+dQ,dT]}}return null}).filter(function(dS){return dS}).sort(function(dT,dS){return dT[0]-dS[0]}).forEach(function(dS){dR._offsets.push(dS[0]);dR._targets.push(dS[1])})};dJ.dispose=function dM(){di.removeData(this._element,b7);di(this._scrollElement).off(cX);this._element=null;this._scrollElement=null;this._config=null;this._selector=null;this._offsets=null;this._targets=null;this._activeTarget=null;this._scrollHeight=null};dJ._getConfig=function dK(dN){dN=J({},bH,typeof dN==="object"&&dN?dN:{});if(typeof dN.target!=="string"){var dO=di(dN.target).attr("id");if(!dO){dO=bV.getUID(ar);di(dN.target).attr("id",dO)}dN.target="#"+dO}bV.typeCheckConfig(ar,dN,b5);return dN};dJ._getScrollTop=function dL(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop};dJ._getScrollHeight=function dB(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)};dJ._getOffsetHeight=function dD(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height};dJ._process=function i(){var dT=this._getScrollTop()+this._config.offset;var dO=this._getScrollHeight();var dP=this._config.offset+dO-this._getOffsetHeight();if(this._scrollHeight!==dO){this.refresh()}if(dT>=dP){var dS=this._targets[this._targets.length-1];if(this._activeTarget!==dS){this._activate(dS)}return}if(this._activeTarget&&dT<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null;this._clear();return}var dQ=this._offsets.length;for(var dN=dQ;dN--;){var dR=this._activeTarget!==this._targets[dN]&&dT>=this._offsets[dN]&&(typeof this._offsets[dN+1]==="undefined"||dT<this._offsets[dN+1]);if(dR){this._activate(this._targets[dN])}}};dJ._activate=function dG(dP){this._activeTarget=dP;this._clear();var dO=this._selector.split(",").map(function(dQ){return dQ+'[data-target="'+dP+'"],'+dQ+'[href="'+dP+'"]'});var dN=di([].slice.call(document.querySelectorAll(dO.join(","))));if(dN.hasClass(a4.DROPDOWN_ITEM)){dN.closest(v.DROPDOWN).find(v.DROPDOWN_TOGGLE).addClass(a4.ACTIVE);dN.addClass(a4.ACTIVE)}else{dN.addClass(a4.ACTIVE);dN.parents(v.NAV_LIST_GROUP).prev(v.NAV_LINKS+", "+v.LIST_ITEMS).addClass(a4.ACTIVE);dN.parents(v.NAV_LIST_GROUP).prev(v.NAV_ITEMS).children(v.NAV_LINKS).addClass(a4.ACTIVE)}di(this._scrollElement).trigger(j.ACTIVATE,{relatedTarget:dP})};dJ._clear=function dH(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(dN){return dN.classList.contains(a4.ACTIVE)}).forEach(function(dN){return dN.classList.remove(a4.ACTIVE)})};dF._jQueryInterface=function dE(dN){return this.each(function(){var dP=di(this).data(b7);var dO=typeof dN==="object"&&dN;if(!dP){dP=new dF(this,dO);di(this).data(b7,dP)}if(typeof dN==="string"){if(typeof dP[dN]==="undefined"){throw new TypeError('No method named "'+dN+'"')}dP[dN]()}})};cq(dF,null,[{key:"VERSION",get:function dC(){return E}},{key:"Default",get:function dC(){return bH}}]);return dF}();di(window).on(j.LOAD_DATA_API,function(){var dD=[].slice.call(document.querySelectorAll(v.DATA_SPY));var dC=dD.length;for(var dB=dC;dB--;){var dE=di(dD[dB]);V._jQueryInterface.call(dE,dE.data())}});di.fn[ar]=V._jQueryInterface;di.fn[ar].Constructor=V;di.fn[ar].noConflict=function(){di.fn[ar]=bd;return V._jQueryInterface};var aq="tab";var C="4.3.1";var b4="bs.tab";var cW="."+b4;var aR=".data-api";var bb=di.fn[aq];var h={HIDE:"hide"+cW,HIDDEN:"hidden"+cW,SHOW:"show"+cW,SHOWN:"shown"+cW,CLICK_DATA_API:"click"+cW+aR};var a3={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"};var u={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"};var T=function(){function dC(dI){this._element=dI}var dB=dC.prototype;dB.show=function i(){var dN=this;if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&di(this._element).hasClass(a3.ACTIVE)||di(this._element).hasClass(a3.DISABLED)){return}var dO;var dM;var dQ=di(this._element).closest(u.NAV_LIST_GROUP)[0];var dL=bV.getSelectorFromElement(this._element);if(dQ){var dJ=dQ.nodeName==="UL"||dQ.nodeName==="OL"?u.ACTIVE_UL:u.ACTIVE;dM=di.makeArray(di(dQ).find(dJ));dM=dM[dM.length-1]}var dK=di.Event(h.HIDE,{relatedTarget:this._element});var dP=di.Event(h.SHOW,{relatedTarget:dM});if(dM){di(dM).trigger(dK)}di(this._element).trigger(dP);if(dP.isDefaultPrevented()||dK.isDefaultPrevented()){return}if(dL){dO=document.querySelector(dL)}this._activate(this._element,dQ);var dI=function dI(){var dS=di.Event(h.HIDDEN,{relatedTarget:dN._element});var dR=di.Event(h.SHOWN,{relatedTarget:dM});di(dM).trigger(dS);di(dN._element).trigger(dR)};if(dO){this._activate(dO,dO.parentNode,dI)}else{dI()}};dB.dispose=function dH(){di.removeData(this._element,b4);this._element=null};dB._activate=function dG(dN,dJ,dP){var dO=this;var dQ=dJ&&(dJ.nodeName==="UL"||dJ.nodeName==="OL")?di(dJ).find(u.ACTIVE_UL):di(dJ).children(u.ACTIVE);var dL=dQ[0];var dI=dP&&dL&&di(dL).hasClass(a3.FADE);var dK=function dK(){return dO._transitionComplete(dN,dL,dP)};if(dL&&dI){var dM=bV.getTransitionDurationFromElement(dL);di(dL).removeClass(a3.SHOW).one(bV.TRANSITION_END,dK).emulateTransitionEnd(dM)}else{dK()}};dB._transitionComplete=function dF(dI,dL,dN){if(dL){di(dL).removeClass(a3.ACTIVE);var dM=di(dL.parentNode).find(u.DROPDOWN_ACTIVE_CHILD)[0];if(dM){di(dM).removeClass(a3.ACTIVE)}if(dL.getAttribute("role")==="tab"){dL.setAttribute("aria-selected",false)}}di(dI).addClass(a3.ACTIVE);if(dI.getAttribute("role")==="tab"){dI.setAttribute("aria-selected",true)}bV.reflow(dI);if(dI.classList.contains(a3.FADE)){dI.classList.add(a3.SHOW)}if(dI.parentNode&&di(dI.parentNode).hasClass(a3.DROPDOWN_MENU)){var dK=di(dI).closest(u.DROPDOWN)[0];if(dK){var dJ=[].slice.call(dK.querySelectorAll(u.DROPDOWN_TOGGLE));di(dJ).addClass(a3.ACTIVE)}dI.setAttribute("aria-expanded",true)}if(dN){dN()}};dC._jQueryInterface=function dE(dI){return this.each(function(){var dK=di(this);var dJ=dK.data(b4);if(!dJ){dJ=new dC(this);dK.data(b4,dJ)}if(typeof dI==="string"){if(typeof dJ[dI]==="undefined"){throw new TypeError('No method named "'+dI+'"')}dJ[dI]()}})};cq(dC,null,[{key:"VERSION",get:function dD(){return C}}]);return dC}();di(document).on(h.CLICK_DATA_API,u.DATA_TOGGLE,function(i){i.preventDefault();T._jQueryInterface.call(di(this),"show")});di.fn[aq]=T._jQueryInterface;di.fn[aq].Constructor=T;di.fn[aq].noConflict=function(){di.fn[aq]=bb;return T._jQueryInterface};var W="toast";var dz="4.3.1";var bO="bs.toast";var cA="."+bO;var aJ=di.fn[W];var ds={CLICK_DISMISS:"click.dismiss"+cA,HIDE:"hide"+cA,HIDDEN:"hidden"+cA,SHOW:"show"+cA,SHOWN:"shown"+cA};var aG={FADE:"fade",HIDE:"hide",SHOW:"show",SHOWING:"showing"};var b2={animation:"boolean",autohide:"boolean",delay:"number"};var bG={animation:true,autohide:true,delay:500};var dx={DATA_DISMISS:'[data-dismiss="toast"]'};var aV=function(){function dG(dL,dK){this._element=dL;this._config=this._getConfig(dK);this._timeout=null;this._setListeners()}var dE=dG.prototype;dE.show=function dH(){var dM=this;di(this._element).trigger(ds.SHOW);if(this._config.animation){this._element.classList.add(aG.FADE)}var dL=function dL(){dM._element.classList.remove(aG.SHOWING);dM._element.classList.add(aG.SHOW);di(dM._element).trigger(ds.SHOWN);if(dM._config.autohide){dM.hide()}};this._element.classList.remove(aG.HIDE);this._element.classList.add(aG.SHOWING);if(this._config.animation){var dK=bV.getTransitionDurationFromElement(this._element);di(this._element).one(bV.TRANSITION_END,dL).emulateTransitionEnd(dK)}else{dL()}};dE.hide=function dD(dK){var dL=this;if(!this._element.classList.contains(aG.SHOW)){return}di(this._element).trigger(ds.HIDE);if(dK){this._close()}else{this._timeout=setTimeout(function(){dL._close()},this._config.delay)}};dE.dispose=function dI(){clearTimeout(this._timeout);this._timeout=null;if(this._element.classList.contains(aG.SHOW)){this._element.classList.remove(aG.SHOW)}di(this._element).off(ds.CLICK_DISMISS);di.removeData(this._element,bO);this._element=null;this._config=null};dE._getConfig=function dF(dK){dK=J({},bG,di(this._element).data(),typeof dK==="object"&&dK?dK:{});bV.typeCheckConfig(W,dK,this.constructor.DefaultType);return dK};dE._setListeners=function dJ(){var dK=this;di(this._element).on(ds.CLICK_DISMISS,dx.DATA_DISMISS,function(){return dK.hide(true)})};dE._close=function i(){var dM=this;var dL=function dL(){dM._element.classList.add(aG.HIDE);di(dM._element).trigger(ds.HIDDEN)};this._element.classList.remove(aG.SHOW);if(this._config.animation){var dK=bV.getTransitionDurationFromElement(this._element);di(this._element).one(bV.TRANSITION_END,dL).emulateTransitionEnd(dK)}else{dL()}};dG._jQueryInterface=function dC(dK){return this.each(function(){var dL=di(this);var dN=dL.data(bO);var dM=typeof dK==="object"&&dK;if(!dN){dN=new dG(this,dM);dL.data(bO,dN)}if(typeof dK==="string"){if(typeof dN[dK]==="undefined"){throw new TypeError('No method named "'+dK+'"')}dN[dK](this)}})};cq(dG,null,[{key:"VERSION",get:function dB(){return dz}},{key:"DefaultType",get:function dB(){return b2}},{key:"Default",get:function dB(){return bG}}]);return dG}();di.fn[W]=aV._jQueryInterface;di.fn[W].Constructor=aV;di.fn[W].noConflict=function(){di.fn[W]=aJ;return aV._jQueryInterface};(function(){if(typeof di==="undefined"){throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")}var i=di.fn.jquery.split(" ")[0].split(".");var dC=1;var dB=2;var dE=9;var dF=1;var dD=4;if(i[0]<dB&&i[1]<dE||i[0]===dC&&i[1]===dE&&i[2]<dF||i[0]>=dD){throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}})();aY.Util=bV;aY.Alert=S;aY.Button=db;aY.Carousel=aQ;aY.Collapse=bz;aY.Dropdown=ad;aY.Modal=aI;aY.Popover=cz;aY.Scrollspy=V;aY.Tab=T;aY.Toast=aV;aY.Tooltip=dr;Object.defineProperty(aY,"__esModule",{value:true})}));var uniqueId=function(a){return(a||"ui-id")+"-"+Math.floor((Math.random()*1000)+1)};var removeMultiValAttributes=function(d,a,e){var c=(d.attr(a)||"").split(/\s+/),b=$.inArray(e,c);if(b!==-1){c.splice(b,1)}c=$.trim(c.join(" "));if(c){d.attr(a,c)}else{d.removeAttr(a)}};var $colltabs=$('[data-toggle="collapse"]');$colltabs.attr({role:"tab","aria-selected":"false","aria-expanded":"false"});$colltabs.each(function(c){var e=$(this),b=(e.attr("data-target"))?$(e.attr("data-target")):$(e.attr("href")),d=e.attr("data-parent"),a=d&&$(d),f=e.attr("id")||uniqueId("ui-collapse");$(a).find("div:not(.collapse,.panel-body), h4").attr("role","presentation");e.attr("id",f);if(a){a.attr({role:"tablist","aria-multiselectable":"true"});if(b.hasClass("in")){e.attr({"aria-controls":e.attr("href").substr(1),"aria-selected":"true","aria-expanded":"true",tabindex:"0"});b.attr({role:"tabpanel",tabindex:"0","aria-labelledby":f,"aria-hidden":"false"})}else{e.attr({"aria-controls":e.attr("href").substr(1),tabindex:"-1"});b.attr({role:"tabpanel",tabindex:"-1","aria-labelledby":f,"aria-hidden":"true"})}}});var collToggle=$.fn.collapse.Constructor.prototype.toggle;$.fn.collapse.Constructor.prototype.toggle=function(){var e=this.$parent&&this.$parent.find('[aria-expanded="true"]'),c;if(e){var b=e.attr("data-target")||(c=e.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),g=$(b),f=this.$element,d=this.$parent,a;if(this.$parent){a=this.$parent.find('[data-toggle=collapse][href="#'+this.$element.attr("id")+'"]')}collToggle.apply(this,arguments);if($.support.transition){this.$element.one($.support.transition.end,function(){e.attr({"aria-selected":"false","aria-expanded":"false",tabIndex:"-1"});g.attr({"aria-hidden":"true",tabIndex:"-1"});a.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:"0"});if(f.hasClass("in")){f.attr({"aria-hidden":"false",tabIndex:"0"})}else{a.attr({"aria-selected":"false","aria-expanded":"false"});f.attr({"aria-hidden":"true",tabIndex:"-1"})}})}}else{collToggle.apply(this,arguments)}};$.fn.collapse.Constructor.prototype.keydown=function(f){var d=$(this),g,a=d.closest("div[role=tablist] "),c,b=f.which||f.keyCode;d=$(this);if(!/(32|37|38|39|40)/.test(b)){return}if(b==32){d.click()}g=a.find("[role=tab]");c=g.index(g.filter(":focus"));if(b==38||b==37){c--}if(b==39||b==40){c++}if(c<0){c=g.length-1}if(c==g.length){c=0}g.eq(c).focus();f.preventDefault();f.stopPropagation()};$(document).on("keydown.collapse.data-api",'[data-toggle="collapse"]',$.fn.collapse.Constructor.prototype.keydown);var toggle="[data-toggle=dropdown]",$par,firstItem,focusDelay=200,menus=$(toggle).parent().find("ul").attr("role","menu"),lis=menus.find("li").attr("role","presentation");lis.find("a").attr({role:"menuitem",tabIndex:"-1"});$(toggle).attr({"aria-haspopup":"true","aria-expanded":"false"});$(toggle).parent().on("shown.bs.dropdown",function(b){$par=$(this);var a=$par.find(toggle);a.attr("aria-expanded","true");setTimeout(function(){firstItem=$(".dropdown-menu [role=menuitem]:visible",$par)[0];try{firstItem.focus()}catch(c){}},focusDelay)});$(toggle).parent().on("hidden.bs.dropdown",function(b){$par=$(this);var a=$par.find(toggle);a.attr("aria-expanded","false")});$.fn.dropdown.Constructor.prototype.keydown=function(c){var a,b;if(!/(32)/.test(c.keyCode)){return}a=$(this).parent();$(this).trigger("click");c.preventDefault()&&c.stopPropagation()};$(document).on("focusout.dropdown.data-api",".dropdown-menu",function(c){var b=$(this),a=this;setTimeout(function(){if(!$.contains(a,document.activeElement)){b.parent().removeClass("open");b.parent().find("[data-toggle=dropdown]").attr("aria-expanded","false")}},150)}).on("keydown.bs.dropdown.data-api",toggle+", [role=menu]",$.fn.dropdown.Constructor.prototype.keydown);var $tablist=$(".nav-tabs, .nav-pills"),$lis=$tablist.children("li"),$tabs=$tablist.find('[data-toggle="tab"], [data-toggle="pill"]');$tablist.attr("role","tablist");$lis.attr("role","presentation");$tabs.attr("role","tab");$tabs.each(function(c){var b=$($(this).attr("href")),d=$(this),a=d.attr("id")||uniqueId("ui-tab");d.attr("id",a);if(d.parent().hasClass("active")){d.attr({tabIndex:"0","aria-selected":"true","aria-controls":d.attr("href").substr(1)});b.attr({role:"tabpanel",tabIndex:"0","aria-hidden":"false","aria-labelledby":a})}else{d.attr({tabIndex:"-1","aria-selected":"false","aria-controls":d.attr("href").substr(1)});b.attr({role:"tabpanel",tabIndex:"-1","aria-hidden":"true","aria-labelledby":a})}});$.fn.tab.Constructor.prototype.keydown=function(g){var f=$(this),h,d=f.closest("ul[role=tablist] "),c,b=g.which||g.keyCode;f=$(this);if(!/(37|38|39|40)/.test(b)){return}h=d.find("[role=tab]:visible");c=h.index(h.filter(":focus"));if(b==38||b==37){c--}if(b==39||b==40){c++}if(c<0){c=h.length-1}if(c==h.length){c=0}var a=h.eq(c);if(a.attr("role")==="tab"){a.tab("show").focus()}g.preventDefault();g.stopPropagation()};$(document).on("keydown.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',$.fn.tab.Constructor.prototype.keydown);var tabactivate=$.fn.tab.Constructor.prototype.activate;$.fn.tab.Constructor.prototype.activate=function(c,b,d){var a=b.find("> .active");a.find("[data-toggle=tab], [data-toggle=pill]").attr({tabIndex:"-1","aria-selected":false});a.filter(".tab-pane").attr({"aria-hidden":true,tabIndex:"-1"});tabactivate.apply(this,arguments);c.addClass("active");c.find("[data-toggle=tab], [data-toggle=pill]").attr({tabIndex:"0","aria-selected":true});c.filter(".tab-pane").attr({"aria-hidden":false,tabIndex:"0"})};var fakewaffle=(function(c,b){var a=0;b.responsiveTabs=function(f){b.currentPosition="tabs";var e=c(".nav-tabs.responsive, .nav-pills.responsive");var g="";var h="";var d="";if(f===undefined){f=["xs","sm"]}c.each(f,function(){g+=" hidden-"+this;h+=" visible-"+this});c.each(e,function(){var i=c(this);var j=i.find('[data-toggle="tab"]');var k=c("<div></div>",{"class":"panel-group responsive"+h,id:"collapse-"+ +"waffle-"+(a++)});c.each(j,function(){var q=c(this);var m=q.attr("class")===undefined?"":q.attr("class");var l="accordion-toggle collapsed";var p=q.parent().attr("class")===undefined?"":q.parent().attr("class");var o="panel panel-default";var n=q.get(0).hash.replace("#","collapse-");if(m.length>0){l+=" "+m}if(p.length>0){p=p.replace(/\bactive\b/g,"");o+=" "+p;o=o.replace(/\s{2,}/g," ");o=o.replace(/^\s+|\s+$/g,"")}if(q.parent().hasClass("active")){d="#"+n}k.append(c("<div>").attr("class",o).html(c("<div>").attr("class","panel-heading").html(c("<h4>").attr("class","panel-title").html(c("<a>",{"class":l,"data-toggle":"collapse","data-parent":"#collapse-"+i.attr("id"),href:"#"+n,html:q.html()})))).append(c("<div>",{id:n,"class":"panel-collapse collapse"})))});i.next().after(k);i.addClass(g);c(".tab-content.responsive").addClass(g)});b.checkResize();b.bindTabToCollapse();if(d){c(d).collapse("show")}};b.checkResize=function(){if(c(".panel-group.responsive").is(":visible")===true&&b.currentPosition==="tabs"){b.tabToPanel();b.currentPosition="panel"}else{if(c(".panel-group.responsive").is(":visible")===false&&b.currentPosition==="panel"){b.panelToTab();b.currentPosition="tabs"}}};b.tabToPanel=function(){var d=c(".nav-tabs.responsive, .nav-pills.responsive");c.each(d,function(e,f){var g=c(f).next(".tab-content").find(".tab-pane");c.each(g,function(h,i){var j=c(i).attr("id").replace(/^/,"#collapse-");c(i).removeClass("tab-pane").addClass("panel-body").appendTo(c(j))})})};b.panelToTab=function(){var d=c(".panel-group.responsive");c.each(d,function(g,f){var i=c(f).attr("id").replace("collapse-","#");var e=c(i).next(".tab-content")[0];var h=c(f).find(".panel-body");h.removeClass("panel-body").addClass("tab-pane").appendTo(c(e))})};b.bindTabToCollapse=function(){var d=c(".nav-tabs.responsive, .nav-pills.responsive").find("li a");var e=c(".panel-group.responsive").find(".panel-collapse");d.on("shown.bs.tab",function(h){var g=c(h.currentTarget.hash.replace(/#/,"#collapse-"));g.collapse("show");if(h.relatedTarget){var f=c(h.relatedTarget.hash.replace(/#/,"#collapse-"));f.collapse("hide")}});e.on("shown.bs.collapse",function(g){var f=c(g.currentTarget).closest(".panel-group.responsive");c(f).find(".panel-body").removeClass("active");c(g.currentTarget).find(".panel-body").addClass("active")})};c(window).on("resize",function(){b.checkResize()});return b}(window.jQuery,fakewaffle||{}));(function(d,c,b,e){function a(g,f){this.settings=null;this.options=d.extend({},a.Defaults,f);this.$element=d(g);this._handlers={};this._plugins={};this._supress={};this._current=null;this._speed=null;this._coordinates=[];this._breakpoint=null;this._width=null;this._items=[];this._clones=[];this._mergers=[];this._widths=[];this._invalidated={};this._pipe=[];this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null};this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}};d.each(["onResize","onThrottledResize"],d.proxy(function(h,j){this._handlers[j]=d.proxy(this[j],this)},this));d.each(a.Plugins,d.proxy(function(h,i){this._plugins[h.charAt(0).toLowerCase()+h.slice(1)]=new i(this)},this));d.each(a.Workers,d.proxy(function(h,i){this._pipe.push({filter:i.filter,run:d.proxy(i.run,this)})},this));this.setup();this.initialize()}a.Defaults={items:3,loop:false,center:false,rewind:false,checkVisibility:true,mouseDrag:true,touchDrag:true,pullDrag:true,freeDrag:false,margin:0,stagePadding:0,merge:false,mergeFit:true,autoWidth:false,startPosition:0,rtl:false,smartSpeed:250,fluidSpeed:false,dragEndSpeed:false,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:c,fallbackEasing:"swing",slideTransition:"",info:false,nestedItemSelector:false,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"};a.Width={Default:"default",Inner:"inner",Outer:"outer"};a.Type={Event:"event",State:"state"};a.Plugins={};a.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(f){f.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(f){var i=this.settings.margin||"",h=!this.settings.autoWidth,j=this.settings.rtl,g={width:"auto","margin-left":j?i:"","margin-right":j?"":i};!h&&this.$stage.children().css(g);f.css=g}},{filter:["width","items","settings"],run:function(f){var i=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,k=null,h=this._items.length,g=!this.settings.autoWidth,j=[];f.items={merge:false,width:i};while(h--){k=this._mergers[h];k=this.settings.mergeFit&&Math.min(k,this.settings.items)||k;f.items.merge=k>1||f.items.merge;j[h]=!g?this._items[h].width():i*k}this._widths=j}},{filter:["items","settings"],run:function(){var m=[],i=this._items,k=this.settings,g=Math.max(k.items*2,4),j=Math.ceil(i.length/2)*2,l=k.loop&&i.length?k.rewind?g:Math.max(g,j):0,f="",h="";l/=2;while(l>0){m.push(this.normalize(m.length/2,true));f=f+i[m[m.length-1]][0].outerHTML;m.push(this.normalize(i.length-1-(m.length-1)/2,true));h=i[m[m.length-1]][0].outerHTML+h;l-=1}this._clones=m;d(f).addClass("cloned").appendTo(this.$stage);d(h).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){var j=this.settings.rtl?1:-1,f=this._clones.length+this._items.length,g=-1,h=0,i=0,k=[];while(++g<f){h=k[g-1]||0;i=this._widths[this.relative(g)]+this.settings.margin;k.push(h+i*j)}this._coordinates=k}},{filter:["width","items","settings"],run:function(){var g=this.settings.stagePadding,h=this._coordinates,f={width:Math.ceil(Math.abs(h[h.length-1]))+g*2,"padding-left":g||"","padding-right":g||""};this.$stage.css(f)}},{filter:["width","items","settings"],run:function(g){var i=this._coordinates.length,h=!this.settings.autoWidth,f=this.$stage.children();if(h&&g.items.merge){while(i--){g.css.width=this._widths[this.relative(i)];f.eq(i).css(g.css)}}else{if(h){g.css.width=g.items.width;f.css(g.css)}}}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(f){f.current=f.current?this.$stage.children().index(f.current):0;f.current=Math.max(this.minimum(),Math.min(this.maximum(),f.current));this.reset(f.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var l=this.settings.rtl?1:-1,m=this.settings.stagePadding*2,g=this.coordinates(this.current())+m,h=g+this.width()*l,p,o,k=[],j,f;for(j=0,f=this._coordinates.length;j<f;j++){p=this._coordinates[j-1]||0;o=Math.abs(this._coordinates[j])+m*l;if((this.op(p,"<=",g)&&(this.op(p,">",h)))||(this.op(o,"<",g)&&this.op(o,">",h))){k.push(j)}}this.$stage.children(".active").removeClass("active");this.$stage.children(":eq("+k.join("), :eq(")+")").addClass("active");this.$stage.children(".center").removeClass("center");if(this.settings.center){this.$stage.children().eq(this.current()).addClass("center")}}}];a.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass);if(this.$stage.length){return}this.$element.addClass(this.options.loadingClass);this.$stage=d("<"+this.settings.stageElement+">",{"class":this.settings.stageClass}).wrap(d("<div/>",{"class":this.settings.stageOuterClass}));this.$element.append(this.$stage.parent())};a.prototype.initializeItems=function(){var f=this.$element.find(".owl-item");if(f.length){this._items=f.get().map(function(g){return d(g)});this._mergers=this._items.map(function(){return 1});this.refresh();return}this.replace(this.$element.children().not(this.$stage.parent()));if(this.isVisible()){this.refresh()}else{this.invalidate("width")}this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)};a.prototype.initialize=function(){this.enter("initializing");this.trigger("initialize");this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl);if(this.settings.autoWidth&&!this.is("pre-loading")){var h,g,f;h=this.$element.find("img");g=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:e;f=this.$element.children(g).width();if(h.length&&f<=0){this.preloadAutoWidthImages(h)}}this.initializeStage();this.initializeItems();this.registerEventHandlers();this.leave("initializing");this.trigger("initialized")};a.prototype.isVisible=function(){return this.settings.checkVisibility?this.$element.is(":visible"):true};a.prototype.setup=function(){var f=this.viewport(),h=this.options.responsive,g=-1,i=null;if(!h){i=d.extend({},this.options)}else{d.each(h,function(j){if(j<=f&&j>g){g=Number(j)}});i=d.extend({},this.options,h[g]);if(typeof i.stagePadding==="function"){i.stagePadding=i.stagePadding()}delete i.responsive;if(i.responsiveClass){this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+g))}}this.trigger("change",{property:{name:"settings",value:i}});this._breakpoint=g;this.settings=i;this.invalidate("settings");this.trigger("changed",{property:{name:"settings",value:this.settings}})};a.prototype.optionsLogic=function(){if(this.settings.autoWidth){this.settings.stagePadding=false;this.settings.merge=false}};a.prototype.prepare=function(g){var f=this.trigger("prepare",{content:g});if(!f.data){f.data=d("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(g)}this.trigger("prepared",{content:f.data});return f.data};a.prototype.update=function(){var g=0,j=this._pipe.length,h=d.proxy(function(i){return this[i]},this._invalidated),f={};while(g<j){if(this._invalidated.all||d.grep(this._pipe[g].filter,h).length>0){this._pipe[g].run(f)}g++}this._invalidated={};!this.is("valid")&&this.enter("valid")};a.prototype.width=function(f){f=f||a.Width.Default;switch(f){case a.Width.Inner:case a.Width.Outer:return this._width;default:return this._width-this.settings.stagePadding*2+this.settings.margin}};a.prototype.refresh=function(){this.enter("refreshing");this.trigger("refresh");this.setup();this.optionsLogic();this.$element.addClass(this.options.refreshClass);this.update();this.$element.removeClass(this.options.refreshClass);this.leave("refreshing");this.trigger("refreshed")};a.prototype.onThrottledResize=function(){c.clearTimeout(this.resizeTimer);this.resizeTimer=c.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)};a.prototype.onResize=function(){if(!this._items.length){return false}if(this._width===this.$element.width()){return false}if(!this.isVisible()){return false}this.enter("resizing");if(this.trigger("resize").isDefaultPrevented()){this.leave("resizing");return false}this.invalidate("width");this.refresh();this.leave("resizing");this.trigger("resized")};a.prototype.registerEventHandlers=function(){if(d.support.transition){this.$stage.on(d.support.transition.end+".owl.core",d.proxy(this.onTransitionEnd,this))}if(this.settings.responsive!==false){this.on(c,"resize",this._handlers.onThrottledResize)}if(this.settings.mouseDrag){this.$element.addClass(this.options.dragClass);this.$stage.on("mousedown.owl.core",d.proxy(this.onDragStart,this));this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return false})}if(this.settings.touchDrag){this.$stage.on("touchstart.owl.core",d.proxy(this.onDragStart,this));this.$stage.on("touchcancel.owl.core",d.proxy(this.onDragEnd,this))}};a.prototype.onDragStart=function(g){var f=null;if(g.which===3){return}if(d.support.transform){f=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(",");f={x:f[f.length===16?12:4],y:f[f.length===16?13:5]}}else{f=this.$stage.position();f={x:this.settings.rtl?f.left+this.$stage.width()-this.width()+this.settings.margin:f.left,y:f.top}}if(this.is("animating")){d.support.transform?this.animate(f.x):this.$stage.stop();this.invalidate("position")}this.$element.toggleClass(this.options.grabClass,g.type==="mousedown");this.speed(0);this._drag.time=new Date().getTime();this._drag.target=d(g.target);this._drag.stage.start=f;this._drag.stage.current=f;this._drag.pointer=this.pointer(g);d(b).on("mouseup.owl.core touchend.owl.core",d.proxy(this.onDragEnd,this));d(b).one("mousemove.owl.core touchmove.owl.core",d.proxy(function(h){var i=this.difference(this._drag.pointer,this.pointer(h));d(b).on("mousemove.owl.core touchmove.owl.core",d.proxy(this.onDragMove,this));if(Math.abs(i.x)<Math.abs(i.y)&&this.is("valid")){return}h.preventDefault();this.enter("dragging");this.trigger("drag")},this))};a.prototype.onDragMove=function(g){var i=null,j=null,h=null,k=this.difference(this._drag.pointer,this.pointer(g)),f=this.difference(this._drag.stage.start,k);if(!this.is("dragging")){return}g.preventDefault();if(this.settings.loop){i=this.coordinates(this.minimum());j=this.coordinates(this.maximum()+1)-i;f.x=(((f.x-i)%j+j)%j)+i}else{i=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum());j=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum());h=this.settings.pullDrag?-1*k.x/5:0;f.x=Math.max(Math.min(f.x,i+h),j+h)}this._drag.stage.current=f;this.animate(f.x)};a.prototype.onDragEnd=function(g){var i=this.difference(this._drag.pointer,this.pointer(g)),f=this._drag.stage.current,h=i.x>0^this.settings.rtl?"left":"right";d(b).off(".owl.core");this.$element.removeClass(this.options.grabClass);if(i.x!==0&&this.is("dragging")||!this.is("valid")){this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed);this.current(this.closest(f.x,i.x!==0?h:this._drag.direction));this.invalidate("position");this.update();this._drag.direction=h;if(Math.abs(i.x)>3||new Date().getTime()-this._drag.time>300){this._drag.target.one("click.owl.core",function(){return false})}}if(!this.is("dragging")){return}this.leave("dragging");this.trigger("dragged")};a.prototype.closest=function(k,i){var f=-1,h=30,g=this.width(),j=this.coordinates();if(!this.settings.freeDrag){d.each(j,d.proxy(function(l,m){if(i==="left"&&k>m-h&&k<m+h){f=l}else{if(i==="right"&&k>m-g-h&&k<m-g+h){f=l+1}else{if(this.op(k,"<",m)&&this.op(k,">",j[l+1]!==e?j[l+1]:m-g)){f=i==="left"?l+1:l}}}return f===-1},this))}if(!this.settings.loop){if(this.op(k,">",j[this.minimum()])){f=k=this.minimum()}else{if(this.op(k,"<",j[this.maximum()])){f=k=this.maximum()}}}return f};a.prototype.animate=function(g){var f=this.speed()>0;this.is("animating")&&this.onTransitionEnd();if(f){this.enter("animating");this.trigger("translate")}if(d.support.transform3d&&d.support.transition){this.$stage.css({transform:"translate3d("+g+"px,0px,0px)",transition:(this.speed()/1000)+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")})}else{if(f){this.$stage.animate({left:g+"px"},this.speed(),this.settings.fallbackEasing,d.proxy(this.onTransitionEnd,this))}else{this.$stage.css({left:g+"px"})}}};a.prototype.is=function(f){return this._states.current[f]&&this._states.current[f]>0};a.prototype.current=function(f){if(f===e){return this._current}if(this._items.length===0){return e}f=this.normalize(f);if(this._current!==f){var g=this.trigger("change",{property:{name:"position",value:f}});if(g.data!==e){f=this.normalize(g.data)}this._current=f;this.invalidate("position");this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current};a.prototype.invalidate=function(f){if(d.type(f)==="string"){this._invalidated[f]=true;this.is("valid")&&this.leave("valid")}return d.map(this._invalidated,function(g,h){return h})};a.prototype.reset=function(f){f=this.normalize(f);if(f===e){return}this._speed=0;this._current=f;this.suppress(["translate","translated"]);this.animate(this.coordinates(f));this.release(["translate","translated"])};a.prototype.normalize=function(g,h){var i=this._items.length,f=h?0:this._clones.length;if(!this.isNumeric(g)||i<1){g=e}else{if(g<0||g>=i+f){g=((g-f/2)%i+i)%i+f/2}}return g};a.prototype.relative=function(f){f-=this._clones.length/2;return this.normalize(f,true)};a.prototype.maximum=function(j){var g=this.settings,k=this._coordinates.length,f,i,h;if(g.loop){k=this._clones.length/2+this._items.length-1}else{if(g.autoWidth||g.merge){f=this._items.length;if(f){i=this._items[--f].width();h=this.$element.width();while(f--){i+=this._items[f].width()+this.settings.margin;if(i>h){break}}}k=f+1}else{if(g.center){k=this._items.length-1}else{k=this._items.length-g.items}}}if(j){k-=this._clones.length/2}return Math.max(k,0)};a.prototype.minimum=function(f){return f?0:this._clones.length/2};a.prototype.items=function(f){if(f===e){return this._items.slice()}f=this.normalize(f,true);return this._items[f]};a.prototype.mergers=function(f){if(f===e){return this._mergers.slice()}f=this.normalize(f,true);return this._mergers[f]};a.prototype.clones=function(f){var g=this._clones.length/2,i=g+this._items.length,h=function(j){return j%2===0?i+j/2:g-(j+1)/2};if(f===e){return d.map(this._clones,function(j,k){return h(k)})}return d.map(this._clones,function(j,k){return j===f?h(k):null})};a.prototype.speed=function(f){if(f!==e){this._speed=f}return this._speed};a.prototype.coordinates=function(f){var i=1,g=f-1,h;if(f===e){return d.map(this._coordinates,d.proxy(function(k,j){return this.coordinates(j)},this))}if(this.settings.center){if(this.settings.rtl){i=-1;g=f+1}h=this._coordinates[f];h+=(this.width()-h+(this._coordinates[g]||0))/2*i}else{h=this._coordinates[g]||0}h=Math.ceil(h);return h};a.prototype.duration=function(h,g,f){if(f===0){return 0}return Math.min(Math.max(Math.abs(g-h),1),6)*Math.abs((f||this.settings.smartSpeed))};a.prototype.to=function(i,g){var j=this.current(),m=null,f=i-this.relative(j),n=(f>0)-(f<0),l=this._items.length,k=this.minimum(),h=this.maximum();if(this.settings.loop){if(!this.settings.rewind&&Math.abs(f)>l/2){f+=n*-1*l}i=j+f;m=((i-k)%l+l)%l+k;if(m!==i&&m-f<=h&&m-f>0){j=m-f;i=m;this.reset(j)}}else{if(this.settings.rewind){h+=1;i=(i%h+h)%h}else{i=Math.max(k,Math.min(h,i))}}this.speed(this.duration(j,i,g));this.current(i);if(this.isVisible()){this.update()}};a.prototype.next=function(f){f=f||false;this.to(this.relative(this.current())+1,f)};a.prototype.prev=function(f){f=f||false;this.to(this.relative(this.current())-1,f)};a.prototype.onTransitionEnd=function(f){if(f!==e){f.stopPropagation();if((f.target||f.srcElement||f.originalTarget)!==this.$stage.get(0)){return false}}this.leave("animating");this.trigger("translated")};a.prototype.viewport=function(){var f;if(this.options.responsiveBaseElement!==c){f=d(this.options.responsiveBaseElement).width()}else{if(c.innerWidth){f=c.innerWidth}else{if(b.documentElement&&b.documentElement.clientWidth){f=b.documentElement.clientWidth}else{console.warn("Can not detect viewport width.")}}}return f};a.prototype.replace=function(f){this.$stage.empty();this._items=[];if(f){f=(f instanceof jQuery)?f:d(f)}if(this.settings.nestedItemSelector){f=f.find("."+this.settings.nestedItemSelector)}f.filter(function(){return this.nodeType===1}).each(d.proxy(function(g,h){h=this.prepare(h);this.$stage.append(h);this._items.push(h);this._mergers.push(h.find("[data-merge]").addBack("[data-merge]").attr("data-merge")*1||1)},this));this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0);this.invalidate("items")};a.prototype.add=function(g,f){var h=this.relative(this._current);f=f===e?this._items.length:this.normalize(f,true);g=g instanceof jQuery?g:d(g);this.trigger("add",{content:g,position:f});g=this.prepare(g);if(this._items.length===0||f===this._items.length){this._items.length===0&&this.$stage.append(g);this._items.length!==0&&this._items[f-1].after(g);this._items.push(g);this._mergers.push(g.find("[data-merge]").addBack("[data-merge]").attr("data-merge")*1||1)}else{this._items[f].before(g);this._items.splice(f,0,g);this._mergers.splice(f,0,g.find("[data-merge]").addBack("[data-merge]").attr("data-merge")*1||1)}this._items[h]&&this.reset(this._items[h].index());this.invalidate("items");this.trigger("added",{content:g,position:f})};a.prototype.remove=function(f){f=this.normalize(f,true);if(f===e){return}this.trigger("remove",{content:this._items[f],position:f});this._items[f].remove();this._items.splice(f,1);this._mergers.splice(f,1);this.invalidate("items");this.trigger("removed",{content:null,position:f})};a.prototype.preloadAutoWidthImages=function(f){f.each(d.proxy(function(h,g){this.enter("pre-loading");g=d(g);d(new Image()).one("load",d.proxy(function(i){g.attr("src",i.target.src);g.css("opacity",1);this.leave("pre-loading");!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",g.attr("src")||g.attr("data-src")||g.attr("data-src-retina"))},this))};a.prototype.destroy=function(){this.$element.off(".owl.core");this.$stage.off(".owl.core");d(b).off(".owl.core");if(this.settings.responsive!==false){c.clearTimeout(this.resizeTimer);this.off(c,"resize",this._handlers.onThrottledResize)}for(var f in this._plugins){this._plugins[f].destroy()}this.$stage.children(".cloned").remove();this.$stage.unwrap();this.$stage.children().contents().unwrap();this.$stage.children().unwrap();this.$stage.remove();this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")};a.prototype.op=function(g,i,f){var h=this.settings.rtl;switch(i){case"<":return h?g>f:g<f;case">":return h?g<f:g>f;case">=":return h?g<=f:g>=f;case"<=":return h?g>=f:g<=f;default:break}};a.prototype.on=function(g,h,i,f){if(g.addEventListener){g.addEventListener(h,i,f)}else{if(g.attachEvent){g.attachEvent("on"+h,i)}}};a.prototype.off=function(g,h,i,f){if(g.removeEventListener){g.removeEventListener(h,i,f)}else{if(g.detachEvent){g.detachEvent("on"+h,i)}}};a.prototype.trigger=function(g,l,i,k,m){var f={item:{count:this._items.length,index:this.current()}},h=d.camelCase(d.grep(["on",g,i],function(n){return n}).join("-").toLowerCase()),j=d.Event([g,"owl",i||"carousel"].join(".").toLowerCase(),d.extend({relatedTarget:this},f,l));if(!this._supress[g]){d.each(this._plugins,function(n,o){if(o.onTrigger){o.onTrigger(j)}});this.register({type:a.Type.Event,name:g});this.$element.trigger(j);if(this.settings&&typeof this.settings[h]==="function"){this.settings[h].call(this,j)}}return j};a.prototype.enter=function(f){d.each([f].concat(this._states.tags[f]||[]),d.proxy(function(h,g){if(this._states.current[g]===e){this._states.current[g]=0}this._states.current[g]++},this))};a.prototype.leave=function(f){d.each([f].concat(this._states.tags[f]||[]),d.proxy(function(h,g){this._states.current[g]--},this))};a.prototype.register=function(g){if(g.type===a.Type.Event){if(!d.event.special[g.name]){d.event.special[g.name]={}}if(!d.event.special[g.name].owl){var f=d.event.special[g.name]._default;d.event.special[g.name]._default=function(h){if(f&&f.apply&&(!h.namespace||h.namespace.indexOf("owl")===-1)){return f.apply(this,arguments)}return h.namespace&&h.namespace.indexOf("owl")>-1};d.event.special[g.name].owl=true}}else{if(g.type===a.Type.State){if(!this._states.tags[g.name]){this._states.tags[g.name]=g.tags}else{this._states.tags[g.name]=this._states.tags[g.name].concat(g.tags)}this._states.tags[g.name]=d.grep(this._states.tags[g.name],d.proxy(function(h,j){return d.inArray(h,this._states.tags[g.name])===j},this))}}};a.prototype.suppress=function(f){d.each(f,d.proxy(function(g,h){this._supress[h]=true},this))};a.prototype.release=function(f){d.each(f,d.proxy(function(g,h){delete this._supress[h]},this))};a.prototype.pointer=function(g){var f={x:null,y:null};g=g.originalEvent||g||c.event;g=g.touches&&g.touches.length?g.touches[0]:g.changedTouches&&g.changedTouches.length?g.changedTouches[0]:g;if(g.pageX){f.x=g.pageX;f.y=g.pageY}else{f.x=g.clientX;f.y=g.clientY}return f};a.prototype.isNumeric=function(f){return !isNaN(parseFloat(f))};a.prototype.difference=function(g,f){return{x:g.x-f.x,y:g.y-f.y}};d.fn.owlCarousel=function(g){var f=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=d(this),h=i.data("owl.carousel");if(!h){h=new a(this,typeof g=="object"&&g);i.data("owl.carousel",h);d.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(j,k){h.register({type:a.Type.Event,name:k});h.$element.on(k+".owl.carousel.core",d.proxy(function(l){if(l.namespace&&l.relatedTarget!==this){this.suppress([k]);h[k].apply(this,[].slice.call(arguments,1));this.release([k])}},h))})}if(typeof g=="string"&&g.charAt(0)!=="_"){h[g].apply(h,f)}})};d.fn.owlCarousel.Constructor=a})(window.Zepto||window.jQuery,window,document);(function(d,c,a,e){var b=function(f){this._core=f;this._interval=null;this._visible=null;this._handlers={"initialized.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.autoRefresh){this.watch()}},this)};this._core.options=d.extend({},b.Defaults,this._core.options);this._core.$element.on(this._handlers)};b.Defaults={autoRefresh:true,autoRefreshInterval:500};b.prototype.watch=function(){if(this._interval){return}this._visible=this._core.isVisible();this._interval=c.setInterval(d.proxy(this.refresh,this),this._core.settings.autoRefreshInterval)};b.prototype.refresh=function(){if(this._core.isVisible()===this._visible){return}this._visible=!this._visible;this._core.$element.toggleClass("owl-hidden",!this._visible);this._visible&&(this._core.invalidate("width")&&this._core.refresh())};b.prototype.destroy=function(){var f,g;c.clearInterval(this._interval);for(f in this._handlers){this._core.$element.off(f,this._handlers[f])}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null)}};d.fn.owlCarousel.Constructor.Plugins.AutoRefresh=b})(window.Zepto||window.jQuery,window,document);(function(d,c,a,e){var b=function(f){this._core=f;this._loaded=[];this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":d.proxy(function(m){if(!m.namespace){return}if(!this._core.settings||!this._core.settings.lazyLoad){return}if((m.property&&m.property.name=="position")||m.type=="initialized"){var j=this._core.settings,o=(j.center&&Math.ceil(j.items/2)||j.items),h=((j.center&&o*-1)||0),g=(m.property&&m.property.value!==e?m.property.value:this._core.current())+h,l=this._core.clones().length,k=d.proxy(function(p,n){this.load(n)},this);if(j.lazyLoadEager>0){o+=j.lazyLoadEager;if(j.loop){g-=j.lazyLoadEager;o++}}while(h++<o){this.load(l/2+this._core.relative(g));l&&d.each(this._core.clones(this._core.relative(g)),k);g++}}},this)};this._core.options=d.extend({},b.Defaults,this._core.options);this._core.$element.on(this._handlers)};b.Defaults={lazyLoad:false,lazyLoadEager:0};b.prototype.load=function(f){var g=this._core.$stage.children().eq(f),h=g&&g.find(".owl-lazy");if(!h||d.inArray(g.get(0),this._loaded)>-1){return}h.each(d.proxy(function(k,l){var i=d(l),m,j=(c.devicePixelRatio>1&&i.attr("data-src-retina"))||i.attr("data-src")||i.attr("data-srcset");this._core.trigger("load",{element:i,url:j},"lazy");if(i.is("img")){i.one("load.owl.lazy",d.proxy(function(){i.css("opacity",1);this._core.trigger("loaded",{element:i,url:j},"lazy")},this)).attr("src",j)}else{if(i.is("source")){i.one("load.owl.lazy",d.proxy(function(){this._core.trigger("loaded",{element:i,url:j},"lazy")},this)).attr("srcset",j)}else{m=new Image();m.onload=d.proxy(function(){i.css({"background-image":'url("'+j+'")',opacity:"1"});this._core.trigger("loaded",{element:i,url:j},"lazy")},this);m.src=j}}},this));this._loaded.push(g.get(0))};b.prototype.destroy=function(){var f,g;for(f in this.handlers){this._core.$element.off(f,this.handlers[f])}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null)}};d.fn.owlCarousel.Constructor.Plugins.Lazy=b})(window.Zepto||window.jQuery,window,document);(function(c,b,a,d){var e=function(g){this._core=g;this._previousHeight=null;this._handlers={"initialized.owl.carousel refreshed.owl.carousel":c.proxy(function(h){if(h.namespace&&this._core.settings.autoHeight){this.update()}},this),"changed.owl.carousel":c.proxy(function(h){if(h.namespace&&this._core.settings.autoHeight&&h.property.name==="position"){this.update()}},this),"loaded.owl.lazy":c.proxy(function(h){if(h.namespace&&this._core.settings.autoHeight&&h.element.closest("."+this._core.settings.itemClass).index()===this._core.current()){this.update()}},this)};this._core.options=c.extend({},e.Defaults,this._core.options);this._core.$element.on(this._handlers);this._intervalId=null;var f=this;c(b).on("load",function(){if(f._core.settings.autoHeight){f.update()}});c(b).on("resize",function(){if(f._core.settings.autoHeight){if(f._intervalId!=null){clearTimeout(f._intervalId)}f._intervalId=setTimeout(function(){f.update()},250)}})};e.Defaults={autoHeight:false,autoHeightClass:"owl-height"};e.prototype.update=function(){var k=this._core._current,f=k+this._core.settings.items,g=this._core.settings.lazyLoad,j=this._core.$stage.children().toArray().slice(k,f),h=[],i=0;c.each(j,function(l,m){h.push(c(m).height())});i=Math.max.apply(null,h);if(i<=1&&g&&this._previousHeight){i=this._previousHeight}this._previousHeight=i;this._core.$stage.parent().height(i).addClass(this._core.settings.autoHeightClass)};e.prototype.destroy=function(){var f,g;for(f in this._handlers){this._core.$element.off(f,this._handlers[f])}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!=="function"&&(this[g]=null)}};c.fn.owlCarousel.Constructor.Plugins.AutoHeight=e})(window.Zepto||window.jQuery,window,document);(function(d,c,a,e){var b=function(f){this._core=f;this._videos={};this._playing=null;this._handlers={"initialized.owl.carousel":d.proxy(function(g){if(g.namespace){this._core.register({type:"state",name:"playing",tags:["interacting"]})}},this),"resize.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.video&&this.isInFullScreen()){g.preventDefault()}},this),"refreshed.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.is("resizing")){this._core.$stage.find(".cloned .owl-video-frame").remove()}},this),"changed.owl.carousel":d.proxy(function(g){if(g.namespace&&g.property.name==="position"&&this._playing){this.stop()}},this),"prepared.owl.carousel":d.proxy(function(h){if(!h.namespace){return}var g=d(h.content).find(".owl-video");if(g.length){g.css("display","none");this.fetch(g,d(h.content))}},this)};this._core.options=d.extend({},b.Defaults,this._core.options);this._core.$element.on(this._handlers);this._core.$element.on("click.owl.video",".owl-video-play-icon",d.proxy(function(g){this.play(g)},this))};b.Defaults={video:false,videoHeight:false,videoWidth:false};b.prototype.fetch=function(k,j){var i=(function(){if(k.attr("data-vimeo-id")){return"vimeo"}else{if(k.attr("data-vzaar-id")){return"vzaar"}else{return"youtube"}}})(),l=k.attr("data-vimeo-id")||k.attr("data-youtube-id")||k.attr("data-vzaar-id"),h=k.attr("data-width")||this._core.settings.videoWidth,f=k.attr("data-height")||this._core.settings.videoHeight,g=k.attr("href");if(g){l=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);if(l[3].indexOf("youtu")>-1){i="youtube"}else{if(l[3].indexOf("vimeo")>-1){i="vimeo"}else{if(l[3].indexOf("vzaar")>-1){i="vzaar"}else{throw new Error("Video URL not supported.")}}}l=l[6]}else{throw new Error("Missing video URL.")}this._videos[g]={type:i,id:l,width:h,height:f};j.attr("data-video",g);this.thumbnail(k,this._videos[g])};b.prototype.thumbnail=function(l,h){var g,n,p,f=h.width&&h.height?"width:"+h.width+"px;height:"+h.height+"px;":"",m=l.find("img"),o="src",k="",i=this._core.settings,j=function(q){n='<div class="owl-video-play-icon"></div>';if(i.lazyLoad){g=d("<div/>",{"class":"owl-video-tn "+k,srcType:q})}else{g=d("<div/>",{"class":"owl-video-tn",style:"opacity:1;background-image:url("+q+")"})}l.after(g);l.after(n)};l.wrap(d("<div/>",{"class":"owl-video-wrapper",style:f}));if(this._core.settings.lazyLoad){o="data-src";k="owl-lazy"}if(m.length){j(m.attr(o));m.remove();return false}if(h.type==="youtube"){p="//img.youtube.com/vi/"+h.id+"/hqdefault.jpg";j(p)}else{if(h.type==="vimeo"){d.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+h.id+".json",jsonp:"callback",dataType:"jsonp",success:function(q){p=q[0].thumbnail_large;j(p)}})}else{if(h.type==="vzaar"){d.ajax({type:"GET",url:"//vzaar.com/api/videos/"+h.id+".json",jsonp:"callback",dataType:"jsonp",success:function(q){p=q.framegrab_url;j(p)}})}}}};b.prototype.stop=function(){this._core.trigger("stop",null,"video");this._playing.find(".owl-video-frame").remove();this._playing.removeClass("owl-video-playing");this._playing=null;this._core.leave("playing");this._core.trigger("stopped",null,"video")};b.prototype.play=function(l){var m=d(l.target),k=m.closest("."+this._core.settings.itemClass),j=this._videos[k.attr("data-video")],i=j.width||"100%",f=j.height||this._core.$stage.height(),g,h;if(this._playing){return}this._core.enter("playing");this._core.trigger("play",null,"video");k=this._core.items(this._core.relative(k.index()));this._core.reset(k.index());g=d('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');g.attr("height",f);g.attr("width",i);if(j.type==="youtube"){g.attr("src","//www.youtube.com/embed/"+j.id+"?autoplay=1&rel=0&v="+j.id)}else{if(j.type==="vimeo"){g.attr("src","//player.vimeo.com/video/"+j.id+"?autoplay=1")}else{if(j.type==="vzaar"){g.attr("src","//view.vzaar.com/"+j.id+"/player?autoplay=true")}}}h=d(g).wrap('<div class="owl-video-frame" />').insertAfter(k.find(".owl-video"));this._playing=k.addClass("owl-video-playing")};b.prototype.isInFullScreen=function(){var f=a.fullscreenElement||a.mozFullScreenElement||a.webkitFullscreenElement;return f&&d(f).parent().hasClass("owl-video-frame")};b.prototype.destroy=function(){var f,g;this._core.$element.off("click.owl.video");for(f in this._handlers){this._core.$element.off(f,this._handlers[f])}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null)}};d.fn.owlCarousel.Constructor.Plugins.Video=b})(window.Zepto||window.jQuery,window,document);(function(d,c,b,e){var a=function(f){this.core=f;this.core.options=d.extend({},a.Defaults,this.core.options);this.swapping=true;this.previous=e;this.next=e;this.handlers={"change.owl.carousel":d.proxy(function(g){if(g.namespace&&g.property.name=="position"){this.previous=this.core.current();this.next=g.property.value}},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":d.proxy(function(g){if(g.namespace){this.swapping=g.type=="translated"}},this),"translate.owl.carousel":d.proxy(function(g){if(g.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)){this.swap()}},this)};this.core.$element.on(this.handlers)};a.Defaults={animateOut:false,animateIn:false};a.prototype.swap=function(){if(this.core.settings.items!==1){return}if(!d.support.animation||!d.support.transition){return}this.core.speed(0);var k,f=d.proxy(this.clear,this),j=this.core.$stage.children().eq(this.previous),i=this.core.$stage.children().eq(this.next),g=this.core.settings.animateIn,h=this.core.settings.animateOut;if(this.core.current()===this.previous){return}if(h){k=this.core.coordinates(this.previous)-this.core.coordinates(this.next);j.one(d.support.animation.end,f).css({left:k+"px"}).addClass("animated owl-animated-out").addClass(h)}if(g){i.one(d.support.animation.end,f).addClass("animated owl-animated-in").addClass(g)}};a.prototype.clear=function(f){d(f.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);this.core.onTransitionEnd()};a.prototype.destroy=function(){var f,g;for(f in this.handlers){this.core.$element.off(f,this.handlers[f])}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null)}};d.fn.owlCarousel.Constructor.Plugins.Animate=a})(window.Zepto||window.jQuery,window,document);(function(c,b,a,e){var d=function(f){this._core=f;this._call=null;this._time=0;this._timeout=0;this._paused=true;this._handlers={"changed.owl.carousel":c.proxy(function(g){if(g.namespace&&g.property.name==="settings"){if(this._core.settings.autoplay){this.play()}else{this.stop()}}else{if(g.namespace&&g.property.name==="position"&&this._paused){this._time=0}}},this),"initialized.owl.carousel":c.proxy(function(g){if(g.namespace&&this._core.settings.autoplay){this.play()}},this),"play.owl.autoplay":c.proxy(function(i,g,h){if(i.namespace){this.play(g,h)}},this),"stop.owl.autoplay":c.proxy(function(g){if(g.namespace){this.stop()}},this),"mouseover.owl.autoplay":c.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is("rotating")){this.pause()}},this),"mouseleave.owl.autoplay":c.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is("rotating")){this.play()}},this),"touchstart.owl.core":c.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is("rotating")){this.pause()}},this),"touchend.owl.core":c.proxy(function(){if(this._core.settings.autoplayHoverPause){this.play()}},this)};this._core.$element.on(this._handlers);this._core.options=c.extend({},d.Defaults,this._core.options)};d.Defaults={autoplay:false,autoplayTimeout:5000,autoplayHoverPause:false,autoplaySpeed:false};d.prototype._next=function(f){this._call=b.setTimeout(c.proxy(this._next,this,f),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read());if(this._core.is("interacting")||a.hidden){return}this._core.next(f||this._core.settings.autoplaySpeed)};d.prototype.read=function(){return new Date().getTime()-this._time};d.prototype.play=function(h,g){var f;if(!this._core.is("rotating")){this._core.enter("rotating")}h=h||this._core.settings.autoplayTimeout;f=Math.min(this._time%(this._timeout||h),h);if(this._paused){this._time=this.read();this._paused=false}else{b.clearTimeout(this._call)}this._time+=this.read()%h-f;this._timeout=h;this._call=b.setTimeout(c.proxy(this._next,this,g),h-f)};d.prototype.stop=function(){if(this._core.is("rotating")){this._time=0;this._paused=true;b.clearTimeout(this._call);this._core.leave("rotating")}};d.prototype.pause=function(){if(this._core.is("rotating")&&!this._paused){this._time=this.read();this._paused=true;b.clearTimeout(this._call)}};d.prototype.destroy=function(){var f,g;this.stop();for(f in this._handlers){this._core.$element.off(f,this._handlers[f])}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null)}};c.fn.owlCarousel.Constructor.Plugins.autoplay=d})(window.Zepto||window.jQuery,window,document);(function(d,b,a,e){var c=function(f){this._core=f;this._initialized=false;this._pages=[];this._controls={};this._templates=[];this.$element=this._core.$element;this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to};this._handlers={"prepared.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.dotsData){this._templates.push('<div class="'+this._core.settings.dotClass+'">'+d(g.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")}},this),"added.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.dotsData){this._templates.splice(g.position,0,this._templates.pop())}},this),"remove.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.dotsData){this._templates.splice(g.position,1)}},this),"changed.owl.carousel":d.proxy(function(g){if(g.namespace&&g.property.name=="position"){this.draw()}},this),"initialized.owl.carousel":d.proxy(function(g){if(g.namespace&&!this._initialized){this._core.trigger("initialize",null,"navigation");this.initialize();this.update();this.draw();this._initialized=true;this._core.trigger("initialized",null,"navigation")}},this),"refreshed.owl.carousel":d.proxy(function(g){if(g.namespace&&this._initialized){this._core.trigger("refresh",null,"navigation");this.update();this.draw();this._core.trigger("refreshed",null,"navigation")}},this)};this._core.options=d.extend({},c.Defaults,this._core.options);this.$element.on(this._handlers)};c.Defaults={nav:false,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:false,navElement:'button type="button" role="presentation"',navContainer:false,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:true,dotsEach:false,dotsData:false,dotsSpeed:false,dotsContainer:false};c.prototype.initialize=function(){var f,g=this._core.settings;this._controls.$relative=(g.navContainer?d(g.navContainer):d("<div>").addClass(g.navContainerClass).appendTo(this.$element)).addClass("disabled");this._controls.$previous=d("<"+g.navElement+">").addClass(g.navClass[0]).html(g.navText[0]).prependTo(this._controls.$relative).on("click",d.proxy(function(h){this.prev(g.navSpeed)},this));this._controls.$next=d("<"+g.navElement+">").addClass(g.navClass[1]).html(g.navText[1]).appendTo(this._controls.$relative).on("click",d.proxy(function(h){this.next(g.navSpeed)},this));if(!g.dotsData){this._templates=[d('<button role="button">').addClass(g.dotClass).append(d("<span>")).prop("outerHTML")]}this._controls.$absolute=(g.dotsContainer?d(g.dotsContainer):d("<div>").addClass(g.dotsClass).appendTo(this.$element)).addClass("disabled");this._controls.$absolute.on("click","button",d.proxy(function(i){var h=d(i.target).parent().is(this._controls.$absolute)?d(i.target).index():d(i.target).parent().index();i.preventDefault();this.to(h,g.dotsSpeed)},this));for(f in this._overrides){this._core[f]=d.proxy(this[f],this)}};c.prototype.destroy=function(){var h,j,i,f,g;g=this._core.settings;for(h in this._handlers){this.$element.off(h,this._handlers[h])}for(j in this._controls){if(j==="$relative"&&g.navContainer){this._controls[j].html("")}else{this._controls[j].remove()}}for(f in this.overides){this._core[f]=this._overrides[f]}for(i in Object.getOwnPropertyNames(this)){typeof this[i]!="function"&&(this[i]=null)}};c.prototype.update=function(){var m,h,f,g=this._core.clones().length/2,o=g+this._core.items().length,p=this._core.maximum(true),n=this._core.settings,l=n.center||n.autoWidth||n.dotsData?1:n.dotsEach||n.items;if(n.slideBy!=="page"){n.slideBy=Math.min(n.slideBy,n.items)}if(n.dots||n.slideBy=="page"){this._pages=[];for(m=g,h=0,f=0;m<o;m++){if(h>=l||h===0){this._pages.push({start:Math.min(p,m-g),end:m-g+l-1});if(Math.min(p,m-g)===p){break}h=0,++f}h+=this._core.mergers(this._core.relative(m))}}};c.prototype.draw=function(){var j,i=this._core.settings,h=this._core.items().length<=i.items,g=this._core.relative(this._core.current()),f=i.loop||i.rewind;this._controls.$relative.toggleClass("disabled",!i.nav||h);if(i.nav){this._controls.$previous.toggleClass("disabled",!f&&g<=this._core.minimum(true));this._controls.$next.toggleClass("disabled",!f&&g>=this._core.maximum(true))}this._controls.$absolute.toggleClass("disabled",!i.dots||h);if(i.dots){j=this._pages.length-this._controls.$absolute.children().length;if(i.dotsData&&j!==0){this._controls.$absolute.html(this._templates.join(""))}else{if(j>0){this._controls.$absolute.append(new Array(j+1).join(this._templates[0]))}else{if(j<0){this._controls.$absolute.children().slice(j).remove()}}}this._controls.$absolute.find(".active").removeClass("active");this._controls.$absolute.children().eq(d.inArray(this.current(),this._pages)).addClass("active")}};c.prototype.onTrigger=function(g){var f=this._core.settings;g.page={index:d.inArray(this.current(),this._pages),count:this._pages.length,size:f&&(f.center||f.autoWidth||f.dotsData?1:f.dotsEach||f.items)}};c.prototype.current=function(){var f=this._core.relative(this._core.current());return d.grep(this._pages,d.proxy(function(h,g){return h.start<=f&&h.end>=f},this)).pop()};c.prototype.getPosition=function(g){var f,i,h=this._core.settings;if(h.slideBy=="page"){f=d.inArray(this.current(),this._pages);i=this._pages.length;g?++f:--f;f=this._pages[((f%i)+i)%i].start}else{f=this._core.relative(this._core.current());i=this._core.items().length;g?f+=h.slideBy:f-=h.slideBy}return f};c.prototype.next=function(f){d.proxy(this._overrides.to,this._core)(this.getPosition(true),f)};c.prototype.prev=function(f){d.proxy(this._overrides.to,this._core)(this.getPosition(false),f)};c.prototype.to=function(f,i,g){var h;if(!g&&this._pages.length){h=this._pages.length;d.proxy(this._overrides.to,this._core)(this._pages[((f%h)+h)%h].start,i)}else{d.proxy(this._overrides.to,this._core)(f,i)}};d.fn.owlCarousel.Constructor.Plugins.Navigation=c})(window.Zepto||window.jQuery,window,document);(function(d,c,a,e){var b=function(f){this._core=f;this._hashes={};this.$element=this._core.$element;this._handlers={"initialized.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.startPosition==="URLHash"){d(c).trigger("hashchange.owl.navigation")}},this),"prepared.owl.carousel":d.proxy(function(h){if(h.namespace){var g=d(h.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!g){return}this._hashes[g]=h.content}},this),"changed.owl.carousel":d.proxy(function(i){if(i.namespace&&i.property.name==="position"){var h=this._core.items(this._core.relative(this._core.current())),g=d.map(this._hashes,function(j,k){return j===h?k:null}).join();if(!g||c.location.hash.slice(1)===g){return}c.location.hash=g}},this)};this._core.options=d.extend({},b.Defaults,this._core.options);this.$element.on(this._handlers);d(c).on("hashchange.owl.navigation",d.proxy(function(j){var i=c.location.hash.substring(1),h=this._core.$stage.children(),g=this._hashes[i]&&h.index(this._hashes[i]);if(g===e||g===this._core.current()){return}this._core.to(this._core.relative(g),false,true)},this))};b.Defaults={URLhashListener:false};b.prototype.destroy=function(){var f,g;d(c).off("hashchange.owl.navigation");for(f in this._handlers){this._core.$element.off(f,this._handlers[f])}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null)}};d.fn.owlCarousel.Constructor.Plugins.Hash=b})(window.Zepto||window.jQuery,window,document);(function(e,g,i,d){var b=e("<support>").get(0).style,f="Webkit Moz O ms".split(" "),j={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},c={csstransforms:function(){return !!h("transform")},csstransforms3d:function(){return !!h("perspective")},csstransitions:function(){return !!h("transition")},cssanimations:function(){return !!h("animation")}};function h(n,l){var k=false,m=n.charAt(0).toUpperCase()+n.slice(1);e.each((n+" "+f.join(m+" ")+m).split(" "),function(o,p){if(b[p]!==d){k=l?p:true;return false}});return k}function a(k){return h(k,true)}if(c.csstransitions()){e.support.transition=new String(a("transition"));e.support.transition.end=j.transition.end[e.support.transition]}if(c.cssanimations()){e.support.animation=new String(a("animation"));e.support.animation.end=j.animation.end[e.support.animation]}if(c.csstransforms()){e.support.transform=new String(a("transform"));e.support.transform3d=c.csstransforms3d()}})(window.Zepto||window.jQuery,window,document);
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
(function(l,o,i,e){var p=i("html"),d=i(l),a=i(o),q=i.fancybox=function(){q.open.apply(this,arguments)},k=navigator.userAgent.match(/msie/i),c=null,f=o.createTouch!==e,j=function(r){return r&&r.hasOwnProperty&&r instanceof i},b=function(r){return r&&i.type(r)==="string"},m=function(r){return b(r)&&r.indexOf("%")>0},h=function(r){return(r&&!(r.style.overflow&&r.style.overflow==="hidden")&&((r.clientWidth&&r.scrollWidth>r.clientWidth)||(r.clientHeight&&r.scrollHeight>r.clientHeight)))},n=function(t,s){var r=parseInt(t,10)||0;if(s&&m(t)){r=q.getViewport()[s]/100*r}return Math.ceil(r)},g=function(r,s){return n(r,s)+"px"};i.extend(q,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:true,autoHeight:false,autoWidth:false,autoResize:true,autoCenter:!f,fitToView:true,aspectRatio:false,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:"html",headers:{"X-fancyBox":true}},iframe:{scrolling:"auto",preload:true},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:true,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(k?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:true,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:true,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:true,title:true},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(s,r){if(!s){return}if(!i.isPlainObject(r)){r={}}if(false===q.close(true)){return}if(!i.isArray(s)){s=j(s)?i(s).get():[s]}i.each(s,function(x,y){var w={},t,B,z,A,v,C,u;if(i.type(y)==="object"){if(y.nodeType){y=i(y)}if(j(y)){w={href:y.data("fancybox-href")||y.attr("href"),title:i("<div/>").text(y.data("fancybox-title")||y.attr("title")||"").html(),isDom:true,element:y};if(i.metadata){i.extend(true,w,y.metadata())}}else{w=y}}t=r.href||w.href||(b(y)?y:null);B=r.title!==e?r.title:w.title||"";z=r.content||w.content;A=z?"html":(r.type||w.type);if(!A&&w.isDom){A=y.data("fancybox-type");if(!A){v=y.prop("class").match(/fancybox\.(\w+)/);A=v?v[1]:null}}if(b(t)){if(!A){if(q.isImage(t)){A="image"}else{if(q.isSWF(t)){A="swf"}else{if(t.charAt(0)==="#"){A="inline"}else{if(b(y)){A="html";z=y}}}}}if(A==="ajax"){C=t.split(/\s+/,2);t=C.shift();u=C.shift()}}if(!z){if(A==="inline"){if(t){z=i(b(t)?t.replace(/.*(?=#[^\s]+$)/,""):t)}else{if(w.isDom){z=y}}}else{if(A==="html"){z=t}else{if(!A&&!t&&w.isDom){A="inline";z=y}}}}i.extend(w,{href:t,type:A,content:z,title:B,selector:u});s[x]=w});q.opts=i.extend(true,{},q.defaults,r);if(r.keys!==e){q.opts.keys=r.keys?i.extend({},q.defaults.keys,r.keys):false}q.group=s;return q._start(q.opts.index)},cancel:function(){var r=q.coming;if(r&&false===q.trigger("onCancel")){return}q.hideLoading();if(!r){return}if(q.ajaxLoad){q.ajaxLoad.abort()}q.ajaxLoad=null;if(q.imgPreload){q.imgPreload.onload=q.imgPreload.onerror=null}if(r.wrap){r.wrap.stop(true,true).trigger("onReset").remove()}q.coming=null;if(!q.current){q._afterZoomOut(r)}},close:function(r){q.cancel();if(false===q.trigger("beforeClose")){return}q.unbindEvents();if(!q.isActive){return}if(!q.isOpen||r===true){i(".fancybox-wrap").stop(true).trigger("onReset").remove();q._afterZoomOut()}else{q.isOpen=q.isOpened=false;q.isClosing=true;i(".fancybox-item, .fancybox-nav").remove();q.wrap.stop(true,true).removeClass("fancybox-opened");q.transitions[q.current.closeMethod]()}},play:function(t){var r=function(){clearTimeout(q.player.timer)},v=function(){r();if(q.current&&q.player.isActive){q.player.timer=setTimeout(q.next,q.current.playSpeed)}},s=function(){r();a.unbind(".player");q.player.isActive=false;q.trigger("onPlayEnd")},u=function(){if(q.current&&(q.current.loop||q.current.index<q.group.length-1)){q.player.isActive=true;a.bind({"onCancel.player beforeClose.player":s,"onUpdate.player":v,"beforeLoad.player":r});v();q.trigger("onPlayStart")}};if(t===true||(!q.player.isActive&&t!==false)){u()}else{s()}},next:function(s){var r=q.current;if(r){if(!b(s)){s=r.direction.next}q.jumpto(r.index+1,s,"next")}},prev:function(s){var r=q.current;if(r){if(!b(s)){s=r.direction.prev}q.jumpto(r.index-1,s,"prev")}},jumpto:function(s,u,r){var t=q.current;if(!t){return}s=n(s);q.direction=u||t.direction[(s>=t.index?"next":"prev")];q.router=r||"jumpto";if(t.loop){if(s<0){s=t.group.length+(s%t.group.length)}s=s%t.group.length}if(t.group[s]!==e){q.cancel();q._start(s)}},reposition:function(u,r){var t=q.current,s=t?t.wrap:null,v;if(s){v=q._getPosition(r);if(u&&u.type==="scroll"){delete v.position;s.stop(true,true).animate(v,200)}else{s.css(v);t.pos=i.extend({},t.dim,v)}}},update:function(t){var r=(t&&t.originalEvent&&t.originalEvent.type),s=!r||r==="orientationchange";if(s){clearTimeout(c);c=null}if(!q.isOpen||c){return}c=setTimeout(function(){var u=q.current;if(!u||q.isClosing){return}q.wrap.removeClass("fancybox-tmp");if(s||r==="load"||(r==="resize"&&u.autoResize)){q._setDimension()}if(!(r==="scroll"&&u.canShrink)){q.reposition(t)}q.trigger("onUpdate");c=null},(s&&!f?0:300))},toggle:function(r){if(q.isOpen){q.current.fitToView=i.type(r)==="boolean"?r:!q.current.fitToView;if(f){q.wrap.removeAttr("style").addClass("fancybox-tmp");q.trigger("onUpdate")}q.update()}},hideLoading:function(){a.unbind(".loading");i("#fancybox-loading").remove()},showLoading:function(){var s,r;q.hideLoading();s=i(q.opts.tpl.loading).click(q.cancel).appendTo("body");a.bind("keydown.loading",function(t){if((t.which||t.keyCode)===27){t.preventDefault();q.cancel()}});if(!q.defaults.fixed){r=q.getViewport();s.css({position:"absolute",top:(r.h*0.5)+r.y,left:(r.w*0.5)+r.x})}q.trigger("onLoading")},getViewport:function(){var r=(q.current&&q.current.locked)||false,s={x:d.scrollLeft(),y:d.scrollTop()};if(r&&r.length){s.w=r[0].clientWidth;s.h=r[0].clientHeight}else{s.w=f&&l.innerWidth?l.innerWidth:d.width();s.h=f&&l.innerHeight?l.innerHeight:d.height()}return s},unbindEvents:function(){if(q.wrap&&j(q.wrap)){q.wrap.unbind(".fb")}a.unbind(".fb");d.unbind(".fb")},bindEvents:function(){var s=q.current,r;if(!s){return}d.bind("orientationchange.fb"+(f?"":" resize.fb")+(s.autoCenter&&!s.locked?" scroll.fb":""),q.update);r=s.keys;if(r){a.bind("keydown.fb",function(v){var t=v.which||v.keyCode,u=v.target||v.srcElement;if(t===27&&q.coming){return false}if(!v.ctrlKey&&!v.altKey&&!v.shiftKey&&!v.metaKey&&!(u&&(u.type||i(u).is("[contenteditable]")))){i.each(r,function(w,x){if(s.group.length>1&&x[t]!==e){q[w](x[t]);v.preventDefault();return false}if(i.inArray(t,x)>-1){q[w]();v.preventDefault();return false}})}})}if(i.fn.mousewheel&&s.mouseWheel){q.wrap.bind("mousewheel.fb",function(y,z,u,t){var x=y.target||null,v=i(x),w=false;while(v.length){if(w||v.is(".fancybox-skin")||v.is(".fancybox-wrap")){break}w=h(v[0]);v=i(v).parent()}if(z!==0&&!w){if(q.group.length>1&&!s.canShrink){if(t>0||u>0){q.prev(t>0?"down":"left")}else{if(t<0||u<0){q.next(t<0?"up":"right")}}y.preventDefault()}}})}},trigger:function(s,u){var r,t=u||q.coming||q.current;if(t){if(i.isFunction(t[s])){r=t[s].apply(t,Array.prototype.slice.call(arguments,1))}if(r===false){return false}if(t.helpers){i.each(t.helpers,function(w,v){if(v&&q.helpers[w]&&i.isFunction(q.helpers[w][s])){q.helpers[w][s](i.extend(true,{},q.helpers[w].defaults,v),t)}})}}a.trigger(s)},isImage:function(r){return b(r)&&r.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(r){return b(r)&&r.match(/\.(swf)((\?|#).*)?$/i)},_start:function(s){var t={},x,r,u,v,w;s=n(s);x=q.group[s]||null;if(!x){return false}t=i.extend(true,{},q.opts,x);v=t.margin;w=t.padding;if(i.type(v)==="number"){t.margin=[v,v,v,v]}if(i.type(w)==="number"){t.padding=[w,w,w,w]}if(t.modal){i.extend(true,t,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{closeClick:false}}})}if(t.autoSize){t.autoWidth=t.autoHeight=true}if(t.width==="auto"){t.autoWidth=true}if(t.height==="auto"){t.autoHeight=true}t.group=q.group;t.index=s;q.coming=t;if(false===q.trigger("beforeLoad")){q.coming=null;return}u=t.type;r=t.href;if(!u){q.coming=null;if(q.current&&q.router&&q.router!=="jumpto"){q.current.index=s;return q[q.router](q.direction)}return false}q.isActive=true;if(u==="image"||u==="swf"){t.autoHeight=t.autoWidth=false;t.scrolling="visible"}if(u==="image"){t.aspectRatio=true}if(u==="iframe"&&f){t.scrolling="scroll"}t.wrap=i(t.tpl.wrap).addClass("fancybox-"+(f?"mobile":"desktop")+" fancybox-type-"+u+" fancybox-tmp "+t.wrapCSS).appendTo(t.parent||"body");i.extend(t,{skin:i(".fancybox-skin",t.wrap),outer:i(".fancybox-outer",t.wrap),inner:i(".fancybox-inner",t.wrap)});i.each(["Top","Right","Bottom","Left"],function(z,y){t.skin.css("padding"+y,g(t.padding[z]))});q.trigger("onReady");if(u==="inline"||u==="html"){if(!t.content||!t.content.length){return q._error("content")}}else{if(!r){return q._error("href")}}if(u==="image"){q._loadImage()}else{if(u==="ajax"){q._loadAjax()}else{if(u==="iframe"){q._loadIframe()}else{q._afterLoad()}}}},_error:function(r){i.extend(q.coming,{type:"html",autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:"no",hasError:r,content:q.coming.tpl.error});q._afterLoad()},_loadImage:function(){var r=q.imgPreload=new Image();r.onload=function(){this.onload=this.onerror=null;q.coming.width=this.width/q.opts.pixelRatio;q.coming.height=this.height/q.opts.pixelRatio;q._afterLoad()};r.onerror=function(){this.onload=this.onerror=null;q._error("image")};r.src=q.coming.href;if(r.complete!==true){q.showLoading()}},_loadAjax:function(){var r=q.coming;q.showLoading();q.ajaxLoad=i.ajax(i.extend({},r.ajax,{url:r.href,error:function(s,t){if(q.coming&&t!=="abort"){q._error("ajax",s)}else{q.hideLoading()}},success:function(s,t){if(t==="success"){r.content=s;q._afterLoad()}}}))},_loadIframe:function(){var r=q.coming,s=i(r.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr("scrolling",f?"auto":r.iframe.scrolling).attr("src",r.href);i(r.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(t){}});if(r.iframe.preload){q.showLoading();s.one("load",function(){i(this).data("ready",1);if(!f){i(this).bind("load.fb",q.update)}i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();q._afterLoad()})}r.content=s.appendTo(r.inner);if(!r.iframe.preload){q._afterLoad()}},_preloadImages:function(){var w=q.group,v=q.current,r=w.length,t=v.preload?Math.min(v.preload,r-1):0,u,s;for(s=1;s<=t;s+=1){u=w[(v.index+s)%r];if(u.type==="image"&&u.href){new Image().src=u.href}}},_afterLoad:function(){var s=q.coming,u=q.current,z="fancybox-placeholder",w,x,y,t,r,v;q.hideLoading();if(!s||q.isActive===false){return}if(false===q.trigger("afterLoad",s,u)){s.wrap.stop(true).trigger("onReset").remove();q.coming=null;return}if(u){q.trigger("beforeChange",u);u.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()}q.unbindEvents();w=s;x=s.content;y=s.type;t=s.scrolling;i.extend(q,{wrap:w.wrap,skin:w.skin,outer:w.outer,inner:w.inner,current:w,previous:u});r=w.href;switch(y){case"inline":case"ajax":case"html":if(w.selector){x=i("<div>").html(x).find(w.selector)}else{if(j(x)){if(!x.data(z)){x.data(z,i('<div class="'+z+'"></div>').insertAfter(x).hide())}x=x.show().detach();w.wrap.bind("onReset",function(){if(i(this).find(x).length){x.hide().replaceAll(x.data(z)).data(z,false)}})}}break;case"image":x=w.tpl.image.replace(/\{href\}/g,r);break;case"swf":x='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+r+'"></param>';v="";i.each(w.swf,function(A,B){x+='<param name="'+A+'" value="'+B+'"></param>';v+=" "+A+'="'+B+'"'});x+='<embed src="'+r+'" type="application/x-shockwave-flash" width="100%" height="100%"'+v+"></embed></object>";break}if(!(j(x)&&x.parent().is(w.inner))){w.inner.append(x)}q.trigger("beforeShow");w.inner.css("overflow",t==="yes"?"scroll":(t==="no"?"hidden":t));q._setDimension();q.reposition();q.isOpen=false;q.coming=null;q.bindEvents();if(!q.isOpened){i(".fancybox-wrap").not(w.wrap).stop(true).trigger("onReset").remove()}else{if(u.prevMethod){q.transitions[u.prevMethod]()}}q.transitions[q.isOpened?w.nextMethod:w.openMethod]();q._preloadImages()},_setDimension:function(){var U=q.getViewport(),Q=0,W=false,Y=false,C=q.wrap,O=q.skin,Z=q.inner,L=q.current,M=L.width,J=L.height,F=L.minWidth,y=L.minHeight,S=L.maxWidth,K=L.maxHeight,E=L.scrolling,w=L.scrollOutside?L.scrollbarWidth:0,I=L.margin,x=n(I[1]+I[3]),v=n(I[0]+I[2]),t,s,P,R,H,G,N,A,z,V,u,X,r,B,D;C.add(O).add(Z).width("auto").height("auto").removeClass("fancybox-tmp");t=n(O.outerWidth(true)-O.width());s=n(O.outerHeight(true)-O.height());P=x+t;R=v+s;H=m(M)?(U.w-P)*n(M)/100:M;G=m(J)?(U.h-R)*n(J)/100:J;if(L.type==="iframe"){B=L.content;if(L.autoHeight&&B.data("ready")===1){try{if(B[0].contentWindow.document.location){Z.width(H).height(9999);D=B.contents().find("body");if(w){D.css("overflow-x","hidden")}G=D.outerHeight(true)}}catch(T){}}}else{if(L.autoWidth||L.autoHeight){Z.addClass("fancybox-tmp");if(!L.autoWidth){Z.width(H)}if(!L.autoHeight){Z.height(G)}if(L.autoWidth){H=Z.width()}if(L.autoHeight){G=Z.height()}Z.removeClass("fancybox-tmp")}}M=n(H);J=n(G);z=H/G;F=n(m(F)?n(F,"w")-P:F);S=n(m(S)?n(S,"w")-P:S);y=n(m(y)?n(y,"h")-R:y);K=n(m(K)?n(K,"h")-R:K);N=S;A=K;if(L.fitToView){S=Math.min(U.w-P,S);K=Math.min(U.h-R,K)}X=U.w-x;r=U.h-v;if(L.aspectRatio){if(M>S){M=S;J=n(M/z)}if(J>K){J=K;M=n(J*z)}if(M<F){M=F;J=n(M/z)}if(J<y){J=y;M=n(J*z)}}else{M=Math.max(F,Math.min(M,S));if(L.autoHeight&&L.type!=="iframe"){Z.width(M);J=Z.height()}J=Math.max(y,Math.min(J,K))}if(L.fitToView){Z.width(M).height(J);C.width(M+t);V=C.width();u=C.height();if(L.aspectRatio){while((V>X||u>r)&&M>F&&J>y){if(Q++>19){break}J=Math.max(y,Math.min(K,J-10));M=n(J*z);if(M<F){M=F;J=n(M/z)}if(M>S){M=S;J=n(M/z)}Z.width(M).height(J);C.width(M+t);V=C.width();u=C.height()}}else{M=Math.max(F,Math.min(M,M-(V-X)));J=Math.max(y,Math.min(J,J-(u-r)))}}if(w&&E==="auto"&&J<G&&(M+t+w)<X){M+=w}Z.width(M).height(J);C.width(M+t);V=C.width();u=C.height();W=(V>X||u>r)&&M>F&&J>y;Y=L.aspectRatio?(M<N&&J<A&&M<H&&J<G):((M<N||J<A)&&(M<H||J<G));i.extend(L,{dim:{width:g(V),height:g(u)},origWidth:H,origHeight:G,canShrink:W,canExpand:Y,wPadding:t,hPadding:s,wrapSpace:u-O.outerHeight(true),skinSpace:O.height()-J});if(!B&&L.autoHeight&&J>y&&J<K&&!Y){Z.height("auto")}},_getPosition:function(t){var x=q.current,s=q.getViewport(),v=x.margin,u=q.wrap.width()+v[1]+v[3],r=q.wrap.height()+v[0]+v[2],w={position:"absolute",top:v[0],left:v[3]};if(x.autoCenter&&x.fixed&&!t&&r<=s.h&&u<=s.w){w.position="fixed"}else{if(!x.locked){w.top+=s.y;w.left+=s.x}}w.top=g(Math.max(w.top,w.top+((s.h-r)*x.topRatio)));w.left=g(Math.max(w.left,w.left+((s.w-u)*x.leftRatio)));return w},_afterZoomIn:function(){var r=q.current;if(!r){return}q.isOpen=q.isOpened=true;q.wrap.css("overflow","visible").addClass("fancybox-opened").hide().show(0);q.update();if(r.closeClick||(r.nextClick&&q.group.length>1)){q.inner.css("cursor","pointer").bind("click.fb",function(s){if(!i(s.target).is("a")&&!i(s.target).parent().is("a")){s.preventDefault();q[r.closeClick?"close":"next"]()}})}if(r.closeBtn){i(r.tpl.closeBtn).appendTo(q.skin).bind("click.fb",function(s){s.preventDefault();q.close()})}if(r.arrows&&q.group.length>1){if(r.loop||r.index>0){i(r.tpl.prev).appendTo(q.outer).bind("click.fb",q.prev)}if(r.loop||r.index<q.group.length-1){i(r.tpl.next).appendTo(q.outer).bind("click.fb",q.next)}}q.trigger("afterShow");if(!r.loop&&r.index===r.group.length-1){q.play(false)}else{if(q.opts.autoPlay&&!q.player.isActive){q.opts.autoPlay=false;q.play(true)}}},_afterZoomOut:function(r){r=r||q.current;i(".fancybox-wrap").trigger("onReset").remove();i.extend(q,{group:{},opts:{},router:false,current:null,isActive:false,isOpened:false,isOpen:false,isClosing:false,wrap:null,skin:null,outer:null,inner:null});q.trigger("afterClose",r)}});q.transitions={getOrigPosition:function(){var u=q.current,s=u.element,x=u.orig,w={},r=50,y=50,v=u.hPadding,z=u.wPadding,t=q.getViewport();if(!x&&u.isDom&&s.is(":visible")){x=s.find("img:first");if(!x.length){x=s}}if(j(x)){w=x.offset();if(x.is("img")){r=x.outerWidth();y=x.outerHeight()}}else{w.top=t.y+(t.h-y)*u.topRatio;w.left=t.x+(t.w-r)*u.leftRatio}if(q.wrap.css("position")==="fixed"||u.locked){w.top-=t.y;w.left-=t.x}w={top:g(w.top-v*u.topRatio),left:g(w.left-z*u.leftRatio),width:g(r+z),height:g(y+v)};return w},step:function(s,t){var v,x,y,r=t.prop,u=q.current,w=u.wrapSpace,z=u.skinSpace;if(r==="width"||r==="height"){v=t.end===t.start?1:(s-t.start)/(t.end-t.start);if(q.isClosing){v=1-v}x=r==="width"?u.wPadding:u.hPadding;y=s-x;q.skin[r](n(r==="width"?y:y-(w*v)));q.inner[r](n(r==="width"?y:y-(w*v)-(z*v)))}},zoomIn:function(){var v=q.current,s=v.pos,t=v.openEffect,u=t==="elastic",r=i.extend({opacity:1},s);delete r.position;if(u){s=this.getOrigPosition();if(v.openOpacity){s.opacity=0.1}}else{if(t==="fade"){s.opacity=0.1}}q.wrap.css(s).animate(r,{duration:t==="none"?0:v.openSpeed,easing:v.openEasing,step:u?this.step:null,complete:q._afterZoomIn})},zoomOut:function(){var u=q.current,s=u.closeEffect,t=s==="elastic",r={opacity:0.1};if(t){r=this.getOrigPosition();if(u.closeOpacity){r.opacity=0.1}}q.wrap.animate(r,{duration:s==="none"?0:u.closeSpeed,easing:u.closeEasing,step:t?this.step:null,complete:q._afterZoomOut})},changeIn:function(){var w=q.current,t=w.nextEffect,s=w.pos,r={opacity:1},v=q.direction,x=200,u;s.opacity=0.1;if(t==="elastic"){u=v==="down"||v==="up"?"top":"left";if(v==="down"||v==="right"){s[u]=g(n(s[u])-x);r[u]="+="+x+"px"}else{s[u]=g(n(s[u])+x);r[u]="-="+x+"px"}}if(t==="none"){q._afterZoomIn()}else{q.wrap.css(s).animate(r,{duration:w.nextSpeed,easing:w.nextEasing,complete:q._afterZoomIn})}},changeOut:function(){var t=q.previous,s=t.prevEffect,r={opacity:0.1},u=q.direction,v=200;if(s==="elastic"){r[u==="down"||u==="up"?"top":"left"]=(u==="up"||u==="left"?"-":"+")+"="+v+"px"}t.wrap.animate(r,{duration:s==="none"?0:t.prevSpeed,easing:t.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}};q.helpers.overlay={defaults:{closeClick:true,speedOut:200,showEarly:true,css:{},locked:!f,fixed:true},overlay:null,fixed:false,el:i("html"),create:function(s){var r;s=i.extend({},this.defaults,s);if(this.overlay){this.close()}r=q.coming?q.coming.parent:s.parent;this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(r&&r.length?r:"body");this.fixed=false;if(s.fixed&&q.defaults.fixed){this.overlay.addClass("fancybox-overlay-fixed");this.fixed=true}},open:function(s){var r=this;s=i.extend({},this.defaults,s);if(this.overlay){this.overlay.unbind(".overlay").width("auto").height("auto")}else{this.create(s)}if(!this.fixed){d.bind("resize.overlay",i.proxy(this.update,this));this.update()}if(s.closeClick){this.overlay.bind("click.overlay",function(t){if(i(t.target).hasClass("fancybox-overlay")){if(q.isActive){q.close()}else{r.close()}return false}})}this.overlay.css(s.css).show()},close:function(){d.unbind("resize.overlay");if(this.el.hasClass("fancybox-lock")){i(".fancybox-margin").removeClass("fancybox-margin");this.el.removeClass("fancybox-lock");d.scrollTop(this.scrollV).scrollLeft(this.scrollH)}i(".fancybox-overlay").remove().hide();i.extend(this,{overlay:null,fixed:false})},update:function(){var s="100%",r;this.overlay.width(s).height("100%");if(k){r=Math.max(o.documentElement.offsetWidth,o.body.offsetWidth);if(a.width()>r){s=a.width()}}else{if(a.width()>d.width()){s=a.width()}}this.overlay.width(s).height(a.height())},onReady:function(s,t){var r=this.overlay;i(".fancybox-overlay").stop(true,true);if(!r){this.create(s)}if(s.locked&&this.fixed&&t.fixed){t.locked=this.overlay.append(t.wrap);t.fixed=false}if(s.showEarly===true){this.beforeShow.apply(this,arguments)}},beforeShow:function(r,s){if(s.locked&&!this.el.hasClass("fancybox-lock")){if(this.fixPosition!==false){i("*").filter(function(){return(i(this).css("position")==="fixed"&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap"))}).addClass("fancybox-margin")}this.el.addClass("fancybox-margin");this.scrollV=d.scrollTop();this.scrollH=d.scrollLeft();this.el.addClass("fancybox-lock");d.scrollTop(this.scrollV).scrollLeft(this.scrollH)}this.open(r)},onUpdate:function(){if(!this.fixed){this.update()}},afterClose:function(r){if(this.overlay&&!q.coming){this.overlay.fadeOut(r.speedOut,i.proxy(this.close,this))}}};q.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(s){var u=q.current,w=u.title,r=s.type,v,t;if(i.isFunction(w)){w=w.call(u.element,u)}if(!b(w)||i.trim(w)===""){return}v=i('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+w+"</div>");switch(r){case"inside":t=q.skin;break;case"outside":t=q.wrap;break;case"over":t=q.inner;break;default:t=q.skin;v.appendTo("body");if(k){v.width(v.width())}v.wrapInner('<span class="child"></span>');q.current.margin[2]+=Math.abs(n(v.css("margin-bottom")));break}v[(s.position==="top"?"prependTo":"appendTo")](t)}};i.fn.fancybox=function(t){var s,u=i(this),r=this.selector||"",v=function(z){var y=i(this).blur(),w=s,x,A;if(!(z.ctrlKey||z.altKey||z.shiftKey||z.metaKey)&&!y.is(".fancybox-wrap")){x=t.groupAttr||"data-fancybox-group";A=y.attr(x);if(!A){x="rel";A=y.get(0)[x]}if(A&&A!==""&&A!=="nofollow"){y=r.length?i(r):u;y=y.filter("["+x+'="'+A+'"]');w=y.index(this)}t.index=w;if(q.open(y,t)!==false){z.preventDefault()}}};t=t||{};s=t.index||0;if(!r||t.live===false){u.off("click.fb-start").on("click.fb-start",v)}else{a.undelegate(r,"click.fb-start").delegate(r+":not('.fancybox-item, .fancybox-nav')","click.fb-start",v)}this.filter("[data-fancybox-start=1]").trigger("click");return this};a.ready(function(){var s,r;if(i.scrollbarWidth===e){i.scrollbarWidth=function(){var u=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),v=u.children(),t=v.innerWidth()-v.height(99).innerWidth();u.remove();return t}}if(i.support.fixedPosition===e){i.support.fixedPosition=(function(){var u=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=(u[0].offsetTop===20||u[0].offsetTop===15);u.remove();return t}())}i.extend(q.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")});s=i(l).width();p.addClass("fancybox-lock-test");r=i(l).width();p.removeClass("fancybox-lock-test");i("<style type='text/css'>.fancybox-margin{margin-right:"+(r-s)+"px;}</style>").appendTo("head")})}(window,document,jQuery));(function(){var a;a=jQuery;a.fn.extend({eqHeight:function(b){return this.each(function(){var d,c,e;d=a(this).find(b);if(d.length===0){d=a(this).children(b)}if(d.length===0){return}e=function(){var f,g;f=a(".eqHeight_row");g=0;f.each(function(){if(a(this).height()>g){return g=a(this).height()}});f.height(g);return a(".eqHeight_row").removeClass("eqHeight_row")};c=function(){var f;d.height("auto");f=d.first().position().top;d.each(function(){var g;g=a(this).position().top;if(g!==f){e();f=a(this).position().top}return a(this).addClass("eqHeight_row")});return e()};a(window).on("load",c);return a(window).on("resize",c)})}})}).call(this);(function(a,b){if(typeof define==="function"&&define.amd){define(b)}else{if(typeof exports==="object"){module.exports=b(require,exports,module)}else{a.CountUp=b()}}}(this,function(c,b,d){var a=function(l,f,m,i,k,r){var q=this;q.version=function(){return"1.9.3"};q.options={useEasing:true,useGrouping:true,separator:",",decimal:".",easingFn:g,formattingFn:h,prefix:"",suffix:"",numerals:[]};if(r&&typeof r==="object"){for(var o in q.options){if(r.hasOwnProperty(o)&&r[o]!==null){q.options[o]=r[o]}}}if(q.options.separator===""){q.options.useGrouping=false}else{q.options.separator=""+q.options.separator}var e=0;var p=["webkit","moz","ms","o"];for(var n=0;n<p.length&&!window.requestAnimationFrame;++n){window.requestAnimationFrame=window[p[n]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[p[n]+"CancelAnimationFrame"]||window[p[n]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(w,t){var s=new Date().getTime();var u=Math.max(0,16-(s-e));var v=window.setTimeout(function(){w(s+u)},u);e=s+u;return v}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(s){clearTimeout(s)}}function h(y){var A=(y<0),t,w,v,u,z,s;y=Math.abs(y).toFixed(q.decimals);y+="";t=y.split(".");w=t[0];v=t.length>1?q.options.decimal+t[1]:"";if(q.options.useGrouping){u="";for(z=0,s=w.length;z<s;++z){if(z!==0&&((z%3)===0)){u=q.options.separator+u}u=w[s-z-1]+u}w=u}if(q.options.numerals.length){w=w.replace(/[0-9]/g,function(x){return q.options.numerals[+x]});v=v.replace(/[0-9]/g,function(x){return q.options.numerals[+x]})}return(A?"-":"")+q.options.prefix+w+v+q.options.suffix}function g(u,s,w,v){return w*(-Math.pow(2,-10*u/v)+1)*1024/1023+s}function j(s){return(typeof s==="number"&&!isNaN(s))}q.initialize=function(){if(q.initialized){return true}q.error="";q.d=(typeof l==="string")?document.getElementById(l):l;if(!q.d){q.error="[CountUp] target is null or undefined";return false}q.startVal=Number(f);q.endVal=Number(m);if(j(q.startVal)&&j(q.endVal)){q.decimals=Math.max(0,i||0);q.dec=Math.pow(10,q.decimals);q.duration=Number(k)*1000||2000;q.countDown=(q.startVal>q.endVal);q.frameVal=q.startVal;q.initialized=true;return true}else{q.error="[CountUp] startVal ("+f+") or endVal ("+m+") is not a number";return false}};q.printValue=function(t){var s=q.options.formattingFn(t);if(q.d.tagName==="INPUT"){this.d.value=s}else{if(q.d.tagName==="text"||q.d.tagName==="tspan"){this.d.textContent=s}else{this.d.innerHTML=s}}};q.count=function(t){if(!q.startTime){q.startTime=t}q.timestamp=t;var s=t-q.startTime;q.remaining=q.duration-s;if(q.options.useEasing){if(q.countDown){q.frameVal=q.startVal-q.options.easingFn(s,0,q.startVal-q.endVal,q.duration)}else{q.frameVal=q.options.easingFn(s,q.startVal,q.endVal-q.startVal,q.duration)}}else{if(q.countDown){q.frameVal=q.startVal-((q.startVal-q.endVal)*(s/q.duration))}else{q.frameVal=q.startVal+(q.endVal-q.startVal)*(s/q.duration)}}if(q.countDown){q.frameVal=(q.frameVal<q.endVal)?q.endVal:q.frameVal}else{q.frameVal=(q.frameVal>q.endVal)?q.endVal:q.frameVal}q.frameVal=Math.round(q.frameVal*q.dec)/q.dec;q.printValue(q.frameVal);if(s<q.duration){q.rAF=requestAnimationFrame(q.count)}else{if(q.callback){q.callback()}}};q.start=function(s){if(!q.initialize()){return}q.callback=s;q.rAF=requestAnimationFrame(q.count)};q.pauseResume=function(){if(!q.paused){q.paused=true;cancelAnimationFrame(q.rAF)}else{q.paused=false;delete q.startTime;q.duration=q.remaining;q.startVal=q.frameVal;requestAnimationFrame(q.count)}};q.reset=function(){q.paused=false;delete q.startTime;q.initialized=false;if(q.initialize()){cancelAnimationFrame(q.rAF);q.printValue(q.startVal)}};q.update=function(s){if(!q.initialize()){return}s=Number(s);if(!j(s)){q.error="[CountUp] update() - new endVal is not a number: "+s;return}q.error="";if(s===q.frameVal){return}cancelAnimationFrame(q.rAF);q.paused=false;delete q.startTime;q.startVal=q.frameVal;q.endVal=s;q.countDown=(q.startVal>q.endVal);q.rAF=requestAnimationFrame(q.count)};if(q.initialize()){q.printValue(q.startVal)}};return a}));
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
(function(){var b=0;var c={};function a(d){if(!d){throw new Error("No options passed to Waypoint constructor")}if(!d.element){throw new Error("No element option passed to Waypoint constructor")}if(!d.handler){throw new Error("No handler option passed to Waypoint constructor")}this.key="waypoint-"+b;this.options=a.Adapter.extend({},a.defaults,d);this.element=this.options.element;this.adapter=new a.Adapter(this.element);this.callback=d.handler;this.axis=this.options.horizontal?"horizontal":"vertical";this.enabled=this.options.enabled;this.triggerPoint=null;this.group=a.Group.findOrCreate({name:this.options.group,axis:this.axis});this.context=a.Context.findOrCreateByElement(this.options.context);if(a.offsetAliases[this.options.offset]){this.options.offset=a.offsetAliases[this.options.offset]}this.group.add(this);this.context.add(this);c[this.key]=this;b+=1}a.prototype.queueTrigger=function(d){this.group.queueTrigger(this,d)};a.prototype.trigger=function(d){if(!this.enabled){return}if(this.callback){this.callback.apply(this,d)}};a.prototype.destroy=function(){this.context.remove(this);this.group.remove(this);delete c[this.key]};a.prototype.disable=function(){this.enabled=false;return this};a.prototype.enable=function(){this.context.refresh();this.enabled=true;return this};a.prototype.next=function(){return this.group.next(this)};a.prototype.previous=function(){return this.group.previous(this)};a.invokeAll=function(h){var g=[];for(var e in c){g.push(c[e])}for(var f=0,d=g.length;f<d;f++){g[f][h]()}};a.destroyAll=function(){a.invokeAll("destroy")};a.disableAll=function(){a.invokeAll("disable")};a.enableAll=function(){a.invokeAll("enable")};a.refreshAll=function(){a.Context.refreshAll()};a.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight};a.viewportWidth=function(){return document.documentElement.clientWidth};a.adapters=[];a.defaults={context:window,continuous:true,enabled:true,group:"default",horizontal:false,offset:0};a.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}};window.Waypoint=a}());(function(){function d(g){window.setTimeout(g,1000/60)}var c=0;var f={};var b=window.Waypoint;var e=window.onload;function a(g){this.element=g;this.Adapter=b.Adapter;this.adapter=new this.Adapter(g);this.key="waypoint-context-"+c;this.didScroll=false;this.didResize=false;this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()};this.waypoints={vertical:{},horizontal:{}};g.waypointContextKey=this.key;f[g.waypointContextKey]=this;c+=1;this.createThrottledScrollHandler();this.createThrottledResizeHandler()}a.prototype.add=function(g){var h=g.options.horizontal?"horizontal":"vertical";this.waypoints[h][g.key]=g;this.refresh()};a.prototype.checkEmpty=function(){var g=this.Adapter.isEmptyObject(this.waypoints.horizontal);var h=this.Adapter.isEmptyObject(this.waypoints.vertical);if(g&&h){this.adapter.off(".waypoints");delete f[this.key]}};a.prototype.createThrottledResizeHandler=function(){var g=this;function h(){g.handleResize();g.didResize=false}this.adapter.on("resize.waypoints",function(){if(!g.didResize){g.didResize=true;b.requestAnimationFrame(h)}})};a.prototype.createThrottledScrollHandler=function(){var g=this;function h(){g.handleScroll();g.didScroll=false}this.adapter.on("scroll.waypoints",function(){if(!g.didScroll||b.isTouch){g.didScroll=true;b.requestAnimationFrame(h)}})};a.prototype.handleResize=function(){b.Context.refreshAll()};a.prototype.handleScroll=function(){var n={};var m={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var h in m){var j=m[h];var r=j.newScroll>j.oldScroll;var p=r?j.forward:j.backward;for(var l in this.waypoints[h]){var k=this.waypoints[h][l];var o=j.oldScroll<k.triggerPoint;var i=j.newScroll>=k.triggerPoint;var g=o&&i;var q=!o&&!i;if(g||q){k.queueTrigger(p);n[k.group.id]=k.group}}}for(var s in n){n[s].flushTriggers()}this.oldScroll={x:m.horizontal.newScroll,y:m.vertical.newScroll}};a.prototype.innerHeight=function(){if(this.element==this.element.window){return b.viewportHeight()}return this.adapter.innerHeight()};a.prototype.remove=function(g){delete this.waypoints[g.axis][g.key];this.checkEmpty()};a.prototype.innerWidth=function(){if(this.element==this.element.window){return b.viewportWidth()}return this.adapter.innerWidth()};a.prototype.destroy=function(){var l=[];for(var k in this.waypoints){for(var h in this.waypoints[k]){l.push(this.waypoints[k][h])}}for(var j=0,g=l.length;j<g;j++){l[j].destroy()}};a.prototype.refresh=function(){var i=this.element==this.element.window;var p=i?undefined:this.adapter.offset();var s={};var r;this.handleScroll();r={horizontal:{contextOffset:i?0:p.left,contextScroll:i?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:i?0:p.top,contextScroll:i?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var h in r){var j=r[h];for(var m in this.waypoints[h]){var k=this.waypoints[h][m];var v=k.options.offset;var w=k.triggerPoint;var g=0;var u=w==null;var t,q,o;var l,n;if(k.element!==k.element.window){g=k.adapter.offset()[j.offsetProp]}if(typeof v==="function"){v=v.apply(k)}else{if(typeof v==="string"){v=parseFloat(v);if(k.options.offset.indexOf("%")>-1){v=Math.ceil(j.contextDimension*v/100)}}}t=j.contextScroll-j.contextOffset;k.triggerPoint=g+t-v;q=w<j.oldScroll;o=k.triggerPoint>=j.oldScroll;l=q&&o;n=!q&&!o;if(!u&&l){k.queueTrigger(j.backward);s[k.group.id]=k.group}else{if(!u&&n){k.queueTrigger(j.forward);s[k.group.id]=k.group}else{if(u&&j.oldScroll>=k.triggerPoint){k.queueTrigger(j.forward);s[k.group.id]=k.group}}}}}b.requestAnimationFrame(function(){for(var x in s){s[x].flushTriggers()}});return this};a.findOrCreateByElement=function(g){return a.findByElement(g)||new a(g)};a.refreshAll=function(){for(var g in f){f[g].refresh()}};a.findByElement=function(g){return f[g.waypointContextKey]};window.onload=function(){if(e){e()}a.refreshAll()};b.requestAnimationFrame=function(h){var g=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||d;g.call(window,h)};b.Context=a}());(function(){function e(g,f){return g.triggerPoint-f.triggerPoint}function d(g,f){return f.triggerPoint-g.triggerPoint}var a={vertical:{},horizontal:{}};var b=window.Waypoint;function c(f){this.name=f.name;this.axis=f.axis;this.id=this.name+"-"+this.axis;this.waypoints=[];this.clearTriggerQueues();a[this.axis][this.name]=this}c.prototype.add=function(f){this.waypoints.push(f)};c.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}};c.prototype.flushTriggers=function(){for(var k in this.triggerQueues){var l=this.triggerQueues[k];var h=k==="up"||k==="left";l.sort(h?d:e);for(var j=0,g=l.length;j<g;j+=1){var f=l[j];if(f.options.continuous||j===l.length-1){f.trigger([k])}}}this.clearTriggerQueues()};c.prototype.next=function(f){this.waypoints.sort(e);var g=b.Adapter.inArray(f,this.waypoints);var h=g===this.waypoints.length-1;return h?null:this.waypoints[g+1]};c.prototype.previous=function(f){this.waypoints.sort(e);var g=b.Adapter.inArray(f,this.waypoints);return g?this.waypoints[g-1]:null};c.prototype.queueTrigger=function(f,g){this.triggerQueues[g].push(f)};c.prototype.remove=function(f){var g=b.Adapter.inArray(f,this.waypoints);if(g>-1){this.waypoints.splice(g,1)}};c.prototype.first=function(){return this.waypoints[0]};c.prototype.last=function(){return this.waypoints[this.waypoints.length-1]};c.findOrCreate=function(f){return a[f.axis][f.name]||new c(f)};b.Group=c}());(function(){var c=window.jQuery;var b=window.Waypoint;function a(d){this.$element=c(d)}c.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(d,e){a.prototype[e]=function(){var f=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,f)}});c.each(["extend","inArray","isEmptyObject"],function(d,e){a[e]=c[e]});b.adapters.push({name:"jquery",Adapter:a});b.Adapter=a}());(function(){var a=window.Waypoint;function b(c){return function(){var e=[];var d=arguments[0];if(c.isFunction(arguments[0])){d=c.extend({},arguments[1]);d.handler=arguments[0]}this.each(function(){var f=c.extend({},d,{element:this});if(typeof f.context==="string"){f.context=c(this).closest(f.context)[0]}e.push(new a(f))});return e}}if(window.jQuery){window.jQuery.fn.waypoint=b(window.jQuery)}if(window.Zepto){window.Zepto.fn.waypoint=b(window.Zepto)}}());(function(d,b,f){var c={filterId:0},e=f("body");var a=function(q,t){var m={intensity:5,forceSVGUrl:false,animationOptions:{duration:1000,easing:"linear"}},u=f.extend(m,t),g=" -webkit- -moz- -o- -ms- ".split(" "),j={},i=function(x){if(j[x]||j[x]===""){return j[x]+x}var y=b.createElement("div");var w=["","Moz","Webkit","O","ms","Khtml"];for(var v in w){if(typeof y.style[w[v]+x]!=="undefined"){j[x]=w[v];return w[v]+x}}return x.toLowerCase()},s={cssfilters:function(){var v=b.createElement("div");v.style.cssText=g.join("filter:blur(2px); ");return !!v.style.length&&((b.documentMode===undefined||b.documentMode>9))}(),svgfilters:function(){var v=false;try{v=typeof SVGFEColorMatrixElement!==undefined&&SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE==2}catch(w){}return v}()},r=false,h=i("Filter"),o,n,l,p=function(v){return b.createElementNS("http://www.w3.org/2000/svg",v)},k=function(){var v=p("svg"),w=p("filter");o=p("feGaussianBlur");v.setAttribute("style","position:absolute");v.setAttribute("width","0");v.setAttribute("height","0");w.setAttribute("id","blur-effect-id-"+c.filterId);w.appendChild(o);v.appendChild(w);e.append(v)};this.$elm=q instanceof f?q:f(q);this.init=function(){if(s.svgfilters){k()}n=c.filterId;c.filterId++;return this};this.blur=function(){var v,w=d.location,x=u.forceSVGUrl?w.protocol+"//"+w.host+w.pathname+w.search:"";if(s.cssfilters){v="blur("+u.intensity+"px)"}else{if(s.svgfilters){o.setAttribute("stdDeviation",u.intensity);v="url("+x+"#blur-effect-id-"+n+")"}else{v="progid:DXImageTransform.Microsoft.Blur(pixelradius="+u.intensity+")"}}this.$elm[0].style[h]=v;r=true;return this};this.animate=function(w,v){if(typeof w!=="number"){throw (typeof w+" is not a valid number to animate the blur")}else{if(w<0){throw ("I can animate only positive numbers")}}var x=new f.Deferred();if(l){l.stop(true,true)}l=new f.Animation(u,{intensity:w},f.extend(u.animationOptions,v)).progress(f.proxy(this.blur,this)).done(x.resolve);return x.promise()};this.unblur=function(){this.$elm.css(h,"none");r=false;return this};this.toggleblur=function(){if(r){this.unblur()}else{this.blur()}return this};this.destroy=function(){if(s.svgfilters){f("filter#blur-effect-id-"+n).parent().remove()}this.unblur();for(var v in this){delete this[v]}return this};return this.init()};f.fn.Vague=function(g){return new a(this,g)}}(window,document,jQuery));$(document).ready(function(){var h=$(".header-single-banner, .header-large-banner, .header-primary-banner");var e=$(".header-large-banner");var g=$(".header-primary-banner");var a=$(window).height();var c=$("header");var b=$(".ask-group");var i=$("#head-search");setTimeout(function(){b.addClass("in");i.addClass("in")},150);window.headerVars={MOBILEWIDTH:767,MAXHEIGHT:1200,MINHEIGHT:500,setHeaderImageHeight:function(){if(h.length==0){return}var j=a;j=Math.max(Math.min(j,headerVars.MAXHEIGHT),headerVars.MINHEIGHT);var k=h.offset().top;h.css({height:j-c.height()});headerImageHeight=h.height();e.css({height:j-k});headerImageHeight=e.height();g.css({height:450})}};headerVars.setHeaderImageHeight();var f=h.css("background-image");var d=$(".ask-group");d.attr("style","background-size: cover; background-repeat: no-repeat; background-image:"+f)});$(document).ready(function(){var B=220;var p=80;var e=10;var y=$("header");var g=$(".header-single-banner");var q=$(".explore-invite");var b=$(".global-header");var u=$(".alert-banner");var s=$(".ask-group");var z=$("#askGroup");var r=$("#head-search");var w=$("#main-content");var v=b.innerHeight();var m=$(window).height();var A=$(window).width();var t=$(document).scrollTop();var h=l();a();r.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){a()});function a(){window.setTimeout(function(){if(r.hasClass("active")||!b.hasClass("fixed")){return}if(t>=B){return}var D=r.get(0).getBoundingClientRect();var C=D.top+D.height+e;z.css("top",C);z.trigger("cagov.askgroup.update")},0)}var n=$('<span class="return-top"/>').appendTo(".main-content");o();k();(function(C){C.fn.customScrollTop=function D(){return this.each(function(){$el=C(this);$el.on("click",function(){C("html,body").animate({scrollTop:0},400,function(){C(window).scroll()});return})})}}(jQuery));$('[href="#skip-to-content"]').customScrollTop();n.customScrollTop();if(y.hasClass("fixed")){$("#nav-item-search").customScrollTop()}c();u.on("closed.bs.alert",function(){v=b.innerHeight();c();a()});function o(){if(!y.hasClass("fixed")){return}$(window).on("resize",function(){m=$(window).height();A=$(window).width();v=b.innerHeight();h=l();if(A>headerVars.MOBILEWIDTH){d();a()}else{f()}a()})}function k(){var C;if(y.hasClass("fixed")){C=function(){if(A<headerVars.MOBILEWIDTH){return}i();x()}}else{C=function(){j()}}$(window).on("scroll",function(){t=$(document).scrollTop();C();j()});C()}function x(){if(r.hasClass("active")){s.addClass("fixed-hide");return}}function i(){if(t>=p){s.addClass("fixed-hide");r.addClass("fixed-hide")}else{s.removeClass("fixed-hide");r.removeClass("fixed-hide")}if(t>=B){y.addClass("compact")}else{if(y.hasClass("compact")){y.removeClass("compact")}}}function j(){if(t>=B){n.addClass("is-visible")}else{n.removeClass("is-visible")}}function l(){if(!q.length||!z.length){return 0}return r.height()+z.height()}function c(){if(y.hasClass("fixed")&&A>headerVars.MOBILEWIDTH){d()}else{f()}}function d(){var D=10;y.addClass("fixed");headerVars.setHeaderImageHeight();if(g.length){var C=g.height();C=Math.max(Math.min(C,headerVars.MAXHEIGHT),headerVars.MINHEIGHT);g.css({height:C+v+D})}else{w.css({"padding-top":Math.max(v,129)})}if($(".ask-group").length>0){w.addClass("print-p-t");w.css({"padding-top":0});$(".header-slideshow-banner, .header-primary-banner").css({"margin-top":129})}}function f(){y.removeClass("fixed");g.css({top:"","margin-bottom":""});w.css({"padding-top":""});z.css("top","")}});var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler)},teardown:function(){$(this).off("resize",$special.handler)},handler:function(e,a){var d=this,c=arguments,b=function(){e.type="debouncedresize";$event.dispatch.apply(d,c)};if(resizeTimeout){clearTimeout(resizeTimeout)}a?b():resizeTimeout=setTimeout(b,$special.threshold)},threshold:250};if(!Function.prototype.bind){Function.prototype.bind=function(a){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")}var e=Array.prototype.slice.call(arguments,1),d=this,b=function(){},c=function(){return d.apply(this instanceof b?this:a,e.concat(Array.prototype.slice.call(arguments)))};if(this.prototype){b.prototype=this.prototype}c.prototype=new b();return c}}function addGAToDownloadLinks(){if(document.getElementsByTagName){var f=document.getElementsByTagName("a");for(var a=0;a<f.length;a++){try{if(f[a].protocol=="mailto:"){startListening(f[a],"mousedown",trackMailto)}else{if(f[a].protocol=="tel:"){startListening(f[a],"mousedown",trackTelto)}else{if(f[a].hostname==location.host){var d=f[a].pathname+f[a].search;var b=d.match(/\.(?:doc|docx|eps|jpg|png|svg|xls|xlsx|ppt|pptx|pdf|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3)($|\&|\?)/);if(b){startListening(f[a],"mousedown",trackExternalLinks)}}else{if(!f[a].href.match(/^javascript:/)){startListening(f[a],"mousedown",trackExternalLinks)}}}}}catch(c){continue}}}}function startListening(b,c,a){if(b.addEventListener){b.addEventListener(c,a,false)}else{if(b.attachEvent){b.attachEvent("on"+c,a)}}}function trackMailto(c){var b=(c.srcElement)?c.srcElement.href:this.href;var a="/mailto/"+b.substring(7);_gaq.push(["_trackPageview",a]);_gaq.push(["b._trackPageview",a])}function trackTelto(c){var a=(c.srcElement)?c.srcElement.href:this.href;var b="/telto/"+a.substring(4);_gaq.push(["_trackPageview",b]);_gaq.push(["b._trackPageview",b])}function trackExternalLinks(c){var a=(c.srcElement)?c.srcElement:this;while(a.tagName!="A"){a=a.parentNode}var b=(a.pathname.charAt(0)=="/")?a.pathname:"/"+a.pathname;if(a.search&&a.pathname.indexOf(a.search)==-1){b+=a.search}if(a.hostname!=location.host){b="/external/"+a.hostname+b}_gaq.push(["_trackPageview",b]);_gaq.push(["b._trackPageview",b])}$(document).ready(function(){if($(".top-level-nav").css("display")=="table"){$("body").addClass("no-flex")}var f=$("#navigation.main-navigation"),k=f.find(".nav-item"),i=k.has(".sub-nav"),m=f.find(".sub-nav"),q=f.hasClass("megadropdown"),h=f.hasClass("dropdown"),r=f.hasClass("singleLevel"),j=false;mobileWidth=767,setActiveLinkByFolder=f.hasClass("auto-highlight");var l=100,n;var d=Modernizr.touch,a=(("ontouchstart" in window)||(navigator.MaxTouchPoints>0)||(navigator.msMaxTouchPoints>0));var g=false;$(window).on("mousemove",function(){if(g){touchmode=false}});var e="",b=location.href.split("/");if(typeof defaultActiveLink!="undefined"){e=new RegExp("^"+defaultActiveLink+"$","i")}k.each(function(){var u=$(this),t=u.find(".first-level-link");if(e){if(t.text().match(e)){u.addClass("active")}}else{if(setActiveLinkByFolder&&t.attr("href")){var s=t[0].href.split("/");if((s.length>4)&&(b[3]==s[3])){u.addClass("active")}}}});i.each(function(){var s=$(this).find(".second-level-nav > li").length;if(s<=2){$(this).find(".sub-nav").addClass("with-few-items")}});if((q||h)&&(d||!a)){if(d){$(document).on("touchstart.ca.catchNav",function(s){g=false},false);i.each(function(){var v=$(this),u=v.find(".first-level-link"),s=u[0],t=v.find(".sub-nav"),w=t.find("a");u.data("link",u.attr("href")).removeAttr;v.on("touchstart.ca.propagation",function(x){x.stopPropagation()});v.on("touchstart.ca.navclose",function(x){g=true;if(t.is(":visible")||o()){}else{x.preventDefault();x.stopPropagation();t.fadeIn(1000)}},false)})}}else{if((q||h)&&a){$(document).on("click.ca.catchNav",function(s){if(!f.is(s.target)&&f.has(s.target).length===0){}});i.each(function(){var v=$(this),u=v.find(".first-level-link"),s=u[0],t=v.find(".sub-nav"),w=t.find("a");u.data("link",u.attr("href"));v.on("click.ca.propagation",function(x){x.stopPropagation()});u.on("click.ca.navclose",function(x){if(t.is(":visible")||o()){}else{x.preventDefault();x.stopPropagation();t.fadeIn(1000)}})})}}function o(){return($(".global-header .mobile-controls").css("display")!=="none")}if(!r){i.each(function(){$(this).find(".first-level-link").addClass("has-sub");var t=$(this).find(".first-level-link").text();var s=$('<button class="mobile-control toggle-sub-nav closed"><div class="ca-gov-icon-arrow-next rotate" aria-hidden="true"></div><span class="sr-only">'+t+" sub menu toggle</span></button>");$(this).find(".sub-nav").before(s)})}$("#navigation").addClass("mobile-closed");$(".sub-nav").addClass("subnav-closed");$(".toggle-menu").on("click",function(){if($("#navigation").hasClass("mobile-closed")){$(this).addClass("open");$(this).attr("aria-expanded","true");$("#navigation").slideDownTransition()}else{$(this).removeClass("open");$(this).attr("aria-expanded","false");$("#navigation").slideUpTransition()}$(".search-container").removeClass("active")});if(a){$(".toggle-sub-nav").on("touchstart",function(){var s=$(this).parent().find(".sub-nav");if($(this).hasClass("closed")){$(this).removeClass("closed").addClass("open");$(this).find(".rotate").addClass("down");$(s).slideDownTransitionSub()}else{$(this).removeClass("open").addClass("closed");$(this).find(".rotate").removeClass("down");$(s).slideUpTransitionSub()}})}else{$(".toggle-sub-nav").on("click",function(){var s=$(this).parent().find(".sub-nav");if($(this).hasClass("closed")){$(this).removeClass("closed").addClass("open");$(this).find(".rotate").addClass("down");$(s).slideDownTransitionSub()}else{$(this).removeClass("open").addClass("closed");$(this).find(".rotate").removeClass("down");$(s).slideUpTransitionSub()}})}$(".rotate1").on("click",function(){$(this).toggleClass("down")});var p="focus",c="clickedFocus";$(".top-level-nav > li > a").on("mouseenter",function(){$(this).closest("ul").find("."+p).removeClass(p)}).on("mouseleave",function(){$("."+c).removeClass(c)});$(".top-level-nav > li > a").on("focus",function(s){$(this).closest("ul").find("."+p).removeClass(p);if(!$(this).parent().find(".toggle-sub-nav").hasClass("open")){$(this).parent().addClass(p)}}).on("mousedown",function(){if(!$(this).parent().find(".toggle-sub-nav").hasClass("open")){$(this).parent().addClass(c)}});$(".top-level-nav a").last().on("keydown",function(s){if(s.keyCode==9){$(".top-level-nav ."+p).removeClass(p)}});$(document).on("click",function(){$(".top-level-nav ."+p).removeClass(p)});$(".top-level-nav").on("click",function(s){s.stopPropagation()});if(o()){f.attr("aria-hidden","true");if(f.hasClass("mobile-closed")){$("#nav_list a").attr("tabindex","-1");$("#nav_list button").attr("tabindex","-1")}else{$("#nav_list a").removeAttr("tabindex");$("#nav_list button").removeAttr("tabindex")}}});(function(a){a.fn.slideUpTransition=function(){return this.each(function(){var b=a(this);b.css("max-height","0").addClass("mobile-closed").attr("aria-hidden","true");a(".first-level-link").attr("tabindex","-1");a(".top-level-nav li button").attr("tabindex","-1")})};a.fn.slideDownTransition=function(){return this.each(function(){var c=a(this);c.removeClass("mobile-closed");c.removeAttr("aria-hidden");a(".first-level-link").removeAttr("tabindex");a(".top-level-nav li button").removeAttr("tabindex");c.css("max-height","none");var b=c.outerHeight();c.css("max-height","0");setTimeout(function(){c.css({"max-height":b})},1)})}})(jQuery);(function(a){a.fn.slideUpTransitionSub=function(){return this.each(function(){var d=a(this);var c=d.outerHeight();var b=a("#navigation").outerHeight();var e=b-c;d.css("max-height","0");d.addClass("subnav-closed");d.attr("aria-expanded","false");d.attr("aria-hidden","true");d.find("a").attr("tabindex","-1");a("#navigation").css({"max-height":e})})};a.fn.slideDownTransitionSub=function(){return this.each(function(){var d=a(this);d.removeClass("subnav-closed");d.find("a").removeAttr("tabindex");d.css("max-height","none");var c=d.outerHeight();var b=a("#navigation").outerHeight();var e=c+b;d.css("max-height","0");setTimeout(function(){d.css({"max-height":c});d.attr("aria-expanded","true");d.attr("aria-hidden","false");a("#navigation").css({"max-height":e})},1)})}})(jQuery);(function(f,h,i){var g="accessibleMenu",e={navToggle:"#nav-toggle",navId:"#navigation",uuidPrefix:"accessible-menu",menuClass:"nav-menu",topNavItemClass:"nav-item",panelClass:"accessible-menu-panel",panelGroupClass:"accessible-menu-panel-group",hoverClass:"hover",focusClass:"focus",openClass:"open",openDelay:400,closeDelay:500},c={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38,keyMap:{48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",190:"."}};function b(l,k){this.element=l;this.settings=f.extend({},e,k);this._defaults=e;this._name=g;this.mouseTimeoutID=null;this.focusTimeoutID=null;this.mouseFocused=false;this.justFocused=false;this.init()}b.prototype=(function(){var k=0,t=1000,q="",r=typeof h.hasOwnProperty==="function"&&!!h.hasOwnProperty("ontouchstart"),l,u,x,v,z,w,n,A,m,o,y,p,s;l=function(B){return f(B).closest(":data(plugin_"+g+")").data("plugin_"+g)};u=function(B){B=f(B);var C=this.settings;if(!B.attr("id")){B.attr("id",C.uuidPrefix+"-"+new Date().getTime()+"-"+(++k))}};x=function(C,H){var J=f(C.target),I=this,F=this.settings,D=this.menu,E=J.closest("."+F.topNavItemClass),B=J.hasClass(F.panelClass)?J:J.closest("."+F.panelClass),G;s.call(this,true);if(H){E=D.find("."+F.topNavItemClass+" ."+F.openClass+":first").closest("."+F.topNavItemClass);if(!(E.is(C.relatedTarget)||E.has(C.relatedTarget).length>0)){if((C.type==="mouseout"||C.type==="focusout")&&E.has(i.activeElement).length>0){return}E.find("[aria-expanded]").attr("aria-expanded","false").removeClass(F.openClass).filter("."+F.panelClass).attr("aria-hidden","true");if((C.type==="keydown"&&C.keyCode===c.ESCAPE)||C.type==="DOMAttrModified"){G=E.find(":tabbable:first");setTimeout(function(){D.find("[aria-expanded]."+I.settings.panelClass).off("DOMAttrModified.accessible-menu");G.trigger("focus");I.justFocused=false},99)}}else{if(E.length===0){D.find("[aria-expanded=true]").attr("aria-expanded","false").removeClass(F.openClass).filter("."+F.panelClass).attr("aria-hidden","true")}}}else{clearTimeout(I.focusTimeoutID);E.siblings().find("[aria-expanded]").attr("aria-expanded","false").removeClass(F.openClass).filter("."+F.panelClass).attr("aria-hidden","true");E.find("[aria-expanded]").attr("aria-expanded","true").addClass(F.openClass).filter("."+F.panelClass).attr("aria-hidden","false");if(C.type==="mouseover"&&J.is(":tabbable")&&E.length===1&&B.length===0&&D.has(i.activeElement).length>0){J.trigger("focus");I.justFocused=false}s.call(I)}};v=function(D){var E=f(D.target).closest(":tabbable"),C=E.closest("."+this.settings.topNavItemClass),B=E.closest("."+this.settings.panelClass);if(C.length===1&&B.length===0&&C.find("."+this.settings.panelClass).length===1){if(!E.hasClass(this.settings.openClass)){D.preventDefault();D.stopPropagation();x.call(this,D);this.justFocused=false}else{if(this.justFocused){D.preventDefault();D.stopPropagation();this.justFocused=false}else{if(r){}}}}};z=function(B){if(f(B.target).closest(this.menu).length===0){B.preventDefault();B.stopPropagation();x.call(this,B,true)}};w=function(B){if(B.originalEvent.attrName==="aria-expanded"&&B.originalEvent.newValue==="false"&&f(B.target).hasClass(this.settings.openClass)){B.preventDefault();B.stopPropagation();x.call(this,B,true)}};n=function(C){clearTimeout(this.focusTimeoutID);var D=f(C.target),B=D.closest("."+this.settings.panelClass);D.addClass(this.settings.focusClass);this.justFocused=!this.mouseFocused;this.mouseFocused=false;if(this.panels.not(B).filter("."+this.settings.openClass).length){x.call(this,C)}};A=function(E){this.justFocused=false;var D=this,F=f(E.target),C=F.closest("."+this.settings.topNavItemClass),B=false;F.removeClass(this.settings.focusClass).off("click.accessible-menu");if(h.cvox){D.focusTimeoutID=setTimeout(function(){h.cvox.Api.getCurrentNode(function(G){if(C.has(G).length){clearTimeout(D.focusTimeoutID)}else{D.focusTimeoutID=setTimeout(function(I,J,H){x.call(I,J,H)},275,D,E,true)}})},25)}else{D.focusTimeoutID=setTimeout(function(){x.call(D,E,true)},300)}};m=function(Q){var J=(this.constructor===b)?this:l(this),T=J.settings,V=f(f(this).is("."+T.hoverClass+":tabbable")?this:Q.target),C=J.menu,H=J.topnavitems,N=V.closest("."+T.topNavItemClass),B=C.find(":tabbable"),L=V.hasClass(T.panelClass)?V:V.closest("."+T.panelClass),I=L.find("."+T.panelGroupClass),S=V.closest("."+T.panelGroupClass),O,E=Q.keyCode||Q.which,G,R,P,K,M=false,D=c.keyMap[Q.keyCode]||"",F,U=(N.length===1&&L.length===0);if(V.is("input:focus, select:focus, textarea:focus, button:focus")){return}if(V.is("."+T.hoverClass+":tabbable")){f("html").off("keydown.accessible-menu")}switch(E){case c.ESCAPE:x.call(J,Q,true);break;case c.DOWN:Q.preventDefault();if(U){x.call(J,Q);M=(N.find("."+T.panelClass+" :tabbable:first").trigger("focus").length===1)}else{M=(B.filter(":gt("+B.index(V)+"):first").trigger("focus").length===1)}if(!M&&h.opera&&opera.toString()==="[object Opera]"&&(Q.ctrlKey||Q.metaKey)){B=f(":tabbable");R=B.index(V);M=(f(":tabbable:gt("+f(":tabbable").index(V)+"):first").trigger("focus").length===1)}break;case c.UP:Q.preventDefault();if(U&&V.hasClass(T.openClass)){x.call(J,Q,true);O=H.filter(":lt("+H.index(N)+"):last");if(O.children("."+T.panelClass).length){M=(O.children().attr("aria-expanded","true").addClass(T.openClass).filter("."+T.panelClass).attr("aria-hidden","false").find(":tabbable:last").trigger("focus")===1)}}else{if(!U){M=(B.filter(":lt("+B.index(V)+"):last").trigger("focus").length===1)}}if(!M&&h.opera&&opera.toString()==="[object Opera]"&&(Q.ctrlKey||Q.metaKey)){B=f(":tabbable");R=B.index(V);M=(f(":tabbable:lt("+f(":tabbable").index(V)+"):first").trigger("focus").length===1)}break;case c.RIGHT:Q.preventDefault();if(U){M=(H.filter(":gt("+H.index(N)+"):first").find(":tabbable:first").trigger("focus").length===1)}else{if(I.length&&S.length){M=(I.filter(":gt("+I.index(S)+"):first").find(":tabbable:first").trigger("focus").length===1)}if(!M){M=(N.find(":tabbable:first").trigger("focus").length===1)}}break;case c.LEFT:Q.preventDefault();if(U){M=(H.filter(":lt("+H.index(N)+"):last").find(":tabbable:first").trigger("focus").length===1)}else{if(I.length&&S.length){M=(I.filter(":lt("+I.index(S)+"):last").find(":tabbable:first").trigger("focus").length===1)}if(!M){M=(N.find(":tabbable:first").trigger("focus").length===1)}}break;case c.TAB:R=B.index(V);if(Q.shiftKey&&U&&V.hasClass(T.openClass)){x.call(J,Q,true);O=H.filter(":lt("+H.index(N)+"):last");if(O.children("."+T.panelClass).length){M=O.children().attr("aria-expanded","true").addClass(T.openClass).filter("."+T.panelClass).attr("aria-hidden","false").find(":tabbable:last").trigger("focus")}}else{if(Q.shiftKey&&R>0){M=(B.filter(":lt("+R+"):last").trigger("focus").length===1)}else{if(!Q.shiftKey&&R<B.length-1){M=(B.filter(":gt("+R+"):first").trigger("focus").length===1)}else{if(h.opera&&opera.toString()==="[object Opera]"){B=f(":tabbable");R=B.index(V);if(Q.shiftKey){M=(f(":tabbable:lt("+f(":tabbable").index(V)+"):last").trigger("focus").length===1)}else{M=(f(":tabbable:gt("+f(":tabbable").index(V)+"):first").trigger("focus").length===1)}}}}}if(M){Q.preventDefault()}break;case c.SPACE:if(U){Q.preventDefault();v.call(J,Q)}else{return true}break;case c.ENTER:return true;break;default:clearTimeout(this.keydownTimeoutID);q+=D!==q?D:"";if(q.length===0){return}this.keydownTimeoutID=setTimeout(function(){q=""},t);if(U&&!V.hasClass(T.openClass)){B=B.filter(":not(."+T.panelClass+" :tabbable)")}else{B=N.find(":tabbable")}if(Q.shiftKey){B=f(B.get().reverse())}for(R=0;R<B.length;R++){P=B.eq(R);if(P.is(V)){G=(q.length===1)?R+1:R;break}}F=new RegExp("^"+q.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),"i");for(R=G;R<B.length;R++){P=B.eq(R);K=f.trim(P.text());if(F.test(K)){M=true;P.trigger("focus");break}}if(!M){for(R=0;R<G;R++){P=B.eq(R);K=f.trim(P.text());if(F.test(K)){P.trigger("focus");break}}}break}J.justFocused=false};o=function(B){if(f(B.target).is(this.settings.panelClass)||f(B.target).closest(":focusable").length){this.mouseFocused=true}clearTimeout(this.mouseTimeoutID);this.mouseTimeoutID=setTimeout(function(){clearTimeout(this.focusTimeoutID)},1)};y=function(C){clearTimeout(this.mouseTimeoutID);var B=this;if(f(h).width()>768){this.mouseTimeoutID=setTimeout(function(){f(C.target).addClass(B.settings.hoverClass);x.call(B,C);if(f(C.target).is(":tabbable")){f("html").on("keydown.accessible-menu",f.proxy(m,C.target))}},this.settings.openDelay)}};p=function(C){clearTimeout(this.mouseTimeoutID);var B=this;f(C.target).removeClass(B.settings.hoverClass);B.mouseTimeoutID=setTimeout(function(){x.call(B,C,true)},this.settings.closeDelay);if(f(C.target).is(":tabbable")){f("html").off("keydown.accessible-menu")}};s=function(B){var C=this.menu;if(B){f("html").off("mouseup.outside-accessible-menu, touchend.outside-accessible-menu, mspointerup.outside-accessible-menu,  pointerup.outside-accessible-menu");C.find("[aria-expanded]."+this.settings.panelClass).off("DOMAttrModified.accessible-menu")}else{f("html").on("mouseup.outside-accessible-menu, touchend.outside-accessible-menu, mspointerup.outside-accessible-menu,  pointerup.outside-accessible-menu",f.proxy(z,this));C.find("[aria-expanded=true]."+this.settings.panelClass).on("DOMAttrModified.accessible-menu",f.proxy(w,this))}};return{constructor:b,init:function(){var C=this.settings,E=f(this.element),D=E.children().first(),B=D.children();this.start(C,E,D,B)},start:function(C,F,E,B){var D=this;this.settings=C;this.menu=E;this.topnavitems=B;E.addClass(C.menuClass);B.each(function(I,H){var G,J;H=f(H);H.addClass(C.topNavItemClass);G=H.find(":tabbable:first");J=H.children(":not(:tabbable):last");u.call(D,G);if(J.length){u.call(D,J);G.attr({"aria-controls":J.attr("id"),"aria-expanded":false});J.attr({role:"region","aria-expanded":false,"aria-hidden":true}).addClass(C.panelClass).not("[aria-labelledby]").attr("aria-labelledby",G.attr("id"))}});this.panels=E.find("."+C.panelClass);E.on("focusin.accessible-menu",":focusable, ."+C.panelClass,f.proxy(n,this)).on("focusout.accessible-menu",":focusable, ."+C.panelClass,f.proxy(A,this)).on("keydown.accessible-menu",f.proxy(m,this)).on("mouseover.accessible-menu",f.proxy(y,this)).on("mouseout.accessible-menu",f.proxy(p,this)).on("mousedown.accessible-menu",f.proxy(o,this));if(r){E.on("touchstart.accessible-menu",f.proxy(v,this))}E.find("hr").attr("role","separator");if(f(i.activeElement).closest(E).length){f(i.activeElement).trigger("focusin.accessible-menu")}},getDefaults:function(){return this._defaults},getOption:function(B){return this.settings[B]},getAllOptions:function(){return this.settings},setOption:function(C,D,B){this.settings[C]=D;if(B){this.init()}}}}());f.fn[g]=function(k){return this.each(function(){if(!f.data(this,"plugin_"+g)){f.data(this,"plugin_"+g,new f.fn[g].accessibleMenu(this,k))}})};f.fn[g].accessibleMenu=b;function d(k){return f.expr.pseudos.visible(k)&&!f(k).parents().addBack().filter(function(){return f.css(this,"visibility")==="hidden"}).length}function j(m,k){var o,n,l,p=m.nodeName.toLowerCase();if("area"===p){o=m.parentNode;n=o.name;if(!m.href||!n||o.nodeName.toLowerCase()!=="map"){return false}l=f("img[usemap=#"+n+"]")[0];return !!l&&d(l)}return(/input|select|textarea|button|object/.test(p)?!m.disabled:"a"===p?m.href||k:k)&&d(m)}f.extend(f.expr.pseudos,{data:f.expr.createPseudo?f.expr.createPseudo(function(k){return function(l){return !!f.data(l,k)}}):function(m,l,k){return !!f.data(m,k[3])},focusable:function(k){return j(k,!isNaN(f.attr(k,"tabindex")))},tabbable:function(m){var k=f.attr(m,"tabindex"),l=isNaN(k);return(l||k>=0)&&j(m,!l)}});f(h).on("resize",function(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){return false}else{a()}});function a(){f(".sub-nav").removeClass("open");f(".sub-nav").removeClass("secondary-open");f(".sub-nav").attr("aria-expanded",false);f(".sub-nav").attr("aria-hidden",true);f(".first-level-link").removeClass("open");f(".first-level-link").removeClass("active");f(".first-level-link").attr("aria-expanded",false);f("#navigation").addClass("mobile-closed");if(f(h).width()<768){f("#navigation").css("max-height","0").attr("aria-hidden","true");f(".sub-nav").slideUpTransitionSub();f("#navigation").slideUpTransition();f(".rotate").removeClass("down");f("#nav_list a").attr("tabindex","-1");f("#nav_list button").attr("tabindex","-1")}else{f("#navigation").removeAttr("style aria-hidden");f(".sub-nav").removeAttr("style");f("#nav_list a").removeAttr("tabindex");f("#nav_list button").removeAttr("tabindex")}f(".toggle-sub-nav").removeClass("open");f(".toggle-sub-nav").addClass("closed");f(".nav-item").removeClass("active");f(".toggle-menu").attr("aria-expanded","false");f(".toggle-menu").removeClass("open");f(".toggle-sub-nav").removeClass("open")}}(jQuery,window,document));$("nav:first").accessibleMenu({navId:"#navigation",uuidPrefix:"accessible-menu",menuClass:"nav-menu",topNavItemClass:"nav-item",panelClass:"sub-nav",panelGroupClass:"sub-nav-group",hoverClass:"hover",focusClass:"focus",openClass:"open"});$(document).ready(function(){$("#navigation .mobile-controls").removeClass("nav-menu");$("#navigation .mobile-control a").removeAttr("aria-hidden aria-expanded role id").removeClass("sub-nav with-few-items subnav-closed");$("#navigation .mobile-control .sr-only").removeAttr("aria-hidden aria-expanded role id").removeClass("sub-nav with-few-items subnav-closed")});$(document).ready(function(){var a=$(".accordion-list").find(".description").hide().attr("aria-hidden","true");$(".accordion-list .toggle").attr("tabindex","0").attr("aria-expanded","false");$(".accordion-list .toggle").on("click",function(c){var b=$(this).next(".description");if(b.is(":visible")){b.slideUp("fast").removeClass("hide").attr("aria-hidden","true");$(this).parent("li").removeClass("open");$(this).attr("aria-expanded","false")}else{b.slideDown("fast").removeClass("hide").attr("aria-hidden","false");$(this).parent("li").addClass("open");$(this).attr("aria-expanded","true")}return false})});$(document).ready(function(){var a=new tabpanel("accordion",true)});function keyCodes(){this.tab=9;this.enter=13;this.esc=27;this.space=32;this.pageup=33;this.pagedown=34;this.end=35;this.home=36;this.left=37;this.up=38;this.right=39;this.down=40}function tabpanel(b,a){this.panel_id=b;this.accordian=a;this.$panel=$("#"+b);this.keys=new keyCodes();this.$tabs=this.$panel.find(".tab");this.$panels=this.$panel.children(".panel");this.bindHandlers();this.init()}tabpanel.prototype.init=function(){var a;this.$panels.attr("aria-hidden","true");this.$panels.hide();a=this.$tabs.filter(".selected");if(a==undefined){a=this.$tabs.first();a.addClass("selected")}this.$panel.find("#"+a.attr("aria-controls")).show().attr("aria-hidden","false")};tabpanel.prototype.switchTabs=function(b,a){b.removeClass("selected focus");b.attr("aria-selected","false");a.addClass("selected").attr("aria-selected","true");if(this.accordian==false){this.$panel.find("#"+b.attr("aria-controls")).hide().attr("aria-hidden","true");b.attr("aria-expanded","false");this.$panel.find("#"+a.attr("aria-controls")).show().attr("aria-hidden","false");a.attr("aria-expanded","true");this.$focusable.length=0;this.$panels.find(":focusable")}a.attr("tabindex","0");a.trigger("focus")};tabpanel.prototype.togglePanel=function(a){$panel=this.$panel.find("#"+a.attr("aria-controls"));if($panel.attr("aria-hidden")=="true"){$panel.attr("aria-hidden","false");$panel.slideDown(100);a.addClass("open");a.find("i").attr("class","ca-gov-icon-menu-toggle-open font-size-sm");a.attr("aria-expanded","true")}else{$panel.attr("aria-hidden","true");$panel.slideUp(100);a.removeClass("open");a.find("i").attr("class","ca-gov-icon-menu-toggle-closed font-size-sm");a.attr("aria-expanded","false")}};tabpanel.prototype.bindHandlers=function(){var a=this;this.$tabs.on("keydown",function(b){return a.handleTabKeyDown($(this),b)});this.$tabs.on("keypress",function(b){return a.handleTabKeyPress($(this),b)});this.$tabs.on("click",function(b){return a.handleTabClick($(this),b)});this.$tabs.on("focus",function(b){return a.handleTabFocus($(this),b)});this.$tabs.on("blur",function(b){return a.handleTabBlur($(this),b)});this.$panels.on("keydown",function(b){return a.handlePanelKeyDown($(this),b)});this.$panels.on("keypress",function(b){return a.handlePanelKeyPress($(this),b)});this.$panels.on("click",function(b){return a.handlePanelClick($(this),b)})};tabpanel.prototype.handleTabKeyDown=function(d,g){if(g.altKey){return true}switch(g.keyCode){case this.keys.enter:case this.keys.space:if(this.accordian==true){this.togglePanel(d);g.stopPropagation();return false}return true;case this.keys.left:case this.keys.up:var h=this;var c;var a;if(g.ctrlKey){}else{var f=this.$tabs.index(d);if(f==0){a=this.$tabs.last()}else{a=this.$tabs.eq(f-1)}this.switchTabs(d,a)}g.stopPropagation();return false;case this.keys.right:case this.keys.down:var h=this;var b=false;var a;var f=this.$tabs.index(d);if(f==this.$tabs.length-1){a=this.$tabs.first()}else{a=this.$tabs.eq(f+1)}this.switchTabs(d,a);g.stopPropagation();return false;case this.keys.home:this.switchTabs(d,this.$tabs.first());g.stopPropagation();return false;case this.keys.end:this.switchTabs(d,this.$tabs.last());g.stopPropagation();return false}};tabpanel.prototype.handleTabKeyPress=function(a,b){if(b.altKey){return true}switch(b.keyCode){case this.keys.enter:case this.keys.space:case this.keys.left:case this.keys.up:case this.keys.right:case this.keys.down:case this.keys.home:case this.keys.end:b.stopPropagation();return false;case this.keys.pageup:case this.keys.pagedown:if(!b.ctrlKey){return true}b.stopPropagation();return false}return true};tabpanel.prototype.handleTabClick=function(a,b){a.attr("tabindex","0").attr("aria-selected","true").addClass("selected");this.$tabs.not(a).attr("aria-selected","false").removeClass("selected");this.togglePanel(a);b.stopPropagation();return false};tabpanel.prototype.handleTabFocus=function(a,b){a.addClass("focus");return true};tabpanel.prototype.handleTabBlur=function(a,b){a.removeClass("focus");return true};tabpanel.prototype.handlePanelKeyDown=function(n,f){if(f.altKey){return true}switch(f.keyCode){case this.keys.tab:var h=n.find(":focusable");var c=h.index($(f.target));var b=this.$panels.index(n);var d=this.$panels.length;if(f.shiftKey){if(c==0&&b>0){for(var m=b-1;m>=0;m--){var g=this.$panels.eq(m);var a=$("#"+g.attr("aria-labelledby"));h.length=0;h=g.find(":focusable");if(h.length>0){h.last().trigger("focus");this.$tabs.attr("aria-selected","false").removeClass("selected");a.attr("aria-selected","true").addClass("selected");f.stopPropagation;return false}}}}else{if(b<d){if(c==h.length-1){for(var m=b+1;m<d;m++){var k=this.$panels.eq(m);var l=$("#"+k.attr("aria-labelledby"));h.length=0;h=k.find(":focusable");if(h.length>0){h.first().trigger("focus");this.$tabs.attr("aria-selected","false").removeClass("selected");l.attr("aria-selected","true").addClass("selected");f.stopPropagation;return false}}}}}break;case this.keys.left:case this.keys.up:if(!f.ctrlKey){return true}var j=$("#"+n.attr("aria-labelledby"));j.trigger("focus");f.stopPropagation();return false;case this.keys.pageup:var i;if(!f.ctrlKey){return true}var j=this.$tabs.filter(".selected");var c=this.$tabs.index(j);if(c==0){i=this.$tabs.last()}else{i=this.$tabs.eq(c-1)}this.switchTabs(j,i);f.stopPropagation();f.preventDefault();return false;case this.keys.pagedown:var i;if(!f.ctrlKey){return true}var j=$("#"+n.attr("aria-labelledby"));var c=this.$tabs.index(j);if(c==this.$tabs.length-1){i=this.$tabs.first()}else{i=this.$tabs.eq(c+1)}this.switchTabs(j,i);f.stopPropagation();f.preventDefault();return false}return true};tabpanel.prototype.handlePanelKeyPress=function(b,a){if(a.altKey){return true}if(a.ctrlKey&&(a.keyCode==this.keys.pageup||a.keyCode==this.keys.pagedown)){a.stopPropagation();a.preventDefault();return false}switch(a.keyCode){case this.keys.esc:a.stopPropagation();a.preventDefault();return false}return true};tabpanel.prototype.handlePanelClick=function(c,b){var a=$("#"+c.attr("aria-labelledby"));a.attr("tabindex","0").attr("aria-selected","true").addClass("selected");this.$tabs.not(a).attr("aria-selected","false").removeClass("selected");return true};$.extend($.expr.pseudos,{focusable:function(b){var c=b.nodeName.toLowerCase();var a=$(b).attr("tabindex");if(($(b)[(c=="area"?"parents":"closest")](":hidden").length)==true){return false}if(!isNaN(a)&&a<0){return false}if(/input|select|textarea|button|object/.test(c)==true){return !b.disabled}if((c=="a"||c=="area")==true){return(b.href.length>0)}return false}});$(document).ready(function(){var b=$(".accordion").find(".collapsed");var c=$(".accordion").find('a[data-toggle="collapse"]');var a=$('<span aria-hidden="true"></span>');b.attr("tabindex",0);c.append(a)});$(document).ready(function(){var a=$(".card").find("a[role='tab']");a.removeAttr("aria-controls")});$(document).ready(function(){$(".main-secondary .panel").first().addClass("first");$(".panel.highlight").find(".panel-heading").prepend("<span class='triangle'></span>")});$(document).ready(function(){var d=$("#head-search");var k=d.find(".search-textfield");var j=$(".search-results-container");var a=$("#head-search #Search .search-textfield");var s=$("#head-search #Search .gsc-search-button");var l=$("#head-search #Search .gsc-clear-button");var f=$("#head-search").hasClass("featured-search");var p=$("#head-search").hasClass("active");var n=$("#SearchInput");var c=$(".global-header");var b=$(".search-container:not(.featured-search)");var q=c.innerHeight();var m=$(".utility-header");var h=m.innerHeight();var u=$(".alert-banner");var r=$(".alert-banner .close");var e=0;var o=$("body");var i=$(".search-tabs button").on("click",function(w){$(this).siblings().removeClass("active");$(this).tab("show").addClass("active");w.preventDefault()});k.on("blur focus",function(w){$(this).parents("#head-search").removeClass("focus");$(this).parents(".search-container").addClass("focus")});k.on("change keyup paste",function(){if($(this).val()){t()}});if(!mobileView()){$.each(u,function(){e+=$(this).innerHeight()+2});var g=q-h-e+5;if(!mobileView()){b.css({top:Math.max(g,87)})}}j.find(".close").on("click",v);d.find(".close").on("click",v);$(".top-level-nav .nav-item .ca-gov-icon-search, #nav-item-search").parents(".nav-item").on("click",function(x){x.preventDefault();k.trigger("focus").trigger("focus");if(mobileView()&&!$(".search-container").hasClass("active")){$("html, body").animate({scrollTop:$("#head-search").offset().top},500)}if(!w){$(".search-container:not(.featured-search)").toggleClass("active")}var w=$("#head-search").hasClass("featured-search");var y=$("#head-search").hasClass("active");if(y){a.removeAttr("tabindex aria-hidden");s.removeAttr("tabindex aria-hidden");l.removeAttr("tabindex aria-hidden");n.removeAttr("aria-hidden");d.removeAttr("aria-hidden")}else{a.attr({tabindex:"-1","aria-hidden":"true"});s.attr({tabindex:"-1","aria-hidden":"true"});l.attr({tabindex:"-1","aria-hidden":"true"});n.attr({"aria-hidden":"true"});d.attr("aria-hidden","true")}if(w){a.removeAttr("tabindex aria-hidden");s.removeAttr("tabindex aria-hidden");l.removeAttr("tabindex aria-hidden");n.removeAttr("aria-hidden");d.removeAttr("aria-hidden")}if(mobileView()&&w){$(".search-container").toggleClass("active")}$("#head-search").addClass("play-animation").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("play-animation")})});if($("#head-search").hasClass("featured-search")){a.removeAttr("tabindex aria-hidden");s.removeAttr("tabindex aria-hidden");l.removeAttr("tabindex aria-hidden");n.removeAttr("aria-hidden");d.removeAttr("aria-hidden")}else{a.attr({tabindex:"-1","aria-hidden":"true"});s.attr({tabindex:"-1","aria-hidden":"true"});l.attr({tabindex:"-1","aria-hidden":"true"});n.attr({"aria-hidden":"true"});d.attr("aria-hidden","true")}$(".close-search").on("click",v);function t(){o.addClass("active-search")}function v(){o.removeClass("active-search");k.val("");d.removeClass("active").attr("aria-hidden","true");j.removeClass("visible");$(".ask-group").removeClass("fade-out");if(!f){a.attr({tabindex:"-1","aria-hidden":"true"});s.attr({tabindex:"-1","aria-hidden":"true"});l.attr({tabindex:"-1","aria-hidden":"true"});n.attr({"aria-hidden":"true"})}$(window).scroll();$.event.trigger("cagov.searchresults.hide");if(mobileView()){$("html, body").animate({scrollTop:0},"slow")}}$(".toggle-search").on("click",function(){$(".search-container").toggleClass("active");var w=$("#head-search").hasClass("active");if(w){d.removeAttr("aria-hidden");a.removeAttr("tabindex aria-hidden");s.removeAttr("tabindex aria-hidden");l.removeAttr("tabindex aria-hidden");n.removeAttr("aria-hidden");k.trigger("focus").trigger("focus");$("html, body").animate({scrollTop:$("#head-search").offset().top},500)}else{a.attr({tabindex:"-1","aria-hidden":"true"});s.attr({tabindex:"-1","aria-hidden":"true"});l.attr({tabindex:"-1","aria-hidden":"true"});n.attr({"aria-hidden":"true"});d.attr("aria-hidden","true")}if(!$("#navigation").hasClass("active")){$("#navigation").addClass("mobile-closed")}});$.each(r,function(){$(this).on("click",function(){searchTop()})})});$(window).on("resize",function(){searchTop()});function searchTop(){var c=$("#SearchInput");var g=$(".global-header");var i=$(".search-container:not(.featured-search)");var d=g.innerHeight();var j=$(".utility-header");var h=j.innerHeight();var a=$(".alert-banner");var e=$(".alert-banner .close");var f=0;$.each(a,function(){f+=$(this).innerHeight()+2});var b=d-h-f+5;if(!mobileView()){i.css({top:Math.max(b,87)})}}$(window).on("scroll",function(){var a=$(document).scrollTop();var b=220;if(a>=b){if(!mobileView()){setTimeout(function(){var d=$("#SearchInput");var i=$(".global-header");var k=$(".search-container:not(.featured-search)");var f=i.innerHeight();var l=$(".utility-header");var j=l.innerHeight();var c=$(".alert-banner");var g=$(".alert-banner .close");var h=0;$.each(c,function(){h+=$(this).innerHeight()+2});var e=f-j-h-7;k.css({top:Math.max(e,60)})},400)}}else{if(a<=b){if(!mobileView()){setTimeout(function(){searchTop()},400)}}}});function mobileView(){return $(".global-header .mobile-controls").css("display")!=="none"}$(document).ready(function(){fakewaffle.responsiveTabs(["xs","sm"]);$(".eqHeight").eqHeight()});$(document).ready(function(){$(".gallery .item a, .carousel-gallery .item a, a.gallery-item").fancybox({groupAttr:"data-gallery"});$(".gallery").eqHeight(".item");$('a[data-toggle="tab"]').on("shown.bs.tab",function(a){window.dispatchEvent(new Event("resize"))})});$(document).ready(function(){$(".main-secondary").eqHeight(".profile-banner > .inner")});$(document).ready(function(){$(".carousel-video").initCAVideo();$(".carousel-content").each(initContent);(function(a){a.fn.owlBannerCarousel=function(b){var c=a.extend({delay:4000,smallSearch:true},b);return this.each(function(){if(c.smallSearch){a(".navigation-search").addClass("small-search")}var g=a(".header-slideshow-banner");g.addClass("enabled");window.setTimeout(function(){var m=450;var l=g.offset().top;var n=a(window).height();var k=n-l;k=(k>m)?m:k;g.css({height:k})},0);var h=a(this);var f=(!a("html").hasClass("oldie"))?250:0;h.owlCarousel({items:1,smartSpeed:f,animateOut:"fadeOut",loop:true,autoplay:true,autoplayTimeout:c.delay,autoplayHoverPause:false,mouseDrag:false,touchDrag:false,pullDrag:false,pagination:true,dotsClass:"banner-pager",dotClass:"banner-control",dotsContainer:false});var d=a('<div class="banner-play-pause"><div class="banner-control"><button class="play ca-gov-icon-carousel-play" aria-hidden="true"></button><button class="pause ca-gov-icon-carousel-pause" aria-hidden="true"></span></div></div>');h.append(d);var e=d.find(".play").hide();var j=d.find(".pause");e.on("click",function(){a(this).hide();a(this).parent().removeClass("active");j.show();h.trigger("play.owl.autoplay",[c.delay]);h.owlCarousel("next")});j.on("click",function(){a(this).hide();a(this).parent().addClass("active");e.show();h.trigger("stop.owl.autoplay")});var i=a(".banner-pager .banner-control");i.each(function(){a(this).find("span").append(a(this).index()+1)})})}}(jQuery));$("body .carousel-banner").owlBannerCarousel();if($.fn.owlCarousel){$(".carousel-media").owlCarousel({onResized:function(){window.setTimeout(function(){$(window).trigger("resize")},0)},onDragged:function(){window.setTimeout(function(){$(window).trigger("resize")},0)},onTranslated:function(){window.setTimeout(function(){$(window).trigger("resize")},0)},responsive:true,margin:10,nav:true,loop:true,responsiveClass:true,responsive:{0:{items:1,nav:true},400:{items:2},700:{items:3,nav:true},1000:{items:4,nav:true}},navText:['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>','<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'],dots:false});$(".carousel-link").owlCarousel({margin:25,autoWidth:true,nav:true,navText:['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>','<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'],dots:false});$(".carousel-slider").owlCarousel({items:1,nav:true,navText:['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>','<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'],dots:false});$(".carousel-gallery").owlCarousel({items:1,nav:true,navText:['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>','<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'],dots:false})}$("button.banner-control").removeAttr("role")});function initContent(){var a=$(this);$(window).on("load",function(){a.owlCarousel({items:1,autoHeight:true,loop:true,nav:true,navText:['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>','<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'],dots:true,onResized:function(){window.setTimeout(function(){$(window).trigger("resize")},0)},onDragged:function(){window.setTimeout(function(){$(window).trigger("resize")},0)},onTranslated:function(){window.setTimeout(function(){$(window).trigger("resize")},0)}});var b=$(".owl-dots .owl-dot");b.each(function(){$(this).removeAttr("role");$(this).find("span").html("<span class='sr-only'>Change Slide</span>")});a.on("changed.owl.carousel",function(c){setTimeout(function(){a.find(".owl-item.active .item video").each(function(){$(this).get(0).play()})},10)})})}(function(a){a.fn.initCAVideo=function(b){return this.each(function(){var k=a(this);var f=k.attr("data-loaded");if(f){return}k.attr("data-loaded","true");var c=k.find(".item a").first().attr("href")||"";var j=c.split("?v=").pop();var i=0;var e=k.find(".item").length;k.owlCarousel({items:1,loop:false,nav:true,lazyLoad:false,video:true,navText:['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>','<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'],dots:false});k.on("translated.owl.carousel",function(l){j=k.find(".owl-item.active").attr("data-video").split(/\?v=|\/v\//).pop();g();i=l.item.index;d.trigger("to.owl.carousel",[i,300,true])});k.find(".owl-video-play-icon").append(a('<span class="ca-gov-icon-play" />'));k.find(".owl-video-tn").after(a("<div />").addClass("item-overlay"));var d=a("<div></div>").insertAfter(k);d.addClass("carousel owl-carousel carousel-video-submenu");var h=k.find("a.owl-video");h.each(function(r){var u=a(this);var m=u.attr("href");var q=u.find("span");var t=a("<div/>").addClass("item-thumbnail");t.on("click",function(){k.trigger("to.owl.carousel",[r%e,300,true]);d.find(".watching").removeClass("watching");a(this).parents(".owl-item").addClass("watching");k.find(".active .owl-video-play-icon").trigger("click")});var s=new RegExp("ab+c","i");var p=m.split(/\?v=|\/v\//).pop();var n="url(http://img.youtube.com/vi/"+p+"/0.jpg )";var l=a("<button />").css("background-image",n).addClass("videoThumb").append(q);var o=a("<div />").addClass("item-overlay");o.append(a('<span class="ca-gov-icon-play" />'));t.append(l).append(o);d.append(t)});d=k.next();d.on("initialized.owl.carousel",function(){g()});d.owlCarousel({items:4,loop:false,nav:true,margin:20,dots:false,navText:['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span><span class="sr-only">Previous</span>','<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>']});d.on("changed.owl.carousel",function(){setTimeout(g,50)});function g(){d.find(".watching").removeClass("watching");d.find('button[style*="'+j+'"]').parents(".owl-item").addClass("watching")}})}}(jQuery));$(document).ready(function(){$(".job-detail").eqHeight(".well")});$(document).ready(function(){$(".location.full").eqHeight(".photo, .map")});$(document).ready(function(){var d=b(document.title);var c=window.location.href;c=encodeURIComponent(b(c));$(".ca-gov-icon-share-facebook").on("click",function(f){a("https://www.facebook.com/sharer/sharer.php?u="+c+"&display=popup","socialsharer","658","450")});$(".ca-gov-icon-share-twitter").on("click",function(f){a("https://twitter.com/intent/tweet?text="+d+"&url="+c,"socialsharer","568","531")});$(".ca-gov-icon-share-googleplus").on("click",function(f){a("https://plus.google.com/share?url="+c,"socialsharer","550","552")});$(".ca-gov-icon-share-email").attr("href","mailto:?subject="+d+"&body=%0a"+c+"%0a%0a");function b(e){var f=/<\S[^>]*>/g;e=e.replace(f," ");return e}function a(e,k,j,h){var f=window.screenX?window.screenX:window.screenLeft?window.screenLeft:screen.left?screen.left:0;var i=window.screenY?window.screenY:window.screenTop?window.screenTop:screen.top?screen.top:0;var m=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width;var g=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;var n=(m/2)-(j/2)+f;var l=(g/2)-(h/2)+i;window.open(e,k,"scrollbars=yes, width="+j+", height="+h+", left="+n+", top="+l)}});function breadcrumbs(){if($(".breadcrumb.dynamic")[0]){var a=location.href;var e=a.indexOf("#");if(e!=-1){a=a.substr(0,e)}var e=a.indexOf("?");if(e!=-1){a=a.substr(0,e)}a=unescape(a);var d=/<.*/g;a=a.replace(d,"");var c=a.split("/");var b='<li><a href="/">Home</a></li>';var f="/";if(c[c.length-1]==""||c[c.length-1].match(/^index\.|^default\./i)){c.length--}if(c.length>3){for(counter=3;counter<c.length-1;counter++){f+=c[counter]+"/";b+='<li><a href="'+f+'">'+(c[counter].replace(/(_|-)/g," "))+"</a></li>"}b+='<li class="active">'+(c[c.length-1].replace(/(_|-)/g," ").replace(/\.\w{3,5}$/,""))+"</li>"}$(".breadcrumb.dynamic").html(b)}}$(document).ready(function(){breadcrumbs()});$(document).ready(function(){$(".service-group").each(initServiceGroup)});function initServiceGroup(){var c=$(this);var b=c.find(".service-tile");c.find(".service-tile-empty").on("click",function(f){f.stopPropagation();var d=$(this).attr("data-url");window.location=d});$(window).on("resize",function(){var d=$(window).width();if(d!==a){if(__$currentRow){shrinkAndRemove(__$currentRow)}initTiles(c,b);a=d}});var a=$(window).width();c.eqHeight(".service-tile");c.on("more.new",function(){c.eqHeight(".service-tile");$(window).trigger("resize");b=c.find(".service-tile");initTiles(c,b)});b.find(".icon-fallback").each(setIconFallback);initTiles(c,b);setUpEvents(c)}var __$currentRow=null;function initTiles(b,a){a.each(function(){setCloseClasses($(this))});a.find(".icon-fallback").each(setIconFallback);a.find(".collapse").collapse();b.find(".service-tile-full .container").css({height:""})}function shrinkAndRemove(a){a.animate({height:"0px"},300,"linear",function(){a.empty().remove()})}function setUpEvents(c){function b(g){var f=$(this);g.preventDefault();var d=findRow(f);shrinkAndRemove(d);setCloseClasses(f)}function a(g){var f=$(this);g.preventDefault();c.find(".service-tile").not(f).each(function(){var e=$(this);setCloseClasses(e)});f.attr("data-state","open");var d=findRow(f);checkIfOldAndSet(d);insertContent(d,f);setCloseButtonEvent(f,b)}c.on("click",".service-tile",function(f){f.preventDefault();if($(this).hasClass("touched")){$(this).removeClass("touched");return}var d=$(this).attr("data-state");switch(d){case"closed":case"info":a.call(this,f);$("button.close").trigger("focus");break;case"open":b.call(this,f);break;default:}});$(".service-tile").on("focusin",function(){$(this).addClass("tile-focus")});$(".service-tile").on("focusout",function(){$(this).removeClass("tile-focus")});c.on("keyup",".service-tile",function(d){if(d.which==13&&$(".service-tile").hasClass("tile-focus")){$(this).trigger("click")}})}function setIconFallback(){var a=$(this).width();$(this).css({"font-size":a*0.6})}function setCloseClasses(a){a.attr("data-state","closed").removeClass("show-info")}function setCloseButtonEvent(a,c){var d=a.data("tile-id");var b=a.parent().find('.service-tile-panel[data-tile-id="'+d+'"]').first();b.find(".close.btn").on("click",function(f){c.call(a,f)})}function insertContent(a,b){if(!a){return}var d=b.data("tile-id");var c=b.parent().find('.service-tile-panel[data-tile-id="'+d+'"]').first();a.css("height",a.height()+"px");a.empty();c.clone().appendTo(a);a.animate({height:c.height()+"px"},300,"linear",function(){a.css("height","");scrollToEl(b)})}function findRow(a){var b=a.nextAll(".service-tile, .service-tile-full").filter(function(){return $(this).offset().top!==a.offset().top}).first();if(b.is(".service-tile-full")){return b}if(b.is(".service-tile")){return createExpandedRow(b,"before")}if(a.nextAll(".service-tile").length){return createExpandedRow(a.nextAll(".service-tile").last(),"after")}return createExpandedRow(a,"after")}function checkIfOldAndSet(a){if(__$currentRow&&!__$currentRow.is(a)){shrinkAndRemove(__$currentRow)}__$currentRow=a}function createExpandedRow(a,c){var b=$("<div>").addClass("service-tile-full");(a[c](b));b.trigger("focus");b.addClass("is-open");return b}function scrollToEl(a){if(!a||!a.length){return}var b=a.offset().top;$("html, body").animate({scrollTop:b},450)}$(document).ready(function(){$(".number-counter").each(initCountUp)});function initCountUp(){var c=$(this);var f=c.text().trim();c.text("0");c.css({visibility:"visible"});var d={useEasing:true,useGrouping:false,separator:"",decimal:".",prefix:""};var b=0;if(f.indexOf(".")!==-1){b=f.split(".")[1].length}if(f.indexOf(",")!==-1){d.useGrouping=true;d.separator=",";f=parseFloat(f.replace(/,/g,""))}var e=new CountUp(c.get(0),0,f,b,3.5,d);var a=new Waypoint({element:c.get(0),offset:"100%",handler:function(){e.start()}})}if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}$(function(){$(".stats-highlight").each(initStats);$(".plotly-chart").each(initPlotly)});function initPlotly(b,d){var a=$(this);if($("html").hasClass("ie8")||$("html").hasClass("ie7")){if(!a.has("img").length){a.html('<span class="plotly-chart--loading">Chart image not found</span>')}return}if(!a.has("img").length){a.html('<span class="plotly-chart--loading">Loading</span>')}var c=["d3","Plotly",(("Float32Array" in window)?"":"typedarray")];requirejs(c,function(n,i){var k=100,m=100;a.empty();function g(){var o=a.attr("data-fixed-height")?a.attr("data-fixed-height")+"px":m+"%";return o}var f=n.select(a.get(0)).style({width:k+"%","margin-left":(100-k)/2+"%",height:g(),"margin-top":(100-k)/2+"%"});var l=f.node();var j=a.attr("data-title");var e=a.attr("data-x-label");var h=a.attr("data-y-label");getConfig(n,a,function(o){i.plot(l,o,{title:j,font:{family:"Source Sans Pro, sans-serif",size:20,color:"#333"},xaxis:{title:e,titlefont:{family:"Source Sans Pro, sans-serif",size:18,color:"#333"}},yaxis:{title:h,titlefont:{family:"Source Sans Pro, sans-serif",size:18,color:"#333"}}})});$(window).on("resize",function(){var o=n.select(a.get(0)).style({height:g()});i.Plots.on("resize",l)})})}var defaultBar=[{type:"bar",x:[],y:[],marker:{color:"#046B99",line:{width:0.5}}}];var defaultLine=[{x:[],y:[],mode:"lines",name:"Solid",line:{color:"#046B99",dash:"solid",width:4}}];var defaultPie=[{values:[],labels:[],hoverinfo:"label+percent",type:"pie",marker:{colors:["#E1F2F7","#9FDBF1","#02BFE7","#35BBAA","#72CE6F","#815AB4","#D34A37","#F27E31","#FFCA4A"]}}];function getConfigSkeleton(a){switch(a){case"bar":return defaultBar;case"pie":return defaultPie;case"line":return defaultLine;default:return[]}}function getConfig(n,c,g){var i=c.attr("data-datasource-url");var m=c.attr("data-config-url");var k=c.attr("data-type");var h=c.attr("data-color");if(m){$.getJSON(m,g);return}var f=getConfigSkeleton(k);var b=c.attr("data-x-values");var l=c.attr("data-y-values");if(b){b=b.split("|").map(function(o){if(isNaN(parseFloat(o))){return o}return +o})}else{b=[]}if(l){l=l.split("|")}else{l=[]}switch(k){case"line":case"bar":f[0].x=b;f[0].y=l.map(function(o){return +o});break;case"pie":f[0].values=b;f[0].labels=l;break;default:}if(!h){h="#046B99"}switch(k){case"line":f[0].line.color=n.rgb(h).toString();break;case"bar":f[0].marker.color=n.rgb(h).toString();break;case"pie":var e=n.hsl(h);var d=n.hsl((e.h-(4*b.length))%360,e.s,e.l);var j=n.scale.linear().domain(b).interpolate(n.interpolateHsl).range([e.toString(),d.toString()]);var a=b.map(function(o){return j(o)});f[0].marker.colors=a;break;default:}g(f)}function initStats(){var a=$(this);var b=["d3"];if($("html").hasClass("ie8")||$("html").hasClass("ie7")){return}requirejs(b,function(m){var l=a.attr("data-direction")=="right"?true:false;var i=parseFloat(a.attr("data-percentfill"));var j=a.find(".half-gauge-chart");var g=a.attr("data-colorfill");var h=a.find(".small-goal-text").length!=0;var c={bindTo:j.get(0),background:true,maxValue:100,startAngle:-90,endAngle:90,thickness:5,color:g,showHalfTick:h,size:{width:j.get(0).clientWidth,height:j.get(0).clientWidth},flipStart:l};var f=initHalfDonut(m);var k=new f(c);k.load({data:0});function e(){var q=j.get(0).clientWidth;var n=j.get(0).clientHeight;var p=a.find(".small-goal-text");var o=parseFloat(a.find(".small-goal-text").css("line-height"));a.find(".info").css({top:-q/4});p.css({"font-size":q/18});var r=p.height();p.css({top:(q<400)?r*2+20:(r*1.5)});a.find(".big-number").css({"font-size":q/6});a.find(".percent-detail").css({"font-size":q/10})}e();$(window).on("resize",function(){window.setTimeout(function(){c.size={width:j.width(),height:j.width()};c.data=i;k=new f(c);k.load({data:i});e()},10)});var d=new Waypoint({element:j.get(0),offset:"100%",handler:function(){k.load({data:i})}})})}function initHalfDonut(n){var c={className:"donut",size:{width:200,height:200},margin:{top:20,right:20,bottom:20,left:20},startAngle:0,endAngle:360,thickness:null,offset:0,sort:null,maxValue:null,background:false,flipStart:false,color:"rgb(49, 130, 189)",accessor:function(p,o){return p}};var b=function(o){this.config=h({},c,o);this.config.radius=a(this);this.accessor=this.config.accessor;this.pie=n.layout.pie().sort(this.config.sort).startAngle(m(this.config.startAngle)).endAngle(m(this.config.endAngle));if(this.accessor&&typeof this.accessor==="function"){this.pie.value(this.accessor)}var p=d(this);this.arc=n.svg.arc().innerRadius(this.config.radius-p-(this.config.offset/4)).outerRadius(this.config.radius+(this.config.offset/4));i(this)};b.prototype.load=function(o){var p=(o&&o.data!=null)?o.data:this.data.map(this.accessor);p=Array.isArray(p)?p:[p];if(this.config.maxValue){this.data=this.pieMaxValue(p)}else{this.data=this.pie(p)}l(this)};b.prototype.pieMaxValue=function(q){var r=this.accessor,y=this;var x=q.map(function(A,z){return +r.call(y,A,z)});var t=n.sum(x),u=n.max([this.config.maxValue,t]),w=u-t;var v=+(m(this.config.startAngle));var p=(m(this.config.endAngle)-v)/(t+w);var s=n.range(q.length);var o=[];s.forEach(function(z){var A;o[z]={data:q[z],value:A=x[z],startAngle:v,endAngle:v+=A*p}});return o};function d(o){return o.config.thickness||o.config.radius}function i(s){var q=j(s),o=e(s);var p="translate("+q/2+","+o/2+")"+((s.config.flipStart==true)?" scale(-1,1)":"");var r=n.select(s.config.bindTo).select("svg");if(r.empty()){s.svg=n.select(s.config.bindTo).append("svg").attr("class",s.config.classNames).attr("width",q).attr("height",o/2).append("g").attr("transform",p)}else{s.svg=n.select(s.config.bindTo).select("svg").attr("class",s.config.classNames).attr("width",q).attr("height",o/2).select("g").attr("transform",p);s.svg.selectAll("*").remove()}if(s.config.background){s.svg.append("path").attr("class","donut-background").transition().duration(0).attrTween("d",function(v,u){var t={value:0,startAngle:m(s.config.startAngle),endAngle:m(s.config.endAngle)};return f.call(this,t,u,s)})}if(s.config.showHalfTick){s.svg.append("line").attr("class","donut-halfmark").attr("stroke","gray").attr("stroke-width",1).attr({x1:0,x2:0,y1:-o/2+10,y2:-o/2+35})}}function l(p){var o=p.svg.selectAll("path.donut-section").data(p.data);o.enter().append("path").attr("class",function(r,q){return"donut-section value-"+q}).attr("fill",p.config.color).attr("stroke","#fff").attr("stroke-width",p.config.offset/2);p.svg.selectAll("path.donut-section").transition().duration(2000).attrTween("d",function(r,q){return f.call(this,r,q,p)});o.exit().transition().duration(100).attrTween("d",function(r,q){return k.call(this,r,q,p)}).remove()}function f(p,s,u){var o,r,t,q;if(!this._current){o=u.svg.selectAll("path")[0][s-1];r=(o&&o._current)?o._current.endAngle:m(u.config.startAngle);t={startAngle:r,endAngle:r,value:0}}q=n.interpolate(this._current||t,p);this._current=q(0);return function(v){return u.arc(q(v))}}function k(o,p,r){var q={startAngle:m(r.config.endAngle),endAngle:m(r.config.endAngle),value:0},p=n.interpolate(o,q);return function(s){return r.arc(p(s))}}function a(q){var p=j(q)-q.config.margin.left-q.config.margin.right,o=e(q)-q.config.margin.top-q.config.margin.bottom;return Math.min(p,o)/2}function j(o){return o.config.size&&o.config.size.width}function e(o){return o.config.size&&o.config.size.height}function m(o){return o*(Math.PI/180)}function g(o){return o*(180/Math.PI)}function h(){for(var o=1;o<arguments.length;o++){for(var p in arguments[o]){if(arguments[o].hasOwnProperty(p)){arguments[0][p]=arguments[o][p]}}}return arguments[0]}return b}(function(a){a.fn.parallax=function(b){var d=a(window).height();var c=a.extend({speed:0.3},b);return this.each(function(){var f=a(this);var e=(a(window).outerHeight()*c.speed)+f.innerHeight();f.css({height:e});a(window).scroll(function(){var j=f.offset().top,i=a(window).scrollTop(),h=(((i+a(window).innerHeight())-j)*c.speed),g;g="translate(0, "+h+"px)";f.css({"-webkit-transform":g,"-moz-transform":g,"-ms-transform":g,transform:g})})})}}(jQuery));$(".parallax-bg").parallax();$(document).ready(function(){$("[class*='animate-']").each(initAnimations)});function initAnimations(){var b=$(this);var a=new Waypoint({element:b.get(0),offset:"95%",handler:function(){var e=b.attr("class").match(/animate-(\w+)\b/i)[1];var d="animate-"+e;var c="animated "+e;b.removeClass("animate-"+e);b.addClass("animated "+e);this.disable()}})}$(document).ready(function(){$(".toggle-more").toggleMore();$("[data-ajax-target]").each(initLoad);var a=$("html, body");$(".explore-invite").on("click",function(c){c.preventDefault();var b=$("header.fixed").height();a.animate({scrollTop:$(".main-primary").offset().top-b},2000);$(document).one("scroll mousedown DOMMouseScroll mousewheel keyup touchstart",function(d){if(d.which>0||d.type==="mousedown"||d.type==="mousewheel"||d.type=="touchstart"){a.stop()}})})});(function(a){a.fn.toggleMore=function(c){function b(e,d){if(d){e.addClass("active").attr("aria-expanded","true")}else{e.removeClass("active").attr("aria-expanded","false")}}return this.each(function(){var d=a(this);if(c!==undefined){c?b(d,true):b(d,false)}else{d.hasClass("active")?b(d,true):b(d,false)}d.off("click.cagovmore");d.on("click.cagovmore",function(){d.hasClass("active")?b(d,false):b(d,true)})})}}(jQuery));function makeBlur(a){a.Vague({intensity:6}).trigger("blur")}function initLoad(){var d=$(this);var c=d.attr("data-ajax-target");var f=d.attr("data-container-target");var b=d.find(".more-content");var a=d.attr("data-ajax-test");makeBlur(b);function e(g){$(b).load(g,function(j,i,k){var h=k.getResponseHeader("Link");if(a){return}if((i=="error"||h==null)){d.animate({opacity:0,height:0},300,"linear")}else{c=h.match(/<(.*?)>/)[1]}})}e(c);d.on("click",function(g){g.preventDefault();$(b).children().hide().appendTo(f).fadeIn(1000);$(f).trigger("more.new");e(c)})}$(document).ready(function(){var c=$(".enableHighContrastMode");var h=$(".disableHighContrastMode");var k=$("html");var e=localStorage.getItem("high-contrast");function l(){c.addClass("active");h.removeClass("active");k.addClass("high-contrast");localStorage.setItem("high-contrast","true")}function n(){h.addClass("active");c.removeClass("active");k.removeClass("high-contrast");localStorage.removeItem("high-contrast")}if(e){l()}c.on("click",l);h.on("click",n);var p=$(".enableTextOnlyMode");var g=$(".disableTextOnlyMode");p.on("click",function(){p.addClass("active");g.removeClass("active");$('link[rel~="stylesheet"]').prop("disabled",true)});g.on("click",function(){g.addClass("active");p.removeClass("active");$('link[rel~="stylesheet"]').prop("disabled",false)});var b=$(".increaseTextSize");var o=$(".decreaseTextSize");var a=$(".resetTextSize");var m=1.5;var f=1;var d=0.1;var q=+localStorage.getItem("font-size");if(q){$("html").css("font-size",q+"rem")}else{q=1;$("html").css("font-size",q+"rem")}i(q);function j(s){var r=Math.min(m,Math.max(s,f));localStorage.setItem("font-size",r);$("html").css("font-size",r+"rem");i(r);return r}function i(r){if(r>=m){}else{if(r<=f){}else{}}}b.on("click",function(){q+=d;q=j(q)});o.on("click",function(){q-=d;q=j(q)});a.on("click",function(){q=j(1)})});$(".ask-button").attr("tabindex",0);$("body").on("click",function(a){try{$(".ask-panel").collapse("hide")}catch(a){}});$(document).ready(function(){$("#askGroup").removeAttr("aria-multiselectable")});$(document).ready(function(){var a=$(".nav-tabs > li > a[aria-selected='true']");a.addClass("active");$(".nav-tabs > li > a").on("click",function(){if($(this).attr("aria-selected")=="false"){$(".nav-tabs > li").removeClass("active");$(this).parent("li").addClass("active")}else{$(".nav-tabs > li").removeClass("active");$(this).parent("li").addClass("active")}});var b=$("ul.nav-tabs").find(".nav-link");b.attr("tabindex",0)});$(document).ready(function(){$(".site-settings").removeAttr("role");$(".settings-links button[data-target='#siteSettings']").removeAttr("role aria-selected");$(".site-settings button.close").removeAttr("role aria-selected")});
=======
/**
 * CA State Template v5 -  @version v5.0.13 -  12/3/2019 
  STYLES COMPILED FROM SOURCE (source/js) DO NOT MODIFY */
/*! modernizr (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-setclasses !*/
!function (e, n, t) { function r(e, n) { return typeof e === n } function o() { var e, n, t, o, s, i, l; for (var a in S) if (S.hasOwnProperty(a)) { if (e = [], n = S[a], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++)e.push(n.options.aliases[t].toLowerCase()); for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)i = e[s], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = o : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = o), C.push((o ? "" : "no-") + l.join("-")) } } function s(e) { var n = x.className, t = Modernizr._config.classPrefix || ""; if (_ && (n = n.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)"); n = n.replace(r, "$1" + t + "js$2") } Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), _ ? x.className.baseVal = n : x.className = n) } function i(e, n) { return !!~("" + e).indexOf(n) } function l() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) } function a(e) { return e.replace(/([a-z])-([a-z])/g, function (e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") } function f(e, n) { return function () { return e.apply(n, arguments) } } function u(e, n, t) { var o; for (var s in e) if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? f(o, t || n) : o); return !1 } function c(e) { return e.replace(/([A-Z])/g, function (e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") } function p(n, t, r) { var o; if ("getComputedStyle" in e) { o = getComputedStyle.call(e, n, t); var s = e.console; if (null !== o) r && (o = o.getPropertyValue(r)); else if (s) { var i = s.error ? "error" : "log"; s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate") } } else o = !t && n.currentStyle && n.currentStyle[r]; return o } function d() { var e = n.body; return e || (e = l(_ ? "svg" : "body"), e.fake = !0), e } function m(e, t, r, o) { var s, i, a, f, u = "modernizr", c = l("div"), p = d(); if (parseInt(r, 10)) for (; r--;)a = l("div"), a.id = o ? o[r] : u + (r + 1), c.appendChild(a); return s = l("style"), s.type = "text/css", s.id = "s" + u, (p.fake ? p : c).appendChild(s), p.appendChild(c), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), c.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), i = t(c, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = f, x.offsetHeight) : c.parentNode.removeChild(c), !!i } function y(n, r) { var o = n.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)if (e.CSS.supports(c(n[o]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var s = []; o--;)s.push("(" + c(n[o]) + ":" + r + ")"); return s = s.join(" or "), m("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) { return "absolute" == p(e, null, "position") }) } return t } function v(e, n, o, s) { function f() { c && (delete N.style, delete N.modElem) } if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) { var u = y(e, o); if (!r(u, "undefined")) return u } for (var c, p, d, m, v, g = ["modernizr", "tspan", "samp"]; !N.style && g.length;)c = !0, N.modElem = l(g.shift()), N.style = N.modElem.style; for (d = e.length, p = 0; d > p; p++)if (m = e[p], v = N.style[m], i(m, "-") && (m = a(m)), N.style[m] !== t) { if (s || r(o, "undefined")) return f(), "pfx" == n ? m : !0; try { N.style[m] = o } catch (h) { } if (N.style[m] != v) return f(), "pfx" == n ? m : !0 } return f(), !1 } function g(e, n, t, o, s) { var i = e.charAt(0).toUpperCase() + e.slice(1), l = (e + " " + P.join(i + " ") + i).split(" "); return r(n, "string") || r(n, "undefined") ? v(l, n, o, s) : (l = (e + " " + z.join(i + " ") + i).split(" "), u(l, n, t)) } function h(e, n, r) { return g(e, t, t, n, r) } var C = [], S = [], w = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, n) { var t = this; setTimeout(function () { n(t[e]) }, 0) }, addTest: function (e, n, t) { S.push({ name: e, fn: n, options: t }) }, addAsyncTest: function (e) { S.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = w, Modernizr = new Modernizr; var x = n.documentElement, _ = "svg" === x.nodeName.toLowerCase(), b = "Moz O ms Webkit", P = w._config.usePrefixes ? b.split(" ") : []; w._cssomPrefixes = P; var z = w._config.usePrefixes ? b.toLowerCase().split(" ") : []; w._domPrefixes = z; var E = { elem: l("modernizr") }; Modernizr._q.push(function () { delete E.elem }); var N = { style: E.elem.style }; Modernizr._q.unshift(function () { delete N.style }), w.testAllProps = g, w.testAllProps = h, Modernizr.addTest("flexbox", h("flexBasis", "1px", !0)), o(), s(C), delete w.addTest, delete w.addAsyncTest; for (var T = 0; T < Modernizr._q.length; T++)Modernizr._q[T](); e.Modernizr = Modernizr }(window, document);
/* -----------------------------------------
   NO CONFLIT - /source/js/cagov/noconflict.js
----------------------------------------- */

// Fixes issue with $ not a function
$ = jQuery.noConflict();


/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
        typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
            (global = global || self, factory(global.bootstrap = {}, global.jQuery));
}(this, function (exports, $) {
    'use strict';

    $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);

            if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                }));
            }

            ownKeys.forEach(function (key) {
                _defineProperty(target, key, source[key]);
            });
        }

        return target;
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Private TransitionEnd Helpers
 * ------------------------------------------------------------------------
 */

var TRANSITION_END = 'transitionend';
var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
}

function getSpecialTransitionEndEvent() {
    return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
            if ($(event.target).is(this)) {
                return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
            }

            return undefined; // eslint-disable-line no-undefined
        }
    };
}

function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
        called = true;
    });
    setTimeout(function () {
        if (!called) {
            Util.triggerTransitionEnd(_this);
        }
    }, duration);
    return this;
}

function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
}
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
        do {
            // eslint-disable-next-line no-bitwise
            prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
            var hrefAttr = element.getAttribute('href');
            selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
        }

        try {
            return document.querySelector(selector) ? selector : null;
        } catch (err) {
            return null;
        }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        if (!element) {
            return 0;
        } // Get transition-duration of the element


        var transitionDuration = $(element).css('transition-duration');
        var transitionDelay = $(element).css('transition-delay');
        var floatTransitionDuration = parseFloat(transitionDuration);
        var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

        if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
        } // If multiple durations are defined, take the first


        transitionDuration = transitionDuration.split(',')[0];
        transitionDelay = transitionDelay.split(',')[0];
        return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
        return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
        $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
            if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
                var expectedTypes = configTypes[property];
                var value = config[property];
                var valueType = value && Util.isElement(value) ? 'element' : toType(value);

                if (!new RegExp(expectedTypes).test(valueType)) {
                    throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
                }
            }
        }
    },
    findShadowRoot: function findShadowRoot(element) {
        if (!document.documentElement.attachShadow) {
            return null;
        } // Can find the shadow root otherwise it'll return the document


        if (typeof element.getRootNode === 'function') {
            var root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
        }

        if (element instanceof ShadowRoot) {
            return element;
        } // when we don't find a shadow root


        if (!element.parentNode) {
            return null;
        }

        return Util.findShadowRoot(element.parentNode);
    }
};
setTransitionEndSupport();
/**
  * --------------------------------------------------------------------------
  * Bootstrap (v4.3.1): alert.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  * --------------------------------------------------------------------------
  */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'alert';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.alert';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = $.fn[NAME];
var Selector = {
    DISMISS: '[data-dismiss="alert"]'
};
var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
};
var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var Alert =
    /*#__PURE__*/
    function () {
        function Alert(element) {
            this._element = element;
        } // Getters


        var _proto = Alert.prototype;

        // Public
        _proto.close = function close(element) {
            var rootElement = this._element;

            if (element) {
                rootElement = this._getRootElement(element);
            }

            var customEvent = this._triggerCloseEvent(rootElement);

            if (customEvent.isDefaultPrevented()) {
                return;
            }

            this._removeElement(rootElement);
        };

        _proto.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);
            this._element = null;
        } // Private
            ;

        _proto._getRootElement = function _getRootElement(element) {
            var selector = Util.getSelectorFromElement(element);
            var parent = false;

            if (selector) {
                parent = document.querySelector(selector);
            }

            if (!parent) {
                parent = $(element).closest("." + ClassName.ALERT)[0];
            }

            return parent;
        };

        _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
            var closeEvent = $.Event(Event.CLOSE);
            $(element).trigger(closeEvent);
            return closeEvent;
        };

        _proto._removeElement = function _removeElement(element) {
            var _this = this;

            $(element).removeClass(ClassName.SHOW);

            if (!$(element).hasClass(ClassName.FADE)) {
                this._destroyElement(element);

                return;
            }

            var transitionDuration = Util.getTransitionDurationFromElement(element);
            $(element).one(Util.TRANSITION_END, function (event) {
                return _this._destroyElement(element, event);
            }).emulateTransitionEnd(transitionDuration);
        };

        _proto._destroyElement = function _destroyElement(element) {
            $(element).detach().trigger(Event.CLOSED).remove();
        } // Static
            ;

        Alert._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function () {
                var $element = $(this);
                var data = $element.data(DATA_KEY);

                if (!data) {
                    data = new Alert(this);
                    $element.data(DATA_KEY, data);
                }

                if (config === 'close') {
                    data[config](this);
                }
            });
        };

        Alert._handleDismiss = function _handleDismiss(alertInstance) {
            return function (event) {
                if (event) {
                    event.preventDefault();
                }

                alertInstance.close(this);
            };
        };

        _createClass(Alert, null, [{
            key: "VERSION",
            get: function get() {
                return VERSION;
            }
        }]);

        return Alert;
    }();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Alert._jQueryInterface;
$.fn[NAME].Constructor = Alert;

$.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$1 = 'button';
var VERSION$1 = '4.3.1';
var DATA_KEY$1 = 'bs.button';
var EVENT_KEY$1 = "." + DATA_KEY$1;
var DATA_API_KEY$1 = '.data-api';
var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
};
var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
};
var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var Button =
    /*#__PURE__*/
    function () {
        function Button(element) {
            this._element = element;
        } // Getters


        var _proto = Button.prototype;

        // Public
        _proto.toggle = function toggle() {
            var triggerChangeEvent = true;
            var addAriaPressed = true;
            var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLE)[0];

            if (rootElement) {
                var input = this._element.querySelector(Selector$1.INPUT);

                if (input) {
                    if (input.type === 'radio') {
                        if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
                            triggerChangeEvent = false;
                        } else {
                            var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

                            if (activeElement) {
                                $(activeElement).removeClass(ClassName$1.ACTIVE);
                            }
                        }
                    }

                    if (triggerChangeEvent) {
                        if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                            return;
                        }

                        input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
                        $(input).trigger('change');
                    }

                    input.focus();
                    addAriaPressed = false;
                }
            }

            if (addAriaPressed) {
                this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
            }

            if (triggerChangeEvent) {
                $(this._element).toggleClass(ClassName$1.ACTIVE);
            }
        };

        _proto.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY$1);
            this._element = null;
        } // Static
            ;

        Button._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function () {
                var data = $(this).data(DATA_KEY$1);

                if (!data) {
                    data = new Button(this);
                    $(this).data(DATA_KEY$1, data);
                }

                if (config === 'toggle') {
                    data[config]();
                }
            });
        };

        _createClass(Button, null, [{
            key: "VERSION",
            get: function get() {
                return VERSION$1;
            }
        }]);

        return Button;
    }();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
        button = $(button).closest(Selector$1.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
}).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME$1] = Button._jQueryInterface;
$.fn[NAME$1].Constructor = Button;

$.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$2 = 'carousel';
var VERSION$2 = '4.3.1';
var DATA_KEY$2 = 'bs.carousel';
var EVENT_KEY$2 = "." + DATA_KEY$2;
var DATA_API_KEY$2 = '.data-api';
var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

var SWIPE_THRESHOLD = 40;
var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
};
var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
};
var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
};
var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
};
var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
};
var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
};
var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var Carousel =
    /*#__PURE__*/
    function () {
        function Carousel(element, config) {
            this._items = null;
            this._interval = null;
            this._activeElement = null;
            this._isPaused = false;
            this._isSliding = false;
            this.touchTimeout = null;
            this.touchStartX = 0;
            this.touchDeltaX = 0;
            this._config = this._getConfig(config);
            this._element = element;
            this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
            this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

            this._addEventListeners();
        } // Getters


        var _proto = Carousel.prototype;

        // Public
        _proto.next = function next() {
            if (!this._isSliding) {
                this._slide(Direction.NEXT);
            }
        };

        _proto.nextWhenVisible = function nextWhenVisible() {
            // Don't call next when the page isn't visible
            // or the carousel or its parent isn't visible
            if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
                this.next();
            }
        };

        _proto.prev = function prev() {
            if (!this._isSliding) {
                this._slide(Direction.PREV);
            }
        };

        _proto.pause = function pause(event) {
            if (!event) {
                this._isPaused = true;
            }

            if (this._element.querySelector(Selector$2.NEXT_PREV)) {
                Util.triggerTransitionEnd(this._element);
                this.cycle(true);
            }

            clearInterval(this._interval);
            this._interval = null;
        };

        _proto.cycle = function cycle(event) {
            if (!event) {
                this._isPaused = false;
            }

            if (this._interval) {
                clearInterval(this._interval);
                this._interval = null;
            }

            if (this._config.interval && !this._isPaused) {
                this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
            }
        };

        _proto.to = function to(index) {
            var _this = this;

            this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

            var activeIndex = this._getItemIndex(this._activeElement);

            if (index > this._items.length - 1 || index < 0) {
                return;
            }

            if (this._isSliding) {
                $(this._element).one(Event$2.SLID, function () {
                    return _this.to(index);
                });
                return;
            }

            if (activeIndex === index) {
                this.pause();
                this.cycle();
                return;
            }

            var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

            this._slide(direction, this._items[index]);
        };

        _proto.dispose = function dispose() {
            $(this._element).off(EVENT_KEY$2);
            $.removeData(this._element, DATA_KEY$2);
            this._items = null;
            this._config = null;
            this._element = null;
            this._interval = null;
            this._isPaused = null;
            this._isSliding = null;
            this._activeElement = null;
            this._indicatorsElement = null;
        } // Private
            ;

        _proto._getConfig = function _getConfig(config) {
            config = _objectSpread({}, Default, config);
            Util.typeCheckConfig(NAME$2, config, DefaultType);
            return config;
        };

        _proto._handleSwipe = function _handleSwipe() {
            var absDeltax = Math.abs(this.touchDeltaX);

            if (absDeltax <= SWIPE_THRESHOLD) {
                return;
            }

            var direction = absDeltax / this.touchDeltaX; // swipe left

            if (direction > 0) {
                this.prev();
            } // swipe right


            if (direction < 0) {
                this.next();
            }
        };

        _proto._addEventListeners = function _addEventListeners() {
            var _this2 = this;

            if (this._config.keyboard) {
                $(this._element).on(Event$2.KEYDOWN, function (event) {
                    return _this2._keydown(event);
                });
            }

            if (this._config.pause === 'hover') {
                $(this._element).on(Event$2.MOUSEENTER, function (event) {
                    return _this2.pause(event);
                }).on(Event$2.MOUSELEAVE, function (event) {
                    return _this2.cycle(event);
                });
            }

            if (this._config.touch) {
                this._addTouchEventListeners();
            }
        };

        _proto._addTouchEventListeners = function _addTouchEventListeners() {
            var _this3 = this;

            if (!this._touchSupported) {
                return;
            }

            var start = function start(event) {
                if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
                    _this3.touchStartX = event.originalEvent.clientX;
                } else if (!_this3._pointerEvent) {
                    _this3.touchStartX = event.originalEvent.touches[0].clientX;
                }
            };

            var move = function move(event) {
                // ensure swiping with one touch and not pinching
                if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
                    _this3.touchDeltaX = 0;
                } else {
                    _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
                }
            };

            var end = function end(event) {
                if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
                    _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
                }

                _this3._handleSwipe();

                if (_this3._config.pause === 'hover') {
                    // If it's a touch-enabled device, mouseenter/leave are fired as
                    // part of the mouse compatibility events on first tap - the carousel
                    // would stop cycling until user tapped out of it;
                    // here, we listen for touchend, explicitly pause the carousel
                    // (as if it's the second time we tap on it, mouseenter compat event
                    // is NOT fired) and after a timeout (to allow for mouse compatibility
                    // events to fire) we explicitly restart cycling
                    _this3.pause();

                    if (_this3.touchTimeout) {
                        clearTimeout(_this3.touchTimeout);
                    }

                    _this3.touchTimeout = setTimeout(function (event) {
                        return _this3.cycle(event);
                    }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
                }
            };

            $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
                return e.preventDefault();
            });

            if (this._pointerEvent) {
                $(this._element).on(Event$2.POINTERDOWN, function (event) {
                    return start(event);
                });
                $(this._element).on(Event$2.POINTERUP, function (event) {
                    return end(event);
                });

                this._element.classList.add(ClassName$2.POINTER_EVENT);
            } else {
                $(this._element).on(Event$2.TOUCHSTART, function (event) {
                    return start(event);
                });
                $(this._element).on(Event$2.TOUCHMOVE, function (event) {
                    return move(event);
                });
                $(this._element).on(Event$2.TOUCHEND, function (event) {
                    return end(event);
                });
            }
        };

        _proto._keydown = function _keydown(event) {
            if (/input|textarea/i.test(event.target.tagName)) {
                return;
            }

            switch (event.which) {
                case ARROW_LEFT_KEYCODE:
                    event.preventDefault();
                    this.prev();
                    break;

                case ARROW_RIGHT_KEYCODE:
                    event.preventDefault();
                    this.next();
                    break;

                default:
            }
        };

        _proto._getItemIndex = function _getItemIndex(element) {
            this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
            return this._items.indexOf(element);
        };

        _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
            var isNextDirection = direction === Direction.NEXT;
            var isPrevDirection = direction === Direction.PREV;

            var activeIndex = this._getItemIndex(activeElement);

            var lastItemIndex = this._items.length - 1;
            var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

            if (isGoingToWrap && !this._config.wrap) {
                return activeElement;
            }

            var delta = direction === Direction.PREV ? -1 : 1;
            var itemIndex = (activeIndex + delta) % this._items.length;
            return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
        };

        _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
            var targetIndex = this._getItemIndex(relatedTarget);

            var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

            var slideEvent = $.Event(Event$2.SLIDE, {
                relatedTarget: relatedTarget,
                direction: eventDirectionName,
                from: fromIndex,
                to: targetIndex
            });
            $(this._element).trigger(slideEvent);
            return slideEvent;
        };

        _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
            if (this._indicatorsElement) {
                var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
                $(indicators).removeClass(ClassName$2.ACTIVE);

                var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

                if (nextIndicator) {
                    $(nextIndicator).addClass(ClassName$2.ACTIVE);
                }
            }
        };

        _proto._slide = function _slide(direction, element) {
            var _this4 = this;

            var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

            var activeElementIndex = this._getItemIndex(activeElement);

            var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

            var nextElementIndex = this._getItemIndex(nextElement);

            var isCycling = Boolean(this._interval);
            var directionalClassName;
            var orderClassName;
            var eventDirectionName;

            if (direction === Direction.NEXT) {
                directionalClassName = ClassName$2.LEFT;
                orderClassName = ClassName$2.NEXT;
                eventDirectionName = Direction.LEFT;
            } else {
                directionalClassName = ClassName$2.RIGHT;
                orderClassName = ClassName$2.PREV;
                eventDirectionName = Direction.RIGHT;
            }

            if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
                this._isSliding = false;
                return;
            }

            var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

            if (slideEvent.isDefaultPrevented()) {
                return;
            }

            if (!activeElement || !nextElement) {
                // Some weirdness is happening, so we bail
                return;
            }

            this._isSliding = true;

            if (isCycling) {
                this.pause();
            }

            this._setActiveIndicatorElement(nextElement);

            var slidEvent = $.Event(Event$2.SLID, {
                relatedTarget: nextElement,
                direction: eventDirectionName,
                from: activeElementIndex,
                to: nextElementIndex
            });

            if ($(this._element).hasClass(ClassName$2.SLIDE)) {
                $(nextElement).addClass(orderClassName);
                Util.reflow(nextElement);
                $(activeElement).addClass(directionalClassName);
                $(nextElement).addClass(directionalClassName);
                var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

                if (nextElementInterval) {
                    this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
                    this._config.interval = nextElementInterval;
                } else {
                    this._config.interval = this._config.defaultInterval || this._config.interval;
                }

                var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
                $(activeElement).one(Util.TRANSITION_END, function () {
                    $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
                    $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
                    _this4._isSliding = false;
                    setTimeout(function () {
                        return $(_this4._element).trigger(slidEvent);
                    }, 0);
                }).emulateTransitionEnd(transitionDuration);
            } else {
                $(activeElement).removeClass(ClassName$2.ACTIVE);
                $(nextElement).addClass(ClassName$2.ACTIVE);
                this._isSliding = false;
                $(this._element).trigger(slidEvent);
            }

            if (isCycling) {
                this.cycle();
            }
        } // Static
            ;

        Carousel._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function () {
                var data = $(this).data(DATA_KEY$2);

                var _config = _objectSpread({}, Default, $(this).data());

                if (typeof config === 'object') {
                    _config = _objectSpread({}, _config, config);
                }

                var action = typeof config === 'string' ? config : _config.slide;

                if (!data) {
                    data = new Carousel(this, _config);
                    $(this).data(DATA_KEY$2, data);
                }

                if (typeof config === 'number') {
                    data.to(config);
                } else if (typeof action === 'string') {
                    if (typeof data[action] === 'undefined') {
                        throw new TypeError("No method named \"" + action + "\"");
                    }

                    data[action]();
                } else if (_config.interval && _config.ride) {
                    data.pause();
                    data.cycle();
                }
            });
        };

        Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
            var selector = Util.getSelectorFromElement(this);

            if (!selector) {
                return;
            }

            var target = $(selector)[0];

            if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
                return;
            }

            var config = _objectSpread({}, $(target).data(), $(this).data());

            var slideIndex = this.getAttribute('data-slide-to');

            if (slideIndex) {
                config.interval = false;
            }

            Carousel._jQueryInterface.call($(target), config);

            if (slideIndex) {
                $(target).data(DATA_KEY$2).to(slideIndex);
            }

            event.preventDefault();
        };

        _createClass(Carousel, null, [{
            key: "VERSION",
            get: function get() {
                return VERSION$2;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default;
            }
        }]);

        return Carousel;
    }();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
$(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
        var $carousel = $(carousels[i]);

        Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME$2] = Carousel._jQueryInterface;
$.fn[NAME$2].Constructor = Carousel;

$.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

var NAME$3 = 'collapse';
var VERSION$3 = '4.3.1';
var DATA_KEY$3 = 'bs.collapse';
var EVENT_KEY$3 = "." + DATA_KEY$3;
var DATA_API_KEY$3 = '.data-api';
var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
var Default$1 = {
    toggle: true,
    parent: ''
};
var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
};
var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
};
var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
};
var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
};
var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var Collapse =
    /*#__PURE__*/
    function () {
        function Collapse(element, config) {
            this._isTransitioning = false;
            this._element = element;
            this._config = this._getConfig(config);
            this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
            var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

            for (var i = 0, len = toggleList.length; i < len; i++) {
                var elem = toggleList[i];
                var selector = Util.getSelectorFromElement(elem);
                var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
                    return foundElem === element;
                });

                if (selector !== null && filterElement.length > 0) {
                    this._selector = selector;

                    this._triggerArray.push(elem);
                }
            }

            this._parent = this._config.parent ? this._getParent() : null;

            if (!this._config.parent) {
                this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            }

            if (this._config.toggle) {
                this.toggle();
            }
        } // Getters


        var _proto = Collapse.prototype;

        // Public
        _proto.toggle = function toggle() {
            if ($(this._element).hasClass(ClassName$3.SHOW)) {
                this.hide();
            } else {
                this.show();
            }
        };

        _proto.show = function show() {
            var _this = this;

            if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
                return;
            }

            var actives;
            var activesData;

            if (this._parent) {
                actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
                    if (typeof _this._config.parent === 'string') {
                        return elem.getAttribute('data-parent') === _this._config.parent;
                    }

                    return elem.classList.contains(ClassName$3.COLLAPSE);
                });

                if (actives.length === 0) {
                    actives = null;
                }
            }

            if (actives) {
                activesData = $(actives).not(this._selector).data(DATA_KEY$3);

                if (activesData && activesData._isTransitioning) {
                    return;
                }
            }

            var startEvent = $.Event(Event$3.SHOW);
            $(this._element).trigger(startEvent);

            if (startEvent.isDefaultPrevented()) {
                return;
            }

            if (actives) {
                Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

                if (!activesData) {
                    $(actives).data(DATA_KEY$3, null);
                }
            }

            var dimension = this._getDimension();

            $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
            this._element.style[dimension] = 0;

            if (this._triggerArray.length) {
                $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
            }

            this.setTransitioning(true);

            var complete = function complete() {
                $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
                _this._element.style[dimension] = '';

                _this.setTransitioning(false);

                $(_this._element).trigger(Event$3.SHOWN);
            };

            var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            var scrollSize = "scroll" + capitalizedDimension;
            var transitionDuration = Util.getTransitionDurationFromElement(this._element);
            $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
            this._element.style[dimension] = this._element[scrollSize] + "px";
        };

        _proto.hide = function hide() {
            var _this2 = this;

            if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
                return;
            }

            var startEvent = $.Event(Event$3.HIDE);
            $(this._element).trigger(startEvent);

            if (startEvent.isDefaultPrevented()) {
                return;
            }

            var dimension = this._getDimension();

            this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
            Util.reflow(this._element);
            $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
            var triggerArrayLength = this._triggerArray.length;

            if (triggerArrayLength > 0) {
                for (var i = 0; i < triggerArrayLength; i++) {
                    var trigger = this._triggerArray[i];
                    var selector = Util.getSelectorFromElement(trigger);

                    if (selector !== null) {
                        var $elem = $([].slice.call(document.querySelectorAll(selector)));

                        if (!$elem.hasClass(ClassName$3.SHOW)) {
                            $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
                        }
                    }
                }
            }

            this.setTransitioning(true);

            var complete = function complete() {
                _this2.setTransitioning(false);

                $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
            };

            this._element.style[dimension] = '';
            var transitionDuration = Util.getTransitionDurationFromElement(this._element);
            $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        };

        _proto.setTransitioning = function setTransitioning(isTransitioning) {
            this._isTransitioning = isTransitioning;
        };

        _proto.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY$3);
            this._config = null;
            this._parent = null;
            this._element = null;
            this._triggerArray = null;
            this._isTransitioning = null;
        } // Private
            ;

        _proto._getConfig = function _getConfig(config) {
            config = _objectSpread({}, Default$1, config);
            config.toggle = Boolean(config.toggle); // Coerce string values

            Util.typeCheckConfig(NAME$3, config, DefaultType$1);
            return config;
        };

        _proto._getDimension = function _getDimension() {
            var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
            return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
        };

        _proto._getParent = function _getParent() {
            var _this3 = this;

            var parent;

            if (Util.isElement(this._config.parent)) {
                parent = this._config.parent; // It's a jQuery object

                if (typeof this._config.parent.jquery !== 'undefined') {
                    parent = this._config.parent[0];
                }
            } else {
                parent = document.querySelector(this._config.parent);
            }

            var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
            var children = [].slice.call(parent.querySelectorAll(selector));
            $(children).each(function (i, element) {
                _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
            });
            return parent;
        };

        _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
            var isOpen = $(element).hasClass(ClassName$3.SHOW);

            if (triggerArray.length) {
                $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
            }
        } // Static
            ;

        Collapse._getTargetFromElement = function _getTargetFromElement(element) {
            var selector = Util.getSelectorFromElement(element);
            return selector ? document.querySelector(selector) : null;
        };

        Collapse._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DATA_KEY$3);

                var _config = _objectSpread({}, Default$1, $this.data(), typeof config === 'object' && config ? config : {});

                if (!data && _config.toggle && /show|hide/.test(config)) {
                    _config.toggle = false;
                }

                if (!data) {
                    data = new Collapse(this, _config);
                    $this.data(DATA_KEY$3, data);
                }

                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }

                    data[config]();
                }
            });
        };

        _createClass(Collapse, null, [{
            key: "VERSION",
            get: function get() {
                return VERSION$3;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default$1;
            }
        }]);

        return Collapse;
    }();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
        event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
        var $target = $(this);
        var data = $target.data(DATA_KEY$3);
        var config = data ? 'toggle' : $trigger.data();

        Collapse._jQueryInterface.call($target, config);
    });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME$3] = Collapse._jQueryInterface;
$.fn[NAME$3].Constructor = Collapse;

$.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): popper.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

/**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.14.7
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        timeoutDuration = 1;
        break;
    }
}

function microtaskDebounce(fn) {
    var called = false;
    return function () {
        if (called) {
            return;
        }
        called = true;
        window.Promise.resolve().then(function () {
            called = false;
            fn();
        });
    };
}

function taskDebounce(fn) {
    var scheduled = false;
    return function () {
        if (!scheduled) {
            scheduled = true;
            setTimeout(function () {
                scheduled = false;
                fn();
            }, timeoutDuration);
        }
    };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }

    switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
        return element;
    }

    return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
    if (!element) {
        return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
        offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }

    return offsetParent;
}

function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
        return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }

    return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }

        return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    } else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
    }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
        var html = element.ownerDocument.documentElement;
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }

    return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}

var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();





var defineProperty = function (obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }

    return obj;
};

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
    return _extends({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
    });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE(10)) {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
        } else {
            rect = element.getBoundingClientRect();
        }
    } catch (e) { }

    var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');

        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
    }

    return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        var marginTop = parseFloat(styles.marginTop, 10);
        var marginLeft = parseFloat(styles.marginLeft, 10);

        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;

        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }

    return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
        top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
        left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
        width: width,
        height: height
    };

    return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
        return false;
    }
    return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
    }
    return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
        // Handle other cases based on DOM element used as boundaries
        var boundariesNode = void 0;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(reference));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = popper.ownerDocument.documentElement;
            }
        } else if (boundariesElement === 'window') {
            boundariesNode = popper.ownerDocument.documentElement;
        } else {
            boundariesNode = boundariesElement;
        }

        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(popper.ownerDocument),
                height = _getWindowSizes.height,
                width = _getWindowSizes.width;

            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
        } else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
}

function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
        return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
        return _extends({
            key: key
        }, rects[key], {
                area: getArea(rects[key])
            });
    }).sort(function (a, b) {
        return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
        var width = _ref2.width,
            height = _ref2.height;
        return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
        width: element.offsetWidth + y,
        height: element.offsetHeight + x
    };
    return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
        return hash[matched];
    });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
        width: popperRect.width,
        height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
        popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
        popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
        return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
        return arr.findIndex(function (cur) {
            return cur[prop] === value;
        });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
        return obj[prop] === value;
    });
    return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
        if (modifier['function']) {
            // eslint-disable-line dot-notation
            console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        }
        var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
        if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);

            data = fn(data, modifier);
        }
    });

    return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
        return;
    }

    var data = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: false,
        offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
        this.state.isCreated = true;
        this.options.onCreate(data);
    } else {
        this.options.onUpdate(data);
    }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
        var name = _ref.name,
            enabled = _ref.enabled;
        return enabled && name === modifierName;
    });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        var toCheck = prefix ? '' + prefix + upperProp : property;
        if (typeof document.body.style[toCheck] !== 'undefined') {
            return toCheck;
        }
    }
    return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
        this.popper.removeAttribute('x-placement');
        this.popper.style.position = '';
        this.popper.style.top = '';
        this.popper.style.left = '';
        this.popper.style.right = '';
        this.popper.style.bottom = '';
        this.popper.style.willChange = '';
        this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
        this.popper.parentNode.removeChild(this.popper);
    }
    return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
        attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
    if (!this.state.eventsEnabled) {
        this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
        target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
    if (this.state.eventsEnabled) {
        cancelAnimationFrame(this.scheduleUpdate);
        this.state = removeEventListeners(this.reference, this.state);
    }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
        var unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
        }
        element.style[prop] = styles[prop] + unit;
    });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
        var value = attributes[prop];
        if (value !== false) {
            element.setAttribute(prop, attributes[prop]);
        } else {
            element.removeAttribute(prop);
        }
    });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
        setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
        return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
        left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
        top: verticalToInteger(popper.top),
        bottom: verticalToInteger(popper.bottom),
        right: horizontalToInteger(popper.right)
    };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
        console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
        position: popper.position
    };

    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
        // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
        // and not the bottom of the html element
        if (offsetParent.nodeName === 'HTML') {
            top = -offsetParent.clientHeight + offsets.bottom;
        } else {
            top = -offsetParentRect.height + offsets.bottom;
        }
    } else {
        top = offsets.top;
    }
    if (sideB === 'right') {
        if (offsetParent.nodeName === 'HTML') {
            left = -offsetParent.clientWidth + offsets.right;
        } else {
            left = -offsetParentRect.width + offsets.right;
        }
    } else {
        left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
        styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
        styles[sideA] = 0;
        styles[sideB] = 0;
        styles.willChange = 'transform';
    } else {
        // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
        var invertTop = sideA === 'bottom' ? -1 : 1;
        var invertLeft = sideB === 'right' ? -1 : 1;
        styles[sideA] = top * invertTop;
        styles[sideB] = left * invertLeft;
        styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
        'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
        var name = _ref.name;
        return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
        return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
        var _requesting = '`' + requestingName + '`';
        var requested = '`' + requestedName + '`';
        console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
        return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = data.instance.popper.querySelector(arrowElement);

        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) {
            return data;
        }
    } else {
        // if the arrowElement isn't a query selector we must check that the
        // provided DOM node is child of its popper node
        if (!data.instance.popper.contains(arrowElement)) {
            console.warn('WARNING: `arrow.element` must be child of its popper element!');
            return data;
        }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
        data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
        data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
    if (variation === 'end') {
        return 'start';
    } else if (variation === 'start') {
        return 'end';
    }
    return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
        return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
        // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
        return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
        case BEHAVIORS.FLIP:
            flipOrder = [placement, placementOpposite];
            break;
        case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;
        case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;
        default:
            flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }

        placement = data.placement.split('-')[0];
        placementOpposite = getOppositePlacement(placement);

        var popperOffsets = data.offsets.popper;
        var refOffsets = data.offsets.reference;

        // using floor because the reference offsets may contain decimals we are not going to consider here
        var floor = Math.floor;
        var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

        var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
        var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
        var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
        var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

        // flip the variation if required
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            // this boolean to detect any flip loop
            data.flipped = true;

            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }

            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }

            data.placement = placement + (variation ? '-' + variation : '');

            // this object contains `position`, we want to preserve it along with
            // any additional property we may add in the future
            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

            data = runModifiers(data.instance.modifiers, data, 'flip');
        }
    });
    return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
        data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
        data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
        return str;
    }

    if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch (unit) {
            case '%p':
                element = popperOffsets;
                break;
            case '%':
            case '%r':
            default:
                element = referenceOffsets;
        }

        var rect = getClientRect(element);
        return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
        // if is a vh or vw, we calculate the size based on the viewport
        var size = void 0;
        if (unit === 'vh') {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        } else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
        return size / 100 * value;
    } else {
        // if is an explicit pixel unit, we get rid of the unit and keep the value
        // if is an implicit unit, it's px, and we return just the value
        return value;
    }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
        return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
        return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
        // Most of the units rely on the orientation of the popper
        var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
        var mergeWithPrevious = false;
        return op
            // This aggregates any `+` or `-` sign that aren't considered operators
            // e.g.: 10 + +5 => [10, +, +5]
            .reduce(function (a, b) {
                if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
                    a[a.length - 1] = b;
                    mergeWithPrevious = true;
                    return a;
                } else if (mergeWithPrevious) {
                    a[a.length - 1] += b;
                    mergeWithPrevious = false;
                    return a;
                } else {
                    return a.concat(b);
                }
            }, [])
            // Here we convert the string values into number values (in px)
            .map(function (str) {
                return toValue(str, measurement, popperOffsets, referenceOffsets);
            });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
        op.forEach(function (frag, index2) {
            if (isNumeric(frag)) {
                offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
            }
        });
    });
    return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
        offsets = [+offset, 0];
    } else {
        offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
        popper.top += offsets[0];
        popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
        popper.top += offsets[0];
        popper.left += offsets[1];
    } else if (basePlacement === 'top') {
        popper.left += offsets[0];
        popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
        popper.left += offsets[0];
        popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
        boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
        primary: function primary(placement) {
            var value = popper[placement];
            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                value = Math.max(popper[placement], boundaries[placement]);
            }
            return defineProperty({}, placement, value);
        },
        secondary: function secondary(placement) {
            var mainSide = placement === 'right' ? 'left' : 'top';
            var value = popper[mainSide];
            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
            }
            return defineProperty({}, mainSide, value);
        }
    };

    order.forEach(function (placement) {
        var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        popper = _extends({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
        var _data$offsets = data.offsets,
            reference = _data$offsets.reference,
            popper = _data$offsets.popper;

        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        var side = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';

        var shiftOffsets = {
            start: defineProperty({}, side, reference[side]),
            end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
        };

        data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
        return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === true) {
            return data;
        }

        data.hide = true;
        data.attributes['x-out-of-boundaries'] = '';
    } else {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === false) {
            return data;
        }

        data.hide = false;
        data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
        /** @prop {number} order=100 - Index used to define the order of execution */
        order: 100,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
        /** @prop {number} order=200 - Index used to define the order of execution */
        order: 200,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: offset,
        /** @prop {Number|String} offset=0
         * The offset value as described in the modifier description
         */
        offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
        /** @prop {number} order=300 - Index used to define the order of execution */
        order: 300,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: preventOverflow,
        /**
         * @prop {Array} [priority=['left','right','top','bottom']]
         * Popper will try to prevent overflow following these priorities by default,
         * then, it could overflow on the left and on top of the `boundariesElement`
         */
        priority: ['left', 'right', 'top', 'bottom'],
        /**
         * @prop {number} padding=5
         * Amount of pixel used to define a minimum distance between the boundaries
         * and the popper. This makes sure the popper always has a little padding
         * between the edges of its container
         */
        padding: 5,
        /**
         * @prop {String|HTMLElement} boundariesElement='scrollParent'
         * Boundaries used by the modifier. Can be `scrollParent`, `window`,
         * `viewport` or any DOM element.
         */
        boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
        /** @prop {number} order=400 - Index used to define the order of execution */
        order: 400,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
        /** @prop {number} order=500 - Index used to define the order of execution */
        order: 500,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: arrow,
        /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
        element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
        /** @prop {number} order=600 - Index used to define the order of execution */
        order: 600,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: flip,
        /**
         * @prop {String|Array} behavior='flip'
         * The behavior used to change the popper's placement. It can be one of
         * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
         * placements (with optional variations)
         */
        behavior: 'flip',
        /**
         * @prop {number} padding=5
         * The popper will flip if it hits the edges of the `boundariesElement`
         */
        padding: 5,
        /**
         * @prop {String|HTMLElement} boundariesElement='viewport'
         * The element which will define the boundaries of the popper position.
         * The popper will never be placed outside of the defined boundaries
         * (except if `keepTogether` is enabled)
         */
        boundariesElement: 'viewport'
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
        /** @prop {number} order=700 - Index used to define the order of execution */
        order: 700,
        /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
        enabled: false,
        /** @prop {ModifierFn} */
        fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
        /** @prop {number} order=800 - Index used to define the order of execution */
        order: 800,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
        /** @prop {number} order=850 - Index used to define the order of execution */
        order: 850,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: computeStyle,
        /**
         * @prop {Boolean} gpuAcceleration=true
         * If true, it uses the CSS 3D transformation to position the popper.
         * Otherwise, it will use the `top` and `left` properties
         */
        gpuAcceleration: true,
        /**
         * @prop {string} [x='bottom']
         * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
         * Change this if your popper should grow in a direction different from `bottom`
         */
        x: 'bottom',
        /**
         * @prop {string} [x='left']
         * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
         * Change this if your popper should grow in a direction different from `right`
         */
        y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
        /** @prop {number} order=900 - Index used to define the order of execution */
        order: 900,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: applyStyle,
        /** @prop {Function} */
        onLoad: applyStyleOnLoad,
        /**
         * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
         * @prop {Boolean} gpuAcceleration=true
         * If true, it uses the CSS 3D transformation to position the popper.
         * Otherwise, it will use the `top` and `left` properties
         */
        gpuAcceleration: undefined
    }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() { },

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() { },

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
        var _this = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        classCallCheck(this, Popper);

        this.scheduleUpdate = function () {
            return requestAnimationFrame(_this.update);
        };

        // make update() debounced, so that it only runs at most once-per-tick
        this.update = debounce(this.update.bind(this));

        // with {} we create a new object with the options inside it
        this.options = _extends({}, Popper.Defaults, options);

        // init state
        this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
        };

        // get reference and popper elements (allow jQuery wrappers)
        this.reference = reference && reference.jquery ? reference[0] : reference;
        this.popper = popper && popper.jquery ? popper[0] : popper;

        // Deep merge modifiers options
        this.options.modifiers = {};
        Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
            _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
        });

        // Refactoring modifiers' list (Object => Array)
        this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
            return _extends({
                name: name
            }, _this.options.modifiers[name]);
        })
            // sort the modifiers by order
            .sort(function (a, b) {
                return a.order - b.order;
            });

        // modifiers have the ability to execute arbitrary code when Popper.js get inited
        // such code is executed in the same order of its modifier
        // they could add new properties to their options configuration
        // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
        this.modifiers.forEach(function (modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
        });

        // fire the first update to position the popper in the right place
        this.update();

        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) {
            // setup event listeners, they will take care of update the position in specific situations
            this.enableEventListeners();
        }

        this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
        key: 'update',
        value: function update$$1() {
            return update.call(this);
        }
    }, {
        key: 'destroy',
        value: function destroy$$1() {
            return destroy.call(this);
        }
    }, {
        key: 'enableEventListeners',
        value: function enableEventListeners$$1() {
            return enableEventListeners.call(this);
        }
    }, {
        key: 'disableEventListeners',
        value: function disableEventListeners$$1() {
            return disableEventListeners.call(this);
        }

        /**
         * Schedules an update. It will run on the next UI update available.
         * @method scheduleUpdate
         * @memberof Popper
         */


        /**
         * Collection of utilities useful when writing custom modifiers.
         * Starting from version 1.7, this method is available only if you
         * include `popper-utils.js` before `popper.js`.
         *
         * **DEPRECATION**: This way to access PopperUtils is deprecated
         * and will be removed in v2! Use the PopperUtils module directly instead.
         * Due to the high instability of the methods contained in Utils, we can't
         * guarantee them to follow semver. Use them at your own risk!
         * @static
         * @private
         * @type {Object}
         * @deprecated since version 1.8
         * @member Utils
         * @memberof Popper
         */

    }]);
    return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

var NAME$4 = 'dropdown';
var VERSION$4 = '4.3.1';
var DATA_KEY$4 = 'bs.dropdown';
var EVENT_KEY$4 = "." + DATA_KEY$4;
var DATA_API_KEY$4 = '.data-api';
var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
};
var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
};
var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
};
var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
};
var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
};
var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var Dropdown =
    /*#__PURE__*/
    function () {
        function Dropdown(element, config) {
            this._element = element;
            this._popper = null;
            this._config = this._getConfig(config);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();

            this._addEventListeners();
        } // Getters


        var _proto = Dropdown.prototype;

        // Public
        _proto.toggle = function toggle() {
            if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
                return;
            }

            var parent = Dropdown._getParentFromElement(this._element);

            var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

            Dropdown._clearMenus();

            if (isActive) {
                return;
            }

            var relatedTarget = {
                relatedTarget: this._element
            };
            var showEvent = $.Event(Event$4.SHOW, relatedTarget);
            $(parent).trigger(showEvent);

            if (showEvent.isDefaultPrevented()) {
                return;
            } // Disable totally Popper.js for Dropdown in Navbar


            if (!this._inNavbar) {
                /**
                 * Check for Popper dependency
                 * Popper - https://popper.js.org
                 */
                if (typeof Popper === 'undefined') {
                    throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
                }

                var referenceElement = this._element;

                if (this._config.reference === 'parent') {
                    referenceElement = parent;
                } else if (Util.isElement(this._config.reference)) {
                    referenceElement = this._config.reference; // Check if it's jQuery element

                    if (typeof this._config.reference.jquery !== 'undefined') {
                        referenceElement = this._config.reference[0];
                    }
                } // If boundary is not `scrollParent`, then set position to `static`
                // to allow the menu to "escape" the scroll parent's boundaries
                // https://github.com/twbs/bootstrap/issues/24251


                if (this._config.boundary !== 'scrollParent') {
                    $(parent).addClass(ClassName$4.POSITION_STATIC);
                }

                this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
            } // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


            if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
                $(document.body).children().on('mouseover', null, $.noop);
            }

            this._element.focus();

            this._element.setAttribute('aria-expanded', true);

            $(this._menu).toggleClass(ClassName$4.SHOW);
            $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
        };

        _proto.show = function show() {
            if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
                return;
            }

            var relatedTarget = {
                relatedTarget: this._element
            };
            var showEvent = $.Event(Event$4.SHOW, relatedTarget);

            var parent = Dropdown._getParentFromElement(this._element);

            $(parent).trigger(showEvent);

            if (showEvent.isDefaultPrevented()) {
                return;
            }

            $(this._menu).toggleClass(ClassName$4.SHOW);
            $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
        };

        _proto.hide = function hide() {
            if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
                return;
            }

            var relatedTarget = {
                relatedTarget: this._element
            };
            var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

            var parent = Dropdown._getParentFromElement(this._element);

            $(parent).trigger(hideEvent);

            if (hideEvent.isDefaultPrevented()) {
                return;
            }

            $(this._menu).toggleClass(ClassName$4.SHOW);
            $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
        };

        _proto.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY$4);
            $(this._element).off(EVENT_KEY$4);
            this._element = null;
            this._menu = null;

            if (this._popper !== null) {
                this._popper.destroy();

                this._popper = null;
            }
        };

        _proto.update = function update() {
            this._inNavbar = this._detectNavbar();

            if (this._popper !== null) {
                this._popper.scheduleUpdate();
            }
        } // Private
            ;

        _proto._addEventListeners = function _addEventListeners() {
            var _this = this;

            $(this._element).on(Event$4.CLICK, function (event) {
                event.preventDefault();
                event.stopPropagation();

                _this.toggle();
            });
        };

        _proto._getConfig = function _getConfig(config) {
            config = _objectSpread({}, this.constructor.Default, $(this._element).data(), config);
            Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
            return config;
        };

        _proto._getMenuElement = function _getMenuElement() {
            if (!this._menu) {
                var parent = Dropdown._getParentFromElement(this._element);

                if (parent) {
                    this._menu = parent.querySelector(Selector$4.MENU);
                }
            }

            return this._menu;
        };

        _proto._getPlacement = function _getPlacement() {
            var $parentDropdown = $(this._element.parentNode);
            var placement = AttachmentMap.BOTTOM; // Handle dropup

            if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
                placement = AttachmentMap.TOP;

                if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
                    placement = AttachmentMap.TOPEND;
                }
            } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
                placement = AttachmentMap.RIGHT;
            } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
                placement = AttachmentMap.LEFT;
            } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
                placement = AttachmentMap.BOTTOMEND;
            }

            return placement;
        };

        _proto._detectNavbar = function _detectNavbar() {
            return $(this._element).closest('.navbar').length > 0;
        };

        _proto._getOffset = function _getOffset() {
            var _this2 = this;

            var offset = {};

            if (typeof this._config.offset === 'function') {
                offset.fn = function (data) {
                    data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
                    return data;
                };
            } else {
                offset.offset = this._config.offset;
            }

            return offset;
        };

        _proto._getPopperConfig = function _getPopperConfig() {
            var popperConfig = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                } // Disable Popper.js if we have a static display

            };

            if (this._config.display === 'static') {
                popperConfig.modifiers.applyStyle = {
                    enabled: false
                };
            }

            return popperConfig;
        } // Static
            ;

        Dropdown._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function () {
                var data = $(this).data(DATA_KEY$4);

                var _config = typeof config === 'object' ? config : null;

                if (!data) {
                    data = new Dropdown(this, _config);
                    $(this).data(DATA_KEY$4, data);
                }

                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }

                    data[config]();
                }
            });
        };

        Dropdown._clearMenus = function _clearMenus(event) {
            if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
                return;
            }

            var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

            for (var i = 0, len = toggles.length; i < len; i++) {
                var parent = Dropdown._getParentFromElement(toggles[i]);

                var context = $(toggles[i]).data(DATA_KEY$4);
                var relatedTarget = {
                    relatedTarget: toggles[i]
                };

                if (event && event.type === 'click') {
                    relatedTarget.clickEvent = event;
                }

                if (!context) {
                    continue;
                }

                var dropdownMenu = context._menu;

                if (!$(parent).hasClass(ClassName$4.SHOW)) {
                    continue;
                }

                if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
                    continue;
                }

                var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
                $(parent).trigger(hideEvent);

                if (hideEvent.isDefaultPrevented()) {
                    continue;
                } // If this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support


                if ('ontouchstart' in document.documentElement) {
                    $(document.body).children().off('mouseover', null, $.noop);
                }

                toggles[i].setAttribute('aria-expanded', 'false');
                $(dropdownMenu).removeClass(ClassName$4.SHOW);
                $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
            }
        };

        Dropdown._getParentFromElement = function _getParentFromElement(element) {
            var parent;
            var selector = Util.getSelectorFromElement(element);

            if (selector) {
                parent = document.querySelector(selector);
            }

            return parent || element.parentNode;
        } // eslint-disable-next-line complexity
            ;

        Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
            // If not input/textarea:
            //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
            // If input/textarea:
            //  - If space key => not a dropdown command
            //  - If key is other than escape
            //    - If key is not up or down => not a dropdown command
            //    - If trigger inside the menu => not a dropdown command
            if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
                return;
            }

            var parent = Dropdown._getParentFromElement(this);

            var isActive = $(parent).hasClass(ClassName$4.SHOW);

            if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
                if (event.which === ESCAPE_KEYCODE) {
                    var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
                    $(toggle).trigger('focus');
                }

                $(this).trigger('click');
                return;
            }

            var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS));

            if (items.length === 0) {
                return;
            }

            var index = items.indexOf(event.target);

            if (event.which === ARROW_UP_KEYCODE && index > 0) {
                // Up
                index--;
            }

            if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
                // Down
                index++;
            }

            if (index < 0) {
                index = 0;
            }

            items[index].focus();
        };

        _createClass(Dropdown, null, [{
            key: "VERSION",
            get: function get() {
                return VERSION$4;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default$2;
            }
        }, {
            key: "DefaultType",
            get: function get() {
                return DefaultType$2;
            }
        }]);

        return Dropdown;
    }();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
}).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME$4] = Dropdown._jQueryInterface;
$.fn[NAME$4].Constructor = Dropdown;

$.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

var NAME$5 = 'modal';
var VERSION$5 = '4.3.1';
var DATA_KEY$5 = 'bs.modal';
var EVENT_KEY$5 = "." + DATA_KEY$5;
var DATA_API_KEY$5 = '.data-api';
var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
};
var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
};
var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
};
var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
};
var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var Modal =
    /*#__PURE__*/
    function () {
        function Modal(element, config) {
            this._config = this._getConfig(config);
            this._element = element;
            this._dialog = element.querySelector(Selector$5.DIALOG);
            this._backdrop = null;
            this._isShown = false;
            this._isBodyOverflowing = false;
            this._ignoreBackdropClick = false;
            this._isTransitioning = false;
            this._scrollbarWidth = 0;
        } // Getters


        var _proto = Modal.prototype;

        // Public
        _proto.toggle = function toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
        };

        _proto.show = function show(relatedTarget) {
            var _this = this;

            if (this._isShown || this._isTransitioning) {
                return;
            }

            if ($(this._element).hasClass(ClassName$5.FADE)) {
                this._isTransitioning = true;
            }

            var showEvent = $.Event(Event$5.SHOW, {
                relatedTarget: relatedTarget
            });
            $(this._element).trigger(showEvent);

            if (this._isShown || showEvent.isDefaultPrevented()) {
                return;
            }

            this._isShown = true;

            this._checkScrollbar();

            this._setScrollbar();

            this._adjustDialog();

            this._setEscapeEvent();

            this._setResizeEvent();

            $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
                return _this.hide(event);
            });
            $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
                $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
                    if ($(event.target).is(_this._element)) {
                        _this._ignoreBackdropClick = true;
                    }
                });
            });

            this._showBackdrop(function () {
                return _this._showElement(relatedTarget);
            });
        };

        _proto.hide = function hide(event) {
            var _this2 = this;

            if (event) {
                event.preventDefault();
            }

            if (!this._isShown || this._isTransitioning) {
                return;
            }

            var hideEvent = $.Event(Event$5.HIDE);
            $(this._element).trigger(hideEvent);

            if (!this._isShown || hideEvent.isDefaultPrevented()) {
                return;
            }

            this._isShown = false;
            var transition = $(this._element).hasClass(ClassName$5.FADE);

            if (transition) {
                this._isTransitioning = true;
            }

            this._setEscapeEvent();

            this._setResizeEvent();

            $(document).off(Event$5.FOCUSIN);
            $(this._element).removeClass(ClassName$5.SHOW);
            $(this._element).off(Event$5.CLICK_DISMISS);
            $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

            if (transition) {
                var transitionDuration = Util.getTransitionDurationFromElement(this._element);
                $(this._element).one(Util.TRANSITION_END, function (event) {
                    return _this2._hideModal(event);
                }).emulateTransitionEnd(transitionDuration);
            } else {
                this._hideModal();
            }
        };

        _proto.dispose = function dispose() {
            [window, this._element, this._dialog].forEach(function (htmlElement) {
                return $(htmlElement).off(EVENT_KEY$5);
            });
            /**
             * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
             * Do not move `document` in `htmlElements` array
             * It will remove `Event.CLICK_DATA_API` event that should remain
             */

            $(document).off(Event$5.FOCUSIN);
            $.removeData(this._element, DATA_KEY$5);
            this._config = null;
            this._element = null;
            this._dialog = null;
            this._backdrop = null;
            this._isShown = null;
            this._isBodyOverflowing = null;
            this._ignoreBackdropClick = null;
            this._isTransitioning = null;
            this._scrollbarWidth = null;
        };

        _proto.handleUpdate = function handleUpdate() {
            this._adjustDialog();
        } // Private
            ;

        _proto._getConfig = function _getConfig(config) {
            config = _objectSpread({}, Default$3, config);
            Util.typeCheckConfig(NAME$5, config, DefaultType$3);
            return config;
        };

        _proto._showElement = function _showElement(relatedTarget) {
            var _this3 = this;

            var transition = $(this._element).hasClass(ClassName$5.FADE);

            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                // Don't move modal's DOM position
                document.body.appendChild(this._element);
            }

            this._element.style.display = 'block';

            this._element.removeAttribute('aria-hidden');

            this._element.setAttribute('aria-modal', true);

            if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE)) {
                this._dialog.querySelector(Selector$5.MODAL_BODY).scrollTop = 0;
            } else {
                this._element.scrollTop = 0;
            }

            if (transition) {
                Util.reflow(this._element);
            }

            $(this._element).addClass(ClassName$5.SHOW);

            if (this._config.focus) {
                this._enforceFocus();
            }

            var shownEvent = $.Event(Event$5.SHOWN, {
                relatedTarget: relatedTarget
            });

            var transitionComplete = function transitionComplete() {
                if (_this3._config.focus) {
                    _this3._element.focus();
                }

                _this3._isTransitioning = false;
                $(_this3._element).trigger(shownEvent);
            };

            if (transition) {
                var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
                $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
            } else {
                transitionComplete();
            }
        };

        _proto._enforceFocus = function _enforceFocus() {
            var _this4 = this;

            $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
                .on(Event$5.FOCUSIN, function (event) {
                    if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
                        _this4._element.focus();
                    }
                });
        };

        _proto._setEscapeEvent = function _setEscapeEvent() {
            var _this5 = this;

            if (this._isShown && this._config.keyboard) {
                $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
                    if (event.which === ESCAPE_KEYCODE$1) {
                        event.preventDefault();

                        _this5.hide();
                    }
                });
            } else if (!this._isShown) {
                $(this._element).off(Event$5.KEYDOWN_DISMISS);
            }
        };

        _proto._setResizeEvent = function _setResizeEvent() {
            var _this6 = this;

            if (this._isShown) {
                $(window).on(Event$5.RESIZE, function (event) {
                    return _this6.handleUpdate(event);
                });
            } else {
                $(window).off(Event$5.RESIZE);
            }
        };

        _proto._hideModal = function _hideModal() {
            var _this7 = this;

            this._element.style.display = 'none';

            this._element.setAttribute('aria-hidden', true);

            this._element.removeAttribute('aria-modal');

            this._isTransitioning = false;

            this._showBackdrop(function () {
                $(document.body).removeClass(ClassName$5.OPEN);

                _this7._resetAdjustments();

                _this7._resetScrollbar();

                $(_this7._element).trigger(Event$5.HIDDEN);
            });
        };

        _proto._removeBackdrop = function _removeBackdrop() {
            if (this._backdrop) {
                $(this._backdrop).remove();
                this._backdrop = null;
            }
        };

        _proto._showBackdrop = function _showBackdrop(callback) {
            var _this8 = this;

            var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

            if (this._isShown && this._config.backdrop) {
                this._backdrop = document.createElement('div');
                this._backdrop.className = ClassName$5.BACKDROP;

                if (animate) {
                    this._backdrop.classList.add(animate);
                }

                $(this._backdrop).appendTo(document.body);
                $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
                    if (_this8._ignoreBackdropClick) {
                        _this8._ignoreBackdropClick = false;
                        return;
                    }

                    if (event.target !== event.currentTarget) {
                        return;
                    }

                    if (_this8._config.backdrop === 'static') {
                        _this8._element.focus();
                    } else {
                        _this8.hide();
                    }
                });

                if (animate) {
                    Util.reflow(this._backdrop);
                }

                $(this._backdrop).addClass(ClassName$5.SHOW);

                if (!callback) {
                    return;
                }

                if (!animate) {
                    callback();
                    return;
                }

                var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
                $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
            } else if (!this._isShown && this._backdrop) {
                $(this._backdrop).removeClass(ClassName$5.SHOW);

                var callbackRemove = function callbackRemove() {
                    _this8._removeBackdrop();

                    if (callback) {
                        callback();
                    }
                };

                if ($(this._element).hasClass(ClassName$5.FADE)) {
                    var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

                    $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
                } else {
                    callbackRemove();
                }
            } else if (callback) {
                callback();
            }
        } // ----------------------------------------------------------------------
            // the following methods are used to handle overflowing modals
            // todo (fat): these should probably be refactored out of modal.js
            // ----------------------------------------------------------------------
            ;

        _proto._adjustDialog = function _adjustDialog() {
            var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

            if (!this._isBodyOverflowing && isModalOverflowing) {
                this._element.style.paddingLeft = this._scrollbarWidth + "px";
            }

            if (this._isBodyOverflowing && !isModalOverflowing) {
                this._element.style.paddingRight = this._scrollbarWidth + "px";
            }
        };

        _proto._resetAdjustments = function _resetAdjustments() {
            this._element.style.paddingLeft = '';
            this._element.style.paddingRight = '';
        };

        _proto._checkScrollbar = function _checkScrollbar() {
            var rect = document.body.getBoundingClientRect();
            this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
            this._scrollbarWidth = this._getScrollbarWidth();
        };

        _proto._setScrollbar = function _setScrollbar() {
            var _this9 = this;

            if (this._isBodyOverflowing) {
                // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
                //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
                var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
                var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

                $(fixedContent).each(function (index, element) {
                    var actualPadding = element.style.paddingRight;
                    var calculatedPadding = $(element).css('padding-right');
                    $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
                }); // Adjust sticky content margin

                $(stickyContent).each(function (index, element) {
                    var actualMargin = element.style.marginRight;
                    var calculatedMargin = $(element).css('margin-right');
                    $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
                }); // Adjust body padding

                var actualPadding = document.body.style.paddingRight;
                var calculatedPadding = $(document.body).css('padding-right');
                $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
            }

            $(document.body).addClass(ClassName$5.OPEN);
        };

        _proto._resetScrollbar = function _resetScrollbar() {
            // Restore fixed content padding
            var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
            $(fixedContent).each(function (index, element) {
                var padding = $(element).data('padding-right');
                $(element).removeData('padding-right');
                element.style.paddingRight = padding ? padding : '';
            }); // Restore sticky content

            var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
            $(elements).each(function (index, element) {
                var margin = $(element).data('margin-right');

                if (typeof margin !== 'undefined') {
                    $(element).css('margin-right', margin).removeData('margin-right');
                }
            }); // Restore body padding

            var padding = $(document.body).data('padding-right');
            $(document.body).removeData('padding-right');
            document.body.style.paddingRight = padding ? padding : '';
        };

        _proto._getScrollbarWidth = function _getScrollbarWidth() {
            // thx d.walsh
            var scrollDiv = document.createElement('div');
            scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
            document.body.appendChild(scrollDiv);
            var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            return scrollbarWidth;
        } // Static
            ;

        Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
            return this.each(function () {
                var data = $(this).data(DATA_KEY$5);

                var _config = _objectSpread({}, Default$3, $(this).data(), typeof config === 'object' && config ? config : {});

                if (!data) {
                    data = new Modal(this, _config);
                    $(this).data(DATA_KEY$5, data);
                }

                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }

                    data[config](relatedTarget);
                } else if (_config.show) {
                    data.show(relatedTarget);
                }
            });
        };

        _createClass(Modal, null, [{
            key: "VERSION",
            get: function get() {
                return VERSION$5;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default$3;
            }
        }]);

        return Modal;
    }();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
        target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
            // Only register focus restorer if modal will actually get shown
            return;
        }

        $target.one(Event$5.HIDDEN, function () {
            if ($(_this10).is(':visible')) {
                _this10.focus();
            }
        });
    });

    Modal._jQueryInterface.call($(target), config, this);
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME$5] = Modal._jQueryInterface;
$.fn[NAME$5].Constructor = Modal;

$.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

};
var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
        if (uriAttrs.indexOf(attrName) !== -1) {
            return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
        }

        return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
        return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
        if (attrName.match(regExp[i])) {
            return true;
        }
    }

    return false;
}

function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
        return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
        return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
        var el = elements[i];
        var elName = el.nodeName.toLowerCase();

        if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
            el.parentNode.removeChild(el);
            return "continue";
        }

        var attributeList = [].slice.call(el.attributes);
        var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
        attributeList.forEach(function (attr) {
            if (!allowedAttribute(attr, whitelistedAttributes)) {
                el.removeAttribute(attr.nodeName);
            }
        });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
        var _ret = _loop(i, len);

        if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

var NAME$6 = 'tooltip';
var VERSION$6 = '4.3.1';
var DATA_KEY$6 = 'bs.tooltip';
var EVENT_KEY$6 = "." + DATA_KEY$6;
var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
var CLASS_PREFIX = 'bs-tooltip';
var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object'
};
var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
};
var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
};
var HoverState = {
    SHOW: 'show',
    OUT: 'out'
};
var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
};
var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
};
var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
};
var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var Tooltip =
    /*#__PURE__*/
    function () {
        function Tooltip(element, config) {
            /**
             * Check for Popper dependency
             * Popper - https://popper.js.org
             */
            if (typeof Popper === 'undefined') {
                throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
            } // private


            this._isEnabled = true;
            this._timeout = 0;
            this._hoverState = '';
            this._activeTrigger = {};
            this._popper = null; // Protected

            this.element = element;
            this.config = this._getConfig(config);
            this.tip = null;

            this._setListeners();
        } // Getters


        var _proto = Tooltip.prototype;

        // Public
        _proto.enable = function enable() {
            this._isEnabled = true;
        };

        _proto.disable = function disable() {
            this._isEnabled = false;
        };

        _proto.toggleEnabled = function toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        };

        _proto.toggle = function toggle(event) {
            if (!this._isEnabled) {
                return;
            }

            if (event) {
                var dataKey = this.constructor.DATA_KEY;
                var context = $(event.currentTarget).data(dataKey);

                if (!context) {
                    context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                    $(event.currentTarget).data(dataKey, context);
                }

                context._activeTrigger.click = !context._activeTrigger.click;

                if (context._isWithActiveTrigger()) {
                    context._enter(null, context);
                } else {
                    context._leave(null, context);
                }
            } else {
                if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
                    this._leave(null, this);

                    return;
                }

                this._enter(null, this);
            }
        };

        _proto.dispose = function dispose() {
            clearTimeout(this._timeout);
            $.removeData(this.element, this.constructor.DATA_KEY);
            $(this.element).off(this.constructor.EVENT_KEY);
            $(this.element).closest('.modal').off('hide.bs.modal');

            if (this.tip) {
                $(this.tip).remove();
            }

            this._isEnabled = null;
            this._timeout = null;
            this._hoverState = null;
            this._activeTrigger = null;

            if (this._popper !== null) {
                this._popper.destroy();
            }

            this._popper = null;
            this.element = null;
            this.config = null;
            this.tip = null;
        };

        _proto.show = function show() {
            var _this = this;

            if ($(this.element).css('display') === 'none') {
                throw new Error('Please use show on visible elements');
            }

            var showEvent = $.Event(this.constructor.Event.SHOW);

            if (this.isWithContent() && this._isEnabled) {
                $(this.element).trigger(showEvent);
                var shadowRoot = Util.findShadowRoot(this.element);
                var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

                if (showEvent.isDefaultPrevented() || !isInTheDom) {
                    return;
                }

                var tip = this.getTipElement();
                var tipId = Util.getUID(this.constructor.NAME);
                tip.setAttribute('id', tipId);
                this.element.setAttribute('aria-describedby', tipId);
                this.setContent();

                if (this.config.animation) {
                    $(tip).addClass(ClassName$6.FADE);
                }

                var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

                var attachment = this._getAttachment(placement);

                this.addAttachmentClass(attachment);

                var container = this._getContainer();

                $(tip).data(this.constructor.DATA_KEY, this);

                if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
                    $(tip).appendTo(container);
                }

                $(this.element).trigger(this.constructor.Event.INSERTED);
                this._popper = new Popper(this.element, tip, {
                    placement: attachment,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: Selector$6.ARROW
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function onCreate(data) {
                        if (data.originalPlacement !== data.placement) {
                            _this._handlePopperPlacementChange(data);
                        }
                    },
                    onUpdate: function onUpdate(data) {
                        return _this._handlePopperPlacementChange(data);
                    }
                });
                $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

                if ('ontouchstart' in document.documentElement) {
                    $(document.body).children().on('mouseover', null, $.noop);
                }

                var complete = function complete() {
                    if (_this.config.animation) {
                        _this._fixTransition();
                    }

                    var prevHoverState = _this._hoverState;
                    _this._hoverState = null;
                    $(_this.element).trigger(_this.constructor.Event.SHOWN);

                    if (prevHoverState === HoverState.OUT) {
                        _this._leave(null, _this);
                    }
                };

                if ($(this.tip).hasClass(ClassName$6.FADE)) {
                    var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
                    $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
                } else {
                    complete();
                }
            }
        };

        _proto.hide = function hide(callback) {
            var _this2 = this;

            var tip = this.getTipElement();
            var hideEvent = $.Event(this.constructor.Event.HIDE);

            var complete = function complete() {
                if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
                    tip.parentNode.removeChild(tip);
                }

                _this2._cleanTipClass();

                _this2.element.removeAttribute('aria-describedby');

                $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

                if (_this2._popper !== null) {
                    _this2._popper.destroy();
                }

                if (callback) {
                    callback();
                }
            };

            $(this.element).trigger(hideEvent);

            if (hideEvent.isDefaultPrevented()) {
                return;
            }

            $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support

            if ('ontouchstart' in document.documentElement) {
                $(document.body).children().off('mouseover', null, $.noop);
            }

            this._activeTrigger[Trigger.CLICK] = false;
            this._activeTrigger[Trigger.FOCUS] = false;
            this._activeTrigger[Trigger.HOVER] = false;

            if ($(this.tip).hasClass(ClassName$6.FADE)) {
                var transitionDuration = Util.getTransitionDurationFromElement(tip);
                $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
            } else {
                complete();
            }

            this._hoverState = '';
        };

        _proto.update = function update() {
            if (this._popper !== null) {
                this._popper.scheduleUpdate();
            }
        } // Protected
            ;

        _proto.isWithContent = function isWithContent() {
            return Boolean(this.getTitle());
        };

        _proto.addAttachmentClass = function addAttachmentClass(attachment) {
            $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
        };

        _proto.getTipElement = function getTipElement() {
            this.tip = this.tip || $(this.config.template)[0];
            return this.tip;
        };

        _proto.setContent = function setContent() {
            var tip = this.getTipElement();
            this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
            $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
        };

        _proto.setElementContent = function setElementContent($element, content) {
            if (typeof content === 'object' && (content.nodeType || content.jquery)) {
                // Content is a DOM node or a jQuery
                if (this.config.html) {
                    if (!$(content).parent().is($element)) {
                        $element.empty().append(content);
                    }
                } else {
                    $element.text($(content).text());
                }

                return;
            }

            if (this.config.html) {
                if (this.config.sanitize) {
                    content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
                }

                $element.html(content);
            } else {
                $element.text(content);
            }
        };

        _proto.getTitle = function getTitle() {
            var title = this.element.getAttribute('data-original-title');

            if (!title) {
                title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
            }

            return title;
        } // Private
            ;

        _proto._getOffset = function _getOffset() {
            var _this3 = this;

            var offset = {};

            if (typeof this.config.offset === 'function') {
                offset.fn = function (data) {
                    data.offsets = _objectSpread({}, data.offsets, _this3.config.offset(data.offsets, _this3.element) || {});
                    return data;
                };
            } else {
                offset.offset = this.config.offset;
            }

            return offset;
        };

        _proto._getContainer = function _getContainer() {
            if (this.config.container === false) {
                return document.body;
            }

            if (Util.isElement(this.config.container)) {
                return $(this.config.container);
            }

            return $(document).find(this.config.container);
        };

        _proto._getAttachment = function _getAttachment(placement) {
            return AttachmentMap$1[placement.toUpperCase()];
        };

        _proto._setListeners = function _setListeners() {
            var _this4 = this;

            var triggers = this.config.trigger.split(' ');
            triggers.forEach(function (trigger) {
                if (trigger === 'click') {
                    $(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
                        return _this4.toggle(event);
                    });
                } else if (trigger !== Trigger.MANUAL) {
                    var eventIn = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
                    var eventOut = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;
                    $(_this4.element).on(eventIn, _this4.config.selector, function (event) {
                        return _this4._enter(event);
                    }).on(eventOut, _this4.config.selector, function (event) {
                        return _this4._leave(event);
                    });
                }
            });
            $(this.element).closest('.modal').on('hide.bs.modal', function () {
                if (_this4.element) {
                    _this4.hide();
                }
            });

            if (this.config.selector) {
                this.config = _objectSpread({}, this.config, {
                    trigger: 'manual',
                    selector: ''
                });
            } else {
                this._fixTitle();
            }
        };

        _proto._fixTitle = function _fixTitle() {
            var titleType = typeof this.element.getAttribute('data-original-title');

            if (this.element.getAttribute('title') || titleType !== 'string') {
                this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
                this.element.setAttribute('title', '');
            }
        };

        _proto._enter = function _enter(event, context) {
            var dataKey = this.constructor.DATA_KEY;
            context = context || $(event.currentTarget).data(dataKey);

            if (!context) {
                context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                $(event.currentTarget).data(dataKey, context);
            }

            if (event) {
                context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
            }

            if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
                context._hoverState = HoverState.SHOW;
                return;
            }

            clearTimeout(context._timeout);
            context._hoverState = HoverState.SHOW;

            if (!context.config.delay || !context.config.delay.show) {
                context.show();
                return;
            }

            context._timeout = setTimeout(function () {
                if (context._hoverState === HoverState.SHOW) {
                    context.show();
                }
            }, context.config.delay.show);
        };

        _proto._leave = function _leave(event, context) {
            var dataKey = this.constructor.DATA_KEY;
            context = context || $(event.currentTarget).data(dataKey);

            if (!context) {
                context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                $(event.currentTarget).data(dataKey, context);
            }

            if (event) {
                context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
            }

            if (context._isWithActiveTrigger()) {
                return;
            }

            clearTimeout(context._timeout);
            context._hoverState = HoverState.OUT;

            if (!context.config.delay || !context.config.delay.hide) {
                context.hide();
                return;
            }

            context._timeout = setTimeout(function () {
                if (context._hoverState === HoverState.OUT) {
                    context.hide();
                }
            }, context.config.delay.hide);
        };

        _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
            for (var trigger in this._activeTrigger) {
                if (this._activeTrigger[trigger]) {
                    return true;
                }
            }

            return false;
        };

        _proto._getConfig = function _getConfig(config) {
            var dataAttributes = $(this.element).data();
            Object.keys(dataAttributes).forEach(function (dataAttr) {
                if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
                    delete dataAttributes[dataAttr];
                }
            });
            config = _objectSpread({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

            if (typeof config.delay === 'number') {
                config.delay = {
                    show: config.delay,
                    hide: config.delay
                };
            }

            if (typeof config.title === 'number') {
                config.title = config.title.toString();
            }

            if (typeof config.content === 'number') {
                config.content = config.content.toString();
            }

            Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

            if (config.sanitize) {
                config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
            }

            return config;
        };

        _proto._getDelegateConfig = function _getDelegateConfig() {
            var config = {};

            if (this.config) {
                for (var key in this.config) {
                    if (this.constructor.Default[key] !== this.config[key]) {
                        config[key] = this.config[key];
                    }
                }
            }

            return config;
        };

        _proto._cleanTipClass = function _cleanTipClass() {
            var $tip = $(this.getTipElement());
            var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

            if (tabClass !== null && tabClass.length) {
                $tip.removeClass(tabClass.join(''));
            }
        };

        _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
            var popperInstance = popperData.instance;
            this.tip = popperInstance.popper;

            this._cleanTipClass();

            this.addAttachmentClass(this._getAttachment(popperData.placement));
        };

        _proto._fixTransition = function _fixTransition() {
            var tip = this.getTipElement();
            var initConfigAnimation = this.config.animation;

            if (tip.getAttribute('x-placement') !== null) {
                return;
            }

            $(tip).removeClass(ClassName$6.FADE);
            this.config.animation = false;
            this.hide();
            this.show();
            this.config.animation = initConfigAnimation;
        } // Static
            ;

        Tooltip._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function () {
                var data = $(this).data(DATA_KEY$6);

                var _config = typeof config === 'object' && config;

                if (!data && /dispose|hide/.test(config)) {
                    return;
                }

                if (!data) {
                    data = new Tooltip(this, _config);
                    $(this).data(DATA_KEY$6, data);
                }

                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }

                    data[config]();
                }
            });
        };

        _createClass(Tooltip, null, [{
            key: "VERSION",
            get: function get() {
                return VERSION$6;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default$4;
            }
        }, {
            key: "NAME",
            get: function get() {
                return NAME$6;
            }
        }, {
            key: "DATA_KEY",
            get: function get() {
                return DATA_KEY$6;
            }
        }, {
            key: "Event",
            get: function get() {
                return Event$6;
            }
        }, {
            key: "EVENT_KEY",
            get: function get() {
                return EVENT_KEY$6;
            }
        }, {
            key: "DefaultType",
            get: function get() {
                return DefaultType$4;
            }
        }]);

        return Tooltip;
    }();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */


$.fn[NAME$6] = Tooltip._jQueryInterface;
$.fn[NAME$6].Constructor = Tooltip;

$.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
};
/**
  * --------------------------------------------------------------------------
  * Bootstrap (v4.3.1): popover.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  * --------------------------------------------------------------------------
  */

/**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */

var NAME$7 = 'popover';
var VERSION$7 = '4.3.1';
var DATA_KEY$7 = 'bs.popover';
var EVENT_KEY$7 = "." + DATA_KEY$7;
var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
var CLASS_PREFIX$1 = 'bs-popover';
var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

var Default$5 = _objectSpread({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
});

var DefaultType$5 = _objectSpread({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
});

var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
};
var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
};
var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var Popover =
    /*#__PURE__*/
    function (_Tooltip) {
        _inheritsLoose(Popover, _Tooltip);

        function Popover() {
            return _Tooltip.apply(this, arguments) || this;
        }

        var _proto = Popover.prototype;

        // Overrides
        _proto.isWithContent = function isWithContent() {
            return this.getTitle() || this._getContent();
        };

        _proto.addAttachmentClass = function addAttachmentClass(attachment) {
            $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
        };

        _proto.getTipElement = function getTipElement() {
            this.tip = this.tip || $(this.config.template)[0];
            return this.tip;
        };

        _proto.setContent = function setContent() {
            var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

            this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

            var content = this._getContent();

            if (typeof content === 'function') {
                content = content.call(this.element);
            }

            this.setElementContent($tip.find(Selector$7.CONTENT), content);
            $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
        } // Private
            ;

        _proto._getContent = function _getContent() {
            return this.element.getAttribute('data-content') || this.config.content;
        };

        _proto._cleanTipClass = function _cleanTipClass() {
            var $tip = $(this.getTipElement());
            var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

            if (tabClass !== null && tabClass.length > 0) {
                $tip.removeClass(tabClass.join(''));
            }
        } // Static
            ;

        Popover._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function () {
                var data = $(this).data(DATA_KEY$7);

                var _config = typeof config === 'object' ? config : null;

                if (!data && /dispose|hide/.test(config)) {
                    return;
                }

                if (!data) {
                    data = new Popover(this, _config);
                    $(this).data(DATA_KEY$7, data);
                }

                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }

                    data[config]();
                }
            });
        };

        _createClass(Popover, null, [{
            key: "VERSION",
            // Getters
            get: function get() {
                return VERSION$7;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default$5;
            }
        }, {
            key: "NAME",
            get: function get() {
                return NAME$7;
            }
        }, {
            key: "DATA_KEY",
            get: function get() {
                return DATA_KEY$7;
            }
        }, {
            key: "Event",
            get: function get() {
                return Event$7;
            }
        }, {
            key: "EVENT_KEY",
            get: function get() {
                return EVENT_KEY$7;
            }
        }, {
            key: "DefaultType",
            get: function get() {
                return DefaultType$5;
            }
        }]);

        return Popover;
    }(Tooltip);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */


$.fn[NAME$7] = Popover._jQueryInterface;
$.fn[NAME$7].Constructor = Popover;

$.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$8 = 'scrollspy';
var VERSION$8 = '4.3.1';
var DATA_KEY$8 = 'bs.scrollspy';
var EVENT_KEY$8 = "." + DATA_KEY$8;
var DATA_API_KEY$6 = '.data-api';
var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
};
var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
};
var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
};
var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
};
var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
};
var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var ScrollSpy =
    /*#__PURE__*/
    function () {
        function ScrollSpy(element, config) {
            var _this = this;

            this._element = element;
            this._scrollElement = element.tagName === 'BODY' ? window : element;
            this._config = this._getConfig(config);
            this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
            this._offsets = [];
            this._targets = [];
            this._activeTarget = null;
            this._scrollHeight = 0;
            $(this._scrollElement).on(Event$8.SCROLL, function (event) {
                return _this._process(event);
            });
            this.refresh();

            this._process();
        } // Getters


        var _proto = ScrollSpy.prototype;

        // Public
        _proto.refresh = function refresh() {
            var _this2 = this;

            var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
            var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
            var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
            this._offsets = [];
            this._targets = [];
            this._scrollHeight = this._getScrollHeight();
            var targets = [].slice.call(document.querySelectorAll(this._selector));
            targets.map(function (element) {
                var target;
                var targetSelector = Util.getSelectorFromElement(element);

                if (targetSelector) {
                    target = document.querySelector(targetSelector);
                }

                if (target) {
                    var targetBCR = target.getBoundingClientRect();

                    if (targetBCR.width || targetBCR.height) {
                        // TODO (fat): remove sketch reliance on jQuery position/offset
                        return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
                    }
                }

                return null;
            }).filter(function (item) {
                return item;
            }).sort(function (a, b) {
                return a[0] - b[0];
            }).forEach(function (item) {
                _this2._offsets.push(item[0]);

                _this2._targets.push(item[1]);
            });
        };

        _proto.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY$8);
            $(this._scrollElement).off(EVENT_KEY$8);
            this._element = null;
            this._scrollElement = null;
            this._config = null;
            this._selector = null;
            this._offsets = null;
            this._targets = null;
            this._activeTarget = null;
            this._scrollHeight = null;
        } // Private
            ;

        _proto._getConfig = function _getConfig(config) {
            config = _objectSpread({}, Default$6, typeof config === 'object' && config ? config : {});

            if (typeof config.target !== 'string') {
                var id = $(config.target).attr('id');

                if (!id) {
                    id = Util.getUID(NAME$8);
                    $(config.target).attr('id', id);
                }

                config.target = "#" + id;
            }

            Util.typeCheckConfig(NAME$8, config, DefaultType$6);
            return config;
        };

        _proto._getScrollTop = function _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        };

        _proto._getScrollHeight = function _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        };

        _proto._getOffsetHeight = function _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        };

        _proto._process = function _process() {
            var scrollTop = this._getScrollTop() + this._config.offset;

            var scrollHeight = this._getScrollHeight();

            var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

            if (this._scrollHeight !== scrollHeight) {
                this.refresh();
            }

            if (scrollTop >= maxScroll) {
                var target = this._targets[this._targets.length - 1];

                if (this._activeTarget !== target) {
                    this._activate(target);
                }

                return;
            }

            if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
                this._activeTarget = null;

                this._clear();

                return;
            }

            var offsetLength = this._offsets.length;

            for (var i = offsetLength; i--;) {
                var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

                if (isActiveTarget) {
                    this._activate(this._targets[i]);
                }
            }
        };

        _proto._activate = function _activate(target) {
            this._activeTarget = target;

            this._clear();

            var queries = this._selector.split(',').map(function (selector) {
                return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
            });

            var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

            if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
                $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
                $link.addClass(ClassName$8.ACTIVE);
            } else {
                // Set triggered link as active
                $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
                // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

                $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

                $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
            }

            $(this._scrollElement).trigger(Event$8.ACTIVATE, {
                relatedTarget: target
            });
        };

        _proto._clear = function _clear() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
                return node.classList.contains(ClassName$8.ACTIVE);
            }).forEach(function (node) {
                return node.classList.remove(ClassName$8.ACTIVE);
            });
        } // Static
            ;

        ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function () {
                var data = $(this).data(DATA_KEY$8);

                var _config = typeof config === 'object' && config;

                if (!data) {
                    data = new ScrollSpy(this, _config);
                    $(this).data(DATA_KEY$8, data);
                }

                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }

                    data[config]();
                }
            });
        };

        _createClass(ScrollSpy, null, [{
            key: "VERSION",
            get: function get() {
                return VERSION$8;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default$6;
            }
        }]);

        return ScrollSpy;
    }();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
        var $spy = $(scrollSpys[i]);

        ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME$8] = ScrollSpy._jQueryInterface;
$.fn[NAME$8].Constructor = ScrollSpy;

$.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

/**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */

var NAME$9 = 'tab';
var VERSION$9 = '4.3.1';
var DATA_KEY$9 = 'bs.tab';
var EVENT_KEY$9 = "." + DATA_KEY$9;
var DATA_API_KEY$7 = '.data-api';
var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
};
var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
};
var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var Tab =
    /*#__PURE__*/
    function () {
        function Tab(element) {
            this._element = element;
        } // Getters


        var _proto = Tab.prototype;

        // Public
        _proto.show = function show() {
            var _this = this;

            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
                return;
            }

            var target;
            var previous;
            var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
            var selector = Util.getSelectorFromElement(this._element);

            if (listElement) {
                var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
                previous = $.makeArray($(listElement).find(itemSelector));
                previous = previous[previous.length - 1];
            }

            var hideEvent = $.Event(Event$9.HIDE, {
                relatedTarget: this._element
            });
            var showEvent = $.Event(Event$9.SHOW, {
                relatedTarget: previous
            });

            if (previous) {
                $(previous).trigger(hideEvent);
            }

            $(this._element).trigger(showEvent);

            if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
                return;
            }

            if (selector) {
                target = document.querySelector(selector);
            }

            this._activate(this._element, listElement);

            var complete = function complete() {
                var hiddenEvent = $.Event(Event$9.HIDDEN, {
                    relatedTarget: _this._element
                });
                var shownEvent = $.Event(Event$9.SHOWN, {
                    relatedTarget: previous
                });
                $(previous).trigger(hiddenEvent);
                $(_this._element).trigger(shownEvent);
            };

            if (target) {
                this._activate(target, target.parentNode, complete);
            } else {
                complete();
            }
        };

        _proto.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY$9);
            this._element = null;
        } // Private
            ;

        _proto._activate = function _activate(element, container, callback) {
            var _this2 = this;

            var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
            var active = activeElements[0];
            var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

            var complete = function complete() {
                return _this2._transitionComplete(element, active, callback);
            };

            if (active && isTransitioning) {
                var transitionDuration = Util.getTransitionDurationFromElement(active);
                $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
            } else {
                complete();
            }
        };

        _proto._transitionComplete = function _transitionComplete(element, active, callback) {
            if (active) {
                $(active).removeClass(ClassName$9.ACTIVE);
                var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

                if (dropdownChild) {
                    $(dropdownChild).removeClass(ClassName$9.ACTIVE);
                }

                if (active.getAttribute('role') === 'tab') {
                    active.setAttribute('aria-selected', false);
                }
            }

            $(element).addClass(ClassName$9.ACTIVE);

            if (element.getAttribute('role') === 'tab') {
                element.setAttribute('aria-selected', true);
            }

            Util.reflow(element);

            if (element.classList.contains(ClassName$9.FADE)) {
                element.classList.add(ClassName$9.SHOW);
            }

            if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
                var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

                if (dropdownElement) {
                    var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
                    $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
                }

                element.setAttribute('aria-expanded', true);
            }

            if (callback) {
                callback();
            }
        } // Static
            ;

        Tab._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DATA_KEY$9);

                if (!data) {
                    data = new Tab(this);
                    $this.data(DATA_KEY$9, data);
                }

                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }

                    data[config]();
                }
            });
        };

        _createClass(Tab, null, [{
            key: "VERSION",
            get: function get() {
                return VERSION$9;
            }
        }]);

        return Tab;
    }();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME$9] = Tab._jQueryInterface;
$.fn[NAME$9].Constructor = Tab;

$.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$a = 'toast';
var VERSION$a = '4.3.1';
var DATA_KEY$a = 'bs.toast';
var EVENT_KEY$a = "." + DATA_KEY$a;
var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
};
var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
};
var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
};
var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
};
var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

};

var Toast =
    /*#__PURE__*/
    function () {
        function Toast(element, config) {
            this._element = element;
            this._config = this._getConfig(config);
            this._timeout = null;

            this._setListeners();
        } // Getters


        var _proto = Toast.prototype;

        // Public
        _proto.show = function show() {
            var _this = this;

            $(this._element).trigger(Event$a.SHOW);

            if (this._config.animation) {
                this._element.classList.add(ClassName$a.FADE);
            }

            var complete = function complete() {
                _this._element.classList.remove(ClassName$a.SHOWING);

                _this._element.classList.add(ClassName$a.SHOW);

                $(_this._element).trigger(Event$a.SHOWN);

                if (_this._config.autohide) {
                    _this.hide();
                }
            };

            this._element.classList.remove(ClassName$a.HIDE);

            this._element.classList.add(ClassName$a.SHOWING);

            if (this._config.animation) {
                var transitionDuration = Util.getTransitionDurationFromElement(this._element);
                $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
            } else {
                complete();
            }
        };

        _proto.hide = function hide(withoutTimeout) {
            var _this2 = this;

            if (!this._element.classList.contains(ClassName$a.SHOW)) {
                return;
            }

            $(this._element).trigger(Event$a.HIDE);

            if (withoutTimeout) {
                this._close();
            } else {
                this._timeout = setTimeout(function () {
                    _this2._close();
                }, this._config.delay);
            }
        };

        _proto.dispose = function dispose() {
            clearTimeout(this._timeout);
            this._timeout = null;

            if (this._element.classList.contains(ClassName$a.SHOW)) {
                this._element.classList.remove(ClassName$a.SHOW);
            }

            $(this._element).off(Event$a.CLICK_DISMISS);
            $.removeData(this._element, DATA_KEY$a);
            this._element = null;
            this._config = null;
        } // Private
            ;

        _proto._getConfig = function _getConfig(config) {
            config = _objectSpread({}, Default$7, $(this._element).data(), typeof config === 'object' && config ? config : {});
            Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
            return config;
        };

        _proto._setListeners = function _setListeners() {
            var _this3 = this;

            $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
                return _this3.hide(true);
            });
        };

        _proto._close = function _close() {
            var _this4 = this;

            var complete = function complete() {
                _this4._element.classList.add(ClassName$a.HIDE);

                $(_this4._element).trigger(Event$a.HIDDEN);
            };

            this._element.classList.remove(ClassName$a.SHOW);

            if (this._config.animation) {
                var transitionDuration = Util.getTransitionDurationFromElement(this._element);
                $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
            } else {
                complete();
            }
        } // Static
            ;

        Toast._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function () {
                var $element = $(this);
                var data = $element.data(DATA_KEY$a);

                var _config = typeof config === 'object' && config;

                if (!data) {
                    data = new Toast(this, _config);
                    $element.data(DATA_KEY$a, data);
                }

                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }

                    data[config](this);
                }
            });
        };

        _createClass(Toast, null, [{
            key: "VERSION",
            get: function get() {
                return VERSION$a;
            }
        }, {
            key: "DefaultType",
            get: function get() {
                return DefaultType$7;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default$7;
            }
        }]);

        return Toast;
    }();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */


$.fn[NAME$a] = Toast._jQueryInterface;
$.fn[NAME$a].Constructor = Toast;

$.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

(function () {
    if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
})();

exports.Util = Util;
exports.Alert = Alert;
exports.Button = Button;
exports.Carousel = Carousel;
exports.Collapse = Collapse;
exports.Dropdown = Dropdown;
exports.Modal = Modal;
exports.Popover = Popover;
exports.Scrollspy = ScrollSpy;
exports.Tab = Tab;
exports.Toast = Toast;
exports.Tooltip = Tooltip;

Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bootstrap.bundle.js.map

  // GENERAL UTILITY FUNCTIONS
  // ===============================
  
var uniqueId = function (prefix) {
    return (prefix || 'ui-id') + '-' + Math.floor(Math.random() * 1000 + 1);
};

  
var removeMultiValAttributes = function (el, attr, val) {
    var describedby = (el.attr(attr) || "").split(/\s+/)
        , index = $.inArray(val, describedby);
    if (index !== -1) {
        describedby.splice(index, 1);
    }
    describedby = $.trim(describedby.join(" "));
    if (describedby) {
        el.attr(attr, describedby);
    } else {
        el.removeAttr(attr);
    }
};

  // Collapse Extension
  // ===============================

var $colltabs = $('[data-toggle="collapse"]');
$colltabs.attr({ 'role': 'tab', 'aria-selected': 'false', 'aria-expanded': 'false' });
$colltabs.each(function (index) {
    var colltab = $(this)
        , collpanel = colltab.attr('data-target') ? $(colltab.attr('data-target')) : $(colltab.attr('href'))
        , parent = colltab.attr('data-parent')
        , collparent = parent && $(parent)
        , collid = colltab.attr('id') || uniqueId('ui-collapse');

    $(collparent).find('div:not(.collapse,.panel-body), h4').attr('role', 'presentation');

    colltab.attr('id', collid);
    if (collparent) {
        collparent.attr({ 'role': 'tablist', 'aria-multiselectable': 'true' });
        if (collpanel.hasClass('in')) {
            colltab.attr({ 'aria-controls': colltab.attr('href').substr(1), 'aria-selected': 'true', 'aria-expanded': 'true', 'tabindex': '0' });
            collpanel.attr({ 'role': 'tabpanel', 'tabindex': '0', 'aria-labelledby': collid, 'aria-hidden': 'false' });
        } else {
            colltab.attr({ 'aria-controls': colltab.attr('href').substr(1), 'tabindex': '-1' });
            collpanel.attr({ 'role': 'tabpanel', 'tabindex': '-1', 'aria-labelledby': collid, 'aria-hidden': 'true' });
        }
    }
});

var collToggle = $.fn.collapse.Constructor.prototype.toggle;
$.fn.collapse.Constructor.prototype.toggle = function () {
    var prevTab = this.$parent && this.$parent.find('[aria-expanded="true"]'), href;

    if (prevTab) {
        var prevPanel = prevTab.attr('data-target') || (href = prevTab.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
            , $prevPanel = $(prevPanel)
            , $curPanel = this.$element
            , par = this.$parent
            , curTab;

        if (this.$parent) curTab = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr('id') + '"]');

        collToggle.apply(this, arguments);

        if ($.support.transition) {
            this.$element.one($.support.transition.end, function () {

                prevTab.attr({ 'aria-selected': 'false', 'aria-expanded': 'false', 'tabIndex': '-1' });
                $prevPanel.attr({ 'aria-hidden': 'true', 'tabIndex': '-1' });

                curTab.attr({ 'aria-selected': 'true', 'aria-expanded': 'true', 'tabIndex': '0' });

                if ($curPanel.hasClass('in')) {
                    $curPanel.attr({ 'aria-hidden': 'false', 'tabIndex': '0' });
                } else {
                    curTab.attr({ 'aria-selected': 'false', 'aria-expanded': 'false' });
                    $curPanel.attr({ 'aria-hidden': 'true', 'tabIndex': '-1' });
                }
            });
        }
    } else {
        collToggle.apply(this, arguments);
    }
};

$.fn.collapse.Constructor.prototype.keydown = function (e) {
    var $this = $(this)
        , $items
        , $tablist = $this.closest('div[role=tablist] ')
        , index
        , k = e.which || e.keyCode;

    $this = $(this);
    if (!/(32|37|38|39|40)/.test(k)) return;
    if (k === 32) $this.click();

    $items = $tablist.find('[role=tab]');
    index = $items.index($items.filter(':focus'));

    if (k === 38 || k === 37) index--;                                       // up & left
    if (k === 39 || k === 40) index++;                      // down & right
    if (index < 0) index = $items.length - 1;
    if (index === $items.length) index = 0;

    $items.eq(index).focus();

    e.preventDefault();
    e.stopPropagation();

};

$(document).on('keydown.collapse.data-api', '[data-toggle="collapse"]', $.fn.collapse.Constructor.prototype.keydown);
    
  // DROPDOWN Extension
  // ===============================
  
var toggle = '[data-toggle=dropdown]'
    , $par
    , firstItem
    , focusDelay = 200
    , menus = $(toggle).parent().find('ul').attr('role', 'menu')
    , lis = menus.find('li').attr('role', 'presentation');

lis.find('a').attr({ 'role': 'menuitem', 'tabIndex': '-1' });
$(toggle).attr({ 'aria-haspopup': 'true', 'aria-expanded': 'false' });

$(toggle).parent().on('shown.bs.dropdown', function (e) {
    $par = $(this);
    var $toggle = $par.find(toggle);
    $toggle.attr('aria-expanded', 'true');

    setTimeout(function () {
        firstItem = $('.dropdown-menu [role=menuitem]:visible', $par)[0];
        try { firstItem.focus(); } catch (ex) { }
    }, focusDelay);
});

$(toggle).parent().on('hidden.bs.dropdown', function (e) {
    $par = $(this);
    var $toggle = $par.find(toggle);
    $toggle.attr('aria-expanded', 'false');
});

    //Adding Space Key Behaviour, opens on spacebar
$.fn.dropdown.Constructor.prototype.keydown = function (e) {
    var $par
        , firstItem;
    if (!/(32)/.test(e.keyCode)) return;
    $par = $(this).parent();
    $(this).trigger("click");
    e.preventDefault() && e.stopPropagation();
};

$(document)
    .on('focusout.dropdown.data-api', '.dropdown-menu', function (e) {
        var $this = $(this)
            , that = this;
        setTimeout(function () {
            if (!$.contains(that, document.activeElement)) {
                $this.parent().removeClass('open');
                $this.parent().find('[data-toggle=dropdown]').attr('aria-expanded', 'false');
            }
        }, 150);
    })
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]', $.fn.dropdown.Constructor.prototype.keydown);
  // Tab Extension
  // ===============================
  
var $tablist = $('.nav-tabs, .nav-pills')
    , $lis = $tablist.children('li')
    , $tabs = $tablist.find('[data-toggle="tab"], [data-toggle="pill"]');

$tablist.attr('role', 'tablist');
$lis.attr('role', 'presentation');
$tabs.attr('role', 'tab');

$tabs.each(function (index) {
    var tabpanel = $($(this).attr('href'))
        , tab = $(this)
        , tabid = tab.attr('id') || uniqueId('ui-tab');

    tab.attr('id', tabid);

    if (tab.parent().hasClass('active')) {
        tab.attr({ 'tabIndex': '0', 'aria-selected': 'true', 'aria-controls': tab.attr('href').substr(1) });
        tabpanel.attr({ 'role': 'tabpanel', 'tabIndex': '0', 'aria-hidden': 'false', 'aria-labelledby': tabid });
    } else {
        tab.attr({ 'tabIndex': '-1', 'aria-selected': 'false', 'aria-controls': tab.attr('href').substr(1) });
        tabpanel.attr({ 'role': 'tabpanel', 'tabIndex': '-1', 'aria-hidden': 'true', 'aria-labelledby': tabid });
    }
});

$.fn.tab.Constructor.prototype.keydown = function (e) {
    var $this = $(this)
        , $items
        , $ul = $this.closest('ul[role=tablist] ')
        , index
        , k = e.which || e.keyCode;

    $this = $(this);
    if (!/(37|38|39|40)/.test(k)) return;

    $items = $ul.find('[role=tab]:visible');
    index = $items.index($items.filter(':focus'));

    if (k === 38 || k === 37) index--;                         // up & left
    if (k === 39 || k === 40) index++;                        // down & right


    if (index < 0) index = $items.length - 1;
    if (index === $items.length) index = 0;

    var nextTab = $items.eq(index);
    if (nextTab.attr('role') === 'tab') {

        nextTab.tab('show');
        //Comment this line for dynamically loaded tabPabels, to save Ajax requests on arrow key navigation
        nextTab.focus();
    }
    // nextTab.focus()

    e.preventDefault();
    e.stopPropagation();
};

$(document).on('keydown.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', $.fn.tab.Constructor.prototype.keydown);

   var tabactivate =    $.fn.tab.Constructor.prototype.activate;
$.fn.tab.Constructor.prototype.activate = function (element, container, callback) {
    var $active = container.find('> .active');
    $active.find('[data-toggle=tab], [data-toggle=pill]').attr({ 'tabIndex': '-1', 'aria-selected': false });
    $active.filter('.tab-pane').attr({ 'aria-hidden': true, 'tabIndex': '-1' });

    tabactivate.apply(this, arguments);

    element.addClass('active');
    element.find('[data-toggle=tab], [data-toggle=pill]').attr({ 'tabIndex': '0', 'aria-selected': true });
    element.filter('.tab-pane').attr({ 'aria-hidden': false, 'tabIndex': '0' });
};
var fakewaffle = (function ($, fakewaffle) {
    'use strict';

    var _id = 0;

    fakewaffle.responsiveTabs = function (collapseDisplayed) {

        fakewaffle.currentPosition = 'tabs';

        var tabGroups = $('.nav-tabs.responsive, .nav-pills.responsive');
        var hidden = '';
        var visible = '';
        var activeTab = '';

        if (collapseDisplayed === undefined) {
            collapseDisplayed = ['xs', 'sm'];
        }

        $.each(collapseDisplayed, function () {
            hidden += ' hidden-' + this;
            visible += ' visible-' + this;
        });

        $.each(tabGroups, function () {
            var $tabGroup = $(this);
            var tabs = $tabGroup.find('[data-toggle="tab"]');
            var collapseDiv = $('<div></div>', {
                'class': 'panel-group responsive' + visible,
                'id': 'collapse-' + +'waffle-' + _id++
            });

            $.each(tabs, function () {
                var $this = $(this);
                var oldLinkClass = $this.attr('class') === undefined ? '' : $this.attr('class');
                var newLinkClass = 'accordion-toggle collapsed';
                var oldParentClass = $this.parent().attr('class') === undefined ? '' : $this.parent().attr('class');
                var newParentClass = 'panel panel-default';
                var newHash = $this.get(0).hash.replace('#', 'collapse-');

                if (oldLinkClass.length > 0) {
                    newLinkClass += ' ' + oldLinkClass;
                }

                if (oldParentClass.length > 0) {
                    oldParentClass = oldParentClass.replace(/\bactive\b/g, '');
                    newParentClass += ' ' + oldParentClass;
                    newParentClass = newParentClass.replace(/\s{2,}/g, ' ');
                    newParentClass = newParentClass.replace(/^\s+|\s+$/g, '');
                }

                if ($this.parent().hasClass('active')) {
                    activeTab = '#' + newHash;
                }

                collapseDiv.append(
                  $('<div>').attr('class', newParentClass).html(
                    $('<div>').attr('class', 'panel-heading').html(
                      $('<h4>').attr('class', 'panel-title').html(
                        $('<a>', {
                            'class': newLinkClass,
                            'data-toggle': 'collapse',
                            'data-parent': '#collapse-' + $tabGroup.attr('id'),
                            'href': '#' + newHash,
                            'html': $this.html()
                        })
                      )
                    )
                  ).append(
                    $('<div>', {
                        'id': newHash,
                        'class': 'panel-collapse collapse'
                    })
                  )
                );
            });

            $tabGroup.next().after(collapseDiv);
            $tabGroup.addClass(hidden);
            $('.tab-content.responsive').addClass(hidden);
        });


        fakewaffle.checkResize();
        fakewaffle.bindTabToCollapse();

        if (activeTab) {
            $(activeTab).collapse('show');
        }
    };

    fakewaffle.checkResize = function () {

        if ($('.panel-group.responsive').is(':visible') === true && fakewaffle.currentPosition === 'tabs') {
            fakewaffle.tabToPanel();
            fakewaffle.currentPosition = 'panel';
        } else if ($('.panel-group.responsive').is(':visible') === false && fakewaffle.currentPosition === 'panel') {
            fakewaffle.panelToTab();
            fakewaffle.currentPosition = 'tabs';
        }

    };

    fakewaffle.tabToPanel = function () {

        var tabGroups = $('.nav-tabs.responsive, .nav-pills.responsive');

        $.each(tabGroups, function (index, tabGroup) {

            // Find the tab
            var tabContents = $(tabGroup).next('.tab-content').find('.tab-pane');

            $.each(tabContents, function (index, tabContent) {
                // Find the id to move the element to
                var destinationId = $(tabContent).attr('id').replace(/^/, '#collapse-');

                // Convert tab to panel and move to destination
                $(tabContent)
                  .removeClass('tab-pane')
                  .addClass('panel-body')
                  .appendTo($(destinationId));

            });

        });

    };

    fakewaffle.panelToTab = function () {

        var panelGroups = $('.panel-group.responsive');

        $.each(panelGroups, function (index, panelGroup) {

            var destinationId = $(panelGroup).attr('id').replace('collapse-', '#');
            var destination = $(destinationId).next('.tab-content')[0];

            // Find the panel contents
            var panelContents = $(panelGroup).find('.panel-body');

            // Convert to tab and move to destination
            panelContents
              .removeClass('panel-body')
              .addClass('tab-pane')
              .appendTo($(destination));

        });

    };

    fakewaffle.bindTabToCollapse = function () {

        var tabs = $('.nav-tabs.responsive, .nav-pills.responsive').find('li a');
        var collapse = $('.panel-group.responsive').find('.panel-collapse');

        // Toggle the panels when the associated tab is toggled
        tabs.on('shown.bs.tab', function (e) {
            var $current = $(e.currentTarget.hash.replace(/#/, '#collapse-'));
            $current.collapse('show');

            if (e.relatedTarget) {
                var $previous = $(e.relatedTarget.hash.replace(/#/, '#collapse-'));
                $previous.collapse('hide');
            }
        });

        // Toggle the tab when the associated panel is toggled
        collapse.on('shown.bs.collapse', function (e) {

           // Coommented out following lines because they produce error
           // var current = $(e.target).context.id.replace(/collapse-/g, '#');
           // $('a[href="' + current + '"]').tab('show');

            // Update the content with active
            var panelGroup = $(e.currentTarget).closest('.panel-group.responsive');
            $(panelGroup).find('.panel-body').removeClass('active');
            $(e.currentTarget).find('.panel-body').addClass('active');

        });
    };

    $(window).on('resize', function () {
        fakewaffle.checkResize();
    });

    return fakewaffle;
}(window.jQuery, fakewaffle || {}));

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function ($, window, document, undefined) {

	// Creates a carousel.
	//* @class The Owl Carousel.
	//* @public
	//* @param {HTMLElement|jQuery} element - The element to create the carousel for.
	//* @param {Object} [options] - The options

    function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
        this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
        this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
        this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
        this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
        this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
        this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
        this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
        this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
        this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
        this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
        this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
        this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
        this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
        this._mergers = [];

		/**
		 * Widths of all items.
		 */
        this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
        this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
        this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
        this._states = {
            current: {},
            tags: {
                'initializing': ['busy'],
                'animating': ['busy'],
                'dragging': ['interacting']
            }
        };

        $.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this));

        $.each(Owl.Plugins, $.proxy(function (key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
                = new plugin(this);
        }, this));

        $.each(Owl.Workers, $.proxy(function (priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));

        this.setup();
        this.initialize();
    }

	/**
	 * Default options for the carousel.
	 * @public
	 */
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,
        checkVisibility: true,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: 'swing',
        slideTransition: '',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    };

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };

	/**
	 * Contains all registered plugins.
	 * @public
	 */
    Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
    Owl.Workers = [{
        filter: ['width', 'settings'],
        run: function () {
            this._width = this.$element.width();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ['items', 'settings'],
        run: function () {
            this.$stage.children('.cloned').remove();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': 'auto',
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };

            !grid && this.$stage.children().css(css);

            cache.css = css;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];

            cache.items = {
                merge: false,
                width: width
            };

            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

                cache.items.merge = merge > 1 || cache.items.merge;

                widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }

            this._widths = widths;
        }
    }, {
        filter: ['items', 'settings'],
        run: function () {
            var clones = [],
                items = this._items,
                settings = this.settings,
                // TODO: Should be computed from number of min width items in stage
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';

            repeat /= 2;

            while (repeat > 0) {
                // Switch to only using appended clones
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
                repeat -= 1;
            }

            this._clones = clones;

            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function () {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];

            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl);
            }

            this._coordinates = coordinates;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function () {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };

            this.$stage.css(css);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();

            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css);
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css);
            }
        }
    }, {
        filter: ['items'],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
        }
    }, {
        filter: ['position'],
        run: function () {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [], i, n;

            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;

                if (this.op(inner, '<=', begin) && this.op(inner, '>', end)
                    || this.op(outer, '<', begin) && this.op(outer, '>', end)) {
                    matches.push(i);
                }
            }

            this.$stage.children('.active').removeClass('active');
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

            this.$stage.children('.center').removeClass('center');
            if (this.settings.center) {
                this.$stage.children().eq(this.current()).addClass('center');
            }
        }
    }];

	/**
	 * Create the stage DOM element
	 */
    Owl.prototype.initializeStage = function () {
        this.$stage = this.$element.find('.' + this.settings.stageClass);

        // if the stage is already in the DOM, grab it and skip stage initialization
        if (this.$stage.length) {
            return;
        }

        this.$element.addClass(this.options.loadingClass);

        // create stage
        this.$stage = $('<' + this.settings.stageElement + '>', {
            "class": this.settings.stageClass
        }).wrap($('<div/>', {
            "class": this.settings.stageOuterClass
        }));

        // append stage
        this.$element.append(this.$stage.parent());
    };

	/**
	 * Create item DOM elements
	 */
    Owl.prototype.initializeItems = function () {
        var $items = this.$element.find('.owl-item');

        // if the items are already in the DOM, grab them and skip item initialization
        if ($items.length) {
            this._items = $items.get().map(function (item) {
                return $(item);
            });

            this._mergers = this._items.map(function () {
                return 1;
            });

            this.refresh();

            return;
        }

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // check visibility
        if (this.isVisible()) {
            // update view
            this.refresh();
        } else {
            // invalidate width
            this.invalidate('width');
        }

        this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
    };

	/**
	 * Initializes the carousel.
	 * @protected
	 */
    Owl.prototype.initialize = function () {
        this.enter('initializing');
        this.trigger('initialize');

        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();

            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }

        this.initializeStage();
        this.initializeItems();

        // register event handlers
        this.registerEventHandlers();

        this.leave('initializing');
        this.trigger('initialized');
    };

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
    Owl.prototype.isVisible = function () {
        return this.settings.checkVisibility
            ? this.$element.is(':visible')
            : true;
    };

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
    Owl.prototype.setup = function () {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function (breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === 'function') {
                settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr('class',
                    this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                );
            }
        }

        this.trigger('change', { property: { name: 'settings', value: settings } });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate('settings');
        this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    };

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
    Owl.prototype.optionsLogic = function () {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

	// * Prepares an item before add.
	// * @todo Rename event parameter `content` to `item`.
	// * @protected
	// * @returns {jQuery|HTMLElement} - The item container.
    Owl.prototype.prepare = function (item) {
        var event = this.trigger('prepare', { content: item });

        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>')
                .addClass(this.options.itemClass).append(item);
        }

        this.trigger('prepared', { content: event.data });

        return event.data;
    };

	/**
	 * Updates the view.
	 * @public
	 */
    Owl.prototype.update = function () {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function (p) { return this[p]; }, this._invalidated),
            cache = {};

        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};

        !this.is('valid') && this.enter('valid');
    };

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
    Owl.prototype.width = function (dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
    Owl.prototype.refresh = function () {
        this.enter('refreshing');
        this.trigger('refresh');

        this.setup();

        this.optionsLogic();

        this.$element.addClass(this.options.refreshClass);

        this.update();

        this.$element.removeClass(this.options.refreshClass);

        this.leave('refreshing');
        this.trigger('refreshed');
    };

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
    Owl.prototype.onThrottledResize = function () {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };

	// Checks window `resize` event.
	// @protected
    Owl.prototype.onResize = function () {
        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (!this.isVisible()) {
            return false;
        }

        this.enter('resizing');

        if (this.trigger('resize').isDefaultPrevented()) {
            this.leave('resizing');
            return false;
        }

        this.invalidate('width');

        this.refresh();

        this.leave('resizing');
        this.trigger('resized');
    };

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
    Owl.prototype.registerEventHandlers = function () {
        if ($.support.transition) {
            this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
        }

        if (this.settings.responsive !== false) {
            this.on(window, 'resize', this._handlers.onThrottledResize);
        }

        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function () { return false; });
        }

        if (this.settings.touchDrag) {
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
        }
    };

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
    Owl.prototype.onDragStart = function (event) {
        var stage = null;

        if (event.which === 3) {
            return;
        }

        if ($.support.transform) {
            stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ?
                    stage.left + this.$stage.width() - this.width() + this.settings.margin :
                    stage.left,
                y: stage.top
            };
        }

        if (this.is('animating')) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop();
            this.invalidate('position');
        }

        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

        this.speed(0);

        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);

        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));

            $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return;
            }

            event.preventDefault();

            this.enter('dragging');
            this.trigger('drag');
        }, this));
    };

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
    Owl.prototype.onDragMove = function (event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);

        if (!this.is('dragging')) {
            return;
        }

        event.preventDefault();

        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }

        this._drag.stage.current = stage;

        this.animate(stage.x);
    };

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
    Owl.prototype.onDragEnd = function (event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

        $(document).off('.owl.core');

        this.$element.removeClass(this.options.grabClass);

        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();

            this._drag.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                this._drag.target.one('click.owl.core', function () { return false; });
            }
        }

        if (!this.is('dragging')) {
            return;
        }

        this.leave('dragging');
        this.trigger('dragged');
    };

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
    Owl.prototype.closest = function (coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(coordinates, $.proxy(function (index, value) {
                // on a left pull, check on current index
                if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                    // on a right pull, check on previous index
                    // to do so, subtract width from value and set position = index + 1
                } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1;
                } else if (this.op(coordinate, '<', value)
                    && this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
                    position = direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
    Owl.prototype.animate = function (coordinate) {
        var animate = this.speed() > 0;

        this.is('animating') && this.onTransitionEnd();

        if (animate) {
            this.enter('animating');
            this.trigger('translate');
        }

        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                transition: this.speed() / 1000 + 's' + (
                    this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
                )
            });
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
        } else {
            this.$stage.css({
                left: coordinate + 'px'
            });
        }
    };

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
    Owl.prototype.is = function (state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
    Owl.prototype.current = function (position) {
        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger('change', { property: { name: 'position', value: position } });

            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }

            this._current = position;

            this.invalidate('position');

            this.trigger('changed', { property: { name: 'position', value: this._current } });
        }

        return this._current;
    };

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
    Owl.prototype.invalidate = function (part) {
        if ($.type(part) === 'string') {
            this._invalidated[part] = true;
            this.is('valid') && this.leave('valid');
        }
        return $.map(this._invalidated, function (v, i) { return i; });
    };

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
    Owl.prototype.reset = function (position) {
        position = this.normalize(position);

        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;

        this.suppress(['translate', 'translated']);

        this.animate(this.coordinates(position));

        this.release(['translate', 'translated']);
    };

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
    Owl.prototype.normalize = function (position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;

        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }

        return position;
    };

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
    Owl.prototype.relative = function (position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };

	// Gets the maximum position for the current item.
	// * @public
	// * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	// * @returns {Number}
    Owl.prototype.maximum = function (relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator,
            reciprocalItemsWidth,
            elementWidth;

        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            if (iterator) {
                reciprocalItemsWidth = this._items[--iterator].width();
                elementWidth = this.$element.width();
                while (iterator--) {
                    reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                    if (reciprocalItemsWidth > elementWidth) {
                        break;
                    }
                }
            }
            maximum = iterator + 1;
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }

        if (relative) {
            maximum -= this._clones.length / 2;
        }

        return Math.max(maximum, 0);
    };

	// * Gets the minimum position for the current item.
	// * @public
	// * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	// * @returns {Number}
    Owl.prototype.minimum = function (relative) {
        return relative ? 0 : this._clones.length / 2;
    };

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
    Owl.prototype.items = function (position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
    Owl.prototype.mergers = function (position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
    Owl.prototype.clones = function (position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function (index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2; };

        if (position === undefined) {
            return $.map(this._clones, function (v, i) { return map(i); });
        }

        return $.map(this._clones, function (v, i) { return v === position ? map(i) : null; });
    };

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
    Owl.prototype.speed = function (speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
    Owl.prototype.coordinates = function (position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;

        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function (coordinate, index) {
                return this.coordinates(index);
            }, this));
        }

        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }

        coordinate = Math.ceil(coordinate);

        return coordinate;
    };

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
    Owl.prototype.duration = function (from, to, factor) {
        if (factor === 0) {
            return 0;
        }

        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
    };

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
    Owl.prototype.to = function (position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();

        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }

        this.speed(this.duration(current, position, speed));
        this.current(position);

        if (this.isVisible()) {
            this.update();
        }
    };

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
    Owl.prototype.next = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
    Owl.prototype.prev = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

	// Handles the end of an animation.
	// * @protected
	// * @param {Event} event - The event arguments.
    Owl.prototype.onTransitionEnd = function (event) {

        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();

            // Catch only owl-stage transitionEnd event
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }

        this.leave('animating');
        this.trigger('translated');
    };

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
    Owl.prototype.viewport = function () {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            console.warn('Can not detect viewport width.');
        }
        return width;
    };

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
    Owl.prototype.replace = function (content) {
        this.$stage.empty();
        this._items = [];

        if (content) {
            content = content instanceof jQuery ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }

        content.filter(function () {
            return this.nodeType === 1;
        }).each($.proxy(function (index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));

        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

        this.invalidate('items');
    };

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
    Owl.prototype.add = function (content, position) {
        var current = this.relative(this._current);

        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);

        this.trigger('add', { content: content, position: position });

        content = this.prepare(content);

        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }

        this._items[current] && this.reset(this._items[current].index());

        this.invalidate('items');

        this.trigger('added', { content: content, position: position });
    };

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
    Owl.prototype.remove = function (position) {
        position = this.normalize(position, true);

        if (position === undefined) {
            return;
        }

        this.trigger('remove', { content: this._items[position], position: position });

        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);

        this.invalidate('items');

        this.trigger('removed', { content: null, position: position });
    };

	//* Preloads images with auto width.
	// * @todo Replace by a more generic approach
	// * @protected
    Owl.prototype.preloadAutoWidthImages = function (images) {
        images.each($.proxy(function (i, element) {
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function (e) {
                element.attr('src', e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh();
            }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
        }, this));
    };

	/**
	 * Destroys the carousel.
	 * @public
	 */
    Owl.prototype.destroy = function () {

        this.$element.off('.owl.core');
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');

        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, 'resize', this._handlers.onThrottledResize);
        }

        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }

        this.$stage.children('.cloned').remove();

        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.remove();
        this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
            .removeData('owl.carousel');
    };

	// Operators to calculate right-to-left and left-to-right.
	// * @protected
	// * @param {Number} [a] - The left side operand.
	// * @param {String} [o] - The operator.
	// * @param {Number} [b] - The right side operand.
    Owl.prototype.op = function (a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
    Owl.prototype.on = function (element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
    Owl.prototype.off = function (element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
    Owl.prototype.trigger = function (name, data, namespace, state, enter) {
        var status = {
            item: { count: this._items.length, index: this.current() }
        }, handler = $.camelCase(
            $.grep(['on', name, namespace], function (v) { return v; })
                .join('-').toLowerCase()
        ), event = $.Event(
            [name, 'owl', namespace || 'carousel'].join('.').toLowerCase(),
            $.extend({ relatedTarget: this }, status, data)
        );

        if (!this._supress[name]) {
            $.each(this._plugins, function (name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });

            this.register({ type: Owl.Type.Event, name: name });
            this.$element.trigger(event);

            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].call(this, event);
            }
        }

        return event;
    };

	//* Enters a state.
	// * @param name - The state name.
    Owl.prototype.enter = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0;
            }

            this._states.current[name]++;
        }, this));
    };

	//* Leaves a state.
	// * @param name - The state name.
    Owl.prototype.leave = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            this._states.current[name]--;
        }, this));
    };

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
    Owl.prototype.register = function (object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }

            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function (e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf('owl') > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }

            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
        }
    };

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
    Owl.prototype.suppress = function (events) {
        $.each(events, $.proxy(function (index, event) {
            this._supress[event] = true;
        }, this));
    };

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
    Owl.prototype.release = function (events) {
        $.each(events, $.proxy(function (index, event) {
            delete this._supress[event];
        }, this));
    };

	// * Gets unified pointer coordinates from event.
	// * @todo #261
	// * @protected
	// * @param {Event} - The `mousedown` or `touchstart` event.
	// * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
    Owl.prototype.pointer = function (event) {
        var result = { x: null, y: null };

        event = event.originalEvent || event || window.event;

        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
                event.changedTouches[0] : event;

        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }

        return result;
    };

	//* Determines if the input is a Number or something that can be coerced to a Number
	// * @protected
	// * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	// * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
    Owl.prototype.isNumeric = function (number) {
        return !isNaN(parseFloat(number));
    };

	//* Gets the difference of two vectors.
	// * @todo #261
	// * @protected
	// * @param {Object} - The first vector.
	// * @param {Object} - The second vector.
	// * @returns {Object} - The difference.
    Owl.prototype.difference = function (first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };

	//* The jQuery Plugin for the Owl Carousel
	// * @todo Navigation plugin `next` and `prev`
	// * @public
    $.fn.owlCarousel = function (option) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function () {
            var $this = $(this),
                data = $this.data('owl.carousel');

            if (!data) {
                data = new Owl(this, typeof option === 'object' && option);
                $this.data('owl.carousel', data);

                $.each([
                    'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                ], function (i, event) {
                    data.register({ type: Owl.Type.Event, name: event });
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([event]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([event]);
                        }
                    }, data));
                });
            }

            if (typeof option === 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
    $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	//* Creates the auto refresh plugin.
	// * @class The Auto Refresh Plugin
	// * @param {Owl} carousel - The Owl Carousel
    var AutoRefresh = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
        this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
        this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
        this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

	/**
	 * Default options.
	 * @public
	 */
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };

	/**
	 * Watches the element.
	 */
    AutoRefresh.prototype.watch = function () {
        if (this._interval) {
            return;
        }

        this._visible = this._core.isVisible();
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };

	/**
	 * Refreshes the element.
	 */
    AutoRefresh.prototype.refresh = function () {
        if (this._core.isVisible() === this._visible) {
            return;
        }

        this._visible = !this._visible;

        this._core.$element.toggleClass('owl-hidden', !this._visible);

        this._visible && (this._core.invalidate('width') && this._core.refresh());
    };

	/**
	 * Destroys the plugin.
	 */
    AutoRefresh.prototype.destroy = function () {
        var handler, property;

        window.clearInterval(this._interval);

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;  (function ($, window, document, undefined) {

	//* Creates the lazy plugin.
	// * @class The Lazy Plugin
	// * @param {Owl} carousel - The Owl Carousel
    var Lazy = function (carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
        this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
        this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
                if (!e.namespace) {
                    return;
                }

                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }

                if (e.property && e.property.name === 'position' || e.type === 'initialized') {
                    var settings = this._core.settings,
                        n = settings.center && Math.ceil(settings.items / 2) || settings.items,
                        i = settings.center && n * -1 || 0,
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function (i, v) { this.load(v); }, this);
                    //TODO: Need documentation for this new option
                    if (settings.lazyLoadEager > 0) {
                        n += settings.lazyLoadEager;
                        // If the carousel is looping also preload images that are to the "left"
                        if (settings.loop) {
                            position -= settings.lazyLoadEager;
                            n++;
                        }
                    }

                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++;
                    }
                }
            }, this)
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    };

	/**
	 * Default options.
	 * @public
	 */
    Lazy.Defaults = {
        lazyLoad: false,
        lazyLoadEager: 0
    };

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
    Lazy.prototype.load = function (position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each($.proxy(function (index, element) {
            var $element = $(element), image,
                url = window.devicePixelRatio > 1 && $element.attr('data-src-retina') || $element.attr('data-src') || $element.attr('data-srcset');

            this._core.trigger('load', { element: $element, url: url }, 'lazy');

            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function () {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function () {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function () {
                    $element.css({
                        'background-image': 'url("' + url + '")',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));

        this._loaded.push($item.get(0));
    };

	/**
	 * Destroys the plugin.
	 * @public
	 */
    Lazy.prototype.destroy = function () {
        var handler, property;

        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

// * Creates the auto height plugin.
// * @class The Auto Height Plugin
// * @param {Owl} carousel - The Owl Carousel

    var AutoHeight = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
        this._core = carousel;

        this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight
                    && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
        this._intervalId = null;
        var refThis = this;

        // These changes have been taken from a PR by gavrochelegnou proposed in #1575
        // and have been made compatible with the latest jQuery version
        $(window).on('load', function () {
            if (refThis._core.settings.autoHeight) {
                refThis.update();
            }
        });

        // Autoresize the height of the carousel when window is resized
        // When carousel has images, the height is dependent on the width
        // and should also change on resize
        $(window).on('resize', function () {
            if (refThis._core.settings.autoHeight) {
                if (refThis._intervalId !== null) {
                    clearTimeout(refThis._intervalId);
                }

                refThis._intervalId = setTimeout(function () {
                    refThis.update();
                }, 250);
            }
        });

    };

	/**
	 * Default options.
	 * @public
	 */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };

	/**
	 * Updates the view.
	 */
    AutoHeight.prototype.update = function () {
        var start = this._core._current,
            end = start + this._core.settings.items,
            lazyLoadEnabled = this._core.settings.lazyLoad,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;

        $.each(visible, function (index, item) {
            heights.push($(item).height());
        });

        maxheight = Math.max.apply(null, heights);

        if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
            maxheight = this._previousHeight;
        }

        this._previousHeight = maxheight;

        this._core.$stage.parent()
            .height(maxheight)
            .addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function () {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	// * Creates the video plugin.
	// * @class The Video Plugin
	// * @param {Owl} carousel - The Owl Carousel

    var Video = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
        this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
        this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
        this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
                }
            }, this),
            'resize.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.is('resizing')) {
                    this._core.$stage.find('.cloned .owl-video-frame').remove();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'position' && this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function (e) {
                if (!e.namespace) {
                    return;
                }

                var $element = $(e.content).find('.owl-video');

                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
            this.play(e);
        }, this));
    };

	/**
	 * Default options.
	 * @public
	 */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
    Video.prototype.fetch = function (target, item) {
        var type = (function () {
            if (target.attr('data-vimeo-id')) {
                return 'vimeo';
            } else if (target.attr('data-vzaar-id')) {
                return 'vzaar';
            } else {
                return 'youtube';
            }
        })(),
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');

        if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else if (id[3].indexOf('vzaar') > -1) {
                type = 'vzaar';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };

        item.attr('data-video', url);

        this.thumbnail(target, this._videos[url]);
    };

	// * Creates video thumbnail.
	// * @protected
	// * @param {jQuery} target - The target containing the video data.
	// * @param {Object} info - The video info object.
	// * @see `fetch`

    Video.prototype.thumbnail = function (target, video) {
        var tnLink,
            icon,
            path,
            dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function (path) {
                icon = '<div class="owl-video-play-icon"></div>';

                if (settings.lazyLoad) {
                    tnLink = $('<div/>', {
                        "class": 'owl-video-tn ' + lazyClass,
                        "srcType": path
                    });
                } else {
                    tnLink = $('<div/>', {
                        "class": "owl-video-tn",
                        "style": 'opacity:1;background-image:url(' + path + ')'
                    });
                }
                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap($('<div/>', {
            "class": "owl-video-wrapper",
            "style": dimensions
        }));

        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === 'youtube') {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function (data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === 'vzaar') {
            $.ajax({
                type: 'GET',
                url: '//vzaar.com/api/videos/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function (data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };

	/**
	 * Stops the current video.
	 * @public
	 */
    Video.prototype.stop = function () {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave('playing');
        this._core.trigger('stopped', null, 'video');
    };

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
    Video.prototype.play = function (event) {
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html,
            iframe;

        if (this._playing) {
            return;
        }

        this._core.enter('playing');
        this._core.trigger('play', null, 'video');

        item = this._core.items(this._core.relative(item.index()));

        this._core.reset(item.index());

        html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
        html.attr('height', height);
        html.attr('width', width);
        if (video.type === 'youtube') {
            html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
        } else if (video.type === 'vimeo') {
            html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
        } else if (video.type === 'vzaar') {
            html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
        }

        iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));

        this._playing = item.addClass('owl-video-playing');
    };

	// * Checks whether an video is currently in full screen mode or not.
	// * @todo Bad style because looks like a readonly method but changes members.
	// * @protected
	// * @returns {Boolean}

    Video.prototype.isInFullScreen = function () {
        var element = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement;

        return element && $(element).parent().hasClass('owl-video-frame');
    };

	/**
	 * Destroys the plugin.
	 */
    Video.prototype.destroy = function () {
        var handler, property;

        this._core.$element.off('click.owl.video');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	// * Creates the animate plugin.
	// * @class The Navigation Plugin
	// * @param {Owl} scope - The Owl Carousel

    var Animate = function (scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            'change.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    this.swapping = e.type === 'translated';
                }
            }, this),
            'translate.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

	/**
	 * Default options.
	 * @public
	 */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };

	// * Toggles the animation classes whenever an translations starts.
	// * @protected
	// * @returns {Boolean|undefined}

    Animate.prototype.swap = function () {

        if (this.core.settings.items !== 1) {
            return;
        }

        if (!$.support.animation || !$.support.transition) {
            return;
        }

        this.core.speed(0);

        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;

        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear)
                .css({ 'left': left + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(outgoing);
        }

        if (incoming) {
            next.one($.support.animation.end, clear)
                .addClass('animated owl-animated-in')
                .addClass(incoming);
        }
    };

    Animate.prototype.clear = function (e) {
        $(e.target).css({ 'left': '' })
            .removeClass('animated owl-animated-out owl-animated-in')
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };

	/**
	 * Destroys the plugin.
	 * @public
	 */
    Animate.prototype.destroy = function () {
        var handler, property;

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluw?
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	// * Creates the autoplay plugin.
	// * @class The Autoplay Plugin
	// * @param {Owl} scope - The Owl Carousel

    var Autoplay = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
        this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
        this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
        this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
        this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
        this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
        this._handlers = {
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === 'position' && this._paused) {
                    // Reset the timer. This code is triggered when the position
                    // of the carousel was changed through user interaction.
                    this._time = 0;
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            'play.owl.autoplay': $.proxy(function (e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function (e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.play();
                }
            }, this),
            'touchstart.owl.core': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'touchend.owl.core': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };

	/**
	 * Default options.
	 * @public
	 */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
    Autoplay.prototype._next = function (speed) {
        this._call = window.setTimeout(
            $.proxy(this._next, this, speed),
            this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
        );

        if (this._core.is('interacting') || document.hidden) {
            return;
        }
        this._core.next(speed || this._core.settings.autoplaySpeed);
    };


	// * Reads the current timer value when the timer is playing.
	// * @public

    Autoplay.prototype.read = function () {
        return new Date().getTime() - this._time;
    };

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
    Autoplay.prototype.play = function (timeout, speed) {
        var elapsed;

        if (!this._core.is('rotating')) {
            this._core.enter('rotating');
        }

        timeout = timeout || this._core.settings.autoplayTimeout;

        // Calculate the elapsed time since the last transition. If the carousel
        // wasn't playing this calculation will yield zero.
        elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

        if (this._paused) {
            // Start the clock.
            this._time = this.read();
            this._paused = false;
        } else {
            // Clear the active timeout to allow replacement.
            window.clearTimeout(this._call);
        }

        // Adjust the origin of the timer to match the new timeout value.
        this._time += this.read() % timeout - elapsed;

        this._timeout = timeout;
        this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
    };

	/**
	 * Stops the autoplay.
	 * @public
	 */
    Autoplay.prototype.stop = function () {
        if (this._core.is('rotating')) {
            // Reset the clock.
            this._time = 0;
            this._paused = true;

            window.clearTimeout(this._call);
            this._core.leave('rotating');
        }
    };

	/**
	 * Pauses the autoplay.
	 * @public
	 */
    Autoplay.prototype.pause = function () {
        if (this._core.is('rotating') && !this._paused) {
            // Pause the clock.
            this._time = this.read();
            this._paused = true;

            window.clearTimeout(this._call);
        }
    };

	/**
	 * Destroys the plugin.
	 */
    Autoplay.prototype.destroy = function () {
        var handler, property;

        this.stop();

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {
    'use strict';


	// * Creates the navigation plugin.
	// * @class The Navigation Plugin
	// * @param {Owl} carousel - The Owl Carousel.

    var Navigation = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
        this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
        this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
        this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
        this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
        this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
        this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                        $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                }
            }, this),
            'added.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop());
                }
            }, this),
            'remove.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'position') {
                    this.draw();
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger('initialized', null, 'navigation');
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

        // register event handlers
        this.$element.on(this._handlers);
    };

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
    Navigation.Defaults = {
        nav: false,
        navText: [
            '<span aria-label="' + 'Previous' + '">&#x2039;</span>',
            '<span aria-label="' + 'Next' + '">&#x203a;</span>'
        ],
        navSpeed: false,
        navElement: 'button type="button" role="presentation"',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: [
            'owl-prev',
            'owl-next'
        ],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
    Navigation.prototype.initialize = function () {
        var override,
            settings = this._core.settings;

        // create DOM structure for relative navigation
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
            : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$previous = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[0])
            .html(settings.navText[0])
            .prependTo(this._controls.$relative)
            .on('click', $.proxy(function (e) {
                this.prev(settings.navSpeed);
            }, this));
        this._controls.$next = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[1])
            .html(settings.navText[1])
            .appendTo(this._controls.$relative)
            .on('click', $.proxy(function (e) {
                this.next(settings.navSpeed);
            }, this));

        // create DOM structure for absolute navigation
        if (!settings.dotsData) {
            this._templates = [$('<button role="button">')
                .addClass(settings.dotClass)
                .append($('<span>'))
                .prop('outerHTML')];
        }

        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
            : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$absolute.on('click', 'button', $.proxy(function (e) {
            var index = $(e.target).parent().is(this._controls.$absolute)
                ? $(e.target).index() : $(e.target).parent().index();

            e.preventDefault();

            this.to(index, settings.dotsSpeed);
        }, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };

	/**
	 * Destroys the plugin.
	 * @protected
	 */
    Navigation.prototype.destroy = function () {
        var handler, control, property, override, settings;
        settings = this._core.settings;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            if (control === '$relative' && settings.navContainer) {
                this._controls[control].html('');
            } else {
                this._controls[control].remove();
            }
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

	/**
	 * Updates the internal state.
	 * @protected
	 */
    Navigation.prototype.update = function () {
        var i, j, k,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items;

        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }

        if (settings.dots || settings.slideBy === 'page') {
            this._pages = [];

            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
    Navigation.prototype.draw = function () {
        var difference,
            settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;

        this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

        if (settings.nav) {
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
        }

        this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;

            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''));
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }

            this._controls.$absolute.find('.active').removeClass('active');
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
    };

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
    Navigation.prototype.onTrigger = function (event) {
        var settings = this._core.settings;

        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items)
        };
    };


	// * Gets the current page position of the carousel.
	// * @protected
	// * @returns {Number}

    Navigation.prototype.current = function () {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function (page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    };


	// * Gets the current succesor/predecessor position.
	// * @protected
	// * @returns {Number}

    Navigation.prototype.getPosition = function (successor) {
        var position, length,
            settings = this._core.settings;

        if (settings.slideBy === 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[(position % length + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
        }

        return position;
    };

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
    Navigation.prototype.next = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
    Navigation.prototype.prev = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
    Navigation.prototype.to = function (position, speed, standard) {
        var length;

        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {
    'use strict';


	// * Creates the hash plugin.
	// * @class The Hash Plugin
	// * @param {Owl} carousel - The Owl Carousel

    var Hash = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
        this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
        this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
        this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

                    if (!hash) {
                        return;
                    }

                    this._hashes[hash] = e.content;
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'position') {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function (item, hash) {
                            return item === current ? hash : null;
                        }).join();

                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }

                    window.location.hash = hash;
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on('hashchange.owl.navigation', $.proxy(function (e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);

            if (position === undefined || position === this._core.current()) {
                return;
            }

            this._core.to(this._core.relative(position), false, true);
        }, this));
    };

	/**
	 * Default options.
	 * @public
	 */
    Hash.Defaults = {
        URLhashListener: false
    };

	/**
	 * Destroys the plugin.
	 * @public
	 */
    Hash.prototype.destroy = function () {
        var handler, property;

        $(window).off('hashchange.owl.navigation');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

    var style = $('<support>').get(0).style,
        prefixes = 'Webkit Moz O ms'.split(' '),
        events = {
            transition: {
                end: {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    transition: 'transitionend'
                }
            },
            animation: {
                end: {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    animation: 'animationend'
                }
            }
        },
        tests = {
            csstransforms: function () {
                return !!test('transform');
            },
            csstransforms3d: function () {
                return !!test('perspective');
            },
            csstransitions: function () {
                return !!test('transition');
            },
            cssanimations: function () {
                return !!test('animation');
            }
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);

        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : true;
                return false;
            }
        });

        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }

    if (tests.csstransitions()) {
        /* jshint -W053 */
        $.support.transition = new String(prefixed('transition'));
        $.support.transition.end = events.transition.end[$.support.transition];
    }

    if (tests.cssanimations()) {
        /* jshint -W053 */
        $.support.animation = new String(prefixed('animation'));
        $.support.animation.end = events.animation.end[$.support.animation];
    }

    if (tests.csstransforms()) {
        /* jshint -W053 */
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d();
    }

})(window.Zepto || window.jQuery, window, document);

/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

; (function (window, document, $, undefined) {
    "use strict";

    var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
		F.open.apply(this, arguments);
		},
		IE = navigator.userAgent.match(/msie/i),
		didUpdate = null,
		isTouch = document.createTouch !== undefined,

		isQuery = function (obj) {
		return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function (str) {
		return str && $.type(str) === "string";
		},
		isPercentage = function (str) {
		return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function (el) {
		return el && !(el.style.overflow && el.style.overflow === 'hidden') && (el.clientWidth && el.scrollWidth > el.clientWidth || el.clientHeight && el.scrollHeight > el.clientHeight);
		},
		getScalar = function (orig, dim) {
		var value = parseInt(orig, 10) || 0;

		if (dim && isPercentage(orig)) {
		value = F.getViewport()[dim] / 100 * value;
		}

		return Math.ceil(value);
		},
		getValue = function (value, dim) {
		return getScalar(value, dim) + 'px';
		};

    $.extend(F, {
        // The current version of fancyBox
        version: '2.1.5',

        defaults: {
            padding: 15,
            margin: 20,

            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1, // Set to 2 for retina display support

            autoSize: true,
            autoHeight: false,
            autoWidth: false,

            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,

            scrolling: 'auto', // 'auto', 'yes' or 'no'
            wrapCSS: '',

            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,

            ajax: {
                dataType: 'html',
                headers: { 'X-fancyBox': true }
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },

            keys: {
                next: {
                    13: 'left', // enter
                    34: 'up',   // page down
                    39: 'left', // right arrow
                    40: 'up'    // down arrow
                },
                prev: {
                    8: 'right',  // backspace
                    33: 'down',   // page up
                    37: 'right',  // left arrow
                    38: 'down'    // up arrow
                },
                close: [27], // escape key
                play: [32], // space - start/stop slideshow
                toggle: [70]  // letter "f" - toggle fullscreen
            },

            direction: {
                next: 'left',
                prev: 'right'
            },

            scrollOutside: true,

            // Override some properties
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,

            // HTML templates
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading: '<div id="fancybox-loading"><div></div></div>'
            },

            // Properties for each animation type
            // Opening fancyBox
            openEffect: 'fade', // 'elastic', 'fade' or 'none'
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',

            // Closing fancyBox
            closeEffect: 'fade', // 'elastic', 'fade' or 'none'
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',

            // Changing next gallery item
            nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',

            // Changing previous gallery item
            prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',

            // Enable default helpers
            helpers: {
                overlay: true,
                title: true
            },

            // Callbacks
            onCancel: $.noop, // If canceling
            beforeLoad: $.noop, // Before loading
            afterLoad: $.noop, // After loading
            beforeShow: $.noop, // Before changing in current item
            afterShow: $.noop, // After opening
            beforeChange: $.noop, // Before changing gallery item
            beforeClose: $.noop, // Before closing
            afterClose: $.noop  // After closing
        },

        //Current state
        group: {}, // Selected group
        opts: {}, // Group options
        previous: null,  // Previous element
        coming: null,  // Element being loaded
        current: null,  // Currently loaded element
        isActive: false, // Is activated
        isOpen: false, // Is currently open
        isOpened: false, // Have been fully opened at least once

        wrap: null,
        skin: null,
        outer: null,
        inner: null,

        player: {
            timer: null,
            isActive: false
        },

        // Loaders
        ajaxLoad: null,
        imgPreload: null,

        // Some collections
        transitions: {},
        helpers: {},

        /*
		 *	Static methods
		 */

        open: function (group, opts) {
            if (!group) {
                return;
            }

            if (!$.isPlainObject(opts)) {
                opts = {};
            }

            // Close if already active
            if (false === F.close(true)) {
                return;
            }

            // Normalize group
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }

            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            $.each(group, function (i, element) {
                var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

                if ($.type(element) === "object") {
                    // Check if is DOM element
                    if (element.nodeType) {
                        element = $(element);
                    }

                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: $('<div/>').text(element.data('fancybox-title') || element.attr('title') || '').html(),
                            isDom: true,
                            element: element
                        };

                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }

                    } else {
                        obj = element;
                    }
                }

                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';

                content = opts.content || obj.content;
                type = content ? 'html' : opts.type || obj.type;

                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');

                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }

                if (isString(href)) {
                    // Try to guess the content type
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';

                        } else if (F.isSWF(href)) {
                            type = 'swf';

                        } else if (href.charAt(0) === '#') {
                            type = 'inline';

                        } else if (isString(element)) {
                            type = 'html';
                            content = element;
                        }
                    }

                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift();
                    }
                }

                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7

                        } else if (obj.isDom) {
                            content = element;
                        }

                    } else if (type === 'html') {
                        content = href;

                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element;
                    }
                }

                $.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });

                group[i] = obj;
            });

            // Extend the defaults
            F.opts = $.extend(true, {}, F.defaults, opts);

            // All options are merged recursive except keys
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
            }

            F.group = group;

            return F._start(F.opts.index);
        },

        // Cancel image loading or abort ajax request
        cancel: function () {
            var coming = F.coming;

            if (coming && false === F.trigger('onCancel')) {
                return;
            }

            F.hideLoading();

            if (!coming) {
                return;
            }

            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }

            F.ajaxLoad = null;

            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }

            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }

            F.coming = null;

            // If the first item has been canceled, then clear everything
            if (!F.current) {
                F._afterZoomOut(coming);
            }
        },

        // Start closing animation if is open; remove immediately if opening/closing
        close: function (event) {
            F.cancel();

            if (false === F.trigger('beforeClose')) {
                return;
            }

            F.unbindEvents();

            if (!F.isActive) {
                return;
            }

            if (!F.isOpen || event === true) {
                $('.fancybox-wrap').stop(true).trigger('onReset').remove();

                F._afterZoomOut();

            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;

                $('.fancybox-item, .fancybox-nav').remove();

                F.wrap.stop(true, true).removeClass('fancybox-opened');

                F.transitions[F.current.closeMethod]();
            }
        },

        // Manage slideshow:
        //   $.fancybox.play(); - toggle slideshow
        //   $.fancybox.play( true ); - start
        //   $.fancybox.play( false ); - stop
    play: function (action) {
    var clear = function () {
    clearTimeout(F.player.timer);
    },
    set = function () {
    clear();

    if (F.current && F.player.isActive) {
		F.player.timer = setTimeout(F.next, F.current.playSpeed);
	}
    },
    stop = function () {
	clear();

	D.unbind('.player');

	F.player.isActive = false;

	F.trigger('onPlayEnd');
    },
    start = function () {
	if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
		F.player.isActive = true;

		D.bind({
			'onCancel.player beforeClose.player': stop,
			'onUpdate.player': set,
			'beforeLoad.player': clear
		});

		set();

    F.trigger('onPlayStart');
    }
    };

            if (action === true || !F.player.isActive && action !== false) {
                start();
            } else {
                stop();
            }
        },

        // Navigate to next gallery item
        next: function (direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }

                F.jumpto(current.index + 1, direction, 'next');
            }
        },

        // Navigate to previous gallery item
        prev: function (direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }

                F.jumpto(current.index - 1, direction, 'prev');
            }
        },

        // Navigate to gallery item by index
        jumpto: function (index, direction, router) {
            var current = F.current;

            if (!current) {
                return;
            }

            index = getScalar(index);

            F.direction = direction || current.direction[index >= current.index ? 'next' : 'prev'];
            F.router = router || 'jumpto';

            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + index % current.group.length;
                }

                index = index % current.group.length;
            }

            if (current.group[index] !== undefined) {
                F.cancel();

                F._start(index);
            }
        },

        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function (e, onlyAbsolute) {
            var current = F.current,
				wrap = current ? current.wrap : null,
				pos;

            if (wrap) {
                pos = F._getPosition(onlyAbsolute);

                if (e && e.type === 'scroll') {
                    delete pos.position;

                    wrap.stop(true, true).animate(pos, 200);

                } else {
                    wrap.css(pos);

                    current.pos = $.extend({}, current.dim, pos);
                }
            }
        },

        update: function (e) {
            var type = e && e.originalEvent && e.originalEvent.type,
				anyway = !type || type === 'orientationchange';

            if (anyway) {
                clearTimeout(didUpdate);

                didUpdate = null;
            }

            if (!F.isOpen || didUpdate) {
                return;
            }

            didUpdate = setTimeout(function () {
                var current = F.current;

                if (!current || F.isClosing) {
                    return;
                }

                F.wrap.removeClass('fancybox-tmp');

                if (anyway || type === 'load' || type === 'resize' && current.autoResize) {
                    F._setDimension();
                }

                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }

                F.trigger('onUpdate');

                didUpdate = null;

            }, anyway && !isTouch ? 0 : 300);
        },

        // Shrink content to fit inside viewport or restore if resized
        toggle: function (action) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                // Help browser to restore document dimensions
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');

                    F.trigger('onUpdate');
                }

                F.update();
            }
        },

        hideLoading: function () {
            D.unbind('.loading');

            $('#fancybox-loading').remove();
        },

        showLoading: function () {
            var el, viewport;

            F.hideLoading();

            el = $(F.opts.tpl.loading).click(F.cancel).appendTo('body');

            // If user will press the escape-button, the request will be canceled
            D.bind('keydown.loading', function (e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();

                    F.cancel();
                }
            });

            if (!F.defaults.fixed) {
                viewport = F.getViewport();

                el.css({
                    position: 'absolute',
                    top: viewport.h * 0.5 + viewport.y,
                    left: viewport.w * 0.5 + viewport.x
                });
            }

            F.trigger('onLoading');
        },

        getViewport: function () {
            var locked = F.current && F.current.locked || false,
				rez = {
				x: W.scrollLeft(),
				y: W.scrollTop()
				};

            if (locked && locked.length) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;

            } else {
                // See http://bugs.jquery.com/ticket/6724
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }

            return rez;
        },

        // Unbind the keyboard / clicking actions
        unbindEvents: function () {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }

            D.unbind('.fb');
            W.unbind('.fb');
        },

        bindEvents: function () {
            var current = F.current,
				keys;

            if (!current) {
                return;
            }

            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

            keys = current.keys;

            if (keys) {
                D.bind('keydown.fb', function (e) {
                    var code = e.which || e.keyCode,
						target = e.target || e.srcElement;

                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (code === 27 && F.coming) {
                        return false;
                    }

                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function (i, val) {
                            if (current.group.length > 1 && val[code] !== undefined) {
                                F[i](val[code]);

                                e.preventDefault();
                                return false;
                            }

                            if ($.inArray(code, val) > -1) {
                                F[i]();

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }

            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
                    var target = e.target || null,
						parent = $(target),
						canScroll = false;

                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }

                        canScroll = isScrollable(parent[0]);
                        parent = $(parent).parent();
                    }

                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left');

                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right');
                            }

                            e.preventDefault();
                        }
                    }
                });
            }
        },

        trigger: function (event, o) {
            var ret, obj = o || F.coming || F.current;

            if (obj) {
                if ($.isFunction(obj[event])) {
                    ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
                }

                if (ret === false) {
                    return false;
                }

                if (obj.helpers) {
                    $.each(obj.helpers, function (helper, opts) {
                        if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                            F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                        }
                    });
                }
            }

            D.trigger(event);
        },

        isImage: function (str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },

        isSWF: function (str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },

        _start: function (index) {
            var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

            index = getScalar(index);
            obj = F.group[index] || null;

            if (!obj) {
                return false;
            }

            coming = $.extend(true, {}, F.opts, obj);

            // Convert margin and padding properties to array - top, right, bottom, left
            margin = coming.margin;
            padding = coming.padding;

            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }

            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }

            // 'modal' propery is just a shortcut
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }

            // 'autoSize' property is a shortcut, too
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }

            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }

            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }

            /*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

            coming.group = F.group;
            coming.index = index;

            // Give a chance for callback or helpers to update coming item (type, title, etc)
            F.coming = coming;

            if (false === F.trigger('beforeLoad')) {
                F.coming = null;

                return;
            }

            type = coming.type;
            href = coming.href;

            if (!type) {
                F.coming = null;

                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;

                    return F[F.router](F.direction);
                }

                return false;
            }

            F.isActive = true;

            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = 'visible';
            }

            if (type === 'image') {
                coming.aspectRatio = true;
            }

            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }

            // Build the neccessary markup
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

            $.extend(coming, {
                skin: $('.fancybox-skin', coming.wrap),
                outer: $('.fancybox-outer', coming.wrap),
                inner: $('.fancybox-inner', coming.wrap)
            });

            $.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[i]));
            });

            F.trigger('onReady');

            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content');
                }

            } else if (!href) {
                return F._error('href');
            }

            if (type === 'image') {
                F._loadImage();

            } else if (type === 'ajax') {
                F._loadAjax();

            } else if (type === 'iframe') {
                F._loadIframe();

            } else {
                F._afterLoad();
            }
        },

        _error: function (type) {
            $.extend(F.coming, {
                type: 'html',
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });

            F._afterLoad();
        },

        _loadImage: function () {
            // Reset preload image so it is later possible to check "complete" property
            var img = F.imgPreload = new Image();

            img.onload = function () {
                this.onload = this.onerror = null;

                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;

                F._afterLoad();
            };

            img.onerror = function () {
                this.onload = this.onerror = null;

                F._error('image');
            };

            img.src = F.coming.href;

            if (img.complete !== true) {
                F.showLoading();
            }
        },

        _loadAjax: function () {
            var coming = F.coming;

            F.showLoading();

            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function (jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR);

                    } else {
                        F.hideLoading();
                    }
                },
                success: function (data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;

                        F._afterLoad();
                    }
                }
            }));
        },

        _loadIframe: function () {
            var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

            // This helps IE
            $(coming.wrap).bind('onReset', function () {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) { }
            });

            if (coming.iframe.preload) {
                F.showLoading();

                iframe.one('load', function () {
                    $(this).data('ready', 1);

                    // iOS will lose scrolling if we resize
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update);
                    }

                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                    F._afterLoad();
                });
            }

            coming.content = iframe.appendTo(coming.inner);

            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },

        _preloadImages: function () {
            var group = F.group,
				current = F.current,
				len = group.length,
				cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

            for (i = 1; i <= cnt; i += 1) {
                item = group[(current.index + i) % len];

                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },

        _afterLoad: function () {
            var coming = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

            F.hideLoading();

            if (!coming || F.isActive === false) {
                return;
            }

            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();

                F.coming = null;

                return;
            }

            if (previous) {
                F.trigger('beforeChange', previous);

                previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
            }

            F.unbindEvents();

            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;

            $.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });

            href = current.href;

            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = $('<div>').html(content).find(current.selector);

                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                        }

                        content = content.show().detach();

                        current.wrap.bind('onReset', function () {
                            if ($(this).find(content).length) {
                                content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                            }
                        });
                    }
                    break;

                case 'image':
                    content = current.tpl.image.replace(/\{href\}/g, href);
                    break;

                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed = '';

                    $.each(current.swf, function (name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed += ' ' + name + '="' + val + '"';
                    });

                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break;
            }

            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content);
            }

            // Give a chance for helpers or callbacks to update elements
            F.trigger('beforeShow');

            // Set scrolling before calculating dimensions
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : scrolling === 'no' ? 'hidden' : scrolling);

            // Set initial dimensions and start position
            F._setDimension();

            F.reposition();

            F.isOpen = false;
            F.coming = null;

            F.bindEvents();

            if (!F.isOpened) {
                $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

            } else if (previous.prevMethod) {
                F.transitions[previous.prevMethod]();
            }

            F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

            F._preloadImages();
        },

        _setDimension: function () {
            var viewport = F.getViewport(),
				steps = 0,
				canShrink = false,
				canExpand = false,
				wrap = F.wrap,
				skin = F.skin,
				inner = F.inner,
				current = F.current,
				width = current.width,
				height = current.height,
				minWidth = current.minWidth,
				minHeight = current.minHeight,
				maxWidth = current.maxWidth,
				maxHeight = current.maxHeight,
				scrolling = current.scrolling,
				scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
				margin = current.margin,
				wMargin = getScalar(margin[1] + margin[3]),
				hMargin = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

            // Reset dimensions so we could re-check actual size
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());

            // Any space between content and viewport (margin, padding, border, title)
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;

            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

            if (current.type === 'iframe') {
                iframe = current.content;

                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);

                            body = iframe.contents().find('body');

                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }

                            origHeight = body.outerHeight(true);
                        }

                    } catch (e) { }
                }

            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass('fancybox-tmp');

                // Set width or height in case we need to calculate only one dimension
                if (!current.autoWidth) {
                    inner.width(origWidth);
                }

                if (!current.autoHeight) {
                    inner.height(origHeight);
                }

                if (current.autoWidth) {
                    origWidth = inner.width();
                }

                if (current.autoHeight) {
                    origHeight = inner.height();
                }

                inner.removeClass('fancybox-tmp');
            }

            width = getScalar(origWidth);
            height = getScalar(origHeight);

            ratio = origWidth / origHeight;

            // Calculations for the content
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

            // These will be used to determine if wrap can fit in the viewport
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;

            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }

            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;

            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio);
                }

                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio);
                }

                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio);
                }

                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio);
                }

            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));

                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);

                    height = inner.height();
                }

                height = Math.max(minHeight, Math.min(height, maxHeight));
            }

            // Try to fit inside viewport (including the title)
            if (current.fitToView) {
                inner.width(width).height(height);

                wrap.width(width + wPadding);

                // Real wrap dimensions
                width_ = wrap.width();
                height_ = wrap.height();

                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }

                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);

                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        inner.width(width).height(height);

                        wrap.width(width + wPadding);

                        width_ = wrap.width();
                        height_ = wrap.height();
                    }

                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }

            if (scrollOut && scrolling === 'auto' && height < origHeight && width + wPadding + scrollOut < maxWidth_) {
                width += scrollOut;
            }

            inner.width(width).height(height);

            wrap.width(width + wPadding);

            width_ = wrap.width();
            height_ = wrap.height();

            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight : (width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight);

            $.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });

            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },

        _getPosition: function (onlyAbsolute) {
            var current = F.current,
				viewport = F.getViewport(),
				margin = current.margin,
				width = F.wrap.width() + margin[1] + margin[3],
				height = F.wrap.height() + margin[0] + margin[2],
				rez = {
				position: 'absolute',
				top: margin[0],
				left: margin[3]
				};

            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';

            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x;
            }

            rez.top = getValue(Math.max(rez.top, rez.top + (viewport.h - height) * current.topRatio));
            rez.left = getValue(Math.max(rez.left, rez.left + (viewport.w - width) * current.leftRatio));

            return rez;
        },

        _afterZoomIn: function () {
            var current = F.current;

            if (!current) {
                return;
            }

            F.isOpen = F.isOpened = true;

            F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

            F.update();

            // Assign a click event
            if (current.closeClick || current.nextClick && F.group.length > 1) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();

                        F[current.closeClick ? 'close' : 'next']();
                    }
                });
            }

            // Create a close button
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
                    e.preventDefault();

                    F.close();
                });
            }

            // Create navigation arrows
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }

                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }

            F.trigger('afterShow');

            // Stop the slideshow if this is the last item
            if (!current.loop && current.index === current.group.length - 1) {

                F.play(false);

            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;

                F.play(true);
            }
        },

        _afterZoomOut: function (obj) {
            obj = obj || F.current;

            $('.fancybox-wrap').trigger('onReset').remove();

            $.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });

            F.trigger('afterClose', obj);
        }
    });

    /*
	 *	Default transitions
	 */

    F.transitions = {
        getOrigPosition: function () {
            var current = F.current,
				element = current.element,
				orig = current.orig,
				pos = {},
				width = 50,
				height = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');

                if (!orig.length) {
                    orig = element;
                }
            }

            if (isQuery(orig)) {
                pos = orig.offset();

                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight();
                }

            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
            }

            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x;
            }

            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };

            return pos;
        },

        step: function (now, fx) {
            var ratio,
				padding,
				value,
				prop = fx.prop,
				current = F.current,
				wrapSpace = current.wrapSpace,
				skinSpace = current.skinSpace;

            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                if (F.isClosing) {
                    ratio = 1 - ratio;
                }

                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;

                F.skin[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio));
                F.inner[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio - skinSpace * ratio));
            }
        },

        zoomIn: function () {
            var current = F.current,
				startPos = current.pos,
				effect = current.openEffect,
				elastic = effect === 'elastic',
				endPos = $.extend({ opacity: 1 }, startPos);

            // Remove "position" property that breaks older IE
            delete endPos.position;

            if (elastic) {
                startPos = this.getOrigPosition();

                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }

            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }

            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            });
        },

        zoomOut: function () {
            var current = F.current,
				effect = current.closeEffect,
				elastic = effect === 'elastic',
				endPos = { opacity: 0.1 };

            if (elastic) {
                endPos = this.getOrigPosition();

                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }

            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },

        changeIn: function () {
            var current = F.current,
				effect = current.nextEffect,
				startPos = current.pos,
				endPos = { opacity: 1 },
				direction = F.direction,
				distance = 200,
				field;

            startPos.opacity = 0.1;

            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                if (direction === 'down' || direction === 'right') {
                    startPos[field] = getValue(getScalar(startPos[field]) - distance);
                    endPos[field] = '+=' + distance + 'px';

                } else {
                    startPos[field] = getValue(getScalar(startPos[field]) + distance);
                    endPos[field] = '-=' + distance + 'px';
                }
            }

            // Workaround for http://bugs.jquery.com/ticket/12273
            if (effect === 'none') {
                F._afterZoomIn();

            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                });
            }
        },

        changeOut: function () {
            var previous = F.previous,
				effect = previous.prevEffect,
				endPos = { opacity: 0.1 },
				direction = F.direction,
				distance = 200;

            if (effect === 'elastic') {
                endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
            }

            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function () {
                    $(this).trigger('onReset').remove();
                }
            });
        }
    };

    /*
	 *	Overlay helper
	 */

    F.helpers.overlay = {
        defaults: {
            closeClick: true,      // if true, fancyBox will be closed when user clicks on the overlay
            speedOut: 200,       // duration of fadeOut animation
            showEarly: true,      // indicates if should be opened immediately or wait until the content is ready
            css: {},        // custom CSS properties
            locked: !isTouch,  // if true, the content will be locked into overlay
            fixed: true       // if false, the overlay CSS position property will not be set to "fixed"
        },

        overlay: null,      // current handle
        fixed: false,     // indicates if the overlay has position "fixed"
        el: $('html'), // element that contains "the lock"

        // Public methods
        create: function (opts) {
            var parent;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.close();
            }

            parent = F.coming ? F.coming.parent : opts.parent;

            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(parent && parent.length ? parent : 'body');
            this.fixed = false;

            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');

                this.fixed = true;
            }
        },

        open: function (opts) {
            var that = this;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');

            } else {
                this.create(opts);
            }

            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy(this.update, this));

                this.update();
            }

            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function (e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }

                        return false;
                    }
                });
            }

            this.overlay.css(opts.css).show();
        },

        close: function () {
            W.unbind('resize.overlay');

            if (this.el.hasClass('fancybox-lock')) {
                $('.fancybox-margin').removeClass('fancybox-margin');

                this.el.removeClass('fancybox-lock');

                W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }

            $('.fancybox-overlay').remove().hide();

            $.extend(this, {
                overlay: null,
                fixed: false
            });
        },

        // Private, callbacks

        update: function () {
            var width = '100%', offsetWidth;

            // Reset width/height so it will not mess
            this.overlay.width(width).height('100%');

            // jQuery does not return reliable result for IE
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                if (D.width() > offsetWidth) {
                    width = D.width();
                }

            } else if (D.width() > W.width()) {
                width = D.width();
            }

            this.overlay.width(width).height(D.height());
        },

        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady: function (opts, obj) {
            var overlay = this.overlay;

            $('.fancybox-overlay').stop(true, true);

            if (!overlay) {
                this.create(opts);
            }

            if (opts.locked && this.fixed && obj.fixed) {
                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false;
            }

            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },

        beforeShow: function (opts, obj) {
            if (obj.locked && !this.el.hasClass('fancybox-lock')) {
                if (this.fixPosition !== false) {
                    $('*').filter(function () {
                        return $(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap");
                    }).addClass('fancybox-margin');
                }

                this.el.addClass('fancybox-margin');

                this.scrollV = W.scrollTop();
                this.scrollH = W.scrollLeft();

                this.el.addClass('fancybox-lock');

                W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }

            this.open(opts);
        },

        onUpdate: function () {
            if (!this.fixed) {
                this.update();
            }
        },

        afterClose: function (opts) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
            }
        }
    };

    /*
	 *	Title helper
	 */

    F.helpers.title = {
        defaults: {
            type: 'float', // 'float', 'inside', 'outside' or 'over',
            position: 'bottom' // 'top' or 'bottom'
        },

        beforeShow: function (opts) {
            var current = F.current,
				text = current.title,
				type = opts.type,
				title,
				target;

            if ($.isFunction(text)) {
                text = text.call(current.element, current);
            }

            if (!isString(text) || $.trim(text) === '') {
                return;
            }

            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;

                case 'outside':
                    target = F.wrap;
                    break;

                case 'over':
                    target = F.inner;
                    break;

                default: // 'float'
                    target = F.skin;

                    title.appendTo('body');

                    if (IE) {
                        title.width(title.width());
                    }

                    title.wrapInner('<span class="child"></span>');

                    //Increase bottom margin so this title will also fit into viewport
                    F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                    break;
            }

            title[opts.position === 'top' ? 'prependTo' : 'appendTo'](target);
        }
    };

    // jQuery plugin initialization
    $.fn.fancybox = function (options) {
        var index,
			that = $(this),
			selector = this.selector || '',
			run = function (e) {
			var what = $(this).blur(), idx = index, relType, relVal;

			if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
			relType = options.groupAttr || 'data-fancybox-group';
			relVal = what.attr(relType);

			if (!relVal) {
			relType = 'rel';
			relVal = what.get(0)[relType];
			}

			if (relVal && relVal !== '' && relVal !== 'nofollow') {
			what = selector.length ? $(selector) : that;
			what = what.filter('[' + relType + '="' + relVal + '"]');
			idx = what.index(this);
			}

			options.index = idx;

			// Stop an event from bubbling if everything is fine
			if (F.open(what, options) !== false) {
			e.preventDefault();
			}
			}
			};

        options = options || {};
        index = options.index || 0;

        if (!selector || options.live === false) {
            that.off('click.fb-start').on('click.fb-start', run);

        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }

        this.filter('[data-fancybox-start=1]').trigger('click');

        return this;
    };

    // Tests that need a body at doc ready
    D.ready(function () {
        var w1, w2;

        if ($.scrollbarWidth === undefined) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            $.scrollbarWidth = function () {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child = parent.children(),
					width = child.innerWidth() - child.height(99).innerWidth();

                parent.remove();

                return width;
            };
        }

        if ($.support.fixedPosition === undefined) {
            $.support.fixedPosition = (function () {
                var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = elem[0].offsetTop === 20 || elem[0].offsetTop === 15;

                elem.remove();

                return fixed;
            }());
        }

        $.extend(F.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $('body')
        });

        //Get real width of page scroll-bar
        w1 = $(window).width();

        H.addClass('fancybox-lock-test');

        w2 = $(window).width();

        H.removeClass('fancybox-lock-test');

        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });

}(window, document, jQuery));

// Generated by CoffeeScript 1.4.0

/*
eqHeight.coffee v1.2.3
http://jsliang.github.com/eqHeight.coffee

Copyright (c) 2013, Jui-Shan Liang <jenny@jsliang.com>
All rights reserved.
Licensed under GPL v2.
*/


(function () {
    var $;

    $ = jQuery;

    $.fn.extend({
        eqHeight: function (column_selector) {
            return this.each(function () {
                var columns, equalizer, _equalize_marked_columns;
                columns = $(this).find(column_selector);
                if (columns.length === 0) {
                    columns = $(this).children(column_selector);
                }
                if (columns.length === 0) {
                    return;
                }
                _equalize_marked_columns = function () {
                    var marked_columns, max_col_height;
                    marked_columns = $(".eqHeight_row");
                    max_col_height = 0;
                    marked_columns.each(function () {
                        if ($(this).height() > max_col_height) {
                            return max_col_height = $(this).height();
                        }
                    });
                    marked_columns.height(max_col_height);
                    return $(".eqHeight_row").removeClass("eqHeight_row");
                };
                equalizer = function () {
                    var row_top_value;
                    columns.height("auto");
                    row_top_value = columns.first().position().top;
                    columns.each(function () {
                        var current_top;
                        current_top = $(this).position().top;
                        if (current_top !== row_top_value) {
                            _equalize_marked_columns();
                            row_top_value = $(this).position().top;
                        }
                        return $(this).addClass("eqHeight_row");
                    });
                    return _equalize_marked_columns();
                };
                $(window).on("load", equalizer);
                return $(window).on("resize", equalizer);
            });
        }
    });

}).call(this);

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.CountUp = factory();
  }
}(this, function(require, exports, module) {

/*
	countUp.js
	by @inorganik
*/

// target = id of html element or var of previously selected html element where counting occurs
// startVal = the value you want to begin at
// endVal = the value you want to arrive at
// decimals = number of decimal places, default 0
// duration = duration of animation in seconds, default 2
// options = optional object of options (see below)

var CountUp = function(target, startVal, endVal, decimals, duration, options) {

	var self = this;
	self.version = function () { return '1.9.3'; };
	
	// default options
	self.options = {
		useEasing: true, // toggle easing
		useGrouping: true, // 1,000,000 vs 1000000
		separator: ',', // character to use as a separator
		decimal: '.', // character to use as a decimal
		easingFn: easeOutExpo, // optional custom easing function, default is Robert Penner's easeOutExpo
		formattingFn: formatNumber, // optional custom formatting function, default is formatNumber above
		prefix: '', // optional text before the result
		suffix: '', // optional text after the result
		numerals: [] // optionally pass an array of custom numerals for 0-9
	};

	// extend default options with passed options object
	if (options && typeof options === 'object') {
		for (var key in self.options) {
			if (options.hasOwnProperty(key) && options[key] !== null) {
				self.options[key] = options[key];
			}
		}
	}

	if (self.options.separator === '') {
		self.options.useGrouping = false;
	}
	else {
		// ensure the separator is a string (formatNumber assumes this)
		self.options.separator = '' + self.options.separator;
	}

	// make sure requestAnimationFrame and cancelAnimationFrame are defined
	// polyfill for browsers without native support
	// by Opera engineer Erik Möller
	var lastTime = 0;
	var vendors = ['webkit', 'moz', 'ms', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}
	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}

	function formatNumber(num) {
		var neg = num < 0,
        x, x1, x2, x3, i, len;
		num = Math.abs(num).toFixed(self.decimals);
		num += '';
		x = num.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? self.options.decimal + x[1] : '';
		if (self.options.useGrouping) {
			x3 = '';
			for (i = 0, len = x1.length; i < len; ++i) {
				if (i !== 0 && i % 3 === 0) {
					x3 = self.options.separator + x3;
				}
				x3 = x1[len - i - 1] + x3;
			}
			x1 = x3;
		}
		// optional numeral substitution
		if (self.options.numerals.length) {
            x1 = x1.replace(/[0-9]/g, function (w) {
                return self.options.numerals[+w];
            });
            x2 = x2.replace(/[0-9]/g, function (w) {
                return self.options.numerals[+w];
            });
		}
		return (neg ? '-' : '') + self.options.prefix + x1 + x2 + self.options.suffix;
	}
	// Robert Penner's easeOutExpo
	function easeOutExpo(t, b, c, d) {
		return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
	}
	function ensureNumber(n) {
		return typeof n === 'number' && !isNaN(n);
	}

	self.initialize = function() { 
		if (self.initialized) return true;
		
		self.error = '';
		self.d = typeof target === 'string' ? document.getElementById(target) : target;
		if (!self.d) { 
            self.error = '[CountUp] target is null or undefined';
			return false;
		}
		self.startVal = Number(startVal);
		self.endVal = Number(endVal);
		// error checks
		if (ensureNumber(self.startVal) && ensureNumber(self.endVal)) {
			self.decimals = Math.max(0, decimals || 0);
			self.dec = Math.pow(10, self.decimals);
			self.duration = Number(duration) * 1000 || 2000;
			self.countDown = self.startVal > self.endVal;
			self.frameVal = self.startVal;
			self.initialized = true;
			return true;
		}
		else {
			self.error = '[CountUp] startVal ('+startVal+') or endVal ('+endVal+') is not a number';
			return false;
		}
	};

	// Print value to target
	self.printValue = function(value) {
		var result = self.options.formattingFn(value);

		if (self.d.tagName === 'INPUT') {
			this.d.value = result;
		}
		else if (self.d.tagName === 'text' || self.d.tagName === 'tspan') {
			this.d.textContent = result;
		}
		else {
			this.d.innerHTML = result;
		}
	};

	self.count = function(timestamp) {

		if (!self.startTime) { self.startTime = timestamp; }

		self.timestamp = timestamp;
		var progress = timestamp - self.startTime;
		self.remaining = self.duration - progress;

		// to ease or not to ease
		if (self.options.useEasing) {
			if (self.countDown) {
				self.frameVal = self.startVal - self.options.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
			} else {
				self.frameVal = self.options.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
			}
		} else {
			if (self.countDown) {
				self.frameVal = self.startVal - (self.startVal - self.endVal) * (progress / self.duration);
			} else {
				self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
			}
		}

		// don't go past endVal since progress can exceed duration in the last frame
		if (self.countDown) {
			self.frameVal = self.frameVal < self.endVal ? self.endVal : self.frameVal;
		} else {
			self.frameVal = self.frameVal > self.endVal ? self.endVal : self.frameVal;
		}

		// decimal
		self.frameVal = Math.round(self.frameVal*self.dec)/self.dec;

		// format and print value
		self.printValue(self.frameVal);

		// whether to continue
		if (progress < self.duration) {
			self.rAF = requestAnimationFrame(self.count);
		} else {
			if (self.callback) self.callback();
		}
	};
	// start your animation
	self.start = function(callback) {
		if (!self.initialize()) return;
		self.callback = callback;
		self.rAF = requestAnimationFrame(self.count);
	};
	// toggles pause/resume animation
	self.pauseResume = function() {
		if (!self.paused) {
			self.paused = true;
			cancelAnimationFrame(self.rAF);
		} else {
			self.paused = false;
			delete self.startTime;
			self.duration = self.remaining;
			self.startVal = self.frameVal;
			requestAnimationFrame(self.count);
		}
	};
	// reset to startVal so animation can be run again
	self.reset = function() {
		self.paused = false;
		delete self.startTime;
		self.initialized = false;
		if (self.initialize()) {
			cancelAnimationFrame(self.rAF);
			self.printValue(self.startVal);
		}
	};
	// pass a new endVal and start animation
	self.update = function (newEndVal) {
		if (!self.initialize()) return;
		newEndVal = Number(newEndVal);
		if (!ensureNumber(newEndVal)) {
			self.error = '[CountUp] update() - new endVal is not a number: '+newEndVal;
			return;
		}
		self.error = '';
		if (newEndVal === self.frameVal) return;
		cancelAnimationFrame(self.rAF);
		self.paused = false;
		delete self.startTime;
		self.startVal = self.frameVal;
		self.endVal = newEndVal;
		self.countDown = self.startVal > self.endVal;
		self.rAF = requestAnimationFrame(self.count);
	};

	// format startVal on initialization
	if (self.initialize()) self.printValue(self.startVal);
};

return CountUp;

}));
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
(function() {
    'use strict';

    var keyCounter = 0;
    var allWaypoints = {};

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
        throw new Error('No options passed to Waypoint constructor');
    }
    if (!options.element) {
        throw new Error('No element option passed to Waypoint constructor');
    }
    if (!options.handler) {
        throw new Error('No handler option passed to Waypoint constructor');
    }

      this.key = 'waypoint-' + keyCounter;
      this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options);
      this.element = this.options.element;
      this.adapter = new Waypoint.Adapter(this.element);
      this.callback = options.handler;
      this.axis = this.options.horizontal ? 'horizontal' : 'vertical';
      this.enabled = this.options.enabled;
      this.triggerPoint = null;
      this.group = Waypoint.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis
      });
      this.context = Waypoint.Context.findOrCreateByElement(this.options.context);

    if (Waypoint.offsetAliases[this.options.offset]) {
        this.options.offset = Waypoint.offsetAliases[this.options.offset];
    }
      this.group.add(this);
      this.context.add(this);
      allWaypoints[this.key] = this;
      keyCounter += 1;
  }

  /* Private */
    Waypoint.prototype.queueTrigger = function (direction) {
        this.group.queueTrigger(this, direction);
    };

  /* Private */
    Waypoint.prototype.trigger = function (args) {
        if (!this.enabled) {
            return;
        }
        if (this.callback) {
            this.callback.apply(this, args);
        }
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
    Waypoint.prototype.destroy = function () {
        this.context.remove(this);
        this.group.remove(this);
        delete allWaypoints[this.key];
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
    Waypoint.prototype.disable = function () {
        this.enabled = false;
        return this;
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
    Waypoint.prototype.enable = function () {
        this.context.refresh();
        this.enabled = true;
        return this;
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
    Waypoint.prototype.next = function () {
        return this.group.next(this);
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
    Waypoint.prototype.previous = function () {
        return this.group.previous(this);
    };

  /* Private */
    Waypoint.invokeAll = function (method) {
        var allWaypointsArray = [];
        for (var waypointKey in allWaypoints) {
            allWaypointsArray.push(allWaypoints[waypointKey]);
        }
        for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
            allWaypointsArray[i][method]();
        }
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
    Waypoint.destroyAll = function () {
        Waypoint.invokeAll('destroy');
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
    Waypoint.disableAll = function () {
        Waypoint.invokeAll('disable');
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
    Waypoint.enableAll = function () {
        Waypoint.invokeAll('enable');
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
    Waypoint.refreshAll = function () {
        Waypoint.Context.refreshAll();
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
    Waypoint.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
    Waypoint.viewportWidth = function () {
        return document.documentElement.clientWidth;
    };

    Waypoint.adapters = [];

    Waypoint.defaults = {
        context: window,
        continuous: true,
        enabled: true,
        group: 'default',
        horizontal: false,
        offset: 0
    };

    Waypoint.offsetAliases = {
        'bottom-in-view': function () {
            return this.context.innerHeight() - this.adapter.outerHeight();
        },
        'right-in-view': function () {
            return this.context.innerWidth() - this.adapter.outerWidth();
        }
    };

    window.Waypoint = Waypoint;
}())
;(function() {
    'use strict';

  function requestAnimationFrameShim(callback) {
      window.setTimeout(callback, 1000 / 60);
  }

    var keyCounter = 0;
    var contexts = {};
    var Waypoint = window.Waypoint;
    var oldWindowLoad = window.onload;

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
      this.element = element;
      this.Adapter = Waypoint.Adapter;
      this.adapter = new this.Adapter(element);
      this.key = 'waypoint-context-' + keyCounter;
      this.didScroll = false;
      this.didResize = false;
      this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop()
      };
      this.waypoints = {
          vertical: {},
          horizontal: {}
      };

      element.waypointContextKey = this.key;
      contexts[element.waypointContextKey] = this;
      keyCounter += 1;

      this.createThrottledScrollHandler();
      this.createThrottledResizeHandler();
  }

  /* Private */
    Context.prototype.add = function (waypoint) {
        var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical';
        this.waypoints[axis][waypoint.key] = waypoint;
        this.refresh();
    };

  /* Private */
    Context.prototype.checkEmpty = function () {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal);
        var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical);
        if (horizontalEmpty && verticalEmpty) {
            this.adapter.off('.waypoints');
            delete contexts[this.key];
        }
    };

  /* Private */
    Context.prototype.createThrottledResizeHandler = function () {
        var self = this;

        function resizeHandler() {
            self.handleResize();
            self.didResize = false;
        }

        this.adapter.on('resize.waypoints', function () {
            if (!self.didResize) {
                self.didResize = true;
                Waypoint.requestAnimationFrame(resizeHandler);
            }
        });
    };

  /* Private */
    Context.prototype.createThrottledScrollHandler = function () {
        var self = this;
        function scrollHandler() {
            self.handleScroll();
            self.didScroll = false;
        }

        this.adapter.on('scroll.waypoints', function () {
            if (!self.didScroll || Waypoint.isTouch) {
                self.didScroll = true;
                Waypoint.requestAnimationFrame(scrollHandler);
            }
        });
    };

  /* Private */
    Context.prototype.handleResize = function () {
        Waypoint.Context.refreshAll();
    };

  /* Private */
    Context.prototype.handleScroll = function () {
        var triggeredGroups = {};
        var axes = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: 'right',
                backward: 'left'
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: 'down',
                backward: 'up'
            }
        };

        for (var axisKey in axes) {
            var axis = axes[axisKey];
            var isForward = axis.newScroll > axis.oldScroll;
            var direction = isForward ? axis.forward : axis.backward;

            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey];
                var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint;
                var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint;
                var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint;
                var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                if (crossedForward || crossedBackward) {
                    waypoint.queueTrigger(direction);
                    triggeredGroups[waypoint.group.id] = waypoint.group;
                }
            }
        }

        for (var groupKey in triggeredGroups) {
            triggeredGroups[groupKey].flushTriggers();
        }

        this.oldScroll = {
            x: axes.horizontal.newScroll,
            y: axes.vertical.newScroll
        };
    };

  /* Private */
    Context.prototype.innerHeight = function () {
        /*eslint-disable eqeqeq */
        if (this.element == this.element.window) {
            return Waypoint.viewportHeight();
        }
        /*eslint-enable eqeqeq */
        return this.adapter.innerHeight();
    };

  /* Private */
    Context.prototype.remove = function (waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key];
        this.checkEmpty();
    };

  /* Private */
    Context.prototype.innerWidth = function () {
        /*eslint-disable eqeqeq */
        if (this.element == this.element.window) {
            return Waypoint.viewportWidth();
        }
        /*eslint-enable eqeqeq */
        return this.adapter.innerWidth();
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
    Context.prototype.destroy = function () {
        var allWaypoints = [];
        for (var axis in this.waypoints) {
            for (var waypointKey in this.waypoints[axis]) {
                allWaypoints.push(this.waypoints[axis][waypointKey]);
            }
        }
        for (var i = 0, end = allWaypoints.length; i < end; i++) {
            allWaypoints[i].destroy();
        }
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
    Context.prototype.refresh = function () {
        /*eslint-disable eqeqeq */
        var isWindow = this.element == this.element.window;
        /*eslint-enable eqeqeq */
        var contextOffset = isWindow ? undefined : this.adapter.offset();
        var triggeredGroups = {};
        var axes;

        this.handleScroll();
        axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: 'right',
                backward: 'left',
                offsetProp: 'left'
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: 'down',
                backward: 'up',
                offsetProp: 'top'
            }
        };

        for (var axisKey in axes) {
            var axis = axes[axisKey];
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey];
                var adjustment = waypoint.options.offset;
                var oldTriggerPoint = waypoint.triggerPoint;
                var elementOffset = 0;
                var freshWaypoint = oldTriggerPoint === null;
                var contextModifier, wasBeforeScroll, nowAfterScroll;
                var triggeredBackward, triggeredForward;

                if (waypoint.element !== waypoint.element.window) {
                    elementOffset = waypoint.adapter.offset()[axis.offsetProp];
                }

                if (typeof adjustment === 'function') {
                    adjustment = adjustment.apply(waypoint);
                }
                else if (typeof adjustment === 'string') {
                    adjustment = parseFloat(adjustment);
                    if (waypoint.options.offset.indexOf('%') > - 1) {
                        adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
                    }
                }

                contextModifier = axis.contextScroll - axis.contextOffset;
                waypoint.triggerPoint = elementOffset + contextModifier - adjustment;
                wasBeforeScroll = oldTriggerPoint < axis.oldScroll;
                nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll;
                triggeredBackward = wasBeforeScroll && nowAfterScroll;
                triggeredForward = !wasBeforeScroll && !nowAfterScroll;

                if (!freshWaypoint && triggeredBackward) {
                    waypoint.queueTrigger(axis.backward);
                    triggeredGroups[waypoint.group.id] = waypoint.group;
                }
                else if (!freshWaypoint && triggeredForward) {
                    waypoint.queueTrigger(axis.forward);
                    triggeredGroups[waypoint.group.id] = waypoint.group;
                }
                else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
                    waypoint.queueTrigger(axis.forward);
                    triggeredGroups[waypoint.group.id] = waypoint.group;
                }
            }
        }

        Waypoint.requestAnimationFrame(function () {
            for (var groupKey in triggeredGroups) {
                triggeredGroups[groupKey].flushTriggers();
            }
        });

        return this;
    };

  /* Private */
    Context.findOrCreateByElement = function (element) {
        return Context.findByElement(element) || new Context(element);
    };

  /* Private */
    Context.refreshAll = function () {
        for (var contextId in contexts) {
            contexts[contextId].refresh();
        }
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
    Context.findByElement = function (element) {
        return contexts[element.waypointContextKey];
    };

    window.onload = function () {
        if (oldWindowLoad) {
            oldWindowLoad();
        }
        Context.refreshAll();
    };

    Waypoint.requestAnimationFrame = function (callback) {
        var requestFn = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            requestAnimationFrameShim;
        requestFn.call(window, callback);
    };
    Waypoint.Context = Context;
}())
;(function() {
    'use strict';

  function byTriggerPoint(a, b) {
      return a.triggerPoint - b.triggerPoint;
  }

  function byReverseTriggerPoint(a, b) {
      return b.triggerPoint - a.triggerPoint;
  }

    var groups = {
        vertical: {},
        horizontal: {}
    };
    var Waypoint = window.Waypoint;

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
      this.name = options.name;
      this.axis = options.axis;
      this.id = this.name + '-' + this.axis;
      this.waypoints = [];
      this.clearTriggerQueues();
      groups[this.axis][this.name] = this;
  }

  /* Private */
    Group.prototype.add = function (waypoint) {
        this.waypoints.push(waypoint);
    };

  /* Private */
    Group.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        };
    };

  /* Private */
    Group.prototype.flushTriggers = function () {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction];
            var reverse = direction === 'up' || direction === 'left';
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i];
                if (waypoint.options.continuous || i === waypoints.length - 1) {
                    waypoint.trigger([direction]);
                }
            }
        }
        this.clearTriggerQueues();
    };

  /* Private */
    Group.prototype.next = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        var isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1];
    };

  /* Private */
    Group.prototype.previous = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null;
    };

  /* Private */
    Group.prototype.queueTrigger = function (waypoint, direction) {
        this.triggerQueues[direction].push(waypoint);
    };

  /* Private */
    Group.prototype.remove = function (waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        if (index > -1) {
            this.waypoints.splice(index, 1);
        }
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
    Group.prototype.first = function () {
        return this.waypoints[0];
    };

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
    Group.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
    };

  /* Private */
    Group.findOrCreate = function (options) {
        return groups[options.axis][options.name] || new Group(options);
    };

    Waypoint.Group = Group;
}())
;(function() {
    'use strict';

    var $ = window.jQuery;
    var Waypoint = window.Waypoint;

  function JQueryAdapter(element) {
      this.$element = $(element);
  }

    $.each([
        'innerHeight',
        'innerWidth',
        'off',
        'offset',
        'on',
        'outerHeight',
        'outerWidth',
        'scrollLeft',
        'scrollTop'
    ], function (i, method) {
        JQueryAdapter.prototype[method] = function () {
            var args = Array.prototype.slice.call(arguments);
            return this.$element[method].apply(this.$element, args);
        };
    });

    $.each([
        'extend',
        'inArray',
        'isEmptyObject'
    ], function (i, method) {
        JQueryAdapter[method] = $[method];
    });

    Waypoint.adapters.push({
        name: 'jquery',
        Adapter: JQueryAdapter
    });
    Waypoint.Adapter = JQueryAdapter;
}())
;(function() {
    'use strict';

    var Waypoint = window.Waypoint;

  function createExtension(framework) {
      return function () {
          var waypoints = [];
          var overrides = arguments[0];

          if (framework.isFunction(arguments[0])) {
              overrides = framework.extend({}, arguments[1]);
              overrides.handler = arguments[0];
          }

          this.each(function () {
              var options = framework.extend({}, overrides, {
                  element: this
              });
              if (typeof options.context === 'string') {
                  options.context = framework(this).closest(options.context)[0];
              }
              waypoints.push(new Waypoint(options));
          });

          return waypoints;
      };
  }

  if (window.jQuery) {
      window.jQuery.fn.waypoint = createExtension(window.jQuery);
  }
  if (window.Zepto) {
      window.Zepto.fn.waypoint = createExtension(window.Zepto);
  }
}())
;
/**
 *
 * Version: 0.0.6
 * Author: Gianluca Guarini
 * Contact: gianluca.guarini@gmail.com
 * Website: http://www.gianlucaguarini.com/
 * Twitter: @gianlucaguarini
 *
 * Copyright (c) Gianluca Guarini
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **/


(function(window, document, $) {
  'use strict';

  // Plugin private cache
  // static vars
  var cache = {
    filterId: 0
  },
    $body = $('body');

  var Vague = function(elm, customOptions) {
    // Default options
    var defaultOptions = {
      intensity: 5,
      forceSVGUrl: false,
      animationOptions: {
        duration: 1000,
        easing: 'linear'
      }
    },
      // extend the default options with the ones passed to the plugin
      options = $.extend(defaultOptions, customOptions),

      /*
       *
       * Helpers
       *
       */

      _browserPrefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
      _cssPrefixString = {},
      _cssPrefix = function(property) {
        if (_cssPrefixString[property] || _cssPrefixString[property] === '') return _cssPrefixString[property] + property;
        var e = document.createElement('div');
        var prefixes = ['', 'Moz', 'Webkit', 'O', 'ms', 'Khtml']; // Various supports...
        for (var i in prefixes) {
          if (typeof e.style[prefixes[i] + property] !== 'undefined') {
            _cssPrefixString[property] = prefixes[i];
            return prefixes[i] + property;
          }
        }
        return property.toLowerCase();
      },
      // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css-filters.js
      _support = {
        cssfilters: function() {
          var el = document.createElement('div');
          el.style.cssText = _browserPrefixes.join('filter' + ':blur(2px); ');
          return !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
        }(),

        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/svg-filters.js
        svgfilters: function() {
          var result = false;
          try {
            result = typeof SVGFEColorMatrixElement !== undefined &&
              SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE === 2;
          } catch (e) {}
          return result;
        }()
      },

      /*
       *
       * PRIVATE VARS
       *
       */

      _blurred = false,
      // cache the right prefixed css filter property
      _cssFilterProp = _cssPrefix('Filter'),
      _svgGaussianFilter,
      _filterId,
      // to cache the jquery animation instance
      _animation,

      /*
       *
       * PRIVATE METHODS
       *
       */

      /**
       * Create any svg element
       * @param  { String } tagName: svg tag name
       * @return { SVG Node }
       */

      _createSvgElement = function(tagName) {
        return document.createElementNS('http://www.w3.org/2000/svg', tagName);
      },

      /**
       *
       * Inject the svg tag into the DOM
       * we will use it only if the css filters are not supported
       *
       */

      _appendSVGFilter = function() {
        // create the svg and the filter tags
        var svg = _createSvgElement('svg'),
          filter = _createSvgElement('filter');

        // cache the feGaussianBlur tag and make it available
        // outside of this function to easily update the blur intensity
        _svgGaussianFilter = _createSvgElement('feGaussianBlur');

        // hide the svg tag
        // we don't want to see it into the DOM!
        svg.setAttribute('style', 'position:absolute');
        svg.setAttribute('width', '0');
        svg.setAttribute('height', '0');
        // set the id that will be used as link between the DOM element to blur and the svg just created
        filter.setAttribute('id', 'blur-effect-id-' + cache.filterId);

        filter.appendChild(_svgGaussianFilter);
        svg.appendChild(filter);
        // append the svg into the body
        $body.append(svg);

      };

    /*
     *
     * PUBLIC VARS
     *
     */

    // cache the DOM element to blur
    this.$elm = elm instanceof $ ? elm : $(elm);


    /*
     *
     * PUBLIC METHODS
     *
     */

    /**
     *
     * Initialize the plugin creating a new svg if necessary
     *
     */

    this.init = function() {
      // checking the css filter feature
      if (_support.svgfilters) {
        _appendSVGFilter();
      }
      // cache the filter id
      _filterId = cache.filterId;
      // increment the filter id static var
      cache.filterId++;

      return this;

    };

    /**
     *
     * Blur the DOM element selected
     *
     */

    this.blur = function() {

      var cssFilterValue,
        // variables needed to force the svg filter URL
        loc = window.location,
        svgUrl = options.forceSVGUrl ? loc.protocol + '//' + loc.host + loc.pathname + loc.search : '';

      // use the css filters if supported
      if (_support.cssfilters) {
        cssFilterValue = 'blur(' + options.intensity + 'px)';
        // .. or use the svg filters
      } else if (_support.svgfilters) {
        // update the svg stdDeviation tag to set up the blur intensity
        _svgGaussianFilter.setAttribute('stdDeviation', options.intensity);
        cssFilterValue = 'url(' + svgUrl + '#blur-effect-id-' + _filterId + ')';
      } else {
        // .. use the IE css filters
        cssFilterValue = 'progid:DXImageTransform.Microsoft.Blur(pixelradius=' + options.intensity + ')';
      }

      // update the DOM element css
      this.$elm[0].style[_cssFilterProp] = cssFilterValue;
      // set the _blurred internal var to true to cache the element current status
      _blurred = true;

      return this;
    };


    /**
     * Animate the blur intensity
     * @param  { Int } newIntensity: new blur intensity value
     * @param  { Object } customAnimationOptions: default jQuery animate options
     */

    this.animate = function(newIntensity, customAnimationOptions) {
      // control the new blur intensity checking if it's a valid value
      if (typeof newIntensity !== 'number') {
        throw typeof newIntensity + ' is not a valid number to animate the blur';
      } else if (newIntensity < 0) {
        throw 'I can animate only positive numbers';
      }
      // create a new jQuery deferred instance
      var dfr = new $.Deferred();

      // kill the previous animation
      if (_animation) {
        _animation.stop(true, true);
      }

      // trigger the animation using the jQuery Animation class
      _animation = new $.Animation(options, {
        intensity: newIntensity
      }, $.extend(options.animationOptions, customAnimationOptions))
        .progress($.proxy(this.blur, this))
        .done(dfr.resolve);

      // return the animation deferred promise
      return dfr.promise();
    };
      
    // * Unblur the DOM element
    
    this.unblur = function() {
      // set the DOM filter property to none
      this.$elm.css(_cssFilterProp, 'none');
      _blurred = false;
      return this;
    };

    /**
     *
     * Trigger alternatively the @blur and @unblur methods
     *
     */

    this.toggleblur = function() {
      if (_blurred) {
        this.unblur();
      } else {
        this.blur();
      }
      return this;
    };

    // * Destroy the Vague.js instance removing also the svg filter injected into the DOM

    this.destroy = function() {
      // do we need to remove the svg filter?
      if (_support.svgfilters) {
        $('filter#blur-effect-id-' + _filterId).parent().remove();
      }

      this.unblur();

      // clear all the property stored into this Vague.js instance
      for (var prop in this) {
        delete this[prop];
      }

      return this;
    };
    // init the plugin
    return this.init();
  };

  // export the plugin as a jQuery function
  $.fn.Vague = function(options) {
    return new Vague(this, options);
  };

}(window, document, jQuery));

/* -----------------------------------------
   HEADER - /source/js/cagov/header.js
----------------------------------------- */
//------------------------------------------------------------- v5 ----------------------------------------- * need to consolidate .header-single-banner with header-large-banner,
$(document).ready(function () {
    var $headerImage = $('.header-single-banner, .header-large-banner, .header-primary-banner');
	var $headerLarge = $('.header-large-banner');
	var $primaryBanner = $('.header-primary-banner');
    var windowHeight = $(window).height();
    var $header = $('header');



    var $askGroup = $('.ask-group');

    var $headSearch = $('#head-search');

// Beta 5 Changes please incorporate into source files

    setTimeout(function () {
        $askGroup.addClass('in');
        $headSearch.addClass('in');
    }, 150);

    // setting up global variables for header functions
    window.headerVars = {
        MOBILEWIDTH: 767,
        MAXHEIGHT: 1200,
        MINHEIGHT: 500,
        setHeaderImageHeight: function () {
            if ($headerImage.length === 0) {
                return;
            }
			
            var height = windowHeight;
            height = Math.max(Math.min(height, headerVars.MAXHEIGHT), headerVars.MINHEIGHT);
			
			var headerTop = $headerImage.offset().top;
			
            $headerImage.css({'height': height - $header.height()});
            headerImageHeight = $headerImage.height();		
							
			$headerLarge.css({'height': height - headerTop});
            headerImageHeight = $headerLarge.height();		
			
			$primaryBanner.css({'height': 450 });

// Beta v5 Changes please incorporate into source files	

	
        }
    };

    headerVars.setHeaderImageHeight();
	


    // Take header image and place it on the ask group div for mobile

    var bgImage = $headerImage.css('background-image');
        var askGroup = $('.ask-group');

    askGroup.attr("style", "background-size: cover; background-repeat: no-repeat; background-image:" + bgImage);


});

/* -----------------------------------------
  FIXED HEADER - /source/js/cagov/fixed-header.js
----------------------------------------- */
$(document).ready(function () {

    // The scroll distance (in pixels) which will make the header
    // compact if needed and
    var scrollDistanceToMakeCompactHeader = 220;
    var scrollDistanceToHideSearch = 80;

    var askBarPadding = 10;
    // set up variables here for each maintenance in the future.
    var $header = $('header');
    var $headerImage = $('.header-single-banner');

    var $exploreMore = $('.explore-invite');
    var $globalHeader = $('.global-header');
    var $alert = $('.alert-banner');
    var $askGroup = $('.ask-group');
    var $askGroupBar = $('#askGroup');
    var $headSearch = $('#head-search');
    var $mainContent = $('#main-content');

    var headerHeight = $globalHeader.innerHeight();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    var currentScrollTop = $(document).scrollTop();

    var hideDistance = calcInputDifference();

    setAskBarTop();
    $headSearch.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () { setAskBarTop(); });
    function setAskBarTop() {
        window.setTimeout(function () {
            if ($headSearch.hasClass('active') || !$globalHeader.hasClass('fixed')) {

                return;
            }

            if (currentScrollTop >= scrollDistanceToMakeCompactHeader) {
                return;
            }

            var searchBox = $headSearch.get(0).getBoundingClientRect();
            var newAskTop = searchBox.top + searchBox.height + askBarPadding;

            $askGroupBar.css('top', newAskTop);
            $askGroupBar.trigger('cagov.askgroup.update');
        }, 0);

    }

    /**
 * Create a return to top button
 */
    var $returnTop = $('<span class="return-top"/>').appendTo('.main-content');

    // set up the interaction handlers before anything else
    setResizeHandler();
    setScrollHandler();

    /**
     * Since we have a fixed header we need to use js to scroll back to top
     * We also expose it as a jQuery plugin for resuability
     */
    (function ($) {
        $.fn.customScrollTop = function customScrollTop() {
            return this.each(function () {
                $el = $(this);
                $el.on('click', function () {
                    $('html,body').animate({
                        scrollTop: 0
                    }, 400, function () {
                        $(window).scroll();
                    });
                    return;
                });
            });
        };
    }(jQuery));

    // Set any buttons or links which must scroll back to the top
    $('[href="#skip-to-content"]').customScrollTop();

    $returnTop.customScrollTop();

    // we need to jump back up to the top inorder to show the search again
    if ($header.hasClass("fixed")) {
        $('#nav-item-search').customScrollTop();
    }

    // fire off the first update to the header, all remaining updates will
    // from user interactions
    updateFixed();

    // we need to watch for a user closing the alert banner, as this will
    // change out total header height, forcing us to update our header image
    $alert.on('closed.bs.alert', function () {
        headerHeight = $globalHeader.innerHeight();
        updateFixed();
        setAskBarTop();
    });

    /**
   * UTILITY FUNCTIONS
   */

    // when the window changes we need to update our variables, and then
    // proactively update our fixed header
    function setResizeHandler() {
        if (!$header.hasClass('fixed')) {
            return;
        }

        $(window).on('resize', function () {
            windowHeight = $(window).height();
            windowWidth = $(window).width();
            headerHeight = $globalHeader.innerHeight();
            hideDistance = calcInputDifference();

            if (windowWidth > headerVars.MOBILEWIDTH) {
                addFixed();
                setAskBarTop();

            } else {
                removeFixed();
            }
            setAskBarTop();
        });
    }

    function setScrollHandler() {

        // function which we will call on scroll.
        // NOTE: keep this minimal to benefit performance.
        var updateFunc;

        if ($header.hasClass('fixed')) {
            updateFunc = function () {

                // we dont have any fixed updates if we switch or start in mobile
                // even if the user has requested to be fixed.
                if (windowWidth < headerVars.MOBILEWIDTH) {
                    return;
                }

                checkForCompactUpdate();
                checkForFixedUpdate();

            };
        } else {
            updateFunc = function () {
                checkForReturnTopUpdate();

            };
        }

        // set up our event listener to update the continously
        // changing variables as well as update
        $(window).on('scroll', function () {
            currentScrollTop = $(document).scrollTop();
            updateFunc();
            checkForReturnTopUpdate();

        });

        // fire the first update
        updateFunc();
    }

    /**
     * Checks to see if we are ready to hide the input and ask bar
     */
    function checkForFixedUpdate() {
        // we dont fade out if we have search results being shown
        if ($headSearch.hasClass('active')) {
            $askGroup.addClass('fixed-hide');
          //  $header.addClass('compact fixed');

            return;
        }

        // // when we go compact with the header we need to completly hide
        // // our askbar and search. This is due to them being placed relativly
        // // with respect to the header. And as such they get tosed around And
        // // colloide when the header height changes to.
        //  if  ($headSearch.hasClass('compact')) {
        //     $askGroup.addClass('fixed-hide');
        //     $headSearch.addClass('fixed-hide');
        //
        // // not dont hide just yet, still waiting, but we double check and
        // // make sure to remove the fixed-hide class just in case.
        // } else {
        //     $askGroup.removeClass('fixed-hide')
        //     $headSearch.removeClass('fixed-hide')
        // }
    }

    // Simply apply the class if we have scrolled the required amount
    function checkForCompactUpdate() {

        if (currentScrollTop >= scrollDistanceToHideSearch) {
            $askGroup.addClass('fixed-hide');
            $headSearch.addClass('fixed-hide');
        } else {
            $askGroup.removeClass('fixed-hide');
            $headSearch.removeClass('fixed-hide');
        }
        if (currentScrollTop >= scrollDistanceToMakeCompactHeader) {
            $header.addClass('compact');

        } else if ($header.hasClass('compact')) {
            $header.removeClass('compact');

        }

    }

    // Same as the function above, we check if the scroll is far enough to
    // justify showing the return icon
    function checkForReturnTopUpdate() {
        if (currentScrollTop >= scrollDistanceToMakeCompactHeader) {
            $returnTop.addClass('is-visible');
        } else {
            $returnTop.removeClass('is-visible');
        }
    }


    // * Figures out the difference between the bottom of the askbar and the
    // * explore more bar. Used to caclulate when we should hide these elements

    function calcInputDifference() {
        if (!$exploreMore.length || !$askGroupBar.length) {
            return 0;
        }

        return $headSearch.height() + $askGroupBar.height();
        // return $exploreMore.offset().top - $askGroupBar.offset().top +
        //$askGroupBar.height() - 15;
    }

    /**
     * Sets and removes the fixed header based upon with and the required class
     */
    function updateFixed() {
        if ($header.hasClass('fixed') && windowWidth > headerVars.MOBILEWIDTH) {
            addFixed();

        } else {
            removeFixed();

        }
    }

    /**
     * Adds the required classes and sets the proper inline styles
     * on the header elements. Also recalculates the header image height
     */
    function addFixed() {
        var leeway = 10;
        $header.addClass('fixed');
        headerVars.setHeaderImageHeight();

        // we have a header image, we need to adjust it
        if ($headerImage.length) {
            // take into account the fixed header
            var height = $headerImage.height();
            height = Math.max(Math.min(height, headerVars.MAXHEIGHT), headerVars.MINHEIGHT);

            $headerImage.css({
                height: height + headerHeight + leeway
            });
            // take into account the fixed header -----------------------------------------------------v5 FIX---------------------------------

        } else {
            // no header image, which means our main content needs to

            $mainContent.css({
                'padding-top': Math.max(headerHeight, 129)
            });


        } if ($(".ask-group").length > 0) {
            $mainContent.addClass('print-p-t'); // Media print .main-content fix	
            $mainContent.css({
                'padding-top': 0
            });

            $('.header-slideshow-banner, .header-primary-banner').css({
                'margin-top': 129

            });


        }
    }
    // take into account the fixed header -----------------------------------------------------v5 FIX---------------------------------


    // remove all inline styles from setting the fixed header
    function removeFixed() {
        $header.removeClass('fixed');
        $headerImage.css({ 'top': '', 'margin-bottom': '' });
        $mainContent.css({ 'padding-top': '' });
        $askGroupBar.css('top', '');
    }

});
/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
var $event = $.event,
    $special,
    resizeTimeout;

$special = $event.special.debouncedresize = {
    setup: function () {
        $(this).on("resize", $special.handler);
    },
    teardown: function () {
        $(this).off("resize", $special.handler);
    },
    handler: function (event, execAsap) {
        // Save the context
        var context = this,
            args = arguments,
            dispatch = function () {
                // set correct event type
                event.type = "debouncedresize";
                $event.dispatch.apply(context, args);
            };

        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }

        execAsap
            ? dispatch()
            : resizeTimeout = setTimeout(dispatch, $special.threshold);
    },
    threshold: 250
};

if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}

// Begin gatag.js

//	This javascript tags file downloads and external links in Google Analytics.
//	All outbound links and links to non-html files should now be automatically tracked.

// Original script: http://www.goodwebpractices.com/roi/track-downloads-in-google-analytics-automatically.html
// 5/16/11 Updated for asynchronous GA code.
// 7/14/14 Added Office 2010 file extensions. Changed "click" to "mousedown". Added support for 2 dashboards.

function addGAToDownloadLinks() {
	if (document.getElementsByTagName) {
		// Initialize external link handlers
		var hrefs = document.getElementsByTagName("a");
		for (var l = 0; l < hrefs.length; l++) {
			// try {} catch{} block added by erikvold VKI
			try{
				//protocol, host, hostname, port, pathname, search, hash
				if (hrefs[l].protocol === "mailto:") {
					startListening(hrefs[l],"mousedown",trackMailto);
				} else if (hrefs[l].protocol === "tel:") {
					startListening(hrefs[l],"mousedown",trackTelto);
				} else if (hrefs[l].hostname === location.host) {
					var path = hrefs[l].pathname + hrefs[l].search;
					var isDoc = path.match(/\.(?:doc|docx|eps|jpg|png|svg|xls|xlsx|ppt|pptx|pdf|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3)($|\&|\?)/);
					if (isDoc) {
						startListening(hrefs[l],"mousedown",trackExternalLinks);
					}
				} else if (!hrefs[l].href.match(/^javascript:/)) {
					startListening(hrefs[l],"mousedown",trackExternalLinks);
				}
			}
			catch(e){
				continue;
			}
		}
	}
}

function startListening (obj,evnt,func) {
	if (obj.addEventListener) {
		obj.addEventListener(evnt,func,false);
	} else if (obj.attachEvent) {
		obj.attachEvent("on" + evnt,func);
	}
}

function trackMailto (evnt) {
	var href = evnt.srcElement ? evnt.srcElement.href : this.href;
	var mailto = "/mailto/" + href.substring(7);
	_gaq.push(['_trackPageview', mailto]);
	_gaq.push(['b._trackPageview', mailto]);
}

function trackTelto (evnt) {
	var href = evnt.srcElement ? evnt.srcElement.href : this.href;
	var telto = "/telto/" + href.substring(4);
	_gaq.push(['_trackPageview', telto]);
	_gaq.push(['b._trackPageview', telto]);
}

function trackExternalLinks (evnt) {
	var e = evnt.srcElement ? evnt.srcElement : this;
	while (e.tagName !== "A") {
		e = e.parentNode;
	}
	var lnk = e.pathname.charAt(0) === "/" ? e.pathname : "/" + e.pathname;
	if (e.search && e.pathname.indexOf(e.search) === -1) lnk += e.search;
	if (e.hostname !== location.host) lnk = "/external/" + e.hostname + lnk;
	_gaq.push(['_trackPageview', lnk]);
	_gaq.push(['b._trackPageview', lnk]);
}

// End gatag.js
// End gatag.js
/* -----------------------------------------
   NAVIGATION MENU - /source/js/cagov/navigation.js
----------------------------------------- */

$(document).ready(function () {
    // detect partial flexbox support in IE>9
    if ($('.top-level-nav').css('display') === 'table') { $('body').addClass('no-flex'); }

    // menu variables
    var $navigation = $('#navigation.main-navigation'),
      $navItems = $navigation.find('.nav-item'), // first level link containers'
      $navItemsWithSubs = $navItems.has('.sub-nav'),
      $subNavs = $navigation.find('.sub-nav'),
      megamenu = $navigation.hasClass('megadropdown'),
      dropdown = $navigation.hasClass('dropdown'),
      singleLevel = $navigation.hasClass('singleLevel'),
      offCanvas = false; // beta 5.9 addition instead of: $navigation.hasClass('off-canvas'), 
    mobileWidth = 767,
    setActiveLinkByFolder = $navigation.hasClass('auto-highlight'); // Use new folder matching method to highlight the current navigation tab

    var mouseOverDelay = 100, setTimeoutConst;

    // touch detection
    var isTouch = Modernizr.touch,
      msTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    var touchMode = false;
    $(window).on('mousemove', function () {
        if (touchMode) touchmode = false;
    });

    // HIGHLIGHT APPROPRIATE NAV ITEM
    var reMainNav = "",
      arrCurrentURL = location.href.split("/");
    if (typeof defaultActiveLink !== "undefined") {
        reMainNav = new RegExp("^" + defaultActiveLink + "$", "i"); // Regex for finding the index of the default main list item
    }
    $navItems.each(function () { // loop through top level links
        var $this = $(this),
          $a = $this.find('.first-level-link');

        if (reMainNav) {
            if ($a.text().match(reMainNav)) {
                $this.addClass('active');
            }
        } else if (setActiveLinkByFolder && $a.attr('href')) {
            var arrNavLink = $a[0].href.split("/");
            if (arrNavLink.length > 4 && arrCurrentURL[3] === arrNavLink[3]) { // folder of current URL matches this nav link
                $this.addClass('active');
            }
        }
    });

    $navItemsWithSubs.each(function () {
        var itemCount = $(this).find('.second-level-nav > li').length;
        if (itemCount <= 2) {
            $(this).find('.sub-nav').addClass('with-few-items');
        }
    });


    if ((megamenu || dropdown) && (isTouch || !msTouch)) {		// setup standard megamenu or dropdown menu and touch supporting 'ontouchstart'
        // show and hide sub nav with fade effect


        if (isTouch) {
            // hide submenus when touch occurs outside of menu
            $(document).on('touchstart.ca.catchNav', function (e) {
                touchMode = false;
            }, false);

            $navItemsWithSubs.each(function () {
                var $this = $(this),
                  $a = $this.find('.first-level-link'),
                  node = $a[0],
                  $sub = $this.find('.sub-nav'),
                  $subLinks = $sub.find('a');
                $a.data('link', $a.attr('href')).removeAttr; // store url

                $this.on('touchstart.ca.propagation', function (e) {
                    // keeps tabpanel from closing when clicking inside of it
                    e.stopPropagation();
                });

                $this.on('touchstart.ca.navclose', function (e) {
                    touchMode = true;
                    if ($sub.is(':visible') || mobileView()) {
                        // if sub is visible, or in mobile view keep default behavior
                    } else {
                        // keeps tabpanel from closing when clicking inside of it
                        e.preventDefault();
                        e.stopPropagation();

                        // position arrow, fade in current panel
                    
                        $sub.fadeIn(1000);
                    }
                }, false);
            });
        }

    } else if ((megamenu || dropdown) && msTouch) {
       

        $navItemsWithSubs.each(function () {
            var $this = $(this),
              $a = $this.find('.first-level-link'),
              node = $a[0],
              $sub = $this.find('.sub-nav'),
              $subLinks = $sub.find('a');
            $a.data('link', $a.attr('href')); // store url

            $this.on('click.ca.propagation', function (e) {
                // keeps tabpanel from closing when clicking inside of it
                e.stopPropagation();
            });

            $a.on('click.ca.navclose', function (e) {
                if ($sub.is(':visible') || mobileView()) {
                    // if sub is visible, or in mobile view keep default behavior
                } else {
                    // keeps tabpanel from closing when clicking inside of it
                    e.preventDefault();
                    e.stopPropagation();

                    // position arrow, hide other sub-nav panels, fade in current panel
                    
                    $sub.fadeIn(1000);
                }
            });
        });
    }

    // MENU FUNCTIONS


    function mobileView() {
        return $('.global-header .mobile-controls').css('display') !== "none"; // mobile view uses arrow to show subnav instead of first touch
    }



    // SETUP MOBILE MENU
    // add sub nav toggles to mobile menu $navItemsWithSubs
    if (!singleLevel) {
        $navItemsWithSubs.each(function () {

            $(this).find('.first-level-link').addClass('has-sub');
            var linktext = $(this).find('.first-level-link').text();
            // create toggle object
            var $toggleSubNav = $('<button class="mobile-control toggle-sub-nav closed"><div class="ca-gov-icon-arrow-next rotate" aria-hidden="true"></div><span class="sr-only">' + linktext + ' sub menu toggle</span></button>');
            // add toggle object to DOM
            $(this).find('.sub-nav').before($toggleSubNav);

        });
    }





        // Setup non-off-canvas menu
        $('#navigation').addClass('mobile-closed');
        $(".sub-nav").addClass('subnav-closed');
        $('.toggle-menu').on("click", function () {
            if ($('#navigation').hasClass('mobile-closed')) {
                $(this).addClass('open'); // for hamburger to X transition
                $(this).attr('aria-expanded', 'true');
                // $('#navigation').removeClass('mobile-closed');
                $('#navigation').slideDownTransition();
            } else {
                $(this).removeClass('open'); // for hamburger to X transition
                $(this).attr('aria-expanded', 'false');
                // $('#navigation').addClass('mobile-closed');
                $('#navigation').slideUpTransition();
            }
            //$('#navigation').toggleClass('mobile-closed');
            $('.search-container').removeClass('active');
            // Changing aria attributes for accessibility

        });

        // Subnav Toggle
    if (msTouch) {
        // touch event for mobile
        $(".toggle-sub-nav").on("touchstart", function () {
            var secondaryLinks = $(this).parent().find('.sub-nav');
            if ($(this).hasClass('closed')) {
                $(this).removeClass('closed').addClass('open');
                $(this).find(".rotate").addClass('down');
                $(secondaryLinks).slideDownTransitionSub();
            } else {
                $(this).removeClass('open').addClass('closed');
                $(this).find(".rotate").removeClass('down');
                $(secondaryLinks).slideUpTransitionSub();
            }
        });
    }
    else {
        // click event for desktop
        $(".toggle-sub-nav").on("click", function () {
            var secondaryLinks = $(this).parent().find('.sub-nav');
            if ($(this).hasClass('closed')) {
                $(this).removeClass('closed').addClass('open');
                $(this).find(".rotate").addClass('down');
                $(secondaryLinks).slideDownTransitionSub();
            } else {
                $(this).removeClass('open').addClass('closed');
                $(this).find(".rotate").removeClass('down');
                $(secondaryLinks).slideUpTransitionSub();
            }

        });
    }

    $(".rotate1").on("click", function () {
        $(this).toggleClass("down");
    });
    
    



    // allow dropdown on focus
    var menuHoverClass = 'focus',
      clickedFocus = 'clickedFocus';

    $('.top-level-nav > li > a').on("mouseenter", function () {
        $(this).closest('ul').find('.' + menuHoverClass).removeClass(menuHoverClass);
    }).on("mouseleave", function () {
        $('.' + clickedFocus).removeClass(clickedFocus);
    });
	$('.top-level-nav > li > a').on("focus", function (e) {
        $(this).closest('ul').find('.' + menuHoverClass).removeClass(menuHoverClass);
        if (!$(this).parent().find('.toggle-sub-nav').hasClass('open')) {
            $(this).parent().addClass(menuHoverClass);
        }
    }).on('mousedown', function () {
        // prevent subnav from showing when link is clicked
        if (!$(this).parent().find('.toggle-sub-nav').hasClass('open')) {
            $(this).parent().addClass(clickedFocus);
        }
    });

    // Hide menu if click occurs outside of navigation
    // Hide menu if click or focus occurs outside of navigation
    $('.top-level-nav a').last().on("keydown", function (e) {
        if (e.keyCode === 9) {
            // If the user tabs out of the navigation hide all menus
            $('.top-level-nav .' + menuHoverClass).removeClass(menuHoverClass);
        }
    });
    $(document).on("click", function () { $('.top-level-nav .' + menuHoverClass).removeClass(menuHoverClass); });

    $('.top-level-nav').on("click", function (e) {
        e.stopPropagation();
    });
    //*/
    // Hide navigation from screen reader in mobile
    if (mobileView()) {
        $navigation.attr("aria-hidden", "true");

        // Prevent focusing/tabbing thru links in mobile if nav is closed
        if ($navigation.hasClass("mobile-closed")) {
            $("#nav_list a").attr("tabindex", "-1");
            $("#nav_list button").attr("tabindex", "-1");
        }
        else {
            $("#nav_list a").removeAttr("tabindex");
            $("#nav_list button").removeAttr("tabindex");
        }
    }


});

 // Mobile slidedown function
        (function ($) {
            $.fn.slideUpTransition = function () {
                return this.each(function () {
                    var $el = $(this);
                    $el.css("max-height", "0").addClass("mobile-closed").attr("aria-hidden", "true");
                    $(".first-level-link").attr("tabindex", "-1");
                    $(".top-level-nav li button").attr("tabindex", "-1");
                   
                });
            };

            $.fn.slideDownTransition = function () {
                return this.each(function () {
                    var $el = $(this);
                    $el.removeClass("mobile-closed");
                    $el.removeAttr("aria-hidden");
                    $(".first-level-link").removeAttr("tabindex");
                    $(".top-level-nav li button").removeAttr("tabindex");
                    // temporarily make visible to get the size
                    $el.css("max-height", "none");
                    var height = $el.outerHeight();

                    // reset to 0 then animate with small delay
                    $el.css("max-height", "0");

                    setTimeout(function () {
                        $el.css({
                            "max-height": height
                        });
                    }, 1);
                });
            };
        })(jQuery);


        // Subnav Mobile slidedown function
        (function ($) {
            $.fn.slideUpTransitionSub = function () {
                return this.each(function () {
                    var $subel = $(this);
                    var subheight = $subel.outerHeight();
                    var mainnavheight = $("#navigation").outerHeight();
                    var sumheight = mainnavheight - subheight;
                    $subel.css("max-height", "0");
                    $subel.addClass("subnav-closed");
                    $subel.attr('aria-expanded', 'false');
                    $subel.attr('aria-hidden', 'true');
                    $subel.find("a").attr("tabindex", "-1");
                    $("#navigation").css({ "max-height": sumheight });
                });
            };

            $.fn.slideDownTransitionSub = function () {
                return this.each(function () {
                    var $subel = $(this);
                    $subel.removeClass("subnav-closed");
                    $subel.find("a").removeAttr("tabindex");
                    // temporarily make visible to get the size
                    $subel.css("max-height", "none");
                    var subheight = $subel.outerHeight();
                    var mainnavheight = $("#navigation").outerHeight();
                    var sumheight = subheight + mainnavheight;
                    // reset to 0 then animate with small delay
                    $subel.css("max-height", "0");

                    setTimeout(function () {
                        $subel.css({
                            "max-height": subheight
                        });
                        $subel.attr('aria-expanded', 'true');
                        $subel.attr('aria-hidden', 'false');
                        $("#navigation").css({ "max-height": sumheight });
                    }, 1);
                });
            };
        })(jQuery);

/*  ACCESSIBLE MENU */
// source https://github.com/adobe-accessibility/Accessible-Mega-Menu/

(function ($, window, document) {
    "use strict";
    var pluginName = "accessibleMenu",
        defaults = {
            navToggle: "#nav-toggle",
            navId: "#navigation",
            uuidPrefix: "accessible-menu", // unique ID's are required to indicate aria-owns, aria-controls and aria-labelledby
            menuClass: "nav-menu", // default css class used to define the megamenu styling
            topNavItemClass: "nav-item", // default css class for a top-level navigation item in the megamenu
            panelClass: "accessible-menu-panel", // default css class for a megamenu panel
            panelGroupClass: "accessible-menu-panel-group", // default css class for a group of items within a megamenu panel
            hoverClass: "hover", // default css class for the hover state
            focusClass: "focus", // default css class for the focus state
            openClass: "open", // default css class for the open state
            openDelay: 400, // default open delay when opening menu via mouseover
            closeDelay: 500 // default close delay when on mouseout
        },
        Keyboard = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            keyMap: {
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                190: "."
            }
        };
// * @desc Creates a new accessible mega menu instance.
//  * @param {jquery} element
// * @param {object} [options] Mega Menu options
// * @param {string} [options.uuidPrefix=accessible-menu] - Prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby
// * @param {string} [options.menuClass=accessible-menu] - CSS class used to define the megamenu styling
// * @param {string} [options.topNavItemClass=accessible-menu-top-nav-item] - CSS class for a top-level navigation item in the megamenu
// * @param {string} [options.panelClass=accessible-menu-panel] - CSS class for a megamenu panel
// * @param {string} [options.panelGroupClass=accessible-menu-panel-group] - CSS class for a group of items within a megamenu panel
// * @param {string} [options.hoverClass=hover] - CSS class for the hover state
// * @param {string} [options.focusClass=focus] - CSS class for the focus state
// * @param {string} [options.openClass=open] - CSS class for the open state
// * @constructor
    function accessibleMenu(element, options) {
        this.element = element;

        // merge optional settings and defaults into settings
        this.settings = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.mouseTimeoutID = null;
        this.focusTimeoutID = null;
        this.mouseFocused = false;
        this.justFocused = false;

        this.init();
    }



    accessibleMenu.prototype = (function () {

        /* private attributes and methods ------------------------ */
        var uuid = 0,
            keydownTimeoutDuration = 1000,
            keydownSearchString = "",
            isTouch = typeof window.hasOwnProperty === "function" && !!window.hasOwnProperty("ontouchstart"),
            _getPlugin,
            _addUniqueId,
            _togglePanel,
            _clickHandler,
            _clickOutsideHandler,
            _DOMAttrModifiedHandler,
            _focusInHandler,
            _focusOutHandler,
            _keyDownHandler,
            _mouseDownHandler,
            _mouseOverHandler,
            _mouseOutHandler,
            _toggleExpandedEventHandlers;


// * @name jQuery.fn.accessibleMenu~_getPlugin
// * @desc Returns the parent accessibleMenu instance for a given element
// * @param {jQuery} element
// * @memberof jQuery.fn.accessibleMenu
// * @inner
// * @private
        _getPlugin = function (element) {
            return $(element).closest(':data(plugin_' + pluginName + ')').data("plugin_" + pluginName);
        };


// * @name jQuery.fn.accessibleMenu~_addUniqueId
// * @desc Adds a unique id and element.
// * The id string starts with the
// * string defined in settings.uuidPrefix.
// * @param {jQuery} element
// * @memberof jQuery.fn.accessibleMenu
// * @inner
// * @private

        _addUniqueId = function (element) {
            element = $(element);
            var settings = this.settings;
            if (!element.attr("id")) {
                element.attr("id", settings.uuidPrefix + "-" + new Date().getTime() + "-" + ++uuid);
            }
        };


// * @name jQuery.fn.accessibleMenu~_togglePanel
// * @desc Toggle the display of mega menu panels in response to an event.
// * The optional boolean value 'hide' forces all panels to hide.
// * @param {event} event
// * @param {Boolean} [hide] Hide all mega menu panels when true
// * @memberof jQuery.fn.accessibleMenu
// * @inner
// * @private

        _togglePanel = function (event, hide) {
            var target = $(event.target),
                that = this,
                settings = this.settings,
                menu = this.menu,
                topli = target.closest('.' + settings.topNavItemClass),
                panel = target.hasClass(settings.panelClass) ? target : target.closest('.' + settings.panelClass),
                newfocus;

            _toggleExpandedEventHandlers.call(this, true);

            if (hide) {
                topli = menu.find('.' + settings.topNavItemClass + ' .' + settings.openClass + ':first').closest('.' + settings.topNavItemClass);
                if (!(topli.is(event.relatedTarget) || topli.has(event.relatedTarget).length > 0)) {
                    if ((event.type === 'mouseout' || event.type === 'focusout') && topli.has(document.activeElement).length > 0) {
                        return;
                    }
                    topli.find('[aria-expanded]')
                        .attr('aria-expanded', 'false')
                        .removeClass(settings.openClass)
                        .filter('.' + settings.panelClass)
                        .attr('aria-hidden', 'true');
                    if (event.type === 'keydown' && event.keyCode === Keyboard.ESCAPE || event.type === 'DOMAttrModified') {
                        newfocus = topli.find(':tabbable:first');
                        setTimeout(function () {
                            menu.find('[aria-expanded].' + that.settings.panelClass).off('DOMAttrModified.accessible-menu');
                            newfocus.trigger("focus");
                            that.justFocused = false;
                        }, 99);
                    }
                } else if (topli.length === 0) {
                    menu.find('[aria-expanded=true]')
                        .attr('aria-expanded', 'false')
                        .removeClass(settings.openClass)
                        .filter('.' + settings.panelClass)
                        .attr('aria-hidden', 'true');
                }
            } else {
                clearTimeout(that.focusTimeoutID);
                topli.siblings()
                    .find('[aria-expanded]')
                    .attr('aria-expanded', 'false')
                    .removeClass(settings.openClass)
                    .filter('.' + settings.panelClass)
                    .attr('aria-hidden', 'true');
                topli.find('[aria-expanded]')
                    .attr('aria-expanded', 'true')
                    .addClass(settings.openClass)
                    .filter('.' + settings.panelClass)
                    .attr('aria-hidden', 'false');
                if (event.type === 'mouseover' && target.is(':tabbable') && topli.length === 1 && panel.length === 0 && menu.has(document.activeElement).length > 0) {
                    target.trigger("focus");
                    that.justFocused = false;
                }

                _toggleExpandedEventHandlers.call(that);
            }
        };


        // * @name jQuery.fn.accessibleMenu~_clickHandler
        // * @desc Handle click event on mega menu item
        // * @param {event} Event object
        // * @memberof jQuery.fn.accessibleMenu
        // * @inner
        // * @private

        _clickHandler = function (event) {
            var target = $(event.target).closest(':tabbable'),
                topli = target.closest('.' + this.settings.topNavItemClass),
                panel = target.closest('.' + this.settings.panelClass);
            if (topli.length === 1
                    && panel.length === 0
                    && topli.find('.' + this.settings.panelClass).length === 1) {
                if (!target.hasClass(this.settings.openClass)) {
                    event.preventDefault();
                    event.stopPropagation();
                    _togglePanel.call(this, event);
                    this.justFocused = false;
                }
                else {
                    if (this.justFocused) {
                        event.preventDefault();
                        event.stopPropagation();
                        this.justFocused = false;
                    } else if (isTouch) {
                        // event.preventDefault();
                        // event.stopPropagation();
                        // _togglePanel.call(this, event, target.hasClass(this.settings.openClass));
                    }
                }
            }
        };

// * @name jQuery.fn.accessibleMenu~_clickOutsideHandler
// * @desc Handle click event outside of a the megamenu
// * @param {event} Event object
// * @memberof jQuery.fn.accessibleMenu
// * @inner
// * @private

        _clickOutsideHandler = function (event) {
            if ($(event.target).closest(this.menu).length === 0) {
                event.preventDefault();
                event.stopPropagation();
                _togglePanel.call(this, event, true);
            }
        };


// * @name jQuery.fn.accessibleMenu~_DOMAttrModifiedHandler
// * @desc Handle DOMAttrModified event on panel to respond to Windows 8 Narrator ExpandCollapse pattern
// * @param {event} Event object
// * @memberof jQuery.fn.accessibleMenu
// * @inner
// * @private

        _DOMAttrModifiedHandler = function (event) {
            if (event.originalEvent.attrName === 'aria-expanded'
                    && event.originalEvent.newValue === 'false'
                    && $(event.target).hasClass(this.settings.openClass)) {
                event.preventDefault();
                event.stopPropagation();
                _togglePanel.call(this, event, true);
            }
        };


// * @name jQuery.fn.accessibleMenu~_focusInHandler
// * @desc Handle focusin event on mega menu item.
// * @param {event} Event object
// * @memberof jQuery.fn.accessibleMenu
// * @inner
// * @private

        _focusInHandler = function (event) {
            clearTimeout(this.focusTimeoutID);
            var target = $(event.target),
                panel = target.closest('.' + this.settings.panelClass);
            target
                .addClass(this.settings.focusClass);
            //.on('click.accessible-menu', $.proxy(_clickHandler, this));
            this.justFocused = !this.mouseFocused;
            this.mouseFocused = false;
            if (this.panels.not(panel).filter('.' + this.settings.openClass).length) {
                _togglePanel.call(this, event);
            }
        };


// * @name jQuery.fn.accessibleMenu~_focusOutHandler
// * @desc Handle focusout event on mega menu item.
// * @param {event} Event object
// * @memberof jQuery.fn.accessibleMenu
// * @inner
// * @private

        _focusOutHandler = function (event) {
            this.justFocused = false;
            var that = this,
                target = $(event.target),
                topli = target.closest('.' + this.settings.topNavItemClass),
                keepOpen = false;
            target
                .removeClass(this.settings.focusClass)
                .off('click.accessible-menu');

            if (window.cvox) {
                // If ChromeVox is running...
                that.focusTimeoutID = setTimeout(function () {
                    window.cvox.Api.getCurrentNode(function (node) {
                        if (topli.has(node).length) {
                            // and the current node being voiced is in
                            // the mega menu, clearTimeout,
                            // so the panel stays open.
                            clearTimeout(that.focusTimeoutID);
                        } else {
                            that.focusTimeoutID = setTimeout(function (scope, event, hide) {
                                _togglePanel.call(scope, event, hide);
                            }, 275, that, event, true);
                        }
                    });
                }, 25);
            } else {
                that.focusTimeoutID = setTimeout(function () {
                    _togglePanel.call(that, event, true);
                }, 300);
            }
        };

// * @name jQuery.fn.accessibleMenu~_keyDownHandler
// * @desc Handle keydown event on mega menu.
// * @param {event} Event object
// * @memberof jQuery.fn.accessibleMenu
// * @inner
// * @private

        _keyDownHandler = function (event) {
            var that = this.constructor === accessibleMenu ? this : _getPlugin(this), // determine the accessibleMenu plugin instance
                settings = that.settings,
                target = $($(this).is('.' + settings.hoverClass + ':tabbable') ? this : event.target), // if the element is hovered the target is this, otherwise, its the focused element
                menu = that.menu,
                topnavitems = that.topnavitems,
                topli = target.closest('.' + settings.topNavItemClass),
                tabbables = menu.find(':tabbable'),
                panel = target.hasClass(settings.panelClass) ? target : target.closest('.' + settings.panelClass),
                panelGroups = panel.find('.' + settings.panelGroupClass),
                currentPanelGroup = target.closest('.' + settings.panelGroupClass),
                next,
                keycode = event.keyCode || event.which,
                start,
                i,
                o,
                label,
                found = false,
                newString = Keyboard.keyMap[event.keyCode] || '',
                regex,
                isTopNavItem = topli.length === 1 && panel.length === 0;

            if (target.is("input:focus, select:focus, textarea:focus, button:focus")) {
                // if the event target is a form element we should handle keydown normally
                return;
            }

            if (target.is('.' + settings.hoverClass + ':tabbable')) {
                $('html').off('keydown.accessible-menu');
            }

            switch (keycode) {
                case Keyboard.ESCAPE:
                    _togglePanel.call(that, event, true);
                    break;
                case Keyboard.DOWN:
                    event.preventDefault();
                    if (isTopNavItem) {
                        _togglePanel.call(that, event);
                        found = topli.find('.' + settings.panelClass + ' :tabbable:first').trigger("focus").length === 1;
                    } else {
                        found = tabbables.filter(':gt(' + tabbables.index(target) + '):first').trigger("focus").length === 1;
                    }

                    if (!found && window.opera && opera.toString() === "[object Opera]" && (event.ctrlKey || event.metaKey)) {
                        tabbables = $(':tabbable');
                        i = tabbables.index(target);
                        found = $(':tabbable:gt(' + $(':tabbable').index(target) + '):first').trigger("focus").length === 1;
                    }
                    break;
                case Keyboard.UP:
                    event.preventDefault();
                    if (isTopNavItem && target.hasClass(settings.openClass)) {
                        _togglePanel.call(that, event, true);
                        next = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last');
                        if (next.children('.' + settings.panelClass).length) {
                            found = next.children()
                                .attr('aria-expanded', 'true')
                                .addClass(settings.openClass)
                                .filter('.' + settings.panelClass)
                                .attr('aria-hidden', 'false')
                                .find(':tabbable:last')
                                .trigger("focus") === 1;
                        }
                    } else if (!isTopNavItem) {
                        found = tabbables.filter(':lt(' + tabbables.index(target) + '):last').trigger("focus").length === 1;
                    }

                    if (!found && window.opera && opera.toString() === "[object Opera]" && (event.ctrlKey || event.metaKey)) {
                        tabbables = $(':tabbable');
                        i = tabbables.index(target);
                        found = $(':tabbable:lt(' + $(':tabbable').index(target) + '):first').trigger("focus").length === 1;
                    }
                    break;
                case Keyboard.RIGHT:
                    event.preventDefault();
                    if (isTopNavItem) {
                        found = topnavitems.filter(':gt(' + topnavitems.index(topli) + '):first').find(':tabbable:first').trigger("focus").length === 1;
                    } else {
                        if (panelGroups.length && currentPanelGroup.length) {
                            // if the current panel contains panel groups, and we are able to focus the first tabbable element of the next panel group
                            found = panelGroups.filter(':gt(' + panelGroups.index(currentPanelGroup) + '):first').find(':tabbable:first').trigger("focus").length === 1;
                        }

                        if (!found) {
                            found = topli.find(':tabbable:first').trigger("focus").length === 1;
                        }
                    }
                    break;
                case Keyboard.LEFT:
                    event.preventDefault();
                    if (isTopNavItem) {
                        found = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last').find(':tabbable:first').trigger("focus").length === 1;
                    } else {
                        if (panelGroups.length && currentPanelGroup.length) {
                            // if the current panel contains panel groups, and we are able to focus the first tabbable element of the previous panel group
                            found = panelGroups.filter(':lt(' + panelGroups.index(currentPanelGroup) + '):last').find(':tabbable:first').trigger("focus").length === 1;
                        }

                        if (!found) {
                            found = topli.find(':tabbable:first').trigger("focus").length === 1;
                        }
                    }
                    break;
                case Keyboard.TAB:
                    i = tabbables.index(target);
                    if (event.shiftKey && isTopNavItem && target.hasClass(settings.openClass)) {
                        _togglePanel.call(that, event, true);
                        next = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last');
                        if (next.children('.' + settings.panelClass).length) {
                            found = next.children()
                                .attr('aria-expanded', 'true')
                                .addClass(settings.openClass)
                                .filter('.' + settings.panelClass)
                                .attr('aria-hidden', 'false')
                                .find(':tabbable:last')
                                .trigger("focus");
                        }
                    } else if (event.shiftKey && i > 0) {
                        found = tabbables.filter(':lt(' + i + '):last').trigger("focus").length === 1;
                    } else if (!event.shiftKey && i < tabbables.length - 1) {
                        found = tabbables.filter(':gt(' + i + '):first').trigger("focus").length === 1;
                    } else if (window.opera && opera.toString() === "[object Opera]") {
                        tabbables = $(':tabbable');
                        i = tabbables.index(target);
                        if (event.shiftKey) {
                            found = $(':tabbable:lt(' + $(':tabbable').index(target) + '):last').trigger("focus").length === 1;
                        } else {
                            found = $(':tabbable:gt(' + $(':tabbable').index(target) + '):first').trigger("focus").length === 1;
                        }
                    }

                    if (found) {
                        event.preventDefault();
                    }
                    break;
                case Keyboard.SPACE:
                    if (isTopNavItem) {
                        event.preventDefault();
                        _clickHandler.call(that, event);
                    } else {
                        return true;
                    }
                    break;
                case Keyboard.ENTER:
                    return true;
                default:
                    // alphanumeric filter
                    clearTimeout(this.keydownTimeoutID);

                    keydownSearchString += newString !== keydownSearchString ? newString : '';

                    if (keydownSearchString.length === 0) {
                        return;
                    }

                    this.keydownTimeoutID = setTimeout(function () {
                        keydownSearchString = '';
                    }, keydownTimeoutDuration);

                    if (isTopNavItem && !target.hasClass(settings.openClass)) {
                        tabbables = tabbables.filter(':not(.' + settings.panelClass + ' :tabbable)');
                    } else {
                        tabbables = topli.find(':tabbable');
                    }

                    if (event.shiftKey) {
                        tabbables = $(tabbables.get()
                            .reverse());
                    }

                    for (i = 0; i < tabbables.length; i++) {
                        o = tabbables.eq(i);
                        if (o.is(target)) {
                            start = keydownSearchString.length === 1 ? i + 1 : i;
                            break;
                        }
                    }

                    regex = new RegExp('^' + keydownSearchString.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'), 'i');

                    for (i = start; i < tabbables.length; i++) {
                        o = tabbables.eq(i);
                        label = $.trim(o.text());
                        if (regex.test(label)) {
                            found = true;
                            o.trigger("focus");
                            break;
                        }
                    }
                    if (!found) {
                        for (i = 0; i < start; i++) {
                            o = tabbables.eq(i);
                            label = $.trim(o.text());
                            if (regex.test(label)) {
                                o.trigger("focus");
                                break;
                            }
                        }
                    }
                    break;
            }
            that.justFocused = false;
        };


        // * @name jQuery.fn.accessibleMenu~_mouseDownHandler
        // * @desc Handle mousedown event on mega menu.
        // * @param {event} Event object
        // * @memberof accessibleMenu
        // * @inner
        // * @private

        _mouseDownHandler = function (event) {
            if ($(event.target).is(this.settings.panelClass) || $(event.target).closest(":focusable").length) {
                this.mouseFocused = true;
            }
            clearTimeout(this.mouseTimeoutID);
            this.mouseTimeoutID = setTimeout(function () {
                clearTimeout(this.focusTimeoutID);
            }, 1);
        };

        /**
         * @name jQuery.fn.accessibleMenu~_mouseOverHandler
         * @desc Handle mouseover event on mega menu.
         * @param {event} Event object
         * @memberof jQuery.fn.accessibleMenu
         * @inner
         * @private
         */


        _mouseOverHandler = function (event) {
            clearTimeout(this.mouseTimeoutID);
            var that = this;
            if ($(window).width() > 768) {
                this.mouseTimeoutID = setTimeout(function () {
                    $(event.target).addClass(that.settings.hoverClass);

                    _togglePanel.call(that, event);
                    if ($(event.target).is(':tabbable')) {
                        $('html').on('keydown.accessible-menu', $.proxy(_keyDownHandler, event.target));
                    }
                }, this.settings.openDelay);
            }
        };


        // * @name jQuery.fn.accessibleMenu~_mouseOutHandler
        // * @desc Handle mouseout event on mega menu.
        // * @param {event} Event object
        // * @memberof jQuery.fn.accessibleMenu
        // * @inner
        // * @private

        _mouseOutHandler = function (event) {
            clearTimeout(this.mouseTimeoutID);
            var that = this;
            $(event.target)
                .removeClass(that.settings.hoverClass);

            that.mouseTimeoutID = setTimeout(function () {
                _togglePanel.call(that, event, true);
            }, this.settings.closeDelay);
            if ($(event.target).is(':tabbable')) {
                $('html').off('keydown.accessible-menu');
            }

        };

        _toggleExpandedEventHandlers = function (hide) {
            var menu = this.menu;
            if (hide) {
                $('html').off('mouseup.outside-accessible-menu, touchend.outside-accessible-menu, mspointerup.outside-accessible-menu,  pointerup.outside-accessible-menu');

                menu.find('[aria-expanded].' + this.settings.panelClass).off('DOMAttrModified.accessible-menu');
            } else {
                $('html').on('mouseup.outside-accessible-menu, touchend.outside-accessible-menu, mspointerup.outside-accessible-menu,  pointerup.outside-accessible-menu', $.proxy(_clickOutsideHandler, this));

                /* Narrator in Windows 8 automatically toggles the aria-expanded property on double tap or click.
                   To respond to the change to collapse the panel, we must add a listener for a DOMAttrModified event. */
                menu.find('[aria-expanded=true].' + this.settings.panelClass).on('DOMAttrModified.accessible-menu', $.proxy(_DOMAttrModifiedHandler, this));
            }
        };

        /* public attributes and methods ------------------------- */
        return {
            constructor: accessibleMenu,

            /**
             * @lends jQuery.fn.accessibleMenu
             * @desc Initializes an instance of the accessibleMenu plugins
             * @memberof jQuery.fn.accessibleMenu
             * @instance
             */
            init: function () {
                var settings = this.settings,
                    nav = $(this.element),
                    menu = nav.children().first(),
                    topnavitems = menu.children();
                this.start(settings, nav, menu, topnavitems);
            },

            start: function (settings, nav, menu, topnavitems) {
                var that = this;
                this.settings = settings;
                this.menu = menu;
                this.topnavitems = topnavitems;

               // nav.attr("role", "navigation"); //it is already inside of <nav> no need for role.
                menu.addClass(settings.menuClass);
                topnavitems.each(function (i, topnavitem) {
                    var topnavitemlink, topnavitempanel;
                    topnavitem = $(topnavitem);
                    topnavitem.addClass(settings.topNavItemClass);
                    topnavitemlink = topnavitem.find(":tabbable:first");
                    topnavitempanel = topnavitem.children(":not(:tabbable):last");
                    _addUniqueId.call(that, topnavitemlink);
                    if (topnavitempanel.length) {
                        _addUniqueId.call(that, topnavitempanel);
                        topnavitemlink.attr({
                            // "aria-haspopup": true,
                            "aria-controls": topnavitempanel.attr("id"),
                            "aria-expanded": false
                        });

                        topnavitempanel.attr({
                            "role": "region",
                            "aria-expanded": false,
                            "aria-hidden": true
                        })
                            .addClass(settings.panelClass)
                            .not("[aria-labelledby]")
                            .attr("aria-labelledby", topnavitemlink.attr("id"));
                    }
                });

                this.panels = menu.find("." + settings.panelClass);


                menu.on("focusin.accessible-menu", ":focusable, ." + settings.panelClass, $.proxy(_focusInHandler, this))
                    .on("focusout.accessible-menu", ":focusable, ." + settings.panelClass, $.proxy(_focusOutHandler, this))
                    .on("keydown.accessible-menu", $.proxy(_keyDownHandler, this))
                    .on("mouseover.accessible-menu", $.proxy(_mouseOverHandler, this))
                    .on("mouseout.accessible-menu", $.proxy(_mouseOutHandler, this))
                    .on("mousedown.accessible-menu", $.proxy(_mouseDownHandler, this));

                if (isTouch) {
                    menu.on("touchstart.accessible-menu", $.proxy(_clickHandler, this));
                }

                menu.find("hr").attr("role", "separator");

                if ($(document.activeElement).closest(menu).length) {
                    $(document.activeElement).trigger("focusin.accessible-menu");
                }



            },


            // * @desc Get default values
            // * @example $(selector).accessibleMenu("getDefaults");
            // * @return {object}
            // * @memberof jQuery.fn.accessibleMenu
            // * @instance

            getDefaults: function () {
                return this._defaults;
            },

            // * @desc Get any option set to plugin using its name (as string)
            // * @example $(selector).accessibleMenu("getOption", some_option);
            // * @param {string} opt
            // * @return {string}
            // * @memberof jQuery.fn.accessibleMenu
            // * @instance

            getOption: function (opt) {
                return this.settings[opt];
            },

            // * @desc Get all options
            // * @example $(selector).accessibleMenu("getAllOptions");
            // * @return {object}
            // * @memberof jQuery.fn.accessibleMenu
            // * @instance

            getAllOptions: function () {
                return this.settings;
            },

            // * @desc Set option
            // * @example $(selector).accessibleMenu("setOption", "option_name",  "option_value",  reinitialize);
            // * @param {string} opt - Option name
            // * @param {string} val - Option value
            // * @param {boolean} [reinitialize] - boolean to re-initialize the menu.
            // * @memberof jQuery.fn.accessibleMenu
            // * @instance

            setOption: function (opt, value, reinitialize) {
                this.settings[opt] = value;
                if (reinitialize) {
                    this.init();
                }
            }
        };
    }());

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new $.fn[pluginName].accessibleMenu(this, options));
            }
        });
    };

    $.fn[pluginName].accessibleMenu = accessibleMenu;

    /* :focusable and :tabbable selectors from
       https://raw.github.com/jquery/jquery-ui/master/ui/jquery.ui.core.js */
    
    // * @private

    function visible(element) {
        return $.expr.pseudos.visible(element) && !$(element).parents().addBack().filter(function () {
            return $.css(this, "visibility") === "hidden";
        }).length;
    }


    // * @private

    function focusable(element, isTabIndexNotNaN) {
        var map, mapName, img,
            nodeName = element.nodeName.toLowerCase();
        if ("area" === nodeName) {
            map = element.parentNode;
            mapName = map.name;
            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
                return false;
            }
            img = $("img[usemap=#" + mapName + "]")[0];
            return !!img && visible(img);
        }
        return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled :
                "a" === nodeName ?
                        element.href || isTabIndexNotNaN :
                        isTabIndexNotNaN) &&
                            // the element and all of its ancestors must be visible
                            visible(element);
    }

    $.extend($.expr.pseudos, {
        data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) {
            return function (elem) {
                return !!$.data(elem, dataName);
            };
        }) : // support: jQuery <1.8
                function (elem, i, match) {
                    return !!$.data(elem, match[3]);
                },

        focusable: function (element) {
            return focusable(element, !isNaN($.attr(element, "tabindex")));
        },

        tabbable: function (element) {
            var tabIndex = $.attr(element, "tabindex"),
                isTabIndexNaN = isNaN(tabIndex);
            return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
        }
    });


    // Do Navigation Reset function on window resize unless it's mobile device.
    $(window).on('resize', function () {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            return false;
        }
        else {
            NavReset();
        }
    });



    // Navigation Reset function
    function NavReset() {
        $(".sub-nav").removeClass("open");
        $(".sub-nav").removeClass("secondary-open");
        $(".sub-nav").attr("aria-expanded", false);
        $(".sub-nav").attr("aria-hidden", true);
        $(".first-level-link").removeClass("open");
        $(".first-level-link").removeClass("active");
        $(".first-level-link").attr("aria-expanded", false);
        $("#navigation").addClass("mobile-closed");
        if ($(window).width() < 768) {
            $("#navigation").css("max-height", "0").attr("aria-hidden", "true");
            $('.sub-nav').slideUpTransitionSub();
            $('#navigation').slideUpTransition();
            // 
            $(".rotate").removeClass('down');
            $("#nav_list a").attr("tabindex", "-1");
            $("#nav_list button").attr("tabindex", "-1");
        }
        else {
            $("#navigation").removeAttr("style aria-hidden");
            $(".sub-nav").removeAttr("style");
            $("#nav_list a").removeAttr("tabindex");
            $("#nav_list button").removeAttr("tabindex");
        }

        $(".toggle-sub-nav").removeClass("open");
        $(".toggle-sub-nav").addClass("closed");
        $(".nav-item").removeClass("active");
        $(".toggle-menu").attr('aria-expanded', 'false');
        $(".toggle-menu").removeClass("open");
        $(".toggle-sub-nav").removeClass("open");
    }

}(jQuery, window, document));


$("nav:first").accessibleMenu({
    navId: "#navigation",
    /* prefix for generated unique id attributes, which are required 
       to indicate aria-owns, aria-controls and aria-labelledby */
    uuidPrefix: "accessible-menu",
    /* css class used to define the megamenu styling */
    menuClass: "nav-menu",
    /* css class for a top-level navigation item in the megamenu */
    topNavItemClass: "nav-item",
    /* css class for a megamenu panel */
    panelClass: "sub-nav",
    /* css class for a group of items within a megamenu panel */
    panelGroupClass: "sub-nav-group",
    /* css class for the hover state */
    hoverClass: "hover",
    /* css class for the focus state */
    focusClass: "focus",
    /* css class for the open state */
    openClass: "open"
});


/* Mobile Controls fix */
$(document).ready(function () {
    $("#navigation .mobile-controls").removeClass("nav-menu");
    $("#navigation .mobile-control a").removeAttr("aria-hidden aria-expanded role id").removeClass("sub-nav with-few-items subnav-closed");
    $("#navigation .mobile-control .sr-only").removeAttr("aria-hidden aria-expanded role id").removeClass("sub-nav with-few-items subnav-closed");
});


/* -----------------------------------------
   ACCORDION LIST - /source/js/cagov/accordion.js
----------------------------------------- */

// Adds tabindex=0 to toggle links
// Hides the description by default for js users.
// No-js users will see the descriptions expanded
$(document).ready(function () {
    var descriptionDefault = $('.accordion-list').find('.description').hide().attr('aria-hidden', 'true'); // Hide the descriptions by default
    $('.accordion-list .toggle').attr('tabindex', '0').attr('aria-expanded', 'false'); // Add tabindex to toggle links and aria support

    $(".accordion-list .toggle").on("click", function (e) {
        var accdDesc = $(this).next(".description");

        if (accdDesc.is(":visible")) {
            // CLOSED STATE
            accdDesc.slideUp('fast').removeClass('hide').attr('aria-hidden', 'true');
            $(this).parent('li').removeClass('open');
            $(this).attr('aria-expanded', 'false');
        } else {
            // OPEN STATE
            accdDesc.slideDown('fast').removeClass('hide').attr('aria-hidden', 'false');
            $(this).parent('li').addClass('open');
            $(this).attr('aria-expanded', 'true');
        }
        return false;
    });
});

/* Accessible list accordion */
// Source: http://oaa-accessibility.org/examplep/accordian1/

$(document).ready(function () {

    var panel1 = new tabpanel("accordion", true);
    // you can have more than one accordion on your webpage simply adding new tabpanel variable with new assigned id
    // eaxaple: var panel1 = new tabpanel("accordion2", true);
});

// 
// keyCodes() is an object to contain keycodes needed for the application 
// 
function keyCodes() {
    // Define values for keycodes 
    this.tab = 9;
    this.enter = 13;
    this.esc = 27;

    this.space = 32;
    this.pageup = 33;
    this.pagedown = 34;
    this.end = 35;
    this.home = 36;

    this.left = 37;
    this.up = 38;
    this.right = 39;
    this.down = 40;

} // end keyCodes 

// 
// tabpanel() is a class constructor to create a ARIA-enabled tab panel widget. 
// 
// @param (id string) id is the id of the div containing the tab panel. 
// 
// @param (accordian boolean) accordian is true if the tab panel should operate 
//         as an accordian; false if a tab panel 
// 
// @return N/A 
// 
// Usage: Requires a div container and children as follows: 
// 
//         1. tabs/accordian headers have class 'tab' 
// 
//         2. panels are divs with class 'panel' 
// 
function tabpanel(id, accordian) {

    // define the class properties 

    this.panel_id = id; // store the id of the containing div 
    this.accordian = accordian; // true if this is an accordian control 
    this.$panel = $('#' + id);  // store the jQuery object for the panel 
    this.keys = new keyCodes(); // keycodes needed for event handlers 
    this.$tabs = this.$panel.find('.tab'); // Array of panel tabs. 
    this.$panels = this.$panel.children('.panel'); // Array of panel. 

    // Bind event handlers 
    this.bindHandlers();

    // Initialize the tab panel 
    this.init();

} // end tabpanel() constructor 

// 
// Function init() is a member function to initialize the tab/accordian panel. Hides all panels. If a tab 
// has the class 'selected', makes that panel visible; otherwise, makes first panel visible. 
// 
// @return N/A 
// 
tabpanel.prototype.init = function () {
    var $tab; // the selected tab - if one is selected 

    // add aria attributes to the panels 
    this.$panels.attr('aria-hidden', 'true');

    // hide all the panels 
    this.$panels.hide();

    // get the selected tab 
    $tab = this.$tabs.filter('.selected');

    if ($tab === undefined) {
        $tab = this.$tabs.first();
        $tab.addClass('selected');
    }

    // show the panel that the selected tab controls and set aria-hidden to false 
    this.$panel.find('#' + $tab.attr('aria-controls')).show().attr('aria-hidden', 'false');

}; // end init() 

// 
// Function switchTabs() is a member function to give focus to a new tab or accordian header. 
// If it's a tab panel, the currently displayed panel is hidden and the panel associated with the new tab 
// is displayed. 
// 
// @param ($curTab obj) $curTab is the jQuery object of the currently selected tab 
// 
// @param ($newTab obj) $newTab is the jQuery object of new tab to switch to 
// 
// @return N/A 
// 
tabpanel.prototype.switchTabs = function ($curTab, $newTab) {

    // Remove the highlighting from the current tab 
    $curTab.removeClass('selected focus');

    // remove tab from the tab order and update its aria-selected attribute 
    $curTab.attr('aria-selected', 'false');


    // Highlight the new tab and update its aria-selected attribute 
    $newTab.addClass('selected').attr('aria-selected', 'true');

    // If this is a tab panel, swap displayed tabs 
    if (this.accordian === false) {
        // hide the current tab panel and set aria-hidden to true 
        this.$panel.find('#' + $curTab.attr('aria-controls')).hide().attr('aria-hidden', 'true');

        // update the aria-expanded attribute for the old tab 
        $curTab.attr('aria-expanded', 'false');

        // show the new tab panel and set aria-hidden to false 
        this.$panel.find('#' + $newTab.attr('aria-controls')).show().attr('aria-hidden', 'false');

        // update the aria-expanded attribute for the new tab 
        $newTab.attr('aria-expanded', 'true');

        // get new list of focusable elements 
        this.$focusable.length = 0;
        this.$panels.find(':focusable');
    }

    // Make new tab navigable 
    $newTab.attr('tabindex', '0');

    // give the new tab focus 
    $newTab.trigger("focus");

}; // end switchTabs() 

// 
// Function togglePanel() is a member function to display or hide the panel 
// associated with an accordian header. Function also binds a keydown handler to the focusable items 
// in the panel when expanding and unbinds the handlers when collapsing. 
// 
// @param ($tab obj) $tab is the jQuery object of the currently selected tab 
// 
// @return N/A 
// 
tabpanel.prototype.togglePanel = function ($tab) {

    $panel = this.$panel.find('#' + $tab.attr('aria-controls'));

    if ($panel.attr('aria-hidden') === 'true') {
        $panel.attr('aria-hidden', 'false');
        $panel.slideDown(100);
        $tab.addClass('open');
        $tab.find('i').attr('class', 'ca-gov-icon-menu-toggle-open font-size-sm');

        // update the aria-expanded attribute 
        $tab.attr('aria-expanded', 'true');
    }
    else {
        $panel.attr('aria-hidden', 'true');
        $panel.slideUp(100);
        $tab.removeClass('open');
        $tab.find('i').attr('class', 'ca-gov-icon-menu-toggle-closed font-size-sm');

        // update the aria-expanded attribute 
        $tab.attr('aria-expanded', 'false');
    }

}; // end togglePanel() 

// 
// Function bindHandlers() is a member function to bind event handlers for the tabs 
// 
// @return N/A 
// 
tabpanel.prototype.bindHandlers = function () {

    var thisObj = this; // Store the this pointer for reference 

    ////////////////////////////// 
    // Bind handlers for the tabs / accordian headers 

    // bind a tab keydown handler 
    this.$tabs.on("keydown", function (e) {
        return thisObj.handleTabKeyDown($(this), e);
    });

    // bind a tab keypress handler 
    this.$tabs.on("keypress", function (e) {
        return thisObj.handleTabKeyPress($(this), e);
    });

    // bind a tab click handler 
    this.$tabs.on("click", function (e) {
        return thisObj.handleTabClick($(this), e);
    });

    // bind a tab focus handler 
    this.$tabs.on("focus", function (e) {
        return thisObj.handleTabFocus($(this), e);
    });

    // bind a tab blur handler 
    this.$tabs.on("blur", function (e) {
        return thisObj.handleTabBlur($(this), e);
    });

    ///////////////////////////// 
    // Bind handlers for the panels 

    // bind a keydown handlers for the panel focusable elements 
    this.$panels.on("keydown", function (e) {
        return thisObj.handlePanelKeyDown($(this), e);
    });

    // bind a keypress handler for the panel 
    this.$panels.on("keypress", function (e) {
        return thisObj.handlePanelKeyPress($(this), e);
    });

    // bind a panel click handler 
    this.$panels.on("click", function (e) {
        return thisObj.handlePanelClick($(this), e);
    });

}; // end bindHandlers() 

// 
// Function handleTabKeyDown() is a member function to process keydown events for a tab 
// 
// @param ($tab obj) $tab is the jquery object of the tab being processed 
// 
// @param (e obj) e is the associated event object 
// 
// @return (boolean) Returns true if propagating; false if consuming event 
// 
tabpanel.prototype.handleTabKeyDown = function ($tab, e) {

    if (e.altKey) {
        // do nothing 
        return true;
    }

    switch (e.keyCode) {
        case this.keys.enter:
        case this.keys.space: {

            // Only process if this is an accordian widget 
            if (this.accordian === true) {
                // display or collapse the panel 
                this.togglePanel($tab);

                e.stopPropagation();
                return false;
            }

            return true;
        }
        case this.keys.left:
        case this.keys.up: {

            var thisObj = this;
            var $prevTab; // holds jQuery object of tab from previous pass 
            var $newTab; // the new tab to switch to 

            if (e.ctrlKey) {
                // Ctrl+arrow moves focus from panel content to the open 
                // tab/accordian header. 
            }
            else {
                var curNdx = this.$tabs.index($tab);

                if (curNdx === 0) {
                    // tab is the first one: 
                    // set newTab to last tab 
                    $newTab = this.$tabs.last();
                }
                else {
                    // set newTab to previous 
                    $newTab = this.$tabs.eq(curNdx - 1);
                }

                // switch to the new tab 
                this.switchTabs($tab, $newTab);
            }

            e.stopPropagation();
            return false;
        }
        case this.keys.right:
        case this.keys.down: {

            var thisObj = this;
            var foundTab = false; // set to true when current tab found in array 
            var $newTab; // the new tab to switch to 

            var curNdx = this.$tabs.index($tab);

            if (curNdx == this.$tabs.length - 1) {
                // tab is the last one: 
                // set newTab to first tab 
                $newTab = this.$tabs.first();
            }
            else {
                // set newTab to next tab 
                $newTab = this.$tabs.eq(curNdx + 1);
            }

            // switch to the new tab 
            this.switchTabs($tab, $newTab);

            e.stopPropagation();
            return false;
        }
        case this.keys.home: {

            // switch to the first tab 
            this.switchTabs($tab, this.$tabs.first());

            e.stopPropagation();
            return false;
        }
        case this.keys.end: {

            // switch to the last tab 
            this.switchTabs($tab, this.$tabs.last());

            e.stopPropagation();
            return false;
        }
    }
}; // end handleTabKeyDown() 


// 
// Function handleTabKeyPress() is a member function to process keypress events for a tab. 
// 
// 
// @param ($tab obj) $tab is the jquery object of the tab being processed 
// 
// @param (e obj) e is the associated event object 
// 
// @return (boolean) Returns true if propagating; false if consuming event 
// 
tabpanel.prototype.handleTabKeyPress = function ($tab, e) {

    if (e.altKey) {
        // do nothing 
        return true;
    }

    switch (e.keyCode) {
        case this.keys.enter:
        case this.keys.space:
        case this.keys.left:
        case this.keys.up:
        case this.keys.right:
        case this.keys.down:
        case this.keys.home:
        case this.keys.end: {
            e.stopPropagation();
            return false;
        }
        case this.keys.pageup:
        case this.keys.pagedown: {

            // The tab keypress handler must consume pageup and pagedown 
            // keypresses to prevent Firefox from switching tabs 
            // on ctrl+pageup and ctrl+pagedown 

            if (!e.ctrlKey) {
                return true;
            }

            e.stopPropagation();
            return false;
        }
    }

    return true;

}; // end handleTabKeyPress() 

// 
// Function handleTabClick() is a member function to process click events for tabs 
// 
// @param ($tab object) $tab is the jQuery object of the tab being processed 
// 
// @param (e object) e is the associated event object 
// 
// @return (boolean) returns false 
// 
tabpanel.prototype.handleTabClick = function ($tab, e) {

    // make clicked tab navigable 
    $tab.attr('tabindex', '0').attr('aria-selected', 'true').addClass('selected');

    // remove all tabs from the tab order and update their aria-selected attribute 
    this.$tabs.not($tab).attr('aria-selected', 'false').removeClass('selected');

    // Expand the new panel 
    this.togglePanel($tab);

    e.stopPropagation();
    return false;

}; // end handleTabClick() 

// 
// Function handleTabFocus() is a member function to process focus events for tabs 
// 
// @param ($tab object) $tab is the jQuery object of the tab being processed 
// 
// @param (e object) e is the associated event object 
// 
// @return (boolean) returns true 
// 
tabpanel.prototype.handleTabFocus = function ($tab, e) {

    // Add the focus class to the tab 
    $tab.addClass('focus');

    return true;

}; // end handleTabFocus() 

// 
// Function handleTabBlur() is a member function to process blur events for tabs 
// 
// @param ($tab object) $tab is the jQuery object of the tab being processed 
// 
// @param (e object) e is the associated event object 
// 
// @return (boolean) returns true 
// 
tabpanel.prototype.handleTabBlur = function ($tab, e) {

    // Remove the focus class to the tab 
    $tab.removeClass('focus');

    return true;

}; // end handleTabBlur() 


///////////////////////////////////////////////////////// 
// Panel Event handlers 
// 

// 
// Function handlePanelKeyDown() is a member function to process keydown events for a panel 
// 
// @param ($panel obj) $panel is the jquery object of the panel being processed 
// 
// @param (e obj) e is the associated event object 
// 
// @return (boolean) Returns true if propagating; false if consuming event 
// 
tabpanel.prototype.handlePanelKeyDown = function ($panel, e) {

    if (e.altKey) {
        // do nothing 
        return true;
    }

    switch (e.keyCode) {
        case this.keys.tab: {
            var $focusable = $panel.find(':focusable');
            var curNdx = $focusable.index($(e.target));
            var panelNdx = this.$panels.index($panel);
            var numPanels = this.$panels.length;

            if (e.shiftKey) {
                // if this is the first focusable item in the panel 
                // find the preceding expanded panel (if any) that has 
                // focusable items and set focus to the last one in that 
                // panel. If there is no preceding panel or no focusable items 
                // do not process. 
                if (curNdx === 0 && panelNdx > 0) {

                    // Iterate through previous panels until we find one that 
                    // is expanded and has focusable elements 
                    // 
                    for (var ndx = panelNdx - 1; ndx >= 0; ndx--) {

                        var $prevPanel = this.$panels.eq(ndx);
                        var $prevTab = $('#' + $prevPanel.attr('aria-labelledby'));

                        // get the focusable items in the panel 
                        $focusable.length = 0;
                        $focusable = $prevPanel.find(':focusable');

                        if ($focusable.length > 0) {
                            // there are focusable items in the panel. 
                            // Set focus to the last item. 
                            $focusable.last().trigger("focus");

                            // reset the aria-selected state of the tabs 
                            this.$tabs.attr('aria-selected', 'false').removeClass('selected');

                            // set the associated tab's aria-selected state 
                            $prevTab.attr('aria-selected', 'true').addClass('selected');

                            e.stopPropagation;
                            return false;
                        }
                    }
                }
            }
            else if (panelNdx < numPanels) {

                // if this is the last focusable item in the panel 
                // find the nearest following expanded panel (if any) that has 
                // focusable items and set focus to the first one in that 
                // panel. If there is no preceding panel or no focusable items 
                // do not process. 
                if (curNdx === $focusable.length - 1) {

                    // Iterate through following panels until we find one that 
                    // is expanded and has focusable elements 
                    // 
                    for (var ndx = panelNdx + 1; ndx < numPanels; ndx++) {

                        var $nextPanel = this.$panels.eq(ndx);
                        var $nextTab = $('#' + $nextPanel.attr('aria-labelledby'));

                        // get the focusable items in the panel 
                        $focusable.length = 0;
                        $focusable = $nextPanel.find(':focusable');

                        if ($focusable.length > 0) {
                            // there are focusable items in the panel. 
                            // Set focus to the first item. 
                            $focusable.first().trigger("focus");

                            // reset the aria-selected state of the tabs 
                            this.$tabs.attr('aria-selected', 'false').removeClass('selected');

                            // set the associated tab's aria-selected state 
                            $nextTab.attr('aria-selected', 'true').addClass('selected');

                            e.stopPropagation;
                            return false;
                        }
                    }
                }
            }

            break;
        }
        case this.keys.left:
        case this.keys.up: {

            if (!e.ctrlKey) {
                // do not process 
                return true;
            }

            // get the jQuery object of the tab 
            var $tab = $('#' + $panel.attr('aria-labelledby'));

            // Move focus to the tab 
            $tab.trigger("focus");

            e.stopPropagation();
            return false;
        }
        case this.keys.pageup: {

            var $newTab;

            if (!e.ctrlKey) {
                // do not process 
                return true;
            }

            // get the jQuery object of the tab 
            var $tab = this.$tabs.filter('.selected');

            // get the index of the tab in the tab list 
            var curNdx = this.$tabs.index($tab);

            if (curNdx === 0) {
                // this is the first tab, set focus on the last one 
                $newTab = this.$tabs.last();
            }
            else {
                // set focus on the previous tab 
                $newTab = this.$tabs.eq(curNdx - 1);
            }

            // switch to the new tab 
            this.switchTabs($tab, $newTab);

            e.stopPropagation();
            e.preventDefault();
            return false;
        }
        case this.keys.pagedown: {

            var $newTab;

            if (!e.ctrlKey) {
                // do not process 
                return true;
            }

            // get the jQuery object of the tab 
            var $tab = $('#' + $panel.attr('aria-labelledby'));

            // get the index of the tab in the tab list 
            var curNdx = this.$tabs.index($tab);

            if (curNdx === this.$tabs.length - 1) {
                // this is the last tab, set focus on the first one 
                $newTab = this.$tabs.first();
            }
            else {
                // set focus on the next tab 
                $newTab = this.$tabs.eq(curNdx + 1);
            }

            // switch to the new tab 
            this.switchTabs($tab, $newTab);

            e.stopPropagation();
            e.preventDefault();
            return false;
        }
    }

    return true;

}; // end handlePanelKeyDown() 

// 
// Function handlePanelKeyPress() is a member function to process keypress events for a panel 
// 
// @param ($panel obj) $panel is the jquery object of the panel being processed 
// 
// @param (e obj) e is the associated event object 
// 
// @return (boolean) Returns true if propagating; false if consuming event 
// 
tabpanel.prototype.handlePanelKeyPress = function ($panel, e) {

    if (e.altKey) {
        // do nothing 
        return true;
    }

    if (e.ctrlKey && (e.keyCode === this.keys.pageup || e.keyCode === this.keys.pagedown)) {
        e.stopPropagation();
        e.preventDefault();
        return false;
    }

    switch (e.keyCode) {
        case this.keys.esc: {
            e.stopPropagation();
            e.preventDefault();
            return false;
        }
    }

    return true;

}; // end handlePanelKeyPress() 

// 
// Function handlePanelClick() is a member function to process click events for panels 
// 
// @param ($panel object) $panel is the jQuery object of the panel being processed 
// 
// @param (e object) e is the associated event object 
// 
// @return (boolean) returns true 
// 
tabpanel.prototype.handlePanelClick = function ($panel, e) {

    var $tab = $('#' + $panel.attr('aria-labelledby'));

    // make clicked panel's tab navigable 
    $tab.attr('tabindex', '0').attr('aria-selected', 'true').addClass('selected');

    // remove all tabs from the tab order and update their aria-selected attribute 
    this.$tabs.not($tab).attr('aria-selected', 'false').removeClass('selected');

    return true;

}; // end handlePanelClick() 

// focusable is a small jQuery extension to add a :focusable selector. It is used to 
// get a list of all focusable elements in a panel. Credit to ajpiano on the jQuery forums. 
// 
$.extend($.expr.pseudos, {
    focusable: function (element) {
        var nodeName = element.nodeName.toLowerCase();
        var tabIndex = $(element).attr('tabindex');

        // the element and all of its ancestors must be visible 
        if ($(element)[nodeName === 'area' ? 'parents' : 'closest'](':hidden').length === true) {
            return false;
        }

        // If tabindex is defined, its value must be greater than 0 
        if (!isNaN(tabIndex) && tabIndex < 0) {
            return false;
        }

        // if the element is a standard form control, it must not be disabled 
        if (/input|select|textarea|button|object/.test(nodeName) === true) {

            return !element.disabled;
        }

        // if the element is a link, href must be defined 
        if ((nodeName === 'a' || nodeName === 'area') === true) {

            return element.href.length > 0;
        }

        // this is some other page element that is not normally focusable. 
        return false;
    }
});


/* Accordion Bootstrap 4 */
$(document).ready(function () {
    var accordion = $('.accordion').find('.collapsed'); 
    var accordionTab = $('.accordion').find('a[data-toggle="collapse"]');
    var accordioncarrot = $('<span aria-hidden="true"></span>');
    accordion.attr("tabindex", 0); // make accordion tabable
    // appending carrot span to each accordion tab
    accordionTab.append(accordioncarrot);

    // Accessibility fixes
    $(".accordion > .panel > .panel-heading > .panel-title > a").on("click", function () {

        var accordionPanelID = $(this).attr("id");
        var accordionContentID = $("[aria-labelledby=" + accordionPanelID + "]");
        var accordionGroup = $(this).closest(".accordion");
        var accordionContentDiv = accordionGroup.find(".panel-collapse");

        if ($(this).attr("aria-expanded") === "true") {
            accordionContentID.attr("tabindex", "-1").attr("aria-hidden", "true");

        }
        else {
            accordionContentID.removeAttr("tabindex aria-hidden");
        }
    });

});

/* Remove aria controls from a links */
$(document).ready(function () {
    var alink = $(".card").find("a[role='tab']");
    alink.removeAttr("aria-controls");
});






/* -----------------------------------------
   PANELS - /source/js/cagov/panel.js
----------------------------------------- */

$(document).ready(function(){ 
    // Finds the first panel in the sidebar
    // Adds the "first" class
    $(".main-secondary .panel").first().addClass("first");
       
    // Add a hook to the standout panel for adding a triangle
    $(".panel.highlight").find(".panel-heading").prepend( "<span class='triangle'></span>" );
});

/* -----------------------------------------
   SEARCH - /source/js/cagov/search.js
----------------------------------------- */

$(document).ready(function () {
    var $searchContainer = $("#head-search");
    var $searchText = $searchContainer.find(".search-textfield");
    var $resultsContainer = $('.search-results-container');
    var searchInput = $("#head-search #Search .search-textfield");
    var searchSubmit = $("#head-search #Search .gsc-search-button");
    var searchReset = $("#head-search #Search .gsc-clear-button");
    var featuredsearch = $("#head-search").hasClass("featured-search");
    var searchactive = $("#head-search").hasClass("active");
    var searchlabel = $("#SearchInput");
    var $globalHeader = $('.global-header');
    var searchbox = $(".search-container:not(.featured-search)");
    var headerHeight = $globalHeader.innerHeight();
    var utility = $(".utility-header");
    var utilityHeight = utility.innerHeight();
    var alertBanner = $(".alert-banner");
    var alertClose = $(".alert-banner .close");
    var alertbannerHeight = 0;

    var $body = $("body");
    var $specialIcon =
        // setup the tabs
        $('.search-tabs button').on("click", function (e) {
            $(this).siblings().removeClass('active');
            $(this).tab('show').addClass('active');
            e.preventDefault();
        });
    
    // Unfreeze search width when blured.
    $searchText.on('blur focus', function (e) {
        $(this).parents("#head-search").removeClass("focus");
        $(this).parents(".search-container").addClass("focus");
    });

    $searchText.on("change keyup paste", function () {
        if ($(this).val()) {
            addSearchResults();
        }
    });



    //  search box top position
    if (!mobileView()) {
        // taking into account multiple alert banners
        $.each(alertBanner, function () {
            alertbannerHeight += $(this).innerHeight() + 2;
        });
        // calulation search box top position
        var searchtop = headerHeight - utilityHeight - alertbannerHeight + 5;
        if (!mobileView()) {
            searchbox.css({
                'top': Math.max(searchtop, 87)
            });
        }
    } 

    // have the close button remove search results and the applied classes
    $resultsContainer.find('.close').on('click', removeSearchResults);
    $searchContainer.find('.close').on('click', removeSearchResults);

    // Our special nav icon which we need to hook into for starting the search
    // $('#nav-item-search')

    // Sitecore link data types currently do not have a way to set id's per nav,
    // so instead we are binding to what I'm assuming will aslways be the search
    $('.top-level-nav .nav-item .ca-gov-icon-search, #nav-item-search').parents('.nav-item').on('click', function (e) {
        e.preventDefault();
        $searchText.trigger("focus").trigger('focus');

        // mobile
        if (mobileView() && !$('.search-container').hasClass('active')) {
            $('html, body').animate({
                scrollTop: $("#head-search").offset().top
            }, 500);
        }

        if (!featuredsearch) {
            $('.search-container:not(.featured-search)').toggleClass('active');
        }

        var featuredsearch = $("#head-search").hasClass("featured-search");
        var searchactive = $("#head-search").hasClass("active");
        // hide Search form if it's not active
        if (searchactive) {
            searchInput.removeAttr('tabindex aria-hidden');
            searchSubmit.removeAttr('tabindex aria-hidden');
            searchReset.removeAttr('tabindex aria-hidden');
            searchlabel.removeAttr('aria-hidden');
            $searchContainer.removeAttr('aria-hidden');

        }
        else {
            searchInput.attr({
                "tabindex": '-1',
                "aria-hidden": 'true'
            });
            searchSubmit.attr({
                "tabindex": '-1',
                "aria-hidden": 'true'
            });
            searchReset.attr({
                "tabindex": '-1',
                "aria-hidden": 'true'
            });
            searchlabel.attr({
                "aria-hidden": 'true'
            });
            $searchContainer.attr("aria-hidden", "true");
        }

        if (featuredsearch) {
            searchInput.removeAttr('tabindex aria-hidden');
            searchSubmit.removeAttr('tabindex aria-hidden');
            searchReset.removeAttr('tabindex aria-hidden');
            searchlabel.removeAttr('aria-hidden');
            $searchContainer.removeAttr('aria-hidden');
        }

        if (mobileView() && featuredsearch) { $('.search-container').toggleClass('active'); }

        // let the user know the input box is where they should search
        $("#head-search").addClass('play-animation').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('play-animation');

        });



    });

    // Make Search form tabable if it's featured	
    if ($('#head-search').hasClass('featured-search')) {
        searchInput.removeAttr('tabindex aria-hidden');
        searchSubmit.removeAttr('tabindex aria-hidden');
        searchReset.removeAttr('tabindex aria-hidden');
        searchlabel.removeAttr('aria-hidden');
        $searchContainer.removeAttr('aria-hidden');
    } else {
        searchInput.attr({
            "tabindex": '-1',
            "aria-hidden": 'true'
        });
        searchSubmit.attr({
            "tabindex": '-1',
            "aria-hidden": 'true'
        });
        searchReset.attr({
            "tabindex": '-1',
            "aria-hidden": 'true'
        });
        searchlabel.attr({
            "aria-hidden": 'true'
        });
        $searchContainer.attr("aria-hidden", "true");

    }



    // Close search when close icon is clicked
    $('.close-search').on('click', removeSearchResults);

    // Helpers
    function addSearchResults() {
        $body.addClass("active-search");
        //$searchContainer.addClass('active');
        //$resultsContainer.addClass('visible');
        // close the the menu when we are search
        //$('#navigation').addClass('mobile-closed');
        // hide the ask group as well
        // $('.ask-group').addClass('fade-out');

        // fire a scroll event to help update headers if need be
        // $(window).scroll();

        // $.event.trigger('cagov.searchresults.show');
    }

    function removeSearchResults() {
        $body.removeClass("active-search");
        $searchText.val('');
        $searchContainer.removeClass('active').attr("aria-hidden", "true");
        $resultsContainer.removeClass('visible');
        $('.ask-group').removeClass('fade-out');

        if (!featuredsearch) {
            searchInput.attr({
                "tabindex": '-1',
                "aria-hidden": 'true'
            });
            searchSubmit.attr({
                "tabindex": '-1',
                "aria-hidden": 'true'
            });
            searchReset.attr({
                "tabindex": '-1',
                "aria-hidden": 'true'
            });
            searchlabel.attr({
                "aria-hidden": 'true'
            });
        }
        // fire a scroll event to help update headers if need be
        $(window).scroll();

        $.event.trigger('cagov.searchresults.hide');

        if (mobileView()) {
            $('html, body').animate({ scrollTop: 0 }, "slow");
        }
    }




    $('.toggle-search').on('click', function () {
        $('.search-container').toggleClass('active');
        var searchactive = $("#head-search").hasClass("active");
        if (searchactive) {
            $searchContainer.removeAttr('aria-hidden');
            searchInput.removeAttr('tabindex aria-hidden');
            searchSubmit.removeAttr('tabindex aria-hidden');
            searchReset.removeAttr('tabindex aria-hidden');
            searchlabel.removeAttr('aria-hidden');
            $searchText.trigger("focus").trigger('focus');
            $('html, body').animate({
                scrollTop: $("#head-search").offset().top
            }, 500);

        }
        else {
            searchInput.attr({
                "tabindex": '-1',
                "aria-hidden": 'true'
            });
            searchSubmit.attr({
                "tabindex": '-1',
                "aria-hidden": 'true'
            });
            searchReset.attr({
                "tabindex": '-1',
                "aria-hidden": 'true'
            });
            searchlabel.attr({
                "aria-hidden": 'true'
            });
            $searchContainer.attr("aria-hidden", "true");
        }
        if (!$('#navigation').hasClass('active')) {
            $('#navigation').addClass('mobile-closed');
        }
    });


    // on alert close event
    $.each(alertClose, function () {
        $(this).on("click", function () {
            searchTop();
        });

    });

});


//  search box top position if browser window is resized
$(window).on('resize', function () {
    searchTop();
});








function searchTop() {
    var searchlabel = $("#SearchInput");
    var $globalHeader = $('.global-header');
    var searchbox = $(".search-container:not(.featured-search)");
    var headerHeight = $globalHeader.innerHeight();
    var utility = $(".utility-header");
    var utilityHeight = utility.innerHeight();
    var alertBanner = $(".alert-banner");
    var alertClose = $(".alert-banner .close");
    var alertbannerHeight = 0;
    // taking into account multiple alert banners
    $.each(alertBanner, function () {
        alertbannerHeight += $(this).innerHeight() + 2;
    });
    // calulation search box top position
    var searchtop = headerHeight - utilityHeight - alertbannerHeight + 5;
    if (!mobileView()) {
        searchbox.css({
            'top': Math.max(searchtop, 87)
        });
    }
}

// Calculation search box top proprety on the scroll for the fixed nav
$(window).on('scroll', function () {
    var currentScrollTop = $(document).scrollTop();
    var scrollDistanceToMakeCompactHeader = 220;
   
    if (currentScrollTop >= scrollDistanceToMakeCompactHeader) {
        
        if (!mobileView()) {
            
               // setting timeout before calulating the search box top proprty othervise it can take into account transitional values.
            setTimeout(function () {
                var searchlabel = $("#SearchInput");
                var $globalHeader = $('.global-header');
                var searchbox = $(".search-container:not(.featured-search)");
                var headerHeight = $globalHeader.innerHeight();
                var utility = $(".utility-header");
                var utilityHeight = utility.innerHeight();
                var alertBanner = $(".alert-banner");
                var alertClose = $(".alert-banner .close");
                var alertbannerHeight = 0;
                // taking into account multiple alert banners
                $.each(alertBanner, function () {
                    alertbannerHeight += $(this).innerHeight() + 2;
                });
                // calulation search box top position
                var searchtopscroll = headerHeight - utilityHeight - alertbannerHeight - 7;
                searchbox.css({ 'top': Math.max(searchtopscroll, 60) });
            }, 400);

            

        }
    }
    else if (currentScrollTop <= scrollDistanceToMakeCompactHeader) {
        if (!mobileView()) {
            setTimeout(function () {
                searchTop();
            }, 400);
            
        }
    }
});



function mobileView() {
    return $('.global-header .mobile-controls').css('display') !== "none"; // mobile view uses arrow to show subnav instead of first touch
}
/* -----------------------------------------
   INIT THIRD PARTY PLUGINS - /source/js/cagov/plugins.js
----------------------------------------- */


$(document).ready(function () {
    // Tabs to accordion
    // https://github.com/openam/bootstrap-responsive-tabs
    fakewaffle.responsiveTabs(['xs', 'sm']);
    
    // https://github.com/jsliang/eqHeight.coffee
    // Generic EQ Heights for top level children
    // Example: Use on .group to effect columns
    $(".eqHeight").eqHeight();
});

/* -----------------------------------------
   GALLERY - /source/js/cagov/gallery.js
----------------------------------------- */
    
$(document).ready(function(){
	// Requires fancyBox v2.1.5
    // Enable lightbox functionality
    $('.gallery .item a, .carousel-gallery .item a, a.gallery-item').fancybox({groupAttr: "data-gallery"});
    
    //   EQ Heights for Gallery Items
    $(".gallery").eqHeight(".item");
    
    // Trick eqHeights into running as tabs are focused so image galleries in tabs get height applied.
    // eqHeight plugin would not run using normal selection methods. Triggering resize event to trick eqHeight to run on tab focus
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e){
        window.dispatchEvent(new Event('resize'));
    });
});
/* -----------------------------------------
   PROFILE BANNERS
----------------------------------------- */

$(document).ready(function(){
    // If using profile banners side by side in a .half this equal heights function will ensure they are the same height.
    $(".main-secondary").eqHeight(".profile-banner > .inner");
});
/* -----------------------------------------
   CAROUSEL INIT - /source/js/cagov/carousel.js
----------------------------------------- */

$(document).ready(function () {

    $(".carousel-video").initCAVideo();
    $('.carousel-content').each(initContent);

    // Owl Carousel https://github.com/OwlFonk/OwlCarousel2 Requires Owl Carousel
    // 2.0.3+ Banner Carousel Plugin
    (function ($) {
        $.fn.owlBannerCarousel = function (options) {
            var settings = $.extend({
                delay: 4000,
                smallSearch: true
            }, options);

            return this.each(function () {
                if (settings.smallSearch) {
                    $('.navigation-search').addClass('small-search');
                }

                var headerSlider = $('.header-slideshow-banner');
                headerSlider.addClass('enabled');

                // calculate top of screen on next repaint
                window.setTimeout(function () {
                    var MAXHEIGHT = 450;
                    var headerTop = headerSlider.offset().top;
                    var windowHeight = $(window).height();
                    var height = windowHeight - headerTop;
                    height = height > MAXHEIGHT
                        ? MAXHEIGHT
                        : height;
                    // fill up the remaining heaight of this device
                    headerSlider.css({ 'height': height });
                }, 0);

                var $this = $(this);

                // If browser is IE9 and below set transition speed to 0
                var transitionSpeed = !$('html').hasClass('oldie')
                    ? 250
                    : 0;

                // Initiate carousel
                $this.owlCarousel({
                    //responsiveRefreshRate: 0,
                    items: 1,
                    smartSpeed: transitionSpeed,
                    animateOut: 'fadeOut',
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: settings.delay,
                    autoplayHoverPause: false,
                    mouseDrag: false,
                    touchDrag: false,
                    pullDrag: false,
                    pagination: true,
                    dotsClass: 'banner-pager', dotClass: 'banner-control',
                    dotsContainer: false
                });

                // Add pause and play buttons
                var owlBannerControl = $('<div class="banner-play-pause"><div class="banner-control"><button class="play ca-gov-icon-carousel-play" aria-hidden="true"></button><button class="pause ca-gov-icon-carousel-pause" aria-hidden="true"></span></div></div>');
                $this.append(owlBannerControl);
                var playControl = owlBannerControl.find('.play').hide();
                var pauseControl = owlBannerControl.find('.pause');
                playControl.on('click', function () {
                    $(this).hide(); $(this).parent().removeClass('active');
                    pauseControl.show(); $this.trigger('play.owl.autoplay', [settings.delay]);
                    $this.owlCarousel('next'); // Manually play next since autoplay waits for delay
                });

                pauseControl.on('click', function () {
                    $(this).hide();
                    $(this).parent().addClass('active'); playControl.show();
                    $this.trigger('stop.owl.autoplay');
                });

                // Number the items in .banner-pager 
                var dots = $('.banner-pager .banner-control');
                dots.each(function () {
                    $(this).find('span').append($(this).index() + 1);
                });
            });
        };
    }(jQuery));

    // Banner Carousel Init
    $("body .carousel-banner").owlBannerCarousel();
    // Init with options: $(".banner-carousel").owlBannerCarousel({delay: 4000,
    // smallSearch:true});

    if ($.fn.owlCarousel) {
        // Media Carousel Init
        $(".carousel-media").owlCarousel({

            // all these callbacks are to make sure any js inside carousl items can refresh
            // themselves
            onResized: function () {
                window.setTimeout(function () {
                    $(window).trigger('resize');
                }, 0);
            },
            onDragged: function () {
                window.setTimeout(function () {
                    $(window).trigger('resize');
                }, 0);
            },
            onTranslated: function () {
                window.setTimeout(function () {
                    $(window).trigger('resize');
                }, 0);
            },
            responsive: true,
            margin: 10,
            nav: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                400: {
                    items: 2
                },
                700: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true
                }
            },
            navText: [
                '<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'
            ],
            dots: false
        });

        // Link Icon Carousel Init
        $(".carousel-link").owlCarousel({
            margin: 25,
            autoWidth: true,
            nav: true,
            navText: [
                '<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'
            ],
            dots: false
        });

        // Social Media Slider Init
        $(".carousel-slider").owlCarousel({
            items: 1,
            nav: true,
            navText: [
                '<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'
            ],
            dots: false
        });

        // Gallery Image Slider
        $(".carousel-gallery").owlCarousel({
            items: 1,
            nav: true,
            navText: [
                '<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'
            ],
            dots: false
        });

    }

    // Remove unnessesary role="button" from button
    $("button.banner-control").removeAttr("role");

});

function initContent() {
    var carousel = $(this);
    $(window).on("load", function () {
        carousel.owlCarousel({
            items: 1,
            autoHeight: true,
            loop: true,
            nav: true,
            navText: [
                '<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'
            ],
            dots: true,
            // all these callbacks are to make sure any js inside carousl items can refresh
            // themselves
            onResized: function () {
                window.setTimeout(function () {
                    $(window).trigger('resize');
                }, 0);
            },
            onDragged: function () {
                window.setTimeout(function () {
                    $(window).trigger('resize');
                }, 0);
            },
            onTranslated: function () {
                window.setTimeout(function () {
                    $(window).trigger('resize');
                }, 0);
            }
        });

        // Add text to the dots 
        var dot = $('.owl-dots .owl-dot');
        dot.each(function () {
            $(this).removeAttr("role");
            $(this).find('span').html("<span class='sr-only'>Change Slide</span>");
        });


        carousel.on('changed.owl.carousel', function (event) {
            setTimeout(function () {
                carousel.find('.owl-item.active .item video').each(function () {

                    $(this).get(0).play();
                });
            }, 10);

        });
    });
}

(function($) {

    $.fn.initCAVideo = function (bool) {


        // Iterate over each object in collection
        return this.each(function () {

            var carousel = $(this);
            var didSet = carousel.attr("data-loaded");

            if (didSet) {
                return;
            }
            carousel.attr("data-loaded", "true");
            // get first video
            var vidHref = carousel.find('.item a').first().attr('href') || "";
            var vidID = vidHref.split("?v=").pop();

            var mainIndex = 0;


            var length = carousel.find('.item').length;

            // Video  Slider
            carousel.owlCarousel({
                items: 1,
                loop: false,
                nav: true,
                lazyLoad: false,
                video: true,
                navText: [
                    '<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span></span><span class="sr-only">Previous</span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>'
                ],
                dots: false
            });

            carousel.on('translated.owl.carousel', function (event) {

                // get current video id
                vidID = carousel.find('.owl-item.active')
                    .attr('data-video').split(/\?v=|\/v\//).pop();
                setCurrentSubVideo();

                mainIndex = event.item.index;
                // show the item in view
                submenu.trigger('to.owl.carousel', [mainIndex, 300, true]);
            });


            //  create the proper video play icon for each video image preview
            carousel.find('.owl-video-play-icon').append($('<span class="ca-gov-icon-play" />'));

            // create the overlay for each video image preview
            carousel.find('.owl-video-tn').after($('<div />').addClass('item-overlay'));

            // the submenu lives as a sibling to the carousel.
            var submenu = $('<div></div>').insertAfter(carousel);
            submenu.addClass('carousel owl-carousel carousel-video-submenu');

            // create the sub menu for the videos
            var items = carousel.find('a.owl-video');
            items.each(function (index) {
                // get this slide and its video url
                var oldItem = $(this);
                var href = oldItem.attr('href');
                var theHTML = oldItem.find('span'); // Getting title span
                // attach the triggers for each thumbnail
                var item = $('<div/>').addClass('item-thumbnail');
                item.on('click', function () {
                    //  force the main carousel to jump to the requested video
                    carousel.trigger('to.owl.carousel', [
                        index % length,
                        300,
                        true
                    ]);

                    submenu.find('.watching').removeClass('watching');
                    $(this).parents('.owl-item').addClass('watching');

                    //  start playing immediately
                    carousel.find(".active .owl-video-play-icon").trigger("click");
                });

                // thumbnail related
                var regex = new RegExp('ab+c', 'i');
                var youtubeID = href.split(/\?v=|\/v\//).pop();
                var youtubeThumb = 'url(http://img.youtube.com/vi/' + youtubeID + '/0.jpg )';
                // var youtubeThumb = 'http://img.youtube.com/vi/' + youtubeID + '/0.jpg ';
                var thumbnail = $('<button />').css('background-image', youtubeThumb).addClass("videoThumb").append(theHTML); // Adding title span to the thumbnail

                // var thumbnail = $('<img />').attr('src', youtubeThumb);

                // overlay related
                var overlay = $('<div />').addClass('item-overlay');
                overlay.append($('<span class="ca-gov-icon-play" />'));

                // Append it into the DOM
                item.append(thumbnail).append(overlay);
                submenu.append(item);
            });

            submenu = carousel.next();

            submenu.on('initialized.owl.carousel', function () {
                setCurrentSubVideo();
            });

            // have owlCarousel init this submenu
            submenu.owlCarousel({
                items: 4,
                loop: false,
                nav: true,
                margin: 20,
                dots: false,
                navText: ['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span><span class="sr-only">Previous</span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span><span class="sr-only">Next</span>']
            });


            submenu.on('changed.owl.carousel', function () {
                setTimeout(setCurrentSubVideo, 50);
            });

            function setCurrentSubVideo() {
                // remove old watched item
                submenu.find('.watching').removeClass('watching');

                // submenu.find('img[src*="' + vidID + '"]').parents('.owl-item').addClass('watching');
                submenu.find('button[style*="' + vidID + '"]').parents('.owl-item').addClass('watching');


            }

        });
    };
}(jQuery));

// EQ Heights for Job Wells
$(document).ready(function() {
   $(".job-detail").eqHeight(".well");
});
// EQ Heights for Map & Photo
$(document).ready(function() {
   $(".location.full").eqHeight(".photo, .map");
});
/* -----------------------------------------
   SOCIAL SHARER
   Rewritten using jquery for v5 template
   /source/js/cagov/socialsharer.js
----------------------------------------- */

$(document).ready(function () {
    var docTitle = sanitize(document.title);
    var docURL = window.location.href;
    docURL = encodeURIComponent(sanitize(docURL));

    // TODO: flickr, linkedin, instagram, pinterest, vimeo, youtube

    $(".ca-gov-icon-share-facebook").on('click', function(e) {
        PopupCentered('https://www.facebook.com/sharer/sharer.php?u=' + docURL + '&display=popup', 'socialsharer', '658', '450');
    });

    $(".ca-gov-icon-share-twitter").on('click', function(e) {
        PopupCentered('https://twitter.com/intent/tweet?text=' + docTitle + '&url=' + docURL, 'socialsharer', '568', '531');
    });

    $(".ca-gov-icon-share-googleplus").on('click', function(e) {
        PopupCentered('https://plus.google.com/share?url=' + docURL, 'socialsharer', '550', '552');
    });
    $(".ca-gov-icon-share-email").attr('href',  "mailto:?subject=" + docTitle + "&body=%0a" + docURL + "%0a%0a");

function sanitize(sText) {
  // Remove html tags from a string
  var re = /<\S[^>]*>/g;
  sText = sText.replace(re, " ");
  return sText;
}


// Display a popup window centered over the parent window. Works in all browsers
// except Opera with multiple displays. Opera displays the popup on the primary
// display only.
function PopupCentered(url, popupName, popupWidth, popupHeight) {
  // screenX/Y for IE9+ FF Op Chrome, screenLeft/Top for IE7 IE8 Chrome, left/top for old FF
  var parentLeft = window.screenX ? window.screenX : window.screenLeft ? window.screenLeft : screen.left ? screen.left : 0;
  var parentTop = window.screenY ? window.screenY : window.screenTop ? window.screenTop : screen.top ? screen.top : 0;

  var parentWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var parentHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var popupLeft = parentWidth / 2 - popupWidth / 2 + parentLeft;
  var popupTop = parentHeight / 2 - popupHeight / 2 + parentTop;

  window.open(url, popupName, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', left=' + popupLeft + ', top=' + popupTop);
        }
    });
/* -----------------------------------------
   BREADCRUMBS - /source/js/cagov/breadcrumb.js
----------------------------------------- */

// This function populates the breadcrumb section of the page.
// Adapted from http://webstandards.ca.gov/tools/design-enhancements/breadcrumbs/ to use jQuery

function breadcrumbs()
{
	if ( $(".breadcrumb.dynamic")[0] ) { // Make sure browser supports getElementById and breadcrumb_dynamic exists
		var wrkLocation = location.href;
		var wrkLength = wrkLocation.indexOf("#");  // Find the begining of any anchor reference
		if (wrkLength !== -1) {
			wrkLocation = wrkLocation.substr(0,wrkLength);  // Remove the anchor reference
		}	
		var wrkLength = wrkLocation.indexOf("?");  // Find the begining of the query string
		if (wrkLength !== -1) {
			wrkLocation = wrkLocation.substr(0,wrkLength);  // Remove the query string
		}

		wrkLocation = unescape(wrkLocation);

		//var re = /<\S[^>]*>/g; // Remove html tags from a string
		var re = /<.*/g; // remove < and anything after
		wrkLocation = wrkLocation.replace(re, "");

		var arrURL=wrkLocation.split("/"); // Array containing the current location, split at the slashes
		var output='<li><a href="/">Home</a></li>'; // The string which will be output to the browser, starts with a link to the home page
		var path = '/'; // Link for the crumbs

		// If last item is blank or index.* or default.*, remove it
		if (arrURL[arrURL.length-1] === '' || arrURL[arrURL.length-1].match(/^index\.|^default\./i) ) {
			arrURL.length--;
		}

		if (arrURL.length > 3) {
			for (counter = 3; counter < arrURL.length-1; counter++) {  // Loop to display the links
				path += arrURL[counter] + '/';  // always end links to folder with '/' 
				output += '<li><a href="' + path + '">' + arrURL[counter].replace(/(_|-)/g,' ') + '</a></li>';
			}

			// Adds a class of active to the current page
			output += '<li class="active">' + arrURL[arrURL.length-1].replace(/(_|-)/g,' ').replace(/\.\w{3,5}$/,'') + '</li>';
		}

		$(".breadcrumb.dynamic").html(output);  // Display the breadcrumbs
	}
}

$(document).ready(function(){
    breadcrumbs();
});

// End of breadcrumbs javascript

$(document).ready(function () {
    // Create the needed js event listeners, set up classes, etc
    $('.service-group').each(initServiceGroup);
});

function initServiceGroup() {

    // Define variables
    var $service = $(this);
    var $items = $service.find('.service-tile');


    $service.find('.service-tile-empty').on('click', function (e) {
        e.stopPropagation();
        var url = $(this).attr("data-url");
        window.location = url;
    });

    $(window).on('resize', function () {
        var newWidth = $(window).width();
        if (newWidth !== cachedWidth) {
            //DO RESIZE HERE
            if (__$currentRow) {
                shrinkAndRemove(__$currentRow);
            }
            initTiles($service, $items);

            cachedWidth = newWidth;
        }
    });

    // Mobile scrolling fires a resize event
    // http://stackoverflow.com/questions/9361968/
    // http://stackoverflow.com/questions/17328742
    var cachedWidth = $(window).width();

    // need to align all of our tiles from the get go
    $service.eqHeight(".service-tile");

    // When we ajax in more content, we have
    // to make sure our heights are still correct, and we have to
    $service.on('more.new', function () {
        $service.eqHeight(".service-tile");
        $(window).trigger('resize');
        $items = $service.find('.service-tile');
        // enable interactions
        initTiles($service, $items);
    });

    // make sure any icons are set to the proper size
    $items.find('.icon-fallback').each(setIconFallback);

    // enable interactions
    initTiles($service, $items);
    setUpEvents($service);

}

// Our global which holds the currently opened row
var __$currentRow = null;

function initTiles($service, $items) {
    //  start off with everything closed
    $items.each(function () {
        setCloseClasses($(this));
    });
    // make sure any icons are set to the proper size
    $items.find('.icon-fallback').each(setIconFallback);
    // renable the tabs and accordian plugins
    $items.find('.collapse').collapse();

    // remove any inline height set from accordian view
    $service.find('.service-tile-full .container').css({ 'height': '' });
}

function shrinkAndRemove($rowEl) {
    // Explicitly set our height so css transitions can work their magic
    // $rowEl.css('height', $rowEl.height() + 'px');
    // we wait for the next redraw so

    $rowEl.animate({
        'height': '0px'
    }, 300, 'linear', function () {
        $rowEl.empty().remove();
    });

}

function setUpEvents($service) {

    function closeTile(e) {
        var $item = $(this);
        e.preventDefault();

        // remove the row
        var $rowEl = findRow($item);
        shrinkAndRemove($rowEl);

        // close the tile
        setCloseClasses($item);

    }

    function openTile(e) {
        var $item = $(this);
        e.preventDefault();

        // remove teasers for all others but keep this one
        // update their event handlers
        $service.find('.service-tile').not($item).each(function () {
            var $el = $(this);
            setCloseClasses($el);
        });


        // set this elements state to open
        $item.attr('data-state', 'open');

        // secure the element for holding the content and then insert it
        var $rowEl = findRow($item);

        checkIfOldAndSet($rowEl);

        insertContent($rowEl, $item);

        setCloseButtonEvent($item, closeTile);

    }


    $service.on('click', '.service-tile', function (e) {
        e.preventDefault();
        if ($(this).hasClass("touched")) {
            $(this).removeClass('touched');
            return;
        }

        var state = $(this).attr('data-state');
        switch (state) {
            case 'closed':
            case 'info':
                openTile.call(this, e);
                // this focues on close button after expandable panel is open, so user can tab into the pannel (it's for accessibility purposes)
                $("button.close").trigger("focus");
                break;
            case 'open':
                closeTile.call(this, e);
                break;
            default:
        }
    });


    // add the "tile-focus" class when got focus
    $('.service-tile').on("focusin", function () {
        $(this).addClass("tile-focus");

    });


    // Remove the "tile-focus" class when lost focus
    $('.service-tile').on("focusout", function () {
        $(this).removeClass("tile-focus");

    });


    // Make sure it works on 'enter' key (has same behavior as click event)
    $service.on('keyup', '.service-tile', function (e) {
        if (e.which === 13 && $(".service-tile").hasClass("tile-focus")) {
            $(this).trigger("click");
        }
    });


}

// Sets the icons to be big and still fit within the service-tile
function setIconFallback() {
    var width = $(this).width();
    $(this).css({
        'font-size': width * 0.6
    });
}


// helper which does as it's name implies
function setCloseClasses($item) {
    $item.attr('data-state', 'closed').removeClass('show-info');
}

function setCloseButtonEvent($item, func) {
    var id = $item.data('tile-id');
    var $content = $item.parent().find('.service-tile-panel[data-tile-id="' + id + '"]').first();
    $content.find('.close.btn').on('click', function (e) {
        func.call($item, e);
    });
}


// * TODO: +Docs
// * TODO: Expand height using calculated content height

function insertContent($rowEl, $item) {
    if (!$rowEl) {
        return;
    }
    var id = $item.data('tile-id');

    var $content = $item.parent().find('.service-tile-panel[data-tile-id="' + id + '"]').first();

    $rowEl.css('height', $rowEl.height() + "px");
    $rowEl.empty();
    $content.clone().appendTo($rowEl);
    $rowEl.animate({
        'height': $content.height() + 'px'
    }, 300, 'linear', function () {
        $rowEl.css('height', '');
        scrollToEl($item);
    });

}

/**
 * TODO: +Docs
 * @param  {[type]} $item [description]
 * @return {[type]}       [description]
 */
function findRow($item) {

    // look at the following siblings and get the first element which is
    // not on the same row
    var $nextItem = $item.nextAll('.service-tile, .service-tile-full').filter(function () {
        return $(this).offset().top !== $item.offset().top;
    }).first();

    // We have already created and inserted the required expanded element
    if ($nextItem.is('.service-tile-full')) {
        // already created the row
        return $nextItem;
    }

    // We need to insert a expanded tile here
    if ($nextItem.is('.service-tile')) {
        // we insert the required element and then return after its inserted
        return createExpandedRow($nextItem, 'before');
    }
    if ($item.nextAll('.service-tile').length) {
        return createExpandedRow($item.nextAll('.service-tile').last(), 'after');
    }
    // at this point the only other possiblity is a new row after all siblings
    return createExpandedRow($item, 'after');

}

function checkIfOldAndSet($rowEl) {
    // remove old rows if needed
    if (__$currentRow && !__$currentRow.is($rowEl)) {
        shrinkAndRemove(__$currentRow);
    }
    // set and insert our content
    __$currentRow = $rowEl;

}

/**
 * TODO: +Docs
 * @param  {[type]} $item  [description]
 * @param  {[type]} method [description]
 * @return {[type]}        [description]
 */
function createExpandedRow($item, method) {
    var newEl = $('<div>').addClass('service-tile-full');
    $item[method](newEl);
    // HACK: trigger on focus so transitions work
    newEl.trigger("focus");
    newEl.addClass('is-open');
    return newEl;
}

/* -----------------------------------------
   HELPERS
----------------------------------------- */


// * TODO: +Docs
// * @param  {[type]} $el [description]
// * @return {[type]}     [description]

function scrollToEl($el) {
    if (!$el || !$el.length) {
        return;
    }
    var scrollVal = $el.offset().top;
    $('html, body').animate({
        scrollTop: scrollVal
    }, 450);
}

$(document).ready(function () {
    $('.number-counter').each(initCountUp);
});

function initCountUp() {
    // our main component
    var counter = $(this);

    // get our values the user has configured
    var endCount = counter.text().trim();

    // prepare the dom
    counter.text('0');
    counter.css({'visibility': 'visible'});



    // countUp lib options
    var options = {
        "useEasing": true,
        "useGrouping": false,
        "separator": "",
        "decimal": ".",
        "prefix": ""
    };


    // handle if user has set decimal precision
    var decimals = 0;
    if (endCount.indexOf('.') !== -1) {
        decimals = endCount.split('.')[1].length;
    }

    // handle if user has set a comma
    if (endCount.indexOf(',') !== -1) {
        options.useGrouping = true;
        options.separator = ',';
        endCount = parseFloat(endCount.replace(/,/g, ''));
    }

    // target, startVal, endVal, decimals, duration, options
    var demo = new CountUp(counter.get(0), 0, endCount, decimals, 3.5, options);

    var waypoint = new Waypoint({
        element: counter.get(0),
        // start when it appears at the bottom
        offset: '100%',
        handler: function () {
            demo.start();
        }
    });
}


// polyfill for ie8
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

$(function () {
    // the half circle dashboard things built with the Donut functions
    $('.stats-highlight').each(initStats);
    $('.plotly-chart').each(initPlotly);
});

// TODO: fallback image for non-js,
// Description and details for screen readers
function initPlotly(d3, Plotly) {
    var container = $(this);

    if ($('html').hasClass('ie8') || $('html').hasClass('ie7')) {
        //  TODO: Unsupport graphs fall back to image
        if (!container.has('img').length) {
            container.html('<span class="plotly-chart--loading">Chart image not found</span>');
        }
        return;
    }

    // no supplied image fallback show loading indicator
    if (!container.has('img').length) {
        container.html('<span class="plotly-chart--loading">Loading</span>');
    }

    var libs = [
        'd3', 'Plotly',
        // for ie9 support
        'Float32Array' in window
            ? ''
            : 'typedarray'
    ];

    requirejs(libs, function (d3, Plotly) {
        var WIDTH_IN_PERCENT_OF_PARENT = 100,
            HEIGHT_IN_PERCENT_OF_PARENT = 100;
        container.empty();

        function getHeight() {
            var tempHeight = container.attr('data-fixed-height')
                ? container.attr('data-fixed-height') + "px"
                : HEIGHT_IN_PERCENT_OF_PARENT + "%";

            return tempHeight;
        }
        var gd3 = d3.select(container.get(0)).style({
            width: WIDTH_IN_PERCENT_OF_PARENT + '%',
            'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

            height: getHeight(),
            'margin-top': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%'
        });

        var gd = gd3.node();
        var title = container.attr("data-title");
        var xLabel = container.attr('data-x-label');
        var yLabel = container.attr('data-y-label');

        getConfig(d3, container, function (config) {
            Plotly.plot(gd, config, {
                title: title,
                font: {
                    family: "Source Sans Pro, sans-serif",
                    size: 20,
                    color: '#333'
                },
                xaxis: {
                    title: xLabel,
                    titlefont: {
                        family: "Source Sans Pro, sans-serif",
                        size: 18,
                        color: "#333"
                    }
                },
                yaxis: {
                    title: yLabel,
                    titlefont: {
                        family: "Source Sans Pro, sans-serif",
                        size: 18,
                        color: "#333"
                    }
                }
                // not setting the background color atm, keep default
                // paper_bgcolor: container.css("background-color")
            });

            // This does not work atm,
            // following this issue for updates
            // https://github.com/plotly/plotly.js/issues/102

            // container.on('mousemove', function (data) {
            //
            //     // make things bigger
            //     var hovertext = container.find(".hovertext");
            //     var trans = hovertext.attr('transform')
            //     // hovertext.attr('transform', trans + ' scale(1.3)');
            //
            //     // give more padding around text by setting stroke to the
            //     // same color as the fill
            //     var path = hovertext.find('path');
            //     var color = path.css('fill');
            //     console.log(color);
            //     path.css({'stroke-width': 7, 'stroke': color})
            // });
        });

        $(window).on('resize', function () {
            var gd3 = d3.select(container.get(0)).style({height: getHeight()});
            Plotly.Plots.on("resize", gd);
        });

    });
}

var defaultBar = [
    {
        "type": "bar",
        "x": [],
        "y": [],
        "marker": {
            "color": "#046B99",
            "line": {
                "width": 0.5
            }
        }
    }
];

var defaultLine = [
    {
        "x": [],
        "y": [],
        "mode": "lines",
        "name": "Solid",
        "line": {
            "color": "#046B99",
            "dash": "solid",
            "width": 4
        }
    }
];

var defaultPie = [
    {
        "values": [],
        "labels": [],
        "hoverinfo": "label+percent",
        "type": "pie",
        "marker": {
            "colors": [
                "#E1F2F7",
                "#9FDBF1",
                "#02BFE7",
                "#35BBAA",
                "#72CE6F",
                "#815AB4",
                "#D34A37",
                "#F27E31",
                "#FFCA4A"
            ]
        }
    }
];

function getConfigSkeleton(type) {
    switch (type) {
        case "bar":
            return defaultBar;
        case "pie":
            return defaultPie;
        case "line":
            return defaultLine;
        default:
            return [];
    }
}

function getConfig(d3, container, func) {
    var sourceUrl = container.attr('data-datasource-url');
    var configUrl = container.attr('data-config-url');
    var chartType = container.attr('data-type');
    var color = container.attr('data-color');

    if (configUrl) {
        $.getJSON(configUrl, func);
        return;
    }

    var config = getConfigSkeleton(chartType);

    var xValues = container.attr('data-x-values');
    var yValues = container.attr('data-y-values');

    if (xValues) {
        xValues = xValues.split('|').map(function (d) {
            if(isNaN(parseFloat(d))) {
              return d;
            }
            return + d;
        });
    } else {
        xValues = [];
    }

    if (yValues) {
        yValues = yValues.split('|');
    } else {
        yValues = [];
    }
    switch (chartType) {
        case "line":
        case "bar":
            config[0].x = xValues;
            config[0].y = yValues.map(function (d) {
                return + d;
            });
            break;

        case "pie":
            config[0].values = xValues;
            config[0].labels = yValues;
            break;
        default:

    }

    if (!color) {
        color = '#046B99';
    }

    // specifiying the color
    switch (chartType) {
        case "line":
            config[0].line.color = d3.rgb(color).toString();
            break;
        case "bar":
            config[0].marker.color = d3.rgb(color).toString();
            break;

        case "pie":
            var colorA = d3.hsl(color);
            var colorB = d3.hsl((colorA.h - 4 * xValues.length) % 360, colorA.s, colorA.l);

            var colorScale = d3.scale.linear().domain(xValues).interpolate(d3.interpolateHsl).range([colorA.toString(), colorB.toString()]);
            var colors = xValues.map(function (d) {
                return colorScale(d);
            });
            config[0].marker.colors = colors;

            break;
        default:

    }

    func(config);

}

function initStats() {
    var container = $(this);
    var libs = ['d3'];
    if ($('html').hasClass('ie8')|| $('html').hasClass('ie7') ) {
        return;
        //  TODO: Unsupport graphs fall back to something else
    }
    requirejs(libs, function (d3) {

        var shouldFlip = container.attr('data-direction') === 'right'
            ? true
            : false;

        var data = parseFloat(container.attr('data-percentfill'));
        var chart = container.find('.half-gauge-chart');
        var color = container.attr('data-colorfill');
        var showHalfTick = container.find('.small-goal-text').length !== 0;

        var config = {
            bindTo: chart.get(0),
            background: true,
            maxValue: 100,
            startAngle: -90,
            endAngle: 90,
            thickness: 5,
            color: color,
            showHalfTick: showHalfTick,
            size: {
                width: chart.get(0).clientWidth,
                height: chart.get(0).clientWidth
            },
            flipStart: shouldFlip
        };
        var Donut = initHalfDonut(d3);

        var donutChart = new Donut(config);

        donutChart.load({ data: 0 });

        function sizeText() {
            var width = chart.get(0).clientWidth;
            var height = chart.get(0).clientHeight;
            var detail = container.find('.small-goal-text');
            var lineHeight = parseFloat(container.find('.small-goal-text').css('line-height'));

            container.find('.info').css({
                top: -width / 4
            });
            detail.css({
                'font-size': width / 18
            });
            var detailHeight = detail.height();

            detail.css({
                top: width < 400
                    ? detailHeight * 2 + 20
                    : detailHeight * 1.5
            });
            container.find('.big-number').css({
                'font-size': width / 6
            });
            container.find('.percent-detail').css({
                'font-size': width / 10
            });
        }

        sizeText();

        $(window).on('resize', function () {

            window.setTimeout(function () {
                config.size = {
                    width: chart.width(),
                    height: chart.width()
                };
                config.data = data;
                donutChart = new Donut(config);
                donutChart.load({ data: data });
                sizeText();
            }, 10);

        });

        var waypoint = new Waypoint({
            element: chart.get(0),
            // start when it appears at the bottom
            offset: '100%',
            handler: function () {
                donutChart.load({ data: data });
            }
        });
    });

}

/**
 * Custom Half Donut plugin
 * TODO: code clean up, and refactor
 */

function initHalfDonut(d3) {

    var defaults = {
        className: 'donut',
        size: {
            width: 200,
            height: 200
        },
        margin: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        },
        startAngle: 0,
        endAngle: 360,
        thickness: null,
        offset: 0,
        sort: null,
        maxValue: null,
        background: false,
        flipStart: false,
        color: 'rgb(49, 130, 189)',
        accessor: function (d, i) {
            return d;
        }
    };

    var Donut = function (config) {
        // need an extend fn
        this.config = extend({}, defaults, config);

        // setup radius
        this.config.radius = getRadius(this);

        // setup accessor
        this.accessor = this.config.accessor;

        // convenience method to map data to start/end angles
        this.pie = d3.layout.pie().sort(this.config.sort).startAngle(degToRad(this.config.startAngle)).endAngle(degToRad(this.config.endAngle));

        if (this.accessor && typeof this.accessor === 'function') {
            this.pie.value(this.accessor);
        }

        var thickness = getThickness(this);

        // setup the arc
        // divide offset by 4 because the middle of the stroke aligns to the edge
        // so it's 1/2 on the outside, 1/2 inside
        this.arc = d3.svg.arc().innerRadius(this.config.radius - thickness - this.config.offset / 4).outerRadius(this.config.radius + this.config.offset / 4);

        bindSvgToDom(this);
    };

    Donut.prototype.load = function (newOpts) {
        // store data on object
        var data = newOpts && newOpts.data !== null
            ? newOpts.data
            : this.data.map(this.accessor);

        // convert to array if not already
        data = Array.isArray(data)
            ? data
            : [data];

        if (this.config.maxValue) {
            this.data = this.pieMaxValue(data);
        } else {
            this.data = this.pie(data);
        }

        // drawPaths
        drawPaths(this);
    };

    Donut.prototype.pieMaxValue = function (data) {
        var accessor = this.accessor,
            self = this;

        // Compute the numeric values for each data element.
        var values = data.map(function (d, i) {
            return + accessor.call(self, d, i);
        });

        var sum = d3.sum(values),
            max = d3.max([this.config.maxValue, sum]),
            diff = max - sum;

        // Compute the start angle.
        var a = +degToRad(this.config.startAngle);

        // Compute the angular scale factor: from value to radians.
        // include the diff because it will help create angles with a maxValue in mind
        var k = (degToRad(this.config.endAngle) - a) / (sum + diff);

        var index = d3.range(data.length);

        // Compute the arcs!
        // They are stored in the original data's order.
        var arcs = [];
        index.forEach(function (i) {
            var d;
            arcs[i] = {
                data: data[i],
                value: d = values[i],
                startAngle: a,
                endAngle: a += d * k
            };
        });
        return arcs;
    };

    function getThickness(donut) {
        return donut.config.thickness || donut.config.radius;
    }

    /*
     * Setup the svg in the DOM and cache a ref to it
     */
    function bindSvgToDom(donut) {
        var width = getWidth(donut),
            height = getHeight(donut);
        var transString = 'translate(' + width / 2 + ',' + height / 2 + ')' + (donut.config.flipStart === true
            ? ' scale(-1,1)'
            : '');

        var tempSVG = d3.select(donut.config.bindTo).select('svg');

        if (tempSVG.empty()) {
            donut.svg = d3.select(donut.config.bindTo).append('svg').attr('class', donut.config.classNames).attr('width', width).attr('height', height / 2).append('g').attr('transform', transString);
        } else {
            donut.svg = d3.select(donut.config.bindTo).select('svg').attr('class', donut.config.classNames).attr('width', width).attr('height', height / 2).select('g').attr('transform', transString);
            donut.svg.selectAll('*').remove();
        }

        if (donut.config.background) {
            donut.svg.append('path').attr('class', 'donut-background').transition().duration(0).attrTween('d', function (d, i) {
                var fullArc = {
                    value: 0,
                    startAngle: degToRad(donut.config.startAngle),
                    endAngle: degToRad(donut.config.endAngle)
                };
                return arcTween.call(this, fullArc, i, donut);
            });
        }

        if (donut.config.showHalfTick) {
            donut.svg.append('line').attr('class', 'donut-halfmark').attr('stroke', 'gray').attr('stroke-width', 1).attr({
                'x1': 0,
                'x2': 0,
                'y1': -height / 2 + 10,
                'y2': -height / 2 + 35
            });

        }
    }

    function drawPaths(donut) {
        var paths = donut.svg.selectAll('path.donut-section').data(donut.data);

        // enter new data
        paths.enter().append('path').attr('class', function (d, i) {
            return 'donut-section value-' + i;
        }).attr('fill', donut.config.color).attr('stroke', '#fff').attr('stroke-width', donut.config.offset / 2);

        // transition existing paths
        donut.svg.selectAll('path.donut-section').transition().duration(2000).attrTween('d', function (d, i) {
            return arcTween.call(this, d, i, donut);
        });

        // exit old data
        paths.exit().transition().duration(100).attrTween('d', function (d, i) {
            return removeArcTween.call(this, d, i, donut);
        }).remove();

    }

    // Store the currently-displayed angles in this._current.
    // Then, interpolate from this._current to the new angles.
    function arcTween(a, i, donut) {
        var prevSiblingArc,
            startAngle,
            newArc,
            interpolate;

        if (!this._current) {
            prevSiblingArc = donut.svg.selectAll('path')[0][i - 1]; // donut.data[i - 1];

            // start at the end of the previous one or start of entire donut
            startAngle = prevSiblingArc && prevSiblingArc._current
                ? prevSiblingArc._current.endAngle
                : degToRad(donut.config.startAngle);

            newArc = {
                startAngle: startAngle,
                endAngle: startAngle,
                value: 0
            };
        }

        interpolate = d3.interpolate(this._current || newArc, a);

        // cache a copy of data to each path
        this._current = interpolate(0);
        return function (t) {
            return donut.arc(interpolate(t));
        };
    }

    function removeArcTween(a, i, donut) {
        var emptyArc = {
                startAngle: degToRad(donut.config.endAngle),
                endAngle: degToRad(donut.config.endAngle),
                value: 0
            },
            i = d3.interpolate(a, emptyArc);
        return function (t) {
            return donut.arc(i(t));
        };
    }

    function getRadius(donut) {
        var width = getWidth(donut) - donut.config.margin.left - donut.config.margin.right,
            height = getHeight(donut) - donut.config.margin.top - donut.config.margin.bottom;

        return Math.min(width, height) / 2;
    }

    function getWidth(donut) {
        return donut.config.size && donut.config.size.width;
    }

    function getHeight(donut) {
        return donut.config.size && donut.config.size.height;
    }

    function degToRad(degree) {
        return degree * (Math.PI / 180);
    }

    function radToDeg(radian) {
        return radian * (180 / Math.PI);
    }

    /*
     * Simple extend fn like jQuery
     *
     * Usage: extend({ name: 'Default' }, { name: 'Matt' });
     * Result: { name: 'Matt' }
     */
    function extend() {
        for (var i = 1; i < arguments.length; i++) {
            for (var prop in arguments[i]) {
                if (arguments[i].hasOwnProperty(prop)) {
                    arguments[0][prop] = arguments[i][prop];
                }
            }
        }
        return arguments[0];
    }

    return Donut;

}

/* -----------------------------------------
   PARALLAX EFFECT
   /source/js/cagov/parallax.js
----------------------------------------- */

(function($) {

    $.fn.parallax = function (options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed: 0.3
        }, options);

        // Iterate over each object in collection
        return this.each(function () {

            // Save a reference to the element
            var $this = $(this);

            // Init proper heights
            var bg_height = $(window).outerHeight() * settings.speed + $this.innerHeight();
            $this.css({ 'height': bg_height });

            // Set up Scroll Handler
            $(window).scroll(function () {
                var element_top = $this.offset().top,
                    window_top = $(window).scrollTop(),
                    y_pos = window_top + $(window).innerHeight() - element_top * settings.speed,
                    main_position;

                main_position = 'translate(0, ' + y_pos + 'px)';

                $this.css({
                    '-webkit-transform': main_position,
                    '-moz-transform': main_position,
                    '-ms-transform': main_position,
                    'transform': main_position
                });
            });
            // $(window).scroll();

        });
    };
}(jQuery));

$('.parallax-bg').parallax();

/**
 *
 */

$(document).ready(function () {
    $("[class*='animate-']").each(initAnimations);
});


function initAnimations() {
  var $this = $(this);
    var waypoint = new Waypoint({
        element: $this.get(0),
        // start when it appears at the bottom
        offset: '95%',
        handler: function () {
            // get the class and animation name out of it
            var animation = $this.attr("class").match(/animate-(\w+)\b/i)[1];
            var toRemove = 'animate-' + animation;
            var toAdd = 'animated ' + animation;

            // update classes
            $this.removeClass('animate-' + animation);
            $this.addClass('animated ' + animation);

            // stop firing again
            this.disable();
        }
    });
}

$(document).ready(function () {
    // apply classes programmatically after user interaction for toggle-more
    //elements
    $('.toggle-more').toggleMore();


    $('[data-ajax-target]').each(initLoad);

    var $viewport = $('html, body');

    $(".explore-invite").on('click', function (e) {
        e.preventDefault();
        var extraHeight = $('header.fixed').height();
         $viewport.animate({
            scrollTop: $(".main-primary").offset().top - extraHeight
        }, 2000);

        // Stop the animation if the user scrolls
        $(document).one("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function(e){
            if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"  || e.type === 'touchstart'){
                 $viewport.stop();
            }
        });
    });


});

(function($) {

    $.fn.toggleMore = function (bool) {


        // * Helper for setting required attrs and class

        function expanded($this, bool) {
            if (bool) {
                $this.addClass('active').attr('aria-expanded', 'true');
            } else {
                $this.removeClass('active').attr('aria-expanded', 'false');
            }
        }

        // Iterate over each object in collection
        return this.each(function () {

            // Save a reference to the element

            var $this = $(this);
            if (bool !== undefined) {
                bool ? expanded($this, true) : expanded($this, false);

            } else {
                // init classes and state
                $this.hasClass('active')
                    ? expanded($this, true)
                    : expanded($this, false);
            }


            $this.off("click.cagovmore");
            $this.on("click.cagovmore", function () {
                $this.hasClass('active')
                    ? expanded($this, false)
                    : expanded($this, true);
            });

        });
    };
}(jQuery));




// TODO: readd this back in
function makeBlur($el) {
    $el.Vague({intensity: 6}).trigger("blur");
}


function initLoad() {
    var $moreBtn = $(this);
    var htmlURL = $moreBtn.attr('data-ajax-target');
    var elTarget = $moreBtn.attr('data-container-target');
    var moreContents = $moreBtn.find('.more-content');
    var isTest = $moreBtn.attr('data-ajax-test');
    makeBlur(moreContents);
    function loadMore(url) {
        $(moreContents).load(url, function (response, status, xhr) {
          var linkHeader = xhr.getResponseHeader("Link");
          if(isTest) {
            return;
          }
          if (status === "error" || linkHeader === null) {
              $moreBtn.animate({
                  'opacity': 0,
                  'height': 0
              }, 300, 'linear');
          } else {
              htmlURL = linkHeader.match(/<(.*?)>/)[1];
          }
      });
    }


    loadMore(htmlURL);

    $moreBtn.on('click', function (e) {
        e.preventDefault();
        $(moreContents).children().hide().appendTo(elTarget).fadeIn(1000);
        $(elTarget).trigger('more.new');
        loadMore(htmlURL);
    });
}

/* -----------------------------------------
   HIGH CONTRAST MODES
   /source/js/cagov/high-contrast.js
----------------------------------------- */

// TODO: Settings stored in cookies

$(document).ready(function () {

    //
    // HIGH CONTRAST MODE
    // --------------------------------------------------

    var enableHighContrastButton = $('.enableHighContrastMode');
    var disableHighContrastButton = $('.disableHighContrastMode');
    var theHTML = $('html');

    var isHighContrast = localStorage.getItem('high-contrast');

    function onContrast() {
        enableHighContrastButton.addClass('active');
        disableHighContrastButton.removeClass('active');
        theHTML.addClass('high-contrast');
        localStorage.setItem('high-contrast', 'true');
    }

    function OffContrast() {
        disableHighContrastButton.addClass('active');
        enableHighContrastButton.removeClass('active');
        theHTML.removeClass('high-contrast');
        // disable
        localStorage.removeItem('high-contrast');
    }


    if (isHighContrast) {
        onContrast();
    }

    // Enable High Contrast
    enableHighContrastButton.on('click', onContrast);

    // Disable High Contrast
    disableHighContrastButton.on('click', OffContrast);

    //
    // TEXT ONLY MODE
    // --------------------------------------------------

    var enableTextOnlyButton = $('.enableTextOnlyMode');
    var disableTextOnlyButton = $('.disableTextOnlyMode');

    // Enable Text Only
    enableTextOnlyButton.on("click", function () {
        enableTextOnlyButton.addClass('active');
        disableTextOnlyButton.removeClass('active');
        $('link[rel~="stylesheet"]').prop('disabled', true);
    });

    // Disable Text Only
    disableTextOnlyButton.on("click", function () {
        disableTextOnlyButton.addClass('active');
        enableTextOnlyButton.removeClass('active');
        $('link[rel~="stylesheet"]').prop('disabled', false);
    });

    //
    // INCREASE FONT SIZE
    // --------------------------------------------------  TODO: Evaluate the

    //accessibility duplication vs using inbuilt browser
    //controls

    var incFontSize = $('.increaseTextSize');
    var decFontSize = $('.decreaseTextSize');
    var resetFontSize = $('.resetTextSize');

    // in rems's
    var MAXFONTSIZE = 1.5;
    var MINFONTSIZE = 1;
    var STEPVALUE = .1;

    // Read in previous settings and convert to number
    var fontSize = +localStorage.getItem('font-size');
    if (fontSize) {
        $('html').css("font-size", fontSize + 'rem');
    } else {
        fontSize = 1;
        $('html').css("font-size", fontSize + 'rem');
    }

    // init button styles for fonts
    updateFontBtns(fontSize);

    // utility functions
    function updateFont(f) {
        var updatedSize = Math.min(MAXFONTSIZE, Math.max(f, MINFONTSIZE));
        localStorage.setItem('font-size', updatedSize);
        $('html').css("font-size", updatedSize + "rem");
        updateFontBtns(updatedSize);
        return updatedSize;
    }

    function updateFontBtns(f) {
        if (f >= MAXFONTSIZE) {
            // incFontSize.addClass('disabled')
            // decFontSize.removeClass('disabled');
        } else if (f <= MINFONTSIZE) {
            // decFontSize.addClass('disabled')
            // incFontSize.removeClass('disabled');
        } else {
            // incFontSize.removeClass('disabled');
            // decFontSize.removeClass('disabled')
        }
    }

    incFontSize.on('click', function () {
        fontSize += STEPVALUE;
        fontSize = updateFont(fontSize);
    });

    decFontSize.on('click', function () {
        fontSize -= STEPVALUE;
        fontSize = updateFont(fontSize);
    });

    resetFontSize.on('click', function () {
        fontSize = updateFont(1);
    });
});

/* -----------------------------------------
   ASK GROUP
   /source/js/cagov/ask-group.js
----------------------------------------- */
// Extra override to force the ask bar to maintain its tab index because the bootstrap accesibility plugin
// adds tab index -1 to collapse components. We arent using the collapse plugin in this manner, so we force the 
// collapsable items to always be tabbable.
$('.ask-button').attr('tabindex', 0);
// Close Ask menu when clicked anwyere outside
$('body').on('click', function (e) {
try {
      $('.ask-panel').collapse('hide');
} catch (e) {
  // ask panel is wonky
}

});

$(document).ready(function () {
    // removing unsupported aria attribute to fix aria validator errors
    $("#askGroup").removeAttr("aria-multiselectable");
});
/* -----------------------------------------
   Tabs -- some fixing to bootstap 3 tabs 
   and backward compatibility
----------------------------------------- */
$(document).ready(function () {
    // adding active class to a tag if aria selected is true 
    var activeTab = $(".nav-tabs > li > a[aria-selected='true']");
    activeTab.addClass("active");

    // Just to change class active in the parent li element (backward compatibility)
    $(".nav-tabs > li > a").on("click", function () {

        var tabID = $(this).attr("id");
        var tabcontentID = $("[aria-labelledby=" + tabID + "]");
        var tabGroup = $(this).closest(".tab-group");
        var tabsPane = tabGroup.find(".tab-pane");
        tabsPane.attr("tabindex", "-1").attr("aria-hidden", "true");
        if ($(this).attr('aria-selected') === "false") {
            $(".nav-tabs > li").removeClass("active");
            $(this).parent("li").addClass("active");
            tabcontentID.removeAttr("tabindex aria-hidden");
        }
        else {
            $(".nav-tabs > li").removeClass("active");
            $(this).parent("li").addClass("active");
        }
    });

    // takes care of tabindexes and aria-hidden attributes when using arrow keys to navigate
    $(".nav-tabs > li > a").on('keydown', function (e) {
        var tabID = $(this).attr("id");
        var tabcontentID = $("[aria-labelledby=" + tabID + "]");
        var tabGroup = $(this).closest(".tab-group");
        var tabsPane = tabGroup.find(".tab-pane");
        var tabsPaneFirst = tabGroup.find(".tab-pane:first-child");
        var tabsPaneLast = tabGroup.find(".tab-pane:last-child");
        var parentLI = $(this).parent("li");
        

        if (e.keyCode === 37) {
            tabcontentID.prev().removeAttr("tabindex aria-hidden");
            tabcontentID.attr("tabindex", "-1").attr("aria-hidden", "true");

            if (parentLI.is(':first-child')) {
                tabsPaneLast.removeAttr("tabindex aria-hidden");
            }

        } else if (e.keyCode === 38) {
            tabcontentID.prev().removeAttr("tabindex aria-hidden");
            tabcontentID.attr("tabindex", "-1").attr("aria-hidden", "true");

            if (parentLI.is(':first-child')) {
                tabsPaneLast.removeAttr("tabindex aria-hidden");
            }

        } else if (e.keyCode === 39) {
            tabcontentID.next().removeAttr("tabindex aria-hidden");
            tabcontentID.attr("tabindex", "-1").attr("aria-hidden", "true");

            if (parentLI.is(':last-child')) {
                tabsPaneFirst.removeAttr("tabindex aria-hidden");
            }
        } else if (e.keyCode === 40) {
            tabcontentID.next().removeAttr("tabindex aria-hidden");
            tabcontentID.attr("tabindex", "-1").attr("aria-hidden", "true");
            if (parentLI.is(':last-child')) {
                tabsPaneFirst.removeAttr("tabindex aria-hidden");
            }

        }
    });


    /* Tabblale tabs */
    var tabs = $('ul.nav-tabs').find('.nav-link');
    tabs.attr("tabindex", 0); // make accordion tabable


});
/* -----------------------------------------
   Utility Header
----------------------------------------- */
$(document).ready(function () {
    // removing role attribute to fix aria validator errors
    $(".site-settings").removeAttr("role");
    $(".settings-links button[data-target='#siteSettings']").removeAttr("role aria-selected");
    $(".site-settings button.close").removeAttr("role aria-selected");
});
>>>>>>> 5a69cb8ed3c71343ce7e4e5a7f7bb6860408715d
