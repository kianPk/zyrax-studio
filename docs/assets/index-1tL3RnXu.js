var am=Object.defineProperty;var lm=(r,e,t)=>e in r?am(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ge=(r,e,t)=>lm(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var oh="1.3.27";function jf(r,e,t){return Math.max(r,Math.min(e,t))}function cm(r,e,t){return(1-t)*r+t*e}function um(r,e,t,n){return cm(r,e,1-Math.exp(-t*n))}function hm(r,e){return(r%e+e)%e}var fm=class{constructor(){Ge(this,"isRunning",!1);Ge(this,"value",0);Ge(this,"from",0);Ge(this,"to",0);Ge(this,"currentTime",0);Ge(this,"lerp");Ge(this,"duration");Ge(this,"easing");Ge(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=jf(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=um(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function dm(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var pm=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ge(this,"width",0);Ge(this,"height",0);Ge(this,"scrollHeight",0);Ge(this,"scrollWidth",0);Ge(this,"debouncedResize");Ge(this,"wrapperResizeObserver");Ge(this,"contentResizeObserver");Ge(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ge(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ge(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=dm(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Qf=class{constructor(){Ge(this,"events",{})}emit(r,...e){var n;const t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const mm=100/6,tr={passive:!1};function ah(r,e){return r===1?mm:r===2?e:1}var _m=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ge(this,"touchStart",{x:0,y:0});Ge(this,"lastDelta",{x:0,y:0});Ge(this,"window",{width:0,height:0});Ge(this,"emitter",new Qf);Ge(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ge(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ge(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ge(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=ah(n,this.window.width),s=ah(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ge(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,tr),this.element.addEventListener("touchstart",this.onTouchStart,tr),this.element.addEventListener("touchmove",this.onTouchMove,tr),this.element.addEventListener("touchend",this.onTouchEnd,tr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,tr),this.element.removeEventListener("touchstart",this.onTouchStart,tr),this.element.removeEventListener("touchmove",this.onTouchMove,tr),this.element.removeEventListener("touchend",this.onTouchEnd,tr)}};const lh=r=>Math.min(1,1.001-2**(-10*r));var gm=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:v=!0,prevent:_,virtualScroll:m,overscroll:w=!0,autoRaf:b=!1,anchors:M=!1,autoToggle:L=!1,allowNestedScroll:D=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:I=A,stopInertiaOnNavigate:T=!1,respectReducedMotion:S=!0}={}){Ge(this,"_isScrolling",!1);Ge(this,"_isStopped",!1);Ge(this,"_isLocked",!1);Ge(this,"_preventNextNativeScrollEvent",!1);Ge(this,"_resetVelocityTimeout",null);Ge(this,"_rafId",null);Ge(this,"_isDraggingSelection",!1);Ge(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ge(this,"isTouching");Ge(this,"isIos");Ge(this,"time",0);Ge(this,"userData",{});Ge(this,"lastVelocity",0);Ge(this,"velocity",0);Ge(this,"direction",0);Ge(this,"options");Ge(this,"targetScroll");Ge(this,"animatedScroll");Ge(this,"animate",new fm);Ge(this,"emitter",new Qf);Ge(this,"dimensions");Ge(this,"virtualScroll");Ge(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ge(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ge(this,"onTransitionEnd",r=>{var e;(e=r.propertyName)!=null&&e.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Ge(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ge(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ge(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var v,_,m,w,b;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((v=g.hasAttribute)==null?void 0:v.call(g,"data-lenis-prevent"))||h==="vertical"&&((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-horizontal"))||i&&((w=g.hasAttribute)==null?void 0:w.call(g,"data-lenis-prevent-touch"))||s&&((b=g.hasAttribute)==null?void 0:b.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,p=i&&n.type==="touchend";p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ge(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ge(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=oh,window.lenis||(window.lenis={}),window.lenis.version=oh,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=lh:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:g,autoResize:v,prevent:_,virtualScroll:m,overscroll:w,autoRaf:b,anchors:M,autoToggle:L,allowNestedScroll:D,naiveDimensions:I,stopInertiaOnNavigate:T,respectReducedMotion:S},this.dimensions=new pm(r,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new _m(t,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=r,p=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let g=null;if(typeof f=="string"?(g=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),g||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(g=f),g){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?M.left:M.top}const v=g.getBoundingClientRect(),_=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),w=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(w.scrollPaddingLeft):Number.parseFloat(w.scrollPaddingTop);f=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(b)?0:b)}}if(typeof f=="number"){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=f-this.animatedScroll;g>this.limit/2?f-=this.limit:g<-this.limit/2&&(f+=this.limit)}}else f=jf(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=lh:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),v||this.emit(),v&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,h,d,f,p,g;if(n-(i.time??0)>2e3){i.time=Date.now();const D=window.getComputedStyle(r);if(i.computedStyle=D,s=["auto","overlay","scroll"].includes(D.overflowX),o=["auto","overlay","scroll"].includes(D.overflowY),c=["auto"].includes(D.overscrollBehaviorX),h=["auto"].includes(D.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,f=r.scrollHeight,p=r.clientWidth,g=r.clientHeight,a=d>p,l=f>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,m,w,b,M,L;if(v==="horizontal")_=Math.round(r.scrollLeft),m=d-p,w=e,b=s,M=a,L=c;else if(v==="vertical")_=Math.round(r.scrollTop),m=f-g,w=t,b=o,M=l,L=h;else return!1;return!L&&(_>=m||_<=0)?!0:(w>0?_<m:_>0)&&b&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?hm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ed(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Uo={duration:.5,overwrite:!1,delay:0},yu,un,Bt,ai=1e8,Lt=1/ai,uc=Math.PI*2,vm=uc/4,xm=0,td=Math.sqrt,Sm=Math.cos,Mm=Math.sin,an=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},Ji=function(e){return typeof e=="number"},Eu=function(e){return typeof e>"u"},Ci=function(e){return typeof e=="object"},Ln=function(e){return e!==!1},Tu=function(){return typeof window<"u"},jo=function(e){return Wt(e)||an(e)},nd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,ym=/random\([^)]+\)/g,Em=/,\s*/g,ch=/(?:-?\.?\d|\.)+/gi,id=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rd=/[+-]=-?[.\d]+/,Tm=/[^,'"\[\]\s]+/gi,bm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,Mi,hc,bu,jn={},Ka={},sd,od=function(e){return(Ka=Vs(e,jn))&&Fn},wu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},No=function(e,t){return!t&&console.warn(e)},ad=function(e,t){return e&&(jn[e]=t)&&Ka&&(Ka[e]=t)||jn},Oo=function(){return 0},wm={suppressEvents:!0,isStart:!0,kill:!1},Na={suppressEvents:!0,kill:!1},Am={suppressEvents:!0},Au={},_r=[],fc={},ld,Gn={},vl={},uh=30,Oa=[],Ru="",Cu=function(e){var t=e[0],n,i;if(Ci(t)||Wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Oa.length;i--&&!Oa[i].targetTest(t););n=Oa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Pd(e[i],n)))||e.splice(i,1);return e},Xr=function(e){return e._gsap||Cu(li(e))[0]._gsap},cd=function(e,t,n){return(n=e[t])&&Wt(n)?e[t]():Eu(n)&&e.getAttribute&&e.getAttribute(t)||n},In=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Rm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ja=function(){var e=_r.length,t=_r.slice(0),n,i;for(fc={},_r.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Pu=function(e){return!!(e._initted||e._startAt||e.add)},ud=function(e,t,n,i){_r.length&&!un&&Ja(),e.render(t,n,!!(un&&t<0&&Pu(e))),_r.length&&!un&&Ja()},hd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tm).length<2?t:an(e)?e.trim():e},fd=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Cm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Vs=function(e,t){for(var n in t)e[n]=t[n];return e},hh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ci(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ja=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Mo=function(e){var t=e.parent||Ht,n=e.keyframes?Cm(gn(e.keyframes)):Qn;if(Ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Pm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},dd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},cl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Yr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Dm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},dc=function(e,t,n,i){return e._startAt&&(un?e._startAt.revert(Na):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Lm=function r(e){return!e||e._ts&&r(e.parent)},fh=function(e){return e._repeat?Gs(e._tTime,e=e.duration()+e._rDelay)*e:0},Gs=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},Qa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ul=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},hl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ul(e),n._dirty||Yr(n,e)),e},pd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Qa(e.rawTime(),t),(!t._dur||Xo(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),Yr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},Ti=function(e,t,n,i){return t.parent&&Sr(t),t._start=kt((Ji(n)?n:n||e!==Ht?ti(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),dd(e,t,"_first","_last",e._sort?"_start":0),pc(t)||(e._recent=t),i||pd(e,t),e._ts<0&&hl(e,e._tTime),e},md=function(e,t){return(jn.ScrollTrigger||wu("scrollTrigger",t))&&jn.ScrollTrigger.create(t,e)},_d=function(e,t,n,i,s){if(Lu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ld!==Xn.frame)return _r.push(e),e._lazy=[s,i],1},Im=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},pc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Um=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Im(e)&&!(!e._initted&&pc(e))||(e._ts<0||e._dp._ts<0)&&!pc(e))?0:1,a=e._rDelay,l=0,c,h,d;if(a&&e._repeat&&(l=Xo(0,e._tDur,t),h=Gs(l,a),e._yoyo&&h&1&&(o=1-o),h!==Gs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||un||i||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&_d(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&dc(e,t,n,!0),e._onUpdate&&!n&&qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Sr(e,1),!n&&!un&&(qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Nm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ws=function(e,t,n,i){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&hl(e,e._tTime=e._tDur*a),e.parent&&ul(e),n||Yr(e.parent,e),e},dh=function(e){return e instanceof Dn?Yr(e):Ws(e,e._dur)},Om={_start:0,endTime:Oo,totalDuration:Oo},ti=function r(e,t,n){var i=e.labels,s=e._recent||Om,o=e.duration()>=ai?s.endTime(!1):e._dur,a,l,c;return an(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},yo=function(e,t,n){var i=Ji(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;o.immediateRender=Ln(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Kt(t[0],o,t[s+1])},br=function(e,t){return e||e===0?t(e):t},Xo=function(e,t,n){return n<e?e:n>t?t:n},mn=function(e,t){return!an(e)||!(t=bm.exec(e))?"":t[1]},Fm=function(e,t,n){return br(n,function(i){return Xo(e,t,i)})},mc=[].slice,gd=function(e,t){return e&&Ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==Mi},Bm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return an(i)&&!t||gd(i,1)?(s=n).push.apply(s,li(i)):n.push(i)})||n},li=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):an(e)&&!n&&(hc||!Xs())?mc.call((t||bu).querySelectorAll(e),0):gn(e)?Bm(e,n):gd(e)?mc.call(e,0):e?[e]:[]},_c=function(e){return e=li(e)[0]||No("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return li(t,n.querySelectorAll?n:n===e?No("Invalid scope")||bu.createElement("div"):e)}},vd=function(e){return e.sort(function(){return .5-Math.random()})},xd=function(e){if(Wt(e))return e;var t=Ci(e)?e:{each:e},n=qr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,d=i;return an(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,p,g){var v=(g||t).length,_=o[v],m,w,b,M,L,D,A,I,T;if(!_){if(T=t.grid==="auto"?0:(t.grid||[1,ai])[1],!T){for(A=-ai;A<(A=g[T++].getBoundingClientRect().left)&&T<v;);T<v&&T--}for(_=o[v]=[],m=l?Math.min(T,v)*h-.5:i%T,w=T===ai?0:l?v*d/T-.5:i/T|0,A=0,I=ai,D=0;D<v;D++)b=D%T-m,M=w-(D/T|0),_[D]=L=c?Math.abs(c==="y"?M:b):td(b*b+M*M),L>A&&(A=L),L<I&&(I=L);i==="random"&&vd(_),_.max=A-I,_.min=I,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(T>v?v-1:c?c==="y"?v/T:T:Math.max(T,v/T))||0)*(i==="edges"?-1:1),_.b=v<0?s-v:s,_.u=mn(t.amount||t.each)||0,n=n&&v<0?Jm(n):n}return v=(_[f]-_.min)/_.max||0,kt(_.b+(n?n(v):v)*_.v)+_.u}},gc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ji(n)?0:mn(n))}},Sd=function(e,t){var n=gn(e),i,s;return!n&&Ci(e)&&(i=n=e.radius||ai,e.values?(e=li(e.values),(s=!Ji(e[0]))&&(i*=i)):e=gc(e.increment)),br(t,n?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ai,h=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?e[h]:o,s||h===o||Ji(o)?h:h+mn(o)}:gc(e))},Md=function(e,t,n,i){return br(gn(e)?!t:n===!0?!!(n=0):!i,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},zm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},km=function(e,t){return function(n){return e(parseFloat(n))+(t||mn(n))}},Hm=function(e,t,n){return Ed(e,t,0,1,n)},yd=function(e,t,n){return br(n,function(i){return e[~~t(i)]})},Vm=function r(e,t,n){var i=t-e;return gn(e)?yd(e,r(0,e.length),t):br(n,function(s){return(i+(s-e)%i)%i+e})},Gm=function r(e,t,n){var i=t-e,s=i*2;return gn(e)?yd(e,r(0,e.length-1),t):br(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Fo=function(e){return e.replace(ym,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Em);return Md(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ed=function(e,t,n,i,s){var o=t-e,a=i-n;return br(s,function(l){return n+((l-e)/o*a||0)})},Wm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=an(e),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(h=[],d=e.length,f=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var v=Math.min(f,~~g);return h[v](g-v)},n=t}else i||(e=Vs(gn(e)?[]:{},e));if(!h){for(l in t)Du.call(a,e,l,"get",t[l]);s=function(g){return Nu(g,a)||(o?e.p:e)}}}return br(n,s)},ph=function(e,t,n){var i=e.labels,s=ai,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(e,t,n){var i=e.vars,s=i[t],o=Bt,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&_r.length&&Ja(),a&&(Bt=a),h=l?s.apply(c,l):s.call(c),Bt=o,h},ho=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&qn(e,"onInterrupt"),e},Rs,Td=[],bd=function(e){if(e)if(e=!e.name&&e.default||e,Tu()||e.headless){var t=e.name,n=Wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Oo,render:Nu,add:Du,kill:a_,modifier:o_,rawVars:0},o={targetTest:0,get:0,getSetter:Uu,aliases:{},register:0};if(Xs(),e!==i){if(Gn[t])return;Qn(i,Qn(ja(e,s),o)),Vs(i.prototype,Vs(s,ja(e,o))),Gn[i.prop=t]=i,e.targetTest&&(Oa.push(i),Au[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ad(t,i),e.register&&e.register(Fn,i,Un)}else Td.push(e)},Dt=255,fo={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},xl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},wd=function(e,t,n){var i=e?Ji(e)?[e>>16,e>>8&Dt,e&Dt]:0:fo.black,s,o,a,l,c,h,d,f,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fo[e])i=fo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(ch),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=xl(l+1/3,s,o),i[1]=xl(l,s,o),i[2]=xl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(id),n&&i.length<4&&(i[3]=1),i}else i=e.match(ch)||fo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Dt,o=i[1]/Dt,a=i[2]/Dt,d=Math.max(s,o,a),f=Math.min(s,o,a),h=(d+f)/2,d===f?l=c=0:(p=d-f,c=h>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Ad=function(e){var t=[],n=[],i=-1;return e.split(gr).forEach(function(s){var o=s.match(As)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},mh=function(e,t,n){var i="",s=(e+i).match(gr),o=t?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return e;if(s=s.map(function(f){return(f=wd(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Ad(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(gr,"1").split(As),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(gr),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},gr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Xm=/hsl[a]?\(/,Rd=function(e){var t=e.join(" "),n;if(gr.lastIndex=0,gr.test(t))return n=Xm.test(t),e[1]=mh(e[1],n),e[0]=mh(e[0],n,Ad(e[1])),!0},Bo,Xn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,f,p,g=function v(_){var m=r()-i,w=_===!0,b,M,L,D;if((m>e||m<0)&&(n+=m-t),i+=m,L=i-n,b=L-o,(b>0||w)&&(D=++d.frame,f=L-d.time*1e3,d.time=L=L/1e3,o+=b+(b>=s?4:s-b),M=1),w||(l=c(v)),M)for(p=0;p<a.length;p++)a[p](L,f,D,_)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){sd&&(!hc&&Tu()&&(Mi=hc=window,bu=Mi.document||{},jn.gsap=Fn,(Mi.gsapVersions||(Mi.gsapVersions=[])).push(Fn.version),od(Ka||Mi.GreenSockGlobals||!Mi.gsap&&Mi||{}),Td.forEach(bd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(_){return setTimeout(_,o-d.time*1e3+1|0)},Bo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Bo=0,c=Oo},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){s=1e3/(_||240),o=d.time*1e3+s},add:function(_,m,w){var b=m?function(M,L,D,A){_(M,L,D,A),d.remove(b)}:_;return d.remove(_),a[w?"unshift":"push"](b),Xs(),b},remove:function(_,m){~(m=a.indexOf(_))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},d})(),Xs=function(){return!Bo&&Xn.wake()},_t={},Ym=/^[\d.\-M][\d.\-,\s]/,qm=/["']/g,Zm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(qm,"").trim():+c,i=l.substr(a+1).trim();return t},$m=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Km=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Zm(t[1])]:$m(e).split(",").map(hd)):_t._CE&&Ym.test(e)?_t._CE("",e):n},Jm=function(e){return function(t){return 1-e(1-t)}},qr=function(e,t){return e&&(Wt(e)?e:_t[e]||Km(e))||t},rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return In(e,function(a){_t[a]=jn[a]=s,_t[o=a.toLowerCase()]=n;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},Cd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/uc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Mm((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Cd(a);return s=uc/s,l.config=function(c,h){return r(e,c,h)},l},Ml=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Cd(n);return i.config=function(s){return r(e,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;rs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;rs("Elastic",Sl("in"),Sl("out"),Sl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};rs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});rs("Circ",function(r){return-(td(1-r*r)-1)});rs("Sine",function(r){return r===1?1:-Sm(r*vm)+1});rs("Back",Ml("in"),Ml("out"),Ml());_t.SteppedEase=_t.steps=jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Lt;return function(a){return((i*Xo(0,o,a)|0)+s)*n}}};Uo.ease=_t["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ru+=r+","+r+"Params,"});var Pd=function(e,t){this.id=xm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cd,this.set=t?t.getSetter:Uu},zo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ws(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Bo||Xn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ws(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hl(this,n),!s._dp||s.parent||pd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Lt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ud(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Qa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(Xo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ul(this),Dm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ti(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Am);var i=un;return un=n,Pu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,dh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ti(this,n),Ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i)),this._dur||(this._zTime=-Lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Lt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Wt(n)?n:fd,l=function(){var h=i.then;i.then=null,s&&s(),Wt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ho(this)},r})();Qn(zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var Dn=(function(r){ed(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ln(n.sortChildren),Ht&&Ti(n.parent||Ht,zi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&md(zi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return yo(0,arguments,this),this},t.from=function(i,s,o){return yo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return yo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Mo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,ti(this,o),1),this},t.call=function(i,s,o){return Ti(this,Kt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Kt(i,o,ti(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Mo(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,Mo(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:kt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,v,_,m,w,b,M,L,D,A;if(this!==Ht&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,M=this._start,b=this._ts,m=!b,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(f=kt(h%_),h===l?(v=this._repeat,f=c):(L=kt(h/_),v=~~L,v&&v===L&&(f=c,v--),f>c&&(f=c)),L=Gs(this._tTime,_),!a&&this._tTime&&L!==v&&this._tTime-L*_-this._dur<=0&&(L=v),D&&v&1&&(f=c-f,A=1),v!==L&&!this._lock){var I=D&&L&1,T=I===(D&&v&1);if(v<L&&(I=!I),a=I?0:h%c?c:h,this._lock=1,this.render(a||(A?0:kt(v*_)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,L=v),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Nm(this,kt(a),kt(f)),w&&(h-=f-(f=w._start))),this._tTime=h,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!L&&(qn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&w!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!m){w=0,g&&(h+=this._zTime=-Lt);break}}p=g}else{p=this._last;for(var S=i<0?i:f;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&w!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||un&&Pu(p)),f!==this._time||!this._ts&&!m){w=0,g&&(h+=this._zTime=S?-Lt:Lt);break}}p=g}}if(w&&!s&&(this.pause(),w.render(f>=a?0:-Lt)._zTime=f>=a?1:-1,this._ts))return this._start=M,ul(this),this.render(i,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Sr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(qn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ji(s)||(s=ti(this,s,i)),!(i instanceof zo)){if(gn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(an(i))return this.addLabel(i,s);if(Wt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Ti(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ai);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Kt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return an(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(i.parent===this&&cl(this,i),i===this._recent&&(this._recent=this._last),Yr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(Xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ti(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Kt.delayedCall(0,s||Oo,o);return a.data="isPause",this._hasPause=1,Ti(this,a,ti(this,i))},t.removePause=function(i){var s=this._first;for(i=ti(this,i);s;)s._start===i&&s.data==="isPause"&&Sr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ur!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=li(i),l=this._first,c=Ji(s),h;l;)l instanceof Kt?Rm(l._targets,a)&&(c?(!ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ti(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,p,g=Kt.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Lt,onStart:function(){if(o.pause(),!p){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==_&&Ws(g,_,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Qn({startAt:{time:ti(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ph(this,ti(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ph(this,ti(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=kt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Yr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ai,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ti(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=kt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ws(o,o===Ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ht._ts&&(ud(Ht,Qa(i,Ht)),ld=Xn.frame),Xn.frame>=uh){uh+=$n.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&$n.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},e})(zo);Qn(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jm=function(e,t,n,i,s,o,a){var l=new Un(this._pt,e,t,0,1,Od,null,s),c=0,h=0,d,f,p,g,v,_,m,w;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Fo(i)),o&&(w=[n,i],o(w,e,t),n=w[0],i=w[1]),f=n.match(gl)||[];d=gl.exec(i);)g=d[0],v=i.substring(c,d.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),g!==f[h++]&&(_=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:_,c:g.charAt(1)==="="?Ls(_,g)-_:parseFloat(g)-_,m:p&&p<4?Math.round:0},c=gl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(rd.test(i)||m)&&(l.e=0),this._pt=l,l},Du=function(e,t,n,i,s,o,a,l,c,h){Wt(i)&&(i=i(s||0,e,o));var d=e[t],f=n!=="get"?n:Wt(d)?c?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,p=Wt(d)?c?i_:Ud:Iu,g;if(an(i)&&(~i.indexOf("random(")&&(i=Fo(i)),i.charAt(1)==="="&&(g=Ls(f,i)+(mn(f)||0),(g||g===0)&&(i=g))),!h||f!==i||vc)return!isNaN(f*i)&&i!==""?(g=new Un(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?s_:Nd,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&wu(t,i),jm.call(this,e,t,f,i,p,l||$n.stringFilter,c))},Qm=function(e,t,n,i,s){if(Wt(e)&&(e=Eo(e,s,t,n,i)),!Ci(e)||e.style&&e.nodeType||gn(e)||nd(e))return an(e)?Eo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Eo(e[a],s,t,n,i);return o},Dd=function(e,t,n,i,s,o){var a,l,c,h;if(Gn[e]&&(a=new Gn[e]).init(s,a.rawVars?t[e]:Qm(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Un(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ur,vc,Lu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,g=e._dur,v=e._startAt,_=e._targets,m=e.parent,w=m&&m.data==="nested"?m.vars.targets:_,b=e._overwrite==="auto"&&!yu,M=e.timeline,L=i.easeReverse||d,D,A,I,T,S,U,z,V,Z,Q,q,X,G;if(M&&(!f||!s)&&(s="none"),e._ease=qr(s,Uo.ease),e._rEase=L&&(qr(L)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||f&&!i.stagger){if(V=_[0]?Xr(_[0]).harness:0,X=V&&i[V.prop],D=ja(i,Au),v&&(v._zTime<0&&v.progress(1),t<0&&h&&a&&!p?v.render(-1,!0):v.revert(h&&g?Na:wm),v._lazy=0),o){if(Sr(e._startAt=Kt.set(_,Qn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!v&&Ln(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un||!a&&!p)&&e._startAt.revert(Na),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!v){if(t&&(a=!1),I=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!v&&Ln(l),immediateRender:a,stagger:0,parent:m},D),X&&(I[V.prop]=X),Sr(e._startAt=Kt.set(_,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un?e._startAt.revert(Na):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ln(l)||l&&!g,A=0;A<_.length;A++){if(S=_[A],z=S._gsap||Cu(_)[A]._gsap,e._ptLookup[A]=Q={},fc[z.id]&&_r.length&&Ja(),q=w===_?A:w.indexOf(S),V&&(Z=new V).init(S,X||D,e,q,w)!==!1&&(e._pt=T=new Un(e._pt,S,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(le){Q[le]=T}),Z.priority&&(U=1)),!V||X)for(I in D)Gn[I]&&(Z=Dd(I,D,e,q,S,w))?Z.priority&&(U=1):Q[I]=T=Du.call(e,S,I,"get",D[I],q,w,0,i.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),b&&e._pt&&(ur=e,Ht.killTweensOf(S,Q,e.globalTime(t)),G=!e.parent,ur=0),e._pt&&l&&(fc[z.id]=1)}U&&Fd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&M.render(ai,!0,!0)},e_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,f,p;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(h=f[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return vc=1,e.vars[t]="+=0",Lu(e,a),vc=0,l?No(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(p=c.length;p--;)d=c[p],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Yt(n)+mn(d.e)),d.b&&(d.b=h.s+mn(d.b))},t_=function(e,t){var n=e[0]?Xr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Vs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},n_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(gn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Eo=function(e,t,n,i,s){return Wt(e)?e.call(t,n,i,s):an(e)&&~e.indexOf("random(")?Fo(e):e},Ld=Ru+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Id={};In(Ld+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Id[r]=1});var Kt=(function(r){ed(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Mo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,v=l.defaults,_=l.scrollTrigger,m=i.parent||Ht,w=(gn(n)||nd(n)?Ji(n[0]):"length"in i)?[n]:li(n),b,M,L,D,A,I,T,S;if(a._targets=w.length?Cu(w):No("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||jo(c)||jo(h)){i=a.vars;var U=i.easeReverse||i.yoyoEase;if(b=a.timeline=new Dn({data:"nested",defaults:v||{},targets:m&&m.data==="nested"?m.vars.targets:w}),b.kill(),b.parent=b._dp=zi(a),b._start=0,f||jo(c)||jo(h)){if(D=w.length,T=f&&xd(f),Ci(f))for(A in f)~Ld.indexOf(A)&&(S||(S={}),S[A]=f[A]);for(M=0;M<D;M++)L=ja(i,Id),L.stagger=0,U&&(L.easeReverse=U),S&&Vs(L,S),I=w[M],L.duration=+Eo(c,zi(a),M,I,w),L.delay=(+Eo(h,zi(a),M,I,w)||0)-a._delay,!f&&D===1&&L.delay&&(a._delay=h=L.delay,a._start+=h,L.delay=0),b.to(I,L,T?T(M,I,w):0),b._ease=_t.none;b.duration()?c=h=0:a.timeline=0}else if(g){Mo(Qn(b.vars.defaults,{ease:"none"})),b._ease=qr(g.ease||i.ease||"none");var z=0,V,Z,Q;if(gn(g))g.forEach(function(q){return b.to(w,q,">")}),b.duration();else{L={};for(A in g)A==="ease"||A==="easeEach"||n_(A,g[A],L,g.easeEach);for(A in L)for(V=L[A].sort(function(q,X){return q.t-X.t}),z=0,M=0;M<V.length;M++)Z=V[M],Q={ease:Z.e,duration:(Z.t-(M?V[M-1].t:0))/100*c},Q[A]=Z.v,b.to(w,Q,z),z+=Q.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return p===!0&&!yu&&(ur=zi(a),Ht.killTweensOf(w),ur=0),Ti(m,zi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===kt(m._time)&&Ln(d)&&Lm(zi(a))&&m.data!=="nested")&&(a._tTime=-Lt,a.render(Math.max(0,-h)||0)),_&&md(zi(a),_),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Lt&&!h?l:i<Lt?0:i,f,p,g,v,_,m,w,b;if(!c)Um(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,b=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+i,s,o);if(f=kt(d%v),d===l?(g=this._repeat,f=c):(_=kt(d/v),g=~~_,g&&g===_?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(f=c-f),_=Gs(this._tTime,v),f===a&&!o&&this._initted&&g===_)return this._tTime=d,this;g!==_&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==v&&this._initted&&(this._lock=o=1,this.render(kt(v*g),!0).invalidate()._lock=0)}if(!this._initted){if(_d(this,h?i:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var M=f<a;if(M!==this._inv){var L=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(M?-1:1)/L:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(f/c);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!_&&(qn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(w,p.d),p=p._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&dc(this,i,s,o),qn(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&dc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Sr(this,1),!s&&!(h&&!a)&&(d||a||m)&&(qn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Bo||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Lu(this,c),h=this._ease(c/this._dur),e_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(hl(this,0),this.parent||dd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ho(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ur&&ur.vars.overwrite!==!0)._first||ho(this),this.parent&&o!==this.timeline.totalDuration()&&Ws(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?li(i):a,c=this._ptLookup,h=this._pt,d,f,p,g,v,_,m;if((!s||s==="all")&&Pm(a,l))return s==="all"&&(this._pt=0),ho(this);for(d=this._op=this._op||[],s!=="all"&&(an(s)&&(v={},In(s,function(w){return v[w]=1}),s=v),s=t_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(d[m]=s,g=f,p={}):(p=d[m]=d[m]||{},g=s);for(v in g)_=f&&f[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&cl(this,_,"_pt"),delete f[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&h&&ho(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return yo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return yo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ht.killTweensOf(i,s,o)},e})(zo);Qn(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Dn,t=mc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Iu=function(e,t,n){return e[t]=n},Ud=function(e,t,n){return e[t](n)},i_=function(e,t,n,i){return e[t](i.fp,n)},r_=function(e,t,n){return e.setAttribute(t,n)},Uu=function(e,t){return Wt(e[t])?Ud:Eu(e[t])&&e.setAttribute?r_:Iu},Nd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},s_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Od=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Nu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},o_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},a_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?cl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},l_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Fd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Un=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Nd,this.d=l||this,this.set=c||Iu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=l_,this.m=n,this.mt=s,this.tween=i},r})();In(Ru+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Au[r]=1});jn.TweenMax=jn.TweenLite=Kt;jn.TimelineLite=jn.TimelineMax=Dn;Ht=new Dn({sortChildren:!1,defaults:Uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=Rd;var Zr=[],Fa={},c_=[],_h=0,u_=0,yl=function(e){return(Fa[e]||c_).map(function(t){return t()})},xc=function(){var e=Date.now(),t=[];e-_h>2&&(yl("matchMediaInit"),Zr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Mi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),yl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),_h=e,yl("matchMedia"))},Bd=(function(){function r(t,n){this.selector=n&&_c(n),this.data=[],this._r=[],this.isReverted=!1,this.id=u_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Wt(n)&&(s=i,i=n,n=Wt);var o=this,a=function(){var c=Bt,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=_c(s)),Bt=o,d=i.apply(o,arguments),Wt(d)&&o._r.push(d),Bt=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Wt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Zr.length;o--;)Zr[o].id===this.id&&Zr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),h_=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ci(n)||(n={matches:n});var o=new Bd(0,s||this.scope),a=o.conditions={},l,c,h;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Mi.matchMedia(n[c]),l&&(Zr.indexOf(o)<0&&Zr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(xc):l.addEventListener("change",xc)));return h&&i(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),el={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return bd(i)})},timeline:function(e){return new Dn(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){an(e)&&(e=li(e)[0]);var s=Xr(e||{}).get,o=n?fd:hd;return n==="native"&&(n=""),e&&(t?o((Gn[t]&&Gn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Gn[a]&&Gn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=li(e),e.length>1){var i=e.map(function(h){return Fn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var o=Gn[t],a=Xr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var d=new o;Rs._pt=0,d.init(e,n?h+n:h,Rs,0,[e]),d.render(1,d),Rs._pt&&Nu(1,Rs)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Fn.to(e,Qn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qr(e.ease,Uo.ease)),hh(Uo,e||{})},config:function(e){return hh($n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Gn[a]&&!jn[a]&&No(t+" effect requires "+a+" plugin.")}),vl[t]=function(a,l,c){return n(li(a),Qn(l||{},s),c)},o&&(Dn.prototype[t]=function(a,l,c){return this.add(vl[t](a,Ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=qr(t)},parseEase:function(e,t){return arguments.length?qr(e,t):_t},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Dn(e),i,s;for(n.smoothChildTiming=Ln(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,i=Ht._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Ti(n,i,i._start-i._delay),i=s;return Ti(Ht,n,0),n},context:function(e,t){return e?new Bd(e,t):Bt},matchMedia:function(e){return new h_(e)},matchMediaRefresh:function(){return Zr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||xc()},addEventListener:function(e,t){var n=Fa[e]||(Fa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Vm,wrapYoyo:Gm,distribute:xd,random:Md,snap:Sd,normalize:Hm,getUnit:mn,clamp:Fm,splitColor:wd,toArray:li,selector:_c,mapRange:Ed,pipe:zm,unitize:km,interpolate:Wm,shuffle:vd},install:od,effects:vl,ticker:Xn,updateRoot:Dn.updateRoot,plugins:Gn,globalTimeline:Ht,core:{PropTween:Un,globals:ad,Tween:Kt,Timeline:Dn,Animation:zo,getCache:Xr,_removeLinkedListItem:cl,reverting:function(){return un},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return yu=e}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return el[r]=Kt[r]});Xn.add(Dn.updateRoot);Rs=el.to({},{duration:0});var f_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},d_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=f_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},El=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(an(s)&&(l={},In(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}d_(a,s)}}}},Fn=el.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},El("roundProps",gc),El("modifiers"),El("snap",Sd))||el;Kt.version=Dn.version=Fn.version="3.15.0";sd=1;Tu()&&Xs();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gh,hr,Is,Ou,Vr,vh,Fu,p_=function(){return typeof window<"u"},ji={},Nr=180/Math.PI,Us=Math.PI/180,os=Math.atan2,xh=1e8,Bu=/([A-Z])/g,m_=/(left|right|width|margin|padding|x)/i,__=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},g_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},v_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},x_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},S_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},zd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},kd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},M_=function(e,t,n){return e.style[t]=n},y_=function(e,t,n){return e.style.setProperty(t,n)},E_=function(e,t,n){return e._gsap[t]=n},T_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},b_=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},w_=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Vt="transform",Nn=Vt+"Origin",A_=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ki(i,a)}):this.tfm[e]=o.x?o[e]:ki(i,e),e===Nn&&(this.tfm.zOrigin=o.zOrigin);else return wi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Vt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},Hd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},R_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Fu(),(!s||!s.isStart)&&!n[Vt]&&(Hd(n),i.zOrigin&&n[Nn]&&(n[Nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Vd=function(e,t){var n={target:e,props:[],revert:R_,save:A_};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Gd,Mc=function(e,t){var n=hr.createElementNS?hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hr.createElement(e);return n&&n.style?n:hr.createElement(e)},Zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Bu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ys(t)||t,1)||""},Sh="O,Moz,ms,Ms,Webkit".split(","),Ys=function(e,t,n){var i=t||Vr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Sh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Sh[o]:"")+e},yc=function(){p_()&&window.document&&(gh=window,hr=gh.document,Is=hr.documentElement,Vr=Mc("div")||{style:{}},Mc("div"),Vt=Ys(Vt),Nn=Vt+"Origin",Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gd=!!Ys("perspective"),Fu=Fn.core.reverting,Ou=1)},Mh=function(e){var t=e.ownerSVGElement,n=Mc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Is.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Is.removeChild(n),s},yh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Wd=function(e){var t,n;try{t=e.getBBox()}catch{t=Mh(e),n=1}return t&&(t.width||t.height)||n||(t=Mh(e)),t&&!t.width&&!t.x&&!t.y?{x:+yh(e,["x","cx","x1"])||0,y:+yh(e,["y","cy","y1"])||0,width:0,height:0}:t},Xd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Wd(e))},Mr=function(e,t){if(t){var n=e.style,i;t in ji&&t!==Nn&&(t=Vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Bu,"-$1").toLowerCase())):n.removeAttribute(t)}},fr=function(e,t,n,i,s,o){var a=new Un(e._pt,t,n,0,1,o?kd:zd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Eh={deg:1,rad:1,turn:1},C_={grid:1,flex:1},yr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Vr.style,l=m_.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",p=i==="%",g,v,_,m;if(i===o||!s||Eh[i]||Eh[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Xd(e),(p||o==="%")&&(ji[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Yt(p?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:i),v=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===hr||!v.appendChild)&&(v=hr.body),_=v._gsap,_&&p&&_.width&&l&&_.time===Xn.time&&!_.uncache)return Yt(s/_.width*d);if(p&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=d+i,g=e[h],w?e.style[t]=w:Mr(e,t)}else(p||o==="%")&&!C_[Zn(v,"display")]&&(a.position=Zn(e,"position")),v===e&&(a.position="static"),v.appendChild(Vr),g=Vr[h],v.removeChild(Vr),a.position="absolute";return l&&p&&(_=Xr(v),_.time=Xn.time,_.width=v[h]),Yt(f?g*s/d:g&&s?d/g*s:0)},ki=function(e,t,n,i){var s;return Ou||yc(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ji[t]&&t!=="transform"?(s=Ho(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:nl(Zn(e,Nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=tl[t]&&tl[t](e,t,n)||Zn(e,t)||cd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yr(e,t,s,n)+n:s},P_=function(e,t,n,i){if(!n||n==="none"){var s=Ys(t,e,1),o=s&&Zn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var a=new Un(this._pt,e.style,t,0,1,Od),l=0,c=0,h,d,f,p,g,v,_,m,w,b,M,L;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Zn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(v=e.style[t],e.style[t]=i,i=Zn(e,t)||i,v?e.style[t]=v:Mr(e,t)),h=[n,i],Rd(h),n=h[0],i=h[1],f=n.match(As)||[],L=i.match(As)||[],L.length){for(;d=As.exec(i);)_=d[0],w=i.substring(l,d.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),_!==(v=f[c++]||"")&&(p=parseFloat(v)||0,M=v.substr((p+"").length),_.charAt(1)==="="&&(_=Ls(p,_)+M),m=parseFloat(_),b=_.substr((m+"").length),l=As.lastIndex-b.length,b||(b=b||$n.units[t]||M,l===i.length&&(i+=b,a.e+=b)),M!==b&&(p=yr(e,t,v,b)||0),a._pt={_next:a._pt,p:w||c===1?w:",",s:p,c:m-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?kd:zd;return rd.test(i)&&(a.e=0),this._pt=a,a},Th={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},D_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Th[n]||n,t[1]=Th[i]||i,t.join(" ")},L_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ji[a]&&(l=1,a=a==="transformOrigin"?Nn:Vt),Mr(n,a);l&&(Mr(n,Vt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ho(n,1),o.uncache=1,Hd(i)))}},tl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Un(e._pt,t,n,0,0,L_);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ko=[1,0,0,1,0,0],Yd={},qd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bh=function(e){var t=Zn(e,Vt);return qd(t)?ko:t.substr(7).match(id).map(Yt)},zu=function(e,t){var n=e._gsap||Xr(e),i=e.style,s=bh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ko:s):(s===ko&&!e.offsetParent&&e!==Is&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Is.appendChild(e)),s=bh(e),l?i.display=l:Mr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ec=function(e,t,n,i,s,o){var a=e._gsap,l=s||zu(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],v=l[2],_=l[3],m=l[4],w=l[5],b=t.split(" "),M=parseFloat(b[0])||0,L=parseFloat(b[1])||0,D,A,I,T;n?l!==ko&&(A=p*_-g*v)&&(I=M*(_/A)+L*(-v/A)+(v*w-_*m)/A,T=M*(-g/A)+L*(p/A)-(p*w-g*m)/A,M=I,L=T):(D=Wd(e),M=D.x+(~b[0].indexOf("%")?M/100*D.width:M),L=D.y+(~(b[1]||b[0]).indexOf("%")?L/100*D.height:L)),i||i!==!1&&a.smooth?(m=M-c,w=L-h,a.xOffset=d+(m*p+w*v)-m,a.yOffset=f+(m*g+w*_)-w):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=L,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Nn]="0px 0px",o&&(fr(o,a,"xOrigin",c,M),fr(o,a,"yOrigin",h,L),fr(o,a,"xOffset",d,a.xOffset),fr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+L)},Ho=function(e,t){var n=e._gsap||new Pd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Zn(e,Nn)||"0",h,d,f,p,g,v,_,m,w,b,M,L,D,A,I,T,S,U,z,V,Z,Q,q,X,G,le,N,ye,Fe,Xe,te,ce;return h=d=f=v=_=m=w=b=M=0,p=g=1,n.svg=!!(e.getCTM&&Xd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),i.scale=i.rotate=i.translate="none"),A=zu(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Ec(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),L=n.xOrigin||0,D=n.yOrigin||0,A!==ko&&(U=A[0],z=A[1],V=A[2],Z=A[3],h=Q=A[4],d=q=A[5],A.length===6?(p=Math.sqrt(U*U+z*z),g=Math.sqrt(Z*Z+V*V),v=U||z?os(z,U)*Nr:0,w=V||Z?os(V,Z)*Nr+v:0,w&&(g*=Math.abs(Math.cos(w*Us))),n.svg&&(h-=L-(L*U+D*V),d-=D-(L*z+D*Z))):(ce=A[6],Xe=A[7],N=A[8],ye=A[9],Fe=A[10],te=A[11],h=A[12],d=A[13],f=A[14],I=os(ce,Fe),_=I*Nr,I&&(T=Math.cos(-I),S=Math.sin(-I),X=Q*T+N*S,G=q*T+ye*S,le=ce*T+Fe*S,N=Q*-S+N*T,ye=q*-S+ye*T,Fe=ce*-S+Fe*T,te=Xe*-S+te*T,Q=X,q=G,ce=le),I=os(-V,Fe),m=I*Nr,I&&(T=Math.cos(-I),S=Math.sin(-I),X=U*T-N*S,G=z*T-ye*S,le=V*T-Fe*S,te=Z*S+te*T,U=X,z=G,V=le),I=os(z,U),v=I*Nr,I&&(T=Math.cos(I),S=Math.sin(I),X=U*T+z*S,G=Q*T+q*S,z=z*T-U*S,q=q*T-Q*S,U=X,Q=G),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,m=180-m),p=Yt(Math.sqrt(U*U+z*z+V*V)),g=Yt(Math.sqrt(q*q+ce*ce)),I=os(Q,q),w=Math.abs(I)>2e-4?I*Nr:0,M=te?1/(te<0?-te:te):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!qd(Zn(e,Vt)),X&&e.setAttribute("transform",X))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(p*=-1,w+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Yt(p),n.scaleY=Yt(g),n.rotation=Yt(v)+a,n.rotationX=Yt(_)+a,n.rotationY=Yt(m)+a,n.skewX=w+a,n.skewY=b+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Nn]=nl(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?U_:Gd?Zd:I_,n.uncache=0,n},nl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tl=function(e,t,n){var i=mn(t);return Yt(parseFloat(t)+parseFloat(yr(e,"x",n+"px",i)))+i},I_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Zd(e,t)},Ar="0deg",io="0px",Rr=") ",Zd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,v=n.scaleY,_=n.transformPerspective,m=n.force3D,w=n.target,b=n.zOrigin,M="",L=m==="auto"&&e&&e!==1||m===!0;if(b&&(d!==Ar||h!==Ar)){var D=parseFloat(h)*Us,A=Math.sin(D),I=Math.cos(D),T;D=parseFloat(d)*Us,T=Math.cos(D),o=Tl(w,o,A*T*-b),a=Tl(w,a,-Math.sin(D)*-b),l=Tl(w,l,I*T*-b+b)}_!==io&&(M+="perspective("+_+Rr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(L||o!==io||a!==io||l!==io)&&(M+=l!==io||L?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Rr),c!==Ar&&(M+="rotate("+c+Rr),h!==Ar&&(M+="rotateY("+h+Rr),d!==Ar&&(M+="rotateX("+d+Rr),(f!==Ar||p!==Ar)&&(M+="skew("+f+", "+p+Rr),(g!==1||v!==1)&&(M+="scale("+g+", "+v+Rr),w.style[Vt]=M||"translate(0, 0)"},U_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,v=n.yOrigin,_=n.xOffset,m=n.yOffset,w=n.forceCSS,b=parseFloat(o),M=parseFloat(a),L,D,A,I,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Us,c*=Us,L=Math.cos(l)*d,D=Math.sin(l)*d,A=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(h*=Us,T=Math.tan(c-h),T=Math.sqrt(1+T*T),A*=T,I*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),L*=T,D*=T)),L=Yt(L),D=Yt(D),A=Yt(A),I=Yt(I)):(L=d,I=f,D=A=0),(b&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(b=yr(p,"x",o,"px"),M=yr(p,"y",a,"px")),(g||v||_||m)&&(b=Yt(b+g-(g*L+v*A)+_),M=Yt(M+v-(g*D+v*I)+m)),(i||s)&&(T=p.getBBox(),b=Yt(b+i/100*T.width),M=Yt(M+s/100*T.height)),T="matrix("+L+","+D+","+A+","+I+","+b+","+M+")",p.setAttribute("transform",T),w&&(p.style[Vt]=T)},N_=function(e,t,n,i,s){var o=360,a=an(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Nr:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*xh)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*xh)%o-~~(c/o)*o)),e._pt=f=new Un(e._pt,t,n,i,c,g_),f.e=h,f.u="deg",e._props.push(n),f},wh=function(e,t){for(var n in t)e[n]=t[n];return e},O_=function(e,t,n){var i=wh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Vt]=t,a=Ho(n,1),Mr(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],o[Vt]=t,a=Ho(n,1),o[Vt]=c);for(l in ji)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(p=mn(c),g=mn(h),d=p!==g?yr(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new Un(e._pt,a,l,d,f-d,Sc),e._pt.u=g||0,e._props.push(l));wh(a,i)};In("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});tl[e>1?"border"+r:r]=function(a,l,c,h,d){var f,p;if(arguments.length<4)return f=o.map(function(g){return ki(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},o.forEach(function(g,v){return p[g]=f[v]=f[v]||f[(v-1)/2|0]}),a.init(l,p,d)}});var $d={name:"css",register:yc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,d,f,p,g,v,_,m,w,b,M,L,D,A,I,T;Ou||yc(),this.styles=this.styles||Vd(e),I=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(h=t[v],!(Gn[v]&&Dd(v,t,n,i,e,s)))){if(p=typeof h,g=tl[v],p==="function"&&(h=h.call(n,i,e,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Fo(h)),g)g(this,e,v,h,n)&&(A=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),h+="",gr.lastIndex=0,gr.test(c)||(_=mn(c),m=mn(h),m?_!==m&&(c=yr(e,v,c,m)+m):_&&(h+=_)),this.add(a,"setProperty",c,h,i,s,0,0,v),o.push(v),I.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,e,s):l[v],an(c)&&~c.indexOf("random(")&&(c=Fo(c)),mn(c+"")||c==="auto"||(c+=$n.units[v]||mn(ki(e,v))||""),(c+"").charAt(1)==="="&&(c=ki(e,v))):c=ki(e,v),f=parseFloat(c),w=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),d=parseFloat(h),v in wi&&(v==="autoAlpha"&&(f===1&&ki(e,"visibility")==="hidden"&&d&&(f=0),I.push("visibility",0,a.visibility),fr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=wi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),b=v in ji,b){if(this.styles.save(v),T=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=Zn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=h,h=Zn(e,"perspective"),S?e.style.perspective=S:Mr(e,"perspective")}d=parseFloat(h)}if(M||(L=e._gsap,L.renderTransform&&!t.parseTransform||Ho(e,t.parseTransform),D=t.smoothOrigin!==!1&&L.smooth,M=this._pt=new Un(this._pt,a,Vt,0,1,L.renderTransform,L,0,-1),M.dep=1),v==="scale")this._pt=new Un(this._pt,L,"scaleY",L.scaleY,(w?Ls(L.scaleY,w+d):d)-L.scaleY||0,Sc),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){I.push(Nn,0,a[Nn]),h=D_(h),L.svg?Ec(e,h,0,D,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==L.zOrigin&&fr(this,L,"zOrigin",L.zOrigin,m),fr(this,a,v,nl(c),nl(h)));continue}else if(v==="svgOrigin"){Ec(e,h,1,D,0,this);continue}else if(v in Yd){N_(this,L,v,f,w?Ls(f,w+h):h);continue}else if(v==="smoothOrigin"){fr(this,L,"smooth",L.smooth,h);continue}else if(v==="force3D"){L[v]=h;continue}else if(v==="transform"){O_(this,h,e);continue}}else v in a||(v=Ys(v)||v);if(b||(d||d===0)&&(f||f===0)&&!__.test(h)&&v in a)_=(c+"").substr((f+"").length),d||(d=0),m=mn(h)||(v in $n.units?$n.units[v]:_),_!==m&&(f=yr(e,v,c,m)),this._pt=new Un(this._pt,b?L:a,v,f,(w?Ls(f,w+d):d)-f,!b&&(m==="px"||v==="zIndex")&&t.autoRound!==!1?S_:Sc),this._pt.u=m||0,b&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=x_):_!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=v_);else if(v in a)P_.call(this,e,v,c,w?w+h:h);else if(v in e)this.add(e,v,c||e[v],w?w+h:h,i,s);else if(v!=="parseTransform"){wu(v,h);continue}b||(v in a?I.push(v,0,a[v]):typeof e[v]=="function"?I.push(v,2,e[v]()):I.push(v,1,c||e[v])),o.push(v)}}A&&Fd(this)},render:function(e,t){if(t.tween._time||!Fu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ki,aliases:wi,getSetter:function(e,t,n){var i=wi[t];return i&&i.indexOf(",")<0&&(t=i),t in ji&&t!==Nn&&(e._gsap.x||ki(e,"x"))?n&&vh===n?t==="scale"?T_:E_:(vh=n||{})&&(t==="scale"?b_:w_):e.style&&!Eu(e.style[t])?M_:~t.indexOf("-")?y_:Uu(e,t)},core:{_removeProperty:Mr,_getMatrix:zu}};Fn.utils.checkPrefix=Ys;Fn.core.getStyleSaver=Vd;(function(r,e,t,n){var i=In(r+","+e+","+t,function(s){ji[s]=1});In(e,function(s){$n.units[s]="deg",Yd[s]=1}),wi[i[13]]=r+","+e,In(n,function(s){var o=s.split(":");wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$n.units[r]="px"});Fn.registerPlugin($d);var qs=Fn.registerPlugin($d)||Fn;qs.core.Tween;function F_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function B_(r,e,t){return e&&F_(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ln,Ba,Yn,dr,pr,Ns,Kd,Or,Os,Jd,Wi,gi,jd,Qd=function(){return ln||typeof window<"u"&&(ln=window.gsap)&&ln.registerPlugin&&ln},ep=1,Cs=[],dt=[],Ri=[],To=Date.now,Tc=function(e,t){return t},z_=function(){var e=Os.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,dt),i.push.apply(i,Ri),dt=n,Ri=i,Tc=function(o,a){return t[o](a)}},vr=function(e,t){return~Ri.indexOf(e)&&Ri[Ri.indexOf(e)+1][t]},bo=function(e){return!!~Jd.indexOf(e)},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qo="scrollLeft",ea="scrollTop",bc=function(){return Wi&&Wi.isPressed||dt.cache++},il=function(e,t){var n=function i(s){if(s||s===0){ep&&(Yn.history.scrollRestoration="manual");var o=Wi&&Wi.isPressed;s=i.v=Math.round(s)||(Wi&&Wi.iOS?1:0),e(s),i.cacheID=dt.cache,o&&Tc("ss",s)}else(t||dt.cache!==i.cacheID||Tc("ref"))&&(i.cacheID=dt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},wn={s:Qo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:il(function(r){return arguments.length?Yn.scrollTo(r,Qt.sc()):Yn.pageXOffset||dr[Qo]||pr[Qo]||Ns[Qo]||0})},Qt={s:ea,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:il(function(r){return arguments.length?Yn.scrollTo(wn.sc(),r):Yn.pageYOffset||dr[ea]||pr[ea]||Ns[ea]||0})},Pn=function(e,t){return(t&&t._ctx&&t._ctx.selector||ln.utils.toArray)(e)[0]||(typeof e=="string"&&ln.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},k_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Er=function(e,t){var n=t.s,i=t.sc;bo(e)&&(e=dr.scrollingElement||pr);var s=dt.indexOf(e),o=i===Qt.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+o]||Sn(e,"scroll",bc);var a=dt[s+o],l=a||(dt[s+o]=il(vr(e,n),!0)||(bo(e)?i:il(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=ln.getProperty(e,"scrollBehavior")==="smooth"),l},wc=function(e,t,n){var i=e,s=e,o=To(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,v){var _=To();v||_-o>l?(s=i,i=g,a=o,o=_):n?i+=g:i=s+(g-s)/(_-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},f=function(g){var v=a,_=s,m=To();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?_:-_))/((n?m:o)-v)*1e3};return{update:h,reset:d,getVelocity:f}},ro=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ah=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},tp=function(){Os=ln.core.globals().ScrollTrigger,Os&&Os.core&&z_()},np=function(e){return ln=e||Qd(),!Ba&&ln&&typeof document<"u"&&document.body&&(Yn=window,dr=document,pr=dr.documentElement,Ns=dr.body,Jd=[Yn,dr,pr,Ns],ln.utils.clamp,jd=ln.core.context||function(){},Or="onpointerenter"in Ns?"pointer":"mouse",Kd=qt.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=qt.eventTypes=("ontouchstart"in pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ep=0},500),Ba=1),Os||tp(),Ba};wn.op=Qt;dt.cache=0;var qt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ba||np(ln)||console.warn("Please gsap.registerPlugin(Observer)"),Os||tp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,v=n.event,_=n.onDragStart,m=n.onDragEnd,w=n.onDrag,b=n.onPress,M=n.onRelease,L=n.onRight,D=n.onLeft,A=n.onUp,I=n.onDown,T=n.onChangeX,S=n.onChangeY,U=n.onChange,z=n.onToggleX,V=n.onToggleY,Z=n.onHover,Q=n.onHoverEnd,q=n.onMove,X=n.ignoreCheck,G=n.isNormalizer,le=n.onGestureStart,N=n.onGestureEnd,ye=n.onWheel,Fe=n.onEnable,Xe=n.onDisable,te=n.onClick,ce=n.scrollSpeed,he=n.capture,fe=n.allowClicks,Pe=n.lockAxis,Be=n.onLockAxis;this.target=a=Pn(a)||pr,this.vars=n,p&&(p=ln.utils.toArray(p)),i=i||1e-9,s=s||0,g=g||1,ce=ce||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yn.getComputedStyle(Ns).lineHeight)||22);var Ye,et,Ae,Me,B,pt,qe,H=this,Ie=0,Ze=0,Te=n.passive||!h&&n.passive!==!1,P=Er(a,wn),E=Er(a,Qt),Y=P(),ae=E(),se=~o.indexOf("touch")&&!~o.indexOf("pointer")&&gi[0]==="pointerdown",ie=bo(a),_e=a.ownerDocument||dr,Se=[0,0,0],Ee=[0,0,0],Je=0,de=function(){return Je=To()},ge=function(He,it){return(H.event=He)&&p&&k_(He.target,p)||it&&se&&He.pointerType!=="touch"||X&&X(He,it)},Oe=function(){H._vx.reset(),H._vy.reset(),et.pause(),d&&d(H)},Ue=function(){var He=H.deltaX=Ah(Se),it=H.deltaY=Ah(Ee),Ce=Math.abs(He)>=i,tt=Math.abs(it)>=i;U&&(Ce||tt)&&U(H,He,it,Se,Ee),Ce&&(L&&H.deltaX>0&&L(H),D&&H.deltaX<0&&D(H),T&&T(H),z&&H.deltaX<0!=Ie<0&&z(H),Ie=H.deltaX,Se[0]=Se[1]=Se[2]=0),tt&&(I&&H.deltaY>0&&I(H),A&&H.deltaY<0&&A(H),S&&S(H),V&&H.deltaY<0!=Ze<0&&V(H),Ze=H.deltaY,Ee[0]=Ee[1]=Ee[2]=0),(Me||Ae)&&(q&&q(H),Ae&&(_&&Ae===1&&_(H),w&&w(H),Ae=0),Me=!1),pt&&!(pt=!1)&&Be&&Be(H),B&&(ye(H),B=!1),Ye=0},De=function(He,it,Ce){Se[Ce]+=He,Ee[Ce]+=it,H._vx.update(He),H._vy.update(it),c?Ye||(Ye=requestAnimationFrame(Ue)):Ue()},$e=function(He,it){Pe&&!qe&&(H.axis=qe=Math.abs(He)>Math.abs(it)?"x":"y",pt=!0),qe!=="y"&&(Se[2]+=He,H._vx.update(He,!0)),qe!=="x"&&(Ee[2]+=it,H._vy.update(it,!0)),c?Ye||(Ye=requestAnimationFrame(Ue)):Ue()},ke=function(He){if(!ge(He,1)){He=ro(He,h);var it=He.clientX,Ce=He.clientY,tt=it-H.x,Ve=Ce-H.y,Qe=H.isDragging;H.x=it,H.y=Ce,(Qe||(tt||Ve)&&(Math.abs(H.startX-it)>=s||Math.abs(H.startY-Ce)>=s))&&(Ae||(Ae=Qe?2:1),Qe||(H.isDragging=!0),$e(tt,Ve))}},Ke=H.onPress=function(Ne){ge(Ne,1)||Ne&&Ne.button||(H.axis=qe=null,et.pause(),H.isPressed=!0,Ne=ro(Ne),Ie=Ze=0,H.startX=H.x=Ne.clientX,H.startY=H.y=Ne.clientY,H._vx.reset(),H._vy.reset(),Sn(G?a:_e,gi[1],ke,Te,!0),H.deltaX=H.deltaY=0,b&&b(H))},F=H.onRelease=function(Ne){if(!ge(Ne,1)){xn(G?a:_e,gi[1],ke,!0);var He=!isNaN(H.y-H.startY),it=H.isDragging,Ce=it&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),tt=ro(Ne);!Ce&&He&&(H._vx.reset(),H._vy.reset(),h&&fe&&ln.delayedCall(.08,function(){if(To()-Je>300&&!Ne.defaultPrevented){if(Ne.target.click)Ne.target.click();else if(_e.createEvent){var Ve=_e.createEvent("MouseEvents");Ve.initMouseEvent("click",!0,!0,Yn,1,tt.screenX,tt.screenY,tt.clientX,tt.clientY,!1,!1,!1,!1,0,null),Ne.target.dispatchEvent(Ve)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,d&&it&&!G&&et.restart(!0),Ae&&Ue(),m&&it&&m(H),M&&M(H,Ce)}},ee=function(He){return He.touches&&He.touches.length>1&&(H.isGesturing=!0)&&le(He,H.isDragging)},ne=function(){return(H.isGesturing=!1)||N(H)},oe=function(He){if(!ge(He)){var it=P(),Ce=E();De((it-Y)*ce,(Ce-ae)*ce,1),Y=it,ae=Ce,d&&et.restart(!0)}},we=function(He){if(!ge(He)){He=ro(He,h),ye&&(B=!0);var it=(He.deltaMode===1?l:He.deltaMode===2?Yn.innerHeight:1)*g;De(He.deltaX*it,He.deltaY*it,0),d&&!G&&et.restart(!0)}},Re=function(He){if(!ge(He)){var it=He.clientX,Ce=He.clientY,tt=it-H.x,Ve=Ce-H.y;H.x=it,H.y=Ce,Me=!0,d&&et.restart(!0),(tt||Ve)&&$e(tt,Ve)}},je=function(He){H.event=He,Z(H)},gt=function(He){H.event=He,Q(H)},Ot=function(He){return ge(He)||ro(He,h)&&te(H)};et=H._dc=ln.delayedCall(f||.25,Oe).pause(),H.deltaX=H.deltaY=0,H._vx=wc(0,50,!0),H._vy=wc(0,50,!0),H.scrollX=P,H.scrollY=E,H.isDragging=H.isGesturing=H.isPressed=!1,jd(this),H.enable=function(Ne){return H.isEnabled||(Sn(ie?_e:a,"scroll",bc),o.indexOf("scroll")>=0&&Sn(ie?_e:a,"scroll",oe,Te,he),o.indexOf("wheel")>=0&&Sn(a,"wheel",we,Te,he),(o.indexOf("touch")>=0&&Kd||o.indexOf("pointer")>=0)&&(Sn(a,gi[0],Ke,Te,he),Sn(_e,gi[2],F),Sn(_e,gi[3],F),fe&&Sn(a,"click",de,!0,!0),te&&Sn(a,"click",Ot),le&&Sn(_e,"gesturestart",ee),N&&Sn(_e,"gestureend",ne),Z&&Sn(a,Or+"enter",je),Q&&Sn(a,Or+"leave",gt),q&&Sn(a,Or+"move",Re)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=Me=Ae=!1,H._vx.reset(),H._vy.reset(),Y=P(),ae=E(),Ne&&Ne.type&&Ke(Ne),Fe&&Fe(H)),H},H.disable=function(){H.isEnabled&&(Cs.filter(function(Ne){return Ne!==H&&bo(Ne.target)}).length||xn(ie?_e:a,"scroll",bc),H.isPressed&&(H._vx.reset(),H._vy.reset(),xn(G?a:_e,gi[1],ke,!0)),xn(ie?_e:a,"scroll",oe,he),xn(a,"wheel",we,he),xn(a,gi[0],Ke,he),xn(_e,gi[2],F),xn(_e,gi[3],F),xn(a,"click",de,!0),xn(a,"click",Ot),xn(_e,"gesturestart",ee),xn(_e,"gestureend",ne),xn(a,Or+"enter",je),xn(a,Or+"leave",gt),xn(a,Or+"move",Re),H.isEnabled=H.isPressed=H.isDragging=!1,Xe&&Xe(H))},H.kill=H.revert=function(){H.disable();var Ne=Cs.indexOf(H);Ne>=0&&Cs.splice(Ne,1),Wi===H&&(Wi=0)},Cs.push(H),G&&bo(a)&&(Wi=H),H.enable(v)},B_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qt.version="3.15.0";qt.create=function(r){return new qt(r)};qt.register=np;qt.getAll=function(){return Cs.slice()};qt.getById=function(r){return Cs.filter(function(e){return e.vars.id===r})[0]};Qd()&&ln.registerPlugin(qt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ze,bs,ft,At,Wn,Tt,ku,rl,Vo,wo,po,ta,dn,fl,Ac,En,Rh,Ch,ws,ip,bl,rp,yn,Rc,sp,op,cr,Cc,Hu,Fs,Vu,Ao,Pc,wl,na=1,pn=Date.now,Al=pn(),hi=0,mo=0,Ph=function(e,t,n){var i=Vn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Dh=function(e,t){return t&&(!Vn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},H_=function r(){return mo&&requestAnimationFrame(r)},Lh=function(){return fl=1},Ih=function(){return fl=0},yi=function(e){return e},_o=function(e){return Math.round(e*1e5)/1e5||0},ap=function(){return typeof window<"u"},lp=function(){return ze||ap()&&(ze=window.gsap)&&ze.registerPlugin&&ze},Qr=function(e){return!!~ku.indexOf(e)},cp=function(e){return(e==="Height"?Vu:ft["inner"+e])||Wn["client"+e]||Tt["client"+e]},up=function(e){return vr(e,"getBoundingClientRect")||(Qr(e)?function(){return Ga.width=ft.innerWidth,Ga.height=Vu,Ga}:function(){return Hi(e)})},V_=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=vr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?cp(s):e["client"+s])||0}},G_=function(e,t){return!t||~Ri.indexOf(e)?up(e):function(){return Ga}},Ai=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=vr(e,n))?o()-up(e)()[s]:Qr(e)?(Wn[n]||Tt[n])-cp(i):e[n]-e["offset"+i])},ia=function(e,t){for(var n=0;n<ws.length;n+=3)(!t||~t.indexOf(ws[n+1]))&&e(ws[n],ws[n+1],ws[n+2])},Vn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},go=function(e){return typeof e=="number"},Fr=function(e){return typeof e=="object"},so=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},as=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ls=Math.abs,hp="left",fp="top",Gu="right",Wu="bottom",$r="width",Kr="height",Ro="Right",Co="Left",Po="Top",Do="Bottom",$t="padding",ii="margin",Zs="Width",Xu="Height",jt="px",ri=function(e){return ft.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},W_=function(e){var t=ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Uh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hi=function(e,t){var n=t&&ri(e)[Ac]!=="matrix(1, 0, 0, 1, 0, 0)"&&ze.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},sl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},dp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},X_=function(e){return function(t){return ze.utils.snap(dp(e),t)}},Yu=function(e){var t=ze.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Y_=function(e){return function(t,n){return Yu(dp(e))(t,n.direction)}},ra=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},sa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Nh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},oa={toggleActions:"play",anticipatePin:0},ol={top:0,left:0,center:.5,bottom:1,right:1},za=function(e,t){if(Vn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ol?ol[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},aa=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,g=At.createElement("div"),v=Qr(n)||vr(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,m=v?Tt:n.tagName==="IFRAME"?n.contentDocument.body:n,w=e.indexOf("start")!==-1,b=w?c:h,M="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((_||l)&&v?"fixed;":"absolute;"),(_||l||!v)&&(M+=(i===Qt?Gu:Wu)+":"+(o+parseFloat(f))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=w,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],ka(g,0,i,w),g},ka=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Zs]=1,s["border"+a+Zs]=0,s[n.p]=t+"px",ze.set(e,s)},lt=[],Dc={},Go,Oh=function(){return pn()-hi>34&&(Go||(Go=requestAnimationFrame(Zi)))},cs=function(){(!yn||!yn.isPressed||yn.startX>Tt.clientWidth)&&(dt.cache++,yn?Go||(Go=requestAnimationFrame(Zi)):Zi(),hi||ts("scrollStart"),hi=pn())},Rl=function(){op=ft.innerWidth,sp=ft.innerHeight},vo=function(e){dt.cache++,(e===!0||!dn&&!rp&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!Rc||op!==ft.innerWidth||Math.abs(ft.innerHeight-sp)>ft.innerHeight*.25))&&rl.restart(!0)},es={},q_=[],pp=function r(){return sn(ct,"scrollEnd",r)||Gr(!0)},ts=function(e){return es[e]&&es[e].map(function(t){return t()})||q_},Hn=[],mp=function(e){for(var t=0;t<Hn.length;t+=5)(!e||Hn[t+4]&&Hn[t+4].query===e)&&(Hn[t].style.cssText=Hn[t+1],Hn[t].getBBox&&Hn[t].setAttribute("transform",Hn[t+2]||""),Hn[t+3].uncache=1)},_p=function(){return dt.forEach(function(e){return _n(e)&&++e.cacheID&&(e.rec=e())})},qu=function(e,t){var n;for(En=0;En<lt.length;En++)n=lt[En],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ao=!0,t&&mp(t),t||ts("revert")},gp=function(e,t){dt.cache++,(t||!Tn)&&dt.forEach(function(n){return _n(n)&&n.cacheID++&&(n.rec=0)}),Vn(e)&&(ft.history.scrollRestoration=Hu=e)},Tn,Jr=0,Fh,Z_=function(){if(Fh!==Jr){var e=Fh=Jr;requestAnimationFrame(function(){return e===Jr&&Gr(!0)})}},vp=function(){Tt.appendChild(Fs),Vu=!yn&&Fs.offsetHeight||ft.innerHeight,Tt.removeChild(Fs)},Bh=function(e){return Vo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Gr=function(e,t){if(Wn=At.documentElement,Tt=At.body,ku=[ft,At,Wn,Tt],hi&&!e&&!Ao){on(ct,"scrollEnd",pp);return}vp(),Tn=ct.isRefreshing=!0,Ao||_p();var n=ts("refreshInit");ip&&ct.sort(),t||qu(),dt.forEach(function(i){_n(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),lt.slice(0).forEach(function(i){return i.refresh()}),Ao=!1,lt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Pc=1,Bh(!0),lt.forEach(function(i){var s=Ai(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Bh(!1),Pc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),dt.forEach(function(i){_n(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),gp(Hu,1),rl.pause(),Jr++,Tn=2,Zi(2),lt.forEach(function(i){return _n(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=ct.isRefreshing=!1,ts("refresh")},Lc=0,Ha=1,Lo,Zi=function(e){if(e===2||!Tn&&!Ao){ct.isUpdating=!0,Lo&&Lo.update(0);var t=lt.length,n=pn(),i=n-Al>=50,s=t&&lt[0].scroll();if(Ha=Lc>s?-1:1,Tn||(Lc=s),i&&(hi&&!fl&&n-hi>200&&(hi=0,ts("scrollEnd")),po=Al,Al=n),Ha<0){for(En=t;En-- >0;)lt[En]&&lt[En].update(0,i);Ha=1}else for(En=0;En<t;En++)lt[En]&&lt[En].update(0,i);ct.isUpdating=!1}Go=0},Ic=[hp,fp,Wu,Gu,ii+Do,ii+Ro,ii+Po,ii+Co,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Va=Ic.concat([$r,Kr,"boxSizing","max"+Zs,"max"+Xu,"position",ii,$t,$t+Po,$t+Ro,$t+Do,$t+Co]),$_=function(e,t,n){Bs(n);var i=e._gsap;if(i.spacerIsNative)Bs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Cl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ic.length,o=t.style,a=e.style,l;s--;)l=Ic[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Wu]=a[Gu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[$r]=sl(e,wn)+jt,o[Kr]=sl(e,Qt)+jt,o[$t]=a[ii]=a[fp]=a[hp]="0",Bs(i),a[$r]=a["max"+Zs]=n[$r],a[Kr]=a["max"+Xu]=n[Kr],a[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},K_=/([A-Z])/g,Bs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ze.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(K_,"-$1").toLowerCase())}},la=function(e){for(var t=Va.length,n=e.style,i=[],s=0;s<t;s++)i.push(Va[s],n[Va[s]]);return i.t=e,i},J_=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ga={left:0,top:0},zh=function(e,t,n,i,s,o,a,l,c,h,d,f,p,g){_n(e)&&(e=e(l)),Vn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?za("0"+e.substr(3),n):0));var v=p?p.time():0,_,m,w;if(p&&p.seek(0),isNaN(e)||(e=+e),go(e))p&&(e=ze.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&ka(a,n,i,!0);else{_n(t)&&(t=t(l));var b=(e||"0").split(" "),M,L,D,A;w=Pn(t,l)||Tt,M=Hi(w)||{},(!M||!M.left&&!M.top)&&ri(w).display==="none"&&(A=w.style.display,w.style.display="block",M=Hi(w),A?w.style.display=A:w.style.removeProperty("display")),L=za(b[0],M[i.d]),D=za(b[1]||"0",n),e=M[i.p]-c[i.p]-h+L+s-D,a&&ka(a,D,i,n-D<20||a._isStart&&D>20),n-=n-D}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var I=e+n,T=o._isStart;_="scroll"+i.d2,ka(o,I,i,T&&I>20||!T&&(d?Math.max(Tt[_],Wn[_]):o.parentNode[_])<=I+1),d&&(c=Hi(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+jt))}return p&&w&&(_=Hi(w),p.seek(f),m=Hi(w),p._caScrollDist=_[i.p]-m[i.p],e=e/p._caScrollDist*f),p&&p.seek(v),p?e:Math.round(e)},j_=/(webkit|moz|length|cssText|inset)/i,kh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Tt){e._stOrig=s.cssText,a=ri(e);for(o in a)!+o&&!j_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ze.core.getCache(e).uncache=1,t.appendChild(e)}},xp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ca=function(e,t,n){var i={};i[t.p]="+="+n,ze.set(e,i)},Hh=function(e,t){var n=Er(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,d){var f=o.tween,p=l.onComplete,g={};c=c||n();var v=xp(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return v(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){dt.cache++,o.tween&&Zi()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=ze.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",n.wheelHandler),ct.isTouch&&on(e,"touchmove",n.wheelHandler),s},ct=(function(){function r(t,n){bs||r.register(ze)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Cc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!mo){this.update=this.refresh=this.kill=yi;return}n=Uh(Vn(n)||go(n)||n.nodeType?{trigger:n}:n,oa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,v=s.invalidateOnRefresh,_=s.anticipatePin,m=s.onScrubComplete,w=s.onSnapComplete,b=s.once,M=s.snap,L=s.pinReparent,D=s.pinSpacer,A=s.containerAnimation,I=s.fastScrollEnd,T=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:Qt,U=!d&&d!==0,z=Pn(n.scroller||ft),V=ze.core.getCache(z),Z=Qr(z),Q=("pinType"in n?n.pinType:vr(z,"pinType")||Z&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=U&&n.toggleActions.split(" "),G="markers"in n?n.markers:oa.markers,le=Z?0:parseFloat(ri(z)["border"+S.p2+Zs])||0,N=this,ye=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Fe=V_(z,Z,S),Xe=G_(z,Z),te=0,ce=0,he=0,fe=Er(z,S),Pe,Be,Ye,et,Ae,Me,B,pt,qe,H,Ie,Ze,Te,P,E,Y,ae,se,ie,_e,Se,Ee,Je,de,ge,Oe,Ue,De,$e,ke,Ke,F,ee,ne,oe,we,Re,je,gt;if(N._startClamp=N._endClamp=!1,N._dir=S,_*=45,N.scroller=z,N.scroll=A?A.time.bind(A):fe,et=fe(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(ip=1,n.refreshPriority===-9999&&(Lo=N)),V.tweenScroll=V.tweenScroll||{top:Hh(z,Qt),left:Hh(z,wn)},N.tweenTo=Pe=V.tweenScroll[S.p],N.scrubDuration=function(Ce){ee=go(Ce)&&Ce,ee?F?F.duration(Ce):F=ze.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return m&&m(N)}}):(F&&F.progress(1).kill(),F=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(d),ke=0,l||(l=i.vars.id)),M&&((!Fr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in Tt.style&&ze.set(Z?[Tt,Wn]:z,{scrollBehavior:"auto"}),dt.forEach(function(Ce){return _n(Ce)&&Ce.target===(Z?At.scrollingElement||Wn:z)&&(Ce.smooth=!1)}),Ye=_n(M.snapTo)?M.snapTo:M.snapTo==="labels"?X_(i):M.snapTo==="labelsDirectional"?Y_(i):M.directional!==!1?function(Ce,tt){return Yu(M.snapTo)(Ce,pn()-ce<500?0:tt.direction)}:ze.utils.snap(M.snapTo),ne=M.duration||{min:.1,max:2},ne=Fr(ne)?wo(ne.min,ne.max):wo(ne,ne),oe=ze.delayedCall(M.delay||ee/2||.1,function(){var Ce=fe(),tt=pn()-ce<500,Ve=Pe.tween;if((tt||Math.abs(N.getVelocity())<10)&&!Ve&&!fl&&te!==Ce){var Qe=(Ce-Me)/P,Ft=i&&!U?i.totalProgress():Qe,st=tt?0:(Ft-Ke)/(pn()-po)*1e3||0,Rt=ze.utils.clamp(-Qe,1-Qe,ls(st/2)*st/.185),Xt=Qe+(M.inertia===!1?0:Rt),bt,Et,vt=M,vn=vt.onStart,xt=vt.onInterrupt,Gt=vt.onComplete;if(bt=Ye(Xt,N),go(bt)||(bt=Xt),Et=Math.max(0,Math.round(Me+bt*P)),Ce<=B&&Ce>=Me&&Et!==Ce){if(Ve&&!Ve._initted&&Ve.data<=ls(Et-Ce))return;M.inertia===!1&&(Rt=bt-Qe),Pe(Et,{duration:ne(ls(Math.max(ls(Xt-Ft),ls(bt-Ft))*.185/st/.05||0)),ease:M.ease||"power3",data:ls(Et-Ce),onInterrupt:function(){return oe.restart(!0)&&xt&&as(N,xt)},onComplete:function(){N.update(),te=fe(),i&&!U&&(F?F.resetTo("totalProgress",bt,i._tTime/i._tDur):i.progress(bt)),ke=Ke=i&&!U?i.totalProgress():N.progress,w&&w(N),Gt&&as(N,Gt)}},Ce,Rt*P,Et-Ce-Rt*P),vn&&as(N,vn,Pe.tween)}}else N.isActive&&te!==Ce&&oe.restart(!0)}).pause()),l&&(Dc[l]=N),f=N.trigger=Pn(f||p!==!0&&p),gt=f&&f._gsap&&f._gsap.stRevert,gt&&(gt=gt(N)),p=p===!0?f:Pn(p),Vn(a)&&(a={targets:f,className:a}),p&&(g===!1||g===ii||(g=!g&&p.parentNode&&p.parentNode.style&&ri(p.parentNode).display==="flex"?!1:$t),N.pin=p,Be=ze.core.getCache(p),Be.spacer?E=Be.pinState:(D&&(D=Pn(D),D&&!D.nodeType&&(D=D.current||D.nativeElement),Be.spacerIsNative=!!D,D&&(Be.spacerState=la(D))),Be.spacer=se=D||At.createElement("div"),se.classList.add("pin-spacer"),l&&se.classList.add("pin-spacer-"+l),Be.pinState=E=la(p)),n.force3D!==!1&&ze.set(p,{force3D:!0}),N.spacer=se=Be.spacer,$e=ri(p),de=$e[g+S.os2],_e=ze.getProperty(p),Se=ze.quickSetter(p,S.a,jt),Cl(p,se,$e),ae=la(p)),G){Ze=Fr(G)?Uh(G,Nh):Nh,H=aa("scroller-start",l,z,S,Ze,0),Ie=aa("scroller-end",l,z,S,Ze,0,H),ie=H["offset"+S.op.d2];var Ot=Pn(vr(z,"content")||z);pt=this.markerStart=aa("start",l,Ot,S,Ze,ie,0,A),qe=this.markerEnd=aa("end",l,Ot,S,Ze,ie,0,A),A&&(je=ze.quickSetter([pt,qe],S.a,jt)),!Q&&!(Ri.length&&vr(z,"fixedMarkers")===!0)&&(W_(Z?Tt:z),ze.set([H,Ie],{force3D:!0}),Oe=ze.quickSetter(H,S.a,jt),De=ze.quickSetter(Ie,S.a,jt))}if(A){var Ne=A.vars.onUpdate,He=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){N.update(0,0,1),Ne&&Ne.apply(A,He||[])})}if(N.previous=function(){return lt[lt.indexOf(N)-1]},N.next=function(){return lt[lt.indexOf(N)+1]},N.revert=function(Ce,tt){if(!tt)return N.kill(!0);var Ve=Ce!==!1||!N.enabled,Qe=dn;Ve!==N.isReverted&&(Ve&&(we=Math.max(fe(),N.scroll.rec||0),he=N.progress,Re=i&&i.progress()),pt&&[pt,qe,H,Ie].forEach(function(Ft){return Ft.style.display=Ve?"none":"block"}),Ve&&(dn=N,N.update(Ve)),p&&(!L||!N.isActive)&&(Ve?$_(p,se,E):Cl(p,se,ri(p),ge)),Ve||N.update(Ve),dn=Qe,N.isReverted=Ve)},N.refresh=function(Ce,tt,Ve,Qe){if(!((dn||!N.enabled)&&!tt)){if(p&&Ce&&hi){on(r,"scrollEnd",pp);return}!Tn&&ye&&ye(N),dn=N,Pe.tween&&!Ve&&(Pe.tween.kill(),Pe.tween=0),F&&F.pause(),v&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ve){return ve.vars.immediateRender&&ve.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Ft=Fe(),st=Xe(),Rt=A?A.duration():Ai(z,S),Xt=P<=.01||!P,bt=0,Et=Qe||0,vt=Fr(Ve)?Ve.end:n.end,vn=n.endTrigger||f,xt=Fr(Ve)?Ve.start:n.start||(n.start===0||!f?0:p?"0 0":"0 100%"),Gt=N.pinnedContainer=n.pinnedContainer&&Pn(n.pinnedContainer,N),u=f&&Math.max(0,lt.indexOf(N))||0,x=u,y,R,C,O,k,$,W,J,j,re,ue,pe,be;for(G&&Fr(Ve)&&(pe=ze.getProperty(H,S.p),be=ze.getProperty(Ie,S.p));x-- >0;)$=lt[x],$.end||$.refresh(0,1)||(dn=N),W=$.pin,W&&(W===f||W===p||W===Gt)&&!$.isReverted&&(re||(re=[]),re.unshift($),$.revert(!0,!0)),$!==lt[x]&&(u--,x--);for(_n(xt)&&(xt=xt(N)),xt=Ph(xt,"start",N),Me=zh(xt,f,Ft,S,fe(),pt,H,N,st,le,Q,Rt,A,N._startClamp&&"_startClamp")||(p?-.001:0),_n(vt)&&(vt=vt(N)),Vn(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(Vn(xt)?xt.split(" ")[0]:"")+vt:(bt=za(vt.substr(2),Ft),vt=Vn(xt)?xt:(A?ze.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Me):Me)+bt,vn=f)),vt=Ph(vt,"end",N),B=Math.max(Me,zh(vt||(vn?"100% 0":Rt),vn,Ft,S,fe()+bt,qe,Ie,N,st,le,Q,Rt,A,N._endClamp&&"_endClamp"))||-.001,bt=0,x=u;x--;)$=lt[x]||{},W=$.pin,W&&$.start-$._pinPush<=Me&&!A&&$.end>0&&(y=$.end-(N._startClamp?Math.max(0,$.start):$.start),(W===f&&$.start-$._pinPush<Me||W===Gt)&&isNaN(xt)&&(bt+=y*(1-$.progress)),W===p&&(Et+=y));if(Me+=bt,B+=bt,N._startClamp&&(N._startClamp+=bt),N._endClamp&&!Tn&&(N._endClamp=B||-.001,B=Math.min(B,Ai(z,S))),P=B-Me||(Me-=.01)&&.001,Xt&&(he=ze.utils.clamp(0,1,ze.utils.normalize(Me,B,we))),N._pinPush=Et,pt&&bt&&(y={},y[S.a]="+="+bt,Gt&&(y[S.p]="-="+fe()),ze.set([pt,qe],y)),p&&!(Pc&&N.end>=Ai(z,S)))y=ri(p),O=S===Qt,C=fe(),Ee=parseFloat(_e(S.a))+Et,!Rt&&B>1&&(ue=(Z?At.scrollingElement||Wn:z).style,ue={style:ue,value:ue["overflow"+S.a.toUpperCase()]},Z&&ri(Tt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ue.style["overflow"+S.a.toUpperCase()]="scroll")),Cl(p,se,y),ae=la(p),R=Hi(p,!0),J=Q&&Er(z,O?wn:Qt)(),g?(ge=[g+S.os2,P+Et+jt],ge.t=se,x=g===$t?sl(p,S)+P+Et:0,x&&(ge.push(S.d,x+jt),se.style.flexBasis!=="auto"&&(se.style.flexBasis=x+jt)),Bs(ge),Gt&&lt.forEach(function(ve){ve.pin===Gt&&ve.vars.pinSpacing!==!1&&(ve._subPinOffset=!0)}),Q&&fe(we)):(x=sl(p,S),x&&se.style.flexBasis!=="auto"&&(se.style.flexBasis=x+jt)),Q&&(k={top:R.top+(O?C-Me:J)+jt,left:R.left+(O?J:C-Me)+jt,boxSizing:"border-box",position:"fixed"},k[$r]=k["max"+Zs]=Math.ceil(R.width)+jt,k[Kr]=k["max"+Xu]=Math.ceil(R.height)+jt,k[ii]=k[ii+Po]=k[ii+Ro]=k[ii+Do]=k[ii+Co]="0",k[$t]=y[$t],k[$t+Po]=y[$t+Po],k[$t+Ro]=y[$t+Ro],k[$t+Do]=y[$t+Do],k[$t+Co]=y[$t+Co],Y=J_(E,k,L),Tn&&fe(0)),i?(j=i._initted,bl(1),i.render(i.duration(),!0,!0),Je=_e(S.a)-Ee+P+Et,Ue=Math.abs(P-Je)>1,Q&&Ue&&Y.splice(Y.length-2,2),i.render(0,!0,!0),j||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bl(0)):Je=P,ue&&(ue.value?ue.style["overflow"+S.a.toUpperCase()]=ue.value:ue.style.removeProperty("overflow-"+S.a));else if(f&&fe()&&!A)for(R=f.parentNode;R&&R!==Tt;)R._pinOffset&&(Me-=R._pinOffset,B-=R._pinOffset),R=R.parentNode;re&&re.forEach(function(ve){return ve.revert(!1,!0)}),N.start=Me,N.end=B,et=Ae=Tn?we:fe(),!A&&!Tn&&(et<we&&fe(we),N.scroll.rec=0),N.revert(!1,!0),ce=pn(),oe&&(te=-1,oe.restart(!0)),dn=0,i&&U&&(i._initted||Re)&&i.progress()!==Re&&i.progress(Re||0,!0).render(i.time(),!0,!0),(Xt||he!==N.progress||A||v||i&&!i._initted)&&(i&&!U&&(i._initted||he||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Me<-.001&&!he?ze.utils.normalize(Me,B,0):he,!0),N.progress=Xt||(et-Me)/P===he?0:he),p&&g&&(se._pinOffset=Math.round(N.progress*Je)),F&&F.invalidate(),isNaN(pe)||(pe-=ze.getProperty(H,S.p),be-=ze.getProperty(Ie,S.p),ca(H,S,pe),ca(pt,S,pe-(Qe||0)),ca(Ie,S,be),ca(qe,S,be-(Qe||0))),Xt&&!Tn&&N.update(),h&&!Tn&&!Te&&(Te=!0,h(N),Te=!1)}},N.getVelocity=function(){return(fe()-Ae)/(pn()-po)*1e3||0},N.endAnimation=function(){so(N.callbackAnimation),i&&(F?F.progress(1):i.paused()?U||so(i,N.direction<0,1):so(i,i.reversed()))},N.labelToScroll=function(Ce){return i&&i.labels&&(Me||N.refresh()||Me)+i.labels[Ce]/i.duration()*P||0},N.getTrailing=function(Ce){var tt=lt.indexOf(N),Ve=N.direction>0?lt.slice(0,tt).reverse():lt.slice(tt+1);return(Vn(Ce)?Ve.filter(function(Qe){return Qe.vars.preventOverlaps===Ce}):Ve).filter(function(Qe){return N.direction>0?Qe.end<=Me:Qe.start>=B})},N.update=function(Ce,tt,Ve){if(!(A&&!Ve&&!Ce)){var Qe=Tn===!0?we:N.scroll(),Ft=Ce?0:(Qe-Me)/P,st=Ft<0?0:Ft>1?1:Ft||0,Rt=N.progress,Xt,bt,Et,vt,vn,xt,Gt,u;if(tt&&(Ae=et,et=A?fe():Qe,M&&(Ke=ke,ke=i&&!U?i.totalProgress():st)),_&&p&&!dn&&!na&&hi&&(!st&&Me<Qe+(Qe-Ae)/(pn()-po)*_?st=1e-4:st===1&&B>Qe+(Qe-Ae)/(pn()-po)*_&&(st=.9999)),st!==Rt&&N.enabled){if(Xt=N.isActive=!!st&&st<1,bt=!!Rt&&Rt<1,xt=Xt!==bt,vn=xt||!!st!=!!Rt,N.direction=st>Rt?1:-1,N.progress=st,vn&&!dn&&(Et=st&&!Rt?0:st===1?1:Rt===1?2:3,U&&(vt=!xt&&X[Et+1]!=="none"&&X[Et+1]||X[Et],u=i&&(vt==="complete"||vt==="reset"||vt in i))),T&&(xt||u)&&(u||d||!i)&&(_n(T)?T(N):N.getTrailing(T).forEach(function(C){return C.endAnimation()})),U||(F&&!dn&&!na?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",st,i._tTime/i._tDur):(F.vars.totalProgress=st,F.invalidate().restart())):i&&i.totalProgress(st,!!(dn&&(ce||Ce)))),p){if(Ce&&g&&(se.style[g+S.os2]=de),!Q)Se(_o(Ee+Je*st));else if(vn){if(Gt=!Ce&&st>Rt&&B+1>Qe&&Qe+1>=Ai(z,S),L)if(!Ce&&(Xt||Gt)){var x=Hi(p,!0),y=Qe-Me;kh(p,Tt,x.top+(S===Qt?y:0)+jt,x.left+(S===Qt?0:y)+jt)}else kh(p,se);Bs(Xt||Gt?Y:ae),Ue&&st<1&&Xt||Se(Ee+(st===1&&!Gt?Je:0))}}M&&!Pe.tween&&!dn&&!na&&oe.restart(!0),a&&(xt||b&&st&&(st<1||!wl))&&Vo(a.targets).forEach(function(C){return C.classList[Xt||b?"add":"remove"](a.className)}),o&&!U&&!Ce&&o(N),vn&&!dn?(U&&(u&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(N)),(xt||!wl)&&(c&&xt&&as(N,c),q[Et]&&as(N,q[Et]),b&&(st===1?N.kill(!1,1):q[Et]=0),xt||(Et=st===1?1:3,q[Et]&&as(N,q[Et]))),I&&!Xt&&Math.abs(N.getVelocity())>(go(I)?I:2500)&&(so(N.callbackAnimation),F?F.progress(1):so(i,vt==="reverse"?1:!st,1))):U&&o&&!dn&&o(N)}if(De){var R=A?Qe/A.duration()*(A._caScrollDist||0):Qe;Oe(R+(H._isFlipped?1:0)),De(R)}je&&je(-Qe/A.duration()*(A._caScrollDist||0))}},N.enable=function(Ce,tt){N.enabled||(N.enabled=!0,on(z,"resize",vo),Z||on(z,"scroll",cs),ye&&on(r,"refreshInit",ye),Ce!==!1&&(N.progress=he=0,et=Ae=te=fe()),tt!==!1&&N.refresh())},N.getTween=function(Ce){return Ce&&Pe?Pe.tween:F},N.setPositions=function(Ce,tt,Ve,Qe){if(A){var Ft=A.scrollTrigger,st=A.duration(),Rt=Ft.end-Ft.start;Ce=Ft.start+Rt*Ce/st,tt=Ft.start+Rt*tt/st}N.refresh(!1,!1,{start:Dh(Ce,Ve&&!!N._startClamp),end:Dh(tt,Ve&&!!N._endClamp)},Qe),N.update()},N.adjustPinSpacing=function(Ce){if(ge&&Ce){var tt=ge.indexOf(S.d)+1;ge[tt]=parseFloat(ge[tt])+Ce+jt,ge[1]=parseFloat(ge[1])+Ce+jt,Bs(ge)}},N.disable=function(Ce,tt){if(Ce!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,tt||F&&F.pause(),we=0,Be&&(Be.uncache=1),ye&&sn(r,"refreshInit",ye),oe&&(oe.pause(),Pe.tween&&Pe.tween.kill()&&(Pe.tween=0)),!Z)){for(var Ve=lt.length;Ve--;)if(lt[Ve].scroller===z&&lt[Ve]!==N)return;sn(z,"resize",vo),Z||sn(z,"scroll",cs)}},N.kill=function(Ce,tt){N.disable(Ce,tt),F&&!tt&&F.kill(),l&&delete Dc[l];var Ve=lt.indexOf(N);Ve>=0&&lt.splice(Ve,1),Ve===En&&Ha>0&&En--,Ve=0,lt.forEach(function(Qe){return Qe.scroller===N.scroller&&(Ve=1)}),Ve||Tn||(N.scroll.rec=0),i&&(i.scrollTrigger=null,Ce&&i.revert({kill:!1}),tt||i.kill()),pt&&[pt,qe,H,Ie].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),Lo===N&&(Lo=0),p&&(Be&&(Be.uncache=1),Ve=0,lt.forEach(function(Qe){return Qe.pin===p&&Ve++}),Ve||(Be.spacer=0)),n.onKill&&n.onKill(N)},lt.push(N),N.enable(!1,!1),gt&&gt(N),i&&i.add&&!P){var it=N.update;N.update=function(){N.update=it,dt.cache++,Me||B||N.refresh()},ze.delayedCall(.01,N.update),P=.01,Me=B=0}else N.refresh();p&&Z_()},r.register=function(n){return bs||(ze=n||lp(),ap()&&window.document&&r.enable(),bs=mo),bs},r.defaults=function(n){if(n)for(var i in n)oa[i]=n[i];return oa},r.disable=function(n,i){mo=0,lt.forEach(function(o){return o[i?"kill":"disable"](n)}),sn(ft,"wheel",cs),sn(At,"scroll",cs),clearInterval(ta),sn(At,"touchcancel",yi),sn(Tt,"touchstart",yi),ra(sn,At,"pointerdown,touchstart,mousedown",Lh),ra(sn,At,"pointerup,touchend,mouseup",Ih),rl.kill(),ia(sn);for(var s=0;s<dt.length;s+=3)sa(sn,dt[s],dt[s+1]),sa(sn,dt[s],dt[s+2])},r.enable=function(){if(ft=window,At=document,Wn=At.documentElement,Tt=At.body,ze){if(Vo=ze.utils.toArray,wo=ze.utils.clamp,Cc=ze.core.context||yi,bl=ze.core.suppressOverwrites||yi,Hu=ft.history.scrollRestoration||"auto",Lc=ft.pageYOffset||0,ze.core.globals("ScrollTrigger",r),Tt){mo=1,Fs=document.createElement("div"),Fs.style.height="100vh",Fs.style.position="absolute",vp(),H_(),qt.register(ze),r.isTouch=qt.isTouch,cr=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Rc=qt.isTouch===1,on(ft,"wheel",cs),ku=[ft,At,Wn,Tt],ze.matchMedia?(r.matchMedia=function(h){var d=ze.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},ze.addEventListener("matchMediaInit",function(){_p(),qu()}),ze.addEventListener("matchMediaRevert",function(){return mp()}),ze.addEventListener("matchMedia",function(){Gr(0,1),ts("matchMedia")}),ze.matchMedia().add("(orientation: portrait)",function(){return Rl(),Rl})):console.warn("Requires GSAP 3.11.0 or later"),Rl(),on(At,"scroll",cs);var n=Tt.hasAttribute("style"),i=Tt.style,s=i.borderTopStyle,o=ze.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Hi(Tt),Qt.m=Math.round(a.top+Qt.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),ta=setInterval(Oh,250),ze.delayedCall(.5,function(){return na=0}),on(At,"touchcancel",yi),on(Tt,"touchstart",yi),ra(on,At,"pointerdown,touchstart,mousedown",Lh),ra(on,At,"pointerup,touchend,mouseup",Ih),Ac=ze.utils.checkPrefix("transform"),Va.push(Ac),bs=pn(),rl=ze.delayedCall(.2,Gr).pause(),ws=[At,"visibilitychange",function(){var h=ft.innerWidth,d=ft.innerHeight;At.hidden?(Rh=h,Ch=d):(Rh!==h||Ch!==d)&&vo()},At,"DOMContentLoaded",Gr,ft,"load",Gr,ft,"resize",vo],ia(on),lt.forEach(function(h){return h.enable(0,1)}),l=0;l<dt.length;l+=3)sa(sn,dt[l],dt[l+1]),sa(sn,dt[l],dt[l+2])}else if(At){var c=function h(){r.enable(),At.removeEventListener("DOMContentLoaded",h)};At.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(wl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ta)||(ta=i)&&setInterval(Oh,i),"ignoreMobileResize"in n&&(Rc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ia(sn)||ia(on,n.autoRefreshEvents||"none"),rp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Pn(n),o=dt.indexOf(s),a=Qr(s);~o&&dt.splice(o,a?6:2),i&&(a?Ri.unshift(ft,i,Tt,i,Wn,i):Ri.unshift(s,i))},r.clearMatchMedia=function(n){lt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Vn(n)?Pn(n):n).getBoundingClientRect(),a=o[s?$r:Kr]*i||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},r.positionInViewport=function(n,i,s){Vn(n)&&(n=Pn(n));var o=n.getBoundingClientRect(),a=o[s?$r:Kr],l=i==null?a/2:i in ol?ol[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},r.killAll=function(n){if(lt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=es.killAll||[];es={},i.forEach(function(s){return s()})}},r})();ct.version="3.15.0";ct.saveStyles=function(r){return r?Vo(r).forEach(function(e){if(e&&e.style){var t=Hn.indexOf(e);t>=0&&Hn.splice(t,5),Hn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ze.core.getCache(e),Cc())}}):Hn};ct.revert=function(r,e){return qu(!r,e)};ct.create=function(r,e){return new ct(r,e)};ct.refresh=function(r){return r?vo(!0):(bs||ct.register())&&Gr(!0)};ct.update=function(r){return++dt.cache&&Zi(r===!0?2:0)};ct.clearScrollMemory=gp;ct.maxScroll=function(r,e){return Ai(r,e?wn:Qt)};ct.getScrollFunc=function(r,e){return Er(Pn(r),e?wn:Qt)};ct.getById=function(r){return Dc[r]};ct.getAll=function(){return lt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!hi};ct.snapDirectional=Yu;ct.addEventListener=function(r,e){var t=es[r]||(es[r]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(r,e){var t=es[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ct.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var d=[],f=[],p=ze.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(g){d.length||p.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&p.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&_n(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return _n(s)&&(s=s(),on(ct,"refresh",function(){return s=e.batchMax()})),Vo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ct.create(c))}),t};var Vh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Pl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===Wn&&r(Tt,t)},ua={auto:1,scroll:1},Q_=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ze.core.getCache(s),a=pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ua[(l=ri(s)).overflowY]||ua[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Qr(s)&&(ua[(l=ri(s)).overflowY]||ua[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Sp=function(e,t,n,i){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Q_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(At,qt.eventTypes[0],Wh,!1,!0)},onDisable:function(){return sn(At,qt.eventTypes[0],Wh,!0)}})},eg=/(input|label|select|textarea)/i,Gh,Wh=function(e){var t=eg.test(e.target.tagName);(t||Gh)&&(e._gsapAllow=!0,Gh=t)},tg=function(e){Fr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Pn(e.target)||Wn,h=ze.core.globals().ScrollSmoother,d=h&&h.get(),f=cr&&(e.content&&Pn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Er(c,Qt),g=Er(c,wn),v=1,_=(qt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,m=0,w=_n(i)?function(){return i(a)}:function(){return i||2.8},b,M,L=Sp(c,e.type,!0,s),D=function(){return M=!1},A=yi,I=yi,T=function(){l=Ai(c,Qt),I=wo(cr?1:0,l),n&&(A=wo(0,Ai(c,wn))),b=Jr},S=function(){f._gsap.y=_o(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},U=function(){if(M){requestAnimationFrame(D);var G=_o(a.deltaY/2),le=I(p.v-G);if(f&&le!==p.v+p.offset){p.offset=le-p.v;var N=_o((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",p.cacheID=dt.cache,Zi()}return!0}p.offset&&S(),M=!0},z,V,Z,Q,q=function(){T(),z.isActive()&&z.vars.scrollY>l&&(p()>l?z.progress(1)&&p(l):z.resetTo("scrollY",l))};return f&&ze.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return cr&&X.type==="touchmove"&&U()||v>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){M=!1;var X=v;v=_o((ft.visualViewport&&ft.visualViewport.scale||1)/_),z.pause(),X!==v&&Pl(c,v>1.01?!0:n?!1:"x"),V=g(),Z=p(),T(),b=Jr},e.onRelease=e.onGestureStart=function(X,G){if(p.offset&&S(),!G)Q.restart(!0);else{dt.cache++;var le=w(),N,ye;n&&(N=g(),ye=N+le*.05*-X.velocityX/.227,le*=Vh(g,N,ye,Ai(c,wn)),z.vars.scrollX=A(ye)),N=p(),ye=N+le*.05*-X.velocityY/.227,le*=Vh(p,N,ye,Ai(c,Qt)),z.vars.scrollY=I(ye),z.invalidate().duration(le).play(.01),(cr&&z.vars.scrollY>=l||N>=l-1)&&ze.to({},{onUpdate:q,duration:le})}o&&o(X)},e.onWheel=function(){z._ts&&z.pause(),pn()-m>1e3&&(b=0,m=pn())},e.onChange=function(X,G,le,N,ye){if(Jr!==b&&T(),G&&n&&g(A(N[2]===G?V+(X.startX-X.x):g()+G-N[1])),le){p.offset&&S();var Fe=ye[2]===le,Xe=Fe?Z+X.startY-X.y:p()+le-ye[1],te=I(Xe);Fe&&Xe!==te&&(Z+=te-Xe),p(te)}(le||G)&&Zi()},e.onEnable=function(){Pl(c,n?!1:"x"),ct.addEventListener("refresh",q),on(ft,"resize",q),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),L.enable()},e.onDisable=function(){Pl(c,!0),sn(ft,"resize",q),ct.removeEventListener("refresh",q),L.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=cr,cr&&!p()&&p(1),cr&&ze.ticker.add(yi),Q=a._dc,z=ze.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:xp(p,p(),function(){return z.pause()})},onUpdate:Zi,onComplete:Q.vars.onComplete}),a};ct.sort=function(r){if(_n(r))return lt.sort(r);var e=ft.pageYOffset||0;return ct.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),lt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ct.observe=function(r){return new qt(r)};ct.normalizeScroll=function(r){if(typeof r>"u")return yn;if(r===!0&&yn)return yn.enable();if(r===!1){yn&&yn.kill(),yn=r;return}var e=r instanceof qt?r:tg(r);return yn&&yn.target===e.target&&yn.kill(),Qr(e.target)&&(yn=e),e};ct.core={_getVelocityProp:wc,_inputObserver:Sp,_scrollers:dt,_proxies:Ri,bridge:{ss:function(){hi||ts("scrollStart"),hi=pn()},ref:function(){return dn}}};lp()&&ze.registerPlugin(ct);const ng=[{title:"TradeForge",tags:"concept • web • solidity • development • 3d",url:"https://kianpk.github.io/tradeforge/",hue:"linear-gradient(135deg, #1a2ffb, #6d8cff 40%, #0b1024)"},{title:"Zyrax Drive",tags:"web • design • development • 3d • animation",url:"https://kianpk.github.io/zyrax-drive/",hue:"linear-gradient(135deg, #101018, #2a1a5e 45%, #c1ff00)"},{title:"Playfield",tags:"web • design • development • 3d • physics",url:"https://kianpk.github.io/playfield/",hue:"linear-gradient(135deg, #0e2a22, #1db954 50%, #d9ffe8)"},{title:"Orbit Desk",tags:"web • design • development • 3d • r3f",url:"https://kianpk.github.io/orbit-desk/",hue:"linear-gradient(145deg, #1b1030, #8832f7 55%, #ffb4ef)"},{title:"VaultForge",tags:"solidity • protocol • development",url:"https://github.com/kianPk/vaultforge",hue:"linear-gradient(135deg, #141820, #3d4a66 40%, #9fd0ff)"},{title:"LoadForge",tags:"rust • systems • development",url:"https://github.com/kianPk/loadforge",hue:"linear-gradient(135deg, #2a1208, #ff8039 50%, #ffe0c8)"},{title:"GateProxy",tags:"go • networking • development",url:"https://github.com/kianPk/gateproxy",hue:"linear-gradient(135deg, #071820, #00b7c2 50%, #c8fbff)"},{title:"Honeypot Deck",tags:"web • security • vue • lab",url:"https://kianpk.github.io/honeypot-deck/",hue:"linear-gradient(135deg, #2a0810, #ff4c41 45%, #ffd0d0)"},{title:"Sentinel Grid",tags:"web • security • visualization",url:"https://kianpk.github.io/sentinel-grid/",hue:"linear-gradient(135deg, #0a1420, #1a2ffb 50%, #9db4ff)"},{title:"Lumen Commerce",tags:"web • design • development • commerce",url:"https://kianpk.github.io/lumen-commerce/",hue:"linear-gradient(135deg, #20180a, #ffd24a 50%, #fff4c8)"},{title:"Netprobe Lab",tags:"concept • web • security lab",url:"https://kianpk.github.io/netprobe-lab/",hue:"linear-gradient(135deg, #120820, #b65fff 50%, #f0d8ff)"},{title:"PulseHub",tags:"go • realtime • development",url:"https://github.com/kianPk/pulsehub",hue:"linear-gradient(135deg, #081410, #a2ffab 50%, #e8ffe9)"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zu="170",ig=0,Xh=1,rg=2,Mp=1,sg=2,Bi=3,Tr=0,On=1,Vi=2,xr=0,zs=1,Yh=2,qh=3,Zh=4,og=5,kr=100,ag=101,lg=102,cg=103,ug=104,hg=200,fg=201,dg=202,pg=203,Uc=204,Nc=205,mg=206,_g=207,gg=208,vg=209,xg=210,Sg=211,Mg=212,yg=213,Eg=214,Oc=0,Fc=1,Bc=2,$s=3,zc=4,kc=5,Hc=6,Vc=7,yp=0,Tg=1,bg=2,$i=0,wg=1,Ag=2,Rg=3,Cg=4,Pg=5,Dg=6,Lg=7,Ep=300,Ks=301,Js=302,Gc=303,Wc=304,dl=306,Xc=1e3,Xi=1001,Yc=1002,Kn=1003,Ig=1004,ha=1005,cn=1006,Dl=1007,mr=1008,Qi=1009,Tp=1010,bp=1011,Wo=1012,$u=1013,ns=1014,ci=1015,Yi=1016,Ku=1017,Ju=1018,js=1020,wp=35902,Ap=1021,Rp=1022,ui=1023,Cp=1024,Pp=1025,ks=1026,Qs=1027,ju=1028,Qu=1029,Dp=1030,eh=1031,th=1033,Wa=33776,Xa=33777,Ya=33778,qa=33779,qc=35840,Zc=35841,$c=35842,Kc=35843,Jc=36196,jc=37492,Qc=37496,eu=37808,tu=37809,nu=37810,iu=37811,ru=37812,su=37813,ou=37814,au=37815,lu=37816,cu=37817,uu=37818,hu=37819,fu=37820,du=37821,Za=36492,pu=36494,mu=36495,Lp=36283,_u=36284,gu=36285,vu=36286,Ug=3200,Ng=3201,Og=0,Fg=1,bi="",ni="srgb",er="srgb-linear",pl="linear",Ct="srgb",us=7680,$h=519,Bg=512,zg=513,kg=514,Ip=515,Hg=516,Vg=517,Gg=518,Wg=519,Kh=35044,Jh="300 es",qi=2e3,al=2001;class to{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=Math.PI/180,xu=180/Math.PI;function Yo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function bn(r,e,t){return Math.max(e,Math.min(t,r))}function Xg(r,e){return(r%e+e)%e}function Il(r,e,t){return(1-t)*r+t*e}function oo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Cn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,t=0){Pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],v=i[0],_=i[3],m=i[6],w=i[1],b=i[4],M=i[7],L=i[2],D=i[5],A=i[8];return s[0]=o*v+a*w+l*L,s[3]=o*_+a*b+l*D,s[6]=o*m+a*M+l*A,s[1]=c*v+h*w+d*L,s[4]=c*_+h*b+d*D,s[7]=c*m+h*M+d*A,s[2]=f*v+p*w+g*L,s[5]=f*_+p*b+g*D,s[8]=f*m+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,g=t*d+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ul=new rt;function Up(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ll(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yg(){const r=ll("canvas");return r.style.display="block",r}const jh={};function xo(r){r in jh||(jh[r]=!0,console.warn(r))}function qg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Zg(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $g(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:er,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(r.r=Hs(r.r),r.g=Hs(r.g),r.b=Hs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bi?pl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Qh=[.64,.33,.3,.6,.15,.06],ef=[.2126,.7152,.0722],tf=[.3127,.329],nf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rf=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[er]:{primaries:Qh,whitePoint:tf,transfer:pl,toXYZ:nf,fromXYZ:rf,luminanceCoefficients:ef,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:Qh,whitePoint:tf,transfer:Ct,toXYZ:nf,fromXYZ:rf,luminanceCoefficients:ef,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}});let hs;class Kg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=ll("canvas")),hs.width=e.width,hs.height=e.height;const n=hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ll("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jg=0;class Np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Nl(i[o].image)):s.push(Nl(i[o]))}else s=Nl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Nl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jg=0;class An extends to{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=Xi,i=Xi,s=cn,o=mr,a=ui,l=Qi,c=An.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Yo(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xc:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xc:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Ep;An.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,i=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],v=l[2],_=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(p+1)/2,L=(m+1)/2,D=(h+f)/4,A=(d+v)/4,I=(g+_)/4;return b>M&&b>L?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=D/n,s=A/n):M>L?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=D/i,s=I/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=A/s,i=I/s),this.set(n,i,s,t),this}let w=Math.sqrt((_-g)*(_-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(_-g)/w,this.y=(d-v)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qg extends to{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new An(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Np(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends Qg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Op extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e0 extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==p||h!==g){let _=1-a;const m=l*f+c*p+h*g+d*v,w=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const L=Math.sqrt(b),D=Math.atan2(L,m*w);_=Math.sin(_*D)/L,a=Math.sin(a*D)/L}const M=a*w;if(l=l*_+f*M,c=c*_+p*M,h=h*_+g*M,d=d*_+v*M,_===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-a*p,e[t+2]=c*g+h*p+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ol=new K,sf=new ss;class qo{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),da.subVectors(this.max,ao),fs.subVectors(e.a,ao),ds.subVectors(e.b,ao),ps.subVectors(e.c,ao),nr.subVectors(ds,fs),ir.subVectors(ps,ds),Cr.subVectors(fs,ps);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Cr.z,Cr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Cr.z,0,-Cr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Cr.y,Cr.x,0];return!Fl(t,fs,ds,ps,da)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,fs,ds,ps,da))?!1:(pa.crossVectors(nr,ir),t=[pa.x,pa.y,pa.z],Fl(t,fs,ds,ps,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new K,new K,new K,new K,new K,new K,new K,new K],di=new K,fa=new qo,fs=new K,ds=new K,ps=new K,nr=new K,ir=new K,Cr=new K,ao=new K,da=new K,pa=new K,Pr=new K;function Fl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Pr.fromArray(r,s);const a=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),h=n.dot(Pr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const t0=new qo,lo=new K,Bl=new K;class nh{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):t0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(lo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Bl)),this.expandByPoint(lo.copy(e.center).sub(Bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new K,zl=new K,ma=new K,rr=new K,kl=new K,_a=new K,Hl=new K;class n0{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zl.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(zl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ma),a=rr.dot(this.direction),l=-rr.dot(ma),c=rr.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(zl).addScaledVector(ma,f),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,i,s){kl.subVectors(t,e),_a.subVectors(n,e),Hl.crossVectors(kl,_a);let o=this.direction.dot(Hl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(_a.crossVectors(rr,_a));if(l<0)return null;const c=a*this.direction.dot(kl.cross(rr));if(c<0||l+c>o)return null;const h=-a*rr.dot(Hl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,n,i,s,o,a,l,c,h,d,f,p,g,v,_){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,d,f,p,g,v,_)}set(e,t,n,i,s,o,a,l,c,h,d,f,p,g,v,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=v,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ms.setFromMatrixColumn(e,0).length(),s=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=c*h,v=c*d;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=c*h,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i0,e,r0)}lookAt(e,t,n){const i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),sr.crossVectors(n,zn),sr.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),sr.crossVectors(n,zn)),sr.normalize(),ga.crossVectors(zn,sr),i[0]=sr.x,i[4]=ga.x,i[8]=zn.x,i[1]=sr.y,i[5]=ga.y,i[9]=zn.y,i[2]=sr.z,i[6]=ga.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],v=n[6],_=n[10],m=n[14],w=n[3],b=n[7],M=n[11],L=n[15],D=i[0],A=i[4],I=i[8],T=i[12],S=i[1],U=i[5],z=i[9],V=i[13],Z=i[2],Q=i[6],q=i[10],X=i[14],G=i[3],le=i[7],N=i[11],ye=i[15];return s[0]=o*D+a*S+l*Z+c*G,s[4]=o*A+a*U+l*Q+c*le,s[8]=o*I+a*z+l*q+c*N,s[12]=o*T+a*V+l*X+c*ye,s[1]=h*D+d*S+f*Z+p*G,s[5]=h*A+d*U+f*Q+p*le,s[9]=h*I+d*z+f*q+p*N,s[13]=h*T+d*V+f*X+p*ye,s[2]=g*D+v*S+_*Z+m*G,s[6]=g*A+v*U+_*Q+m*le,s[10]=g*I+v*z+_*q+m*N,s[14]=g*T+v*V+_*X+m*ye,s[3]=w*D+b*S+M*Z+L*G,s[7]=w*A+b*U+M*Q+L*le,s[11]=w*I+b*z+M*q+L*N,s[15]=w*T+b*V+M*X+L*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],v=e[7],_=e[11],m=e[15];return g*(+s*l*d-i*c*d-s*a*f+n*c*f+i*a*p-n*l*p)+v*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*h-s*l*h)+_*(+t*c*d-t*a*p-s*o*d+n*o*p+s*a*h-n*c*h)+m*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],v=e[13],_=e[14],m=e[15],w=d*_*c-v*f*c+v*l*p-a*_*p-d*l*m+a*f*m,b=g*f*c-h*_*c-g*l*p+o*_*p+h*l*m-o*f*m,M=h*v*c-g*d*c+g*a*p-o*v*p-h*a*m+o*d*m,L=g*d*l-h*v*l-g*a*f+o*v*f+h*a*_-o*d*_,D=t*w+n*b+i*M+s*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=w*A,e[1]=(v*f*s-d*_*s-v*i*p+n*_*p+d*i*m-n*f*m)*A,e[2]=(a*_*s-v*l*s+v*i*c-n*_*c-a*i*m+n*l*m)*A,e[3]=(d*l*s-a*f*s-d*i*c+n*f*c+a*i*p-n*l*p)*A,e[4]=b*A,e[5]=(h*_*s-g*f*s+g*i*p-t*_*p-h*i*m+t*f*m)*A,e[6]=(g*l*s-o*_*s-g*i*c+t*_*c+o*i*m-t*l*m)*A,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*p+t*l*p)*A,e[8]=M*A,e[9]=(g*d*s-h*v*s-g*n*p+t*v*p+h*n*m-t*d*m)*A,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*m+t*a*m)*A,e[11]=(h*a*s-o*d*s-h*n*c+t*d*c+o*n*p-t*a*p)*A,e[12]=L*A,e[13]=(h*v*i-g*d*i+g*n*f-t*v*f-h*n*_+t*d*_)*A,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*_-t*a*_)*A,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,g=s*d,v=o*h,_=o*d,m=a*d,w=l*c,b=l*h,M=l*d,L=n.x,D=n.y,A=n.z;return i[0]=(1-(v+m))*L,i[1]=(p+M)*L,i[2]=(g-b)*L,i[3]=0,i[4]=(p-M)*D,i[5]=(1-(f+m))*D,i[6]=(_+w)*D,i[7]=0,i[8]=(g+b)*A,i[9]=(_-w)*A,i[10]=(1-(f+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ms.set(i[0],i[1],i[2]).length();const o=ms.set(i[4],i[5],i[6]).length(),a=ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);const c=1/s,h=1/o,d=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,t.setFromRotationMatrix(pi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=qi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(a===qi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===al)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=qi){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(o-s),f=(t+e)*c,p=(n+i)*h;let g,v;if(a===qi)g=(o+s)*d,v=-2*d;else if(a===al)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ms=new K,pi=new Jt,i0=new K(0,0,0),r0=new K(1,1,1),sr=new K,ga=new K,zn=new K,of=new Jt,af=new ss;class Pi{constructor(e=0,t=0,n=0,i=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s0=0;const lf=new K,_s=new ss,Ui=new Jt,va=new K,co=new K,o0=new K,a0=new ss,cf=new K(1,0,0),uf=new K(0,1,0),hf=new K(0,0,1),ff={type:"added"},l0={type:"removed"},gs={type:"childadded",child:null},Vl={type:"childremoved",child:null};class Jn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new K,t=new Pi,n=new ss,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new rt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(cf,e)}rotateY(e){return this.rotateOnAxis(uf,e)}rotateZ(e){return this.rotateOnAxis(hf,e)}translateOnAxis(e,t){return lf.copy(e).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cf,e)}translateY(e){return this.translateOnAxis(uf,e)}translateZ(e){return this.translateOnAxis(hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?va.copy(e):va.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(co,va,this.up):Ui.lookAt(va,co,this.up),this.quaternion.setFromRotationMatrix(Ui),i&&(Ui.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(Ui),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ff),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l0),Vl.child=e,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ff),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,a0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Jn.DEFAULT_UP=new K(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new K,Ni=new K,Gl=new K,Oi=new K,vs=new K,xs=new K,df=new K,Wl=new K,Xl=new K,Yl=new K,ql=new zt,Zl=new zt,$l=new zt;class xi{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),Ni.subVectors(n,t),Gl.subVectors(e,t);const o=mi.dot(mi),a=mi.dot(Ni),l=mi.dot(Gl),c=Ni.dot(Ni),h=Ni.dot(Gl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return ql.setScalar(0),Zl.setScalar(0),$l.setScalar(0),ql.fromBufferAttribute(e,t),Zl.fromBufferAttribute(e,n),$l.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ql,s.x),o.addScaledVector(Zl,s.y),o.addScaledVector($l,s.z),o}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Ni.subVectors(e,t),mi.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),mi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;vs.subVectors(i,n),xs.subVectors(s,n),Wl.subVectors(e,n);const l=vs.dot(Wl),c=xs.dot(Wl);if(l<=0&&c<=0)return t.copy(n);Xl.subVectors(e,i);const h=vs.dot(Xl),d=xs.dot(Xl);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(vs,o);Yl.subVectors(e,s);const p=vs.dot(Yl),g=xs.dot(Yl);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(xs,a);const _=h*g-p*d;if(_<=0&&d-h>=0&&p-g>=0)return df.subVectors(s,i),a=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(df,a);const m=1/(_+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(vs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Kl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=Xg(e,1),t=bn(t,0,1),n=bn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Kl(o,s,e+1/3),this.g=Kl(o,s,e),this.b=Kl(o,s,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=ni){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const n=Bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return St.fromWorkingColorSpace(fn.copy(this),e),Math.round(bn(fn.r*255,0,255))*65536+Math.round(bn(fn.g*255,0,255))*256+Math.round(bn(fn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ni){St.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(xa);const n=Il(or.h,xa.h,t),i=Il(or.s,xa.s,t),s=Il(or.l,xa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Mt;Mt.NAMES=Bp;let c0=0;class ml extends to{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Yo(),this.name="",this.blending=zs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Nc,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uc&&(n.blendSrc=this.blendSrc),this.blendDst!==Nc&&(n.blendDst=this.blendDst),this.blendEquation!==kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zp extends ml{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gi=u0();function u0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function h0(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=bn(r,-65504,65504),Gi.floatView[0]=r;const e=Gi.uint32View[0],t=e>>23&511;return Gi.baseTable[t]+((e&8388607)>>Gi.shiftTable[t])}function f0(r){const e=r>>10;return Gi.uint32View[0]=Gi.mantissaTable[Gi.offsetTable[e]+(r&1023)]+Gi.exponentTable[e],Gi.floatView[0]}const pf={toHalfFloat:h0,fromHalfFloat:f0},Zt=new K,Sa=new Pt;class fi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kh,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kh&&(e.usage=this.usage),e}}class kp extends fi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hp extends fi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jr extends fi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d0=0;const ei=new Jt,Jl=new Jn,Ss=new K,kn=new qo,uo=new qo,rn=new K;class wr extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?Hp:kp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return Jl.lookAt(e),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jr(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(kn.min,uo.min),kn.expandByPoint(rn),rn.addVectors(kn.max,uo.max),kn.expandByPoint(rn)):(kn.expandByPoint(uo.min),kn.expandByPoint(uo.max))}kn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),rn.add(Ss)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new K,l[I]=new K;const c=new K,h=new K,d=new K,f=new Pt,p=new Pt,g=new Pt,v=new K,_=new K;function m(I,T,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,S),f.fromBufferAttribute(s,I),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),_.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[I].add(v),a[T].add(v),a[S].add(v),l[I].add(_),l[T].add(_),l[S].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,T=w.length;I<T;++I){const S=w[I],U=S.start,z=S.count;for(let V=U,Z=U+z;V<Z;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new K,M=new K,L=new K,D=new K;function A(I){L.fromBufferAttribute(i,I),D.copy(L);const T=a[I];b.copy(T),b.sub(L.multiplyScalar(L.dot(T))).normalize(),M.crossVectors(D,T);const U=M.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,U)}for(let I=0,T=w.length;I<T;++I){const S=w[I],U=S.start,z=S.count;for(let V=U,Z=U+z;V<Z;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new K,s=new K,o=new K,a=new K,l=new K,c=new K,h=new K,d=new K;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new fi(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mf=new Jt,Dr=new n0,Ma=new nh,_f=new K,ya=new K,Ea=new K,Ta=new K,jl=new K,ba=new K,gf=new K,wa=new K;class Si extends Jn{constructor(e=new wr,t=new zp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ba.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(jl.fromBufferAttribute(d,e),o?ba.addScaledVector(jl,h):ba.addScaledVector(jl.sub(t),h))}t.add(ba)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(Ma.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Ma,_f)===null||Dr.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(mf.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(mf),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const _=f[g],m=o[_.materialIndex],w=Math.max(_.start,p.start),b=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let M=w,L=b;M<L;M+=3){const D=a.getX(M),A=a.getX(M+1),I=a.getX(M+2);i=Aa(this,m,e,n,c,h,d,D,A,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=g,m=v;_<m;_+=3){const w=a.getX(_),b=a.getX(_+1),M=a.getX(_+2);i=Aa(this,o,e,n,c,h,d,w,b,M),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const _=f[g],m=o[_.materialIndex],w=Math.max(_.start,p.start),b=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let M=w,L=b;M<L;M+=3){const D=M,A=M+1,I=M+2;i=Aa(this,m,e,n,c,h,d,D,A,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=g,m=v;_<m;_+=3){const w=_,b=_+1,M=_+2;i=Aa(this,o,e,n,c,h,d,w,b,M),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function p0(r,e,t,n,i,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Tr,a),l===null)return null;wa.copy(a),wa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:r}}function Aa(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ya),r.getVertexPosition(l,Ea),r.getVertexPosition(c,Ta);const h=p0(r,e,t,n,ya,Ea,Ta,gf);if(h){const d=new K;xi.getBarycoord(gf,ya,Ea,Ta,d),i&&(h.uv=xi.getInterpolatedAttribute(i,a,l,c,d,new Pt)),s&&(h.uv1=xi.getInterpolatedAttribute(s,a,l,c,d,new Pt)),o&&(h.normal=xi.getInterpolatedAttribute(o,a,l,c,d,new K),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new K,materialIndex:0};xi.getNormal(ya,Ea,Ta,f.normal),h.face=f,h.barycoord=d}return h}class Zo extends wr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new jr(c,3)),this.setAttribute("normal",new jr(h,3)),this.setAttribute("uv",new jr(d,2));function g(v,_,m,w,b,M,L,D,A,I,T){const S=M/A,U=L/I,z=M/2,V=L/2,Z=D/2,Q=A+1,q=I+1;let X=0,G=0;const le=new K;for(let N=0;N<q;N++){const ye=N*U-V;for(let Fe=0;Fe<Q;Fe++){const Xe=Fe*S-z;le[v]=Xe*w,le[_]=ye*b,le[m]=Z,c.push(le.x,le.y,le.z),le[v]=0,le[_]=0,le[m]=D>0?1:-1,h.push(le.x,le.y,le.z),d.push(Fe/A),d.push(1-N/I),X+=1}}for(let N=0;N<I;N++)for(let ye=0;ye<A;ye++){const Fe=f+ye+Q*N,Xe=f+ye+Q*(N+1),te=f+(ye+1)+Q*(N+1),ce=f+(ye+1)+Q*N;l.push(Fe,Xe,ce),l.push(Xe,te,ce),G+=6}a.addGroup(p,G,T),p+=G,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const n=eo(r[t]);for(const i in n)e[i]=n[i]}return e}function m0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const _0={clone:eo,merge:Mn};var g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends ml{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gp extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new K,vf=new Pt,xf=new Pt;class si extends Gp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xu*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,vf,xf),t.subVectors(xf,vf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ll*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,ys=1;class x0 extends Jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new si(Ms,ys,e,t);i.layers=this.layers,this.add(i);const s=new si(Ms,ys,e,t);s.layers=this.layers,this.add(s);const o=new si(Ms,ys,e,t);o.layers=this.layers,this.add(o);const a=new si(Ms,ys,e,t);a.layers=this.layers,this.add(a);const l=new si(Ms,ys,e,t);l.layers=this.layers,this.add(l);const c=new si(Ms,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===al)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wp extends An{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S0 extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zo(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:xr});s.uniforms.tEquirect.value=t;const o=new Si(i,s),a=t.minFilter;return t.minFilter===mr&&(t.minFilter=cn),new x0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ql=new K,M0=new K,y0=new rt;class Br{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ql.subVectors(n,t).cross(M0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ql),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||y0.getNormalMatrix(e),i=this.coplanarPoint(Ql).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new nh,Ra=new K;class Xp{constructor(e=new Br,t=new Br,n=new Br,i=new Br,s=new Br,o=new Br){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],p=i[8],g=i[9],v=i[10],_=i[11],m=i[12],w=i[13],b=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,_-p,M-m).normalize(),n[1].setComponents(l+s,f+c,_+p,M+m).normalize(),n[2].setComponents(l+o,f+h,_+g,M+w).normalize(),n[3].setComponents(l-o,f-h,_-g,M-w).normalize(),n[4].setComponents(l-a,f-d,_-v,M-b).normalize(),t===qi)n[5].setComponents(l+a,f+d,_+v,M+b).normalize();else if(t===al)n[5].setComponents(a,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ra.x=i.normal.x>0?e.max.x:e.min.x,Ra.y=i.normal.y>0?e.max.y:e.min.y,Ra.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function E0(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class $o extends wr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,f=t/l,p=[],g=[],v=[],_=[];for(let m=0;m<h;m++){const w=m*f-o;for(let b=0;b<c;b++){const M=b*d-s;g.push(M,-w,0),v.push(0,0,1),_.push(b/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const b=w+c*m,M=w+c*(m+1),L=w+1+c*(m+1),D=w+1+c*m;p.push(b,M,D),p.push(M,L,D)}this.setIndex(p),this.setAttribute("position",new jr(g,3)),this.setAttribute("normal",new jr(v,3)),this.setAttribute("uv",new jr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.widthSegments,e.heightSegments)}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
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
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,q0=`#define PI 3.141592653589793
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
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$0=`vec3 transformedNormal = objectNormal;
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
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hv=`#ifdef USE_GRADIENTMAP
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
}`,fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mv=`uniform bool receiveShadow;
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
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mv=`PhysicalMaterial material;
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
#endif`,yv=`struct PhysicalMaterial {
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
}`,Ev=`
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Av=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iv=`#if defined( USE_POINTS_UV )
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
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
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
#endif`,qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lx=`float getShadowMask() {
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
}`,cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gx=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
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
}`,Px=`#if DEPTH_PACKING == 3200
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
}`,Dx=`#define DISTANCE
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
}`,Lx=`#define DISTANCE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Fx=`#include <common>
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
}`,Bx=`uniform vec3 diffuse;
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
}`,zx=`#define LAMBERT
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
}`,kx=`#define LAMBERT
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
}`,Hx=`#define MATCAP
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
}`,Vx=`#define MATCAP
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
}`,Gx=`#define NORMAL
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define PHONG
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
}`,Yx=`#define PHONG
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
}`,qx=`#define STANDARD
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
}`,Zx=`#define STANDARD
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
}`,$x=`#define TOON
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
}`,Kx=`#define TOON
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
}`,Jx=`uniform float size;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,eS=`uniform vec3 color;
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
}`,tS=`uniform float rotation;
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
}`,nS=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:T0,alphahash_pars_fragment:b0,alphamap_fragment:w0,alphamap_pars_fragment:A0,alphatest_fragment:R0,alphatest_pars_fragment:C0,aomap_fragment:P0,aomap_pars_fragment:D0,batching_pars_vertex:L0,batching_vertex:I0,begin_vertex:U0,beginnormal_vertex:N0,bsdfs:O0,iridescence_fragment:F0,bumpmap_pars_fragment:B0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:V0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:Y0,common:q0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:$0,displacementmap_pars_vertex:K0,displacementmap_vertex:J0,emissivemap_fragment:j0,emissivemap_pars_fragment:Q0,colorspace_fragment:ev,colorspace_pars_fragment:tv,envmap_fragment:nv,envmap_common_pars_fragment:iv,envmap_pars_fragment:rv,envmap_pars_vertex:sv,envmap_physical_pars_fragment:_v,envmap_vertex:ov,fog_vertex:av,fog_pars_vertex:lv,fog_fragment:cv,fog_pars_fragment:uv,gradientmap_pars_fragment:hv,lightmap_pars_fragment:fv,lights_lambert_fragment:dv,lights_lambert_pars_fragment:pv,lights_pars_begin:mv,lights_toon_fragment:gv,lights_toon_pars_fragment:vv,lights_phong_fragment:xv,lights_phong_pars_fragment:Sv,lights_physical_fragment:Mv,lights_physical_pars_fragment:yv,lights_fragment_begin:Ev,lights_fragment_maps:Tv,lights_fragment_end:bv,logdepthbuf_fragment:wv,logdepthbuf_pars_fragment:Av,logdepthbuf_pars_vertex:Rv,logdepthbuf_vertex:Cv,map_fragment:Pv,map_pars_fragment:Dv,map_particle_fragment:Lv,map_particle_pars_fragment:Iv,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:Ov,morphcolor_vertex:Fv,morphnormal_vertex:Bv,morphtarget_pars_vertex:zv,morphtarget_vertex:kv,normal_fragment_begin:Hv,normal_fragment_maps:Vv,normal_pars_fragment:Gv,normal_pars_vertex:Wv,normal_vertex:Xv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:qv,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:Kv,opaque_fragment:Jv,packing:jv,premultiplied_alpha_fragment:Qv,project_vertex:ex,dithering_fragment:tx,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:ox,shadowmap_vertex:ax,shadowmask_pars_fragment:lx,skinbase_vertex:cx,skinning_pars_vertex:ux,skinning_vertex:hx,skinnormal_vertex:fx,specularmap_fragment:dx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:_x,transmission_fragment:gx,transmission_pars_fragment:vx,uv_pars_fragment:xx,uv_pars_vertex:Sx,uv_vertex:Mx,worldpos_vertex:yx,background_vert:Ex,background_frag:Tx,backgroundCube_vert:bx,backgroundCube_frag:wx,cube_vert:Ax,cube_frag:Rx,depth_vert:Cx,depth_frag:Px,distanceRGBA_vert:Dx,distanceRGBA_frag:Lx,equirect_vert:Ix,equirect_frag:Ux,linedashed_vert:Nx,linedashed_frag:Ox,meshbasic_vert:Fx,meshbasic_frag:Bx,meshlambert_vert:zx,meshlambert_frag:kx,meshmatcap_vert:Hx,meshmatcap_frag:Vx,meshnormal_vert:Gx,meshnormal_frag:Wx,meshphong_vert:Xx,meshphong_frag:Yx,meshphysical_vert:qx,meshphysical_frag:Zx,meshtoon_vert:$x,meshtoon_frag:Kx,points_vert:Jx,points_frag:jx,shadow_vert:Qx,shadow_frag:eS,sprite_vert:tS,sprite_frag:nS},Le={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ei={basic:{uniforms:Mn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Mn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Mn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Mn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Mn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Mn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Mn([Le.points,Le.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Mn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Mn([Le.common,Le.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Mn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Mn([Le.sprite,Le.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Mn([Le.common,Le.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Mn([Le.lights,Le.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Ei.physical={uniforms:Mn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Ca={r:0,b:0,g:0},Ir=new Pi,iS=new Jt;function rS(r,e,t,n,i,s,o){const a=new Mt(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function v(w){let b=!1;const M=g(w);M===null?m(a,l):M&&M.isColor&&(m(M,1),b=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(w,b){const M=g(b);M&&(M.isCubeTexture||M.mapping===dl)?(h===void 0&&(h=new Si(new Zo(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:eo(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ir.copy(b.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(iS.makeRotationFromEuler(Ir)),h.material.toneMapped=St.getTransfer(M.colorSpace)!==Ct,(d!==M||f!==M.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Si(new $o(2,2),new Di({name:"BackgroundMaterial",uniforms:eo(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=St.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,b){w.getRGB(Ca,Vp(r)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:v,addToRenderList:_}}function sS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,U,z,V,Z){let Q=!1;const q=d(V,z,U);s!==q&&(s=q,c(s.object)),Q=p(S,V,z,Z),Q&&g(S,V,z,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(S,U,z,V),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function d(S,U,z){const V=z.wireframe===!0;let Z=n[S.id];Z===void 0&&(Z={},n[S.id]=Z);let Q=Z[U.id];Q===void 0&&(Q={},Z[U.id]=Q);let q=Q[V];return q===void 0&&(q=f(l()),Q[V]=q),q}function f(S){const U=[],z=[],V=[];for(let Z=0;Z<t;Z++)U[Z]=0,z[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,U,z,V){const Z=s.attributes,Q=U.attributes;let q=0;const X=z.getAttributes();for(const G in X)if(X[G].location>=0){const N=Z[G];let ye=Q[G];if(ye===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),N===void 0||N.attribute!==ye||ye&&N.data!==ye.data)return!0;q++}return s.attributesNum!==q||s.index!==V}function g(S,U,z,V){const Z={},Q=U.attributes;let q=0;const X=z.getAttributes();for(const G in X)if(X[G].location>=0){let N=Q[G];N===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(N=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(N=S.instanceColor));const ye={};ye.attribute=N,N&&N.data&&(ye.data=N.data),Z[G]=ye,q++}s.attributes=Z,s.attributesNum=q,s.index=V}function v(){const S=s.newAttributes;for(let U=0,z=S.length;U<z;U++)S[U]=0}function _(S){m(S,0)}function m(S,U){const z=s.newAttributes,V=s.enabledAttributes,Z=s.attributeDivisors;z[S]=1,V[S]===0&&(r.enableVertexAttribArray(S),V[S]=1),Z[S]!==U&&(r.vertexAttribDivisor(S,U),Z[S]=U)}function w(){const S=s.newAttributes,U=s.enabledAttributes;for(let z=0,V=U.length;z<V;z++)U[z]!==S[z]&&(r.disableVertexAttribArray(z),U[z]=0)}function b(S,U,z,V,Z,Q,q){q===!0?r.vertexAttribIPointer(S,U,z,Z,Q):r.vertexAttribPointer(S,U,z,V,Z,Q)}function M(S,U,z,V){v();const Z=V.attributes,Q=z.getAttributes(),q=U.defaultAttributeValues;for(const X in Q){const G=Q[X];if(G.location>=0){let le=Z[X];if(le===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const N=le.normalized,ye=le.itemSize,Fe=e.get(le);if(Fe===void 0)continue;const Xe=Fe.buffer,te=Fe.type,ce=Fe.bytesPerElement,he=te===r.INT||te===r.UNSIGNED_INT||le.gpuType===$u;if(le.isInterleavedBufferAttribute){const fe=le.data,Pe=fe.stride,Be=le.offset;if(fe.isInstancedInterleavedBuffer){for(let Ye=0;Ye<G.locationSize;Ye++)m(G.location+Ye,fe.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ye=0;Ye<G.locationSize;Ye++)_(G.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let Ye=0;Ye<G.locationSize;Ye++)b(G.location+Ye,ye/G.locationSize,te,N,Pe*ce,(Be+ye/G.locationSize*Ye)*ce,he)}else{if(le.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe,le.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let fe=0;fe<G.locationSize;fe++)_(G.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let fe=0;fe<G.locationSize;fe++)b(G.location+fe,ye/G.locationSize,te,N,ye*ce,ye/G.locationSize*fe*ce,he)}}else if(q!==void 0){const N=q[X];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(G.location,N);break;case 3:r.vertexAttrib3fv(G.location,N);break;case 4:r.vertexAttrib4fv(G.location,N);break;default:r.vertexAttrib1fv(G.location,N)}}}}w()}function L(){I();for(const S in n){const U=n[S];for(const z in U){const V=U[z];for(const Z in V)h(V[Z].object),delete V[Z];delete U[z]}delete n[S]}}function D(S){if(n[S.id]===void 0)return;const U=n[S.id];for(const z in U){const V=U[z];for(const Z in V)h(V[Z].object),delete V[Z];delete U[z]}delete n[S.id]}function A(S){for(const U in n){const z=n[U];if(z[S.id]===void 0)continue;const V=z[S.id];for(const Z in V)h(V[Z].object),delete V[Z];delete z[S.id]}}function I(){T(),o=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:_,disableUnusedAttributes:w}}function oS(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==ui&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Qi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!I)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:L,maxSamples:D}}function lS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Br,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,v=d.clipIntersection,_=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!_)s?h(null):c();else{const w=s?0:n,b=w*4;let M=m.clippingState||null;l.value=M,M=h(g,f,b,p);for(let L=0;L!==b;++L)M[L]=t[L];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){const v=d!==null?d.length:0;let _=null;if(v!==0){if(_=l.value,g!==!0||_===null){const m=p+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<m)&&(_=new Float32Array(m));for(let b=0,M=p;b!==v;++b,M+=4)o.copy(d[b]).applyMatrix4(w,a),o.normal.toArray(_,M),_[M+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function cS(r){let e=new WeakMap;function t(o,a){return a===Gc?o.mapping=Ks:a===Wc&&(o.mapping=Js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gc||a===Wc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new S0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class uS extends Gp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,Sf=[.125,.215,.35,.446,.526,.582],Hr=20,ec=new uS,Mf=new Mt;let tc=null,nc=0,ic=0,rc=!1;const zr=(1+Math.sqrt(5))/2,Es=1/zr,yf=[new K(-zr,Es,0),new K(zr,Es,0),new K(-Es,0,zr),new K(Es,0,zr),new K(0,zr,-Es),new K(0,zr,Es),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=rc,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Yi,format:ui,colorSpace:er,depthBuffer:!1},i=Tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hS(s)),this._blurMaterial=fS(s,e,t)}return i}_compileMaterial(e){const t=new Si(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,n,i){const a=new si(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Mf),h.toneMapping=$i,h.autoClear=!1;const p=new zp({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),g=new Si(new Zo,p);let v=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,v=!0):(p.color.copy(Mf),v=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const b=this._cubeSize;Pa(i,w*b,m>2?b:0,b,b),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ks||e.mapping===Js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ec)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yf[(i-s-1)%yf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Si(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hr-1),v=s/g,_=isFinite(s)?1+Math.floor(h*v):Hr;_>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Hr}`);const m=[];let w=0;for(let A=0;A<Hr;++A){const I=A/v,T=Math.exp(-I*I/2);m.push(T),A===0?w+=T:A<_&&(w+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/w;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const M=this._sizeLods[i],L=3*M*(i>b-Ps?i-b+Ps:0),D=4*(this._cubeSize-M);Pa(t,L,D,3*M,2*M),l.setRenderTarget(t),l.render(d,ec)}}function hS(r){const e=[],t=[],n=[];let i=r;const s=r-Ps+1+Sf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ps?l=Sf[o-r+Ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,_=2,m=1,w=new Float32Array(v*g*p),b=new Float32Array(_*g*p),M=new Float32Array(m*g*p);for(let D=0;D<p;D++){const A=D%3*2/3-1,I=D>2?0:-1,T=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];w.set(T,v*g*D),b.set(f,_*g*D);const S=[D,D,D,D,D,D];M.set(S,m*g*D)}const L=new wr;L.setAttribute("position",new fi(w,v)),L.setAttribute("uv",new fi(b,_)),L.setAttribute("faceIndex",new fi(M,m)),e.push(L),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tf(r,e,t){const n=new is(r,e,t);return n.texture.mapping=dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function fS(r,e,t){const n=new Float32Array(Hr),i=new K(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ih(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function bf(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function wf(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}function dS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gc||l===Wc,h=l===Ks||l===Js;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ef(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Ef(r)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&xo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mS(r,e,t,n){const i={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let _=0,m=v.length;_<m;_++)e.remove(v[_])}f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let _=0,m=v.length;_<m;_++)e.update(v[_],r.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let b=0,M=w.length;b<M;b+=3){const L=w[b+0],D=w[b+1],A=w[b+2];f.push(L,D,D,A,A,L)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,M=w.length/3-1;b<M;b+=3){const L=b+0,D=b+1,A=b+2;f.push(L,D,D,A,A,L)}}else return;const _=new(Up(f)?Hp:kp)(f,1);_.version=v;const m=s.get(d);m&&e.remove(m),s.set(d,_)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function _S(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){r.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];t.update(_,n,1)}function d(f,p,g,v){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],v[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,g);let m=0;for(let w=0;w<g;w++)m+=p[w]*v[w];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function gS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vS(r,e,t){const n=new WeakMap,i=new zt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),_===!0&&(M=3);let L=a.attributes.position.count*M,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*D*4*d),I=new Op(A,L,D,d);I.type=ci,I.needsUpdate=!0;const T=M*4;for(let U=0;U<d;U++){const z=m[U],V=w[U],Z=b[U],Q=L*D*4*U;for(let q=0;q<z.count;q++){const X=q*T;g===!0&&(i.fromBufferAttribute(z,q),A[Q+X+0]=i.x,A[Q+X+1]=i.y,A[Q+X+2]=i.z,A[Q+X+3]=0),v===!0&&(i.fromBufferAttribute(V,q),A[Q+X+4]=i.x,A[Q+X+5]=i.y,A[Q+X+6]=i.z,A[Q+X+7]=0),_===!0&&(i.fromBufferAttribute(Z,q),A[Q+X+8]=i.x,A[Q+X+9]=i.y,A[Q+X+10]=i.z,A[Q+X+11]=Z.itemSize===4?i.w:1)}}f={count:d,texture:I,size:new Pt(L,D)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function xS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class qp extends An{constructor(e,t,n,i,s,o,a,l,c,h=ks){if(h!==ks&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ks&&(n=ns),n===void 0&&h===Qs&&(n=js),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kn,this.minFilter=l!==void 0?l:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zp=new An,Af=new qp(1,1),$p=new Op,Kp=new e0,Jp=new Wp,Rf=[],Cf=[],Pf=new Float32Array(16),Df=new Float32Array(9),Lf=new Float32Array(4);function no(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Rf[i];if(s===void 0&&(s=new Float32Array(i),Rf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _l(r,e){let t=Cf[e];t===void 0&&(t=new Int32Array(e),Cf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function SS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function MS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function yS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function TS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Lf.set(n),r.uniformMatrix2fv(this.addr,!1,Lf),tn(t,n)}}function bS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Df.set(n),r.uniformMatrix3fv(this.addr,!1,Df),tn(t,n)}}function wS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Pf.set(n),r.uniformMatrix4fv(this.addr,!1,Pf),tn(t,n)}}function AS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function RS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function CS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function PS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function DS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function LS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function IS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function US(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function NS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Af.compareFunction=Ip,s=Af):s=Zp,t.setTexture2D(e||s,i)}function OS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kp,i)}function FS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jp,i)}function BS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$p,i)}function zS(r){switch(r){case 5126:return SS;case 35664:return MS;case 35665:return yS;case 35666:return ES;case 35674:return TS;case 35675:return bS;case 35676:return wS;case 5124:case 35670:return AS;case 35667:case 35671:return RS;case 35668:case 35672:return CS;case 35669:case 35673:return PS;case 5125:return DS;case 36294:return LS;case 36295:return IS;case 36296:return US;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return BS}}function kS(r,e){r.uniform1fv(this.addr,e)}function HS(r,e){const t=no(e,this.size,2);r.uniform2fv(this.addr,t)}function VS(r,e){const t=no(e,this.size,3);r.uniform3fv(this.addr,t)}function GS(r,e){const t=no(e,this.size,4);r.uniform4fv(this.addr,t)}function WS(r,e){const t=no(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function XS(r,e){const t=no(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function YS(r,e){const t=no(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function qS(r,e){r.uniform1iv(this.addr,e)}function ZS(r,e){r.uniform2iv(this.addr,e)}function $S(r,e){r.uniform3iv(this.addr,e)}function KS(r,e){r.uniform4iv(this.addr,e)}function JS(r,e){r.uniform1uiv(this.addr,e)}function jS(r,e){r.uniform2uiv(this.addr,e)}function QS(r,e){r.uniform3uiv(this.addr,e)}function eM(r,e){r.uniform4uiv(this.addr,e)}function tM(r,e,t){const n=this.cache,i=e.length,s=_l(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Zp,s[o])}function nM(r,e,t){const n=this.cache,i=e.length,s=_l(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Kp,s[o])}function iM(r,e,t){const n=this.cache,i=e.length,s=_l(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jp,s[o])}function rM(r,e,t){const n=this.cache,i=e.length,s=_l(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||$p,s[o])}function sM(r){switch(r){case 5126:return kS;case 35664:return HS;case 35665:return VS;case 35666:return GS;case 35674:return WS;case 35675:return XS;case 35676:return YS;case 5124:case 35670:return qS;case 35667:case 35671:return ZS;case 35668:case 35672:return $S;case 35669:case 35673:return KS;case 5125:return JS;case 36294:return jS;case 36295:return QS;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return rM}}class oM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zS(t.type)}}class aM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sM(t.type)}}class lM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function If(r,e){r.seq.push(e),r.map[e.id]=e}function cM(r,e,t){const n=r.name,i=n.length;for(sc.lastIndex=0;;){const s=sc.exec(n),o=sc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){If(t,c===void 0?new oM(a,r,e):new aM(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new lM(a),If(t,d)),t=d}}}class $a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);cM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Uf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const uM=37297;let hM=0;function fM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Nf=new rt;function dM(r){St._getMatrix(Nf,St.workingColorSpace,r);const e=`mat3( ${Nf.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(r)){case pl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Of(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+fM(r.getShaderSource(e),o)}else return i}function pM(r,e){const t=dM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mM(r,e){let t;switch(e){case wg:t="Linear";break;case Ag:t="Reinhard";break;case Rg:t="Cineon";break;case Cg:t="ACESFilmic";break;case Dg:t="AgX";break;case Lg:t="Neutral";break;case Pg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Da=new K;function _M(){St.getLuminanceCoefficients(Da);const r=Da.x.toFixed(4),e=Da.y.toFixed(4),t=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function vM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function So(r){return r!==""}function Ff(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(r){return r.replace(SM,yM)}const MM=new Map;function yM(r,e){let t=ot[e];if(t===void 0){const n=MM.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Su(t)}const EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(r){return r.replace(EM,TM)}function TM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===sg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ks:case Js:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function RM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case yp:e="ENVMAP_BLENDING_MULTIPLY";break;case Tg:e="ENVMAP_BLENDING_MIX";break;case bg:e="ENVMAP_BLENDING_ADD";break}return e}function CM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function PM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bM(t),c=wM(t),h=AM(t),d=RM(t),f=CM(t),p=gM(t),g=vM(s),v=i.createProgram();let _,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),m.length>0&&(m+=`
`)):(_=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),m=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?ot.tonemapping_pars_fragment:"",t.toneMapping!==$i?mM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,pM("linearToOutputTexel",t.outputColorSpace),_M(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),o=Su(o),o=Ff(o,t),o=Bf(o,t),a=Su(a),a=Ff(a,t),a=Bf(a,t),o=zf(o),a=zf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=w+_+o,M=w+m+a,L=Uf(i,i.VERTEX_SHADER,b),D=Uf(i,i.FRAGMENT_SHADER,M);i.attachShader(v,L),i.attachShader(v,D),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(U){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(v).trim(),V=i.getShaderInfoLog(L).trim(),Z=i.getShaderInfoLog(D).trim();let Q=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,L,D);else{const X=Of(i,L,"vertex"),G=Of(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+X+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||Z==="")&&(q=!1);q&&(U.diagnostics={runnable:Q,programLog:z,vertexShader:{log:V,prefix:_},fragmentShader:{log:Z,prefix:m}})}i.deleteShader(L),i.deleteShader(D),I=new $a(i,v),T=xM(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,uM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=D,this}let DM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new IM(e),t.set(e,n)),n}}class IM{constructor(e){this.id=DM++,this.code=e,this.usedTimes=0}}function UM(r,e,t,n,i,s,o){const a=new Fp,l=new LM,c=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,S,U,z,V){const Z=z.fog,Q=V.geometry,q=T.isMeshStandardMaterial?z.environment:null,X=(T.isMeshStandardMaterial?t:e).get(T.envMap||q),G=X&&X.mapping===dl?X.image.height:null,le=g[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const N=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ye=N!==void 0?N.length:0;let Fe=0;Q.morphAttributes.position!==void 0&&(Fe=1),Q.morphAttributes.normal!==void 0&&(Fe=2),Q.morphAttributes.color!==void 0&&(Fe=3);let Xe,te,ce,he;if(le){const Ne=Ei[le];Xe=Ne.vertexShader,te=Ne.fragmentShader}else Xe=T.vertexShader,te=T.fragmentShader,l.update(T),ce=l.getVertexShaderID(T),he=l.getFragmentShaderID(T);const fe=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),Be=V.isInstancedMesh===!0,Ye=V.isBatchedMesh===!0,et=!!T.map,Ae=!!T.matcap,Me=!!X,B=!!T.aoMap,pt=!!T.lightMap,qe=!!T.bumpMap,H=!!T.normalMap,Ie=!!T.displacementMap,Ze=!!T.emissiveMap,Te=!!T.metalnessMap,P=!!T.roughnessMap,E=T.anisotropy>0,Y=T.clearcoat>0,ae=T.dispersion>0,se=T.iridescence>0,ie=T.sheen>0,_e=T.transmission>0,Se=E&&!!T.anisotropyMap,Ee=Y&&!!T.clearcoatMap,Je=Y&&!!T.clearcoatNormalMap,de=Y&&!!T.clearcoatRoughnessMap,ge=se&&!!T.iridescenceMap,Oe=se&&!!T.iridescenceThicknessMap,Ue=ie&&!!T.sheenColorMap,De=ie&&!!T.sheenRoughnessMap,$e=!!T.specularMap,ke=!!T.specularColorMap,Ke=!!T.specularIntensityMap,F=_e&&!!T.transmissionMap,ee=_e&&!!T.thicknessMap,ne=!!T.gradientMap,oe=!!T.alphaMap,we=T.alphaTest>0,Re=!!T.alphaHash,je=!!T.extensions;let gt=$i;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(gt=r.toneMapping);const Ot={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:Xe,fragmentShader:te,defines:T.defines,customVertexShaderID:ce,customFragmentShaderID:he,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ye,batchingColor:Ye&&V._colorsTexture!==null,instancing:Be,instancingColor:Be&&V.instanceColor!==null,instancingMorph:Be&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:er,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:Ae,envMap:Me,envMapMode:Me&&X.mapping,envMapCubeUVHeight:G,aoMap:B,lightMap:pt,bumpMap:qe,normalMap:H,displacementMap:f&&Ie,emissiveMap:Ze,normalMapObjectSpace:H&&T.normalMapType===Fg,normalMapTangentSpace:H&&T.normalMapType===Og,metalnessMap:Te,roughnessMap:P,anisotropy:E,anisotropyMap:Se,clearcoat:Y,clearcoatMap:Ee,clearcoatNormalMap:Je,clearcoatRoughnessMap:de,dispersion:ae,iridescence:se,iridescenceMap:ge,iridescenceThicknessMap:Oe,sheen:ie,sheenColorMap:Ue,sheenRoughnessMap:De,specularMap:$e,specularColorMap:ke,specularIntensityMap:Ke,transmission:_e,transmissionMap:F,thicknessMap:ee,gradientMap:ne,opaque:T.transparent===!1&&T.blending===zs&&T.alphaToCoverage===!1,alphaMap:oe,alphaTest:we,alphaHash:Re,combine:T.combine,mapUv:et&&v(T.map.channel),aoMapUv:B&&v(T.aoMap.channel),lightMapUv:pt&&v(T.lightMap.channel),bumpMapUv:qe&&v(T.bumpMap.channel),normalMapUv:H&&v(T.normalMap.channel),displacementMapUv:Ie&&v(T.displacementMap.channel),emissiveMapUv:Ze&&v(T.emissiveMap.channel),metalnessMapUv:Te&&v(T.metalnessMap.channel),roughnessMapUv:P&&v(T.roughnessMap.channel),anisotropyMapUv:Se&&v(T.anisotropyMap.channel),clearcoatMapUv:Ee&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(T.sheenRoughnessMap.channel),specularMapUv:$e&&v(T.specularMap.channel),specularColorMapUv:ke&&v(T.specularColorMap.channel),specularIntensityMapUv:Ke&&v(T.specularIntensityMap.channel),transmissionMapUv:F&&v(T.transmissionMap.channel),thicknessMapUv:ee&&v(T.thicknessMap.channel),alphaMapUv:oe&&v(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(H||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(et||oe),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pe,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&St.getTransfer(T.map.colorSpace)===Ct,decodeVideoTextureEmissive:Ze&&T.emissiveMap.isVideoTexture===!0&&St.getTransfer(T.emissiveMap.colorSpace)===Ct,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vi,flipSided:T.side===On,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:je&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&T.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function m(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)S.push(U),S.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(w(S,T),b(S,T),S.push(r.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function w(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function b(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){const S=g[T.type];let U;if(S){const z=Ei[S];U=_0.clone(z.uniforms)}else U=T.uniforms;return U}function L(T,S){let U;for(let z=0,V=h.length;z<V;z++){const Z=h[z];if(Z.cacheKey===S){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new PM(r,S,T,s),h.push(U)),U}function D(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function A(T){l.remove(T)}function I(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:L,releaseProgram:D,releaseShaderCache:A,programs:h,dispose:I}}function NM(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function OM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,p,g,v,_){let m=r[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:_},r[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=_),e++,m}function a(d,f,p,g,v,_){const m=o(d,f,p,g,v,_);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(d,f,p,g,v,_){const m=o(d,f,p,g,v,_);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||OM),n.length>1&&n.sort(f||Hf),i.length>1&&i.sort(f||Hf)}function h(){for(let d=e,f=r.length;d<f;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function FM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Vf,r.set(n,[o])):i>=s.length?(o=new Vf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function BM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Mt};break;case"SpotLight":t={position:new K,direction:new K,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function zM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let kM=0;function HM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function VM(r){const e=new BM,t=zM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const i=new K,s=new Jt,o=new Jt;function a(c){let h=0,d=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,v=0,_=0,m=0,w=0,b=0,M=0,L=0,D=0,A=0;c.sort(HM);for(let T=0,S=c.length;T<S;T++){const U=c[T],z=U.color,V=U.intensity,Z=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*V,d+=z.g*V,f+=z.b*V;else if(U.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(U.sh.coefficients[q],V);A++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const X=U.shadow,G=t.get(U);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=U.shadow.matrix,w++}n.directional[p]=q,p++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(z).multiplyScalar(V),q.distance=Z,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,n.spot[v]=q;const X=U.shadow;if(U.map&&(n.spotLightMap[L]=U.map,L++,X.updateMatrices(U),U.castShadow&&D++),n.spotLightMatrix[v]=X.matrix,U.castShadow){const G=t.get(U);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=Q,M++}v++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(z).multiplyScalar(V),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),n.rectArea[_]=q,_++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const X=U.shadow,G=t.get(U);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=U.shadow.matrix,b++}n.point[g]=q,g++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(V),q.groundColor.copy(U.groundColor).multiplyScalar(V),n.hemi[m]=q,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==m||I.numDirectionalShadows!==w||I.numPointShadows!==b||I.numSpotShadows!==M||I.numSpotMaps!==L||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=_,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+L-D,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=m,I.numDirectionalShadows=w,I.numPointShadows=b,I.numSpotShadows=M,I.numSpotMaps=L,I.numLightProbes=A,n.version=kM++)}function l(c,h){let d=0,f=0,p=0,g=0,v=0;const _=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const b=c[m];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),d++}else if(b.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),p++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(b.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),f++}else if(b.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:n}}function Gf(r){const e=new VM(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function GM(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Gf(r),e.set(i,[a])):s>=o.length?(a=new Gf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class WM extends ml{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XM extends ml{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qM=`uniform sampler2D shadow_pass;
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
}`;function ZM(r,e,t){let n=new Xp;const i=new Pt,s=new Pt,o=new zt,a=new WM({depthPacking:Ng}),l=new XM,c={},h=t.maxTextureSize,d={[Tr]:On,[On]:Tr,[Vi]:Vi},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:YM,fragmentShader:qM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new wr;g.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Si(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mp;let m=this.type;this.render=function(D,A,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const T=r.getRenderTarget(),S=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),z=r.state;z.setBlending(xr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=m!==Bi&&this.type===Bi,Z=m===Bi&&this.type!==Bi;for(let Q=0,q=D.length;Q<q;Q++){const X=D[Q],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const le=G.getFrameExtents();if(i.multiply(le),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/le.x),i.x=s.x*le.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/le.y),i.y=s.y*le.y,G.mapSize.y=s.y)),G.map===null||V===!0||Z===!0){const ye=this.type!==Bi?{minFilter:Kn,magFilter:Kn}:{};G.map!==null&&G.map.dispose(),G.map=new is(i.x,i.y,ye),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const N=G.getViewportCount();for(let ye=0;ye<N;ye++){const Fe=G.getViewport(ye);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),z.viewport(o),G.updateMatrices(X,ye),n=G.getFrustum(),M(A,I,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Bi&&w(G,I),G.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(T,S,U)};function w(D,A){const I=e.update(v);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new is(i.x,i.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(A,null,I,f,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(A,null,I,p,v,null)}function b(D,A,I,T){let S=null;const U=I.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)S=U;else if(S=I.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=S.uuid,V=A.uuid;let Z=c[z];Z===void 0&&(Z={},c[z]=Z);let Q=Z[V];Q===void 0&&(Q=S.clone(),Z[V]=Q,A.addEventListener("dispose",L)),S=Q}if(S.visible=A.visible,S.wireframe=A.wireframe,T===Bi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=r.properties.get(S);z.light=I}return S}function M(D,A,I,T,S){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===Bi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,D.matrixWorld);const V=e.update(D),Z=D.material;if(Array.isArray(Z)){const Q=V.groups;for(let q=0,X=Q.length;q<X;q++){const G=Q[q],le=Z[G.materialIndex];if(le&&le.visible){const N=b(D,le,T,S);D.onBeforeShadow(r,D,A,I,V,N,G),r.renderBufferDirect(I,null,V,N,D,G),D.onAfterShadow(r,D,A,I,V,N,G)}}}else if(Z.visible){const Q=b(D,Z,T,S);D.onBeforeShadow(r,D,A,I,V,Q,null),r.renderBufferDirect(I,null,V,Q,D,null),D.onAfterShadow(r,D,A,I,V,Q,null)}}const z=D.children;for(let V=0,Z=z.length;V<Z;V++)M(z[V],A,I,T,S)}function L(D){D.target.removeEventListener("dispose",L);for(const I in c){const T=c[I],S=D.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const $M={[Oc]:Fc,[Bc]:Hc,[zc]:Vc,[$s]:kc,[Fc]:Oc,[Hc]:Bc,[Vc]:zc,[kc]:$s};function KM(r,e){function t(){let F=!1;const ee=new zt;let ne=null;const oe=new zt(0,0,0,0);return{setMask:function(we){ne!==we&&!F&&(r.colorMask(we,we,we,we),ne=we)},setLocked:function(we){F=we},setClear:function(we,Re,je,gt,Ot){Ot===!0&&(we*=gt,Re*=gt,je*=gt),ee.set(we,Re,je,gt),oe.equals(ee)===!1&&(r.clearColor(we,Re,je,gt),oe.copy(ee))},reset:function(){F=!1,ne=null,oe.set(-1,0,0,0)}}}function n(){let F=!1,ee=!1,ne=null,oe=null,we=null;return{setReversed:function(Re){if(ee!==Re){const je=e.get("EXT_clip_control");ee?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const gt=we;we=null,this.setClear(gt)}ee=Re},getReversed:function(){return ee},setTest:function(Re){Re?fe(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(Re){ne!==Re&&!F&&(r.depthMask(Re),ne=Re)},setFunc:function(Re){if(ee&&(Re=$M[Re]),oe!==Re){switch(Re){case Oc:r.depthFunc(r.NEVER);break;case Fc:r.depthFunc(r.ALWAYS);break;case Bc:r.depthFunc(r.LESS);break;case $s:r.depthFunc(r.LEQUAL);break;case zc:r.depthFunc(r.EQUAL);break;case kc:r.depthFunc(r.GEQUAL);break;case Hc:r.depthFunc(r.GREATER);break;case Vc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=Re}},setLocked:function(Re){F=Re},setClear:function(Re){we!==Re&&(ee&&(Re=1-Re),r.clearDepth(Re),we=Re)},reset:function(){F=!1,ne=null,oe=null,we=null,ee=!1}}}function i(){let F=!1,ee=null,ne=null,oe=null,we=null,Re=null,je=null,gt=null,Ot=null;return{setTest:function(Ne){F||(Ne?fe(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(Ne){ee!==Ne&&!F&&(r.stencilMask(Ne),ee=Ne)},setFunc:function(Ne,He,it){(ne!==Ne||oe!==He||we!==it)&&(r.stencilFunc(Ne,He,it),ne=Ne,oe=He,we=it)},setOp:function(Ne,He,it){(Re!==Ne||je!==He||gt!==it)&&(r.stencilOp(Ne,He,it),Re=Ne,je=He,gt=it)},setLocked:function(Ne){F=Ne},setClear:function(Ne){Ot!==Ne&&(r.clearStencil(Ne),Ot=Ne)},reset:function(){F=!1,ee=null,ne=null,oe=null,we=null,Re=null,je=null,gt=null,Ot=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,v=!1,_=null,m=null,w=null,b=null,M=null,L=null,D=null,A=new Mt(0,0,0),I=0,T=!1,S=null,U=null,z=null,V=null,Z=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=X>=2);let le=null,N={};const ye=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),Xe=new zt().fromArray(ye),te=new zt().fromArray(Fe);function ce(F,ee,ne,oe){const we=new Uint8Array(4),Re=r.createTexture();r.bindTexture(F,Re),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<ne;je++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(ee+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return Re}const he={};he[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(r.DEPTH_TEST),o.setFunc($s),qe(!1),H(Xh),fe(r.CULL_FACE),B(xr);function fe(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function Pe(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Be(F,ee){return d[F]!==ee?(r.bindFramebuffer(F,ee),d[F]=ee,F===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ee),F===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ye(F,ee){let ne=p,oe=!1;if(F){ne=f.get(ee),ne===void 0&&(ne=[],f.set(ee,ne));const we=F.textures;if(ne.length!==we.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,je=we.length;Re<je;Re++)ne[Re]=r.COLOR_ATTACHMENT0+Re;ne.length=we.length,oe=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,oe=!0);oe&&r.drawBuffers(ne)}function et(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const Ae={[kr]:r.FUNC_ADD,[ag]:r.FUNC_SUBTRACT,[lg]:r.FUNC_REVERSE_SUBTRACT};Ae[cg]=r.MIN,Ae[ug]=r.MAX;const Me={[hg]:r.ZERO,[fg]:r.ONE,[dg]:r.SRC_COLOR,[Uc]:r.SRC_ALPHA,[xg]:r.SRC_ALPHA_SATURATE,[gg]:r.DST_COLOR,[mg]:r.DST_ALPHA,[pg]:r.ONE_MINUS_SRC_COLOR,[Nc]:r.ONE_MINUS_SRC_ALPHA,[vg]:r.ONE_MINUS_DST_COLOR,[_g]:r.ONE_MINUS_DST_ALPHA,[Sg]:r.CONSTANT_COLOR,[Mg]:r.ONE_MINUS_CONSTANT_COLOR,[yg]:r.CONSTANT_ALPHA,[Eg]:r.ONE_MINUS_CONSTANT_ALPHA};function B(F,ee,ne,oe,we,Re,je,gt,Ot,Ne){if(F===xr){v===!0&&(Pe(r.BLEND),v=!1);return}if(v===!1&&(fe(r.BLEND),v=!0),F!==og){if(F!==_||Ne!==T){if((m!==kr||M!==kr)&&(r.blendEquation(r.FUNC_ADD),m=kr,M=kr),Ne)switch(F){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yh:r.blendFunc(r.ONE,r.ONE);break;case qh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,b=null,L=null,D=null,A.set(0,0,0),I=0,_=F,T=Ne}return}we=we||ee,Re=Re||ne,je=je||oe,(ee!==m||we!==M)&&(r.blendEquationSeparate(Ae[ee],Ae[we]),m=ee,M=we),(ne!==w||oe!==b||Re!==L||je!==D)&&(r.blendFuncSeparate(Me[ne],Me[oe],Me[Re],Me[je]),w=ne,b=oe,L=Re,D=je),(gt.equals(A)===!1||Ot!==I)&&(r.blendColor(gt.r,gt.g,gt.b,Ot),A.copy(gt),I=Ot),_=F,T=!1}function pt(F,ee){F.side===Vi?Pe(r.CULL_FACE):fe(r.CULL_FACE);let ne=F.side===On;ee&&(ne=!ne),qe(ne),F.blending===zs&&F.transparent===!1?B(xr):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const oe=F.stencilWrite;a.setTest(oe),oe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ze(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){S!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),S=F)}function H(F){F!==ig?(fe(r.CULL_FACE),F!==U&&(F===Xh?r.cullFace(r.BACK):F===rg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),U=F}function Ie(F){F!==z&&(q&&r.lineWidth(F),z=F)}function Ze(F,ee,ne){F?(fe(r.POLYGON_OFFSET_FILL),(V!==ee||Z!==ne)&&(r.polygonOffset(ee,ne),V=ee,Z=ne)):Pe(r.POLYGON_OFFSET_FILL)}function Te(F){F?fe(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function P(F){F===void 0&&(F=r.TEXTURE0+Q-1),le!==F&&(r.activeTexture(F),le=F)}function E(F,ee,ne){ne===void 0&&(le===null?ne=r.TEXTURE0+Q-1:ne=le);let oe=N[ne];oe===void 0&&(oe={type:void 0,texture:void 0},N[ne]=oe),(oe.type!==F||oe.texture!==ee)&&(le!==ne&&(r.activeTexture(ne),le=ne),r.bindTexture(F,ee||he[F]),oe.type=F,oe.texture=ee)}function Y(){const F=N[le];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Je(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){Xe.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Xe.copy(F))}function De(F){te.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function $e(F,ee){let ne=c.get(ee);ne===void 0&&(ne=new WeakMap,c.set(ee,ne));let oe=ne.get(F);oe===void 0&&(oe=r.getUniformBlockIndex(ee,F.name),ne.set(F,oe))}function ke(F,ee){const oe=c.get(ee).get(F);l.get(ee)!==oe&&(r.uniformBlockBinding(ee,oe,F.__bindingPointIndex),l.set(ee,oe))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},le=null,N={},d={},f=new WeakMap,p=[],g=null,v=!1,_=null,m=null,w=null,b=null,M=null,L=null,D=null,A=new Mt(0,0,0),I=0,T=!1,S=null,U=null,z=null,V=null,Z=null,Xe.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:Pe,bindFramebuffer:Be,drawBuffers:Ye,useProgram:et,setBlending:B,setMaterial:pt,setFlipSided:qe,setCullFace:H,setLineWidth:Ie,setPolygonOffset:Ze,setScissorTest:Te,activeTexture:P,bindTexture:E,unbindTexture:Y,compressedTexImage2D:ae,compressedTexImage3D:se,texImage2D:ge,texImage3D:Oe,updateUBOMapping:$e,uniformBlockBinding:ke,texStorage2D:Je,texStorage3D:de,texSubImage2D:ie,texSubImage3D:_e,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ee,scissor:Ue,viewport:De,reset:Ke}}function Wf(r,e,t,n){const i=JM(n);switch(t){case Ap:return r*e;case Cp:return r*e;case Pp:return r*e*2;case ju:return r*e/i.components*i.byteLength;case Qu:return r*e/i.components*i.byteLength;case Dp:return r*e*2/i.components*i.byteLength;case eh:return r*e*2/i.components*i.byteLength;case Rp:return r*e*3/i.components*i.byteLength;case ui:return r*e*4/i.components*i.byteLength;case th:return r*e*4/i.components*i.byteLength;case Wa:case Xa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ya:case qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zc:case Kc:return Math.max(r,16)*Math.max(e,8)/4;case qc:case $c:return Math.max(r,8)*Math.max(e,8)/2;case Jc:case jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case nu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case iu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ru:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case su:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ou:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case au:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case lu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case cu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case uu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case hu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case du:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Za:case pu:case mu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Lp:case _u:return Math.ceil(r/4)*Math.ceil(e/4)*8;case gu:case vu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JM(r){switch(r){case Qi:case Tp:return{byteLength:1,components:1};case Wo:case bp:case Yi:return{byteLength:2,components:1};case Ku:case Ju:return{byteLength:2,components:4};case ns:case $u:case ci:return{byteLength:4,components:1};case wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function jM(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):ll("canvas")}function v(P,E,Y){let ae=1;const se=Te(P);if((se.width>Y||se.height>Y)&&(ae=Y/Math.max(se.width,se.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ie=Math.floor(ae*se.width),_e=Math.floor(ae*se.height);d===void 0&&(d=g(ie,_e));const Se=E?g(ie,_e):d;return Se.width=ie,Se.height=_e,Se.getContext("2d").drawImage(P,0,0,ie,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ie+"x"+_e+")."),Se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function _(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(P,E,Y,ae,se=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=E;if(E===r.RED&&(Y===r.FLOAT&&(ie=r.R32F),Y===r.HALF_FLOAT&&(ie=r.R16F),Y===r.UNSIGNED_BYTE&&(ie=r.R8)),E===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ie=r.R8UI),Y===r.UNSIGNED_SHORT&&(ie=r.R16UI),Y===r.UNSIGNED_INT&&(ie=r.R32UI),Y===r.BYTE&&(ie=r.R8I),Y===r.SHORT&&(ie=r.R16I),Y===r.INT&&(ie=r.R32I)),E===r.RG&&(Y===r.FLOAT&&(ie=r.RG32F),Y===r.HALF_FLOAT&&(ie=r.RG16F),Y===r.UNSIGNED_BYTE&&(ie=r.RG8)),E===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ie=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ie=r.RG16UI),Y===r.UNSIGNED_INT&&(ie=r.RG32UI),Y===r.BYTE&&(ie=r.RG8I),Y===r.SHORT&&(ie=r.RG16I),Y===r.INT&&(ie=r.RG32I)),E===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ie=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ie=r.RGB16UI),Y===r.UNSIGNED_INT&&(ie=r.RGB32UI),Y===r.BYTE&&(ie=r.RGB8I),Y===r.SHORT&&(ie=r.RGB16I),Y===r.INT&&(ie=r.RGB32I)),E===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ie=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ie=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ie=r.RGBA32UI),Y===r.BYTE&&(ie=r.RGBA8I),Y===r.SHORT&&(ie=r.RGBA16I),Y===r.INT&&(ie=r.RGBA32I)),E===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ie=r.RGB9_E5),E===r.RGBA){const _e=se?pl:St.getTransfer(ae);Y===r.FLOAT&&(ie=r.RGBA32F),Y===r.HALF_FLOAT&&(ie=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ie=_e===Ct?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(P,E){let Y;return P?E===null||E===ns||E===js?Y=r.DEPTH24_STENCIL8:E===ci?Y=r.DEPTH32F_STENCIL8:E===Wo&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ns||E===js?Y=r.DEPTH_COMPONENT24:E===ci?Y=r.DEPTH_COMPONENT32F:E===Wo&&(Y=r.DEPTH_COMPONENT16),Y}function L(P,E){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Kn&&P.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function D(P){const E=P.target;E.removeEventListener("dispose",D),I(E),E.isVideoTexture&&h.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),S(E)}function I(P){const E=n.get(P);if(E.__webglInit===void 0)return;const Y=P.source,ae=f.get(Y);if(ae){const se=ae[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(P),Object.keys(ae).length===0&&f.delete(Y)}n.remove(P)}function T(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const Y=P.source,ae=f.get(Y);delete ae[E.__cacheKey],o.memory.textures--}function S(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let se=0;se<E.__webglFramebuffer[ae].length;se++)r.deleteFramebuffer(E.__webglFramebuffer[ae][se]);else r.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)r.deleteFramebuffer(E.__webglFramebuffer[ae]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=P.textures;for(let ae=0,se=Y.length;ae<se;ae++){const ie=n.get(Y[ae]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(Y[ae])}n.remove(P)}let U=0;function z(){U=0}function V(){const P=U;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),U+=1,P}function Z(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Q(P,E){const Y=n.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Y,P,E);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+E)}function q(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){te(Y,P,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+E)}function X(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){te(Y,P,E);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+E)}function G(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ce(Y,P,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+E)}const le={[Xc]:r.REPEAT,[Xi]:r.CLAMP_TO_EDGE,[Yc]:r.MIRRORED_REPEAT},N={[Kn]:r.NEAREST,[Ig]:r.NEAREST_MIPMAP_NEAREST,[ha]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[Dl]:r.LINEAR_MIPMAP_NEAREST,[mr]:r.LINEAR_MIPMAP_LINEAR},ye={[Bg]:r.NEVER,[Wg]:r.ALWAYS,[zg]:r.LESS,[Ip]:r.LEQUAL,[kg]:r.EQUAL,[Gg]:r.GEQUAL,[Hg]:r.GREATER,[Vg]:r.NOTEQUAL};function Fe(P,E){if(E.type===ci&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===cn||E.magFilter===Dl||E.magFilter===ha||E.magFilter===mr||E.minFilter===cn||E.minFilter===Dl||E.minFilter===ha||E.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,le[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,le[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,le[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,N[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kn||E.minFilter!==ha&&E.minFilter!==mr||E.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Xe(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",D));const ae=E.source;let se=f.get(ae);se===void 0&&(se={},f.set(ae,se));const ie=Z(E);if(ie!==P.__cacheKey){se[ie]===void 0&&(se[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),se[ie].usedTimes++;const _e=se[P.__cacheKey];_e!==void 0&&(se[P.__cacheKey].usedTimes--,_e.usedTimes===0&&T(E)),P.__cacheKey=ie,P.__webglTexture=se[ie].texture}return Y}function te(P,E,Y){let ae=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=r.TEXTURE_3D);const se=Xe(P,E),ie=E.source;t.bindTexture(ae,P.__webglTexture,r.TEXTURE0+Y);const _e=n.get(ie);if(ie.version!==_e.__version||se===!0){t.activeTexture(r.TEXTURE0+Y);const Se=St.getPrimaries(St.workingColorSpace),Ee=E.colorSpace===bi?null:St.getPrimaries(E.colorSpace),Je=E.colorSpace===bi||Se===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let de=v(E.image,!1,i.maxTextureSize);de=Ze(E,de);const ge=s.convert(E.format,E.colorSpace),Oe=s.convert(E.type);let Ue=b(E.internalFormat,ge,Oe,E.colorSpace,E.isVideoTexture);Fe(ae,E);let De;const $e=E.mipmaps,ke=E.isVideoTexture!==!0,Ke=_e.__version===void 0||se===!0,F=ie.dataReady,ee=L(E,de);if(E.isDepthTexture)Ue=M(E.format===Qs,E.type),Ke&&(ke?t.texStorage2D(r.TEXTURE_2D,1,Ue,de.width,de.height):t.texImage2D(r.TEXTURE_2D,0,Ue,de.width,de.height,0,ge,Oe,null));else if(E.isDataTexture)if($e.length>0){ke&&Ke&&t.texStorage2D(r.TEXTURE_2D,ee,Ue,$e[0].width,$e[0].height);for(let ne=0,oe=$e.length;ne<oe;ne++)De=$e[ne],ke?F&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,De.width,De.height,ge,Oe,De.data):t.texImage2D(r.TEXTURE_2D,ne,Ue,De.width,De.height,0,ge,Oe,De.data);E.generateMipmaps=!1}else ke?(Ke&&t.texStorage2D(r.TEXTURE_2D,ee,Ue,de.width,de.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de.width,de.height,ge,Oe,de.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,de.width,de.height,0,ge,Oe,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Ue,$e[0].width,$e[0].height,de.depth);for(let ne=0,oe=$e.length;ne<oe;ne++)if(De=$e[ne],E.format!==ui)if(ge!==null)if(ke){if(F)if(E.layerUpdates.size>0){const we=Wf(De.width,De.height,E.format,E.type);for(const Re of E.layerUpdates){const je=De.data.subarray(Re*we/De.data.BYTES_PER_ELEMENT,(Re+1)*we/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Re,De.width,De.height,1,ge,je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,De.width,De.height,de.depth,ge,De.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Ue,De.width,De.height,de.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,De.width,De.height,de.depth,ge,Oe,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Ue,De.width,De.height,de.depth,0,ge,Oe,De.data)}else{ke&&Ke&&t.texStorage2D(r.TEXTURE_2D,ee,Ue,$e[0].width,$e[0].height);for(let ne=0,oe=$e.length;ne<oe;ne++)De=$e[ne],E.format!==ui?ge!==null?ke?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,De.width,De.height,ge,De.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Ue,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?F&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,De.width,De.height,ge,Oe,De.data):t.texImage2D(r.TEXTURE_2D,ne,Ue,De.width,De.height,0,ge,Oe,De.data)}else if(E.isDataArrayTexture)if(ke){if(Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Ue,de.width,de.height,de.depth),F)if(E.layerUpdates.size>0){const ne=Wf(de.width,de.height,E.format,E.type);for(const oe of E.layerUpdates){const we=de.data.subarray(oe*ne/de.data.BYTES_PER_ELEMENT,(oe+1)*ne/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,oe,de.width,de.height,1,ge,Oe,we)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ge,Oe,de.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,de.width,de.height,de.depth,0,ge,Oe,de.data);else if(E.isData3DTexture)ke?(Ke&&t.texStorage3D(r.TEXTURE_3D,ee,Ue,de.width,de.height,de.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ge,Oe,de.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,de.width,de.height,de.depth,0,ge,Oe,de.data);else if(E.isFramebufferTexture){if(Ke)if(ke)t.texStorage2D(r.TEXTURE_2D,ee,Ue,de.width,de.height);else{let ne=de.width,oe=de.height;for(let we=0;we<ee;we++)t.texImage2D(r.TEXTURE_2D,we,Ue,ne,oe,0,ge,Oe,null),ne>>=1,oe>>=1}}else if($e.length>0){if(ke&&Ke){const ne=Te($e[0]);t.texStorage2D(r.TEXTURE_2D,ee,Ue,ne.width,ne.height)}for(let ne=0,oe=$e.length;ne<oe;ne++)De=$e[ne],ke?F&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ge,Oe,De):t.texImage2D(r.TEXTURE_2D,ne,Ue,ge,Oe,De);E.generateMipmaps=!1}else if(ke){if(Ke){const ne=Te(de);t.texStorage2D(r.TEXTURE_2D,ee,Ue,ne.width,ne.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,Oe,de)}else t.texImage2D(r.TEXTURE_2D,0,Ue,ge,Oe,de);_(E)&&m(ae),_e.__version=ie.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ce(P,E,Y){if(E.image.length!==6)return;const ae=Xe(P,E),se=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const ie=n.get(se);if(se.version!==ie.__version||ae===!0){t.activeTexture(r.TEXTURE0+Y);const _e=St.getPrimaries(St.workingColorSpace),Se=E.colorSpace===bi?null:St.getPrimaries(E.colorSpace),Ee=E.colorSpace===bi||_e===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Je=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let oe=0;oe<6;oe++)!Je&&!de?ge[oe]=v(E.image[oe],!0,i.maxCubemapSize):ge[oe]=de?E.image[oe].image:E.image[oe],ge[oe]=Ze(E,ge[oe]);const Oe=ge[0],Ue=s.convert(E.format,E.colorSpace),De=s.convert(E.type),$e=b(E.internalFormat,Ue,De,E.colorSpace),ke=E.isVideoTexture!==!0,Ke=ie.__version===void 0||ae===!0,F=se.dataReady;let ee=L(E,Oe);Fe(r.TEXTURE_CUBE_MAP,E);let ne;if(Je){ke&&Ke&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,$e,Oe.width,Oe.height);for(let oe=0;oe<6;oe++){ne=ge[oe].mipmaps;for(let we=0;we<ne.length;we++){const Re=ne[we];E.format!==ui?Ue!==null?ke?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,Re.width,Re.height,Ue,Re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,$e,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,Re.width,Re.height,Ue,De,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,$e,Re.width,Re.height,0,Ue,De,Re.data)}}}else{if(ne=E.mipmaps,ke&&Ke){ne.length>0&&ee++;const oe=Te(ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,$e,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(de){ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ge[oe].width,ge[oe].height,Ue,De,ge[oe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,ge[oe].width,ge[oe].height,0,Ue,De,ge[oe].data);for(let we=0;we<ne.length;we++){const je=ne[we].image[oe].image;ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,je.width,je.height,Ue,De,je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,$e,je.width,je.height,0,Ue,De,je.data)}}else{ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,De,ge[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,Ue,De,ge[oe]);for(let we=0;we<ne.length;we++){const Re=ne[we];ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,Ue,De,Re.image[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,$e,Ue,De,Re.image[oe])}}}_(E)&&m(r.TEXTURE_CUBE_MAP),ie.__version=se.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function he(P,E,Y,ae,se,ie){const _e=s.convert(Y.format,Y.colorSpace),Se=s.convert(Y.type),Ee=b(Y.internalFormat,_e,Se,Y.colorSpace),Je=n.get(E),de=n.get(Y);if(de.__renderTarget=E,!Je.__hasExternalTextures){const ge=Math.max(1,E.width>>ie),Oe=Math.max(1,E.height>>ie);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,ie,Ee,ge,Oe,E.depth,0,_e,Se,null):t.texImage2D(se,ie,Ee,ge,Oe,0,_e,Se,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),H(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,se,de.__webglTexture,0,qe(E)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,se,de.__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(P,E,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const ae=E.depthTexture,se=ae&&ae.isDepthTexture?ae.type:null,ie=M(E.stencilBuffer,se),_e=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=qe(E);H(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,ie,E.width,E.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,ie,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ie,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,P)}else{const ae=E.textures;for(let se=0;se<ae.length;se++){const ie=ae[se],_e=s.convert(ie.format,ie.colorSpace),Se=s.convert(ie.type),Ee=b(ie.internalFormat,_e,Se,ie.colorSpace),Je=qe(E);Y&&H(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Ee,E.width,E.height):H(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je,Ee,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(E.depthTexture);ae.__renderTarget=E,(!ae.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const se=ae.__webglTexture,ie=qe(E);if(E.depthTexture.format===ks)H(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(E.depthTexture.format===Qs)H(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Be(P){const E=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ae=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",se)};ae.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=ae}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,P)}else if(Y){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=r.createRenderbuffer(),fe(E.__webglDepthbuffer[ae],P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),fe(E.__webglDepthbuffer,P,!1);else{const ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(P,E,Y){const ae=n.get(P);E!==void 0&&he(ae.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Be(P)}function et(P){const E=P.texture,Y=n.get(P),ae=n.get(E);P.addEventListener("dispose",A);const se=P.textures,ie=P.isWebGLCubeRenderTarget===!0,_e=se.length>1;if(_e||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=E.version,o.memory.textures++),ie){Y.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Se]=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)Y.__webglFramebuffer[Se][Ee]=r.createFramebuffer()}else Y.__webglFramebuffer[Se]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)Y.__webglFramebuffer[Se]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(_e)for(let Se=0,Ee=se.length;Se<Ee;Se++){const Je=n.get(se[Se]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&H(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Se=0;Se<se.length;Se++){const Ee=se[Se];Y.__webglColorRenderbuffer[Se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Se]);const Je=s.convert(Ee.format,Ee.colorSpace),de=s.convert(Ee.type),ge=b(Ee.internalFormat,Je,de,Ee.colorSpace,P.isXRRenderTarget===!0),Oe=qe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,ge,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Se])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,E);for(let Se=0;Se<6;Se++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)he(Y.__webglFramebuffer[Se][Ee],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee);else he(Y.__webglFramebuffer[Se],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);_(E)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let Se=0,Ee=se.length;Se<Ee;Se++){const Je=se[Se],de=n.get(Je);t.bindTexture(r.TEXTURE_2D,de.__webglTexture),Fe(r.TEXTURE_2D,Je),he(Y.__webglFramebuffer,P,Je,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,0),_(Je)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let Se=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,ae.__webglTexture),Fe(Se,E),E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)he(Y.__webglFramebuffer[Ee],P,E,r.COLOR_ATTACHMENT0,Se,Ee);else he(Y.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,Se,0);_(E)&&m(Se),t.unbindTexture()}P.depthBuffer&&Be(P)}function Ae(P){const E=P.textures;for(let Y=0,ae=E.length;Y<ae;Y++){const se=E[Y];if(_(se)){const ie=w(P),_e=n.get(se).__webglTexture;t.bindTexture(ie,_e),m(ie),t.unbindTexture()}}}const Me=[],B=[];function pt(P){if(P.samples>0){if(H(P)===!1){const E=P.textures,Y=P.width,ae=P.height;let se=r.COLOR_BUFFER_BIT;const ie=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(P),Se=E.length>1;if(Se)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),Se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[Ee]);const Je=n.get(E[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Je,0)}r.blitFramebuffer(0,0,Y,ae,0,0,Y,ae,se,r.NEAREST),l===!0&&(Me.length=0,B.length=0,Me.push(r.COLOR_ATTACHMENT0+Ee),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Me.push(ie),B.push(ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Se)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,_e.__webglColorRenderbuffer[Ee]);const Je=n.get(E[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,Je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function qe(P){return Math.min(i.maxSamples,P.samples)}function H(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ie(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Ze(P,E){const Y=P.colorSpace,ae=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==er&&Y!==bi&&(St.getTransfer(Y)===Ct?(ae!==ui||se!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function Te(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Ye,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=he,this.useMultisampledRTT=H}function QM(r,e){function t(n,i=bi){let s;const o=St.getTransfer(i);if(n===Qi)return r.UNSIGNED_BYTE;if(n===Ku)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ju)return r.UNSIGNED_SHORT_5_5_5_1;if(n===wp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Tp)return r.BYTE;if(n===bp)return r.SHORT;if(n===Wo)return r.UNSIGNED_SHORT;if(n===$u)return r.INT;if(n===ns)return r.UNSIGNED_INT;if(n===ci)return r.FLOAT;if(n===Yi)return r.HALF_FLOAT;if(n===Ap)return r.ALPHA;if(n===Rp)return r.RGB;if(n===ui)return r.RGBA;if(n===Cp)return r.LUMINANCE;if(n===Pp)return r.LUMINANCE_ALPHA;if(n===ks)return r.DEPTH_COMPONENT;if(n===Qs)return r.DEPTH_STENCIL;if(n===ju)return r.RED;if(n===Qu)return r.RED_INTEGER;if(n===Dp)return r.RG;if(n===eh)return r.RG_INTEGER;if(n===th)return r.RGBA_INTEGER;if(n===Wa||n===Xa||n===Ya||n===qa)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qc||n===Zc||n===$c||n===Kc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===jc||n===Qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jc||n===jc)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===fu||n===du)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===eu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===iu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ru)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===su)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ou)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===au)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===du)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===pu||n===mu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Za)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lp||n===_u||n===gu||n===vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_u)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class ey extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,n),m=this._getHandJoint(c,v);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new La;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
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

}`;class ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new An,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Di({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Si(new $o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sy extends to{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const v=new ry,_=t.getContextAttributes();let m=null,w=null;const b=[],M=[],L=new Pt;let D=null;const A=new si;A.viewport=new zt;const I=new si;I.viewport=new zt;const T=[A,I],S=new ey;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=b[te];return ce===void 0&&(ce=new oc,b[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=b[te];return ce===void 0&&(ce=new oc,b[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=b[te];return ce===void 0&&(ce=new oc,b[te]=ce),ce.getHandSpace()};function V(te){const ce=M.indexOf(te.inputSource);if(ce===-1)return;const he=b[ce];he!==void 0&&(he.update(te.inputSource,te.frame,c||o),he.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",Q);for(let te=0;te<b.length;te++){const ce=M[te];ce!==null&&(M[te]=null,b[te].disconnect(ce))}U=null,z=null,v.reset(),e.setRenderTarget(m),p=null,f=null,d=null,i=null,w=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new is(p.framebufferWidth,p.framebufferHeight,{format:ui,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ce=null,he=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?Qs:ks,he=_.stencil?js:ns);const Pe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(Pe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new is(f.textureWidth,f.textureHeight,{format:ui,type:Qi,depthTexture:new qp(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(te){for(let ce=0;ce<te.removed.length;ce++){const he=te.removed[ce],fe=M.indexOf(he);fe>=0&&(M[fe]=null,b[fe].disconnect(he))}for(let ce=0;ce<te.added.length;ce++){const he=te.added[ce];let fe=M.indexOf(he);if(fe===-1){for(let Be=0;Be<b.length;Be++)if(Be>=M.length){M.push(he),fe=Be;break}else if(M[Be]===null){M[Be]=he,fe=Be;break}if(fe===-1)break}const Pe=b[fe];Pe&&Pe.connect(he)}}const q=new K,X=new K;function G(te,ce,he){q.setFromMatrixPosition(ce.matrixWorld),X.setFromMatrixPosition(he.matrixWorld);const fe=q.distanceTo(X),Pe=ce.projectionMatrix.elements,Be=he.projectionMatrix.elements,Ye=Pe[14]/(Pe[10]-1),et=Pe[14]/(Pe[10]+1),Ae=(Pe[9]+1)/Pe[5],Me=(Pe[9]-1)/Pe[5],B=(Pe[8]-1)/Pe[0],pt=(Be[8]+1)/Be[0],qe=Ye*B,H=Ye*pt,Ie=fe/(-B+pt),Ze=Ie*-B;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ze),te.translateZ(Ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Pe[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Te=Ye+Ie,P=et+Ie,E=qe-Ze,Y=H+(fe-Ze),ae=Ae*et/P*Te,se=Me*et/P*Te;te.projectionMatrix.makePerspective(E,Y,ae,se,Te,P),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function le(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let ce=te.near,he=te.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(he=v.depthFar)),S.near=I.near=A.near=ce,S.far=I.far=A.far=he,(U!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,z=S.far),A.layers.mask=te.layers.mask|2,I.layers.mask=te.layers.mask|4,S.layers.mask=A.layers.mask|I.layers.mask;const fe=te.parent,Pe=S.cameras;le(S,fe);for(let Be=0;Be<Pe.length;Be++)le(Pe[Be],fe);Pe.length===2?G(S,A,I):S.projectionMatrix.copy(A.projectionMatrix),N(te,S,fe)};function N(te,ce,he){he===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(he.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=xu*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ye=null;function Fe(te,ce){if(h=ce.getViewerPose(c||o),g=ce,h!==null){const he=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let fe=!1;he.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Be=0;Be<he.length;Be++){const Ye=he[Be];let et=null;if(p!==null)et=p.getViewport(Ye);else{const Me=d.getViewSubImage(f,Ye);et=Me.viewport,Be===0&&(e.setRenderTargetTextures(w,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(w))}let Ae=T[Be];Ae===void 0&&(Ae=new si,Ae.layers.enable(Be),Ae.viewport=new zt,T[Be]=Ae),Ae.matrix.fromArray(Ye.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ye.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(et.x,et.y,et.width,et.height),Be===0&&(S.matrix.copy(Ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(Ae)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Be=d.getDepthInformation(he[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,i.renderState)}}for(let he=0;he<b.length;he++){const fe=M[he],Pe=b[he];fe!==null&&Pe!==void 0&&Pe.update(fe,ce,c||o)}ye&&ye(te,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}const Xe=new Yp;Xe.setAnimationLoop(Fe),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const Ur=new Pi,oy=new Jt;function ay(r,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Vp(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,w,b,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),d(_,m)):m.isMeshPhongMaterial?(s(_,m),h(_,m)):m.isMeshStandardMaterial?(s(_,m),f(_,m),m.isMeshPhysicalMaterial&&p(_,m,M)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),v(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,w,b):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===On&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===On&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const w=e.get(m),b=w.envMap,M=w.envMapRotation;b&&(_.envMap.value=b,Ur.copy(M),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),_.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(Ur)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,w,b){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*w,_.scale.value=b*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,w){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===On&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function v(_,m){const w=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ly(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const M=b.program;n.uniformBlockBinding(w,M)}function c(w,b){let M=i[w.id];M===void 0&&(g(w),M=h(w),i[w.id]=M,w.addEventListener("dispose",_));const L=b.program;n.updateUBOMapping(w,L);const D=e.render.frame;s[w.id]!==D&&(f(w),s[w.id]=D)}function h(w){const b=d();w.__bindingPointIndex=b;const M=r.createBuffer(),L=w.__size,D=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,L,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,M),M}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=i[w.id],M=w.uniforms,L=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let D=0,A=M.length;D<A;D++){const I=Array.isArray(M[D])?M[D]:[M[D]];for(let T=0,S=I.length;T<S;T++){const U=I[T];if(p(U,D,T,L)===!0){const z=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let Q=0;Q<V.length;Q++){const q=V[Q],X=v(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,z+Z,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,Z),Z+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(w,b,M,L){const D=w.value,A=b+"_"+M;if(L[A]===void 0)return typeof D=="number"||typeof D=="boolean"?L[A]=D:L[A]=D.clone(),!0;{const I=L[A];if(typeof D=="number"||typeof D=="boolean"){if(I!==D)return L[A]=D,!0}else if(I.equals(D)===!1)return I.copy(D),!0}return!1}function g(w){const b=w.uniforms;let M=0;const L=16;for(let A=0,I=b.length;A<I;A++){const T=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,U=T.length;S<U;S++){const z=T[S],V=Array.isArray(z.value)?z.value:[z.value];for(let Z=0,Q=V.length;Z<Q;Z++){const q=V[Z],X=v(q),G=M%L,le=G%X.boundary,N=G+le;M+=le,N!==0&&L-N<X.storage&&(M+=L-N),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=X.storage}}}const D=M%L;return D>0&&(M+=L-D),w.__size=M,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function _(w){const b=w.target;b.removeEventListener("dispose",_);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function m(){for(const w in i)r.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class cy{constructor(e={}){const{canvas:t=Yg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=$i,this.toneMappingExposure=1;const M=this;let L=!1,D=0,A=0,I=null,T=-1,S=null;const U=new zt,z=new zt;let V=null;const Z=new Mt(0);let Q=0,q=t.width,X=t.height,G=1,le=null,N=null;const ye=new zt(0,0,q,X),Fe=new zt(0,0,q,X);let Xe=!1;const te=new Xp;let ce=!1,he=!1;const fe=new Jt,Pe=new Jt,Be=new K,Ye=new zt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Me(){return I===null?G:1}let B=n;function pt(u,x){return t.getContext(u,x)}try{const u={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zu}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Re,!1),B===null){const x="webgl2";if(B=pt(x,u),B===null)throw pt(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let qe,H,Ie,Ze,Te,P,E,Y,ae,se,ie,_e,Se,Ee,Je,de,ge,Oe,Ue,De,$e,ke,Ke,F;function ee(){qe=new pS(B),qe.init(),ke=new QM(B,qe),H=new aS(B,qe,e,ke),Ie=new KM(B,qe),H.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),Ze=new gS(B),Te=new NM,P=new jM(B,qe,Ie,Te,H,ke,Ze),E=new cS(M),Y=new dS(M),ae=new E0(B),Ke=new sS(B,ae),se=new mS(B,ae,Ze,Ke),ie=new xS(B,se,ae,Ze),Ue=new vS(B,H,P),de=new lS(Te),_e=new UM(M,E,Y,qe,H,Ke,de),Se=new ay(M,Te),Ee=new FM,Je=new GM(qe),Oe=new rS(M,E,Y,Ie,ie,p,l),ge=new ZM(M,ie,H),F=new ly(B,Ze,H,Ie),De=new oS(B,qe,Ze),$e=new _S(B,qe,Ze),Ze.programs=_e.programs,M.capabilities=H,M.extensions=qe,M.properties=Te,M.renderLists=Ee,M.shadowMap=ge,M.state=Ie,M.info=Ze}ee();const ne=new sy(M,B);this.xr=ne,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const u=qe.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=qe.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(u){u!==void 0&&(G=u,this.setSize(q,X,!1))},this.getSize=function(u){return u.set(q,X)},this.setSize=function(u,x,y=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=u,X=x,t.width=Math.floor(u*G),t.height=Math.floor(x*G),y===!0&&(t.style.width=u+"px",t.style.height=x+"px"),this.setViewport(0,0,u,x)},this.getDrawingBufferSize=function(u){return u.set(q*G,X*G).floor()},this.setDrawingBufferSize=function(u,x,y){q=u,X=x,G=y,t.width=Math.floor(u*y),t.height=Math.floor(x*y),this.setViewport(0,0,u,x)},this.getCurrentViewport=function(u){return u.copy(U)},this.getViewport=function(u){return u.copy(ye)},this.setViewport=function(u,x,y,R){u.isVector4?ye.set(u.x,u.y,u.z,u.w):ye.set(u,x,y,R),Ie.viewport(U.copy(ye).multiplyScalar(G).round())},this.getScissor=function(u){return u.copy(Fe)},this.setScissor=function(u,x,y,R){u.isVector4?Fe.set(u.x,u.y,u.z,u.w):Fe.set(u,x,y,R),Ie.scissor(z.copy(Fe).multiplyScalar(G).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(u){Ie.setScissorTest(Xe=u)},this.setOpaqueSort=function(u){le=u},this.setTransparentSort=function(u){N=u},this.getClearColor=function(u){return u.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(u=!0,x=!0,y=!0){let R=0;if(u){let C=!1;if(I!==null){const O=I.texture.format;C=O===th||O===eh||O===Qu}if(C){const O=I.texture.type,k=O===Qi||O===ns||O===Wo||O===js||O===Ku||O===Ju,$=Oe.getClearColor(),W=Oe.getClearAlpha(),J=$.r,j=$.g,re=$.b;k?(g[0]=J,g[1]=j,g[2]=re,g[3]=W,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=J,v[1]=j,v[2]=re,v[3]=W,B.clearBufferiv(B.COLOR,0,v))}else R|=B.COLOR_BUFFER_BIT}x&&(R|=B.DEPTH_BUFFER_BIT),y&&(R|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ee.dispose(),Je.dispose(),Te.dispose(),E.dispose(),Y.dispose(),ie.dispose(),Ke.dispose(),F.dispose(),_e.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ce),ne.removeEventListener("sessionend",tt),Ve.stop()};function oe(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const u=Ze.autoReset,x=ge.enabled,y=ge.autoUpdate,R=ge.needsUpdate,C=ge.type;ee(),Ze.autoReset=u,ge.enabled=x,ge.autoUpdate=y,ge.needsUpdate=R,ge.type=C}function Re(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function je(u){const x=u.target;x.removeEventListener("dispose",je),gt(x)}function gt(u){Ot(u),Te.remove(u)}function Ot(u){const x=Te.get(u).programs;x!==void 0&&(x.forEach(function(y){_e.releaseProgram(y)}),u.isShaderMaterial&&_e.releaseShaderCache(u))}this.renderBufferDirect=function(u,x,y,R,C,O){x===null&&(x=et);const k=C.isMesh&&C.matrixWorld.determinant()<0,$=vn(u,x,y,R,C);Ie.setMaterial(R,k);let W=y.index,J=1;if(R.wireframe===!0){if(W=se.getWireframeAttribute(y),W===void 0)return;J=2}const j=y.drawRange,re=y.attributes.position;let ue=j.start*J,pe=(j.start+j.count)*J;O!==null&&(ue=Math.max(ue,O.start*J),pe=Math.min(pe,(O.start+O.count)*J)),W!==null?(ue=Math.max(ue,0),pe=Math.min(pe,W.count)):re!=null&&(ue=Math.max(ue,0),pe=Math.min(pe,re.count));const be=pe-ue;if(be<0||be===1/0)return;Ke.setup(C,R,$,y,W);let ve,xe=De;if(W!==null&&(ve=ae.get(W),xe=$e,xe.setIndex(ve)),C.isMesh)R.wireframe===!0?(Ie.setLineWidth(R.wireframeLinewidth*Me()),xe.setMode(B.LINES)):xe.setMode(B.TRIANGLES);else if(C.isLine){let me=R.linewidth;me===void 0&&(me=1),Ie.setLineWidth(me*Me()),C.isLineSegments?xe.setMode(B.LINES):C.isLineLoop?xe.setMode(B.LINE_LOOP):xe.setMode(B.LINE_STRIP)}else C.isPoints?xe.setMode(B.POINTS):C.isSprite&&xe.setMode(B.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)xe.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))xe.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const me=C._multiDrawStarts,ut=C._multiDrawCounts,We=C._multiDrawCount,It=W?ae.get(W).bytesPerElement:1,yt=Te.get(R).currentProgram.getUniforms();for(let nt=0;nt<We;nt++)yt.setValue(B,"_gl_DrawID",nt),xe.render(me[nt]/It,ut[nt])}else if(C.isInstancedMesh)xe.renderInstances(ue,be,C.count);else if(y.isInstancedBufferGeometry){const me=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,ut=Math.min(y.instanceCount,me);xe.renderInstances(ue,be,ut)}else xe.render(ue,be)};function Ne(u,x,y){u.transparent===!0&&u.side===Vi&&u.forceSinglePass===!1?(u.side=On,u.needsUpdate=!0,bt(u,x,y),u.side=Tr,u.needsUpdate=!0,bt(u,x,y),u.side=Vi):bt(u,x,y)}this.compile=function(u,x,y=null){y===null&&(y=u),m=Je.get(y),m.init(x),b.push(m),y.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(m.pushLight(C),C.castShadow&&m.pushShadow(C))}),u!==y&&u.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(m.pushLight(C),C.castShadow&&m.pushShadow(C))}),m.setupLights();const R=new Set;return u.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const O=C.material;if(O)if(Array.isArray(O))for(let k=0;k<O.length;k++){const $=O[k];Ne($,y,C),R.add($)}else Ne(O,y,C),R.add(O)}),b.pop(),m=null,R},this.compileAsync=function(u,x,y=null){const R=this.compile(u,x,y);return new Promise(C=>{function O(){if(R.forEach(function(k){Te.get(k).currentProgram.isReady()&&R.delete(k)}),R.size===0){C(u);return}setTimeout(O,10)}qe.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let He=null;function it(u){He&&He(u)}function Ce(){Ve.stop()}function tt(){Ve.start()}const Ve=new Yp;Ve.setAnimationLoop(it),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(u){He=u,ne.setAnimationLoop(u),u===null?Ve.stop():Ve.start()},ne.addEventListener("sessionstart",Ce),ne.addEventListener("sessionend",tt),this.render=function(u,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(x),x=ne.getCamera()),u.isScene===!0&&u.onBeforeRender(M,u,x,I),m=Je.get(u,b.length),m.init(x),b.push(m),Pe.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),te.setFromProjectionMatrix(Pe),he=this.localClippingEnabled,ce=de.init(this.clippingPlanes,he),_=Ee.get(u,w.length),_.init(),w.push(_),ne.enabled===!0&&ne.isPresenting===!0){const O=M.xr.getDepthSensingMesh();O!==null&&Qe(O,x,-1/0,M.sortObjects)}Qe(u,x,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(le,N),Ae=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ae&&Oe.addToRenderList(_,u),this.info.render.frame++,ce===!0&&de.beginShadows();const y=m.state.shadowsArray;ge.render(y,u,x),ce===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const R=_.opaque,C=_.transmissive;if(m.setupLights(),x.isArrayCamera){const O=x.cameras;if(C.length>0)for(let k=0,$=O.length;k<$;k++){const W=O[k];st(R,C,u,W)}Ae&&Oe.render(u);for(let k=0,$=O.length;k<$;k++){const W=O[k];Ft(_,u,W,W.viewport)}}else C.length>0&&st(R,C,u,x),Ae&&Oe.render(u),Ft(_,u,x);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),u.isScene===!0&&u.onAfterRender(M,u,x),Ke.resetDefaultState(),T=-1,S=null,b.pop(),b.length>0?(m=b[b.length-1],ce===!0&&de.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function Qe(u,x,y,R){if(u.visible===!1)return;if(u.layers.test(x.layers)){if(u.isGroup)y=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(x);else if(u.isLight)m.pushLight(u),u.castShadow&&m.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||te.intersectsSprite(u)){R&&Ye.setFromMatrixPosition(u.matrixWorld).applyMatrix4(Pe);const k=ie.update(u),$=u.material;$.visible&&_.push(u,k,$,y,Ye.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||te.intersectsObject(u))){const k=ie.update(u),$=u.material;if(R&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),Ye.copy(u.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),Ye.copy(k.boundingSphere.center)),Ye.applyMatrix4(u.matrixWorld).applyMatrix4(Pe)),Array.isArray($)){const W=k.groups;for(let J=0,j=W.length;J<j;J++){const re=W[J],ue=$[re.materialIndex];ue&&ue.visible&&_.push(u,k,ue,y,Ye.z,re)}}else $.visible&&_.push(u,k,$,y,Ye.z,null)}}const O=u.children;for(let k=0,$=O.length;k<$;k++)Qe(O[k],x,y,R)}function Ft(u,x,y,R){const C=u.opaque,O=u.transmissive,k=u.transparent;m.setupLightsView(y),ce===!0&&de.setGlobalState(M.clippingPlanes,y),R&&Ie.viewport(U.copy(R)),C.length>0&&Rt(C,x,y),O.length>0&&Rt(O,x,y),k.length>0&&Rt(k,x,y),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function st(u,x,y,R){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[R.id]===void 0&&(m.state.transmissionRenderTarget[R.id]=new is(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Yi:Qi,minFilter:mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const O=m.state.transmissionRenderTarget[R.id],k=R.viewport||U;O.setSize(k.z,k.w);const $=M.getRenderTarget();M.setRenderTarget(O),M.getClearColor(Z),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),Ae&&Oe.render(y);const W=M.toneMapping;M.toneMapping=$i;const J=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),m.setupLightsView(R),ce===!0&&de.setGlobalState(M.clippingPlanes,R),Rt(u,y,R),P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O),qe.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let re=0,ue=x.length;re<ue;re++){const pe=x[re],be=pe.object,ve=pe.geometry,xe=pe.material,me=pe.group;if(xe.side===Vi&&be.layers.test(R.layers)){const ut=xe.side;xe.side=On,xe.needsUpdate=!0,Xt(be,y,R,ve,xe,me),xe.side=ut,xe.needsUpdate=!0,j=!0}}j===!0&&(P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O))}M.setRenderTarget($),M.setClearColor(Z,Q),J!==void 0&&(R.viewport=J),M.toneMapping=W}function Rt(u,x,y){const R=x.isScene===!0?x.overrideMaterial:null;for(let C=0,O=u.length;C<O;C++){const k=u[C],$=k.object,W=k.geometry,J=R===null?k.material:R,j=k.group;$.layers.test(y.layers)&&Xt($,x,y,W,J,j)}}function Xt(u,x,y,R,C,O){u.onBeforeRender(M,x,y,R,C,O),u.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),C.onBeforeRender(M,x,y,R,u,O),C.transparent===!0&&C.side===Vi&&C.forceSinglePass===!1?(C.side=On,C.needsUpdate=!0,M.renderBufferDirect(y,x,R,C,u,O),C.side=Tr,C.needsUpdate=!0,M.renderBufferDirect(y,x,R,C,u,O),C.side=Vi):M.renderBufferDirect(y,x,R,C,u,O),u.onAfterRender(M,x,y,R,C,O)}function bt(u,x,y){x.isScene!==!0&&(x=et);const R=Te.get(u),C=m.state.lights,O=m.state.shadowsArray,k=C.state.version,$=_e.getParameters(u,C.state,O,x,y),W=_e.getProgramCacheKey($);let J=R.programs;R.environment=u.isMeshStandardMaterial?x.environment:null,R.fog=x.fog,R.envMap=(u.isMeshStandardMaterial?Y:E).get(u.envMap||R.environment),R.envMapRotation=R.environment!==null&&u.envMap===null?x.environmentRotation:u.envMapRotation,J===void 0&&(u.addEventListener("dispose",je),J=new Map,R.programs=J);let j=J.get(W);if(j!==void 0){if(R.currentProgram===j&&R.lightsStateVersion===k)return vt(u,$),j}else $.uniforms=_e.getUniforms(u),u.onBeforeCompile($,M),j=_e.acquireProgram($,W),J.set(W,j),R.uniforms=$.uniforms;const re=R.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(re.clippingPlanes=de.uniform),vt(u,$),R.needsLights=Gt(u),R.lightsStateVersion=k,R.needsLights&&(re.ambientLightColor.value=C.state.ambient,re.lightProbe.value=C.state.probe,re.directionalLights.value=C.state.directional,re.directionalLightShadows.value=C.state.directionalShadow,re.spotLights.value=C.state.spot,re.spotLightShadows.value=C.state.spotShadow,re.rectAreaLights.value=C.state.rectArea,re.ltc_1.value=C.state.rectAreaLTC1,re.ltc_2.value=C.state.rectAreaLTC2,re.pointLights.value=C.state.point,re.pointLightShadows.value=C.state.pointShadow,re.hemisphereLights.value=C.state.hemi,re.directionalShadowMap.value=C.state.directionalShadowMap,re.directionalShadowMatrix.value=C.state.directionalShadowMatrix,re.spotShadowMap.value=C.state.spotShadowMap,re.spotLightMatrix.value=C.state.spotLightMatrix,re.spotLightMap.value=C.state.spotLightMap,re.pointShadowMap.value=C.state.pointShadowMap,re.pointShadowMatrix.value=C.state.pointShadowMatrix),R.currentProgram=j,R.uniformsList=null,j}function Et(u){if(u.uniformsList===null){const x=u.currentProgram.getUniforms();u.uniformsList=$a.seqWithValue(x.seq,u.uniforms)}return u.uniformsList}function vt(u,x){const y=Te.get(u);y.outputColorSpace=x.outputColorSpace,y.batching=x.batching,y.batchingColor=x.batchingColor,y.instancing=x.instancing,y.instancingColor=x.instancingColor,y.instancingMorph=x.instancingMorph,y.skinning=x.skinning,y.morphTargets=x.morphTargets,y.morphNormals=x.morphNormals,y.morphColors=x.morphColors,y.morphTargetsCount=x.morphTargetsCount,y.numClippingPlanes=x.numClippingPlanes,y.numIntersection=x.numClipIntersection,y.vertexAlphas=x.vertexAlphas,y.vertexTangents=x.vertexTangents,y.toneMapping=x.toneMapping}function vn(u,x,y,R,C){x.isScene!==!0&&(x=et),P.resetTextureUnits();const O=x.fog,k=R.isMeshStandardMaterial?x.environment:null,$=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:er,W=(R.isMeshStandardMaterial?Y:E).get(R.envMap||k),J=R.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,j=!!y.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),re=!!y.morphAttributes.position,ue=!!y.morphAttributes.normal,pe=!!y.morphAttributes.color;let be=$i;R.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(be=M.toneMapping);const ve=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,xe=ve!==void 0?ve.length:0,me=Te.get(R),ut=m.state.lights;if(ce===!0&&(he===!0||u!==S)){const at=u===S&&R.id===T;de.setState(R,u,at)}let We=!1;R.version===me.__version?(me.needsLights&&me.lightsStateVersion!==ut.state.version||me.outputColorSpace!==$||C.isBatchedMesh&&me.batching===!1||!C.isBatchedMesh&&me.batching===!0||C.isBatchedMesh&&me.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&me.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&me.instancing===!1||!C.isInstancedMesh&&me.instancing===!0||C.isSkinnedMesh&&me.skinning===!1||!C.isSkinnedMesh&&me.skinning===!0||C.isInstancedMesh&&me.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&me.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&me.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&me.instancingMorph===!1&&C.morphTexture!==null||me.envMap!==W||R.fog===!0&&me.fog!==O||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==de.numPlanes||me.numIntersection!==de.numIntersection)||me.vertexAlphas!==J||me.vertexTangents!==j||me.morphTargets!==re||me.morphNormals!==ue||me.morphColors!==pe||me.toneMapping!==be||me.morphTargetsCount!==xe)&&(We=!0):(We=!0,me.__version=R.version);let It=me.currentProgram;We===!0&&(It=bt(R,x,C));let yt=!1,nt=!1,Ut=!1;const ht=It.getUniforms(),wt=me.uniforms;if(Ie.useProgram(It.program)&&(yt=!0,nt=!0,Ut=!0),R.id!==T&&(T=R.id,nt=!0),yt||S!==u){Ie.buffers.depth.getReversed()?(fe.copy(u.projectionMatrix),Zg(fe),$g(fe),ht.setValue(B,"projectionMatrix",fe)):ht.setValue(B,"projectionMatrix",u.projectionMatrix),ht.setValue(B,"viewMatrix",u.matrixWorldInverse);const nn=ht.map.cameraPosition;nn!==void 0&&nn.setValue(B,Be.setFromMatrixPosition(u.matrixWorld)),H.logarithmicDepthBuffer&&ht.setValue(B,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ht.setValue(B,"isOrthographic",u.isOrthographicCamera===!0),S!==u&&(S=u,nt=!0,Ut=!0)}if(C.isSkinnedMesh){ht.setOptional(B,C,"bindMatrix"),ht.setOptional(B,C,"bindMatrixInverse");const at=C.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),ht.setValue(B,"boneTexture",at.boneTexture,P))}C.isBatchedMesh&&(ht.setOptional(B,C,"batchingTexture"),ht.setValue(B,"batchingTexture",C._matricesTexture,P),ht.setOptional(B,C,"batchingIdTexture"),ht.setValue(B,"batchingIdTexture",C._indirectTexture,P),ht.setOptional(B,C,"batchingColorTexture"),C._colorsTexture!==null&&ht.setValue(B,"batchingColorTexture",C._colorsTexture,P));const mt=y.morphAttributes;if((mt.position!==void 0||mt.normal!==void 0||mt.color!==void 0)&&Ue.update(C,y,It),(nt||me.receiveShadow!==C.receiveShadow)&&(me.receiveShadow=C.receiveShadow,ht.setValue(B,"receiveShadow",C.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(wt.envMap.value=W,wt.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&x.environment!==null&&(wt.envMapIntensity.value=x.environmentIntensity),nt&&(ht.setValue(B,"toneMappingExposure",M.toneMappingExposure),me.needsLights&&xt(wt,Ut),O&&R.fog===!0&&Se.refreshFogUniforms(wt,O),Se.refreshMaterialUniforms(wt,R,G,X,m.state.transmissionRenderTarget[u.id]),$a.upload(B,Et(me),wt,P)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&($a.upload(B,Et(me),wt,P),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ht.setValue(B,"center",C.center),ht.setValue(B,"modelViewMatrix",C.modelViewMatrix),ht.setValue(B,"normalMatrix",C.normalMatrix),ht.setValue(B,"modelMatrix",C.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const at=R.uniformsGroups;for(let nn=0,Rn=at.length;nn<Rn;nn++){const Bn=at[nn];F.update(Bn,It),F.bind(Bn,It)}}return It}function xt(u,x){u.ambientLightColor.needsUpdate=x,u.lightProbe.needsUpdate=x,u.directionalLights.needsUpdate=x,u.directionalLightShadows.needsUpdate=x,u.pointLights.needsUpdate=x,u.pointLightShadows.needsUpdate=x,u.spotLights.needsUpdate=x,u.spotLightShadows.needsUpdate=x,u.rectAreaLights.needsUpdate=x,u.hemisphereLights.needsUpdate=x}function Gt(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(u,x,y){Te.get(u.texture).__webglTexture=x,Te.get(u.depthTexture).__webglTexture=y;const R=Te.get(u);R.__hasExternalTextures=!0,R.__autoAllocateDepthBuffer=y===void 0,R.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(u,x){const y=Te.get(u);y.__webglFramebuffer=x,y.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(u,x=0,y=0){I=u,D=x,A=y;let R=!0,C=null,O=!1,k=!1;if(u){const W=Te.get(u);if(W.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(B.FRAMEBUFFER,null),R=!1;else if(W.__webglFramebuffer===void 0)P.setupRenderTarget(u);else if(W.__hasExternalTextures)P.rebindTextures(u,Te.get(u.texture).__webglTexture,Te.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const re=u.depthTexture;if(W.__boundDepthTexture!==re){if(re!==null&&Te.has(re)&&(u.width!==re.image.width||u.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(u)}}const J=u.texture;(J.isData3DTexture||J.isDataArrayTexture||J.isCompressedArrayTexture)&&(k=!0);const j=Te.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(j[x])?C=j[x][y]:C=j[x],O=!0):u.samples>0&&P.useMultisampledRTT(u)===!1?C=Te.get(u).__webglMultisampledFramebuffer:Array.isArray(j)?C=j[y]:C=j,U.copy(u.viewport),z.copy(u.scissor),V=u.scissorTest}else U.copy(ye).multiplyScalar(G).floor(),z.copy(Fe).multiplyScalar(G).floor(),V=Xe;if(Ie.bindFramebuffer(B.FRAMEBUFFER,C)&&R&&Ie.drawBuffers(u,C),Ie.viewport(U),Ie.scissor(z),Ie.setScissorTest(V),O){const W=Te.get(u.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+x,W.__webglTexture,y)}else if(k){const W=Te.get(u.texture),J=x||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.__webglTexture,y||0,J)}T=-1},this.readRenderTargetPixels=function(u,x,y,R,C,O,k){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=Te.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&k!==void 0&&($=$[k]),$){Ie.bindFramebuffer(B.FRAMEBUFFER,$);try{const W=u.texture,J=W.format,j=W.type;if(!H.textureFormatReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=u.width-R&&y>=0&&y<=u.height-C&&B.readPixels(x,y,R,C,ke.convert(J),ke.convert(j),O)}finally{const W=I!==null?Te.get(I).__webglFramebuffer:null;Ie.bindFramebuffer(B.FRAMEBUFFER,W)}}},this.readRenderTargetPixelsAsync=async function(u,x,y,R,C,O,k){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $=Te.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&k!==void 0&&($=$[k]),$){const W=u.texture,J=W.format,j=W.type;if(!H.textureFormatReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=u.width-R&&y>=0&&y<=u.height-C){Ie.bindFramebuffer(B.FRAMEBUFFER,$);const re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,re),B.bufferData(B.PIXEL_PACK_BUFFER,O.byteLength,B.STREAM_READ),B.readPixels(x,y,R,C,ke.convert(J),ke.convert(j),0);const ue=I!==null?Te.get(I).__webglFramebuffer:null;Ie.bindFramebuffer(B.FRAMEBUFFER,ue);const pe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await qg(B,pe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,O),B.deleteBuffer(re),B.deleteSync(pe),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(u,x=null,y=0){u.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,u=arguments[1]);const R=Math.pow(2,-y),C=Math.floor(u.image.width*R),O=Math.floor(u.image.height*R),k=x!==null?x.x:0,$=x!==null?x.y:0;P.setTexture2D(u,0),B.copyTexSubImage2D(B.TEXTURE_2D,y,0,0,k,$,C,O),Ie.unbindTexture()},this.copyTextureToTexture=function(u,x,y=null,R=null,C=0){u.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),R=arguments[0]||null,u=arguments[1],x=arguments[2],C=arguments[3]||0,y=null);let O,k,$,W,J,j,re,ue,pe;const be=u.isCompressedTexture?u.mipmaps[C]:u.image;y!==null?(O=y.max.x-y.min.x,k=y.max.y-y.min.y,$=y.isBox3?y.max.z-y.min.z:1,W=y.min.x,J=y.min.y,j=y.isBox3?y.min.z:0):(O=be.width,k=be.height,$=be.depth||1,W=0,J=0,j=0),R!==null?(re=R.x,ue=R.y,pe=R.z):(re=0,ue=0,pe=0);const ve=ke.convert(x.format),xe=ke.convert(x.type);let me;x.isData3DTexture?(P.setTexture3D(x,0),me=B.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(P.setTexture2DArray(x,0),me=B.TEXTURE_2D_ARRAY):(P.setTexture2D(x,0),me=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,x.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,x.unpackAlignment);const ut=B.getParameter(B.UNPACK_ROW_LENGTH),We=B.getParameter(B.UNPACK_IMAGE_HEIGHT),It=B.getParameter(B.UNPACK_SKIP_PIXELS),yt=B.getParameter(B.UNPACK_SKIP_ROWS),nt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,be.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,be.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,W),B.pixelStorei(B.UNPACK_SKIP_ROWS,J),B.pixelStorei(B.UNPACK_SKIP_IMAGES,j);const Ut=u.isDataArrayTexture||u.isData3DTexture,ht=x.isDataArrayTexture||x.isData3DTexture;if(u.isRenderTargetTexture||u.isDepthTexture){const wt=Te.get(u),mt=Te.get(x),at=Te.get(wt.__renderTarget),nn=Te.get(mt.__renderTarget);Ie.bindFramebuffer(B.READ_FRAMEBUFFER,at.__webglFramebuffer),Ie.bindFramebuffer(B.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let Rn=0;Rn<$;Rn++)Ut&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.get(u).__webglTexture,C,j+Rn),u.isDepthTexture?(ht&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.get(x).__webglTexture,C,pe+Rn),B.blitFramebuffer(W,J,O,k,re,ue,O,k,B.DEPTH_BUFFER_BIT,B.NEAREST)):ht?B.copyTexSubImage3D(me,C,re,ue,pe+Rn,W,J,O,k):B.copyTexSubImage2D(me,C,re,ue,pe+Rn,W,J,O,k);Ie.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ht?u.isDataTexture||u.isData3DTexture?B.texSubImage3D(me,C,re,ue,pe,O,k,$,ve,xe,be.data):x.isCompressedArrayTexture?B.compressedTexSubImage3D(me,C,re,ue,pe,O,k,$,ve,be.data):B.texSubImage3D(me,C,re,ue,pe,O,k,$,ve,xe,be):u.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,C,re,ue,O,k,ve,xe,be.data):u.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,C,re,ue,be.width,be.height,ve,be.data):B.texSubImage2D(B.TEXTURE_2D,C,re,ue,O,k,ve,xe,be);B.pixelStorei(B.UNPACK_ROW_LENGTH,ut),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,We),B.pixelStorei(B.UNPACK_SKIP_PIXELS,It),B.pixelStorei(B.UNPACK_SKIP_ROWS,yt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,nt),C===0&&x.generateMipmaps&&B.generateMipmap(me),Ie.unbindTexture()},this.copyTextureToTexture3D=function(u,x,y=null,R=null,C=0){return u.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),y=arguments[0]||null,R=arguments[1]||null,u=arguments[2],x=arguments[3],C=arguments[4]||0),xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(u,x,y,R,C)},this.initRenderTarget=function(u){Te.get(u).__webglFramebuffer===void 0&&P.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?P.setTextureCube(u,0):u.isData3DTexture?P.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?P.setTexture2DArray(u,0):P.setTexture2D(u,0),Ie.unbindTexture()},this.resetState=function(){D=0,A=0,I=null,Ie.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class uy extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hy extends An{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Kn,h=Kn,d,f){super(null,o,a,l,c,h,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class fy{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const dy=new fy;class rh{constructor(e){this.manager=e!==void 0?e:dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fi={};class py extends Error{constructor(e,t){super(e),this.response=t}}class my extends rh{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:i});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Fi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let v=0;const _=new ReadableStream({start(m){w();function w(){d.read().then(({done:b,value:M})=>{if(b)m.close();else{v+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let D=0,A=h.length;D<A;D++){const I=h[D];I.onProgress&&I.onProgress(L)}m.enqueue(M),w()}},b=>{m.error(b)})}}});return new Response(_)}else throw new py(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Xf.add(e,c);const h=Fi[e];delete Fi[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _y extends rh{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new hy,a=new my(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Xi,o.wrapT=c.wrapT!==void 0?c.wrapT:Xi,o.magFilter=c.magFilter!==void 0?c.magFilter:cn,o.minFilter=c.minFilter!==void 0?c.minFilter:cn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=mr),c.mipmapCount===1&&(o.minFilter=cn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zu);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var oi=Uint8Array,Ds=Uint16Array,gy=Int32Array,jp=new oi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Qp=new oi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),vy=new oi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),em=function(r,e){for(var t=new Ds(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new gy(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},tm=em(jp,2),nm=tm.b,xy=tm.r;nm[28]=258,xy[258]=28;var Sy=em(Qp,0),My=Sy.b,Mu=new Ds(32768);for(var Nt=0;Nt<32768;++Nt){var lr=(Nt&43690)>>1|(Nt&21845)<<1;lr=(lr&52428)>>2|(lr&13107)<<2,lr=(lr&61680)>>4|(lr&3855)<<4,Mu[Nt]=((lr&65280)>>8|(lr&255)<<8)>>1}var Io=(function(r,e,t){for(var n=r.length,i=0,s=new Ds(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new Ds(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new Ds(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],d=o[r[i]-1]++<<h,f=d|(1<<h)-1;d<=f;++d)a[Mu[d]>>l]=c}else for(a=new Ds(n),i=0;i<n;++i)r[i]&&(a[i]=Mu[o[r[i]-1]++]>>15-r[i]);return a}),Ko=new oi(288);for(var Nt=0;Nt<144;++Nt)Ko[Nt]=8;for(var Nt=144;Nt<256;++Nt)Ko[Nt]=9;for(var Nt=256;Nt<280;++Nt)Ko[Nt]=7;for(var Nt=280;Nt<288;++Nt)Ko[Nt]=8;var im=new oi(32);for(var Nt=0;Nt<32;++Nt)im[Nt]=5;var yy=Io(Ko,9,1),Ey=Io(im,5,1),ac=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},_i=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},lc=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},Ty=function(r){return(r+7)/8|0},by=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new oi(r.subarray(e,t))},wy=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],vi=function(r,e,t){var n=new Error(e||wy[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,vi),!t)throw n;return n},Ay=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new oi(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new oi(i*3));var c=function(et){var Ae=t.length;if(et>Ae){var Me=new oi(Math.max(Ae*2,et));Me.set(t),t=Me}},h=e.f||0,d=e.p||0,f=e.b||0,p=e.l,g=e.d,v=e.m,_=e.n,m=i*8;do{if(!p){h=_i(r,d,1);var w=_i(r,d+1,3);if(d+=3,w)if(w==1)p=yy,g=Ey,v=9,_=5;else if(w==2){var D=_i(r,d,31)+257,A=_i(r,d+10,15)+4,I=D+_i(r,d+5,31)+1;d+=14;for(var T=new oi(I),S=new oi(19),U=0;U<A;++U)S[vy[U]]=_i(r,d+U*3,7);d+=A*3;for(var z=ac(S),V=(1<<z)-1,Z=Io(S,z,1),U=0;U<I;){var Q=Z[_i(r,d,V)];d+=Q&15;var b=Q>>4;if(b<16)T[U++]=b;else{var q=0,X=0;for(b==16?(X=3+_i(r,d,3),d+=2,q=T[U-1]):b==17?(X=3+_i(r,d,7),d+=3):b==18&&(X=11+_i(r,d,127),d+=7);X--;)T[U++]=q}}var G=T.subarray(0,D),le=T.subarray(D);v=ac(G),_=ac(le),p=Io(G,v,1),g=Io(le,_,1)}else vi(1);else{var b=Ty(d)+4,M=r[b-4]|r[b-3]<<8,L=b+M;if(L>i){l&&vi(0);break}a&&c(f+M),t.set(r.subarray(b,L),f),e.b=f+=M,e.p=d=L*8,e.f=h;continue}if(d>m){l&&vi(0);break}}a&&c(f+131072);for(var N=(1<<v)-1,ye=(1<<_)-1,Fe=d;;Fe=d){var q=p[lc(r,d)&N],Xe=q>>4;if(d+=q&15,d>m){l&&vi(0);break}if(q||vi(2),Xe<256)t[f++]=Xe;else if(Xe==256){Fe=d,p=null;break}else{var te=Xe-254;if(Xe>264){var U=Xe-257,ce=jp[U];te=_i(r,d,(1<<ce)-1)+nm[U],d+=ce}var he=g[lc(r,d)&ye],fe=he>>4;he||vi(3),d+=he&15;var le=My[fe];if(fe>3){var ce=Qp[fe];le+=lc(r,d)&(1<<ce)-1,d+=ce}if(d>m){l&&vi(0);break}a&&c(f+131072);var Pe=f+te;if(f<le){var Be=s-le,Ye=Math.min(le,Pe);for(Be+f<0&&vi(3);f<Ye;++f)t[f]=n[Be+f]}for(;f<Pe;++f)t[f]=t[f-le]}}e.l=p,e.p=Fe,e.b=f,e.f=h,p&&(h=1,e.m=v,e.d=g,e.n=_)}while(!h);return f!=t.length&&o?by(t,0,f):t.subarray(0,f)},Ry=new oi(0),Cy=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&vi(6,"invalid zlib data"),(r[1]>>5&1)==1&&vi(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function Ia(r,e){return Ay(r.subarray(Cy(r),-4),{i:2},e,e)}var Py=typeof TextDecoder<"u"&&new TextDecoder,Dy=0;try{Py.decode(Ry,{stream:!0}),Dy=1}catch{}class Ly extends _y{constructor(e){super(e),this.type=Yi}parse(e){const T=Math.pow(2.7182818,2.2);function S(u,x){let y=0;for(let C=0;C<65536;++C)(C==0||u[C>>3]&1<<(C&7))&&(x[y++]=C);const R=y-1;for(;y<65536;)x[y++]=0;return R}function U(u){for(let x=0;x<16384;x++)u[x]={},u[x].len=0,u[x].lit=0,u[x].p=null}const z={l:0,c:0,lc:0};function V(u,x,y,R,C){for(;y<u;)x=x<<8|De(R,C),y+=8;y-=u,z.l=x>>y&(1<<u)-1,z.c=x,z.lc=y}const Z=new Array(59);function Q(u){for(let y=0;y<=58;++y)Z[y]=0;for(let y=0;y<65537;++y)Z[u[y]]+=1;let x=0;for(let y=58;y>0;--y){const R=x+Z[y]>>1;Z[y]=x,x=R}for(let y=0;y<65537;++y){const R=u[y];R>0&&(u[y]=R|Z[R]++<<6)}}function q(u,x,y,R,C,O){const k=x;let $=0,W=0;for(;R<=C;R++){if(k.value-x.value>y)return!1;V(6,$,W,u,k);const J=z.l;if($=z.c,W=z.lc,O[R]=J,J==63){if(k.value-x.value>y)throw new Error("Something wrong with hufUnpackEncTable");V(8,$,W,u,k);let j=z.l+6;if($=z.c,W=z.lc,R+j>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;j--;)O[R++]=0;R--}else if(J>=59){let j=J-59+2;if(R+j>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;j--;)O[R++]=0;R--}}Q(O)}function X(u){return u&63}function G(u){return u>>6}function le(u,x,y,R){for(;x<=y;x++){const C=G(u[x]),O=X(u[x]);if(C>>O)throw new Error("Invalid table entry");if(O>14){const k=R[C>>O-14];if(k.len)throw new Error("Invalid table entry");if(k.lit++,k.p){const $=k.p;k.p=new Array(k.lit);for(let W=0;W<k.lit-1;++W)k.p[W]=$[W]}else k.p=new Array(1);k.p[k.lit-1]=x}else if(O){let k=0;for(let $=1<<14-O;$>0;$--){const W=R[(C<<14-O)+k];if(W.len||W.p)throw new Error("Invalid table entry");W.len=O,W.lit=x,k++}}}return!0}const N={c:0,lc:0};function ye(u,x,y,R){u=u<<8|De(y,R),x+=8,N.c=u,N.lc=x}const Fe={c:0,lc:0};function Xe(u,x,y,R,C,O,k,$,W){if(u==x){R<8&&(ye(y,R,C,O),y=N.c,R=N.lc),R-=8;let J=y>>R;if(J=new Uint8Array([J])[0],$.value+J>W)return!1;const j=k[$.value-1];for(;J-- >0;)k[$.value++]=j}else if($.value<W)k[$.value++]=u;else return!1;Fe.c=y,Fe.lc=R}function te(u){return u&65535}function ce(u){const x=te(u);return x>32767?x-65536:x}const he={a:0,b:0};function fe(u,x){const y=ce(u),C=ce(x),O=y+(C&1)+(C>>1),k=O,$=O-C;he.a=k,he.b=$}function Pe(u,x){const y=te(u),R=te(x),C=y-(R>>1)&65535,O=R+C-32768&65535;he.a=O,he.b=C}function Be(u,x,y,R,C,O,k){const $=k<16384,W=y>C?C:y;let J=1,j,re;for(;J<=W;)J<<=1;for(J>>=1,j=J,J>>=1;J>=1;){re=0;const ue=re+O*(C-j),pe=O*J,be=O*j,ve=R*J,xe=R*j;let me,ut,We,It;for(;re<=ue;re+=be){let yt=re;const nt=re+R*(y-j);for(;yt<=nt;yt+=xe){const Ut=yt+ve,ht=yt+pe,wt=ht+ve;$?(fe(u[yt+x],u[ht+x]),me=he.a,We=he.b,fe(u[Ut+x],u[wt+x]),ut=he.a,It=he.b,fe(me,ut),u[yt+x]=he.a,u[Ut+x]=he.b,fe(We,It),u[ht+x]=he.a,u[wt+x]=he.b):(Pe(u[yt+x],u[ht+x]),me=he.a,We=he.b,Pe(u[Ut+x],u[wt+x]),ut=he.a,It=he.b,Pe(me,ut),u[yt+x]=he.a,u[Ut+x]=he.b,Pe(We,It),u[ht+x]=he.a,u[wt+x]=he.b)}if(y&J){const Ut=yt+pe;$?fe(u[yt+x],u[Ut+x]):Pe(u[yt+x],u[Ut+x]),me=he.a,u[Ut+x]=he.b,u[yt+x]=me}}if(C&J){let yt=re;const nt=re+R*(y-j);for(;yt<=nt;yt+=xe){const Ut=yt+ve;$?fe(u[yt+x],u[Ut+x]):Pe(u[yt+x],u[Ut+x]),me=he.a,u[Ut+x]=he.b,u[yt+x]=me}}j=J,J>>=1}return re}function Ye(u,x,y,R,C,O,k,$,W){let J=0,j=0;const re=k,ue=Math.trunc(R.value+(C+7)/8);for(;R.value<ue;)for(ye(J,j,y,R),J=N.c,j=N.lc;j>=14;){const be=J>>j-14&16383,ve=x[be];if(ve.len)j-=ve.len,Xe(ve.lit,O,J,j,y,R,$,W,re),J=Fe.c,j=Fe.lc;else{if(!ve.p)throw new Error("hufDecode issues");let xe;for(xe=0;xe<ve.lit;xe++){const me=X(u[ve.p[xe]]);for(;j<me&&R.value<ue;)ye(J,j,y,R),J=N.c,j=N.lc;if(j>=me&&G(u[ve.p[xe]])==(J>>j-me&(1<<me)-1)){j-=me,Xe(ve.p[xe],O,J,j,y,R,$,W,re),J=Fe.c,j=Fe.lc;break}}if(xe==ve.lit)throw new Error("hufDecode issues")}}const pe=8-C&7;for(J>>=pe,j-=pe;j>0;){const be=x[J<<14-j&16383];if(be.len)j-=be.len,Xe(be.lit,O,J,j,y,R,$,W,re),J=Fe.c,j=Fe.lc;else throw new Error("hufDecode issues")}return!0}function et(u,x,y,R,C,O){const k={value:0},$=y.value,W=Ue(x,y),J=Ue(x,y);y.value+=4;const j=Ue(x,y);if(y.value+=4,W<0||W>=65537||J<0||J>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const re=new Array(65537),ue=new Array(16384);U(ue);const pe=R-(y.value-$);if(q(u,y,pe,W,J,re),j>8*(R-(y.value-$)))throw new Error("Something wrong with hufUncompress");le(re,W,J,ue),Ye(re,ue,u,y,j,J,O,C,k)}function Ae(u,x,y){for(let R=0;R<y;++R)x[R]=u[x[R]]}function Me(u){for(let x=1;x<u.length;x++){const y=u[x-1]+u[x]-128;u[x]=y}}function B(u,x){let y=0,R=Math.floor((u.length+1)/2),C=0;const O=u.length-1;for(;!(C>O||(x[C++]=u[y++],C>O));)x[C++]=u[R++]}function pt(u){let x=u.byteLength;const y=new Array;let R=0;const C=new DataView(u);for(;x>0;){const O=C.getInt8(R++);if(O<0){const k=-O;x-=k+1;for(let $=0;$<k;$++)y.push(C.getUint8(R++))}else{const k=O;x-=2;const $=C.getUint8(R++);for(let W=0;W<k+1;W++)y.push($)}}return y}function qe(u,x,y,R,C,O){let k=new DataView(O.buffer);const $=y[u.idx[0]].width,W=y[u.idx[0]].height,J=3,j=Math.floor($/8),re=Math.ceil($/8),ue=Math.ceil(W/8),pe=$-(re-1)*8,be=W-(ue-1)*8,ve={value:0},xe=new Array(J),me=new Array(J),ut=new Array(J),We=new Array(J),It=new Array(J);for(let nt=0;nt<J;++nt)It[nt]=x[u.idx[nt]],xe[nt]=nt<1?0:xe[nt-1]+re*ue,me[nt]=new Float32Array(64),ut[nt]=new Uint16Array(64),We[nt]=new Uint16Array(re*64);for(let nt=0;nt<ue;++nt){let Ut=8;nt==ue-1&&(Ut=be);let ht=8;for(let mt=0;mt<re;++mt){mt==re-1&&(ht=pe);for(let at=0;at<J;++at)ut[at].fill(0),ut[at][0]=C[xe[at]++],H(ve,R,ut[at]),Ie(ut[at],me[at]),Ze(me[at]);Te(me);for(let at=0;at<J;++at)P(me[at],We[at],mt*64)}let wt=0;for(let mt=0;mt<J;++mt){const at=y[u.idx[mt]].type;for(let nn=8*nt;nn<8*nt+Ut;++nn){wt=It[mt][nn];for(let Rn=0;Rn<j;++Rn){const Bn=Rn*64+(nn&7)*8;k.setUint16(wt+0*at,We[mt][Bn+0],!0),k.setUint16(wt+2*at,We[mt][Bn+1],!0),k.setUint16(wt+4*at,We[mt][Bn+2],!0),k.setUint16(wt+6*at,We[mt][Bn+3],!0),k.setUint16(wt+8*at,We[mt][Bn+4],!0),k.setUint16(wt+10*at,We[mt][Bn+5],!0),k.setUint16(wt+12*at,We[mt][Bn+6],!0),k.setUint16(wt+14*at,We[mt][Bn+7],!0),wt+=16*at}}if(j!=re)for(let nn=8*nt;nn<8*nt+Ut;++nn){const Rn=It[mt][nn]+8*j*2*at,Bn=j*64+(nn&7)*8;for(let Jo=0;Jo<ht;++Jo)k.setUint16(Rn+Jo*2*at,We[mt][Bn+Jo],!0)}}}const yt=new Uint16Array($);k=new DataView(O.buffer);for(let nt=0;nt<J;++nt){y[u.idx[nt]].decoded=!0;const Ut=y[u.idx[nt]].type;if(y[nt].type==2)for(let ht=0;ht<W;++ht){const wt=It[nt][ht];for(let mt=0;mt<$;++mt)yt[mt]=k.getUint16(wt+mt*2*Ut,!0);for(let mt=0;mt<$;++mt)k.setFloat32(wt+mt*2*Ut,ee(yt[mt]),!0)}}}function H(u,x,y){let R,C=1;for(;C<64;)R=x[u.value],R==65280?C=64:R>>8==255?C+=R&255:(y[C]=R,C++),u.value++}function Ie(u,x){x[0]=ee(u[0]),x[1]=ee(u[1]),x[2]=ee(u[5]),x[3]=ee(u[6]),x[4]=ee(u[14]),x[5]=ee(u[15]),x[6]=ee(u[27]),x[7]=ee(u[28]),x[8]=ee(u[2]),x[9]=ee(u[4]),x[10]=ee(u[7]),x[11]=ee(u[13]),x[12]=ee(u[16]),x[13]=ee(u[26]),x[14]=ee(u[29]),x[15]=ee(u[42]),x[16]=ee(u[3]),x[17]=ee(u[8]),x[18]=ee(u[12]),x[19]=ee(u[17]),x[20]=ee(u[25]),x[21]=ee(u[30]),x[22]=ee(u[41]),x[23]=ee(u[43]),x[24]=ee(u[9]),x[25]=ee(u[11]),x[26]=ee(u[18]),x[27]=ee(u[24]),x[28]=ee(u[31]),x[29]=ee(u[40]),x[30]=ee(u[44]),x[31]=ee(u[53]),x[32]=ee(u[10]),x[33]=ee(u[19]),x[34]=ee(u[23]),x[35]=ee(u[32]),x[36]=ee(u[39]),x[37]=ee(u[45]),x[38]=ee(u[52]),x[39]=ee(u[54]),x[40]=ee(u[20]),x[41]=ee(u[22]),x[42]=ee(u[33]),x[43]=ee(u[38]),x[44]=ee(u[46]),x[45]=ee(u[51]),x[46]=ee(u[55]),x[47]=ee(u[60]),x[48]=ee(u[21]),x[49]=ee(u[34]),x[50]=ee(u[37]),x[51]=ee(u[47]),x[52]=ee(u[50]),x[53]=ee(u[56]),x[54]=ee(u[59]),x[55]=ee(u[61]),x[56]=ee(u[35]),x[57]=ee(u[36]),x[58]=ee(u[48]),x[59]=ee(u[49]),x[60]=ee(u[57]),x[61]=ee(u[58]),x[62]=ee(u[62]),x[63]=ee(u[63])}function Ze(u){const x=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),C=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),k=.5*Math.cos(3*3.14159/8),$=.5*Math.cos(7*3.14159/16),W=new Array(4),J=new Array(4),j=new Array(4),re=new Array(4);for(let ue=0;ue<8;++ue){const pe=ue*8;W[0]=R*u[pe+2],W[1]=k*u[pe+2],W[2]=R*u[pe+6],W[3]=k*u[pe+6],J[0]=y*u[pe+1]+C*u[pe+3]+O*u[pe+5]+$*u[pe+7],J[1]=C*u[pe+1]-$*u[pe+3]-y*u[pe+5]-O*u[pe+7],J[2]=O*u[pe+1]-y*u[pe+3]+$*u[pe+5]+C*u[pe+7],J[3]=$*u[pe+1]-O*u[pe+3]+C*u[pe+5]-y*u[pe+7],j[0]=x*(u[pe+0]+u[pe+4]),j[3]=x*(u[pe+0]-u[pe+4]),j[1]=W[0]+W[3],j[2]=W[1]-W[2],re[0]=j[0]+j[1],re[1]=j[3]+j[2],re[2]=j[3]-j[2],re[3]=j[0]-j[1],u[pe+0]=re[0]+J[0],u[pe+1]=re[1]+J[1],u[pe+2]=re[2]+J[2],u[pe+3]=re[3]+J[3],u[pe+4]=re[3]-J[3],u[pe+5]=re[2]-J[2],u[pe+6]=re[1]-J[1],u[pe+7]=re[0]-J[0]}for(let ue=0;ue<8;++ue)W[0]=R*u[16+ue],W[1]=k*u[16+ue],W[2]=R*u[48+ue],W[3]=k*u[48+ue],J[0]=y*u[8+ue]+C*u[24+ue]+O*u[40+ue]+$*u[56+ue],J[1]=C*u[8+ue]-$*u[24+ue]-y*u[40+ue]-O*u[56+ue],J[2]=O*u[8+ue]-y*u[24+ue]+$*u[40+ue]+C*u[56+ue],J[3]=$*u[8+ue]-O*u[24+ue]+C*u[40+ue]-y*u[56+ue],j[0]=x*(u[ue]+u[32+ue]),j[3]=x*(u[ue]-u[32+ue]),j[1]=W[0]+W[3],j[2]=W[1]-W[2],re[0]=j[0]+j[1],re[1]=j[3]+j[2],re[2]=j[3]-j[2],re[3]=j[0]-j[1],u[0+ue]=re[0]+J[0],u[8+ue]=re[1]+J[1],u[16+ue]=re[2]+J[2],u[24+ue]=re[3]+J[3],u[32+ue]=re[3]-J[3],u[40+ue]=re[2]-J[2],u[48+ue]=re[1]-J[1],u[56+ue]=re[0]-J[0]}function Te(u){for(let x=0;x<64;++x){const y=u[0][x],R=u[1][x],C=u[2][x];u[0][x]=y+1.5747*C,u[1][x]=y-.1873*R-.4682*C,u[2][x]=y+1.8556*R}}function P(u,x,y){for(let R=0;R<64;++R)x[y+R]=pf.toHalfFloat(E(u[R]))}function E(u){return u<=1?Math.sign(u)*Math.pow(Math.abs(u),2.2):Math.sign(u)*Math.pow(T,Math.abs(u)-1)}function Y(u){return new DataView(u.array.buffer,u.offset.value,u.size)}function ae(u){const x=u.viewer.buffer.slice(u.offset.value,u.offset.value+u.size),y=new Uint8Array(pt(x)),R=new Uint8Array(y.length);return Me(y),B(y,R),new DataView(R.buffer)}function se(u){const x=u.array.slice(u.offset.value,u.offset.value+u.size),y=Ia(x),R=new Uint8Array(y.length);return Me(y),B(y,R),new DataView(R.buffer)}function ie(u){const x=u.viewer,y={value:u.offset.value},R=new Uint16Array(u.columns*u.lines*(u.inputChannels.length*u.type)),C=new Uint8Array(8192);let O=0;const k=new Array(u.inputChannels.length);for(let be=0,ve=u.inputChannels.length;be<ve;be++)k[be]={},k[be].start=O,k[be].end=k[be].start,k[be].nx=u.columns,k[be].ny=u.lines,k[be].size=u.type,O+=k[be].nx*k[be].ny*k[be].size;const $=ne(x,y),W=ne(x,y);if(W>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if($<=W)for(let be=0;be<W-$+1;be++)C[be+$]=$e(x,y);const J=new Uint16Array(65536),j=S(C,J),re=Ue(x,y);et(u.array,x,y,re,R,O);for(let be=0;be<u.inputChannels.length;++be){const ve=k[be];for(let xe=0;xe<k[be].size;++xe)Be(R,ve.start+xe,ve.nx,ve.size,ve.ny,ve.nx*ve.size,j)}Ae(J,R,O);let ue=0;const pe=new Uint8Array(R.buffer.byteLength);for(let be=0;be<u.lines;be++)for(let ve=0;ve<u.inputChannels.length;ve++){const xe=k[ve],me=xe.nx*xe.size,ut=new Uint8Array(R.buffer,xe.end*2,me*2);pe.set(ut,ue),ue+=me*2,xe.end+=me}return new DataView(pe.buffer)}function _e(u){const x=u.array.slice(u.offset.value,u.offset.value+u.size),y=Ia(x),R=u.inputChannels.length*u.lines*u.columns*u.totalBytes,C=new ArrayBuffer(R),O=new DataView(C);let k=0,$=0;const W=new Array(4);for(let J=0;J<u.lines;J++)for(let j=0;j<u.inputChannels.length;j++){let re=0;switch(u.inputChannels[j].pixelType){case 1:W[0]=k,W[1]=W[0]+u.columns,k=W[1]+u.columns;for(let pe=0;pe<u.columns;++pe){const be=y[W[0]++]<<8|y[W[1]++];re+=be,O.setUint16($,re,!0),$+=2}break;case 2:W[0]=k,W[1]=W[0]+u.columns,W[2]=W[1]+u.columns,k=W[2]+u.columns;for(let pe=0;pe<u.columns;++pe){const be=y[W[0]++]<<24|y[W[1]++]<<16|y[W[2]++]<<8;re+=be,O.setUint32($,re,!0),$+=4}break}}return O}function Se(u){const x=u.viewer,y={value:u.offset.value},R=new Uint8Array(u.columns*u.lines*(u.inputChannels.length*u.type*2)),C={version:ke(x,y),unknownUncompressedSize:ke(x,y),unknownCompressedSize:ke(x,y),acCompressedSize:ke(x,y),dcCompressedSize:ke(x,y),rleCompressedSize:ke(x,y),rleUncompressedSize:ke(x,y),rleRawSize:ke(x,y),totalAcUncompressedCount:ke(x,y),totalDcUncompressedCount:ke(x,y),acCompression:ke(x,y)};if(C.version<2)throw new Error("EXRLoader.parse: "+xt.compression+" version "+C.version+" is unsupported");const O=new Array;let k=ne(x,y)-2;for(;k>0;){const ve=Ee(x.buffer,y),xe=$e(x,y),me=xe>>2&3,ut=(xe>>4)-1,We=new Int8Array([ut])[0],It=$e(x,y);O.push({name:ve,index:We,type:It,compression:me}),k-=ve.length+3}const $=xt.channels,W=new Array(u.inputChannels.length);for(let ve=0;ve<u.inputChannels.length;++ve){const xe=W[ve]={},me=$[ve];xe.name=me.name,xe.compression=0,xe.decoded=!1,xe.type=me.pixelType,xe.pLinear=me.pLinear,xe.width=u.columns,xe.height=u.lines}const J={idx:new Array(3)};for(let ve=0;ve<u.inputChannels.length;++ve){const xe=W[ve];for(let me=0;me<O.length;++me){const ut=O[me];xe.name==ut.name&&(xe.compression=ut.compression,ut.index>=0&&(J.idx[ut.index]=ve),xe.offset=ve)}}let j,re,ue;if(C.acCompressedSize>0)switch(C.acCompression){case 0:j=new Uint16Array(C.totalAcUncompressedCount),et(u.array,x,y,C.acCompressedSize,j,C.totalAcUncompressedCount);break;case 1:const ve=u.array.slice(y.value,y.value+C.totalAcUncompressedCount),xe=Ia(ve);j=new Uint16Array(xe.buffer),y.value+=C.totalAcUncompressedCount;break}if(C.dcCompressedSize>0){const ve={array:u.array,offset:y,size:C.dcCompressedSize};re=new Uint16Array(se(ve).buffer),y.value+=C.dcCompressedSize}if(C.rleRawSize>0){const ve=u.array.slice(y.value,y.value+C.rleCompressedSize),xe=Ia(ve);ue=pt(xe.buffer),y.value+=C.rleCompressedSize}let pe=0;const be=new Array(W.length);for(let ve=0;ve<be.length;++ve)be[ve]=new Array;for(let ve=0;ve<u.lines;++ve)for(let xe=0;xe<W.length;++xe)be[xe].push(pe),pe+=W[xe].width*u.type*2;qe(J,be,W,j,re,R);for(let ve=0;ve<W.length;++ve){const xe=W[ve];if(!xe.decoded)switch(xe.compression){case 2:let me=0,ut=0;for(let We=0;We<u.lines;++We){let It=be[ve][me];for(let yt=0;yt<xe.width;++yt){for(let nt=0;nt<2*xe.type;++nt)R[It++]=ue[ut+nt*xe.width*xe.height];ut++}me++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(R.buffer)}function Ee(u,x){const y=new Uint8Array(u);let R=0;for(;y[x.value+R]!=0;)R+=1;const C=new TextDecoder().decode(y.slice(x.value,x.value+R));return x.value=x.value+R+1,C}function Je(u,x,y){const R=new TextDecoder().decode(new Uint8Array(u).slice(x.value,x.value+y));return x.value=x.value+y,R}function de(u,x){const y=Oe(u,x),R=Ue(u,x);return[y,R]}function ge(u,x){const y=Ue(u,x),R=Ue(u,x);return[y,R]}function Oe(u,x){const y=u.getInt32(x.value,!0);return x.value=x.value+4,y}function Ue(u,x){const y=u.getUint32(x.value,!0);return x.value=x.value+4,y}function De(u,x){const y=u[x.value];return x.value=x.value+1,y}function $e(u,x){const y=u.getUint8(x.value);return x.value=x.value+1,y}const ke=function(u,x){let y;return"getBigInt64"in DataView.prototype?y=Number(u.getBigInt64(x.value,!0)):y=u.getUint32(x.value+4,!0)+Number(u.getUint32(x.value,!0)<<32),x.value+=8,y};function Ke(u,x){const y=u.getFloat32(x.value,!0);return x.value+=4,y}function F(u,x){return pf.toHalfFloat(Ke(u,x))}function ee(u){const x=(u&31744)>>10,y=u&1023;return(u>>15?-1:1)*(x?x===31?y?NaN:1/0:Math.pow(2,x-15)*(1+y/1024):6103515625e-14*(y/1024))}function ne(u,x){const y=u.getUint16(x.value,!0);return x.value+=2,y}function oe(u,x){return ee(ne(u,x))}function we(u,x,y,R){const C=y.value,O=[];for(;y.value<C+R-1;){const k=Ee(x,y),$=Oe(u,y),W=$e(u,y);y.value+=3;const J=Oe(u,y),j=Oe(u,y);O.push({name:k,pixelType:$,pLinear:W,xSampling:J,ySampling:j})}return y.value+=1,O}function Re(u,x){const y=Ke(u,x),R=Ke(u,x),C=Ke(u,x),O=Ke(u,x),k=Ke(u,x),$=Ke(u,x),W=Ke(u,x),J=Ke(u,x);return{redX:y,redY:R,greenX:C,greenY:O,blueX:k,blueY:$,whiteX:W,whiteY:J}}function je(u,x){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=$e(u,x);return y[R]}function gt(u,x){const y=Oe(u,x),R=Oe(u,x),C=Oe(u,x),O=Oe(u,x);return{xMin:y,yMin:R,xMax:C,yMax:O}}function Ot(u,x){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=$e(u,x);return y[R]}function Ne(u,x){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=$e(u,x);return y[R]}function He(u,x){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],C=Ue(u,x),O=Ue(u,x),k=$e(u,x);return{xSize:C,ySize:O,levelMode:y[k&15],roundingMode:R[k>>4]}}function it(u,x){const y=Ke(u,x),R=Ke(u,x);return[y,R]}function Ce(u,x){const y=Ke(u,x),R=Ke(u,x),C=Ke(u,x);return[y,R,C]}function tt(u,x,y,R,C){if(R==="string"||R==="stringvector"||R==="iccProfile")return Je(x,y,C);if(R==="chlist")return we(u,x,y,C);if(R==="chromaticities")return Re(u,y);if(R==="compression")return je(u,y);if(R==="box2i")return gt(u,y);if(R==="envmap")return Ne(u,y);if(R==="tiledesc")return He(u,y);if(R==="lineOrder")return Ot(u,y);if(R==="float")return Ke(u,y);if(R==="v2f")return it(u,y);if(R==="v3f")return Ce(u,y);if(R==="int")return Oe(u,y);if(R==="rational")return de(u,y);if(R==="timecode")return ge(u,y);if(R==="preview")return y.value+=C,"skipped";y.value+=C}function Ve(u,x){const y=Math.log2(u);return x=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function Qe(u,x,y){let R=0;switch(u.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=Ve(Math.max(x,y),u.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function Ft(u,x,y,R){const C=new Array(u);for(let O=0;O<u;O++){const k=1<<O;let $=x/k|0;R=="ROUND_UP"&&$*k<x&&($+=1);const W=Math.max($,1);C[O]=(W+y-1)/y|0}return C}function st(){const u=this,x=u.offset,y={value:0};for(let R=0;R<u.tileCount;R++){const C=Oe(u.viewer,x),O=Oe(u.viewer,x);x.value+=8,u.size=Ue(u.viewer,x);const k=C*u.blockWidth,$=O*u.blockHeight;u.columns=k+u.blockWidth>u.width?u.width-k:u.blockWidth,u.lines=$+u.blockHeight>u.height?u.height-$:u.blockHeight;const W=u.columns*u.totalBytes,j=u.size<u.lines*W?u.uncompress(u):Y(u);x.value+=u.size;for(let re=0;re<u.lines;re++){const ue=re*u.columns*u.totalBytes;for(let pe=0;pe<u.inputChannels.length;pe++){const be=xt.channels[pe].name,ve=u.channelByteOffsets[be]*u.columns,xe=u.decodeChannels[be];if(xe===void 0)continue;y.value=ue+ve;const me=(u.height-(1+$+re))*u.outLineWidth;for(let ut=0;ut<u.columns;ut++){const We=me+(ut+k)*u.outputChannels+xe;u.byteArray[We]=u.getter(j,y)}}}}}function Rt(){const u=this,x=u.offset,y={value:0};for(let R=0;R<u.height/u.blockHeight;R++){const C=Oe(u.viewer,x)-xt.dataWindow.yMin;u.size=Ue(u.viewer,x),u.lines=C+u.blockHeight>u.height?u.height-C:u.blockHeight;const O=u.columns*u.totalBytes,$=u.size<u.lines*O?u.uncompress(u):Y(u);x.value+=u.size;for(let W=0;W<u.blockHeight;W++){const J=R*u.blockHeight,j=W+u.scanOrder(J);if(j>=u.height)continue;const re=W*O,ue=(u.height-1-j)*u.outLineWidth;for(let pe=0;pe<u.inputChannels.length;pe++){const be=xt.channels[pe].name,ve=u.channelByteOffsets[be]*u.columns,xe=u.decodeChannels[be];if(xe!==void 0){y.value=re+ve;for(let me=0;me<u.columns;me++){const ut=ue+me*u.outputChannels+xe;u.byteArray[ut]=u.getter($,y)}}}}}}function Xt(u,x,y){const R={};if(u.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");R.version=u.getUint8(4);const C=u.getUint8(5);R.spec={singleTile:!!(C&2),longName:!!(C&4),deepFormat:!!(C&8),multiPart:!!(C&16)},y.value=8;let O=!0;for(;O;){const k=Ee(x,y);if(k==0)O=!1;else{const $=Ee(x,y),W=Ue(u,y),J=tt(u,x,y,$,W);J===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${$}'.`):R[k]=J}}if((C&-7)!=0)throw console.error("THREE.EXRHeader:",R),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return R}function bt(u,x,y,R,C){const O={size:0,viewer:x,array:y,offset:R,width:u.dataWindow.xMax-u.dataWindow.xMin+1,height:u.dataWindow.yMax-u.dataWindow.yMin+1,inputChannels:u.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:er};switch(u.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=Y;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=ae;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=se;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=se;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=ie;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=_e;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=Se;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=Se;break;default:throw new Error("EXRLoader.parse: "+u.compression+" is unsupported")}const k={};for(const j of u.channels)switch(j.name){case"Y":case"R":case"G":case"B":case"A":k[j.name]=!0,O.type=j.pixelType}let $=!1;if(k.R&&k.G&&k.B)$=!k.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(k.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(C){case ci:O.getter=oe;break;case Yi:O.getter=ne;break}else if(O.type==2)switch(C){case ci:O.getter=Ke;break;case Yi:O.getter=F}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+u.compression+".");O.columns=O.width;const W=O.width*O.height*O.outputChannels;switch(C){case ci:O.byteArray=new Float32Array(W),$&&O.byteArray.fill(1,0,W);break;case Yi:O.byteArray=new Uint16Array(W),$&&O.byteArray.fill(15360,0,W);break;default:console.error("THREE.EXRLoader: unsupported type: ",C);break}let J=0;for(const j of u.channels)O.decodeChannels[j.name]!==void 0&&(O.channelByteOffsets[j.name]=J),J+=j.pixelType*2;if(O.totalBytes=J,O.outLineWidth=O.width*O.outputChannels,u.lineOrder==="INCREASING_Y"?O.scanOrder=j=>j:O.scanOrder=j=>O.height-1-j,O.outputChannels==4?(O.format=ui,O.colorSpace=er):(O.format=ju,O.colorSpace=bi),u.spec.singleTile){O.blockHeight=u.tiles.ySize,O.blockWidth=u.tiles.xSize;const j=Qe(u.tiles,O.width,O.height),re=Ft(j,O.width,u.tiles.xSize,u.tiles.roundingMode),ue=Ft(j,O.height,u.tiles.ySize,u.tiles.roundingMode);O.tileCount=re[0]*ue[0];for(let pe=0;pe<j;pe++)for(let be=0;be<ue[pe];be++)for(let ve=0;ve<re[pe];ve++)ke(x,R);O.decode=st.bind(O)}else{O.blockWidth=O.width;const j=Math.ceil(O.height/O.blockHeight);for(let re=0;re<j;re++)ke(x,R);O.decode=Rt.bind(O)}return O}const Et={value:0},vt=new DataView(e),vn=new Uint8Array(e),xt=Xt(vt,e,Et),Gt=bt(xt,vt,vn,Et,this.type);return Gt.decode(),{header:xt,width:Gt.width,height:Gt.height,data:Gt.byteArray,format:Gt.format,colorSpace:Gt.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=cn,o.magFilter=cn,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,i)}}async function Iy(r){const t=await(await fetch(r)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],i=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),s=i.vertexCount,o=i.indexCount;let a=4+n;const l=new wr,c=i.attributes;for(let h=0,d=c.length;h<d;h++){const f=c[h],p=f.id,g=p==="indices"?o:s,v=f.componentSize,_=globalThis[f.storageType],m=new _(t,a,g*v),w=_.BYTES_PER_ELEMENT;let b;if(f.needsPack){const M=f.packedComponents,L=M.length,D=f.storageType.indexOf("Int")===0,A=1<<w*8,I=D?A*.5:0,T=1/A;b=new Float32Array(g*v);for(let S=0,U=0;S<g;S++)for(let z=0;z<L;z++){const V=M[z];b[U]=(m[U]+I)*T*V.delta+V.from,U++}}else b=m;p==="indices"?l.setIndex(new fi(b,1)):l.setAttribute(p,new fi(b,v)),a+=g*v*w}return l.computeBoundingSphere(),l}const Ua=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],cc={density:1,friction:2,restitution:.8},Uy=40,Wr=8,Ny=`
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
`,Oy=`
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
uniform vec4 u_nearPositionRadiusList[${Wr}];
uniform vec3 u_nearColorList[${Wr}];

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

  for (int i = 0; i < ${Wr}; i++) {
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
  gi /= float(${Wr});

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
`,Fy=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,By=`
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
`;function zy(r){const e={...cc},t={...cc},n={...cc};return[{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function ky(r){let e=0;for(let t=0;t<r.length;t++)e=e*31+r.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function Yf(r,e,t,n,i){const s=Math.max(0,Math.min(1,(r-e)/(t-e||1)));return n+(i-n)*s}class Hy{constructor(e,t,n,i,s,o=!1){this.position=new K((s()-.5)*12,(s()-.5)*12,o?7+s():(s()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new ss().setFromEuler(new Pi(s()*Math.PI,s()*Math.PI,s()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=i,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new K,this.gravityAcc=new K}applyImpulse(){this.velocity.add(new K((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(Uy),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function Vy(r,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Ua.length),i=Ua[n];const s=new uy,o=new si(25,1,.1,100);o.position.set(0,0,25);const a=new cy({canvas:r,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.25:1.75)),a.outputColorSpace=er,a.toneMapping=$i;const l="/zyrax-studio/",c=`${l}assets/models/home/${t?"cross_ld":"cross"}.buf`,h=`${l}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[d,f]=await Promise.all([Iy(c),new Promise((Ae,Me)=>{new Ly().load(h,Ae,void 0,Me)})]);f.minFilter=cn,f.magFilter=cn,f.generateMipmaps=!1,f.colorSpace=bi;const p=new K(10,10,5),g=zy(i),v=ky("balloonBody-25"),_=[],m=[],w=[],b=[],M=Array.from({length:Wr},()=>new zt(0,0,-999,.01)),L=Array.from({length:Wr},()=>new Mt(1118481)),D=Ae=>new Di({uniforms:{u_matcap:{value:f},u_color:{value:new Mt(Ae.color)},u_bgColor:{value:new Mt(1316117)},u_roughness:{value:Ae.isRough?.8:.1},u_lightPosition:{value:p},u_selfPositionRadius:{value:new zt(0,0,0,1)},u_selfRotation:{value:new zt(0,0,0,1)},u_nearPositionRadiusList:{value:M.map(Me=>Me.clone())},u_nearColorList:{value:L.map(Me=>Me.clone())}},vertexShader:Ny,fragmentShader:Oy});for(const Ae of g){const Me=D(Ae),B=new Si(d,Me);B.frustumCulled=!1,B.scale.setScalar(Ae.radius),s.add(B),m.push(B),w.push(Me),_.push(new Hy(Ae.radius,Ae.density,Ae.friction,Ae.restitution,v,!1)),b.push({i:m.length-1,d2:0})}const A=new Di({uniforms:{u_color0:{value:new Mt(i)},u_color1:{value:new Mt(1316117)},u_aspect:{value:1}},vertexShader:Fy,fragmentShader:By,depthWrite:!1}),I=new Si(new $o(90,60),A);I.position.z=-12,I.renderOrder=-1e3,s.add(I);const T=new Pt(0,0),S=new K,U=new K,z=new K,V=new K,Z=new K,Q=new K,q=new K,X=new K,G=new K,le=new K,N=new ss,ye=.025,Fe=.1,Xe=.12,te=Ae=>{const Me=(e||r).getBoundingClientRect();T.x=(Ae.clientX-Me.left)/Me.width*2-1,T.y=-((Ae.clientY-Me.top)/Me.height*2-1)};window.addEventListener("pointermove",te);const ce=()=>{n=(n+1)%Ua.length,i=Ua[n],m.forEach((Ae,Me)=>{const B=g[Me];B.isColored&&(Ae.material.uniforms.u_color.value.set(i),B.color=i)}),A.uniforms.u_color0.value.set(i),_.forEach(Ae=>Ae.applyImpulse())},he=()=>ce();r.addEventListener("click",he),e==null||e.addEventListener("click",he);const fe=()=>{const Ae=e||r.parentElement,Me=Ae.clientWidth,B=Ae.clientHeight,pt=Me/Math.max(B,1);o.fov=Yf(pt,2.2,2/3,18,30),o.aspect=pt,o.updateProjectionMatrix(),a.setSize(Me,B,!1),A.uniforms.u_aspect.value=pt};fe(),window.addEventListener("resize",fe);let Pe=0,Be=performance.now();const Ye=performance.now(),et=Ae=>{Pe=requestAnimationFrame(et);let Me=Math.min(.05,(Ae-Be)/1e3);Be=Ae;const B=t?1:2;Me/=B;const pt=(Ae-Ye)/1e3,qe=Yf(pt,.3,2,25,17.5);o.position.z=qe;for(let H=0;H<B;H++){const Ie=new K(T.x,T.y,.5).unproject(o);Ie.sub(o.position).normalize();const Ze=(0-o.position.z)/Ie.z;S.copy(o.position).addScaledVector(Ie,Ze),z.copy(S).sub(U).multiplyScalar(Xe/Math.max(Me,.001)),V.copy(S).sub(o.position);const Te=V.lengthSq()||1;U.copy(S);for(let P=0;P<_.length;P++){const E=_[P];E.updateGravity(Me),Q.copy(E.velocity),q.copy(E.position);for(let ie=P+1;ie<_.length;ie++){const _e=_[ie];G.copy(_e.velocity),le.copy(_e.position),Z.copy(q).sub(le);const Se=Z.length(),Ee=E.radius+_e.radius;if(Se<Ee&&Se>1e-6){const Je=Math.sqrt(E.friction*_e.friction);E.frictionTot+=Je,_e.frictionTot+=Je,Z.normalize(),Z.multiplyScalar(.5*(Se-Ee)),q.sub(Z),le.add(Z),Z.normalize();const de=Q.dot(Z),ge=G.dot(Z),Oe=E.mass,Ue=_e.mass,De=(Oe*de+Ue*ge-Ue*(de-ge)*E.restitution)/(Oe+Ue),$e=(Oe*de+Ue*ge-Oe*(ge-de)*_e.restitution)/(Oe+Ue);Q.addScaledVector(Z,(De-de)/(1+Je)),G.addScaledVector(Z,($e-ge)/(1+Je)),_e.position.copy(le),_e.velocity.copy(G)}}X.copy(q).sub(o.position);let Y=X.dot(V)/Te;Y=X.sub(G.copy(V).multiplyScalar(Y)).length()-E.radius-ye,Y<0&&(X.copy(q).sub(o.position).cross(V).normalize(),G.copy(V).cross(X).normalize(),q.sub(G.multiplyScalar(Fe*Y)),G.multiplyScalar(-Xe/Math.max(Me,.001)),Q.add(G),Q.add(z));let ae=q.length();if(ae>0){X.set(1,1,1).normalize();let ie=1-Math.abs(X.dot(G.copy(q).normalize()));ie*=Me*Math.min(1,Math.max(0,ae/2))*.5,ie*=P%2*2-1,N.setFromAxisAngle(X,ie),G.copy(q).applyQuaternion(N).sub(X.copy(q)),Q.add(G)}X.crossVectors(q,Q);let se=X.length();se/=E.inertia,se>0&&(X.normalize(),N.setFromAxisAngle(X,se*Me),E.quaternion.premultiply(N)),E.position.copy(q),E.velocity.copy(Q),E.update(Me),["x","y","z"].forEach(ie=>{const _e=ie==="z"?5.5:7.5;E.position[ie]>_e&&(E.position[ie]=_e,E.velocity[ie]*=-.55),E.position[ie]<-_e&&(E.position[ie]=-_e,E.velocity[ie]*=-.55)})}}for(let H=0;H<m.length;H++){const Ie=m[H],Ze=_[H];Ie.position.copy(Ze.position),Ie.quaternion.copy(Ze.quaternion);const Te=w[H].uniforms;Te.u_selfPositionRadius.value.set(Ze.position.x,Ze.position.y,Ze.position.z,Ze.radius),Te.u_selfRotation.value.set(Ze.quaternion.x,Ze.quaternion.y,Ze.quaternion.z,Ze.quaternion.w),Te.u_bgColor.value.copy(A.uniforms.u_color1.value)}for(let H=0;H<m.length;H++){for(let Te=0;Te<m.length;Te++)b[Te].i=Te,b[Te].d2=H===Te?0:_[H].position.distanceToSquared(_[Te].position);b.sort((Te,P)=>Te.d2-P.d2);const Ie=w[H].uniforms.u_nearPositionRadiusList.value,Ze=w[H].uniforms.u_nearColorList.value;for(let Te=0;Te<Wr;Te++){const P=b[Te+1]?b[Te+1].i:b[0].i,E=_[P];Ie[Te].set(E.position.x,E.position.y,E.position.z,E.radius),Ze[Te].copy(w[P].uniforms.u_color.value)}}o.position.x+=(T.x*.9-o.position.x)*.04,o.position.y+=(T.y*.55-o.position.y)*.04,o.lookAt(0,0,0),a.render(s,o)};return Pe=requestAnimationFrame(et),{cycleColor:ce,destroy(){cancelAnimationFrame(Pe),window.removeEventListener("pointermove",te),window.removeEventListener("resize",fe),r.removeEventListener("click",he),e==null||e.removeEventListener("click",he),w.forEach(Ae=>Ae.dispose()),A.dispose(),a.dispose()}}}qs.registerPlugin(ct);const Gy=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),rm=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};rm();window.addEventListener("resize",rm);const sh=new gm({duration:Gy?.95:1.2,smoothWheel:!0,syncTouch:!1});sh.on("scroll",ct.update);qs.ticker.add(r=>sh.raf(r*1e3));qs.ticker.lagSmoothing(0);const qf=document.getElementById("project-list");qf&&(qf.innerHTML=ng.map(r=>`
    <a class="project-item" href="${r.url}" target="_blank" rel="noreferrer" data-reveal>
      <div class="project-item-main">
        <div class="project-item-image" style="background:${r.hue}"><span>${r.title}</span></div>
      </div>
      <div class="project-item-line-1">${r.tags}</div>
      <div class="project-item-line-2">${r.title}</div>
    </a>`).join(""));const Wy=document.getElementById("hero-canvas"),Xy=document.getElementById("home-hero-visual-container"),Ts=document.getElementById("home-hero");Vy(Wy,Xy).then(()=>{Ts==null||Ts.classList.add("is-in")}).catch(r=>{console.error("Balloons hero failed",r),Ts==null||Ts.classList.add("is-in")});function sm(r,e="word"){if(!r)return;const n=r.textContent.trim().split(/\s+/);r.textContent="",n.forEach((i,s)=>{const o=document.createElement("span");o.className=e,o.textContent=i,o.style.transitionDelay=`${s*35}ms`,r.appendChild(o),r.appendChild(document.createTextNode(" "))})}sm(document.getElementById("home-hero-title"));sm(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var r;(r=document.getElementById("home-hero-title"))==null||r.classList.add("is-in")});const Yy=document.querySelectorAll(".home-hero-scroll-container-cross");Yy.forEach((r,e)=>{r.style.transitionDelay=`${.15+e*.08}s`});document.querySelectorAll("[data-reveal]").forEach((r,e)=>{ct.create({trigger:r,start:"top 88%",onEnter:()=>{r.style.transitionDelay=`${e%4*60}ms`,r.classList.add("is-in")}})});qs.utils.toArray("#home-reel-title, #home-reel-desc, #home-featured-title, #home-goal-tunnel-title").forEach(r=>{qs.from(r,{y:48,opacity:0,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 85%"}})});const om=document.querySelector("[data-menu]");var Zf;(Zf=document.querySelector("[data-menu-open]"))==null||Zf.addEventListener("click",()=>{om.hidden=!1,document.body.style.overflow="hidden"});document.querySelectorAll("[data-menu-close]").forEach(r=>{r.addEventListener("click",()=>{om.hidden=!0,document.body.style.overflow=""})});var $f;($f=document.querySelector("[data-reel]"))==null||$f.addEventListener("click",r=>{const e=r.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var Kf;(Kf=document.querySelector("[data-sound]"))==null||Kf.addEventListener("click",r=>{r.currentTarget.classList.toggle("is-on")});var Jf;(Jf=document.querySelector("#end-bottom"))==null||Jf.addEventListener("click",r=>{r.preventDefault(),sh.scrollTo("#footer-section")});
