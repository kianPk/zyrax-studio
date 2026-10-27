var qf=Object.defineProperty;var Yf=(i,e,t)=>e in i?qf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Be=(i,e,t)=>Yf(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var gc="1.3.27";function Qu(i,e,t){return Math.max(i,Math.min(e,t))}function Zf(i,e,t){return(1-t)*i+t*e}function $f(i,e,t,n){return Zf(i,e,1-Math.exp(-t*n))}function Kf(i,e){return(i%e+e)%e}var jf=class{constructor(){Be(this,"isRunning",!1);Be(this,"value",0);Be(this,"from",0);Be(this,"to",0);Be(this,"currentTime",0);Be(this,"lerp");Be(this,"duration");Be(this,"easing");Be(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=Qu(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=$f(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Jf(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Qf=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Be(this,"width",0);Be(this,"height",0);Be(this,"scrollHeight",0);Be(this,"scrollWidth",0);Be(this,"debouncedResize");Be(this,"wrapperResizeObserver");Be(this,"contentResizeObserver");Be(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Be(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Be(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=Jf(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},eh=class{constructor(){Be(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,s=t.length;r<s;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const ed=100/6,bi={passive:!1};function vc(i,e){return i===1?ed:i===2?e:1}var td=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Be(this,"touchStart",{x:0,y:0});Be(this,"lastDelta",{x:0,y:0});Be(this,"window",{width:0,height:0});Be(this,"emitter",new eh);Be(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Be(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Be(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Be(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=vc(n,this.window.width),s=vc(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Be(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,bi),this.element.addEventListener("touchstart",this.onTouchStart,bi),this.element.addEventListener("touchmove",this.onTouchMove,bi),this.element.addEventListener("touchend",this.onTouchEnd,bi)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,bi),this.element.removeEventListener("touchstart",this.onTouchStart,bi),this.element.removeEventListener("touchmove",this.onTouchMove,bi),this.element.removeEventListener("touchend",this.onTouchEnd,bi)}};const xc=i=>Math.min(1,1.001-2**(-10*i));var nd=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:_=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:b=!0,autoRaf:E=!1,anchors:S=!1,autoToggle:P=!1,allowNestedScroll:I=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:L=R,stopInertiaOnNavigate:M=!1,respectReducedMotion:w=!0}={}){Be(this,"_isScrolling",!1);Be(this,"_isStopped",!1);Be(this,"_isLocked",!1);Be(this,"_preventNextNativeScrollEvent",!1);Be(this,"_resetVelocityTimeout",null);Be(this,"_rafId",null);Be(this,"_isDraggingSelection",!1);Be(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Be(this,"isTouching");Be(this,"isIos");Be(this,"time",0);Be(this,"userData",{});Be(this,"lastVelocity",0);Be(this,"velocity",0);Be(this,"direction",0);Be(this,"options");Be(this,"targetScroll");Be(this,"animatedScroll");Be(this,"animate",new jf);Be(this,"emitter",new eh);Be(this,"dimensions");Be(this,"virtualScroll");Be(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Be(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Be(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Be(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Be(this,"onPointerDown",i=>{i.button===1&&this.reset()});Be(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,m,p,b,E;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||h==="vertical"&&((m=v.hasAttribute)==null?void 0:m.call(v,"data-lenis-prevent-vertical"))||h==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent-touch"))||s&&((E=v.hasAttribute)==null?void 0:E.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Be(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Be(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=gc,window.lenis||(window.lenis={}),window.lenis.version=gc,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=xc:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:_,wheelMultiplier:v,autoResize:g,prevent:m,virtualScroll:p,overscroll:b,autoRaf:E,anchors:S,autoToggle:P,allowNestedScroll:I,naiveDimensions:L,stopInertiaOnNavigate:M,respectReducedMotion:w},this.dimensions=new Qf(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new td(t,{touchMultiplier:_,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=i,_=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let v=null;if(typeof d=="string"?(v=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),v||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(v=d),v){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();_-=this.isHorizontal?S.left:S.top}const g=v.getBoundingClientRect(),m=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),b=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(E)?0:E)}}if(typeof d=="number"){if(d+=_,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=d-this.animatedScroll;v>this.limit/2?d-=this.limit:v<-this.limit/2&&(d+=this.limit)}}else d=Qu(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=xc:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,o,a,l,c,h,f,d,_,v;if(n-(r.time??0)>2e3){r.time=Date.now();const I=window.getComputedStyle(i);if(r.computedStyle=I,s=["auto","overlay","scroll"].includes(I.overflowX),o=["auto","overlay","scroll"].includes(I.overflowY),c=["auto"].includes(I.overscrollBehaviorX),h=["auto"].includes(I.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=i.scrollWidth,d=i.scrollHeight,_=i.clientWidth,v=i.clientHeight,a=f>_,l=d>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=d,r.clientWidth=_,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=h}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,d=r.scrollHeight,_=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,h=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,b,E,S,P;if(g==="horizontal")m=Math.round(i.scrollLeft),p=f-_,b=e,E=s,S=a,P=c;else if(g==="vertical")m=Math.round(i.scrollTop),p=d-v,b=t,E=o,S=l,P=h;else return!1;return!P&&(m>=p||m<=0)?!0:(b>0?m<p:m>0)&&E&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Kf(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function li(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function th(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ts={duration:.5,overwrite:!1,delay:0},Bl,qt,St,Nn=1e8,gt=1/Nn,Ba=Math.PI*2,id=Ba/4,rd=0,nh=Math.sqrt,sd=Math.cos,od=Math.sin,Vt=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},vi=function(e){return typeof e=="number"},kl=function(e){return typeof e>"u"},Qn=function(e){return typeof e=="object"},cn=function(e){return e!==!1},Hl=function(){return typeof window<"u"},ks=function(e){return At(e)||Vt(e)},ih=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,ad=/random\([^)]+\)/g,ld=/,\s*/g,Sc=/(?:-?\.?\d|\.)+/gi,rh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sh=/[+-]=-?[.\d]+/,cd=/[^,'"\[\]\s]+/gi,ud=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,$n,ka,Vl,An={},Ao={},oh,ah=function(e){return(Ao=Yr(e,An))&&pn},Gl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bs=function(e,t){return!t&&console.warn(e)},lh=function(e,t){return e&&(An[e]=t)&&Ao&&(Ao[e]=t)||An},ws=function(){return 0},hd={suppressEvents:!0,isStart:!0,kill:!1},_o={suppressEvents:!0,kill:!1},fd={suppressEvents:!0},Wl={},Bi=[],Ha={},ch,xn={},Yo={},yc=30,go=[],Xl="",ql=function(e){var t=e[0],n,r;if(Qn(t)||At(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=go.length;r--&&!go[r].targetTest(t););n=go[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Dh(e[r],n)))||e.splice(r,1);return e},fr=function(e){return e._gsap||ql(Fn(e))[0]._gsap},uh=function(e,t,n){return(n=e[t])&&At(n)?e[t]():kl(n)&&e.getAttribute&&e.getAttribute(t)||n},un=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},kr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},dd=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ro=function(){var e=Bi.length,t=Bi.slice(0),n,r;for(Ha={},Bi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Yl=function(e){return!!(e._initted||e._startAt||e.add)},hh=function(e,t,n,r){Bi.length&&!qt&&Ro(),e.render(t,n,!!(qt&&t<0&&Yl(e))),Bi.length&&!qt&&Ro()},fh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cd).length<2?t:Vt(e)?e.trim():e},dh=function(e){return e},Rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},pd=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Yr=function(e,t){for(var n in t)e[n]=t[n];return e},Mc=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Qn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Co=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},xs=function(e){var t=e.parent||bt,n=e.keyframes?pd(Jt(e.keyframes)):Rn;if(cn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},md=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},ph=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},zo=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Vi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},dr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},_d=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Va=function(e,t,n,r){return e._startAt&&(qt?e._startAt.revert(_o):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},gd=function i(e){return!e||e._ts&&i(e.parent)},Ec=function(e){return e._repeat?Zr(e._tTime,e=e.duration()+e._rDelay)*e:0},Zr=function(e,t){var n=Math.floor(e=Tt(e/t));return e&&n===e?n-1:n},Po=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bo=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},ko=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bo(e),n._dirty||dr(n,e)),e},mh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Po(e.rawTime(),t),(!t._dur||Us(0,t.totalDuration(),n)-t._tTime>gt)&&t.render(n,!0)),dr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-gt}},jn=function(e,t,n,r){return t.parent&&Vi(t),t._start=Tt((vi(n)?n:n||e!==bt?Dn(e,n,t):e._time)+t._delay),t._end=Tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ph(e,t,"_first","_last",e._sort?"_start":0),Ga(t)||(e._recent=t),r||mh(e,t),e._ts<0&&ko(e,e._tTime),e},_h=function(e,t){return(An.ScrollTrigger||Gl("scrollTrigger",t))&&An.ScrollTrigger.create(t,e)},gh=function(e,t,n,r,s){if($l(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ch!==yn.frame)return Bi.push(e),e._lazy=[s,r],1},vd=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ga=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},xd=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&vd(e)&&!(!e._initted&&Ga(e))||(e._ts<0||e._dp._ts<0)&&!Ga(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=Us(0,e._tDur,t),h=Zr(l,a),e._yoyo&&h&1&&(o=1-o),h!==Zr(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||qt||r||e._zTime===gt||!t&&e._zTime){if(!e._initted&&gh(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?gt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Va(e,t,n,!0),e._onUpdate&&!n&&Mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vi(e,1),!n&&!qt&&(Mn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Sd=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},$r=function(e,t,n,r){var s=e._repeat,o=Tt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Tt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&ko(e,e._tTime=e._tDur*a),e.parent&&Bo(e),n||dr(e.parent,e),e},Tc=function(e){return e instanceof sn?dr(e):$r(e,e._dur)},yd={_start:0,endTime:ws,totalDuration:ws},Dn=function i(e,t,n){var r=e.labels,s=e._recent||yd,o=e.duration()>=Nn?s.endTime(!1):e._dur,a,l,c;return Vt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Jt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ss=function(e,t,n){var r=vi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=cn(l.vars.inherit)&&l.parent;o.immediateRender=cn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Lt(t[0],o,t[s+1])},Yi=function(e,t){return e||e===0?t(e):t},Us=function(e,t,n){return n<e?e:n>t?t:n},jt=function(e,t){return!Vt(e)||!(t=ud.exec(e))?"":t[1]},Md=function(e,t,n){return Yi(n,function(r){return Us(e,t,r)})},Wa=[].slice,vh=function(e,t){return e&&Qn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qn(e[0]))&&!e.nodeType&&e!==$n},Ed=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Vt(r)&&!t||vh(r,1)?(s=n).push.apply(s,Fn(r)):n.push(r)})||n},Fn=function(e,t,n){return St&&!t&&St.selector?St.selector(e):Vt(e)&&!n&&(ka||!Kr())?Wa.call((t||Vl).querySelectorAll(e),0):Jt(e)?Ed(e,n):vh(e)?Wa.call(e,0):e?[e]:[]},Xa=function(e){return e=Fn(e)[0]||bs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Fn(t,n.querySelectorAll?n:n===e?bs("Invalid scope")||Vl.createElement("div"):e)}},xh=function(e){return e.sort(function(){return .5-Math.random()})},Sh=function(e){if(At(e))return e;var t=Qn(e)?e:{each:e},n=pr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,h=r,f=r;return Vt(r)?h=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],f=r[1]),function(d,_,v){var g=(v||t).length,m=o[g],p,b,E,S,P,I,R,L,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Nn])[1],!M){for(R=-Nn;R<(R=v[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=l?Math.min(M,g)*h-.5:r%M,b=M===Nn?0:l?g*f/M-.5:r/M|0,R=0,L=Nn,I=0;I<g;I++)E=I%M-p,S=b-(I/M|0),m[I]=P=c?Math.abs(c==="y"?S:E):nh(E*E+S*S),P>R&&(R=P),P<L&&(L=P);r==="random"&&xh(m),m.max=R-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=jt(t.amount||t.each)||0,n=n&&g<0?Fd(n):n}return g=(m[d]-m.min)/m.max||0,Tt(m.b+(n?n(g):g)*m.v)+m.u}},qa=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Tt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(vi(n)?0:jt(n))}},yh=function(e,t){var n=Jt(e),r,s;return!n&&Qn(e)&&(r=n=e.radius||Nn,e.values?(e=Fn(e.values),(s=!vi(e[0]))&&(r*=r)):e=qa(e.increment)),Yi(t,n?At(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Nn,h=0,f=e.length,d,_;f--;)s?(d=e[f].x-a,_=e[f].y-l,d=d*d+_*_):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!r||c<=r?e[h]:o,s||h===o||vi(o)?h:h+jt(o)}:qa(e))},Mh=function(e,t,n,r){return Yi(Jt(e)?!t:n===!0?!!(n=0):!r,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Td=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},bd=function(e,t){return function(n){return e(parseFloat(n))+(t||jt(n))}},wd=function(e,t,n){return Th(e,t,0,1,n)},Eh=function(e,t,n){return Yi(n,function(r){return e[~~t(r)]})},Ad=function i(e,t,n){var r=t-e;return Jt(e)?Eh(e,i(0,e.length),t):Yi(n,function(s){return(r+(s-e)%r)%r+e})},Rd=function i(e,t,n){var r=t-e,s=r*2;return Jt(e)?Eh(e,i(0,e.length-1),t):Yi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},As=function(e){return e.replace(ad,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(ld);return Mh(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Th=function(e,t,n,r,s){var o=t-e,a=r-n;return Yi(s,function(l){return n+((l-e)/o*a||0)})},Cd=function i(e,t,n,r){var s=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!s){var o=Vt(e),a={},l,c,h,f,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(i(e[c-1],e[c]));f--,s=function(v){v*=f;var g=Math.min(d,~~v);return h[g](v-g)},n=t}else r||(e=Yr(Jt(e)?[]:{},e));if(!h){for(l in t)Zl.call(a,e,l,"get",t[l]);s=function(v){return Jl(v,a)||(o?e.p:e)}}}return Yi(n,s)},bc=function(e,t,n){var r=e.labels,s=Nn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mn=function(e,t,n){var r=e.vars,s=r[t],o=St,a=e._ctx,l,c,h;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Bi.length&&Ro(),a&&(St=a),h=l?s.apply(c,l):s.call(c),St=o,h},ms=function(e){return Vi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&Mn(e,"onInterrupt"),e},Or,bh=[],wh=function(e){if(e)if(e=!e.name&&e.default||e,Hl()||e.headless){var t=e.name,n=At(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ws,render:Jl,add:Zl,kill:qd,modifier:Xd,rawVars:0},o={targetTest:0,get:0,getSetter:jl,aliases:{},register:0};if(Kr(),e!==r){if(xn[t])return;Rn(r,Rn(Co(e,s),o)),Yr(r.prototype,Yr(s,Co(e,o))),xn[r.prop=t]=r,e.targetTest&&(go.push(r),Wl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lh(t,r),e.register&&e.register(pn,r,hn)}else bh.push(e)},_t=255,_s={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},Zo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},Ah=function(e,t,n){var r=e?vi(e)?[e>>16,e>>8&_t,e&_t]:0:_s.black,s,o,a,l,c,h,f,d,_,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_s[e])r=_s[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&_t,r&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Sc),!t)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=Zo(l+1/3,s,o),r[1]=Zo(l,s,o),r[2]=Zo(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(rh),n&&r.length<4&&(r[3]=1),r}else r=e.match(Sc)||_s.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/_t,o=r[1]/_t,a=r[2]/_t,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(_=f-d,c=h>.5?_/(2-f-d):_/(f+d),l=f===s?(o-a)/_+(o<a?6:0):f===o?(a-s)/_+2:(s-o)/_+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},Rh=function(e){var t=[],n=[],r=-1;return e.split(ki).forEach(function(s){var o=s.match(Fr)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},wc=function(e,t,n){var r="",s=(e+r).match(ki),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return e;if(s=s.map(function(d){return(d=Ah(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Rh(e),l=n.c,l.join(r)!==h.c.join(r)))for(c=e.replace(ki,"1").split(Fr),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(ki),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},ki=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _s)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Pd=/hsl[a]?\(/,Ch=function(e){var t=e.join(" "),n;if(ki.lastIndex=0,ki.test(t))return n=Pd.test(t),e[1]=wc(e[1],n),e[0]=wc(e[0],n,Rh(e[1])),!0},Rs,yn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,f,d,_,v=function g(m){var p=i()-r,b=m===!0,E,S,P,I;if((p>e||p<0)&&(n+=p-t),r+=p,P=r-n,E=P-o,(E>0||b)&&(I=++f.frame,d=P-f.time*1e3,f.time=P=P/1e3,o+=E+(E>=s?4:s-E),S=1),b||(l=c(g)),S)for(_=0;_<a.length;_++)a[_](P,d,I,m)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){oh&&(!ka&&Hl()&&($n=ka=window,Vl=$n.document||{},An.gsap=pn,($n.gsapVersions||($n.gsapVersions=[])).push(pn.version),ah(Ao||$n.GreenSockGlobals||!$n.gsap&&$n||{}),bh.forEach(wh)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Rs=1,v(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Rs=0,c=ws},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,b){var E=p?function(S,P,I,R){m(S,P,I,R),f.remove(E)}:m;return f.remove(m),a[b?"unshift":"push"](E),Kr(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&_>=p&&_--},_listeners:a},f})(),Kr=function(){return!Rs&&yn.wake()},ct={},Dd=/^[\d.\-M][\d.\-,\s]/,Ld=/["']/g,Id=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Ld,"").trim():+c,r=l.substr(a+1).trim();return t},Ud=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Nd=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Id(t[1])]:Ud(e).split(",").map(fh)):ct._CE&&Dd.test(e)?ct._CE("",e):n},Fd=function(e){return function(t){return 1-e(1-t)}},pr=function(e,t){return e&&(At(e)?e:ct[e]||Nd(e))||t},xr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return un(e,function(a){ct[a]=An[a]=s,ct[o=a.toLowerCase()]=n;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},Ph=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$o=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ba*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*od((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ph(a);return s=Ba/s,l.config=function(c,h){return i(e,c,h)},l},Ko=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ph(n);return r.config=function(s){return i(e,s)},r};un("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;xr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;xr("Elastic",$o("in"),$o("out"),$o());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};xr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);xr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});xr("Circ",function(i){return-(nh(1-i*i)-1)});xr("Sine",function(i){return i===1?1:-sd(i*id)+1});xr("Back",Ko("in"),Ko("out"),Ko());ct.SteppedEase=ct.steps=An.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-gt;return function(a){return((r*Us(0,o,a)|0)+s)*n}}};Ts.ease=ct["quad.out"];un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Xl+=i+","+i+"Params,"});var Dh=function(e,t){this.id=rd++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:uh,this.set=t?t.getSetter:jl},Cs=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$r(this,+t.duration,1,1),this.data=t.data,St&&(this._ctx=St,St.data.push(this)),Rs||yn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$r(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Kr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ko(this,n),!s._dp||s.parent||mh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===gt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hh(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ec(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ec(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Zr(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Po(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-gt?0:this._rts,this.totalTime(Us(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Bo(this),_d(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Kr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Tt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&jn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Po(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=fd);var r=qt;return qt=n,Yl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),qt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Tc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Tc(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Dn(this,n),cn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,cn(r)),this._dur||(this._zTime=-gt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-gt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=At(n)?n:dh,l=function(){var h=r.then;r.then=null,s&&s(),At(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=h),o(a),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ms(this)},i})();Rn(Cs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var sn=(function(i){th(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=cn(n.sortChildren),bt&&jn(n.parent||bt,li(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_h(li(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ss(0,arguments,this),this},t.from=function(r,s,o){return Ss(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ss(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,xs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(r,s,Dn(this,o),1),this},t.call=function(r,s,o){return jn(this,Lt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Lt(r,o,Dn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,xs(o).immediateRender=cn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},t.staggerFromTo=function(r,s,o,a,l,c,h,f){return a.startAt=o,xs(a).immediateRender=cn(a.immediateRender),this.staggerTo(r,s,a,l,c,h,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:Tt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,_,v,g,m,p,b,E,S,P,I,R;if(this!==bt&&h>l&&r>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),d=h,S=this._start,E=this._ts,p=!E,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Tt(h%m),h===l?(g=this._repeat,d=c):(P=Tt(h/m),g=~~P,g&&g===P&&(d=c,g--),d>c&&(d=c)),P=Zr(this._tTime,m),!a&&this._tTime&&P!==g&&this._tTime-P*m-this._dur<=0&&(P=g),I&&g&1&&(d=c-d,R=1),g!==P&&!this._lock){var L=I&&P&1,M=L===(I&&g&1);if(g<P&&(L=!L),a=L?0:h%c?c:h,this._lock=1,this.render(a||(R?0:Tt(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,P=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Sd(this,Tt(a),Tt(d)),b&&(h-=d-(d=b._start))),this._tTime=h,this._time=d,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&c&&!s&&!P&&(Mn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&r>=0)for(_=this._first;_;){if(v=_._next,(_._act||d>=_._start)&&_._ts&&b!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(d-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(d-_._start)*_._ts,s,o),d!==this._time||!this._ts&&!p){b=0,v&&(h+=this._zTime=-gt);break}}_=v}else{_=this._last;for(var w=r<0?r:d;_;){if(v=_._prev,(_._act||w<=_._end)&&_._ts&&b!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(w-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(w-_._start)*_._ts,s,o||qt&&Yl(_)),d!==this._time||!this._ts&&!p){b=0,v&&(h+=this._zTime=w?-gt:gt);break}}_=v}}if(b&&!s&&(this.pause(),b.render(d>=a?0:-gt)._zTime=d>=a?1:-1,this._ts))return this._start=S,Bo(this),this.render(r,s,o);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Vi(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(Mn(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(vi(s)||(s=Dn(this,s,r)),!(r instanceof Cs)){if(Jt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Vt(r))return this.addLabel(r,s);if(At(r))r=Lt.delayedCall(0,r);else return this}return this!==r?jn(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Nn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Lt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Vt(r)?this.removeLabel(r):At(r)?this.killTweensOf(r):(r.parent===this&&zo(this,r),r===this._recent&&(this._recent=this._last),dr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(yn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Dn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Lt.delayedCall(0,s||ws,o);return a.data="isPause",this._hasPause=1,jn(this,a,Dn(this,r))},t.removePause=function(r){var s=this._first;for(r=Dn(this,r);s;)s._start===r&&s.data==="isPause"&&Vi(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Fi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Fn(r),l=this._first,c=vi(s),h;l;)l instanceof Lt?dd(l._targets,a)&&(c?(!Fi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Dn(o,r),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,_,v=Lt.to(o,Rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||gt,onStart:function(){if(o.pause(),!_){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==m&&$r(v,m,0,1).render(v._time,!0,!0),_=1}h&&h.apply(v,f||[])}},s));return d?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Rn({startAt:{time:Dn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),bc(this,Dn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),bc(this,Dn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Tt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return dr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),dr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Nn,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,jn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Tt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;$r(o,o===bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(bt._ts&&(hh(bt,Po(r,bt)),ch=yn.frame),yn.frame>=yc){yc+=bn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&bn.autoSleep&&yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yn.sleep()}}},e})(Cs);Rn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Od=function(e,t,n,r,s,o,a){var l=new hn(this._pt,e,t,0,1,Oh,null,s),c=0,h=0,f,d,_,v,g,m,p,b;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=As(r)),o&&(b=[n,r],o(b,e,t),n=b[0],r=b[1]),d=n.match(qo)||[];f=qo.exec(r);)v=f[0],g=r.substring(c,f.index),_?_=(_+1)%5:g.substr(-5)==="rgba("&&(_=1),v!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:v.charAt(1)==="="?kr(m,v)-m:parseFloat(v)-m,m:_&&_<4?Math.round:0},c=qo.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(sh.test(r)||p)&&(l.e=0),this._pt=l,l},Zl=function(e,t,n,r,s,o,a,l,c,h){At(r)&&(r=r(s||0,e,o));var f=e[t],d=n!=="get"?n:At(f)?c?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,_=At(f)?c?Vd:Nh:Kl,v;if(Vt(r)&&(~r.indexOf("random(")&&(r=As(r)),r.charAt(1)==="="&&(v=kr(d,r)+(jt(d)||0),(v||v===0)&&(r=v))),!h||d!==r||Ya)return!isNaN(d*r)&&r!==""?(v=new hn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?Wd:Fh,0,_),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&Gl(t,r),Od.call(this,e,t,d,r,_,l||bn.stringFilter,c))},zd=function(e,t,n,r,s){if(At(e)&&(e=ys(e,s,t,n,r)),!Qn(e)||e.style&&e.nodeType||Jt(e)||ih(e))return Vt(e)?ys(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=ys(e[a],s,t,n,r);return o},Lh=function(e,t,n,r,s,o){var a,l,c,h;if(xn[e]&&(a=new xn[e]).init(s,a.rawVars?t[e]:zd(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new hn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Or))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Fi,Ya,$l=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,f=r.yoyoEase,d=r.keyframes,_=r.autoRevert,v=e._dur,g=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!Bl,S=e.timeline,P=r.easeReverse||f,I,R,L,M,w,U,H,k,Z,K,X,j,V;if(S&&(!d||!s)&&(s="none"),e._ease=pr(s,Ts.ease),e._rEase=P&&(pr(P)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(k=m[0]?fr(m[0]).harness:0,j=k&&r[k.prop],I=Co(r,Wl),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!_?g.render(-1,!0):g.revert(h&&v?_o:hd),g._lazy=0),o){if(Vi(e._startAt=Lt.set(m,Rn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Mn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!a&&!_)&&e._startAt.revert(_o),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&v&&!g){if(t&&(a=!1),L=Rn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&cn(l),immediateRender:a,stagger:0,parent:p},I),j&&(L[k.prop]=j),Vi(e._startAt=Lt.set(m,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(_o):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&cn(l)||l&&!v,R=0;R<m.length;R++){if(w=m[R],H=w._gsap||ql(m)[R]._gsap,e._ptLookup[R]=K={},Ha[H.id]&&Bi.length&&Ro(),X=b===m?R:b.indexOf(w),k&&(Z=new k).init(w,j||I,e,X,b)!==!1&&(e._pt=M=new hn(e._pt,w,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(_e){K[_e]=M}),Z.priority&&(U=1)),!k||j)for(L in I)xn[L]&&(Z=Lh(L,I,e,X,w,b))?Z.priority&&(U=1):K[L]=M=Zl.call(e,w,L,"get",I[L],X,b,0,r.stringFilter);e._op&&e._op[R]&&e.kill(w,e._op[R]),E&&e._pt&&(Fi=e,bt.killTweensOf(w,K,e.globalTime(t)),V=!e.parent,Fi=0),e._pt&&l&&(Ha[H.id]=1)}U&&zh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,d&&t<=0&&S.render(Nn,!0,!0)},Bd=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,_;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,_=e._targets.length;_--;){if(h=d[_][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ya=1,e.vars[t]="+=0",$l(e,a),Ya=0,l?bs(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(_=c.length;_--;)f=c[_],h=f._pt||f,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ct(n)+jt(f.e)),f.b&&(f.b=h.s+jt(f.b))},kd=function(e,t){var n=e[0]?fr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Yr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Hd=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Jt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ys=function(e,t,n,r,s){return At(e)?e.call(t,n,r,s):Vt(e)&&~e.indexOf("random(")?As(e):e},Ih=Xl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Uh={};un(Ih+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Uh[i]=1});var Lt=(function(i){th(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:xs(r))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,_=l.overwrite,v=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=r.parent||bt,b=(Jt(n)||ih(n)?vi(n[0]):"length"in r)?[n]:Fn(n),E,S,P,I,R,L,M,w;if(a._targets=b.length?ql(b):bs("GSAP target "+n+" not found. https://gsap.com",!bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=_,v||d||ks(c)||ks(h)){r=a.vars;var U=r.easeReverse||r.yoyoEase;if(E=a.timeline=new sn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),E.kill(),E.parent=E._dp=li(a),E._start=0,d||ks(c)||ks(h)){if(I=b.length,M=d&&Sh(d),Qn(d))for(R in d)~Ih.indexOf(R)&&(w||(w={}),w[R]=d[R]);for(S=0;S<I;S++)P=Co(r,Uh),P.stagger=0,U&&(P.easeReverse=U),w&&Yr(P,w),L=b[S],P.duration=+ys(c,li(a),S,L,b),P.delay=(+ys(h,li(a),S,L,b)||0)-a._delay,!d&&I===1&&P.delay&&(a._delay=h=P.delay,a._start+=h,P.delay=0),E.to(L,P,M?M(S,L,b):0),E._ease=ct.none;E.duration()?c=h=0:a.timeline=0}else if(v){xs(Rn(E.vars.defaults,{ease:"none"})),E._ease=pr(v.ease||r.ease||"none");var H=0,k,Z,K;if(Jt(v))v.forEach(function(X){return E.to(b,X,">")}),E.duration();else{P={};for(R in v)R==="ease"||R==="easeEach"||Hd(R,v[R],P,v.easeEach);for(R in P)for(k=P[R].sort(function(X,j){return X.t-j.t}),H=0,S=0;S<k.length;S++)Z=k[S],K={ease:Z.e,duration:(Z.t-(S?k[S-1].t:0))/100*c},K[R]=Z.v,E.to(b,K,H),H+=K.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return _===!0&&!Bl&&(Fi=li(a),bt.killTweensOf(b),Fi=0),jn(p,li(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!v&&a._start===Tt(p._time)&&cn(f)&&gd(li(a))&&p.data!=="nested")&&(a._tTime=-gt,a.render(Math.max(0,-h)||0)),m&&_h(li(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,f=r>l-gt&&!h?l:r<gt?0:r,d,_,v,g,m,p,b,E;if(!c)xd(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+r,s,o);if(d=Tt(f%g),f===l?(v=this._repeat,d=c):(m=Tt(f/g),v=~~m,v&&v===m?(d=c,v--):d>c&&(d=c)),p=this._yoyo&&v&1,p&&(d=c-d),m=Zr(this._tTime,g),d===a&&!o&&this._initted&&v===m)return this._tTime=f,this;v!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Tt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(gh(this,h?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var P=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=P?(S?-1:1)/P:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/c);if(this._from&&(this.ratio=b=1-b),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Mn(this,"onStart"),this._tTime!==f))return this;for(_=this._pt;_;)_.r(b,_.d),_=_._next;E&&E.render(r<0?r:E._dur*E._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&Va(this,r,s,o),Mn(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Va(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Vi(this,1),!s&&!(h&&!a)&&(f||a||p)&&(Mn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Rs||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||$l(this,c),h=this._ease(c/this._dur),Bd(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(ko(this,0),this.parent||ph(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ms(this):this.scrollTrigger&&this.scrollTrigger.kill(!!qt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Fi&&Fi.vars.overwrite!==!0)._first||ms(this),this.parent&&o!==this.timeline.totalDuration()&&$r(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Fn(r):a,c=this._ptLookup,h=this._pt,f,d,_,v,g,m,p;if((!s||s==="all")&&md(a,l))return s==="all"&&(this._pt=0),ms(this);for(f=this._op=this._op||[],s!=="all"&&(Vt(s)&&(g={},un(s,function(b){return g[b]=1}),s=g),s=kd(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,v=d,_={}):(_=f[p]=f[p]||{},v=s);for(g in v)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&zo(this,m,"_pt"),delete d[g]),_!=="all"&&(_[g]=1)}return this._initted&&!this._pt&&h&&ms(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ss(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ss(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return bt.killTweensOf(r,s,o)},e})(Cs);Rn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});un("staggerTo,staggerFrom,staggerFromTo",function(i){Lt[i]=function(){var e=new sn,t=Wa.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Kl=function(e,t,n){return e[t]=n},Nh=function(e,t,n){return e[t](n)},Vd=function(e,t,n,r){return e[t](r.fp,n)},Gd=function(e,t,n){return e.setAttribute(t,n)},jl=function(e,t){return At(e[t])?Nh:kl(e[t])&&e.setAttribute?Gd:Kl},Fh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Wd=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Oh=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Jl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Xd=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},qd=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?zo(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Yd=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},zh=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},hn=(function(){function i(t,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Fh,this.d=l||this,this.set=c||Kl,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Yd,this.m=n,this.mt=s,this.tween=r},i})();un(Xl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Wl[i]=1});An.TweenMax=An.TweenLite=Lt;An.TimelineLite=An.TimelineMax=sn;bt=new sn({sortChildren:!1,defaults:Ts,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bn.stringFilter=Ch;var mr=[],vo={},Zd=[],Ac=0,$d=0,jo=function(e){return(vo[e]||Zd).map(function(t){return t()})},Za=function(){var e=Date.now(),t=[];e-Ac>2&&(jo("matchMediaInit"),mr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=$n.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),jo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Ac=e,jo("matchMedia"))},Bh=(function(){function i(t,n){this.selector=n&&Xa(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$d++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){At(n)&&(s=r,r=n,n=At);var o=this,a=function(){var c=St,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Xa(s)),St=o,f=r.apply(o,arguments),At(f)&&o._r.push(f),St=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===At?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=St;St=null,n(this),St=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Lt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Lt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=mr.length;o--;)mr[o].id===this.id&&mr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),Kd=(function(){function i(t){this.contexts=[],this.scope=t,St&&St.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Qn(n)||(n={matches:n});var o=new Bh(0,s||this.scope),a=o.conditions={},l,c,h;St&&!o.selector&&(o.selector=St.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=$n.matchMedia(n[c]),l&&(mr.indexOf(o)<0&&mr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Za):l.addEventListener("change",Za)));return h&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Do={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return wh(r)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Vt(e)&&(e=Fn(e)[0]);var s=fr(e||{}).get,o=n?dh:fh;return n==="native"&&(n=""),e&&(t?o((xn[t]&&xn[t].get||s)(e,t,n,r)):function(a,l,c){return o((xn[a]&&xn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Fn(e),e.length>1){var r=e.map(function(h){return pn.quickSetter(h,t,n)}),s=r.length;return function(h){for(var f=s;f--;)r[f](h)}}e=e[0]||{};var o=xn[t],a=fr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;Or._pt=0,f.init(e,n?h+n:h,Or,0,[e]),f.render(1,f),Or._pt&&Jl(1,Or)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var r,s=pn.to(e,Rn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=pr(e.ease,Ts.ease)),Mc(Ts,e||{})},config:function(e){return Mc(bn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!xn[a]&&!An[a]&&bs(t+" effect requires "+a+" plugin.")}),Yo[t]=function(a,l,c){return n(Fn(a),Rn(l||{},s),c)},o&&(sn.prototype[t]=function(a,l,c){return this.add(Yo[t](a,Qn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=pr(t)},parseEase:function(e,t){return arguments.length?pr(e,t):ct},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new sn(e),r,s;for(n.smoothChildTiming=cn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,r=bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Lt&&r.vars.onComplete===r._targets[0]))&&jn(n,r,r._start-r._delay),r=s;return jn(bt,n,0),n},context:function(e,t){return e?new Bh(e,t):St},matchMedia:function(e){return new Kd(e)},matchMediaRefresh:function(){return mr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Za()},addEventListener:function(e,t){var n=vo[e]||(vo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Ad,wrapYoyo:Rd,distribute:Sh,random:Mh,snap:yh,normalize:wd,getUnit:jt,clamp:Md,splitColor:Ah,toArray:Fn,selector:Xa,mapRange:Th,pipe:Td,unitize:bd,interpolate:Cd,shuffle:xh},install:ah,effects:Yo,ticker:yn,updateRoot:sn.updateRoot,plugins:xn,globalTimeline:bt,core:{PropTween:hn,globals:lh,Tween:Lt,Timeline:sn,Animation:Cs,getCache:fr,_removeLinkedListItem:zo,reverting:function(){return qt},context:function(e){return e&&St&&(St.data.push(e),e._ctx=St),St},suppressOverwrites:function(e){return Bl=e}}};un("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Do[i]=Lt[i]});yn.add(sn.updateRoot);Or=Do.to({},{duration:0});var jd=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Jd=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=jd(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Jo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Vt(s)&&(l={},un(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Jd(a,s)}}}},pn=Do.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Jo("roundProps",qa),Jo("modifiers"),Jo("snap",yh))||Do;Lt.version=sn.version=pn.version="3.15.0";oh=1;Hl()&&Kr();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rc,Oi,Hr,Ql,ur,Cc,ec,Qd=function(){return typeof window<"u"},xi={},sr=180/Math.PI,Vr=Math.PI/180,yr=Math.atan2,Pc=1e8,tc=/([A-Z])/g,ep=/(left|right|width|margin|padding|x)/i,tp=/[\s,\(]\S/,Jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$a=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},np=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ip=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rp=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sp=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},kh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Hh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},op=function(e,t,n){return e.style[t]=n},ap=function(e,t,n){return e.style.setProperty(t,n)},lp=function(e,t,n){return e._gsap[t]=n},cp=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},up=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},hp=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},wt="transform",fn=wt+"Origin",fp=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in xi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ci(r,a)}):this.tfm[e]=o.x?o[e]:ci(r,e),e===fn&&(this.tfm.zOrigin=o.zOrigin);else return Jn.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(wt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fn,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},Vh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},dp=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(tc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ec(),(!s||!s.isStart)&&!n[wt]&&(Vh(n),r.zOrigin&&n[fn]&&(n[fn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Gh=function(e,t){var n={target:e,props:[],revert:dp,save:fp};return e._gsap||pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Wh,Ka=function(e,t){var n=Oi.createElementNS?Oi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Oi.createElement(e);return n&&n.style?n:Oi.createElement(e)},En=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(tc,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,jr(t)||t,1)||""},Dc="O,Moz,ms,Ms,Webkit".split(","),jr=function(e,t,n){var r=t||ur,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Dc[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Dc[o]:"")+e},ja=function(){Qd()&&window.document&&(Rc=window,Oi=Rc.document,Hr=Oi.documentElement,ur=Ka("div")||{style:{}},Ka("div"),wt=jr(wt),fn=wt+"Origin",ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wh=!!jr("perspective"),ec=pn.core.reverting,Ql=1)},Lc=function(e){var t=e.ownerSVGElement,n=Ka("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Hr.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Hr.removeChild(n),s},Ic=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Xh=function(e){var t,n;try{t=e.getBBox()}catch{t=Lc(e),n=1}return t&&(t.width||t.height)||n||(t=Lc(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ic(e,["x","cx","x1"])||0,y:+Ic(e,["y","cy","y1"])||0,width:0,height:0}:t},qh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xh(e))},Gi=function(e,t){if(t){var n=e.style,r;t in xi&&t!==fn&&(t=wt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(tc,"-$1").toLowerCase())):n.removeAttribute(t)}},zi=function(e,t,n,r,s,o){var a=new hn(e._pt,t,n,0,1,o?Hh:kh);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Uc={deg:1,rad:1,turn:1},pp={grid:1,flex:1},Wi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ur.style,l=ep.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",_=r==="%",v,g,m,p;if(r===o||!s||Uc[r]||Uc[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&qh(e),(_||o==="%")&&(xi[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[h],Ct(_?s/v*f:s/100*v);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Oi||!g.appendChild)&&(g=Oi.body),m=g._gsap,m&&_&&m.width&&l&&m.time===yn.time&&!m.uncache)return Ct(s/m.width*f);if(_&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=f+r,v=e[h],b?e.style[t]=b:Gi(e,t)}else(_||o==="%")&&!pp[En(g,"display")]&&(a.position=En(e,"position")),g===e&&(a.position="static"),g.appendChild(ur),v=ur[h],g.removeChild(ur),a.position="absolute";return l&&_&&(m=fr(g),m.time=yn.time,m.width=g[h]),Ct(d?v*s/f:v&&s?f/v*s:0)},ci=function(e,t,n,r){var s;return Ql||ja(),t in Jn&&t!=="transform"&&(t=Jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),xi[t]&&t!=="transform"?(s=Ds(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Io(En(e,fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Lo[t]&&Lo[t](e,t,n)||En(e,t)||uh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Wi(e,t,s,n)+n:s},mp=function(e,t,n,r){if(!n||n==="none"){var s=jr(t,e,1),o=s&&En(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=En(e,"borderTopColor"))}var a=new hn(this._pt,e.style,t,0,1,Oh),l=0,c=0,h,f,d,_,v,g,m,p,b,E,S,P;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=En(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=En(e,t)||r,g?e.style[t]=g:Gi(e,t)),h=[n,r],Ch(h),n=h[0],r=h[1],d=n.match(Fr)||[],P=r.match(Fr)||[],P.length){for(;f=Fr.exec(r);)m=f[0],b=r.substring(l,f.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),m!==(g=d[c++]||"")&&(_=parseFloat(g)||0,S=g.substr((_+"").length),m.charAt(1)==="="&&(m=kr(_,m)+S),p=parseFloat(m),E=m.substr((p+"").length),l=Fr.lastIndex-E.length,E||(E=E||bn.units[t]||S,l===r.length&&(r+=E,a.e+=E)),S!==E&&(_=Wi(e,t,g,E)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:_,c:p-_,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Hh:kh;return sh.test(r)&&(a.e=0),this._pt=a,a},Nc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_p=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Nc[n]||n,t[1]=Nc[r]||r,t.join(" ")},gp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],xi[a]&&(l=1,a=a==="transformOrigin"?fn:wt),Gi(n,a);l&&(Gi(n,wt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ds(n,1),o.uncache=1,Vh(r)))}},Lo={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new hn(e._pt,t,n,0,0,gp);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ps=[1,0,0,1,0,0],Yh={},Zh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Fc=function(e){var t=En(e,wt);return Zh(t)?Ps:t.substr(7).match(rh).map(Ct)},nc=function(e,t){var n=e._gsap||fr(e),r=e.style,s=Fc(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ps:s):(s===Ps&&!e.offsetParent&&e!==Hr&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Hr.appendChild(e)),s=Fc(e),l?r.display=l:Gi(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Hr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ja=function(e,t,n,r,s,o){var a=e._gsap,l=s||nc(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,_=l[0],v=l[1],g=l[2],m=l[3],p=l[4],b=l[5],E=t.split(" "),S=parseFloat(E[0])||0,P=parseFloat(E[1])||0,I,R,L,M;n?l!==Ps&&(R=_*m-v*g)&&(L=S*(m/R)+P*(-g/R)+(g*b-m*p)/R,M=S*(-v/R)+P*(_/R)-(_*b-v*p)/R,S=L,P=M):(I=Xh(e),S=I.x+(~E[0].indexOf("%")?S/100*I.width:S),P=I.y+(~(E[1]||E[0]).indexOf("%")?P/100*I.height:P)),r||r!==!1&&a.smooth?(p=S-c,b=P-h,a.xOffset=f+(p*_+b*g)-p,a.yOffset=d+(p*v+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=P,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[fn]="0px 0px",o&&(zi(o,a,"xOrigin",c,S),zi(o,a,"yOrigin",h,P),zi(o,a,"xOffset",f,a.xOffset),zi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+P)},Ds=function(e,t){var n=e._gsap||new Dh(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=En(e,fn)||"0",h,f,d,_,v,g,m,p,b,E,S,P,I,R,L,M,w,U,H,k,Z,K,X,j,V,_e,xe,se,Ee,be,$,he;return h=f=d=g=m=p=b=E=S=0,_=v=1,n.svg=!!(e.getCTM&&qh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),r.scale=r.rotate=r.translate="none"),R=nc(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Ja(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,R)),P=n.xOrigin||0,I=n.yOrigin||0,R!==Ps&&(U=R[0],H=R[1],k=R[2],Z=R[3],h=K=R[4],f=X=R[5],R.length===6?(_=Math.sqrt(U*U+H*H),v=Math.sqrt(Z*Z+k*k),g=U||H?yr(H,U)*sr:0,b=k||Z?yr(k,Z)*sr+g:0,b&&(v*=Math.abs(Math.cos(b*Vr))),n.svg&&(h-=P-(P*U+I*k),f-=I-(P*H+I*Z))):(he=R[6],be=R[7],xe=R[8],se=R[9],Ee=R[10],$=R[11],h=R[12],f=R[13],d=R[14],L=yr(he,Ee),m=L*sr,L&&(M=Math.cos(-L),w=Math.sin(-L),j=K*M+xe*w,V=X*M+se*w,_e=he*M+Ee*w,xe=K*-w+xe*M,se=X*-w+se*M,Ee=he*-w+Ee*M,$=be*-w+$*M,K=j,X=V,he=_e),L=yr(-k,Ee),p=L*sr,L&&(M=Math.cos(-L),w=Math.sin(-L),j=U*M-xe*w,V=H*M-se*w,_e=k*M-Ee*w,$=Z*w+$*M,U=j,H=V,k=_e),L=yr(H,U),g=L*sr,L&&(M=Math.cos(L),w=Math.sin(L),j=U*M+H*w,V=K*M+X*w,H=H*M-U*w,X=X*M-K*w,U=j,K=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),_=Ct(Math.sqrt(U*U+H*H+k*k)),v=Ct(Math.sqrt(X*X+he*he)),L=yr(K,X),b=Math.abs(L)>2e-4?L*sr:0,S=$?1/($<0?-$:$):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Zh(En(e,wt)),j&&e.setAttribute("transform",j))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(_*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ct(_),n.scaleY=Ct(v),n.rotation=Ct(g)+a,n.rotationX=Ct(m)+a,n.rotationY=Ct(p)+a,n.skewX=b+a,n.skewY=E+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[fn]=Io(c)),n.xOffset=n.yOffset=0,n.force3D=bn.force3D,n.renderTransform=n.svg?xp:Wh?$h:vp,n.uncache=0,n},Io=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qo=function(e,t,n){var r=jt(t);return Ct(parseFloat(t)+parseFloat(Wi(e,"x",n+"px",r)))+r},vp=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$h(e,t)},Ki="0deg",as="0px",ji=") ",$h=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,_=n.skewY,v=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,E=n.zOrigin,S="",P=p==="auto"&&e&&e!==1||p===!0;if(E&&(f!==Ki||h!==Ki)){var I=parseFloat(h)*Vr,R=Math.sin(I),L=Math.cos(I),M;I=parseFloat(f)*Vr,M=Math.cos(I),o=Qo(b,o,R*M*-E),a=Qo(b,a,-Math.sin(I)*-E),l=Qo(b,l,L*M*-E+E)}m!==as&&(S+="perspective("+m+ji),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(P||o!==as||a!==as||l!==as)&&(S+=l!==as||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ji),c!==Ki&&(S+="rotate("+c+ji),h!==Ki&&(S+="rotateY("+h+ji),f!==Ki&&(S+="rotateX("+f+ji),(d!==Ki||_!==Ki)&&(S+="skew("+d+", "+_+ji),(v!==1||g!==1)&&(S+="scale("+v+", "+g+ji),b.style[wt]=S||"translate(0, 0)"},xp=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,_=n.target,v=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,E=parseFloat(o),S=parseFloat(a),P,I,R,L,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Vr,c*=Vr,P=Math.cos(l)*f,I=Math.sin(l)*f,R=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(h*=Vr,M=Math.tan(c-h),M=Math.sqrt(1+M*M),R*=M,L*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),P*=M,I*=M)),P=Ct(P),I=Ct(I),R=Ct(R),L=Ct(L)):(P=f,L=d,I=R=0),(E&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(E=Wi(_,"x",o,"px"),S=Wi(_,"y",a,"px")),(v||g||m||p)&&(E=Ct(E+v-(v*P+g*R)+m),S=Ct(S+g-(v*I+g*L)+p)),(r||s)&&(M=_.getBBox(),E=Ct(E+r/100*M.width),S=Ct(S+s/100*M.height)),M="matrix("+P+","+I+","+R+","+L+","+E+","+S+")",_.setAttribute("transform",M),b&&(_.style[wt]=M)},Sp=function(e,t,n,r,s){var o=360,a=Vt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?sr:1),c=l-r,h=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Pc)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Pc)%o-~~(c/o)*o)),e._pt=d=new hn(e._pt,t,n,r,c,np),d.e=h,d.u="deg",e._props.push(n),d},Oc=function(e,t){for(var n in t)e[n]=t[n];return e},yp=function(e,t,n){var r=Oc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,_,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[wt]=t,a=Ds(n,1),Gi(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],o[wt]=t,a=Ds(n,1),o[wt]=c);for(l in xi)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(_=jt(c),v=jt(h),f=_!==v?Wi(n,l,c,v):parseFloat(c),d=parseFloat(h),e._pt=new hn(e._pt,a,l,f,d-f,$a),e._pt.u=v||0,e._props.push(l));Oc(a,r)};un("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Lo[e>1?"border"+i:i]=function(a,l,c,h,f){var d,_;if(arguments.length<4)return d=o.map(function(v){return ci(a,v,c)}),_=d.join(" "),_.split(d[0]).length===5?d[0]:_;d=(h+"").split(" "),_={},o.forEach(function(v,g){return _[v]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,_,f)}});var Kh={name:"css",register:ja,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,_,v,g,m,p,b,E,S,P,I,R,L,M;Ql||ja(),this.styles=this.styles||Gh(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(xn[g]&&Lh(g,t,n,r,e,s)))){if(_=typeof h,v=Lo[g],_==="function"&&(h=h.call(n,r,e,s),_=typeof h),_==="string"&&~h.indexOf("random(")&&(h=As(h)),v)v(this,e,g,h,n)&&(R=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",ki.lastIndex=0,ki.test(c)||(m=jt(c),p=jt(h),p?m!==p&&(c=Wi(e,g,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,r,s,0,0,g),o.push(g),L.push(g,0,a[g]);else if(_!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Vt(c)&&~c.indexOf("random(")&&(c=As(c)),jt(c+"")||c==="auto"||(c+=bn.units[g]||jt(ci(e,g))||""),(c+"").charAt(1)==="="&&(c=ci(e,g))):c=ci(e,g),d=parseFloat(c),b=_==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),f=parseFloat(h),g in Jn&&(g==="autoAlpha"&&(d===1&&ci(e,"visibility")==="hidden"&&f&&(d=0),L.push("visibility",0,a.visibility),zi(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Jn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in xi,E){if(this.styles.save(g),M=h,_==="string"&&h.substring(0,6)==="var(--"){if(h=En(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var w=e.style.perspective;e.style.perspective=h,h=En(e,"perspective"),w?e.style.perspective=w:Gi(e,"perspective")}f=parseFloat(h)}if(S||(P=e._gsap,P.renderTransform&&!t.parseTransform||Ds(e,t.parseTransform),I=t.smoothOrigin!==!1&&P.smooth,S=this._pt=new hn(this._pt,a,wt,0,1,P.renderTransform,P,0,-1),S.dep=1),g==="scale")this._pt=new hn(this._pt,P,"scaleY",P.scaleY,(b?kr(P.scaleY,b+f):f)-P.scaleY||0,$a),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(fn,0,a[fn]),h=_p(h),P.svg?Ja(e,h,0,I,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==P.zOrigin&&zi(this,P,"zOrigin",P.zOrigin,p),zi(this,a,g,Io(c),Io(h)));continue}else if(g==="svgOrigin"){Ja(e,h,1,I,0,this);continue}else if(g in Yh){Sp(this,P,g,d,b?kr(d,b+h):h);continue}else if(g==="smoothOrigin"){zi(this,P,"smooth",P.smooth,h);continue}else if(g==="force3D"){P[g]=h;continue}else if(g==="transform"){yp(this,h,e);continue}}else g in a||(g=jr(g)||g);if(E||(f||f===0)&&(d||d===0)&&!tp.test(h)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=jt(h)||(g in bn.units?bn.units[g]:m),m!==p&&(d=Wi(e,g,c,p)),this._pt=new hn(this._pt,E?P:a,g,d,(b?kr(d,b+f):f)-d,!E&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?sp:$a),this._pt.u=p||0,E&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=rp):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ip);else if(g in a)mp.call(this,e,g,c,b?b+h:h);else if(g in e)this.add(e,g,c||e[g],b?b+h:h,r,s);else if(g!=="parseTransform"){Gl(g,h);continue}E||(g in a?L.push(g,0,a[g]):typeof e[g]=="function"?L.push(g,2,e[g]()):L.push(g,1,c||e[g])),o.push(g)}}R&&zh(this)},render:function(e,t){if(t.tween._time||!ec())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ci,aliases:Jn,getSetter:function(e,t,n){var r=Jn[t];return r&&r.indexOf(",")<0&&(t=r),t in xi&&t!==fn&&(e._gsap.x||ci(e,"x"))?n&&Cc===n?t==="scale"?cp:lp:(Cc=n||{})&&(t==="scale"?up:hp):e.style&&!kl(e.style[t])?op:~t.indexOf("-")?ap:jl(e,t)},core:{_removeProperty:Gi,_getMatrix:nc}};pn.utils.checkPrefix=jr;pn.core.getStyleSaver=Gh;(function(i,e,t,n){var r=un(i+","+e+","+t,function(s){xi[s]=1});un(e,function(s){bn.units[s]="deg",Yh[s]=1}),Jn[r[13]]=i+","+e,un(n,function(s){var o=s.split(":");Jn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){bn.units[i]="px"});pn.registerPlugin(Kh);var ic=pn.registerPlugin(Kh)||pn;ic.core.Tween;const Mp=[{title:"TradeForge",tags:"concept • web • solidity • development • 3d",url:"https://kianpk.github.io/tradeforge/",hue:"linear-gradient(135deg, #1a2ffb, #6d8cff 40%, #0b1024)"},{title:"Zyrax Drive",tags:"web • design • development • 3d • animation",url:"https://kianpk.github.io/zyrax-drive/",hue:"linear-gradient(135deg, #101018, #2a1a5e 45%, #c1ff00)"},{title:"Playfield",tags:"web • design • development • 3d • physics",url:"https://kianpk.github.io/playfield/",hue:"linear-gradient(135deg, #0e2a22, #1db954 50%, #d9ffe8)"},{title:"Orbit Desk",tags:"web • design • development • 3d • r3f",url:"https://kianpk.github.io/orbit-desk/",hue:"linear-gradient(145deg, #1b1030, #8832f7 55%, #ffb4ef)"},{title:"VaultForge",tags:"solidity • protocol • development",url:"https://github.com/kianPk/vaultforge",hue:"linear-gradient(135deg, #141820, #3d4a66 40%, #9fd0ff)"},{title:"LoadForge",tags:"rust • systems • development",url:"https://github.com/kianPk/loadforge",hue:"linear-gradient(135deg, #2a1208, #ff8039 50%, #ffe0c8)"},{title:"GateProxy",tags:"go • networking • development",url:"https://github.com/kianPk/gateproxy",hue:"linear-gradient(135deg, #071820, #00b7c2 50%, #c8fbff)"},{title:"Honeypot Deck",tags:"web • security • vue • lab",url:"https://kianpk.github.io/honeypot-deck/",hue:"linear-gradient(135deg, #2a0810, #ff4c41 45%, #ffd0d0)"},{title:"Sentinel Grid",tags:"web • security • visualization",url:"https://kianpk.github.io/sentinel-grid/",hue:"linear-gradient(135deg, #0a1420, #1a2ffb 50%, #9db4ff)"},{title:"Lumen Commerce",tags:"web • design • development • commerce",url:"https://kianpk.github.io/lumen-commerce/",hue:"linear-gradient(135deg, #20180a, #ffd24a 50%, #fff4c8)"},{title:"Netprobe Lab",tags:"concept • web • security lab",url:"https://kianpk.github.io/netprobe-lab/",hue:"linear-gradient(135deg, #120820, #b65fff 50%, #f0d8ff)"},{title:"PulseHub",tags:"go • realtime • development",url:"https://github.com/kianPk/pulsehub",hue:"linear-gradient(135deg, #081410, #a2ffab 50%, #e8ffe9)"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="170",Ep=0,zc=1,Tp=2,jh=1,bp=2,ai=3,Xi=0,dn=1,on=2,Hi=0,Gr=1,Uo=2,Bc=3,kc=4,wp=5,lr=100,Ap=101,Rp=102,Cp=103,Pp=104,Dp=200,Lp=201,Ip=202,Up=203,Qa=204,el=205,Np=206,Fp=207,Op=208,zp=209,Bp=210,kp=211,Hp=212,Vp=213,Gp=214,tl=0,nl=1,il=2,Jr=3,rl=4,sl=5,ol=6,al=7,Jh=0,Wp=1,Xp=2,_i=0,qp=1,Yp=2,Zp=3,$p=4,Kp=5,jp=6,Jp=7,Qh=300,Qr=301,es=302,ll=303,cl=304,Ho=306,Wr=1e3,hi=1001,No=1002,nn=1003,Qp=1004,Hs=1005,Ht=1006,ea=1007,fi=1008,Si=1009,ef=1010,tf=1011,Ls=1012,sc=1013,vr=1014,Tn=1015,di=1016,oc=1017,ac=1018,ts=1020,nf=35902,rf=1021,sf=1022,ln=1023,of=1024,af=1025,Xr=1026,ns=1027,lc=1028,cc=1029,lf=1030,uc=1031,hc=1033,xo=33776,So=33777,yo=33778,Mo=33779,ul=35840,hl=35841,fl=35842,dl=35843,pl=36196,ml=37492,_l=37496,gl=37808,vl=37809,xl=37810,Sl=37811,yl=37812,Ml=37813,El=37814,Tl=37815,bl=37816,wl=37817,Al=37818,Rl=37819,Cl=37820,Pl=37821,Eo=36492,Dl=36494,Ll=36495,cf=36283,Il=36284,Ul=36285,Nl=36286,em=3200,tm=3201,nm=0,im=1,an="",en="srgb",yi="srgb-linear",Vo="linear",mt="srgb",Mr=7680,Hc=519,rm=512,sm=513,om=514,uf=515,am=516,lm=517,cm=518,um=519,Vc=35044,wi=35048,Gc="300 es",pi=2e3,Fo=2001;class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,Fl=180/Math.PI;function Ns(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function tn(i,e,t){return Math.max(e,Math.min(t,i))}function hm(i,e){return(i%e+e)%e}function na(i,e,t){return(1-t)*i+t*e}function ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,r,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],_=n[5],v=n[8],g=r[0],m=r[3],p=r[6],b=r[1],E=r[4],S=r[7],P=r[2],I=r[5],R=r[8];return s[0]=o*g+a*b+l*P,s[3]=o*m+a*E+l*I,s[6]=o*p+a*S+l*R,s[1]=c*g+h*b+f*P,s[4]=c*m+h*E+f*I,s[7]=c*p+h*S+f*R,s[2]=d*g+_*b+v*P,s[5]=d*m+_*E+v*I,s[8]=d*p+_*S+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,_=c*s-o*l,v=t*f+n*d+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-h*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=_*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new rt;function hf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fm(){const i=Is("canvas");return i.style.display="block",i}const Wc={};function gs(i){i in Wc||(Wc[i]=!0,console.warn(i))}function dm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function pm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ht={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(i.r=qr(i.r),i.g=qr(i.g),i.b=qr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===an?Vo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xc=[.64,.33,.3,.6,.15,.06],qc=[.2126,.7152,.0722],Yc=[.3127,.329],Zc=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[yi]:{primaries:Xc,whitePoint:Yc,transfer:Vo,toXYZ:Zc,fromXYZ:$c,luminanceCoefficients:qc,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:Xc,whitePoint:Yc,transfer:mt,toXYZ:Zc,fromXYZ:$c,luminanceCoefficients:qc,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});let Er;class _m{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=Is("canvas")),Er.width=e.width,Er.height=e.height;const n=Er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gm=0;class ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ra(r[o].image)):s.push(ra(r[o]))}else s=ra(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_m.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vm=0;class Yt extends rs{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=hi,r=hi,s=Ht,o=fi,a=ln,l=Si,c=Yt.DEFAULT_ANISOTROPY,h=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Ns(),this.name="",this.source=new ff(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Qh;Yt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],_=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(_+1)/2,P=(p+1)/2,I=(h+d)/4,R=(f+g)/4,L=(v+m)/4;return E>S&&E>P?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=I/n,s=R/n):S>P?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=I/r,s=L/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=L/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(f-g)/b,this.z=(d-h)/b,this.w=Math.acos((c+_+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xm extends rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Yt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ff(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends xm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class df extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sm extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const d=s[o+0],_=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=_,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==d||c!==_||h!==v){let m=1-a;const p=l*d+c*_+h*v+f*g,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const P=Math.sqrt(E),I=Math.atan2(P,p*b);m=Math.sin(m*I)/P,a=Math.sin(a*I)/P}const S=a*b;if(l=l*m+d*S,c=c*m+_*S,h=h*m+v*S,f=f*m+g*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[o],d=s[o+1],_=s[o+2],v=s[o+3];return e[t]=a*v+h*f+l*_-c*d,e[t+1]=l*v+h*d+c*f-a*_,e[t+2]=c*v+h*_+a*d-l*f,e[t+3]=h*v-a*f-l*d-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),f=a(s/2),d=l(n/2),_=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*_*v,this._y=c*_*f-d*h*v,this._z=c*h*v+d*_*f,this._w=c*h*f-d*_*v;break;case"YXZ":this._x=d*h*f+c*_*v,this._y=c*_*f-d*h*v,this._z=c*h*v-d*_*f,this._w=c*h*f+d*_*v;break;case"ZXY":this._x=d*h*f-c*_*v,this._y=c*_*f+d*h*v,this._z=c*h*v+d*_*f,this._w=c*h*f-d*_*v;break;case"ZYX":this._x=d*h*f-c*_*v,this._y=c*_*f+d*h*v,this._z=c*h*v-d*_*f,this._w=c*h*f+d*_*v;break;case"YZX":this._x=d*h*f+c*_*v,this._y=c*_*f+d*h*v,this._z=c*h*v-d*_*f,this._w=c*h*f-d*_*v;break;case"XZY":this._x=d*h*f-c*_*v,this._y=c*_*f-d*h*v,this._z=c*h*v+d*_*f,this._w=c*h*f+d*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(n>a&&n>f){const _=2*Math.sqrt(1+n-a-f);this._w=(h-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>f){const _=2*Math.sqrt(1+a-n-f);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+f-n-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new W,Kc=new In;class ss{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Gs.subVectors(this.max,cs),Tr.subVectors(e.a,cs),br.subVectors(e.b,cs),wr.subVectors(e.c,cs),Ai.subVectors(br,Tr),Ri.subVectors(wr,br),Ji.subVectors(Tr,wr);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Ji.z,Ji.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Ji.z,0,-Ji.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Ji.y,Ji.x,0];return!oa(t,Tr,br,wr,Gs)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Tr,br,wr,Gs))?!1:(Ws.crossVectors(Ai,Ri),t=[Ws.x,Ws.y,Ws.z],oa(t,Tr,br,wr,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new W,new W,new W,new W,new W,new W,new W,new W],Bn=new W,Vs=new ss,Tr=new W,br=new W,wr=new W,Ai=new W,Ri=new W,Ji=new W,cs=new W,Gs=new W,Ws=new W,Qi=new W;function oa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Qi.fromArray(i,s);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ym=new ss,us=new W,aa=new W;class fc{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ym.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const t=us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(us,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(aa)),this.expandByPoint(us.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new W,la=new W,Xs=new W,Ci=new W,ca=new W,qs=new W,ua=new W;class Mm{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){la.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(la);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xs),a=Ci.dot(this.direction),l=-Ci.dot(Xs),c=Ci.lengthSq(),h=Math.abs(1-o*o);let f,d,_,v;if(h>0)if(f=o*l-a,d=o*a-l,v=s*h,f>=0)if(d>=-v)if(d<=v){const g=1/h;f*=g,d*=g,_=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(la).addScaledVector(Xs,d),_}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),r=ni.dot(ni)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,r,s){ca.subVectors(t,e),qs.subVectors(n,e),ua.crossVectors(ca,qs);let o=this.direction.dot(ua),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(qs.crossVectors(Ci,qs));if(l<0)return null;const c=a*this.direction.dot(ca.cross(Ci));if(c<0||l+c>o)return null;const h=-a*Ci.dot(ua);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,r,s,o,a,l,c,h,f,d,_,v,g,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,f,d,_,v,g,m)}set(e,t,n,r,s,o,a,l,c,h,f,d,_,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=_,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,_=o*f,v=a*h,g=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=_+v*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=v+_*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,_=l*f,v=c*h,g=c*f;t[0]=d+g*a,t[4]=v*a-_,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=_*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,_=l*f,v=c*h,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,_=o*f,v=a*h,g=a*f;t[0]=l*h,t[4]=v*c-_,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=_*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*h,t[4]=g-d*f,t[8]=v*f+_,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=_*f+v,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+g,t[5]=o*h,t[9]=_*f-v,t[2]=v*f-_,t[6]=a*h,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Em,e,Tm)}lookAt(e,t,n){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Pi.crossVectors(n,gn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Pi.crossVectors(n,gn)),Pi.normalize(),Ys.crossVectors(gn,Pi),r[0]=Pi.x,r[4]=Ys.x,r[8]=gn.x,r[1]=Pi.y,r[5]=Ys.y,r[9]=gn.y,r[2]=Pi.z,r[6]=Ys.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],_=n[13],v=n[2],g=n[6],m=n[10],p=n[14],b=n[3],E=n[7],S=n[11],P=n[15],I=r[0],R=r[4],L=r[8],M=r[12],w=r[1],U=r[5],H=r[9],k=r[13],Z=r[2],K=r[6],X=r[10],j=r[14],V=r[3],_e=r[7],xe=r[11],se=r[15];return s[0]=o*I+a*w+l*Z+c*V,s[4]=o*R+a*U+l*K+c*_e,s[8]=o*L+a*H+l*X+c*xe,s[12]=o*M+a*k+l*j+c*se,s[1]=h*I+f*w+d*Z+_*V,s[5]=h*R+f*U+d*K+_*_e,s[9]=h*L+f*H+d*X+_*xe,s[13]=h*M+f*k+d*j+_*se,s[2]=v*I+g*w+m*Z+p*V,s[6]=v*R+g*U+m*K+p*_e,s[10]=v*L+g*H+m*X+p*xe,s[14]=v*M+g*k+m*j+p*se,s[3]=b*I+E*w+S*Z+P*V,s[7]=b*R+E*U+S*K+P*_e,s[11]=b*L+E*H+S*X+P*xe,s[15]=b*M+E*k+S*j+P*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],_=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*_-n*l*_)+g*(+t*l*_-t*c*d+s*o*d-r*o*_+r*c*h-s*l*h)+m*(+t*c*f-t*a*_-s*o*f+n*o*_+s*a*h-n*c*h)+p*(-r*a*h-t*l*f+t*a*d+r*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],_=e[11],v=e[12],g=e[13],m=e[14],p=e[15],b=f*m*c-g*d*c+g*l*_-a*m*_-f*l*p+a*d*p,E=v*d*c-h*m*c-v*l*_+o*m*_+h*l*p-o*d*p,S=h*g*c-v*f*c+v*a*_-o*g*_-h*a*p+o*f*p,P=v*f*l-h*g*l-v*a*d+o*g*d+h*a*m-o*f*m,I=t*b+n*E+r*S+s*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=b*R,e[1]=(g*d*s-f*m*s-g*r*_+n*m*_+f*r*p-n*d*p)*R,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*R,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*_-n*l*_)*R,e[4]=E*R,e[5]=(h*m*s-v*d*s+v*r*_-t*m*_-h*r*p+t*d*p)*R,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*_+t*l*_)*R,e[8]=S*R,e[9]=(v*f*s-h*g*s-v*n*_+t*g*_+h*n*p-t*f*p)*R,e[10]=(o*g*s-v*a*s+v*n*c-t*g*c-o*n*p+t*a*p)*R,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*_-t*a*_)*R,e[12]=P*R,e[13]=(h*g*r-v*f*r+v*n*d-t*g*d-h*n*m+t*f*m)*R,e[14]=(v*a*r-o*g*r-v*n*l+t*g*l+o*n*m-t*a*m)*R,e[15]=(o*f*r-h*a*r+h*n*l-t*f*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,_=s*h,v=s*f,g=o*h,m=o*f,p=a*f,b=l*c,E=l*h,S=l*f,P=n.x,I=n.y,R=n.z;return r[0]=(1-(g+p))*P,r[1]=(_+S)*P,r[2]=(v-E)*P,r[3]=0,r[4]=(_-S)*I,r[5]=(1-(d+p))*I,r[6]=(m+b)*I,r[7]=0,r[8]=(v+E)*R,r[9]=(m-b)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,h=1/o,f=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,t.setFromRotationMatrix(kn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=pi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let _,v;if(a===pi)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Fo)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=pi){const l=this.elements,c=1/(t-e),h=1/(n-r),f=1/(o-s),d=(t+e)*c,_=(n+r)*h;let v,g;if(a===pi)v=(o+s)*f,g=-2*f;else if(a===Fo)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ar=new W,kn=new It,Em=new W(0,0,0),Tm=new W(1,1,1),Pi=new W,Ys=new W,gn=new W,jc=new It,Jc=new In;class On{constructor(e=0,t=0,n=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class pf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bm=0;const Qc=new W,Rr=new In,ii=new It,Zs=new W,hs=new W,wm=new W,Am=new In,eu=new W(1,0,0),tu=new W(0,1,0),nu=new W(0,0,1),iu={type:"added"},Rm={type:"removed"},Cr={type:"childadded",child:null},ha={type:"childremoved",child:null};class wn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new W,t=new On,n=new In,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new rt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(nu,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zs.copy(e):Zs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(hs,Zs,this.up):ii.lookAt(Zs,hs,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(ii),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iu),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rm),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iu),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Am,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wn.DEFAULT_UP=new W(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new W,ri=new W,fa=new W,si=new W,Pr=new W,Dr=new W,ru=new W,da=new W,pa=new W,ma=new W,_a=new yt,ga=new yt,va=new yt;class qn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Hn.subVectors(e,t),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Hn.subVectors(r,t),ri.subVectors(n,t),fa.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(ri),l=Hn.dot(fa),c=ri.dot(ri),h=ri.dot(fa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,_=(c*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return _a.setScalar(0),ga.setScalar(0),va.setScalar(0),_a.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,n),va.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_a,s.x),o.addScaledVector(ga,s.y),o.addScaledVector(va,s.z),o}static isFrontFacing(e,t,n,r){return Hn.subVectors(n,t),ri.subVectors(e,t),Hn.cross(ri).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Hn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Pr.subVectors(r,n),Dr.subVectors(s,n),da.subVectors(e,n);const l=Pr.dot(da),c=Dr.dot(da);if(l<=0&&c<=0)return t.copy(n);pa.subVectors(e,r);const h=Pr.dot(pa),f=Dr.dot(pa);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Pr,o);ma.subVectors(e,s);const _=Pr.dot(ma),v=Dr.dot(ma);if(v>=0&&_<=v)return t.copy(s);const g=_*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Dr,a);const m=h*v-_*f;if(m<=0&&f-h>=0&&_-v>=0)return ru.subVectors(s,r),a=(f-h)/(f-h+(_-v)),t.copy(r).addScaledVector(ru,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(Pr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},$s={h:0,s:0,l:0};function xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=hm(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xa(o,s,e+1/3),this.g=xa(o,s,e),this.b=xa(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=en){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return ht.fromWorkingColorSpace(Kt.copy(this),e),Math.round(tn(Kt.r*255,0,255))*65536+Math.round(tn(Kt.g*255,0,255))*256+Math.round(tn(Kt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=en){ht.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,r=Kt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL($s);const n=na(Di.h,$s.h,t),r=na(Di.s,$s.s,t),s=na(Di.l,$s.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new et;et.NAMES=mf;let Cm=0;class Go extends rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Ns(),this.name="",this.blending=Gr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=el,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qa&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dc extends Go{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ui=Pm();function Pm(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Dm(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=tn(i,-65504,65504),ui.floatView[0]=i;const e=ui.uint32View[0],t=e>>23&511;return ui.baseTable[t]+((e&8388607)>>ui.shiftTable[t])}function Lm(i){const e=i>>10;return ui.uint32View[0]=ui.mantissaTable[ui.offsetTable[e]+(i&1023)]+ui.exponentTable[e],ui.floatView[0]}const su={toHalfFloat:Dm,fromHalfFloat:Lm},Dt=new W,Ks=new dt;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}}class _f extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gf extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _r extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Im=0;const Pn=new It,Sa=new wn,Lr=new W,vn=new ss,fs=new ss,Bt=new W;class Mi extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?gf:_f)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _r(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(vn.min,fs.min),vn.expandByPoint(Bt),Bt.addVectors(vn.max,fs.max),vn.expandByPoint(Bt)):(vn.expandByPoint(fs.min),vn.expandByPoint(fs.max))}vn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bt.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),Bt.add(Lr)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new W,l[L]=new W;const c=new W,h=new W,f=new W,d=new dt,_=new dt,v=new dt,g=new W,m=new W;function p(L,M,w){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,w),d.fromBufferAttribute(s,L),_.fromBufferAttribute(s,M),v.fromBufferAttribute(s,w),h.sub(c),f.sub(c),_.sub(d),v.sub(d);const U=1/(_.x*v.y-v.x*_.y);isFinite(U)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(U),m.copy(f).multiplyScalar(_.x).addScaledVector(h,-v.x).multiplyScalar(U),a[L].add(g),a[M].add(g),a[w].add(g),l[L].add(m),l[M].add(m),l[w].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,M=b.length;L<M;++L){const w=b[L],U=w.start,H=w.count;for(let k=U,Z=U+H;k<Z;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new W,S=new W,P=new W,I=new W;function R(L){P.fromBufferAttribute(r,L),I.copy(P);const M=a[L];E.copy(M),E.sub(P.multiplyScalar(P.dot(M))).normalize(),S.crossVectors(I,M);const U=S.dot(l[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,U)}for(let L=0,M=b.length;L<M;++L){const w=b[L],U=w.start,H=w.count;for(let k=U,Z=U+H;k<Z;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,h=new W,f=new W;if(e)for(let d=0,_=e.count;d<_;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,_=t.count;d<_;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let _=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?_=l[g]*a.data.stride+a.offset:_=l[g]*h;for(let p=0;p<h;p++)d[v++]=c[_++]}return new Xt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],_=e(d,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const _=c[f];h.push(_.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,_=f.length;d<_;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ou=new It,er=new Mm,js=new fc,au=new W,Js=new W,Qs=new W,eo=new W,ya=new W,to=new W,lu=new W,no=new W;class kt extends wn{constructor(e=new Mi,t=new dc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){to.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(ya.fromBufferAttribute(f,e),o?to.addScaledVector(ya,h):to.addScaledVector(ya.sub(t),h))}t.add(to)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(js.containsPoint(er.origin)===!1&&(er.intersectSphere(js,au)===null||er.origin.distanceToSquared(au)>(e.far-e.near)**2))&&(ou.copy(s).invert(),er.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],b=Math.max(m.start,_.start),E=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let S=b,P=E;S<P;S+=3){const I=a.getX(S),R=a.getX(S+1),L=a.getX(S+2);r=io(this,p,e,n,c,h,f,I,R,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(a.count,_.start+_.count);for(let m=v,p=g;m<p;m+=3){const b=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);r=io(this,o,e,n,c,h,f,b,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],b=Math.max(m.start,_.start),E=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let S=b,P=E;S<P;S+=3){const I=S,R=S+1,L=S+2;r=io(this,p,e,n,c,h,f,I,R,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);for(let m=v,p=g;m<p;m+=3){const b=m,E=m+1,S=m+2;r=io(this,o,e,n,c,h,f,b,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Um(i,e,t,n,r,s,o,a){let l;if(e.side===dn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Xi,a),l===null)return null;no.copy(a),no.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:i}}function io(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Js),i.getVertexPosition(l,Qs),i.getVertexPosition(c,eo);const h=Um(i,e,t,n,Js,Qs,eo,lu);if(h){const f=new W;qn.getBarycoord(lu,Js,Qs,eo,f),r&&(h.uv=qn.getInterpolatedAttribute(r,a,l,c,f,new dt)),s&&(h.uv1=qn.getInterpolatedAttribute(s,a,l,c,f,new dt)),o&&(h.normal=qn.getInterpolatedAttribute(o,a,l,c,f,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};qn.getNormal(Js,Qs,eo,d.normal),h.face=d,h.barycoord=f}return h}class Fs extends Mi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,_=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new _r(c,3)),this.setAttribute("normal",new _r(h,3)),this.setAttribute("uv",new _r(f,2));function v(g,m,p,b,E,S,P,I,R,L,M){const w=S/R,U=P/L,H=S/2,k=P/2,Z=I/2,K=R+1,X=L+1;let j=0,V=0;const _e=new W;for(let xe=0;xe<X;xe++){const se=xe*U-k;for(let Ee=0;Ee<K;Ee++){const be=Ee*w-H;_e[g]=be*b,_e[m]=se*E,_e[p]=Z,c.push(_e.x,_e.y,_e.z),_e[g]=0,_e[m]=0,_e[p]=I>0?1:-1,h.push(_e.x,_e.y,_e.z),f.push(Ee/R),f.push(1-xe/L),j+=1}}for(let xe=0;xe<L;xe++)for(let se=0;se<R;se++){const Ee=d+se+K*xe,be=d+se+K*(xe+1),$=d+(se+1)+K*(xe+1),he=d+(se+1)+K*xe;l.push(Ee,be,he),l.push(be,$,he),V+=6}a.addGroup(_,V,M),_+=V,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=is(i[t]);for(const r in n)e[r]=n[r]}return e}function Nm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Fm={clone:is,merge:Qt};var Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Go{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xf extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new W,cu=new dt,uu=new dt;class Sn extends xf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,cu,uu),t.subVectors(uu,cu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Ur=1;class Bm extends wn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(Ir,Ur,e,t);r.layers=this.layers,this.add(r);const s=new Sn(Ir,Ur,e,t);s.layers=this.layers,this.add(s);const o=new Sn(Ir,Ur,e,t);o.layers=this.layers,this.add(o);const a=new Sn(Ir,Ur,e,t);a.layers=this.layers,this.add(a);const l=new Sn(Ir,Ur,e,t);l.layers=this.layers,this.add(l);const c=new Sn(Ir,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,d,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Sf extends Yt{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class km extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fs(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Hi});s.uniforms.tEquirect.value=t;const o=new kt(r,s),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=Ht),new Bm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ma=new W,Hm=new W,Vm=new rt;class or{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ma.subVectors(n,t).cross(Hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ma),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vm.getNormalMatrix(e),r=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new fc,ro=new W;class yf{constructor(e=new or,t=new or,n=new or,r=new or,s=new or,o=new or){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],_=r[8],v=r[9],g=r[10],m=r[11],p=r[12],b=r[13],E=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,m-_,S-p).normalize(),n[1].setComponents(l+s,d+c,m+_,S+p).normalize(),n[2].setComponents(l+o,d+h,m+v,S+b).normalize(),n[3].setComponents(l-o,d-h,m-v,S-b).normalize(),n[4].setComponents(l-a,d-f,m-g,S-E).normalize(),t===pi)n[5].setComponents(l+a,d+f,m+g,S+E).normalize();else if(t===Fo)n[5].setComponents(a,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ro.x=r.normal.x>0?e.max.x:e.min.x,ro.y=r.normal.y>0?e.max.y:e.min.y,ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gm(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((_,v)=>_.start-v.start);let d=0;for(let _=1;_<f.length;_++){const v=f[d],g=f[_];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,f[d]=g)}f.length=d+1;for(let _=0,v=f.length;_<v;_++){const g=f[_];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Sr extends Mi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=t/l,_=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const b=p*d-o;for(let E=0;E<c;E++){const S=E*f-s;v.push(S,-b,0),g.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const E=b+c*p,S=b+c*(p+1),P=b+1+c*(p+1),I=b+1+c*p;_.push(E,S,I),_.push(S,P,I)}this.setIndex(_),this.setAttribute("position",new _r(v,3)),this.setAttribute("normal",new _r(g,3)),this.setAttribute("uv",new _r(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
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
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
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
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i_=`#ifdef USE_IRIDESCENCE
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
#endif`,r_=`#ifdef USE_BUMPMAP
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d_=`#define PI 3.141592653589793
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
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m_=`vec3 transformedNormal = objectNormal;
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
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S_="gl_FragColor = linearToOutputTexel( gl_FragColor );",y_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D_=`#ifdef USE_GRADIENTMAP
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
}`,L_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
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
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,O_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H_=`PhysicalMaterial material;
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
#endif`,V_=`struct PhysicalMaterial {
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
}`,G_=`
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
#endif`,W_=`#if defined( RE_IndirectDiffuse )
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
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q_=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
}`,jg=`#define DISTANCE
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
}`,Jg=`#define DISTANCE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,r0=`uniform vec3 diffuse;
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
}`,s0=`#define LAMBERT
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
}`,o0=`#define LAMBERT
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
}`,a0=`#define MATCAP
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
}`,l0=`#define MATCAP
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
}`,c0=`#define NORMAL
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
}`,u0=`#define NORMAL
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
}`,h0=`#define PHONG
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
}`,f0=`#define PHONG
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
}`,d0=`#define STANDARD
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
}`,p0=`#define STANDARD
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
}`,m0=`#define TOON
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
}`,_0=`#define TOON
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
}`,g0=`uniform float size;
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
}`,v0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,y0=`uniform float rotation;
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
}`,M0=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:qm,alphamap_pars_fragment:Ym,alphatest_fragment:Zm,alphatest_pars_fragment:$m,aomap_fragment:Km,aomap_pars_fragment:jm,batching_pars_vertex:Jm,batching_vertex:Qm,begin_vertex:e_,beginnormal_vertex:t_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:r_,clipping_planes_fragment:s_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:u_,color_pars_vertex:h_,color_vertex:f_,common:d_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:__,displacementmap_vertex:g_,emissivemap_fragment:v_,emissivemap_pars_fragment:x_,colorspace_fragment:S_,colorspace_pars_fragment:y_,envmap_fragment:M_,envmap_common_pars_fragment:E_,envmap_pars_fragment:T_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:F_,envmap_vertex:w_,fog_vertex:A_,fog_pars_vertex:R_,fog_fragment:C_,fog_pars_fragment:P_,gradientmap_pars_fragment:D_,lightmap_pars_fragment:L_,lights_lambert_fragment:I_,lights_lambert_pars_fragment:U_,lights_pars_begin:N_,lights_toon_fragment:O_,lights_toon_pars_fragment:z_,lights_phong_fragment:B_,lights_phong_pars_fragment:k_,lights_physical_fragment:H_,lights_physical_pars_fragment:V_,lights_fragment_begin:G_,lights_fragment_maps:W_,lights_fragment_end:X_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:Y_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:$_,map_fragment:K_,map_pars_fragment:j_,map_particle_fragment:J_,map_particle_pars_fragment:Q_,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:rg,morphtarget_pars_vertex:sg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:ug,normal_vertex:hg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:_g,opaque_fragment:gg,packing:vg,premultiplied_alpha_fragment:xg,project_vertex:Sg,dithering_fragment:yg,dithering_pars_fragment:Mg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:wg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Dg,skinnormal_vertex:Lg,specularmap_fragment:Ig,specularmap_pars_fragment:Ug,tonemapping_fragment:Ng,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:zg,uv_pars_fragment:Bg,uv_pars_vertex:kg,uv_vertex:Hg,worldpos_vertex:Vg,background_vert:Gg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:Zg,depth_vert:$g,depth_frag:Kg,distanceRGBA_vert:jg,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:e0,linedashed_vert:t0,linedashed_frag:n0,meshbasic_vert:i0,meshbasic_frag:r0,meshlambert_vert:s0,meshlambert_frag:o0,meshmatcap_vert:a0,meshmatcap_frag:l0,meshnormal_vert:c0,meshnormal_frag:u0,meshphong_vert:h0,meshphong_frag:f0,meshphysical_vert:d0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:_0,points_vert:g0,points_frag:v0,shadow_vert:x0,shadow_frag:S0,sprite_vert:y0,sprite_frag:M0},Re={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Kn={basic:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new et(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Qt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Qt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new et(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Qt([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Qt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Qt([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Qt([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Qt([Re.common,Re.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Qt([Re.lights,Re.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Kn.physical={uniforms:Qt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const so={r:0,b:0,g:0},nr=new On,E0=new It;function T0(i,e,t,n,r,s,o){const a=new et(0);let l=s===!0?0:1,c,h,f=null,d=0,_=null;function v(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function g(b){let E=!1;const S=v(b);S===null?p(a,l):S&&S.isColor&&(p(S,1),E=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,E){const S=v(E);S&&(S.isCubeTexture||S.mapping===Ho)?(h===void 0&&(h=new kt(new Fs(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:is(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),nr.copy(E.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E0.makeRotationFromEuler(nr)),h.material.toneMapped=ht.getTransfer(S.colorSpace)!==mt,(f!==S||d!==S.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new kt(new Sr(2,2),new Wt({name:"BackgroundMaterial",uniforms:is(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ht.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,E){b.getRGB(so,vf(i)),n.buffers.color.setClear(so.r,so.g,so.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:m}}function b0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(w,U,H,k,Z){let K=!1;const X=f(k,H,U);s!==X&&(s=X,c(s.object)),K=_(w,k,H,Z),K&&v(w,k,H,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(w,U,H,k),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function f(w,U,H){const k=H.wireframe===!0;let Z=n[w.id];Z===void 0&&(Z={},n[w.id]=Z);let K=Z[U.id];K===void 0&&(K={},Z[U.id]=K);let X=K[k];return X===void 0&&(X=d(l()),K[k]=X),X}function d(w){const U=[],H=[],k=[];for(let Z=0;Z<t;Z++)U[Z]=0,H[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:k,object:w,attributes:{},index:null}}function _(w,U,H,k){const Z=s.attributes,K=U.attributes;let X=0;const j=H.getAttributes();for(const V in j)if(j[V].location>=0){const xe=Z[V];let se=K[V];if(se===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(se=w.instanceColor)),xe===void 0||xe.attribute!==se||se&&xe.data!==se.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function v(w,U,H,k){const Z={},K=U.attributes;let X=0;const j=H.getAttributes();for(const V in j)if(j[V].location>=0){let xe=K[V];xe===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor));const se={};se.attribute=xe,xe&&xe.data&&(se.data=xe.data),Z[V]=se,X++}s.attributes=Z,s.attributesNum=X,s.index=k}function g(){const w=s.newAttributes;for(let U=0,H=w.length;U<H;U++)w[U]=0}function m(w){p(w,0)}function p(w,U){const H=s.newAttributes,k=s.enabledAttributes,Z=s.attributeDivisors;H[w]=1,k[w]===0&&(i.enableVertexAttribArray(w),k[w]=1),Z[w]!==U&&(i.vertexAttribDivisor(w,U),Z[w]=U)}function b(){const w=s.newAttributes,U=s.enabledAttributes;for(let H=0,k=U.length;H<k;H++)U[H]!==w[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function E(w,U,H,k,Z,K,X){X===!0?i.vertexAttribIPointer(w,U,H,Z,K):i.vertexAttribPointer(w,U,H,k,Z,K)}function S(w,U,H,k){g();const Z=k.attributes,K=H.getAttributes(),X=U.defaultAttributeValues;for(const j in K){const V=K[j];if(V.location>=0){let _e=Z[j];if(_e===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor)),_e!==void 0){const xe=_e.normalized,se=_e.itemSize,Ee=e.get(_e);if(Ee===void 0)continue;const be=Ee.buffer,$=Ee.type,he=Ee.bytesPerElement,fe=$===i.INT||$===i.UNSIGNED_INT||_e.gpuType===sc;if(_e.isInterleavedBufferAttribute){const pe=_e.data,ge=pe.stride,Le=_e.offset;if(pe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<V.locationSize;Pe++)p(V.location+Pe,pe.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)m(V.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Pe=0;Pe<V.locationSize;Pe++)E(V.location+Pe,se/V.locationSize,$,xe,ge*he,(Le+se/V.locationSize*Pe)*he,fe)}else{if(_e.isInstancedBufferAttribute){for(let pe=0;pe<V.locationSize;pe++)p(V.location+pe,_e.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let pe=0;pe<V.locationSize;pe++)m(V.location+pe);i.bindBuffer(i.ARRAY_BUFFER,be);for(let pe=0;pe<V.locationSize;pe++)E(V.location+pe,se/V.locationSize,$,xe,se*he,se/V.locationSize*pe*he,fe)}}else if(X!==void 0){const xe=X[j];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(V.location,xe);break;case 3:i.vertexAttrib3fv(V.location,xe);break;case 4:i.vertexAttrib4fv(V.location,xe);break;default:i.vertexAttrib1fv(V.location,xe)}}}}b()}function P(){L();for(const w in n){const U=n[w];for(const H in U){const k=U[H];for(const Z in k)h(k[Z].object),delete k[Z];delete U[H]}delete n[w]}}function I(w){if(n[w.id]===void 0)return;const U=n[w.id];for(const H in U){const k=U[H];for(const Z in k)h(k[Z].object),delete k[Z];delete U[H]}delete n[w.id]}function R(w){for(const U in n){const H=n[U];if(H[w.id]===void 0)continue;const k=H[w.id];for(const Z in k)h(k[Z].object),delete k[Z];delete H[w.id]}}function L(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function w0(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=h[v];t.update(_,n,1)}function l(c,h,f,d){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)o(c[v],h[v],d[v]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=h[g]*d[g];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function A0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Si&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Tn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:_,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:P,maxSamples:I}}function R0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new or,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||n!==0||r;return r=d,n=f.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,_){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const b=s?0:n,E=b*4;let S=p.clippingState||null;l.value=S,S=h(v,d,E,_);for(let P=0;P!==E;++P)S[P]=t[P];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,_,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=_+g*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=_;E!==g;++E,S+=4)o.copy(f[E]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function C0(i){let e=new WeakMap;function t(o,a){return a===ll?o.mapping=Qr:a===cl&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ll||a===cl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new km(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ef extends xf{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zr=4,hu=[.125,.215,.35,.446,.526,.582],cr=20,Ea=new Ef,fu=new et;let Ta=null,ba=0,wa=0,Aa=!1;const ar=(1+Math.sqrt(5))/2,Nr=1/ar,du=[new W(-ar,Nr,0),new W(ar,Nr,0),new W(-Nr,0,ar),new W(Nr,0,ar),new W(0,ar,-Nr),new W(0,ar,Nr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class pu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ta=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,ba,wa),this._renderer.xr.enabled=Aa,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:di,format:ln,colorSpace:yi,depthBuffer:!1},r=mu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P0(s)),this._blurMaterial=D0(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,r){const a=new Sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(fu),h.toneMapping=_i,h.autoClear=!1;const _=new dc({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),v=new kt(new Fs,_);let g=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,g=!0):(_.color.copy(fu),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;oo(r,b*E,p>2?E:0,E,E),h.setRenderTarget(r),g&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Qr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=du[(r-s-1)%du.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new kt(this._lodPlanes[r],c),d=c.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*cr-1),g=s/v,m=isFinite(s)?1+Math.floor(h*g):cr;m>cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cr}`);const p=[];let b=0;for(let R=0;R<cr;++R){const L=R/g,M=Math.exp(-L*L/2);p.push(M),R===0?b+=M:R<m&&(b+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=v,d.mipInt.value=E-n;const S=this._sizeLods[r],P=3*S*(r>E-zr?r-E+zr:0),I=4*(this._cubeSize-S);oo(t,P,I,3*S,2*S),l.setRenderTarget(t),l.render(f,Ea)}}function P0(i){const e=[],t=[],n=[];let r=i;const s=i-zr+1+hu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-zr?l=hu[o-i+zr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],_=6,v=6,g=3,m=2,p=1,b=new Float32Array(g*v*_),E=new Float32Array(m*v*_),S=new Float32Array(p*v*_);for(let I=0;I<_;I++){const R=I%3*2/3-1,L=I>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(M,g*v*I),E.set(d,m*v*I);const w=[I,I,I,I,I,I];S.set(w,p*v*I)}const P=new Mi;P.setAttribute("position",new Xt(b,g)),P.setAttribute("uv",new Xt(E,m)),P.setAttribute("faceIndex",new Xt(S,p)),e.push(P),r>zr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mu(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function D0(i,e,t){const n=new Float32Array(cr),r=new W(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function _u(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function gu(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function L0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ll||l===cl,h=l===Qr||l===es;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new pu(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const _=a.image;return c&&_&&_.height>0||h&&_&&r(_)?(t===null&&(t=new pu(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function I0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&gs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function U0(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const _=f.morphAttributes;for(const v in _){const g=_[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(f){const d=[],_=f.index,v=f.attributes.position;let g=0;if(_!==null){const b=_.array;g=_.version;for(let E=0,S=b.length;E<S;E+=3){const P=b[E+0],I=b[E+1],R=b[E+2];d.push(P,I,I,R,R,P)}}else if(v!==void 0){const b=v.array;g=v.version;for(let E=0,S=b.length/3-1;E<S;E+=3){const P=E+0,I=E+1,R=E+2;d.push(P,I,I,R,R,P)}}else return;const m=new(hf(d)?gf:_f)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function h(f){const d=s.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function N0(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,_){i.drawElements(n,_,s,d*o),t.update(_,n,1)}function c(d,_,v){v!==0&&(i.drawElementsInstanced(n,_,s,d*o,v),t.update(_,n,v))}function h(d,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=_[p];t.update(m,n,1)}function f(d,_,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,_[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,_,0,s,d,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=_[b]*g[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function F0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function O0(i,e,t){const n=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let w=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var _=w;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*I*4*f),L=new df(R,P,I,f);L.type=Tn,L.needsUpdate=!0;const M=S*4;for(let U=0;U<f;U++){const H=p[U],k=b[U],Z=E[U],K=P*I*4*U;for(let X=0;X<H.count;X++){const j=X*M;v===!0&&(r.fromBufferAttribute(H,X),R[K+j+0]=r.x,R[K+j+1]=r.y,R[K+j+2]=r.z,R[K+j+3]=0),g===!0&&(r.fromBufferAttribute(k,X),R[K+j+4]=r.x,R[K+j+5]=r.y,R[K+j+6]=r.z,R[K+j+7]=0),m===!0&&(r.fromBufferAttribute(Z,X),R[K+j+8]=r.x,R[K+j+9]=r.y,R[K+j+10]=r.z,R[K+j+11]=Z.itemSize===4?r.w:1)}}d={count:f,texture:L,size:new dt(P,I)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function z0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Tf extends Yt{constructor(e,t,n,r,s,o,a,l,c,h=Xr){if(h!==Xr&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xr&&(n=vr),n===void 0&&h===ns&&(n=ts),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bf=new Yt,vu=new Tf(1,1),wf=new df,Af=new Sm,Rf=new Sf,xu=[],Su=[],yu=new Float32Array(16),Mu=new Float32Array(9),Eu=new Float32Array(4);function os(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=xu[r];if(s===void 0&&(s=new Float32Array(r),xu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wo(i,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function B0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function G0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Eu.set(n),i.uniformMatrix2fv(this.addr,!1,Eu),Nt(t,n)}}function W0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Mu.set(n),i.uniformMatrix3fv(this.addr,!1,Mu),Nt(t,n)}}function X0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;yu.set(n),i.uniformMatrix4fv(this.addr,!1,yu),Nt(t,n)}}function q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function K0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function ev(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(vu.compareFunction=uf,s=vu):s=bf,t.setTexture2D(e||s,r)}function tv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Af,r)}function nv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rf,r)}function iv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wf,r)}function rv(i){switch(i){case 5126:return B0;case 35664:return k0;case 35665:return H0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return $0;case 5125:return K0;case 36294:return j0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}function sv(i,e){i.uniform1fv(this.addr,e)}function ov(i,e){const t=os(e,this.size,2);i.uniform2fv(this.addr,t)}function av(i,e){const t=os(e,this.size,3);i.uniform3fv(this.addr,t)}function lv(i,e){const t=os(e,this.size,4);i.uniform4fv(this.addr,t)}function cv(i,e){const t=os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uv(i,e){const t=os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hv(i,e){const t=os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fv(i,e){i.uniform1iv(this.addr,e)}function dv(i,e){i.uniform2iv(this.addr,e)}function pv(i,e){i.uniform3iv(this.addr,e)}function mv(i,e){i.uniform4iv(this.addr,e)}function _v(i,e){i.uniform1uiv(this.addr,e)}function gv(i,e){i.uniform2uiv(this.addr,e)}function vv(i,e){i.uniform3uiv(this.addr,e)}function xv(i,e){i.uniform4uiv(this.addr,e)}function Sv(i,e,t){const n=this.cache,r=e.length,s=Wo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bf,s[o])}function yv(i,e,t){const n=this.cache,r=e.length,s=Wo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Af,s[o])}function Mv(i,e,t){const n=this.cache,r=e.length,s=Wo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rf,s[o])}function Ev(i,e,t){const n=this.cache,r=e.length,s=Wo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wf,s[o])}function Tv(i){switch(i){case 5126:return sv;case 35664:return ov;case 35665:return av;case 35666:return lv;case 35674:return cv;case 35675:return uv;case 35676:return hv;case 5124:case 35670:return fv;case 35667:case 35671:return dv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return _v;case 36294:return gv;case 36295:return vv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Ev}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rv(t.type)}}class wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tv(t.type)}}class Av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Tu(i,e){i.seq.push(e),i.map[e.id]=e}function Rv(i,e,t){const n=i.name,r=n.length;for(Ra.lastIndex=0;;){const s=Ra.exec(n),o=Ra.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tu(t,c===void 0?new bv(a,i,e):new wv(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Av(a),Tu(t,f)),t=f}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Rv(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function bu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cv=37297;let Pv=0;function Dv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const wu=new rt;function Lv(i){ht._getMatrix(wu,ht.workingColorSpace,i);const e=`mat3( ${wu.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Vo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Au(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dv(i.getShaderSource(e),o)}else return r}function Iv(i,e){const t=Lv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Uv(i,e){let t;switch(e){case qp:t="Linear";break;case Yp:t="Reinhard";break;case Zp:t="Cineon";break;case $p:t="ACESFilmic";break;case jp:t="AgX";break;case Jp:t="Neutral";break;case Kp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ao=new W;function Nv(){ht.getLuminanceCoefficients(ao);const i=ao.x.toFixed(4),e=ao.y.toFixed(4),t=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Ov(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function vs(i){return i!==""}function Ru(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(Bv,Hv)}const kv=new Map;function Hv(i,e){let t=at[e];if(t===void 0){const n=kv.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(i){return i.replace(Vv,Gv)}function Gv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Du(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Wv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Xv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qr:case es:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function Yv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case Wp:e="ENVMAP_BLENDING_MIX";break;case Xp:e="ENVMAP_BLENDING_ADD";break}return e}function Zv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $v(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Wv(t),c=Xv(t),h=qv(t),f=Yv(t),d=Zv(t),_=Fv(t),v=Ov(s),g=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(vs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(vs).join(`
`),p.length>0&&(p+=`
`)):(m=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),p=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?at.tonemapping_pars_fragment:"",t.toneMapping!==_i?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Iv("linearToOutputTexel",t.outputColorSpace),Nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),o=Ol(o),o=Ru(o,t),o=Cu(o,t),a=Ol(a),a=Ru(a,t),a=Cu(a,t),o=Pu(o),a=Pu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+m+o,S=b+p+a,P=bu(r,r.VERTEX_SHADER,E),I=bu(r,r.FRAGMENT_SHADER,S);r.attachShader(g,P),r.attachShader(g,I),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(U){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(g).trim(),k=r.getShaderInfoLog(P).trim(),Z=r.getShaderInfoLog(I).trim();let K=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,P,I);else{const j=Au(r,P,"vertex"),V=Au(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+j+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||Z==="")&&(X=!1);X&&(U.diagnostics={runnable:K,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(P),r.deleteShader(I),L=new To(r,g),M=zv(r,g)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,Cv)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=I,this}let Kv=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jv(e),t.set(e,n)),n}}class Jv{constructor(e){this.id=Kv++,this.code=e,this.usedTimes=0}}function Qv(i,e,t,n,r,s,o){const a=new pf,l=new jv,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,w,U,H,k){const Z=H.fog,K=k.geometry,X=M.isMeshStandardMaterial?H.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),V=j&&j.mapping===Ho?j.image.height:null,_e=v[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const xe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,se=xe!==void 0?xe.length:0;let Ee=0;K.morphAttributes.position!==void 0&&(Ee=1),K.morphAttributes.normal!==void 0&&(Ee=2),K.morphAttributes.color!==void 0&&(Ee=3);let be,$,he,fe;if(_e){const ut=Kn[_e];be=ut.vertexShader,$=ut.fragmentShader}else be=M.vertexShader,$=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const pe=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Le=k.isInstancedMesh===!0,Pe=k.isBatchedMesh===!0,tt=!!M.map,qe=!!M.matcap,lt=!!j,F=!!M.aoMap,We=!!M.lightMap,Xe=!!M.bumpMap,je=!!M.normalMap,Oe=!!M.displacementMap,Ze=!!M.emissiveMap,Fe=!!M.metalnessMap,D=!!M.roughnessMap,T=M.anisotropy>0,G=M.clearcoat>0,Y=M.dispersion>0,me=M.iridescence>0,ce=M.sheen>0,Ne=M.transmission>0,Se=T&&!!M.anisotropyMap,ye=G&&!!M.clearcoatMap,nt=G&&!!M.clearcoatNormalMap,ve=G&&!!M.clearcoatRoughnessMap,Ae=me&&!!M.iridescenceMap,De=me&&!!M.iridescenceThicknessMap,Ie=ce&&!!M.sheenColorMap,Me=ce&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,He=!!M.specularColorMap,Je=!!M.specularIntensityMap,O=Ne&&!!M.transmissionMap,te=Ne&&!!M.thicknessMap,re=!!M.gradientMap,de=!!M.alphaMap,Ce=M.alphaTest>0,Te=!!M.alphaHash,$e=!!M.extensions;let pt=_i;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Rt={shaderID:_e,shaderType:M.type,shaderName:M.name,vertexShader:be,fragmentShader:$,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:Pe,batchingColor:Pe&&k._colorsTexture!==null,instancing:Le,instancingColor:Le&&k.instanceColor!==null,instancingMorph:Le&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:yi,alphaToCoverage:!!M.alphaToCoverage,map:tt,matcap:qe,envMap:lt,envMapMode:lt&&j.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:We,bumpMap:Xe,normalMap:je,displacementMap:d&&Oe,emissiveMap:Ze,normalMapObjectSpace:je&&M.normalMapType===im,normalMapTangentSpace:je&&M.normalMapType===nm,metalnessMap:Fe,roughnessMap:D,anisotropy:T,anisotropyMap:Se,clearcoat:G,clearcoatMap:ye,clearcoatNormalMap:nt,clearcoatRoughnessMap:ve,dispersion:Y,iridescence:me,iridescenceMap:Ae,iridescenceThicknessMap:De,sheen:ce,sheenColorMap:Ie,sheenRoughnessMap:Me,specularMap:Ye,specularColorMap:He,specularIntensityMap:Je,transmission:Ne,transmissionMap:O,thicknessMap:te,gradientMap:re,opaque:M.transparent===!1&&M.blending===Gr&&M.alphaToCoverage===!1,alphaMap:de,alphaTest:Ce,alphaHash:Te,combine:M.combine,mapUv:tt&&g(M.map.channel),aoMapUv:F&&g(M.aoMap.channel),lightMapUv:We&&g(M.lightMap.channel),bumpMapUv:Xe&&g(M.bumpMap.channel),normalMapUv:je&&g(M.normalMap.channel),displacementMapUv:Oe&&g(M.displacementMap.channel),emissiveMapUv:Ze&&g(M.emissiveMap.channel),metalnessMapUv:Fe&&g(M.metalnessMap.channel),roughnessMapUv:D&&g(M.roughnessMap.channel),anisotropyMapUv:Se&&g(M.anisotropyMap.channel),clearcoatMapUv:ye&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:nt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:De&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(M.sheenRoughnessMap.channel),specularMapUv:Ye&&g(M.specularMap.channel),specularColorMapUv:He&&g(M.specularColorMap.channel),specularIntensityMapUv:Je&&g(M.specularIntensityMap.channel),transmissionMapUv:O&&g(M.transmissionMap.channel),thicknessMapUv:te&&g(M.thicknessMap.channel),alphaMapUv:de&&g(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(je||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(tt||de),fog:!!Z,useFog:M.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ge,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:tt&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:Ze&&M.emissiveMap.isVideoTexture===!0&&ht.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$e&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&M.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)w.push(U),w.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(b(w,M),E(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function b(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function E(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const w=v[M.type];let U;if(w){const H=Kn[w];U=Fm.clone(H.uniforms)}else U=M.uniforms;return U}function P(M,w){let U;for(let H=0,k=h.length;H<k;H++){const Z=h[H];if(Z.cacheKey===w){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new $v(i,w,M,s),h.push(U)),U}function I(M){if(--M.usedTimes===0){const w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:P,releaseProgram:I,releaseShaderCache:R,programs:h,dispose:L}}function ex(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function tx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Iu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,_,v,g,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:_,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=_,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,d,_,v,g,m){const p=o(f,d,_,v,g,m);_.transmission>0?n.push(p):_.transparent===!0?r.push(p):t.push(p)}function l(f,d,_,v,g,m){const p=o(f,d,_,v,g,m);_.transmission>0?n.unshift(p):_.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||tx),n.length>1&&n.sort(d||Lu),r.length>1&&r.sort(d||Lu)}function h(){for(let f=e,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function nx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Iu,i.set(n,[o])):r>=s.length?(o=new Iu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new et};break;case"SpotLight":t={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sx=0;function ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ax(i){const e=new ix,t=rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const r=new W,s=new It,o=new It;function a(c){let h=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let _=0,v=0,g=0,m=0,p=0,b=0,E=0,S=0,P=0,I=0,R=0;c.sort(ox);for(let M=0,w=c.length;M<w;M++){const U=c[M],H=U.color,k=U.intensity,Z=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=H.r*k,f+=H.g*k,d+=H.b*k;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],k);R++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const j=U.shadow,V=t.get(U);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[_]=V,n.directionalShadowMap[_]=K,n.directionalShadowMatrix[_]=U.shadow.matrix,b++}n.directional[_]=X,_++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(H).multiplyScalar(k),X.distance=Z,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[g]=X;const j=U.shadow;if(U.map&&(n.spotLightMap[P]=U.map,P++,j.updateMatrices(U),U.castShadow&&I++),n.spotLightMatrix[g]=j.matrix,U.castShadow){const V=t.get(U);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=K,S++}g++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(H).multiplyScalar(k),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=X,m++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const j=U.shadow,V=t.get(U);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=U.shadow.matrix,E++}n.point[v]=X,v++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(k),X.groundColor.copy(U.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==_||L.pointLength!==v||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==P||L.numLightProbes!==R)&&(n.directional.length=_,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,L.directionalLength=_,L.pointLength=v,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=P,L.numLightProbes=R,n.version=sx++)}function l(c,h){let f=0,d=0,_=0,v=0,g=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const E=c[p];if(E.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(E.isSpotLight){const S=n.spot[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),_++}else if(E.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Uu(i){const e=new ax(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function lx(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Uu(i),e.set(r,[a])):s>=o.length?(a=new Uu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class cx extends Go{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ux extends Go{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function dx(i,e,t){let n=new yf;const r=new dt,s=new dt,o=new yt,a=new cx({depthPacking:tm}),l=new ux,c={},h=t.maxTextureSize,f={[Xi]:dn,[dn]:Xi,[on]:on},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:hx,fragmentShader:fx}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const v=new Mi;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(I,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const M=i.getRenderTarget(),w=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Hi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==ai&&this.type===ai,Z=p===ai&&this.type!==ai;for(let K=0,X=I.length;K<X;K++){const j=I[K],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const _e=V.getFrameExtents();if(r.multiply(_e),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/_e.x),r.x=s.x*_e.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/_e.y),r.y=s.y*_e.y,V.mapSize.y=s.y)),V.map===null||k===!0||Z===!0){const se=this.type!==ai?{minFilter:nn,magFilter:nn}:{};V.map!==null&&V.map.dispose(),V.map=new qi(r.x,r.y,se),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const xe=V.getViewportCount();for(let se=0;se<xe;se++){const Ee=V.getViewport(se);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),H.viewport(o),V.updateMatrices(j,se),n=V.getFrustum(),S(R,L,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===ai&&b(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,w,U)};function b(I,R){const L=e.update(g);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new qi(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,g,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(R,null,L,_,g,null)}function E(I,R,L,M){let w=null;const U=L.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)w=U;else if(w=L.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=w.uuid,k=R.uuid;let Z=c[H];Z===void 0&&(Z={},c[H]=Z);let K=Z[k];K===void 0&&(K=w.clone(),Z[k]=K,R.addEventListener("dispose",P)),w=K}if(w.visible=R.visible,w.wireframe=R.wireframe,M===ai?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:f[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=i.properties.get(w);H.light=L}return w}function S(I,R,L,M,w){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===ai)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,I.matrixWorld);const k=e.update(I),Z=I.material;if(Array.isArray(Z)){const K=k.groups;for(let X=0,j=K.length;X<j;X++){const V=K[X],_e=Z[V.materialIndex];if(_e&&_e.visible){const xe=E(I,_e,M,w);I.onBeforeShadow(i,I,R,L,k,xe,V),i.renderBufferDirect(L,null,k,xe,I,V),I.onAfterShadow(i,I,R,L,k,xe,V)}}}else if(Z.visible){const K=E(I,Z,M,w);I.onBeforeShadow(i,I,R,L,k,K,null),i.renderBufferDirect(L,null,k,K,I,null),I.onAfterShadow(i,I,R,L,k,K,null)}}const H=I.children;for(let k=0,Z=H.length;k<Z;k++)S(H[k],R,L,M,w)}function P(I){I.target.removeEventListener("dispose",P);for(const L in c){const M=c[L],w=I.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const px={[tl]:nl,[il]:ol,[rl]:al,[Jr]:sl,[nl]:tl,[ol]:il,[al]:rl,[sl]:Jr};function mx(i,e){function t(){let O=!1;const te=new yt;let re=null;const de=new yt(0,0,0,0);return{setMask:function(Ce){re!==Ce&&!O&&(i.colorMask(Ce,Ce,Ce,Ce),re=Ce)},setLocked:function(Ce){O=Ce},setClear:function(Ce,Te,$e,pt,Rt){Rt===!0&&(Ce*=pt,Te*=pt,$e*=pt),te.set(Ce,Te,$e,pt),de.equals(te)===!1&&(i.clearColor(Ce,Te,$e,pt),de.copy(te))},reset:function(){O=!1,re=null,de.set(-1,0,0,0)}}}function n(){let O=!1,te=!1,re=null,de=null,Ce=null;return{setReversed:function(Te){if(te!==Te){const $e=e.get("EXT_clip_control");te?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const pt=Ce;Ce=null,this.setClear(pt)}te=Te},getReversed:function(){return te},setTest:function(Te){Te?pe(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Te){re!==Te&&!O&&(i.depthMask(Te),re=Te)},setFunc:function(Te){if(te&&(Te=px[Te]),de!==Te){switch(Te){case tl:i.depthFunc(i.NEVER);break;case nl:i.depthFunc(i.ALWAYS);break;case il:i.depthFunc(i.LESS);break;case Jr:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case sl:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Te}},setLocked:function(Te){O=Te},setClear:function(Te){Ce!==Te&&(te&&(Te=1-Te),i.clearDepth(Te),Ce=Te)},reset:function(){O=!1,re=null,de=null,Ce=null,te=!1}}}function r(){let O=!1,te=null,re=null,de=null,Ce=null,Te=null,$e=null,pt=null,Rt=null;return{setTest:function(ut){O||(ut?pe(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(ut){te!==ut&&!O&&(i.stencilMask(ut),te=ut)},setFunc:function(ut,Zt,Gt){(re!==ut||de!==Zt||Ce!==Gt)&&(i.stencilFunc(ut,Zt,Gt),re=ut,de=Zt,Ce=Gt)},setOp:function(ut,Zt,Gt){(Te!==ut||$e!==Zt||pt!==Gt)&&(i.stencilOp(ut,Zt,Gt),Te=ut,$e=Zt,pt=Gt)},setLocked:function(ut){O=ut},setClear:function(ut){Rt!==ut&&(i.clearStencil(ut),Rt=ut)},reset:function(){O=!1,te=null,re=null,de=null,Ce=null,Te=null,$e=null,pt=null,Rt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,_=[],v=null,g=!1,m=null,p=null,b=null,E=null,S=null,P=null,I=null,R=new et(0,0,0),L=0,M=!1,w=null,U=null,H=null,k=null,Z=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=j>=2);let _e=null,xe={};const se=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),be=new yt().fromArray(se),$=new yt().fromArray(Ee);function he(O,te,re,de){const Ce=new Uint8Array(4),Te=i.createTexture();i.bindTexture(O,Te),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<re;$e++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(te+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Te}const fe={};fe[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(Jr),Xe(!1),je(zc),pe(i.CULL_FACE),F(Hi);function pe(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ge(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Le(O,te){return f[O]!==te?(i.bindFramebuffer(O,te),f[O]=te,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=te),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Pe(O,te){let re=_,de=!1;if(O){re=d.get(te),re===void 0&&(re=[],d.set(te,re));const Ce=O.textures;if(re.length!==Ce.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,$e=Ce.length;Te<$e;Te++)re[Te]=i.COLOR_ATTACHMENT0+Te;re.length=Ce.length,de=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,de=!0);de&&i.drawBuffers(re)}function tt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const qe={[lr]:i.FUNC_ADD,[Ap]:i.FUNC_SUBTRACT,[Rp]:i.FUNC_REVERSE_SUBTRACT};qe[Cp]=i.MIN,qe[Pp]=i.MAX;const lt={[Dp]:i.ZERO,[Lp]:i.ONE,[Ip]:i.SRC_COLOR,[Qa]:i.SRC_ALPHA,[Bp]:i.SRC_ALPHA_SATURATE,[Op]:i.DST_COLOR,[Np]:i.DST_ALPHA,[Up]:i.ONE_MINUS_SRC_COLOR,[el]:i.ONE_MINUS_SRC_ALPHA,[zp]:i.ONE_MINUS_DST_COLOR,[Fp]:i.ONE_MINUS_DST_ALPHA,[kp]:i.CONSTANT_COLOR,[Hp]:i.ONE_MINUS_CONSTANT_COLOR,[Vp]:i.CONSTANT_ALPHA,[Gp]:i.ONE_MINUS_CONSTANT_ALPHA};function F(O,te,re,de,Ce,Te,$e,pt,Rt,ut){if(O===Hi){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),O!==wp){if(O!==m||ut!==M){if((p!==lr||S!==lr)&&(i.blendEquation(i.FUNC_ADD),p=lr,S=lr),ut)switch(O){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,E=null,P=null,I=null,R.set(0,0,0),L=0,m=O,M=ut}return}Ce=Ce||te,Te=Te||re,$e=$e||de,(te!==p||Ce!==S)&&(i.blendEquationSeparate(qe[te],qe[Ce]),p=te,S=Ce),(re!==b||de!==E||Te!==P||$e!==I)&&(i.blendFuncSeparate(lt[re],lt[de],lt[Te],lt[$e]),b=re,E=de,P=Te,I=$e),(pt.equals(R)===!1||Rt!==L)&&(i.blendColor(pt.r,pt.g,pt.b,Rt),R.copy(pt),L=Rt),m=O,M=!1}function We(O,te){O.side===on?ge(i.CULL_FACE):pe(i.CULL_FACE);let re=O.side===dn;te&&(re=!re),Xe(re),O.blending===Gr&&O.transparent===!1?F(Hi):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const de=O.stencilWrite;a.setTest(de),de&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ze(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(O){w!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),w=O)}function je(O){O!==Ep?(pe(i.CULL_FACE),O!==U&&(O===zc?i.cullFace(i.BACK):O===Tp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),U=O}function Oe(O){O!==H&&(X&&i.lineWidth(O),H=O)}function Ze(O,te,re){O?(pe(i.POLYGON_OFFSET_FILL),(k!==te||Z!==re)&&(i.polygonOffset(te,re),k=te,Z=re)):ge(i.POLYGON_OFFSET_FILL)}function Fe(O){O?pe(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function D(O){O===void 0&&(O=i.TEXTURE0+K-1),_e!==O&&(i.activeTexture(O),_e=O)}function T(O,te,re){re===void 0&&(_e===null?re=i.TEXTURE0+K-1:re=_e);let de=xe[re];de===void 0&&(de={type:void 0,texture:void 0},xe[re]=de),(de.type!==O||de.texture!==te)&&(_e!==re&&(i.activeTexture(re),_e=re),i.bindTexture(O,te||fe[O]),de.type=O,de.texture=te)}function G(){const O=xe[_e];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(O){be.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),be.copy(O))}function Me(O){$.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function Ye(O,te){let re=c.get(te);re===void 0&&(re=new WeakMap,c.set(te,re));let de=re.get(O);de===void 0&&(de=i.getUniformBlockIndex(te,O.name),re.set(O,de))}function He(O,te){const de=c.get(te).get(O);l.get(te)!==de&&(i.uniformBlockBinding(te,de,O.__bindingPointIndex),l.set(te,de))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},_e=null,xe={},f={},d=new WeakMap,_=[],v=null,g=!1,m=null,p=null,b=null,E=null,S=null,P=null,I=null,R=new et(0,0,0),L=0,M=!1,w=null,U=null,H=null,k=null,Z=null,be.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:ge,bindFramebuffer:Le,drawBuffers:Pe,useProgram:tt,setBlending:F,setMaterial:We,setFlipSided:Xe,setCullFace:je,setLineWidth:Oe,setPolygonOffset:Ze,setScissorTest:Fe,activeTexture:D,bindTexture:T,unbindTexture:G,compressedTexImage2D:Y,compressedTexImage3D:me,texImage2D:Ae,texImage3D:De,updateUBOMapping:Ye,uniformBlockBinding:He,texStorage2D:nt,texStorage3D:ve,texSubImage2D:ce,texSubImage3D:Ne,compressedTexSubImage2D:Se,compressedTexSubImage3D:ye,scissor:Ie,viewport:Me,reset:Je}}function Nu(i,e,t,n){const r=_x(n);switch(t){case rf:return i*e;case of:return i*e;case af:return i*e*2;case lc:return i*e/r.components*r.byteLength;case cc:return i*e/r.components*r.byteLength;case lf:return i*e*2/r.components*r.byteLength;case uc:return i*e*2/r.components*r.byteLength;case sf:return i*e*3/r.components*r.byteLength;case ln:return i*e*4/r.components*r.byteLength;case hc:return i*e*4/r.components*r.byteLength;case xo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:case dl:return Math.max(i,16)*Math.max(e,8)/4;case ul:case fl:return Math.max(i,8)*Math.max(e,8)/2;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Dl:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cf:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ul:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _x(i){switch(i){case Si:case ef:return{byteLength:1,components:1};case Ls:case tf:case di:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case vr:case sc:case Tn:return{byteLength:4,components:1};case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function gx(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,T){return _?new OffscreenCanvas(D,T):Is("canvas")}function g(D,T,G){let Y=1;const me=Fe(D);if((me.width>G||me.height>G)&&(Y=G/Math.max(me.width,me.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(Y*me.width),Ne=Math.floor(Y*me.height);f===void 0&&(f=v(ce,Ne));const Se=T?v(ce,Ne):f;return Se.width=ce,Se.height=Ne,Se.getContext("2d").drawImage(D,0,0,ce,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ce+"x"+Ne+")."),Se}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,T,G,Y,me=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=T;if(T===i.RED&&(G===i.FLOAT&&(ce=i.R32F),G===i.HALF_FLOAT&&(ce=i.R16F),G===i.UNSIGNED_BYTE&&(ce=i.R8)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ce=i.R8UI),G===i.UNSIGNED_SHORT&&(ce=i.R16UI),G===i.UNSIGNED_INT&&(ce=i.R32UI),G===i.BYTE&&(ce=i.R8I),G===i.SHORT&&(ce=i.R16I),G===i.INT&&(ce=i.R32I)),T===i.RG&&(G===i.FLOAT&&(ce=i.RG32F),G===i.HALF_FLOAT&&(ce=i.RG16F),G===i.UNSIGNED_BYTE&&(ce=i.RG8)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ce=i.RG8UI),G===i.UNSIGNED_SHORT&&(ce=i.RG16UI),G===i.UNSIGNED_INT&&(ce=i.RG32UI),G===i.BYTE&&(ce=i.RG8I),G===i.SHORT&&(ce=i.RG16I),G===i.INT&&(ce=i.RG32I)),T===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),G===i.UNSIGNED_INT&&(ce=i.RGB32UI),G===i.BYTE&&(ce=i.RGB8I),G===i.SHORT&&(ce=i.RGB16I),G===i.INT&&(ce=i.RGB32I)),T===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),G===i.UNSIGNED_INT&&(ce=i.RGBA32UI),G===i.BYTE&&(ce=i.RGBA8I),G===i.SHORT&&(ce=i.RGBA16I),G===i.INT&&(ce=i.RGBA32I)),T===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),T===i.RGBA){const Ne=me?Vo:ht.getTransfer(Y);G===i.FLOAT&&(ce=i.RGBA32F),G===i.HALF_FLOAT&&(ce=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ce=Ne===mt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function S(D,T){let G;return D?T===null||T===vr||T===ts?G=i.DEPTH24_STENCIL8:T===Tn?G=i.DEPTH32F_STENCIL8:T===Ls&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===vr||T===ts?G=i.DEPTH_COMPONENT24:T===Tn?G=i.DEPTH_COMPONENT32F:T===Ls&&(G=i.DEPTH_COMPONENT16),G}function P(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==nn&&D.minFilter!==Ht?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function I(D){const T=D.target;T.removeEventListener("dispose",I),L(T),T.isVideoTexture&&h.delete(T)}function R(D){const T=D.target;T.removeEventListener("dispose",R),w(T)}function L(D){const T=n.get(D);if(T.__webglInit===void 0)return;const G=D.source,Y=d.get(G);if(Y){const me=Y[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&M(D),Object.keys(Y).length===0&&d.delete(G)}n.remove(D)}function M(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const G=D.source,Y=d.get(G);delete Y[T.__cacheKey],o.memory.textures--}function w(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let me=0;me<T.__webglFramebuffer[Y].length;me++)i.deleteFramebuffer(T.__webglFramebuffer[Y][me]);else i.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)i.deleteFramebuffer(T.__webglFramebuffer[Y]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=D.textures;for(let Y=0,me=G.length;Y<me;Y++){const ce=n.get(G[Y]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(G[Y])}n.remove(D)}let U=0;function H(){U=0}function k(){const D=U;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),U+=1,D}function Z(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function K(D,T){const G=n.get(D);if(D.isVideoTexture&&Oe(D),D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){const Y=D.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,D,T);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function X(D,T){const G=n.get(D);if(D.version>0&&G.__version!==D.version){$(G,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function j(D,T){const G=n.get(D);if(D.version>0&&G.__version!==D.version){$(G,D,T);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function V(D,T){const G=n.get(D);if(D.version>0&&G.__version!==D.version){he(G,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}const _e={[Wr]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[No]:i.MIRRORED_REPEAT},xe={[nn]:i.NEAREST,[Qp]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},se={[rm]:i.NEVER,[um]:i.ALWAYS,[sm]:i.LESS,[uf]:i.LEQUAL,[om]:i.EQUAL,[cm]:i.GEQUAL,[am]:i.GREATER,[lm]:i.NOTEQUAL};function Ee(D,T){if(T.type===Tn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ht||T.magFilter===ea||T.magFilter===Hs||T.magFilter===fi||T.minFilter===Ht||T.minFilter===ea||T.minFilter===Hs||T.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,_e[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,_e[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,_e[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,xe[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,xe[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===nn||T.minFilter!==Hs&&T.minFilter!==fi||T.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function be(D,T){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",I));const Y=T.source;let me=d.get(Y);me===void 0&&(me={},d.set(Y,me));const ce=Z(T);if(ce!==D.__cacheKey){me[ce]===void 0&&(me[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),me[ce].usedTimes++;const Ne=me[D.__cacheKey];Ne!==void 0&&(me[D.__cacheKey].usedTimes--,Ne.usedTimes===0&&M(T)),D.__cacheKey=ce,D.__webglTexture=me[ce].texture}return G}function $(D,T,G){let Y=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=i.TEXTURE_3D);const me=be(D,T),ce=T.source;t.bindTexture(Y,D.__webglTexture,i.TEXTURE0+G);const Ne=n.get(ce);if(ce.version!==Ne.__version||me===!0){t.activeTexture(i.TEXTURE0+G);const Se=ht.getPrimaries(ht.workingColorSpace),ye=T.colorSpace===an?null:ht.getPrimaries(T.colorSpace),nt=T.colorSpace===an||Se===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ve=g(T.image,!1,r.maxTextureSize);ve=Ze(T,ve);const Ae=s.convert(T.format,T.colorSpace),De=s.convert(T.type);let Ie=E(T.internalFormat,Ae,De,T.colorSpace,T.isVideoTexture);Ee(Y,T);let Me;const Ye=T.mipmaps,He=T.isVideoTexture!==!0,Je=Ne.__version===void 0||me===!0,O=ce.dataReady,te=P(T,ve);if(T.isDepthTexture)Ie=S(T.format===ns,T.type),Je&&(He?t.texStorage2D(i.TEXTURE_2D,1,Ie,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ve.width,ve.height,0,Ae,De,null));else if(T.isDataTexture)if(Ye.length>0){He&&Je&&t.texStorage2D(i.TEXTURE_2D,te,Ie,Ye[0].width,Ye[0].height);for(let re=0,de=Ye.length;re<de;re++)Me=Ye[re],He?O&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Me.width,Me.height,Ae,De,Me.data):t.texImage2D(i.TEXTURE_2D,re,Ie,Me.width,Me.height,0,Ae,De,Me.data);T.generateMipmaps=!1}else He?(Je&&t.texStorage2D(i.TEXTURE_2D,te,Ie,ve.width,ve.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve.width,ve.height,Ae,De,ve.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ve.width,ve.height,0,Ae,De,ve.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){He&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ie,Ye[0].width,Ye[0].height,ve.depth);for(let re=0,de=Ye.length;re<de;re++)if(Me=Ye[re],T.format!==ln)if(Ae!==null)if(He){if(O)if(T.layerUpdates.size>0){const Ce=Nu(Me.width,Me.height,T.format,T.type);for(const Te of T.layerUpdates){const $e=Me.data.subarray(Te*Ce/Me.data.BYTES_PER_ELEMENT,(Te+1)*Ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Te,Me.width,Me.height,1,Ae,$e)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Me.width,Me.height,ve.depth,Ae,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ie,Me.width,Me.height,ve.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Me.width,Me.height,ve.depth,Ae,De,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ie,Me.width,Me.height,ve.depth,0,Ae,De,Me.data)}else{He&&Je&&t.texStorage2D(i.TEXTURE_2D,te,Ie,Ye[0].width,Ye[0].height);for(let re=0,de=Ye.length;re<de;re++)Me=Ye[re],T.format!==ln?Ae!==null?He?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ie,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?O&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Me.width,Me.height,Ae,De,Me.data):t.texImage2D(i.TEXTURE_2D,re,Ie,Me.width,Me.height,0,Ae,De,Me.data)}else if(T.isDataArrayTexture)if(He){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ie,ve.width,ve.height,ve.depth),O)if(T.layerUpdates.size>0){const re=Nu(ve.width,ve.height,T.format,T.type);for(const de of T.layerUpdates){const Ce=ve.data.subarray(de*re/ve.data.BYTES_PER_ELEMENT,(de+1)*re/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,ve.width,ve.height,1,Ae,De,Ce)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ae,De,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ve.width,ve.height,ve.depth,0,Ae,De,ve.data);else if(T.isData3DTexture)He?(Je&&t.texStorage3D(i.TEXTURE_3D,te,Ie,ve.width,ve.height,ve.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ae,De,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ve.width,ve.height,ve.depth,0,Ae,De,ve.data);else if(T.isFramebufferTexture){if(Je)if(He)t.texStorage2D(i.TEXTURE_2D,te,Ie,ve.width,ve.height);else{let re=ve.width,de=ve.height;for(let Ce=0;Ce<te;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Ie,re,de,0,Ae,De,null),re>>=1,de>>=1}}else if(Ye.length>0){if(He&&Je){const re=Fe(Ye[0]);t.texStorage2D(i.TEXTURE_2D,te,Ie,re.width,re.height)}for(let re=0,de=Ye.length;re<de;re++)Me=Ye[re],He?O&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ae,De,Me):t.texImage2D(i.TEXTURE_2D,re,Ie,Ae,De,Me);T.generateMipmaps=!1}else if(He){if(Je){const re=Fe(ve);t.texStorage2D(i.TEXTURE_2D,te,Ie,re.width,re.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,De,ve)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Ae,De,ve);m(T)&&p(Y),Ne.__version=ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function he(D,T,G){if(T.image.length!==6)return;const Y=be(D,T),me=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+G);const ce=n.get(me);if(me.version!==ce.__version||Y===!0){t.activeTexture(i.TEXTURE0+G);const Ne=ht.getPrimaries(ht.workingColorSpace),Se=T.colorSpace===an?null:ht.getPrimaries(T.colorSpace),ye=T.colorSpace===an||Ne===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const nt=T.isCompressedTexture||T.image[0].isCompressedTexture,ve=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let de=0;de<6;de++)!nt&&!ve?Ae[de]=g(T.image[de],!0,r.maxCubemapSize):Ae[de]=ve?T.image[de].image:T.image[de],Ae[de]=Ze(T,Ae[de]);const De=Ae[0],Ie=s.convert(T.format,T.colorSpace),Me=s.convert(T.type),Ye=E(T.internalFormat,Ie,Me,T.colorSpace),He=T.isVideoTexture!==!0,Je=ce.__version===void 0||Y===!0,O=me.dataReady;let te=P(T,De);Ee(i.TEXTURE_CUBE_MAP,T);let re;if(nt){He&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Ye,De.width,De.height);for(let de=0;de<6;de++){re=Ae[de].mipmaps;for(let Ce=0;Ce<re.length;Ce++){const Te=re[Ce];T.format!==ln?Ie!==null?He?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,Te.width,Te.height,Ie,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,Ye,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,Te.width,Te.height,Ie,Me,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,Ye,Te.width,Te.height,0,Ie,Me,Te.data)}}}else{if(re=T.mipmaps,He&&Je){re.length>0&&te++;const de=Fe(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Ye,de.width,de.height)}for(let de=0;de<6;de++)if(ve){He?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ae[de].width,Ae[de].height,Ie,Me,Ae[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ye,Ae[de].width,Ae[de].height,0,Ie,Me,Ae[de].data);for(let Ce=0;Ce<re.length;Ce++){const $e=re[Ce].image[de].image;He?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,$e.width,$e.height,Ie,Me,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,Ye,$e.width,$e.height,0,Ie,Me,$e.data)}}else{He?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ie,Me,Ae[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ye,Ie,Me,Ae[de]);for(let Ce=0;Ce<re.length;Ce++){const Te=re[Ce];He?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,Ie,Me,Te.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,Ye,Ie,Me,Te.image[de])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),ce.__version=me.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function fe(D,T,G,Y,me,ce){const Ne=s.convert(G.format,G.colorSpace),Se=s.convert(G.type),ye=E(G.internalFormat,Ne,Se,G.colorSpace),nt=n.get(T),ve=n.get(G);if(ve.__renderTarget=T,!nt.__hasExternalTextures){const Ae=Math.max(1,T.width>>ce),De=Math.max(1,T.height>>ce);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,ce,ye,Ae,De,T.depth,0,Ne,Se,null):t.texImage2D(me,ce,ye,Ae,De,0,Ne,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),je(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,me,ve.__webglTexture,0,Xe(T)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,me,ve.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(D,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const Y=T.depthTexture,me=Y&&Y.isDepthTexture?Y.type:null,ce=S(T.stencilBuffer,me),Ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=Xe(T);je(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ce,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,D)}else{const Y=T.textures;for(let me=0;me<Y.length;me++){const ce=Y[me],Ne=s.convert(ce.format,ce.colorSpace),Se=s.convert(ce.type),ye=E(ce.internalFormat,Ne,Se,ce.colorSpace),nt=Xe(T);G&&je(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,ye,T.width,T.height):je(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,ye,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ye,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(T.depthTexture);Y.__renderTarget=T,(!Y.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K(T.depthTexture,0);const me=Y.__webglTexture,ce=Xe(T);if(T.depthTexture.format===Xr)je(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(T.depthTexture.format===ns)je(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Le(D){const T=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const Y=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",me)};Y.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=Y}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ge(T.__webglFramebuffer,D)}else if(G){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=i.createRenderbuffer(),pe(T.__webglDepthbuffer[Y],D,!1);else{const me=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),pe(T.__webglDepthbuffer,D,!1);else{const Y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(D,T,G){const Y=n.get(D);T!==void 0&&fe(Y.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Le(D)}function tt(D){const T=D.texture,G=n.get(D),Y=n.get(T);D.addEventListener("dispose",R);const me=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ne=me.length>1;if(Ne||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=T.version,o.memory.textures++),ce){G.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[Se]=[];for(let ye=0;ye<T.mipmaps.length;ye++)G.__webglFramebuffer[Se][ye]=i.createFramebuffer()}else G.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let Se=0;Se<T.mipmaps.length;Se++)G.__webglFramebuffer[Se]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let Se=0,ye=me.length;Se<ye;Se++){const nt=n.get(me[Se]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&je(D)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Se=0;Se<me.length;Se++){const ye=me[Se];G.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Se]);const nt=s.convert(ye.format,ye.colorSpace),ve=s.convert(ye.type),Ae=E(ye.internalFormat,nt,ve,ye.colorSpace,D.isXRRenderTarget===!0),De=Xe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Ae,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,G.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,T);for(let Se=0;Se<6;Se++)if(T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)fe(G.__webglFramebuffer[Se][ye],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ye);else fe(G.__webglFramebuffer[Se],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);m(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Se=0,ye=me.length;Se<ye;Se++){const nt=me[Se],ve=n.get(nt);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),Ee(i.TEXTURE_2D,nt),fe(G.__webglFramebuffer,D,nt,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),m(nt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Se=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,Y.__webglTexture),Ee(Se,T),T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)fe(G.__webglFramebuffer[ye],D,T,i.COLOR_ATTACHMENT0,Se,ye);else fe(G.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,Se,0);m(T)&&p(Se),t.unbindTexture()}D.depthBuffer&&Le(D)}function qe(D){const T=D.textures;for(let G=0,Y=T.length;G<Y;G++){const me=T[G];if(m(me)){const ce=b(D),Ne=n.get(me).__webglTexture;t.bindTexture(ce,Ne),p(ce),t.unbindTexture()}}}const lt=[],F=[];function We(D){if(D.samples>0){if(je(D)===!1){const T=D.textures,G=D.width,Y=D.height;let me=i.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(D),Se=T.length>1;if(Se)for(let ye=0;ye<T.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[ye]);const nt=n.get(T[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,me,i.NEAREST),l===!0&&(lt.length=0,F.length=0,lt.push(i.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(lt.push(ce),F.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let ye=0;ye<T.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[ye]);const nt=n.get(T[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Xe(D){return Math.min(r.maxSamples,D.samples)}function je(D){const T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Oe(D){const T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function Ze(D,T){const G=D.colorSpace,Y=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==yi&&G!==an&&(ht.getTransfer(G)===mt?(Y!==ln||me!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function Fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=Pe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=je}function vx(i,e){function t(n,r=an){let s;const o=ht.getTransfer(r);if(n===Si)return i.UNSIGNED_BYTE;if(n===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return i.BYTE;if(n===tf)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===vr)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===di)return i.HALF_FLOAT;if(n===rf)return i.ALPHA;if(n===sf)return i.RGB;if(n===ln)return i.RGBA;if(n===of)return i.LUMINANCE;if(n===af)return i.LUMINANCE_ALPHA;if(n===Xr)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===cc)return i.RED_INTEGER;if(n===lf)return i.RG;if(n===uc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===xo||n===So||n===yo||n===Mo)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===hl||n===fl||n===dl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===_l)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===pl||n===ml)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===_l)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gl||n===vl||n===xl||n===Sl||n===yl||n===Ml||n===El||n===Tl||n===bl||n===wl||n===Al||n===Rl||n===Cl||n===Pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===gl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===Dl||n===Ll)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Eo)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cf||n===Il||n===Ul||n===Nl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class xx extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mi extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sx={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),_=.02,v=.005;c.inputState.pinching&&d>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`;class Ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:yx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tx extends rs{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,_=null,v=null;const g=new Ex,m=t.getContextAttributes();let p=null,b=null;const E=[],S=[],P=new dt;let I=null;const R=new Sn;R.viewport=new yt;const L=new Sn;L.viewport=new yt;const M=[R,L],w=new xx;let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=E[$];return he===void 0&&(he=new Ca,E[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=E[$];return he===void 0&&(he=new Ca,E[$]=he),he.getGripSpace()},this.getHand=function($){let he=E[$];return he===void 0&&(he=new Ca,E[$]=he),he.getHandSpace()};function k($){const he=S.indexOf($.inputSource);if(he===-1)return;const fe=E[he];fe!==void 0&&(fe.update($.inputSource,$.frame,c||o),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",K);for(let $=0;$<E.length;$++){const he=S[$];he!==null&&(S[$]=null,E[$].disconnect(he))}U=null,H=null,g.reset(),e.setRenderTarget(p),_=null,d=null,f=null,r=null,b=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new qi(_.framebufferWidth,_.framebufferHeight,{format:ln,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,fe=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?ns:Xr,fe=m.stencil?ts:vr);const ge={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new qi(d.textureWidth,d.textureHeight,{format:ln,type:Si,depthTexture:new Tf(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K($){for(let he=0;he<$.removed.length;he++){const fe=$.removed[he],pe=S.indexOf(fe);pe>=0&&(S[pe]=null,E[pe].disconnect(fe))}for(let he=0;he<$.added.length;he++){const fe=$.added[he];let pe=S.indexOf(fe);if(pe===-1){for(let Le=0;Le<E.length;Le++)if(Le>=S.length){S.push(fe),pe=Le;break}else if(S[Le]===null){S[Le]=fe,pe=Le;break}if(pe===-1)break}const ge=E[pe];ge&&ge.connect(fe)}}const X=new W,j=new W;function V($,he,fe){X.setFromMatrixPosition(he.matrixWorld),j.setFromMatrixPosition(fe.matrixWorld);const pe=X.distanceTo(j),ge=he.projectionMatrix.elements,Le=fe.projectionMatrix.elements,Pe=ge[14]/(ge[10]-1),tt=ge[14]/(ge[10]+1),qe=(ge[9]+1)/ge[5],lt=(ge[9]-1)/ge[5],F=(ge[8]-1)/ge[0],We=(Le[8]+1)/Le[0],Xe=Pe*F,je=Pe*We,Oe=pe/(-F+We),Ze=Oe*-F;if(he.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ze),$.translateZ(Oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ge[10]===-1)$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Fe=Pe+Oe,D=tt+Oe,T=Xe-Ze,G=je+(pe-Ze),Y=qe*tt/D*Fe,me=lt*tt/D*Fe;$.projectionMatrix.makePerspective(T,G,Y,me,Fe,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _e($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let he=$.near,fe=$.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),w.near=L.near=R.near=he,w.far=L.far=R.far=fe,(U!==w.near||H!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),U=w.near,H=w.far),R.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,w.layers.mask=R.layers.mask|L.layers.mask;const pe=$.parent,ge=w.cameras;_e(w,pe);for(let Le=0;Le<ge.length;Le++)_e(ge[Le],pe);ge.length===2?V(w,R,L):w.projectionMatrix.copy(R.projectionMatrix),xe($,w,pe)};function xe($,he,fe){fe===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let se=null;function Ee($,he){if(h=he.getViewerPose(c||o),v=he,h!==null){const fe=h.views;_!==null&&(e.setRenderTargetFramebuffer(b,_.framebuffer),e.setRenderTarget(b));let pe=!1;fe.length!==w.cameras.length&&(w.cameras.length=0,pe=!0);for(let Le=0;Le<fe.length;Le++){const Pe=fe[Le];let tt=null;if(_!==null)tt=_.getViewport(Pe);else{const lt=f.getViewSubImage(d,Pe);tt=lt.viewport,Le===0&&(e.setRenderTargetTextures(b,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(b))}let qe=M[Le];qe===void 0&&(qe=new Sn,qe.layers.enable(Le),qe.viewport=new yt,M[Le]=qe),qe.matrix.fromArray(Pe.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Pe.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(tt.x,tt.y,tt.width,tt.height),Le===0&&(w.matrix.copy(qe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pe===!0&&w.cameras.push(qe)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const Le=f.getDepthInformation(fe[0]);Le&&Le.isValid&&Le.texture&&g.init(e,Le,r.renderState)}}for(let fe=0;fe<E.length;fe++){const pe=S[fe],ge=E[fe];pe!==null&&ge!==void 0&&ge.update(pe,he,c||o)}se&&se($,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),v=null}const be=new Mf;be.setAnimationLoop(Ee),this.setAnimationLoop=function($){se=$},this.dispose=function(){}}}const ir=new On,bx=new It;function wx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&_(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),E=b.envMap,S=b.envMapRotation;E&&(m.envMap.value=E,ir.copy(S),ir.x*=-1,ir.y*=-1,ir.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(ir)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ax(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const S=E.program;n.uniformBlockBinding(b,S)}function c(b,E){let S=r[b.id];S===void 0&&(v(b),S=h(b),r[b.id]=S,b.addEventListener("dispose",m));const P=E.program;n.updateUBOMapping(b,P);const I=e.render.frame;s[b.id]!==I&&(d(b),s[b.id]=I)}function h(b){const E=f();b.__bindingPointIndex=E;const S=i.createBuffer(),P=b.__size,I=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=r[b.id],S=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let I=0,R=S.length;I<R;I++){const L=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,w=L.length;M<w;M++){const U=L[M];if(_(U,I,M,P)===!0){const H=U.__offset,k=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let K=0;K<k.length;K++){const X=k[K],j=g(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,H+Z,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,Z),Z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(b,E,S,P){const I=b.value,R=E+"_"+S;if(P[R]===void 0)return typeof I=="number"||typeof I=="boolean"?P[R]=I:P[R]=I.clone(),!0;{const L=P[R];if(typeof I=="number"||typeof I=="boolean"){if(L!==I)return P[R]=I,!0}else if(L.equals(I)===!1)return L.copy(I),!0}return!1}function v(b){const E=b.uniforms;let S=0;const P=16;for(let R=0,L=E.length;R<L;R++){const M=Array.isArray(E[R])?E[R]:[E[R]];for(let w=0,U=M.length;w<U;w++){const H=M[w],k=Array.isArray(H.value)?H.value:[H.value];for(let Z=0,K=k.length;Z<K;Z++){const X=k[Z],j=g(X),V=S%P,_e=V%j.boundary,xe=V+_e;S+=_e,xe!==0&&P-xe<j.storage&&(S+=P-xe),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=j.storage}}}const I=S%P;return I>0&&(S+=P-I),b.__size=S,b.__cache={},this}function g(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class mc{constructor(e={}){const{canvas:t=fm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=_i,this.toneMappingExposure=1;const S=this;let P=!1,I=0,R=0,L=null,M=-1,w=null;const U=new yt,H=new yt;let k=null;const Z=new et(0);let K=0,X=t.width,j=t.height,V=1,_e=null,xe=null;const se=new yt(0,0,X,j),Ee=new yt(0,0,X,j);let be=!1;const $=new yf;let he=!1,fe=!1;const pe=new It,ge=new It,Le=new W,Pe=new yt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function lt(){return L===null?V:1}let F=n;function We(u,x){return t.getContext(u,x)}try{const u={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Te,!1),F===null){const x="webgl2";if(F=We(x,u),F===null)throw We(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let Xe,je,Oe,Ze,Fe,D,T,G,Y,me,ce,Ne,Se,ye,nt,ve,Ae,De,Ie,Me,Ye,He,Je,O;function te(){Xe=new I0(F),Xe.init(),He=new vx(F,Xe),je=new A0(F,Xe,e,He),Oe=new mx(F,Xe),je.reverseDepthBuffer&&d&&Oe.buffers.depth.setReversed(!0),Ze=new F0(F),Fe=new ex,D=new gx(F,Xe,Oe,Fe,je,He,Ze),T=new C0(S),G=new L0(S),Y=new Gm(F),Je=new b0(F,Y),me=new U0(F,Y,Ze,Je),ce=new z0(F,me,Y,Ze),Ie=new O0(F,je,D),ve=new R0(Fe),Ne=new Qv(S,T,G,Xe,je,Je,ve),Se=new wx(S,Fe),ye=new nx,nt=new lx(Xe),De=new T0(S,T,G,Oe,ce,_,l),Ae=new dx(S,ce,je),O=new Ax(F,Ze,je,Oe),Me=new w0(F,Xe,Ze),Ye=new N0(F,Xe,Ze),Ze.programs=Ne.programs,S.capabilities=je,S.extensions=Xe,S.properties=Fe,S.renderLists=ye,S.shadowMap=Ae,S.state=Oe,S.info=Ze}te();const re=new Tx(S,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const u=Xe.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=Xe.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(u){u!==void 0&&(V=u,this.setSize(X,j,!1))},this.getSize=function(u){return u.set(X,j)},this.setSize=function(u,x,y=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=u,j=x,t.width=Math.floor(u*V),t.height=Math.floor(x*V),y===!0&&(t.style.width=u+"px",t.style.height=x+"px"),this.setViewport(0,0,u,x)},this.getDrawingBufferSize=function(u){return u.set(X*V,j*V).floor()},this.setDrawingBufferSize=function(u,x,y){X=u,j=x,V=y,t.width=Math.floor(u*y),t.height=Math.floor(x*y),this.setViewport(0,0,u,x)},this.getCurrentViewport=function(u){return u.copy(U)},this.getViewport=function(u){return u.copy(se)},this.setViewport=function(u,x,y,A){u.isVector4?se.set(u.x,u.y,u.z,u.w):se.set(u,x,y,A),Oe.viewport(U.copy(se).multiplyScalar(V).round())},this.getScissor=function(u){return u.copy(Ee)},this.setScissor=function(u,x,y,A){u.isVector4?Ee.set(u.x,u.y,u.z,u.w):Ee.set(u,x,y,A),Oe.scissor(H.copy(Ee).multiplyScalar(V).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(u){Oe.setScissorTest(be=u)},this.setOpaqueSort=function(u){_e=u},this.setTransparentSort=function(u){xe=u},this.getClearColor=function(u){return u.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(u=!0,x=!0,y=!0){let A=0;if(u){let C=!1;if(L!==null){const N=L.texture.format;C=N===hc||N===uc||N===cc}if(C){const N=L.texture.type,B=N===Si||N===vr||N===Ls||N===ts||N===oc||N===ac,ne=De.getClearColor(),q=De.getClearAlpha(),Q=ne.r,J=ne.g,z=ne.b;B?(v[0]=Q,v[1]=J,v[2]=z,v[3]=q,F.clearBufferuiv(F.COLOR,0,v)):(g[0]=Q,g[1]=J,g[2]=z,g[3]=q,F.clearBufferiv(F.COLOR,0,g))}else A|=F.COLOR_BUFFER_BIT}x&&(A|=F.DEPTH_BUFFER_BIT),y&&(A|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ye.dispose(),nt.dispose(),Fe.dispose(),T.dispose(),G.dispose(),ce.dispose(),Je.dispose(),O.dispose(),Ne.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ei),re.removeEventListener("sessionend",Zi),Ft.stop()};function de(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const u=Ze.autoReset,x=Ae.enabled,y=Ae.autoUpdate,A=Ae.needsUpdate,C=Ae.type;te(),Ze.autoReset=u,Ae.enabled=x,Ae.autoUpdate=y,Ae.needsUpdate=A,Ae.type=C}function Te(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function $e(u){const x=u.target;x.removeEventListener("dispose",$e),pt(x)}function pt(u){Rt(u),Fe.remove(u)}function Rt(u){const x=Fe.get(u).programs;x!==void 0&&(x.forEach(function(y){Ne.releaseProgram(y)}),u.isShaderMaterial&&Ne.releaseShaderCache(u))}this.renderBufferDirect=function(u,x,y,A,C,N){x===null&&(x=tt);const B=C.isMesh&&C.matrixWorld.determinant()<0,ne=$i(u,x,y,A,C);Oe.setMaterial(A,B);let q=y.index,Q=1;if(A.wireframe===!0){if(q=me.getWireframeAttribute(y),q===void 0)return;Q=2}const J=y.drawRange,z=y.attributes.position;let ie=J.start*Q,ee=(J.start+J.count)*Q;N!==null&&(ie=Math.max(ie,N.start*Q),ee=Math.min(ee,(N.start+N.count)*Q)),q!==null?(ie=Math.max(ie,0),ee=Math.min(ee,q.count)):z!=null&&(ie=Math.max(ie,0),ee=Math.min(ee,z.count));const ae=ee-ie;if(ae<0||ae===1/0)return;Je.setup(C,A,ne,y,q);let ue,le=Me;if(q!==null&&(ue=Y.get(q),le=Ye,le.setIndex(ue)),C.isMesh)A.wireframe===!0?(Oe.setLineWidth(A.wireframeLinewidth*lt()),le.setMode(F.LINES)):le.setMode(F.TRIANGLES);else if(C.isLine){let oe=A.linewidth;oe===void 0&&(oe=1),Oe.setLineWidth(oe*lt()),C.isLineSegments?le.setMode(F.LINES):C.isLineLoop?le.setMode(F.LINE_LOOP):le.setMode(F.LINE_STRIP)}else C.isPoints?le.setMode(F.POINTS):C.isSprite&&le.setMode(F.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)le.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))le.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const oe=C._multiDrawStarts,Ve=C._multiDrawCounts,we=C._multiDrawCount,it=q?Y.get(q).bytesPerElement:1,Qe=Fe.get(A).currentProgram.getUniforms();for(let Ue=0;Ue<we;Ue++)Qe.setValue(F,"_gl_DrawID",Ue),le.render(oe[Ue]/it,Ve[Ue])}else if(C.isInstancedMesh)le.renderInstances(ie,ae,C.count);else if(y.isInstancedBufferGeometry){const oe=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,Ve=Math.min(y.instanceCount,oe);le.renderInstances(ie,ae,Ve)}else le.render(ie,ae)};function ut(u,x,y){u.transparent===!0&&u.side===on&&u.forceSinglePass===!1?(u.side=dn,u.needsUpdate=!0,Yn(u,x,y),u.side=Xi,u.needsUpdate=!0,Yn(u,x,y),u.side=on):Yn(u,x,y)}this.compile=function(u,x,y=null){y===null&&(y=u),p=nt.get(y),p.init(x),E.push(p),y.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),u!==y&&u.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),p.setupLights();const A=new Set;return u.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const N=C.material;if(N)if(Array.isArray(N))for(let B=0;B<N.length;B++){const ne=N[B];ut(ne,y,C),A.add(ne)}else ut(N,y,C),A.add(N)}),E.pop(),p=null,A},this.compileAsync=function(u,x,y=null){const A=this.compile(u,x,y);return new Promise(C=>{function N(){if(A.forEach(function(B){Fe.get(B).currentProgram.isReady()&&A.delete(B)}),A.size===0){C(u);return}setTimeout(N,10)}Xe.get("KHR_parallel_shader_compile")!==null?N():setTimeout(N,10)})};let Zt=null;function Gt(u){Zt&&Zt(u)}function Ei(){Ft.stop()}function Zi(){Ft.start()}const Ft=new Mf;Ft.setAnimationLoop(Gt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(u){Zt=u,re.setAnimationLoop(u),u===null?Ft.stop():Ft.start()},re.addEventListener("sessionstart",Ei),re.addEventListener("sessionend",Zi),this.render=function(u,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(x),x=re.getCamera()),u.isScene===!0&&u.onBeforeRender(S,u,x,L),p=nt.get(u,E.length),p.init(x),E.push(p),ge.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),$.setFromProjectionMatrix(ge),fe=this.localClippingEnabled,he=ve.init(this.clippingPlanes,fe),m=ye.get(u,b.length),m.init(),b.push(m),re.enabled===!0&&re.isPresenting===!0){const N=S.xr.getDepthSensingMesh();N!==null&&Ot(N,x,-1/0,S.sortObjects)}Ot(u,x,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(_e,xe),qe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,qe&&De.addToRenderList(m,u),this.info.render.frame++,he===!0&&ve.beginShadows();const y=p.state.shadowsArray;Ae.render(y,u,x),he===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const A=m.opaque,C=m.transmissive;if(p.setupLights(),x.isArrayCamera){const N=x.cameras;if(C.length>0)for(let B=0,ne=N.length;B<ne;B++){const q=N[B];ei(A,C,u,q)}qe&&De.render(u);for(let B=0,ne=N.length;B<ne;B++){const q=N[B];zn(m,u,q,q.viewport)}}else C.length>0&&ei(A,C,u,x),qe&&De.render(u),zn(m,u,x);L!==null&&(D.updateMultisampleRenderTarget(L),D.updateRenderTargetMipmap(L)),u.isScene===!0&&u.onAfterRender(S,u,x),Je.resetDefaultState(),M=-1,w=null,E.pop(),E.length>0?(p=E[E.length-1],he===!0&&ve.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ot(u,x,y,A){if(u.visible===!1)return;if(u.layers.test(x.layers)){if(u.isGroup)y=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(x);else if(u.isLight)p.pushLight(u),u.castShadow&&p.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||$.intersectsSprite(u)){A&&Pe.setFromMatrixPosition(u.matrixWorld).applyMatrix4(ge);const B=ce.update(u),ne=u.material;ne.visible&&m.push(u,B,ne,y,Pe.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||$.intersectsObject(u))){const B=ce.update(u),ne=u.material;if(A&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),Pe.copy(u.boundingSphere.center)):(B.boundingSphere===null&&B.computeBoundingSphere(),Pe.copy(B.boundingSphere.center)),Pe.applyMatrix4(u.matrixWorld).applyMatrix4(ge)),Array.isArray(ne)){const q=B.groups;for(let Q=0,J=q.length;Q<J;Q++){const z=q[Q],ie=ne[z.materialIndex];ie&&ie.visible&&m.push(u,B,ie,y,Pe.z,z)}}else ne.visible&&m.push(u,B,ne,y,Pe.z,null)}}const N=u.children;for(let B=0,ne=N.length;B<ne;B++)Ot(N[B],x,y,A)}function zn(u,x,y,A){const C=u.opaque,N=u.transmissive,B=u.transparent;p.setupLightsView(y),he===!0&&ve.setGlobalState(S.clippingPlanes,y),A&&Oe.viewport(U.copy(A)),C.length>0&&ft(C,x,y),N.length>0&&ft(N,x,y),B.length>0&&ft(B,x,y),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function ei(u,x,y,A){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[A.id]===void 0&&(p.state.transmissionRenderTarget[A.id]=new qi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?di:Si,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const N=p.state.transmissionRenderTarget[A.id],B=A.viewport||U;N.setSize(B.z,B.w);const ne=S.getRenderTarget();S.setRenderTarget(N),S.getClearColor(Z),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),qe&&De.render(y);const q=S.toneMapping;S.toneMapping=_i;const Q=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),p.setupLightsView(A),he===!0&&ve.setGlobalState(S.clippingPlanes,A),ft(u,y,A),D.updateMultisampleRenderTarget(N),D.updateRenderTargetMipmap(N),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let z=0,ie=x.length;z<ie;z++){const ee=x[z],ae=ee.object,ue=ee.geometry,le=ee.material,oe=ee.group;if(le.side===on&&ae.layers.test(A.layers)){const Ve=le.side;le.side=dn,le.needsUpdate=!0,Ti(ae,y,A,ue,le,oe),le.side=Ve,le.needsUpdate=!0,J=!0}}J===!0&&(D.updateMultisampleRenderTarget(N),D.updateRenderTargetMipmap(N))}S.setRenderTarget(ne),S.setClearColor(Z,K),Q!==void 0&&(A.viewport=Q),S.toneMapping=q}function ft(u,x,y){const A=x.isScene===!0?x.overrideMaterial:null;for(let C=0,N=u.length;C<N;C++){const B=u[C],ne=B.object,q=B.geometry,Q=A===null?B.material:A,J=B.group;ne.layers.test(y.layers)&&Ti(ne,x,y,q,Q,J)}}function Ti(u,x,y,A,C,N){u.onBeforeRender(S,x,y,A,C,N),u.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),C.onBeforeRender(S,x,y,A,u,N),C.transparent===!0&&C.side===on&&C.forceSinglePass===!1?(C.side=dn,C.needsUpdate=!0,S.renderBufferDirect(y,x,A,C,u,N),C.side=Xi,C.needsUpdate=!0,S.renderBufferDirect(y,x,A,C,u,N),C.side=on):S.renderBufferDirect(y,x,A,C,u,N),u.onAfterRender(S,x,y,A,C,N)}function Yn(u,x,y){x.isScene!==!0&&(x=tt);const A=Fe.get(u),C=p.state.lights,N=p.state.shadowsArray,B=C.state.version,ne=Ne.getParameters(u,C.state,N,x,y),q=Ne.getProgramCacheKey(ne);let Q=A.programs;A.environment=u.isMeshStandardMaterial?x.environment:null,A.fog=x.fog,A.envMap=(u.isMeshStandardMaterial?G:T).get(u.envMap||A.environment),A.envMapRotation=A.environment!==null&&u.envMap===null?x.environmentRotation:u.envMapRotation,Q===void 0&&(u.addEventListener("dispose",$e),Q=new Map,A.programs=Q);let J=Q.get(q);if(J!==void 0){if(A.currentProgram===J&&A.lightsStateVersion===B)return mn(u,ne),J}else ne.uniforms=Ne.getUniforms(u),u.onBeforeCompile(ne,S),J=Ne.acquireProgram(ne,q),Q.set(q,J),A.uniforms=ne.uniforms;const z=A.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(z.clippingPlanes=ve.uniform),mn(u,ne),A.needsLights=Pt(u),A.lightsStateVersion=B,A.needsLights&&(z.ambientLightColor.value=C.state.ambient,z.lightProbe.value=C.state.probe,z.directionalLights.value=C.state.directional,z.directionalLightShadows.value=C.state.directionalShadow,z.spotLights.value=C.state.spot,z.spotLightShadows.value=C.state.spotShadow,z.rectAreaLights.value=C.state.rectArea,z.ltc_1.value=C.state.rectAreaLTC1,z.ltc_2.value=C.state.rectAreaLTC2,z.pointLights.value=C.state.point,z.pointLightShadows.value=C.state.pointShadow,z.hemisphereLights.value=C.state.hemi,z.directionalShadowMap.value=C.state.directionalShadowMap,z.directionalShadowMatrix.value=C.state.directionalShadowMatrix,z.spotShadowMap.value=C.state.spotShadowMap,z.spotLightMatrix.value=C.state.spotLightMatrix,z.spotLightMap.value=C.state.spotLightMap,z.pointShadowMap.value=C.state.pointShadowMap,z.pointShadowMatrix.value=C.state.pointShadowMatrix),A.currentProgram=J,A.uniformsList=null,J}function Cn(u){if(u.uniformsList===null){const x=u.currentProgram.getUniforms();u.uniformsList=To.seqWithValue(x.seq,u.uniforms)}return u.uniformsList}function mn(u,x){const y=Fe.get(u);y.outputColorSpace=x.outputColorSpace,y.batching=x.batching,y.batchingColor=x.batchingColor,y.instancing=x.instancing,y.instancingColor=x.instancingColor,y.instancingMorph=x.instancingMorph,y.skinning=x.skinning,y.morphTargets=x.morphTargets,y.morphNormals=x.morphNormals,y.morphColors=x.morphColors,y.morphTargetsCount=x.morphTargetsCount,y.numClippingPlanes=x.numClippingPlanes,y.numIntersection=x.numClipIntersection,y.vertexAlphas=x.vertexAlphas,y.vertexTangents=x.vertexTangents,y.toneMapping=x.toneMapping}function $i(u,x,y,A,C){x.isScene!==!0&&(x=tt),D.resetTextureUnits();const N=x.fog,B=A.isMeshStandardMaterial?x.environment:null,ne=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:yi,q=(A.isMeshStandardMaterial?G:T).get(A.envMap||B),Q=A.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,J=!!y.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),z=!!y.morphAttributes.position,ie=!!y.morphAttributes.normal,ee=!!y.morphAttributes.color;let ae=_i;A.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ae=S.toneMapping);const ue=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,le=ue!==void 0?ue.length:0,oe=Fe.get(A),Ve=p.state.lights;if(he===!0&&(fe===!0||u!==w)){const Ke=u===w&&A.id===M;ve.setState(A,u,Ke)}let we=!1;A.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==Ve.state.version||oe.outputColorSpace!==ne||C.isBatchedMesh&&oe.batching===!1||!C.isBatchedMesh&&oe.batching===!0||C.isBatchedMesh&&oe.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&oe.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&oe.instancing===!1||!C.isInstancedMesh&&oe.instancing===!0||C.isSkinnedMesh&&oe.skinning===!1||!C.isSkinnedMesh&&oe.skinning===!0||C.isInstancedMesh&&oe.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&oe.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&oe.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&oe.instancingMorph===!1&&C.morphTexture!==null||oe.envMap!==q||A.fog===!0&&oe.fog!==N||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==ve.numPlanes||oe.numIntersection!==ve.numIntersection)||oe.vertexAlphas!==Q||oe.vertexTangents!==J||oe.morphTargets!==z||oe.morphNormals!==ie||oe.morphColors!==ee||oe.toneMapping!==ae||oe.morphTargetsCount!==le)&&(we=!0):(we=!0,oe.__version=A.version);let it=oe.currentProgram;we===!0&&(it=Yn(A,x,C));let Qe=!1,Ue=!1,ze=!1;const Ge=it.getUniforms(),st=oe.uniforms;if(Oe.useProgram(it.program)&&(Qe=!0,Ue=!0,ze=!0),A.id!==M&&(M=A.id,Ue=!0),Qe||w!==u){Oe.buffers.depth.getReversed()?(pe.copy(u.projectionMatrix),pm(pe),mm(pe),Ge.setValue(F,"projectionMatrix",pe)):Ge.setValue(F,"projectionMatrix",u.projectionMatrix),Ge.setValue(F,"viewMatrix",u.matrixWorldInverse);const vt=Ge.map.cameraPosition;vt!==void 0&&vt.setValue(F,Le.setFromMatrixPosition(u.matrixWorld)),je.logarithmicDepthBuffer&&Ge.setValue(F,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&Ge.setValue(F,"isOrthographic",u.isOrthographicCamera===!0),w!==u&&(w=u,Ue=!0,ze=!0)}if(C.isSkinnedMesh){Ge.setOptional(F,C,"bindMatrix"),Ge.setOptional(F,C,"bindMatrixInverse");const Ke=C.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ge.setValue(F,"boneTexture",Ke.boneTexture,D))}C.isBatchedMesh&&(Ge.setOptional(F,C,"batchingTexture"),Ge.setValue(F,"batchingTexture",C._matricesTexture,D),Ge.setOptional(F,C,"batchingIdTexture"),Ge.setValue(F,"batchingIdTexture",C._indirectTexture,D),Ge.setOptional(F,C,"batchingColorTexture"),C._colorsTexture!==null&&Ge.setValue(F,"batchingColorTexture",C._colorsTexture,D));const ot=y.morphAttributes;if((ot.position!==void 0||ot.normal!==void 0||ot.color!==void 0)&&Ie.update(C,y,it),(Ue||oe.receiveShadow!==C.receiveShadow)&&(oe.receiveShadow=C.receiveShadow,Ge.setValue(F,"receiveShadow",C.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(st.envMap.value=q,st.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1),A.isMeshStandardMaterial&&A.envMap===null&&x.environment!==null&&(st.envMapIntensity.value=x.environmentIntensity),Ue&&(Ge.setValue(F,"toneMappingExposure",S.toneMappingExposure),oe.needsLights&&Mt(st,ze),N&&A.fog===!0&&Se.refreshFogUniforms(st,N),Se.refreshMaterialUniforms(st,A,V,j,p.state.transmissionRenderTarget[u.id]),To.upload(F,Cn(oe),st,D)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(To.upload(F,Cn(oe),st,D),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&Ge.setValue(F,"center",C.center),Ge.setValue(F,"modelViewMatrix",C.modelViewMatrix),Ge.setValue(F,"normalMatrix",C.normalMatrix),Ge.setValue(F,"modelMatrix",C.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const Ke=A.uniformsGroups;for(let vt=0,zt=Ke.length;vt<zt;vt++){const _n=Ke[vt];O.update(_n,it),O.bind(_n,it)}}return it}function Mt(u,x){u.ambientLightColor.needsUpdate=x,u.lightProbe.needsUpdate=x,u.directionalLights.needsUpdate=x,u.directionalLightShadows.needsUpdate=x,u.pointLights.needsUpdate=x,u.pointLightShadows.needsUpdate=x,u.spotLights.needsUpdate=x,u.spotLightShadows.needsUpdate=x,u.rectAreaLights.needsUpdate=x,u.hemisphereLights.needsUpdate=x}function Pt(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(u,x,y){Fe.get(u.texture).__webglTexture=x,Fe.get(u.depthTexture).__webglTexture=y;const A=Fe.get(u);A.__hasExternalTextures=!0,A.__autoAllocateDepthBuffer=y===void 0,A.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(u,x){const y=Fe.get(u);y.__webglFramebuffer=x,y.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(u,x=0,y=0){L=u,I=x,R=y;let A=!0,C=null,N=!1,B=!1;if(u){const q=Fe.get(u);if(q.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(F.FRAMEBUFFER,null),A=!1;else if(q.__webglFramebuffer===void 0)D.setupRenderTarget(u);else if(q.__hasExternalTextures)D.rebindTextures(u,Fe.get(u.texture).__webglTexture,Fe.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const z=u.depthTexture;if(q.__boundDepthTexture!==z){if(z!==null&&Fe.has(z)&&(u.width!==z.image.width||u.height!==z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(u)}}const Q=u.texture;(Q.isData3DTexture||Q.isDataArrayTexture||Q.isCompressedArrayTexture)&&(B=!0);const J=Fe.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(J[x])?C=J[x][y]:C=J[x],N=!0):u.samples>0&&D.useMultisampledRTT(u)===!1?C=Fe.get(u).__webglMultisampledFramebuffer:Array.isArray(J)?C=J[y]:C=J,U.copy(u.viewport),H.copy(u.scissor),k=u.scissorTest}else U.copy(se).multiplyScalar(V).floor(),H.copy(Ee).multiplyScalar(V).floor(),k=be;if(Oe.bindFramebuffer(F.FRAMEBUFFER,C)&&A&&Oe.drawBuffers(u,C),Oe.viewport(U),Oe.scissor(H),Oe.setScissorTest(k),N){const q=Fe.get(u.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,q.__webglTexture,y)}else if(B){const q=Fe.get(u.texture),Q=x||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.__webglTexture,y||0,Q)}M=-1},this.readRenderTargetPixels=function(u,x,y,A,C,N,B){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=Fe.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&B!==void 0&&(ne=ne[B]),ne){Oe.bindFramebuffer(F.FRAMEBUFFER,ne);try{const q=u.texture,Q=q.format,J=q.type;if(!je.textureFormatReadable(Q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=u.width-A&&y>=0&&y<=u.height-C&&F.readPixels(x,y,A,C,He.convert(Q),He.convert(J),N)}finally{const q=L!==null?Fe.get(L).__webglFramebuffer:null;Oe.bindFramebuffer(F.FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(u,x,y,A,C,N,B){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=Fe.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&B!==void 0&&(ne=ne[B]),ne){const q=u.texture,Q=q.format,J=q.type;if(!je.textureFormatReadable(Q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=u.width-A&&y>=0&&y<=u.height-C){Oe.bindFramebuffer(F.FRAMEBUFFER,ne);const z=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,z),F.bufferData(F.PIXEL_PACK_BUFFER,N.byteLength,F.STREAM_READ),F.readPixels(x,y,A,C,He.convert(Q),He.convert(J),0);const ie=L!==null?Fe.get(L).__webglFramebuffer:null;Oe.bindFramebuffer(F.FRAMEBUFFER,ie);const ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await dm(F,ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,z),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,N),F.deleteBuffer(z),F.deleteSync(ee),N}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(u,x=null,y=0){u.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,u=arguments[1]);const A=Math.pow(2,-y),C=Math.floor(u.image.width*A),N=Math.floor(u.image.height*A),B=x!==null?x.x:0,ne=x!==null?x.y:0;D.setTexture2D(u,0),F.copyTexSubImage2D(F.TEXTURE_2D,y,0,0,B,ne,C,N),Oe.unbindTexture()},this.copyTextureToTexture=function(u,x,y=null,A=null,C=0){u.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),A=arguments[0]||null,u=arguments[1],x=arguments[2],C=arguments[3]||0,y=null);let N,B,ne,q,Q,J,z,ie,ee;const ae=u.isCompressedTexture?u.mipmaps[C]:u.image;y!==null?(N=y.max.x-y.min.x,B=y.max.y-y.min.y,ne=y.isBox3?y.max.z-y.min.z:1,q=y.min.x,Q=y.min.y,J=y.isBox3?y.min.z:0):(N=ae.width,B=ae.height,ne=ae.depth||1,q=0,Q=0,J=0),A!==null?(z=A.x,ie=A.y,ee=A.z):(z=0,ie=0,ee=0);const ue=He.convert(x.format),le=He.convert(x.type);let oe;x.isData3DTexture?(D.setTexture3D(x,0),oe=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(D.setTexture2DArray(x,0),oe=F.TEXTURE_2D_ARRAY):(D.setTexture2D(x,0),oe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);const Ve=F.getParameter(F.UNPACK_ROW_LENGTH),we=F.getParameter(F.UNPACK_IMAGE_HEIGHT),it=F.getParameter(F.UNPACK_SKIP_PIXELS),Qe=F.getParameter(F.UNPACK_SKIP_ROWS),Ue=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,q),F.pixelStorei(F.UNPACK_SKIP_ROWS,Q),F.pixelStorei(F.UNPACK_SKIP_IMAGES,J);const ze=u.isDataArrayTexture||u.isData3DTexture,Ge=x.isDataArrayTexture||x.isData3DTexture;if(u.isRenderTargetTexture||u.isDepthTexture){const st=Fe.get(u),ot=Fe.get(x),Ke=Fe.get(st.__renderTarget),vt=Fe.get(ot.__renderTarget);Oe.bindFramebuffer(F.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Oe.bindFramebuffer(F.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let zt=0;zt<ne;zt++)ze&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.get(u).__webglTexture,C,J+zt),u.isDepthTexture?(Ge&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.get(x).__webglTexture,C,ee+zt),F.blitFramebuffer(q,Q,N,B,z,ie,N,B,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ge?F.copyTexSubImage3D(oe,C,z,ie,ee+zt,q,Q,N,B):F.copyTexSubImage2D(oe,C,z,ie,ee+zt,q,Q,N,B);Oe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ge?u.isDataTexture||u.isData3DTexture?F.texSubImage3D(oe,C,z,ie,ee,N,B,ne,ue,le,ae.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(oe,C,z,ie,ee,N,B,ne,ue,ae.data):F.texSubImage3D(oe,C,z,ie,ee,N,B,ne,ue,le,ae):u.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,C,z,ie,N,B,ue,le,ae.data):u.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,C,z,ie,ae.width,ae.height,ue,ae.data):F.texSubImage2D(F.TEXTURE_2D,C,z,ie,N,B,ue,le,ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ve),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,we),F.pixelStorei(F.UNPACK_SKIP_PIXELS,it),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ue),C===0&&x.generateMipmaps&&F.generateMipmap(oe),Oe.unbindTexture()},this.copyTextureToTexture3D=function(u,x,y=null,A=null,C=0){return u.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),y=arguments[0]||null,A=arguments[1]||null,u=arguments[2],x=arguments[3],C=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(u,x,y,A,C)},this.initRenderTarget=function(u){Fe.get(u).__webglFramebuffer===void 0&&D.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?D.setTextureCube(u,0):u.isData3DTexture?D.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?D.setTexture2DArray(u,0):D.setTexture2D(u,0),Oe.unbindTexture()},this.resetState=function(){I=0,R=0,L=null,Oe.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class _c extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cf extends Yt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=nn,h=nn,f,d){super(null,o,a,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn extends Xt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Rx extends Yt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Oo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Cx{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const _=c[f],v=c[f+1];if(_.global&&(_.lastIndex=0),_.test(h))return v}return null}}}const Px=new Cx;class Os{constructor(e){this.manager=e!==void 0?e:Px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class Dx extends Error{constructor(e,t){super(e),this.response=t}}class Lx extends Os{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Oo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:r});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=oi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),_=d?parseInt(d):0,v=_!==0;let g=0;const m=new ReadableStream({start(p){b();function b(){f.read().then(({done:E,value:S})=>{if(E)p.close();else{g+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:_});for(let I=0,R=h.length;I<R;I++){const L=h[I];L.onProgress&&L.onProgress(P)}p.enqueue(S),b()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Dx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,_=new TextDecoder(d);return c.arrayBuffer().then(v=>_.decode(v))}}}).then(c=>{Oo.add(e,c);const h=oi[e];delete oi[e];for(let f=0,d=h.length;f<d;f++){const _=h[f];_.onLoad&&_.onLoad(c)}}).catch(c=>{const h=oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete oi[e];for(let f=0,d=h.length;f<d;f++){const _=h[f];_.onError&&_.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ix extends Os{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Oo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Is("img");function l(){h(),Oo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){h(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ux extends Os{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Cf,a=new Lx(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:hi,o.wrapT=c.wrapT!==void 0?c.wrapT:hi,o.magFilter=c.magFilter!==void 0?c.magFilter:Ht,o.minFilter=c.minFilter!==void 0?c.minFilter:Ht,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=fi),c.mipmapCount===1&&(o.minFilter=Ht),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class ds extends Os{constructor(e){super(e)}load(e,t,n,r){const s=new Yt,o=new Ix(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class lo extends Mi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Un=Uint8Array,Br=Uint16Array,Nx=Int32Array,Pf=new Un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Df=new Un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Fx=new Un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Lf=function(i,e){for(var t=new Br(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Nx(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},If=Lf(Pf,2),Uf=If.b,Ox=If.r;Uf[28]=258,Ox[258]=28;var zx=Lf(Df,0),Bx=zx.b,zl=new Br(32768);for(var xt=0;xt<32768;++xt){var Ii=(xt&43690)>>1|(xt&21845)<<1;Ii=(Ii&52428)>>2|(Ii&13107)<<2,Ii=(Ii&61680)>>4|(Ii&3855)<<4,zl[xt]=((Ii&65280)>>8|(Ii&255)<<8)>>1}var Ms=(function(i,e,t){for(var n=i.length,r=0,s=new Br(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new Br(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Br(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],h=e-i[r],f=o[i[r]-1]++<<h,d=f|(1<<h)-1;f<=d;++f)a[zl[f]>>l]=c}else for(a=new Br(n),r=0;r<n;++r)i[r]&&(a[r]=zl[o[i[r]-1]++]>>15-i[r]);return a}),zs=new Un(288);for(var xt=0;xt<144;++xt)zs[xt]=8;for(var xt=144;xt<256;++xt)zs[xt]=9;for(var xt=256;xt<280;++xt)zs[xt]=7;for(var xt=280;xt<288;++xt)zs[xt]=8;var Nf=new Un(32);for(var xt=0;xt<32;++xt)Nf[xt]=5;var kx=Ms(zs,9,1),Hx=Ms(Nf,5,1),Pa=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Vn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Da=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Vx=function(i){return(i+7)/8|0},Gx=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Un(i.subarray(e,t))},Wx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Wn=function(i,e,t){var n=new Error(e||Wx[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Wn),!t)throw n;return n},Xx=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new Un(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Un(r*3));var c=function(tt){var qe=t.length;if(tt>qe){var lt=new Un(Math.max(qe*2,tt));lt.set(t),t=lt}},h=e.f||0,f=e.p||0,d=e.b||0,_=e.l,v=e.d,g=e.m,m=e.n,p=r*8;do{if(!_){h=Vn(i,f,1);var b=Vn(i,f+1,3);if(f+=3,b)if(b==1)_=kx,v=Hx,g=9,m=5;else if(b==2){var I=Vn(i,f,31)+257,R=Vn(i,f+10,15)+4,L=I+Vn(i,f+5,31)+1;f+=14;for(var M=new Un(L),w=new Un(19),U=0;U<R;++U)w[Fx[U]]=Vn(i,f+U*3,7);f+=R*3;for(var H=Pa(w),k=(1<<H)-1,Z=Ms(w,H,1),U=0;U<L;){var K=Z[Vn(i,f,k)];f+=K&15;var E=K>>4;if(E<16)M[U++]=E;else{var X=0,j=0;for(E==16?(j=3+Vn(i,f,3),f+=2,X=M[U-1]):E==17?(j=3+Vn(i,f,7),f+=3):E==18&&(j=11+Vn(i,f,127),f+=7);j--;)M[U++]=X}}var V=M.subarray(0,I),_e=M.subarray(I);g=Pa(V),m=Pa(_e),_=Ms(V,g,1),v=Ms(_e,m,1)}else Wn(1);else{var E=Vx(f)+4,S=i[E-4]|i[E-3]<<8,P=E+S;if(P>r){l&&Wn(0);break}a&&c(d+S),t.set(i.subarray(E,P),d),e.b=d+=S,e.p=f=P*8,e.f=h;continue}if(f>p){l&&Wn(0);break}}a&&c(d+131072);for(var xe=(1<<g)-1,se=(1<<m)-1,Ee=f;;Ee=f){var X=_[Da(i,f)&xe],be=X>>4;if(f+=X&15,f>p){l&&Wn(0);break}if(X||Wn(2),be<256)t[d++]=be;else if(be==256){Ee=f,_=null;break}else{var $=be-254;if(be>264){var U=be-257,he=Pf[U];$=Vn(i,f,(1<<he)-1)+Uf[U],f+=he}var fe=v[Da(i,f)&se],pe=fe>>4;fe||Wn(3),f+=fe&15;var _e=Bx[pe];if(pe>3){var he=Df[pe];_e+=Da(i,f)&(1<<he)-1,f+=he}if(f>p){l&&Wn(0);break}a&&c(d+131072);var ge=d+$;if(d<_e){var Le=s-_e,Pe=Math.min(_e,ge);for(Le+d<0&&Wn(3);d<Pe;++d)t[d]=n[Le+d]}for(;d<ge;++d)t[d]=t[d-_e]}}e.l=_,e.p=Ee,e.b=d,e.f=h,_&&(h=1,e.m=g,e.d=v,e.n=m)}while(!h);return d!=t.length&&o?Gx(t,0,d):t.subarray(0,d)},qx=new Un(0),Yx=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Wn(6,"invalid zlib data"),(i[1]>>5&1)==1&&Wn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function co(i,e){return Xx(i.subarray(Yx(i),-4),{i:2},e,e)}var Zx=typeof TextDecoder<"u"&&new TextDecoder,$x=0;try{Zx.decode(qx,{stream:!0}),$x=1}catch{}class Kx extends Ux{constructor(e){super(e),this.type=di}parse(e){const M=Math.pow(2.7182818,2.2);function w(u,x){let y=0;for(let C=0;C<65536;++C)(C==0||u[C>>3]&1<<(C&7))&&(x[y++]=C);const A=y-1;for(;y<65536;)x[y++]=0;return A}function U(u){for(let x=0;x<16384;x++)u[x]={},u[x].len=0,u[x].lit=0,u[x].p=null}const H={l:0,c:0,lc:0};function k(u,x,y,A,C){for(;y<u;)x=x<<8|Me(A,C),y+=8;y-=u,H.l=x>>y&(1<<u)-1,H.c=x,H.lc=y}const Z=new Array(59);function K(u){for(let y=0;y<=58;++y)Z[y]=0;for(let y=0;y<65537;++y)Z[u[y]]+=1;let x=0;for(let y=58;y>0;--y){const A=x+Z[y]>>1;Z[y]=x,x=A}for(let y=0;y<65537;++y){const A=u[y];A>0&&(u[y]=A|Z[A]++<<6)}}function X(u,x,y,A,C,N){const B=x;let ne=0,q=0;for(;A<=C;A++){if(B.value-x.value>y)return!1;k(6,ne,q,u,B);const Q=H.l;if(ne=H.c,q=H.lc,N[A]=Q,Q==63){if(B.value-x.value>y)throw new Error("Something wrong with hufUnpackEncTable");k(8,ne,q,u,B);let J=H.l+6;if(ne=H.c,q=H.lc,A+J>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)N[A++]=0;A--}else if(Q>=59){let J=Q-59+2;if(A+J>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)N[A++]=0;A--}}K(N)}function j(u){return u&63}function V(u){return u>>6}function _e(u,x,y,A){for(;x<=y;x++){const C=V(u[x]),N=j(u[x]);if(C>>N)throw new Error("Invalid table entry");if(N>14){const B=A[C>>N-14];if(B.len)throw new Error("Invalid table entry");if(B.lit++,B.p){const ne=B.p;B.p=new Array(B.lit);for(let q=0;q<B.lit-1;++q)B.p[q]=ne[q]}else B.p=new Array(1);B.p[B.lit-1]=x}else if(N){let B=0;for(let ne=1<<14-N;ne>0;ne--){const q=A[(C<<14-N)+B];if(q.len||q.p)throw new Error("Invalid table entry");q.len=N,q.lit=x,B++}}}return!0}const xe={c:0,lc:0};function se(u,x,y,A){u=u<<8|Me(y,A),x+=8,xe.c=u,xe.lc=x}const Ee={c:0,lc:0};function be(u,x,y,A,C,N,B,ne,q){if(u==x){A<8&&(se(y,A,C,N),y=xe.c,A=xe.lc),A-=8;let Q=y>>A;if(Q=new Uint8Array([Q])[0],ne.value+Q>q)return!1;const J=B[ne.value-1];for(;Q-- >0;)B[ne.value++]=J}else if(ne.value<q)B[ne.value++]=u;else return!1;Ee.c=y,Ee.lc=A}function $(u){return u&65535}function he(u){const x=$(u);return x>32767?x-65536:x}const fe={a:0,b:0};function pe(u,x){const y=he(u),C=he(x),N=y+(C&1)+(C>>1),B=N,ne=N-C;fe.a=B,fe.b=ne}function ge(u,x){const y=$(u),A=$(x),C=y-(A>>1)&65535,N=A+C-32768&65535;fe.a=N,fe.b=C}function Le(u,x,y,A,C,N,B){const ne=B<16384,q=y>C?C:y;let Q=1,J,z;for(;Q<=q;)Q<<=1;for(Q>>=1,J=Q,Q>>=1;Q>=1;){z=0;const ie=z+N*(C-J),ee=N*Q,ae=N*J,ue=A*Q,le=A*J;let oe,Ve,we,it;for(;z<=ie;z+=ae){let Qe=z;const Ue=z+A*(y-J);for(;Qe<=Ue;Qe+=le){const ze=Qe+ue,Ge=Qe+ee,st=Ge+ue;ne?(pe(u[Qe+x],u[Ge+x]),oe=fe.a,we=fe.b,pe(u[ze+x],u[st+x]),Ve=fe.a,it=fe.b,pe(oe,Ve),u[Qe+x]=fe.a,u[ze+x]=fe.b,pe(we,it),u[Ge+x]=fe.a,u[st+x]=fe.b):(ge(u[Qe+x],u[Ge+x]),oe=fe.a,we=fe.b,ge(u[ze+x],u[st+x]),Ve=fe.a,it=fe.b,ge(oe,Ve),u[Qe+x]=fe.a,u[ze+x]=fe.b,ge(we,it),u[Ge+x]=fe.a,u[st+x]=fe.b)}if(y&Q){const ze=Qe+ee;ne?pe(u[Qe+x],u[ze+x]):ge(u[Qe+x],u[ze+x]),oe=fe.a,u[ze+x]=fe.b,u[Qe+x]=oe}}if(C&Q){let Qe=z;const Ue=z+A*(y-J);for(;Qe<=Ue;Qe+=le){const ze=Qe+ue;ne?pe(u[Qe+x],u[ze+x]):ge(u[Qe+x],u[ze+x]),oe=fe.a,u[ze+x]=fe.b,u[Qe+x]=oe}}J=Q,Q>>=1}return z}function Pe(u,x,y,A,C,N,B,ne,q){let Q=0,J=0;const z=B,ie=Math.trunc(A.value+(C+7)/8);for(;A.value<ie;)for(se(Q,J,y,A),Q=xe.c,J=xe.lc;J>=14;){const ae=Q>>J-14&16383,ue=x[ae];if(ue.len)J-=ue.len,be(ue.lit,N,Q,J,y,A,ne,q,z),Q=Ee.c,J=Ee.lc;else{if(!ue.p)throw new Error("hufDecode issues");let le;for(le=0;le<ue.lit;le++){const oe=j(u[ue.p[le]]);for(;J<oe&&A.value<ie;)se(Q,J,y,A),Q=xe.c,J=xe.lc;if(J>=oe&&V(u[ue.p[le]])==(Q>>J-oe&(1<<oe)-1)){J-=oe,be(ue.p[le],N,Q,J,y,A,ne,q,z),Q=Ee.c,J=Ee.lc;break}}if(le==ue.lit)throw new Error("hufDecode issues")}}const ee=8-C&7;for(Q>>=ee,J-=ee;J>0;){const ae=x[Q<<14-J&16383];if(ae.len)J-=ae.len,be(ae.lit,N,Q,J,y,A,ne,q,z),Q=Ee.c,J=Ee.lc;else throw new Error("hufDecode issues")}return!0}function tt(u,x,y,A,C,N){const B={value:0},ne=y.value,q=Ie(x,y),Q=Ie(x,y);y.value+=4;const J=Ie(x,y);if(y.value+=4,q<0||q>=65537||Q<0||Q>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const z=new Array(65537),ie=new Array(16384);U(ie);const ee=A-(y.value-ne);if(X(u,y,ee,q,Q,z),J>8*(A-(y.value-ne)))throw new Error("Something wrong with hufUncompress");_e(z,q,Q,ie),Pe(z,ie,u,y,J,Q,N,C,B)}function qe(u,x,y){for(let A=0;A<y;++A)x[A]=u[x[A]]}function lt(u){for(let x=1;x<u.length;x++){const y=u[x-1]+u[x]-128;u[x]=y}}function F(u,x){let y=0,A=Math.floor((u.length+1)/2),C=0;const N=u.length-1;for(;!(C>N||(x[C++]=u[y++],C>N));)x[C++]=u[A++]}function We(u){let x=u.byteLength;const y=new Array;let A=0;const C=new DataView(u);for(;x>0;){const N=C.getInt8(A++);if(N<0){const B=-N;x-=B+1;for(let ne=0;ne<B;ne++)y.push(C.getUint8(A++))}else{const B=N;x-=2;const ne=C.getUint8(A++);for(let q=0;q<B+1;q++)y.push(ne)}}return y}function Xe(u,x,y,A,C,N){let B=new DataView(N.buffer);const ne=y[u.idx[0]].width,q=y[u.idx[0]].height,Q=3,J=Math.floor(ne/8),z=Math.ceil(ne/8),ie=Math.ceil(q/8),ee=ne-(z-1)*8,ae=q-(ie-1)*8,ue={value:0},le=new Array(Q),oe=new Array(Q),Ve=new Array(Q),we=new Array(Q),it=new Array(Q);for(let Ue=0;Ue<Q;++Ue)it[Ue]=x[u.idx[Ue]],le[Ue]=Ue<1?0:le[Ue-1]+z*ie,oe[Ue]=new Float32Array(64),Ve[Ue]=new Uint16Array(64),we[Ue]=new Uint16Array(z*64);for(let Ue=0;Ue<ie;++Ue){let ze=8;Ue==ie-1&&(ze=ae);let Ge=8;for(let ot=0;ot<z;++ot){ot==z-1&&(Ge=ee);for(let Ke=0;Ke<Q;++Ke)Ve[Ke].fill(0),Ve[Ke][0]=C[le[Ke]++],je(ue,A,Ve[Ke]),Oe(Ve[Ke],oe[Ke]),Ze(oe[Ke]);Fe(oe);for(let Ke=0;Ke<Q;++Ke)D(oe[Ke],we[Ke],ot*64)}let st=0;for(let ot=0;ot<Q;++ot){const Ke=y[u.idx[ot]].type;for(let vt=8*Ue;vt<8*Ue+ze;++vt){st=it[ot][vt];for(let zt=0;zt<J;++zt){const _n=zt*64+(vt&7)*8;B.setUint16(st+0*Ke,we[ot][_n+0],!0),B.setUint16(st+2*Ke,we[ot][_n+1],!0),B.setUint16(st+4*Ke,we[ot][_n+2],!0),B.setUint16(st+6*Ke,we[ot][_n+3],!0),B.setUint16(st+8*Ke,we[ot][_n+4],!0),B.setUint16(st+10*Ke,we[ot][_n+5],!0),B.setUint16(st+12*Ke,we[ot][_n+6],!0),B.setUint16(st+14*Ke,we[ot][_n+7],!0),st+=16*Ke}}if(J!=z)for(let vt=8*Ue;vt<8*Ue+ze;++vt){const zt=it[ot][vt]+8*J*2*Ke,_n=J*64+(vt&7)*8;for(let Bs=0;Bs<Ge;++Bs)B.setUint16(zt+Bs*2*Ke,we[ot][_n+Bs],!0)}}}const Qe=new Uint16Array(ne);B=new DataView(N.buffer);for(let Ue=0;Ue<Q;++Ue){y[u.idx[Ue]].decoded=!0;const ze=y[u.idx[Ue]].type;if(y[Ue].type==2)for(let Ge=0;Ge<q;++Ge){const st=it[Ue][Ge];for(let ot=0;ot<ne;++ot)Qe[ot]=B.getUint16(st+ot*2*ze,!0);for(let ot=0;ot<ne;++ot)B.setFloat32(st+ot*2*ze,te(Qe[ot]),!0)}}}function je(u,x,y){let A,C=1;for(;C<64;)A=x[u.value],A==65280?C=64:A>>8==255?C+=A&255:(y[C]=A,C++),u.value++}function Oe(u,x){x[0]=te(u[0]),x[1]=te(u[1]),x[2]=te(u[5]),x[3]=te(u[6]),x[4]=te(u[14]),x[5]=te(u[15]),x[6]=te(u[27]),x[7]=te(u[28]),x[8]=te(u[2]),x[9]=te(u[4]),x[10]=te(u[7]),x[11]=te(u[13]),x[12]=te(u[16]),x[13]=te(u[26]),x[14]=te(u[29]),x[15]=te(u[42]),x[16]=te(u[3]),x[17]=te(u[8]),x[18]=te(u[12]),x[19]=te(u[17]),x[20]=te(u[25]),x[21]=te(u[30]),x[22]=te(u[41]),x[23]=te(u[43]),x[24]=te(u[9]),x[25]=te(u[11]),x[26]=te(u[18]),x[27]=te(u[24]),x[28]=te(u[31]),x[29]=te(u[40]),x[30]=te(u[44]),x[31]=te(u[53]),x[32]=te(u[10]),x[33]=te(u[19]),x[34]=te(u[23]),x[35]=te(u[32]),x[36]=te(u[39]),x[37]=te(u[45]),x[38]=te(u[52]),x[39]=te(u[54]),x[40]=te(u[20]),x[41]=te(u[22]),x[42]=te(u[33]),x[43]=te(u[38]),x[44]=te(u[46]),x[45]=te(u[51]),x[46]=te(u[55]),x[47]=te(u[60]),x[48]=te(u[21]),x[49]=te(u[34]),x[50]=te(u[37]),x[51]=te(u[47]),x[52]=te(u[50]),x[53]=te(u[56]),x[54]=te(u[59]),x[55]=te(u[61]),x[56]=te(u[35]),x[57]=te(u[36]),x[58]=te(u[48]),x[59]=te(u[49]),x[60]=te(u[57]),x[61]=te(u[58]),x[62]=te(u[62]),x[63]=te(u[63])}function Ze(u){const x=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),A=.5*Math.cos(3.14159/8),C=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),B=.5*Math.cos(3*3.14159/8),ne=.5*Math.cos(7*3.14159/16),q=new Array(4),Q=new Array(4),J=new Array(4),z=new Array(4);for(let ie=0;ie<8;++ie){const ee=ie*8;q[0]=A*u[ee+2],q[1]=B*u[ee+2],q[2]=A*u[ee+6],q[3]=B*u[ee+6],Q[0]=y*u[ee+1]+C*u[ee+3]+N*u[ee+5]+ne*u[ee+7],Q[1]=C*u[ee+1]-ne*u[ee+3]-y*u[ee+5]-N*u[ee+7],Q[2]=N*u[ee+1]-y*u[ee+3]+ne*u[ee+5]+C*u[ee+7],Q[3]=ne*u[ee+1]-N*u[ee+3]+C*u[ee+5]-y*u[ee+7],J[0]=x*(u[ee+0]+u[ee+4]),J[3]=x*(u[ee+0]-u[ee+4]),J[1]=q[0]+q[3],J[2]=q[1]-q[2],z[0]=J[0]+J[1],z[1]=J[3]+J[2],z[2]=J[3]-J[2],z[3]=J[0]-J[1],u[ee+0]=z[0]+Q[0],u[ee+1]=z[1]+Q[1],u[ee+2]=z[2]+Q[2],u[ee+3]=z[3]+Q[3],u[ee+4]=z[3]-Q[3],u[ee+5]=z[2]-Q[2],u[ee+6]=z[1]-Q[1],u[ee+7]=z[0]-Q[0]}for(let ie=0;ie<8;++ie)q[0]=A*u[16+ie],q[1]=B*u[16+ie],q[2]=A*u[48+ie],q[3]=B*u[48+ie],Q[0]=y*u[8+ie]+C*u[24+ie]+N*u[40+ie]+ne*u[56+ie],Q[1]=C*u[8+ie]-ne*u[24+ie]-y*u[40+ie]-N*u[56+ie],Q[2]=N*u[8+ie]-y*u[24+ie]+ne*u[40+ie]+C*u[56+ie],Q[3]=ne*u[8+ie]-N*u[24+ie]+C*u[40+ie]-y*u[56+ie],J[0]=x*(u[ie]+u[32+ie]),J[3]=x*(u[ie]-u[32+ie]),J[1]=q[0]+q[3],J[2]=q[1]-q[2],z[0]=J[0]+J[1],z[1]=J[3]+J[2],z[2]=J[3]-J[2],z[3]=J[0]-J[1],u[0+ie]=z[0]+Q[0],u[8+ie]=z[1]+Q[1],u[16+ie]=z[2]+Q[2],u[24+ie]=z[3]+Q[3],u[32+ie]=z[3]-Q[3],u[40+ie]=z[2]-Q[2],u[48+ie]=z[1]-Q[1],u[56+ie]=z[0]-Q[0]}function Fe(u){for(let x=0;x<64;++x){const y=u[0][x],A=u[1][x],C=u[2][x];u[0][x]=y+1.5747*C,u[1][x]=y-.1873*A-.4682*C,u[2][x]=y+1.8556*A}}function D(u,x,y){for(let A=0;A<64;++A)x[y+A]=su.toHalfFloat(T(u[A]))}function T(u){return u<=1?Math.sign(u)*Math.pow(Math.abs(u),2.2):Math.sign(u)*Math.pow(M,Math.abs(u)-1)}function G(u){return new DataView(u.array.buffer,u.offset.value,u.size)}function Y(u){const x=u.viewer.buffer.slice(u.offset.value,u.offset.value+u.size),y=new Uint8Array(We(x)),A=new Uint8Array(y.length);return lt(y),F(y,A),new DataView(A.buffer)}function me(u){const x=u.array.slice(u.offset.value,u.offset.value+u.size),y=co(x),A=new Uint8Array(y.length);return lt(y),F(y,A),new DataView(A.buffer)}function ce(u){const x=u.viewer,y={value:u.offset.value},A=new Uint16Array(u.columns*u.lines*(u.inputChannels.length*u.type)),C=new Uint8Array(8192);let N=0;const B=new Array(u.inputChannels.length);for(let ae=0,ue=u.inputChannels.length;ae<ue;ae++)B[ae]={},B[ae].start=N,B[ae].end=B[ae].start,B[ae].nx=u.columns,B[ae].ny=u.lines,B[ae].size=u.type,N+=B[ae].nx*B[ae].ny*B[ae].size;const ne=re(x,y),q=re(x,y);if(q>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ne<=q)for(let ae=0;ae<q-ne+1;ae++)C[ae+ne]=Ye(x,y);const Q=new Uint16Array(65536),J=w(C,Q),z=Ie(x,y);tt(u.array,x,y,z,A,N);for(let ae=0;ae<u.inputChannels.length;++ae){const ue=B[ae];for(let le=0;le<B[ae].size;++le)Le(A,ue.start+le,ue.nx,ue.size,ue.ny,ue.nx*ue.size,J)}qe(Q,A,N);let ie=0;const ee=new Uint8Array(A.buffer.byteLength);for(let ae=0;ae<u.lines;ae++)for(let ue=0;ue<u.inputChannels.length;ue++){const le=B[ue],oe=le.nx*le.size,Ve=new Uint8Array(A.buffer,le.end*2,oe*2);ee.set(Ve,ie),ie+=oe*2,le.end+=oe}return new DataView(ee.buffer)}function Ne(u){const x=u.array.slice(u.offset.value,u.offset.value+u.size),y=co(x),A=u.inputChannels.length*u.lines*u.columns*u.totalBytes,C=new ArrayBuffer(A),N=new DataView(C);let B=0,ne=0;const q=new Array(4);for(let Q=0;Q<u.lines;Q++)for(let J=0;J<u.inputChannels.length;J++){let z=0;switch(u.inputChannels[J].pixelType){case 1:q[0]=B,q[1]=q[0]+u.columns,B=q[1]+u.columns;for(let ee=0;ee<u.columns;++ee){const ae=y[q[0]++]<<8|y[q[1]++];z+=ae,N.setUint16(ne,z,!0),ne+=2}break;case 2:q[0]=B,q[1]=q[0]+u.columns,q[2]=q[1]+u.columns,B=q[2]+u.columns;for(let ee=0;ee<u.columns;++ee){const ae=y[q[0]++]<<24|y[q[1]++]<<16|y[q[2]++]<<8;z+=ae,N.setUint32(ne,z,!0),ne+=4}break}}return N}function Se(u){const x=u.viewer,y={value:u.offset.value},A=new Uint8Array(u.columns*u.lines*(u.inputChannels.length*u.type*2)),C={version:He(x,y),unknownUncompressedSize:He(x,y),unknownCompressedSize:He(x,y),acCompressedSize:He(x,y),dcCompressedSize:He(x,y),rleCompressedSize:He(x,y),rleUncompressedSize:He(x,y),rleRawSize:He(x,y),totalAcUncompressedCount:He(x,y),totalDcUncompressedCount:He(x,y),acCompression:He(x,y)};if(C.version<2)throw new Error("EXRLoader.parse: "+Mt.compression+" version "+C.version+" is unsupported");const N=new Array;let B=re(x,y)-2;for(;B>0;){const ue=ye(x.buffer,y),le=Ye(x,y),oe=le>>2&3,Ve=(le>>4)-1,we=new Int8Array([Ve])[0],it=Ye(x,y);N.push({name:ue,index:we,type:it,compression:oe}),B-=ue.length+3}const ne=Mt.channels,q=new Array(u.inputChannels.length);for(let ue=0;ue<u.inputChannels.length;++ue){const le=q[ue]={},oe=ne[ue];le.name=oe.name,le.compression=0,le.decoded=!1,le.type=oe.pixelType,le.pLinear=oe.pLinear,le.width=u.columns,le.height=u.lines}const Q={idx:new Array(3)};for(let ue=0;ue<u.inputChannels.length;++ue){const le=q[ue];for(let oe=0;oe<N.length;++oe){const Ve=N[oe];le.name==Ve.name&&(le.compression=Ve.compression,Ve.index>=0&&(Q.idx[Ve.index]=ue),le.offset=ue)}}let J,z,ie;if(C.acCompressedSize>0)switch(C.acCompression){case 0:J=new Uint16Array(C.totalAcUncompressedCount),tt(u.array,x,y,C.acCompressedSize,J,C.totalAcUncompressedCount);break;case 1:const ue=u.array.slice(y.value,y.value+C.totalAcUncompressedCount),le=co(ue);J=new Uint16Array(le.buffer),y.value+=C.totalAcUncompressedCount;break}if(C.dcCompressedSize>0){const ue={array:u.array,offset:y,size:C.dcCompressedSize};z=new Uint16Array(me(ue).buffer),y.value+=C.dcCompressedSize}if(C.rleRawSize>0){const ue=u.array.slice(y.value,y.value+C.rleCompressedSize),le=co(ue);ie=We(le.buffer),y.value+=C.rleCompressedSize}let ee=0;const ae=new Array(q.length);for(let ue=0;ue<ae.length;++ue)ae[ue]=new Array;for(let ue=0;ue<u.lines;++ue)for(let le=0;le<q.length;++le)ae[le].push(ee),ee+=q[le].width*u.type*2;Xe(Q,ae,q,J,z,A);for(let ue=0;ue<q.length;++ue){const le=q[ue];if(!le.decoded)switch(le.compression){case 2:let oe=0,Ve=0;for(let we=0;we<u.lines;++we){let it=ae[ue][oe];for(let Qe=0;Qe<le.width;++Qe){for(let Ue=0;Ue<2*le.type;++Ue)A[it++]=ie[Ve+Ue*le.width*le.height];Ve++}oe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(A.buffer)}function ye(u,x){const y=new Uint8Array(u);let A=0;for(;y[x.value+A]!=0;)A+=1;const C=new TextDecoder().decode(y.slice(x.value,x.value+A));return x.value=x.value+A+1,C}function nt(u,x,y){const A=new TextDecoder().decode(new Uint8Array(u).slice(x.value,x.value+y));return x.value=x.value+y,A}function ve(u,x){const y=De(u,x),A=Ie(u,x);return[y,A]}function Ae(u,x){const y=Ie(u,x),A=Ie(u,x);return[y,A]}function De(u,x){const y=u.getInt32(x.value,!0);return x.value=x.value+4,y}function Ie(u,x){const y=u.getUint32(x.value,!0);return x.value=x.value+4,y}function Me(u,x){const y=u[x.value];return x.value=x.value+1,y}function Ye(u,x){const y=u.getUint8(x.value);return x.value=x.value+1,y}const He=function(u,x){let y;return"getBigInt64"in DataView.prototype?y=Number(u.getBigInt64(x.value,!0)):y=u.getUint32(x.value+4,!0)+Number(u.getUint32(x.value,!0)<<32),x.value+=8,y};function Je(u,x){const y=u.getFloat32(x.value,!0);return x.value+=4,y}function O(u,x){return su.toHalfFloat(Je(u,x))}function te(u){const x=(u&31744)>>10,y=u&1023;return(u>>15?-1:1)*(x?x===31?y?NaN:1/0:Math.pow(2,x-15)*(1+y/1024):6103515625e-14*(y/1024))}function re(u,x){const y=u.getUint16(x.value,!0);return x.value+=2,y}function de(u,x){return te(re(u,x))}function Ce(u,x,y,A){const C=y.value,N=[];for(;y.value<C+A-1;){const B=ye(x,y),ne=De(u,y),q=Ye(u,y);y.value+=3;const Q=De(u,y),J=De(u,y);N.push({name:B,pixelType:ne,pLinear:q,xSampling:Q,ySampling:J})}return y.value+=1,N}function Te(u,x){const y=Je(u,x),A=Je(u,x),C=Je(u,x),N=Je(u,x),B=Je(u,x),ne=Je(u,x),q=Je(u,x),Q=Je(u,x);return{redX:y,redY:A,greenX:C,greenY:N,blueX:B,blueY:ne,whiteX:q,whiteY:Q}}function $e(u,x){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],A=Ye(u,x);return y[A]}function pt(u,x){const y=De(u,x),A=De(u,x),C=De(u,x),N=De(u,x);return{xMin:y,yMin:A,xMax:C,yMax:N}}function Rt(u,x){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],A=Ye(u,x);return y[A]}function ut(u,x){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],A=Ye(u,x);return y[A]}function Zt(u,x){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],A=["ROUND_DOWN","ROUND_UP"],C=Ie(u,x),N=Ie(u,x),B=Ye(u,x);return{xSize:C,ySize:N,levelMode:y[B&15],roundingMode:A[B>>4]}}function Gt(u,x){const y=Je(u,x),A=Je(u,x);return[y,A]}function Ei(u,x){const y=Je(u,x),A=Je(u,x),C=Je(u,x);return[y,A,C]}function Zi(u,x,y,A,C){if(A==="string"||A==="stringvector"||A==="iccProfile")return nt(x,y,C);if(A==="chlist")return Ce(u,x,y,C);if(A==="chromaticities")return Te(u,y);if(A==="compression")return $e(u,y);if(A==="box2i")return pt(u,y);if(A==="envmap")return ut(u,y);if(A==="tiledesc")return Zt(u,y);if(A==="lineOrder")return Rt(u,y);if(A==="float")return Je(u,y);if(A==="v2f")return Gt(u,y);if(A==="v3f")return Ei(u,y);if(A==="int")return De(u,y);if(A==="rational")return ve(u,y);if(A==="timecode")return Ae(u,y);if(A==="preview")return y.value+=C,"skipped";y.value+=C}function Ft(u,x){const y=Math.log2(u);return x=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function Ot(u,x,y){let A=0;switch(u.levelMode){case"ONE_LEVEL":A=1;break;case"MIPMAP_LEVELS":A=Ft(Math.max(x,y),u.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return A}function zn(u,x,y,A){const C=new Array(u);for(let N=0;N<u;N++){const B=1<<N;let ne=x/B|0;A=="ROUND_UP"&&ne*B<x&&(ne+=1);const q=Math.max(ne,1);C[N]=(q+y-1)/y|0}return C}function ei(){const u=this,x=u.offset,y={value:0};for(let A=0;A<u.tileCount;A++){const C=De(u.viewer,x),N=De(u.viewer,x);x.value+=8,u.size=Ie(u.viewer,x);const B=C*u.blockWidth,ne=N*u.blockHeight;u.columns=B+u.blockWidth>u.width?u.width-B:u.blockWidth,u.lines=ne+u.blockHeight>u.height?u.height-ne:u.blockHeight;const q=u.columns*u.totalBytes,J=u.size<u.lines*q?u.uncompress(u):G(u);x.value+=u.size;for(let z=0;z<u.lines;z++){const ie=z*u.columns*u.totalBytes;for(let ee=0;ee<u.inputChannels.length;ee++){const ae=Mt.channels[ee].name,ue=u.channelByteOffsets[ae]*u.columns,le=u.decodeChannels[ae];if(le===void 0)continue;y.value=ie+ue;const oe=(u.height-(1+ne+z))*u.outLineWidth;for(let Ve=0;Ve<u.columns;Ve++){const we=oe+(Ve+B)*u.outputChannels+le;u.byteArray[we]=u.getter(J,y)}}}}}function ft(){const u=this,x=u.offset,y={value:0};for(let A=0;A<u.height/u.blockHeight;A++){const C=De(u.viewer,x)-Mt.dataWindow.yMin;u.size=Ie(u.viewer,x),u.lines=C+u.blockHeight>u.height?u.height-C:u.blockHeight;const N=u.columns*u.totalBytes,ne=u.size<u.lines*N?u.uncompress(u):G(u);x.value+=u.size;for(let q=0;q<u.blockHeight;q++){const Q=A*u.blockHeight,J=q+u.scanOrder(Q);if(J>=u.height)continue;const z=q*N,ie=(u.height-1-J)*u.outLineWidth;for(let ee=0;ee<u.inputChannels.length;ee++){const ae=Mt.channels[ee].name,ue=u.channelByteOffsets[ae]*u.columns,le=u.decodeChannels[ae];if(le!==void 0){y.value=z+ue;for(let oe=0;oe<u.columns;oe++){const Ve=ie+oe*u.outputChannels+le;u.byteArray[Ve]=u.getter(ne,y)}}}}}}function Ti(u,x,y){const A={};if(u.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");A.version=u.getUint8(4);const C=u.getUint8(5);A.spec={singleTile:!!(C&2),longName:!!(C&4),deepFormat:!!(C&8),multiPart:!!(C&16)},y.value=8;let N=!0;for(;N;){const B=ye(x,y);if(B==0)N=!1;else{const ne=ye(x,y),q=Ie(u,y),Q=Zi(u,x,y,ne,q);Q===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ne}'.`):A[B]=Q}}if((C&-7)!=0)throw console.error("THREE.EXRHeader:",A),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return A}function Yn(u,x,y,A,C){const N={size:0,viewer:x,array:y,offset:A,width:u.dataWindow.xMax-u.dataWindow.xMin+1,height:u.dataWindow.yMax-u.dataWindow.yMin+1,inputChannels:u.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:yi};switch(u.compression){case"NO_COMPRESSION":N.blockHeight=1,N.uncompress=G;break;case"RLE_COMPRESSION":N.blockHeight=1,N.uncompress=Y;break;case"ZIPS_COMPRESSION":N.blockHeight=1,N.uncompress=me;break;case"ZIP_COMPRESSION":N.blockHeight=16,N.uncompress=me;break;case"PIZ_COMPRESSION":N.blockHeight=32,N.uncompress=ce;break;case"PXR24_COMPRESSION":N.blockHeight=16,N.uncompress=Ne;break;case"DWAA_COMPRESSION":N.blockHeight=32,N.uncompress=Se;break;case"DWAB_COMPRESSION":N.blockHeight=256,N.uncompress=Se;break;default:throw new Error("EXRLoader.parse: "+u.compression+" is unsupported")}const B={};for(const J of u.channels)switch(J.name){case"Y":case"R":case"G":case"B":case"A":B[J.name]=!0,N.type=J.pixelType}let ne=!1;if(B.R&&B.G&&B.B)ne=!B.A,N.outputChannels=4,N.decodeChannels={R:0,G:1,B:2,A:3};else if(B.Y)N.outputChannels=1,N.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(N.type==1)switch(C){case Tn:N.getter=de;break;case di:N.getter=re;break}else if(N.type==2)switch(C){case Tn:N.getter=Je;break;case di:N.getter=O}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+u.compression+".");N.columns=N.width;const q=N.width*N.height*N.outputChannels;switch(C){case Tn:N.byteArray=new Float32Array(q),ne&&N.byteArray.fill(1,0,q);break;case di:N.byteArray=new Uint16Array(q),ne&&N.byteArray.fill(15360,0,q);break;default:console.error("THREE.EXRLoader: unsupported type: ",C);break}let Q=0;for(const J of u.channels)N.decodeChannels[J.name]!==void 0&&(N.channelByteOffsets[J.name]=Q),Q+=J.pixelType*2;if(N.totalBytes=Q,N.outLineWidth=N.width*N.outputChannels,u.lineOrder==="INCREASING_Y"?N.scanOrder=J=>J:N.scanOrder=J=>N.height-1-J,N.outputChannels==4?(N.format=ln,N.colorSpace=yi):(N.format=lc,N.colorSpace=an),u.spec.singleTile){N.blockHeight=u.tiles.ySize,N.blockWidth=u.tiles.xSize;const J=Ot(u.tiles,N.width,N.height),z=zn(J,N.width,u.tiles.xSize,u.tiles.roundingMode),ie=zn(J,N.height,u.tiles.ySize,u.tiles.roundingMode);N.tileCount=z[0]*ie[0];for(let ee=0;ee<J;ee++)for(let ae=0;ae<ie[ee];ae++)for(let ue=0;ue<z[ee];ue++)He(x,A);N.decode=ei.bind(N)}else{N.blockWidth=N.width;const J=Math.ceil(N.height/N.blockHeight);for(let z=0;z<J;z++)He(x,A);N.decode=ft.bind(N)}return N}const Cn={value:0},mn=new DataView(e),$i=new Uint8Array(e),Mt=Ti(mn,e,Cn),Pt=Yn(Mt,mn,$i,Cn,this.type);return Pt.decode(),{header:Mt,width:Pt.width,height:Pt.height,data:Pt.byteArray,format:Pt.format,colorSpace:Pt.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=Ht,o.magFilter=Ht,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}async function Ln(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),s=r.vertexCount,o=r.indexCount;let a=4+n;const l=new Mi,c=r.attributes;for(let h=0,f=c.length;h<f;h++){const d=c[h],_=d.id,v=_==="indices"?o:s,g=d.componentSize,m=globalThis[d.storageType],p=new m(t,a,v*g),b=m.BYTES_PER_ELEMENT;let E;if(d.needsPack){const S=d.packedComponents,P=S.length,I=d.storageType.indexOf("Int")===0,R=1<<b*8,L=I?R*.5:0,M=1/R;E=new Float32Array(v*g);for(let w=0,U=0;w<v;w++)for(let H=0;H<P;H++){const k=S[H];E[U]=(p[U]+L)*M*k.delta+k.from,U++}}else E=p;if(_==="indices"){let S=E;E instanceof Uint8Array&&(S=new Uint16Array(E.length),S.set(E)),l.setIndex(new Xt(S,1))}else l.setAttribute(_,new Xt(E,g));a+=v*g*b}return l.computeBoundingSphere(),l}const uo=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],La={density:1,friction:2,restitution:.8},jx=40,hr=8,Jx=`
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
`,Qx=`
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
uniform vec4 u_nearPositionRadiusList[${hr}];
uniform vec3 u_nearColorList[${hr}];

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

  for (int i = 0; i < ${hr}; i++) {
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
  gi /= float(${hr});

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
`,eS=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,tS=`
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
`;function nS(i){const e={...La},t={...La},n={...La};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function iS(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function Fu(i,e,t,n,r){const s=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*s}class rS{constructor(e,t,n,r,s,o=!1){this.position=new W((s()-.5)*12,(s()-.5)*12,o?7+s():(s()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new In().setFromEuler(new On(s()*Math.PI,s()*Math.PI,s()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new W,this.gravityAcc=new W}applyImpulse(){this.velocity.add(new W((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(jx),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function sS(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*uo.length),r=uo[n];const s=new _c,o=new Sn(25,1,.1,100);o.position.set(0,0,25);const a=new mc({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=yi,a.toneMapping=_i;let l=!0;const c="/zyrax-studio/",h=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,f=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[d,_]=await Promise.all([Ln(h),new Promise((F,We)=>{new Kx().load(f,F,void 0,We)})]);_.minFilter=Ht,_.magFilter=Ht,_.generateMipmaps=!1,_.colorSpace=an;const v=new W(10,10,5),g=nS(r),m=iS("balloonBody-25"),p=[],b=[],E=[],S=[],P=Array.from({length:hr},()=>new yt(0,0,-999,.01)),I=Array.from({length:hr},()=>new et(1118481)),R=F=>new Wt({uniforms:{u_matcap:{value:_},u_color:{value:new et(F.color)},u_bgColor:{value:new et(1316117)},u_roughness:{value:F.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new yt(0,0,0,1)},u_selfRotation:{value:new yt(0,0,0,1)},u_nearPositionRadiusList:{value:P.map(We=>We.clone())},u_nearColorList:{value:I.map(We=>We.clone())}},vertexShader:Jx,fragmentShader:Qx});for(const F of g){const We=R(F),Xe=new kt(d,We);Xe.frustumCulled=!1,Xe.scale.setScalar(F.radius),s.add(Xe),b.push(Xe),E.push(We),p.push(new rS(F.radius,F.density,F.friction,F.restitution,m,!1)),S.push({i:b.length-1,d2:0})}const L=new Wt({uniforms:{u_color0:{value:new et(r)},u_color1:{value:new et(1316117)},u_aspect:{value:1}},vertexShader:eS,fragmentShader:tS,depthWrite:!1}),M=new kt(new Sr(90,60),L);M.position.z=-12,M.renderOrder=-1e3,s.add(M);const w=new dt(0,0),U=new W,H=new W,k=new W,Z=new W,K=new W,X=new W,j=new W,V=new W,_e=new W,xe=new W,se=new In,Ee=.025,be=.1,$=.12,he=F=>{const We=(e||i).getBoundingClientRect();w.x=(F.clientX-We.left)/We.width*2-1,w.y=-((F.clientY-We.top)/We.height*2-1)};window.addEventListener("pointermove",he);const fe=()=>{n=(n+1)%uo.length,r=uo[n],b.forEach((F,We)=>{const Xe=g[We];Xe.isColored&&(F.material.uniforms.u_color.value.set(r),Xe.color=r)}),L.uniforms.u_color0.value.set(r),p.forEach(F=>F.applyImpulse())},pe=()=>fe();i.addEventListener("click",pe),e==null||e.addEventListener("click",pe);const ge=()=>{const F=e||i.parentElement,We=F.clientWidth,Xe=F.clientHeight,je=We/Math.max(Xe,1);o.fov=Fu(je,2.2,2/3,18,30),o.aspect=je,o.updateProjectionMatrix(),a.setSize(We,Xe,!1),L.uniforms.u_aspect.value=je};ge(),window.addEventListener("resize",ge);let Le=0,Pe=performance.now();const tt=performance.now(),qe=()=>{const We=(e||i).getBoundingClientRect();l=We.bottom>0&&We.top<window.innerHeight};window.addEventListener("scroll",qe,{passive:!0}),qe();const lt=F=>{if(Le=requestAnimationFrame(lt),!l){Pe=F;return}let We=Math.min(.05,(F-Pe)/1e3);Pe=F;const Xe=t?1:2;We/=Xe;const je=(F-tt)/1e3,Oe=Fu(je,.3,2,25,17.5);o.position.z=Oe;for(let Ze=0;Ze<Xe;Ze++){const Fe=new W(w.x,w.y,.5).unproject(o);Fe.sub(o.position).normalize();const D=(0-o.position.z)/Fe.z;U.copy(o.position).addScaledVector(Fe,D),k.copy(U).sub(H).multiplyScalar($/Math.max(We,.001)),Z.copy(U).sub(o.position);const T=Z.lengthSq()||1;H.copy(U);for(let G=0;G<p.length;G++){const Y=p[G];Y.updateGravity(We),X.copy(Y.velocity),j.copy(Y.position);for(let Se=G+1;Se<p.length;Se++){const ye=p[Se];_e.copy(ye.velocity),xe.copy(ye.position),K.copy(j).sub(xe);const nt=K.length(),ve=Y.radius+ye.radius;if(nt<ve&&nt>1e-6){const Ae=Math.sqrt(Y.friction*ye.friction);Y.frictionTot+=Ae,ye.frictionTot+=Ae,K.normalize(),K.multiplyScalar(.5*(nt-ve)),j.sub(K),xe.add(K),K.normalize();const De=X.dot(K),Ie=_e.dot(K),Me=Y.mass,Ye=ye.mass,He=(Me*De+Ye*Ie-Ye*(De-Ie)*Y.restitution)/(Me+Ye),Je=(Me*De+Ye*Ie-Me*(Ie-De)*ye.restitution)/(Me+Ye);X.addScaledVector(K,(He-De)/(1+Ae)),_e.addScaledVector(K,(Je-Ie)/(1+Ae)),ye.position.copy(xe),ye.velocity.copy(_e)}}V.copy(j).sub(o.position);let me=V.dot(Z)/T;me=V.sub(_e.copy(Z).multiplyScalar(me)).length()-Y.radius-Ee,me<0&&(V.copy(j).sub(o.position).cross(Z).normalize(),_e.copy(Z).cross(V).normalize(),j.sub(_e.multiplyScalar(be*me)),_e.multiplyScalar(-$/Math.max(We,.001)),X.add(_e),X.add(k));let ce=j.length();if(ce>0){V.set(1,1,1).normalize();let Se=1-Math.abs(V.dot(_e.copy(j).normalize()));Se*=We*Math.min(1,Math.max(0,ce/2))*.5,Se*=G%2*2-1,se.setFromAxisAngle(V,Se),_e.copy(j).applyQuaternion(se).sub(V.copy(j)),X.add(_e)}V.crossVectors(j,X);let Ne=V.length();Ne/=Y.inertia,Ne>0&&(V.normalize(),se.setFromAxisAngle(V,Ne*We),Y.quaternion.premultiply(se)),Y.position.copy(j),Y.velocity.copy(X),Y.update(We),["x","y","z"].forEach(Se=>{const ye=Se==="z"?5.5:7.5;Y.position[Se]>ye&&(Y.position[Se]=ye,Y.velocity[Se]*=-.55),Y.position[Se]<-ye&&(Y.position[Se]=-ye,Y.velocity[Se]*=-.55)})}}for(let Ze=0;Ze<b.length;Ze++){const Fe=b[Ze],D=p[Ze];Fe.position.copy(D.position),Fe.quaternion.copy(D.quaternion);const T=E[Ze].uniforms;T.u_selfPositionRadius.value.set(D.position.x,D.position.y,D.position.z,D.radius),T.u_selfRotation.value.set(D.quaternion.x,D.quaternion.y,D.quaternion.z,D.quaternion.w),T.u_bgColor.value.copy(L.uniforms.u_color1.value)}for(let Ze=0;Ze<b.length;Ze++){for(let T=0;T<b.length;T++)S[T].i=T,S[T].d2=Ze===T?0:p[Ze].position.distanceToSquared(p[T].position);S.sort((T,G)=>T.d2-G.d2);const Fe=E[Ze].uniforms.u_nearPositionRadiusList.value,D=E[Ze].uniforms.u_nearColorList.value;for(let T=0;T<hr;T++){const G=S[T+1]?S[T+1].i:S[0].i,Y=p[G];Fe[T].set(Y.position.x,Y.position.y,Y.position.z,Y.radius),D[T].copy(E[G].uniforms.u_color.value)}}o.position.x+=(w.x*.9-o.position.x)*.04,o.position.y+=(w.y*.55-o.position.y)*.04,o.lookAt(0,0,0),a.render(s,o)};return Le=requestAnimationFrame(lt),{cycleColor:fe,destroy(){cancelAnimationFrame(Le),window.removeEventListener("pointermove",he),window.removeEventListener("resize",ge),window.removeEventListener("scroll",qe),i.removeEventListener("click",pe),e==null||e.removeEventListener("click",pe),E.forEach(F=>F.dispose()),L.dispose(),a.dispose()}}}function Xn(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function Es(i){return Xn(i,0,1)}function Ff(i,e,t){return(t-i)/(e-i||1)}function bo(i,e,t){return Xn(Ff(i,e,t),0,1)}function ke(i,e,t,n,r,s){let o=bo(e,t,i);return s&&(o=s(o)),n+o*(r-n)}function Ou(i,e,t,n,r,s){let o=Ff(e,t,i);return n+o*(r-n)}function oS(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const s=(g,m,p,b)=>1/(3*m*g*g+2*p*g+b),o=(g,m,p,b,E)=>m*(g*g*g)+p*(g*g)+b*g+E,a=(g,m,p,b,E)=>{const S=g*g;return m*(S*g)+p*S+b*g+E},l=1-3*n+3*e,c=3*n-6*e,h=3*e,f=1-3*r+3*t,d=3*r-6*t,_=3*t;let v=i;for(let g=0;g<100;g++){const m=o(v,l,c,h,0);let p=s(v,l,c,h);p===1/0&&(p=i),v-=(m-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,f,d,_,0)}function Et(i){return oS(i,.35,0,0,1)}function zu(i){return i===1?1:1-Math.pow(2,-10*i)}function aS(i){return i===0?0:Math.pow(1024,i-1)}function lS(i){return 1-Math.cos(i*Math.PI/2)}function cS(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function Of(i){return i*i*i}function zf(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Gn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,s=e.bottom;let o=Math.min(0,Ou(n,t,t-r,-1,0));o+=Math.max(0,Ou(n,0,-r,0,1));const a=ke(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,h=o>=-1&&o<=1;return{top:n,bottom:s,height:r,width:e.width,ratio:o,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:h}}function uS(i){return 1-Math.pow(1-i,3)}function hS(i){return i*i*i*i}function fS(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function Ui(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const Bu=[{id:"blackFrameShow",weight:.55},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",weight:1.6},{id:"astronautWait",weight:.9}];function Bf(i){const e=Bu.reduce((a,l)=>a+l.weight,0),t={};let n=0;for(const a of Bu){const l=a.weight/e;t[a.id]={...a,from:n,to:n+l},n+=l}function r(){const a=i.getBoundingClientRect(),l=window.innerHeight,c=a.height-l;return Math.max(0,Math.min(1,-a.top/Math.max(c,1)))}function s(a,l=a){const c=t[a],h=t[l],f=r(),d=c.from,_=h.to,v=(f-d)/Math.max(_-d,1e-6);return{ratio:Math.max(0,Math.min(1,v)),raw:v,active:f>=d&&f<=_,global:f}}function o(a,l){return s(a,l)}return{items:t,progress:r,range:s,between:o,totalWeight:e}}const dS=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,pS=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,mS="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",_S="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",kf=`
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
`,Hf=`
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
`,gS=`
${kf}
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
${Hf}
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
`,ku=`
${kf}
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
${Hf}
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
`,ho=53,fo=16,po=20,Hu=["helmet","helmet_glass","glove_shoes","wearpack"],ps=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Ia=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function Vu(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function Gu(i,e){const[t,n]=await Promise.all([Vu(i),Vu(e)]),r=document.createElement("canvas");r.width=t.width,r.height=t.height;const s=r.getContext("2d",{willReadFrequently:!0});s.drawImage(n,0,0,r.width,r.height);const o=s.getImageData(0,0,r.width,r.height);s.clearRect(0,0,r.width,r.height),s.drawImage(t,0,0,r.width,r.height);const a=s.getImageData(0,0,r.width,r.height);for(let c=0;c<a.data.length;c+=4)a.data[c+3]=o.data[c];s.putImageData(a,0,0);const l=new Rx(r);return l.colorSpace=an,l.flipY=!1,l.needsUpdate=!0,l}function Wu(i,e,t){const n=new Cf(i,e,t,ln,Tn);return n.magFilter=nn,n.minFilter=nn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function Ua(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new Zn(t,3)}const Na=`
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
`,Xu=`
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
`;async function vS(i,e,t){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",s=!n,[o,a,l,c,h,f,d,_,v,g,m,p,b,...E]=await Promise.all([Ln(`${r}assets/models/tunnels/astronaut_animations.buf`),Ln(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Ln(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new ds().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new ds().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new ds().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Ln(`${r}assets/models/tunnels/tunnel_block_base.buf`),Ln(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Ln(`${r}assets/models/tunnels/grid_base_ld.buf`),Ln(`${r}assets/models/tunnels/grid_structure_ld.buf`),s?Ln(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),s?Ln(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new ds().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),...Hu.map(z=>Ln(`${r}assets/models/tunnels/astronaut_${z}.buf`))]),S=new _c;S.background=new et(0);const P=new W(0,0,25),I=new W(0,0,24),R=45,L=new Sn(R,1,1,200);L.position.copy(P),L.lookAt(I);let M;try{M=new mc({canvas:i,antialias:!n,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(z){throw console.error("Goal WebGL unavailable",z),z}M.setClearColor(0,1),M.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1:1.35)),M.outputColorSpace=en,M.autoClear=!0,c.colorSpace=an,h.colorSpace=en,f.colorSpace=en,f.wrapS=f.wrapT=Wr;const w=o.attributes.position.array,U=o.attributes.orient.array,H=w.length/3,k=H/ho,Z=Math.ceil(Math.sqrt(H)),K=Math.ceil(H/Z),X=Z*K,j=new Float32Array(X*4),V=new Float32Array(X*4);for(let z=0,ie=0,ee=0;z<H;z++,ie+=3,ee+=4)j[ee]=w[ie],j[ee+1]=w[ie+1],j[ee+2]=w[ie+2],j[ee+3]=1,V[ee]=U[ee],V[ee+1]=U[ee+1],V[ee+2]=U[ee+2],V[ee+3]=U[ee+3];const _e=Wu(j,Z,K),xe=Wu(V,Z,K),se=new Zn(new Float32Array([0,0,18]),3);se.setUsage(wi);const Ee=new Zn(new Float32Array([0,0,0,1]),4);Ee.setUsage(wi);const be=new Zn(new Float32Array([0,1,0]),3);be.setUsage(wi);const $=new Zn(new Float32Array([90,91,0]),3);$.setUsage(wi);const he=()=>{const z=new qi(1,1,{minFilter:fi,magFilter:Ht,format:ln,generateMipmaps:!0});return z.texture.wrapS=z.texture.wrapT=No,z},fe=he(),pe=he();let ge=fe,Le=pe;const Pe={u_animationPositionTexture:{value:_e},u_animationOrientTexture:{value:xe},u_animationTextureSize:{value:new dt(Z,K)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:h},u_ambientColor:{value:new et("#566d80")},u_bgColor:{value:new et("#000000")},u_sunPosition:{value:new W(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new et(0,0,0)},u_time:{value:0}},tt={u_blackTunnelTexture:{value:ge.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},qe={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async z=>{const[ie,ee]=await Promise.all([Gu(`${r}assets/textures/tunnels/astronaut/astronaut_${z}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${z}_base.webp`),new ds().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${z}_nor.webp`)]);ee.colorSpace=an,ee.flipY=!1,qe[z]={armb:ie,nor:ee}})),qe.helmet_glass=qe.helmet;const lt=new mi;S.add(lt);const F=[],We=4,Xe=new Zn(new Float32Array(We*3),3);Xe.setUsage(wi);const je=new Zn(new Float32Array(We*4),4);je.setUsage(wi);const Oe=new Zn(new Float32Array(We*3),3);Oe.setUsage(wi);const Ze=new Zn(new Float32Array(We*3),3);Ze.setUsage(wi);for(let z=0;z<We;z++)je.setXYZW(z,0,0,0,1),Oe.setXYZ(z,0,1,0),Ze.setXYZ(z,90,91,0);const Fe=[];let D=0;Hu.forEach((z,ie)=>{const ee=E[ie],ae=new lo;for(const Ue in ee.attributes)ae.setAttribute(Ue,ee.attributes[Ue]);ee.index&&ae.setIndex(ee.index),ae.instanceCount=1,ae.setAttribute("instancePos",se),ae.setAttribute("instanceOrient",Ee),ae.setAttribute("instanceAnimationFrameFromToBlend1",be),ae.setAttribute("instanceAnimationFrameFromToBlend2",$);const ue=z==="helmet_glass"||z==="card"?"helmet":z,le=z==="helmet_glass",oe={...Pe,u_armbTexture:{value:qe[ue].armb},u_norTexture:{value:qe[ue].nor}},Ve={...Pe,...tt,u_armbTexture:{value:qe[ue].armb},u_norTexture:{value:qe[ue].nor}},we=new Wt({uniforms:oe,vertexShader:Na,fragmentShader:le?Xu:gS,transparent:le,side:on,defines:{BONE_COUNT:ho,...le?{IS_HELMET_GLASS:!0}:{}}}),it=new Wt({uniforms:Ve,vertexShader:Na,fragmentShader:le?Xu:ku,transparent:!0,side:on,defines:{BONE_COUNT:ho,IS_BLACK:!0}}),Qe=new kt(ae,we);if(Qe.frustumCulled=!1,Qe.userData.whiteMat=we,Qe.userData.blackMat=it,lt.add(Qe),F.push(Qe),!le){const Ue=new lo;for(const st in ee.attributes)Ue.setAttribute(st,ee.attributes[st]);ee.index&&Ue.setIndex(ee.index),Ue.instanceCount=We,Ue.setAttribute("instancePos",Xe),Ue.setAttribute("instanceOrient",je),Ue.setAttribute("instanceAnimationFrameFromToBlend1",Oe),Ue.setAttribute("instanceAnimationFrameFromToBlend2",Ze);const ze=new Wt({uniforms:{...Ve,u_armbTexture:{value:qe[ue].armb},u_norTexture:{value:qe[ue].nor}},vertexShader:Na,fragmentShader:ku,transparent:!0,depthWrite:!1,depthTest:!1,blending:Uo,side:on,defines:{BONE_COUNT:ho,IS_BLACK:!0}}),Ge=new kt(Ue,ze);Ge.frustumCulled=!1,Ge.renderOrder=1e3,Ge.visible=!1,lt.add(Ge),Fe.push(Ge)}});const T=new mi;S.add(T);const G=new W;let Y=0,me=1,ce=typeof window<"u"?window.scrollY:0,Ne=1;const Se=(z,ie)=>{const ee=new lo;for(const oe in z.attributes)ee.setAttribute(oe,z.attributes[oe]);z.index&&ee.setIndex(z.index);const ae=new Float32Array(fo);for(let oe=0;oe<fo;oe++)ae[oe]=oe;ee.setAttribute("a_instanceId",new Zn(ae,1)),ee.instanceCount=fo;const ue=new Wt({uniforms:{u_texture:{value:f},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:G},u_time:{value:0}},vertexShader:mS,fragmentShader:_S,transparent:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:fo,...ie?{IS_WALL:!0}:{}}}),le=new kt(ee,ue);return le.frustumCulled=!1,T.add(le),ue},ye=Se(d,!1),nt=Se(_,!0),ve=new dc({color:0}),Ae=new kt(new Sr(200,200),ve);Ae.position.z=-80,S.add(Ae);const De=new mi;S.add(De);const Ie=await Gu(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);Ie.wrapS=Ie.wrapT=Wr,b.colorSpace=an,b.flipY=!1,b.wrapS=b.wrapT=Wr;const Me={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:ge.texture},u_greebleArmbTexture:{value:Ie},u_greebleNormalTexture:{value:b},u_resolution:{value:new dt(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new W(0,70,0)},u_color1:{value:new et(ps[0])},u_color2:{value:new et(Ia[0])}},Ye=(z,ie,ee)=>{const ae=new lo;for(const Ve in z.attributes)ae.setAttribute(Ve,z.attributes[Ve]);z.index&&ae.setIndex(z.index);const ue=z.attributes.position.count;ae.getAttribute("ao")||ae.setAttribute("ao",new Xt(new Float32Array(ue).fill(1),1)),ae.getAttribute("areaRatio")||ae.setAttribute("areaRatio",new Xt(new Float32Array(ue),1)),ae.getAttribute("height")||ae.setAttribute("height",new Xt(new Float32Array(ue).fill(1),1)),ae.getAttribute("cluster")||ae.setAttribute("cluster",new Xt(new Float32Array(ue),1)),ae.setAttribute("instancePos",Ua(ie.attributes.position)),ae.setAttribute("instanceGridIds",Ua(ie.attributes.gridIds)),ae.setAttribute("instanceAxis",Ua(ie.attributes.rotAxis)),ae.instanceCount=ie.attributes.position.count;const le=new Wt({uniforms:Me,vertexShader:dS,fragmentShader:pS,side:on,transparent:!0,depthWrite:!1,blending:Uo,defines:{GRID_SIZE:po,...ee?{IS_HD:!0}:{}}}),oe=new kt(ae,le);return oe.frustumCulled=!1,oe.renderOrder=ee?2:1,De.add(oe),oe};Ye(v,g,!1),s&&m&&p&&Ye(m,p,!0);let He=0,Je=0,O=0,te=R;const re=new W,de=new On,Ce=new In,Te=new In,$e=new et,pt=new et,Rt=new W,ut=new W,Zt=new On,Gt=new In,Ei=()=>{L.near=1,L.far=200,L.position.copy(P),L.up.set(0,1,0),L.lookAt(I),L.fov=te,Rt.set(0,0,-1).applyQuaternion(L.quaternion);let z=ut.copy(I).sub(L.position).dot(Rt);const ie=L.fov,ee=ie+O,ae=Math.max(1,Math.min(170,ee));let ue=z*Math.tan(ie/360*Math.PI/2)/Math.tan(ae/360*Math.PI/2)-z;Number.isFinite(ue)||(ue=0),L.translateZ(ue),L.fov=ie,z+=ue,L.translateZ(z*-1),L.translateZ(z),L.updateProjectionMatrix()},Zi=i.parentElement||e,Ft=Bf(e);let Ot=0,zn=0,ei=0,ft=0,Ti=0,Yn=0,Cn=0,mn=0,$i=!0,Mt=!1,Pt=!1,u=0,x=0,y=performance.now(),A=!1;const C=()=>{const z=Zi,ie=z.clientWidth||window.innerWidth,ee=z.clientHeight||window.innerHeight;L.aspect=ie/Math.max(ee,1),Ei(),M.setSize(ie,ee,!1),Me.u_resolution.value.set(ie,ee);const ae=Math.max(1,Math.floor(ie*.25)),ue=Math.max(1,Math.floor(ee*.25));(fe.width!==ae||fe.height!==ue)&&(fe.setSize(ae,ue),pe.setSize(ae,ue))};C(),window.addEventListener("resize",C);const N=(z,ie)=>{const ee=z.attributes.position.array,ae=z.attributes.orient.array,ue=ee.length/3,le=Math.max(0,Math.min(ue-1.0001,ie*(ue-1))),oe=Math.floor(le),Ve=Math.min(ue-1,oe+1),we=le-oe,it=new W().fromArray(ee,oe*3).lerp(new W().fromArray(ee,Ve*3),we),Qe=new In().fromArray(ae,oe*4).slerp(new In().fromArray(ae,Ve*4),we);return{p:it,q:Qe}},B=()=>{if(!e)return;const z=window.innerHeight,ie=window.scrollY||0;ie!==ce&&(Ne=ie>ce?1:-1,ce=ie),Ti=Ft.range("blackFrameIn").ratio,ei=Ft.range("blackTitle").ratio,ft=Ft.range("blackTunnel").ratio,Cn=Ft.range("whiteTunnel").ratio,Ot=Ft.between("whiteTunnel","whiteFrameOut").ratio,Yn=Ft.range("whiteFrameBreak").ratio;const ee=Ft.between("whiteTunnel","whiteFrameBreak").ratio;mn=Ft.between("whiteFrameBreak","astronautDrop").ratio,$i=ei<1,Mt=ft<1&&!$i,Pt=Ot<=1&&!Mt&&!$i,zn=Pt?Ui(0,.15,ee):1,Pe.u_whiteTunnelRatio.value=Ot,Pe.u_showRatio.value=zn,Pe.u_frameOutRatio.value=Yn,ye.uniforms.u_ratio.value=Ot,nt.uniforms.u_ratio.value=Ot,ye.uniforms.u_ratioInverse.value=1-Ot,nt.uniforms.u_ratioInverse.value=1-Ot;const ae=new et(Pt&&mn<1?"#ffffff":"#000000");ve.color.copy(ae),S.background=ae,M.setClearColor(ae,1),Pe.u_bgColor.value.copy(ae),T.visible=Pt&&mn<1,De.visible=Mt;const ue=Pt;for(const ze of F){const Ge=ue?ze.userData.whiteMat:ze.userData.blackMat;ze.material!==Ge&&(ze.material=Ge)}D=Mt?Ui(.2,.4,ft):0;for(const ze of Fe)ze.visible=!Pt&&D>.01;let le;if(Pt){const ze=Ot<1?ke(Ot,0,1,0,79):ke(mn,0,1,79,99);le=N(l,ze/99),le.p.y-=(n?0:.4)*fS(mn)}else le=N(a,Of(Math.min(ei,1)));let oe=0,Ve=0,we=.2,it=.15;if(Mt){const ze=ft;we=.2+.5*ze,it=.15,oe=5*ze,Ve=60*ze}else Pt&&(we=ke(Cn,0,.45,.5,.2),it=ke(Cn,0,.45,.4,.15),oe=ke(Cn,0,.75,5,0),Ve=ke(Cn,0,.75,15,0));if(re.set(Math.sin(Y*we*5.1)*oe*.08+Math.sin(Y*we*2.3)*oe*.05,Math.sin(Y*we*3.7+1.2)*oe*.08,Math.sin(Y*we*4.4+.7)*oe*.06),de.set(Math.sin(Y*it*3.1)*Ve*Math.PI/180,Math.sin(Y*it*2.4+.8)*Ve*Math.PI/180,Math.sin(Y*it*1.7+1.5)*Ve*Math.PI/180),Ce.setFromEuler(de),le.p.add(re),Te.copy(le.q).multiply(Ce),se.setXYZ(0,le.p.x,le.p.y,le.p.z),Ee.setXYZW(0,Te.x,Te.y,Te.z,Te.w),se.needsUpdate=!0,Ee.needsUpdate=!0,D>.01){for(let ze=0;ze<We;ze++){const Ge=Y*(.7+ze*.17)+ze*1.7,st=4+D*8,ot=Math.sin(Ge*1.3)*st+Math.cos(Ge*.7+ze)*st*.4,Ke=Math.cos(Ge*1.1)*st*.7,vt=Math.sin(Ge*.9+ze*.5)*st*.5,zt=ke(D,ze/(We-1)*.3,.7+ze/(We-1)*.3,1,0);Xe.setXYZ(ze,le.p.x+ot*(1-zt*.35),le.p.y+Ke*(1-zt*.35),le.p.z+vt*(1-zt*.35)),Zt.set(de.x+Math.sin(Ge)*.4,de.y+Math.cos(Ge*1.2)*.4,de.z+Math.sin(Ge*.8)*.3),Gt.setFromEuler(Zt).multiply(Te),je.setXYZW(ze,Gt.x,Gt.y,Gt.z,Gt.w),Oe.setXYZ(ze,be.getX(0),be.getY(0),be.getZ(0)),Ze.setXYZ(ze,$.getX(0),$.getY(0),$.getZ(0))}Xe.needsUpdate=!0,je.needsUpdate=!0,Oe.needsUpdate=!0,Ze.needsUpdate=!0}lt.visible=zn>.02,te=R,Pt?(O=ke(Ot,0,1,60,0),te=ke(Cn,0,1,R,70)):Mt?(O=Math.sin(ft*10+Y)*7.5*Ui(0,.2,ft),De.position.z=-80*bo(.2,0,ft)):(O=ke(Ti,0,1,20,0),De.position.z=-80),Ei(),tt.u_frameIn.value=Ti,tt.u_sunFactor.value=Mt?1-Ui(.1,.2,ft):1,tt.u_blackTunnelRatio.value=Mt?Ui(.1,.3,ft):0,tt.u_endRatio.value=Mt?Ui(.65,.9,ft):0,tt.u_offsetZ.value=Me.u_offsetZ.value;const Qe=ke(mn,1,0,.2,1)*(Yn>0?1:0);Pe.u_tintColor.value.setStyle("#2533c2").multiplyScalar(Qe);const Ue=Zi.getBoundingClientRect();A=Ue.bottom>0&&Ue.top<z,e.dataset.goalPhase=Pt?"white":Mt?"black-tunnel":"title"},ne=z=>{if(!Mt){Me.u_showRatio.value=0;return}Me.u_showRatio.value=aS(bo(0,.1,ft));const ie=Me.u_outBloomFromToStrength.value;ie.z=ke(ft,.65,.75,0,.2),ie.z=ke(ft,.75,.85,ie.z,.15),ie.z=ke(ft,.85,1,ie.z,.15),ie.x=ke(ft,.75,.85,20,60),ie.x=ke(ft,.9,1,ie.x,30);const ee=ke(ft,.6,1,0,1,lS);Me.u_blackTunnelTransformRatio.value=ee;const ae=Ne*me;He+=ae*bo(.1,.3,ft)*ke(ee,0,.25,1,.5),Je+=ae*ke(ee,0,.25,1.5,1);const ue=He,le=Math.floor(ue),oe=ue-le,Ve=(le+zf(oe))*po+Je*po+ft*po*10;Me.u_offsetZ.value=Ve,tt.u_offsetZ.value=Ve,Me.u_time.value=Y;const we=ps.length*ke(ft,.2,1,0,1),it=Math.floor(we),Qe=Math.min(Math.ceil(we),ps.length-1),ze=we-it>.5?1:0;$e.set(ps[it]),pt.set(ps[Qe]),$e.lerp(pt,ze),Me.u_color1.value.copy($e),$e.set(Ia[it]),pt.set(Ia[Qe]),$e.lerp(pt,ze),Me.u_color2.value.copy($e),O=Math.sin(ft*10+Y)*7.5*Ui(0,.2,ft)},q=z=>{Pt&&(G.set(Math.sin(Y*1.1)*1.4+Math.sin(Y*2.4)*.6,Math.cos(Y*.9)*1.2+Math.sin(Y*1.7)*.5,Math.sin(Y*1.3+.5)*.8),ye.uniforms.u_time.value=Y,nt.uniforms.u_time.value=Y,ye.uniforms.u_fbm.value=G,nt.uniforms.u_fbm.value=G)},Q=()=>B();window.addEventListener("scroll",Q,{passive:!0}),B();const J=z=>{x=requestAnimationFrame(J);const ie=Math.min(.05,(z-y)/1e3);if(y=z,!A)return;me=ie,Y+=me,Pe.u_time.value=Y,ne(),q(),Mt&&(O=Math.sin(ft*10+Y)*7.5*Ui(0,.2,ft),Ei());const ee=Ot,ae=mn;let ue=ke(zn,0,1,0,.75)*ke(ei,.2,1,.35,1),le=0,oe=89;(ee>=.5||ae>0)&&(ue=ke(Math.max(ee,ae),.85,1,.2,1),le=140,oe=Math.min(k-1,287)),u+=ie*ue;const Ve=oe-le+1,we=u*60%Ve,it=Math.floor(we)+le,Qe=(Math.floor(we)+1)%Ve+le,Ue=we-Math.floor(we);be.setXYZ(0,it,Qe,Ue),be.needsUpdate=!0;const ze=ke(Ot+ae,.9,2,90,139,hS),Ge=Math.floor(ze),st=Math.ceil(ze),ot=ze-Ge;if($.setXYZ(0,Ge,st,ot),$.needsUpdate=!0,Pe.u_loopLinearBlend.value=ke(ae,0,.1,0,1)*ke(ae,.9,1,1,0),D>.01){for(let Ke=0;Ke<We;Ke++){const vt=Ke*7;Oe.setXYZ(Ke,it+vt,Qe+vt,Ue),Ze.setXYZ(Ke,Ge,st,ot)}Oe.needsUpdate=!0,Ze.needsUpdate=!0}if(Mt){const Ke=S.background;lt.visible=!1,T.visible=!1,Ae.visible=!1,S.background=new et(0),Me.u_feedbackTexture.value=ge.texture,M.setRenderTarget(Le),M.setClearColor(0,1),M.clear(),M.render(S,L),M.setRenderTarget(null);const vt=ge;ge=Le,Le=vt,Me.u_feedbackTexture.value=ge.texture,tt.u_blackTunnelTexture.value=ge.texture,lt.visible=zn>.02,T.visible=!1,Ae.visible=!0,S.background=Ke}M.setClearColor(Pe.u_bgColor.value,1),M.render(S,L)};return x=requestAnimationFrame(J),requestAnimationFrame(()=>{C(),B(),M.render(S,L)}),{resize:C,updateScroll:B,destroy(){cancelAnimationFrame(x),window.removeEventListener("resize",C),window.removeEventListener("scroll",Q),fe.dispose(),pe.dispose(),M.dispose()}}}function xS(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(d=>{if(d.querySelector(".goal-word"))return;const _=d.textContent.replace(/\s+/g," ").trim().split(" ");d.innerHTML=_.map(v=>`<span class="goal-word">${v}</span>`).join(" ")});const r=Bf(i),s=()=>window.innerWidth<812,o=i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const d=e.getBoundingClientRect(),_=d.width,v=d.left;n.forEach(g=>{const m=Array.from(g.querySelectorAll(".goal-word"));if(m.length<2){m.forEach(S=>{S._offsetX=0});return}m.forEach(S=>{S.style.transform="translateZ(0)"});let p=_;m.forEach(S=>{const P=S.getBoundingClientRect();S._domRect=P,p-=P.width});let b=0;const E=p/(m.length-1);m.forEach(S=>{S._offsetX=-S._domRect.left+v+b,b+=S._domRect.width+E})})};c(),window.addEventListener("resize",c);let h=null;t&&t.parentElement&&(h=document.createElement("div"),h.setAttribute("aria-hidden","true"),h.style.width="100%",h.style.pointerEvents="none",t.parentElement.insertBefore(h,t));const f=()=>{const d=r.range("blackTitle").ratio,_=r.range("blackTunnel").ratio,v=r.between("whiteTunnel","whiteFrameOut").ratio,g=r.between("whiteFrameBreak","astronautDrop").ratio,m=ke(v,0,.25,0,1);r.progress();const p=window.innerHeight;if(t){const R=i.getBoundingClientRect(),L=R.top<=0&&R.bottom>p;t.classList.toggle("is-pinned",L),h&&(h.style.height=L?`${t.offsetHeight||p}px`:"0px"),t.style.background=m>.5?"#f0f1fa":"#0b0b12"}let b=ke(d,a,l,0,1);const E=b>0&&b<1;let S=ke(b,.5,1,1,s()?6:12,Of);S*=ke(b,0,.15,.85,1,uS);let P=ke(b,.9,1,1,0);P*=ke(b,0,.05,0,1),P*=ke(_,0,.12,1,0);const I=ke(b,.4,.6,0,1,zf);if(e.classList.toggle("is-on-black",m<.5),e.style.opacity=String(P),e.style.transform=`translate3d(-50%, -50%, 0) scale(${S})`,e.style.visibility=E&&P>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(R=>{const L=R._offsetX||0;R.style.transform=`translateX(${I*L}px)`}),o){const R=ke(g,.15,.85,0,1);o.style.opacity=String(R),o.style.transform=`translateY(${(1-R)*48}px)`}return i.dataset.goalPhase=v>.01?"white":_>.01?"black-tunnel":"title",{blackTitleRatio:d,blackTunnelRatio:_,whiteTunnelRatio:v,astronautDropRatio:g,toWhite:m}};return window.addEventListener("scroll",f,{passive:!0}),f(),{updateScroll:f,ranges:r,destroy(){window.removeEventListener("scroll",f),window.removeEventListener("resize",c)}}}function mo(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((s,o)=>{const a=document.createElement("div");a.className=e,a.textContent=s,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),o<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function SS(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,s)=>{const o=document.createElement("div");o.className="word",o.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",o.appendChild(l),t.push(l)}),i.appendChild(o),r<s.length-1&&i.appendChild(document.createTextNode(" "))}),t}function rr(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function yS(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=rr(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),s=document.getElementById("home-reel-title-line-2"),o=document.getElementById("home-reel-content"),a=rr(document.getElementById("home-reel-desc"),2),l=rr(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),h=document.getElementById("home-reel-video-container"),f=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let d=[],_=0,v=[],g=!0;const m=()=>{d.forEach(se=>{se.style.transform="translate3d(0, 100%, 0)"}),v.forEach(se=>{se.style.transform="translate3d(0, 100%, 0)",se.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!s||([r,s].forEach(se=>{se.style.overflow="hidden",se.style.display="block",se.style.position="relative"}),d=[...mo(r,"word"),...mo(s,"word")],d.forEach(se=>{se.style.position="relative",se.style.bottom="0.1em"}),_=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=mo(a,"word"),a.style.overflow="hidden"),m())})();const b=document.getElementById("home-featured"),E=rr(document.getElementById("home-featured-title"),2),S=rr(document.getElementById("home-featured-disclaimer"),2),P=rr(document.getElementById("home-featured-cta"),1);let I=[],R=[],L=[],M=!0;const w=()=>{M=!1,E&&(E._time=0,E._animating=!1),S&&(S._time=0,S._animating=!1),P&&(P._time=0,P._animating=!1),i()||(R.forEach(se=>{se.style.transform="translate3d(0, 100%, 0)"}),I.forEach(se=>{se.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(E){if(E.style.overflow="hidden",I=SS(E),S){const se=S.textContent.trim();S.textContent="";const Ee=document.createElement("div");Ee.className="line",Ee.textContent=se,Ee.style.transform="translate3d(0, 100%, 0)",Ee.style.willChange="transform";const be=document.createElement("div");be.style.position="relative",be.style.overflow="hidden",be.appendChild(Ee),S.appendChild(be),R=[Ee]}P&&(P.style.transform="translate3d(0, 150%, 0) rotate(10deg)",P.style.opacity="0",P.style.overflow="hidden"),L=Array.from(document.querySelectorAll(".project-item")).map((se,Ee)=>(se._time=0,se._animating=!1,se.style.opacity="0",se.style.transform="translate3d(0, 90px, 0)",se.style.willChange="transform, opacity",se.dataset.projectIndex=String(Ee),se)),w()}})();const H=rr(document.getElementById("home-goal-title"),2);let k=[];H&&(H.style.overflow="hidden",k=mo(H,"word"),k.forEach(se=>{se.style.transform="translate3d(0, 100%, 0)",se.style.opacity="0"}));let Z=0,K=!1,X=0;const j=se=>{if(!t||!e)return;if(!Gn(e).isActive){g=!0;return}g&&(g=!1,m());const be=Gn(t),$=Gn(o||a),fe=window.innerHeight*.1;if(t._time=Xn(t._time+(t._animating?se:-se),0,2),a&&(a._time=Xn(a._time+(a._animating?se:-se),0,2)),l&&(l._ratio=Es(l._ratio+(l._animating?se:-se))),be.screenRatio>-1&&(t._animating=!0,i()?d.forEach(pe=>{pe.style.transform="translate3d(0, 0, 0)"}):d.forEach((pe,ge)=>{let Le,Pe;ge<2?(Le=ke(t._time-Math.abs(2-ge)/10,.5,1.2,-_,0,Et),Pe=ke(t._time-ge/10,0,1,100,0,Et)):(Le=0,Pe=ke(t._time-ge/10,0,1,-100,0,Et)),pe.style.transform=`translate3d(${Le}px, ${Pe}%, 0)`}),n)){const pe=be.showScreenOffset*-fe*.5;n.style.transform=`translate3d(0, ${pe}px, 0)`}if($.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const pe=$.showScreenOffset*-fe*1.5;if(a&&(a.style.transform=`translate3d(0, ${pe}px, 0)`,i()?v.forEach(ge=>{ge.style.opacity="1",ge.style.transform="translate3d(0, 0, 0)"}):v.forEach((ge,Le)=>{const Pe=ke(a._time-Le/100,0,1,.1,1,zu),tt=ke(a._time-Le/100,0,1,100,0,zu);ge.style.opacity=String(Pe),ge.style.transform=`translate3d(0, ${tt}%, 0)`})),l){const ge=$.showScreenOffset*-fe*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${ge}px) translate3d(0, ${ke(l._ratio,0,1,150,0,Et)}%, 0) rotate(${ke(l._ratio,0,1,10,0,Et)}deg)`,l.style.opacity=String(Et(l._ratio))):(l.style.transform=`translateY(${ge}px)`,l.style.opacity="1")}}if(c){const pe=Gn(c),ge=Es(ke(pe.showScreenOffset,.05,.85,0,1,Et));c.style.opacity=String(ge),c.style.transform=`translate3d(0, ${ke(ge,0,1,80,0,Et)}px, 0) scale(${ke(ge,0,1,.96,1,Et)})`}if(h){const pe=Gn(h);X=Es(ke(pe.showScreenOffset,0,.7,0,1,Et)),h.style.opacity=String(.4+X*.6),h.style.transform=`translate3d(0, ${ke(X,0,1,60,0,Et)}px, 0) scale(${ke(X,0,1,.94,1,Et)})`,K=X>.9,Z=Xn(Z+(K?se:-se*2),0,1.4),f.forEach((ge,Le)=>{const Pe=ke(Z-Le/10,0,.6,0,1,Et),tt=ke(Z-Le/10,0,.6,0,180,Et);ge.style.transform=`scale(${Pe}) rotate(${tt}deg)`,ge.style.display="inline-block"})}},V=se=>{if(!b||!E)return;if(Gn(b).isActive){M&&w();const be=Gn(E),$=Gn(S),he=Gn(P);E._time=Xn(E._time+(E._animating?se:-se),0,2),S&&(S._time=Xn(S._time+(S._animating?se:-se),0,2)),P&&(P._time=Xn(P._time+(P._animating?se:-se),0,1)),be.screenRatio>-1&&(E._animating=!0,i()?I.forEach(fe=>{fe.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):I.forEach((fe,pe)=>{const ge=ke(E._time*1.5-pe/20,0,1,1,0,Et),Le=ke(E._time*1.5-pe/20,0,1,10,0,Et);fe.style.transform=`translate3d(0, ${ge}em, 0) rotate(${Le}deg)`})),$.screenRatio>-1&&S&&(S._animating=!0,i()?R.forEach(fe=>{fe.style.transform="translate3d(0, 0, 0)"}):R.forEach((fe,pe)=>{const ge=ke(S._time-pe/20,0,1,100,0,Et);fe.style.transform=`translate3d(0, ${ge}%, 0)`})),he.screenRatio>-1&&P&&(i()?(P.style.transform="translate3d(0, 0, 0) rotate(0deg)",P.style.opacity="1"):(P._animating=!0,P.style.transform=`translate3d(0, ${ke(P._time,0,1,150,0,Et)}%, 0) rotate(${ke(P._time,0,1,10,0,Et)}deg)`,P.style.opacity=String(Et(P._time))))}else M=!0;L.forEach((be,$)=>{Gn(be).screenRatio>-1&&(be._animating=!0),be._time=Xn(be._time+(be._animating?se:-se),0,1.2);const fe=$%2*.08,pe=ke(be._time-fe,0,1,0,1,Et);be.style.opacity=String(pe),be.style.transform=`translate3d(0, ${(1-pe)*90}px, 0)`})},_e=se=>{if(!H)return;Gn(H).screenRatio>-1&&(H._animating=!0),H._time=Xn(H._time+(H._animating?se:-se),0,2),k.forEach((be,$)=>{const he=ke(H._time-$/20,0,1,0,1,Et),fe=ke(H._time-$/20,0,1,100,0,Et);be.style.opacity=String(he),be.style.transform=`translate3d(0, ${fe}%, 0)`})},xe=()=>{r&&(_=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",xe),{update(se){j(se),V(se),_e(se)},destroy(){window.removeEventListener("resize",xe)}}}const Fa=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new W(-.0112049,-.0141946,0),boxMax:new W(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new W(-.0180006,-.00963629,0),boxMax:new W(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],MS=`
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
`,ES=`
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
`,TS=`
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
`,bS=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function wS(){let i=document.getElementById("lines-canvas");return i||(i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"4"}),document.body.appendChild(i),i)}async function AS(){const i=wS(),e="/zyrax-studio/",t=await Promise.all(Fa.map(m=>Ln(`${e}assets/models/lines/${m.fileName}.buf`))),n=new _c,r=new Ef(0,1,0,-1,-100,100);r.position.z=10;let s;try{s=new mc({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(m){return console.error("Lines WebGL unavailable",m),{update(){},resize(){},destroy(){}}}s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),s.autoClear=!0;const o=[],a=new W,l=new W,c=new ss;for(let m=0;m<Fa.length;m++){const p=Fa[m],b=t[m],E=document.querySelector(p.sectionSelector);if(!E||!b)continue;const S=new mi,P=new mi;S.add(P),n.add(S);const I=new Wt({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:p.aoThreshold},u_color0:{value:new et(p.color0)},u_color1:{value:new et(p.color1)},u_radius:{value:.008}},vertexShader:MS,fragmentShader:ES,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),R=new kt(b,I);R.frustumCulled=!1,P.add(R);const L=new Wt({uniforms:{u_color0:{value:new et(p.color0)},u_color1:{value:new et(p.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:TS,fragmentShader:bS,side:on,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),M=new kt(new Sr(2,2),L);M.frustumCulled=!1,P.add(M);const w=b.attributes.position.array,U=b.attributes.position.count,H=new Float32Array(U);for(let K=0;K<U;K++)H[K]=w[K*3+2];const k=b.attributes.CP,Z=b.attributes.Cd;o.push({data:p,sectionEl:E,container:S,inner:P,mesh:R,mat:I,circle:M,circleMat:L,lineRatioArray:H,cpAttr:k,cdAttr:Z,count:U,offsetY:0})}let h=1,f=1,d=1;const _=()=>{h=window.innerWidth||1,f=window.innerHeight||1,d=Math.sqrt(h*h+f*f),r.left=0,r.right=h,r.top=0,r.bottom=-f,r.updateProjectionMatrix(),s.setSize(h,f,!1)};_(),window.addEventListener("resize",_);const v=m=>{var Le;const{data:p,sectionEl:b,container:E,inner:S,mat:P,circle:I,circleMat:R,lineRatioArray:L,cpAttr:M,cdAttr:w,count:U}=m,k=b.getBoundingClientRect().top+m.offsetY,Z=f,K=p.scrollToRatioFactors;let X=Es(-(k-K[0]*Z)/(K[1]*Z));X=cS(X);const j=.008*ke(h,540,1920,2,1),V=d;S.position.x=p.margin.x*V,S.position.y=p.margin.y*V-k,S.scale.set(V,V,1),P.uniforms.u_showRatio.value=X,P.uniforms.u_radius.value=j;const _e=(Le=b.dataset)==null?void 0:Le.goalPhase,xe=p.id==="goal"&&(_e==="black-tunnel"||_e==="white");E.updateMatrixWorld(!0),c.min.copy(p.boxMin),c.max.copy(p.boxMax),c.applyMatrix4(S.matrixWorld),E.visible=!xe&&c.max.y>-f&&c.min.y<0&&X>.001;let se=0,Ee=0;for(let Pe=0;Pe<U;Pe++)X>=L[Pe]&&(se=Pe,Pe===U-1?Ee=0:Ee=(X-L[Pe])/(L[Pe+1]-L[Pe]||1));const be=se,$=Math.min(se+1,U-1);a.fromArray(M.array,se*3),l.fromArray(M.array,$*3),a.lerp(l,Ee);const he=w.array;let fe=he[be]*(1-Ee)+he[$]*Ee;fe=.9+.1*fe;const pe=Es((X-(p.aoThreshold-.02))/.04);I.position.copy(a),I.scale.set(j,j,1),R.uniforms.u_ao.value=Math.min(1,fe+1-pe);let ge=L[be]*(1-Ee)+L[$]*Ee;ge=1-Math.pow(1-Xn(ge,0,1),2),R.uniforms.u_mixRatio.value=ge},g=()=>{for(const m of o)v(m);s.render(n,r)};return g(),{update:g,resize:_,setGoalOffset(m){const p=o.find(b=>b.data.id==="goal");p&&(p.offsetY=m||0)},destroy(){window.removeEventListener("resize",_),s.dispose(),i.remove()}}}const RS=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),Vf=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};Vf();window.addEventListener("resize",Vf);const Xo=new nd({duration:RS?.95:1.2,smoothWheel:!0,syncTouch:!1});window.lenis=Xo;const qu=document.getElementById("project-list");qu&&(qu.innerHTML=Mp.map(i=>`
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
    </a>`).join(""));const CS=document.getElementById("hero-canvas"),PS=document.getElementById("home-hero-visual-container"),Ni=document.getElementById("home-hero"),Oa=document.getElementById("home-hero-title"),za=document.getElementById("home-hero-visual-container"),Yu=document.getElementById("home-hero-scroll-container"),Gf=document.getElementById("home-goal"),DS=document.getElementById("goal-tunnel-canvas"),LS=document.getElementById("home-goal-tunnel-title"),IS=document.getElementById("home-goal-tunnel-sticky"),US=xS(Gf,LS,IS);let wo=null;const NS=yS();let gr=null,Zu=performance.now();ic.ticker.add(i=>{Xo.raf(i*1e3);const e=performance.now(),t=Math.min(.05,(e-Zu)/1e3);Zu=e,NS.update(t),gr==null||gr.update()});ic.ticker.lagSmoothing(0);Xo.on("scroll",()=>{if(US.updateScroll(),wo==null||wo.updateScroll(),gr==null||gr.update(),!Ni)return;const i=Ni.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));Oa&&(Oa.style.transform=`translate3d(0, ${t*-12}vh, 0)`,Oa.style.opacity=String(Math.max(0,1-t*1.2))),za&&(za.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,za.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),Yu&&(Yu.style.opacity=String(Math.max(0,1-t*2)))});AS().then(i=>{gr=i}).catch(i=>console.error("Scroll lines failed",i));vS(DS,Gf).then(i=>{wo=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{sS(CS,PS).then(()=>Ni==null?void 0:Ni.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),Ni==null||Ni.classList.add("is-in")})});function Wf(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,s)=>{const o=document.createElement("span");o.className=e,o.textContent=r,o.style.transitionDelay=`${s*35}ms`,i.appendChild(o),i.appendChild(document.createTextNode(" "))})}Wf(document.getElementById("home-hero-title"));Wf(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const FS=document.querySelectorAll(".home-hero-scroll-container-cross");FS.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const Xf=document.querySelector("[data-menu]");var $u;($u=document.querySelector("[data-menu-open]"))==null||$u.addEventListener("click",()=>{Xf.hidden=!1,document.body.style.overflow="hidden"});document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",()=>{Xf.hidden=!0,document.body.style.overflow=""})});var Ku;(Ku=document.querySelector("[data-reel]"))==null||Ku.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var ju;(ju=document.querySelector("[data-sound]"))==null||ju.addEventListener("click",i=>{i.currentTarget.classList.toggle("is-on")});var Ju;(Ju=document.querySelector("#end-bottom"))==null||Ju.addEventListener("click",i=>{i.preventDefault(),Xo.scrollTo("#footer-section")});
