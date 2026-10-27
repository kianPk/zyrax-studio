var xp=Object.defineProperty;var Sp=(i,e,t)=>e in i?xp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ve=(i,e,t)=>Sp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Fu="1.3.27";function bf(i,e,t){return Math.max(i,Math.min(e,t))}function yp(i,e,t){return(1-t)*i+t*e}function Mp(i,e,t,n){return yp(i,e,1-Math.exp(-t*n))}function wp(i,e){return(i%e+e)%e}var Ep=class{constructor(){Ve(this,"isRunning",!1);Ve(this,"value",0);Ve(this,"from",0);Ve(this,"to",0);Ve(this,"currentTime",0);Ve(this,"lerp");Ve(this,"duration");Ve(this,"easing");Ve(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=bf(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Mp(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function bp(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Tp=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Ve(this,"width",0);Ve(this,"height",0);Ve(this,"scrollHeight",0);Ve(this,"scrollWidth",0);Ve(this,"debouncedResize");Ve(this,"wrapperResizeObserver");Ve(this,"contentResizeObserver");Ve(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ve(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ve(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=bp(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Tf=class{constructor(){Ve(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,s=t.length;r<s;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Ap=100/6,ir={passive:!1};function Ou(i,e){return i===1?Ap:i===2?e:1}var Rp=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Ve(this,"touchStart",{x:0,y:0});Ve(this,"lastDelta",{x:0,y:0});Ve(this,"window",{width:0,height:0});Ve(this,"emitter",new Tf);Ve(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ve(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ve(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ve(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=Ou(n,this.window.width),s=Ou(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Ve(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ir),this.element.addEventListener("touchstart",this.onTouchStart,ir),this.element.addEventListener("touchmove",this.onTouchMove,ir),this.element.addEventListener("touchend",this.onTouchEnd,ir)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ir),this.element.removeEventListener("touchstart",this.onTouchStart,ir),this.element.removeEventListener("touchmove",this.onTouchMove,ir),this.element.removeEventListener("touchend",this.onTouchEnd,ir)}};const zu=i=>Math.min(1,1.001-2**(-10*i));var Cp=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:_=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:E=!0,autoRaf:y=!1,anchors:S=!1,autoToggle:L=!1,allowNestedScroll:U=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:C=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:M=!0}={}){Ve(this,"_isScrolling",!1);Ve(this,"_isStopped",!1);Ve(this,"_isLocked",!1);Ve(this,"_preventNextNativeScrollEvent",!1);Ve(this,"_resetVelocityTimeout",null);Ve(this,"_rafId",null);Ve(this,"_isDraggingSelection",!1);Ve(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ve(this,"isTouching");Ve(this,"isIos");Ve(this,"time",0);Ve(this,"userData",{});Ve(this,"lastVelocity",0);Ve(this,"velocity",0);Ve(this,"direction",0);Ve(this,"options");Ve(this,"targetScroll");Ve(this,"animatedScroll");Ve(this,"animate",new Ep);Ve(this,"emitter",new Tf);Ve(this,"dimensions");Ve(this,"virtualScroll");Ve(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ve(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ve(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ve(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ve(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ve(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,m,p,E,y;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((m=v.hasAttribute)==null?void 0:m.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((E=v.hasAttribute)==null?void 0:E.call(v,"data-lenis-prevent-touch"))||s&&((y=v.hasAttribute)==null?void 0:y.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ve(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ve(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Fu,window.lenis||(window.lenis={}),window.lenis.version=Fu,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=zu:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:_,wheelMultiplier:v,autoResize:g,prevent:m,virtualScroll:p,overscroll:E,autoRaf:y,anchors:S,autoToggle:L,allowNestedScroll:U,naiveDimensions:C,stopInertiaOnNavigate:w,respectReducedMotion:M},this.dimensions=new Tp(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Rp(t,{touchMultiplier:_,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=i,_=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let v=null;if(typeof d=="string"?(v=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),v||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(v=d),v){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();_-=this.isHorizontal?S.left:S.top}const g=v.getBoundingClientRect(),m=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),E=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(E.scrollPaddingLeft):Number.parseFloat(E.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(y)?0:y)}}if(typeof d=="number"){if(d+=_,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=d-this.animatedScroll;v>this.limit/2?d-=this.limit:v<-this.limit/2&&(d+=this.limit)}}else d=bf(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=zu:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,o,a,l,c,u,f,d,_,v;if(n-(r.time??0)>2e3){r.time=Date.now();const U=window.getComputedStyle(i);if(r.computedStyle=U,s=["auto","overlay","scroll"].includes(U.overflowX),o=["auto","overlay","scroll"].includes(U.overflowY),c=["auto"].includes(U.overscrollBehaviorX),u=["auto"].includes(U.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=i.scrollWidth,d=i.scrollHeight,_=i.clientWidth,v=i.clientHeight,a=f>_,l=d>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=d,r.clientWidth=_,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,d=r.scrollHeight,_=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,E,y,S,L;if(g==="horizontal")m=Math.round(i.scrollLeft),p=f-_,E=e,y=s,S=a,L=c;else if(g==="vertical")m=Math.round(i.scrollTop),p=d-v,E=t,y=o,S=l,L=u;else return!1;return!L&&(m>=p||m<=0)?!0:(E>0?m<p:m>0)&&y&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?wp(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function Xi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Af(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Co={duration:.5,overwrite:!1,delay:0},qc,sn,Ft,oi=1e8,At=1/oi,Zl=Math.PI*2,Pp=Zl/4,Lp=0,Rf=Math.sqrt,Dp=Math.cos,Ip=Math.sin,Jt=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},Yc=function(e){return typeof e>"u"},Ii=function(e){return typeof e=="object"},In=function(e){return e!==!1},Zc=function(){return typeof window<"u"},Yo=function(e){return Vt(e)||Jt(e)},Cf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,Up=/random\([^)]+\)/g,Np=/,\s*/g,Bu=/(?:-?\.?\d|\.)+/gi,Pf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,il=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lf=/[+-]=-?[.\d]+/,Fp=/[^,'"\[\]\s]+/gi,Op=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,Ti,$l,$c,jn={},Ia={},Df,If=function(e){return(Ia=Bs(e,jn))&&zn},Kc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Po=function(e,t){return!t&&console.warn(e)},Uf=function(e,t){return e&&(jn[e]=t)&&Ia&&(Ia[e]=t)||jn},Lo=function(){return 0},zp={suppressEvents:!0,isStart:!0,kill:!1},wa={suppressEvents:!0,kill:!1},Bp={suppressEvents:!0},jc={},gr=[],Kl={},Nf,Gn={},rl={},ku=30,Ea=[],Jc="",Qc=function(e){var t=e[0],n,r;if(Ii(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ea.length;r--&&!Ea[r].targetTest(t););n=Ea[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new id(e[r],n)))||e.splice(r,1);return e},Jr=function(e){return e._gsap||Qc(ai(e))[0]._gsap},Ff=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():Yc(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},kp=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ua=function(){var e=gr.length,t=gr.slice(0),n,r;for(Kl={},gr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},eu=function(e){return!!(e._initted||e._startAt||e.add)},Of=function(e,t,n,r){gr.length&&!sn&&Ua(),e.render(t,n,!!(sn&&t<0&&eu(e))),gr.length&&!sn&&Ua()},zf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Fp).length<2?t:Jt(e)?e.trim():e},Bf=function(e){return e},Jn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hp=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Bs=function(e,t){for(var n in t)e[n]=t[n];return e},Hu=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ii(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Na=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},So=function(e){var t=e.parent||zt,n=e.keyframes?Hp(gn(e.keyframes)):Jn;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Vp=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},kf=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Wa=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Gp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jl=function(e,t,n,r){return e._startAt&&(sn?e._startAt.revert(wa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Wp=function i(e){return!e||e._ts&&i(e.parent)},Vu=function(e){return e._repeat?ks(e._tTime,e=e.duration()+e._rDelay)*e:0},ks=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n},Fa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xa=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},qa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xa(e),n._dirty||Qr(n,e)),e},Hf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fa(e.rawTime(),t),(!t._dur||ko(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),Qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Ri=function(e,t,n,r){return t.parent&&Sr(t),t._start=Ot((ji(n)?n:n||e!==zt?ii(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),kf(e,t,"_first","_last",e._sort?"_start":0),Jl(t)||(e._recent=t),r||Hf(e,t),e._ts<0&&qa(e,e._tTime),e},Vf=function(e,t){return(jn.ScrollTrigger||Kc("scrollTrigger",t))&&jn.ScrollTrigger.create(t,e)},Gf=function(e,t,n,r,s){if(nu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nf!==Wn.frame)return gr.push(e),e._lazy=[s,r],1},Xp=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Jl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qp=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Xp(e)&&!(!e._initted&&Jl(e))||(e._ts<0||e._dp._ts<0)&&!Jl(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=ko(0,e._tDur,t),u=ks(l,a),e._yoyo&&u&1&&(o=1-o),u!==ks(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||sn||r||e._zTime===At||!t&&e._zTime){if(!e._initted&&Gf(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&jl(e,t,n,!0),e._onUpdate&&!n&&qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Sr(e,1),!n&&!sn&&(qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Yp=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Hs=function(e,t,n,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&qa(e,e._tTime=e._tDur*a),e.parent&&Xa(e),n||Qr(e.parent,e),e},Gu=function(e){return e instanceof Ln?Qr(e):Hs(e,e._dur)},Zp={_start:0,endTime:Lo,totalDuration:Lo},ii=function i(e,t,n){var r=e.labels,s=e._recent||Zp,o=e.duration()>=oi?s.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},yo=function(e,t,n){var r=ji(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;o.immediateRender=In(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Yt(t[0],o,t[s+1])},Er=function(e,t){return e||e===0?t(e):t},ko=function(e,t,n){return n<e?e:n>t?t:n},pn=function(e,t){return!Jt(e)||!(t=Op.exec(e))?"":t[1]},$p=function(e,t,n){return Er(n,function(r){return ko(e,t,r)})},Ql=[].slice,Wf=function(e,t){return e&&Ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ii(e[0]))&&!e.nodeType&&e!==Ti},Kp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Jt(r)&&!t||Wf(r,1)?(s=n).push.apply(s,ai(r)):n.push(r)})||n},ai=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):Jt(e)&&!n&&($l||!Vs())?Ql.call((t||$c).querySelectorAll(e),0):gn(e)?Kp(e,n):Wf(e)?Ql.call(e,0):e?[e]:[]},ec=function(e){return e=ai(e)[0]||Po("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ai(t,n.querySelectorAll?n:n===e?Po("Invalid scope")||$c.createElement("div"):e)}},Xf=function(e){return e.sort(function(){return .5-Math.random()})},qf=function(e){if(Vt(e))return e;var t=Ii(e)?e:{each:e},n=es(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Jt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,_,v){var g=(v||t).length,m=o[g],p,E,y,S,L,U,A,C,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,oi])[1],!w){for(A=-oi;A<(A=v[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(m=o[g]=[],p=l?Math.min(w,g)*u-.5:r%w,E=w===oi?0:l?g*f/w-.5:r/w|0,A=0,C=oi,U=0;U<g;U++)y=U%w-p,S=E-(U/w|0),m[U]=L=c?Math.abs(c==="y"?S:y):Rf(y*y+S*S),L>A&&(A=L),L<C&&(C=L);r==="random"&&Xf(m),m.max=A-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=pn(t.amount||t.each)||0,n=n&&g<0?cm(n):n}return g=(m[d]-m.min)/m.max||0,Ot(m.b+(n?n(g):g)*m.v)+m.u}},tc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Ot(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ji(n)?0:pn(n))}},Yf=function(e,t){var n=gn(e),r,s;return!n&&Ii(e)&&(r=n=e.radius||oi,e.values?(e=ai(e.values),(s=!ji(e[0]))&&(r*=r)):e=tc(e.increment)),Er(t,n?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=oi,u=0,f=e.length,d,_;f--;)s?(d=e[f].x-a,_=e[f].y-l,d=d*d+_*_):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||ji(o)?u:u+pn(o)}:tc(e))},Zf=function(e,t,n,r){return Er(gn(e)?!t:n===!0?!!(n=0):!r,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},jp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Jp=function(e,t){return function(n){return e(parseFloat(n))+(t||pn(n))}},Qp=function(e,t,n){return Kf(e,t,0,1,n)},$f=function(e,t,n){return Er(n,function(r){return e[~~t(r)]})},em=function i(e,t,n){var r=t-e;return gn(e)?$f(e,i(0,e.length),t):Er(n,function(s){return(r+(s-e)%r)%r+e})},tm=function i(e,t,n){var r=t-e,s=r*2;return gn(e)?$f(e,i(0,e.length-1),t):Er(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Do=function(e){return e.replace(Up,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Np);return Zf(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Kf=function(e,t,n,r,s){var o=t-e,a=r-n;return Er(s,function(l){return n+((l-e)/o*a||0)})},nm=function i(e,t,n,r){var s=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!s){var o=Jt(e),a={},l,c,u,f,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(v){v*=f;var g=Math.min(d,~~v);return u[g](v-g)},n=t}else r||(e=Bs(gn(e)?[]:{},e));if(!u){for(l in t)tu.call(a,e,l,"get",t[l]);s=function(v){return su(v,a)||(o?e.p:e)}}}return Er(n,s)},Wu=function(e,t,n){var r=e.labels,s=oi,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(e,t,n){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&gr.length&&Ua(),a&&(Ft=a),u=l?s.apply(c,l):s.call(c),Ft=o,u},_o=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&qn(e,"onInterrupt"),e},Rs,jf=[],Jf=function(e){if(e)if(e=!e.name&&e.default||e,Zc()||e.headless){var t=e.name,n=Vt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Lo,render:su,add:tu,kill:xm,modifier:vm,rawVars:0},o={targetTest:0,get:0,getSetter:ru,aliases:{},register:0};if(Vs(),e!==r){if(Gn[t])return;Jn(r,Jn(Na(e,s),o)),Bs(r.prototype,Bs(s,Na(e,o))),Gn[r.prop=t]=r,e.targetTest&&(Ea.push(r),jc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Uf(t,r),e.register&&e.register(zn,r,Nn)}else jf.push(e)},Tt=255,go={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},sl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},Qf=function(e,t,n){var r=e?ji(e)?[e>>16,e>>8&Tt,e&Tt]:0:go.black,s,o,a,l,c,u,f,d,_,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),go[e])r=go[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Bu),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=sl(l+1/3,s,o),r[1]=sl(l,s,o),r[2]=sl(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Pf),n&&r.length<4&&(r[3]=1),r}else r=e.match(Bu)||go.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/Tt,o=r[1]/Tt,a=r[2]/Tt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(_=f-d,c=u>.5?_/(2-f-d):_/(f+d),l=f===s?(o-a)/_+(o<a?6:0):f===o?(a-s)/_+2:(s-o)/_+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},ed=function(e){var t=[],n=[],r=-1;return e.split(vr).forEach(function(s){var o=s.match(As)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Xu=function(e,t,n){var r="",s=(e+r).match(vr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Qf(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=ed(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(vr,"1").split(As),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(vr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},vr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in go)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),im=/hsl[a]?\(/,td=function(e){var t=e.join(" "),n;if(vr.lastIndex=0,vr.test(t))return n=im.test(t),e[1]=Xu(e[1],n),e[0]=Xu(e[0],n,ed(e[1])),!0},Io,Wn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,d,_,v=function g(m){var p=i()-r,E=m===!0,y,S,L,U;if((p>e||p<0)&&(n+=p-t),r+=p,L=r-n,y=L-o,(y>0||E)&&(U=++f.frame,d=L-f.time*1e3,f.time=L=L/1e3,o+=y+(y>=s?4:s-y),S=1),E||(l=c(g)),S)for(_=0;_<a.length;_++)a[_](L,d,U,m)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Df&&(!$l&&Zc()&&(Ti=$l=window,$c=Ti.document||{},jn.gsap=zn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(zn.version),If(Ia||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),jf.forEach(Jf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Io=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Io=0,c=Lo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,E){var y=p?function(S,L,U,A){m(S,L,U,A),f.remove(y)}:m;return f.remove(m),a[E?"unshift":"push"](y),Vs(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&_>=p&&_--},_listeners:a},f})(),Vs=function(){return!Io&&Wn.wake()},gt={},rm=/^[\d.\-M][\d.\-,\s]/,sm=/["']/g,om=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(sm,"").trim():+c,r=l.substr(a+1).trim();return t},am=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},lm=function(e){var t=(e+"").split("("),n=gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[om(t[1])]:am(e).split(",").map(zf)):gt._CE&&rm.test(e)?gt._CE("",e):n},cm=function(e){return function(t){return 1-e(1-t)}},es=function(e,t){return e&&(Vt(e)?e:gt[e]||lm(e))||t},ss=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Un(e,function(a){gt[a]=jn[a]=s,gt[o=a.toLowerCase()]=n;for(var l in s)gt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[a+"."+l]=s[l]}),s},nd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ol=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Zl*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Ip((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:nd(a);return s=Zl/s,l.config=function(c,u){return i(e,c,u)},l},al=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:nd(n);return r.config=function(s){return i(e,s)},r};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;ss(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;ss("Elastic",ol("in"),ol("out"),ol());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};ss("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ss("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ss("Circ",function(i){return-(Rf(1-i*i)-1)});ss("Sine",function(i){return i===1?1:-Dp(i*Pp)+1});ss("Back",al("in"),al("out"),al());gt.SteppedEase=gt.steps=jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((r*ko(0,o,a)|0)+s)*n}}};Co.ease=gt["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Jc+=i+","+i+"Params,"});var id=function(e,t){this.id=Lp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ff,this.set=t?t.getSetter:ru},Uo=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hs(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),Io||Wn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(qa(this,n),!s._dp||s.parent||Hf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Of(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Vu(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Vu(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ks(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Fa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(ko(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Xa(this),Gp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ri(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fa(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Bp);var r=sn;return sn=n,eu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Gu(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ii(this,n),In(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,In(r)),this._dur||(this._zTime=-At),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-At)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Vt(n)?n:Bf,l=function(){var u=r.then;r.then=null,s&&s(),Vt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){_o(this)},i})();Jn(Uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Ln=(function(i){Af(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),zt&&Ri(n.parent||zt,Xi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Vf(Xi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return yo(0,arguments,this),this},t.from=function(r,s,o){return yo(1,arguments,this),this},t.fromTo=function(r,s,o,a){return yo(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,So(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(r,s,ii(this,o),1),this},t.call=function(r,s,o){return Ri(this,Yt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Yt(r,o,ii(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,So(o).immediateRender=In(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,So(a).immediateRender=In(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ot(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,_,v,g,m,p,E,y,S,L,U,A;if(this!==zt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,S=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(U=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Ot(u%m),u===l?(g=this._repeat,d=c):(L=Ot(u/m),g=~~L,g&&g===L&&(d=c,g--),d>c&&(d=c)),L=ks(this._tTime,m),!a&&this._tTime&&L!==g&&this._tTime-L*m-this._dur<=0&&(L=g),U&&g&1&&(d=c-d,A=1),g!==L&&!this._lock){var C=U&&L&1,w=C===(U&&g&1);if(g<L&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ot(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,L=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Yp(this,Ot(a),Ot(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!L&&(qn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(_=this._first;_;){if(v=_._next,(_._act||d>=_._start)&&_._ts&&E!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(d-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(d-_._start)*_._ts,s,o),d!==this._time||!this._ts&&!p){E=0,v&&(u+=this._zTime=-At);break}}_=v}else{_=this._last;for(var M=r<0?r:d;_;){if(v=_._prev,(_._act||M<=_._end)&&_._ts&&E!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(M-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(M-_._start)*_._ts,s,o||sn&&eu(_)),d!==this._time||!this._ts&&!p){E=0,v&&(u+=this._zTime=M?-At:At);break}}_=v}}if(E&&!s&&(this.pause(),E.render(d>=a?0:-At)._zTime=d>=a?1:-1,this._ts))return this._start=S,Xa(this),this.render(r,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(qn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ji(s)||(s=ii(this,s,r)),!(r instanceof Uo)){if(gn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Jt(r))return this.addLabel(r,s);if(Vt(r))r=Yt.delayedCall(0,r);else return this}return this!==r?Ri(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-oi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Yt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Jt(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&Wa(this,r),r===this._recent&&(this._recent=this._last),Qr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(Wn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ii(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Yt.delayedCall(0,s||Lo,o);return a.data="isPause",this._hasPause=1,Ri(this,a,ii(this,r))},t.removePause=function(r){var s=this._first;for(r=ii(this,r);s;)s._start===r&&s.data==="isPause"&&Sr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)pr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ai(r),l=this._first,c=ji(s),u;l;)l instanceof Yt?kp(l._targets,a)&&(c?(!pr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ii(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,_,v=Yt.to(o,Jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!_){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==m&&Hs(v,m,0,1).render(v._time,!0,!0),_=1}u&&u.apply(v,f||[])}},s));return d?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Jn({startAt:{time:ii(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Wu(this,ii(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Wu(this,ii(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Ot(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Qr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Qr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=oi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ri(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ot(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Hs(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(zt._ts&&(Of(zt,Fa(r,zt)),Nf=Wn.frame),Wn.frame>=ku){ku+=$n.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&$n.autoSleep&&Wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Wn.sleep()}}},e})(Uo);Jn(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var um=function(e,t,n,r,s,o,a){var l=new Nn(this._pt,e,t,0,1,cd,null,s),c=0,u=0,f,d,_,v,g,m,p,E;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Do(r)),o&&(E=[n,r],o(E,e,t),n=E[0],r=E[1]),d=n.match(il)||[];f=il.exec(r);)v=f[0],g=r.substring(c,f.index),_?_=(_+1)%5:g.substr(-5)==="rgba("&&(_=1),v!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:v.charAt(1)==="="?Ls(m,v)-m:parseFloat(v)-m,m:_&&_<4?Math.round:0},c=il.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Lf.test(r)||p)&&(l.e=0),this._pt=l,l},tu=function(e,t,n,r,s,o,a,l,c,u){Vt(r)&&(r=r(s||0,e,o));var f=e[t],d=n!=="get"?n:Vt(f)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,_=Vt(f)?c?mm:ad:iu,v;if(Jt(r)&&(~r.indexOf("random(")&&(r=Do(r)),r.charAt(1)==="="&&(v=Ls(d,r)+(pn(d)||0),(v||v===0)&&(r=v))),!u||d!==r||nc)return!isNaN(d*r)&&r!==""?(v=new Nn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?gm:ld,0,_),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&Kc(t,r),um.call(this,e,t,d,r,_,l||$n.stringFilter,c))},hm=function(e,t,n,r,s){if(Vt(e)&&(e=Mo(e,s,t,n,r)),!Ii(e)||e.style&&e.nodeType||gn(e)||Cf(e))return Jt(e)?Mo(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Mo(e[a],s,t,n,r);return o},rd=function(e,t,n,r,s,o){var a,l,c,u;if(Gn[e]&&(a=new Gn[e]).init(s,a.rawVars?t[e]:hm(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Nn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},pr,nc,nu=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,_=r.autoRevert,v=e._dur,g=e._startAt,m=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!qc,S=e.timeline,L=r.easeReverse||f,U,A,C,w,M,D,z,O,W,Y,X,q,V;if(S&&(!d||!s)&&(s="none"),e._ease=es(s,Co.ease),e._rEase=L&&(es(L)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(O=m[0]?Jr(m[0]).harness:0,q=O&&r[O.prop],U=Na(r,jc),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!_?g.render(-1,!0):g.revert(u&&v?wa:zp),g._lazy=0),o){if(Sr(e._startAt=Yt.set(m,Jn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!a&&!_)&&e._startAt.revert(wa),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),C=Jn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&In(l),immediateRender:a,stagger:0,parent:p},U),q&&(C[O.prop]=q),Sr(e._startAt=Yt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(wa):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&In(l)||l&&!v,A=0;A<m.length;A++){if(M=m[A],z=M._gsap||Qc(m)[A]._gsap,e._ptLookup[A]=Y={},Kl[z.id]&&gr.length&&Ua(),X=E===m?A:E.indexOf(M),O&&(W=new O).init(M,q||U,e,X,E)!==!1&&(e._pt=w=new Nn(e._pt,M,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ce){Y[ce]=w}),W.priority&&(D=1)),!O||q)for(C in U)Gn[C]&&(W=rd(C,U,e,X,M,E))?W.priority&&(D=1):Y[C]=w=tu.call(e,M,C,"get",U[C],X,E,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),y&&e._pt&&(pr=e,zt.killTweensOf(M,Y,e.globalTime(t)),V=!e.parent,pr=0),e._pt&&l&&(Kl[z.id]=1)}D&&ud(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,d&&t<=0&&S.render(oi,!0,!0)},fm=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,_;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,_=e._targets.length;_--;){if(u=d[_][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return nc=1,e.vars[t]="+=0",nu(e,a),nc=0,l?Po(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(_=c.length;_--;)f=c[_],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Wt(n)+pn(f.e)),f.b&&(f.b=u.s+pn(f.b))},dm=function(e,t){var n=e[0]?Jr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Bs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pm=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(gn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Mo=function(e,t,n,r,s){return Vt(e)?e.call(t,n,r,s):Jt(e)&&~e.indexOf("random(")?Do(e):e},sd=Jc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",od={};Un(sd+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return od[i]=1});var Yt=(function(i){Af(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:So(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,_=l.overwrite,v=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=r.parent||zt,E=(gn(n)||Cf(n)?ji(n[0]):"length"in r)?[n]:ai(n),y,S,L,U,A,C,w,M;if(a._targets=E.length?Qc(E):Po("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=_,v||d||Yo(c)||Yo(u)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(y=a.timeline=new Ln({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:E}),y.kill(),y.parent=y._dp=Xi(a),y._start=0,d||Yo(c)||Yo(u)){if(U=E.length,w=d&&qf(d),Ii(d))for(A in d)~sd.indexOf(A)&&(M||(M={}),M[A]=d[A]);for(S=0;S<U;S++)L=Na(r,od),L.stagger=0,D&&(L.easeReverse=D),M&&Bs(L,M),C=E[S],L.duration=+Mo(c,Xi(a),S,C,E),L.delay=(+Mo(u,Xi(a),S,C,E)||0)-a._delay,!d&&U===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),y.to(C,L,w?w(S,C,E):0),y._ease=gt.none;y.duration()?c=u=0:a.timeline=0}else if(v){So(Jn(y.vars.defaults,{ease:"none"})),y._ease=es(v.ease||r.ease||"none");var z=0,O,W,Y;if(gn(v))v.forEach(function(X){return y.to(E,X,">")}),y.duration();else{L={};for(A in v)A==="ease"||A==="easeEach"||pm(A,v[A],L,v.easeEach);for(A in L)for(O=L[A].sort(function(X,q){return X.t-q.t}),z=0,S=0;S<O.length;S++)W=O[S],Y={ease:W.e,duration:(W.t-(S?O[S-1].t:0))/100*c},Y[A]=W.v,y.to(E,Y,z),z+=Y.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return _===!0&&!qc&&(pr=Xi(a),zt.killTweensOf(E),pr=0),Ri(p,Xi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!v&&a._start===Ot(p._time)&&In(f)&&Wp(Xi(a))&&p.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-u)||0)),m&&Vf(Xi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-At&&!u?l:r<At?0:r,d,_,v,g,m,p,E,y;if(!c)qp(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(d=Ot(f%g),f===l?(v=this._repeat,d=c):(m=Ot(f/g),v=~~m,v&&v===m?(d=c,v--):d>c&&(d=c)),p=this._yoyo&&v&1,p&&(d=c-d),m=ks(this._tTime,g),d===a&&!o&&this._initted&&v===m)return this._tTime=f,this;v!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Ot(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(Gf(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var L=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(S?-1:1)/L:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(d/c);if(this._from&&(this.ratio=E=1-E),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(qn(this,"onStart"),this._tTime!==f))return this;for(_=this._pt;_;)_.r(E,_.d),_=_._next;y&&y.render(r<0?r:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&jl(this,r,s,o),qn(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&jl(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Sr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(qn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Io||Wn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nu(this,c),u=this._ease(c/this._dur),fm(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(qa(this,0),this.parent||kf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_o(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,pr&&pr.vars.overwrite!==!0)._first||_o(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ai(r):a,c=this._ptLookup,u=this._pt,f,d,_,v,g,m,p;if((!s||s==="all")&&Vp(a,l))return s==="all"&&(this._pt=0),_o(this);for(f=this._op=this._op||[],s!=="all"&&(Jt(s)&&(g={},Un(s,function(E){return g[E]=1}),s=g),s=dm(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,v=d,_={}):(_=f[p]=f[p]||{},v=s);for(g in v)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Wa(this,m,"_pt"),delete d[g]),_!=="all"&&(_[g]=1)}return this._initted&&!this._pt&&u&&_o(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return yo(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return yo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return zt.killTweensOf(r,s,o)},e})(Uo);Jn(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(i){Yt[i]=function(){var e=new Ln,t=Ql.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var iu=function(e,t,n){return e[t]=n},ad=function(e,t,n){return e[t](n)},mm=function(e,t,n,r){return e[t](r.fp,n)},_m=function(e,t,n){return e.setAttribute(t,n)},ru=function(e,t){return Vt(e[t])?ad:Yc(e[t])&&e.setAttribute?_m:iu},ld=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},gm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cd=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},su=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},vm=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},xm=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Wa(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Sm=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},ud=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Nn=(function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||ld,this.d=l||this,this.set=c||iu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Sm,this.m=n,this.mt=s,this.tween=r},i})();Un(Jc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return jc[i]=1});jn.TweenMax=jn.TweenLite=Yt;jn.TimelineLite=jn.TimelineMax=Ln;zt=new Ln({sortChildren:!1,defaults:Co,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=td;var ts=[],ba={},ym=[],qu=0,Mm=0,ll=function(e){return(ba[e]||ym).map(function(t){return t()})},ic=function(){var e=Date.now(),t=[];e-qu>2&&(ll("matchMediaInit"),ts.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Ti.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ll("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),qu=e,ll("matchMedia"))},hd=(function(){function i(t,n){this.selector=n&&ec(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Mm++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Vt(n)&&(s=r,r=n,n=Vt);var o=this,a=function(){var c=Ft,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=ec(s)),Ft=o,f=r.apply(o,arguments),Vt(f)&&o._r.push(f),Ft=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Vt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Ft;Ft=null,n(this),Ft=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Yt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ts.length;o--;)ts[o].id===this.id&&ts.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),wm=(function(){function i(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Ii(n)||(n={matches:n});var o=new hd(0,s||this.scope),a=o.conditions={},l,c,u;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Ti.matchMedia(n[c]),l&&(ts.indexOf(o)<0&&ts.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ic):l.addEventListener("change",ic)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Oa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Jf(r)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Jt(e)&&(e=ai(e)[0]);var s=Jr(e||{}).get,o=n?Bf:zf;return n==="native"&&(n=""),e&&(t?o((Gn[t]&&Gn[t].get||s)(e,t,n,r)):function(a,l,c){return o((Gn[a]&&Gn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ai(e),e.length>1){var r=e.map(function(u){return zn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=Gn[t],a=Jr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Rs._pt=0,f.init(e,n?u+n:u,Rs,0,[e]),f.render(1,f),Rs._pt&&su(1,Rs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=zn.to(e,Jn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=es(e.ease,Co.ease)),Hu(Co,e||{})},config:function(e){return Hu($n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Gn[a]&&!jn[a]&&Po(t+" effect requires "+a+" plugin.")}),rl[t]=function(a,l,c){return n(ai(a),Jn(l||{},s),c)},o&&(Ln.prototype[t]=function(a,l,c){return this.add(rl[t](a,Ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){gt[e]=es(t)},parseEase:function(e,t){return arguments.length?es(e,t):gt},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ln(e),r,s;for(n.smoothChildTiming=In(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,r=zt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Yt&&r.vars.onComplete===r._targets[0]))&&Ri(n,r,r._start-r._delay),r=s;return Ri(zt,n,0),n},context:function(e,t){return e?new hd(e,t):Ft},matchMedia:function(e){return new wm(e)},matchMediaRefresh:function(){return ts.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||ic()},addEventListener:function(e,t){var n=ba[e]||(ba[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ba[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:em,wrapYoyo:tm,distribute:qf,random:Zf,snap:Yf,normalize:Qp,getUnit:pn,clamp:$p,splitColor:Qf,toArray:ai,selector:ec,mapRange:Kf,pipe:jp,unitize:Jp,interpolate:nm,shuffle:Xf},install:If,effects:rl,ticker:Wn,updateRoot:Ln.updateRoot,plugins:Gn,globalTimeline:zt,core:{PropTween:Nn,globals:Uf,Tween:Yt,Timeline:Ln,Animation:Uo,getCache:Jr,_removeLinkedListItem:Wa,reverting:function(){return sn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return qc=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Oa[i]=Yt[i]});Wn.add(Ln.updateRoot);Rs=Oa.to({},{duration:0});var Em=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},bm=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Em(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},cl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Jt(s)&&(l={},Un(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}bm(a,s)}}}},zn=Oa.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},cl("roundProps",tc),cl("modifiers"),cl("snap",Yf))||Oa;Yt.version=Ln.version=zn.version="3.15.0";Df=1;Zc()&&Vs();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yu,mr,Ds,ou,$r,Zu,au,Tm=function(){return typeof window<"u"},Ji={},Vr=180/Math.PI,Is=Math.PI/180,hs=Math.atan2,$u=1e8,lu=/([A-Z])/g,Am=/(left|right|width|margin|padding|x)/i,Rm=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Cm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Pm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Lm=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Dm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},fd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Im=function(e,t,n){return e.style[t]=n},Um=function(e,t,n){return e.style.setProperty(t,n)},Nm=function(e,t,n){return e._gsap[t]=n},Fm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Om=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},zm=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Bt="transform",Fn=Bt+"Origin",Bm=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=qi(r,a)}):this.tfm[e]=o.x?o[e]:qi(r,e),e===Fn&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},pd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},km=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(lu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=au(),(!s||!s.isStart)&&!n[Bt]&&(pd(n),r.zOrigin&&n[Fn]&&(n[Fn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},md=function(e,t){var n={target:e,props:[],revert:km,save:Bm};return e._gsap||zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},_d,sc=function(e,t){var n=mr.createElementNS?mr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mr.createElement(e);return n&&n.style?n:mr.createElement(e)},Yn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(lu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Gs(t)||t,1)||""},Ku="O,Moz,ms,Ms,Webkit".split(","),Gs=function(e,t,n){var r=t||$r,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ku[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ku[o]:"")+e},oc=function(){Tm()&&window.document&&(Yu=window,mr=Yu.document,Ds=mr.documentElement,$r=sc("div")||{style:{}},sc("div"),Bt=Gs(Bt),Fn=Bt+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_d=!!Gs("perspective"),au=zn.core.reverting,ou=1)},ju=function(e){var t=e.ownerSVGElement,n=sc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Ds.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Ds.removeChild(n),s},Ju=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},gd=function(e){var t,n;try{t=e.getBBox()}catch{t=ju(e),n=1}return t&&(t.width||t.height)||n||(t=ju(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ju(e,["x","cx","x1"])||0,y:+Ju(e,["y","cy","y1"])||0,width:0,height:0}:t},vd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gd(e))},yr=function(e,t){if(t){var n=e.style,r;t in Ji&&t!==Fn&&(t=Bt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(lu,"-$1").toLowerCase())):n.removeAttribute(t)}},_r=function(e,t,n,r,s,o){var a=new Nn(e._pt,t,n,0,1,o?dd:fd);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Qu={deg:1,rad:1,turn:1},Hm={grid:1,flex:1},Mr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=$r.style,l=Am.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",_=r==="%",v,g,m,p;if(r===o||!s||Qu[r]||Qu[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&vd(e),(_||o==="%")&&(Ji[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Wt(_?s/v*f:s/100*v);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===mr||!g.appendChild)&&(g=mr.body),m=g._gsap,m&&_&&m.width&&l&&m.time===Wn.time&&!m.uncache)return Wt(s/m.width*f);if(_&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=f+r,v=e[u],E?e.style[t]=E:yr(e,t)}else(_||o==="%")&&!Hm[Yn(g,"display")]&&(a.position=Yn(e,"position")),g===e&&(a.position="static"),g.appendChild($r),v=$r[u],g.removeChild($r),a.position="absolute";return l&&_&&(m=Jr(g),m.time=Wn.time,m.width=g[u]),Wt(d?v*s/f:v&&s?f/v*s:0)},qi=function(e,t,n,r){var s;return ou||oc(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ji[t]&&t!=="transform"?(s=Fo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ba(Yn(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=za[t]&&za[t](e,t,n)||Yn(e,t)||Ff(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Mr(e,t,s,n)+n:s},Vm=function(e,t,n,r){if(!n||n==="none"){var s=Gs(t,e,1),o=s&&Yn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Yn(e,"borderTopColor"))}var a=new Nn(this._pt,e.style,t,0,1,cd),l=0,c=0,u,f,d,_,v,g,m,p,E,y,S,L;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Yn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Yn(e,t)||r,g?e.style[t]=g:yr(e,t)),u=[n,r],td(u),n=u[0],r=u[1],d=n.match(As)||[],L=r.match(As)||[],L.length){for(;f=As.exec(r);)m=f[0],E=r.substring(l,f.index),v?v=(v+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(v=1),m!==(g=d[c++]||"")&&(_=parseFloat(g)||0,S=g.substr((_+"").length),m.charAt(1)==="="&&(m=Ls(_,m)+S),p=parseFloat(m),y=m.substr((p+"").length),l=As.lastIndex-y.length,y||(y=y||$n.units[t]||S,l===r.length&&(r+=y,a.e+=y)),S!==y&&(_=Mr(e,t,g,y)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:_,c:p-_,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?dd:fd;return Lf.test(r)&&(a.e=0),this._pt=a,a},eh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gm=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=eh[n]||n,t[1]=eh[r]||r,t.join(" ")},Wm=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ji[a]&&(l=1,a=a==="transformOrigin"?Fn:Bt),yr(n,a);l&&(yr(n,Bt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Fo(n,1),o.uncache=1,pd(r)))}},za={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Nn(e._pt,t,n,0,0,Wm);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},No=[1,0,0,1,0,0],xd={},Sd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},th=function(e){var t=Yn(e,Bt);return Sd(t)?No:t.substr(7).match(Pf).map(Wt)},cu=function(e,t){var n=e._gsap||Jr(e),r=e.style,s=th(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?No:s):(s===No&&!e.offsetParent&&e!==Ds&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ds.appendChild(e)),s=th(e),l?r.display=l:yr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ds.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ac=function(e,t,n,r,s,o){var a=e._gsap,l=s||cu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,_=l[0],v=l[1],g=l[2],m=l[3],p=l[4],E=l[5],y=t.split(" "),S=parseFloat(y[0])||0,L=parseFloat(y[1])||0,U,A,C,w;n?l!==No&&(A=_*m-v*g)&&(C=S*(m/A)+L*(-g/A)+(g*E-m*p)/A,w=S*(-v/A)+L*(_/A)-(_*E-v*p)/A,S=C,L=w):(U=gd(e),S=U.x+(~y[0].indexOf("%")?S/100*U.width:S),L=U.y+(~(y[1]||y[0]).indexOf("%")?L/100*U.height:L)),r||r!==!1&&a.smooth?(p=S-c,E=L-u,a.xOffset=f+(p*_+E*g)-p,a.yOffset=d+(p*v+E*m)-E):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=L,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Fn]="0px 0px",o&&(_r(o,a,"xOrigin",c,S),_r(o,a,"yOrigin",u,L),_r(o,a,"xOffset",f,a.xOffset),_r(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+L)},Fo=function(e,t){var n=e._gsap||new id(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Yn(e,Fn)||"0",u,f,d,_,v,g,m,p,E,y,S,L,U,A,C,w,M,D,z,O,W,Y,X,q,V,ce,ie,pe,Me,Be,j,oe;return u=f=d=g=m=p=E=y=S=0,_=v=1,n.svg=!!(e.getCTM&&vd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),r.scale=r.rotate=r.translate="none"),A=cu(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),ac(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,A)),L=n.xOrigin||0,U=n.yOrigin||0,A!==No&&(D=A[0],z=A[1],O=A[2],W=A[3],u=Y=A[4],f=X=A[5],A.length===6?(_=Math.sqrt(D*D+z*z),v=Math.sqrt(W*W+O*O),g=D||z?hs(z,D)*Vr:0,E=O||W?hs(O,W)*Vr+g:0,E&&(v*=Math.abs(Math.cos(E*Is))),n.svg&&(u-=L-(L*D+U*O),f-=U-(L*z+U*W))):(oe=A[6],Be=A[7],ie=A[8],pe=A[9],Me=A[10],j=A[11],u=A[12],f=A[13],d=A[14],C=hs(oe,Me),m=C*Vr,C&&(w=Math.cos(-C),M=Math.sin(-C),q=Y*w+ie*M,V=X*w+pe*M,ce=oe*w+Me*M,ie=Y*-M+ie*w,pe=X*-M+pe*w,Me=oe*-M+Me*w,j=Be*-M+j*w,Y=q,X=V,oe=ce),C=hs(-O,Me),p=C*Vr,C&&(w=Math.cos(-C),M=Math.sin(-C),q=D*w-ie*M,V=z*w-pe*M,ce=O*w-Me*M,j=W*M+j*w,D=q,z=V,O=ce),C=hs(z,D),g=C*Vr,C&&(w=Math.cos(C),M=Math.sin(C),q=D*w+z*M,V=Y*w+X*M,z=z*w-D*M,X=X*w-Y*M,D=q,Y=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),_=Wt(Math.sqrt(D*D+z*z+O*O)),v=Wt(Math.sqrt(X*X+oe*oe)),C=hs(Y,X),E=Math.abs(C)>2e-4?C*Vr:0,S=j?1/(j<0?-j:j):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Sd(Yn(e,Bt)),q&&e.setAttribute("transform",q))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(_*=-1,E+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Wt(_),n.scaleY=Wt(v),n.rotation=Wt(g)+a,n.rotationX=Wt(m)+a,n.rotationY=Wt(p)+a,n.skewX=E+a,n.skewY=y+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Fn]=Ba(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?qm:_d?yd:Xm,n.uncache=0,n},Ba=function(e){return(e=e.split(" "))[0]+" "+e[1]},ul=function(e,t,n){var r=pn(t);return Wt(parseFloat(t)+parseFloat(Mr(e,"x",n+"px",r)))+r},Xm=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,yd(e,t)},Dr="0deg",ro="0px",Ir=") ",yd=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,_=n.skewY,v=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,y=n.zOrigin,S="",L=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==Dr||u!==Dr)){var U=parseFloat(u)*Is,A=Math.sin(U),C=Math.cos(U),w;U=parseFloat(f)*Is,w=Math.cos(U),o=ul(E,o,A*w*-y),a=ul(E,a,-Math.sin(U)*-y),l=ul(E,l,C*w*-y+y)}m!==ro&&(S+="perspective("+m+Ir),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(L||o!==ro||a!==ro||l!==ro)&&(S+=l!==ro||L?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ir),c!==Dr&&(S+="rotate("+c+Ir),u!==Dr&&(S+="rotateY("+u+Ir),f!==Dr&&(S+="rotateX("+f+Ir),(d!==Dr||_!==Dr)&&(S+="skew("+d+", "+_+Ir),(v!==1||g!==1)&&(S+="scale("+v+", "+g+Ir),E.style[Bt]=S||"translate(0, 0)"},qm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,_=n.target,v=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,y=parseFloat(o),S=parseFloat(a),L,U,A,C,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Is,c*=Is,L=Math.cos(l)*f,U=Math.sin(l)*f,A=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Is,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,C*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),L*=w,U*=w)),L=Wt(L),U=Wt(U),A=Wt(A),C=Wt(C)):(L=f,C=d,U=A=0),(y&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(y=Mr(_,"x",o,"px"),S=Mr(_,"y",a,"px")),(v||g||m||p)&&(y=Wt(y+v-(v*L+g*A)+m),S=Wt(S+g-(v*U+g*C)+p)),(r||s)&&(w=_.getBBox(),y=Wt(y+r/100*w.width),S=Wt(S+s/100*w.height)),w="matrix("+L+","+U+","+A+","+C+","+y+","+S+")",_.setAttribute("transform",w),E&&(_.style[Bt]=w)},Ym=function(e,t,n,r,s){var o=360,a=Jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Vr:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*$u)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*$u)%o-~~(c/o)*o)),e._pt=d=new Nn(e._pt,t,n,r,c,Cm),d.e=u,d.u="deg",e._props.push(n),d},nh=function(e,t){for(var n in t)e[n]=t[n];return e},Zm=function(e,t,n){var r=nh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,_,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Bt]=t,a=Fo(n,1),yr(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],o[Bt]=t,a=Fo(n,1),o[Bt]=c);for(l in Ji)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(_=pn(c),v=pn(u),f=_!==v?Mr(n,l,c,v):parseFloat(c),d=parseFloat(u),e._pt=new Nn(e._pt,a,l,f,d-f,rc),e._pt.u=v||0,e._props.push(l));nh(a,r)};Un("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});za[e>1?"border"+i:i]=function(a,l,c,u,f){var d,_;if(arguments.length<4)return d=o.map(function(v){return qi(a,v,c)}),_=d.join(" "),_.split(d[0]).length===5?d[0]:_;d=(u+"").split(" "),_={},o.forEach(function(v,g){return _[v]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,_,f)}});var Md={name:"css",register:oc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,_,v,g,m,p,E,y,S,L,U,A,C,w;ou||oc(),this.styles=this.styles||md(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Gn[g]&&rd(g,t,n,r,e,s)))){if(_=typeof u,v=za[g],_==="function"&&(u=u.call(n,r,e,s),_=typeof u),_==="string"&&~u.indexOf("random(")&&(u=Do(u)),v)v(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",vr.lastIndex=0,vr.test(c)||(m=pn(c),p=pn(u),p?m!==p&&(c=Mr(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(_!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Jt(c)&&~c.indexOf("random(")&&(c=Do(c)),pn(c+"")||c==="auto"||(c+=$n.units[g]||pn(qi(e,g))||""),(c+"").charAt(1)==="="&&(c=qi(e,g))):c=qi(e,g),d=parseFloat(c),E=_==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),g in Ci&&(g==="autoAlpha"&&(d===1&&qi(e,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,a.visibility),_r(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ci[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Ji,y){if(this.styles.save(g),w=u,_==="string"&&u.substring(0,6)==="var(--"){if(u=Yn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=Yn(e,"perspective"),M?e.style.perspective=M:yr(e,"perspective")}f=parseFloat(u)}if(S||(L=e._gsap,L.renderTransform&&!t.parseTransform||Fo(e,t.parseTransform),U=t.smoothOrigin!==!1&&L.smooth,S=this._pt=new Nn(this._pt,a,Bt,0,1,L.renderTransform,L,0,-1),S.dep=1),g==="scale")this._pt=new Nn(this._pt,L,"scaleY",L.scaleY,(E?Ls(L.scaleY,E+f):f)-L.scaleY||0,rc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Fn,0,a[Fn]),u=Gm(u),L.svg?ac(e,u,0,U,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==L.zOrigin&&_r(this,L,"zOrigin",L.zOrigin,p),_r(this,a,g,Ba(c),Ba(u)));continue}else if(g==="svgOrigin"){ac(e,u,1,U,0,this);continue}else if(g in xd){Ym(this,L,g,d,E?Ls(d,E+u):u);continue}else if(g==="smoothOrigin"){_r(this,L,"smooth",L.smooth,u);continue}else if(g==="force3D"){L[g]=u;continue}else if(g==="transform"){Zm(this,u,e);continue}}else g in a||(g=Gs(g)||g);if(y||(f||f===0)&&(d||d===0)&&!Rm.test(u)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=pn(u)||(g in $n.units?$n.units[g]:m),m!==p&&(d=Mr(e,g,c,p)),this._pt=new Nn(this._pt,y?L:a,g,d,(E?Ls(d,E+f):f)-d,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Dm:rc),this._pt.u=p||0,y&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=Lm):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Pm);else if(g in a)Vm.call(this,e,g,c,E?E+u:u);else if(g in e)this.add(e,g,c||e[g],E?E+u:u,r,s);else if(g!=="parseTransform"){Kc(g,u);continue}y||(g in a?C.push(g,0,a[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),o.push(g)}}A&&ud(this)},render:function(e,t){if(t.tween._time||!au())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qi,aliases:Ci,getSetter:function(e,t,n){var r=Ci[t];return r&&r.indexOf(",")<0&&(t=r),t in Ji&&t!==Fn&&(e._gsap.x||qi(e,"x"))?n&&Zu===n?t==="scale"?Fm:Nm:(Zu=n||{})&&(t==="scale"?Om:zm):e.style&&!Yc(e.style[t])?Im:~t.indexOf("-")?Um:ru(e,t)},core:{_removeProperty:yr,_getMatrix:cu}};zn.utils.checkPrefix=Gs;zn.core.getStyleSaver=md;(function(i,e,t,n){var r=Un(i+","+e+","+t,function(s){Ji[s]=1});Un(e,function(s){$n.units[s]="deg",xd[s]=1}),Ci[r[13]]=i+","+e,Un(n,function(s){var o=s.split(":");Ci[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){$n.units[i]="px"});zn.registerPlugin(Md);var uu=zn.registerPlugin(Md)||zn;uu.core.Tween;const $m=[{id:"oryzo_ai",title:"Oryzo AI",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/oryzo_ai",colorBg:"#1a1411",colorText:"#ffedd7"},{id:"atlas_motion",title:"Atlas Motion",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/atlas_motion",colorBg:"#181818",colorText:"#ffffff"},{id:"devin_ai",title:"Devin AI",tags:"web • design • development • 3d",url:"https://lusion.co/projects/devin_ai",colorBg:"#121414",colorText:"#ffffff"},{id:"of_the_oak",title:"Of The Oak",tags:"web • design • development • 3d • animation",url:"https://lusion.co/projects/of_the_oak",colorBg:"#111a13",colorText:"#e8ffe9"},{id:"everswap",title:"Everswap",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/everswap",colorBg:"#E3E3F8",colorText:"#111111"},{id:"porsche_dream_machine",title:"Porsche: Dream Machine",tags:"concept • 3D illustration • mograph • video",url:"https://lusion.co/projects/porsche_dream_machine",colorBg:"#EFD5D3",colorText:"#1a0a0a"},{id:"synthetic_human",title:"Synthetic Human",tags:"web • design • development • 3d",url:"https://lusion.co/projects/synthetic_human",colorBg:"#9d8aff",colorText:"#120820"},{id:"spatial_fusion",title:"Meta: Spatial Fusion",tags:"web • design • development • 3d",url:"https://lusion.co/projects/spatial_fusion",colorBg:"#D6C8ED",colorText:"#1a1020"},{id:"spaace",title:"Spaace - NFT Marketplace",tags:"web • design • development • 3d • web3",url:"https://lusion.co/projects/spaace",colorBg:"#010a16",colorText:"#d6ecff"},{id:"ddd_2024",title:"DDD 2024",tags:"web • design • development • 3d",url:"https://lusion.co/projects/ddd_2024",colorBg:"#261c46",colorText:"#efe8ff"},{id:"choo_choo_world",title:"Choo Choo World",tags:"concept • web • game design • 3d",url:"https://lusion.co/projects/choo_choo_world",colorBg:"#E8EEF8",colorText:"#101418"},{id:"soda_experience",title:"Soda Experience",tags:"AR • development • 3d",url:"https://lusion.co/projects/soda_experience",colorBg:"#E1E2E4",colorText:"#111111"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="170",Km=0,ih=1,jm=2,wd=1,Jm=2,Wi=3,wr=0,On=1,yn=2,vi=0,xr=1,rh=2,sh=3,oh=4,Oo=5,Mn=100,Qm=101,e_=102,t_=103,n_=104,Ta=200,ri=201,i_=202,r_=203,Us=204,Ns=205,s_=206,o_=207,a_=208,l_=209,c_=210,u_=211,h_=212,f_=213,d_=214,lc=0,cc=1,uc=2,Ws=3,hc=4,fc=5,dc=6,pc=7,Ed=0,p_=1,m_=2,Di=0,__=1,g_=2,v_=3,x_=4,S_=5,y_=6,M_=7,bd=300,Xs=301,qs=302,mc=303,_c=304,Ya=306,Fs=1e3,gi=1001,ka=1002,on=1003,w_=1004,Zo=1005,wt=1006,hl=1007,Zi=1008,Ui=1009,Td=1010,Ad=1011,Ys=1012,fu=1013,rs=1014,Zn=1015,Pi=1016,du=1017,pu=1018,Zs=1020,Rd=35902,Cd=1021,Pd=1022,_n=1023,Ld=1024,Dd=1025,Os=1026,$s=1027,mu=1028,_u=1029,Id=1030,gu=1031,vu=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,gc=35840,vc=35841,xc=35842,Sc=35843,yc=36196,Mc=37492,wc=37496,Ec=37808,bc=37809,Tc=37810,Ac=37811,Rc=37812,Cc=37813,Pc=37814,Lc=37815,Dc=37816,Ic=37817,Uc=37818,Nc=37819,Fc=37820,Oc=37821,La=36492,zc=36494,Bc=36495,Ud=36283,kc=36284,Hc=36285,Vc=36286,E_=3200,b_=3201,T_=0,A_=1,mn="",Rn="srgb",Ni="srgb-linear",Za="linear",bt="srgb",fs=7680,ah=519,R_=512,C_=513,P_=514,Nd=515,L_=516,D_=517,I_=518,U_=519,lh=35044,rr=35048,ch="300 es",$i=2e3,Ha=2001;class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uh=1234567;const wo=Math.PI/180,zo=180/Math.PI;function Js(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function dn(i,e,t){return Math.max(e,Math.min(t,i))}function xu(i,e){return(i%e+e)%e}function N_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function F_(i,e,t){return i!==e?(t-i)/(e-i):0}function Eo(i,e,t){return(1-t)*i+t*e}function O_(i,e,t,n){return Eo(i,e,1-Math.exp(-t*n))}function z_(i,e=1){return e-Math.abs(xu(i,e*2)-e)}function B_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function k_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function H_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function V_(i,e){return i+Math.random()*(e-i)}function G_(i){return i*(.5-Math.random())}function W_(i){i!==void 0&&(uh=i);let e=uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function X_(i){return i*wo}function q_(i){return i*zo}function Y_(i){return(i&i-1)===0&&i!==0}function Z_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function K_(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),_=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*_,a*c);break;case"YXY":i.set(l*_,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*_,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ts(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const rn={DEG2RAD:wo,RAD2DEG:zo,generateUUID:Js,clamp:dn,euclideanModulo:xu,mapLinear:N_,inverseLerp:F_,lerp:Eo,damp:O_,pingpong:z_,smoothstep:B_,smootherstep:k_,randInt:H_,randFloat:V_,randFloatSpread:G_,seededRandom:W_,degToRad:X_,radToDeg:q_,isPowerOfTwo:Y_,ceilPowerOfTwo:Z_,floorPowerOfTwo:$_,setQuaternionFromProperEuler:K_,normalize:xn,denormalize:Ts};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,n,r,s,o,a,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],_=n[5],v=n[8],g=r[0],m=r[3],p=r[6],E=r[1],y=r[4],S=r[7],L=r[2],U=r[5],A=r[8];return s[0]=o*g+a*E+l*L,s[3]=o*m+a*y+l*U,s[6]=o*p+a*S+l*A,s[1]=c*g+u*E+f*L,s[4]=c*m+u*y+f*U,s[7]=c*p+u*S+f*A,s[2]=d*g+_*E+v*L,s[5]=d*m+_*y+v*U,s[8]=d*p+_*S+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,_=c*s-o*l,v=t*f+n*d+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=_*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fl.makeScale(e,t)),this}rotate(e){return this.premultiply(fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fl=new ct;function Fd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function j_(){const i=Bo("canvas");return i.style.display="block",i}const hh={};function vo(i){i in hh||(hh[i]=!0,console.warn(i))}function J_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Q_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function e0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xt={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mn?Za:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fh=[.64,.33,.3,.6,.15,.06],dh=[.2126,.7152,.0722],ph=[.3127,.329],mh=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[Ni]:{primaries:fh,whitePoint:ph,transfer:Za,toXYZ:mh,fromXYZ:_h,luminanceCoefficients:dh,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:fh,whitePoint:ph,transfer:bt,toXYZ:mh,fromXYZ:_h,luminanceCoefficients:dh,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}});let ds;class t0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=Bo("canvas")),ds.width=e.width,ds.height=e.height;const n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let n0=0;class Od{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dl(r[o].image)):s.push(dl(r[o]))}else s=dl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?t0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let i0=0;class an extends js{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,n=gi,r=gi,s=wt,o=Zi,a=_n,l=Ui,c=an.DEFAULT_ANISOTROPY,u=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Js(),this.name="",this.source=new Od(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fs:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fs:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=bd;an.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],_=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(_+1)/2,L=(p+1)/2,U=(u+d)/4,A=(f+g)/4,C=(v+m)/4;return y>S&&y>L?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=U/n,s=A/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=U/r,s=C/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=C/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(f-g)/E,this.z=(d-u)/E,this.w=Math.acos((c+_+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r0 extends js{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new an(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Od(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends r0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zd extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s0 extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],_=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=_,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==d||c!==_||u!==v){let m=1-a;const p=l*d+c*_+u*v+f*g,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),U=Math.atan2(L,p*E);m=Math.sin(m*U)/L,a=Math.sin(a*U)/L}const S=a*E;if(l=l*m+d*S,c=c*m+_*S,u=u*m+v*S,f=f*m+g*S,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],d=s[o+1],_=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*_-c*d,e[t+1]=l*v+u*d+c*f-a*_,e[t+2]=c*v+u*_+a*d-l*f,e[t+3]=u*v-a*f-l*d-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),d=l(n/2),_=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f-d*_*v;break;case"YXZ":this._x=d*u*f+c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f+d*_*v;break;case"ZXY":this._x=d*u*f-c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f-d*_*v;break;case"ZYX":this._x=d*u*f-c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f+d*_*v;break;case"YZX":this._x=d*u*f+c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f-d*_*v;break;case"XZY":this._x=d*u*f-c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f+d*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(n>a&&n>f){const _=2*Math.sqrt(1+n-a-f);this._w=(u-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>f){const _=2*Math.sqrt(1+a-n-f);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+f-n-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new H,gh=new Dn;class Qs{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(s,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$o.copy(n.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),Ko.subVectors(this.max,so),ps.subVectors(e.a,so),ms.subVectors(e.b,so),_s.subVectors(e.c,so),sr.subVectors(ms,ps),or.subVectors(_s,ms),Ur.subVectors(ps,_s);let t=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Ur.z,Ur.y,sr.z,0,-sr.x,or.z,0,-or.x,Ur.z,0,-Ur.x,-sr.y,sr.x,0,-or.y,or.x,0,-Ur.y,Ur.x,0];return!ml(t,ps,ms,_s,Ko)||(t=[1,0,0,0,1,0,0,0,1],!ml(t,ps,ms,_s,Ko))?!1:(jo.crossVectors(sr,or),t=[jo.x,jo.y,jo.z],ml(t,ps,ms,_s,Ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new H,new H,new H,new H,new H,new H,new H,new H],ui=new H,$o=new Qs,ps=new H,ms=new H,_s=new H,sr=new H,or=new H,Ur=new H,so=new H,Ko=new H,jo=new H,Nr=new H;function ml(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Nr.fromArray(i,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),c=t.dot(Nr),u=n.dot(Nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const o0=new Qs,oo=new H,_l=new H;class Su{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):o0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(oo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(_l)),this.expandByPoint(oo.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new H,gl=new H,Jo=new H,ar=new H,vl=new H,Qo=new H,xl=new H;class a0{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gl.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(gl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Jo),a=ar.dot(this.direction),l=-ar.dot(Jo),c=ar.lengthSq(),u=Math.abs(1-o*o);let f,d,_,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,_=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(gl).addScaledVector(Jo,d),_}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const n=Bi.dot(this.direction),r=Bi.dot(Bi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,n,r,s){vl.subVectors(t,e),Qo.subVectors(n,e),xl.crossVectors(vl,Qo);let o=this.direction.dot(xl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(Qo.crossVectors(ar,Qo));if(l<0)return null;const c=a*this.direction.dot(vl.cross(ar));if(c<0||l+c>o)return null;const u=-a*ar.dot(xl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m)}set(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=_,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,_=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=_+v*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=v+_*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,_=l*f,v=c*u,g=c*f;t[0]=d+g*a,t[4]=v*a-_,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=_*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,_=l*f,v=c*u,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,_=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=v*c-_,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=_*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-d*f,t[8]=v*f+_,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=_*f+v,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=o*u,t[9]=_*f-v,t[2]=v*f-_,t[6]=a*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l0,e,c0)}lookAt(e,t,n){const r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),lr.crossVectors(n,Bn),lr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),lr.crossVectors(n,Bn)),lr.normalize(),ea.crossVectors(Bn,lr),r[0]=lr.x,r[4]=ea.x,r[8]=Bn.x,r[1]=lr.y,r[5]=ea.y,r[9]=Bn.y,r[2]=lr.z,r[6]=ea.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],_=n[13],v=n[2],g=n[6],m=n[10],p=n[14],E=n[3],y=n[7],S=n[11],L=n[15],U=r[0],A=r[4],C=r[8],w=r[12],M=r[1],D=r[5],z=r[9],O=r[13],W=r[2],Y=r[6],X=r[10],q=r[14],V=r[3],ce=r[7],ie=r[11],pe=r[15];return s[0]=o*U+a*M+l*W+c*V,s[4]=o*A+a*D+l*Y+c*ce,s[8]=o*C+a*z+l*X+c*ie,s[12]=o*w+a*O+l*q+c*pe,s[1]=u*U+f*M+d*W+_*V,s[5]=u*A+f*D+d*Y+_*ce,s[9]=u*C+f*z+d*X+_*ie,s[13]=u*w+f*O+d*q+_*pe,s[2]=v*U+g*M+m*W+p*V,s[6]=v*A+g*D+m*Y+p*ce,s[10]=v*C+g*z+m*X+p*ie,s[14]=v*w+g*O+m*q+p*pe,s[3]=E*U+y*M+S*W+L*V,s[7]=E*A+y*D+S*Y+L*ce,s[11]=E*C+y*z+S*X+L*ie,s[15]=E*w+y*O+S*q+L*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],_=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*_-n*l*_)+g*(+t*l*_-t*c*d+s*o*d-r*o*_+r*c*u-s*l*u)+m*(+t*c*f-t*a*_-s*o*f+n*o*_+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],_=e[11],v=e[12],g=e[13],m=e[14],p=e[15],E=f*m*c-g*d*c+g*l*_-a*m*_-f*l*p+a*d*p,y=v*d*c-u*m*c-v*l*_+o*m*_+u*l*p-o*d*p,S=u*g*c-v*f*c+v*a*_-o*g*_-u*a*p+o*f*p,L=v*f*l-u*g*l-v*a*d+o*g*d+u*a*m-o*f*m,U=t*E+n*y+r*S+s*L;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/U;return e[0]=E*A,e[1]=(g*d*s-f*m*s-g*r*_+n*m*_+f*r*p-n*d*p)*A,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*A,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*_-n*l*_)*A,e[4]=y*A,e[5]=(u*m*s-v*d*s+v*r*_-t*m*_-u*r*p+t*d*p)*A,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*p-t*l*p)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*_+t*l*_)*A,e[8]=S*A,e[9]=(v*f*s-u*g*s-v*n*_+t*g*_+u*n*p-t*f*p)*A,e[10]=(o*g*s-v*a*s+v*n*c-t*g*c-o*n*p+t*a*p)*A,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*_-t*a*_)*A,e[12]=L*A,e[13]=(u*g*r-v*f*r+v*n*d-t*g*d-u*n*m+t*f*m)*A,e[14]=(v*a*r-o*g*r-v*n*l+t*g*l+o*n*m-t*a*m)*A,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,_=s*u,v=s*f,g=o*u,m=o*f,p=a*f,E=l*c,y=l*u,S=l*f,L=n.x,U=n.y,A=n.z;return r[0]=(1-(g+p))*L,r[1]=(_+S)*L,r[2]=(v-y)*L,r[3]=0,r[4]=(_-S)*U,r[5]=(1-(d+p))*U,r[6]=(m+E)*U,r[7]=0,r[8]=(v+y)*A,r[9]=(m-E)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=gs.set(r[0],r[1],r[2]).length();const o=gs.set(r[4],r[5],r[6]).length(),a=gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hi.copy(this);const c=1/s,u=1/o,f=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=f,hi.elements[9]*=f,hi.elements[10]*=f,t.setFromRotationMatrix(hi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=$i){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let _,v;if(a===$i)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ha)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=$i){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),d=(t+e)*c,_=(n+r)*u;let v,g;if(a===$i)v=(o+s)*f,g=-2*f;else if(a===Ha)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new H,hi=new vt,l0=new H(0,0,0),c0=new H(1,1,1),lr=new H,ea=new H,Bn=new H,vh=new vt,xh=new Dn;class Qn{constructor(e=0,t=0,n=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Bd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u0=0;const Sh=new H,vs=new Dn,ki=new vt,ta=new H,ao=new H,h0=new H,f0=new Dn,yh=new H(1,0,0),Mh=new H(0,1,0),wh=new H(0,0,1),Eh={type:"added"},d0={type:"removed"},xs={type:"childadded",child:null},Sl={type:"childremoved",child:null};class Kn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new H,t=new Qn,n=new Dn,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ct}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ao,ta,this.up):ki.lookAt(ta,ao,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(ki),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eh),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(d0),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eh),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,h0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Kn.DEFAULT_UP=new H(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new H,Hi=new H,yl=new H,Vi=new H,Ss=new H,ys=new H,bh=new H,Ml=new H,wl=new H,El=new H,bl=new Dt,Tl=new Dt,Al=new Dt;class _i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),fi.subVectors(e,t),r.cross(fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){fi.subVectors(r,t),Hi.subVectors(n,t),yl.subVectors(e,t);const o=fi.dot(fi),a=fi.dot(Hi),l=fi.dot(yl),c=Hi.dot(Hi),u=Hi.dot(yl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,_=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return bl.setScalar(0),Tl.setScalar(0),Al.setScalar(0),bl.fromBufferAttribute(e,t),Tl.fromBufferAttribute(e,n),Al.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bl,s.x),o.addScaledVector(Tl,s.y),o.addScaledVector(Al,s.z),o}static isFrontFacing(e,t,n,r){return fi.subVectors(n,t),Hi.subVectors(e,t),fi.cross(Hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),fi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ss.subVectors(r,n),ys.subVectors(s,n),Ml.subVectors(e,n);const l=Ss.dot(Ml),c=ys.dot(Ml);if(l<=0&&c<=0)return t.copy(n);wl.subVectors(e,r);const u=Ss.dot(wl),f=ys.dot(wl);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ss,o);El.subVectors(e,s);const _=Ss.dot(El),v=ys.dot(El);if(v>=0&&_<=v)return t.copy(s);const g=_*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(ys,a);const m=u*v-_*f;if(m<=0&&f-u>=0&&_-v>=0)return bh.subVectors(s,r),a=(f-u)/(f-u+(_-v)),t.copy(r).addScaledVector(bh,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(Ss,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},na={h:0,s:0,l:0};function Rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=xu(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Rl(o,s,e+1/3),this.g=Rl(o,s,e),this.b=Rl(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return xt.fromWorkingColorSpace(hn.copy(this),e),Math.round(dn(hn.r*255,0,255))*65536+Math.round(dn(hn.g*255,0,255))*256+Math.round(dn(hn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,r=hn.g,s=hn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Rn){xt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,r=hn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(na);const n=Eo(cr.h,na.h,t),r=Eo(cr.s,na.s,t),s=Eo(cr.l,na.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Ke;Ke.NAMES=kd;let p0=0;class $a extends js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Js(),this.name="",this.blending=xr,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Us,this.blendDst=Ns,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Us&&(n.blendSrc=this.blendSrc),this.blendDst!==Ns&&(n.blendDst=this.blendDst),this.blendEquation!==Mn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yu extends $a{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yi=m0();function m0(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function _0(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=dn(i,-65504,65504),Yi.floatView[0]=i;const e=Yi.uint32View[0],t=e>>23&511;return Yi.baseTable[t]+((e&8388607)>>Yi.shiftTable[t])}function g0(i){const e=i>>10;return Yi.uint32View[0]=Yi.mantissaTable[Yi.offsetTable[e]+(i&1023)]+Yi.exponentTable[e],Yi.floatView[0]}const Th={toHalfFloat:_0,fromHalfFloat:g0},qt=new H,ia=new at;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lh&&(e.usage=this.usage),e}}class Hd extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vd extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ns extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let v0=0;const ni=new vt,Cl=new Kn,Ms=new H,kn=new Qs,lo=new Qs,jt=new H;class er extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?Vd:Hd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ns(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(kn.min,lo.min),kn.expandByPoint(jt),jt.addVectors(kn.max,lo.max),kn.expandByPoint(jt)):(kn.expandByPoint(lo.min),kn.expandByPoint(lo.max))}kn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(e,c),jt.add(Ms)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new H,l[C]=new H;const c=new H,u=new H,f=new H,d=new at,_=new at,v=new at,g=new H,m=new H;function p(C,w,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),_.fromBufferAttribute(s,w),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),_.sub(d),v.sub(d);const D=1/(_.x*v.y-v.x*_.y);isFinite(D)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(D),m.copy(f).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(D),a[C].add(g),a[w].add(g),a[M].add(g),l[C].add(m),l[w].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,w=E.length;C<w;++C){const M=E[C],D=M.start,z=M.count;for(let O=D,W=D+z;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new H,S=new H,L=new H,U=new H;function A(C){L.fromBufferAttribute(r,C),U.copy(L);const w=a[C];y.copy(w),y.sub(L.multiplyScalar(L.dot(w))).normalize(),S.crossVectors(U,w);const D=S.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,w=E.length;C<w;++C){const M=E[C],D=M.start,z=M.count;for(let O=D,W=D+z;O<W;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,_=e.count;d<_;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,_=t.count;d<_;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let _=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?_=l[g]*a.data.stride+a.offset:_=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[_++]}return new Xt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new er,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],_=e(d,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const _=c[f];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,_=f.length;d<_;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ah=new vt,Fr=new a0,ra=new Su,Rh=new H,sa=new H,oa=new H,aa=new H,Pl=new H,la=new H,Ch=new H,ca=new H;class Ht extends Kn{constructor(e=new er,t=new yu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){la.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Pl.fromBufferAttribute(f,e),o?la.addScaledVector(Pl,u):la.addScaledVector(Pl.sub(t),u))}t.add(la)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(ra.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(ra,Rh)===null||Fr.origin.distanceToSquared(Rh)>(e.far-e.near)**2))&&(Ah.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Ah),!(n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],E=Math.max(m.start,_.start),y=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let S=E,L=y;S<L;S+=3){const U=a.getX(S),A=a.getX(S+1),C=a.getX(S+2);r=ua(this,p,e,n,c,u,f,U,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(a.count,_.start+_.count);for(let m=v,p=g;m<p;m+=3){const E=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);r=ua(this,o,e,n,c,u,f,E,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],E=Math.max(m.start,_.start),y=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let S=E,L=y;S<L;S+=3){const U=S,A=S+1,C=S+2;r=ua(this,p,e,n,c,u,f,U,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);for(let m=v,p=g;m<p;m+=3){const E=m,y=m+1,S=m+2;r=ua(this,o,e,n,c,u,f,E,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function x0(i,e,t,n,r,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===wr,a),l===null)return null;ca.copy(a),ca.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:i}}function ua(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,sa),i.getVertexPosition(l,oa),i.getVertexPosition(c,aa);const u=x0(i,e,t,n,sa,oa,aa,Ch);if(u){const f=new H;_i.getBarycoord(Ch,sa,oa,aa,f),r&&(u.uv=_i.getInterpolatedAttribute(r,a,l,c,f,new at)),s&&(u.uv1=_i.getInterpolatedAttribute(s,a,l,c,f,new at)),o&&(u.normal=_i.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};_i.getNormal(sa,oa,aa,d.normal),u.face=d,u.barycoord=f}return u}class Ho extends er{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,_=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ns(c,3)),this.setAttribute("normal",new ns(u,3)),this.setAttribute("uv",new ns(f,2));function v(g,m,p,E,y,S,L,U,A,C,w){const M=S/A,D=L/C,z=S/2,O=L/2,W=U/2,Y=A+1,X=C+1;let q=0,V=0;const ce=new H;for(let ie=0;ie<X;ie++){const pe=ie*D-O;for(let Me=0;Me<Y;Me++){const Be=Me*M-z;ce[g]=Be*E,ce[m]=pe*y,ce[p]=W,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[p]=U>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Me/A),f.push(1-ie/C),q+=1}}for(let ie=0;ie<C;ie++)for(let pe=0;pe<A;pe++){const Me=d+pe+Y*ie,Be=d+pe+Y*(ie+1),j=d+(pe+1)+Y*(ie+1),oe=d+(pe+1)+Y*ie;l.push(Me,Be,oe),l.push(Be,j,oe),V+=6}a.addGroup(_,V,w),_+=V,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Sn(i){const e={};for(let t=0;t<i.length;t++){const n=Ks(i[t]);for(const r in n)e[r]=n[r]}return e}function S0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const y0={clone:Ks,merge:Sn};var M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends $a{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=w0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=S0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wd extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new H,Ph=new at,Lh=new at;class Pn extends Wd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,Ph,Lh),t.subVectors(Lh,Ph)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,Es=1;class E0 extends Kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(ws,Es,e,t);r.layers=this.layers,this.add(r);const s=new Pn(ws,Es,e,t);s.layers=this.layers,this.add(s);const o=new Pn(ws,Es,e,t);o.layers=this.layers,this.add(o);const a=new Pn(ws,Es,e,t);a.layers=this.layers,this.add(a);const l=new Pn(ws,Es,e,t);l.layers=this.layers,this.add(l);const c=new Pn(ws,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Xd extends an{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b0 extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Xd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ho(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:vi});s.uniforms.tEquirect.value=t;const o=new Ht(r,s),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=wt),new E0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ll=new H,T0=new H,A0=new ct;class Gr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ll.subVectors(n,t).cross(T0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ll),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||A0.getNormalMatrix(e),r=this.coplanarPoint(Ll).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Su,ha=new H;class qd{constructor(e=new Gr,t=new Gr,n=new Gr,r=new Gr,s=new Gr,o=new Gr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],_=r[8],v=r[9],g=r[10],m=r[11],p=r[12],E=r[13],y=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,m-_,S-p).normalize(),n[1].setComponents(l+s,d+c,m+_,S+p).normalize(),n[2].setComponents(l+o,d+u,m+v,S+E).normalize(),n[3].setComponents(l-o,d-u,m-v,S-E).normalize(),n[4].setComponents(l-a,d-f,m-g,S-y).normalize(),t===$i)n[5].setComponents(l+a,d+f,m+g,S+y).normalize();else if(t===Ha)n[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ha.x=r.normal.x>0?e.max.x:e.min.x,ha.y=r.normal.y>0?e.max.y:e.min.y,ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function R0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((_,v)=>_.start-v.start);let d=0;for(let _=1;_<f.length;_++){const v=f[d],g=f[_];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,f[d]=g)}f.length=d+1;for(let _=0,v=f.length;_<v;_++){const g=f[_];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Fi extends er{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,_=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let y=0;y<c;y++){const S=y*f-s;v.push(S,-E,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const y=E+c*p,S=E+c*(p+1),L=E+1+c*(p+1),U=E+1+c*p;_.push(y,S,U),_.push(S,L,U)}this.setIndex(_),this.setAttribute("position",new ns(v,3)),this.setAttribute("normal",new ns(g,3)),this.setAttribute("uv",new ns(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,J0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eg=`vec3 transformedNormal = objectNormal;
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
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
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
}`,gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
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
#endif`,Ag=`struct PhysicalMaterial {
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
}`,Rg=`
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
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
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
#endif`,Jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dv=`float getShadowMask() {
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
}`,pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mv=`#ifdef USE_SKINNING
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
#endif`,_v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
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
#endif`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cv=`uniform sampler2D t2D;
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
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
}`,Nv=`#if DEPTH_PACKING == 3200
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
}`,Fv=`#define DISTANCE
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
}`,Ov=`#define DISTANCE
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`uniform float scale;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Vv=`#include <common>
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Wv=`#define LAMBERT
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define MATCAP
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
}`,Yv=`#define MATCAP
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
}`,Zv=`#define NORMAL
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
}`,$v=`#define NORMAL
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
}`,Kv=`#define PHONG
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
}`,jv=`#define PHONG
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
}`,Jv=`#define STANDARD
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
}`,Qv=`#define STANDARD
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
}`,ex=`#define TOON
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
}`,tx=`#define TOON
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
}`,nx=`uniform float size;
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
}`,ix=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,sx=`uniform vec3 color;
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
}`,ox=`uniform float rotation;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:C0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:I0,alphatest_pars_fragment:U0,aomap_fragment:N0,aomap_pars_fragment:F0,batching_pars_vertex:O0,batching_vertex:z0,begin_vertex:B0,beginnormal_vertex:k0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:G0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:Y0,color_fragment:Z0,color_pars_fragment:$0,color_pars_vertex:K0,color_vertex:j0,common:J0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:rg,colorspace_fragment:sg,colorspace_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:yg,envmap_vertex:hg,fog_vertex:fg,fog_pars_vertex:dg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:_g,lightmap_pars_fragment:gg,lights_lambert_fragment:vg,lights_lambert_pars_fragment:xg,lights_pars_begin:Sg,lights_toon_fragment:Mg,lights_toon_pars_fragment:wg,lights_phong_fragment:Eg,lights_phong_pars_fragment:bg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Pg,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Ug,map_fragment:Ng,map_pars_fragment:Fg,map_particle_fragment:Og,map_particle_pars_fragment:zg,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:kg,morphinstance_vertex:Hg,morphcolor_vertex:Vg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Wg,morphtarget_vertex:Xg,normal_fragment_begin:qg,normal_fragment_maps:Yg,normal_pars_fragment:Zg,normal_pars_vertex:$g,normal_vertex:Kg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Jg,clearcoat_normal_fragment_maps:Qg,clearcoat_pars_fragment:ev,iridescence_pars_fragment:tv,opaque_fragment:nv,packing:iv,premultiplied_alpha_fragment:rv,project_vertex:sv,dithering_fragment:ov,dithering_pars_fragment:av,roughnessmap_fragment:lv,roughnessmap_pars_fragment:cv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:hv,shadowmap_vertex:fv,shadowmask_pars_fragment:dv,skinbase_vertex:pv,skinning_pars_vertex:mv,skinning_vertex:_v,skinnormal_vertex:gv,specularmap_fragment:vv,specularmap_pars_fragment:xv,tonemapping_fragment:Sv,tonemapping_pars_fragment:yv,transmission_fragment:Mv,transmission_pars_fragment:wv,uv_pars_fragment:Ev,uv_pars_vertex:bv,uv_vertex:Tv,worldpos_vertex:Av,background_vert:Rv,background_frag:Cv,backgroundCube_vert:Pv,backgroundCube_frag:Lv,cube_vert:Dv,cube_frag:Iv,depth_vert:Uv,depth_frag:Nv,distanceRGBA_vert:Fv,distanceRGBA_frag:Ov,equirect_vert:zv,equirect_frag:Bv,linedashed_vert:kv,linedashed_frag:Hv,meshbasic_vert:Vv,meshbasic_frag:Gv,meshlambert_vert:Wv,meshlambert_frag:Xv,meshmatcap_vert:qv,meshmatcap_frag:Yv,meshnormal_vert:Zv,meshnormal_frag:$v,meshphong_vert:Kv,meshphong_frag:jv,meshphysical_vert:Jv,meshphysical_frag:Qv,meshtoon_vert:ex,meshtoon_frag:tx,points_vert:nx,points_frag:ix,shadow_vert:rx,shadow_frag:sx,sprite_vert:ox,sprite_frag:ax},Ie={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ai={basic:{uniforms:Sn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Sn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Sn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Sn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Sn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Sn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Sn([Ie.points,Ie.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Sn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Sn([Ie.common,Ie.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Sn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Sn([Ie.sprite,Ie.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Sn([Ie.common,Ie.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Sn([Ie.lights,Ie.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ai.physical={uniforms:Sn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const fa={r:0,b:0,g:0},zr=new Qn,lx=new vt;function cx(i,e,t,n,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,f=null,d=0,_=null;function v(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function g(E){let y=!1;const S=v(E);S===null?p(a,l):S&&S.isColor&&(p(S,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const S=v(y);S&&(S.isCubeTexture||S.mapping===Ya)?(u===void 0&&(u=new Ht(new Ho(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Ks(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,U,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zr.copy(y.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lx.makeRotationFromEuler(zr)),u.material.toneMapped=xt.getTransfer(S.colorSpace)!==bt,(f!==S||d!==S.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ht(new Fi(2,2),new Lt({name:"BackgroundMaterial",uniforms:Ks(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=xt.getTransfer(S.colorSpace)!==bt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(fa,Gd(i)),n.buffers.color.setClear(fa.r,fa.g,fa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:g,addToRenderList:m}}function ux(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(M,D,z,O,W){let Y=!1;const X=f(O,z,D);s!==X&&(s=X,c(s.object)),Y=_(M,O,z,W),Y&&v(M,O,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(M,D,z,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,D,z){const O=z.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let Y=W[D.id];Y===void 0&&(Y={},W[D.id]=Y);let X=Y[O];return X===void 0&&(X=d(l()),Y[O]=X),X}function d(M){const D=[],z=[],O=[];for(let W=0;W<t;W++)D[W]=0,z[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:O,object:M,attributes:{},index:null}}function _(M,D,z,O){const W=s.attributes,Y=D.attributes;let X=0;const q=z.getAttributes();for(const V in q)if(q[V].location>=0){const ie=W[V];let pe=Y[V];if(pe===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),ie===void 0||ie.attribute!==pe||pe&&ie.data!==pe.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function v(M,D,z,O){const W={},Y=D.attributes;let X=0;const q=z.getAttributes();for(const V in q)if(q[V].location>=0){let ie=Y[V];ie===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const pe={};pe.attribute=ie,ie&&ie.data&&(pe.data=ie.data),W[V]=pe,X++}s.attributes=W,s.attributesNum=X,s.index=O}function g(){const M=s.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const z=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;z[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),W[M]!==D&&(i.vertexAttribDivisor(M,D),W[M]=D)}function E(){const M=s.newAttributes,D=s.enabledAttributes;for(let z=0,O=D.length;z<O;z++)D[z]!==M[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function y(M,D,z,O,W,Y,X){X===!0?i.vertexAttribIPointer(M,D,z,W,Y):i.vertexAttribPointer(M,D,z,O,W,Y)}function S(M,D,z,O){g();const W=O.attributes,Y=z.getAttributes(),X=D.defaultAttributeValues;for(const q in Y){const V=Y[q];if(V.location>=0){let ce=W[q];if(ce===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const ie=ce.normalized,pe=ce.itemSize,Me=e.get(ce);if(Me===void 0)continue;const Be=Me.buffer,j=Me.type,oe=Me.bytesPerElement,ae=j===i.INT||j===i.UNSIGNED_INT||ce.gpuType===fu;if(ce.isInterleavedBufferAttribute){const le=ce.data,we=le.stride,Fe=ce.offset;if(le.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)p(V.location+Ne,le.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)m(V.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Ne=0;Ne<V.locationSize;Ne++)y(V.location+Ne,pe/V.locationSize,j,ie,we*oe,(Fe+pe/V.locationSize*Ne)*oe,ae)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)p(V.location+le,ce.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let le=0;le<V.locationSize;le++)y(V.location+le,pe/V.locationSize,j,ie,pe*oe,pe/V.locationSize*le*oe,ae)}}else if(X!==void 0){const ie=X[q];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(V.location,ie);break;case 3:i.vertexAttrib3fv(V.location,ie);break;case 4:i.vertexAttrib4fv(V.location,ie);break;default:i.vertexAttrib1fv(V.location,ie)}}}}E()}function L(){C();for(const M in n){const D=n[M];for(const z in D){const O=D[z];for(const W in O)u(O[W].object),delete O[W];delete D[z]}delete n[M]}}function U(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const z in D){const O=D[z];for(const W in O)u(O[W].object),delete O[W];delete D[z]}delete n[M.id]}function A(M){for(const D in n){const z=n[D];if(z[M.id]===void 0)continue;const O=z[M.id];for(const W in O)u(O[W].object),delete O[W];delete z[M.id]}}function C(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:U,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function hx(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];t.update(_,n,1)}function l(c,u,f,d){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g]*d[g];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ui&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:_,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:L,maxSamples:U}}function dx(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Gr,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||n!==0||r;return r=d,n=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,_){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,y=E*4;let S=p.clippingState||null;l.value=S,S=u(v,d,y,_);for(let L=0;L!==y;++L)S[L]=t[L];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,_,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=_+g*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=_;y!==g;++y,S+=4)o.copy(f[y]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function px(i){let e=new WeakMap;function t(o,a){return a===mc?o.mapping=Xs:a===_c&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===mc||a===_c)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new b0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zd extends Wd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cs=4,Dh=[.125,.215,.35,.446,.526,.582],Yr=20,Dl=new Zd,Ih=new Ke;let Il=null,Ul=0,Nl=0,Fl=!1;const Wr=(1+Math.sqrt(5))/2,bs=1/Wr,Uh=[new H(-Wr,bs,0),new H(Wr,bs,0),new H(-bs,0,Wr),new H(bs,0,Wr),new H(0,Wr,-bs),new H(0,Wr,bs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Ul,Nl),this._renderer.xr.enabled=Fl,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Pi,format:_n,colorSpace:Ni,depthBuffer:!1},r=Fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mx(s)),this._blurMaterial=_x(s,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,n,r){const a=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ih),u.toneMapping=Di,u.autoClear=!1;const _=new yu({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),v=new Ht(new Ho,_);let g=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,g=!0):(_.color.copy(Ih),g=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;da(r,E*y,p>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xs||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;da(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Uh[(r-s-1)%Uh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ht(this._lodPlanes[r],c),d=c.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Yr-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):Yr;m>Yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yr}`);const p=[];let E=0;for(let A=0;A<Yr;++A){const C=A/g,w=Math.exp(-C*C/2);p.push(w),A===0?E+=w:A<m&&(E+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const S=this._sizeLods[r],L=3*S*(r>y-Cs?r-y+Cs:0),U=4*(this._cubeSize-S);da(t,L,U,3*S,2*S),l.setRenderTarget(t),l.render(f,Dl)}}function mx(i){const e=[],t=[],n=[];let r=i;const s=i-Cs+1+Dh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Cs?l=Dh[o-i+Cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,v=6,g=3,m=2,p=1,E=new Float32Array(g*v*_),y=new Float32Array(m*v*_),S=new Float32Array(p*v*_);for(let U=0;U<_;U++){const A=U%3*2/3-1,C=U>2?0:-1,w=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(w,g*v*U),y.set(d,m*v*U);const M=[U,U,U,U,U,U];S.set(M,p*v*U)}const L=new er;L.setAttribute("position",new Xt(E,g)),L.setAttribute("uv",new Xt(y,m)),L.setAttribute("faceIndex",new Xt(S,p)),e.push(L),r>Cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fh(i,e,t){const n=new Qi(i,e,t);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _x(i,e,t){const n=new Float32Array(Yr),r=new H(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Oh(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function zh(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}function gx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===mc||l===_c,u=l===Xs||l===qs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Nh(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const _=a.image;return c&&_&&_.height>0||u&&_&&r(_)?(t===null&&(t=new Nh(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&vo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function xx(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const _=f.morphAttributes;for(const v in _){const g=_[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(f){const d=[],_=f.index,v=f.attributes.position;let g=0;if(_!==null){const E=_.array;g=_.version;for(let y=0,S=E.length;y<S;y+=3){const L=E[y+0],U=E[y+1],A=E[y+2];d.push(L,U,U,A,A,L)}}else if(v!==void 0){const E=v.array;g=v.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const L=y+0,U=y+1,A=y+2;d.push(L,U,U,A,A,L)}}else return;const m=new(Fd(d)?Vd:Hd)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Sx(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,_){i.drawElements(n,_,s,d*o),t.update(_,n,1)}function c(d,_,v){v!==0&&(i.drawElementsInstanced(n,_,s,d*o,v),t.update(_,n,v))}function u(d,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=_[p];t.update(m,n,1)}function f(d,_,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,_[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,_,0,s,d,0,g,0,v);let p=0;for(let E=0;E<v;E++)p+=_[E]*g[E];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function yx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Mx(i,e,t){const n=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var _=M;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let L=a.attributes.position.count*S,U=1;L>e.maxTextureSize&&(U=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*U*4*f),C=new zd(A,L,U,f);C.type=Zn,C.needsUpdate=!0;const w=S*4;for(let D=0;D<f;D++){const z=p[D],O=E[D],W=y[D],Y=L*U*4*D;for(let X=0;X<z.count;X++){const q=X*w;v===!0&&(r.fromBufferAttribute(z,X),A[Y+q+0]=r.x,A[Y+q+1]=r.y,A[Y+q+2]=r.z,A[Y+q+3]=0),g===!0&&(r.fromBufferAttribute(O,X),A[Y+q+4]=r.x,A[Y+q+5]=r.y,A[Y+q+6]=r.z,A[Y+q+7]=0),m===!0&&(r.fromBufferAttribute(W,X),A[Y+q+8]=r.x,A[Y+q+9]=r.y,A[Y+q+10]=r.z,A[Y+q+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new at(L,U)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function wx(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class wu extends an{constructor(e,t,n,r,s,o,a,l,c,u=Os){if(u!==Os&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Os&&(n=rs),n===void 0&&u===$s&&(n=Zs),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $d=new an,Bh=new wu(1,1),Kd=new zd,jd=new s0,Jd=new Xd,kh=[],Hh=[],Vh=new Float32Array(16),Gh=new Float32Array(9),Wh=new Float32Array(4);function eo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=kh[r];if(s===void 0&&(s=new Float32Array(r),kh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ka(i,e){let t=Hh[e];t===void 0&&(t=new Int32Array(e),Hh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ex(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Rx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;Wh.set(n),i.uniformMatrix2fv(this.addr,!1,Wh),$t(t,n)}}function Cx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;Gh.set(n),i.uniformMatrix3fv(this.addr,!1,Gh),$t(t,n)}}function Px(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;Vh.set(n),i.uniformMatrix4fv(this.addr,!1,Vh),$t(t,n)}}function Lx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Nx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Bx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Bh.compareFunction=Nd,s=Bh):s=$d,t.setTexture2D(e||s,r)}function kx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||jd,r)}function Hx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Jd,r)}function Vx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Kd,r)}function Gx(i){switch(i){case 5126:return Ex;case 35664:return bx;case 35665:return Tx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Ix;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Fx;case 36295:return Ox;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Vx}}function Wx(i,e){i.uniform1fv(this.addr,e)}function Xx(i,e){const t=eo(e,this.size,2);i.uniform2fv(this.addr,t)}function qx(i,e){const t=eo(e,this.size,3);i.uniform3fv(this.addr,t)}function Yx(i,e){const t=eo(e,this.size,4);i.uniform4fv(this.addr,t)}function Zx(i,e){const t=eo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $x(i,e){const t=eo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kx(i,e){const t=eo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jx(i,e){i.uniform1iv(this.addr,e)}function Jx(i,e){i.uniform2iv(this.addr,e)}function Qx(i,e){i.uniform3iv(this.addr,e)}function eS(i,e){i.uniform4iv(this.addr,e)}function tS(i,e){i.uniform1uiv(this.addr,e)}function nS(i,e){i.uniform2uiv(this.addr,e)}function iS(i,e){i.uniform3uiv(this.addr,e)}function rS(i,e){i.uniform4uiv(this.addr,e)}function sS(i,e,t){const n=this.cache,r=e.length,s=Ka(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$d,s[o])}function oS(i,e,t){const n=this.cache,r=e.length,s=Ka(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||jd,s[o])}function aS(i,e,t){const n=this.cache,r=e.length,s=Ka(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jd,s[o])}function lS(i,e,t){const n=this.cache,r=e.length,s=Ka(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kd,s[o])}function cS(i){switch(i){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return Zx;case 35675:return $x;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return eS;case 5125:return tS;case 36294:return nS;case 36295:return iS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35679:case 36299:case 36307:return oS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return lS}}class uS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gx(t.type)}}class hS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cS(t.type)}}class fS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function Xh(i,e){i.seq.push(e),i.map[e.id]=e}function dS(i,e,t){const n=i.name,r=n.length;for(Ol.lastIndex=0;;){const s=Ol.exec(n),o=Ol.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xh(t,c===void 0?new uS(a,i,e):new hS(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new fS(a),Xh(t,f)),t=f}}}class Da{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);dS(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function qh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pS=37297;let mS=0;function _S(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Yh=new ct;function gS(i){xt._getMatrix(Yh,xt.workingColorSpace,i);const e=`mat3( ${Yh.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Za:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_S(i.getShaderSource(e),o)}else return r}function vS(i,e){const t=gS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xS(i,e){let t;switch(e){case __:t="Linear";break;case g_:t="Reinhard";break;case v_:t="Cineon";break;case x_:t="ACESFilmic";break;case y_:t="AgX";break;case M_:t="Neutral";break;case S_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pa=new H;function SS(){xt.getLuminanceCoefficients(pa);const i=pa.x.toFixed(4),e=pa.y.toFixed(4),t=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function MS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xo(i){return i!==""}function $h(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(ES,TS)}const bS=new Map;function TS(i,e){let t=ht[e];if(t===void 0){const n=bS.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gc(t)}const AS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(i){return i.replace(AS,RS)}function RS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function CS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function PS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function DS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ed:e="ENVMAP_BLENDING_MULTIPLY";break;case p_:e="ENVMAP_BLENDING_MIX";break;case m_:e="ENVMAP_BLENDING_ADD";break}return e}function IS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function US(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=CS(t),c=PS(t),u=LS(t),f=DS(t),d=IS(t),_=yS(t),v=MS(s),g=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xo).join(`
`),p.length>0&&(p+=`
`)):(m=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),p=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?ht.tonemapping_pars_fragment:"",t.toneMapping!==Di?xS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,vS("linearToOutputTexel",t.outputColorSpace),SS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),o=Gc(o),o=$h(o,t),o=Kh(o,t),a=Gc(a),a=$h(a,t),a=Kh(a,t),o=jh(o),a=jh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+m+o,S=E+p+a,L=qh(r,r.VERTEX_SHADER,y),U=qh(r,r.FRAGMENT_SHADER,S);r.attachShader(g,L),r.attachShader(g,U),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(D){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(L).trim(),W=r.getShaderInfoLog(U).trim();let Y=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,U);else{const q=Zh(r,L,"vertex"),V=Zh(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+q+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:Y,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(L),r.deleteShader(U),C=new Da(r,g),w=wS(r,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,pS)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=U,this}let NS=0;class FS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new OS(e),t.set(e,n)),n}}class OS{constructor(e){this.id=NS++,this.code=e,this.usedTimes=0}}function zS(i,e,t,n,r,s,o){const a=new Bd,l=new FS,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,D,z,O){const W=z.fog,Y=O.geometry,X=w.isMeshStandardMaterial?z.environment:null,q=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),V=q&&q.mapping===Ya?q.image.height:null,ce=v[w.type];w.precision!==null&&(_=r.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const ie=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pe=ie!==void 0?ie.length:0;let Me=0;Y.morphAttributes.position!==void 0&&(Me=1),Y.morphAttributes.normal!==void 0&&(Me=2),Y.morphAttributes.color!==void 0&&(Me=3);let Be,j,oe,ae;if(ce){const mt=Ai[ce];Be=mt.vertexShader,j=mt.fragmentShader}else Be=w.vertexShader,j=w.fragmentShader,l.update(w),oe=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);const le=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Ne=O.isBatchedMesh===!0,it=!!w.map,Xe=!!w.matcap,rt=!!q,F=!!w.aoMap,Ge=!!w.lightMap,We=!!w.bumpMap,Je=!!w.normalMap,xe=!!w.displacementMap,Oe=!!w.emissiveMap,Ae=!!w.metalnessMap,I=!!w.roughnessMap,T=w.anisotropy>0,G=w.clearcoat>0,ee=w.dispersion>0,te=w.iridescence>0,ne=w.sheen>0,Te=w.transmission>0,fe=T&&!!w.anisotropyMap,Se=G&&!!w.clearcoatMap,Qe=G&&!!w.clearcoatNormalMap,me=G&&!!w.clearcoatRoughnessMap,Le=te&&!!w.iridescenceMap,Ue=te&&!!w.iridescenceThicknessMap,ze=ne&&!!w.sheenColorMap,Re=ne&&!!w.sheenRoughnessMap,$e=!!w.specularMap,ke=!!w.specularColorMap,qe=!!w.specularIntensityMap,B=Te&&!!w.transmissionMap,J=Te&&!!w.thicknessMap,re=!!w.gradientMap,ue=!!w.alphaMap,Pe=w.alphaTest>0,De=!!w.alphaHash,nt=!!w.extensions;let yt=Di;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(yt=i.toneMapping);const Ct={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:j,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:Ne,batchingColor:Ne&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ni,alphaToCoverage:!!w.alphaToCoverage,map:it,matcap:Xe,envMap:rt,envMapMode:rt&&q.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:Ge,bumpMap:We,normalMap:Je,displacementMap:d&&xe,emissiveMap:Oe,normalMapObjectSpace:Je&&w.normalMapType===A_,normalMapTangentSpace:Je&&w.normalMapType===T_,metalnessMap:Ae,roughnessMap:I,anisotropy:T,anisotropyMap:fe,clearcoat:G,clearcoatMap:Se,clearcoatNormalMap:Qe,clearcoatRoughnessMap:me,dispersion:ee,iridescence:te,iridescenceMap:Le,iridescenceThicknessMap:Ue,sheen:ne,sheenColorMap:ze,sheenRoughnessMap:Re,specularMap:$e,specularColorMap:ke,specularIntensityMap:qe,transmission:Te,transmissionMap:B,thicknessMap:J,gradientMap:re,opaque:w.transparent===!1&&w.blending===xr&&w.alphaToCoverage===!1,alphaMap:ue,alphaTest:Pe,alphaHash:De,combine:w.combine,mapUv:it&&g(w.map.channel),aoMapUv:F&&g(w.aoMap.channel),lightMapUv:Ge&&g(w.lightMap.channel),bumpMapUv:We&&g(w.bumpMap.channel),normalMapUv:Je&&g(w.normalMap.channel),displacementMapUv:xe&&g(w.displacementMap.channel),emissiveMapUv:Oe&&g(w.emissiveMap.channel),metalnessMapUv:Ae&&g(w.metalnessMap.channel),roughnessMapUv:I&&g(w.roughnessMap.channel),anisotropyMapUv:fe&&g(w.anisotropyMap.channel),clearcoatMapUv:Se&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(w.sheenRoughnessMap.channel),specularMapUv:$e&&g(w.specularMap.channel),specularColorMapUv:ke&&g(w.specularColorMap.channel),specularIntensityMapUv:qe&&g(w.specularIntensityMap.channel),transmissionMapUv:B&&g(w.transmissionMap.channel),thicknessMapUv:J&&g(w.thicknessMap.channel),alphaMapUv:ue&&g(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Je||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(it||ue),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:we,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:it&&w.map.isVideoTexture===!0&&xt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:Oe&&w.emissiveMap.isVideoTexture===!0&&xt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===yn,flipSided:w.side===On,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:nt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&w.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(E(M,w),y(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const M=v[w.type];let D;if(M){const z=Ai[M];D=y0.clone(z.uniforms)}else D=w.uniforms;return D}function L(w,M){let D;for(let z=0,O=u.length;z<O;z++){const W=u[z];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new US(i,M,w,s),u.push(D)),D}function U(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:U,releaseShaderCache:A,programs:u,dispose:C}}function BS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function kS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ef(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,_,v,g,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:_,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=_,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,d,_,v,g,m){const p=o(f,d,_,v,g,m);_.transmission>0?n.push(p):_.transparent===!0?r.push(p):t.push(p)}function l(f,d,_,v,g,m){const p=o(f,d,_,v,g,m);_.transmission>0?n.unshift(p):_.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||kS),n.length>1&&n.sort(d||Qh),r.length>1&&r.sort(d||Qh)}function u(){for(let f=e,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function HS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ef,i.set(n,[o])):r>=s.length?(o=new ef,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function VS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ke};break;case"SpotLight":t={position:new H,direction:new H,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function GS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let WS=0;function XS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qS(i){const e=new VS,t=GS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const r=new H,s=new vt,o=new vt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let _=0,v=0,g=0,m=0,p=0,E=0,y=0,S=0,L=0,U=0,A=0;c.sort(XS);for(let w=0,M=c.length;w<M;w++){const D=c[w],z=D.color,O=D.intensity,W=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=z.r*O,f+=z.g*O,d+=z.b*O;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],O);A++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,V=t.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[_]=V,n.directionalShadowMap[_]=Y,n.directionalShadowMatrix[_]=D.shadow.matrix,E++}n.directional[_]=X,_++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(z).multiplyScalar(O),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[g]=X;const q=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,q.updateMatrices(D),D.castShadow&&U++),n.spotLightMatrix[g]=q.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Y,S++}g++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(z).multiplyScalar(O),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const q=D.shadow,V=t.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=Y,n.pointShadowMatrix[v]=D.shadow.matrix,y++}n.point[v]=X,v++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(O),X.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==_||C.pointLength!==v||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==y||C.numSpotShadows!==S||C.numSpotMaps!==L||C.numLightProbes!==A)&&(n.directional.length=_,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+L-U,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=A,C.directionalLength=_,C.pointLength=v,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=y,C.numSpotShadows=S,C.numSpotMaps=L,C.numLightProbes=A,n.version=WS++)}function l(c,u){let f=0,d=0,_=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const y=c[p];if(y.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=n.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),_++}else if(y.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function tf(i){const e=new qS(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function YS(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new tf(i),e.set(r,[a])):s>=o.length?(a=new tf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class ZS extends $a{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $S extends $a{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jS=`uniform sampler2D shadow_pass;
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
}`;function JS(i,e,t){let n=new qd;const r=new at,s=new at,o=new Dt,a=new ZS({depthPacking:b_}),l=new $S,c={},u=t.maxTextureSize,f={[wr]:On,[On]:wr,[yn]:yn},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:KS,fragmentShader:jS}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const v=new er;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ht(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wd;let p=this.type;this.render=function(U,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||U.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==Wi&&this.type===Wi,W=p===Wi&&this.type!==Wi;for(let Y=0,X=U.length;Y<X;Y++){const q=U[Y],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ce=V.getFrameExtents();if(r.multiply(ce),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,V.mapSize.y=s.y)),V.map===null||O===!0||W===!0){const pe=this.type!==Wi?{minFilter:on,magFilter:on}:{};V.map!==null&&V.map.dispose(),V.map=new Qi(r.x,r.y,pe),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ie=V.getViewportCount();for(let pe=0;pe<ie;pe++){const Me=V.getViewport(pe);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),z.viewport(o),V.updateMatrices(q,pe),n=V.getFrustum(),S(A,C,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Wi&&E(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,D)};function E(U,A){const C=e.update(g);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,_.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Qi(r.x,r.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,g,null),_.uniforms.shadow_pass.value=U.mapPass.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(A,null,C,_,g,null)}function y(U,A,C,w){let M=null;const D=C.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(D!==void 0)M=D;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,O=A.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let Y=W[O];Y===void 0&&(Y=M.clone(),W[O]=Y,A.addEventListener("dispose",L)),M=Y}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Wi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=C}return M}function S(U,A,C,w,M){if(U.visible===!1)return;if(U.layers.test(A.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&M===Wi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,U.matrixWorld);const O=e.update(U),W=U.material;if(Array.isArray(W)){const Y=O.groups;for(let X=0,q=Y.length;X<q;X++){const V=Y[X],ce=W[V.materialIndex];if(ce&&ce.visible){const ie=y(U,ce,w,M);U.onBeforeShadow(i,U,A,C,O,ie,V),i.renderBufferDirect(C,null,O,ie,U,V),U.onAfterShadow(i,U,A,C,O,ie,V)}}}else if(W.visible){const Y=y(U,W,w,M);U.onBeforeShadow(i,U,A,C,O,Y,null),i.renderBufferDirect(C,null,O,Y,U,null),U.onAfterShadow(i,U,A,C,O,Y,null)}}const z=U.children;for(let O=0,W=z.length;O<W;O++)S(z[O],A,C,w,M)}function L(U){U.target.removeEventListener("dispose",L);for(const C in c){const w=c[C],M=U.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const QS={[lc]:cc,[uc]:dc,[hc]:pc,[Ws]:fc,[cc]:lc,[dc]:uc,[pc]:hc,[fc]:Ws};function e1(i,e){function t(){let B=!1;const J=new Dt;let re=null;const ue=new Dt(0,0,0,0);return{setMask:function(Pe){re!==Pe&&!B&&(i.colorMask(Pe,Pe,Pe,Pe),re=Pe)},setLocked:function(Pe){B=Pe},setClear:function(Pe,De,nt,yt,Ct){Ct===!0&&(Pe*=yt,De*=yt,nt*=yt),J.set(Pe,De,nt,yt),ue.equals(J)===!1&&(i.clearColor(Pe,De,nt,yt),ue.copy(J))},reset:function(){B=!1,re=null,ue.set(-1,0,0,0)}}}function n(){let B=!1,J=!1,re=null,ue=null,Pe=null;return{setReversed:function(De){if(J!==De){const nt=e.get("EXT_clip_control");J?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);const yt=Pe;Pe=null,this.setClear(yt)}J=De},getReversed:function(){return J},setTest:function(De){De?le(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(De){re!==De&&!B&&(i.depthMask(De),re=De)},setFunc:function(De){if(J&&(De=QS[De]),ue!==De){switch(De){case lc:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case uc:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case hc:i.depthFunc(i.EQUAL);break;case fc:i.depthFunc(i.GEQUAL);break;case dc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=De}},setLocked:function(De){B=De},setClear:function(De){Pe!==De&&(J&&(De=1-De),i.clearDepth(De),Pe=De)},reset:function(){B=!1,re=null,ue=null,Pe=null,J=!1}}}function r(){let B=!1,J=null,re=null,ue=null,Pe=null,De=null,nt=null,yt=null,Ct=null;return{setTest:function(mt){B||(mt?le(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(mt){J!==mt&&!B&&(i.stencilMask(mt),J=mt)},setFunc:function(mt,Mt,wn){(re!==mt||ue!==Mt||Pe!==wn)&&(i.stencilFunc(mt,Mt,wn),re=mt,ue=Mt,Pe=wn)},setOp:function(mt,Mt,wn){(De!==mt||nt!==Mt||yt!==wn)&&(i.stencilOp(mt,Mt,wn),De=mt,nt=Mt,yt=wn)},setLocked:function(mt){B=mt},setClear:function(mt){Ct!==mt&&(i.clearStencil(mt),Ct=mt)},reset:function(){B=!1,J=null,re=null,ue=null,Pe=null,De=null,nt=null,yt=null,Ct=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,_=[],v=null,g=!1,m=null,p=null,E=null,y=null,S=null,L=null,U=null,A=new Ke(0,0,0),C=0,w=!1,M=null,D=null,z=null,O=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=q>=2);let ce=null,ie={};const pe=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Be=new Dt().fromArray(pe),j=new Dt().fromArray(Me);function oe(B,J,re,ue){const Pe=new Uint8Array(4),De=i.createTexture();i.bindTexture(B,De),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<re;nt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(J+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return De}const ae={};ae[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(Ws),We(!1),Je(ih),le(i.CULL_FACE),F(vi);function le(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function we(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Fe(B,J){return f[B]!==J?(i.bindFramebuffer(B,J),f[B]=J,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=J),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Ne(B,J){let re=_,ue=!1;if(B){re=d.get(J),re===void 0&&(re=[],d.set(J,re));const Pe=B.textures;if(re.length!==Pe.length||re[0]!==i.COLOR_ATTACHMENT0){for(let De=0,nt=Pe.length;De<nt;De++)re[De]=i.COLOR_ATTACHMENT0+De;re.length=Pe.length,ue=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,ue=!0);ue&&i.drawBuffers(re)}function it(B){return v!==B?(i.useProgram(B),v=B,!0):!1}const Xe={[Mn]:i.FUNC_ADD,[Qm]:i.FUNC_SUBTRACT,[e_]:i.FUNC_REVERSE_SUBTRACT};Xe[t_]=i.MIN,Xe[n_]=i.MAX;const rt={[Ta]:i.ZERO,[ri]:i.ONE,[i_]:i.SRC_COLOR,[Us]:i.SRC_ALPHA,[c_]:i.SRC_ALPHA_SATURATE,[a_]:i.DST_COLOR,[s_]:i.DST_ALPHA,[r_]:i.ONE_MINUS_SRC_COLOR,[Ns]:i.ONE_MINUS_SRC_ALPHA,[l_]:i.ONE_MINUS_DST_COLOR,[o_]:i.ONE_MINUS_DST_ALPHA,[u_]:i.CONSTANT_COLOR,[h_]:i.ONE_MINUS_CONSTANT_COLOR,[f_]:i.CONSTANT_ALPHA,[d_]:i.ONE_MINUS_CONSTANT_ALPHA};function F(B,J,re,ue,Pe,De,nt,yt,Ct,mt){if(B===vi){g===!0&&(we(i.BLEND),g=!1);return}if(g===!1&&(le(i.BLEND),g=!0),B!==Oo){if(B!==m||mt!==w){if((p!==Mn||S!==Mn)&&(i.blendEquation(i.FUNC_ADD),p=Mn,S=Mn),mt)switch(B){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rh:i.blendFunc(i.ONE,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,y=null,L=null,U=null,A.set(0,0,0),C=0,m=B,w=mt}return}Pe=Pe||J,De=De||re,nt=nt||ue,(J!==p||Pe!==S)&&(i.blendEquationSeparate(Xe[J],Xe[Pe]),p=J,S=Pe),(re!==E||ue!==y||De!==L||nt!==U)&&(i.blendFuncSeparate(rt[re],rt[ue],rt[De],rt[nt]),E=re,y=ue,L=De,U=nt),(yt.equals(A)===!1||Ct!==C)&&(i.blendColor(yt.r,yt.g,yt.b,Ct),A.copy(yt),C=Ct),m=B,w=!1}function Ge(B,J){B.side===yn?we(i.CULL_FACE):le(i.CULL_FACE);let re=B.side===On;J&&(re=!re),We(re),B.blending===xr&&B.transparent===!1?F(vi):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const ue=B.stencilWrite;a.setTest(ue),ue&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Oe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function Je(B){B!==Km?(le(i.CULL_FACE),B!==D&&(B===ih?i.cullFace(i.BACK):B===jm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),D=B}function xe(B){B!==z&&(X&&i.lineWidth(B),z=B)}function Oe(B,J,re){B?(le(i.POLYGON_OFFSET_FILL),(O!==J||W!==re)&&(i.polygonOffset(J,re),O=J,W=re)):we(i.POLYGON_OFFSET_FILL)}function Ae(B){B?le(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function I(B){B===void 0&&(B=i.TEXTURE0+Y-1),ce!==B&&(i.activeTexture(B),ce=B)}function T(B,J,re){re===void 0&&(ce===null?re=i.TEXTURE0+Y-1:re=ce);let ue=ie[re];ue===void 0&&(ue={type:void 0,texture:void 0},ie[re]=ue),(ue.type!==B||ue.texture!==J)&&(ce!==re&&(i.activeTexture(re),ce=re),i.bindTexture(B,J||ae[B]),ue.type=B,ue.texture=J)}function G(){const B=ie[ce];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(B){Be.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Be.copy(B))}function Re(B){j.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),j.copy(B))}function $e(B,J){let re=c.get(J);re===void 0&&(re=new WeakMap,c.set(J,re));let ue=re.get(B);ue===void 0&&(ue=i.getUniformBlockIndex(J,B.name),re.set(B,ue))}function ke(B,J){const ue=c.get(J).get(B);l.get(J)!==ue&&(i.uniformBlockBinding(J,ue,B.__bindingPointIndex),l.set(J,ue))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ce=null,ie={},f={},d=new WeakMap,_=[],v=null,g=!1,m=null,p=null,E=null,y=null,S=null,L=null,U=null,A=new Ke(0,0,0),C=0,w=!1,M=null,D=null,z=null,O=null,W=null,Be.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:we,bindFramebuffer:Fe,drawBuffers:Ne,useProgram:it,setBlending:F,setMaterial:Ge,setFlipSided:We,setCullFace:Je,setLineWidth:xe,setPolygonOffset:Oe,setScissorTest:Ae,activeTexture:I,bindTexture:T,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:te,texImage2D:Le,texImage3D:Ue,updateUBOMapping:$e,uniformBlockBinding:ke,texStorage2D:Qe,texStorage3D:me,texSubImage2D:ne,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:Se,scissor:ze,viewport:Re,reset:qe}}function nf(i,e,t,n){const r=t1(n);switch(t){case Cd:return i*e;case Ld:return i*e;case Dd:return i*e*2;case mu:return i*e/r.components*r.byteLength;case _u:return i*e/r.components*r.byteLength;case Id:return i*e*2/r.components*r.byteLength;case gu:return i*e*2/r.components*r.byteLength;case Pd:return i*e*3/r.components*r.byteLength;case _n:return i*e*4/r.components*r.byteLength;case vu:return i*e*4/r.components*r.byteLength;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vc:case Sc:return Math.max(i,16)*Math.max(e,8)/4;case gc:case xc:return Math.max(i,8)*Math.max(e,8)/2;case yc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case La:case zc:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ud:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hc:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t1(i){switch(i){case Ui:case Td:return{byteLength:1,components:1};case Ys:case Ad:case Pi:return{byteLength:2,components:1};case du:case pu:return{byteLength:2,components:4};case rs:case fu:case Zn:return{byteLength:4,components:1};case Rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n1(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,T){return _?new OffscreenCanvas(I,T):Bo("canvas")}function g(I,T,G){let ee=1;const te=Ae(I);if((te.width>G||te.height>G)&&(ee=G/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ne=Math.floor(ee*te.width),Te=Math.floor(ee*te.height);f===void 0&&(f=v(ne,Te));const fe=T?v(ne,Te):f;return fe.width=ne,fe.height=Te,fe.getContext("2d").drawImage(I,0,0,ne,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ne+"x"+Te+")."),fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,T,G,ee,te=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ne=T;if(T===i.RED&&(G===i.FLOAT&&(ne=i.R32F),G===i.HALF_FLOAT&&(ne=i.R16F),G===i.UNSIGNED_BYTE&&(ne=i.R8)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.R8UI),G===i.UNSIGNED_SHORT&&(ne=i.R16UI),G===i.UNSIGNED_INT&&(ne=i.R32UI),G===i.BYTE&&(ne=i.R8I),G===i.SHORT&&(ne=i.R16I),G===i.INT&&(ne=i.R32I)),T===i.RG&&(G===i.FLOAT&&(ne=i.RG32F),G===i.HALF_FLOAT&&(ne=i.RG16F),G===i.UNSIGNED_BYTE&&(ne=i.RG8)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RG8UI),G===i.UNSIGNED_SHORT&&(ne=i.RG16UI),G===i.UNSIGNED_INT&&(ne=i.RG32UI),G===i.BYTE&&(ne=i.RG8I),G===i.SHORT&&(ne=i.RG16I),G===i.INT&&(ne=i.RG32I)),T===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),G===i.UNSIGNED_INT&&(ne=i.RGB32UI),G===i.BYTE&&(ne=i.RGB8I),G===i.SHORT&&(ne=i.RGB16I),G===i.INT&&(ne=i.RGB32I)),T===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),G===i.UNSIGNED_INT&&(ne=i.RGBA32UI),G===i.BYTE&&(ne=i.RGBA8I),G===i.SHORT&&(ne=i.RGBA16I),G===i.INT&&(ne=i.RGBA32I)),T===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),T===i.RGBA){const Te=te?Za:xt.getTransfer(ee);G===i.FLOAT&&(ne=i.RGBA32F),G===i.HALF_FLOAT&&(ne=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ne=Te===bt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(I,T){let G;return I?T===null||T===rs||T===Zs?G=i.DEPTH24_STENCIL8:T===Zn?G=i.DEPTH32F_STENCIL8:T===Ys&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===rs||T===Zs?G=i.DEPTH_COMPONENT24:T===Zn?G=i.DEPTH_COMPONENT32F:T===Ys&&(G=i.DEPTH_COMPONENT16),G}function L(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==wt?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function U(I){const T=I.target;T.removeEventListener("dispose",U),C(T),T.isVideoTexture&&u.delete(T)}function A(I){const T=I.target;T.removeEventListener("dispose",A),M(T)}function C(I){const T=n.get(I);if(T.__webglInit===void 0)return;const G=I.source,ee=d.get(G);if(ee){const te=ee[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(I),Object.keys(ee).length===0&&d.delete(G)}n.remove(I)}function w(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const G=I.source,ee=d.get(G);delete ee[T.__cacheKey],o.memory.textures--}function M(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let te=0;te<T.__webglFramebuffer[ee].length;te++)i.deleteFramebuffer(T.__webglFramebuffer[ee][te]);else i.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)i.deleteFramebuffer(T.__webglFramebuffer[ee]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=I.textures;for(let ee=0,te=G.length;ee<te;ee++){const ne=n.get(G[ee]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(G[ee])}n.remove(I)}let D=0;function z(){D=0}function O(){const I=D;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),D+=1,I}function W(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Y(I,T){const G=n.get(I);if(I.isVideoTexture&&xe(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){const ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,I,T);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function X(I,T){const G=n.get(I);if(I.version>0&&G.__version!==I.version){j(G,I,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function q(I,T){const G=n.get(I);if(I.version>0&&G.__version!==I.version){j(G,I,T);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function V(I,T){const G=n.get(I);if(I.version>0&&G.__version!==I.version){oe(G,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}const ce={[Fs]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},ie={[on]:i.NEAREST,[w_]:i.NEAREST_MIPMAP_NEAREST,[Zo]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[hl]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},pe={[R_]:i.NEVER,[U_]:i.ALWAYS,[C_]:i.LESS,[Nd]:i.LEQUAL,[P_]:i.EQUAL,[I_]:i.GEQUAL,[L_]:i.GREATER,[D_]:i.NOTEQUAL};function Me(I,T){if(T.type===Zn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===wt||T.magFilter===hl||T.magFilter===Zo||T.magFilter===Zi||T.minFilter===wt||T.minFilter===hl||T.minFilter===Zo||T.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ce[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ce[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ce[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ie[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===on||T.minFilter!==Zo&&T.minFilter!==Zi||T.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Be(I,T){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",U));const ee=T.source;let te=d.get(ee);te===void 0&&(te={},d.set(ee,te));const ne=W(T);if(ne!==I.__cacheKey){te[ne]===void 0&&(te[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[ne].usedTimes++;const Te=te[I.__cacheKey];Te!==void 0&&(te[I.__cacheKey].usedTimes--,Te.usedTimes===0&&w(T)),I.__cacheKey=ne,I.__webglTexture=te[ne].texture}return G}function j(I,T,G){let ee=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=i.TEXTURE_3D);const te=Be(I,T),ne=T.source;t.bindTexture(ee,I.__webglTexture,i.TEXTURE0+G);const Te=n.get(ne);if(ne.version!==Te.__version||te===!0){t.activeTexture(i.TEXTURE0+G);const fe=xt.getPrimaries(xt.workingColorSpace),Se=T.colorSpace===mn?null:xt.getPrimaries(T.colorSpace),Qe=T.colorSpace===mn||fe===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let me=g(T.image,!1,r.maxTextureSize);me=Oe(T,me);const Le=s.convert(T.format,T.colorSpace),Ue=s.convert(T.type);let ze=y(T.internalFormat,Le,Ue,T.colorSpace,T.isVideoTexture);Me(ee,T);let Re;const $e=T.mipmaps,ke=T.isVideoTexture!==!0,qe=Te.__version===void 0||te===!0,B=ne.dataReady,J=L(T,me);if(T.isDepthTexture)ze=S(T.format===$s,T.type),qe&&(ke?t.texStorage2D(i.TEXTURE_2D,1,ze,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,ze,me.width,me.height,0,Le,Ue,null));else if(T.isDataTexture)if($e.length>0){ke&&qe&&t.texStorage2D(i.TEXTURE_2D,J,ze,$e[0].width,$e[0].height);for(let re=0,ue=$e.length;re<ue;re++)Re=$e[re],ke?B&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Re.width,Re.height,Le,Ue,Re.data):t.texImage2D(i.TEXTURE_2D,re,ze,Re.width,Re.height,0,Le,Ue,Re.data);T.generateMipmaps=!1}else ke?(qe&&t.texStorage2D(i.TEXTURE_2D,J,ze,me.width,me.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Le,Ue,me.data)):t.texImage2D(i.TEXTURE_2D,0,ze,me.width,me.height,0,Le,Ue,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ke&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,ze,$e[0].width,$e[0].height,me.depth);for(let re=0,ue=$e.length;re<ue;re++)if(Re=$e[re],T.format!==_n)if(Le!==null)if(ke){if(B)if(T.layerUpdates.size>0){const Pe=nf(Re.width,Re.height,T.format,T.type);for(const De of T.layerUpdates){const nt=Re.data.subarray(De*Pe/Re.data.BYTES_PER_ELEMENT,(De+1)*Pe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,De,Re.width,Re.height,1,Le,nt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Re.width,Re.height,me.depth,Le,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,ze,Re.width,Re.height,me.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Re.width,Re.height,me.depth,Le,Ue,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,ze,Re.width,Re.height,me.depth,0,Le,Ue,Re.data)}else{ke&&qe&&t.texStorage2D(i.TEXTURE_2D,J,ze,$e[0].width,$e[0].height);for(let re=0,ue=$e.length;re<ue;re++)Re=$e[re],T.format!==_n?Le!==null?ke?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,re,ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?B&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Re.width,Re.height,Le,Ue,Re.data):t.texImage2D(i.TEXTURE_2D,re,ze,Re.width,Re.height,0,Le,Ue,Re.data)}else if(T.isDataArrayTexture)if(ke){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,ze,me.width,me.height,me.depth),B)if(T.layerUpdates.size>0){const re=nf(me.width,me.height,T.format,T.type);for(const ue of T.layerUpdates){const Pe=me.data.subarray(ue*re/me.data.BYTES_PER_ELEMENT,(ue+1)*re/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,me.width,me.height,1,Le,Ue,Pe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Le,Ue,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,me.width,me.height,me.depth,0,Le,Ue,me.data);else if(T.isData3DTexture)ke?(qe&&t.texStorage3D(i.TEXTURE_3D,J,ze,me.width,me.height,me.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Le,Ue,me.data)):t.texImage3D(i.TEXTURE_3D,0,ze,me.width,me.height,me.depth,0,Le,Ue,me.data);else if(T.isFramebufferTexture){if(qe)if(ke)t.texStorage2D(i.TEXTURE_2D,J,ze,me.width,me.height);else{let re=me.width,ue=me.height;for(let Pe=0;Pe<J;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,ze,re,ue,0,Le,Ue,null),re>>=1,ue>>=1}}else if($e.length>0){if(ke&&qe){const re=Ae($e[0]);t.texStorage2D(i.TEXTURE_2D,J,ze,re.width,re.height)}for(let re=0,ue=$e.length;re<ue;re++)Re=$e[re],ke?B&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Le,Ue,Re):t.texImage2D(i.TEXTURE_2D,re,ze,Le,Ue,Re);T.generateMipmaps=!1}else if(ke){if(qe){const re=Ae(me);t.texStorage2D(i.TEXTURE_2D,J,ze,re.width,re.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ue,me)}else t.texImage2D(i.TEXTURE_2D,0,ze,Le,Ue,me);m(T)&&p(ee),Te.__version=ne.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function oe(I,T,G){if(T.image.length!==6)return;const ee=Be(I,T),te=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);const ne=n.get(te);if(te.version!==ne.__version||ee===!0){t.activeTexture(i.TEXTURE0+G);const Te=xt.getPrimaries(xt.workingColorSpace),fe=T.colorSpace===mn?null:xt.getPrimaries(T.colorSpace),Se=T.colorSpace===mn||Te===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Qe=T.isCompressedTexture||T.image[0].isCompressedTexture,me=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let ue=0;ue<6;ue++)!Qe&&!me?Le[ue]=g(T.image[ue],!0,r.maxCubemapSize):Le[ue]=me?T.image[ue].image:T.image[ue],Le[ue]=Oe(T,Le[ue]);const Ue=Le[0],ze=s.convert(T.format,T.colorSpace),Re=s.convert(T.type),$e=y(T.internalFormat,ze,Re,T.colorSpace),ke=T.isVideoTexture!==!0,qe=ne.__version===void 0||ee===!0,B=te.dataReady;let J=L(T,Ue);Me(i.TEXTURE_CUBE_MAP,T);let re;if(Qe){ke&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,J,$e,Ue.width,Ue.height);for(let ue=0;ue<6;ue++){re=Le[ue].mipmaps;for(let Pe=0;Pe<re.length;Pe++){const De=re[Pe];T.format!==_n?ze!==null?ke?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,0,0,De.width,De.height,ze,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,$e,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,0,0,De.width,De.height,ze,Re,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,$e,De.width,De.height,0,ze,Re,De.data)}}}else{if(re=T.mipmaps,ke&&qe){re.length>0&&J++;const ue=Ae(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,J,$e,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(me){ke?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le[ue].width,Le[ue].height,ze,Re,Le[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,Le[ue].width,Le[ue].height,0,ze,Re,Le[ue].data);for(let Pe=0;Pe<re.length;Pe++){const nt=re[Pe].image[ue].image;ke?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,0,0,nt.width,nt.height,ze,Re,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,$e,nt.width,nt.height,0,ze,Re,nt.data)}}else{ke?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ze,Re,Le[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,ze,Re,Le[ue]);for(let Pe=0;Pe<re.length;Pe++){const De=re[Pe];ke?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,0,0,ze,Re,De.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,$e,ze,Re,De.image[ue])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),ne.__version=te.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ae(I,T,G,ee,te,ne){const Te=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),Se=y(G.internalFormat,Te,fe,G.colorSpace),Qe=n.get(T),me=n.get(G);if(me.__renderTarget=T,!Qe.__hasExternalTextures){const Le=Math.max(1,T.width>>ne),Ue=Math.max(1,T.height>>ne);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,Se,Le,Ue,T.depth,0,Te,fe,null):t.texImage2D(te,ne,Se,Le,Ue,0,Te,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Je(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,te,me.__webglTexture,0,We(T)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,te,me.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(I,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const ee=T.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,ne=S(T.stencilBuffer,te),Te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=We(T);Je(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ne,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ne,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ne,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,I)}else{const ee=T.textures;for(let te=0;te<ee.length;te++){const ne=ee[te],Te=s.convert(ne.format,ne.colorSpace),fe=s.convert(ne.type),Se=y(ne.internalFormat,Te,fe,ne.colorSpace),Qe=We(T);G&&Je(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Se,T.width,T.height):Je(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,Se,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Se,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(T.depthTexture);ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const te=ee.__webglTexture,ne=We(T);if(T.depthTexture.format===Os)Je(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(T.depthTexture.format===$s)Je(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Fe(I){const T=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const ee=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){const te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",te)};ee.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=ee}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");we(T.__webglFramebuffer,I)}else if(G){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=i.createRenderbuffer(),le(T.__webglDepthbuffer[ee],I,!1);else{const te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=T.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),le(T.__webglDepthbuffer,I,!1);else{const ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(I,T,G){const ee=n.get(I);T!==void 0&&ae(ee.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Fe(I)}function it(I){const T=I.texture,G=n.get(I),ee=n.get(T);I.addEventListener("dispose",A);const te=I.textures,ne=I.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=T.version,o.memory.textures++),ne){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let Se=0;Se<T.mipmaps.length;Se++)G.__webglFramebuffer[fe][Se]=i.createFramebuffer()}else G.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)G.__webglFramebuffer[fe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Te)for(let fe=0,Se=te.length;fe<Se;fe++){const Qe=n.get(te[fe]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Je(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const Se=te[fe];G.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const Qe=s.convert(Se.format,Se.colorSpace),me=s.convert(Se.type),Le=y(Se.internalFormat,Qe,me,Se.colorSpace,I.isXRRenderTarget===!0),Ue=We(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Le,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),le(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Me(i.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)ae(G.__webglFramebuffer[fe][Se],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Se);else ae(G.__webglFramebuffer[fe],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let fe=0,Se=te.length;fe<Se;fe++){const Qe=te[fe],me=n.get(Qe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Me(i.TEXTURE_2D,Qe),ae(G.__webglFramebuffer,I,Qe,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(Qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),Me(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)ae(G.__webglFramebuffer[Se],I,T,i.COLOR_ATTACHMENT0,fe,Se);else ae(G.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,fe,0);m(T)&&p(fe),t.unbindTexture()}I.depthBuffer&&Fe(I)}function Xe(I){const T=I.textures;for(let G=0,ee=T.length;G<ee;G++){const te=T[G];if(m(te)){const ne=E(I),Te=n.get(te).__webglTexture;t.bindTexture(ne,Te),p(ne),t.unbindTexture()}}}const rt=[],F=[];function Ge(I){if(I.samples>0){if(Je(I)===!1){const T=I.textures,G=I.width,ee=I.height;let te=i.COLOR_BUFFER_BIT;const ne=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(I),fe=T.length>1;if(fe)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const Qe=n.get(T[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,G,ee,0,0,G,ee,te,i.NEAREST),l===!0&&(rt.length=0,F.length=0,rt.push(i.COLOR_ATTACHMENT0+Se),I.depthBuffer&&I.resolveDepthBuffer===!1&&(rt.push(ne),F.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const Qe=n.get(T[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function We(I){return Math.min(r.maxSamples,I.samples)}function Je(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xe(I){const T=o.render.frame;u.get(I)!==T&&(u.set(I,T),I.update())}function Oe(I,T){const G=I.colorSpace,ee=I.format,te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Ni&&G!==mn&&(xt.getTransfer(G)===bt?(ee!==_n||te!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function Ae(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Je}function i1(i,e){function t(n,r=mn){let s;const o=xt.getTransfer(r);if(n===Ui)return i.UNSIGNED_BYTE;if(n===du)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Td)return i.BYTE;if(n===Ad)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===fu)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===Cd)return i.ALPHA;if(n===Pd)return i.RGB;if(n===_n)return i.RGBA;if(n===Ld)return i.LUMINANCE;if(n===Dd)return i.LUMINANCE_ALPHA;if(n===Os)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===mu)return i.RED;if(n===_u)return i.RED_INTEGER;if(n===Id)return i.RG;if(n===gu)return i.RG_INTEGER;if(n===vu)return i.RGBA_INTEGER;if(n===Aa||n===Ra||n===Ca||n===Pa)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===vc||n===xc||n===Sc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===Mc||n===wc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yc||n===Mc)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ec||n===bc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc||n===Dc||n===Ic||n===Uc||n===Nc||n===Fc||n===Oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ec)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===zc||n===Bc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===La)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ud||n===kc||n===Hc||n===Vc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===La)return s.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class r1 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Li extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s1={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),_=.02,v=.005;c.inputState.pinching&&d>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const o1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a1=`
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

}`;class l1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Lt({vertexShader:o1,fragmentShader:a1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c1 extends js{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,_=null,v=null;const g=new l1,m=t.getContextAttributes();let p=null,E=null;const y=[],S=[],L=new at;let U=null;const A=new Pn;A.viewport=new Dt;const C=new Pn;C.viewport=new Dt;const w=[A,C],M=new r1;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let oe=y[j];return oe===void 0&&(oe=new zl,y[j]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(j){let oe=y[j];return oe===void 0&&(oe=new zl,y[j]=oe),oe.getGripSpace()},this.getHand=function(j){let oe=y[j];return oe===void 0&&(oe=new zl,y[j]=oe),oe.getHandSpace()};function O(j){const oe=S.indexOf(j.inputSource);if(oe===-1)return;const ae=y[oe];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||o),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Y);for(let j=0;j<y.length;j++){const oe=S[j];oe!==null&&(S[j]=null,y[j].disconnect(oe))}D=null,z=null,g.reset(),e.setRenderTarget(p),_=null,d=null,f=null,r=null,E=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),E=new Qi(_.framebufferWidth,_.framebufferHeight,{format:_n,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ae=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?$s:Os,ae=m.stencil?Zs:rs);const we={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Qi(d.textureWidth,d.textureHeight,{format:_n,type:Ui,depthTexture:new wu(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(j){for(let oe=0;oe<j.removed.length;oe++){const ae=j.removed[oe],le=S.indexOf(ae);le>=0&&(S[le]=null,y[le].disconnect(ae))}for(let oe=0;oe<j.added.length;oe++){const ae=j.added[oe];let le=S.indexOf(ae);if(le===-1){for(let Fe=0;Fe<y.length;Fe++)if(Fe>=S.length){S.push(ae),le=Fe;break}else if(S[Fe]===null){S[Fe]=ae,le=Fe;break}if(le===-1)break}const we=y[le];we&&we.connect(ae)}}const X=new H,q=new H;function V(j,oe,ae){X.setFromMatrixPosition(oe.matrixWorld),q.setFromMatrixPosition(ae.matrixWorld);const le=X.distanceTo(q),we=oe.projectionMatrix.elements,Fe=ae.projectionMatrix.elements,Ne=we[14]/(we[10]-1),it=we[14]/(we[10]+1),Xe=(we[9]+1)/we[5],rt=(we[9]-1)/we[5],F=(we[8]-1)/we[0],Ge=(Fe[8]+1)/Fe[0],We=Ne*F,Je=Ne*Ge,xe=le/(-F+Ge),Oe=xe*-F;if(oe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Oe),j.translateZ(xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ae=Ne+xe,I=it+xe,T=We-Oe,G=Je+(le-Oe),ee=Xe*it/I*Ae,te=rt*it/I*Ae;j.projectionMatrix.makePerspective(T,G,ee,te,Ae,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,oe){oe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(oe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let oe=j.near,ae=j.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),M.near=C.near=A.near=oe,M.far=C.far=A.far=ae,(D!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,z=M.far),A.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;const le=j.parent,we=M.cameras;ce(M,le);for(let Fe=0;Fe<we.length;Fe++)ce(we[Fe],le);we.length===2?V(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),ie(j,M,le)};function ie(j,oe,ae){ae===null?j.matrix.copy(oe.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(oe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let pe=null;function Me(j,oe){if(u=oe.getViewerPose(c||o),v=oe,u!==null){const ae=u.views;_!==null&&(e.setRenderTargetFramebuffer(E,_.framebuffer),e.setRenderTarget(E));let le=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Fe=0;Fe<ae.length;Fe++){const Ne=ae[Fe];let it=null;if(_!==null)it=_.getViewport(Ne);else{const rt=f.getViewSubImage(d,Ne);it=rt.viewport,Fe===0&&(e.setRenderTargetTextures(E,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(E))}let Xe=w[Fe];Xe===void 0&&(Xe=new Pn,Xe.layers.enable(Fe),Xe.viewport=new Dt,w[Fe]=Xe),Xe.matrix.fromArray(Ne.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ne.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(it.x,it.y,it.width,it.height),Fe===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(Xe)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const Fe=f.getDepthInformation(ae[0]);Fe&&Fe.isValid&&Fe.texture&&g.init(e,Fe,r.renderState)}}for(let ae=0;ae<y.length;ae++){const le=S[ae],we=y[ae];le!==null&&we!==void 0&&we.update(le,oe,c||o)}pe&&pe(j,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const Be=new Yd;Be.setAnimationLoop(Me),this.setAnimationLoop=function(j){pe=j},this.dispose=function(){}}}const Br=new Qn,u1=new vt;function h1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&_(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===On&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===On&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),y=E.envMap,S=E.envMapRotation;y&&(m.envMap.value=y,Br.copy(S),Br.x*=-1,Br.y*=-1,Br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Br)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function f1(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const S=y.program;n.uniformBlockBinding(E,S)}function c(E,y){let S=r[E.id];S===void 0&&(v(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(E,L);const U=e.render.frame;s[E.id]!==U&&(d(E),s[E.id]=U)}function u(E){const y=f();E.__bindingPointIndex=y;const S=i.createBuffer(),L=E.__size,U=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],S=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let U=0,A=S.length;U<A;U++){const C=Array.isArray(S[U])?S[U]:[S[U]];for(let w=0,M=C.length;w<M;w++){const D=C[w];if(_(D,U,w,L)===!0){const z=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Y=0;Y<O.length;Y++){const X=O[Y],q=g(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,z+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(E,y,S,L){const U=E.value,A=y+"_"+S;if(L[A]===void 0)return typeof U=="number"||typeof U=="boolean"?L[A]=U:L[A]=U.clone(),!0;{const C=L[A];if(typeof U=="number"||typeof U=="boolean"){if(C!==U)return L[A]=U,!0}else if(C.equals(U)===!1)return C.copy(U),!0}return!1}function v(E){const y=E.uniforms;let S=0;const L=16;for(let A=0,C=y.length;A<C;A++){const w=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,D=w.length;M<D;M++){const z=w[M],O=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Y=O.length;W<Y;W++){const X=O[W],q=g(X),V=S%L,ce=V%q.boundary,ie=V+ce;S+=ce,ie!==0&&L-ie<q.storage&&(S+=L-ie),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=q.storage}}}const U=S%L;return U>0&&(S+=L-U),E.__size=S,E.__cache={},this}function g(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Eu{constructor(e={}){const{canvas:t=j_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=Di,this.toneMappingExposure=1;const S=this;let L=!1,U=0,A=0,C=null,w=-1,M=null;const D=new Dt,z=new Dt;let O=null;const W=new Ke(0);let Y=0,X=t.width,q=t.height,V=1,ce=null,ie=null;const pe=new Dt(0,0,X,q),Me=new Dt(0,0,X,q);let Be=!1;const j=new qd;let oe=!1,ae=!1;const le=new vt,we=new vt,Fe=new H,Ne=new Dt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function rt(){return C===null?V:1}let F=n;function Ge(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hu}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",De,!1),F===null){const x="webgl2";if(F=Ge(x,h),F===null)throw Ge(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let We,Je,xe,Oe,Ae,I,T,G,ee,te,ne,Te,fe,Se,Qe,me,Le,Ue,ze,Re,$e,ke,qe,B;function J(){We=new vx(F),We.init(),ke=new i1(F,We),Je=new fx(F,We,e,ke),xe=new e1(F,We),Je.reverseDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),Oe=new yx(F),Ae=new BS,I=new n1(F,We,xe,Ae,Je,ke,Oe),T=new px(S),G=new gx(S),ee=new R0(F),qe=new ux(F,ee),te=new xx(F,ee,Oe,qe),ne=new wx(F,te,ee,Oe),ze=new Mx(F,Je,I),me=new dx(Ae),Te=new zS(S,T,G,We,Je,qe,me),fe=new h1(S,Ae),Se=new HS,Qe=new YS(We),Ue=new cx(S,T,G,xe,ne,_,l),Le=new JS(S,ne,Je),B=new f1(F,Oe,Je,xe),Re=new hx(F,We,Oe),$e=new Sx(F,We,Oe),Oe.programs=Te.programs,S.capabilities=Je,S.extensions=We,S.properties=Ae,S.renderLists=Se,S.shadowMap=Le,S.state=xe,S.info=Oe}J();const re=new c1(S,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const h=We.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=We.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(h){h!==void 0&&(V=h,this.setSize(X,q,!1))},this.getSize=function(h){return h.set(X,q)},this.setSize=function(h,x,b=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=h,q=x,t.width=Math.floor(h*V),t.height=Math.floor(x*V),b===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(X*V,q*V).floor()},this.setDrawingBufferSize=function(h,x,b){X=h,q=x,V=b,t.width=Math.floor(h*b),t.height=Math.floor(x*b),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(D)},this.getViewport=function(h){return h.copy(pe)},this.setViewport=function(h,x,b,R){h.isVector4?pe.set(h.x,h.y,h.z,h.w):pe.set(h,x,b,R),xe.viewport(D.copy(pe).multiplyScalar(V).round())},this.getScissor=function(h){return h.copy(Me)},this.setScissor=function(h,x,b,R){h.isVector4?Me.set(h.x,h.y,h.z,h.w):Me.set(h,x,b,R),xe.scissor(z.copy(Me).multiplyScalar(V).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(h){xe.setScissorTest(Be=h)},this.setOpaqueSort=function(h){ce=h},this.setTransparentSort=function(h){ie=h},this.getClearColor=function(h){return h.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(h=!0,x=!0,b=!0){let R=0;if(h){let P=!1;if(C!==null){const N=C.texture.format;P=N===vu||N===gu||N===_u}if(P){const N=C.texture.type,k=N===Ui||N===rs||N===Ys||N===Zs||N===du||N===pu,Q=Ue.getClearColor(),Z=Ue.getClearAlpha(),$=Q.r,K=Q.g,se=Q.b;k?(v[0]=$,v[1]=K,v[2]=se,v[3]=Z,F.clearBufferuiv(F.COLOR,0,v)):(g[0]=$,g[1]=K,g[2]=se,g[3]=Z,F.clearBufferiv(F.COLOR,0,g))}else R|=F.COLOR_BUFFER_BIT}x&&(R|=F.DEPTH_BUFFER_BIT),b&&(R|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Se.dispose(),Qe.dispose(),Ae.dispose(),T.dispose(),G.dispose(),ne.dispose(),qe.dispose(),B.dispose(),Te.dispose(),re.dispose(),re.removeEventListener("sessionstart",br),re.removeEventListener("sessionend",Tr),ln.stop()};function ue(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const h=Oe.autoReset,x=Le.enabled,b=Le.autoUpdate,R=Le.needsUpdate,P=Le.type;J(),Oe.autoReset=h,Le.enabled=x,Le.autoUpdate=b,Le.needsUpdate=R,Le.type=P}function De(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function nt(h){const x=h.target;x.removeEventListener("dispose",nt),yt(x)}function yt(h){Ct(h),Ae.remove(h)}function Ct(h){const x=Ae.get(h).programs;x!==void 0&&(x.forEach(function(b){Te.releaseProgram(b)}),h.isShaderMaterial&&Te.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,b,R,P,N){x===null&&(x=it);const k=P.isMesh&&P.matrixWorld.determinant()<0,Q=os(h,x,b,R,P);xe.setMaterial(R,k);let Z=b.index,$=1;if(R.wireframe===!0){if(Z=te.getWireframeAttribute(b),Z===void 0)return;$=2}const K=b.drawRange,se=b.attributes.position;let de=K.start*$,_e=(K.start+K.count)*$;N!==null&&(de=Math.max(de,N.start*$),_e=Math.min(_e,(N.start+N.count)*$)),Z!==null?(de=Math.max(de,0),_e=Math.min(_e,Z.count)):se!=null&&(de=Math.max(de,0),_e=Math.min(_e,se.count));const be=_e-de;if(be<0||be===1/0)return;qe.setup(P,R,Q,b,Z);let Ee,ge=Re;if(Z!==null&&(Ee=ee.get(Z),ge=$e,ge.setIndex(Ee)),P.isMesh)R.wireframe===!0?(xe.setLineWidth(R.wireframeLinewidth*rt()),ge.setMode(F.LINES)):ge.setMode(F.TRIANGLES);else if(P.isLine){let he=R.linewidth;he===void 0&&(he=1),xe.setLineWidth(he*rt()),P.isLineSegments?ge.setMode(F.LINES):P.isLineLoop?ge.setMode(F.LINE_LOOP):ge.setMode(F.LINE_STRIP)}else P.isPoints?ge.setMode(F.POINTS):P.isSprite&&ge.setMode(F.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)ge.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))ge.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const he=P._multiDrawStarts,lt=P._multiDrawCounts,Ye=P._multiDrawCount,St=Z?ee.get(Z).bytesPerElement:1,pt=Ae.get(R).currentProgram.getUniforms();for(let et=0;et<Ye;et++)pt.setValue(F,"_gl_DrawID",et),ge.render(he[et]/St,lt[et])}else if(P.isInstancedMesh)ge.renderInstances(de,be,P.count);else if(b.isInstancedBufferGeometry){const he=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,lt=Math.min(b.instanceCount,he);ge.renderInstances(de,be,lt)}else ge.render(de,be)};function mt(h,x,b){h.transparent===!0&&h.side===yn&&h.forceSinglePass===!1?(h.side=On,h.needsUpdate=!0,yi(h,x,b),h.side=wr,h.needsUpdate=!0,yi(h,x,b),h.side=yn):yi(h,x,b)}this.compile=function(h,x,b=null){b===null&&(b=h),p=Qe.get(b),p.init(x),y.push(p),b.traverseVisible(function(P){P.isLight&&P.layers.test(x.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),h!==b&&h.traverseVisible(function(P){P.isLight&&P.layers.test(x.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();const R=new Set;return h.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const N=P.material;if(N)if(Array.isArray(N))for(let k=0;k<N.length;k++){const Q=N[k];mt(Q,b,P),R.add(Q)}else mt(N,b,P),R.add(N)}),y.pop(),p=null,R},this.compileAsync=function(h,x,b=null){const R=this.compile(h,x,b);return new Promise(P=>{function N(){if(R.forEach(function(k){Ae.get(k).currentProgram.isReady()&&R.delete(k)}),R.size===0){P(h);return}setTimeout(N,10)}We.get("KHR_parallel_shader_compile")!==null?N():setTimeout(N,10)})};let Mt=null;function wn(h){Mt&&Mt(h)}function br(){ln.stop()}function Tr(){ln.start()}const ln=new Yd;ln.setAnimationLoop(wn),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(h){Mt=h,re.setAnimationLoop(h),h===null?ln.stop():ln.start()},re.addEventListener("sessionstart",br),re.addEventListener("sessionend",Tr),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(x),x=re.getCamera()),h.isScene===!0&&h.onBeforeRender(S,h,x,C),p=Qe.get(h,y.length),p.init(x),y.push(p),we.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),j.setFromProjectionMatrix(we),ae=this.localClippingEnabled,oe=me.init(this.clippingPlanes,ae),m=Se.get(h,E.length),m.init(),E.push(m),re.enabled===!0&&re.isPresenting===!0){const N=S.xr.getDepthSensingMesh();N!==null&&xi(N,x,-1/0,S.sortObjects)}xi(h,x,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ce,ie),Xe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Xe&&Ue.addToRenderList(m,h),this.info.render.frame++,oe===!0&&me.beginShadows();const b=p.state.shadowsArray;Le.render(b,h,x),oe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const R=m.opaque,P=m.transmissive;if(p.setupLights(),x.isArrayCamera){const N=x.cameras;if(P.length>0)for(let k=0,Q=N.length;k<Q;k++){const Z=N[k];Ar(R,P,h,Z)}Xe&&Ue.render(h);for(let k=0,Q=N.length;k<Q;k++){const Z=N[k];tr(m,h,Z,Z.viewport)}}else P.length>0&&Ar(R,P,h,x),Xe&&Ue.render(h),tr(m,h,x);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),h.isScene===!0&&h.onAfterRender(S,h,x),qe.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],oe===!0&&me.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function xi(h,x,b,R){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)b=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||j.intersectsSprite(h)){R&&Ne.setFromMatrixPosition(h.matrixWorld).applyMatrix4(we);const k=ne.update(h),Q=h.material;Q.visible&&m.push(h,k,Q,b,Ne.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||j.intersectsObject(h))){const k=ne.update(h),Q=h.material;if(R&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Ne.copy(h.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),Ne.copy(k.boundingSphere.center)),Ne.applyMatrix4(h.matrixWorld).applyMatrix4(we)),Array.isArray(Q)){const Z=k.groups;for(let $=0,K=Z.length;$<K;$++){const se=Z[$],de=Q[se.materialIndex];de&&de.visible&&m.push(h,k,de,b,Ne.z,se)}}else Q.visible&&m.push(h,k,Q,b,Ne.z,null)}}const N=h.children;for(let k=0,Q=N.length;k<Q;k++)xi(N[k],x,b,R)}function tr(h,x,b,R){const P=h.opaque,N=h.transmissive,k=h.transparent;p.setupLightsView(b),oe===!0&&me.setGlobalState(S.clippingPlanes,b),R&&xe.viewport(D.copy(R)),P.length>0&&Si(P,x,b),N.length>0&&Si(N,x,b),k.length>0&&Si(k,x,b),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ar(h,x,b,R){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[R.id]===void 0&&(p.state.transmissionRenderTarget[R.id]=new Qi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Pi:Ui,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const N=p.state.transmissionRenderTarget[R.id],k=R.viewport||D;N.setSize(k.z,k.w);const Q=S.getRenderTarget();S.setRenderTarget(N),S.getClearColor(W),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&Ue.render(b);const Z=S.toneMapping;S.toneMapping=Di;const $=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),p.setupLightsView(R),oe===!0&&me.setGlobalState(S.clippingPlanes,R),Si(h,b,R),I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N),We.has("WEBGL_multisampled_render_to_texture")===!1){let K=!1;for(let se=0,de=x.length;se<de;se++){const _e=x[se],be=_e.object,Ee=_e.geometry,ge=_e.material,he=_e.group;if(ge.side===yn&&be.layers.test(R.layers)){const lt=ge.side;ge.side=On,ge.needsUpdate=!0,Ut(be,b,R,Ee,ge,he),ge.side=lt,ge.needsUpdate=!0,K=!0}}K===!0&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N))}S.setRenderTarget(Q),S.setClearColor(W,Y),$!==void 0&&(R.viewport=$),S.toneMapping=Z}function Si(h,x,b){const R=x.isScene===!0?x.overrideMaterial:null;for(let P=0,N=h.length;P<N;P++){const k=h[P],Q=k.object,Z=k.geometry,$=R===null?k.material:R,K=k.group;Q.layers.test(b.layers)&&Ut(Q,x,b,Z,$,K)}}function Ut(h,x,b,R,P,N){h.onBeforeRender(S,x,b,R,P,N),h.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),P.onBeforeRender(S,x,b,R,h,N),P.transparent===!0&&P.side===yn&&P.forceSinglePass===!1?(P.side=On,P.needsUpdate=!0,S.renderBufferDirect(b,x,R,P,h,N),P.side=wr,P.needsUpdate=!0,S.renderBufferDirect(b,x,R,P,h,N),P.side=yn):S.renderBufferDirect(b,x,R,P,h,N),h.onAfterRender(S,x,b,R,P,N)}function yi(h,x,b){x.isScene!==!0&&(x=it);const R=Ae.get(h),P=p.state.lights,N=p.state.shadowsArray,k=P.state.version,Q=Te.getParameters(h,P.state,N,x,b),Z=Te.getProgramCacheKey(Q);let $=R.programs;R.environment=h.isMeshStandardMaterial?x.environment:null,R.fog=x.fog,R.envMap=(h.isMeshStandardMaterial?G:T).get(h.envMap||R.environment),R.envMapRotation=R.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,$===void 0&&(h.addEventListener("dispose",nt),$=new Map,R.programs=$);let K=$.get(Z);if(K!==void 0){if(R.currentProgram===K&&R.lightsStateVersion===k)return Rr(h,Q),K}else Q.uniforms=Te.getUniforms(h),h.onBeforeCompile(Q,S),K=Te.acquireProgram(Q,Z),$.set(Z,K),R.uniforms=Q.uniforms;const se=R.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(se.clippingPlanes=me.uniform),Rr(h,Q),R.needsLights=ci(h),R.lightsStateVersion=k,R.needsLights&&(se.ambientLightColor.value=P.state.ambient,se.lightProbe.value=P.state.probe,se.directionalLights.value=P.state.directional,se.directionalLightShadows.value=P.state.directionalShadow,se.spotLights.value=P.state.spot,se.spotLightShadows.value=P.state.spotShadow,se.rectAreaLights.value=P.state.rectArea,se.ltc_1.value=P.state.rectAreaLTC1,se.ltc_2.value=P.state.rectAreaLTC2,se.pointLights.value=P.state.point,se.pointLightShadows.value=P.state.pointShadow,se.hemisphereLights.value=P.state.hemi,se.directionalShadowMap.value=P.state.directionalShadowMap,se.directionalShadowMatrix.value=P.state.directionalShadowMatrix,se.spotShadowMap.value=P.state.spotShadowMap,se.spotLightMatrix.value=P.state.spotLightMatrix,se.spotLightMap.value=P.state.spotLightMap,se.pointShadowMap.value=P.state.pointShadowMap,se.pointShadowMatrix.value=P.state.pointShadowMatrix),R.currentProgram=K,R.uniformsList=null,K}function li(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=Da.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function Rr(h,x){const b=Ae.get(h);b.outputColorSpace=x.outputColorSpace,b.batching=x.batching,b.batchingColor=x.batchingColor,b.instancing=x.instancing,b.instancingColor=x.instancingColor,b.instancingMorph=x.instancingMorph,b.skinning=x.skinning,b.morphTargets=x.morphTargets,b.morphNormals=x.morphNormals,b.morphColors=x.morphColors,b.morphTargetsCount=x.morphTargetsCount,b.numClippingPlanes=x.numClippingPlanes,b.numIntersection=x.numClipIntersection,b.vertexAlphas=x.vertexAlphas,b.vertexTangents=x.vertexTangents,b.toneMapping=x.toneMapping}function os(h,x,b,R,P){x.isScene!==!0&&(x=it),I.resetTextureUnits();const N=x.fog,k=R.isMeshStandardMaterial?x.environment:null,Q=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ni,Z=(R.isMeshStandardMaterial?G:T).get(R.envMap||k),$=R.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,K=!!b.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),se=!!b.morphAttributes.position,de=!!b.morphAttributes.normal,_e=!!b.morphAttributes.color;let be=Di;R.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(be=S.toneMapping);const Ee=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,ge=Ee!==void 0?Ee.length:0,he=Ae.get(R),lt=p.state.lights;if(oe===!0&&(ae===!0||h!==M)){const Ze=h===M&&R.id===w;me.setState(R,h,Ze)}let Ye=!1;R.version===he.__version?(he.needsLights&&he.lightsStateVersion!==lt.state.version||he.outputColorSpace!==Q||P.isBatchedMesh&&he.batching===!1||!P.isBatchedMesh&&he.batching===!0||P.isBatchedMesh&&he.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&he.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&he.instancing===!1||!P.isInstancedMesh&&he.instancing===!0||P.isSkinnedMesh&&he.skinning===!1||!P.isSkinnedMesh&&he.skinning===!0||P.isInstancedMesh&&he.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&he.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&he.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&he.instancingMorph===!1&&P.morphTexture!==null||he.envMap!==Z||R.fog===!0&&he.fog!==N||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==me.numPlanes||he.numIntersection!==me.numIntersection)||he.vertexAlphas!==$||he.vertexTangents!==K||he.morphTargets!==se||he.morphNormals!==de||he.morphColors!==_e||he.toneMapping!==be||he.morphTargetsCount!==ge)&&(Ye=!0):(Ye=!0,he.__version=R.version);let St=he.currentProgram;Ye===!0&&(St=yi(R,x,P));let pt=!1,et=!1,Et=!1;const ut=St.getUniforms(),st=he.uniforms;if(xe.useProgram(St.program)&&(pt=!0,et=!0,Et=!0),R.id!==w&&(w=R.id,et=!0),pt||M!==h){xe.buffers.depth.getReversed()?(le.copy(h.projectionMatrix),Q_(le),e0(le),ut.setValue(F,"projectionMatrix",le)):ut.setValue(F,"projectionMatrix",h.projectionMatrix),ut.setValue(F,"viewMatrix",h.matrixWorldInverse);const Nt=ut.map.cameraPosition;Nt!==void 0&&Nt.setValue(F,Fe.setFromMatrixPosition(h.matrixWorld)),Je.logarithmicDepthBuffer&&ut.setValue(F,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ut.setValue(F,"isOrthographic",h.isOrthographicCamera===!0),M!==h&&(M=h,et=!0,Et=!0)}if(P.isSkinnedMesh){ut.setOptional(F,P,"bindMatrix"),ut.setOptional(F,P,"bindMatrixInverse");const Ze=P.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ut.setValue(F,"boneTexture",Ze.boneTexture,I))}P.isBatchedMesh&&(ut.setOptional(F,P,"batchingTexture"),ut.setValue(F,"batchingTexture",P._matricesTexture,I),ut.setOptional(F,P,"batchingIdTexture"),ut.setValue(F,"batchingIdTexture",P._indirectTexture,I),ut.setOptional(F,P,"batchingColorTexture"),P._colorsTexture!==null&&ut.setValue(F,"batchingColorTexture",P._colorsTexture,I));const tt=b.morphAttributes;if((tt.position!==void 0||tt.normal!==void 0||tt.color!==void 0)&&ze.update(P,b,St),(et||he.receiveShadow!==P.receiveShadow)&&(he.receiveShadow=P.receiveShadow,ut.setValue(F,"receiveShadow",P.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(st.envMap.value=Z,st.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&x.environment!==null&&(st.envMapIntensity.value=x.environmentIntensity),et&&(ut.setValue(F,"toneMappingExposure",S.toneMappingExposure),he.needsLights&&ei(st,Et),N&&R.fog===!0&&fe.refreshFogUniforms(st,N),fe.refreshMaterialUniforms(st,R,V,q,p.state.transmissionRenderTarget[h.id]),Da.upload(F,li(he),st,I)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Da.upload(F,li(he),st,I),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ut.setValue(F,"center",P.center),ut.setValue(F,"modelViewMatrix",P.modelViewMatrix),ut.setValue(F,"normalMatrix",P.normalMatrix),ut.setValue(F,"modelMatrix",P.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const Ze=R.uniformsGroups;for(let Nt=0,Gt=Ze.length;Nt<Gt;Nt++){const ot=Ze[Nt];B.update(ot,St),B.bind(ot,St)}}return St}function ei(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function ci(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(h,x,b){Ae.get(h.texture).__webglTexture=x,Ae.get(h.depthTexture).__webglTexture=b;const R=Ae.get(h);R.__hasExternalTextures=!0,R.__autoAllocateDepthBuffer=b===void 0,R.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const b=Ae.get(h);b.__webglFramebuffer=x,b.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,b=0){C=h,U=x,A=b;let R=!0,P=null,N=!1,k=!1;if(h){const Z=Ae.get(h);if(Z.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(F.FRAMEBUFFER,null),R=!1;else if(Z.__webglFramebuffer===void 0)I.setupRenderTarget(h);else if(Z.__hasExternalTextures)I.rebindTextures(h,Ae.get(h.texture).__webglTexture,Ae.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const se=h.depthTexture;if(Z.__boundDepthTexture!==se){if(se!==null&&Ae.has(se)&&(h.width!==se.image.width||h.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(h)}}const $=h.texture;($.isData3DTexture||$.isDataArrayTexture||$.isCompressedArrayTexture)&&(k=!0);const K=Ae.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(K[x])?P=K[x][b]:P=K[x],N=!0):h.samples>0&&I.useMultisampledRTT(h)===!1?P=Ae.get(h).__webglMultisampledFramebuffer:Array.isArray(K)?P=K[b]:P=K,D.copy(h.viewport),z.copy(h.scissor),O=h.scissorTest}else D.copy(pe).multiplyScalar(V).floor(),z.copy(Me).multiplyScalar(V).floor(),O=Be;if(xe.bindFramebuffer(F.FRAMEBUFFER,P)&&R&&xe.drawBuffers(h,P),xe.viewport(D),xe.scissor(z),xe.setScissorTest(O),N){const Z=Ae.get(h.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,Z.__webglTexture,b)}else if(k){const Z=Ae.get(h.texture),$=x||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.__webglTexture,b||0,$)}w=-1},this.readRenderTargetPixels=function(h,x,b,R,P,N,k){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Q=Ae.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&k!==void 0&&(Q=Q[k]),Q){xe.bindFramebuffer(F.FRAMEBUFFER,Q);try{const Z=h.texture,$=Z.format,K=Z.type;if(!Je.textureFormatReadable($)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-R&&b>=0&&b<=h.height-P&&F.readPixels(x,b,R,P,ke.convert($),ke.convert(K),N)}finally{const Z=C!==null?Ae.get(C).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(h,x,b,R,P,N,k){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Q=Ae.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&k!==void 0&&(Q=Q[k]),Q){const Z=h.texture,$=Z.format,K=Z.type;if(!Je.textureFormatReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-R&&b>=0&&b<=h.height-P){xe.bindFramebuffer(F.FRAMEBUFFER,Q);const se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.bufferData(F.PIXEL_PACK_BUFFER,N.byteLength,F.STREAM_READ),F.readPixels(x,b,R,P,ke.convert($),ke.convert(K),0);const de=C!==null?Ae.get(C).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,de);const _e=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await J_(F,_e,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,N),F.deleteBuffer(se),F.deleteSync(_e),N}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,b=0){h.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const R=Math.pow(2,-b),P=Math.floor(h.image.width*R),N=Math.floor(h.image.height*R),k=x!==null?x.x:0,Q=x!==null?x.y:0;I.setTexture2D(h,0),F.copyTexSubImage2D(F.TEXTURE_2D,b,0,0,k,Q,P,N),xe.unbindTexture()},this.copyTextureToTexture=function(h,x,b=null,R=null,P=0){h.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),R=arguments[0]||null,h=arguments[1],x=arguments[2],P=arguments[3]||0,b=null);let N,k,Q,Z,$,K,se,de,_e;const be=h.isCompressedTexture?h.mipmaps[P]:h.image;b!==null?(N=b.max.x-b.min.x,k=b.max.y-b.min.y,Q=b.isBox3?b.max.z-b.min.z:1,Z=b.min.x,$=b.min.y,K=b.isBox3?b.min.z:0):(N=be.width,k=be.height,Q=be.depth||1,Z=0,$=0,K=0),R!==null?(se=R.x,de=R.y,_e=R.z):(se=0,de=0,_e=0);const Ee=ke.convert(x.format),ge=ke.convert(x.type);let he;x.isData3DTexture?(I.setTexture3D(x,0),he=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(I.setTexture2DArray(x,0),he=F.TEXTURE_2D_ARRAY):(I.setTexture2D(x,0),he=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);const lt=F.getParameter(F.UNPACK_ROW_LENGTH),Ye=F.getParameter(F.UNPACK_IMAGE_HEIGHT),St=F.getParameter(F.UNPACK_SKIP_PIXELS),pt=F.getParameter(F.UNPACK_SKIP_ROWS),et=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Z),F.pixelStorei(F.UNPACK_SKIP_ROWS,$),F.pixelStorei(F.UNPACK_SKIP_IMAGES,K);const Et=h.isDataArrayTexture||h.isData3DTexture,ut=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const st=Ae.get(h),tt=Ae.get(x),Ze=Ae.get(st.__renderTarget),Nt=Ae.get(tt.__renderTarget);xe.bindFramebuffer(F.READ_FRAMEBUFFER,Ze.__webglFramebuffer),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Gt=0;Gt<Q;Gt++)Et&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(h).__webglTexture,P,K+Gt),h.isDepthTexture?(ut&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(x).__webglTexture,P,_e+Gt),F.blitFramebuffer(Z,$,N,k,se,de,N,k,F.DEPTH_BUFFER_BIT,F.NEAREST)):ut?F.copyTexSubImage3D(he,P,se,de,_e+Gt,Z,$,N,k):F.copyTexSubImage2D(he,P,se,de,_e+Gt,Z,$,N,k);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ut?h.isDataTexture||h.isData3DTexture?F.texSubImage3D(he,P,se,de,_e,N,k,Q,Ee,ge,be.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(he,P,se,de,_e,N,k,Q,Ee,be.data):F.texSubImage3D(he,P,se,de,_e,N,k,Q,Ee,ge,be):h.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,P,se,de,N,k,Ee,ge,be.data):h.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,P,se,de,be.width,be.height,Ee,be.data):F.texSubImage2D(F.TEXTURE_2D,P,se,de,N,k,Ee,ge,be);F.pixelStorei(F.UNPACK_ROW_LENGTH,lt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ye),F.pixelStorei(F.UNPACK_SKIP_PIXELS,St),F.pixelStorei(F.UNPACK_SKIP_ROWS,pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,et),P===0&&x.generateMipmaps&&F.generateMipmap(he),xe.unbindTexture()},this.copyTextureToTexture3D=function(h,x,b=null,R=null,P=0){return h.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),b=arguments[0]||null,R=arguments[1]||null,h=arguments[2],x=arguments[3],P=arguments[4]||0),vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,b,R,P)},this.initRenderTarget=function(h){Ae.get(h).__webglFramebuffer===void 0&&I.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?I.setTextureCube(h,0):h.isData3DTexture?I.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?I.setTexture2DArray(h,0):I.setTexture2D(h,0),xe.unbindTexture()},this.resetState=function(){U=0,A=0,C=null,xe.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}class ja extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bu extends an{constructor(e=null,t=1,n=1,r,s,o,a,l,c=on,u=on,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn extends Xt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class d1 extends an{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Va={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class p1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const _=c[f],v=c[f+1];if(_.global&&(_.lastIndex=0),_.test(u))return v}return null}}}const m1=new p1;class Vo{constructor(e){this.manager=e!==void 0?e:m1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gi={};class _1 extends Error{constructor(e,t){super(e),this.response=t}}class g1 extends Vo{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Va.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:r});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),_=d?parseInt(d):0,v=_!==0;let g=0;const m=new ReadableStream({start(p){E();function E(){f.read().then(({done:y,value:S})=>{if(y)p.close();else{g+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:_});for(let U=0,A=u.length;U<A;U++){const C=u[U];C.onProgress&&C.onProgress(L)}p.enqueue(S),E()}},y=>{p.error(y)})}}});return new Response(m)}else throw new _1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,_=new TextDecoder(d);return c.arrayBuffer().then(v=>_.decode(v))}}}).then(c=>{Va.add(e,c);const u=Gi[e];delete Gi[e];for(let f=0,d=u.length;f<d;f++){const _=u[f];_.onLoad&&_.onLoad(c)}}).catch(c=>{const u=Gi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let f=0,d=u.length;f<d;f++){const _=u[f];_.onError&&_.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class v1 extends Vo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Va.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Bo("img");function l(){u(),Va.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class x1 extends Vo{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new bu,a=new g1(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:gi,o.wrapT=c.wrapT!==void 0?c.wrapT:gi,o.magFilter=c.magFilter!==void 0?c.magFilter:wt,o.minFilter=c.minFilter!==void 0?c.minFilter:wt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Zi),c.mipmapCount===1&&(o.minFilter=wt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class Xr extends Vo{constructor(e){super(e)}load(e,t,n,r){const s=new an,o=new v1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Zr extends er{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var si=Uint8Array,Ps=Uint16Array,S1=Int32Array,Qd=new si([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ep=new si([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),y1=new si([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tp=function(i,e){for(var t=new Ps(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new S1(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},np=tp(Qd,2),ip=np.b,M1=np.r;ip[28]=258,M1[258]=28;var w1=tp(ep,0),E1=w1.b,Wc=new Ps(32768);for(var It=0;It<32768;++It){var hr=(It&43690)>>1|(It&21845)<<1;hr=(hr&52428)>>2|(hr&13107)<<2,hr=(hr&61680)>>4|(hr&3855)<<4,Wc[It]=((hr&65280)>>8|(hr&255)<<8)>>1}var bo=(function(i,e,t){for(var n=i.length,r=0,s=new Ps(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new Ps(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Ps(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],f=o[i[r]-1]++<<u,d=f|(1<<u)-1;f<=d;++f)a[Wc[f]>>l]=c}else for(a=new Ps(n),r=0;r<n;++r)i[r]&&(a[r]=Wc[o[i[r]-1]++]>>15-i[r]);return a}),Go=new si(288);for(var It=0;It<144;++It)Go[It]=8;for(var It=144;It<256;++It)Go[It]=9;for(var It=256;It<280;++It)Go[It]=7;for(var It=280;It<288;++It)Go[It]=8;var rp=new si(32);for(var It=0;It<32;++It)rp[It]=5;var b1=bo(Go,9,1),T1=bo(rp,5,1),Bl=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},di=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},kl=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},A1=function(i){return(i+7)/8|0},R1=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new si(i.subarray(e,t))},C1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],mi=function(i,e,t){var n=new Error(e||C1[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,mi),!t)throw n;return n},P1=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new si(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new si(r*3));var c=function(it){var Xe=t.length;if(it>Xe){var rt=new si(Math.max(Xe*2,it));rt.set(t),t=rt}},u=e.f||0,f=e.p||0,d=e.b||0,_=e.l,v=e.d,g=e.m,m=e.n,p=r*8;do{if(!_){u=di(i,f,1);var E=di(i,f+1,3);if(f+=3,E)if(E==1)_=b1,v=T1,g=9,m=5;else if(E==2){var U=di(i,f,31)+257,A=di(i,f+10,15)+4,C=U+di(i,f+5,31)+1;f+=14;for(var w=new si(C),M=new si(19),D=0;D<A;++D)M[y1[D]]=di(i,f+D*3,7);f+=A*3;for(var z=Bl(M),O=(1<<z)-1,W=bo(M,z,1),D=0;D<C;){var Y=W[di(i,f,O)];f+=Y&15;var y=Y>>4;if(y<16)w[D++]=y;else{var X=0,q=0;for(y==16?(q=3+di(i,f,3),f+=2,X=w[D-1]):y==17?(q=3+di(i,f,7),f+=3):y==18&&(q=11+di(i,f,127),f+=7);q--;)w[D++]=X}}var V=w.subarray(0,U),ce=w.subarray(U);g=Bl(V),m=Bl(ce),_=bo(V,g,1),v=bo(ce,m,1)}else mi(1);else{var y=A1(f)+4,S=i[y-4]|i[y-3]<<8,L=y+S;if(L>r){l&&mi(0);break}a&&c(d+S),t.set(i.subarray(y,L),d),e.b=d+=S,e.p=f=L*8,e.f=u;continue}if(f>p){l&&mi(0);break}}a&&c(d+131072);for(var ie=(1<<g)-1,pe=(1<<m)-1,Me=f;;Me=f){var X=_[kl(i,f)&ie],Be=X>>4;if(f+=X&15,f>p){l&&mi(0);break}if(X||mi(2),Be<256)t[d++]=Be;else if(Be==256){Me=f,_=null;break}else{var j=Be-254;if(Be>264){var D=Be-257,oe=Qd[D];j=di(i,f,(1<<oe)-1)+ip[D],f+=oe}var ae=v[kl(i,f)&pe],le=ae>>4;ae||mi(3),f+=ae&15;var ce=E1[le];if(le>3){var oe=ep[le];ce+=kl(i,f)&(1<<oe)-1,f+=oe}if(f>p){l&&mi(0);break}a&&c(d+131072);var we=d+j;if(d<ce){var Fe=s-ce,Ne=Math.min(ce,we);for(Fe+d<0&&mi(3);d<Ne;++d)t[d]=n[Fe+d]}for(;d<we;++d)t[d]=t[d-ce]}}e.l=_,e.p=Me,e.b=d,e.f=u,_&&(u=1,e.m=g,e.d=v,e.n=m)}while(!u);return d!=t.length&&o?R1(t,0,d):t.subarray(0,d)},L1=new si(0),D1=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&mi(6,"invalid zlib data"),(i[1]>>5&1)==1&&mi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function ma(i,e){return P1(i.subarray(D1(i),-4),{i:2},e,e)}var I1=typeof TextDecoder<"u"&&new TextDecoder,U1=0;try{I1.decode(L1,{stream:!0}),U1=1}catch{}class N1 extends x1{constructor(e){super(e),this.type=Pi}parse(e){const w=Math.pow(2.7182818,2.2);function M(h,x){let b=0;for(let P=0;P<65536;++P)(P==0||h[P>>3]&1<<(P&7))&&(x[b++]=P);const R=b-1;for(;b<65536;)x[b++]=0;return R}function D(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const z={l:0,c:0,lc:0};function O(h,x,b,R,P){for(;b<h;)x=x<<8|Re(R,P),b+=8;b-=h,z.l=x>>b&(1<<h)-1,z.c=x,z.lc=b}const W=new Array(59);function Y(h){for(let b=0;b<=58;++b)W[b]=0;for(let b=0;b<65537;++b)W[h[b]]+=1;let x=0;for(let b=58;b>0;--b){const R=x+W[b]>>1;W[b]=x,x=R}for(let b=0;b<65537;++b){const R=h[b];R>0&&(h[b]=R|W[R]++<<6)}}function X(h,x,b,R,P,N){const k=x;let Q=0,Z=0;for(;R<=P;R++){if(k.value-x.value>b)return!1;O(6,Q,Z,h,k);const $=z.l;if(Q=z.c,Z=z.lc,N[R]=$,$==63){if(k.value-x.value>b)throw new Error("Something wrong with hufUnpackEncTable");O(8,Q,Z,h,k);let K=z.l+6;if(Q=z.c,Z=z.lc,R+K>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)N[R++]=0;R--}else if($>=59){let K=$-59+2;if(R+K>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)N[R++]=0;R--}}Y(N)}function q(h){return h&63}function V(h){return h>>6}function ce(h,x,b,R){for(;x<=b;x++){const P=V(h[x]),N=q(h[x]);if(P>>N)throw new Error("Invalid table entry");if(N>14){const k=R[P>>N-14];if(k.len)throw new Error("Invalid table entry");if(k.lit++,k.p){const Q=k.p;k.p=new Array(k.lit);for(let Z=0;Z<k.lit-1;++Z)k.p[Z]=Q[Z]}else k.p=new Array(1);k.p[k.lit-1]=x}else if(N){let k=0;for(let Q=1<<14-N;Q>0;Q--){const Z=R[(P<<14-N)+k];if(Z.len||Z.p)throw new Error("Invalid table entry");Z.len=N,Z.lit=x,k++}}}return!0}const ie={c:0,lc:0};function pe(h,x,b,R){h=h<<8|Re(b,R),x+=8,ie.c=h,ie.lc=x}const Me={c:0,lc:0};function Be(h,x,b,R,P,N,k,Q,Z){if(h==x){R<8&&(pe(b,R,P,N),b=ie.c,R=ie.lc),R-=8;let $=b>>R;if($=new Uint8Array([$])[0],Q.value+$>Z)return!1;const K=k[Q.value-1];for(;$-- >0;)k[Q.value++]=K}else if(Q.value<Z)k[Q.value++]=h;else return!1;Me.c=b,Me.lc=R}function j(h){return h&65535}function oe(h){const x=j(h);return x>32767?x-65536:x}const ae={a:0,b:0};function le(h,x){const b=oe(h),P=oe(x),N=b+(P&1)+(P>>1),k=N,Q=N-P;ae.a=k,ae.b=Q}function we(h,x){const b=j(h),R=j(x),P=b-(R>>1)&65535,N=R+P-32768&65535;ae.a=N,ae.b=P}function Fe(h,x,b,R,P,N,k){const Q=k<16384,Z=b>P?P:b;let $=1,K,se;for(;$<=Z;)$<<=1;for($>>=1,K=$,$>>=1;$>=1;){se=0;const de=se+N*(P-K),_e=N*$,be=N*K,Ee=R*$,ge=R*K;let he,lt,Ye,St;for(;se<=de;se+=be){let pt=se;const et=se+R*(b-K);for(;pt<=et;pt+=ge){const Et=pt+Ee,ut=pt+_e,st=ut+Ee;Q?(le(h[pt+x],h[ut+x]),he=ae.a,Ye=ae.b,le(h[Et+x],h[st+x]),lt=ae.a,St=ae.b,le(he,lt),h[pt+x]=ae.a,h[Et+x]=ae.b,le(Ye,St),h[ut+x]=ae.a,h[st+x]=ae.b):(we(h[pt+x],h[ut+x]),he=ae.a,Ye=ae.b,we(h[Et+x],h[st+x]),lt=ae.a,St=ae.b,we(he,lt),h[pt+x]=ae.a,h[Et+x]=ae.b,we(Ye,St),h[ut+x]=ae.a,h[st+x]=ae.b)}if(b&$){const Et=pt+_e;Q?le(h[pt+x],h[Et+x]):we(h[pt+x],h[Et+x]),he=ae.a,h[Et+x]=ae.b,h[pt+x]=he}}if(P&$){let pt=se;const et=se+R*(b-K);for(;pt<=et;pt+=ge){const Et=pt+Ee;Q?le(h[pt+x],h[Et+x]):we(h[pt+x],h[Et+x]),he=ae.a,h[Et+x]=ae.b,h[pt+x]=he}}K=$,$>>=1}return se}function Ne(h,x,b,R,P,N,k,Q,Z){let $=0,K=0;const se=k,de=Math.trunc(R.value+(P+7)/8);for(;R.value<de;)for(pe($,K,b,R),$=ie.c,K=ie.lc;K>=14;){const be=$>>K-14&16383,Ee=x[be];if(Ee.len)K-=Ee.len,Be(Ee.lit,N,$,K,b,R,Q,Z,se),$=Me.c,K=Me.lc;else{if(!Ee.p)throw new Error("hufDecode issues");let ge;for(ge=0;ge<Ee.lit;ge++){const he=q(h[Ee.p[ge]]);for(;K<he&&R.value<de;)pe($,K,b,R),$=ie.c,K=ie.lc;if(K>=he&&V(h[Ee.p[ge]])==($>>K-he&(1<<he)-1)){K-=he,Be(Ee.p[ge],N,$,K,b,R,Q,Z,se),$=Me.c,K=Me.lc;break}}if(ge==Ee.lit)throw new Error("hufDecode issues")}}const _e=8-P&7;for($>>=_e,K-=_e;K>0;){const be=x[$<<14-K&16383];if(be.len)K-=be.len,Be(be.lit,N,$,K,b,R,Q,Z,se),$=Me.c,K=Me.lc;else throw new Error("hufDecode issues")}return!0}function it(h,x,b,R,P,N){const k={value:0},Q=b.value,Z=ze(x,b),$=ze(x,b);b.value+=4;const K=ze(x,b);if(b.value+=4,Z<0||Z>=65537||$<0||$>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const se=new Array(65537),de=new Array(16384);D(de);const _e=R-(b.value-Q);if(X(h,b,_e,Z,$,se),K>8*(R-(b.value-Q)))throw new Error("Something wrong with hufUncompress");ce(se,Z,$,de),Ne(se,de,h,b,K,$,N,P,k)}function Xe(h,x,b){for(let R=0;R<b;++R)x[R]=h[x[R]]}function rt(h){for(let x=1;x<h.length;x++){const b=h[x-1]+h[x]-128;h[x]=b}}function F(h,x){let b=0,R=Math.floor((h.length+1)/2),P=0;const N=h.length-1;for(;!(P>N||(x[P++]=h[b++],P>N));)x[P++]=h[R++]}function Ge(h){let x=h.byteLength;const b=new Array;let R=0;const P=new DataView(h);for(;x>0;){const N=P.getInt8(R++);if(N<0){const k=-N;x-=k+1;for(let Q=0;Q<k;Q++)b.push(P.getUint8(R++))}else{const k=N;x-=2;const Q=P.getUint8(R++);for(let Z=0;Z<k+1;Z++)b.push(Q)}}return b}function We(h,x,b,R,P,N){let k=new DataView(N.buffer);const Q=b[h.idx[0]].width,Z=b[h.idx[0]].height,$=3,K=Math.floor(Q/8),se=Math.ceil(Q/8),de=Math.ceil(Z/8),_e=Q-(se-1)*8,be=Z-(de-1)*8,Ee={value:0},ge=new Array($),he=new Array($),lt=new Array($),Ye=new Array($),St=new Array($);for(let et=0;et<$;++et)St[et]=x[h.idx[et]],ge[et]=et<1?0:ge[et-1]+se*de,he[et]=new Float32Array(64),lt[et]=new Uint16Array(64),Ye[et]=new Uint16Array(se*64);for(let et=0;et<de;++et){let Et=8;et==de-1&&(Et=be);let ut=8;for(let tt=0;tt<se;++tt){tt==se-1&&(ut=_e);for(let Ze=0;Ze<$;++Ze)lt[Ze].fill(0),lt[Ze][0]=P[ge[Ze]++],Je(Ee,R,lt[Ze]),xe(lt[Ze],he[Ze]),Oe(he[Ze]);Ae(he);for(let Ze=0;Ze<$;++Ze)I(he[Ze],Ye[Ze],tt*64)}let st=0;for(let tt=0;tt<$;++tt){const Ze=b[h.idx[tt]].type;for(let Nt=8*et;Nt<8*et+Et;++Nt){st=St[tt][Nt];for(let Gt=0;Gt<K;++Gt){const ot=Gt*64+(Nt&7)*8;k.setUint16(st+0*Ze,Ye[tt][ot+0],!0),k.setUint16(st+2*Ze,Ye[tt][ot+1],!0),k.setUint16(st+4*Ze,Ye[tt][ot+2],!0),k.setUint16(st+6*Ze,Ye[tt][ot+3],!0),k.setUint16(st+8*Ze,Ye[tt][ot+4],!0),k.setUint16(st+10*Ze,Ye[tt][ot+5],!0),k.setUint16(st+12*Ze,Ye[tt][ot+6],!0),k.setUint16(st+14*Ze,Ye[tt][ot+7],!0),st+=16*Ze}}if(K!=se)for(let Nt=8*et;Nt<8*et+Et;++Nt){const Gt=St[tt][Nt]+8*K*2*Ze,ot=K*64+(Nt&7)*8;for(let En=0;En<ut;++En)k.setUint16(Gt+En*2*Ze,Ye[tt][ot+En],!0)}}}const pt=new Uint16Array(Q);k=new DataView(N.buffer);for(let et=0;et<$;++et){b[h.idx[et]].decoded=!0;const Et=b[h.idx[et]].type;if(b[et].type==2)for(let ut=0;ut<Z;++ut){const st=St[et][ut];for(let tt=0;tt<Q;++tt)pt[tt]=k.getUint16(st+tt*2*Et,!0);for(let tt=0;tt<Q;++tt)k.setFloat32(st+tt*2*Et,J(pt[tt]),!0)}}}function Je(h,x,b){let R,P=1;for(;P<64;)R=x[h.value],R==65280?P=64:R>>8==255?P+=R&255:(b[P]=R,P++),h.value++}function xe(h,x){x[0]=J(h[0]),x[1]=J(h[1]),x[2]=J(h[5]),x[3]=J(h[6]),x[4]=J(h[14]),x[5]=J(h[15]),x[6]=J(h[27]),x[7]=J(h[28]),x[8]=J(h[2]),x[9]=J(h[4]),x[10]=J(h[7]),x[11]=J(h[13]),x[12]=J(h[16]),x[13]=J(h[26]),x[14]=J(h[29]),x[15]=J(h[42]),x[16]=J(h[3]),x[17]=J(h[8]),x[18]=J(h[12]),x[19]=J(h[17]),x[20]=J(h[25]),x[21]=J(h[30]),x[22]=J(h[41]),x[23]=J(h[43]),x[24]=J(h[9]),x[25]=J(h[11]),x[26]=J(h[18]),x[27]=J(h[24]),x[28]=J(h[31]),x[29]=J(h[40]),x[30]=J(h[44]),x[31]=J(h[53]),x[32]=J(h[10]),x[33]=J(h[19]),x[34]=J(h[23]),x[35]=J(h[32]),x[36]=J(h[39]),x[37]=J(h[45]),x[38]=J(h[52]),x[39]=J(h[54]),x[40]=J(h[20]),x[41]=J(h[22]),x[42]=J(h[33]),x[43]=J(h[38]),x[44]=J(h[46]),x[45]=J(h[51]),x[46]=J(h[55]),x[47]=J(h[60]),x[48]=J(h[21]),x[49]=J(h[34]),x[50]=J(h[37]),x[51]=J(h[47]),x[52]=J(h[50]),x[53]=J(h[56]),x[54]=J(h[59]),x[55]=J(h[61]),x[56]=J(h[35]),x[57]=J(h[36]),x[58]=J(h[48]),x[59]=J(h[49]),x[60]=J(h[57]),x[61]=J(h[58]),x[62]=J(h[62]),x[63]=J(h[63])}function Oe(h){const x=.5*Math.cos(.7853975),b=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),P=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),k=.5*Math.cos(3*3.14159/8),Q=.5*Math.cos(7*3.14159/16),Z=new Array(4),$=new Array(4),K=new Array(4),se=new Array(4);for(let de=0;de<8;++de){const _e=de*8;Z[0]=R*h[_e+2],Z[1]=k*h[_e+2],Z[2]=R*h[_e+6],Z[3]=k*h[_e+6],$[0]=b*h[_e+1]+P*h[_e+3]+N*h[_e+5]+Q*h[_e+7],$[1]=P*h[_e+1]-Q*h[_e+3]-b*h[_e+5]-N*h[_e+7],$[2]=N*h[_e+1]-b*h[_e+3]+Q*h[_e+5]+P*h[_e+7],$[3]=Q*h[_e+1]-N*h[_e+3]+P*h[_e+5]-b*h[_e+7],K[0]=x*(h[_e+0]+h[_e+4]),K[3]=x*(h[_e+0]-h[_e+4]),K[1]=Z[0]+Z[3],K[2]=Z[1]-Z[2],se[0]=K[0]+K[1],se[1]=K[3]+K[2],se[2]=K[3]-K[2],se[3]=K[0]-K[1],h[_e+0]=se[0]+$[0],h[_e+1]=se[1]+$[1],h[_e+2]=se[2]+$[2],h[_e+3]=se[3]+$[3],h[_e+4]=se[3]-$[3],h[_e+5]=se[2]-$[2],h[_e+6]=se[1]-$[1],h[_e+7]=se[0]-$[0]}for(let de=0;de<8;++de)Z[0]=R*h[16+de],Z[1]=k*h[16+de],Z[2]=R*h[48+de],Z[3]=k*h[48+de],$[0]=b*h[8+de]+P*h[24+de]+N*h[40+de]+Q*h[56+de],$[1]=P*h[8+de]-Q*h[24+de]-b*h[40+de]-N*h[56+de],$[2]=N*h[8+de]-b*h[24+de]+Q*h[40+de]+P*h[56+de],$[3]=Q*h[8+de]-N*h[24+de]+P*h[40+de]-b*h[56+de],K[0]=x*(h[de]+h[32+de]),K[3]=x*(h[de]-h[32+de]),K[1]=Z[0]+Z[3],K[2]=Z[1]-Z[2],se[0]=K[0]+K[1],se[1]=K[3]+K[2],se[2]=K[3]-K[2],se[3]=K[0]-K[1],h[0+de]=se[0]+$[0],h[8+de]=se[1]+$[1],h[16+de]=se[2]+$[2],h[24+de]=se[3]+$[3],h[32+de]=se[3]-$[3],h[40+de]=se[2]-$[2],h[48+de]=se[1]-$[1],h[56+de]=se[0]-$[0]}function Ae(h){for(let x=0;x<64;++x){const b=h[0][x],R=h[1][x],P=h[2][x];h[0][x]=b+1.5747*P,h[1][x]=b-.1873*R-.4682*P,h[2][x]=b+1.8556*R}}function I(h,x,b){for(let R=0;R<64;++R)x[b+R]=Th.toHalfFloat(T(h[R]))}function T(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(w,Math.abs(h)-1)}function G(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function ee(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),b=new Uint8Array(Ge(x)),R=new Uint8Array(b.length);return rt(b),F(b,R),new DataView(R.buffer)}function te(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),b=ma(x),R=new Uint8Array(b.length);return rt(b),F(b,R),new DataView(R.buffer)}function ne(h){const x=h.viewer,b={value:h.offset.value},R=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),P=new Uint8Array(8192);let N=0;const k=new Array(h.inputChannels.length);for(let be=0,Ee=h.inputChannels.length;be<Ee;be++)k[be]={},k[be].start=N,k[be].end=k[be].start,k[be].nx=h.columns,k[be].ny=h.lines,k[be].size=h.type,N+=k[be].nx*k[be].ny*k[be].size;const Q=re(x,b),Z=re(x,b);if(Z>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(Q<=Z)for(let be=0;be<Z-Q+1;be++)P[be+Q]=$e(x,b);const $=new Uint16Array(65536),K=M(P,$),se=ze(x,b);it(h.array,x,b,se,R,N);for(let be=0;be<h.inputChannels.length;++be){const Ee=k[be];for(let ge=0;ge<k[be].size;++ge)Fe(R,Ee.start+ge,Ee.nx,Ee.size,Ee.ny,Ee.nx*Ee.size,K)}Xe($,R,N);let de=0;const _e=new Uint8Array(R.buffer.byteLength);for(let be=0;be<h.lines;be++)for(let Ee=0;Ee<h.inputChannels.length;Ee++){const ge=k[Ee],he=ge.nx*ge.size,lt=new Uint8Array(R.buffer,ge.end*2,he*2);_e.set(lt,de),de+=he*2,ge.end+=he}return new DataView(_e.buffer)}function Te(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),b=ma(x),R=h.inputChannels.length*h.lines*h.columns*h.totalBytes,P=new ArrayBuffer(R),N=new DataView(P);let k=0,Q=0;const Z=new Array(4);for(let $=0;$<h.lines;$++)for(let K=0;K<h.inputChannels.length;K++){let se=0;switch(h.inputChannels[K].pixelType){case 1:Z[0]=k,Z[1]=Z[0]+h.columns,k=Z[1]+h.columns;for(let _e=0;_e<h.columns;++_e){const be=b[Z[0]++]<<8|b[Z[1]++];se+=be,N.setUint16(Q,se,!0),Q+=2}break;case 2:Z[0]=k,Z[1]=Z[0]+h.columns,Z[2]=Z[1]+h.columns,k=Z[2]+h.columns;for(let _e=0;_e<h.columns;++_e){const be=b[Z[0]++]<<24|b[Z[1]++]<<16|b[Z[2]++]<<8;se+=be,N.setUint32(Q,se,!0),Q+=4}break}}return N}function fe(h){const x=h.viewer,b={value:h.offset.value},R=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),P={version:ke(x,b),unknownUncompressedSize:ke(x,b),unknownCompressedSize:ke(x,b),acCompressedSize:ke(x,b),dcCompressedSize:ke(x,b),rleCompressedSize:ke(x,b),rleUncompressedSize:ke(x,b),rleRawSize:ke(x,b),totalAcUncompressedCount:ke(x,b),totalDcUncompressedCount:ke(x,b),acCompression:ke(x,b)};if(P.version<2)throw new Error("EXRLoader.parse: "+ei.compression+" version "+P.version+" is unsupported");const N=new Array;let k=re(x,b)-2;for(;k>0;){const Ee=Se(x.buffer,b),ge=$e(x,b),he=ge>>2&3,lt=(ge>>4)-1,Ye=new Int8Array([lt])[0],St=$e(x,b);N.push({name:Ee,index:Ye,type:St,compression:he}),k-=Ee.length+3}const Q=ei.channels,Z=new Array(h.inputChannels.length);for(let Ee=0;Ee<h.inputChannels.length;++Ee){const ge=Z[Ee]={},he=Q[Ee];ge.name=he.name,ge.compression=0,ge.decoded=!1,ge.type=he.pixelType,ge.pLinear=he.pLinear,ge.width=h.columns,ge.height=h.lines}const $={idx:new Array(3)};for(let Ee=0;Ee<h.inputChannels.length;++Ee){const ge=Z[Ee];for(let he=0;he<N.length;++he){const lt=N[he];ge.name==lt.name&&(ge.compression=lt.compression,lt.index>=0&&($.idx[lt.index]=Ee),ge.offset=Ee)}}let K,se,de;if(P.acCompressedSize>0)switch(P.acCompression){case 0:K=new Uint16Array(P.totalAcUncompressedCount),it(h.array,x,b,P.acCompressedSize,K,P.totalAcUncompressedCount);break;case 1:const Ee=h.array.slice(b.value,b.value+P.totalAcUncompressedCount),ge=ma(Ee);K=new Uint16Array(ge.buffer),b.value+=P.totalAcUncompressedCount;break}if(P.dcCompressedSize>0){const Ee={array:h.array,offset:b,size:P.dcCompressedSize};se=new Uint16Array(te(Ee).buffer),b.value+=P.dcCompressedSize}if(P.rleRawSize>0){const Ee=h.array.slice(b.value,b.value+P.rleCompressedSize),ge=ma(Ee);de=Ge(ge.buffer),b.value+=P.rleCompressedSize}let _e=0;const be=new Array(Z.length);for(let Ee=0;Ee<be.length;++Ee)be[Ee]=new Array;for(let Ee=0;Ee<h.lines;++Ee)for(let ge=0;ge<Z.length;++ge)be[ge].push(_e),_e+=Z[ge].width*h.type*2;We($,be,Z,K,se,R);for(let Ee=0;Ee<Z.length;++Ee){const ge=Z[Ee];if(!ge.decoded)switch(ge.compression){case 2:let he=0,lt=0;for(let Ye=0;Ye<h.lines;++Ye){let St=be[Ee][he];for(let pt=0;pt<ge.width;++pt){for(let et=0;et<2*ge.type;++et)R[St++]=de[lt+et*ge.width*ge.height];lt++}he++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(R.buffer)}function Se(h,x){const b=new Uint8Array(h);let R=0;for(;b[x.value+R]!=0;)R+=1;const P=new TextDecoder().decode(b.slice(x.value,x.value+R));return x.value=x.value+R+1,P}function Qe(h,x,b){const R=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+b));return x.value=x.value+b,R}function me(h,x){const b=Ue(h,x),R=ze(h,x);return[b,R]}function Le(h,x){const b=ze(h,x),R=ze(h,x);return[b,R]}function Ue(h,x){const b=h.getInt32(x.value,!0);return x.value=x.value+4,b}function ze(h,x){const b=h.getUint32(x.value,!0);return x.value=x.value+4,b}function Re(h,x){const b=h[x.value];return x.value=x.value+1,b}function $e(h,x){const b=h.getUint8(x.value);return x.value=x.value+1,b}const ke=function(h,x){let b;return"getBigInt64"in DataView.prototype?b=Number(h.getBigInt64(x.value,!0)):b=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,b};function qe(h,x){const b=h.getFloat32(x.value,!0);return x.value+=4,b}function B(h,x){return Th.toHalfFloat(qe(h,x))}function J(h){const x=(h&31744)>>10,b=h&1023;return(h>>15?-1:1)*(x?x===31?b?NaN:1/0:Math.pow(2,x-15)*(1+b/1024):6103515625e-14*(b/1024))}function re(h,x){const b=h.getUint16(x.value,!0);return x.value+=2,b}function ue(h,x){return J(re(h,x))}function Pe(h,x,b,R){const P=b.value,N=[];for(;b.value<P+R-1;){const k=Se(x,b),Q=Ue(h,b),Z=$e(h,b);b.value+=3;const $=Ue(h,b),K=Ue(h,b);N.push({name:k,pixelType:Q,pLinear:Z,xSampling:$,ySampling:K})}return b.value+=1,N}function De(h,x){const b=qe(h,x),R=qe(h,x),P=qe(h,x),N=qe(h,x),k=qe(h,x),Q=qe(h,x),Z=qe(h,x),$=qe(h,x);return{redX:b,redY:R,greenX:P,greenY:N,blueX:k,blueY:Q,whiteX:Z,whiteY:$}}function nt(h,x){const b=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=$e(h,x);return b[R]}function yt(h,x){const b=Ue(h,x),R=Ue(h,x),P=Ue(h,x),N=Ue(h,x);return{xMin:b,yMin:R,xMax:P,yMax:N}}function Ct(h,x){const b=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=$e(h,x);return b[R]}function mt(h,x){const b=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=$e(h,x);return b[R]}function Mt(h,x){const b=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],P=ze(h,x),N=ze(h,x),k=$e(h,x);return{xSize:P,ySize:N,levelMode:b[k&15],roundingMode:R[k>>4]}}function wn(h,x){const b=qe(h,x),R=qe(h,x);return[b,R]}function br(h,x){const b=qe(h,x),R=qe(h,x),P=qe(h,x);return[b,R,P]}function Tr(h,x,b,R,P){if(R==="string"||R==="stringvector"||R==="iccProfile")return Qe(x,b,P);if(R==="chlist")return Pe(h,x,b,P);if(R==="chromaticities")return De(h,b);if(R==="compression")return nt(h,b);if(R==="box2i")return yt(h,b);if(R==="envmap")return mt(h,b);if(R==="tiledesc")return Mt(h,b);if(R==="lineOrder")return Ct(h,b);if(R==="float")return qe(h,b);if(R==="v2f")return wn(h,b);if(R==="v3f")return br(h,b);if(R==="int")return Ue(h,b);if(R==="rational")return me(h,b);if(R==="timecode")return Le(h,b);if(R==="preview")return b.value+=P,"skipped";b.value+=P}function ln(h,x){const b=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(b):Math.ceil(b)}function xi(h,x,b){let R=0;switch(h.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=ln(Math.max(x,b),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function tr(h,x,b,R){const P=new Array(h);for(let N=0;N<h;N++){const k=1<<N;let Q=x/k|0;R=="ROUND_UP"&&Q*k<x&&(Q+=1);const Z=Math.max(Q,1);P[N]=(Z+b-1)/b|0}return P}function Ar(){const h=this,x=h.offset,b={value:0};for(let R=0;R<h.tileCount;R++){const P=Ue(h.viewer,x),N=Ue(h.viewer,x);x.value+=8,h.size=ze(h.viewer,x);const k=P*h.blockWidth,Q=N*h.blockHeight;h.columns=k+h.blockWidth>h.width?h.width-k:h.blockWidth,h.lines=Q+h.blockHeight>h.height?h.height-Q:h.blockHeight;const Z=h.columns*h.totalBytes,K=h.size<h.lines*Z?h.uncompress(h):G(h);x.value+=h.size;for(let se=0;se<h.lines;se++){const de=se*h.columns*h.totalBytes;for(let _e=0;_e<h.inputChannels.length;_e++){const be=ei.channels[_e].name,Ee=h.channelByteOffsets[be]*h.columns,ge=h.decodeChannels[be];if(ge===void 0)continue;b.value=de+Ee;const he=(h.height-(1+Q+se))*h.outLineWidth;for(let lt=0;lt<h.columns;lt++){const Ye=he+(lt+k)*h.outputChannels+ge;h.byteArray[Ye]=h.getter(K,b)}}}}}function Si(){const h=this,x=h.offset,b={value:0};for(let R=0;R<h.height/h.blockHeight;R++){const P=Ue(h.viewer,x)-ei.dataWindow.yMin;h.size=ze(h.viewer,x),h.lines=P+h.blockHeight>h.height?h.height-P:h.blockHeight;const N=h.columns*h.totalBytes,Q=h.size<h.lines*N?h.uncompress(h):G(h);x.value+=h.size;for(let Z=0;Z<h.blockHeight;Z++){const $=R*h.blockHeight,K=Z+h.scanOrder($);if(K>=h.height)continue;const se=Z*N,de=(h.height-1-K)*h.outLineWidth;for(let _e=0;_e<h.inputChannels.length;_e++){const be=ei.channels[_e].name,Ee=h.channelByteOffsets[be]*h.columns,ge=h.decodeChannels[be];if(ge!==void 0){b.value=se+Ee;for(let he=0;he<h.columns;he++){const lt=de+he*h.outputChannels+ge;h.byteArray[lt]=h.getter(Q,b)}}}}}}function Ut(h,x,b){const R={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");R.version=h.getUint8(4);const P=h.getUint8(5);R.spec={singleTile:!!(P&2),longName:!!(P&4),deepFormat:!!(P&8),multiPart:!!(P&16)},b.value=8;let N=!0;for(;N;){const k=Se(x,b);if(k==0)N=!1;else{const Q=Se(x,b),Z=ze(h,b),$=Tr(h,x,b,Q,Z);$===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${Q}'.`):R[k]=$}}if((P&-7)!=0)throw console.error("THREE.EXRHeader:",R),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return R}function yi(h,x,b,R,P){const N={size:0,viewer:x,array:b,offset:R,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Ni};switch(h.compression){case"NO_COMPRESSION":N.blockHeight=1,N.uncompress=G;break;case"RLE_COMPRESSION":N.blockHeight=1,N.uncompress=ee;break;case"ZIPS_COMPRESSION":N.blockHeight=1,N.uncompress=te;break;case"ZIP_COMPRESSION":N.blockHeight=16,N.uncompress=te;break;case"PIZ_COMPRESSION":N.blockHeight=32,N.uncompress=ne;break;case"PXR24_COMPRESSION":N.blockHeight=16,N.uncompress=Te;break;case"DWAA_COMPRESSION":N.blockHeight=32,N.uncompress=fe;break;case"DWAB_COMPRESSION":N.blockHeight=256,N.uncompress=fe;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const k={};for(const K of h.channels)switch(K.name){case"Y":case"R":case"G":case"B":case"A":k[K.name]=!0,N.type=K.pixelType}let Q=!1;if(k.R&&k.G&&k.B)Q=!k.A,N.outputChannels=4,N.decodeChannels={R:0,G:1,B:2,A:3};else if(k.Y)N.outputChannels=1,N.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(N.type==1)switch(P){case Zn:N.getter=ue;break;case Pi:N.getter=re;break}else if(N.type==2)switch(P){case Zn:N.getter=qe;break;case Pi:N.getter=B}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+h.compression+".");N.columns=N.width;const Z=N.width*N.height*N.outputChannels;switch(P){case Zn:N.byteArray=new Float32Array(Z),Q&&N.byteArray.fill(1,0,Z);break;case Pi:N.byteArray=new Uint16Array(Z),Q&&N.byteArray.fill(15360,0,Z);break;default:console.error("THREE.EXRLoader: unsupported type: ",P);break}let $=0;for(const K of h.channels)N.decodeChannels[K.name]!==void 0&&(N.channelByteOffsets[K.name]=$),$+=K.pixelType*2;if(N.totalBytes=$,N.outLineWidth=N.width*N.outputChannels,h.lineOrder==="INCREASING_Y"?N.scanOrder=K=>K:N.scanOrder=K=>N.height-1-K,N.outputChannels==4?(N.format=_n,N.colorSpace=Ni):(N.format=mu,N.colorSpace=mn),h.spec.singleTile){N.blockHeight=h.tiles.ySize,N.blockWidth=h.tiles.xSize;const K=xi(h.tiles,N.width,N.height),se=tr(K,N.width,h.tiles.xSize,h.tiles.roundingMode),de=tr(K,N.height,h.tiles.ySize,h.tiles.roundingMode);N.tileCount=se[0]*de[0];for(let _e=0;_e<K;_e++)for(let be=0;be<de[_e];be++)for(let Ee=0;Ee<se[_e];Ee++)ke(x,R);N.decode=Ar.bind(N)}else{N.blockWidth=N.width;const K=Math.ceil(N.height/N.blockHeight);for(let se=0;se<K;se++)ke(x,R);N.decode=Si.bind(N)}return N}const li={value:0},Rr=new DataView(e),os=new Uint8Array(e),ei=Ut(Rr,e,li),ci=yi(ei,Rr,os,li,this.type);return ci.decode(),{header:ei,width:ci.width,height:ci.height,data:ci.byteArray,format:ci.format,colorSpace:ci.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=wt,o.magFilter=wt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}async function Hn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),s=r.vertexCount,o=r.indexCount;let a=4+n;const l=new er,c=r.attributes;for(let u=0,f=c.length;u<f;u++){const d=c[u],_=d.id,v=_==="indices"?o:s,g=d.componentSize,m=globalThis[d.storageType],p=new m(t,a,v*g),E=m.BYTES_PER_ELEMENT;let y;if(d.needsPack){const S=d.packedComponents,L=S.length,U=d.storageType.indexOf("Int")===0,A=1<<E*8,C=U?A*.5:0,w=1/A;y=new Float32Array(v*g);for(let M=0,D=0;M<v;M++)for(let z=0;z<L;z++){const O=S[z];y[D]=(p[D]+C)*w*O.delta+O.from,D++}}else y=p;if(_==="indices"){let S=y;y instanceof Uint8Array&&(S=new Uint16Array(y.length),S.set(y)),l.setIndex(new Xt(S,1))}else l.setAttribute(_,new Xt(y,g));a+=v*g*E}return l.computeBoundingSphere(),l}const _a=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Hl={density:1,friction:2,restitution:.8},F1=40,Kr=8,O1=`
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
`,z1=`
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
uniform vec4 u_nearPositionRadiusList[${Kr}];
uniform vec3 u_nearColorList[${Kr}];

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

  for (int i = 0; i < ${Kr}; i++) {
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
  gi /= float(${Kr});

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
`,B1=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,k1=`
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
`;function H1(i){const e={...Hl},t={...Hl},n={...Hl};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function V1(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function rf(i,e,t,n,r){const s=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*s}class G1{constructor(e,t,n,r,s,o=!1){this.position=new H((s()-.5)*12,(s()-.5)*12,o?7+s():(s()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Dn().setFromEuler(new Qn(s()*Math.PI,s()*Math.PI,s()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new H,this.gravityAcc=new H}applyImpulse(){this.velocity.add(new H((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(F1),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function W1(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*_a.length),r=_a[n];const s=new ja,o=new Pn(25,1,.1,100);o.position.set(0,0,25);const a=new Eu({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Ni,a.toneMapping=Di;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,f=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[d,_]=await Promise.all([Hn(u),new Promise((F,Ge)=>{new N1().load(f,F,void 0,Ge)})]);_.minFilter=wt,_.magFilter=wt,_.generateMipmaps=!1,_.colorSpace=mn;const v=new H(10,10,5),g=H1(r),m=V1("balloonBody-25"),p=[],E=[],y=[],S=[],L=Array.from({length:Kr},()=>new Dt(0,0,-999,.01)),U=Array.from({length:Kr},()=>new Ke(1118481)),A=F=>new Lt({uniforms:{u_matcap:{value:_},u_color:{value:new Ke(F.color)},u_bgColor:{value:new Ke(1316117)},u_roughness:{value:F.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Dt(0,0,0,1)},u_selfRotation:{value:new Dt(0,0,0,1)},u_nearPositionRadiusList:{value:L.map(Ge=>Ge.clone())},u_nearColorList:{value:U.map(Ge=>Ge.clone())}},vertexShader:O1,fragmentShader:z1});for(const F of g){const Ge=A(F),We=new Ht(d,Ge);We.frustumCulled=!1,We.scale.setScalar(F.radius),s.add(We),E.push(We),y.push(Ge),p.push(new G1(F.radius,F.density,F.friction,F.restitution,m,!1)),S.push({i:E.length-1,d2:0})}const C=new Lt({uniforms:{u_color0:{value:new Ke(r)},u_color1:{value:new Ke(1316117)},u_aspect:{value:1}},vertexShader:B1,fragmentShader:k1,depthWrite:!1}),w=new Ht(new Fi(90,60),C);w.position.z=-12,w.renderOrder=-1e3,s.add(w);const M=new at(0,0),D=new H,z=new H,O=new H,W=new H,Y=new H,X=new H,q=new H,V=new H,ce=new H,ie=new H,pe=new Dn,Me=.025,Be=.1,j=.12,oe=F=>{const Ge=(e||i).getBoundingClientRect();M.x=(F.clientX-Ge.left)/Ge.width*2-1,M.y=-((F.clientY-Ge.top)/Ge.height*2-1)};window.addEventListener("pointermove",oe);const ae=()=>{n=(n+1)%_a.length,r=_a[n],E.forEach((F,Ge)=>{const We=g[Ge];We.isColored&&(F.material.uniforms.u_color.value.set(r),We.color=r)}),C.uniforms.u_color0.value.set(r),p.forEach(F=>F.applyImpulse())},le=()=>ae();i.addEventListener("click",le),e==null||e.addEventListener("click",le);const we=()=>{const F=e||i.parentElement,Ge=F.clientWidth,We=F.clientHeight,Je=Ge/Math.max(We,1);o.fov=rf(Je,2.2,2/3,18,30),o.aspect=Je,o.updateProjectionMatrix(),a.setSize(Ge,We,!1),C.uniforms.u_aspect.value=Je};we(),window.addEventListener("resize",we);let Fe=0,Ne=performance.now();const it=performance.now(),Xe=()=>{const Ge=(e||i).getBoundingClientRect();l=Ge.bottom>0&&Ge.top<window.innerHeight};window.addEventListener("scroll",Xe,{passive:!0}),Xe();const rt=F=>{if(Fe=requestAnimationFrame(rt),!l){Ne=F;return}let Ge=Math.min(.05,(F-Ne)/1e3);Ne=F;const We=t?1:2;Ge/=We;const Je=(F-it)/1e3,xe=rf(Je,.3,2,25,17.5);o.position.z=xe;for(let Oe=0;Oe<We;Oe++){const Ae=new H(M.x,M.y,.5).unproject(o);Ae.sub(o.position).normalize();const I=(0-o.position.z)/Ae.z;D.copy(o.position).addScaledVector(Ae,I),O.copy(D).sub(z).multiplyScalar(j/Math.max(Ge,.001)),W.copy(D).sub(o.position);const T=W.lengthSq()||1;z.copy(D);for(let G=0;G<p.length;G++){const ee=p[G];ee.updateGravity(Ge),X.copy(ee.velocity),q.copy(ee.position);for(let fe=G+1;fe<p.length;fe++){const Se=p[fe];ce.copy(Se.velocity),ie.copy(Se.position),Y.copy(q).sub(ie);const Qe=Y.length(),me=ee.radius+Se.radius;if(Qe<me&&Qe>1e-6){const Le=Math.sqrt(ee.friction*Se.friction);ee.frictionTot+=Le,Se.frictionTot+=Le,Y.normalize(),Y.multiplyScalar(.5*(Qe-me)),q.sub(Y),ie.add(Y),Y.normalize();const Ue=X.dot(Y),ze=ce.dot(Y),Re=ee.mass,$e=Se.mass,ke=(Re*Ue+$e*ze-$e*(Ue-ze)*ee.restitution)/(Re+$e),qe=(Re*Ue+$e*ze-Re*(ze-Ue)*Se.restitution)/(Re+$e);X.addScaledVector(Y,(ke-Ue)/(1+Le)),ce.addScaledVector(Y,(qe-ze)/(1+Le)),Se.position.copy(ie),Se.velocity.copy(ce)}}V.copy(q).sub(o.position);let te=V.dot(W)/T;te=V.sub(ce.copy(W).multiplyScalar(te)).length()-ee.radius-Me,te<0&&(V.copy(q).sub(o.position).cross(W).normalize(),ce.copy(W).cross(V).normalize(),q.sub(ce.multiplyScalar(Be*te)),ce.multiplyScalar(-j/Math.max(Ge,.001)),X.add(ce),X.add(O));let ne=q.length();if(ne>0){V.set(1,1,1).normalize();let fe=1-Math.abs(V.dot(ce.copy(q).normalize()));fe*=Ge*Math.min(1,Math.max(0,ne/2))*.5,fe*=G%2*2-1,pe.setFromAxisAngle(V,fe),ce.copy(q).applyQuaternion(pe).sub(V.copy(q)),X.add(ce)}V.crossVectors(q,X);let Te=V.length();Te/=ee.inertia,Te>0&&(V.normalize(),pe.setFromAxisAngle(V,Te*Ge),ee.quaternion.premultiply(pe)),ee.position.copy(q),ee.velocity.copy(X),ee.update(Ge),["x","y","z"].forEach(fe=>{const Se=fe==="z"?5.5:7.5;ee.position[fe]>Se&&(ee.position[fe]=Se,ee.velocity[fe]*=-.55),ee.position[fe]<-Se&&(ee.position[fe]=-Se,ee.velocity[fe]*=-.55)})}}for(let Oe=0;Oe<E.length;Oe++){const Ae=E[Oe],I=p[Oe];Ae.position.copy(I.position),Ae.quaternion.copy(I.quaternion);const T=y[Oe].uniforms;T.u_selfPositionRadius.value.set(I.position.x,I.position.y,I.position.z,I.radius),T.u_selfRotation.value.set(I.quaternion.x,I.quaternion.y,I.quaternion.z,I.quaternion.w),T.u_bgColor.value.copy(C.uniforms.u_color1.value)}for(let Oe=0;Oe<E.length;Oe++){for(let T=0;T<E.length;T++)S[T].i=T,S[T].d2=Oe===T?0:p[Oe].position.distanceToSquared(p[T].position);S.sort((T,G)=>T.d2-G.d2);const Ae=y[Oe].uniforms.u_nearPositionRadiusList.value,I=y[Oe].uniforms.u_nearColorList.value;for(let T=0;T<Kr;T++){const G=S[T+1]?S[T+1].i:S[0].i,ee=p[G];Ae[T].set(ee.position.x,ee.position.y,ee.position.z,ee.radius),I[T].copy(y[G].uniforms.u_color.value)}}o.position.x+=(M.x*.9-o.position.x)*.04,o.position.y+=(M.y*.55-o.position.y)*.04,o.lookAt(0,0,0),a.render(s,o)};return Fe=requestAnimationFrame(rt),{cycleColor:ae,destroy(){cancelAnimationFrame(Fe),window.removeEventListener("pointermove",oe),window.removeEventListener("resize",we),window.removeEventListener("scroll",Xe),i.removeEventListener("click",le),e==null||e.removeEventListener("click",le),y.forEach(F=>F.dispose()),C.dispose(),a.dispose()}}}function Cn(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function Xn(i){return Cn(i,0,1)}function sp(i,e,t){return(t-i)/(e-i||1)}function qr(i,e,t){return Cn(sp(i,e,t),0,1)}function ve(i,e,t,n,r,s){let o=qr(e,t,i);return s&&(o=s(o)),n+o*(r-n)}function sf(i,e,t,n,r,s){let o=sp(e,t,i);return n+o*(r-n)}function X1(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const s=(g,m,p,E)=>1/(3*m*g*g+2*p*g+E),o=(g,m,p,E,y)=>m*(g*g*g)+p*(g*g)+E*g+y,a=(g,m,p,E,y)=>{const S=g*g;return m*(S*g)+p*S+E*g+y},l=1-3*n+3*e,c=3*n-6*e,u=3*e,f=1-3*r+3*t,d=3*r-6*t,_=3*t;let v=i;for(let g=0;g<100;g++){const m=o(v,l,c,u,0);let p=s(v,l,c,u);p===1/0&&(p=i),v-=(m-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,f,d,_,0)}function ft(i){return X1(i,.35,0,0,1)}function of(i){return i===1?1:1-Math.pow(2,-10*i)}function q1(i){return i===0?0:Math.pow(1024,i-1)}function Y1(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function Vl(i){return 1-Math.cos(i*Math.PI/2)}function Z1(i){return-(Math.cos(Math.PI*i)-1)/2}function $1(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function Xc(i){return i*i*i}function op(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function An(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,s=e.bottom;let o=Math.min(0,sf(n,t,t-r,-1,0));o+=Math.max(0,sf(n,0,-r,0,1));const a=ve(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=o>=-1&&o<=1;return{top:n,bottom:s,height:r,width:e.width,ratio:o,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function K1(i){return 1-Math.pow(1-i,3)}function j1(i){return i*i*i*i}function J1(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function Ei(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const af=[{id:"blackFrameShow",weight:.55},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",weight:1.6},{id:"astronautWait",weight:.9}];function ap(i){const e=af.reduce((a,l)=>a+l.weight,0),t={};let n=0;for(const a of af){const l=a.weight/e;t[a.id]={...a,from:n,to:n+l},n+=l}function r(){const a=i.getBoundingClientRect(),l=window.innerHeight,c=a.height-l;return Math.max(0,Math.min(1,-a.top/Math.max(c,1)))}function s(a,l=a){const c=t[a],u=t[l],f=r(),d=c.from,_=u.to,v=(f-d)/Math.max(_-d,1e-6);return{ratio:Math.max(0,Math.min(1,v)),raw:v,active:f>=d&&f<=_,global:f}}function o(a,l){return s(a,l)}return{items:t,progress:r,range:s,between:o,totalWeight:e}}const Q1=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,ey=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,ty="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",ny="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",lp=`
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
`,cp=`
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
`,iy=`
${lp}
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
${cp}
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
`,ry=`
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
`,lf=`
${lp}
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
${cp}
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
`,pi=5,ga=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,sy=`
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
`,oy=`
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
`,ay=`
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
`,ly=`
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
`;function co(i,e,t=!1){const n={minFilter:wt,magFilter:wt,format:_n,type:Pi,depthBuffer:t,stencilBuffer:!1},r=new Qi(i,e,n);return t&&(r.depthTexture=new wu(i,e),r.depthTexture.type=Ys),r}function cy(i,e,t){const n=new at(1,1);i.getSize(n);let r=co(1,1,!0),s=co(1,1,!1),o=co(1,1,!1);const a=[],l=[];for(let xe=0;xe<pi;xe++)a.push(co(1,1)),l.push(co(1,1));const c=new Zd(-1,1,1,-1,0,1),u=new Ht(new Fi(2,2),new yu),f=new ja;f.add(u);const d=new Lt({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new at(1,1)},u_aspect:{value:new at(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:ga,fragmentShader:sy,depthTest:!1,depthWrite:!1,toneMapped:!1}),_=[];for(let xe=0;xe<pi;xe++){const Oe=3+xe*2;_.push(new Lt({uniforms:{u_texture:{value:null},u_resolution:{value:new at(1,1)},u_direction:{value:new at(1,0)}},defines:{KERNEL_RADIUS:Oe,SIGMA:Oe},vertexShader:ga,fragmentShader:oy,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const v=new Float32Array(pi),g=new Lt({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:v}},vertexShader:ga,fragmentShader:ay,depthTest:!1,depthWrite:!1,toneMapped:!1});let m=0;const p=new Lt({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new vt},u_prevProjectionViewMatrix:{value:new vt},u_aspect:{value:new at(1,1)},u_amount:{value:1}},vertexShader:ga,fragmentShader:ly,depthTest:!1,depthWrite:!1,toneMapped:!1}),E=new vt,y=new vt,S=new vt,L=new vt,U=new vt,A=new H,C=new Qn,w=new H(1,1,1),M=new Dn;let D=!0,z=1,O=!1,W=0,Y=0,X=1,q=1,V=0,ce=.015,ie=.6,pe=.3,Me=.5,Be=0,j=!0,oe=!1,ae=1,le=1;const we=new at(1,0),Fe=new at(0,1),Ne=(xe,Oe)=>{u.material=xe,i.setRenderTarget(Oe),i.clear(),i.render(f,c)},it=xe=>{const Oe=Math.max(1,xe);return 1<<Math.ceil(Math.log(Oe)/Math.log(2))},Xe=(xe,Oe)=>{ae=Math.max(1,Math.floor(xe)),le=Math.max(1,Math.floor(Oe)),r.setSize(ae,le),s.setSize(ae,le);let Ae=Math.max(1,Math.ceil(ae/2)),I=Math.max(1,Math.ceil(le/2));o.setSize(Ae,I);for(let G=0;G<pi;G++)a[G].setSize(Ae,I),l[G].setSize(Ae,I),Ae=Math.max(1,Math.ceil(Ae/2)),I=Math.max(1,Math.ceil(I/2));d.uniforms.u_texelSize.value.set(1/ae,1/le);const T=le/Math.sqrt(ae*ae+le*le)*2;d.uniforms.u_aspect.value.set(ae/le*T,T),p.uniforms.u_aspect.value.set(ae/Math.max(le,1),1)},rt=({blackFrameInRatio:xe=0,blackTitleRatio:Oe=0,blackTunnelRatio:Ae=0,whiteFrameRatio:I=0,whiteTunnelWaitRatio:T=0,astronautDropRatio:G=0,isWhiteTunnelActive:ee=!1,isBlackTunnelActive:te=!1,isMobile:ne=!1}={})=>{oe=!!ne;let Te=xe*(rn.lerp(0,.15,Oe)+rn.clamp((Ae-.2)/.2,0,1)*.25);if(Ae>=.65){const fe=rn.clamp((Ae-.65)/.1,0,1);Te=Te+(.08-Te)*fe}if(ee&&(Te=0),ne&&!ee&&(Te*=1.05),V=Te,X=Ae<1?rn.lerp(1,3,rn.clamp(Ae/.7,0,1)):1,ee){const fe=ne?8:20,Se=ne?2.6:4,Qe=rn.clamp((T-.08)/.22,0,1);W=G<1?rn.lerp(Se,2,rn.clamp(I/.05,0,1)):rn.lerp(0,fe,Qe),Be=rn.lerp(.3,0,rn.clamp(T/.18,0,1))}else{const fe=rn.clamp(Oe/.25,0,1);W=rn.lerp(ne?22:30,ne?5:6,fe),Be=0}ie=.6,ce=ne?.012:.015,pe=.3,Me=.5,Y=ne?0:.4,q=1,O=te||ee},F=(xe,Oe=0)=>{A.set(0,0,xe),C.set(0,0,Oe)},Ge=()=>{D=!0},We=(xe,Oe)=>{const Ae=i.autoClear;i.autoClear=!0,Ne(xe,Oe),i.autoClear=Ae},Je=()=>{var ee;if(!j){i.setRenderTarget(null),i.render(e,t);return}const xe=i.getRenderTarget(),Oe=i.autoClear;i.setRenderTarget(r),i.autoClear=!0,i.setClearColor((ee=e.background)!=null&&ee.isColor?e.background.getHex():0,Be),i.clear();const Ae=e.background;e.background=null,i.render(e,t),e.background=Ae;let I=r.texture;if(E.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),S.copy(E).invert(),O&&z>0?(D&&(y.copy(E),D=!1),U.compose(A,M.setFromEuler(C),w),U.invert(),L.copy(y).multiply(U),p.uniforms.u_texture.value=r.texture,p.uniforms.u_depthTexture.value=r.depthTexture,p.uniforms.u_projectionViewInverseMatrix.value.copy(S),p.uniforms.u_prevProjectionViewMatrix.value.copy(L),p.uniforms.u_amount.value=z,We(p,s),I=s.texture,y.copy(E)):(y.copy(E),D=!0),W<.05&&V<.005){g.uniforms.u_texture.value=I;for(let te=0;te<pi;te++)v[te]=0,g.uniforms[`u_blurTexture${te}`].value=I;g.uniforms.u_saturation.value=1,i.setRenderTarget(null),Ne(g,null),i.autoClear=Oe,i.setRenderTarget(xe);return}d.uniforms.u_texture.value=I,d.uniforms.u_amount.value=q,d.uniforms.u_haloStrength.value=V,d.uniforms.u_haloWidth.value=ie,d.uniforms.u_haloRGBShift.value=ce,d.uniforms.u_haloMaskInner.value=pe,d.uniforms.u_haloMaskOuter.value=Me,We(d,o);let T=o;for(let te=0;te<pi;te++){const ne=_[te];ne.uniforms.u_texture.value=T.texture,ne.uniforms.u_resolution.value.set(T.width,T.height),ne.uniforms.u_direction.value=we,We(ne,a[te]),ne.uniforms.u_texture.value=a[te].texture,ne.uniforms.u_resolution.value.set(a[te].width,a[te].height),ne.uniforms.u_direction.value=Fe,We(ne,l[te]),T=l[te]}let G=W;if(!oe){const te=it(ae/2)>>1,ne=it(le/2)>>1,Te=Math.max(1,Math.ceil(Math.log(te*ne)/Math.log(2)));G=W*1024/Math.pow(Te,4)*.85*36}for(let te=0;te<pi;te++){const ne=(pi-te)/pi;let Te=G*(ne+(1.2-ne*2)*Y)/Math.pow(2,pi-te-1);!oe&&te===0&&(Te*=.2),!oe&&te===1&&(Te*=.55),!oe&&te>=3&&(Te*=1.35),v[te]=Te}g.uniforms.u_texture.value=I,g.uniforms.u_saturation.value=X;for(let te=0;te<pi;te++)g.uniforms[`u_blurTexture${te}`].value=l[te].texture;i.setRenderTarget(null),Ne(g,null),i.autoClear=Oe,i.setRenderTarget(xe)};return Xe(n.x,n.y),{resize:Xe,sync:rt,render:Je,setEfxOffset:F,markEfxSync:Ge,setEfxAmount(xe){z=xe},get clearAlpha(){return Be},setEnabled(xe){j=!!xe},setScrollVelocity(xe){const Oe=Math.min(1,Math.abs(xe)*.12);m+=(Oe-m)*.12,g.uniforms.u_scrollPaint.value=m},destroy(){r.dispose(),s.dispose(),o.dispose(),a.forEach(xe=>xe.dispose()),l.forEach(xe=>xe.dispose()),d.dispose(),g.dispose(),p.dispose(),_.forEach(xe=>xe.dispose()),u.geometry.dispose()}}}function uy(i,e,t){return i+(e-i)*t}const dr=class dr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<dr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,s=r*r*(3-2*r),o=n&dr.MAX_VERTICES_MASK,a=o+1&dr.MAX_VERTICES_MASK;return uy(this._r[o],this._r[a],s)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let s=0;s<t;s++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Ve(dr,"MAX_VERTICES",512),Ve(dr,"MAX_VERTICES_MASK",dr.MAX_VERTICES-1);let Ga=dr;const bi=new H,Ro=class Ro{constructor(){this._position=new H,this._rotation=new Dn,this._euler=new Qn,this._scale=new H(1,1,1),this._matrix=new vt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new H(1,1,1),this._rotationScale=new H(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new Ga,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;bi.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),bi.multiply(this._positionScale),bi.multiplyScalar(this._positionAmplitude*Ro.FBM_NORM),this._position.copy(bi)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;bi.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),bi.multiply(this._rotationScale),bi.multiplyScalar(this._rotationAmplitude*Ro.FBM_NORM),this._euler.set(bi.x,bi.y,bi.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Ve(Ro,"FBM_NORM",1/.75);let To=Ro;class cf{constructor(e,t=1.5,n=.8,r=2,s=!0){this.isRobust=s,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,s=e/(1+r-n);this._k1Stable=(1-r)*s,this._k2Stable=e*s}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const uf=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],hy=26,kr=64,fy=34,uo=new at(1465,1024),dy=`
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
    *linearStep(instanceRands.w*0.5,instanceRands.w*0.5+0.5,u_activeRatio)*0.55;
  float yLimit=7.0/u_aspect;
  vec3 instancePos=vec3(mix(-5.,5.,cycleRands.x),yLimit*mix(-1.0,1.0,ratio),20.+instanceId/float(COUNT));
  pos+=instancePos;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);
  v_uv=instanceUvInfo.xy+instanceUvInfo.zw*vec2(uv.x,1.-uv.y);
  v_uv.y=1.0-v_uv.y;
  v_fadeOut=2.0*abs(ratio-0.5);
}
`,py=`
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
`,my=`
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
`,_y=`
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
`,va=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function gy(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function vy(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",s=t?fy:hy,[o,a]=await Promise.all([new Xr().loadAsync(`${e}assets/textures/tunnels/${r}`),Hn(`${e}assets/models/tunnels/diamond.buf`)]);o.colorSpace=Rn,o.flipY=!1,o.needsUpdate=!0;const l=new Li;i.add(l);const c=new Fi(1,1),u=new Zr;for(const M in c.attributes)u.setAttribute(M,c.attributes[M]);u.index=c.index;const f=new Float32Array(s),d=new Float32Array(s*4),_=new Float32Array(s*4);for(let M=0,D=0;M<s;M++,D+=4){f[M]=M/s;const z=uf[M%uf.length];d[D]=z.x/uo.x,d[D+1]=z.y/uo.y,d[D+2]=z.w/uo.x,d[D+3]=z.h/uo.y,_[D]=Math.random(),_[D+1]=Math.random(),_[D+2]=Math.random(),_[D+3]=Math.random()}u.setAttribute("instanceId",new fn(f,1)),u.setAttribute("instanceUvInfo",new fn(d,4)),u.setAttribute("instanceRands",new fn(_,4)),u.instanceCount=s;const v=new Lt({vertexShader:dy,fragmentShader:py,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:o},u_textureSize:{value:uo.clone()},u_bgColor:{value:new Ke(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Oo,blendEquation:Mn,blendSrc:Us,blendDst:Ns,blendEquationAlpha:Mn,blendSrcAlpha:Ta,blendDstAlpha:Ta,defines:{COUNT:s}}),g=new Ht(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const m=new Zr;for(const M in a.attributes)m.setAttribute(M,a.attributes[M]);a.index&&(m.index=a.index);const p=gy("diamonds-3"),E=new Float32Array(kr*3),y=new Float32Array(kr*3),S=new Float32Array(kr*4),L=new H;for(let M=0,D=0,z=0;M<kr;M++,D+=3,z+=4)E[D]=16*(p()*2-1),E[D+1]=16*(p()*2-1),E[D+2]=19-(kr-M-1)/(kr-1)*8,L.set(p()*2-1,p()*2-1,p()*2-1).normalize(),y[D]=L.x,y[D+1]=L.y,y[D+2]=L.z,S[z]=p(),S[z+1]=p(),S[z+2]=p(),S[z+3]=p();m.setAttribute("a_instancePosition",new fn(E,3)),m.setAttribute("a_instanceRotationAxis",new fn(y,3)),m.setAttribute("a_instanceRand",new fn(S,4)),m.instanceCount=kr;const U=[];for(let M=0;M<25;M++)U.push(new Dt(va[M*4],va[M*4+1],va[M*4+2],va[M*4+3]));const A=new Lt({vertexShader:my,fragmentShader:_y,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new Ke("#689aff")},u_planes:{value:U},u_bgColor:{value:new Ke(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Oo,blendEquation:Mn,blendSrc:ri,blendDst:Ta,blendEquationAlpha:Mn,blendSrcAlpha:ri,blendDstAlpha:ri}),C=new Ht(m,A);C.frustumCulled=!1,C.renderOrder=20,C.visible=!1,A.blending=xr,A.blendSrc=Us,A.blendDst=Ns,A.blendSrcAlpha=Us,A.blendDstAlpha=Ns,l.add(C),g.renderOrder=15;const w=new Ke(0);return{update({whiteTunnelWaitRatio:M=0,aspect:D=1,bg:z="#000000"}={}){const O=ve(M,0,.12,0,1),W=O>0;l.visible=W,g.visible=W,C.visible=W,v.uniforms.u_activeRatio.value=O,A.uniforms.u_activeRatio.value=O,v.uniforms.u_aspect.value=D,A.uniforms.u_aspect.value=D,w.set(z),v.uniforms.u_bgColor.value.copy(w),A.uniforms.u_bgColor.value.copy(w)},dispose(){u.dispose(),c.dispose(),v.dispose(),o.dispose(),m.dispose(),A.dispose(),a.dispose(),i.remove(l)}}}const ho=53,xa=16,Sa=20,hf=["helmet","helmet_glass","glove_shoes","wearpack"],fo=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Gl=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function ff(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function df(i,e){const[t,n]=await Promise.all([ff(i),ff(e)]),r=t.width,s=t.height,o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,s);const l=a.getImageData(0,0,r,s).data;a.clearRect(0,0,r,s),a.drawImage(t,0,0,r,s);const c=a.getImageData(0,0,r,s).data,u=new Uint8Array(r*s*4);for(let d=0;d<u.length;d+=4)u[d]=c[d],u[d+1]=c[d+1],u[d+2]=c[d+2],u[d+3]=l[d];const f=new bu(u,r,s,_n,Ui);return f.colorSpace=mn,f.flipY=!1,f.generateMipmaps=!1,f.minFilter=wt,f.magFilter=wt,f.wrapS=gi,f.wrapT=gi,f.needsUpdate=!0,f}function pf(i,e,t){const n=new bu(i,e,t,_n,Zn);return n.magFilter=on,n.minFilter=on,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function Wl(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new fn(t,3)}const ya=`
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
`;async function xy(i,e,t){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",s=!n,[o,a,l,c,u,f,d,_,v,g,m,p,E,...y]=await Promise.all([Hn(`${r}assets/models/tunnels/astronaut_animations.buf`),Hn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Hn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new Xr().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new Xr().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new Xr().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Hn(`${r}assets/models/tunnels/tunnel_block_base.buf`),Hn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Hn(`${r}assets/models/tunnels/grid_base_ld.buf`),Hn(`${r}assets/models/tunnels/grid_structure_ld.buf`),s?Hn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),s?Hn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new Xr().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),...hf.map(ye=>Hn(`${r}assets/models/tunnels/astronaut_${ye}.buf`))]),S=new ja;S.background=new Ke(0);const L=new H(0,0,25),U=new H(0,0,24),A=45,C=new Pn(A,1,1,200);C.position.copy(L),C.lookAt(U);let w;try{w=new Eu({canvas:i,antialias:!n,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(ye){throw console.error("Goal WebGL unavailable",ye),ye}w.setClearColor(0,1),w.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.5:1.35)),w.outputColorSpace=Ni,w.toneMapping=Di,w.autoClear=!0,c.colorSpace=mn,c.generateMipmaps=!1,c.minFilter=wt,c.magFilter=wt,u.colorSpace=mn,u.generateMipmaps=!1,u.minFilter=wt,u.magFilter=wt,f.colorSpace=Rn,f.wrapS=f.wrapT=Fs;const M=o.attributes.position.array,D=o.attributes.orient.array,z=M.length/3,O=z/ho,W=Math.ceil(Math.sqrt(z)),Y=Math.ceil(z/W),X=W*Y,q=new Float32Array(X*4),V=new Float32Array(X*4);for(let ye=0,He=0,Ce=0;ye<z;ye++,He+=3,Ce+=4)q[Ce]=M[He],q[Ce+1]=M[He+1],q[Ce+2]=M[He+2],q[Ce+3]=1,V[Ce]=D[Ce],V[Ce+1]=D[Ce+1],V[Ce+2]=D[Ce+2],V[Ce+3]=D[Ce+3];const ce=pf(q,W,Y),ie=pf(V,W,Y),pe=new fn(new Float32Array([0,0,18]),3);pe.setUsage(rr);const Me=new fn(new Float32Array([0,0,0,1]),4);Me.setUsage(rr);const Be=new fn(new Float32Array([0,1,0]),3);Be.setUsage(rr);const j=new fn(new Float32Array([90,91,0]),3);j.setUsage(rr);const oe=()=>{const ye=new Qi(1,1,{minFilter:Zi,magFilter:wt,format:_n,generateMipmaps:!0});return ye.texture.wrapS=ye.texture.wrapT=ka,ye},ae=oe(),le=oe();let we=ae,Fe=le;const Ne={u_animationPositionTexture:{value:ce},u_animationOrientTexture:{value:ie},u_animationTextureSize:{value:new at(W,Y)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new Ke("#566d80")},u_bgColor:{value:new Ke("#000000")},u_sunPosition:{value:new H(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new Ke(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new Ke("#aaaafb")},u_cardPosition:{value:new H}},it={u_blackTunnelTexture:{value:we.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},Xe={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async ye=>{const[He,Ce]=await Promise.all([df(`${r}assets/textures/tunnels/astronaut/astronaut_${ye}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${ye}_base.webp`),new Xr().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${ye}_nor.webp`)]);Ce.colorSpace=mn,Ce.flipY=!1,Ce.generateMipmaps=!1,Ce.minFilter=wt,Ce.magFilter=wt,Xe[ye]={armb:He,nor:Ce}})),Xe.helmet_glass=Xe.helmet;const rt=new Li;S.add(rt);const F=[],Ge=4,We=new fn(new Float32Array(Ge*3),3);We.setUsage(rr);const Je=new fn(new Float32Array(Ge*4),4);Je.setUsage(rr);const xe=new fn(new Float32Array(Ge*3),3);xe.setUsage(rr);const Oe=new fn(new Float32Array(Ge*3),3);Oe.setUsage(rr);for(let ye=0;ye<Ge;ye++)Je.setXYZW(ye,0,0,0,1),xe.setXYZ(ye,0,1,0),Oe.setXYZ(ye,90,91,0);const Ae=[];let I=0;const T={value:0};hf.forEach((ye,He)=>{const Ce=y[He],je=new Zr;for(const Kt in Ce.attributes)je.setAttribute(Kt,Ce.attributes[Kt]);Ce.index&&je.setIndex(Ce.index),je.instanceCount=1,je.setAttribute("instancePos",pe),je.setAttribute("instanceOrient",Me),je.setAttribute("instanceAnimationFrameFromToBlend1",Be),je.setAttribute("instanceAnimationFrameFromToBlend2",j);const dt=ye==="helmet_glass"||ye==="card"?"helmet":ye,Rt=ye==="helmet_glass",_t={...Ne,u_armbTexture:{value:Xe[dt].armb},u_norTexture:{value:Xe[dt].nor}},Pt={...Ne,...it,u_armbTexture:{value:Xe[dt].armb},u_norTexture:{value:Xe[dt].nor}},tn=new Lt({uniforms:_t,vertexShader:ya,fragmentShader:iy,transparent:!0,blending:vi,side:yn,defines:{BONE_COUNT:ho,IS_WHITE:!0,...Rt?{IS_HELMET_GLASS:!0}:{}}}),bn=new Lt({uniforms:Pt,vertexShader:ya,fragmentShader:lf,transparent:!0,blending:vi,side:yn,defines:{BONE_COUNT:ho,IS_BLACK:!0,...Rt?{IS_HELMET_GLASS:!0}:{}}}),Tn=new Ht(je,tn);if(Tn.frustumCulled=!1,Tn.userData.whiteMat=tn,Tn.userData.blackMat=bn,rt.add(Tn),F.push(Tn),!Rt){const Kt=new Zr;for(const wi in Ce.attributes)Kt.setAttribute(wi,Ce.attributes[wi]);Ce.index&&Kt.setIndex(Ce.index),Kt.instanceCount=Ge,Kt.setAttribute("instancePos",We),Kt.setAttribute("instanceOrient",Je),Kt.setAttribute("instanceAnimationFrameFromToBlend1",xe),Kt.setAttribute("instanceAnimationFrameFromToBlend2",Oe);const ti=new Lt({uniforms:{...Pt,u_armbTexture:{value:Xe[dt].armb},u_norTexture:{value:Xe[dt].nor},u_alpha:T},vertexShader:ya,fragmentShader:lf,transparent:!0,depthWrite:!1,depthTest:!1,blending:Oo,blendEquation:Mn,blendSrc:ri,blendDst:ri,blendEquationAlpha:Mn,blendSrcAlpha:ri,blendDstAlpha:ri,side:yn,defines:{BONE_COUNT:ho,IS_BLACK:!0,IS_CLONE:!0}}),nn=new Ht(Kt,ti);nn.frustumCulled=!1,nn.renderOrder=1e3,nn.visible=!1,rt.add(nn),Ae.push(nn)}});const G=new at(5,23),ee=new Ga;let te=0,ne=!1;const Te=document.createElement("canvas");Te.width=Te.height=11;{const ye=Te.getContext("2d");ye.fillStyle="#000",ye.fillRect(0,0,11,11),ye.fillStyle="#f00",ye.fillRect(1,1,3,9),ye.fillStyle="#0f0",ye.fillRect(4,1,3,9),ye.fillStyle="#00f",ye.fillRect(7,1,3,9)}const fe=new d1(Te);fe.needsUpdate=!0,fe.minFilter=wt,fe.magFilter=wt;const Se=await new Xr().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);Se.minFilter=on,Se.magFilter=on,Se.colorSpace=mn,Se.flipY=!1;const Qe=new Fi(.2,.15).translate(0,1.68,.1);Qe.setAttribute("boneIndices",new Xt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),Qe.setAttribute("boneWeights",new Xt(new Float32Array([1,0,1,0,1,0,1,0]),2)),Qe.setAttribute("tangent",new Xt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),Qe.setAttribute("ao",new Xt(new Float32Array([1,1,1,1]),1));const me=new Zr;for(const ye in Qe.attributes)me.setAttribute(ye,Qe.attributes[ye]);Qe.index&&me.setIndex(Qe.index),me.instanceCount=1,me.setAttribute("instancePos",pe),me.setAttribute("instanceOrient",Me),me.setAttribute("instanceAnimationFrameFromToBlend1",Be),me.setAttribute("instanceAnimationFrameFromToBlend2",j);const Le=new Lt({uniforms:{...Ne,u_cardLedTexture:{value:fe},u_cardTexture:{value:Se},u_cardColor:{value:new Ke("#ddddff")},u_cardUvOffset:{value:new at(0,0)},u_cardTextureSize:{value:G},u_cardOpacity:{value:0}},vertexShader:ya,fragmentShader:ry,transparent:!0,depthTest:!1,depthWrite:!1,side:yn,blending:Oo,blendEquation:Mn,blendSrc:ri,blendDst:ri,blendEquationAlpha:Mn,blendSrcAlpha:ri,blendDstAlpha:ri,defines:{BONE_COUNT:ho}}),Ue=new Ht(me,Le);Ue.frustumCulled=!1,Ue.renderOrder=100,Ue.visible=!1,rt.add(Ue);const ze=new Li;S.add(ze);const Re=new To;Re.positionAmplitude=2,Re.positionFrequency=1,Re._enableRotationNoise=!1;const $e=Re.position;let ke=0,qe=1,B=typeof window<"u"?window.scrollY:0,J=1;const re=(ye,He)=>{const Ce=new Zr;for(const _t in ye.attributes)Ce.setAttribute(_t,ye.attributes[_t]);ye.index&&Ce.setIndex(ye.index);const je=new Float32Array(xa);for(let _t=0;_t<xa;_t++)je[_t]=_t;Ce.setAttribute("a_instanceId",new fn(je,1)),Ce.instanceCount=xa;const dt=new Lt({uniforms:{u_texture:{value:f},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:$e},u_time:{value:0}},vertexShader:ty,fragmentShader:ny,transparent:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:xa,...He?{IS_WALL:!0}:{}}}),Rt=new Ht(Ce,dt);return Rt.frustumCulled=!1,ze.add(Rt),dt},ue=re(d,!1),Pe=re(_,!0),De=await vy(S,{base:r,isMobile:n,sharedTime:Ne.u_time}),nt=new Lt({uniforms:{u_color:{value:new Ke(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:vi}),yt=new Ht(new Fi(200,200),nt);yt.position.z=-80,yt.renderOrder=-10,S.add(yt);const Ct=new Li;S.add(Ct);const mt=await df(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);mt.wrapS=mt.wrapT=Fs,E.colorSpace=mn,E.flipY=!1,E.wrapS=E.wrapT=Fs;const Mt={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:we.texture},u_greebleArmbTexture:{value:mt},u_greebleNormalTexture:{value:E},u_resolution:{value:new at(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new H(0,70,0)},u_color1:{value:new Ke(fo[0])},u_color2:{value:new Ke(Gl[0])}},wn=(ye,He,Ce)=>{const je=new Zr;for(const Pt in ye.attributes)je.setAttribute(Pt,ye.attributes[Pt]);ye.index&&je.setIndex(ye.index);const dt=ye.attributes.position.count;je.getAttribute("ao")||je.setAttribute("ao",new Xt(new Float32Array(dt).fill(1),1)),je.getAttribute("areaRatio")||je.setAttribute("areaRatio",new Xt(new Float32Array(dt),1)),je.getAttribute("height")||je.setAttribute("height",new Xt(new Float32Array(dt).fill(1),1)),je.getAttribute("cluster")||je.setAttribute("cluster",new Xt(new Float32Array(dt),1)),je.setAttribute("instancePos",Wl(He.attributes.position)),je.setAttribute("instanceGridIds",Wl(He.attributes.gridIds)),je.setAttribute("instanceAxis",Wl(He.attributes.rotAxis)),je.instanceCount=He.attributes.position.count;const Rt=new Lt({uniforms:Mt,vertexShader:Q1,fragmentShader:ey,side:yn,transparent:!1,depthWrite:!0,blending:xr,defines:{GRID_SIZE:Sa,...Ce?{IS_HD:!0}:{}}}),_t=new Ht(je,Rt);return _t.frustumCulled=!1,_t.renderOrder=Ce?2:1,Ct.add(_t),_t};wn(v,g,!1),s&&m&&p&&wn(m,p,!0);let br=0,Tr=0,ln=0,xi=A,tr=0,Ar=-80,Si=0;const Ut=new To;Ut.positionFrequency=.2,Ut.rotationFrequency=.15,Ut.positionAmplitude=0,Ut.rotationAmplitude=0;const yi=new cf(new H,1,.65,1.3),li=new cf(new H,1,.85,1.1),Rr=Array.from({length:Ge},()=>{const ye=new To;return ye.positionFrequency=.2,ye.rotationFrequency=.6,ye.positionAmplitude=12,ye.rotationAmplitude=10,ye}),os=Float32Array.from({length:Ge+1},(ye,He)=>He===0?0:Math.random()*2),ei=new Float32Array(Ge),ci=new Float32Array(Ge),h=new H,x=new Dn,b=new vt,R=new vt,P=new H,N=new H,k=new Dn,Q=new Qn,Z=new H(1,1,1),$=new Ke,K=new Ke,se=new H,de=new H;let _e=0,be=0,Ee=0,ge=0,he=.08;const lt=.1;let Ye=!1,St=0,pt=0,et=0;window.addEventListener("pointermove",ye=>{_e=ye.clientX/Math.max(window.innerWidth,1)*2-1,be=ye.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{Ye=!0},{passive:!0}),window.addEventListener("pointerup",()=>{Ye=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{Ye=!1},{passive:!0});const Et=()=>{C.near=1,C.far=200,C.position.copy(L),C.up.set(0,1,0),C.lookAt(U),C.fov=xi,se.set(0,0,-1).applyQuaternion(C.quaternion);let ye=de.copy(U).sub(C.position).dot(se);const He=C.fov,Ce=He+ln,je=Math.max(1,Math.min(170,Ce));let dt=ye*Math.tan(He/360*Math.PI/2)/Math.tan(je/360*Math.PI/2)-ye;Number.isFinite(dt)||(dt=0),C.translateZ(dt),C.fov=He,ye+=dt,C.translateZ(ye*-1);const Rt=n?he*.35:he,_t=Math.max(-1,Math.min(1,be))*Rt,Pt=Math.max(-1,Math.min(1,-_e))*Rt;Ee+=(_t-Ee)*lt,ge+=(Pt-ge)*lt,Q.set(Ee,ge,0),k.setFromEuler(Q),C.quaternion.multiply(k),C.translateZ(ye),C.updateProjectionMatrix()},ut=ye=>{if(Ut.update(ye),yi.update(ye,Ut.position),P.copy(Ut.euler),li.update(ye,P),Q.set(li.value.x,li.value.y,li.value.z),k.setFromEuler(Q),R.compose(yi.value,k,Z),b.compose(h,x,Z),b.multiply(R),b.decompose(P,k,N),pe.setXYZ(0,P.x,P.y,P.z),Me.setXYZW(0,k.x,k.y,k.z,k.w),pe.needsUpdate=!0,Me.needsUpdate=!0,Qa=1+Math.min(3.5,yi.valueVel.length()*.2+li.valueVel.length()*.2),I>.01&&!Qt&&!to){for(let He=0;He<Ge;He++){const Ce=Rr[He];Ce.positionFrequency=.2,Ce.rotationFrequency=.6,Ce.positionAmplitude=12,Ce.rotationAmplitude=10,Ce.update(ye),b.compose(h,x,Z),b.multiply(Ce.matrix),b.decompose(P,k,N);const je=He/Math.max(Ge-1,1),dt=ve(I,je*.3,.7+je*.3,1,0,Z1);N.set(pe.getX(0),pe.getY(0),pe.getZ(0)),P.lerp(N,dt),We.setXYZ(He,P.x,P.y,P.z),Je.setXYZW(He,k.x,k.y,k.z,k.w)}We.needsUpdate=!0,Je.needsUpdate=!0}},st=i.parentElement||e,tt=ap(e);let Ze=0,Nt=0,Gt=0,ot=0,En=0,Ja=0,nr=0,Tu=0,as=0,Mi=0,Au=0,to=!0,vn=!1,Qt=!1,Wo=0,Cr=0,Qa=1,el=0,Ru=performance.now(),Cu=!1;const en=cy(w,S,C),no=()=>{const ye=st,He=ye.clientWidth||window.innerWidth,Ce=ye.clientHeight||window.innerHeight;C.aspect=He/Math.max(Ce,1),Et(),w.setSize(He,Ce,!1),en.resize(He,Ce),Mt.u_resolution.value.set(He,Ce);const je=Math.max(1,Math.floor(He*.25)),dt=Math.max(1,Math.floor(Ce*.25));(ae.width!==je||ae.height!==dt)&&(ae.setSize(je,dt),le.setSize(je,dt))};no(),window.addEventListener("resize",no);const Pu=(ye,He,Ce=100)=>{const je=ye.attributes.position.array,dt=ye.attributes.orient.array,Rt=Math.min(Math.floor(He),Ce-1),_t=Math.min(Math.ceil(He),Ce-1),Pt=He-Math.floor(He),tn=new H().fromArray(je,Rt*3).lerp(new H().fromArray(je,_t*3),Pt),bn=new Dn().fromArray(dt,Rt*4).slerp(new Dn().fromArray(dt,_t*4),Pt);return{p:tn,q:bn}},Xo=()=>{var cs;if(!e)return;const ye=window.innerHeight,He=window.scrollY||0;He!==B&&(J=He>B?1:-1,B=He),En=tt.range("blackFrameIn").ratio,Gt=tt.range("blackTitle").ratio,ot=tt.range("blackTunnel").ratio,nr=tt.range("whiteTunnel").ratio,Ze=tt.between("whiteTunnel","whiteFrameOut").ratio,Tu=tt.range("whiteFrameOut").ratio,Ja=tt.range("whiteFrameBreak").ratio,Au=tt.between("whiteTunnel","whiteFrameBreak").ratio,Mi=tt.between("whiteFrameBreak","astronautDrop").ratio,as=((cs=tt.range("astronautWait"))==null?void 0:cs.ratio)??0,et=tt.between("whiteFrameBreak","astronautWait").ratio,to=Gt<1,vn=ot<1&&!to,Qt=Ze<=1&&!vn&&!to,Nt=Qt?Ei(0,.15,Au):1,en.sync({blackFrameInRatio:En,blackTitleRatio:Gt,blackTunnelRatio:ot,whiteFrameRatio:nr,whiteTunnelWaitRatio:as,astronautDropRatio:Mi,isWhiteTunnelActive:Qt,isBlackTunnelActive:vn,isMobile:n}),Ne.u_whiteTunnelRatio.value=Ze,Ne.u_showRatio.value=Nt,Ne.u_frameOutRatio.value=Ja,ue.uniforms.u_ratio.value=Ze,Pe.uniforms.u_ratio.value=Ze,ue.uniforms.u_ratioInverse.value=1-Ze,Pe.uniforms.u_ratioInverse.value=1-Ze;const Ce=new Ke(Qt&&Mi<1?"#ffffff":"#000000");nt.uniforms.u_color.value.copy(Ce),S.background=null,w.setClearColor(Ce,en.clearAlpha),Ne.u_bgColor.value.copy(Ce),st&&(st.style.background=Ce.getStyle()),ze.visible=Qt&&Mi<1,Ct.visible=vn;const je=document.getElementById("header");je&&((st==null?void 0:st.classList.contains("is-pinned"))?Qt&&Mi<1?je.style.color="#000000":je.style.color="#ffffff":je.style.color="");const dt=e.dataset.goalPhase==="black-tunnel",Rt=e.dataset.goalPhase==="white";(vn&&!dt||Qt&&!Rt)&&en.markEfxSync();const _t=Qt;for(const cn of F){const io=_t?cn.userData.whiteMat:cn.userData.blackMat;cn.material!==io&&(cn.material=io)}I=vn?Ei(.2,.4,ot):0,T.value=I;for(const cn of Ae)cn.visible=!Qt&&I>.01;let Pt;if(Qt){const cn=Ze<1?ve(Ze,0,1,0,79):ve(Mi,0,1,79,99);Pt=Pu(l,cn,100),Pt.p.y-=(n?0:.4)*J1(Mi)}else Pt=Pu(a,100*Xc(Math.min(Gt,1)),100);if(h.copy(Pt.p),x.copy(Pt.q),Ut.positionFrequency=.2,Ut.rotationFrequency=.15,Ut.positionAmplitude=0,Ut.rotationAmplitude=0,vn){const cn=ot;Ut.positionFrequency=.2+.5*cn,Ut.rotationFrequency=.15,Ut.positionAmplitude=5*cn,Ut.rotationAmplitude=60*cn}else Qt&&(Ut.positionFrequency=ve(nr,0,.45,.5,.2),Ut.rotationFrequency=ve(nr,0,.45,.4,.15),Ut.positionAmplitude=ve(nr,0,.75,5,0),Ut.rotationAmplitude=ve(nr,0,.75,15,0));rt.visible=Nt>.02;const tn=window.innerHeight||1,bn=Math.max(1,(st==null?void 0:st.clientHeight)||tn),Tn=En<1?En:1-nr,Kt=rn.lerp(bn*(n?.72:.55),tn,Tn),ti=L.distanceTo(U),nn=A/180*Math.PI,wi=Math.tan(nn/2)*ti*2*(tn/Math.max(Kt,1));xi=Math.atan(wi/2/ti)*2/Math.PI*180,Qt?(ln=ve(Ze,0,1,n?36:60,0),xi=ve(nr,0,1,xi,n?58:70)):vn?(ln=Math.sin(ot*10+ke)*(n?4.5:7.5)*Ei(0,.2,ot),Ct.position.z=-80*qr(.2,0,ot)):(ln=ve(En,0,1,n?12:20,0),Ct.position.z=-80),he=.08*Ei(.5,1,Gt)+.02,Ze>0&&(he*=ve(tt.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),he=ve(as,0,.1,he,.05),pt=(1-St)*J*2.5*ve(En,0,.5,0,1)*ve(as,0,.25,1,0),Et(),it.u_frameIn.value=En,it.u_sunFactor.value=vn?1-Ei(.1,.2,ot):1,it.u_blackTunnelRatio.value=vn?Ei(.1,.3,ot):0,it.u_endRatio.value=vn?Ei(.65,.9,ot):0,it.u_offsetZ.value=Mt.u_offsetZ.value;const ls=ve(Mi,1,0,.2,1)*(Ja>0?1:0);Ne.u_tintColor.value.setStyle("#2533c2").multiplyScalar(ls);const Oi=st.getBoundingClientRect();Cu=Oi.bottom>0&&Oi.top<ye,e.dataset.goalPhase=Qt?"white":vn?"black-tunnel":"title"},mp=ye=>{if(!vn){Mt.u_showRatio.value=0,en.setEfxOffset(0,0);return}Mt.u_showRatio.value=q1(qr(0,.1,ot));const He=Mt.u_outBloomFromToStrength.value;He.z=ve(ot,.65,.75,0,.2),He.z=ve(ot,.75,.85,He.z,.15),He.z=ve(ot,.85,1,He.z,.15),He.x=ve(ot,.75,.85,20,60),He.x=ve(ot,.9,1,He.x,30);const Ce=ve(ot,.6,1,0,1,Vl);Mt.u_blackTunnelTransformRatio.value=Ce;const je=J*ye;br+=je*qr(.1,.3,ot)*ve(Ce,0,.25,1,.5),Tr+=je*ve(Ce,0,.25,1.5,1);const dt=br,Rt=Math.floor(dt),_t=dt-Rt,Pt=(Rt+op(_t))*Sa+Tr*Sa+ot*Sa*10,tn=-80*qr(.2,0,ot);let bn=tn-Ar,Tn=Pt-tr;(Math.abs(Tn)>8||Math.abs(bn)>20)&&(Tn=0,bn=0),Si=bn+Tn,Ar=tn,tr=Pt,Ct.position.z=tn,Mt.u_offsetZ.value=Pt,it.u_offsetZ.value=Pt,Mt.u_time.value=ke;const Kt=fo.length*ve(ot,.2,1,0,1),ti=Math.floor(Kt),nn=Math.min(Math.ceil(Kt),fo.length-1),ls=Kt-ti>.5?1:0;$.set(fo[ti]),K.set(fo[nn]),$.lerp(K,ls),Mt.u_color1.value.copy($),$.set(Gl[ti]),K.set(Gl[nn]),$.lerp(K,ls),Mt.u_color2.value.copy($);const Oi=n?.45:1;en.setEfxOffset(Si*ve(ot,0,.2,0,1)*Oi,Si*Ce*.01*Oi),en.setEfxAmount(ve(ot,0,.25,.35,.85)*(n?.35:1)),ln=Math.sin(ot*10+ke)*(n?4.5:7.5)*Ei(0,.2,ot)};let tl=0;const _p=ye=>{if(!Qt){De.update({whiteTunnelWaitRatio:0,aspect:C.aspect}),tl=Ze;return}Re.update(ye),ue.uniforms.u_time.value=ke,Pe.uniforms.u_time.value=ke,ue.uniforms.u_fbm.value=$e,Pe.uniforms.u_fbm.value=$e;let He=Ze-tl;Math.abs(He)>.08&&(He=0);const Ce=n?.4:1,je=rn.clamp(-He*ve(Ze,0,.9,500,0,Vl)*Ce,-1,1),dt=rn.clamp(-He*ve(Ze,0,.8,45,0,Vl)*Ce,-1,1);en.setEfxOffset(je,dt),en.setEfxAmount(ve(Ze,.75,1,1,0)*(n?.5:1)),tl=Ze;const Rt=Qt&&Mi<1?"#ffffff":"#000000",_t=n?Math.max(C.aspect,.95):Math.max(C.aspect,.01);De.update({whiteTunnelWaitRatio:as,aspect:_t,bg:Rt})},Lu=()=>Xo();window.addEventListener("scroll",Lu,{passive:!0}),Xo();const Du=ye=>{var Nu;const He=Math.min(.05,Math.max(0,ye||.016666666666666666));if(Ru=performance.now(),!Cu){if(st){const kt=st.getBoundingClientRect();kt.bottom>0&&kt.top<window.innerHeight&&en.render()}return}St+=((Ye?1:0)-St)*.1,qe=ve(St,0,1,1,.3)*He,qe=ve(En,0,1,He,qe),qe=ve(et,.5,.75,qe,He),ke+=qe,Ne.u_time.value=ke,pt=(1-St)*J*2.5*ve(En,0,.5,0,1)*ve(as,0,.25,1,0),mp(qe),_p(qe),ut(qe),vn&&(ln=Math.sin(ot*10+ke)*7.5*Ei(0,.2,ot)),Et();const Ce=Mi,je=ve(Ce,0,.1,0,1)*ve(Ce,.9,1,1,0);Ne.u_loopLinearBlend.value=je;const dt=ve(Ce,.9,1,0,1,Xc);ne=dt>0;let Rt,_t,Pt,tn=!0;if(Ce<.5)Cr=0,Rt=Ei(-.3,1,Gt)*.75,_t=0,Pt=89,Le.uniforms.u_cardOpacity.value=0;else{Rt=ve(Ce,.9,1,0,1),_t=140,Pt=Math.min(O-1,287);const kt=Math.min(2,Math.max(0,.5+Math.max(0,ee.getFbm(ke*8,3)+.5)*4));Le.uniforms.u_cardOpacity.value=kt*dt,Ce<1?(Cr=Math.max(0,Cr),tn=!1):Cr=0}Cr===0&&(Wo+=qe*Rt*Qa),je===1&&(Wo=0);const bn=Pt-_t+1,Tn=os[0];let ti=(Tn+Wo)*60%bn,nn=Math.floor(ti),wi=(nn+1)%bn+_t;nn+=_t,wi<nn&&(tn||(wi=nn=_t,Wo=-Tn,Cr=Number.POSITIVE_INFINITY));const ls=ti-Math.floor(ti);Be.setXYZ(0,nn,wi,tn||wi>=nn?ls:0),Be.needsUpdate=!0;const Oi=ve(Tu+Ce,.9,2,90,139,j1),cs=Math.floor(Oi),cn=Math.ceil(Oi),io=Oi-cs;j.setXYZ(0,cs,cn,io),j.needsUpdate=!0,Ue.visible=Ce>=.95&&Nt>.02,te=ne?te+qe:0;{const kt=G.x,Pr=G.y,qo=Math.floor(10*te%(kt*(Pr+1))),us=qo/(kt*(Pr+1)),Lr=qr(0,.15,us)*qr(1,.9,us);Ne.u_faceLedLight.value=Lr,Le.uniforms.u_cardUvOffset.value.set(qo%kt/kt,(Pr-Math.floor(qo/kt))/Pr)}if(Ne.u_cardPosition.value.set(pe.getX(0),pe.getY(0)+.9,pe.getZ(0)),I>.01&&!Qt&&!to){for(let kt=0;kt<Ge;kt++){ei[kt]=(ei[kt]+.2*qe)%1,Cr===0&&(ci[kt]+=qe*Rt*Qa);const us=(rn.lerp(0,os[kt+1],I)+ci[kt])*60%bn;let Lr=Math.floor(us),nl=(Lr+1)%bn+_t;Lr+=_t,nl<Lr&&!tn&&(nl=Lr=_t);const vp=us-Math.floor(us);xe.setXYZ(kt,Lr,nl,vp),Oe.setXYZ(kt,cs,cn,io)}xe.needsUpdate=!0,Oe.needsUpdate=!0}if((Nu=en.setScrollVelocity)==null||Nu.call(en,Math.abs(pt)+Math.abs(J)*.5),vn){const kt=Mt.u_resolution.value.clone();ze.visible=!1,yt.visible=!1,rt.visible=Nt>.02,Mt.u_feedbackTexture.value=we.texture,Mt.u_resolution.value.set(Fe.width,Fe.height),w.setRenderTarget(Fe),w.setClearColor(0,0),w.clear(),w.render(S,C),w.setRenderTarget(null),Mt.u_resolution.value.copy(kt);const Pr=we;we=Fe,Fe=Pr,Mt.u_feedbackTexture.value=we.texture,it.u_blackTunnelTexture.value=we.texture,yt.visible=!0}w.setClearColor(Ne.u_bgColor.value,en.clearAlpha),en.render()},Iu=ye=>{el=requestAnimationFrame(Iu);const He=Math.min(.05,(ye-Ru)/1e3);ye-Uu>50&&Du(He)};let Uu=0;const gp=ye=>{Uu=performance.now(),Du(ye)};return el=requestAnimationFrame(Iu),requestAnimationFrame(()=>{no(),Xo(),en.render()}),{resize:no,updateScroll:Xo,tickFrame:gp,getAutoScrollSpeed:()=>pt,destroy(){cancelAnimationFrame(el),window.removeEventListener("resize",no),window.removeEventListener("scroll",Lu),ae.dispose(),le.dispose(),en.destroy(),w.dispose()}}}function Sy(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(d=>{if(d.querySelector(".goal-word"))return;const _=d.textContent.replace(/\s+/g," ").trim().split(" ");d.innerHTML=_.map(v=>`<span class="goal-word">${v}</span>`).join(" ")});const r=ap(i),s=()=>window.innerWidth<812,o=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const d=e.getBoundingClientRect(),_=d.width,v=d.left;n.forEach(g=>{const m=Array.from(g.querySelectorAll(".goal-word"));if(m.length<2){m.forEach(S=>{S._offsetX=0});return}m.forEach(S=>{S.style.transform="translateZ(0)"});let p=_;m.forEach(S=>{const L=S.getBoundingClientRect();S._domRect=L,p-=L.width});let E=0;const y=p/(m.length-1);m.forEach(S=>{S._offsetX=-S._domRect.left+v+E,E+=S._domRect.width+y})})};c(),window.addEventListener("resize",c);let u=null;t&&t.parentElement&&(u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const f=()=>{const d=r.range("blackTitle").ratio,_=r.range("blackTunnel").ratio,v=r.between("whiteTunnel","whiteFrameOut").ratio,g=r.between("whiteFrameBreak","astronautDrop").ratio,m=ve(v,0,.25,0,1);r.progress();const p=window.innerHeight;if(t){const A=i.getBoundingClientRect(),C=window.scrollY||0,M=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+C,D=C>=M-1&&A.bottom>p;t.classList.toggle("is-pinned",D),u&&(u.style.height=D?`${t.offsetHeight||p}px`:"0px"),t.style.background=m>.5?"#f0f1fa":"#000000"}let E=ve(d,a,l,0,1);const y=E>0&&E<1;let S=ve(E,.5,1,1,s()?9:12,Xc);S*=ve(E,0,.15,.85,1,K1);let L=ve(E,.9,1,1,0);L*=ve(E,0,.05,0,1),L*=ve(_,0,.12,1,0);const U=ve(E,.4,.6,0,1,op);if(e.classList.toggle("is-on-black",m<.5),e.style.opacity=String(L),e.style.transform=`translate3d(-50%, -50%, 0) scale(${S})`,e.style.visibility=y&&L>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(A=>{const C=A._offsetX||0;A.style.transform=`translateX(${U*C}px)`}),o){const A=ve(_,.02,.15,1,0);o.style.opacity=String(A),o.style.transform="none"}return i.dataset.goalPhase=v>.01?"white":_>.01?"black-tunnel":"title",{blackTitleRatio:d,blackTunnelRatio:_,whiteTunnelRatio:v,astronautDropRatio:g,toWhite:m}};return window.addEventListener("scroll",f,{passive:!0}),f(),{updateScroll:f,ranges:r,destroy(){window.removeEventListener("scroll",f),window.removeEventListener("resize",c)}}}function Ma(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((s,o)=>{const a=document.createElement("div");a.className=e,a.textContent=s,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),o<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function yy(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,s)=>{const o=document.createElement("div");o.className="word",o.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",o.appendChild(l),t.push(l)}),i.appendChild(o),r<s.length-1&&i.appendChild(document.createTextNode(" "))}),t}function Hr(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function My(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=Hr(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),s=document.getElementById("home-reel-title-line-2"),o=document.getElementById("home-reel-content"),a=Hr(document.getElementById("home-reel-desc"),2),l=Hr(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),f=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let d=[],_=0,v=[],g=!0;const m=()=>{d.forEach(ie=>{ie.style.transform="translate3d(0, 100%, 0)"}),v.forEach(ie=>{ie.style.transform="translate3d(0, 100%, 0)",ie.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!s||([r,s].forEach(ie=>{ie.style.overflow="hidden",ie.style.display="block",ie.style.position="relative"}),d=[...Ma(r,"word"),...Ma(s,"word")],d.forEach(ie=>{ie.style.position="relative",ie.style.bottom="0.1em"}),_=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=Ma(a,"word"),a.style.overflow="hidden"),m())})();const E=document.getElementById("home-featured"),y=Hr(document.getElementById("home-featured-title"),2),S=Hr(document.getElementById("home-featured-disclaimer"),2),L=Hr(document.getElementById("home-featured-cta"),1);let U=[],A=[],C=!0;const w=()=>{C=!1,y&&(y._time=0,y._animating=!1),S&&(S._time=0,S._animating=!1),L&&(L._time=0,L._animating=!1),i()||(A.forEach(ie=>{ie.style.transform="translate3d(0, 100%, 0)"}),U.forEach(ie=>{ie.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(y){if(y.style.overflow="hidden",U=yy(y),S){const ie=S.textContent.trim();S.textContent="";const pe=document.createElement("div");pe.className="line",pe.textContent=ie,pe.style.transform="translate3d(0, 100%, 0)",pe.style.willChange="transform";const Me=document.createElement("div");Me.style.position="relative",Me.style.overflow="hidden",Me.appendChild(pe),S.appendChild(Me),A=[pe]}L&&(L.style.transform="translate3d(0, 150%, 0) rotate(10deg)",L.style.opacity="0",L.style.overflow="hidden"),w()}})();const D=Hr(document.getElementById("home-goal-title"),2);let z=[];D&&(D.style.overflow="hidden",z=Ma(D,"word"),z.forEach(ie=>{ie.style.transform="translate3d(0, 100%, 0)",ie.style.opacity="0"}));let O=0,W=!1,Y=0;const X=ie=>{if(!t||!e)return;if(!An(e).isActive){g=!0;return}g&&(g=!1,m());const Me=An(t),Be=An(o||a),oe=window.innerHeight*.1;if(t._time=Cn(t._time+(t._animating?ie:-ie),0,2),a&&(a._time=Cn(a._time+(a._animating?ie:-ie),0,2)),l&&(l._ratio=Xn(l._ratio+(l._animating?ie:-ie))),Me.screenRatio>-1&&(t._animating=!0,i()?d.forEach(ae=>{ae.style.transform="translate3d(0, 0, 0)"}):d.forEach((ae,le)=>{let we,Fe;le<2?(we=ve(t._time-Math.abs(2-le)/10,.5,1.2,-_,0,ft),Fe=ve(t._time-le/10,0,1,100,0,ft)):(we=0,Fe=ve(t._time-le/10,0,1,-100,0,ft)),ae.style.transform=`translate3d(${we}px, ${Fe}%, 0)`}),n)){const ae=Me.showScreenOffset*-oe*.5;n.style.transform=`translate3d(0, ${ae}px, 0)`}if(Be.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const ae=Be.showScreenOffset*-oe*1.5;if(a&&(a.style.transform=`translate3d(0, ${ae}px, 0)`,i()?v.forEach(le=>{le.style.opacity="1",le.style.transform="translate3d(0, 0, 0)"}):v.forEach((le,we)=>{const Fe=ve(a._time-we/100,0,1,.1,1,of),Ne=ve(a._time-we/100,0,1,100,0,of);le.style.opacity=String(Fe),le.style.transform=`translate3d(0, ${Ne}%, 0)`})),l){const le=Be.showScreenOffset*-oe*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${le}px) translate3d(0, ${ve(l._ratio,0,1,150,0,ft)}%, 0) rotate(${ve(l._ratio,0,1,10,0,ft)}deg)`,l.style.opacity=String(ft(l._ratio))):(l.style.transform=`translateY(${le}px)`,l.style.opacity="1")}}if(c){const ae=An(c),le=Xn(ve(ae.showScreenOffset,.05,.85,0,1,ft));c.style.opacity=String(le),c.style.transform=`translate3d(0, ${ve(le,0,1,80,0,ft)}px, 0) scale(${ve(le,0,1,.96,1,ft)})`}if(u){const ae=An(u);Y=Xn(ve(ae.showScreenOffset,0,.7,0,1,ft)),u.style.opacity=String(.4+Y*.6),u.style.transform=`translate3d(0, ${ve(Y,0,1,60,0,ft)}px, 0) scale(${ve(Y,0,1,.94,1,ft)})`,W=Y>.9,O=Cn(O+(W?ie:-ie*2),0,1.4),f.forEach((le,we)=>{const Fe=ve(O-we/10,0,.6,0,1,ft),Ne=ve(O-we/10,0,.6,0,180,ft);le.style.transform=`scale(${Fe}) rotate(${Ne}deg)`,le.style.display="inline-block"})}},q=ie=>{if(!E||!y)return;if(An(E).isActive){C&&w();const Me=An(y),Be=An(S),j=An(L);y._time=Cn(y._time+(y._animating?ie:-ie),0,2),S&&(S._time=Cn(S._time+(S._animating?ie:-ie),0,2)),L&&(L._time=Cn(L._time+(L._animating?ie:-ie),0,1)),Me.screenRatio>-1&&(y._animating=!0,i()?U.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):U.forEach((oe,ae)=>{const le=ve(y._time*1.5-ae/20,0,1,1,0,ft),we=ve(y._time*1.5-ae/20,0,1,10,0,ft);oe.style.transform=`translate3d(0, ${le}em, 0) rotate(${we}deg)`})),Be.screenRatio>-1&&S&&(S._animating=!0,i()?A.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0)"}):A.forEach((oe,ae)=>{const le=ve(S._time-ae/20,0,1,100,0,ft);oe.style.transform=`translate3d(0, ${le}%, 0)`})),j.screenRatio>-1&&L&&(i()?(L.style.transform="translate3d(0, 0, 0) rotate(0deg)",L.style.opacity="1"):(L._animating=!0,L.style.transform=`translate3d(0, ${ve(L._time,0,1,150,0,ft)}%, 0) rotate(${ve(L._time,0,1,10,0,ft)}deg)`,L.style.opacity=String(ft(L._time))))}else C=!0},V=ie=>{if(!D)return;An(D).screenRatio>-1&&(D._animating=!0),D._time=Cn(D._time+(D._animating?ie:-ie),0,2),z.forEach((Me,Be)=>{const j=ve(D._time-Be/20,0,1,0,1,ft),oe=ve(D._time-Be/20,0,1,100,0,ft);Me.style.opacity=String(j),Me.style.transform=`translate3d(0, ${oe}%, 0)`})},ce=()=>{r&&(_=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",ce),{update(ie){X(ie),q(ie),V(ie)},destroy(){window.removeEventListener("resize",ce)}}}const mf=28,wy=4,Ey=8;function _f(){return window.innerWidth<812}function by(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var C,w;const r=t.querySelector(".project-item-main"),s=t.querySelector(".project-item-image"),o=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((C=o==null?void 0:o.textContent)==null?void 0:C.trim())||"",u=((w=a==null?void 0:a.textContent)==null?void 0:w.trim())||"",f=[];a&&(a.textContent="",[...u].forEach(M=>{const D=document.createElement("div");if(D.className="project-item-line-2-inner-list",D.style.transform="translateY(-400%)",M===" ")D.style.width="0.3em";else for(let z=0;z<4;z++){const O=document.createElement("span");O.textContent=M,D.appendChild(O)}a.appendChild(D),f.push(D)})),o&&(o.textContent="");let d=!1,_=!1,v=0,g=0,m=0,p=0,E=0,y=!1,S=0,L=0,U=0,A=0;return _f()||(t.addEventListener("mouseenter",()=>{_=!0}),t.addEventListener("mouseleave",()=>{_=!1}),r==null||r.addEventListener("mouseenter",()=>{d=!0}),r==null||r.addEventListener("mouseleave",()=>{d=!1})),{dom:t,main:r,image:s,line1:o,line2Icon:l,tags:c,letterCols:f,index:n,update(M){const D=An(t),z=D.ratio>-1&&D.ratio<1;z&&(y=!0),y&&(m+=M);const O=Xn(ve(m,0,.85,0,1,ft)),W=ve(O,0,1,90,0,ft);if(t.style.opacity=String(O),t.style.transform=`translate3d(0, ${W}px, 0)`,o&&z){p+=M;const X=Math.min(c.length,Math.floor(mf*p)-wy),q=Math.min(c.length,Math.floor(mf*p));let V="";for(let ce=0;ce<Math.max(0,X);ce++)V+=c[ce];for(let ce=0;ce<q-Math.max(0,X);ce++)V+=String.fromCharCode(33+Math.floor(Math.random()*93));o.textContent=V}if(z&&(E+=M*.8),g=Xn(g+(_?1:-1)*M*2.5),_f())f.forEach((X,q)=>{const V=Xn(g-Math.abs(q-f.length-1)/100),ce=ve(V,0,1,0,1.5,ft);X.style.transform=`translate3d(1.5em, 0, 0) translateX(${ce}em)`}),l&&(l.style.transform="translateX(1em)");else if(f.forEach((X,q)=>{const V=ve(q,0,Math.max(1,f.length-1),Math.PI/2,3*Math.PI/2),ce=Xn(E-Math.cos(V)/Ey),ie=ve(ce,0,1,500,0,Y1),pe=Xn(g-Math.abs(q-f.length-1)/100),Me=ve(pe,0,1,0,1.5,ft);X.style.transform=`translate3d(${Me}em, -${ie}%, 0)`}),l){const X=ve(g,.3,1,0,1,ft);l.style.transform=`translateX(${X}em)`}v=Cn(v+(d?1:-1)*M,0,1),d?(U=(Math.random()-.5)*ve(v,0,.6,1,0)*8,A=(Math.random()-.5)*ve(v,0,.6,1,0)*8):(U*=.92,A*=.92),S+=(U-S)*.2,L+=(A-L)*.2;const Y=ve(v,0,1,1,1.06,ft);s&&(s.style.transform=`translate3d(${S}px, ${L}px, 0) scale(${Y})`)}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}function Ty(){return window.innerWidth<812}function Ay(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const s=document.createElement("span");s.className="reel-char-wrap",s.style.display="inline-block",s.style.overflow="hidden",s.style.verticalAlign="top";const o=document.createElement("span");o.className="reel-char",o.textContent=r,o.style.display="inline-block",s.appendChild(o),s._inner=o,t.appendChild(s),t._chars.push(s)}),t._randCharIndex=0}),i._splitted={words:e}}function Ry(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),s=document.getElementById("home-reel-video-title"),o=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));s&&Ay(s);const l=2;let c=0,u=0,f=0,d=0,_=!1,v=!1,g=0,m=0,p=!1,E=!1,y=0;const S=U=>{var C;if(!U)return;const A=(C=U.play)==null?void 0:C.call(U);A&&typeof A.catch=="function"&&A.catch(()=>{})};return{update:U=>{var D;if(!i)return;const A=e?An(e):null,C=n?An(n):null,w=Ty(),M=w?!!(C!=null&&C.isActive):!!A&&A.showScreenOffset>0&&(C?C.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",M),M){const z=(A==null?void 0:A.top)??0,O=(A==null?void 0:A.height)??1,W=window.innerHeight,Y=z-(W-O)*.5,X=((C==null?void 0:C.top)??0)-(W-((C==null?void 0:C.height)??W))*.5;if(y=Xn(ve(window.scrollY+z,Y,X,0,1)),y=Xn(ve((A==null?void 0:A.showScreenOffset)??0,.15,1.1,0,1,ft)),r&&(S(r),r.style.opacity=String(.35+y*.65)),t&&(S(t),t.style.opacity=String(1-y*.85)),e){const q=ve(y,0,1,1,1.08,ft);e.style.transform=`scale(${q})`,e.style.opacity=String(ve(y,.7,1,1,.15,ft))}if(n){const q=ve(y,0,1,48,0,ft),V=ve(y,0,1,.94,1,ft);n.style.transform=`translate3d(0, ${q}px, 0) scale(${V})`,n.style.opacity=String(.25+y*.75)}y===1||y>.9?(_=!0,v=!0):(v=!1,_=!1),p=y>.85,E=y>.85}else(D=r==null?void 0:r.pause)==null||D.call(r),y=0,_=!1,v=!1,p=!1,E=!1;if(f=Cn(f+(_?U:-U),0,1e9),d=Math.min(y,Xn(d+(v?U:-U))),u=f%l,s!=null&&s._splitted&&!w){const z=s._splitted.words;for(let O=0;O<z.length;O++){const W=z[O];c-u>l-1&&(W._randCharIndex=Math.round(Math.random()*(W._chars.length-1)));for(let Y=0;Y<W._chars.length;Y++){const X=W._chars[Y];let q=ve(d-O/4-Y/20,0,.6,200,0,ft);Y===W._randCharIndex&&(q+=ve(u-O/10,.5,1.3,0,-100,ft)),X._inner&&(X._inner.style.transform=`translate3d(0, ${q}%, 0)`)}}}c=u,g=Cn(g+(p?U:-U*2),0,1.4),m=Cn(m+(E?U:-U*2),0,1.4),o.forEach((z,O)=>{const W=ve(g-O/10,0,.6,0,1,ft),Y=ve(g-O/10,0,.6,0,180,ft);z.style.transform=`scale(${W}) rotate(${Y}deg)`}),a.forEach((z,O)=>{const W=ve(m-O/10,0,.6,0,1,ft),Y=ve(m-O/10,0,.6,0,180,ft);z.style.transform=`scale(${W}) rotate(${Y}deg)`})},destroy(){}}}const Xl=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new H(-.0112049,-.0141946,0),boxMax:new H(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new H(-.0180006,-.00963629,0),boxMax:new H(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],Cy=`
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
`,Py=`
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
`,Ly=`
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
`,Dy=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function Iy(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function Uy(){const i=Iy(),e="/zyrax-studio/",t=await Promise.all(Xl.map(m=>Hn(`${e}assets/models/lines/${m.fileName}.buf`))),n=new ja,r=new Pn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);let s;try{s=new Eu({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(m){return console.error("Lines WebGL unavailable",m),{update(){},resize(){},destroy(){}}}s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.autoClear=!0;const o=[],a=new H,l=new H,c=new Qs,u=new at;for(let m=0;m<Xl.length;m++){const p=Xl[m],E=t[m],y=document.querySelector(p.sectionSelector);if(!y||!E)continue;const S=new Li,L=new Li;S.add(L),n.add(S);const U=new Lt({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:p.aoThreshold},u_color0:{value:new Ke(p.color0)},u_color1:{value:new Ke(p.color1)},u_radius:{value:.008}},vertexShader:Cy,fragmentShader:Py,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),A=new Ht(E,U);A.frustumCulled=!1,A.renderOrder=200,L.add(A);const C=new Lt({uniforms:{u_color0:{value:new Ke(p.color0)},u_color1:{value:new Ke(p.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:Ly,fragmentShader:Dy,side:yn,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),w=new Ht(new Fi(2,2),C);w.frustumCulled=!1,w.renderOrder=200,L.add(w);const M=E.attributes.position.array,D=E.attributes.position.count,z=new Float32Array(D);for(let O=0;O<D;O++)z[O]=M[O*3+2];o.push({data:p,sectionEl:y,container:S,inner:L,mesh:A,mat:U,circle:w,circleMat:C,lineRatioArray:z,cpAttr:E.attributes.CP,cdAttr:E.attributes.Cd,count:D,offsetY:0,framePos:new H,frameQuat:new Dn,frameScale:new H(1,1,1)})}let f=1,d=1;const _=()=>{f=window.innerWidth||1,d=window.innerHeight||1;const m=Math.sqrt(f*f+d*d),p=d/m;u.set(f/d*p,p),r.fov=60,r.aspect=f/d,r.position.set(f/2,-d/2,d/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(f/2,-d/2,0),r.updateProjectionMatrix(),s.setSize(f,d,!1)};_(),window.addEventListener("resize",_);const v=m=>{var rt;const{data:p,sectionEl:E,container:y,inner:S,mat:L,circle:U,circleMat:A,lineRatioArray:C,cpAttr:w,cdAttr:M,count:D}=m,O=An(E).top+m.offsetY,W=d,Y=p.scrollToRatioFactors;let X=Xn(-(O-Y[0]*W)/(Y[1]*W));X=$1(X);const q=f<=812,V=.008*ve(f,540,1920,2,1)*(q?.72:1),ce=f/u.x,ie=d/u.y;let pe=p.margin.x,Me=p.margin.y;q&&p.id==="goal"&&(pe=.42,Me=-.35),S.position.x=pe*ce,S.position.y=Me*ie-O,S.scale.set(ce,ie,1),m._showSmooth==null&&(m._showSmooth=X),m._showSmooth+=(X-m._showSmooth)*.18,L.uniforms.u_showRatio.value=m._showSmooth,L.uniforms.u_radius.value=V;const Be=(rt=E.dataset)==null?void 0:rt.goalPhase,j=p.id==="goal"&&(Be==="black-tunnel"||Be==="white");y.position.copy(m.framePos),y.quaternion.copy(m.frameQuat),y.scale.copy(m.frameScale),y.updateMatrixWorld(!0),c.min.copy(p.boxMin),c.max.copy(p.boxMax),c.applyMatrix4(S.matrixWorld),y.visible=!j&&c.max.y>-d&&c.min.y<0&&X>.001;let oe=0,ae=0;for(let F=0;F<D;F++)X>=C[F]&&(oe=F,F===D-1?ae=0:ae=(X-C[F])/(C[F+1]-C[F]||1));const le=oe,we=Math.min(oe+1,D-1);a.fromArray(w.array,oe*3),l.fromArray(w.array,we*3),a.lerp(l,ae);const Fe=M.array;let Ne=Fe[le]*(1-ae)+Fe[we]*ae;Ne=.9+.1*Ne;const it=Xn((X-(p.aoThreshold-.02))/.04);U.position.copy(a),U.scale.set(V,V,1),A.uniforms.u_ao.value=Math.min(1,Ne+1-it);let Xe=C[le]*(1-ae)+C[we]*ae;Xe=1-Math.pow(1-Cn(Xe,0,1),2),A.uniforms.u_mixRatio.value=Xe},g=()=>{for(const m of o)v(m);s.render(n,r)};return g(),{update:g,resize:_,setGoalOffset(m){const p=o.find(E=>E.data.id==="goal");p&&(p.offsetY=m||0)},setGoalFrame({scale:m=1,rotation:p=0,active:E=!1}={}){const y=o.find(M=>M.data.id==="goal");if(!y)return;if(!E){y.framePos.set(0,0,0),y.frameQuat.identity(),y.frameScale.set(1,1,1);return}const S=f*.5,L=-d*.5,U=new vt;U.makeTranslation(S,L,0);const A=new vt().makeRotationZ(-p),C=new vt().makeScale(m,m,1),w=new vt().makeTranslation(-S,-L,0);U.multiply(A).multiply(C).multiply(w),U.decompose(y.framePos,y.frameQuat,y.frameScale)},destroy(){window.removeEventListener("resize",_),s.dispose(),i.remove()}}}const gf=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),up=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};up();window.addEventListener("resize",up);const jr=new Cp({duration:gf?1.05:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!0,syncTouch:!1,wheelMultiplier:gf?.9:.82,touchMultiplier:1.1});window.lenis=jr;let po=0,mo=0,Ao=!1,hp=0;window.addEventListener("wheel",()=>{hp=performance.now(),Ao=!0},{passive:!0});window.addEventListener("pointerdown",()=>{Ao=!0},{passive:!0});const Ny="/zyrax-studio/assets/projects/",vf=document.getElementById("project-list");vf&&(vf.innerHTML=$m.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${Ny}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const Fy=document.getElementById("hero-canvas"),Oy=document.getElementById("home-hero-visual-container"),fr=document.getElementById("home-hero"),ql=document.getElementById("home-hero-title"),Yl=document.getElementById("home-hero-visual-container"),xf=document.getElementById("home-hero-scroll-container"),fp=document.getElementById("home-goal"),zy=document.getElementById("goal-tunnel-canvas"),By=document.getElementById("home-goal-tunnel-title"),ky=document.getElementById("home-goal-tunnel-sticky"),Hy=Sy(fp,By,ky);let Vn=null;const Vy=My(),Gy=by(),Wy=Ry();let is=null,Sf=performance.now();uu.ticker.add(i=>{var r;const e=performance.now(),t=Math.min(.05,(e-Sf)/1e3);if(Sf=e,Vn!=null&&Vn.getAutoScrollSpeed&&(po=Vn.getAutoScrollSpeed()),e-hp>80&&Math.abs(po)>.01&&(Ao=!1),mo+=Math.abs(po)>0&&!Ao?t:-1,mo=Math.max(0,Math.min(1,mo)),!Ao&&mo>0&&Math.abs(po)>.01){const s=window.innerHeight,o=po*s*t*mo*.55,a=(jr.animatedScroll??jr.scroll??window.scrollY)+o;jr.scrollTo(a,{immediate:!0,force:!0})}jr.raf(i*1e3),Vy.update(t),Gy.update(t),Wy.update(t),is==null||is.update(),(r=Vn==null?void 0:Vn.tickFrame)==null||r.call(Vn,t)});uu.ticker.lagSmoothing(0);jr.on("scroll",()=>{if(Hy.updateScroll(),Vn==null||Vn.updateScroll(),is==null||is.update(),!fr)return;const i=fr.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));ql&&(ql.style.transform=`translate3d(0, ${t*-12}vh, 0)`,ql.style.opacity=String(Math.max(0,1-t*1.2))),Yl&&(Yl.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,Yl.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),xf&&(xf.style.opacity=String(Math.max(0,1-t*2)))});Uy().then(i=>{is=i}).catch(i=>console.error("Scroll lines failed",i));xy(zy,fp).then(i=>{Vn=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{W1(Fy,Oy).then(()=>fr==null?void 0:fr.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),fr==null||fr.classList.add("is-in")})});function dp(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,s)=>{const o=document.createElement("span");o.className=e,o.textContent=r,o.style.transitionDelay=`${s*35}ms`,i.appendChild(o),i.appendChild(document.createTextNode(" "))})}dp(document.getElementById("home-hero-title"));dp(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const Xy=document.querySelectorAll(".home-hero-scroll-container-cross");Xy.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const pp=document.querySelector("[data-menu]");var yf;(yf=document.querySelector("[data-menu-open]"))==null||yf.addEventListener("click",()=>{pp.hidden=!1,document.body.style.overflow="hidden"});document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",()=>{pp.hidden=!0,document.body.style.overflow=""})});var Mf;(Mf=document.querySelector("[data-reel]"))==null||Mf.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var wf;(wf=document.querySelector("[data-sound]"))==null||wf.addEventListener("click",i=>{i.currentTarget.classList.toggle("is-on")});var Ef;(Ef=document.querySelector("#end-bottom"))==null||Ef.addEventListener("click",i=>{i.preventDefault(),jr.scrollTo("#footer-section")});
