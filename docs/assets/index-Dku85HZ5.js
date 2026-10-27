var Um=Object.defineProperty;var Nm=(r,e,t)=>e in r?Um(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var qe=(r,e,t)=>Nm(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var yh="1.3.27";function Sd(r,e,t){return Math.max(r,Math.min(e,t))}function Om(r,e,t){return(1-t)*r+t*e}function Fm(r,e,t,n){return Om(r,e,1-Math.exp(-t*n))}function Bm(r,e){return(r%e+e)%e}var zm=class{constructor(){qe(this,"isRunning",!1);qe(this,"value",0);qe(this,"from",0);qe(this,"to",0);qe(this,"currentTime",0);qe(this,"lerp");qe(this,"duration");qe(this,"easing");qe(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Sd(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Fm(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function km(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var Hm=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){qe(this,"width",0);qe(this,"height",0);qe(this,"scrollHeight",0);qe(this,"scrollWidth",0);qe(this,"debouncedResize");qe(this,"wrapperResizeObserver");qe(this,"contentResizeObserver");qe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});qe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});qe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=km(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Md=class{constructor(){qe(this,"events",{})}emit(r,...e){var n;const t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Vm=100/6,ar={passive:!1};function Eh(r,e){return r===1?Vm:r===2?e:1}var Gm=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){qe(this,"touchStart",{x:0,y:0});qe(this,"lastDelta",{x:0,y:0});qe(this,"window",{width:0,height:0});qe(this,"emitter",new Md);qe(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});qe(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});qe(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});qe(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Eh(n,this.window.width),s=Eh(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});qe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ar),this.element.addEventListener("touchstart",this.onTouchStart,ar),this.element.addEventListener("touchmove",this.onTouchMove,ar),this.element.addEventListener("touchend",this.onTouchEnd,ar)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ar),this.element.removeEventListener("touchstart",this.onTouchStart,ar),this.element.removeEventListener("touchmove",this.onTouchMove,ar),this.element.removeEventListener("touchend",this.onTouchEnd,ar)}};const Th=r=>Math.min(1,1.001-2**(-10*r));var Wm=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:v=!0,prevent:_,virtualScroll:m,overscroll:b=!0,autoRaf:w=!1,anchors:S=!1,autoToggle:L=!1,allowNestedScroll:D=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:I=A,stopInertiaOnNavigate:T=!1,respectReducedMotion:M=!0}={}){qe(this,"_isScrolling",!1);qe(this,"_isStopped",!1);qe(this,"_isLocked",!1);qe(this,"_preventNextNativeScrollEvent",!1);qe(this,"_resetVelocityTimeout",null);qe(this,"_rafId",null);qe(this,"_isDraggingSelection",!1);qe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));qe(this,"isTouching");qe(this,"isIos");qe(this,"time",0);qe(this,"userData",{});qe(this,"lastVelocity",0);qe(this,"velocity",0);qe(this,"direction",0);qe(this,"options");qe(this,"targetScroll");qe(this,"animatedScroll");qe(this,"animate",new zm);qe(this,"emitter",new Md);qe(this,"dimensions");qe(this,"virtualScroll");qe(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});qe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});qe(this,"onTransitionEnd",r=>{var e;(e=r.propertyName)!=null&&e.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});qe(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});qe(this,"onPointerDown",r=>{r.button===1&&this.reset()});qe(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var v,_,m,b,w;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((v=g.hasAttribute)==null?void 0:v.call(g,"data-lenis-prevent"))||u==="vertical"&&((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-horizontal"))||i&&((b=g.hasAttribute)==null?void 0:b.call(g,"data-lenis-prevent-touch"))||s&&((w=g.hasAttribute)==null?void 0:w.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,p=i&&n.type==="touchend";p&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});qe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});qe(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=yh,window.lenis||(window.lenis={}),window.lenis.version=yh,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Th:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:p,wheelMultiplier:g,autoResize:v,prevent:_,virtualScroll:m,overscroll:b,autoRaf:w,anchors:S,autoToggle:L,allowNestedScroll:D,naiveDimensions:I,stopInertiaOnNavigate:T,respectReducedMotion:M},this.dimensions=new Hm(r,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Gm(t,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=r,p=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let g=null;if(typeof d=="string"?(g=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),g||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(g=d),g){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?S.left:S.top}const v=g.getBoundingClientRect(),_=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),b=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);d=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(w)?0:w)}}if(typeof d=="number"){if(d+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=d-this.animatedScroll;g>this.limit/2?d-=this.limit:g<-this.limit/2&&(d+=this.limit)}}else d=Sd(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=Th:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),v||this.emit(),v&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,f,d,p,g;if(n-(i.time??0)>2e3){i.time=Date.now();const D=window.getComputedStyle(r);if(i.computedStyle=D,s=["auto","overlay","scroll"].includes(D.overflowX),o=["auto","overlay","scroll"].includes(D.overflowY),c=["auto"].includes(D.overscrollBehaviorX),u=["auto"].includes(D.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,d=r.scrollHeight,p=r.clientWidth,g=r.clientHeight,a=f>p,l=d>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=d,i.clientWidth=p,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,d=i.scrollHeight,p=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,m,b,w,S,L;if(v==="horizontal")_=Math.round(r.scrollLeft),m=f-p,b=e,w=s,S=a,L=c;else if(v==="vertical")_=Math.round(r.scrollTop),m=d-g,b=t,w=o,S=l,L=u;else return!1;return!L&&(_>=m||_<=0)?!0:(b>0?_<m:_>0)&&w&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Bm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function Xi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function yd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Go={duration:.5,overwrite:!1,delay:0},Bu,hn,zt,pi=1e8,It=1/pi,Ac=Math.PI*2,Xm=Ac/4,Ym=0,Ed=Math.sqrt,qm=Math.cos,$m=Math.sin,ln=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},nr=function(e){return typeof e=="number"},zu=function(e){return typeof e>"u"},Ui=function(e){return typeof e=="object"},Fn=function(e){return e!==!1},ku=function(){return typeof window<"u"},la=function(e){return Xt(e)||ln(e)},Td=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,Zm=/random\([^)]+\)/g,Km=/,\s*/g,wh=/(?:-?\.?\d|\.)+/gi,wd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ll=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bd=/[+-]=-?[.\d]+/,jm=/[^,'"\[\]\s]+/gi,Jm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,wi,Cc,Hu,ai={},ul={},Ad,Cd=function(e){return(ul=qs(e,ai))&&Vn},Vu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wo=function(e,t){return!t&&console.warn(e)},Rd=function(e,t){return e&&(ai[e]=t)&&ul&&(ul[e]=t)||ai},Xo=function(){return 0},Qm={suppressEvents:!0,isStart:!0,kill:!1},qa={suppressEvents:!0,kill:!1},e_={suppressEvents:!0},Gu={},Er=[],Rc={},Pd,$n={},Il={},bh=30,$a=[],Wu="",Xu=function(e){var t=e[0],n,i;if(Ui(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=$a.length;i--&&!$a[i].targetTest(t););n=$a[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Jd(e[i],n)))||e.splice(i,1);return e},Qr=function(e){return e._gsap||Xu(mi(e))[0]._gsap},Dd=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():zu(n)&&e.getAttribute&&e.getAttribute(t)||n},Bn=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},Fs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},t_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hl=function(){var e=Er.length,t=Er.slice(0),n,i;for(Rc={},Er.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yu=function(e){return!!(e._initted||e._startAt||e.add)},Ld=function(e,t,n,i){Er.length&&!hn&&hl(),e.render(t,n,!!(hn&&t<0&&Yu(e))),Er.length&&!hn&&hl()},Id=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jm).length<2?t:ln(e)?e.trim():e},Ud=function(e){return e},li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},n_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},qs=function(e,t){for(var n in t)e[n]=t[n];return e},Ah=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ui(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},fl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ro=function(e){var t=e.parent||Vt,n=e.keyframes?n_(Sn(e.keyframes)):li;if(Fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},i_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Nd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Tl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ar=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},es=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},r_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pc=function(e,t,n,i){return e._startAt&&(hn?e._startAt.revert(qa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},s_=function r(e){return!e||e._ts&&r(e.parent)},Ch=function(e){return e._repeat?$s(e._tTime,e=e.duration()+e._rDelay)*e:0},$s=function(e,t){var n=Math.floor(e=Ht(e/t));return e&&n===e?n-1:n},dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wl=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},bl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wl(e),n._dirty||es(n,e)),e},Od=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=dl(e.rawTime(),t),(!t._dur||ta(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),es(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},Ci=function(e,t,n,i){return t.parent&&Ar(t),t._start=Ht((nr(n)?n:n||e!==Vt?ui(e,n,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Nd(e,t,"_first","_last",e._sort?"_start":0),Dc(t)||(e._recent=t),i||Od(e,t),e._ts<0&&bl(e,e._tTime),e},Fd=function(e,t){return(ai.ScrollTrigger||Vu("scrollTrigger",t))&&ai.ScrollTrigger.create(t,e)},Bd=function(e,t,n,i,s){if($u(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Pd!==jn.frame)return Er.push(e),e._lazy=[s,i],1},o_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Dc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},a_=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&o_(e)&&!(!e._initted&&Dc(e))||(e._ts<0||e._dp._ts<0)&&!Dc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=ta(0,e._tDur,t),u=$s(l,a),e._yoyo&&u&1&&(o=1-o),u!==$s(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||hn||i||e._zTime===It||!t&&e._zTime){if(!e._initted&&Bd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Pc(e,t,n,!0),e._onUpdate&&!n&&ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ar(e,1),!n&&!hn&&(ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},l_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Zs=function(e,t,n,i){var s=e._repeat,o=Ht(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ht(o*(s+1)+e._rDelay*s):o,a>0&&!i&&bl(e,e._tTime=e._tDur*a),e.parent&&wl(e),n||es(e.parent,e),e},Rh=function(e){return e instanceof On?es(e):Zs(e,e._dur)},c_={_start:0,endTime:Xo,totalDuration:Xo},ui=function r(e,t,n){var i=e.labels,s=e._recent||c_,o=e.duration()>=pi?s.endTime(!1):e._dur,a,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Po=function(e,t,n){var i=nr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Fn(l.vars.inherit)&&l.parent;o.immediateRender=Fn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new jt(t[0],o,t[s+1])},Lr=function(e,t){return e||e===0?t(e):t},ta=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!ln(e)||!(t=Jm.exec(e))?"":t[1]},u_=function(e,t,n){return Lr(n,function(i){return ta(e,t,i)})},Lc=[].slice,zd=function(e,t){return e&&Ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ui(e[0]))&&!e.nodeType&&e!==wi},h_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ln(i)&&!t||zd(i,1)?(s=n).push.apply(s,mi(i)):n.push(i)})||n},mi=function(e,t,n){return zt&&!t&&zt.selector?zt.selector(e):ln(e)&&!n&&(Cc||!Ks())?Lc.call((t||Hu).querySelectorAll(e),0):Sn(e)?h_(e,n):zd(e)?Lc.call(e,0):e?[e]:[]},Ic=function(e){return e=mi(e)[0]||Wo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?Wo("Invalid scope")||Hu.createElement("div"):e)}},kd=function(e){return e.sort(function(){return .5-Math.random()})},Hd=function(e){if(Xt(e))return e;var t=Ui(e)?e:{each:e},n=ts(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return ln(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(d,p,g){var v=(g||t).length,_=o[v],m,b,w,S,L,D,A,I,T;if(!_){if(T=t.grid==="auto"?0:(t.grid||[1,pi])[1],!T){for(A=-pi;A<(A=g[T++].getBoundingClientRect().left)&&T<v;);T<v&&T--}for(_=o[v]=[],m=l?Math.min(T,v)*u-.5:i%T,b=T===pi?0:l?v*f/T-.5:i/T|0,A=0,I=pi,D=0;D<v;D++)w=D%T-m,S=b-(D/T|0),_[D]=L=c?Math.abs(c==="y"?S:w):Ed(w*w+S*S),L>A&&(A=L),L<I&&(I=L);i==="random"&&kd(_),_.max=A-I,_.min=I,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(T>v?v-1:c?c==="y"?v/T:T:Math.max(T,v/T))||0)*(i==="edges"?-1:1),_.b=v<0?s-v:s,_.u=gn(t.amount||t.each)||0,n=n&&v<0?T_(n):n}return v=(_[d]-_.min)/_.max||0,Ht(_.b+(n?n(v):v)*_.v)+_.u}},Uc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(nr(n)?0:gn(n))}},Vd=function(e,t){var n=Sn(e),i,s;return!n&&Ui(e)&&(i=n=e.radius||pi,e.values?(e=mi(e.values),(s=!nr(e[0]))&&(i*=i)):e=Uc(e.increment)),Lr(t,n?Xt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=pi,u=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:o,s||u===o||nr(o)?u:u+gn(o)}:Uc(e))},Gd=function(e,t,n,i){return Lr(Sn(e)?!t:n===!0?!!(n=0):!i,function(){return Sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},f_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},d_=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},p_=function(e,t,n){return Xd(e,t,0,1,n)},Wd=function(e,t,n){return Lr(n,function(i){return e[~~t(i)]})},m_=function r(e,t,n){var i=t-e;return Sn(e)?Wd(e,r(0,e.length),t):Lr(n,function(s){return(i+(s-e)%i)%i+e})},__=function r(e,t,n){var i=t-e,s=i*2;return Sn(e)?Wd(e,r(0,e.length-1),t):Lr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Yo=function(e){return e.replace(Zm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Km);return Gd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Xd=function(e,t,n,i,s){var o=t-e,a=i-n;return Lr(s,function(l){return n+((l-e)/o*a||0)})},g_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=ln(e),a={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Sn(e)&&!Sn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var v=Math.min(d,~~g);return u[v](g-v)},n=t}else i||(e=qs(Sn(e)?[]:{},e));if(!u){for(l in t)qu.call(a,e,l,"get",t[l]);s=function(g){return ju(g,a)||(o?e.p:e)}}}return Lr(n,s)},Ph=function(e,t,n){var i=e.labels,s=pi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ei=function(e,t,n){var i=e.vars,s=i[t],o=zt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Er.length&&hl(),a&&(zt=a),u=l?s.apply(c,l):s.call(c),zt=o,u},So=function(e){return Ar(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&ei(e,"onInterrupt"),e},Is,Yd=[],qd=function(e){if(e)if(e=!e.name&&e.default||e,ku()||e.headless){var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Xo,render:ju,add:qu,kill:U_,modifier:I_,rawVars:0},o={targetTest:0,get:0,getSetter:Ku,aliases:{},register:0};if(Ks(),e!==i){if($n[t])return;li(i,li(fl(e,s),o)),qs(i.prototype,qs(s,fl(e,o))),$n[i.prop=t]=i,e.targetTest&&($a.push(i),Gu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Rd(t,i),e.register&&e.register(Vn,i,zn)}else Yd.push(e)},Lt=255,Mo={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},Ul=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},$d=function(e,t,n){var i=e?nr(e)?[e>>16,e>>8&Lt,e&Lt]:0:Mo.black,s,o,a,l,c,u,f,d,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Mo[e])i=Mo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Lt,i&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(wh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ul(l+1/3,s,o),i[1]=Ul(l,s,o),i[2]=Ul(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(wd),n&&i.length<4&&(i[3]=1),i}else i=e.match(wh)||Mo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Lt,o=i[1]/Lt,a=i[2]/Lt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(p=f-d,c=u>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Zd=function(e){var t=[],n=[],i=-1;return e.split(Tr).forEach(function(s){var o=s.match(Ls)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Dh=function(e,t,n){var i="",s=(e+i).match(Tr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=$d(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Zd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Tr,"1").split(Ls),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Tr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Tr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Mo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),v_=/hsl[a]?\(/,Kd=function(e){var t=e.join(" "),n;if(Tr.lastIndex=0,Tr.test(t))return n=v_.test(t),e[1]=Dh(e[1],n),e[0]=Dh(e[0],n,Zd(e[1])),!0},qo,jn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,d,p,g=function v(_){var m=r()-i,b=_===!0,w,S,L,D;if((m>e||m<0)&&(n+=m-t),i+=m,L=i-n,w=L-o,(w>0||b)&&(D=++f.frame,d=L-f.time*1e3,f.time=L=L/1e3,o+=w+(w>=s?4:s-w),S=1),b||(l=c(v)),S)for(p=0;p<a.length;p++)a[p](L,d,D,_)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){Ad&&(!Cc&&ku()&&(wi=Cc=window,Hu=wi.document||{},ai.gsap=Vn,(wi.gsapVersions||(wi.gsapVersions=[])).push(Vn.version),Cd(ul||wi.GreenSockGlobals||!wi.gsap&&wi||{}),Yd.forEach(qd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(_){return setTimeout(_,o-f.time*1e3+1|0)},qo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),qo=0,c=Xo},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){s=1e3/(_||240),o=f.time*1e3+s},add:function(_,m,b){var w=m?function(S,L,D,A){_(S,L,D,A),f.remove(w)}:_;return f.remove(_),a[b?"unshift":"push"](w),Ks(),w},remove:function(_,m){~(m=a.indexOf(_))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},f})(),Ks=function(){return!qo&&jn.wake()},gt={},x_=/^[\d.\-M][\d.\-,\s]/,S_=/["']/g,M_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(S_,"").trim():+c,i=l.substr(a+1).trim();return t},y_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},E_=function(e){var t=(e+"").split("("),n=gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[M_(t[1])]:y_(e).split(",").map(Id)):gt._CE&&x_.test(e)?gt._CE("",e):n},T_=function(e){return function(t){return 1-e(1-t)}},ts=function(e,t){return e&&(Xt(e)?e:gt[e]||E_(e))||t},hs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Bn(e,function(a){gt[a]=ai[a]=s,gt[o=a.toLowerCase()]=n;for(var l in s)gt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[a+"."+l]=s[l]}),s},jd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Nl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ac*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*$m((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:jd(a);return s=Ac/s,l.config=function(c,u){return r(e,c,u)},l},Ol=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:jd(n);return i.config=function(s){return r(e,s)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;hs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;hs("Elastic",Nl("in"),Nl("out"),Nl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};hs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);hs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});hs("Circ",function(r){return-(Ed(1-r*r)-1)});hs("Sine",function(r){return r===1?1:-qm(r*Xm)+1});hs("Back",Ol("in"),Ol("out"),Ol());gt.SteppedEase=gt.steps=ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-It;return function(a){return((i*ta(0,o,a)|0)+s)*n}}};Go.ease=gt["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Wu+=r+","+r+"Params,"});var Jd=function(e,t){this.id=Ym++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Dd,this.set=t?t.getSetter:Ku},$o=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zs(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),qo||jn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(bl(this,n),!s._dp||s.parent||Od(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ld(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ch(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ch(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?$s(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts,this.totalTime(ta(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),wl(this),r_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ht(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ci(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=e_);var i=hn;return hn=n,Yu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ui(this,n),Fn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fn(i)),this._dur||(this._zTime=-It),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-It)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Xt(n)?n:Ud,l=function(){var u=i.then;i.then=null,s&&s(),Xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){So(this)},r})();li($o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var On=(function(r){yd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fn(n.sortChildren),Vt&&Ci(n.parent||Vt,Xi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Fd(Xi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Po(0,arguments,this),this},t.from=function(i,s,o){return Po(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Po(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ro(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new jt(i,s,ui(this,o),1),this},t.call=function(i,s,o){return Ci(this,jt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new jt(i,o,ui(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ro(o).immediateRender=Fn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Ro(a).immediateRender=Fn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ht(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,p,g,v,_,m,b,w,S,L,D,A;if(this!==Vt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,S=this._start,w=this._ts,m=!w,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(d=Ht(u%_),u===l?(v=this._repeat,d=c):(L=Ht(u/_),v=~~L,v&&v===L&&(d=c,v--),d>c&&(d=c)),L=$s(this._tTime,_),!a&&this._tTime&&L!==v&&this._tTime-L*_-this._dur<=0&&(L=v),D&&v&1&&(d=c-d,A=1),v!==L&&!this._lock){var I=D&&L&1,T=I===(D&&v&1);if(v<L&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ht(v*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,L=v),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=l_(this,Ht(a),Ht(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!L&&(ei(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!m){b=0,g&&(u+=this._zTime=-It);break}}p=g}else{p=this._last;for(var M=i<0?i:d;p;){if(g=p._prev,(p._act||M<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,o||hn&&Yu(p)),d!==this._time||!this._ts&&!m){b=0,g&&(u+=this._zTime=M?-It:It);break}}p=g}}if(b&&!s&&(this.pause(),b.render(d>=a?0:-It)._zTime=d>=a?1:-1,this._ts))return this._start=S,wl(this),this.render(i,s,o);this._onUpdate&&!s&&ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ar(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(nr(s)||(s=ui(this,s,i)),!(i instanceof $o)){if(Sn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(ln(i))return this.addLabel(i,s);if(Xt(i))i=jt.delayedCall(0,i);else return this}return this!==i?Ci(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-pi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof jt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return ln(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(i.parent===this&&Tl(this,i),i===this._recent&&(this._recent=this._last),es(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ui(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=jt.delayedCall(0,s||Xo,o);return a.data="isPause",this._hasPause=1,Ci(this,a,ui(this,i))},t.removePause=function(i){var s=this._first;for(i=ui(this,i);s;)s._start===i&&s.data==="isPause"&&Ar(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)gr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=mi(i),l=this._first,c=nr(s),u;l;)l instanceof jt?t_(l._targets,a)&&(c?(!gr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ui(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,p,g=jt.to(o,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!p){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==_&&Zs(g,_,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,li({startAt:{time:ui(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ph(this,ui(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ph(this,ui(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ht(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return es(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=pi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ci(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ht(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Zs(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Vt._ts&&(Ld(Vt,dl(i,Vt)),Pd=jn.frame),jn.frame>=bh){bh+=ri.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&ri.autoSleep&&jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jn.sleep()}}},e})($o);li(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var w_=function(e,t,n,i,s,o,a){var l=new zn(this._pt,e,t,0,1,rp,null,s),c=0,u=0,f,d,p,g,v,_,m,b;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Yo(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),d=n.match(Ll)||[];f=Ll.exec(i);)g=f[0],v=i.substring(c,f.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),g!==d[u++]&&(_=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:_,c:g.charAt(1)==="="?Fs(_,g)-_:parseFloat(g)-_,m:p&&p<4?Math.round:0},c=Ll.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(bd.test(i)||m)&&(l.e=0),this._pt=l,l},qu=function(e,t,n,i,s,o,a,l,c,u){Xt(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Xt(f)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=Xt(f)?c?P_:np:Zu,g;if(ln(i)&&(~i.indexOf("random(")&&(i=Yo(i)),i.charAt(1)==="="&&(g=Fs(d,i)+(gn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Nc)return!isNaN(d*i)&&i!==""?(g=new zn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?L_:ip,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Vu(t,i),w_.call(this,e,t,d,i,p,l||ri.stringFilter,c))},b_=function(e,t,n,i,s){if(Xt(e)&&(e=Do(e,s,t,n,i)),!Ui(e)||e.style&&e.nodeType||Sn(e)||Td(e))return ln(e)?Do(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Do(e[a],s,t,n,i);return o},Qd=function(e,t,n,i,s,o){var a,l,c,u;if($n[e]&&(a=new $n[e]).init(s,a.rawVars?t[e]:b_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new zn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Is))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},gr,Nc,$u=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,p=i.autoRevert,g=e._dur,v=e._startAt,_=e._targets,m=e.parent,b=m&&m.data==="nested"?m.vars.targets:_,w=e._overwrite==="auto"&&!Bu,S=e.timeline,L=i.easeReverse||f,D,A,I,T,M,U,z,V,Z,J,$,X,H;if(S&&(!d||!s)&&(s="none"),e._ease=ts(s,Go.ease),e._rEase=L&&(ts(L)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||d&&!i.stagger){if(V=_[0]?Qr(_[0]).harness:0,X=V&&i[V.prop],D=fl(i,Gu),v&&(v._zTime<0&&v.progress(1),t<0&&u&&a&&!p?v.render(-1,!0):v.revert(u&&g?qa:Qm),v._lazy=0),o){if(Ar(e._startAt=jt.set(_,li({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!v&&Fn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!a&&!p)&&e._startAt.revert(qa),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!v){if(t&&(a=!1),I=li({overwrite:!1,data:"isFromStart",lazy:a&&!v&&Fn(l),immediateRender:a,stagger:0,parent:m},D),X&&(I[V.prop]=X),Ar(e._startAt=jt.set(_,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(qa):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Fn(l)||l&&!g,A=0;A<_.length;A++){if(M=_[A],z=M._gsap||Xu(_)[A]._gsap,e._ptLookup[A]=J={},Rc[z.id]&&Er.length&&hl(),$=b===_?A:b.indexOf(M),V&&(Z=new V).init(M,X||D,e,$,b)!==!1&&(e._pt=T=new zn(e._pt,M,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(le){J[le]=T}),Z.priority&&(U=1)),!V||X)for(I in D)$n[I]&&(Z=Qd(I,D,e,$,M,b))?Z.priority&&(U=1):J[I]=T=qu.call(e,M,I,"get",D[I],$,b,0,i.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),w&&e._pt&&(gr=e,Vt.killTweensOf(M,J,e.globalTime(t)),H=!e.parent,gr=0),e._pt&&l&&(Rc[z.id]=1)}U&&sp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&S.render(pi,!0,!0)},A_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(u=d[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Nc=1,e.vars[t]="+=0",$u(e,a),Nc=0,l?Wo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)f=c[p],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=qt(n)+gn(f.e)),f.b&&(f.b=u.s+gn(f.b))},C_=function(e,t){var n=e[0]?Qr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=qs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},R_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Sn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Do=function(e,t,n,i,s){return Xt(e)?e.call(t,n,i,s):ln(e)&&~e.indexOf("random(")?Yo(e):e},ep=Wu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",tp={};Bn(ep+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return tp[r]=1});var jt=(function(r){yd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ro(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,v=l.defaults,_=l.scrollTrigger,m=i.parent||Vt,b=(Sn(n)||Td(n)?nr(n[0]):"length"in i)?[n]:mi(n),w,S,L,D,A,I,T,M;if(a._targets=b.length?Xu(b):Wo("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||la(c)||la(u)){i=a.vars;var U=i.easeReverse||i.yoyoEase;if(w=a.timeline=new On({data:"nested",defaults:v||{},targets:m&&m.data==="nested"?m.vars.targets:b}),w.kill(),w.parent=w._dp=Xi(a),w._start=0,d||la(c)||la(u)){if(D=b.length,T=d&&Hd(d),Ui(d))for(A in d)~ep.indexOf(A)&&(M||(M={}),M[A]=d[A]);for(S=0;S<D;S++)L=fl(i,tp),L.stagger=0,U&&(L.easeReverse=U),M&&qs(L,M),I=b[S],L.duration=+Do(c,Xi(a),S,I,b),L.delay=(+Do(u,Xi(a),S,I,b)||0)-a._delay,!d&&D===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),w.to(I,L,T?T(S,I,b):0),w._ease=gt.none;w.duration()?c=u=0:a.timeline=0}else if(g){Ro(li(w.vars.defaults,{ease:"none"})),w._ease=ts(g.ease||i.ease||"none");var z=0,V,Z,J;if(Sn(g))g.forEach(function($){return w.to(b,$,">")}),w.duration();else{L={};for(A in g)A==="ease"||A==="easeEach"||R_(A,g[A],L,g.easeEach);for(A in L)for(V=L[A].sort(function($,X){return $.t-X.t}),z=0,S=0;S<V.length;S++)Z=V[S],J={ease:Z.e,duration:(Z.t-(S?V[S-1].t:0))/100*c},J[A]=Z.v,w.to(b,J,z),z+=J.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return p===!0&&!Bu&&(gr=Xi(a),Vt.killTweensOf(b),gr=0),Ci(m,Xi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Ht(m._time)&&Fn(f)&&s_(Xi(a))&&m.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-u)||0)),_&&Fd(Xi(a),_),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-It&&!u?l:i<It?0:i,d,p,g,v,_,m,b,w;if(!c)a_(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,w=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+i,s,o);if(d=Ht(f%v),f===l?(g=this._repeat,d=c):(_=Ht(f/v),g=~~_,g&&g===_?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(d=c-d),_=$s(this._tTime,v),d===a&&!o&&this._initted&&g===_)return this._tTime=f,this;g!==_&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==v&&this._initted&&(this._lock=o=1,this.render(Ht(v*g),!0).invalidate()._lock=0)}if(!this._initted){if(Bd(this,u?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var L=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(S?-1:1)/L:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/c);if(this._from&&(this.ratio=b=1-b),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!_&&(ei(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;w&&w.render(i<0?i:w._dur*w._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Pc(this,i,s,o),ei(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&ei(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Pc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ar(this,1),!s&&!(u&&!a)&&(f||a||m)&&(ei(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){qo||jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||$u(this,c),u=this._ease(c/this._dur),A_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(bl(this,0),this.parent||Nd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?So(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,gr&&gr.vars.overwrite!==!0)._first||So(this),this.parent&&o!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?mi(i):a,c=this._ptLookup,u=this._pt,f,d,p,g,v,_,m;if((!s||s==="all")&&i_(a,l))return s==="all"&&(this._pt=0),So(this);for(f=this._op=this._op||[],s!=="all"&&(ln(s)&&(v={},Bn(s,function(b){return v[b]=1}),s=v),s=C_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(f[m]=s,g=d,p={}):(p=f[m]=f[m]||{},g=s);for(v in g)_=d&&d[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&Tl(this,_,"_pt"),delete d[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&u&&So(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Po(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Po(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Vt.killTweensOf(i,s,o)},e})($o);li(jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(r){jt[r]=function(){var e=new On,t=Lc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Zu=function(e,t,n){return e[t]=n},np=function(e,t,n){return e[t](n)},P_=function(e,t,n,i){return e[t](i.fp,n)},D_=function(e,t,n){return e.setAttribute(t,n)},Ku=function(e,t){return Xt(e[t])?np:zu(e[t])&&e.setAttribute?D_:Zu},ip=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},L_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},rp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ju=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},I_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},U_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Tl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},N_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},sp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},zn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ip,this.d=l||this,this.set=c||Zu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=N_,this.m=n,this.mt=s,this.tween=i},r})();Bn(Wu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Gu[r]=1});ai.TweenMax=ai.TweenLite=jt;ai.TimelineLite=ai.TimelineMax=On;Vt=new On({sortChildren:!1,defaults:Go,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=Kd;var ns=[],Za={},O_=[],Lh=0,F_=0,Fl=function(e){return(Za[e]||O_).map(function(t){return t()})},Oc=function(){var e=Date.now(),t=[];e-Lh>2&&(Fl("matchMediaInit"),ns.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=wi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Fl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Lh=e,Fl("matchMedia"))},op=(function(){function r(t,n){this.selector=n&&Ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=F_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Xt(n)&&(s=i,i=n,n=Xt);var o=this,a=function(){var c=zt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ic(s)),zt=o,f=i.apply(o,arguments),Xt(f)&&o._r.push(f),zt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Xt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=zt;zt=null,n(this),zt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof jt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ns.length;o--;)ns[o].id===this.id&&ns.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),B_=(function(){function r(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ui(n)||(n={matches:n});var o=new op(0,s||this.scope),a=o.conditions={},l,c,u;zt&&!o.selector&&(o.selector=zt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=wi.matchMedia(n[c]),l&&(ns.indexOf(o)<0&&ns.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Oc):l.addEventListener("change",Oc)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),pl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return qd(i)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=mi(e)[0]);var s=Qr(e||{}).get,o=n?Ud:Id;return n==="native"&&(n=""),e&&(t?o(($n[t]&&$n[t].get||s)(e,t,n,i)):function(a,l,c){return o(($n[a]&&$n[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var i=e.map(function(u){return Vn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=$n[t],a=Qr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Is._pt=0,f.init(e,n?u+n:u,Is,0,[e]),f.render(1,f),Is._pt&&ju(1,Is)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Vn.to(e,li((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ts(e.ease,Go.ease)),Ah(Go,e||{})},config:function(e){return Ah(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!$n[a]&&!ai[a]&&Wo(t+" effect requires "+a+" plugin.")}),Il[t]=function(a,l,c){return n(mi(a),li(l||{},s),c)},o&&(On.prototype[t]=function(a,l,c){return this.add(Il[t](a,Ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){gt[e]=ts(t)},parseEase:function(e,t){return arguments.length?ts(e,t):gt},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),i,s;for(n.smoothChildTiming=Fn(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof jt&&i.vars.onComplete===i._targets[0]))&&Ci(n,i,i._start-i._delay),i=s;return Ci(Vt,n,0),n},context:function(e,t){return e?new op(e,t):zt},matchMedia:function(e){return new B_(e)},matchMediaRefresh:function(){return ns.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Oc()},addEventListener:function(e,t){var n=Za[e]||(Za[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Za[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:m_,wrapYoyo:__,distribute:Hd,random:Gd,snap:Vd,normalize:p_,getUnit:gn,clamp:u_,splitColor:$d,toArray:mi,selector:Ic,mapRange:Xd,pipe:f_,unitize:d_,interpolate:g_,shuffle:kd},install:Cd,effects:Il,ticker:jn,updateRoot:On.updateRoot,plugins:$n,globalTimeline:Vt,core:{PropTween:zn,globals:Rd,Tween:jt,Timeline:On,Animation:$o,getCache:Qr,_removeLinkedListItem:Tl,reverting:function(){return hn},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return Bu=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pl[r]=jt[r]});jn.add(On.updateRoot);Is=pl.to({},{duration:0});var z_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},k_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=z_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Bl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(ln(s)&&(l={},Bn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}k_(a,s)}}}},Vn=pl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Bl("roundProps",Uc),Bl("modifiers"),Bl("snap",Vd))||pl;jt.version=On.version=Vn.version="3.15.0";Ad=1;ku()&&Ks();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ih,vr,Bs,Ju,Zr,Uh,Qu,H_=function(){return typeof window<"u"},ir={},Hr=180/Math.PI,zs=Math.PI/180,fs=Math.atan2,Nh=1e8,eh=/([A-Z])/g,V_=/(left|right|width|margin|padding|x)/i,G_=/[\s,\(]\S/,Pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},W_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},X_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Y_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},q_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ap=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},lp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$_=function(e,t,n){return e.style[t]=n},Z_=function(e,t,n){return e.style.setProperty(t,n)},K_=function(e,t,n){return e._gsap[t]=n},j_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},J_=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Q_=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",kn=Gt+"Origin",eg=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ir&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Yi(i,a)}):this.tfm[e]=o.x?o[e]:Yi(i,e),e===kn&&(this.tfm.zOrigin=o.zOrigin);else return Pi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(kn,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},cp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tg=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(eh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Qu(),(!s||!s.isStart)&&!n[Gt]&&(cp(n),i.zOrigin&&n[kn]&&(n[kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},up=function(e,t){var n={target:e,props:[],revert:tg,save:eg};return e._gsap||Vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},hp,Bc=function(e,t){var n=vr.createElementNS?vr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vr.createElement(e);return n&&n.style?n:vr.createElement(e)},ti=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(eh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,js(t)||t,1)||""},Oh="O,Moz,ms,Ms,Webkit".split(","),js=function(e,t,n){var i=t||Zr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Oh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Oh[o]:"")+e},zc=function(){H_()&&window.document&&(Ih=window,vr=Ih.document,Bs=vr.documentElement,Zr=Bc("div")||{style:{}},Bc("div"),Gt=js(Gt),kn=Gt+"Origin",Zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hp=!!js("perspective"),Qu=Vn.core.reverting,Ju=1)},Fh=function(e){var t=e.ownerSVGElement,n=Bc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Bs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Bs.removeChild(n),s},Bh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},fp=function(e){var t,n;try{t=e.getBBox()}catch{t=Fh(e),n=1}return t&&(t.width||t.height)||n||(t=Fh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Bh(e,["x","cx","x1"])||0,y:+Bh(e,["y","cy","y1"])||0,width:0,height:0}:t},dp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fp(e))},Cr=function(e,t){if(t){var n=e.style,i;t in ir&&t!==kn&&(t=Gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(eh,"-$1").toLowerCase())):n.removeAttribute(t)}},xr=function(e,t,n,i,s,o){var a=new zn(e._pt,t,n,0,1,o?lp:ap);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},zh={deg:1,rad:1,turn:1},ng={grid:1,flex:1},Rr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Zr.style,l=V_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",p=i==="%",g,v,_,m;if(i===o||!s||zh[i]||zh[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&dp(e),(p||o==="%")&&(ir[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],qt(p?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),v=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===vr||!v.appendChild)&&(v=vr.body),_=v._gsap,_&&p&&_.width&&l&&_.time===jn.time&&!_.uncache)return qt(s/_.width*f);if(p&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=f+i,g=e[u],b?e.style[t]=b:Cr(e,t)}else(p||o==="%")&&!ng[ti(v,"display")]&&(a.position=ti(e,"position")),v===e&&(a.position="static"),v.appendChild(Zr),g=Zr[u],v.removeChild(Zr),a.position="absolute";return l&&p&&(_=Qr(v),_.time=jn.time,_.width=v[u]),qt(d?g*s/f:g&&s?f/g*s:0)},Yi=function(e,t,n,i){var s;return Ju||zc(),t in Pi&&t!=="transform"&&(t=Pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ir[t]&&t!=="transform"?(s=Ko(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_l(ti(e,kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ml[t]&&ml[t](e,t,n)||ti(e,t)||Dd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Rr(e,t,s,n)+n:s},ig=function(e,t,n,i){if(!n||n==="none"){var s=js(t,e,1),o=s&&ti(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ti(e,"borderTopColor"))}var a=new zn(this._pt,e.style,t,0,1,rp),l=0,c=0,u,f,d,p,g,v,_,m,b,w,S,L;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ti(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(v=e.style[t],e.style[t]=i,i=ti(e,t)||i,v?e.style[t]=v:Cr(e,t)),u=[n,i],Kd(u),n=u[0],i=u[1],d=n.match(Ls)||[],L=i.match(Ls)||[],L.length){for(;f=Ls.exec(i);)_=f[0],b=i.substring(l,f.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),_!==(v=d[c++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),_.charAt(1)==="="&&(_=Fs(p,_)+S),m=parseFloat(_),w=_.substr((m+"").length),l=Ls.lastIndex-w.length,w||(w=w||ri.units[t]||S,l===i.length&&(i+=w,a.e+=w)),S!==w&&(p=Rr(e,t,v,w)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:p,c:m-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?lp:ap;return bd.test(i)&&(a.e=0),this._pt=a,a},kh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rg=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=kh[n]||n,t[1]=kh[i]||i,t.join(" ")},sg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ir[a]&&(l=1,a=a==="transformOrigin"?kn:Gt),Cr(n,a);l&&(Cr(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ko(n,1),o.uncache=1,cp(i)))}},ml={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new zn(e._pt,t,n,0,0,sg);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Zo=[1,0,0,1,0,0],pp={},mp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hh=function(e){var t=ti(e,Gt);return mp(t)?Zo:t.substr(7).match(wd).map(qt)},th=function(e,t){var n=e._gsap||Qr(e),i=e.style,s=Hh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zo:s):(s===Zo&&!e.offsetParent&&e!==Bs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Bs.appendChild(e)),s=Hh(e),l?i.display=l:Cr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Bs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},kc=function(e,t,n,i,s,o){var a=e._gsap,l=s||th(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],v=l[2],_=l[3],m=l[4],b=l[5],w=t.split(" "),S=parseFloat(w[0])||0,L=parseFloat(w[1])||0,D,A,I,T;n?l!==Zo&&(A=p*_-g*v)&&(I=S*(_/A)+L*(-v/A)+(v*b-_*m)/A,T=S*(-g/A)+L*(p/A)-(p*b-g*m)/A,S=I,L=T):(D=fp(e),S=D.x+(~w[0].indexOf("%")?S/100*D.width:S),L=D.y+(~(w[1]||w[0]).indexOf("%")?L/100*D.height:L)),i||i!==!1&&a.smooth?(m=S-c,b=L-u,a.xOffset=f+(m*p+b*v)-m,a.yOffset=d+(m*g+b*_)-b):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=L,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[kn]="0px 0px",o&&(xr(o,a,"xOrigin",c,S),xr(o,a,"yOrigin",u,L),xr(o,a,"xOffset",f,a.xOffset),xr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+L)},Ko=function(e,t){var n=e._gsap||new Jd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ti(e,kn)||"0",u,f,d,p,g,v,_,m,b,w,S,L,D,A,I,T,M,U,z,V,Z,J,$,X,H,le,N,Me,Fe,Je,ie,ue;return u=f=d=v=_=m=b=w=S=0,p=g=1,n.svg=!!(e.getCTM&&dp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),i.scale=i.rotate=i.translate="none"),A=th(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),kc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),L=n.xOrigin||0,D=n.yOrigin||0,A!==Zo&&(U=A[0],z=A[1],V=A[2],Z=A[3],u=J=A[4],f=$=A[5],A.length===6?(p=Math.sqrt(U*U+z*z),g=Math.sqrt(Z*Z+V*V),v=U||z?fs(z,U)*Hr:0,b=V||Z?fs(V,Z)*Hr+v:0,b&&(g*=Math.abs(Math.cos(b*zs))),n.svg&&(u-=L-(L*U+D*V),f-=D-(L*z+D*Z))):(ue=A[6],Je=A[7],N=A[8],Me=A[9],Fe=A[10],ie=A[11],u=A[12],f=A[13],d=A[14],I=fs(ue,Fe),_=I*Hr,I&&(T=Math.cos(-I),M=Math.sin(-I),X=J*T+N*M,H=$*T+Me*M,le=ue*T+Fe*M,N=J*-M+N*T,Me=$*-M+Me*T,Fe=ue*-M+Fe*T,ie=Je*-M+ie*T,J=X,$=H,ue=le),I=fs(-V,Fe),m=I*Hr,I&&(T=Math.cos(-I),M=Math.sin(-I),X=U*T-N*M,H=z*T-Me*M,le=V*T-Fe*M,ie=Z*M+ie*T,U=X,z=H,V=le),I=fs(z,U),v=I*Hr,I&&(T=Math.cos(I),M=Math.sin(I),X=U*T+z*M,H=J*T+$*M,z=z*T-U*M,$=$*T-J*M,U=X,J=H),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,m=180-m),p=qt(Math.sqrt(U*U+z*z+V*V)),g=qt(Math.sqrt($*$+ue*ue)),I=fs(J,$),b=Math.abs(I)>2e-4?I*Hr:0,S=ie?1/(ie<0?-ie:ie):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!mp(ti(e,Gt)),X&&e.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=qt(p),n.scaleY=qt(g),n.rotation=qt(v)+a,n.rotationX=qt(_)+a,n.rotationY=qt(m)+a,n.skewX=b+a,n.skewY=w+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[kn]=_l(c)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?ag:hp?_p:og,n.uncache=0,n},_l=function(e){return(e=e.split(" "))[0]+" "+e[1]},zl=function(e,t,n){var i=gn(t);return qt(parseFloat(t)+parseFloat(Rr(e,"x",n+"px",i)))+i},og=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,_p(e,t)},Ir="0deg",co="0px",Ur=") ",_p=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,v=n.scaleY,_=n.transformPerspective,m=n.force3D,b=n.target,w=n.zOrigin,S="",L=m==="auto"&&e&&e!==1||m===!0;if(w&&(f!==Ir||u!==Ir)){var D=parseFloat(u)*zs,A=Math.sin(D),I=Math.cos(D),T;D=parseFloat(f)*zs,T=Math.cos(D),o=zl(b,o,A*T*-w),a=zl(b,a,-Math.sin(D)*-w),l=zl(b,l,I*T*-w+w)}_!==co&&(S+="perspective("+_+Ur),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(L||o!==co||a!==co||l!==co)&&(S+=l!==co||L?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ur),c!==Ir&&(S+="rotate("+c+Ur),u!==Ir&&(S+="rotateY("+u+Ur),f!==Ir&&(S+="rotateX("+f+Ur),(d!==Ir||p!==Ir)&&(S+="skew("+d+", "+p+Ur),(g!==1||v!==1)&&(S+="scale("+g+", "+v+Ur),b.style[Gt]=S||"translate(0, 0)"},ag=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,v=n.yOrigin,_=n.xOffset,m=n.yOffset,b=n.forceCSS,w=parseFloat(o),S=parseFloat(a),L,D,A,I,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=zs,c*=zs,L=Math.cos(l)*f,D=Math.sin(l)*f,A=Math.sin(l-c)*-d,I=Math.cos(l-c)*d,c&&(u*=zs,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,I*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),L*=T,D*=T)),L=qt(L),D=qt(D),A=qt(A),I=qt(I)):(L=f,I=d,D=A=0),(w&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(w=Rr(p,"x",o,"px"),S=Rr(p,"y",a,"px")),(g||v||_||m)&&(w=qt(w+g-(g*L+v*A)+_),S=qt(S+v-(g*D+v*I)+m)),(i||s)&&(T=p.getBBox(),w=qt(w+i/100*T.width),S=qt(S+s/100*T.height)),T="matrix("+L+","+D+","+A+","+I+","+w+","+S+")",p.setAttribute("transform",T),b&&(p.style[Gt]=T)},lg=function(e,t,n,i,s){var o=360,a=ln(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Hr:1),c=l-i,u=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Nh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Nh)%o-~~(c/o)*o)),e._pt=d=new zn(e._pt,t,n,i,c,W_),d.e=u,d.u="deg",e._props.push(n),d},Vh=function(e,t){for(var n in t)e[n]=t[n];return e},cg=function(e,t,n){var i=Vh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=Ko(n,1),Cr(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=Ko(n,1),o[Gt]=c);for(l in ir)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=gn(c),g=gn(u),f=p!==g?Rr(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new zn(e._pt,a,l,f,d-f,Fc),e._pt.u=g||0,e._props.push(l));Vh(a,i)};Bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ml[e>1?"border"+r:r]=function(a,l,c,u,f){var d,p;if(arguments.length<4)return d=o.map(function(g){return Yi(a,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},o.forEach(function(g,v){return p[g]=d[v]=d[v]||d[(v-1)/2|0]}),a.init(l,p,f)}});var gp={name:"css",register:zc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,p,g,v,_,m,b,w,S,L,D,A,I,T;Ju||zc(),this.styles=this.styles||up(e),I=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(u=t[v],!($n[v]&&Qd(v,t,n,i,e,s)))){if(p=typeof u,g=ml[v],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Yo(u)),g)g(this,e,v,u,n)&&(A=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",Tr.lastIndex=0,Tr.test(c)||(_=gn(c),m=gn(u),m?_!==m&&(c=Rr(e,v,c,m)+m):_&&(u+=_)),this.add(a,"setProperty",c,u,i,s,0,0,v),o.push(v),I.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,e,s):l[v],ln(c)&&~c.indexOf("random(")&&(c=Yo(c)),gn(c+"")||c==="auto"||(c+=ri.units[v]||gn(Yi(e,v))||""),(c+"").charAt(1)==="="&&(c=Yi(e,v))):c=Yi(e,v),d=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),f=parseFloat(u),v in Pi&&(v==="autoAlpha"&&(d===1&&Yi(e,"visibility")==="hidden"&&f&&(d=0),I.push("visibility",0,a.visibility),xr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=Pi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),w=v in ir,w){if(this.styles.save(v),T=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=ti(e,"perspective"),M?e.style.perspective=M:Cr(e,"perspective")}f=parseFloat(u)}if(S||(L=e._gsap,L.renderTransform&&!t.parseTransform||Ko(e,t.parseTransform),D=t.smoothOrigin!==!1&&L.smooth,S=this._pt=new zn(this._pt,a,Gt,0,1,L.renderTransform,L,0,-1),S.dep=1),v==="scale")this._pt=new zn(this._pt,L,"scaleY",L.scaleY,(b?Fs(L.scaleY,b+f):f)-L.scaleY||0,Fc),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){I.push(kn,0,a[kn]),u=rg(u),L.svg?kc(e,u,0,D,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==L.zOrigin&&xr(this,L,"zOrigin",L.zOrigin,m),xr(this,a,v,_l(c),_l(u)));continue}else if(v==="svgOrigin"){kc(e,u,1,D,0,this);continue}else if(v in pp){lg(this,L,v,d,b?Fs(d,b+u):u);continue}else if(v==="smoothOrigin"){xr(this,L,"smooth",L.smooth,u);continue}else if(v==="force3D"){L[v]=u;continue}else if(v==="transform"){cg(this,u,e);continue}}else v in a||(v=js(v)||v);if(w||(f||f===0)&&(d||d===0)&&!G_.test(u)&&v in a)_=(c+"").substr((d+"").length),f||(f=0),m=gn(u)||(v in ri.units?ri.units[v]:_),_!==m&&(d=Rr(e,v,c,m)),this._pt=new zn(this._pt,w?L:a,v,d,(b?Fs(d,b+f):f)-d,!w&&(m==="px"||v==="zIndex")&&t.autoRound!==!1?q_:Fc),this._pt.u=m||0,w&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=Y_):_!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=X_);else if(v in a)ig.call(this,e,v,c,b?b+u:u);else if(v in e)this.add(e,v,c||e[v],b?b+u:u,i,s);else if(v!=="parseTransform"){Vu(v,u);continue}w||(v in a?I.push(v,0,a[v]):typeof e[v]=="function"?I.push(v,2,e[v]()):I.push(v,1,c||e[v])),o.push(v)}}A&&sp(this)},render:function(e,t){if(t.tween._time||!Qu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Yi,aliases:Pi,getSetter:function(e,t,n){var i=Pi[t];return i&&i.indexOf(",")<0&&(t=i),t in ir&&t!==kn&&(e._gsap.x||Yi(e,"x"))?n&&Uh===n?t==="scale"?j_:K_:(Uh=n||{})&&(t==="scale"?J_:Q_):e.style&&!zu(e.style[t])?$_:~t.indexOf("-")?Z_:Ku(e,t)},core:{_removeProperty:Cr,_getMatrix:th}};Vn.utils.checkPrefix=js;Vn.core.getStyleSaver=up;(function(r,e,t,n){var i=Bn(r+","+e+","+t,function(s){ir[s]=1});Bn(e,function(s){ri.units[s]="deg",pp[s]=1}),Pi[i[13]]=r+","+e,Bn(n,function(s){var o=s.split(":");Pi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ri.units[r]="px"});Vn.registerPlugin(gp);var Ln=Vn.registerPlugin(gp)||Vn;Ln.core.Tween;function ug(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function hg(r,e,t){return e&&ug(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cn,Ka,Jn,Sr,Mr,ks,vp,Vr,Hs,xp,Zi,yi,Sp,Mp=function(){return cn||typeof window<"u"&&(cn=window.gsap)&&cn.registerPlugin&&cn},yp=1,Us=[],pt=[],Li=[],Lo=Date.now,Hc=function(e,t){return t},fg=function(){var e=Hs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,pt),i.push.apply(i,Li),pt=n,Li=i,Hc=function(o,a){return t[o](a)}},wr=function(e,t){return~Li.indexOf(e)&&Li[Li.indexOf(e)+1][t]},Io=function(e){return!!~xp.indexOf(e)},En=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ca="scrollLeft",ua="scrollTop",Vc=function(){return Zi&&Zi.isPressed||pt.cache++},gl=function(e,t){var n=function i(s){if(s||s===0){yp&&(Jn.history.scrollRestoration="manual");var o=Zi&&Zi.isPressed;s=i.v=Math.round(s)||(Zi&&Zi.iOS?1:0),e(s),i.cacheID=pt.cache,o&&Hc("ss",s)}else(t||pt.cache!==i.cacheID||Hc("ref"))&&(i.cacheID=pt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Pn={s:ca,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gl(function(r){return arguments.length?Jn.scrollTo(r,en.sc()):Jn.pageXOffset||Sr[ca]||Mr[ca]||ks[ca]||0})},en={s:ua,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Pn,sc:gl(function(r){return arguments.length?Jn.scrollTo(Pn.sc(),r):Jn.pageYOffset||Sr[ua]||Mr[ua]||ks[ua]||0})},Nn=function(e,t){return(t&&t._ctx&&t._ctx.selector||cn.utils.toArray)(e)[0]||(typeof e=="string"&&cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},dg=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Pr=function(e,t){var n=t.s,i=t.sc;Io(e)&&(e=Sr.scrollingElement||Mr);var s=pt.indexOf(e),o=i===en.sc?1:2;!~s&&(s=pt.push(e)-1),pt[s+o]||En(e,"scroll",Vc);var a=pt[s+o],l=a||(pt[s+o]=gl(wr(e,n),!0)||(Io(e)?i:gl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=cn.getProperty(e,"scrollBehavior")==="smooth"),l},Gc=function(e,t,n){var i=e,s=e,o=Lo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,v){var _=Lo();v||_-o>l?(s=i,i=g,a=o,o=_):n?i+=g:i=s+(g-s)/(_-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var v=a,_=s,m=Lo();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?_:-_))/((n?m:o)-v)*1e3};return{update:u,reset:f,getVelocity:d}},uo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Gh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Ep=function(){Hs=cn.core.globals().ScrollTrigger,Hs&&Hs.core&&fg()},Tp=function(e){return cn=e||Mp(),!Ka&&cn&&typeof document<"u"&&document.body&&(Jn=window,Sr=document,Mr=Sr.documentElement,ks=Sr.body,xp=[Jn,Sr,Mr,ks],cn.utils.clamp,Sp=cn.core.context||function(){},Vr="onpointerenter"in ks?"pointer":"mouse",vp=$t.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yi=$t.eventTypes=("ontouchstart"in Mr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Mr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return yp=0},500),Ka=1),Hs||Ep(),Ka};Pn.op=en;pt.cache=0;var $t=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ka||Tp(cn)||console.warn("Please gsap.registerPlugin(Observer)"),Hs||Ep();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,v=n.event,_=n.onDragStart,m=n.onDragEnd,b=n.onDrag,w=n.onPress,S=n.onRelease,L=n.onRight,D=n.onLeft,A=n.onUp,I=n.onDown,T=n.onChangeX,M=n.onChangeY,U=n.onChange,z=n.onToggleX,V=n.onToggleY,Z=n.onHover,J=n.onHoverEnd,$=n.onMove,X=n.ignoreCheck,H=n.isNormalizer,le=n.onGestureStart,N=n.onGestureEnd,Me=n.onWheel,Fe=n.onEnable,Je=n.onDisable,ie=n.onClick,ue=n.scrollSpeed,ge=n.capture,pe=n.allowClicks,Re=n.lockAxis,He=n.onLockAxis;this.target=a=Nn(a)||Mr,this.vars=n,p&&(p=cn.utils.toArray(p)),i=i||1e-9,s=s||0,g=g||1,ue=ue||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(ks).lineHeight)||22);var Ze,Ke,Pe,ke,F,Ue,Oe,G=this,Be=0,je=0,Ne=n.passive||!u&&n.passive!==!1,R=Pr(a,Pn),E=Pr(a,en),W=R(),se=E(),ae=~o.indexOf("touch")&&!~o.indexOf("pointer")&&yi[0]==="pointerdown",Y=Io(a),de=a.ownerDocument||Sr,ne=[0,0,0],he=[0,0,0],Ge=0,fe=function(){return Ge=Lo()},me=function(Xe,rt){return(G.event=Xe)&&p&&dg(Xe.target,p)||rt&&ae&&Xe.pointerType!=="touch"||X&&X(Xe,rt)},Se=function(){G._vx.reset(),G._vy.reset(),Ke.pause(),f&&f(G)},we=function(){var Xe=G.deltaX=Gh(ne),rt=G.deltaY=Gh(he),De=Math.abs(Xe)>=i,nt=Math.abs(rt)>=i;U&&(De||nt)&&U(G,Xe,rt,ne,he),De&&(L&&G.deltaX>0&&L(G),D&&G.deltaX<0&&D(G),T&&T(G),z&&G.deltaX<0!=Be<0&&z(G),Be=G.deltaX,ne[0]=ne[1]=ne[2]=0),nt&&(I&&G.deltaY>0&&I(G),A&&G.deltaY<0&&A(G),M&&M(G),V&&G.deltaY<0!=je<0&&V(G),je=G.deltaY,he[0]=he[1]=he[2]=0),(ke||Pe)&&($&&$(G),Pe&&(_&&Pe===1&&_(G),b&&b(G),Pe=0),ke=!1),Ue&&!(Ue=!1)&&He&&He(G),F&&(Me(G),F=!1),Ze=0},Te=function(Xe,rt,De){ne[De]+=Xe,he[De]+=rt,G._vx.update(Xe),G._vy.update(rt),c?Ze||(Ze=requestAnimationFrame(we)):we()},Ve=function(Xe,rt){Re&&!Oe&&(G.axis=Oe=Math.abs(Xe)>Math.abs(rt)?"x":"y",Ue=!0),Oe!=="y"&&(ne[2]+=Xe,G._vx.update(Xe,!0)),Oe!=="x"&&(he[2]+=rt,G._vy.update(rt,!0)),c?Ze||(Ze=requestAnimationFrame(we)):we()},ze=function(Xe){if(!me(Xe,1)){Xe=uo(Xe,u);var rt=Xe.clientX,De=Xe.clientY,nt=rt-G.x,Ye=De-G.y,tt=G.isDragging;G.x=rt,G.y=De,(tt||(nt||Ye)&&(Math.abs(G.startX-rt)>=s||Math.abs(G.startY-De)>=s))&&(Pe||(Pe=tt?2:1),tt||(G.isDragging=!0),Ve(nt,Ye))}},$e=G.onPress=function(Ie){me(Ie,1)||Ie&&Ie.button||(G.axis=Oe=null,Ke.pause(),G.isPressed=!0,Ie=uo(Ie),Be=je=0,G.startX=G.x=Ie.clientX,G.startY=G.y=Ie.clientY,G._vx.reset(),G._vy.reset(),En(H?a:de,yi[1],ze,Ne,!0),G.deltaX=G.deltaY=0,w&&w(G))},B=G.onRelease=function(Ie){if(!me(Ie,1)){yn(H?a:de,yi[1],ze,!0);var Xe=!isNaN(G.y-G.startY),rt=G.isDragging,De=rt&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),nt=uo(Ie);!De&&Xe&&(G._vx.reset(),G._vy.reset(),u&&pe&&cn.delayedCall(.08,function(){if(Lo()-Ge>300&&!Ie.defaultPrevented){if(Ie.target.click)Ie.target.click();else if(de.createEvent){var Ye=de.createEvent("MouseEvents");Ye.initMouseEvent("click",!0,!0,Jn,1,nt.screenX,nt.screenY,nt.clientX,nt.clientY,!1,!1,!1,!1,0,null),Ie.target.dispatchEvent(Ye)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&rt&&!H&&Ke.restart(!0),Pe&&we(),m&&rt&&m(G),S&&S(G,De)}},Q=function(Xe){return Xe.touches&&Xe.touches.length>1&&(G.isGesturing=!0)&&le(Xe,G.isDragging)},re=function(){return(G.isGesturing=!1)||N(G)},ce=function(Xe){if(!me(Xe)){var rt=R(),De=E();Te((rt-W)*ue,(De-se)*ue,1),W=rt,se=De,f&&Ke.restart(!0)}},be=function(Xe){if(!me(Xe)){Xe=uo(Xe,u),Me&&(F=!0);var rt=(Xe.deltaMode===1?l:Xe.deltaMode===2?Jn.innerHeight:1)*g;Te(Xe.deltaX*rt,Xe.deltaY*rt,0),f&&!H&&Ke.restart(!0)}},Ce=function(Xe){if(!me(Xe)){var rt=Xe.clientX,De=Xe.clientY,nt=rt-G.x,Ye=De-G.y;G.x=rt,G.y=De,ke=!0,f&&Ke.restart(!0),(nt||Ye)&&Ve(nt,Ye)}},et=function(Xe){G.event=Xe,Z(G)},vt=function(Xe){G.event=Xe,J(G)},Ft=function(Xe){return me(Xe)||uo(Xe,u)&&ie(G)};Ke=G._dc=cn.delayedCall(d||.25,Se).pause(),G.deltaX=G.deltaY=0,G._vx=Gc(0,50,!0),G._vy=Gc(0,50,!0),G.scrollX=R,G.scrollY=E,G.isDragging=G.isGesturing=G.isPressed=!1,Sp(this),G.enable=function(Ie){return G.isEnabled||(En(Y?de:a,"scroll",Vc),o.indexOf("scroll")>=0&&En(Y?de:a,"scroll",ce,Ne,ge),o.indexOf("wheel")>=0&&En(a,"wheel",be,Ne,ge),(o.indexOf("touch")>=0&&vp||o.indexOf("pointer")>=0)&&(En(a,yi[0],$e,Ne,ge),En(de,yi[2],B),En(de,yi[3],B),pe&&En(a,"click",fe,!0,!0),ie&&En(a,"click",Ft),le&&En(de,"gesturestart",Q),N&&En(de,"gestureend",re),Z&&En(a,Vr+"enter",et),J&&En(a,Vr+"leave",vt),$&&En(a,Vr+"move",Ce)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=ke=Pe=!1,G._vx.reset(),G._vy.reset(),W=R(),se=E(),Ie&&Ie.type&&$e(Ie),Fe&&Fe(G)),G},G.disable=function(){G.isEnabled&&(Us.filter(function(Ie){return Ie!==G&&Io(Ie.target)}).length||yn(Y?de:a,"scroll",Vc),G.isPressed&&(G._vx.reset(),G._vy.reset(),yn(H?a:de,yi[1],ze,!0)),yn(Y?de:a,"scroll",ce,ge),yn(a,"wheel",be,ge),yn(a,yi[0],$e,ge),yn(de,yi[2],B),yn(de,yi[3],B),yn(a,"click",fe,!0),yn(a,"click",Ft),yn(de,"gesturestart",Q),yn(de,"gestureend",re),yn(a,Vr+"enter",et),yn(a,Vr+"leave",vt),yn(a,Vr+"move",Ce),G.isEnabled=G.isPressed=G.isDragging=!1,Je&&Je(G))},G.kill=G.revert=function(){G.disable();var Ie=Us.indexOf(G);Ie>=0&&Us.splice(Ie,1),Zi===G&&(Zi=0)},Us.push(G),H&&Io(a)&&(Zi=G),G.enable(v)},hg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();$t.version="3.15.0";$t.create=function(r){return new $t(r)};$t.register=Tp;$t.getAll=function(){return Us.slice()};$t.getById=function(r){return Us.filter(function(e){return e.vars.id===r})[0]};Mp()&&cn.registerPlugin($t);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var We,Ps,dt,Ct,Zn,wt,nh,vl,jo,Uo,yo,ha,mn,Al,Wc,bn,Wh,Xh,Ds,wp,kl,bp,wn,Xc,Ap,Cp,mr,Yc,ih,Vs,rh,No,qc,Hl,fa=1,_n=Date.now,Vl=_n(),_i=0,Eo=0,Yh=function(e,t,n){var i=qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},qh=function(e,t){return t&&(!qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},pg=function r(){return Eo&&requestAnimationFrame(r)},$h=function(){return Al=1},Zh=function(){return Al=0},bi=function(e){return e},To=function(e){return Math.round(e*1e5)/1e5||0},Rp=function(){return typeof window<"u"},Pp=function(){return We||Rp()&&(We=window.gsap)&&We.registerPlugin&&We},os=function(e){return!!~nh.indexOf(e)},Dp=function(e){return(e==="Height"?rh:dt["inner"+e])||Zn["client"+e]||wt["client"+e]},Lp=function(e){return wr(e,"getBoundingClientRect")||(os(e)?function(){return tl.width=dt.innerWidth,tl.height=rh,tl}:function(){return qi(e)})},mg=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=wr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Dp(s):e["client"+s])||0}},_g=function(e,t){return!t||~Li.indexOf(e)?Lp(e):function(){return tl}},Di=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=wr(e,n))?o()-Lp(e)()[s]:os(e)?(Zn[n]||wt[n])-Dp(i):e[n]-e["offset"+i])},da=function(e,t){for(var n=0;n<Ds.length;n+=3)(!t||~t.indexOf(Ds[n+1]))&&e(Ds[n],Ds[n+1],Ds[n+2])},qn=function(e){return typeof e=="string"},vn=function(e){return typeof e=="function"},wo=function(e){return typeof e=="number"},Gr=function(e){return typeof e=="object"},ho=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ds=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ps=Math.abs,Ip="left",Up="top",sh="right",oh="bottom",is="width",rs="height",Oo="Right",Fo="Left",Bo="Top",zo="Bottom",Kt="padding",hi="margin",Js="Width",ah="Height",Qt="px",fi=function(e){return dt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},gg=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Kh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qi=function(e,t){var n=t&&fi(e)[Wc]!=="matrix(1, 0, 0, 1, 0, 0)"&&We.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},xl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Np=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},vg=function(e){return function(t){return We.utils.snap(Np(e),t)}},lh=function(e){var t=We.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},xg=function(e){return function(t,n){return lh(Np(e))(t,n.direction)}},pa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},an=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},on=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ma=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},jh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_a={toggleActions:"play",anticipatePin:0},Sl={top:0,left:0,center:.5,bottom:1,right:1},ja=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Sl?Sl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ga=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,p=s.fontWeight,g=Ct.createElement("div"),v=os(n)||wr(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,m=v?wt:n.tagName==="IFRAME"?n.contentDocument.body:n,b=e.indexOf("start")!==-1,w=b?c:u,S="border-color:"+w+";font-size:"+f+";color:"+w+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((_||l)&&v?"fixed;":"absolute;"),(_||l||!v)&&(S+=(i===en?sh:oh)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Ja(g,0,i,b),g},Ja=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Js]=1,s["border"+a+Js]=0,s[n.p]=t+"px",We.set(e,s)},ct=[],$c={},Jo,Jh=function(){return _n()-_i>34&&(Jo||(Jo=requestAnimationFrame(Qi)))},ms=function(){(!wn||!wn.isPressed||wn.startX>wt.clientWidth)&&(pt.cache++,wn?Jo||(Jo=requestAnimationFrame(Qi)):Qi(),_i||ls("scrollStart"),_i=_n())},Gl=function(){Cp=dt.innerWidth,Ap=dt.innerHeight},bo=function(e){pt.cache++,(e===!0||!mn&&!bp&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!Xc||Cp!==dt.innerWidth||Math.abs(dt.innerHeight-Ap)>dt.innerHeight*.25))&&vl.restart(!0)},as={},Sg=[],Op=function r(){return on(ut,"scrollEnd",r)||Kr(!0)},ls=function(e){return as[e]&&as[e].map(function(t){return t()})||Sg},Yn=[],Fp=function(e){for(var t=0;t<Yn.length;t+=5)(!e||Yn[t+4]&&Yn[t+4].query===e)&&(Yn[t].style.cssText=Yn[t+1],Yn[t].getBBox&&Yn[t].setAttribute("transform",Yn[t+2]||""),Yn[t+3].uncache=1)},Bp=function(){return pt.forEach(function(e){return vn(e)&&++e.cacheID&&(e.rec=e())})},ch=function(e,t){var n;for(bn=0;bn<ct.length;bn++)n=ct[bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));No=!0,t&&Fp(t),t||ls("revert")},zp=function(e,t){pt.cache++,(t||!An)&&pt.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),qn(e)&&(dt.history.scrollRestoration=ih=e)},An,ss=0,Qh,Mg=function(){if(Qh!==ss){var e=Qh=ss;requestAnimationFrame(function(){return e===ss&&Kr(!0)})}},kp=function(){wt.appendChild(Vs),rh=!wn&&Vs.offsetHeight||dt.innerHeight,wt.removeChild(Vs)},ef=function(e){return jo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Kr=function(e,t){if(Zn=Ct.documentElement,wt=Ct.body,nh=[dt,Ct,Zn,wt],_i&&!e&&!No){an(ut,"scrollEnd",Op);return}kp(),An=ut.isRefreshing=!0,No||Bp();var n=ls("refreshInit");wp&&ut.sort(),t||ch(),pt.forEach(function(i){vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ct.slice(0).forEach(function(i){return i.refresh()}),No=!1,ct.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),qc=1,ef(!0),ct.forEach(function(i){var s=Di(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),ef(!1),qc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),pt.forEach(function(i){vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),zp(ih,1),vl.pause(),ss++,An=2,Qi(2),ct.forEach(function(i){return vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),An=ut.isRefreshing=!1,ls("refresh")},Zc=0,Qa=1,ko,Qi=function(e){if(e===2||!An&&!No){ut.isUpdating=!0,ko&&ko.update(0);var t=ct.length,n=_n(),i=n-Vl>=50,s=t&&ct[0].scroll();if(Qa=Zc>s?-1:1,An||(Zc=s),i&&(_i&&!Al&&n-_i>200&&(_i=0,ls("scrollEnd")),yo=Vl,Vl=n),Qa<0){for(bn=t;bn-- >0;)ct[bn]&&ct[bn].update(0,i);Qa=1}else for(bn=0;bn<t;bn++)ct[bn]&&ct[bn].update(0,i);ut.isUpdating=!1}Jo=0},Kc=[Ip,Up,oh,sh,hi+zo,hi+Oo,hi+Bo,hi+Fo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],el=Kc.concat([is,rs,"boxSizing","max"+Js,"max"+ah,"position",hi,Kt,Kt+Bo,Kt+Oo,Kt+zo,Kt+Fo]),yg=function(e,t,n){Gs(n);var i=e._gsap;if(i.spacerIsNative)Gs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Wl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Kc.length,o=t.style,a=e.style,l;s--;)l=Kc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[oh]=a[sh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[is]=xl(e,Pn)+Qt,o[rs]=xl(e,en)+Qt,o[Kt]=a[hi]=a[Up]=a[Ip]="0",Gs(i),a[is]=a["max"+Js]=n[is],a[rs]=a["max"+ah]=n[rs],a[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Eg=/([A-Z])/g,Gs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||We.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Eg,"-$1").toLowerCase())}},va=function(e){for(var t=el.length,n=e.style,i=[],s=0;s<t;s++)i.push(el[s],n[el[s]]);return i.t=e,i},Tg=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},tl={left:0,top:0},tf=function(e,t,n,i,s,o,a,l,c,u,f,d,p,g){vn(e)&&(e=e(l)),qn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?ja("0"+e.substr(3),n):0));var v=p?p.time():0,_,m,b;if(p&&p.seek(0),isNaN(e)||(e=+e),wo(e))p&&(e=We.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),a&&Ja(a,n,i,!0);else{vn(t)&&(t=t(l));var w=(e||"0").split(" "),S,L,D,A;b=Nn(t,l)||wt,S=qi(b)||{},(!S||!S.left&&!S.top)&&fi(b).display==="none"&&(A=b.style.display,b.style.display="block",S=qi(b),A?b.style.display=A:b.style.removeProperty("display")),L=ja(w[0],S[i.d]),D=ja(w[1]||"0",n),e=S[i.p]-c[i.p]-u+L+s-D,a&&Ja(a,D,i,n-D<20||a._isStart&&D>20),n-=n-D}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var I=e+n,T=o._isStart;_="scroll"+i.d2,Ja(o,I,i,T&&I>20||!T&&(f?Math.max(wt[_],Zn[_]):o.parentNode[_])<=I+1),f&&(c=qi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Qt))}return p&&b&&(_=qi(b),p.seek(d),m=qi(b),p._caScrollDist=_[i.p]-m[i.p],e=e/p._caScrollDist*d),p&&p.seek(v),p?e:Math.round(e)},wg=/(webkit|moz|length|cssText|inset)/i,nf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=fi(e);for(o in a)!+o&&!wg.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;We.core.getCache(e).uncache=1,t.appendChild(e)}},Hp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},xa=function(e,t,n){var i={};i[t.p]="+="+n,We.set(e,i)},rf=function(e,t){var n=Pr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var d=o.tween,p=l.onComplete,g={};c=c||n();var v=Hp(n,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return v(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){pt.cache++,o.tween&&Qi()},l.onComplete=function(){o.tween=0,p&&p.call(d)},d=o.tween=We.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(e,"wheel",n.wheelHandler),ut.isTouch&&an(e,"touchmove",n.wheelHandler),s},ut=(function(){function r(t,n){Ps||r.register(We)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Yc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Eo){this.update=this.refresh=this.kill=bi;return}n=Kh(qn(n)||wo(n)||n.nodeType?{trigger:n}:n,_a);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,p=s.pin,g=s.pinSpacing,v=s.invalidateOnRefresh,_=s.anticipatePin,m=s.onScrubComplete,b=s.onSnapComplete,w=s.once,S=s.snap,L=s.pinReparent,D=s.pinSpacer,A=s.containerAnimation,I=s.fastScrollEnd,T=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pn:en,U=!f&&f!==0,z=Nn(n.scroller||dt),V=We.core.getCache(z),Z=os(z),J=("pinType"in n?n.pinType:wr(z,"pinType")||Z&&"fixed")==="fixed",$=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=U&&n.toggleActions.split(" "),H="markers"in n?n.markers:_a.markers,le=Z?0:parseFloat(fi(z)["border"+M.p2+Js])||0,N=this,Me=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Fe=mg(z,Z,M),Je=_g(z,Z),ie=0,ue=0,ge=0,pe=Pr(z,M),Re,He,Ze,Ke,Pe,ke,F,Ue,Oe,G,Be,je,Ne,R,E,W,se,ae,Y,de,ne,he,Ge,fe,me,Se,we,Te,Ve,ze,$e,B,Q,re,ce,be,Ce,et,vt;if(N._startClamp=N._endClamp=!1,N._dir=M,_*=45,N.scroller=z,N.scroll=A?A.time.bind(A):pe,Ke=pe(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(wp=1,n.refreshPriority===-9999&&(ko=N)),V.tweenScroll=V.tweenScroll||{top:rf(z,en),left:rf(z,Pn)},N.tweenTo=Re=V.tweenScroll[M.p],N.scrubDuration=function(De){Q=wo(De)&&De,Q?B?B.duration(De):B=We.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return m&&m(N)}}):(B&&B.progress(1).kill(),B=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(f),ze=0,l||(l=i.vars.id)),S&&((!Gr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in wt.style&&We.set(Z?[wt,Zn]:z,{scrollBehavior:"auto"}),pt.forEach(function(De){return vn(De)&&De.target===(Z?Ct.scrollingElement||Zn:z)&&(De.smooth=!1)}),Ze=vn(S.snapTo)?S.snapTo:S.snapTo==="labels"?vg(i):S.snapTo==="labelsDirectional"?xg(i):S.directional!==!1?function(De,nt){return lh(S.snapTo)(De,_n()-ue<500?0:nt.direction)}:We.utils.snap(S.snapTo),re=S.duration||{min:.1,max:2},re=Gr(re)?Uo(re.min,re.max):Uo(re,re),ce=We.delayedCall(S.delay||Q/2||.1,function(){var De=pe(),nt=_n()-ue<500,Ye=Re.tween;if((nt||Math.abs(N.getVelocity())<10)&&!Ye&&!Al&&ie!==De){var tt=(De-ke)/R,Bt=i&&!U?i.totalProgress():tt,ot=nt?0:(Bt-$e)/(_n()-yo)*1e3||0,Pt=We.utils.clamp(-tt,1-tt,ps(ot/2)*ot/.185),Yt=tt+(S.inertia===!1?0:Pt),bt,Tt,St=S,Mn=St.onStart,Mt=St.onInterrupt,Wt=St.onComplete;if(bt=Ze(Yt,N),wo(bt)||(bt=Yt),Tt=Math.max(0,Math.round(ke+bt*R)),De<=F&&De>=ke&&Tt!==De){if(Ye&&!Ye._initted&&Ye.data<=ps(Tt-De))return;S.inertia===!1&&(Pt=bt-tt),Re(Tt,{duration:re(ps(Math.max(ps(Yt-Bt),ps(bt-Bt))*.185/ot/.05||0)),ease:S.ease||"power3",data:ps(Tt-De),onInterrupt:function(){return ce.restart(!0)&&Mt&&ds(N,Mt)},onComplete:function(){N.update(),ie=pe(),i&&!U&&(B?B.resetTo("totalProgress",bt,i._tTime/i._tDur):i.progress(bt)),ze=$e=i&&!U?i.totalProgress():N.progress,b&&b(N),Wt&&ds(N,Wt)}},De,Pt*R,Tt-De-Pt*R),Mn&&ds(N,Mn,Re.tween)}}else N.isActive&&ie!==De&&ce.restart(!0)}).pause()),l&&($c[l]=N),d=N.trigger=Nn(d||p!==!0&&p),vt=d&&d._gsap&&d._gsap.stRevert,vt&&(vt=vt(N)),p=p===!0?d:Nn(p),qn(a)&&(a={targets:d,className:a}),p&&(g===!1||g===hi||(g=!g&&p.parentNode&&p.parentNode.style&&fi(p.parentNode).display==="flex"?!1:Kt),N.pin=p,He=We.core.getCache(p),He.spacer?E=He.pinState:(D&&(D=Nn(D),D&&!D.nodeType&&(D=D.current||D.nativeElement),He.spacerIsNative=!!D,D&&(He.spacerState=va(D))),He.spacer=ae=D||Ct.createElement("div"),ae.classList.add("pin-spacer"),l&&ae.classList.add("pin-spacer-"+l),He.pinState=E=va(p)),n.force3D!==!1&&We.set(p,{force3D:!0}),N.spacer=ae=He.spacer,Ve=fi(p),fe=Ve[g+M.os2],de=We.getProperty(p),ne=We.quickSetter(p,M.a,Qt),Wl(p,ae,Ve),se=va(p)),H){je=Gr(H)?Kh(H,jh):jh,G=ga("scroller-start",l,z,M,je,0),Be=ga("scroller-end",l,z,M,je,0,G),Y=G["offset"+M.op.d2];var Ft=Nn(wr(z,"content")||z);Ue=this.markerStart=ga("start",l,Ft,M,je,Y,0,A),Oe=this.markerEnd=ga("end",l,Ft,M,je,Y,0,A),A&&(et=We.quickSetter([Ue,Oe],M.a,Qt)),!J&&!(Li.length&&wr(z,"fixedMarkers")===!0)&&(gg(Z?wt:z),We.set([G,Be],{force3D:!0}),Se=We.quickSetter(G,M.a,Qt),Te=We.quickSetter(Be,M.a,Qt))}if(A){var Ie=A.vars.onUpdate,Xe=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){N.update(0,0,1),Ie&&Ie.apply(A,Xe||[])})}if(N.previous=function(){return ct[ct.indexOf(N)-1]},N.next=function(){return ct[ct.indexOf(N)+1]},N.revert=function(De,nt){if(!nt)return N.kill(!0);var Ye=De!==!1||!N.enabled,tt=mn;Ye!==N.isReverted&&(Ye&&(be=Math.max(pe(),N.scroll.rec||0),ge=N.progress,Ce=i&&i.progress()),Ue&&[Ue,Oe,G,Be].forEach(function(Bt){return Bt.style.display=Ye?"none":"block"}),Ye&&(mn=N,N.update(Ye)),p&&(!L||!N.isActive)&&(Ye?yg(p,ae,E):Wl(p,ae,fi(p),me)),Ye||N.update(Ye),mn=tt,N.isReverted=Ye)},N.refresh=function(De,nt,Ye,tt){if(!((mn||!N.enabled)&&!nt)){if(p&&De&&_i){an(r,"scrollEnd",Op);return}!An&&Me&&Me(N),mn=N,Re.tween&&!Ye&&(Re.tween.kill(),Re.tween=0),B&&B.pause(),v&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ye){return ye.vars.immediateRender&&ye.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Bt=Fe(),ot=Je(),Pt=A?A.duration():Di(z,M),Yt=R<=.01||!R,bt=0,Tt=tt||0,St=Gr(Ye)?Ye.end:n.end,Mn=n.endTrigger||d,Mt=Gr(Ye)?Ye.start:n.start||(n.start===0||!d?0:p?"0 0":"0 100%"),Wt=N.pinnedContainer=n.pinnedContainer&&Nn(n.pinnedContainer,N),h=d&&Math.max(0,ct.indexOf(N))||0,x=h,y,C,P,O,k,K,q,ee,te,oe,_e,ve,Ae;for(H&&Gr(Ye)&&(ve=We.getProperty(G,M.p),Ae=We.getProperty(Be,M.p));x-- >0;)K=ct[x],K.end||K.refresh(0,1)||(mn=N),q=K.pin,q&&(q===d||q===p||q===Wt)&&!K.isReverted&&(oe||(oe=[]),oe.unshift(K),K.revert(!0,!0)),K!==ct[x]&&(h--,x--);for(vn(Mt)&&(Mt=Mt(N)),Mt=Yh(Mt,"start",N),ke=tf(Mt,d,Bt,M,pe(),Ue,G,N,ot,le,J,Pt,A,N._startClamp&&"_startClamp")||(p?-.001:0),vn(St)&&(St=St(N)),qn(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(qn(Mt)?Mt.split(" ")[0]:"")+St:(bt=ja(St.substr(2),Bt),St=qn(Mt)?Mt:(A?We.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,ke):ke)+bt,Mn=d)),St=Yh(St,"end",N),F=Math.max(ke,tf(St||(Mn?"100% 0":Pt),Mn,Bt,M,pe()+bt,Oe,Be,N,ot,le,J,Pt,A,N._endClamp&&"_endClamp"))||-.001,bt=0,x=h;x--;)K=ct[x]||{},q=K.pin,q&&K.start-K._pinPush<=ke&&!A&&K.end>0&&(y=K.end-(N._startClamp?Math.max(0,K.start):K.start),(q===d&&K.start-K._pinPush<ke||q===Wt)&&isNaN(Mt)&&(bt+=y*(1-K.progress)),q===p&&(Tt+=y));if(ke+=bt,F+=bt,N._startClamp&&(N._startClamp+=bt),N._endClamp&&!An&&(N._endClamp=F||-.001,F=Math.min(F,Di(z,M))),R=F-ke||(ke-=.01)&&.001,Yt&&(ge=We.utils.clamp(0,1,We.utils.normalize(ke,F,be))),N._pinPush=Tt,Ue&&bt&&(y={},y[M.a]="+="+bt,Wt&&(y[M.p]="-="+pe()),We.set([Ue,Oe],y)),p&&!(qc&&N.end>=Di(z,M)))y=fi(p),O=M===en,P=pe(),he=parseFloat(de(M.a))+Tt,!Pt&&F>1&&(_e=(Z?Ct.scrollingElement||Zn:z).style,_e={style:_e,value:_e["overflow"+M.a.toUpperCase()]},Z&&fi(wt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(_e.style["overflow"+M.a.toUpperCase()]="scroll")),Wl(p,ae,y),se=va(p),C=qi(p,!0),ee=J&&Pr(z,O?Pn:en)(),g?(me=[g+M.os2,R+Tt+Qt],me.t=ae,x=g===Kt?xl(p,M)+R+Tt:0,x&&(me.push(M.d,x+Qt),ae.style.flexBasis!=="auto"&&(ae.style.flexBasis=x+Qt)),Gs(me),Wt&&ct.forEach(function(ye){ye.pin===Wt&&ye.vars.pinSpacing!==!1&&(ye._subPinOffset=!0)}),J&&pe(be)):(x=xl(p,M),x&&ae.style.flexBasis!=="auto"&&(ae.style.flexBasis=x+Qt)),J&&(k={top:C.top+(O?P-ke:ee)+Qt,left:C.left+(O?ee:P-ke)+Qt,boxSizing:"border-box",position:"fixed"},k[is]=k["max"+Js]=Math.ceil(C.width)+Qt,k[rs]=k["max"+ah]=Math.ceil(C.height)+Qt,k[hi]=k[hi+Bo]=k[hi+Oo]=k[hi+zo]=k[hi+Fo]="0",k[Kt]=y[Kt],k[Kt+Bo]=y[Kt+Bo],k[Kt+Oo]=y[Kt+Oo],k[Kt+zo]=y[Kt+zo],k[Kt+Fo]=y[Kt+Fo],W=Tg(E,k,L),An&&pe(0)),i?(te=i._initted,kl(1),i.render(i.duration(),!0,!0),Ge=de(M.a)-he+R+Tt,we=Math.abs(R-Ge)>1,J&&we&&W.splice(W.length-2,2),i.render(0,!0,!0),te||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),kl(0)):Ge=R,_e&&(_e.value?_e.style["overflow"+M.a.toUpperCase()]=_e.value:_e.style.removeProperty("overflow-"+M.a));else if(d&&pe()&&!A)for(C=d.parentNode;C&&C!==wt;)C._pinOffset&&(ke-=C._pinOffset,F-=C._pinOffset),C=C.parentNode;oe&&oe.forEach(function(ye){return ye.revert(!1,!0)}),N.start=ke,N.end=F,Ke=Pe=An?be:pe(),!A&&!An&&(Ke<be&&pe(be),N.scroll.rec=0),N.revert(!1,!0),ue=_n(),ce&&(ie=-1,ce.restart(!0)),mn=0,i&&U&&(i._initted||Ce)&&i.progress()!==Ce&&i.progress(Ce||0,!0).render(i.time(),!0,!0),(Yt||ge!==N.progress||A||v||i&&!i._initted)&&(i&&!U&&(i._initted||ge||i.vars.immediateRender!==!1)&&i.totalProgress(A&&ke<-.001&&!ge?We.utils.normalize(ke,F,0):ge,!0),N.progress=Yt||(Ke-ke)/R===ge?0:ge),p&&g&&(ae._pinOffset=Math.round(N.progress*Ge)),B&&B.invalidate(),isNaN(ve)||(ve-=We.getProperty(G,M.p),Ae-=We.getProperty(Be,M.p),xa(G,M,ve),xa(Ue,M,ve-(tt||0)),xa(Be,M,Ae),xa(Oe,M,Ae-(tt||0))),Yt&&!An&&N.update(),u&&!An&&!Ne&&(Ne=!0,u(N),Ne=!1)}},N.getVelocity=function(){return(pe()-Pe)/(_n()-yo)*1e3||0},N.endAnimation=function(){ho(N.callbackAnimation),i&&(B?B.progress(1):i.paused()?U||ho(i,N.direction<0,1):ho(i,i.reversed()))},N.labelToScroll=function(De){return i&&i.labels&&(ke||N.refresh()||ke)+i.labels[De]/i.duration()*R||0},N.getTrailing=function(De){var nt=ct.indexOf(N),Ye=N.direction>0?ct.slice(0,nt).reverse():ct.slice(nt+1);return(qn(De)?Ye.filter(function(tt){return tt.vars.preventOverlaps===De}):Ye).filter(function(tt){return N.direction>0?tt.end<=ke:tt.start>=F})},N.update=function(De,nt,Ye){if(!(A&&!Ye&&!De)){var tt=An===!0?be:N.scroll(),Bt=De?0:(tt-ke)/R,ot=Bt<0?0:Bt>1?1:Bt||0,Pt=N.progress,Yt,bt,Tt,St,Mn,Mt,Wt,h;if(nt&&(Pe=Ke,Ke=A?pe():tt,S&&($e=ze,ze=i&&!U?i.totalProgress():ot)),_&&p&&!mn&&!fa&&_i&&(!ot&&ke<tt+(tt-Pe)/(_n()-yo)*_?ot=1e-4:ot===1&&F>tt+(tt-Pe)/(_n()-yo)*_&&(ot=.9999)),ot!==Pt&&N.enabled){if(Yt=N.isActive=!!ot&&ot<1,bt=!!Pt&&Pt<1,Mt=Yt!==bt,Mn=Mt||!!ot!=!!Pt,N.direction=ot>Pt?1:-1,N.progress=ot,Mn&&!mn&&(Tt=ot&&!Pt?0:ot===1?1:Pt===1?2:3,U&&(St=!Mt&&X[Tt+1]!=="none"&&X[Tt+1]||X[Tt],h=i&&(St==="complete"||St==="reset"||St in i))),T&&(Mt||h)&&(h||f||!i)&&(vn(T)?T(N):N.getTrailing(T).forEach(function(P){return P.endAnimation()})),U||(B&&!mn&&!fa?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",ot,i._tTime/i._tDur):(B.vars.totalProgress=ot,B.invalidate().restart())):i&&i.totalProgress(ot,!!(mn&&(ue||De)))),p){if(De&&g&&(ae.style[g+M.os2]=fe),!J)ne(To(he+Ge*ot));else if(Mn){if(Wt=!De&&ot>Pt&&F+1>tt&&tt+1>=Di(z,M),L)if(!De&&(Yt||Wt)){var x=qi(p,!0),y=tt-ke;nf(p,wt,x.top+(M===en?y:0)+Qt,x.left+(M===en?0:y)+Qt)}else nf(p,ae);Gs(Yt||Wt?W:se),we&&ot<1&&Yt||ne(he+(ot===1&&!Wt?Ge:0))}}S&&!Re.tween&&!mn&&!fa&&ce.restart(!0),a&&(Mt||w&&ot&&(ot<1||!Hl))&&jo(a.targets).forEach(function(P){return P.classList[Yt||w?"add":"remove"](a.className)}),o&&!U&&!De&&o(N),Mn&&!mn?(U&&(h&&(St==="complete"?i.pause().totalProgress(1):St==="reset"?i.restart(!0).pause():St==="restart"?i.restart(!0):i[St]()),o&&o(N)),(Mt||!Hl)&&(c&&Mt&&ds(N,c),$[Tt]&&ds(N,$[Tt]),w&&(ot===1?N.kill(!1,1):$[Tt]=0),Mt||(Tt=ot===1?1:3,$[Tt]&&ds(N,$[Tt]))),I&&!Yt&&Math.abs(N.getVelocity())>(wo(I)?I:2500)&&(ho(N.callbackAnimation),B?B.progress(1):ho(i,St==="reverse"?1:!ot,1))):U&&o&&!mn&&o(N)}if(Te){var C=A?tt/A.duration()*(A._caScrollDist||0):tt;Se(C+(G._isFlipped?1:0)),Te(C)}et&&et(-tt/A.duration()*(A._caScrollDist||0))}},N.enable=function(De,nt){N.enabled||(N.enabled=!0,an(z,"resize",bo),Z||an(z,"scroll",ms),Me&&an(r,"refreshInit",Me),De!==!1&&(N.progress=ge=0,Ke=Pe=ie=pe()),nt!==!1&&N.refresh())},N.getTween=function(De){return De&&Re?Re.tween:B},N.setPositions=function(De,nt,Ye,tt){if(A){var Bt=A.scrollTrigger,ot=A.duration(),Pt=Bt.end-Bt.start;De=Bt.start+Pt*De/ot,nt=Bt.start+Pt*nt/ot}N.refresh(!1,!1,{start:qh(De,Ye&&!!N._startClamp),end:qh(nt,Ye&&!!N._endClamp)},tt),N.update()},N.adjustPinSpacing=function(De){if(me&&De){var nt=me.indexOf(M.d)+1;me[nt]=parseFloat(me[nt])+De+Qt,me[1]=parseFloat(me[1])+De+Qt,Gs(me)}},N.disable=function(De,nt){if(De!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,nt||B&&B.pause(),be=0,He&&(He.uncache=1),Me&&on(r,"refreshInit",Me),ce&&(ce.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!Z)){for(var Ye=ct.length;Ye--;)if(ct[Ye].scroller===z&&ct[Ye]!==N)return;on(z,"resize",bo),Z||on(z,"scroll",ms)}},N.kill=function(De,nt){N.disable(De,nt),B&&!nt&&B.kill(),l&&delete $c[l];var Ye=ct.indexOf(N);Ye>=0&&ct.splice(Ye,1),Ye===bn&&Qa>0&&bn--,Ye=0,ct.forEach(function(tt){return tt.scroller===N.scroller&&(Ye=1)}),Ye||An||(N.scroll.rec=0),i&&(i.scrollTrigger=null,De&&i.revert({kill:!1}),nt||i.kill()),Ue&&[Ue,Oe,G,Be].forEach(function(tt){return tt.parentNode&&tt.parentNode.removeChild(tt)}),ko===N&&(ko=0),p&&(He&&(He.uncache=1),Ye=0,ct.forEach(function(tt){return tt.pin===p&&Ye++}),Ye||(He.spacer=0)),n.onKill&&n.onKill(N)},ct.push(N),N.enable(!1,!1),vt&&vt(N),i&&i.add&&!R){var rt=N.update;N.update=function(){N.update=rt,pt.cache++,ke||F||N.refresh()},We.delayedCall(.01,N.update),R=.01,ke=F=0}else N.refresh();p&&Mg()},r.register=function(n){return Ps||(We=n||Pp(),Rp()&&window.document&&r.enable(),Ps=Eo),Ps},r.defaults=function(n){if(n)for(var i in n)_a[i]=n[i];return _a},r.disable=function(n,i){Eo=0,ct.forEach(function(o){return o[i?"kill":"disable"](n)}),on(dt,"wheel",ms),on(Ct,"scroll",ms),clearInterval(ha),on(Ct,"touchcancel",bi),on(wt,"touchstart",bi),pa(on,Ct,"pointerdown,touchstart,mousedown",$h),pa(on,Ct,"pointerup,touchend,mouseup",Zh),vl.kill(),da(on);for(var s=0;s<pt.length;s+=3)ma(on,pt[s],pt[s+1]),ma(on,pt[s],pt[s+2])},r.enable=function(){if(dt=window,Ct=document,Zn=Ct.documentElement,wt=Ct.body,We){if(jo=We.utils.toArray,Uo=We.utils.clamp,Yc=We.core.context||bi,kl=We.core.suppressOverwrites||bi,ih=dt.history.scrollRestoration||"auto",Zc=dt.pageYOffset||0,We.core.globals("ScrollTrigger",r),wt){Eo=1,Vs=document.createElement("div"),Vs.style.height="100vh",Vs.style.position="absolute",kp(),pg(),$t.register(We),r.isTouch=$t.isTouch,mr=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Xc=$t.isTouch===1,an(dt,"wheel",ms),nh=[dt,Ct,Zn,wt],We.matchMedia?(r.matchMedia=function(u){var f=We.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},We.addEventListener("matchMediaInit",function(){Bp(),ch()}),We.addEventListener("matchMediaRevert",function(){return Fp()}),We.addEventListener("matchMedia",function(){Kr(0,1),ls("matchMedia")}),We.matchMedia().add("(orientation: portrait)",function(){return Gl(),Gl})):console.warn("Requires GSAP 3.11.0 or later"),Gl(),an(Ct,"scroll",ms);var n=wt.hasAttribute("style"),i=wt.style,s=i.borderTopStyle,o=We.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=qi(wt),en.m=Math.round(a.top+en.sc())||0,Pn.m=Math.round(a.left+Pn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(wt.setAttribute("style",""),wt.removeAttribute("style")),ha=setInterval(Jh,250),We.delayedCall(.5,function(){return fa=0}),an(Ct,"touchcancel",bi),an(wt,"touchstart",bi),pa(an,Ct,"pointerdown,touchstart,mousedown",$h),pa(an,Ct,"pointerup,touchend,mouseup",Zh),Wc=We.utils.checkPrefix("transform"),el.push(Wc),Ps=_n(),vl=We.delayedCall(.2,Kr).pause(),Ds=[Ct,"visibilitychange",function(){var u=dt.innerWidth,f=dt.innerHeight;Ct.hidden?(Wh=u,Xh=f):(Wh!==u||Xh!==f)&&bo()},Ct,"DOMContentLoaded",Kr,dt,"load",Kr,dt,"resize",bo],da(an),ct.forEach(function(u){return u.enable(0,1)}),l=0;l<pt.length;l+=3)ma(on,pt[l],pt[l+1]),ma(on,pt[l],pt[l+2])}else if(Ct){var c=function u(){r.enable(),Ct.removeEventListener("DOMContentLoaded",u)};Ct.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Hl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ha)||(ha=i)&&setInterval(Jh,i),"ignoreMobileResize"in n&&(Xc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(da(on)||da(an,n.autoRefreshEvents||"none"),bp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Nn(n),o=pt.indexOf(s),a=os(s);~o&&pt.splice(o,a?6:2),i&&(a?Li.unshift(dt,i,wt,i,Zn,i):Li.unshift(s,i))},r.clearMatchMedia=function(n){ct.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(qn(n)?Nn(n):n).getBoundingClientRect(),a=o[s?is:rs]*i||0;return s?o.right-a>0&&o.left+a<dt.innerWidth:o.bottom-a>0&&o.top+a<dt.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=Nn(n));var o=n.getBoundingClientRect(),a=o[s?is:rs],l=i==null?a/2:i in Sl?Sl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/dt.innerWidth:(o.top+l)/dt.innerHeight},r.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=as.killAll||[];as={},i.forEach(function(s){return s()})}},r})();ut.version="3.15.0";ut.saveStyles=function(r){return r?jo(r).forEach(function(e){if(e&&e.style){var t=Yn.indexOf(e);t>=0&&Yn.splice(t,5),Yn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),We.core.getCache(e),Yc())}}):Yn};ut.revert=function(r,e){return ch(!r,e)};ut.create=function(r,e){return new ut(r,e)};ut.refresh=function(r){return r?bo(!0):(Ps||ut.register())&&Kr(!0)};ut.update=function(r){return++pt.cache&&Qi(r===!0?2:0)};ut.clearScrollMemory=zp;ut.maxScroll=function(r,e){return Di(r,e?Pn:en)};ut.getScrollFunc=function(r,e){return Pr(Nn(r),e?Pn:en)};ut.getById=function(r){return $c[r]};ut.getAll=function(){return ct.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ut.isScrolling=function(){return!!_i};ut.snapDirectional=lh;ut.addEventListener=function(r,e){var t=as[r]||(as[r]=[]);~t.indexOf(e)||t.push(e)};ut.removeEventListener=function(r,e){var t=as[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ut.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],p=We.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||p.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&p.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return vn(s)&&(s=s(),an(ut,"refresh",function(){return s=e.batchMax()})),jo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ut.create(c))}),t};var sf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Xl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===Zn&&r(wt,t)},Sa={auto:1,scroll:1},bg=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||We.core.getCache(s),a=_n(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Sa[(l=fi(s)).overflowY]||Sa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!os(s)&&(Sa[(l=fi(s)).overflowY]||Sa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Vp=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&bg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&an(Ct,$t.eventTypes[0],af,!1,!0)},onDisable:function(){return on(Ct,$t.eventTypes[0],af,!0)}})},Ag=/(input|label|select|textarea)/i,of,af=function(e){var t=Ag.test(e.target.tagName);(t||of)&&(e._gsapAllow=!0,of=t)},Cg=function(e){Gr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Nn(e.target)||Zn,u=We.core.globals().ScrollSmoother,f=u&&u.get(),d=mr&&(e.content&&Nn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=Pr(c,en),g=Pr(c,Pn),v=1,_=($t.isTouch&&dt.visualViewport?dt.visualViewport.scale*dt.visualViewport.width:dt.outerWidth)/dt.innerWidth,m=0,b=vn(i)?function(){return i(a)}:function(){return i||2.8},w,S,L=Vp(c,e.type,!0,s),D=function(){return S=!1},A=bi,I=bi,T=function(){l=Di(c,en),I=Uo(mr?1:0,l),n&&(A=Uo(0,Di(c,Pn))),w=ss},M=function(){d._gsap.y=To(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},U=function(){if(S){requestAnimationFrame(D);var H=To(a.deltaY/2),le=I(p.v-H);if(d&&le!==p.v+p.offset){p.offset=le-p.v;var N=To((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",d._gsap.y=N+"px",p.cacheID=pt.cache,Qi()}return!0}p.offset&&M(),S=!0},z,V,Z,J,$=function(){T(),z.isActive()&&z.vars.scrollY>l&&(p()>l?z.progress(1)&&p(l):z.resetTo("scrollY",l))};return d&&We.set(d,{y:"+=0"}),e.ignoreCheck=function(X){return mr&&X.type==="touchmove"&&U()||v>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){S=!1;var X=v;v=To((dt.visualViewport&&dt.visualViewport.scale||1)/_),z.pause(),X!==v&&Xl(c,v>1.01?!0:n?!1:"x"),V=g(),Z=p(),T(),w=ss},e.onRelease=e.onGestureStart=function(X,H){if(p.offset&&M(),!H)J.restart(!0);else{pt.cache++;var le=b(),N,Me;n&&(N=g(),Me=N+le*.05*-X.velocityX/.227,le*=sf(g,N,Me,Di(c,Pn)),z.vars.scrollX=A(Me)),N=p(),Me=N+le*.05*-X.velocityY/.227,le*=sf(p,N,Me,Di(c,en)),z.vars.scrollY=I(Me),z.invalidate().duration(le).play(.01),(mr&&z.vars.scrollY>=l||N>=l-1)&&We.to({},{onUpdate:$,duration:le})}o&&o(X)},e.onWheel=function(){z._ts&&z.pause(),_n()-m>1e3&&(w=0,m=_n())},e.onChange=function(X,H,le,N,Me){if(ss!==w&&T(),H&&n&&g(A(N[2]===H?V+(X.startX-X.x):g()+H-N[1])),le){p.offset&&M();var Fe=Me[2]===le,Je=Fe?Z+X.startY-X.y:p()+le-Me[1],ie=I(Je);Fe&&Je!==ie&&(Z+=ie-Je),p(ie)}(le||H)&&Qi()},e.onEnable=function(){Xl(c,n?!1:"x"),ut.addEventListener("refresh",$),an(dt,"resize",$),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),L.enable()},e.onDisable=function(){Xl(c,!0),on(dt,"resize",$),ut.removeEventListener("refresh",$),L.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=mr,mr&&!p()&&p(1),mr&&We.ticker.add(bi),J=a._dc,z=We.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Hp(p,p(),function(){return z.pause()})},onUpdate:Qi,onComplete:J.vars.onComplete}),a};ut.sort=function(r){if(vn(r))return ct.sort(r);var e=dt.pageYOffset||0;return ut.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+dt.innerHeight}),ct.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ut.observe=function(r){return new $t(r)};ut.normalizeScroll=function(r){if(typeof r>"u")return wn;if(r===!0&&wn)return wn.enable();if(r===!1){wn&&wn.kill(),wn=r;return}var e=r instanceof $t?r:Cg(r);return wn&&wn.target===e.target&&wn.kill(),os(e.target)&&(wn=e),e};ut.core={_getVelocityProp:Gc,_inputObserver:Vp,_scrollers:pt,_proxies:Li,bridge:{ss:function(){_i||ls("scrollStart"),_i=_n()},ref:function(){return mn}}};Pp()&&We.registerPlugin(ut);const Rg=[{title:"TradeForge",tags:"concept • web • solidity • development • 3d",url:"https://kianpk.github.io/tradeforge/",hue:"linear-gradient(135deg, #1a2ffb, #6d8cff 40%, #0b1024)"},{title:"Zyrax Drive",tags:"web • design • development • 3d • animation",url:"https://kianpk.github.io/zyrax-drive/",hue:"linear-gradient(135deg, #101018, #2a1a5e 45%, #c1ff00)"},{title:"Playfield",tags:"web • design • development • 3d • physics",url:"https://kianpk.github.io/playfield/",hue:"linear-gradient(135deg, #0e2a22, #1db954 50%, #d9ffe8)"},{title:"Orbit Desk",tags:"web • design • development • 3d • r3f",url:"https://kianpk.github.io/orbit-desk/",hue:"linear-gradient(145deg, #1b1030, #8832f7 55%, #ffb4ef)"},{title:"VaultForge",tags:"solidity • protocol • development",url:"https://github.com/kianPk/vaultforge",hue:"linear-gradient(135deg, #141820, #3d4a66 40%, #9fd0ff)"},{title:"LoadForge",tags:"rust • systems • development",url:"https://github.com/kianPk/loadforge",hue:"linear-gradient(135deg, #2a1208, #ff8039 50%, #ffe0c8)"},{title:"GateProxy",tags:"go • networking • development",url:"https://github.com/kianPk/gateproxy",hue:"linear-gradient(135deg, #071820, #00b7c2 50%, #c8fbff)"},{title:"Honeypot Deck",tags:"web • security • vue • lab",url:"https://kianpk.github.io/honeypot-deck/",hue:"linear-gradient(135deg, #2a0810, #ff4c41 45%, #ffd0d0)"},{title:"Sentinel Grid",tags:"web • security • visualization",url:"https://kianpk.github.io/sentinel-grid/",hue:"linear-gradient(135deg, #0a1420, #1a2ffb 50%, #9db4ff)"},{title:"Lumen Commerce",tags:"web • design • development • commerce",url:"https://kianpk.github.io/lumen-commerce/",hue:"linear-gradient(135deg, #20180a, #ffd24a 50%, #fff4c8)"},{title:"Netprobe Lab",tags:"concept • web • security lab",url:"https://kianpk.github.io/netprobe-lab/",hue:"linear-gradient(135deg, #120820, #b65fff 50%, #f0d8ff)"},{title:"PulseHub",tags:"go • realtime • development",url:"https://github.com/kianPk/pulsehub",hue:"linear-gradient(135deg, #081410, #a2ffab 50%, #e8ffe9)"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uh="170",Pg=0,lf=1,Dg=2,Gp=1,Lg=2,Wi=3,Dr=0,Hn=1,Ri=2,br=0,Ws=1,cf=2,uf=3,hf=4,Ig=5,qr=100,Ug=101,Ng=102,Og=103,Fg=104,Bg=200,zg=201,kg=202,Hg=203,jc=204,Jc=205,Vg=206,Gg=207,Wg=208,Xg=209,Yg=210,qg=211,$g=212,Zg=213,Kg=214,Qc=0,eu=1,tu=2,Qs=3,nu=4,iu=5,ru=6,su=7,Wp=0,jg=1,Jg=2,er=0,Qg=1,e0=2,t0=3,n0=4,i0=5,r0=6,s0=7,Xp=300,eo=301,to=302,ou=303,au=304,Cl=306,Ml=1e3,Ki=1001,lu=1002,Dn=1003,o0=1004,Ma=1005,un=1006,Yl=1007,yr=1008,rr=1009,Yp=1010,qp=1011,Qo=1012,hh=1013,cs=1014,ni=1015,ji=1016,fh=1017,dh=1018,no=1020,$p=35902,Zp=1021,Kp=1022,ii=1023,jp=1024,Jp=1025,Xs=1026,io=1027,ph=1028,mh=1029,Qp=1030,_h=1031,gh=1033,nl=33776,il=33777,rl=33778,sl=33779,cu=35840,uu=35841,hu=35842,fu=35843,du=36196,pu=37492,mu=37496,_u=37808,gu=37809,vu=37810,xu=37811,Su=37812,Mu=37813,yu=37814,Eu=37815,Tu=37816,wu=37817,bu=37818,Au=37819,Cu=37820,Ru=37821,ol=36492,Pu=36494,Du=36495,em=36283,Lu=36284,Iu=36285,Uu=36286,a0=3200,l0=3201,c0=0,u0=1,Qn="",Cn="srgb",sr="srgb-linear",Rl="linear",Dt="srgb",_s=7680,ff=519,h0=512,f0=513,d0=514,tm=515,p0=516,m0=517,_0=518,g0=519,df=35044,ya=35048,pf="300 es",Ji=2e3,yl=2001;class so{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=Math.PI/180,Nu=180/Math.PI;function na(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function Rn(r,e,t){return Math.max(e,Math.min(t,r))}function v0(r,e){return(r%e+e)%e}function $l(r,e,t){return(1-t)*r+t*e}function fo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Un(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,i,s,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],g=n[8],v=i[0],_=i[3],m=i[6],b=i[1],w=i[4],S=i[7],L=i[2],D=i[5],A=i[8];return s[0]=o*v+a*b+l*L,s[3]=o*_+a*w+l*D,s[6]=o*m+a*S+l*A,s[1]=c*v+u*b+f*L,s[4]=c*_+u*w+f*D,s[7]=c*m+u*S+f*A,s[2]=d*v+p*b+g*L,s[5]=d*_+p*w+g*D,s[8]=d*m+p*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*f+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zl.makeScale(e,t)),this}rotate(e){return this.premultiply(Zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zl=new st;function nm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ea(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function x0(){const r=ea("canvas");return r.style.display="block",r}const mf={};function Ao(r){r in mf||(mf[r]=!0,console.warn(r))}function S0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function M0(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function y0(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?Rl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ys(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const _f=[.64,.33,.3,.6,.15,.06],gf=[.2126,.7152,.0722],vf=[.3127,.329],xf=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sf=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[sr]:{primaries:_f,whitePoint:vf,transfer:Rl,toXYZ:xf,fromXYZ:Sf,luminanceCoefficients:gf,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:_f,whitePoint:vf,transfer:Dt,toXYZ:xf,fromXYZ:Sf,luminanceCoefficients:gf,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}});let gs;class E0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=ea("canvas")),gs.width=e.width,gs.height=e.height;const n=gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T0=0;class im{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Kl(i[o].image)):s.push(Kl(i[o]))}else s=Kl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?E0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w0=0;class fn extends so{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Ki,i=Ki,s=un,o=yr,a=ii,l=rr,c=fn.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=na(),this.name="",this.source=new im(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ml:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case lu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ml:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case lu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Xp;fn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,i=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],_=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(p+1)/2,L=(m+1)/2,D=(u+d)/4,A=(f+v)/4,I=(g+_)/4;return w>S&&w>L?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=D/n,s=A/n):S>L?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=D/i,s=I/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=A/s,i=I/s),this.set(n,i,s,t),this}let b=Math.sqrt((_-g)*(_-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(_-g)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b0 extends so{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new im(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends b0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rm extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A0 extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let _=1-a;const m=l*d+c*p+u*g+f*v,b=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const L=Math.sqrt(w),D=Math.atan2(L,m*b);_=Math.sin(_*D)/L,a=Math.sin(a*D)/L}const S=a*b;if(l=l*_+d*S,c=c*_+p*S,u=u*_+g*S,f=f*_+v*S,_===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-a*p,e[t+2]=c*g+u*p+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jl=new j,Mf=new or;class ia{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(s,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Ta.subVectors(this.max,po),vs.subVectors(e.a,po),xs.subVectors(e.b,po),Ss.subVectors(e.c,po),lr.subVectors(xs,vs),cr.subVectors(Ss,xs),Nr.subVectors(vs,Ss);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Nr.z,Nr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Nr.z,0,-Nr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Nr.y,Nr.x,0];return!Jl(t,vs,xs,Ss,Ta)||(t=[1,0,0,0,1,0,0,0,1],!Jl(t,vs,xs,Ss,Ta))?!1:(wa.crossVectors(lr,cr),t=[wa.x,wa.y,wa.z],Jl(t,vs,xs,Ss,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new j,new j,new j,new j,new j,new j,new j,new j],vi=new j,Ea=new ia,vs=new j,xs=new j,Ss=new j,lr=new j,cr=new j,Nr=new j,po=new j,Ta=new j,wa=new j,Or=new j;function Jl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Or.fromArray(r,s);const a=i.x*Math.abs(Or.x)+i.y*Math.abs(Or.y)+i.z*Math.abs(Or.z),l=e.dot(Or),c=t.dot(Or),u=n.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const C0=new ia,mo=new j,Ql=new j;class vh{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):C0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const t=mo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(Ql)),this.expandByPoint(mo.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new j,ec=new j,ba=new j,ur=new j,tc=new j,Aa=new j,nc=new j;class R0{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ec.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),ur.copy(this.origin).sub(ec);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ba),a=ur.dot(this.direction),l=-ur.dot(ba),c=ur.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ec).addScaledVector(ba,d),p}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),i=zi.dot(zi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,i,s){tc.subVectors(t,e),Aa.subVectors(n,e),nc.crossVectors(tc,Aa);let o=this.direction.dot(nc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(Aa.crossVectors(ur,Aa));if(l<0)return null;const c=a*this.direction.dot(tc.cross(ur));if(c<0||l+c>o)return null;const u=-a*ur.dot(nc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,n,i,s,o,a,l,c,u,f,d,p,g,v,_){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,d,p,g,v,_)}set(e,t,n,i,s,o,a,l,c,u,f,d,p,g,v,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P0,e,D0)}lookAt(e,t,n){const i=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),hr.crossVectors(n,Wn),hr.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),hr.crossVectors(n,Wn)),hr.normalize(),Ca.crossVectors(Wn,hr),i[0]=hr.x,i[4]=Ca.x,i[8]=Wn.x,i[1]=hr.y,i[5]=Ca.y,i[9]=Wn.y,i[2]=hr.z,i[6]=Ca.z,i[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],g=n[2],v=n[6],_=n[10],m=n[14],b=n[3],w=n[7],S=n[11],L=n[15],D=i[0],A=i[4],I=i[8],T=i[12],M=i[1],U=i[5],z=i[9],V=i[13],Z=i[2],J=i[6],$=i[10],X=i[14],H=i[3],le=i[7],N=i[11],Me=i[15];return s[0]=o*D+a*M+l*Z+c*H,s[4]=o*A+a*U+l*J+c*le,s[8]=o*I+a*z+l*$+c*N,s[12]=o*T+a*V+l*X+c*Me,s[1]=u*D+f*M+d*Z+p*H,s[5]=u*A+f*U+d*J+p*le,s[9]=u*I+f*z+d*$+p*N,s[13]=u*T+f*V+d*X+p*Me,s[2]=g*D+v*M+_*Z+m*H,s[6]=g*A+v*U+_*J+m*le,s[10]=g*I+v*z+_*$+m*N,s[14]=g*T+v*V+_*X+m*Me,s[3]=b*D+w*M+S*Z+L*H,s[7]=b*A+w*U+S*J+L*le,s[11]=b*I+w*z+S*$+L*N,s[15]=b*T+w*V+S*X+L*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],_=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*p-n*l*p)+v*(+t*l*p-t*c*d+s*o*d-i*o*p+i*c*u-s*l*u)+_*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*u-n*c*u)+m*(-i*a*u-t*l*f+t*a*d+i*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],_=e[14],m=e[15],b=f*_*c-v*d*c+v*l*p-a*_*p-f*l*m+a*d*m,w=g*d*c-u*_*c-g*l*p+o*_*p+u*l*m-o*d*m,S=u*v*c-g*f*c+g*a*p-o*v*p-u*a*m+o*f*m,L=g*f*l-u*v*l-g*a*d+o*v*d+u*a*_-o*f*_,D=t*b+n*w+i*S+s*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=b*A,e[1]=(v*d*s-f*_*s-v*i*p+n*_*p+f*i*m-n*d*m)*A,e[2]=(a*_*s-v*l*s+v*i*c-n*_*c-a*i*m+n*l*m)*A,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*p-n*l*p)*A,e[4]=w*A,e[5]=(u*_*s-g*d*s+g*i*p-t*_*p-u*i*m+t*d*m)*A,e[6]=(g*l*s-o*_*s-g*i*c+t*_*c+o*i*m-t*l*m)*A,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*p+t*l*p)*A,e[8]=S*A,e[9]=(g*f*s-u*v*s-g*n*p+t*v*p+u*n*m-t*f*m)*A,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*m+t*a*m)*A,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*p-t*a*p)*A,e[12]=L*A,e[13]=(u*v*i-g*f*i+g*n*d-t*v*d-u*n*_+t*f*_)*A,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*_-t*a*_)*A,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,v=o*u,_=o*f,m=a*f,b=l*c,w=l*u,S=l*f,L=n.x,D=n.y,A=n.z;return i[0]=(1-(v+m))*L,i[1]=(p+S)*L,i[2]=(g-w)*L,i[3]=0,i[4]=(p-S)*D,i[5]=(1-(d+m))*D,i[6]=(_+b)*D,i[7]=0,i[8]=(g+w)*A,i[9]=(_-b)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ms.set(i[0],i[1],i[2]).length();const o=Ms.set(i[4],i[5],i[6]).length(),a=Ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],xi.copy(this);const c=1/s,u=1/o,f=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=f,xi.elements[9]*=f,xi.elements[10]*=f,t.setFromRotationMatrix(xi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ji){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===Ji)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===yl)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ji){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),d=(t+e)*c,p=(n+i)*u;let g,v;if(a===Ji)g=(o+s)*f,v=-2*f;else if(a===yl)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ms=new j,xi=new Jt,P0=new j(0,0,0),D0=new j(1,1,1),hr=new j,Ca=new j,Wn=new j,yf=new Jt,Ef=new or;class Ni{constructor(e=0,t=0,n=0,i=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L0=0;const Tf=new j,ys=new or,ki=new Jt,Ra=new j,_o=new j,I0=new j,U0=new or,wf=new j(1,0,0),bf=new j(0,1,0),Af=new j(0,0,1),Cf={type:"added"},N0={type:"removed"},Es={type:"childadded",child:null},ic={type:"childremoved",child:null};class si extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const e=new j,t=new Ni,n=new or,i=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new st}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(wf,e)}rotateY(e){return this.rotateOnAxis(bf,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,t){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wf,e)}translateY(e){return this.translateOnAxis(bf,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(_o,Ra,this.up):ki.lookAt(Ra,_o,this.up),this.quaternion.setFromRotationMatrix(ki),i&&(ki.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(ki),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cf),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N0),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cf),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}si.DEFAULT_UP=new j(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new j,Hi=new j,rc=new j,Vi=new j,Ts=new j,ws=new j,Rf=new j,sc=new j,oc=new j,ac=new j,lc=new kt,cc=new kt,uc=new kt;class Ti{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Si.subVectors(e,t),i.cross(Si);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Si.subVectors(i,t),Hi.subVectors(n,t),rc.subVectors(e,t);const o=Si.dot(Si),a=Si.dot(Hi),l=Si.dot(rc),c=Hi.dot(Hi),u=Hi.dot(rc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return lc.setScalar(0),cc.setScalar(0),uc.setScalar(0),lc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(lc,s.x),o.addScaledVector(cc,s.y),o.addScaledVector(uc,s.z),o}static isFrontFacing(e,t,n,i){return Si.subVectors(n,t),Hi.subVectors(e,t),Si.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),Si.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ts.subVectors(i,n),ws.subVectors(s,n),sc.subVectors(e,n);const l=Ts.dot(sc),c=ws.dot(sc);if(l<=0&&c<=0)return t.copy(n);oc.subVectors(e,i);const u=Ts.dot(oc),f=ws.dot(oc);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ts,o);ac.subVectors(e,s);const p=Ts.dot(ac),g=ws.dot(ac);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ws,a);const _=u*g-p*f;if(_<=0&&f-u>=0&&p-g>=0)return Rf.subVectors(s,i),a=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(Rf,a);const m=1/(_+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(Ts,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function hc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=v0(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=hc(o,s,e+1/3),this.g=hc(o,s,e),this.b=hc(o,s,e-1/3)}return yt.toWorkingColorSpace(this,i),this}setStyle(e,t=Cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const n=om[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return yt.fromWorkingColorSpace(pn.copy(this),e),Math.round(Rn(pn.r*255,0,255))*65536+Math.round(Rn(pn.g*255,0,255))*256+Math.round(Rn(pn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,s=pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Cn){yt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,i=pn.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+t,fr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fr),e.getHSL(Pa);const n=$l(fr.h,Pa.h,t),i=$l(fr.s,Pa.s,t),s=$l(fr.l,Pa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new mt;mt.NAMES=om;let O0=0;class Pl extends so{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=na(),this.name="",this.blending=Ws,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Jc,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==Dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jc&&(n.blendSrc=this.blendSrc),this.blendDst!==Jc&&(n.blendDst=this.blendDst),this.blendEquation!==qr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ff&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ho extends Pl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $i=F0();function F0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function B0(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Rn(r,-65504,65504),$i.floatView[0]=r;const e=$i.uint32View[0],t=e>>23&511;return $i.baseTable[t]+((e&8388607)>>$i.shiftTable[t])}function z0(r){const e=r>>10;return $i.uint32View[0]=$i.mantissaTable[$i.offsetTable[e]+(r&1023)]+$i.exponentTable[e],$i.floatView[0]}const Pf={toHalfFloat:B0,fromHalfFloat:z0},Zt=new j,Da=new Rt;class oi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=df,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),i=Un(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),i=Un(i,this.array),s=Un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==df&&(e.usage=this.usage),e}}class am extends oi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lm extends oi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ii extends oi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let k0=0;const ci=new Jt,fc=new si,bs=new j,Xn=new ia,go=new ia,sn=new j;class Oi extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?lm:am)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ii(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];go.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Xn.min,go.min),Xn.expandByPoint(sn),sn.addVectors(Xn.max,go.max),Xn.expandByPoint(sn)):(Xn.expandByPoint(go.min),Xn.expandByPoint(go.max))}Xn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),sn.add(bs)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new j,l[I]=new j;const c=new j,u=new j,f=new j,d=new Rt,p=new Rt,g=new Rt,v=new j,_=new j;function m(I,T,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[I].add(v),a[T].add(v),a[M].add(v),l[I].add(_),l[T].add(_),l[M].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,T=b.length;I<T;++I){const M=b[I],U=M.start,z=M.count;for(let V=U,Z=U+z;V<Z;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new j,S=new j,L=new j,D=new j;function A(I){L.fromBufferAttribute(i,I),D.copy(L);const T=a[I];w.copy(T),w.sub(L.multiplyScalar(L.dot(T))).normalize(),S.crossVectors(D,T);const U=S.dot(l[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,U)}for(let I=0,T=b.length;I<T;++I){const M=b[I],U=M.start,z=M.count;for(let V=U,Z=U+z;V<Z;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let m=0;m<u;m++)d[g++]=c[p++]}return new oi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Df=new Jt,Fr=new R0,La=new vh,Lf=new j,Ia=new j,Ua=new j,Na=new j,dc=new j,Oa=new j,If=new j,Fa=new j;class xn extends si{constructor(e=new Oi,t=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(dc.fromBufferAttribute(f,e),o?Oa.addScaledVector(dc,u):Oa.addScaledVector(dc.sub(t),u))}t.add(Oa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(La.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(La,Lf)===null||Fr.origin.distanceToSquared(Lf)>(e.far-e.near)**2))&&(Df.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Df),!(n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const _=d[g],m=o[_.materialIndex],b=Math.max(_.start,p.start),w=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let S=b,L=w;S<L;S+=3){const D=a.getX(S),A=a.getX(S+1),I=a.getX(S+2);i=Ba(this,m,e,n,c,u,f,D,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=g,m=v;_<m;_+=3){const b=a.getX(_),w=a.getX(_+1),S=a.getX(_+2);i=Ba(this,o,e,n,c,u,f,b,w,S),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const _=d[g],m=o[_.materialIndex],b=Math.max(_.start,p.start),w=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=b,L=w;S<L;S+=3){const D=S,A=S+1,I=S+2;i=Ba(this,m,e,n,c,u,f,D,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=g,m=v;_<m;_+=3){const b=_,w=_+1,S=_+2;i=Ba(this,o,e,n,c,u,f,b,w,S),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function H0(r,e,t,n,i,s,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Dr,a),l===null)return null;Fa.copy(a),Fa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:r}}function Ba(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ia),r.getVertexPosition(l,Ua),r.getVertexPosition(c,Na);const u=H0(r,e,t,n,Ia,Ua,Na,If);if(u){const f=new j;Ti.getBarycoord(If,Ia,Ua,Na,f),i&&(u.uv=Ti.getInterpolatedAttribute(i,a,l,c,f,new Rt)),s&&(u.uv1=Ti.getInterpolatedAttribute(s,a,l,c,f,new Rt)),o&&(u.normal=Ti.getInterpolatedAttribute(o,a,l,c,f,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new j,materialIndex:0};Ti.getNormal(Ia,Ua,Na,d.normal),u.face=d,u.barycoord=f}return u}class oo extends Oi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(f,2));function g(v,_,m,b,w,S,L,D,A,I,T){const M=S/A,U=L/I,z=S/2,V=L/2,Z=D/2,J=A+1,$=I+1;let X=0,H=0;const le=new j;for(let N=0;N<$;N++){const Me=N*U-V;for(let Fe=0;Fe<J;Fe++){const Je=Fe*M-z;le[v]=Je*b,le[_]=Me*w,le[m]=Z,c.push(le.x,le.y,le.z),le[v]=0,le[_]=0,le[m]=D>0?1:-1,u.push(le.x,le.y,le.z),f.push(Fe/A),f.push(1-N/I),X+=1}}for(let N=0;N<I;N++)for(let Me=0;Me<A;Me++){const Fe=d+Me+J*N,Je=d+Me+J*(N+1),ie=d+(Me+1)+J*(N+1),ue=d+(Me+1)+J*N;l.push(Fe,Je,ue),l.push(Je,ie,ue),H+=6}a.addGroup(p,H,T),p+=H,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tn(r){const e={};for(let t=0;t<r.length;t++){const n=ro(r[t]);for(const i in n)e[i]=n[i]}return e}function V0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function cm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const G0={clone:ro,merge:Tn};var W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Pl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=V0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class um extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new j,Uf=new Rt,Nf=new Rt;class Kn extends um{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nu*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,t){return this.getViewBounds(e,Uf,Nf),t.subVectors(Nf,Uf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ql*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Cs=1;class Y0 extends si{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kn(As,Cs,e,t);i.layers=this.layers,this.add(i);const s=new Kn(As,Cs,e,t);s.layers=this.layers,this.add(s);const o=new Kn(As,Cs,e,t);o.layers=this.layers,this.add(o);const a=new Kn(As,Cs,e,t);a.layers=this.layers,this.add(a);const l=new Kn(As,Cs,e,t);l.layers=this.layers,this.add(l);const c=new Kn(As,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hm extends fn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:eo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q0 extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new hm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new oo(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:br});s.uniforms.tEquirect.value=t;const o=new xn(i,s),a=t.minFilter;return t.minFilter===yr&&(t.minFilter=un),new Y0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const pc=new j,$0=new j,Z0=new st;class Wr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pc.subVectors(n,t).cross($0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Z0.getNormalMatrix(e),i=this.coplanarPoint(pc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new vh,za=new j;class fm{constructor(e=new Wr,t=new Wr,n=new Wr,i=new Wr,s=new Wr,o=new Wr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],p=i[8],g=i[9],v=i[10],_=i[11],m=i[12],b=i[13],w=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,_-p,S-m).normalize(),n[1].setComponents(l+s,d+c,_+p,S+m).normalize(),n[2].setComponents(l+o,d+u,_+g,S+b).normalize(),n[3].setComponents(l-o,d-u,_-g,S-b).normalize(),n[4].setComponents(l-a,d-f,_-v,S-w).normalize(),t===Ji)n[5].setComponents(l+a,d+f,_+v,S+w).normalize();else if(t===yl)n[5].setComponents(a,f,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(za.x=i.normal.x>0?e.max.x:e.min.x,za.y=i.normal.y>0?e.max.y:e.min.y,za.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function K0(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class ao extends Oi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=t/l,p=[],g=[],v=[],_=[];for(let m=0;m<u;m++){const b=m*d-o;for(let w=0;w<c;w++){const S=w*f-s;g.push(S,-b,0),v.push(0,0,1),_.push(w/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const w=b+c*m,S=b+c*(m+1),L=b+1+c*(m+1),D=b+1+c*m;p.push(w,S,D),p.push(S,L,D)}this.setIndex(p),this.setAttribute("position",new Ii(g,3)),this.setAttribute("normal",new Ii(v,3)),this.setAttribute("uv",new Ii(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iv=`#ifdef USE_AOMAP
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
#endif`,rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv=`#ifdef USE_BATCHING
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
#endif`,ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uv=`#ifdef USE_IRIDESCENCE
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
#endif`,hv=`#ifdef USE_BUMPMAP
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
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sv=`#define PI 3.141592653589793
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
} // validated`,Mv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yv=`vec3 transformedNormal = objectNormal;
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
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Av="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bv=`#ifdef USE_GRADIENTMAP
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
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vv=`uniform bool receiveShadow;
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
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
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
#endif`,Zv=`struct PhysicalMaterial {
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
}`,Kv=`
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
#endif`,jv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ox=`#if defined( USE_POINTS_UV )
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
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
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
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nx=`float getShadowMask() {
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
}`,Ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`#include <common>
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
}`,iS=`#if DEPTH_PACKING == 3200
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
}`,rS=`#define DISTANCE
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
}`,sS=`#define DISTANCE
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
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`uniform float scale;
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
}`,cS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,hS=`uniform vec3 diffuse;
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
}`,fS=`#define LAMBERT
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
}`,dS=`#define LAMBERT
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
}`,pS=`#define MATCAP
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
}`,mS=`#define MATCAP
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
}`,_S=`#define NORMAL
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
}`,gS=`#define NORMAL
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
}`,vS=`#define PHONG
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
}`,xS=`#define PHONG
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
}`,SS=`#define STANDARD
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
}`,MS=`#define STANDARD
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
}`,yS=`#define TOON
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
}`,ES=`#define TOON
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
}`,TS=`uniform float size;
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
}`,wS=`uniform vec3 diffuse;
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
}`,bS=`#include <common>
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
}`,AS=`uniform vec3 color;
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
}`,CS=`uniform float rotation;
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
}`,RS=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:j0,alphahash_pars_fragment:J0,alphamap_fragment:Q0,alphamap_pars_fragment:ev,alphatest_fragment:tv,alphatest_pars_fragment:nv,aomap_fragment:iv,aomap_pars_fragment:rv,batching_pars_vertex:sv,batching_vertex:ov,begin_vertex:av,beginnormal_vertex:lv,bsdfs:cv,iridescence_fragment:uv,bumpmap_pars_fragment:hv,clipping_planes_fragment:fv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:pv,clipping_planes_vertex:mv,color_fragment:_v,color_pars_fragment:gv,color_pars_vertex:vv,color_vertex:xv,common:Sv,cube_uv_reflection_fragment:Mv,defaultnormal_vertex:yv,displacementmap_pars_vertex:Ev,displacementmap_vertex:Tv,emissivemap_fragment:wv,emissivemap_pars_fragment:bv,colorspace_fragment:Av,colorspace_pars_fragment:Cv,envmap_fragment:Rv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Dv,envmap_pars_vertex:Lv,envmap_physical_pars_fragment:Gv,envmap_vertex:Iv,fog_vertex:Uv,fog_pars_vertex:Nv,fog_fragment:Ov,fog_pars_fragment:Fv,gradientmap_pars_fragment:Bv,lightmap_pars_fragment:zv,lights_lambert_fragment:kv,lights_lambert_pars_fragment:Hv,lights_pars_begin:Vv,lights_toon_fragment:Wv,lights_toon_pars_fragment:Xv,lights_phong_fragment:Yv,lights_phong_pars_fragment:qv,lights_physical_fragment:$v,lights_physical_pars_fragment:Zv,lights_fragment_begin:Kv,lights_fragment_maps:jv,lights_fragment_end:Jv,logdepthbuf_fragment:Qv,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:rx,map_particle_fragment:sx,map_particle_pars_fragment:ox,metalnessmap_fragment:ax,metalnessmap_pars_fragment:lx,morphinstance_vertex:cx,morphcolor_vertex:ux,morphnormal_vertex:hx,morphtarget_pars_vertex:fx,morphtarget_vertex:dx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:_x,normal_pars_vertex:gx,normal_vertex:vx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:yx,iridescence_pars_fragment:Ex,opaque_fragment:Tx,packing:wx,premultiplied_alpha_fragment:bx,project_vertex:Ax,dithering_fragment:Cx,dithering_pars_fragment:Rx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Dx,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Ix,shadowmap_vertex:Ux,shadowmask_pars_fragment:Nx,skinbase_vertex:Ox,skinning_pars_vertex:Fx,skinning_vertex:Bx,skinnormal_vertex:zx,specularmap_fragment:kx,specularmap_pars_fragment:Hx,tonemapping_fragment:Vx,tonemapping_pars_fragment:Gx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:Yx,uv_pars_vertex:qx,uv_vertex:$x,worldpos_vertex:Zx,background_vert:Kx,background_frag:jx,backgroundCube_vert:Jx,backgroundCube_frag:Qx,cube_vert:eS,cube_frag:tS,depth_vert:nS,depth_frag:iS,distanceRGBA_vert:rS,distanceRGBA_frag:sS,equirect_vert:oS,equirect_frag:aS,linedashed_vert:lS,linedashed_frag:cS,meshbasic_vert:uS,meshbasic_frag:hS,meshlambert_vert:fS,meshlambert_frag:dS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:_S,meshnormal_frag:gS,meshphong_vert:vS,meshphong_frag:xS,meshphysical_vert:SS,meshphysical_frag:MS,meshtoon_vert:yS,meshtoon_frag:ES,points_vert:TS,points_frag:wS,shadow_vert:bS,shadow_frag:AS,sprite_vert:CS,sprite_frag:RS},Le={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ai={basic:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Tn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Tn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Tn([Le.points,Le.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Tn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Tn([Le.common,Le.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Tn([Le.sprite,Le.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Tn([Le.common,Le.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Tn([Le.lights,Le.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Ai.physical={uniforms:Tn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const ka={r:0,b:0,g:0},zr=new Ni,PS=new Jt;function DS(r,e,t,n,i,s,o){const a=new mt(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function v(b){let w=!1;const S=g(b);S===null?m(a,l):S&&S.isColor&&(m(S,1),w=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(b,w){const S=g(w);S&&(S.isCubeTexture||S.mapping===Cl)?(u===void 0&&(u=new xn(new oo(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:ro(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),zr.copy(w.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PS.makeRotationFromEuler(zr)),u.material.toneMapped=yt.getTransfer(S.colorSpace)!==Dt,(f!==S||d!==S.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xn(new ao(2,2),new gi({name:"BackgroundMaterial",uniforms:ro(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=yt.getTransfer(S.colorSpace)!==Dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,w){b.getRGB(ka,cm(r)),n.buffers.color.setClear(ka.r,ka.g,ka.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),l=w,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:v,addToRenderList:_}}function LS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,U,z,V,Z){let J=!1;const $=f(V,z,U);s!==$&&(s=$,c(s.object)),J=p(M,V,z,Z),J&&g(M,V,z,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(M,U,z,V),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function f(M,U,z){const V=z.wireframe===!0;let Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let J=Z[U.id];J===void 0&&(J={},Z[U.id]=J);let $=J[V];return $===void 0&&($=d(l()),J[V]=$),$}function d(M){const U=[],z=[],V=[];for(let Z=0;Z<t;Z++)U[Z]=0,z[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,U,z,V){const Z=s.attributes,J=U.attributes;let $=0;const X=z.getAttributes();for(const H in X)if(X[H].location>=0){const N=Z[H];let Me=J[H];if(Me===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),N===void 0||N.attribute!==Me||Me&&N.data!==Me.data)return!0;$++}return s.attributesNum!==$||s.index!==V}function g(M,U,z,V){const Z={},J=U.attributes;let $=0;const X=z.getAttributes();for(const H in X)if(X[H].location>=0){let N=J[H];N===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(N=M.instanceColor));const Me={};Me.attribute=N,N&&N.data&&(Me.data=N.data),Z[H]=Me,$++}s.attributes=Z,s.attributesNum=$,s.index=V}function v(){const M=s.newAttributes;for(let U=0,z=M.length;U<z;U++)M[U]=0}function _(M){m(M,0)}function m(M,U){const z=s.newAttributes,V=s.enabledAttributes,Z=s.attributeDivisors;z[M]=1,V[M]===0&&(r.enableVertexAttribArray(M),V[M]=1),Z[M]!==U&&(r.vertexAttribDivisor(M,U),Z[M]=U)}function b(){const M=s.newAttributes,U=s.enabledAttributes;for(let z=0,V=U.length;z<V;z++)U[z]!==M[z]&&(r.disableVertexAttribArray(z),U[z]=0)}function w(M,U,z,V,Z,J,$){$===!0?r.vertexAttribIPointer(M,U,z,Z,J):r.vertexAttribPointer(M,U,z,V,Z,J)}function S(M,U,z,V){v();const Z=V.attributes,J=z.getAttributes(),$=U.defaultAttributeValues;for(const X in J){const H=J[X];if(H.location>=0){let le=Z[X];if(le===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const N=le.normalized,Me=le.itemSize,Fe=e.get(le);if(Fe===void 0)continue;const Je=Fe.buffer,ie=Fe.type,ue=Fe.bytesPerElement,ge=ie===r.INT||ie===r.UNSIGNED_INT||le.gpuType===hh;if(le.isInterleavedBufferAttribute){const pe=le.data,Re=pe.stride,He=le.offset;if(pe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<H.locationSize;Ze++)m(H.location+Ze,pe.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ze=0;Ze<H.locationSize;Ze++)_(H.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let Ze=0;Ze<H.locationSize;Ze++)w(H.location+Ze,Me/H.locationSize,ie,N,Re*ue,(He+Me/H.locationSize*Ze)*ue,ge)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe,le.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<H.locationSize;pe++)_(H.location+pe);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let pe=0;pe<H.locationSize;pe++)w(H.location+pe,Me/H.locationSize,ie,N,Me*ue,Me/H.locationSize*pe*ue,ge)}}else if($!==void 0){const N=$[X];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(H.location,N);break;case 3:r.vertexAttrib3fv(H.location,N);break;case 4:r.vertexAttrib4fv(H.location,N);break;default:r.vertexAttrib1fv(H.location,N)}}}}b()}function L(){I();for(const M in n){const U=n[M];for(const z in U){const V=U[z];for(const Z in V)u(V[Z].object),delete V[Z];delete U[z]}delete n[M]}}function D(M){if(n[M.id]===void 0)return;const U=n[M.id];for(const z in U){const V=U[z];for(const Z in V)u(V[Z].object),delete V[Z];delete U[z]}delete n[M.id]}function A(M){for(const U in n){const z=n[U];if(z[M.id]===void 0)continue;const V=z[M.id];for(const Z in V)u(V[Z].object),delete V[Z];delete z[M.id]}}function I(){T(),o=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:_,disableUnusedAttributes:b}}function IS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,n,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function US(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==ii&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rr&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ni&&!I)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:L,maxSamples:D}}function NS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Wr,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,_=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!_)s?u(null):c();else{const b=s?0:n,w=b*4;let S=m.clippingState||null;l.value=S,S=u(g,d,w,p);for(let L=0;L!==w;++L)S[L]=t[L];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let _=null;if(v!==0){if(_=l.value,g!==!0||_===null){const m=p+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<m)&&(_=new Float32Array(m));for(let w=0,S=p;w!==v;++w,S+=4)o.copy(f[w]).applyMatrix4(b,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function OS(r){let e=new WeakMap;function t(o,a){return a===ou?o.mapping=eo:a===au&&(o.mapping=to),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ou||a===au)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new q0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class FS extends um{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ns=4,Of=[.125,.215,.35,.446,.526,.582],$r=20,mc=new FS,Ff=new mt;let _c=null,gc=0,vc=0,xc=!1;const Xr=(1+Math.sqrt(5))/2,Rs=1/Xr,Bf=[new j(-Xr,Rs,0),new j(Xr,Rs,0),new j(-Rs,0,Xr),new j(Rs,0,Xr),new j(0,Xr,-Rs),new j(0,Xr,Rs),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class zf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_c=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,gc,vc),this._renderer.xr.enabled=xc,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:ji,format:ii,colorSpace:sr,depthBuffer:!1},i=kf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BS(s)),this._blurMaterial=zS(s,e,t)}return i}_compileMaterial(e){const t=new xn(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,n,i){const a=new Kn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ff),u.toneMapping=er,u.autoClear=!1;const p=new Ho({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),g=new xn(new oo,p);let v=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,v=!0):(p.color.copy(Ff),v=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const w=this._cubeSize;Ha(i,b*w,m>2?w:0,w,w),u.setRenderTarget(i),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===eo||e.mapping===to;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bf[(i-s-1)%Bf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new xn(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$r-1),v=s/g,_=isFinite(s)?1+Math.floor(u*v):$r;_>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${$r}`);const m=[];let b=0;for(let A=0;A<$r;++A){const I=A/v,T=Math.exp(-I*I/2);m.push(T),A===0?b+=T:A<_&&(b+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/b;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const S=this._sizeLods[i],L=3*S*(i>w-Ns?i-w+Ns:0),D=4*(this._cubeSize-S);Ha(t,L,D,3*S,2*S),l.setRenderTarget(t),l.render(f,mc)}}function BS(r){const e=[],t=[],n=[];let i=r;const s=r-Ns+1+Of.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ns?l=Of[o-r+Ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,_=2,m=1,b=new Float32Array(v*g*p),w=new Float32Array(_*g*p),S=new Float32Array(m*g*p);for(let D=0;D<p;D++){const A=D%3*2/3-1,I=D>2?0:-1,T=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];b.set(T,v*g*D),w.set(d,_*g*D);const M=[D,D,D,D,D,D];S.set(M,m*g*D)}const L=new Oi;L.setAttribute("position",new oi(b,v)),L.setAttribute("uv",new oi(w,_)),L.setAttribute("faceIndex",new oi(S,m)),e.push(L),i>Ns&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kf(r,e,t){const n=new us(r,e,t);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function zS(r,e,t){const n=new Float32Array($r),i=new j(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xh(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function Hf(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function Vf(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function xh(){return`

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
	`}function kS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ou||l===au,u=l===eo||l===to;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new zf(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new zf(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function HS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ao("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function VS(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let _=0,m=v.length;_<m;_++)e.remove(v[_])}d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let _=0,m=v.length;_<m;_++)e.update(v[_],r.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let w=0,S=b.length;w<S;w+=3){const L=b[w+0],D=b[w+1],A=b[w+2];d.push(L,D,D,A,A,L)}}else if(g!==void 0){const b=g.array;v=g.version;for(let w=0,S=b.length/3-1;w<S;w+=3){const L=w+0,D=w+1,A=w+2;d.push(L,D,D,A,A,L)}}else return;const _=new(nm(d)?lm:am)(d,1);_.version=v;const m=s.get(f);m&&e.remove(m),s.set(f,_)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function GS(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];t.update(_,n,1)}function f(d,p,g,v){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],v[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,v,0,g);let m=0;for(let b=0;b<g;b++)m+=p[b]*v[b];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function WS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function XS(r,e,t){const n=new WeakMap,i=new kt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let L=a.attributes.position.count*S,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*D*4*f),I=new rm(A,L,D,f);I.type=ni,I.needsUpdate=!0;const T=S*4;for(let U=0;U<f;U++){const z=m[U],V=b[U],Z=w[U],J=L*D*4*U;for(let $=0;$<z.count;$++){const X=$*T;g===!0&&(i.fromBufferAttribute(z,$),A[J+X+0]=i.x,A[J+X+1]=i.y,A[J+X+2]=i.z,A[J+X+3]=0),v===!0&&(i.fromBufferAttribute(V,$),A[J+X+4]=i.x,A[J+X+5]=i.y,A[J+X+6]=i.z,A[J+X+7]=0),_===!0&&(i.fromBufferAttribute(Z,$),A[J+X+8]=i.x,A[J+X+9]=i.y,A[J+X+10]=i.z,A[J+X+11]=Z.itemSize===4?i.w:1)}}d={count:f,texture:I,size:new Rt(L,D)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function YS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class pm extends fn{constructor(e,t,n,i,s,o,a,l,c,u=Xs){if(u!==Xs&&u!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xs&&(n=cs),n===void 0&&u===io&&(n=no),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const mm=new fn,Gf=new pm(1,1),_m=new rm,gm=new A0,vm=new hm,Wf=[],Xf=[],Yf=new Float32Array(16),qf=new Float32Array(9),$f=new Float32Array(4);function lo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wf[i];if(s===void 0&&(s=new Float32Array(i),Wf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Dl(r,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $S(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function ZS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function KS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function jS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;$f.set(n),r.uniformMatrix2fv(this.addr,!1,$f),nn(t,n)}}function JS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;qf.set(n),r.uniformMatrix3fv(this.addr,!1,qf),nn(t,n)}}function QS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Yf.set(n),r.uniformMatrix4fv(this.addr,!1,Yf),nn(t,n)}}function eM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function iM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function rM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function oM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function aM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function lM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gf.compareFunction=tm,s=Gf):s=mm,t.setTexture2D(e||s,i)}function cM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gm,i)}function uM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vm,i)}function hM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_m,i)}function fM(r){switch(r){case 5126:return qS;case 35664:return $S;case 35665:return ZS;case 35666:return KS;case 35674:return jS;case 35675:return JS;case 35676:return QS;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return oM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return hM}}function dM(r,e){r.uniform1fv(this.addr,e)}function pM(r,e){const t=lo(e,this.size,2);r.uniform2fv(this.addr,t)}function mM(r,e){const t=lo(e,this.size,3);r.uniform3fv(this.addr,t)}function _M(r,e){const t=lo(e,this.size,4);r.uniform4fv(this.addr,t)}function gM(r,e){const t=lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function vM(r,e){const t=lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function xM(r,e){const t=lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function SM(r,e){r.uniform1iv(this.addr,e)}function MM(r,e){r.uniform2iv(this.addr,e)}function yM(r,e){r.uniform3iv(this.addr,e)}function EM(r,e){r.uniform4iv(this.addr,e)}function TM(r,e){r.uniform1uiv(this.addr,e)}function wM(r,e){r.uniform2uiv(this.addr,e)}function bM(r,e){r.uniform3uiv(this.addr,e)}function AM(r,e){r.uniform4uiv(this.addr,e)}function CM(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||mm,s[o])}function RM(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||gm,s[o])}function PM(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||vm,s[o])}function DM(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_m,s[o])}function LM(r){switch(r){case 5126:return dM;case 35664:return pM;case 35665:return mM;case 35666:return _M;case 35674:return gM;case 35675:return vM;case 35676:return xM;case 5124:case 35670:return SM;case 35667:case 35671:return MM;case 35668:case 35672:return yM;case 35669:case 35673:return EM;case 5125:return TM;case 36294:return wM;case 36295:return bM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return DM}}class IM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fM(t.type)}}class UM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LM(t.type)}}class NM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function Zf(r,e){r.seq.push(e),r.map[e.id]=e}function OM(r,e,t){const n=r.name,i=n.length;for(Sc.lastIndex=0;;){const s=Sc.exec(n),o=Sc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zf(t,c===void 0?new IM(a,r,e):new UM(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new NM(a),Zf(t,f)),t=f}}}class al{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);OM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Kf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const FM=37297;let BM=0;function zM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const jf=new st;function kM(r){yt._getMatrix(jf,yt.workingColorSpace,r);const e=`mat3( ${jf.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(r)){case Rl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Jf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+zM(r.getShaderSource(e),o)}else return i}function HM(r,e){const t=kM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function VM(r,e){let t;switch(e){case Qg:t="Linear";break;case e0:t="Reinhard";break;case t0:t="Cineon";break;case n0:t="ACESFilmic";break;case r0:t="AgX";break;case s0:t="Neutral";break;case i0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new j;function GM(){yt.getLuminanceCoefficients(Va);const r=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function XM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function YM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Co(r){return r!==""}function Qf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ed(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(r){return r.replace(qM,ZM)}const $M=new Map;function ZM(r,e){let t=at[e];if(t===void 0){const n=$M.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ou(t)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(r){return r.replace(KM,jM)}function jM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function JM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function QM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case Cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ey(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function ty(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wp:e="ENVMAP_BLENDING_MULTIPLY";break;case jg:e="ENVMAP_BLENDING_MIX";break;case Jg:e="ENVMAP_BLENDING_ADD";break}return e}function ny(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iy(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=JM(t),c=QM(t),u=ey(t),f=ty(t),d=ny(t),p=WM(t),g=XM(s),v=i.createProgram();let _,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Co).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`)):(_=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),m=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?at.tonemapping_pars_fragment:"",t.toneMapping!==er?VM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,HM("linearToOutputTexel",t.outputColorSpace),GM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=Ou(o),o=Qf(o,t),o=ed(o,t),a=Ou(a),a=Qf(a,t),a=ed(a,t),o=td(o),a=td(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=b+_+o,S=b+m+a,L=Kf(i,i.VERTEX_SHADER,w),D=Kf(i,i.FRAGMENT_SHADER,S);i.attachShader(v,L),i.attachShader(v,D),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(U){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(v).trim(),V=i.getShaderInfoLog(L).trim(),Z=i.getShaderInfoLog(D).trim();let J=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,L,D);else{const X=Jf(i,L,"vertex"),H=Jf(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+X+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||Z==="")&&($=!1);$&&(U.diagnostics={runnable:J,programLog:z,vertexShader:{log:V,prefix:_},fragmentShader:{log:Z,prefix:m}})}i.deleteShader(L),i.deleteShader(D),I=new al(i,v),T=YM(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,FM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=D,this}let ry=0;class sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new oy(e),t.set(e,n)),n}}class oy{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}}function ay(r,e,t,n,i,s,o){const a=new sm,l=new sy,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,M,U,z,V){const Z=z.fog,J=V.geometry,$=T.isMeshStandardMaterial?z.environment:null,X=(T.isMeshStandardMaterial?t:e).get(T.envMap||$),H=X&&X.mapping===Cl?X.image.height:null,le=g[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const N=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Me=N!==void 0?N.length:0;let Fe=0;J.morphAttributes.position!==void 0&&(Fe=1),J.morphAttributes.normal!==void 0&&(Fe=2),J.morphAttributes.color!==void 0&&(Fe=3);let Je,ie,ue,ge;if(le){const Ie=Ai[le];Je=Ie.vertexShader,ie=Ie.fragmentShader}else Je=T.vertexShader,ie=T.fragmentShader,l.update(T),ue=l.getVertexShaderID(T),ge=l.getFragmentShaderID(T);const pe=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),He=V.isInstancedMesh===!0,Ze=V.isBatchedMesh===!0,Ke=!!T.map,Pe=!!T.matcap,ke=!!X,F=!!T.aoMap,Ue=!!T.lightMap,Oe=!!T.bumpMap,G=!!T.normalMap,Be=!!T.displacementMap,je=!!T.emissiveMap,Ne=!!T.metalnessMap,R=!!T.roughnessMap,E=T.anisotropy>0,W=T.clearcoat>0,se=T.dispersion>0,ae=T.iridescence>0,Y=T.sheen>0,de=T.transmission>0,ne=E&&!!T.anisotropyMap,he=W&&!!T.clearcoatMap,Ge=W&&!!T.clearcoatNormalMap,fe=W&&!!T.clearcoatRoughnessMap,me=ae&&!!T.iridescenceMap,Se=ae&&!!T.iridescenceThicknessMap,we=Y&&!!T.sheenColorMap,Te=Y&&!!T.sheenRoughnessMap,Ve=!!T.specularMap,ze=!!T.specularColorMap,$e=!!T.specularIntensityMap,B=de&&!!T.transmissionMap,Q=de&&!!T.thicknessMap,re=!!T.gradientMap,ce=!!T.alphaMap,be=T.alphaTest>0,Ce=!!T.alphaHash,et=!!T.extensions;let vt=er;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(vt=r.toneMapping);const Ft={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:Je,fragmentShader:ie,defines:T.defines,customVertexShaderID:ue,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ze,batchingColor:Ze&&V._colorsTexture!==null,instancing:He,instancingColor:He&&V.instanceColor!==null,instancingMorph:He&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:sr,alphaToCoverage:!!T.alphaToCoverage,map:Ke,matcap:Pe,envMap:ke,envMapMode:ke&&X.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Ue,bumpMap:Oe,normalMap:G,displacementMap:d&&Be,emissiveMap:je,normalMapObjectSpace:G&&T.normalMapType===u0,normalMapTangentSpace:G&&T.normalMapType===c0,metalnessMap:Ne,roughnessMap:R,anisotropy:E,anisotropyMap:ne,clearcoat:W,clearcoatMap:he,clearcoatNormalMap:Ge,clearcoatRoughnessMap:fe,dispersion:se,iridescence:ae,iridescenceMap:me,iridescenceThicknessMap:Se,sheen:Y,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ve,specularColorMap:ze,specularIntensityMap:$e,transmission:de,transmissionMap:B,thicknessMap:Q,gradientMap:re,opaque:T.transparent===!1&&T.blending===Ws&&T.alphaToCoverage===!1,alphaMap:ce,alphaTest:be,alphaHash:Ce,combine:T.combine,mapUv:Ke&&v(T.map.channel),aoMapUv:F&&v(T.aoMap.channel),lightMapUv:Ue&&v(T.lightMap.channel),bumpMapUv:Oe&&v(T.bumpMap.channel),normalMapUv:G&&v(T.normalMap.channel),displacementMapUv:Be&&v(T.displacementMap.channel),emissiveMapUv:je&&v(T.emissiveMap.channel),metalnessMapUv:Ne&&v(T.metalnessMap.channel),roughnessMapUv:R&&v(T.roughnessMap.channel),anisotropyMapUv:ne&&v(T.anisotropyMap.channel),clearcoatMapUv:he&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(T.sheenRoughnessMap.channel),specularMapUv:Ve&&v(T.specularMap.channel),specularColorMapUv:ze&&v(T.specularColorMap.channel),specularIntensityMapUv:$e&&v(T.specularIntensityMap.channel),transmissionMapUv:B&&v(T.transmissionMap.channel),thicknessMapUv:Q&&v(T.thicknessMap.channel),alphaMapUv:ce&&v(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(G||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(Ke||ce),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:V.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ke&&T.map.isVideoTexture===!0&&yt.getTransfer(T.map.colorSpace)===Dt,decodeVideoTextureEmissive:je&&T.emissiveMap.isVideoTexture===!0&&yt.getTransfer(T.emissiveMap.colorSpace)===Dt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ri,flipSided:T.side===Hn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:et&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&T.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function m(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)M.push(U),M.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(b(M,T),w(M,T),M.push(r.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function w(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const M=g[T.type];let U;if(M){const z=Ai[M];U=G0.clone(z.uniforms)}else U=T.uniforms;return U}function L(T,M){let U;for(let z=0,V=u.length;z<V;z++){const Z=u[z];if(Z.cacheKey===M){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new iy(r,M,T,s),u.push(U)),U}function D(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function I(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:L,releaseProgram:D,releaseShaderCache:A,programs:u,dispose:I}}function ly(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function cy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function id(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,p,g,v,_){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:_},r[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=v,m.group=_),e++,m}function a(f,d,p,g,v,_){const m=o(f,d,p,g,v,_);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(f,d,p,g,v,_){const m=o(f,d,p,g,v,_);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||cy),n.length>1&&n.sort(d||id),i.length>1&&i.sort(d||id)}function u(){for(let f=e,d=r.length;f<d;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function uy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new rd,r.set(n,[o])):i>=s.length?(o=new rd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function hy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new mt};break;case"SpotLight":t={position:new j,direction:new j,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function fy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let dy=0;function py(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function my(r){const e=new hy,t=fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const i=new j,s=new Jt,o=new Jt;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,v=0,_=0,m=0,b=0,w=0,S=0,L=0,D=0,A=0;c.sort(py);for(let T=0,M=c.length;T<M;T++){const U=c[T],z=U.color,V=U.intensity,Z=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=z.r*V,f+=z.g*V,d+=z.b*V;else if(U.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(U.sh.coefficients[$],V);A++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const X=U.shadow,H=t.get(U);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=U.shadow.matrix,b++}n.directional[p]=$,p++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(z).multiplyScalar(V),$.distance=Z,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,n.spot[v]=$;const X=U.shadow;if(U.map&&(n.spotLightMap[L]=U.map,L++,X.updateMatrices(U),U.castShadow&&D++),n.spotLightMatrix[v]=X.matrix,U.castShadow){const H=t.get(U);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=J,S++}v++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(z).multiplyScalar(V),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),n.rectArea[_]=$,_++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const X=U.shadow,H=t.get(U);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=U.shadow.matrix,w++}n.point[g]=$,g++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(V),$.groundColor.copy(U.groundColor).multiplyScalar(V),n.hemi[m]=$,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==m||I.numDirectionalShadows!==b||I.numPointShadows!==w||I.numSpotShadows!==S||I.numSpotMaps!==L||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=_,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+L-D,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=m,I.numDirectionalShadows=b,I.numPointShadows=w,I.numSpotShadows=S,I.numSpotMaps=L,I.numLightProbes=A,n.version=dy++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const _=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const w=c[m];if(w.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(_),f++}else if(w.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(_),p++}else if(w.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(w.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),d++}else if(w.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:n}}function sd(r){const e=new my(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function _y(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new sd(r),e.set(i,[a])):s>=o.length?(a=new sd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class gy extends Pl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vy extends Pl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sy=`uniform sampler2D shadow_pass;
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
}`;function My(r,e,t){let n=new fm;const i=new Rt,s=new Rt,o=new kt,a=new gy({depthPacking:l0}),l=new vy,c={},u=t.maxTextureSize,f={[Dr]:Hn,[Hn]:Dr,[Ri]:Ri},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:xy,fragmentShader:Sy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Oi;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xn(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gp;let m=this.type;this.render=function(D,A,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const T=r.getRenderTarget(),M=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),z=r.state;z.setBlending(br),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=m!==Wi&&this.type===Wi,Z=m===Wi&&this.type!==Wi;for(let J=0,$=D.length;J<$;J++){const X=D[J],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const le=H.getFrameExtents();if(i.multiply(le),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/le.x),i.x=s.x*le.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/le.y),i.y=s.y*le.y,H.mapSize.y=s.y)),H.map===null||V===!0||Z===!0){const Me=this.type!==Wi?{minFilter:Dn,magFilter:Dn}:{};H.map!==null&&H.map.dispose(),H.map=new us(i.x,i.y,Me),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const N=H.getViewportCount();for(let Me=0;Me<N;Me++){const Fe=H.getViewport(Me);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),z.viewport(o),H.updateMatrices(X,Me),n=H.getFrustum(),S(A,I,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Wi&&b(H,I),H.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(T,M,U)};function b(D,A){const I=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new us(i.x,i.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(A,null,I,d,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(A,null,I,p,v,null)}function w(D,A,I,T){let M=null;const U=I.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)M=U;else if(M=I.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,V=A.uuid;let Z=c[z];Z===void 0&&(Z={},c[z]=Z);let J=Z[V];J===void 0&&(J=M.clone(),Z[V]=J,A.addEventListener("dispose",L)),M=J}if(M.visible=A.visible,M.wireframe=A.wireframe,T===Wi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=r.properties.get(M);z.light=I}return M}function S(D,A,I,T,M){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Wi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,D.matrixWorld);const V=e.update(D),Z=D.material;if(Array.isArray(Z)){const J=V.groups;for(let $=0,X=J.length;$<X;$++){const H=J[$],le=Z[H.materialIndex];if(le&&le.visible){const N=w(D,le,T,M);D.onBeforeShadow(r,D,A,I,V,N,H),r.renderBufferDirect(I,null,V,N,D,H),D.onAfterShadow(r,D,A,I,V,N,H)}}}else if(Z.visible){const J=w(D,Z,T,M);D.onBeforeShadow(r,D,A,I,V,J,null),r.renderBufferDirect(I,null,V,J,D,null),D.onAfterShadow(r,D,A,I,V,J,null)}}const z=D.children;for(let V=0,Z=z.length;V<Z;V++)S(z[V],A,I,T,M)}function L(D){D.target.removeEventListener("dispose",L);for(const I in c){const T=c[I],M=D.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const yy={[Qc]:eu,[tu]:ru,[nu]:su,[Qs]:iu,[eu]:Qc,[ru]:tu,[su]:nu,[iu]:Qs};function Ey(r,e){function t(){let B=!1;const Q=new kt;let re=null;const ce=new kt(0,0,0,0);return{setMask:function(be){re!==be&&!B&&(r.colorMask(be,be,be,be),re=be)},setLocked:function(be){B=be},setClear:function(be,Ce,et,vt,Ft){Ft===!0&&(be*=vt,Ce*=vt,et*=vt),Q.set(be,Ce,et,vt),ce.equals(Q)===!1&&(r.clearColor(be,Ce,et,vt),ce.copy(Q))},reset:function(){B=!1,re=null,ce.set(-1,0,0,0)}}}function n(){let B=!1,Q=!1,re=null,ce=null,be=null;return{setReversed:function(Ce){if(Q!==Ce){const et=e.get("EXT_clip_control");Q?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const vt=be;be=null,this.setClear(vt)}Q=Ce},getReversed:function(){return Q},setTest:function(Ce){Ce?pe(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Ce){re!==Ce&&!B&&(r.depthMask(Ce),re=Ce)},setFunc:function(Ce){if(Q&&(Ce=yy[Ce]),ce!==Ce){switch(Ce){case Qc:r.depthFunc(r.NEVER);break;case eu:r.depthFunc(r.ALWAYS);break;case tu:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case nu:r.depthFunc(r.EQUAL);break;case iu:r.depthFunc(r.GEQUAL);break;case ru:r.depthFunc(r.GREATER);break;case su:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Ce}},setLocked:function(Ce){B=Ce},setClear:function(Ce){be!==Ce&&(Q&&(Ce=1-Ce),r.clearDepth(Ce),be=Ce)},reset:function(){B=!1,re=null,ce=null,be=null,Q=!1}}}function i(){let B=!1,Q=null,re=null,ce=null,be=null,Ce=null,et=null,vt=null,Ft=null;return{setTest:function(Ie){B||(Ie?pe(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(Ie){Q!==Ie&&!B&&(r.stencilMask(Ie),Q=Ie)},setFunc:function(Ie,Xe,rt){(re!==Ie||ce!==Xe||be!==rt)&&(r.stencilFunc(Ie,Xe,rt),re=Ie,ce=Xe,be=rt)},setOp:function(Ie,Xe,rt){(Ce!==Ie||et!==Xe||vt!==rt)&&(r.stencilOp(Ie,Xe,rt),Ce=Ie,et=Xe,vt=rt)},setLocked:function(Ie){B=Ie},setClear:function(Ie){Ft!==Ie&&(r.clearStencil(Ie),Ft=Ie)},reset:function(){B=!1,Q=null,re=null,ce=null,be=null,Ce=null,et=null,vt=null,Ft=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,v=!1,_=null,m=null,b=null,w=null,S=null,L=null,D=null,A=new mt(0,0,0),I=0,T=!1,M=null,U=null,z=null,V=null,Z=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=X>=2);let le=null,N={};const Me=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),Je=new kt().fromArray(Me),ie=new kt().fromArray(Fe);function ue(B,Q,re,ce){const be=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(B,Ce),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<re;et++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(Q+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return Ce}const ge={};ge[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(r.DEPTH_TEST),o.setFunc(Qs),Oe(!1),G(lf),pe(r.CULL_FACE),F(br);function pe(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function Re(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function He(B,Q){return f[B]!==Q?(r.bindFramebuffer(B,Q),f[B]=Q,B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Q),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ze(B,Q){let re=p,ce=!1;if(B){re=d.get(Q),re===void 0&&(re=[],d.set(Q,re));const be=B.textures;if(re.length!==be.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Ce=0,et=be.length;Ce<et;Ce++)re[Ce]=r.COLOR_ATTACHMENT0+Ce;re.length=be.length,ce=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,ce=!0);ce&&r.drawBuffers(re)}function Ke(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const Pe={[qr]:r.FUNC_ADD,[Ug]:r.FUNC_SUBTRACT,[Ng]:r.FUNC_REVERSE_SUBTRACT};Pe[Og]=r.MIN,Pe[Fg]=r.MAX;const ke={[Bg]:r.ZERO,[zg]:r.ONE,[kg]:r.SRC_COLOR,[jc]:r.SRC_ALPHA,[Yg]:r.SRC_ALPHA_SATURATE,[Wg]:r.DST_COLOR,[Vg]:r.DST_ALPHA,[Hg]:r.ONE_MINUS_SRC_COLOR,[Jc]:r.ONE_MINUS_SRC_ALPHA,[Xg]:r.ONE_MINUS_DST_COLOR,[Gg]:r.ONE_MINUS_DST_ALPHA,[qg]:r.CONSTANT_COLOR,[$g]:r.ONE_MINUS_CONSTANT_COLOR,[Zg]:r.CONSTANT_ALPHA,[Kg]:r.ONE_MINUS_CONSTANT_ALPHA};function F(B,Q,re,ce,be,Ce,et,vt,Ft,Ie){if(B===br){v===!0&&(Re(r.BLEND),v=!1);return}if(v===!1&&(pe(r.BLEND),v=!0),B!==Ig){if(B!==_||Ie!==T){if((m!==qr||S!==qr)&&(r.blendEquation(r.FUNC_ADD),m=qr,S=qr),Ie)switch(B){case Ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cf:r.blendFunc(r.ONE,r.ONE);break;case uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,w=null,L=null,D=null,A.set(0,0,0),I=0,_=B,T=Ie}return}be=be||Q,Ce=Ce||re,et=et||ce,(Q!==m||be!==S)&&(r.blendEquationSeparate(Pe[Q],Pe[be]),m=Q,S=be),(re!==b||ce!==w||Ce!==L||et!==D)&&(r.blendFuncSeparate(ke[re],ke[ce],ke[Ce],ke[et]),b=re,w=ce,L=Ce,D=et),(vt.equals(A)===!1||Ft!==I)&&(r.blendColor(vt.r,vt.g,vt.b,Ft),A.copy(vt),I=Ft),_=B,T=!1}function Ue(B,Q){B.side===Ri?Re(r.CULL_FACE):pe(r.CULL_FACE);let re=B.side===Hn;Q&&(re=!re),Oe(re),B.blending===Ws&&B.transparent===!1?F(br):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const ce=B.stencilWrite;a.setTest(ce),ce&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),je(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(B){M!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),M=B)}function G(B){B!==Pg?(pe(r.CULL_FACE),B!==U&&(B===lf?r.cullFace(r.BACK):B===Dg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),U=B}function Be(B){B!==z&&($&&r.lineWidth(B),z=B)}function je(B,Q,re){B?(pe(r.POLYGON_OFFSET_FILL),(V!==Q||Z!==re)&&(r.polygonOffset(Q,re),V=Q,Z=re)):Re(r.POLYGON_OFFSET_FILL)}function Ne(B){B?pe(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function R(B){B===void 0&&(B=r.TEXTURE0+J-1),le!==B&&(r.activeTexture(B),le=B)}function E(B,Q,re){re===void 0&&(le===null?re=r.TEXTURE0+J-1:re=le);let ce=N[re];ce===void 0&&(ce={type:void 0,texture:void 0},N[re]=ce),(ce.type!==B||ce.texture!==Q)&&(le!==re&&(r.activeTexture(re),le=re),r.bindTexture(B,Q||ge[B]),ce.type=B,ce.texture=Q)}function W(){const B=N[le];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function se(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(B){Je.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Je.copy(B))}function Te(B){ie.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),ie.copy(B))}function Ve(B,Q){let re=c.get(Q);re===void 0&&(re=new WeakMap,c.set(Q,re));let ce=re.get(B);ce===void 0&&(ce=r.getUniformBlockIndex(Q,B.name),re.set(B,ce))}function ze(B,Q){const ce=c.get(Q).get(B);l.get(Q)!==ce&&(r.uniformBlockBinding(Q,ce,B.__bindingPointIndex),l.set(Q,ce))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},le=null,N={},f={},d=new WeakMap,p=[],g=null,v=!1,_=null,m=null,b=null,w=null,S=null,L=null,D=null,A=new mt(0,0,0),I=0,T=!1,M=null,U=null,z=null,V=null,Z=null,Je.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Re,bindFramebuffer:He,drawBuffers:Ze,useProgram:Ke,setBlending:F,setMaterial:Ue,setFlipSided:Oe,setCullFace:G,setLineWidth:Be,setPolygonOffset:je,setScissorTest:Ne,activeTexture:R,bindTexture:E,unbindTexture:W,compressedTexImage2D:se,compressedTexImage3D:ae,texImage2D:me,texImage3D:Se,updateUBOMapping:Ve,uniformBlockBinding:ze,texStorage2D:Ge,texStorage3D:fe,texSubImage2D:Y,texSubImage3D:de,compressedTexSubImage2D:ne,compressedTexSubImage3D:he,scissor:we,viewport:Te,reset:$e}}function od(r,e,t,n){const i=Ty(n);switch(t){case Zp:return r*e;case jp:return r*e;case Jp:return r*e*2;case ph:return r*e/i.components*i.byteLength;case mh:return r*e/i.components*i.byteLength;case Qp:return r*e*2/i.components*i.byteLength;case _h:return r*e*2/i.components*i.byteLength;case Kp:return r*e*3/i.components*i.byteLength;case ii:return r*e*4/i.components*i.byteLength;case gh:return r*e*4/i.components*i.byteLength;case nl:case il:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rl:case sl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uu:case fu:return Math.max(r,16)*Math.max(e,8)/4;case cu:case hu:return Math.max(r,8)*Math.max(e,8)/2;case du:case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case vu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case xu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Su:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Au:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ol:case Pu:case Du:return Math.ceil(r/4)*Math.ceil(e/4)*16;case em:case Lu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Iu:case Uu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ty(r){switch(r){case rr:case Yp:return{byteLength:1,components:1};case Qo:case qp:case ji:return{byteLength:2,components:1};case fh:case dh:return{byteLength:2,components:4};case cs:case hh:case ni:return{byteLength:4,components:1};case $p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function wy(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return p?new OffscreenCanvas(R,E):ea("canvas")}function v(R,E,W){let se=1;const ae=Ne(R);if((ae.width>W||ae.height>W)&&(se=W/Math.max(ae.width,ae.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(se*ae.width),de=Math.floor(se*ae.height);f===void 0&&(f=g(Y,de));const ne=E?g(Y,de):f;return ne.width=Y,ne.height=de,ne.getContext("2d").drawImage(R,0,0,Y,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Y+"x"+de+")."),ne}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function _(R){return R.generateMipmaps}function m(R){r.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(R,E,W,se,ae=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=E;if(E===r.RED&&(W===r.FLOAT&&(Y=r.R32F),W===r.HALF_FLOAT&&(Y=r.R16F),W===r.UNSIGNED_BYTE&&(Y=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(Y=r.R8UI),W===r.UNSIGNED_SHORT&&(Y=r.R16UI),W===r.UNSIGNED_INT&&(Y=r.R32UI),W===r.BYTE&&(Y=r.R8I),W===r.SHORT&&(Y=r.R16I),W===r.INT&&(Y=r.R32I)),E===r.RG&&(W===r.FLOAT&&(Y=r.RG32F),W===r.HALF_FLOAT&&(Y=r.RG16F),W===r.UNSIGNED_BYTE&&(Y=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(Y=r.RG8UI),W===r.UNSIGNED_SHORT&&(Y=r.RG16UI),W===r.UNSIGNED_INT&&(Y=r.RG32UI),W===r.BYTE&&(Y=r.RG8I),W===r.SHORT&&(Y=r.RG16I),W===r.INT&&(Y=r.RG32I)),E===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),W===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),W===r.UNSIGNED_INT&&(Y=r.RGB32UI),W===r.BYTE&&(Y=r.RGB8I),W===r.SHORT&&(Y=r.RGB16I),W===r.INT&&(Y=r.RGB32I)),E===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),W===r.UNSIGNED_INT&&(Y=r.RGBA32UI),W===r.BYTE&&(Y=r.RGBA8I),W===r.SHORT&&(Y=r.RGBA16I),W===r.INT&&(Y=r.RGBA32I)),E===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),E===r.RGBA){const de=ae?Rl:yt.getTransfer(se);W===r.FLOAT&&(Y=r.RGBA32F),W===r.HALF_FLOAT&&(Y=r.RGBA16F),W===r.UNSIGNED_BYTE&&(Y=de===Dt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(R,E){let W;return R?E===null||E===cs||E===no?W=r.DEPTH24_STENCIL8:E===ni?W=r.DEPTH32F_STENCIL8:E===Qo&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===cs||E===no?W=r.DEPTH_COMPONENT24:E===ni?W=r.DEPTH_COMPONENT32F:E===Qo&&(W=r.DEPTH_COMPONENT16),W}function L(R,E){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==Dn&&R.minFilter!==un?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function D(R){const E=R.target;E.removeEventListener("dispose",D),I(E),E.isVideoTexture&&u.delete(E)}function A(R){const E=R.target;E.removeEventListener("dispose",A),M(E)}function I(R){const E=n.get(R);if(E.__webglInit===void 0)return;const W=R.source,se=d.get(W);if(se){const ae=se[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&T(R),Object.keys(se).length===0&&d.delete(W)}n.remove(R)}function T(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const W=R.source,se=d.get(W);delete se[E.__cacheKey],o.memory.textures--}function M(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let ae=0;ae<E.__webglFramebuffer[se].length;ae++)r.deleteFramebuffer(E.__webglFramebuffer[se][ae]);else r.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)r.deleteFramebuffer(E.__webglFramebuffer[se]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=R.textures;for(let se=0,ae=W.length;se<ae;se++){const Y=n.get(W[se]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(W[se])}n.remove(R)}let U=0;function z(){U=0}function V(){const R=U;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),U+=1,R}function Z(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function J(R,E){const W=n.get(R);if(R.isVideoTexture&&Be(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(W,R,E);return}}t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function $(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ie(W,R,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function X(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ie(W,R,E);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function H(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ue(W,R,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const le={[Ml]:r.REPEAT,[Ki]:r.CLAMP_TO_EDGE,[lu]:r.MIRRORED_REPEAT},N={[Dn]:r.NEAREST,[o0]:r.NEAREST_MIPMAP_NEAREST,[Ma]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[Yl]:r.LINEAR_MIPMAP_NEAREST,[yr]:r.LINEAR_MIPMAP_LINEAR},Me={[h0]:r.NEVER,[g0]:r.ALWAYS,[f0]:r.LESS,[tm]:r.LEQUAL,[d0]:r.EQUAL,[_0]:r.GEQUAL,[p0]:r.GREATER,[m0]:r.NOTEQUAL};function Fe(R,E){if(E.type===ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===un||E.magFilter===Yl||E.magFilter===Ma||E.magFilter===yr||E.minFilter===un||E.minFilter===Yl||E.minFilter===Ma||E.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,le[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,le[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,le[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,N[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==Ma&&E.minFilter!==yr||E.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Je(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",D));const se=E.source;let ae=d.get(se);ae===void 0&&(ae={},d.set(se,ae));const Y=Z(E);if(Y!==R.__cacheKey){ae[Y]===void 0&&(ae[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ae[Y].usedTimes++;const de=ae[R.__cacheKey];de!==void 0&&(ae[R.__cacheKey].usedTimes--,de.usedTimes===0&&T(E)),R.__cacheKey=Y,R.__webglTexture=ae[Y].texture}return W}function ie(R,E,W){let se=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=r.TEXTURE_3D);const ae=Je(R,E),Y=E.source;t.bindTexture(se,R.__webglTexture,r.TEXTURE0+W);const de=n.get(Y);if(Y.version!==de.__version||ae===!0){t.activeTexture(r.TEXTURE0+W);const ne=yt.getPrimaries(yt.workingColorSpace),he=E.colorSpace===Qn?null:yt.getPrimaries(E.colorSpace),Ge=E.colorSpace===Qn||ne===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let fe=v(E.image,!1,i.maxTextureSize);fe=je(E,fe);const me=s.convert(E.format,E.colorSpace),Se=s.convert(E.type);let we=w(E.internalFormat,me,Se,E.colorSpace,E.isVideoTexture);Fe(se,E);let Te;const Ve=E.mipmaps,ze=E.isVideoTexture!==!0,$e=de.__version===void 0||ae===!0,B=Y.dataReady,Q=L(E,fe);if(E.isDepthTexture)we=S(E.format===io,E.type),$e&&(ze?t.texStorage2D(r.TEXTURE_2D,1,we,fe.width,fe.height):t.texImage2D(r.TEXTURE_2D,0,we,fe.width,fe.height,0,me,Se,null));else if(E.isDataTexture)if(Ve.length>0){ze&&$e&&t.texStorage2D(r.TEXTURE_2D,Q,we,Ve[0].width,Ve[0].height);for(let re=0,ce=Ve.length;re<ce;re++)Te=Ve[re],ze?B&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Te.width,Te.height,me,Se,Te.data):t.texImage2D(r.TEXTURE_2D,re,we,Te.width,Te.height,0,me,Se,Te.data);E.generateMipmaps=!1}else ze?($e&&t.texStorage2D(r.TEXTURE_2D,Q,we,fe.width,fe.height),B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe.width,fe.height,me,Se,fe.data)):t.texImage2D(r.TEXTURE_2D,0,we,fe.width,fe.height,0,me,Se,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&$e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,we,Ve[0].width,Ve[0].height,fe.depth);for(let re=0,ce=Ve.length;re<ce;re++)if(Te=Ve[re],E.format!==ii)if(me!==null)if(ze){if(B)if(E.layerUpdates.size>0){const be=od(Te.width,Te.height,E.format,E.type);for(const Ce of E.layerUpdates){const et=Te.data.subarray(Ce*be/Te.data.BYTES_PER_ELEMENT,(Ce+1)*be/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Ce,Te.width,Te.height,1,me,et)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Te.width,Te.height,fe.depth,me,Te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,we,Te.width,Te.height,fe.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?B&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Te.width,Te.height,fe.depth,me,Se,Te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,we,Te.width,Te.height,fe.depth,0,me,Se,Te.data)}else{ze&&$e&&t.texStorage2D(r.TEXTURE_2D,Q,we,Ve[0].width,Ve[0].height);for(let re=0,ce=Ve.length;re<ce;re++)Te=Ve[re],E.format!==ii?me!==null?ze?B&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,Te.width,Te.height,me,Te.data):t.compressedTexImage2D(r.TEXTURE_2D,re,we,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?B&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Te.width,Te.height,me,Se,Te.data):t.texImage2D(r.TEXTURE_2D,re,we,Te.width,Te.height,0,me,Se,Te.data)}else if(E.isDataArrayTexture)if(ze){if($e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,we,fe.width,fe.height,fe.depth),B)if(E.layerUpdates.size>0){const re=od(fe.width,fe.height,E.format,E.type);for(const ce of E.layerUpdates){const be=fe.data.subarray(ce*re/fe.data.BYTES_PER_ELEMENT,(ce+1)*re/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ce,fe.width,fe.height,1,me,Se,be)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,me,Se,fe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,fe.width,fe.height,fe.depth,0,me,Se,fe.data);else if(E.isData3DTexture)ze?($e&&t.texStorage3D(r.TEXTURE_3D,Q,we,fe.width,fe.height,fe.depth),B&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,me,Se,fe.data)):t.texImage3D(r.TEXTURE_3D,0,we,fe.width,fe.height,fe.depth,0,me,Se,fe.data);else if(E.isFramebufferTexture){if($e)if(ze)t.texStorage2D(r.TEXTURE_2D,Q,we,fe.width,fe.height);else{let re=fe.width,ce=fe.height;for(let be=0;be<Q;be++)t.texImage2D(r.TEXTURE_2D,be,we,re,ce,0,me,Se,null),re>>=1,ce>>=1}}else if(Ve.length>0){if(ze&&$e){const re=Ne(Ve[0]);t.texStorage2D(r.TEXTURE_2D,Q,we,re.width,re.height)}for(let re=0,ce=Ve.length;re<ce;re++)Te=Ve[re],ze?B&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,me,Se,Te):t.texImage2D(r.TEXTURE_2D,re,we,me,Se,Te);E.generateMipmaps=!1}else if(ze){if($e){const re=Ne(fe);t.texStorage2D(r.TEXTURE_2D,Q,we,re.width,re.height)}B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,Se,fe)}else t.texImage2D(r.TEXTURE_2D,0,we,me,Se,fe);_(E)&&m(se),de.__version=Y.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ue(R,E,W){if(E.image.length!==6)return;const se=Je(R,E),ae=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+W);const Y=n.get(ae);if(ae.version!==Y.__version||se===!0){t.activeTexture(r.TEXTURE0+W);const de=yt.getPrimaries(yt.workingColorSpace),ne=E.colorSpace===Qn?null:yt.getPrimaries(E.colorSpace),he=E.colorSpace===Qn||de===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,fe=E.image[0]&&E.image[0].isDataTexture,me=[];for(let ce=0;ce<6;ce++)!Ge&&!fe?me[ce]=v(E.image[ce],!0,i.maxCubemapSize):me[ce]=fe?E.image[ce].image:E.image[ce],me[ce]=je(E,me[ce]);const Se=me[0],we=s.convert(E.format,E.colorSpace),Te=s.convert(E.type),Ve=w(E.internalFormat,we,Te,E.colorSpace),ze=E.isVideoTexture!==!0,$e=Y.__version===void 0||se===!0,B=ae.dataReady;let Q=L(E,Se);Fe(r.TEXTURE_CUBE_MAP,E);let re;if(Ge){ze&&$e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Q,Ve,Se.width,Se.height);for(let ce=0;ce<6;ce++){re=me[ce].mipmaps;for(let be=0;be<re.length;be++){const Ce=re[be];E.format!==ii?we!==null?ze?B&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,0,0,Ce.width,Ce.height,we,Ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,Ve,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?B&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,0,0,Ce.width,Ce.height,we,Te,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,Ve,Ce.width,Ce.height,0,we,Te,Ce.data)}}}else{if(re=E.mipmaps,ze&&$e){re.length>0&&Q++;const ce=Ne(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Q,Ve,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(fe){ze?B&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,me[ce].width,me[ce].height,we,Te,me[ce].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ve,me[ce].width,me[ce].height,0,we,Te,me[ce].data);for(let be=0;be<re.length;be++){const et=re[be].image[ce].image;ze?B&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,0,0,et.width,et.height,we,Te,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,Ve,et.width,et.height,0,we,Te,et.data)}}else{ze?B&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,we,Te,me[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ve,we,Te,me[ce]);for(let be=0;be<re.length;be++){const Ce=re[be];ze?B&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,0,0,we,Te,Ce.image[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,Ve,we,Te,Ce.image[ce])}}}_(E)&&m(r.TEXTURE_CUBE_MAP),Y.__version=ae.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ge(R,E,W,se,ae,Y){const de=s.convert(W.format,W.colorSpace),ne=s.convert(W.type),he=w(W.internalFormat,de,ne,W.colorSpace),Ge=n.get(E),fe=n.get(W);if(fe.__renderTarget=E,!Ge.__hasExternalTextures){const me=Math.max(1,E.width>>Y),Se=Math.max(1,E.height>>Y);ae===r.TEXTURE_3D||ae===r.TEXTURE_2D_ARRAY?t.texImage3D(ae,Y,he,me,Se,E.depth,0,de,ne,null):t.texImage2D(ae,Y,he,me,Se,0,de,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),G(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ae,fe.__webglTexture,0,Oe(E)):(ae===r.TEXTURE_2D||ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ae,fe.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(R,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const se=E.depthTexture,ae=se&&se.isDepthTexture?se.type:null,Y=S(E.stencilBuffer,ae),de=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=Oe(E);G(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,Y,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,Y,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Y,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,R)}else{const se=E.textures;for(let ae=0;ae<se.length;ae++){const Y=se[ae],de=s.convert(Y.format,Y.colorSpace),ne=s.convert(Y.type),he=w(Y.internalFormat,de,ne,Y.colorSpace),Ge=Oe(E);W&&G(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,he,E.width,E.height):G(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,he,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,he,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(E.depthTexture);se.__renderTarget=E,(!se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const ae=se.__webglTexture,Y=Oe(E);if(E.depthTexture.format===Xs)G(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0);else if(E.depthTexture.format===io)G(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function He(R){const E=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const se=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",ae)};se.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=se}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Re(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=r.createRenderbuffer(),pe(E.__webglDepthbuffer[se],R,!1);else{const ae=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),pe(E.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,ae)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(R,E,W){const se=n.get(R);E!==void 0&&ge(se.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&He(R)}function Ke(R){const E=R.texture,W=n.get(R),se=n.get(E);R.addEventListener("dispose",A);const ae=R.textures,Y=R.isWebGLCubeRenderTarget===!0,de=ae.length>1;if(de||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=E.version,o.memory.textures++),Y){W.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ne]=[];for(let he=0;he<E.mipmaps.length;he++)W.__webglFramebuffer[ne][he]=r.createFramebuffer()}else W.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ne=0;ne<E.mipmaps.length;ne++)W.__webglFramebuffer[ne]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(de)for(let ne=0,he=ae.length;ne<he;ne++){const Ge=n.get(ae[ne]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&G(R)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ne=0;ne<ae.length;ne++){const he=ae[ne];W.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[ne]);const Ge=s.convert(he.format,he.colorSpace),fe=s.convert(he.type),me=w(he.internalFormat,Ge,fe,he.colorSpace,R.isXRRenderTarget===!0),Se=Oe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,me,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,W.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,E);for(let ne=0;ne<6;ne++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)ge(W.__webglFramebuffer[ne][he],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else ge(W.__webglFramebuffer[ne],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);_(E)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ne=0,he=ae.length;ne<he;ne++){const Ge=ae[ne],fe=n.get(Ge);t.bindTexture(r.TEXTURE_2D,fe.__webglTexture),Fe(r.TEXTURE_2D,Ge),ge(W.__webglFramebuffer,R,Ge,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,0),_(Ge)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,se.__webglTexture),Fe(ne,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)ge(W.__webglFramebuffer[he],R,E,r.COLOR_ATTACHMENT0,ne,he);else ge(W.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,ne,0);_(E)&&m(ne),t.unbindTexture()}R.depthBuffer&&He(R)}function Pe(R){const E=R.textures;for(let W=0,se=E.length;W<se;W++){const ae=E[W];if(_(ae)){const Y=b(R),de=n.get(ae).__webglTexture;t.bindTexture(Y,de),m(Y),t.unbindTexture()}}}const ke=[],F=[];function Ue(R){if(R.samples>0){if(G(R)===!1){const E=R.textures,W=R.width,se=R.height;let ae=r.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(R),ne=E.length>1;if(ne)for(let he=0;he<E.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<E.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Ge=n.get(E[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,W,se,0,0,W,se,ae,r.NEAREST),l===!0&&(ke.length=0,F.length=0,ke.push(r.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(Y),F.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<E.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Ge=n.get(E[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Oe(R){return Math.min(i.maxSamples,R.samples)}function G(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Be(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function je(R,E){const W=R.colorSpace,se=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==sr&&W!==Qn&&(yt.getTransfer(W)===Dt?(se!==ii||ae!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Ze,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=G}function by(r,e){function t(n,i=Qn){let s;const o=yt.getTransfer(i);if(n===rr)return r.UNSIGNED_BYTE;if(n===fh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$p)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yp)return r.BYTE;if(n===qp)return r.SHORT;if(n===Qo)return r.UNSIGNED_SHORT;if(n===hh)return r.INT;if(n===cs)return r.UNSIGNED_INT;if(n===ni)return r.FLOAT;if(n===ji)return r.HALF_FLOAT;if(n===Zp)return r.ALPHA;if(n===Kp)return r.RGB;if(n===ii)return r.RGBA;if(n===jp)return r.LUMINANCE;if(n===Jp)return r.LUMINANCE_ALPHA;if(n===Xs)return r.DEPTH_COMPONENT;if(n===io)return r.DEPTH_STENCIL;if(n===ph)return r.RED;if(n===mh)return r.RED_INTEGER;if(n===Qp)return r.RG;if(n===_h)return r.RG_INTEGER;if(n===gh)return r.RGBA_INTEGER;if(n===nl||n===il||n===rl||n===sl)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cu||n===uu||n===hu||n===fu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===du||n===pu||n===mu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===du||n===pu)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu||n===Eu||n===Tu||n===wu||n===bu||n===Au||n===Cu||n===Ru)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_u)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Su)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Au)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ru)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===Pu||n===Du)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ol)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Du)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===em||n===Lu||n===Iu||n===Uu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ol)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===no?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Ay extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jr extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,n),m=this._getHandJoint(c,v);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Py=`
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

}`;class Dy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new fn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gi({vertexShader:Ry,fragmentShader:Py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xn(new ao(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ly extends so{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=new Dy,_=t.getContextAttributes();let m=null,b=null;const w=[],S=[],L=new Rt;let D=null;const A=new Kn;A.viewport=new kt;const I=new Kn;I.viewport=new kt;const T=[A,I],M=new Ay;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ue=w[ie];return ue===void 0&&(ue=new Mc,w[ie]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ie){let ue=w[ie];return ue===void 0&&(ue=new Mc,w[ie]=ue),ue.getGripSpace()},this.getHand=function(ie){let ue=w[ie];return ue===void 0&&(ue=new Mc,w[ie]=ue),ue.getHandSpace()};function V(ie){const ue=S.indexOf(ie.inputSource);if(ue===-1)return;const ge=w[ue];ge!==void 0&&(ge.update(ie.inputSource,ie.frame,c||o),ge.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Z(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",J);for(let ie=0;ie<w.length;ie++){const ue=S[ie];ue!==null&&(S[ie]=null,w[ie].disconnect(ue))}U=null,z=null,v.reset(),e.setRenderTarget(m),p=null,d=null,f=null,i=null,b=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new us(p.framebufferWidth,p.framebufferHeight,{format:ii,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ue=null,ge=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=_.stencil?io:Xs,ge=_.stencil?no:cs);const Re={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(Re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new us(d.textureWidth,d.textureHeight,{format:ii,type:rr,depthTexture:new pm(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(ie){for(let ue=0;ue<ie.removed.length;ue++){const ge=ie.removed[ue],pe=S.indexOf(ge);pe>=0&&(S[pe]=null,w[pe].disconnect(ge))}for(let ue=0;ue<ie.added.length;ue++){const ge=ie.added[ue];let pe=S.indexOf(ge);if(pe===-1){for(let He=0;He<w.length;He++)if(He>=S.length){S.push(ge),pe=He;break}else if(S[He]===null){S[He]=ge,pe=He;break}if(pe===-1)break}const Re=w[pe];Re&&Re.connect(ge)}}const $=new j,X=new j;function H(ie,ue,ge){$.setFromMatrixPosition(ue.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const pe=$.distanceTo(X),Re=ue.projectionMatrix.elements,He=ge.projectionMatrix.elements,Ze=Re[14]/(Re[10]-1),Ke=Re[14]/(Re[10]+1),Pe=(Re[9]+1)/Re[5],ke=(Re[9]-1)/Re[5],F=(Re[8]-1)/Re[0],Ue=(He[8]+1)/He[0],Oe=Ze*F,G=Ze*Ue,Be=pe/(-F+Ue),je=Be*-F;if(ue.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(je),ie.translateZ(Be),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Re[10]===-1)ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ne=Ze+Be,R=Ke+Be,E=Oe-je,W=G+(pe-je),se=Pe*Ke/R*Ne,ae=ke*Ke/R*Ne;ie.projectionMatrix.makePerspective(E,W,se,ae,Ne,R),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function le(ie,ue){ue===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ue.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let ue=ie.near,ge=ie.far;v.texture!==null&&(v.depthNear>0&&(ue=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),M.near=I.near=A.near=ue,M.far=I.far=A.far=ge,(U!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,z=M.far),A.layers.mask=ie.layers.mask|2,I.layers.mask=ie.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;const pe=ie.parent,Re=M.cameras;le(M,pe);for(let He=0;He<Re.length;He++)le(Re[He],pe);Re.length===2?H(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),N(ie,M,pe)};function N(ie,ue,ge){ge===null?ie.matrix.copy(ue.matrixWorld):(ie.matrix.copy(ge.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ue.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Nu*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Me=null;function Fe(ie,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let pe=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let He=0;He<ge.length;He++){const Ze=ge[He];let Ke=null;if(p!==null)Ke=p.getViewport(Ze);else{const ke=f.getViewSubImage(d,Ze);Ke=ke.viewport,He===0&&(e.setRenderTargetTextures(b,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(b))}let Pe=T[He];Pe===void 0&&(Pe=new Kn,Pe.layers.enable(He),Pe.viewport=new kt,T[He]=Pe),Pe.matrix.fromArray(Ze.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ze.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),He===0&&(M.matrix.copy(Pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(Pe)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const He=f.getDepthInformation(ge[0]);He&&He.isValid&&He.texture&&v.init(e,He,i.renderState)}}for(let ge=0;ge<w.length;ge++){const pe=S[ge],Re=w[ge];pe!==null&&Re!==void 0&&Re.update(pe,ue,c||o)}Me&&Me(ie,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Je=new dm;Je.setAnimationLoop(Fe),this.setAnimationLoop=function(ie){Me=ie},this.dispose=function(){}}}const kr=new Ni,Iy=new Jt;function Uy(r,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,cm(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,b,w,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),f(_,m)):m.isMeshPhongMaterial?(s(_,m),u(_,m)):m.isMeshStandardMaterial?(s(_,m),d(_,m),m.isMeshPhysicalMaterial&&p(_,m,S)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),v(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,b,w):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Hn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Hn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const b=e.get(m),w=b.envMap,S=b.envMapRotation;w&&(_.envMap.value=w,kr.copy(S),kr.x*=-1,kr.y*=-1,kr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),_.envMapRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(kr)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,b,w){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*b,_.scale.value=w*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,b){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Hn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function v(_,m){const b=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ny(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const S=w.program;n.uniformBlockBinding(b,S)}function c(b,w){let S=i[b.id];S===void 0&&(g(b),S=u(b),i[b.id]=S,b.addEventListener("dispose",_));const L=w.program;n.updateUBOMapping(b,L);const D=e.render.frame;s[b.id]!==D&&(d(b),s[b.id]=D)}function u(b){const w=f();b.__bindingPointIndex=w;const S=r.createBuffer(),L=b.__size,D=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,L,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=i[b.id],S=b.uniforms,L=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let D=0,A=S.length;D<A;D++){const I=Array.isArray(S[D])?S[D]:[S[D]];for(let T=0,M=I.length;T<M;T++){const U=I[T];if(p(U,D,T,L)===!0){const z=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let J=0;J<V.length;J++){const $=V[J],X=v($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,z+Z,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,Z),Z+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(b,w,S,L){const D=b.value,A=w+"_"+S;if(L[A]===void 0)return typeof D=="number"||typeof D=="boolean"?L[A]=D:L[A]=D.clone(),!0;{const I=L[A];if(typeof D=="number"||typeof D=="boolean"){if(I!==D)return L[A]=D,!0}else if(I.equals(D)===!1)return I.copy(D),!0}return!1}function g(b){const w=b.uniforms;let S=0;const L=16;for(let A=0,I=w.length;A<I;A++){const T=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,U=T.length;M<U;M++){const z=T[M],V=Array.isArray(z.value)?z.value:[z.value];for(let Z=0,J=V.length;Z<J;Z++){const $=V[Z],X=v($),H=S%L,le=H%X.boundary,N=H+le;S+=le,N!==0&&L-N<X.storage&&(S+=L-N),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=X.storage}}}const D=S%L;return D>0&&(S+=L-D),b.__size=S,b.__cache={},this}function v(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function _(b){const w=b.target;w.removeEventListener("dispose",_);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function m(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class xm{constructor(e={}){const{canvas:t=x0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=er,this.toneMappingExposure=1;const S=this;let L=!1,D=0,A=0,I=null,T=-1,M=null;const U=new kt,z=new kt;let V=null;const Z=new mt(0);let J=0,$=t.width,X=t.height,H=1,le=null,N=null;const Me=new kt(0,0,$,X),Fe=new kt(0,0,$,X);let Je=!1;const ie=new fm;let ue=!1,ge=!1;const pe=new Jt,Re=new Jt,He=new j,Ze=new kt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function ke(){return I===null?H:1}let F=n;function Ue(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uh}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),F===null){const x="webgl2";if(F=Ue(x,h),F===null)throw Ue(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Oe,G,Be,je,Ne,R,E,W,se,ae,Y,de,ne,he,Ge,fe,me,Se,we,Te,Ve,ze,$e,B;function Q(){Oe=new HS(F),Oe.init(),ze=new by(F,Oe),G=new US(F,Oe,e,ze),Be=new Ey(F,Oe),G.reverseDepthBuffer&&d&&Be.buffers.depth.setReversed(!0),je=new WS(F),Ne=new ly,R=new wy(F,Oe,Be,Ne,G,ze,je),E=new OS(S),W=new kS(S),se=new K0(F),$e=new LS(F,se),ae=new VS(F,se,je,$e),Y=new YS(F,ae,se,je),we=new XS(F,G,R),fe=new NS(Ne),de=new ay(S,E,W,Oe,G,$e,fe),ne=new Uy(S,Ne),he=new uy,Ge=new _y(Oe),Se=new DS(S,E,W,Be,Y,p,l),me=new My(S,Y,G),B=new Ny(F,je,G,Be),Te=new IS(F,Oe,je),Ve=new GS(F,Oe,je),je.programs=de.programs,S.capabilities=G,S.extensions=Oe,S.properties=Ne,S.renderLists=he,S.shadowMap=me,S.state=Be,S.info=je}Q();const re=new Ly(S,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const h=Oe.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Oe.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(h){h!==void 0&&(H=h,this.setSize($,X,!1))},this.getSize=function(h){return h.set($,X)},this.setSize=function(h,x,y=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=h,X=x,t.width=Math.floor(h*H),t.height=Math.floor(x*H),y===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set($*H,X*H).floor()},this.setDrawingBufferSize=function(h,x,y){$=h,X=x,H=y,t.width=Math.floor(h*y),t.height=Math.floor(x*y),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(U)},this.getViewport=function(h){return h.copy(Me)},this.setViewport=function(h,x,y,C){h.isVector4?Me.set(h.x,h.y,h.z,h.w):Me.set(h,x,y,C),Be.viewport(U.copy(Me).multiplyScalar(H).round())},this.getScissor=function(h){return h.copy(Fe)},this.setScissor=function(h,x,y,C){h.isVector4?Fe.set(h.x,h.y,h.z,h.w):Fe.set(h,x,y,C),Be.scissor(z.copy(Fe).multiplyScalar(H).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(h){Be.setScissorTest(Je=h)},this.setOpaqueSort=function(h){le=h},this.setTransparentSort=function(h){N=h},this.getClearColor=function(h){return h.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(h=!0,x=!0,y=!0){let C=0;if(h){let P=!1;if(I!==null){const O=I.texture.format;P=O===gh||O===_h||O===mh}if(P){const O=I.texture.type,k=O===rr||O===cs||O===Qo||O===no||O===fh||O===dh,K=Se.getClearColor(),q=Se.getClearAlpha(),ee=K.r,te=K.g,oe=K.b;k?(g[0]=ee,g[1]=te,g[2]=oe,g[3]=q,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=ee,v[1]=te,v[2]=oe,v[3]=q,F.clearBufferiv(F.COLOR,0,v))}else C|=F.COLOR_BUFFER_BIT}x&&(C|=F.DEPTH_BUFFER_BIT),y&&(C|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),he.dispose(),Ge.dispose(),Ne.dispose(),E.dispose(),W.dispose(),Y.dispose(),$e.dispose(),B.dispose(),de.dispose(),re.dispose(),re.removeEventListener("sessionstart",De),re.removeEventListener("sessionend",nt),Ye.stop()};function ce(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const h=je.autoReset,x=me.enabled,y=me.autoUpdate,C=me.needsUpdate,P=me.type;Q(),je.autoReset=h,me.enabled=x,me.autoUpdate=y,me.needsUpdate=C,me.type=P}function Ce(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function et(h){const x=h.target;x.removeEventListener("dispose",et),vt(x)}function vt(h){Ft(h),Ne.remove(h)}function Ft(h){const x=Ne.get(h).programs;x!==void 0&&(x.forEach(function(y){de.releaseProgram(y)}),h.isShaderMaterial&&de.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,y,C,P,O){x===null&&(x=Ke);const k=P.isMesh&&P.matrixWorld.determinant()<0,K=Mn(h,x,y,C,P);Be.setMaterial(C,k);let q=y.index,ee=1;if(C.wireframe===!0){if(q=ae.getWireframeAttribute(y),q===void 0)return;ee=2}const te=y.drawRange,oe=y.attributes.position;let _e=te.start*ee,ve=(te.start+te.count)*ee;O!==null&&(_e=Math.max(_e,O.start*ee),ve=Math.min(ve,(O.start+O.count)*ee)),q!==null?(_e=Math.max(_e,0),ve=Math.min(ve,q.count)):oe!=null&&(_e=Math.max(_e,0),ve=Math.min(ve,oe.count));const Ae=ve-_e;if(Ae<0||Ae===1/0)return;$e.setup(P,C,K,y,q);let ye,Ee=Te;if(q!==null&&(ye=se.get(q),Ee=Ve,Ee.setIndex(ye)),P.isMesh)C.wireframe===!0?(Be.setLineWidth(C.wireframeLinewidth*ke()),Ee.setMode(F.LINES)):Ee.setMode(F.TRIANGLES);else if(P.isLine){let xe=C.linewidth;xe===void 0&&(xe=1),Be.setLineWidth(xe*ke()),P.isLineSegments?Ee.setMode(F.LINES):P.isLineLoop?Ee.setMode(F.LINE_LOOP):Ee.setMode(F.LINE_STRIP)}else P.isPoints?Ee.setMode(F.POINTS):P.isSprite&&Ee.setMode(F.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Ee.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Ee.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const xe=P._multiDrawStarts,ht=P._multiDrawCounts,Qe=P._multiDrawCount,Ut=q?se.get(q).bytesPerElement:1,Et=Ne.get(C).currentProgram.getUniforms();for(let it=0;it<Qe;it++)Et.setValue(F,"_gl_DrawID",it),Ee.render(xe[it]/Ut,ht[it])}else if(P.isInstancedMesh)Ee.renderInstances(_e,Ae,P.count);else if(y.isInstancedBufferGeometry){const xe=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,ht=Math.min(y.instanceCount,xe);Ee.renderInstances(_e,Ae,ht)}else Ee.render(_e,Ae)};function Ie(h,x,y){h.transparent===!0&&h.side===Ri&&h.forceSinglePass===!1?(h.side=Hn,h.needsUpdate=!0,bt(h,x,y),h.side=Dr,h.needsUpdate=!0,bt(h,x,y),h.side=Ri):bt(h,x,y)}this.compile=function(h,x,y=null){y===null&&(y=h),m=Ge.get(y),m.init(x),w.push(m),y.traverseVisible(function(P){P.isLight&&P.layers.test(x.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),h!==y&&h.traverseVisible(function(P){P.isLight&&P.layers.test(x.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),m.setupLights();const C=new Set;return h.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const O=P.material;if(O)if(Array.isArray(O))for(let k=0;k<O.length;k++){const K=O[k];Ie(K,y,P),C.add(K)}else Ie(O,y,P),C.add(O)}),w.pop(),m=null,C},this.compileAsync=function(h,x,y=null){const C=this.compile(h,x,y);return new Promise(P=>{function O(){if(C.forEach(function(k){Ne.get(k).currentProgram.isReady()&&C.delete(k)}),C.size===0){P(h);return}setTimeout(O,10)}Oe.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Xe=null;function rt(h){Xe&&Xe(h)}function De(){Ye.stop()}function nt(){Ye.start()}const Ye=new dm;Ye.setAnimationLoop(rt),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(h){Xe=h,re.setAnimationLoop(h),h===null?Ye.stop():Ye.start()},re.addEventListener("sessionstart",De),re.addEventListener("sessionend",nt),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(x),x=re.getCamera()),h.isScene===!0&&h.onBeforeRender(S,h,x,I),m=Ge.get(h,w.length),m.init(x),w.push(m),Re.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),ie.setFromProjectionMatrix(Re),ge=this.localClippingEnabled,ue=fe.init(this.clippingPlanes,ge),_=he.get(h,b.length),_.init(),b.push(_),re.enabled===!0&&re.isPresenting===!0){const O=S.xr.getDepthSensingMesh();O!==null&&tt(O,x,-1/0,S.sortObjects)}tt(h,x,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(le,N),Pe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Pe&&Se.addToRenderList(_,h),this.info.render.frame++,ue===!0&&fe.beginShadows();const y=m.state.shadowsArray;me.render(y,h,x),ue===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const C=_.opaque,P=_.transmissive;if(m.setupLights(),x.isArrayCamera){const O=x.cameras;if(P.length>0)for(let k=0,K=O.length;k<K;k++){const q=O[k];ot(C,P,h,q)}Pe&&Se.render(h);for(let k=0,K=O.length;k<K;k++){const q=O[k];Bt(_,h,q,q.viewport)}}else P.length>0&&ot(C,P,h,x),Pe&&Se.render(h),Bt(_,h,x);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),h.isScene===!0&&h.onAfterRender(S,h,x),$e.resetDefaultState(),T=-1,M=null,w.pop(),w.length>0?(m=w[w.length-1],ue===!0&&fe.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function tt(h,x,y,C){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)y=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)m.pushLight(h),h.castShadow&&m.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||ie.intersectsSprite(h)){C&&Ze.setFromMatrixPosition(h.matrixWorld).applyMatrix4(Re);const k=Y.update(h),K=h.material;K.visible&&_.push(h,k,K,y,Ze.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||ie.intersectsObject(h))){const k=Y.update(h),K=h.material;if(C&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Ze.copy(h.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),Ze.copy(k.boundingSphere.center)),Ze.applyMatrix4(h.matrixWorld).applyMatrix4(Re)),Array.isArray(K)){const q=k.groups;for(let ee=0,te=q.length;ee<te;ee++){const oe=q[ee],_e=K[oe.materialIndex];_e&&_e.visible&&_.push(h,k,_e,y,Ze.z,oe)}}else K.visible&&_.push(h,k,K,y,Ze.z,null)}}const O=h.children;for(let k=0,K=O.length;k<K;k++)tt(O[k],x,y,C)}function Bt(h,x,y,C){const P=h.opaque,O=h.transmissive,k=h.transparent;m.setupLightsView(y),ue===!0&&fe.setGlobalState(S.clippingPlanes,y),C&&Be.viewport(U.copy(C)),P.length>0&&Pt(P,x,y),O.length>0&&Pt(O,x,y),k.length>0&&Pt(k,x,y),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function ot(h,x,y,C){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[C.id]===void 0&&(m.state.transmissionRenderTarget[C.id]=new us(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?ji:rr,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const O=m.state.transmissionRenderTarget[C.id],k=C.viewport||U;O.setSize(k.z,k.w);const K=S.getRenderTarget();S.setRenderTarget(O),S.getClearColor(Z),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),Pe&&Se.render(y);const q=S.toneMapping;S.toneMapping=er;const ee=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),m.setupLightsView(C),ue===!0&&fe.setGlobalState(S.clippingPlanes,C),Pt(h,y,C),R.updateMultisampleRenderTarget(O),R.updateRenderTargetMipmap(O),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let oe=0,_e=x.length;oe<_e;oe++){const ve=x[oe],Ae=ve.object,ye=ve.geometry,Ee=ve.material,xe=ve.group;if(Ee.side===Ri&&Ae.layers.test(C.layers)){const ht=Ee.side;Ee.side=Hn,Ee.needsUpdate=!0,Yt(Ae,y,C,ye,Ee,xe),Ee.side=ht,Ee.needsUpdate=!0,te=!0}}te===!0&&(R.updateMultisampleRenderTarget(O),R.updateRenderTargetMipmap(O))}S.setRenderTarget(K),S.setClearColor(Z,J),ee!==void 0&&(C.viewport=ee),S.toneMapping=q}function Pt(h,x,y){const C=x.isScene===!0?x.overrideMaterial:null;for(let P=0,O=h.length;P<O;P++){const k=h[P],K=k.object,q=k.geometry,ee=C===null?k.material:C,te=k.group;K.layers.test(y.layers)&&Yt(K,x,y,q,ee,te)}}function Yt(h,x,y,C,P,O){h.onBeforeRender(S,x,y,C,P,O),h.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),P.onBeforeRender(S,x,y,C,h,O),P.transparent===!0&&P.side===Ri&&P.forceSinglePass===!1?(P.side=Hn,P.needsUpdate=!0,S.renderBufferDirect(y,x,C,P,h,O),P.side=Dr,P.needsUpdate=!0,S.renderBufferDirect(y,x,C,P,h,O),P.side=Ri):S.renderBufferDirect(y,x,C,P,h,O),h.onAfterRender(S,x,y,C,P,O)}function bt(h,x,y){x.isScene!==!0&&(x=Ke);const C=Ne.get(h),P=m.state.lights,O=m.state.shadowsArray,k=P.state.version,K=de.getParameters(h,P.state,O,x,y),q=de.getProgramCacheKey(K);let ee=C.programs;C.environment=h.isMeshStandardMaterial?x.environment:null,C.fog=x.fog,C.envMap=(h.isMeshStandardMaterial?W:E).get(h.envMap||C.environment),C.envMapRotation=C.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,ee===void 0&&(h.addEventListener("dispose",et),ee=new Map,C.programs=ee);let te=ee.get(q);if(te!==void 0){if(C.currentProgram===te&&C.lightsStateVersion===k)return St(h,K),te}else K.uniforms=de.getUniforms(h),h.onBeforeCompile(K,S),te=de.acquireProgram(K,q),ee.set(q,te),C.uniforms=K.uniforms;const oe=C.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(oe.clippingPlanes=fe.uniform),St(h,K),C.needsLights=Wt(h),C.lightsStateVersion=k,C.needsLights&&(oe.ambientLightColor.value=P.state.ambient,oe.lightProbe.value=P.state.probe,oe.directionalLights.value=P.state.directional,oe.directionalLightShadows.value=P.state.directionalShadow,oe.spotLights.value=P.state.spot,oe.spotLightShadows.value=P.state.spotShadow,oe.rectAreaLights.value=P.state.rectArea,oe.ltc_1.value=P.state.rectAreaLTC1,oe.ltc_2.value=P.state.rectAreaLTC2,oe.pointLights.value=P.state.point,oe.pointLightShadows.value=P.state.pointShadow,oe.hemisphereLights.value=P.state.hemi,oe.directionalShadowMap.value=P.state.directionalShadowMap,oe.directionalShadowMatrix.value=P.state.directionalShadowMatrix,oe.spotShadowMap.value=P.state.spotShadowMap,oe.spotLightMatrix.value=P.state.spotLightMatrix,oe.spotLightMap.value=P.state.spotLightMap,oe.pointShadowMap.value=P.state.pointShadowMap,oe.pointShadowMatrix.value=P.state.pointShadowMatrix),C.currentProgram=te,C.uniformsList=null,te}function Tt(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=al.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function St(h,x){const y=Ne.get(h);y.outputColorSpace=x.outputColorSpace,y.batching=x.batching,y.batchingColor=x.batchingColor,y.instancing=x.instancing,y.instancingColor=x.instancingColor,y.instancingMorph=x.instancingMorph,y.skinning=x.skinning,y.morphTargets=x.morphTargets,y.morphNormals=x.morphNormals,y.morphColors=x.morphColors,y.morphTargetsCount=x.morphTargetsCount,y.numClippingPlanes=x.numClippingPlanes,y.numIntersection=x.numClipIntersection,y.vertexAlphas=x.vertexAlphas,y.vertexTangents=x.vertexTangents,y.toneMapping=x.toneMapping}function Mn(h,x,y,C,P){x.isScene!==!0&&(x=Ke),R.resetTextureUnits();const O=x.fog,k=C.isMeshStandardMaterial?x.environment:null,K=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:sr,q=(C.isMeshStandardMaterial?W:E).get(C.envMap||k),ee=C.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,te=!!y.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),oe=!!y.morphAttributes.position,_e=!!y.morphAttributes.normal,ve=!!y.morphAttributes.color;let Ae=er;C.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ae=S.toneMapping);const ye=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,Ee=ye!==void 0?ye.length:0,xe=Ne.get(C),ht=m.state.lights;if(ue===!0&&(ge===!0||h!==M)){const lt=h===M&&C.id===T;fe.setState(C,h,lt)}let Qe=!1;C.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==ht.state.version||xe.outputColorSpace!==K||P.isBatchedMesh&&xe.batching===!1||!P.isBatchedMesh&&xe.batching===!0||P.isBatchedMesh&&xe.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&xe.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&xe.instancing===!1||!P.isInstancedMesh&&xe.instancing===!0||P.isSkinnedMesh&&xe.skinning===!1||!P.isSkinnedMesh&&xe.skinning===!0||P.isInstancedMesh&&xe.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&xe.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&xe.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&xe.instancingMorph===!1&&P.morphTexture!==null||xe.envMap!==q||C.fog===!0&&xe.fog!==O||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==fe.numPlanes||xe.numIntersection!==fe.numIntersection)||xe.vertexAlphas!==ee||xe.vertexTangents!==te||xe.morphTargets!==oe||xe.morphNormals!==_e||xe.morphColors!==ve||xe.toneMapping!==Ae||xe.morphTargetsCount!==Ee)&&(Qe=!0):(Qe=!0,xe.__version=C.version);let Ut=xe.currentProgram;Qe===!0&&(Ut=bt(C,x,P));let Et=!1,it=!1,Nt=!1;const ft=Ut.getUniforms(),At=xe.uniforms;if(Be.useProgram(Ut.program)&&(Et=!0,it=!0,Nt=!0),C.id!==T&&(T=C.id,it=!0),Et||M!==h){Be.buffers.depth.getReversed()?(pe.copy(h.projectionMatrix),M0(pe),y0(pe),ft.setValue(F,"projectionMatrix",pe)):ft.setValue(F,"projectionMatrix",h.projectionMatrix),ft.setValue(F,"viewMatrix",h.matrixWorldInverse);const rn=ft.map.cameraPosition;rn!==void 0&&rn.setValue(F,He.setFromMatrixPosition(h.matrixWorld)),G.logarithmicDepthBuffer&&ft.setValue(F,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&ft.setValue(F,"isOrthographic",h.isOrthographicCamera===!0),M!==h&&(M=h,it=!0,Nt=!0)}if(P.isSkinnedMesh){ft.setOptional(F,P,"bindMatrix"),ft.setOptional(F,P,"bindMatrixInverse");const lt=P.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ft.setValue(F,"boneTexture",lt.boneTexture,R))}P.isBatchedMesh&&(ft.setOptional(F,P,"batchingTexture"),ft.setValue(F,"batchingTexture",P._matricesTexture,R),ft.setOptional(F,P,"batchingIdTexture"),ft.setValue(F,"batchingIdTexture",P._indirectTexture,R),ft.setOptional(F,P,"batchingColorTexture"),P._colorsTexture!==null&&ft.setValue(F,"batchingColorTexture",P._colorsTexture,R));const _t=y.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&we.update(P,y,Ut),(it||xe.receiveShadow!==P.receiveShadow)&&(xe.receiveShadow=P.receiveShadow,ft.setValue(F,"receiveShadow",P.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(At.envMap.value=q,At.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1),C.isMeshStandardMaterial&&C.envMap===null&&x.environment!==null&&(At.envMapIntensity.value=x.environmentIntensity),it&&(ft.setValue(F,"toneMappingExposure",S.toneMappingExposure),xe.needsLights&&Mt(At,Nt),O&&C.fog===!0&&ne.refreshFogUniforms(At,O),ne.refreshMaterialUniforms(At,C,H,X,m.state.transmissionRenderTarget[h.id]),al.upload(F,Tt(xe),At,R)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(al.upload(F,Tt(xe),At,R),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&ft.setValue(F,"center",P.center),ft.setValue(F,"modelViewMatrix",P.modelViewMatrix),ft.setValue(F,"normalMatrix",P.normalMatrix),ft.setValue(F,"modelMatrix",P.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){const lt=C.uniformsGroups;for(let rn=0,In=lt.length;rn<In;rn++){const Gn=lt[rn];B.update(Gn,Ut),B.bind(Gn,Ut)}}return Ut}function Mt(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function Wt(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(h,x,y){Ne.get(h.texture).__webglTexture=x,Ne.get(h.depthTexture).__webglTexture=y;const C=Ne.get(h);C.__hasExternalTextures=!0,C.__autoAllocateDepthBuffer=y===void 0,C.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),C.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const y=Ne.get(h);y.__webglFramebuffer=x,y.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,y=0){I=h,D=x,A=y;let C=!0,P=null,O=!1,k=!1;if(h){const q=Ne.get(h);if(q.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(F.FRAMEBUFFER,null),C=!1;else if(q.__webglFramebuffer===void 0)R.setupRenderTarget(h);else if(q.__hasExternalTextures)R.rebindTextures(h,Ne.get(h.texture).__webglTexture,Ne.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const oe=h.depthTexture;if(q.__boundDepthTexture!==oe){if(oe!==null&&Ne.has(oe)&&(h.width!==oe.image.width||h.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(h)}}const ee=h.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(k=!0);const te=Ne.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(te[x])?P=te[x][y]:P=te[x],O=!0):h.samples>0&&R.useMultisampledRTT(h)===!1?P=Ne.get(h).__webglMultisampledFramebuffer:Array.isArray(te)?P=te[y]:P=te,U.copy(h.viewport),z.copy(h.scissor),V=h.scissorTest}else U.copy(Me).multiplyScalar(H).floor(),z.copy(Fe).multiplyScalar(H).floor(),V=Je;if(Be.bindFramebuffer(F.FRAMEBUFFER,P)&&C&&Be.drawBuffers(h,P),Be.viewport(U),Be.scissor(z),Be.setScissorTest(V),O){const q=Ne.get(h.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,q.__webglTexture,y)}else if(k){const q=Ne.get(h.texture),ee=x||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.__webglTexture,y||0,ee)}T=-1},this.readRenderTargetPixels=function(h,x,y,C,P,O,k){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let K=Ne.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&k!==void 0&&(K=K[k]),K){Be.bindFramebuffer(F.FRAMEBUFFER,K);try{const q=h.texture,ee=q.format,te=q.type;if(!G.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-C&&y>=0&&y<=h.height-P&&F.readPixels(x,y,C,P,ze.convert(ee),ze.convert(te),O)}finally{const q=I!==null?Ne.get(I).__webglFramebuffer:null;Be.bindFramebuffer(F.FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(h,x,y,C,P,O,k){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let K=Ne.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&k!==void 0&&(K=K[k]),K){const q=h.texture,ee=q.format,te=q.type;if(!G.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-C&&y>=0&&y<=h.height-P){Be.bindFramebuffer(F.FRAMEBUFFER,K);const oe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,oe),F.bufferData(F.PIXEL_PACK_BUFFER,O.byteLength,F.STREAM_READ),F.readPixels(x,y,C,P,ze.convert(ee),ze.convert(te),0);const _e=I!==null?Ne.get(I).__webglFramebuffer:null;Be.bindFramebuffer(F.FRAMEBUFFER,_e);const ve=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await S0(F,ve,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,oe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,O),F.deleteBuffer(oe),F.deleteSync(ve),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,y=0){h.isTexture!==!0&&(Ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const C=Math.pow(2,-y),P=Math.floor(h.image.width*C),O=Math.floor(h.image.height*C),k=x!==null?x.x:0,K=x!==null?x.y:0;R.setTexture2D(h,0),F.copyTexSubImage2D(F.TEXTURE_2D,y,0,0,k,K,P,O),Be.unbindTexture()},this.copyTextureToTexture=function(h,x,y=null,C=null,P=0){h.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture function signature has changed."),C=arguments[0]||null,h=arguments[1],x=arguments[2],P=arguments[3]||0,y=null);let O,k,K,q,ee,te,oe,_e,ve;const Ae=h.isCompressedTexture?h.mipmaps[P]:h.image;y!==null?(O=y.max.x-y.min.x,k=y.max.y-y.min.y,K=y.isBox3?y.max.z-y.min.z:1,q=y.min.x,ee=y.min.y,te=y.isBox3?y.min.z:0):(O=Ae.width,k=Ae.height,K=Ae.depth||1,q=0,ee=0,te=0),C!==null?(oe=C.x,_e=C.y,ve=C.z):(oe=0,_e=0,ve=0);const ye=ze.convert(x.format),Ee=ze.convert(x.type);let xe;x.isData3DTexture?(R.setTexture3D(x,0),xe=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(R.setTexture2DArray(x,0),xe=F.TEXTURE_2D_ARRAY):(R.setTexture2D(x,0),xe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);const ht=F.getParameter(F.UNPACK_ROW_LENGTH),Qe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ut=F.getParameter(F.UNPACK_SKIP_PIXELS),Et=F.getParameter(F.UNPACK_SKIP_ROWS),it=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,q),F.pixelStorei(F.UNPACK_SKIP_ROWS,ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,te);const Nt=h.isDataArrayTexture||h.isData3DTexture,ft=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const At=Ne.get(h),_t=Ne.get(x),lt=Ne.get(At.__renderTarget),rn=Ne.get(_t.__renderTarget);Be.bindFramebuffer(F.READ_FRAMEBUFFER,lt.__webglFramebuffer),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let In=0;In<K;In++)Nt&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.get(h).__webglTexture,P,te+In),h.isDepthTexture?(ft&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.get(x).__webglTexture,P,ve+In),F.blitFramebuffer(q,ee,O,k,oe,_e,O,k,F.DEPTH_BUFFER_BIT,F.NEAREST)):ft?F.copyTexSubImage3D(xe,P,oe,_e,ve+In,q,ee,O,k):F.copyTexSubImage2D(xe,P,oe,_e,ve+In,q,ee,O,k);Be.bindFramebuffer(F.READ_FRAMEBUFFER,null),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ft?h.isDataTexture||h.isData3DTexture?F.texSubImage3D(xe,P,oe,_e,ve,O,k,K,ye,Ee,Ae.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(xe,P,oe,_e,ve,O,k,K,ye,Ae.data):F.texSubImage3D(xe,P,oe,_e,ve,O,k,K,ye,Ee,Ae):h.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,P,oe,_e,O,k,ye,Ee,Ae.data):h.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,P,oe,_e,Ae.width,Ae.height,ye,Ae.data):F.texSubImage2D(F.TEXTURE_2D,P,oe,_e,O,k,ye,Ee,Ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),F.pixelStorei(F.UNPACK_SKIP_ROWS,Et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,it),P===0&&x.generateMipmaps&&F.generateMipmap(xe),Be.unbindTexture()},this.copyTextureToTexture3D=function(h,x,y=null,C=null,P=0){return h.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),y=arguments[0]||null,C=arguments[1]||null,h=arguments[2],x=arguments[3],P=arguments[4]||0),Ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,y,C,P)},this.initRenderTarget=function(h){Ne.get(h).__webglFramebuffer===void 0&&R.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?R.setTextureCube(h,0):h.isData3DTexture?R.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?R.setTexture2DArray(h,0):R.setTexture2D(h,0),Be.unbindTexture()},this.resetState=function(){D=0,A=0,I=null,Be.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}class Sm extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mm extends fn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Dn,u=Dn,f,d){super(null,o,a,l,c,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo extends oi{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Oy extends fn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sh extends Oi{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new j,f=new j,d=new j;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*s,_=p/n*Math.PI*2;f.x=(e+t*Math.cos(_))*Math.cos(v),f.y=(e+t*Math.cos(_))*Math.sin(v),f.z=t*Math.sin(_),a.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,_=(i+1)*(p-1)+g-1,m=(i+1)*(p-1)+g,b=(i+1)*p+g;o.push(v,_,b),o.push(_,m,b)}this.setIndex(o),this.setAttribute("position",new Ii(a,3)),this.setAttribute("normal",new Ii(l,3)),this.setAttribute("uv",new Ii(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}const El={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Fy{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const By=new Fy;class ra{constructor(e){this.manager=e!==void 0?e:By,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ra.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gi={};class zy extends Error{constructor(e,t){super(e),this.response=t}}class ky extends ra{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=El.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:i});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const _=new ReadableStream({start(m){b();function b(){f.read().then(({done:w,value:S})=>{if(w)m.close();else{v+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let D=0,A=u.length;D<A;D++){const I=u[D];I.onProgress&&I.onProgress(L)}m.enqueue(S),b()}},w=>{m.error(w)})}}});return new Response(_)}else throw new zy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{El.add(e,c);const u=Gi[e];delete Gi[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Gi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hy extends ra{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=El.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ea("img");function l(){u(),El.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Vy extends ra{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Mm,a=new ky(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ki,o.wrapT=c.wrapT!==void 0?c.wrapT:Ki,o.magFilter=c.magFilter!==void 0?c.magFilter:un,o.minFilter=c.minFilter!==void 0?c.minFilter:un,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=yr),c.mipmapCount===1&&(o.minFilter=un),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Ga extends ra{constructor(e){super(e)}load(e,t,n,i){const s=new fn,o=new Hy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ad extends Oi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var di=Uint8Array,Os=Uint16Array,Gy=Int32Array,ym=new di([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Em=new di([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Wy=new di([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tm=function(r,e){for(var t=new Os(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new Gy(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},wm=Tm(ym,2),bm=wm.b,Xy=wm.r;bm[28]=258,Xy[258]=28;var Yy=Tm(Em,0),qy=Yy.b,Fu=new Os(32768);for(var Ot=0;Ot<32768;++Ot){var pr=(Ot&43690)>>1|(Ot&21845)<<1;pr=(pr&52428)>>2|(pr&13107)<<2,pr=(pr&61680)>>4|(pr&3855)<<4,Fu[Ot]=((pr&65280)>>8|(pr&255)<<8)>>1}var Vo=(function(r,e,t){for(var n=r.length,i=0,s=new Os(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new Os(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new Os(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],u=e-r[i],f=o[r[i]-1]++<<u,d=f|(1<<u)-1;f<=d;++f)a[Fu[f]>>l]=c}else for(a=new Os(n),i=0;i<n;++i)r[i]&&(a[i]=Fu[o[r[i]-1]++]>>15-r[i]);return a}),sa=new di(288);for(var Ot=0;Ot<144;++Ot)sa[Ot]=8;for(var Ot=144;Ot<256;++Ot)sa[Ot]=9;for(var Ot=256;Ot<280;++Ot)sa[Ot]=7;for(var Ot=280;Ot<288;++Ot)sa[Ot]=8;var Am=new di(32);for(var Ot=0;Ot<32;++Ot)Am[Ot]=5;var $y=Vo(sa,9,1),Zy=Vo(Am,5,1),yc=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Mi=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Ec=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},Ky=function(r){return(r+7)/8|0},jy=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new di(r.subarray(e,t))},Jy=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ei=function(r,e,t){var n=new Error(e||Jy[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,Ei),!t)throw n;return n},Qy=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new di(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new di(i*3));var c=function(Ke){var Pe=t.length;if(Ke>Pe){var ke=new di(Math.max(Pe*2,Ke));ke.set(t),t=ke}},u=e.f||0,f=e.p||0,d=e.b||0,p=e.l,g=e.d,v=e.m,_=e.n,m=i*8;do{if(!p){u=Mi(r,f,1);var b=Mi(r,f+1,3);if(f+=3,b)if(b==1)p=$y,g=Zy,v=9,_=5;else if(b==2){var D=Mi(r,f,31)+257,A=Mi(r,f+10,15)+4,I=D+Mi(r,f+5,31)+1;f+=14;for(var T=new di(I),M=new di(19),U=0;U<A;++U)M[Wy[U]]=Mi(r,f+U*3,7);f+=A*3;for(var z=yc(M),V=(1<<z)-1,Z=Vo(M,z,1),U=0;U<I;){var J=Z[Mi(r,f,V)];f+=J&15;var w=J>>4;if(w<16)T[U++]=w;else{var $=0,X=0;for(w==16?(X=3+Mi(r,f,3),f+=2,$=T[U-1]):w==17?(X=3+Mi(r,f,7),f+=3):w==18&&(X=11+Mi(r,f,127),f+=7);X--;)T[U++]=$}}var H=T.subarray(0,D),le=T.subarray(D);v=yc(H),_=yc(le),p=Vo(H,v,1),g=Vo(le,_,1)}else Ei(1);else{var w=Ky(f)+4,S=r[w-4]|r[w-3]<<8,L=w+S;if(L>i){l&&Ei(0);break}a&&c(d+S),t.set(r.subarray(w,L),d),e.b=d+=S,e.p=f=L*8,e.f=u;continue}if(f>m){l&&Ei(0);break}}a&&c(d+131072);for(var N=(1<<v)-1,Me=(1<<_)-1,Fe=f;;Fe=f){var $=p[Ec(r,f)&N],Je=$>>4;if(f+=$&15,f>m){l&&Ei(0);break}if($||Ei(2),Je<256)t[d++]=Je;else if(Je==256){Fe=f,p=null;break}else{var ie=Je-254;if(Je>264){var U=Je-257,ue=ym[U];ie=Mi(r,f,(1<<ue)-1)+bm[U],f+=ue}var ge=g[Ec(r,f)&Me],pe=ge>>4;ge||Ei(3),f+=ge&15;var le=qy[pe];if(pe>3){var ue=Em[pe];le+=Ec(r,f)&(1<<ue)-1,f+=ue}if(f>m){l&&Ei(0);break}a&&c(d+131072);var Re=d+ie;if(d<le){var He=s-le,Ze=Math.min(le,Re);for(He+d<0&&Ei(3);d<Ze;++d)t[d]=n[He+d]}for(;d<Re;++d)t[d]=t[d-le]}}e.l=p,e.p=Fe,e.b=d,e.f=u,p&&(u=1,e.m=v,e.d=g,e.n=_)}while(!u);return d!=t.length&&o?jy(t,0,d):t.subarray(0,d)},eE=new di(0),tE=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&Ei(6,"invalid zlib data"),(r[1]>>5&1)==1&&Ei(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function Wa(r,e){return Qy(r.subarray(tE(r),-4),{i:2},e,e)}var nE=typeof TextDecoder<"u"&&new TextDecoder,iE=0;try{nE.decode(eE,{stream:!0}),iE=1}catch{}class rE extends Vy{constructor(e){super(e),this.type=ji}parse(e){const T=Math.pow(2.7182818,2.2);function M(h,x){let y=0;for(let P=0;P<65536;++P)(P==0||h[P>>3]&1<<(P&7))&&(x[y++]=P);const C=y-1;for(;y<65536;)x[y++]=0;return C}function U(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const z={l:0,c:0,lc:0};function V(h,x,y,C,P){for(;y<h;)x=x<<8|Te(C,P),y+=8;y-=h,z.l=x>>y&(1<<h)-1,z.c=x,z.lc=y}const Z=new Array(59);function J(h){for(let y=0;y<=58;++y)Z[y]=0;for(let y=0;y<65537;++y)Z[h[y]]+=1;let x=0;for(let y=58;y>0;--y){const C=x+Z[y]>>1;Z[y]=x,x=C}for(let y=0;y<65537;++y){const C=h[y];C>0&&(h[y]=C|Z[C]++<<6)}}function $(h,x,y,C,P,O){const k=x;let K=0,q=0;for(;C<=P;C++){if(k.value-x.value>y)return!1;V(6,K,q,h,k);const ee=z.l;if(K=z.c,q=z.lc,O[C]=ee,ee==63){if(k.value-x.value>y)throw new Error("Something wrong with hufUnpackEncTable");V(8,K,q,h,k);let te=z.l+6;if(K=z.c,q=z.lc,C+te>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;te--;)O[C++]=0;C--}else if(ee>=59){let te=ee-59+2;if(C+te>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;te--;)O[C++]=0;C--}}J(O)}function X(h){return h&63}function H(h){return h>>6}function le(h,x,y,C){for(;x<=y;x++){const P=H(h[x]),O=X(h[x]);if(P>>O)throw new Error("Invalid table entry");if(O>14){const k=C[P>>O-14];if(k.len)throw new Error("Invalid table entry");if(k.lit++,k.p){const K=k.p;k.p=new Array(k.lit);for(let q=0;q<k.lit-1;++q)k.p[q]=K[q]}else k.p=new Array(1);k.p[k.lit-1]=x}else if(O){let k=0;for(let K=1<<14-O;K>0;K--){const q=C[(P<<14-O)+k];if(q.len||q.p)throw new Error("Invalid table entry");q.len=O,q.lit=x,k++}}}return!0}const N={c:0,lc:0};function Me(h,x,y,C){h=h<<8|Te(y,C),x+=8,N.c=h,N.lc=x}const Fe={c:0,lc:0};function Je(h,x,y,C,P,O,k,K,q){if(h==x){C<8&&(Me(y,C,P,O),y=N.c,C=N.lc),C-=8;let ee=y>>C;if(ee=new Uint8Array([ee])[0],K.value+ee>q)return!1;const te=k[K.value-1];for(;ee-- >0;)k[K.value++]=te}else if(K.value<q)k[K.value++]=h;else return!1;Fe.c=y,Fe.lc=C}function ie(h){return h&65535}function ue(h){const x=ie(h);return x>32767?x-65536:x}const ge={a:0,b:0};function pe(h,x){const y=ue(h),P=ue(x),O=y+(P&1)+(P>>1),k=O,K=O-P;ge.a=k,ge.b=K}function Re(h,x){const y=ie(h),C=ie(x),P=y-(C>>1)&65535,O=C+P-32768&65535;ge.a=O,ge.b=P}function He(h,x,y,C,P,O,k){const K=k<16384,q=y>P?P:y;let ee=1,te,oe;for(;ee<=q;)ee<<=1;for(ee>>=1,te=ee,ee>>=1;ee>=1;){oe=0;const _e=oe+O*(P-te),ve=O*ee,Ae=O*te,ye=C*ee,Ee=C*te;let xe,ht,Qe,Ut;for(;oe<=_e;oe+=Ae){let Et=oe;const it=oe+C*(y-te);for(;Et<=it;Et+=Ee){const Nt=Et+ye,ft=Et+ve,At=ft+ye;K?(pe(h[Et+x],h[ft+x]),xe=ge.a,Qe=ge.b,pe(h[Nt+x],h[At+x]),ht=ge.a,Ut=ge.b,pe(xe,ht),h[Et+x]=ge.a,h[Nt+x]=ge.b,pe(Qe,Ut),h[ft+x]=ge.a,h[At+x]=ge.b):(Re(h[Et+x],h[ft+x]),xe=ge.a,Qe=ge.b,Re(h[Nt+x],h[At+x]),ht=ge.a,Ut=ge.b,Re(xe,ht),h[Et+x]=ge.a,h[Nt+x]=ge.b,Re(Qe,Ut),h[ft+x]=ge.a,h[At+x]=ge.b)}if(y&ee){const Nt=Et+ve;K?pe(h[Et+x],h[Nt+x]):Re(h[Et+x],h[Nt+x]),xe=ge.a,h[Nt+x]=ge.b,h[Et+x]=xe}}if(P&ee){let Et=oe;const it=oe+C*(y-te);for(;Et<=it;Et+=Ee){const Nt=Et+ye;K?pe(h[Et+x],h[Nt+x]):Re(h[Et+x],h[Nt+x]),xe=ge.a,h[Nt+x]=ge.b,h[Et+x]=xe}}te=ee,ee>>=1}return oe}function Ze(h,x,y,C,P,O,k,K,q){let ee=0,te=0;const oe=k,_e=Math.trunc(C.value+(P+7)/8);for(;C.value<_e;)for(Me(ee,te,y,C),ee=N.c,te=N.lc;te>=14;){const Ae=ee>>te-14&16383,ye=x[Ae];if(ye.len)te-=ye.len,Je(ye.lit,O,ee,te,y,C,K,q,oe),ee=Fe.c,te=Fe.lc;else{if(!ye.p)throw new Error("hufDecode issues");let Ee;for(Ee=0;Ee<ye.lit;Ee++){const xe=X(h[ye.p[Ee]]);for(;te<xe&&C.value<_e;)Me(ee,te,y,C),ee=N.c,te=N.lc;if(te>=xe&&H(h[ye.p[Ee]])==(ee>>te-xe&(1<<xe)-1)){te-=xe,Je(ye.p[Ee],O,ee,te,y,C,K,q,oe),ee=Fe.c,te=Fe.lc;break}}if(Ee==ye.lit)throw new Error("hufDecode issues")}}const ve=8-P&7;for(ee>>=ve,te-=ve;te>0;){const Ae=x[ee<<14-te&16383];if(Ae.len)te-=Ae.len,Je(Ae.lit,O,ee,te,y,C,K,q,oe),ee=Fe.c,te=Fe.lc;else throw new Error("hufDecode issues")}return!0}function Ke(h,x,y,C,P,O){const k={value:0},K=y.value,q=we(x,y),ee=we(x,y);y.value+=4;const te=we(x,y);if(y.value+=4,q<0||q>=65537||ee<0||ee>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const oe=new Array(65537),_e=new Array(16384);U(_e);const ve=C-(y.value-K);if($(h,y,ve,q,ee,oe),te>8*(C-(y.value-K)))throw new Error("Something wrong with hufUncompress");le(oe,q,ee,_e),Ze(oe,_e,h,y,te,ee,O,P,k)}function Pe(h,x,y){for(let C=0;C<y;++C)x[C]=h[x[C]]}function ke(h){for(let x=1;x<h.length;x++){const y=h[x-1]+h[x]-128;h[x]=y}}function F(h,x){let y=0,C=Math.floor((h.length+1)/2),P=0;const O=h.length-1;for(;!(P>O||(x[P++]=h[y++],P>O));)x[P++]=h[C++]}function Ue(h){let x=h.byteLength;const y=new Array;let C=0;const P=new DataView(h);for(;x>0;){const O=P.getInt8(C++);if(O<0){const k=-O;x-=k+1;for(let K=0;K<k;K++)y.push(P.getUint8(C++))}else{const k=O;x-=2;const K=P.getUint8(C++);for(let q=0;q<k+1;q++)y.push(K)}}return y}function Oe(h,x,y,C,P,O){let k=new DataView(O.buffer);const K=y[h.idx[0]].width,q=y[h.idx[0]].height,ee=3,te=Math.floor(K/8),oe=Math.ceil(K/8),_e=Math.ceil(q/8),ve=K-(oe-1)*8,Ae=q-(_e-1)*8,ye={value:0},Ee=new Array(ee),xe=new Array(ee),ht=new Array(ee),Qe=new Array(ee),Ut=new Array(ee);for(let it=0;it<ee;++it)Ut[it]=x[h.idx[it]],Ee[it]=it<1?0:Ee[it-1]+oe*_e,xe[it]=new Float32Array(64),ht[it]=new Uint16Array(64),Qe[it]=new Uint16Array(oe*64);for(let it=0;it<_e;++it){let Nt=8;it==_e-1&&(Nt=Ae);let ft=8;for(let _t=0;_t<oe;++_t){_t==oe-1&&(ft=ve);for(let lt=0;lt<ee;++lt)ht[lt].fill(0),ht[lt][0]=P[Ee[lt]++],G(ye,C,ht[lt]),Be(ht[lt],xe[lt]),je(xe[lt]);Ne(xe);for(let lt=0;lt<ee;++lt)R(xe[lt],Qe[lt],_t*64)}let At=0;for(let _t=0;_t<ee;++_t){const lt=y[h.idx[_t]].type;for(let rn=8*it;rn<8*it+Nt;++rn){At=Ut[_t][rn];for(let In=0;In<te;++In){const Gn=In*64+(rn&7)*8;k.setUint16(At+0*lt,Qe[_t][Gn+0],!0),k.setUint16(At+2*lt,Qe[_t][Gn+1],!0),k.setUint16(At+4*lt,Qe[_t][Gn+2],!0),k.setUint16(At+6*lt,Qe[_t][Gn+3],!0),k.setUint16(At+8*lt,Qe[_t][Gn+4],!0),k.setUint16(At+10*lt,Qe[_t][Gn+5],!0),k.setUint16(At+12*lt,Qe[_t][Gn+6],!0),k.setUint16(At+14*lt,Qe[_t][Gn+7],!0),At+=16*lt}}if(te!=oe)for(let rn=8*it;rn<8*it+Nt;++rn){const In=Ut[_t][rn]+8*te*2*lt,Gn=te*64+(rn&7)*8;for(let aa=0;aa<ft;++aa)k.setUint16(In+aa*2*lt,Qe[_t][Gn+aa],!0)}}}const Et=new Uint16Array(K);k=new DataView(O.buffer);for(let it=0;it<ee;++it){y[h.idx[it]].decoded=!0;const Nt=y[h.idx[it]].type;if(y[it].type==2)for(let ft=0;ft<q;++ft){const At=Ut[it][ft];for(let _t=0;_t<K;++_t)Et[_t]=k.getUint16(At+_t*2*Nt,!0);for(let _t=0;_t<K;++_t)k.setFloat32(At+_t*2*Nt,Q(Et[_t]),!0)}}}function G(h,x,y){let C,P=1;for(;P<64;)C=x[h.value],C==65280?P=64:C>>8==255?P+=C&255:(y[P]=C,P++),h.value++}function Be(h,x){x[0]=Q(h[0]),x[1]=Q(h[1]),x[2]=Q(h[5]),x[3]=Q(h[6]),x[4]=Q(h[14]),x[5]=Q(h[15]),x[6]=Q(h[27]),x[7]=Q(h[28]),x[8]=Q(h[2]),x[9]=Q(h[4]),x[10]=Q(h[7]),x[11]=Q(h[13]),x[12]=Q(h[16]),x[13]=Q(h[26]),x[14]=Q(h[29]),x[15]=Q(h[42]),x[16]=Q(h[3]),x[17]=Q(h[8]),x[18]=Q(h[12]),x[19]=Q(h[17]),x[20]=Q(h[25]),x[21]=Q(h[30]),x[22]=Q(h[41]),x[23]=Q(h[43]),x[24]=Q(h[9]),x[25]=Q(h[11]),x[26]=Q(h[18]),x[27]=Q(h[24]),x[28]=Q(h[31]),x[29]=Q(h[40]),x[30]=Q(h[44]),x[31]=Q(h[53]),x[32]=Q(h[10]),x[33]=Q(h[19]),x[34]=Q(h[23]),x[35]=Q(h[32]),x[36]=Q(h[39]),x[37]=Q(h[45]),x[38]=Q(h[52]),x[39]=Q(h[54]),x[40]=Q(h[20]),x[41]=Q(h[22]),x[42]=Q(h[33]),x[43]=Q(h[38]),x[44]=Q(h[46]),x[45]=Q(h[51]),x[46]=Q(h[55]),x[47]=Q(h[60]),x[48]=Q(h[21]),x[49]=Q(h[34]),x[50]=Q(h[37]),x[51]=Q(h[47]),x[52]=Q(h[50]),x[53]=Q(h[56]),x[54]=Q(h[59]),x[55]=Q(h[61]),x[56]=Q(h[35]),x[57]=Q(h[36]),x[58]=Q(h[48]),x[59]=Q(h[49]),x[60]=Q(h[57]),x[61]=Q(h[58]),x[62]=Q(h[62]),x[63]=Q(h[63])}function je(h){const x=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),C=.5*Math.cos(3.14159/8),P=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),k=.5*Math.cos(3*3.14159/8),K=.5*Math.cos(7*3.14159/16),q=new Array(4),ee=new Array(4),te=new Array(4),oe=new Array(4);for(let _e=0;_e<8;++_e){const ve=_e*8;q[0]=C*h[ve+2],q[1]=k*h[ve+2],q[2]=C*h[ve+6],q[3]=k*h[ve+6],ee[0]=y*h[ve+1]+P*h[ve+3]+O*h[ve+5]+K*h[ve+7],ee[1]=P*h[ve+1]-K*h[ve+3]-y*h[ve+5]-O*h[ve+7],ee[2]=O*h[ve+1]-y*h[ve+3]+K*h[ve+5]+P*h[ve+7],ee[3]=K*h[ve+1]-O*h[ve+3]+P*h[ve+5]-y*h[ve+7],te[0]=x*(h[ve+0]+h[ve+4]),te[3]=x*(h[ve+0]-h[ve+4]),te[1]=q[0]+q[3],te[2]=q[1]-q[2],oe[0]=te[0]+te[1],oe[1]=te[3]+te[2],oe[2]=te[3]-te[2],oe[3]=te[0]-te[1],h[ve+0]=oe[0]+ee[0],h[ve+1]=oe[1]+ee[1],h[ve+2]=oe[2]+ee[2],h[ve+3]=oe[3]+ee[3],h[ve+4]=oe[3]-ee[3],h[ve+5]=oe[2]-ee[2],h[ve+6]=oe[1]-ee[1],h[ve+7]=oe[0]-ee[0]}for(let _e=0;_e<8;++_e)q[0]=C*h[16+_e],q[1]=k*h[16+_e],q[2]=C*h[48+_e],q[3]=k*h[48+_e],ee[0]=y*h[8+_e]+P*h[24+_e]+O*h[40+_e]+K*h[56+_e],ee[1]=P*h[8+_e]-K*h[24+_e]-y*h[40+_e]-O*h[56+_e],ee[2]=O*h[8+_e]-y*h[24+_e]+K*h[40+_e]+P*h[56+_e],ee[3]=K*h[8+_e]-O*h[24+_e]+P*h[40+_e]-y*h[56+_e],te[0]=x*(h[_e]+h[32+_e]),te[3]=x*(h[_e]-h[32+_e]),te[1]=q[0]+q[3],te[2]=q[1]-q[2],oe[0]=te[0]+te[1],oe[1]=te[3]+te[2],oe[2]=te[3]-te[2],oe[3]=te[0]-te[1],h[0+_e]=oe[0]+ee[0],h[8+_e]=oe[1]+ee[1],h[16+_e]=oe[2]+ee[2],h[24+_e]=oe[3]+ee[3],h[32+_e]=oe[3]-ee[3],h[40+_e]=oe[2]-ee[2],h[48+_e]=oe[1]-ee[1],h[56+_e]=oe[0]-ee[0]}function Ne(h){for(let x=0;x<64;++x){const y=h[0][x],C=h[1][x],P=h[2][x];h[0][x]=y+1.5747*P,h[1][x]=y-.1873*C-.4682*P,h[2][x]=y+1.8556*C}}function R(h,x,y){for(let C=0;C<64;++C)x[y+C]=Pf.toHalfFloat(E(h[C]))}function E(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(T,Math.abs(h)-1)}function W(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function se(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),y=new Uint8Array(Ue(x)),C=new Uint8Array(y.length);return ke(y),F(y,C),new DataView(C.buffer)}function ae(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),y=Wa(x),C=new Uint8Array(y.length);return ke(y),F(y,C),new DataView(C.buffer)}function Y(h){const x=h.viewer,y={value:h.offset.value},C=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),P=new Uint8Array(8192);let O=0;const k=new Array(h.inputChannels.length);for(let Ae=0,ye=h.inputChannels.length;Ae<ye;Ae++)k[Ae]={},k[Ae].start=O,k[Ae].end=k[Ae].start,k[Ae].nx=h.columns,k[Ae].ny=h.lines,k[Ae].size=h.type,O+=k[Ae].nx*k[Ae].ny*k[Ae].size;const K=re(x,y),q=re(x,y);if(q>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(K<=q)for(let Ae=0;Ae<q-K+1;Ae++)P[Ae+K]=Ve(x,y);const ee=new Uint16Array(65536),te=M(P,ee),oe=we(x,y);Ke(h.array,x,y,oe,C,O);for(let Ae=0;Ae<h.inputChannels.length;++Ae){const ye=k[Ae];for(let Ee=0;Ee<k[Ae].size;++Ee)He(C,ye.start+Ee,ye.nx,ye.size,ye.ny,ye.nx*ye.size,te)}Pe(ee,C,O);let _e=0;const ve=new Uint8Array(C.buffer.byteLength);for(let Ae=0;Ae<h.lines;Ae++)for(let ye=0;ye<h.inputChannels.length;ye++){const Ee=k[ye],xe=Ee.nx*Ee.size,ht=new Uint8Array(C.buffer,Ee.end*2,xe*2);ve.set(ht,_e),_e+=xe*2,Ee.end+=xe}return new DataView(ve.buffer)}function de(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),y=Wa(x),C=h.inputChannels.length*h.lines*h.columns*h.totalBytes,P=new ArrayBuffer(C),O=new DataView(P);let k=0,K=0;const q=new Array(4);for(let ee=0;ee<h.lines;ee++)for(let te=0;te<h.inputChannels.length;te++){let oe=0;switch(h.inputChannels[te].pixelType){case 1:q[0]=k,q[1]=q[0]+h.columns,k=q[1]+h.columns;for(let ve=0;ve<h.columns;++ve){const Ae=y[q[0]++]<<8|y[q[1]++];oe+=Ae,O.setUint16(K,oe,!0),K+=2}break;case 2:q[0]=k,q[1]=q[0]+h.columns,q[2]=q[1]+h.columns,k=q[2]+h.columns;for(let ve=0;ve<h.columns;++ve){const Ae=y[q[0]++]<<24|y[q[1]++]<<16|y[q[2]++]<<8;oe+=Ae,O.setUint32(K,oe,!0),K+=4}break}}return O}function ne(h){const x=h.viewer,y={value:h.offset.value},C=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),P={version:ze(x,y),unknownUncompressedSize:ze(x,y),unknownCompressedSize:ze(x,y),acCompressedSize:ze(x,y),dcCompressedSize:ze(x,y),rleCompressedSize:ze(x,y),rleUncompressedSize:ze(x,y),rleRawSize:ze(x,y),totalAcUncompressedCount:ze(x,y),totalDcUncompressedCount:ze(x,y),acCompression:ze(x,y)};if(P.version<2)throw new Error("EXRLoader.parse: "+Mt.compression+" version "+P.version+" is unsupported");const O=new Array;let k=re(x,y)-2;for(;k>0;){const ye=he(x.buffer,y),Ee=Ve(x,y),xe=Ee>>2&3,ht=(Ee>>4)-1,Qe=new Int8Array([ht])[0],Ut=Ve(x,y);O.push({name:ye,index:Qe,type:Ut,compression:xe}),k-=ye.length+3}const K=Mt.channels,q=new Array(h.inputChannels.length);for(let ye=0;ye<h.inputChannels.length;++ye){const Ee=q[ye]={},xe=K[ye];Ee.name=xe.name,Ee.compression=0,Ee.decoded=!1,Ee.type=xe.pixelType,Ee.pLinear=xe.pLinear,Ee.width=h.columns,Ee.height=h.lines}const ee={idx:new Array(3)};for(let ye=0;ye<h.inputChannels.length;++ye){const Ee=q[ye];for(let xe=0;xe<O.length;++xe){const ht=O[xe];Ee.name==ht.name&&(Ee.compression=ht.compression,ht.index>=0&&(ee.idx[ht.index]=ye),Ee.offset=ye)}}let te,oe,_e;if(P.acCompressedSize>0)switch(P.acCompression){case 0:te=new Uint16Array(P.totalAcUncompressedCount),Ke(h.array,x,y,P.acCompressedSize,te,P.totalAcUncompressedCount);break;case 1:const ye=h.array.slice(y.value,y.value+P.totalAcUncompressedCount),Ee=Wa(ye);te=new Uint16Array(Ee.buffer),y.value+=P.totalAcUncompressedCount;break}if(P.dcCompressedSize>0){const ye={array:h.array,offset:y,size:P.dcCompressedSize};oe=new Uint16Array(ae(ye).buffer),y.value+=P.dcCompressedSize}if(P.rleRawSize>0){const ye=h.array.slice(y.value,y.value+P.rleCompressedSize),Ee=Wa(ye);_e=Ue(Ee.buffer),y.value+=P.rleCompressedSize}let ve=0;const Ae=new Array(q.length);for(let ye=0;ye<Ae.length;++ye)Ae[ye]=new Array;for(let ye=0;ye<h.lines;++ye)for(let Ee=0;Ee<q.length;++Ee)Ae[Ee].push(ve),ve+=q[Ee].width*h.type*2;Oe(ee,Ae,q,te,oe,C);for(let ye=0;ye<q.length;++ye){const Ee=q[ye];if(!Ee.decoded)switch(Ee.compression){case 2:let xe=0,ht=0;for(let Qe=0;Qe<h.lines;++Qe){let Ut=Ae[ye][xe];for(let Et=0;Et<Ee.width;++Et){for(let it=0;it<2*Ee.type;++it)C[Ut++]=_e[ht+it*Ee.width*Ee.height];ht++}xe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(C.buffer)}function he(h,x){const y=new Uint8Array(h);let C=0;for(;y[x.value+C]!=0;)C+=1;const P=new TextDecoder().decode(y.slice(x.value,x.value+C));return x.value=x.value+C+1,P}function Ge(h,x,y){const C=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+y));return x.value=x.value+y,C}function fe(h,x){const y=Se(h,x),C=we(h,x);return[y,C]}function me(h,x){const y=we(h,x),C=we(h,x);return[y,C]}function Se(h,x){const y=h.getInt32(x.value,!0);return x.value=x.value+4,y}function we(h,x){const y=h.getUint32(x.value,!0);return x.value=x.value+4,y}function Te(h,x){const y=h[x.value];return x.value=x.value+1,y}function Ve(h,x){const y=h.getUint8(x.value);return x.value=x.value+1,y}const ze=function(h,x){let y;return"getBigInt64"in DataView.prototype?y=Number(h.getBigInt64(x.value,!0)):y=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,y};function $e(h,x){const y=h.getFloat32(x.value,!0);return x.value+=4,y}function B(h,x){return Pf.toHalfFloat($e(h,x))}function Q(h){const x=(h&31744)>>10,y=h&1023;return(h>>15?-1:1)*(x?x===31?y?NaN:1/0:Math.pow(2,x-15)*(1+y/1024):6103515625e-14*(y/1024))}function re(h,x){const y=h.getUint16(x.value,!0);return x.value+=2,y}function ce(h,x){return Q(re(h,x))}function be(h,x,y,C){const P=y.value,O=[];for(;y.value<P+C-1;){const k=he(x,y),K=Se(h,y),q=Ve(h,y);y.value+=3;const ee=Se(h,y),te=Se(h,y);O.push({name:k,pixelType:K,pLinear:q,xSampling:ee,ySampling:te})}return y.value+=1,O}function Ce(h,x){const y=$e(h,x),C=$e(h,x),P=$e(h,x),O=$e(h,x),k=$e(h,x),K=$e(h,x),q=$e(h,x),ee=$e(h,x);return{redX:y,redY:C,greenX:P,greenY:O,blueX:k,blueY:K,whiteX:q,whiteY:ee}}function et(h,x){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],C=Ve(h,x);return y[C]}function vt(h,x){const y=Se(h,x),C=Se(h,x),P=Se(h,x),O=Se(h,x);return{xMin:y,yMin:C,xMax:P,yMax:O}}function Ft(h,x){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],C=Ve(h,x);return y[C]}function Ie(h,x){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],C=Ve(h,x);return y[C]}function Xe(h,x){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],C=["ROUND_DOWN","ROUND_UP"],P=we(h,x),O=we(h,x),k=Ve(h,x);return{xSize:P,ySize:O,levelMode:y[k&15],roundingMode:C[k>>4]}}function rt(h,x){const y=$e(h,x),C=$e(h,x);return[y,C]}function De(h,x){const y=$e(h,x),C=$e(h,x),P=$e(h,x);return[y,C,P]}function nt(h,x,y,C,P){if(C==="string"||C==="stringvector"||C==="iccProfile")return Ge(x,y,P);if(C==="chlist")return be(h,x,y,P);if(C==="chromaticities")return Ce(h,y);if(C==="compression")return et(h,y);if(C==="box2i")return vt(h,y);if(C==="envmap")return Ie(h,y);if(C==="tiledesc")return Xe(h,y);if(C==="lineOrder")return Ft(h,y);if(C==="float")return $e(h,y);if(C==="v2f")return rt(h,y);if(C==="v3f")return De(h,y);if(C==="int")return Se(h,y);if(C==="rational")return fe(h,y);if(C==="timecode")return me(h,y);if(C==="preview")return y.value+=P,"skipped";y.value+=P}function Ye(h,x){const y=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function tt(h,x,y){let C=0;switch(h.levelMode){case"ONE_LEVEL":C=1;break;case"MIPMAP_LEVELS":C=Ye(Math.max(x,y),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return C}function Bt(h,x,y,C){const P=new Array(h);for(let O=0;O<h;O++){const k=1<<O;let K=x/k|0;C=="ROUND_UP"&&K*k<x&&(K+=1);const q=Math.max(K,1);P[O]=(q+y-1)/y|0}return P}function ot(){const h=this,x=h.offset,y={value:0};for(let C=0;C<h.tileCount;C++){const P=Se(h.viewer,x),O=Se(h.viewer,x);x.value+=8,h.size=we(h.viewer,x);const k=P*h.blockWidth,K=O*h.blockHeight;h.columns=k+h.blockWidth>h.width?h.width-k:h.blockWidth,h.lines=K+h.blockHeight>h.height?h.height-K:h.blockHeight;const q=h.columns*h.totalBytes,te=h.size<h.lines*q?h.uncompress(h):W(h);x.value+=h.size;for(let oe=0;oe<h.lines;oe++){const _e=oe*h.columns*h.totalBytes;for(let ve=0;ve<h.inputChannels.length;ve++){const Ae=Mt.channels[ve].name,ye=h.channelByteOffsets[Ae]*h.columns,Ee=h.decodeChannels[Ae];if(Ee===void 0)continue;y.value=_e+ye;const xe=(h.height-(1+K+oe))*h.outLineWidth;for(let ht=0;ht<h.columns;ht++){const Qe=xe+(ht+k)*h.outputChannels+Ee;h.byteArray[Qe]=h.getter(te,y)}}}}}function Pt(){const h=this,x=h.offset,y={value:0};for(let C=0;C<h.height/h.blockHeight;C++){const P=Se(h.viewer,x)-Mt.dataWindow.yMin;h.size=we(h.viewer,x),h.lines=P+h.blockHeight>h.height?h.height-P:h.blockHeight;const O=h.columns*h.totalBytes,K=h.size<h.lines*O?h.uncompress(h):W(h);x.value+=h.size;for(let q=0;q<h.blockHeight;q++){const ee=C*h.blockHeight,te=q+h.scanOrder(ee);if(te>=h.height)continue;const oe=q*O,_e=(h.height-1-te)*h.outLineWidth;for(let ve=0;ve<h.inputChannels.length;ve++){const Ae=Mt.channels[ve].name,ye=h.channelByteOffsets[Ae]*h.columns,Ee=h.decodeChannels[Ae];if(Ee!==void 0){y.value=oe+ye;for(let xe=0;xe<h.columns;xe++){const ht=_e+xe*h.outputChannels+Ee;h.byteArray[ht]=h.getter(K,y)}}}}}}function Yt(h,x,y){const C={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");C.version=h.getUint8(4);const P=h.getUint8(5);C.spec={singleTile:!!(P&2),longName:!!(P&4),deepFormat:!!(P&8),multiPart:!!(P&16)},y.value=8;let O=!0;for(;O;){const k=he(x,y);if(k==0)O=!1;else{const K=he(x,y),q=we(h,y),ee=nt(h,x,y,K,q);ee===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${K}'.`):C[k]=ee}}if((P&-7)!=0)throw console.error("THREE.EXRHeader:",C),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return C}function bt(h,x,y,C,P){const O={size:0,viewer:x,array:y,offset:C,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:sr};switch(h.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=W;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=se;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=ae;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=ae;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=Y;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=de;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=ne;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=ne;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const k={};for(const te of h.channels)switch(te.name){case"Y":case"R":case"G":case"B":case"A":k[te.name]=!0,O.type=te.pixelType}let K=!1;if(k.R&&k.G&&k.B)K=!k.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(k.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(P){case ni:O.getter=ce;break;case ji:O.getter=re;break}else if(O.type==2)switch(P){case ni:O.getter=$e;break;case ji:O.getter=B}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+h.compression+".");O.columns=O.width;const q=O.width*O.height*O.outputChannels;switch(P){case ni:O.byteArray=new Float32Array(q),K&&O.byteArray.fill(1,0,q);break;case ji:O.byteArray=new Uint16Array(q),K&&O.byteArray.fill(15360,0,q);break;default:console.error("THREE.EXRLoader: unsupported type: ",P);break}let ee=0;for(const te of h.channels)O.decodeChannels[te.name]!==void 0&&(O.channelByteOffsets[te.name]=ee),ee+=te.pixelType*2;if(O.totalBytes=ee,O.outLineWidth=O.width*O.outputChannels,h.lineOrder==="INCREASING_Y"?O.scanOrder=te=>te:O.scanOrder=te=>O.height-1-te,O.outputChannels==4?(O.format=ii,O.colorSpace=sr):(O.format=ph,O.colorSpace=Qn),h.spec.singleTile){O.blockHeight=h.tiles.ySize,O.blockWidth=h.tiles.xSize;const te=tt(h.tiles,O.width,O.height),oe=Bt(te,O.width,h.tiles.xSize,h.tiles.roundingMode),_e=Bt(te,O.height,h.tiles.ySize,h.tiles.roundingMode);O.tileCount=oe[0]*_e[0];for(let ve=0;ve<te;ve++)for(let Ae=0;Ae<_e[ve];Ae++)for(let ye=0;ye<oe[ve];ye++)ze(x,C);O.decode=ot.bind(O)}else{O.blockWidth=O.width;const te=Math.ceil(O.height/O.blockHeight);for(let oe=0;oe<te;oe++)ze(x,C);O.decode=Pt.bind(O)}return O}const Tt={value:0},St=new DataView(e),Mn=new Uint8Array(e),Mt=Yt(St,e,Tt),Wt=bt(Mt,St,Mn,Tt,this.type);return Wt.decode(),{header:Mt,width:Wt.width,height:Wt.height,data:Wt.byteArray,format:Wt.format,colorSpace:Wt.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=un,o.magFilter=un,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,i)}}async function Yr(r){const t=await(await fetch(r)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],i=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),s=i.vertexCount,o=i.indexCount;let a=4+n;const l=new Oi,c=i.attributes;for(let u=0,f=c.length;u<f;u++){const d=c[u],p=d.id,g=p==="indices"?o:s,v=d.componentSize,_=globalThis[d.storageType],m=new _(t,a,g*v),b=_.BYTES_PER_ELEMENT;let w;if(d.needsPack){const S=d.packedComponents,L=S.length,D=d.storageType.indexOf("Int")===0,A=1<<b*8,I=D?A*.5:0,T=1/A;w=new Float32Array(g*v);for(let M=0,U=0;M<g;M++)for(let z=0;z<L;z++){const V=S[z];w[U]=(m[U]+I)*T*V.delta+V.from,U++}}else w=m;if(p==="indices"){let S=w;w instanceof Uint8Array&&(S=new Uint16Array(w.length),S.set(w)),l.setIndex(new oi(S,1))}else l.setAttribute(p,new oi(w,v));a+=g*v*b}return l.computeBoundingSphere(),l}const Xa=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Tc={density:1,friction:2,restitution:.8},sE=40,Jr=8,oE=`
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
`,aE=`
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
uniform vec4 u_nearPositionRadiusList[${Jr}];
uniform vec3 u_nearColorList[${Jr}];

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

  for (int i = 0; i < ${Jr}; i++) {
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
  gi /= float(${Jr});

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
`,lE=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,cE=`
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
`;function uE(r){const e={...Tc},t={...Tc},n={...Tc};return[{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function hE(r){let e=0;for(let t=0;t<r.length;t++)e=e*31+r.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function ld(r,e,t,n,i){const s=Math.max(0,Math.min(1,(r-e)/(t-e||1)));return n+(i-n)*s}class fE{constructor(e,t,n,i,s,o=!1){this.position=new j((s()-.5)*12,(s()-.5)*12,o?7+s():(s()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new or().setFromEuler(new Ni(s()*Math.PI,s()*Math.PI,s()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=i,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new j,this.gravityAcc=new j}applyImpulse(){this.velocity.add(new j((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(sE),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function dE(r,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Xa.length),i=Xa[n];const s=new Sm,o=new Kn(25,1,.1,100);o.position.set(0,0,25);const a=new xm({canvas:r,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=sr,a.toneMapping=er;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,f=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[d,p]=await Promise.all([Yr(u),new Promise((F,Ue)=>{new rE().load(f,F,void 0,Ue)})]);p.minFilter=un,p.magFilter=un,p.generateMipmaps=!1,p.colorSpace=Qn;const g=new j(10,10,5),v=uE(i),_=hE("balloonBody-25"),m=[],b=[],w=[],S=[],L=Array.from({length:Jr},()=>new kt(0,0,-999,.01)),D=Array.from({length:Jr},()=>new mt(1118481)),A=F=>new gi({uniforms:{u_matcap:{value:p},u_color:{value:new mt(F.color)},u_bgColor:{value:new mt(1316117)},u_roughness:{value:F.isRough?.8:.1},u_lightPosition:{value:g},u_selfPositionRadius:{value:new kt(0,0,0,1)},u_selfRotation:{value:new kt(0,0,0,1)},u_nearPositionRadiusList:{value:L.map(Ue=>Ue.clone())},u_nearColorList:{value:D.map(Ue=>Ue.clone())}},vertexShader:oE,fragmentShader:aE});for(const F of v){const Ue=A(F),Oe=new xn(d,Ue);Oe.frustumCulled=!1,Oe.scale.setScalar(F.radius),s.add(Oe),b.push(Oe),w.push(Ue),m.push(new fE(F.radius,F.density,F.friction,F.restitution,_,!1)),S.push({i:b.length-1,d2:0})}const I=new gi({uniforms:{u_color0:{value:new mt(i)},u_color1:{value:new mt(1316117)},u_aspect:{value:1}},vertexShader:lE,fragmentShader:cE,depthWrite:!1}),T=new xn(new ao(90,60),I);T.position.z=-12,T.renderOrder=-1e3,s.add(T);const M=new Rt(0,0),U=new j,z=new j,V=new j,Z=new j,J=new j,$=new j,X=new j,H=new j,le=new j,N=new j,Me=new or,Fe=.025,Je=.1,ie=.12,ue=F=>{const Ue=(e||r).getBoundingClientRect();M.x=(F.clientX-Ue.left)/Ue.width*2-1,M.y=-((F.clientY-Ue.top)/Ue.height*2-1)};window.addEventListener("pointermove",ue);const ge=()=>{n=(n+1)%Xa.length,i=Xa[n],b.forEach((F,Ue)=>{const Oe=v[Ue];Oe.isColored&&(F.material.uniforms.u_color.value.set(i),Oe.color=i)}),I.uniforms.u_color0.value.set(i),m.forEach(F=>F.applyImpulse())},pe=()=>ge();r.addEventListener("click",pe),e==null||e.addEventListener("click",pe);const Re=()=>{const F=e||r.parentElement,Ue=F.clientWidth,Oe=F.clientHeight,G=Ue/Math.max(Oe,1);o.fov=ld(G,2.2,2/3,18,30),o.aspect=G,o.updateProjectionMatrix(),a.setSize(Ue,Oe,!1),I.uniforms.u_aspect.value=G};Re(),window.addEventListener("resize",Re);let He=0,Ze=performance.now();const Ke=performance.now(),Pe=()=>{const Ue=(e||r).getBoundingClientRect();l=Ue.bottom>0&&Ue.top<window.innerHeight};window.addEventListener("scroll",Pe,{passive:!0}),Pe();const ke=F=>{if(He=requestAnimationFrame(ke),!l){Ze=F;return}let Ue=Math.min(.05,(F-Ze)/1e3);Ze=F;const Oe=t?1:2;Ue/=Oe;const G=(F-Ke)/1e3,Be=ld(G,.3,2,25,17.5);o.position.z=Be;for(let je=0;je<Oe;je++){const Ne=new j(M.x,M.y,.5).unproject(o);Ne.sub(o.position).normalize();const R=(0-o.position.z)/Ne.z;U.copy(o.position).addScaledVector(Ne,R),V.copy(U).sub(z).multiplyScalar(ie/Math.max(Ue,.001)),Z.copy(U).sub(o.position);const E=Z.lengthSq()||1;z.copy(U);for(let W=0;W<m.length;W++){const se=m[W];se.updateGravity(Ue),$.copy(se.velocity),X.copy(se.position);for(let ne=W+1;ne<m.length;ne++){const he=m[ne];le.copy(he.velocity),N.copy(he.position),J.copy(X).sub(N);const Ge=J.length(),fe=se.radius+he.radius;if(Ge<fe&&Ge>1e-6){const me=Math.sqrt(se.friction*he.friction);se.frictionTot+=me,he.frictionTot+=me,J.normalize(),J.multiplyScalar(.5*(Ge-fe)),X.sub(J),N.add(J),J.normalize();const Se=$.dot(J),we=le.dot(J),Te=se.mass,Ve=he.mass,ze=(Te*Se+Ve*we-Ve*(Se-we)*se.restitution)/(Te+Ve),$e=(Te*Se+Ve*we-Te*(we-Se)*he.restitution)/(Te+Ve);$.addScaledVector(J,(ze-Se)/(1+me)),le.addScaledVector(J,($e-we)/(1+me)),he.position.copy(N),he.velocity.copy(le)}}H.copy(X).sub(o.position);let ae=H.dot(Z)/E;ae=H.sub(le.copy(Z).multiplyScalar(ae)).length()-se.radius-Fe,ae<0&&(H.copy(X).sub(o.position).cross(Z).normalize(),le.copy(Z).cross(H).normalize(),X.sub(le.multiplyScalar(Je*ae)),le.multiplyScalar(-ie/Math.max(Ue,.001)),$.add(le),$.add(V));let Y=X.length();if(Y>0){H.set(1,1,1).normalize();let ne=1-Math.abs(H.dot(le.copy(X).normalize()));ne*=Ue*Math.min(1,Math.max(0,Y/2))*.5,ne*=W%2*2-1,Me.setFromAxisAngle(H,ne),le.copy(X).applyQuaternion(Me).sub(H.copy(X)),$.add(le)}H.crossVectors(X,$);let de=H.length();de/=se.inertia,de>0&&(H.normalize(),Me.setFromAxisAngle(H,de*Ue),se.quaternion.premultiply(Me)),se.position.copy(X),se.velocity.copy($),se.update(Ue),["x","y","z"].forEach(ne=>{const he=ne==="z"?5.5:7.5;se.position[ne]>he&&(se.position[ne]=he,se.velocity[ne]*=-.55),se.position[ne]<-he&&(se.position[ne]=-he,se.velocity[ne]*=-.55)})}}for(let je=0;je<b.length;je++){const Ne=b[je],R=m[je];Ne.position.copy(R.position),Ne.quaternion.copy(R.quaternion);const E=w[je].uniforms;E.u_selfPositionRadius.value.set(R.position.x,R.position.y,R.position.z,R.radius),E.u_selfRotation.value.set(R.quaternion.x,R.quaternion.y,R.quaternion.z,R.quaternion.w),E.u_bgColor.value.copy(I.uniforms.u_color1.value)}for(let je=0;je<b.length;je++){for(let E=0;E<b.length;E++)S[E].i=E,S[E].d2=je===E?0:m[je].position.distanceToSquared(m[E].position);S.sort((E,W)=>E.d2-W.d2);const Ne=w[je].uniforms.u_nearPositionRadiusList.value,R=w[je].uniforms.u_nearColorList.value;for(let E=0;E<Jr;E++){const W=S[E+1]?S[E+1].i:S[0].i,se=m[W];Ne[E].set(se.position.x,se.position.y,se.position.z,se.radius),R[E].copy(w[W].uniforms.u_color.value)}}o.position.x+=(M.x*.9-o.position.x)*.04,o.position.y+=(M.y*.55-o.position.y)*.04,o.lookAt(0,0,0),a.render(s,o)};return He=requestAnimationFrame(ke),{cycleColor:ge,destroy(){cancelAnimationFrame(He),window.removeEventListener("pointermove",ue),window.removeEventListener("resize",Re),window.removeEventListener("scroll",Pe),r.removeEventListener("click",pe),e==null||e.removeEventListener("click",pe),w.forEach(F=>F.dispose()),I.dispose(),a.dispose()}}}const cd=[{id:"blackFrameShow",weight:.25},{id:"blackFrameIn",weight:.4},{id:"blackTitle",weight:3.2},{id:"blackTunnel",weight:6},{id:"whiteTunnel",weight:2.2},{id:"whiteFrameOut",weight:.9},{id:"whiteFrameBreak",weight:1},{id:"astronautDrop",weight:1.2},{id:"astronautWait",weight:.5}];function xt(r,e,t,n,i){const s=Math.max(0,Math.min(1,(r-e)/(t-e||1)));return n+(i-n)*s}function ll(r){return r*r*r}function Cm(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2}function Rm(r){const e=cd.reduce((a,l)=>a+l.weight,0),t={};let n=0;for(const a of cd){const l=a.weight/e;t[a.id]={...a,from:n,to:n+l},n+=l}function i(){const a=r.getBoundingClientRect(),l=window.innerHeight,c=a.height-l;return Math.max(0,Math.min(1,-a.top/Math.max(c,1)))}function s(a,l=a){const c=t[a],u=t[l],f=i(),d=c.from,p=u.to,g=(f-d)/Math.max(p-d,1e-6);return{ratio:Math.max(0,Math.min(1,g)),raw:g,active:f>=d&&f<=p,global:f}}function o(a,l){return s(a,l)}return{items:t,progress:i,range:s,between:o,totalWeight:e}}const ud=53,Ya=16,hd=["helmet","helmet_glass","glove_shoes","wearpack"];function fd(r){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=r})}async function pE(r,e){const[t,n]=await Promise.all([fd(r),fd(e)]),i=document.createElement("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d",{willReadFrequently:!0});s.drawImage(n,0,0,i.width,i.height);const o=s.getImageData(0,0,i.width,i.height);s.clearRect(0,0,i.width,i.height),s.drawImage(t,0,0,i.width,i.height);const a=s.getImageData(0,0,i.width,i.height);for(let c=0;c<a.data.length;c+=4)a.data[c+3]=o.data[c];s.putImageData(a,0,0);const l=new Oy(i);return l.colorSpace=Qn,l.flipY=!1,l.needsUpdate=!0,l}function dd(r,e,t){const n=new Mm(r,e,t,ii,ni);return n.magFilter=Dn,n.minFilter=Dn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}const mE=`
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
`,_E=`
uniform sampler2D u_armbTexture;
uniform sampler2D u_norTexture;
uniform sampler2D u_matcapTexture;
uniform sampler2D u_envTexture;
uniform vec3 u_ambientColor;
uniform vec3 u_bgColor;
uniform vec3 u_sunPosition;
uniform float u_showRatio;
uniform float u_whiteTunnelRatio;
uniform float u_frameOutRatio;
varying vec3 v_worldPosition;
varying vec4 v_worldTangent;
varying vec3 v_worldNormal;
varying vec2 v_uv;
varying float v_ao;
varying vec3 v_viewPosition;

float linearStep(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}
#ifndef saturate
#define saturate(a) clamp(a, 0.0, 1.0)
#endif

void main() {
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

  vec3 viewDir = normalize(v_worldPosition);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, worldNormal), dot(y, worldNormal)) * 0.495 + 0.5;

  float zAxisShading = linearStep(-0.2, 1.3, worldNormal.z) * (0.65 + ao * 0.35);
  float outOfFrameRatio = linearStep(0.35, 1.0, u_frameOutRatio);
  vec3 L = normalize(u_sunPosition - v_worldPosition);
  float sunNdL = saturate(dot(N, L));
  float matcapSample = texture2D(u_matcapTexture, uv).r;
  float matcapShading = 0.35 + 0.65 * (1.0 - matcapSample);
  float metalMask = 1.0 - metalness;

  // base suit albedo (grayscale map) with cooler ambient like Lusion
  vec3 color = vec3(albedo * matcapShading);
  color += 0.55 * zAxisShading * albedo;
  color *= u_ambientColor * (0.75 + sunNdL * 0.55);
  color *= metalMask * 0.92 + 0.08;
  color += metalMask * (0.28 + 0.35 * sunNdL) * albedo;
  color *= 0.55 + 0.45 * ao;
  // subtle env reflection on metals / helmet edges
  color += (0.25 + 0.75 * metalness) * texture2D(u_envTexture, uv).rgb * 0.35 * outOfFrameRatio;
  // rim light so silhouette reads against white tunnel
  float rim = pow(1.0 - saturate(abs(dot(N, normalize(cameraPosition - v_worldPosition)))), 2.0);
  color += rim * 0.22 * vec3(0.75, 0.82, 0.95);

  gl_FragColor.rgb = mix(u_bgColor, color, vec3(clamp(u_showRatio, 0.15, 1.0)));
  gl_FragColor.a = 1.0;
}
`,gE=`
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
`,vE=`
attribute float a_instanceId;
uniform float u_ratio;
uniform float u_ratioInverse;
varying vec3 v_worldNormal;
varying vec2 v_uv;
varying float v_fog;
varying float v_lengthRatio;

vec3 deform(in vec3 pos) {
  float blockCount = float(BLOCK_COUNT);
  float ratio = mix(0.1, 1.0, u_ratioInverse);
  float lengthRatio = -pos.z / blockCount;
  float scalar = mix(0.25, ratio, lengthRatio);
  pos.x *= 1.0 + scalar * 0.5 * sin(lengthRatio * 6.283184);
  pos.y *= 1.0 + scalar * 0.5 * cos(lengthRatio * 6.283184 + 3.1415926);
  float angleRatio = smoothstep(0.25, 1.0, u_ratioInverse);
  float angle = (angleRatio + angleRatio * lengthRatio * lengthRatio) * -6.283184;
  float s = sin(angle);
  float c = cos(angle);
  mat2 m = mat2(c, -s, s, c);
  pos.xy = m * pos.xy;
  pos.y += ratio * sin(ratio * lengthRatio * 3.141592 * 4.0) * 0.25;
  pos.z -= (cos(ratio * 1.5 + (1.0 - ratio) * lengthRatio * 3.141592 * 0.5) * 0.5 + 0.5 - 1.0) * blockCount;
  pos.z *= 1.0 + 16.0 * (ratio * lengthRatio * lengthRatio) + 2.0 * ratio * (sin(8.0 * lengthRatio) * 0.5 + 0.5);
  pos.z *= (1.0 - ratio * ratio * ratio) * 0.9 + 0.1;
  pos.z += blockCount / 4.0;
  return pos * 15.0;
}
vec3 inverseTransformDirection(in vec3 dir, in mat4 matrix) {
  return normalize((vec4(dir, 0.0) * matrix).xyz);
}
void main() {
  float blockCount = float(BLOCK_COUNT);
  vec3 pos = position;
  pos.z -= a_instanceId;
  pos.z /= blockCount;
  float lengthRatio = -pos.z;
  pos.z *= blockCount;
  v_lengthRatio = lengthRatio;
  vec3 nor = deform(pos + normal * 0.01);
  pos = deform(pos);
  nor = normalize(nor - pos);
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  v_fog = -0.005 * mvPosition.z / mvPosition.w;
  gl_Position = projectionMatrix * mvPosition;
  v_worldNormal = inverseTransformDirection(normalMatrix * nor, viewMatrix);
  v_uv = uv;
}
`,xE=`
uniform sampler2D u_texture;
uniform float u_ratioInverse;
varying vec3 v_worldNormal;
varying vec2 v_uv;
varying float v_fog;
varying float v_lengthRatio;
void main() {
  vec3 N = normalize(v_worldNormal);
  vec4 tex = texture2D(u_texture, v_uv);
  float shade = 0.55 + 0.45 * abs(N.y);
  vec3 color = tex.rgb * shade;
  color = mix(color, vec3(0.92, 0.93, 0.95), 0.15);
  float fog = smoothstep(0.0, 1.2, v_fog + v_lengthRatio * 0.35);
  color = mix(color, vec3(0.94), fog * 0.65);
  float alpha = mix(1.0, 0.35, fog) * mix(0.4, 1.0, u_ratioInverse);
  gl_FragColor = vec4(color, alpha);
}
`;async function SE(r,e,t){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,i="/zyrax-studio/",[s,o,a,l,c,u,f,d,...p]=await Promise.all([Yr(`${i}assets/models/tunnels/astronaut_animations.buf`),Yr(`${i}assets/models/tunnels/astronaut_in_animation.buf`),Yr(`${i}assets/models/tunnels/astronaut_out_animation.buf`),new Ga().loadAsync(`${i}assets/textures/tunnels/white_matcap.jpg`),new Ga().loadAsync(`${i}assets/textures/tunnels/earth.webp`),new Ga().loadAsync(`${i}assets/textures/tunnels/white_block.webp`),Yr(`${i}assets/models/tunnels/tunnel_block_base.buf`),Yr(`${i}assets/models/tunnels/tunnel_block_wall.buf`),...hd.map(Y=>Yr(`${i}assets/models/tunnels/astronaut_${Y}.buf`))]),g=new Sm;g.background=new mt(15790586);const v=new Kn(45,1,.1,400);v.position.set(0,0,28);let _;try{_=new xm({canvas:r,antialias:!n,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(Y){throw console.error("Goal WebGL unavailable",Y),Y}_.setClearColor(15790586,1),_.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1:1.35)),_.outputColorSpace=Cn,l.colorSpace=Qn,c.colorSpace=Cn,u.colorSpace=Cn,u.wrapS=u.wrapT=Ml;const m=s.attributes.position.array,b=s.attributes.orient.array,w=m.length/3,S=w/ud,L=Math.ceil(Math.sqrt(w)),D=Math.ceil(w/L),A=L*D,I=new Float32Array(A*4),T=new Float32Array(A*4);for(let Y=0,de=0,ne=0;Y<w;Y++,de+=3,ne+=4)I[ne]=m[de],I[ne+1]=m[de+1],I[ne+2]=m[de+2],I[ne+3]=1,T[ne]=b[ne],T[ne+1]=b[ne+1],T[ne+2]=b[ne+2],T[ne+3]=b[ne+3];const M=dd(I,L,D),U=dd(T,L,D),z=new vo(new Float32Array([0,0,18]),3);z.setUsage(ya);const V=new vo(new Float32Array([0,0,0,1]),4);V.setUsage(ya);const Z=new vo(new Float32Array([0,1,0]),3);Z.setUsage(ya);const J=new vo(new Float32Array([90,91,0]),3);J.setUsage(ya);const $={u_animationPositionTexture:{value:M},u_animationOrientTexture:{value:U},u_animationTextureSize:{value:new Rt(L,D)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:l},u_envTexture:{value:c},u_ambientColor:{value:new mt("#566d80")},u_bgColor:{value:new mt("#f0f1fa")},u_sunPosition:{value:new j(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0}},X={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async Y=>{const[de,ne]=await Promise.all([pE(`${i}assets/textures/tunnels/astronaut/astronaut_${Y}_arm.webp`,`${i}assets/textures/tunnels/astronaut/astronaut_${Y}_base.webp`),new Ga().loadAsync(`${i}assets/textures/tunnels/astronaut/astronaut_${Y}_nor.webp`)]);ne.colorSpace=Qn,ne.flipY=!1,X[Y]={armb:de,nor:ne}})),X.helmet_glass=X.helmet;const H=new jr;g.add(H),hd.forEach((Y,de)=>{const ne=p[de],he=new ad;for(const Te in ne.attributes)he.setAttribute(Te,ne.attributes[Te]);ne.index&&he.setIndex(ne.index),he.instanceCount=1,he.setAttribute("instancePos",z),he.setAttribute("instanceOrient",V),he.setAttribute("instanceAnimationFrameFromToBlend1",Z),he.setAttribute("instanceAnimationFrameFromToBlend2",J);const Ge=Y==="helmet_glass"||Y==="card"?"helmet":Y,fe=Y==="helmet_glass",me={...$,u_armbTexture:{value:X[Ge].armb},u_norTexture:{value:X[Ge].nor}},Se=new gi({uniforms:me,vertexShader:mE,fragmentShader:fe?gE:_E,transparent:fe,side:Ri,defines:{BONE_COUNT:ud}}),we=new xn(he,Se);we.frustumCulled=!1,H.add(we)});const le=new jr;g.add(le);const N=(Y,de)=>{const ne=new ad;for(const me in Y.attributes)ne.setAttribute(me,Y.attributes[me]);Y.index&&ne.setIndex(Y.index);const he=new Float32Array(Ya);for(let me=0;me<Ya;me++)he[me]=me;ne.setAttribute("a_instanceId",new vo(he,1)),ne.instanceCount=Ya;const Ge=new gi({uniforms:{u_texture:{value:u},u_ratio:{value:0},u_ratioInverse:{value:1}},vertexShader:vE,fragmentShader:xE,transparent:!0,defines:{BLOCK_COUNT:Ya,...de?{IS_WALL:1}:{}}}),fe=new xn(ne,Ge);return fe.frustumCulled=!1,le.add(fe),Ge},Me=N(f,!1),Fe=N(d,!0),Je=new Ho({color:723730}),ie=new xn(new ao(120,120),Je);ie.position.z=-50,g.add(ie);const ue=new jr;g.add(ue);const ge=new Sh(6.2,.045,8,48),pe=new Ho({color:2765636,transparent:!0,opacity:.55});for(let Y=0;Y<28;Y++){const de=new xn(ge,pe);de.position.z=-Y*3.2,de.rotation.x=Math.PI/2,ue.add(de)}const Re=new Ho({color:5935359,transparent:!0,opacity:.08});for(let Y=0;Y<12;Y++){const de=new xn(new oo(.04,.04,70),Re),ne=Y/12*Math.PI*2;de.position.set(Math.cos(ne)*5.6,Math.sin(ne)*5.6,-35),ue.add(de)}(t?Array.from(t.querySelectorAll(".home-goal-tunnel-title-line")):[]).forEach(Y=>{const de=Y.textContent.trim().split(/\s+/);Y.innerHTML=de.map(ne=>`<span class="goal-word">${ne}</span>`).join(" ")});const Ze=r.parentElement||e,Ke=Rm(e);let Pe=0,ke=0,F=0,Ue=0,Oe=0,G=0,Be=0,je=performance.now(),Ne=!1;const R=()=>{const Y=Ze,de=Y.clientWidth||window.innerWidth,ne=Y.clientHeight||window.innerHeight;v.aspect=de/Math.max(ne,1),v.updateProjectionMatrix(),_.setSize(de,ne,!1)};R(),window.addEventListener("resize",R);const E=(Y,de)=>{const ne=Y.attributes.position.array,he=Y.attributes.orient.array,Ge=ne.length/3,fe=Math.max(0,Math.min(Ge-1.0001,de*(Ge-1))),me=Math.floor(fe),Se=Math.min(Ge-1,me+1),we=fe-me,Te=new j().fromArray(ne,me*3).lerp(new j().fromArray(ne,Se*3),we),Ve=new or().fromArray(he,me*4).slerp(new or().fromArray(he,Se*4),we);return{p:Te,q:Ve}},W=()=>{if(!e)return;e.getBoundingClientRect();const Y=window.innerHeight;F=Ke.range("blackTitle").ratio,Ue=Ke.range("blackTunnel").ratio,Pe=Ke.between("whiteTunnel","whiteFrameOut").ratio;const de=Ke.range("whiteFrameOut").ratio;Oe=Ke.range("astronautDrop").ratio;const ne=Ke.between("whiteTunnel","astronautDrop").raw>0;Ke.between("blackTitle","blackTunnel").raw>0,ke=xt(Ke.between("blackTitle","whiteTunnel").ratio,.35,1,0,1);const he=xt(Pe,.55,1,0,1);$.u_whiteTunnelRatio.value=Pe,$.u_showRatio.value=ke,$.u_frameOutRatio.value=Math.max(he,xt(Ue,.7,1,0,1)),Me.uniforms.u_ratio.value=Pe,Fe.uniforms.u_ratio.value=Pe,Me.uniforms.u_ratioInverse.value=1-Pe,Fe.uniforms.u_ratioInverse.value=1-Pe;const Ge=xt(Pe,0,.25,0,1),fe=new mt().setStyle("#0b0b12").lerp(new mt("#f0f1fa"),Ge);Je.color.copy(fe),g.background=fe,_.setClearColor(fe,1),$.u_bgColor.value.copy(fe),le.visible=Pe>.001,ue.visible=Ue>.001&&Pe<.85,ue.position.z=xt(Ue,0,1,0,55),pe.opacity=xt(Ue,0,.15,0,.6)*xt(Pe,0,.4,1,0);const me=Pe>0||de>0||Oe>0;let Se;if(me?Pe<1?Se=E(a,xt(Pe,0,1,0,.79)):(Se=E(a,xt(Oe,0,1,.79,.99)),Se.p.y-=(n?0:.4)*ll(Oe)):Se=E(o,ll(F)),z.setXYZ(0,Se.p.x,Se.p.y,Se.p.z),V.setXYZW(0,Se.q.x,Se.q.y,Se.q.z,Se.q.w),z.needsUpdate=!0,V.needsUpdate=!0,H.visible=ke>.02,Pe>.01?(v.fov=xt(Pe,0,1,55,28),v.position.set(0,.15,xt(Pe,0,1,28,12)),v.lookAt(0,0,xt(Pe,0,1,16,-2))):Ue>.01?(v.fov=xt(Ue,0,1,50,32),v.position.set(Math.sin(Ue*Math.PI*2)*.35,.1,xt(Ue,0,1,22,4)),v.lookAt(0,0,v.position.z-18)):(v.fov=45,v.position.set(0,.2,26),v.lookAt(0,0,14)),v.updateProjectionMatrix(),t){const Ve=F,ze=xt(ll(xt(Ve,.5,1,0,1)),0,1,1,n?6:12),$e=xt(Ve,0,.05,0,1)*xt(Ve,.88,1,1,0)*xt(Ue,0,.15,1,0),B=Cm(xt(Ve,.35,.7,0,1));t.classList.toggle("is-on-black",Ge<.5),t.style.opacity=String($e),t.style.transform=`translate3d(-50%, -50%, 0) scale(${ze})`,t.querySelectorAll(".goal-word").forEach(Q=>{const re=Q.parentElement,ce=Array.from(re.querySelectorAll(".goal-word")),be=ce.indexOf(Q),Ce=(ce.length-1)/2,et=(be-Ce)*1.35*B;Q.style.transform=`translateX(${et}em)`}),t.style.visibility=$e<.02?"hidden":"visible"}const we=e.querySelector(".home-goal-texts-paragraph");if(we){const Ve=xt(Oe,.2,.9,0,1);we.style.opacity=String(Ve),we.style.transform=`translateY(${(1-Ve)*40}px)`}const Te=Ze.getBoundingClientRect();Ne=Te.bottom>0&&Te.top<Y,e.dataset.goalPhase=Pe>.01?"white":Ue>.01?"black-tunnel":"title"},se=()=>W();window.addEventListener("scroll",se,{passive:!0}),W();const ae=Y=>{Be=requestAnimationFrame(ae);const de=Math.min(.05,(Y-je)/1e3);if(je=Y,!Ne)return;const ne=Pe;let he=xt(ke,0,1,0,.75)*xt(F,.2,1,.35,1),Ge=0,fe=89;(ne>=.5||Oe>0)&&(he=xt(Math.max(ne,Oe),.85,1,.2,1),Ge=140,fe=Math.min(S-1,287)),G+=de*he;const me=fe-Ge+1,Se=G*60%me,we=Math.floor(Se)+Ge,Te=(Math.floor(Se)+1)%me+Ge,Ve=Se-Math.floor(Se);Z.setXYZ(0,we,Te,Ve),Z.needsUpdate=!0;const ze=xt(ne+ke+Ue*.25,.9,2,90,139),$e=Math.floor(ze),B=Math.ceil(ze),Q=ze-$e;J.setXYZ(0,$e,B,Q),J.needsUpdate=!0,$.u_loopLinearBlend.value=xt(ne,.35,.85,0,.7),_.render(g,v)};return Be=requestAnimationFrame(ae),requestAnimationFrame(()=>{R(),W(),_.render(g,v)}),{resize:R,updateScroll:W,destroy(){cancelAnimationFrame(Be),window.removeEventListener("resize",R),window.removeEventListener("scroll",se),_.dispose()}}}function ME(r,e,t){if(!r||!e)return{updateScroll(){},destroy(){}};Array.from(e.querySelectorAll(".home-goal-tunnel-title-line")).forEach(l=>{if(l.querySelector(".goal-word"))return;const c=l.textContent.trim().split(/\s+/);l.innerHTML=c.map(u=>`<span class="goal-word">${u}</span>`).join(" ")});const i=Rm(r),s=window.innerWidth<812,o=r.querySelector(".home-goal-texts-paragraph"),a=()=>{const l=i.range("blackTitle").ratio,c=i.range("blackTunnel").ratio,u=i.between("whiteTunnel","whiteFrameOut").ratio,f=i.range("astronautDrop").ratio,d=xt(u,0,.25,0,1),p=l,g=xt(ll(xt(p,.5,1,0,1)),0,1,1,s?6:12),v=xt(p,0,.05,0,1)*xt(p,.88,1,1,0)*xt(c,0,.15,1,0),_=Cm(xt(p,.35,.7,0,1));if(e.classList.toggle("is-on-black",d<.5),e.style.opacity=String(v),e.style.transform=`translate3d(-50%, -50%, 0) scale(${g})`,e.style.visibility=v<.02?"hidden":"visible",e.querySelectorAll(".goal-word").forEach(m=>{const b=Array.from(m.parentElement.querySelectorAll(".goal-word")),w=b.indexOf(m),S=(b.length-1)/2;m.style.transform=`translateX(${(w-S)*1.35*_}em)`}),t&&(t.style.background=d>.5?"#f0f1fa":"#0b0b12"),o){const m=xt(f,.2,.9,0,1);o.style.opacity=String(m),o.style.transform=`translateY(${(1-m)*40}px)`}return r.dataset.goalPhase=u>.01?"white":c>.01?"black-tunnel":"title",{blackTitleRatio:l,blackTunnelRatio:c,whiteTunnelRatio:u,astronautDropRatio:f,toWhite:d}};return window.addEventListener("scroll",a,{passive:!0}),a(),{updateScroll:a,ranges:i,destroy(){window.removeEventListener("scroll",a)}}}Ln.registerPlugin(ut);const yE=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),Pm=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};Pm();window.addEventListener("resize",Pm);const oa=new Wm({duration:yE?.95:1.2,smoothWheel:!0,syncTouch:!1});window.lenis=oa;oa.on("scroll",ut.update);Ln.ticker.add(r=>oa.raf(r*1e3));Ln.ticker.lagSmoothing(0);const pd=document.getElementById("project-list");pd&&(pd.innerHTML=Rg.map(r=>`
    <a class="project-item" href="${r.url}" target="_blank" rel="noreferrer">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${r.hue}"><span>${r.title}</span></div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${r.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-inner">${r.title}</div>
        </div>
      </div>
    </a>`).join(""));const EE=document.getElementById("hero-canvas"),TE=document.getElementById("home-hero-visual-container"),_r=document.getElementById("home-hero"),wc=document.getElementById("home-hero-title"),bc=document.getElementById("home-hero-visual-container"),md=document.getElementById("home-hero-scroll-container"),Dm=document.getElementById("home-goal"),wE=document.getElementById("goal-tunnel-canvas"),Lm=document.getElementById("home-goal-tunnel-title"),bE=document.getElementById("home-goal-tunnel-sticky"),AE=ME(Dm,Lm,bE);let cl=null;oa.on("scroll",()=>{if(AE.updateScroll(),cl==null||cl.updateScroll(),!_r)return;const r=_r.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-r.top/Math.max(r.height,1))),n=Math.max(0,Math.min(1,(e-r.bottom)/e));wc&&(wc.style.transform=`translate3d(0, ${t*-12}vh, 0)`,wc.style.opacity=String(Math.max(0,1-t*1.2))),bc&&(bc.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,bc.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),md&&(md.style.opacity=String(Math.max(0,1-t*2)))});SE(wE,Dm,Lm).then(r=>{cl=r}).catch(r=>{console.error("Goal tunnel failed",r)}).finally(()=>{dE(EE,TE).then(()=>_r==null?void 0:_r.classList.add("is-in")).catch(r=>{console.error("Balloons hero failed",r),_r==null||_r.classList.add("is-in")})});function Mh(r,e="word"){if(!r)return;const n=r.textContent.trim().split(/\s+/);r.textContent="",n.forEach((i,s)=>{const o=document.createElement("span");o.className=e,o.textContent=i,o.style.transitionDelay=`${s*35}ms`,r.appendChild(o),r.appendChild(document.createTextNode(" "))})}Mh(document.getElementById("home-hero-title"));Mh(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var r;(r=document.getElementById("home-hero-title"))==null||r.classList.add("is-in")});const CE=document.querySelectorAll(".home-hero-scroll-container-cross");CE.forEach((r,e)=>{r.style.transitionDelay=`${.15+e*.08}s`});document.querySelectorAll("[data-reveal]").forEach((r,e)=>{ut.create({trigger:r,start:"top 88%",onEnter:()=>{r.style.transitionDelay=`${e%4*60}ms`,r.classList.add("is-in")}})});const Fi="power3.out",RE=r=>{if(!r)return[];const e=r.textContent;return r.textContent="",[...e].map(t=>{const n=document.createElement("span");return n.className="char",n.textContent=t===" "?" ":t,n.style.transform="translate3d(0, 1em, 0) rotate(10deg)",r.appendChild(n),n})};[document.querySelector("#home-reel-title-line-1"),document.querySelector("#home-reel-title-line-2")].forEach((r,e)=>{Mh(r).forEach((n,i)=>{Ln.to(n,{y:0,opacity:1,rotate:0,duration:1.15,ease:Fi,delay:e*.12+i*.05,scrollTrigger:{trigger:"#home-reel-title",start:"top 82%"}})})});Ln.from("#home-reel-desc",{y:56,opacity:0,duration:1.1,ease:Fi,scrollTrigger:{trigger:"#home-reel-desc",start:"top 88%"}});Ln.from("#home-reel-cta",{y:28,opacity:0,duration:.9,ease:Fi,scrollTrigger:{trigger:"#home-reel-cta",start:"top 90%"}});Ln.from("#home-reel-thumb",{y:80,opacity:0,scale:.96,duration:1.2,ease:Fi,scrollTrigger:{trigger:"#home-reel-thumb",start:"top 90%"}});Ln.from("#home-reel-video-container",{y:60,scale:.94,opacity:.4,duration:1.2,ease:Fi,scrollTrigger:{trigger:"#home-reel-video",start:"top 85%"}});const PE=RE(document.getElementById("home-featured-title"));PE.forEach((r,e)=>{Ln.to(r,{y:0,rotate:0,duration:1.05,ease:Fi,delay:e*.028,scrollTrigger:{trigger:"#home-featured-title",start:"top 85%"}})});const xo=document.getElementById("home-featured-disclaimer");if(xo){const r=xo.textContent.trim();xo.innerHTML=`<span class="line">${r}</span>`,Ln.from(xo.querySelector(".line"),{yPercent:100,duration:1,ease:Fi,scrollTrigger:{trigger:xo,start:"top 88%"}})}Ln.utils.toArray(".project-item").forEach((r,e)=>{Ln.from(r,{y:90,opacity:0,duration:1.15,ease:Fi,delay:e%2*.08,scrollTrigger:{trigger:r,start:"top 92%"}})});Ln.from("#home-featured-cta",{y:40,opacity:0,duration:1,ease:Fi,scrollTrigger:{trigger:"#home-featured-cta",start:"top 92%"}});Ln.from("#home-goal-title",{y:48,opacity:0,duration:1.1,ease:Fi,scrollTrigger:{trigger:"#home-goal-title",start:"top 88%"}});const Im=document.querySelector("[data-menu]");var _d;(_d=document.querySelector("[data-menu-open]"))==null||_d.addEventListener("click",()=>{Im.hidden=!1,document.body.style.overflow="hidden"});document.querySelectorAll("[data-menu-close]").forEach(r=>{r.addEventListener("click",()=>{Im.hidden=!0,document.body.style.overflow=""})});var gd;(gd=document.querySelector("[data-reel]"))==null||gd.addEventListener("click",r=>{const e=r.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var vd;(vd=document.querySelector("[data-sound]"))==null||vd.addEventListener("click",r=>{r.currentTarget.classList.toggle("is-on")});var xd;(xd=document.querySelector("#end-bottom"))==null||xd.addEventListener("click",r=>{r.preventDefault(),oa.scrollTo("#footer-section")});
