var Pm=Object.defineProperty;var Lm=(i,e,t)=>e in i?Pm(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ve=(i,e,t)=>Lm(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var kh="1.3.27";function Fd(i,e,t){return Math.max(i,Math.min(e,t))}function Dm(i,e,t){return(1-t)*i+t*e}function Im(i,e,t,n){return Dm(i,e,1-Math.exp(-t*n))}function Um(i,e){return(i%e+e)%e}var Fm=class{constructor(){Ve(this,"isRunning",!1);Ve(this,"value",0);Ve(this,"from",0);Ve(this,"to",0);Ve(this,"currentTime",0);Ve(this,"lerp");Ve(this,"duration");Ve(this,"easing");Ve(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=Fd(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Im(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function Nm(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Om=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Ve(this,"width",0);Ve(this,"height",0);Ve(this,"scrollHeight",0);Ve(this,"scrollWidth",0);Ve(this,"debouncedResize");Ve(this,"wrapperResizeObserver");Ve(this,"contentResizeObserver");Ve(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ve(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ve(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=Nm(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Nd=class{constructor(){Ve(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,o=t.length;r<o;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const zm=100/6,Mr={passive:!1};function Hh(i,e){return i===1?zm:i===2?e:1}var Bm=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Ve(this,"touchStart",{x:0,y:0});Ve(this,"lastDelta",{x:0,y:0});Ve(this,"window",{width:0,height:0});Ve(this,"emitter",new Nd);Ve(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ve(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ve(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ve(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=Hh(n,this.window.width),o=Hh(n,this.window.height);e*=r,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Ve(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Mr),this.element.addEventListener("touchstart",this.onTouchStart,Mr),this.element.addEventListener("touchmove",this.onTouchMove,Mr),this.element.addEventListener("touchend",this.onTouchEnd,Mr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Mr),this.element.removeEventListener("touchstart",this.onTouchStart,Mr),this.element.removeEventListener("touchmove",this.onTouchMove,Mr),this.element.removeEventListener("touchend",this.onTouchEnd,Mr)}};const Vh=i=>Math.min(1,1.001-2**(-10*i));var km=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:b=!0,autoRaf:S=!1,anchors:M=!1,autoToggle:L=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:P=E,stopInertiaOnNavigate:w=!1,respectReducedMotion:y=!0}={}){Ve(this,"_isScrolling",!1);Ve(this,"_isStopped",!1);Ve(this,"_isLocked",!1);Ve(this,"_preventNextNativeScrollEvent",!1);Ve(this,"_resetVelocityTimeout",null);Ve(this,"_rafId",null);Ve(this,"_isDraggingSelection",!1);Ve(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ve(this,"isTouching");Ve(this,"isIos");Ve(this,"time",0);Ve(this,"userData",{});Ve(this,"lastVelocity",0);Ve(this,"velocity",0);Ve(this,"direction",0);Ve(this,"options");Ve(this,"targetScroll");Ve(this,"animatedScroll");Ve(this,"animate",new Fm);Ve(this,"emitter",new Nd);Ve(this,"dimensions");Ve(this,"virtualScroll");Ve(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ve(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ve(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ve(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ve(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ve(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,b,S;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent-touch"))||o&&((S=v.hasAttribute)==null?void 0:S.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ve(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ve(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=kh,window.lenis||(window.lenis={}),window.lenis.version=kh,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=Vh:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:b,autoRaf:S,anchors:M,autoToggle:L,allowNestedScroll:C,naiveDimensions:P,stopInertiaOnNavigate:w,respectReducedMotion:y},this.dimensions=new Om(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Bm(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],o=n[n.length-1],s=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:s=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=i,m=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let v=null;if(typeof f=="string"?(v=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),v||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(v=f),v){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?M.left:M.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),b=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof f=="number"){if(f+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=f-this.animatedScroll;v>this.limit/2?f-=this.limit:v<-this.limit/2&&(f+=this.limit)}}else f=Fd(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof s=="number"&&typeof a!="function"?a=Vh:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,f,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let o,s,a,l,c,u,d,f,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(i);if(r.computedStyle=C,o=["auto","overlay","scroll"].includes(C.overflowX),s=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=s,!(o||s))return!1;d=i.scrollWidth,f=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=d>m,l=f>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,o=r.hasOverflowX,s=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,b,S,M,L;if(g==="horizontal")_=Math.round(i.scrollLeft),p=d-m,b=e,S=o,M=a,L=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=f-v,b=t,S=s,M=l,L=u;else return!1;return!L&&(_>=p||_<=0)?!0:(b>0?_<p:_>0)&&S&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Um(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function or(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Od(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Js={duration:.5,overwrite:!1,delay:0},Wu,pn,Ht,_i=1e8,Dt=1/_i,Gc=Math.PI*2,Hm=Gc/4,Vm=0,zd=Math.sqrt,Gm=Math.cos,Wm=Math.sin,fn=function(e){return typeof e=="string"},$t=function(e){return typeof e=="function"},pr=function(e){return typeof e=="number"},Xu=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Wn=function(e){return e!==!1},qu=function(){return typeof window<"u"},Sa=function(e){return $t(e)||fn(e)},Bd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,Xm=/random\([^)]+\)/g,qm=/,\s*/g,Gh=/(?:-?\.?\d|\.)+/gi,kd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ko=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hd=/[+-]=-?[.\d]+/,Ym=/[^,'"\[\]\s]+/gi,$m=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,Ni,Wc,Yu,si={},ul={},Vd,Gd=function(e){return(ul=as(e,si))&&Zn},$u=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qs=function(e,t){return!t&&console.warn(e)},Wd=function(e,t){return e&&(si[e]=t)&&ul&&(ul[e]=t)||si},ea=function(){return 0},Zm={suppressEvents:!0,isStart:!0,kill:!1},Qa={suppressEvents:!0,kill:!1},Km={suppressEvents:!0},Zu={},Or=[],Xc={},Xd,Qn={},Yl={},Wh=30,el=[],Ku="",ju=function(e){var t=e[0],n,r;if(Wi(t)||$t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=el.length;r--&&!el[r].targetTest(t););n=el[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new dp(e[r],n)))||e.splice(r,1);return e},vo=function(e){return e._gsap||ju(gi(e))[0]._gsap},qd=function(e,t,n){return(n=e[t])&&$t(n)?e[t]():Xu(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},es=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},jm=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},hl=function(){var e=Or.length,t=Or.slice(0),n,r;for(Xc={},Or.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ju=function(e){return!!(e._initted||e._startAt||e.add)},Yd=function(e,t,n,r){Or.length&&!pn&&hl(),e.render(t,n,!!(pn&&t<0&&Ju(e))),Or.length&&!pn&&hl()},$d=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ym).length<2?t:fn(e)?e.trim():e},Zd=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Jm=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},as=function(e,t){for(var n in t)e[n]=t[n];return e},Xh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},fl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Gs=function(e){var t=e.parent||Gt,n=e.keyframes?Jm(An(e.keyframes)):ai;if(Wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Qm=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Kd=function(e,t,n,r,o){var s=e[r],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},Tl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,s=t._next;o?o._next=s:e[n]===t&&(e[n]=s),s?s._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},Br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},e0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qc=function(e,t,n,r){return e._startAt&&(pn?e._startAt.revert(Qa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},t0=function i(e){return!e||e._ts&&i(e.parent)},qh=function(e){return e._repeat?ls(e._tTime,e=e.duration()+e._rDelay)*e:0},ls=function(e,t){var n=Math.floor(e=Vt(e/t));return e&&n===e?n-1:n},dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},El=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dt)||0))},Al=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),El(e),n._dirty||xo(n,e)),e},jd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=dl(e.rawTime(),t),(!t._dur||ca(0,t.totalDuration(),n)-t._tTime>Dt)&&t.render(n,!0)),xo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Dt}},zi=function(e,t,n,r){return t.parent&&Br(t),t._start=Vt((pr(n)?n:n||e!==Gt?di(e,n,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Kd(e,t,"_first","_last",e._sort?"_start":0),Yc(t)||(e._recent=t),r||jd(e,t),e._ts<0&&Al(e,e._tTime),e},Jd=function(e,t){return(si.ScrollTrigger||$u("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},Qd=function(e,t,n,r,o){if(eh(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xd!==ei.frame)return Or.push(e),e._lazy=[o,r],1},n0=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Yc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},i0=function(e,t,n,r){var o=e.ratio,s=t<0||!t&&(!e._start&&n0(e)&&!(!e._initted&&Yc(e))||(e._ts<0||e._dp._ts<0)&&!Yc(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=ca(0,e._tDur,t),u=ls(l,a),e._yoyo&&u&1&&(s=1-s),u!==ls(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||pn||r||e._zTime===Dt||!t&&e._zTime){if(!e._initted&&Qd(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?Dt:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&qc(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Br(e,1),!n&&!pn&&(ni(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},r0=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},cs=function(e,t,n,r){var o=e._repeat,s=Vt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Vt(s*(o+1)+e._rDelay*o):s,a>0&&!r&&Al(e,e._tTime=e._tDur*a),e.parent&&El(e),n||xo(e.parent,e),e},Yh=function(e){return e instanceof Vn?xo(e):cs(e,e._dur)},o0={_start:0,endTime:ea,totalDuration:ea},di=function i(e,t,n){var r=e.labels,o=e._recent||o0,s=e.duration()>=_i?o.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},Ws=function(e,t,n){var r=pr(t[1]),o=(r?2:1)+(e<2?0:1),s=t[o],a,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;s.immediateRender=Wn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new Qt(t[0],s,t[o+1])},Gr=function(e,t){return e||e===0?t(e):t},ca=function(e,t,n){return n<e?e:n>t?t:n},Tn=function(e,t){return!fn(e)||!(t=$m.exec(e))?"":t[1]},s0=function(e,t,n){return Gr(n,function(r){return ca(e,t,r)})},$c=[].slice,ep=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Ni},a0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return fn(r)&&!t||ep(r,1)?(o=n).push.apply(o,gi(r)):n.push(r)})||n},gi=function(e,t,n){return Ht&&!t&&Ht.selector?Ht.selector(e):fn(e)&&!n&&(Wc||!us())?$c.call((t||Yu).querySelectorAll(e),0):An(e)?a0(e,n):ep(e)?$c.call(e,0):e?[e]:[]},Zc=function(e){return e=gi(e)[0]||Qs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gi(t,n.querySelectorAll?n:n===e?Qs("Invalid scope")||Yu.createElement("div"):e)}},tp=function(e){return e.sort(function(){return .5-Math.random()})},np=function(e){if($t(e))return e;var t=Wi(e)?e:{each:e},n=yo(t.ease),r=t.from||0,o=parseFloat(t.base)||0,s={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return fn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,m,v){var g=(v||t).length,_=s[g],p,b,S,M,L,C,E,P,w;if(!_){if(w=t.grid==="auto"?0:(t.grid||[1,_i])[1],!w){for(E=-_i;E<(E=v[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(_=s[g]=[],p=l?Math.min(w,g)*u-.5:r%w,b=w===_i?0:l?g*d/w-.5:r/w|0,E=0,P=_i,C=0;C<g;C++)S=C%w-p,M=b-(C/w|0),_[C]=L=c?Math.abs(c==="y"?M:S):zd(S*S+M*M),L>E&&(E=L),L<P&&(P=L);r==="random"&&tp(_),_.max=E-P,_.min=P,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),_.b=g<0?o-g:o,_.u=Tn(t.amount||t.each)||0,n=n&&g<0?y0(n):n}return g=(_[f]-_.min)/_.max||0,Vt(_.b+(n?n(g):g)*_.v)+_.u}},Kc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Vt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(pr(n)?0:Tn(n))}},ip=function(e,t){var n=An(e),r,o;return!n&&Wi(e)&&(r=n=e.radius||_i,e.values?(e=gi(e.values),(o=!pr(e[0]))&&(r*=r)):e=Kc(e.increment)),Gr(t,n?$t(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=_i,u=0,d=e.length,f,m;d--;)o?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:s,o||u===s||pr(s)?u:u+Tn(s)}:Kc(e))},rp=function(e,t,n,r){return Gr(An(e)?!t:n===!0?!!(n=0):!r,function(){return An(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},l0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,s){return s(o)},r)}},c0=function(e,t){return function(n){return e(parseFloat(n))+(t||Tn(n))}},u0=function(e,t,n){return sp(e,t,0,1,n)},op=function(e,t,n){return Gr(n,function(r){return e[~~t(r)]})},h0=function i(e,t,n){var r=t-e;return An(e)?op(e,i(0,e.length),t):Gr(n,function(o){return(r+(o-e)%r)%r+e})},f0=function i(e,t,n){var r=t-e,o=r*2;return An(e)?op(e,i(0,e.length-1),t):Gr(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},ta=function(e){return e.replace(Xm,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(qm);return rp(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},sp=function(e,t,n,r,o){var s=t-e,a=r-n;return Gr(o,function(l){return n+((l-e)/s*a||0)})},d0=function i(e,t,n,r){var o=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!o){var s=fn(e),a={},l,c,u,d,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,o=function(v){v*=d;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else r||(e=as(An(e)?[]:{},e));if(!u){for(l in t)Qu.call(a,e,l,"get",t[l]);o=function(v){return ih(v,a)||(s?e.p:e)}}}return Gr(n,o)},$h=function(e,t,n){var r=e.labels,o=_i,s,a,l;for(s in r)a=r[s]-t,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},ni=function(e,t,n){var r=e.vars,o=r[t],s=Ht,a=e._ctx,l,c,u;if(o)return l=r[t+"Params"],c=r.callbackScope||e,n&&Or.length&&hl(),a&&(Ht=a),u=l?o.apply(c,l):o.call(c),Ht=s,u},Bs=function(e){return Br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&ni(e,"onInterrupt"),e},jo,ap=[],lp=function(e){if(e)if(e=!e.name&&e.default||e,qu()||e.headless){var t=e.name,n=$t(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:ea,render:ih,add:Qu,kill:P0,modifier:C0,rawVars:0},s={targetTest:0,get:0,getSetter:nh,aliases:{},register:0};if(us(),e!==r){if(Qn[t])return;ai(r,ai(fl(e,o),s)),as(r.prototype,as(o,fl(e,s))),Qn[r.prop=t]=r,e.targetTest&&(el.push(r),Zu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wd(t,r),e.register&&e.register(Zn,r,qn)}else ap.push(e)},Lt=255,ks={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},$l=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},cp=function(e,t,n){var r=e?pr(e)?[e>>16,e>>8&Lt,e&Lt]:0:ks.black,o,s,a,l,c,u,d,f,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ks[e])r=ks[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Lt,r&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Gh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=$l(l+1/3,o,s),r[1]=$l(l,o,s),r[2]=$l(l-1/3,o,s);else if(~e.indexOf("="))return r=e.match(kd),n&&r.length<4&&(r[3]=1),r}else r=e.match(Gh)||ks.transparent;r=r.map(Number)}return t&&!v&&(o=r[0]/Lt,s=r[1]/Lt,a=r[2]/Lt,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===o?(s-a)/m+(s<a?6:0):d===s?(a-o)/m+2:(o-s)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},up=function(e){var t=[],n=[],r=-1;return e.split(zr).forEach(function(o){var s=o.match(Ko)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},Zh=function(e,t,n){var r="",o=(e+r).match(zr),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=cp(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=up(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(zr,"1").split(Ko),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!c)for(c=e.split(zr),d=c.length-1;a<d;a++)r+=c[a]+o[a];return r+c[d]},zr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ks)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),p0=/hsl[a]?\(/,hp=function(e){var t=e.join(" "),n;if(zr.lastIndex=0,zr.test(t))return n=p0.test(t),e[1]=Zh(e[1],n),e[0]=Zh(e[0],n,up(e[1])),!0},na,ei=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,o=1e3/240,s=o,a=[],l,c,u,d,f,m,v=function g(_){var p=i()-r,b=_===!0,S,M,L,C;if((p>e||p<0)&&(n+=p-t),r+=p,L=r-n,S=L-s,(S>0||b)&&(C=++d.frame,f=L-d.time*1e3,d.time=L=L/1e3,s+=S+(S>=o?4:o-S),M=1),b||(l=c(g)),M)for(m=0;m<a.length;m++)a[m](L,f,C,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Vd&&(!Wc&&qu()&&(Ni=Wc=window,Yu=Ni.document||{},si.gsap=Zn,(Ni.gsapVersions||(Ni.gsapVersions=[])).push(Zn.version),Gd(ul||Ni.GreenSockGlobals||!Ni.gsap&&Ni||{}),ap.forEach(lp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},na=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),na=0,c=ea},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,b){var S=p?function(M,L,C,E){_(M,L,C,E),d.remove(S)}:_;return d.remove(_),a[b?"unshift":"push"](S),us(),S},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},d})(),us=function(){return!na&&ei.wake()},xt={},m0=/^[\d.\-M][\d.\-,\s]/,_0=/["']/g,g0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,a,l,c;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(_0,"").trim():+c,r=l.substr(a+1).trim();return t},v0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},x0=function(e){var t=(e+"").split("("),n=xt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[g0(t[1])]:v0(e).split(",").map($d)):xt._CE&&m0.test(e)?xt._CE("",e):n},y0=function(e){return function(t){return 1-e(1-t)}},yo=function(e,t){return e&&($t(e)?e:xt[e]||x0(e))||t},Ao=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},s;return Xn(e,function(a){xt[a]=si[a]=o,xt[s=a.toLowerCase()]=n;for(var l in o)xt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=xt[a+"."+l]=o[l]}),o},fp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zl=function i(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),s=o/Gc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Wm((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:fp(a);return o=Gc/o,l.config=function(c,u){return i(e,c,u)},l},Kl=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:fp(n);return r.config=function(o){return i(e,o)},r};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ao(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});xt.Linear.easeNone=xt.none=xt.Linear.easeIn;Ao("Elastic",Zl("in"),Zl("out"),Zl());(function(i,e){var t=1/e,n=2*t,r=2.5*t,o=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Ao("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);Ao("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Ao("Circ",function(i){return-(zd(1-i*i)-1)});Ao("Sine",function(i){return i===1?1:-Gm(i*Hm)+1});Ao("Back",Kl("in"),Kl("out"),Kl());xt.SteppedEase=xt.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,s=1-Dt;return function(a){return((r*ca(0,s,a)|0)+o)*n}}};Js.ease=xt["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Ku+=i+","+i+"Params,"});var dp=function(e,t){this.id=Vm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qd,this.set=t?t.getSetter:nh},ia=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,cs(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),na||ei.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,cs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(us(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Al(this,n),!o._dp||o.parent||jd(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Dt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yd(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+qh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+qh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?ls(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Dt?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Dt?0:this._rts,this.totalTime(ca(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),El(this),e0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(us(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dt&&(this._tTime-=Dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Vt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&zi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Km);var r=pn;return pn=n,Ju(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Yh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(di(this,n),Wn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Wn(r)),this._dur||(this._zTime=-Dt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Dt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-Dt)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,o=r._prom;return new Promise(function(s){var a=$t(n)?n:Zd,l=function(){var u=r.then;r.then=null,o&&o(),$t(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Bs(this)},i})();ai(ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Dt,_prom:0,_ps:!1,_rts:1});var Vn=(function(i){Od(e,i);function e(n,r){var o;return n===void 0&&(n={}),o=i.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=Wn(n.sortChildren),Gt&&zi(n.parent||Gt,or(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&Jd(or(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,s){return Ws(0,arguments,this),this},t.from=function(r,o,s){return Ws(1,arguments,this),this},t.fromTo=function(r,o,s,a){return Ws(2,arguments,this),this},t.set=function(r,o,s){return o.duration=0,o.parent=this,Gs(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Qt(r,o,di(this,s),1),this},t.call=function(r,o,s){return zi(this,Qt.delayedCall(0,r,o),s)},t.staggerTo=function(r,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Qt(r,s,di(this,l)),this},t.staggerFrom=function(r,o,s,a,l,c,u){return s.runBackwards=1,Gs(s).immediateRender=Wn(s.immediateRender),this.staggerTo(r,o,s,a,l,c,u)},t.staggerFromTo=function(r,o,s,a,l,c,u,d){return a.startAt=s,Gs(a).immediateRender=Wn(a.immediateRender),this.staggerTo(r,o,a,l,c,u,d)},t.render=function(r,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Vt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,m,v,g,_,p,b,S,M,L,C,E;if(this!==Gt&&u>l&&r>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,M=this._start,S=this._ts,p=!S,d&&(c||(a=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,o,s);if(f=Vt(u%_),u===l?(g=this._repeat,f=c):(L=Vt(u/_),g=~~L,g&&g===L&&(f=c,g--),f>c&&(f=c)),L=ls(this._tTime,_),!a&&this._tTime&&L!==g&&this._tTime-L*_-this._dur<=0&&(L=g),C&&g&1&&(f=c-f,E=1),g!==L&&!this._lock){var P=C&&L&1,w=P===(C&&g&1);if(g<L&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Vt(g*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,L=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=r0(this,Vt(a),Vt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!o&&!L&&(ni(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,o,s),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=-Dt);break}}m=v}else{m=this._last;for(var y=r<0?r:f;m;){if(v=m._prev,(m._act||y<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(y-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(y-m._start)*m._ts,o,s||pn&&Ju(m)),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=y?-Dt:Dt);break}}m=v}}if(b&&!o&&(this.pause(),b.render(f>=a?0:-Dt)._zTime=f>=a?1:-1,this._ts))return this._start=M,El(this),this.render(r,o,s);this._onUpdate&&!o&&ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Br(this,1),!o&&!(r<0&&!a)&&(u||a||!l)&&(ni(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var s=this;if(pr(o)||(o=di(this,o,r)),!(r instanceof ia)){if(An(r))return r.forEach(function(a){return s.add(a,o)}),this;if(fn(r))return this.addLabel(r,o);if($t(r))r=Qt.delayedCall(0,r);else return this}return this!==r?zi(this,r,o):this},t.getChildren=function(r,o,s,a){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-_i);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?o&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},t.remove=function(r){return fn(r)?this.removeLabel(r):$t(r)?this.killTweensOf(r):(r.parent===this&&Tl(this,r),r===this._recent&&(this._recent=this._last),xo(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(ei.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=di(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,s){var a=Qt.delayedCall(0,o||ea,s);return a.data="isPause",this._hasPause=1,zi(this,a,di(this,r))},t.removePause=function(r){var o=this._first;for(r=di(this,r);o;)o._start===r&&o.data==="isPause"&&Br(o),o=o._next},t.killTweensOf=function(r,o,s){for(var a=this.getTweensOf(r,s),l=a.length;l--;)Ur!==a[l]&&a[l].kill(r,o);return this},t.getTweensOf=function(r,o){for(var s=[],a=gi(r),l=this._first,c=pr(o),u;l;)l instanceof Qt?jm(l._targets,a)&&(c?(!Ur||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,o){o=o||{};var s=this,a=di(s,r),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,v=Qt.to(s,ai({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Dt,onStart:function(){if(s.pause(),!m){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==_&&cs(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},o));return f?v.render(0):v},t.tweenFromTo=function(r,o,s){return this.tweenTo(o,ai({startAt:{time:di(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),$h(this,di(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),$h(this,di(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Dt)},t.shiftChildren=function(r,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(r=Vt(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=r);return xo(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),xo(this)},t.totalDuration=function(r){var o=0,s=this,a=s._last,l=_i,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,zi(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=Vt(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;cs(s,s===Gt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(Gt._ts&&(Yd(Gt,dl(r,Gt)),Xd=ei.frame),ei.frame>=Wh){Wh+=ri.autoSleep||120;var o=Gt._first;if((!o||!o._ts)&&ri.autoSleep&&ei._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||ei.sleep()}}},e})(ia);ai(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var S0=function(e,t,n,r,o,s,a){var l=new qn(this._pt,e,t,0,1,xp,null,o),c=0,u=0,d,f,m,v,g,_,p,b;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=ta(r)),s&&(b=[n,r],s(b,e,t),n=b[0],r=b[1]),f=n.match(ql)||[];d=ql.exec(r);)v=d[0],g=r.substring(c,d.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?es(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=ql.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Hd.test(r)||p)&&(l.e=0),this._pt=l,l},Qu=function(e,t,n,r,o,s,a,l,c,u){$t(r)&&(r=r(o||0,e,s));var d=e[t],f=n!=="get"?n:$t(d)?c?e[t.indexOf("set")||!$t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=$t(d)?c?E0:gp:th,v;if(fn(r)&&(~r.indexOf("random(")&&(r=ta(r)),r.charAt(1)==="="&&(v=es(f,r)+(Tn(f)||0),(v||v===0)&&(r=v))),!u||f!==r||jc)return!isNaN(f*r)&&r!==""?(v=new qn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?R0:vp,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&$u(t,r),S0.call(this,e,t,f,r,m,l||ri.stringFilter,c))},M0=function(e,t,n,r,o){if($t(e)&&(e=Xs(e,o,t,n,r)),!Wi(e)||e.style&&e.nodeType||An(e)||Bd(e))return fn(e)?Xs(e,o,t,n,r):e;var s={},a;for(a in e)s[a]=Xs(e[a],o,t,n,r);return s},pp=function(e,t,n,r,o,s){var a,l,c,u;if(Qn[e]&&(a=new Qn[e]).init(o,a.rawVars?t[e]:M0(t[e],r,o,s,n),n,r,s)!==!1&&(n._pt=l=new qn(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==jo))for(c=n._ptLookup[n._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ur,jc,eh=function i(e,t,n){var r=e.vars,o=r.ease,s=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:_,S=e._overwrite==="auto"&&!Wu,M=e.timeline,L=r.easeReverse||d,C,E,P,w,y,R,N,O,V,H,G,Y,z;if(M&&(!f||!o)&&(o="none"),e._ease=yo(o,Js.ease),e._rEase=L&&(yo(L)||e._ease),e._from=!M&&!!r.runBackwards,e._from&&(e.ratio=1),!M||f&&!r.stagger){if(O=_[0]?vo(_[0]).harness:0,Y=O&&r[O.prop],C=fl(r,Zu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?Qa:Zm),g._lazy=0),s){if(Br(e._startAt=Qt.set(_,ai({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!a&&!m)&&e._startAt.revert(Qa),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),P=ai({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Wn(l),immediateRender:a,stagger:0,parent:p},C),Y&&(P[O.prop]=Y),Br(e._startAt=Qt.set(_,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert(Qa):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Dt,Dt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&Wn(l)||l&&!v,E=0;E<_.length;E++){if(y=_[E],N=y._gsap||ju(_)[E]._gsap,e._ptLookup[E]=H={},Xc[N.id]&&Or.length&&hl(),G=b===_?E:b.indexOf(y),O&&(V=new O).init(y,Y||C,e,G,b)!==!1&&(e._pt=w=new qn(e._pt,y,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(se){H[se]=w}),V.priority&&(R=1)),!O||Y)for(P in C)Qn[P]&&(V=pp(P,C,e,G,y,b))?V.priority&&(R=1):H[P]=w=Qu.call(e,y,P,"get",C[P],G,b,0,r.stringFilter);e._op&&e._op[E]&&e.kill(y,e._op[E]),S&&e._pt&&(Ur=e,Gt.killTweensOf(y,H,e.globalTime(t)),z=!e.parent,Ur=0),e._pt&&l&&(Xc[N.id]=1)}R&&yp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,f&&t<=0&&M.render(_i,!0,!0)},w0=function(e,t,n,r,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return jc=1,e.vars[t]="+=0",eh(e,a),jc=0,l?Qs(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=Kt(n)+Tn(d.e)),d.b&&(d.b=u.s+Tn(d.b))},b0=function(e,t){var n=e[0]?vo(e[0]).harness:0,r=n&&n.aliases,o,s,a,l;if(!r)return t;o=as({},t);for(s in r)if(s in o)for(l=r[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},T0=function(e,t,n,r){var o=t.ease||r||"power1.inOut",s,a;if(An(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},Xs=function(e,t,n,r,o){return $t(e)?e.call(t,n,r,o):fn(e)&&~e.indexOf("random(")?ta(e):e},mp=Ku+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",_p={};Xn(mp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return _p[i]=1});var Qt=(function(i){Od(e,i);function e(n,r,o,s){var a;typeof r=="number"&&(o.duration=r,r=o,o=null),a=i.call(this,s?r:Gs(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||Gt,b=(An(n)||Bd(n)?pr(n[0]):"length"in r)?[n]:gi(n),S,M,L,C,E,P,w,y;if(a._targets=b.length?ju(b):Qs("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||f||Sa(c)||Sa(u)){r=a.vars;var R=r.easeReverse||r.yoyoEase;if(S=a.timeline=new Vn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),S.kill(),S.parent=S._dp=or(a),S._start=0,f||Sa(c)||Sa(u)){if(C=b.length,w=f&&np(f),Wi(f))for(E in f)~mp.indexOf(E)&&(y||(y={}),y[E]=f[E]);for(M=0;M<C;M++)L=fl(r,_p),L.stagger=0,R&&(L.easeReverse=R),y&&as(L,y),P=b[M],L.duration=+Xs(c,or(a),M,P,b),L.delay=(+Xs(u,or(a),M,P,b)||0)-a._delay,!f&&C===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),S.to(P,L,w?w(M,P,b):0),S._ease=xt.none;S.duration()?c=u=0:a.timeline=0}else if(v){Gs(ai(S.vars.defaults,{ease:"none"})),S._ease=yo(v.ease||r.ease||"none");var N=0,O,V,H;if(An(v))v.forEach(function(G){return S.to(b,G,">")}),S.duration();else{L={};for(E in v)E==="ease"||E==="easeEach"||T0(E,v[E],L,v.easeEach);for(E in L)for(O=L[E].sort(function(G,Y){return G.t-Y.t}),N=0,M=0;M<O.length;M++)V=O[M],H={ease:V.e,duration:(V.t-(M?O[M-1].t:0))/100*c},H[E]=V.v,S.to(b,H,N),N+=H.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!Wu&&(Ur=or(a),Gt.killTweensOf(b),Ur=0),zi(p,or(a),o),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===Vt(p._time)&&Wn(d)&&t0(or(a))&&p.data!=="nested")&&(a._tTime=-Dt,a.render(Math.max(0,-u)||0)),_&&Jd(or(a),_),a}var t=e.prototype;return t.render=function(r,o,s){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Dt&&!u?l:r<Dt?0:r,f,m,v,g,_,p,b,S;if(!c)i0(this,r,o,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,o,s);if(f=Vt(d%g),d===l?(v=this._repeat,f=c):(_=Vt(d/g),v=~~_,v&&v===_?(f=c,v--):f>c&&(f=c)),p=this._yoyo&&v&1,p&&(f=c-f),_=ls(this._tTime,g),f===a&&!s&&this._initted&&v===_)return this._tTime=d,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(Vt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(Qd(this,u?r:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,o,s)}if(this._rEase){var M=f<a;if(M!==this._inv){var L=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(M?-1:1)/L:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!o&&!_&&(ni(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&qc(this,r,o,s),ni(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!o&&this.parent&&ni(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&qc(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Br(this,1),!o&&!(u&&!a)&&(d||a||p)&&(ni(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,s,a,l){na||ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||eh(this,c),u=this._ease(c/this._dur),w0(this,r,o,s,a,u,c,l)?this.resetTo(r,o,s,a,1):(Al(this,0),this.parent||Kd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Bs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,Ur&&Ur.vars.overwrite!==!0)._first||Bs(this),this.parent&&s!==this.timeline.totalDuration()&&cs(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=r?gi(r):a,c=this._ptLookup,u=this._pt,d,f,m,v,g,_,p;if((!o||o==="all")&&Qm(a,l))return o==="all"&&(this._pt=0),Bs(this);for(d=this._op=this._op||[],o!=="all"&&(fn(o)&&(g={},Xn(o,function(b){return g[b]=1}),o=g),o=b0(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,v=f,m={}):(m=d[p]=d[p]||{},v=o);for(g in v)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Tl(this,_,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&Bs(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return Ws(1,arguments)},e.delayedCall=function(r,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,o,s){return Ws(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return Gt.killTweensOf(r,o,s)},e})(ia);ai(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(i){Qt[i]=function(){var e=new Vn,t=$c.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var th=function(e,t,n){return e[t]=n},gp=function(e,t,n){return e[t](n)},E0=function(e,t,n,r){return e[t](r.fp,n)},A0=function(e,t,n){return e.setAttribute(t,n)},nh=function(e,t){return $t(e[t])?gp:Xu(e[t])&&e.setAttribute?A0:th},vp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},R0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},ih=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},C0=function(e,t,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,t,n),o=s},P0=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Tl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},L0=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},yp=function(e){for(var t=e._pt,n,r,o,s;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=o},qn=(function(){function i(t,n,r,o,s,a,l,c,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=a||vp,this.d=l||this,this.set=c||th,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=L0,this.m=n,this.mt=o,this.tween=r},i})();Xn(Ku+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Zu[i]=1});si.TweenMax=si.TweenLite=Qt;si.TimelineLite=si.TimelineMax=Vn;Gt=new Vn({sortChildren:!1,defaults:Js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=hp;var So=[],tl={},D0=[],Kh=0,I0=0,jl=function(e){return(tl[e]||D0).map(function(t){return t()})},Jc=function(){var e=Date.now(),t=[];e-Kh>2&&(jl("matchMediaInit"),So.forEach(function(n){var r=n.queries,o=n.conditions,s,a,l,c;for(a in r)s=Ni.matchMedia(r[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),jl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Kh=e,jl("matchMedia"))},Sp=(function(){function i(t,n){this.selector=n&&Zc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=I0++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,o){$t(n)&&(o=r,r=n,n=$t);var s=this,a=function(){var c=Ht,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=Zc(o)),Ht=s,d=r.apply(s,arguments),$t(d)&&s._r.push(d),Ht=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===$t?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var r=Ht;Ht=null,n(this),Ht=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Qt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=o.data.length;l--;)c=o.data[l],c instanceof Vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=So.length;s--;)So[s].id===this.id&&So.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),U0=(function(){function i(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=i.prototype;return e.add=function(n,r,o){Wi(n)||(n={matches:n});var s=new Sp(0,o||this.scope),a=s.conditions={},l,c,u;Ht&&!s.selector&&(s.selector=Ht.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=Ni.matchMedia(n[c]),l&&(So.indexOf(s)<0&&So.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Jc):l.addEventListener("change",Jc)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),pl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return lp(r)})},timeline:function(e){return new Vn(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,r){fn(e)&&(e=gi(e)[0]);var o=vo(e||{}).get,s=n?Zd:$d;return n==="native"&&(n=""),e&&(t?s((Qn[t]&&Qn[t].get||o)(e,t,n,r)):function(a,l,c){return s((Qn[a]&&Qn[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=gi(e),e.length>1){var r=e.map(function(u){return Zn.quickSetter(u,t,n)}),o=r.length;return function(u){for(var d=o;d--;)r[d](u)}}e=e[0]||{};var s=Qn[t],a=vo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;jo._pt=0,d.init(e,n?u+n:u,jo,0,[e]),d.render(1,d),jo._pt&&ih(1,jo)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,o=Zn.to(e,ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yo(e.ease,Js.ease)),Xh(Js,e||{})},config:function(e){return Xh(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Qn[a]&&!si[a]&&Qs(t+" effect requires "+a+" plugin.")}),Yl[t]=function(a,l,c){return n(gi(a),ai(l||{},o),c)},s&&(Vn.prototype[t]=function(a,l,c){return this.add(Yl[t](a,Wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){xt[e]=yo(t)},parseEase:function(e,t){return arguments.length?yo(e,t):xt},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vn(e),r,o;for(n.smoothChildTiming=Wn(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,r=Gt._first;r;)o=r._next,(t||!(!r._dur&&r instanceof Qt&&r.vars.onComplete===r._targets[0]))&&zi(n,r,r._start-r._delay),r=o;return zi(Gt,n,0),n},context:function(e,t){return e?new Sp(e,t):Ht},matchMedia:function(e){return new U0(e)},matchMediaRefresh:function(){return So.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Jc()},addEventListener:function(e,t){var n=tl[e]||(tl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=tl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:h0,wrapYoyo:f0,distribute:np,random:rp,snap:ip,normalize:u0,getUnit:Tn,clamp:s0,splitColor:cp,toArray:gi,selector:Zc,mapRange:sp,pipe:l0,unitize:c0,interpolate:d0,shuffle:tp},install:Gd,effects:Yl,ticker:ei,updateRoot:Vn.updateRoot,plugins:Qn,globalTimeline:Gt,core:{PropTween:qn,globals:Wd,Tween:Qt,Timeline:Vn,Animation:ia,getCache:vo,_removeLinkedListItem:Tl,reverting:function(){return pn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return Wu=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return pl[i]=Qt[i]});ei.add(Vn.updateRoot);jo=pl.to({},{duration:0});var F0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},N0=function(e,t){var n=e._targets,r,o,s;for(r in t)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=F0(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[o],r))},Jl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(a){var l,c;if(fn(o)&&(l={},Xn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}N0(a,o)}}}},Zn=pl.registerPlugin({name:"attr",init:function(e,t,n,r,o){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],r,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Jl("roundProps",Kc),Jl("modifiers"),Jl("snap",ip))||pl;Qt.version=Vn.version=Zn.version="3.15.0";Vd=1;qu()&&us();xt.Power0;xt.Power1;xt.Power2;xt.Power3;xt.Power4;xt.Linear;xt.Quad;xt.Cubic;xt.Quart;xt.Quint;xt.Strong;xt.Elastic;xt.Back;xt.SteppedEase;xt.Bounce;xt.Sine;xt.Expo;xt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jh,Fr,ts,rh,_o,Jh,oh,O0=function(){return typeof window<"u"},mr={},co=180/Math.PI,ns=Math.PI/180,Io=Math.atan2,Qh=1e8,sh=/([A-Z])/g,z0=/(left|right|width|margin|padding|x)/i,B0=/[\s,\(]\S/,Bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},k0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},H0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},V0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},G0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Mp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},W0=function(e,t,n){return e.style[t]=n},X0=function(e,t,n){return e.style.setProperty(t,n)},q0=function(e,t,n){return e._gsap[t]=n},Y0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$0=function(e,t,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},Z0=function(e,t,n,r,o){var s=e._gsap;s[t]=n,s.renderTransform(o,s)},Wt="transform",Yn=Wt+"Origin",K0=function i(e,t){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in mr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=lr(r,a)}):this.tfm[e]=s.x?s[e]:lr(r,e),e===Yn&&(this.tfm.zOrigin=s.zOrigin);else return Bi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Wt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Yn,t,"")),e=Wt}(o||t)&&this.props.push(e,t,o[e])},bp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},j0=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(sh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=oh(),(!o||!o.isStart)&&!n[Wt]&&(bp(n),r.zOrigin&&n[Yn]&&(n[Yn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Tp=function(e,t){var n={target:e,props:[],revert:j0,save:K0};return e._gsap||Zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Ep,eu=function(e,t){var n=Fr.createElementNS?Fr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fr.createElement(e);return n&&n.style?n:Fr.createElement(e)},ii=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(sh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,hs(t)||t,1)||""},ef="O,Moz,ms,Ms,Webkit".split(","),hs=function(e,t,n){var r=t||_o,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(ef[s]+e in o););return s<0?null:(s===3?"ms":s>=0?ef[s]:"")+e},tu=function(){O0()&&window.document&&(jh=window,Fr=jh.document,ts=Fr.documentElement,_o=eu("div")||{style:{}},eu("div"),Wt=hs(Wt),Yn=Wt+"Origin",_o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ep=!!hs("perspective"),oh=Zn.core.reverting,rh=1)},tf=function(e){var t=e.ownerSVGElement,n=eu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),ts.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),ts.removeChild(n),o},nf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ap=function(e){var t,n;try{t=e.getBBox()}catch{t=tf(e),n=1}return t&&(t.width||t.height)||n||(t=tf(e)),t&&!t.width&&!t.x&&!t.y?{x:+nf(e,["x","cx","x1"])||0,y:+nf(e,["y","cy","y1"])||0,width:0,height:0}:t},Rp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ap(e))},kr=function(e,t){if(t){var n=e.style,r;t in mr&&t!==Yn&&(t=Wt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(sh,"-$1").toLowerCase())):n.removeAttribute(t)}},Nr=function(e,t,n,r,o,s){var a=new qn(e._pt,t,n,0,1,s?wp:Mp);return e._pt=a,a.b=r,a.e=o,e._props.push(n),a},rf={deg:1,rad:1,turn:1},J0={grid:1,flex:1},Hr=function i(e,t,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=_o.style,l=z0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",v,g,_,p;if(r===s||!o||rf[r]||rf[s])return o;if(s!=="px"&&!f&&(o=i(e,t,n,"px")),p=e.getCTM&&Rp(e),(m||s==="%")&&(mr[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Kt(m?o/v*d:o/100*v);if(a[l?"width":"height"]=d+(f?s:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Fr||!g.appendChild)&&(g=Fr.body),_=g._gsap,_&&m&&_.width&&l&&_.time===ei.time&&!_.uncache)return Kt(o/_.width*d);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+r,v=e[u],b?e.style[t]=b:kr(e,t)}else(m||s==="%")&&!J0[ii(g,"display")]&&(a.position=ii(e,"position")),g===e&&(a.position="static"),g.appendChild(_o),v=_o[u],g.removeChild(_o),a.position="absolute";return l&&m&&(_=vo(g),_.time=ei.time,_.width=g[u]),Kt(f?v*o/d:v&&o?d/v*o:0)},lr=function(e,t,n,r){var o;return rh||tu(),t in Bi&&t!=="transform"&&(t=Bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),mr[t]&&t!=="transform"?(o=oa(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:_l(ii(e,Yn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=ml[t]&&ml[t](e,t,n)||ii(e,t)||qd(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Hr(e,t,o,n)+n:o},Q0=function(e,t,n,r){if(!n||n==="none"){var o=hs(t,e,1),s=o&&ii(e,o,1);s&&s!==n?(t=o,n=s):t==="borderColor"&&(n=ii(e,"borderTopColor"))}var a=new qn(this._pt,e.style,t,0,1,xp),l=0,c=0,u,d,f,m,v,g,_,p,b,S,M,L;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ii(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=ii(e,t)||r,g?e.style[t]=g:kr(e,t)),u=[n,r],hp(u),n=u[0],r=u[1],f=n.match(Ko)||[],L=r.match(Ko)||[],L.length){for(;d=Ko.exec(r);)_=d[0],b=r.substring(l,d.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),_!==(g=f[c++]||"")&&(m=parseFloat(g)||0,M=g.substr((m+"").length),_.charAt(1)==="="&&(_=es(m,_)+M),p=parseFloat(_),S=_.substr((p+"").length),l=Ko.lastIndex-S.length,S||(S=S||ri.units[t]||M,l===r.length&&(r+=S,a.e+=S)),M!==S&&(m=Hr(e,t,g,S)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?wp:Mp;return Hd.test(r)&&(a.e=0),this._pt=a,a},of={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},e_=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=of[n]||n,t[1]=of[r]||r,t.join(" ")},t_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,s=n._gsap,a,l,c;if(o==="all"||o===!0)r.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],mr[a]&&(l=1,a=a==="transformOrigin"?Yn:Wt),kr(n,a);l&&(kr(n,Wt),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",oa(n,1),s.uncache=1,bp(r)))}},ml={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new qn(e._pt,t,n,0,0,t_);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},ra=[1,0,0,1,0,0],Cp={},Pp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},sf=function(e){var t=ii(e,Wt);return Pp(t)?ra:t.substr(7).match(kd).map(Kt)},ah=function(e,t){var n=e._gsap||vo(e),r=e.style,o=sf(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?ra:o):(o===ra&&!e.offsetParent&&e!==ts&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ts.appendChild(e)),o=sf(e),l?r.display=l:kr(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):ts.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},nu=function(e,t,n,r,o,s){var a=e._gsap,l=o||ah(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],b=l[5],S=t.split(" "),M=parseFloat(S[0])||0,L=parseFloat(S[1])||0,C,E,P,w;n?l!==ra&&(E=m*_-v*g)&&(P=M*(_/E)+L*(-g/E)+(g*b-_*p)/E,w=M*(-v/E)+L*(m/E)-(m*b-v*p)/E,M=P,L=w):(C=Ap(e),M=C.x+(~S[0].indexOf("%")?M/100*C.width:M),L=C.y+(~(S[1]||S[0]).indexOf("%")?L/100*C.height:L)),r||r!==!1&&a.smooth?(p=M-c,b=L-u,a.xOffset=d+(p*m+b*g)-p,a.yOffset=f+(p*v+b*_)-b):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=L,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Yn]="0px 0px",s&&(Nr(s,a,"xOrigin",c,M),Nr(s,a,"yOrigin",u,L),Nr(s,a,"xOffset",d,a.xOffset),Nr(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+L)},oa=function(e,t){var n=e._gsap||new dp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=ii(e,Yn)||"0",u,d,f,m,v,g,_,p,b,S,M,L,C,E,P,w,y,R,N,O,V,H,G,Y,z,se,X,_e,we,Re,J,te;return u=d=f=g=_=p=b=S=M=0,m=v=1,n.svg=!!(e.getCTM&&Rp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Wt]!=="none"?l[Wt]:"")),r.scale=r.rotate=r.translate="none"),E=ah(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),nu(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),L=n.xOrigin||0,C=n.yOrigin||0,E!==ra&&(R=E[0],N=E[1],O=E[2],V=E[3],u=H=E[4],d=G=E[5],E.length===6?(m=Math.sqrt(R*R+N*N),v=Math.sqrt(V*V+O*O),g=R||N?Io(N,R)*co:0,b=O||V?Io(O,V)*co+g:0,b&&(v*=Math.abs(Math.cos(b*ns))),n.svg&&(u-=L-(L*R+C*O),d-=C-(L*N+C*V))):(te=E[6],Re=E[7],X=E[8],_e=E[9],we=E[10],J=E[11],u=E[12],d=E[13],f=E[14],P=Io(te,we),_=P*co,P&&(w=Math.cos(-P),y=Math.sin(-P),Y=H*w+X*y,z=G*w+_e*y,se=te*w+we*y,X=H*-y+X*w,_e=G*-y+_e*w,we=te*-y+we*w,J=Re*-y+J*w,H=Y,G=z,te=se),P=Io(-O,we),p=P*co,P&&(w=Math.cos(-P),y=Math.sin(-P),Y=R*w-X*y,z=N*w-_e*y,se=O*w-we*y,J=V*y+J*w,R=Y,N=z,O=se),P=Io(N,R),g=P*co,P&&(w=Math.cos(P),y=Math.sin(P),Y=R*w+N*y,z=H*w+G*y,N=N*w-R*y,G=G*w-H*y,R=Y,H=z),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=Kt(Math.sqrt(R*R+N*N+O*O)),v=Kt(Math.sqrt(G*G+te*te)),P=Io(H,G),b=Math.abs(P)>2e-4?P*co:0,M=J?1/(J<0?-J:J):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Pp(ii(e,Wt)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(m*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Kt(m),n.scaleY=Kt(v),n.rotation=Kt(g)+a,n.rotationX=Kt(_)+a,n.rotationY=Kt(p)+a,n.skewX=b+a,n.skewY=S+a,n.transformPerspective=M+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Yn]=_l(c)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?i_:Ep?Lp:n_,n.uncache=0,n},_l=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ql=function(e,t,n){var r=Tn(t);return Kt(parseFloat(t)+parseFloat(Hr(e,"x",n+"px",r)))+r},n_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Lp(e,t)},Qr="0deg",Cs="0px",eo=") ",Lp=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,b=n.target,S=n.zOrigin,M="",L=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==Qr||u!==Qr)){var C=parseFloat(u)*ns,E=Math.sin(C),P=Math.cos(C),w;C=parseFloat(d)*ns,w=Math.cos(C),s=Ql(b,s,E*w*-S),a=Ql(b,a,-Math.sin(C)*-S),l=Ql(b,l,P*w*-S+S)}_!==Cs&&(M+="perspective("+_+eo),(r||o)&&(M+="translate("+r+"%, "+o+"%) "),(L||s!==Cs||a!==Cs||l!==Cs)&&(M+=l!==Cs||L?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+eo),c!==Qr&&(M+="rotate("+c+eo),u!==Qr&&(M+="rotateY("+u+eo),d!==Qr&&(M+="rotateX("+d+eo),(f!==Qr||m!==Qr)&&(M+="skew("+f+", "+m+eo),(v!==1||g!==1)&&(M+="scale("+v+", "+g+eo),b.style[Wt]=M||"translate(0, 0)"},i_=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,b=n.forceCSS,S=parseFloat(s),M=parseFloat(a),L,C,E,P,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ns,c*=ns,L=Math.cos(l)*d,C=Math.sin(l)*d,E=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=ns,w=Math.tan(c-u),w=Math.sqrt(1+w*w),E*=w,P*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),L*=w,C*=w)),L=Kt(L),C=Kt(C),E=Kt(E),P=Kt(P)):(L=d,P=f,C=E=0),(S&&!~(s+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(S=Hr(m,"x",s,"px"),M=Hr(m,"y",a,"px")),(v||g||_||p)&&(S=Kt(S+v-(v*L+g*E)+_),M=Kt(M+g-(v*C+g*P)+p)),(r||o)&&(w=m.getBBox(),S=Kt(S+r/100*w.width),M=Kt(M+o/100*w.height)),w="matrix("+L+","+C+","+E+","+P+","+S+","+M+")",m.setAttribute("transform",w),b&&(m.style[Wt]=w)},r_=function(e,t,n,r,o){var s=360,a=fn(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?co:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*Qh)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*Qh)%s-~~(c/s)*s)),e._pt=f=new qn(e._pt,t,n,r,c,k0),f.e=u,f.u="deg",e._props.push(n),f},af=function(e,t){for(var n in t)e[n]=t[n];return e},o_=function(e,t,n){var r=af({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,f,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Wt]=t,a=oa(n,1),kr(n,Wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Wt],s[Wt]=t,a=oa(n,1),s[Wt]=c);for(l in mr)c=r[l],u=a[l],c!==u&&o.indexOf(l)<0&&(m=Tn(c),v=Tn(u),d=m!==v?Hr(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new qn(e._pt,a,l,d,f-d,Qc),e._pt.u=v||0,e._props.push(l));af(a,r)};Xn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",o="Left",s=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(a){return e<2?i+a:"border"+a+i});ml[e>1?"border"+i:i]=function(a,l,c,u,d){var f,m;if(arguments.length<4)return f=s.map(function(v){return lr(a,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(v,g){return m[v]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,m,d)}});var Dp={name:"css",register:tu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,m,v,g,_,p,b,S,M,L,C,E,P,w;rh||tu(),this.styles=this.styles||Tp(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Qn[g]&&pp(g,t,n,r,e,o)))){if(m=typeof u,v=ml[g],m==="function"&&(u=u.call(n,r,e,o),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=ta(u)),v)v(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",zr.lastIndex=0,zr.test(c)||(_=Tn(c),p=Tn(u),p?_!==p&&(c=Hr(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,o,0,0,g),s.push(g),P.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,o):l[g],fn(c)&&~c.indexOf("random(")&&(c=ta(c)),Tn(c+"")||c==="auto"||(c+=ri.units[g]||Tn(lr(e,g))||""),(c+"").charAt(1)==="="&&(c=lr(e,g))):c=lr(e,g),f=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),g in Bi&&(g==="autoAlpha"&&(f===1&&lr(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),Nr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Bi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in mr,S){if(this.styles.save(g),w=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=ii(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=ii(e,"perspective"),y?e.style.perspective=y:kr(e,"perspective")}d=parseFloat(u)}if(M||(L=e._gsap,L.renderTransform&&!t.parseTransform||oa(e,t.parseTransform),C=t.smoothOrigin!==!1&&L.smooth,M=this._pt=new qn(this._pt,a,Wt,0,1,L.renderTransform,L,0,-1),M.dep=1),g==="scale")this._pt=new qn(this._pt,L,"scaleY",L.scaleY,(b?es(L.scaleY,b+d):d)-L.scaleY||0,Qc),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Yn,0,a[Yn]),u=e_(u),L.svg?nu(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==L.zOrigin&&Nr(this,L,"zOrigin",L.zOrigin,p),Nr(this,a,g,_l(c),_l(u)));continue}else if(g==="svgOrigin"){nu(e,u,1,C,0,this);continue}else if(g in Cp){r_(this,L,g,f,b?es(f,b+u):u);continue}else if(g==="smoothOrigin"){Nr(this,L,"smooth",L.smooth,u);continue}else if(g==="force3D"){L[g]=u;continue}else if(g==="transform"){o_(this,u,e);continue}}else g in a||(g=hs(g)||g);if(S||(d||d===0)&&(f||f===0)&&!B0.test(u)&&g in a)_=(c+"").substr((f+"").length),d||(d=0),p=Tn(u)||(g in ri.units?ri.units[g]:_),_!==p&&(f=Hr(e,g,c,p)),this._pt=new qn(this._pt,S?L:a,g,f,(b?es(f,b+d):d)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?G0:Qc),this._pt.u=p||0,S&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=V0):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=H0);else if(g in a)Q0.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,r,o);else if(g!=="parseTransform"){$u(g,u);continue}S||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),s.push(g)}}E&&yp(this)},render:function(e,t){if(t.tween._time||!oh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:lr,aliases:Bi,getSetter:function(e,t,n){var r=Bi[t];return r&&r.indexOf(",")<0&&(t=r),t in mr&&t!==Yn&&(e._gsap.x||lr(e,"x"))?n&&Jh===n?t==="scale"?Y0:q0:(Jh=n||{})&&(t==="scale"?$0:Z0):e.style&&!Xu(e.style[t])?W0:~t.indexOf("-")?X0:nh(e,t)},core:{_removeProperty:kr,_getMatrix:ah}};Zn.utils.checkPrefix=hs;Zn.core.getStyleSaver=Tp;(function(i,e,t,n){var r=Xn(i+","+e+","+t,function(o){mr[o]=1});Xn(e,function(o){ri.units[o]="deg",Cp[o]=1}),Bi[r[13]]=i+","+e,Xn(n,function(o){var s=o.split(":");Bi[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ri.units[i]="px"});Zn.registerPlugin(Dp);var lh=Zn.registerPlugin(Dp)||Zn;lh.core.Tween;const Ip=[{id:"oryzo_ai",title:"Oryzo AI",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/oryzo_ai",colorBg:"#1a1411",colorText:"#ffedd7"},{id:"atlas_motion",title:"Atlas Motion",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/atlas_motion",colorBg:"#181818",colorText:"#ffffff"},{id:"devin_ai",title:"Devin AI",tags:"web • design • development • 3d",url:"https://lusion.co/projects/devin_ai",colorBg:"#121414",colorText:"#ffffff"},{id:"of_the_oak",title:"Of The Oak",tags:"web • design • development • 3d • animation",url:"https://lusion.co/projects/of_the_oak",colorBg:"#111a13",colorText:"#e8ffe9"},{id:"everswap",title:"Everswap",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/everswap",colorBg:"#E3E3F8",colorText:"#111111"},{id:"porsche_dream_machine",title:"Porsche: Dream Machine",tags:"concept • 3D illustration • mograph • video",url:"https://lusion.co/projects/porsche_dream_machine",colorBg:"#EFD5D3",colorText:"#1a0a0a"},{id:"synthetic_human",title:"Synthetic Human",tags:"web • design • development • 3d",url:"https://lusion.co/projects/synthetic_human",colorBg:"#9d8aff",colorText:"#120820"},{id:"spatial_fusion",title:"Meta: Spatial Fusion",tags:"web • design • development • 3d",url:"https://lusion.co/projects/spatial_fusion",colorBg:"#D6C8ED",colorText:"#1a1020"},{id:"spaace",title:"Spaace - NFT Marketplace",tags:"web • design • development • 3d • web3",url:"https://lusion.co/projects/spaace",colorBg:"#010a16",colorText:"#d6ecff"},{id:"ddd_2024",title:"DDD 2024",tags:"web • design • development • 3d",url:"https://lusion.co/projects/ddd_2024",colorBg:"#261c46",colorText:"#efe8ff"},{id:"choo_choo_world",title:"Choo Choo World",tags:"concept • web • game design • 3d",url:"https://lusion.co/projects/choo_choo_world",colorBg:"#E8EEF8",colorText:"#101418"},{id:"soda_experience",title:"Soda Experience",tags:"AR • development • 3d",url:"https://lusion.co/projects/soda_experience",colorBg:"#E1E2E4",colorText:"#111111"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="170",s_=0,lf=1,a_=2,Up=1,l_=2,rr=3,Vr=0,$n=1,En=2,Ei=0,Mo=1,cf=2,uf=3,hf=4,sa=5,Fn=100,c_=101,u_=102,h_=103,f_=104,nl=200,pi=201,d_=202,p_=203,gl=204,vl=205,m_=206,__=207,g_=208,v_=209,x_=210,y_=211,S_=212,M_=213,w_=214,iu=0,ru=1,ou=2,fs=3,su=4,au=5,lu=6,cu=7,Fp=0,b_=1,T_=2,Gi=0,E_=1,A_=2,R_=3,C_=4,P_=5,L_=6,D_=7,Np=300,ds=301,ps=302,uu=303,hu=304,Rl=306,is=1e3,Nn=1001,xl=1002,rn=1003,I_=1004,Ma=1005,vt=1006,ec=1007,ki=1008,Ai=1009,Op=1010,zp=1011,bo=1012,uh=1013,To=1014,Gn=1015,Hi=1016,hh=1017,fh=1018,ms=1020,Bp=35902,kp=1021,Hp=1022,dn=1023,Vp=1024,Gp=1025,rs=1026,_s=1027,dh=1028,ph=1029,Wp=1030,mh=1031,_h=1033,il=33776,rl=33777,ol=33778,sl=33779,fu=35840,du=35841,pu=35842,mu=35843,_u=36196,gu=37492,vu=37496,xu=37808,yu=37809,Su=37810,Mu=37811,wu=37812,bu=37813,Tu=37814,Eu=37815,Au=37816,Ru=37817,Cu=37818,Pu=37819,Lu=37820,Du=37821,al=36492,Iu=36494,Uu=36495,Xp=36283,Fu=36284,Nu=36285,Ou=36286,U_=3200,F_=3201,N_=0,O_=1,en="",Un="srgb",Xi="srgb-linear",Cl="linear",Ct="srgb",Uo=7680,ff=519,z_=512,B_=513,k_=514,qp=515,H_=516,V_=517,G_=518,W_=519,df=35044,wr=35048,pf="300 es",ur=2e3,yl=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mf=1234567;const qs=Math.PI/180,aa=180/Math.PI;function xs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function bn(i,e,t){return Math.max(e,Math.min(t,i))}function gh(i,e){return(i%e+e)%e}function X_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function q_(i,e,t){return i!==e?(t-i)/(e-i):0}function Ys(i,e,t){return(1-t)*i+t*e}function Y_(i,e,t,n){return Ys(i,e,1-Math.exp(-t*n))}function $_(i,e=1){return e-Math.abs(gh(i,e*2)-e)}function Z_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function K_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function j_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function J_(i,e){return i+Math.random()*(e-i)}function Q_(i){return i*(.5-Math.random())}function eg(i){i!==void 0&&(mf=i);let e=mf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tg(i){return i*qs}function ng(i){return i*aa}function ig(i){return(i&i-1)===0&&i!==0}function rg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function og(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sg(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+n)/2),u=s((e+n)/2),d=o((e-n)/2),f=s((e-n)/2),m=o((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kt={DEG2RAD:qs,RAD2DEG:aa,generateUUID:xs,clamp:bn,euclideanModulo:gh,mapLinear:X_,inverseLerp:q_,lerp:Ys,damp:Y_,pingpong:$_,smoothstep:Z_,smootherstep:K_,randInt:j_,randFloat:J_,randFloatSpread:Q_,seededRandom:eg,degToRad:tg,radToDeg:ng,isPowerOfTwo:ig,ceilPowerOfTwo:rg,floorPowerOfTwo:og,setQuaternionFromProperEuler:sg,normalize:Dn,denormalize:Zo};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,r,o,s,a,l,c){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],b=r[1],S=r[4],M=r[7],L=r[2],C=r[5],E=r[8];return o[0]=s*g+a*b+l*L,o[3]=s*_+a*S+l*C,o[6]=s*p+a*M+l*E,o[1]=c*g+u*b+d*L,o[4]=c*_+u*S+d*C,o[7]=c*p+u*M+d*E,o[2]=f*g+m*b+v*L,o[5]=f*_+m*S+v*C,o[8]=f*p+m*M+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,m=c*o-s*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tc.makeScale(e,t)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new dt;function Yp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ag(){const i=la("canvas");return i.style.display="block",i}const _f={};function Hs(i){i in _f||(_f[i]=!0,console.warn(i))}function lg(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function cg(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ug(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wt={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===en?Cl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gf=[.64,.33,.3,.6,.15,.06],vf=[.2126,.7152,.0722],xf=[.3127,.329],yf=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sf=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[Xi]:{primaries:gf,whitePoint:xf,transfer:Cl,toXYZ:yf,fromXYZ:Sf,luminanceCoefficients:vf,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:gf,whitePoint:xf,transfer:Ct,toXYZ:yf,fromXYZ:Sf,luminanceCoefficients:vf,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}});let Fo;class hg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fo===void 0&&(Fo=la("canvas")),Fo.width=e.width,Fo.height=e.height;const n=Fo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=fr(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fg=0;class $p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(nc(r[s].image)):o.push(nc(r[s]))}else o=nc(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dg=0;class mn extends vs{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Nn,r=Nn,o=vt,s=ki,a=dn,l=Ai,c=mn.DEFAULT_ANISOTROPY,u=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=xs(),this.name="",this.source=new $p(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Np;mn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(m+1)/2,L=(p+1)/2,C=(u+f)/4,E=(d+g)/4,P=(v+_)/4;return S>M&&S>L?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=C/n,o=E/n):M>L?M<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),n=C/r,o=P/r):L<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),n=E/o,r=P/o),this.set(n,r,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(d-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pg extends vs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $p(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends pg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zp extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mg extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==v){let _=1-a;const p=l*f+c*m+u*v+d*g,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,p*b);_=Math.sin(_*C)/L,a=Math.sin(a*C)/L}const M=a*b;if(l=l*_+f*M,c=c*_+m*M,u=u*_+v*M,d=d*_+g*M,_===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-a*m,e[t+2]=c*v+u*m+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),f=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new q,Mf=new On;class ys{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,yi):yi.fromBufferAttribute(o,s),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),ba.subVectors(this.max,Ps),No.subVectors(e.a,Ps),Oo.subVectors(e.b,Ps),zo.subVectors(e.c,Ps),br.subVectors(Oo,No),Tr.subVectors(zo,Oo),to.subVectors(No,zo);let t=[0,-br.z,br.y,0,-Tr.z,Tr.y,0,-to.z,to.y,br.z,0,-br.x,Tr.z,0,-Tr.x,to.z,0,-to.x,-br.y,br.x,0,-Tr.y,Tr.x,0,-to.y,to.x,0];return!rc(t,No,Oo,zo,ba)||(t=[1,0,0,0,1,0,0,0,1],!rc(t,No,Oo,zo,ba))?!1:(Ta.crossVectors(br,Tr),t=[Ta.x,Ta.y,Ta.z],rc(t,No,Oo,zo,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ji=[new q,new q,new q,new q,new q,new q,new q,new q],yi=new q,wa=new ys,No=new q,Oo=new q,zo=new q,br=new q,Tr=new q,to=new q,Ps=new q,ba=new q,Ta=new q,no=new q;function rc(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){no.fromArray(i,o);const a=r.x*Math.abs(no.x)+r.y*Math.abs(no.y)+r.z*Math.abs(no.z),l=e.dot(no),c=t.dot(no),u=n.dot(no);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _g=new ys,Ls=new q,oc=new q;class vh{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_g.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ls,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(oc)),this.expandByPoint(Ls.copy(e.center).sub(oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new q,sc=new q,Ea=new q,Er=new q,ac=new q,Aa=new q,lc=new q;class gg{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){sc.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(sc);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Ea),a=Er.dot(this.direction),l=-Er.dot(Ea),c=Er.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*l-a,f=s*a-l,v=o*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,m=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sc).addScaledVector(Ea,f),m}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);const n=Ji.dot(this.direction),r=Ji.dot(Ji)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,r,o){ac.subVectors(t,e),Aa.subVectors(n,e),lc.crossVectors(ac,Aa);let s=this.direction.dot(lc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Er.subVectors(this.origin,e);const l=a*this.direction.dot(Aa.crossVectors(Er,Aa));if(l<0)return null;const c=a*this.direction.dot(ac.cross(Er));if(c<0||l+c>s)return null;const u=-a*Er.dot(lc);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_)}set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Bo.setFromMatrixColumn(e,0).length(),o=1/Bo.setFromMatrixColumn(e,1).length(),s=1/Bo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f+g*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-v,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f-g*a,t[4]=-s*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*u,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vg,e,xg)}lookAt(e,t,n){const r=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Ar.crossVectors(n,jn),Ar.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Ar.crossVectors(n,jn)),Ar.normalize(),Ra.crossVectors(jn,Ar),r[0]=Ar.x,r[4]=Ra.x,r[8]=jn.x,r[1]=Ar.y,r[5]=Ra.y,r[9]=jn.y,r[2]=Ar.z,r[6]=Ra.z,r[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],b=n[3],S=n[7],M=n[11],L=n[15],C=r[0],E=r[4],P=r[8],w=r[12],y=r[1],R=r[5],N=r[9],O=r[13],V=r[2],H=r[6],G=r[10],Y=r[14],z=r[3],se=r[7],X=r[11],_e=r[15];return o[0]=s*C+a*y+l*V+c*z,o[4]=s*E+a*R+l*H+c*se,o[8]=s*P+a*N+l*G+c*X,o[12]=s*w+a*O+l*Y+c*_e,o[1]=u*C+d*y+f*V+m*z,o[5]=u*E+d*R+f*H+m*se,o[9]=u*P+d*N+f*G+m*X,o[13]=u*w+d*O+f*Y+m*_e,o[2]=v*C+g*y+_*V+p*z,o[6]=v*E+g*R+_*H+p*se,o[10]=v*P+g*N+_*G+p*X,o[14]=v*w+g*O+_*Y+p*_e,o[3]=b*C+S*y+M*V+L*z,o[7]=b*E+S*R+M*H+L*se,o[11]=b*P+S*N+M*G+L*X,o[15]=b*w+S*O+M*Y+L*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*a*f+n*c*f+r*a*m-n*l*m)+g*(+t*l*m-t*c*f+o*s*f-r*s*m+r*c*u-o*l*u)+_*(+t*c*d-t*a*m-o*s*d+n*s*m+o*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*s*d-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],b=d*_*c-g*f*c+g*l*m-a*_*m-d*l*p+a*f*p,S=v*f*c-u*_*c-v*l*m+s*_*m+u*l*p-s*f*p,M=u*g*c-v*d*c+v*a*m-s*g*m-u*a*p+s*d*p,L=v*d*l-u*g*l-v*a*f+s*g*f+u*a*_-s*d*_,C=t*b+n*S+r*M+o*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return e[0]=b*E,e[1]=(g*f*o-d*_*o-g*r*m+n*_*m+d*r*p-n*f*p)*E,e[2]=(a*_*o-g*l*o+g*r*c-n*_*c-a*r*p+n*l*p)*E,e[3]=(d*l*o-a*f*o-d*r*c+n*f*c+a*r*m-n*l*m)*E,e[4]=S*E,e[5]=(u*_*o-v*f*o+v*r*m-t*_*m-u*r*p+t*f*p)*E,e[6]=(v*l*o-s*_*o-v*r*c+t*_*c+s*r*p-t*l*p)*E,e[7]=(s*f*o-u*l*o+u*r*c-t*f*c-s*r*m+t*l*m)*E,e[8]=M*E,e[9]=(v*d*o-u*g*o-v*n*m+t*g*m+u*n*p-t*d*p)*E,e[10]=(s*g*o-v*a*o+v*n*c-t*g*c-s*n*p+t*a*p)*E,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*m-t*a*m)*E,e[12]=L*E,e[13]=(u*g*r-v*d*r+v*n*f-t*g*f-u*n*_+t*d*_)*E,e[14]=(v*a*r-s*g*r-v*n*l+t*g*l+s*n*_-t*a*_)*E,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,m=o*u,v=o*d,g=s*u,_=s*d,p=a*d,b=l*c,S=l*u,M=l*d,L=n.x,C=n.y,E=n.z;return r[0]=(1-(g+p))*L,r[1]=(m+M)*L,r[2]=(v-S)*L,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(f+p))*C,r[6]=(_+b)*C,r[7]=0,r[8]=(v+S)*E,r[9]=(_-b)*E,r[10]=(1-(f+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Bo.set(r[0],r[1],r[2]).length();const s=Bo.set(r[4],r[5],r[6]).length(),a=Bo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Si.copy(this);const c=1/o,u=1/s,d=1/a;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=d,Si.elements[9]*=d,Si.elements[10]*=d,t.setFromRotationMatrix(Si),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=ur){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===ur)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===yl)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=ur){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),f=(t+e)*c,m=(n+r)*u;let v,g;if(a===ur)v=(s+o)*d,g=-2*d;else if(a===yl)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bo=new q,Si=new yt,vg=new q(0,0,0),xg=new q(1,1,1),Ar=new q,Ra=new q,jn=new q,wf=new yt,bf=new On;class li{constructor(e=0,t=0,n=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yg=0;const Tf=new q,ko=new On,Qi=new yt,Ca=new q,Ds=new q,Sg=new q,Mg=new On,Ef=new q(1,0,0),Af=new q(0,1,0),Rf=new q(0,0,1),Cf={type:"added"},wg={type:"removed"},Ho={type:"childadded",child:null},cc={type:"childremoved",child:null};class oi extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const e=new q,t=new li,n=new On,r=new q(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new dt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ko.setFromAxisAngle(e,t),this.quaternion.multiply(ko),this}rotateOnWorldAxis(e,t){return ko.setFromAxisAngle(e,t),this.quaternion.premultiply(ko),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(Rf,e)}translateOnAxis(e,t){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(Rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ds,Ca,this.up):Qi.lookAt(Ca,Ds,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),ko.setFromRotationMatrix(Qi),this.quaternion.premultiply(ko.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cf),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wg),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cf),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,Sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}oi.DEFAULT_UP=new q(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new q,er=new q,uc=new q,tr=new q,Vo=new q,Go=new q,Pf=new q,hc=new q,fc=new q,dc=new q,pc=new Ft,mc=new Ft,_c=new Ft;class Ti{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mi.subVectors(e,t),r.cross(Mi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Mi.subVectors(r,t),er.subVectors(n,t),uc.subVectors(e,t);const s=Mi.dot(Mi),a=Mi.dot(er),l=Mi.dot(uc),c=er.dot(er),u=er.dot(uc),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,v=(s*u-a*l)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,tr.x),l.addScaledVector(s,tr.y),l.addScaledVector(a,tr.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return pc.setScalar(0),mc.setScalar(0),_c.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),_c.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(pc,o.x),s.addScaledVector(mc,o.y),s.addScaledVector(_c,o.z),s}static isFrontFacing(e,t,n,r){return Mi.subVectors(n,t),er.subVectors(e,t),Mi.cross(er).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Mi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Ti.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;Vo.subVectors(r,n),Go.subVectors(o,n),hc.subVectors(e,n);const l=Vo.dot(hc),c=Go.dot(hc);if(l<=0&&c<=0)return t.copy(n);fc.subVectors(e,r);const u=Vo.dot(fc),d=Go.dot(fc);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Vo,s);dc.subVectors(e,o);const m=Vo.dot(dc),v=Go.dot(dc);if(v>=0&&m<=v)return t.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Go,a);const _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return Pf.subVectors(o,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(Pf,a);const p=1/(_+g+f);return s=g*p,a=f*p,t.copy(n).addScaledVector(Vo,s).addScaledVector(Go,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=wt.workingColorSpace){if(e=gh(e,1),t=bn(t,0,1),n=bn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=gc(s,o,e+1/3),this.g=gc(s,o,e),this.b=gc(s,o,e-1/3)}return wt.toWorkingColorSpace(this,r),this}setStyle(e,t=Un){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const n=jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return wt.fromWorkingColorSpace(yn.copy(this),e),Math.round(bn(yn.r*255,0,255))*65536+Math.round(bn(yn.g*255,0,255))*256+Math.round(bn(yn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,r=yn.g,o=yn.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Un){wt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,r=yn.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Pa);const n=Ys(Rr.h,Pa.h,t),r=Ys(Rr.s,Pa.s,t),o=Ys(Rr.l,Pa.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Je;Je.NAMES=jp;let bg=0;class Pl extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=xs(),this.name="",this.blending=Mo,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=vl,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(n.blending=this.blending),this.side!==Vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gl&&(n.blendSrc=this.blendSrc),this.blendDst!==vl&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ff&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xh extends Pl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cr=Tg();function Tg(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const o=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,o[l]=c|u}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:s,offsetTable:a}}function Eg(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=bn(i,-65504,65504),cr.floatView[0]=i;const e=cr.uint32View[0],t=e>>23&511;return cr.baseTable[t]+((e&8388607)>>cr.shiftTable[t])}function Ag(i){const e=i>>10;return cr.uint32View[0]=cr.mantissaTable[cr.offsetTable[e]+(i&1023)]+cr.exponentTable[e],cr.floatView[0]}const Lf={toHalfFloat:Eg,fromHalfFloat:Ag},Jt=new q,La=new et;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=df,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),r=Dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),r=Dn(r,this.array),o=Dn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==df&&(e.usage=this.usage),e}}class Jp extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qp extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wo extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rg=0;const fi=new yt,vc=new oi,Wo=new q,Jn=new ys,Is=new ys,hn=new q;class gr extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yp(e)?Qp:Jp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new dt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new wo(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Jn.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Jn.min,Is.min),Jn.expandByPoint(hn),hn.addVectors(Jn.max,Is.max),Jn.expandByPoint(hn)):(Jn.expandByPoint(Is.min),Jn.expandByPoint(Is.max))}Jn.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)hn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(hn));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(Wo.fromBufferAttribute(e,c),hn.add(Wo)),r=Math.max(r,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new q,l[P]=new q;const c=new q,u=new q,d=new q,f=new et,m=new et,v=new et,g=new q,_=new q;function p(P,w,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),f.fromBufferAttribute(o,P),m.fromBufferAttribute(o,w),v.fromBufferAttribute(o,y),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(R),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(R),a[P].add(g),a[w].add(g),a[y].add(g),l[P].add(_),l[w].add(_),l[y].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,w=b.length;P<w;++P){const y=b[P],R=y.start,N=y.count;for(let O=R,V=R+N;O<V;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new q,M=new q,L=new q,C=new q;function E(P){L.fromBufferAttribute(r,P),C.copy(L);const w=a[P];S.copy(w),S.sub(L.multiplyScalar(L.dot(w))).normalize(),M.crossVectors(C,w);const R=M.dot(l[P])<0?-1:1;s.setXYZW(P,S.x,S.y,S.z,R)}for(let P=0,w=b.length;P<w;++P){const y=b[P],R=y.start,N=y.count;for(let O=R,V=R+N;O<V;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new q,o=new q,s=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new Yt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Df=new yt,io=new gg,Da=new vh,If=new q,Ia=new q,Ua=new q,Fa=new q,xc=new q,Na=new q,Uf=new q,Oa=new q;class Ut extends oi{constructor(e=new gr,t=new xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Na.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(xc.fromBufferAttribute(d,e),s?Na.addScaledVector(xc,u):Na.addScaledVector(xc.sub(t),u))}t.add(Na)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(o),io.copy(e.ray).recast(e.near),!(Da.containsPoint(io.origin)===!1&&(io.intersectSphere(Da,If)===null||io.origin.distanceToSquared(If)>(e.far-e.near)**2))&&(Df.copy(o).invert(),io.copy(e.ray).applyMatrix4(Df),!(n.boundingBox!==null&&io.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,io)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),S=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let M=b,L=S;M<L;M+=3){const C=a.getX(M),E=a.getX(M+1),P=a.getX(M+2);r=za(this,p,e,n,c,u,d,C,E,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=a.getX(_),S=a.getX(_+1),M=a.getX(_+2);r=za(this,s,e,n,c,u,d,b,S,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),S=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let M=b,L=S;M<L;M+=3){const C=M,E=M+1,P=M+2;r=za(this,p,e,n,c,u,d,C,E,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=_,S=_+1,M=_+2;r=za(this,s,e,n,c,u,d,b,S,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Cg(i,e,t,n,r,o,s,a){let l;if(e.side===$n?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Vr,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:i}}function za(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Ia),i.getVertexPosition(l,Ua),i.getVertexPosition(c,Fa);const u=Cg(i,e,t,n,Ia,Ua,Fa,Uf);if(u){const d=new q;Ti.getBarycoord(Uf,Ia,Ua,Fa,d),r&&(u.uv=Ti.getInterpolatedAttribute(r,a,l,c,d,new et)),o&&(u.uv1=Ti.getInterpolatedAttribute(o,a,l,c,d,new et)),s&&(u.normal=Ti.getInterpolatedAttribute(s,a,l,c,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};Ti.getNormal(Ia,Ua,Fa,f.normal),u.face=f,u.barycoord=d}return u}class ua extends gr{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new wo(c,3)),this.setAttribute("normal",new wo(u,3)),this.setAttribute("uv",new wo(d,2));function v(g,_,p,b,S,M,L,C,E,P,w){const y=M/E,R=L/P,N=M/2,O=L/2,V=C/2,H=E+1,G=P+1;let Y=0,z=0;const se=new q;for(let X=0;X<G;X++){const _e=X*R-O;for(let we=0;we<H;we++){const Re=we*y-N;se[g]=Re*b,se[_]=_e*S,se[p]=V,c.push(se.x,se.y,se.z),se[g]=0,se[_]=0,se[p]=C>0?1:-1,u.push(se.x,se.y,se.z),d.push(we/E),d.push(1-X/P),Y+=1}}for(let X=0;X<P;X++)for(let _e=0;_e<E;_e++){const we=f+_e+H*X,Re=f+_e+H*(X+1),J=f+(_e+1)+H*(X+1),te=f+(_e+1)+H*X;l.push(we,Re,te),l.push(Re,J,te),z+=6}a.addGroup(m,z,w),m+=z,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function In(i){const e={};for(let t=0;t<i.length;t++){const n=gs(i[t]);for(const r in n)e[r]=n[r]}return e}function Pg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function em(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Lg={clone:gs,merge:In};var Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Pl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tm extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ur}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new q,Ff=new et,Nf=new et;class Hn extends tm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Ff,Nf),t.subVectors(Nf,Ff)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xo=-90,qo=1;class Ug extends oi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(Xo,qo,e,t);r.layers=this.layers,this.add(r);const o=new Hn(Xo,qo,e,t);o.layers=this.layers,this.add(o);const s=new Hn(Xo,qo,e,t);s.layers=this.layers,this.add(s);const a=new Hn(Xo,qo,e,t);a.layers=this.layers,this.add(a);const l=new Hn(Xo,qo,e,t);l.layers=this.layers,this.add(l);const c=new Hn(Xo,qo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===ur)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class nm extends mn{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fg extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new nm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ua(5,5,5),o=new At({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:Ei});o.uniforms.tEquirect.value=t;const s=new Ut(r,o),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=vt),new Ug(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const yc=new q,Ng=new q,Og=new dt;class uo{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=yc.subVectors(n,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Og.getNormalMatrix(e),r=this.coplanarPoint(yc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new vh,Ba=new q;class im{constructor(e=new uo,t=new uo,n=new uo,r=new uo,o=new uo,s=new uo){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ur){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],b=r[13],S=r[14],M=r[15];if(n[0].setComponents(l-o,f-c,_-m,M-p).normalize(),n[1].setComponents(l+o,f+c,_+m,M+p).normalize(),n[2].setComponents(l+s,f+u,_+v,M+b).normalize(),n[3].setComponents(l-s,f-u,_-v,M-b).normalize(),n[4].setComponents(l-a,f-d,_-g,M-S).normalize(),t===ur)n[5].setComponents(l+a,f+d,_+g,M+S).normalize();else if(t===yl)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(e){return ro.center.set(0,0,0),ro.radius=.7071067811865476,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ba.x=r.normal.x>0?e.max.x:e.min.x,Ba.y=r.normal.y>0?e.max.y:e.min.y,Ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rm(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function zg(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class xi extends gr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const b=p*f-s;for(let S=0;S<c;S++){const M=S*d-o;v.push(M,-b,0),g.push(0,0,1),_.push(S/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const S=b+c*p,M=b+c*(p+1),L=b+1+c*(p+1),C=b+1+c*p;m.push(S,M,C),m.push(M,L,C)}this.setIndex(m),this.setAttribute("position",new wo(v,3)),this.setAttribute("normal",new wo(g,3)),this.setAttribute("uv",new wo(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kg=`#ifdef USE_ALPHAHASH
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
#endif`,Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
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
#endif`,qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg=`#ifdef USE_BATCHING
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
#endif`,$g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Qg=`#ifdef USE_BUMPMAP
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lv=`#define PI 3.141592653589793
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
} // validated`,cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uv=`vec3 transformedNormal = objectNormal;
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
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",_v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ev=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pv=`uniform bool receiveShadow;
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
#endif`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nv=`PhysicalMaterial material;
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
#endif`,Ov=`struct PhysicalMaterial {
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
}`,zv=`
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
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
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
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$v=`#if defined( USE_POINTS_UV )
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
#endif`,Zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
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
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wx=`float getShadowMask() {
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
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
#endif`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`#include <common>
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
}`,Xx=`#if DEPTH_PACKING == 3200
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
}`,qx=`#define DISTANCE
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
}`,Yx=`#define DISTANCE
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,Qx=`uniform vec3 diffuse;
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
}`,e1=`#define LAMBERT
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
}`,t1=`#define LAMBERT
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
}`,n1=`#define MATCAP
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
}`,i1=`#define MATCAP
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
}`,r1=`#define NORMAL
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
}`,o1=`#define NORMAL
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
}`,s1=`#define PHONG
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
}`,a1=`#define PHONG
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
}`,l1=`#define STANDARD
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
}`,c1=`#define STANDARD
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
}`,u1=`#define TOON
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
}`,h1=`#define TOON
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
}`,f1=`uniform float size;
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
}`,d1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 color;
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
}`,_1=`uniform float rotation;
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
}`,g1=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Bg,alphahash_pars_fragment:kg,alphamap_fragment:Hg,alphamap_pars_fragment:Vg,alphatest_fragment:Gg,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:qg,batching_pars_vertex:Yg,batching_vertex:$g,begin_vertex:Zg,beginnormal_vertex:Kg,bsdfs:jg,iridescence_fragment:Jg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:ev,clipping_planes_pars_fragment:tv,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:rv,color_pars_fragment:ov,color_pars_vertex:sv,color_vertex:av,common:lv,cube_uv_reflection_fragment:cv,defaultnormal_vertex:uv,displacementmap_pars_vertex:hv,displacementmap_vertex:fv,emissivemap_fragment:dv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:_v,envmap_fragment:gv,envmap_common_pars_fragment:vv,envmap_pars_fragment:xv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Lv,envmap_vertex:Sv,fog_vertex:Mv,fog_pars_vertex:wv,fog_fragment:bv,fog_pars_fragment:Tv,gradientmap_pars_fragment:Ev,lightmap_pars_fragment:Av,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Cv,lights_pars_begin:Pv,lights_toon_fragment:Dv,lights_toon_pars_fragment:Iv,lights_phong_fragment:Uv,lights_phong_pars_fragment:Fv,lights_physical_fragment:Nv,lights_physical_pars_fragment:Ov,lights_fragment_begin:zv,lights_fragment_maps:Bv,lights_fragment_end:kv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Vv,logdepthbuf_pars_vertex:Gv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:qv,map_particle_fragment:Yv,map_particle_pars_fragment:$v,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:Kv,morphinstance_vertex:jv,morphcolor_vertex:Jv,morphnormal_vertex:Qv,morphtarget_pars_vertex:ex,morphtarget_vertex:tx,normal_fragment_begin:nx,normal_fragment_maps:ix,normal_pars_fragment:rx,normal_pars_vertex:ox,normal_vertex:sx,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:cx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:hx,opaque_fragment:fx,packing:dx,premultiplied_alpha_fragment:px,project_vertex:mx,dithering_fragment:_x,dithering_pars_fragment:gx,roughnessmap_fragment:vx,roughnessmap_pars_fragment:xx,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:Sx,shadowmap_vertex:Mx,shadowmask_pars_fragment:wx,skinbase_vertex:bx,skinning_pars_vertex:Tx,skinning_vertex:Ex,skinnormal_vertex:Ax,specularmap_fragment:Rx,specularmap_pars_fragment:Cx,tonemapping_fragment:Px,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Ix,uv_pars_fragment:Ux,uv_pars_vertex:Fx,uv_vertex:Nx,worldpos_vertex:Ox,background_vert:zx,background_frag:Bx,backgroundCube_vert:kx,backgroundCube_frag:Hx,cube_vert:Vx,cube_frag:Gx,depth_vert:Wx,depth_frag:Xx,distanceRGBA_vert:qx,distanceRGBA_frag:Yx,equirect_vert:$x,equirect_frag:Zx,linedashed_vert:Kx,linedashed_frag:jx,meshbasic_vert:Jx,meshbasic_frag:Qx,meshlambert_vert:e1,meshlambert_frag:t1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:r1,meshnormal_frag:o1,meshphong_vert:s1,meshphong_frag:a1,meshphysical_vert:l1,meshphysical_frag:c1,meshtoon_vert:u1,meshtoon_frag:h1,points_vert:f1,points_frag:d1,shadow_vert:p1,shadow_frag:m1,sprite_vert:_1,sprite_frag:g1},Ne={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Oi={basic:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Je(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:In([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:In([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Je(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:In([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:In([Ne.points,Ne.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:In([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:In([Ne.common,Ne.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:In([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:In([Ne.sprite,Ne.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:In([Ne.common,Ne.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:In([Ne.lights,Ne.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Oi.physical={uniforms:In([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const ka={r:0,b:0,g:0},oo=new li,v1=new yt;function x1(i,e,t,n,r,o,s){const a=new Je(0);let l=o===!0?0:1,c,u,d=null,f=0,m=null;function v(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function g(b){let S=!1;const M=v(b);M===null?p(a,l):M&&M.isColor&&(p(M,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,S){const M=v(S);M&&(M.isCubeTexture||M.mapping===Rl)?(u===void 0&&(u=new Ut(new ua(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:gs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),oo.copy(S.backgroundRotation),oo.x*=-1,oo.y*=-1,oo.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(oo)),u.material.toneMapped=wt.getTransfer(M.colorSpace)!==Ct,(d!==M||f!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ut(new xi(2,2),new At({name:"BackgroundMaterial",uniforms:gs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=wt.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(ka,em(i)),n.buffers.color.setClear(ka.r,ka.g,ka.b,S,s)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:_}}function y1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function a(y,R,N,O,V){let H=!1;const G=d(O,N,R);o!==G&&(o=G,c(o.object)),H=m(y,O,N,V),H&&v(y,O,N,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,M(y,R,N,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,R,N){const O=N.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let H=V[R.id];H===void 0&&(H={},V[R.id]=H);let G=H[O];return G===void 0&&(G=f(l()),H[O]=G),G}function f(y){const R=[],N=[],O=[];for(let V=0;V<t;V++)R[V]=0,N[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:O,object:y,attributes:{},index:null}}function m(y,R,N,O){const V=o.attributes,H=R.attributes;let G=0;const Y=N.getAttributes();for(const z in Y)if(Y[z].location>=0){const X=V[z];let _e=H[z];if(_e===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),X===void 0||X.attribute!==_e||_e&&X.data!==_e.data)return!0;G++}return o.attributesNum!==G||o.index!==O}function v(y,R,N,O){const V={},H=R.attributes;let G=0;const Y=N.getAttributes();for(const z in Y)if(Y[z].location>=0){let X=H[z];X===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(X=y.instanceColor));const _e={};_e.attribute=X,X&&X.data&&(_e.data=X.data),V[z]=_e,G++}o.attributes=V,o.attributesNum=G,o.index=O}function g(){const y=o.newAttributes;for(let R=0,N=y.length;R<N;R++)y[R]=0}function _(y){p(y,0)}function p(y,R){const N=o.newAttributes,O=o.enabledAttributes,V=o.attributeDivisors;N[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),V[y]!==R&&(i.vertexAttribDivisor(y,R),V[y]=R)}function b(){const y=o.newAttributes,R=o.enabledAttributes;for(let N=0,O=R.length;N<O;N++)R[N]!==y[N]&&(i.disableVertexAttribArray(N),R[N]=0)}function S(y,R,N,O,V,H,G){G===!0?i.vertexAttribIPointer(y,R,N,V,H):i.vertexAttribPointer(y,R,N,O,V,H)}function M(y,R,N,O){g();const V=O.attributes,H=N.getAttributes(),G=R.defaultAttributeValues;for(const Y in H){const z=H[Y];if(z.location>=0){let se=V[Y];if(se===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const X=se.normalized,_e=se.itemSize,we=e.get(se);if(we===void 0)continue;const Re=we.buffer,J=we.type,te=we.bytesPerElement,ce=J===i.INT||J===i.UNSIGNED_INT||se.gpuType===uh;if(se.isInterleavedBufferAttribute){const ae=se.data,be=ae.stride,Oe=se.offset;if(ae.isInstancedInterleavedBuffer){for(let Ue=0;Ue<z.locationSize;Ue++)p(z.location+Ue,ae.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ue=0;Ue<z.locationSize;Ue++)_(z.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Ue=0;Ue<z.locationSize;Ue++)S(z.location+Ue,_e/z.locationSize,J,X,be*te,(Oe+_e/z.locationSize*Ue)*te,ce)}else{if(se.isInstancedBufferAttribute){for(let ae=0;ae<z.locationSize;ae++)p(z.location+ae,se.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ae=0;ae<z.locationSize;ae++)_(z.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ae=0;ae<z.locationSize;ae++)S(z.location+ae,_e/z.locationSize,J,X,_e*te,_e/z.locationSize*ae*te,ce)}}else if(G!==void 0){const X=G[Y];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(z.location,X);break;case 3:i.vertexAttrib3fv(z.location,X);break;case 4:i.vertexAttrib4fv(z.location,X);break;default:i.vertexAttrib1fv(z.location,X)}}}}b()}function L(){P();for(const y in n){const R=n[y];for(const N in R){const O=R[N];for(const V in O)u(O[V].object),delete O[V];delete R[N]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const N in R){const O=R[N];for(const V in O)u(O[V].object),delete O[V];delete R[N]}delete n[y.id]}function E(y){for(const R in n){const N=n[R];if(N[y.id]===void 0)continue;const O=N[y.id];for(const V in O)u(O[V].object),delete O[V];delete N[y.id]}}function P(){w(),s=!0,o!==r&&(o=r,c(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:_,disableUnusedAttributes:b}}function S1(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function M1(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==dn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ai&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Gn&&!P)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:L,maxSamples:C}}function w1(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new uo,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||o&&!_)o?u(null):c();else{const b=o?0:n,S=b*4;let M=p.clippingState||null;l.value=M,M=u(v,f,S,m);for(let L=0;L!==S;++L)M[L]=t[L];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<p)&&(_=new Float32Array(p));for(let S=0,M=m;S!==g;++S,M+=4)s.copy(d[S]).applyMatrix4(b,a),s.normal.toArray(_,M),_[M+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function b1(i){let e=new WeakMap;function t(s,a){return a===uu?s.mapping=ds:a===hu&&(s.mapping=ps),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===uu||a===hu)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Fg(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Ll extends tm{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jo=4,Of=[.125,.215,.35,.446,.526,.582],po=20,Sc=new Ll,zf=new Je;let Mc=null,wc=0,bc=0,Tc=!1;const ho=(1+Math.sqrt(5))/2,Yo=1/ho,Bf=[new q(-ho,Yo,0),new q(ho,Yo,0),new q(-Yo,0,ho),new q(Yo,0,ho),new q(0,ho,-Yo),new q(0,ho,Yo),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Mc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mc,wc,bc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Hi,format:dn,colorSpace:Xi,depthBuffer:!1},r=Hf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hf(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T1(o)),this._blurMaterial=E1(o,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Sc)}_sceneToCubeUV(e,t,n,r){const a=new Hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(zf),u.toneMapping=Gi,u.autoClear=!1;const m=new xh({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),v=new Ut(new ua,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(zf),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Ha(r,b*S,p>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ds||e.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Ut(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Sc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Bf[(r-o-1)%Bf.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ut(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*po-1),g=o/v,_=isFinite(o)?1+Math.floor(u*g):po;_>po&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${po}`);const p=[];let b=0;for(let E=0;E<po;++E){const P=E/g,w=Math.exp(-P*P/2);p.push(w),E===0?b+=w:E<_&&(b+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const M=this._sizeLods[r],L=3*M*(r>S-Jo?r-S+Jo:0),C=4*(this._cubeSize-M);Ha(t,L,C,3*M,2*M),l.setRenderTarget(t),l.render(d,Sc)}}function T1(i){const e=[],t=[],n=[];let r=i;const o=i-Jo+1+Of.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-Jo?l=Of[s-i+Jo-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,g=3,_=2,p=1,b=new Float32Array(g*v*m),S=new Float32Array(_*v*m),M=new Float32Array(p*v*m);for(let C=0;C<m;C++){const E=C%3*2/3-1,P=C>2?0:-1,w=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];b.set(w,g*v*C),S.set(f,_*v*C);const y=[C,C,C,C,C,C];M.set(y,p*v*C)}const L=new gr;L.setAttribute("position",new Yt(b,g)),L.setAttribute("uv",new Yt(S,_)),L.setAttribute("faceIndex",new Yt(M,p)),e.push(L),r>Jo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hf(i,e,t){const n=new _r(i,e,t);return n.texture.mapping=Rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function E1(i,e,t){const n=new Float32Array(po),r=new q(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:po,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Vf(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Gf(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function A1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===uu||l===hu,u=l===ds||l===ps;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new kf(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new kf(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function R1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function C1(i,e,t,n){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let S=0,M=b.length;S<M;S+=3){const L=b[S+0],C=b[S+1],E=b[S+2];f.push(L,C,C,E,E,L)}}else if(v!==void 0){const b=v.array;g=v.version;for(let S=0,M=b.length/3-1;S<M;S+=3){const L=S+0,C=S+1,E=S+2;f.push(L,C,C,E,E,L)}}else return;const _=new(Yp(f)?Qp:Jp)(f,1);_.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function P1(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,o,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function d(f,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=m[b]*g[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function L1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function D1(i,e,t){const n=new WeakMap,r=new Ft;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let L=a.attributes.position.count*M,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const E=new Float32Array(L*C*4*d),P=new Zp(E,L,C,d);P.type=Gn,P.needsUpdate=!0;const w=M*4;for(let R=0;R<d;R++){const N=p[R],O=b[R],V=S[R],H=L*C*4*R;for(let G=0;G<N.count;G++){const Y=G*w;v===!0&&(r.fromBufferAttribute(N,G),E[H+Y+0]=r.x,E[H+Y+1]=r.y,E[H+Y+2]=r.z,E[H+Y+3]=0),g===!0&&(r.fromBufferAttribute(O,G),E[H+Y+4]=r.x,E[H+Y+5]=r.y,E[H+Y+6]=r.z,E[H+Y+7]=0),_===!0&&(r.fromBufferAttribute(V,G),E[H+Y+8]=r.x,E[H+Y+9]=r.y,E[H+Y+10]=r.z,E[H+Y+11]=V.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new et(L,C)},n.set(a,f),a.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function I1(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class Sl extends mn{constructor(e,t,n,r,o,s,a,l,c,u=rs){if(u!==rs&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===rs&&(n=To),n===void 0&&u===_s&&(n=ms),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const om=new mn,Wf=new Sl(1,1),sm=new Zp,am=new mg,lm=new nm,Xf=[],qf=[],Yf=new Float32Array(16),$f=new Float32Array(9),Zf=new Float32Array(4);function Ss(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Xf[r];if(o===void 0&&(o=new Float32Array(r),Xf[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dl(i,e){let t=qf[e];t===void 0&&(t=new Int32Array(e),qf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function U1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function F1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function N1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function O1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function z1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(on(t,n))return;Zf.set(n),i.uniformMatrix2fv(this.addr,!1,Zf),sn(t,n)}}function B1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(on(t,n))return;$f.set(n),i.uniformMatrix3fv(this.addr,!1,$f),sn(t,n)}}function k1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(on(t,n))return;Yf.set(n),i.uniformMatrix4fv(this.addr,!1,Yf),sn(t,n)}}function H1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function V1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function G1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function W1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function X1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function q1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function Y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function $1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function Z1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Wf.compareFunction=qp,o=Wf):o=om,t.setTexture2D(e||o,r)}function K1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||am,r)}function j1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||lm,r)}function J1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||sm,r)}function Q1(i){switch(i){case 5126:return U1;case 35664:return F1;case 35665:return N1;case 35666:return O1;case 35674:return z1;case 35675:return B1;case 35676:return k1;case 5124:case 35670:return H1;case 35667:case 35671:return V1;case 35668:case 35672:return G1;case 35669:case 35673:return W1;case 5125:return X1;case 36294:return q1;case 36295:return Y1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return J1}}function ey(i,e){i.uniform1fv(this.addr,e)}function ty(i,e){const t=Ss(e,this.size,2);i.uniform2fv(this.addr,t)}function ny(i,e){const t=Ss(e,this.size,3);i.uniform3fv(this.addr,t)}function iy(i,e){const t=Ss(e,this.size,4);i.uniform4fv(this.addr,t)}function ry(i,e){const t=Ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function oy(i,e){const t=Ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sy(i,e){const t=Ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ay(i,e){i.uniform1iv(this.addr,e)}function ly(i,e){i.uniform2iv(this.addr,e)}function cy(i,e){i.uniform3iv(this.addr,e)}function uy(i,e){i.uniform4iv(this.addr,e)}function hy(i,e){i.uniform1uiv(this.addr,e)}function fy(i,e){i.uniform2uiv(this.addr,e)}function dy(i,e){i.uniform3uiv(this.addr,e)}function py(i,e){i.uniform4uiv(this.addr,e)}function my(i,e,t){const n=this.cache,r=e.length,o=Dl(t,r);on(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||om,o[s])}function _y(i,e,t){const n=this.cache,r=e.length,o=Dl(t,r);on(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||am,o[s])}function gy(i,e,t){const n=this.cache,r=e.length,o=Dl(t,r);on(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||lm,o[s])}function vy(i,e,t){const n=this.cache,r=e.length,o=Dl(t,r);on(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||sm,o[s])}function xy(i){switch(i){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return ry;case 35675:return oy;case 35676:return sy;case 5124:case 35670:return ay;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return uy;case 5125:return hy;case 36294:return fy;case 36295:return dy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return vy}}class yy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Q1(t.type)}}class Sy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xy(t.type)}}class My{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function Kf(i,e){i.seq.push(e),i.map[e.id]=e}function wy(i,e,t){const n=i.name,r=n.length;for(Ec.lastIndex=0;;){const o=Ec.exec(n),s=Ec.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Kf(t,c===void 0?new yy(a,i,e):new Sy(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new My(a),Kf(t,d)),t=d}}}class ll{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);wy(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function jf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const by=37297;let Ty=0;function Ey(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const Jf=new dt;function Ay(i){wt._getMatrix(Jf,wt.workingColorSpace,i);const e=`mat3( ${Jf.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Cl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ey(i.getShaderSource(e),s)}else return r}function Ry(i,e){const t=Ay(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cy(i,e){let t;switch(e){case E_:t="Linear";break;case A_:t="Reinhard";break;case R_:t="Cineon";break;case C_:t="ACESFilmic";break;case L_:t="AgX";break;case D_:t="Neutral";break;case P_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new q;function Py(){wt.getLuminanceCoefficients(Va);const i=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function Dy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Iy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Vs(i){return i!==""}function ed(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(i){return i.replace(Uy,Ny)}const Fy=new Map;function Ny(i,e){let t=mt[e];if(t===void 0){const n=Fy.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zu(t)}const Oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace(Oy,zy)}function zy(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function id(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function By(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function ky(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case ps:e="ENVMAP_TYPE_CUBE";break;case Rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Vy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fp:e="ENVMAP_BLENDING_MULTIPLY";break;case b_:e="ENVMAP_BLENDING_MIX";break;case T_:e="ENVMAP_BLENDING_ADD";break}return e}function Gy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wy(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=By(t),c=ky(t),u=Hy(t),d=Vy(t),f=Gy(t),m=Ly(t),v=Dy(o),g=r.createProgram();let _,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vs).join(`
`),p.length>0&&(p+=`
`)):(_=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),p=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?Cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Ry("linearToOutputTexel",t.outputColorSpace),Py(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),s=zu(s),s=ed(s,t),s=td(s,t),a=zu(a),a=ed(a,t),a=td(a,t),s=nd(s),a=nd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+_+s,M=b+p+a,L=jf(r,r.VERTEX_SHADER,S),C=jf(r,r.FRAGMENT_SHADER,M);r.attachShader(g,L),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function E(R){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(L).trim(),V=r.getShaderInfoLog(C).trim();let H=!0,G=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,C);else{const Y=Qf(r,L,"vertex"),z=Qf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+Y+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||V==="")&&(G=!1);G&&(R.diagnostics={runnable:H,programLog:N,vertexShader:{log:O,prefix:_},fragmentShader:{log:V,prefix:p}})}r.deleteShader(L),r.deleteShader(C),P=new ll(r,g),w=Iy(r,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,by)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ty++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=C,this}let Xy=0;class qy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yy(e),t.set(e,n)),n}}class Yy{constructor(e){this.id=Xy++,this.code=e,this.usedTimes=0}}function $y(i,e,t,n,r,o,s){const a=new Kp,l=new qy,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function _(w,y,R,N,O){const V=N.fog,H=O.geometry,G=w.isMeshStandardMaterial?N.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),z=Y&&Y.mapping===Rl?Y.image.height:null,se=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const X=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_e=X!==void 0?X.length:0;let we=0;H.morphAttributes.position!==void 0&&(we=1),H.morphAttributes.normal!==void 0&&(we=2),H.morphAttributes.color!==void 0&&(we=3);let Re,J,te,ce;if(se){const ht=Oi[se];Re=ht.vertexShader,J=ht.fragmentShader}else Re=w.vertexShader,J=w.fragmentShader,l.update(w),te=l.getVertexShaderID(w),ce=l.getFragmentShaderID(w);const ae=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Oe=O.isInstancedMesh===!0,Ue=O.isBatchedMesh===!0,qe=!!w.map,Ge=!!w.matcap,at=!!Y,B=!!w.aoMap,ze=!!w.lightMap,We=!!w.bumpMap,He=!!w.normalMap,Be=!!w.displacementMap,Xe=!!w.emissiveMap,Ee=!!w.metalnessMap,U=!!w.roughnessMap,A=w.anisotropy>0,k=w.clearcoat>0,K=w.dispersion>0,le=w.iridescence>0,Q=w.sheen>0,Ae=w.transmission>0,he=A&&!!w.anisotropyMap,me=k&&!!w.clearcoatMap,je=k&&!!w.clearcoatNormalMap,de=k&&!!w.clearcoatRoughnessMap,ue=le&&!!w.iridescenceMap,Se=le&&!!w.iridescenceThicknessMap,De=Q&&!!w.sheenColorMap,Ce=Q&&!!w.sheenRoughnessMap,Ye=!!w.specularMap,Ke=!!w.specularColorMap,tt=!!w.specularIntensityMap,W=Ae&&!!w.transmissionMap,ne=Ae&&!!w.thicknessMap,re=!!w.gradientMap,fe=!!w.alphaMap,Fe=w.alphaTest>0,Ie=!!w.alphaHash,nt=!!w.extensions;let bt=Gi;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(bt=i.toneMapping);const Xt={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:Re,fragmentShader:J,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ue,batchingColor:Ue&&O._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&O.instanceColor!==null,instancingMorph:Oe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Xi,alphaToCoverage:!!w.alphaToCoverage,map:qe,matcap:Ge,envMap:at,envMapMode:at&&Y.mapping,envMapCubeUVHeight:z,aoMap:B,lightMap:ze,bumpMap:We,normalMap:He,displacementMap:f&&Be,emissiveMap:Xe,normalMapObjectSpace:He&&w.normalMapType===O_,normalMapTangentSpace:He&&w.normalMapType===N_,metalnessMap:Ee,roughnessMap:U,anisotropy:A,anisotropyMap:he,clearcoat:k,clearcoatMap:me,clearcoatNormalMap:je,clearcoatRoughnessMap:de,dispersion:K,iridescence:le,iridescenceMap:ue,iridescenceThicknessMap:Se,sheen:Q,sheenColorMap:De,sheenRoughnessMap:Ce,specularMap:Ye,specularColorMap:Ke,specularIntensityMap:tt,transmission:Ae,transmissionMap:W,thicknessMap:ne,gradientMap:re,opaque:w.transparent===!1&&w.blending===Mo&&w.alphaToCoverage===!1,alphaMap:fe,alphaTest:Fe,alphaHash:Ie,combine:w.combine,mapUv:qe&&g(w.map.channel),aoMapUv:B&&g(w.aoMap.channel),lightMapUv:ze&&g(w.lightMap.channel),bumpMapUv:We&&g(w.bumpMap.channel),normalMapUv:He&&g(w.normalMap.channel),displacementMapUv:Be&&g(w.displacementMap.channel),emissiveMapUv:Xe&&g(w.emissiveMap.channel),metalnessMapUv:Ee&&g(w.metalnessMap.channel),roughnessMapUv:U&&g(w.roughnessMap.channel),anisotropyMapUv:he&&g(w.anisotropyMap.channel),clearcoatMapUv:me&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(w.sheenRoughnessMap.channel),specularMapUv:Ye&&g(w.specularMap.channel),specularColorMapUv:Ke&&g(w.specularColorMap.channel),specularIntensityMapUv:tt&&g(w.specularIntensityMap.channel),transmissionMapUv:W&&g(w.transmissionMap.channel),thicknessMapUv:ne&&g(w.thicknessMap.channel),alphaMapUv:fe&&g(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(He||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(qe||fe),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:we,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:qe&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===Ct,decodeVideoTextureEmissive:Xe&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===Ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===En,flipSided:w.side===$n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:nt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&w.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)y.push(R),y.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(b(y,w),S(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function b(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function S(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function M(w){const y=v[w.type];let R;if(y){const N=Oi[y];R=Lg.clone(N.uniforms)}else R=w.uniforms;return R}function L(w,y){let R;for(let N=0,O=u.length;N<O;N++){const V=u[N];if(V.cacheKey===y){R=V,++R.usedTimes;break}}return R===void 0&&(R=new Wy(i,y,w,o),u.push(R)),R}function C(w){if(--w.usedTimes===0){const y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function E(w){l.remove(w)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:C,releaseShaderCache:E,programs:u,dispose:P}}function Zy(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Ky(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function od(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,v,g,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=_),e++,p}function a(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||Ky),n.length>1&&n.sort(f||rd),r.length>1&&r.sort(f||rd)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function jy(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new od,i.set(n,[s])):r>=o.length?(s=new od,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Je};break;case"SpotLight":t={position:new q,direction:new q,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function Qy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let eS=0;function tS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nS(i){const e=new Jy,t=Qy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,o=new yt,s=new yt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,b=0,S=0,M=0,L=0,C=0,E=0;c.sort(tS);for(let w=0,y=c.length;w<y;w++){const R=c[w],N=R.color,O=R.intensity,V=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*O,d+=N.g*O,f+=N.b*O;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],O);E++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,z=t.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=G,m++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(N).multiplyScalar(O),G.distance=V,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[g]=G;const Y=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,Y.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[g]=Y.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=H,M++}g++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(N).multiplyScalar(O),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[_]=G,_++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Y=R.shadow,z=t.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[v]=z,n.pointShadowMap[v]=H,n.pointShadowMatrix[v]=R.shadow.matrix,S++}n.point[v]=G,v++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(O),G.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=G,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==M||P.numSpotMaps!==L||P.numLightProbes!==E)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,P.directionalLength=m,P.pointLength=v,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=M,P.numSpotMaps=L,P.numLightProbes=E,n.version=eS++)}function l(c,u){let d=0,f=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),d++}else if(S.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),m++}else if(S.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),s.identity(),o.copy(S.matrixWorld),o.premultiply(_),s.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),f++}else if(S.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function sd(i){const e=new nS(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function iS(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new sd(i),e.set(r,[a])):o>=s.length?(a=new sd(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class rS extends Pl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oS extends Pl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aS=`uniform sampler2D shadow_pass;
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
}`;function lS(i,e,t){let n=new im;const r=new et,o=new et,s=new Ft,a=new rS({depthPacking:F_}),l=new oS,c={},u=t.maxTextureSize,d={[Vr]:$n,[$n]:Vr,[En]:En},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:sS,fragmentShader:aS}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new gr;v.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ut(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Up;let p=this.type;this.render=function(C,E,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ei),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=p!==rr&&this.type===rr,V=p===rr&&this.type!==rr;for(let H=0,G=C.length;H<G;H++){const Y=C[H],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const se=z.getFrameExtents();if(r.multiply(se),o.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/se.x),r.x=o.x*se.x,z.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/se.y),r.y=o.y*se.y,z.mapSize.y=o.y)),z.map===null||O===!0||V===!0){const _e=this.type!==rr?{minFilter:rn,magFilter:rn}:{};z.map!==null&&z.map.dispose(),z.map=new _r(r.x,r.y,_e),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const X=z.getViewportCount();for(let _e=0;_e<X;_e++){const we=z.getViewport(_e);s.set(o.x*we.x,o.y*we.y,o.x*we.z,o.y*we.w),N.viewport(s),z.updateMatrices(Y,_e),n=z.getFrustum(),M(E,P,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===rr&&b(z,P),z.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(w,y,R)};function b(C,E){const P=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _r(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(E,null,P,f,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(E,null,P,m,g,null)}function S(C,E,P,w){let y=null;const R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=y.uuid,O=E.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let H=V[O];H===void 0&&(H=y.clone(),V[O]=H,E.addEventListener("dispose",L)),y=H}if(y.visible=E.visible,y.wireframe=E.wireframe,w===rr?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=P}return y}function M(C,E,P,w,y){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===rr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const O=e.update(C),V=C.material;if(Array.isArray(V)){const H=O.groups;for(let G=0,Y=H.length;G<Y;G++){const z=H[G],se=V[z.materialIndex];if(se&&se.visible){const X=S(C,se,w,y);C.onBeforeShadow(i,C,E,P,O,X,z),i.renderBufferDirect(P,null,O,X,C,z),C.onAfterShadow(i,C,E,P,O,X,z)}}}else if(V.visible){const H=S(C,V,w,y);C.onBeforeShadow(i,C,E,P,O,H,null),i.renderBufferDirect(P,null,O,H,C,null),C.onAfterShadow(i,C,E,P,O,H,null)}}const N=C.children;for(let O=0,V=N.length;O<V;O++)M(N[O],E,P,w,y)}function L(C){C.target.removeEventListener("dispose",L);for(const P in c){const w=c[P],y=C.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const cS={[iu]:ru,[ou]:lu,[su]:cu,[fs]:au,[ru]:iu,[lu]:ou,[cu]:su,[au]:fs};function uS(i,e){function t(){let W=!1;const ne=new Ft;let re=null;const fe=new Ft(0,0,0,0);return{setMask:function(Fe){re!==Fe&&!W&&(i.colorMask(Fe,Fe,Fe,Fe),re=Fe)},setLocked:function(Fe){W=Fe},setClear:function(Fe,Ie,nt,bt,Xt){Xt===!0&&(Fe*=bt,Ie*=bt,nt*=bt),ne.set(Fe,Ie,nt,bt),fe.equals(ne)===!1&&(i.clearColor(Fe,Ie,nt,bt),fe.copy(ne))},reset:function(){W=!1,re=null,fe.set(-1,0,0,0)}}}function n(){let W=!1,ne=!1,re=null,fe=null,Fe=null;return{setReversed:function(Ie){if(ne!==Ie){const nt=e.get("EXT_clip_control");ne?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);const bt=Fe;Fe=null,this.setClear(bt)}ne=Ie},getReversed:function(){return ne},setTest:function(Ie){Ie?ae(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Ie){re!==Ie&&!W&&(i.depthMask(Ie),re=Ie)},setFunc:function(Ie){if(ne&&(Ie=cS[Ie]),fe!==Ie){switch(Ie){case iu:i.depthFunc(i.NEVER);break;case ru:i.depthFunc(i.ALWAYS);break;case ou:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case su:i.depthFunc(i.EQUAL);break;case au:i.depthFunc(i.GEQUAL);break;case lu:i.depthFunc(i.GREATER);break;case cu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Ie}},setLocked:function(Ie){W=Ie},setClear:function(Ie){Fe!==Ie&&(ne&&(Ie=1-Ie),i.clearDepth(Ie),Fe=Ie)},reset:function(){W=!1,re=null,fe=null,Fe=null,ne=!1}}}function r(){let W=!1,ne=null,re=null,fe=null,Fe=null,Ie=null,nt=null,bt=null,Xt=null;return{setTest:function(ht){W||(ht?ae(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(ht){ne!==ht&&!W&&(i.stencilMask(ht),ne=ht)},setFunc:function(ht,Pt,Rn){(re!==ht||fe!==Pt||Fe!==Rn)&&(i.stencilFunc(ht,Pt,Rn),re=ht,fe=Pt,Fe=Rn)},setOp:function(ht,Pt,Rn){(Ie!==ht||nt!==Pt||bt!==Rn)&&(i.stencilOp(ht,Pt,Rn),Ie=ht,nt=Pt,bt=Rn)},setLocked:function(ht){W=ht},setClear:function(ht){Xt!==ht&&(i.clearStencil(ht),Xt=ht)},reset:function(){W=!1,ne=null,re=null,fe=null,Fe=null,Ie=null,nt=null,bt=null,Xt=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,S=null,M=null,L=null,C=null,E=new Je(0,0,0),P=0,w=!1,y=null,R=null,N=null,O=null,V=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=Y>=2);let se=null,X={};const _e=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Re=new Ft().fromArray(_e),J=new Ft().fromArray(we);function te(W,ne,re,fe){const Fe=new Uint8Array(4),Ie=i.createTexture();i.bindTexture(W,Ie),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<re;nt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(ne+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return Ie}const ce={};ce[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),s.setFunc(fs),We(!1),He(lf),ae(i.CULL_FACE),B(Ei);function ae(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function be(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function Oe(W,ne){return d[W]!==ne?(i.bindFramebuffer(W,ne),d[W]=ne,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ue(W,ne){let re=m,fe=!1;if(W){re=f.get(ne),re===void 0&&(re=[],f.set(ne,re));const Fe=W.textures;if(re.length!==Fe.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ie=0,nt=Fe.length;Ie<nt;Ie++)re[Ie]=i.COLOR_ATTACHMENT0+Ie;re.length=Fe.length,fe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,fe=!0);fe&&i.drawBuffers(re)}function qe(W){return v!==W?(i.useProgram(W),v=W,!0):!1}const Ge={[Fn]:i.FUNC_ADD,[c_]:i.FUNC_SUBTRACT,[u_]:i.FUNC_REVERSE_SUBTRACT};Ge[h_]=i.MIN,Ge[f_]=i.MAX;const at={[nl]:i.ZERO,[pi]:i.ONE,[d_]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[x_]:i.SRC_ALPHA_SATURATE,[g_]:i.DST_COLOR,[m_]:i.DST_ALPHA,[p_]:i.ONE_MINUS_SRC_COLOR,[vl]:i.ONE_MINUS_SRC_ALPHA,[v_]:i.ONE_MINUS_DST_COLOR,[__]:i.ONE_MINUS_DST_ALPHA,[y_]:i.CONSTANT_COLOR,[S_]:i.ONE_MINUS_CONSTANT_COLOR,[M_]:i.CONSTANT_ALPHA,[w_]:i.ONE_MINUS_CONSTANT_ALPHA};function B(W,ne,re,fe,Fe,Ie,nt,bt,Xt,ht){if(W===Ei){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(ae(i.BLEND),g=!0),W!==sa){if(W!==_||ht!==w){if((p!==Fn||M!==Fn)&&(i.blendEquation(i.FUNC_ADD),p=Fn,M=Fn),ht)switch(W){case Mo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cf:i.blendFunc(i.ONE,i.ONE);break;case uf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,S=null,L=null,C=null,E.set(0,0,0),P=0,_=W,w=ht}return}Fe=Fe||ne,Ie=Ie||re,nt=nt||fe,(ne!==p||Fe!==M)&&(i.blendEquationSeparate(Ge[ne],Ge[Fe]),p=ne,M=Fe),(re!==b||fe!==S||Ie!==L||nt!==C)&&(i.blendFuncSeparate(at[re],at[fe],at[Ie],at[nt]),b=re,S=fe,L=Ie,C=nt),(bt.equals(E)===!1||Xt!==P)&&(i.blendColor(bt.r,bt.g,bt.b,Xt),E.copy(bt),P=Xt),_=W,w=!1}function ze(W,ne){W.side===En?be(i.CULL_FACE):ae(i.CULL_FACE);let re=W.side===$n;ne&&(re=!re),We(re),W.blending===Mo&&W.transparent===!1?B(Ei):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),o.setMask(W.colorWrite);const fe=W.stencilWrite;a.setTest(fe),fe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Xe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(W){y!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),y=W)}function He(W){W!==s_?(ae(i.CULL_FACE),W!==R&&(W===lf?i.cullFace(i.BACK):W===a_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),R=W}function Be(W){W!==N&&(G&&i.lineWidth(W),N=W)}function Xe(W,ne,re){W?(ae(i.POLYGON_OFFSET_FILL),(O!==ne||V!==re)&&(i.polygonOffset(ne,re),O=ne,V=re)):be(i.POLYGON_OFFSET_FILL)}function Ee(W){W?ae(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function U(W){W===void 0&&(W=i.TEXTURE0+H-1),se!==W&&(i.activeTexture(W),se=W)}function A(W,ne,re){re===void 0&&(se===null?re=i.TEXTURE0+H-1:re=se);let fe=X[re];fe===void 0&&(fe={type:void 0,texture:void 0},X[re]=fe),(fe.type!==W||fe.texture!==ne)&&(se!==re&&(i.activeTexture(re),se=re),i.bindTexture(W,ne||ce[W]),fe.type=W,fe.texture=ne)}function k(){const W=X[se];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(W){Re.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Re.copy(W))}function Ce(W){J.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function Ye(W,ne){let re=c.get(ne);re===void 0&&(re=new WeakMap,c.set(ne,re));let fe=re.get(W);fe===void 0&&(fe=i.getUniformBlockIndex(ne,W.name),re.set(W,fe))}function Ke(W,ne){const fe=c.get(ne).get(W);l.get(ne)!==fe&&(i.uniformBlockBinding(ne,fe,W.__bindingPointIndex),l.set(ne,fe))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,X={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,S=null,M=null,L=null,C=null,E=new Je(0,0,0),P=0,w=!1,y=null,R=null,N=null,O=null,V=null,Re.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ae,disable:be,bindFramebuffer:Oe,drawBuffers:Ue,useProgram:qe,setBlending:B,setMaterial:ze,setFlipSided:We,setCullFace:He,setLineWidth:Be,setPolygonOffset:Xe,setScissorTest:Ee,activeTexture:U,bindTexture:A,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:le,texImage2D:ue,texImage3D:Se,updateUBOMapping:Ye,uniformBlockBinding:Ke,texStorage2D:je,texStorage3D:de,texSubImage2D:Q,texSubImage3D:Ae,compressedTexSubImage2D:he,compressedTexSubImage3D:me,scissor:De,viewport:Ce,reset:tt}}function ad(i,e,t,n){const r=hS(n);switch(t){case kp:return i*e;case Vp:return i*e;case Gp:return i*e*2;case dh:return i*e/r.components*r.byteLength;case ph:return i*e/r.components*r.byteLength;case Wp:return i*e*2/r.components*r.byteLength;case mh:return i*e*2/r.components*r.byteLength;case Hp:return i*e*3/r.components*r.byteLength;case dn:return i*e*4/r.components*r.byteLength;case _h:return i*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ol:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case du:case mu:return Math.max(i,16)*Math.max(e,8)/4;case fu:case pu:return Math.max(i,8)*Math.max(e,8)/2;case _u:case gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Su:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Du:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case al:case Iu:case Uu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xp:case Fu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nu:case Ou:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hS(i){switch(i){case Ai:case Op:return{byteLength:1,components:1};case bo:case zp:case Hi:return{byteLength:2,components:1};case hh:case fh:return{byteLength:2,components:4};case To:case uh:case Gn:return{byteLength:4,components:1};case Bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fS(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,A){return m?new OffscreenCanvas(U,A):la("canvas")}function g(U,A,k){let K=1;const le=Ee(U);if((le.width>k||le.height>k)&&(K=k/Math.max(le.width,le.height)),K<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Q=Math.floor(K*le.width),Ae=Math.floor(K*le.height);d===void 0&&(d=v(Q,Ae));const he=A?v(Q,Ae):d;return he.width=Q,he.height=Ae,he.getContext("2d").drawImage(U,0,0,Q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+Ae+")."),he}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),U;return U}function _(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,A,k,K,le=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Q=A;if(A===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8)),A===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),A===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8)),A===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),A===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),A===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),A===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),A===i.RGBA){const Ae=le?Cl:wt.getTransfer(K);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=Ae===Ct?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(U,A){let k;return U?A===null||A===To||A===ms?k=i.DEPTH24_STENCIL8:A===Gn?k=i.DEPTH32F_STENCIL8:A===bo&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===To||A===ms?k=i.DEPTH_COMPONENT24:A===Gn?k=i.DEPTH_COMPONENT32F:A===bo&&(k=i.DEPTH_COMPONENT16),k}function L(U,A){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==rn&&U.minFilter!==vt?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function C(U){const A=U.target;A.removeEventListener("dispose",C),P(A),A.isVideoTexture&&u.delete(A)}function E(U){const A=U.target;A.removeEventListener("dispose",E),y(A)}function P(U){const A=n.get(U);if(A.__webglInit===void 0)return;const k=U.source,K=f.get(k);if(K){const le=K[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&w(U),Object.keys(K).length===0&&f.delete(k)}n.remove(U)}function w(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const k=U.source,K=f.get(k);delete K[A.__cacheKey],s.memory.textures--}function y(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(A.__webglFramebuffer[K]))for(let le=0;le<A.__webglFramebuffer[K].length;le++)i.deleteFramebuffer(A.__webglFramebuffer[K][le]);else i.deleteFramebuffer(A.__webglFramebuffer[K]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[K])}else{if(Array.isArray(A.__webglFramebuffer))for(let K=0;K<A.__webglFramebuffer.length;K++)i.deleteFramebuffer(A.__webglFramebuffer[K]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let K=0;K<A.__webglColorRenderbuffer.length;K++)A.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[K]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const k=U.textures;for(let K=0,le=k.length;K<le;K++){const Q=n.get(k[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),s.memory.textures--),n.remove(k[K])}n.remove(U)}let R=0;function N(){R=0}function O(){const U=R;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),R+=1,U}function V(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function H(U,A){const k=n.get(U);if(U.isVideoTexture&&Be(U),U.isRenderTargetTexture===!1&&U.version>0&&k.__version!==U.version){const K=U.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(k,U,A);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+A)}function G(U,A){const k=n.get(U);if(U.version>0&&k.__version!==U.version){J(k,U,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+A)}function Y(U,A){const k=n.get(U);if(U.version>0&&k.__version!==U.version){J(k,U,A);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+A)}function z(U,A){const k=n.get(U);if(U.version>0&&k.__version!==U.version){te(k,U,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+A)}const se={[is]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[xl]:i.MIRRORED_REPEAT},X={[rn]:i.NEAREST,[I_]:i.NEAREST_MIPMAP_NEAREST,[Ma]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[ec]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},_e={[z_]:i.NEVER,[W_]:i.ALWAYS,[B_]:i.LESS,[qp]:i.LEQUAL,[k_]:i.EQUAL,[G_]:i.GEQUAL,[H_]:i.GREATER,[V_]:i.NOTEQUAL};function we(U,A){if(A.type===Gn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===vt||A.magFilter===ec||A.magFilter===Ma||A.magFilter===ki||A.minFilter===vt||A.minFilter===ec||A.minFilter===Ma||A.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,se[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,se[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,se[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,X[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,X[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,_e[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===rn||A.minFilter!==Ma&&A.minFilter!==ki||A.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Re(U,A){let k=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",C));const K=A.source;let le=f.get(K);le===void 0&&(le={},f.set(K,le));const Q=V(A);if(Q!==U.__cacheKey){le[Q]===void 0&&(le[Q]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,k=!0),le[Q].usedTimes++;const Ae=le[U.__cacheKey];Ae!==void 0&&(le[U.__cacheKey].usedTimes--,Ae.usedTimes===0&&w(A)),U.__cacheKey=Q,U.__webglTexture=le[Q].texture}return k}function J(U,A,k){let K=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(K=i.TEXTURE_3D);const le=Re(U,A),Q=A.source;t.bindTexture(K,U.__webglTexture,i.TEXTURE0+k);const Ae=n.get(Q);if(Q.version!==Ae.__version||le===!0){t.activeTexture(i.TEXTURE0+k);const he=wt.getPrimaries(wt.workingColorSpace),me=A.colorSpace===en?null:wt.getPrimaries(A.colorSpace),je=A.colorSpace===en||he===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let de=g(A.image,!1,r.maxTextureSize);de=Xe(A,de);const ue=o.convert(A.format,A.colorSpace),Se=o.convert(A.type);let De=S(A.internalFormat,ue,Se,A.colorSpace,A.isVideoTexture);we(K,A);let Ce;const Ye=A.mipmaps,Ke=A.isVideoTexture!==!0,tt=Ae.__version===void 0||le===!0,W=Q.dataReady,ne=L(A,de);if(A.isDepthTexture)De=M(A.format===_s,A.type),tt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,De,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,De,de.width,de.height,0,ue,Se,null));else if(A.isDataTexture)if(Ye.length>0){Ke&&tt&&t.texStorage2D(i.TEXTURE_2D,ne,De,Ye[0].width,Ye[0].height);for(let re=0,fe=Ye.length;re<fe;re++)Ce=Ye[re],Ke?W&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,ue,Se,Ce.data):t.texImage2D(i.TEXTURE_2D,re,De,Ce.width,Ce.height,0,ue,Se,Ce.data);A.generateMipmaps=!1}else Ke?(tt&&t.texStorage2D(i.TEXTURE_2D,ne,De,de.width,de.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,ue,Se,de.data)):t.texImage2D(i.TEXTURE_2D,0,De,de.width,de.height,0,ue,Se,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ke&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,De,Ye[0].width,Ye[0].height,de.depth);for(let re=0,fe=Ye.length;re<fe;re++)if(Ce=Ye[re],A.format!==dn)if(ue!==null)if(Ke){if(W)if(A.layerUpdates.size>0){const Fe=ad(Ce.width,Ce.height,A.format,A.type);for(const Ie of A.layerUpdates){const nt=Ce.data.subarray(Ie*Fe/Ce.data.BYTES_PER_ELEMENT,(Ie+1)*Fe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ie,Ce.width,Ce.height,1,ue,nt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ce.width,Ce.height,de.depth,ue,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,De,Ce.width,Ce.height,de.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ce.width,Ce.height,de.depth,ue,Se,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,De,Ce.width,Ce.height,de.depth,0,ue,Se,Ce.data)}else{Ke&&tt&&t.texStorage2D(i.TEXTURE_2D,ne,De,Ye[0].width,Ye[0].height);for(let re=0,fe=Ye.length;re<fe;re++)Ce=Ye[re],A.format!==dn?ue!==null?Ke?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,ue,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,re,De,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?W&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,ue,Se,Ce.data):t.texImage2D(i.TEXTURE_2D,re,De,Ce.width,Ce.height,0,ue,Se,Ce.data)}else if(A.isDataArrayTexture)if(Ke){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,De,de.width,de.height,de.depth),W)if(A.layerUpdates.size>0){const re=ad(de.width,de.height,A.format,A.type);for(const fe of A.layerUpdates){const Fe=de.data.subarray(fe*re/de.data.BYTES_PER_ELEMENT,(fe+1)*re/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,de.width,de.height,1,ue,Se,Fe)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ue,Se,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,de.width,de.height,de.depth,0,ue,Se,de.data);else if(A.isData3DTexture)Ke?(tt&&t.texStorage3D(i.TEXTURE_3D,ne,De,de.width,de.height,de.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ue,Se,de.data)):t.texImage3D(i.TEXTURE_3D,0,De,de.width,de.height,de.depth,0,ue,Se,de.data);else if(A.isFramebufferTexture){if(tt)if(Ke)t.texStorage2D(i.TEXTURE_2D,ne,De,de.width,de.height);else{let re=de.width,fe=de.height;for(let Fe=0;Fe<ne;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,De,re,fe,0,ue,Se,null),re>>=1,fe>>=1}}else if(Ye.length>0){if(Ke&&tt){const re=Ee(Ye[0]);t.texStorage2D(i.TEXTURE_2D,ne,De,re.width,re.height)}for(let re=0,fe=Ye.length;re<fe;re++)Ce=Ye[re],Ke?W&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ue,Se,Ce):t.texImage2D(i.TEXTURE_2D,re,De,ue,Se,Ce);A.generateMipmaps=!1}else if(Ke){if(tt){const re=Ee(de);t.texStorage2D(i.TEXTURE_2D,ne,De,re.width,re.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Se,de)}else t.texImage2D(i.TEXTURE_2D,0,De,ue,Se,de);_(A)&&p(K),Ae.__version=Q.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function te(U,A,k){if(A.image.length!==6)return;const K=Re(U,A),le=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+k);const Q=n.get(le);if(le.version!==Q.__version||K===!0){t.activeTexture(i.TEXTURE0+k);const Ae=wt.getPrimaries(wt.workingColorSpace),he=A.colorSpace===en?null:wt.getPrimaries(A.colorSpace),me=A.colorSpace===en||Ae===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const je=A.isCompressedTexture||A.image[0].isCompressedTexture,de=A.image[0]&&A.image[0].isDataTexture,ue=[];for(let fe=0;fe<6;fe++)!je&&!de?ue[fe]=g(A.image[fe],!0,r.maxCubemapSize):ue[fe]=de?A.image[fe].image:A.image[fe],ue[fe]=Xe(A,ue[fe]);const Se=ue[0],De=o.convert(A.format,A.colorSpace),Ce=o.convert(A.type),Ye=S(A.internalFormat,De,Ce,A.colorSpace),Ke=A.isVideoTexture!==!0,tt=Q.__version===void 0||K===!0,W=le.dataReady;let ne=L(A,Se);we(i.TEXTURE_CUBE_MAP,A);let re;if(je){Ke&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Ye,Se.width,Se.height);for(let fe=0;fe<6;fe++){re=ue[fe].mipmaps;for(let Fe=0;Fe<re.length;Fe++){const Ie=re[Fe];A.format!==dn?De!==null?Ke?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,0,0,Ie.width,Ie.height,De,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,Ye,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,0,0,Ie.width,Ie.height,De,Ce,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,Ye,Ie.width,Ie.height,0,De,Ce,Ie.data)}}}else{if(re=A.mipmaps,Ke&&tt){re.length>0&&ne++;const fe=Ee(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Ye,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(de){Ke?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ue[fe].width,ue[fe].height,De,Ce,ue[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ye,ue[fe].width,ue[fe].height,0,De,Ce,ue[fe].data);for(let Fe=0;Fe<re.length;Fe++){const nt=re[Fe].image[fe].image;Ke?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,0,0,nt.width,nt.height,De,Ce,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,Ye,nt.width,nt.height,0,De,Ce,nt.data)}}else{Ke?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,De,Ce,ue[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ye,De,Ce,ue[fe]);for(let Fe=0;Fe<re.length;Fe++){const Ie=re[Fe];Ke?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,0,0,De,Ce,Ie.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,Ye,De,Ce,Ie.image[fe])}}}_(A)&&p(i.TEXTURE_CUBE_MAP),Q.__version=le.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ce(U,A,k,K,le,Q){const Ae=o.convert(k.format,k.colorSpace),he=o.convert(k.type),me=S(k.internalFormat,Ae,he,k.colorSpace),je=n.get(A),de=n.get(k);if(de.__renderTarget=A,!je.__hasExternalTextures){const ue=Math.max(1,A.width>>Q),Se=Math.max(1,A.height>>Q);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,Q,me,ue,Se,A.depth,0,Ae,he,null):t.texImage2D(le,Q,me,ue,Se,0,Ae,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),He(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,le,de.__webglTexture,0,We(A)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,le,de.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(U,A,k){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const K=A.depthTexture,le=K&&K.isDepthTexture?K.type:null,Q=M(A.stencilBuffer,le),Ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=We(A);He(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Q,A.width,A.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Q,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,U)}else{const K=A.textures;for(let le=0;le<K.length;le++){const Q=K[le],Ae=o.convert(Q.format,Q.colorSpace),he=o.convert(Q.type),me=S(Q.internalFormat,Ae,he,Q.colorSpace),je=We(A);k&&He(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,me,A.width,A.height):He(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,me,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,me,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(A.depthTexture);K.__renderTarget=A,(!K.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);const le=K.__webglTexture,Q=We(A);if(A.depthTexture.format===rs)He(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(A.depthTexture.format===_s)He(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Oe(U){const A=n.get(U),k=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const K=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),K){const le=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,K.removeEventListener("dispose",le)};K.addEventListener("dispose",le),A.__depthDisposeCallback=le}A.__boundDepthTexture=K}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");be(A.__webglFramebuffer,U)}else if(k){A.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[K]),A.__webglDepthbuffer[K]===void 0)A.__webglDepthbuffer[K]=i.createRenderbuffer(),ae(A.__webglDepthbuffer[K],U,!1);else{const le=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ae(A.__webglDepthbuffer,U,!1);else{const K=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(U,A,k){const K=n.get(U);A!==void 0&&ce(K.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Oe(U)}function qe(U){const A=U.texture,k=n.get(U),K=n.get(A);U.addEventListener("dispose",E);const le=U.textures,Q=U.isWebGLCubeRenderTarget===!0,Ae=le.length>1;if(Ae||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=A.version,s.memory.textures++),Q){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let me=0;me<A.mipmaps.length;me++)k.__webglFramebuffer[he][me]=i.createFramebuffer()}else k.__webglFramebuffer[he]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)k.__webglFramebuffer[he]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let he=0,me=le.length;he<me;he++){const je=n.get(le[he]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),s.memory.textures++)}if(U.samples>0&&He(U)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const me=le[he];k.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const je=o.convert(me.format,me.colorSpace),de=o.convert(me.type),ue=S(me.internalFormat,je,de,me.colorSpace,U.isXRRenderTarget===!0),Se=We(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ue,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,k.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),we(i.TEXTURE_CUBE_MAP,A);for(let he=0;he<6;he++)if(A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)ce(k.__webglFramebuffer[he][me],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else ce(k.__webglFramebuffer[he],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,me=le.length;he<me;he++){const je=le[he],de=n.get(je);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),we(i.TEXTURE_2D,je),ce(k.__webglFramebuffer,U,je,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),_(je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,K.__webglTexture),we(he,A),A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)ce(k.__webglFramebuffer[me],U,A,i.COLOR_ATTACHMENT0,he,me);else ce(k.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,he,0);_(A)&&p(he),t.unbindTexture()}U.depthBuffer&&Oe(U)}function Ge(U){const A=U.textures;for(let k=0,K=A.length;k<K;k++){const le=A[k];if(_(le)){const Q=b(U),Ae=n.get(le).__webglTexture;t.bindTexture(Q,Ae),p(Q),t.unbindTexture()}}}const at=[],B=[];function ze(U){if(U.samples>0){if(He(U)===!1){const A=U.textures,k=U.width,K=U.height;let le=i.COLOR_BUFFER_BIT;const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(U),he=A.length>1;if(he)for(let me=0;me<A.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let me=0;me<A.length;me++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[me]);const je=n.get(A[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,le,i.NEAREST),l===!0&&(at.length=0,B.length=0,at.push(i.COLOR_ATTACHMENT0+me),U.depthBuffer&&U.resolveDepthBuffer===!1&&(at.push(Q),B.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let me=0;me<A.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[me]);const je=n.get(A[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function We(U){return Math.min(r.maxSamples,U.samples)}function He(U){const A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Be(U){const A=s.render.frame;u.get(U)!==A&&(u.set(U,A),U.update())}function Xe(U,A){const k=U.colorSpace,K=U.format,le=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||k!==Xi&&k!==en&&(wt.getTransfer(k)===Ct?(K!==dn||le!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),A}function Ee(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=Ue,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=He}function dS(i,e){function t(n,r=en){let o;const s=wt.getTransfer(r);if(n===Ai)return i.UNSIGNED_BYTE;if(n===hh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Op)return i.BYTE;if(n===zp)return i.SHORT;if(n===bo)return i.UNSIGNED_SHORT;if(n===uh)return i.INT;if(n===To)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Hi)return i.HALF_FLOAT;if(n===kp)return i.ALPHA;if(n===Hp)return i.RGB;if(n===dn)return i.RGBA;if(n===Vp)return i.LUMINANCE;if(n===Gp)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===dh)return i.RED;if(n===ph)return i.RED_INTEGER;if(n===Wp)return i.RG;if(n===mh)return i.RG_INTEGER;if(n===_h)return i.RGBA_INTEGER;if(n===il||n===rl||n===ol||n===sl)if(s===Ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===il)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===il)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ol)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fu||n===du||n===pu||n===mu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===fu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===du)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_u||n===gu||n===vu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===_u||n===gu)return s===Ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===vu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xu||n===yu||n===Su||n===Mu||n===wu||n===bu||n===Tu||n===Eu||n===Au||n===Ru||n===Cu||n===Pu||n===Lu||n===Du)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===xu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Su)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Au)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ru)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lu)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Du)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===al||n===Iu||n===Uu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===al)return s===Ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Iu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xp||n===Fu||n===Nu||n===Ou)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===al)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Fu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ou)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class pS extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vi extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mS={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
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

}`;class vS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new mn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new At({vertexShader:_S,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xS extends vs{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const g=new vS,_=t.getContextAttributes();let p=null,b=null;const S=[],M=[],L=new et;let C=null;const E=new Hn;E.viewport=new Ft;const P=new Hn;P.viewport=new Ft;const w=[E,P],y=new pS;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=S[J];return te===void 0&&(te=new Ac,S[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=S[J];return te===void 0&&(te=new Ac,S[J]=te),te.getGripSpace()},this.getHand=function(J){let te=S[J];return te===void 0&&(te=new Ac,S[J]=te),te.getHandSpace()};function O(J){const te=M.indexOf(J.inputSource);if(te===-1)return;const ce=S[te];ce!==void 0&&(ce.update(J.inputSource,J.frame,c||s),ce.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",H);for(let J=0;J<S.length;J++){const te=M[J];te!==null&&(M[J]=null,S[J].disconnect(te))}R=null,N=null,g.reset(),e.setRenderTarget(p),m=null,f=null,d=null,r=null,b=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new _r(m.framebufferWidth,m.framebufferHeight,{format:dn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let te=null,ce=null,ae=null;_.depth&&(ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?_s:rs,ce=_.stencil?ms:To);const be={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new _r(f.textureWidth,f.textureHeight,{format:dn,type:Ai,depthTexture:new Sl(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(J){for(let te=0;te<J.removed.length;te++){const ce=J.removed[te],ae=M.indexOf(ce);ae>=0&&(M[ae]=null,S[ae].disconnect(ce))}for(let te=0;te<J.added.length;te++){const ce=J.added[te];let ae=M.indexOf(ce);if(ae===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=M.length){M.push(ce),ae=Oe;break}else if(M[Oe]===null){M[Oe]=ce,ae=Oe;break}if(ae===-1)break}const be=S[ae];be&&be.connect(ce)}}const G=new q,Y=new q;function z(J,te,ce){G.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const ae=G.distanceTo(Y),be=te.projectionMatrix.elements,Oe=ce.projectionMatrix.elements,Ue=be[14]/(be[10]-1),qe=be[14]/(be[10]+1),Ge=(be[9]+1)/be[5],at=(be[9]-1)/be[5],B=(be[8]-1)/be[0],ze=(Oe[8]+1)/Oe[0],We=Ue*B,He=Ue*ze,Be=ae/(-B+ze),Xe=Be*-B;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xe),J.translateZ(Be),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ee=Ue+Be,U=qe+Be,A=We-Xe,k=He+(ae-Xe),K=Ge*qe/U*Ee,le=at*qe/U*Ee;J.projectionMatrix.makePerspective(A,k,K,le,Ee,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let te=J.near,ce=J.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),y.near=P.near=E.near=te,y.far=P.far=E.far=ce,(R!==y.near||N!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,N=y.far),E.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,y.layers.mask=E.layers.mask|P.layers.mask;const ae=J.parent,be=y.cameras;se(y,ae);for(let Oe=0;Oe<be.length;Oe++)se(be[Oe],ae);be.length===2?z(y,E,P):y.projectionMatrix.copy(E.projectionMatrix),X(J,y,ae)};function X(J,te,ce){ce===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=aa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let _e=null;function we(J,te){if(u=te.getViewerPose(c||s),v=te,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ae=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Oe=0;Oe<ce.length;Oe++){const Ue=ce[Oe];let qe=null;if(m!==null)qe=m.getViewport(Ue);else{const at=d.getViewSubImage(f,Ue);qe=at.viewport,Oe===0&&(e.setRenderTargetTextures(b,at.colorTexture,f.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(b))}let Ge=w[Oe];Ge===void 0&&(Ge=new Hn,Ge.layers.enable(Oe),Ge.viewport=new Ft,w[Oe]=Ge),Ge.matrix.fromArray(Ue.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ue.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(qe.x,qe.y,qe.width,qe.height),Oe===0&&(y.matrix.copy(Ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Ge)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Oe=d.getDepthInformation(ce[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(e,Oe,r.renderState)}}for(let ce=0;ce<S.length;ce++){const ae=M[ce],be=S[ce];ae!==null&&be!==void 0&&be.update(ae,te,c||s)}_e&&_e(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const Re=new rm;Re.setAnimationLoop(we),this.setAnimationLoop=function(J){_e=J},this.dispose=function(){}}}const so=new li,yS=new yt;function SS(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,em(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,b,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,M)):p.isMeshMatcapMaterial?(o(_,p),v(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),g(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,b,S):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===$n&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===$n&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,M=b.envMapRotation;S&&(_.envMap.value=S,so.copy(M),so.x*=-1,so.y*=-1,so.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(so.y*=-1,so.z*=-1),_.envMapRotation.value.setFromMatrix4(yS.makeRotationFromEuler(so)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,b,S){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*b,_.scale.value=S*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,b){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$n&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const b=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function MS(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const M=S.program;n.uniformBlockBinding(b,M)}function c(b,S){let M=r[b.id];M===void 0&&(v(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",_));const L=S.program;n.updateUBOMapping(b,L);const C=e.render.frame;o[b.id]!==C&&(f(b),o[b.id]=C)}function u(b){const S=d();b.__bindingPointIndex=S;const M=i.createBuffer(),L=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=r[b.id],M=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,E=M.length;C<E;C++){const P=Array.isArray(M[C])?M[C]:[M[C]];for(let w=0,y=P.length;w<y;w++){const R=P[w];if(m(R,C,w,L)===!0){const N=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let H=0;H<O.length;H++){const G=O[H],Y=g(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+V,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,S,M,L){const C=b.value,E=S+"_"+M;if(L[E]===void 0)return typeof C=="number"||typeof C=="boolean"?L[E]=C:L[E]=C.clone(),!0;{const P=L[E];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return L[E]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function v(b){const S=b.uniforms;let M=0;const L=16;for(let E=0,P=S.length;E<P;E++){const w=Array.isArray(S[E])?S[E]:[S[E]];for(let y=0,R=w.length;y<R;y++){const N=w[y],O=Array.isArray(N.value)?N.value:[N.value];for(let V=0,H=O.length;V<H;V++){const G=O[V],Y=g(G),z=M%L,se=z%Y.boundary,X=z+se;M+=se,X!==0&&L-X<Y.storage&&(M+=L-X),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=Y.storage}}}const C=M%L;return C>0&&(M+=L-C),b.__size=M,b.__cache={},this}function g(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function _(b){const S=b.target;S.removeEventListener("dispose",_);const M=s.indexOf(S.__bindingPointIndex);s.splice(M,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class Il{constructor(e={}){const{canvas:t=ag(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=Gi,this.toneMappingExposure=1;const M=this;let L=!1,C=0,E=0,P=null,w=-1,y=null;const R=new Ft,N=new Ft;let O=null;const V=new Je(0);let H=0,G=t.width,Y=t.height,z=1,se=null,X=null;const _e=new Ft(0,0,G,Y),we=new Ft(0,0,G,Y);let Re=!1;const J=new im;let te=!1,ce=!1;const ae=new yt,be=new yt,Oe=new q,Ue=new Ft,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function at(){return P===null?z:1}let B=n;function ze(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ch}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),B===null){const x="webgl2";if(B=ze(x,h),B===null)throw ze(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let We,He,Be,Xe,Ee,U,A,k,K,le,Q,Ae,he,me,je,de,ue,Se,De,Ce,Ye,Ke,tt,W;function ne(){We=new R1(B),We.init(),Ke=new dS(B,We),He=new M1(B,We,e,Ke),Be=new uS(B,We),He.reverseDepthBuffer&&f&&Be.buffers.depth.setReversed(!0),Xe=new L1(B),Ee=new Zy,U=new fS(B,We,Be,Ee,He,Ke,Xe),A=new b1(M),k=new A1(M),K=new zg(B),tt=new y1(B,K),le=new C1(B,K,Xe,tt),Q=new I1(B,le,K,Xe),De=new D1(B,He,U),de=new w1(Ee),Ae=new $y(M,A,k,We,He,tt,de),he=new SS(M,Ee),me=new jy,je=new iS(We),Se=new x1(M,A,k,Be,Q,m,l),ue=new lS(M,Q,He),W=new MS(B,Xe,He,Be),Ce=new S1(B,We,Xe),Ye=new P1(B,We,Xe),Xe.programs=Ae.programs,M.capabilities=He,M.extensions=We,M.properties=Ee,M.renderLists=me,M.shadowMap=ue,M.state=Be,M.info=Xe}ne();const re=new xS(M,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const h=We.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=We.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(h){h!==void 0&&(z=h,this.setSize(G,Y,!1))},this.getSize=function(h){return h.set(G,Y)},this.setSize=function(h,x,T=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=h,Y=x,t.width=Math.floor(h*z),t.height=Math.floor(x*z),T===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(G*z,Y*z).floor()},this.setDrawingBufferSize=function(h,x,T){G=h,Y=x,z=T,t.width=Math.floor(h*T),t.height=Math.floor(x*T),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(R)},this.getViewport=function(h){return h.copy(_e)},this.setViewport=function(h,x,T,D){h.isVector4?_e.set(h.x,h.y,h.z,h.w):_e.set(h,x,T,D),Be.viewport(R.copy(_e).multiplyScalar(z).round())},this.getScissor=function(h){return h.copy(we)},this.setScissor=function(h,x,T,D){h.isVector4?we.set(h.x,h.y,h.z,h.w):we.set(h,x,T,D),Be.scissor(N.copy(we).multiplyScalar(z).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(h){Be.setScissorTest(Re=h)},this.setOpaqueSort=function(h){se=h},this.setTransparentSort=function(h){X=h},this.getClearColor=function(h){return h.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(h=!0,x=!0,T=!0){let D=0;if(h){let I=!1;if(P!==null){const F=P.texture.format;I=F===_h||F===mh||F===ph}if(I){const F=P.texture.type,$=F===Ai||F===To||F===bo||F===ms||F===hh||F===fh,ie=Se.getClearColor(),j=Se.getClearAlpha(),ee=ie.r,Z=ie.g,oe=ie.b;$?(v[0]=ee,v[1]=Z,v[2]=oe,v[3]=j,B.clearBufferuiv(B.COLOR,0,v)):(g[0]=ee,g[1]=Z,g[2]=oe,g[3]=j,B.clearBufferiv(B.COLOR,0,g))}else D|=B.COLOR_BUFFER_BIT}x&&(D|=B.DEPTH_BUFFER_BIT),T&&(D|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),me.dispose(),je.dispose(),Ee.dispose(),A.dispose(),k.dispose(),Q.dispose(),tt.dispose(),W.dispose(),Ae.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ri),re.removeEventListener("sessionend",Wr),zn.stop()};function fe(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const h=Xe.autoReset,x=ue.enabled,T=ue.autoUpdate,D=ue.needsUpdate,I=ue.type;ne(),Xe.autoReset=h,ue.enabled=x,ue.autoUpdate=T,ue.needsUpdate=D,ue.type=I}function Ie(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function nt(h){const x=h.target;x.removeEventListener("dispose",nt),bt(x)}function bt(h){Xt(h),Ee.remove(h)}function Xt(h){const x=Ee.get(h).programs;x!==void 0&&(x.forEach(function(T){Ae.releaseProgram(T)}),h.isShaderMaterial&&Ae.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,T,D,I,F){x===null&&(x=qe);const $=I.isMesh&&I.matrixWorld.determinant()<0,ie=Ms(h,x,T,D,I);Be.setMaterial(D,$);let j=T.index,ee=1;if(D.wireframe===!0){if(j=le.getWireframeAttribute(T),j===void 0)return;ee=2}const Z=T.drawRange,oe=T.attributes.position;let ge=Z.start*ee,ye=(Z.start+Z.count)*ee;F!==null&&(ge=Math.max(ge,F.start*ee),ye=Math.min(ye,(F.start+F.count)*ee)),j!==null?(ge=Math.max(ge,0),ye=Math.min(ye,j.count)):oe!=null&&(ge=Math.max(ge,0),ye=Math.min(ye,oe.count));const Pe=ye-ge;if(Pe<0||Pe===1/0)return;tt.setup(I,D,ie,T,j);let Te,Me=Ce;if(j!==null&&(Te=K.get(j),Me=Ye,Me.setIndex(Te)),I.isMesh)D.wireframe===!0?(Be.setLineWidth(D.wireframeLinewidth*at()),Me.setMode(B.LINES)):Me.setMode(B.TRIANGLES);else if(I.isLine){let ve=D.linewidth;ve===void 0&&(ve=1),Be.setLineWidth(ve*at()),I.isLineSegments?Me.setMode(B.LINES):I.isLineLoop?Me.setMode(B.LINE_LOOP):Me.setMode(B.LINE_STRIP)}else I.isPoints?Me.setMode(B.POINTS):I.isSprite&&Me.setMode(B.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Me.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Me.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ve=I._multiDrawStarts,ct=I._multiDrawCounts,$e=I._multiDrawCount,Rt=j?K.get(j).bytesPerElement:1,ot=Ee.get(D).currentProgram.getUniforms();for(let Qe=0;Qe<$e;Qe++)ot.setValue(B,"_gl_DrawID",Qe),Me.render(ve[Qe]/Rt,ct[Qe])}else if(I.isInstancedMesh)Me.renderInstances(ge,Pe,I.count);else if(T.isInstancedBufferGeometry){const ve=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,ct=Math.min(T.instanceCount,ve);Me.renderInstances(ge,Pe,ct)}else Me.render(ge,Pe)};function ht(h,x,T){h.transparent===!0&&h.side===En&&h.forceSinglePass===!1?(h.side=$n,h.needsUpdate=!0,xr(h,x,T),h.side=Vr,h.needsUpdate=!0,xr(h,x,T),h.side=En):xr(h,x,T)}this.compile=function(h,x,T=null){T===null&&(T=h),p=je.get(T),p.init(x),S.push(p),T.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),h!==T&&h.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const D=new Set;return h.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const F=I.material;if(F)if(Array.isArray(F))for(let $=0;$<F.length;$++){const ie=F[$];ht(ie,T,I),D.add(ie)}else ht(F,T,I),D.add(F)}),S.pop(),p=null,D},this.compileAsync=function(h,x,T=null){const D=this.compile(h,x,T);return new Promise(I=>{function F(){if(D.forEach(function($){Ee.get($).currentProgram.isReady()&&D.delete($)}),D.size===0){I(h);return}setTimeout(F,10)}We.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let Pt=null;function Rn(h){Pt&&Pt(h)}function Ri(){zn.stop()}function Wr(){zn.start()}const zn=new rm;zn.setAnimationLoop(Rn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(h){Pt=h,re.setAnimationLoop(h),h===null?zn.stop():zn.start()},re.addEventListener("sessionstart",Ri),re.addEventListener("sessionend",Wr),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(x),x=re.getCamera()),h.isScene===!0&&h.onBeforeRender(M,h,x,P),p=je.get(h,S.length),p.init(x),S.push(p),be.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),J.setFromProjectionMatrix(be),ce=this.localClippingEnabled,te=de.init(this.clippingPlanes,ce),_=me.get(h,b.length),_.init(),b.push(_),re.enabled===!0&&re.isPresenting===!0){const F=M.xr.getDepthSensingMesh();F!==null&&Ci(F,x,-1/0,M.sortObjects)}Ci(h,x,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(se,X),Ge=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ge&&Se.addToRenderList(_,h),this.info.render.frame++,te===!0&&de.beginShadows();const T=p.state.shadowsArray;ue.render(T,h,x),te===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=_.opaque,I=_.transmissive;if(p.setupLights(),x.isArrayCamera){const F=x.cameras;if(I.length>0)for(let $=0,ie=F.length;$<ie;$++){const j=F[$];Xr(D,I,h,j)}Ge&&Se.render(h);for(let $=0,ie=F.length;$<ie;$++){const j=F[$];vr(_,h,j,j.viewport)}}else I.length>0&&Xr(D,I,h,x),Ge&&Se.render(h),vr(_,h,x);P!==null&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),h.isScene===!0&&h.onAfterRender(M,h,x),tt.resetDefaultState(),w=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],te===!0&&de.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function Ci(h,x,T,D){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)T=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||J.intersectsSprite(h)){D&&Ue.setFromMatrixPosition(h.matrixWorld).applyMatrix4(be);const $=Q.update(h),ie=h.material;ie.visible&&_.push(h,$,ie,T,Ue.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||J.intersectsObject(h))){const $=Q.update(h),ie=h.material;if(D&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Ue.copy(h.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Ue.copy($.boundingSphere.center)),Ue.applyMatrix4(h.matrixWorld).applyMatrix4(be)),Array.isArray(ie)){const j=$.groups;for(let ee=0,Z=j.length;ee<Z;ee++){const oe=j[ee],ge=ie[oe.materialIndex];ge&&ge.visible&&_.push(h,$,ge,T,Ue.z,oe)}}else ie.visible&&_.push(h,$,ie,T,Ue.z,null)}}const F=h.children;for(let $=0,ie=F.length;$<ie;$++)Ci(F[$],x,T,D)}function vr(h,x,T,D){const I=h.opaque,F=h.transmissive,$=h.transparent;p.setupLightsView(T),te===!0&&de.setGlobalState(M.clippingPlanes,T),D&&Be.viewport(R.copy(D)),I.length>0&&Kn(I,x,T),F.length>0&&Kn(F,x,T),$.length>0&&Kn($,x,T),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Xr(h,x,T,D){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[D.id]===void 0&&(p.state.transmissionRenderTarget[D.id]=new _r(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Hi:Ai,minFilter:ki,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const F=p.state.transmissionRenderTarget[D.id],$=D.viewport||R;F.setSize($.z,$.w);const ie=M.getRenderTarget();M.setRenderTarget(F),M.getClearColor(V),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear(),Ge&&Se.render(T);const j=M.toneMapping;M.toneMapping=Gi;const ee=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),p.setupLightsView(D),te===!0&&de.setGlobalState(M.clippingPlanes,D),Kn(h,T,D),U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F),We.has("WEBGL_multisampled_render_to_texture")===!1){let Z=!1;for(let oe=0,ge=x.length;oe<ge;oe++){const ye=x[oe],Pe=ye.object,Te=ye.geometry,Me=ye.material,ve=ye.group;if(Me.side===En&&Pe.layers.test(D.layers)){const ct=Me.side;Me.side=$n,Me.needsUpdate=!0,qr(Pe,T,D,Te,Me,ve),Me.side=ct,Me.needsUpdate=!0,Z=!0}}Z===!0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F))}M.setRenderTarget(ie),M.setClearColor(V,H),ee!==void 0&&(D.viewport=ee),M.toneMapping=j}function Kn(h,x,T){const D=x.isScene===!0?x.overrideMaterial:null;for(let I=0,F=h.length;I<F;I++){const $=h[I],ie=$.object,j=$.geometry,ee=D===null?$.material:D,Z=$.group;ie.layers.test(T.layers)&&qr(ie,x,T,j,ee,Z)}}function qr(h,x,T,D,I,F){h.onBeforeRender(M,x,T,D,I,F),h.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),I.onBeforeRender(M,x,T,D,h,F),I.transparent===!0&&I.side===En&&I.forceSinglePass===!1?(I.side=$n,I.needsUpdate=!0,M.renderBufferDirect(T,x,D,I,h,F),I.side=Vr,I.needsUpdate=!0,M.renderBufferDirect(T,x,D,I,h,F),I.side=En):M.renderBufferDirect(T,x,D,I,h,F),h.onAfterRender(M,x,T,D,I,F)}function xr(h,x,T){x.isScene!==!0&&(x=qe);const D=Ee.get(h),I=p.state.lights,F=p.state.shadowsArray,$=I.state.version,ie=Ae.getParameters(h,I.state,F,x,T),j=Ae.getProgramCacheKey(ie);let ee=D.programs;D.environment=h.isMeshStandardMaterial?x.environment:null,D.fog=x.fog,D.envMap=(h.isMeshStandardMaterial?k:A).get(h.envMap||D.environment),D.envMapRotation=D.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,ee===void 0&&(h.addEventListener("dispose",nt),ee=new Map,D.programs=ee);let Z=ee.get(j);if(Z!==void 0){if(D.currentProgram===Z&&D.lightsStateVersion===$)return qi(h,ie),Z}else ie.uniforms=Ae.getUniforms(h),h.onBeforeCompile(ie,M),Z=Ae.acquireProgram(ie,j),ee.set(j,Z),D.uniforms=ie.uniforms;const oe=D.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(oe.clippingPlanes=de.uniform),qi(h,ie),D.needsLights=Cn(h),D.lightsStateVersion=$,D.needsLights&&(oe.ambientLightColor.value=I.state.ambient,oe.lightProbe.value=I.state.probe,oe.directionalLights.value=I.state.directional,oe.directionalLightShadows.value=I.state.directionalShadow,oe.spotLights.value=I.state.spot,oe.spotLightShadows.value=I.state.spotShadow,oe.rectAreaLights.value=I.state.rectArea,oe.ltc_1.value=I.state.rectAreaLTC1,oe.ltc_2.value=I.state.rectAreaLTC2,oe.pointLights.value=I.state.point,oe.pointLightShadows.value=I.state.pointShadow,oe.hemisphereLights.value=I.state.hemi,oe.directionalShadowMap.value=I.state.directionalShadowMap,oe.directionalShadowMatrix.value=I.state.directionalShadowMatrix,oe.spotShadowMap.value=I.state.spotShadowMap,oe.spotLightMatrix.value=I.state.spotLightMatrix,oe.spotLightMap.value=I.state.spotLightMap,oe.pointShadowMap.value=I.state.pointShadowMap,oe.pointShadowMatrix.value=I.state.pointShadowMatrix),D.currentProgram=Z,D.uniformsList=null,Z}function Yr(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=ll.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function qi(h,x){const T=Ee.get(h);T.outputColorSpace=x.outputColorSpace,T.batching=x.batching,T.batchingColor=x.batchingColor,T.instancing=x.instancing,T.instancingColor=x.instancingColor,T.instancingMorph=x.instancingMorph,T.skinning=x.skinning,T.morphTargets=x.morphTargets,T.morphNormals=x.morphNormals,T.morphColors=x.morphColors,T.morphTargetsCount=x.morphTargetsCount,T.numClippingPlanes=x.numClippingPlanes,T.numIntersection=x.numClipIntersection,T.vertexAlphas=x.vertexAlphas,T.vertexTangents=x.vertexTangents,T.toneMapping=x.toneMapping}function Ms(h,x,T,D,I){x.isScene!==!0&&(x=qe),U.resetTextureUnits();const F=x.fog,$=D.isMeshStandardMaterial?x.environment:null,ie=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Xi,j=(D.isMeshStandardMaterial?k:A).get(D.envMap||$),ee=D.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,Z=!!T.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),oe=!!T.morphAttributes.position,ge=!!T.morphAttributes.normal,ye=!!T.morphAttributes.color;let Pe=Gi;D.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pe=M.toneMapping);const Te=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,Me=Te!==void 0?Te.length:0,ve=Ee.get(D),ct=p.state.lights;if(te===!0&&(ce===!0||h!==y)){const st=h===y&&D.id===w;de.setState(D,h,st)}let $e=!1;D.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==ct.state.version||ve.outputColorSpace!==ie||I.isBatchedMesh&&ve.batching===!1||!I.isBatchedMesh&&ve.batching===!0||I.isBatchedMesh&&ve.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ve.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ve.instancing===!1||!I.isInstancedMesh&&ve.instancing===!0||I.isSkinnedMesh&&ve.skinning===!1||!I.isSkinnedMesh&&ve.skinning===!0||I.isInstancedMesh&&ve.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ve.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ve.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ve.instancingMorph===!1&&I.morphTexture!==null||ve.envMap!==j||D.fog===!0&&ve.fog!==F||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==de.numPlanes||ve.numIntersection!==de.numIntersection)||ve.vertexAlphas!==ee||ve.vertexTangents!==Z||ve.morphTargets!==oe||ve.morphNormals!==ge||ve.morphColors!==ye||ve.toneMapping!==Pe||ve.morphTargetsCount!==Me)&&($e=!0):($e=!0,ve.__version=D.version);let Rt=ve.currentProgram;$e===!0&&(Rt=xr(D,x,I));let ot=!1,Qe=!1,pt=!1;const lt=Rt.getUniforms(),St=ve.uniforms;if(Be.useProgram(Rt.program)&&(ot=!0,Qe=!0,pt=!0),D.id!==w&&(w=D.id,Qe=!0),ot||y!==h){Be.buffers.depth.getReversed()?(ae.copy(h.projectionMatrix),cg(ae),ug(ae),lt.setValue(B,"projectionMatrix",ae)):lt.setValue(B,"projectionMatrix",h.projectionMatrix),lt.setValue(B,"viewMatrix",h.matrixWorldInverse);const Zt=lt.map.cameraPosition;Zt!==void 0&&Zt.setValue(B,Oe.setFromMatrixPosition(h.matrixWorld)),He.logarithmicDepthBuffer&&lt.setValue(B,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&lt.setValue(B,"isOrthographic",h.isOrthographicCamera===!0),y!==h&&(y=h,Qe=!0,pt=!0)}if(I.isSkinnedMesh){lt.setOptional(B,I,"bindMatrix"),lt.setOptional(B,I,"bindMatrixInverse");const st=I.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),lt.setValue(B,"boneTexture",st.boneTexture,U))}I.isBatchedMesh&&(lt.setOptional(B,I,"batchingTexture"),lt.setValue(B,"batchingTexture",I._matricesTexture,U),lt.setOptional(B,I,"batchingIdTexture"),lt.setValue(B,"batchingIdTexture",I._indirectTexture,U),lt.setOptional(B,I,"batchingColorTexture"),I._colorsTexture!==null&&lt.setValue(B,"batchingColorTexture",I._colorsTexture,U));const ut=T.morphAttributes;if((ut.position!==void 0||ut.normal!==void 0||ut.color!==void 0)&&De.update(I,T,Rt),(Qe||ve.receiveShadow!==I.receiveShadow)&&(ve.receiveShadow=I.receiveShadow,lt.setValue(B,"receiveShadow",I.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(St.envMap.value=j,St.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&x.environment!==null&&(St.envMapIntensity.value=x.environmentIntensity),Qe&&(lt.setValue(B,"toneMappingExposure",M.toneMappingExposure),ve.needsLights&&_n(St,pt),F&&D.fog===!0&&he.refreshFogUniforms(St,F),he.refreshMaterialUniforms(St,D,z,Y,p.state.transmissionRenderTarget[h.id]),ll.upload(B,Yr(ve),St,U)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(ll.upload(B,Yr(ve),St,U),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&lt.setValue(B,"center",I.center),lt.setValue(B,"modelViewMatrix",I.modelViewMatrix),lt.setValue(B,"normalMatrix",I.normalMatrix),lt.setValue(B,"modelMatrix",I.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const st=D.uniformsGroups;for(let Zt=0,gn=st.length;Zt<gn;Zt++){const vn=st[Zt];W.update(vn,Rt),W.bind(vn,Rt)}}return Rt}function _n(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function Cn(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(h,x,T){Ee.get(h.texture).__webglTexture=x,Ee.get(h.depthTexture).__webglTexture=T;const D=Ee.get(h);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=T===void 0,D.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const T=Ee.get(h);T.__webglFramebuffer=x,T.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,T=0){P=h,C=x,E=T;let D=!0,I=null,F=!1,$=!1;if(h){const j=Ee.get(h);if(j.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(B.FRAMEBUFFER,null),D=!1;else if(j.__webglFramebuffer===void 0)U.setupRenderTarget(h);else if(j.__hasExternalTextures)U.rebindTextures(h,Ee.get(h.texture).__webglTexture,Ee.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const oe=h.depthTexture;if(j.__boundDepthTexture!==oe){if(oe!==null&&Ee.has(oe)&&(h.width!==oe.image.width||h.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(h)}}const ee=h.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&($=!0);const Z=Ee.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(Z[x])?I=Z[x][T]:I=Z[x],F=!0):h.samples>0&&U.useMultisampledRTT(h)===!1?I=Ee.get(h).__webglMultisampledFramebuffer:Array.isArray(Z)?I=Z[T]:I=Z,R.copy(h.viewport),N.copy(h.scissor),O=h.scissorTest}else R.copy(_e).multiplyScalar(z).floor(),N.copy(we).multiplyScalar(z).floor(),O=Re;if(Be.bindFramebuffer(B.FRAMEBUFFER,I)&&D&&Be.drawBuffers(h,I),Be.viewport(R),Be.scissor(N),Be.setScissorTest(O),F){const j=Ee.get(h.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+x,j.__webglTexture,T)}else if($){const j=Ee.get(h.texture),ee=x||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,j.__webglTexture,T||0,ee)}w=-1},this.readRenderTargetPixels=function(h,x,T,D,I,F,$){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Ee.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&$!==void 0&&(ie=ie[$]),ie){Be.bindFramebuffer(B.FRAMEBUFFER,ie);try{const j=h.texture,ee=j.format,Z=j.type;if(!He.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-D&&T>=0&&T<=h.height-I&&B.readPixels(x,T,D,I,Ke.convert(ee),Ke.convert(Z),F)}finally{const j=P!==null?Ee.get(P).__webglFramebuffer:null;Be.bindFramebuffer(B.FRAMEBUFFER,j)}}},this.readRenderTargetPixelsAsync=async function(h,x,T,D,I,F,$){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=Ee.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&$!==void 0&&(ie=ie[$]),ie){const j=h.texture,ee=j.format,Z=j.type;if(!He.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-D&&T>=0&&T<=h.height-I){Be.bindFramebuffer(B.FRAMEBUFFER,ie);const oe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,oe),B.bufferData(B.PIXEL_PACK_BUFFER,F.byteLength,B.STREAM_READ),B.readPixels(x,T,D,I,Ke.convert(ee),Ke.convert(Z),0);const ge=P!==null?Ee.get(P).__webglFramebuffer:null;Be.bindFramebuffer(B.FRAMEBUFFER,ge);const ye=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await lg(B,ye,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,oe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,F),B.deleteBuffer(oe),B.deleteSync(ye),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,T=0){h.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const D=Math.pow(2,-T),I=Math.floor(h.image.width*D),F=Math.floor(h.image.height*D),$=x!==null?x.x:0,ie=x!==null?x.y:0;U.setTexture2D(h,0),B.copyTexSubImage2D(B.TEXTURE_2D,T,0,0,$,ie,I,F),Be.unbindTexture()},this.copyTextureToTexture=function(h,x,T=null,D=null,I=0){h.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,h=arguments[1],x=arguments[2],I=arguments[3]||0,T=null);let F,$,ie,j,ee,Z,oe,ge,ye;const Pe=h.isCompressedTexture?h.mipmaps[I]:h.image;T!==null?(F=T.max.x-T.min.x,$=T.max.y-T.min.y,ie=T.isBox3?T.max.z-T.min.z:1,j=T.min.x,ee=T.min.y,Z=T.isBox3?T.min.z:0):(F=Pe.width,$=Pe.height,ie=Pe.depth||1,j=0,ee=0,Z=0),D!==null?(oe=D.x,ge=D.y,ye=D.z):(oe=0,ge=0,ye=0);const Te=Ke.convert(x.format),Me=Ke.convert(x.type);let ve;x.isData3DTexture?(U.setTexture3D(x,0),ve=B.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(U.setTexture2DArray(x,0),ve=B.TEXTURE_2D_ARRAY):(U.setTexture2D(x,0),ve=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,x.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,x.unpackAlignment);const ct=B.getParameter(B.UNPACK_ROW_LENGTH),$e=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Rt=B.getParameter(B.UNPACK_SKIP_PIXELS),ot=B.getParameter(B.UNPACK_SKIP_ROWS),Qe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Pe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,j),B.pixelStorei(B.UNPACK_SKIP_ROWS,ee),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Z);const pt=h.isDataArrayTexture||h.isData3DTexture,lt=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const St=Ee.get(h),ut=Ee.get(x),st=Ee.get(St.__renderTarget),Zt=Ee.get(ut.__renderTarget);Be.bindFramebuffer(B.READ_FRAMEBUFFER,st.__webglFramebuffer),Be.bindFramebuffer(B.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let gn=0;gn<ie;gn++)pt&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.get(h).__webglTexture,I,Z+gn),h.isDepthTexture?(lt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.get(x).__webglTexture,I,ye+gn),B.blitFramebuffer(j,ee,F,$,oe,ge,F,$,B.DEPTH_BUFFER_BIT,B.NEAREST)):lt?B.copyTexSubImage3D(ve,I,oe,ge,ye+gn,j,ee,F,$):B.copyTexSubImage2D(ve,I,oe,ge,ye+gn,j,ee,F,$);Be.bindFramebuffer(B.READ_FRAMEBUFFER,null),Be.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else lt?h.isDataTexture||h.isData3DTexture?B.texSubImage3D(ve,I,oe,ge,ye,F,$,ie,Te,Me,Pe.data):x.isCompressedArrayTexture?B.compressedTexSubImage3D(ve,I,oe,ge,ye,F,$,ie,Te,Pe.data):B.texSubImage3D(ve,I,oe,ge,ye,F,$,ie,Te,Me,Pe):h.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,I,oe,ge,F,$,Te,Me,Pe.data):h.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,I,oe,ge,Pe.width,Pe.height,Te,Pe.data):B.texSubImage2D(B.TEXTURE_2D,I,oe,ge,F,$,Te,Me,Pe);B.pixelStorei(B.UNPACK_ROW_LENGTH,ct),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$e),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Rt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ot),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe),I===0&&x.generateMipmaps&&B.generateMipmap(ve),Be.unbindTexture()},this.copyTextureToTexture3D=function(h,x,T=null,D=null,I=0){return h.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),T=arguments[0]||null,D=arguments[1]||null,h=arguments[2],x=arguments[3],I=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,T,D,I)},this.initRenderTarget=function(h){Ee.get(h).__webglFramebuffer===void 0&&U.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?U.setTextureCube(h,0):h.isData3DTexture?U.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?U.setTexture2DArray(h,0):U.setTexture2D(h,0),Be.unbindTexture()},this.resetState=function(){C=0,E=0,P=null,Be.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}class Eo extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ul extends mn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=rn,u=rn,d,f){super(null,s,a,l,c,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn extends Yt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class wS extends mn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ml={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bS{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const TS=new bS;class ha{constructor(e){this.manager=e!==void 0?e:TS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ha.DEFAULT_MATERIAL_NAME="__DEFAULT";const nr={};class ES extends Error{constructor(e,t){super(e),this.response=t}}class AS extends ha{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Ml.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(nr[e]!==void 0){nr[e].push({onLoad:t,onProgress:n,onError:r});return}nr[e]=[],nr[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=nr[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){b();function b(){d.read().then(({done:S,value:M})=>{if(S)p.close();else{g+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let C=0,E=u.length;C<E;C++){const P=u[C];P.onProgress&&P.onProgress(L)}p.enqueue(M),b()}},S=>{p.error(S)})}}});return new Response(_)}else throw new ES(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Ml.add(e,c);const u=nr[e];delete nr[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=nr[e];if(u===void 0)throw this.manager.itemError(e),c;delete nr[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class RS extends ha{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Ml.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=la("img");function l(){u(),Ml.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class CS extends ha{constructor(e){super(e)}load(e,t,n,r){const o=this,s=new Ul,a=new AS(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(e,function(l){let c;try{c=o.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Nn,s.wrapT=c.wrapT!==void 0?c.wrapT:Nn,s.magFilter=c.magFilter!==void 0?c.magFilter:vt,s.minFilter=c.minFilter!==void 0?c.minFilter:vt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=ki),c.mipmapCount===1&&(s.minFilter=vt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,r),s}}class sr extends ha{constructor(e){super(e)}load(e,t,n,r){const o=new mn,s=new RS(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class mo extends gr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var mi=Uint8Array,Qo=Uint16Array,PS=Int32Array,cm=new mi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),um=new mi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),LS=new mi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),hm=function(i,e){for(var t=new Qo(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new PS(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)r[o]=o-t[n]<<5|n;return{b:t,r}},fm=hm(cm,2),dm=fm.b,DS=fm.r;dm[28]=258,DS[258]=28;var IS=hm(um,0),US=IS.b,Bu=new Qo(32768);for(var Nt=0;Nt<32768;++Nt){var Pr=(Nt&43690)>>1|(Nt&21845)<<1;Pr=(Pr&52428)>>2|(Pr&13107)<<2,Pr=(Pr&61680)>>4|(Pr&3855)<<4,Bu[Nt]=((Pr&65280)>>8|(Pr&255)<<8)>>1}var $s=(function(i,e,t){for(var n=i.length,r=0,o=new Qo(e);r<n;++r)i[r]&&++o[i[r]-1];var s=new Qo(e);for(r=1;r<e;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new Qo(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=s[i[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[Bu[d]>>l]=c}else for(a=new Qo(n),r=0;r<n;++r)i[r]&&(a[r]=Bu[s[i[r]-1]++]>>15-i[r]);return a}),fa=new mi(288);for(var Nt=0;Nt<144;++Nt)fa[Nt]=8;for(var Nt=144;Nt<256;++Nt)fa[Nt]=9;for(var Nt=256;Nt<280;++Nt)fa[Nt]=7;for(var Nt=280;Nt<288;++Nt)fa[Nt]=8;var pm=new mi(32);for(var Nt=0;Nt<32;++Nt)pm[Nt]=5;var FS=$s(fa,9,1),NS=$s(pm,5,1),Rc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},wi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Cc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},OS=function(i){return(i+7)/8|0},zS=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new mi(i.subarray(e,t))},BS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],bi=function(i,e,t){var n=new Error(e||BS[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,bi),!t)throw n;return n},kS=function(i,e,t,n){var r=i.length,o=0;if(!r||e.f&&!e.l)return t||new mi(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new mi(r*3));var c=function(qe){var Ge=t.length;if(qe>Ge){var at=new mi(Math.max(Ge*2,qe));at.set(t),t=at}},u=e.f||0,d=e.p||0,f=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=wi(i,d,1);var b=wi(i,d+1,3);if(d+=3,b)if(b==1)m=FS,v=NS,g=9,_=5;else if(b==2){var C=wi(i,d,31)+257,E=wi(i,d+10,15)+4,P=C+wi(i,d+5,31)+1;d+=14;for(var w=new mi(P),y=new mi(19),R=0;R<E;++R)y[LS[R]]=wi(i,d+R*3,7);d+=E*3;for(var N=Rc(y),O=(1<<N)-1,V=$s(y,N,1),R=0;R<P;){var H=V[wi(i,d,O)];d+=H&15;var S=H>>4;if(S<16)w[R++]=S;else{var G=0,Y=0;for(S==16?(Y=3+wi(i,d,3),d+=2,G=w[R-1]):S==17?(Y=3+wi(i,d,7),d+=3):S==18&&(Y=11+wi(i,d,127),d+=7);Y--;)w[R++]=G}}var z=w.subarray(0,C),se=w.subarray(C);g=Rc(z),_=Rc(se),m=$s(z,g,1),v=$s(se,_,1)}else bi(1);else{var S=OS(d)+4,M=i[S-4]|i[S-3]<<8,L=S+M;if(L>r){l&&bi(0);break}a&&c(f+M),t.set(i.subarray(S,L),f),e.b=f+=M,e.p=d=L*8,e.f=u;continue}if(d>p){l&&bi(0);break}}a&&c(f+131072);for(var X=(1<<g)-1,_e=(1<<_)-1,we=d;;we=d){var G=m[Cc(i,d)&X],Re=G>>4;if(d+=G&15,d>p){l&&bi(0);break}if(G||bi(2),Re<256)t[f++]=Re;else if(Re==256){we=d,m=null;break}else{var J=Re-254;if(Re>264){var R=Re-257,te=cm[R];J=wi(i,d,(1<<te)-1)+dm[R],d+=te}var ce=v[Cc(i,d)&_e],ae=ce>>4;ce||bi(3),d+=ce&15;var se=US[ae];if(ae>3){var te=um[ae];se+=Cc(i,d)&(1<<te)-1,d+=te}if(d>p){l&&bi(0);break}a&&c(f+131072);var be=f+J;if(f<se){var Oe=o-se,Ue=Math.min(se,be);for(Oe+f<0&&bi(3);f<Ue;++f)t[f]=n[Oe+f]}for(;f<be;++f)t[f]=t[f-se]}}e.l=m,e.p=we,e.b=f,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return f!=t.length&&s?zS(t,0,f):t.subarray(0,f)},HS=new mi(0),VS=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&bi(6,"invalid zlib data"),(i[1]>>5&1)==1&&bi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Ga(i,e){return kS(i.subarray(VS(i),-4),{i:2},e,e)}var GS=typeof TextDecoder<"u"&&new TextDecoder,WS=0;try{GS.decode(HS,{stream:!0}),WS=1}catch{}class XS extends CS{constructor(e){super(e),this.type=Hi}parse(e){const w=Math.pow(2.7182818,2.2);function y(h,x){let T=0;for(let I=0;I<65536;++I)(I==0||h[I>>3]&1<<(I&7))&&(x[T++]=I);const D=T-1;for(;T<65536;)x[T++]=0;return D}function R(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const N={l:0,c:0,lc:0};function O(h,x,T,D,I){for(;T<h;)x=x<<8|Ce(D,I),T+=8;T-=h,N.l=x>>T&(1<<h)-1,N.c=x,N.lc=T}const V=new Array(59);function H(h){for(let T=0;T<=58;++T)V[T]=0;for(let T=0;T<65537;++T)V[h[T]]+=1;let x=0;for(let T=58;T>0;--T){const D=x+V[T]>>1;V[T]=x,x=D}for(let T=0;T<65537;++T){const D=h[T];D>0&&(h[T]=D|V[D]++<<6)}}function G(h,x,T,D,I,F){const $=x;let ie=0,j=0;for(;D<=I;D++){if($.value-x.value>T)return!1;O(6,ie,j,h,$);const ee=N.l;if(ie=N.c,j=N.lc,F[D]=ee,ee==63){if($.value-x.value>T)throw new Error("Something wrong with hufUnpackEncTable");O(8,ie,j,h,$);let Z=N.l+6;if(ie=N.c,j=N.lc,D+Z>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Z--;)F[D++]=0;D--}else if(ee>=59){let Z=ee-59+2;if(D+Z>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Z--;)F[D++]=0;D--}}H(F)}function Y(h){return h&63}function z(h){return h>>6}function se(h,x,T,D){for(;x<=T;x++){const I=z(h[x]),F=Y(h[x]);if(I>>F)throw new Error("Invalid table entry");if(F>14){const $=D[I>>F-14];if($.len)throw new Error("Invalid table entry");if($.lit++,$.p){const ie=$.p;$.p=new Array($.lit);for(let j=0;j<$.lit-1;++j)$.p[j]=ie[j]}else $.p=new Array(1);$.p[$.lit-1]=x}else if(F){let $=0;for(let ie=1<<14-F;ie>0;ie--){const j=D[(I<<14-F)+$];if(j.len||j.p)throw new Error("Invalid table entry");j.len=F,j.lit=x,$++}}}return!0}const X={c:0,lc:0};function _e(h,x,T,D){h=h<<8|Ce(T,D),x+=8,X.c=h,X.lc=x}const we={c:0,lc:0};function Re(h,x,T,D,I,F,$,ie,j){if(h==x){D<8&&(_e(T,D,I,F),T=X.c,D=X.lc),D-=8;let ee=T>>D;if(ee=new Uint8Array([ee])[0],ie.value+ee>j)return!1;const Z=$[ie.value-1];for(;ee-- >0;)$[ie.value++]=Z}else if(ie.value<j)$[ie.value++]=h;else return!1;we.c=T,we.lc=D}function J(h){return h&65535}function te(h){const x=J(h);return x>32767?x-65536:x}const ce={a:0,b:0};function ae(h,x){const T=te(h),I=te(x),F=T+(I&1)+(I>>1),$=F,ie=F-I;ce.a=$,ce.b=ie}function be(h,x){const T=J(h),D=J(x),I=T-(D>>1)&65535,F=D+I-32768&65535;ce.a=F,ce.b=I}function Oe(h,x,T,D,I,F,$){const ie=$<16384,j=T>I?I:T;let ee=1,Z,oe;for(;ee<=j;)ee<<=1;for(ee>>=1,Z=ee,ee>>=1;ee>=1;){oe=0;const ge=oe+F*(I-Z),ye=F*ee,Pe=F*Z,Te=D*ee,Me=D*Z;let ve,ct,$e,Rt;for(;oe<=ge;oe+=Pe){let ot=oe;const Qe=oe+D*(T-Z);for(;ot<=Qe;ot+=Me){const pt=ot+Te,lt=ot+ye,St=lt+Te;ie?(ae(h[ot+x],h[lt+x]),ve=ce.a,$e=ce.b,ae(h[pt+x],h[St+x]),ct=ce.a,Rt=ce.b,ae(ve,ct),h[ot+x]=ce.a,h[pt+x]=ce.b,ae($e,Rt),h[lt+x]=ce.a,h[St+x]=ce.b):(be(h[ot+x],h[lt+x]),ve=ce.a,$e=ce.b,be(h[pt+x],h[St+x]),ct=ce.a,Rt=ce.b,be(ve,ct),h[ot+x]=ce.a,h[pt+x]=ce.b,be($e,Rt),h[lt+x]=ce.a,h[St+x]=ce.b)}if(T&ee){const pt=ot+ye;ie?ae(h[ot+x],h[pt+x]):be(h[ot+x],h[pt+x]),ve=ce.a,h[pt+x]=ce.b,h[ot+x]=ve}}if(I&ee){let ot=oe;const Qe=oe+D*(T-Z);for(;ot<=Qe;ot+=Me){const pt=ot+Te;ie?ae(h[ot+x],h[pt+x]):be(h[ot+x],h[pt+x]),ve=ce.a,h[pt+x]=ce.b,h[ot+x]=ve}}Z=ee,ee>>=1}return oe}function Ue(h,x,T,D,I,F,$,ie,j){let ee=0,Z=0;const oe=$,ge=Math.trunc(D.value+(I+7)/8);for(;D.value<ge;)for(_e(ee,Z,T,D),ee=X.c,Z=X.lc;Z>=14;){const Pe=ee>>Z-14&16383,Te=x[Pe];if(Te.len)Z-=Te.len,Re(Te.lit,F,ee,Z,T,D,ie,j,oe),ee=we.c,Z=we.lc;else{if(!Te.p)throw new Error("hufDecode issues");let Me;for(Me=0;Me<Te.lit;Me++){const ve=Y(h[Te.p[Me]]);for(;Z<ve&&D.value<ge;)_e(ee,Z,T,D),ee=X.c,Z=X.lc;if(Z>=ve&&z(h[Te.p[Me]])==(ee>>Z-ve&(1<<ve)-1)){Z-=ve,Re(Te.p[Me],F,ee,Z,T,D,ie,j,oe),ee=we.c,Z=we.lc;break}}if(Me==Te.lit)throw new Error("hufDecode issues")}}const ye=8-I&7;for(ee>>=ye,Z-=ye;Z>0;){const Pe=x[ee<<14-Z&16383];if(Pe.len)Z-=Pe.len,Re(Pe.lit,F,ee,Z,T,D,ie,j,oe),ee=we.c,Z=we.lc;else throw new Error("hufDecode issues")}return!0}function qe(h,x,T,D,I,F){const $={value:0},ie=T.value,j=De(x,T),ee=De(x,T);T.value+=4;const Z=De(x,T);if(T.value+=4,j<0||j>=65537||ee<0||ee>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const oe=new Array(65537),ge=new Array(16384);R(ge);const ye=D-(T.value-ie);if(G(h,T,ye,j,ee,oe),Z>8*(D-(T.value-ie)))throw new Error("Something wrong with hufUncompress");se(oe,j,ee,ge),Ue(oe,ge,h,T,Z,ee,F,I,$)}function Ge(h,x,T){for(let D=0;D<T;++D)x[D]=h[x[D]]}function at(h){for(let x=1;x<h.length;x++){const T=h[x-1]+h[x]-128;h[x]=T}}function B(h,x){let T=0,D=Math.floor((h.length+1)/2),I=0;const F=h.length-1;for(;!(I>F||(x[I++]=h[T++],I>F));)x[I++]=h[D++]}function ze(h){let x=h.byteLength;const T=new Array;let D=0;const I=new DataView(h);for(;x>0;){const F=I.getInt8(D++);if(F<0){const $=-F;x-=$+1;for(let ie=0;ie<$;ie++)T.push(I.getUint8(D++))}else{const $=F;x-=2;const ie=I.getUint8(D++);for(let j=0;j<$+1;j++)T.push(ie)}}return T}function We(h,x,T,D,I,F){let $=new DataView(F.buffer);const ie=T[h.idx[0]].width,j=T[h.idx[0]].height,ee=3,Z=Math.floor(ie/8),oe=Math.ceil(ie/8),ge=Math.ceil(j/8),ye=ie-(oe-1)*8,Pe=j-(ge-1)*8,Te={value:0},Me=new Array(ee),ve=new Array(ee),ct=new Array(ee),$e=new Array(ee),Rt=new Array(ee);for(let Qe=0;Qe<ee;++Qe)Rt[Qe]=x[h.idx[Qe]],Me[Qe]=Qe<1?0:Me[Qe-1]+oe*ge,ve[Qe]=new Float32Array(64),ct[Qe]=new Uint16Array(64),$e[Qe]=new Uint16Array(oe*64);for(let Qe=0;Qe<ge;++Qe){let pt=8;Qe==ge-1&&(pt=Pe);let lt=8;for(let ut=0;ut<oe;++ut){ut==oe-1&&(lt=ye);for(let st=0;st<ee;++st)ct[st].fill(0),ct[st][0]=I[Me[st]++],He(Te,D,ct[st]),Be(ct[st],ve[st]),Xe(ve[st]);Ee(ve);for(let st=0;st<ee;++st)U(ve[st],$e[st],ut*64)}let St=0;for(let ut=0;ut<ee;++ut){const st=T[h.idx[ut]].type;for(let Zt=8*Qe;Zt<8*Qe+pt;++Zt){St=Rt[ut][Zt];for(let gn=0;gn<Z;++gn){const vn=gn*64+(Zt&7)*8;$.setUint16(St+0*st,$e[ut][vn+0],!0),$.setUint16(St+2*st,$e[ut][vn+1],!0),$.setUint16(St+4*st,$e[ut][vn+2],!0),$.setUint16(St+6*st,$e[ut][vn+3],!0),$.setUint16(St+8*st,$e[ut][vn+4],!0),$.setUint16(St+10*st,$e[ut][vn+5],!0),$.setUint16(St+12*st,$e[ut][vn+6],!0),$.setUint16(St+14*st,$e[ut][vn+7],!0),St+=16*st}}if(Z!=oe)for(let Zt=8*Qe;Zt<8*Qe+pt;++Zt){const gn=Rt[ut][Zt]+8*Z*2*st,vn=Z*64+(Zt&7)*8;for(let $r=0;$r<lt;++$r)$.setUint16(gn+$r*2*st,$e[ut][vn+$r],!0)}}}const ot=new Uint16Array(ie);$=new DataView(F.buffer);for(let Qe=0;Qe<ee;++Qe){T[h.idx[Qe]].decoded=!0;const pt=T[h.idx[Qe]].type;if(T[Qe].type==2)for(let lt=0;lt<j;++lt){const St=Rt[Qe][lt];for(let ut=0;ut<ie;++ut)ot[ut]=$.getUint16(St+ut*2*pt,!0);for(let ut=0;ut<ie;++ut)$.setFloat32(St+ut*2*pt,ne(ot[ut]),!0)}}}function He(h,x,T){let D,I=1;for(;I<64;)D=x[h.value],D==65280?I=64:D>>8==255?I+=D&255:(T[I]=D,I++),h.value++}function Be(h,x){x[0]=ne(h[0]),x[1]=ne(h[1]),x[2]=ne(h[5]),x[3]=ne(h[6]),x[4]=ne(h[14]),x[5]=ne(h[15]),x[6]=ne(h[27]),x[7]=ne(h[28]),x[8]=ne(h[2]),x[9]=ne(h[4]),x[10]=ne(h[7]),x[11]=ne(h[13]),x[12]=ne(h[16]),x[13]=ne(h[26]),x[14]=ne(h[29]),x[15]=ne(h[42]),x[16]=ne(h[3]),x[17]=ne(h[8]),x[18]=ne(h[12]),x[19]=ne(h[17]),x[20]=ne(h[25]),x[21]=ne(h[30]),x[22]=ne(h[41]),x[23]=ne(h[43]),x[24]=ne(h[9]),x[25]=ne(h[11]),x[26]=ne(h[18]),x[27]=ne(h[24]),x[28]=ne(h[31]),x[29]=ne(h[40]),x[30]=ne(h[44]),x[31]=ne(h[53]),x[32]=ne(h[10]),x[33]=ne(h[19]),x[34]=ne(h[23]),x[35]=ne(h[32]),x[36]=ne(h[39]),x[37]=ne(h[45]),x[38]=ne(h[52]),x[39]=ne(h[54]),x[40]=ne(h[20]),x[41]=ne(h[22]),x[42]=ne(h[33]),x[43]=ne(h[38]),x[44]=ne(h[46]),x[45]=ne(h[51]),x[46]=ne(h[55]),x[47]=ne(h[60]),x[48]=ne(h[21]),x[49]=ne(h[34]),x[50]=ne(h[37]),x[51]=ne(h[47]),x[52]=ne(h[50]),x[53]=ne(h[56]),x[54]=ne(h[59]),x[55]=ne(h[61]),x[56]=ne(h[35]),x[57]=ne(h[36]),x[58]=ne(h[48]),x[59]=ne(h[49]),x[60]=ne(h[57]),x[61]=ne(h[58]),x[62]=ne(h[62]),x[63]=ne(h[63])}function Xe(h){const x=.5*Math.cos(.7853975),T=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),F=.5*Math.cos(5*3.14159/16),$=.5*Math.cos(3*3.14159/8),ie=.5*Math.cos(7*3.14159/16),j=new Array(4),ee=new Array(4),Z=new Array(4),oe=new Array(4);for(let ge=0;ge<8;++ge){const ye=ge*8;j[0]=D*h[ye+2],j[1]=$*h[ye+2],j[2]=D*h[ye+6],j[3]=$*h[ye+6],ee[0]=T*h[ye+1]+I*h[ye+3]+F*h[ye+5]+ie*h[ye+7],ee[1]=I*h[ye+1]-ie*h[ye+3]-T*h[ye+5]-F*h[ye+7],ee[2]=F*h[ye+1]-T*h[ye+3]+ie*h[ye+5]+I*h[ye+7],ee[3]=ie*h[ye+1]-F*h[ye+3]+I*h[ye+5]-T*h[ye+7],Z[0]=x*(h[ye+0]+h[ye+4]),Z[3]=x*(h[ye+0]-h[ye+4]),Z[1]=j[0]+j[3],Z[2]=j[1]-j[2],oe[0]=Z[0]+Z[1],oe[1]=Z[3]+Z[2],oe[2]=Z[3]-Z[2],oe[3]=Z[0]-Z[1],h[ye+0]=oe[0]+ee[0],h[ye+1]=oe[1]+ee[1],h[ye+2]=oe[2]+ee[2],h[ye+3]=oe[3]+ee[3],h[ye+4]=oe[3]-ee[3],h[ye+5]=oe[2]-ee[2],h[ye+6]=oe[1]-ee[1],h[ye+7]=oe[0]-ee[0]}for(let ge=0;ge<8;++ge)j[0]=D*h[16+ge],j[1]=$*h[16+ge],j[2]=D*h[48+ge],j[3]=$*h[48+ge],ee[0]=T*h[8+ge]+I*h[24+ge]+F*h[40+ge]+ie*h[56+ge],ee[1]=I*h[8+ge]-ie*h[24+ge]-T*h[40+ge]-F*h[56+ge],ee[2]=F*h[8+ge]-T*h[24+ge]+ie*h[40+ge]+I*h[56+ge],ee[3]=ie*h[8+ge]-F*h[24+ge]+I*h[40+ge]-T*h[56+ge],Z[0]=x*(h[ge]+h[32+ge]),Z[3]=x*(h[ge]-h[32+ge]),Z[1]=j[0]+j[3],Z[2]=j[1]-j[2],oe[0]=Z[0]+Z[1],oe[1]=Z[3]+Z[2],oe[2]=Z[3]-Z[2],oe[3]=Z[0]-Z[1],h[0+ge]=oe[0]+ee[0],h[8+ge]=oe[1]+ee[1],h[16+ge]=oe[2]+ee[2],h[24+ge]=oe[3]+ee[3],h[32+ge]=oe[3]-ee[3],h[40+ge]=oe[2]-ee[2],h[48+ge]=oe[1]-ee[1],h[56+ge]=oe[0]-ee[0]}function Ee(h){for(let x=0;x<64;++x){const T=h[0][x],D=h[1][x],I=h[2][x];h[0][x]=T+1.5747*I,h[1][x]=T-.1873*D-.4682*I,h[2][x]=T+1.8556*D}}function U(h,x,T){for(let D=0;D<64;++D)x[T+D]=Lf.toHalfFloat(A(h[D]))}function A(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(w,Math.abs(h)-1)}function k(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function K(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),T=new Uint8Array(ze(x)),D=new Uint8Array(T.length);return at(T),B(T,D),new DataView(D.buffer)}function le(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),T=Ga(x),D=new Uint8Array(T.length);return at(T),B(T,D),new DataView(D.buffer)}function Q(h){const x=h.viewer,T={value:h.offset.value},D=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),I=new Uint8Array(8192);let F=0;const $=new Array(h.inputChannels.length);for(let Pe=0,Te=h.inputChannels.length;Pe<Te;Pe++)$[Pe]={},$[Pe].start=F,$[Pe].end=$[Pe].start,$[Pe].nx=h.columns,$[Pe].ny=h.lines,$[Pe].size=h.type,F+=$[Pe].nx*$[Pe].ny*$[Pe].size;const ie=re(x,T),j=re(x,T);if(j>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ie<=j)for(let Pe=0;Pe<j-ie+1;Pe++)I[Pe+ie]=Ye(x,T);const ee=new Uint16Array(65536),Z=y(I,ee),oe=De(x,T);qe(h.array,x,T,oe,D,F);for(let Pe=0;Pe<h.inputChannels.length;++Pe){const Te=$[Pe];for(let Me=0;Me<$[Pe].size;++Me)Oe(D,Te.start+Me,Te.nx,Te.size,Te.ny,Te.nx*Te.size,Z)}Ge(ee,D,F);let ge=0;const ye=new Uint8Array(D.buffer.byteLength);for(let Pe=0;Pe<h.lines;Pe++)for(let Te=0;Te<h.inputChannels.length;Te++){const Me=$[Te],ve=Me.nx*Me.size,ct=new Uint8Array(D.buffer,Me.end*2,ve*2);ye.set(ct,ge),ge+=ve*2,Me.end+=ve}return new DataView(ye.buffer)}function Ae(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),T=Ga(x),D=h.inputChannels.length*h.lines*h.columns*h.totalBytes,I=new ArrayBuffer(D),F=new DataView(I);let $=0,ie=0;const j=new Array(4);for(let ee=0;ee<h.lines;ee++)for(let Z=0;Z<h.inputChannels.length;Z++){let oe=0;switch(h.inputChannels[Z].pixelType){case 1:j[0]=$,j[1]=j[0]+h.columns,$=j[1]+h.columns;for(let ye=0;ye<h.columns;++ye){const Pe=T[j[0]++]<<8|T[j[1]++];oe+=Pe,F.setUint16(ie,oe,!0),ie+=2}break;case 2:j[0]=$,j[1]=j[0]+h.columns,j[2]=j[1]+h.columns,$=j[2]+h.columns;for(let ye=0;ye<h.columns;++ye){const Pe=T[j[0]++]<<24|T[j[1]++]<<16|T[j[2]++]<<8;oe+=Pe,F.setUint32(ie,oe,!0),ie+=4}break}}return F}function he(h){const x=h.viewer,T={value:h.offset.value},D=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),I={version:Ke(x,T),unknownUncompressedSize:Ke(x,T),unknownCompressedSize:Ke(x,T),acCompressedSize:Ke(x,T),dcCompressedSize:Ke(x,T),rleCompressedSize:Ke(x,T),rleUncompressedSize:Ke(x,T),rleRawSize:Ke(x,T),totalAcUncompressedCount:Ke(x,T),totalDcUncompressedCount:Ke(x,T),acCompression:Ke(x,T)};if(I.version<2)throw new Error("EXRLoader.parse: "+_n.compression+" version "+I.version+" is unsupported");const F=new Array;let $=re(x,T)-2;for(;$>0;){const Te=me(x.buffer,T),Me=Ye(x,T),ve=Me>>2&3,ct=(Me>>4)-1,$e=new Int8Array([ct])[0],Rt=Ye(x,T);F.push({name:Te,index:$e,type:Rt,compression:ve}),$-=Te.length+3}const ie=_n.channels,j=new Array(h.inputChannels.length);for(let Te=0;Te<h.inputChannels.length;++Te){const Me=j[Te]={},ve=ie[Te];Me.name=ve.name,Me.compression=0,Me.decoded=!1,Me.type=ve.pixelType,Me.pLinear=ve.pLinear,Me.width=h.columns,Me.height=h.lines}const ee={idx:new Array(3)};for(let Te=0;Te<h.inputChannels.length;++Te){const Me=j[Te];for(let ve=0;ve<F.length;++ve){const ct=F[ve];Me.name==ct.name&&(Me.compression=ct.compression,ct.index>=0&&(ee.idx[ct.index]=Te),Me.offset=Te)}}let Z,oe,ge;if(I.acCompressedSize>0)switch(I.acCompression){case 0:Z=new Uint16Array(I.totalAcUncompressedCount),qe(h.array,x,T,I.acCompressedSize,Z,I.totalAcUncompressedCount);break;case 1:const Te=h.array.slice(T.value,T.value+I.totalAcUncompressedCount),Me=Ga(Te);Z=new Uint16Array(Me.buffer),T.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const Te={array:h.array,offset:T,size:I.dcCompressedSize};oe=new Uint16Array(le(Te).buffer),T.value+=I.dcCompressedSize}if(I.rleRawSize>0){const Te=h.array.slice(T.value,T.value+I.rleCompressedSize),Me=Ga(Te);ge=ze(Me.buffer),T.value+=I.rleCompressedSize}let ye=0;const Pe=new Array(j.length);for(let Te=0;Te<Pe.length;++Te)Pe[Te]=new Array;for(let Te=0;Te<h.lines;++Te)for(let Me=0;Me<j.length;++Me)Pe[Me].push(ye),ye+=j[Me].width*h.type*2;We(ee,Pe,j,Z,oe,D);for(let Te=0;Te<j.length;++Te){const Me=j[Te];if(!Me.decoded)switch(Me.compression){case 2:let ve=0,ct=0;for(let $e=0;$e<h.lines;++$e){let Rt=Pe[Te][ve];for(let ot=0;ot<Me.width;++ot){for(let Qe=0;Qe<2*Me.type;++Qe)D[Rt++]=ge[ct+Qe*Me.width*Me.height];ct++}ve++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function me(h,x){const T=new Uint8Array(h);let D=0;for(;T[x.value+D]!=0;)D+=1;const I=new TextDecoder().decode(T.slice(x.value,x.value+D));return x.value=x.value+D+1,I}function je(h,x,T){const D=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+T));return x.value=x.value+T,D}function de(h,x){const T=Se(h,x),D=De(h,x);return[T,D]}function ue(h,x){const T=De(h,x),D=De(h,x);return[T,D]}function Se(h,x){const T=h.getInt32(x.value,!0);return x.value=x.value+4,T}function De(h,x){const T=h.getUint32(x.value,!0);return x.value=x.value+4,T}function Ce(h,x){const T=h[x.value];return x.value=x.value+1,T}function Ye(h,x){const T=h.getUint8(x.value);return x.value=x.value+1,T}const Ke=function(h,x){let T;return"getBigInt64"in DataView.prototype?T=Number(h.getBigInt64(x.value,!0)):T=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,T};function tt(h,x){const T=h.getFloat32(x.value,!0);return x.value+=4,T}function W(h,x){return Lf.toHalfFloat(tt(h,x))}function ne(h){const x=(h&31744)>>10,T=h&1023;return(h>>15?-1:1)*(x?x===31?T?NaN:1/0:Math.pow(2,x-15)*(1+T/1024):6103515625e-14*(T/1024))}function re(h,x){const T=h.getUint16(x.value,!0);return x.value+=2,T}function fe(h,x){return ne(re(h,x))}function Fe(h,x,T,D){const I=T.value,F=[];for(;T.value<I+D-1;){const $=me(x,T),ie=Se(h,T),j=Ye(h,T);T.value+=3;const ee=Se(h,T),Z=Se(h,T);F.push({name:$,pixelType:ie,pLinear:j,xSampling:ee,ySampling:Z})}return T.value+=1,F}function Ie(h,x){const T=tt(h,x),D=tt(h,x),I=tt(h,x),F=tt(h,x),$=tt(h,x),ie=tt(h,x),j=tt(h,x),ee=tt(h,x);return{redX:T,redY:D,greenX:I,greenY:F,blueX:$,blueY:ie,whiteX:j,whiteY:ee}}function nt(h,x){const T=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=Ye(h,x);return T[D]}function bt(h,x){const T=Se(h,x),D=Se(h,x),I=Se(h,x),F=Se(h,x);return{xMin:T,yMin:D,xMax:I,yMax:F}}function Xt(h,x){const T=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],D=Ye(h,x);return T[D]}function ht(h,x){const T=["ENVMAP_LATLONG","ENVMAP_CUBE"],D=Ye(h,x);return T[D]}function Pt(h,x){const T=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],D=["ROUND_DOWN","ROUND_UP"],I=De(h,x),F=De(h,x),$=Ye(h,x);return{xSize:I,ySize:F,levelMode:T[$&15],roundingMode:D[$>>4]}}function Rn(h,x){const T=tt(h,x),D=tt(h,x);return[T,D]}function Ri(h,x){const T=tt(h,x),D=tt(h,x),I=tt(h,x);return[T,D,I]}function Wr(h,x,T,D,I){if(D==="string"||D==="stringvector"||D==="iccProfile")return je(x,T,I);if(D==="chlist")return Fe(h,x,T,I);if(D==="chromaticities")return Ie(h,T);if(D==="compression")return nt(h,T);if(D==="box2i")return bt(h,T);if(D==="envmap")return ht(h,T);if(D==="tiledesc")return Pt(h,T);if(D==="lineOrder")return Xt(h,T);if(D==="float")return tt(h,T);if(D==="v2f")return Rn(h,T);if(D==="v3f")return Ri(h,T);if(D==="int")return Se(h,T);if(D==="rational")return de(h,T);if(D==="timecode")return ue(h,T);if(D==="preview")return T.value+=I,"skipped";T.value+=I}function zn(h,x){const T=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(T):Math.ceil(T)}function Ci(h,x,T){let D=0;switch(h.levelMode){case"ONE_LEVEL":D=1;break;case"MIPMAP_LEVELS":D=zn(Math.max(x,T),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return D}function vr(h,x,T,D){const I=new Array(h);for(let F=0;F<h;F++){const $=1<<F;let ie=x/$|0;D=="ROUND_UP"&&ie*$<x&&(ie+=1);const j=Math.max(ie,1);I[F]=(j+T-1)/T|0}return I}function Xr(){const h=this,x=h.offset,T={value:0};for(let D=0;D<h.tileCount;D++){const I=Se(h.viewer,x),F=Se(h.viewer,x);x.value+=8,h.size=De(h.viewer,x);const $=I*h.blockWidth,ie=F*h.blockHeight;h.columns=$+h.blockWidth>h.width?h.width-$:h.blockWidth,h.lines=ie+h.blockHeight>h.height?h.height-ie:h.blockHeight;const j=h.columns*h.totalBytes,Z=h.size<h.lines*j?h.uncompress(h):k(h);x.value+=h.size;for(let oe=0;oe<h.lines;oe++){const ge=oe*h.columns*h.totalBytes;for(let ye=0;ye<h.inputChannels.length;ye++){const Pe=_n.channels[ye].name,Te=h.channelByteOffsets[Pe]*h.columns,Me=h.decodeChannels[Pe];if(Me===void 0)continue;T.value=ge+Te;const ve=(h.height-(1+ie+oe))*h.outLineWidth;for(let ct=0;ct<h.columns;ct++){const $e=ve+(ct+$)*h.outputChannels+Me;h.byteArray[$e]=h.getter(Z,T)}}}}}function Kn(){const h=this,x=h.offset,T={value:0};for(let D=0;D<h.height/h.blockHeight;D++){const I=Se(h.viewer,x)-_n.dataWindow.yMin;h.size=De(h.viewer,x),h.lines=I+h.blockHeight>h.height?h.height-I:h.blockHeight;const F=h.columns*h.totalBytes,ie=h.size<h.lines*F?h.uncompress(h):k(h);x.value+=h.size;for(let j=0;j<h.blockHeight;j++){const ee=D*h.blockHeight,Z=j+h.scanOrder(ee);if(Z>=h.height)continue;const oe=j*F,ge=(h.height-1-Z)*h.outLineWidth;for(let ye=0;ye<h.inputChannels.length;ye++){const Pe=_n.channels[ye].name,Te=h.channelByteOffsets[Pe]*h.columns,Me=h.decodeChannels[Pe];if(Me!==void 0){T.value=oe+Te;for(let ve=0;ve<h.columns;ve++){const ct=ge+ve*h.outputChannels+Me;h.byteArray[ct]=h.getter(ie,T)}}}}}}function qr(h,x,T){const D={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");D.version=h.getUint8(4);const I=h.getUint8(5);D.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},T.value=8;let F=!0;for(;F;){const $=me(x,T);if($==0)F=!1;else{const ie=me(x,T),j=De(h,T),ee=Wr(h,x,T,ie,j);ee===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ie}'.`):D[$]=ee}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",D),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return D}function xr(h,x,T,D,I){const F={size:0,viewer:x,array:T,offset:D,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Xi};switch(h.compression){case"NO_COMPRESSION":F.blockHeight=1,F.uncompress=k;break;case"RLE_COMPRESSION":F.blockHeight=1,F.uncompress=K;break;case"ZIPS_COMPRESSION":F.blockHeight=1,F.uncompress=le;break;case"ZIP_COMPRESSION":F.blockHeight=16,F.uncompress=le;break;case"PIZ_COMPRESSION":F.blockHeight=32,F.uncompress=Q;break;case"PXR24_COMPRESSION":F.blockHeight=16,F.uncompress=Ae;break;case"DWAA_COMPRESSION":F.blockHeight=32,F.uncompress=he;break;case"DWAB_COMPRESSION":F.blockHeight=256,F.uncompress=he;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const $={};for(const Z of h.channels)switch(Z.name){case"Y":case"R":case"G":case"B":case"A":$[Z.name]=!0,F.type=Z.pixelType}let ie=!1;if($.R&&$.G&&$.B)ie=!$.A,F.outputChannels=4,F.decodeChannels={R:0,G:1,B:2,A:3};else if($.Y)F.outputChannels=1,F.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(F.type==1)switch(I){case Gn:F.getter=fe;break;case Hi:F.getter=re;break}else if(F.type==2)switch(I){case Gn:F.getter=tt;break;case Hi:F.getter=W}else throw new Error("EXRLoader.parse: unsupported pixelType "+F.type+" for "+h.compression+".");F.columns=F.width;const j=F.width*F.height*F.outputChannels;switch(I){case Gn:F.byteArray=new Float32Array(j),ie&&F.byteArray.fill(1,0,j);break;case Hi:F.byteArray=new Uint16Array(j),ie&&F.byteArray.fill(15360,0,j);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let ee=0;for(const Z of h.channels)F.decodeChannels[Z.name]!==void 0&&(F.channelByteOffsets[Z.name]=ee),ee+=Z.pixelType*2;if(F.totalBytes=ee,F.outLineWidth=F.width*F.outputChannels,h.lineOrder==="INCREASING_Y"?F.scanOrder=Z=>Z:F.scanOrder=Z=>F.height-1-Z,F.outputChannels==4?(F.format=dn,F.colorSpace=Xi):(F.format=dh,F.colorSpace=en),h.spec.singleTile){F.blockHeight=h.tiles.ySize,F.blockWidth=h.tiles.xSize;const Z=Ci(h.tiles,F.width,F.height),oe=vr(Z,F.width,h.tiles.xSize,h.tiles.roundingMode),ge=vr(Z,F.height,h.tiles.ySize,h.tiles.roundingMode);F.tileCount=oe[0]*ge[0];for(let ye=0;ye<Z;ye++)for(let Pe=0;Pe<ge[ye];Pe++)for(let Te=0;Te<oe[ye];Te++)Ke(x,D);F.decode=Xr.bind(F)}else{F.blockWidth=F.width;const Z=Math.ceil(F.height/F.blockHeight);for(let oe=0;oe<Z;oe++)Ke(x,D);F.decode=Kn.bind(F)}return F}const Yr={value:0},qi=new DataView(e),Ms=new Uint8Array(e),_n=qr(qi,e,Yr),Cn=xr(_n,qi,Ms,Yr,this.type);return Cn.decode(),{header:_n,width:Cn.width,height:Cn.height,data:Cn.byteArray,format:Cn.format,colorSpace:Cn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function o(s,a){s.colorSpace=a.colorSpace,s.minFilter=vt,s.magFilter=vt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,o,n,r)}}async function Sn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),o=r.vertexCount,s=r.indexCount;let a=4+n;const l=new gr,c=r.attributes;for(let u=0,d=c.length;u<d;u++){const f=c[u],m=f.id,v=m==="indices"?s:o,g=f.componentSize,_=globalThis[f.storageType],p=new _(t,a,v*g),b=_.BYTES_PER_ELEMENT;let S;if(f.needsPack){const M=f.packedComponents,L=M.length,C=f.storageType.indexOf("Int")===0,E=1<<b*8,P=C?E*.5:0,w=1/E;S=new Float32Array(v*g);for(let y=0,R=0;y<v;y++)for(let N=0;N<L;N++){const O=M[N];S[R]=(p[R]+P)*w*O.delta+O.from,R++}}else S=p;if(m==="indices"){let M=S;S instanceof Uint8Array&&(M=new Uint16Array(S.length),M.set(S)),l.setIndex(new Yt(M,1))}else l.setAttribute(m,new Yt(S,g));a+=v*g*b}return l.computeBoundingSphere(),l}const Wa=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Pc={density:1,friction:2,restitution:.8},qS=40,go=8,YS=`
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
`,$S=`
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
uniform vec4 u_nearPositionRadiusList[${go}];
uniform vec3 u_nearColorList[${go}];

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

  for (int i = 0; i < ${go}; i++) {
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
  gi /= float(${go});

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
`,ZS=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,KS=`
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
`;function jS(i){const e={...Pc},t={...Pc},n={...Pc};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function JS(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function ld(i,e,t,n,r){const o=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*o}class QS{constructor(e,t,n,r,o,s=!1){this.position=new q((o()-.5)*12,(o()-.5)*12,s?7+o():(o()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new On().setFromEuler(new li(o()*Math.PI,o()*Math.PI,o()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new q,this.gravityAcc=new q}applyImpulse(){this.velocity.add(new q((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(qS),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function eM(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Wa.length),r=Wa[n];const o=new Eo,s=new Hn(25,1,.1,100);s.position.set(0,0,25);const a=new Il({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Xi,a.toneMapping=Gi;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,d=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[f,m]=await Promise.all([Sn(u),new Promise((B,ze)=>{new XS().load(d,B,void 0,ze)})]);m.minFilter=vt,m.magFilter=vt,m.generateMipmaps=!1,m.colorSpace=en;const v=new q(10,10,5),g=jS(r),_=JS("balloonBody-25"),p=[],b=[],S=[],M=[],L=Array.from({length:go},()=>new Ft(0,0,-999,.01)),C=Array.from({length:go},()=>new Je(1118481)),E=B=>new At({uniforms:{u_matcap:{value:m},u_color:{value:new Je(B.color)},u_bgColor:{value:new Je(1316117)},u_roughness:{value:B.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Ft(0,0,0,1)},u_selfRotation:{value:new Ft(0,0,0,1)},u_nearPositionRadiusList:{value:L.map(ze=>ze.clone())},u_nearColorList:{value:C.map(ze=>ze.clone())}},vertexShader:YS,fragmentShader:$S});for(const B of g){const ze=E(B),We=new Ut(f,ze);We.frustumCulled=!1,We.scale.setScalar(B.radius),o.add(We),b.push(We),S.push(ze),p.push(new QS(B.radius,B.density,B.friction,B.restitution,_,!1)),M.push({i:b.length-1,d2:0})}const P=new At({uniforms:{u_color0:{value:new Je(r)},u_color1:{value:new Je(1316117)},u_aspect:{value:1}},vertexShader:ZS,fragmentShader:KS,depthWrite:!1}),w=new Ut(new xi(90,60),P);w.position.z=-12,w.renderOrder=-1e3,o.add(w);const y=new et(0,0),R=new q,N=new q,O=new q,V=new q,H=new q,G=new q,Y=new q,z=new q,se=new q,X=new q,_e=new On,we=.025,Re=.1,J=.12,te=B=>{const ze=(e||i).getBoundingClientRect();y.x=(B.clientX-ze.left)/ze.width*2-1,y.y=-((B.clientY-ze.top)/ze.height*2-1)};window.addEventListener("pointermove",te);const ce=()=>{n=(n+1)%Wa.length,r=Wa[n],b.forEach((B,ze)=>{const We=g[ze];We.isColored&&(B.material.uniforms.u_color.value.set(r),We.color=r)}),P.uniforms.u_color0.value.set(r),p.forEach(B=>B.applyImpulse())},ae=()=>ce();i.addEventListener("click",ae),e==null||e.addEventListener("click",ae);const be=()=>{const B=e||i.parentElement,ze=B.clientWidth,We=B.clientHeight,He=ze/Math.max(We,1);s.fov=ld(He,2.2,2/3,18,30),s.aspect=He,s.updateProjectionMatrix(),a.setSize(ze,We,!1),P.uniforms.u_aspect.value=He};be(),window.addEventListener("resize",be);let Oe=0,Ue=performance.now();const qe=performance.now(),Ge=()=>{const ze=(e||i).getBoundingClientRect();l=ze.bottom>0&&ze.top<window.innerHeight};window.addEventListener("scroll",Ge,{passive:!0}),Ge();const at=B=>{if(Oe=requestAnimationFrame(at),!l){Ue=B;return}let ze=Math.min(.05,(B-Ue)/1e3);Ue=B;const We=t?1:2;ze/=We;const He=(B-qe)/1e3,Be=ld(He,.3,2,25,17.5);s.position.z=Be;for(let Xe=0;Xe<We;Xe++){const Ee=new q(y.x,y.y,.5).unproject(s);Ee.sub(s.position).normalize();const U=(0-s.position.z)/Ee.z;R.copy(s.position).addScaledVector(Ee,U),O.copy(R).sub(N).multiplyScalar(J/Math.max(ze,.001)),V.copy(R).sub(s.position);const A=V.lengthSq()||1;N.copy(R);for(let k=0;k<p.length;k++){const K=p[k];K.updateGravity(ze),G.copy(K.velocity),Y.copy(K.position);for(let he=k+1;he<p.length;he++){const me=p[he];se.copy(me.velocity),X.copy(me.position),H.copy(Y).sub(X);const je=H.length(),de=K.radius+me.radius;if(je<de&&je>1e-6){const ue=Math.sqrt(K.friction*me.friction);K.frictionTot+=ue,me.frictionTot+=ue,H.normalize(),H.multiplyScalar(.5*(je-de)),Y.sub(H),X.add(H),H.normalize();const Se=G.dot(H),De=se.dot(H),Ce=K.mass,Ye=me.mass,Ke=(Ce*Se+Ye*De-Ye*(Se-De)*K.restitution)/(Ce+Ye),tt=(Ce*Se+Ye*De-Ce*(De-Se)*me.restitution)/(Ce+Ye);G.addScaledVector(H,(Ke-Se)/(1+ue)),se.addScaledVector(H,(tt-De)/(1+ue)),me.position.copy(X),me.velocity.copy(se)}}z.copy(Y).sub(s.position);let le=z.dot(V)/A;le=z.sub(se.copy(V).multiplyScalar(le)).length()-K.radius-we,le<0&&(z.copy(Y).sub(s.position).cross(V).normalize(),se.copy(V).cross(z).normalize(),Y.sub(se.multiplyScalar(Re*le)),se.multiplyScalar(-J/Math.max(ze,.001)),G.add(se),G.add(O));let Q=Y.length();if(Q>0){z.set(1,1,1).normalize();let he=1-Math.abs(z.dot(se.copy(Y).normalize()));he*=ze*Math.min(1,Math.max(0,Q/2))*.5,he*=k%2*2-1,_e.setFromAxisAngle(z,he),se.copy(Y).applyQuaternion(_e).sub(z.copy(Y)),G.add(se)}z.crossVectors(Y,G);let Ae=z.length();Ae/=K.inertia,Ae>0&&(z.normalize(),_e.setFromAxisAngle(z,Ae*ze),K.quaternion.premultiply(_e)),K.position.copy(Y),K.velocity.copy(G),K.update(ze),["x","y","z"].forEach(he=>{const me=he==="z"?5.5:7.5;K.position[he]>me&&(K.position[he]=me,K.velocity[he]*=-.55),K.position[he]<-me&&(K.position[he]=-me,K.velocity[he]*=-.55)})}}for(let Xe=0;Xe<b.length;Xe++){const Ee=b[Xe],U=p[Xe];Ee.position.copy(U.position),Ee.quaternion.copy(U.quaternion);const A=S[Xe].uniforms;A.u_selfPositionRadius.value.set(U.position.x,U.position.y,U.position.z,U.radius),A.u_selfRotation.value.set(U.quaternion.x,U.quaternion.y,U.quaternion.z,U.quaternion.w),A.u_bgColor.value.copy(P.uniforms.u_color1.value)}for(let Xe=0;Xe<b.length;Xe++){for(let A=0;A<b.length;A++)M[A].i=A,M[A].d2=Xe===A?0:p[Xe].position.distanceToSquared(p[A].position);M.sort((A,k)=>A.d2-k.d2);const Ee=S[Xe].uniforms.u_nearPositionRadiusList.value,U=S[Xe].uniforms.u_nearColorList.value;for(let A=0;A<go;A++){const k=M[A+1]?M[A+1].i:M[0].i,K=p[k];Ee[A].set(K.position.x,K.position.y,K.position.z,K.radius),U[A].copy(S[k].uniforms.u_color.value)}}s.position.x+=(y.x*.9-s.position.x)*.04,s.position.y+=(y.y*.55-s.position.y)*.04,s.lookAt(0,0,0),a.render(o,s)};return Oe=requestAnimationFrame(at),{cycleColor:ce,destroy(){cancelAnimationFrame(Oe),window.removeEventListener("pointermove",te),window.removeEventListener("resize",be),window.removeEventListener("scroll",Ge),i.removeEventListener("click",ae),e==null||e.removeEventListener("click",ae),S.forEach(B=>B.dispose()),P.dispose(),a.dispose()}}}function tn(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function ti(i){return tn(i,0,1)}function mm(i,e,t){return(t-i)/(e-i||1)}function fo(i,e,t){return tn(mm(i,e,t),0,1)}function pe(i,e,t,n,r,o){let s=fo(e,t,i);return o&&(s=o(s)),n+s*(r-n)}function cd(i,e,t,n,r,o){let s=mm(e,t,i);return n+s*(r-n)}function tM(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const o=(g,_,p,b)=>1/(3*_*g*g+2*p*g+b),s=(g,_,p,b,S)=>_*(g*g*g)+p*(g*g)+b*g+S,a=(g,_,p,b,S)=>{const M=g*g;return _*(M*g)+p*M+b*g+S},l=1-3*n+3*e,c=3*n-6*e,u=3*e,d=1-3*r+3*t,f=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=s(v,l,c,u,0);let p=o(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,d,f,m,0)}function _t(i){return tM(i,.35,0,0,1)}function wl(i){return i===1?1:1-Math.pow(2,-10*i)}function nM(i){return i===0?0:Math.pow(1024,i-1)}function iM(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function rM(i){return 1-Math.cos(i*Math.PI/2)}function ku(i){return Math.sin(i*Math.PI/2)}function oM(i){return-(Math.cos(Math.PI*i)-1)/2}function sM(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function Hu(i){return i*i*i}function Vu(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Mn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,o=e.bottom;let s=Math.min(0,cd(n,t,t-r,-1,0));s+=Math.max(0,cd(n,0,-r,0,1));const a=pe(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=s>=-1&&s<=1;return{top:n,bottom:o,height:r,width:e.width,ratio:s,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function aM(i){return 1-Math.pow(1-i,3)}function lM(i){return i*i*i*i}function cM(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function Ui(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const ud=[{id:"blackFrameShow",isPixelBased:!0},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",isPixelBased:!0},{id:"astronautWait",isPixelBased:!0}];function Xa(i){if(!i)return{top:0,bottom:0,height:0,left:0,width:0};const e=i.getBoundingClientRect(),t=e.top+window.scrollY;return{top:t,bottom:t+e.height,height:e.height,left:e.left+window.scrollX,width:e.width}}function hd(i,e){var o,s,a,l;if(!i)return 0;const t=i.getBoundingClientRect().height;if(t>8)return t;const n=((o=i.querySelector)==null?void 0:o.call(i,'[id$="-inner"]'))||((a=(s=i.parentElement)==null?void 0:s.querySelector)==null?void 0:a.call(s,'[id$="-inner"]'))||i,r=((l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n).width)||i.getBoundingClientRect().width||window.innerWidth*.45;return Math.max(8,r*e)}function Sh(i){const e={};let t=0;for(const f of ud)e[f.id]={...f,pixelFrom:0,pixelTo:0,pixelCount:0},f.weight&&(t+=f.weight);let n=0,r=1,o=-1;function s(){if(!i)return;const f=window.innerHeight||1,m=Xa(i),v=i.querySelector("#home-goal-image-in")||i.querySelector("#home-goal-image-in-inner"),g=i.querySelector("#home-goal-image-out")||i.querySelector("#home-goal-image-out-inner"),_=Xa(v),p=Xa(g),b=Math.max(_.height,hd(v,1080/1496)),S=Math.max(p.height,hd(g,1537/2e3));n=(_.top||m.top)-f;const M=(f+b)*.5,L=Math.max((f+S)*.5+f,f*1.85),C=document.getElementById("footer-section")||document.getElementById("end-section")||document.querySelector("footer"),E=document.documentElement.scrollHeight,P=C?Math.max(Xa(C).bottom,E):E;let w=Math.max(f*1.35,P-m.bottom);const y=Math.max(f*12,E-f-n);let R=Math.max(f*8,m.bottom-n-M-L);const N=M+L+w;N+R>y&&(R=Math.max(f*6,y-N)),N+R>y&&(w=Math.max(f*.5,y-M-L-R)),e.blackFrameShow.pixelCount=M,e.astronautDrop.pixelCount=L,e.astronautWait.pixelCount=Math.max(f*.5,w),r=0;for(const O of ud){const V=e[O.id];V.pixelFrom=r,V.weight&&(V.pixelCount=R*V.weight/t),V.id==="blackFrameIn"&&(V.pixelCount=Math.min(V.pixelCount,f*1.15)),r+=V.pixelCount,V.pixelTo=r}}function a(){const f=(window.innerHeight|0)*1e6+((i==null?void 0:i.offsetHeight)|0)%1e6;f!==o&&(o=f,s())}function l(){return window.scrollY||window.pageYOffset||0}function c(){return a(),l()-n}function u(f,m=f){a();const v=e[f],g=e[m],_=v.pixelFrom,p=g.pixelTo,b=Math.max(p-_,1e-6),S=c()-_,M=S/b;return{ratio:Math.max(0,Math.min(1,M)),raw:M,active:M>=0&&M<1,global:c()/Math.max(r,1),pixel:S,pixelCount:b}}function d(f,m){return u(f,m)}return typeof window<"u"&&(s(),window.addEventListener("resize",()=>{o=-1,s()})),{items:e,progress:()=>(a(),Math.max(0,Math.min(1,c()/Math.max(r,1)))),range:u,between:d,totalWeight:t,rebuild:s}}const uM=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,hM=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,fM="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",dM="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",_m=`
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
`,gm=`
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
  // Exact Lusion common — no AO/albedo floors (floors washed the entry suit + bloom)
  float ao = v_ao * armb.r;
  float roughness = armb.g;
  float metalness = armb.b;
  float albedo = armb.a;
  vec3 N = worldNormal;
  vec3 V = normalize(cameraPosition - v_worldPosition);
  vec3 reflection = normalize(reflect(-V, N));
  float NdV = clamp(abs(dot(N, V)), 0.001, 1.0);
  float fresnel = pow(1.0 - NdV, 5.0);
`,pM=`
${_m}
uniform sampler2D u_matcapTexture;
uniform sampler2D u_envTexture;
uniform vec3 u_ambientColor;
uniform vec3 u_sunPosition;
uniform float u_frameOutRatio;
uniform float u_whiteTunnelRatio;
uniform vec3 u_tintColor;
uniform float u_faceLedLight;
uniform vec3 u_faceLedColor;
uniform vec3 u_cardPosition;

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
${gm}
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
  // Face LED panel light (Lusion fragWhite)
  vec3 ledLightPos = u_cardPosition;
  vec3 ledLightDir = ledLightPos - v_worldPosition;
  float ledLightDist = max(length(ledLightDir), 0.001);
  ledLightDir /= ledLightDist;
  float attenuationLed = 1.0 / (16.0 * ledLightDist);
  color += attenuationLed * u_faceLedLight * u_faceLedColor
    * getMetalShininess(V, u_cardPosition, N, (1.0 - metalness), metalness);
  attenuationLed = 1.0 / (16.0 * ledLightDist * ledLightDist);
  color += 0.5 * u_faceLedLight * u_faceLedColor * albedo * attenuationLed
    * (0.5 + 0.5 * saturate(dot(ledLightDir, N)));
  gl_FragColor.rgb = mix(u_bgColor, color, vec3(u_showRatio * 0.8 + 0.2));
#ifndef IS_HELMET_GLASS
  gl_FragColor.rgb += outOfFrameRatio * max(worldNormal.z * 2.0 * sunNdL, metalness)
    * texture2D(u_envTexture, 1.2 * (uv - 0.5) + vec2(0.5)).rgb * 0.75 * v_ao;
#endif
  gl_FragColor.rgb = min(vec3(1.0), gl_FragColor.rgb + u_tintColor * (1.0 - u_frameOutRatio * 0.3) * (0.4 + gl_FragColor.b * 0.6));
  gl_FragColor.rgb *= 0.95 + mix(u_tintColor, vec3(1.0), v_ao) * 0.1;
  gl_FragColor.rgb *= mix(1.0, metalMask * 0.7 + 0.3, linearStep(0.8, 1.0, u_frameOutRatio));
  // Lusion fragWhite: tiny alpha so Stage3D bloom doesn't wash the suit/visor
  gl_FragColor.a = 0.01;
}
`,mM=`
uniform sampler2D u_cardTexture;
uniform sampler2D u_cardLedTexture;
uniform vec2 u_cardUvOffset;
uniform vec2 u_cardTextureSize;
uniform vec3 u_cardColor;
uniform float u_cardOpacity;
uniform float u_time;
varying vec2 v_uv;
void main() {
  vec2 uv = v_uv / u_cardTextureSize;
  vec4 texel = texture2D(u_cardTexture, uv + u_cardUvOffset);
  vec3 ledTexture = pow(texture2D(u_cardLedTexture, fract(v_uv * vec2(20.0, 15.0))).rgb, vec3(2.2));
  float ledMask = dot(ledTexture, u_cardColor * texel.r);
  gl_FragColor.rgb = pow(ledTexture, vec3(1.0 / 2.2)) * ledMask * 2.5 * u_cardOpacity;
  gl_FragColor.a = texel.r * 0.35 * u_cardOpacity;
}
`,fd=`
${_m}
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
${gm}
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
#ifndef IS_HELMET_GLASS
  gl_FragColor.rgb += max(worldNormal.z * 2.0 * sunNdL, metalness)
    * texture2D(u_envTexture, 1.2 * (uv - 0.5) + vec2(0.5)).rgb * 0.75 * v_ao * (1.0 - u_blackTunnelRatio);
#endif
  // Exact Lusion bloom alpha (NOT 1.0 — alpha drives Stage3D bloom)
  gl_FragColor.a = 0.01 + 0.1 * max(0.0, gl_FragColor.g - 1.0 + metalness * 0.2) * (0.5 + metalness * 1.5)
    + gl_FragColor.b * u_blackTunnelRatio * dot(vec3(0.299, 0.587, 0.114), blackTunnelColor) * 5.0;
  // Soft-compress metalShininess — Lusion FFT bloom spreads specular energy;
  // raw += metalShininess blows a rectangular hotspot through our gaussian path.
  gl_FragColor.a += metalShininess / (1.0 + metalShininess);
  gl_FragColor.a *= (0.5 + fresnel * 0.9);
#endif
}
`,ir=5,qa=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,_M=`
uniform sampler2D u_texture;
uniform float u_amount;
uniform float u_convolutionBuffer;
uniform vec2 u_texelSize;
uniform vec2 u_aspect;
uniform float u_haloWidth;
uniform float u_haloRGBShift;
uniform float u_haloStrength;
uniform float u_haloMaskInner;
uniform float u_haloMaskOuter;
varying vec2 v_uv;
void main() {
  // Lusion USE_CONVOLUTION: slight zoom-out before sampling
  vec2 uv = (v_uv - 0.5) * (1.0 + u_convolutionBuffer) + 0.5;
  vec4 texel = texture2D(u_texture, uv);
  float alpha = texel.a * u_amount;
  gl_FragColor = vec4(texel.rgb * alpha, 1.0);
  if (u_haloStrength > 0.001) {
    vec2 toCenter = (uv - 0.5) * u_aspect;
    vec2 ghostUv = 1.0 - (toCenter + 0.5);
    vec2 ghostVec = (vec2(0.5) - ghostUv);
    vec2 direction = length(ghostVec) > 1e-5 ? normalize(ghostVec) : vec2(0.0);
    vec2 haloVec = direction * u_haloWidth;
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
  // Lusion USE_CONVOLUTION edge mask — kills bloom at zoomed borders
  gl_FragColor.rgb *= max(abs(uv.x - 0.5), abs(uv.y - 0.5)) > 0.5 ? 0.0 : 1.0;
}
`,gM=`
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
`,vM=`
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
  // Soft radial warp from scroll velocity (light approx of Lusion screenPaint)
  vec2 toCenter = v_uv - 0.5;
  float paint = clamp(u_scrollPaint, 0.0, 1.0);
  vec2 warp = toCenter * paint * 0.004;
  vec2 uv = v_uv + warp;
  vec2 rgbShift = normalize(toCenter + 1e-5) * paint * 0.0016;
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
`,xM=`
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
`;function $o(i,e,t=!1,n=0){const r={minFilter:vt,magFilter:vt,format:dn,type:n>0?Ai:Hi,depthBuffer:t,stencilBuffer:!1,samples:n},o=new _r(i,e,r);return t&&n===0&&(o.depthTexture=new Sl(i,e),o.depthTexture.type=bo),t&&n>0&&(o.depthTexture=new Sl(i,e),o.depthTexture.type=bo),o}function yM(i,e,t,{isMobile:n=!1}={}){const r=new et(1,1);i.getSize(r);let o=!!n,s=$o(1,1,!0,4),a=$o(1,1,!1),l=$o(1,1,!1),c=$o(1,1,!1),u=null;const d=[],f=[];for(let k=0;k<ir;k++)d.push($o(1,1)),f.push($o(1,1));const m=new Ll(-1,1,1,-1,0,1),v=new Ut(new xi(2,2),new xh),g=new Eo;g.add(v);const _=new At({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new et(1,1)},u_aspect:{value:new et(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:qa,fragmentShader:_M,depthTest:!1,depthWrite:!1,toneMapped:!1}),p=[];for(let k=0;k<ir;k++){const K=3+k*2;p.push(new At({uniforms:{u_texture:{value:null},u_resolution:{value:new et(1,1)},u_direction:{value:new et(1,0)}},defines:{KERNEL_RADIUS:K,SIGMA:K},vertexShader:qa,fragmentShader:gM,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const b=new Float32Array(ir),S=new At({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:b}},vertexShader:qa,fragmentShader:vM,depthTest:!1,depthWrite:!1,toneMapped:!1});let M=0;const L=new At({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new yt},u_prevProjectionViewMatrix:{value:new yt},u_aspect:{value:new et(1,1)},u_amount:{value:1}},vertexShader:qa,fragmentShader:xM,depthTest:!1,depthWrite:!1,toneMapped:!1}),C=new yt,E=new yt,P=new yt,w=new yt,y=new yt,R=new q,N=new li,O=new q(1,1,1),V=new On;let H=!0,G=1,Y=!1,z=0,se=0,X=1,_e=1,we=0,Re=.015,J=.6,te=.3,ce=.5,ae=0,be=new Je(0),Oe=!0,Ue=1,qe=1,Ge=1;const at=new et(1,0),B=new et(0,1),ze=(k,K)=>{v.material=k,i.setRenderTarget(K),i.clear(),i.render(g,m)},We=k=>{const K=Math.max(1,k);return 1<<Math.ceil(Math.log(K)/Math.log(2))},He=(k,K)=>{Ue=Math.max(1,Math.floor(k)),qe=Math.max(1,Math.floor(K));const le=1;s.setSize(Math.max(1,Math.floor(Ue*le)),Math.max(1,Math.floor(qe*le))),a.setSize(s.width,s.height),l.setSize(s.width,s.height);const Q=o?3:2;let Ae=Math.max(1,Math.ceil(Ue/Q)),he=Math.max(1,Math.ceil(qe/Q));c.setSize(Ae,he);for(let je=0;je<ir;je++)d[je].setSize(Ae,he),f[je].setSize(Ae,he),Ae=Math.max(1,Math.ceil(Ae/2)),he=Math.max(1,Math.ceil(he/2));_.uniforms.u_texelSize.value.set(1/Ue,1/qe);const me=qe/Math.sqrt(Ue*Ue+qe*qe)*2;_.uniforms.u_aspect.value.set(Ue/qe*me,me),L.uniforms.u_aspect.value.set(Ue/Math.max(qe,1),1)},Be=({blackFrameInRatio:k=0,blackTitleRatio:K=0,blackTunnelRatio:le=0,whiteFrameRatio:Q=0,whiteTunnelWaitRatio:Ae=0,astronautDropRatio:he=0,isWhiteTunnelActive:me=!1,isBlackTunnelActive:je=!1,isMobile:de=!1}={})=>{o=!!de;let ue=k*(kt.lerp(0,.15,K)+kt.clamp((le-.2)/.2,0,1)*.25);if(le>=.65){const Ye=kt.clamp((le-.65)/.1,0,1);ue=ue+(.08-ue)*Ye}if(me&&(ue=0),!me&&k>.55&&le<.25){const Ye=kt.lerp(de?.24:.42,de?.12:.18,kt.clamp(K/.5,0,1));ue=Math.max(ue,Ye*Math.min(1,k))}X=le<1?kt.lerp(1,3,kt.clamp(le/.7,0,1)):1;const Se=me&&he>.001&&he<1,De=Se?Math.sin(Math.min(he,1)*Math.PI):0;if(me){const Ye=de?12:20;z=he<1?kt.lerp(4,2,kt.clamp(Q/.05,0,1)):kt.lerp(0,Ye,kt.clamp(Ae/.1,0,1)),se=de?.45:.62,_e=de?1.2:1.35,Ge=de?1.15:1.35,Se&&(z=Math.max(z,de?8:14)*(.65+.55*De),se=Math.max(se,de?.55:.72),_e=Math.max(_e,1.45),ue=(de?.1:.16)*De),ae=kt.lerp(he<1?.38:.3,0,kt.clamp(Ae/.1,0,1)),be.set(he<1?"#ffffff":"#000000")}else{Ge=1;const Ye=kt.clamp(K/.25,0,1);z=kt.lerp(de?22:30,de?5:6,Ye),ae=0,be.set("#000000")}we=ue;const Ce=!me&&k>.55&&le<.2;Se?(J=.7,Re=de?.02:.035,te=.2,ce=.65):(J=Ce?.85:.6,Re=Ce?.04:de?.012:.02,te=Ce?.15:.3,ce=Ce?.75:.5),me||(se=de?.15:Ce?.55:.5,_e=Ce?1.15:1),Y=je||me},Xe=(k,K=0)=>{R.set(0,0,k),N.set(0,0,K)},Ee=()=>{H=!0},U=(k,K)=>{const le=i.autoClear;i.autoClear=!0,ze(k,K),i.autoClear=le},A=()=>{if(!Oe){i.setRenderTarget(null),i.render(e,t);return}const k=i.getRenderTarget(),K=i.autoClear;i.setRenderTarget(s),i.autoClear=!0,i.setClearColor(be,ae),i.clear();const le=e.background;e.background=null;const Q=u==null?void 0:u.mesh,Ae=!!(Q!=null&&Q.visible);if(Ae&&(Q.visible=!1),i.render(e,t),e.background=le,u!=null&&u.active&&u.overlayScene){for(let Se=0;Se<ir;Se++)b[Se]=0,S.uniforms[`u_blurTexture${Se}`].value=s.texture;S.uniforms.u_texture.value=s.texture,S.uniforms.u_saturation.value=1;const ue=S.uniforms.u_scrollPaint.value;S.uniforms.u_scrollPaint.value=0,ze(S,a),S.uniforms.u_scrollPaint.value=ue,u.setBackground(a.texture,a.width,a.height),u.syncToCamera(t,qe),Q&&(Q.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(u.overlayScene,t),i.autoClear=!0}else Ae&&Q&&(Q.visible=!1);let he=s.texture;if(C.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),P.copy(C).invert(),Y&&G>0?(H&&(E.copy(C),H=!1),y.compose(R,V.setFromEuler(N),O),y.invert(),w.copy(E).multiply(y),L.uniforms.u_texture.value=s.texture,L.uniforms.u_depthTexture.value=s.depthTexture,L.uniforms.u_projectionViewInverseMatrix.value.copy(P),L.uniforms.u_prevProjectionViewMatrix.value.copy(w),L.uniforms.u_amount.value=G,U(L,l),he=l.texture,E.copy(C)):(E.copy(C),H=!0),z<.05&&we<.005){S.uniforms.u_texture.value=he;for(let ue=0;ue<ir;ue++)b[ue]=0,S.uniforms[`u_blurTexture${ue}`].value=he;S.uniforms.u_saturation.value=1,i.setRenderTarget(null),ze(S,null),i.autoClear=K,i.setRenderTarget(k);return}_.uniforms.u_texture.value=he,_.uniforms.u_amount.value=_e,_.uniforms.u_haloStrength.value=we,_.uniforms.u_haloWidth.value=J,_.uniforms.u_haloRGBShift.value=Re,_.uniforms.u_haloMaskInner.value=te,_.uniforms.u_haloMaskOuter.value=ce,U(_,c);const me=o?3:ir;let je=c;for(let ue=0;ue<me;ue++){const Se=p[ue];Se.uniforms.u_texture.value=je.texture,Se.uniforms.u_resolution.value.set(je.width,je.height),Se.uniforms.u_direction.value=at,U(Se,d[ue]),Se.uniforms.u_texture.value=d[ue].texture,Se.uniforms.u_resolution.value.set(d[ue].width,d[ue].height),Se.uniforms.u_direction.value=B,U(Se,f[ue]),je=f[ue]}let de=z;if(o)de*=Ge;else{const ue=We(Ue/2)>>1,Se=We(qe/2)>>1,De=Math.max(1,Math.ceil(Math.log(ue*Se)/Math.log(2)));de=z*1024/Math.pow(De,4)*.85*48*Ge}for(let ue=0;ue<ir;ue++){if(ue>=me){b[ue]=0;continue}const Se=(me-ue)/me;let De=de*(Se+(1.2-Se*2)*se)/Math.pow(2,me-ue-1);!o&&ue===0&&(De*=.15),!o&&ue===1&&(De*=.45),!o&&ue>=3&&(De*=1.75),b[ue]=De}S.uniforms.u_texture.value=he,S.uniforms.u_saturation.value=X;for(let ue=0;ue<ir;ue++){const Se=ue<me?f[ue].texture:f[me-1].texture;S.uniforms[`u_blurTexture${ue}`].value=Se}i.setRenderTarget(null),ze(S,null),i.autoClear=K,i.setRenderTarget(k)};return He(r.x,r.y),{resize:He,sync:Be,render:A,setEfxOffset:Xe,markEfxSync:Ee,setGlassPass(k){u=k||null},setEfxAmount(k){G=k},get clearAlpha(){return ae},setEnabled(k){Oe=!!k},setScrollVelocity(k){const K=Math.min(1,Math.abs(k)*.12);M+=(K-M)*.12,S.uniforms.u_scrollPaint.value=M},destroy(){s.dispose(),a.dispose(),l.dispose(),c.dispose(),d.forEach(k=>k.dispose()),f.forEach(k=>k.dispose()),_.dispose(),S.dispose(),L.dispose(),p.forEach(k=>k.dispose()),v.geometry.dispose()}}}function SM(i,e,t){return i+(e-i)*t}const Dr=class Dr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<Dr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,o=r*r*(3-2*r),s=n&Dr.MAX_VERTICES_MASK,a=s+1&Dr.MAX_VERTICES_MASK;return SM(this._r[s],this._r[a],o)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let o=0;o<t;o++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Ve(Dr,"MAX_VERTICES",512),Ve(Dr,"MAX_VERTICES_MASK",Dr.MAX_VERTICES-1);let bl=Dr;const Fi=new q,js=class js{constructor(){this._position=new q,this._rotation=new On,this._euler=new li,this._scale=new q(1,1,1),this._matrix=new yt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new q(1,1,1),this._rotationScale=new q(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new bl,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;Fi.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),Fi.multiply(this._positionScale),Fi.multiplyScalar(this._positionAmplitude*js.FBM_NORM),this._position.copy(Fi)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;Fi.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),Fi.multiply(this._rotationScale),Fi.multiplyScalar(this._rotationAmplitude*js.FBM_NORM),this._euler.set(Fi.x,Fi.y,Fi.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Ve(js,"FBM_NORM",1/.75);let Zs=js;class Gu{constructor(e,t=1.5,n=.8,r=2,o=!0){this.isRobust=o,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,o=e/(1+r-n);this._k1Stable=(1-r)*o,this._k2Stable=e*o}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const dd=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],MM=26,ao=64,wM=34,Us=new et(1465,1024),bM=`
attribute float instanceId;
attribute vec4 instanceUvInfo;
attribute vec4 instanceRands;
uniform float u_time;
uniform float u_activeRatio;
uniform float u_aspect;
uniform vec2 u_textureSize;
varying float v_fadeOut;
varying vec2 v_uv;
vec4 hash42(vec2 p){
  vec4 p4=fract(vec4(p.xyxy)*vec4(.1031,.1030,.0973,.1099));
  p4+=dot(p4,p4.wzxy+33.33);
  return fract((p4.xxyz+p4.yzzw)*p4.zywx);
}
vec2 rotate(vec2 v,float a){
  float s=sin(a);float c=cos(a);
  return mat2(c,s,-s,c)*v;
}
float linearStep(float edge0,float edge1,float x){
  return clamp((x-edge0)/(edge1-edge0),0.0,1.0);
}
void main(){
  vec3 pos=position;
  pos.xy*=instanceUvInfo.zw*u_textureSize*0.01;
  float t=u_time*mix(0.05,0.1,instanceRands.x)+instanceRands.y;
  float cycle=floor(t);
  float ratio=fract(t);
  vec4 cycleRands=hash42(vec2(cycle,instanceId));
      pos.xy=rotate(pos.xy,instanceRands.z*6.28+sign(cycleRands.z-.5)*u_time*mix(.5,1.,cycleRands.y))
    *linearStep(instanceRands.w*0.5,instanceRands.w*0.5+0.5,u_activeRatio)*0.35;
  float yLimit=7.0/u_aspect;
  vec3 instancePos=vec3(mix(-5.,5.,cycleRands.x),yLimit*mix(-1.0,1.0,ratio),20.+instanceId/float(COUNT));
  pos+=instancePos;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);
  v_uv=instanceUvInfo.xy+instanceUvInfo.zw*vec2(uv.x,1.-uv.y);
  v_uv.y=1.0-v_uv.y;
  v_fadeOut=2.0*abs(ratio-0.5);
}
`,TM=`
uniform sampler2D u_texture;
uniform vec3 u_bgColor;
varying vec2 v_uv;
varying float v_fadeOut;
float linearStep(float edge0,float edge1,float x){
  return clamp((x-edge0)/(edge1-edge0),0.0,1.0);
}
void main(){
  gl_FragColor=texture2D(u_texture,v_uv);
  gl_FragColor.rgb=mix(u_bgColor,gl_FragColor.rgb,linearStep(0.0,0.1,1.0-v_fadeOut));
}
`,EM=`
attribute vec3 a_instancePosition;
attribute vec3 a_instanceRotationAxis;
attribute vec4 a_instanceRand;
attribute float thickness;
uniform float u_time;
uniform float u_aspect;
uniform float u_activeRatio;
varying vec3 v_viewNormal;
varying float v_thickness;
varying vec3 v_cameraPositionLS;
varying vec3 v_positionLS;
varying vec3 v_normalLS;
varying vec4 v_orient;
varying float v_fadeOut;
#ifndef HALF_PI
#define HALF_PI 1.5707963267948966
#endif
float linearStep(float edge0,float edge1,float x){
  return clamp((x-edge0)/(edge1-edge0),0.0,1.0);
}
vec3 qrotate(vec4 q,vec3 v){return v+2.0*cross(q.xyz,cross(q.xyz,v)+q.w*v);}
vec4 quaternion(vec3 axis,float halfAngle){return vec4(axis*sin(halfAngle),cos(halfAngle));}
void main(){
  float time=0.5*u_time+4.*a_instanceRand.x;
  float scale=0.75;
  vec3 pos=position;
  vec4 orient=quaternion(a_instanceRotationAxis,(0.5+a_instanceRand.y)*time);
  pos=qrotate(orient,pos);
  pos*=scale;
  vec3 nor=qrotate(orient,normal);
  vec3 instancePosition=a_instancePosition;
  instancePosition.y+=0.5*u_time*(1.+a_instanceRand.x);
  float yLimit=20.0/u_aspect;
  instancePosition.y=mod(instancePosition.y,yLimit)-0.5*yLimit;
  v_fadeOut=abs(instancePosition.y)/(yLimit*0.5);
  pos*=linearStep(a_instanceRand.w*0.5,a_instanceRand.w*0.5+0.5,u_activeRatio);
  pos+=instancePosition;
  vec4 orientInv=vec4(-orient.xyz,orient.w);
  gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);
  v_cameraPositionLS=qrotate(orientInv,(cameraPosition-instancePosition)/scale);
  v_positionLS=position*scale;
  v_normalLS=normal;
  v_orient=orient;
  v_viewNormal=normalMatrix*nor;
  v_thickness=thickness;
}
`,AM=`
uniform vec3 u_color;
uniform vec3 u_bgColor;
uniform vec4 u_planes[25];
uniform mat3 normalMatrix;
varying vec3 v_viewNormal;
varying float v_thickness;
varying vec3 v_cameraPositionLS;
varying vec3 v_positionLS;
varying vec3 v_normalLS;
varying vec4 v_orient;
varying float v_fadeOut;
float linearStep(float edge0,float edge1,float x){
  return clamp((x-edge0)/(edge1-edge0),0.0,1.0);
}
float plaIntersect(in vec3 ro,in vec3 rd,in vec4 p){
  return-(dot(ro,p.xyz)+p.w)/dot(rd,p.xyz);
}
vec4 getColorShade(vec3 dir,vec3 vn){
  float d=dot(dir,vn);
  float shade=(1.0-max(0.,vn.z))*v_thickness*5.;
  shade*=(pow(linearStep(2.,-1.,d),4.)*0.15+pow(linearStep(1.,-2.,d),5.)*7.);
  vec3 rgb=mix(vec3(0.8),clamp(abs(mod((d+vn.z)*12.+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0),1.-shade);
  return vec4((vec3(u_color)+rgb*1.2)*shade,0.035+(1.-v_thickness)*shade*shade)*(1.-abs(vn.z));
}
vec3 qrotate(vec4 q,vec3 v){return v+2.0*cross(q.xyz,cross(q.xyz,v)+q.w*v);}
void main(){
  vec3 localDir=normalize(v_positionLS);
  vec3 viewNormal=normalize(v_viewNormal);
  float ior=2.418;
  vec3 norLS=normalize(v_normalLS);
  vec3 refrLS=refract(normalize(v_positionLS-v_cameraPositionLS),norLS,1./ior);
  float dist=100.;
  vec3 planeDir=vec3(0.);
  for(int i=0;i<25;i++){
    vec4 plane=u_planes[i];
    plane.xyz*=-1.;
    plane.w*=0.7501;
    float hitDist=plaIntersect(v_positionLS+refrLS*0.001,refrLS,plane);
    if(hitDist>0.&&hitDist<dist){dist=hitDist;planeDir=u_planes[i].xyz;}
  }
  vec3 refrPosLS=v_positionLS+refrLS*dist;
  refrLS=refract(refrLS,planeDir,ior);
  vec3 refrLocalDir=qrotate(v_orient,normalize(refrPosLS));
  vec3 viewPlaneNor=normalMatrix*qrotate(v_orient,planeDir);
  vec4 frontColorShade=getColorShade(localDir,viewNormal);
  vec4 backColorShade=getColorShade(refrLocalDir,viewPlaneNor);
  gl_FragColor=frontColorShade*1.5+vec4(backColorShade.rgb*0.75,backColorShade.a*.5);
  gl_FragColor.rgb=mix(u_bgColor,gl_FragColor.rgb,linearStep(0.0,0.1,1.0-v_fadeOut));
}
`,Ya=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function RM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function CM(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",o=t?wM:MM,[s,a]=await Promise.all([new sr().loadAsync(`${e}assets/textures/tunnels/${r}`),Sn(`${e}assets/models/tunnels/diamond.buf`)]);s.colorSpace=Un,s.flipY=!1,s.needsUpdate=!0;const l=new vi;i.add(l);const c=new xi(1,1),u=new mo;for(const y in c.attributes)u.setAttribute(y,c.attributes[y]);u.index=c.index;const d=new Float32Array(o),f=new Float32Array(o*4),m=new Float32Array(o*4);for(let y=0,R=0;y<o;y++,R+=4){d[y]=y/o;const N=dd[y%dd.length];f[R]=N.x/Us.x,f[R+1]=N.y/Us.y,f[R+2]=N.w/Us.x,f[R+3]=N.h/Us.y,m[R]=Math.random(),m[R+1]=Math.random(),m[R+2]=Math.random(),m[R+3]=Math.random()}u.setAttribute("instanceId",new wn(d,1)),u.setAttribute("instanceUvInfo",new wn(f,4)),u.setAttribute("instanceRands",new wn(m,4)),u.instanceCount=o;const v=new At({vertexShader:bM,fragmentShader:TM,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:s},u_textureSize:{value:Us.clone()},u_bgColor:{value:new Je(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:sa,blendEquation:Fn,blendSrc:gl,blendDst:vl,blendEquationAlpha:Fn,blendSrcAlpha:nl,blendDstAlpha:nl,defines:{COUNT:o}}),g=new Ut(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new mo;for(const y in a.attributes)_.setAttribute(y,a.attributes[y]);a.index&&(_.index=a.index);const p=RM("diamonds-3"),b=new Float32Array(ao*3),S=new Float32Array(ao*3),M=new Float32Array(ao*4),L=new q;for(let y=0,R=0,N=0;y<ao;y++,R+=3,N+=4)b[R]=16*(p()*2-1),b[R+1]=16*(p()*2-1),b[R+2]=19-(ao-y-1)/(ao-1)*8,L.set(p()*2-1,p()*2-1,p()*2-1).normalize(),S[R]=L.x,S[R+1]=L.y,S[R+2]=L.z,M[N]=p(),M[N+1]=p(),M[N+2]=p(),M[N+3]=p();_.setAttribute("a_instancePosition",new wn(b,3)),_.setAttribute("a_instanceRotationAxis",new wn(S,3)),_.setAttribute("a_instanceRand",new wn(M,4)),_.instanceCount=ao;const C=[];for(let y=0;y<25;y++)C.push(new Ft(Ya[y*4],Ya[y*4+1],Ya[y*4+2],Ya[y*4+3]));const E=new At({vertexShader:EM,fragmentShader:AM,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new Je("#689aff")},u_planes:{value:C},u_bgColor:{value:new Je(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:sa,blendEquation:Fn,blendSrc:pi,blendDst:nl,blendEquationAlpha:Fn,blendSrcAlpha:pi,blendDstAlpha:pi}),P=new Ut(_,E);P.frustumCulled=!1,P.renderOrder=20,P.visible=!1,l.add(P),g.renderOrder=15;const w=new Je(0);return{update({whiteTunnelWaitRatio:y=0,aspect:R=1,bg:N="#000000"}={}){const O=pe(y,0,.2,0,1),V=O>0;l.visible=V,g.visible=V,P.visible=V,v.uniforms.u_activeRatio.value=O,E.uniforms.u_activeRatio.value=O,v.uniforms.u_aspect.value=R,E.uniforms.u_aspect.value=R,w.set(N),v.uniforms.u_bgColor.value.copy(w),E.uniforms.u_bgColor.value.copy(w)},dispose(){u.dispose(),c.dispose(),v.dispose(),s.dispose(),_.dispose(),E.dispose(),a.dispose(),i.remove(l)}}}const $a=946,pd=2,PM=`
attribute float piece;
uniform sampler2D u_positionTexture;
uniform sampler2D u_orientTexture;
uniform vec2 u_textureSize;
uniform float u_frameFrom;
uniform float u_frameTo;
uniform float u_frameRatio;
uniform float u_fragmentScale;
varying vec3 v_viewPosition;
varying vec3 v_localDir;
vec3 qrotate(vec4 q, vec3 v) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}
void main() {
  vec4 animationUvs = (vec4(piece, u_frameFrom, piece, u_frameTo) + 0.5) / u_textureSize.xyxy;
  vec3 piecePosFrom = texture2D(u_positionTexture, animationUvs.xy).xyz;
  vec4 pieceOrientFrom = texture2D(u_orientTexture, animationUvs.xy);
  vec3 piecePosTo = texture2D(u_positionTexture, animationUvs.zw).xyz;
  vec4 pieceOrientTo = texture2D(u_orientTexture, animationUvs.zw);
  float radius = length(position) * u_fragmentScale;
  vec3 dir = position / max(radius, 1e-5);
  vec3 posFrom = qrotate(pieceOrientFrom, dir);
  vec3 posTo = qrotate(pieceOrientTo, dir);
  v_localDir = normalize(mix(posFrom, posTo, u_frameRatio));
  vec3 pos = v_localDir * radius + mix(piecePosFrom, piecePosTo, u_frameRatio);
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  v_viewPosition = mvPosition.xyz;
  gl_Position = projectionMatrix * mvPosition;
}
`,LM=`
uniform sampler2D u_backgroundTexture;
uniform vec2 u_resolution;
varying vec3 v_viewPosition;
varying vec3 v_localDir;
void main() {
  vec3 fdx = dFdx(v_viewPosition);
  vec3 fdy = dFdy(v_viewPosition);
  vec3 viewNormal = normalize(cross(fdx, fdy));
  float alpha = abs(1.0 - viewNormal.z);
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec3 bgColor = texture2D(u_backgroundTexture, uv).rgb;
  vec2 refl = reflect(normalize(v_viewPosition), viewNormal).xy;
  vec2 uvOffset = refl.xy * 0.2 * vec2(u_resolution.x / u_resolution.y, 1.0);
  vec3 color = texture2D(u_backgroundTexture, uv + uvOffset).rgb;
  color += clamp(abs(mod(alpha * 8.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0)
    * (1.0 - alpha) * (1.0 - bgColor);
  gl_FragColor = vec4(color, alpha);
}
`;function md(i,e,t){const n=new Ul(i,e,t,dn,Gn);return n.magFilter=rn,n.minFilter=rn,n.wrapS=Nn,n.wrapT=Nn,n.needsUpdate=!0,n.colorSpace=en,n}async function DM(i,{base:e}){const[t,n]=await Promise.all([Sn(`${e}assets/models/tunnels/broken_glass.buf`),Sn(`${e}assets/models/tunnels/broken_glass_animation.buf`)]),r=t.getAttribute("piece");if(r&&!(r.array instanceof Float32Array)){const N=new Float32Array(r.array.length);N.set(r.array),t.setAttribute("piece",new Yt(N,1))}const o=n.attributes.position.array,s=n.attributes.orient.array,a=o.length/($a*3),l=new Float32Array(o.length/3*4);for(let N=0,O=0;N<o.length;N+=3,O+=4)l[O]=o[N],l[O+1]=o[N+1],l[O+2]=o[N+2],l[O+3]=0;const c=s instanceof Float32Array?s:new Float32Array(s),u=md(l,$a,a),d=md(c,$a,a),f={u_backgroundTexture:{value:null},u_resolution:{value:new et(1,1)},u_positionTexture:{value:u},u_orientTexture:{value:d},u_textureSize:{value:new et($a,a)},u_frameFrom:{value:0},u_frameTo:{value:0},u_frameRatio:{value:0},u_fragmentScale:{value:1}},m=new At({uniforms:f,vertexShader:PM,fragmentShader:LM,transparent:!0,depthWrite:!1,depthTest:!0,side:En,toneMapped:!1}),v=new Ut(t,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1e3,v.name="goal-broken-glass";const g=new Eo,_=new vi;_.add(v),g.add(_);let p=0,b=1,S=1,M=0,L=1,C=!1;const E=new q(0,0,1),P=new On;return{container:_,overlayScene:g,mesh:v,get ratio(){return p},get active(){return C},updateFromScroll:({glassBreakRatio:N=0,astronautDropRatio:O=0,frameHeight:V=0,frameRotation:H=0,frameScale:G=1}={})=>{p=pe(N,0,1,0,1,ku),b=pe(O,.75,1,1,0),S=Math.max(1,V||window.innerHeight),M=H||0,L=Math.max(1e-4,G||1),C=p>0&&O<1,_.visible=C,C||(v.visible=!1)},syncToCamera:(N,O=window.innerHeight)=>{if(!C||!N||p<=0)return v.visible=!1,!1;v.position.copy(N.position),v.quaternion.copy(N.quaternion),v.translateZ(-pd);const V=Math.tan(N.fov*Math.PI/360)*pd*2,H=S/Math.max(O,1)*V*L;P.setFromAxisAngle(E,-M),v.quaternion.multiply(P),v.scale.setScalar(Math.max(H,1e-4));const G=p*(a-1),Y=Math.floor(G),z=Math.min(Y+1,a-1);return f.u_frameFrom.value=Y,f.u_frameTo.value=z,f.u_frameRatio.value=G-Y,f.u_fragmentScale.value=b,v.visible=!0,!0},setBackground:(N,O,V)=>{f.u_backgroundTexture.value=N,f.u_resolution.value.set(O,V)},dispose(){t.dispose(),n.dispose(),m.dispose(),u.dispose(),d.dispose()}}}const Fs=53,Za=16,Ka=20,_d=["helmet","helmet_glass","glove_shoes","wearpack"],Ns=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Lc=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function gd(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function vd(i,e){const[t,n]=await Promise.all([gd(i),gd(e)]),r=t.width,o=t.height,s=document.createElement("canvas");s.width=r,s.height=o;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,o);const l=a.getImageData(0,0,r,o).data;a.clearRect(0,0,r,o),a.drawImage(t,0,0,r,o);const c=a.getImageData(0,0,r,o).data,u=new Uint8Array(r*o*4);for(let f=0;f<u.length;f+=4)u[f]=c[f],u[f+1]=c[f+1],u[f+2]=c[f+2],u[f+3]=l[f];const d=new Ul(u,r,o,dn,Ai);return d.colorSpace=en,d.flipY=!1,d.generateMipmaps=!0,d.minFilter=ki,d.magFilter=vt,d.anisotropy=8,d.wrapS=Nn,d.wrapT=Nn,d.needsUpdate=!0,d}function xd(i,e,t){const n=new Ul(i,e,t,dn,Gn);return n.magFilter=rn,n.minFilter=rn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function Dc(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new wn(t,3)}const ja=`
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
`;async function IM(i,e,t){var Fh,Nh,Oh,zh;const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",o=!n,[s,a,l,c,u,d,f,m,v,g,_,p,b,S,M,...L]=await Promise.all([Sn(`${r}assets/models/tunnels/astronaut_animations.buf`),Sn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Sn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new sr().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new sr().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new sr().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Sn(`${r}assets/models/tunnels/tunnel_block_base.buf`),Sn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Sn(`${r}assets/models/tunnels/grid_base_ld.buf`),Sn(`${r}assets/models/tunnels/grid_structure_ld.buf`),o?Sn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),o?Sn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new sr().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),Sn(`${r}assets/models/tunnels/earth_card.buf`),new sr().loadAsync(`${r}assets/textures/tunnels/earth_landscape.jpg`),..._d.map(xe=>Sn(`${r}assets/models/tunnels/astronaut_${xe}.buf`))]),C=new Eo;C.background=new Je(0);const E=new q(0,0,25),P=new q(0,0,24),w=45,y=new Hn(w,1,1,200);y.position.copy(E),y.lookAt(P);let R;try{R=new Il({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(xe){throw console.error("Goal WebGL unavailable",xe),xe}R.setClearColor(0,1),R.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2.5:1.75)),R.outputColorSpace=Xi,R.toneMapping=Gi,R.autoClear=!0,c.colorSpace=en,c.generateMipmaps=!1,c.minFilter=vt,c.magFilter=vt,u.colorSpace=en,u.generateMipmaps=!1,u.minFilter=vt,u.magFilter=vt,d.colorSpace=en,d.wrapS=d.wrapT=is,d.generateMipmaps=!1,d.minFilter=vt,d.magFilter=vt;const N=s.attributes.position.array,O=s.attributes.orient.array,V=N.length/3,H=V/Fs,G=Math.ceil(Math.sqrt(V)),Y=Math.ceil(V/G),z=G*Y,se=new Float32Array(z*4),X=new Float32Array(z*4);for(let xe=0,ke=0,Le=0;xe<V;xe++,ke+=3,Le+=4)se[Le]=N[ke],se[Le+1]=N[ke+1],se[Le+2]=N[ke+2],se[Le+3]=1,X[Le]=O[Le],X[Le+1]=O[Le+1],X[Le+2]=O[Le+2],X[Le+3]=O[Le+3];const _e=xd(se,G,Y),we=xd(X,G,Y),Re=new wn(new Float32Array([0,0,18]),3);Re.setUsage(wr);const J=new wn(new Float32Array([0,0,0,1]),4);J.setUsage(wr);const te=new wn(new Float32Array([0,1,0]),3);te.setUsage(wr);const ce=new wn(new Float32Array([90,91,0]),3);ce.setUsage(wr);const ae=()=>{const xe=new _r(1,1,{minFilter:vt,magFilter:vt,format:dn,generateMipmaps:!1});return xe.texture.wrapS=xe.texture.wrapT=xl,xe},be=ae(),Oe=ae(),Ue=ae();let qe=be,Ge=Oe;const at=`
uniform sampler2D u_texture;
uniform vec2 u_direction;
uniform vec2 u_resolution;
varying vec2 v_uv;
void main() {
  vec2 texel = u_direction / u_resolution;
  vec3 c = texture2D(u_texture, v_uv).rgb * 0.227027;
  c += texture2D(u_texture, v_uv + texel * 1.384615).rgb * 0.316216;
  c += texture2D(u_texture, v_uv - texel * 1.384615).rgb * 0.316216;
  c += texture2D(u_texture, v_uv + texel * 3.230769).rgb * 0.070270;
  c += texture2D(u_texture, v_uv - texel * 3.230769).rgb * 0.070270;
  gl_FragColor = vec4(c, 1.0);
}`,B=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,ze=new At({uniforms:{u_texture:{value:null},u_direction:{value:new et(1,0)},u_resolution:{value:new et(1,1)}},vertexShader:B,fragmentShader:at,depthTest:!1,depthWrite:!1,toneMapped:!1}),We=new Ll(-1,1,1,-1,0,1),He=new Eo,Be=new Ut(new xi(2,2),ze);He.add(Be);const Xe=(xe,ke)=>{const Le=Math.max(1,xe.width),Ze=Math.max(1,xe.height);ze.uniforms.u_resolution.value.set(Le,Ze),ze.uniforms.u_texture.value=xe.texture,ze.uniforms.u_direction.value.set(ke,0),R.setRenderTarget(Ue),R.clear(),R.render(He,We),ze.uniforms.u_texture.value=Ue.texture,ze.uniforms.u_direction.value.set(0,ke),R.setRenderTarget(xe),R.clear(),R.render(He,We),R.setRenderTarget(null)},Ee={u_animationPositionTexture:{value:_e},u_animationOrientTexture:{value:we},u_animationTextureSize:{value:new et(G,Y)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new Je("#566d80")},u_bgColor:{value:new Je("#000000")},u_sunPosition:{value:new q(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new Je(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new Je("#aaaafb")},u_cardPosition:{value:new q}},U={u_blackTunnelTexture:{value:qe.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},A={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async xe=>{const[ke,Le]=await Promise.all([vd(`${r}assets/textures/tunnels/astronaut/astronaut_${xe}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${xe}_base.webp`),new sr().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${xe}_nor.webp`)]);Le.colorSpace=en,Le.flipY=!1,Le.generateMipmaps=!0,Le.minFilter=ki,Le.magFilter=vt,Le.anisotropy=8,A[xe]={armb:ke,nor:Le}}));const k=((Nh=(Fh=R.capabilities).getMaxAnisotropy)==null?void 0:Nh.call(Fh))||8;for(const xe of Object.keys(A)){const{armb:ke,nor:Le}=A[xe];ke&&(ke.anisotropy=Math.min(8,k),ke.needsUpdate=!0),Le&&(Le.anisotropy=Math.min(8,k),Le.needsUpdate=!0)}A.helmet_glass=A.helmet;const K=new vi;C.add(K);const le=[],Q=4,Ae=new wn(new Float32Array(Q*3),3);Ae.setUsage(wr);const he=new wn(new Float32Array(Q*4),4);he.setUsage(wr);const me=new wn(new Float32Array(Q*3),3);me.setUsage(wr);const je=new wn(new Float32Array(Q*3),3);je.setUsage(wr);for(let xe=0;xe<Q;xe++)he.setXYZW(xe,0,0,0,1),me.setXYZ(xe,0,1,0),je.setXYZ(xe,90,91,0);const de=[];let ue=0;const Se={value:0};_d.forEach((xe,ke)=>{const Le=L[ke],Ze=new mo;for(const un in Le.attributes)Ze.setAttribute(un,Le.attributes[un]);Le.index&&Ze.setIndex(Le.index),Ze.instanceCount=1,Ze.setAttribute("instancePos",Re),Ze.setAttribute("instanceOrient",J),Ze.setAttribute("instanceAnimationFrameFromToBlend1",te),Ze.setAttribute("instanceAnimationFrameFromToBlend2",ce);const rt=xe==="helmet_glass"||xe==="card"?"helmet":xe,gt=xe==="helmet_glass",ft={...Ee,u_armbTexture:{value:A[rt].armb},u_norTexture:{value:A[rt].nor}},Tt={...Ee,...U,u_armbTexture:{value:A[rt].armb},u_norTexture:{value:A[rt].nor}},zt=new At({uniforms:ft,vertexShader:ja,fragmentShader:pM,transparent:!0,blending:Ei,side:En,defines:{BONE_COUNT:Fs,IS_WHITE:!0,...gt?{IS_HELMET_GLASS:!0}:{}}}),cn=new At({uniforms:Tt,vertexShader:ja,fragmentShader:fd,transparent:!0,blending:Ei,side:En,defines:{BONE_COUNT:Fs,IS_BLACK:!0,...gt?{IS_HELMET_GLASS:!0}:{}}}),Bn=new Ut(Ze,zt);if(Bn.frustumCulled=!1,Bn.userData.whiteMat=zt,Bn.userData.blackMat=cn,K.add(Bn),le.push(Bn),!gt){const un=new mo;for(const ui in Le.attributes)un.setAttribute(ui,Le.attributes[ui]);Le.index&&un.setIndex(Le.index),un.instanceCount=Q,un.setAttribute("instancePos",Ae),un.setAttribute("instanceOrient",he),un.setAttribute("instanceAnimationFrameFromToBlend1",me),un.setAttribute("instanceAnimationFrameFromToBlend2",je);const Ln=new At({uniforms:{...Tt,u_armbTexture:{value:A[rt].armb},u_norTexture:{value:A[rt].nor},u_alpha:Se},vertexShader:ja,fragmentShader:fd,transparent:!0,depthWrite:!1,depthTest:!1,blending:sa,blendEquation:Fn,blendSrc:pi,blendDst:pi,blendEquationAlpha:Fn,blendSrcAlpha:pi,blendDstAlpha:pi,side:En,defines:{BONE_COUNT:Fs,IS_BLACK:!0,IS_CLONE:!0}}),jt=new Ut(un,Ln);jt.frustumCulled=!1,jt.renderOrder=1e3,jt.visible=!1,K.add(jt),de.push(jt)}});const De=new et(5,23),Ce=new bl;let Ye=0,Ke=!1;const tt=document.createElement("canvas");tt.width=tt.height=11;{const xe=tt.getContext("2d");xe.fillStyle="#000",xe.fillRect(0,0,11,11),xe.fillStyle="#f00",xe.fillRect(1,1,3,9),xe.fillStyle="#0f0",xe.fillRect(4,1,3,9),xe.fillStyle="#00f",xe.fillRect(7,1,3,9)}const W=new wS(tt);W.needsUpdate=!0,W.minFilter=vt,W.magFilter=vt;const ne=await new sr().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);ne.minFilter=rn,ne.magFilter=rn,ne.colorSpace=en,ne.flipY=!1;const re=new xi(.2,.15).translate(0,1.68,.1);re.setAttribute("boneIndices",new Yt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),re.setAttribute("boneWeights",new Yt(new Float32Array([1,0,1,0,1,0,1,0]),2)),re.setAttribute("tangent",new Yt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),re.setAttribute("ao",new Yt(new Float32Array([1,1,1,1]),1));const fe=new mo;for(const xe in re.attributes)fe.setAttribute(xe,re.attributes[xe]);re.index&&fe.setIndex(re.index),fe.instanceCount=1,fe.setAttribute("instancePos",Re),fe.setAttribute("instanceOrient",J),fe.setAttribute("instanceAnimationFrameFromToBlend1",te),fe.setAttribute("instanceAnimationFrameFromToBlend2",ce);const Fe=new At({uniforms:{...Ee,u_cardLedTexture:{value:W},u_cardTexture:{value:ne},u_cardColor:{value:new Je("#ddddff")},u_cardUvOffset:{value:new et(0,0)},u_cardTextureSize:{value:De},u_cardOpacity:{value:0}},vertexShader:ja,fragmentShader:mM,transparent:!0,depthTest:!1,depthWrite:!1,side:En,blending:sa,blendEquation:Fn,blendSrc:pi,blendDst:pi,blendEquationAlpha:Fn,blendSrcAlpha:pi,blendDstAlpha:pi,defines:{BONE_COUNT:Fs}}),Ie=new Ut(fe,Fe);Ie.frustumCulled=!1,Ie.renderOrder=100,Ie.visible=!1,K.add(Ie);const nt=new vi;C.add(nt);const bt=new Zs;bt.positionAmplitude=2,bt.positionFrequency=1,bt._enableRotationNoise=!1;const Xt=bt.position;let ht=0,Pt=1,Rn=typeof window<"u"?window.scrollY:0,Ri=1;const Wr=(xe,ke)=>{const Le=new mo;for(const ft in xe.attributes)Le.setAttribute(ft,xe.attributes[ft]);xe.index&&Le.setIndex(xe.index);const Ze=new Float32Array(Za);for(let ft=0;ft<Za;ft++)Ze[ft]=ft;Le.setAttribute("a_instanceId",new wn(Ze,1)),Le.instanceCount=Za;const rt=new At({uniforms:{u_texture:{value:d},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:Xt},u_time:{value:0}},vertexShader:fM,fragmentShader:dM,transparent:!1,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:Za,...ke?{IS_WALL:!0}:{}}}),gt=new Ut(Le,rt);return gt.frustumCulled=!1,nt.add(gt),rt},zn=Wr(f,!1),Ci=Wr(m,!0),vr=await CM(C,{base:r,isMobile:n,sharedTime:Ee.u_time}),Xr=new At({uniforms:{u_color:{value:new Je(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:Ei}),Kn=new Ut(new xi(200,200),Xr);Kn.position.z=-80,Kn.renderOrder=-10,C.add(Kn),M.colorSpace=en,M.generateMipmaps=!1,M.minFilter=vt,M.magFilter=vt;const qr={u_earthTexture:{value:M},u_bgColor:{value:new Je(0)},u_atmosphereColor:{value:new Je("#4169E1")}},xr=`
varying vec2 v_uv;
void main(){
  vec3 pos=position;
  pos.z*=0.1;
  vec4 mvPosition=modelViewMatrix*vec4(pos,1.);
  gl_Position=projectionMatrix*mvPosition;
  v_uv=uv;
}`,Yr=`
varying vec2 v_uv;
uniform sampler2D u_earthTexture;
void main(){
  vec3 earthMap=texture2D(u_earthTexture,v_uv).rgb;
  gl_FragColor=vec4(earthMap, 0.0);
}`,qi=new vi,Ms=new At({uniforms:qr,vertexShader:xr,fragmentShader:Yr,depthWrite:!0,depthTest:!0}),_n=new Ut(S,Ms);_n.frustumCulled=!1,_n.renderOrder=-1,qi.add(_n),C.add(qi);const Cn=new vi;C.add(Cn);const h=await vd(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);h.wrapS=h.wrapT=is,b.colorSpace=en,b.flipY=!1,b.wrapS=b.wrapT=is;const x={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:qe.texture},u_greebleArmbTexture:{value:h},u_greebleNormalTexture:{value:b},u_resolution:{value:new et(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new q(0,70,0)},u_color1:{value:new Je(Ns[0])},u_color2:{value:new Je(Lc[0])}},T=(xe,ke,Le)=>{const Ze=new mo;for(const Tt in xe.attributes)Ze.setAttribute(Tt,xe.attributes[Tt]);xe.index&&Ze.setIndex(xe.index);const rt=xe.attributes.position.count;Ze.getAttribute("ao")||Ze.setAttribute("ao",new Yt(new Float32Array(rt).fill(1),1)),Ze.getAttribute("areaRatio")||Ze.setAttribute("areaRatio",new Yt(new Float32Array(rt),1)),Ze.getAttribute("height")||Ze.setAttribute("height",new Yt(new Float32Array(rt).fill(1),1)),Ze.getAttribute("cluster")||Ze.setAttribute("cluster",new Yt(new Float32Array(rt),1)),Ze.setAttribute("instancePos",Dc(ke.attributes.position)),Ze.setAttribute("instanceGridIds",Dc(ke.attributes.gridIds)),Ze.setAttribute("instanceAxis",Dc(ke.attributes.rotAxis)),Ze.instanceCount=ke.attributes.position.count;const gt=new At({uniforms:x,vertexShader:uM,fragmentShader:hM,side:En,transparent:!1,depthWrite:!0,blending:Mo,defines:{GRID_SIZE:Ka,...Le?{IS_HD:!0}:{}}}),ft=new Ut(Ze,gt);return ft.frustumCulled=!1,ft.renderOrder=Le?2:1,Cn.add(ft),ft};T(v,g,!1),o&&_&&p&&T(_,p,!0);let D=0,I=0,F=0,$=w,ie=0,j=-80,ee=0;const Z=new Zs;Z.positionFrequency=.2,Z.rotationFrequency=.15,Z.positionAmplitude=0,Z.rotationAmplitude=0;const oe=new Gu(new q,1,.65,1.3),ge=new Gu(new q,1,.85,1.1),ye=Array.from({length:Q},()=>{const xe=new Zs;return xe.positionFrequency=.2,xe.rotationFrequency=.6,xe.positionAmplitude=12,xe.rotationAmplitude=10,xe}),Pe=Float32Array.from({length:Q+1},(xe,ke)=>ke===0?0:Math.random()*2),Te=new Float32Array(Q),Me=new Float32Array(Q),ve=new q,ct=new On,$e=new yt,Rt=new yt,ot=new q,Qe=new q,pt=new On,lt=new li,St=new q(1,1,1),ut=new Je,st=new Je,Zt=new q,gn=new q;let vn=0,$r=0,Fl=0,Nl=0,Ro=.08;const wh=.1;let pa=!1,ws=0,ma=0,bh=0,Ol=0,zl=0;window.addEventListener("pointermove",xe=>{vn=xe.clientX/Math.max(window.innerWidth,1)*2-1,$r=xe.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{pa=!0},{passive:!0}),window.addEventListener("pointerup",()=>{pa=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{pa=!1},{passive:!0});const Bl=()=>{y.near=1,y.far=200,y.position.copy(E),y.up.set(0,1,0),y.lookAt(P),y.fov=$,Zt.set(0,0,-1).applyQuaternion(y.quaternion);let xe=gn.copy(P).sub(y.position).dot(Zt);const ke=y.fov,Le=ke+F,Ze=Math.max(1,Math.min(170,Le));let rt=xe*Math.tan(ke/360*Math.PI/2)/Math.tan(Ze/360*Math.PI/2)-xe;Number.isFinite(rt)||(rt=0),y.translateZ(rt),y.fov=ke,xe+=rt;const gt=Math.max(1,R.domElement.width||window.innerWidth),ft=Math.max(1,R.domElement.height||window.innerHeight);Math.abs(Ol)>.25||Math.abs(zl)>.25?y.setViewOffset(gt,ft,Ol,zl,gt,ft):y.clearViewOffset(),y.translateZ(xe*-1);const Tt=n?Ro*.35:Ro,zt=Math.max(-1,Math.min(1,$r))*Tt,cn=Math.max(-1,Math.min(1,-vn))*Tt;Fl+=(zt-Fl)*wh,Nl+=(cn-Nl)*wh,lt.set(Fl,Nl,0),pt.setFromEuler(lt),y.quaternion.multiply(pt),y.translateZ(xe),y.updateProjectionMatrix()},Tm=xe=>{if(Z.update(xe),oe.update(xe,Z.position),ot.copy(Z.euler),ge.update(xe,ot),lt.set(ge.value.x,ge.value.y,ge.value.z),pt.setFromEuler(lt),Rt.compose(oe.value,pt,St),$e.compose(ve,ct,St),$e.multiply(Rt),$e.decompose(ot,pt,Qe),Re.setXYZ(0,ot.x,ot.y,ot.z),J.setXYZW(0,pt.x,pt.y,pt.z,pt.w),Re.needsUpdate=!0,J.needsUpdate=!0,Vl=1+Math.min(3.5,oe.valueVel.length()*.2+ge.valueVel.length()*.2),ue>.01&&!Ot&&!$i){for(let ke=0;ke<Q;ke++){const Le=ye[ke];Le.positionFrequency=.2,Le.rotationFrequency=.6,Le.positionAmplitude=12,Le.rotationAmplitude=10,Le.update(xe),$e.compose(ve,ct,St),$e.multiply(Le.matrix),$e.decompose(ot,pt,Qe);const Ze=ke/Math.max(Q-1,1),rt=pe(ue,Ze*.3,.7+Ze*.3,1,0,oM);Qe.set(Re.getX(0),Re.getY(0),Re.getZ(0)),ot.lerp(Qe,rt),Ae.setXYZ(ke,ot.x,ot.y,ot.z),he.setXYZW(ke,pt.x,pt.y,pt.z,pt.w)}Ae.needsUpdate=!0,he.needsUpdate=!0}},it=document.getElementById("home-goal-tunnel-sticky")||((Oh=i.closest)==null?void 0:Oh.call(i,"#home-goal-tunnel-sticky"))||((zh=e==null?void 0:e.querySelector)==null?void 0:zh.call(e,"#home-goal-tunnel-sticky"))||i.parentElement||e,Pn=Sh(e);let an=0,bs=0,Co=0,Et=0,ci=0,kl=0,Zr=0,Hl=0,Yi=0,qt=0,Th=0,$i=!0,nn=!1,Ot=!1,Po=0,Pi=0,Vl=1,Gl=0,Eh=performance.now(),Ts=!1,Ah=!1;const ln=yM(R,C,y,{isMobile:n});let Li=null;try{Li=await DM(C,{base:r}),ln.setGlassPass(Li)}catch(xe){console.warn("Broken glass failed to load",xe)}let Rh=0,Ch=0;const Lo=()=>{var zt;const xe=(zt=it==null?void 0:it.querySelector)==null?void 0:zt.call(it,"[data-goal-screen-clip]"),ke=it==null?void 0:it.classList.contains("is-windowed"),Le=it==null?void 0:it.classList.contains("is-pinned"),Ze=ke&&xe?xe:it;let rt=(Ze==null?void 0:Ze.clientWidth)||window.innerWidth,gt=(Ze==null?void 0:Ze.clientHeight)||window.innerHeight;if((Le||!ke)&&n&&window.visualViewport&&(rt=Math.round(window.visualViewport.width)||rt,gt=Math.round(window.visualViewport.height)||gt),rt=Math.max(1,rt),gt=Math.max(1,gt),rt===Rh&&gt===Ch)return;Rh=rt,Ch=gt,y.aspect=rt/gt,Bl(),R.setSize(rt,gt,!1),ln.resize(rt,gt),x.u_resolution.value.set(rt,gt);const ft=Math.max(1,Math.floor(rt*.25)),Tt=Math.max(1,Math.floor(gt*.25));(be.width!==ft||be.height!==Tt)&&(be.setSize(ft,Tt),Oe.setSize(ft,Tt),Ue.setSize(ft,Tt))};Lo(),window.addEventListener("resize",Lo);const Ph=(xe,ke,Le=100)=>{const Ze=xe.attributes.position.array,rt=xe.attributes.orient.array,gt=Math.min(Math.floor(ke),Le-1),ft=Math.min(Math.ceil(ke),Le-1),Tt=ke-Math.floor(ke),zt=new q().fromArray(Ze,gt*3).lerp(new q().fromArray(Ze,ft*3),Tt),cn=new On().fromArray(rt,gt*4).slerp(new On().fromArray(rt,ft*4),Tt);return{p:zt,q:cn}},_a=()=>{var Kr,Zi,Ii;if(!e)return;const xe=window.innerHeight,ke=window.scrollY||0;ke!==Rn&&(Ri=ke>Rn?1:-1,Rn=ke),ci=Pn.range("blackFrameIn").ratio;const Le=Pn.range("blackFrameShow").ratio;Co=Pn.range("blackTitle").ratio,Et=Pn.range("blackTunnel").ratio,it!=null&&it.classList.contains("is-windowed")&&Lo(),Zr=Pn.range("whiteTunnel").ratio,an=Pn.between("whiteTunnel","whiteFrameOut").ratio,Hl=Pn.range("whiteFrameOut").ratio,kl=Pn.range("whiteFrameBreak").ratio,Th=Pn.between("whiteTunnel","whiteFrameBreak").ratio,qt=Pn.between("whiteFrameBreak","astronautDrop").ratio,Yi=((Kr=Pn.range("astronautWait"))==null?void 0:Kr.ratio)??0,bh=Pn.between("whiteFrameBreak","astronautWait").ratio;{const It=Pn.range("astronautDrop"),hi=Pn.range("astronautWait"),Ki=Math.max(0,It.pixel||0),Sr=window.innerWidth||1,jr=window.innerHeight||1,Jr=e.querySelector("#home-goal-image-out")||e.querySelector("#home-goal-image-out-inner"),Rs=(Zi=Jr==null?void 0:Jr.getBoundingClientRect)==null?void 0:Zi.call(Jr),xa=Rs?Rs.left+Rs.width*.5-Sr*.5:0;Ol=pe(qt,0,1,0,xa,Vu);const Xl=-Ki,ya=jr*(n?.28:.4),Bh=pe(qt,.35,1,0,1)*kt.clamp(Xl,-ya,ya),Cm=pe((hi==null?void 0:hi.ratio)??0,0,.35,0,1);zl=Bh*(1-Cm*.85)}if($i=Co<1,nn=Et<1&&!$i,Ot=an<=1&&!nn&&!$i,bs=Ot?Ui(0,.15,Th):1,ln.sync({blackFrameInRatio:ci,blackTitleRatio:Co,blackTunnelRatio:Et,whiteFrameRatio:Zr,whiteTunnelWaitRatio:Yi,astronautDropRatio:qt,isWhiteTunnelActive:Ot,isBlackTunnelActive:nn,isMobile:n}),Li){const It=e.querySelector("#home-goal-image-out-inner"),hi=e.querySelector("#home-goal-image-out"),Ki=hi==null?void 0:hi.getBoundingClientRect(),Sr=It==null?void 0:It.getBoundingClientRect();let jr=Ki&&Ki.height>8?Ki.height:Sr&&Sr.height>8?Sr.height:0;jr<8&&(jr=((Sr==null?void 0:Sr.width)||(It==null?void 0:It.clientWidth)||(it==null?void 0:it.clientWidth)||window.innerWidth*.7)*(1537/2e3));const Jr=Math.hypot(window.innerWidth,xe),Rs=Math.min((Ki==null?void 0:Ki.width)>8?Ki.width:jr*(2e3/1537),jr),xa=1-tn(Hl,0,1),Xl=kt.lerp(1,Jr/Math.max(Rs,1),xa),ya=-.3*xa*pe(qt,0,.15,1,.2);Li.updateFromScroll({glassBreakRatio:qt,astronautDropRatio:qt,frameHeight:jr,frameRotation:ya,frameScale:Xl})}Ee.u_whiteTunnelRatio.value=an,Ee.u_showRatio.value=bs,Ee.u_frameOutRatio.value=kl,zn.uniforms.u_ratio.value=an,Ci.uniforms.u_ratio.value=an,zn.uniforms.u_ratioInverse.value=1-an,Ci.uniforms.u_ratioInverse.value=1-an,Ee.u_ambientColor.value.set(Ot&&qt<1?"#6a7f94":"#566d80");const Ze=new Je("#ffffff");nn||$i?Ze.set("#000000"):Ot&&Ze.set(qt<1?"#ffffff":"#000000"),Xr.uniforms.u_color.value.copy(Ze),C.background=null,R.setClearColor(Ze,ln.clearAlpha),Ee.u_bgColor.value.copy(Ze),it&&!it.classList.contains("is-windowed")&&(it.style.background=qt>=1&&!n?"transparent":Ze.getStyle());const rt=it==null?void 0:it.classList.contains("is-windowed");!(it==null?void 0:it.classList.contains("is-pinned"))||rt?(document.documentElement.style.background="",document.body.style.background=""):Ot&&qt>=1?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):Ot?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):nn||$i?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),nt.visible=Ot&&qt<1,Cn.visible=nn,Kn.visible=!(Ot&&qt<1),qr.u_bgColor.value.copy(Ze);const ft=kt.clamp(Le,0,1),Tt=kt.clamp(ci,0,1);_n.position.y=-(10*(1-ft)+2.5+30*Tt),_n.scale.setScalar(pe(Tt,0,.5,40,70)),qi.rotation.x=pe(Tt,0,.5,0,-1),_n.visible=Tt<1&&!Ot&&!nn;const zt=document.getElementById("header");zt&&((it==null?void 0:it.classList.contains("is-pinned"))?Ot||Yi>0?zt.style.color="#000000":zt.style.color="#ffffff":zt.style.color="");const cn=e.dataset.goalPhase==="black-tunnel",Bn=e.dataset.goalPhase==="white";(nn&&!cn||Ot&&!Bn)&&ln.markEfxSync();const un=Ot;for(const It of le){const hi=un?It.userData.whiteMat:It.userData.blackMat;It.material!==hi&&(It.material=hi)}ue=nn?Ui(.2,.4,Et):0,Se.value=ue;for(const It of de)It.visible=!Ot&&ue>.01;let Ln;if(Ot){const It=an<1?pe(an,0,1,0,79):pe(qt,0,1,79,99);Ln=Ph(l,It,100),Ln.p.y-=(n?0:.4)*cM(qt)}else Ln=Ph(a,100*Hu(ci),100);if(ve.copy(Ln.p),ct.copy(Ln.q),Z.positionFrequency=.2,Z.rotationFrequency=.15,Z.positionAmplitude=0,Z.rotationAmplitude=0,nn){const It=Et;Z.positionFrequency=.2+.5*It,Z.rotationFrequency=.15,Z.positionAmplitude=5*It,Z.rotationAmplitude=60*It}else Ot&&(Z.positionFrequency=pe(Zr,0,.45,.5,.2),Z.rotationFrequency=pe(Zr,0,.45,.4,.15),Z.positionAmplitude=pe(Zr,0,.75,5,0),Z.rotationAmplitude=pe(Zr,0,.75,15,0));K.visible=bs>.02;const jt=window.innerHeight||1,ui=(Ii=it==null?void 0:it.querySelector)==null?void 0:Ii.call(it,"[data-goal-screen-clip]"),Do=Math.max(1,Yi>.001||qt>=1?jt:rt&&(ui==null?void 0:ui.clientHeight)||(it==null?void 0:it.clientHeight)||jt),yr=ci<1?ci:Yi>.001||qt>=1?1:1-Zr,Es=kt.lerp(Do,jt,yr),As=E.distanceTo(P),ga=w/180*Math.PI,va=Math.tan(ga/2)*As*2*(jt/Math.max(Es,1));$=Math.atan(va/2/As)*2/Math.PI*180,Ot?F=pe(an,0,1,60,0):nn?(F=Math.sin(Et*10+ht)*(n?4.5:7.5)*Ui(0,.2,Et),Cn.position.z=-80*fo(.2,0,Et)):(F=0,Cn.position.z=-80),Ro=.08*Ui(.5,1,Co)+.02,an>0&&(Ro*=pe(Pn.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),Ro=pe(Yi,0,.1,Ro,.05),ma=(1-ws)*Ri*2.5*pe(ci,0,.5,0,1)*pe(Yi,0,.25,1,0),Bl(),U.u_frameIn.value=ci,U.u_sunFactor.value=nn?1-Ui(.1,.2,Et):1,U.u_blackTunnelRatio.value=nn?Ui(.1,.3,Et):0,U.u_endRatio.value=nn?Ui(.65,.9,Et):0,U.u_offsetZ.value=x.u_offsetZ.value;const Bt=pe(qt,1,0,.2,1)*(kl>0?1:0);Ee.u_tintColor.value.setStyle("#2533c2").multiplyScalar(Bt);const Di=it.getBoundingClientRect();Ts=Di.bottom>0&&Di.top<xe,Ts&&!Ah&&$i&&(Po=0,Pi=0),Ah=Ts,e.dataset.goalPhase=Ot?"white":nn?"black-tunnel":ci<.98||it!=null&&it.classList.contains("is-windowed")?"window":"title"},Em=xe=>{if(!nn){x.u_showRatio.value=0,ln.setEfxOffset(0,0);return}x.u_showRatio.value=nM(fo(0,.1,Et));const ke=x.u_outBloomFromToStrength.value;ke.z=pe(Et,.65,.75,0,.2),ke.z=pe(Et,.75,.85,ke.z,.15),ke.z=pe(Et,.85,1,ke.z,.15),ke.x=pe(Et,.75,.85,20,60),ke.x=pe(Et,.9,1,ke.x,30);const Le=pe(Et,.6,1,0,1,rM);x.u_blackTunnelTransformRatio.value=Le;const Ze=Ri*xe;D+=Ze*fo(.1,.3,Et)*pe(Le,0,.25,1,.5),I+=Ze*pe(Le,0,.25,1.5,1);const rt=D,gt=Math.floor(rt),ft=rt-gt,Tt=(gt+Vu(ft))*Ka+I*Ka+Et*Ka*10,zt=-80*fo(.2,0,Et);let cn=zt-j,Bn=Tt-ie;(Math.abs(Bn)>8||Math.abs(cn)>20)&&(Bn=0,cn=0),ee=cn+Bn,j=zt,ie=Tt,Cn.position.z=zt,x.u_offsetZ.value=Tt,U.u_offsetZ.value=Tt,x.u_time.value=ht;const un=Ns.length*pe(Et,.2,1,0,1),Ln=Math.floor(un),jt=Math.min(Math.ceil(un),Ns.length-1),Do=un-Ln>.5?1:0;ut.set(Ns[Ln]),st.set(Ns[jt]),ut.lerp(st,Do),x.u_color1.value.copy(ut),ut.set(Lc[Ln]),st.set(Lc[jt]),ut.lerp(st,Do),x.u_color2.value.copy(ut);const yr=n?.45:1;ln.setEfxOffset(ee*pe(Et,0,.2,0,1)*yr,ee*Le*.01*yr),ln.setEfxAmount(pe(Et,0,.25,.35,.85)*(n?.35:1)),F=Math.sin(Et*10+ht)*(n?4.5:7.5)*Ui(0,.2,Et)};let Wl=0;const Am=xe=>{if(!Ot){vr.update({whiteTunnelWaitRatio:0,aspect:y.aspect}),Wl=an;return}bt.update(xe),zn.uniforms.u_time.value=ht,Ci.uniforms.u_time.value=ht,zn.uniforms.u_fbm.value=Xt,Ci.uniforms.u_fbm.value=Xt;let ke=an-Wl;Math.abs(ke)>.08&&(ke=0);const Le=n?0:.7,Ze=kt.clamp(-ke*pe(an,0,.9,500,0,ku)*Le,-1,1),rt=kt.clamp(-ke*pe(an,0,.8,45,0,ku)*Le,-1,1);ln.setEfxOffset(Ze,rt),ln.setEfxAmount(n?0:pe(an,.75,1,1,0)),Wl=an;const gt=Ot&&qt>=1?"#000000":Ot?"#ffffff":"#000000",ft=n?Math.max(y.aspect,.95):Math.max(y.aspect,.01);vr.update({whiteTunnelWaitRatio:qt>=1?Yi:0,aspect:ft,bg:gt})},Lh=()=>_a();window.addEventListener("scroll",Lh,{passive:!0}),_a();const Dh=xe=>{var va;const ke=Math.min(.05,Math.max(0,xe||.016666666666666666));if(Eh=performance.now(),!Ts){if(it){const Bt=it.getBoundingClientRect();Bt.bottom>0&&Bt.top<window.innerHeight&&ln.render()}return}ws+=((pa?1:0)-ws)*.1,Pt=pe(ws,0,1,1,.3)*ke,Pt=pe(ci,0,1,ke,Pt),Pt=pe(bh,.5,.75,Pt,ke),ht+=Pt,Ee.u_time.value=ht,ma=(1-ws)*Ri*2.5*pe(ci,0,.5,0,1)*pe(Yi,0,.25,1,0),Em(Pt),Am(Pt),Tm(Pt),nn&&(F=Math.sin(Et*10+ht)*(n?4.5:7.5)*Ui(0,.2,Et)),Bl();const Le=qt,Ze=pe(Le,0,.1,0,1)*pe(Le,.9,1,1,0);Ee.u_loopLinearBlend.value=Ze;const rt=pe(Le,.9,1,0,1,Hu);Ke=rt>0,Le>=1&&Pi===Number.POSITIVE_INFINITY&&(Pi=0,Po=0);let gt,ft,Tt,zt=!0;if(Le<.5)Pi=0,gt=Ui(-.3,1,Co)*.75,ft=0,Tt=89,Fe.uniforms.u_cardOpacity.value=0;else{gt=pe(Le,.9,1,0,1),ft=140,Tt=Math.min(Math.max(140,H-1),287);const Bt=Math.min(2,Math.max(0,.5+Math.max(0,Ce.getFbm(ht*8,3)+.5)*4));Fe.uniforms.u_cardOpacity.value=Bt*rt,Le<1?(Pi=Math.max(0,Pi),zt=!1):(zt=!0,Pi=0)}Pi===0&&(Po+=Pt*gt*Vl),Ze===1&&(Po=0);const cn=Math.max(1,Tt-ft+1),Bn=Pe[0];let Ln=((Bn+Po)*60%cn+cn)%cn,jt=Math.floor(Ln),ui=(jt+1)%cn+ft;jt+=ft,ui<jt&&(zt||(ui=jt=ft,Po=-Bn,Pi=Number.POSITIVE_INFINITY));const Do=ui<jt&&!zt?0:Ln-Math.floor(Ln);te.setXYZ(0,jt,ui,Do),te.needsUpdate=!0;const yr=pe(Hl+Le,.9,2,90,139,lM),Es=Math.floor(yr),As=Math.ceil(yr),ga=yr-Es;ce.setXYZ(0,Es,As,ga),ce.needsUpdate=!0,Ie.visible=Le>=.95&&bs>.02,Ye=Ke?Ye+Pt:0;{const Bt=De.x,Di=De.y,Kr=Math.floor(10*Ye%(Bt*(Di+1))),Zi=Kr/(Bt*(Di+1)),Ii=fo(0,.15,Zi)*fo(1,.9,Zi);Ee.u_faceLedLight.value=Ii,Fe.uniforms.u_cardUvOffset.value.set(Kr%Bt/Bt,(Di-Math.floor(Kr/Bt))/Di)}if(Ee.u_cardPosition.value.set(Re.getX(0),Re.getY(0)+.9,Re.getZ(0)),ue>.01&&!Ot&&!$i){for(let Bt=0;Bt<Q;Bt++){Te[Bt]=(Te[Bt]+.2*Pt)%1,Pi===0&&(Me[Bt]+=Pt*gt*Vl);const Zi=(kt.lerp(0,Pe[Bt+1],ue)+Me[Bt])*60%cn;let Ii=Math.floor(Zi),It=(Ii+1)%cn+ft;Ii+=ft,It<Ii&&!zt&&(It=Ii=ft);const hi=Zi-Math.floor(Zi);me.setXYZ(Bt,Ii,It,hi),je.setXYZ(Bt,Es,As,ga)}me.needsUpdate=!0,je.needsUpdate=!0}if((va=ln.setScrollVelocity)==null||va.call(ln,Math.abs(ma)+Math.abs(Ri)*.5),nn){const Bt=x.u_resolution.value.clone();nt.visible=!1,Kn.visible=!1,K.visible=bs>.02,x.u_feedbackTexture.value=qe.texture,x.u_resolution.value.set(Ge.width,Ge.height),R.setRenderTarget(Ge),R.setClearColor(0,0),R.clear(),R.render(C,y),Xe(Ge,n?10:16),Xe(Ge,n?3:4),R.setRenderTarget(null),x.u_resolution.value.copy(Bt);const Di=qe;qe=Ge,Ge=Di,x.u_feedbackTexture.value=qe.texture,U.u_blackTunnelTexture.value=qe.texture,Kn.visible=!0}R.setClearColor(Ee.u_bgColor.value,ln.clearAlpha),ln.render()},Ih=xe=>{Gl=requestAnimationFrame(Ih);const ke=Math.min(.05,(xe-Eh)/1e3);xe-Uh>50&&Dh(ke)};let Uh=0;const Rm=xe=>{Uh=performance.now(),Dh(xe)};return Gl=requestAnimationFrame(Ih),requestAnimationFrame(()=>{Lo(),_a(),ln.render()}),{resize:Lo,updateScroll:_a,tickFrame:Rm,getAutoScrollSpeed:()=>ma,getGlassRatio:()=>(Li==null?void 0:Li.ratio)??0,getAstronautDropRatio:()=>qt,getWhiteTunnelRatio:()=>an,getBlackFrameInRatio:()=>ci,getBlackTunnelRatio:()=>Et,getBlackTitleRatio:()=>Co,isGoalAudioActive:()=>!!(it&&(it.classList.contains("is-pinned")||it.classList.contains("is-windowed")||Ts&&($i||nn||Ot))),destroy(){cancelAnimationFrame(Gl),window.removeEventListener("resize",Lo),window.removeEventListener("scroll",Lh),Li==null||Li.dispose(),be.dispose(),Oe.dispose(),Ue.dispose(),ze.dispose(),ln.destroy(),R.dispose()}}}function UM(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=Sh(i),o=()=>window.innerWidth<812,s=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const b=Array.from(p.querySelectorAll(".goal-word"));if(b.length<2){b.forEach(C=>{C._offsetX=0});return}b.forEach(C=>{C.style.transform="translateZ(0)"});let S=g;b.forEach(C=>{const E=C.getBoundingClientRect();C._domRect=E,S-=E.width});let M=0;const L=S/(b.length-1);b.forEach(C=>{C._offsetX=-C._domRect.left+_+M,M+=C._domRect.width+L})})};c(),window.addEventListener("resize",c);let u=null,d=null,f=null;t&&t.parentElement&&(d=t.parentElement,f=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,b=pe(_,0,.25,0,1);r.progress();const S=window.visualViewport,M=Math.round((S==null?void 0:S.height)||window.innerHeight),L=Math.round((S==null?void 0:S.offsetTop)||0);if(t&&!t.classList.contains("is-windowed")){const N=i.getBoundingClientRect(),O=window.scrollY||0,V=Math.round((S==null?void 0:S.offsetLeft)||0),H=Math.round((S==null?void 0:S.width)||window.innerWidth),Y=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+O,z=O>=Y-1&&N.bottom>0,se=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",z),u&&(u.style.height=z?`${M}px`:"0px"),z&&!se?(document.body.appendChild(t),window.dispatchEvent(new Event("resize"))):!z&&se&&d&&(f&&f.parentNode===d?d.insertBefore(t,f):u&&u.parentNode===d?d.insertBefore(t,u.nextSibling):d.appendChild(t),t.style.top="",t.style.left="",t.style.width="",t.style.height="",window.dispatchEvent(new Event("resize"))),z&&(t.style.top=`${L}px`,t.style.left=`${V}px`,t.style.width=`${H}px`,t.style.height=`${M}px`,t.style.right="auto",t.style.bottom="auto"),t.style.background=b>.05||_>.01?"#ffffff":"#000000"}let C=pe(v,a,l,0,1);const E=C>0&&C<1;let P=pe(C,.5,1,1,o()?9:12,Hu);P*=pe(C,0,.15,.85,1,aM);let w=pe(C,.9,1,1,0);w*=pe(C,0,.05,0,1),w*=pe(g,0,.12,1,0);const y=pe(C,.4,.6,0,1,Vu);if(e.classList.toggle("is-on-black",b<.5),e.style.opacity=String(w),e.style.transform=`translate3d(-50%, -50%, 0) scale(${P})`,e.style.visibility=E&&w>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(N=>{const O=N._offsetX||0;N.style.transform=`translateX(${y*O}px)`}),s){const N=pe(g,.02,.15,1,0);s.style.opacity=String(N),t!=null&&t.classList.contains("is-windowed")||(s.style.transform="none")}const R=r.range("blackFrameIn").ratio;return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":R<.98?"window":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:b}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function Ja(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((o,s)=>{const a=document.createElement("div");a.className=e,a.textContent=o,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),s<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function FM(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,o)=>{const s=document.createElement("div");s.className="word",s.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",s.appendChild(l),t.push(l)}),i.appendChild(s),r<o.length-1&&i.appendChild(document.createTextNode(" "))}),t}function lo(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function NM(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=lo(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),o=document.getElementById("home-reel-title-line-2"),s=document.getElementById("home-reel-content"),a=lo(document.getElementById("home-reel-desc"),2),l=lo(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),d=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let f=[],m=0,v=[],g=!0;const _=()=>{f.forEach(X=>{X.style.transform="translate3d(0, 100%, 0)"}),v.forEach(X=>{X.style.transform="translate3d(0, 100%, 0)",X.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!o||([r,o].forEach(X=>{X.style.overflow="hidden",X.style.display="block",X.style.position="relative"}),f=[...Ja(r,"word"),...Ja(o,"word")],f.forEach(X=>{X.style.position="relative",X.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=Ja(a,"word"),a.style.overflow="hidden"),_())})();const b=document.getElementById("home-featured"),S=lo(document.getElementById("home-featured-title"),2),M=lo(document.getElementById("home-featured-disclaimer"),2),L=lo(document.getElementById("home-featured-cta"),1);let C=[],E=[],P=!0;const w=()=>{P=!1,S&&(S._time=0,S._animating=!1),M&&(M._time=0,M._animating=!1),L&&(L._time=0,L._animating=!1),i()||(E.forEach(X=>{X.style.transform="translate3d(0, 100%, 0)"}),C.forEach(X=>{X.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(S){if(S.style.overflow="hidden",C=FM(S),M){const X=M.textContent.trim();M.textContent="";const _e=document.createElement("div");_e.className="line",_e.textContent=X,_e.style.transform="translate3d(0, 100%, 0)",_e.style.willChange="transform";const we=document.createElement("div");we.style.position="relative",we.style.overflow="hidden",we.appendChild(_e),M.appendChild(we),E=[_e]}L&&(L.style.transform="translate3d(0, 150%, 0) rotate(10deg)",L.style.opacity="0",L.style.overflow="hidden"),w()}})();const R=lo(document.getElementById("home-goal-title"),2);let N=[];R&&(R.style.overflow="hidden",N=Ja(R,"word"),N.forEach(X=>{X.style.transform="translate3d(0, 100%, 0)",X.style.opacity="0"}));let O=0,V=!1,H=0;const G=X=>{if(!t||!e)return;if(!Mn(e).isActive){g=!0;return}g&&(g=!1,_());const we=Mn(t),Re=Mn(s||a),te=window.innerHeight*.1;if(t._time=tn(t._time+(t._animating?X:-X),0,2),a&&(a._time=tn(a._time+(a._animating?X:-X),0,2)),l&&(l._ratio=ti(l._ratio+(l._animating?X:-X))),we.screenRatio>-1&&(t._animating=!0,i()?f.forEach(ce=>{ce.style.transform="translate3d(0, 0, 0)"}):f.forEach((ce,ae)=>{let be,Oe;ae<2?(be=pe(t._time-Math.abs(2-ae)/10,.5,1.2,-m,0,_t),Oe=pe(t._time-ae/10,0,1,100,0,_t)):(be=0,Oe=pe(t._time-ae/10,0,1,-100,0,_t)),ce.style.transform=`translate3d(${be}px, ${Oe}%, 0)`}),n)){const ce=we.showScreenOffset*-te*.5;n.style.transform=`translate3d(0, ${ce}px, 0)`}if(Re.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const ce=Re.showScreenOffset*-te*1.5;if(a&&(a.style.transform=`translate3d(0, ${ce}px, 0)`,i()?v.forEach(ae=>{ae.style.opacity="1",ae.style.transform="translate3d(0, 0, 0)"}):v.forEach((ae,be)=>{const Oe=pe(a._time-be/100,0,1,.1,1,wl),Ue=pe(a._time-be/100,0,1,100,0,wl);ae.style.opacity=String(Oe),ae.style.transform=`translate3d(0, ${Ue}%, 0)`})),l){const ae=Re.showScreenOffset*-te*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${ae}px) translate3d(0, ${pe(l._ratio,0,1,150,0,_t)}%, 0) rotate(${pe(l._ratio,0,1,10,0,_t)}deg)`,l.style.opacity=String(_t(l._ratio))):(l.style.transform=`translateY(${ae}px)`,l.style.opacity="1")}}if(c){const ce=Mn(c),ae=ti(pe(ce.showScreenOffset,.05,.85,0,1,_t));c.style.opacity=String(ae),c.style.transform=`translate3d(0, ${pe(ae,0,1,80,0,_t)}px, 0) scale(${pe(ae,0,1,.96,1,_t)})`}if(u){const ce=Mn(u);H=ti(pe(ce.showScreenOffset,0,.7,0,1,_t)),u.style.opacity=String(.4+H*.6),u.style.transform=`translate3d(0, ${pe(H,0,1,60,0,_t)}px, 0) scale(${pe(H,0,1,.94,1,_t)})`,V=H>.9,O=tn(O+(V?X:-X*2),0,1.4),d.forEach((ae,be)=>{const Oe=pe(O-be/10,0,.6,0,1,_t),Ue=pe(O-be/10,0,.6,0,180,_t);ae.style.transform=`scale(${Oe}) rotate(${Ue}deg)`,ae.style.display="inline-block"})}},Y=X=>{if(!b||!S)return;if(Mn(b).isActive){P&&w();const we=Mn(S),Re=Mn(M),J=Mn(L);S._time=tn(S._time+(S._animating?X:-X),0,2),M&&(M._time=tn(M._time+(M._animating?X:-X),0,2)),L&&(L._time=tn(L._time+(L._animating?X:-X),0,1)),we.screenRatio>-1&&(S._animating=!0,i()?C.forEach(te=>{te.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):C.forEach((te,ce)=>{const ae=pe(S._time*1.5-ce/20,0,1,1,0,_t),be=pe(S._time*1.5-ce/20,0,1,10,0,_t);te.style.transform=`translate3d(0, ${ae}em, 0) rotate(${be}deg)`})),Re.screenRatio>-1&&M&&(M._animating=!0,i()?E.forEach(te=>{te.style.transform="translate3d(0, 0, 0)"}):E.forEach((te,ce)=>{const ae=pe(M._time-ce/20,0,1,100,0,_t);te.style.transform=`translate3d(0, ${ae}%, 0)`})),J.screenRatio>-1&&L&&(i()?(L.style.transform="translate3d(0, 0, 0) rotate(0deg)",L.style.opacity="1"):(L._animating=!0,L.style.transform=`translate3d(0, ${pe(L._time,0,1,150,0,_t)}%, 0) rotate(${pe(L._time,0,1,10,0,_t)}deg)`,L.style.opacity=String(_t(L._time))))}else P=!0},z=X=>{if(!R)return;Mn(R).screenRatio>-1&&(R._animating=!0),R._time=tn(R._time+(R._animating?X:-X),0,2),N.forEach((we,Re)=>{const J=pe(R._time-Re/20,0,1,0,1,_t),te=pe(R._time-Re/20,0,1,100,0,_t);we.style.opacity=String(J),we.style.transform=`translate3d(0, ${te}%, 0)`})},se=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",se),{update(X){G(X),Y(X),z(X)},destroy(){window.removeEventListener("resize",se)}}}const yd=28,OM=4,zM=8;function Sd(){return window.innerWidth<812}function BM(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var P,w;const r=t.querySelector(".project-item-main"),o=t.querySelector(".project-item-image"),s=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((P=s==null?void 0:s.textContent)==null?void 0:P.trim())||"",u=((w=a==null?void 0:a.textContent)==null?void 0:w.trim())||"",d=[];a&&(a.textContent="",[...u].forEach(y=>{const R=document.createElement("div");if(R.className="project-item-line-2-inner-list",R.style.transform="translateY(-400%)",y===" ")R.style.width="0.3em";else for(let N=0;N<4;N++){const O=document.createElement("span");O.textContent=y,R.appendChild(O)}a.appendChild(R),d.push(R)})),s&&(s.textContent="");let f=!1,m=!1,v=0,g=0,_=0,p=0,b=0,S=!1,M=0,L=0,C=0,E=0;return Sd()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{f=!0}),r==null||r.addEventListener("mouseleave",()=>{f=!1})),{dom:t,main:r,image:o,line1:s,line2Icon:l,tags:c,letterCols:d,index:n,update(y){const R=Mn(t),N=R.ratio>-1&&R.ratio<1;N&&(S=!0),S&&(_+=y);const O=ti(pe(_,0,.85,0,1,_t)),V=pe(O,0,1,90,0,_t);if(t.style.opacity=String(O),t.style.transform=`translate3d(0, ${V}px, 0)`,s&&N){p+=y;const H=Math.min(c.length,Math.floor(yd*p)-OM),G=Math.min(c.length,Math.floor(yd*p));let Y="";for(let z=0;z<Math.max(0,H);z++)Y+=c[z];for(let z=0;z<G-Math.max(0,H);z++)Y+=String.fromCharCode(33+Math.floor(Math.random()*93));s.textContent=Y}if(N&&(b+=y*.8),g=ti(g+(m?1:-1)*y*2.5),Sd())d.forEach((H,G)=>{const Y=ti(g-Math.abs(G-d.length-1)/100),z=pe(Y,0,1,0,1.5,_t);H.style.transform=`translate3d(1.5em, 0, 0) translateX(${z}em)`}),l&&(l.style.transform="translateX(1em)");else if(d.forEach((H,G)=>{const Y=pe(G,0,Math.max(1,d.length-1),Math.PI/2,3*Math.PI/2),z=ti(b-Math.cos(Y)/zM),se=pe(z,0,1,500,0,iM),X=ti(g-Math.abs(G-d.length-1)/100),_e=pe(X,0,1,0,1.5,_t);H.style.transform=`translate3d(${_e}em, -${se}%, 0)`}),l){const H=pe(g,.3,1,0,1,_t);l.style.transform=`translateX(${H}em)`}if(v=tn(v+(f?1:-1)*y,0,1),o&&!document.documentElement.classList.contains("has-featured-webgl")){f?(C=(Math.random()-.5)*pe(v,0,.6,1,0)*8,E=(Math.random()-.5)*pe(v,0,.6,1,0)*8):(C*=.92,E*=.92),M+=(C-M)*.2,L+=(E-L)*.2;const H=pe(v,0,1,1,1.06,_t);o.style.transform=`translate3d(${M}px, ${L}px, 0) scale(${H})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const Md=12,wd=6,kM=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,HM=`
precision highp float;
uniform sampler2D u_texture;
uniform sampler2D u_depthTexture;
uniform vec3 u_colorBg;
uniform float u_showRatio;
uniform float u_activeRatio;
uniform vec2 u_textureSize;
uniform vec2 u_domWH;
uniform vec2 u_shiftXY;
uniform vec3 u_focusPos;
uniform float u_zoomRatio;
uniform float u_dofRangeOffset;
uniform float u_saturation;
uniform float u_brightness;
uniform float u_rippleStrength;
uniform vec2 u_resolution;
uniform float u_globalRadius;
uniform float u_time;
varying vec2 v_uv;

float linearStep(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}
float sdRoundedBox(in vec2 p, in vec2 b, in float r) {
  vec2 q = abs(p) - b + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}
float getRoundedCornerMask(vec2 uv, vec2 size, float radius, float ratio) {
  vec2 halfSize = size * 0.5;
  float maxDist = length(halfSize);
  float minSize = min(halfSize.x, halfSize.y);
  float maxSize = max(halfSize.x, halfSize.y);
  float t = ratio * maxDist;
  radius = mix(minSize * linearStep(0., minSize, t), radius, linearStep(maxSize, maxDist, t));
  halfSize = min(halfSize, vec2(t));
  float d = sdRoundedBox((uv - 0.5) * u_domWH, halfSize, radius);
  // SDF: d<0 inside. Avoid smoothstep(0, -fwidth, d) — undefined when edge0>edge1
  // on some drivers (SwiftShader) and was discarding the whole card.
  float fw = max(fwidth(d), 0.001);
  return 1.0 - smoothstep(-fw, fw, d);
}
vec3 hashNoise(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}

void main() {
  vec2 screenUv = gl_FragCoord.xy / u_resolution;
  vec2 baseUv = v_uv;
  baseUv.x -= (screenUv.x - 0.5) * (1.0 - sin(screenUv.y * 3.141592)) * u_rippleStrength;
  vec3 noise = hashNoise(gl_FragCoord.xy + vec2(5.0, 28.0) + u_time);
  float imageAlpha = getRoundedCornerMask(
    baseUv,
    u_domWH * mix(0.7, 1.0, u_showRatio),
    u_globalRadius,
    1.0
  );
  vec2 toUvSpace = 1.0 / (u_textureSize * max(u_domWH.x / u_textureSize.x, u_domWH.y / u_textureSize.y));
  vec2 uv = baseUv - 0.5;
  uv *= u_domWH * mix(0.75, 1.0, u_showRatio);
  uv *= mix(0.975, 1.0, u_zoomRatio);
  float zMultiplier = u_domWH.y * (0.15 + u_activeRatio * 15.0);
  vec3 pos = vec3(uv, -zMultiplier);
  float cameraDepth = u_domWH.y * mix(10.0, 5.0, u_zoomRatio);
  vec3 rayOri = vec3(u_focusPos.xy, cameraDepth);
  float dist = length(pos - rayOri);
  vec3 rayDir = (pos - rayOri) / max(dist, 1e-4);
  float skipDist = cameraDepth / max(-rayDir.z, 1e-4);
  dist -= skipDist;
  float stepDist = dist / float(${Md});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${Md}; i++) {
    float currZ = -texture2D(u_depthTexture, rayPos.xy * toUvSpace + 0.5).r * zMultiplier;
    if (currZ > rayPos.z) break;
    rayPos += rayStep;
    dist += stepDist;
  }
  uv = rayPos.xy;
  uv *= toUvSpace;
  uv += u_shiftXY * 0.015;
  float depth = texture2D(u_depthTexture, uv + 0.5).r;
  vec3 color = vec3(0.0);
  float PI = 3.1415926;
  float blurriness = mix(0.0, 0.01, u_zoomRatio) * linearStep(0.0, 0.5, abs(depth - u_focusPos.z) + u_dofRangeOffset);
  float angle = PI * 2.0 * noise.y;
  float textureAspectInv = u_textureSize.y / u_textureSize.x;
  float numSampleInv = 1.0 / float(${wd});
  for (int i = 0; i < ${wd}; i++) {
    float fI = float(i);
    float r = sqrt((fI + 0.5) * numSampleInv) * blurriness;
    angle += 10.16640738;
    vec2 uvOffset = r * vec2(cos(angle) * textureAspectInv, sin(angle));
    color += texture2D(u_texture, uv + uvOffset + 0.5).rgb;
  }
  color *= numSampleInv;
  float luma = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(luma), color, 1.0 + u_saturation);
  color += u_brightness;
  float fogThickness = 0.75;
  color = mix(
    color,
    u_colorBg,
    linearStep(0.0, fogThickness, u_activeRatio * (1.0 + fogThickness * 2.0) - fogThickness - (1.0 - depth))
  );
  gl_FragColor = vec4(color, imageAlpha);
}
`;function VM(i,e,t,n){const r=Math.PI*2*e,o=t/(Math.PI*e),s=1/(r*r),a=n*t/r;let l=i,c=0,u=i,d=i;return{get value(){return l},set target(f){d=f},get target(){return d},update(f){if(f<=0)return l;const m=(d-u)/f;u=d;const v=Math.max(s,f*f/2+f*o/2,f*o);return l+=c*f,c+=(d+a*m-l-o*c)*f/v,l}}}async function GM(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new Il({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(M){return n.remove(),console.warn("Featured WebGL unavailable",M),{update(){},resize(){},destroy(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=Un;const o=new Eo,s=new Ll(0,1,1,0,-1e3,1e3);s.position.z=10;const a=new sr,l="/zyrax-studio/assets/projects/",c={x:0,y:0},u=M=>{c.x=M.clientX,c.y=M.clientY};window.addEventListener("pointermove",u,{passive:!0});const d=new xi(1,1),f=[],m=Array.from(t.querySelectorAll(".project-item"));await Promise.all(m.map(async(M,L)=>{var ae,be,Oe;const C=M.dataset.id||((ae=i[L])==null?void 0:ae.id),E=M.querySelector(".project-item-main"),P=M.querySelector(".project-item-image img");P&&(P.style.opacity="0",P.setAttribute("aria-hidden","true"));const w=new Je(M.dataset.colorBg||"#111111");let y,R;try{[y,R]=await Promise.all([a.loadAsync(`${l}${C}/home.webp`),a.loadAsync(`${l}${C}/home_depth.webp`)])}catch(Ue){console.warn("Featured WebGL textures failed for",C,Ue),P&&(P.style.opacity="1");return}y.colorSpace=Un,y.wrapS=y.wrapT=Nn,y.minFilter=vt,y.magFilter=vt,y.generateMipmaps=!1,R.colorSpace=en,R.wrapS=R.wrapT=Nn,R.minFilter=vt,R.magFilter=vt,R.generateMipmaps=!1;const N=new et(((be=y.image)==null?void 0:be.width)||1024,((Oe=y.image)==null?void 0:Oe.height)||1024),O=new q(0,0,-1),V=new Gu(new q,1,.6,2),H=VM(1,2.2,.7,3);H.target=0;const G=new et,Y=new et,z={u_texture:{value:y},u_depthTexture:{value:R},u_colorBg:{value:w},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:N},u_domWH:{value:new et(1,1)},u_shiftXY:{value:G},u_focusPos:{value:O},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new et(1,1)},u_globalRadius:{value:15},u_time:{value:0}},se=new At({uniforms:z,vertexShader:kM,fragmentShader:HM,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),X=new Ut(d,se);X.frustumCulled=!1,X.renderOrder=10+L,X.visible=!1,o.add(X);let _e=!1,we=0,Re=0,J=0;const te=[0,.2,.3],ce=Ue=>{for(let qe=0;qe<te.length;qe++)if(Ue<te[qe])return qe;return te.length};window.innerWidth>=812&&(E==null||E.addEventListener("mouseenter",()=>{_e=!0}),E==null||E.addEventListener("mouseleave",()=>{_e=!1})),f.push({mesh:X,uniforms:z,focusDyn:V,focusPos:O,zoomDyn:H,shiftXY:G,shiftXYTarget:Y,index:L,main:E,dom:M,update(Ue,qe,Ge,at,B){const ze=Mn(M);if(!(ze.ratio>-1&&ze.ratio<1)||!E){Re=0,X.visible=!1,z.u_showRatio.value=0;return}Re+=Ue;const He=E.getBoundingClientRect(),Be=Math.max(1,He.width),Xe=Math.max(1,He.height);z.u_domWH.value.set(Be,Xe),z.u_resolution.value.set(qe,Ge),z.u_time.value=at,z.u_rippleStrength.value=Math.min(.15,B*.5),z.u_globalRadius.value=Math.min(Be,Xe)*.04;const Ee=pe(Re,0,2,0,1,wl),U=L%2-.5,A=(1-Ee)*U*-qe*.1,k=(1-Ee)*U*.1;X.position.set(He.left+Be*.5+A,Ge-(He.top+Xe*.5),0),X.scale.set(Be,Xe,1),X.rotation.z=-k;const K=pe(Re,0,1.5,0,1,wl);z.u_showRatio.value=K,X.visible=K>.01;const le=we;if(we=tn(we+(_e?1:-1)*Ue,0,1),le<we){const Ae=ce(le),he=ce(we);he!==Ae&&Y.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(pe(we,0,.6,1,0)),he===te.length&&Y.multiplyScalar(.5)}else Y.multiplyScalar(.95);G.lerp(Y,.2);const Q=V.target;if(_e){const Ae=we>0?pe(we,0,.3,1,0)*Xe*.75:0;Q.x=(c.x-He.left-Be*.5+Math.cos(at*20)*Ae)/Be*-Xe,Q.y=(c.y-He.top-Xe*.5-Math.sin(at*30)*Ae)/Xe*Xe,Q.z=.5}else Q.x=0,Q.y=0,Q.z=-1;V.update(Ue),O.copy(V.value),H.target=_e?1:0,H.update(Ue),z.u_zoomRatio.value=H.value,J=tn(J+(_e?.75:-1)*Ue,0,1),z.u_dofRangeOffset.value=kt.lerp(0,-.5,J),z.u_saturation.value=0,z.u_brightness.value=0,z.u_activeRatio.value=0}})}));let v=1,g=1,_=0,p=window.scrollY,b=0;const S=()=>{v=window.innerWidth,g=window.innerHeight,r.setSize(v,g,!1),s.left=0,s.right=v,s.top=g,s.bottom=0,s.updateProjectionMatrix()};return S(),window.addEventListener("resize",S),{update(M){_+=M;const L=window.scrollY,C=Math.abs(L-p)/Math.max(M,.001);p=L,b+=(Math.min(1,C*.002)-b)*.15;const P=Mn(e).isActive;if(n.style.visibility=P?"visible":"hidden",!!P){for(const w of f)w.update(M,v,g,_,b);r.render(o,s)}},resize:S,destroy(){window.removeEventListener("pointermove",u),window.removeEventListener("resize",S),document.documentElement.classList.remove("has-featured-webgl"),f.forEach(M=>{M.mesh.material.dispose()}),d.dispose(),r.dispose(),n.remove()}}}function WM(){return window.innerWidth<812}function XM(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const o=document.createElement("span");o.className="reel-char-wrap",o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top";const s=document.createElement("span");s.className="reel-char",s.textContent=r,s.style.display="inline-block",o.appendChild(s),o._inner=s,t.appendChild(o),t._chars.push(o)}),t._randCharIndex=0}),i._splitted={words:e}}function qM(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),o=document.getElementById("home-reel-video-title"),s=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));o&&XM(o);const l=2;let c=0,u=0,d=0,f=0,m=!1,v=!1,g=0,_=0,p=!1,b=!1,S=0;const M=C=>{var P;if(!C)return;const E=(P=C.play)==null?void 0:P.call(C);E&&typeof E.catch=="function"&&E.catch(()=>{})};return{update:C=>{var R;if(!i)return;const E=e?Mn(e):null,P=n?Mn(n):null,w=WM(),y=w?!!(P!=null&&P.isActive):!!E&&E.showScreenOffset>0&&(P?P.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",y),y){const N=(E==null?void 0:E.top)??0,O=(E==null?void 0:E.height)??1,V=window.innerHeight,H=N-(V-O)*.5,G=((P==null?void 0:P.top)??0)-(V-((P==null?void 0:P.height)??V))*.5;if(S=ti(pe(window.scrollY+N,H,G,0,1)),S=ti(pe((E==null?void 0:E.showScreenOffset)??0,.15,1.1,0,1,_t)),r&&(M(r),r.style.opacity=String(.35+S*.65)),t&&(M(t),t.style.opacity=String(1-S*.85)),e){const Y=pe(S,0,1,1,1.08,_t);e.style.transform=`scale(${Y})`,e.style.opacity=String(pe(S,.7,1,1,.15,_t))}if(n){const Y=pe(S,0,1,48,0,_t),z=pe(S,0,1,.94,1,_t);n.style.transform=`translate3d(0, ${Y}px, 0) scale(${z})`,n.style.opacity=String(.25+S*.75)}S===1||S>.9?(m=!0,v=!0):(v=!1,m=!1),p=S>.85,b=S>.85}else(R=r==null?void 0:r.pause)==null||R.call(r),S=0,m=!1,v=!1,p=!1,b=!1;if(d=tn(d+(m?C:-C),0,1e9),f=Math.min(S,ti(f+(v?C:-C))),u=d%l,o!=null&&o._splitted&&!w){const N=o._splitted.words;for(let O=0;O<N.length;O++){const V=N[O];c-u>l-1&&(V._randCharIndex=Math.round(Math.random()*(V._chars.length-1)));for(let H=0;H<V._chars.length;H++){const G=V._chars[H];let Y=pe(f-O/4-H/20,0,.6,200,0,_t);H===V._randCharIndex&&(Y+=pe(u-O/10,.5,1.3,0,-100,_t)),G._inner&&(G._inner.style.transform=`translate3d(0, ${Y}%, 0)`)}}}c=u,g=tn(g+(p?C:-C*2),0,1.4),_=tn(_+(b?C:-C*2),0,1.4),s.forEach((N,O)=>{const V=pe(g-O/10,0,.6,0,1,_t),H=pe(g-O/10,0,.6,0,180,_t);N.style.transform=`scale(${V}) rotate(${H}deg)`}),a.forEach((N,O)=>{const V=pe(_-O/10,0,.6,0,1,_t),H=pe(_-O/10,0,.6,0,180,_t);N.style.transform=`scale(${V}) rotate(${H}deg)`})},destroy(){}}}const Ic=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new q(-.0112049,-.0141946,0),boxMax:new q(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new q(-.0180006,-.00963629,0),boxMax:new q(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],YM=`
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
`,$M=`
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
`,ZM=`
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
`,KM=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function jM(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function JM(){const i=jM(),e="/zyrax-studio/",t=await Promise.all(Ic.map(E=>Sn(`${e}assets/models/lines/${E.fileName}.buf`))),n=new Eo,r=new Hn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);const o=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let s;try{s=new Il({canvas:i,alpha:!0,antialias:!o,premultipliedAlpha:!1,powerPreference:o?"low-power":"default"})}catch(E){return console.error("Lines WebGL unavailable",E),{update(){},resize(){},destroy(){},setPaused(){}}}s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,o?1:1.5)),s.autoClear=!0;const a=[],l=new q,c=new q,u=new ys,d=new et,f=new yt,m=new yt,v=new yt,g=new yt;let _=!1,p=!0;for(let E=0;E<Ic.length;E++){const P=Ic[E],w=t[E],y=document.querySelector(P.sectionSelector);if(!y||!w)continue;const R=new vi,N=new vi;R.add(N),n.add(R);const O=new At({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:P.aoThreshold},u_color0:{value:new Je(P.color0)},u_color1:{value:new Je(P.color1)},u_radius:{value:.008}},vertexShader:YM,fragmentShader:$M,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),V=new Ut(w,O);V.frustumCulled=!1,V.renderOrder=200,N.add(V);const H=new At({uniforms:{u_color0:{value:new Je(P.color0)},u_color1:{value:new Je(P.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:ZM,fragmentShader:KM,side:En,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),G=new Ut(new xi(2,2),H);G.frustumCulled=!1,G.renderOrder=200,N.add(G);const Y=w.attributes.position.array,z=w.attributes.position.count,se=new Float32Array(z);for(let X=0;X<z;X++)se[X]=Y[X*3+2];a.push({data:P,sectionEl:y,container:R,inner:N,mesh:V,mat:O,circle:G,circleMat:H,lineRatioArray:se,cpAttr:w.attributes.CP,cdAttr:w.attributes.Cd,count:z,offsetY:0,framePos:new q,frameQuat:new On,frameScale:new q(1,1,1)})}let b=1,S=1;const M=()=>{b=window.innerWidth||1,S=window.innerHeight||1;const E=Math.sqrt(b*b+S*S),P=S/E;d.set(b/S*P,P),r.fov=60,r.aspect=b/S,r.position.set(b/2,-S/2,S/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(b/2,-S/2,0),r.updateProjectionMatrix(),s.setSize(b,S,!1)};M(),window.addEventListener("resize",M);const L=E=>{var A;const{data:P,sectionEl:w,container:y,inner:R,mat:N,circle:O,circleMat:V,lineRatioArray:H,cpAttr:G,cdAttr:Y,count:z}=E,X=Mn(w).top+E.offsetY,_e=S,we=P.scrollToRatioFactors;let Re=ti(-(X-we[0]*_e)/(we[1]*_e));Re=sM(Re);const J=b<=812,te=.008*pe(b,540,1920,2,1)*(J?.72:1),ce=b/d.x,ae=S/d.y;let be=P.margin.x,Oe=P.margin.y;J&&P.id==="goal"&&(be=.42,Oe=-.35),R.position.x=be*ce,R.position.y=Oe*ae-X,R.scale.set(ce,ae,1),E._showSmooth==null&&(E._showSmooth=Re),E._showSmooth+=(Re-E._showSmooth)*(J?.32:.18),E._targetA=Re,N.uniforms.u_showRatio.value=E._showSmooth,N.uniforms.u_radius.value=te;const Ue=(A=w.dataset)==null?void 0:A.goalPhase,qe=P.id==="goal"&&(Ue==="black-tunnel"||Ue==="white");if(y.position.copy(E.framePos),y.quaternion.copy(E.frameQuat),y.scale.copy(E.frameScale),y.updateMatrixWorld(!0),u.min.copy(P.boxMin),u.max.copy(P.boxMax),u.applyMatrix4(R.matrixWorld),y.visible=!qe&&u.max.y>-S&&u.min.y<0&&E._showSmooth>.001,!y.visible)return;const Ge=E._showSmooth;let at=0,B=z-1;for(;at<B;){const k=at+B+1>>1;H[k]<=Ge?at=k:B=k-1}const ze=at,We=Math.min(ze+1,z-1);let He=0;if(ze<z-1){const k=H[We]-H[ze]||1;He=(Ge-H[ze])/k}l.fromArray(G.array,ze*3),c.fromArray(G.array,We*3),l.lerp(c,He);const Be=Y.array;let Xe=Be[ze]*(1-He)+Be[We]*He;Xe=.9+.1*Xe;const Ee=ti((Ge-(P.aoThreshold-.02))/.04);O.position.copy(l),O.scale.set(te,te,1),V.uniforms.u_ao.value=Math.min(1,Xe+1-Ee);let U=H[ze]*(1-He)+H[We]*He;U=1-Math.pow(1-tn(U,0,1),2),V.uniforms.u_mixRatio.value=U},C=()=>{if(_){if(p){for(const w of a)w.container.visible=!1;s.clear(),p=!1}return}let E=!1,P=!1;for(const w of a){L(w),w.container.visible&&(E=!0);const y=w._targetA??0,R=w._showSmooth??0;Math.abs(y-R)>8e-4&&(P=!0)}(E||P||p)&&s.render(n,r),p=E||P};return C(),{update:C,resize:M,setGoalOffset(E){const P=a.find(w=>w.data.id==="goal");P&&(P.offsetY=E||0)},setGoalFrame({scale:E=1,rotation:P=0,active:w=!1}={}){const y=a.find(O=>O.data.id==="goal");if(!y)return;if(!w){y.framePos.set(0,0,0),y.frameQuat.identity(),y.frameScale.set(1,1,1);return}const R=b*.5,N=-S*.5;f.makeTranslation(R,N,0),m.makeRotationZ(-P),v.makeScale(E,E,1),g.makeTranslation(-R,-N,0),f.multiply(m).multiply(v).multiply(g),f.decompose(y.framePos,y.frameQuat,y.frameScale)},setPaused(E){if(_=!!E,_){for(const P of a)P.container.visible=!1;try{s.clear()}catch{}p=!1}},destroy(){window.removeEventListener("resize",M),s.dispose(),i.remove()}}}const Uc=typeof window<"u"&&(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812);function QM(i,e,t,n){var P;if(!i||!e)return{update(){},destroy(){},getFrameRect:()=>null};const r="/zyrax-studio/",o=i.querySelector("#home-goal-image-in-outer"),s=i.querySelector("#home-goal-image-in-inner"),a=i.querySelector("#home-goal-image-in"),l=i.querySelector("#home-goal-context-inner"),c=i.querySelector("#home-goal-texts"),u=i.querySelector("#home-goal-tunnel-title"),d={left:.039,top:.054,width:.925,height:.895};let f=e.querySelector("[data-goal-screen-clip]");if(!f){f=document.createElement("div"),f.setAttribute("data-goal-screen-clip",""),f.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;border-radius:inherit;z-index:1;background:#000;";const w=Array.from(e.childNodes);e.appendChild(f),w.forEach(y=>f.appendChild(y))}let m=e.querySelector("#home-goal-frame-bezel");m||(m=document.createElement("img"),m.id="home-goal-frame-bezel",m.alt="",m.setAttribute("aria-hidden","true"),m.decoding="async",e.appendChild(m));const v=()=>{const w=`${r}assets/textures/tunnels/tablet_bezel.png`;m.getAttribute("src")!==w&&(m.src=w)};v();let g="",_=null,p=(P=e.parentElement)==null?void 0:P.querySelector("[data-goal-flow-spacer]");!p&&e.parentElement&&(p=document.createElement("div"),p.setAttribute("data-goal-flow-spacer",""),p.setAttribute("aria-hidden","true"),p.style.width="100%",p.style.pointerEvents="none",p.style.height="0px",e.parentElement.insertBefore(p,e));const b=()=>{const w=s||a;if(!w)return null;const y=w.getBoundingClientRect();return y.width<8||y.height<8?null:{left:y.left,top:y.top,width:y.width,height:y.height}},S=()=>{const w=window.visualViewport;return Uc&&w?{vw:Math.round(w.width)||window.innerWidth,vh:Math.round(w.height)||window.innerHeight,top:Math.round(w.offsetTop||0),left:Math.round(w.offsetLeft||0)}:{vw:window.innerWidth,vh:window.innerHeight,top:0,left:0}},M=(w,y=0,R=0)=>{if(!w)return;e.classList.add("is-windowed"),e.classList.remove("is-pinned"),p&&(p.style.height="0px");const{vw:N,vh:O,top:V,left:H}=S();e.style.position="fixed",e.style.left=`${H}px`,e.style.top=`${V}px`,e.style.width=`${N}px`,e.style.height=`${O}px`,e.style.right="auto",e.style.bottom="auto",e.style.borderRadius="0",e.style.overflow="hidden",e.style.zIndex="3",e.style.transform="none",e.style.background="transparent",e.style.boxShadow="none";const G=tn(R,0,1),Y=w.left-H+w.width*d.left*(1-G),z=w.top-V+w.height*d.top*(1-G),se=w.width*d.width+(N-w.width*d.width)*G,X=w.height*d.height+(O-w.height*d.height)*G;f&&(f.style.inset="unset",f.style.left=`${Y}px`,f.style.top=`${z}px`,f.style.right="auto",f.style.bottom="auto",f.style.width=`${Math.max(1,se)}px`,f.style.height=`${Math.max(1,X)}px`,f.style.borderRadius=G>.85?"0px":`${Math.min(w.width,w.height)*.03*(1-G)}px`,f.style.background="#000",f.style.transform=y?`rotate(${y}rad)`:"none",f.style.transformOrigin="center center"),m&&(m.style.position="absolute",m.style.inset="unset",m.style.left=`${w.left-H}px`,m.style.top=`${w.top-V}px`,m.style.width=`${w.width}px`,m.style.height=`${w.height}px`,m.style.objectFit="fill",m.style.zIndex="6",m.style.pointerEvents="none",m.style.transform=y?`rotate(${y}rad)`:"none",m.style.transformOrigin="center center",m.style.boxShadow="0 18px 60px rgba(0,0,0,0.28)")},L=()=>{var w;e.classList.remove("is-windowed"),e.style.position="",e.style.borderRadius="",e.style.transform="",e.style.width="",e.style.height="",e.style.left="",e.style.top="",e.style.right="",e.style.bottom="",e.style.zIndex="",e.style.background="",e.style.boxShadow="",e.style.overflow="",e.style.opacity="",e.style.pointerEvents="",p&&(p.style.height="0px"),f&&(f.style.left="0",f.style.top="0",f.style.right="0",f.style.bottom="0",f.style.width="100%",f.style.height="100%",f.style.inset="0",f.style.borderRadius="0",f.style.background="",f.style.transform=""),m&&(m.style.opacity="0",m.style.visibility="hidden",m.style.transform="",m.style.boxShadow=""),(w=n==null?void 0:n.setGoalFrame)==null||w.call(n,{active:!1})},C=()=>{const w=t.range("blackFrameShow").ratio,y=t.range("blackFrameIn").ratio,R=t.range("blackTunnel").ratio,N=t.between("whiteTunnel","whiteFrameOut").ratio,O=i.getBoundingClientRect(),{vw:V,vh:H,top:G,left:Y}=S(),z=O.bottom>0&&O.top<H;_=b();const se=z&&R<.02&&N<.01&&y<.999;if(se&&_){let X=tn(y,0,1);if(_.top<H*.4){const te=tn((H*.4-_.top)/(H*.65),0,1);X=Math.max(X,pe(te,0,1,0,1))}const _e={left:Y,top:G,width:V,height:H},we={left:_.left+(_e.left-_.left)*X,top:_.top+(_e.top-_.top)*X,width:_.width+(_e.width-_.width)*X,height:_.height+(_e.height-_.height)*X},Re=pe(X,0,1,0,.35)*(1-X);M(we,Re,X);const J=Math.max(pe(w,0,.2,.35,1),O.top<H*.85?1:0);if(e.style.opacity=String(J),e.style.pointerEvents="none",document.documentElement.classList.add("is-goal-window"),document.documentElement.style.background="",document.body.style.background="",m&&(m.style.opacity=String(pe(X,0,.75,1,0)*J),m.style.visibility=X>.92?"hidden":"visible"),o&&(o.style.visibility=X>.98?"hidden":"visible"),u&&(u.style.visibility=X>.55?"":"hidden"),l&&!Uc){const te=pe(X,0,1,0,H*.12);l.style.transform=`translate3d(0, ${-te}px, 0)`}if(c&&!Uc&&_){const te=i.querySelector("#home-goal-context"),ce=(te==null?void 0:te.getBoundingClientRect().top)??0,ae=te&&parseFloat(getComputedStyle(te).paddingTop)||0,be=_.top-ce-ae+_.height*.5;c.style.top=`${be}px`,c.style.transform="translateY(-50%)"}return n!=null&&n.setGoalFrame&&n.setGoalFrame({active:X>.01,scale:pe(X,0,1,1,2.4),rotation:Re}),g!=="window"&&(g="window",window.dispatchEvent(new Event("resize"))),{mode:"window",blackFrameIn:X,blackFrameShow:w,frameRect:_}}if(g==="window"){L(),document.documentElement.classList.remove("is-goal-window"),e.style.opacity="",e.style.pointerEvents="",o&&(o.style.visibility="hidden"),l&&(l.style.transform=""),u&&(u.style.visibility=""),e.classList.add("is-pinned"),e.style.position="fixed",e.style.left=`${Y}px`,e.style.top=`${G}px`,e.style.width=`${V}px`,e.style.height=`${H}px`,e.style.right="auto",e.style.bottom="auto",e.style.zIndex="4",e.style.background="#000000",p&&(p.style.height="0px");let X=e.previousElementSibling;for(;X;){if(X!==p&&X.getAttribute("aria-hidden")==="true"){X.style.height=`${H}px`;break}X=X.previousElementSibling}e.parentElement!==document.body&&document.body.appendChild(e),g="full",window.dispatchEvent(new Event("resize"))}else!se&&o&&R>.05&&(o.style.visibility="hidden",m&&(m.style.opacity="0",m.style.visibility="hidden"));return(!z||O.top>H*.9)&&m&&(m.style.opacity="0",m.style.visibility="hidden"),{mode:g||"full",blackFrameIn:y,blackFrameShow:w,frameRect:_}},E=()=>{v(),C()};return window.addEventListener("resize",E),window.addEventListener("scroll",C,{passive:!0}),C(),{update:C,destroy(){window.removeEventListener("resize",E),window.removeEventListener("scroll",C),m==null||m.remove(),L()},getFrameRect:()=>_}}const bd="/zyrax-studio/assets/audios/",ew={generic:"generic.ogg",cinematic_0:"cinematic_0.ogg",cinematic_2:"cinematic_2.ogg",cinematic_3:"cinematic_3.ogg",generic_end:"generic_end.ogg"},tw={hover:["hover_0.ogg","hover_1.ogg","hover_2.ogg"],click:["click_0.ogg","click_1.ogg"],focus:["focus_0.ogg","focus_1.ogg","focus_2.ogg"],page:["page_0.ogg","page_1.ogg"],glass:["glass_broken.ogg"]};function Td(i,{loop:e=!1,volume:t=1}={}){const n=new Audio(i);return n.preload="auto",n.loop=e,n.volume=t,n.crossOrigin="anonymous",n}function nw(){const i={};for(const[p,b]of Object.entries(ew))i[p]=Td(`${bd}${b}`,{loop:!0,volume:0});const e={};for(const[p,b]of Object.entries(tw))e[p]=b.map(S=>Td(`${bd}${S}`,{loop:!1,volume:.85}));let t=!1,n=null,r=null,o=null,s=1,a=1.2;const l={hover:0,click:0,focus:0,page:0,glass:0};let c=0;const u=async()=>{if(!t){t=!0;try{const p=i.generic;p.volume=0,await p.play(),p.pause(),p.currentTime=0,n||f("generic",.01)}catch{t=!1}}},d=p=>{if(!t)return;const b=e[p];if(!(b!=null&&b.length))return;const S=l[p]%b.length;l[p]=S+1;const M=b[S].cloneNode();M.volume=p==="focus"?.4:p==="glass"?1:.85,M.play().catch(()=>{})},f=(p,b=1.2)=>{if(!i[p]||n===p)return;r=n,o=p,s=0,a=Math.max(.05,b),n=p;const S=i[p];S.volume>.01&&!S.paused||(S.volume=0),t&&S.play().catch(()=>{})},m=p=>{if(t)if(o&&s<1){s=Math.min(1,s+p/a);const b=s*s*(3-2*s);if(r&&i[r]&&(i[r].volume=Math.max(0,1-b),b>=1)){i[r].pause();try{i[r].currentTime=0}catch{}}i[o]&&(i[o].volume=b,i[o].paused&&i[o].play().catch(()=>{})),b>=1&&(r=null,o=null)}else n&&i[n]&&(i[n].volume<1&&(i[n].volume=1),i[n].paused&&i[n].play().catch(()=>{}))},v=()=>{},g=({blackFrameInRatio:p=0,blackTunnelRatio:b=0,whiteTunnelRatio:S=0,astronautDropRatio:M=0}={})=>{const L=M,C=p,E=b,P=S;C>.5&&E===0?(c=0,f("cinematic_2",.5)):E>0&&P===0?(f("cinematic_3",.5),c=0):P>0&&L===0||P>0&&L<=.8?f("cinematic_2",.5):P>0&&L>.8?f("generic_end",1):(c=0,f("generic",1)),L===0?c=1:c===1&&(d("glass"),c=2)};document.querySelectorAll("#header-right-talk-btn, #header-right-menu-btn, .header-menu-link").forEach(p=>{p.addEventListener("mouseenter",()=>d("hover")),p.addEventListener("click",()=>d("click"))});const _=()=>{u()};return window.addEventListener("pointerdown",_,{passive:!0}),window.addEventListener("touchstart",_,{passive:!0}),window.addEventListener("wheel",_,{passive:!0,once:!0}),window.addEventListener("keydown",_,{passive:!0,once:!0}),u(),{update:m,syncGoalPhase:v,syncTunnelAudio:g,playSfx:d,setEnabled(){},get enabled(){return!0},destroy(){Object.values(i).forEach(p=>{p.pause(),p.src=""})}}}const hr=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let Fc=0;const Mh=({notifyResize:i=!1}={})=>{var n;const e=((n=window.visualViewport)==null?void 0:n.height)||window.innerHeight,t=e*.01;document.documentElement.style.setProperty("--vh",`${t}px`),i&&hr&&Math.abs(e-Fc)>1?(Fc=e,window.dispatchEvent(new Event("resize"))):Fc=e};Mh();window.addEventListener("resize",()=>Mh());let Nc=0,vm=()=>{};const xm=()=>{Nc||(Nc=window.setTimeout(()=>{Nc=0,Mh({notifyResize:!0}),vm()},hr?48:0))};var Pd;(Pd=window.visualViewport)==null||Pd.addEventListener("resize",xm);var Ld;(Ld=window.visualViewport)==null||Ld.addEventListener("scroll",xm);const Vi=new km({duration:hr?.7:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!hr,syncTouch:!1,syncTouchLerp:0,touchInertiaMultiplier:0,wheelMultiplier:hr?.9:.82,touchMultiplier:hr?1:1.1});window.lenis=Vi;let Os=0,zs=0,Ks=!1,ym=0;window.addEventListener("wheel",()=>{ym=performance.now(),Ks=!0},{passive:!0});window.addEventListener("pointerdown",()=>{Ks=!0},{passive:!0});const iw="/zyrax-studio/assets/projects/",Ed=document.getElementById("project-list");Ed&&(Ed.innerHTML=Ip.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${iw}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const rw=document.getElementById("hero-canvas"),ow=document.getElementById("home-hero-visual-container"),Lr=document.getElementById("home-hero"),Oc=document.getElementById("home-hero-title"),zc=document.getElementById("home-hero-visual-container"),Ad=document.getElementById("home-hero-scroll-container"),dr=document.getElementById("home-goal"),sw=document.getElementById("goal-tunnel-canvas"),aw=document.getElementById("home-goal-tunnel-title"),Sm=document.getElementById("home-goal-tunnel-sticky"),Mm=UM(dr,aw,Sm),lw=dr?Sh(dr):null,Bc=nw();let Mt=null,Rd="";const cw=NM(),uw=BM(),hw=qM();let kn=null,cl=null;const wm=dr?QM(dr,Sm,lw,{setGoalFrame:(...i)=>{var e;return(e=kn==null?void 0:kn.setGoalFrame)==null?void 0:e.call(kn,...i)}}):{update(){}};vm=()=>{var i;wm.update(),Mm.updateScroll(),(i=Mt==null?void 0:Mt.updateScroll)==null||i.call(Mt)};let Cd=performance.now();lh.ticker.add(i=>{var r,o,s,a,l,c,u;const e=performance.now(),t=Math.min(.05,(e-Cd)/1e3);if(Cd=e,!hr&&(Mt!=null&&Mt.getAutoScrollSpeed&&(Os=Mt.getAutoScrollSpeed()),e-ym>80&&Math.abs(Os)>.01&&(Ks=!1),zs+=Math.abs(Os)>0&&!Ks?t:-1,zs=Math.max(0,Math.min(1,zs)),!Ks&&zs>0&&Math.abs(Os)>.01)){const f=window.innerHeight,m=Os*f*t*zs*.55,v=(Vi.animatedScroll??Vi.scroll??window.scrollY)+m;Vi.scrollTo(v,{immediate:!0,force:!0})}Vi.raf(i*1e3),cw.update(t),uw.update(t),cl==null||cl.update(t),hw.update(t),kn==null||kn.update(),(r=Mt==null?void 0:Mt.tickFrame)==null||r.call(Mt,t),Bc.update(t);const n=((o=dr==null?void 0:dr.dataset)==null?void 0:o.goalPhase)||"";n&&n!==Rd&&(Rd=n,Bc.syncGoalPhase(),(s=kn==null?void 0:kn.setPaused)==null||s.call(kn,hr&&(n==="black-tunnel"||n==="white"))),Mt!=null&&Mt.getAstronautDropRatio&&Bc.syncTunnelAudio({blackFrameInRatio:((a=Mt.getBlackFrameInRatio)==null?void 0:a.call(Mt))??0,blackTunnelRatio:((l=Mt.getBlackTunnelRatio)==null?void 0:l.call(Mt))??0,whiteTunnelRatio:((c=Mt.getWhiteTunnelRatio)==null?void 0:c.call(Mt))??0,astronautDropRatio:((u=Mt.getAstronautDropRatio)==null?void 0:u.call(Mt))??0})});lh.ticker.lagSmoothing(0);Vi.on("scroll",()=>{if(wm.update(),Mm.updateScroll(),Mt==null||Mt.updateScroll(),!Lr)return;const i=Lr.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));Oc&&(Oc.style.transform=`translate3d(0, ${t*-12}vh, 0)`,Oc.style.opacity=String(Math.max(0,1-t*1.2))),zc&&(zc.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,zc.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),Ad&&(Ad.style.opacity=String(Math.max(0,1-t*2)))});JM().then(i=>{kn=i}).catch(i=>console.error("Scroll lines failed",i));IM(sw,dr).then(i=>{Mt=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{eM(rw,ow).then(()=>Lr==null?void 0:Lr.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),Lr==null||Lr.classList.add("is-in")})});hr||GM(Ip).then(i=>{cl=i}).catch(i=>console.error("Featured WebGL failed",i));function bm(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,o)=>{const s=document.createElement("span");s.className=e,s.textContent=r,s.style.transitionDelay=`${o*35}ms`,i.appendChild(s),i.appendChild(document.createTextNode(" "))})}bm(document.getElementById("home-hero-title"));bm(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const fw=document.querySelectorAll(".home-hero-scroll-container-cross");fw.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const kc=document.getElementById("header"),Hc=document.getElementById("header-container"),Ir=document.getElementById("header-background"),Vc=document.getElementById("header-menu"),ss=document.getElementById("header-right-menu-btn");let ar=!1;const da=i=>{ar=!!i,kc==null||kc.classList.toggle("--menu-opened",ar),Hc==null||Hc.classList.toggle("--opened",ar),Ir==null||Ir.classList.toggle("--opened",ar),Vc==null||Vc.classList.toggle("--opened",ar),ss==null||ss.classList.toggle("--opened",ar),Ir&&(Ir.style.opacity=ar?window.innerWidth>=1e3?"0.2":"1":"0")};ss==null||ss.addEventListener("click",i=>{i.stopPropagation(),da(!ar)});Ir==null||Ir.addEventListener("click",()=>da(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");da(!1),t==="contact"?(e.preventDefault(),Vi.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),Vi.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!ar)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||da(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&da(!1)});var Dd;(Dd=document.querySelector("[data-reel]"))==null||Dd.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var Id;(Id=document.querySelector("#end-bottom"))==null||Id.addEventListener("click",i=>{i.preventDefault(),Vi.scrollTo("#footer-section")});var Ud;(Ud=document.querySelector("#footer-bottom-up"))==null||Ud.addEventListener("click",i=>{i.preventDefault(),Vi.scrollTo(0)});
