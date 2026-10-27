var Td=Object.defineProperty;var bd=(i,e,t)=>e in i?Td(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Be=(i,e,t)=>bd(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var kc="1.3.27";function wh(i,e,t){return Math.max(i,Math.min(e,t))}function wd(i,e,t){return(1-t)*i+t*e}function Ad(i,e,t,n){return wd(i,e,1-Math.exp(-t*n))}function Rd(i,e){return(i%e+e)%e}var Cd=class{constructor(){Be(this,"isRunning",!1);Be(this,"value",0);Be(this,"from",0);Be(this,"to",0);Be(this,"currentTime",0);Be(this,"lerp");Be(this,"duration");Be(this,"easing");Be(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=wh(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Ad(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Pd(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Dd=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Be(this,"width",0);Be(this,"height",0);Be(this,"scrollHeight",0);Be(this,"scrollWidth",0);Be(this,"debouncedResize");Be(this,"wrapperResizeObserver");Be(this,"contentResizeObserver");Be(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Be(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Be(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=Pd(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ah=class{constructor(){Be(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,s=t.length;r<s;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Ld=100/6,Hi={passive:!1};function Hc(i,e){return i===1?Ld:i===2?e:1}var Id=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Be(this,"touchStart",{x:0,y:0});Be(this,"lastDelta",{x:0,y:0});Be(this,"window",{width:0,height:0});Be(this,"emitter",new Ah);Be(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Be(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Be(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Be(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=Hc(n,this.window.width),s=Hc(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Be(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Hi),this.element.addEventListener("touchstart",this.onTouchStart,Hi),this.element.addEventListener("touchmove",this.onTouchMove,Hi),this.element.addEventListener("touchend",this.onTouchEnd,Hi)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Hi),this.element.removeEventListener("touchstart",this.onTouchStart,Hi),this.element.removeEventListener("touchmove",this.onTouchMove,Hi),this.element.removeEventListener("touchend",this.onTouchEnd,Hi)}};const Vc=i=>Math.min(1,1.001-2**(-10*i));var Ud=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:_=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:T=!0,autoRaf:M=!1,anchors:S=!1,autoToggle:P=!1,allowNestedScroll:I=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:D=R,stopInertiaOnNavigate:E=!1,respectReducedMotion:b=!0}={}){Be(this,"_isScrolling",!1);Be(this,"_isStopped",!1);Be(this,"_isLocked",!1);Be(this,"_preventNextNativeScrollEvent",!1);Be(this,"_resetVelocityTimeout",null);Be(this,"_rafId",null);Be(this,"_isDraggingSelection",!1);Be(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Be(this,"isTouching");Be(this,"isIos");Be(this,"time",0);Be(this,"userData",{});Be(this,"lastVelocity",0);Be(this,"velocity",0);Be(this,"direction",0);Be(this,"options");Be(this,"targetScroll");Be(this,"animatedScroll");Be(this,"animate",new Cd);Be(this,"emitter",new Ah);Be(this,"dimensions");Be(this,"virtualScroll");Be(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Be(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Be(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Be(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Be(this,"onPointerDown",i=>{i.button===1&&this.reset()});Be(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,m,p,T,M;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((m=v.hasAttribute)==null?void 0:m.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((T=v.hasAttribute)==null?void 0:T.call(v,"data-lenis-prevent-touch"))||s&&((M=v.hasAttribute)==null?void 0:M.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Be(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Be(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=kc,window.lenis||(window.lenis={}),window.lenis.version=kc,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=Vc:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:_,wheelMultiplier:v,autoResize:g,prevent:m,virtualScroll:p,overscroll:T,autoRaf:M,anchors:S,autoToggle:P,allowNestedScroll:I,naiveDimensions:D,stopInertiaOnNavigate:E,respectReducedMotion:b},this.dimensions=new Dd(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Id(t,{touchMultiplier:_,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=i,_=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let v=null;if(typeof d=="string"?(v=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),v||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(v=d),v){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();_-=this.isHorizontal?S.left:S.top}const g=v.getBoundingClientRect(),m=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),T=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(T.scrollPaddingLeft):Number.parseFloat(T.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(M)?0:M)}}if(typeof d=="number"){if(d+=_,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=d-this.animatedScroll;v>this.limit/2?d-=this.limit:v<-this.limit/2&&(d+=this.limit)}}else d=wh(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=Vc:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,o,a,l,c,u,f,d,_,v;if(n-(r.time??0)>2e3){r.time=Date.now();const I=window.getComputedStyle(i);if(r.computedStyle=I,s=["auto","overlay","scroll"].includes(I.overflowX),o=["auto","overlay","scroll"].includes(I.overflowY),c=["auto"].includes(I.overscrollBehaviorX),u=["auto"].includes(I.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=i.scrollWidth,d=i.scrollHeight,_=i.clientWidth,v=i.clientHeight,a=f>_,l=d>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=d,r.clientWidth=_,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,d=r.scrollHeight,_=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,T,M,S,P;if(g==="horizontal")m=Math.round(i.scrollLeft),p=f-_,T=e,M=s,S=a,P=c;else if(g==="vertical")m=Math.round(i.scrollTop),p=d-v,T=t,M=o,S=l,P=u;else return!1;return!P&&(m>=p||m<=0)?!0:(T>0?m<p:m>0)&&M&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Rd(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function Ti(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Rh(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ws={duration:.5,overwrite:!1,delay:0},lc,$t,At,Gn=1e8,Mt=1/Gn,ol=Math.PI*2,Nd=ol/4,Fd=0,Ch=Math.sqrt,Od=Math.cos,zd=Math.sin,Yt=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},Ui=function(e){return typeof e=="number"},cc=function(e){return typeof e>"u"},hi=function(e){return typeof e=="object"},_n=function(e){return e!==!1},uc=function(){return typeof window<"u"},ao=function(e){return Nt(e)||Yt(e)},Ph=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,Bd=/random\([^)]+\)/g,kd=/,\s*/g,Gc=/(?:-?\.?\d|\.)+/gi,Dh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ma=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lh=/[+-]=-?[.\d]+/,Hd=/[^,'"\[\]\s]+/gi,Vd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,ai,al,hc,Nn={},Zo={},Ih,Uh=function(e){return(Zo=ls(e,Nn))&&yn},fc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xs=function(e,t){return!t&&console.warn(e)},Nh=function(e,t){return e&&(Nn[e]=t)&&Zo&&(Zo[e]=t)||Nn},qs=function(){return 0},Gd={suppressEvents:!0,isStart:!0,kill:!1},Oo={suppressEvents:!0,kill:!1},Wd={suppressEvents:!0},dc={},nr=[],ll={},Fh,wn={},_a={},Wc=30,zo=[],pc="",mc=function(e){var t=e[0],n,r;if(hi(t)||Nt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=zo.length;r--&&!zo[r].targetTest(t););n=zo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new sf(e[r],n)))||e.splice(r,1);return e},Rr=function(e){return e._gsap||mc(Wn(e))[0]._gsap},Oh=function(e,t,n){return(n=e[t])&&Nt(n)?e[t]():cc(n)&&e.getAttribute&&e.getAttribute(t)||n},gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},ns=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Xd=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},$o=function(){var e=nr.length,t=nr.slice(0),n,r;for(ll={},nr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},_c=function(e){return!!(e._initted||e._startAt||e.add)},zh=function(e,t,n,r){nr.length&&!$t&&$o(),e.render(t,n,!!($t&&t<0&&_c(e))),nr.length&&!$t&&$o()},Bh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hd).length<2?t:Yt(e)?e.trim():e},kh=function(e){return e},Fn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qd=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ls=function(e,t){for(var n in t)e[n]=t[n];return e},Xc=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=hi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ko=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Fs=function(e){var t=e.parent||Lt,n=e.keyframes?qd(sn(e.keyframes)):Fn;if(_n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Yd=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Hh=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},oa=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Zd=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},cl=function(e,t,n,r){return e._startAt&&($t?e._startAt.revert(Oo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},$d=function i(e){return!e||e._ts&&i(e.parent)},qc=function(e){return e._repeat?cs(e._tTime,e=e.duration()+e._rDelay)*e:0},cs=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},jo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},aa=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},la=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),aa(e),n._dirty||Cr(n,e)),e},Vh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=jo(e.rawTime(),t),(!t._dur||to(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),Cr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},ci=function(e,t,n,r){return t.parent&&sr(t),t._start=Dt((Ui(n)?n:n||e!==Lt?kn(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hh(e,t,"_first","_last",e._sort?"_start":0),ul(t)||(e._recent=t),r||Vh(e,t),e._ts<0&&la(e,e._tTime),e},Gh=function(e,t){return(Nn.ScrollTrigger||fc("scrollTrigger",t))&&Nn.ScrollTrigger.create(t,e)},Wh=function(e,t,n,r,s){if(vc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!$t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Fh!==An.frame)return nr.push(e),e._lazy=[s,r],1},Kd=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},ul=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jd=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Kd(e)&&!(!e._initted&&ul(e))||(e._ts<0||e._dp._ts<0)&&!ul(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=to(0,e._tDur,t),u=cs(l,a),e._yoyo&&u&1&&(o=1-o),u!==cs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||$t||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&Wh(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&cl(e,t,n,!0),e._onUpdate&&!n&&Rn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Rn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&sr(e,1),!n&&!$t&&(Rn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Qd=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},us=function(e,t,n,r){var s=e._repeat,o=Dt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Dt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&la(e,e._tTime=e._tDur*a),e.parent&&aa(e),n||Cr(e.parent,e),e},Yc=function(e){return e instanceof fn?Cr(e):us(e,e._dur)},Jd={_start:0,endTime:qs,totalDuration:qs},kn=function i(e,t,n){var r=e.labels,s=e._recent||Jd,o=e.duration()>=Gn?s.endTime(!1):e._dur,a,l,c;return Yt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(sn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Os=function(e,t,n){var r=Ui(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=_n(l.vars.inherit)&&l.parent;o.immediateRender=_n(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new zt(t[0],o,t[s+1])},cr=function(e,t){return e||e===0?t(e):t},to=function(e,t,n){return n<e?e:n>t?t:n},rn=function(e,t){return!Yt(e)||!(t=Vd.exec(e))?"":t[1]},ep=function(e,t,n){return cr(n,function(r){return to(e,t,r)})},hl=[].slice,Xh=function(e,t){return e&&hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&hi(e[0]))&&!e.nodeType&&e!==ai},tp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Yt(r)&&!t||Xh(r,1)?(s=n).push.apply(s,Wn(r)):n.push(r)})||n},Wn=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Yt(e)&&!n&&(al||!hs())?hl.call((t||hc).querySelectorAll(e),0):sn(e)?tp(e,n):Xh(e)?hl.call(e,0):e?[e]:[]},fl=function(e){return e=Wn(e)[0]||Xs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Wn(t,n.querySelectorAll?n:n===e?Xs("Invalid scope")||hc.createElement("div"):e)}},qh=function(e){return e.sort(function(){return .5-Math.random()})},Yh=function(e){if(Nt(e))return e;var t=hi(e)?e:{each:e},n=Pr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Yt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,_,v){var g=(v||t).length,m=o[g],p,T,M,S,P,I,R,D,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,Gn])[1],!E){for(R=-Gn;R<(R=v[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(m=o[g]=[],p=l?Math.min(E,g)*u-.5:r%E,T=E===Gn?0:l?g*f/E-.5:r/E|0,R=0,D=Gn,I=0;I<g;I++)M=I%E-p,S=T-(I/E|0),m[I]=P=c?Math.abs(c==="y"?S:M):Ch(M*M+S*S),P>R&&(R=P),P<D&&(D=P);r==="random"&&qh(m),m.max=R-D,m.min=D,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(E>g?g-1:c?c==="y"?g/E:E:Math.max(E,g/E))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=rn(t.amount||t.each)||0,n=n&&g<0?pp(n):n}return g=(m[d]-m.min)/m.max||0,Dt(m.b+(n?n(g):g)*m.v)+m.u}},dl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Dt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ui(n)?0:rn(n))}},Zh=function(e,t){var n=sn(e),r,s;return!n&&hi(e)&&(r=n=e.radius||Gn,e.values?(e=Wn(e.values),(s=!Ui(e[0]))&&(r*=r)):e=dl(e.increment)),cr(t,n?Nt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Gn,u=0,f=e.length,d,_;f--;)s?(d=e[f].x-a,_=e[f].y-l,d=d*d+_*_):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Ui(o)?u:u+rn(o)}:dl(e))},$h=function(e,t,n,r){return cr(sn(e)?!t:n===!0?!!(n=0):!r,function(){return sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},np=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},ip=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n))}},rp=function(e,t,n){return jh(e,t,0,1,n)},Kh=function(e,t,n){return cr(n,function(r){return e[~~t(r)]})},sp=function i(e,t,n){var r=t-e;return sn(e)?Kh(e,i(0,e.length),t):cr(n,function(s){return(r+(s-e)%r)%r+e})},op=function i(e,t,n){var r=t-e,s=r*2;return sn(e)?Kh(e,i(0,e.length-1),t):cr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ys=function(e){return e.replace(Bd,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(kd);return $h(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},jh=function(e,t,n,r,s){var o=t-e,a=r-n;return cr(s,function(l){return n+((l-e)/o*a||0)})},ap=function i(e,t,n,r){var s=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!s){var o=Yt(e),a={},l,c,u,f,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(sn(e)&&!sn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(v){v*=f;var g=Math.min(d,~~v);return u[g](v-g)},n=t}else r||(e=ls(sn(e)?[]:{},e));if(!u){for(l in t)gc.call(a,e,l,"get",t[l]);s=function(v){return yc(v,a)||(o?e.p:e)}}}return cr(n,s)},Zc=function(e,t,n){var r=e.labels,s=Gn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Rn=function(e,t,n){var r=e.vars,s=r[t],o=At,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&nr.length&&$o(),a&&(At=a),u=l?s.apply(c,l):s.call(c),At=o,u},Ls=function(e){return sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$t),e.progress()<1&&Rn(e,"onInterrupt"),e},Jr,Qh=[],Jh=function(e){if(e)if(e=!e.name&&e.default||e,uc()||e.headless){var t=e.name,n=Nt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:qs,render:yc,add:gc,kill:Tp,modifier:Ep,rawVars:0},o={targetTest:0,get:0,getSetter:Sc,aliases:{},register:0};if(hs(),e!==r){if(wn[t])return;Fn(r,Fn(Ko(e,s),o)),ls(r.prototype,ls(s,Ko(e,o))),wn[r.prop=t]=r,e.targetTest&&(zo.push(r),dc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Nh(t,r),e.register&&e.register(yn,r,vn)}else Qh.push(e)},yt=255,Is={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},ga=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},ef=function(e,t,n){var r=e?Ui(e)?[e>>16,e>>8&yt,e&yt]:0:Is.black,s,o,a,l,c,u,f,d,_,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Is[e])r=Is[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&yt,r&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Gc),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=ga(l+1/3,s,o),r[1]=ga(l,s,o),r[2]=ga(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Dh),n&&r.length<4&&(r[3]=1),r}else r=e.match(Gc)||Is.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/yt,o=r[1]/yt,a=r[2]/yt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(_=f-d,c=u>.5?_/(2-f-d):_/(f+d),l=f===s?(o-a)/_+(o<a?6:0):f===o?(a-s)/_+2:(s-o)/_+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},tf=function(e){var t=[],n=[],r=-1;return e.split(ir).forEach(function(s){var o=s.match(Qr)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},$c=function(e,t,n){var r="",s=(e+r).match(ir),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=ef(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=tf(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ir,"1").split(Qr),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ir),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},ir=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Is)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),lp=/hsl[a]?\(/,nf=function(e){var t=e.join(" "),n;if(ir.lastIndex=0,ir.test(t))return n=lp.test(t),e[1]=$c(e[1],n),e[0]=$c(e[0],n,tf(e[1])),!0},Zs,An=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,d,_,v=function g(m){var p=i()-r,T=m===!0,M,S,P,I;if((p>e||p<0)&&(n+=p-t),r+=p,P=r-n,M=P-o,(M>0||T)&&(I=++f.frame,d=P-f.time*1e3,f.time=P=P/1e3,o+=M+(M>=s?4:s-M),S=1),T||(l=c(g)),S)for(_=0;_<a.length;_++)a[_](P,d,I,m)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Ih&&(!al&&uc()&&(ai=al=window,hc=ai.document||{},Nn.gsap=yn,(ai.gsapVersions||(ai.gsapVersions=[])).push(yn.version),Uh(Zo||ai.GreenSockGlobals||!ai.gsap&&ai||{}),Qh.forEach(Jh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Zs=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Zs=0,c=qs},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,T){var M=p?function(S,P,I,R){m(S,P,I,R),f.remove(M)}:m;return f.remove(m),a[T?"unshift":"push"](M),hs(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&_>=p&&_--},_listeners:a},f})(),hs=function(){return!Zs&&An.wake()},ft={},cp=/^[\d.\-M][\d.\-,\s]/,up=/["']/g,hp=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(up,"").trim():+c,r=l.substr(a+1).trim();return t},fp=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},dp=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hp(t[1])]:fp(e).split(",").map(Bh)):ft._CE&&cp.test(e)?ft._CE("",e):n},pp=function(e){return function(t){return 1-e(1-t)}},Pr=function(e,t){return e&&(Nt(e)?e:ft[e]||dp(e))||t},Ur=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return gn(e,function(a){ft[a]=Nn[a]=s,ft[o=a.toLowerCase()]=n;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},rf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},va=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/ol*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*zd((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:rf(a);return s=ol/s,l.config=function(c,u){return i(e,c,u)},l},xa=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:rf(n);return r.config=function(s){return i(e,s)},r};gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ur(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Ur("Elastic",va("in"),va("out"),va());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Ur("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ur("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Ur("Circ",function(i){return-(Ch(1-i*i)-1)});Ur("Sine",function(i){return i===1?1:-Od(i*Nd)+1});Ur("Back",xa("in"),xa("out"),xa());ft.SteppedEase=ft.steps=Nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*to(0,o,a)|0)+s)*n}}};Ws.ease=ft["quad.out"];gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return pc+=i+","+i+"Params,"});var sf=function(e,t){this.id=Fd++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Oh,this.set=t?t.getSetter:Sc},$s=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,us(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),Zs||An.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(hs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(la(this,n),!s._dp||s.parent||Vh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zh(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+qc(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+qc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?cs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?jo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(to(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),aa(this),Zd(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ci(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(_n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jo(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Wd);var r=$t;return $t=n,_c(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$t=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Yc(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(kn(this,n),_n(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,_n(r)),this._dur||(this._zTime=-Mt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Nt(n)?n:kh,l=function(){var u=r.then;r.then=null,s&&s(),Nt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ls(this)},i})();Fn($s.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var fn=(function(i){Rh(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=_n(n.sortChildren),Lt&&ci(n.parent||Lt,Ti(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Gh(Ti(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Os(0,arguments,this),this},t.from=function(r,s,o){return Os(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Os(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Fs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(r,s,kn(this,o),1),this},t.call=function(r,s,o){return ci(this,zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new zt(r,o,kn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Fs(o).immediateRender=_n(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Fs(a).immediateRender=_n(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Dt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,_,v,g,m,p,T,M,S,P,I,R;if(this!==Lt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,S=this._start,M=this._ts,p=!M,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Dt(u%m),u===l?(g=this._repeat,d=c):(P=Dt(u/m),g=~~P,g&&g===P&&(d=c,g--),d>c&&(d=c)),P=cs(this._tTime,m),!a&&this._tTime&&P!==g&&this._tTime-P*m-this._dur<=0&&(P=g),I&&g&1&&(d=c-d,R=1),g!==P&&!this._lock){var D=I&&P&1,E=D===(I&&g&1);if(g<P&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(R?0:Dt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Rn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,P=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=Qd(this,Dt(a),Dt(d)),T&&(u-=d-(d=T._start))),this._tTime=u,this._time=d,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!P&&(Rn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(_=this._first;_;){if(v=_._next,(_._act||d>=_._start)&&_._ts&&T!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(d-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(d-_._start)*_._ts,s,o),d!==this._time||!this._ts&&!p){T=0,v&&(u+=this._zTime=-Mt);break}}_=v}else{_=this._last;for(var b=r<0?r:d;_;){if(v=_._prev,(_._act||b<=_._end)&&_._ts&&T!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(b-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(b-_._start)*_._ts,s,o||$t&&_c(_)),d!==this._time||!this._ts&&!p){T=0,v&&(u+=this._zTime=b?-Mt:Mt);break}}_=v}}if(T&&!s&&(this.pause(),T.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=S,aa(this),this.render(r,s,o);this._onUpdate&&!s&&Rn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&sr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Rn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ui(s)||(s=kn(this,s,r)),!(r instanceof $s)){if(sn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Yt(r))return this.addLabel(r,s);if(Nt(r))r=zt.delayedCall(0,r);else return this}return this!==r?ci(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Yt(r)?this.removeLabel(r):Nt(r)?this.killTweensOf(r):(r.parent===this&&oa(this,r),r===this._recent&&(this._recent=this._last),Cr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(An.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=kn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=zt.delayedCall(0,s||qs,o);return a.data="isPause",this._hasPause=1,ci(this,a,kn(this,r))},t.removePause=function(r){var s=this._first;for(r=kn(this,r);s;)s._start===r&&s.data==="isPause"&&sr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ji!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wn(r),l=this._first,c=Ui(s),u;l;)l instanceof zt?Xd(l._targets,a)&&(c?(!Ji||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=kn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,_,v=zt.to(o,Fn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!_){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==m&&us(v,m,0,1).render(v._time,!0,!0),_=1}u&&u.apply(v,f||[])}},s));return d?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Fn({startAt:{time:kn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Zc(this,kn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Zc(this,kn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Dt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Cr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Cr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Gn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ci(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Dt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;us(o,o===Lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Lt._ts&&(zh(Lt,jo(r,Lt)),Fh=An.frame),An.frame>=Wc){Wc+=In.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&In.autoSleep&&An._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||An.sleep()}}},e})($s);Fn(fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var mp=function(e,t,n,r,s,o,a){var l=new vn(this._pt,e,t,0,1,hf,null,s),c=0,u=0,f,d,_,v,g,m,p,T;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Ys(r)),o&&(T=[n,r],o(T,e,t),n=T[0],r=T[1]),d=n.match(ma)||[];f=ma.exec(r);)v=f[0],g=r.substring(c,f.index),_?_=(_+1)%5:g.substr(-5)==="rgba("&&(_=1),v!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:v.charAt(1)==="="?ns(m,v)-m:parseFloat(v)-m,m:_&&_<4?Math.round:0},c=ma.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Lh.test(r)||p)&&(l.e=0),this._pt=l,l},gc=function(e,t,n,r,s,o,a,l,c,u){Nt(r)&&(r=r(s||0,e,o));var f=e[t],d=n!=="get"?n:Nt(f)?c?e[t.indexOf("set")||!Nt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,_=Nt(f)?c?Sp:cf:xc,v;if(Yt(r)&&(~r.indexOf("random(")&&(r=Ys(r)),r.charAt(1)==="="&&(v=ns(d,r)+(rn(d)||0),(v||v===0)&&(r=v))),!u||d!==r||pl)return!isNaN(d*r)&&r!==""?(v=new vn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?Mp:uf,0,_),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&fc(t,r),mp.call(this,e,t,d,r,_,l||In.stringFilter,c))},_p=function(e,t,n,r,s){if(Nt(e)&&(e=zs(e,s,t,n,r)),!hi(e)||e.style&&e.nodeType||sn(e)||Ph(e))return Yt(e)?zs(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=zs(e[a],s,t,n,r);return o},of=function(e,t,n,r,s,o){var a,l,c,u;if(wn[e]&&(a=new wn[e]).init(s,a.rawVars?t[e]:_p(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new vn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Jr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ji,pl,vc=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,_=r.autoRevert,v=e._dur,g=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!lc,S=e.timeline,P=r.easeReverse||f,I,R,D,E,b,N,H,B,Y,J,X,$,G;if(S&&(!d||!s)&&(s="none"),e._ease=Pr(s,Ws.ease),e._rEase=P&&(Pr(P)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(B=m[0]?Rr(m[0]).harness:0,$=B&&r[B.prop],I=Ko(r,dc),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!_?g.render(-1,!0):g.revert(u&&v?Oo:Gd),g._lazy=0),o){if(sr(e._startAt=zt.set(m,Fn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&_n(l),startAt:null,delay:0,onUpdate:c&&function(){return Rn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t||!a&&!_)&&e._startAt.revert(Oo),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),D=Fn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&_n(l),immediateRender:a,stagger:0,parent:p},I),$&&(D[B.prop]=$),sr(e._startAt=zt.set(m,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t?e._startAt.revert(Oo):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&_n(l)||l&&!v,R=0;R<m.length;R++){if(b=m[R],H=b._gsap||mc(m)[R]._gsap,e._ptLookup[R]=J={},ll[H.id]&&nr.length&&$o(),X=T===m?R:T.indexOf(b),B&&(Y=new B).init(b,$||I,e,X,T)!==!1&&(e._pt=E=new vn(e._pt,b,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(fe){J[fe]=E}),Y.priority&&(N=1)),!B||$)for(D in I)wn[D]&&(Y=of(D,I,e,X,b,T))?Y.priority&&(N=1):J[D]=E=gc.call(e,b,D,"get",I[D],X,T,0,r.stringFilter);e._op&&e._op[R]&&e.kill(b,e._op[R]),M&&e._pt&&(Ji=e,Lt.killTweensOf(b,J,e.globalTime(t)),G=!e.parent,Ji=0),e._pt&&l&&(ll[H.id]=1)}N&&ff(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&S.render(Gn,!0,!0)},gp=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,_;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,_=e._targets.length;_--;){if(u=d[_][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return pl=1,e.vars[t]="+=0",vc(e,a),pl=0,l?Xs(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(_=c.length;_--;)f=c[_],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ft(n)+rn(f.e)),f.b&&(f.b=u.s+rn(f.b))},vp=function(e,t){var n=e[0]?Rr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=ls({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},xp=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(sn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},zs=function(e,t,n,r,s){return Nt(e)?e.call(t,n,r,s):Yt(e)&&~e.indexOf("random(")?Ys(e):e},af=pc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",lf={};gn(af+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return lf[i]=1});var zt=(function(i){Rh(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Fs(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,_=l.overwrite,v=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=r.parent||Lt,T=(sn(n)||Ph(n)?Ui(n[0]):"length"in r)?[n]:Wn(n),M,S,P,I,R,D,E,b;if(a._targets=T.length?mc(T):Xs("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=_,v||d||ao(c)||ao(u)){r=a.vars;var N=r.easeReverse||r.yoyoEase;if(M=a.timeline=new fn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:T}),M.kill(),M.parent=M._dp=Ti(a),M._start=0,d||ao(c)||ao(u)){if(I=T.length,E=d&&Yh(d),hi(d))for(R in d)~af.indexOf(R)&&(b||(b={}),b[R]=d[R]);for(S=0;S<I;S++)P=Ko(r,lf),P.stagger=0,N&&(P.easeReverse=N),b&&ls(P,b),D=T[S],P.duration=+zs(c,Ti(a),S,D,T),P.delay=(+zs(u,Ti(a),S,D,T)||0)-a._delay,!d&&I===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),M.to(D,P,E?E(S,D,T):0),M._ease=ft.none;M.duration()?c=u=0:a.timeline=0}else if(v){Fs(Fn(M.vars.defaults,{ease:"none"})),M._ease=Pr(v.ease||r.ease||"none");var H=0,B,Y,J;if(sn(v))v.forEach(function(X){return M.to(T,X,">")}),M.duration();else{P={};for(R in v)R==="ease"||R==="easeEach"||xp(R,v[R],P,v.easeEach);for(R in P)for(B=P[R].sort(function(X,$){return X.t-$.t}),H=0,S=0;S<B.length;S++)Y=B[S],J={ease:Y.e,duration:(Y.t-(S?B[S-1].t:0))/100*c},J[R]=Y.v,M.to(T,J,H),H+=J.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return _===!0&&!lc&&(Ji=Ti(a),Lt.killTweensOf(T),Ji=0),ci(p,Ti(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!v&&a._start===Dt(p._time)&&_n(f)&&$d(Ti(a))&&p.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-u)||0)),m&&Gh(Ti(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Mt&&!u?l:r<Mt?0:r,d,_,v,g,m,p,T,M;if(!c)jd(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(d=Dt(f%g),f===l?(v=this._repeat,d=c):(m=Dt(f/g),v=~~m,v&&v===m?(d=c,v--):d>c&&(d=c)),p=this._yoyo&&v&1,p&&(d=c-d),m=cs(this._tTime,g),d===a&&!o&&this._initted&&v===m)return this._tTime=f,this;v!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Dt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(Wh(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var P=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=P?(S?-1:1)/P:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=T=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=T=this._ease(d/c);if(this._from&&(this.ratio=T=1-T),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Rn(this,"onStart"),this._tTime!==f))return this;for(_=this._pt;_;)_.r(T,_.d),_=_._next;M&&M.render(r<0?r:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&cl(this,r,s,o),Rn(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!s&&this.parent&&Rn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&cl(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&sr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Rn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Zs||An.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||vc(this,c),u=this._ease(c/this._dur),gp(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(la(this,0),this.parent||Hh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ls(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$t),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ji&&Ji.vars.overwrite!==!0)._first||Ls(this),this.parent&&o!==this.timeline.totalDuration()&&us(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wn(r):a,c=this._ptLookup,u=this._pt,f,d,_,v,g,m,p;if((!s||s==="all")&&Yd(a,l))return s==="all"&&(this._pt=0),Ls(this);for(f=this._op=this._op||[],s!=="all"&&(Yt(s)&&(g={},gn(s,function(T){return g[T]=1}),s=g),s=vp(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,v=d,_={}):(_=f[p]=f[p]||{},v=s);for(g in v)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&oa(this,m,"_pt"),delete d[g]),_!=="all"&&(_[g]=1)}return this._initted&&!this._pt&&u&&Ls(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Os(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Os(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Lt.killTweensOf(r,s,o)},e})($s);Fn(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});gn("staggerTo,staggerFrom,staggerFromTo",function(i){zt[i]=function(){var e=new fn,t=hl.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var xc=function(e,t,n){return e[t]=n},cf=function(e,t,n){return e[t](n)},Sp=function(e,t,n,r){return e[t](r.fp,n)},yp=function(e,t,n){return e.setAttribute(t,n)},Sc=function(e,t){return Nt(e[t])?cf:cc(e[t])&&e.setAttribute?yp:xc},uf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Mp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hf=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},yc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ep=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Tp=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?oa(this,t,"_pt"):t.dep||(n=1),t=r;return!n},bp=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},ff=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},vn=(function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||uf,this.d=l||this,this.set=c||xc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=bp,this.m=n,this.mt=s,this.tween=r},i})();gn(pc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return dc[i]=1});Nn.TweenMax=Nn.TweenLite=zt;Nn.TimelineLite=Nn.TimelineMax=fn;Lt=new fn({sortChildren:!1,defaults:Ws,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=nf;var Dr=[],Bo={},wp=[],Kc=0,Ap=0,Sa=function(e){return(Bo[e]||wp).map(function(t){return t()})},ml=function(){var e=Date.now(),t=[];e-Kc>2&&(Sa("matchMediaInit"),Dr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=ai.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Sa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Kc=e,Sa("matchMedia"))},df=(function(){function i(t,n){this.selector=n&&fl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ap++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Nt(n)&&(s=r,r=n,n=Nt);var o=this,a=function(){var c=At,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=fl(s)),At=o,f=r.apply(o,arguments),Nt(f)&&o._r.push(f),At=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Nt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=At;At=null,n(this),At=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof zt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Dr.length;o--;)Dr[o].id===this.id&&Dr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),Rp=(function(){function i(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){hi(n)||(n={matches:n});var o=new df(0,s||this.scope),a=o.conditions={},l,c,u;At&&!o.selector&&(o.selector=At.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=ai.matchMedia(n[c]),l&&(Dr.indexOf(o)<0&&Dr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ml):l.addEventListener("change",ml)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Qo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Jh(r)})},timeline:function(e){return new fn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Yt(e)&&(e=Wn(e)[0]);var s=Rr(e||{}).get,o=n?kh:Bh;return n==="native"&&(n=""),e&&(t?o((wn[t]&&wn[t].get||s)(e,t,n,r)):function(a,l,c){return o((wn[a]&&wn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Wn(e),e.length>1){var r=e.map(function(u){return yn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=wn[t],a=Rr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Jr._pt=0,f.init(e,n?u+n:u,Jr,0,[e]),f.render(1,f),Jr._pt&&yc(1,Jr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=yn.to(e,Fn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Pr(e.ease,Ws.ease)),Xc(Ws,e||{})},config:function(e){return Xc(In,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!wn[a]&&!Nn[a]&&Xs(t+" effect requires "+a+" plugin.")}),_a[t]=function(a,l,c){return n(Wn(a),Fn(l||{},s),c)},o&&(fn.prototype[t]=function(a,l,c){return this.add(_a[t](a,hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Pr(t)},parseEase:function(e,t){return arguments.length?Pr(e,t):ft},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new fn(e),r,s;for(n.smoothChildTiming=_n(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,r=Lt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof zt&&r.vars.onComplete===r._targets[0]))&&ci(n,r,r._start-r._delay),r=s;return ci(Lt,n,0),n},context:function(e,t){return e?new df(e,t):At},matchMedia:function(e){return new Rp(e)},matchMediaRefresh:function(){return Dr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||ml()},addEventListener:function(e,t){var n=Bo[e]||(Bo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:sp,wrapYoyo:op,distribute:Yh,random:$h,snap:Zh,normalize:rp,getUnit:rn,clamp:ep,splitColor:ef,toArray:Wn,selector:fl,mapRange:jh,pipe:np,unitize:ip,interpolate:ap,shuffle:qh},install:Uh,effects:_a,ticker:An,updateRoot:fn.updateRoot,plugins:wn,globalTimeline:Lt,core:{PropTween:vn,globals:Nh,Tween:zt,Timeline:fn,Animation:$s,getCache:Rr,_removeLinkedListItem:oa,reverting:function(){return $t},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return lc=e}}};gn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Qo[i]=zt[i]});An.add(fn.updateRoot);Jr=Qo.to({},{duration:0});var Cp=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Pp=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Cp(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},ya=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Yt(s)&&(l={},gn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Pp(a,s)}}}},yn=Qo.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)$t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ya("roundProps",dl),ya("modifiers"),ya("snap",Zh))||Qo;zt.version=fn.version=yn.version="3.15.0";Ih=1;uc()&&hs();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jc,er,is,Mc,wr,Qc,Ec,Dp=function(){return typeof window<"u"},Ni={},Mr=180/Math.PI,rs=Math.PI/180,Fr=Math.atan2,Jc=1e8,Tc=/([A-Z])/g,Lp=/(left|right|width|margin|padding|x)/i,Ip=/[\s,\(]\S/,ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_l=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Up=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Np=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Fp=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Op=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zp=function(e,t,n){return e.style[t]=n},Bp=function(e,t,n){return e.style.setProperty(t,n)},kp=function(e,t,n){return e._gsap[t]=n},Hp=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Vp=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Gp=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},It="transform",xn=It+"Origin",Wp=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Ni&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=bi(r,a)}):this.tfm[e]=o.x?o[e]:bi(r,e),e===xn&&(this.tfm.zOrigin=o.zOrigin);else return ui.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(It)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(xn,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},_f=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xp=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Tc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ec(),(!s||!s.isStart)&&!n[It]&&(_f(n),r.zOrigin&&n[xn]&&(n[xn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},gf=function(e,t){var n={target:e,props:[],revert:Xp,save:Wp};return e._gsap||yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},vf,gl=function(e,t){var n=er.createElementNS?er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):er.createElement(e);return n&&n.style?n:er.createElement(e)},Cn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Tc,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,fs(t)||t,1)||""},eu="O,Moz,ms,Ms,Webkit".split(","),fs=function(e,t,n){var r=t||wr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(eu[o]+e in s););return o<0?null:(o===3?"ms":o>=0?eu[o]:"")+e},vl=function(){Dp()&&window.document&&(jc=window,er=jc.document,is=er.documentElement,wr=gl("div")||{style:{}},gl("div"),It=fs(It),xn=It+"Origin",wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vf=!!fs("perspective"),Ec=yn.core.reverting,Mc=1)},tu=function(e){var t=e.ownerSVGElement,n=gl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),is.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),is.removeChild(n),s},nu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},xf=function(e){var t,n;try{t=e.getBBox()}catch{t=tu(e),n=1}return t&&(t.width||t.height)||n||(t=tu(e)),t&&!t.width&&!t.x&&!t.y?{x:+nu(e,["x","cx","x1"])||0,y:+nu(e,["y","cy","y1"])||0,width:0,height:0}:t},Sf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&xf(e))},or=function(e,t){if(t){var n=e.style,r;t in Ni&&t!==xn&&(t=It),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Tc,"-$1").toLowerCase())):n.removeAttribute(t)}},tr=function(e,t,n,r,s,o){var a=new vn(e._pt,t,n,0,1,o?mf:pf);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},iu={deg:1,rad:1,turn:1},qp={grid:1,flex:1},ar=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=wr.style,l=Lp.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",_=r==="%",v,g,m,p;if(r===o||!s||iu[r]||iu[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&Sf(e),(_||o==="%")&&(Ni[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Ft(_?s/v*f:s/100*v);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===er||!g.appendChild)&&(g=er.body),m=g._gsap,m&&_&&m.width&&l&&m.time===An.time&&!m.uncache)return Ft(s/m.width*f);if(_&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=f+r,v=e[u],T?e.style[t]=T:or(e,t)}else(_||o==="%")&&!qp[Cn(g,"display")]&&(a.position=Cn(e,"position")),g===e&&(a.position="static"),g.appendChild(wr),v=wr[u],g.removeChild(wr),a.position="absolute";return l&&_&&(m=Rr(g),m.time=An.time,m.width=g[u]),Ft(d?v*s/f:v&&s?f/v*s:0)},bi=function(e,t,n,r){var s;return Mc||vl(),t in ui&&t!=="transform"&&(t=ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ni[t]&&t!=="transform"?(s=js(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ea(Cn(e,xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Jo[t]&&Jo[t](e,t,n)||Cn(e,t)||Oh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ar(e,t,s,n)+n:s},Yp=function(e,t,n,r){if(!n||n==="none"){var s=fs(t,e,1),o=s&&Cn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Cn(e,"borderTopColor"))}var a=new vn(this._pt,e.style,t,0,1,hf),l=0,c=0,u,f,d,_,v,g,m,p,T,M,S,P;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Cn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Cn(e,t)||r,g?e.style[t]=g:or(e,t)),u=[n,r],nf(u),n=u[0],r=u[1],d=n.match(Qr)||[],P=r.match(Qr)||[],P.length){for(;f=Qr.exec(r);)m=f[0],T=r.substring(l,f.index),v?v=(v+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(v=1),m!==(g=d[c++]||"")&&(_=parseFloat(g)||0,S=g.substr((_+"").length),m.charAt(1)==="="&&(m=ns(_,m)+S),p=parseFloat(m),M=m.substr((p+"").length),l=Qr.lastIndex-M.length,M||(M=M||In.units[t]||S,l===r.length&&(r+=M,a.e+=M)),S!==M&&(_=ar(e,t,g,M)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:_,c:p-_,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?mf:pf;return Lh.test(r)&&(a.e=0),this._pt=a,a},ru={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zp=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=ru[n]||n,t[1]=ru[r]||r,t.join(" ")},$p=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ni[a]&&(l=1,a=a==="transformOrigin"?xn:It),or(n,a);l&&(or(n,It),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",js(n,1),o.uncache=1,_f(r)))}},Jo={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new vn(e._pt,t,n,0,0,$p);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ks=[1,0,0,1,0,0],yf={},Mf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},su=function(e){var t=Cn(e,It);return Mf(t)?Ks:t.substr(7).match(Dh).map(Ft)},bc=function(e,t){var n=e._gsap||Rr(e),r=e.style,s=su(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ks:s):(s===Ks&&!e.offsetParent&&e!==is&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,is.appendChild(e)),s=su(e),l?r.display=l:or(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xl=function(e,t,n,r,s,o){var a=e._gsap,l=s||bc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,_=l[0],v=l[1],g=l[2],m=l[3],p=l[4],T=l[5],M=t.split(" "),S=parseFloat(M[0])||0,P=parseFloat(M[1])||0,I,R,D,E;n?l!==Ks&&(R=_*m-v*g)&&(D=S*(m/R)+P*(-g/R)+(g*T-m*p)/R,E=S*(-v/R)+P*(_/R)-(_*T-v*p)/R,S=D,P=E):(I=xf(e),S=I.x+(~M[0].indexOf("%")?S/100*I.width:S),P=I.y+(~(M[1]||M[0]).indexOf("%")?P/100*I.height:P)),r||r!==!1&&a.smooth?(p=S-c,T=P-u,a.xOffset=f+(p*_+T*g)-p,a.yOffset=d+(p*v+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=P,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[xn]="0px 0px",o&&(tr(o,a,"xOrigin",c,S),tr(o,a,"yOrigin",u,P),tr(o,a,"xOffset",f,a.xOffset),tr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+P)},js=function(e,t){var n=e._gsap||new sf(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Cn(e,xn)||"0",u,f,d,_,v,g,m,p,T,M,S,P,I,R,D,E,b,N,H,B,Y,J,X,$,G,fe,ge,ie,Ee,we,j,se;return u=f=d=g=m=p=T=M=S=0,_=v=1,n.svg=!!(e.getCTM&&Sf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),r.scale=r.rotate=r.translate="none"),R=bc(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),xl(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,R)),P=n.xOrigin||0,I=n.yOrigin||0,R!==Ks&&(N=R[0],H=R[1],B=R[2],Y=R[3],u=J=R[4],f=X=R[5],R.length===6?(_=Math.sqrt(N*N+H*H),v=Math.sqrt(Y*Y+B*B),g=N||H?Fr(H,N)*Mr:0,T=B||Y?Fr(B,Y)*Mr+g:0,T&&(v*=Math.abs(Math.cos(T*rs))),n.svg&&(u-=P-(P*N+I*B),f-=I-(P*H+I*Y))):(se=R[6],we=R[7],ge=R[8],ie=R[9],Ee=R[10],j=R[11],u=R[12],f=R[13],d=R[14],D=Fr(se,Ee),m=D*Mr,D&&(E=Math.cos(-D),b=Math.sin(-D),$=J*E+ge*b,G=X*E+ie*b,fe=se*E+Ee*b,ge=J*-b+ge*E,ie=X*-b+ie*E,Ee=se*-b+Ee*E,j=we*-b+j*E,J=$,X=G,se=fe),D=Fr(-B,Ee),p=D*Mr,D&&(E=Math.cos(-D),b=Math.sin(-D),$=N*E-ge*b,G=H*E-ie*b,fe=B*E-Ee*b,j=Y*b+j*E,N=$,H=G,B=fe),D=Fr(H,N),g=D*Mr,D&&(E=Math.cos(D),b=Math.sin(D),$=N*E+H*b,G=J*E+X*b,H=H*E-N*b,X=X*E-J*b,N=$,J=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),_=Ft(Math.sqrt(N*N+H*H+B*B)),v=Ft(Math.sqrt(X*X+se*se)),D=Fr(J,X),T=Math.abs(D)>2e-4?D*Mr:0,S=j?1/(j<0?-j:j):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Mf(Cn(e,It)),$&&e.setAttribute("transform",$))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(_*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ft(_),n.scaleY=Ft(v),n.rotation=Ft(g)+a,n.rotationX=Ft(m)+a,n.rotationY=Ft(p)+a,n.skewX=T+a,n.skewY=M+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[xn]=ea(c)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?jp:vf?Ef:Kp,n.uncache=0,n},ea=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ma=function(e,t,n){var r=rn(t);return Ft(parseFloat(t)+parseFloat(ar(e,"x",n+"px",r)))+r},Kp=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ef(e,t)},dr="0deg",bs="0px",pr=") ",Ef=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,_=n.skewY,v=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,M=n.zOrigin,S="",P=p==="auto"&&e&&e!==1||p===!0;if(M&&(f!==dr||u!==dr)){var I=parseFloat(u)*rs,R=Math.sin(I),D=Math.cos(I),E;I=parseFloat(f)*rs,E=Math.cos(I),o=Ma(T,o,R*E*-M),a=Ma(T,a,-Math.sin(I)*-M),l=Ma(T,l,D*E*-M+M)}m!==bs&&(S+="perspective("+m+pr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(P||o!==bs||a!==bs||l!==bs)&&(S+=l!==bs||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+pr),c!==dr&&(S+="rotate("+c+pr),u!==dr&&(S+="rotateY("+u+pr),f!==dr&&(S+="rotateX("+f+pr),(d!==dr||_!==dr)&&(S+="skew("+d+", "+_+pr),(v!==1||g!==1)&&(S+="scale("+v+", "+g+pr),T.style[It]=S||"translate(0, 0)"},jp=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,_=n.target,v=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,M=parseFloat(o),S=parseFloat(a),P,I,R,D,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=rs,c*=rs,P=Math.cos(l)*f,I=Math.sin(l)*f,R=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(u*=rs,E=Math.tan(c-u),E=Math.sqrt(1+E*E),R*=E,D*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),P*=E,I*=E)),P=Ft(P),I=Ft(I),R=Ft(R),D=Ft(D)):(P=f,D=d,I=R=0),(M&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(M=ar(_,"x",o,"px"),S=ar(_,"y",a,"px")),(v||g||m||p)&&(M=Ft(M+v-(v*P+g*R)+m),S=Ft(S+g-(v*I+g*D)+p)),(r||s)&&(E=_.getBBox(),M=Ft(M+r/100*E.width),S=Ft(S+s/100*E.height)),E="matrix("+P+","+I+","+R+","+D+","+M+","+S+")",_.setAttribute("transform",E),T&&(_.style[It]=E)},Qp=function(e,t,n,r,s){var o=360,a=Yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Mr:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Jc)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Jc)%o-~~(c/o)*o)),e._pt=d=new vn(e._pt,t,n,r,c,Up),d.e=u,d.u="deg",e._props.push(n),d},ou=function(e,t){for(var n in t)e[n]=t[n];return e},Jp=function(e,t,n){var r=ou({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,_,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[It]=t,a=js(n,1),or(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],o[It]=t,a=js(n,1),o[It]=c);for(l in Ni)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(_=rn(c),v=rn(u),f=_!==v?ar(n,l,c,v):parseFloat(c),d=parseFloat(u),e._pt=new vn(e._pt,a,l,f,d-f,_l),e._pt.u=v||0,e._props.push(l));ou(a,r)};gn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Jo[e>1?"border"+i:i]=function(a,l,c,u,f){var d,_;if(arguments.length<4)return d=o.map(function(v){return bi(a,v,c)}),_=d.join(" "),_.split(d[0]).length===5?d[0]:_;d=(u+"").split(" "),_={},o.forEach(function(v,g){return _[v]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,_,f)}});var Tf={name:"css",register:vl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,_,v,g,m,p,T,M,S,P,I,R,D,E;Mc||vl(),this.styles=this.styles||gf(e),D=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(wn[g]&&of(g,t,n,r,e,s)))){if(_=typeof u,v=Jo[g],_==="function"&&(u=u.call(n,r,e,s),_=typeof u),_==="string"&&~u.indexOf("random(")&&(u=Ys(u)),v)v(this,e,g,u,n)&&(R=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",ir.lastIndex=0,ir.test(c)||(m=rn(c),p=rn(u),p?m!==p&&(c=ar(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),D.push(g,0,a[g]);else if(_!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Yt(c)&&~c.indexOf("random(")&&(c=Ys(c)),rn(c+"")||c==="auto"||(c+=In.units[g]||rn(bi(e,g))||""),(c+"").charAt(1)==="="&&(c=bi(e,g))):c=bi(e,g),d=parseFloat(c),T=_==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),g in ui&&(g==="autoAlpha"&&(d===1&&bi(e,"visibility")==="hidden"&&f&&(d=0),D.push("visibility",0,a.visibility),tr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=ui[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in Ni,M){if(this.styles.save(g),E=u,_==="string"&&u.substring(0,6)==="var(--"){if(u=Cn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=u,u=Cn(e,"perspective"),b?e.style.perspective=b:or(e,"perspective")}f=parseFloat(u)}if(S||(P=e._gsap,P.renderTransform&&!t.parseTransform||js(e,t.parseTransform),I=t.smoothOrigin!==!1&&P.smooth,S=this._pt=new vn(this._pt,a,It,0,1,P.renderTransform,P,0,-1),S.dep=1),g==="scale")this._pt=new vn(this._pt,P,"scaleY",P.scaleY,(T?ns(P.scaleY,T+f):f)-P.scaleY||0,_l),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push(xn,0,a[xn]),u=Zp(u),P.svg?xl(e,u,0,I,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==P.zOrigin&&tr(this,P,"zOrigin",P.zOrigin,p),tr(this,a,g,ea(c),ea(u)));continue}else if(g==="svgOrigin"){xl(e,u,1,I,0,this);continue}else if(g in yf){Qp(this,P,g,d,T?ns(d,T+u):u);continue}else if(g==="smoothOrigin"){tr(this,P,"smooth",P.smooth,u);continue}else if(g==="force3D"){P[g]=u;continue}else if(g==="transform"){Jp(this,u,e);continue}}else g in a||(g=fs(g)||g);if(M||(f||f===0)&&(d||d===0)&&!Ip.test(u)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=rn(u)||(g in In.units?In.units[g]:m),m!==p&&(d=ar(e,g,c,p)),this._pt=new vn(this._pt,M?P:a,g,d,(T?ns(d,T+f):f)-d,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Op:_l),this._pt.u=p||0,M&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=Fp):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Np);else if(g in a)Yp.call(this,e,g,c,T?T+u:u);else if(g in e)this.add(e,g,c||e[g],T?T+u:u,r,s);else if(g!=="parseTransform"){fc(g,u);continue}M||(g in a?D.push(g,0,a[g]):typeof e[g]=="function"?D.push(g,2,e[g]()):D.push(g,1,c||e[g])),o.push(g)}}R&&ff(this)},render:function(e,t){if(t.tween._time||!Ec())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:bi,aliases:ui,getSetter:function(e,t,n){var r=ui[t];return r&&r.indexOf(",")<0&&(t=r),t in Ni&&t!==xn&&(e._gsap.x||bi(e,"x"))?n&&Qc===n?t==="scale"?Hp:kp:(Qc=n||{})&&(t==="scale"?Vp:Gp):e.style&&!cc(e.style[t])?zp:~t.indexOf("-")?Bp:Sc(e,t)},core:{_removeProperty:or,_getMatrix:bc}};yn.utils.checkPrefix=fs;yn.core.getStyleSaver=gf;(function(i,e,t,n){var r=gn(i+","+e+","+t,function(s){Ni[s]=1});gn(e,function(s){In.units[s]="deg",yf[s]=1}),ui[r[13]]=i+","+e,gn(n,function(s){var o=s.split(":");ui[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){In.units[i]="px"});yn.registerPlugin(Tf);var wc=yn.registerPlugin(Tf)||yn;wc.core.Tween;const em=[{title:"TradeForge",tags:"concept • web • solidity • development • 3d",url:"https://kianpk.github.io/tradeforge/",hue:"linear-gradient(135deg, #1a2ffb, #6d8cff 40%, #0b1024)"},{title:"Zyrax Drive",tags:"web • design • development • 3d • animation",url:"https://kianpk.github.io/zyrax-drive/",hue:"linear-gradient(135deg, #101018, #2a1a5e 45%, #c1ff00)"},{title:"Playfield",tags:"web • design • development • 3d • physics",url:"https://kianpk.github.io/playfield/",hue:"linear-gradient(135deg, #0e2a22, #1db954 50%, #d9ffe8)"},{title:"Orbit Desk",tags:"web • design • development • 3d • r3f",url:"https://kianpk.github.io/orbit-desk/",hue:"linear-gradient(145deg, #1b1030, #8832f7 55%, #ffb4ef)"},{title:"VaultForge",tags:"solidity • protocol • development",url:"https://github.com/kianPk/vaultforge",hue:"linear-gradient(135deg, #141820, #3d4a66 40%, #9fd0ff)"},{title:"LoadForge",tags:"rust • systems • development",url:"https://github.com/kianPk/loadforge",hue:"linear-gradient(135deg, #2a1208, #ff8039 50%, #ffe0c8)"},{title:"GateProxy",tags:"go • networking • development",url:"https://github.com/kianPk/gateproxy",hue:"linear-gradient(135deg, #071820, #00b7c2 50%, #c8fbff)"},{title:"Honeypot Deck",tags:"web • security • vue • lab",url:"https://kianpk.github.io/honeypot-deck/",hue:"linear-gradient(135deg, #2a0810, #ff4c41 45%, #ffd0d0)"},{title:"Sentinel Grid",tags:"web • security • visualization",url:"https://kianpk.github.io/sentinel-grid/",hue:"linear-gradient(135deg, #0a1420, #1a2ffb 50%, #9db4ff)"},{title:"Lumen Commerce",tags:"web • design • development • commerce",url:"https://kianpk.github.io/lumen-commerce/",hue:"linear-gradient(135deg, #20180a, #ffd24a 50%, #fff4c8)"},{title:"Netprobe Lab",tags:"concept • web • security lab",url:"https://kianpk.github.io/netprobe-lab/",hue:"linear-gradient(135deg, #120820, #b65fff 50%, #f0d8ff)"},{title:"PulseHub",tags:"go • realtime • development",url:"https://github.com/kianPk/pulsehub",hue:"linear-gradient(135deg, #081410, #a2ffab 50%, #e8ffe9)"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="170",tm=0,au=1,nm=2,bf=1,im=2,Ei=3,lr=0,Sn=1,dn=2,ei=0,rr=1,Sl=2,lu=3,cu=4,wf=5,Qi=100,rm=101,sm=102,om=103,am=104,lm=200,yl=201,cm=202,um=203,Ml=204,El=205,hm=206,fm=207,dm=208,pm=209,mm=210,_m=211,gm=212,vm=213,xm=214,Tl=0,bl=1,wl=2,ds=3,Al=4,Rl=5,Cl=6,Pl=7,Af=0,Sm=1,ym=2,Di=0,Mm=1,Em=2,Tm=3,bm=4,wm=5,Am=6,Rm=7,Rf=300,ps=301,ms=302,Dl=303,Ll=304,ca=306,ss=1e3,Ai=1001,ta=1002,un=1003,Cm=1004,lo=1005,qt=1006,Ea=1007,Ri=1008,Fi=1009,Cf=1010,Pf=1011,Qs=1012,Rc=1013,Ir=1014,Pn=1015,Dn=1016,Cc=1017,Pc=1018,_s=1020,Df=35902,Lf=1021,If=1022,mn=1023,Uf=1024,Nf=1025,os=1026,gs=1027,Dc=1028,Lc=1029,Ff=1030,Ic=1031,Uc=1033,ko=33776,Ho=33777,Vo=33778,Go=33779,Il=35840,Ul=35841,Nl=35842,Fl=35843,Ol=36196,zl=37492,Bl=37496,kl=37808,Hl=37809,Vl=37810,Gl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,Zl=37816,$l=37817,Kl=37818,jl=37819,Ql=37820,Jl=37821,Wo=36492,ec=36494,tc=36495,Of=36283,nc=36284,ic=36285,rc=36286,Pm=3200,Dm=3201,Lm=0,Im=1,pn="",cn="srgb",Oi="srgb-linear",ua="linear",xt="srgb",Or=7680,uu=519,Um=512,Nm=513,Fm=514,zf=515,Om=516,zm=517,Bm=518,km=519,hu=35044,Vi=35048,fu="300 es",Ci=2e3,na=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let du=1234567;const Bs=Math.PI/180,Js=180/Math.PI;function ys(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function nn(i,e,t){return Math.max(e,Math.min(t,i))}function Nc(i,e){return(i%e+e)%e}function Hm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Vm(i,e,t){return i!==e?(t-i)/(e-i):0}function ks(i,e,t){return(1-t)*i+t*e}function Gm(i,e,t,n){return ks(i,e,1-Math.exp(-t*n))}function Wm(i,e=1){return e-Math.abs(Nc(i,e*2)-e)}function Xm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ym(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zm(i,e){return i+Math.random()*(e-i)}function $m(i){return i*(.5-Math.random())}function Km(i){i!==void 0&&(du=i);let e=du+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jm(i){return i*Bs}function Qm(i){return i*Js}function Jm(i){return(i&i-1)===0&&i!==0}function e_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function t_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function n_(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),_=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*_,a*c);break;case"YXY":i.set(l*_,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*_,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wt={DEG2RAD:Bs,RAD2DEG:Js,generateUUID:ys,clamp:nn,euclideanModulo:Nc,mapLinear:Hm,inverseLerp:Vm,lerp:ks,damp:Gm,pingpong:Wm,smoothstep:Xm,smootherstep:qm,randInt:Ym,randFloat:Zm,randFloatSpread:$m,seededRandom:Km,degToRad:jm,radToDeg:Qm,isPowerOfTwo:Jm,ceilPowerOfTwo:e_,floorPowerOfTwo:t_,setQuaternionFromProperEuler:n_,normalize:an,denormalize:jr};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,r,s,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],_=n[5],v=n[8],g=r[0],m=r[3],p=r[6],T=r[1],M=r[4],S=r[7],P=r[2],I=r[5],R=r[8];return s[0]=o*g+a*T+l*P,s[3]=o*m+a*M+l*I,s[6]=o*p+a*S+l*R,s[1]=c*g+u*T+f*P,s[4]=c*m+u*M+f*I,s[7]=c*p+u*S+f*R,s[2]=d*g+_*T+v*P,s[5]=d*m+_*M+v*I,s[8]=d*p+_*S+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,_=c*s-o*l,v=t*f+n*d+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=_*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ta.makeScale(e,t)),this}rotate(e){return this.premultiply(Ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new st;function Bf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function i_(){const i=eo("canvas");return i.style.display="block",i}const pu={};function Us(i){i in pu||(pu[i]=!0,console.warn(i))}function r_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function s_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function o_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dt={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pn?ua:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const mu=[.64,.33,.3,.6,.15,.06],_u=[.2126,.7152,.0722],gu=[.3127,.329],vu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[Oi]:{primaries:mu,whitePoint:gu,transfer:ua,toXYZ:vu,fromXYZ:xu,luminanceCoefficients:_u,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:mu,whitePoint:gu,transfer:xt,toXYZ:vu,fromXYZ:xu,luminanceCoefficients:_u,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let zr;class a_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zr===void 0&&(zr=eo("canvas")),zr.width=e.width,zr.height=e.height;const n=zr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l_=0;class kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ba(r[o].image)):s.push(ba(r[o]))}else s=ba(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?a_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c_=0;class Kt extends Ss{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Ai,r=Ai,s=qt,o=Ri,a=mn,l=Fi,c=Kt.DEFAULT_ANISOTROPY,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=ys(),this.name="",this.source=new kf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Rf;Kt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],_=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(_+1)/2,P=(p+1)/2,I=(u+d)/4,R=(f+g)/4,D=(v+m)/4;return M>S&&M>P?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=I/n,s=R/n):S>P?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=I/r,s=D/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=D/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(f-g)/T,this.z=(d-u)/T,this.w=Math.acos((c+_+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u_ extends Ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Kt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends u_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hf extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h_ extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],_=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=_,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==d||c!==_||u!==v){let m=1-a;const p=l*d+c*_+u*v+f*g,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),I=Math.atan2(P,p*T);m=Math.sin(m*I)/P,a=Math.sin(a*I)/P}const S=a*T;if(l=l*m+d*S,c=c*m+_*S,u=u*m+v*S,f=f*m+g*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],d=s[o+1],_=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*_-c*d,e[t+1]=l*v+u*d+c*f-a*_,e[t+2]=c*v+u*_+a*d-l*f,e[t+3]=u*v-a*f-l*d-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),d=l(n/2),_=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f-d*_*v;break;case"YXZ":this._x=d*u*f+c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f+d*_*v;break;case"ZXY":this._x=d*u*f-c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f-d*_*v;break;case"ZYX":this._x=d*u*f-c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f+d*_*v;break;case"YZX":this._x=d*u*f+c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f-d*_*v;break;case"XZY":this._x=d*u*f-c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f+d*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(n>a&&n>f){const _=2*Math.sqrt(1+n-a-f);this._w=(u-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>f){const _=2*Math.sqrt(1+a-n-f);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+f-n-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new z,Su=new Ln;class Ms{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),uo.subVectors(this.max,ws),Br.subVectors(e.a,ws),kr.subVectors(e.b,ws),Hr.subVectors(e.c,ws),Gi.subVectors(kr,Br),Wi.subVectors(Hr,kr),mr.subVectors(Br,Hr);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-mr.z,mr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,mr.z,0,-mr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-mr.y,mr.x,0];return!Aa(t,Br,kr,Hr,uo)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,Br,kr,Hr,uo))?!1:(ho.crossVectors(Gi,Wi),t=[ho.x,ho.y,ho.z],Aa(t,Br,kr,Hr,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new z,new z,new z,new z,new z,new z,new z,new z],Yn=new z,co=new Ms,Br=new z,kr=new z,Hr=new z,Gi=new z,Wi=new z,mr=new z,ws=new z,uo=new z,ho=new z,_r=new z;function Aa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){_r.fromArray(i,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),c=t.dot(_r),u=n.dot(_r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const f_=new Ms,As=new z,Ra=new z;class Fc{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):f_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(As,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Ra)),this.expandByPoint(As.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new z,Ca=new z,fo=new z,Xi=new z,Pa=new z,po=new z,Da=new z;class d_{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ca.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Ca);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=Xi.dot(this.direction),l=-Xi.dot(fo),c=Xi.lengthSq(),u=Math.abs(1-o*o);let f,d,_,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,_=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ca).addScaledVector(fo,d),_}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),r=vi.dot(vi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,r,s){Pa.subVectors(t,e),po.subVectors(n,e),Da.crossVectors(Pa,po);let o=this.direction.dot(Da),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(po.crossVectors(Xi,po));if(l<0)return null;const c=a*this.direction.dot(Pa.cross(Xi));if(c<0||l+c>o)return null;const u=-a*Xi.dot(Da);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m)}set(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=_,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,_=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=_+v*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=v+_*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,_=l*f,v=c*u,g=c*f;t[0]=d+g*a,t[4]=v*a-_,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=_*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,_=l*f,v=c*u,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,_=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=v*c-_,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=_*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-d*f,t[8]=v*f+_,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=_*f+v,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=o*u,t[9]=_*f-v,t[2]=v*f-_,t[6]=a*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,m_)}lookAt(e,t,n){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),qi.crossVectors(n,Tn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),qi.crossVectors(n,Tn)),qi.normalize(),mo.crossVectors(Tn,qi),r[0]=qi.x,r[4]=mo.x,r[8]=Tn.x,r[1]=qi.y,r[5]=mo.y,r[9]=Tn.y,r[2]=qi.z,r[6]=mo.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],_=n[13],v=n[2],g=n[6],m=n[10],p=n[14],T=n[3],M=n[7],S=n[11],P=n[15],I=r[0],R=r[4],D=r[8],E=r[12],b=r[1],N=r[5],H=r[9],B=r[13],Y=r[2],J=r[6],X=r[10],$=r[14],G=r[3],fe=r[7],ge=r[11],ie=r[15];return s[0]=o*I+a*b+l*Y+c*G,s[4]=o*R+a*N+l*J+c*fe,s[8]=o*D+a*H+l*X+c*ge,s[12]=o*E+a*B+l*$+c*ie,s[1]=u*I+f*b+d*Y+_*G,s[5]=u*R+f*N+d*J+_*fe,s[9]=u*D+f*H+d*X+_*ge,s[13]=u*E+f*B+d*$+_*ie,s[2]=v*I+g*b+m*Y+p*G,s[6]=v*R+g*N+m*J+p*fe,s[10]=v*D+g*H+m*X+p*ge,s[14]=v*E+g*B+m*$+p*ie,s[3]=T*I+M*b+S*Y+P*G,s[7]=T*R+M*N+S*J+P*fe,s[11]=T*D+M*H+S*X+P*ge,s[15]=T*E+M*B+S*$+P*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],_=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*_-n*l*_)+g*(+t*l*_-t*c*d+s*o*d-r*o*_+r*c*u-s*l*u)+m*(+t*c*f-t*a*_-s*o*f+n*o*_+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],_=e[11],v=e[12],g=e[13],m=e[14],p=e[15],T=f*m*c-g*d*c+g*l*_-a*m*_-f*l*p+a*d*p,M=v*d*c-u*m*c-v*l*_+o*m*_+u*l*p-o*d*p,S=u*g*c-v*f*c+v*a*_-o*g*_-u*a*p+o*f*p,P=v*f*l-u*g*l-v*a*d+o*g*d+u*a*m-o*f*m,I=t*T+n*M+r*S+s*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=T*R,e[1]=(g*d*s-f*m*s-g*r*_+n*m*_+f*r*p-n*d*p)*R,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*R,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*_-n*l*_)*R,e[4]=M*R,e[5]=(u*m*s-v*d*s+v*r*_-t*m*_-u*r*p+t*d*p)*R,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*_+t*l*_)*R,e[8]=S*R,e[9]=(v*f*s-u*g*s-v*n*_+t*g*_+u*n*p-t*f*p)*R,e[10]=(o*g*s-v*a*s+v*n*c-t*g*c-o*n*p+t*a*p)*R,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*_-t*a*_)*R,e[12]=P*R,e[13]=(u*g*r-v*f*r+v*n*d-t*g*d-u*n*m+t*f*m)*R,e[14]=(v*a*r-o*g*r-v*n*l+t*g*l+o*n*m-t*a*m)*R,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,_=s*u,v=s*f,g=o*u,m=o*f,p=a*f,T=l*c,M=l*u,S=l*f,P=n.x,I=n.y,R=n.z;return r[0]=(1-(g+p))*P,r[1]=(_+S)*P,r[2]=(v-M)*P,r[3]=0,r[4]=(_-S)*I,r[5]=(1-(d+p))*I,r[6]=(m+T)*I,r[7]=0,r[8]=(v+M)*R,r[9]=(m-T)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),a=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/s,u=1/o,f=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Ci){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let _,v;if(a===Ci)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===na)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ci){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),d=(t+e)*c,_=(n+r)*u;let v,g;if(a===Ci)v=(o+s)*f,g=-2*f;else if(a===na)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new z,Zn=new Et,p_=new z(0,0,0),m_=new z(1,1,1),qi=new z,mo=new z,Tn=new z,yu=new Et,Mu=new Ln;class qn{constructor(e=0,t=0,n=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let __=0;const Eu=new z,Gr=new Ln,xi=new Et,_o=new z,Rs=new z,g_=new z,v_=new Ln,Tu=new z(1,0,0),bu=new z(0,1,0),wu=new z(0,0,1),Au={type:"added"},x_={type:"removed"},Wr={type:"childadded",child:null},La={type:"childremoved",child:null};class Un extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new z,t=new qn,n=new Ln,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new st}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Tu,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return Eu.copy(e).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tu,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_o.copy(e):_o.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Rs,_o,this.up):xi.lookAt(_o,Rs,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(xi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x_),La.child=e,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Un.DEFAULT_UP=new z(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new z,Si=new z,Ia=new z,yi=new z,Xr=new z,qr=new z,Ru=new z,Ua=new z,Na=new z,Fa=new z,Oa=new Rt,za=new Rt,Ba=new Rt;class Jn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$n.subVectors(e,t),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){$n.subVectors(r,t),Si.subVectors(n,t),Ia.subVectors(e,t);const o=$n.dot($n),a=$n.dot(Si),l=$n.dot(Ia),c=Si.dot(Si),u=Si.dot(Ia),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,_=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Oa.setScalar(0),za.setScalar(0),Ba.setScalar(0),Oa.fromBufferAttribute(e,t),za.fromBufferAttribute(e,n),Ba.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Oa,s.x),o.addScaledVector(za,s.y),o.addScaledVector(Ba,s.z),o}static isFrontFacing(e,t,n,r){return $n.subVectors(n,t),Si.subVectors(e,t),$n.cross(Si).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$n.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Xr.subVectors(r,n),qr.subVectors(s,n),Ua.subVectors(e,n);const l=Xr.dot(Ua),c=qr.dot(Ua);if(l<=0&&c<=0)return t.copy(n);Na.subVectors(e,r);const u=Xr.dot(Na),f=qr.dot(Na);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Xr,o);Fa.subVectors(e,s);const _=Xr.dot(Fa),v=qr.dot(Fa);if(v>=0&&_<=v)return t.copy(s);const g=_*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(qr,a);const m=u*v-_*f;if(m<=0&&f-u>=0&&_-v>=0)return Ru.subVectors(s,r),a=(f-u)/(f-u+(_-v)),t.copy(r).addScaledVector(Ru,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(Xr,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},go={h:0,s:0,l:0};function ka(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=Nc(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ka(o,s,e+1/3),this.g=ka(o,s,e),this.b=ka(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,t=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return dt.fromWorkingColorSpace(tn.copy(this),e),Math.round(nn(tn.r*255,0,255))*65536+Math.round(nn(tn.g*255,0,255))*256+Math.round(nn(tn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,r=tn.g,s=tn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=cn){dt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,r=tn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(go);const n=ks(Yi.h,go.h,t),r=ks(Yi.s,go.s,t),s=ks(Yi.l,go.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ke;Ke.NAMES=Gf;let S_=0;class ha extends Ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=ys(),this.name="",this.blending=rr,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=El,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(n.blending=this.blending),this.side!==lr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==El&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fa extends ha{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wi=y_();function y_(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function M_(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=nn(i,-65504,65504),wi.floatView[0]=i;const e=wi.uint32View[0],t=e>>23&511;return wi.baseTable[t]+((e&8388607)>>wi.shiftTable[t])}function E_(i){const e=i>>10;return wi.uint32View[0]=wi.mantissaTable[wi.offsetTable[e]+(i&1023)]+wi.exponentTable[e],wi.floatView[0]}const Cu={toHalfFloat:M_,fromHalfFloat:E_},Ot=new z,vo=new it;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hu&&(e.usage=this.usage),e}}class Wf extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xf extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ii extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let T_=0;const zn=new Et,Ha=new Un,Yr=new z,bn=new Ms,Cs=new Ms,Xt=new z;class fi extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bf(e)?Xf:Wf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ii(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(bn.min,Cs.min),bn.expandByPoint(Xt),Xt.addVectors(bn.max,Cs.max),bn.expandByPoint(Xt)):(bn.expandByPoint(Cs.min),bn.expandByPoint(Cs.max))}bn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(e,c),Xt.add(Yr)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new z,l[D]=new z;const c=new z,u=new z,f=new z,d=new it,_=new it,v=new it,g=new z,m=new z;function p(D,E,b){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,b),d.fromBufferAttribute(s,D),_.fromBufferAttribute(s,E),v.fromBufferAttribute(s,b),u.sub(c),f.sub(c),_.sub(d),v.sub(d);const N=1/(_.x*v.y-v.x*_.y);isFinite(N)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(N),m.copy(f).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(N),a[D].add(g),a[E].add(g),a[b].add(g),l[D].add(m),l[E].add(m),l[b].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,E=T.length;D<E;++D){const b=T[D],N=b.start,H=b.count;for(let B=N,Y=N+H;B<Y;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new z,S=new z,P=new z,I=new z;function R(D){P.fromBufferAttribute(r,D),I.copy(P);const E=a[D];M.copy(E),M.sub(P.multiplyScalar(P.dot(E))).normalize(),S.crossVectors(I,E);const N=S.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,N)}for(let D=0,E=T.length;D<E;++D){const b=T[D],N=b.start,H=b.count;for(let B=N,Y=N+H;B<Y;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,_=e.count;d<_;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,_=t.count;d<_;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let _=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?_=l[g]*a.data.stride+a.offset:_=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[_++]}return new Zt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],_=e(d,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const _=c[f];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,_=f.length;d<_;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new Et,gr=new d_,xo=new Fc,Du=new z,So=new z,yo=new z,Mo=new z,Va=new z,Eo=new z,Lu=new z,To=new z;class Ht extends Un{constructor(e=new fi,t=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Va.fromBufferAttribute(f,e),o?Eo.addScaledVector(Va,u):Eo.addScaledVector(Va.sub(t),u))}t.add(Eo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(xo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(xo,Du)===null||gr.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Pu.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Pu),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],T=Math.max(m.start,_.start),M=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let S=T,P=M;S<P;S+=3){const I=a.getX(S),R=a.getX(S+1),D=a.getX(S+2);r=bo(this,p,e,n,c,u,f,I,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(a.count,_.start+_.count);for(let m=v,p=g;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);r=bo(this,o,e,n,c,u,f,T,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],T=Math.max(m.start,_.start),M=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let S=T,P=M;S<P;S+=3){const I=S,R=S+1,D=S+2;r=bo(this,p,e,n,c,u,f,I,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);for(let m=v,p=g;m<p;m+=3){const T=m,M=m+1,S=m+2;r=bo(this,o,e,n,c,u,f,T,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function b_(i,e,t,n,r,s,o,a){let l;if(e.side===Sn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===lr,a),l===null)return null;To.copy(a),To.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:i}}function bo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,So),i.getVertexPosition(l,yo),i.getVertexPosition(c,Mo);const u=b_(i,e,t,n,So,yo,Mo,Lu);if(u){const f=new z;Jn.getBarycoord(Lu,So,yo,Mo,f),r&&(u.uv=Jn.getInterpolatedAttribute(r,a,l,c,f,new it)),s&&(u.uv1=Jn.getInterpolatedAttribute(s,a,l,c,f,new it)),o&&(u.normal=Jn.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};Jn.getNormal(So,yo,Mo,d.normal),u.face=d,u.barycoord=f}return u}class no extends fi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,_=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(f,2));function v(g,m,p,T,M,S,P,I,R,D,E){const b=S/R,N=P/D,H=S/2,B=P/2,Y=I/2,J=R+1,X=D+1;let $=0,G=0;const fe=new z;for(let ge=0;ge<X;ge++){const ie=ge*N-B;for(let Ee=0;Ee<J;Ee++){const we=Ee*b-H;fe[g]=we*T,fe[m]=ie*M,fe[p]=Y,c.push(fe.x,fe.y,fe.z),fe[g]=0,fe[m]=0,fe[p]=I>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Ee/R),f.push(1-ge/D),$+=1}}for(let ge=0;ge<D;ge++)for(let ie=0;ie<R;ie++){const Ee=d+ie+J*ge,we=d+ie+J*(ge+1),j=d+(ie+1)+J*(ge+1),se=d+(ie+1)+J*ge;l.push(Ee,we,se),l.push(we,j,se),G+=6}a.addGroup(_,G,E),_+=G,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ln(i){const e={};for(let t=0;t<i.length;t++){const n=vs(i[t]);for(const r in n)e[r]=n[r]}return e}function w_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const ia={clone:vs,merge:ln};var A_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends ha{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=w_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yf extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new z,Iu=new it,Uu=new it;class hn extends Yf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Uu),t.subVectors(Uu,Iu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,$r=1;class C_ extends Un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Zr,$r,e,t);r.layers=this.layers,this.add(r);const s=new hn(Zr,$r,e,t);s.layers=this.layers,this.add(s);const o=new hn(Zr,$r,e,t);o.layers=this.layers,this.add(o);const a=new hn(Zr,$r,e,t);a.layers=this.layers,this.add(a);const l=new hn(Zr,$r,e,t);l.layers=this.layers,this.add(l);const c=new hn(Zr,$r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Zf extends Kt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P_ extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new no(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:ei});s.uniforms.tEquirect.value=t;const o=new Ht(r,s),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=qt),new C_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ga=new z,D_=new z,L_=new st;class Er{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ga.subVectors(n,t).cross(D_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ga),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||L_.getNormalMatrix(e),r=this.coplanarPoint(Ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Fc,wo=new z;class $f{constructor(e=new Er,t=new Er,n=new Er,r=new Er,s=new Er,o=new Er){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],_=r[8],v=r[9],g=r[10],m=r[11],p=r[12],T=r[13],M=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,m-_,S-p).normalize(),n[1].setComponents(l+s,d+c,m+_,S+p).normalize(),n[2].setComponents(l+o,d+u,m+v,S+T).normalize(),n[3].setComponents(l-o,d-u,m-v,S-T).normalize(),n[4].setComponents(l-a,d-f,m-g,S-M).normalize(),t===Ci)n[5].setComponents(l+a,d+f,m+g,S+M).normalize();else if(t===na)n[5].setComponents(a,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function I_(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((_,v)=>_.start-v.start);let d=0;for(let _=1;_<f.length;_++){const v=f[d],g=f[_];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,f[d]=g)}f.length=d+1;for(let _=0,v=f.length;_<v;_++){const g=f[_];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Nr extends fi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,_=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let M=0;M<c;M++){const S=M*f-s;v.push(S,-T,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const M=T+c*p,S=T+c*(p+1),P=T+1+c*(p+1),I=T+1+c*p;_.push(M,S,I),_.push(S,P,I)}this.setIndex(_),this.setAttribute("position",new Ii(v,3)),this.setAttribute("normal",new Ii(g,3)),this.setAttribute("uv",new Ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.widthSegments,e.heightSegments)}}var U_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,G_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ig=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ig=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ev=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:U_,alphahash_pars_fragment:N_,alphamap_fragment:F_,alphamap_pars_fragment:O_,alphatest_fragment:z_,alphatest_pars_fragment:B_,aomap_fragment:k_,aomap_pars_fragment:H_,batching_pars_vertex:V_,batching_vertex:G_,begin_vertex:W_,beginnormal_vertex:X_,bsdfs:q_,iridescence_fragment:Y_,bumpmap_pars_fragment:Z_,clipping_planes_fragment:$_,clipping_planes_pars_fragment:K_,clipping_planes_pars_vertex:j_,clipping_planes_vertex:Q_,color_fragment:J_,color_pars_fragment:eg,color_pars_vertex:tg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:rg,defaultnormal_vertex:sg,displacementmap_pars_vertex:og,displacementmap_vertex:ag,emissivemap_fragment:lg,emissivemap_pars_fragment:cg,colorspace_fragment:ug,colorspace_pars_fragment:hg,envmap_fragment:fg,envmap_common_pars_fragment:dg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:wg,envmap_vertex:_g,fog_vertex:gg,fog_pars_vertex:vg,fog_fragment:xg,fog_pars_fragment:Sg,gradientmap_pars_fragment:yg,lightmap_pars_fragment:Mg,lights_lambert_fragment:Eg,lights_lambert_pars_fragment:Tg,lights_pars_begin:bg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Rg,lights_phong_fragment:Cg,lights_phong_pars_fragment:Pg,lights_physical_fragment:Dg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Ig,lights_fragment_maps:Ug,lights_fragment_end:Ng,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Bg,map_fragment:kg,map_pars_fragment:Hg,map_particle_fragment:Vg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Xg,morphinstance_vertex:qg,morphcolor_vertex:Yg,morphnormal_vertex:Zg,morphtarget_pars_vertex:$g,morphtarget_vertex:Kg,normal_fragment_begin:jg,normal_fragment_maps:Qg,normal_pars_fragment:Jg,normal_pars_vertex:e0,normal_vertex:t0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:o0,opaque_fragment:a0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:u0,dithering_fragment:h0,dithering_pars_fragment:f0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:_0,shadowmap_vertex:g0,shadowmask_pars_fragment:v0,skinbase_vertex:x0,skinning_pars_vertex:S0,skinning_vertex:y0,skinnormal_vertex:M0,specularmap_fragment:E0,specularmap_pars_fragment:T0,tonemapping_fragment:b0,tonemapping_pars_fragment:w0,transmission_fragment:A0,transmission_pars_fragment:R0,uv_pars_fragment:C0,uv_pars_vertex:P0,uv_vertex:D0,worldpos_vertex:L0,background_vert:I0,background_frag:U0,backgroundCube_vert:N0,backgroundCube_frag:F0,cube_vert:O0,cube_frag:z0,depth_vert:B0,depth_frag:k0,distanceRGBA_vert:H0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:q0,meshbasic_vert:Y0,meshbasic_frag:Z0,meshlambert_vert:$0,meshlambert_frag:K0,meshmatcap_vert:j0,meshmatcap_frag:Q0,meshnormal_vert:J0,meshnormal_frag:ev,meshphong_vert:tv,meshphong_frag:nv,meshphysical_vert:iv,meshphysical_frag:rv,meshtoon_vert:sv,meshtoon_frag:ov,points_vert:av,points_frag:lv,shadow_vert:cv,shadow_frag:uv,sprite_vert:hv,sprite_frag:fv},Ce={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},li={basic:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:ln([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:ln([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:ln([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:ln([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:ln([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:ln([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:ln([Ce.common,Ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:ln([Ce.lights,Ce.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};li.physical={uniforms:ln([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Ao={r:0,b:0,g:0},xr=new qn,dv=new Et;function pv(i,e,t,n,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,f=null,d=0,_=null;function v(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function g(T){let M=!1;const S=v(T);S===null?p(a,l):S&&S.isColor&&(p(S,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,M){const S=v(M);S&&(S.isCubeTexture||S.mapping===ca)?(u===void 0&&(u=new Ht(new no(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:vs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xr.copy(M.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dv.makeRotationFromEuler(xr)),u.material.toneMapped=dt.getTransfer(S.colorSpace)!==xt,(f!==S||d!==S.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ht(new Nr(2,2),new Ut({name:"BackgroundMaterial",uniforms:vs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=dt.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(Ao,qf(i)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:g,addToRenderList:m}}function mv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(b,N,H,B,Y){let J=!1;const X=f(B,H,N);s!==X&&(s=X,c(s.object)),J=_(b,B,H,Y),J&&v(b,B,H,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(b,N,H,B),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,N,H){const B=H.wireframe===!0;let Y=n[b.id];Y===void 0&&(Y={},n[b.id]=Y);let J=Y[N.id];J===void 0&&(J={},Y[N.id]=J);let X=J[B];return X===void 0&&(X=d(l()),J[B]=X),X}function d(b){const N=[],H=[],B=[];for(let Y=0;Y<t;Y++)N[Y]=0,H[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:B,object:b,attributes:{},index:null}}function _(b,N,H,B){const Y=s.attributes,J=N.attributes;let X=0;const $=H.getAttributes();for(const G in $)if($[G].location>=0){const ge=Y[G];let ie=J[G];if(ie===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ge===void 0||ge.attribute!==ie||ie&&ge.data!==ie.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function v(b,N,H,B){const Y={},J=N.attributes;let X=0;const $=H.getAttributes();for(const G in $)if($[G].location>=0){let ge=J[G];ge===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor));const ie={};ie.attribute=ge,ge&&ge.data&&(ie.data=ge.data),Y[G]=ie,X++}s.attributes=Y,s.attributesNum=X,s.index=B}function g(){const b=s.newAttributes;for(let N=0,H=b.length;N<H;N++)b[N]=0}function m(b){p(b,0)}function p(b,N){const H=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;H[b]=1,B[b]===0&&(i.enableVertexAttribArray(b),B[b]=1),Y[b]!==N&&(i.vertexAttribDivisor(b,N),Y[b]=N)}function T(){const b=s.newAttributes,N=s.enabledAttributes;for(let H=0,B=N.length;H<B;H++)N[H]!==b[H]&&(i.disableVertexAttribArray(H),N[H]=0)}function M(b,N,H,B,Y,J,X){X===!0?i.vertexAttribIPointer(b,N,H,Y,J):i.vertexAttribPointer(b,N,H,B,Y,J)}function S(b,N,H,B){g();const Y=B.attributes,J=H.getAttributes(),X=N.defaultAttributeValues;for(const $ in J){const G=J[$];if(G.location>=0){let fe=Y[$];if(fe===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),fe!==void 0){const ge=fe.normalized,ie=fe.itemSize,Ee=e.get(fe);if(Ee===void 0)continue;const we=Ee.buffer,j=Ee.type,se=Ee.bytesPerElement,ae=j===i.INT||j===i.UNSIGNED_INT||fe.gpuType===Rc;if(fe.isInterleavedBufferAttribute){const oe=fe.data,me=oe.stride,De=fe.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<G.locationSize;Ne++)p(G.location+Ne,oe.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<G.locationSize;Ne++)m(G.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ne=0;Ne<G.locationSize;Ne++)M(G.location+Ne,ie/G.locationSize,j,ge,me*se,(De+ie/G.locationSize*Ne)*se,ae)}else{if(fe.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe,fe.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);i.bindBuffer(i.ARRAY_BUFFER,we);for(let oe=0;oe<G.locationSize;oe++)M(G.location+oe,ie/G.locationSize,j,ge,ie*se,ie/G.locationSize*oe*se,ae)}}else if(X!==void 0){const ge=X[$];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(G.location,ge);break;case 3:i.vertexAttrib3fv(G.location,ge);break;case 4:i.vertexAttrib4fv(G.location,ge);break;default:i.vertexAttrib1fv(G.location,ge)}}}}T()}function P(){D();for(const b in n){const N=n[b];for(const H in N){const B=N[H];for(const Y in B)u(B[Y].object),delete B[Y];delete N[H]}delete n[b]}}function I(b){if(n[b.id]===void 0)return;const N=n[b.id];for(const H in N){const B=N[H];for(const Y in B)u(B[Y].object),delete B[Y];delete N[H]}delete n[b.id]}function R(b){for(const N in n){const H=n[N];if(H[b.id]===void 0)continue;const B=H[b.id];for(const Y in B)u(B[Y].object),delete B[Y];delete H[b.id]}}function D(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function _v(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];t.update(_,n,1)}function l(c,u,f,d){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g]*d[g];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Fi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pn&&!D)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:_,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:P,maxSamples:I}}function vv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Er,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||n!==0||r;return r=d,n=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,_){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,M=T*4;let S=p.clippingState||null;l.value=S,S=u(v,d,M,_);for(let P=0;P!==M;++P)S[P]=t[P];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,_,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=_+g*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=_;M!==g;++M,S+=4)o.copy(f[M]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function xv(i){let e=new WeakMap;function t(o,a){return a===Dl?o.mapping=ps:a===Ll&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dl||a===Ll)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new P_(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class jf extends Yf{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=4,Nu=[.125,.215,.35,.446,.526,.582],br=20,Wa=new jf,Fu=new Ke;let Xa=null,qa=0,Ya=0,Za=!1;const Tr=(1+Math.sqrt(5))/2,Kr=1/Tr,Ou=[new z(-Tr,Kr,0),new z(Tr,Kr,0),new z(-Kr,0,Tr),new z(Kr,0,Tr),new z(0,Tr,-Kr),new z(0,Tr,Kr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=Za,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Dn,format:mn,colorSpace:Oi,depthBuffer:!1},r=Bu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sv(s)),this._blurMaterial=yv(s,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,r){const a=new hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Fu),u.toneMapping=Di,u.autoClear=!1;const _=new fa({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),v=new Ht(new no,_);let g=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,g=!0):(_.color.copy(Fu),g=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Ro(r,T*M,p>2?M:0,M,M),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ps||e.mapping===ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ro(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ou[(r-s-1)%Ou.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ht(this._lodPlanes[r],c),d=c.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*br-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const p=[];let T=0;for(let R=0;R<br;++R){const D=R/g,E=Math.exp(-D*D/2);p.push(E),R===0?T+=E:R<m&&(T+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=v,d.mipInt.value=M-n;const S=this._sizeLods[r],P=3*S*(r>M-es?r-M+es:0),I=4*(this._cubeSize-S);Ro(t,P,I,3*S,2*S),l.setRenderTarget(t),l.render(f,Wa)}}function Sv(i){const e=[],t=[],n=[];let r=i;const s=i-es+1+Nu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-es?l=Nu[o-i+es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,v=6,g=3,m=2,p=1,T=new Float32Array(g*v*_),M=new Float32Array(m*v*_),S=new Float32Array(p*v*_);for(let I=0;I<_;I++){const R=I%3*2/3-1,D=I>2?0:-1,E=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];T.set(E,g*v*I),M.set(d,m*v*I);const b=[I,I,I,I,I,I];S.set(b,p*v*I)}const P=new fi;P.setAttribute("position",new Zt(T,g)),P.setAttribute("uv",new Zt(M,m)),P.setAttribute("faceIndex",new Zt(S,p)),e.push(P),r>es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bu(i,e,t){const n=new Xn(i,e,t);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function yv(i,e,t){const n=new Float32Array(br),r=new z(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ku(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Hu(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dl||l===Ll,u=l===ps||l===ms;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new zu(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const _=a.image;return c&&_&&_.height>0||u&&_&&r(_)?(t===null&&(t=new zu(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ev(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Tv(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const _=f.morphAttributes;for(const v in _){const g=_[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(f){const d=[],_=f.index,v=f.attributes.position;let g=0;if(_!==null){const T=_.array;g=_.version;for(let M=0,S=T.length;M<S;M+=3){const P=T[M+0],I=T[M+1],R=T[M+2];d.push(P,I,I,R,R,P)}}else if(v!==void 0){const T=v.array;g=v.version;for(let M=0,S=T.length/3-1;M<S;M+=3){const P=M+0,I=M+1,R=M+2;d.push(P,I,I,R,R,P)}}else return;const m=new(Bf(d)?Xf:Wf)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function bv(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,_){i.drawElements(n,_,s,d*o),t.update(_,n,1)}function c(d,_,v){v!==0&&(i.drawElementsInstanced(n,_,s,d*o,v),t.update(_,n,v))}function u(d,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=_[p];t.update(m,n,1)}function f(d,_,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,_[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,_,0,s,d,0,g,0,v);let p=0;for(let T=0;T<v;T++)p+=_[T]*g[T];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Av(i,e,t){const n=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let b=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var _=b;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*I*4*f),D=new Hf(R,P,I,f);D.type=Pn,D.needsUpdate=!0;const E=S*4;for(let N=0;N<f;N++){const H=p[N],B=T[N],Y=M[N],J=P*I*4*N;for(let X=0;X<H.count;X++){const $=X*E;v===!0&&(r.fromBufferAttribute(H,X),R[J+$+0]=r.x,R[J+$+1]=r.y,R[J+$+2]=r.z,R[J+$+3]=0),g===!0&&(r.fromBufferAttribute(B,X),R[J+$+4]=r.x,R[J+$+5]=r.y,R[J+$+6]=r.z,R[J+$+7]=0),m===!0&&(r.fromBufferAttribute(Y,X),R[J+$+8]=r.x,R[J+$+9]=r.y,R[J+$+10]=r.z,R[J+$+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new it(P,I)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Rv(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Qf extends Kt{constructor(e,t,n,r,s,o,a,l,c,u=os){if(u!==os&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===os&&(n=Ir),n===void 0&&u===gs&&(n=_s),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jf=new Kt,Vu=new Qf(1,1),ed=new Hf,td=new h_,nd=new Zf,Gu=[],Wu=[],Xu=new Float32Array(16),qu=new Float32Array(9),Yu=new Float32Array(4);function Es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Gu[r];if(s===void 0&&(s=new Float32Array(r),Gu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function da(i,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function Lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function Iv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Yu.set(n),i.uniformMatrix2fv(this.addr,!1,Yu),Gt(t,n)}}function Uv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;qu.set(n),i.uniformMatrix3fv(this.addr,!1,qu),Gt(t,n)}}function Nv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Xu.set(n),i.uniformMatrix4fv(this.addr,!1,Xu),Gt(t,n)}}function Fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function kv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function Wv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Vu.compareFunction=zf,s=Vu):s=Jf,t.setTexture2D(e||s,r)}function Xv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||td,r)}function qv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nd,r)}function Yv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ed,r)}function Zv(i){switch(i){case 5126:return Cv;case 35664:return Pv;case 35665:return Dv;case 35666:return Lv;case 35674:return Iv;case 35675:return Uv;case 35676:return Nv;case 5124:case 35670:return Fv;case 35667:case 35671:return Ov;case 35668:case 35672:return zv;case 35669:case 35673:return Bv;case 5125:return kv;case 36294:return Hv;case 36295:return Vv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}function $v(i,e){i.uniform1fv(this.addr,e)}function Kv(i,e){const t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function jv(i,e){const t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function Qv(i,e){const t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function Jv(i,e){const t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ex(i,e){const t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tx(i,e){const t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nx(i,e){i.uniform1iv(this.addr,e)}function ix(i,e){i.uniform2iv(this.addr,e)}function rx(i,e){i.uniform3iv(this.addr,e)}function sx(i,e){i.uniform4iv(this.addr,e)}function ox(i,e){i.uniform1uiv(this.addr,e)}function ax(i,e){i.uniform2uiv(this.addr,e)}function lx(i,e){i.uniform3uiv(this.addr,e)}function cx(i,e){i.uniform4uiv(this.addr,e)}function ux(i,e,t){const n=this.cache,r=e.length,s=da(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jf,s[o])}function hx(i,e,t){const n=this.cache,r=e.length,s=da(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||td,s[o])}function fx(i,e,t){const n=this.cache,r=e.length,s=da(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||nd,s[o])}function dx(i,e,t){const n=this.cache,r=e.length,s=da(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ed,s[o])}function px(i){switch(i){case 5126:return $v;case 35664:return Kv;case 35665:return jv;case 35666:return Qv;case 35674:return Jv;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return rx;case 35669:case 35673:return sx;case 5125:return ox;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return dx}}class mx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zv(t.type)}}class _x{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=px(t.type)}}class gx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Zu(i,e){i.seq.push(e),i.map[e.id]=e}function vx(i,e,t){const n=i.name,r=n.length;for($a.lastIndex=0;;){const s=$a.exec(n),o=$a.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Zu(t,c===void 0?new mx(a,i,e):new _x(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new gx(a),Zu(t,f)),t=f}}}class Xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vx(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function $u(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xx=37297;let Sx=0;function yx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ku=new st;function Mx(i){dt._getMatrix(Ku,dt.workingColorSpace,i);const e=`mat3( ${Ku.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case ua:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ju(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yx(i.getShaderSource(e),o)}else return r}function Ex(i,e){const t=Mx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tx(i,e){let t;switch(e){case Mm:t="Linear";break;case Em:t="Reinhard";break;case Tm:t="Cineon";break;case bm:t="ACESFilmic";break;case Am:t="AgX";break;case Rm:t="Neutral";break;case wm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Co=new z;function bx(){dt.getLuminanceCoefficients(Co);const i=Co.x.toFixed(4),e=Co.y.toFixed(4),t=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Ax(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ns(i){return i!==""}function Qu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(Cx,Dx)}const Px=new Map;function Dx(i,e){let t=at[e];if(t===void 0){const n=Px.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sc(t)}const Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(i){return i.replace(Lx,Ix)}function Ix(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function th(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ux(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===im?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Nx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function Ox(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Af:e="ENVMAP_BLENDING_MULTIPLY";break;case Sm:e="ENVMAP_BLENDING_MIX";break;case ym:e="ENVMAP_BLENDING_ADD";break}return e}function zx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bx(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ux(t),c=Nx(t),u=Fx(t),f=Ox(t),d=zx(t),_=wx(t),v=Ax(s),g=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?at.tonemapping_pars_fragment:"",t.toneMapping!==Di?Tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Ex("linearToOutputTexel",t.outputColorSpace),bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=sc(o),o=Qu(o,t),o=Ju(o,t),a=sc(a),a=Qu(a,t),a=Ju(a,t),o=eh(o),a=eh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+o,S=T+p+a,P=$u(r,r.VERTEX_SHADER,M),I=$u(r,r.FRAGMENT_SHADER,S);r.attachShader(g,P),r.attachShader(g,I),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(N){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(g).trim(),B=r.getShaderInfoLog(P).trim(),Y=r.getShaderInfoLog(I).trim();let J=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,P,I);else{const $=ju(r,P,"vertex"),G=ju(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+$+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||Y==="")&&(X=!1);X&&(N.diagnostics={runnable:J,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(P),r.deleteShader(I),D=new Xo(r,g),E=Rx(r,g)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(g,xx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=I,this}let kx=0;class Hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vx(e),t.set(e,n)),n}}class Vx{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}}function Gx(i,e,t,n,r,s,o){const a=new Vf,l=new Hx,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,N,H,B){const Y=H.fog,J=B.geometry,X=E.isMeshStandardMaterial?H.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),G=$&&$.mapping===ca?$.image.height:null,fe=v[E.type];E.precision!==null&&(_=r.getMaxPrecision(E.precision),_!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const ge=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ie=ge!==void 0?ge.length:0;let Ee=0;J.morphAttributes.position!==void 0&&(Ee=1),J.morphAttributes.normal!==void 0&&(Ee=2),J.morphAttributes.color!==void 0&&(Ee=3);let we,j,se,ae;if(fe){const ut=li[fe];we=ut.vertexShader,j=ut.fragmentShader}else we=E.vertexShader,j=E.fragmentShader,l.update(E),se=l.getVertexShaderID(E),ae=l.getFragmentShaderID(E);const oe=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),De=B.isInstancedMesh===!0,Ne=B.isBatchedMesh===!0,qe=!!E.map,Ye=!!E.matcap,ct=!!$,F=!!E.aoMap,We=!!E.lightMap,Xe=!!E.bumpMap,Qe=!!E.normalMap,Ve=!!E.displacementMap,je=!!E.emissiveMap,ze=!!E.metalnessMap,L=!!E.roughnessMap,w=E.anisotropy>0,V=E.clearcoat>0,Q=E.dispersion>0,ue=E.iridescence>0,re=E.sheen>0,Oe=E.transmission>0,xe=w&&!!E.anisotropyMap,Se=V&&!!E.clearcoatMap,nt=V&&!!E.clearcoatNormalMap,ve=V&&!!E.clearcoatRoughnessMap,Re=ue&&!!E.iridescenceMap,Le=ue&&!!E.iridescenceThicknessMap,Ue=re&&!!E.sheenColorMap,ye=re&&!!E.sheenRoughnessMap,Ze=!!E.specularMap,Ge=!!E.specularColorMap,Je=!!E.specularIntensityMap,O=Oe&&!!E.transmissionMap,te=Oe&&!!E.thicknessMap,Z=!!E.gradientMap,ce=!!E.alphaMap,Ae=E.alphaTest>0,Pe=!!E.alphaHash,et=!!E.extensions;let gt=Di;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Tt={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:we,fragmentShader:j,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:Ne,batchingColor:Ne&&B._colorsTexture!==null,instancing:De,instancingColor:De&&B.instanceColor!==null,instancingMorph:De&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Oi,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:Ye,envMap:ct,envMapMode:ct&&$.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:We,bumpMap:Xe,normalMap:Qe,displacementMap:d&&Ve,emissiveMap:je,normalMapObjectSpace:Qe&&E.normalMapType===Im,normalMapTangentSpace:Qe&&E.normalMapType===Lm,metalnessMap:ze,roughnessMap:L,anisotropy:w,anisotropyMap:xe,clearcoat:V,clearcoatMap:Se,clearcoatNormalMap:nt,clearcoatRoughnessMap:ve,dispersion:Q,iridescence:ue,iridescenceMap:Re,iridescenceThicknessMap:Le,sheen:re,sheenColorMap:Ue,sheenRoughnessMap:ye,specularMap:Ze,specularColorMap:Ge,specularIntensityMap:Je,transmission:Oe,transmissionMap:O,thicknessMap:te,gradientMap:Z,opaque:E.transparent===!1&&E.blending===rr&&E.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ae,alphaHash:Pe,combine:E.combine,mapUv:qe&&g(E.map.channel),aoMapUv:F&&g(E.aoMap.channel),lightMapUv:We&&g(E.lightMap.channel),bumpMapUv:Xe&&g(E.bumpMap.channel),normalMapUv:Qe&&g(E.normalMap.channel),displacementMapUv:Ve&&g(E.displacementMap.channel),emissiveMapUv:je&&g(E.emissiveMap.channel),metalnessMapUv:ze&&g(E.metalnessMap.channel),roughnessMapUv:L&&g(E.roughnessMap.channel),anisotropyMapUv:xe&&g(E.anisotropyMap.channel),clearcoatMapUv:Se&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:nt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(E.sheenRoughnessMap.channel),specularMapUv:Ze&&g(E.specularMap.channel),specularColorMapUv:Ge&&g(E.specularColorMap.channel),specularIntensityMapUv:Je&&g(E.specularIntensityMap.channel),transmissionMapUv:O&&g(E.transmissionMap.channel),thicknessMapUv:te&&g(E.thicknessMap.channel),alphaMapUv:ce&&g(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Qe||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(qe||ce),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:me,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ee,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&dt.getTransfer(E.map.colorSpace)===xt,decodeVideoTextureEmissive:je&&E.emissiveMap.isVideoTexture===!0&&dt.getTransfer(E.emissiveMap.colorSpace)===xt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===Sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:et&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&E.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)b.push(N),b.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(T(b,E),M(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function T(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function M(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const b=v[E.type];let N;if(b){const H=li[b];N=ia.clone(H.uniforms)}else N=E.uniforms;return N}function P(E,b){let N;for(let H=0,B=u.length;H<B;H++){const Y=u[H];if(Y.cacheKey===b){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new Bx(i,b,E,s),u.push(N)),N}function I(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:P,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:D}}function Wx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ih(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,_,v,g,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:_,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=_,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,d,_,v,g,m){const p=o(f,d,_,v,g,m);_.transmission>0?n.push(p):_.transparent===!0?r.push(p):t.push(p)}function l(f,d,_,v,g,m){const p=o(f,d,_,v,g,m);_.transmission>0?n.unshift(p):_.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||Xx),n.length>1&&n.sort(d||nh),r.length>1&&r.sort(d||nh)}function u(){for(let f=e,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function qx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ih,i.set(n,[o])):r>=s.length?(o=new ih,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ke};break;case"SpotLight":t={position:new z,direction:new z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Zx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $x=0;function Kx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jx(i){const e=new Yx,t=Zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const r=new z,s=new Et,o=new Et;function a(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let _=0,v=0,g=0,m=0,p=0,T=0,M=0,S=0,P=0,I=0,R=0;c.sort(Kx);for(let E=0,b=c.length;E<b;E++){const N=c[E],H=N.color,B=N.intensity,Y=N.distance,J=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=H.r*B,f+=H.g*B,d+=H.b*B;else if(N.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(N.sh.coefficients[X],B);R++}else if(N.isDirectionalLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const $=N.shadow,G=t.get(N);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[_]=G,n.directionalShadowMap[_]=J,n.directionalShadowMatrix[_]=N.shadow.matrix,T++}n.directional[_]=X,_++}else if(N.isSpotLight){const X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(H).multiplyScalar(B),X.distance=Y,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,n.spot[g]=X;const $=N.shadow;if(N.map&&(n.spotLightMap[P]=N.map,P++,$.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[g]=$.matrix,N.castShadow){const G=t.get(N);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=J,S++}g++}else if(N.isRectAreaLight){const X=e.get(N);X.color.copy(H).multiplyScalar(B),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=X,m++}else if(N.isPointLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const $=N.shadow,G=t.get(N);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=J,n.pointShadowMatrix[v]=N.shadow.matrix,M++}n.point[v]=X,v++}else if(N.isHemisphereLight){const X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(B),X.groundColor.copy(N.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==_||D.pointLength!==v||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==M||D.numSpotShadows!==S||D.numSpotMaps!==P||D.numLightProbes!==R)&&(n.directional.length=_,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,D.directionalLength=_,D.pointLength=v,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=M,D.numSpotShadows=S,D.numSpotMaps=P,D.numLightProbes=R,n.version=$x++)}function l(c,u){let f=0,d=0,_=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const M=c[p];if(M.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(M.isSpotLight){const S=n.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),_++}else if(M.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function rh(i){const e=new jx(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qx(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rh(i),e.set(r,[a])):s>=o.length?(a=new rh(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Jx extends ha{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eS extends ha{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iS(i,e,t){let n=new $f;const r=new it,s=new it,o=new Rt,a=new Jx({depthPacking:Dm}),l=new eS,c={},u=t.maxTextureSize,f={[lr]:Sn,[Sn]:lr,[dn]:dn},d=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:tS,fragmentShader:nS}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const v=new fi;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ht(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bf;let p=this.type;this.render=function(I,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const E=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ei),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=p!==Ei&&this.type===Ei,Y=p===Ei&&this.type!==Ei;for(let J=0,X=I.length;J<X;J++){const $=I[J],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const fe=G.getFrameExtents();if(r.multiply(fe),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,G.mapSize.y=s.y)),G.map===null||B===!0||Y===!0){const ie=this.type!==Ei?{minFilter:un,magFilter:un}:{};G.map!==null&&G.map.dispose(),G.map=new Xn(r.x,r.y,ie),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ge=G.getViewportCount();for(let ie=0;ie<ge;ie++){const Ee=G.getViewport(ie);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),H.viewport(o),G.updateMatrices($,ie),n=G.getFrustum(),S(R,D,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Ei&&T(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,b,N)};function T(I,R){const D=e.update(g);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Xn(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(R,null,D,d,g,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(R,null,D,_,g,null)}function M(I,R,D,E){let b=null;const N=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)b=N;else if(b=D.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=b.uuid,B=R.uuid;let Y=c[H];Y===void 0&&(Y={},c[H]=Y);let J=Y[B];J===void 0&&(J=b.clone(),Y[B]=J,R.addEventListener("dispose",P)),b=J}if(b.visible=R.visible,b.wireframe=R.wireframe,E===Ei?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:f[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=i.properties.get(b);H.light=D}return b}function S(I,R,D,E,b){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===Ei)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const B=e.update(I),Y=I.material;if(Array.isArray(Y)){const J=B.groups;for(let X=0,$=J.length;X<$;X++){const G=J[X],fe=Y[G.materialIndex];if(fe&&fe.visible){const ge=M(I,fe,E,b);I.onBeforeShadow(i,I,R,D,B,ge,G),i.renderBufferDirect(D,null,B,ge,I,G),I.onAfterShadow(i,I,R,D,B,ge,G)}}}else if(Y.visible){const J=M(I,Y,E,b);I.onBeforeShadow(i,I,R,D,B,J,null),i.renderBufferDirect(D,null,B,J,I,null),I.onAfterShadow(i,I,R,D,B,J,null)}}const H=I.children;for(let B=0,Y=H.length;B<Y;B++)S(H[B],R,D,E,b)}function P(I){I.target.removeEventListener("dispose",P);for(const D in c){const E=c[D],b=I.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const rS={[Tl]:bl,[wl]:Cl,[Al]:Pl,[ds]:Rl,[bl]:Tl,[Cl]:wl,[Pl]:Al,[Rl]:ds};function sS(i,e){function t(){let O=!1;const te=new Rt;let Z=null;const ce=new Rt(0,0,0,0);return{setMask:function(Ae){Z!==Ae&&!O&&(i.colorMask(Ae,Ae,Ae,Ae),Z=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,Pe,et,gt,Tt){Tt===!0&&(Ae*=gt,Pe*=gt,et*=gt),te.set(Ae,Pe,et,gt),ce.equals(te)===!1&&(i.clearColor(Ae,Pe,et,gt),ce.copy(te))},reset:function(){O=!1,Z=null,ce.set(-1,0,0,0)}}}function n(){let O=!1,te=!1,Z=null,ce=null,Ae=null;return{setReversed:function(Pe){if(te!==Pe){const et=e.get("EXT_clip_control");te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const gt=Ae;Ae=null,this.setClear(gt)}te=Pe},getReversed:function(){return te},setTest:function(Pe){Pe?oe(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Pe){Z!==Pe&&!O&&(i.depthMask(Pe),Z=Pe)},setFunc:function(Pe){if(te&&(Pe=rS[Pe]),ce!==Pe){switch(Pe){case Tl:i.depthFunc(i.NEVER);break;case bl:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Al:i.depthFunc(i.EQUAL);break;case Rl:i.depthFunc(i.GEQUAL);break;case Cl:i.depthFunc(i.GREATER);break;case Pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Pe}},setLocked:function(Pe){O=Pe},setClear:function(Pe){Ae!==Pe&&(te&&(Pe=1-Pe),i.clearDepth(Pe),Ae=Pe)},reset:function(){O=!1,Z=null,ce=null,Ae=null,te=!1}}}function r(){let O=!1,te=null,Z=null,ce=null,Ae=null,Pe=null,et=null,gt=null,Tt=null;return{setTest:function(ut){O||(ut?oe(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(ut){te!==ut&&!O&&(i.stencilMask(ut),te=ut)},setFunc:function(ut,bt,jt){(Z!==ut||ce!==bt||Ae!==jt)&&(i.stencilFunc(ut,bt,jt),Z=ut,ce=bt,Ae=jt)},setOp:function(ut,bt,jt){(Pe!==ut||et!==bt||gt!==jt)&&(i.stencilOp(ut,bt,jt),Pe=ut,et=bt,gt=jt)},setLocked:function(ut){O=ut},setClear:function(ut){Tt!==ut&&(i.clearStencil(ut),Tt=ut)},reset:function(){O=!1,te=null,Z=null,ce=null,Ae=null,Pe=null,et=null,gt=null,Tt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,_=[],v=null,g=!1,m=null,p=null,T=null,M=null,S=null,P=null,I=null,R=new Ke(0,0,0),D=0,E=!1,b=null,N=null,H=null,B=null,Y=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=$>=2);let fe=null,ge={};const ie=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),we=new Rt().fromArray(ie),j=new Rt().fromArray(Ee);function se(O,te,Z,ce){const Ae=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(O,Pe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<Z;et++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(te+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Pe}const ae={};ae[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(ds),Xe(!1),Qe(au),oe(i.CULL_FACE),F(ei);function oe(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function me(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function De(O,te){return f[O]!==te?(i.bindFramebuffer(O,te),f[O]=te,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=te),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Ne(O,te){let Z=_,ce=!1;if(O){Z=d.get(te),Z===void 0&&(Z=[],d.set(te,Z));const Ae=O.textures;if(Z.length!==Ae.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,et=Ae.length;Pe<et;Pe++)Z[Pe]=i.COLOR_ATTACHMENT0+Pe;Z.length=Ae.length,ce=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ce=!0);ce&&i.drawBuffers(Z)}function qe(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const Ye={[Qi]:i.FUNC_ADD,[rm]:i.FUNC_SUBTRACT,[sm]:i.FUNC_REVERSE_SUBTRACT};Ye[om]=i.MIN,Ye[am]=i.MAX;const ct={[lm]:i.ZERO,[yl]:i.ONE,[cm]:i.SRC_COLOR,[Ml]:i.SRC_ALPHA,[mm]:i.SRC_ALPHA_SATURATE,[dm]:i.DST_COLOR,[hm]:i.DST_ALPHA,[um]:i.ONE_MINUS_SRC_COLOR,[El]:i.ONE_MINUS_SRC_ALPHA,[pm]:i.ONE_MINUS_DST_COLOR,[fm]:i.ONE_MINUS_DST_ALPHA,[_m]:i.CONSTANT_COLOR,[gm]:i.ONE_MINUS_CONSTANT_COLOR,[vm]:i.CONSTANT_ALPHA,[xm]:i.ONE_MINUS_CONSTANT_ALPHA};function F(O,te,Z,ce,Ae,Pe,et,gt,Tt,ut){if(O===ei){g===!0&&(me(i.BLEND),g=!1);return}if(g===!1&&(oe(i.BLEND),g=!0),O!==wf){if(O!==m||ut!==E){if((p!==Qi||S!==Qi)&&(i.blendEquation(i.FUNC_ADD),p=Qi,S=Qi),ut)switch(O){case rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sl:i.blendFunc(i.ONE,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,M=null,P=null,I=null,R.set(0,0,0),D=0,m=O,E=ut}return}Ae=Ae||te,Pe=Pe||Z,et=et||ce,(te!==p||Ae!==S)&&(i.blendEquationSeparate(Ye[te],Ye[Ae]),p=te,S=Ae),(Z!==T||ce!==M||Pe!==P||et!==I)&&(i.blendFuncSeparate(ct[Z],ct[ce],ct[Pe],ct[et]),T=Z,M=ce,P=Pe,I=et),(gt.equals(R)===!1||Tt!==D)&&(i.blendColor(gt.r,gt.g,gt.b,Tt),R.copy(gt),D=Tt),m=O,E=!1}function We(O,te){O.side===dn?me(i.CULL_FACE):oe(i.CULL_FACE);let Z=O.side===Sn;te&&(Z=!Z),Xe(Z),O.blending===rr&&O.transparent===!1?F(ei):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const ce=O.stencilWrite;a.setTest(ce),ce&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),je(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function Qe(O){O!==tm?(oe(i.CULL_FACE),O!==N&&(O===au?i.cullFace(i.BACK):O===nm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),N=O}function Ve(O){O!==H&&(X&&i.lineWidth(O),H=O)}function je(O,te,Z){O?(oe(i.POLYGON_OFFSET_FILL),(B!==te||Y!==Z)&&(i.polygonOffset(te,Z),B=te,Y=Z)):me(i.POLYGON_OFFSET_FILL)}function ze(O){O?oe(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+J-1),fe!==O&&(i.activeTexture(O),fe=O)}function w(O,te,Z){Z===void 0&&(fe===null?Z=i.TEXTURE0+J-1:Z=fe);let ce=ge[Z];ce===void 0&&(ce={type:void 0,texture:void 0},ge[Z]=ce),(ce.type!==O||ce.texture!==te)&&(fe!==Z&&(i.activeTexture(Z),fe=Z),i.bindTexture(O,te||ae[O]),ce.type=O,ce.texture=te)}function V(){const O=ge[fe];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(O){we.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),we.copy(O))}function ye(O){j.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function Ze(O,te){let Z=c.get(te);Z===void 0&&(Z=new WeakMap,c.set(te,Z));let ce=Z.get(O);ce===void 0&&(ce=i.getUniformBlockIndex(te,O.name),Z.set(O,ce))}function Ge(O,te){const ce=c.get(te).get(O);l.get(te)!==ce&&(i.uniformBlockBinding(te,ce,O.__bindingPointIndex),l.set(te,ce))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},fe=null,ge={},f={},d=new WeakMap,_=[],v=null,g=!1,m=null,p=null,T=null,M=null,S=null,P=null,I=null,R=new Ke(0,0,0),D=0,E=!1,b=null,N=null,H=null,B=null,Y=null,we.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:me,bindFramebuffer:De,drawBuffers:Ne,useProgram:qe,setBlending:F,setMaterial:We,setFlipSided:Xe,setCullFace:Qe,setLineWidth:Ve,setPolygonOffset:je,setScissorTest:ze,activeTexture:L,bindTexture:w,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:ue,texImage2D:Re,texImage3D:Le,updateUBOMapping:Ze,uniformBlockBinding:Ge,texStorage2D:nt,texStorage3D:ve,texSubImage2D:re,texSubImage3D:Oe,compressedTexSubImage2D:xe,compressedTexSubImage3D:Se,scissor:Ue,viewport:ye,reset:Je}}function sh(i,e,t,n){const r=oS(n);switch(t){case Lf:return i*e;case Uf:return i*e;case Nf:return i*e*2;case Dc:return i*e/r.components*r.byteLength;case Lc:return i*e/r.components*r.byteLength;case Ff:return i*e*2/r.components*r.byteLength;case Ic:return i*e*2/r.components*r.byteLength;case If:return i*e*3/r.components*r.byteLength;case mn:return i*e*4/r.components*r.byteLength;case Uc:return i*e*4/r.components*r.byteLength;case ko:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Fl:return Math.max(i,16)*Math.max(e,8)/4;case Il:case Nl:return Math.max(i,8)*Math.max(e,8)/2;case Ol:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wo:case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Of:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ic:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oS(i){switch(i){case Fi:case Cf:return{byteLength:1,components:1};case Qs:case Pf:case Dn:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case Ir:case Rc:case Pn:return{byteLength:4,components:1};case Df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function aS(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,w){return _?new OffscreenCanvas(L,w):eo("canvas")}function g(L,w,V){let Q=1;const ue=ze(L);if((ue.width>V||ue.height>V)&&(Q=V/Math.max(ue.width,ue.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(Q*ue.width),Oe=Math.floor(Q*ue.height);f===void 0&&(f=v(re,Oe));const xe=w?v(re,Oe):f;return xe.width=re,xe.height=Oe,xe.getContext("2d").drawImage(L,0,0,re,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+re+"x"+Oe+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,w,V,Q,ue=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=w;if(w===i.RED&&(V===i.FLOAT&&(re=i.R32F),V===i.HALF_FLOAT&&(re=i.R16F),V===i.UNSIGNED_BYTE&&(re=i.R8)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.R8UI),V===i.UNSIGNED_SHORT&&(re=i.R16UI),V===i.UNSIGNED_INT&&(re=i.R32UI),V===i.BYTE&&(re=i.R8I),V===i.SHORT&&(re=i.R16I),V===i.INT&&(re=i.R32I)),w===i.RG&&(V===i.FLOAT&&(re=i.RG32F),V===i.HALF_FLOAT&&(re=i.RG16F),V===i.UNSIGNED_BYTE&&(re=i.RG8)),w===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RG8UI),V===i.UNSIGNED_SHORT&&(re=i.RG16UI),V===i.UNSIGNED_INT&&(re=i.RG32UI),V===i.BYTE&&(re=i.RG8I),V===i.SHORT&&(re=i.RG16I),V===i.INT&&(re=i.RG32I)),w===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RGB8UI),V===i.UNSIGNED_SHORT&&(re=i.RGB16UI),V===i.UNSIGNED_INT&&(re=i.RGB32UI),V===i.BYTE&&(re=i.RGB8I),V===i.SHORT&&(re=i.RGB16I),V===i.INT&&(re=i.RGB32I)),w===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),V===i.UNSIGNED_INT&&(re=i.RGBA32UI),V===i.BYTE&&(re=i.RGBA8I),V===i.SHORT&&(re=i.RGBA16I),V===i.INT&&(re=i.RGBA32I)),w===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),w===i.RGBA){const Oe=ue?ua:dt.getTransfer(Q);V===i.FLOAT&&(re=i.RGBA32F),V===i.HALF_FLOAT&&(re=i.RGBA16F),V===i.UNSIGNED_BYTE&&(re=Oe===xt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(L,w){let V;return L?w===null||w===Ir||w===_s?V=i.DEPTH24_STENCIL8:w===Pn?V=i.DEPTH32F_STENCIL8:w===Qs&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ir||w===_s?V=i.DEPTH_COMPONENT24:w===Pn?V=i.DEPTH_COMPONENT32F:w===Qs&&(V=i.DEPTH_COMPONENT16),V}function P(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==un&&L.minFilter!==qt?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function I(L){const w=L.target;w.removeEventListener("dispose",I),D(w),w.isVideoTexture&&u.delete(w)}function R(L){const w=L.target;w.removeEventListener("dispose",R),b(w)}function D(L){const w=n.get(L);if(w.__webglInit===void 0)return;const V=L.source,Q=d.get(V);if(Q){const ue=Q[w.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&E(L),Object.keys(Q).length===0&&d.delete(V)}n.remove(L)}function E(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const V=L.source,Q=d.get(V);delete Q[w.__cacheKey],o.memory.textures--}function b(L){const w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ue=0;ue<w.__webglFramebuffer[Q].length;ue++)i.deleteFramebuffer(w.__webglFramebuffer[Q][ue]);else i.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[Q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=L.textures;for(let Q=0,ue=V.length;Q<ue;Q++){const re=n.get(V[Q]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(L)}let N=0;function H(){N=0}function B(){const L=N;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),N+=1,L}function Y(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function J(L,w){const V=n.get(L);if(L.isVideoTexture&&Ve(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,L,w);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function X(L,w){const V=n.get(L);if(L.version>0&&V.__version!==L.version){j(V,L,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function $(L,w){const V=n.get(L);if(L.version>0&&V.__version!==L.version){j(V,L,w);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function G(L,w){const V=n.get(L);if(L.version>0&&V.__version!==L.version){se(V,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}const fe={[ss]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},ge={[un]:i.NEAREST,[Cm]:i.NEAREST_MIPMAP_NEAREST,[lo]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},ie={[Um]:i.NEVER,[km]:i.ALWAYS,[Nm]:i.LESS,[zf]:i.LEQUAL,[Fm]:i.EQUAL,[Bm]:i.GEQUAL,[Om]:i.GREATER,[zm]:i.NOTEQUAL};function Ee(L,w){if(w.type===Pn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===qt||w.magFilter===Ea||w.magFilter===lo||w.magFilter===Ri||w.minFilter===qt||w.minFilter===Ea||w.minFilter===lo||w.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,fe[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,fe[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,fe[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ge[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ge[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===un||w.minFilter!==lo&&w.minFilter!==Ri||w.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function we(L,w){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",I));const Q=w.source;let ue=d.get(Q);ue===void 0&&(ue={},d.set(Q,ue));const re=Y(w);if(re!==L.__cacheKey){ue[re]===void 0&&(ue[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ue[re].usedTimes++;const Oe=ue[L.__cacheKey];Oe!==void 0&&(ue[L.__cacheKey].usedTimes--,Oe.usedTimes===0&&E(w)),L.__cacheKey=re,L.__webglTexture=ue[re].texture}return V}function j(L,w,V){let Q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=i.TEXTURE_3D);const ue=we(L,w),re=w.source;t.bindTexture(Q,L.__webglTexture,i.TEXTURE0+V);const Oe=n.get(re);if(re.version!==Oe.__version||ue===!0){t.activeTexture(i.TEXTURE0+V);const xe=dt.getPrimaries(dt.workingColorSpace),Se=w.colorSpace===pn?null:dt.getPrimaries(w.colorSpace),nt=w.colorSpace===pn||xe===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ve=g(w.image,!1,r.maxTextureSize);ve=je(w,ve);const Re=s.convert(w.format,w.colorSpace),Le=s.convert(w.type);let Ue=M(w.internalFormat,Re,Le,w.colorSpace,w.isVideoTexture);Ee(Q,w);let ye;const Ze=w.mipmaps,Ge=w.isVideoTexture!==!0,Je=Oe.__version===void 0||ue===!0,O=re.dataReady,te=P(w,ve);if(w.isDepthTexture)Ue=S(w.format===gs,w.type),Je&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Ue,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Re,Le,null));else if(w.isDataTexture)if(Ze.length>0){Ge&&Je&&t.texStorage2D(i.TEXTURE_2D,te,Ue,Ze[0].width,Ze[0].height);for(let Z=0,ce=Ze.length;Z<ce;Z++)ye=Ze[Z],Ge?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ye.width,ye.height,Re,Le,ye.data):t.texImage2D(i.TEXTURE_2D,Z,Ue,ye.width,ye.height,0,Re,Le,ye.data);w.generateMipmaps=!1}else Ge?(Je&&t.texStorage2D(i.TEXTURE_2D,te,Ue,ve.width,ve.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve.width,ve.height,Re,Le,ve.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Re,Le,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ue,Ze[0].width,Ze[0].height,ve.depth);for(let Z=0,ce=Ze.length;Z<ce;Z++)if(ye=Ze[Z],w.format!==mn)if(Re!==null)if(Ge){if(O)if(w.layerUpdates.size>0){const Ae=sh(ye.width,ye.height,w.format,w.type);for(const Pe of w.layerUpdates){const et=ye.data.subarray(Pe*Ae/ye.data.BYTES_PER_ELEMENT,(Pe+1)*Ae/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Pe,ye.width,ye.height,1,Re,et)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,ve.depth,Re,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ue,ye.width,ye.height,ve.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,ve.depth,Re,Le,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ue,ye.width,ye.height,ve.depth,0,Re,Le,ye.data)}else{Ge&&Je&&t.texStorage2D(i.TEXTURE_2D,te,Ue,Ze[0].width,Ze[0].height);for(let Z=0,ce=Ze.length;Z<ce;Z++)ye=Ze[Z],w.format!==mn?Re!==null?Ge?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ye.width,ye.height,Re,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ye.width,ye.height,Re,Le,ye.data):t.texImage2D(i.TEXTURE_2D,Z,Ue,ye.width,ye.height,0,Re,Le,ye.data)}else if(w.isDataArrayTexture)if(Ge){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ue,ve.width,ve.height,ve.depth),O)if(w.layerUpdates.size>0){const Z=sh(ve.width,ve.height,w.format,w.type);for(const ce of w.layerUpdates){const Ae=ve.data.subarray(ce*Z/ve.data.BYTES_PER_ELEMENT,(ce+1)*Z/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,ve.width,ve.height,1,Re,Le,Ae)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Re,Le,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,ve.width,ve.height,ve.depth,0,Re,Le,ve.data);else if(w.isData3DTexture)Ge?(Je&&t.texStorage3D(i.TEXTURE_3D,te,Ue,ve.width,ve.height,ve.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Re,Le,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,ve.width,ve.height,ve.depth,0,Re,Le,ve.data);else if(w.isFramebufferTexture){if(Je)if(Ge)t.texStorage2D(i.TEXTURE_2D,te,Ue,ve.width,ve.height);else{let Z=ve.width,ce=ve.height;for(let Ae=0;Ae<te;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ue,Z,ce,0,Re,Le,null),Z>>=1,ce>>=1}}else if(Ze.length>0){if(Ge&&Je){const Z=ze(Ze[0]);t.texStorage2D(i.TEXTURE_2D,te,Ue,Z.width,Z.height)}for(let Z=0,ce=Ze.length;Z<ce;Z++)ye=Ze[Z],Ge?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Re,Le,ye):t.texImage2D(i.TEXTURE_2D,Z,Ue,Re,Le,ye);w.generateMipmaps=!1}else if(Ge){if(Je){const Z=ze(ve);t.texStorage2D(i.TEXTURE_2D,te,Ue,Z.width,Z.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Le,ve)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Re,Le,ve);m(w)&&p(Q),Oe.__version=re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function se(L,w,V){if(w.image.length!==6)return;const Q=we(L,w),ue=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);const re=n.get(ue);if(ue.version!==re.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);const Oe=dt.getPrimaries(dt.workingColorSpace),xe=w.colorSpace===pn?null:dt.getPrimaries(w.colorSpace),Se=w.colorSpace===pn||Oe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const nt=w.isCompressedTexture||w.image[0].isCompressedTexture,ve=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let ce=0;ce<6;ce++)!nt&&!ve?Re[ce]=g(w.image[ce],!0,r.maxCubemapSize):Re[ce]=ve?w.image[ce].image:w.image[ce],Re[ce]=je(w,Re[ce]);const Le=Re[0],Ue=s.convert(w.format,w.colorSpace),ye=s.convert(w.type),Ze=M(w.internalFormat,Ue,ye,w.colorSpace),Ge=w.isVideoTexture!==!0,Je=re.__version===void 0||Q===!0,O=ue.dataReady;let te=P(w,Le);Ee(i.TEXTURE_CUBE_MAP,w);let Z;if(nt){Ge&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Ze,Le.width,Le.height);for(let ce=0;ce<6;ce++){Z=Re[ce].mipmaps;for(let Ae=0;Ae<Z.length;Ae++){const Pe=Z[Ae];w.format!==mn?Ue!==null?Ge?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,Pe.width,Pe.height,Ue,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,Ze,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,Pe.width,Pe.height,Ue,ye,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,Ze,Pe.width,Pe.height,0,Ue,ye,Pe.data)}}}else{if(Z=w.mipmaps,Ge&&Je){Z.length>0&&te++;const ce=ze(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Ze,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ve){Ge?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Re[ce].width,Re[ce].height,Ue,ye,Re[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ze,Re[ce].width,Re[ce].height,0,Ue,ye,Re[ce].data);for(let Ae=0;Ae<Z.length;Ae++){const et=Z[Ae].image[ce].image;Ge?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,et.width,et.height,Ue,ye,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,Ze,et.width,et.height,0,Ue,ye,et.data)}}else{Ge?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ue,ye,Re[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ze,Ue,ye,Re[ce]);for(let Ae=0;Ae<Z.length;Ae++){const Pe=Z[Ae];Ge?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,Ue,ye,Pe.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,Ze,Ue,ye,Pe.image[ce])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),re.__version=ue.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ae(L,w,V,Q,ue,re){const Oe=s.convert(V.format,V.colorSpace),xe=s.convert(V.type),Se=M(V.internalFormat,Oe,xe,V.colorSpace),nt=n.get(w),ve=n.get(V);if(ve.__renderTarget=w,!nt.__hasExternalTextures){const Re=Math.max(1,w.width>>re),Le=Math.max(1,w.height>>re);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,re,Se,Re,Le,w.depth,0,Oe,xe,null):t.texImage2D(ue,re,Se,Re,Le,0,Oe,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Qe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ue,ve.__webglTexture,0,Xe(w)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ue,ve.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(L,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const Q=w.depthTexture,ue=Q&&Q.isDepthTexture?Q.type:null,re=S(w.stencilBuffer,ue),Oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=Xe(w);Qe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,re,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,re,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,re,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,L)}else{const Q=w.textures;for(let ue=0;ue<Q.length;ue++){const re=Q[ue],Oe=s.convert(re.format,re.colorSpace),xe=s.convert(re.type),Se=M(re.internalFormat,Oe,xe,re.colorSpace),nt=Xe(w);V&&Qe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Se,w.width,w.height):Qe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Se,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Se,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(w.depthTexture);Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const ue=Q.__webglTexture,re=Xe(w);if(w.depthTexture.format===os)Qe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(w.depthTexture.format===gs)Qe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function De(L){const w=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const Q=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const ue=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",ue)};Q.addEventListener("dispose",ue),w.__depthDisposeCallback=ue}w.__boundDepthTexture=Q}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");me(w.__webglFramebuffer,L)}else if(V){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=i.createRenderbuffer(),oe(w.__webglDepthbuffer[Q],L,!1);else{const ue=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,re)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),oe(w.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(L,w,V){const Q=n.get(L);w!==void 0&&ae(Q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&De(L)}function qe(L){const w=L.texture,V=n.get(L),Q=n.get(w);L.addEventListener("dispose",R);const ue=L.textures,re=L.isWebGLCubeRenderTarget===!0,Oe=ue.length>1;if(Oe||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=w.version,o.memory.textures++),re){V.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[xe]=[];for(let Se=0;Se<w.mipmaps.length;Se++)V.__webglFramebuffer[xe][Se]=i.createFramebuffer()}else V.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)V.__webglFramebuffer[xe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let xe=0,Se=ue.length;xe<Se;xe++){const nt=n.get(ue[xe]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Qe(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let xe=0;xe<ue.length;xe++){const Se=ue[xe];V.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[xe]);const nt=s.convert(Se.format,Se.colorSpace),ve=s.convert(Se.type),Re=M(Se.internalFormat,nt,ve,Se.colorSpace,L.isXRRenderTarget===!0),Le=Xe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Re,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,V.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,w);for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)ae(V.__webglFramebuffer[xe][Se],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else ae(V.__webglFramebuffer[xe],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let xe=0,Se=ue.length;xe<Se;xe++){const nt=ue[xe],ve=n.get(nt);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),Ee(i.TEXTURE_2D,nt),ae(V.__webglFramebuffer,L,nt,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),m(nt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Q.__webglTexture),Ee(xe,w),w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)ae(V.__webglFramebuffer[Se],L,w,i.COLOR_ATTACHMENT0,xe,Se);else ae(V.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,xe,0);m(w)&&p(xe),t.unbindTexture()}L.depthBuffer&&De(L)}function Ye(L){const w=L.textures;for(let V=0,Q=w.length;V<Q;V++){const ue=w[V];if(m(ue)){const re=T(L),Oe=n.get(ue).__webglTexture;t.bindTexture(re,Oe),p(re),t.unbindTexture()}}}const ct=[],F=[];function We(L){if(L.samples>0){if(Qe(L)===!1){const w=L.textures,V=L.width,Q=L.height;let ue=i.COLOR_BUFFER_BIT;const re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(L),xe=w.length>1;if(xe)for(let Se=0;Se<w.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Se]);const nt=n.get(w[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,ue,i.NEAREST),l===!0&&(ct.length=0,F.length=0,ct.push(i.COLOR_ATTACHMENT0+Se),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(re),F.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Se=0;Se<w.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Se]);const nt=n.get(w[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Xe(L){return Math.min(r.maxSamples,L.samples)}function Qe(L){const w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ve(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function je(L,w){const V=L.colorSpace,Q=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Oi&&V!==pn&&(dt.getTransfer(V)===xt?(Q!==mn||ue!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=Ne,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Qe}function lS(i,e){function t(n,r=pn){let s;const o=dt.getTransfer(r);if(n===Fi)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Df)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cf)return i.BYTE;if(n===Pf)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Rc)return i.INT;if(n===Ir)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===Lf)return i.ALPHA;if(n===If)return i.RGB;if(n===mn)return i.RGBA;if(n===Uf)return i.LUMINANCE;if(n===Nf)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Dc)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===Ff)return i.RG;if(n===Ic)return i.RG_INTEGER;if(n===Uc)return i.RGBA_INTEGER;if(n===ko||n===Ho||n===Vo||n===Go)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Go)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Ul||n===Nl||n===Fl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===zl||n===Bl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ol||n===zl)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Kl||n===jl||n===Ql||n===Jl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===ec||n===tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wo)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Of||n===nc||n===ic||n===rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Wo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class cS extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pi extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uS={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),_=.02,v=.005;c.inputState.pinching&&d>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ut({vertexShader:hS,fragmentShader:fS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Nr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pS extends Ss{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,_=null,v=null;const g=new dS,m=t.getContextAttributes();let p=null,T=null;const M=[],S=[],P=new it;let I=null;const R=new hn;R.viewport=new Rt;const D=new hn;D.viewport=new Rt;const E=[R,D],b=new cS;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=M[j];return se===void 0&&(se=new Ka,M[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=M[j];return se===void 0&&(se=new Ka,M[j]=se),se.getGripSpace()},this.getHand=function(j){let se=M[j];return se===void 0&&(se=new Ka,M[j]=se),se.getHandSpace()};function B(j){const se=S.indexOf(j.inputSource);if(se===-1)return;const ae=M[se];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||o),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",J);for(let j=0;j<M.length;j++){const se=S[j];se!==null&&(S[j]=null,M[j].disconnect(se))}N=null,H=null,g.reset(),e.setRenderTarget(p),_=null,d=null,f=null,r=null,T=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new Xn(_.framebufferWidth,_.framebufferHeight,{format:mn,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ae=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?gs:os,ae=m.stencil?_s:Ir);const me={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Xn(d.textureWidth,d.textureHeight,{format:mn,type:Fi,depthTexture:new Qf(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(j){for(let se=0;se<j.removed.length;se++){const ae=j.removed[se],oe=S.indexOf(ae);oe>=0&&(S[oe]=null,M[oe].disconnect(ae))}for(let se=0;se<j.added.length;se++){const ae=j.added[se];let oe=S.indexOf(ae);if(oe===-1){for(let De=0;De<M.length;De++)if(De>=S.length){S.push(ae),oe=De;break}else if(S[De]===null){S[De]=ae,oe=De;break}if(oe===-1)break}const me=M[oe];me&&me.connect(ae)}}const X=new z,$=new z;function G(j,se,ae){X.setFromMatrixPosition(se.matrixWorld),$.setFromMatrixPosition(ae.matrixWorld);const oe=X.distanceTo($),me=se.projectionMatrix.elements,De=ae.projectionMatrix.elements,Ne=me[14]/(me[10]-1),qe=me[14]/(me[10]+1),Ye=(me[9]+1)/me[5],ct=(me[9]-1)/me[5],F=(me[8]-1)/me[0],We=(De[8]+1)/De[0],Xe=Ne*F,Qe=Ne*We,Ve=oe/(-F+We),je=Ve*-F;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(je),j.translateZ(Ve),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),me[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ze=Ne+Ve,L=qe+Ve,w=Xe-je,V=Qe+(oe-je),Q=Ye*qe/L*ze,ue=ct*qe/L*ze;j.projectionMatrix.makePerspective(w,V,Q,ue,ze,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function fe(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let se=j.near,ae=j.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),b.near=D.near=R.near=se,b.far=D.far=R.far=ae,(N!==b.near||H!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,H=b.far),R.layers.mask=j.layers.mask|2,D.layers.mask=j.layers.mask|4,b.layers.mask=R.layers.mask|D.layers.mask;const oe=j.parent,me=b.cameras;fe(b,oe);for(let De=0;De<me.length;De++)fe(me[De],oe);me.length===2?G(b,R,D):b.projectionMatrix.copy(R.projectionMatrix),ge(j,b,oe)};function ge(j,se,ae){ae===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Js*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)};let ie=null;function Ee(j,se){if(u=se.getViewerPose(c||o),v=se,u!==null){const ae=u.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let oe=!1;ae.length!==b.cameras.length&&(b.cameras.length=0,oe=!0);for(let De=0;De<ae.length;De++){const Ne=ae[De];let qe=null;if(_!==null)qe=_.getViewport(Ne);else{const ct=f.getViewSubImage(d,Ne);qe=ct.viewport,De===0&&(e.setRenderTargetTextures(T,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(T))}let Ye=E[De];Ye===void 0&&(Ye=new hn,Ye.layers.enable(De),Ye.viewport=new Rt,E[De]=Ye),Ye.matrix.fromArray(Ne.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ne.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(qe.x,qe.y,qe.width,qe.height),De===0&&(b.matrix.copy(Ye.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),oe===!0&&b.cameras.push(Ye)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")){const De=f.getDepthInformation(ae[0]);De&&De.isValid&&De.texture&&g.init(e,De,r.renderState)}}for(let ae=0;ae<M.length;ae++){const oe=S[ae],me=M[ae];oe!==null&&me!==void 0&&me.update(oe,se,c||o)}ie&&ie(j,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),v=null}const we=new Kf;we.setAnimationLoop(Ee),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}}const Sr=new qn,mS=new Et;function _S(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&_(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),M=T.envMap,S=T.envMapRotation;M&&(m.envMap.value=M,Sr.copy(S),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),m.envMapRotation.value.setFromMatrix4(mS.makeRotationFromEuler(Sr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function gS(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const S=M.program;n.uniformBlockBinding(T,S)}function c(T,M){let S=r[T.id];S===void 0&&(v(T),S=u(T),r[T.id]=S,T.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(T,P);const I=e.render.frame;s[T.id]!==I&&(d(T),s[T.id]=I)}function u(T){const M=f();T.__bindingPointIndex=M;const S=i.createBuffer(),P=T.__size,I=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const M=r[T.id],S=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let I=0,R=S.length;I<R;I++){const D=Array.isArray(S[I])?S[I]:[S[I]];for(let E=0,b=D.length;E<b;E++){const N=D[E];if(_(N,I,E,P)===!0){const H=N.__offset,B=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let J=0;J<B.length;J++){const X=B[J],$=g(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,H+Y,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(T,M,S,P){const I=T.value,R=M+"_"+S;if(P[R]===void 0)return typeof I=="number"||typeof I=="boolean"?P[R]=I:P[R]=I.clone(),!0;{const D=P[R];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return P[R]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function v(T){const M=T.uniforms;let S=0;const P=16;for(let R=0,D=M.length;R<D;R++){const E=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,N=E.length;b<N;b++){const H=E[b],B=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,J=B.length;Y<J;Y++){const X=B[Y],$=g(X),G=S%P,fe=G%$.boundary,ge=G+fe;S+=fe,ge!==0&&P-ge<$.storage&&(S+=P-ge),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=$.storage}}}const I=S%P;return I>0&&(S+=P-I),T.__size=S,T.__cache={},this}function g(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class zc{constructor(e={}){const{canvas:t=i_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Di,this.toneMappingExposure=1;const S=this;let P=!1,I=0,R=0,D=null,E=-1,b=null;const N=new Rt,H=new Rt;let B=null;const Y=new Ke(0);let J=0,X=t.width,$=t.height,G=1,fe=null,ge=null;const ie=new Rt(0,0,X,$),Ee=new Rt(0,0,X,$);let we=!1;const j=new $f;let se=!1,ae=!1;const oe=new Et,me=new Et,De=new z,Ne=new Rt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function ct(){return D===null?G:1}let F=n;function We(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ac}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),F===null){const x="webgl2";if(F=We(x,h),F===null)throw We(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Xe,Qe,Ve,je,ze,L,w,V,Q,ue,re,Oe,xe,Se,nt,ve,Re,Le,Ue,ye,Ze,Ge,Je,O;function te(){Xe=new Ev(F),Xe.init(),Ge=new lS(F,Xe),Qe=new gv(F,Xe,e,Ge),Ve=new sS(F,Xe),Qe.reverseDepthBuffer&&d&&Ve.buffers.depth.setReversed(!0),je=new wv(F),ze=new Wx,L=new aS(F,Xe,Ve,ze,Qe,Ge,je),w=new xv(S),V=new Mv(S),Q=new I_(F),Je=new mv(F,Q),ue=new Tv(F,Q,je,Je),re=new Rv(F,ue,Q,je),Ue=new Av(F,Qe,L),ve=new vv(ze),Oe=new Gx(S,w,V,Xe,Qe,Je,ve),xe=new _S(S,ze),Se=new qx,nt=new Qx(Xe),Le=new pv(S,w,V,Ve,re,_,l),Re=new iS(S,re,Qe),O=new gS(F,je,Qe,Ve),ye=new _v(F,Xe,je),Ze=new bv(F,Xe,je),je.programs=Oe.programs,S.capabilities=Qe,S.extensions=Xe,S.properties=ze,S.renderLists=Se,S.shadowMap=Re,S.state=Ve,S.info=je}te();const Z=new pS(S,F);this.xr=Z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const h=Xe.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Xe.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(h){h!==void 0&&(G=h,this.setSize(X,$,!1))},this.getSize=function(h){return h.set(X,$)},this.setSize=function(h,x,y=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=h,$=x,t.width=Math.floor(h*G),t.height=Math.floor(x*G),y===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(X*G,$*G).floor()},this.setDrawingBufferSize=function(h,x,y){X=h,$=x,G=y,t.width=Math.floor(h*y),t.height=Math.floor(x*y),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(N)},this.getViewport=function(h){return h.copy(ie)},this.setViewport=function(h,x,y,A){h.isVector4?ie.set(h.x,h.y,h.z,h.w):ie.set(h,x,y,A),Ve.viewport(N.copy(ie).multiplyScalar(G).round())},this.getScissor=function(h){return h.copy(Ee)},this.setScissor=function(h,x,y,A){h.isVector4?Ee.set(h.x,h.y,h.z,h.w):Ee.set(h,x,y,A),Ve.scissor(H.copy(Ee).multiplyScalar(G).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(h){Ve.setScissorTest(we=h)},this.setOpaqueSort=function(h){fe=h},this.setTransparentSort=function(h){ge=h},this.getClearColor=function(h){return h.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(h=!0,x=!0,y=!0){let A=0;if(h){let C=!1;if(D!==null){const U=D.texture.format;C=U===Uc||U===Ic||U===Lc}if(C){const U=D.texture.type,k=U===Fi||U===Ir||U===Qs||U===_s||U===Cc||U===Pc,ee=Le.getClearColor(),W=Le.getClearAlpha(),K=ee.r,q=ee.g,ne=ee.b;k?(v[0]=K,v[1]=q,v[2]=ne,v[3]=W,F.clearBufferuiv(F.COLOR,0,v)):(g[0]=K,g[1]=q,g[2]=ne,g[3]=W,F.clearBufferiv(F.COLOR,0,g))}else A|=F.COLOR_BUFFER_BIT}x&&(A|=F.DEPTH_BUFFER_BIT),y&&(A|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Se.dispose(),nt.dispose(),ze.dispose(),w.dispose(),V.dispose(),re.dispose(),Je.dispose(),O.dispose(),Oe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Bt),Z.removeEventListener("sessionend",di),Mn.stop()};function ce(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const h=je.autoReset,x=Re.enabled,y=Re.autoUpdate,A=Re.needsUpdate,C=Re.type;te(),je.autoReset=h,Re.enabled=x,Re.autoUpdate=y,Re.needsUpdate=A,Re.type=C}function Pe(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function et(h){const x=h.target;x.removeEventListener("dispose",et),gt(x)}function gt(h){Tt(h),ze.remove(h)}function Tt(h){const x=ze.get(h).programs;x!==void 0&&(x.forEach(function(y){Oe.releaseProgram(y)}),h.isShaderMaterial&&Oe.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,y,A,C,U){x===null&&(x=qe);const k=C.isMesh&&C.matrixWorld.determinant()<0,ee=ni(h,x,y,A,C);Ve.setMaterial(A,k);let W=y.index,K=1;if(A.wireframe===!0){if(W=ue.getWireframeAttribute(y),W===void 0)return;K=2}const q=y.drawRange,ne=y.attributes.position;let le=q.start*K,de=(q.start+q.count)*K;U!==null&&(le=Math.max(le,U.start*K),de=Math.min(de,(U.start+U.count)*K)),W!==null?(le=Math.max(le,0),de=Math.min(de,W.count)):ne!=null&&(le=Math.max(le,0),de=Math.min(de,ne.count));const Te=de-le;if(Te<0||Te===1/0)return;Je.setup(C,A,ee,y,W);let Me,_e=ye;if(W!==null&&(Me=Q.get(W),_e=Ze,_e.setIndex(Me)),C.isMesh)A.wireframe===!0?(Ve.setLineWidth(A.wireframeLinewidth*ct()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(C.isLine){let pe=A.linewidth;pe===void 0&&(pe=1),Ve.setLineWidth(pe*ct()),C.isLineSegments?_e.setMode(F.LINES):C.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else C.isPoints?_e.setMode(F.POINTS):C.isSprite&&_e.setMode(F.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)_e.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))_e.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const pe=C._multiDrawStarts,rt=C._multiDrawCounts,ke=C._multiDrawCount,mt=W?Q.get(W).bytesPerElement:1,ht=ze.get(A).currentProgram.getUniforms();for(let $e=0;$e<ke;$e++)ht.setValue(F,"_gl_DrawID",$e),_e.render(pe[$e]/mt,rt[$e])}else if(C.isInstancedMesh)_e.renderInstances(le,Te,C.count);else if(y.isInstancedBufferGeometry){const pe=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,rt=Math.min(y.instanceCount,pe);_e.renderInstances(le,Te,rt)}else _e.render(le,Te)};function ut(h,x,y){h.transparent===!0&&h.side===dn&&h.forceSinglePass===!1?(h.side=Sn,h.needsUpdate=!0,pi(h,x,y),h.side=lr,h.needsUpdate=!0,pi(h,x,y),h.side=dn):pi(h,x,y)}this.compile=function(h,x,y=null){y===null&&(y=h),p=nt.get(y),p.init(x),M.push(p),y.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),h!==y&&h.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),p.setupLights();const A=new Set;return h.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const U=C.material;if(U)if(Array.isArray(U))for(let k=0;k<U.length;k++){const ee=U[k];ut(ee,y,C),A.add(ee)}else ut(U,y,C),A.add(U)}),M.pop(),p=null,A},this.compileAsync=function(h,x,y=null){const A=this.compile(h,x,y);return new Promise(C=>{function U(){if(A.forEach(function(k){ze.get(k).currentProgram.isReady()&&A.delete(k)}),A.size===0){C(h);return}setTimeout(U,10)}Xe.get("KHR_parallel_shader_compile")!==null?U():setTimeout(U,10)})};let bt=null;function jt(h){bt&&bt(h)}function Bt(){Mn.stop()}function di(){Mn.start()}const Mn=new Kf;Mn.setAnimationLoop(jt),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(h){bt=h,Z.setAnimationLoop(h),h===null?Mn.stop():Mn.start()},Z.addEventListener("sessionstart",Bt),Z.addEventListener("sessionend",di),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(x),x=Z.getCamera()),h.isScene===!0&&h.onBeforeRender(S,h,x,D),p=nt.get(h,M.length),p.init(x),M.push(p),me.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),j.setFromProjectionMatrix(me),ae=this.localClippingEnabled,se=ve.init(this.clippingPlanes,ae),m=Se.get(h,T.length),m.init(),T.push(m),Z.enabled===!0&&Z.isPresenting===!0){const U=S.xr.getDepthSensingMesh();U!==null&&On(U,x,-1/0,S.sortObjects)}On(h,x,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(fe,ge),Ye=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ye&&Le.addToRenderList(m,h),this.info.render.frame++,se===!0&&ve.beginShadows();const y=p.state.shadowsArray;Re.render(y,h,x),se===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const A=m.opaque,C=m.transmissive;if(p.setupLights(),x.isArrayCamera){const U=x.cameras;if(C.length>0)for(let k=0,ee=U.length;k<ee;k++){const W=U[k];ur(A,C,h,W)}Ye&&Le.render(h);for(let k=0,ee=U.length;k<ee;k++){const W=U[k];ti(m,h,W,W.viewport)}}else C.length>0&&ur(A,C,h,x),Ye&&Le.render(h),ti(m,h,x);D!==null&&(L.updateMultisampleRenderTarget(D),L.updateRenderTargetMipmap(D)),h.isScene===!0&&h.onAfterRender(S,h,x),Je.resetDefaultState(),E=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],se===!0&&ve.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function On(h,x,y,A){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)y=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||j.intersectsSprite(h)){A&&Ne.setFromMatrixPosition(h.matrixWorld).applyMatrix4(me);const k=re.update(h),ee=h.material;ee.visible&&m.push(h,k,ee,y,Ne.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||j.intersectsObject(h))){const k=re.update(h),ee=h.material;if(A&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Ne.copy(h.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),Ne.copy(k.boundingSphere.center)),Ne.applyMatrix4(h.matrixWorld).applyMatrix4(me)),Array.isArray(ee)){const W=k.groups;for(let K=0,q=W.length;K<q;K++){const ne=W[K],le=ee[ne.materialIndex];le&&le.visible&&m.push(h,k,le,y,Ne.z,ne)}}else ee.visible&&m.push(h,k,ee,y,Ne.z,null)}}const U=h.children;for(let k=0,ee=U.length;k<ee;k++)On(U[k],x,y,A)}function ti(h,x,y,A){const C=h.opaque,U=h.transmissive,k=h.transparent;p.setupLightsView(y),se===!0&&ve.setGlobalState(S.clippingPlanes,y),A&&Ve.viewport(N.copy(A)),C.length>0&&zi(C,x,y),U.length>0&&zi(U,x,y),k.length>0&&zi(k,x,y),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function ur(h,x,y,A){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[A.id]===void 0&&(p.state.transmissionRenderTarget[A.id]=new Xn(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Dn:Fi,minFilter:Ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const U=p.state.transmissionRenderTarget[A.id],k=A.viewport||N;U.setSize(k.z,k.w);const ee=S.getRenderTarget();S.setRenderTarget(U),S.getClearColor(Y),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),Ye&&Le.render(y);const W=S.toneMapping;S.toneMapping=Di;const K=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),p.setupLightsView(A),se===!0&&ve.setGlobalState(S.clippingPlanes,A),zi(h,y,A),L.updateMultisampleRenderTarget(U),L.updateRenderTargetMipmap(U),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let q=!1;for(let ne=0,le=x.length;ne<le;ne++){const de=x[ne],Te=de.object,Me=de.geometry,_e=de.material,pe=de.group;if(_e.side===dn&&Te.layers.test(A.layers)){const rt=_e.side;_e.side=Sn,_e.needsUpdate=!0,hr(Te,y,A,Me,_e,pe),_e.side=rt,_e.needsUpdate=!0,q=!0}}q===!0&&(L.updateMultisampleRenderTarget(U),L.updateRenderTargetMipmap(U))}S.setRenderTarget(ee),S.setClearColor(Y,J),K!==void 0&&(A.viewport=K),S.toneMapping=W}function zi(h,x,y){const A=x.isScene===!0?x.overrideMaterial:null;for(let C=0,U=h.length;C<U;C++){const k=h[C],ee=k.object,W=k.geometry,K=A===null?k.material:A,q=k.group;ee.layers.test(y.layers)&&hr(ee,x,y,W,K,q)}}function hr(h,x,y,A,C,U){h.onBeforeRender(S,x,y,A,C,U),h.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),C.onBeforeRender(S,x,y,A,h,U),C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,S.renderBufferDirect(y,x,A,C,h,U),C.side=lr,C.needsUpdate=!0,S.renderBufferDirect(y,x,A,C,h,U),C.side=dn):S.renderBufferDirect(y,x,A,C,h,U),h.onAfterRender(S,x,y,A,C,U)}function pi(h,x,y){x.isScene!==!0&&(x=qe);const A=ze.get(h),C=p.state.lights,U=p.state.shadowsArray,k=C.state.version,ee=Oe.getParameters(h,C.state,U,x,y),W=Oe.getProgramCacheKey(ee);let K=A.programs;A.environment=h.isMeshStandardMaterial?x.environment:null,A.fog=x.fog,A.envMap=(h.isMeshStandardMaterial?V:w).get(h.envMap||A.environment),A.envMapRotation=A.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,K===void 0&&(h.addEventListener("dispose",et),K=new Map,A.programs=K);let q=K.get(W);if(q!==void 0){if(A.currentProgram===q&&A.lightsStateVersion===k)return _i(h,ee),q}else ee.uniforms=Oe.getUniforms(h),h.onBeforeCompile(ee,S),q=Oe.acquireProgram(ee,W),K.set(W,q),A.uniforms=ee.uniforms;const ne=A.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(ne.clippingPlanes=ve.uniform),_i(h,ee),A.needsLights=ii(h),A.lightsStateVersion=k,A.needsLights&&(ne.ambientLightColor.value=C.state.ambient,ne.lightProbe.value=C.state.probe,ne.directionalLights.value=C.state.directional,ne.directionalLightShadows.value=C.state.directionalShadow,ne.spotLights.value=C.state.spot,ne.spotLightShadows.value=C.state.spotShadow,ne.rectAreaLights.value=C.state.rectArea,ne.ltc_1.value=C.state.rectAreaLTC1,ne.ltc_2.value=C.state.rectAreaLTC2,ne.pointLights.value=C.state.point,ne.pointLightShadows.value=C.state.pointShadow,ne.hemisphereLights.value=C.state.hemi,ne.directionalShadowMap.value=C.state.directionalShadowMap,ne.directionalShadowMatrix.value=C.state.directionalShadowMatrix,ne.spotShadowMap.value=C.state.spotShadowMap,ne.spotLightMatrix.value=C.state.spotLightMatrix,ne.spotLightMap.value=C.state.spotLightMap,ne.pointShadowMap.value=C.state.pointShadowMap,ne.pointShadowMatrix.value=C.state.pointShadowMatrix),A.currentProgram=q,A.uniformsList=null,q}function mi(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=Xo.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function _i(h,x){const y=ze.get(h);y.outputColorSpace=x.outputColorSpace,y.batching=x.batching,y.batchingColor=x.batchingColor,y.instancing=x.instancing,y.instancingColor=x.instancingColor,y.instancingMorph=x.instancingMorph,y.skinning=x.skinning,y.morphTargets=x.morphTargets,y.morphNormals=x.morphNormals,y.morphColors=x.morphColors,y.morphTargetsCount=x.morphTargetsCount,y.numClippingPlanes=x.numClippingPlanes,y.numIntersection=x.numClipIntersection,y.vertexAlphas=x.vertexAlphas,y.vertexTangents=x.vertexTangents,y.toneMapping=x.toneMapping}function ni(h,x,y,A,C){x.isScene!==!0&&(x=qe),L.resetTextureUnits();const U=x.fog,k=A.isMeshStandardMaterial?x.environment:null,ee=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Oi,W=(A.isMeshStandardMaterial?V:w).get(A.envMap||k),K=A.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,q=!!y.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),ne=!!y.morphAttributes.position,le=!!y.morphAttributes.normal,de=!!y.morphAttributes.color;let Te=Di;A.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Te=S.toneMapping);const Me=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,_e=Me!==void 0?Me.length:0,pe=ze.get(A),rt=p.state.lights;if(se===!0&&(ae===!0||h!==b)){const he=h===b&&A.id===E;ve.setState(A,h,he)}let ke=!1;A.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==rt.state.version||pe.outputColorSpace!==ee||C.isBatchedMesh&&pe.batching===!1||!C.isBatchedMesh&&pe.batching===!0||C.isBatchedMesh&&pe.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&pe.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&pe.instancing===!1||!C.isInstancedMesh&&pe.instancing===!0||C.isSkinnedMesh&&pe.skinning===!1||!C.isSkinnedMesh&&pe.skinning===!0||C.isInstancedMesh&&pe.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&pe.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&pe.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&pe.instancingMorph===!1&&C.morphTexture!==null||pe.envMap!==W||A.fog===!0&&pe.fog!==U||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==ve.numPlanes||pe.numIntersection!==ve.numIntersection)||pe.vertexAlphas!==K||pe.vertexTangents!==q||pe.morphTargets!==ne||pe.morphNormals!==le||pe.morphColors!==de||pe.toneMapping!==Te||pe.morphTargetsCount!==_e)&&(ke=!0):(ke=!0,pe.__version=A.version);let mt=pe.currentProgram;ke===!0&&(mt=pi(A,x,C));let ht=!1,$e=!1,St=!1;const ot=mt.getUniforms(),pt=pe.uniforms;if(Ve.useProgram(mt.program)&&(ht=!0,$e=!0,St=!0),A.id!==E&&(E=A.id,$e=!0),ht||b!==h){Ve.buffers.depth.getReversed()?(oe.copy(h.projectionMatrix),s_(oe),o_(oe),ot.setValue(F,"projectionMatrix",oe)):ot.setValue(F,"projectionMatrix",h.projectionMatrix),ot.setValue(F,"viewMatrix",h.matrixWorldInverse);const Ie=ot.map.cameraPosition;Ie!==void 0&&Ie.setValue(F,De.setFromMatrixPosition(h.matrixWorld)),Qe.logarithmicDepthBuffer&&ot.setValue(F,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&ot.setValue(F,"isOrthographic",h.isOrthographicCamera===!0),b!==h&&(b=h,$e=!0,St=!0)}if(C.isSkinnedMesh){ot.setOptional(F,C,"bindMatrix"),ot.setOptional(F,C,"bindMatrixInverse");const he=C.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),ot.setValue(F,"boneTexture",he.boneTexture,L))}C.isBatchedMesh&&(ot.setOptional(F,C,"batchingTexture"),ot.setValue(F,"batchingTexture",C._matricesTexture,L),ot.setOptional(F,C,"batchingIdTexture"),ot.setValue(F,"batchingIdTexture",C._indirectTexture,L),ot.setOptional(F,C,"batchingColorTexture"),C._colorsTexture!==null&&ot.setValue(F,"batchingColorTexture",C._colorsTexture,L));const lt=y.morphAttributes;if((lt.position!==void 0||lt.normal!==void 0||lt.color!==void 0)&&Ue.update(C,y,mt),($e||pe.receiveShadow!==C.receiveShadow)&&(pe.receiveShadow=C.receiveShadow,ot.setValue(F,"receiveShadow",C.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(pt.envMap.value=W,pt.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1),A.isMeshStandardMaterial&&A.envMap===null&&x.environment!==null&&(pt.envMapIntensity.value=x.environmentIntensity),$e&&(ot.setValue(F,"toneMappingExposure",S.toneMappingExposure),pe.needsLights&&En(pt,St),U&&A.fog===!0&&xe.refreshFogUniforms(pt,U),xe.refreshMaterialUniforms(pt,A,G,$,p.state.transmissionRenderTarget[h.id]),Xo.upload(F,mi(pe),pt,L)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(Xo.upload(F,mi(pe),pt,L),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&ot.setValue(F,"center",C.center),ot.setValue(F,"modelViewMatrix",C.modelViewMatrix),ot.setValue(F,"normalMatrix",C.normalMatrix),ot.setValue(F,"modelMatrix",C.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const he=A.uniformsGroups;for(let Ie=0,be=he.length;Ie<be;Ie++){const Fe=he[Ie];O.update(Fe,mt),O.bind(Fe,mt)}}return mt}function En(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function ii(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(h,x,y){ze.get(h.texture).__webglTexture=x,ze.get(h.depthTexture).__webglTexture=y;const A=ze.get(h);A.__hasExternalTextures=!0,A.__autoAllocateDepthBuffer=y===void 0,A.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const y=ze.get(h);y.__webglFramebuffer=x,y.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,y=0){D=h,I=x,R=y;let A=!0,C=null,U=!1,k=!1;if(h){const W=ze.get(h);if(W.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(F.FRAMEBUFFER,null),A=!1;else if(W.__webglFramebuffer===void 0)L.setupRenderTarget(h);else if(W.__hasExternalTextures)L.rebindTextures(h,ze.get(h.texture).__webglTexture,ze.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const ne=h.depthTexture;if(W.__boundDepthTexture!==ne){if(ne!==null&&ze.has(ne)&&(h.width!==ne.image.width||h.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(h)}}const K=h.texture;(K.isData3DTexture||K.isDataArrayTexture||K.isCompressedArrayTexture)&&(k=!0);const q=ze.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(q[x])?C=q[x][y]:C=q[x],U=!0):h.samples>0&&L.useMultisampledRTT(h)===!1?C=ze.get(h).__webglMultisampledFramebuffer:Array.isArray(q)?C=q[y]:C=q,N.copy(h.viewport),H.copy(h.scissor),B=h.scissorTest}else N.copy(ie).multiplyScalar(G).floor(),H.copy(Ee).multiplyScalar(G).floor(),B=we;if(Ve.bindFramebuffer(F.FRAMEBUFFER,C)&&A&&Ve.drawBuffers(h,C),Ve.viewport(N),Ve.scissor(H),Ve.setScissorTest(B),U){const W=ze.get(h.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,W.__webglTexture,y)}else if(k){const W=ze.get(h.texture),K=x||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.__webglTexture,y||0,K)}E=-1},this.readRenderTargetPixels=function(h,x,y,A,C,U,k){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=ze.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&k!==void 0&&(ee=ee[k]),ee){Ve.bindFramebuffer(F.FRAMEBUFFER,ee);try{const W=h.texture,K=W.format,q=W.type;if(!Qe.textureFormatReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-A&&y>=0&&y<=h.height-C&&F.readPixels(x,y,A,C,Ge.convert(K),Ge.convert(q),U)}finally{const W=D!==null?ze.get(D).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,W)}}},this.readRenderTargetPixelsAsync=async function(h,x,y,A,C,U,k){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=ze.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&k!==void 0&&(ee=ee[k]),ee){const W=h.texture,K=W.format,q=W.type;if(!Qe.textureFormatReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-A&&y>=0&&y<=h.height-C){Ve.bindFramebuffer(F.FRAMEBUFFER,ee);const ne=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ne),F.bufferData(F.PIXEL_PACK_BUFFER,U.byteLength,F.STREAM_READ),F.readPixels(x,y,A,C,Ge.convert(K),Ge.convert(q),0);const le=D!==null?ze.get(D).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,le);const de=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await r_(F,de,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ne),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,U),F.deleteBuffer(ne),F.deleteSync(de),U}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,y=0){h.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const A=Math.pow(2,-y),C=Math.floor(h.image.width*A),U=Math.floor(h.image.height*A),k=x!==null?x.x:0,ee=x!==null?x.y:0;L.setTexture2D(h,0),F.copyTexSubImage2D(F.TEXTURE_2D,y,0,0,k,ee,C,U),Ve.unbindTexture()},this.copyTextureToTexture=function(h,x,y=null,A=null,C=0){h.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),A=arguments[0]||null,h=arguments[1],x=arguments[2],C=arguments[3]||0,y=null);let U,k,ee,W,K,q,ne,le,de;const Te=h.isCompressedTexture?h.mipmaps[C]:h.image;y!==null?(U=y.max.x-y.min.x,k=y.max.y-y.min.y,ee=y.isBox3?y.max.z-y.min.z:1,W=y.min.x,K=y.min.y,q=y.isBox3?y.min.z:0):(U=Te.width,k=Te.height,ee=Te.depth||1,W=0,K=0,q=0),A!==null?(ne=A.x,le=A.y,de=A.z):(ne=0,le=0,de=0);const Me=Ge.convert(x.format),_e=Ge.convert(x.type);let pe;x.isData3DTexture?(L.setTexture3D(x,0),pe=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(L.setTexture2DArray(x,0),pe=F.TEXTURE_2D_ARRAY):(L.setTexture2D(x,0),pe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);const rt=F.getParameter(F.UNPACK_ROW_LENGTH),ke=F.getParameter(F.UNPACK_IMAGE_HEIGHT),mt=F.getParameter(F.UNPACK_SKIP_PIXELS),ht=F.getParameter(F.UNPACK_SKIP_ROWS),$e=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,W),F.pixelStorei(F.UNPACK_SKIP_ROWS,K),F.pixelStorei(F.UNPACK_SKIP_IMAGES,q);const St=h.isDataArrayTexture||h.isData3DTexture,ot=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const pt=ze.get(h),lt=ze.get(x),he=ze.get(pt.__renderTarget),Ie=ze.get(lt.__renderTarget);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,he.__webglFramebuffer),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let be=0;be<ee;be++)St&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(h).__webglTexture,C,q+be),h.isDepthTexture?(ot&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(x).__webglTexture,C,de+be),F.blitFramebuffer(W,K,U,k,ne,le,U,k,F.DEPTH_BUFFER_BIT,F.NEAREST)):ot?F.copyTexSubImage3D(pe,C,ne,le,de+be,W,K,U,k):F.copyTexSubImage2D(pe,C,ne,le,de+be,W,K,U,k);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ot?h.isDataTexture||h.isData3DTexture?F.texSubImage3D(pe,C,ne,le,de,U,k,ee,Me,_e,Te.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(pe,C,ne,le,de,U,k,ee,Me,Te.data):F.texSubImage3D(pe,C,ne,le,de,U,k,ee,Me,_e,Te):h.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,C,ne,le,U,k,Me,_e,Te.data):h.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,C,ne,le,Te.width,Te.height,Me,Te.data):F.texSubImage2D(F.TEXTURE_2D,C,ne,le,U,k,Me,_e,Te);F.pixelStorei(F.UNPACK_ROW_LENGTH,rt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ke),F.pixelStorei(F.UNPACK_SKIP_PIXELS,mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ht),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e),C===0&&x.generateMipmaps&&F.generateMipmap(pe),Ve.unbindTexture()},this.copyTextureToTexture3D=function(h,x,y=null,A=null,C=0){return h.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),y=arguments[0]||null,A=arguments[1]||null,h=arguments[2],x=arguments[3],C=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,y,A,C)},this.initRenderTarget=function(h){ze.get(h).__webglFramebuffer===void 0&&L.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?L.setTextureCube(h,0):h.isData3DTexture?L.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?L.setTexture2DArray(h,0):L.setTexture2D(h,0),Ve.unbindTexture()},this.resetState=function(){I=0,R=0,D=null,Ve.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}class Bc extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class id extends Kt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=un,u=un,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi extends Zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class vS extends Kt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const ra={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class xS{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const _=c[f],v=c[f+1];if(_.global&&(_.lastIndex=0),_.test(u))return v}return null}}}const SS=new xS;class io{constructor(e){this.manager=e!==void 0?e:SS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}io.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class yS extends Error{constructor(e,t){super(e),this.response=t}}class MS extends io{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ra.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:r});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),_=d?parseInt(d):0,v=_!==0;let g=0;const m=new ReadableStream({start(p){T();function T(){f.read().then(({done:M,value:S})=>{if(M)p.close();else{g+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:_});for(let I=0,R=u.length;I<R;I++){const D=u[I];D.onProgress&&D.onProgress(P)}p.enqueue(S),T()}},M=>{p.error(M)})}}});return new Response(m)}else throw new yS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,_=new TextDecoder(d);return c.arrayBuffer().then(v=>_.decode(v))}}}).then(c=>{ra.add(e,c);const u=Mi[e];delete Mi[e];for(let f=0,d=u.length;f<d;f++){const _=u[f];_.onLoad&&_.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let f=0,d=u.length;f<d;f++){const _=u[f];_.onError&&_.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ES extends io{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ra.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=eo("img");function l(){u(),ra.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class TS extends io{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new id,a=new MS(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ai,o.wrapT=c.wrapT!==void 0?c.wrapT:Ai,o.magFilter=c.magFilter!==void 0?c.magFilter:qt,o.minFilter=c.minFilter!==void 0?c.minFilter:qt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ri),c.mipmapCount===1&&(o.minFilter=qt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class Ps extends io{constructor(e){super(e)}load(e,t,n,r){const s=new Kt,o=new ES(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Po extends fi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class bS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=oh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Vn=Uint8Array,ts=Uint16Array,wS=Int32Array,rd=new Vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),sd=new Vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),AS=new Vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),od=function(i,e){for(var t=new ts(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new wS(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},ad=od(rd,2),ld=ad.b,RS=ad.r;ld[28]=258,RS[258]=28;var CS=od(sd,0),PS=CS.b,oc=new ts(32768);for(var wt=0;wt<32768;++wt){var $i=(wt&43690)>>1|(wt&21845)<<1;$i=($i&52428)>>2|($i&13107)<<2,$i=($i&61680)>>4|($i&3855)<<4,oc[wt]=(($i&65280)>>8|($i&255)<<8)>>1}var Hs=(function(i,e,t){for(var n=i.length,r=0,s=new ts(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new ts(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new ts(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],f=o[i[r]-1]++<<u,d=f|(1<<u)-1;f<=d;++f)a[oc[f]>>l]=c}else for(a=new ts(n),r=0;r<n;++r)i[r]&&(a[r]=oc[o[i[r]-1]++]>>15-i[r]);return a}),ro=new Vn(288);for(var wt=0;wt<144;++wt)ro[wt]=8;for(var wt=144;wt<256;++wt)ro[wt]=9;for(var wt=256;wt<280;++wt)ro[wt]=7;for(var wt=280;wt<288;++wt)ro[wt]=8;var cd=new Vn(32);for(var wt=0;wt<32;++wt)cd[wt]=5;var DS=Hs(ro,9,1),LS=Hs(cd,5,1),ja=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Kn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Qa=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},IS=function(i){return(i+7)/8|0},US=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Vn(i.subarray(e,t))},NS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],jn=function(i,e,t){var n=new Error(e||NS[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,jn),!t)throw n;return n},FS=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new Vn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Vn(r*3));var c=function(qe){var Ye=t.length;if(qe>Ye){var ct=new Vn(Math.max(Ye*2,qe));ct.set(t),t=ct}},u=e.f||0,f=e.p||0,d=e.b||0,_=e.l,v=e.d,g=e.m,m=e.n,p=r*8;do{if(!_){u=Kn(i,f,1);var T=Kn(i,f+1,3);if(f+=3,T)if(T==1)_=DS,v=LS,g=9,m=5;else if(T==2){var I=Kn(i,f,31)+257,R=Kn(i,f+10,15)+4,D=I+Kn(i,f+5,31)+1;f+=14;for(var E=new Vn(D),b=new Vn(19),N=0;N<R;++N)b[AS[N]]=Kn(i,f+N*3,7);f+=R*3;for(var H=ja(b),B=(1<<H)-1,Y=Hs(b,H,1),N=0;N<D;){var J=Y[Kn(i,f,B)];f+=J&15;var M=J>>4;if(M<16)E[N++]=M;else{var X=0,$=0;for(M==16?($=3+Kn(i,f,3),f+=2,X=E[N-1]):M==17?($=3+Kn(i,f,7),f+=3):M==18&&($=11+Kn(i,f,127),f+=7);$--;)E[N++]=X}}var G=E.subarray(0,I),fe=E.subarray(I);g=ja(G),m=ja(fe),_=Hs(G,g,1),v=Hs(fe,m,1)}else jn(1);else{var M=IS(f)+4,S=i[M-4]|i[M-3]<<8,P=M+S;if(P>r){l&&jn(0);break}a&&c(d+S),t.set(i.subarray(M,P),d),e.b=d+=S,e.p=f=P*8,e.f=u;continue}if(f>p){l&&jn(0);break}}a&&c(d+131072);for(var ge=(1<<g)-1,ie=(1<<m)-1,Ee=f;;Ee=f){var X=_[Qa(i,f)&ge],we=X>>4;if(f+=X&15,f>p){l&&jn(0);break}if(X||jn(2),we<256)t[d++]=we;else if(we==256){Ee=f,_=null;break}else{var j=we-254;if(we>264){var N=we-257,se=rd[N];j=Kn(i,f,(1<<se)-1)+ld[N],f+=se}var ae=v[Qa(i,f)&ie],oe=ae>>4;ae||jn(3),f+=ae&15;var fe=PS[oe];if(oe>3){var se=sd[oe];fe+=Qa(i,f)&(1<<se)-1,f+=se}if(f>p){l&&jn(0);break}a&&c(d+131072);var me=d+j;if(d<fe){var De=s-fe,Ne=Math.min(fe,me);for(De+d<0&&jn(3);d<Ne;++d)t[d]=n[De+d]}for(;d<me;++d)t[d]=t[d-fe]}}e.l=_,e.p=Ee,e.b=d,e.f=u,_&&(u=1,e.m=g,e.d=v,e.n=m)}while(!u);return d!=t.length&&o?US(t,0,d):t.subarray(0,d)},OS=new Vn(0),zS=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&jn(6,"invalid zlib data"),(i[1]>>5&1)==1&&jn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Do(i,e){return FS(i.subarray(zS(i),-4),{i:2},e,e)}var BS=typeof TextDecoder<"u"&&new TextDecoder,kS=0;try{BS.decode(OS,{stream:!0}),kS=1}catch{}class HS extends TS{constructor(e){super(e),this.type=Dn}parse(e){const E=Math.pow(2.7182818,2.2);function b(h,x){let y=0;for(let C=0;C<65536;++C)(C==0||h[C>>3]&1<<(C&7))&&(x[y++]=C);const A=y-1;for(;y<65536;)x[y++]=0;return A}function N(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const H={l:0,c:0,lc:0};function B(h,x,y,A,C){for(;y<h;)x=x<<8|ye(A,C),y+=8;y-=h,H.l=x>>y&(1<<h)-1,H.c=x,H.lc=y}const Y=new Array(59);function J(h){for(let y=0;y<=58;++y)Y[y]=0;for(let y=0;y<65537;++y)Y[h[y]]+=1;let x=0;for(let y=58;y>0;--y){const A=x+Y[y]>>1;Y[y]=x,x=A}for(let y=0;y<65537;++y){const A=h[y];A>0&&(h[y]=A|Y[A]++<<6)}}function X(h,x,y,A,C,U){const k=x;let ee=0,W=0;for(;A<=C;A++){if(k.value-x.value>y)return!1;B(6,ee,W,h,k);const K=H.l;if(ee=H.c,W=H.lc,U[A]=K,K==63){if(k.value-x.value>y)throw new Error("Something wrong with hufUnpackEncTable");B(8,ee,W,h,k);let q=H.l+6;if(ee=H.c,W=H.lc,A+q>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;q--;)U[A++]=0;A--}else if(K>=59){let q=K-59+2;if(A+q>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;q--;)U[A++]=0;A--}}J(U)}function $(h){return h&63}function G(h){return h>>6}function fe(h,x,y,A){for(;x<=y;x++){const C=G(h[x]),U=$(h[x]);if(C>>U)throw new Error("Invalid table entry");if(U>14){const k=A[C>>U-14];if(k.len)throw new Error("Invalid table entry");if(k.lit++,k.p){const ee=k.p;k.p=new Array(k.lit);for(let W=0;W<k.lit-1;++W)k.p[W]=ee[W]}else k.p=new Array(1);k.p[k.lit-1]=x}else if(U){let k=0;for(let ee=1<<14-U;ee>0;ee--){const W=A[(C<<14-U)+k];if(W.len||W.p)throw new Error("Invalid table entry");W.len=U,W.lit=x,k++}}}return!0}const ge={c:0,lc:0};function ie(h,x,y,A){h=h<<8|ye(y,A),x+=8,ge.c=h,ge.lc=x}const Ee={c:0,lc:0};function we(h,x,y,A,C,U,k,ee,W){if(h==x){A<8&&(ie(y,A,C,U),y=ge.c,A=ge.lc),A-=8;let K=y>>A;if(K=new Uint8Array([K])[0],ee.value+K>W)return!1;const q=k[ee.value-1];for(;K-- >0;)k[ee.value++]=q}else if(ee.value<W)k[ee.value++]=h;else return!1;Ee.c=y,Ee.lc=A}function j(h){return h&65535}function se(h){const x=j(h);return x>32767?x-65536:x}const ae={a:0,b:0};function oe(h,x){const y=se(h),C=se(x),U=y+(C&1)+(C>>1),k=U,ee=U-C;ae.a=k,ae.b=ee}function me(h,x){const y=j(h),A=j(x),C=y-(A>>1)&65535,U=A+C-32768&65535;ae.a=U,ae.b=C}function De(h,x,y,A,C,U,k){const ee=k<16384,W=y>C?C:y;let K=1,q,ne;for(;K<=W;)K<<=1;for(K>>=1,q=K,K>>=1;K>=1;){ne=0;const le=ne+U*(C-q),de=U*K,Te=U*q,Me=A*K,_e=A*q;let pe,rt,ke,mt;for(;ne<=le;ne+=Te){let ht=ne;const $e=ne+A*(y-q);for(;ht<=$e;ht+=_e){const St=ht+Me,ot=ht+de,pt=ot+Me;ee?(oe(h[ht+x],h[ot+x]),pe=ae.a,ke=ae.b,oe(h[St+x],h[pt+x]),rt=ae.a,mt=ae.b,oe(pe,rt),h[ht+x]=ae.a,h[St+x]=ae.b,oe(ke,mt),h[ot+x]=ae.a,h[pt+x]=ae.b):(me(h[ht+x],h[ot+x]),pe=ae.a,ke=ae.b,me(h[St+x],h[pt+x]),rt=ae.a,mt=ae.b,me(pe,rt),h[ht+x]=ae.a,h[St+x]=ae.b,me(ke,mt),h[ot+x]=ae.a,h[pt+x]=ae.b)}if(y&K){const St=ht+de;ee?oe(h[ht+x],h[St+x]):me(h[ht+x],h[St+x]),pe=ae.a,h[St+x]=ae.b,h[ht+x]=pe}}if(C&K){let ht=ne;const $e=ne+A*(y-q);for(;ht<=$e;ht+=_e){const St=ht+Me;ee?oe(h[ht+x],h[St+x]):me(h[ht+x],h[St+x]),pe=ae.a,h[St+x]=ae.b,h[ht+x]=pe}}q=K,K>>=1}return ne}function Ne(h,x,y,A,C,U,k,ee,W){let K=0,q=0;const ne=k,le=Math.trunc(A.value+(C+7)/8);for(;A.value<le;)for(ie(K,q,y,A),K=ge.c,q=ge.lc;q>=14;){const Te=K>>q-14&16383,Me=x[Te];if(Me.len)q-=Me.len,we(Me.lit,U,K,q,y,A,ee,W,ne),K=Ee.c,q=Ee.lc;else{if(!Me.p)throw new Error("hufDecode issues");let _e;for(_e=0;_e<Me.lit;_e++){const pe=$(h[Me.p[_e]]);for(;q<pe&&A.value<le;)ie(K,q,y,A),K=ge.c,q=ge.lc;if(q>=pe&&G(h[Me.p[_e]])==(K>>q-pe&(1<<pe)-1)){q-=pe,we(Me.p[_e],U,K,q,y,A,ee,W,ne),K=Ee.c,q=Ee.lc;break}}if(_e==Me.lit)throw new Error("hufDecode issues")}}const de=8-C&7;for(K>>=de,q-=de;q>0;){const Te=x[K<<14-q&16383];if(Te.len)q-=Te.len,we(Te.lit,U,K,q,y,A,ee,W,ne),K=Ee.c,q=Ee.lc;else throw new Error("hufDecode issues")}return!0}function qe(h,x,y,A,C,U){const k={value:0},ee=y.value,W=Ue(x,y),K=Ue(x,y);y.value+=4;const q=Ue(x,y);if(y.value+=4,W<0||W>=65537||K<0||K>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ne=new Array(65537),le=new Array(16384);N(le);const de=A-(y.value-ee);if(X(h,y,de,W,K,ne),q>8*(A-(y.value-ee)))throw new Error("Something wrong with hufUncompress");fe(ne,W,K,le),Ne(ne,le,h,y,q,K,U,C,k)}function Ye(h,x,y){for(let A=0;A<y;++A)x[A]=h[x[A]]}function ct(h){for(let x=1;x<h.length;x++){const y=h[x-1]+h[x]-128;h[x]=y}}function F(h,x){let y=0,A=Math.floor((h.length+1)/2),C=0;const U=h.length-1;for(;!(C>U||(x[C++]=h[y++],C>U));)x[C++]=h[A++]}function We(h){let x=h.byteLength;const y=new Array;let A=0;const C=new DataView(h);for(;x>0;){const U=C.getInt8(A++);if(U<0){const k=-U;x-=k+1;for(let ee=0;ee<k;ee++)y.push(C.getUint8(A++))}else{const k=U;x-=2;const ee=C.getUint8(A++);for(let W=0;W<k+1;W++)y.push(ee)}}return y}function Xe(h,x,y,A,C,U){let k=new DataView(U.buffer);const ee=y[h.idx[0]].width,W=y[h.idx[0]].height,K=3,q=Math.floor(ee/8),ne=Math.ceil(ee/8),le=Math.ceil(W/8),de=ee-(ne-1)*8,Te=W-(le-1)*8,Me={value:0},_e=new Array(K),pe=new Array(K),rt=new Array(K),ke=new Array(K),mt=new Array(K);for(let $e=0;$e<K;++$e)mt[$e]=x[h.idx[$e]],_e[$e]=$e<1?0:_e[$e-1]+ne*le,pe[$e]=new Float32Array(64),rt[$e]=new Uint16Array(64),ke[$e]=new Uint16Array(ne*64);for(let $e=0;$e<le;++$e){let St=8;$e==le-1&&(St=Te);let ot=8;for(let lt=0;lt<ne;++lt){lt==ne-1&&(ot=de);for(let he=0;he<K;++he)rt[he].fill(0),rt[he][0]=C[_e[he]++],Qe(Me,A,rt[he]),Ve(rt[he],pe[he]),je(pe[he]);ze(pe);for(let he=0;he<K;++he)L(pe[he],ke[he],lt*64)}let pt=0;for(let lt=0;lt<K;++lt){const he=y[h.idx[lt]].type;for(let Ie=8*$e;Ie<8*$e+St;++Ie){pt=mt[lt][Ie];for(let be=0;be<q;++be){const Fe=be*64+(Ie&7)*8;k.setUint16(pt+0*he,ke[lt][Fe+0],!0),k.setUint16(pt+2*he,ke[lt][Fe+1],!0),k.setUint16(pt+4*he,ke[lt][Fe+2],!0),k.setUint16(pt+6*he,ke[lt][Fe+3],!0),k.setUint16(pt+8*he,ke[lt][Fe+4],!0),k.setUint16(pt+10*he,ke[lt][Fe+5],!0),k.setUint16(pt+12*he,ke[lt][Fe+6],!0),k.setUint16(pt+14*he,ke[lt][Fe+7],!0),pt+=16*he}}if(q!=ne)for(let Ie=8*$e;Ie<8*$e+St;++Ie){const be=mt[lt][Ie]+8*q*2*he,Fe=q*64+(Ie&7)*8;for(let tt=0;tt<ot;++tt)k.setUint16(be+tt*2*he,ke[lt][Fe+tt],!0)}}}const ht=new Uint16Array(ee);k=new DataView(U.buffer);for(let $e=0;$e<K;++$e){y[h.idx[$e]].decoded=!0;const St=y[h.idx[$e]].type;if(y[$e].type==2)for(let ot=0;ot<W;++ot){const pt=mt[$e][ot];for(let lt=0;lt<ee;++lt)ht[lt]=k.getUint16(pt+lt*2*St,!0);for(let lt=0;lt<ee;++lt)k.setFloat32(pt+lt*2*St,te(ht[lt]),!0)}}}function Qe(h,x,y){let A,C=1;for(;C<64;)A=x[h.value],A==65280?C=64:A>>8==255?C+=A&255:(y[C]=A,C++),h.value++}function Ve(h,x){x[0]=te(h[0]),x[1]=te(h[1]),x[2]=te(h[5]),x[3]=te(h[6]),x[4]=te(h[14]),x[5]=te(h[15]),x[6]=te(h[27]),x[7]=te(h[28]),x[8]=te(h[2]),x[9]=te(h[4]),x[10]=te(h[7]),x[11]=te(h[13]),x[12]=te(h[16]),x[13]=te(h[26]),x[14]=te(h[29]),x[15]=te(h[42]),x[16]=te(h[3]),x[17]=te(h[8]),x[18]=te(h[12]),x[19]=te(h[17]),x[20]=te(h[25]),x[21]=te(h[30]),x[22]=te(h[41]),x[23]=te(h[43]),x[24]=te(h[9]),x[25]=te(h[11]),x[26]=te(h[18]),x[27]=te(h[24]),x[28]=te(h[31]),x[29]=te(h[40]),x[30]=te(h[44]),x[31]=te(h[53]),x[32]=te(h[10]),x[33]=te(h[19]),x[34]=te(h[23]),x[35]=te(h[32]),x[36]=te(h[39]),x[37]=te(h[45]),x[38]=te(h[52]),x[39]=te(h[54]),x[40]=te(h[20]),x[41]=te(h[22]),x[42]=te(h[33]),x[43]=te(h[38]),x[44]=te(h[46]),x[45]=te(h[51]),x[46]=te(h[55]),x[47]=te(h[60]),x[48]=te(h[21]),x[49]=te(h[34]),x[50]=te(h[37]),x[51]=te(h[47]),x[52]=te(h[50]),x[53]=te(h[56]),x[54]=te(h[59]),x[55]=te(h[61]),x[56]=te(h[35]),x[57]=te(h[36]),x[58]=te(h[48]),x[59]=te(h[49]),x[60]=te(h[57]),x[61]=te(h[58]),x[62]=te(h[62]),x[63]=te(h[63])}function je(h){const x=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),A=.5*Math.cos(3.14159/8),C=.5*Math.cos(3*3.14159/16),U=.5*Math.cos(5*3.14159/16),k=.5*Math.cos(3*3.14159/8),ee=.5*Math.cos(7*3.14159/16),W=new Array(4),K=new Array(4),q=new Array(4),ne=new Array(4);for(let le=0;le<8;++le){const de=le*8;W[0]=A*h[de+2],W[1]=k*h[de+2],W[2]=A*h[de+6],W[3]=k*h[de+6],K[0]=y*h[de+1]+C*h[de+3]+U*h[de+5]+ee*h[de+7],K[1]=C*h[de+1]-ee*h[de+3]-y*h[de+5]-U*h[de+7],K[2]=U*h[de+1]-y*h[de+3]+ee*h[de+5]+C*h[de+7],K[3]=ee*h[de+1]-U*h[de+3]+C*h[de+5]-y*h[de+7],q[0]=x*(h[de+0]+h[de+4]),q[3]=x*(h[de+0]-h[de+4]),q[1]=W[0]+W[3],q[2]=W[1]-W[2],ne[0]=q[0]+q[1],ne[1]=q[3]+q[2],ne[2]=q[3]-q[2],ne[3]=q[0]-q[1],h[de+0]=ne[0]+K[0],h[de+1]=ne[1]+K[1],h[de+2]=ne[2]+K[2],h[de+3]=ne[3]+K[3],h[de+4]=ne[3]-K[3],h[de+5]=ne[2]-K[2],h[de+6]=ne[1]-K[1],h[de+7]=ne[0]-K[0]}for(let le=0;le<8;++le)W[0]=A*h[16+le],W[1]=k*h[16+le],W[2]=A*h[48+le],W[3]=k*h[48+le],K[0]=y*h[8+le]+C*h[24+le]+U*h[40+le]+ee*h[56+le],K[1]=C*h[8+le]-ee*h[24+le]-y*h[40+le]-U*h[56+le],K[2]=U*h[8+le]-y*h[24+le]+ee*h[40+le]+C*h[56+le],K[3]=ee*h[8+le]-U*h[24+le]+C*h[40+le]-y*h[56+le],q[0]=x*(h[le]+h[32+le]),q[3]=x*(h[le]-h[32+le]),q[1]=W[0]+W[3],q[2]=W[1]-W[2],ne[0]=q[0]+q[1],ne[1]=q[3]+q[2],ne[2]=q[3]-q[2],ne[3]=q[0]-q[1],h[0+le]=ne[0]+K[0],h[8+le]=ne[1]+K[1],h[16+le]=ne[2]+K[2],h[24+le]=ne[3]+K[3],h[32+le]=ne[3]-K[3],h[40+le]=ne[2]-K[2],h[48+le]=ne[1]-K[1],h[56+le]=ne[0]-K[0]}function ze(h){for(let x=0;x<64;++x){const y=h[0][x],A=h[1][x],C=h[2][x];h[0][x]=y+1.5747*C,h[1][x]=y-.1873*A-.4682*C,h[2][x]=y+1.8556*A}}function L(h,x,y){for(let A=0;A<64;++A)x[y+A]=Cu.toHalfFloat(w(h[A]))}function w(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(E,Math.abs(h)-1)}function V(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function Q(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),y=new Uint8Array(We(x)),A=new Uint8Array(y.length);return ct(y),F(y,A),new DataView(A.buffer)}function ue(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),y=Do(x),A=new Uint8Array(y.length);return ct(y),F(y,A),new DataView(A.buffer)}function re(h){const x=h.viewer,y={value:h.offset.value},A=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),C=new Uint8Array(8192);let U=0;const k=new Array(h.inputChannels.length);for(let Te=0,Me=h.inputChannels.length;Te<Me;Te++)k[Te]={},k[Te].start=U,k[Te].end=k[Te].start,k[Te].nx=h.columns,k[Te].ny=h.lines,k[Te].size=h.type,U+=k[Te].nx*k[Te].ny*k[Te].size;const ee=Z(x,y),W=Z(x,y);if(W>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ee<=W)for(let Te=0;Te<W-ee+1;Te++)C[Te+ee]=Ze(x,y);const K=new Uint16Array(65536),q=b(C,K),ne=Ue(x,y);qe(h.array,x,y,ne,A,U);for(let Te=0;Te<h.inputChannels.length;++Te){const Me=k[Te];for(let _e=0;_e<k[Te].size;++_e)De(A,Me.start+_e,Me.nx,Me.size,Me.ny,Me.nx*Me.size,q)}Ye(K,A,U);let le=0;const de=new Uint8Array(A.buffer.byteLength);for(let Te=0;Te<h.lines;Te++)for(let Me=0;Me<h.inputChannels.length;Me++){const _e=k[Me],pe=_e.nx*_e.size,rt=new Uint8Array(A.buffer,_e.end*2,pe*2);de.set(rt,le),le+=pe*2,_e.end+=pe}return new DataView(de.buffer)}function Oe(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),y=Do(x),A=h.inputChannels.length*h.lines*h.columns*h.totalBytes,C=new ArrayBuffer(A),U=new DataView(C);let k=0,ee=0;const W=new Array(4);for(let K=0;K<h.lines;K++)for(let q=0;q<h.inputChannels.length;q++){let ne=0;switch(h.inputChannels[q].pixelType){case 1:W[0]=k,W[1]=W[0]+h.columns,k=W[1]+h.columns;for(let de=0;de<h.columns;++de){const Te=y[W[0]++]<<8|y[W[1]++];ne+=Te,U.setUint16(ee,ne,!0),ee+=2}break;case 2:W[0]=k,W[1]=W[0]+h.columns,W[2]=W[1]+h.columns,k=W[2]+h.columns;for(let de=0;de<h.columns;++de){const Te=y[W[0]++]<<24|y[W[1]++]<<16|y[W[2]++]<<8;ne+=Te,U.setUint32(ee,ne,!0),ee+=4}break}}return U}function xe(h){const x=h.viewer,y={value:h.offset.value},A=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),C={version:Ge(x,y),unknownUncompressedSize:Ge(x,y),unknownCompressedSize:Ge(x,y),acCompressedSize:Ge(x,y),dcCompressedSize:Ge(x,y),rleCompressedSize:Ge(x,y),rleUncompressedSize:Ge(x,y),rleRawSize:Ge(x,y),totalAcUncompressedCount:Ge(x,y),totalDcUncompressedCount:Ge(x,y),acCompression:Ge(x,y)};if(C.version<2)throw new Error("EXRLoader.parse: "+En.compression+" version "+C.version+" is unsupported");const U=new Array;let k=Z(x,y)-2;for(;k>0;){const Me=Se(x.buffer,y),_e=Ze(x,y),pe=_e>>2&3,rt=(_e>>4)-1,ke=new Int8Array([rt])[0],mt=Ze(x,y);U.push({name:Me,index:ke,type:mt,compression:pe}),k-=Me.length+3}const ee=En.channels,W=new Array(h.inputChannels.length);for(let Me=0;Me<h.inputChannels.length;++Me){const _e=W[Me]={},pe=ee[Me];_e.name=pe.name,_e.compression=0,_e.decoded=!1,_e.type=pe.pixelType,_e.pLinear=pe.pLinear,_e.width=h.columns,_e.height=h.lines}const K={idx:new Array(3)};for(let Me=0;Me<h.inputChannels.length;++Me){const _e=W[Me];for(let pe=0;pe<U.length;++pe){const rt=U[pe];_e.name==rt.name&&(_e.compression=rt.compression,rt.index>=0&&(K.idx[rt.index]=Me),_e.offset=Me)}}let q,ne,le;if(C.acCompressedSize>0)switch(C.acCompression){case 0:q=new Uint16Array(C.totalAcUncompressedCount),qe(h.array,x,y,C.acCompressedSize,q,C.totalAcUncompressedCount);break;case 1:const Me=h.array.slice(y.value,y.value+C.totalAcUncompressedCount),_e=Do(Me);q=new Uint16Array(_e.buffer),y.value+=C.totalAcUncompressedCount;break}if(C.dcCompressedSize>0){const Me={array:h.array,offset:y,size:C.dcCompressedSize};ne=new Uint16Array(ue(Me).buffer),y.value+=C.dcCompressedSize}if(C.rleRawSize>0){const Me=h.array.slice(y.value,y.value+C.rleCompressedSize),_e=Do(Me);le=We(_e.buffer),y.value+=C.rleCompressedSize}let de=0;const Te=new Array(W.length);for(let Me=0;Me<Te.length;++Me)Te[Me]=new Array;for(let Me=0;Me<h.lines;++Me)for(let _e=0;_e<W.length;++_e)Te[_e].push(de),de+=W[_e].width*h.type*2;Xe(K,Te,W,q,ne,A);for(let Me=0;Me<W.length;++Me){const _e=W[Me];if(!_e.decoded)switch(_e.compression){case 2:let pe=0,rt=0;for(let ke=0;ke<h.lines;++ke){let mt=Te[Me][pe];for(let ht=0;ht<_e.width;++ht){for(let $e=0;$e<2*_e.type;++$e)A[mt++]=le[rt+$e*_e.width*_e.height];rt++}pe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(A.buffer)}function Se(h,x){const y=new Uint8Array(h);let A=0;for(;y[x.value+A]!=0;)A+=1;const C=new TextDecoder().decode(y.slice(x.value,x.value+A));return x.value=x.value+A+1,C}function nt(h,x,y){const A=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+y));return x.value=x.value+y,A}function ve(h,x){const y=Le(h,x),A=Ue(h,x);return[y,A]}function Re(h,x){const y=Ue(h,x),A=Ue(h,x);return[y,A]}function Le(h,x){const y=h.getInt32(x.value,!0);return x.value=x.value+4,y}function Ue(h,x){const y=h.getUint32(x.value,!0);return x.value=x.value+4,y}function ye(h,x){const y=h[x.value];return x.value=x.value+1,y}function Ze(h,x){const y=h.getUint8(x.value);return x.value=x.value+1,y}const Ge=function(h,x){let y;return"getBigInt64"in DataView.prototype?y=Number(h.getBigInt64(x.value,!0)):y=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,y};function Je(h,x){const y=h.getFloat32(x.value,!0);return x.value+=4,y}function O(h,x){return Cu.toHalfFloat(Je(h,x))}function te(h){const x=(h&31744)>>10,y=h&1023;return(h>>15?-1:1)*(x?x===31?y?NaN:1/0:Math.pow(2,x-15)*(1+y/1024):6103515625e-14*(y/1024))}function Z(h,x){const y=h.getUint16(x.value,!0);return x.value+=2,y}function ce(h,x){return te(Z(h,x))}function Ae(h,x,y,A){const C=y.value,U=[];for(;y.value<C+A-1;){const k=Se(x,y),ee=Le(h,y),W=Ze(h,y);y.value+=3;const K=Le(h,y),q=Le(h,y);U.push({name:k,pixelType:ee,pLinear:W,xSampling:K,ySampling:q})}return y.value+=1,U}function Pe(h,x){const y=Je(h,x),A=Je(h,x),C=Je(h,x),U=Je(h,x),k=Je(h,x),ee=Je(h,x),W=Je(h,x),K=Je(h,x);return{redX:y,redY:A,greenX:C,greenY:U,blueX:k,blueY:ee,whiteX:W,whiteY:K}}function et(h,x){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],A=Ze(h,x);return y[A]}function gt(h,x){const y=Le(h,x),A=Le(h,x),C=Le(h,x),U=Le(h,x);return{xMin:y,yMin:A,xMax:C,yMax:U}}function Tt(h,x){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],A=Ze(h,x);return y[A]}function ut(h,x){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],A=Ze(h,x);return y[A]}function bt(h,x){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],A=["ROUND_DOWN","ROUND_UP"],C=Ue(h,x),U=Ue(h,x),k=Ze(h,x);return{xSize:C,ySize:U,levelMode:y[k&15],roundingMode:A[k>>4]}}function jt(h,x){const y=Je(h,x),A=Je(h,x);return[y,A]}function Bt(h,x){const y=Je(h,x),A=Je(h,x),C=Je(h,x);return[y,A,C]}function di(h,x,y,A,C){if(A==="string"||A==="stringvector"||A==="iccProfile")return nt(x,y,C);if(A==="chlist")return Ae(h,x,y,C);if(A==="chromaticities")return Pe(h,y);if(A==="compression")return et(h,y);if(A==="box2i")return gt(h,y);if(A==="envmap")return ut(h,y);if(A==="tiledesc")return bt(h,y);if(A==="lineOrder")return Tt(h,y);if(A==="float")return Je(h,y);if(A==="v2f")return jt(h,y);if(A==="v3f")return Bt(h,y);if(A==="int")return Le(h,y);if(A==="rational")return ve(h,y);if(A==="timecode")return Re(h,y);if(A==="preview")return y.value+=C,"skipped";y.value+=C}function Mn(h,x){const y=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function On(h,x,y){let A=0;switch(h.levelMode){case"ONE_LEVEL":A=1;break;case"MIPMAP_LEVELS":A=Mn(Math.max(x,y),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return A}function ti(h,x,y,A){const C=new Array(h);for(let U=0;U<h;U++){const k=1<<U;let ee=x/k|0;A=="ROUND_UP"&&ee*k<x&&(ee+=1);const W=Math.max(ee,1);C[U]=(W+y-1)/y|0}return C}function ur(){const h=this,x=h.offset,y={value:0};for(let A=0;A<h.tileCount;A++){const C=Le(h.viewer,x),U=Le(h.viewer,x);x.value+=8,h.size=Ue(h.viewer,x);const k=C*h.blockWidth,ee=U*h.blockHeight;h.columns=k+h.blockWidth>h.width?h.width-k:h.blockWidth,h.lines=ee+h.blockHeight>h.height?h.height-ee:h.blockHeight;const W=h.columns*h.totalBytes,q=h.size<h.lines*W?h.uncompress(h):V(h);x.value+=h.size;for(let ne=0;ne<h.lines;ne++){const le=ne*h.columns*h.totalBytes;for(let de=0;de<h.inputChannels.length;de++){const Te=En.channels[de].name,Me=h.channelByteOffsets[Te]*h.columns,_e=h.decodeChannels[Te];if(_e===void 0)continue;y.value=le+Me;const pe=(h.height-(1+ee+ne))*h.outLineWidth;for(let rt=0;rt<h.columns;rt++){const ke=pe+(rt+k)*h.outputChannels+_e;h.byteArray[ke]=h.getter(q,y)}}}}}function zi(){const h=this,x=h.offset,y={value:0};for(let A=0;A<h.height/h.blockHeight;A++){const C=Le(h.viewer,x)-En.dataWindow.yMin;h.size=Ue(h.viewer,x),h.lines=C+h.blockHeight>h.height?h.height-C:h.blockHeight;const U=h.columns*h.totalBytes,ee=h.size<h.lines*U?h.uncompress(h):V(h);x.value+=h.size;for(let W=0;W<h.blockHeight;W++){const K=A*h.blockHeight,q=W+h.scanOrder(K);if(q>=h.height)continue;const ne=W*U,le=(h.height-1-q)*h.outLineWidth;for(let de=0;de<h.inputChannels.length;de++){const Te=En.channels[de].name,Me=h.channelByteOffsets[Te]*h.columns,_e=h.decodeChannels[Te];if(_e!==void 0){y.value=ne+Me;for(let pe=0;pe<h.columns;pe++){const rt=le+pe*h.outputChannels+_e;h.byteArray[rt]=h.getter(ee,y)}}}}}}function hr(h,x,y){const A={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");A.version=h.getUint8(4);const C=h.getUint8(5);A.spec={singleTile:!!(C&2),longName:!!(C&4),deepFormat:!!(C&8),multiPart:!!(C&16)},y.value=8;let U=!0;for(;U;){const k=Se(x,y);if(k==0)U=!1;else{const ee=Se(x,y),W=Ue(h,y),K=di(h,x,y,ee,W);K===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ee}'.`):A[k]=K}}if((C&-7)!=0)throw console.error("THREE.EXRHeader:",A),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return A}function pi(h,x,y,A,C){const U={size:0,viewer:x,array:y,offset:A,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Oi};switch(h.compression){case"NO_COMPRESSION":U.blockHeight=1,U.uncompress=V;break;case"RLE_COMPRESSION":U.blockHeight=1,U.uncompress=Q;break;case"ZIPS_COMPRESSION":U.blockHeight=1,U.uncompress=ue;break;case"ZIP_COMPRESSION":U.blockHeight=16,U.uncompress=ue;break;case"PIZ_COMPRESSION":U.blockHeight=32,U.uncompress=re;break;case"PXR24_COMPRESSION":U.blockHeight=16,U.uncompress=Oe;break;case"DWAA_COMPRESSION":U.blockHeight=32,U.uncompress=xe;break;case"DWAB_COMPRESSION":U.blockHeight=256,U.uncompress=xe;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const k={};for(const q of h.channels)switch(q.name){case"Y":case"R":case"G":case"B":case"A":k[q.name]=!0,U.type=q.pixelType}let ee=!1;if(k.R&&k.G&&k.B)ee=!k.A,U.outputChannels=4,U.decodeChannels={R:0,G:1,B:2,A:3};else if(k.Y)U.outputChannels=1,U.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(U.type==1)switch(C){case Pn:U.getter=ce;break;case Dn:U.getter=Z;break}else if(U.type==2)switch(C){case Pn:U.getter=Je;break;case Dn:U.getter=O}else throw new Error("EXRLoader.parse: unsupported pixelType "+U.type+" for "+h.compression+".");U.columns=U.width;const W=U.width*U.height*U.outputChannels;switch(C){case Pn:U.byteArray=new Float32Array(W),ee&&U.byteArray.fill(1,0,W);break;case Dn:U.byteArray=new Uint16Array(W),ee&&U.byteArray.fill(15360,0,W);break;default:console.error("THREE.EXRLoader: unsupported type: ",C);break}let K=0;for(const q of h.channels)U.decodeChannels[q.name]!==void 0&&(U.channelByteOffsets[q.name]=K),K+=q.pixelType*2;if(U.totalBytes=K,U.outLineWidth=U.width*U.outputChannels,h.lineOrder==="INCREASING_Y"?U.scanOrder=q=>q:U.scanOrder=q=>U.height-1-q,U.outputChannels==4?(U.format=mn,U.colorSpace=Oi):(U.format=Dc,U.colorSpace=pn),h.spec.singleTile){U.blockHeight=h.tiles.ySize,U.blockWidth=h.tiles.xSize;const q=On(h.tiles,U.width,U.height),ne=ti(q,U.width,h.tiles.xSize,h.tiles.roundingMode),le=ti(q,U.height,h.tiles.ySize,h.tiles.roundingMode);U.tileCount=ne[0]*le[0];for(let de=0;de<q;de++)for(let Te=0;Te<le[de];Te++)for(let Me=0;Me<ne[de];Me++)Ge(x,A);U.decode=ur.bind(U)}else{U.blockWidth=U.width;const q=Math.ceil(U.height/U.blockHeight);for(let ne=0;ne<q;ne++)Ge(x,A);U.decode=zi.bind(U)}return U}const mi={value:0},_i=new DataView(e),ni=new Uint8Array(e),En=hr(_i,e,mi),ii=pi(En,_i,ni,mi,this.type);return ii.decode(),{header:En,width:ii.width,height:ii.height,data:ii.byteArray,format:ii.format,colorSpace:ii.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=qt,o.magFilter=qt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}async function Hn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),s=r.vertexCount,o=r.indexCount;let a=4+n;const l=new fi,c=r.attributes;for(let u=0,f=c.length;u<f;u++){const d=c[u],_=d.id,v=_==="indices"?o:s,g=d.componentSize,m=globalThis[d.storageType],p=new m(t,a,v*g),T=m.BYTES_PER_ELEMENT;let M;if(d.needsPack){const S=d.packedComponents,P=S.length,I=d.storageType.indexOf("Int")===0,R=1<<T*8,D=I?R*.5:0,E=1/R;M=new Float32Array(v*g);for(let b=0,N=0;b<v;b++)for(let H=0;H<P;H++){const B=S[H];M[N]=(p[N]+D)*E*B.delta+B.from,N++}}else M=p;if(_==="indices"){let S=M;M instanceof Uint8Array&&(S=new Uint16Array(M.length),S.set(M)),l.setIndex(new Zt(S,1))}else l.setAttribute(_,new Zt(M,g));a+=v*g*T}return l.computeBoundingSphere(),l}const Lo=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Ja={density:1,friction:2,restitution:.8},VS=40,Ar=8,GS=`
attribute vec3 daoN;
attribute vec3 daoP;
attribute float ao;
attribute float thickness;
attribute vec3 SN;
uniform vec3 u_lightPosition;
uniform vec4 u_selfPositionRadius;
uniform vec4 u_selfRotation;
varying vec3 v_viewPosition;
varying vec3 v_worldPosition;
varying vec3 v_viewNormal;
varying vec3 v_smoothViewNormal;
varying float v_ao;
varying float v_thickness;
varying float v_selfShadow;

vec3 qrotate(vec3 v, vec4 q) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  v_worldPosition = worldPosition;
  vec4 invertedQuat = vec4(-u_selfRotation.xyz, u_selfRotation.w);
  vec3 L = (u_lightPosition - worldPosition) / max(u_selfPositionRadius.w, 0.001);
  L = normalize(qrotate(L, invertedQuat));
  vec3 dao = mix(daoN, daoP, sign(L) * 0.5 + 0.5);
  vec3 absDir = abs(L);
  float selfShadow = dot(absDir, dao) / max(absDir.x + absDir.y + absDir.z, 1e-4);
  selfShadow = min(pow(selfShadow * 3.0, 0.3) * 1.45, 1.0);
  v_viewNormal = normalMatrix * normal;
  v_smoothViewNormal = normalMatrix * SN;
  v_viewPosition = -mvPosition.xyz;
  v_ao = ao;
  v_thickness = thickness;
  v_selfShadow = selfShadow;
}
`,WS=`
varying vec3 v_viewNormal;
varying vec3 v_smoothViewNormal;
varying vec3 v_viewPosition;
varying vec3 v_worldPosition;
varying float v_ao;
varying float v_thickness;
varying float v_selfShadow;
uniform float u_roughness;
uniform vec3 u_bgColor;
uniform vec3 u_color;
uniform sampler2D u_matcap;
uniform vec3 u_lightPosition;
uniform vec4 u_nearPositionRadiusList[${Ar}];
uniform vec3 u_nearColorList[${Ar}];

#ifndef saturate
#define saturate(a) clamp(a, 0.0, 1.0)
#endif

vec3 filmicToneMapping(vec3 color) {
  color = max(vec3(0.0), color - vec3(0.004));
  color = (color * (6.2 * color + 0.5)) / (color * (6.2 * color + 1.7) + 0.06);
  return color;
}

void main() {
  float roughness = u_roughness;
  vec3 viewNormal = normalize(v_viewNormal);
  vec3 N = normalize((vec4(viewNormal, 0.0) * viewMatrix).xyz);
  vec3 V = normalize(cameraPosition - v_worldPosition);
  vec3 worldToLight = normalize(u_lightPosition - v_worldPosition);
  vec3 reflectView = reflect(-V, N);

  vec3 gi = vec3(0.0);
  vec4 reflections = vec4(0.0, 0.0, 0.0, 100.0);
  float ao = 1.0;
  float shadow = 1.0;

  for (int i = 0; i < ${Ar}; i++) {
    vec4 near = u_nearPositionRadiusList[i];
    vec3 nearColor = u_nearColorList[i];
    vec3 toNear = near.xyz - v_worldPosition;
    float dist = length(toNear);
    float rSum = near.w + 0.15;
    float soft = saturate(1.0 - dist / (rSum * 3.5));
    float _ao = 1.0 - soft * soft * 0.55;
    ao *= _ao;
    shadow *= mix(1.0, 0.72, soft * saturate(dot(normalize(toNear), worldToLight)));
    gi += nearColor * 3.0 * min(1.0, (1.0 - _ao * _ao) / 0.7);

    // fake reflection: sphere hit along reflect ray
    vec3 oc = v_worldPosition - near.xyz;
    float b = dot(oc, reflectView);
    float c = dot(oc, oc) - near.w * near.w * 0.85;
    float h = b * b - c;
    if (h > 0.0) {
      float t = -b - sqrt(h);
      if (t > 0.0001 && t < reflections.w) {
        reflections = vec4(nearColor, t);
      }
    }
  }
  reflections.rgb *= 1.0 / ((0.2 + roughness * 0.8) * reflections.w * 10.0 + 4.0);
  reflections.rgb *= ao * mix(0.55, 1.0, v_ao);
  gi /= float(${Ar});

  vec3 albedo = u_color;
  vec3 viewDir = normalize(v_viewPosition);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uvPerturbed = vec2(dot(x, viewNormal), dot(y, viewNormal)) * 0.5 + 0.5;
  vec3 matcapMap = texture2D(u_matcap, uvPerturbed).rgb;
  vec3 matcapDiff = vec3(0.25 + 0.75 * matcapMap.r);
  // Lusion packs rough→G / hard→B as specular; keep HDR punch so black jacks rim-light
  float specChan = roughness > 0.5 ? matcapMap.g : matcapMap.b;
  vec3 matcapSpec = vec3(specChan) * (roughness > 0.5 ? 1.15 : 1.65);

  reflections.rgb *= 0.75 + 0.25 * shadow * v_selfShadow;
  shadow = 0.6 + 0.4 * shadow;

  vec3 color = albedo * matcapDiff + matcapSpec;
  color += reflections.rgb;
  color *= mix(0.55, 1.0, v_ao) * ao;
  color += gi * 0.45;
  color *= mix(0.72, 1.0, v_selfShadow);
  color *= shadow;
  color += u_bgColor * 0.02 * (1.0 - matcapDiff);

  gl_FragColor.rgb = filmicToneMapping(pow(max(color, vec3(0.0)), vec3(2.2)));
  gl_FragColor.a = 1.0;
}
`,XS=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,qS=`
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform float u_aspect;
varying vec2 v_uv;
void main() {
  vec2 q = v_uv - 0.5;
  q.x *= u_aspect;
  float dst = smoothstep(0.0, 1.15, length(q));
  vec3 color = mix(u_color0, u_color1, 0.88 + 0.12 * dst);
  // keep mostly dark like Lusion, with a tint of the accent
  color = mix(u_color1, color, 0.35);
  gl_FragColor = vec4(color, 1.0);
}
`;function YS(i){const e={...Ja},t={...Ja},n={...Ja};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function ZS(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function ah(i,e,t,n,r){const s=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*s}class $S{constructor(e,t,n,r,s,o=!1){this.position=new z((s()-.5)*12,(s()-.5)*12,o?7+s():(s()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Ln().setFromEuler(new qn(s()*Math.PI,s()*Math.PI,s()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new z,this.gravityAcc=new z}applyImpulse(){this.velocity.add(new z((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(VS),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function KS(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Lo.length),r=Lo[n];const s=new Bc,o=new hn(25,1,.1,100);o.position.set(0,0,25);const a=new zc({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Oi,a.toneMapping=Di;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,f=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[d,_]=await Promise.all([Hn(u),new Promise((F,We)=>{new HS().load(f,F,void 0,We)})]);_.minFilter=qt,_.magFilter=qt,_.generateMipmaps=!1,_.colorSpace=pn;const v=new z(10,10,5),g=YS(r),m=ZS("balloonBody-25"),p=[],T=[],M=[],S=[],P=Array.from({length:Ar},()=>new Rt(0,0,-999,.01)),I=Array.from({length:Ar},()=>new Ke(1118481)),R=F=>new Ut({uniforms:{u_matcap:{value:_},u_color:{value:new Ke(F.color)},u_bgColor:{value:new Ke(1316117)},u_roughness:{value:F.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Rt(0,0,0,1)},u_selfRotation:{value:new Rt(0,0,0,1)},u_nearPositionRadiusList:{value:P.map(We=>We.clone())},u_nearColorList:{value:I.map(We=>We.clone())}},vertexShader:GS,fragmentShader:WS});for(const F of g){const We=R(F),Xe=new Ht(d,We);Xe.frustumCulled=!1,Xe.scale.setScalar(F.radius),s.add(Xe),T.push(Xe),M.push(We),p.push(new $S(F.radius,F.density,F.friction,F.restitution,m,!1)),S.push({i:T.length-1,d2:0})}const D=new Ut({uniforms:{u_color0:{value:new Ke(r)},u_color1:{value:new Ke(1316117)},u_aspect:{value:1}},vertexShader:XS,fragmentShader:qS,depthWrite:!1}),E=new Ht(new Nr(90,60),D);E.position.z=-12,E.renderOrder=-1e3,s.add(E);const b=new it(0,0),N=new z,H=new z,B=new z,Y=new z,J=new z,X=new z,$=new z,G=new z,fe=new z,ge=new z,ie=new Ln,Ee=.025,we=.1,j=.12,se=F=>{const We=(e||i).getBoundingClientRect();b.x=(F.clientX-We.left)/We.width*2-1,b.y=-((F.clientY-We.top)/We.height*2-1)};window.addEventListener("pointermove",se);const ae=()=>{n=(n+1)%Lo.length,r=Lo[n],T.forEach((F,We)=>{const Xe=g[We];Xe.isColored&&(F.material.uniforms.u_color.value.set(r),Xe.color=r)}),D.uniforms.u_color0.value.set(r),p.forEach(F=>F.applyImpulse())},oe=()=>ae();i.addEventListener("click",oe),e==null||e.addEventListener("click",oe);const me=()=>{const F=e||i.parentElement,We=F.clientWidth,Xe=F.clientHeight,Qe=We/Math.max(Xe,1);o.fov=ah(Qe,2.2,2/3,18,30),o.aspect=Qe,o.updateProjectionMatrix(),a.setSize(We,Xe,!1),D.uniforms.u_aspect.value=Qe};me(),window.addEventListener("resize",me);let De=0,Ne=performance.now();const qe=performance.now(),Ye=()=>{const We=(e||i).getBoundingClientRect();l=We.bottom>0&&We.top<window.innerHeight};window.addEventListener("scroll",Ye,{passive:!0}),Ye();const ct=F=>{if(De=requestAnimationFrame(ct),!l){Ne=F;return}let We=Math.min(.05,(F-Ne)/1e3);Ne=F;const Xe=t?1:2;We/=Xe;const Qe=(F-qe)/1e3,Ve=ah(Qe,.3,2,25,17.5);o.position.z=Ve;for(let je=0;je<Xe;je++){const ze=new z(b.x,b.y,.5).unproject(o);ze.sub(o.position).normalize();const L=(0-o.position.z)/ze.z;N.copy(o.position).addScaledVector(ze,L),B.copy(N).sub(H).multiplyScalar(j/Math.max(We,.001)),Y.copy(N).sub(o.position);const w=Y.lengthSq()||1;H.copy(N);for(let V=0;V<p.length;V++){const Q=p[V];Q.updateGravity(We),X.copy(Q.velocity),$.copy(Q.position);for(let xe=V+1;xe<p.length;xe++){const Se=p[xe];fe.copy(Se.velocity),ge.copy(Se.position),J.copy($).sub(ge);const nt=J.length(),ve=Q.radius+Se.radius;if(nt<ve&&nt>1e-6){const Re=Math.sqrt(Q.friction*Se.friction);Q.frictionTot+=Re,Se.frictionTot+=Re,J.normalize(),J.multiplyScalar(.5*(nt-ve)),$.sub(J),ge.add(J),J.normalize();const Le=X.dot(J),Ue=fe.dot(J),ye=Q.mass,Ze=Se.mass,Ge=(ye*Le+Ze*Ue-Ze*(Le-Ue)*Q.restitution)/(ye+Ze),Je=(ye*Le+Ze*Ue-ye*(Ue-Le)*Se.restitution)/(ye+Ze);X.addScaledVector(J,(Ge-Le)/(1+Re)),fe.addScaledVector(J,(Je-Ue)/(1+Re)),Se.position.copy(ge),Se.velocity.copy(fe)}}G.copy($).sub(o.position);let ue=G.dot(Y)/w;ue=G.sub(fe.copy(Y).multiplyScalar(ue)).length()-Q.radius-Ee,ue<0&&(G.copy($).sub(o.position).cross(Y).normalize(),fe.copy(Y).cross(G).normalize(),$.sub(fe.multiplyScalar(we*ue)),fe.multiplyScalar(-j/Math.max(We,.001)),X.add(fe),X.add(B));let re=$.length();if(re>0){G.set(1,1,1).normalize();let xe=1-Math.abs(G.dot(fe.copy($).normalize()));xe*=We*Math.min(1,Math.max(0,re/2))*.5,xe*=V%2*2-1,ie.setFromAxisAngle(G,xe),fe.copy($).applyQuaternion(ie).sub(G.copy($)),X.add(fe)}G.crossVectors($,X);let Oe=G.length();Oe/=Q.inertia,Oe>0&&(G.normalize(),ie.setFromAxisAngle(G,Oe*We),Q.quaternion.premultiply(ie)),Q.position.copy($),Q.velocity.copy(X),Q.update(We),["x","y","z"].forEach(xe=>{const Se=xe==="z"?5.5:7.5;Q.position[xe]>Se&&(Q.position[xe]=Se,Q.velocity[xe]*=-.55),Q.position[xe]<-Se&&(Q.position[xe]=-Se,Q.velocity[xe]*=-.55)})}}for(let je=0;je<T.length;je++){const ze=T[je],L=p[je];ze.position.copy(L.position),ze.quaternion.copy(L.quaternion);const w=M[je].uniforms;w.u_selfPositionRadius.value.set(L.position.x,L.position.y,L.position.z,L.radius),w.u_selfRotation.value.set(L.quaternion.x,L.quaternion.y,L.quaternion.z,L.quaternion.w),w.u_bgColor.value.copy(D.uniforms.u_color1.value)}for(let je=0;je<T.length;je++){for(let w=0;w<T.length;w++)S[w].i=w,S[w].d2=je===w?0:p[je].position.distanceToSquared(p[w].position);S.sort((w,V)=>w.d2-V.d2);const ze=M[je].uniforms.u_nearPositionRadiusList.value,L=M[je].uniforms.u_nearColorList.value;for(let w=0;w<Ar;w++){const V=S[w+1]?S[w+1].i:S[0].i,Q=p[V];ze[w].set(Q.position.x,Q.position.y,Q.position.z,Q.radius),L[w].copy(M[V].uniforms.u_color.value)}}o.position.x+=(b.x*.9-o.position.x)*.04,o.position.y+=(b.y*.55-o.position.y)*.04,o.lookAt(0,0,0),a.render(s,o)};return De=requestAnimationFrame(ct),{cycleColor:ae,destroy(){cancelAnimationFrame(De),window.removeEventListener("pointermove",se),window.removeEventListener("resize",me),window.removeEventListener("scroll",Ye),i.removeEventListener("click",oe),e==null||e.removeEventListener("click",oe),M.forEach(F=>F.dispose()),D.dispose(),a.dispose()}}}function Qn(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function Vs(i){return Qn(i,0,1)}function ud(i,e,t){return(t-i)/(e-i||1)}function qo(i,e,t){return Qn(ud(i,e,t),0,1)}function He(i,e,t,n,r,s){let o=qo(e,t,i);return s&&(o=s(o)),n+o*(r-n)}function lh(i,e,t,n,r,s){let o=ud(e,t,i);return n+o*(r-n)}function jS(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const s=(g,m,p,T)=>1/(3*m*g*g+2*p*g+T),o=(g,m,p,T,M)=>m*(g*g*g)+p*(g*g)+T*g+M,a=(g,m,p,T,M)=>{const S=g*g;return m*(S*g)+p*S+T*g+M},l=1-3*n+3*e,c=3*n-6*e,u=3*e,f=1-3*r+3*t,d=3*r-6*t,_=3*t;let v=i;for(let g=0;g<100;g++){const m=o(v,l,c,u,0);let p=s(v,l,c,u);p===1/0&&(p=i),v-=(m-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,f,d,_,0)}function Pt(i){return jS(i,.35,0,0,1)}function ch(i){return i===1?1:1-Math.pow(2,-10*i)}function QS(i){return i===0?0:Math.pow(1024,i-1)}function JS(i){return 1-Math.cos(i*Math.PI/2)}function ey(i){return-(Math.cos(Math.PI*i)-1)/2}function ty(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function hd(i){return i*i*i}function fd(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Bn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,s=e.bottom;let o=Math.min(0,lh(n,t,t-r,-1,0));o+=Math.max(0,lh(n,0,-r,0,1));const a=He(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=o>=-1&&o<=1;return{top:n,bottom:s,height:r,width:e.width,ratio:o,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function ny(i){return 1-Math.pow(1-i,3)}function iy(i){return i*i*i*i}function ry(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function ri(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const uh=[{id:"blackFrameShow",weight:.55},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",weight:1.6},{id:"astronautWait",weight:.9}];function dd(i){const e=uh.reduce((a,l)=>a+l.weight,0),t={};let n=0;for(const a of uh){const l=a.weight/e;t[a.id]={...a,from:n,to:n+l},n+=l}function r(){const a=i.getBoundingClientRect(),l=window.innerHeight,c=a.height-l;return Math.max(0,Math.min(1,-a.top/Math.max(c,1)))}function s(a,l=a){const c=t[a],u=t[l],f=r(),d=c.from,_=u.to,v=(f-d)/Math.max(_-d,1e-6);return{ratio:Math.max(0,Math.min(1,v)),raw:v,active:f>=d&&f<=_,global:f}}function o(a,l){return s(a,l)}return{items:t,progress:r,range:s,between:o,totalWeight:e}}const sy=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
#define PI 3.14159265359
vec3 qrotate(vec4 q,vec3 v){return v+2.*cross(q.xyz,cross(q.xyz,v)+q.w*v);}vec4 quaternion(vec3 axis,float angle){float halfAngle=angle*0.5;return vec4(axis*sin(halfAngle),cos(halfAngle));}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash44(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}
uniform float u_blackTunnelTransformRatio;vec3 goalBlackTunnelTransform(vec3 pos){float t=u_blackTunnelTransformRatio*6.2831853;float zWeight=pos.z*0.025;float angle=t*zWeight*zWeight*sign(zWeight);float sa=sin(angle);float ca=cos(angle);mat2 m2=mat2(ca,-sa,sa,ca);pos.xy=m2*pos.xy;pos.z+=t*1.;pos=pos.xzy;float rad=20.;pos/=rad;vec3 a=pos;vec2 pq=vec2(-1.,.5)*t;float ada=dot(a,a);vec4 b=vec4(2.*a,ada-1.)/(1.+ada);vec4 pq_cs=vec4(cos(pq),sin(pq)).xzyw;vec2 np1=vec2(-1.,1.);vec4 c=(b.xxyy*np1.yxyy*pq_cs+b.zzww*np1.yyxy*pq_cs.yxwz).xzyw;pos=c.xyz/(1.-c.w);pos=pos.xzy;return pos*rad;}
void main(){vec3 pos=position;vec3 nor=normal;vec3 tang=tangent.xyz;
#ifdef IS_HD
float blockId=floor(pos.x+0.5);
#else
float blockId=0.;
#endif
vec4 q;vec3 offsetInstanceGridIds=instanceGridIds;offsetInstanceGridIds.z-=floor(u_offsetZ/float(GRID_SIZE))*2.;vec4 instanceRand1s=hash44(floor(vec4(offsetInstanceGridIds+.5,blockId+cluster)));v_rands=hash44(floor(vec4(offsetInstanceGridIds+.5,100.0)));float showRatio=u_showRatio;showRatio*=1.-step(10.5,instanceGridIds.z)*mod(u_offsetZ/float(GRID_SIZE),1.);
#ifdef IS_HD
pos=mix(center,pos,showRatio);
#else
pos.xy*=showRatio*showRatio;pos.z*=showRatio;
#endif
#ifdef IS_HD
pos.x-=blockId;float blockOffset=sin(u_time*2.+cos(u_time*4.+0.2+offsetInstanceGridIds.z))*0.15*instanceRand1s.y;float heightRatio=1.;pos.y=pos.y*height*heightRatio+(0.025+blockOffset);float variation=floor(instanceRand1s.x*8.);q=quaternion(vec3(0.,0.,variation>3.5 ?-1. : 1.),(mod(blockId,4.)+mod(variation,4.))*PI*0.5);pos=qrotate(q,pos);nor=qrotate(q,nor);tang=qrotate(q,tang);
#endif
q=quaternion(instanceAxis,PI*0.5);pos=qrotate(q,pos)*float(GRID_SIZE)+instancePos;nor=qrotate(q,nor);tang=qrotate(q,tang);pos.z+=mod(u_offsetZ,float(GRID_SIZE));v_depth=-pos.z;pos=goalBlackTunnelTransform(pos);
#ifdef IS_HD
v_ao=ao;v_emission=areaRatio<0.25 ? sin(pos.z*0.25-u_time)*0.5+0.5 : 0.;
#else
v_ao=1.;v_emission=0.;
#endif
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,oy=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,ay="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",ly="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",pd=`
uniform sampler2D u_armbTexture;
uniform sampler2D u_norTexture;
uniform float u_time;
uniform vec3 u_bgColor;
uniform float u_showRatio;
varying vec3 v_worldPosition;
varying vec4 v_worldTangent;
varying vec3 v_worldNormal;
varying vec2 v_uv;
varying float v_ao;
varying vec3 v_viewPosition;
#ifndef saturate
#define saturate(a) clamp(a, 0.0, 1.0)
#endif
const float RECIPROCAL_PI = 0.31830988618;
const float RECIPROCAL_PI2 = 0.15915494;
float linearStep(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}
vec2 cartesianToPolar(vec3 n) {
  vec2 uv;
  uv.x = atan(n.z, n.x) * RECIPROCAL_PI2 + 0.5;
  uv.y = asin(clamp(n.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;
  return uv;
}
mat4 rotation3d(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;
  return mat4(
    oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0,
    oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0,
    oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
}
`,md=`
  vec3 worldNormal = normalize(v_worldNormal);
  vec3 worldTangent = normalize(v_worldTangent.xyz);
  vec3 worldBinormal = normalize(cross(worldNormal, worldTangent)) * -v_worldTangent.w;
  worldTangent = normalize(cross(worldBinormal, worldNormal));
  vec3 tangentSpaceNormal = normalize(texture2D(u_norTexture, v_uv).xyz - 0.5);
  worldNormal = normalize(
    tangentSpaceNormal.x * worldTangent +
    tangentSpaceNormal.y * worldBinormal +
    tangentSpaceNormal.z * worldNormal
  );
  vec4 armb = texture2D(u_armbTexture, v_uv);
  float ao = clamp(v_ao * max(armb.r, 0.15), 0.0, 1.0);
  float roughness = armb.g;
  float metalness = armb.b;
  float albedo = max(armb.a, 0.12);
  vec3 N = worldNormal;
  vec3 V = normalize(cameraPosition - v_worldPosition);
  vec3 reflection = normalize(reflect(-V, N));
  float NdV = clamp(abs(dot(N, V)), 0.001, 1.0);
  float fresnel = pow(1.0 - NdV, 5.0);
`,cy=`
${pd}
uniform sampler2D u_matcapTexture;
uniform sampler2D u_envTexture;
uniform vec3 u_ambientColor;
uniform vec3 u_sunPosition;
uniform float u_frameOutRatio;
uniform float u_whiteTunnelRatio;
uniform vec3 u_tintColor;

float getMetalShininess(vec3 viewDir, vec3 lightPosition, vec3 worldNormal, float roughness, float metalness) {
  vec3 lightDir = normalize(lightPosition - v_worldPosition);
  vec3 H = normalize(viewDir + lightDir);
  float dotNL = max(0.0, dot(worldNormal, lightDir));
  float dotNH = max(0.0, dot(worldNormal, H));
  float alpha = max(0.01, roughness * roughness);
  float alphaSqr = alpha * alpha;
  float denom = dotNH * dotNH * (alphaSqr - 1.0) + 1.0;
  float D = alphaSqr / (3.14159 * denom * denom);
  return metalness * D * 5.0 * dotNL;
}
vec2 boxIntersection(in vec3 ro, in vec3 rd, vec3 boxSize) {
  vec3 m = 1.0 / rd;
  vec3 n = m * ro;
  vec3 k = abs(m) * boxSize;
  vec3 t1 = -n - k;
  vec3 t2 = -n + k;
  float tN = max(max(t1.x, t1.y), t1.z);
  float tF = min(min(t2.x, t2.y), t2.z);
  if (tN > tF || tF < 0.0) return vec2(-1.0);
  return vec2(tN, tF);
}
void main() {
${md}
  mat4 frameInRotation = rotation3d(vec3(1.0, 0.0, 0.0), 1.0);
  vec3 viewDir = (vec4(normalize(v_worldPosition), 1.0) * frameInRotation).xyz;
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, worldNormal), dot(y, worldNormal)) * 0.495 + 0.5;
  float zAxisShading = linearStep(-0.2, 1.3, worldNormal.z) * (0.65 + ao * 0.35);
  float outOfFrameRatio = linearStep(0.35, 1.0, u_frameOutRatio);
  vec3 L = normalize(u_sunPosition - v_worldPosition);
  float sunNdLRaw = dot(N, L);
  float sunNdL = saturate(sunNdLRaw);
  float matcapShading = 0.5 + 0.5 * (1.0 - texture2D(u_matcapTexture, uv).r);
  float metalMask = 1.0 - metalness;
  vec3 color = vec3(matcapShading * albedo);
  color += 0.8 * zAxisShading;
  color *= u_ambientColor * (0.85 + sunNdL * 0.5);
  color *= metalMask;
  color += (0.5 + 0.5 * outOfFrameRatio) * metalMask * (0.5 * (0.4 + 0.2 * ao + 0.5 * sunNdL) + 0.1 * sunNdL * sunNdL);
  color *= 0.7 + 0.3 * ao;
  color += linearStep(0.0, 1.0, -sunNdLRaw) * u_ambientColor * 0.1;
  vec3 tunnelColor = color * 0.75;
  vec2 dists = boxIntersection(
    v_worldPosition + vec3(0.0, 0.0, u_whiteTunnelRatio * 7.5 * 5.0) + worldNormal * 200.0,
    -worldNormal,
    vec3(7.5, 7.5, 100.0)
  );
  float dist = 200.0 - dists.x;
  tunnelColor += vec3(1.0) * (abs(worldNormal.x) * 0.5 + 0.5) / max(dist, 0.001)
    * (0.25 + 0.75 * ao)
    * (cos(u_whiteTunnelRatio * 6.283185307179586 * 5.0) * 0.3 + 0.7)
    * 3.5 * (1.0 - metalness);
  color = mix(tunnelColor, color, outOfFrameRatio) * (0.7 + armb.r * 0.3);
  gl_FragColor.rgb = mix(u_bgColor, color, vec3(u_showRatio * 0.8 + 0.2));
#ifndef IS_HELMET_GLASS
  gl_FragColor.rgb += outOfFrameRatio * max(worldNormal.z * 2.0 * sunNdL, metalness)
    * texture2D(u_envTexture, 1.2 * (uv - 0.5) + vec2(0.5)).rgb * 0.75 * v_ao;
#endif
  gl_FragColor.rgb = min(vec3(1.0), gl_FragColor.rgb + u_tintColor * (1.0 - u_frameOutRatio * 0.3) * (0.4 + gl_FragColor.b * 0.6));
  gl_FragColor.rgb *= 0.95 + mix(u_tintColor, vec3(1.0), v_ao) * 0.1;
  gl_FragColor.rgb *= mix(1.0, metalMask * 0.7 + 0.3, linearStep(0.8, 1.0, u_frameOutRatio));
  gl_FragColor.a = 1.0;
}
`,hh=`
${pd}
uniform sampler2D u_blackTunnelTexture;
uniform sampler2D u_matcapTexture;
uniform sampler2D u_envTexture;
uniform float u_sunFactor;
uniform vec3 u_sunPosition;
uniform vec3 u_ambientColor;
uniform float u_blackTunnelRatio;
uniform float u_offsetZ;
uniform float u_frameIn;
uniform float u_endRatio;

float sdBoxFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b;
  vec3 q = abs(p + e) - e;
  return min(
    min(
      length(max(vec3(p.x, q.y, q.z), 0.0)) + min(max(p.x, max(q.y, q.z)), 0.0),
      length(max(vec3(q.x, p.y, q.z), 0.0)) + min(max(q.x, max(p.y, q.z)), 0.0)
    ),
    length(max(vec3(q.x, q.y, p.z), 0.0)) + min(max(q.x, max(q.y, p.z)), 0.0)
  );
}
float getMetalShininess(vec3 viewDir, vec3 lightPosition, vec3 worldNormal, float roughness, float metalness) {
  vec3 lightDir = normalize(lightPosition - v_worldPosition);
  vec3 H = normalize(viewDir + lightDir);
  float dotNL = max(0.0, dot(worldNormal, lightDir));
  float dotNH = max(0.0, dot(worldNormal, H));
  float alpha = max(0.01, roughness * roughness);
  float alphaSqr = alpha * alpha;
  float denom = dotNH * dotNH * (alphaSqr - 1.0) + 1.0;
  float D = alphaSqr / (3.14159 * denom * denom);
  return metalness * D * 5.0 * dotNL;
}
void main() {
${md}
  vec2 uvDiff = cartesianToPolar(worldNormal);
  vec2 uvSpec = cartesianToPolar(reflection);
  // bias mip level ~3 ≈ Lusion's dual blur on tunnel feedback
  vec3 blackTunnelEnvDiff = texture2D(u_blackTunnelTexture, 0.25 * uvDiff, 3.0).rgb * 1.75;
  vec3 blackTunnelEnvSpec = texture2D(u_blackTunnelTexture, 0.25 * uvSpec, 3.0).rgb * (0.35 + metalness * 0.9) * 2.4;
  mat4 frameInRotation = rotation3d(vec3(1.0, 0.0, 0.0), 0.2 + 1.0 * u_frameIn);
  vec3 viewDir = (vec4(normalize(v_worldPosition), 1.0) * frameInRotation).xyz;
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, worldNormal), dot(y, worldNormal)) * 0.495 + 0.5;
  vec3 L = normalize(u_sunPosition - v_worldPosition);
  float sunNdLRaw = dot(N, L);
  float sunNdL = saturate(sunNdLRaw);
  float matcapShading = 0.5 + 0.5 * (1.0 - texture2D(u_matcapTexture, uv).r);
  float zAxisShading = linearStep(-0.2, 1.3, worldNormal.z) * (0.65 + ao * 0.35);
  float metalMask = 1.0 - metalness;
  float metalShininess = u_sunFactor * getMetalShininess(V, u_sunPosition, N, (1.0 - 0.9 * metalness), 0.4 * metalness);
  vec3 color = vec3(matcapShading * albedo);
  color += zAxisShading;
  color *= metalMask;
  color *= mix(u_ambientColor * (0.85 + sunNdL * 0.5), vec3(fresnel * 2.0), u_blackTunnelRatio * 0.5);
  color += linearStep(0.0, 10.0, metalShininess);
  color *= mix(0.5 + 0.5 * ao, 0.75 + 0.25 * ao, u_blackTunnelRatio);
  color += metalMask * u_sunFactor * (0.5 * (0.4 + 0.2 * ao + 0.5 * sunNdL) + 0.1 * sunNdL * sunNdL);
  color += linearStep(0.0, 1.0, -sunNdLRaw) * u_ambientColor * 0.1;
  vec3 blackTunnelColor = (color * blackTunnelEnvSpec * (7.0 + metalness * 10.0) + albedo * blackTunnelEnvDiff * 1.6)
    * (1.3 - abs(reflection.z)) * (0.5 + ao * 0.5);
  float GRID_SIZE = 20.0;
  vec3 relPos = v_worldPosition + worldNormal * 3.0 + vec3(0.0, 0.0, u_offsetZ);
  float repDist = GRID_SIZE - 1.0;
  vec3 relPosRep = mod(relPos + 0.5 * repDist, repDist) - 0.5 * repDist;
  float sdf = sdBoxFrame(relPosRep, vec3(GRID_SIZE - 1.0) * 0.5, 1.0);
  blackTunnelColor += exp(-sdf * 0.25) * blackTunnelEnvDiff * 2.0;
  gl_FragColor.rgb = color;
  gl_FragColor.rgb = mix(gl_FragColor.rgb, 0.3 * gl_FragColor.rgb + blackTunnelColor, clamp(u_blackTunnelRatio * 2.0 - 1.0 + ao, 0.0, 1.0));
  // Keep suit readable against pure black (Lusion never fully silhouettes the hero)
  gl_FragColor.rgb = max(gl_FragColor.rgb, vec3(0.04 + 0.08 * albedo));
  gl_FragColor.rgb = mix(u_bgColor, gl_FragColor.rgb, vec3(max(u_showRatio, 0.85)));
  gl_FragColor.rgb *= (0.45 + armb.r * 0.7);
  gl_FragColor.rgb += max(worldNormal.z * 2.0 * sunNdL, metalness)
    * texture2D(u_envTexture, 1.2 * (uv - 0.5) + vec2(0.5)).rgb * 0.75 * v_ao * (1.0 - u_blackTunnelRatio);
  gl_FragColor.rgb += blackTunnelEnvDiff * (0.35 + u_blackTunnelRatio * 0.9) * ao;
  gl_FragColor.a = 1.0;
  gl_FragColor.a *= mix(1.0, 1.0 - u_endRatio, 0.35);
}
`,_d={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class so{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uy=new jf(-1,1,1,-1,0,1);class hy extends fi{constructor(){super(),this.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ii([0,2,0,0,2,0],2))}}const fy=new hy;class gd{constructor(e){this._mesh=new Ht(fy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class vd extends so{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ia.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new gd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class fh extends so{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class dy extends so{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class py{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new it);this._width=n.width,this._height=n.height,t=new Xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vd(_d),this.copyPass.material.blending=ei,this.clock=new bS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fh!==void 0&&(o instanceof fh?n=!0:o instanceof dy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class my extends so{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ke}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const _y={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xs extends so{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new it(e.x,e.y):new it(256,256),this.clearColor=new Ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xn(s,o,{type:Dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new Xn(s,o,{type:Dn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const _=new Xn(s,o,{type:Dn});_.texture.name="UnrealBloomPass.v"+f,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),s=Math.round(s/2),o=Math.round(o/2)}const a=_y;this.highPassUniforms=ia.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new it(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=_d;this.copyUniforms=ia.clone(u.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Sl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ke,this.oldClearAlpha=1,this.basic=new fa,this.fsQuad=new gd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new it(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}xs.BlurDirectionX=new it(1,0);xs.BlurDirectionY=new it(0,1);const gy={uniforms:{tDiffuse:{value:null},u_haloStrength:{value:0},u_haloRGBShift:{value:.015},u_haloWidth:{value:.6},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5},u_texelSize:{value:new it(1,1)},u_aspect:{value:new it(1,1)}},vertexShader:`
    varying vec2 v_uv;
    void main() {
      v_uv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float u_haloStrength;
    uniform float u_haloRGBShift;
    uniform float u_haloWidth;
    uniform float u_haloMaskInner;
    uniform float u_haloMaskOuter;
    uniform vec2 u_texelSize;
    uniform vec2 u_aspect;
    varying vec2 v_uv;

    void main() {
      vec4 texel = texture2D(tDiffuse, v_uv);
      if (u_haloStrength < 0.001) {
        gl_FragColor = texel;
        return;
      }
      // Lusion halo: ghost UV + spectral ring
      vec2 toCenter = (v_uv - 0.5) * u_aspect;
      vec2 ghostUv = 1.0 - (toCenter + 0.5);
      vec2 ghostVec = (vec2(0.5) - ghostUv);
      vec2 direction = length(ghostVec) > 1e-5 ? normalize(ghostVec) : vec2(0.0);
      vec2 haloVec = direction * u_haloWidth;
      float weight = length(vec2(0.5) - fract(ghostUv + haloVec));
      weight = pow(1.0 - weight, 3.0);
      vec3 distortion = vec3(-u_texelSize.x, 0.0, u_texelSize.x) * u_haloRGBShift;
      float zoomBlurRatio = fract(atan(toCenter.y, toCenter.x) * 40.0) * 0.05 + 0.95;
      ghostUv *= zoomBlurRatio;
      vec2 haloUv = ghostUv + haloVec;
      vec3 halo = vec3(
        texture2D(tDiffuse, haloUv + direction * distortion.r).r,
        texture2D(tDiffuse, haloUv + direction * distortion.g).g,
        texture2D(tDiffuse, haloUv + direction * distortion.b).b
      );
      float mask = smoothstep(u_haloMaskInner, u_haloMaskOuter, length(toCenter));
      halo *= weight * mask * u_haloStrength;
      // subtle radial chromatic on base (lens feel)
      vec3 shifted = vec3(
        texture2D(tDiffuse, v_uv + direction * distortion.r * 0.5).r,
        texture2D(tDiffuse, v_uv).g,
        texture2D(tDiffuse, v_uv + direction * distortion.b * 0.5).b
      );
      vec3 color = mix(texel.rgb, shifted, clamp(u_haloStrength * 0.4, 0.0, 0.5));
      color += halo;
      gl_FragColor = vec4(color, texel.a);
    }
  `};function vy(i,e,t){const n=new it;i.getSize(n);const r=new py(i),s=new my(e,t);r.addPass(s);const o=new xs(n.clone(),.5,.55,.6);o.threshold=.55,o.strength=0,o.radius=.55,r.addPass(o);const a=new vd(gy);a.material.uniforms.u_texelSize.value.set(1/Math.max(n.x,1),1/Math.max(n.y,1)),a.material.uniforms.u_aspect.value.set(n.x/Math.max(n.y,1),1),r.addPass(a);let l=0,c=0,u=.015,f=!0;return{resize:(g,m)=>{r.setSize(g,m),o.resolution.set(g,m),a.material.uniforms.u_texelSize.value.set(1/Math.max(g,1),1/Math.max(m,1)),a.material.uniforms.u_aspect.value.set(g/Math.max(m,1),1)},sync:({blackFrameInRatio:g=0,blackTitleRatio:m=0,blackTunnelRatio:p=0,whiteFrameRatio:T=0,whiteTunnelWaitRatio:M=0,astronautDropRatio:S=0,isWhiteTunnelActive:P=!1,isBlackTunnelActive:I=!1}={})=>{let R=g*(Wt.lerp(0,.15,m)+Wt.clamp((p-.2)/.2,0,1)*.25);if(p>=.65){const N=Wt.clamp((p-.65)/.1,0,1);R=R+(.08-R)*N}P&&(R=0),c=R;let D,E;if(P)D=S<1?Wt.lerp(.55,.35,Wt.clamp(T/.05,0,1)):Wt.lerp(0,.9,Wt.clamp(M/.1,0,1)),E=.45;else{const N=Wt.clamp(m/.25,0,1);D=Wt.lerp(.95,.4,N),E=Wt.lerp(.45,.65,N),I&&(D=Wt.lerp(.5,.9,Wt.clamp(p/.45,0,1)),E=Wt.lerp(.55,.3,Wt.clamp(p/.35,0,1)),p>.65&&(D=Wt.lerp(D,.4,Wt.clamp((p-.65)/.2,0,1))))}l=D;const b=p<1?Wt.lerp(1,2.8,Wt.clamp(p/.7,0,1)):1;o.strength=l,o.radius=.5+b*.15,o.threshold=E,a.material.uniforms.u_haloStrength.value=c,a.material.uniforms.u_haloRGBShift.value=u,a.material.uniforms.u_haloWidth.value=I?.72:.6,a.material.uniforms.u_haloMaskInner.value=I?.2:.3,a.material.uniforms.u_haloMaskOuter.value=I?.65:.5},render:()=>{if(!f||l<.02&&c<.005){i.render(e,t);return}r.render()},setEnabled(g){f=!!g},destroy(){r.dispose()}}}function xy(i,e,t){return i+(e-i)*t}const ji=class ji{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<ji.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,s=r*r*(3-2*r),o=n&ji.MAX_VERTICES_MASK,a=o+1&ji.MAX_VERTICES_MASK;return xy(this._r[o],this._r[a],s)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let s=0;s<t;s++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Be(ji,"MAX_VERTICES",512),Be(ji,"MAX_VERTICES_MASK",ji.MAX_VERTICES-1);let ac=ji;const si=new z,Gs=class Gs{constructor(){this._position=new z,this._rotation=new Ln,this._euler=new qn,this._scale=new z(1,1,1),this._matrix=new Et,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new z(1,1,1),this._rotationScale=new z(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new ac,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;si.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),si.multiply(this._positionScale),si.multiplyScalar(this._positionAmplitude*Gs.FBM_NORM),this._position.copy(si)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;si.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),si.multiply(this._rotationScale),si.multiplyScalar(this._rotationAmplitude*Gs.FBM_NORM),this._euler.set(si.x,si.y,si.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Be(Gs,"FBM_NORM",1/.75);let sa=Gs;class dh{constructor(e,t=1.5,n=.8,r=2,s=!0){this.isRobust=s,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,s=e/(1+r-n);this._k1Stable=(1-r)*s,this._k2Stable=e*s}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const Io=53,Uo=16,No=20,ph=["helmet","helmet_glass","glove_shoes","wearpack"],Ds=["#0d2b27","#ba0000","#00b5a6","#0099ff"],el=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function mh(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function _h(i,e){const[t,n]=await Promise.all([mh(i),mh(e)]),r=document.createElement("canvas");r.width=t.width,r.height=t.height;const s=r.getContext("2d",{willReadFrequently:!0});s.drawImage(n,0,0,r.width,r.height);const o=s.getImageData(0,0,r.width,r.height);s.clearRect(0,0,r.width,r.height),s.drawImage(t,0,0,r.width,r.height);const a=s.getImageData(0,0,r.width,r.height);for(let c=0;c<a.data.length;c+=4)a.data[c+3]=o.data[c];s.putImageData(a,0,0);const l=new vS(r);return l.colorSpace=pn,l.flipY=!1,l.needsUpdate=!0,l}function gh(i,e,t){const n=new id(i,e,t,mn,Pn);return n.magFilter=un,n.minFilter=un,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function tl(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new oi(t,3)}const nl=`
uniform sampler2D u_animationPositionTexture;
uniform sampler2D u_animationOrientTexture;
uniform vec2 u_animationTextureSize;
uniform float u_loopLinearBlend;
attribute vec2 boneIndices;
attribute vec2 boneWeights;
attribute vec4 tangent;
attribute float ao;
attribute vec3 instancePos;
attribute vec4 instanceOrient;
attribute vec3 instanceAnimationFrameFromToBlend1;
attribute vec3 instanceAnimationFrameFromToBlend2;
varying vec3 v_worldPosition;
varying vec4 v_worldTangent;
varying vec3 v_worldNormal;
varying vec3 v_viewPosition;
varying vec2 v_uv;
varying float v_ao;

vec3 qrotate(vec4 q, vec3 v) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}
vec3 inverseTransformDirection(in vec3 dir, in mat4 matrix) {
  return normalize((vec4(dir, 0.0) * matrix).xyz);
}
void computeTransform(inout vec3 pos, inout vec3 nor, inout vec3 tang, vec4 uvBone12) {
  vec3 bonePos1 = texture2D(u_animationPositionTexture, uvBone12.xy).xyz;
  vec3 bonePos2 = texture2D(u_animationPositionTexture, uvBone12.zw).xyz;
  vec4 boneOrient1 = texture2D(u_animationOrientTexture, uvBone12.xy);
  vec4 boneOrient2 = texture2D(u_animationOrientTexture, uvBone12.zw);
  pos = (qrotate(boneOrient1, pos) + bonePos1) * boneWeights.x
      + (qrotate(boneOrient2, pos) + bonePos2) * boneWeights.y;
  nor = normalize(qrotate(boneOrient1, nor) * boneWeights.x + qrotate(boneOrient2, nor) * boneWeights.y);
  tang = normalize(qrotate(boneOrient1, tang) * boneWeights.x + qrotate(boneOrient2, tang) * boneWeights.y);
}
void computeFrameTransform(inout vec3 pos, inout vec3 nor, inout vec3 tang, vec3 blend) {
  vec4 dataOffset = boneIndices.xyxy + blend.xxyy * float(BONE_COUNT) + 0.5;
  vec4 fromUvs = vec4(
    floor(mod(dataOffset.xy, u_animationTextureSize.x)) + 0.5,
    floor(dataOffset.xy / u_animationTextureSize.x) + 0.5
  ).xzyw / u_animationTextureSize.xyxy;
  vec4 toUvs = vec4(
    floor(mod(dataOffset.zw, u_animationTextureSize.x)) + 0.5,
    floor(dataOffset.zw / u_animationTextureSize.x) + 0.5
  ).xzyw / u_animationTextureSize.xyxy;
  vec3 fromPos = pos; vec3 fromNor = nor; vec3 fromTang = tang;
  computeTransform(fromPos, fromNor, fromTang, fromUvs);
  vec3 toPos = pos; vec3 toNor = nor; vec3 toTang = tang;
  computeTransform(toPos, toNor, toTang, toUvs);
  pos = mix(fromPos, toPos, blend.z);
  nor = mix(fromNor, toNor, blend.z);
  tang = mix(fromTang, toTang, blend.z);
}
void main() {
  v_ao = ao;
  vec3 posLoop = position; vec3 norLoop = normal; vec3 tangLoop = tangent.xyz;
  computeFrameTransform(posLoop, norLoop, tangLoop, instanceAnimationFrameFromToBlend1);
  vec3 posLinear = position; vec3 norLinear = normal; vec3 tangLinear = tangent.xyz;
  computeFrameTransform(posLinear, norLinear, tangLinear, instanceAnimationFrameFromToBlend2);
  vec3 pos = mix(posLoop, posLinear, u_loopLinearBlend);
  vec3 nor = mix(norLoop, norLinear, u_loopLinearBlend);
  vec3 tang = mix(tangLoop, tangLinear, u_loopLinearBlend);
  pos = qrotate(instanceOrient, pos) + instancePos.xyz;
  nor = normalize(qrotate(instanceOrient, nor));
  tang = normalize(qrotate(instanceOrient, tang));
  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  v_worldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
  v_worldTangent = vec4(inverseTransformDirection(normalMatrix * tang, viewMatrix), tangent.w);
  v_worldNormal = inverseTransformDirection(normalMatrix * nor, viewMatrix);
  v_uv = uv;
  v_viewPosition = -mvPos.xyz;
  gl_Position = projectionMatrix * mvPos;
}
`,vh=`
uniform vec3 u_bgColor;
uniform float u_showRatio;
varying vec3 v_worldNormal;
varying vec3 v_viewPosition;
varying float v_ao;
void main() {
  vec3 N = normalize(v_worldNormal);
  vec3 V = normalize(v_viewPosition);
  float fresnel = pow(1.0 - abs(dot(N, V)), 2.2);
  vec3 color = mix(vec3(0.55, 0.72, 0.9), vec3(1.0), fresnel);
  color = mix(u_bgColor, color, u_showRatio);
  gl_FragColor = vec4(color, 0.35 + fresnel * 0.45);
}
`;async function Sy(i,e,t){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",s=!n,[o,a,l,c,u,f,d,_,v,g,m,p,T,...M]=await Promise.all([Hn(`${r}assets/models/tunnels/astronaut_animations.buf`),Hn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Hn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new Ps().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new Ps().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new Ps().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Hn(`${r}assets/models/tunnels/tunnel_block_base.buf`),Hn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Hn(`${r}assets/models/tunnels/grid_base_ld.buf`),Hn(`${r}assets/models/tunnels/grid_structure_ld.buf`),s?Hn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),s?Hn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new Ps().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),...ph.map(he=>Hn(`${r}assets/models/tunnels/astronaut_${he}.buf`))]),S=new Bc;S.background=new Ke(0);const P=new z(0,0,25),I=new z(0,0,24),R=45,D=new hn(R,1,1,200);D.position.copy(P),D.lookAt(I);let E;try{E=new zc({canvas:i,antialias:!n,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(he){throw console.error("Goal WebGL unavailable",he),he}E.setClearColor(0,1),E.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1:1.35)),E.outputColorSpace=cn,E.autoClear=!0,c.colorSpace=pn,u.colorSpace=cn,f.colorSpace=cn,f.wrapS=f.wrapT=ss;const b=o.attributes.position.array,N=o.attributes.orient.array,H=b.length/3,B=H/Io,Y=Math.ceil(Math.sqrt(H)),J=Math.ceil(H/Y),X=Y*J,$=new Float32Array(X*4),G=new Float32Array(X*4);for(let he=0,Ie=0,be=0;he<H;he++,Ie+=3,be+=4)$[be]=b[Ie],$[be+1]=b[Ie+1],$[be+2]=b[Ie+2],$[be+3]=1,G[be]=N[be],G[be+1]=N[be+1],G[be+2]=N[be+2],G[be+3]=N[be+3];const fe=gh($,Y,J),ge=gh(G,Y,J),ie=new oi(new Float32Array([0,0,18]),3);ie.setUsage(Vi);const Ee=new oi(new Float32Array([0,0,0,1]),4);Ee.setUsage(Vi);const we=new oi(new Float32Array([0,1,0]),3);we.setUsage(Vi);const j=new oi(new Float32Array([90,91,0]),3);j.setUsage(Vi);const se=()=>{const he=new Xn(1,1,{minFilter:Ri,magFilter:qt,format:mn,generateMipmaps:!0});return he.texture.wrapS=he.texture.wrapT=ta,he},ae=se(),oe=se();let me=ae,De=oe;const Ne={u_animationPositionTexture:{value:fe},u_animationOrientTexture:{value:ge},u_animationTextureSize:{value:new it(Y,J)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new Ke("#566d80")},u_bgColor:{value:new Ke("#000000")},u_sunPosition:{value:new z(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new Ke(0,0,0)},u_time:{value:0}},qe={u_blackTunnelTexture:{value:me.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},Ye={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async he=>{const[Ie,be]=await Promise.all([_h(`${r}assets/textures/tunnels/astronaut/astronaut_${he}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${he}_base.webp`),new Ps().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${he}_nor.webp`)]);be.colorSpace=pn,be.flipY=!1,Ye[he]={armb:Ie,nor:be}})),Ye.helmet_glass=Ye.helmet;const ct=new Pi;S.add(ct);const F=[],We=4,Xe=new oi(new Float32Array(We*3),3);Xe.setUsage(Vi);const Qe=new oi(new Float32Array(We*4),4);Qe.setUsage(Vi);const Ve=new oi(new Float32Array(We*3),3);Ve.setUsage(Vi);const je=new oi(new Float32Array(We*3),3);je.setUsage(Vi);for(let he=0;he<We;he++)Qe.setXYZW(he,0,0,0,1),Ve.setXYZ(he,0,1,0),je.setXYZ(he,90,91,0);const ze=[];let L=0;ph.forEach((he,Ie)=>{const be=M[Ie],Fe=new Po;for(const Jt in be.attributes)Fe.setAttribute(Jt,be.attributes[Jt]);be.index&&Fe.setIndex(be.index),Fe.instanceCount=1,Fe.setAttribute("instancePos",ie),Fe.setAttribute("instanceOrient",Ee),Fe.setAttribute("instanceAnimationFrameFromToBlend1",we),Fe.setAttribute("instanceAnimationFrameFromToBlend2",j);const tt=he==="helmet_glass"||he==="card"?"helmet":he,_t=he==="helmet_glass",vt={...Ne,u_armbTexture:{value:Ye[tt].armb},u_norTexture:{value:Ye[tt].nor}},kt={...Ne,...qe,u_armbTexture:{value:Ye[tt].armb},u_norTexture:{value:Ye[tt].nor}},on=new Ut({uniforms:vt,vertexShader:nl,fragmentShader:_t?vh:cy,transparent:_t,blending:_t?rr:ei,side:dn,defines:{BONE_COUNT:Io,..._t?{IS_HELMET_GLASS:!0}:{}}}),Ct=new Ut({uniforms:kt,vertexShader:nl,fragmentShader:_t?vh:hh,transparent:!0,blending:ei,side:dn,defines:{BONE_COUNT:Io,IS_BLACK:!0}}),Qt=new Ht(Fe,on);if(Qt.frustumCulled=!1,Qt.userData.whiteMat=on,Qt.userData.blackMat=Ct,ct.add(Qt),F.push(Qt),!_t){const Jt=new Po;for(const Ts in be.attributes)Jt.setAttribute(Ts,be.attributes[Ts]);be.index&&Jt.setIndex(be.index),Jt.instanceCount=We,Jt.setAttribute("instancePos",Xe),Jt.setAttribute("instanceOrient",Qe),Jt.setAttribute("instanceAnimationFrameFromToBlend1",Ve),Jt.setAttribute("instanceAnimationFrameFromToBlend2",je);const Bi=new Ut({uniforms:{...kt,u_armbTexture:{value:Ye[tt].armb},u_norTexture:{value:Ye[tt].nor}},vertexShader:nl,fragmentShader:hh,transparent:!0,depthWrite:!1,depthTest:!1,blending:wf,blendEquation:Qi,blendSrc:yl,blendDst:yl,side:dn,defines:{BONE_COUNT:Io,IS_BLACK:!0}}),ki=new Ht(Jt,Bi);ki.frustumCulled=!1,ki.renderOrder=1e3,ki.visible=!1,ct.add(ki),ze.push(ki)}});const w=new Pi;S.add(w);const V=new z;let Q=0,ue=1,re=typeof window<"u"?window.scrollY:0,Oe=1;const xe=(he,Ie)=>{const be=new Po;for(const vt in he.attributes)be.setAttribute(vt,he.attributes[vt]);he.index&&be.setIndex(he.index);const Fe=new Float32Array(Uo);for(let vt=0;vt<Uo;vt++)Fe[vt]=vt;be.setAttribute("a_instanceId",new oi(Fe,1)),be.instanceCount=Uo;const tt=new Ut({uniforms:{u_texture:{value:f},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:V},u_time:{value:0}},vertexShader:ay,fragmentShader:ly,transparent:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:Uo,...Ie?{IS_WALL:!0}:{}}}),_t=new Ht(be,tt);return _t.frustumCulled=!1,w.add(_t),tt},Se=xe(d,!1),nt=xe(_,!0),ve=new fa({color:0}),Re=new Ht(new Nr(200,200),ve);Re.position.z=-80,S.add(Re);const Le=new Pi;S.add(Le);const Ue=await _h(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);Ue.wrapS=Ue.wrapT=ss,T.colorSpace=pn,T.flipY=!1,T.wrapS=T.wrapT=ss;const ye={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:me.texture},u_greebleArmbTexture:{value:Ue},u_greebleNormalTexture:{value:T},u_resolution:{value:new it(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new z(0,70,0)},u_color1:{value:new Ke(Ds[0])},u_color2:{value:new Ke(el[0])}},Ze=(he,Ie,be)=>{const Fe=new Po;for(const kt in he.attributes)Fe.setAttribute(kt,he.attributes[kt]);he.index&&Fe.setIndex(he.index);const tt=he.attributes.position.count;Fe.getAttribute("ao")||Fe.setAttribute("ao",new Zt(new Float32Array(tt).fill(1),1)),Fe.getAttribute("areaRatio")||Fe.setAttribute("areaRatio",new Zt(new Float32Array(tt),1)),Fe.getAttribute("height")||Fe.setAttribute("height",new Zt(new Float32Array(tt).fill(1),1)),Fe.getAttribute("cluster")||Fe.setAttribute("cluster",new Zt(new Float32Array(tt),1)),Fe.setAttribute("instancePos",tl(Ie.attributes.position)),Fe.setAttribute("instanceGridIds",tl(Ie.attributes.gridIds)),Fe.setAttribute("instanceAxis",tl(Ie.attributes.rotAxis)),Fe.instanceCount=Ie.attributes.position.count;const _t=new Ut({uniforms:ye,vertexShader:sy,fragmentShader:oy,side:dn,transparent:!1,depthWrite:!0,blending:rr,defines:{GRID_SIZE:No,...be?{IS_HD:!0}:{}}}),vt=new Ht(Fe,_t);return vt.frustumCulled=!1,vt.renderOrder=be?2:1,Le.add(vt),vt};Ze(v,g,!1),s&&m&&p&&Ze(m,p,!0);let Ge=0,Je=0,O=0,te=R;const Z=new sa;Z.positionFrequency=.2,Z.rotationFrequency=.15,Z.positionAmplitude=0,Z.rotationAmplitude=0;const ce=new dh(new z,1,.65,1.3),Ae=new dh(new z,1,.85,1.1),Pe=Array.from({length:We},()=>{const he=new sa;return he.positionFrequency=.2,he.rotationFrequency=.6,he.positionAmplitude=12,he.rotationAmplitude=10,he});Float32Array.from({length:We},()=>Math.random()*2);const et=new z,gt=new Ln,Tt=new Et,ut=new Et,bt=new z,jt=new z,Bt=new Ln,di=new qn,Mn=new z(1,1,1),On=new Ke,ti=new Ke,ur=new z,zi=new z;let hr=0,pi=0,mi=0,_i=0,ni=.08;window.addEventListener("pointermove",he=>{hr=he.clientX/Math.max(window.innerWidth,1)*2-1,pi=he.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0});const En=()=>{D.near=1,D.far=200,D.position.copy(P),D.up.set(0,1,0),D.lookAt(I),D.fov=te,ur.set(0,0,-1).applyQuaternion(D.quaternion);let he=zi.copy(I).sub(D.position).dot(ur);const Ie=D.fov,be=Ie+O,Fe=Math.max(1,Math.min(170,be));let tt=he*Math.tan(Ie/360*Math.PI/2)/Math.tan(Fe/360*Math.PI/2)-he;Number.isFinite(tt)||(tt=0),D.translateZ(tt),D.fov=Ie,he+=tt,D.translateZ(he*-1);const _t=Math.max(-1,Math.min(1,pi))*ni,vt=Math.max(-1,Math.min(1,-hr))*ni;mi+=(_t-mi)*.1,_i+=(vt-_i)*.1,di.set(mi,_i,0),Bt.setFromEuler(di),D.quaternion.multiply(Bt),D.translateZ(he),D.updateProjectionMatrix()},ii=he=>{if(Z.update(he),ce.update(he,Z.position),bt.copy(Z.euler),Ae.update(he,bt),di.set(Ae.value.x,Ae.value.y,Ae.value.z),Bt.setFromEuler(di),ut.compose(ce.value,Bt,Mn),Tt.compose(et,gt,Mn),Tt.multiply(ut),Tt.decompose(bt,Bt,jt),ie.setXYZ(0,bt.x,bt.y,bt.z),Ee.setXYZW(0,Bt.x,Bt.y,Bt.z,Bt.w),ie.needsUpdate=!0,Ee.needsUpdate=!0,Me=1+Math.min(3.5,ce.valueVel.length()*.2+Ae.valueVel.length()*.2),L>.01&&!de){for(let Ie=0;Ie<We;Ie++){const be=Pe[Ie];be.positionFrequency=.2,be.rotationFrequency=.6,be.positionAmplitude=12,be.rotationAmplitude=10,be.update(he),Tt.compose(et,gt,Mn),ut.copy(be.matrix),Tt.multiply(ut),Tt.decompose(bt,Bt,jt);const Fe=Ie/Math.max(We-1,1),tt=He(L,Fe*.3,.7+Fe*.3,1,0,ey);jt.set(ie.getX(0),ie.getY(0),ie.getZ(0)),bt.lerp(jt,tt),Xe.setXYZ(Ie,bt.x,bt.y,bt.z),Qe.setXYZW(Ie,Bt.x,Bt.y,Bt.z,Bt.w)}Xe.needsUpdate=!0,Qe.needsUpdate=!0}},h=i.parentElement||e,x=dd(e);let y=0,A=0,C=0,U=0,k=0,ee=0,W=0,K=0,q=0,ne=!0,le=!1,de=!1,Te=0,Me=1,_e=0,pe=performance.now(),rt=!1;const ke=vy(E,S,D),mt=()=>{const he=h,Ie=he.clientWidth||window.innerWidth,be=he.clientHeight||window.innerHeight;D.aspect=Ie/Math.max(be,1),En(),E.setSize(Ie,be,!1),ke.resize(Ie,be),ye.u_resolution.value.set(Ie,be);const Fe=Math.max(1,Math.floor(Ie*.25)),tt=Math.max(1,Math.floor(be*.25));(ae.width!==Fe||ae.height!==tt)&&(ae.setSize(Fe,tt),oe.setSize(Fe,tt))};mt(),window.addEventListener("resize",mt);const ht=(he,Ie)=>{const be=he.attributes.position.array,Fe=he.attributes.orient.array,tt=be.length/3,_t=Math.max(0,Math.min(tt-1.0001,Ie*(tt-1))),vt=Math.floor(_t),kt=Math.min(tt-1,vt+1),on=_t-vt,Ct=new z().fromArray(be,vt*3).lerp(new z().fromArray(be,kt*3),on),Qt=new Ln().fromArray(Fe,vt*4).slerp(new Ln().fromArray(Fe,kt*4),on);return{p:Ct,q:Qt}},$e=()=>{var on;if(!e)return;const he=window.innerHeight,Ie=window.scrollY||0;Ie!==re&&(Oe=Ie>re?1:-1,re=Ie),k=x.range("blackFrameIn").ratio,C=x.range("blackTitle").ratio,U=x.range("blackTunnel").ratio,W=x.range("whiteTunnel").ratio,y=x.between("whiteTunnel","whiteFrameOut").ratio,ee=x.range("whiteFrameBreak").ratio;const be=x.between("whiteTunnel","whiteFrameBreak").ratio;q=x.between("whiteFrameBreak","astronautDrop").ratio,K=((on=x.range("astronautWait"))==null?void 0:on.ratio)??0,ne=C<1,le=U<1&&!ne,de=y<=1&&!le&&!ne,A=de?ri(0,.15,be):1,ke.sync({blackFrameInRatio:k,blackTitleRatio:C,blackTunnelRatio:U,whiteFrameRatio:W,whiteTunnelWaitRatio:K,astronautDropRatio:q,isWhiteTunnelActive:de,isBlackTunnelActive:le}),Ne.u_whiteTunnelRatio.value=y,Ne.u_showRatio.value=A,Ne.u_frameOutRatio.value=ee,Se.uniforms.u_ratio.value=y,nt.uniforms.u_ratio.value=y,Se.uniforms.u_ratioInverse.value=1-y,nt.uniforms.u_ratioInverse.value=1-y;const Fe=new Ke(de&&q<1?"#ffffff":"#000000");ve.color.copy(Fe),S.background=Fe,E.setClearColor(Fe,1),Ne.u_bgColor.value.copy(Fe),h&&(h.style.background=Fe.getStyle()),w.visible=de&&q<1,Le.visible=le;const tt=de;for(const Ct of F){const Qt=tt?Ct.userData.whiteMat:Ct.userData.blackMat;Ct.material!==Qt&&(Ct.material=Qt)}L=le?ri(.2,.4,U):0;for(const Ct of ze)Ct.visible=!de&&L>.01;let _t;if(de){const Ct=y<1?He(y,0,1,0,79):He(q,0,1,79,99);_t=ht(l,Ct/99),_t.p.y-=(n?0:.4)*ry(q)}else _t=ht(a,hd(Math.min(C,1)));if(et.copy(_t.p),gt.copy(_t.q),Z.positionFrequency=.2,Z.rotationFrequency=.15,Z.positionAmplitude=0,Z.rotationAmplitude=0,le){const Ct=U;Z.positionFrequency=.2+.5*Ct,Z.rotationFrequency=.15,Z.positionAmplitude=5*Ct,Z.rotationAmplitude=60*Ct}else de&&(Z.positionFrequency=He(W,0,.45,.5,.2),Z.rotationFrequency=He(W,0,.45,.4,.15),Z.positionAmplitude=He(W,0,.75,5,0),Z.rotationAmplitude=He(W,0,.75,15,0));ct.visible=A>.02,te=R,de?(O=He(y,0,1,60,0),te=He(W,0,1,R,70)):le?(O=Math.sin(U*10+Q)*7.5*ri(0,.2,U),Le.position.z=-80*qo(.2,0,U)):(O=He(k,0,1,20,0),Le.position.z=-80),ni=.08*ri(.5,1,C)+.02,y>0&&(ni*=He(x.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),ni=He(K,0,.1,ni,.05),En(),qe.u_frameIn.value=k,qe.u_sunFactor.value=le?1-ri(.1,.2,U):1,qe.u_blackTunnelRatio.value=le?ri(.1,.3,U):0,qe.u_endRatio.value=le?ri(.65,.9,U):0,qe.u_offsetZ.value=ye.u_offsetZ.value;const vt=He(q,1,0,.2,1)*(ee>0?1:0);Ne.u_tintColor.value.setStyle("#2533c2").multiplyScalar(vt);const kt=h.getBoundingClientRect();rt=kt.bottom>0&&kt.top<he,e.dataset.goalPhase=de?"white":le?"black-tunnel":"title"},St=he=>{if(!le){ye.u_showRatio.value=0;return}ye.u_showRatio.value=QS(qo(0,.1,U));const Ie=ye.u_outBloomFromToStrength.value;Ie.z=He(U,.65,.75,0,.2),Ie.z=He(U,.75,.85,Ie.z,.15),Ie.z=He(U,.85,1,Ie.z,.15),Ie.x=He(U,.75,.85,20,60),Ie.x=He(U,.9,1,Ie.x,30);const be=He(U,.6,1,0,1,JS);ye.u_blackTunnelTransformRatio.value=be;const Fe=Oe*ue;Ge+=Fe*qo(.1,.3,U)*He(be,0,.25,1,.5),Je+=Fe*He(be,0,.25,1.5,1);const tt=Ge,_t=Math.floor(tt),vt=tt-_t,kt=(_t+fd(vt))*No+Je*No+U*No*10;ye.u_offsetZ.value=kt,qe.u_offsetZ.value=kt,ye.u_time.value=Q;const on=Ds.length*He(U,.2,1,0,1),Ct=Math.floor(on),Qt=Math.min(Math.ceil(on),Ds.length-1),Bi=on-Ct>.5?1:0;On.set(Ds[Ct]),ti.set(Ds[Qt]),On.lerp(ti,Bi),ye.u_color1.value.copy(On),On.set(el[Ct]),ti.set(el[Qt]),On.lerp(ti,Bi),ye.u_color2.value.copy(On),O=Math.sin(U*10+Q)*7.5*ri(0,.2,U)},ot=he=>{de&&(V.set(Math.sin(Q*1.1)*1.4+Math.sin(Q*2.4)*.6,Math.cos(Q*.9)*1.2+Math.sin(Q*1.7)*.5,Math.sin(Q*1.3+.5)*.8),Se.uniforms.u_time.value=Q,nt.uniforms.u_time.value=Q,Se.uniforms.u_fbm.value=V,nt.uniforms.u_fbm.value=V)},pt=()=>$e();window.addEventListener("scroll",pt,{passive:!0}),$e();const lt=he=>{_e=requestAnimationFrame(lt);const Ie=Math.min(.05,(he-pe)/1e3);if(pe=he,!rt)return;ue=Ie,Q+=ue,Ne.u_time.value=Q,St(),ot(),ii(Ie),le&&(O=Math.sin(U*10+Q)*7.5*ri(0,.2,U)),En();const be=q;let Fe,tt,_t;be<.5?(Fe=ri(-.3,1,C)*.75,tt=0,_t=89):(Fe=He(be,.9,1,0,1),tt=140,_t=Math.min(B-1,287)),Te+=Ie*Fe*Me;const vt=_t-tt+1,kt=Te*60%vt,on=Math.floor(kt)+tt,Ct=(Math.floor(kt)+1)%vt+tt,Qt=kt-Math.floor(kt);we.setXYZ(0,on,Ct,Qt),we.needsUpdate=!0;const Jt=He(y+be,.9,2,90,139,iy),Bi=Math.floor(Jt),ki=Math.ceil(Jt),Ts=Jt-Bi;if(j.setXYZ(0,Bi,ki,Ts),j.needsUpdate=!0,Ne.u_loopLinearBlend.value=He(be,0,.1,0,1)*He(be,.9,1,1,0),L>.01){for(let fr=0;fr<We;fr++){const oo=fr*7;Ve.setXYZ(fr,on+oo,Ct+oo,Qt),je.setXYZ(fr,Bi,ki,Ts)}Ve.needsUpdate=!0,je.needsUpdate=!0}if(le){const fr=S.background,oo=ye.u_resolution.value.clone();w.visible=!1,Re.visible=!1,S.background=new Ke(0),ct.visible=A>.02,ye.u_feedbackTexture.value=me.texture,ye.u_resolution.value.set(De.width,De.height),E.setRenderTarget(De),E.setClearColor(0,1),E.clear(),E.render(S,D),E.setRenderTarget(null),ye.u_resolution.value.copy(oo);const Ed=me;me=De,De=Ed,ye.u_feedbackTexture.value=me.texture,qe.u_blackTunnelTexture.value=me.texture,w.visible=!1,Re.visible=!0,S.background=fr}E.setClearColor(Ne.u_bgColor.value,1),ke.render()};return _e=requestAnimationFrame(lt),requestAnimationFrame(()=>{mt(),$e(),ke.render()}),{resize:mt,updateScroll:$e,destroy(){cancelAnimationFrame(_e),window.removeEventListener("resize",mt),window.removeEventListener("scroll",pt),ae.dispose(),oe.dispose(),ke.destroy(),E.dispose()}}}function yy(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(d=>{if(d.querySelector(".goal-word"))return;const _=d.textContent.replace(/\s+/g," ").trim().split(" ");d.innerHTML=_.map(v=>`<span class="goal-word">${v}</span>`).join(" ")});const r=dd(i),s=()=>window.innerWidth<812,o=i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const d=e.getBoundingClientRect(),_=d.width,v=d.left;n.forEach(g=>{const m=Array.from(g.querySelectorAll(".goal-word"));if(m.length<2){m.forEach(S=>{S._offsetX=0});return}m.forEach(S=>{S.style.transform="translateZ(0)"});let p=_;m.forEach(S=>{const P=S.getBoundingClientRect();S._domRect=P,p-=P.width});let T=0;const M=p/(m.length-1);m.forEach(S=>{S._offsetX=-S._domRect.left+v+T,T+=S._domRect.width+M})})};c(),window.addEventListener("resize",c);let u=null;t&&t.parentElement&&(u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const f=()=>{const d=r.range("blackTitle").ratio,_=r.range("blackTunnel").ratio,v=r.between("whiteTunnel","whiteFrameOut").ratio,g=r.between("whiteFrameBreak","astronautDrop").ratio,m=He(v,0,.25,0,1);r.progress();const p=window.innerHeight;if(t){const R=i.getBoundingClientRect(),D=window.scrollY||0,b=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+D,N=D>=b-1&&R.bottom>p;t.classList.toggle("is-pinned",N),u&&(u.style.height=N?`${t.offsetHeight||p}px`:"0px"),t.style.background=m>.5?"#f0f1fa":"#000000"}let T=He(d,a,l,0,1);const M=T>0&&T<1;let S=He(T,.5,1,1,s()?6:12,hd);S*=He(T,0,.15,.85,1,ny);let P=He(T,.9,1,1,0);P*=He(T,0,.05,0,1),P*=He(_,0,.12,1,0);const I=He(T,.4,.6,0,1,fd);if(e.classList.toggle("is-on-black",m<.5),e.style.opacity=String(P),e.style.transform=`translate3d(-50%, -50%, 0) scale(${S})`,e.style.visibility=M&&P>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(R=>{const D=R._offsetX||0;R.style.transform=`translateX(${I*D}px)`}),o){const R=He(_,.02,.15,1,0);o.style.opacity=String(R),o.style.transform="none"}return i.dataset.goalPhase=v>.01?"white":_>.01?"black-tunnel":"title",{blackTitleRatio:d,blackTunnelRatio:_,whiteTunnelRatio:v,astronautDropRatio:g,toWhite:m}};return window.addEventListener("scroll",f,{passive:!0}),f(),{updateScroll:f,ranges:r,destroy(){window.removeEventListener("scroll",f),window.removeEventListener("resize",c)}}}function Fo(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((s,o)=>{const a=document.createElement("div");a.className=e,a.textContent=s,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),o<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function My(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,s)=>{const o=document.createElement("div");o.className="word",o.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",o.appendChild(l),t.push(l)}),i.appendChild(o),r<s.length-1&&i.appendChild(document.createTextNode(" "))}),t}function yr(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function Ey(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=yr(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),s=document.getElementById("home-reel-title-line-2"),o=document.getElementById("home-reel-content"),a=yr(document.getElementById("home-reel-desc"),2),l=yr(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),f=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let d=[],_=0,v=[],g=!0;const m=()=>{d.forEach(ie=>{ie.style.transform="translate3d(0, 100%, 0)"}),v.forEach(ie=>{ie.style.transform="translate3d(0, 100%, 0)",ie.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!s||([r,s].forEach(ie=>{ie.style.overflow="hidden",ie.style.display="block",ie.style.position="relative"}),d=[...Fo(r,"word"),...Fo(s,"word")],d.forEach(ie=>{ie.style.position="relative",ie.style.bottom="0.1em"}),_=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=Fo(a,"word"),a.style.overflow="hidden"),m())})();const T=document.getElementById("home-featured"),M=yr(document.getElementById("home-featured-title"),2),S=yr(document.getElementById("home-featured-disclaimer"),2),P=yr(document.getElementById("home-featured-cta"),1);let I=[],R=[],D=[],E=!0;const b=()=>{E=!1,M&&(M._time=0,M._animating=!1),S&&(S._time=0,S._animating=!1),P&&(P._time=0,P._animating=!1),i()||(R.forEach(ie=>{ie.style.transform="translate3d(0, 100%, 0)"}),I.forEach(ie=>{ie.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(M){if(M.style.overflow="hidden",I=My(M),S){const ie=S.textContent.trim();S.textContent="";const Ee=document.createElement("div");Ee.className="line",Ee.textContent=ie,Ee.style.transform="translate3d(0, 100%, 0)",Ee.style.willChange="transform";const we=document.createElement("div");we.style.position="relative",we.style.overflow="hidden",we.appendChild(Ee),S.appendChild(we),R=[Ee]}P&&(P.style.transform="translate3d(0, 150%, 0) rotate(10deg)",P.style.opacity="0",P.style.overflow="hidden"),D=Array.from(document.querySelectorAll(".project-item")).map((ie,Ee)=>(ie._time=0,ie._animating=!1,ie.style.opacity="0",ie.style.transform="translate3d(0, 90px, 0)",ie.style.willChange="transform, opacity",ie.dataset.projectIndex=String(Ee),ie)),b()}})();const H=yr(document.getElementById("home-goal-title"),2);let B=[];H&&(H.style.overflow="hidden",B=Fo(H,"word"),B.forEach(ie=>{ie.style.transform="translate3d(0, 100%, 0)",ie.style.opacity="0"}));let Y=0,J=!1,X=0;const $=ie=>{if(!t||!e)return;if(!Bn(e).isActive){g=!0;return}g&&(g=!1,m());const we=Bn(t),j=Bn(o||a),ae=window.innerHeight*.1;if(t._time=Qn(t._time+(t._animating?ie:-ie),0,2),a&&(a._time=Qn(a._time+(a._animating?ie:-ie),0,2)),l&&(l._ratio=Vs(l._ratio+(l._animating?ie:-ie))),we.screenRatio>-1&&(t._animating=!0,i()?d.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0)"}):d.forEach((oe,me)=>{let De,Ne;me<2?(De=He(t._time-Math.abs(2-me)/10,.5,1.2,-_,0,Pt),Ne=He(t._time-me/10,0,1,100,0,Pt)):(De=0,Ne=He(t._time-me/10,0,1,-100,0,Pt)),oe.style.transform=`translate3d(${De}px, ${Ne}%, 0)`}),n)){const oe=we.showScreenOffset*-ae*.5;n.style.transform=`translate3d(0, ${oe}px, 0)`}if(j.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const oe=j.showScreenOffset*-ae*1.5;if(a&&(a.style.transform=`translate3d(0, ${oe}px, 0)`,i()?v.forEach(me=>{me.style.opacity="1",me.style.transform="translate3d(0, 0, 0)"}):v.forEach((me,De)=>{const Ne=He(a._time-De/100,0,1,.1,1,ch),qe=He(a._time-De/100,0,1,100,0,ch);me.style.opacity=String(Ne),me.style.transform=`translate3d(0, ${qe}%, 0)`})),l){const me=j.showScreenOffset*-ae*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${me}px) translate3d(0, ${He(l._ratio,0,1,150,0,Pt)}%, 0) rotate(${He(l._ratio,0,1,10,0,Pt)}deg)`,l.style.opacity=String(Pt(l._ratio))):(l.style.transform=`translateY(${me}px)`,l.style.opacity="1")}}if(c){const oe=Bn(c),me=Vs(He(oe.showScreenOffset,.05,.85,0,1,Pt));c.style.opacity=String(me),c.style.transform=`translate3d(0, ${He(me,0,1,80,0,Pt)}px, 0) scale(${He(me,0,1,.96,1,Pt)})`}if(u){const oe=Bn(u);X=Vs(He(oe.showScreenOffset,0,.7,0,1,Pt)),u.style.opacity=String(.4+X*.6),u.style.transform=`translate3d(0, ${He(X,0,1,60,0,Pt)}px, 0) scale(${He(X,0,1,.94,1,Pt)})`,J=X>.9,Y=Qn(Y+(J?ie:-ie*2),0,1.4),f.forEach((me,De)=>{const Ne=He(Y-De/10,0,.6,0,1,Pt),qe=He(Y-De/10,0,.6,0,180,Pt);me.style.transform=`scale(${Ne}) rotate(${qe}deg)`,me.style.display="inline-block"})}},G=ie=>{if(!T||!M)return;if(Bn(T).isActive){E&&b();const we=Bn(M),j=Bn(S),se=Bn(P);M._time=Qn(M._time+(M._animating?ie:-ie),0,2),S&&(S._time=Qn(S._time+(S._animating?ie:-ie),0,2)),P&&(P._time=Qn(P._time+(P._animating?ie:-ie),0,1)),we.screenRatio>-1&&(M._animating=!0,i()?I.forEach(ae=>{ae.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):I.forEach((ae,oe)=>{const me=He(M._time*1.5-oe/20,0,1,1,0,Pt),De=He(M._time*1.5-oe/20,0,1,10,0,Pt);ae.style.transform=`translate3d(0, ${me}em, 0) rotate(${De}deg)`})),j.screenRatio>-1&&S&&(S._animating=!0,i()?R.forEach(ae=>{ae.style.transform="translate3d(0, 0, 0)"}):R.forEach((ae,oe)=>{const me=He(S._time-oe/20,0,1,100,0,Pt);ae.style.transform=`translate3d(0, ${me}%, 0)`})),se.screenRatio>-1&&P&&(i()?(P.style.transform="translate3d(0, 0, 0) rotate(0deg)",P.style.opacity="1"):(P._animating=!0,P.style.transform=`translate3d(0, ${He(P._time,0,1,150,0,Pt)}%, 0) rotate(${He(P._time,0,1,10,0,Pt)}deg)`,P.style.opacity=String(Pt(P._time))))}else E=!0;D.forEach((we,j)=>{Bn(we).screenRatio>-1&&(we._animating=!0),we._time=Qn(we._time+(we._animating?ie:-ie),0,1.2);const ae=j%2*.08,oe=He(we._time-ae,0,1,0,1,Pt);we.style.opacity=String(oe),we.style.transform=`translate3d(0, ${(1-oe)*90}px, 0)`})},fe=ie=>{if(!H)return;Bn(H).screenRatio>-1&&(H._animating=!0),H._time=Qn(H._time+(H._animating?ie:-ie),0,2),B.forEach((we,j)=>{const se=He(H._time-j/20,0,1,0,1,Pt),ae=He(H._time-j/20,0,1,100,0,Pt);we.style.opacity=String(se),we.style.transform=`translate3d(0, ${ae}%, 0)`})},ge=()=>{r&&(_=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",ge),{update(ie){$(ie),G(ie),fe(ie)},destroy(){window.removeEventListener("resize",ge)}}}const il=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new z(-.0112049,-.0141946,0),boxMax:new z(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new z(-.0180006,-.00963629,0),boxMax:new z(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],Ty=`
attribute vec3 CP;
attribute float Cd;
varying float v_cd;
varying float v_lineRatio;
varying float v_s;
uniform float u_radius;
void main() {
  vec3 pos = vec3(CP.xy + position.xy * u_radius, 0.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_cd = Cd;
  v_lineRatio = position.z;
  v_s = CP.z;
}
`,by=`
varying float v_cd;
varying float v_lineRatio;
varying float v_s;
uniform float u_showRatio;
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform float u_aoThreshold;
float linearStep(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}
vec3 hsv2rgb(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  rgb = rgb * rgb * (3.0 - 2.0 * rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 lerpHSV(in vec3 a, in vec3 b, in float x) {
  float hue = (mod(mod((b.x - a.x), 1.0) + 1.5, 1.0) - 0.5) * x + a.x;
  return vec3(hue, mix(a.yz, b.yz, x));
}
void main() {
  float ao = 0.9 + 0.1 * v_cd;
  float aoRatio = linearStep(u_aoThreshold - 0.02, u_aoThreshold + 0.02, u_showRatio);
  if (step(u_showRatio, v_lineRatio) > 0.5) discard;
  float mixRatio = 1.0 - pow(1.0 - clamp(v_lineRatio, 0.0, 1.0), 2.0);
  gl_FragColor.rgb = hsv2rgb(lerpHSV(rgb2hsv(u_color1), rgb2hsv(u_color0), mixRatio));
  gl_FragColor.rgb *= min(1.0, ao + 1.0 - aoRatio);
  float alpha = abs(v_s - 0.5);
  gl_FragColor.a = linearStep(0.5, 0.5 - fwidth(alpha), alpha);
}
`,wy=`
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform float u_mixRatio;
uniform float u_ao;
varying vec3 v_color;
varying vec2 v_uv;
vec3 hsv2rgb(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  rgb = rgb * rgb * (3.0 - 2.0 * rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 lerpHSV(in vec3 a, in vec3 b, in float x) {
  float hue = (mod(mod((b.x - a.x), 1.0) + 1.5, 1.0) - 0.5) * x + a.x;
  return vec3(hue, mix(a.yz, b.yz, x));
}
void main() {
  v_color = u_ao * hsv2rgb(lerpHSV(rgb2hsv(u_color1), rgb2hsv(u_color0), u_mixRatio));
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ay=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function Ry(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function Cy(){const i=Ry(),e="/zyrax-studio/",t=await Promise.all(il.map(m=>Hn(`${e}assets/models/lines/${m.fileName}.buf`))),n=new Bc,r=new hn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);let s;try{s=new zc({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(m){return console.error("Lines WebGL unavailable",m),{update(){},resize(){},destroy(){}}}s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.autoClear=!0;const o=[],a=new z,l=new z,c=new Ms,u=new it;for(let m=0;m<il.length;m++){const p=il[m],T=t[m],M=document.querySelector(p.sectionSelector);if(!M||!T)continue;const S=new Pi,P=new Pi;S.add(P),n.add(S);const I=new Ut({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:p.aoThreshold},u_color0:{value:new Ke(p.color0)},u_color1:{value:new Ke(p.color1)},u_radius:{value:.008}},vertexShader:Ty,fragmentShader:by,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),R=new Ht(T,I);R.frustumCulled=!1,R.renderOrder=200,P.add(R);const D=new Ut({uniforms:{u_color0:{value:new Ke(p.color0)},u_color1:{value:new Ke(p.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:wy,fragmentShader:Ay,side:dn,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),E=new Ht(new Nr(2,2),D);E.frustumCulled=!1,E.renderOrder=200,P.add(E);const b=T.attributes.position.array,N=T.attributes.position.count,H=new Float32Array(N);for(let B=0;B<N;B++)H[B]=b[B*3+2];o.push({data:p,sectionEl:M,container:S,inner:P,mesh:R,mat:I,circle:E,circleMat:D,lineRatioArray:H,cpAttr:T.attributes.CP,cdAttr:T.attributes.Cd,count:N,offsetY:0,framePos:new z,frameQuat:new Ln,frameScale:new z(1,1,1)})}let f=1,d=1;const _=()=>{f=window.innerWidth||1,d=window.innerHeight||1;const m=Math.sqrt(f*f+d*d),p=d/m;u.set(f/d*p,p),r.fov=60,r.aspect=f/d,r.position.set(f/2,-d/2,d/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(f/2,-d/2,0),r.updateProjectionMatrix(),s.setSize(f,d,!1)};_(),window.addEventListener("resize",_);const v=m=>{var Ne;const{data:p,sectionEl:T,container:M,inner:S,mat:P,circle:I,circleMat:R,lineRatioArray:D,cpAttr:E,cdAttr:b,count:N}=m,B=Bn(T).top+m.offsetY,Y=d,J=p.scrollToRatioFactors;let X=Vs(-(B-J[0]*Y)/(J[1]*Y));X=ty(X);const $=.008*He(f,540,1920,2,1),G=f/u.x,fe=d/u.y;S.position.x=p.margin.x*G,S.position.y=p.margin.y*fe-B,S.scale.set(G,fe,1),P.uniforms.u_showRatio.value=X,P.uniforms.u_radius.value=$;const ge=(Ne=T.dataset)==null?void 0:Ne.goalPhase,ie=p.id==="goal"&&(ge==="black-tunnel"||ge==="white");M.position.copy(m.framePos),M.quaternion.copy(m.frameQuat),M.scale.copy(m.frameScale),M.updateMatrixWorld(!0),c.min.copy(p.boxMin),c.max.copy(p.boxMax),c.applyMatrix4(S.matrixWorld),M.visible=!ie&&c.max.y>-d&&c.min.y<0&&X>.001;let Ee=0,we=0;for(let qe=0;qe<N;qe++)X>=D[qe]&&(Ee=qe,qe===N-1?we=0:we=(X-D[qe])/(D[qe+1]-D[qe]||1));const j=Ee,se=Math.min(Ee+1,N-1);a.fromArray(E.array,Ee*3),l.fromArray(E.array,se*3),a.lerp(l,we);const ae=b.array;let oe=ae[j]*(1-we)+ae[se]*we;oe=.9+.1*oe;const me=Vs((X-(p.aoThreshold-.02))/.04);I.position.copy(a),I.scale.set($,$,1),R.uniforms.u_ao.value=Math.min(1,oe+1-me);let De=D[j]*(1-we)+D[se]*we;De=1-Math.pow(1-Qn(De,0,1),2),R.uniforms.u_mixRatio.value=De},g=()=>{for(const m of o)v(m);s.render(n,r)};return g(),{update:g,resize:_,setGoalOffset(m){const p=o.find(T=>T.data.id==="goal");p&&(p.offsetY=m||0)},setGoalFrame({scale:m=1,rotation:p=0,active:T=!1}={}){const M=o.find(b=>b.data.id==="goal");if(!M)return;if(!T){M.framePos.set(0,0,0),M.frameQuat.identity(),M.frameScale.set(1,1,1);return}const S=f*.5,P=-d*.5,I=new Et;I.makeTranslation(S,P,0);const R=new Et().makeRotationZ(-p),D=new Et().makeScale(m,m,1),E=new Et().makeTranslation(-S,-P,0);I.multiply(R).multiply(D).multiply(E),I.decompose(M.framePos,M.frameQuat,M.frameScale)},destroy(){window.removeEventListener("resize",_),s.dispose(),i.remove()}}}const Py=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),xd=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};xd();window.addEventListener("resize",xd);const pa=new Ud({duration:Py?.95:1.2,smoothWheel:!0,syncTouch:!1});window.lenis=pa;const xh=document.getElementById("project-list");xh&&(xh.innerHTML=em.map(i=>`
    <a class="project-item" href="${i.url}" target="_blank" rel="noreferrer">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.hue}"><span>${i.title}</span></div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const Dy=document.getElementById("hero-canvas"),Ly=document.getElementById("home-hero-visual-container"),Ki=document.getElementById("home-hero"),rl=document.getElementById("home-hero-title"),sl=document.getElementById("home-hero-visual-container"),Sh=document.getElementById("home-hero-scroll-container"),Sd=document.getElementById("home-goal"),Iy=document.getElementById("goal-tunnel-canvas"),Uy=document.getElementById("home-goal-tunnel-title"),Ny=document.getElementById("home-goal-tunnel-sticky"),Fy=yy(Sd,Uy,Ny);let Yo=null;const Oy=Ey();let Lr=null,yh=performance.now();wc.ticker.add(i=>{pa.raf(i*1e3);const e=performance.now(),t=Math.min(.05,(e-yh)/1e3);yh=e,Oy.update(t),Lr==null||Lr.update()});wc.ticker.lagSmoothing(0);pa.on("scroll",()=>{if(Fy.updateScroll(),Yo==null||Yo.updateScroll(),Lr==null||Lr.update(),!Ki)return;const i=Ki.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));rl&&(rl.style.transform=`translate3d(0, ${t*-12}vh, 0)`,rl.style.opacity=String(Math.max(0,1-t*1.2))),sl&&(sl.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,sl.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),Sh&&(Sh.style.opacity=String(Math.max(0,1-t*2)))});Cy().then(i=>{Lr=i}).catch(i=>console.error("Scroll lines failed",i));Sy(Iy,Sd).then(i=>{Yo=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{KS(Dy,Ly).then(()=>Ki==null?void 0:Ki.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),Ki==null||Ki.classList.add("is-in")})});function yd(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,s)=>{const o=document.createElement("span");o.className=e,o.textContent=r,o.style.transitionDelay=`${s*35}ms`,i.appendChild(o),i.appendChild(document.createTextNode(" "))})}yd(document.getElementById("home-hero-title"));yd(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const zy=document.querySelectorAll(".home-hero-scroll-container-cross");zy.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const Md=document.querySelector("[data-menu]");var Mh;(Mh=document.querySelector("[data-menu-open]"))==null||Mh.addEventListener("click",()=>{Md.hidden=!1,document.body.style.overflow="hidden"});document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",()=>{Md.hidden=!0,document.body.style.overflow=""})});var Eh;(Eh=document.querySelector("[data-reel]"))==null||Eh.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var Th;(Th=document.querySelector("[data-sound]"))==null||Th.addEventListener("click",i=>{i.currentTarget.classList.toggle("is-on")});var bh;(bh=document.querySelector("#end-bottom"))==null||bh.addEventListener("click",i=>{i.preventDefault(),pa.scrollTo("#footer-section")});
