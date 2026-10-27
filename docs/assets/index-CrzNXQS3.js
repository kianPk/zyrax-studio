var Xd=Object.defineProperty;var qd=(i,e,t)=>e in i?Xd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var We=(i,e,t)=>qd(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var su="1.3.27";function Xh(i,e,t){return Math.max(i,Math.min(e,t))}function Yd(i,e,t){return(1-t)*i+t*e}function Zd(i,e,t,n){return Yd(i,e,1-Math.exp(-t*n))}function $d(i,e){return(i%e+e)%e}var Kd=class{constructor(){We(this,"isRunning",!1);We(this,"value",0);We(this,"from",0);We(this,"to",0);We(this,"currentTime",0);We(this,"lerp");We(this,"duration");We(this,"easing");We(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=Xh(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Zd(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function jd(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Jd=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){We(this,"width",0);We(this,"height",0);We(this,"scrollHeight",0);We(this,"scrollWidth",0);We(this,"debouncedResize");We(this,"wrapperResizeObserver");We(this,"contentResizeObserver");We(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});We(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});We(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=jd(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},qh=class{constructor(){We(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,s=t.length;r<s;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Qd=100/6,Ki={passive:!1};function ou(i,e){return i===1?Qd:i===2?e:1}var ep=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){We(this,"touchStart",{x:0,y:0});We(this,"lastDelta",{x:0,y:0});We(this,"window",{width:0,height:0});We(this,"emitter",new qh);We(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});We(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});We(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});We(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=ou(n,this.window.width),s=ou(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});We(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ki),this.element.addEventListener("touchstart",this.onTouchStart,Ki),this.element.addEventListener("touchmove",this.onTouchMove,Ki),this.element.addEventListener("touchend",this.onTouchEnd,Ki)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ki),this.element.removeEventListener("touchstart",this.onTouchStart,Ki),this.element.removeEventListener("touchmove",this.onTouchMove,Ki),this.element.removeEventListener("touchend",this.onTouchEnd,Ki)}};const au=i=>Math.min(1,1.001-2**(-10*i));var tp=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:_=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:b=!0,autoRaf:M=!1,anchors:S=!1,autoToggle:P=!1,allowNestedScroll:I=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:L=R,stopInertiaOnNavigate:E=!1,respectReducedMotion:T=!0}={}){We(this,"_isScrolling",!1);We(this,"_isStopped",!1);We(this,"_isLocked",!1);We(this,"_preventNextNativeScrollEvent",!1);We(this,"_resetVelocityTimeout",null);We(this,"_rafId",null);We(this,"_isDraggingSelection",!1);We(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));We(this,"isTouching");We(this,"isIos");We(this,"time",0);We(this,"userData",{});We(this,"lastVelocity",0);We(this,"velocity",0);We(this,"direction",0);We(this,"options");We(this,"targetScroll");We(this,"animatedScroll");We(this,"animate",new Kd);We(this,"emitter",new qh);We(this,"dimensions");We(this,"virtualScroll");We(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});We(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});We(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});We(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});We(this,"onPointerDown",i=>{i.button===1&&this.reset()});We(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,m,p,b,M;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((m=v.hasAttribute)==null?void 0:m.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent-touch"))||s&&((M=v.hasAttribute)==null?void 0:M.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});We(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});We(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=su,window.lenis||(window.lenis={}),window.lenis.version=su,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=au:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:_,wheelMultiplier:v,autoResize:g,prevent:m,virtualScroll:p,overscroll:b,autoRaf:M,anchors:S,autoToggle:P,allowNestedScroll:I,naiveDimensions:L,stopInertiaOnNavigate:E,respectReducedMotion:T},this.dimensions=new Jd(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new ep(t,{touchMultiplier:_,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=i,_=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let v=null;if(typeof d=="string"?(v=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),v||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(v=d),v){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();_-=this.isHorizontal?S.left:S.top}const g=v.getBoundingClientRect(),m=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),b=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(M)?0:M)}}if(typeof d=="number"){if(d+=_,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=d-this.animatedScroll;v>this.limit/2?d-=this.limit:v<-this.limit/2&&(d+=this.limit)}}else d=Xh(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=au:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,o,a,l,c,u,f,d,_,v;if(n-(r.time??0)>2e3){r.time=Date.now();const I=window.getComputedStyle(i);if(r.computedStyle=I,s=["auto","overlay","scroll"].includes(I.overflowX),o=["auto","overlay","scroll"].includes(I.overflowY),c=["auto"].includes(I.overscrollBehaviorX),u=["auto"].includes(I.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=i.scrollWidth,d=i.scrollHeight,_=i.clientWidth,v=i.clientHeight,a=f>_,l=d>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=d,r.clientWidth=_,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,d=r.scrollHeight,_=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,b,M,S,P;if(g==="horizontal")m=Math.round(i.scrollLeft),p=f-_,b=e,M=s,S=a,P=c;else if(g==="vertical")m=Math.round(i.scrollTop),p=d-v,b=t,M=o,S=l,P=u;else return!1;return!P&&(m>=p||m<=0)?!0:(b>0?m<p:m>0)&&M&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?$d(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function Di(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Yh(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oo={duration:.5,overwrite:!1,delay:0},vc,jt,Rt,Qn=1e8,wt=1/Qn,vl=Math.PI*2,np=vl/4,ip=0,Zh=Math.sqrt,rp=Math.cos,sp=Math.sin,Zt=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},Hi=function(e){return typeof e=="number"},xc=function(e){return typeof e>"u"},Mi=function(e){return typeof e=="object"},En=function(e){return e!==!1},Sc=function(){return typeof window<"u"},Eo=function(e){return Ft(e)||Zt(e)},$h=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,op=/random\([^)]+\)/g,ap=/,\s*/g,lu=/(?:-?\.?\d|\.)+/gi,Kh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,as=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Aa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jh=/[+-]=-?[.\d]+/,lp=/[^,'"\[\]\s]+/gi,cp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,gi,xl,yc,kn={},la={},Jh,Qh=function(e){return(la=gs(e,kn))&&Rn},Mc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ao=function(e,t){return!t&&console.warn(e)},ef=function(e,t){return e&&(kn[e]=t)&&la&&(la[e]=t)||kn},lo=function(){return 0},up={suppressEvents:!0,isStart:!0,kill:!1},Qo={suppressEvents:!0,kill:!1},hp={suppressEvents:!0},Ec={},ur=[],Sl={},tf,In={},Ra={},cu=30,ea=[],wc="",bc=function(e){var t=e[0],n,r;if(Mi(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ea.length;r--&&!ea[r].targetTest(t););n=ea[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new wf(e[r],n)))||e.splice(r,1);return e},Or=function(e){return e._gsap||bc(ei(e))[0]._gsap},nf=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():xc(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},hs=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},fp=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ca=function(){var e=ur.length,t=ur.slice(0),n,r;for(Sl={},ur.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Tc=function(e){return!!(e._initted||e._startAt||e.add)},rf=function(e,t,n,r){ur.length&&!jt&&ca(),e.render(t,n,!!(jt&&t<0&&Tc(e))),ur.length&&!jt&&ca()},sf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lp).length<2?t:Zt(e)?e.trim():e},of=function(e){return e},Hn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dp=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},gs=function(e,t){for(var n in t)e[n]=t[n];return e},uu=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ua=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},js=function(e){var t=e.parent||Lt,n=e.keyframes?dp(ln(e.keyframes)):Hn;if(En(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},pp=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},af=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},xa=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},dr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},mp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yl=function(e,t,n,r){return e._startAt&&(jt?e._startAt.revert(Qo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},_p=function i(e){return!e||e._ts&&i(e.parent)},hu=function(e){return e._repeat?vs(e._tTime,e=e.duration()+e._rDelay)*e:0},vs=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},ha=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sa=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},ya=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sa(e),n._dirty||zr(n,e)),e},lf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ha(e.rawTime(),t),(!t._dur||go(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},xi=function(e,t,n,r){return t.parent&&dr(t),t._start=Dt((Hi(n)?n:n||e!==Lt?Kn(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),af(e,t,"_first","_last",e._sort?"_start":0),Ml(t)||(e._recent=t),r||lf(e,t),e._ts<0&&ya(e,e._tTime),e},cf=function(e,t){return(kn.ScrollTrigger||Mc("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},uf=function(e,t,n,r,s){if(Rc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&tf!==Un.frame)return ur.push(e),e._lazy=[s,r],1},gp=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ml=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vp=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&gp(e)&&!(!e._initted&&Ml(e))||(e._ts<0||e._dp._ts<0)&&!Ml(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=go(0,e._tDur,t),u=vs(l,a),e._yoyo&&u&1&&(o=1-o),u!==vs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||jt||r||e._zTime===wt||!t&&e._zTime){if(!e._initted&&uf(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&yl(e,t,n,!0),e._onUpdate&&!n&&Nn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&dr(e,1),!n&&!jt&&(Nn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xp=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},xs=function(e,t,n,r){var s=e._repeat,o=Dt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Dt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&ya(e,e._tTime=e._tDur*a),e.parent&&Sa(e),n||zr(e.parent,e),e},fu=function(e){return e instanceof xn?zr(e):xs(e,e._dur)},Sp={_start:0,endTime:lo,totalDuration:lo},Kn=function i(e,t,n){var r=e.labels,s=e._recent||Sp,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,c;return Zt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Js=function(e,t,n){var r=Hi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;o.immediateRender=En(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ht(t[0],o,t[s+1])},gr=function(e,t){return e||e===0?t(e):t},go=function(e,t,n){return n<e?e:n>t?t:n},an=function(e,t){return!Zt(e)||!(t=cp.exec(e))?"":t[1]},yp=function(e,t,n){return gr(n,function(r){return go(e,t,r)})},El=[].slice,hf=function(e,t){return e&&Mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==gi},Mp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Zt(r)&&!t||hf(r,1)?(s=n).push.apply(s,ei(r)):n.push(r)})||n},ei=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):Zt(e)&&!n&&(xl||!Ss())?El.call((t||yc).querySelectorAll(e),0):ln(e)?Mp(e,n):hf(e)?El.call(e,0):e?[e]:[]},wl=function(e){return e=ei(e)[0]||ao("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ei(t,n.querySelectorAll?n:n===e?ao("Invalid scope")||yc.createElement("div"):e)}},ff=function(e){return e.sort(function(){return .5-Math.random()})},df=function(e){if(Ft(e))return e;var t=Mi(e)?e:{each:e},n=Br(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Zt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,_,v){var g=(v||t).length,m=o[g],p,b,M,S,P,I,R,L,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!E){for(R=-Qn;R<(R=v[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(m=o[g]=[],p=l?Math.min(E,g)*u-.5:r%E,b=E===Qn?0:l?g*f/E-.5:r/E|0,R=0,L=Qn,I=0;I<g;I++)M=I%E-p,S=b-(I/E|0),m[I]=P=c?Math.abs(c==="y"?S:M):Zh(M*M+S*S),P>R&&(R=P),P<L&&(L=P);r==="random"&&ff(m),m.max=R-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(E>g?g-1:c?c==="y"?g/E:E:Math.max(E,g/E))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=an(t.amount||t.each)||0,n=n&&g<0?Np(n):n}return g=(m[d]-m.min)/m.max||0,Dt(m.b+(n?n(g):g)*m.v)+m.u}},bl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Dt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Hi(n)?0:an(n))}},pf=function(e,t){var n=ln(e),r,s;return!n&&Mi(e)&&(r=n=e.radius||Qn,e.values?(e=ei(e.values),(s=!Hi(e[0]))&&(r*=r)):e=bl(e.increment)),gr(t,n?Ft(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qn,u=0,f=e.length,d,_;f--;)s?(d=e[f].x-a,_=e[f].y-l,d=d*d+_*_):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Hi(o)?u:u+an(o)}:bl(e))},mf=function(e,t,n,r){return gr(ln(e)?!t:n===!0?!!(n=0):!r,function(){return ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Ep=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},wp=function(e,t){return function(n){return e(parseFloat(n))+(t||an(n))}},bp=function(e,t,n){return gf(e,t,0,1,n)},_f=function(e,t,n){return gr(n,function(r){return e[~~t(r)]})},Tp=function i(e,t,n){var r=t-e;return ln(e)?_f(e,i(0,e.length),t):gr(n,function(s){return(r+(s-e)%r)%r+e})},Ap=function i(e,t,n){var r=t-e,s=r*2;return ln(e)?_f(e,i(0,e.length-1),t):gr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},co=function(e){return e.replace(op,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(ap);return mf(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},gf=function(e,t,n,r,s){var o=t-e,a=r-n;return gr(s,function(l){return n+((l-e)/o*a||0)})},Rp=function i(e,t,n,r){var s=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!s){var o=Zt(e),a={},l,c,u,f,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(v){v*=f;var g=Math.min(d,~~v);return u[g](v-g)},n=t}else r||(e=gs(ln(e)?[]:{},e));if(!u){for(l in t)Ac.call(a,e,l,"get",t[l]);s=function(v){return Dc(v,a)||(o?e.p:e)}}}return gr(n,s)},du=function(e,t,n){var r=e.labels,s=Qn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Nn=function(e,t,n){var r=e.vars,s=r[t],o=Rt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&ur.length&&ca(),a&&(Rt=a),u=l?s.apply(c,l):s.call(c),Rt=o,u},Xs=function(e){return dr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!jt),e.progress()<1&&Nn(e,"onInterrupt"),e},ls,vf=[],xf=function(e){if(e)if(e=!e.name&&e.default||e,Sc()||e.headless){var t=e.name,n=Ft(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:lo,render:Dc,add:Ac,kill:Xp,modifier:Wp,rawVars:0},o={targetTest:0,get:0,getSetter:Pc,aliases:{},register:0};if(Ss(),e!==r){if(In[t])return;Hn(r,Hn(ua(e,s),o)),gs(r.prototype,gs(s,ua(e,o))),In[r.prop=t]=r,e.targetTest&&(ea.push(r),Ec[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ef(t,r),e.register&&e.register(Rn,r,bn)}else vf.push(e)},Et=255,qs={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},Ca=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},Sf=function(e,t,n){var r=e?Hi(e)?[e>>16,e>>8&Et,e&Et]:0:qs.black,s,o,a,l,c,u,f,d,_,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),qs[e])r=qs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Et,r&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(lu),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ca(l+1/3,s,o),r[1]=Ca(l,s,o),r[2]=Ca(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Kh),n&&r.length<4&&(r[3]=1),r}else r=e.match(lu)||qs.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/Et,o=r[1]/Et,a=r[2]/Et,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(_=f-d,c=u>.5?_/(2-f-d):_/(f+d),l=f===s?(o-a)/_+(o<a?6:0):f===o?(a-s)/_+2:(s-o)/_+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},yf=function(e){var t=[],n=[],r=-1;return e.split(hr).forEach(function(s){var o=s.match(as)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},pu=function(e,t,n){var r="",s=(e+r).match(hr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Sf(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=yf(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(hr,"1").split(as),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(hr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},hr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in qs)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Cp=/hsl[a]?\(/,Mf=function(e){var t=e.join(" "),n;if(hr.lastIndex=0,hr.test(t))return n=Cp.test(t),e[1]=pu(e[1],n),e[0]=pu(e[0],n,yf(e[1])),!0},uo,Un=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,d,_,v=function g(m){var p=i()-r,b=m===!0,M,S,P,I;if((p>e||p<0)&&(n+=p-t),r+=p,P=r-n,M=P-o,(M>0||b)&&(I=++f.frame,d=P-f.time*1e3,f.time=P=P/1e3,o+=M+(M>=s?4:s-M),S=1),b||(l=c(g)),S)for(_=0;_<a.length;_++)a[_](P,d,I,m)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Jh&&(!xl&&Sc()&&(gi=xl=window,yc=gi.document||{},kn.gsap=Rn,(gi.gsapVersions||(gi.gsapVersions=[])).push(Rn.version),Qh(la||gi.GreenSockGlobals||!gi.gsap&&gi||{}),vf.forEach(xf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},uo=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),uo=0,c=lo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,b){var M=p?function(S,P,I,R){m(S,P,I,R),f.remove(M)}:m;return f.remove(m),a[b?"unshift":"push"](M),Ss(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&_>=p&&_--},_listeners:a},f})(),Ss=function(){return!uo&&Un.wake()},dt={},Pp=/^[\d.\-M][\d.\-,\s]/,Dp=/["']/g,Lp=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Dp,"").trim():+c,r=l.substr(a+1).trim();return t},Ip=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Up=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Lp(t[1])]:Ip(e).split(",").map(sf)):dt._CE&&Pp.test(e)?dt._CE("",e):n},Np=function(e){return function(t){return 1-e(1-t)}},Br=function(e,t){return e&&(Ft(e)?e:dt[e]||Up(e))||t},Wr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return wn(e,function(a){dt[a]=kn[a]=s,dt[o=a.toLowerCase()]=n;for(var l in s)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=s[l]}),s},Ef=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pa=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/vl*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*sp((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ef(a);return s=vl/s,l.config=function(c,u){return i(e,c,u)},l},Da=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ef(n);return r.config=function(s){return i(e,s)},r};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Wr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;Wr("Elastic",Pa("in"),Pa("out"),Pa());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Wr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Wr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Wr("Circ",function(i){return-(Zh(1-i*i)-1)});Wr("Sine",function(i){return i===1?1:-rp(i*np)+1});Wr("Back",Da("in"),Da("out"),Da());dt.SteppedEase=dt.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-wt;return function(a){return((r*go(0,o,a)|0)+s)*n}}};oo.ease=dt["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return wc+=i+","+i+"Params,"});var wf=function(e,t){this.id=ip++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nf,this.set=t?t.getSetter:Pc},ho=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,xs(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),uo||Un.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,xs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ss(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ya(this,n),!s._dp||s.parent||lf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rf(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hu(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hu(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?vs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ha(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(go(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Sa(this),mp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ss(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&xi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ha(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=hp);var r=jt;return jt=n,Tc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),jt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,fu(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Kn(this,n),En(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,En(r)),this._dur||(this._zTime=-wt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Ft(n)?n:of,l=function(){var u=r.then;r.then=null,s&&s(),Ft(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Xs(this)},i})();Hn(ho.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var xn=(function(i){Yh(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=En(n.sortChildren),Lt&&xi(n.parent||Lt,Di(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&cf(Di(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Js(0,arguments,this),this},t.from=function(r,s,o){return Js(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Js(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,js(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(r,s,Kn(this,o),1),this},t.call=function(r,s,o){return xi(this,Ht.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ht(r,o,Kn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,js(o).immediateRender=En(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,js(a).immediateRender=En(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Dt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,_,v,g,m,p,b,M,S,P,I,R;if(this!==Lt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,S=this._start,M=this._ts,p=!M,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Dt(u%m),u===l?(g=this._repeat,d=c):(P=Dt(u/m),g=~~P,g&&g===P&&(d=c,g--),d>c&&(d=c)),P=vs(this._tTime,m),!a&&this._tTime&&P!==g&&this._tTime-P*m-this._dur<=0&&(P=g),I&&g&1&&(d=c-d,R=1),g!==P&&!this._lock){var L=I&&P&1,E=L===(I&&g&1);if(g<P&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(R?0:Dt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,P=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=xp(this,Dt(a),Dt(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!P&&(Nn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(_=this._first;_;){if(v=_._next,(_._act||d>=_._start)&&_._ts&&b!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(d-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(d-_._start)*_._ts,s,o),d!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=-wt);break}}_=v}else{_=this._last;for(var T=r<0?r:d;_;){if(v=_._prev,(_._act||T<=_._end)&&_._ts&&b!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(T-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(T-_._start)*_._ts,s,o||jt&&Tc(_)),d!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=T?-wt:wt);break}}_=v}}if(b&&!s&&(this.pause(),b.render(d>=a?0:-wt)._zTime=d>=a?1:-1,this._ts))return this._start=S,Sa(this),this.render(r,s,o);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&dr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Nn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Hi(s)||(s=Kn(this,s,r)),!(r instanceof ho)){if(ln(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Zt(r))return this.addLabel(r,s);if(Ft(r))r=Ht.delayedCall(0,r);else return this}return this!==r?xi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ht?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Zt(r)?this.removeLabel(r):Ft(r)?this.killTweensOf(r):(r.parent===this&&xa(this,r),r===this._recent&&(this._recent=this._last),zr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Un.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Kn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Ht.delayedCall(0,s||lo,o);return a.data="isPause",this._hasPause=1,xi(this,a,Kn(this,r))},t.removePause=function(r){var s=this._first;for(r=Kn(this,r);s;)s._start===r&&s.data==="isPause"&&dr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ar!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ei(r),l=this._first,c=Hi(s),u;l;)l instanceof Ht?fp(l._targets,a)&&(c?(!ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Kn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,_,v=Ht.to(o,Hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!_){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==m&&xs(v,m,0,1).render(v._time,!0,!0),_=1}u&&u.apply(v,f||[])}},s));return d?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Hn({startAt:{time:Kn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),du(this,Kn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),du(this,Kn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Dt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return zr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),zr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Qn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Dt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;xs(o,o===Lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Lt._ts&&(rf(Lt,ha(r,Lt)),tf=Un.frame),Un.frame>=cu){cu+=zn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&zn.autoSleep&&Un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Un.sleep()}}},e})(ho);Hn(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fp=function(e,t,n,r,s,o,a){var l=new bn(this._pt,e,t,0,1,Pf,null,s),c=0,u=0,f,d,_,v,g,m,p,b;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=co(r)),o&&(b=[n,r],o(b,e,t),n=b[0],r=b[1]),d=n.match(Aa)||[];f=Aa.exec(r);)v=f[0],g=r.substring(c,f.index),_?_=(_+1)%5:g.substr(-5)==="rgba("&&(_=1),v!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:v.charAt(1)==="="?hs(m,v)-m:parseFloat(v)-m,m:_&&_<4?Math.round:0},c=Aa.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(jh.test(r)||p)&&(l.e=0),this._pt=l,l},Ac=function(e,t,n,r,s,o,a,l,c,u){Ft(r)&&(r=r(s||0,e,o));var f=e[t],d=n!=="get"?n:Ft(f)?c?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,_=Ft(f)?c?Hp:Rf:Cc,v;if(Zt(r)&&(~r.indexOf("random(")&&(r=co(r)),r.charAt(1)==="="&&(v=hs(d,r)+(an(d)||0),(v||v===0)&&(r=v))),!u||d!==r||Tl)return!isNaN(d*r)&&r!==""?(v=new bn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?Gp:Cf,0,_),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&Mc(t,r),Fp.call(this,e,t,d,r,_,l||zn.stringFilter,c))},Op=function(e,t,n,r,s){if(Ft(e)&&(e=Qs(e,s,t,n,r)),!Mi(e)||e.style&&e.nodeType||ln(e)||$h(e))return Zt(e)?Qs(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Qs(e[a],s,t,n,r);return o},bf=function(e,t,n,r,s,o){var a,l,c,u;if(In[e]&&(a=new In[e]).init(s,a.rawVars?t[e]:Op(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new bn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ls))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ar,Tl,Rc=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,_=r.autoRevert,v=e._dur,g=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!vc,S=e.timeline,P=r.easeReverse||f,I,R,L,E,T,U,H,k,q,j,W,Y,G;if(S&&(!d||!s)&&(s="none"),e._ease=Br(s,oo.ease),e._rEase=P&&(Br(P)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(k=m[0]?Or(m[0]).harness:0,Y=k&&r[k.prop],I=ua(r,Ec),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!_?g.render(-1,!0):g.revert(u&&v?Qo:up),g._lazy=0),o){if(dr(e._startAt=Ht.set(m,Hn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&En(l),startAt:null,delay:0,onUpdate:c&&function(){return Nn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt||!a&&!_)&&e._startAt.revert(Qo),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),L=Hn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&En(l),immediateRender:a,stagger:0,parent:p},I),Y&&(L[k.prop]=Y),dr(e._startAt=Ht.set(m,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt?e._startAt.revert(Qo):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&En(l)||l&&!v,R=0;R<m.length;R++){if(T=m[R],H=T._gsap||bc(m)[R]._gsap,e._ptLookup[R]=j={},Sl[H.id]&&ur.length&&ca(),W=b===m?R:b.indexOf(T),k&&(q=new k).init(T,Y||I,e,W,b)!==!1&&(e._pt=E=new bn(e._pt,T,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(ue){j[ue]=E}),q.priority&&(U=1)),!k||Y)for(L in I)In[L]&&(q=bf(L,I,e,W,T,b))?q.priority&&(U=1):j[L]=E=Ac.call(e,T,L,"get",I[L],W,b,0,r.stringFilter);e._op&&e._op[R]&&e.kill(T,e._op[R]),M&&e._pt&&(ar=e,Lt.killTweensOf(T,j,e.globalTime(t)),G=!e.parent,ar=0),e._pt&&l&&(Sl[H.id]=1)}U&&Df(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&S.render(Qn,!0,!0)},zp=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,_;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,_=e._targets.length;_--;){if(u=d[_][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Tl=1,e.vars[t]="+=0",Rc(e,a),Tl=0,l?ao(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(_=c.length;_--;)f=c[_],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ot(n)+an(f.e)),f.b&&(f.b=u.s+an(f.b))},Bp=function(e,t){var n=e[0]?Or(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=gs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},kp=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(ln(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Qs=function(e,t,n,r,s){return Ft(e)?e.call(t,n,r,s):Zt(e)&&~e.indexOf("random(")?co(e):e},Tf=wc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Af={};wn(Tf+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Af[i]=1});var Ht=(function(i){Yh(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:js(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,_=l.overwrite,v=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=r.parent||Lt,b=(ln(n)||$h(n)?Hi(n[0]):"length"in r)?[n]:ei(n),M,S,P,I,R,L,E,T;if(a._targets=b.length?bc(b):ao("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=_,v||d||Eo(c)||Eo(u)){r=a.vars;var U=r.easeReverse||r.yoyoEase;if(M=a.timeline=new xn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),M.kill(),M.parent=M._dp=Di(a),M._start=0,d||Eo(c)||Eo(u)){if(I=b.length,E=d&&df(d),Mi(d))for(R in d)~Tf.indexOf(R)&&(T||(T={}),T[R]=d[R]);for(S=0;S<I;S++)P=ua(r,Af),P.stagger=0,U&&(P.easeReverse=U),T&&gs(P,T),L=b[S],P.duration=+Qs(c,Di(a),S,L,b),P.delay=(+Qs(u,Di(a),S,L,b)||0)-a._delay,!d&&I===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),M.to(L,P,E?E(S,L,b):0),M._ease=dt.none;M.duration()?c=u=0:a.timeline=0}else if(v){js(Hn(M.vars.defaults,{ease:"none"})),M._ease=Br(v.ease||r.ease||"none");var H=0,k,q,j;if(ln(v))v.forEach(function(W){return M.to(b,W,">")}),M.duration();else{P={};for(R in v)R==="ease"||R==="easeEach"||kp(R,v[R],P,v.easeEach);for(R in P)for(k=P[R].sort(function(W,Y){return W.t-Y.t}),H=0,S=0;S<k.length;S++)q=k[S],j={ease:q.e,duration:(q.t-(S?k[S-1].t:0))/100*c},j[R]=q.v,M.to(b,j,H),H+=j.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return _===!0&&!vc&&(ar=Di(a),Lt.killTweensOf(b),ar=0),xi(p,Di(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!v&&a._start===Dt(p._time)&&En(f)&&_p(Di(a))&&p.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-u)||0)),m&&cf(Di(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-wt&&!u?l:r<wt?0:r,d,_,v,g,m,p,b,M;if(!c)vp(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(d=Dt(f%g),f===l?(v=this._repeat,d=c):(m=Dt(f/g),v=~~m,v&&v===m?(d=c,v--):d>c&&(d=c)),p=this._yoyo&&v&1,p&&(d=c-d),m=vs(this._tTime,g),d===a&&!o&&this._initted&&v===m)return this._tTime=f,this;v!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Dt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(uf(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var P=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=P?(S?-1:1)/P:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/c);if(this._from&&(this.ratio=b=1-b),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Nn(this,"onStart"),this._tTime!==f))return this;for(_=this._pt;_;)_.r(b,_.d),_=_._next;M&&M.render(r<0?r:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&yl(this,r,s,o),Nn(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&yl(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&dr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Nn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){uo||Un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Rc(this,c),u=this._ease(c/this._dur),zp(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(ya(this,0),this.parent||af(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Xs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!jt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ar&&ar.vars.overwrite!==!0)._first||Xs(this),this.parent&&o!==this.timeline.totalDuration()&&xs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ei(r):a,c=this._ptLookup,u=this._pt,f,d,_,v,g,m,p;if((!s||s==="all")&&pp(a,l))return s==="all"&&(this._pt=0),Xs(this);for(f=this._op=this._op||[],s!=="all"&&(Zt(s)&&(g={},wn(s,function(b){return g[b]=1}),s=g),s=Bp(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,v=d,_={}):(_=f[p]=f[p]||{},v=s);for(g in v)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&xa(this,m,"_pt"),delete d[g]),_!=="all"&&(_[g]=1)}return this._initted&&!this._pt&&u&&Xs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Js(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Js(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Lt.killTweensOf(r,s,o)},e})(ho);Hn(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(i){Ht[i]=function(){var e=new xn,t=El.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Cc=function(e,t,n){return e[t]=n},Rf=function(e,t,n){return e[t](n)},Hp=function(e,t,n,r){return e[t](r.fp,n)},Vp=function(e,t,n){return e.setAttribute(t,n)},Pc=function(e,t){return Ft(e[t])?Rf:xc(e[t])&&e.setAttribute?Vp:Cc},Cf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Gp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Pf=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Dc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Wp=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Xp=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xa(this,t,"_pt"):t.dep||(n=1),t=r;return!n},qp=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Df=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},bn=(function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Cf,this.d=l||this,this.set=c||Cc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=qp,this.m=n,this.mt=s,this.tween=r},i})();wn(wc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Ec[i]=1});kn.TweenMax=kn.TweenLite=Ht;kn.TimelineLite=kn.TimelineMax=xn;Lt=new xn({sortChildren:!1,defaults:oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=Mf;var kr=[],ta={},Yp=[],mu=0,Zp=0,La=function(e){return(ta[e]||Yp).map(function(t){return t()})},Al=function(){var e=Date.now(),t=[];e-mu>2&&(La("matchMediaInit"),kr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=gi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),La("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),mu=e,La("matchMedia"))},Lf=(function(){function i(t,n){this.selector=n&&wl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Zp++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Ft(n)&&(s=r,r=n,n=Ft);var o=this,a=function(){var c=Rt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=wl(s)),Rt=o,f=r.apply(o,arguments),Ft(f)&&o._r.push(f),Rt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Ft?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Rt;Rt=null,n(this),Rt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ht&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=kr.length;o--;)kr[o].id===this.id&&kr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),$p=(function(){function i(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Mi(n)||(n={matches:n});var o=new Lf(0,s||this.scope),a=o.conditions={},l,c,u;Rt&&!o.selector&&(o.selector=Rt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=gi.matchMedia(n[c]),l&&(kr.indexOf(o)<0&&kr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Al):l.addEventListener("change",Al)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),fa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return xf(r)})},timeline:function(e){return new xn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Zt(e)&&(e=ei(e)[0]);var s=Or(e||{}).get,o=n?of:sf;return n==="native"&&(n=""),e&&(t?o((In[t]&&In[t].get||s)(e,t,n,r)):function(a,l,c){return o((In[a]&&In[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ei(e),e.length>1){var r=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=In[t],a=Or(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ls._pt=0,f.init(e,n?u+n:u,ls,0,[e]),f.render(1,f),ls._pt&&Dc(1,ls)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Rn.to(e,Hn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Br(e.ease,oo.ease)),uu(oo,e||{})},config:function(e){return uu(zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!In[a]&&!kn[a]&&ao(t+" effect requires "+a+" plugin.")}),Ra[t]=function(a,l,c){return n(ei(a),Hn(l||{},s),c)},o&&(xn.prototype[t]=function(a,l,c){return this.add(Ra[t](a,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=Br(t)},parseEase:function(e,t){return arguments.length?Br(e,t):dt},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new xn(e),r,s;for(n.smoothChildTiming=En(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,r=Lt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ht&&r.vars.onComplete===r._targets[0]))&&xi(n,r,r._start-r._delay),r=s;return xi(Lt,n,0),n},context:function(e,t){return e?new Lf(e,t):Rt},matchMedia:function(e){return new $p(e)},matchMediaRefresh:function(){return kr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Al()},addEventListener:function(e,t){var n=ta[e]||(ta[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ta[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Tp,wrapYoyo:Ap,distribute:df,random:mf,snap:pf,normalize:bp,getUnit:an,clamp:yp,splitColor:Sf,toArray:ei,selector:wl,mapRange:gf,pipe:Ep,unitize:wp,interpolate:Rp,shuffle:ff},install:Qh,effects:Ra,ticker:Un,updateRoot:xn.updateRoot,plugins:In,globalTimeline:Lt,core:{PropTween:bn,globals:ef,Tween:Ht,Timeline:xn,Animation:ho,getCache:Or,_removeLinkedListItem:xa,reverting:function(){return jt},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return vc=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return fa[i]=Ht[i]});Un.add(xn.updateRoot);ls=fa.to({},{duration:0});var Kp=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},jp=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Kp(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Ia=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Zt(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}jp(a,s)}}}},Rn=fa.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)jt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ia("roundProps",bl),Ia("modifiers"),Ia("snap",pf))||fa;Ht.version=xn.version=Rn.version="3.15.0";Jh=1;Sc()&&Ss();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _u,lr,fs,Lc,Ur,gu,Ic,Jp=function(){return typeof window<"u"},Vi={},Pr=180/Math.PI,ds=Math.PI/180,Xr=Math.atan2,vu=1e8,Uc=/([A-Z])/g,Qp=/(left|right|width|margin|padding|x)/i,em=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},im=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},If=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Uf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sm=function(e,t,n){return e.style[t]=n},om=function(e,t,n){return e.style.setProperty(t,n)},am=function(e,t,n){return e._gsap[t]=n},lm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},cm=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},um=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},It="transform",Tn=It+"Origin",hm=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Vi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Li(r,a)}):this.tfm[e]=o.x?o[e]:Li(r,e),e===Tn&&(this.tfm.zOrigin=o.zOrigin);else return Si.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(It)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Tn,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},Nf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fm=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Uc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ic(),(!s||!s.isStart)&&!n[It]&&(Nf(n),r.zOrigin&&n[Tn]&&(n[Tn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ff=function(e,t){var n={target:e,props:[],revert:fm,save:hm};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Of,Cl=function(e,t){var n=lr.createElementNS?lr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):lr.createElement(e);return n&&n.style?n:lr.createElement(e)},Fn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Uc,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ys(t)||t,1)||""},xu="O,Moz,ms,Ms,Webkit".split(","),ys=function(e,t,n){var r=t||Ur,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(xu[o]+e in s););return o<0?null:(o===3?"ms":o>=0?xu[o]:"")+e},Pl=function(){Jp()&&window.document&&(_u=window,lr=_u.document,fs=lr.documentElement,Ur=Cl("div")||{style:{}},Cl("div"),It=ys(It),Tn=It+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Of=!!ys("perspective"),Ic=Rn.core.reverting,Lc=1)},Su=function(e){var t=e.ownerSVGElement,n=Cl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),fs.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),fs.removeChild(n),s},yu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zf=function(e){var t,n;try{t=e.getBBox()}catch{t=Su(e),n=1}return t&&(t.width||t.height)||n||(t=Su(e)),t&&!t.width&&!t.x&&!t.y?{x:+yu(e,["x","cx","x1"])||0,y:+yu(e,["y","cy","y1"])||0,width:0,height:0}:t},Bf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zf(e))},pr=function(e,t){if(t){var n=e.style,r;t in Vi&&t!==Tn&&(t=It),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Uc,"-$1").toLowerCase())):n.removeAttribute(t)}},cr=function(e,t,n,r,s,o){var a=new bn(e._pt,t,n,0,1,o?Uf:If);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Mu={deg:1,rad:1,turn:1},dm={grid:1,flex:1},mr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ur.style,l=Qp.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",_=r==="%",v,g,m,p;if(r===o||!s||Mu[r]||Mu[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&Bf(e),(_||o==="%")&&(Vi[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Ot(_?s/v*f:s/100*v);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===lr||!g.appendChild)&&(g=lr.body),m=g._gsap,m&&_&&m.width&&l&&m.time===Un.time&&!m.uncache)return Ot(s/m.width*f);if(_&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=f+r,v=e[u],b?e.style[t]=b:pr(e,t)}else(_||o==="%")&&!dm[Fn(g,"display")]&&(a.position=Fn(e,"position")),g===e&&(a.position="static"),g.appendChild(Ur),v=Ur[u],g.removeChild(Ur),a.position="absolute";return l&&_&&(m=Or(g),m.time=Un.time,m.width=g[u]),Ot(d?v*s/f:v&&s?f/v*s:0)},Li=function(e,t,n,r){var s;return Lc||Pl(),t in Si&&t!=="transform"&&(t=Si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vi[t]&&t!=="transform"?(s=po(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:pa(Fn(e,Tn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=da[t]&&da[t](e,t,n)||Fn(e,t)||nf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?mr(e,t,s,n)+n:s},pm=function(e,t,n,r){if(!n||n==="none"){var s=ys(t,e,1),o=s&&Fn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Fn(e,"borderTopColor"))}var a=new bn(this._pt,e.style,t,0,1,Pf),l=0,c=0,u,f,d,_,v,g,m,p,b,M,S,P;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Fn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Fn(e,t)||r,g?e.style[t]=g:pr(e,t)),u=[n,r],Mf(u),n=u[0],r=u[1],d=n.match(as)||[],P=r.match(as)||[],P.length){for(;f=as.exec(r);)m=f[0],b=r.substring(l,f.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),m!==(g=d[c++]||"")&&(_=parseFloat(g)||0,S=g.substr((_+"").length),m.charAt(1)==="="&&(m=hs(_,m)+S),p=parseFloat(m),M=m.substr((p+"").length),l=as.lastIndex-M.length,M||(M=M||zn.units[t]||S,l===r.length&&(r+=M,a.e+=M)),S!==M&&(_=mr(e,t,g,M)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:_,c:p-_,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Uf:If;return jh.test(r)&&(a.e=0),this._pt=a,a},Eu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mm=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Eu[n]||n,t[1]=Eu[r]||r,t.join(" ")},_m=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Vi[a]&&(l=1,a=a==="transformOrigin"?Tn:It),pr(n,a);l&&(pr(n,It),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",po(n,1),o.uncache=1,Nf(r)))}},da={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new bn(e._pt,t,n,0,0,_m);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},fo=[1,0,0,1,0,0],kf={},Hf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wu=function(e){var t=Fn(e,It);return Hf(t)?fo:t.substr(7).match(Kh).map(Ot)},Nc=function(e,t){var n=e._gsap||Or(e),r=e.style,s=wu(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fo:s):(s===fo&&!e.offsetParent&&e!==fs&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,fs.appendChild(e)),s=wu(e),l?r.display=l:pr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):fs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Dl=function(e,t,n,r,s,o){var a=e._gsap,l=s||Nc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,_=l[0],v=l[1],g=l[2],m=l[3],p=l[4],b=l[5],M=t.split(" "),S=parseFloat(M[0])||0,P=parseFloat(M[1])||0,I,R,L,E;n?l!==fo&&(R=_*m-v*g)&&(L=S*(m/R)+P*(-g/R)+(g*b-m*p)/R,E=S*(-v/R)+P*(_/R)-(_*b-v*p)/R,S=L,P=E):(I=zf(e),S=I.x+(~M[0].indexOf("%")?S/100*I.width:S),P=I.y+(~(M[1]||M[0]).indexOf("%")?P/100*I.height:P)),r||r!==!1&&a.smooth?(p=S-c,b=P-u,a.xOffset=f+(p*_+b*g)-p,a.yOffset=d+(p*v+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=P,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Tn]="0px 0px",o&&(cr(o,a,"xOrigin",c,S),cr(o,a,"yOrigin",u,P),cr(o,a,"xOffset",f,a.xOffset),cr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+P)},po=function(e,t){var n=e._gsap||new wf(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Fn(e,Tn)||"0",u,f,d,_,v,g,m,p,b,M,S,P,I,R,L,E,T,U,H,k,q,j,W,Y,G,ue,_e,te,Ee,we,Z,oe;return u=f=d=g=m=p=b=M=S=0,_=v=1,n.svg=!!(e.getCTM&&Bf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),r.scale=r.rotate=r.translate="none"),R=Nc(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Dl(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,R)),P=n.xOrigin||0,I=n.yOrigin||0,R!==fo&&(U=R[0],H=R[1],k=R[2],q=R[3],u=j=R[4],f=W=R[5],R.length===6?(_=Math.sqrt(U*U+H*H),v=Math.sqrt(q*q+k*k),g=U||H?Xr(H,U)*Pr:0,b=k||q?Xr(k,q)*Pr+g:0,b&&(v*=Math.abs(Math.cos(b*ds))),n.svg&&(u-=P-(P*U+I*k),f-=I-(P*H+I*q))):(oe=R[6],we=R[7],_e=R[8],te=R[9],Ee=R[10],Z=R[11],u=R[12],f=R[13],d=R[14],L=Xr(oe,Ee),m=L*Pr,L&&(E=Math.cos(-L),T=Math.sin(-L),Y=j*E+_e*T,G=W*E+te*T,ue=oe*E+Ee*T,_e=j*-T+_e*E,te=W*-T+te*E,Ee=oe*-T+Ee*E,Z=we*-T+Z*E,j=Y,W=G,oe=ue),L=Xr(-k,Ee),p=L*Pr,L&&(E=Math.cos(-L),T=Math.sin(-L),Y=U*E-_e*T,G=H*E-te*T,ue=k*E-Ee*T,Z=q*T+Z*E,U=Y,H=G,k=ue),L=Xr(H,U),g=L*Pr,L&&(E=Math.cos(L),T=Math.sin(L),Y=U*E+H*T,G=j*E+W*T,H=H*E-U*T,W=W*E-j*T,U=Y,j=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),_=Ot(Math.sqrt(U*U+H*H+k*k)),v=Ot(Math.sqrt(W*W+oe*oe)),L=Xr(j,W),b=Math.abs(L)>2e-4?L*Pr:0,S=Z?1/(Z<0?-Z:Z):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Hf(Fn(e,It)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(_*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ot(_),n.scaleY=Ot(v),n.rotation=Ot(g)+a,n.rotationX=Ot(m)+a,n.rotationY=Ot(p)+a,n.skewX=b+a,n.skewY=M+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Tn]=pa(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?vm:Of?Vf:gm,n.uncache=0,n},pa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ua=function(e,t,n){var r=an(t);return Ot(parseFloat(t)+parseFloat(mr(e,"x",n+"px",r)))+r},gm=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Vf(e,t)},yr="0deg",Ns="0px",Mr=") ",Vf=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,_=n.skewY,v=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,M=n.zOrigin,S="",P=p==="auto"&&e&&e!==1||p===!0;if(M&&(f!==yr||u!==yr)){var I=parseFloat(u)*ds,R=Math.sin(I),L=Math.cos(I),E;I=parseFloat(f)*ds,E=Math.cos(I),o=Ua(b,o,R*E*-M),a=Ua(b,a,-Math.sin(I)*-M),l=Ua(b,l,L*E*-M+M)}m!==Ns&&(S+="perspective("+m+Mr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(P||o!==Ns||a!==Ns||l!==Ns)&&(S+=l!==Ns||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Mr),c!==yr&&(S+="rotate("+c+Mr),u!==yr&&(S+="rotateY("+u+Mr),f!==yr&&(S+="rotateX("+f+Mr),(d!==yr||_!==yr)&&(S+="skew("+d+", "+_+Mr),(v!==1||g!==1)&&(S+="scale("+v+", "+g+Mr),b.style[It]=S||"translate(0, 0)"},vm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,_=n.target,v=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,M=parseFloat(o),S=parseFloat(a),P,I,R,L,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ds,c*=ds,P=Math.cos(l)*f,I=Math.sin(l)*f,R=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(u*=ds,E=Math.tan(c-u),E=Math.sqrt(1+E*E),R*=E,L*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),P*=E,I*=E)),P=Ot(P),I=Ot(I),R=Ot(R),L=Ot(L)):(P=f,L=d,I=R=0),(M&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(M=mr(_,"x",o,"px"),S=mr(_,"y",a,"px")),(v||g||m||p)&&(M=Ot(M+v-(v*P+g*R)+m),S=Ot(S+g-(v*I+g*L)+p)),(r||s)&&(E=_.getBBox(),M=Ot(M+r/100*E.width),S=Ot(S+s/100*E.height)),E="matrix("+P+","+I+","+R+","+L+","+M+","+S+")",_.setAttribute("transform",E),b&&(_.style[It]=E)},xm=function(e,t,n,r,s){var o=360,a=Zt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Pr:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*vu)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*vu)%o-~~(c/o)*o)),e._pt=d=new bn(e._pt,t,n,r,c,tm),d.e=u,d.u="deg",e._props.push(n),d},bu=function(e,t){for(var n in t)e[n]=t[n];return e},Sm=function(e,t,n){var r=bu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,_,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[It]=t,a=po(n,1),pr(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],o[It]=t,a=po(n,1),o[It]=c);for(l in Vi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(_=an(c),v=an(u),f=_!==v?mr(n,l,c,v):parseFloat(c),d=parseFloat(u),e._pt=new bn(e._pt,a,l,f,d-f,Rl),e._pt.u=v||0,e._props.push(l));bu(a,r)};wn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});da[e>1?"border"+i:i]=function(a,l,c,u,f){var d,_;if(arguments.length<4)return d=o.map(function(v){return Li(a,v,c)}),_=d.join(" "),_.split(d[0]).length===5?d[0]:_;d=(u+"").split(" "),_={},o.forEach(function(v,g){return _[v]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,_,f)}});var Gf={name:"css",register:Pl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,_,v,g,m,p,b,M,S,P,I,R,L,E;Lc||Pl(),this.styles=this.styles||Ff(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(In[g]&&bf(g,t,n,r,e,s)))){if(_=typeof u,v=da[g],_==="function"&&(u=u.call(n,r,e,s),_=typeof u),_==="string"&&~u.indexOf("random(")&&(u=co(u)),v)v(this,e,g,u,n)&&(R=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",hr.lastIndex=0,hr.test(c)||(m=an(c),p=an(u),p?m!==p&&(c=mr(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),L.push(g,0,a[g]);else if(_!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Zt(c)&&~c.indexOf("random(")&&(c=co(c)),an(c+"")||c==="auto"||(c+=zn.units[g]||an(Li(e,g))||""),(c+"").charAt(1)==="="&&(c=Li(e,g))):c=Li(e,g),d=parseFloat(c),b=_==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),f=parseFloat(u),g in Si&&(g==="autoAlpha"&&(d===1&&Li(e,"visibility")==="hidden"&&f&&(d=0),L.push("visibility",0,a.visibility),cr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Si[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in Vi,M){if(this.styles.save(g),E=u,_==="string"&&u.substring(0,6)==="var(--"){if(u=Fn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=Fn(e,"perspective"),T?e.style.perspective=T:pr(e,"perspective")}f=parseFloat(u)}if(S||(P=e._gsap,P.renderTransform&&!t.parseTransform||po(e,t.parseTransform),I=t.smoothOrigin!==!1&&P.smooth,S=this._pt=new bn(this._pt,a,It,0,1,P.renderTransform,P,0,-1),S.dep=1),g==="scale")this._pt=new bn(this._pt,P,"scaleY",P.scaleY,(b?hs(P.scaleY,b+f):f)-P.scaleY||0,Rl),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(Tn,0,a[Tn]),u=mm(u),P.svg?Dl(e,u,0,I,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==P.zOrigin&&cr(this,P,"zOrigin",P.zOrigin,p),cr(this,a,g,pa(c),pa(u)));continue}else if(g==="svgOrigin"){Dl(e,u,1,I,0,this);continue}else if(g in kf){xm(this,P,g,d,b?hs(d,b+u):u);continue}else if(g==="smoothOrigin"){cr(this,P,"smooth",P.smooth,u);continue}else if(g==="force3D"){P[g]=u;continue}else if(g==="transform"){Sm(this,u,e);continue}}else g in a||(g=ys(g)||g);if(M||(f||f===0)&&(d||d===0)&&!em.test(u)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=an(u)||(g in zn.units?zn.units[g]:m),m!==p&&(d=mr(e,g,c,p)),this._pt=new bn(this._pt,M?P:a,g,d,(b?hs(d,b+f):f)-d,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?rm:Rl),this._pt.u=p||0,M&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=im):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=nm);else if(g in a)pm.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,r,s);else if(g!=="parseTransform"){Mc(g,u);continue}M||(g in a?L.push(g,0,a[g]):typeof e[g]=="function"?L.push(g,2,e[g]()):L.push(g,1,c||e[g])),o.push(g)}}R&&Df(this)},render:function(e,t){if(t.tween._time||!Ic())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Li,aliases:Si,getSetter:function(e,t,n){var r=Si[t];return r&&r.indexOf(",")<0&&(t=r),t in Vi&&t!==Tn&&(e._gsap.x||Li(e,"x"))?n&&gu===n?t==="scale"?lm:am:(gu=n||{})&&(t==="scale"?cm:um):e.style&&!xc(e.style[t])?sm:~t.indexOf("-")?om:Pc(e,t)},core:{_removeProperty:pr,_getMatrix:Nc}};Rn.utils.checkPrefix=ys;Rn.core.getStyleSaver=Ff;(function(i,e,t,n){var r=wn(i+","+e+","+t,function(s){Vi[s]=1});wn(e,function(s){zn.units[s]="deg",kf[s]=1}),Si[r[13]]=i+","+e,wn(n,function(s){var o=s.split(":");Si[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){zn.units[i]="px"});Rn.registerPlugin(Gf);var Fc=Rn.registerPlugin(Gf)||Rn;Fc.core.Tween;const ym=[{title:"TradeForge",tags:"concept • web • solidity • development • 3d",url:"https://kianpk.github.io/tradeforge/",hue:"linear-gradient(135deg, #1a2ffb, #6d8cff 40%, #0b1024)"},{title:"Zyrax Drive",tags:"web • design • development • 3d • animation",url:"https://kianpk.github.io/zyrax-drive/",hue:"linear-gradient(135deg, #101018, #2a1a5e 45%, #c1ff00)"},{title:"Playfield",tags:"web • design • development • 3d • physics",url:"https://kianpk.github.io/playfield/",hue:"linear-gradient(135deg, #0e2a22, #1db954 50%, #d9ffe8)"},{title:"Orbit Desk",tags:"web • design • development • 3d • r3f",url:"https://kianpk.github.io/orbit-desk/",hue:"linear-gradient(145deg, #1b1030, #8832f7 55%, #ffb4ef)"},{title:"VaultForge",tags:"solidity • protocol • development",url:"https://github.com/kianPk/vaultforge",hue:"linear-gradient(135deg, #141820, #3d4a66 40%, #9fd0ff)"},{title:"LoadForge",tags:"rust • systems • development",url:"https://github.com/kianPk/loadforge",hue:"linear-gradient(135deg, #2a1208, #ff8039 50%, #ffe0c8)"},{title:"GateProxy",tags:"go • networking • development",url:"https://github.com/kianPk/gateproxy",hue:"linear-gradient(135deg, #071820, #00b7c2 50%, #c8fbff)"},{title:"Honeypot Deck",tags:"web • security • vue • lab",url:"https://kianpk.github.io/honeypot-deck/",hue:"linear-gradient(135deg, #2a0810, #ff4c41 45%, #ffd0d0)"},{title:"Sentinel Grid",tags:"web • security • visualization",url:"https://kianpk.github.io/sentinel-grid/",hue:"linear-gradient(135deg, #0a1420, #1a2ffb 50%, #9db4ff)"},{title:"Lumen Commerce",tags:"web • design • development • commerce",url:"https://kianpk.github.io/lumen-commerce/",hue:"linear-gradient(135deg, #20180a, #ffd24a 50%, #fff4c8)"},{title:"Netprobe Lab",tags:"concept • web • security lab",url:"https://kianpk.github.io/netprobe-lab/",hue:"linear-gradient(135deg, #120820, #b65fff 50%, #f0d8ff)"},{title:"PulseHub",tags:"go • realtime • development",url:"https://github.com/kianPk/pulsehub",hue:"linear-gradient(135deg, #081410, #a2ffab 50%, #e8ffe9)"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="170",Mm=0,Tu=1,Em=2,Wf=1,wm=2,Pi=3,_r=0,An=1,Sn=2,hi=0,fr=1,Au=2,Ru=3,Cu=4,Xf=5,Ii=100,bm=101,Tm=102,Am=103,Rm=104,Cm=200,Ys=201,Pm=202,Dm=203,Ll=204,Il=205,Lm=206,Im=207,Um=208,Nm=209,Fm=210,Om=211,zm=212,Bm=213,km=214,Ul=0,Nl=1,Fl=2,Ms=3,Ol=4,zl=5,Bl=6,kl=7,qf=0,Hm=1,Vm=2,Bi=0,Gm=1,Wm=2,Xm=3,qm=4,Ym=5,Zm=6,$m=7,Yf=300,Es=301,ws=302,Hl=303,Vl=304,Ma=306,ps=1e3,Ni=1001,ma=1002,pn=1003,Km=1004,wo=1005,Vt=1006,Na=1007,Fi=1008,Gi=1009,Zf=1010,$f=1011,bs=1012,zc=1013,Gr=1014,On=1015,yi=1016,Bc=1017,kc=1018,Ts=1020,Kf=35902,jf=1021,Jf=1022,dn=1023,Qf=1024,ed=1025,ms=1026,As=1027,Hc=1028,Vc=1029,td=1030,Gc=1031,Wc=1033,na=33776,ia=33777,ra=33778,sa=33779,Gl=35840,Wl=35841,Xl=35842,ql=35843,Yl=36196,Zl=37492,$l=37496,Kl=37808,jl=37809,Jl=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,rc=37816,sc=37817,oc=37818,ac=37819,lc=37820,cc=37821,oa=36492,uc=36494,hc=36495,nd=36283,fc=36284,dc=36285,pc=36286,jm=3200,Jm=3201,Qm=0,e_=1,yn="",fn="srgb",Wi="srgb-linear",Ea="linear",Mt="srgb",qr=7680,Pu=519,t_=512,n_=513,i_=514,id=515,r_=516,s_=517,o_=518,a_=519,Du=35044,ji=35048,Lu="300 es",Oi=2e3,_a=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Iu=1234567;const eo=Math.PI/180,mo=180/Math.PI;function Ps(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function Xc(i,e){return(i%e+e)%e}function l_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function c_(i,e,t){return i!==e?(t-i)/(e-i):0}function to(i,e,t){return(1-t)*i+t*e}function u_(i,e,t,n){return to(i,e,1-Math.exp(-t*n))}function h_(i,e=1){return e-Math.abs(Xc(i,e*2)-e)}function f_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function d_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function p_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function m_(i,e){return i+Math.random()*(e-i)}function __(i){return i*(.5-Math.random())}function g_(i){i!==void 0&&(Iu=i);let e=Iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v_(i){return i*eo}function x_(i){return i*mo}function S_(i){return(i&i-1)===0&&i!==0}function y_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function M_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function E_(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),_=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*_,a*c);break;case"YXY":i.set(l*_,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*_,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function os(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gn={DEG2RAD:eo,RAD2DEG:mo,generateUUID:Ps,clamp:on,euclideanModulo:Xc,mapLinear:l_,inverseLerp:c_,lerp:to,damp:u_,pingpong:h_,smoothstep:f_,smootherstep:d_,randInt:p_,randFloat:m_,randFloatSpread:__,seededRandom:g_,degToRad:v_,radToDeg:x_,isPowerOfTwo:S_,ceilPowerOfTwo:y_,floorPowerOfTwo:M_,setQuaternionFromProperEuler:E_,normalize:un,denormalize:os};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,r,s,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],_=n[5],v=n[8],g=r[0],m=r[3],p=r[6],b=r[1],M=r[4],S=r[7],P=r[2],I=r[5],R=r[8];return s[0]=o*g+a*b+l*P,s[3]=o*m+a*M+l*I,s[6]=o*p+a*S+l*R,s[1]=c*g+u*b+f*P,s[4]=c*m+u*M+f*I,s[7]=c*p+u*S+f*R,s[2]=d*g+_*b+v*P,s[5]=d*m+_*M+v*I,s[8]=d*p+_*S+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,_=c*s-o*l,v=t*f+n*d+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=_*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new at;function rd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function w_(){const i=_o("canvas");return i.style.display="block",i}const Uu={};function Zs(i){i in Uu||(Uu[i]=!0,console.warn(i))}function b_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function T_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function A_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gt={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yn?Ea:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Nu=[.64,.33,.3,.6,.15,.06],Fu=[.2126,.7152,.0722],Ou=[.3127,.329],zu=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt.define({[Wi]:{primaries:Nu,whitePoint:Ou,transfer:Ea,toXYZ:zu,fromXYZ:Bu,luminanceCoefficients:Fu,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:Nu,whitePoint:Ou,transfer:Mt,toXYZ:zu,fromXYZ:Bu,luminanceCoefficients:Fu,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}});let Yr;class R_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yr===void 0&&(Yr=_o("canvas")),Yr.width=e.width,Yr.height=e.height;const n=Yr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_o("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C_=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?R_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P_=0;class Jt extends Cs{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Ni,r=Ni,s=Vt,o=Fi,a=dn,l=Gi,c=Jt.DEFAULT_ANISOTROPY,u=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Ps(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Yf;Jt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],_=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(_+1)/2,P=(p+1)/2,I=(u+d)/4,R=(f+g)/4,L=(v+m)/4;return M>S&&M>P?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=I/n,s=R/n):S>P?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=I/r,s=L/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=L/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(f-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+_+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D_ extends Cs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Jt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends D_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class od extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L_ extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],_=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=_,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==d||c!==_||u!==v){let m=1-a;const p=l*d+c*_+u*v+f*g,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),I=Math.atan2(P,p*b);m=Math.sin(m*I)/P,a=Math.sin(a*I)/P}const S=a*b;if(l=l*m+d*S,c=c*m+_*S,u=u*m+v*S,f=f*m+g*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],d=s[o+1],_=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*_-c*d,e[t+1]=l*v+u*d+c*f-a*_,e[t+2]=c*v+u*_+a*d-l*f,e[t+3]=u*v-a*f-l*d-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),d=l(n/2),_=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f-d*_*v;break;case"YXZ":this._x=d*u*f+c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f+d*_*v;break;case"ZXY":this._x=d*u*f-c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f-d*_*v;break;case"ZYX":this._x=d*u*f-c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f+d*_*v;break;case"YZX":this._x=d*u*f+c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f-d*_*v;break;case"XZY":this._x=d*u*f-c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f+d*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(n>a&&n>f){const _=2*Math.sqrt(1+n-a-f);this._w=(u-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>f){const _=2*Math.sqrt(1+a-n-f);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+f-n-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new B,ku=new Mn;class Ds{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),To.subVectors(this.max,Fs),Zr.subVectors(e.a,Fs),$r.subVectors(e.b,Fs),Kr.subVectors(e.c,Fs),Ji.subVectors($r,Zr),Qi.subVectors(Kr,$r),Er.subVectors(Zr,Kr);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Er.z,Er.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Er.z,0,-Er.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Er.y,Er.x,0];return!Ba(t,Zr,$r,Kr,To)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,Zr,$r,Kr,To))?!1:(Ao.crossVectors(Ji,Qi),t=[Ao.x,Ao.y,Ao.z],Ba(t,Zr,$r,Kr,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new B,new B,new B,new B,new B,new B,new B,new B],ii=new B,bo=new Ds,Zr=new B,$r=new B,Kr=new B,Ji=new B,Qi=new B,Er=new B,Fs=new B,To=new B,Ao=new B,wr=new B;function Ba(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wr.fromArray(i,s);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),u=n.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const I_=new Ds,Os=new B,ka=new B;class qc{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):I_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Os,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(ka)),this.expandByPoint(Os.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new B,Ha=new B,Ro=new B,er=new B,Va=new B,Co=new B,Ga=new B;class U_{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ha.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),er.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=er.dot(this.direction),l=-er.dot(Ro),c=er.lengthSq(),u=Math.abs(1-o*o);let f,d,_,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,_=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ha).addScaledVector(Ro,d),_}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),r=bi.dot(bi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,r,s){Va.subVectors(t,e),Co.subVectors(n,e),Ga.crossVectors(Va,Co);let o=this.direction.dot(Ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(Co.crossVectors(er,Co));if(l<0)return null;const c=a*this.direction.dot(Va.cross(er));if(c<0||l+c>o)return null;const u=-a*er.dot(Ga);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m)}set(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=_,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,_=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=_+v*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=v+_*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,_=l*f,v=c*u,g=c*f;t[0]=d+g*a,t[4]=v*a-_,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=_*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,_=l*f,v=c*u,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,_=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=v*c-_,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=_*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-d*f,t[8]=v*f+_,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=_*f+v,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=o*u,t[9]=_*f-v,t[2]=v*f-_,t[6]=a*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N_,e,F_)}lookAt(e,t,n){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),tr.crossVectors(n,Pn),tr.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),tr.crossVectors(n,Pn)),tr.normalize(),Po.crossVectors(Pn,tr),r[0]=tr.x,r[4]=Po.x,r[8]=Pn.x,r[1]=tr.y,r[5]=Po.y,r[9]=Pn.y,r[2]=tr.z,r[6]=Po.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],_=n[13],v=n[2],g=n[6],m=n[10],p=n[14],b=n[3],M=n[7],S=n[11],P=n[15],I=r[0],R=r[4],L=r[8],E=r[12],T=r[1],U=r[5],H=r[9],k=r[13],q=r[2],j=r[6],W=r[10],Y=r[14],G=r[3],ue=r[7],_e=r[11],te=r[15];return s[0]=o*I+a*T+l*q+c*G,s[4]=o*R+a*U+l*j+c*ue,s[8]=o*L+a*H+l*W+c*_e,s[12]=o*E+a*k+l*Y+c*te,s[1]=u*I+f*T+d*q+_*G,s[5]=u*R+f*U+d*j+_*ue,s[9]=u*L+f*H+d*W+_*_e,s[13]=u*E+f*k+d*Y+_*te,s[2]=v*I+g*T+m*q+p*G,s[6]=v*R+g*U+m*j+p*ue,s[10]=v*L+g*H+m*W+p*_e,s[14]=v*E+g*k+m*Y+p*te,s[3]=b*I+M*T+S*q+P*G,s[7]=b*R+M*U+S*j+P*ue,s[11]=b*L+M*H+S*W+P*_e,s[15]=b*E+M*k+S*Y+P*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],_=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*_-n*l*_)+g*(+t*l*_-t*c*d+s*o*d-r*o*_+r*c*u-s*l*u)+m*(+t*c*f-t*a*_-s*o*f+n*o*_+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],_=e[11],v=e[12],g=e[13],m=e[14],p=e[15],b=f*m*c-g*d*c+g*l*_-a*m*_-f*l*p+a*d*p,M=v*d*c-u*m*c-v*l*_+o*m*_+u*l*p-o*d*p,S=u*g*c-v*f*c+v*a*_-o*g*_-u*a*p+o*f*p,P=v*f*l-u*g*l-v*a*d+o*g*d+u*a*m-o*f*m,I=t*b+n*M+r*S+s*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=b*R,e[1]=(g*d*s-f*m*s-g*r*_+n*m*_+f*r*p-n*d*p)*R,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*R,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*_-n*l*_)*R,e[4]=M*R,e[5]=(u*m*s-v*d*s+v*r*_-t*m*_-u*r*p+t*d*p)*R,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*_+t*l*_)*R,e[8]=S*R,e[9]=(v*f*s-u*g*s-v*n*_+t*g*_+u*n*p-t*f*p)*R,e[10]=(o*g*s-v*a*s+v*n*c-t*g*c-o*n*p+t*a*p)*R,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*_-t*a*_)*R,e[12]=P*R,e[13]=(u*g*r-v*f*r+v*n*d-t*g*d-u*n*m+t*f*m)*R,e[14]=(v*a*r-o*g*r-v*n*l+t*g*l+o*n*m-t*a*m)*R,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,_=s*u,v=s*f,g=o*u,m=o*f,p=a*f,b=l*c,M=l*u,S=l*f,P=n.x,I=n.y,R=n.z;return r[0]=(1-(g+p))*P,r[1]=(_+S)*P,r[2]=(v-M)*P,r[3]=0,r[4]=(_-S)*I,r[5]=(1-(d+p))*I,r[6]=(m+b)*I,r[7]=0,r[8]=(v+M)*R,r[9]=(m-b)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const c=1/s,u=1/o,f=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,t.setFromRotationMatrix(ri),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Oi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let _,v;if(a===Oi)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===_a)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Oi){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),d=(t+e)*c,_=(n+r)*u;let v,g;if(a===Oi)v=(o+s)*f,g=-2*f;else if(a===_a)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jr=new B,ri=new pt,N_=new B(0,0,0),F_=new B(1,1,1),tr=new B,Po=new B,Pn=new B,Hu=new pt,Vu=new Mn;class Vn{constructor(e=0,t=0,n=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O_=0;const Gu=new B,Jr=new Mn,Ti=new pt,Do=new B,zs=new B,z_=new B,B_=new Mn,Wu=new B(1,0,0),Xu=new B(0,1,0),qu=new B(0,0,1),Yu={type:"added"},k_={type:"removed"},Qr={type:"childadded",child:null},Wa={type:"childremoved",child:null};class Bn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new B,t=new Vn,n=new Mn,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new at}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(zs,Do,this.up):Ti.lookAt(Do,zs,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Ti),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k_),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,B_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Bn.DEFAULT_UP=new B(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new B,Ai=new B,Xa=new B,Ri=new B,es=new B,ts=new B,Zu=new B,qa=new B,Ya=new B,Za=new B,$a=new Ct,Ka=new Ct,ja=new Ct;class ui{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),si.subVectors(e,t),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){si.subVectors(r,t),Ai.subVectors(n,t),Xa.subVectors(e,t);const o=si.dot(si),a=si.dot(Ai),l=si.dot(Xa),c=Ai.dot(Ai),u=Ai.dot(Xa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,_=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return $a.setScalar(0),Ka.setScalar(0),ja.setScalar(0),$a.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,n),ja.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector($a,s.x),o.addScaledVector(Ka,s.y),o.addScaledVector(ja,s.z),o}static isFrontFacing(e,t,n,r){return si.subVectors(n,t),Ai.subVectors(e,t),si.cross(Ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),si.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;es.subVectors(r,n),ts.subVectors(s,n),qa.subVectors(e,n);const l=es.dot(qa),c=ts.dot(qa);if(l<=0&&c<=0)return t.copy(n);Ya.subVectors(e,r);const u=es.dot(Ya),f=ts.dot(Ya);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(es,o);Za.subVectors(e,s);const _=es.dot(Za),v=ts.dot(Za);if(v>=0&&_<=v)return t.copy(s);const g=_*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(ts,a);const m=u*v-_*f;if(m<=0&&f-u>=0&&_-v>=0)return Zu.subVectors(s,r),a=(f-u)/(f-u+(_-v)),t.copy(r).addScaledVector(Zu,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Ja(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=Xc(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ja(o,s,e+1/3),this.g=Ja(o,s,e),this.b=Ja(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return gt.fromWorkingColorSpace(sn.copy(this),e),Math.round(on(sn.r*255,0,255))*65536+Math.round(on(sn.g*255,0,255))*256+Math.round(on(sn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(sn.copy(this),t);const n=sn.r,r=sn.g,s=sn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=fn){gt.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,r=sn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(Lo);const n=to(nr.h,Lo.h,t),r=to(nr.s,Lo.s,t),s=to(nr.l,Lo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new tt;tt.NAMES=ld;let H_=0;class wa extends Cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Ps(),this.name="",this.blending=fr,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Il,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==_r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Il&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yc extends wa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ui=V_();function V_(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function G_(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=on(i,-65504,65504),Ui.floatView[0]=i;const e=Ui.uint32View[0],t=e>>23&511;return Ui.baseTable[t]+((e&8388607)>>Ui.shiftTable[t])}function W_(i){const e=i>>10;return Ui.uint32View[0]=Ui.mantissaTable[Ui.offsetTable[e]+(i&1023)]+Ui.exponentTable[e],Ui.floatView[0]}const $u={toHalfFloat:G_,fromHalfFloat:W_},kt=new B,Io=new ct;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Du,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=os(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Du&&(e.usage=this.usage),e}}class cd extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ud extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Hr extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let X_=0;const Zn=new pt,Qa=new Bn,ns=new B,Dn=new Ds,Bs=new Ds,Yt=new B;class qi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rd(e)?ud:cd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Hr(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Dn.min,Bs.min),Dn.expandByPoint(Yt),Yt.addVectors(Dn.max,Bs.max),Dn.expandByPoint(Yt)):(Dn.expandByPoint(Bs.min),Dn.expandByPoint(Bs.max))}Dn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),Yt.add(ns)),r=Math.max(r,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new B,l[L]=new B;const c=new B,u=new B,f=new B,d=new ct,_=new ct,v=new ct,g=new B,m=new B;function p(L,E,T){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,T),d.fromBufferAttribute(s,L),_.fromBufferAttribute(s,E),v.fromBufferAttribute(s,T),u.sub(c),f.sub(c),_.sub(d),v.sub(d);const U=1/(_.x*v.y-v.x*_.y);isFinite(U)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(U),m.copy(f).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(U),a[L].add(g),a[E].add(g),a[T].add(g),l[L].add(m),l[E].add(m),l[T].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,E=b.length;L<E;++L){const T=b[L],U=T.start,H=T.count;for(let k=U,q=U+H;k<q;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new B,S=new B,P=new B,I=new B;function R(L){P.fromBufferAttribute(r,L),I.copy(P);const E=a[L];M.copy(E),M.sub(P.multiplyScalar(P.dot(E))).normalize(),S.crossVectors(I,E);const U=S.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,U)}for(let L=0,E=b.length;L<E;++L){const T=b[L],U=T.start,H=T.count;for(let k=U,q=U+H;k<q;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let d=0,_=e.count;d<_;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,_=t.count;d<_;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let _=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?_=l[g]*a.data.stride+a.offset:_=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[_++]}return new Kt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qi,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],_=e(d,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const _=c[f];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,_=f.length;d<_;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ku=new pt,br=new U_,Uo=new qc,ju=new B,No=new B,Fo=new B,Oo=new B,el=new B,zo=new B,Ju=new B,Bo=new B;class Wt extends Bn{constructor(e=new qi,t=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(el.fromBufferAttribute(f,e),o?zo.addScaledVector(el,u):zo.addScaledVector(el.sub(t),u))}t.add(zo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Uo.containsPoint(br.origin)===!1&&(br.intersectSphere(Uo,ju)===null||br.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&(Ku.copy(s).invert(),br.copy(e.ray).applyMatrix4(Ku),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],b=Math.max(m.start,_.start),M=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let S=b,P=M;S<P;S+=3){const I=a.getX(S),R=a.getX(S+1),L=a.getX(S+2);r=ko(this,p,e,n,c,u,f,I,R,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(a.count,_.start+_.count);for(let m=v,p=g;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);r=ko(this,o,e,n,c,u,f,b,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],b=Math.max(m.start,_.start),M=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let S=b,P=M;S<P;S+=3){const I=S,R=S+1,L=S+2;r=ko(this,p,e,n,c,u,f,I,R,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);for(let m=v,p=g;m<p;m+=3){const b=m,M=m+1,S=m+2;r=ko(this,o,e,n,c,u,f,b,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function q_(i,e,t,n,r,s,o,a){let l;if(e.side===An?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===_r,a),l===null)return null;Bo.copy(a),Bo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Bo);return c<t.near||c>t.far?null:{distance:c,point:Bo.clone(),object:i}}function ko(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,No),i.getVertexPosition(l,Fo),i.getVertexPosition(c,Oo);const u=q_(i,e,t,n,No,Fo,Oo,Ju);if(u){const f=new B;ui.getBarycoord(Ju,No,Fo,Oo,f),r&&(u.uv=ui.getInterpolatedAttribute(r,a,l,c,f,new ct)),s&&(u.uv1=ui.getInterpolatedAttribute(s,a,l,c,f,new ct)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,l,c,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};ui.getNormal(No,Fo,Oo,d.normal),u.face=d,u.barycoord=f}return u}class vo extends qi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,_=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Hr(c,3)),this.setAttribute("normal",new Hr(u,3)),this.setAttribute("uv",new Hr(f,2));function v(g,m,p,b,M,S,P,I,R,L,E){const T=S/R,U=P/L,H=S/2,k=P/2,q=I/2,j=R+1,W=L+1;let Y=0,G=0;const ue=new B;for(let _e=0;_e<W;_e++){const te=_e*U-k;for(let Ee=0;Ee<j;Ee++){const we=Ee*T-H;ue[g]=we*b,ue[m]=te*M,ue[p]=q,c.push(ue.x,ue.y,ue.z),ue[g]=0,ue[m]=0,ue[p]=I>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(Ee/R),f.push(1-_e/L),Y+=1}}for(let _e=0;_e<L;_e++)for(let te=0;te<R;te++){const Ee=d+te+j*_e,we=d+te+j*(_e+1),Z=d+(te+1)+j*(_e+1),oe=d+(te+1)+j*_e;l.push(Ee,we,oe),l.push(we,Z,oe),G+=6}a.addGroup(_,G,E),_+=G,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function hn(i){const e={};for(let t=0;t<i.length;t++){const n=Rs(i[t]);for(const r in n)e[r]=n[r]}return e}function Y_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Z_={clone:Rs,merge:hn};var $_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nt extends wa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$_,this.fragmentShader=K_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fd extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new B,Qu=new ct,eh=new ct;class vn extends fd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,Qu,eh),t.subVectors(eh,Qu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,rs=1;class j_ extends Bn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(is,rs,e,t);r.layers=this.layers,this.add(r);const s=new vn(is,rs,e,t);s.layers=this.layers,this.add(s);const o=new vn(is,rs,e,t);o.layers=this.layers,this.add(o);const a=new vn(is,rs,e,t);a.layers=this.layers,this.add(a);const l=new vn(is,rs,e,t);l.layers=this.layers,this.add(l);const c=new vn(is,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class dd extends Jt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J_ extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new dd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vo(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:hi});s.uniforms.tEquirect.value=t;const o=new Wt(r,s),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Vt),new j_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const tl=new B,Q_=new B,e0=new at;class Dr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=tl.subVectors(n,t).cross(Q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||e0.getNormalMatrix(e),r=this.coplanarPoint(tl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new qc,Ho=new B;class pd{constructor(e=new Dr,t=new Dr,n=new Dr,r=new Dr,s=new Dr,o=new Dr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Oi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],_=r[8],v=r[9],g=r[10],m=r[11],p=r[12],b=r[13],M=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,m-_,S-p).normalize(),n[1].setComponents(l+s,d+c,m+_,S+p).normalize(),n[2].setComponents(l+o,d+u,m+v,S+b).normalize(),n[3].setComponents(l-o,d-u,m-v,S-b).normalize(),n[4].setComponents(l-a,d-f,m-g,S-M).normalize(),t===Oi)n[5].setComponents(l+a,d+f,m+g,S+M).normalize();else if(t===_a)n[5].setComponents(a,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function md(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function t0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((_,v)=>_.start-v.start);let d=0;for(let _=1;_<f.length;_++){const v=f[d],g=f[_];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,f[d]=g)}f.length=d+1;for(let _=0,v=f.length;_<v;_++){const g=f[_];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class vr extends qi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,_=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const b=p*d-o;for(let M=0;M<c;M++){const S=M*f-s;v.push(S,-b,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,S=b+c*(p+1),P=b+1+c*(p+1),I=b+1+c*p;_.push(M,S,I),_.push(S,P,I)}this.setIndex(_),this.setAttribute("position",new Hr(v,3)),this.setAttribute("normal",new Hr(g,3)),this.setAttribute("uv",new Hr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.widthSegments,e.heightSegments)}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b0=`#define PI 3.141592653589793
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
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A0=`vec3 transformedNormal = objectNormal;
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
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
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
#endif`,eg=`struct PhysicalMaterial {
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
}`,tg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hg=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
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
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kg=`float getShadowMask() {
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
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nv=`uniform sampler2D t2D;
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
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`#include <common>
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
}`,lv=`#if DEPTH_PACKING == 3200
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
}`,cv=`#define DISTANCE
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
}`,uv=`#define DISTANCE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`uniform float scale;
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#include <common>
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
}`,_v=`uniform vec3 diffuse;
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
}`,gv=`#define LAMBERT
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
}`,vv=`#define LAMBERT
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
}`,xv=`#define MATCAP
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
}`,Sv=`#define MATCAP
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
}`,yv=`#define NORMAL
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
}`,Mv=`#define NORMAL
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
}`,Ev=`#define PHONG
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
}`,wv=`#define PHONG
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
}`,bv=`#define STANDARD
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
}`,Tv=`#define STANDARD
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
}`,Av=`#define TOON
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
}`,Rv=`#define TOON
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
}`,Cv=`uniform float size;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Lv=`uniform vec3 color;
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
}`,Iv=`uniform float rotation;
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
}`,Uv=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:r0,alphamap_pars_fragment:s0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:u0,batching_vertex:h0,begin_vertex:f0,beginnormal_vertex:d0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:_0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:S0,color_fragment:y0,color_pars_fragment:M0,color_pars_vertex:E0,color_vertex:w0,common:b0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:P0,emissivemap_pars_fragment:D0,colorspace_fragment:L0,colorspace_pars_fragment:I0,envmap_fragment:U0,envmap_common_pars_fragment:N0,envmap_pars_fragment:F0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:Z0,envmap_vertex:z0,fog_vertex:B0,fog_pars_vertex:k0,fog_fragment:H0,fog_pars_fragment:V0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:$0,lights_toon_pars_fragment:K0,lights_phong_fragment:j0,lights_phong_pars_fragment:J0,lights_physical_fragment:Q0,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:sg,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:ag,map_fragment:lg,map_pars_fragment:cg,map_particle_fragment:ug,map_particle_pars_fragment:hg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:dg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:_g,morphtarget_pars_vertex:gg,morphtarget_vertex:vg,normal_fragment_begin:xg,normal_fragment_maps:Sg,normal_pars_fragment:yg,normal_pars_vertex:Mg,normal_vertex:Eg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:Rg,opaque_fragment:Cg,packing:Pg,premultiplied_alpha_fragment:Dg,project_vertex:Lg,dithering_fragment:Ig,dithering_pars_fragment:Ug,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:zg,shadowmap_vertex:Bg,shadowmask_pars_fragment:kg,skinbase_vertex:Hg,skinning_pars_vertex:Vg,skinning_vertex:Gg,skinnormal_vertex:Wg,specularmap_fragment:Xg,specularmap_pars_fragment:qg,tonemapping_fragment:Yg,tonemapping_pars_fragment:Zg,transmission_fragment:$g,transmission_pars_fragment:Kg,uv_pars_fragment:jg,uv_pars_vertex:Jg,uv_vertex:Qg,worldpos_vertex:ev,background_vert:tv,background_frag:nv,backgroundCube_vert:iv,backgroundCube_frag:rv,cube_vert:sv,cube_frag:ov,depth_vert:av,depth_frag:lv,distanceRGBA_vert:cv,distanceRGBA_frag:uv,equirect_vert:hv,equirect_frag:fv,linedashed_vert:dv,linedashed_frag:pv,meshbasic_vert:mv,meshbasic_frag:_v,meshlambert_vert:gv,meshlambert_frag:vv,meshmatcap_vert:xv,meshmatcap_frag:Sv,meshnormal_vert:yv,meshnormal_frag:Mv,meshphong_vert:Ev,meshphong_frag:wv,meshphysical_vert:bv,meshphysical_frag:Tv,meshtoon_vert:Av,meshtoon_frag:Rv,points_vert:Cv,points_frag:Pv,shadow_vert:Dv,shadow_frag:Lv,sprite_vert:Iv,sprite_frag:Uv},Pe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},vi={basic:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:hn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:hn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:hn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:hn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:hn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:hn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:hn([Pe.common,Pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:hn([Pe.lights,Pe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};vi.physical={uniforms:hn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Vo={r:0,b:0,g:0},Ar=new Vn,Nv=new pt;function Fv(i,e,t,n,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,f=null,d=0,_=null;function v(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function g(b){let M=!1;const S=v(b);S===null?p(a,l):S&&S.isColor&&(p(S,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const S=v(M);S&&(S.isCubeTexture||S.mapping===Ma)?(u===void 0&&(u=new Wt(new vo(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Rs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ar.copy(M.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(Ar)),u.material.toneMapped=gt.getTransfer(S.colorSpace)!==Mt,(f!==S||d!==S.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Wt(new vr(2,2),new Nt({name:"BackgroundMaterial",uniforms:Rs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=gt.getTransfer(S.colorSpace)!==Mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Vo,hd(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:m}}function Ov(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(T,U,H,k,q){let j=!1;const W=f(k,H,U);s!==W&&(s=W,c(s.object)),j=_(T,k,H,q),j&&v(T,k,H,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(T,U,H,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function f(T,U,H){const k=H.wireframe===!0;let q=n[T.id];q===void 0&&(q={},n[T.id]=q);let j=q[U.id];j===void 0&&(j={},q[U.id]=j);let W=j[k];return W===void 0&&(W=d(l()),j[k]=W),W}function d(T){const U=[],H=[],k=[];for(let q=0;q<t;q++)U[q]=0,H[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:k,object:T,attributes:{},index:null}}function _(T,U,H,k){const q=s.attributes,j=U.attributes;let W=0;const Y=H.getAttributes();for(const G in Y)if(Y[G].location>=0){const _e=q[G];let te=j[G];if(te===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(te=T.instanceColor)),_e===void 0||_e.attribute!==te||te&&_e.data!==te.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function v(T,U,H,k){const q={},j=U.attributes;let W=0;const Y=H.getAttributes();for(const G in Y)if(Y[G].location>=0){let _e=j[G];_e===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(_e=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(_e=T.instanceColor));const te={};te.attribute=_e,_e&&_e.data&&(te.data=_e.data),q[G]=te,W++}s.attributes=q,s.attributesNum=W,s.index=k}function g(){const T=s.newAttributes;for(let U=0,H=T.length;U<H;U++)T[U]=0}function m(T){p(T,0)}function p(T,U){const H=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;H[T]=1,k[T]===0&&(i.enableVertexAttribArray(T),k[T]=1),q[T]!==U&&(i.vertexAttribDivisor(T,U),q[T]=U)}function b(){const T=s.newAttributes,U=s.enabledAttributes;for(let H=0,k=U.length;H<k;H++)U[H]!==T[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function M(T,U,H,k,q,j,W){W===!0?i.vertexAttribIPointer(T,U,H,q,j):i.vertexAttribPointer(T,U,H,k,q,j)}function S(T,U,H,k){g();const q=k.attributes,j=H.getAttributes(),W=U.defaultAttributeValues;for(const Y in j){const G=j[Y];if(G.location>=0){let ue=q[Y];if(ue===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),ue!==void 0){const _e=ue.normalized,te=ue.itemSize,Ee=e.get(ue);if(Ee===void 0)continue;const we=Ee.buffer,Z=Ee.type,oe=Ee.bytesPerElement,ae=Z===i.INT||Z===i.UNSIGNED_INT||ue.gpuType===zc;if(ue.isInterleavedBufferAttribute){const ce=ue.data,pe=ce.stride,be=ue.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<G.locationSize;Fe++)p(G.location+Fe,ce.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)m(G.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Fe=0;Fe<G.locationSize;Fe++)M(G.location+Fe,te/G.locationSize,Z,_e,pe*oe,(be+te/G.locationSize*Fe)*oe,ae)}else{if(ue.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)p(G.location+ce,ue.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ce=0;ce<G.locationSize;ce++)m(G.location+ce);i.bindBuffer(i.ARRAY_BUFFER,we);for(let ce=0;ce<G.locationSize;ce++)M(G.location+ce,te/G.locationSize,Z,_e,te*oe,te/G.locationSize*ce*oe,ae)}}else if(W!==void 0){const _e=W[Y];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(G.location,_e);break;case 3:i.vertexAttrib3fv(G.location,_e);break;case 4:i.vertexAttrib4fv(G.location,_e);break;default:i.vertexAttrib1fv(G.location,_e)}}}}b()}function P(){L();for(const T in n){const U=n[T];for(const H in U){const k=U[H];for(const q in k)u(k[q].object),delete k[q];delete U[H]}delete n[T]}}function I(T){if(n[T.id]===void 0)return;const U=n[T.id];for(const H in U){const k=U[H];for(const q in k)u(k[q].object),delete k[q];delete U[H]}delete n[T.id]}function R(T){for(const U in n){const H=n[U];if(H[T.id]===void 0)continue;const k=H[T.id];for(const q in k)u(k[q].object),delete k[q];delete H[T.id]}}function L(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function zv(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];t.update(_,n,1)}function l(c,u,f,d){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g]*d[g];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==On&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:_,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:P,maxSamples:I}}function kv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Dr,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||n!==0||r;return r=d,n=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,_){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,M=b*4;let S=p.clippingState||null;l.value=S,S=u(v,d,M,_);for(let P=0;P!==M;++P)S[P]=t[P];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,_,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=_+g*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=_;M!==g;++M,S+=4)o.copy(f[M]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Hv(i){let e=new WeakMap;function t(o,a){return a===Hl?o.mapping=Es:a===Vl&&(o.mapping=ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hl||a===Vl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new J_(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class _d extends fd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cs=4,th=[.125,.215,.35,.446,.526,.582],Ir=20,nl=new _d,nh=new tt;let il=null,rl=0,sl=0,ol=!1;const Lr=(1+Math.sqrt(5))/2,ss=1/Lr,ih=[new B(-Lr,ss,0),new B(Lr,ss,0),new B(-ss,0,Lr),new B(ss,0,Lr),new B(0,Lr,-ss),new B(0,Lr,ss),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,rl,sl),this._renderer.xr.enabled=ol,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:yi,format:dn,colorSpace:Wi,depthBuffer:!1},r=sh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vv(s)),this._blurMaterial=Gv(s,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,n,r){const a=new vn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(nh),u.toneMapping=Bi,u.autoClear=!1;const _=new Yc({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),v=new Wt(new vo,_);let g=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,g=!0):(_.color.copy(nh),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Go(r,b*M,p>2?M:0,M,M),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Es||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Go(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,nl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ih[(r-s-1)%ih.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Wt(this._lodPlanes[r],c),d=c.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ir-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const p=[];let b=0;for(let R=0;R<Ir;++R){const L=R/g,E=Math.exp(-L*L/2);p.push(E),R===0?b+=E:R<m&&(b+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=v,d.mipInt.value=M-n;const S=this._sizeLods[r],P=3*S*(r>M-cs?r-M+cs:0),I=4*(this._cubeSize-S);Go(t,P,I,3*S,2*S),l.setRenderTarget(t),l.render(f,nl)}}function Vv(i){const e=[],t=[],n=[];let r=i;const s=i-cs+1+th.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-cs?l=th[o-i+cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,v=6,g=3,m=2,p=1,b=new Float32Array(g*v*_),M=new Float32Array(m*v*_),S=new Float32Array(p*v*_);for(let I=0;I<_;I++){const R=I%3*2/3-1,L=I>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(E,g*v*I),M.set(d,m*v*I);const T=[I,I,I,I,I,I];S.set(T,p*v*I)}const P=new qi;P.setAttribute("position",new Kt(b,g)),P.setAttribute("uv",new Kt(M,m)),P.setAttribute("faceIndex",new Kt(S,p)),e.push(P),r>cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sh(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Gv(i,e,t){const n=new Float32Array(Ir),r=new B(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function oh(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ah(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function Wv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hl||l===Vl,u=l===Es||l===ws;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new rh(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const _=a.image;return c&&_&&_.height>0||u&&_&&r(_)?(t===null&&(t=new rh(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function qv(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const _=f.morphAttributes;for(const v in _){const g=_[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(f){const d=[],_=f.index,v=f.attributes.position;let g=0;if(_!==null){const b=_.array;g=_.version;for(let M=0,S=b.length;M<S;M+=3){const P=b[M+0],I=b[M+1],R=b[M+2];d.push(P,I,I,R,R,P)}}else if(v!==void 0){const b=v.array;g=v.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const P=M+0,I=M+1,R=M+2;d.push(P,I,I,R,R,P)}}else return;const m=new(rd(d)?ud:cd)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Yv(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,_){i.drawElements(n,_,s,d*o),t.update(_,n,1)}function c(d,_,v){v!==0&&(i.drawElementsInstanced(n,_,s,d*o,v),t.update(_,n,v))}function u(d,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=_[p];t.update(m,n,1)}function f(d,_,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,_[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,_,0,s,d,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=_[b]*g[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Zv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $v(i,e,t){const n=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let T=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var _=T;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*I*4*f),L=new od(R,P,I,f);L.type=On,L.needsUpdate=!0;const E=S*4;for(let U=0;U<f;U++){const H=p[U],k=b[U],q=M[U],j=P*I*4*U;for(let W=0;W<H.count;W++){const Y=W*E;v===!0&&(r.fromBufferAttribute(H,W),R[j+Y+0]=r.x,R[j+Y+1]=r.y,R[j+Y+2]=r.z,R[j+Y+3]=0),g===!0&&(r.fromBufferAttribute(k,W),R[j+Y+4]=r.x,R[j+Y+5]=r.y,R[j+Y+6]=r.z,R[j+Y+7]=0),m===!0&&(r.fromBufferAttribute(q,W),R[j+Y+8]=r.x,R[j+Y+9]=r.y,R[j+Y+10]=r.z,R[j+Y+11]=q.itemSize===4?r.w:1)}}d={count:f,texture:L,size:new ct(P,I)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Kv(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class $c extends Jt{constructor(e,t,n,r,s,o,a,l,c,u=ms){if(u!==ms&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ms&&(n=Gr),n===void 0&&u===As&&(n=Ts),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gd=new Jt,lh=new $c(1,1),vd=new od,xd=new L_,Sd=new dd,ch=[],uh=[],hh=new Float32Array(16),fh=new Float32Array(9),dh=new Float32Array(4);function Ls(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ch[r];if(s===void 0&&(s=new Float32Array(r),ch[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ba(i,e){let t=uh[e];t===void 0&&(t=new Int32Array(e),uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function tx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),qt(t,n)}}function nx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),qt(t,n)}}function ix(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),qt(t,n)}}function rx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function lx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function fx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=id,s=lh):s=gd,t.setTexture2D(e||s,r)}function dx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||xd,r)}function px(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Sd,r)}function mx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||vd,r)}function _x(i){switch(i){case 5126:return jv;case 35664:return Jv;case 35665:return Qv;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return rx;case 35667:case 35671:return sx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return lx;case 36294:return cx;case 36295:return ux;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function gx(i,e){i.uniform1fv(this.addr,e)}function vx(i,e){const t=Ls(e,this.size,2);i.uniform2fv(this.addr,t)}function xx(i,e){const t=Ls(e,this.size,3);i.uniform3fv(this.addr,t)}function Sx(i,e){const t=Ls(e,this.size,4);i.uniform4fv(this.addr,t)}function yx(i,e){const t=Ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mx(i,e){const t=Ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ex(i,e){const t=Ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wx(i,e){i.uniform1iv(this.addr,e)}function bx(i,e){i.uniform2iv(this.addr,e)}function Tx(i,e){i.uniform3iv(this.addr,e)}function Ax(i,e){i.uniform4iv(this.addr,e)}function Rx(i,e){i.uniform1uiv(this.addr,e)}function Cx(i,e){i.uniform2uiv(this.addr,e)}function Px(i,e){i.uniform3uiv(this.addr,e)}function Dx(i,e){i.uniform4uiv(this.addr,e)}function Lx(i,e,t){const n=this.cache,r=e.length,s=ba(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||gd,s[o])}function Ix(i,e,t){const n=this.cache,r=e.length,s=ba(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xd,s[o])}function Ux(i,e,t){const n=this.cache,r=e.length,s=ba(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Sd,s[o])}function Nx(i,e,t){const n=this.cache,r=e.length,s=ba(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vd,s[o])}function Fx(i){switch(i){case 5126:return gx;case 35664:return vx;case 35665:return xx;case 35666:return Sx;case 35674:return yx;case 35675:return Mx;case 35676:return Ex;case 5124:case 35670:return wx;case 35667:case 35671:return bx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Nx}}class Ox{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_x(t.type)}}class zx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fx(t.type)}}class Bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const al=/(\w+)(\])?(\[|\.)?/g;function ph(i,e){i.seq.push(e),i.map[e.id]=e}function kx(i,e,t){const n=i.name,r=n.length;for(al.lastIndex=0;;){const s=al.exec(n),o=al.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ph(t,c===void 0?new Ox(a,i,e):new zx(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Bx(a),ph(t,f)),t=f}}}class aa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);kx(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function mh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hx=37297;let Vx=0;function Gx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const _h=new at;function Wx(i){gt._getMatrix(_h,gt.workingColorSpace,i);const e=`mat3( ${_h.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Gx(i.getShaderSource(e),o)}else return r}function Xx(i,e){const t=Wx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qx(i,e){let t;switch(e){case Gm:t="Linear";break;case Wm:t="Reinhard";break;case Xm:t="Cineon";break;case qm:t="ACESFilmic";break;case Zm:t="AgX";break;case $m:t="Neutral";break;case Ym:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wo=new B;function Yx(){gt.getLuminanceCoefficients(Wo);const i=Wo.x.toFixed(4),e=Wo.y.toFixed(4),t=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function $x(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $s(i){return i!==""}function vh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(i){return i.replace(jx,Qx)}const Jx=new Map;function Qx(i,e){let t=lt[e];if(t===void 0){const n=Jx.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const eS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(i){return i.replace(eS,tS)}function tS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function nS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function iS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Es:case ws:e="ENVMAP_TYPE_CUBE";break;case Ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function sS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qf:e="ENVMAP_BLENDING_MULTIPLY";break;case Hm:e="ENVMAP_BLENDING_MIX";break;case Vm:e="ENVMAP_BLENDING_ADD";break}return e}function oS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aS(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=nS(t),c=iS(t),u=rS(t),f=sS(t),d=oS(t),_=Zx(t),v=$x(s),g=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?lt.tonemapping_pars_fragment:"",t.toneMapping!==Bi?qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Xx("linearToOutputTexel",t.outputColorSpace),Yx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=mc(o),o=vh(o,t),o=xh(o,t),a=mc(a),a=vh(a,t),a=xh(a,t),o=Sh(o),a=Sh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,S=b+p+a,P=mh(r,r.VERTEX_SHADER,M),I=mh(r,r.FRAGMENT_SHADER,S);r.attachShader(g,P),r.attachShader(g,I),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(U){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(g).trim(),k=r.getShaderInfoLog(P).trim(),q=r.getShaderInfoLog(I).trim();let j=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,P,I);else{const Y=gh(r,P,"vertex"),G=gh(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+Y+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||q==="")&&(W=!1);W&&(U.diagnostics={runnable:j,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(P),r.deleteShader(I),L=new aa(r,g),E=Kx(r,g)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(g,Hx)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=I,this}let lS=0;class cS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uS(e),t.set(e,n)),n}}class uS{constructor(e){this.id=lS++,this.code=e,this.usedTimes=0}}function hS(i,e,t,n,r,s,o){const a=new ad,l=new cS,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,T,U,H,k){const q=H.fog,j=k.geometry,W=E.isMeshStandardMaterial?H.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),G=Y&&Y.mapping===Ma?Y.image.height:null,ue=v[E.type];E.precision!==null&&(_=r.getMaxPrecision(E.precision),_!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const _e=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=_e!==void 0?_e.length:0;let Ee=0;j.morphAttributes.position!==void 0&&(Ee=1),j.morphAttributes.normal!==void 0&&(Ee=2),j.morphAttributes.color!==void 0&&(Ee=3);let we,Z,oe,ae;if(ue){const mt=vi[ue];we=mt.vertexShader,Z=mt.fragmentShader}else we=E.vertexShader,Z=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),ae=l.getFragmentShaderID(E);const ce=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),be=k.isInstancedMesh===!0,Fe=k.isBatchedMesh===!0,$e=!!E.map,je=!!E.matcap,ut=!!Y,F=!!E.aoMap,Xe=!!E.lightMap,Se=!!E.bumpMap,ze=!!E.normalMap,Ue=!!E.displacementMap,Ve=!!E.emissiveMap,Ce=!!E.metalnessMap,D=!!E.roughnessMap,y=E.anisotropy>0,z=E.clearcoat>0,ee=E.dispersion>0,le=E.iridescence>0,re=E.sheen>0,ke=E.transmission>0,ge=y&&!!E.anisotropyMap,ye=z&&!!E.clearcoatMap,rt=z&&!!E.clearcoatNormalMap,ve=z&&!!E.clearcoatRoughnessMap,Le=le&&!!E.iridescenceMap,Ie=le&&!!E.iridescenceThicknessMap,Ne=re&&!!E.sheenColorMap,Ae=re&&!!E.sheenRoughnessMap,He=!!E.specularMap,qe=!!E.specularColorMap,et=!!E.specularIntensityMap,O=ke&&!!E.transmissionMap,J=ke&&!!E.thicknessMap,ne=!!E.gradientMap,he=!!E.alphaMap,De=E.alphaTest>0,Re=!!E.alphaHash,Ge=!!E.extensions;let yt=Bi;E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(yt=i.toneMapping);const At={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:we,fragmentShader:Z,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:Fe,batchingColor:Fe&&k._colorsTexture!==null,instancing:be,instancingColor:be&&k.instanceColor!==null,instancingMorph:be&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Wi,alphaToCoverage:!!E.alphaToCoverage,map:$e,matcap:je,envMap:ut,envMapMode:ut&&Y.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:Xe,bumpMap:Se,normalMap:ze,displacementMap:d&&Ue,emissiveMap:Ve,normalMapObjectSpace:ze&&E.normalMapType===e_,normalMapTangentSpace:ze&&E.normalMapType===Qm,metalnessMap:Ce,roughnessMap:D,anisotropy:y,anisotropyMap:ge,clearcoat:z,clearcoatMap:ye,clearcoatNormalMap:rt,clearcoatRoughnessMap:ve,dispersion:ee,iridescence:le,iridescenceMap:Le,iridescenceThicknessMap:Ie,sheen:re,sheenColorMap:Ne,sheenRoughnessMap:Ae,specularMap:He,specularColorMap:qe,specularIntensityMap:et,transmission:ke,transmissionMap:O,thicknessMap:J,gradientMap:ne,opaque:E.transparent===!1&&E.blending===fr&&E.alphaToCoverage===!1,alphaMap:he,alphaTest:De,alphaHash:Re,combine:E.combine,mapUv:$e&&g(E.map.channel),aoMapUv:F&&g(E.aoMap.channel),lightMapUv:Xe&&g(E.lightMap.channel),bumpMapUv:Se&&g(E.bumpMap.channel),normalMapUv:ze&&g(E.normalMap.channel),displacementMapUv:Ue&&g(E.displacementMap.channel),emissiveMapUv:Ve&&g(E.emissiveMap.channel),metalnessMapUv:Ce&&g(E.metalnessMap.channel),roughnessMapUv:D&&g(E.roughnessMap.channel),anisotropyMapUv:ge&&g(E.anisotropyMap.channel),clearcoatMapUv:ye&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(E.sheenRoughnessMap.channel),specularMapUv:He&&g(E.specularMap.channel),specularColorMapUv:qe&&g(E.specularColorMap.channel),specularIntensityMapUv:et&&g(E.specularIntensityMap.channel),transmissionMapUv:O&&g(E.transmissionMap.channel),thicknessMapUv:J&&g(E.thicknessMap.channel),alphaMapUv:he&&g(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ze||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&($e||he),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:pe,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:$e&&E.map.isVideoTexture===!0&&gt.getTransfer(E.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ve&&E.emissiveMap.isVideoTexture===!0&&gt.getTransfer(E.emissiveMap.colorSpace)===Mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Sn,flipSided:E.side===An,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ge&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&E.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function p(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)T.push(U),T.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(b(T,E),M(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function b(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function M(E,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const T=v[E.type];let U;if(T){const H=vi[T];U=Z_.clone(H.uniforms)}else U=E.uniforms;return U}function P(E,T){let U;for(let H=0,k=u.length;H<k;H++){const q=u[H];if(q.cacheKey===T){U=q,++U.usedTimes;break}}return U===void 0&&(U=new aS(i,T,E,s),u.push(U)),U}function I(E){if(--E.usedTimes===0){const T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:P,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:L}}function fS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function dS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,_,v,g,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:_,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=_,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,d,_,v,g,m){const p=o(f,d,_,v,g,m);_.transmission>0?n.push(p):_.transparent===!0?r.push(p):t.push(p)}function l(f,d,_,v,g,m){const p=o(f,d,_,v,g,m);_.transmission>0?n.unshift(p):_.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||dS),n.length>1&&n.sort(d||Mh),r.length>1&&r.sort(d||Mh)}function u(){for(let f=e,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function pS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Eh,i.set(n,[o])):r>=s.length?(o=new Eh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new tt};break;case"SpotLight":t={position:new B,direction:new B,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function _S(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gS=0;function vS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xS(i){const e=new mS,t=_S(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const r=new B,s=new pt,o=new pt;function a(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let _=0,v=0,g=0,m=0,p=0,b=0,M=0,S=0,P=0,I=0,R=0;c.sort(vS);for(let E=0,T=c.length;E<T;E++){const U=c[E],H=U.color,k=U.intensity,q=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=H.r*k,f+=H.g*k,d+=H.b*k;else if(U.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(U.sh.coefficients[W],k);R++}else if(U.isDirectionalLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Y=U.shadow,G=t.get(U);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[_]=G,n.directionalShadowMap[_]=j,n.directionalShadowMatrix[_]=U.shadow.matrix,b++}n.directional[_]=W,_++}else if(U.isSpotLight){const W=e.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(H).multiplyScalar(k),W.distance=q,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,n.spot[g]=W;const Y=U.shadow;if(U.map&&(n.spotLightMap[P]=U.map,P++,Y.updateMatrices(U),U.castShadow&&I++),n.spotLightMatrix[g]=Y.matrix,U.castShadow){const G=t.get(U);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=j,S++}g++}else if(U.isRectAreaLight){const W=e.get(U);W.color.copy(H).multiplyScalar(k),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=W,m++}else if(U.isPointLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){const Y=U.shadow,G=t.get(U);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=j,n.pointShadowMatrix[v]=U.shadow.matrix,M++}n.point[v]=W,v++}else if(U.isHemisphereLight){const W=e.get(U);W.skyColor.copy(U.color).multiplyScalar(k),W.groundColor.copy(U.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==_||L.pointLength!==v||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==S||L.numSpotMaps!==P||L.numLightProbes!==R)&&(n.directional.length=_,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,L.directionalLength=_,L.pointLength=v,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=S,L.numSpotMaps=P,L.numLightProbes=R,n.version=gS++)}function l(c,u){let f=0,d=0,_=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(M.isSpotLight){const S=n.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),_++}else if(M.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function wh(i){const e=new xS(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function SS(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new wh(i),e.set(r,[a])):s>=o.length?(a=new wh(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class yS extends wa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MS extends wa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ES=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wS=`uniform sampler2D shadow_pass;
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
}`;function bS(i,e,t){let n=new pd;const r=new ct,s=new ct,o=new Ct,a=new yS({depthPacking:Jm}),l=new MS,c={},u=t.maxTextureSize,f={[_r]:An,[An]:_r,[Sn]:Sn},d=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:ES,fragmentShader:wS}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const v=new qi;v.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Wt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wf;let p=this.type;this.render=function(I,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const E=i.getRenderTarget(),T=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(hi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==Pi&&this.type===Pi,q=p===Pi&&this.type!==Pi;for(let j=0,W=I.length;j<W;j++){const Y=I[j],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ue=G.getFrameExtents();if(r.multiply(ue),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,G.mapSize.y=s.y)),G.map===null||k===!0||q===!0){const te=this.type!==Pi?{minFilter:pn,magFilter:pn}:{};G.map!==null&&G.map.dispose(),G.map=new Xi(r.x,r.y,te),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const _e=G.getViewportCount();for(let te=0;te<_e;te++){const Ee=G.getViewport(te);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),H.viewport(o),G.updateMatrices(Y,te),n=G.getFrustum(),S(R,L,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Pi&&b(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,U)};function b(I,R){const L=e.update(g);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Xi(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,g,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(R,null,L,_,g,null)}function M(I,R,L,E){let T=null;const U=L.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)T=U;else if(T=L.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=T.uuid,k=R.uuid;let q=c[H];q===void 0&&(q={},c[H]=q);let j=q[k];j===void 0&&(j=T.clone(),q[k]=j,R.addEventListener("dispose",P)),T=j}if(T.visible=R.visible,T.wireframe=R.wireframe,E===Pi?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=i.properties.get(T);H.light=L}return T}function S(I,R,L,E,T){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===Pi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,I.matrixWorld);const k=e.update(I),q=I.material;if(Array.isArray(q)){const j=k.groups;for(let W=0,Y=j.length;W<Y;W++){const G=j[W],ue=q[G.materialIndex];if(ue&&ue.visible){const _e=M(I,ue,E,T);I.onBeforeShadow(i,I,R,L,k,_e,G),i.renderBufferDirect(L,null,k,_e,I,G),I.onAfterShadow(i,I,R,L,k,_e,G)}}}else if(q.visible){const j=M(I,q,E,T);I.onBeforeShadow(i,I,R,L,k,j,null),i.renderBufferDirect(L,null,k,j,I,null),I.onAfterShadow(i,I,R,L,k,j,null)}}const H=I.children;for(let k=0,q=H.length;k<q;k++)S(H[k],R,L,E,T)}function P(I){I.target.removeEventListener("dispose",P);for(const L in c){const E=c[L],T=I.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}const TS={[Ul]:Nl,[Fl]:Bl,[Ol]:kl,[Ms]:zl,[Nl]:Ul,[Bl]:Fl,[kl]:Ol,[zl]:Ms};function AS(i,e){function t(){let O=!1;const J=new Ct;let ne=null;const he=new Ct(0,0,0,0);return{setMask:function(De){ne!==De&&!O&&(i.colorMask(De,De,De,De),ne=De)},setLocked:function(De){O=De},setClear:function(De,Re,Ge,yt,At){At===!0&&(De*=yt,Re*=yt,Ge*=yt),J.set(De,Re,Ge,yt),he.equals(J)===!1&&(i.clearColor(De,Re,Ge,yt),he.copy(J))},reset:function(){O=!1,ne=null,he.set(-1,0,0,0)}}}function n(){let O=!1,J=!1,ne=null,he=null,De=null;return{setReversed:function(Re){if(J!==Re){const Ge=e.get("EXT_clip_control");J?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const yt=De;De=null,this.setClear(yt)}J=Re},getReversed:function(){return J},setTest:function(Re){Re?ce(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Re){ne!==Re&&!O&&(i.depthMask(Re),ne=Re)},setFunc:function(Re){if(J&&(Re=TS[Re]),he!==Re){switch(Re){case Ul:i.depthFunc(i.NEVER);break;case Nl:i.depthFunc(i.ALWAYS);break;case Fl:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case Ol:i.depthFunc(i.EQUAL);break;case zl:i.depthFunc(i.GEQUAL);break;case Bl:i.depthFunc(i.GREATER);break;case kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Re}},setLocked:function(Re){O=Re},setClear:function(Re){De!==Re&&(J&&(Re=1-Re),i.clearDepth(Re),De=Re)},reset:function(){O=!1,ne=null,he=null,De=null,J=!1}}}function r(){let O=!1,J=null,ne=null,he=null,De=null,Re=null,Ge=null,yt=null,At=null;return{setTest:function(mt){O||(mt?ce(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(mt){J!==mt&&!O&&(i.stencilMask(mt),J=mt)},setFunc:function(mt,Qt,mn){(ne!==mt||he!==Qt||De!==mn)&&(i.stencilFunc(mt,Qt,mn),ne=mt,he=Qt,De=mn)},setOp:function(mt,Qt,mn){(Re!==mt||Ge!==Qt||yt!==mn)&&(i.stencilOp(mt,Qt,mn),Re=mt,Ge=Qt,yt=mn)},setLocked:function(mt){O=mt},setClear:function(mt){At!==mt&&(i.clearStencil(mt),At=mt)},reset:function(){O=!1,J=null,ne=null,he=null,De=null,Re=null,Ge=null,yt=null,At=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,_=[],v=null,g=!1,m=null,p=null,b=null,M=null,S=null,P=null,I=null,R=new tt(0,0,0),L=0,E=!1,T=null,U=null,H=null,k=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Y>=2);let ue=null,_e={};const te=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),we=new Ct().fromArray(te),Z=new Ct().fromArray(Ee);function oe(O,J,ne,he){const De=new Uint8Array(4),Re=i.createTexture();i.bindTexture(O,Re),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<ne;Ge++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(J+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Re}const ae={};ae[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Ms),Se(!1),ze(Tu),ce(i.CULL_FACE),F(hi);function ce(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function pe(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function be(O,J){return f[O]!==J?(i.bindFramebuffer(O,J),f[O]=J,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=J),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Fe(O,J){let ne=_,he=!1;if(O){ne=d.get(J),ne===void 0&&(ne=[],d.set(J,ne));const De=O.textures;if(ne.length!==De.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Ge=De.length;Re<Ge;Re++)ne[Re]=i.COLOR_ATTACHMENT0+Re;ne.length=De.length,he=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,he=!0);he&&i.drawBuffers(ne)}function $e(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const je={[Ii]:i.FUNC_ADD,[bm]:i.FUNC_SUBTRACT,[Tm]:i.FUNC_REVERSE_SUBTRACT};je[Am]=i.MIN,je[Rm]=i.MAX;const ut={[Cm]:i.ZERO,[Ys]:i.ONE,[Pm]:i.SRC_COLOR,[Ll]:i.SRC_ALPHA,[Fm]:i.SRC_ALPHA_SATURATE,[Um]:i.DST_COLOR,[Lm]:i.DST_ALPHA,[Dm]:i.ONE_MINUS_SRC_COLOR,[Il]:i.ONE_MINUS_SRC_ALPHA,[Nm]:i.ONE_MINUS_DST_COLOR,[Im]:i.ONE_MINUS_DST_ALPHA,[Om]:i.CONSTANT_COLOR,[zm]:i.ONE_MINUS_CONSTANT_COLOR,[Bm]:i.CONSTANT_ALPHA,[km]:i.ONE_MINUS_CONSTANT_ALPHA};function F(O,J,ne,he,De,Re,Ge,yt,At,mt){if(O===hi){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(ce(i.BLEND),g=!0),O!==Xf){if(O!==m||mt!==E){if((p!==Ii||S!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,S=Ii),mt)switch(O){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Au:i.blendFunc(i.ONE,i.ONE);break;case Ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Au:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,M=null,P=null,I=null,R.set(0,0,0),L=0,m=O,E=mt}return}De=De||J,Re=Re||ne,Ge=Ge||he,(J!==p||De!==S)&&(i.blendEquationSeparate(je[J],je[De]),p=J,S=De),(ne!==b||he!==M||Re!==P||Ge!==I)&&(i.blendFuncSeparate(ut[ne],ut[he],ut[Re],ut[Ge]),b=ne,M=he,P=Re,I=Ge),(yt.equals(R)===!1||At!==L)&&(i.blendColor(yt.r,yt.g,yt.b,At),R.copy(yt),L=At),m=O,E=!1}function Xe(O,J){O.side===Sn?pe(i.CULL_FACE):ce(i.CULL_FACE);let ne=O.side===An;J&&(ne=!ne),Se(ne),O.blending===fr&&O.transparent===!1?F(hi):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const he=O.stencilWrite;a.setTest(he),he&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ve(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(O){T!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),T=O)}function ze(O){O!==Mm?(ce(i.CULL_FACE),O!==U&&(O===Tu?i.cullFace(i.BACK):O===Em?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),U=O}function Ue(O){O!==H&&(W&&i.lineWidth(O),H=O)}function Ve(O,J,ne){O?(ce(i.POLYGON_OFFSET_FILL),(k!==J||q!==ne)&&(i.polygonOffset(J,ne),k=J,q=ne)):pe(i.POLYGON_OFFSET_FILL)}function Ce(O){O?ce(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function D(O){O===void 0&&(O=i.TEXTURE0+j-1),ue!==O&&(i.activeTexture(O),ue=O)}function y(O,J,ne){ne===void 0&&(ue===null?ne=i.TEXTURE0+j-1:ne=ue);let he=_e[ne];he===void 0&&(he={type:void 0,texture:void 0},_e[ne]=he),(he.type!==O||he.texture!==J)&&(ue!==ne&&(i.activeTexture(ne),ue=ne),i.bindTexture(O,J||ae[O]),he.type=O,he.texture=J)}function z(){const O=_e[ue];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(O){we.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),we.copy(O))}function Ae(O){Z.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Z.copy(O))}function He(O,J){let ne=c.get(J);ne===void 0&&(ne=new WeakMap,c.set(J,ne));let he=ne.get(O);he===void 0&&(he=i.getUniformBlockIndex(J,O.name),ne.set(O,he))}function qe(O,J){const he=c.get(J).get(O);l.get(J)!==he&&(i.uniformBlockBinding(J,he,O.__bindingPointIndex),l.set(J,he))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ue=null,_e={},f={},d=new WeakMap,_=[],v=null,g=!1,m=null,p=null,b=null,M=null,S=null,P=null,I=null,R=new tt(0,0,0),L=0,E=!1,T=null,U=null,H=null,k=null,q=null,we.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:pe,bindFramebuffer:be,drawBuffers:Fe,useProgram:$e,setBlending:F,setMaterial:Xe,setFlipSided:Se,setCullFace:ze,setLineWidth:Ue,setPolygonOffset:Ve,setScissorTest:Ce,activeTexture:D,bindTexture:y,unbindTexture:z,compressedTexImage2D:ee,compressedTexImage3D:le,texImage2D:Le,texImage3D:Ie,updateUBOMapping:He,uniformBlockBinding:qe,texStorage2D:rt,texStorage3D:ve,texSubImage2D:re,texSubImage3D:ke,compressedTexSubImage2D:ge,compressedTexSubImage3D:ye,scissor:Ne,viewport:Ae,reset:et}}function bh(i,e,t,n){const r=RS(n);switch(t){case jf:return i*e;case Qf:return i*e;case ed:return i*e*2;case Hc:return i*e/r.components*r.byteLength;case Vc:return i*e/r.components*r.byteLength;case td:return i*e*2/r.components*r.byteLength;case Gc:return i*e*2/r.components*r.byteLength;case Jf:return i*e*3/r.components*r.byteLength;case dn:return i*e*4/r.components*r.byteLength;case Wc:return i*e*4/r.components*r.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:case ql:return Math.max(i,16)*Math.max(e,8)/4;case Gl:case Xl:return Math.max(i,8)*Math.max(e,8)/2;case Yl:case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oa:case uc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nd:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dc:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function RS(i){switch(i){case Gi:case Zf:return{byteLength:1,components:1};case bs:case $f:case yi:return{byteLength:2,components:1};case Bc:case kc:return{byteLength:2,components:4};case Gr:case zc:case On:return{byteLength:4,components:1};case Kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function CS(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,y){return _?new OffscreenCanvas(D,y):_o("canvas")}function g(D,y,z){let ee=1;const le=Ce(D);if((le.width>z||le.height>z)&&(ee=z/Math.max(le.width,le.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const re=Math.floor(ee*le.width),ke=Math.floor(ee*le.height);f===void 0&&(f=v(re,ke));const ge=y?v(re,ke):f;return ge.width=re,ge.height=ke,ge.getContext("2d").drawImage(D,0,0,re,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+re+"x"+ke+")."),ge}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(D,y,z,ee,le=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let re=y;if(y===i.RED&&(z===i.FLOAT&&(re=i.R32F),z===i.HALF_FLOAT&&(re=i.R16F),z===i.UNSIGNED_BYTE&&(re=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(re=i.R8UI),z===i.UNSIGNED_SHORT&&(re=i.R16UI),z===i.UNSIGNED_INT&&(re=i.R32UI),z===i.BYTE&&(re=i.R8I),z===i.SHORT&&(re=i.R16I),z===i.INT&&(re=i.R32I)),y===i.RG&&(z===i.FLOAT&&(re=i.RG32F),z===i.HALF_FLOAT&&(re=i.RG16F),z===i.UNSIGNED_BYTE&&(re=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(re=i.RG8UI),z===i.UNSIGNED_SHORT&&(re=i.RG16UI),z===i.UNSIGNED_INT&&(re=i.RG32UI),z===i.BYTE&&(re=i.RG8I),z===i.SHORT&&(re=i.RG16I),z===i.INT&&(re=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(re=i.RGB8UI),z===i.UNSIGNED_SHORT&&(re=i.RGB16UI),z===i.UNSIGNED_INT&&(re=i.RGB32UI),z===i.BYTE&&(re=i.RGB8I),z===i.SHORT&&(re=i.RGB16I),z===i.INT&&(re=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),z===i.UNSIGNED_INT&&(re=i.RGBA32UI),z===i.BYTE&&(re=i.RGBA8I),z===i.SHORT&&(re=i.RGBA16I),z===i.INT&&(re=i.RGBA32I)),y===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),y===i.RGBA){const ke=le?Ea:gt.getTransfer(ee);z===i.FLOAT&&(re=i.RGBA32F),z===i.HALF_FLOAT&&(re=i.RGBA16F),z===i.UNSIGNED_BYTE&&(re=ke===Mt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(D,y){let z;return D?y===null||y===Gr||y===Ts?z=i.DEPTH24_STENCIL8:y===On?z=i.DEPTH32F_STENCIL8:y===bs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gr||y===Ts?z=i.DEPTH_COMPONENT24:y===On?z=i.DEPTH_COMPONENT32F:y===bs&&(z=i.DEPTH_COMPONENT16),z}function P(D,y){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==pn&&D.minFilter!==Vt?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function I(D){const y=D.target;y.removeEventListener("dispose",I),L(y),y.isVideoTexture&&u.delete(y)}function R(D){const y=D.target;y.removeEventListener("dispose",R),T(y)}function L(D){const y=n.get(D);if(y.__webglInit===void 0)return;const z=D.source,ee=d.get(z);if(ee){const le=ee[y.__cacheKey];le.usedTimes--,le.usedTimes===0&&E(D),Object.keys(ee).length===0&&d.delete(z)}n.remove(D)}function E(D){const y=n.get(D);i.deleteTexture(y.__webglTexture);const z=D.source,ee=d.get(z);delete ee[y.__cacheKey],o.memory.textures--}function T(D){const y=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(y.__webglFramebuffer[ee]))for(let le=0;le<y.__webglFramebuffer[ee].length;le++)i.deleteFramebuffer(y.__webglFramebuffer[ee][le]);else i.deleteFramebuffer(y.__webglFramebuffer[ee]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ee])}else{if(Array.isArray(y.__webglFramebuffer))for(let ee=0;ee<y.__webglFramebuffer.length;ee++)i.deleteFramebuffer(y.__webglFramebuffer[ee]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ee=0;ee<y.__webglColorRenderbuffer.length;ee++)y.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ee]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=D.textures;for(let ee=0,le=z.length;ee<le;ee++){const re=n.get(z[ee]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(z[ee])}n.remove(D)}let U=0;function H(){U=0}function k(){const D=U;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),U+=1,D}function q(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function j(D,y){const z=n.get(D);if(D.isVideoTexture&&Ue(D),D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){const ee=D.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,D,y);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function W(D,y){const z=n.get(D);if(D.version>0&&z.__version!==D.version){Z(z,D,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function Y(D,y){const z=n.get(D);if(D.version>0&&z.__version!==D.version){Z(z,D,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function G(D,y){const z=n.get(D);if(D.version>0&&z.__version!==D.version){oe(z,D,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}const ue={[ps]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},_e={[pn]:i.NEAREST,[Km]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},te={[t_]:i.NEVER,[a_]:i.ALWAYS,[n_]:i.LESS,[id]:i.LEQUAL,[i_]:i.EQUAL,[o_]:i.GEQUAL,[r_]:i.GREATER,[s_]:i.NOTEQUAL};function Ee(D,y){if(y.type===On&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vt||y.magFilter===Na||y.magFilter===wo||y.magFilter===Fi||y.minFilter===Vt||y.minFilter===Na||y.minFilter===wo||y.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ue[y.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ue[y.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ue[y.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,_e[y.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,te[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pn||y.minFilter!==wo&&y.minFilter!==Fi||y.type===On&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function we(D,y){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",I));const ee=y.source;let le=d.get(ee);le===void 0&&(le={},d.set(ee,le));const re=q(y);if(re!==D.__cacheKey){le[re]===void 0&&(le[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),le[re].usedTimes++;const ke=le[D.__cacheKey];ke!==void 0&&(le[D.__cacheKey].usedTimes--,ke.usedTimes===0&&E(y)),D.__cacheKey=re,D.__webglTexture=le[re].texture}return z}function Z(D,y,z){let ee=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=i.TEXTURE_3D);const le=we(D,y),re=y.source;t.bindTexture(ee,D.__webglTexture,i.TEXTURE0+z);const ke=n.get(re);if(re.version!==ke.__version||le===!0){t.activeTexture(i.TEXTURE0+z);const ge=gt.getPrimaries(gt.workingColorSpace),ye=y.colorSpace===yn?null:gt.getPrimaries(y.colorSpace),rt=y.colorSpace===yn||ge===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ve=g(y.image,!1,r.maxTextureSize);ve=Ve(y,ve);const Le=s.convert(y.format,y.colorSpace),Ie=s.convert(y.type);let Ne=M(y.internalFormat,Le,Ie,y.colorSpace,y.isVideoTexture);Ee(ee,y);let Ae;const He=y.mipmaps,qe=y.isVideoTexture!==!0,et=ke.__version===void 0||le===!0,O=re.dataReady,J=P(y,ve);if(y.isDepthTexture)Ne=S(y.format===As,y.type),et&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Le,Ie,null));else if(y.isDataTexture)if(He.length>0){qe&&et&&t.texStorage2D(i.TEXTURE_2D,J,Ne,He[0].width,He[0].height);for(let ne=0,he=He.length;ne<he;ne++)Ae=He[ne],qe?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ae.width,Ae.height,Le,Ie,Ae.data):t.texImage2D(i.TEXTURE_2D,ne,Ne,Ae.width,Ae.height,0,Le,Ie,Ae.data);y.generateMipmaps=!1}else qe?(et&&t.texStorage2D(i.TEXTURE_2D,J,Ne,ve.width,ve.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve.width,ve.height,Le,Ie,ve.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Le,Ie,ve.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qe&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,Ne,He[0].width,He[0].height,ve.depth);for(let ne=0,he=He.length;ne<he;ne++)if(Ae=He[ne],y.format!==dn)if(Le!==null)if(qe){if(O)if(y.layerUpdates.size>0){const De=bh(Ae.width,Ae.height,y.format,y.type);for(const Re of y.layerUpdates){const Ge=Ae.data.subarray(Re*De/Ae.data.BYTES_PER_ELEMENT,(Re+1)*De/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Re,Ae.width,Ae.height,1,Le,Ge)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ae.width,Ae.height,ve.depth,Le,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ne,Ae.width,Ae.height,ve.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ae.width,Ae.height,ve.depth,Le,Ie,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ne,Ae.width,Ae.height,ve.depth,0,Le,Ie,Ae.data)}else{qe&&et&&t.texStorage2D(i.TEXTURE_2D,J,Ne,He[0].width,He[0].height);for(let ne=0,he=He.length;ne<he;ne++)Ae=He[ne],y.format!==dn?Le!==null?qe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Ae.width,Ae.height,Le,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ne,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ae.width,Ae.height,Le,Ie,Ae.data):t.texImage2D(i.TEXTURE_2D,ne,Ne,Ae.width,Ae.height,0,Le,Ie,Ae.data)}else if(y.isDataArrayTexture)if(qe){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,Ne,ve.width,ve.height,ve.depth),O)if(y.layerUpdates.size>0){const ne=bh(ve.width,ve.height,y.format,y.type);for(const he of y.layerUpdates){const De=ve.data.subarray(he*ne/ve.data.BYTES_PER_ELEMENT,(he+1)*ne/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,ve.width,ve.height,1,Le,Ie,De)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Le,Ie,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,Le,Ie,ve.data);else if(y.isData3DTexture)qe?(et&&t.texStorage3D(i.TEXTURE_3D,J,Ne,ve.width,ve.height,ve.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Le,Ie,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,Le,Ie,ve.data);else if(y.isFramebufferTexture){if(et)if(qe)t.texStorage2D(i.TEXTURE_2D,J,Ne,ve.width,ve.height);else{let ne=ve.width,he=ve.height;for(let De=0;De<J;De++)t.texImage2D(i.TEXTURE_2D,De,Ne,ne,he,0,Le,Ie,null),ne>>=1,he>>=1}}else if(He.length>0){if(qe&&et){const ne=Ce(He[0]);t.texStorage2D(i.TEXTURE_2D,J,Ne,ne.width,ne.height)}for(let ne=0,he=He.length;ne<he;ne++)Ae=He[ne],qe?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Le,Ie,Ae):t.texImage2D(i.TEXTURE_2D,ne,Ne,Le,Ie,Ae);y.generateMipmaps=!1}else if(qe){if(et){const ne=Ce(ve);t.texStorage2D(i.TEXTURE_2D,J,Ne,ne.width,ne.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ie,ve)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Le,Ie,ve);m(y)&&p(ee),ke.__version=re.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function oe(D,y,z){if(y.image.length!==6)return;const ee=we(D,y),le=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+z);const re=n.get(le);if(le.version!==re.__version||ee===!0){t.activeTexture(i.TEXTURE0+z);const ke=gt.getPrimaries(gt.workingColorSpace),ge=y.colorSpace===yn?null:gt.getPrimaries(y.colorSpace),ye=y.colorSpace===yn||ke===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const rt=y.isCompressedTexture||y.image[0].isCompressedTexture,ve=y.image[0]&&y.image[0].isDataTexture,Le=[];for(let he=0;he<6;he++)!rt&&!ve?Le[he]=g(y.image[he],!0,r.maxCubemapSize):Le[he]=ve?y.image[he].image:y.image[he],Le[he]=Ve(y,Le[he]);const Ie=Le[0],Ne=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type),He=M(y.internalFormat,Ne,Ae,y.colorSpace),qe=y.isVideoTexture!==!0,et=re.__version===void 0||ee===!0,O=le.dataReady;let J=P(y,Ie);Ee(i.TEXTURE_CUBE_MAP,y);let ne;if(rt){qe&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,J,He,Ie.width,Ie.height);for(let he=0;he<6;he++){ne=Le[he].mipmaps;for(let De=0;De<ne.length;De++){const Re=ne[De];y.format!==dn?Ne!==null?qe?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Re.width,Re.height,Ne,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,He,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Re.width,Re.height,Ne,Ae,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,He,Re.width,Re.height,0,Ne,Ae,Re.data)}}}else{if(ne=y.mipmaps,qe&&et){ne.length>0&&J++;const he=Ce(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,J,He,he.width,he.height)}for(let he=0;he<6;he++)if(ve){qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Le[he].width,Le[he].height,Ne,Ae,Le[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,He,Le[he].width,Le[he].height,0,Ne,Ae,Le[he].data);for(let De=0;De<ne.length;De++){const Ge=ne[De].image[he].image;qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,Ge.width,Ge.height,Ne,Ae,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,He,Ge.width,Ge.height,0,Ne,Ae,Ge.data)}}else{qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne,Ae,Le[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,He,Ne,Ae,Le[he]);for(let De=0;De<ne.length;De++){const Re=ne[De];qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,Ne,Ae,Re.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,He,Ne,Ae,Re.image[he])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),re.__version=le.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ae(D,y,z,ee,le,re){const ke=s.convert(z.format,z.colorSpace),ge=s.convert(z.type),ye=M(z.internalFormat,ke,ge,z.colorSpace),rt=n.get(y),ve=n.get(z);if(ve.__renderTarget=y,!rt.__hasExternalTextures){const Le=Math.max(1,y.width>>re),Ie=Math.max(1,y.height>>re);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,re,ye,Le,Ie,y.depth,0,ke,ge,null):t.texImage2D(le,re,ye,Le,Ie,0,ke,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ze(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,le,ve.__webglTexture,0,Se(y)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,le,ve.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(D,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),y.depthBuffer){const ee=y.depthTexture,le=ee&&ee.isDepthTexture?ee.type:null,re=S(y.stencilBuffer,le),ke=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=Se(y);ze(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,re,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,re,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,re,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,D)}else{const ee=y.textures;for(let le=0;le<ee.length;le++){const re=ee[le],ke=s.convert(re.format,re.colorSpace),ge=s.convert(re.type),ye=M(re.internalFormat,ke,ge,re.colorSpace),rt=Se(y);z&&ze(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,ye,y.width,y.height):ze(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,ye,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ye,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(D,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(y.depthTexture);ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const le=ee.__webglTexture,re=Se(y);if(y.depthTexture.format===ms)ze(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(y.depthTexture.format===As)ze(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function be(D){const y=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const ee=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ee){const le=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ee.removeEventListener("dispose",le)};ee.addEventListener("dispose",le),y.__depthDisposeCallback=le}y.__boundDepthTexture=ee}if(D.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");pe(y.__webglFramebuffer,D)}else if(z){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]===void 0)y.__webglDepthbuffer[ee]=i.createRenderbuffer(),ce(y.__webglDepthbuffer[ee],D,!1);else{const le=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,re)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ce(y.__webglDepthbuffer,D,!1);else{const ee=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(D,y,z){const ee=n.get(D);y!==void 0&&ae(ee.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&be(D)}function $e(D){const y=D.texture,z=n.get(D),ee=n.get(y);D.addEventListener("dispose",R);const le=D.textures,re=D.isWebGLCubeRenderTarget===!0,ke=le.length>1;if(ke||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=y.version,o.memory.textures++),re){z.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ge]=[];for(let ye=0;ye<y.mipmaps.length;ye++)z.__webglFramebuffer[ge][ye]=i.createFramebuffer()}else z.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ge=0;ge<y.mipmaps.length;ge++)z.__webglFramebuffer[ge]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ke)for(let ge=0,ye=le.length;ge<ye;ge++){const rt=n.get(le[ge]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ze(D)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){const ye=le[ge];z.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ge]);const rt=s.convert(ye.format,ye.colorSpace),ve=s.convert(ye.type),Le=M(ye.internalFormat,rt,ve,ye.colorSpace,D.isXRRenderTarget===!0),Ie=Se(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Le,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,z.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,y);for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)ae(z.__webglFramebuffer[ge][ye],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else ae(z.__webglFramebuffer[ge],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let ge=0,ye=le.length;ge<ye;ge++){const rt=le[ge],ve=n.get(rt);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),Ee(i.TEXTURE_2D,rt),ae(z.__webglFramebuffer,D,rt,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(rt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ee.__webglTexture),Ee(ge,y),y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)ae(z.__webglFramebuffer[ye],D,y,i.COLOR_ATTACHMENT0,ge,ye);else ae(z.__webglFramebuffer,D,y,i.COLOR_ATTACHMENT0,ge,0);m(y)&&p(ge),t.unbindTexture()}D.depthBuffer&&be(D)}function je(D){const y=D.textures;for(let z=0,ee=y.length;z<ee;z++){const le=y[z];if(m(le)){const re=b(D),ke=n.get(le).__webglTexture;t.bindTexture(re,ke),p(re),t.unbindTexture()}}}const ut=[],F=[];function Xe(D){if(D.samples>0){if(ze(D)===!1){const y=D.textures,z=D.width,ee=D.height;let le=i.COLOR_BUFFER_BIT;const re=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(D),ge=y.length>1;if(ge)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[ye]);const rt=n.get(y[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,z,ee,0,0,z,ee,le,i.NEAREST),l===!0&&(ut.length=0,F.length=0,ut.push(i.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ut.push(re),F.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ke.__webglColorRenderbuffer[ye]);const rt=n.get(y[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Se(D){return Math.min(r.maxSamples,D.samples)}function ze(D){const y=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ue(D){const y=o.render.frame;u.get(D)!==y&&(u.set(D,y),D.update())}function Ve(D,y){const z=D.colorSpace,ee=D.format,le=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==Wi&&z!==yn&&(gt.getTransfer(z)===Mt?(ee!==dn||le!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Ce(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ze}function PS(i,e){function t(n,r=yn){let s;const o=gt.getTransfer(r);if(n===Gi)return i.UNSIGNED_BYTE;if(n===Bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zf)return i.BYTE;if(n===$f)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===zc)return i.INT;if(n===Gr)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===jf)return i.ALPHA;if(n===Jf)return i.RGB;if(n===dn)return i.RGBA;if(n===Qf)return i.LUMINANCE;if(n===ed)return i.LUMINANCE_ALPHA;if(n===ms)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===Hc)return i.RED;if(n===Vc)return i.RED_INTEGER;if(n===td)return i.RG;if(n===Gc)return i.RG_INTEGER;if(n===Wc)return i.RGBA_INTEGER;if(n===na||n===ia||n===ra||n===sa)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Wl||n===Xl||n===ql)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===Zl||n===$l)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yl||n===Zl)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===$l)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kl||n===jl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===rc||n===sc||n===oc||n===ac||n===lc||n===cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Kl)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tc)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===uc||n===hc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===oa)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nd||n===fc||n===dc||n===pc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===oa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class DS extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zi extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LS={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),_=.02,v=.005;c.inputState.pinching&&d>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const IS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,US=`
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

}`;class NS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nt({vertexShader:IS,fragmentShader:US,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FS extends Cs{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,_=null,v=null;const g=new NS,m=t.getContextAttributes();let p=null,b=null;const M=[],S=[],P=new ct;let I=null;const R=new vn;R.viewport=new Ct;const L=new vn;L.viewport=new Ct;const E=[R,L],T=new DS;let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=M[Z];return oe===void 0&&(oe=new ll,M[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=M[Z];return oe===void 0&&(oe=new ll,M[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=M[Z];return oe===void 0&&(oe=new ll,M[Z]=oe),oe.getHandSpace()};function k(Z){const oe=S.indexOf(Z.inputSource);if(oe===-1)return;const ae=M[oe];ae!==void 0&&(ae.update(Z.inputSource,Z.frame,c||o),ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",j);for(let Z=0;Z<M.length;Z++){const oe=S[Z];oe!==null&&(S[Z]=null,M[Z].disconnect(oe))}U=null,H=null,g.reset(),e.setRenderTarget(p),_=null,d=null,f=null,r=null,b=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new Xi(_.framebufferWidth,_.framebufferHeight,{format:dn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ae=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?As:ms,ae=m.stencil?Ts:Gr);const pe={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Xi(d.textureWidth,d.textureHeight,{format:dn,type:Gi,depthTexture:new $c(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Z){for(let oe=0;oe<Z.removed.length;oe++){const ae=Z.removed[oe],ce=S.indexOf(ae);ce>=0&&(S[ce]=null,M[ce].disconnect(ae))}for(let oe=0;oe<Z.added.length;oe++){const ae=Z.added[oe];let ce=S.indexOf(ae);if(ce===-1){for(let be=0;be<M.length;be++)if(be>=S.length){S.push(ae),ce=be;break}else if(S[be]===null){S[be]=ae,ce=be;break}if(ce===-1)break}const pe=M[ce];pe&&pe.connect(ae)}}const W=new B,Y=new B;function G(Z,oe,ae){W.setFromMatrixPosition(oe.matrixWorld),Y.setFromMatrixPosition(ae.matrixWorld);const ce=W.distanceTo(Y),pe=oe.projectionMatrix.elements,be=ae.projectionMatrix.elements,Fe=pe[14]/(pe[10]-1),$e=pe[14]/(pe[10]+1),je=(pe[9]+1)/pe[5],ut=(pe[9]-1)/pe[5],F=(pe[8]-1)/pe[0],Xe=(be[8]+1)/be[0],Se=Fe*F,ze=Fe*Xe,Ue=ce/(-F+Xe),Ve=Ue*-F;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ve),Z.translateZ(Ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),pe[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ce=Fe+Ue,D=$e+Ue,y=Se-Ve,z=ze+(ce-Ve),ee=je*$e/D*Ce,le=ut*$e/D*Ce;Z.projectionMatrix.makePerspective(y,z,ee,le,Ce,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,ae=Z.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),T.near=L.near=R.near=oe,T.far=L.far=R.far=ae,(U!==T.near||H!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,H=T.far),R.layers.mask=Z.layers.mask|2,L.layers.mask=Z.layers.mask|4,T.layers.mask=R.layers.mask|L.layers.mask;const ce=Z.parent,pe=T.cameras;ue(T,ce);for(let be=0;be<pe.length;be++)ue(pe[be],ce);pe.length===2?G(T,R,L):T.projectionMatrix.copy(R.projectionMatrix),_e(Z,T,ce)};function _e(Z,oe,ae){ae===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=mo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)};let te=null;function Ee(Z,oe){if(u=oe.getViewerPose(c||o),v=oe,u!==null){const ae=u.views;_!==null&&(e.setRenderTargetFramebuffer(b,_.framebuffer),e.setRenderTarget(b));let ce=!1;ae.length!==T.cameras.length&&(T.cameras.length=0,ce=!0);for(let be=0;be<ae.length;be++){const Fe=ae[be];let $e=null;if(_!==null)$e=_.getViewport(Fe);else{const ut=f.getViewSubImage(d,Fe);$e=ut.viewport,be===0&&(e.setRenderTargetTextures(b,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(b))}let je=E[be];je===void 0&&(je=new vn,je.layers.enable(be),je.viewport=new Ct,E[be]=je),je.matrix.fromArray(Fe.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Fe.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set($e.x,$e.y,$e.width,$e.height),be===0&&(T.matrix.copy(je.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ce===!0&&T.cameras.push(je)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const be=f.getDepthInformation(ae[0]);be&&be.isValid&&be.texture&&g.init(e,be,r.renderState)}}for(let ae=0;ae<M.length;ae++){const ce=S[ae],pe=M[ae];ce!==null&&pe!==void 0&&pe.update(ce,oe,c||o)}te&&te(Z,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const we=new md;we.setAnimationLoop(Ee),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}}const Rr=new Vn,OS=new pt;function zS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&_(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,S=b.envMapRotation;M&&(m.envMap.value=M,Rr.copy(S),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(OS.makeRotationFromEuler(Rr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function BS(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const S=M.program;n.uniformBlockBinding(b,S)}function c(b,M){let S=r[b.id];S===void 0&&(v(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(b,P);const I=e.render.frame;s[b.id]!==I&&(d(b),s[b.id]=I)}function u(b){const M=f();b.__bindingPointIndex=M;const S=i.createBuffer(),P=b.__size,I=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],S=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let I=0,R=S.length;I<R;I++){const L=Array.isArray(S[I])?S[I]:[S[I]];for(let E=0,T=L.length;E<T;E++){const U=L[E];if(_(U,I,E,P)===!0){const H=U.__offset,k=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let j=0;j<k.length;j++){const W=k[j],Y=g(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+q,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(b,M,S,P){const I=b.value,R=M+"_"+S;if(P[R]===void 0)return typeof I=="number"||typeof I=="boolean"?P[R]=I:P[R]=I.clone(),!0;{const L=P[R];if(typeof I=="number"||typeof I=="boolean"){if(L!==I)return P[R]=I,!0}else if(L.equals(I)===!1)return L.copy(I),!0}return!1}function v(b){const M=b.uniforms;let S=0;const P=16;for(let R=0,L=M.length;R<L;R++){const E=Array.isArray(M[R])?M[R]:[M[R]];for(let T=0,U=E.length;T<U;T++){const H=E[T],k=Array.isArray(H.value)?H.value:[H.value];for(let q=0,j=k.length;q<j;q++){const W=k[q],Y=g(W),G=S%P,ue=G%Y.boundary,_e=G+ue;S+=ue,_e!==0&&P-_e<Y.storage&&(S+=P-_e),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Y.storage}}}const I=S%P;return I>0&&(S+=P-I),b.__size=S,b.__cache={},this}function g(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Kc{constructor(e={}){const{canvas:t=w_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Bi,this.toneMappingExposure=1;const S=this;let P=!1,I=0,R=0,L=null,E=-1,T=null;const U=new Ct,H=new Ct;let k=null;const q=new tt(0);let j=0,W=t.width,Y=t.height,G=1,ue=null,_e=null;const te=new Ct(0,0,W,Y),Ee=new Ct(0,0,W,Y);let we=!1;const Z=new pd;let oe=!1,ae=!1;const ce=new pt,pe=new pt,be=new B,Fe=new Ct,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function ut(){return L===null?G:1}let F=n;function Xe(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Re,!1),F===null){const x="webgl2";if(F=Xe(x,h),F===null)throw Xe(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Se,ze,Ue,Ve,Ce,D,y,z,ee,le,re,ke,ge,ye,rt,ve,Le,Ie,Ne,Ae,He,qe,et,O;function J(){Se=new Xv(F),Se.init(),qe=new PS(F,Se),ze=new Bv(F,Se,e,qe),Ue=new AS(F,Se),ze.reverseDepthBuffer&&d&&Ue.buffers.depth.setReversed(!0),Ve=new Zv(F),Ce=new fS,D=new CS(F,Se,Ue,Ce,ze,qe,Ve),y=new Hv(S),z=new Wv(S),ee=new t0(F),et=new Ov(F,ee),le=new qv(F,ee,Ve,et),re=new Kv(F,le,ee,Ve),Ne=new $v(F,ze,D),ve=new kv(Ce),ke=new hS(S,y,z,Se,ze,et,ve),ge=new zS(S,Ce),ye=new pS,rt=new SS(Se),Ie=new Fv(S,y,z,Ue,re,_,l),Le=new bS(S,re,ze),O=new BS(F,Ve,ze,Ue),Ae=new zv(F,Se,Ve),He=new Yv(F,Se,Ve),Ve.programs=ke.programs,S.capabilities=ze,S.extensions=Se,S.properties=Ce,S.renderLists=ye,S.shadowMap=Le,S.state=Ue,S.info=Ve}J();const ne=new FS(S,F);this.xr=ne,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const h=Se.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Se.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(h){h!==void 0&&(G=h,this.setSize(W,Y,!1))},this.getSize=function(h){return h.set(W,Y)},this.setSize=function(h,x,w=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=h,Y=x,t.width=Math.floor(h*G),t.height=Math.floor(x*G),w===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(W*G,Y*G).floor()},this.setDrawingBufferSize=function(h,x,w){W=h,Y=x,G=w,t.width=Math.floor(h*w),t.height=Math.floor(x*w),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(U)},this.getViewport=function(h){return h.copy(te)},this.setViewport=function(h,x,w,A){h.isVector4?te.set(h.x,h.y,h.z,h.w):te.set(h,x,w,A),Ue.viewport(U.copy(te).multiplyScalar(G).round())},this.getScissor=function(h){return h.copy(Ee)},this.setScissor=function(h,x,w,A){h.isVector4?Ee.set(h.x,h.y,h.z,h.w):Ee.set(h,x,w,A),Ue.scissor(H.copy(Ee).multiplyScalar(G).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(h){Ue.setScissorTest(we=h)},this.setOpaqueSort=function(h){ue=h},this.setTransparentSort=function(h){_e=h},this.getClearColor=function(h){return h.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(h=!0,x=!0,w=!0){let A=0;if(h){let C=!1;if(L!==null){const N=L.texture.format;C=N===Wc||N===Gc||N===Vc}if(C){const N=L.texture.type,V=N===Gi||N===Gr||N===bs||N===Ts||N===Bc||N===kc,Q=Ie.getClearColor(),X=Ie.getClearAlpha(),K=Q.r,$=Q.g,ie=Q.b;V?(v[0]=K,v[1]=$,v[2]=ie,v[3]=X,F.clearBufferuiv(F.COLOR,0,v)):(g[0]=K,g[1]=$,g[2]=ie,g[3]=X,F.clearBufferiv(F.COLOR,0,g))}else A|=F.COLOR_BUFFER_BIT}x&&(A|=F.DEPTH_BUFFER_BIT),w&&(A|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),ye.dispose(),rt.dispose(),Ce.dispose(),y.dispose(),z.dispose(),re.dispose(),et.dispose(),O.dispose(),ke.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",xr),ne.removeEventListener("sessionend",Yi),Cn.stop()};function he(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const h=Ve.autoReset,x=Le.enabled,w=Le.autoUpdate,A=Le.needsUpdate,C=Le.type;J(),Ve.autoReset=h,Le.enabled=x,Le.autoUpdate=w,Le.needsUpdate=A,Le.type=C}function Re(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function Ge(h){const x=h.target;x.removeEventListener("dispose",Ge),yt(x)}function yt(h){At(h),Ce.remove(h)}function At(h){const x=Ce.get(h).programs;x!==void 0&&(x.forEach(function(w){ke.releaseProgram(w)}),h.isShaderMaterial&&ke.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,w,A,C,N){x===null&&(x=$e);const V=C.isMesh&&C.matrixWorld.determinant()<0,Q=$i(h,x,w,A,C);Ue.setMaterial(A,V);let X=w.index,K=1;if(A.wireframe===!0){if(X=le.getWireframeAttribute(w),X===void 0)return;K=2}const $=w.drawRange,ie=w.attributes.position;let fe=$.start*K,de=($.start+$.count)*K;N!==null&&(fe=Math.max(fe,N.start*K),de=Math.min(de,(N.start+N.count)*K)),X!==null?(fe=Math.max(fe,0),de=Math.min(de,X.count)):ie!=null&&(fe=Math.max(fe,0),de=Math.min(de,ie.count));const xe=de-fe;if(xe<0||xe===1/0)return;et.setup(C,A,Q,w,X);let Me,me=Ae;if(X!==null&&(Me=ee.get(X),me=He,me.setIndex(Me)),C.isMesh)A.wireframe===!0?(Ue.setLineWidth(A.wireframeLinewidth*ut()),me.setMode(F.LINES)):me.setMode(F.TRIANGLES);else if(C.isLine){let se=A.linewidth;se===void 0&&(se=1),Ue.setLineWidth(se*ut()),C.isLineSegments?me.setMode(F.LINES):C.isLineLoop?me.setMode(F.LINE_LOOP):me.setMode(F.LINE_STRIP)}else C.isPoints?me.setMode(F.POINTS):C.isSprite&&me.setMode(F.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)me.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))me.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const se=C._multiDrawStarts,nt=C._multiDrawCounts,Ye=C._multiDrawCount,_t=X?ee.get(X).bytesPerElement:1,ht=Ce.get(A).currentProgram.getUniforms();for(let Ze=0;Ze<Ye;Ze++)ht.setValue(F,"_gl_DrawID",Ze),me.render(se[Ze]/_t,nt[Ze])}else if(C.isInstancedMesh)me.renderInstances(fe,xe,C.count);else if(w.isInstancedBufferGeometry){const se=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,nt=Math.min(w.instanceCount,se);me.renderInstances(fe,xe,nt)}else me.render(fe,xe)};function mt(h,x,w){h.transparent===!0&&h.side===Sn&&h.forceSinglePass===!1?(h.side=An,h.needsUpdate=!0,ni(h,x,w),h.side=_r,h.needsUpdate=!0,ni(h,x,w),h.side=Sn):ni(h,x,w)}this.compile=function(h,x,w=null){w===null&&(w=h),p=rt.get(w),p.init(x),M.push(p),w.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),h!==w&&h.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),p.setupLights();const A=new Set;return h.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const N=C.material;if(N)if(Array.isArray(N))for(let V=0;V<N.length;V++){const Q=N[V];mt(Q,w,C),A.add(Q)}else mt(N,w,C),A.add(N)}),M.pop(),p=null,A},this.compileAsync=function(h,x,w=null){const A=this.compile(h,x,w);return new Promise(C=>{function N(){if(A.forEach(function(V){Ce.get(V).currentProgram.isReady()&&A.delete(V)}),A.size===0){C(h);return}setTimeout(N,10)}Se.get("KHR_parallel_shader_compile")!==null?N():setTimeout(N,10)})};let Qt=null;function mn(h){Qt&&Qt(h)}function xr(){Cn.stop()}function Yi(){Cn.start()}const Cn=new md;Cn.setAnimationLoop(mn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(h){Qt=h,ne.setAnimationLoop(h),h===null?Cn.stop():Cn.start()},ne.addEventListener("sessionstart",xr),ne.addEventListener("sessionend",Yi),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(x),x=ne.getCamera()),h.isScene===!0&&h.onBeforeRender(S,h,x,L),p=rt.get(h,M.length),p.init(x),M.push(p),pe.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),Z.setFromProjectionMatrix(pe),ae=this.localClippingEnabled,oe=ve.init(this.clippingPlanes,ae),m=ye.get(h,b.length),m.init(),b.push(m),ne.enabled===!0&&ne.isPresenting===!0){const N=S.xr.getDepthSensingMesh();N!==null&&Gn(N,x,-1/0,S.sortObjects)}Gn(h,x,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ue,_e),je=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,je&&Ie.addToRenderList(m,h),this.info.render.frame++,oe===!0&&ve.beginShadows();const w=p.state.shadowsArray;Le.render(w,h,x),oe===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const A=m.opaque,C=m.transmissive;if(p.setupLights(),x.isArrayCamera){const N=x.cameras;if(C.length>0)for(let V=0,Q=N.length;V<Q;V++){const X=N[V];en(A,C,h,X)}je&&Ie.render(h);for(let V=0,Q=N.length;V<Q;V++){const X=N[V];Zi(m,h,X,X.viewport)}}else C.length>0&&en(A,C,h,x),je&&Ie.render(h),Zi(m,h,x);L!==null&&(D.updateMultisampleRenderTarget(L),D.updateRenderTargetMipmap(L)),h.isScene===!0&&h.onAfterRender(S,h,x),et.resetDefaultState(),E=-1,T=null,M.pop(),M.length>0?(p=M[M.length-1],oe===!0&&ve.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Gn(h,x,w,A){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)w=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||Z.intersectsSprite(h)){A&&Fe.setFromMatrixPosition(h.matrixWorld).applyMatrix4(pe);const V=re.update(h),Q=h.material;Q.visible&&m.push(h,V,Q,w,Fe.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||Z.intersectsObject(h))){const V=re.update(h),Q=h.material;if(A&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Fe.copy(h.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),Fe.copy(V.boundingSphere.center)),Fe.applyMatrix4(h.matrixWorld).applyMatrix4(pe)),Array.isArray(Q)){const X=V.groups;for(let K=0,$=X.length;K<$;K++){const ie=X[K],fe=Q[ie.materialIndex];fe&&fe.visible&&m.push(h,V,fe,w,Fe.z,ie)}}else Q.visible&&m.push(h,V,Q,w,Fe.z,null)}}const N=h.children;for(let V=0,Q=N.length;V<Q;V++)Gn(N[V],x,w,A)}function Zi(h,x,w,A){const C=h.opaque,N=h.transmissive,V=h.transparent;p.setupLightsView(w),oe===!0&&ve.setGlobalState(S.clippingPlanes,w),A&&Ue.viewport(U.copy(A)),C.length>0&&ti(C,x,w),N.length>0&&ti(N,x,w),V.length>0&&ti(V,x,w),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function en(h,x,w,A){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[A.id]===void 0&&(p.state.transmissionRenderTarget[A.id]=new Xi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?yi:Gi,minFilter:Fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const N=p.state.transmissionRenderTarget[A.id],V=A.viewport||U;N.setSize(V.z,V.w);const Q=S.getRenderTarget();S.setRenderTarget(N),S.getClearColor(q),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),je&&Ie.render(w);const X=S.toneMapping;S.toneMapping=Bi;const K=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),p.setupLightsView(A),oe===!0&&ve.setGlobalState(S.clippingPlanes,A),ti(h,w,A),D.updateMultisampleRenderTarget(N),D.updateRenderTargetMipmap(N),Se.has("WEBGL_multisampled_render_to_texture")===!1){let $=!1;for(let ie=0,fe=x.length;ie<fe;ie++){const de=x[ie],xe=de.object,Me=de.geometry,me=de.material,se=de.group;if(me.side===Sn&&xe.layers.test(A.layers)){const nt=me.side;me.side=An,me.needsUpdate=!0,Gt(xe,w,A,Me,me,se),me.side=nt,me.needsUpdate=!0,$=!0}}$===!0&&(D.updateMultisampleRenderTarget(N),D.updateRenderTargetMipmap(N))}S.setRenderTarget(Q),S.setClearColor(q,j),K!==void 0&&(A.viewport=K),S.toneMapping=X}function ti(h,x,w){const A=x.isScene===!0?x.overrideMaterial:null;for(let C=0,N=h.length;C<N;C++){const V=h[C],Q=V.object,X=V.geometry,K=A===null?V.material:A,$=V.group;Q.layers.test(w.layers)&&Gt(Q,x,w,X,K,$)}}function Gt(h,x,w,A,C,N){h.onBeforeRender(S,x,w,A,C,N),h.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),C.onBeforeRender(S,x,w,A,h,N),C.transparent===!0&&C.side===Sn&&C.forceSinglePass===!1?(C.side=An,C.needsUpdate=!0,S.renderBufferDirect(w,x,A,C,h,N),C.side=_r,C.needsUpdate=!0,S.renderBufferDirect(w,x,A,C,h,N),C.side=Sn):S.renderBufferDirect(w,x,A,C,h,N),h.onAfterRender(S,x,w,A,C,N)}function ni(h,x,w){x.isScene!==!0&&(x=$e);const A=Ce.get(h),C=p.state.lights,N=p.state.shadowsArray,V=C.state.version,Q=ke.getParameters(h,C.state,N,x,w),X=ke.getProgramCacheKey(Q);let K=A.programs;A.environment=h.isMeshStandardMaterial?x.environment:null,A.fog=x.fog,A.envMap=(h.isMeshStandardMaterial?z:y).get(h.envMap||A.environment),A.envMapRotation=A.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,K===void 0&&(h.addEventListener("dispose",Ge),K=new Map,A.programs=K);let $=K.get(X);if($!==void 0){if(A.currentProgram===$&&A.lightsStateVersion===V)return Wn(h,Q),$}else Q.uniforms=ke.getUniforms(h),h.onBeforeCompile(Q,S),$=ke.acquireProgram(Q,X),K.set(X,$),A.uniforms=Q.uniforms;const ie=A.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(ie.clippingPlanes=ve.uniform),Wn(h,Q),A.needsLights=fi(h),A.lightsStateVersion=V,A.needsLights&&(ie.ambientLightColor.value=C.state.ambient,ie.lightProbe.value=C.state.probe,ie.directionalLights.value=C.state.directional,ie.directionalLightShadows.value=C.state.directionalShadow,ie.spotLights.value=C.state.spot,ie.spotLightShadows.value=C.state.spotShadow,ie.rectAreaLights.value=C.state.rectArea,ie.ltc_1.value=C.state.rectAreaLTC1,ie.ltc_2.value=C.state.rectAreaLTC2,ie.pointLights.value=C.state.point,ie.pointLightShadows.value=C.state.pointShadow,ie.hemisphereLights.value=C.state.hemi,ie.directionalShadowMap.value=C.state.directionalShadowMap,ie.directionalShadowMatrix.value=C.state.directionalShadowMatrix,ie.spotShadowMap.value=C.state.spotShadowMap,ie.spotLightMatrix.value=C.state.spotLightMatrix,ie.spotLightMap.value=C.state.spotLightMap,ie.pointShadowMap.value=C.state.pointShadowMap,ie.pointShadowMatrix.value=C.state.pointShadowMatrix),A.currentProgram=$,A.uniformsList=null,$}function Ei(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=aa.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function Wn(h,x){const w=Ce.get(h);w.outputColorSpace=x.outputColorSpace,w.batching=x.batching,w.batchingColor=x.batchingColor,w.instancing=x.instancing,w.instancingColor=x.instancingColor,w.instancingMorph=x.instancingMorph,w.skinning=x.skinning,w.morphTargets=x.morphTargets,w.morphNormals=x.morphNormals,w.morphColors=x.morphColors,w.morphTargetsCount=x.morphTargetsCount,w.numClippingPlanes=x.numClippingPlanes,w.numIntersection=x.numClipIntersection,w.vertexAlphas=x.vertexAlphas,w.vertexTangents=x.vertexTangents,w.toneMapping=x.toneMapping}function $i(h,x,w,A,C){x.isScene!==!0&&(x=$e),D.resetTextureUnits();const N=x.fog,V=A.isMeshStandardMaterial?x.environment:null,Q=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Wi,X=(A.isMeshStandardMaterial?z:y).get(A.envMap||V),K=A.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,$=!!w.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),ie=!!w.morphAttributes.position,fe=!!w.morphAttributes.normal,de=!!w.morphAttributes.color;let xe=Bi;A.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=S.toneMapping);const Me=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,me=Me!==void 0?Me.length:0,se=Ce.get(A),nt=p.state.lights;if(oe===!0&&(ae===!0||h!==T)){const st=h===T&&A.id===E;ve.setState(A,h,st)}let Ye=!1;A.version===se.__version?(se.needsLights&&se.lightsStateVersion!==nt.state.version||se.outputColorSpace!==Q||C.isBatchedMesh&&se.batching===!1||!C.isBatchedMesh&&se.batching===!0||C.isBatchedMesh&&se.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&se.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&se.instancing===!1||!C.isInstancedMesh&&se.instancing===!0||C.isSkinnedMesh&&se.skinning===!1||!C.isSkinnedMesh&&se.skinning===!0||C.isInstancedMesh&&se.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&se.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&se.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&se.instancingMorph===!1&&C.morphTexture!==null||se.envMap!==X||A.fog===!0&&se.fog!==N||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==ve.numPlanes||se.numIntersection!==ve.numIntersection)||se.vertexAlphas!==K||se.vertexTangents!==$||se.morphTargets!==ie||se.morphNormals!==fe||se.morphColors!==de||se.toneMapping!==xe||se.morphTargetsCount!==me)&&(Ye=!0):(Ye=!0,se.__version=A.version);let _t=se.currentProgram;Ye===!0&&(_t=ni(A,x,C));let ht=!1,Ze=!1,vt=!1;const Je=_t.getUniforms(),it=se.uniforms;if(Ue.useProgram(_t.program)&&(ht=!0,Ze=!0,vt=!0),A.id!==E&&(E=A.id,Ze=!0),ht||T!==h){Ue.buffers.depth.getReversed()?(ce.copy(h.projectionMatrix),T_(ce),A_(ce),Je.setValue(F,"projectionMatrix",ce)):Je.setValue(F,"projectionMatrix",h.projectionMatrix),Je.setValue(F,"viewMatrix",h.matrixWorldInverse);const Ut=Je.map.cameraPosition;Ut!==void 0&&Ut.setValue(F,be.setFromMatrixPosition(h.matrixWorld)),ze.logarithmicDepthBuffer&&Je.setValue(F,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&Je.setValue(F,"isOrthographic",h.isOrthographicCamera===!0),T!==h&&(T=h,Ze=!0,vt=!0)}if(C.isSkinnedMesh){Je.setOptional(F,C,"bindMatrix"),Je.setOptional(F,C,"bindMatrixInverse");const st=C.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),Je.setValue(F,"boneTexture",st.boneTexture,D))}C.isBatchedMesh&&(Je.setOptional(F,C,"batchingTexture"),Je.setValue(F,"batchingTexture",C._matricesTexture,D),Je.setOptional(F,C,"batchingIdTexture"),Je.setValue(F,"batchingIdTexture",C._indirectTexture,D),Je.setOptional(F,C,"batchingColorTexture"),C._colorsTexture!==null&&Je.setValue(F,"batchingColorTexture",C._colorsTexture,D));const ft=w.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0)&&Ne.update(C,w,_t),(Ze||se.receiveShadow!==C.receiveShadow)&&(se.receiveShadow=C.receiveShadow,Je.setValue(F,"receiveShadow",C.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(it.envMap.value=X,it.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1),A.isMeshStandardMaterial&&A.envMap===null&&x.environment!==null&&(it.envMapIntensity.value=x.environmentIntensity),Ze&&(Je.setValue(F,"toneMappingExposure",S.toneMappingExposure),se.needsLights&&Xn(it,vt),N&&A.fog===!0&&ge.refreshFogUniforms(it,N),ge.refreshMaterialUniforms(it,A,G,Y,p.state.transmissionRenderTarget[h.id]),aa.upload(F,Ei(se),it,D)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(aa.upload(F,Ei(se),it,D),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&Je.setValue(F,"center",C.center),Je.setValue(F,"modelViewMatrix",C.modelViewMatrix),Je.setValue(F,"normalMatrix",C.normalMatrix),Je.setValue(F,"modelMatrix",C.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const st=A.uniformsGroups;for(let Ut=0,$t=st.length;Ut<$t;Ut++){const tn=st[Ut];O.update(tn,_t),O.bind(tn,_t)}}return _t}function Xn(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function fi(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(h,x,w){Ce.get(h.texture).__webglTexture=x,Ce.get(h.depthTexture).__webglTexture=w;const A=Ce.get(h);A.__hasExternalTextures=!0,A.__autoAllocateDepthBuffer=w===void 0,A.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const w=Ce.get(h);w.__webglFramebuffer=x,w.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,w=0){L=h,I=x,R=w;let A=!0,C=null,N=!1,V=!1;if(h){const X=Ce.get(h);if(X.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(F.FRAMEBUFFER,null),A=!1;else if(X.__webglFramebuffer===void 0)D.setupRenderTarget(h);else if(X.__hasExternalTextures)D.rebindTextures(h,Ce.get(h.texture).__webglTexture,Ce.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const ie=h.depthTexture;if(X.__boundDepthTexture!==ie){if(ie!==null&&Ce.has(ie)&&(h.width!==ie.image.width||h.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(h)}}const K=h.texture;(K.isData3DTexture||K.isDataArrayTexture||K.isCompressedArrayTexture)&&(V=!0);const $=Ce.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray($[x])?C=$[x][w]:C=$[x],N=!0):h.samples>0&&D.useMultisampledRTT(h)===!1?C=Ce.get(h).__webglMultisampledFramebuffer:Array.isArray($)?C=$[w]:C=$,U.copy(h.viewport),H.copy(h.scissor),k=h.scissorTest}else U.copy(te).multiplyScalar(G).floor(),H.copy(Ee).multiplyScalar(G).floor(),k=we;if(Ue.bindFramebuffer(F.FRAMEBUFFER,C)&&A&&Ue.drawBuffers(h,C),Ue.viewport(U),Ue.scissor(H),Ue.setScissorTest(k),N){const X=Ce.get(h.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,X.__webglTexture,w)}else if(V){const X=Ce.get(h.texture),K=x||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.__webglTexture,w||0,K)}E=-1},this.readRenderTargetPixels=function(h,x,w,A,C,N,V){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Q=Ce.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&V!==void 0&&(Q=Q[V]),Q){Ue.bindFramebuffer(F.FRAMEBUFFER,Q);try{const X=h.texture,K=X.format,$=X.type;if(!ze.textureFormatReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable($)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-A&&w>=0&&w<=h.height-C&&F.readPixels(x,w,A,C,qe.convert(K),qe.convert($),N)}finally{const X=L!==null?Ce.get(L).__webglFramebuffer:null;Ue.bindFramebuffer(F.FRAMEBUFFER,X)}}},this.readRenderTargetPixelsAsync=async function(h,x,w,A,C,N,V){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Q=Ce.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&V!==void 0&&(Q=Q[V]),Q){const X=h.texture,K=X.format,$=X.type;if(!ze.textureFormatReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-A&&w>=0&&w<=h.height-C){Ue.bindFramebuffer(F.FRAMEBUFFER,Q);const ie=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ie),F.bufferData(F.PIXEL_PACK_BUFFER,N.byteLength,F.STREAM_READ),F.readPixels(x,w,A,C,qe.convert(K),qe.convert($),0);const fe=L!==null?Ce.get(L).__webglFramebuffer:null;Ue.bindFramebuffer(F.FRAMEBUFFER,fe);const de=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await b_(F,de,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ie),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,N),F.deleteBuffer(ie),F.deleteSync(de),N}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,w=0){h.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const A=Math.pow(2,-w),C=Math.floor(h.image.width*A),N=Math.floor(h.image.height*A),V=x!==null?x.x:0,Q=x!==null?x.y:0;D.setTexture2D(h,0),F.copyTexSubImage2D(F.TEXTURE_2D,w,0,0,V,Q,C,N),Ue.unbindTexture()},this.copyTextureToTexture=function(h,x,w=null,A=null,C=0){h.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),A=arguments[0]||null,h=arguments[1],x=arguments[2],C=arguments[3]||0,w=null);let N,V,Q,X,K,$,ie,fe,de;const xe=h.isCompressedTexture?h.mipmaps[C]:h.image;w!==null?(N=w.max.x-w.min.x,V=w.max.y-w.min.y,Q=w.isBox3?w.max.z-w.min.z:1,X=w.min.x,K=w.min.y,$=w.isBox3?w.min.z:0):(N=xe.width,V=xe.height,Q=xe.depth||1,X=0,K=0,$=0),A!==null?(ie=A.x,fe=A.y,de=A.z):(ie=0,fe=0,de=0);const Me=qe.convert(x.format),me=qe.convert(x.type);let se;x.isData3DTexture?(D.setTexture3D(x,0),se=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(D.setTexture2DArray(x,0),se=F.TEXTURE_2D_ARRAY):(D.setTexture2D(x,0),se=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);const nt=F.getParameter(F.UNPACK_ROW_LENGTH),Ye=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_t=F.getParameter(F.UNPACK_SKIP_PIXELS),ht=F.getParameter(F.UNPACK_SKIP_ROWS),Ze=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,X),F.pixelStorei(F.UNPACK_SKIP_ROWS,K),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$);const vt=h.isDataArrayTexture||h.isData3DTexture,Je=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const it=Ce.get(h),ft=Ce.get(x),st=Ce.get(it.__renderTarget),Ut=Ce.get(ft.__renderTarget);Ue.bindFramebuffer(F.READ_FRAMEBUFFER,st.__webglFramebuffer),Ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let $t=0;$t<Q;$t++)vt&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.get(h).__webglTexture,C,$+$t),h.isDepthTexture?(Je&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.get(x).__webglTexture,C,de+$t),F.blitFramebuffer(X,K,N,V,ie,fe,N,V,F.DEPTH_BUFFER_BIT,F.NEAREST)):Je?F.copyTexSubImage3D(se,C,ie,fe,de+$t,X,K,N,V):F.copyTexSubImage2D(se,C,ie,fe,de+$t,X,K,N,V);Ue.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Je?h.isDataTexture||h.isData3DTexture?F.texSubImage3D(se,C,ie,fe,de,N,V,Q,Me,me,xe.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(se,C,ie,fe,de,N,V,Q,Me,xe.data):F.texSubImage3D(se,C,ie,fe,de,N,V,Q,Me,me,xe):h.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,C,ie,fe,N,V,Me,me,xe.data):h.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,C,ie,fe,xe.width,xe.height,Me,xe.data):F.texSubImage2D(F.TEXTURE_2D,C,ie,fe,N,V,Me,me,xe);F.pixelStorei(F.UNPACK_ROW_LENGTH,nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ye),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,ht),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze),C===0&&x.generateMipmaps&&F.generateMipmap(se),Ue.unbindTexture()},this.copyTextureToTexture3D=function(h,x,w=null,A=null,C=0){return h.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),w=arguments[0]||null,A=arguments[1]||null,h=arguments[2],x=arguments[3],C=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,w,A,C)},this.initRenderTarget=function(h){Ce.get(h).__webglFramebuffer===void 0&&D.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?D.setTextureCube(h,0):h.isData3DTexture?D.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?D.setTexture2DArray(h,0):D.setTexture2D(h,0),Ue.unbindTexture()},this.resetState=function(){I=0,R=0,L=null,Ue.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}class Ta extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yd extends Jt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=pn,u=pn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i extends Kt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class kS extends Jt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const ga={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class HS{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const _=c[f],v=c[f+1];if(_.global&&(_.lastIndex=0),_.test(u))return v}return null}}}const VS=new HS;class xo{constructor(e){this.manager=e!==void 0?e:VS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class GS extends Error{constructor(e,t){super(e),this.response=t}}class WS extends xo{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ga.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:r});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ci[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),_=d?parseInt(d):0,v=_!==0;let g=0;const m=new ReadableStream({start(p){b();function b(){f.read().then(({done:M,value:S})=>{if(M)p.close();else{g+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:_});for(let I=0,R=u.length;I<R;I++){const L=u[I];L.onProgress&&L.onProgress(P)}p.enqueue(S),b()}},M=>{p.error(M)})}}});return new Response(m)}else throw new GS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,_=new TextDecoder(d);return c.arrayBuffer().then(v=>_.decode(v))}}}).then(c=>{ga.add(e,c);const u=Ci[e];delete Ci[e];for(let f=0,d=u.length;f<d;f++){const _=u[f];_.onLoad&&_.onLoad(c)}}).catch(c=>{const u=Ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ci[e];for(let f=0,d=u.length;f<d;f++){const _=u[f];_.onError&&_.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class XS extends xo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ga.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_o("img");function l(){u(),ga.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class qS extends xo{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new yd,a=new WS(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ni,o.wrapT=c.wrapT!==void 0?c.wrapT:Ni,o.magFilter=c.magFilter!==void 0?c.magFilter:Vt,o.minFilter=c.minFilter!==void 0?c.minFilter:Vt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Fi),c.mipmapCount===1&&(o.minFilter=Vt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class ks extends xo{constructor(e){super(e)}load(e,t,n,r){const s=new Jt,o=new XS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Xo extends qi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Jn=Uint8Array,us=Uint16Array,YS=Int32Array,Md=new Jn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ed=new Jn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ZS=new Jn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wd=function(i,e){for(var t=new us(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new YS(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},bd=wd(Md,2),Td=bd.b,$S=bd.r;Td[28]=258,$S[258]=28;var KS=wd(Ed,0),jS=KS.b,_c=new us(32768);for(var Tt=0;Tt<32768;++Tt){var rr=(Tt&43690)>>1|(Tt&21845)<<1;rr=(rr&52428)>>2|(rr&13107)<<2,rr=(rr&61680)>>4|(rr&3855)<<4,_c[Tt]=((rr&65280)>>8|(rr&255)<<8)>>1}var no=(function(i,e,t){for(var n=i.length,r=0,s=new us(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new us(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new us(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],f=o[i[r]-1]++<<u,d=f|(1<<u)-1;f<=d;++f)a[_c[f]>>l]=c}else for(a=new us(n),r=0;r<n;++r)i[r]&&(a[r]=_c[o[i[r]-1]++]>>15-i[r]);return a}),So=new Jn(288);for(var Tt=0;Tt<144;++Tt)So[Tt]=8;for(var Tt=144;Tt<256;++Tt)So[Tt]=9;for(var Tt=256;Tt<280;++Tt)So[Tt]=7;for(var Tt=280;Tt<288;++Tt)So[Tt]=8;var Ad=new Jn(32);for(var Tt=0;Tt<32;++Tt)Ad[Tt]=5;var JS=no(So,9,1),QS=no(Ad,5,1),cl=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},oi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ul=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},ey=function(i){return(i+7)/8|0},ty=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Jn(i.subarray(e,t))},ny=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],li=function(i,e,t){var n=new Error(e||ny[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,li),!t)throw n;return n},iy=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new Jn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Jn(r*3));var c=function($e){var je=t.length;if($e>je){var ut=new Jn(Math.max(je*2,$e));ut.set(t),t=ut}},u=e.f||0,f=e.p||0,d=e.b||0,_=e.l,v=e.d,g=e.m,m=e.n,p=r*8;do{if(!_){u=oi(i,f,1);var b=oi(i,f+1,3);if(f+=3,b)if(b==1)_=JS,v=QS,g=9,m=5;else if(b==2){var I=oi(i,f,31)+257,R=oi(i,f+10,15)+4,L=I+oi(i,f+5,31)+1;f+=14;for(var E=new Jn(L),T=new Jn(19),U=0;U<R;++U)T[ZS[U]]=oi(i,f+U*3,7);f+=R*3;for(var H=cl(T),k=(1<<H)-1,q=no(T,H,1),U=0;U<L;){var j=q[oi(i,f,k)];f+=j&15;var M=j>>4;if(M<16)E[U++]=M;else{var W=0,Y=0;for(M==16?(Y=3+oi(i,f,3),f+=2,W=E[U-1]):M==17?(Y=3+oi(i,f,7),f+=3):M==18&&(Y=11+oi(i,f,127),f+=7);Y--;)E[U++]=W}}var G=E.subarray(0,I),ue=E.subarray(I);g=cl(G),m=cl(ue),_=no(G,g,1),v=no(ue,m,1)}else li(1);else{var M=ey(f)+4,S=i[M-4]|i[M-3]<<8,P=M+S;if(P>r){l&&li(0);break}a&&c(d+S),t.set(i.subarray(M,P),d),e.b=d+=S,e.p=f=P*8,e.f=u;continue}if(f>p){l&&li(0);break}}a&&c(d+131072);for(var _e=(1<<g)-1,te=(1<<m)-1,Ee=f;;Ee=f){var W=_[ul(i,f)&_e],we=W>>4;if(f+=W&15,f>p){l&&li(0);break}if(W||li(2),we<256)t[d++]=we;else if(we==256){Ee=f,_=null;break}else{var Z=we-254;if(we>264){var U=we-257,oe=Md[U];Z=oi(i,f,(1<<oe)-1)+Td[U],f+=oe}var ae=v[ul(i,f)&te],ce=ae>>4;ae||li(3),f+=ae&15;var ue=jS[ce];if(ce>3){var oe=Ed[ce];ue+=ul(i,f)&(1<<oe)-1,f+=oe}if(f>p){l&&li(0);break}a&&c(d+131072);var pe=d+Z;if(d<ue){var be=s-ue,Fe=Math.min(ue,pe);for(be+d<0&&li(3);d<Fe;++d)t[d]=n[be+d]}for(;d<pe;++d)t[d]=t[d-ue]}}e.l=_,e.p=Ee,e.b=d,e.f=u,_&&(u=1,e.m=g,e.d=v,e.n=m)}while(!u);return d!=t.length&&o?ty(t,0,d):t.subarray(0,d)},ry=new Jn(0),sy=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&li(6,"invalid zlib data"),(i[1]>>5&1)==1&&li(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function qo(i,e){return iy(i.subarray(sy(i),-4),{i:2},e,e)}var oy=typeof TextDecoder<"u"&&new TextDecoder,ay=0;try{oy.decode(ry,{stream:!0}),ay=1}catch{}class ly extends qS{constructor(e){super(e),this.type=yi}parse(e){const E=Math.pow(2.7182818,2.2);function T(h,x){let w=0;for(let C=0;C<65536;++C)(C==0||h[C>>3]&1<<(C&7))&&(x[w++]=C);const A=w-1;for(;w<65536;)x[w++]=0;return A}function U(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const H={l:0,c:0,lc:0};function k(h,x,w,A,C){for(;w<h;)x=x<<8|Ae(A,C),w+=8;w-=h,H.l=x>>w&(1<<h)-1,H.c=x,H.lc=w}const q=new Array(59);function j(h){for(let w=0;w<=58;++w)q[w]=0;for(let w=0;w<65537;++w)q[h[w]]+=1;let x=0;for(let w=58;w>0;--w){const A=x+q[w]>>1;q[w]=x,x=A}for(let w=0;w<65537;++w){const A=h[w];A>0&&(h[w]=A|q[A]++<<6)}}function W(h,x,w,A,C,N){const V=x;let Q=0,X=0;for(;A<=C;A++){if(V.value-x.value>w)return!1;k(6,Q,X,h,V);const K=H.l;if(Q=H.c,X=H.lc,N[A]=K,K==63){if(V.value-x.value>w)throw new Error("Something wrong with hufUnpackEncTable");k(8,Q,X,h,V);let $=H.l+6;if(Q=H.c,X=H.lc,A+$>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;$--;)N[A++]=0;A--}else if(K>=59){let $=K-59+2;if(A+$>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;$--;)N[A++]=0;A--}}j(N)}function Y(h){return h&63}function G(h){return h>>6}function ue(h,x,w,A){for(;x<=w;x++){const C=G(h[x]),N=Y(h[x]);if(C>>N)throw new Error("Invalid table entry");if(N>14){const V=A[C>>N-14];if(V.len)throw new Error("Invalid table entry");if(V.lit++,V.p){const Q=V.p;V.p=new Array(V.lit);for(let X=0;X<V.lit-1;++X)V.p[X]=Q[X]}else V.p=new Array(1);V.p[V.lit-1]=x}else if(N){let V=0;for(let Q=1<<14-N;Q>0;Q--){const X=A[(C<<14-N)+V];if(X.len||X.p)throw new Error("Invalid table entry");X.len=N,X.lit=x,V++}}}return!0}const _e={c:0,lc:0};function te(h,x,w,A){h=h<<8|Ae(w,A),x+=8,_e.c=h,_e.lc=x}const Ee={c:0,lc:0};function we(h,x,w,A,C,N,V,Q,X){if(h==x){A<8&&(te(w,A,C,N),w=_e.c,A=_e.lc),A-=8;let K=w>>A;if(K=new Uint8Array([K])[0],Q.value+K>X)return!1;const $=V[Q.value-1];for(;K-- >0;)V[Q.value++]=$}else if(Q.value<X)V[Q.value++]=h;else return!1;Ee.c=w,Ee.lc=A}function Z(h){return h&65535}function oe(h){const x=Z(h);return x>32767?x-65536:x}const ae={a:0,b:0};function ce(h,x){const w=oe(h),C=oe(x),N=w+(C&1)+(C>>1),V=N,Q=N-C;ae.a=V,ae.b=Q}function pe(h,x){const w=Z(h),A=Z(x),C=w-(A>>1)&65535,N=A+C-32768&65535;ae.a=N,ae.b=C}function be(h,x,w,A,C,N,V){const Q=V<16384,X=w>C?C:w;let K=1,$,ie;for(;K<=X;)K<<=1;for(K>>=1,$=K,K>>=1;K>=1;){ie=0;const fe=ie+N*(C-$),de=N*K,xe=N*$,Me=A*K,me=A*$;let se,nt,Ye,_t;for(;ie<=fe;ie+=xe){let ht=ie;const Ze=ie+A*(w-$);for(;ht<=Ze;ht+=me){const vt=ht+Me,Je=ht+de,it=Je+Me;Q?(ce(h[ht+x],h[Je+x]),se=ae.a,Ye=ae.b,ce(h[vt+x],h[it+x]),nt=ae.a,_t=ae.b,ce(se,nt),h[ht+x]=ae.a,h[vt+x]=ae.b,ce(Ye,_t),h[Je+x]=ae.a,h[it+x]=ae.b):(pe(h[ht+x],h[Je+x]),se=ae.a,Ye=ae.b,pe(h[vt+x],h[it+x]),nt=ae.a,_t=ae.b,pe(se,nt),h[ht+x]=ae.a,h[vt+x]=ae.b,pe(Ye,_t),h[Je+x]=ae.a,h[it+x]=ae.b)}if(w&K){const vt=ht+de;Q?ce(h[ht+x],h[vt+x]):pe(h[ht+x],h[vt+x]),se=ae.a,h[vt+x]=ae.b,h[ht+x]=se}}if(C&K){let ht=ie;const Ze=ie+A*(w-$);for(;ht<=Ze;ht+=me){const vt=ht+Me;Q?ce(h[ht+x],h[vt+x]):pe(h[ht+x],h[vt+x]),se=ae.a,h[vt+x]=ae.b,h[ht+x]=se}}$=K,K>>=1}return ie}function Fe(h,x,w,A,C,N,V,Q,X){let K=0,$=0;const ie=V,fe=Math.trunc(A.value+(C+7)/8);for(;A.value<fe;)for(te(K,$,w,A),K=_e.c,$=_e.lc;$>=14;){const xe=K>>$-14&16383,Me=x[xe];if(Me.len)$-=Me.len,we(Me.lit,N,K,$,w,A,Q,X,ie),K=Ee.c,$=Ee.lc;else{if(!Me.p)throw new Error("hufDecode issues");let me;for(me=0;me<Me.lit;me++){const se=Y(h[Me.p[me]]);for(;$<se&&A.value<fe;)te(K,$,w,A),K=_e.c,$=_e.lc;if($>=se&&G(h[Me.p[me]])==(K>>$-se&(1<<se)-1)){$-=se,we(Me.p[me],N,K,$,w,A,Q,X,ie),K=Ee.c,$=Ee.lc;break}}if(me==Me.lit)throw new Error("hufDecode issues")}}const de=8-C&7;for(K>>=de,$-=de;$>0;){const xe=x[K<<14-$&16383];if(xe.len)$-=xe.len,we(xe.lit,N,K,$,w,A,Q,X,ie),K=Ee.c,$=Ee.lc;else throw new Error("hufDecode issues")}return!0}function $e(h,x,w,A,C,N){const V={value:0},Q=w.value,X=Ne(x,w),K=Ne(x,w);w.value+=4;const $=Ne(x,w);if(w.value+=4,X<0||X>=65537||K<0||K>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ie=new Array(65537),fe=new Array(16384);U(fe);const de=A-(w.value-Q);if(W(h,w,de,X,K,ie),$>8*(A-(w.value-Q)))throw new Error("Something wrong with hufUncompress");ue(ie,X,K,fe),Fe(ie,fe,h,w,$,K,N,C,V)}function je(h,x,w){for(let A=0;A<w;++A)x[A]=h[x[A]]}function ut(h){for(let x=1;x<h.length;x++){const w=h[x-1]+h[x]-128;h[x]=w}}function F(h,x){let w=0,A=Math.floor((h.length+1)/2),C=0;const N=h.length-1;for(;!(C>N||(x[C++]=h[w++],C>N));)x[C++]=h[A++]}function Xe(h){let x=h.byteLength;const w=new Array;let A=0;const C=new DataView(h);for(;x>0;){const N=C.getInt8(A++);if(N<0){const V=-N;x-=V+1;for(let Q=0;Q<V;Q++)w.push(C.getUint8(A++))}else{const V=N;x-=2;const Q=C.getUint8(A++);for(let X=0;X<V+1;X++)w.push(Q)}}return w}function Se(h,x,w,A,C,N){let V=new DataView(N.buffer);const Q=w[h.idx[0]].width,X=w[h.idx[0]].height,K=3,$=Math.floor(Q/8),ie=Math.ceil(Q/8),fe=Math.ceil(X/8),de=Q-(ie-1)*8,xe=X-(fe-1)*8,Me={value:0},me=new Array(K),se=new Array(K),nt=new Array(K),Ye=new Array(K),_t=new Array(K);for(let Ze=0;Ze<K;++Ze)_t[Ze]=x[h.idx[Ze]],me[Ze]=Ze<1?0:me[Ze-1]+ie*fe,se[Ze]=new Float32Array(64),nt[Ze]=new Uint16Array(64),Ye[Ze]=new Uint16Array(ie*64);for(let Ze=0;Ze<fe;++Ze){let vt=8;Ze==fe-1&&(vt=xe);let Je=8;for(let ft=0;ft<ie;++ft){ft==ie-1&&(Je=de);for(let st=0;st<K;++st)nt[st].fill(0),nt[st][0]=C[me[st]++],ze(Me,A,nt[st]),Ue(nt[st],se[st]),Ve(se[st]);Ce(se);for(let st=0;st<K;++st)D(se[st],Ye[st],ft*64)}let it=0;for(let ft=0;ft<K;++ft){const st=w[h.idx[ft]].type;for(let Ut=8*Ze;Ut<8*Ze+vt;++Ut){it=_t[ft][Ut];for(let $t=0;$t<$;++$t){const tn=$t*64+(Ut&7)*8;V.setUint16(it+0*st,Ye[ft][tn+0],!0),V.setUint16(it+2*st,Ye[ft][tn+1],!0),V.setUint16(it+4*st,Ye[ft][tn+2],!0),V.setUint16(it+6*st,Ye[ft][tn+3],!0),V.setUint16(it+8*st,Ye[ft][tn+4],!0),V.setUint16(it+10*st,Ye[ft][tn+5],!0),V.setUint16(it+12*st,Ye[ft][tn+6],!0),V.setUint16(it+14*st,Ye[ft][tn+7],!0),it+=16*st}}if($!=ie)for(let Ut=8*Ze;Ut<8*Ze+vt;++Ut){const $t=_t[ft][Ut]+8*$*2*st,tn=$*64+(Ut&7)*8;for(let zt=0;zt<Je;++zt)V.setUint16($t+zt*2*st,Ye[ft][tn+zt],!0)}}}const ht=new Uint16Array(Q);V=new DataView(N.buffer);for(let Ze=0;Ze<K;++Ze){w[h.idx[Ze]].decoded=!0;const vt=w[h.idx[Ze]].type;if(w[Ze].type==2)for(let Je=0;Je<X;++Je){const it=_t[Ze][Je];for(let ft=0;ft<Q;++ft)ht[ft]=V.getUint16(it+ft*2*vt,!0);for(let ft=0;ft<Q;++ft)V.setFloat32(it+ft*2*vt,J(ht[ft]),!0)}}}function ze(h,x,w){let A,C=1;for(;C<64;)A=x[h.value],A==65280?C=64:A>>8==255?C+=A&255:(w[C]=A,C++),h.value++}function Ue(h,x){x[0]=J(h[0]),x[1]=J(h[1]),x[2]=J(h[5]),x[3]=J(h[6]),x[4]=J(h[14]),x[5]=J(h[15]),x[6]=J(h[27]),x[7]=J(h[28]),x[8]=J(h[2]),x[9]=J(h[4]),x[10]=J(h[7]),x[11]=J(h[13]),x[12]=J(h[16]),x[13]=J(h[26]),x[14]=J(h[29]),x[15]=J(h[42]),x[16]=J(h[3]),x[17]=J(h[8]),x[18]=J(h[12]),x[19]=J(h[17]),x[20]=J(h[25]),x[21]=J(h[30]),x[22]=J(h[41]),x[23]=J(h[43]),x[24]=J(h[9]),x[25]=J(h[11]),x[26]=J(h[18]),x[27]=J(h[24]),x[28]=J(h[31]),x[29]=J(h[40]),x[30]=J(h[44]),x[31]=J(h[53]),x[32]=J(h[10]),x[33]=J(h[19]),x[34]=J(h[23]),x[35]=J(h[32]),x[36]=J(h[39]),x[37]=J(h[45]),x[38]=J(h[52]),x[39]=J(h[54]),x[40]=J(h[20]),x[41]=J(h[22]),x[42]=J(h[33]),x[43]=J(h[38]),x[44]=J(h[46]),x[45]=J(h[51]),x[46]=J(h[55]),x[47]=J(h[60]),x[48]=J(h[21]),x[49]=J(h[34]),x[50]=J(h[37]),x[51]=J(h[47]),x[52]=J(h[50]),x[53]=J(h[56]),x[54]=J(h[59]),x[55]=J(h[61]),x[56]=J(h[35]),x[57]=J(h[36]),x[58]=J(h[48]),x[59]=J(h[49]),x[60]=J(h[57]),x[61]=J(h[58]),x[62]=J(h[62]),x[63]=J(h[63])}function Ve(h){const x=.5*Math.cos(.7853975),w=.5*Math.cos(3.14159/16),A=.5*Math.cos(3.14159/8),C=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),V=.5*Math.cos(3*3.14159/8),Q=.5*Math.cos(7*3.14159/16),X=new Array(4),K=new Array(4),$=new Array(4),ie=new Array(4);for(let fe=0;fe<8;++fe){const de=fe*8;X[0]=A*h[de+2],X[1]=V*h[de+2],X[2]=A*h[de+6],X[3]=V*h[de+6],K[0]=w*h[de+1]+C*h[de+3]+N*h[de+5]+Q*h[de+7],K[1]=C*h[de+1]-Q*h[de+3]-w*h[de+5]-N*h[de+7],K[2]=N*h[de+1]-w*h[de+3]+Q*h[de+5]+C*h[de+7],K[3]=Q*h[de+1]-N*h[de+3]+C*h[de+5]-w*h[de+7],$[0]=x*(h[de+0]+h[de+4]),$[3]=x*(h[de+0]-h[de+4]),$[1]=X[0]+X[3],$[2]=X[1]-X[2],ie[0]=$[0]+$[1],ie[1]=$[3]+$[2],ie[2]=$[3]-$[2],ie[3]=$[0]-$[1],h[de+0]=ie[0]+K[0],h[de+1]=ie[1]+K[1],h[de+2]=ie[2]+K[2],h[de+3]=ie[3]+K[3],h[de+4]=ie[3]-K[3],h[de+5]=ie[2]-K[2],h[de+6]=ie[1]-K[1],h[de+7]=ie[0]-K[0]}for(let fe=0;fe<8;++fe)X[0]=A*h[16+fe],X[1]=V*h[16+fe],X[2]=A*h[48+fe],X[3]=V*h[48+fe],K[0]=w*h[8+fe]+C*h[24+fe]+N*h[40+fe]+Q*h[56+fe],K[1]=C*h[8+fe]-Q*h[24+fe]-w*h[40+fe]-N*h[56+fe],K[2]=N*h[8+fe]-w*h[24+fe]+Q*h[40+fe]+C*h[56+fe],K[3]=Q*h[8+fe]-N*h[24+fe]+C*h[40+fe]-w*h[56+fe],$[0]=x*(h[fe]+h[32+fe]),$[3]=x*(h[fe]-h[32+fe]),$[1]=X[0]+X[3],$[2]=X[1]-X[2],ie[0]=$[0]+$[1],ie[1]=$[3]+$[2],ie[2]=$[3]-$[2],ie[3]=$[0]-$[1],h[0+fe]=ie[0]+K[0],h[8+fe]=ie[1]+K[1],h[16+fe]=ie[2]+K[2],h[24+fe]=ie[3]+K[3],h[32+fe]=ie[3]-K[3],h[40+fe]=ie[2]-K[2],h[48+fe]=ie[1]-K[1],h[56+fe]=ie[0]-K[0]}function Ce(h){for(let x=0;x<64;++x){const w=h[0][x],A=h[1][x],C=h[2][x];h[0][x]=w+1.5747*C,h[1][x]=w-.1873*A-.4682*C,h[2][x]=w+1.8556*A}}function D(h,x,w){for(let A=0;A<64;++A)x[w+A]=$u.toHalfFloat(y(h[A]))}function y(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(E,Math.abs(h)-1)}function z(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function ee(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),w=new Uint8Array(Xe(x)),A=new Uint8Array(w.length);return ut(w),F(w,A),new DataView(A.buffer)}function le(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),w=qo(x),A=new Uint8Array(w.length);return ut(w),F(w,A),new DataView(A.buffer)}function re(h){const x=h.viewer,w={value:h.offset.value},A=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),C=new Uint8Array(8192);let N=0;const V=new Array(h.inputChannels.length);for(let xe=0,Me=h.inputChannels.length;xe<Me;xe++)V[xe]={},V[xe].start=N,V[xe].end=V[xe].start,V[xe].nx=h.columns,V[xe].ny=h.lines,V[xe].size=h.type,N+=V[xe].nx*V[xe].ny*V[xe].size;const Q=ne(x,w),X=ne(x,w);if(X>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(Q<=X)for(let xe=0;xe<X-Q+1;xe++)C[xe+Q]=He(x,w);const K=new Uint16Array(65536),$=T(C,K),ie=Ne(x,w);$e(h.array,x,w,ie,A,N);for(let xe=0;xe<h.inputChannels.length;++xe){const Me=V[xe];for(let me=0;me<V[xe].size;++me)be(A,Me.start+me,Me.nx,Me.size,Me.ny,Me.nx*Me.size,$)}je(K,A,N);let fe=0;const de=new Uint8Array(A.buffer.byteLength);for(let xe=0;xe<h.lines;xe++)for(let Me=0;Me<h.inputChannels.length;Me++){const me=V[Me],se=me.nx*me.size,nt=new Uint8Array(A.buffer,me.end*2,se*2);de.set(nt,fe),fe+=se*2,me.end+=se}return new DataView(de.buffer)}function ke(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),w=qo(x),A=h.inputChannels.length*h.lines*h.columns*h.totalBytes,C=new ArrayBuffer(A),N=new DataView(C);let V=0,Q=0;const X=new Array(4);for(let K=0;K<h.lines;K++)for(let $=0;$<h.inputChannels.length;$++){let ie=0;switch(h.inputChannels[$].pixelType){case 1:X[0]=V,X[1]=X[0]+h.columns,V=X[1]+h.columns;for(let de=0;de<h.columns;++de){const xe=w[X[0]++]<<8|w[X[1]++];ie+=xe,N.setUint16(Q,ie,!0),Q+=2}break;case 2:X[0]=V,X[1]=X[0]+h.columns,X[2]=X[1]+h.columns,V=X[2]+h.columns;for(let de=0;de<h.columns;++de){const xe=w[X[0]++]<<24|w[X[1]++]<<16|w[X[2]++]<<8;ie+=xe,N.setUint32(Q,ie,!0),Q+=4}break}}return N}function ge(h){const x=h.viewer,w={value:h.offset.value},A=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),C={version:qe(x,w),unknownUncompressedSize:qe(x,w),unknownCompressedSize:qe(x,w),acCompressedSize:qe(x,w),dcCompressedSize:qe(x,w),rleCompressedSize:qe(x,w),rleUncompressedSize:qe(x,w),rleRawSize:qe(x,w),totalAcUncompressedCount:qe(x,w),totalDcUncompressedCount:qe(x,w),acCompression:qe(x,w)};if(C.version<2)throw new Error("EXRLoader.parse: "+Xn.compression+" version "+C.version+" is unsupported");const N=new Array;let V=ne(x,w)-2;for(;V>0;){const Me=ye(x.buffer,w),me=He(x,w),se=me>>2&3,nt=(me>>4)-1,Ye=new Int8Array([nt])[0],_t=He(x,w);N.push({name:Me,index:Ye,type:_t,compression:se}),V-=Me.length+3}const Q=Xn.channels,X=new Array(h.inputChannels.length);for(let Me=0;Me<h.inputChannels.length;++Me){const me=X[Me]={},se=Q[Me];me.name=se.name,me.compression=0,me.decoded=!1,me.type=se.pixelType,me.pLinear=se.pLinear,me.width=h.columns,me.height=h.lines}const K={idx:new Array(3)};for(let Me=0;Me<h.inputChannels.length;++Me){const me=X[Me];for(let se=0;se<N.length;++se){const nt=N[se];me.name==nt.name&&(me.compression=nt.compression,nt.index>=0&&(K.idx[nt.index]=Me),me.offset=Me)}}let $,ie,fe;if(C.acCompressedSize>0)switch(C.acCompression){case 0:$=new Uint16Array(C.totalAcUncompressedCount),$e(h.array,x,w,C.acCompressedSize,$,C.totalAcUncompressedCount);break;case 1:const Me=h.array.slice(w.value,w.value+C.totalAcUncompressedCount),me=qo(Me);$=new Uint16Array(me.buffer),w.value+=C.totalAcUncompressedCount;break}if(C.dcCompressedSize>0){const Me={array:h.array,offset:w,size:C.dcCompressedSize};ie=new Uint16Array(le(Me).buffer),w.value+=C.dcCompressedSize}if(C.rleRawSize>0){const Me=h.array.slice(w.value,w.value+C.rleCompressedSize),me=qo(Me);fe=Xe(me.buffer),w.value+=C.rleCompressedSize}let de=0;const xe=new Array(X.length);for(let Me=0;Me<xe.length;++Me)xe[Me]=new Array;for(let Me=0;Me<h.lines;++Me)for(let me=0;me<X.length;++me)xe[me].push(de),de+=X[me].width*h.type*2;Se(K,xe,X,$,ie,A);for(let Me=0;Me<X.length;++Me){const me=X[Me];if(!me.decoded)switch(me.compression){case 2:let se=0,nt=0;for(let Ye=0;Ye<h.lines;++Ye){let _t=xe[Me][se];for(let ht=0;ht<me.width;++ht){for(let Ze=0;Ze<2*me.type;++Ze)A[_t++]=fe[nt+Ze*me.width*me.height];nt++}se++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(A.buffer)}function ye(h,x){const w=new Uint8Array(h);let A=0;for(;w[x.value+A]!=0;)A+=1;const C=new TextDecoder().decode(w.slice(x.value,x.value+A));return x.value=x.value+A+1,C}function rt(h,x,w){const A=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+w));return x.value=x.value+w,A}function ve(h,x){const w=Ie(h,x),A=Ne(h,x);return[w,A]}function Le(h,x){const w=Ne(h,x),A=Ne(h,x);return[w,A]}function Ie(h,x){const w=h.getInt32(x.value,!0);return x.value=x.value+4,w}function Ne(h,x){const w=h.getUint32(x.value,!0);return x.value=x.value+4,w}function Ae(h,x){const w=h[x.value];return x.value=x.value+1,w}function He(h,x){const w=h.getUint8(x.value);return x.value=x.value+1,w}const qe=function(h,x){let w;return"getBigInt64"in DataView.prototype?w=Number(h.getBigInt64(x.value,!0)):w=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,w};function et(h,x){const w=h.getFloat32(x.value,!0);return x.value+=4,w}function O(h,x){return $u.toHalfFloat(et(h,x))}function J(h){const x=(h&31744)>>10,w=h&1023;return(h>>15?-1:1)*(x?x===31?w?NaN:1/0:Math.pow(2,x-15)*(1+w/1024):6103515625e-14*(w/1024))}function ne(h,x){const w=h.getUint16(x.value,!0);return x.value+=2,w}function he(h,x){return J(ne(h,x))}function De(h,x,w,A){const C=w.value,N=[];for(;w.value<C+A-1;){const V=ye(x,w),Q=Ie(h,w),X=He(h,w);w.value+=3;const K=Ie(h,w),$=Ie(h,w);N.push({name:V,pixelType:Q,pLinear:X,xSampling:K,ySampling:$})}return w.value+=1,N}function Re(h,x){const w=et(h,x),A=et(h,x),C=et(h,x),N=et(h,x),V=et(h,x),Q=et(h,x),X=et(h,x),K=et(h,x);return{redX:w,redY:A,greenX:C,greenY:N,blueX:V,blueY:Q,whiteX:X,whiteY:K}}function Ge(h,x){const w=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],A=He(h,x);return w[A]}function yt(h,x){const w=Ie(h,x),A=Ie(h,x),C=Ie(h,x),N=Ie(h,x);return{xMin:w,yMin:A,xMax:C,yMax:N}}function At(h,x){const w=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],A=He(h,x);return w[A]}function mt(h,x){const w=["ENVMAP_LATLONG","ENVMAP_CUBE"],A=He(h,x);return w[A]}function Qt(h,x){const w=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],A=["ROUND_DOWN","ROUND_UP"],C=Ne(h,x),N=Ne(h,x),V=He(h,x);return{xSize:C,ySize:N,levelMode:w[V&15],roundingMode:A[V>>4]}}function mn(h,x){const w=et(h,x),A=et(h,x);return[w,A]}function xr(h,x){const w=et(h,x),A=et(h,x),C=et(h,x);return[w,A,C]}function Yi(h,x,w,A,C){if(A==="string"||A==="stringvector"||A==="iccProfile")return rt(x,w,C);if(A==="chlist")return De(h,x,w,C);if(A==="chromaticities")return Re(h,w);if(A==="compression")return Ge(h,w);if(A==="box2i")return yt(h,w);if(A==="envmap")return mt(h,w);if(A==="tiledesc")return Qt(h,w);if(A==="lineOrder")return At(h,w);if(A==="float")return et(h,w);if(A==="v2f")return mn(h,w);if(A==="v3f")return xr(h,w);if(A==="int")return Ie(h,w);if(A==="rational")return ve(h,w);if(A==="timecode")return Le(h,w);if(A==="preview")return w.value+=C,"skipped";w.value+=C}function Cn(h,x){const w=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(w):Math.ceil(w)}function Gn(h,x,w){let A=0;switch(h.levelMode){case"ONE_LEVEL":A=1;break;case"MIPMAP_LEVELS":A=Cn(Math.max(x,w),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return A}function Zi(h,x,w,A){const C=new Array(h);for(let N=0;N<h;N++){const V=1<<N;let Q=x/V|0;A=="ROUND_UP"&&Q*V<x&&(Q+=1);const X=Math.max(Q,1);C[N]=(X+w-1)/w|0}return C}function en(){const h=this,x=h.offset,w={value:0};for(let A=0;A<h.tileCount;A++){const C=Ie(h.viewer,x),N=Ie(h.viewer,x);x.value+=8,h.size=Ne(h.viewer,x);const V=C*h.blockWidth,Q=N*h.blockHeight;h.columns=V+h.blockWidth>h.width?h.width-V:h.blockWidth,h.lines=Q+h.blockHeight>h.height?h.height-Q:h.blockHeight;const X=h.columns*h.totalBytes,$=h.size<h.lines*X?h.uncompress(h):z(h);x.value+=h.size;for(let ie=0;ie<h.lines;ie++){const fe=ie*h.columns*h.totalBytes;for(let de=0;de<h.inputChannels.length;de++){const xe=Xn.channels[de].name,Me=h.channelByteOffsets[xe]*h.columns,me=h.decodeChannels[xe];if(me===void 0)continue;w.value=fe+Me;const se=(h.height-(1+Q+ie))*h.outLineWidth;for(let nt=0;nt<h.columns;nt++){const Ye=se+(nt+V)*h.outputChannels+me;h.byteArray[Ye]=h.getter($,w)}}}}}function ti(){const h=this,x=h.offset,w={value:0};for(let A=0;A<h.height/h.blockHeight;A++){const C=Ie(h.viewer,x)-Xn.dataWindow.yMin;h.size=Ne(h.viewer,x),h.lines=C+h.blockHeight>h.height?h.height-C:h.blockHeight;const N=h.columns*h.totalBytes,Q=h.size<h.lines*N?h.uncompress(h):z(h);x.value+=h.size;for(let X=0;X<h.blockHeight;X++){const K=A*h.blockHeight,$=X+h.scanOrder(K);if($>=h.height)continue;const ie=X*N,fe=(h.height-1-$)*h.outLineWidth;for(let de=0;de<h.inputChannels.length;de++){const xe=Xn.channels[de].name,Me=h.channelByteOffsets[xe]*h.columns,me=h.decodeChannels[xe];if(me!==void 0){w.value=ie+Me;for(let se=0;se<h.columns;se++){const nt=fe+se*h.outputChannels+me;h.byteArray[nt]=h.getter(Q,w)}}}}}}function Gt(h,x,w){const A={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");A.version=h.getUint8(4);const C=h.getUint8(5);A.spec={singleTile:!!(C&2),longName:!!(C&4),deepFormat:!!(C&8),multiPart:!!(C&16)},w.value=8;let N=!0;for(;N;){const V=ye(x,w);if(V==0)N=!1;else{const Q=ye(x,w),X=Ne(h,w),K=Yi(h,x,w,Q,X);K===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${Q}'.`):A[V]=K}}if((C&-7)!=0)throw console.error("THREE.EXRHeader:",A),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return A}function ni(h,x,w,A,C){const N={size:0,viewer:x,array:w,offset:A,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Wi};switch(h.compression){case"NO_COMPRESSION":N.blockHeight=1,N.uncompress=z;break;case"RLE_COMPRESSION":N.blockHeight=1,N.uncompress=ee;break;case"ZIPS_COMPRESSION":N.blockHeight=1,N.uncompress=le;break;case"ZIP_COMPRESSION":N.blockHeight=16,N.uncompress=le;break;case"PIZ_COMPRESSION":N.blockHeight=32,N.uncompress=re;break;case"PXR24_COMPRESSION":N.blockHeight=16,N.uncompress=ke;break;case"DWAA_COMPRESSION":N.blockHeight=32,N.uncompress=ge;break;case"DWAB_COMPRESSION":N.blockHeight=256,N.uncompress=ge;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const V={};for(const $ of h.channels)switch($.name){case"Y":case"R":case"G":case"B":case"A":V[$.name]=!0,N.type=$.pixelType}let Q=!1;if(V.R&&V.G&&V.B)Q=!V.A,N.outputChannels=4,N.decodeChannels={R:0,G:1,B:2,A:3};else if(V.Y)N.outputChannels=1,N.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(N.type==1)switch(C){case On:N.getter=he;break;case yi:N.getter=ne;break}else if(N.type==2)switch(C){case On:N.getter=et;break;case yi:N.getter=O}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+h.compression+".");N.columns=N.width;const X=N.width*N.height*N.outputChannels;switch(C){case On:N.byteArray=new Float32Array(X),Q&&N.byteArray.fill(1,0,X);break;case yi:N.byteArray=new Uint16Array(X),Q&&N.byteArray.fill(15360,0,X);break;default:console.error("THREE.EXRLoader: unsupported type: ",C);break}let K=0;for(const $ of h.channels)N.decodeChannels[$.name]!==void 0&&(N.channelByteOffsets[$.name]=K),K+=$.pixelType*2;if(N.totalBytes=K,N.outLineWidth=N.width*N.outputChannels,h.lineOrder==="INCREASING_Y"?N.scanOrder=$=>$:N.scanOrder=$=>N.height-1-$,N.outputChannels==4?(N.format=dn,N.colorSpace=Wi):(N.format=Hc,N.colorSpace=yn),h.spec.singleTile){N.blockHeight=h.tiles.ySize,N.blockWidth=h.tiles.xSize;const $=Gn(h.tiles,N.width,N.height),ie=Zi($,N.width,h.tiles.xSize,h.tiles.roundingMode),fe=Zi($,N.height,h.tiles.ySize,h.tiles.roundingMode);N.tileCount=ie[0]*fe[0];for(let de=0;de<$;de++)for(let xe=0;xe<fe[de];xe++)for(let Me=0;Me<ie[de];Me++)qe(x,A);N.decode=en.bind(N)}else{N.blockWidth=N.width;const $=Math.ceil(N.height/N.blockHeight);for(let ie=0;ie<$;ie++)qe(x,A);N.decode=ti.bind(N)}return N}const Ei={value:0},Wn=new DataView(e),$i=new Uint8Array(e),Xn=Gt(Wn,e,Ei),fi=ni(Xn,Wn,$i,Ei,this.type);return fi.decode(),{header:Xn,width:fi.width,height:fi.height,data:fi.byteArray,format:fi.format,colorSpace:fi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=Vt,o.magFilter=Vt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}async function jn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),s=r.vertexCount,o=r.indexCount;let a=4+n;const l=new qi,c=r.attributes;for(let u=0,f=c.length;u<f;u++){const d=c[u],_=d.id,v=_==="indices"?o:s,g=d.componentSize,m=globalThis[d.storageType],p=new m(t,a,v*g),b=m.BYTES_PER_ELEMENT;let M;if(d.needsPack){const S=d.packedComponents,P=S.length,I=d.storageType.indexOf("Int")===0,R=1<<b*8,L=I?R*.5:0,E=1/R;M=new Float32Array(v*g);for(let T=0,U=0;T<v;T++)for(let H=0;H<P;H++){const k=S[H];M[U]=(p[U]+L)*E*k.delta+k.from,U++}}else M=p;if(_==="indices"){let S=M;M instanceof Uint8Array&&(S=new Uint16Array(M.length),S.set(M)),l.setIndex(new Kt(S,1))}else l.setAttribute(_,new Kt(M,g));a+=v*g*b}return l.computeBoundingSphere(),l}const Yo=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],hl={density:1,friction:2,restitution:.8},cy=40,Nr=8,uy=`
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
`,hy=`
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
uniform vec4 u_nearPositionRadiusList[${Nr}];
uniform vec3 u_nearColorList[${Nr}];

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

  for (int i = 0; i < ${Nr}; i++) {
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
  gi /= float(${Nr});

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
`,fy=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,dy=`
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
`;function py(i){const e={...hl},t={...hl},n={...hl};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function my(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function Th(i,e,t,n,r){const s=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*s}class _y{constructor(e,t,n,r,s,o=!1){this.position=new B((s()-.5)*12,(s()-.5)*12,o?7+s():(s()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Mn().setFromEuler(new Vn(s()*Math.PI,s()*Math.PI,s()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new B,this.gravityAcc=new B}applyImpulse(){this.velocity.add(new B((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(cy),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function gy(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Yo.length),r=Yo[n];const s=new Ta,o=new vn(25,1,.1,100);o.position.set(0,0,25);const a=new Kc({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Wi,a.toneMapping=Bi;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,f=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[d,_]=await Promise.all([jn(u),new Promise((F,Xe)=>{new ly().load(f,F,void 0,Xe)})]);_.minFilter=Vt,_.magFilter=Vt,_.generateMipmaps=!1,_.colorSpace=yn;const v=new B(10,10,5),g=py(r),m=my("balloonBody-25"),p=[],b=[],M=[],S=[],P=Array.from({length:Nr},()=>new Ct(0,0,-999,.01)),I=Array.from({length:Nr},()=>new tt(1118481)),R=F=>new Nt({uniforms:{u_matcap:{value:_},u_color:{value:new tt(F.color)},u_bgColor:{value:new tt(1316117)},u_roughness:{value:F.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Ct(0,0,0,1)},u_selfRotation:{value:new Ct(0,0,0,1)},u_nearPositionRadiusList:{value:P.map(Xe=>Xe.clone())},u_nearColorList:{value:I.map(Xe=>Xe.clone())}},vertexShader:uy,fragmentShader:hy});for(const F of g){const Xe=R(F),Se=new Wt(d,Xe);Se.frustumCulled=!1,Se.scale.setScalar(F.radius),s.add(Se),b.push(Se),M.push(Xe),p.push(new _y(F.radius,F.density,F.friction,F.restitution,m,!1)),S.push({i:b.length-1,d2:0})}const L=new Nt({uniforms:{u_color0:{value:new tt(r)},u_color1:{value:new tt(1316117)},u_aspect:{value:1}},vertexShader:fy,fragmentShader:dy,depthWrite:!1}),E=new Wt(new vr(90,60),L);E.position.z=-12,E.renderOrder=-1e3,s.add(E);const T=new ct(0,0),U=new B,H=new B,k=new B,q=new B,j=new B,W=new B,Y=new B,G=new B,ue=new B,_e=new B,te=new Mn,Ee=.025,we=.1,Z=.12,oe=F=>{const Xe=(e||i).getBoundingClientRect();T.x=(F.clientX-Xe.left)/Xe.width*2-1,T.y=-((F.clientY-Xe.top)/Xe.height*2-1)};window.addEventListener("pointermove",oe);const ae=()=>{n=(n+1)%Yo.length,r=Yo[n],b.forEach((F,Xe)=>{const Se=g[Xe];Se.isColored&&(F.material.uniforms.u_color.value.set(r),Se.color=r)}),L.uniforms.u_color0.value.set(r),p.forEach(F=>F.applyImpulse())},ce=()=>ae();i.addEventListener("click",ce),e==null||e.addEventListener("click",ce);const pe=()=>{const F=e||i.parentElement,Xe=F.clientWidth,Se=F.clientHeight,ze=Xe/Math.max(Se,1);o.fov=Th(ze,2.2,2/3,18,30),o.aspect=ze,o.updateProjectionMatrix(),a.setSize(Xe,Se,!1),L.uniforms.u_aspect.value=ze};pe(),window.addEventListener("resize",pe);let be=0,Fe=performance.now();const $e=performance.now(),je=()=>{const Xe=(e||i).getBoundingClientRect();l=Xe.bottom>0&&Xe.top<window.innerHeight};window.addEventListener("scroll",je,{passive:!0}),je();const ut=F=>{if(be=requestAnimationFrame(ut),!l){Fe=F;return}let Xe=Math.min(.05,(F-Fe)/1e3);Fe=F;const Se=t?1:2;Xe/=Se;const ze=(F-$e)/1e3,Ue=Th(ze,.3,2,25,17.5);o.position.z=Ue;for(let Ve=0;Ve<Se;Ve++){const Ce=new B(T.x,T.y,.5).unproject(o);Ce.sub(o.position).normalize();const D=(0-o.position.z)/Ce.z;U.copy(o.position).addScaledVector(Ce,D),k.copy(U).sub(H).multiplyScalar(Z/Math.max(Xe,.001)),q.copy(U).sub(o.position);const y=q.lengthSq()||1;H.copy(U);for(let z=0;z<p.length;z++){const ee=p[z];ee.updateGravity(Xe),W.copy(ee.velocity),Y.copy(ee.position);for(let ge=z+1;ge<p.length;ge++){const ye=p[ge];ue.copy(ye.velocity),_e.copy(ye.position),j.copy(Y).sub(_e);const rt=j.length(),ve=ee.radius+ye.radius;if(rt<ve&&rt>1e-6){const Le=Math.sqrt(ee.friction*ye.friction);ee.frictionTot+=Le,ye.frictionTot+=Le,j.normalize(),j.multiplyScalar(.5*(rt-ve)),Y.sub(j),_e.add(j),j.normalize();const Ie=W.dot(j),Ne=ue.dot(j),Ae=ee.mass,He=ye.mass,qe=(Ae*Ie+He*Ne-He*(Ie-Ne)*ee.restitution)/(Ae+He),et=(Ae*Ie+He*Ne-Ae*(Ne-Ie)*ye.restitution)/(Ae+He);W.addScaledVector(j,(qe-Ie)/(1+Le)),ue.addScaledVector(j,(et-Ne)/(1+Le)),ye.position.copy(_e),ye.velocity.copy(ue)}}G.copy(Y).sub(o.position);let le=G.dot(q)/y;le=G.sub(ue.copy(q).multiplyScalar(le)).length()-ee.radius-Ee,le<0&&(G.copy(Y).sub(o.position).cross(q).normalize(),ue.copy(q).cross(G).normalize(),Y.sub(ue.multiplyScalar(we*le)),ue.multiplyScalar(-Z/Math.max(Xe,.001)),W.add(ue),W.add(k));let re=Y.length();if(re>0){G.set(1,1,1).normalize();let ge=1-Math.abs(G.dot(ue.copy(Y).normalize()));ge*=Xe*Math.min(1,Math.max(0,re/2))*.5,ge*=z%2*2-1,te.setFromAxisAngle(G,ge),ue.copy(Y).applyQuaternion(te).sub(G.copy(Y)),W.add(ue)}G.crossVectors(Y,W);let ke=G.length();ke/=ee.inertia,ke>0&&(G.normalize(),te.setFromAxisAngle(G,ke*Xe),ee.quaternion.premultiply(te)),ee.position.copy(Y),ee.velocity.copy(W),ee.update(Xe),["x","y","z"].forEach(ge=>{const ye=ge==="z"?5.5:7.5;ee.position[ge]>ye&&(ee.position[ge]=ye,ee.velocity[ge]*=-.55),ee.position[ge]<-ye&&(ee.position[ge]=-ye,ee.velocity[ge]*=-.55)})}}for(let Ve=0;Ve<b.length;Ve++){const Ce=b[Ve],D=p[Ve];Ce.position.copy(D.position),Ce.quaternion.copy(D.quaternion);const y=M[Ve].uniforms;y.u_selfPositionRadius.value.set(D.position.x,D.position.y,D.position.z,D.radius),y.u_selfRotation.value.set(D.quaternion.x,D.quaternion.y,D.quaternion.z,D.quaternion.w),y.u_bgColor.value.copy(L.uniforms.u_color1.value)}for(let Ve=0;Ve<b.length;Ve++){for(let y=0;y<b.length;y++)S[y].i=y,S[y].d2=Ve===y?0:p[Ve].position.distanceToSquared(p[y].position);S.sort((y,z)=>y.d2-z.d2);const Ce=M[Ve].uniforms.u_nearPositionRadiusList.value,D=M[Ve].uniforms.u_nearColorList.value;for(let y=0;y<Nr;y++){const z=S[y+1]?S[y+1].i:S[0].i,ee=p[z];Ce[y].set(ee.position.x,ee.position.y,ee.position.z,ee.radius),D[y].copy(M[z].uniforms.u_color.value)}}o.position.x+=(T.x*.9-o.position.x)*.04,o.position.y+=(T.y*.55-o.position.y)*.04,o.lookAt(0,0,0),a.render(s,o)};return be=requestAnimationFrame(ut),{cycleColor:ae,destroy(){cancelAnimationFrame(be),window.removeEventListener("pointermove",oe),window.removeEventListener("resize",pe),window.removeEventListener("scroll",je),i.removeEventListener("click",ce),e==null||e.removeEventListener("click",ce),M.forEach(F=>F.dispose()),L.dispose(),a.dispose()}}}function ci(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function io(i){return ci(i,0,1)}function Rd(i,e,t){return(t-i)/(e-i||1)}function Ks(i,e,t){return ci(Rd(i,e,t),0,1)}function Oe(i,e,t,n,r,s){let o=Ks(e,t,i);return s&&(o=s(o)),n+o*(r-n)}function Ah(i,e,t,n,r,s){let o=Rd(e,t,i);return n+o*(r-n)}function vy(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const s=(g,m,p,b)=>1/(3*m*g*g+2*p*g+b),o=(g,m,p,b,M)=>m*(g*g*g)+p*(g*g)+b*g+M,a=(g,m,p,b,M)=>{const S=g*g;return m*(S*g)+p*S+b*g+M},l=1-3*n+3*e,c=3*n-6*e,u=3*e,f=1-3*r+3*t,d=3*r-6*t,_=3*t;let v=i;for(let g=0;g<100;g++){const m=o(v,l,c,u,0);let p=s(v,l,c,u);p===1/0&&(p=i),v-=(m-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,f,d,_,0)}function Pt(i){return vy(i,.35,0,0,1)}function Rh(i){return i===1?1:1-Math.pow(2,-10*i)}function xy(i){return i===0?0:Math.pow(1024,i-1)}function Sy(i){return 1-Math.cos(i*Math.PI/2)}function yy(i){return-(Math.cos(Math.PI*i)-1)/2}function My(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function Cd(i){return i*i*i}function Pd(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function $n(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,s=e.bottom;let o=Math.min(0,Ah(n,t,t-r,-1,0));o+=Math.max(0,Ah(n,0,-r,0,1));const a=Oe(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=o>=-1&&o<=1;return{top:n,bottom:s,height:r,width:e.width,ratio:o,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function Ey(i){return 1-Math.pow(1-i,3)}function wy(i){return i*i*i*i}function by(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function pi(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const Ch=[{id:"blackFrameShow",weight:.55},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",weight:1.6},{id:"astronautWait",weight:.9}];function Dd(i){const e=Ch.reduce((a,l)=>a+l.weight,0),t={};let n=0;for(const a of Ch){const l=a.weight/e;t[a.id]={...a,from:n,to:n+l},n+=l}function r(){const a=i.getBoundingClientRect(),l=window.innerHeight,c=a.height-l;return Math.max(0,Math.min(1,-a.top/Math.max(c,1)))}function s(a,l=a){const c=t[a],u=t[l],f=r(),d=c.from,_=u.to,v=(f-d)/Math.max(_-d,1e-6);return{ratio:Math.max(0,Math.min(1,v)),raw:v,active:f>=d&&f<=_,global:f}}function o(a,l){return s(a,l)}return{items:t,progress:r,range:s,between:o,totalWeight:e}}const Ty=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,Ay=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,Ry="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",Cy="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",Ld=`
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
`,Id=`
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
`,Py=`
${Ld}
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
${Id}
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
`,Ph=`
${Ld}
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
#ifdef IS_CLONE
uniform float u_alpha;
#endif

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
${Id}
  vec2 uvDiff = cartesianToPolar(worldNormal);
  vec2 uvSpec = cartesianToPolar(reflection);
  // Lusion samples feedback without forced bias (blur comes from dual-blur RT)
  vec3 blackTunnelEnvDiff = texture2D(u_blackTunnelTexture, 0.25 * uvDiff).rgb;
  vec3 blackTunnelEnvSpec = texture2D(u_blackTunnelTexture, 0.25 * uvSpec).rgb * (0.2 + metalness * 0.7) * 2.0;
#ifdef IS_CLONE
  // Exact Lusion clone ghost: env-only additive silhouette
  gl_FragColor.rgb = (blackTunnelEnvDiff * 3.5 * blackTunnelEnvDiff + blackTunnelEnvSpec * 3.5)
    * v_ao * u_alpha * (0.5 + fresnel * 0.9);
  gl_FragColor.a = mix(max(gl_FragColor.r, max(gl_FragColor.g, gl_FragColor.b)) * u_alpha, 0.0, u_endRatio);
#else
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
  gl_FragColor.rgb = mix(u_bgColor, gl_FragColor.rgb, vec3(u_showRatio));
  gl_FragColor.rgb *= (0.3 + armb.r * 0.7);
  gl_FragColor.rgb += max(worldNormal.z * 2.0 * sunNdL, metalness)
    * texture2D(u_envTexture, 1.2 * (uv - 0.5) + vec2(0.5)).rgb * 0.75 * v_ao * (1.0 - u_blackTunnelRatio);
  // Exact Lusion bloom alpha (NOT 1.0 — alpha drives Stage3D bloom)
  gl_FragColor.a = 0.01 + 0.1 * max(0.0, gl_FragColor.g - 1.0 + metalness * 0.2) * (0.5 + metalness * 1.5)
    + gl_FragColor.b * u_blackTunnelRatio * dot(vec3(0.299, 0.587, 0.114), blackTunnelColor) * 5.0;
  gl_FragColor.a += metalShininess;
  gl_FragColor.a *= (0.5 + fresnel * 0.9);
#endif
}
`,ai=5,Zo=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Dy=`
uniform sampler2D u_texture;
uniform float u_amount;
uniform vec2 u_texelSize;
uniform vec2 u_aspect;
uniform float u_haloWidth;
uniform float u_haloRGBShift;
uniform float u_haloStrength;
uniform float u_haloMaskInner;
uniform float u_haloMaskOuter;
varying vec2 v_uv;
void main() {
  vec2 uv = v_uv;
  vec4 texel = texture2D(u_texture, uv);
  float alpha = texel.a * u_amount;
  gl_FragColor = vec4(texel.rgb * alpha, 1.0);
  if (u_haloStrength > 0.001) {
    vec2 toCenter = (uv - 0.5) * u_aspect;
    vec2 ghostUv = 1.0 - (toCenter + 0.5);
    vec2 ghostVec = (vec2(0.5) - ghostUv);
    vec2 direction = length(ghostVec) > 1e-5 ? normalize(ghostVec) : vec2(0.0);
    vec2 haloVec = direction * u_haloWidth;
    // weight is computed in Lusion but unused — ring comes from bloom blur of RGB-split ghost
    // Lusion: distortion = texelSize * (haloRGBShift * screenWidth) ≈ ±haloRGBShift in UV
    vec3 distortion = vec3(-1.0, 0.0, 1.0) * u_haloRGBShift;
    float zoomBlurRatio = fract(atan(toCenter.y, toCenter.x) * 40.0) * 0.05 + 0.95;
    ghostUv *= zoomBlurRatio;
    vec2 haloUv = ghostUv + haloVec;
    vec3 halo = vec3(
      texture2D(u_texture, haloUv + direction * distortion.r).r,
      texture2D(u_texture, haloUv + direction * distortion.g).g,
      texture2D(u_texture, haloUv + direction * distortion.b).b
    );
    halo *= u_haloStrength * smoothstep(u_haloMaskInner, u_haloMaskOuter, length(toCenter));
    gl_FragColor.rgb += halo;
  }
}
`,Ly=`
varying vec2 v_uv;
uniform sampler2D u_texture;
uniform vec2 u_resolution;
uniform vec2 u_direction;
float gaussianPdf(in float x, in float sigma) {
  return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;
}
void main() {
  vec2 invSize = 1.0 / u_resolution;
  float fSigma = float(SIGMA);
  float weightSum = gaussianPdf(0.0, fSigma);
  vec3 diffuseSum = texture2D(u_texture, v_uv).rgb * weightSum;
  for (int i = 1; i < KERNEL_RADIUS; i++) {
    float x = float(i);
    float w = gaussianPdf(x, fSigma);
    vec2 uvOffset = u_direction * invSize * x;
    diffuseSum += texture2D(u_texture, v_uv + uvOffset).rgb * w;
    diffuseSum += texture2D(u_texture, v_uv - uvOffset).rgb * w;
    weightSum += 2.0 * w;
  }
  gl_FragColor = vec4(diffuseSum / weightSum, 1.0);
}
`,Iy=`
varying vec2 v_uv;
uniform sampler2D u_texture;
uniform float u_saturation;
uniform float u_scrollPaint;
uniform sampler2D u_blurTexture0;
uniform sampler2D u_blurTexture1;
uniform sampler2D u_blurTexture2;
uniform sampler2D u_blurTexture3;
uniform sampler2D u_blurTexture4;
uniform float u_bloomWeights[5];
void main() {
  // Soft radial warp from scroll velocity (approximates Lusion screenPaint)
  vec2 toCenter = v_uv - 0.5;
  float paint = clamp(u_scrollPaint, 0.0, 1.0);
  vec2 warp = toCenter * paint * 0.012;
  vec2 uv = v_uv + warp;
  vec2 rgbShift = normalize(toCenter + 1e-5) * paint * 0.0035;
  vec4 c = vec4(
    texture2D(u_texture, uv + rgbShift).r,
    texture2D(u_texture, uv).g,
    texture2D(u_texture, uv - rgbShift).b,
    1.0
  );
  vec3 bloom =
    u_bloomWeights[0] * texture2D(u_blurTexture0, uv).rgb +
    u_bloomWeights[1] * texture2D(u_blurTexture1, uv).rgb +
    u_bloomWeights[2] * texture2D(u_blurTexture2, uv).rgb +
    u_bloomWeights[3] * texture2D(u_blurTexture3, uv).rgb +
    u_bloomWeights[4] * texture2D(u_blurTexture4, uv).rgb;
  gl_FragColor = vec4(c.rgb + bloom, 1.0);
  float luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
  gl_FragColor.rgb = mix(vec3(luma), gl_FragColor.rgb, u_saturation);
  gl_FragColor.a = 1.0;
}
`,Uy=`
uniform sampler2D u_texture;
uniform sampler2D u_depthTexture;
uniform mat4 u_projectionViewInverseMatrix;
uniform mat4 u_prevProjectionViewMatrix;
uniform vec2 u_aspect;
uniform float u_amount;
varying vec2 v_uv;
void main() {
  float depth = texture2D(u_depthTexture, v_uv).r;
  vec4 ndc = vec4(v_uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
  vec4 worldPos = u_projectionViewInverseMatrix * ndc;
  worldPos /= worldPos.w;
  vec4 prevPos = u_prevProjectionViewMatrix * worldPos;
  prevPos /= prevPos.w;
  prevPos.xy = prevPos.xy * 0.5 + 0.5;
  vec2 velocity = (prevPos.xy - v_uv) / 16.0 * u_amount;
  vec2 uv = v_uv;
  vec4 color = vec4(0.0);
  float weightSum = 0.0;
  float weight = 1.0;
  for (int i = 0; i < 16; i++) {
    color += texture2D(u_texture, uv) * weight;
    uv += velocity;
    weightSum += weight;
  }
  gl_FragColor = color / max(weightSum, 1e-5);
}
`;function Hs(i,e,t=!1){const n={minFilter:Vt,magFilter:Vt,format:dn,type:yi,depthBuffer:t,stencilBuffer:!1},r=new Xi(i,e,n);return t&&(r.depthTexture=new $c(i,e),r.depthTexture.type=bs),r}function Ny(i,e,t){const n=new ct(1,1);i.getSize(n);let r=Hs(1,1,!0),s=Hs(1,1,!1),o=Hs(1,1,!1);const a=[],l=[];for(let Se=0;Se<ai;Se++)a.push(Hs(1,1)),l.push(Hs(1,1));const c=new _d(-1,1,1,-1,0,1),u=new Wt(new vr(2,2),new Yc),f=new Ta;f.add(u);const d=new Nt({uniforms:{u_texture:{value:null},u_amount:{value:1},u_texelSize:{value:new ct(1,1)},u_aspect:{value:new ct(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:Zo,fragmentShader:Dy,depthTest:!1,depthWrite:!1,toneMapped:!1}),_=[];for(let Se=0;Se<ai;Se++){const ze=3+Se*2;_.push(new Nt({uniforms:{u_texture:{value:null},u_resolution:{value:new ct(1,1)},u_direction:{value:new ct(1,0)}},defines:{KERNEL_RADIUS:ze,SIGMA:ze},vertexShader:Zo,fragmentShader:Ly,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const v=new Float32Array(ai),g=new Nt({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:v}},vertexShader:Zo,fragmentShader:Iy,depthTest:!1,depthWrite:!1,toneMapped:!1});let m=0;const p=new Nt({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new pt},u_prevProjectionViewMatrix:{value:new pt},u_aspect:{value:new ct(1,1)},u_amount:{value:1}},vertexShader:Zo,fragmentShader:Uy,depthTest:!1,depthWrite:!1,toneMapped:!1}),b=new pt,M=new pt,S=new pt,P=new pt,I=new pt,R=new B,L=new Vn,E=new B(1,1,1),T=new Mn;let U=!0,H=1,k=!1,q=0,j=0,W=1,Y=1,G=0,ue=.015,_e=.6,te=.3,Ee=.5,we=0,Z=!0,oe=1,ae=1;const ce=new ct(1,0),pe=new ct(0,1),be=(Se,ze)=>{u.material=Se,i.setRenderTarget(ze),i.clear(),i.render(f,c)},Fe=(Se,ze)=>{oe=Math.max(1,Math.floor(Se)),ae=Math.max(1,Math.floor(ze)),r.setSize(oe,ae),s.setSize(oe,ae),o.setSize(oe,ae);for(let Ve=0;Ve<ai;Ve++){const Ce=Math.max(1,Math.floor(oe/Math.pow(2,Ve))),D=Math.max(1,Math.floor(ae/Math.pow(2,Ve)));a[Ve].setSize(Ce,D),l[Ve].setSize(Ce,D)}d.uniforms.u_texelSize.value.set(1/oe,1/ae);const Ue=ae/Math.sqrt(oe*oe+ae*ae)*2;d.uniforms.u_aspect.value.set(oe/ae*Ue,Ue),p.uniforms.u_aspect.value.set(oe/Math.max(ae,1),1)},$e=({blackFrameInRatio:Se=0,blackTitleRatio:ze=0,blackTunnelRatio:Ue=0,whiteFrameRatio:Ve=0,whiteTunnelWaitRatio:Ce=0,astronautDropRatio:D=0,isWhiteTunnelActive:y=!1,isBlackTunnelActive:z=!1}={})=>{let ee=Se*(gn.lerp(0,.15,ze)+gn.clamp((Ue-.2)/.2,0,1)*.25);if(Ue>=.65){const le=gn.clamp((Ue-.65)/.1,0,1);ee=ee+(.08-ee)*le}if(y&&(ee=0),G=ee,W=Ue<1?gn.lerp(1,3,gn.clamp(Ue/.7,0,1)):1,y)q=D<1?gn.lerp(4,2,gn.clamp(Ve/.05,0,1)):gn.lerp(0,20,gn.clamp(Ce/.1,0,1)),we=gn.lerp(.3,0,gn.clamp(Ce/.1,0,1));else{const le=gn.clamp(ze/.25,0,1);q=gn.lerp(30,6,le),we=0}_e=.6,ue=.015,te=.3,Ee=.5,j=0,Y=1,k=z||y},je=(Se,ze=0)=>{R.set(0,0,Se),L.set(0,0,ze)},ut=()=>{U=!0},F=(Se,ze)=>{const Ue=i.autoClear;i.autoClear=!0,be(Se,ze),i.autoClear=Ue},Xe=()=>{var D;if(!Z){i.setRenderTarget(null),i.render(e,t);return}const Se=i.getRenderTarget(),ze=i.autoClear;i.setRenderTarget(r),i.autoClear=!0,i.setClearColor((D=e.background)!=null&&D.isColor?e.background.getHex():0,we),i.clear();const Ue=e.background;e.background=null,i.render(e,t),e.background=Ue;let Ve=r.texture;if(b.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),S.copy(b).invert(),k&&H>0?(U&&(M.copy(b),U=!1),I.compose(R,T.setFromEuler(L),E),I.invert(),P.copy(M).multiply(I),p.uniforms.u_texture.value=r.texture,p.uniforms.u_depthTexture.value=r.depthTexture,p.uniforms.u_projectionViewInverseMatrix.value.copy(S),p.uniforms.u_prevProjectionViewMatrix.value.copy(P),p.uniforms.u_amount.value=H,F(p,s),Ve=s.texture,M.copy(b)):(M.copy(b),U=!0),q<.05&&G<.005){g.uniforms.u_texture.value=Ve;for(let y=0;y<ai;y++)v[y]=0,g.uniforms[`u_blurTexture${y}`].value=Ve;g.uniforms.u_saturation.value=1,i.setRenderTarget(null),be(g,null),i.autoClear=ze,i.setRenderTarget(Se);return}d.uniforms.u_texture.value=Ve,d.uniforms.u_amount.value=Y,d.uniforms.u_haloStrength.value=G,d.uniforms.u_haloWidth.value=_e,d.uniforms.u_haloRGBShift.value=ue,d.uniforms.u_haloMaskInner.value=te,d.uniforms.u_haloMaskOuter.value=Ee,F(d,o);let Ce=o;for(let y=0;y<ai;y++){const z=_[y];z.uniforms.u_texture.value=Ce.texture,z.uniforms.u_resolution.value.set(Ce.width,Ce.height),z.uniforms.u_direction.value=ce,F(z,a[y]),z.uniforms.u_texture.value=a[y].texture,z.uniforms.u_resolution.value.set(a[y].width,a[y].height),z.uniforms.u_direction.value=pe,F(z,l[y]),Ce=l[y]}for(let y=0;y<ai;y++){const z=(ai-y)/ai;v[y]=q*(z+(1.2-z*2)*j)/Math.pow(2,ai-y-1)}g.uniforms.u_texture.value=Ve,g.uniforms.u_saturation.value=W;for(let y=0;y<ai;y++)g.uniforms[`u_blurTexture${y}`].value=l[y].texture;i.setRenderTarget(null),be(g,null),i.autoClear=ze,i.setRenderTarget(Se)};return Fe(n.x,n.y),{resize:Fe,sync:$e,render:Xe,setEfxOffset:je,markEfxSync:ut,setEfxAmount(Se){H=Se},get clearAlpha(){return we},setEnabled(Se){Z=!!Se},setScrollVelocity(Se){const ze=Math.min(1,Math.abs(Se)*.35);m+=(ze-m)*.15,g.uniforms.u_scrollPaint.value=m},destroy(){r.dispose(),s.dispose(),o.dispose(),a.forEach(Se=>Se.dispose()),l.forEach(Se=>Se.dispose()),d.dispose(),g.dispose(),p.dispose(),_.forEach(Se=>Se.dispose()),u.geometry.dispose()}}}function Fy(i,e,t){return i+(e-i)*t}const or=class or{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<or.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,s=r*r*(3-2*r),o=n&or.MAX_VERTICES_MASK,a=o+1&or.MAX_VERTICES_MASK;return Fy(this._r[o],this._r[a],s)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let s=0;s<t;s++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};We(or,"MAX_VERTICES",512),We(or,"MAX_VERTICES_MASK",or.MAX_VERTICES-1);let gc=or;const mi=new B,so=class so{constructor(){this._position=new B,this._rotation=new Mn,this._euler=new Vn,this._scale=new B(1,1,1),this._matrix=new pt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new B(1,1,1),this._rotationScale=new B(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new gc,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;mi.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),mi.multiply(this._positionScale),mi.multiplyScalar(this._positionAmplitude*so.FBM_NORM),this._position.copy(mi)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;mi.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),mi.multiply(this._rotationScale),mi.multiplyScalar(this._rotationAmplitude*so.FBM_NORM),this._euler.set(mi.x,mi.y,mi.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};We(so,"FBM_NORM",1/.75);let va=so;class Dh{constructor(e,t=1.5,n=.8,r=2,s=!0){this.isRobust=s,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,s=e/(1+r-n);this._k1Stable=(1-r)*s,this._k2Stable=e*s}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const $o=53,Ko=16,jo=20,Lh=["helmet","helmet_glass","glove_shoes","wearpack"],Vs=["#0d2b27","#ba0000","#00b5a6","#0099ff"],fl=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function Ih(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function Uh(i,e){const[t,n]=await Promise.all([Ih(i),Ih(e)]),r=document.createElement("canvas");r.width=t.width,r.height=t.height;const s=r.getContext("2d",{willReadFrequently:!0});s.drawImage(n,0,0,r.width,r.height);const o=s.getImageData(0,0,r.width,r.height);s.clearRect(0,0,r.width,r.height),s.drawImage(t,0,0,r.width,r.height);const a=s.getImageData(0,0,r.width,r.height);for(let c=0;c<a.data.length;c+=4)a.data[c+3]=o.data[c];s.putImageData(a,0,0);const l=new kS(r);return l.colorSpace=yn,l.flipY=!1,l.needsUpdate=!0,l}function Nh(i,e,t){const n=new yd(i,e,t,dn,On);return n.magFilter=pn,n.minFilter=pn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function dl(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new _i(t,3)}const pl=`
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
`,Fh=`
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
`;async function Oy(i,e,t){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",s=!n,[o,a,l,c,u,f,d,_,v,g,m,p,b,...M]=await Promise.all([jn(`${r}assets/models/tunnels/astronaut_animations.buf`),jn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),jn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new ks().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new ks().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new ks().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),jn(`${r}assets/models/tunnels/tunnel_block_base.buf`),jn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),jn(`${r}assets/models/tunnels/grid_base_ld.buf`),jn(`${r}assets/models/tunnels/grid_structure_ld.buf`),s?jn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),s?jn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new ks().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),...Lh.map(Te=>jn(`${r}assets/models/tunnels/astronaut_${Te}.buf`))]),S=new Ta;S.background=new tt(0);const P=new B(0,0,25),I=new B(0,0,24),R=45,L=new vn(R,1,1,200);L.position.copy(P),L.lookAt(I);let E;try{E=new Kc({canvas:i,antialias:!n,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(Te){throw console.error("Goal WebGL unavailable",Te),Te}E.setClearColor(0,1),E.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1:1.35)),E.outputColorSpace=fn,E.autoClear=!0,c.colorSpace=yn,u.colorSpace=fn,f.colorSpace=fn,f.wrapS=f.wrapT=ps;const T=o.attributes.position.array,U=o.attributes.orient.array,H=T.length/3,k=H/$o,q=Math.ceil(Math.sqrt(H)),j=Math.ceil(H/q),W=q*j,Y=new Float32Array(W*4),G=new Float32Array(W*4);for(let Te=0,Ke=0,Be=0;Te<H;Te++,Ke+=3,Be+=4)Y[Be]=T[Ke],Y[Be+1]=T[Ke+1],Y[Be+2]=T[Ke+2],Y[Be+3]=1,G[Be]=U[Be],G[Be+1]=U[Be+1],G[Be+2]=U[Be+2],G[Be+3]=U[Be+3];const ue=Nh(Y,q,j),_e=Nh(G,q,j),te=new _i(new Float32Array([0,0,18]),3);te.setUsage(ji);const Ee=new _i(new Float32Array([0,0,0,1]),4);Ee.setUsage(ji);const we=new _i(new Float32Array([0,1,0]),3);we.setUsage(ji);const Z=new _i(new Float32Array([90,91,0]),3);Z.setUsage(ji);const oe=()=>{const Te=new Xi(1,1,{minFilter:Fi,magFilter:Vt,format:dn,generateMipmaps:!0});return Te.texture.wrapS=Te.texture.wrapT=ma,Te},ae=oe(),ce=oe();let pe=ae,be=ce;const Fe={u_animationPositionTexture:{value:ue},u_animationOrientTexture:{value:_e},u_animationTextureSize:{value:new ct(q,j)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new tt("#566d80")},u_bgColor:{value:new tt("#000000")},u_sunPosition:{value:new B(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new tt(0,0,0)},u_time:{value:0}},$e={u_blackTunnelTexture:{value:pe.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},je={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async Te=>{const[Ke,Be]=await Promise.all([Uh(`${r}assets/textures/tunnels/astronaut/astronaut_${Te}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${Te}_base.webp`),new ks().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${Te}_nor.webp`)]);Be.colorSpace=yn,Be.flipY=!1,je[Te]={armb:Ke,nor:Be}})),je.helmet_glass=je.helmet;const ut=new zi;S.add(ut);const F=[],Xe=4,Se=new _i(new Float32Array(Xe*3),3);Se.setUsage(ji);const ze=new _i(new Float32Array(Xe*4),4);ze.setUsage(ji);const Ue=new _i(new Float32Array(Xe*3),3);Ue.setUsage(ji);const Ve=new _i(new Float32Array(Xe*3),3);Ve.setUsage(ji);for(let Te=0;Te<Xe;Te++)ze.setXYZW(Te,0,0,0,1),Ue.setXYZ(Te,0,1,0),Ve.setXYZ(Te,90,91,0);const Ce=[];let D=0;const y={value:0};Lh.forEach((Te,Ke)=>{const Be=M[Ke],Qe=new Xo;for(const St in Be.attributes)Qe.setAttribute(St,Be.attributes[St]);Be.index&&Qe.setIndex(Be.index),Qe.instanceCount=1,Qe.setAttribute("instancePos",te),Qe.setAttribute("instanceOrient",Ee),Qe.setAttribute("instanceAnimationFrameFromToBlend1",we),Qe.setAttribute("instanceAnimationFrameFromToBlend2",Z);const ot=Te==="helmet_glass"||Te==="card"?"helmet":Te,bt=Te==="helmet_glass",xt={...Fe,u_armbTexture:{value:je[ot].armb},u_norTexture:{value:je[ot].nor}},Bt={...Fe,...$e,u_armbTexture:{value:je[ot].armb},u_norTexture:{value:je[ot].nor}},qn=new Nt({uniforms:xt,vertexShader:pl,fragmentShader:bt?Fh:Py,transparent:bt,blending:bt?fr:hi,side:Sn,defines:{BONE_COUNT:$o,...bt?{IS_HELMET_GLASS:!0}:{}}}),cn=new Nt({uniforms:Bt,vertexShader:pl,fragmentShader:bt?Fh:Ph,transparent:!0,blending:hi,side:Sn,defines:{BONE_COUNT:$o,IS_BLACK:!0}}),nn=new Wt(Qe,qn);if(nn.frustumCulled=!1,nn.userData.whiteMat=qn,nn.userData.blackMat=cn,ut.add(nn),F.push(nn),!bt){const St=new Xo;for(const Sr in Be.attributes)St.setAttribute(Sr,Be.attributes[Sr]);Be.index&&St.setIndex(Be.index),St.instanceCount=Xe,St.setAttribute("instancePos",Se),St.setAttribute("instanceOrient",ze),St.setAttribute("instanceAnimationFrameFromToBlend1",Ue),St.setAttribute("instanceAnimationFrameFromToBlend2",Ve);const di=new Nt({uniforms:{...Bt,u_armbTexture:{value:je[ot].armb},u_norTexture:{value:je[ot].nor},u_alpha:y},vertexShader:pl,fragmentShader:Ph,transparent:!0,depthWrite:!1,depthTest:!1,blending:Xf,blendEquation:Ii,blendSrc:Ys,blendDst:Ys,blendEquationAlpha:Ii,blendSrcAlpha:Ys,blendDstAlpha:Ys,side:Sn,defines:{BONE_COUNT:$o,IS_BLACK:!0,IS_CLONE:!0}}),Yn=new Wt(St,di);Yn.frustumCulled=!1,Yn.renderOrder=1e3,Yn.visible=!1,ut.add(Yn),Ce.push(Yn)}});const z=new zi;S.add(z);const ee=new B;let le=0,re=1,ke=typeof window<"u"?window.scrollY:0,ge=1;const ye=(Te,Ke)=>{const Be=new Xo;for(const xt in Te.attributes)Be.setAttribute(xt,Te.attributes[xt]);Te.index&&Be.setIndex(Te.index);const Qe=new Float32Array(Ko);for(let xt=0;xt<Ko;xt++)Qe[xt]=xt;Be.setAttribute("a_instanceId",new _i(Qe,1)),Be.instanceCount=Ko;const ot=new Nt({uniforms:{u_texture:{value:f},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:ee},u_time:{value:0}},vertexShader:Ry,fragmentShader:Cy,transparent:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:Ko,...Ke?{IS_WALL:!0}:{}}}),bt=new Wt(Be,ot);return bt.frustumCulled=!1,z.add(bt),ot},rt=ye(d,!1),ve=ye(_,!0),Le=new Nt({uniforms:{u_color:{value:new tt(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:hi}),Ie=new Wt(new vr(200,200),Le);Ie.position.z=-80,Ie.renderOrder=-10,S.add(Ie);const Ne=new zi;S.add(Ne);const Ae=await Uh(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);Ae.wrapS=Ae.wrapT=ps,b.colorSpace=yn,b.flipY=!1,b.wrapS=b.wrapT=ps;const He={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:pe.texture},u_greebleArmbTexture:{value:Ae},u_greebleNormalTexture:{value:b},u_resolution:{value:new ct(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new B(0,70,0)},u_color1:{value:new tt(Vs[0])},u_color2:{value:new tt(fl[0])}},qe=(Te,Ke,Be)=>{const Qe=new Xo;for(const Bt in Te.attributes)Qe.setAttribute(Bt,Te.attributes[Bt]);Te.index&&Qe.setIndex(Te.index);const ot=Te.attributes.position.count;Qe.getAttribute("ao")||Qe.setAttribute("ao",new Kt(new Float32Array(ot).fill(1),1)),Qe.getAttribute("areaRatio")||Qe.setAttribute("areaRatio",new Kt(new Float32Array(ot),1)),Qe.getAttribute("height")||Qe.setAttribute("height",new Kt(new Float32Array(ot).fill(1),1)),Qe.getAttribute("cluster")||Qe.setAttribute("cluster",new Kt(new Float32Array(ot),1)),Qe.setAttribute("instancePos",dl(Ke.attributes.position)),Qe.setAttribute("instanceGridIds",dl(Ke.attributes.gridIds)),Qe.setAttribute("instanceAxis",dl(Ke.attributes.rotAxis)),Qe.instanceCount=Ke.attributes.position.count;const bt=new Nt({uniforms:He,vertexShader:Ty,fragmentShader:Ay,side:Sn,transparent:!1,depthWrite:!0,blending:fr,defines:{GRID_SIZE:jo,...Be?{IS_HD:!0}:{}}}),xt=new Wt(Qe,bt);return xt.frustumCulled=!1,xt.renderOrder=Be?2:1,Ne.add(xt),xt};qe(v,g,!1),s&&m&&p&&qe(m,p,!0);let et=0,O=0,J=0,ne=R,he=0,De=-80,Re=0;const Ge=new va;Ge.positionFrequency=.2,Ge.rotationFrequency=.15,Ge.positionAmplitude=0,Ge.rotationAmplitude=0;const yt=new Dh(new B,1,.65,1.3),At=new Dh(new B,1,.85,1.1),mt=Array.from({length:Xe},()=>{const Te=new va;return Te.positionFrequency=.2,Te.rotationFrequency=.6,Te.positionAmplitude=12,Te.rotationAmplitude=10,Te}),Qt=Float32Array.from({length:Xe+1},(Te,Ke)=>Ke===0?0:Math.random()*2),mn=new Float32Array(Xe),xr=new Float32Array(Xe),Yi=new B,Cn=new Mn,Gn=new pt,Zi=new pt,en=new B,ti=new B,Gt=new Mn,ni=new Vn,Ei=new B(1,1,1),Wn=new tt,$i=new tt,Xn=new B,fi=new B;let h=0,x=0,w=0,A=0,C=.08;const N=.1;let V=!1,Q=0,X=0,K=0;window.addEventListener("pointermove",Te=>{h=Te.clientX/Math.max(window.innerWidth,1)*2-1,x=Te.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{V=!0},{passive:!0}),window.addEventListener("pointerup",()=>{V=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{V=!1},{passive:!0});const $=()=>{L.near=1,L.far=200,L.position.copy(P),L.up.set(0,1,0),L.lookAt(I),L.fov=ne,Xn.set(0,0,-1).applyQuaternion(L.quaternion);let Te=fi.copy(I).sub(L.position).dot(Xn);const Ke=L.fov,Be=Ke+J,Qe=Math.max(1,Math.min(170,Be));let ot=Te*Math.tan(Ke/360*Math.PI/2)/Math.tan(Qe/360*Math.PI/2)-Te;Number.isFinite(ot)||(ot=0),L.translateZ(ot),L.fov=Ke,Te+=ot,L.translateZ(Te*-1);const bt=Math.max(-1,Math.min(1,x))*C,xt=Math.max(-1,Math.min(1,-h))*C;w+=(bt-w)*N,A+=(xt-A)*N,ni.set(w,A,0),Gt.setFromEuler(ni),L.quaternion.multiply(Gt),L.translateZ(Te),L.updateProjectionMatrix()},ie=Te=>{if(Ge.update(Te),yt.update(Te,Ge.position),en.copy(Ge.euler),At.update(Te,en),ni.set(At.value.x,At.value.y,At.value.z),Gt.setFromEuler(ni),Zi.compose(yt.value,Gt,Ei),Gn.compose(Yi,Cn,Ei),Gn.multiply(Zi),Gn.decompose(en,Gt,ti),te.setXYZ(0,en.x,en.y,en.z),Ee.setXYZW(0,Gt.x,Gt.y,Gt.z,Gt.w),te.needsUpdate=!0,Ee.needsUpdate=!0,st=1+Math.min(3.5,yt.valueVel.length()*.2+At.valueVel.length()*.2),D>.01&&!it&&!vt){for(let Ke=0;Ke<Xe;Ke++){const Be=mt[Ke];Be.positionFrequency=.2,Be.rotationFrequency=.6,Be.positionAmplitude=12,Be.rotationAmplitude=10,Be.update(Te),Gn.compose(Yi,Cn,Ei),Gn.multiply(Be.matrix),Gn.decompose(en,Gt,ti);const Qe=Ke/Math.max(Xe-1,1),ot=Oe(D,Qe*.3,.7+Qe*.3,1,0,yy);ti.set(te.getX(0),te.getY(0),te.getZ(0)),en.lerp(ti,ot),Se.setXYZ(Ke,en.x,en.y,en.z),ze.setXYZW(Ke,Gt.x,Gt.y,Gt.z,Gt.w)}Se.needsUpdate=!0,ze.needsUpdate=!0}},fe=i.parentElement||e,de=Dd(e);let xe=0,Me=0,me=0,se=0,nt=0,Ye=0,_t=0,ht=0,Ze=0,vt=!0,Je=!1,it=!1,ft=0,st=1,Ut=0,$t=performance.now(),tn=!1;const zt=Ny(E,S,L),Is=()=>{const Te=fe,Ke=Te.clientWidth||window.innerWidth,Be=Te.clientHeight||window.innerHeight;L.aspect=Ke/Math.max(Be,1),$(),E.setSize(Ke,Be,!1),zt.resize(Ke,Be),He.u_resolution.value.set(Ke,Be);const Qe=Math.max(1,Math.floor(Ke*.25)),ot=Math.max(1,Math.floor(Be*.25));(ae.width!==Qe||ae.height!==ot)&&(ae.setSize(Qe,ot),ce.setSize(Qe,ot))};Is(),window.addEventListener("resize",Is);const jc=(Te,Ke)=>{const Be=Te.attributes.position.array,Qe=Te.attributes.orient.array,ot=Be.length/3,bt=Math.max(0,Math.min(ot-1.0001,Ke*(ot-1))),xt=Math.floor(bt),Bt=Math.min(ot-1,xt+1),qn=bt-xt,cn=new B().fromArray(Be,xt*3).lerp(new B().fromArray(Be,Bt*3),qn),nn=new Mn().fromArray(Qe,xt*4).slerp(new Mn().fromArray(Qe,Bt*4),qn);return{p:cn,q:nn}},yo=()=>{var nn;if(!e)return;const Te=window.innerHeight,Ke=window.scrollY||0;Ke!==ke&&(ge=Ke>ke?1:-1,ke=Ke),nt=de.range("blackFrameIn").ratio,me=de.range("blackTitle").ratio,se=de.range("blackTunnel").ratio,_t=de.range("whiteTunnel").ratio,xe=de.between("whiteTunnel","whiteFrameOut").ratio,Ye=de.range("whiteFrameBreak").ratio;const Be=de.between("whiteTunnel","whiteFrameBreak").ratio;Ze=de.between("whiteFrameBreak","astronautDrop").ratio,ht=((nn=de.range("astronautWait"))==null?void 0:nn.ratio)??0,K=de.between("whiteFrameBreak","astronautWait").ratio,vt=me<1,Je=se<1&&!vt,it=xe<=1&&!Je&&!vt,Me=it?pi(0,.15,Be):1,zt.sync({blackFrameInRatio:nt,blackTitleRatio:me,blackTunnelRatio:se,whiteFrameRatio:_t,whiteTunnelWaitRatio:ht,astronautDropRatio:Ze,isWhiteTunnelActive:it,isBlackTunnelActive:Je}),Fe.u_whiteTunnelRatio.value=xe,Fe.u_showRatio.value=Me,Fe.u_frameOutRatio.value=Ye,rt.uniforms.u_ratio.value=xe,ve.uniforms.u_ratio.value=xe,rt.uniforms.u_ratioInverse.value=1-xe,ve.uniforms.u_ratioInverse.value=1-xe;const Qe=new tt(it&&Ze<1?"#ffffff":"#000000");Le.uniforms.u_color.value.copy(Qe),S.background=null,E.setClearColor(Qe,zt.clearAlpha),Fe.u_bgColor.value.copy(Qe),fe&&(fe.style.background=Qe.getStyle()),z.visible=it&&Ze<1,Ne.visible=Je;const ot=e.dataset.goalPhase==="black-tunnel",bt=e.dataset.goalPhase==="white";(Je&&!ot||it&&!bt)&&zt.markEfxSync();const xt=it;for(const St of F){const di=xt?St.userData.whiteMat:St.userData.blackMat;St.material!==di&&(St.material=di)}D=Je?pi(.2,.4,se):0,y.value=D;for(const St of Ce)St.visible=!it&&D>.01;let Bt;if(it){const St=xe<1?Oe(xe,0,1,0,79):Oe(Ze,0,1,79,99);Bt=jc(l,St/99),Bt.p.y-=(n?0:.4)*by(Ze)}else Bt=jc(a,Cd(Math.min(me,1)));if(Yi.copy(Bt.p),Cn.copy(Bt.q),Ge.positionFrequency=.2,Ge.rotationFrequency=.15,Ge.positionAmplitude=0,Ge.rotationAmplitude=0,Je){const St=se;Ge.positionFrequency=.2+.5*St,Ge.rotationFrequency=.15,Ge.positionAmplitude=5*St,Ge.rotationAmplitude=60*St}else it&&(Ge.positionFrequency=Oe(_t,0,.45,.5,.2),Ge.rotationFrequency=Oe(_t,0,.45,.4,.15),Ge.positionAmplitude=Oe(_t,0,.75,5,0),Ge.rotationAmplitude=Oe(_t,0,.75,15,0));ut.visible=Me>.02,ne=R,it?(J=Oe(xe,0,1,60,0),ne=Oe(_t,0,1,R,70)):Je?(J=Math.sin(se*10+le)*7.5*pi(0,.2,se),Ne.position.z=-80*Ks(.2,0,se)):(J=Oe(nt,0,1,20,0),Ne.position.z=-80),C=.08*pi(.5,1,me)+.02,xe>0&&(C*=Oe(de.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),C=Oe(ht,0,.1,C,.05),X=(1-Q)*ge*2.5*Oe(nt,0,.5,0,1)*Oe(ht,0,.25,1,0),$(),$e.u_frameIn.value=nt,$e.u_sunFactor.value=Je?1-pi(.1,.2,se):1,$e.u_blackTunnelRatio.value=Je?pi(.1,.3,se):0,$e.u_endRatio.value=Je?pi(.65,.9,se):0,$e.u_offsetZ.value=He.u_offsetZ.value;const qn=Oe(Ze,1,0,.2,1)*(Ye>0?1:0);Fe.u_tintColor.value.setStyle("#2533c2").multiplyScalar(qn);const cn=fe.getBoundingClientRect();tn=cn.bottom>0&&cn.top<Te,e.dataset.goalPhase=it?"white":Je?"black-tunnel":"title"},Bd=Te=>{if(!Je){He.u_showRatio.value=0,zt.setEfxOffset(0,0);return}He.u_showRatio.value=xy(Ks(0,.1,se));const Ke=He.u_outBloomFromToStrength.value;Ke.z=Oe(se,.65,.75,0,.2),Ke.z=Oe(se,.75,.85,Ke.z,.15),Ke.z=Oe(se,.85,1,Ke.z,.15),Ke.x=Oe(se,.75,.85,20,60),Ke.x=Oe(se,.9,1,Ke.x,30);const Be=Oe(se,.6,1,0,1,Sy);He.u_blackTunnelTransformRatio.value=Be;const Qe=ge*Te;et+=Qe*Ks(.1,.3,se)*Oe(Be,0,.25,1,.5),O+=Qe*Oe(Be,0,.25,1.5,1);const ot=et,bt=Math.floor(ot),xt=ot-bt,Bt=(bt+Pd(xt))*jo+O*jo+se*jo*10,qn=-80*Ks(.2,0,se);let cn=qn-De,nn=Bt-he;(Math.abs(nn)>8||Math.abs(cn)>20)&&(nn=0,cn=0),Re=cn+nn,De=qn,he=Bt,Ne.position.z=qn,He.u_offsetZ.value=Bt,$e.u_offsetZ.value=Bt,He.u_time.value=le;const St=Vs.length*Oe(se,.2,1,0,1),di=Math.floor(St),Yn=Math.min(Math.ceil(St),Vs.length-1),Us=St-di>.5?1:0;Wn.set(Vs[di]),$i.set(Vs[Yn]),Wn.lerp($i,Us),He.u_color1.value.copy(Wn),Wn.set(fl[di]),$i.set(fl[Yn]),Wn.lerp($i,Us),He.u_color2.value.copy(Wn),zt.setEfxOffset(Re*Oe(se,0,.2,0,1),Re*Be*.01),zt.setEfxAmount(1),J=Math.sin(se*10+le)*7.5*pi(0,.2,se)},kd=Te=>{it&&(ee.set(Math.sin(le*1.1)*1.4+Math.sin(le*2.4)*.6,Math.cos(le*.9)*1.2+Math.sin(le*1.7)*.5,Math.sin(le*1.3+.5)*.8),rt.uniforms.u_time.value=le,ve.uniforms.u_time.value=le,rt.uniforms.u_fbm.value=ee,ve.uniforms.u_fbm.value=ee)},Jc=()=>yo();window.addEventListener("scroll",Jc,{passive:!0}),yo();const Qc=Te=>{var iu;const Ke=Math.min(.05,Math.max(0,Te||.016666666666666666));if($t=performance.now(),!tn){if(fe){const _n=fe.getBoundingClientRect();_n.bottom>0&&_n.top<window.innerHeight&&zt.render()}return}Q+=((V?1:0)-Q)*.1,re=Oe(Q,0,1,1,.3)*Ke,re=Oe(nt,0,1,Ke,re),re=Oe(K,.5,.75,re,Ke),le+=re,Fe.u_time.value=le,X=(1-Q)*ge*2.5*Oe(nt,0,.5,0,1)*Oe(ht,0,.25,1,0),Bd(re),kd(),ie(re),Je&&(J=Math.sin(se*10+le)*7.5*pi(0,.2,se)),$();const Be=Ze;let Qe,ot,bt;Be<.5?(Qe=pi(-.3,1,me)*.75,ot=0,bt=89):(Qe=Oe(Be,.9,1,0,1),ot=140,bt=Math.min(k-1,287)),ft+=re*Qe*st;const xt=bt-ot+1,cn=(Qt[0]+ft)*60%xt,nn=Math.floor(cn)+ot,St=(Math.floor(cn)+1)%xt+ot,di=cn-Math.floor(cn);we.setXYZ(0,nn,St,di),we.needsUpdate=!0;const Yn=Oe(xe+Be,.9,2,90,139,wy),Sr=Math.floor(Yn),Us=Math.ceil(Yn),nu=Yn-Sr;if(Z.setXYZ(0,Sr,Us,nu),Z.needsUpdate=!0,Fe.u_loopLinearBlend.value=Oe(Be,0,.1,0,1)*Oe(Be,.9,1,1,0),D>.01&&!it&&!vt){for(let _n=0;_n<Xe;_n++){mn[_n]=(mn[_n]+.2*re)%1,xr[_n]+=re*Qe*st;const Mo=(gn.lerp(0,Qt[_n+1],D)+xr[_n])*60%xt,Vd=Math.floor(Mo)+ot,Gd=(Math.floor(Mo)+1)%xt+ot,Wd=Mo-Math.floor(Mo);Ue.setXYZ(_n,Vd,Gd,Wd),Ve.setXYZ(_n,Sr,Us,nu)}Ue.needsUpdate=!0,Ve.needsUpdate=!0}if((iu=zt.setScrollVelocity)==null||iu.call(zt,Math.abs(X)+Math.abs(ge)*.5),Je){const _n=He.u_resolution.value.clone();z.visible=!1,Ie.visible=!1,ut.visible=Me>.02,He.u_feedbackTexture.value=pe.texture,He.u_resolution.value.set(be.width,be.height),E.setRenderTarget(be),E.setClearColor(0,0),E.clear(),E.render(S,L),E.setRenderTarget(null),He.u_resolution.value.copy(_n);const ru=pe;pe=be,be=ru,He.u_feedbackTexture.value=pe.texture,$e.u_blackTunnelTexture.value=pe.texture,Ie.visible=!0}E.setClearColor(Fe.u_bgColor.value,zt.clearAlpha),zt.render()},eu=Te=>{Ut=requestAnimationFrame(eu);const Ke=Math.min(.05,(Te-$t)/1e3);Te-tu>50&&Qc(Ke)};let tu=0;const Hd=Te=>{tu=performance.now(),Qc(Te)};return Ut=requestAnimationFrame(eu),requestAnimationFrame(()=>{Is(),yo(),zt.render()}),{resize:Is,updateScroll:yo,tickFrame:Hd,getAutoScrollSpeed:()=>X,destroy(){cancelAnimationFrame(Ut),window.removeEventListener("resize",Is),window.removeEventListener("scroll",Jc),ae.dispose(),ce.dispose(),zt.destroy(),E.dispose()}}}function zy(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(d=>{if(d.querySelector(".goal-word"))return;const _=d.textContent.replace(/\s+/g," ").trim().split(" ");d.innerHTML=_.map(v=>`<span class="goal-word">${v}</span>`).join(" ")});const r=Dd(i),s=()=>window.innerWidth<812,o=i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const d=e.getBoundingClientRect(),_=d.width,v=d.left;n.forEach(g=>{const m=Array.from(g.querySelectorAll(".goal-word"));if(m.length<2){m.forEach(S=>{S._offsetX=0});return}m.forEach(S=>{S.style.transform="translateZ(0)"});let p=_;m.forEach(S=>{const P=S.getBoundingClientRect();S._domRect=P,p-=P.width});let b=0;const M=p/(m.length-1);m.forEach(S=>{S._offsetX=-S._domRect.left+v+b,b+=S._domRect.width+M})})};c(),window.addEventListener("resize",c);let u=null;t&&t.parentElement&&(u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const f=()=>{const d=r.range("blackTitle").ratio,_=r.range("blackTunnel").ratio,v=r.between("whiteTunnel","whiteFrameOut").ratio,g=r.between("whiteFrameBreak","astronautDrop").ratio,m=Oe(v,0,.25,0,1);r.progress();const p=window.innerHeight;if(t){const R=i.getBoundingClientRect(),L=window.scrollY||0,T=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+L,U=L>=T-1&&R.bottom>p;t.classList.toggle("is-pinned",U),u&&(u.style.height=U?`${t.offsetHeight||p}px`:"0px"),t.style.background=m>.5?"#f0f1fa":"#000000"}let b=Oe(d,a,l,0,1);const M=b>0&&b<1;let S=Oe(b,.5,1,1,s()?6:12,Cd);S*=Oe(b,0,.15,.85,1,Ey);let P=Oe(b,.9,1,1,0);P*=Oe(b,0,.05,0,1),P*=Oe(_,0,.12,1,0);const I=Oe(b,.4,.6,0,1,Pd);if(e.classList.toggle("is-on-black",m<.5),e.style.opacity=String(P),e.style.transform=`translate3d(-50%, -50%, 0) scale(${S})`,e.style.visibility=M&&P>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(R=>{const L=R._offsetX||0;R.style.transform=`translateX(${I*L}px)`}),o){const R=Oe(_,.02,.15,1,0);o.style.opacity=String(R),o.style.transform="none"}return i.dataset.goalPhase=v>.01?"white":_>.01?"black-tunnel":"title",{blackTitleRatio:d,blackTunnelRatio:_,whiteTunnelRatio:v,astronautDropRatio:g,toWhite:m}};return window.addEventListener("scroll",f,{passive:!0}),f(),{updateScroll:f,ranges:r,destroy(){window.removeEventListener("scroll",f),window.removeEventListener("resize",c)}}}function Jo(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((s,o)=>{const a=document.createElement("div");a.className=e,a.textContent=s,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),o<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function By(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,s)=>{const o=document.createElement("div");o.className="word",o.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",o.appendChild(l),t.push(l)}),i.appendChild(o),r<s.length-1&&i.appendChild(document.createTextNode(" "))}),t}function Cr(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function ky(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=Cr(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),s=document.getElementById("home-reel-title-line-2"),o=document.getElementById("home-reel-content"),a=Cr(document.getElementById("home-reel-desc"),2),l=Cr(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),f=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let d=[],_=0,v=[],g=!0;const m=()=>{d.forEach(te=>{te.style.transform="translate3d(0, 100%, 0)"}),v.forEach(te=>{te.style.transform="translate3d(0, 100%, 0)",te.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!s||([r,s].forEach(te=>{te.style.overflow="hidden",te.style.display="block",te.style.position="relative"}),d=[...Jo(r,"word"),...Jo(s,"word")],d.forEach(te=>{te.style.position="relative",te.style.bottom="0.1em"}),_=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=Jo(a,"word"),a.style.overflow="hidden"),m())})();const b=document.getElementById("home-featured"),M=Cr(document.getElementById("home-featured-title"),2),S=Cr(document.getElementById("home-featured-disclaimer"),2),P=Cr(document.getElementById("home-featured-cta"),1);let I=[],R=[],L=[],E=!0;const T=()=>{E=!1,M&&(M._time=0,M._animating=!1),S&&(S._time=0,S._animating=!1),P&&(P._time=0,P._animating=!1),i()||(R.forEach(te=>{te.style.transform="translate3d(0, 100%, 0)"}),I.forEach(te=>{te.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(M){if(M.style.overflow="hidden",I=By(M),S){const te=S.textContent.trim();S.textContent="";const Ee=document.createElement("div");Ee.className="line",Ee.textContent=te,Ee.style.transform="translate3d(0, 100%, 0)",Ee.style.willChange="transform";const we=document.createElement("div");we.style.position="relative",we.style.overflow="hidden",we.appendChild(Ee),S.appendChild(we),R=[Ee]}P&&(P.style.transform="translate3d(0, 150%, 0) rotate(10deg)",P.style.opacity="0",P.style.overflow="hidden"),L=Array.from(document.querySelectorAll(".project-item")).map((te,Ee)=>(te._time=0,te._animating=!1,te.style.opacity="0",te.style.transform="translate3d(0, 90px, 0)",te.style.willChange="transform, opacity",te.dataset.projectIndex=String(Ee),te)),T()}})();const H=Cr(document.getElementById("home-goal-title"),2);let k=[];H&&(H.style.overflow="hidden",k=Jo(H,"word"),k.forEach(te=>{te.style.transform="translate3d(0, 100%, 0)",te.style.opacity="0"}));let q=0,j=!1,W=0;const Y=te=>{if(!t||!e)return;if(!$n(e).isActive){g=!0;return}g&&(g=!1,m());const we=$n(t),Z=$n(o||a),ae=window.innerHeight*.1;if(t._time=ci(t._time+(t._animating?te:-te),0,2),a&&(a._time=ci(a._time+(a._animating?te:-te),0,2)),l&&(l._ratio=io(l._ratio+(l._animating?te:-te))),we.screenRatio>-1&&(t._animating=!0,i()?d.forEach(ce=>{ce.style.transform="translate3d(0, 0, 0)"}):d.forEach((ce,pe)=>{let be,Fe;pe<2?(be=Oe(t._time-Math.abs(2-pe)/10,.5,1.2,-_,0,Pt),Fe=Oe(t._time-pe/10,0,1,100,0,Pt)):(be=0,Fe=Oe(t._time-pe/10,0,1,-100,0,Pt)),ce.style.transform=`translate3d(${be}px, ${Fe}%, 0)`}),n)){const ce=we.showScreenOffset*-ae*.5;n.style.transform=`translate3d(0, ${ce}px, 0)`}if(Z.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const ce=Z.showScreenOffset*-ae*1.5;if(a&&(a.style.transform=`translate3d(0, ${ce}px, 0)`,i()?v.forEach(pe=>{pe.style.opacity="1",pe.style.transform="translate3d(0, 0, 0)"}):v.forEach((pe,be)=>{const Fe=Oe(a._time-be/100,0,1,.1,1,Rh),$e=Oe(a._time-be/100,0,1,100,0,Rh);pe.style.opacity=String(Fe),pe.style.transform=`translate3d(0, ${$e}%, 0)`})),l){const pe=Z.showScreenOffset*-ae*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${pe}px) translate3d(0, ${Oe(l._ratio,0,1,150,0,Pt)}%, 0) rotate(${Oe(l._ratio,0,1,10,0,Pt)}deg)`,l.style.opacity=String(Pt(l._ratio))):(l.style.transform=`translateY(${pe}px)`,l.style.opacity="1")}}if(c){const ce=$n(c),pe=io(Oe(ce.showScreenOffset,.05,.85,0,1,Pt));c.style.opacity=String(pe),c.style.transform=`translate3d(0, ${Oe(pe,0,1,80,0,Pt)}px, 0) scale(${Oe(pe,0,1,.96,1,Pt)})`}if(u){const ce=$n(u);W=io(Oe(ce.showScreenOffset,0,.7,0,1,Pt)),u.style.opacity=String(.4+W*.6),u.style.transform=`translate3d(0, ${Oe(W,0,1,60,0,Pt)}px, 0) scale(${Oe(W,0,1,.94,1,Pt)})`,j=W>.9,q=ci(q+(j?te:-te*2),0,1.4),f.forEach((pe,be)=>{const Fe=Oe(q-be/10,0,.6,0,1,Pt),$e=Oe(q-be/10,0,.6,0,180,Pt);pe.style.transform=`scale(${Fe}) rotate(${$e}deg)`,pe.style.display="inline-block"})}},G=te=>{if(!b||!M)return;if($n(b).isActive){E&&T();const we=$n(M),Z=$n(S),oe=$n(P);M._time=ci(M._time+(M._animating?te:-te),0,2),S&&(S._time=ci(S._time+(S._animating?te:-te),0,2)),P&&(P._time=ci(P._time+(P._animating?te:-te),0,1)),we.screenRatio>-1&&(M._animating=!0,i()?I.forEach(ae=>{ae.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):I.forEach((ae,ce)=>{const pe=Oe(M._time*1.5-ce/20,0,1,1,0,Pt),be=Oe(M._time*1.5-ce/20,0,1,10,0,Pt);ae.style.transform=`translate3d(0, ${pe}em, 0) rotate(${be}deg)`})),Z.screenRatio>-1&&S&&(S._animating=!0,i()?R.forEach(ae=>{ae.style.transform="translate3d(0, 0, 0)"}):R.forEach((ae,ce)=>{const pe=Oe(S._time-ce/20,0,1,100,0,Pt);ae.style.transform=`translate3d(0, ${pe}%, 0)`})),oe.screenRatio>-1&&P&&(i()?(P.style.transform="translate3d(0, 0, 0) rotate(0deg)",P.style.opacity="1"):(P._animating=!0,P.style.transform=`translate3d(0, ${Oe(P._time,0,1,150,0,Pt)}%, 0) rotate(${Oe(P._time,0,1,10,0,Pt)}deg)`,P.style.opacity=String(Pt(P._time))))}else E=!0;L.forEach((we,Z)=>{$n(we).screenRatio>-1&&(we._animating=!0),we._time=ci(we._time+(we._animating?te:-te),0,1.2);const ae=Z%2*.08,ce=Oe(we._time-ae,0,1,0,1,Pt);we.style.opacity=String(ce),we.style.transform=`translate3d(0, ${(1-ce)*90}px, 0)`})},ue=te=>{if(!H)return;$n(H).screenRatio>-1&&(H._animating=!0),H._time=ci(H._time+(H._animating?te:-te),0,2),k.forEach((we,Z)=>{const oe=Oe(H._time-Z/20,0,1,0,1,Pt),ae=Oe(H._time-Z/20,0,1,100,0,Pt);we.style.opacity=String(oe),we.style.transform=`translate3d(0, ${ae}%, 0)`})},_e=()=>{r&&(_=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",_e),{update(te){Y(te),G(te),ue(te)},destroy(){window.removeEventListener("resize",_e)}}}const ml=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new B(-.0112049,-.0141946,0),boxMax:new B(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new B(-.0180006,-.00963629,0),boxMax:new B(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],Hy=`
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
`,Vy=`
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
`,Gy=`
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
`,Wy=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function Xy(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function qy(){const i=Xy(),e="/zyrax-studio/",t=await Promise.all(ml.map(m=>jn(`${e}assets/models/lines/${m.fileName}.buf`))),n=new Ta,r=new vn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);let s;try{s=new Kc({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(m){return console.error("Lines WebGL unavailable",m),{update(){},resize(){},destroy(){}}}s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.autoClear=!0;const o=[],a=new B,l=new B,c=new Ds,u=new ct;for(let m=0;m<ml.length;m++){const p=ml[m],b=t[m],M=document.querySelector(p.sectionSelector);if(!M||!b)continue;const S=new zi,P=new zi;S.add(P),n.add(S);const I=new Nt({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:p.aoThreshold},u_color0:{value:new tt(p.color0)},u_color1:{value:new tt(p.color1)},u_radius:{value:.008}},vertexShader:Hy,fragmentShader:Vy,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),R=new Wt(b,I);R.frustumCulled=!1,R.renderOrder=200,P.add(R);const L=new Nt({uniforms:{u_color0:{value:new tt(p.color0)},u_color1:{value:new tt(p.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:Gy,fragmentShader:Wy,side:Sn,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),E=new Wt(new vr(2,2),L);E.frustumCulled=!1,E.renderOrder=200,P.add(E);const T=b.attributes.position.array,U=b.attributes.position.count,H=new Float32Array(U);for(let k=0;k<U;k++)H[k]=T[k*3+2];o.push({data:p,sectionEl:M,container:S,inner:P,mesh:R,mat:I,circle:E,circleMat:L,lineRatioArray:H,cpAttr:b.attributes.CP,cdAttr:b.attributes.Cd,count:U,offsetY:0,framePos:new B,frameQuat:new Mn,frameScale:new B(1,1,1)})}let f=1,d=1;const _=()=>{f=window.innerWidth||1,d=window.innerHeight||1;const m=Math.sqrt(f*f+d*d),p=d/m;u.set(f/d*p,p),r.fov=60,r.aspect=f/d,r.position.set(f/2,-d/2,d/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(f/2,-d/2,0),r.updateProjectionMatrix(),s.setSize(f,d,!1)};_(),window.addEventListener("resize",_);const v=m=>{var Fe;const{data:p,sectionEl:b,container:M,inner:S,mat:P,circle:I,circleMat:R,lineRatioArray:L,cpAttr:E,cdAttr:T,count:U}=m,k=$n(b).top+m.offsetY,q=d,j=p.scrollToRatioFactors;let W=io(-(k-j[0]*q)/(j[1]*q));W=My(W);const Y=.008*Oe(f,540,1920,2,1),G=f/u.x,ue=d/u.y;S.position.x=p.margin.x*G,S.position.y=p.margin.y*ue-k,S.scale.set(G,ue,1),m._showSmooth==null&&(m._showSmooth=W),m._showSmooth+=(W-m._showSmooth)*.18,P.uniforms.u_showRatio.value=m._showSmooth,P.uniforms.u_radius.value=Y;const _e=(Fe=b.dataset)==null?void 0:Fe.goalPhase,te=p.id==="goal"&&(_e==="black-tunnel"||_e==="white");M.position.copy(m.framePos),M.quaternion.copy(m.frameQuat),M.scale.copy(m.frameScale),M.updateMatrixWorld(!0),c.min.copy(p.boxMin),c.max.copy(p.boxMax),c.applyMatrix4(S.matrixWorld),M.visible=!te&&c.max.y>-d&&c.min.y<0&&W>.001;let Ee=0,we=0;for(let $e=0;$e<U;$e++)W>=L[$e]&&(Ee=$e,$e===U-1?we=0:we=(W-L[$e])/(L[$e+1]-L[$e]||1));const Z=Ee,oe=Math.min(Ee+1,U-1);a.fromArray(E.array,Ee*3),l.fromArray(E.array,oe*3),a.lerp(l,we);const ae=T.array;let ce=ae[Z]*(1-we)+ae[oe]*we;ce=.9+.1*ce;const pe=io((W-(p.aoThreshold-.02))/.04);I.position.copy(a),I.scale.set(Y,Y,1),R.uniforms.u_ao.value=Math.min(1,ce+1-pe);let be=L[Z]*(1-we)+L[oe]*we;be=1-Math.pow(1-ci(be,0,1),2),R.uniforms.u_mixRatio.value=be},g=()=>{for(const m of o)v(m);s.render(n,r)};return g(),{update:g,resize:_,setGoalOffset(m){const p=o.find(b=>b.data.id==="goal");p&&(p.offsetY=m||0)},setGoalFrame({scale:m=1,rotation:p=0,active:b=!1}={}){const M=o.find(T=>T.data.id==="goal");if(!M)return;if(!b){M.framePos.set(0,0,0),M.frameQuat.identity(),M.frameScale.set(1,1,1);return}const S=f*.5,P=-d*.5,I=new pt;I.makeTranslation(S,P,0);const R=new pt().makeRotationZ(-p),L=new pt().makeScale(m,m,1),E=new pt().makeTranslation(-S,-P,0);I.multiply(R).multiply(L).multiply(E),I.decompose(M.framePos,M.frameQuat,M.frameScale)},destroy(){window.removeEventListener("resize",_),s.dispose(),i.remove()}}}const Oh=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),Ud=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};Ud();window.addEventListener("resize",Ud);const Fr=new tp({duration:Oh?1.05:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!0,syncTouch:!1,wheelMultiplier:Oh?.9:.82,touchMultiplier:1.1});window.lenis=Fr;let Gs=0,Ws=0,ro=!1,Nd=0;window.addEventListener("wheel",()=>{Nd=performance.now(),ro=!0},{passive:!0});window.addEventListener("pointerdown",()=>{ro=!0},{passive:!0});const zh=document.getElementById("project-list");zh&&(zh.innerHTML=ym.map(i=>`
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
    </a>`).join(""));const Yy=document.getElementById("hero-canvas"),Zy=document.getElementById("home-hero-visual-container"),sr=document.getElementById("home-hero"),_l=document.getElementById("home-hero-title"),gl=document.getElementById("home-hero-visual-container"),Bh=document.getElementById("home-hero-scroll-container"),Fd=document.getElementById("home-goal"),$y=document.getElementById("goal-tunnel-canvas"),Ky=document.getElementById("home-goal-tunnel-title"),jy=document.getElementById("home-goal-tunnel-sticky"),Jy=zy(Fd,Ky,jy);let Ln=null;const Qy=ky();let Vr=null,kh=performance.now();Fc.ticker.add(i=>{var r;const e=performance.now(),t=Math.min(.05,(e-kh)/1e3);if(kh=e,Ln!=null&&Ln.getAutoScrollSpeed&&(Gs=Ln.getAutoScrollSpeed()),e-Nd>80&&Math.abs(Gs)>.01&&(ro=!1),Ws+=Math.abs(Gs)>0&&!ro?t:-1,Ws=Math.max(0,Math.min(1,Ws)),!ro&&Ws>0&&Math.abs(Gs)>.01){const s=window.innerHeight,o=Gs*s*t*Ws,a=(Fr.animatedScroll??Fr.scroll??window.scrollY)+o;Fr.scrollTo(a,{immediate:!0,force:!0})}Fr.raf(i*1e3),Qy.update(t),Vr==null||Vr.update(),(r=Ln==null?void 0:Ln.tickFrame)==null||r.call(Ln,t)});Fc.ticker.lagSmoothing(0);Fr.on("scroll",()=>{if(Jy.updateScroll(),Ln==null||Ln.updateScroll(),Vr==null||Vr.update(),!sr)return;const i=sr.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));_l&&(_l.style.transform=`translate3d(0, ${t*-12}vh, 0)`,_l.style.opacity=String(Math.max(0,1-t*1.2))),gl&&(gl.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,gl.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),Bh&&(Bh.style.opacity=String(Math.max(0,1-t*2)))});qy().then(i=>{Vr=i}).catch(i=>console.error("Scroll lines failed",i));Oy($y,Fd).then(i=>{Ln=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{gy(Yy,Zy).then(()=>sr==null?void 0:sr.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),sr==null||sr.classList.add("is-in")})});function Od(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,s)=>{const o=document.createElement("span");o.className=e,o.textContent=r,o.style.transitionDelay=`${s*35}ms`,i.appendChild(o),i.appendChild(document.createTextNode(" "))})}Od(document.getElementById("home-hero-title"));Od(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const eM=document.querySelectorAll(".home-hero-scroll-container-cross");eM.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const zd=document.querySelector("[data-menu]");var Hh;(Hh=document.querySelector("[data-menu-open]"))==null||Hh.addEventListener("click",()=>{zd.hidden=!1,document.body.style.overflow="hidden"});document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",()=>{zd.hidden=!0,document.body.style.overflow=""})});var Vh;(Vh=document.querySelector("[data-reel]"))==null||Vh.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var Gh;(Gh=document.querySelector("[data-sound]"))==null||Gh.addEventListener("click",i=>{i.currentTarget.classList.toggle("is-on")});var Wh;(Wh=document.querySelector("#end-bottom"))==null||Wh.addEventListener("click",i=>{i.preventDefault(),Fr.scrollTo("#footer-section")});
