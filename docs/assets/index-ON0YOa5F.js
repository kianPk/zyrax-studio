var sm=Object.defineProperty;var om=(r,e,t)=>e in r?sm(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Xe=(r,e,t)=>om(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var sh="1.3.27";function Kf(r,e,t){return Math.max(r,Math.min(e,t))}function am(r,e,t){return(1-t)*r+t*e}function lm(r,e,t,n){return am(r,e,1-Math.exp(-t*n))}function cm(r,e){return(r%e+e)%e}var um=class{constructor(){Xe(this,"isRunning",!1);Xe(this,"value",0);Xe(this,"from",0);Xe(this,"to",0);Xe(this,"currentTime",0);Xe(this,"lerp");Xe(this,"duration");Xe(this,"easing");Xe(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Kf(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=lm(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function hm(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var fm=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Xe(this,"width",0);Xe(this,"height",0);Xe(this,"scrollHeight",0);Xe(this,"scrollWidth",0);Xe(this,"debouncedResize");Xe(this,"wrapperResizeObserver");Xe(this,"contentResizeObserver");Xe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Xe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Xe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=hm(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Jf=class{constructor(){Xe(this,"events",{})}emit(r,...e){var n;const t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const dm=100/6,tr={passive:!1};function oh(r,e){return r===1?dm:r===2?e:1}var pm=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Xe(this,"touchStart",{x:0,y:0});Xe(this,"lastDelta",{x:0,y:0});Xe(this,"window",{width:0,height:0});Xe(this,"emitter",new Jf);Xe(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Xe(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Xe(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Xe(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=oh(n,this.window.width),s=oh(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Xe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,tr),this.element.addEventListener("touchstart",this.onTouchStart,tr),this.element.addEventListener("touchmove",this.onTouchMove,tr),this.element.addEventListener("touchend",this.onTouchEnd,tr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,tr),this.element.removeEventListener("touchstart",this.onTouchStart,tr),this.element.removeEventListener("touchmove",this.onTouchMove,tr),this.element.removeEventListener("touchend",this.onTouchEnd,tr)}};const ah=r=>Math.min(1,1.001-2**(-10*r));var mm=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:v=!0,prevent:_,virtualScroll:m,overscroll:w=!0,autoRaf:T=!1,anchors:M=!1,autoToggle:L=!1,allowNestedScroll:D=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:U=A,stopInertiaOnNavigate:E=!1,respectReducedMotion:S=!0}={}){Xe(this,"_isScrolling",!1);Xe(this,"_isStopped",!1);Xe(this,"_isLocked",!1);Xe(this,"_preventNextNativeScrollEvent",!1);Xe(this,"_resetVelocityTimeout",null);Xe(this,"_rafId",null);Xe(this,"_isDraggingSelection",!1);Xe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Xe(this,"isTouching");Xe(this,"isIos");Xe(this,"time",0);Xe(this,"userData",{});Xe(this,"lastVelocity",0);Xe(this,"velocity",0);Xe(this,"direction",0);Xe(this,"options");Xe(this,"targetScroll");Xe(this,"animatedScroll");Xe(this,"animate",new um);Xe(this,"emitter",new Jf);Xe(this,"dimensions");Xe(this,"virtualScroll");Xe(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Xe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Xe(this,"onTransitionEnd",r=>{var e;(e=r.propertyName)!=null&&e.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Xe(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Xe(this,"onPointerDown",r=>{r.button===1&&this.reset()});Xe(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var v,_,m,w,T;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((v=g.hasAttribute)==null?void 0:v.call(g,"data-lenis-prevent"))||h==="vertical"&&((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-horizontal"))||i&&((w=g.hasAttribute)==null?void 0:w.call(g,"data-lenis-prevent-touch"))||s&&((T=g.hasAttribute)==null?void 0:T.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,p=i&&n.type==="touchend";p&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Xe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Xe(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=sh,window.lenis||(window.lenis={}),window.lenis.version=sh,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=ah:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:p,wheelMultiplier:g,autoResize:v,prevent:_,virtualScroll:m,overscroll:w,autoRaf:T,anchors:M,autoToggle:L,allowNestedScroll:D,naiveDimensions:U,stopInertiaOnNavigate:E,respectReducedMotion:S},this.dimensions=new fm(r,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new pm(t,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=r,p=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let g=null;if(typeof d=="string"?(g=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),g||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(g=d),g){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?M.left:M.top}const v=g.getBoundingClientRect(),_=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),w=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(w.scrollPaddingLeft):Number.parseFloat(w.scrollPaddingTop);d=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(T)?0:T)}}if(typeof d=="number"){if(d+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=d-this.animatedScroll;g>this.limit/2?d-=this.limit:g<-this.limit/2&&(d+=this.limit)}}else d=Kf(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=ah:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),v||this.emit(),v&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,h,f,d,p,g;if(n-(i.time??0)>2e3){i.time=Date.now();const D=window.getComputedStyle(r);if(i.computedStyle=D,s=["auto","overlay","scroll"].includes(D.overflowX),o=["auto","overlay","scroll"].includes(D.overflowY),c=["auto"].includes(D.overscrollBehaviorX),h=["auto"].includes(D.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,d=r.scrollHeight,p=r.clientWidth,g=r.clientHeight,a=f>p,l=d>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=d,i.clientWidth=p,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,d=i.scrollHeight,p=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,m,w,T,M,L;if(v==="horizontal")_=Math.round(r.scrollLeft),m=f-p,w=e,T=s,M=a,L=c;else if(v==="vertical")_=Math.round(r.scrollTop),m=d-g,w=t,T=o,M=l,L=h;else return!1;return!L&&(_>=m||_<=0)?!0:(w>0?_<m:_>0)&&T&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?cm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function jf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Io={duration:.5,overwrite:!1,delay:0},Mu,un,Bt,ai=1e8,Lt=1/ai,cc=Math.PI*2,_m=cc/4,gm=0,Qf=Math.sqrt,vm=Math.cos,xm=Math.sin,an=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},Ji=function(e){return typeof e=="number"},yu=function(e){return typeof e>"u"},Ci=function(e){return typeof e=="object"},Ln=function(e){return e!==!1},Eu=function(){return typeof window<"u"},Jo=function(e){return Wt(e)||an(e)},ed=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,Sm=/random\([^)]+\)/g,Mm=/,\s*/g,lh=/(?:-?\.?\d|\.)+/gi,td=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_l=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nd=/[+-]=-?[.\d]+/,ym=/[^,'"\[\]\s]+/gi,Em=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,Mi,uc,Tu,jn={},$a={},id,rd=function(e){return($a=Hs(e,jn))&&Fn},bu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Uo=function(e,t){return!t&&console.warn(e)},sd=function(e,t){return e&&(jn[e]=t)&&$a&&($a[e]=t)||jn},No=function(){return 0},Tm={suppressEvents:!0,isStart:!0,kill:!1},Ua={suppressEvents:!0,kill:!1},bm={suppressEvents:!0},wu={},_r=[],hc={},od,Gn={},gl={},ch=30,Na=[],Au="",Ru=function(e){var t=e[0],n,i;if(Ci(t)||Wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Na.length;i--&&!Na[i].targetTest(t););n=Na[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Rd(e[i],n)))||e.splice(i,1);return e},Wr=function(e){return e._gsap||Ru(li(e))[0]._gsap},ad=function(e,t,n){return(n=e[t])&&Wt(n)?e[t]():yu(n)&&e.getAttribute&&e.getAttribute(t)||n},In=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Ds=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},wm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ka=function(){var e=_r.length,t=_r.slice(0),n,i;for(hc={},_r.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Cu=function(e){return!!(e._initted||e._startAt||e.add)},ld=function(e,t,n,i){_r.length&&!un&&Ka(),e.render(t,n,!!(un&&t<0&&Cu(e))),_r.length&&!un&&Ka()},cd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ym).length<2?t:an(e)?e.trim():e},ud=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Am=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Hs=function(e,t){for(var n in t)e[n]=t[n];return e},uh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ci(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ja=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},So=function(e){var t=e.parent||kt,n=e.keyframes?Am(gn(e.keyframes)):Qn;if(Ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Rm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},hd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ll=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Cm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},fc=function(e,t,n,i){return e._startAt&&(un?e._startAt.revert(Ua):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Pm=function r(e){return!e||e._ts&&r(e.parent)},hh=function(e){return e._repeat?Vs(e._tTime,e=e.duration()+e._rDelay)*e:0},Vs=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},ja=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},cl=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},ul=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),cl(e),n._dirty||Xr(n,e)),e},fd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ja(e.rawTime(),t),(!t._dur||Wo(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),Xr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},Ti=function(e,t,n,i){return t.parent&&Sr(t),t._start=zt((Ji(n)?n:n||e!==kt?ti(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hd(e,t,"_first","_last",e._sort?"_start":0),dc(t)||(e._recent=t),i||fd(e,t),e._ts<0&&ul(e,e._tTime),e},dd=function(e,t){return(jn.ScrollTrigger||bu("scrollTrigger",t))&&jn.ScrollTrigger.create(t,e)},pd=function(e,t,n,i,s){if(Du(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&od!==Xn.frame)return _r.push(e),e._lazy=[s,i],1},Dm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},dc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Lm=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Dm(e)&&!(!e._initted&&dc(e))||(e._ts<0||e._dp._ts<0)&&!dc(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=Wo(0,e._tDur,t),h=Vs(l,a),e._yoyo&&h&1&&(o=1-o),h!==Vs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||un||i||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&pd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&fc(e,t,n,!0),e._onUpdate&&!n&&qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Sr(e,1),!n&&!un&&(qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Im=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Gs=function(e,t,n,i){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ul(e,e._tTime=e._tDur*a),e.parent&&cl(e),n||Xr(e.parent,e),e},fh=function(e){return e instanceof Dn?Xr(e):Gs(e,e._dur)},Um={_start:0,endTime:No,totalDuration:No},ti=function r(e,t,n){var i=e.labels,s=e._recent||Um,o=e.duration()>=ai?s.endTime(!1):e._dur,a,l,c;return an(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Mo=function(e,t,n){var i=Ji(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;o.immediateRender=Ln(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Kt(t[0],o,t[s+1])},br=function(e,t){return e||e===0?t(e):t},Wo=function(e,t,n){return n<e?e:n>t?t:n},mn=function(e,t){return!an(e)||!(t=Em.exec(e))?"":t[1]},Nm=function(e,t,n){return br(n,function(i){return Wo(e,t,i)})},pc=[].slice,md=function(e,t){return e&&Ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==Mi},Om=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return an(i)&&!t||md(i,1)?(s=n).push.apply(s,li(i)):n.push(i)})||n},li=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):an(e)&&!n&&(uc||!Ws())?pc.call((t||Tu).querySelectorAll(e),0):gn(e)?Om(e,n):md(e)?pc.call(e,0):e?[e]:[]},mc=function(e){return e=li(e)[0]||Uo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return li(t,n.querySelectorAll?n:n===e?Uo("Invalid scope")||Tu.createElement("div"):e)}},_d=function(e){return e.sort(function(){return .5-Math.random()})},gd=function(e){if(Wt(e))return e;var t=Ci(e)?e:{each:e},n=Yr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return an(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,p,g){var v=(g||t).length,_=o[v],m,w,T,M,L,D,A,U,E;if(!_){if(E=t.grid==="auto"?0:(t.grid||[1,ai])[1],!E){for(A=-ai;A<(A=g[E++].getBoundingClientRect().left)&&E<v;);E<v&&E--}for(_=o[v]=[],m=l?Math.min(E,v)*h-.5:i%E,w=E===ai?0:l?v*f/E-.5:i/E|0,A=0,U=ai,D=0;D<v;D++)T=D%E-m,M=w-(D/E|0),_[D]=L=c?Math.abs(c==="y"?M:T):Qf(T*T+M*M),L>A&&(A=L),L<U&&(U=L);i==="random"&&_d(_),_.max=A-U,_.min=U,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(E>v?v-1:c?c==="y"?v/E:E:Math.max(E,v/E))||0)*(i==="edges"?-1:1),_.b=v<0?s-v:s,_.u=mn(t.amount||t.each)||0,n=n&&v<0?$m(n):n}return v=(_[d]-_.min)/_.max||0,zt(_.b+(n?n(v):v)*_.v)+_.u}},_c=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ji(n)?0:mn(n))}},vd=function(e,t){var n=gn(e),i,s;return!n&&Ci(e)&&(i=n=e.radius||ai,e.values?(e=li(e.values),(s=!Ji(e[0]))&&(i*=i)):e=_c(e.increment)),br(t,n?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ai,h=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?e[h]:o,s||h===o||Ji(o)?h:h+mn(o)}:_c(e))},xd=function(e,t,n,i){return br(gn(e)?!t:n===!0?!!(n=0):!i,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Fm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Bm=function(e,t){return function(n){return e(parseFloat(n))+(t||mn(n))}},zm=function(e,t,n){return Md(e,t,0,1,n)},Sd=function(e,t,n){return br(n,function(i){return e[~~t(i)]})},km=function r(e,t,n){var i=t-e;return gn(e)?Sd(e,r(0,e.length),t):br(n,function(s){return(i+(s-e)%i)%i+e})},Hm=function r(e,t,n){var i=t-e,s=i*2;return gn(e)?Sd(e,r(0,e.length-1),t):br(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Oo=function(e){return e.replace(Sm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Mm);return xd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Md=function(e,t,n,i,s){var o=t-e,a=i-n;return br(s,function(l){return n+((l-e)/o*a||0)})},Vm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=an(e),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var v=Math.min(d,~~g);return h[v](g-v)},n=t}else i||(e=Hs(gn(e)?[]:{},e));if(!h){for(l in t)Pu.call(a,e,l,"get",t[l]);s=function(g){return Uu(g,a)||(o?e.p:e)}}}return br(n,s)},dh=function(e,t,n){var i=e.labels,s=ai,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(e,t,n){var i=e.vars,s=i[t],o=Bt,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&_r.length&&Ka(),a&&(Bt=a),h=l?s.apply(c,l):s.call(c),Bt=o,h},uo=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&qn(e,"onInterrupt"),e},As,yd=[],Ed=function(e){if(e)if(e=!e.name&&e.default||e,Eu()||e.headless){var t=e.name,n=Wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:No,render:Uu,add:Pu,kill:s_,modifier:r_,rawVars:0},o={targetTest:0,get:0,getSetter:Iu,aliases:{},register:0};if(Ws(),e!==i){if(Gn[t])return;Qn(i,Qn(Ja(e,s),o)),Hs(i.prototype,Hs(s,Ja(e,o))),Gn[i.prop=t]=i,e.targetTest&&(Na.push(i),wu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}sd(t,i),e.register&&e.register(Fn,i,Un)}else yd.push(e)},Dt=255,ho={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},vl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},Td=function(e,t,n){var i=e?Ji(e)?[e>>16,e>>8&Dt,e&Dt]:0:ho.black,s,o,a,l,c,h,f,d,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ho[e])i=ho[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(lh),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=vl(l+1/3,s,o),i[1]=vl(l,s,o),i[2]=vl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(td),n&&i.length<4&&(i[3]=1),i}else i=e.match(lh)||ho.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Dt,o=i[1]/Dt,a=i[2]/Dt,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(p=f-d,c=h>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},bd=function(e){var t=[],n=[],i=-1;return e.split(gr).forEach(function(s){var o=s.match(ws)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ph=function(e,t,n){var i="",s=(e+i).match(gr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return e;if(s=s.map(function(d){return(d=Td(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=bd(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(gr,"1").split(ws),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(gr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},gr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ho)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Gm=/hsl[a]?\(/,wd=function(e){var t=e.join(" "),n;if(gr.lastIndex=0,gr.test(t))return n=Gm.test(t),e[1]=ph(e[1],n),e[0]=ph(e[0],n,bd(e[1])),!0},Fo,Xn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,d,p,g=function v(_){var m=r()-i,w=_===!0,T,M,L,D;if((m>e||m<0)&&(n+=m-t),i+=m,L=i-n,T=L-o,(T>0||w)&&(D=++f.frame,d=L-f.time*1e3,f.time=L=L/1e3,o+=T+(T>=s?4:s-T),M=1),w||(l=c(v)),M)for(p=0;p<a.length;p++)a[p](L,d,D,_)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){id&&(!uc&&Eu()&&(Mi=uc=window,Tu=Mi.document||{},jn.gsap=Fn,(Mi.gsapVersions||(Mi.gsapVersions=[])).push(Fn.version),rd($a||Mi.GreenSockGlobals||!Mi.gsap&&Mi||{}),yd.forEach(Ed)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(_){return setTimeout(_,o-f.time*1e3+1|0)},Fo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Fo=0,c=No},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){s=1e3/(_||240),o=f.time*1e3+s},add:function(_,m,w){var T=m?function(M,L,D,A){_(M,L,D,A),f.remove(T)}:_;return f.remove(_),a[w?"unshift":"push"](T),Ws(),T},remove:function(_,m){~(m=a.indexOf(_))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},f})(),Ws=function(){return!Fo&&Xn.wake()},_t={},Wm=/^[\d.\-M][\d.\-,\s]/,Xm=/["']/g,Ym=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Xm,"").trim():+c,i=l.substr(a+1).trim();return t},qm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Zm=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ym(t[1])]:qm(e).split(",").map(cd)):_t._CE&&Wm.test(e)?_t._CE("",e):n},$m=function(e){return function(t){return 1-e(1-t)}},Yr=function(e,t){return e&&(Wt(e)?e:_t[e]||Zm(e))||t},is=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return In(e,function(a){_t[a]=jn[a]=s,_t[o=a.toLowerCase()]=n;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},Ad=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/cc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*xm((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ad(a);return s=cc/s,l.config=function(c,h){return r(e,c,h)},l},Sl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ad(n);return i.config=function(s){return r(e,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;is(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;is("Elastic",xl("in"),xl("out"),xl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);is("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});is("Circ",function(r){return-(Qf(1-r*r)-1)});is("Sine",function(r){return r===1?1:-vm(r*_m)+1});is("Back",Sl("in"),Sl("out"),Sl());_t.SteppedEase=_t.steps=jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Lt;return function(a){return((i*Wo(0,o,a)|0)+s)*n}}};Io.ease=_t["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Au+=r+","+r+"Params,"});var Rd=function(e,t){this.id=gm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ad,this.set=t?t.getSetter:Iu},Bo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Gs(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Fo||Xn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Gs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ul(this,n),!s._dp||s.parent||fd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Lt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ld(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Vs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ja(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(Wo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),cl(this),Cm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ti(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ja(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bm);var i=un;return un=n,Cu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ti(this,n),Ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i)),this._dur||(this._zTime=-Lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Lt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Wt(n)?n:ud,l=function(){var h=i.then;i.then=null,s&&s(),Wt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){uo(this)},r})();Qn(Bo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var Dn=(function(r){jf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ln(n.sortChildren),kt&&Ti(n.parent||kt,zi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&dd(zi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Mo(0,arguments,this),this},t.from=function(i,s,o){return Mo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Mo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,So(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,ti(this,o),1),this},t.call=function(i,s,o){return Ti(this,Kt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Kt(i,o,ti(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,So(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,So(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:zt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,p,g,v,_,m,w,T,M,L,D,A;if(this!==kt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,M=this._start,T=this._ts,m=!T,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(d=zt(h%_),h===l?(v=this._repeat,d=c):(L=zt(h/_),v=~~L,v&&v===L&&(d=c,v--),d>c&&(d=c)),L=Vs(this._tTime,_),!a&&this._tTime&&L!==v&&this._tTime-L*_-this._dur<=0&&(L=v),D&&v&1&&(d=c-d,A=1),v!==L&&!this._lock){var U=D&&L&1,E=U===(D&&v&1);if(v<L&&(U=!U),a=U?0:h%c?c:h,this._lock=1,this.render(a||(A?0:zt(v*_)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,L=v),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Im(this,zt(a),zt(d)),w&&(h-=d-(d=w._start))),this._tTime=h,this._time=d,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!L&&(qn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&w!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!m){w=0,g&&(h+=this._zTime=-Lt);break}}p=g}else{p=this._last;for(var S=i<0?i:d;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&w!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||un&&Cu(p)),d!==this._time||!this._ts&&!m){w=0,g&&(h+=this._zTime=S?-Lt:Lt);break}}p=g}}if(w&&!s&&(this.pause(),w.render(d>=a?0:-Lt)._zTime=d>=a?1:-1,this._ts))return this._start=M,cl(this),this.render(i,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Sr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(qn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ji(s)||(s=ti(this,s,i)),!(i instanceof Bo)){if(gn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(an(i))return this.addLabel(i,s);if(Wt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Ti(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ai);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Kt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return an(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(i.parent===this&&ll(this,i),i===this._recent&&(this._recent=this._last),Xr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(Xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ti(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Kt.delayedCall(0,s||No,o);return a.data="isPause",this._hasPause=1,Ti(this,a,ti(this,i))},t.removePause=function(i){var s=this._first;for(i=ti(this,i);s;)s._start===i&&s.data==="isPause"&&Sr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ur!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=li(i),l=this._first,c=Ji(s),h;l;)l instanceof Kt?wm(l._targets,a)&&(c?(!ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ti(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,p,g=Kt.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Lt,onStart:function(){if(o.pause(),!p){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==_&&Gs(g,_,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Qn({startAt:{time:ti(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),dh(this,ti(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),dh(this,ti(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=zt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Xr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ai,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ti(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=zt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Gs(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(kt._ts&&(ld(kt,ja(i,kt)),od=Xn.frame),Xn.frame>=ch){ch+=$n.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&$n.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},e})(Bo);Qn(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Km=function(e,t,n,i,s,o,a){var l=new Un(this._pt,e,t,0,1,Ud,null,s),c=0,h=0,f,d,p,g,v,_,m,w;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Oo(i)),o&&(w=[n,i],o(w,e,t),n=w[0],i=w[1]),d=n.match(_l)||[];f=_l.exec(i);)g=f[0],v=i.substring(c,f.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),g!==d[h++]&&(_=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:_,c:g.charAt(1)==="="?Ds(_,g)-_:parseFloat(g)-_,m:p&&p<4?Math.round:0},c=_l.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(nd.test(i)||m)&&(l.e=0),this._pt=l,l},Pu=function(e,t,n,i,s,o,a,l,c,h){Wt(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Wt(f)?c?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=Wt(f)?c?t_:Ld:Lu,g;if(an(i)&&(~i.indexOf("random(")&&(i=Oo(i)),i.charAt(1)==="="&&(g=Ds(d,i)+(mn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||gc)return!isNaN(d*i)&&i!==""?(g=new Un(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?i_:Id,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&bu(t,i),Km.call(this,e,t,d,i,p,l||$n.stringFilter,c))},Jm=function(e,t,n,i,s){if(Wt(e)&&(e=yo(e,s,t,n,i)),!Ci(e)||e.style&&e.nodeType||gn(e)||ed(e))return an(e)?yo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=yo(e[a],s,t,n,i);return o},Cd=function(e,t,n,i,s,o){var a,l,c,h;if(Gn[e]&&(a=new Gn[e]).init(s,a.rawVars?t[e]:Jm(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Un(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==As))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ur,gc,Du=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,p=i.autoRevert,g=e._dur,v=e._startAt,_=e._targets,m=e.parent,w=m&&m.data==="nested"?m.vars.targets:_,T=e._overwrite==="auto"&&!Mu,M=e.timeline,L=i.easeReverse||f,D,A,U,E,S,I,B,H,W,J,$,Z,X;if(M&&(!d||!s)&&(s="none"),e._ease=Yr(s,Io.ease),e._rEase=L&&(Yr(L)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||d&&!i.stagger){if(H=_[0]?Wr(_[0]).harness:0,Z=H&&i[H.prop],D=Ja(i,wu),v&&(v._zTime<0&&v.progress(1),t<0&&h&&a&&!p?v.render(-1,!0):v.revert(h&&g?Ua:Tm),v._lazy=0),o){if(Sr(e._startAt=Kt.set(_,Qn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!v&&Ln(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un||!a&&!p)&&e._startAt.revert(Ua),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!v){if(t&&(a=!1),U=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!v&&Ln(l),immediateRender:a,stagger:0,parent:m},D),Z&&(U[H.prop]=Z),Sr(e._startAt=Kt.set(_,U)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un?e._startAt.revert(Ua):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ln(l)||l&&!g,A=0;A<_.length;A++){if(S=_[A],B=S._gsap||Ru(_)[A]._gsap,e._ptLookup[A]=J={},hc[B.id]&&_r.length&&Ka(),$=w===_?A:w.indexOf(S),H&&(W=new H).init(S,Z||D,e,$,w)!==!1&&(e._pt=E=new Un(e._pt,S,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ce){J[ce]=E}),W.priority&&(I=1)),!H||Z)for(U in D)Gn[U]&&(W=Cd(U,D,e,$,S,w))?W.priority&&(I=1):J[U]=E=Pu.call(e,S,U,"get",D[U],$,w,0,i.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),T&&e._pt&&(ur=e,kt.killTweensOf(S,J,e.globalTime(t)),X=!e.parent,ur=0),e._pt&&l&&(hc[B.id]=1)}I&&Nd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,d&&t<=0&&M.render(ai,!0,!0)},jm=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(h=d[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return gc=1,e.vars[t]="+=0",Du(e,a),gc=0,l?Uo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(p=c.length;p--;)f=c[p],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Yt(n)+mn(f.e)),f.b&&(f.b=h.s+mn(f.b))},Qm=function(e,t){var n=e[0]?Wr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Hs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},e_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(gn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},yo=function(e,t,n,i,s){return Wt(e)?e.call(t,n,i,s):an(e)&&~e.indexOf("random(")?Oo(e):e},Pd=Au+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Dd={};In(Pd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Dd[r]=1});var Kt=(function(r){jf(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:So(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,v=l.defaults,_=l.scrollTrigger,m=i.parent||kt,w=(gn(n)||ed(n)?Ji(n[0]):"length"in i)?[n]:li(n),T,M,L,D,A,U,E,S;if(a._targets=w.length?Ru(w):Uo("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||Jo(c)||Jo(h)){i=a.vars;var I=i.easeReverse||i.yoyoEase;if(T=a.timeline=new Dn({data:"nested",defaults:v||{},targets:m&&m.data==="nested"?m.vars.targets:w}),T.kill(),T.parent=T._dp=zi(a),T._start=0,d||Jo(c)||Jo(h)){if(D=w.length,E=d&&gd(d),Ci(d))for(A in d)~Pd.indexOf(A)&&(S||(S={}),S[A]=d[A]);for(M=0;M<D;M++)L=Ja(i,Dd),L.stagger=0,I&&(L.easeReverse=I),S&&Hs(L,S),U=w[M],L.duration=+yo(c,zi(a),M,U,w),L.delay=(+yo(h,zi(a),M,U,w)||0)-a._delay,!d&&D===1&&L.delay&&(a._delay=h=L.delay,a._start+=h,L.delay=0),T.to(U,L,E?E(M,U,w):0),T._ease=_t.none;T.duration()?c=h=0:a.timeline=0}else if(g){So(Qn(T.vars.defaults,{ease:"none"})),T._ease=Yr(g.ease||i.ease||"none");var B=0,H,W,J;if(gn(g))g.forEach(function($){return T.to(w,$,">")}),T.duration();else{L={};for(A in g)A==="ease"||A==="easeEach"||e_(A,g[A],L,g.easeEach);for(A in L)for(H=L[A].sort(function($,Z){return $.t-Z.t}),B=0,M=0;M<H.length;M++)W=H[M],J={ease:W.e,duration:(W.t-(M?H[M-1].t:0))/100*c},J[A]=W.v,T.to(w,J,B),B+=J.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return p===!0&&!Mu&&(ur=zi(a),kt.killTweensOf(w),ur=0),Ti(m,zi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===zt(m._time)&&Ln(f)&&Pm(zi(a))&&m.data!=="nested")&&(a._tTime=-Lt,a.render(Math.max(0,-h)||0)),_&&dd(zi(a),_),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Lt&&!h?l:i<Lt?0:i,d,p,g,v,_,m,w,T;if(!c)Lm(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,T=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+i,s,o);if(d=zt(f%v),f===l?(g=this._repeat,d=c):(_=zt(f/v),g=~~_,g&&g===_?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(d=c-d),_=Vs(this._tTime,v),d===a&&!o&&this._initted&&g===_)return this._tTime=f,this;g!==_&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==v&&this._initted&&(this._lock=o=1,this.render(zt(v*g),!0).invalidate()._lock=0)}if(!this._initted){if(pd(this,h?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var M=d<a;if(M!==this._inv){var L=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(M?-1:1)/L:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(d/c);if(this._from&&(this.ratio=w=1-w),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!_&&(qn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(w,p.d),p=p._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&fc(this,i,s,o),qn(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&fc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Sr(this,1),!s&&!(h&&!a)&&(f||a||m)&&(qn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Fo||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Du(this,c),h=this._ease(c/this._dur),jm(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(ul(this,0),this.parent||hd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?uo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ur&&ur.vars.overwrite!==!0)._first||uo(this),this.parent&&o!==this.timeline.totalDuration()&&Gs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?li(i):a,c=this._ptLookup,h=this._pt,f,d,p,g,v,_,m;if((!s||s==="all")&&Rm(a,l))return s==="all"&&(this._pt=0),uo(this);for(f=this._op=this._op||[],s!=="all"&&(an(s)&&(v={},In(s,function(w){return v[w]=1}),s=v),s=Qm(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(f[m]=s,g=d,p={}):(p=f[m]=f[m]||{},g=s);for(v in g)_=d&&d[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&ll(this,_,"_pt"),delete d[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&h&&uo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Mo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Mo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return kt.killTweensOf(i,s,o)},e})(Bo);Qn(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Dn,t=pc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Lu=function(e,t,n){return e[t]=n},Ld=function(e,t,n){return e[t](n)},t_=function(e,t,n,i){return e[t](i.fp,n)},n_=function(e,t,n){return e.setAttribute(t,n)},Iu=function(e,t){return Wt(e[t])?Ld:yu(e[t])&&e.setAttribute?n_:Lu},Id=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},i_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ud=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Uu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},r_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},s_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ll(this,t,"_pt"):t.dep||(n=1),t=i;return!n},o_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Nd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Un=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Id,this.d=l||this,this.set=c||Lu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=o_,this.m=n,this.mt=s,this.tween=i},r})();In(Au+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return wu[r]=1});jn.TweenMax=jn.TweenLite=Kt;jn.TimelineLite=jn.TimelineMax=Dn;kt=new Dn({sortChildren:!1,defaults:Io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=wd;var qr=[],Oa={},a_=[],mh=0,l_=0,Ml=function(e){return(Oa[e]||a_).map(function(t){return t()})},vc=function(){var e=Date.now(),t=[];e-mh>2&&(Ml("matchMediaInit"),qr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Mi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ml("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),mh=e,Ml("matchMedia"))},Od=(function(){function r(t,n){this.selector=n&&mc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=l_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Wt(n)&&(s=i,i=n,n=Wt);var o=this,a=function(){var c=Bt,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=mc(s)),Bt=o,f=i.apply(o,arguments),Wt(f)&&o._r.push(f),Bt=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Wt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=qr.length;o--;)qr[o].id===this.id&&qr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),c_=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ci(n)||(n={matches:n});var o=new Od(0,s||this.scope),a=o.conditions={},l,c,h;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Mi.matchMedia(n[c]),l&&(qr.indexOf(o)<0&&qr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(vc):l.addEventListener("change",vc)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Qa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ed(i)})},timeline:function(e){return new Dn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){an(e)&&(e=li(e)[0]);var s=Wr(e||{}).get,o=n?ud:cd;return n==="native"&&(n=""),e&&(t?o((Gn[t]&&Gn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Gn[a]&&Gn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=li(e),e.length>1){var i=e.map(function(h){return Fn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var o=Gn[t],a=Wr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;As._pt=0,f.init(e,n?h+n:h,As,0,[e]),f.render(1,f),As._pt&&Uu(1,As)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Fn.to(e,Qn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,Io.ease)),uh(Io,e||{})},config:function(e){return uh($n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Gn[a]&&!jn[a]&&Uo(t+" effect requires "+a+" plugin.")}),gl[t]=function(a,l,c){return n(li(a),Qn(l||{},s),c)},o&&(Dn.prototype[t]=function(a,l,c){return this.add(gl[t](a,Ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):_t},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Dn(e),i,s;for(n.smoothChildTiming=Ln(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,i=kt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Ti(n,i,i._start-i._delay),i=s;return Ti(kt,n,0),n},context:function(e,t){return e?new Od(e,t):Bt},matchMedia:function(e){return new c_(e)},matchMediaRefresh:function(){return qr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||vc()},addEventListener:function(e,t){var n=Oa[e]||(Oa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Oa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:km,wrapYoyo:Hm,distribute:gd,random:xd,snap:vd,normalize:zm,getUnit:mn,clamp:Nm,splitColor:Td,toArray:li,selector:mc,mapRange:Md,pipe:Fm,unitize:Bm,interpolate:Vm,shuffle:_d},install:rd,effects:gl,ticker:Xn,updateRoot:Dn.updateRoot,plugins:Gn,globalTimeline:kt,core:{PropTween:Un,globals:sd,Tween:Kt,Timeline:Dn,Animation:Bo,getCache:Wr,_removeLinkedListItem:ll,reverting:function(){return un},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return Mu=e}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Qa[r]=Kt[r]});Xn.add(Dn.updateRoot);As=Qa.to({},{duration:0});var u_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},h_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=u_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},yl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(an(s)&&(l={},In(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}h_(a,s)}}}},Fn=Qa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},yl("roundProps",_c),yl("modifiers"),yl("snap",vd))||Qa;Kt.version=Dn.version=Fn.version="3.15.0";id=1;Eu()&&Ws();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _h,hr,Ls,Nu,Vr,gh,Ou,f_=function(){return typeof window<"u"},ji={},Nr=180/Math.PI,Is=Math.PI/180,ss=Math.atan2,vh=1e8,Fu=/([A-Z])/g,d_=/(left|right|width|margin|padding|x)/i,p_=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},m_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},__=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},g_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},v_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Fd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Bd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},x_=function(e,t,n){return e.style[t]=n},S_=function(e,t,n){return e.style.setProperty(t,n)},M_=function(e,t,n){return e._gsap[t]=n},y_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},E_=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},T_=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ht="transform",Nn=Ht+"Origin",b_=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ki(i,a)}):this.tfm[e]=o.x?o[e]:ki(i,e),e===Nn&&(this.tfm.zOrigin=o.zOrigin);else return wi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},zd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},w_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Fu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ou(),(!s||!s.isStart)&&!n[Ht]&&(zd(n),i.zOrigin&&n[Nn]&&(n[Nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},kd=function(e,t){var n={target:e,props:[],revert:w_,save:b_};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Hd,Sc=function(e,t){var n=hr.createElementNS?hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hr.createElement(e);return n&&n.style?n:hr.createElement(e)},Zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Fu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Xs(t)||t,1)||""},xh="O,Moz,ms,Ms,Webkit".split(","),Xs=function(e,t,n){var i=t||Vr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(xh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?xh[o]:"")+e},Mc=function(){f_()&&window.document&&(_h=window,hr=_h.document,Ls=hr.documentElement,Vr=Sc("div")||{style:{}},Sc("div"),Ht=Xs(Ht),Nn=Ht+"Origin",Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hd=!!Xs("perspective"),Ou=Fn.core.reverting,Nu=1)},Sh=function(e){var t=e.ownerSVGElement,n=Sc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ls.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ls.removeChild(n),s},Mh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Vd=function(e){var t,n;try{t=e.getBBox()}catch{t=Sh(e),n=1}return t&&(t.width||t.height)||n||(t=Sh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Mh(e,["x","cx","x1"])||0,y:+Mh(e,["y","cy","y1"])||0,width:0,height:0}:t},Gd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Vd(e))},Mr=function(e,t){if(t){var n=e.style,i;t in ji&&t!==Nn&&(t=Ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Fu,"-$1").toLowerCase())):n.removeAttribute(t)}},fr=function(e,t,n,i,s,o){var a=new Un(e._pt,t,n,0,1,o?Bd:Fd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},yh={deg:1,rad:1,turn:1},A_={grid:1,flex:1},yr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Vr.style,l=d_.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",p=i==="%",g,v,_,m;if(i===o||!s||yh[i]||yh[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&Gd(e),(p||o==="%")&&(ji[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Yt(p?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),v=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===hr||!v.appendChild)&&(v=hr.body),_=v._gsap,_&&p&&_.width&&l&&_.time===Xn.time&&!_.uncache)return Yt(s/_.width*f);if(p&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=f+i,g=e[h],w?e.style[t]=w:Mr(e,t)}else(p||o==="%")&&!A_[Zn(v,"display")]&&(a.position=Zn(e,"position")),v===e&&(a.position="static"),v.appendChild(Vr),g=Vr[h],v.removeChild(Vr),a.position="absolute";return l&&p&&(_=Wr(v),_.time=Xn.time,_.width=v[h]),Yt(d?g*s/f:g&&s?f/g*s:0)},ki=function(e,t,n,i){var s;return Nu||Mc(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ji[t]&&t!=="transform"?(s=ko(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:tl(Zn(e,Nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=el[t]&&el[t](e,t,n)||Zn(e,t)||ad(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yr(e,t,s,n)+n:s},R_=function(e,t,n,i){if(!n||n==="none"){var s=Xs(t,e,1),o=s&&Zn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var a=new Un(this._pt,e.style,t,0,1,Ud),l=0,c=0,h,f,d,p,g,v,_,m,w,T,M,L;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Zn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(v=e.style[t],e.style[t]=i,i=Zn(e,t)||i,v?e.style[t]=v:Mr(e,t)),h=[n,i],wd(h),n=h[0],i=h[1],d=n.match(ws)||[],L=i.match(ws)||[],L.length){for(;f=ws.exec(i);)_=f[0],w=i.substring(l,f.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),_!==(v=d[c++]||"")&&(p=parseFloat(v)||0,M=v.substr((p+"").length),_.charAt(1)==="="&&(_=Ds(p,_)+M),m=parseFloat(_),T=_.substr((m+"").length),l=ws.lastIndex-T.length,T||(T=T||$n.units[t]||M,l===i.length&&(i+=T,a.e+=T)),M!==T&&(p=yr(e,t,v,T)||0),a._pt={_next:a._pt,p:w||c===1?w:",",s:p,c:m-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Bd:Fd;return nd.test(i)&&(a.e=0),this._pt=a,a},Eh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},C_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Eh[n]||n,t[1]=Eh[i]||i,t.join(" ")},P_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ji[a]&&(l=1,a=a==="transformOrigin"?Nn:Ht),Mr(n,a);l&&(Mr(n,Ht),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ko(n,1),o.uncache=1,zd(i)))}},el={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Un(e._pt,t,n,0,0,P_);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},zo=[1,0,0,1,0,0],Wd={},Xd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Th=function(e){var t=Zn(e,Ht);return Xd(t)?zo:t.substr(7).match(td).map(Yt)},Bu=function(e,t){var n=e._gsap||Wr(e),i=e.style,s=Th(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?zo:s):(s===zo&&!e.offsetParent&&e!==Ls&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ls.appendChild(e)),s=Th(e),l?i.display=l:Mr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ls.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},yc=function(e,t,n,i,s,o){var a=e._gsap,l=s||Bu(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],v=l[2],_=l[3],m=l[4],w=l[5],T=t.split(" "),M=parseFloat(T[0])||0,L=parseFloat(T[1])||0,D,A,U,E;n?l!==zo&&(A=p*_-g*v)&&(U=M*(_/A)+L*(-v/A)+(v*w-_*m)/A,E=M*(-g/A)+L*(p/A)-(p*w-g*m)/A,M=U,L=E):(D=Vd(e),M=D.x+(~T[0].indexOf("%")?M/100*D.width:M),L=D.y+(~(T[1]||T[0]).indexOf("%")?L/100*D.height:L)),i||i!==!1&&a.smooth?(m=M-c,w=L-h,a.xOffset=f+(m*p+w*v)-m,a.yOffset=d+(m*g+w*_)-w):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=L,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Nn]="0px 0px",o&&(fr(o,a,"xOrigin",c,M),fr(o,a,"yOrigin",h,L),fr(o,a,"xOffset",f,a.xOffset),fr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+L)},ko=function(e,t){var n=e._gsap||new Rd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Zn(e,Nn)||"0",h,f,d,p,g,v,_,m,w,T,M,L,D,A,U,E,S,I,B,H,W,J,$,Z,X,ce,N,Me,Ne,Ye,te,le;return h=f=d=v=_=m=w=T=M=0,p=g=1,n.svg=!!(e.getCTM&&Gd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),A=Bu(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),yc(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,A)),L=n.xOrigin||0,D=n.yOrigin||0,A!==zo&&(I=A[0],B=A[1],H=A[2],W=A[3],h=J=A[4],f=$=A[5],A.length===6?(p=Math.sqrt(I*I+B*B),g=Math.sqrt(W*W+H*H),v=I||B?ss(B,I)*Nr:0,w=H||W?ss(H,W)*Nr+v:0,w&&(g*=Math.abs(Math.cos(w*Is))),n.svg&&(h-=L-(L*I+D*H),f-=D-(L*B+D*W))):(le=A[6],Ye=A[7],N=A[8],Me=A[9],Ne=A[10],te=A[11],h=A[12],f=A[13],d=A[14],U=ss(le,Ne),_=U*Nr,U&&(E=Math.cos(-U),S=Math.sin(-U),Z=J*E+N*S,X=$*E+Me*S,ce=le*E+Ne*S,N=J*-S+N*E,Me=$*-S+Me*E,Ne=le*-S+Ne*E,te=Ye*-S+te*E,J=Z,$=X,le=ce),U=ss(-H,Ne),m=U*Nr,U&&(E=Math.cos(-U),S=Math.sin(-U),Z=I*E-N*S,X=B*E-Me*S,ce=H*E-Ne*S,te=W*S+te*E,I=Z,B=X,H=ce),U=ss(B,I),v=U*Nr,U&&(E=Math.cos(U),S=Math.sin(U),Z=I*E+B*S,X=J*E+$*S,B=B*E-I*S,$=$*E-J*S,I=Z,J=X),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,m=180-m),p=Yt(Math.sqrt(I*I+B*B+H*H)),g=Yt(Math.sqrt($*$+le*le)),U=ss(J,$),w=Math.abs(U)>2e-4?U*Nr:0,M=te?1/(te<0?-te:te):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Xd(Zn(e,Ht)),Z&&e.setAttribute("transform",Z))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(p*=-1,w+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Yt(p),n.scaleY=Yt(g),n.rotation=Yt(v)+a,n.rotationX=Yt(_)+a,n.rotationY=Yt(m)+a,n.skewX=w+a,n.skewY=T+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Nn]=tl(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?L_:Hd?Yd:D_,n.uncache=0,n},tl=function(e){return(e=e.split(" "))[0]+" "+e[1]},El=function(e,t,n){var i=mn(t);return Yt(parseFloat(t)+parseFloat(yr(e,"x",n+"px",i)))+i},D_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Yd(e,t)},Ar="0deg",no="0px",Rr=") ",Yd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,v=n.scaleY,_=n.transformPerspective,m=n.force3D,w=n.target,T=n.zOrigin,M="",L=m==="auto"&&e&&e!==1||m===!0;if(T&&(f!==Ar||h!==Ar)){var D=parseFloat(h)*Is,A=Math.sin(D),U=Math.cos(D),E;D=parseFloat(f)*Is,E=Math.cos(D),o=El(w,o,A*E*-T),a=El(w,a,-Math.sin(D)*-T),l=El(w,l,U*E*-T+T)}_!==no&&(M+="perspective("+_+Rr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(L||o!==no||a!==no||l!==no)&&(M+=l!==no||L?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Rr),c!==Ar&&(M+="rotate("+c+Rr),h!==Ar&&(M+="rotateY("+h+Rr),f!==Ar&&(M+="rotateX("+f+Rr),(d!==Ar||p!==Ar)&&(M+="skew("+d+", "+p+Rr),(g!==1||v!==1)&&(M+="scale("+g+", "+v+Rr),w.style[Ht]=M||"translate(0, 0)"},L_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,v=n.yOrigin,_=n.xOffset,m=n.yOffset,w=n.forceCSS,T=parseFloat(o),M=parseFloat(a),L,D,A,U,E;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Is,c*=Is,L=Math.cos(l)*f,D=Math.sin(l)*f,A=Math.sin(l-c)*-d,U=Math.cos(l-c)*d,c&&(h*=Is,E=Math.tan(c-h),E=Math.sqrt(1+E*E),A*=E,U*=E,h&&(E=Math.tan(h),E=Math.sqrt(1+E*E),L*=E,D*=E)),L=Yt(L),D=Yt(D),A=Yt(A),U=Yt(U)):(L=f,U=d,D=A=0),(T&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(T=yr(p,"x",o,"px"),M=yr(p,"y",a,"px")),(g||v||_||m)&&(T=Yt(T+g-(g*L+v*A)+_),M=Yt(M+v-(g*D+v*U)+m)),(i||s)&&(E=p.getBBox(),T=Yt(T+i/100*E.width),M=Yt(M+s/100*E.height)),E="matrix("+L+","+D+","+A+","+U+","+T+","+M+")",p.setAttribute("transform",E),w&&(p.style[Ht]=E)},I_=function(e,t,n,i,s){var o=360,a=an(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Nr:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*vh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*vh)%o-~~(c/o)*o)),e._pt=d=new Un(e._pt,t,n,i,c,m_),d.e=h,d.u="deg",e._props.push(n),d},bh=function(e,t){for(var n in t)e[n]=t[n];return e},U_=function(e,t,n){var i=bh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ht]=t,a=ko(n,1),Mr(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],o[Ht]=t,a=ko(n,1),o[Ht]=c);for(l in ji)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(p=mn(c),g=mn(h),f=p!==g?yr(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Un(e._pt,a,l,f,d-f,xc),e._pt.u=g||0,e._props.push(l));bh(a,i)};In("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});el[e>1?"border"+r:r]=function(a,l,c,h,f){var d,p;if(arguments.length<4)return d=o.map(function(g){return ki(a,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(g,v){return p[g]=d[v]=d[v]||d[(v-1)/2|0]}),a.init(l,p,f)}});var qd={name:"css",register:Mc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,p,g,v,_,m,w,T,M,L,D,A,U,E;Nu||Mc(),this.styles=this.styles||kd(e),U=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(h=t[v],!(Gn[v]&&Cd(v,t,n,i,e,s)))){if(p=typeof h,g=el[v],p==="function"&&(h=h.call(n,i,e,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Oo(h)),g)g(this,e,v,h,n)&&(A=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),h+="",gr.lastIndex=0,gr.test(c)||(_=mn(c),m=mn(h),m?_!==m&&(c=yr(e,v,c,m)+m):_&&(h+=_)),this.add(a,"setProperty",c,h,i,s,0,0,v),o.push(v),U.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,e,s):l[v],an(c)&&~c.indexOf("random(")&&(c=Oo(c)),mn(c+"")||c==="auto"||(c+=$n.units[v]||mn(ki(e,v))||""),(c+"").charAt(1)==="="&&(c=ki(e,v))):c=ki(e,v),d=parseFloat(c),w=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),f=parseFloat(h),v in wi&&(v==="autoAlpha"&&(d===1&&ki(e,"visibility")==="hidden"&&f&&(d=0),U.push("visibility",0,a.visibility),fr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=wi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),T=v in ji,T){if(this.styles.save(v),E=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=Zn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=h,h=Zn(e,"perspective"),S?e.style.perspective=S:Mr(e,"perspective")}f=parseFloat(h)}if(M||(L=e._gsap,L.renderTransform&&!t.parseTransform||ko(e,t.parseTransform),D=t.smoothOrigin!==!1&&L.smooth,M=this._pt=new Un(this._pt,a,Ht,0,1,L.renderTransform,L,0,-1),M.dep=1),v==="scale")this._pt=new Un(this._pt,L,"scaleY",L.scaleY,(w?Ds(L.scaleY,w+f):f)-L.scaleY||0,xc),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){U.push(Nn,0,a[Nn]),h=C_(h),L.svg?yc(e,h,0,D,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==L.zOrigin&&fr(this,L,"zOrigin",L.zOrigin,m),fr(this,a,v,tl(c),tl(h)));continue}else if(v==="svgOrigin"){yc(e,h,1,D,0,this);continue}else if(v in Wd){I_(this,L,v,d,w?Ds(d,w+h):h);continue}else if(v==="smoothOrigin"){fr(this,L,"smooth",L.smooth,h);continue}else if(v==="force3D"){L[v]=h;continue}else if(v==="transform"){U_(this,h,e);continue}}else v in a||(v=Xs(v)||v);if(T||(f||f===0)&&(d||d===0)&&!p_.test(h)&&v in a)_=(c+"").substr((d+"").length),f||(f=0),m=mn(h)||(v in $n.units?$n.units[v]:_),_!==m&&(d=yr(e,v,c,m)),this._pt=new Un(this._pt,T?L:a,v,d,(w?Ds(d,w+f):f)-d,!T&&(m==="px"||v==="zIndex")&&t.autoRound!==!1?v_:xc),this._pt.u=m||0,T&&E!==h?(this._pt.b=c,this._pt.e=E,this._pt.r=g_):_!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=__);else if(v in a)R_.call(this,e,v,c,w?w+h:h);else if(v in e)this.add(e,v,c||e[v],w?w+h:h,i,s);else if(v!=="parseTransform"){bu(v,h);continue}T||(v in a?U.push(v,0,a[v]):typeof e[v]=="function"?U.push(v,2,e[v]()):U.push(v,1,c||e[v])),o.push(v)}}A&&Nd(this)},render:function(e,t){if(t.tween._time||!Ou())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ki,aliases:wi,getSetter:function(e,t,n){var i=wi[t];return i&&i.indexOf(",")<0&&(t=i),t in ji&&t!==Nn&&(e._gsap.x||ki(e,"x"))?n&&gh===n?t==="scale"?y_:M_:(gh=n||{})&&(t==="scale"?E_:T_):e.style&&!yu(e.style[t])?x_:~t.indexOf("-")?S_:Iu(e,t)},core:{_removeProperty:Mr,_getMatrix:Bu}};Fn.utils.checkPrefix=Xs;Fn.core.getStyleSaver=kd;(function(r,e,t,n){var i=In(r+","+e+","+t,function(s){ji[s]=1});In(e,function(s){$n.units[s]="deg",Wd[s]=1}),wi[i[13]]=r+","+e,In(n,function(s){var o=s.split(":");wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$n.units[r]="px"});Fn.registerPlugin(qd);var Ys=Fn.registerPlugin(qd)||Fn;Ys.core.Tween;function N_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function O_(r,e,t){return e&&N_(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ln,Fa,Yn,dr,pr,Us,Zd,Or,Ns,$d,Wi,gi,Kd,Jd=function(){return ln||typeof window<"u"&&(ln=window.gsap)&&ln.registerPlugin&&ln},jd=1,Rs=[],dt=[],Ri=[],Eo=Date.now,Ec=function(e,t){return t},F_=function(){var e=Ns.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,dt),i.push.apply(i,Ri),dt=n,Ri=i,Ec=function(o,a){return t[o](a)}},vr=function(e,t){return~Ri.indexOf(e)&&Ri[Ri.indexOf(e)+1][t]},To=function(e){return!!~$d.indexOf(e)},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},jo="scrollLeft",Qo="scrollTop",Tc=function(){return Wi&&Wi.isPressed||dt.cache++},nl=function(e,t){var n=function i(s){if(s||s===0){jd&&(Yn.history.scrollRestoration="manual");var o=Wi&&Wi.isPressed;s=i.v=Math.round(s)||(Wi&&Wi.iOS?1:0),e(s),i.cacheID=dt.cache,o&&Ec("ss",s)}else(t||dt.cache!==i.cacheID||Ec("ref"))&&(i.cacheID=dt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},wn={s:jo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nl(function(r){return arguments.length?Yn.scrollTo(r,Qt.sc()):Yn.pageXOffset||dr[jo]||pr[jo]||Us[jo]||0})},Qt={s:Qo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:nl(function(r){return arguments.length?Yn.scrollTo(wn.sc(),r):Yn.pageYOffset||dr[Qo]||pr[Qo]||Us[Qo]||0})},Pn=function(e,t){return(t&&t._ctx&&t._ctx.selector||ln.utils.toArray)(e)[0]||(typeof e=="string"&&ln.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},B_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Er=function(e,t){var n=t.s,i=t.sc;To(e)&&(e=dr.scrollingElement||pr);var s=dt.indexOf(e),o=i===Qt.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+o]||Sn(e,"scroll",Tc);var a=dt[s+o],l=a||(dt[s+o]=nl(vr(e,n),!0)||(To(e)?i:nl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=ln.getProperty(e,"scrollBehavior")==="smooth"),l},bc=function(e,t,n){var i=e,s=e,o=Eo(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,v){var _=Eo();v||_-o>l?(s=i,i=g,a=o,o=_):n?i+=g:i=s+(g-s)/(_-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var v=a,_=s,m=Eo();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?_:-_))/((n?m:o)-v)*1e3};return{update:h,reset:f,getVelocity:d}},io=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},wh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Qd=function(){Ns=ln.core.globals().ScrollTrigger,Ns&&Ns.core&&F_()},ep=function(e){return ln=e||Jd(),!Fa&&ln&&typeof document<"u"&&document.body&&(Yn=window,dr=document,pr=dr.documentElement,Us=dr.body,$d=[Yn,dr,pr,Us],ln.utils.clamp,Kd=ln.core.context||function(){},Or="onpointerenter"in Us?"pointer":"mouse",Zd=qt.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=qt.eventTypes=("ontouchstart"in pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jd=0},500),Fa=1),Ns||Qd(),Fa};wn.op=Qt;dt.cache=0;var qt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Fa||ep(ln)||console.warn("Please gsap.registerPlugin(Observer)"),Ns||Qd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,v=n.event,_=n.onDragStart,m=n.onDragEnd,w=n.onDrag,T=n.onPress,M=n.onRelease,L=n.onRight,D=n.onLeft,A=n.onUp,U=n.onDown,E=n.onChangeX,S=n.onChangeY,I=n.onChange,B=n.onToggleX,H=n.onToggleY,W=n.onHover,J=n.onHoverEnd,$=n.onMove,Z=n.ignoreCheck,X=n.isNormalizer,ce=n.onGestureStart,N=n.onGestureEnd,Me=n.onWheel,Ne=n.onEnable,Ye=n.onDisable,te=n.onClick,le=n.scrollSpeed,he=n.capture,fe=n.allowClicks,me=n.lockAxis,Se=n.onLockAxis;this.target=a=Pn(a)||pr,this.vars=n,p&&(p=ln.utils.toArray(p)),i=i||1e-9,s=s||0,g=g||1,le=le||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yn.getComputedStyle(Us).lineHeight)||22);var ke,qe,We,De,z,pt,Ue,V=this,Oe=0,it=0,Ce=n.passive||!h&&n.passive!==!1,P=Er(a,wn),b=Er(a,Qt),Y=P(),oe=b(),se=~o.indexOf("touch")&&!~o.indexOf("pointer")&&gi[0]==="pointerdown",re=To(a),ye=a.ownerDocument||dr,ge=[0,0,0],Te=[0,0,0],et=0,_e=function(){return et=Eo()},Ee=function(Ve,nt){return(V.event=Ve)&&p&&B_(Ve.target,p)||nt&&se&&Ve.pointerType!=="touch"||Z&&Z(Ve,nt)},Be=function(){V._vx.reset(),V._vy.reset(),qe.pause(),f&&f(V)},Fe=function(){var Ve=V.deltaX=wh(ge),nt=V.deltaY=wh(Te),Re=Math.abs(Ve)>=i,Qe=Math.abs(nt)>=i;I&&(Re||Qe)&&I(V,Ve,nt,ge,Te),Re&&(L&&V.deltaX>0&&L(V),D&&V.deltaX<0&&D(V),E&&E(V),B&&V.deltaX<0!=Oe<0&&B(V),Oe=V.deltaX,ge[0]=ge[1]=ge[2]=0),Qe&&(U&&V.deltaY>0&&U(V),A&&V.deltaY<0&&A(V),S&&S(V),H&&V.deltaY<0!=it<0&&H(V),it=V.deltaY,Te[0]=Te[1]=Te[2]=0),(De||We)&&($&&$(V),We&&(_&&We===1&&_(V),w&&w(V),We=0),De=!1),pt&&!(pt=!1)&&Se&&Se(V),z&&(Me(V),z=!1),ke=0},Ie=function(Ve,nt,Re){ge[Re]+=Ve,Te[Re]+=nt,V._vx.update(Ve),V._vy.update(nt),c?ke||(ke=requestAnimationFrame(Fe)):Fe()},Ke=function(Ve,nt){me&&!Ue&&(V.axis=Ue=Math.abs(Ve)>Math.abs(nt)?"x":"y",pt=!0),Ue!=="y"&&(ge[2]+=Ve,V._vx.update(Ve,!0)),Ue!=="x"&&(Te[2]+=nt,V._vy.update(nt,!0)),c?ke||(ke=requestAnimationFrame(Fe)):Fe()},He=function(Ve){if(!Ee(Ve,1)){Ve=io(Ve,h);var nt=Ve.clientX,Re=Ve.clientY,Qe=nt-V.x,Ge=Re-V.y,je=V.isDragging;V.x=nt,V.y=Re,(je||(Qe||Ge)&&(Math.abs(V.startX-nt)>=s||Math.abs(V.startY-Re)>=s))&&(We||(We=je?2:1),je||(V.isDragging=!0),Ke(Qe,Ge))}},$e=V.onPress=function(Le){Ee(Le,1)||Le&&Le.button||(V.axis=Ue=null,qe.pause(),V.isPressed=!0,Le=io(Le),Oe=it=0,V.startX=V.x=Le.clientX,V.startY=V.y=Le.clientY,V._vx.reset(),V._vy.reset(),Sn(X?a:ye,gi[1],He,Ce,!0),V.deltaX=V.deltaY=0,T&&T(V))},F=V.onRelease=function(Le){if(!Ee(Le,1)){xn(X?a:ye,gi[1],He,!0);var Ve=!isNaN(V.y-V.startY),nt=V.isDragging,Re=nt&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Qe=io(Le);!Re&&Ve&&(V._vx.reset(),V._vy.reset(),h&&fe&&ln.delayedCall(.08,function(){if(Eo()-et>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(ye.createEvent){var Ge=ye.createEvent("MouseEvents");Ge.initMouseEvent("click",!0,!0,Yn,1,Qe.screenX,Qe.screenY,Qe.clientX,Qe.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(Ge)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&nt&&!X&&qe.restart(!0),We&&Fe(),m&&nt&&m(V),M&&M(V,Re)}},ee=function(Ve){return Ve.touches&&Ve.touches.length>1&&(V.isGesturing=!0)&&ce(Ve,V.isDragging)},ne=function(){return(V.isGesturing=!1)||N(V)},ae=function(Ve){if(!Ee(Ve)){var nt=P(),Re=b();Ie((nt-Y)*le,(Re-oe)*le,1),Y=nt,oe=Re,f&&qe.restart(!0)}},we=function(Ve){if(!Ee(Ve)){Ve=io(Ve,h),Me&&(z=!0);var nt=(Ve.deltaMode===1?l:Ve.deltaMode===2?Yn.innerHeight:1)*g;Ie(Ve.deltaX*nt,Ve.deltaY*nt,0),f&&!X&&qe.restart(!0)}},Ae=function(Ve){if(!Ee(Ve)){var nt=Ve.clientX,Re=Ve.clientY,Qe=nt-V.x,Ge=Re-V.y;V.x=nt,V.y=Re,De=!0,f&&qe.restart(!0),(Qe||Ge)&&Ke(Qe,Ge)}},Je=function(Ve){V.event=Ve,W(V)},gt=function(Ve){V.event=Ve,J(V)},Ot=function(Ve){return Ee(Ve)||io(Ve,h)&&te(V)};qe=V._dc=ln.delayedCall(d||.25,Be).pause(),V.deltaX=V.deltaY=0,V._vx=bc(0,50,!0),V._vy=bc(0,50,!0),V.scrollX=P,V.scrollY=b,V.isDragging=V.isGesturing=V.isPressed=!1,Kd(this),V.enable=function(Le){return V.isEnabled||(Sn(re?ye:a,"scroll",Tc),o.indexOf("scroll")>=0&&Sn(re?ye:a,"scroll",ae,Ce,he),o.indexOf("wheel")>=0&&Sn(a,"wheel",we,Ce,he),(o.indexOf("touch")>=0&&Zd||o.indexOf("pointer")>=0)&&(Sn(a,gi[0],$e,Ce,he),Sn(ye,gi[2],F),Sn(ye,gi[3],F),fe&&Sn(a,"click",_e,!0,!0),te&&Sn(a,"click",Ot),ce&&Sn(ye,"gesturestart",ee),N&&Sn(ye,"gestureend",ne),W&&Sn(a,Or+"enter",Je),J&&Sn(a,Or+"leave",gt),$&&Sn(a,Or+"move",Ae)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=De=We=!1,V._vx.reset(),V._vy.reset(),Y=P(),oe=b(),Le&&Le.type&&$e(Le),Ne&&Ne(V)),V},V.disable=function(){V.isEnabled&&(Rs.filter(function(Le){return Le!==V&&To(Le.target)}).length||xn(re?ye:a,"scroll",Tc),V.isPressed&&(V._vx.reset(),V._vy.reset(),xn(X?a:ye,gi[1],He,!0)),xn(re?ye:a,"scroll",ae,he),xn(a,"wheel",we,he),xn(a,gi[0],$e,he),xn(ye,gi[2],F),xn(ye,gi[3],F),xn(a,"click",_e,!0),xn(a,"click",Ot),xn(ye,"gesturestart",ee),xn(ye,"gestureend",ne),xn(a,Or+"enter",Je),xn(a,Or+"leave",gt),xn(a,Or+"move",Ae),V.isEnabled=V.isPressed=V.isDragging=!1,Ye&&Ye(V))},V.kill=V.revert=function(){V.disable();var Le=Rs.indexOf(V);Le>=0&&Rs.splice(Le,1),Wi===V&&(Wi=0)},Rs.push(V),X&&To(a)&&(Wi=V),V.enable(v)},O_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qt.version="3.15.0";qt.create=function(r){return new qt(r)};qt.register=ep;qt.getAll=function(){return Rs.slice()};qt.getById=function(r){return Rs.filter(function(e){return e.vars.id===r})[0]};Jd()&&ln.registerPlugin(qt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ze,Ts,ft,At,Wn,Tt,zu,il,Ho,bo,fo,ea,dn,hl,wc,En,Ah,Rh,bs,tp,Tl,np,yn,Ac,ip,rp,cr,Rc,ku,Os,Hu,wo,Cc,bl,ta=1,pn=Date.now,wl=pn(),hi=0,po=0,Ch=function(e,t,n){var i=Vn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ph=function(e,t){return t&&(!Vn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},z_=function r(){return po&&requestAnimationFrame(r)},Dh=function(){return hl=1},Lh=function(){return hl=0},yi=function(e){return e},mo=function(e){return Math.round(e*1e5)/1e5||0},sp=function(){return typeof window<"u"},op=function(){return ze||sp()&&(ze=window.gsap)&&ze.registerPlugin&&ze},jr=function(e){return!!~zu.indexOf(e)},ap=function(e){return(e==="Height"?Hu:ft["inner"+e])||Wn["client"+e]||Tt["client"+e]},lp=function(e){return vr(e,"getBoundingClientRect")||(jr(e)?function(){return Va.width=ft.innerWidth,Va.height=Hu,Va}:function(){return Hi(e)})},k_=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=vr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?ap(s):e["client"+s])||0}},H_=function(e,t){return!t||~Ri.indexOf(e)?lp(e):function(){return Va}},Ai=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=vr(e,n))?o()-lp(e)()[s]:jr(e)?(Wn[n]||Tt[n])-ap(i):e[n]-e["offset"+i])},na=function(e,t){for(var n=0;n<bs.length;n+=3)(!t||~t.indexOf(bs[n+1]))&&e(bs[n],bs[n+1],bs[n+2])},Vn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},_o=function(e){return typeof e=="number"},Fr=function(e){return typeof e=="object"},ro=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},os=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},as=Math.abs,cp="left",up="top",Vu="right",Gu="bottom",Zr="width",$r="height",Ao="Right",Ro="Left",Co="Top",Po="Bottom",$t="padding",ii="margin",qs="Width",Wu="Height",jt="px",ri=function(e){return ft.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},V_=function(e){var t=ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ih=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hi=function(e,t){var n=t&&ri(e)[wc]!=="matrix(1, 0, 0, 1, 0, 0)"&&ze.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},rl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},hp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},G_=function(e){return function(t){return ze.utils.snap(hp(e),t)}},Xu=function(e){var t=ze.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},W_=function(e){return function(t,n){return Xu(hp(e))(t,n.direction)}},ia=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ra=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Uh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sa={toggleActions:"play",anticipatePin:0},sl={top:0,left:0,center:.5,bottom:1,right:1},Ba=function(e,t){if(Vn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in sl?sl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},oa=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,d=s.indent,p=s.fontWeight,g=At.createElement("div"),v=jr(n)||vr(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,m=v?Tt:n.tagName==="IFRAME"?n.contentDocument.body:n,w=e.indexOf("start")!==-1,T=w?c:h,M="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((_||l)&&v?"fixed;":"absolute;"),(_||l||!v)&&(M+=(i===Qt?Vu:Gu)+":"+(o+parseFloat(d))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=w,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],za(g,0,i,w),g},za=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+qs]=1,s["border"+a+qs]=0,s[n.p]=t+"px",ze.set(e,s)},lt=[],Pc={},Vo,Nh=function(){return pn()-hi>34&&(Vo||(Vo=requestAnimationFrame(Zi)))},ls=function(){(!yn||!yn.isPressed||yn.startX>Tt.clientWidth)&&(dt.cache++,yn?Vo||(Vo=requestAnimationFrame(Zi)):Zi(),hi||es("scrollStart"),hi=pn())},Al=function(){rp=ft.innerWidth,ip=ft.innerHeight},go=function(e){dt.cache++,(e===!0||!dn&&!np&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!Ac||rp!==ft.innerWidth||Math.abs(ft.innerHeight-ip)>ft.innerHeight*.25))&&il.restart(!0)},Qr={},X_=[],fp=function r(){return sn(ct,"scrollEnd",r)||Gr(!0)},es=function(e){return Qr[e]&&Qr[e].map(function(t){return t()})||X_},Hn=[],dp=function(e){for(var t=0;t<Hn.length;t+=5)(!e||Hn[t+4]&&Hn[t+4].query===e)&&(Hn[t].style.cssText=Hn[t+1],Hn[t].getBBox&&Hn[t].setAttribute("transform",Hn[t+2]||""),Hn[t+3].uncache=1)},pp=function(){return dt.forEach(function(e){return _n(e)&&++e.cacheID&&(e.rec=e())})},Yu=function(e,t){var n;for(En=0;En<lt.length;En++)n=lt[En],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));wo=!0,t&&dp(t),t||es("revert")},mp=function(e,t){dt.cache++,(t||!Tn)&&dt.forEach(function(n){return _n(n)&&n.cacheID++&&(n.rec=0)}),Vn(e)&&(ft.history.scrollRestoration=ku=e)},Tn,Kr=0,Oh,Y_=function(){if(Oh!==Kr){var e=Oh=Kr;requestAnimationFrame(function(){return e===Kr&&Gr(!0)})}},_p=function(){Tt.appendChild(Os),Hu=!yn&&Os.offsetHeight||ft.innerHeight,Tt.removeChild(Os)},Fh=function(e){return Ho(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Gr=function(e,t){if(Wn=At.documentElement,Tt=At.body,zu=[ft,At,Wn,Tt],hi&&!e&&!wo){on(ct,"scrollEnd",fp);return}_p(),Tn=ct.isRefreshing=!0,wo||pp();var n=es("refreshInit");tp&&ct.sort(),t||Yu(),dt.forEach(function(i){_n(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),lt.slice(0).forEach(function(i){return i.refresh()}),wo=!1,lt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Cc=1,Fh(!0),lt.forEach(function(i){var s=Ai(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Fh(!1),Cc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),dt.forEach(function(i){_n(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),mp(ku,1),il.pause(),Kr++,Tn=2,Zi(2),lt.forEach(function(i){return _n(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=ct.isRefreshing=!1,es("refresh")},Dc=0,ka=1,Do,Zi=function(e){if(e===2||!Tn&&!wo){ct.isUpdating=!0,Do&&Do.update(0);var t=lt.length,n=pn(),i=n-wl>=50,s=t&&lt[0].scroll();if(ka=Dc>s?-1:1,Tn||(Dc=s),i&&(hi&&!hl&&n-hi>200&&(hi=0,es("scrollEnd")),fo=wl,wl=n),ka<0){for(En=t;En-- >0;)lt[En]&&lt[En].update(0,i);ka=1}else for(En=0;En<t;En++)lt[En]&&lt[En].update(0,i);ct.isUpdating=!1}Vo=0},Lc=[cp,up,Gu,Vu,ii+Po,ii+Ao,ii+Co,ii+Ro,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ha=Lc.concat([Zr,$r,"boxSizing","max"+qs,"max"+Wu,"position",ii,$t,$t+Co,$t+Ao,$t+Po,$t+Ro]),q_=function(e,t,n){Fs(n);var i=e._gsap;if(i.spacerIsNative)Fs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Rl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Lc.length,o=t.style,a=e.style,l;s--;)l=Lc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Gu]=a[Vu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Zr]=rl(e,wn)+jt,o[$r]=rl(e,Qt)+jt,o[$t]=a[ii]=a[up]=a[cp]="0",Fs(i),a[Zr]=a["max"+qs]=n[Zr],a[$r]=a["max"+Wu]=n[$r],a[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Z_=/([A-Z])/g,Fs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ze.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Z_,"-$1").toLowerCase())}},aa=function(e){for(var t=Ha.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ha[s],n[Ha[s]]);return i.t=e,i},$_=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Va={left:0,top:0},Bh=function(e,t,n,i,s,o,a,l,c,h,f,d,p,g){_n(e)&&(e=e(l)),Vn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Ba("0"+e.substr(3),n):0));var v=p?p.time():0,_,m,w;if(p&&p.seek(0),isNaN(e)||(e=+e),_o(e))p&&(e=ze.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),a&&za(a,n,i,!0);else{_n(t)&&(t=t(l));var T=(e||"0").split(" "),M,L,D,A;w=Pn(t,l)||Tt,M=Hi(w)||{},(!M||!M.left&&!M.top)&&ri(w).display==="none"&&(A=w.style.display,w.style.display="block",M=Hi(w),A?w.style.display=A:w.style.removeProperty("display")),L=Ba(T[0],M[i.d]),D=Ba(T[1]||"0",n),e=M[i.p]-c[i.p]-h+L+s-D,a&&za(a,D,i,n-D<20||a._isStart&&D>20),n-=n-D}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var U=e+n,E=o._isStart;_="scroll"+i.d2,za(o,U,i,E&&U>20||!E&&(f?Math.max(Tt[_],Wn[_]):o.parentNode[_])<=U+1),f&&(c=Hi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+jt))}return p&&w&&(_=Hi(w),p.seek(d),m=Hi(w),p._caScrollDist=_[i.p]-m[i.p],e=e/p._caScrollDist*d),p&&p.seek(v),p?e:Math.round(e)},K_=/(webkit|moz|length|cssText|inset)/i,zh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Tt){e._stOrig=s.cssText,a=ri(e);for(o in a)!+o&&!K_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ze.core.getCache(e).uncache=1,t.appendChild(e)}},gp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},la=function(e,t,n){var i={};i[t.p]="+="+n,ze.set(e,i)},kh=function(e,t){var n=Er(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,f){var d=o.tween,p=l.onComplete,g={};c=c||n();var v=gp(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return v(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){dt.cache++,o.tween&&Zi()},l.onComplete=function(){o.tween=0,p&&p.call(d)},d=o.tween=ze.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",n.wheelHandler),ct.isTouch&&on(e,"touchmove",n.wheelHandler),s},ct=(function(){function r(t,n){Ts||r.register(ze)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!po){this.update=this.refresh=this.kill=yi;return}n=Ih(Vn(n)||_o(n)||n.nodeType?{trigger:n}:n,sa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,d=s.trigger,p=s.pin,g=s.pinSpacing,v=s.invalidateOnRefresh,_=s.anticipatePin,m=s.onScrubComplete,w=s.onSnapComplete,T=s.once,M=s.snap,L=s.pinReparent,D=s.pinSpacer,A=s.containerAnimation,U=s.fastScrollEnd,E=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:Qt,I=!f&&f!==0,B=Pn(n.scroller||ft),H=ze.core.getCache(B),W=jr(B),J=("pinType"in n?n.pinType:vr(B,"pinType")||W&&"fixed")==="fixed",$=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=I&&n.toggleActions.split(" "),X="markers"in n?n.markers:sa.markers,ce=W?0:parseFloat(ri(B)["border"+S.p2+qs])||0,N=this,Me=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Ne=k_(B,W,S),Ye=H_(B,W),te=0,le=0,he=0,fe=Er(B,S),me,Se,ke,qe,We,De,z,pt,Ue,V,Oe,it,Ce,P,b,Y,oe,se,re,ye,ge,Te,et,_e,Ee,Be,Fe,Ie,Ke,He,$e,F,ee,ne,ae,we,Ae,Je,gt;if(N._startClamp=N._endClamp=!1,N._dir=S,_*=45,N.scroller=B,N.scroll=A?A.time.bind(A):fe,qe=fe(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(tp=1,n.refreshPriority===-9999&&(Do=N)),H.tweenScroll=H.tweenScroll||{top:kh(B,Qt),left:kh(B,wn)},N.tweenTo=me=H.tweenScroll[S.p],N.scrubDuration=function(Re){ee=_o(Re)&&Re,ee?F?F.duration(Re):F=ze.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return m&&m(N)}}):(F&&F.progress(1).kill(),F=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(f),He=0,l||(l=i.vars.id)),M&&((!Fr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in Tt.style&&ze.set(W?[Tt,Wn]:B,{scrollBehavior:"auto"}),dt.forEach(function(Re){return _n(Re)&&Re.target===(W?At.scrollingElement||Wn:B)&&(Re.smooth=!1)}),ke=_n(M.snapTo)?M.snapTo:M.snapTo==="labels"?G_(i):M.snapTo==="labelsDirectional"?W_(i):M.directional!==!1?function(Re,Qe){return Xu(M.snapTo)(Re,pn()-le<500?0:Qe.direction)}:ze.utils.snap(M.snapTo),ne=M.duration||{min:.1,max:2},ne=Fr(ne)?bo(ne.min,ne.max):bo(ne,ne),ae=ze.delayedCall(M.delay||ee/2||.1,function(){var Re=fe(),Qe=pn()-le<500,Ge=me.tween;if((Qe||Math.abs(N.getVelocity())<10)&&!Ge&&!hl&&te!==Re){var je=(Re-De)/P,Ft=i&&!I?i.totalProgress():je,st=Qe?0:(Ft-$e)/(pn()-fo)*1e3||0,Rt=ze.utils.clamp(-je,1-je,as(st/2)*st/.185),Xt=je+(M.inertia===!1?0:Rt),bt,Et,vt=M,vn=vt.onStart,xt=vt.onInterrupt,Gt=vt.onComplete;if(bt=ke(Xt,N),_o(bt)||(bt=Xt),Et=Math.max(0,Math.round(De+bt*P)),Re<=z&&Re>=De&&Et!==Re){if(Ge&&!Ge._initted&&Ge.data<=as(Et-Re))return;M.inertia===!1&&(Rt=bt-je),me(Et,{duration:ne(as(Math.max(as(Xt-Ft),as(bt-Ft))*.185/st/.05||0)),ease:M.ease||"power3",data:as(Et-Re),onInterrupt:function(){return ae.restart(!0)&&xt&&os(N,xt)},onComplete:function(){N.update(),te=fe(),i&&!I&&(F?F.resetTo("totalProgress",bt,i._tTime/i._tDur):i.progress(bt)),He=$e=i&&!I?i.totalProgress():N.progress,w&&w(N),Gt&&os(N,Gt)}},Re,Rt*P,Et-Re-Rt*P),vn&&os(N,vn,me.tween)}}else N.isActive&&te!==Re&&ae.restart(!0)}).pause()),l&&(Pc[l]=N),d=N.trigger=Pn(d||p!==!0&&p),gt=d&&d._gsap&&d._gsap.stRevert,gt&&(gt=gt(N)),p=p===!0?d:Pn(p),Vn(a)&&(a={targets:d,className:a}),p&&(g===!1||g===ii||(g=!g&&p.parentNode&&p.parentNode.style&&ri(p.parentNode).display==="flex"?!1:$t),N.pin=p,Se=ze.core.getCache(p),Se.spacer?b=Se.pinState:(D&&(D=Pn(D),D&&!D.nodeType&&(D=D.current||D.nativeElement),Se.spacerIsNative=!!D,D&&(Se.spacerState=aa(D))),Se.spacer=se=D||At.createElement("div"),se.classList.add("pin-spacer"),l&&se.classList.add("pin-spacer-"+l),Se.pinState=b=aa(p)),n.force3D!==!1&&ze.set(p,{force3D:!0}),N.spacer=se=Se.spacer,Ke=ri(p),_e=Ke[g+S.os2],ye=ze.getProperty(p),ge=ze.quickSetter(p,S.a,jt),Rl(p,se,Ke),oe=aa(p)),X){it=Fr(X)?Ih(X,Uh):Uh,V=oa("scroller-start",l,B,S,it,0),Oe=oa("scroller-end",l,B,S,it,0,V),re=V["offset"+S.op.d2];var Ot=Pn(vr(B,"content")||B);pt=this.markerStart=oa("start",l,Ot,S,it,re,0,A),Ue=this.markerEnd=oa("end",l,Ot,S,it,re,0,A),A&&(Je=ze.quickSetter([pt,Ue],S.a,jt)),!J&&!(Ri.length&&vr(B,"fixedMarkers")===!0)&&(V_(W?Tt:B),ze.set([V,Oe],{force3D:!0}),Be=ze.quickSetter(V,S.a,jt),Ie=ze.quickSetter(Oe,S.a,jt))}if(A){var Le=A.vars.onUpdate,Ve=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){N.update(0,0,1),Le&&Le.apply(A,Ve||[])})}if(N.previous=function(){return lt[lt.indexOf(N)-1]},N.next=function(){return lt[lt.indexOf(N)+1]},N.revert=function(Re,Qe){if(!Qe)return N.kill(!0);var Ge=Re!==!1||!N.enabled,je=dn;Ge!==N.isReverted&&(Ge&&(we=Math.max(fe(),N.scroll.rec||0),he=N.progress,Ae=i&&i.progress()),pt&&[pt,Ue,V,Oe].forEach(function(Ft){return Ft.style.display=Ge?"none":"block"}),Ge&&(dn=N,N.update(Ge)),p&&(!L||!N.isActive)&&(Ge?q_(p,se,b):Rl(p,se,ri(p),Ee)),Ge||N.update(Ge),dn=je,N.isReverted=Ge)},N.refresh=function(Re,Qe,Ge,je){if(!((dn||!N.enabled)&&!Qe)){if(p&&Re&&hi){on(r,"scrollEnd",fp);return}!Tn&&Me&&Me(N),dn=N,me.tween&&!Ge&&(me.tween.kill(),me.tween=0),F&&F.pause(),v&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ve){return ve.vars.immediateRender&&ve.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Ft=Ne(),st=Ye(),Rt=A?A.duration():Ai(B,S),Xt=P<=.01||!P,bt=0,Et=je||0,vt=Fr(Ge)?Ge.end:n.end,vn=n.endTrigger||d,xt=Fr(Ge)?Ge.start:n.start||(n.start===0||!d?0:p?"0 0":"0 100%"),Gt=N.pinnedContainer=n.pinnedContainer&&Pn(n.pinnedContainer,N),u=d&&Math.max(0,lt.indexOf(N))||0,x=u,y,R,C,O,k,q,G,j,Q,ie,ue,de,be;for(X&&Fr(Ge)&&(de=ze.getProperty(V,S.p),be=ze.getProperty(Oe,S.p));x-- >0;)q=lt[x],q.end||q.refresh(0,1)||(dn=N),G=q.pin,G&&(G===d||G===p||G===Gt)&&!q.isReverted&&(ie||(ie=[]),ie.unshift(q),q.revert(!0,!0)),q!==lt[x]&&(u--,x--);for(_n(xt)&&(xt=xt(N)),xt=Ch(xt,"start",N),De=Bh(xt,d,Ft,S,fe(),pt,V,N,st,ce,J,Rt,A,N._startClamp&&"_startClamp")||(p?-.001:0),_n(vt)&&(vt=vt(N)),Vn(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(Vn(xt)?xt.split(" ")[0]:"")+vt:(bt=Ba(vt.substr(2),Ft),vt=Vn(xt)?xt:(A?ze.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,De):De)+bt,vn=d)),vt=Ch(vt,"end",N),z=Math.max(De,Bh(vt||(vn?"100% 0":Rt),vn,Ft,S,fe()+bt,Ue,Oe,N,st,ce,J,Rt,A,N._endClamp&&"_endClamp"))||-.001,bt=0,x=u;x--;)q=lt[x]||{},G=q.pin,G&&q.start-q._pinPush<=De&&!A&&q.end>0&&(y=q.end-(N._startClamp?Math.max(0,q.start):q.start),(G===d&&q.start-q._pinPush<De||G===Gt)&&isNaN(xt)&&(bt+=y*(1-q.progress)),G===p&&(Et+=y));if(De+=bt,z+=bt,N._startClamp&&(N._startClamp+=bt),N._endClamp&&!Tn&&(N._endClamp=z||-.001,z=Math.min(z,Ai(B,S))),P=z-De||(De-=.01)&&.001,Xt&&(he=ze.utils.clamp(0,1,ze.utils.normalize(De,z,we))),N._pinPush=Et,pt&&bt&&(y={},y[S.a]="+="+bt,Gt&&(y[S.p]="-="+fe()),ze.set([pt,Ue],y)),p&&!(Cc&&N.end>=Ai(B,S)))y=ri(p),O=S===Qt,C=fe(),Te=parseFloat(ye(S.a))+Et,!Rt&&z>1&&(ue=(W?At.scrollingElement||Wn:B).style,ue={style:ue,value:ue["overflow"+S.a.toUpperCase()]},W&&ri(Tt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ue.style["overflow"+S.a.toUpperCase()]="scroll")),Rl(p,se,y),oe=aa(p),R=Hi(p,!0),j=J&&Er(B,O?wn:Qt)(),g?(Ee=[g+S.os2,P+Et+jt],Ee.t=se,x=g===$t?rl(p,S)+P+Et:0,x&&(Ee.push(S.d,x+jt),se.style.flexBasis!=="auto"&&(se.style.flexBasis=x+jt)),Fs(Ee),Gt&&lt.forEach(function(ve){ve.pin===Gt&&ve.vars.pinSpacing!==!1&&(ve._subPinOffset=!0)}),J&&fe(we)):(x=rl(p,S),x&&se.style.flexBasis!=="auto"&&(se.style.flexBasis=x+jt)),J&&(k={top:R.top+(O?C-De:j)+jt,left:R.left+(O?j:C-De)+jt,boxSizing:"border-box",position:"fixed"},k[Zr]=k["max"+qs]=Math.ceil(R.width)+jt,k[$r]=k["max"+Wu]=Math.ceil(R.height)+jt,k[ii]=k[ii+Co]=k[ii+Ao]=k[ii+Po]=k[ii+Ro]="0",k[$t]=y[$t],k[$t+Co]=y[$t+Co],k[$t+Ao]=y[$t+Ao],k[$t+Po]=y[$t+Po],k[$t+Ro]=y[$t+Ro],Y=$_(b,k,L),Tn&&fe(0)),i?(Q=i._initted,Tl(1),i.render(i.duration(),!0,!0),et=ye(S.a)-Te+P+Et,Fe=Math.abs(P-et)>1,J&&Fe&&Y.splice(Y.length-2,2),i.render(0,!0,!0),Q||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Tl(0)):et=P,ue&&(ue.value?ue.style["overflow"+S.a.toUpperCase()]=ue.value:ue.style.removeProperty("overflow-"+S.a));else if(d&&fe()&&!A)for(R=d.parentNode;R&&R!==Tt;)R._pinOffset&&(De-=R._pinOffset,z-=R._pinOffset),R=R.parentNode;ie&&ie.forEach(function(ve){return ve.revert(!1,!0)}),N.start=De,N.end=z,qe=We=Tn?we:fe(),!A&&!Tn&&(qe<we&&fe(we),N.scroll.rec=0),N.revert(!1,!0),le=pn(),ae&&(te=-1,ae.restart(!0)),dn=0,i&&I&&(i._initted||Ae)&&i.progress()!==Ae&&i.progress(Ae||0,!0).render(i.time(),!0,!0),(Xt||he!==N.progress||A||v||i&&!i._initted)&&(i&&!I&&(i._initted||he||i.vars.immediateRender!==!1)&&i.totalProgress(A&&De<-.001&&!he?ze.utils.normalize(De,z,0):he,!0),N.progress=Xt||(qe-De)/P===he?0:he),p&&g&&(se._pinOffset=Math.round(N.progress*et)),F&&F.invalidate(),isNaN(de)||(de-=ze.getProperty(V,S.p),be-=ze.getProperty(Oe,S.p),la(V,S,de),la(pt,S,de-(je||0)),la(Oe,S,be),la(Ue,S,be-(je||0))),Xt&&!Tn&&N.update(),h&&!Tn&&!Ce&&(Ce=!0,h(N),Ce=!1)}},N.getVelocity=function(){return(fe()-We)/(pn()-fo)*1e3||0},N.endAnimation=function(){ro(N.callbackAnimation),i&&(F?F.progress(1):i.paused()?I||ro(i,N.direction<0,1):ro(i,i.reversed()))},N.labelToScroll=function(Re){return i&&i.labels&&(De||N.refresh()||De)+i.labels[Re]/i.duration()*P||0},N.getTrailing=function(Re){var Qe=lt.indexOf(N),Ge=N.direction>0?lt.slice(0,Qe).reverse():lt.slice(Qe+1);return(Vn(Re)?Ge.filter(function(je){return je.vars.preventOverlaps===Re}):Ge).filter(function(je){return N.direction>0?je.end<=De:je.start>=z})},N.update=function(Re,Qe,Ge){if(!(A&&!Ge&&!Re)){var je=Tn===!0?we:N.scroll(),Ft=Re?0:(je-De)/P,st=Ft<0?0:Ft>1?1:Ft||0,Rt=N.progress,Xt,bt,Et,vt,vn,xt,Gt,u;if(Qe&&(We=qe,qe=A?fe():je,M&&($e=He,He=i&&!I?i.totalProgress():st)),_&&p&&!dn&&!ta&&hi&&(!st&&De<je+(je-We)/(pn()-fo)*_?st=1e-4:st===1&&z>je+(je-We)/(pn()-fo)*_&&(st=.9999)),st!==Rt&&N.enabled){if(Xt=N.isActive=!!st&&st<1,bt=!!Rt&&Rt<1,xt=Xt!==bt,vn=xt||!!st!=!!Rt,N.direction=st>Rt?1:-1,N.progress=st,vn&&!dn&&(Et=st&&!Rt?0:st===1?1:Rt===1?2:3,I&&(vt=!xt&&Z[Et+1]!=="none"&&Z[Et+1]||Z[Et],u=i&&(vt==="complete"||vt==="reset"||vt in i))),E&&(xt||u)&&(u||f||!i)&&(_n(E)?E(N):N.getTrailing(E).forEach(function(C){return C.endAnimation()})),I||(F&&!dn&&!ta?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",st,i._tTime/i._tDur):(F.vars.totalProgress=st,F.invalidate().restart())):i&&i.totalProgress(st,!!(dn&&(le||Re)))),p){if(Re&&g&&(se.style[g+S.os2]=_e),!J)ge(mo(Te+et*st));else if(vn){if(Gt=!Re&&st>Rt&&z+1>je&&je+1>=Ai(B,S),L)if(!Re&&(Xt||Gt)){var x=Hi(p,!0),y=je-De;zh(p,Tt,x.top+(S===Qt?y:0)+jt,x.left+(S===Qt?0:y)+jt)}else zh(p,se);Fs(Xt||Gt?Y:oe),Fe&&st<1&&Xt||ge(Te+(st===1&&!Gt?et:0))}}M&&!me.tween&&!dn&&!ta&&ae.restart(!0),a&&(xt||T&&st&&(st<1||!bl))&&Ho(a.targets).forEach(function(C){return C.classList[Xt||T?"add":"remove"](a.className)}),o&&!I&&!Re&&o(N),vn&&!dn?(I&&(u&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(N)),(xt||!bl)&&(c&&xt&&os(N,c),$[Et]&&os(N,$[Et]),T&&(st===1?N.kill(!1,1):$[Et]=0),xt||(Et=st===1?1:3,$[Et]&&os(N,$[Et]))),U&&!Xt&&Math.abs(N.getVelocity())>(_o(U)?U:2500)&&(ro(N.callbackAnimation),F?F.progress(1):ro(i,vt==="reverse"?1:!st,1))):I&&o&&!dn&&o(N)}if(Ie){var R=A?je/A.duration()*(A._caScrollDist||0):je;Be(R+(V._isFlipped?1:0)),Ie(R)}Je&&Je(-je/A.duration()*(A._caScrollDist||0))}},N.enable=function(Re,Qe){N.enabled||(N.enabled=!0,on(B,"resize",go),W||on(B,"scroll",ls),Me&&on(r,"refreshInit",Me),Re!==!1&&(N.progress=he=0,qe=We=te=fe()),Qe!==!1&&N.refresh())},N.getTween=function(Re){return Re&&me?me.tween:F},N.setPositions=function(Re,Qe,Ge,je){if(A){var Ft=A.scrollTrigger,st=A.duration(),Rt=Ft.end-Ft.start;Re=Ft.start+Rt*Re/st,Qe=Ft.start+Rt*Qe/st}N.refresh(!1,!1,{start:Ph(Re,Ge&&!!N._startClamp),end:Ph(Qe,Ge&&!!N._endClamp)},je),N.update()},N.adjustPinSpacing=function(Re){if(Ee&&Re){var Qe=Ee.indexOf(S.d)+1;Ee[Qe]=parseFloat(Ee[Qe])+Re+jt,Ee[1]=parseFloat(Ee[1])+Re+jt,Fs(Ee)}},N.disable=function(Re,Qe){if(Re!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,Qe||F&&F.pause(),we=0,Se&&(Se.uncache=1),Me&&sn(r,"refreshInit",Me),ae&&(ae.pause(),me.tween&&me.tween.kill()&&(me.tween=0)),!W)){for(var Ge=lt.length;Ge--;)if(lt[Ge].scroller===B&&lt[Ge]!==N)return;sn(B,"resize",go),W||sn(B,"scroll",ls)}},N.kill=function(Re,Qe){N.disable(Re,Qe),F&&!Qe&&F.kill(),l&&delete Pc[l];var Ge=lt.indexOf(N);Ge>=0&&lt.splice(Ge,1),Ge===En&&ka>0&&En--,Ge=0,lt.forEach(function(je){return je.scroller===N.scroller&&(Ge=1)}),Ge||Tn||(N.scroll.rec=0),i&&(i.scrollTrigger=null,Re&&i.revert({kill:!1}),Qe||i.kill()),pt&&[pt,Ue,V,Oe].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),Do===N&&(Do=0),p&&(Se&&(Se.uncache=1),Ge=0,lt.forEach(function(je){return je.pin===p&&Ge++}),Ge||(Se.spacer=0)),n.onKill&&n.onKill(N)},lt.push(N),N.enable(!1,!1),gt&&gt(N),i&&i.add&&!P){var nt=N.update;N.update=function(){N.update=nt,dt.cache++,De||z||N.refresh()},ze.delayedCall(.01,N.update),P=.01,De=z=0}else N.refresh();p&&Y_()},r.register=function(n){return Ts||(ze=n||op(),sp()&&window.document&&r.enable(),Ts=po),Ts},r.defaults=function(n){if(n)for(var i in n)sa[i]=n[i];return sa},r.disable=function(n,i){po=0,lt.forEach(function(o){return o[i?"kill":"disable"](n)}),sn(ft,"wheel",ls),sn(At,"scroll",ls),clearInterval(ea),sn(At,"touchcancel",yi),sn(Tt,"touchstart",yi),ia(sn,At,"pointerdown,touchstart,mousedown",Dh),ia(sn,At,"pointerup,touchend,mouseup",Lh),il.kill(),na(sn);for(var s=0;s<dt.length;s+=3)ra(sn,dt[s],dt[s+1]),ra(sn,dt[s],dt[s+2])},r.enable=function(){if(ft=window,At=document,Wn=At.documentElement,Tt=At.body,ze){if(Ho=ze.utils.toArray,bo=ze.utils.clamp,Rc=ze.core.context||yi,Tl=ze.core.suppressOverwrites||yi,ku=ft.history.scrollRestoration||"auto",Dc=ft.pageYOffset||0,ze.core.globals("ScrollTrigger",r),Tt){po=1,Os=document.createElement("div"),Os.style.height="100vh",Os.style.position="absolute",_p(),z_(),qt.register(ze),r.isTouch=qt.isTouch,cr=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ac=qt.isTouch===1,on(ft,"wheel",ls),zu=[ft,At,Wn,Tt],ze.matchMedia?(r.matchMedia=function(h){var f=ze.matchMedia(),d;for(d in h)f.add(d,h[d]);return f},ze.addEventListener("matchMediaInit",function(){pp(),Yu()}),ze.addEventListener("matchMediaRevert",function(){return dp()}),ze.addEventListener("matchMedia",function(){Gr(0,1),es("matchMedia")}),ze.matchMedia().add("(orientation: portrait)",function(){return Al(),Al})):console.warn("Requires GSAP 3.11.0 or later"),Al(),on(At,"scroll",ls);var n=Tt.hasAttribute("style"),i=Tt.style,s=i.borderTopStyle,o=ze.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Hi(Tt),Qt.m=Math.round(a.top+Qt.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),ea=setInterval(Nh,250),ze.delayedCall(.5,function(){return ta=0}),on(At,"touchcancel",yi),on(Tt,"touchstart",yi),ia(on,At,"pointerdown,touchstart,mousedown",Dh),ia(on,At,"pointerup,touchend,mouseup",Lh),wc=ze.utils.checkPrefix("transform"),Ha.push(wc),Ts=pn(),il=ze.delayedCall(.2,Gr).pause(),bs=[At,"visibilitychange",function(){var h=ft.innerWidth,f=ft.innerHeight;At.hidden?(Ah=h,Rh=f):(Ah!==h||Rh!==f)&&go()},At,"DOMContentLoaded",Gr,ft,"load",Gr,ft,"resize",go],na(on),lt.forEach(function(h){return h.enable(0,1)}),l=0;l<dt.length;l+=3)ra(sn,dt[l],dt[l+1]),ra(sn,dt[l],dt[l+2])}else if(At){var c=function h(){r.enable(),At.removeEventListener("DOMContentLoaded",h)};At.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(bl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ea)||(ea=i)&&setInterval(Nh,i),"ignoreMobileResize"in n&&(Ac=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(na(sn)||na(on,n.autoRefreshEvents||"none"),np=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Pn(n),o=dt.indexOf(s),a=jr(s);~o&&dt.splice(o,a?6:2),i&&(a?Ri.unshift(ft,i,Tt,i,Wn,i):Ri.unshift(s,i))},r.clearMatchMedia=function(n){lt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Vn(n)?Pn(n):n).getBoundingClientRect(),a=o[s?Zr:$r]*i||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},r.positionInViewport=function(n,i,s){Vn(n)&&(n=Pn(n));var o=n.getBoundingClientRect(),a=o[s?Zr:$r],l=i==null?a/2:i in sl?sl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},r.killAll=function(n){if(lt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Qr.killAll||[];Qr={},i.forEach(function(s){return s()})}},r})();ct.version="3.15.0";ct.saveStyles=function(r){return r?Ho(r).forEach(function(e){if(e&&e.style){var t=Hn.indexOf(e);t>=0&&Hn.splice(t,5),Hn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ze.core.getCache(e),Rc())}}):Hn};ct.revert=function(r,e){return Yu(!r,e)};ct.create=function(r,e){return new ct(r,e)};ct.refresh=function(r){return r?go(!0):(Ts||ct.register())&&Gr(!0)};ct.update=function(r){return++dt.cache&&Zi(r===!0?2:0)};ct.clearScrollMemory=mp;ct.maxScroll=function(r,e){return Ai(r,e?wn:Qt)};ct.getScrollFunc=function(r,e){return Er(Pn(r),e?wn:Qt)};ct.getById=function(r){return Pc[r]};ct.getAll=function(){return lt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!hi};ct.snapDirectional=Xu;ct.addEventListener=function(r,e){var t=Qr[r]||(Qr[r]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(r,e){var t=Qr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ct.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var f=[],d=[],p=ze.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(g){f.length||p.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&p.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&_n(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return _n(s)&&(s=s(),on(ct,"refresh",function(){return s=e.batchMax()})),Ho(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ct.create(c))}),t};var Hh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Cl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===Wn&&r(Tt,t)},ca={auto:1,scroll:1},J_=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ze.core.getCache(s),a=pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ca[(l=ri(s)).overflowY]||ca[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!jr(s)&&(ca[(l=ri(s)).overflowY]||ca[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},vp=function(e,t,n,i){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&J_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(At,qt.eventTypes[0],Gh,!1,!0)},onDisable:function(){return sn(At,qt.eventTypes[0],Gh,!0)}})},j_=/(input|label|select|textarea)/i,Vh,Gh=function(e){var t=j_.test(e.target.tagName);(t||Vh)&&(e._gsapAllow=!0,Vh=t)},Q_=function(e){Fr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Pn(e.target)||Wn,h=ze.core.globals().ScrollSmoother,f=h&&h.get(),d=cr&&(e.content&&Pn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=Er(c,Qt),g=Er(c,wn),v=1,_=(qt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,m=0,w=_n(i)?function(){return i(a)}:function(){return i||2.8},T,M,L=vp(c,e.type,!0,s),D=function(){return M=!1},A=yi,U=yi,E=function(){l=Ai(c,Qt),U=bo(cr?1:0,l),n&&(A=bo(0,Ai(c,wn))),T=Kr},S=function(){d._gsap.y=mo(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},I=function(){if(M){requestAnimationFrame(D);var X=mo(a.deltaY/2),ce=U(p.v-X);if(d&&ce!==p.v+p.offset){p.offset=ce-p.v;var N=mo((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",d._gsap.y=N+"px",p.cacheID=dt.cache,Zi()}return!0}p.offset&&S(),M=!0},B,H,W,J,$=function(){E(),B.isActive()&&B.vars.scrollY>l&&(p()>l?B.progress(1)&&p(l):B.resetTo("scrollY",l))};return d&&ze.set(d,{y:"+=0"}),e.ignoreCheck=function(Z){return cr&&Z.type==="touchmove"&&I()||v>1.05&&Z.type!=="touchstart"||a.isGesturing||Z.touches&&Z.touches.length>1},e.onPress=function(){M=!1;var Z=v;v=mo((ft.visualViewport&&ft.visualViewport.scale||1)/_),B.pause(),Z!==v&&Cl(c,v>1.01?!0:n?!1:"x"),H=g(),W=p(),E(),T=Kr},e.onRelease=e.onGestureStart=function(Z,X){if(p.offset&&S(),!X)J.restart(!0);else{dt.cache++;var ce=w(),N,Me;n&&(N=g(),Me=N+ce*.05*-Z.velocityX/.227,ce*=Hh(g,N,Me,Ai(c,wn)),B.vars.scrollX=A(Me)),N=p(),Me=N+ce*.05*-Z.velocityY/.227,ce*=Hh(p,N,Me,Ai(c,Qt)),B.vars.scrollY=U(Me),B.invalidate().duration(ce).play(.01),(cr&&B.vars.scrollY>=l||N>=l-1)&&ze.to({},{onUpdate:$,duration:ce})}o&&o(Z)},e.onWheel=function(){B._ts&&B.pause(),pn()-m>1e3&&(T=0,m=pn())},e.onChange=function(Z,X,ce,N,Me){if(Kr!==T&&E(),X&&n&&g(A(N[2]===X?H+(Z.startX-Z.x):g()+X-N[1])),ce){p.offset&&S();var Ne=Me[2]===ce,Ye=Ne?W+Z.startY-Z.y:p()+ce-Me[1],te=U(Ye);Ne&&Ye!==te&&(W+=te-Ye),p(te)}(ce||X)&&Zi()},e.onEnable=function(){Cl(c,n?!1:"x"),ct.addEventListener("refresh",$),on(ft,"resize",$),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),L.enable()},e.onDisable=function(){Cl(c,!0),sn(ft,"resize",$),ct.removeEventListener("refresh",$),L.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=cr,cr&&!p()&&p(1),cr&&ze.ticker.add(yi),J=a._dc,B=ze.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:gp(p,p(),function(){return B.pause()})},onUpdate:Zi,onComplete:J.vars.onComplete}),a};ct.sort=function(r){if(_n(r))return lt.sort(r);var e=ft.pageYOffset||0;return ct.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),lt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ct.observe=function(r){return new qt(r)};ct.normalizeScroll=function(r){if(typeof r>"u")return yn;if(r===!0&&yn)return yn.enable();if(r===!1){yn&&yn.kill(),yn=r;return}var e=r instanceof qt?r:Q_(r);return yn&&yn.target===e.target&&yn.kill(),jr(e.target)&&(yn=e),e};ct.core={_getVelocityProp:bc,_inputObserver:vp,_scrollers:dt,_proxies:Ri,bridge:{ss:function(){hi||es("scrollStart"),hi=pn()},ref:function(){return dn}}};op()&&ze.registerPlugin(ct);const eg=[{title:"TradeForge",tags:"concept • web • solidity • development • 3d",url:"https://kianpk.github.io/tradeforge/",hue:"linear-gradient(135deg, #1a2ffb, #6d8cff 40%, #0b1024)"},{title:"Zyrax Drive",tags:"web • design • development • 3d • animation",url:"https://kianpk.github.io/zyrax-drive/",hue:"linear-gradient(135deg, #101018, #2a1a5e 45%, #c1ff00)"},{title:"Playfield",tags:"web • design • development • 3d • physics",url:"https://kianpk.github.io/playfield/",hue:"linear-gradient(135deg, #0e2a22, #1db954 50%, #d9ffe8)"},{title:"Orbit Desk",tags:"web • design • development • 3d • r3f",url:"https://kianpk.github.io/orbit-desk/",hue:"linear-gradient(145deg, #1b1030, #8832f7 55%, #ffb4ef)"},{title:"VaultForge",tags:"solidity • protocol • development",url:"https://github.com/kianPk/vaultforge",hue:"linear-gradient(135deg, #141820, #3d4a66 40%, #9fd0ff)"},{title:"LoadForge",tags:"rust • systems • development",url:"https://github.com/kianPk/loadforge",hue:"linear-gradient(135deg, #2a1208, #ff8039 50%, #ffe0c8)"},{title:"GateProxy",tags:"go • networking • development",url:"https://github.com/kianPk/gateproxy",hue:"linear-gradient(135deg, #071820, #00b7c2 50%, #c8fbff)"},{title:"Honeypot Deck",tags:"web • security • vue • lab",url:"https://kianpk.github.io/honeypot-deck/",hue:"linear-gradient(135deg, #2a0810, #ff4c41 45%, #ffd0d0)"},{title:"Sentinel Grid",tags:"web • security • visualization",url:"https://kianpk.github.io/sentinel-grid/",hue:"linear-gradient(135deg, #0a1420, #1a2ffb 50%, #9db4ff)"},{title:"Lumen Commerce",tags:"web • design • development • commerce",url:"https://kianpk.github.io/lumen-commerce/",hue:"linear-gradient(135deg, #20180a, #ffd24a 50%, #fff4c8)"},{title:"Netprobe Lab",tags:"concept • web • security lab",url:"https://kianpk.github.io/netprobe-lab/",hue:"linear-gradient(135deg, #120820, #b65fff 50%, #f0d8ff)"},{title:"PulseHub",tags:"go • realtime • development",url:"https://github.com/kianPk/pulsehub",hue:"linear-gradient(135deg, #081410, #a2ffab 50%, #e8ffe9)"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qu="170",tg=0,Wh=1,ng=2,xp=1,ig=2,Bi=3,Tr=0,On=1,Vi=2,xr=0,Bs=1,Xh=2,Yh=3,qh=4,rg=5,kr=100,sg=101,og=102,ag=103,lg=104,cg=200,ug=201,hg=202,fg=203,Ic=204,Uc=205,dg=206,pg=207,mg=208,_g=209,gg=210,vg=211,xg=212,Sg=213,Mg=214,Nc=0,Oc=1,Fc=2,Zs=3,Bc=4,zc=5,kc=6,Hc=7,Sp=0,yg=1,Eg=2,$i=0,Tg=1,bg=2,wg=3,Ag=4,Rg=5,Cg=6,Pg=7,Mp=300,$s=301,Ks=302,Vc=303,Gc=304,fl=306,Wc=1e3,Xi=1001,Xc=1002,Kn=1003,Dg=1004,ua=1005,cn=1006,Pl=1007,mr=1008,Qi=1009,yp=1010,Ep=1011,Go=1012,Zu=1013,ts=1014,ci=1015,Yi=1016,$u=1017,Ku=1018,Js=1020,Tp=35902,bp=1021,wp=1022,ui=1023,Ap=1024,Rp=1025,zs=1026,js=1027,Ju=1028,ju=1029,Cp=1030,Qu=1031,eh=1033,Ga=33776,Wa=33777,Xa=33778,Ya=33779,Yc=35840,qc=35841,Zc=35842,$c=35843,Kc=36196,Jc=37492,jc=37496,Qc=37808,eu=37809,tu=37810,nu=37811,iu=37812,ru=37813,su=37814,ou=37815,au=37816,lu=37817,cu=37818,uu=37819,hu=37820,fu=37821,qa=36492,du=36494,pu=36495,Pp=36283,mu=36284,_u=36285,gu=36286,Lg=3200,Ig=3201,Ug=0,Ng=1,bi="",ni="srgb",er="srgb-linear",dl="linear",Ct="srgb",cs=7680,Zh=519,Og=512,Fg=513,Bg=514,Dp=515,zg=516,kg=517,Hg=518,Vg=519,$h=35044,Kh="300 es",qi=2e3,ol=2001;class eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dl=Math.PI/180,vu=180/Math.PI;function Xo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function bn(r,e,t){return Math.max(e,Math.min(t,r))}function Gg(r,e){return(r%e+e)%e}function Ll(r,e,t){return(1-t)*r+t*e}function so(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Cn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,t=0){Pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],v=i[0],_=i[3],m=i[6],w=i[1],T=i[4],M=i[7],L=i[2],D=i[5],A=i[8];return s[0]=o*v+a*w+l*L,s[3]=o*_+a*T+l*D,s[6]=o*m+a*M+l*A,s[1]=c*v+h*w+f*L,s[4]=c*_+h*T+f*D,s[7]=c*m+h*M+f*A,s[2]=d*v+p*w+g*L,s[5]=d*_+p*T+g*D,s[8]=d*m+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=t*f+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Il.makeScale(e,t)),this}rotate(e){return this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new rt;function Lp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function al(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Wg(){const r=al("canvas");return r.style.display="block",r}const Jh={};function vo(r){r in Jh||(Jh[r]=!0,console.warn(r))}function Xg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Yg(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qg(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:er,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bi?dl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const jh=[.64,.33,.3,.6,.15,.06],Qh=[.2126,.7152,.0722],ef=[.3127,.329],tf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nf=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[er]:{primaries:jh,whitePoint:ef,transfer:dl,toXYZ:tf,fromXYZ:nf,luminanceCoefficients:Qh,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:jh,whitePoint:ef,transfer:Ct,toXYZ:tf,fromXYZ:nf,luminanceCoefficients:Qh,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}});let us;class Zg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=al("canvas")),us.width=e.width,us.height=e.height;const n=us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=al("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $g=0;class Ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ul(i[o].image)):s.push(Ul(i[o]))}else s=Ul(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ul(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kg=0;class An extends eo{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=Xi,i=Xi,s=cn,o=mr,a=ui,l=Qi,c=An.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Xo(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wc:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wc:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Mp;An.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,i=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],_=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(p+1)/2,L=(m+1)/2,D=(h+d)/4,A=(f+v)/4,U=(g+_)/4;return T>M&&T>L?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=D/n,s=A/n):M>L?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=D/i,s=U/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=A/s,i=U/s),this.set(n,i,s,t),this}let w=Math.sqrt((_-g)*(_-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(_-g)/w,this.y=(f-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jg extends eo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new An(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ip(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends Jg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Up extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jg extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||h!==g){let _=1-a;const m=l*d+c*p+h*g+f*v,w=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const L=Math.sqrt(T),D=Math.atan2(L,m*w);_=Math.sin(_*D)/L,a=Math.sin(a*D)/L}const M=a*w;if(l=l*_+d*M,c=c*_+p*M,h=h*_+g*M,f=f*_+v*M,_===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=L,c*=L,h*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*p-c*d,e[t+1]=l*g+h*d+c*f-a*p,e[t+2]=c*g+h*p+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nl=new K,rf=new rs;class Yo{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),fa.subVectors(this.max,oo),hs.subVectors(e.a,oo),fs.subVectors(e.b,oo),ds.subVectors(e.c,oo),nr.subVectors(fs,hs),ir.subVectors(ds,fs),Cr.subVectors(hs,ds);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Cr.z,Cr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Cr.z,0,-Cr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Cr.y,Cr.x,0];return!Ol(t,hs,fs,ds,fa)||(t=[1,0,0,0,1,0,0,0,1],!Ol(t,hs,fs,ds,fa))?!1:(da.crossVectors(nr,ir),t=[da.x,da.y,da.z],Ol(t,hs,fs,ds,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new K,new K,new K,new K,new K,new K,new K,new K],di=new K,ha=new Yo,hs=new K,fs=new K,ds=new K,nr=new K,ir=new K,Cr=new K,oo=new K,fa=new K,da=new K,Pr=new K;function Ol(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Pr.fromArray(r,s);const a=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),h=n.dot(Pr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qg=new Yo,ao=new K,Fl=new K;class th{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ao,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(Fl)),this.expandByPoint(ao.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new K,Bl=new K,pa=new K,rr=new K,zl=new K,ma=new K,kl=new K;class e0{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bl.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(Bl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(pa),a=rr.dot(this.direction),l=-rr.dot(pa),c=rr.lengthSq(),h=Math.abs(1-o*o);let f,d,p,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Bl).addScaledVector(pa,d),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,i,s){zl.subVectors(t,e),ma.subVectors(n,e),kl.crossVectors(zl,ma);let o=this.direction.dot(kl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(rr,ma));if(l<0)return null;const c=a*this.direction.dot(zl.cross(rr));if(c<0||l+c>o)return null;const h=-a*rr.dot(kl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,n,i,s,o,a,l,c,h,f,d,p,g,v,_){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,f,d,p,g,v,_)}set(e,t,n,i,s,o,a,l,c,h,f,d,p,g,v,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,g=a*h,v=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,g=c*h,v=c*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,g=c*h,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,g=a*h,v=a*f;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,n0)}lookAt(e,t,n){const i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),sr.crossVectors(n,zn),sr.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),sr.crossVectors(n,zn)),sr.normalize(),_a.crossVectors(zn,sr),i[0]=sr.x,i[4]=_a.x,i[8]=zn.x,i[1]=sr.y,i[5]=_a.y,i[9]=zn.y,i[2]=sr.z,i[6]=_a.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],v=n[6],_=n[10],m=n[14],w=n[3],T=n[7],M=n[11],L=n[15],D=i[0],A=i[4],U=i[8],E=i[12],S=i[1],I=i[5],B=i[9],H=i[13],W=i[2],J=i[6],$=i[10],Z=i[14],X=i[3],ce=i[7],N=i[11],Me=i[15];return s[0]=o*D+a*S+l*W+c*X,s[4]=o*A+a*I+l*J+c*ce,s[8]=o*U+a*B+l*$+c*N,s[12]=o*E+a*H+l*Z+c*Me,s[1]=h*D+f*S+d*W+p*X,s[5]=h*A+f*I+d*J+p*ce,s[9]=h*U+f*B+d*$+p*N,s[13]=h*E+f*H+d*Z+p*Me,s[2]=g*D+v*S+_*W+m*X,s[6]=g*A+v*I+_*J+m*ce,s[10]=g*U+v*B+_*$+m*N,s[14]=g*E+v*H+_*Z+m*Me,s[3]=w*D+T*S+M*W+L*X,s[7]=w*A+T*I+M*J+L*ce,s[11]=w*U+T*B+M*$+L*N,s[15]=w*E+T*H+M*Z+L*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],_=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*p-n*l*p)+v*(+t*l*p-t*c*d+s*o*d-i*o*p+i*c*h-s*l*h)+_*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*h-n*c*h)+m*(-i*a*h-t*l*f+t*a*d+i*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],_=e[14],m=e[15],w=f*_*c-v*d*c+v*l*p-a*_*p-f*l*m+a*d*m,T=g*d*c-h*_*c-g*l*p+o*_*p+h*l*m-o*d*m,M=h*v*c-g*f*c+g*a*p-o*v*p-h*a*m+o*f*m,L=g*f*l-h*v*l-g*a*d+o*v*d+h*a*_-o*f*_,D=t*w+n*T+i*M+s*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=w*A,e[1]=(v*d*s-f*_*s-v*i*p+n*_*p+f*i*m-n*d*m)*A,e[2]=(a*_*s-v*l*s+v*i*c-n*_*c-a*i*m+n*l*m)*A,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*p-n*l*p)*A,e[4]=T*A,e[5]=(h*_*s-g*d*s+g*i*p-t*_*p-h*i*m+t*d*m)*A,e[6]=(g*l*s-o*_*s-g*i*c+t*_*c+o*i*m-t*l*m)*A,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*p+t*l*p)*A,e[8]=M*A,e[9]=(g*f*s-h*v*s-g*n*p+t*v*p+h*n*m-t*f*m)*A,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*m+t*a*m)*A,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*p-t*a*p)*A,e[12]=L*A,e[13]=(h*v*i-g*f*i+g*n*d-t*v*d-h*n*_+t*f*_)*A,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*_-t*a*_)*A,e[15]=(o*f*i-h*a*i+h*n*l-t*f*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,g=s*f,v=o*h,_=o*f,m=a*f,w=l*c,T=l*h,M=l*f,L=n.x,D=n.y,A=n.z;return i[0]=(1-(v+m))*L,i[1]=(p+M)*L,i[2]=(g-T)*L,i[3]=0,i[4]=(p-M)*D,i[5]=(1-(d+m))*D,i[6]=(_+w)*D,i[7]=0,i[8]=(g+T)*A,i[9]=(_-w)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ps.set(i[0],i[1],i[2]).length();const o=ps.set(i[4],i[5],i[6]).length(),a=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);const c=1/s,h=1/o,f=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=f,pi.elements[9]*=f,pi.elements[10]*=f,t.setFromRotationMatrix(pi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=qi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===qi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ol)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=qi){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(o-s),d=(t+e)*c,p=(n+i)*h;let g,v;if(a===qi)g=(o+s)*f,v=-2*f;else if(a===ol)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ps=new K,pi=new Jt,t0=new K(0,0,0),n0=new K(1,1,1),sr=new K,_a=new K,zn=new K,sf=new Jt,of=new rs;class Pi{constructor(e=0,t=0,n=0,i=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(bn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return of.setFromEuler(this),this.setFromQuaternion(of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Np{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i0=0;const af=new K,ms=new rs,Ui=new Jt,ga=new K,lo=new K,r0=new K,s0=new rs,lf=new K(1,0,0),cf=new K(0,1,0),uf=new K(0,0,1),hf={type:"added"},o0={type:"removed"},_s={type:"childadded",child:null},Hl={type:"childremoved",child:null};class Jn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new K,t=new Pi,n=new rs,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new rt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(cf,e)}rotateZ(e){return this.rotateOnAxis(uf,e)}translateOnAxis(e,t){return af.copy(e).applyQuaternion(this.quaternion),this.position.add(af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(cf,e)}translateZ(e){return this.translateOnAxis(uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(lo,ga,this.up):Ui.lookAt(ga,lo,this.up),this.quaternion.setFromRotationMatrix(Ui),i&&(Ui.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(Ui),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hf),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o0),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hf),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,r0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,s0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Jn.DEFAULT_UP=new K(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new K,Ni=new K,Vl=new K,Oi=new K,gs=new K,vs=new K,ff=new K,Gl=new K,Wl=new K,Xl=new K,Yl=new Vt,ql=new Vt,Zl=new Vt;class xi{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),Ni.subVectors(n,t),Vl.subVectors(e,t);const o=mi.dot(mi),a=mi.dot(Ni),l=mi.dot(Vl),c=Ni.dot(Ni),h=Ni.dot(Vl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Yl.setScalar(0),ql.setScalar(0),Zl.setScalar(0),Yl.fromBufferAttribute(e,t),ql.fromBufferAttribute(e,n),Zl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Yl,s.x),o.addScaledVector(ql,s.y),o.addScaledVector(Zl,s.z),o}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Ni.subVectors(e,t),mi.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),mi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;gs.subVectors(i,n),vs.subVectors(s,n),Gl.subVectors(e,n);const l=gs.dot(Gl),c=vs.dot(Gl);if(l<=0&&c<=0)return t.copy(n);Wl.subVectors(e,i);const h=gs.dot(Wl),f=vs.dot(Wl);if(h>=0&&f<=h)return t.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(gs,o);Xl.subVectors(e,s);const p=gs.dot(Xl),g=vs.dot(Xl);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(vs,a);const _=h*g-p*f;if(_<=0&&f-h>=0&&p-g>=0)return ff.subVectors(s,i),a=(f-h)/(f-h+(p-g)),t.copy(i).addScaledVector(ff,a);const m=1/(_+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(gs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},va={h:0,s:0,l:0};function $l(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=Gg(e,1),t=bn(t,0,1),n=bn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$l(o,s,e+1/3),this.g=$l(o,s,e),this.b=$l(o,s,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=ni){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const n=Op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return St.fromWorkingColorSpace(fn.copy(this),e),Math.round(bn(fn.r*255,0,255))*65536+Math.round(bn(fn.g*255,0,255))*256+Math.round(bn(fn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ni){St.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(va);const n=Ll(or.h,va.h,t),i=Ll(or.s,va.s,t),s=Ll(or.l,va.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new yt;yt.NAMES=Op;let a0=0;class pl extends eo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Xo(),this.name="",this.blending=Bs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Uc,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ic&&(n.blendSrc=this.blendSrc),this.blendDst!==Uc&&(n.blendDst=this.blendDst),this.blendEquation!==kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fp extends pl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gi=l0();function l0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function c0(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=bn(r,-65504,65504),Gi.floatView[0]=r;const e=Gi.uint32View[0],t=e>>23&511;return Gi.baseTable[t]+((e&8388607)>>Gi.shiftTable[t])}function u0(r){const e=r>>10;return Gi.uint32View[0]=Gi.mantissaTable[Gi.offsetTable[e]+(r&1023)]+Gi.exponentTable[e],Gi.floatView[0]}const df={toHalfFloat:c0,fromHalfFloat:u0},Zt=new K,xa=new Pt;class fi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=so(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=so(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=so(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=so(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=so(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$h&&(e.usage=this.usage),e}}class Bp extends fi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zp extends fi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jr extends fi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let h0=0;const ei=new Jt,Kl=new Jn,xs=new K,kn=new Yo,co=new Yo,rn=new K;class wr extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lp(e)?zp:Bp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jr(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new th);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(kn.min,co.min),kn.expandByPoint(rn),rn.addVectors(kn.max,co.max),kn.expandByPoint(rn)):(kn.expandByPoint(co.min),kn.expandByPoint(co.max))}kn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),rn.add(xs)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new K,l[U]=new K;const c=new K,h=new K,f=new K,d=new Pt,p=new Pt,g=new Pt,v=new K,_=new K;function m(U,E,S){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),h.sub(c),f.sub(c),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),_.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[U].add(v),a[E].add(v),a[S].add(v),l[U].add(_),l[E].add(_),l[S].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,E=w.length;U<E;++U){const S=w[U],I=S.start,B=S.count;for(let H=I,W=I+B;H<W;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new K,M=new K,L=new K,D=new K;function A(U){L.fromBufferAttribute(i,U),D.copy(L);const E=a[U];T.copy(E),T.sub(L.multiplyScalar(L.dot(E))).normalize(),M.crossVectors(D,E);const I=M.dot(l[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,I)}for(let U=0,E=w.length;U<E;++U){const S=w[U],I=S.start,B=S.count;for(let H=I,W=I+B;H<W;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new K,s=new K,o=new K,a=new K,l=new K,c=new K,h=new K,f=new K;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new fi(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pf=new Jt,Dr=new e0,Sa=new th,mf=new K,Ma=new K,ya=new K,Ea=new K,Jl=new K,Ta=new K,_f=new K,ba=new K;class Si extends Jn{constructor(e=new wr,t=new Fp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Jl.fromBufferAttribute(f,e),o?Ta.addScaledVector(Jl,h):Ta.addScaledVector(Jl.sub(t),h))}t.add(Ta)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(Sa.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Sa,mf)===null||Dr.origin.distanceToSquared(mf)>(e.far-e.near)**2))&&(pf.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(pf),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const _=d[g],m=o[_.materialIndex],w=Math.max(_.start,p.start),T=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let M=w,L=T;M<L;M+=3){const D=a.getX(M),A=a.getX(M+1),U=a.getX(M+2);i=wa(this,m,e,n,c,h,f,D,A,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=g,m=v;_<m;_+=3){const w=a.getX(_),T=a.getX(_+1),M=a.getX(_+2);i=wa(this,o,e,n,c,h,f,w,T,M),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const _=d[g],m=o[_.materialIndex],w=Math.max(_.start,p.start),T=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let M=w,L=T;M<L;M+=3){const D=M,A=M+1,U=M+2;i=wa(this,m,e,n,c,h,f,D,A,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=g,m=v;_<m;_+=3){const w=_,T=_+1,M=_+2;i=wa(this,o,e,n,c,h,f,w,T,M),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function f0(r,e,t,n,i,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Tr,a),l===null)return null;ba.copy(a),ba.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:r}}function wa(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ma),r.getVertexPosition(l,ya),r.getVertexPosition(c,Ea);const h=f0(r,e,t,n,Ma,ya,Ea,_f);if(h){const f=new K;xi.getBarycoord(_f,Ma,ya,Ea,f),i&&(h.uv=xi.getInterpolatedAttribute(i,a,l,c,f,new Pt)),s&&(h.uv1=xi.getInterpolatedAttribute(s,a,l,c,f,new Pt)),o&&(h.normal=xi.getInterpolatedAttribute(o,a,l,c,f,new K),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new K,materialIndex:0};xi.getNormal(Ma,ya,Ea,d.normal),h.face=d,h.barycoord=f}return h}class qo extends wr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Jr(c,3)),this.setAttribute("normal",new Jr(h,3)),this.setAttribute("uv",new Jr(f,2));function g(v,_,m,w,T,M,L,D,A,U,E){const S=M/A,I=L/U,B=M/2,H=L/2,W=D/2,J=A+1,$=U+1;let Z=0,X=0;const ce=new K;for(let N=0;N<$;N++){const Me=N*I-H;for(let Ne=0;Ne<J;Ne++){const Ye=Ne*S-B;ce[v]=Ye*w,ce[_]=Me*T,ce[m]=W,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[_]=0,ce[m]=D>0?1:-1,h.push(ce.x,ce.y,ce.z),f.push(Ne/A),f.push(1-N/U),Z+=1}}for(let N=0;N<U;N++)for(let Me=0;Me<A;Me++){const Ne=d+Me+J*N,Ye=d+Me+J*(N+1),te=d+(Me+1)+J*(N+1),le=d+(Me+1)+J*N;l.push(Ne,Ye,le),l.push(Ye,te,le),X+=6}a.addGroup(p,X,E),p+=X,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const n=Qs(r[t]);for(const i in n)e[i]=n[i]}return e}function d0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const p0={clone:Qs,merge:Mn};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends pl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hp extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new K,gf=new Pt,vf=new Pt;class si extends Hp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vu*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,gf,vf),t.subVectors(vf,gf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,Ms=1;class g0 extends Jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new si(Ss,Ms,e,t);i.layers=this.layers,this.add(i);const s=new si(Ss,Ms,e,t);s.layers=this.layers,this.add(s);const o=new si(Ss,Ms,e,t);o.layers=this.layers,this.add(o);const a=new si(Ss,Ms,e,t);a.layers=this.layers,this.add(a);const l=new si(Ss,Ms,e,t);l.layers=this.layers,this.add(l);const c=new si(Ss,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vp extends An{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Vp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qo(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:xr});s.uniforms.tEquirect.value=t;const o=new Si(i,s),a=t.minFilter;return t.minFilter===mr&&(t.minFilter=cn),new g0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const jl=new K,x0=new K,S0=new rt;class Br{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=jl.subVectors(n,t).cross(x0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||S0.getNormalMatrix(e),i=this.coplanarPoint(jl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new th,Aa=new K;class Gp{constructor(e=new Br,t=new Br,n=new Br,i=new Br,s=new Br,o=new Br){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],p=i[8],g=i[9],v=i[10],_=i[11],m=i[12],w=i[13],T=i[14],M=i[15];if(n[0].setComponents(l-s,d-c,_-p,M-m).normalize(),n[1].setComponents(l+s,d+c,_+p,M+m).normalize(),n[2].setComponents(l+o,d+h,_+g,M+w).normalize(),n[3].setComponents(l-o,d-h,_-g,M-w).normalize(),n[4].setComponents(l-a,d-f,_-v,M-T).normalize(),t===qi)n[5].setComponents(l+a,d+f,_+v,M+T).normalize();else if(t===ol)n[5].setComponents(a,f,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Aa.x=i.normal.x>0?e.max.x:e.min.x,Aa.y=i.normal.y>0?e.max.y:e.min.y,Aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function M0(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Zo extends wr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,p=[],g=[],v=[],_=[];for(let m=0;m<h;m++){const w=m*d-o;for(let T=0;T<c;T++){const M=T*f-s;g.push(M,-w,0),v.push(0,0,1),_.push(T/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const T=w+c*m,M=w+c*(m+1),L=w+1+c*(m+1),D=w+1+c*m;p.push(T,M,D),p.push(M,L,D)}this.setIndex(p),this.setAttribute("position",new Jr(g,3)),this.setAttribute("normal",new Jr(v,3)),this.setAttribute("uv",new Jr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
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
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
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
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
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
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N0=`#ifdef USE_IRIDESCENCE
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
#endif`,O0=`#ifdef USE_BUMPMAP
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,X0=`#define PI 3.141592653589793
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
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q0=`vec3 transformedNormal = objectNormal;
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
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
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
}`,uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
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
#endif`,pv=`#ifdef USE_ENVMAP
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
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
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
#endif`,Sv=`struct PhysicalMaterial {
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
}`,Mv=`
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
#endif`,yv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dv=`#if defined( USE_POINTS_UV )
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
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
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
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
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
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ox=`float getShadowMask() {
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
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
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
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,_x=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
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
}`,Rx=`#if DEPTH_PACKING == 3200
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
}`,Cx=`#define DISTANCE
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
}`,Px=`#define DISTANCE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Fx=`#define LAMBERT
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
}`,Bx=`#define LAMBERT
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
}`,zx=`#define MATCAP
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
}`,kx=`#define MATCAP
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
}`,Hx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Gx=`#define PHONG
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
}`,Wx=`#define PHONG
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
}`,Xx=`#define STANDARD
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
}`,Yx=`#define STANDARD
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
}`,qx=`#define TOON
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
}`,Zx=`#define TOON
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
}`,$x=`uniform float size;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,jx=`uniform vec3 color;
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
}`,Qx=`uniform float rotation;
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
}`,eS=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:y0,alphahash_pars_fragment:E0,alphamap_fragment:T0,alphamap_pars_fragment:b0,alphatest_fragment:w0,alphatest_pars_fragment:A0,aomap_fragment:R0,aomap_pars_fragment:C0,batching_pars_vertex:P0,batching_vertex:D0,begin_vertex:L0,beginnormal_vertex:I0,bsdfs:U0,iridescence_fragment:N0,bumpmap_pars_fragment:O0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:k0,color_fragment:H0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Z0,displacementmap_vertex:$0,emissivemap_fragment:K0,emissivemap_pars_fragment:J0,colorspace_fragment:j0,colorspace_pars_fragment:Q0,envmap_fragment:ev,envmap_common_pars_fragment:tv,envmap_pars_fragment:nv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:pv,envmap_vertex:rv,fog_vertex:sv,fog_pars_vertex:ov,fog_fragment:av,fog_pars_fragment:lv,gradientmap_pars_fragment:cv,lightmap_pars_fragment:uv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:fv,lights_pars_begin:dv,lights_toon_fragment:mv,lights_toon_pars_fragment:_v,lights_phong_fragment:gv,lights_phong_pars_fragment:vv,lights_physical_fragment:xv,lights_physical_pars_fragment:Sv,lights_fragment_begin:Mv,lights_fragment_maps:yv,lights_fragment_end:Ev,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:bv,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Av,map_fragment:Rv,map_pars_fragment:Cv,map_particle_fragment:Pv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Iv,morphinstance_vertex:Uv,morphcolor_vertex:Nv,morphnormal_vertex:Ov,morphtarget_pars_vertex:Fv,morphtarget_vertex:Bv,normal_fragment_begin:zv,normal_fragment_maps:kv,normal_pars_fragment:Hv,normal_pars_vertex:Vv,normal_vertex:Gv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:Yv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Zv,opaque_fragment:$v,packing:Kv,premultiplied_alpha_fragment:Jv,project_vertex:jv,dithering_fragment:Qv,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:rx,shadowmap_vertex:sx,shadowmask_pars_fragment:ox,skinbase_vertex:ax,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:ux,specularmap_fragment:hx,specularmap_pars_fragment:fx,tonemapping_fragment:dx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:_x,uv_pars_fragment:gx,uv_pars_vertex:vx,uv_vertex:xx,worldpos_vertex:Sx,background_vert:Mx,background_frag:yx,backgroundCube_vert:Ex,backgroundCube_frag:Tx,cube_vert:bx,cube_frag:wx,depth_vert:Ax,depth_frag:Rx,distanceRGBA_vert:Cx,distanceRGBA_frag:Px,equirect_vert:Dx,equirect_frag:Lx,linedashed_vert:Ix,linedashed_frag:Ux,meshbasic_vert:Nx,meshbasic_frag:Ox,meshlambert_vert:Fx,meshlambert_frag:Bx,meshmatcap_vert:zx,meshmatcap_frag:kx,meshnormal_vert:Hx,meshnormal_frag:Vx,meshphong_vert:Gx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:Yx,meshtoon_vert:qx,meshtoon_frag:Zx,points_vert:$x,points_frag:Kx,shadow_vert:Jx,shadow_frag:jx,sprite_vert:Qx,sprite_frag:eS},Pe={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ei={basic:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Mn([Pe.points,Pe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Mn([Pe.common,Pe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Mn([Pe.sprite,Pe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Mn([Pe.lights,Pe.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Ei.physical={uniforms:Mn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Ra={r:0,b:0,g:0},Ir=new Pi,tS=new Jt;function nS(r,e,t,n,i,s,o){const a=new yt(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function g(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function v(w){let T=!1;const M=g(w);M===null?m(a,l):M&&M.isColor&&(m(M,1),T=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(w,T){const M=g(T);M&&(M.isCubeTexture||M.mapping===fl)?(h===void 0&&(h=new Si(new qo(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Qs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ir.copy(T.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tS.makeRotationFromEuler(Ir)),h.material.toneMapped=St.getTransfer(M.colorSpace)!==Ct,(f!==M||d!==M.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,p=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Si(new Zo(2,2),new Di({name:"BackgroundMaterial",uniforms:Qs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=St.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,p=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,T){w.getRGB(Ra,kp(r)),n.buffers.color.setClear(Ra.r,Ra.g,Ra.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(w,T=1){a.set(w),l=T,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:v,addToRenderList:_}}function iS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,I,B,H,W){let J=!1;const $=f(H,B,I);s!==$&&(s=$,c(s.object)),J=p(S,H,B,W),J&&g(S,H,B,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(S,I,B,H),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function f(S,I,B){const H=B.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let J=W[I.id];J===void 0&&(J={},W[I.id]=J);let $=J[H];return $===void 0&&($=d(l()),J[H]=$),$}function d(S){const I=[],B=[],H=[];for(let W=0;W<t;W++)I[W]=0,B[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,I,B,H){const W=s.attributes,J=I.attributes;let $=0;const Z=B.getAttributes();for(const X in Z)if(Z[X].location>=0){const N=W[X];let Me=J[X];if(Me===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),N===void 0||N.attribute!==Me||Me&&N.data!==Me.data)return!0;$++}return s.attributesNum!==$||s.index!==H}function g(S,I,B,H){const W={},J=I.attributes;let $=0;const Z=B.getAttributes();for(const X in Z)if(Z[X].location>=0){let N=J[X];N===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(N=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(N=S.instanceColor));const Me={};Me.attribute=N,N&&N.data&&(Me.data=N.data),W[X]=Me,$++}s.attributes=W,s.attributesNum=$,s.index=H}function v(){const S=s.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function _(S){m(S,0)}function m(S,I){const B=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;B[S]=1,H[S]===0&&(r.enableVertexAttribArray(S),H[S]=1),W[S]!==I&&(r.vertexAttribDivisor(S,I),W[S]=I)}function w(){const S=s.newAttributes,I=s.enabledAttributes;for(let B=0,H=I.length;B<H;B++)I[B]!==S[B]&&(r.disableVertexAttribArray(B),I[B]=0)}function T(S,I,B,H,W,J,$){$===!0?r.vertexAttribIPointer(S,I,B,W,J):r.vertexAttribPointer(S,I,B,H,W,J)}function M(S,I,B,H){v();const W=H.attributes,J=B.getAttributes(),$=I.defaultAttributeValues;for(const Z in J){const X=J[Z];if(X.location>=0){let ce=W[Z];if(ce===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){const N=ce.normalized,Me=ce.itemSize,Ne=e.get(ce);if(Ne===void 0)continue;const Ye=Ne.buffer,te=Ne.type,le=Ne.bytesPerElement,he=te===r.INT||te===r.UNSIGNED_INT||ce.gpuType===Zu;if(ce.isInterleavedBufferAttribute){const fe=ce.data,me=fe.stride,Se=ce.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<X.locationSize;ke++)m(X.location+ke,fe.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<X.locationSize;ke++)_(X.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ke=0;ke<X.locationSize;ke++)T(X.location+ke,Me/X.locationSize,te,N,me*le,(Se+Me/X.locationSize*ke)*le,he)}else{if(ce.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)m(X.location+fe,ce.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let fe=0;fe<X.locationSize;fe++)_(X.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let fe=0;fe<X.locationSize;fe++)T(X.location+fe,Me/X.locationSize,te,N,Me*le,Me/X.locationSize*fe*le,he)}}else if($!==void 0){const N=$[Z];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(X.location,N);break;case 3:r.vertexAttrib3fv(X.location,N);break;case 4:r.vertexAttrib4fv(X.location,N);break;default:r.vertexAttrib1fv(X.location,N)}}}}w()}function L(){U();for(const S in n){const I=n[S];for(const B in I){const H=I[B];for(const W in H)h(H[W].object),delete H[W];delete I[B]}delete n[S]}}function D(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const B in I){const H=I[B];for(const W in H)h(H[W].object),delete H[W];delete I[B]}delete n[S.id]}function A(S){for(const I in n){const B=n[I];if(B[S.id]===void 0)continue;const H=B[S.id];for(const W in H)h(H[W].object),delete H[W];delete B[S.id]}}function U(){E(),o=!0,s!==i&&(s=i,c(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:_,disableUnusedAttributes:w}}function rS(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,n,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==ui&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const U=A===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Qi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!U)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:L,maxSamples:D}}function oS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Br,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,_=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!_)s?h(null):c();else{const w=s?0:n,T=w*4;let M=m.clippingState||null;l.value=M,M=h(g,d,T,p);for(let L=0;L!==T;++L)M[L]=t[L];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,g){const v=f!==null?f.length:0;let _=null;if(v!==0){if(_=l.value,g!==!0||_===null){const m=p+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<m)&&(_=new Float32Array(m));for(let T=0,M=p;T!==v;++T,M+=4)o.copy(f[T]).applyMatrix4(w,a),o.normal.toArray(_,M),_[M+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function aS(r){let e=new WeakMap;function t(o,a){return a===Vc?o.mapping=$s:a===Gc&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vc||a===Gc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new v0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class lS extends Hp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cs=4,xf=[.125,.215,.35,.446,.526,.582],Hr=20,Ql=new lS,Sf=new yt;let ec=null,tc=0,nc=0,ic=!1;const zr=(1+Math.sqrt(5))/2,ys=1/zr,Mf=[new K(-zr,ys,0),new K(zr,ys,0),new K(-ys,0,zr),new K(ys,0,zr),new K(0,zr,-ys),new K(0,zr,ys),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class yf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),this._renderer.xr.enabled=ic,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Yi,format:ui,colorSpace:er,depthBuffer:!1},i=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cS(s)),this._blurMaterial=uS(s,e,t)}return i}_compileMaterial(e){const t=new Si(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,n,i){const a=new si(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Sf),h.toneMapping=$i,h.autoClear=!1;const p=new Fp({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),g=new Si(new qo,p);let v=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,v=!0):(p.color.copy(Sf),v=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const T=this._cubeSize;Ca(i,w*T,m>2?T:0,T,T),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$s||e.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ca(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ql)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mf[(i-s-1)%Mf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Si(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hr-1),v=s/g,_=isFinite(s)?1+Math.floor(h*v):Hr;_>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Hr}`);const m=[];let w=0;for(let A=0;A<Hr;++A){const U=A/v,E=Math.exp(-U*U/2);m.push(E),A===0?w+=E:A<_&&(w+=2*E)}for(let A=0;A<m.length;A++)m[A]=m[A]/w;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const M=this._sizeLods[i],L=3*M*(i>T-Cs?i-T+Cs:0),D=4*(this._cubeSize-M);Ca(t,L,D,3*M,2*M),l.setRenderTarget(t),l.render(f,Ql)}}function cS(r){const e=[],t=[],n=[];let i=r;const s=r-Cs+1+xf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Cs?l=xf[o-r+Cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,v=3,_=2,m=1,w=new Float32Array(v*g*p),T=new Float32Array(_*g*p),M=new Float32Array(m*g*p);for(let D=0;D<p;D++){const A=D%3*2/3-1,U=D>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];w.set(E,v*g*D),T.set(d,_*g*D);const S=[D,D,D,D,D,D];M.set(S,m*g*D)}const L=new wr;L.setAttribute("position",new fi(w,v)),L.setAttribute("uv",new fi(T,_)),L.setAttribute("faceIndex",new fi(M,m)),e.push(L),i>Cs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ef(r,e,t){const n=new ns(r,e,t);return n.texture.mapping=fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ca(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function uS(r,e,t){const n=new Float32Array(Hr),i=new K(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nh(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Tf(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function bf(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function hS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vc||l===Gc,h=l===$s||l===Ks;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new yf(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new yf(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&vo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dS(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let _=0,m=v.length;_<m;_++)e.remove(v[_])}d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let _=0,m=v.length;_<m;_++)e.update(v[_],r.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let T=0,M=w.length;T<M;T+=3){const L=w[T+0],D=w[T+1],A=w[T+2];d.push(L,D,D,A,A,L)}}else if(g!==void 0){const w=g.array;v=g.version;for(let T=0,M=w.length/3-1;T<M;T+=3){const L=T+0,D=T+1,A=T+2;d.push(L,D,D,A,A,L)}}else return;const _=new(Lp(d)?zp:Bp)(d,1);_.version=v;const m=s.get(f);m&&e.remove(m),s.set(f,_)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function pS(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];t.update(_,n,1)}function f(d,p,g,v){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],v[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,v,0,g);let m=0;for(let w=0;w<g;w++)m+=p[w]*v[w];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function mS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _S(r,e,t){const n=new WeakMap,i=new Vt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let S=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),_===!0&&(M=3);let L=a.attributes.position.count*M,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*D*4*f),U=new Up(A,L,D,f);U.type=ci,U.needsUpdate=!0;const E=M*4;for(let I=0;I<f;I++){const B=m[I],H=w[I],W=T[I],J=L*D*4*I;for(let $=0;$<B.count;$++){const Z=$*E;g===!0&&(i.fromBufferAttribute(B,$),A[J+Z+0]=i.x,A[J+Z+1]=i.y,A[J+Z+2]=i.z,A[J+Z+3]=0),v===!0&&(i.fromBufferAttribute(H,$),A[J+Z+4]=i.x,A[J+Z+5]=i.y,A[J+Z+6]=i.z,A[J+Z+7]=0),_===!0&&(i.fromBufferAttribute(W,$),A[J+Z+8]=i.x,A[J+Z+9]=i.y,A[J+Z+10]=i.z,A[J+Z+11]=W.itemSize===4?i.w:1)}}d={count:f,texture:U,size:new Pt(L,D)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function gS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Xp extends An{constructor(e,t,n,i,s,o,a,l,c,h=zs){if(h!==zs&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=ts),n===void 0&&h===js&&(n=Js),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kn,this.minFilter=l!==void 0?l:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yp=new An,wf=new Xp(1,1),qp=new Up,Zp=new jg,$p=new Vp,Af=[],Rf=[],Cf=new Float32Array(16),Pf=new Float32Array(9),Df=new Float32Array(4);function to(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Af[i];if(s===void 0&&(s=new Float32Array(i),Af[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ml(r,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function vS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function xS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function SS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function MS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function yS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Df.set(n),r.uniformMatrix2fv(this.addr,!1,Df),tn(t,n)}}function ES(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Pf.set(n),r.uniformMatrix3fv(this.addr,!1,Pf),tn(t,n)}}function TS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Cf.set(n),r.uniformMatrix4fv(this.addr,!1,Cf),tn(t,n)}}function bS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function AS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function RS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function CS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function PS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function DS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function LS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function IS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(wf.compareFunction=Dp,s=wf):s=Yp,t.setTexture2D(e||s,i)}function US(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zp,i)}function NS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$p,i)}function OS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qp,i)}function FS(r){switch(r){case 5126:return vS;case 35664:return xS;case 35665:return SS;case 35666:return MS;case 35674:return yS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return bS;case 35667:case 35671:return wS;case 35668:case 35672:return AS;case 35669:case 35673:return RS;case 5125:return CS;case 36294:return PS;case 36295:return DS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return IS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return OS}}function BS(r,e){r.uniform1fv(this.addr,e)}function zS(r,e){const t=to(e,this.size,2);r.uniform2fv(this.addr,t)}function kS(r,e){const t=to(e,this.size,3);r.uniform3fv(this.addr,t)}function HS(r,e){const t=to(e,this.size,4);r.uniform4fv(this.addr,t)}function VS(r,e){const t=to(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function GS(r,e){const t=to(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function WS(r,e){const t=to(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function XS(r,e){r.uniform1iv(this.addr,e)}function YS(r,e){r.uniform2iv(this.addr,e)}function qS(r,e){r.uniform3iv(this.addr,e)}function ZS(r,e){r.uniform4iv(this.addr,e)}function $S(r,e){r.uniform1uiv(this.addr,e)}function KS(r,e){r.uniform2uiv(this.addr,e)}function JS(r,e){r.uniform3uiv(this.addr,e)}function jS(r,e){r.uniform4uiv(this.addr,e)}function QS(r,e,t){const n=this.cache,i=e.length,s=ml(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Yp,s[o])}function eM(r,e,t){const n=this.cache,i=e.length,s=ml(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zp,s[o])}function tM(r,e,t){const n=this.cache,i=e.length,s=ml(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$p,s[o])}function nM(r,e,t){const n=this.cache,i=e.length,s=ml(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||qp,s[o])}function iM(r){switch(r){case 5126:return BS;case 35664:return zS;case 35665:return kS;case 35666:return HS;case 35674:return VS;case 35675:return GS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return YS;case 35668:case 35672:return qS;case 35669:case 35673:return ZS;case 5125:return $S;case 36294:return KS;case 36295:return JS;case 36296:return jS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}class rM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=FS(t.type)}}class sM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iM(t.type)}}class oM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function Lf(r,e){r.seq.push(e),r.map[e.id]=e}function aM(r,e,t){const n=r.name,i=n.length;for(rc.lastIndex=0;;){const s=rc.exec(n),o=rc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lf(t,c===void 0?new rM(a,r,e):new sM(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new oM(a),Lf(t,f)),t=f}}}class Za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);aM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function If(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const lM=37297;let cM=0;function uM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Uf=new rt;function hM(r){St._getMatrix(Uf,St.workingColorSpace,r);const e=`mat3( ${Uf.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(r)){case dl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Nf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+uM(r.getShaderSource(e),o)}else return i}function fM(r,e){const t=hM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dM(r,e){let t;switch(e){case Tg:t="Linear";break;case bg:t="Reinhard";break;case wg:t="Cineon";break;case Ag:t="ACESFilmic";break;case Cg:t="AgX";break;case Pg:t="Neutral";break;case Rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pa=new K;function pM(){St.getLuminanceCoefficients(Pa);const r=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function _M(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function xo(r){return r!==""}function Of(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ff(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(r){return r.replace(vM,SM)}const xM=new Map;function SM(r,e){let t=ot[e];if(t===void 0){const n=xM.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xu(t)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(r){return r.replace(MM,yM)}function yM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zf(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function EM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function wM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sp:e="ENVMAP_BLENDING_MULTIPLY";break;case yg:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function AM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function RM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=EM(t),c=TM(t),h=bM(t),f=wM(t),d=AM(t),p=mM(t),g=_M(s),v=i.createProgram();let _,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xo).join(`
`),m.length>0&&(m+=`
`)):(_=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),m=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?ot.tonemapping_pars_fragment:"",t.toneMapping!==$i?dM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,fM("linearToOutputTexel",t.outputColorSpace),pM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),o=xu(o),o=Of(o,t),o=Ff(o,t),a=xu(a),a=Of(a,t),a=Ff(a,t),o=Bf(o),a=Bf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=w+_+o,M=w+m+a,L=If(i,i.VERTEX_SHADER,T),D=If(i,i.FRAGMENT_SHADER,M);i.attachShader(v,L),i.attachShader(v,D),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(I){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(v).trim(),H=i.getShaderInfoLog(L).trim(),W=i.getShaderInfoLog(D).trim();let J=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,L,D);else{const Z=Nf(i,L,"vertex"),X=Nf(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Z+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||W==="")&&($=!1);$&&(I.diagnostics={runnable:J,programLog:B,vertexShader:{log:H,prefix:_},fragmentShader:{log:W,prefix:m}})}i.deleteShader(L),i.deleteShader(D),U=new Za(i,v),E=gM(i,v)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,lM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=D,this}let CM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DM(e),t.set(e,n)),n}}class DM{constructor(e){this.id=CM++,this.code=e,this.usedTimes=0}}function LM(r,e,t,n,i,s,o){const a=new Np,l=new PM,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function _(E,S,I,B,H){const W=B.fog,J=H.geometry,$=E.isMeshStandardMaterial?B.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||$),X=Z&&Z.mapping===fl?Z.image.height:null,ce=g[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const N=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Me=N!==void 0?N.length:0;let Ne=0;J.morphAttributes.position!==void 0&&(Ne=1),J.morphAttributes.normal!==void 0&&(Ne=2),J.morphAttributes.color!==void 0&&(Ne=3);let Ye,te,le,he;if(ce){const Le=Ei[ce];Ye=Le.vertexShader,te=Le.fragmentShader}else Ye=E.vertexShader,te=E.fragmentShader,l.update(E),le=l.getVertexShaderID(E),he=l.getFragmentShaderID(E);const fe=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),Se=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,qe=!!E.map,We=!!E.matcap,De=!!Z,z=!!E.aoMap,pt=!!E.lightMap,Ue=!!E.bumpMap,V=!!E.normalMap,Oe=!!E.displacementMap,it=!!E.emissiveMap,Ce=!!E.metalnessMap,P=!!E.roughnessMap,b=E.anisotropy>0,Y=E.clearcoat>0,oe=E.dispersion>0,se=E.iridescence>0,re=E.sheen>0,ye=E.transmission>0,ge=b&&!!E.anisotropyMap,Te=Y&&!!E.clearcoatMap,et=Y&&!!E.clearcoatNormalMap,_e=Y&&!!E.clearcoatRoughnessMap,Ee=se&&!!E.iridescenceMap,Be=se&&!!E.iridescenceThicknessMap,Fe=re&&!!E.sheenColorMap,Ie=re&&!!E.sheenRoughnessMap,Ke=!!E.specularMap,He=!!E.specularColorMap,$e=!!E.specularIntensityMap,F=ye&&!!E.transmissionMap,ee=ye&&!!E.thicknessMap,ne=!!E.gradientMap,ae=!!E.alphaMap,we=E.alphaTest>0,Ae=!!E.alphaHash,Je=!!E.extensions;let gt=$i;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(gt=r.toneMapping);const Ot={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:Ye,fragmentShader:te,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:he,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ke,batchingColor:ke&&H._colorsTexture!==null,instancing:Se,instancingColor:Se&&H.instanceColor!==null,instancingMorph:Se&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:er,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:We,envMap:De,envMapMode:De&&Z.mapping,envMapCubeUVHeight:X,aoMap:z,lightMap:pt,bumpMap:Ue,normalMap:V,displacementMap:d&&Oe,emissiveMap:it,normalMapObjectSpace:V&&E.normalMapType===Ng,normalMapTangentSpace:V&&E.normalMapType===Ug,metalnessMap:Ce,roughnessMap:P,anisotropy:b,anisotropyMap:ge,clearcoat:Y,clearcoatMap:Te,clearcoatNormalMap:et,clearcoatRoughnessMap:_e,dispersion:oe,iridescence:se,iridescenceMap:Ee,iridescenceThicknessMap:Be,sheen:re,sheenColorMap:Fe,sheenRoughnessMap:Ie,specularMap:Ke,specularColorMap:He,specularIntensityMap:$e,transmission:ye,transmissionMap:F,thicknessMap:ee,gradientMap:ne,opaque:E.transparent===!1&&E.blending===Bs&&E.alphaToCoverage===!1,alphaMap:ae,alphaTest:we,alphaHash:Ae,combine:E.combine,mapUv:qe&&v(E.map.channel),aoMapUv:z&&v(E.aoMap.channel),lightMapUv:pt&&v(E.lightMap.channel),bumpMapUv:Ue&&v(E.bumpMap.channel),normalMapUv:V&&v(E.normalMap.channel),displacementMapUv:Oe&&v(E.displacementMap.channel),emissiveMapUv:it&&v(E.emissiveMap.channel),metalnessMapUv:Ce&&v(E.metalnessMap.channel),roughnessMapUv:P&&v(E.roughnessMap.channel),anisotropyMapUv:ge&&v(E.anisotropyMap.channel),clearcoatMapUv:Te&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(E.sheenRoughnessMap.channel),specularMapUv:Ke&&v(E.specularMap.channel),specularColorMapUv:He&&v(E.specularColorMap.channel),specularIntensityMapUv:$e&&v(E.specularIntensityMap.channel),transmissionMapUv:F&&v(E.transmissionMap.channel),thicknessMapUv:ee&&v(E.thicknessMap.channel),alphaMapUv:ae&&v(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(V||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(qe||ae),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:me,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&St.getTransfer(E.map.colorSpace)===Ct,decodeVideoTextureEmissive:it&&E.emissiveMap.isVideoTexture===!0&&St.getTransfer(E.emissiveMap.colorSpace)===Ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Vi,flipSided:E.side===On,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Je&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&E.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function m(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(w(S,E),T(S,E),S.push(r.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function w(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const S=g[E.type];let I;if(S){const B=Ei[S];I=p0.clone(B.uniforms)}else I=E.uniforms;return I}function L(E,S){let I;for(let B=0,H=h.length;B<H;B++){const W=h[B];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new RM(r,S,E,s),h.push(I)),I}function D(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function U(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:L,releaseProgram:D,releaseShaderCache:A,programs:h,dispose:U}}function IM(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function UM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,p,g,v,_){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:_},r[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=v,m.group=_),e++,m}function a(f,d,p,g,v,_){const m=o(f,d,p,g,v,_);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(f,d,p,g,v,_){const m=o(f,d,p,g,v,_);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||UM),n.length>1&&n.sort(d||kf),i.length>1&&i.sort(d||kf)}function h(){for(let f=e,d=r.length;f<d;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function NM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Hf,r.set(n,[o])):i>=s.length?(o=new Hf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function OM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new yt};break;case"SpotLight":t={position:new K,direction:new K,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function FM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let BM=0;function zM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function kM(r){const e=new OM,t=FM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const i=new K,s=new Jt,o=new Jt;function a(c){let h=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,v=0,_=0,m=0,w=0,T=0,M=0,L=0,D=0,A=0;c.sort(zM);for(let E=0,S=c.length;E<S;E++){const I=c[E],B=I.color,H=I.intensity,W=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*H,f+=B.g*H,d+=B.b*H;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],H);A++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,X=t.get(I);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=$,p++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(B).multiplyScalar(H),$.distance=W,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[v]=$;const Z=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,Z.updateMatrices(I),I.castShadow&&D++),n.spotLightMatrix[v]=Z.matrix,I.castShadow){const X=t.get(I);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=J,M++}v++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(B).multiplyScalar(H),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[_]=$,_++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const Z=I.shadow,X=t.get(I);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=I.shadow.matrix,T++}n.point[g]=$,g++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(H),$.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[m]=$,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==_||U.hemiLength!==m||U.numDirectionalShadows!==w||U.numPointShadows!==T||U.numSpotShadows!==M||U.numSpotMaps!==L||U.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=_,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+L-D,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=A,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=_,U.hemiLength=m,U.numDirectionalShadows=w,U.numPointShadows=T,U.numSpotShadows=M,U.numSpotMaps=L,U.numLightProbes=A,n.version=BM++)}function l(c,h){let f=0,d=0,p=0,g=0,v=0;const _=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const T=c[m];if(T.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),f++}else if(T.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),p++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(T.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(_),d++}else if(T.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:n}}function Vf(r){const e=new kM(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function HM(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Vf(r),e.set(i,[a])):s>=o.length?(a=new Vf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class VM extends pl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends pl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XM=`uniform sampler2D shadow_pass;
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
}`;function YM(r,e,t){let n=new Gp;const i=new Pt,s=new Pt,o=new Vt,a=new VM({depthPacking:Ig}),l=new GM,c={},h=t.maxTextureSize,f={[Tr]:On,[On]:Tr,[Vi]:Vi},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:WM,fragmentShader:XM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new wr;g.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Si(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xp;let m=this.type;this.render=function(D,A,U){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const E=r.getRenderTarget(),S=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),B=r.state;B.setBlending(xr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=m!==Bi&&this.type===Bi,W=m===Bi&&this.type!==Bi;for(let J=0,$=D.length;J<$;J++){const Z=D[J],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ce=X.getFrameExtents();if(i.multiply(ce),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ce.x),i.x=s.x*ce.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ce.y),i.y=s.y*ce.y,X.mapSize.y=s.y)),X.map===null||H===!0||W===!0){const Me=this.type!==Bi?{minFilter:Kn,magFilter:Kn}:{};X.map!==null&&X.map.dispose(),X.map=new ns(i.x,i.y,Me),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const N=X.getViewportCount();for(let Me=0;Me<N;Me++){const Ne=X.getViewport(Me);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),B.viewport(o),X.updateMatrices(Z,Me),n=X.getFrustum(),M(A,U,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===Bi&&w(X,U),X.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(E,S,I)};function w(D,A){const U=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ns(i.x,i.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(A,null,U,d,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(A,null,U,p,v,null)}function T(D,A,U,E){let S=null;const I=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)S=I;else if(S=U.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=S.uuid,H=A.uuid;let W=c[B];W===void 0&&(W={},c[B]=W);let J=W[H];J===void 0&&(J=S.clone(),W[H]=J,A.addEventListener("dispose",L)),S=J}if(S.visible=A.visible,S.wireframe=A.wireframe,E===Bi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=r.properties.get(S);B.light=U}return S}function M(D,A,U,E,S){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===Bi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);const H=e.update(D),W=D.material;if(Array.isArray(W)){const J=H.groups;for(let $=0,Z=J.length;$<Z;$++){const X=J[$],ce=W[X.materialIndex];if(ce&&ce.visible){const N=T(D,ce,E,S);D.onBeforeShadow(r,D,A,U,H,N,X),r.renderBufferDirect(U,null,H,N,D,X),D.onAfterShadow(r,D,A,U,H,N,X)}}}else if(W.visible){const J=T(D,W,E,S);D.onBeforeShadow(r,D,A,U,H,J,null),r.renderBufferDirect(U,null,H,J,D,null),D.onAfterShadow(r,D,A,U,H,J,null)}}const B=D.children;for(let H=0,W=B.length;H<W;H++)M(B[H],A,U,E,S)}function L(D){D.target.removeEventListener("dispose",L);for(const U in c){const E=c[U],S=D.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const qM={[Nc]:Oc,[Fc]:kc,[Bc]:Hc,[Zs]:zc,[Oc]:Nc,[kc]:Fc,[Hc]:Bc,[zc]:Zs};function ZM(r,e){function t(){let F=!1;const ee=new Vt;let ne=null;const ae=new Vt(0,0,0,0);return{setMask:function(we){ne!==we&&!F&&(r.colorMask(we,we,we,we),ne=we)},setLocked:function(we){F=we},setClear:function(we,Ae,Je,gt,Ot){Ot===!0&&(we*=gt,Ae*=gt,Je*=gt),ee.set(we,Ae,Je,gt),ae.equals(ee)===!1&&(r.clearColor(we,Ae,Je,gt),ae.copy(ee))},reset:function(){F=!1,ne=null,ae.set(-1,0,0,0)}}}function n(){let F=!1,ee=!1,ne=null,ae=null,we=null;return{setReversed:function(Ae){if(ee!==Ae){const Je=e.get("EXT_clip_control");ee?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);const gt=we;we=null,this.setClear(gt)}ee=Ae},getReversed:function(){return ee},setTest:function(Ae){Ae?fe(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(Ae){ne!==Ae&&!F&&(r.depthMask(Ae),ne=Ae)},setFunc:function(Ae){if(ee&&(Ae=qM[Ae]),ae!==Ae){switch(Ae){case Nc:r.depthFunc(r.NEVER);break;case Oc:r.depthFunc(r.ALWAYS);break;case Fc:r.depthFunc(r.LESS);break;case Zs:r.depthFunc(r.LEQUAL);break;case Bc:r.depthFunc(r.EQUAL);break;case zc:r.depthFunc(r.GEQUAL);break;case kc:r.depthFunc(r.GREATER);break;case Hc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=Ae}},setLocked:function(Ae){F=Ae},setClear:function(Ae){we!==Ae&&(ee&&(Ae=1-Ae),r.clearDepth(Ae),we=Ae)},reset:function(){F=!1,ne=null,ae=null,we=null,ee=!1}}}function i(){let F=!1,ee=null,ne=null,ae=null,we=null,Ae=null,Je=null,gt=null,Ot=null;return{setTest:function(Le){F||(Le?fe(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(Le){ee!==Le&&!F&&(r.stencilMask(Le),ee=Le)},setFunc:function(Le,Ve,nt){(ne!==Le||ae!==Ve||we!==nt)&&(r.stencilFunc(Le,Ve,nt),ne=Le,ae=Ve,we=nt)},setOp:function(Le,Ve,nt){(Ae!==Le||Je!==Ve||gt!==nt)&&(r.stencilOp(Le,Ve,nt),Ae=Le,Je=Ve,gt=nt)},setLocked:function(Le){F=Le},setClear:function(Le){Ot!==Le&&(r.clearStencil(Le),Ot=Le)},reset:function(){F=!1,ee=null,ne=null,ae=null,we=null,Ae=null,Je=null,gt=null,Ot=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],g=null,v=!1,_=null,m=null,w=null,T=null,M=null,L=null,D=null,A=new yt(0,0,0),U=0,E=!1,S=null,I=null,B=null,H=null,W=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=Z>=2);let ce=null,N={};const Me=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),Ye=new Vt().fromArray(Me),te=new Vt().fromArray(Ne);function le(F,ee,ne,ae){const we=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(F,Ae),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<ne;Je++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(ee+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return Ae}const he={};he[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(r.DEPTH_TEST),o.setFunc(Zs),Ue(!1),V(Wh),fe(r.CULL_FACE),z(xr);function fe(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function me(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Se(F,ee){return f[F]!==ee?(r.bindFramebuffer(F,ee),f[F]=ee,F===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ee),F===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function ke(F,ee){let ne=p,ae=!1;if(F){ne=d.get(ee),ne===void 0&&(ne=[],d.set(ee,ne));const we=F.textures;if(ne.length!==we.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,Je=we.length;Ae<Je;Ae++)ne[Ae]=r.COLOR_ATTACHMENT0+Ae;ne.length=we.length,ae=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,ae=!0);ae&&r.drawBuffers(ne)}function qe(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const We={[kr]:r.FUNC_ADD,[sg]:r.FUNC_SUBTRACT,[og]:r.FUNC_REVERSE_SUBTRACT};We[ag]=r.MIN,We[lg]=r.MAX;const De={[cg]:r.ZERO,[ug]:r.ONE,[hg]:r.SRC_COLOR,[Ic]:r.SRC_ALPHA,[gg]:r.SRC_ALPHA_SATURATE,[mg]:r.DST_COLOR,[dg]:r.DST_ALPHA,[fg]:r.ONE_MINUS_SRC_COLOR,[Uc]:r.ONE_MINUS_SRC_ALPHA,[_g]:r.ONE_MINUS_DST_COLOR,[pg]:r.ONE_MINUS_DST_ALPHA,[vg]:r.CONSTANT_COLOR,[xg]:r.ONE_MINUS_CONSTANT_COLOR,[Sg]:r.CONSTANT_ALPHA,[Mg]:r.ONE_MINUS_CONSTANT_ALPHA};function z(F,ee,ne,ae,we,Ae,Je,gt,Ot,Le){if(F===xr){v===!0&&(me(r.BLEND),v=!1);return}if(v===!1&&(fe(r.BLEND),v=!0),F!==rg){if(F!==_||Le!==E){if((m!==kr||M!==kr)&&(r.blendEquation(r.FUNC_ADD),m=kr,M=kr),Le)switch(F){case Bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xh:r.blendFunc(r.ONE,r.ONE);break;case Yh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,T=null,L=null,D=null,A.set(0,0,0),U=0,_=F,E=Le}return}we=we||ee,Ae=Ae||ne,Je=Je||ae,(ee!==m||we!==M)&&(r.blendEquationSeparate(We[ee],We[we]),m=ee,M=we),(ne!==w||ae!==T||Ae!==L||Je!==D)&&(r.blendFuncSeparate(De[ne],De[ae],De[Ae],De[Je]),w=ne,T=ae,L=Ae,D=Je),(gt.equals(A)===!1||Ot!==U)&&(r.blendColor(gt.r,gt.g,gt.b,Ot),A.copy(gt),U=Ot),_=F,E=!1}function pt(F,ee){F.side===Vi?me(r.CULL_FACE):fe(r.CULL_FACE);let ne=F.side===On;ee&&(ne=!ne),Ue(ne),F.blending===Bs&&F.transparent===!1?z(xr):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ae=F.stencilWrite;a.setTest(ae),ae&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),it(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(F){S!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),S=F)}function V(F){F!==tg?(fe(r.CULL_FACE),F!==I&&(F===Wh?r.cullFace(r.BACK):F===ng?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),I=F}function Oe(F){F!==B&&($&&r.lineWidth(F),B=F)}function it(F,ee,ne){F?(fe(r.POLYGON_OFFSET_FILL),(H!==ee||W!==ne)&&(r.polygonOffset(ee,ne),H=ee,W=ne)):me(r.POLYGON_OFFSET_FILL)}function Ce(F){F?fe(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function P(F){F===void 0&&(F=r.TEXTURE0+J-1),ce!==F&&(r.activeTexture(F),ce=F)}function b(F,ee,ne){ne===void 0&&(ce===null?ne=r.TEXTURE0+J-1:ne=ce);let ae=N[ne];ae===void 0&&(ae={type:void 0,texture:void 0},N[ne]=ae),(ae.type!==F||ae.texture!==ee)&&(ce!==ne&&(r.activeTexture(ne),ce=ne),r.bindTexture(F,ee||he[F]),ae.type=F,ae.texture=ee)}function Y(){const F=N[ce];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function oe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(F){Ye.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ye.copy(F))}function Ie(F){te.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Ke(F,ee){let ne=c.get(ee);ne===void 0&&(ne=new WeakMap,c.set(ee,ne));let ae=ne.get(F);ae===void 0&&(ae=r.getUniformBlockIndex(ee,F.name),ne.set(F,ae))}function He(F,ee){const ae=c.get(ee).get(F);l.get(ee)!==ae&&(r.uniformBlockBinding(ee,ae,F.__bindingPointIndex),l.set(ee,ae))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ce=null,N={},f={},d=new WeakMap,p=[],g=null,v=!1,_=null,m=null,w=null,T=null,M=null,L=null,D=null,A=new yt(0,0,0),U=0,E=!1,S=null,I=null,B=null,H=null,W=null,Ye.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:me,bindFramebuffer:Se,drawBuffers:ke,useProgram:qe,setBlending:z,setMaterial:pt,setFlipSided:Ue,setCullFace:V,setLineWidth:Oe,setPolygonOffset:it,setScissorTest:Ce,activeTexture:P,bindTexture:b,unbindTexture:Y,compressedTexImage2D:oe,compressedTexImage3D:se,texImage2D:Ee,texImage3D:Be,updateUBOMapping:Ke,uniformBlockBinding:He,texStorage2D:et,texStorage3D:_e,texSubImage2D:re,texSubImage3D:ye,compressedTexSubImage2D:ge,compressedTexSubImage3D:Te,scissor:Fe,viewport:Ie,reset:$e}}function Gf(r,e,t,n){const i=$M(n);switch(t){case bp:return r*e;case Ap:return r*e;case Rp:return r*e*2;case Ju:return r*e/i.components*i.byteLength;case ju:return r*e/i.components*i.byteLength;case Cp:return r*e*2/i.components*i.byteLength;case Qu:return r*e*2/i.components*i.byteLength;case wp:return r*e*3/i.components*i.byteLength;case ui:return r*e*4/i.components*i.byteLength;case eh:return r*e*4/i.components*i.byteLength;case Ga:case Wa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xa:case Ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qc:case $c:return Math.max(r,16)*Math.max(e,8)/4;case Yc:case Zc:return Math.max(r,8)*Math.max(e,8)/2;case Kc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case tu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case nu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case iu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ru:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case su:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ou:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case au:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case cu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case uu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qa:case du:case pu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Pp:case mu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case _u:case gu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $M(r){switch(r){case Qi:case yp:return{byteLength:1,components:1};case Go:case Ep:case Yi:return{byteLength:2,components:1};case $u:case Ku:return{byteLength:2,components:4};case ts:case Zu:case ci:return{byteLength:4,components:1};case Tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function KM(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return p?new OffscreenCanvas(P,b):al("canvas")}function v(P,b,Y){let oe=1;const se=Ce(P);if((se.width>Y||se.height>Y)&&(oe=Y/Math.max(se.width,se.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const re=Math.floor(oe*se.width),ye=Math.floor(oe*se.height);f===void 0&&(f=g(re,ye));const ge=b?g(re,ye):f;return ge.width=re,ge.height=ye,ge.getContext("2d").drawImage(P,0,0,re,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+re+"x"+ye+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function _(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(P,b,Y,oe,se=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=b;if(b===r.RED&&(Y===r.FLOAT&&(re=r.R32F),Y===r.HALF_FLOAT&&(re=r.R16F),Y===r.UNSIGNED_BYTE&&(re=r.R8)),b===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.R8UI),Y===r.UNSIGNED_SHORT&&(re=r.R16UI),Y===r.UNSIGNED_INT&&(re=r.R32UI),Y===r.BYTE&&(re=r.R8I),Y===r.SHORT&&(re=r.R16I),Y===r.INT&&(re=r.R32I)),b===r.RG&&(Y===r.FLOAT&&(re=r.RG32F),Y===r.HALF_FLOAT&&(re=r.RG16F),Y===r.UNSIGNED_BYTE&&(re=r.RG8)),b===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.RG8UI),Y===r.UNSIGNED_SHORT&&(re=r.RG16UI),Y===r.UNSIGNED_INT&&(re=r.RG32UI),Y===r.BYTE&&(re=r.RG8I),Y===r.SHORT&&(re=r.RG16I),Y===r.INT&&(re=r.RG32I)),b===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(re=r.RGB16UI),Y===r.UNSIGNED_INT&&(re=r.RGB32UI),Y===r.BYTE&&(re=r.RGB8I),Y===r.SHORT&&(re=r.RGB16I),Y===r.INT&&(re=r.RGB32I)),b===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(re=r.RGBA16UI),Y===r.UNSIGNED_INT&&(re=r.RGBA32UI),Y===r.BYTE&&(re=r.RGBA8I),Y===r.SHORT&&(re=r.RGBA16I),Y===r.INT&&(re=r.RGBA32I)),b===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(re=r.RGB9_E5),b===r.RGBA){const ye=se?dl:St.getTransfer(oe);Y===r.FLOAT&&(re=r.RGBA32F),Y===r.HALF_FLOAT&&(re=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(re=ye===Ct?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(P,b){let Y;return P?b===null||b===ts||b===Js?Y=r.DEPTH24_STENCIL8:b===ci?Y=r.DEPTH32F_STENCIL8:b===Go&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ts||b===Js?Y=r.DEPTH_COMPONENT24:b===ci?Y=r.DEPTH_COMPONENT32F:b===Go&&(Y=r.DEPTH_COMPONENT16),Y}function L(P,b){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Kn&&P.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function D(P){const b=P.target;b.removeEventListener("dispose",D),U(b),b.isVideoTexture&&h.delete(b)}function A(P){const b=P.target;b.removeEventListener("dispose",A),S(b)}function U(P){const b=n.get(P);if(b.__webglInit===void 0)return;const Y=P.source,oe=d.get(Y);if(oe){const se=oe[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&E(P),Object.keys(oe).length===0&&d.delete(Y)}n.remove(P)}function E(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const Y=P.source,oe=d.get(Y);delete oe[b.__cacheKey],o.memory.textures--}function S(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let se=0;se<b.__webglFramebuffer[oe].length;se++)r.deleteFramebuffer(b.__webglFramebuffer[oe][se]);else r.deleteFramebuffer(b.__webglFramebuffer[oe]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)r.deleteFramebuffer(b.__webglFramebuffer[oe]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)b.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[oe]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=P.textures;for(let oe=0,se=Y.length;oe<se;oe++){const re=n.get(Y[oe]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(Y[oe])}n.remove(P)}let I=0;function B(){I=0}function H(){const P=I;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function W(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function J(P,b){const Y=n.get(P);if(P.isVideoTexture&&Oe(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const oe=P.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Y,P,b);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+b)}function $(P,b){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){te(Y,P,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+b)}function Z(P,b){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){te(Y,P,b);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+b)}function X(P,b){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){le(Y,P,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+b)}const ce={[Wc]:r.REPEAT,[Xi]:r.CLAMP_TO_EDGE,[Xc]:r.MIRRORED_REPEAT},N={[Kn]:r.NEAREST,[Dg]:r.NEAREST_MIPMAP_NEAREST,[ua]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[Pl]:r.LINEAR_MIPMAP_NEAREST,[mr]:r.LINEAR_MIPMAP_LINEAR},Me={[Og]:r.NEVER,[Vg]:r.ALWAYS,[Fg]:r.LESS,[Dp]:r.LEQUAL,[Bg]:r.EQUAL,[Hg]:r.GEQUAL,[zg]:r.GREATER,[kg]:r.NOTEQUAL};function Ne(P,b){if(b.type===ci&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===Pl||b.magFilter===ua||b.magFilter===mr||b.minFilter===cn||b.minFilter===Pl||b.minFilter===ua||b.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ce[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ce[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ce[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,N[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Kn||b.minFilter!==ua&&b.minFilter!==mr||b.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ye(P,b){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",D));const oe=b.source;let se=d.get(oe);se===void 0&&(se={},d.set(oe,se));const re=W(b);if(re!==P.__cacheKey){se[re]===void 0&&(se[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),se[re].usedTimes++;const ye=se[P.__cacheKey];ye!==void 0&&(se[P.__cacheKey].usedTimes--,ye.usedTimes===0&&E(b)),P.__cacheKey=re,P.__webglTexture=se[re].texture}return Y}function te(P,b,Y){let oe=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=r.TEXTURE_3D);const se=Ye(P,b),re=b.source;t.bindTexture(oe,P.__webglTexture,r.TEXTURE0+Y);const ye=n.get(re);if(re.version!==ye.__version||se===!0){t.activeTexture(r.TEXTURE0+Y);const ge=St.getPrimaries(St.workingColorSpace),Te=b.colorSpace===bi?null:St.getPrimaries(b.colorSpace),et=b.colorSpace===bi||ge===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let _e=v(b.image,!1,i.maxTextureSize);_e=it(b,_e);const Ee=s.convert(b.format,b.colorSpace),Be=s.convert(b.type);let Fe=T(b.internalFormat,Ee,Be,b.colorSpace,b.isVideoTexture);Ne(oe,b);let Ie;const Ke=b.mipmaps,He=b.isVideoTexture!==!0,$e=ye.__version===void 0||se===!0,F=re.dataReady,ee=L(b,_e);if(b.isDepthTexture)Fe=M(b.format===js,b.type),$e&&(He?t.texStorage2D(r.TEXTURE_2D,1,Fe,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ee,Be,null));else if(b.isDataTexture)if(Ke.length>0){He&&$e&&t.texStorage2D(r.TEXTURE_2D,ee,Fe,Ke[0].width,Ke[0].height);for(let ne=0,ae=Ke.length;ne<ae;ne++)Ie=Ke[ne],He?F&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Ie.width,Ie.height,Ee,Be,Ie.data):t.texImage2D(r.TEXTURE_2D,ne,Fe,Ie.width,Ie.height,0,Ee,Be,Ie.data);b.generateMipmaps=!1}else He?($e&&t.texStorage2D(r.TEXTURE_2D,ee,Fe,_e.width,_e.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e.width,_e.height,Ee,Be,_e.data)):t.texImage2D(r.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ee,Be,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){He&&$e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Fe,Ke[0].width,Ke[0].height,_e.depth);for(let ne=0,ae=Ke.length;ne<ae;ne++)if(Ie=Ke[ne],b.format!==ui)if(Ee!==null)if(He){if(F)if(b.layerUpdates.size>0){const we=Gf(Ie.width,Ie.height,b.format,b.type);for(const Ae of b.layerUpdates){const Je=Ie.data.subarray(Ae*we/Ie.data.BYTES_PER_ELEMENT,(Ae+1)*we/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Ae,Ie.width,Ie.height,1,Ee,Je)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,Ie.width,Ie.height,_e.depth,Ee,Ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Fe,Ie.width,Ie.height,_e.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,Ie.width,Ie.height,_e.depth,Ee,Be,Ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Fe,Ie.width,Ie.height,_e.depth,0,Ee,Be,Ie.data)}else{He&&$e&&t.texStorage2D(r.TEXTURE_2D,ee,Fe,Ke[0].width,Ke[0].height);for(let ne=0,ae=Ke.length;ne<ae;ne++)Ie=Ke[ne],b.format!==ui?Ee!==null?He?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Fe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Ie.width,Ie.height,Ee,Be,Ie.data):t.texImage2D(r.TEXTURE_2D,ne,Fe,Ie.width,Ie.height,0,Ee,Be,Ie.data)}else if(b.isDataArrayTexture)if(He){if($e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Fe,_e.width,_e.height,_e.depth),F)if(b.layerUpdates.size>0){const ne=Gf(_e.width,_e.height,b.format,b.type);for(const ae of b.layerUpdates){const we=_e.data.subarray(ae*ne/_e.data.BYTES_PER_ELEMENT,(ae+1)*ne/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ae,_e.width,_e.height,1,Ee,Be,we)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ee,Be,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Ee,Be,_e.data);else if(b.isData3DTexture)He?($e&&t.texStorage3D(r.TEXTURE_3D,ee,Fe,_e.width,_e.height,_e.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ee,Be,_e.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Ee,Be,_e.data);else if(b.isFramebufferTexture){if($e)if(He)t.texStorage2D(r.TEXTURE_2D,ee,Fe,_e.width,_e.height);else{let ne=_e.width,ae=_e.height;for(let we=0;we<ee;we++)t.texImage2D(r.TEXTURE_2D,we,Fe,ne,ae,0,Ee,Be,null),ne>>=1,ae>>=1}}else if(Ke.length>0){if(He&&$e){const ne=Ce(Ke[0]);t.texStorage2D(r.TEXTURE_2D,ee,Fe,ne.width,ne.height)}for(let ne=0,ae=Ke.length;ne<ae;ne++)Ie=Ke[ne],He?F&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Ee,Be,Ie):t.texImage2D(r.TEXTURE_2D,ne,Fe,Ee,Be,Ie);b.generateMipmaps=!1}else if(He){if($e){const ne=Ce(_e);t.texStorage2D(r.TEXTURE_2D,ee,Fe,ne.width,ne.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,Be,_e)}else t.texImage2D(r.TEXTURE_2D,0,Fe,Ee,Be,_e);_(b)&&m(oe),ye.__version=re.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function le(P,b,Y){if(b.image.length!==6)return;const oe=Ye(P,b),se=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const re=n.get(se);if(se.version!==re.__version||oe===!0){t.activeTexture(r.TEXTURE0+Y);const ye=St.getPrimaries(St.workingColorSpace),ge=b.colorSpace===bi?null:St.getPrimaries(b.colorSpace),Te=b.colorSpace===bi||ye===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const et=b.isCompressedTexture||b.image[0].isCompressedTexture,_e=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let ae=0;ae<6;ae++)!et&&!_e?Ee[ae]=v(b.image[ae],!0,i.maxCubemapSize):Ee[ae]=_e?b.image[ae].image:b.image[ae],Ee[ae]=it(b,Ee[ae]);const Be=Ee[0],Fe=s.convert(b.format,b.colorSpace),Ie=s.convert(b.type),Ke=T(b.internalFormat,Fe,Ie,b.colorSpace),He=b.isVideoTexture!==!0,$e=re.__version===void 0||oe===!0,F=se.dataReady;let ee=L(b,Be);Ne(r.TEXTURE_CUBE_MAP,b);let ne;if(et){He&&$e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,Ke,Be.width,Be.height);for(let ae=0;ae<6;ae++){ne=Ee[ae].mipmaps;for(let we=0;we<ne.length;we++){const Ae=ne[we];b.format!==ui?Fe!==null?He?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,0,0,Ae.width,Ae.height,Fe,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,Ke,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,0,0,Ae.width,Ae.height,Fe,Ie,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,Ke,Ae.width,Ae.height,0,Fe,Ie,Ae.data)}}}else{if(ne=b.mipmaps,He&&$e){ne.length>0&&ee++;const ae=Ce(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,Ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(_e){He?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ee[ae].width,Ee[ae].height,Fe,Ie,Ee[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Ee[ae].width,Ee[ae].height,0,Fe,Ie,Ee[ae].data);for(let we=0;we<ne.length;we++){const Je=ne[we].image[ae].image;He?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,0,0,Je.width,Je.height,Fe,Ie,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,Ke,Je.width,Je.height,0,Fe,Ie,Je.data)}}else{He?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,Ie,Ee[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Fe,Ie,Ee[ae]);for(let we=0;we<ne.length;we++){const Ae=ne[we];He?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,0,0,Fe,Ie,Ae.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,Ke,Fe,Ie,Ae.image[ae])}}}_(b)&&m(r.TEXTURE_CUBE_MAP),re.__version=se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function he(P,b,Y,oe,se,re){const ye=s.convert(Y.format,Y.colorSpace),ge=s.convert(Y.type),Te=T(Y.internalFormat,ye,ge,Y.colorSpace),et=n.get(b),_e=n.get(Y);if(_e.__renderTarget=b,!et.__hasExternalTextures){const Ee=Math.max(1,b.width>>re),Be=Math.max(1,b.height>>re);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,re,Te,Ee,Be,b.depth,0,ye,ge,null):t.texImage2D(se,re,Te,Ee,Be,0,ye,ge,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),V(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,se,_e.__webglTexture,0,Ue(b)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,se,_e.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(P,b,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const oe=b.depthTexture,se=oe&&oe.isDepthTexture?oe.type:null,re=M(b.stencilBuffer,se),ye=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=Ue(b);V(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,re,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,re,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,re,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,P)}else{const oe=b.textures;for(let se=0;se<oe.length;se++){const re=oe[se],ye=s.convert(re.format,re.colorSpace),ge=s.convert(re.type),Te=T(re.internalFormat,ye,ge,re.colorSpace),et=Ue(b);Y&&V(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,Te,b.width,b.height):V(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,Te,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Te,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(b.depthTexture);oe.__renderTarget=b,(!oe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const se=oe.__webglTexture,re=Ue(b);if(b.depthTexture.format===zs)V(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(b.depthTexture.format===js)V(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Se(P){const b=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const oe=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){const se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",se)};oe.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=oe}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");me(b.__webglFramebuffer,P)}else if(Y){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=r.createRenderbuffer(),fe(b.__webglDepthbuffer[oe],P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer[oe];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,re)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),fe(b.__webglDepthbuffer,P,!1);else{const oe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(P,b,Y){const oe=n.get(P);b!==void 0&&he(oe.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Se(P)}function qe(P){const b=P.texture,Y=n.get(P),oe=n.get(b);P.addEventListener("dispose",A);const se=P.textures,re=P.isWebGLCubeRenderTarget===!0,ye=se.length>1;if(ye||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=b.version,o.memory.textures++),re){Y.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[ge]=[];for(let Te=0;Te<b.mipmaps.length;Te++)Y.__webglFramebuffer[ge][Te]=r.createFramebuffer()}else Y.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)Y.__webglFramebuffer[ge]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(ye)for(let ge=0,Te=se.length;ge<Te;ge++){const et=n.get(se[ge]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&V(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ge=0;ge<se.length;ge++){const Te=se[ge];Y.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[ge]);const et=s.convert(Te.format,Te.colorSpace),_e=s.convert(Te.type),Ee=T(Te.internalFormat,et,_e,Te.colorSpace,P.isXRRenderTarget===!0),Be=Ue(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Ee,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,Y.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)he(Y.__webglFramebuffer[ge][Te],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Te);else he(Y.__webglFramebuffer[ge],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(b)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ge=0,Te=se.length;ge<Te;ge++){const et=se[ge],_e=n.get(et);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),Ne(r.TEXTURE_2D,et),he(Y.__webglFramebuffer,P,et,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,0),_(et)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ge=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ge,oe.__webglTexture),Ne(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)he(Y.__webglFramebuffer[Te],P,b,r.COLOR_ATTACHMENT0,ge,Te);else he(Y.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,ge,0);_(b)&&m(ge),t.unbindTexture()}P.depthBuffer&&Se(P)}function We(P){const b=P.textures;for(let Y=0,oe=b.length;Y<oe;Y++){const se=b[Y];if(_(se)){const re=w(P),ye=n.get(se).__webglTexture;t.bindTexture(re,ye),m(re),t.unbindTexture()}}}const De=[],z=[];function pt(P){if(P.samples>0){if(V(P)===!1){const b=P.textures,Y=P.width,oe=P.height;let se=r.COLOR_BUFFER_BIT;const re=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(P),ge=b.length>1;if(ge)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),ge){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);const et=n.get(b[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,se,r.NEAREST),l===!0&&(De.length=0,z.length=0,De.push(r.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(De.push(re),z.push(re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);const et=n.get(b[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,et,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ue(P){return Math.min(i.maxSamples,P.samples)}function V(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Oe(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function it(P,b){const Y=P.colorSpace,oe=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==er&&Y!==bi&&(St.getTransfer(Y)===Ct?(oe!==ui||se!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function Ce(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=ke,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=he,this.useMultisampledRTT=V}function JM(r,e){function t(n,i=bi){let s;const o=St.getTransfer(i);if(n===Qi)return r.UNSIGNED_BYTE;if(n===$u)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ku)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Tp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===yp)return r.BYTE;if(n===Ep)return r.SHORT;if(n===Go)return r.UNSIGNED_SHORT;if(n===Zu)return r.INT;if(n===ts)return r.UNSIGNED_INT;if(n===ci)return r.FLOAT;if(n===Yi)return r.HALF_FLOAT;if(n===bp)return r.ALPHA;if(n===wp)return r.RGB;if(n===ui)return r.RGBA;if(n===Ap)return r.LUMINANCE;if(n===Rp)return r.LUMINANCE_ALPHA;if(n===zs)return r.DEPTH_COMPONENT;if(n===js)return r.DEPTH_STENCIL;if(n===Ju)return r.RED;if(n===ju)return r.RED_INTEGER;if(n===Cp)return r.RG;if(n===Qu)return r.RG_INTEGER;if(n===eh)return r.RGBA_INTEGER;if(n===Ga||n===Wa||n===Xa||n===Ya)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yc||n===qc||n===Zc||n===$c)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kc||n===Jc||n===jc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Kc||n===Jc)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===jc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===fu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===iu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ru)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===su)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ou)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===au)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qa||n===du||n===pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===qa)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===du)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pp||n===mu||n===_u||n===gu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_u)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class jM extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Da extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,n),m=this._getHandJoint(c,v);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Da;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ty=`
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

}`;class ny{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new An,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Di({vertexShader:ey,fragmentShader:ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Si(new Zo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iy extends eo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null;const v=new ny,_=t.getContextAttributes();let m=null,w=null;const T=[],M=[],L=new Pt;let D=null;const A=new si;A.viewport=new Vt;const U=new si;U.viewport=new Vt;const E=[A,U],S=new jM;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let le=T[te];return le===void 0&&(le=new sc,T[te]=le),le.getTargetRaySpace()},this.getControllerGrip=function(te){let le=T[te];return le===void 0&&(le=new sc,T[te]=le),le.getGripSpace()},this.getHand=function(te){let le=T[te];return le===void 0&&(le=new sc,T[te]=le),le.getHandSpace()};function H(te){const le=M.indexOf(te.inputSource);if(le===-1)return;const he=T[le];he!==void 0&&(he.update(te.inputSource,te.frame,c||o),he.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",J);for(let te=0;te<T.length;te++){const le=M[te];le!==null&&(M[te]=null,T[te].disconnect(le))}I=null,B=null,v.reset(),e.setRenderTarget(m),p=null,d=null,f=null,i=null,w=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",W),i.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ns(p.framebufferWidth,p.framebufferHeight,{format:ui,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let le=null,he=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?js:zs,he=_.stencil?Js:ts);const me={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new ns(d.textureWidth,d.textureHeight,{format:ui,type:Qi,depthTexture:new Xp(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(te){for(let le=0;le<te.removed.length;le++){const he=te.removed[le],fe=M.indexOf(he);fe>=0&&(M[fe]=null,T[fe].disconnect(he))}for(let le=0;le<te.added.length;le++){const he=te.added[le];let fe=M.indexOf(he);if(fe===-1){for(let Se=0;Se<T.length;Se++)if(Se>=M.length){M.push(he),fe=Se;break}else if(M[Se]===null){M[Se]=he,fe=Se;break}if(fe===-1)break}const me=T[fe];me&&me.connect(he)}}const $=new K,Z=new K;function X(te,le,he){$.setFromMatrixPosition(le.matrixWorld),Z.setFromMatrixPosition(he.matrixWorld);const fe=$.distanceTo(Z),me=le.projectionMatrix.elements,Se=he.projectionMatrix.elements,ke=me[14]/(me[10]-1),qe=me[14]/(me[10]+1),We=(me[9]+1)/me[5],De=(me[9]-1)/me[5],z=(me[8]-1)/me[0],pt=(Se[8]+1)/Se[0],Ue=ke*z,V=ke*pt,Oe=fe/(-z+pt),it=Oe*-z;if(le.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(it),te.translateZ(Oe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),me[10]===-1)te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ce=ke+Oe,P=qe+Oe,b=Ue-it,Y=V+(fe-it),oe=We*qe/P*Ce,se=De*qe/P*Ce;te.projectionMatrix.makePerspective(b,Y,oe,se,Ce,P),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ce(te,le){le===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(le.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let le=te.near,he=te.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(he=v.depthFar)),S.near=U.near=A.near=le,S.far=U.far=A.far=he,(I!==S.near||B!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,B=S.far),A.layers.mask=te.layers.mask|2,U.layers.mask=te.layers.mask|4,S.layers.mask=A.layers.mask|U.layers.mask;const fe=te.parent,me=S.cameras;ce(S,fe);for(let Se=0;Se<me.length;Se++)ce(me[Se],fe);me.length===2?X(S,A,U):S.projectionMatrix.copy(A.projectionMatrix),N(te,S,fe)};function N(te,le,he){he===null?te.matrix.copy(le.matrixWorld):(te.matrix.copy(he.matrixWorld),te.matrix.invert(),te.matrix.multiply(le.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=vu*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Me=null;function Ne(te,le){if(h=le.getViewerPose(c||o),g=le,h!==null){const he=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let fe=!1;he.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Se=0;Se<he.length;Se++){const ke=he[Se];let qe=null;if(p!==null)qe=p.getViewport(ke);else{const De=f.getViewSubImage(d,ke);qe=De.viewport,Se===0&&(e.setRenderTargetTextures(w,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(w))}let We=E[Se];We===void 0&&(We=new si,We.layers.enable(Se),We.viewport=new Vt,E[Se]=We),We.matrix.fromArray(ke.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ke.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(qe.x,qe.y,qe.width,qe.height),Se===0&&(S.matrix.copy(We.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(We)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")){const Se=f.getDepthInformation(he[0]);Se&&Se.isValid&&Se.texture&&v.init(e,Se,i.renderState)}}for(let he=0;he<T.length;he++){const fe=M[he],me=T[he];fe!==null&&me!==void 0&&me.update(fe,le,c||o)}Me&&Me(te,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const Ye=new Wp;Ye.setAnimationLoop(Ne),this.setAnimationLoop=function(te){Me=te},this.dispose=function(){}}}const Ur=new Pi,ry=new Jt;function sy(r,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,kp(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,w,T,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),f(_,m)):m.isMeshPhongMaterial?(s(_,m),h(_,m)):m.isMeshStandardMaterial?(s(_,m),d(_,m),m.isMeshPhysicalMaterial&&p(_,m,M)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),v(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,w,T):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===On&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===On&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const w=e.get(m),T=w.envMap,M=w.envMapRotation;T&&(_.envMap.value=T,Ur.copy(M),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),_.envMapRotation.value.setFromMatrix4(ry.makeRotationFromEuler(Ur)),_.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,w,T){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*w,_.scale.value=T*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,w){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===On&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function v(_,m){const w=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oy(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const M=T.program;n.uniformBlockBinding(w,M)}function c(w,T){let M=i[w.id];M===void 0&&(g(w),M=h(w),i[w.id]=M,w.addEventListener("dispose",_));const L=T.program;n.updateUBOMapping(w,L);const D=e.render.frame;s[w.id]!==D&&(d(w),s[w.id]=D)}function h(w){const T=f();w.__bindingPointIndex=T;const M=r.createBuffer(),L=w.__size,D=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,L,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,M),M}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const T=i[w.id],M=w.uniforms,L=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let D=0,A=M.length;D<A;D++){const U=Array.isArray(M[D])?M[D]:[M[D]];for(let E=0,S=U.length;E<S;E++){const I=U[E];if(p(I,D,E,L)===!0){const B=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let J=0;J<H.length;J++){const $=H[J],Z=v($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,B+W,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(w,T,M,L){const D=w.value,A=T+"_"+M;if(L[A]===void 0)return typeof D=="number"||typeof D=="boolean"?L[A]=D:L[A]=D.clone(),!0;{const U=L[A];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return L[A]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function g(w){const T=w.uniforms;let M=0;const L=16;for(let A=0,U=T.length;A<U;A++){const E=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,I=E.length;S<I;S++){const B=E[S],H=Array.isArray(B.value)?B.value:[B.value];for(let W=0,J=H.length;W<J;W++){const $=H[W],Z=v($),X=M%L,ce=X%Z.boundary,N=X+ce;M+=ce,N!==0&&L-N<Z.storage&&(M+=L-N),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=Z.storage}}}const D=M%L;return D>0&&(M+=L-D),w.__size=M,w.__cache={},this}function v(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function _(w){const T=w.target;T.removeEventListener("dispose",_);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function m(){for(const w in i)r.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class ay{constructor(e={}){const{canvas:t=Wg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=$i,this.toneMappingExposure=1;const M=this;let L=!1,D=0,A=0,U=null,E=-1,S=null;const I=new Vt,B=new Vt;let H=null;const W=new yt(0);let J=0,$=t.width,Z=t.height,X=1,ce=null,N=null;const Me=new Vt(0,0,$,Z),Ne=new Vt(0,0,$,Z);let Ye=!1;const te=new Gp;let le=!1,he=!1;const fe=new Jt,me=new Jt,Se=new K,ke=new Vt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function De(){return U===null?X:1}let z=n;function pt(u,x){return t.getContext(u,x)}try{const u={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qu}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),z===null){const x="webgl2";if(z=pt(x,u),z===null)throw pt(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let Ue,V,Oe,it,Ce,P,b,Y,oe,se,re,ye,ge,Te,et,_e,Ee,Be,Fe,Ie,Ke,He,$e,F;function ee(){Ue=new fS(z),Ue.init(),He=new JM(z,Ue),V=new sS(z,Ue,e,He),Oe=new ZM(z,Ue),V.reverseDepthBuffer&&d&&Oe.buffers.depth.setReversed(!0),it=new mS(z),Ce=new IM,P=new KM(z,Ue,Oe,Ce,V,He,it),b=new aS(M),Y=new hS(M),oe=new M0(z),$e=new iS(z,oe),se=new dS(z,oe,it,$e),re=new gS(z,se,oe,it),Fe=new _S(z,V,P),_e=new oS(Ce),ye=new LM(M,b,Y,Ue,V,$e,_e),ge=new sy(M,Ce),Te=new NM,et=new HM(Ue),Be=new nS(M,b,Y,Oe,re,p,l),Ee=new YM(M,re,V),F=new oy(z,it,V,Oe),Ie=new rS(z,Ue,it),Ke=new pS(z,Ue,it),it.programs=ye.programs,M.capabilities=V,M.extensions=Ue,M.properties=Ce,M.renderLists=Te,M.shadowMap=Ee,M.state=Oe,M.info=it}ee();const ne=new iy(M,z);this.xr=ne,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const u=Ue.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=Ue.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(u){u!==void 0&&(X=u,this.setSize($,Z,!1))},this.getSize=function(u){return u.set($,Z)},this.setSize=function(u,x,y=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=u,Z=x,t.width=Math.floor(u*X),t.height=Math.floor(x*X),y===!0&&(t.style.width=u+"px",t.style.height=x+"px"),this.setViewport(0,0,u,x)},this.getDrawingBufferSize=function(u){return u.set($*X,Z*X).floor()},this.setDrawingBufferSize=function(u,x,y){$=u,Z=x,X=y,t.width=Math.floor(u*y),t.height=Math.floor(x*y),this.setViewport(0,0,u,x)},this.getCurrentViewport=function(u){return u.copy(I)},this.getViewport=function(u){return u.copy(Me)},this.setViewport=function(u,x,y,R){u.isVector4?Me.set(u.x,u.y,u.z,u.w):Me.set(u,x,y,R),Oe.viewport(I.copy(Me).multiplyScalar(X).round())},this.getScissor=function(u){return u.copy(Ne)},this.setScissor=function(u,x,y,R){u.isVector4?Ne.set(u.x,u.y,u.z,u.w):Ne.set(u,x,y,R),Oe.scissor(B.copy(Ne).multiplyScalar(X).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(u){Oe.setScissorTest(Ye=u)},this.setOpaqueSort=function(u){ce=u},this.setTransparentSort=function(u){N=u},this.getClearColor=function(u){return u.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(u=!0,x=!0,y=!0){let R=0;if(u){let C=!1;if(U!==null){const O=U.texture.format;C=O===eh||O===Qu||O===ju}if(C){const O=U.texture.type,k=O===Qi||O===ts||O===Go||O===Js||O===$u||O===Ku,q=Be.getClearColor(),G=Be.getClearAlpha(),j=q.r,Q=q.g,ie=q.b;k?(g[0]=j,g[1]=Q,g[2]=ie,g[3]=G,z.clearBufferuiv(z.COLOR,0,g)):(v[0]=j,v[1]=Q,v[2]=ie,v[3]=G,z.clearBufferiv(z.COLOR,0,v))}else R|=z.COLOR_BUFFER_BIT}x&&(R|=z.DEPTH_BUFFER_BIT),y&&(R|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Te.dispose(),et.dispose(),Ce.dispose(),b.dispose(),Y.dispose(),re.dispose(),$e.dispose(),F.dispose(),ye.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Re),ne.removeEventListener("sessionend",Qe),Ge.stop()};function ae(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const u=it.autoReset,x=Ee.enabled,y=Ee.autoUpdate,R=Ee.needsUpdate,C=Ee.type;ee(),it.autoReset=u,Ee.enabled=x,Ee.autoUpdate=y,Ee.needsUpdate=R,Ee.type=C}function Ae(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Je(u){const x=u.target;x.removeEventListener("dispose",Je),gt(x)}function gt(u){Ot(u),Ce.remove(u)}function Ot(u){const x=Ce.get(u).programs;x!==void 0&&(x.forEach(function(y){ye.releaseProgram(y)}),u.isShaderMaterial&&ye.releaseShaderCache(u))}this.renderBufferDirect=function(u,x,y,R,C,O){x===null&&(x=qe);const k=C.isMesh&&C.matrixWorld.determinant()<0,q=vn(u,x,y,R,C);Oe.setMaterial(R,k);let G=y.index,j=1;if(R.wireframe===!0){if(G=se.getWireframeAttribute(y),G===void 0)return;j=2}const Q=y.drawRange,ie=y.attributes.position;let ue=Q.start*j,de=(Q.start+Q.count)*j;O!==null&&(ue=Math.max(ue,O.start*j),de=Math.min(de,(O.start+O.count)*j)),G!==null?(ue=Math.max(ue,0),de=Math.min(de,G.count)):ie!=null&&(ue=Math.max(ue,0),de=Math.min(de,ie.count));const be=de-ue;if(be<0||be===1/0)return;$e.setup(C,R,q,y,G);let ve,xe=Ie;if(G!==null&&(ve=oe.get(G),xe=Ke,xe.setIndex(ve)),C.isMesh)R.wireframe===!0?(Oe.setLineWidth(R.wireframeLinewidth*De()),xe.setMode(z.LINES)):xe.setMode(z.TRIANGLES);else if(C.isLine){let pe=R.linewidth;pe===void 0&&(pe=1),Oe.setLineWidth(pe*De()),C.isLineSegments?xe.setMode(z.LINES):C.isLineLoop?xe.setMode(z.LINE_LOOP):xe.setMode(z.LINE_STRIP)}else C.isPoints?xe.setMode(z.POINTS):C.isSprite&&xe.setMode(z.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)xe.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))xe.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const pe=C._multiDrawStarts,ut=C._multiDrawCounts,Ze=C._multiDrawCount,It=G?oe.get(G).bytesPerElement:1,Mt=Ce.get(R).currentProgram.getUniforms();for(let tt=0;tt<Ze;tt++)Mt.setValue(z,"_gl_DrawID",tt),xe.render(pe[tt]/It,ut[tt])}else if(C.isInstancedMesh)xe.renderInstances(ue,be,C.count);else if(y.isInstancedBufferGeometry){const pe=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,ut=Math.min(y.instanceCount,pe);xe.renderInstances(ue,be,ut)}else xe.render(ue,be)};function Le(u,x,y){u.transparent===!0&&u.side===Vi&&u.forceSinglePass===!1?(u.side=On,u.needsUpdate=!0,bt(u,x,y),u.side=Tr,u.needsUpdate=!0,bt(u,x,y),u.side=Vi):bt(u,x,y)}this.compile=function(u,x,y=null){y===null&&(y=u),m=et.get(y),m.init(x),T.push(m),y.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(m.pushLight(C),C.castShadow&&m.pushShadow(C))}),u!==y&&u.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(m.pushLight(C),C.castShadow&&m.pushShadow(C))}),m.setupLights();const R=new Set;return u.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const O=C.material;if(O)if(Array.isArray(O))for(let k=0;k<O.length;k++){const q=O[k];Le(q,y,C),R.add(q)}else Le(O,y,C),R.add(O)}),T.pop(),m=null,R},this.compileAsync=function(u,x,y=null){const R=this.compile(u,x,y);return new Promise(C=>{function O(){if(R.forEach(function(k){Ce.get(k).currentProgram.isReady()&&R.delete(k)}),R.size===0){C(u);return}setTimeout(O,10)}Ue.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Ve=null;function nt(u){Ve&&Ve(u)}function Re(){Ge.stop()}function Qe(){Ge.start()}const Ge=new Wp;Ge.setAnimationLoop(nt),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(u){Ve=u,ne.setAnimationLoop(u),u===null?Ge.stop():Ge.start()},ne.addEventListener("sessionstart",Re),ne.addEventListener("sessionend",Qe),this.render=function(u,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(x),x=ne.getCamera()),u.isScene===!0&&u.onBeforeRender(M,u,x,U),m=et.get(u,T.length),m.init(x),T.push(m),me.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),te.setFromProjectionMatrix(me),he=this.localClippingEnabled,le=_e.init(this.clippingPlanes,he),_=Te.get(u,w.length),_.init(),w.push(_),ne.enabled===!0&&ne.isPresenting===!0){const O=M.xr.getDepthSensingMesh();O!==null&&je(O,x,-1/0,M.sortObjects)}je(u,x,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(ce,N),We=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,We&&Be.addToRenderList(_,u),this.info.render.frame++,le===!0&&_e.beginShadows();const y=m.state.shadowsArray;Ee.render(y,u,x),le===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const R=_.opaque,C=_.transmissive;if(m.setupLights(),x.isArrayCamera){const O=x.cameras;if(C.length>0)for(let k=0,q=O.length;k<q;k++){const G=O[k];st(R,C,u,G)}We&&Be.render(u);for(let k=0,q=O.length;k<q;k++){const G=O[k];Ft(_,u,G,G.viewport)}}else C.length>0&&st(R,C,u,x),We&&Be.render(u),Ft(_,u,x);U!==null&&(P.updateMultisampleRenderTarget(U),P.updateRenderTargetMipmap(U)),u.isScene===!0&&u.onAfterRender(M,u,x),$e.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(m=T[T.length-1],le===!0&&_e.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function je(u,x,y,R){if(u.visible===!1)return;if(u.layers.test(x.layers)){if(u.isGroup)y=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(x);else if(u.isLight)m.pushLight(u),u.castShadow&&m.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||te.intersectsSprite(u)){R&&ke.setFromMatrixPosition(u.matrixWorld).applyMatrix4(me);const k=re.update(u),q=u.material;q.visible&&_.push(u,k,q,y,ke.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||te.intersectsObject(u))){const k=re.update(u),q=u.material;if(R&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),ke.copy(u.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),ke.copy(k.boundingSphere.center)),ke.applyMatrix4(u.matrixWorld).applyMatrix4(me)),Array.isArray(q)){const G=k.groups;for(let j=0,Q=G.length;j<Q;j++){const ie=G[j],ue=q[ie.materialIndex];ue&&ue.visible&&_.push(u,k,ue,y,ke.z,ie)}}else q.visible&&_.push(u,k,q,y,ke.z,null)}}const O=u.children;for(let k=0,q=O.length;k<q;k++)je(O[k],x,y,R)}function Ft(u,x,y,R){const C=u.opaque,O=u.transmissive,k=u.transparent;m.setupLightsView(y),le===!0&&_e.setGlobalState(M.clippingPlanes,y),R&&Oe.viewport(I.copy(R)),C.length>0&&Rt(C,x,y),O.length>0&&Rt(O,x,y),k.length>0&&Rt(k,x,y),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function st(u,x,y,R){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[R.id]===void 0&&(m.state.transmissionRenderTarget[R.id]=new ns(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Yi:Qi,minFilter:mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const O=m.state.transmissionRenderTarget[R.id],k=R.viewport||I;O.setSize(k.z,k.w);const q=M.getRenderTarget();M.setRenderTarget(O),M.getClearColor(W),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),We&&Be.render(y);const G=M.toneMapping;M.toneMapping=$i;const j=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),m.setupLightsView(R),le===!0&&_e.setGlobalState(M.clippingPlanes,R),Rt(u,y,R),P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Q=!1;for(let ie=0,ue=x.length;ie<ue;ie++){const de=x[ie],be=de.object,ve=de.geometry,xe=de.material,pe=de.group;if(xe.side===Vi&&be.layers.test(R.layers)){const ut=xe.side;xe.side=On,xe.needsUpdate=!0,Xt(be,y,R,ve,xe,pe),xe.side=ut,xe.needsUpdate=!0,Q=!0}}Q===!0&&(P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O))}M.setRenderTarget(q),M.setClearColor(W,J),j!==void 0&&(R.viewport=j),M.toneMapping=G}function Rt(u,x,y){const R=x.isScene===!0?x.overrideMaterial:null;for(let C=0,O=u.length;C<O;C++){const k=u[C],q=k.object,G=k.geometry,j=R===null?k.material:R,Q=k.group;q.layers.test(y.layers)&&Xt(q,x,y,G,j,Q)}}function Xt(u,x,y,R,C,O){u.onBeforeRender(M,x,y,R,C,O),u.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),C.onBeforeRender(M,x,y,R,u,O),C.transparent===!0&&C.side===Vi&&C.forceSinglePass===!1?(C.side=On,C.needsUpdate=!0,M.renderBufferDirect(y,x,R,C,u,O),C.side=Tr,C.needsUpdate=!0,M.renderBufferDirect(y,x,R,C,u,O),C.side=Vi):M.renderBufferDirect(y,x,R,C,u,O),u.onAfterRender(M,x,y,R,C,O)}function bt(u,x,y){x.isScene!==!0&&(x=qe);const R=Ce.get(u),C=m.state.lights,O=m.state.shadowsArray,k=C.state.version,q=ye.getParameters(u,C.state,O,x,y),G=ye.getProgramCacheKey(q);let j=R.programs;R.environment=u.isMeshStandardMaterial?x.environment:null,R.fog=x.fog,R.envMap=(u.isMeshStandardMaterial?Y:b).get(u.envMap||R.environment),R.envMapRotation=R.environment!==null&&u.envMap===null?x.environmentRotation:u.envMapRotation,j===void 0&&(u.addEventListener("dispose",Je),j=new Map,R.programs=j);let Q=j.get(G);if(Q!==void 0){if(R.currentProgram===Q&&R.lightsStateVersion===k)return vt(u,q),Q}else q.uniforms=ye.getUniforms(u),u.onBeforeCompile(q,M),Q=ye.acquireProgram(q,G),j.set(G,Q),R.uniforms=q.uniforms;const ie=R.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(ie.clippingPlanes=_e.uniform),vt(u,q),R.needsLights=Gt(u),R.lightsStateVersion=k,R.needsLights&&(ie.ambientLightColor.value=C.state.ambient,ie.lightProbe.value=C.state.probe,ie.directionalLights.value=C.state.directional,ie.directionalLightShadows.value=C.state.directionalShadow,ie.spotLights.value=C.state.spot,ie.spotLightShadows.value=C.state.spotShadow,ie.rectAreaLights.value=C.state.rectArea,ie.ltc_1.value=C.state.rectAreaLTC1,ie.ltc_2.value=C.state.rectAreaLTC2,ie.pointLights.value=C.state.point,ie.pointLightShadows.value=C.state.pointShadow,ie.hemisphereLights.value=C.state.hemi,ie.directionalShadowMap.value=C.state.directionalShadowMap,ie.directionalShadowMatrix.value=C.state.directionalShadowMatrix,ie.spotShadowMap.value=C.state.spotShadowMap,ie.spotLightMatrix.value=C.state.spotLightMatrix,ie.spotLightMap.value=C.state.spotLightMap,ie.pointShadowMap.value=C.state.pointShadowMap,ie.pointShadowMatrix.value=C.state.pointShadowMatrix),R.currentProgram=Q,R.uniformsList=null,Q}function Et(u){if(u.uniformsList===null){const x=u.currentProgram.getUniforms();u.uniformsList=Za.seqWithValue(x.seq,u.uniforms)}return u.uniformsList}function vt(u,x){const y=Ce.get(u);y.outputColorSpace=x.outputColorSpace,y.batching=x.batching,y.batchingColor=x.batchingColor,y.instancing=x.instancing,y.instancingColor=x.instancingColor,y.instancingMorph=x.instancingMorph,y.skinning=x.skinning,y.morphTargets=x.morphTargets,y.morphNormals=x.morphNormals,y.morphColors=x.morphColors,y.morphTargetsCount=x.morphTargetsCount,y.numClippingPlanes=x.numClippingPlanes,y.numIntersection=x.numClipIntersection,y.vertexAlphas=x.vertexAlphas,y.vertexTangents=x.vertexTangents,y.toneMapping=x.toneMapping}function vn(u,x,y,R,C){x.isScene!==!0&&(x=qe),P.resetTextureUnits();const O=x.fog,k=R.isMeshStandardMaterial?x.environment:null,q=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:er,G=(R.isMeshStandardMaterial?Y:b).get(R.envMap||k),j=R.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,Q=!!y.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),ie=!!y.morphAttributes.position,ue=!!y.morphAttributes.normal,de=!!y.morphAttributes.color;let be=$i;R.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(be=M.toneMapping);const ve=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,xe=ve!==void 0?ve.length:0,pe=Ce.get(R),ut=m.state.lights;if(le===!0&&(he===!0||u!==S)){const at=u===S&&R.id===E;_e.setState(R,u,at)}let Ze=!1;R.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==ut.state.version||pe.outputColorSpace!==q||C.isBatchedMesh&&pe.batching===!1||!C.isBatchedMesh&&pe.batching===!0||C.isBatchedMesh&&pe.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&pe.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&pe.instancing===!1||!C.isInstancedMesh&&pe.instancing===!0||C.isSkinnedMesh&&pe.skinning===!1||!C.isSkinnedMesh&&pe.skinning===!0||C.isInstancedMesh&&pe.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&pe.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&pe.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&pe.instancingMorph===!1&&C.morphTexture!==null||pe.envMap!==G||R.fog===!0&&pe.fog!==O||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==_e.numPlanes||pe.numIntersection!==_e.numIntersection)||pe.vertexAlphas!==j||pe.vertexTangents!==Q||pe.morphTargets!==ie||pe.morphNormals!==ue||pe.morphColors!==de||pe.toneMapping!==be||pe.morphTargetsCount!==xe)&&(Ze=!0):(Ze=!0,pe.__version=R.version);let It=pe.currentProgram;Ze===!0&&(It=bt(R,x,C));let Mt=!1,tt=!1,Ut=!1;const ht=It.getUniforms(),wt=pe.uniforms;if(Oe.useProgram(It.program)&&(Mt=!0,tt=!0,Ut=!0),R.id!==E&&(E=R.id,tt=!0),Mt||S!==u){Oe.buffers.depth.getReversed()?(fe.copy(u.projectionMatrix),Yg(fe),qg(fe),ht.setValue(z,"projectionMatrix",fe)):ht.setValue(z,"projectionMatrix",u.projectionMatrix),ht.setValue(z,"viewMatrix",u.matrixWorldInverse);const nn=ht.map.cameraPosition;nn!==void 0&&nn.setValue(z,Se.setFromMatrixPosition(u.matrixWorld)),V.logarithmicDepthBuffer&&ht.setValue(z,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ht.setValue(z,"isOrthographic",u.isOrthographicCamera===!0),S!==u&&(S=u,tt=!0,Ut=!0)}if(C.isSkinnedMesh){ht.setOptional(z,C,"bindMatrix"),ht.setOptional(z,C,"bindMatrixInverse");const at=C.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),ht.setValue(z,"boneTexture",at.boneTexture,P))}C.isBatchedMesh&&(ht.setOptional(z,C,"batchingTexture"),ht.setValue(z,"batchingTexture",C._matricesTexture,P),ht.setOptional(z,C,"batchingIdTexture"),ht.setValue(z,"batchingIdTexture",C._indirectTexture,P),ht.setOptional(z,C,"batchingColorTexture"),C._colorsTexture!==null&&ht.setValue(z,"batchingColorTexture",C._colorsTexture,P));const mt=y.morphAttributes;if((mt.position!==void 0||mt.normal!==void 0||mt.color!==void 0)&&Fe.update(C,y,It),(tt||pe.receiveShadow!==C.receiveShadow)&&(pe.receiveShadow=C.receiveShadow,ht.setValue(z,"receiveShadow",C.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(wt.envMap.value=G,wt.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&x.environment!==null&&(wt.envMapIntensity.value=x.environmentIntensity),tt&&(ht.setValue(z,"toneMappingExposure",M.toneMappingExposure),pe.needsLights&&xt(wt,Ut),O&&R.fog===!0&&ge.refreshFogUniforms(wt,O),ge.refreshMaterialUniforms(wt,R,X,Z,m.state.transmissionRenderTarget[u.id]),Za.upload(z,Et(pe),wt,P)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Za.upload(z,Et(pe),wt,P),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ht.setValue(z,"center",C.center),ht.setValue(z,"modelViewMatrix",C.modelViewMatrix),ht.setValue(z,"normalMatrix",C.normalMatrix),ht.setValue(z,"modelMatrix",C.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const at=R.uniformsGroups;for(let nn=0,Rn=at.length;nn<Rn;nn++){const Bn=at[nn];F.update(Bn,It),F.bind(Bn,It)}}return It}function xt(u,x){u.ambientLightColor.needsUpdate=x,u.lightProbe.needsUpdate=x,u.directionalLights.needsUpdate=x,u.directionalLightShadows.needsUpdate=x,u.pointLights.needsUpdate=x,u.pointLightShadows.needsUpdate=x,u.spotLights.needsUpdate=x,u.spotLightShadows.needsUpdate=x,u.rectAreaLights.needsUpdate=x,u.hemisphereLights.needsUpdate=x}function Gt(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(u,x,y){Ce.get(u.texture).__webglTexture=x,Ce.get(u.depthTexture).__webglTexture=y;const R=Ce.get(u);R.__hasExternalTextures=!0,R.__autoAllocateDepthBuffer=y===void 0,R.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(u,x){const y=Ce.get(u);y.__webglFramebuffer=x,y.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(u,x=0,y=0){U=u,D=x,A=y;let R=!0,C=null,O=!1,k=!1;if(u){const G=Ce.get(u);if(G.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(z.FRAMEBUFFER,null),R=!1;else if(G.__webglFramebuffer===void 0)P.setupRenderTarget(u);else if(G.__hasExternalTextures)P.rebindTextures(u,Ce.get(u.texture).__webglTexture,Ce.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const ie=u.depthTexture;if(G.__boundDepthTexture!==ie){if(ie!==null&&Ce.has(ie)&&(u.width!==ie.image.width||u.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(u)}}const j=u.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(k=!0);const Q=Ce.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(Q[x])?C=Q[x][y]:C=Q[x],O=!0):u.samples>0&&P.useMultisampledRTT(u)===!1?C=Ce.get(u).__webglMultisampledFramebuffer:Array.isArray(Q)?C=Q[y]:C=Q,I.copy(u.viewport),B.copy(u.scissor),H=u.scissorTest}else I.copy(Me).multiplyScalar(X).floor(),B.copy(Ne).multiplyScalar(X).floor(),H=Ye;if(Oe.bindFramebuffer(z.FRAMEBUFFER,C)&&R&&Oe.drawBuffers(u,C),Oe.viewport(I),Oe.scissor(B),Oe.setScissorTest(H),O){const G=Ce.get(u.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+x,G.__webglTexture,y)}else if(k){const G=Ce.get(u.texture),j=x||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,G.__webglTexture,y||0,j)}E=-1},this.readRenderTargetPixels=function(u,x,y,R,C,O,k){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=Ce.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&k!==void 0&&(q=q[k]),q){Oe.bindFramebuffer(z.FRAMEBUFFER,q);try{const G=u.texture,j=G.format,Q=G.type;if(!V.textureFormatReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=u.width-R&&y>=0&&y<=u.height-C&&z.readPixels(x,y,R,C,He.convert(j),He.convert(Q),O)}finally{const G=U!==null?Ce.get(U).__webglFramebuffer:null;Oe.bindFramebuffer(z.FRAMEBUFFER,G)}}},this.readRenderTargetPixelsAsync=async function(u,x,y,R,C,O,k){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=Ce.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&k!==void 0&&(q=q[k]),q){const G=u.texture,j=G.format,Q=G.type;if(!V.textureFormatReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=u.width-R&&y>=0&&y<=u.height-C){Oe.bindFramebuffer(z.FRAMEBUFFER,q);const ie=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ie),z.bufferData(z.PIXEL_PACK_BUFFER,O.byteLength,z.STREAM_READ),z.readPixels(x,y,R,C,He.convert(j),He.convert(Q),0);const ue=U!==null?Ce.get(U).__webglFramebuffer:null;Oe.bindFramebuffer(z.FRAMEBUFFER,ue);const de=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Xg(z,de,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ie),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,O),z.deleteBuffer(ie),z.deleteSync(de),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(u,x=null,y=0){u.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,u=arguments[1]);const R=Math.pow(2,-y),C=Math.floor(u.image.width*R),O=Math.floor(u.image.height*R),k=x!==null?x.x:0,q=x!==null?x.y:0;P.setTexture2D(u,0),z.copyTexSubImage2D(z.TEXTURE_2D,y,0,0,k,q,C,O),Oe.unbindTexture()},this.copyTextureToTexture=function(u,x,y=null,R=null,C=0){u.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),R=arguments[0]||null,u=arguments[1],x=arguments[2],C=arguments[3]||0,y=null);let O,k,q,G,j,Q,ie,ue,de;const be=u.isCompressedTexture?u.mipmaps[C]:u.image;y!==null?(O=y.max.x-y.min.x,k=y.max.y-y.min.y,q=y.isBox3?y.max.z-y.min.z:1,G=y.min.x,j=y.min.y,Q=y.isBox3?y.min.z:0):(O=be.width,k=be.height,q=be.depth||1,G=0,j=0,Q=0),R!==null?(ie=R.x,ue=R.y,de=R.z):(ie=0,ue=0,de=0);const ve=He.convert(x.format),xe=He.convert(x.type);let pe;x.isData3DTexture?(P.setTexture3D(x,0),pe=z.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(P.setTexture2DArray(x,0),pe=z.TEXTURE_2D_ARRAY):(P.setTexture2D(x,0),pe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,x.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,x.unpackAlignment);const ut=z.getParameter(z.UNPACK_ROW_LENGTH),Ze=z.getParameter(z.UNPACK_IMAGE_HEIGHT),It=z.getParameter(z.UNPACK_SKIP_PIXELS),Mt=z.getParameter(z.UNPACK_SKIP_ROWS),tt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,G),z.pixelStorei(z.UNPACK_SKIP_ROWS,j),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Q);const Ut=u.isDataArrayTexture||u.isData3DTexture,ht=x.isDataArrayTexture||x.isData3DTexture;if(u.isRenderTargetTexture||u.isDepthTexture){const wt=Ce.get(u),mt=Ce.get(x),at=Ce.get(wt.__renderTarget),nn=Ce.get(mt.__renderTarget);Oe.bindFramebuffer(z.READ_FRAMEBUFFER,at.__webglFramebuffer),Oe.bindFramebuffer(z.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let Rn=0;Rn<q;Rn++)Ut&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ce.get(u).__webglTexture,C,Q+Rn),u.isDepthTexture?(ht&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ce.get(x).__webglTexture,C,de+Rn),z.blitFramebuffer(G,j,O,k,ie,ue,O,k,z.DEPTH_BUFFER_BIT,z.NEAREST)):ht?z.copyTexSubImage3D(pe,C,ie,ue,de+Rn,G,j,O,k):z.copyTexSubImage2D(pe,C,ie,ue,de+Rn,G,j,O,k);Oe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ht?u.isDataTexture||u.isData3DTexture?z.texSubImage3D(pe,C,ie,ue,de,O,k,q,ve,xe,be.data):x.isCompressedArrayTexture?z.compressedTexSubImage3D(pe,C,ie,ue,de,O,k,q,ve,be.data):z.texSubImage3D(pe,C,ie,ue,de,O,k,q,ve,xe,be):u.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,C,ie,ue,O,k,ve,xe,be.data):u.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,C,ie,ue,be.width,be.height,ve,be.data):z.texSubImage2D(z.TEXTURE_2D,C,ie,ue,O,k,ve,xe,be);z.pixelStorei(z.UNPACK_ROW_LENGTH,ut),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ze),z.pixelStorei(z.UNPACK_SKIP_PIXELS,It),z.pixelStorei(z.UNPACK_SKIP_ROWS,Mt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,tt),C===0&&x.generateMipmaps&&z.generateMipmap(pe),Oe.unbindTexture()},this.copyTextureToTexture3D=function(u,x,y=null,R=null,C=0){return u.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),y=arguments[0]||null,R=arguments[1]||null,u=arguments[2],x=arguments[3],C=arguments[4]||0),vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(u,x,y,R,C)},this.initRenderTarget=function(u){Ce.get(u).__webglFramebuffer===void 0&&P.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?P.setTextureCube(u,0):u.isData3DTexture?P.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?P.setTexture2DArray(u,0):P.setTexture2D(u,0),Oe.unbindTexture()},this.resetState=function(){D=0,A=0,U=null,Oe.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class ly extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cy extends An{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Kn,h=Kn,f,d){super(null,o,a,l,c,h,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class uy{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const hy=new uy;class ih{constructor(e){this.manager=e!==void 0?e:hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ih.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fi={};class fy extends Error{constructor(e,t){super(e),this.response=t}}class dy extends ih{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:i});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Fi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const _=new ReadableStream({start(m){w();function w(){f.read().then(({done:T,value:M})=>{if(T)m.close();else{v+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let D=0,A=h.length;D<A;D++){const U=h[D];U.onProgress&&U.onProgress(L)}m.enqueue(M),w()}},T=>{m.error(T)})}}});return new Response(_)}else throw new fy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Wf.add(e,c);const h=Fi[e];delete Fi[e];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class py extends ih{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new cy,a=new dy(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Xi,o.wrapT=c.wrapT!==void 0?c.wrapT:Xi,o.magFilter=c.magFilter!==void 0?c.magFilter:cn,o.minFilter=c.minFilter!==void 0?c.minFilter:cn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=mr),c.mipmapCount===1&&(o.minFilter=cn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var oi=Uint8Array,Ps=Uint16Array,my=Int32Array,Kp=new oi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Jp=new oi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_y=new oi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),jp=function(r,e){for(var t=new Ps(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new my(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},Qp=jp(Kp,2),em=Qp.b,gy=Qp.r;em[28]=258,gy[258]=28;var vy=jp(Jp,0),xy=vy.b,Su=new Ps(32768);for(var Nt=0;Nt<32768;++Nt){var lr=(Nt&43690)>>1|(Nt&21845)<<1;lr=(lr&52428)>>2|(lr&13107)<<2,lr=(lr&61680)>>4|(lr&3855)<<4,Su[Nt]=((lr&65280)>>8|(lr&255)<<8)>>1}var Lo=(function(r,e,t){for(var n=r.length,i=0,s=new Ps(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new Ps(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new Ps(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],f=o[r[i]-1]++<<h,d=f|(1<<h)-1;f<=d;++f)a[Su[f]>>l]=c}else for(a=new Ps(n),i=0;i<n;++i)r[i]&&(a[i]=Su[o[r[i]-1]++]>>15-r[i]);return a}),$o=new oi(288);for(var Nt=0;Nt<144;++Nt)$o[Nt]=8;for(var Nt=144;Nt<256;++Nt)$o[Nt]=9;for(var Nt=256;Nt<280;++Nt)$o[Nt]=7;for(var Nt=280;Nt<288;++Nt)$o[Nt]=8;var tm=new oi(32);for(var Nt=0;Nt<32;++Nt)tm[Nt]=5;var Sy=Lo($o,9,1),My=Lo(tm,5,1),oc=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},_i=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},ac=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},yy=function(r){return(r+7)/8|0},Ey=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new oi(r.subarray(e,t))},Ty=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],vi=function(r,e,t){var n=new Error(e||Ty[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,vi),!t)throw n;return n},by=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new oi(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new oi(i*3));var c=function(qe){var We=t.length;if(qe>We){var De=new oi(Math.max(We*2,qe));De.set(t),t=De}},h=e.f||0,f=e.p||0,d=e.b||0,p=e.l,g=e.d,v=e.m,_=e.n,m=i*8;do{if(!p){h=_i(r,f,1);var w=_i(r,f+1,3);if(f+=3,w)if(w==1)p=Sy,g=My,v=9,_=5;else if(w==2){var D=_i(r,f,31)+257,A=_i(r,f+10,15)+4,U=D+_i(r,f+5,31)+1;f+=14;for(var E=new oi(U),S=new oi(19),I=0;I<A;++I)S[_y[I]]=_i(r,f+I*3,7);f+=A*3;for(var B=oc(S),H=(1<<B)-1,W=Lo(S,B,1),I=0;I<U;){var J=W[_i(r,f,H)];f+=J&15;var T=J>>4;if(T<16)E[I++]=T;else{var $=0,Z=0;for(T==16?(Z=3+_i(r,f,3),f+=2,$=E[I-1]):T==17?(Z=3+_i(r,f,7),f+=3):T==18&&(Z=11+_i(r,f,127),f+=7);Z--;)E[I++]=$}}var X=E.subarray(0,D),ce=E.subarray(D);v=oc(X),_=oc(ce),p=Lo(X,v,1),g=Lo(ce,_,1)}else vi(1);else{var T=yy(f)+4,M=r[T-4]|r[T-3]<<8,L=T+M;if(L>i){l&&vi(0);break}a&&c(d+M),t.set(r.subarray(T,L),d),e.b=d+=M,e.p=f=L*8,e.f=h;continue}if(f>m){l&&vi(0);break}}a&&c(d+131072);for(var N=(1<<v)-1,Me=(1<<_)-1,Ne=f;;Ne=f){var $=p[ac(r,f)&N],Ye=$>>4;if(f+=$&15,f>m){l&&vi(0);break}if($||vi(2),Ye<256)t[d++]=Ye;else if(Ye==256){Ne=f,p=null;break}else{var te=Ye-254;if(Ye>264){var I=Ye-257,le=Kp[I];te=_i(r,f,(1<<le)-1)+em[I],f+=le}var he=g[ac(r,f)&Me],fe=he>>4;he||vi(3),f+=he&15;var ce=xy[fe];if(fe>3){var le=Jp[fe];ce+=ac(r,f)&(1<<le)-1,f+=le}if(f>m){l&&vi(0);break}a&&c(d+131072);var me=d+te;if(d<ce){var Se=s-ce,ke=Math.min(ce,me);for(Se+d<0&&vi(3);d<ke;++d)t[d]=n[Se+d]}for(;d<me;++d)t[d]=t[d-ce]}}e.l=p,e.p=Ne,e.b=d,e.f=h,p&&(h=1,e.m=v,e.d=g,e.n=_)}while(!h);return d!=t.length&&o?Ey(t,0,d):t.subarray(0,d)},wy=new oi(0),Ay=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&vi(6,"invalid zlib data"),(r[1]>>5&1)==1&&vi(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function La(r,e){return by(r.subarray(Ay(r),-4),{i:2},e,e)}var Ry=typeof TextDecoder<"u"&&new TextDecoder,Cy=0;try{Ry.decode(wy,{stream:!0}),Cy=1}catch{}class Py extends py{constructor(e){super(e),this.type=Yi}parse(e){const E=Math.pow(2.7182818,2.2);function S(u,x){let y=0;for(let C=0;C<65536;++C)(C==0||u[C>>3]&1<<(C&7))&&(x[y++]=C);const R=y-1;for(;y<65536;)x[y++]=0;return R}function I(u){for(let x=0;x<16384;x++)u[x]={},u[x].len=0,u[x].lit=0,u[x].p=null}const B={l:0,c:0,lc:0};function H(u,x,y,R,C){for(;y<u;)x=x<<8|Ie(R,C),y+=8;y-=u,B.l=x>>y&(1<<u)-1,B.c=x,B.lc=y}const W=new Array(59);function J(u){for(let y=0;y<=58;++y)W[y]=0;for(let y=0;y<65537;++y)W[u[y]]+=1;let x=0;for(let y=58;y>0;--y){const R=x+W[y]>>1;W[y]=x,x=R}for(let y=0;y<65537;++y){const R=u[y];R>0&&(u[y]=R|W[R]++<<6)}}function $(u,x,y,R,C,O){const k=x;let q=0,G=0;for(;R<=C;R++){if(k.value-x.value>y)return!1;H(6,q,G,u,k);const j=B.l;if(q=B.c,G=B.lc,O[R]=j,j==63){if(k.value-x.value>y)throw new Error("Something wrong with hufUnpackEncTable");H(8,q,G,u,k);let Q=B.l+6;if(q=B.c,G=B.lc,R+Q>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)O[R++]=0;R--}else if(j>=59){let Q=j-59+2;if(R+Q>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)O[R++]=0;R--}}J(O)}function Z(u){return u&63}function X(u){return u>>6}function ce(u,x,y,R){for(;x<=y;x++){const C=X(u[x]),O=Z(u[x]);if(C>>O)throw new Error("Invalid table entry");if(O>14){const k=R[C>>O-14];if(k.len)throw new Error("Invalid table entry");if(k.lit++,k.p){const q=k.p;k.p=new Array(k.lit);for(let G=0;G<k.lit-1;++G)k.p[G]=q[G]}else k.p=new Array(1);k.p[k.lit-1]=x}else if(O){let k=0;for(let q=1<<14-O;q>0;q--){const G=R[(C<<14-O)+k];if(G.len||G.p)throw new Error("Invalid table entry");G.len=O,G.lit=x,k++}}}return!0}const N={c:0,lc:0};function Me(u,x,y,R){u=u<<8|Ie(y,R),x+=8,N.c=u,N.lc=x}const Ne={c:0,lc:0};function Ye(u,x,y,R,C,O,k,q,G){if(u==x){R<8&&(Me(y,R,C,O),y=N.c,R=N.lc),R-=8;let j=y>>R;if(j=new Uint8Array([j])[0],q.value+j>G)return!1;const Q=k[q.value-1];for(;j-- >0;)k[q.value++]=Q}else if(q.value<G)k[q.value++]=u;else return!1;Ne.c=y,Ne.lc=R}function te(u){return u&65535}function le(u){const x=te(u);return x>32767?x-65536:x}const he={a:0,b:0};function fe(u,x){const y=le(u),C=le(x),O=y+(C&1)+(C>>1),k=O,q=O-C;he.a=k,he.b=q}function me(u,x){const y=te(u),R=te(x),C=y-(R>>1)&65535,O=R+C-32768&65535;he.a=O,he.b=C}function Se(u,x,y,R,C,O,k){const q=k<16384,G=y>C?C:y;let j=1,Q,ie;for(;j<=G;)j<<=1;for(j>>=1,Q=j,j>>=1;j>=1;){ie=0;const ue=ie+O*(C-Q),de=O*j,be=O*Q,ve=R*j,xe=R*Q;let pe,ut,Ze,It;for(;ie<=ue;ie+=be){let Mt=ie;const tt=ie+R*(y-Q);for(;Mt<=tt;Mt+=xe){const Ut=Mt+ve,ht=Mt+de,wt=ht+ve;q?(fe(u[Mt+x],u[ht+x]),pe=he.a,Ze=he.b,fe(u[Ut+x],u[wt+x]),ut=he.a,It=he.b,fe(pe,ut),u[Mt+x]=he.a,u[Ut+x]=he.b,fe(Ze,It),u[ht+x]=he.a,u[wt+x]=he.b):(me(u[Mt+x],u[ht+x]),pe=he.a,Ze=he.b,me(u[Ut+x],u[wt+x]),ut=he.a,It=he.b,me(pe,ut),u[Mt+x]=he.a,u[Ut+x]=he.b,me(Ze,It),u[ht+x]=he.a,u[wt+x]=he.b)}if(y&j){const Ut=Mt+de;q?fe(u[Mt+x],u[Ut+x]):me(u[Mt+x],u[Ut+x]),pe=he.a,u[Ut+x]=he.b,u[Mt+x]=pe}}if(C&j){let Mt=ie;const tt=ie+R*(y-Q);for(;Mt<=tt;Mt+=xe){const Ut=Mt+ve;q?fe(u[Mt+x],u[Ut+x]):me(u[Mt+x],u[Ut+x]),pe=he.a,u[Ut+x]=he.b,u[Mt+x]=pe}}Q=j,j>>=1}return ie}function ke(u,x,y,R,C,O,k,q,G){let j=0,Q=0;const ie=k,ue=Math.trunc(R.value+(C+7)/8);for(;R.value<ue;)for(Me(j,Q,y,R),j=N.c,Q=N.lc;Q>=14;){const be=j>>Q-14&16383,ve=x[be];if(ve.len)Q-=ve.len,Ye(ve.lit,O,j,Q,y,R,q,G,ie),j=Ne.c,Q=Ne.lc;else{if(!ve.p)throw new Error("hufDecode issues");let xe;for(xe=0;xe<ve.lit;xe++){const pe=Z(u[ve.p[xe]]);for(;Q<pe&&R.value<ue;)Me(j,Q,y,R),j=N.c,Q=N.lc;if(Q>=pe&&X(u[ve.p[xe]])==(j>>Q-pe&(1<<pe)-1)){Q-=pe,Ye(ve.p[xe],O,j,Q,y,R,q,G,ie),j=Ne.c,Q=Ne.lc;break}}if(xe==ve.lit)throw new Error("hufDecode issues")}}const de=8-C&7;for(j>>=de,Q-=de;Q>0;){const be=x[j<<14-Q&16383];if(be.len)Q-=be.len,Ye(be.lit,O,j,Q,y,R,q,G,ie),j=Ne.c,Q=Ne.lc;else throw new Error("hufDecode issues")}return!0}function qe(u,x,y,R,C,O){const k={value:0},q=y.value,G=Fe(x,y),j=Fe(x,y);y.value+=4;const Q=Fe(x,y);if(y.value+=4,G<0||G>=65537||j<0||j>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ie=new Array(65537),ue=new Array(16384);I(ue);const de=R-(y.value-q);if($(u,y,de,G,j,ie),Q>8*(R-(y.value-q)))throw new Error("Something wrong with hufUncompress");ce(ie,G,j,ue),ke(ie,ue,u,y,Q,j,O,C,k)}function We(u,x,y){for(let R=0;R<y;++R)x[R]=u[x[R]]}function De(u){for(let x=1;x<u.length;x++){const y=u[x-1]+u[x]-128;u[x]=y}}function z(u,x){let y=0,R=Math.floor((u.length+1)/2),C=0;const O=u.length-1;for(;!(C>O||(x[C++]=u[y++],C>O));)x[C++]=u[R++]}function pt(u){let x=u.byteLength;const y=new Array;let R=0;const C=new DataView(u);for(;x>0;){const O=C.getInt8(R++);if(O<0){const k=-O;x-=k+1;for(let q=0;q<k;q++)y.push(C.getUint8(R++))}else{const k=O;x-=2;const q=C.getUint8(R++);for(let G=0;G<k+1;G++)y.push(q)}}return y}function Ue(u,x,y,R,C,O){let k=new DataView(O.buffer);const q=y[u.idx[0]].width,G=y[u.idx[0]].height,j=3,Q=Math.floor(q/8),ie=Math.ceil(q/8),ue=Math.ceil(G/8),de=q-(ie-1)*8,be=G-(ue-1)*8,ve={value:0},xe=new Array(j),pe=new Array(j),ut=new Array(j),Ze=new Array(j),It=new Array(j);for(let tt=0;tt<j;++tt)It[tt]=x[u.idx[tt]],xe[tt]=tt<1?0:xe[tt-1]+ie*ue,pe[tt]=new Float32Array(64),ut[tt]=new Uint16Array(64),Ze[tt]=new Uint16Array(ie*64);for(let tt=0;tt<ue;++tt){let Ut=8;tt==ue-1&&(Ut=be);let ht=8;for(let mt=0;mt<ie;++mt){mt==ie-1&&(ht=de);for(let at=0;at<j;++at)ut[at].fill(0),ut[at][0]=C[xe[at]++],V(ve,R,ut[at]),Oe(ut[at],pe[at]),it(pe[at]);Ce(pe);for(let at=0;at<j;++at)P(pe[at],Ze[at],mt*64)}let wt=0;for(let mt=0;mt<j;++mt){const at=y[u.idx[mt]].type;for(let nn=8*tt;nn<8*tt+Ut;++nn){wt=It[mt][nn];for(let Rn=0;Rn<Q;++Rn){const Bn=Rn*64+(nn&7)*8;k.setUint16(wt+0*at,Ze[mt][Bn+0],!0),k.setUint16(wt+2*at,Ze[mt][Bn+1],!0),k.setUint16(wt+4*at,Ze[mt][Bn+2],!0),k.setUint16(wt+6*at,Ze[mt][Bn+3],!0),k.setUint16(wt+8*at,Ze[mt][Bn+4],!0),k.setUint16(wt+10*at,Ze[mt][Bn+5],!0),k.setUint16(wt+12*at,Ze[mt][Bn+6],!0),k.setUint16(wt+14*at,Ze[mt][Bn+7],!0),wt+=16*at}}if(Q!=ie)for(let nn=8*tt;nn<8*tt+Ut;++nn){const Rn=It[mt][nn]+8*Q*2*at,Bn=Q*64+(nn&7)*8;for(let Ko=0;Ko<ht;++Ko)k.setUint16(Rn+Ko*2*at,Ze[mt][Bn+Ko],!0)}}}const Mt=new Uint16Array(q);k=new DataView(O.buffer);for(let tt=0;tt<j;++tt){y[u.idx[tt]].decoded=!0;const Ut=y[u.idx[tt]].type;if(y[tt].type==2)for(let ht=0;ht<G;++ht){const wt=It[tt][ht];for(let mt=0;mt<q;++mt)Mt[mt]=k.getUint16(wt+mt*2*Ut,!0);for(let mt=0;mt<q;++mt)k.setFloat32(wt+mt*2*Ut,ee(Mt[mt]),!0)}}}function V(u,x,y){let R,C=1;for(;C<64;)R=x[u.value],R==65280?C=64:R>>8==255?C+=R&255:(y[C]=R,C++),u.value++}function Oe(u,x){x[0]=ee(u[0]),x[1]=ee(u[1]),x[2]=ee(u[5]),x[3]=ee(u[6]),x[4]=ee(u[14]),x[5]=ee(u[15]),x[6]=ee(u[27]),x[7]=ee(u[28]),x[8]=ee(u[2]),x[9]=ee(u[4]),x[10]=ee(u[7]),x[11]=ee(u[13]),x[12]=ee(u[16]),x[13]=ee(u[26]),x[14]=ee(u[29]),x[15]=ee(u[42]),x[16]=ee(u[3]),x[17]=ee(u[8]),x[18]=ee(u[12]),x[19]=ee(u[17]),x[20]=ee(u[25]),x[21]=ee(u[30]),x[22]=ee(u[41]),x[23]=ee(u[43]),x[24]=ee(u[9]),x[25]=ee(u[11]),x[26]=ee(u[18]),x[27]=ee(u[24]),x[28]=ee(u[31]),x[29]=ee(u[40]),x[30]=ee(u[44]),x[31]=ee(u[53]),x[32]=ee(u[10]),x[33]=ee(u[19]),x[34]=ee(u[23]),x[35]=ee(u[32]),x[36]=ee(u[39]),x[37]=ee(u[45]),x[38]=ee(u[52]),x[39]=ee(u[54]),x[40]=ee(u[20]),x[41]=ee(u[22]),x[42]=ee(u[33]),x[43]=ee(u[38]),x[44]=ee(u[46]),x[45]=ee(u[51]),x[46]=ee(u[55]),x[47]=ee(u[60]),x[48]=ee(u[21]),x[49]=ee(u[34]),x[50]=ee(u[37]),x[51]=ee(u[47]),x[52]=ee(u[50]),x[53]=ee(u[56]),x[54]=ee(u[59]),x[55]=ee(u[61]),x[56]=ee(u[35]),x[57]=ee(u[36]),x[58]=ee(u[48]),x[59]=ee(u[49]),x[60]=ee(u[57]),x[61]=ee(u[58]),x[62]=ee(u[62]),x[63]=ee(u[63])}function it(u){const x=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),C=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),k=.5*Math.cos(3*3.14159/8),q=.5*Math.cos(7*3.14159/16),G=new Array(4),j=new Array(4),Q=new Array(4),ie=new Array(4);for(let ue=0;ue<8;++ue){const de=ue*8;G[0]=R*u[de+2],G[1]=k*u[de+2],G[2]=R*u[de+6],G[3]=k*u[de+6],j[0]=y*u[de+1]+C*u[de+3]+O*u[de+5]+q*u[de+7],j[1]=C*u[de+1]-q*u[de+3]-y*u[de+5]-O*u[de+7],j[2]=O*u[de+1]-y*u[de+3]+q*u[de+5]+C*u[de+7],j[3]=q*u[de+1]-O*u[de+3]+C*u[de+5]-y*u[de+7],Q[0]=x*(u[de+0]+u[de+4]),Q[3]=x*(u[de+0]-u[de+4]),Q[1]=G[0]+G[3],Q[2]=G[1]-G[2],ie[0]=Q[0]+Q[1],ie[1]=Q[3]+Q[2],ie[2]=Q[3]-Q[2],ie[3]=Q[0]-Q[1],u[de+0]=ie[0]+j[0],u[de+1]=ie[1]+j[1],u[de+2]=ie[2]+j[2],u[de+3]=ie[3]+j[3],u[de+4]=ie[3]-j[3],u[de+5]=ie[2]-j[2],u[de+6]=ie[1]-j[1],u[de+7]=ie[0]-j[0]}for(let ue=0;ue<8;++ue)G[0]=R*u[16+ue],G[1]=k*u[16+ue],G[2]=R*u[48+ue],G[3]=k*u[48+ue],j[0]=y*u[8+ue]+C*u[24+ue]+O*u[40+ue]+q*u[56+ue],j[1]=C*u[8+ue]-q*u[24+ue]-y*u[40+ue]-O*u[56+ue],j[2]=O*u[8+ue]-y*u[24+ue]+q*u[40+ue]+C*u[56+ue],j[3]=q*u[8+ue]-O*u[24+ue]+C*u[40+ue]-y*u[56+ue],Q[0]=x*(u[ue]+u[32+ue]),Q[3]=x*(u[ue]-u[32+ue]),Q[1]=G[0]+G[3],Q[2]=G[1]-G[2],ie[0]=Q[0]+Q[1],ie[1]=Q[3]+Q[2],ie[2]=Q[3]-Q[2],ie[3]=Q[0]-Q[1],u[0+ue]=ie[0]+j[0],u[8+ue]=ie[1]+j[1],u[16+ue]=ie[2]+j[2],u[24+ue]=ie[3]+j[3],u[32+ue]=ie[3]-j[3],u[40+ue]=ie[2]-j[2],u[48+ue]=ie[1]-j[1],u[56+ue]=ie[0]-j[0]}function Ce(u){for(let x=0;x<64;++x){const y=u[0][x],R=u[1][x],C=u[2][x];u[0][x]=y+1.5747*C,u[1][x]=y-.1873*R-.4682*C,u[2][x]=y+1.8556*R}}function P(u,x,y){for(let R=0;R<64;++R)x[y+R]=df.toHalfFloat(b(u[R]))}function b(u){return u<=1?Math.sign(u)*Math.pow(Math.abs(u),2.2):Math.sign(u)*Math.pow(E,Math.abs(u)-1)}function Y(u){return new DataView(u.array.buffer,u.offset.value,u.size)}function oe(u){const x=u.viewer.buffer.slice(u.offset.value,u.offset.value+u.size),y=new Uint8Array(pt(x)),R=new Uint8Array(y.length);return De(y),z(y,R),new DataView(R.buffer)}function se(u){const x=u.array.slice(u.offset.value,u.offset.value+u.size),y=La(x),R=new Uint8Array(y.length);return De(y),z(y,R),new DataView(R.buffer)}function re(u){const x=u.viewer,y={value:u.offset.value},R=new Uint16Array(u.columns*u.lines*(u.inputChannels.length*u.type)),C=new Uint8Array(8192);let O=0;const k=new Array(u.inputChannels.length);for(let be=0,ve=u.inputChannels.length;be<ve;be++)k[be]={},k[be].start=O,k[be].end=k[be].start,k[be].nx=u.columns,k[be].ny=u.lines,k[be].size=u.type,O+=k[be].nx*k[be].ny*k[be].size;const q=ne(x,y),G=ne(x,y);if(G>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(q<=G)for(let be=0;be<G-q+1;be++)C[be+q]=Ke(x,y);const j=new Uint16Array(65536),Q=S(C,j),ie=Fe(x,y);qe(u.array,x,y,ie,R,O);for(let be=0;be<u.inputChannels.length;++be){const ve=k[be];for(let xe=0;xe<k[be].size;++xe)Se(R,ve.start+xe,ve.nx,ve.size,ve.ny,ve.nx*ve.size,Q)}We(j,R,O);let ue=0;const de=new Uint8Array(R.buffer.byteLength);for(let be=0;be<u.lines;be++)for(let ve=0;ve<u.inputChannels.length;ve++){const xe=k[ve],pe=xe.nx*xe.size,ut=new Uint8Array(R.buffer,xe.end*2,pe*2);de.set(ut,ue),ue+=pe*2,xe.end+=pe}return new DataView(de.buffer)}function ye(u){const x=u.array.slice(u.offset.value,u.offset.value+u.size),y=La(x),R=u.inputChannels.length*u.lines*u.columns*u.totalBytes,C=new ArrayBuffer(R),O=new DataView(C);let k=0,q=0;const G=new Array(4);for(let j=0;j<u.lines;j++)for(let Q=0;Q<u.inputChannels.length;Q++){let ie=0;switch(u.inputChannels[Q].pixelType){case 1:G[0]=k,G[1]=G[0]+u.columns,k=G[1]+u.columns;for(let de=0;de<u.columns;++de){const be=y[G[0]++]<<8|y[G[1]++];ie+=be,O.setUint16(q,ie,!0),q+=2}break;case 2:G[0]=k,G[1]=G[0]+u.columns,G[2]=G[1]+u.columns,k=G[2]+u.columns;for(let de=0;de<u.columns;++de){const be=y[G[0]++]<<24|y[G[1]++]<<16|y[G[2]++]<<8;ie+=be,O.setUint32(q,ie,!0),q+=4}break}}return O}function ge(u){const x=u.viewer,y={value:u.offset.value},R=new Uint8Array(u.columns*u.lines*(u.inputChannels.length*u.type*2)),C={version:He(x,y),unknownUncompressedSize:He(x,y),unknownCompressedSize:He(x,y),acCompressedSize:He(x,y),dcCompressedSize:He(x,y),rleCompressedSize:He(x,y),rleUncompressedSize:He(x,y),rleRawSize:He(x,y),totalAcUncompressedCount:He(x,y),totalDcUncompressedCount:He(x,y),acCompression:He(x,y)};if(C.version<2)throw new Error("EXRLoader.parse: "+xt.compression+" version "+C.version+" is unsupported");const O=new Array;let k=ne(x,y)-2;for(;k>0;){const ve=Te(x.buffer,y),xe=Ke(x,y),pe=xe>>2&3,ut=(xe>>4)-1,Ze=new Int8Array([ut])[0],It=Ke(x,y);O.push({name:ve,index:Ze,type:It,compression:pe}),k-=ve.length+3}const q=xt.channels,G=new Array(u.inputChannels.length);for(let ve=0;ve<u.inputChannels.length;++ve){const xe=G[ve]={},pe=q[ve];xe.name=pe.name,xe.compression=0,xe.decoded=!1,xe.type=pe.pixelType,xe.pLinear=pe.pLinear,xe.width=u.columns,xe.height=u.lines}const j={idx:new Array(3)};for(let ve=0;ve<u.inputChannels.length;++ve){const xe=G[ve];for(let pe=0;pe<O.length;++pe){const ut=O[pe];xe.name==ut.name&&(xe.compression=ut.compression,ut.index>=0&&(j.idx[ut.index]=ve),xe.offset=ve)}}let Q,ie,ue;if(C.acCompressedSize>0)switch(C.acCompression){case 0:Q=new Uint16Array(C.totalAcUncompressedCount),qe(u.array,x,y,C.acCompressedSize,Q,C.totalAcUncompressedCount);break;case 1:const ve=u.array.slice(y.value,y.value+C.totalAcUncompressedCount),xe=La(ve);Q=new Uint16Array(xe.buffer),y.value+=C.totalAcUncompressedCount;break}if(C.dcCompressedSize>0){const ve={array:u.array,offset:y,size:C.dcCompressedSize};ie=new Uint16Array(se(ve).buffer),y.value+=C.dcCompressedSize}if(C.rleRawSize>0){const ve=u.array.slice(y.value,y.value+C.rleCompressedSize),xe=La(ve);ue=pt(xe.buffer),y.value+=C.rleCompressedSize}let de=0;const be=new Array(G.length);for(let ve=0;ve<be.length;++ve)be[ve]=new Array;for(let ve=0;ve<u.lines;++ve)for(let xe=0;xe<G.length;++xe)be[xe].push(de),de+=G[xe].width*u.type*2;Ue(j,be,G,Q,ie,R);for(let ve=0;ve<G.length;++ve){const xe=G[ve];if(!xe.decoded)switch(xe.compression){case 2:let pe=0,ut=0;for(let Ze=0;Ze<u.lines;++Ze){let It=be[ve][pe];for(let Mt=0;Mt<xe.width;++Mt){for(let tt=0;tt<2*xe.type;++tt)R[It++]=ue[ut+tt*xe.width*xe.height];ut++}pe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(R.buffer)}function Te(u,x){const y=new Uint8Array(u);let R=0;for(;y[x.value+R]!=0;)R+=1;const C=new TextDecoder().decode(y.slice(x.value,x.value+R));return x.value=x.value+R+1,C}function et(u,x,y){const R=new TextDecoder().decode(new Uint8Array(u).slice(x.value,x.value+y));return x.value=x.value+y,R}function _e(u,x){const y=Be(u,x),R=Fe(u,x);return[y,R]}function Ee(u,x){const y=Fe(u,x),R=Fe(u,x);return[y,R]}function Be(u,x){const y=u.getInt32(x.value,!0);return x.value=x.value+4,y}function Fe(u,x){const y=u.getUint32(x.value,!0);return x.value=x.value+4,y}function Ie(u,x){const y=u[x.value];return x.value=x.value+1,y}function Ke(u,x){const y=u.getUint8(x.value);return x.value=x.value+1,y}const He=function(u,x){let y;return"getBigInt64"in DataView.prototype?y=Number(u.getBigInt64(x.value,!0)):y=u.getUint32(x.value+4,!0)+Number(u.getUint32(x.value,!0)<<32),x.value+=8,y};function $e(u,x){const y=u.getFloat32(x.value,!0);return x.value+=4,y}function F(u,x){return df.toHalfFloat($e(u,x))}function ee(u){const x=(u&31744)>>10,y=u&1023;return(u>>15?-1:1)*(x?x===31?y?NaN:1/0:Math.pow(2,x-15)*(1+y/1024):6103515625e-14*(y/1024))}function ne(u,x){const y=u.getUint16(x.value,!0);return x.value+=2,y}function ae(u,x){return ee(ne(u,x))}function we(u,x,y,R){const C=y.value,O=[];for(;y.value<C+R-1;){const k=Te(x,y),q=Be(u,y),G=Ke(u,y);y.value+=3;const j=Be(u,y),Q=Be(u,y);O.push({name:k,pixelType:q,pLinear:G,xSampling:j,ySampling:Q})}return y.value+=1,O}function Ae(u,x){const y=$e(u,x),R=$e(u,x),C=$e(u,x),O=$e(u,x),k=$e(u,x),q=$e(u,x),G=$e(u,x),j=$e(u,x);return{redX:y,redY:R,greenX:C,greenY:O,blueX:k,blueY:q,whiteX:G,whiteY:j}}function Je(u,x){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=Ke(u,x);return y[R]}function gt(u,x){const y=Be(u,x),R=Be(u,x),C=Be(u,x),O=Be(u,x);return{xMin:y,yMin:R,xMax:C,yMax:O}}function Ot(u,x){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=Ke(u,x);return y[R]}function Le(u,x){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=Ke(u,x);return y[R]}function Ve(u,x){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],C=Fe(u,x),O=Fe(u,x),k=Ke(u,x);return{xSize:C,ySize:O,levelMode:y[k&15],roundingMode:R[k>>4]}}function nt(u,x){const y=$e(u,x),R=$e(u,x);return[y,R]}function Re(u,x){const y=$e(u,x),R=$e(u,x),C=$e(u,x);return[y,R,C]}function Qe(u,x,y,R,C){if(R==="string"||R==="stringvector"||R==="iccProfile")return et(x,y,C);if(R==="chlist")return we(u,x,y,C);if(R==="chromaticities")return Ae(u,y);if(R==="compression")return Je(u,y);if(R==="box2i")return gt(u,y);if(R==="envmap")return Le(u,y);if(R==="tiledesc")return Ve(u,y);if(R==="lineOrder")return Ot(u,y);if(R==="float")return $e(u,y);if(R==="v2f")return nt(u,y);if(R==="v3f")return Re(u,y);if(R==="int")return Be(u,y);if(R==="rational")return _e(u,y);if(R==="timecode")return Ee(u,y);if(R==="preview")return y.value+=C,"skipped";y.value+=C}function Ge(u,x){const y=Math.log2(u);return x=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function je(u,x,y){let R=0;switch(u.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=Ge(Math.max(x,y),u.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function Ft(u,x,y,R){const C=new Array(u);for(let O=0;O<u;O++){const k=1<<O;let q=x/k|0;R=="ROUND_UP"&&q*k<x&&(q+=1);const G=Math.max(q,1);C[O]=(G+y-1)/y|0}return C}function st(){const u=this,x=u.offset,y={value:0};for(let R=0;R<u.tileCount;R++){const C=Be(u.viewer,x),O=Be(u.viewer,x);x.value+=8,u.size=Fe(u.viewer,x);const k=C*u.blockWidth,q=O*u.blockHeight;u.columns=k+u.blockWidth>u.width?u.width-k:u.blockWidth,u.lines=q+u.blockHeight>u.height?u.height-q:u.blockHeight;const G=u.columns*u.totalBytes,Q=u.size<u.lines*G?u.uncompress(u):Y(u);x.value+=u.size;for(let ie=0;ie<u.lines;ie++){const ue=ie*u.columns*u.totalBytes;for(let de=0;de<u.inputChannels.length;de++){const be=xt.channels[de].name,ve=u.channelByteOffsets[be]*u.columns,xe=u.decodeChannels[be];if(xe===void 0)continue;y.value=ue+ve;const pe=(u.height-(1+q+ie))*u.outLineWidth;for(let ut=0;ut<u.columns;ut++){const Ze=pe+(ut+k)*u.outputChannels+xe;u.byteArray[Ze]=u.getter(Q,y)}}}}}function Rt(){const u=this,x=u.offset,y={value:0};for(let R=0;R<u.height/u.blockHeight;R++){const C=Be(u.viewer,x)-xt.dataWindow.yMin;u.size=Fe(u.viewer,x),u.lines=C+u.blockHeight>u.height?u.height-C:u.blockHeight;const O=u.columns*u.totalBytes,q=u.size<u.lines*O?u.uncompress(u):Y(u);x.value+=u.size;for(let G=0;G<u.blockHeight;G++){const j=R*u.blockHeight,Q=G+u.scanOrder(j);if(Q>=u.height)continue;const ie=G*O,ue=(u.height-1-Q)*u.outLineWidth;for(let de=0;de<u.inputChannels.length;de++){const be=xt.channels[de].name,ve=u.channelByteOffsets[be]*u.columns,xe=u.decodeChannels[be];if(xe!==void 0){y.value=ie+ve;for(let pe=0;pe<u.columns;pe++){const ut=ue+pe*u.outputChannels+xe;u.byteArray[ut]=u.getter(q,y)}}}}}}function Xt(u,x,y){const R={};if(u.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");R.version=u.getUint8(4);const C=u.getUint8(5);R.spec={singleTile:!!(C&2),longName:!!(C&4),deepFormat:!!(C&8),multiPart:!!(C&16)},y.value=8;let O=!0;for(;O;){const k=Te(x,y);if(k==0)O=!1;else{const q=Te(x,y),G=Fe(u,y),j=Qe(u,x,y,q,G);j===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${q}'.`):R[k]=j}}if((C&-7)!=0)throw console.error("THREE.EXRHeader:",R),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return R}function bt(u,x,y,R,C){const O={size:0,viewer:x,array:y,offset:R,width:u.dataWindow.xMax-u.dataWindow.xMin+1,height:u.dataWindow.yMax-u.dataWindow.yMin+1,inputChannels:u.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:er};switch(u.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=Y;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=oe;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=se;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=se;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=re;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=ye;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=ge;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=ge;break;default:throw new Error("EXRLoader.parse: "+u.compression+" is unsupported")}const k={};for(const Q of u.channels)switch(Q.name){case"Y":case"R":case"G":case"B":case"A":k[Q.name]=!0,O.type=Q.pixelType}let q=!1;if(k.R&&k.G&&k.B)q=!k.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(k.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(C){case ci:O.getter=ae;break;case Yi:O.getter=ne;break}else if(O.type==2)switch(C){case ci:O.getter=$e;break;case Yi:O.getter=F}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+u.compression+".");O.columns=O.width;const G=O.width*O.height*O.outputChannels;switch(C){case ci:O.byteArray=new Float32Array(G),q&&O.byteArray.fill(1,0,G);break;case Yi:O.byteArray=new Uint16Array(G),q&&O.byteArray.fill(15360,0,G);break;default:console.error("THREE.EXRLoader: unsupported type: ",C);break}let j=0;for(const Q of u.channels)O.decodeChannels[Q.name]!==void 0&&(O.channelByteOffsets[Q.name]=j),j+=Q.pixelType*2;if(O.totalBytes=j,O.outLineWidth=O.width*O.outputChannels,u.lineOrder==="INCREASING_Y"?O.scanOrder=Q=>Q:O.scanOrder=Q=>O.height-1-Q,O.outputChannels==4?(O.format=ui,O.colorSpace=er):(O.format=Ju,O.colorSpace=bi),u.spec.singleTile){O.blockHeight=u.tiles.ySize,O.blockWidth=u.tiles.xSize;const Q=je(u.tiles,O.width,O.height),ie=Ft(Q,O.width,u.tiles.xSize,u.tiles.roundingMode),ue=Ft(Q,O.height,u.tiles.ySize,u.tiles.roundingMode);O.tileCount=ie[0]*ue[0];for(let de=0;de<Q;de++)for(let be=0;be<ue[de];be++)for(let ve=0;ve<ie[de];ve++)He(x,R);O.decode=st.bind(O)}else{O.blockWidth=O.width;const Q=Math.ceil(O.height/O.blockHeight);for(let ie=0;ie<Q;ie++)He(x,R);O.decode=Rt.bind(O)}return O}const Et={value:0},vt=new DataView(e),vn=new Uint8Array(e),xt=Xt(vt,e,Et),Gt=bt(xt,vt,vn,Et,this.type);return Gt.decode(),{header:xt,width:Gt.width,height:Gt.height,data:Gt.byteArray,format:Gt.format,colorSpace:Gt.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=cn,o.magFilter=cn,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,i)}}async function Dy(r){const t=await(await fetch(r)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],i=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),s=i.vertexCount,o=i.indexCount;let a=4+n;const l=new wr,c=i.attributes;for(let h=0,f=c.length;h<f;h++){const d=c[h],p=d.id,g=p==="indices"?o:s,v=d.componentSize,_=globalThis[d.storageType],m=new _(t,a,g*v),w=_.BYTES_PER_ELEMENT;let T;if(d.needsPack){const M=d.packedComponents,L=M.length,D=d.storageType.indexOf("Int")===0,A=1<<w*8,U=D?A*.5:0,E=1/A;T=new Float32Array(g*v);for(let S=0,I=0;S<g;S++)for(let B=0;B<L;B++){const H=M[B];T[I]=(m[I]+U)*E*H.delta+H.from,I++}}else T=m;p==="indices"?l.setIndex(new fi(T,1)):l.setAttribute(p,new fi(T,v)),a+=g*v*w}return l.computeBoundingSphere(),l}const Ia=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],lc={density:1,friction:2,restitution:.8},Ly=40,Iy=`
attribute vec3 daoN;
attribute vec3 daoP;
attribute float ao;
attribute float thickness;
attribute vec3 SN;
uniform vec3 u_lightPosition;
uniform vec4 u_selfPositionRadius;
uniform vec4 u_selfRotation;
varying vec3 v_viewPosition;
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
  vec4 invertedQuat = vec4(-u_selfRotation.xyz, u_selfRotation.w);
  vec3 L = (u_lightPosition - worldPosition) / u_selfPositionRadius.w;
  L = normalize(qrotate(L, invertedQuat));
  vec3 dao = mix(daoN, daoP, sign(L) * 0.5 + 0.5);
  vec3 absDir = abs(L);
  float selfShadow = dot(absDir, dao) / (absDir.x + absDir.y + absDir.z);
  selfShadow = min(pow(selfShadow * 3.0, 0.3) * 1.45, 1.0);
  v_viewNormal = normalMatrix * normal;
  v_smoothViewNormal = normalMatrix * SN;
  v_viewPosition = -mvPosition.xyz;
  v_ao = ao;
  v_thickness = thickness;
  v_selfShadow = selfShadow;
}
`,Uy=`
varying vec3 v_viewNormal;
varying vec3 v_smoothViewNormal;
varying vec3 v_viewPosition;
varying float v_ao;
varying float v_thickness;
varying float v_selfShadow;
uniform float u_roughness;
uniform vec3 u_bgColor;
uniform vec3 u_color;
uniform sampler2D u_matcap;

vec3 filmicToneMapping(vec3 x) {
  x *= 0.85;
  return (x * (6.2 * x + 0.5)) / (x * (6.2 * x + 1.7) + 0.06);
}

void main() {
  float roughness = u_roughness;
  float ao = mix(0.55, 1.0, v_ao);
  float shadow = 1.0;
  vec3 albedo = u_color;
  vec3 viewDir = normalize(v_viewPosition);
  vec3 viewNormal = normalize(v_viewNormal);
  vec3 smoothViewNormal = normalize(v_smoothViewNormal);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uvPerturbed = vec2(dot(x, viewNormal), dot(y, viewNormal)) * 0.5 + 0.5;
  vec3 matcapMap = texture2D(u_matcap, uvPerturbed).rgb;
  vec3 matcapDiff = vec3(matcapMap.r);
  vec3 matcapSpec = vec3(roughness > 0.5 ? matcapMap.g : matcapMap.b);
  matcapDiff = 0.25 + 0.75 * matcapDiff;
  shadow = 0.6 + 0.4 * shadow;
  vec3 color = albedo * matcapDiff + matcapSpec;
  color *= ao;
  color *= v_selfShadow;
  color *= shadow;
  // soft fill from bg so dark crosses don't go pure black
  color += u_bgColor * 0.04 * (1.0 - matcapDiff);
  gl_FragColor.rgb = filmicToneMapping(pow(color, vec3(2.2)));
  gl_FragColor.a = 1.0;
}
`,Ny=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Oy=`
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform float u_aspect;
varying vec2 v_uv;
void main() {
  vec2 q = v_uv - 0.5;
  q.x *= u_aspect;
  float dst = length(q);
  dst = smoothstep(0.0, 1.0, dst);
  vec3 color = mix(u_color0, u_color1, 0.925 + 0.075 * dst);
  gl_FragColor = vec4(color, 1.0);
}
`;function Fy(r){const e={...lc},t={...lc},n={...lc};return[{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function By(r){let e=0;for(let t=0;t<r.length;t++)e=e*31+r.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}class zy{constructor(e,t,n,i,s,o=!1){this.position=new K((s()-.5)*12,(s()-.5)*12,o?7+s():(s()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.angularVelocity=new K,this.quaternion=new rs().setFromEuler(new Pi(s()*Math.PI,s()*Math.PI,s()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=i,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new K,this.gravityAcc=new K}applyImpulse(){this.velocity.add(new K((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(Ly),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function ky(r,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Ia.length),i=Ia[n];const s=new ly,o=new si(25,1,.1,100);o.position.set(0,0,28);const a=new ay({canvas:r,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.25:1.75)),a.outputColorSpace=er,a.toneMapping=$i;const l="/zyrax-studio/",c=`${l}assets/models/home/${t?"cross_ld":"cross"}.buf`,h=`${l}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[f,d]=await Promise.all([Dy(c),new Promise((me,Se)=>{new Py().load(h,me,void 0,Se)})]);d.minFilter=cn,d.magFilter=cn,d.colorSpace=bi;const p=new K(10,10,5),g=Fy(i),v=By("balloonBody-25"),_=[],m=[],w=[],T=me=>new Di({uniforms:{u_matcap:{value:d},u_color:{value:new yt(me.color)},u_bgColor:{value:new yt(1316117)},u_roughness:{value:me.isRough?.8:.1},u_lightPosition:{value:p},u_selfPositionRadius:{value:new Vt(0,0,0,1)},u_selfRotation:{value:new Vt(0,0,0,1)}},vertexShader:Iy,fragmentShader:Uy});for(const me of g){const Se=T(me),ke=new Si(f,Se);ke.frustumCulled=!1,s.add(ke),m.push(ke),w.push(Se),_.push(new zy(me.radius,me.density,me.friction,me.restitution,v,!1))}const M=new Di({uniforms:{u_color0:{value:new yt(i)},u_color1:{value:new yt(1316117)},u_aspect:{value:1}},vertexShader:Ny,fragmentShader:Oy,depthWrite:!1}),L=new Si(new Zo(80,50),M);L.position.z=-10,L.renderOrder=-1e3,s.add(L);const D=new Pt(0,0),A=new K,U=new K,E=new K,S=new K,I=new K,B=new K,H=new K,W=new K,J=new K,$=new K,Z=new rs,X=.025,ce=.1,N=.12,Me=me=>{const Se=(e||r).getBoundingClientRect();D.x=(me.clientX-Se.left)/Se.width*2-1,D.y=-((me.clientY-Se.top)/Se.height*2-1)};window.addEventListener("pointermove",Me);const Ne=()=>{n=(n+1)%Ia.length,i=Ia[n],m.forEach((me,Se)=>{const ke=g[Se];ke.isColored&&(me.material.uniforms.u_color.value.set(i),ke.color=i)}),M.uniforms.u_color0.value.set(i),_.forEach(me=>me.applyImpulse())},Ye=()=>Ne();r.addEventListener("click",Ye),e==null||e.addEventListener("click",Ye);const te=()=>{const me=e||r.parentElement,Se=me.clientWidth,ke=me.clientHeight;o.aspect=Se/Math.max(ke,1),o.updateProjectionMatrix(),a.setSize(Se,ke,!1),M.uniforms.u_aspect.value=Se/Math.max(ke,1)};te(),window.addEventListener("resize",te);let le=0,he=performance.now();const fe=me=>{le=requestAnimationFrame(fe);let Se=Math.min(.05,(me-he)/1e3);he=me;const ke=t?1:2;Se/=ke;for(let qe=0;qe<ke;qe++){const We=new K(D.x,D.y,.5).unproject(o);We.sub(o.position).normalize();const De=(0-o.position.z)/We.z;A.copy(o.position).addScaledVector(We,De),E.copy(A).sub(U).multiplyScalar(N/Math.max(Se,.001)),S.copy(A).sub(o.position);const z=S.lengthSq()||1;U.copy(A);for(let pt=0;pt<_.length;pt++){const Ue=_[pt];Ue.updateGravity(Se),B.copy(Ue.velocity),H.copy(Ue.position);for(let Ce=pt+1;Ce<_.length;Ce++){const P=_[Ce];J.copy(P.velocity),$.copy(P.position),I.copy(H).sub($);const b=I.length(),Y=Ue.radius+P.radius;if(b<Y&&b>1e-6){const oe=Math.sqrt(Ue.friction*P.friction);Ue.frictionTot+=oe,P.frictionTot+=oe,I.normalize(),I.multiplyScalar(.5*(b-Y)),H.sub(I),$.add(I),I.normalize();const se=B.dot(I),re=J.dot(I),ye=Ue.mass,ge=P.mass,Te=(ye*se+ge*re-ge*(se-re)*Ue.restitution)/(ye+ge),et=(ye*se+ge*re-ye*(re-se)*P.restitution)/(ye+ge);B.addScaledVector(I,(Te-se)/(1+oe)),J.addScaledVector(I,(et-re)/(1+oe)),P.position.copy($),P.velocity.copy(J)}}W.copy(H).sub(o.position);let V=W.dot(S)/z;V=W.sub(J.copy(S).multiplyScalar(V)).length()-Ue.radius-X,V<0&&(W.copy(H).sub(o.position).cross(S).normalize(),J.copy(S).cross(W).normalize(),H.sub(J.multiplyScalar(ce*V)),J.multiplyScalar(-N/Math.max(Se,.001)),B.add(J),B.add(E));let Oe=H.length();if(Oe>0){W.set(1,1,1).normalize();let Ce=1-Math.abs(W.dot(J.copy(H).normalize()));Ce*=Se*Math.min(1,Math.max(0,Oe/2))*.5,Ce*=pt%2*2-1,Z.setFromAxisAngle(W,Ce),J.copy(H).applyQuaternion(Z).sub(W.copy(H)),B.add(J)}W.crossVectors(H,B);let it=W.length();it/=Ue.inertia,it>0&&(W.normalize(),Z.setFromAxisAngle(W,it*Se),Ue.quaternion.premultiply(Z)),Ue.position.copy(H),Ue.velocity.copy(B),Ue.update(Se),["x","y","z"].forEach(Ce=>{const P=Ce==="z"?6:9;Ue.position[Ce]>P&&(Ue.position[Ce]=P,Ue.velocity[Ce]*=-.55),Ue.position[Ce]<-P&&(Ue.position[Ce]=-P,Ue.velocity[Ce]*=-.55)})}}for(let qe=0;qe<m.length;qe++){const We=m[qe],De=_[qe];We.position.copy(De.position),We.quaternion.copy(De.quaternion);const z=w[qe].uniforms;z.u_selfPositionRadius.value.set(De.position.x,De.position.y,De.position.z,De.radius),z.u_selfRotation.value.set(De.quaternion.x,De.quaternion.y,De.quaternion.z,De.quaternion.w),z.u_bgColor.value.copy(M.uniforms.u_color1.value)}o.position.x+=(D.x*1.15-o.position.x)*.045,o.position.y+=(D.y*.75-o.position.y)*.045,o.lookAt(0,0,0),a.render(s,o)};return le=requestAnimationFrame(fe),{cycleColor:Ne,destroy(){cancelAnimationFrame(le),window.removeEventListener("pointermove",Me),window.removeEventListener("resize",te),r.removeEventListener("click",Ye),e==null||e.removeEventListener("click",Ye),w.forEach(me=>me.dispose()),M.dispose(),a.dispose()}}}Ys.registerPlugin(ct);const Hy=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),nm=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};nm();window.addEventListener("resize",nm);const rh=new mm({duration:Hy?.95:1.2,smoothWheel:!0,syncTouch:!1});rh.on("scroll",ct.update);Ys.ticker.add(r=>rh.raf(r*1e3));Ys.ticker.lagSmoothing(0);const Xf=document.getElementById("project-list");Xf&&(Xf.innerHTML=eg.map(r=>`
    <a class="project-item" href="${r.url}" target="_blank" rel="noreferrer" data-reveal>
      <div class="project-item-main">
        <div class="project-item-image" style="background:${r.hue}"><span>${r.title}</span></div>
      </div>
      <div class="project-item-line-1">${r.tags}</div>
      <div class="project-item-line-2">${r.title}</div>
    </a>`).join(""));const Vy=document.getElementById("hero-canvas"),Gy=document.getElementById("home-hero-visual-container"),Es=document.getElementById("home-hero");ky(Vy,Gy).then(()=>{Es==null||Es.classList.add("is-in")}).catch(r=>{console.error("Balloons hero failed",r),Es==null||Es.classList.add("is-in")});function im(r,e="word"){if(!r)return;const n=r.textContent.trim().split(/\s+/);r.textContent="",n.forEach((i,s)=>{const o=document.createElement("span");o.className=e,o.textContent=i,o.style.transitionDelay=`${s*35}ms`,r.appendChild(o),r.appendChild(document.createTextNode(" "))})}im(document.getElementById("home-hero-title"));im(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var r;(r=document.getElementById("home-hero-title"))==null||r.classList.add("is-in")});const Wy=document.querySelectorAll(".home-hero-scroll-container-cross");Wy.forEach((r,e)=>{r.style.transitionDelay=`${.15+e*.08}s`});document.querySelectorAll("[data-reveal]").forEach((r,e)=>{ct.create({trigger:r,start:"top 88%",onEnter:()=>{r.style.transitionDelay=`${e%4*60}ms`,r.classList.add("is-in")}})});Ys.utils.toArray("#home-reel-title, #home-reel-desc, #home-featured-title, #home-goal-tunnel-title").forEach(r=>{Ys.from(r,{y:48,opacity:0,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 85%"}})});const rm=document.querySelector("[data-menu]");var Yf;(Yf=document.querySelector("[data-menu-open]"))==null||Yf.addEventListener("click",()=>{rm.hidden=!1,document.body.style.overflow="hidden"});document.querySelectorAll("[data-menu-close]").forEach(r=>{r.addEventListener("click",()=>{rm.hidden=!0,document.body.style.overflow=""})});var qf;(qf=document.querySelector("[data-reel]"))==null||qf.addEventListener("click",r=>{const e=r.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var Zf;(Zf=document.querySelector("[data-sound]"))==null||Zf.addEventListener("click",r=>{r.currentTarget.classList.toggle("is-on")});var $f;($f=document.querySelector("#end-bottom"))==null||$f.addEventListener("click",r=>{r.preventDefault(),rh.scrollTo("#footer-section")});
